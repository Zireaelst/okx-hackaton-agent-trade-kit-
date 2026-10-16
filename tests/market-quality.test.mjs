import test from 'node:test';
import assert from 'node:assert/strict';
import { assessTicker } from '../examples/market-quality/analyze.mjs';

const ticker = { instId: 'BTC-USDT', ts: '1792248000000', last: '100', bidPx: '99', askPx: '101' };
const nowMs = 1792248030000;

test('reports a fresh, internally consistent ticker with transparent spread math', () => {
  const result = assessTicker(ticker, { nowMs, maxAgeMs: 60_000 });
  assert.equal(result.status, 'ok');
  assert.equal(result.ageMs, 30_000);
  assert.equal(result.spreadBps, 200);
  assert.deepEqual(result.issues, []);
});

test('flags stale data and does not label it current', () => {
  const result = assessTicker(ticker, { nowMs: nowMs + 120_000, maxAgeMs: 60_000 });
  assert.equal(result.status, 'needs-review');
  assert.ok(result.issues.some((issue) => issue.code === 'stale'));
});

test('rejects an inverted order book and missing fields without inventing a spread', () => {
  const result = assessTicker({ ...ticker, bidPx: '102', askPx: '101', last: '' }, { nowMs });
  assert.equal(result.status, 'needs-review');
  assert.equal(result.spreadBps, null);
  assert.ok(result.issues.some((issue) => issue.code === 'inverted-book'));
  assert.ok(result.issues.some((issue) => issue.code === 'missing-last'));
});
