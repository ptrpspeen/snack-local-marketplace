import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,writeFile,readFile,symlink,rm,mkdir} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
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
  const launchPath=process.platform==='win32'?`${process.env.SystemRoot}\\System32;${process.env.SystemRoot}\\System32\\WindowsPowerShell\\v1.0`:process.platform==='linux'?process.env.PATH:'/usr/bin:/bin';
  const transport=new StdioClientTransport({...config,cwd:pluginDir,env:{...process.env,PATH:launchPath,SNACK_LOCAL_DATA_DIR:path.join(scratch,'credentials')},stderr:'pipe'});
  let startupErrors='';
  transport.stderr?.on('data',chunk=>{startupErrors+=chunk.toString();});
  try{
    await client.connect(transport);
    const tools=await client.listTools();assert.equal(tools.tools.length,5);
    const call=async(name,args={})=>{const r=await client.callTool({name,arguments:args});assert.ok(!r.isError,JSON.stringify(r));return JSON.parse(r.content[0].text);};
    const opened=await call('open_project',{directory:path.join(scratch,'app space ไทย'),name:'integration-probe'});
    assert.equal(opened.configured,false);assert.ok(opened.previewUrl.startsWith('http://localhost:'));
    const base=opened.previewUrl;
    const previewPage=await fetch(base);assert.equal(previewPage.status,200);assert.match(await previewPage.text(),/<html/i);
    if(process.platform==='linux'){
      const otherLoopback=new URL(base);otherLoopback.hostname='127.0.0.2';
      await assert.rejects(()=>fetch(otherLoopback,{signal:AbortSignal.timeout(2000)}),'Default preview binding must stay on 127.0.0.1');
    }
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
    const root=path.join(scratch,'app space ไทย');await mkdir(root);
    await writeFile(path.join(root,'App.js'),'export default ()=>null;');
    const config=files=>writeFile(path.join(root,'snack.config.json'),JSON.stringify({name:'probe',files}));
    await config(['App.js','.env.json']);await assert.rejects(()=>readBatch(root),/explicitly/);
    await config(['App.js','node_modules/private.js']);await assert.rejects(()=>readBatch(root),/explicitly/);
    await config(['App.js',path.join(scratch,'outside.js')]);await assert.rejects(()=>readBatch(root),/explicitly/);
    await writeFile(path.join(scratch,'outside.js'),'private');await symlink(path.join(scratch,'outside.js'),path.join(root,'outside.js'));
    await config(['App.js','outside.js']);await assert.rejects(()=>readBatch(root),/inside/);
  }finally{await rm(scratch,{recursive:true,force:true});}
});

test('closing and restarting the packaged MCP reopens existing source with a new preview',async()=>{
  const scratch=await mkdtemp(path.join(os.tmpdir(),'snack-restart-'));
  const pluginDir=path.resolve('plugins',process.env.SNACK_TEST_PLUGIN??'snack-local');
  const config=JSON.parse(await readFile(path.join(pluginDir,'.mcp.json'),'utf8')).mcpServers.snack;
  const directory=path.join(scratch,'OneDrive - Example University','app ไทย');
  let previousUrl,revision;
  try{
    for(let run=0;run<3;run++){
      const client=new Client({name:'restart-verification',version:'1'});
      const transport=new StdioClientTransport({...config,cwd:pluginDir,env:{...process.env,SNACK_LOCAL_DATA_DIR:path.join(scratch,'credentials')},stderr:'pipe'});
      let errors='';transport.stderr?.on('data',chunk=>{errors+=chunk.toString();});
      try{
        await client.connect(transport);
        const result=await client.callTool({name:'open_project',arguments:run===0?{directory,name:'restart-probe'}:{directory}});
        assert.ok(!result.isError,JSON.stringify(result));
        const state=JSON.parse(result.content[0].text);
        assert.notEqual(state.previewUrl,previousUrl);
        const packet=await fetch(state.previewUrl+'batch').then(r=>r.json());
        if(run===0){
          await writeFile(path.join(directory,'App.js'),packet.batch.files['App.js'].contents+'\n// preserved across restarts\n');
          const synced=await client.callTool({name:'sync_project',arguments:{}});
          revision=JSON.parse(synced.content[0].text).revision;
        }else{
          assert.equal(state.revision,revision);
          assert.match(packet.batch.files['App.js'].contents,/preserved across restarts/);
        }
        previousUrl=state.previewUrl;
      }catch(error){if(errors)console.error(errors);throw error;}
      finally{await client.close();}
      await assert.rejects(()=>fetch(previousUrl+'batch',{signal:AbortSignal.timeout(2000)}),'The ended session should release its preview server');
    }
  }finally{await rm(scratch,{recursive:true,force:true});}
});


test('Linux launcher rejects the wrong architecture and invalid port with clear errors', {skip:process.platform!=='linux'},async()=>{
  const scratch=await mkdtemp(path.join(os.tmpdir(),'snack-linux-launcher-'));
  const pluginDir=path.resolve('plugins/snack-local-linux');
  try{
    const fakeUname=path.join(scratch,'uname');
    await writeFile(fakeUname,'#!/bin/sh\nif [ "$1" = "-s" ]; then echo Linux; else echo aarch64; fi\n',{mode:0o755});
    const wrongArch=spawnSync('/bin/sh',['./launch.sh'],{cwd:pluginDir,env:{...process.env,PATH:`${scratch}:${process.env.PATH}`},encoding:'utf8',timeout:5000});
    assert.equal(wrongArch.status,1);assert.match(wrongArch.stderr,/requires Linux x64/);
    const badPort=spawnSync('/bin/sh',['./launch.sh'],{cwd:pluginDir,env:{...process.env,SNACK_LOCAL_PORT:'not-a-port'},encoding:'utf8',timeout:5000});
    assert.equal(badPort.status,1);assert.match(badPort.stderr,/Invalid SNACK_LOCAL_PORT/);
  }finally{await rm(scratch,{recursive:true,force:true});}
});
