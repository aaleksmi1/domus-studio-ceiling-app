import {mkdir, cp, writeFile, readFile} from 'node:fs/promises';

await mkdir('dist/server', {recursive: true});
await mkdir('dist/.openai', {recursive: true});
await cp('index.html', 'dist/index.html');
await cp('app.js', 'dist/app.js');
await cp('flatten-core.js', 'dist/flatten-core.js');
await cp('styles.css', 'dist/styles.css');
await cp('manifest.webmanifest', 'dist/manifest.webmanifest');
await cp('.openai/hosting.json', 'dist/.openai/hosting.json');
const assets = {
  '/': [await readFile('index.html', 'utf8'), 'text/html; charset=utf-8'],
  '/index.html': [await readFile('index.html', 'utf8'), 'text/html; charset=utf-8'],
  '/app.js': [await readFile('app.js', 'utf8'), 'text/javascript; charset=utf-8'],
  '/flatten-core.js': [await readFile('flatten-core.js', 'utf8'), 'text/javascript; charset=utf-8'],
  '/styles.css': [await readFile('styles.css', 'utf8'), 'text/css; charset=utf-8'],
  '/manifest.webmanifest': [await readFile('manifest.webmanifest', 'utf8'), 'application/manifest+json']
};
await writeFile('dist/server/index.js', `const assets=${JSON.stringify(assets)};export default{async fetch(request){const path=new URL(request.url).pathname;const item=assets[path]||assets['/'];return new Response(item[0],{headers:{'content-type':item[1],'cache-control':'no-cache'}})}};\n`);
