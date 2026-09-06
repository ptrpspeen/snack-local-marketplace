import {Snack} from 'snack-sdk';
import QRCode from 'qrcode';
const $=id=>document.getElementById(id);
let snack,revision='',currentName='',errors=[],pending=false;
const ref={current:$('preview').contentWindow};
function report(){if(!snack)return;const s=snack.getState();if(s.webPreviewURL&&$('preview').getAttribute('src')!==s.webPreviewURL)$('preview').src=s.webPreviewURL;
  if(s.url&&$('native').getAttribute('href')!==s.url){$('native').href=s.url;$('native').textContent=s.url;QRCode.toCanvas($('qr'),s.url).catch(()=>{});}
  const clients=Object.values(s.connectedClients).map(c=>({name:c.name,platform:c.platform,status:c.status,error:c.error?.message}));
  $('state').textContent=JSON.stringify({revision,clients},null,2);$('errors').textContent=errors.join('\n');
  fetch('report',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({revision,nativeUrl:s.url,clients,errors})}).catch(()=>{});
}
async function poll(){if(pending)return;pending=true;try{const {batch,saved}=await fetch('batch').then(r=>r.json());if(!batch){$('status').textContent='ให้ Codex เปิดโปรเจกต์ก่อน';return;}
  if(!snack||batch.name!==currentName){snack?.setOnline(false);snack=new Snack({...batch,online:true,codeChangesDelay:-1,webPreviewRef:ref,verbose:false});currentName=batch.name;revision=batch.revision;errors=[];snack.addStateListener(report);snack.addLogListener(e=>{if(e.type==='error'){errors.push(String(e.message??e.error?.message??'Runtime error').slice(0,1000));errors=errors.slice(-5);report();}});}
  else if(batch.revision!==revision){const files={...batch.files};for(const name of Object.keys(snack.getState().files))if(!files[name])files[name]=null;const dependencies={...batch.dependencies};for(const name of Object.keys(snack.getState().dependencies))if(!dependencies[name])dependencies[name]=null;revision=batch.revision;errors=[];snack.setSDKVersion(batch.sdkVersion);snack.updateDependencies(dependencies);snack.updateFiles(files);snack.sendCodeChanges();}
  $('status').textContent='กำลังแสดงโค้ดชุด '+revision;
  if(saved){$('saved').href=saved.url;$('saved').textContent='เปิด Snack ที่บันทึกไว้'+(saved.revision===revision?'':' (มีโค้ดใหม่ที่ยังไม่บันทึก)');}
  report();
}catch{$('status').textContent='การเชื่อมต่อขาดหาย ให้ Codex เปิดโปรเจกต์และส่งลิงก์ preview ใหม่';}finally{pending=false;}}
$('save').onclick=async()=>{try{const r=await fetch('save',{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'}).then(r=>r.json());if(r.needsSetup){location.href=r.setupUrl;return;}if(r.error)throw Error();await poll();}catch{$('status').textContent='บันทึกไม่สำเร็จ ตรวจการเชื่อมบัญชี Expo';}};
setInterval(poll,1500);poll();
