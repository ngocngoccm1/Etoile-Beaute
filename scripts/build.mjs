import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = fileURLToPath(new URL('../dist', import.meta.url));

await import('./sync-webcake-route-pages.mjs');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(new URL('../index.html', import.meta.url), new URL('../dist/index.html', import.meta.url));
for (const file of ['local-clone.css', 'local-clone.js', 'service-page.html', 'service-page.css', 'service-page.js', 'section-page.html', 'section-page.js']) {
  await cp(new URL(`../${file}`, import.meta.url), new URL(`../dist/${file}`, import.meta.url));
}
await cp(new URL('../assets/', import.meta.url), new URL('../dist/assets/', import.meta.url), { recursive: true });
const sectionPaths = ['soins-visage-le-mans', 'menard-le-mans', 'massages-le-mans', 'maquillage-permanent-le-mans', 'institut', 'contact'];
for (const path of sectionPaths) {
  await cp(new URL(`../${path}/`, import.meta.url), new URL(`../dist/${path}/`, import.meta.url), { recursive: true });
}
await writeFile(new URL('../dist/.nojekyll', import.meta.url), '');
console.log('Production clone written to dist/index.html');
