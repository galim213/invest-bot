'use strict';
const test = require('node:test');
const assert = require('node:assert');

const MODULE = require.resolve('../lib/fundamentals');
const realFetch = global.fetch;

function load() {
  delete require.cache[MODULE]; // cachedAuth es estado de módulo → módulo fresco por test
  return require('../lib/fundamentals');
}

function res({ ok = true, status = 200, body = '', cookies = [] } = {}) {
  return {
    ok,
    status,
    headers: { getSetCookie: () => cookies, get: () => cookies[0] || null },
    text: async () => body,
  };
}

test('auth: sin Set-Cookie devuelve error diagnosticado', async () => {
  global.fetch = async () => res({ status: 404, cookies: [] });
  try {
    const { fetchFundamentals } = load();
    const r = await fetchFundamentals('AAPL');
    assert.match(r.error, /auth: .*Set-Cookie vacío/);
  } finally { global.fetch = realFetch; }
});

test('fetch caído: el error incluye la causa real', async () => {
  global.fetch = async () => { const e = new Error('fetch failed'); e.cause = { code: 'ENOTFOUND' }; throw e; };
  try {
    const { fetchFundamentals } = load();
    const r = await fetchFundamentals('AAPL');
    assert.match(r.error, /inalcanzable.*ENOTFOUND/);
  } finally { global.fetch = realFetch; }
});

test('fetchFundamentals mapea campos raw y fetchFundamentalsAll separa errores', async () => {
  global.fetch = async (url) => {
    if (url.includes('fc.yahoo.com')) return res({ status: 404, cookies: ['A=1; Path=/'] });
    if (url.includes('getcrumb')) return res({ body: 'crumb123' });
    if (url.includes('/BAD')) return res({ body: JSON.stringify({ quoteSummary: { result: null, error: { description: 'Not found' } } }) });
    const body = { quoteSummary: { result: [{
      assetProfile: { sector: 'Technology' },
      price: { marketCap: { raw: 123 } },
      summaryDetail: { trailingPE: { raw: 20 } },
      financialData: { returnOnEquity: { raw: 0.3 }, recommendationKey: 'buy' },
    }] } };
    return res({ body: JSON.stringify(body) });
  };
  try {
    const { fetchFundamentalsAll } = load();
    const { data, errors } = await fetchFundamentalsAll(['GOOD', 'BAD']);
    const g = data.get('GOOD');
    assert.strictEqual(g.sector, 'Technology');
    assert.strictEqual(g.marketCap, 123);
    assert.strictEqual(g.trailingPE, 20);
    assert.strictEqual(g.returnOnEquity, 0.3);
    assert.strictEqual(g.forwardPE, null);
    assert.strictEqual(g.recommendationKey, 'buy');
    assert.strictEqual(errors.length, 1);
    assert.strictEqual(errors[0].ticker, 'BAD');
    assert.match(errors[0].message, /Not found/);
  } finally { global.fetch = realFetch; }
});
