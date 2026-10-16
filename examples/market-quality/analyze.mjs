import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

export function assessTicker(record, { nowMs = Date.now(), maxAgeMs = 60_000 } = {}) {
  const issues = [];
  const timestamp = Number(record?.ts);
  const bid = Number(record?.bidPx);
  const ask = Number(record?.askPx);
  const last = Number(record?.last);

  if (!record?.instId) issues.push({ code: 'missing-instrument', message: 'Enstrüman adı eksik.' });
  if (!record?.last || !Number.isFinite(last) || last <= 0) issues.push({ code: 'missing-last', message: 'Geçerli son fiyat yok.' });
  if (!Number.isFinite(timestamp) || timestamp <= 0) issues.push({ code: 'missing-timestamp', message: 'Geçerli veri zamanı yok.' });
  if (!record?.bidPx || !record?.askPx || !Number.isFinite(bid) || !Number.isFinite(ask) || bid <= 0 || ask <= 0) {
    issues.push({ code: 'missing-book', message: 'Geçerli bid/ask alanları yok.' });
  } else if (bid > ask) {
    issues.push({ code: 'inverted-book', message: 'Bid, ask değerinden büyük.' });
  }

  const ageMs = Number.isFinite(timestamp) && timestamp > 0 ? nowMs - timestamp : null;
  if (ageMs !== null && (ageMs < 0 || ageMs > maxAgeMs)) {
    issues.push({ code: 'stale', message: ageMs < 0 ? 'Veri zamanı gelecekte.' : 'Veri belirlenen eşikten eski.' });
  }

  const spreadBps = issues.some((issue) => issue.code === 'missing-book' || issue.code === 'inverted-book')
    ? null
    : Number((((ask - bid) / ((ask + bid) / 2)) * 10_000).toFixed(2));

  return {
    instrument: record?.instId ?? null,
    sourceTimestamp: ageMs === null ? null : new Date(timestamp).toISOString(),
    ageMs,
    spreadBps,
    status: issues.length ? 'needs-review' : 'ok',
    issues,
  };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const live = process.argv.includes('--live');
  const fixturePath = fileURLToPath(new URL('./ticker.sample.json', import.meta.url));
  const input = live
    ? JSON.parse(execFileSync('okx', ['market', 'ticker', 'BTC-USDT', '--json'], {
        encoding: 'utf8', env: { ...process.env, OKX_SITE: 'tr' }, timeout: 15_000,
      }))
    : JSON.parse(readFileSync(fixturePath, 'utf8'));
  const record = Array.isArray(input) ? input[0] : input?.data?.[0] ?? input;
  const nowMs = live ? Date.now() : Number(record.ts) + 30_000;
  console.log(JSON.stringify({ mode: live ? 'live-read-only' : 'simulated-fixture', result: assessTicker(record, { nowMs }) }, null, 2));
}
