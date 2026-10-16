import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { repository, revision, sectionSources, decisions } from '../src/lib/site-source.ts';

const home = readFileSync('dist/index.html', 'utf8');
// Astroの既定のdirectory形式とfile形式のどちらでも検証する。
const engineering = readFileSync(existsSync('dist/engineering/index.html') ? 'dist/engineering/index.html' : 'dist/engineering.html', 'utf8');
assert.ok(home.includes('href="/engineering/"'), 'Engineeringへの導線が必要');
assert.ok(engineering.includes('href="/"'), 'Portfolioへの戻り先が必要');
assert.ok(engineering.includes('未実施'), '監査状態を明示する');
const paths = new Set([
  ...Object.values(sectionSources).flat().map(({ path }) => path),
  ...decisions.map(({ path }) => path),
  'docs/architecture.md',
]);
for (const path of paths) {
  assert.ok(existsSync(path), `参照ファイルが存在しない: ${path}`);
  if (revision) execFileSync('git', ['cat-file', '-e', `${revision}:${path}`]);
}
for (const html of [home, engineering]) {
  assert.ok(!/<script\b/i.test(html), 'クライアントJavaScriptは不要');
  if (!revision) {
    assert.ok(html.includes('Local preview'));
    assert.ok(!html.includes('Built from'));
    assert.ok(!html.includes(`${repository}/blob/`));
    continue;
  }
  assert.ok(html.includes(`${repository}/commit/${revision}`));
  assert.ok(html.includes(`Built from ${revision.slice(0, 7)}`));
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (href.startsWith(`${repository}/`)) {
      assert.ok(new RegExp(`^${repository}/(?:blob|tree|commit)/${revision}(?:/|$)`).test(href), `参照版が不一致: ${href}`);
    }
  }
}
if (revision) {
  for (const [section, sources] of Object.entries(sectionSources)) {
    const id = section === 'hero' ? 'top' : section;
    const content = home.match(new RegExp(`<section\\b[^>]*\\bid="${id}"[^>]*>([\\s\\S]*?)</section>`))?.[1];
    assert.ok(content, `セクションが存在しない: ${id}`);
    for (const { path } of sources) assert.ok(content.includes(`${repository}/blob/${revision}/${path}`), `対応リンクがない: ${id} → ${path}`);
  }
  for (const path of [...decisions.map(d => d.path), 'docs/architecture.md']) {
    assert.ok(engineering.includes(`${repository}/blob/${revision}/${path}`));
  }
}
console.log(`生成物とソース参照の整合性: OK (${revision ?? 'Local preview'})`);
