import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeMarket } from '../src/lib/demo.mjs';

test('calculates spread in basis points and completed-candle range', () => {
  const result = analyzeMarket({
    bid: 99900,
    ask: 100100,
    candles: [
      { high: 100400, low: 99500, complete: true },
      { high: 100800, low: 99200, complete: true },
      { high: 101200, low: 99000, complete: false },
    ],
  });

  assert.equal(result.mid, 100000);
  assert.equal(result.spreadBps, 20);
  assert.equal(result.rangeLow, 99200);
  assert.equal(result.rangeHigh, 100800);
  assert.equal(result.rangePercent, 1.6129032258064515);
  assert.equal(result.completedCandleCount, 2);
});

test('rejects missing or inconsistent market inputs', () => {
  assert.throws(() => analyzeMarket({ bid: 101, ask: 100, candles: [] }), /ask/);
  assert.throws(() => analyzeMarket({ bid: 99, ask: 100, candles: [] }), /completed/);
});
