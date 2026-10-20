import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { repository, revision, sectionSources, decisions } from '../src/lib/site-source.ts';
import { talks } from '../src/data/portfolio.ts';
import { locales, pagePath } from '../src/lib/i18n.ts';

const origin = 'https://ta-dadadada.github.io';
const readPage = path => readFileSync(`dist${path}index.html`, 'utf8');
const paths = new Set([
  ...Object.values(sectionSources).flat().map(({ path }) => path),
  ...decisions.map(({ path }) => path),
  'docs/architecture.md',
]);
for (const path of paths) {
  assert.ok(existsSync(path), `参照ファイルが存在しない: ${path}`);
  if (revision) execFileSync('git', ['cat-file', '-e', `${revision}:${path}`]);
}
for (const lang of locales) {
  const home = readPage(pagePath(lang, 'portfolio'));
  const engineering = readPage(pagePath(lang, 'engineering'));
  assert.ok(home.includes(`href="${pagePath(lang, 'engineering')}"`), '同じ言語のEngineering導線が必要');
  assert.ok(engineering.includes(`href="${pagePath(lang, 'portfolio')}"`), '同じ言語のPortfolio戻り先が必要');
  assert.ok(home.includes('id="talks"'), '登壇資料は記事と別セクションにする');
  assert.ok(home.includes('href="https://speakerdeck.com/tadadadada"'), '登壇資料の公開先への導線が必要');
  for (const talk of talks) assert.ok(home.includes(`href="${talk.url}"`), `登壇資料のリンクがない: ${talk.url}`);
  assert.ok(engineering.includes(lang === 'ja' ? '未実施' : 'Not yet audited'), '監査状態を明示する');
  assert.ok(home.includes(lang === 'ja' ? '紹介文は仮' : 'Introductions are drafts'), '翻訳済みの仮紹介表示が必要');
  for (const [page, html] of [['portfolio', home], ['engineering', engineering]]) {
    const path = pagePath(lang, page);
    assert.ok(html.includes(`<html lang="${lang}"`), `文書言語が不一致: ${path}`);
    assert.ok(html.includes(`rel="canonical" href="${origin}${path}"`), `canonicalが不一致: ${path}`);
    for (const alternate of locales) {
      const target = pagePath(alternate, page);
      assert.ok(html.includes(`hreflang="${alternate}" href="${origin}${target}"`), '言語別alternateが必要');
      assert.ok(new RegExp(`<a[^>]*href="${target}"[^>]*hreflang="${alternate}"`).test(html), '同じページの言語切替が必要');
    }
    assert.ok(new RegExp(`<a[^>]*href="${path}"[^>]*aria-current="page"`).test(html), '現在の言語表示が必要');
    assert.ok(html.includes(`hreflang="x-default" href="${origin}${pagePath('ja', page)}"`));
    assert.ok(!/<script\b/i.test(html), 'クライアントJavaScriptは不要');
    for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
      if (href.startsWith('#')) assert.ok(html.includes(`id="${href.slice(1)}"`), `ページ内の参照先がない: ${href}`);
      if (href.startsWith('/')) assert.ok(existsSync(`dist${href}`), `内部リンクの参照先がない: ${href}`);
      if (revision && href.startsWith(`${repository}/`)) {
        assert.ok(['blob', 'tree', 'commit'].some(type => href === `${repository}/${type}/${revision}` || href.startsWith(`${repository}/${type}/${revision}/`)), `参照版が不一致: ${href}`);
      }
    }
    if (!revision) {
      assert.ok(html.includes('Local preview'));
      assert.ok(!html.includes('Built from'));
      assert.ok(!html.includes(`${repository}/blob/`));
      continue;
    }
    assert.ok(html.includes(`${repository}/commit/${revision}`));
    assert.ok(html.includes(`Built from ${revision.slice(0, 7)}`));
  }
  if (revision) {
    for (const [section, sources] of Object.entries(sectionSources)) {
      const id = section === 'profile' ? 'top' : section;
      const content = home.match(new RegExp(`<section\\b[^>]*\\bid="${id}"[^>]*>([\\s\\S]*?)</section>`))?.[1];
      assert.ok(content, `セクションが存在しない: ${id}`);
      for (const { path } of sources) assert.ok(content.includes(`${repository}/blob/${revision}/${path}`), `対応リンクがない: ${lang}/${id} → ${path}`);
    }
    for (const path of [...decisions.map(d => d.path), 'docs/architecture.md']) {
      assert.ok(engineering.includes(`${repository}/blob/${revision}/${path}`));
    }
  }
}
console.log(`日英4ページとソース参照の整合性: OK (${revision ?? 'Local preview'})`);
