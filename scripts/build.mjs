import { access, cp, mkdir, rm, writeFile } from 'node:fs/promises';

const output = new URL('../dist/', import.meta.url);
const files = [
  'index.html',
  'privacy.html',
  'styles.css',
  'script.js',
  'favicon.svg',
  'robots.txt',
  'sitemap.xml'
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of files) {
  await cp(new URL(`../${file}`, import.meta.url), new URL(`../dist/${file}`, import.meta.url));
}

const assetsSource = new URL('../assets/', import.meta.url);
try {
  await access(assetsSource);
  await cp(assetsSource, new URL('../dist/assets/', import.meta.url), { recursive: true });
} catch {
  console.warn('assets/ not found yet; continuing without optional image assets.');
}

await writeFile(new URL('../dist/.nojekyll', import.meta.url), '');
console.log(`Built ${files.length} static assets into dist/`);
