import {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js';
import {StdioServerTransport} from '@modelcontextprotocol/sdk/server/stdio.js';
import {z} from 'zod';
import {Snack} from 'snack-sdk';
import http from 'node:http';
import path from 'node:path';
import {homedir} from 'node:os';
import {randomBytes} from 'node:crypto';
import {readFile,writeFile,mkdir,realpath,chmod} from 'node:fs/promises';
import {readBatch,changedFiles} from './project.mjs';

const pluginRoot=path.resolve(__dirname,'..');
const credentialDir=process.env.SNACK_LOCAL_DATA_DIR??path.join(homedir(),'.config','snack-local');
const credentialPath=path.join(credentialDir,'expo-token');
const route='/'+randomBytes(24).toString('hex');
let root,batch,saved,preview={status:'not-connected'},lastReport=0,base,saveBusy=false;
const response=data=>({content:[{type:'text',text:JSON.stringify(data)}]});
async function hasToken(){try{return Boolean((await readFile(credentialPath,'utf8')).trim());}catch{return false;}}
function status(){return {project:root??null,revision:batch?.revision??null,savedUrl:saved?.url??null,previewUrl:base?base+'/':null,preview:lastReport && Date.now()-lastReport<15000?preview:{status:'not-connected'},runtime:process.platform+'-'+process.arch};}
async function localSave(){
  if(!batch)throw Error('Open and sync a project first.');
  if(saveBusy)throw Error('A save is already running.');
  if(!await hasToken())return {needsSetup:true,setupUrl:base+'/setup'};
  saveBusy=true;let snack;
  try{
    const snapshot=batch,projectRoot=root;
    const accessToken=(await readFile(credentialPath,'utf8')).trim();
    snack=new Snack({...snapshot,user:{accessToken},online:false,verbose:false});
    const result=await snack.saveAsync();
    saved={id:result.id,url:'https://snack.expo.dev/'+result.id,revision:snapshot.revision};
    await mkdir(path.join(projectRoot,'.snack-local'),{recursive:true});
    await writeFile(path.join(projectRoot,'.snack-local','saved.json'),JSON.stringify(saved,null,2));
    return saved;
  }catch{throw Error('Expo save failed. Check the local token and network; credentials and raw errors are not returned.');}
  finally{snack?.setUser(undefined);saveBusy=false;}
}

const server=http.createServer(async(req,res)=>{
  const expectedHost=new URL(base).host;
  if(req.headers.host!==expectedHost || (req.headers.origin && req.headers.origin!==new URL(base).origin)){res.writeHead(403).end();return;}
  const url=new URL(req.url,base),rel=url.pathname.slice(route.length);
  if(!url.pathname.startsWith(route+'/')){res.writeHead(404).end();return;}
  res.setHeader('Cache-Control','no-store');res.setHeader('Referrer-Policy','no-referrer');
  const json=data=>{res.setHeader('Content-Type','application/json');res.end(JSON.stringify(data));};
  try{
    if(req.method==='GET'&&rel==='/batch')return json({batch,saved});
    if(req.method==='GET'&&rel==='/browser.js'){res.setHeader('Content-Type','text/javascript');return res.end(await readFile(path.join(pluginRoot,'dist/browser.js')));}
    if(req.method==='GET'&&(rel==='/'||rel==='/setup')){res.setHeader('Content-Type','text/html; charset=utf-8');return res.end(await readFile(path.join(pluginRoot,rel==='/setup'?'setup.html':'preview.html')));}
    if(req.method==='POST'&&['/report','/token','/save'].includes(rel)){
      if(!req.headers['content-type']?.startsWith('application/json')){res.writeHead(415).end();return;}
      let body='';for await(const part of req){body+=part;if(body.length>30000)throw Error('Request too large');}
      const data=JSON.parse(body||'{}');
      if(rel==='/token'){
        if(typeof data.token!=='string'||data.token.trim().length<16||data.token.length>1024)throw Error('Invalid token');
        await mkdir(credentialDir,{recursive:true,mode:0o700});await writeFile(credentialPath,data.token.trim(),{mode:0o600});await chmod(credentialPath,0o600);
        return json({ok:true});
      }
      if(rel==='/save')return json(await localSave());
      if(data.revision!==batch?.revision)return json({ignored:true});
      preview={revision:data.revision,nativeUrl:typeof data.nativeUrl==='string'?data.nativeUrl.slice(0,1000):null,clients:Array.isArray(data.clients)?data.clients.slice(0,8):[],errors:Array.isArray(data.errors)?data.errors.slice(-5).map(e=>String(e).slice(0,1000)):[]};lastReport=Date.now();return json({ok:true});
    }
    res.writeHead(404).end();
  }catch{res.writeHead(400);json({error:'Local operation failed. Check configuration or Expo connection.'});}
});

async function main(){
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  base='http://localhost:'+server.address().port+route;
  const mcp=new McpServer({name:'snack-local',version:'0.1.0'},{instructions:'Edit source locally. sync_project reads only snack.config.json allowlisted files. Call once per completed edit batch. get_status returns current-revision preview errors, not source. Never ask for or read Expo tokens; account_setup returns a local user-entry page. save_project uploads source to Expo.'});
  mcp.registerTool('open_project',{description:'Open a local Snack project; creates a minimal neutral starter for a new project when App.js is absent. Returns preview URL.',inputSchema:{directory:z.string(),name:z.string().regex(/^[a-z0-9][a-z0-9-]{0,63}$/).optional()}},async({directory,name})=>{
    try{if(saveBusy)throw Error('Wait for save to finish.');if(!path.isAbsolute(directory))throw Error('Use an absolute directory.');await mkdir(directory,{recursive:true});const target=await realpath(directory);
      const configPath=path.join(target,'snack.config.json');
      try{await readFile(configPath);}catch(e){if(e.code!=='ENOENT')throw e;if(!name)throw Error('Provide a unique name for the new project.');try{await writeFile(path.join(target,'App.js'),await readFile(path.join(pluginRoot,'starter.js')),{flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}await writeFile(configPath,JSON.stringify({name,sdkVersion:'54.0.0',files:['App.js'],dependencies:{}},null,2),{flag:'wx'});}
      const next=await readBatch(target);root=target;batch=next;preview={status:'not-connected'};lastReport=0;try{saved=JSON.parse(await readFile(path.join(root,'.snack-local/saved.json'),'utf8'));}catch{saved=null;}
      return response({...status(),configured:await hasToken(),files:Object.keys(batch.files)});
    }catch(e){return {...response({error:e.message}),isError:true};}
  });
  mcp.registerTool('sync_project',{description:'Read allowlisted local files and commit one complete batch. No source in tool arguments or output.',inputSchema:{}},async()=>{try{if(!root)throw Error('Open a project first.');const next=await readBatch(root),changed=changedFiles(batch,next);const previousRevision=batch?.revision;batch=next;if(previousRevision!==next.revision){preview={status:'awaiting-preview'};lastReport=0;}return response({revision:batch.revision,changed,previewUrl:base+'/',savedUrl:saved?.url??null});}catch(e){return {...response({error:e.message}),isError:true};}});
  mcp.registerTool('get_status',{description:'Read current revision, connected preview clients and at most five errors. Does not read source or credentials.',inputSchema:{},annotations:{readOnlyHint:true}},async()=>response(status()));
  mcp.registerTool('account_setup',{description:'Return a local page for the user to enter an Expo token privately. Never pass a token to this tool.',inputSchema:{}},async()=>response({configured:await hasToken(),setupUrl:base+'/setup'}));
  mcp.registerTool('save_project',{description:'Save the last synced batch directly to the configured Expo account; may update the same account/name Snack.',inputSchema:{}},async()=>{try{return response(await localSave());}catch(e){return {...response({error:e.message}),isError:true};}});
  await mcp.connect(new StdioServerTransport());
  process.stdin.on('end',()=>server.close(()=>process.exit(0)));
}
main().catch(()=>{console.error('Snack Local failed to start.');process.exit(1);});
