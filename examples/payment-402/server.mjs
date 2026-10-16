import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';

function send(res, status, body) {
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' });
  res.end(JSON.stringify(body, null, 2));
}

export function createPaymentDemoServer() {
  return createServer((req, res) => {
    if (req.method !== 'GET' || new URL(req.url, 'http://localhost').pathname !== '/summary') {
      return send(res, 404, { error: 'GET /summary yolunu kullan.' });
    }

    if (req.headers['x-demo-approved'] !== 'yes') {
      return send(res, 402, {
        demo: true,
        realPaymentRequired: false,
        message: 'Bu yerel sunucu yalnız HTTP 402 durumunu öğretir; gerçek x402 challenge değildir.',
        sampleAmount: '0.02 USDT (temsili)',
        nextStep: 'Yalnız demo için x-demo-approved: yes başlığıyla tekrar iste.',
      });
    }

    return send(res, 200, {
      demo: true,
      paymentExecuted: false,
      message: 'Temsili onaydan sonra örnek içerik açıldı.',
      summary: 'Agentic payment akışının yerel örnek sonucu.',
    });
  });
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  createPaymentDemoServer().listen(8788, '127.0.0.1', () => {
    console.log('Temsili 402 sunucusu: http://127.0.0.1:8788/summary');
  });
}
