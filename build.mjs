import {build} from 'esbuild';
for (const name of ['snack-local','snack-local-windows']) {
  const root=`plugins/${name}`;
  await build({entryPoints:['src/server.mjs'],bundle:true,platform:'node',format:'cjs',outfile:`${root}/dist/server.cjs`,define:{'import.meta.url':'__filename'}});
  await build({entryPoints:['src/browser.js'],bundle:true,platform:'browser',format:'esm',outfile:`${root}/dist/browser.js`,define:{'process.env':'{}'}});
}
