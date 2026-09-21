import { cp, mkdir, rm, writeFile } from 'node:fs/promises';

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

await writeFile(new URL('../dist/.nojekyll', import.meta.url), '');
console.log(`Built ${files.length} static assets into dist/`);
