'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { appendScoreHistory, loadScoreHistory } = require('../lib/scoreHistory');

function tmpFile() {
  return path.join(os.tmpdir(), `score-history-test-${Date.now()}-${Math.random().toString(36).slice(2)}.json`);
}

function evalRow(ticker, score, signal, lastClose, overrides = {}) {
  return { ticker, score, signal, lastClose, reasons: [], metrics: {}, ...overrides };
}

test('appendScoreHistory: guarda score/señal solo para los tickers de interés', () => {
  const file = tmpFile();
  const evaluations = [evalRow('AAPL', 40, 'BUY', 200), evalRow('OTHER', -10, 'HOLD', 50)];
  const added = appendScoreHistory(evaluations, ['AAPL'], '2026-01-01', file);

  assert.equal(added, 1);
  const history = loadScoreHistory(file);
  assert.equal(history.length, 1);
  assert.equal(history[0].ticker, 'AAPL');
  assert.equal(history[0].score, 40);
  fs.unlinkSync(file);
});

test('appendScoreHistory: es idempotente — no duplica la misma fecha+ticker', () => {
  const file = tmpFile();
  appendScoreHistory([evalRow('AAPL', 40, 'BUY', 200)], ['AAPL'], '2026-01-01', file);
  const addedAgain = appendScoreHistory([evalRow('AAPL', -40, 'SELL', 190)], ['AAPL'], '2026-01-01', file);

  assert.equal(addedAgain, 0);
  const history = loadScoreHistory(file);
  assert.equal(history.length, 1);
  assert.equal(history[0].score, 40); // no se pisó
  fs.unlinkSync(file);
});

test('appendScoreHistory: ignora un ticker de interés sin evaluación ese día', () => {
  const file = tmpFile();
  const added = appendScoreHistory([evalRow('AAPL', 40, 'BUY', 200)], ['AAPL', 'MISSING'], '2026-01-01', file);
  assert.equal(added, 1);
  const history = loadScoreHistory(file);
  assert.equal(history.length, 1);
  assert.equal(history.find((h) => h.ticker === 'MISSING'), undefined);
  fs.unlinkSync(file);
});

test('appendScoreHistory: ignora una evaluación marcada con error', () => {
  const file = tmpFile();
  const added = appendScoreHistory([evalRow('AAPL', 0, 'HOLD', null, { error: 'sin datos' })], ['AAPL'], '2026-01-01', file);
  assert.equal(added, 0);
  assert.equal(fs.existsSync(file), false); // nada que agregar -> no se escribe el archivo
});

test('appendScoreHistory: distintos días del mismo ticker se van acumulando', () => {
  const file = tmpFile();
  appendScoreHistory([evalRow('AAPL', 10, 'HOLD', 190)], ['AAPL'], '2026-01-01', file);
  appendScoreHistory([evalRow('AAPL', 40, 'BUY', 200)], ['AAPL'], '2026-01-02', file);

  const history = loadScoreHistory(file);
  assert.equal(history.length, 2);
  assert.deepEqual(history.map((h) => h.date), ['2026-01-01', '2026-01-02']);
  fs.unlinkSync(file);
});
