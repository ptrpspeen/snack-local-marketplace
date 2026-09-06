import {readFile, realpath, stat} from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';

export async function readBatch(root) {
  root=await realpath(root);
  const config=JSON.parse(await readFile(path.join(root,'snack.config.json'),'utf8'));
  if(!/^[a-z0-9][a-z0-9-]{0,63}$/.test(config.name)) throw Error('Use a lowercase, unique Snack name in snack.config.json.');
  if(!Array.isArray(config.files)||!config.files.includes('App.js')||config.files.length>100) throw Error('List App.js and at most 100 source files in snack.config.json.');
  const files={};let size=0;
  for(const name of config.files){
    if(typeof name!=='string'||path.isAbsolute(name)||name.split(/[\\/]/).some(p=>p.startsWith('.')||p==='node_modules')||!/\.(js|jsx|ts|tsx|json)$/.test(name))throw Error('Only explicitly listed source files are allowed.');
    const resolved=await realpath(path.join(root,name));
    if(!resolved.startsWith(root+path.sep))throw Error('Source files must remain inside the project.');
    const info=await stat(resolved);size+=info.size;if(size>1_000_000)throw Error('Source exceeds the 1 MB limit.');
    files[name]={type:'CODE',contents:await readFile(resolved,'utf8')};
  }
  const dependencies=config.dependencies??{};
  for(const value of Object.values(dependencies))if(typeof value!=='object'||!value||typeof value.version!=='string')throw Error('Dependencies use {"package":{"version":"..."}}.');
  const data={name:config.name,sdkVersion:config.sdkVersion??'54.0.0',files,dependencies};
  return {...data,revision:createHash('sha256').update(JSON.stringify(data)).digest('hex').slice(0,12)};
}

export function changedFiles(previous,next){
  return [...new Set([...Object.keys(previous?.files??{}),...Object.keys(next.files)])].filter(name=>previous?.files[name]?.contents!==next.files[name]?.contents);
}
