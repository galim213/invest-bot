'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { dividendStatsByTicker, positionsJson, lastRealDividendByTicker } = require('../lib/report');

function div(ticker, date, amountPerShare, usdAmount) {
  return { action: 'DIVIDEND', ticker, date, price: amountPerShare, usdAmount };
}

test('dividendStatsByTicker: ignora entradas que no son dividendos', () => {
  const history = [{ action: 'BUY', ticker: 'JNJ' }, div('JNJ', '2026-03-01', 1.2, 10)];
  const stats = dividendStatsByTicker(history, '2026-10-22');
  assert.equal(stats.get('JNJ').dividendsAllTime, 10);
});

test('dividendStatsByTicker: toma el dividendo de fecha más reciente como "último"', () => {
  const history = [div('JNJ', '2026-03-01', 1.2, 10), div('JNJ', '2026-06-01', 1.25, 11), div('JNJ', '2026-01-01', 1.1, 9)];
  const stats = dividendStatsByTicker(history, '2026-10-22');
  const jnj = stats.get('JNJ');
  assert.equal(jnj.lastDividend.date, '2026-06-01');
  assert.equal(jnj.lastDividend.usdAmount, 11);
  assert.equal(jnj.lastDividend.amountPerShare, 1.25);
});

test('dividendStatsByTicker: dividendsYtd solo suma dividendos del mismo año que asOfDate', () => {
  const history = [div('JNJ', '2025-11-01', 1.1, 9), div('JNJ', '2026-02-01', 1.2, 10), div('JNJ', '2026-06-01', 1.25, 11)];
  const stats = dividendStatsByTicker(history, '2026-10-22');
  const jnj = stats.get('JNJ');
  assert.equal(jnj.dividendsYtd, 21); // solo los dos de 2026
  assert.equal(jnj.dividendsAllTime, 30); // los tres
});

test('dividendStatsByTicker: separa correctamente por ticker', () => {
  const history = [div('JNJ', '2026-01-01', 1.2, 10), div('PG', '2026-01-01', 0.9, 8)];
  const stats = dividendStatsByTicker(history, '2026-10-22');
  assert.equal(stats.get('JNJ').dividendsAllTime, 10);
  assert.equal(stats.get('PG').dividendsAllTime, 8);
});

test('dividendStatsByTicker: un ticker sin dividendos no aparece en el mapa', () => {
  const stats = dividendStatsByTicker([], '2026-10-22');
  assert.equal(stats.size, 0);
  assert.equal(stats.get('JNJ'), undefined);
});

test('positionsJson: incluye weightPct calculado contra el valor total del sleeve', () => {
  const positions = { AAPL: { shares: 2, avgCost: 100, openedAt: '2026-01-01' } };
  const prices = new Map([['AAPL', 150]]);
  const result = positionsJson(positions, prices, new Map(), null, 1000); // AAPL vale 300 de un total de 1000

  assert.equal(result.length, 1);
  assert.ok(Math.abs(result[0].weightPct - 30) < 1e-9);
  assert.equal(result[0].marketValue, 300);
});

test('positionsJson: sin totalValue, weightPct queda null (no divide por cero ni inventa un número)', () => {
  const positions = { AAPL: { shares: 2, avgCost: 100, openedAt: '2026-01-01' } };
  const result = positionsJson(positions, new Map([['AAPL', 150]]), new Map(), null, null);
  assert.equal(result[0].weightPct, null);
});

test('positionsJson: adjunta las estadísticas de dividendos del ticker cuando se pasan', () => {
  const positions = { JNJ: { shares: 5, avgCost: 150, openedAt: '2026-01-01' } };
  const dividendStats = dividendStatsByTicker([div('JNJ', '2026-06-01', 1.25, 6.25)], '2026-10-22');
  const result = positionsJson(positions, new Map([['JNJ', 160]]), new Map(), dividendStats, 1000);

  assert.equal(result[0].lastDividendDate, '2026-06-01');
  assert.equal(result[0].lastDividendUsd, 6.25);
  assert.equal(result[0].dividendsAllTime, 6.25);
});

test('positionsJson: un ticker sin dividendos registrados queda con esos campos en null, no en 0 falso', () => {
  const positions = { MRNA: { shares: 1, avgCost: 200, openedAt: '2026-01-01' } };
  const dividendStats = dividendStatsByTicker([div('JNJ', '2026-06-01', 1.25, 6.25)], '2026-10-22'); // no incluye MRNA
  const result = positionsJson(positions, new Map([['MRNA', 210]]), new Map(), dividendStats, 1000);

  assert.equal(result[0].lastDividendDate, null);
  assert.equal(result[0].dividendsAllTime, null);
});

test('lastRealDividendByTicker: toma el dividendo más reciente del historial real (Yahoo), sin importar lo cobrado', () => {
  const allDividends = new Map([
    ['JNJ', [{ date: '2026-02-18', amountPerShare: 1.24 }, { date: '2026-05-20', amountPerShare: 1.26 }, { date: '2025-11-19', amountPerShare: 1.24 }]],
  ]);
  const result = lastRealDividendByTicker(allDividends);
  assert.deepEqual(result.get('JNJ'), { date: '2026-05-20', amountPerShare: 1.26 });
});

test('lastRealDividendByTicker: sin historial o mapa vacío, no explota', () => {
  assert.equal(lastRealDividendByTicker(null).size, 0);
  assert.equal(lastRealDividendByTicker(new Map([['JNJ', []]])).size, 0);
});

test('positionsJson: muestra el dividendo real de la empresa aunque todavía no lo hayamos cobrado nosotros', () => {
  const positions = { JNJ: { shares: 5, avgCost: 150, openedAt: '2026-10-20' } }; // posición recién abierta
  const dividendStats = dividendStatsByTicker([], '2026-10-22'); // nosotros todavía no cobramos nada
  const realDividends = lastRealDividendByTicker(new Map([['JNJ', [{ date: '2026-08-15', amountPerShare: 1.26 }]]]));
  const result = positionsJson(positions, new Map([['JNJ', 160]]), new Map(), dividendStats, 1000, realDividends);

  assert.equal(result[0].lastRealDividendDate, '2026-08-15'); // la empresa sí pagó
  assert.equal(result[0].lastRealDividendPerShare, 1.26);
  assert.equal(result[0].lastDividendDate, null); // pero nosotros todavía no lo cobramos (posición nueva)
  assert.equal(result[0].dividendsAllTime, null);
});
