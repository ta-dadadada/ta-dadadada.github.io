import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pagePath } from '../src/lib/i18n.ts';
import { portfolio } from '../src/data/portfolio.ts';
import { translations } from '../src/data/translations.ts';

test('既存の日本語URLを保ち、英語は対応する/en/配下に置く', () => {
  assert.equal(pagePath('ja', 'portfolio'), '/');
  assert.equal(pagePath('ja', 'engineering'), '/engineering/');
  assert.equal(pagePath('en', 'portfolio'), '/en/');
  assert.equal(pagePath('en', 'engineering'), '/en/engineering/');
});
test('両言語で同じプロジェクトを紹介し、未確認URLを翻訳時に追加しない', () => {
  assert.deepEqual(portfolio.en.projects.map(p => [p.name, p.url]), portfolio.ja.projects.map(p => [p.name, p.url]));
  assert.deepEqual(Object.keys(translations.en).sort(), Object.keys(translations.ja).sort());
});
