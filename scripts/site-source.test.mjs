import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resolveRevision } from '../src/lib/site-source.ts';

const sha = 'a'.repeat(40);
test('公開ビルドは完全なHEADのSHAを保つ', () => {
  assert.equal(resolveRevision(sha, false, true), sha);
});
test('未コミット変更を公開版に含めない', () => {
  assert.throws(() => resolveRevision(sha, true, true), /未コミット/);
});
test('短縮・不正SHAでは公開版を作らない', () => {
  for (const invalid of ['main', sha.slice(0, 7), '', '../main']) {
    assert.throws(() => resolveRevision(invalid, false, true), /SHA/);
  }
});
test('ローカルはクリーンでも変更中でも公開版と表示しない', () => {
  assert.equal(resolveRevision(sha, false, false), null);
  assert.equal(resolveRevision(sha, true, false), null);
});
