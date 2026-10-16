import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { assessTicker } from '../market-quality/analyze.mjs';

const fixturePath = fileURLToPath(new URL('../market-quality/ticker.sample.json', import.meta.url));

function send(res, status, body) {
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' });
  res.end(JSON.stringify(body, null, 2));
}

export function createAtKService({ live = false } = {}) {
  return createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');
    if (req.method !== 'GET' || url.pathname !== '/summary') {
      return send(res, 404, { error: 'GET /summary yolunu kullan.' });
    }
    if (url.searchParams.get('instId') !== 'BTC-USDT') {
      return send(res, 400, { error: 'Bu örnek yalnız BTC-USDT enstrümanını destekler.' });
    }

    try {
      const input = live
        ? JSON.parse(execFileSync('okx', ['market', 'ticker', 'BTC-USDT', '--json'], {
            encoding: 'utf8', env: { ...process.env, OKX_SITE: 'tr' }, timeout: 15_000,
          }))
        : JSON.parse(readFileSync(fixturePath, 'utf8'));
      const ticker = Array.isArray(input) ? input[0] : input?.data?.[0] ?? input;
      const nowMs = live ? Date.now() : Number(ticker.ts) + 30_000;
      return send(res, 200, {
        mode: live ? 'live-read-only' : 'simulated-fixture',
        source: live ? 'OKX TR ATK public market ticker' : 'Local simulated JSON fixture',
        instrument: ticker.instId,
        quality: assessTicker(ticker, { nowMs }),
      });
    } catch {
      return send(res, 502, { error: 'ATK yanıtı okunamadı. Komutu, bölgeyi ve ağ erişimini kontrol et; veri uydurulmadı.' });
    }
  });
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const live = process.argv.includes('--live');
  createAtKService({ live }).listen(8787, '127.0.0.1', () => {
    console.log(`ATK örnek servisi: http://127.0.0.1:8787/summary?instId=BTC-USDT (${live ? 'canlı salt okunur' : 'temsili'})`);
  });
}
