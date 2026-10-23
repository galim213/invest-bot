'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const {
  loadVariant,
  saveVariant,
  runVariantDay,
  buildVariantMarkdown,
  buildVariantJson,
} = require('../lib/variantPortfolio');

function tmpFile() {
  return path.join(os.tmpdir(), `variant-portfolio-test-${Date.now()}-${Math.random().toString(36).slice(2)}.json`);
}

function candlesFromCloses(closes) {
  return closes.map((c) => ({ close: c, adjClose: c }));
}

/** Sube con algunos días de baja intercalados — tendencia alcista real sin pegar el RSI en 100
 * (una suba monotónica pura activa el guardrail de sobrecompra, ver test/strategy.test.js). */
function uptrendWithPullbacks(start, days) {
  const out = [start];
  for (let i = 1; i < days; i++) {
    const down = i % 2 === 0;
    out.push(out[i - 1] * (1 + (down ? -0.02 : 0.03)));
  }
  return out;
}

test('loadVariant: sin archivo previo, arranca con todo el capital en cash', () => {
  const file = tmpFile();
  const state = loadVariant('test', 300, file);
  assert.equal(state.cash, 300);
  assert.equal(state.startingCapital, 300);
  assert.deepEqual(state.positions, {});
});

test('saveVariant + loadVariant: round-trip conserva posiciones y cash', () => {
  const file = tmpFile();
  try {
    const state = loadVariant('test', 300, file);
    state.cash = 123.45;
    state.positions.AAPL = { shares: 2, avgCost: 100, openedAt: '2026-01-01' };
    saveVariant('test', state, file);

    const reloaded = loadVariant('test', 300, file);
    assert.equal(reloaded.cash, 123.45);
    assert.equal(reloaded.positions.AAPL.shares, 2);
  } finally {
    fs.unlinkSync(file);
  }
});

test('runVariantDay: una tendencia alcista fuerte abre una posición BUY y queda reflejada en el snapshot', () => {
  const file = tmpFile();
  const state = loadVariant('test', 300, file);
  const closes = uptrendWithPullbacks(100, 220); // sube sostenido, suficiente historia para SMA200
  const candlesByTicker = new Map([['TEST', { candles: candlesFromCloses(closes) }]]);

  const { trades, snapshot } = runVariantDay({ state, candlesByTicker, date: '2026-01-01' });

  assert.ok(trades.some((t) => t.action === 'BUY' && t.ticker === 'TEST'));
  assert.ok(state.positions.TEST);
  assert.equal(snapshot.date, '2026-01-01');
  assert.ok(snapshot.totalValue <= 300 + 1e-9); // comprar no inventa valor
});

test('runVariantDay: sin ninguna señal BUY/SELL, no ejecuta trades y el snapshot queda en el capital inicial', () => {
  const file = tmpFile();
  const state = loadVariant('test', 300, file);
  const candlesByTicker = new Map([['FLAT', { candles: candlesFromCloses(Array(60).fill(100)) }]]); // precio plano: sin señal

  const { trades, snapshot } = runVariantDay({ state, candlesByTicker, date: '2026-01-01' });

  assert.equal(trades.length, 0);
  assert.ok(Math.abs(snapshot.totalValue - 300) < 1e-9);
});

test('buildVariantMarkdown: incluye el disclaimer de experimento no validado por backtest y el valor de hoy', () => {
  const state = { startingCapital: 300, positions: {} };
  const snapshot = { totalValue: 310.5, pnl: 10.5, pnlPct: 3.5 };
  const md = buildVariantMarkdown({
    date: '2026-01-01',
    label: 'Mid + Small cap',
    universeLabel: 'S&P MidCap 400 + SmallCap 600',
    state,
    snapshot,
    trades: [],
  });

  assert.ok(/no validado por backtest/i.test(md));
  assert.ok(/310\.50/.test(md));
  assert.ok(/Sin movimientos hoy/.test(md));
});

test('buildVariantJson: expone posiciones como lista con el ticker incluido', () => {
  const state = {
    startingCapital: 300,
    positions: { AAPL: { shares: 2, avgCost: 100, openedAt: '2026-01-01' } },
    dailySnapshots: [],
  };
  const snapshot = { totalValue: 310, pnl: 10, pnlPct: 3.3 };
  const json = buildVariantJson({ date: '2026-01-01', name: 'global', label: 'Internacional', universeLabel: 'ADRs', state, snapshot, trades: [] });

  assert.equal(json.positions.length, 1);
  assert.equal(json.positions[0].ticker, 'AAPL');
  assert.equal(json.positions[0].shares, 2);
});
