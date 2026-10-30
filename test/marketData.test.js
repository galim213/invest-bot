'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { fetchDailyCandles, fetchAll } = require('../lib/marketData');

function withFetch(mock, fn) {
  const orig = global.fetch;
  global.fetch = mock;
  return Promise.resolve(fn()).finally(() => { global.fetch = orig; });
}

const okBody = {
  chart: { result: [{
    meta: { currency: 'USD', regularMarketPrice: 12 },
    timestamp: [1700000000, 1700086400, 1700172800],
    indicators: {
      quote: [{ open: [1, 2, 3], high: [1, 2, 3], low: [1, 2, 3], close: [10, null, 12], volume: [5, 6, 7] }],
      adjclose: [{ adjclose: [9, null, 11] }],
    },
    events: { dividends: { b: { date: 1700086400, amount: 0.5 }, a: { date: 1700000000, amount: 0.4 } } },
  }] },
};
const okRes = () => ({ ok: true, status: 200, json: async () => okBody });

test('fetchDailyCandles descarta velas sin close, usa adjClose y ordena dividendos', async () => {
  await withFetch(async () => okRes(), async () => {
    const d = await fetchDailyCandles('AAA', { includeDividends: true });
    assert.strictEqual(d.candles.length, 2);
    assert.strictEqual(d.candles[0].adjClose, 9);
    assert.strictEqual(d.regularMarketPrice, 12);
    assert.deepStrictEqual(d.dividends.map((x) => x.amountPerShare), [0.4, 0.5]);
  });
});

test('fetchDailyCandles lanza error ante HTTP no-ok o respuesta sin resultado', async () => {
  await withFetch(async () => ({ ok: false, status: 429 }), async () => {
    await assert.rejects(fetchDailyCandles('AAA'), /429/);
  });
  await withFetch(async () => ({ ok: true, json: async () => ({ chart: { result: null, error: { description: 'Not found' } } }) }), async () => {
    await assert.rejects(fetchDailyCandles('AAA'), /Not found/);
  });
});

test('fetchAll tolera fallos individuales y los reporta aparte', async () => {
  await withFetch(async (url) => (url.includes('BAD') ? { ok: false, status: 404 } : okRes()), async () => {
    const { data, errors } = await fetchAll(['AAA', 'BAD', 'CCC']);
    assert.deepStrictEqual([...data.keys()].sort(), ['AAA', 'CCC']);
    assert.strictEqual(errors.length, 1);
    assert.strictEqual(errors[0].ticker, 'BAD');
  });
});
