import test from 'node:test';
import assert from 'node:assert/strict';
import { selectGuidePath } from '../src/lib/guide-paths.mjs';

test('routes a public ATK beginner to the data-quality recipe and chosen client', () => {
  const path = selectGuidePath({ goal: 'atk', client: 'codex', access: 'public' });
  assert.equal(path.recipeUrl, '/guide/build/atk-data-quality');
  assert.equal(path.setupUrl, '/guide/atk/setup-codex');
  assert.equal(path.mode, 'public');
});

test('keeps payment demos simulated even if the visitor has account access', () => {
  const path = selectGuidePath({ goal: 'payment', client: 'cursor', access: 'read' });
  assert.equal(path.recipeUrl, '/guide/build/payment-402');
  assert.equal(path.mode, 'simulated');
  assert.equal(path.setupUrl, '/guide/onchainos/quickstart');
});

test('routes service builders through ATK setup and the A2MCP recipe', () => {
  const path = selectGuidePath({ goal: 'service', client: 'claude', access: 'public' });
  assert.equal(path.recipeUrl, '/guide/build/atk-a2mcp');
  assert.equal(path.setupUrl, '/guide/atk/setup-claude-code');
});
