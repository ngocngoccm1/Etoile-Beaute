import { mkdir, readFile, writeFile } from 'node:fs/promises';

const routes = ['soins-visage-le-mans', 'menard-le-mans', 'massages-le-mans', 'maquillage-permanent-le-mans', 'institut', 'contact'];
const home = await readFile(new URL('../index.html', import.meta.url), 'utf8');

for (const route of routes) {
  const page = home
    .replace('</head>', `<script>window.__ETOILE_ROUTE__=${JSON.stringify(route)};</script></head>`)
    .replaceAll('./assets/', '../assets/')
    .replaceAll('./local-clone.css', '../local-clone.css')
    .replaceAll('./local-clone.js', '../local-clone.js');
  await mkdir(new URL(`../${route}/`, import.meta.url), { recursive: true });
  await writeFile(new URL(`../${route}/index.html`, import.meta.url), page);
}
