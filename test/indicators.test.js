'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { sma, stdevReturns, momentum, rsi } = require('../lib/indicators');

test('sma: null si no hay suficientes datos', () => {
  assert.equal(sma([1, 2, 3], 5), null);
});

test('sma: promedio de las últimas `period` muestras, ignorando las anteriores', () => {
  assert.equal(sma([100, 100, 2, 4, 6], 3), 4); // (2+4+6)/3, el 100 inicial no entra
});

test('momentum: null si no hay suficientes datos', () => {
  assert.equal(momentum([1, 2], 5), null);
});

test('momentum: retorno porcentual entre el valor actual y el de hace `window` días', () => {
  assert.equal(momentum([10, 20, 30, 40], 3), (40 - 10) / 10); // 3.0
});

test('momentum: negativo cuando el precio cayó', () => {
  const m = momentum([50, 40, 30], 2);
  assert.ok(m < 0);
  assert.equal(m, (30 - 50) / 50);
});

test('stdevReturns: null si no hay suficientes datos', () => {
  assert.equal(stdevReturns([1, 2], 5), null);
});

test('stdevReturns: cero cuando los retornos diarios son constantes', () => {
  // Crecimiento geométrico constante del 10% por día -> todos los retornos son iguales -> stdev 0.
  const closes = [100, 110, 121, 133.1, 146.41];
  const sd = stdevReturns(closes, 4);
  assert.ok(sd < 1e-9, `esperaba ~0, obtuve ${sd}`);
});

test('rsi: null si no hay suficientes datos', () => {
  assert.equal(rsi([1, 2, 3], 10), null);
});

test('rsi: 100 cuando todos los días subieron (sin pérdidas)', () => {
  const closes = [10, 11, 12, 13, 14, 15];
  assert.equal(rsi(closes, 5), 100);
});

test('rsi: 0 cuando todos los días bajaron (sin ganancias)', () => {
  const closes = [15, 14, 13, 12, 11, 10];
  assert.equal(rsi(closes, 5), 0);
});

test('rsi: en una serie mixta cae estrictamente entre 0 y 100', () => {
  const closes = [10, 11, 10.5, 11.5, 11, 12];
  const v = rsi(closes, 5);
  assert.ok(v > 0 && v < 100, `esperaba 0 < v < 100, obtuve ${v}`);
});
