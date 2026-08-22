import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = fileURLToPath(new URL('../dist', import.meta.url));

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(new URL('../index.html', import.meta.url), new URL('../dist/index.html', import.meta.url));
for (const file of ['home.css', 'home.js', 'service-page.html', 'service-page.css', 'service-page.js']) {
  await cp(new URL(`../${file}`, import.meta.url), new URL(`../dist/${file}`, import.meta.url));
}
await cp(new URL('../assets/', import.meta.url), new URL('../dist/assets/', import.meta.url), { recursive: true });
const servicePaths = ['soin-visage-japonais-menard-au-mans', 'maquillage-permanent-levres-eyeliner', 'maquillage-sourcils', 'massage-corps-californien-kobido', 'soins-des-mains-gommage-corps'];
const serviceTemplate = await readFile(new URL('../service-page.html', import.meta.url), 'utf8');
for (const path of servicePaths) {
  await mkdir(new URL(`../dist/${path}/`, import.meta.url), { recursive: true });
  await writeFile(new URL(`../dist/${path}/index.html`, import.meta.url), serviceTemplate);
}
await writeFile(new URL('../dist/.nojekyll', import.meta.url), '');
console.log('Production clone written to dist/index.html');
