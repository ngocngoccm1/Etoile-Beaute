import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = fileURLToPath(new URL('../dist', import.meta.url));

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
const original = await readFile(new URL('../original-site.html', import.meta.url), 'utf8');
const staticHome = original
  .replace('</head>', '<link rel="stylesheet" href="site-customizations.css"></head>')
  .replace('</body>', '<script src="site-customizations.js"></script></body>');
await writeFile(new URL('../dist/index.html', import.meta.url), staticHome);
for (const file of ['site-customizations.css', 'site-customizations.js', 'service-page.html', 'service-page.css', 'service-page.js']) {
  await cp(new URL(`../${file}`, import.meta.url), new URL(`../dist/${file}`, import.meta.url));
}
const servicePaths = ['soin-visage-japonais-menard-au-mans', 'maquillage-permanent-levres-eyeliner', 'maquillage-sourcils', 'massage-corps-californien-kobido', 'soins-des-mains-gommage-corps'];
const serviceTemplate = await readFile(new URL('../service-page.html', import.meta.url), 'utf8');
for (const path of servicePaths) {
  await mkdir(new URL(`../dist/${path}/`, import.meta.url), { recursive: true });
  await writeFile(new URL(`../dist/${path}/index.html`, import.meta.url), serviceTemplate);
}
await writeFile(new URL('../dist/.nojekyll', import.meta.url), '');
console.log('Production clone written to dist/index.html');
