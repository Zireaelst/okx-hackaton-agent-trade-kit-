export function analyzeMarket({ bid, ask, candles }) {
  if (!Number.isFinite(bid) || !Number.isFinite(ask) || bid <= 0 || ask < bid) {
    throw new Error('A valid ask must be at least the positive bid.');
  }

  const completed = candles.filter((candle) => candle.complete === true);
  if (completed.length === 0 || completed.some((candle) =>
    !Number.isFinite(candle.high) || !Number.isFinite(candle.low) ||
    candle.low <= 0 || candle.high < candle.low
  )) {
    throw new Error('At least one valid completed candle is required.');
  }

  const mid = (bid + ask) / 2;
  const rangeLow = Math.min(...completed.map((candle) => candle.low));
  const rangeHigh = Math.max(...completed.map((candle) => candle.high));

  return {
    mid,
    spreadBps: ((ask - bid) / mid) * 10000,
    rangeLow,
    rangeHigh,
    rangePercent: ((rangeHigh - rangeLow) / rangeLow) * 100,
    completedCandleCount: completed.length,
  };
}
