'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { dailyReturns, mean, stdev, sharpeRatio, sortinoRatio, beta, maxDrawdown } = require('../lib/metrics');

test('dailyReturns: retorno porcentual día a día', () => {
  assert.deepEqual(dailyReturns([100, 110, 99]), [0.1, -0.1]);
});

test('mean: promedio simple, 0 en array vacío', () => {
  assert.equal(mean([1, 2, 3, 4]), 2.5);
  assert.equal(mean([]), 0);
});

test('stdev: 0 con un solo elemento o lista vacía', () => {
  assert.equal(stdev([5]), 0);
  assert.equal(stdev([]), 0);
});

test('stdev: desviación estándar muestral conocida', () => {
  // valores 2,4,4,4,5,5,7,9 -> stdev muestral = 2.138...
  const sd = stdev([2, 4, 4, 4, 5, 5, 7, 9]);
  assert.ok(Math.abs(sd - 2.138) < 0.01, `obtuve ${sd}`);
});

test('sharpeRatio: null cuando no hay volatilidad (serie plana)', () => {
  assert.equal(sharpeRatio([100, 100, 100, 100]), null);
});

test('sharpeRatio: positivo cuando los retornos son consistentemente positivos', () => {
  const s = sharpeRatio([100, 101, 102.5, 104.2, 106.5]);
  assert.ok(s > 0, `esperaba Sharpe > 0, obtuve ${s}`);
});

test('sortinoRatio: null cuando no hay downside (todos los retornos >= 0)', () => {
  // Sin retornos negativos, downside queda en [0,0] -> downsideDev 0 -> null.
  assert.equal(sortinoRatio([100, 101, 102, 103]), null);
});

test('sortinoRatio: definido cuando hay al menos un retorno negativo', () => {
  const s = sortinoRatio([100, 105, 102, 108, 104, 110]);
  assert.ok(s !== null && Number.isFinite(s));
});

test('beta: null con menos de 2 retornos', () => {
  assert.equal(beta([100], [50]), null);
});

test('beta: ~1 cuando la estrategia se mueve idéntico al benchmark', () => {
  const benchmark = [100, 105, 103, 110, 108, 115];
  const b = beta(benchmark, benchmark);
  assert.ok(Math.abs(b - 1) < 1e-9, `esperaba ~1, obtuve ${b}`);
});

test('beta: null cuando el benchmark no tiene varianza', () => {
  assert.equal(beta([100, 105, 103, 110], [50, 50, 50, 50]), null);
});

test('maxDrawdown: 0 cuando la serie solo sube', () => {
  assert.equal(maxDrawdown([100, 110, 120, 130]), 0);
});

test('maxDrawdown: caída porcentual desde el pico anterior', () => {
  // Pico en 200, cae a 150 -> drawdown de -25%.
  const dd = maxDrawdown([100, 200, 150, 180]);
  assert.ok(Math.abs(dd - -25) < 1e-9, `esperaba -25, obtuve ${dd}`);
});

test('maxDrawdown: toma la peor caída entre varios picos/valles', () => {
  // Pico 100 -> valle 90 (-10%); pico 300 -> valle 150 (-50%, la peor).
  const dd = maxDrawdown([100, 90, 300, 150]);
  assert.ok(Math.abs(dd - -50) < 1e-9, `esperaba -50, obtuve ${dd}`);
});
