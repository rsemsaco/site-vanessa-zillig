import { readFile } from 'node:fs/promises';

const index = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const styles = await readFile(new URL('../styles.css', import.meta.url), 'utf8');
const robots = await readFile(new URL('../robots.txt', import.meta.url), 'utf8');
const sitemap = await readFile(new URL('../sitemap.xml', import.meta.url), 'utf8');

const checks = [
  ['lang pt-BR', index.includes('lang="pt-BR"')],
  ['viewport meta', index.includes('name="viewport"')],
  ['meta description', index.includes('name="description"')],
  ['canonical', index.includes('rel="canonical"')],
  ['main landmark', index.includes('<main id="conteudo">')],
  ['single H1', (index.match(/<h1\b/g) || []).length === 1],
  ['whatsapp CTA', index.includes('wa.me/5511952305274')],
  ['linkedin', index.includes('linkedin.com/in/vanessa-zillig-19ab891a1')],
  ['privacy link', index.includes('./privacy.html')],
  ['portrait image markup', index.includes('./assets/vanessa-zillig-portrait.png')],
  ['portrait alt text', index.includes('alt="Retrato profissional de Vanessa Zillig"')],
  ['reduced motion', styles.includes('prefers-reduced-motion')],
  ['mobile breakpoint', styles.includes('@media (max-width: 520px)')],
  ['robots sitemap', robots.includes('Sitemap:')],
  ['sitemap root', sitemap.includes('site-vanessa-zillig/')]
];

const failed = checks.filter(([, ok]) => !ok);

for (const [label, ok] of checks) {
  console.log(`${ok ? '✓' : '✗'} ${label}`);
}

if (failed.length) {
  console.error(`\n${failed.length} check(s) failed.`);
  process.exit(1);
}

console.log('\nAll static integrity checks passed.');
