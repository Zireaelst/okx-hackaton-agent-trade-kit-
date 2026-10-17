import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { ideas, filterIdeas } from '../src/data/ideas.mjs';

test('catalogue covers all 31 existing ideas with distinct source links', () => {
  assert.equal(ideas.length, 31);
  assert.deepEqual(ideas.map((idea) => idea.id), Array.from({ length: 31 }, (_, index) => index + 1));
  assert.equal(new Set(ideas.map((idea) => idea.href)).size, 31);
  assert.deepEqual(
    ['atk', 'onchainos', 'okxai'].map((product) => ideas.filter((idea) => idea.product === product).length),
    [16, 9, 6],
  );
  assert.deepEqual(
    ['public', 'verify', 'account', 'simulated'].map((access) => ideas.filter((idea) => idea.access === access).length),
    [7, 4, 4, 16],
  );
  assert.deepEqual(ideas.filter((idea) => idea.recipe).map((idea) => idea.id), [1, 16, 17]);
});

test('catalogue titles stay aligned with the detailed idea guides', () => {
  const files = { atk: '../docs/ideas/atk.md', onchainos: '../docs/ideas/onchainos.md', okxai: '../docs/ideas/okx-ai.md' };
  for (const [product, relativePath] of Object.entries(files)) {
    const markdown = readFileSync(new URL(relativePath, import.meta.url), 'utf8');
    const headings = [...markdown.matchAll(/^## (\d+\. .+)$/gm)].map((match) => match[1]);
    const catalogue = ideas.filter((idea) => idea.product === product).map((idea) => `${idea.id}. ${idea.title}`);
    assert.deepEqual(catalogue, headings, `${product} guide headings changed`);
  }
});

test('search uses Turkish case folding and combines product and access filters', () => {
  const results = filterIdeas({ query: 'VERİ', product: 'atk', access: 'public' });
  assert.ok(results.some((idea) => idea.id === 1));
  assert.ok(results.every((idea) => idea.product === 'atk' && idea.access === 'public'));
  assert.ok(filterIdeas({ query: 'ÖDEME', product: 'onchainos' }).some((idea) => idea.id === 17));
  assert.deepEqual(filterIdeas({ product: 'okxai', access: 'account' }), []);
});

test('empty filters return all ideas in original order', () => {
  assert.deepEqual(filterIdeas({}), ideas);
  assert.deepEqual(filterIdeas({ query: '   ', product: 'all', access: 'all' }), ideas);
});
