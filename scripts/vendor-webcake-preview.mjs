import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { extname } from 'node:path';

const source = new URL('../source/webcake-preview.html', import.meta.url);
const assets = new URL('../assets/webcake/', import.meta.url);
const fonts = new URL('../assets/fonts/', import.meta.url);
const vendor = new URL('../assets/runtime/', import.meta.url);
const output = new URL('../index.html', import.meta.url);
const raw = await readFile(source, 'utf8');
const matches = [...raw.matchAll(/https:\/\/(?:content|statics)\.pancake\.vn\/[^"'\s<>(){}]+/g)].map(match => match[0].replace(/\\+$/, ''));
const urls = [...new Set(matches.filter(url => /\.(png|jpe?g|webp|svg)(?:\?|$)/i.test(url)))];
const replacements = new Map();
await mkdir(assets, { recursive: true });
await mkdir(fonts, { recursive: true });
await mkdir(vendor, { recursive: true });

for (const url of urls) {
  const type = extname(new URL(url).pathname).toLowerCase() || '.bin';
  const name = `${createHash('sha1').update(url).digest('hex')}${type}`;
  const target = new URL(`../assets/webcake/${name}`, import.meta.url);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Could not download ${url}: ${response.status}`);
  await writeFile(target, Buffer.from(await response.arrayBuffer()));
  replacements.set(url, `./assets/webcake/${name}`);
}

const runtimeFiles = [
  ['https://a.pancake.vn/js/app.js?vsn=5', 'webcake-runtime.js'],
  ['https://www.webcake.me/webcake/v4/7024eafb-6ec2-4e28-a583-f58eddcaee04', 'page-config.js'],
  ['https://a.pancake.vn/js/fingerprint.js', 'fingerprint.js'],
  ['https://api.webcake.io/animate/animatev4.css?v=1', 'animate.css'],
  ['https://api.webcake.io/render_iconfont/iconfont.css?v=1', 'iconfont.css']
];
for (const [remote, name] of runtimeFiles) {
  const response = await fetch(remote);
  if (!response.ok) throw new Error(`Could not download ${remote}: ${response.status}`);
  const body = Buffer.from(await response.arrayBuffer());
  if (name === 'page-config.js') {
    let config = body.toString('utf8');
    for (const [remoteAsset, localPath] of replacements) config = config.split(remoteAsset).join(localPath);
    // Use the vendored loader instead of dynamically fetching it from Webcake.
    config = config.split('"https://a.pancake.vn",\'/js/app.js?vsn=5').join('"./assets/runtime/webcake-runtime.js",\'');
    config = config.split('https://fonts.googleapis.com/css?family=Roboto:100,300,400,700,900|Lato:100,300,400,700,900|MJ-kobe-regular.ttf:100,300,400,700,900|Livvic:100,300,400,700,900|Playfair%20Display:100,300,400,700,900|Roboto%20Slab:100,300,400,700,900&display=swap').join('./assets/runtime/fonts.css');
    await writeFile(new URL(`../assets/runtime/${name}`, import.meta.url), config);
  } else {
    const localBody = name === 'webcake-runtime.js'
      ? body.toString('utf8').split('https://a.pancake.vn').join('.')
      : body;
    await writeFile(new URL(`../assets/runtime/${name}`, import.meta.url), localBody);
  }
}

const fontCssUrl = 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,700,900|Lato:100,300,400,700,900|MJ-kobe-regular.ttf:100,300,400,700,900|Livvic:100,300,400,700,900|Playfair%20Display:100,300,400,700,900|Roboto%20Slab:100,300,400,700,900&display=swap';
const fontCssResponse = await fetch(fontCssUrl);
if (!fontCssResponse.ok) throw new Error(`Could not download font CSS: ${fontCssResponse.status}`);
let fontCss = await fontCssResponse.text();
for (const remoteFont of [...new Set(fontCss.match(/https:\/\/fonts\.gstatic\.com\/[^)]+/g) || [])]) {
  const suffix = extname(new URL(remoteFont).pathname) || '.woff2';
  const name = `${createHash('sha1').update(remoteFont).digest('hex')}${suffix}`;
  const response = await fetch(remoteFont);
  if (!response.ok) throw new Error(`Could not download font ${remoteFont}: ${response.status}`);
  await writeFile(new URL(`../assets/fonts/${name}`, import.meta.url), Buffer.from(await response.arrayBuffer()));
  fontCss = fontCss.split(remoteFont).join(`../fonts/${name}`);
}
await writeFile(new URL('../assets/runtime/fonts.css', import.meta.url), fontCss);

let local = raw;
for (const [remote, localPath] of replacements) local = local.split(remote).join(localPath);
local = local
  .replace('https://a.pancake.vn/js/app.js?vsn=5', './assets/runtime/webcake-runtime.js')
  .replace('https://www.webcake.me/webcake/v4/7024eafb-6ec2-4e28-a583-f58eddcaee04', './assets/runtime/page-config.js')
  .replace('/webcake/v4/7024eafb-6ec2-4e28-a583-f58eddcaee04', './assets/runtime/page-config.js')
  .replace(/src="\/webcake\/v4\/"/g, 'src="./assets/runtime/page-config.js"')
  .replace('https://a.pancake.vn/js/fingerprint.js', './assets/runtime/fingerprint.js')
  .split(fontCssUrl).join('./assets/runtime/fonts.css')
  .replace(/https:\/\/api\.webcake\.io\/animate\/animatev4\.css\?v=1/g, './assets/runtime/animate.css')
  .replace(/https:\/\/api\.webcake\.io\/render_iconfont\/iconfont\.css\?v=1/g, './assets/runtime/iconfont.css')
  .replace(/<link\b[^>]*(?:dns-prefetch|preconnect)[^>]*>\s*/gi, '')
  .replace('</head>', '<link rel="stylesheet" href="./local-clone.css"></head>')
  .replace('</body>', '<script src="./local-clone.js"></script></body>');
await writeFile(output, local);
await writeFile(new URL('../source/asset-map.json', import.meta.url), JSON.stringify(Object.fromEntries(replacements), null, 2));
console.log(`Vendored ${urls.length} assets into assets/webcake and wrote local index.html`);
