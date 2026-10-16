import test from 'node:test';
import assert from 'node:assert/strict';
import { createAtKService } from '../examples/atk-service/server.mjs';
import { createPaymentDemoServer } from '../examples/payment-402/server.mjs';

async function withServer(server, fn) {
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  try {
    const { port } = server.address();
    await fn(`http://127.0.0.1:${port}`);
  } finally {
    await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  }
}

test('ATK service prototype returns a source-labeled sample and validates inputs', async () => {
  await withServer(createAtKService(), async (base) => {
    const response = await fetch(`${base}/summary?instId=BTC-USDT`);
    const body = await response.json();
    assert.equal(response.status, 200);
    assert.equal(body.mode, 'simulated-fixture');
    assert.equal(body.instrument, 'BTC-USDT');
    assert.equal(body.quality.status, 'ok');
    assert.equal((await fetch(`${base}/summary?instId=ETH-USDT`)).status, 400);
  });
});

test('payment demo uses HTTP 402 and only a clearly fake local approval header', async () => {
  await withServer(createPaymentDemoServer(), async (base) => {
    const challenge = await fetch(`${base}/summary`);
    const demand = await challenge.json();
    assert.equal(challenge.status, 402);
    assert.equal(demand.demo, true);
    assert.equal(demand.realPaymentRequired, false);

    const approved = await fetch(`${base}/summary`, { headers: { 'x-demo-approved': 'yes' } });
    const result = await approved.json();
    assert.equal(approved.status, 200);
    assert.equal(result.demo, true);
    assert.equal(result.paymentExecuted, false);
  });
});
