import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,writeFile,readFile,symlink,rm} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {Client} from '@modelcontextprotocol/sdk/client/index.js';
import {StdioClientTransport} from '@modelcontextprotocol/sdk/client/stdio.js';
import {readBatch} from '../src/project.mjs';

test('bundled MCP: local source sync, stale error isolation, save setup, host rejection',async()=>{
  const scratch=await mkdtemp(path.join(os.tmpdir(),'snack-local-check-'));
  const client=new Client({name:'verification',version:'1'});
  const pluginDir=path.resolve('plugins',process.env.SNACK_TEST_PLUGIN??'snack-local');
  const config=JSON.parse(await readFile(path.join(pluginDir,'.mcp.json'),'utf8')).mcpServers.snack;
  const transport=new StdioClientTransport({...config,cwd:pluginDir,env:{...process.env,PATH:process.platform==='win32'?`${process.env.SystemRoot}\\System32;${process.env.SystemRoot}\\System32\\WindowsPowerShell\\v1.0`:'/usr/bin:/bin',SNACK_LOCAL_DATA_DIR:path.join(scratch,'credentials')},stderr:'pipe'});
  let startupErrors='';
  transport.stderr?.on('data',chunk=>{startupErrors+=chunk.toString();});
  try{
    await client.connect(transport);
    const tools=await client.listTools();assert.equal(tools.tools.length,5);
    const call=async(name,args={})=>{const r=await client.callTool({name,arguments:args});assert.ok(!r.isError,JSON.stringify(r));return JSON.parse(r.content[0].text);};
    const opened=await call('open_project',{directory:path.join(scratch,'app space ไทย'),name:'integration-probe'});
    assert.equal(opened.configured,false);assert.ok(opened.previewUrl.startsWith('http://localhost:'));
    const base=opened.previewUrl;
    const source=await readFile(path.join(scratch,'app space ไทย/App.js'),'utf8');
    assert.match(source,/My App/);
    await call('open_project',{directory:path.join(scratch,'app space ไทย')});
    assert.equal(await readFile(path.join(scratch,'app space ไทย/App.js'),'utf8'),source);
    const send=await call('sync_project');assert.deepEqual(send.changed,[]);
    await writeFile(path.join(scratch,'app space ไทย/App.js'),source+'\n// changed\n');
    const next=await call('sync_project');assert.notEqual(next.revision,opened.revision);assert.deepEqual(next.changed,['App.js']);
    assert.ok(!JSON.stringify(next).includes('import React'));
    const post=(revision,errors)=>fetch(base+'report',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({revision,errors,clients:[]})});
    await post(opened.revision,['stale']);assert.deepEqual((await call('get_status')).preview,{status:'not-connected'});
    await post(next.revision,['current']);assert.deepEqual((await call('get_status')).preview.errors,['current']);
    await call('sync_project');assert.deepEqual((await call('get_status')).preview.errors,['current']);
    const save=await call('save_project');assert.equal(save.needsSetup,true);
    const blocked=await fetch(base+'report',{method:'POST',headers:{Origin:'https://example.org','Content-Type':'application/json'},body:'{}'});assert.equal(blocked.status,403);
    assert.equal((await fetch(base+'../batch')).status,404);
    const packet=await fetch(base+'batch').then(r=>r.json());assert.equal(packet.batch.revision,next.revision);
  }catch(error){if(startupErrors)console.error(startupErrors);throw error;}finally{await client.close();await rm(scratch,{recursive:true,force:true});}
});

test('source allowlist rejects secret names and symlinks outside project',async()=>{
  const scratch=await mkdtemp(path.join(os.tmpdir(),'snack-boundary-'));
  try{
    const root=path.join(scratch,'app space ไทย');const {mkdir}=await import('node:fs/promises');await mkdir(root);
    await writeFile(path.join(root,'App.js'),'export default ()=>null;');
    const config=files=>writeFile(path.join(root,'snack.config.json'),JSON.stringify({name:'probe',files}));
    await config(['App.js','.env.json']);await assert.rejects(()=>readBatch(root),/explicitly/);
    await writeFile(path.join(scratch,'outside.js'),'private');await symlink(path.join(scratch,'outside.js'),path.join(root,'outside.js'));
    await config(['App.js','outside.js']);await assert.rejects(()=>readBatch(root),/inside/);
  }finally{await rm(scratch,{recursive:true,force:true});}
});
