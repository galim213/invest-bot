'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const marketData = require('../lib/marketData');
const marketIntel = require('../lib/marketIntel');
const { SECTOR_ETFS } = require('../config');

function candles(closes) {
  return closes.map((close) => ({ close }));
}

async function withStub(dataByTicker, fn) {
  const original = marketData.fetchAll;
  marketData.fetchAll = async () => ({ data: new Map(Object.entries(dataByTicker)), errors: [] });
  try {
    return await fn();
  } finally {
    marketData.fetchAll = original;
  }
}

test('buildSectorRotation ordena por momentum a 1 mes descendente', async () => {
  const [a, b] = SECTOR_ETFS;
  // a: +10% en 21 ruedas; b: +30% en 21 ruedas (22 velas)
  const flat = (start, end) => candles([start, ...Array(20).fill(start), end]);
  const out = await withStub(
    { [a.ticker]: { candles: flat(100, 110) }, [b.ticker]: { candles: flat(100, 130) } },
    () => marketIntel.buildSectorRotation()
  );
  assert.equal(out.rows[0].ticker, b.ticker);
  assert.ok(Math.abs(out.rows[0].momentum1m - 0.3) < 1e-9);
  assert.equal(out.rows[1].ticker, a.ticker);
  assert.equal(out.rows[0].sector, b.sector);
});

test('buildSectorRotation: momentum null con pocas velas y va al final', async () => {
  const [a, b] = SECTOR_ETFS;
  const out = await withStub(
    { [a.ticker]: { candles: candles([100, 101]) }, [b.ticker]: { candles: candles([100, ...Array(20).fill(100), 105]) } },
    () => marketIntel.buildSectorRotation()
  );
  assert.equal(out.rows[0].ticker, b.ticker);
  assert.equal(out.rows[1].momentum1m, null);
  assert.equal(out.rows[1].momentum3m, null);
});

test('buildMarketIntelMarkdown formatea nulos como — y agrupa por sector', () => {
  const md = marketIntel.buildMarketIntelMarkdown({
    date: '2026-01-01',
    sectorRotation: { rows: [{ sector: 'Tech', ticker: 'XLK', momentum1m: 0.05, momentum3m: null, lastClose: 200 }] },
    qualityCompanies: {
      companies: [
        { ticker: 'AAA', name: 'A Corp', sector: 'Tech', why: 'moat', fundamentals: { marketCap: 2e9, profitMargin: 0.2 } },
        { ticker: 'BBB', name: 'B Corp', sector: 'Tech', why: 'x', fundamentals: null },
      ],
    },
  });
  assert.match(md, /\| Tech \| XLK \| 5\.0% \| — \| \$200\.00 \|/);
  assert.match(md, /Market cap: \$2\.0B/);
  assert.match(md, /Sin datos fundamentales disponibles/);
  assert.equal(md.match(/### Tech/g).length, 1);
});

test('buildResearchNotesMarkdown muestra veredicto, aviso sin Yahoo y casos vacíos', () => {
  const base = { currentPrice: null, bull: [], bear: [], sellTriggers: [], yahooDataAvailable: true };
  const md = marketIntel.buildResearchNotesMarkdown({
    date: '2026-01-01',
    notes: [
      { ...base, ticker: 'AAA', verdict: 'POSITIVO', bull: ['sube'] },
      { ...base, ticker: 'BBB', verdict: 'CAUTELA', bear: ['cae'], sellTriggers: ['stop'], yahooDataAvailable: false },
      { ...base, ticker: 'CCC', verdict: 'NEUTRAL' },
    ],
  });
  assert.match(md, /## AAA — 🟢 POSITIVO/);
  assert.match(md, /## BBB — 🟡 CAUTELA/);
  assert.match(md, /## CCC — ⚪ NEUTRAL/);
  assert.match(md, /✅ sube/);
  assert.match(md, /🚨 stop/);
  assert.equal(md.match(/Yahoo Finance no estuvo disponible/g).length, 1);
  assert.equal(md.match(/Sin señales claras/g).length, 1);
});
