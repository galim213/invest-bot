'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { appendHistory, loadHistory, computeTrackRecord } = require('../lib/trackRecord');

function tmpFile() {
  return path.join(os.tmpdir(), `research-notes-history-test-${Date.now()}-${Math.random().toString(36).slice(2)}.json`);
}

function note(ticker, verdict, currentPrice, overrides = {}) {
  return { ticker, verdict, currentPrice, bull: [], bear: [], sellTriggers: [], ...overrides };
}

test('appendHistory: agrega una entrada por ticker con el precio del momento', () => {
  const file = tmpFile();
  const added = appendHistory([note('AAPL', 'POSITIVO', 200)], '2026-01-01', file);
  assert.equal(added, 1);

  const history = loadHistory(file);
  assert.equal(history.length, 1);
  assert.equal(history[0].ticker, 'AAPL');
  assert.equal(history[0].priceAtVerdict, 200);
  fs.unlinkSync(file);
});

test('appendHistory: es idempotente — no duplica la misma fecha+ticker', () => {
  const file = tmpFile();
  appendHistory([note('AAPL', 'POSITIVO', 200)], '2026-01-01', file);
  const addedSecondTime = appendHistory([note('AAPL', 'CAUTELA', 210)], '2026-01-01', file);

  assert.equal(addedSecondTime, 0);
  const history = loadHistory(file);
  assert.equal(history.length, 1);
  assert.equal(history[0].verdict, 'POSITIVO'); // no se pisó con el segundo intento
  fs.unlinkSync(file);
});

test('appendHistory: ignora notas sin precio (no se puede medir retorno futuro)', () => {
  const file = tmpFile();
  const added = appendHistory([note('AAPL', 'POSITIVO', null)], '2026-01-01', file);
  assert.equal(added, 0);
  assert.equal(loadHistory(file).length, 0);
});

test('appendHistory: distintos tickers el mismo día se agregan todos', () => {
  const file = tmpFile();
  const added = appendHistory([note('AAPL', 'POSITIVO', 200), note('MSFT', 'CAUTELA', 400)], '2026-01-01', file);
  assert.equal(added, 2);
  fs.unlinkSync(file);
});

test('computeTrackRecord: una entrada con menos días que el horizonte no es elegible', () => {
  const history = [{ date: '2026-01-01', ticker: 'AAPL', verdict: 'POSITIVO', priceAtVerdict: 100 }];
  const prices = new Map([['AAPL', 110]]);
  const result = computeTrackRecord(history, prices, { minDaysElapsed: 30, asOfDate: new Date('2026-01-10') }); // solo 9 días
  assert.equal(result.totalEligible, 0);
});

test('computeTrackRecord: calcula el retorno hacia adelante correctamente una vez pasado el horizonte', () => {
  const history = [{ date: '2026-01-01', ticker: 'AAPL', verdict: 'POSITIVO', priceAtVerdict: 100 }];
  const prices = new Map([['AAPL', 120]]);
  const result = computeTrackRecord(history, prices, { minDaysElapsed: 30, asOfDate: new Date('2026-02-05') }); // 35 días

  assert.equal(result.totalEligible, 1);
  assert.equal(result.summary.length, 1);
  assert.equal(result.summary[0].verdict, 'POSITIVO');
  assert.ok(Math.abs(result.summary[0].avgForwardReturnPct - 20) < 1e-9);
  assert.equal(result.summary[0].winRatePct, 100);
});

test('computeTrackRecord: agrupa por veredicto y ordena por mejor retorno promedio', () => {
  const history = [
    { date: '2026-01-01', ticker: 'AAPL', verdict: 'POSITIVO', priceAtVerdict: 100 },
    { date: '2026-01-01', ticker: 'MSFT', verdict: 'POSITIVO', priceAtVerdict: 100 },
    { date: '2026-01-01', ticker: 'XOM', verdict: 'CAUTELA', priceAtVerdict: 100 },
  ];
  const prices = new Map([
    ['AAPL', 110], // +10%
    ['MSFT', 130], // +30% -> promedio POSITIVO = 20%
    ['XOM', 90], // -10% -> promedio CAUTELA = -10%
  ]);
  const result = computeTrackRecord(history, prices, { minDaysElapsed: 30, asOfDate: new Date('2026-02-05') });

  assert.equal(result.summary[0].verdict, 'POSITIVO'); // el de mejor retorno promedio va primero
  assert.ok(Math.abs(result.summary[0].avgForwardReturnPct - 20) < 1e-9);
  assert.equal(result.summary[1].verdict, 'CAUTELA');
  assert.ok(Math.abs(result.summary[1].avgForwardReturnPct - -10) < 1e-9);
});

test('computeTrackRecord: una entrada sin precio disponible hoy queda excluida', () => {
  const history = [{ date: '2026-01-01', ticker: 'DELISTED', verdict: 'POSITIVO', priceAtVerdict: 100 }];
  const prices = new Map(); // sin precio para DELISTED
  const result = computeTrackRecord(history, prices, { minDaysElapsed: 30, asOfDate: new Date('2026-02-05') });
  assert.equal(result.totalEligible, 0);
});
