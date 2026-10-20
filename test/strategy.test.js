'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { evaluateTicker, evaluateAll } = require('../lib/strategy');
const { STRATEGY } = require('../config');

function candlesFromCloses(closes) {
  return closes.map((c) => ({ close: c, adjClose: c }));
}

/** Serie geométrica: crece o decrece un `pctPerDay` constante durante `days` ruedas. */
function geometricSeries(start, pctPerDay, days) {
  const out = [start];
  for (let i = 1; i < days; i++) out.push(out[i - 1] * (1 + pctPerDay));
  return out;
}

test('evaluateTicker: una suba monotónica fuerte queda bloqueada por el guardrail de sobrecompra (RSI>=80)', () => {
  // 220 días subiendo 1.2%/día: el score cruza el umbral de BUY, pero el RSI
  // queda pegado en 100 (todos los días son ganancia) y el guardrail debe
  // convertir la señal en HOLD en vez de abrir una compra en sobrecompra extrema.
  const closes = geometricSeries(100, 0.012, 220);
  const r = evaluateTicker('TEST', candlesFromCloses(closes));

  assert.equal(r.metrics.rsi, 100);
  assert.ok(r.score >= STRATEGY.buyThreshold, `esperaba score >= ${STRATEGY.buyThreshold}, obtuve ${r.score}`);
  assert.equal(r.signal, 'HOLD');
  assert.ok(r.reasons.some((x) => /sobrecompra extrema/i.test(x)));
});

test('evaluateTicker: una baja monotónica sostenida genera señal SELL', () => {
  // 250 días bajando 0.6%/día: tendencia, contexto de fondo y momentum bajistas
  // dominan incluso con el RSI en 0 empujando un poco en contra (zona de sobreventa).
  const closes = geometricSeries(1000, -0.006, 250);
  const r = evaluateTicker('TEST', candlesFromCloses(closes));

  assert.equal(r.metrics.rsi, 0);
  assert.ok(r.score <= STRATEGY.sellThreshold, `esperaba score <= ${STRATEGY.sellThreshold}, obtuve ${r.score}`);
  assert.equal(r.signal, 'SELL');
});

test('evaluateTicker: precio constante -> sin tendencia ni momentum, señal HOLD', () => {
  // Precio constante: SMA rápida == lenta (trend 0) y momentum 0. El RSI es un
  // caso de borde: con cero pérdidas, rsi() devuelve 100 (guarda de división
  // por cero), lo que a su vez resta 20 puntos por "sobrecompra" — por eso el
  // score no queda en 0 sino en -10, y aun así sigue dentro de la zona HOLD.
  const closes = new Array(220).fill(100);
  const r = evaluateTicker('TEST', candlesFromCloses(closes));

  assert.equal(r.metrics.rsi, 100);
  assert.equal(r.score, -10);
  assert.equal(r.signal, 'HOLD');
});

test('evaluateTicker: suma el tilt fundamental al score cuando se provee qualityInfo', () => {
  const closes = new Array(220).fill(100);
  const withoutTilt = evaluateTicker('TEST', candlesFromCloses(closes));
  const withTilt = evaluateTicker('TEST', candlesFromCloses(closes), { qualityScore: 100 }); // percentil máximo

  assert.equal(withoutTilt.fundamentalTilt, null);
  assert.ok(withTilt.fundamentalTilt > 0, `esperaba un tilt positivo, obtuve ${withTilt.fundamentalTilt}`);
  assert.ok(withTilt.score > withoutTilt.score, 'el tilt de calidad debería subir el score respecto al caso sin tilt');
  assert.ok(withTilt.fundamentalTilt <= STRATEGY.fundamentalTiltMax);
});

test('evaluateAll: ordena las evaluaciones por score descendente', () => {
  const data = new Map([
    ['UP', { candles: candlesFromCloses(geometricSeries(100, 0.01, 60)) }],
    ['FLAT', { candles: candlesFromCloses(new Array(60).fill(100)) }],
    ['DOWN', { candles: candlesFromCloses(geometricSeries(100, -0.01, 60)) }],
  ]);
  const evaluations = evaluateAll(data);
  const scores = evaluations.map((e) => e.score);
  const sorted = [...scores].sort((a, b) => b - a);
  assert.deepEqual(scores, sorted);
});

test('evaluateAll: un ticker con datos inválidos no rompe el resto del batch', () => {
  const data = new Map([
    ['BAD', { candles: [] }], // candles.at(-1) es undefined -> .close explota
    ['OK', { candles: candlesFromCloses(new Array(60).fill(100)) }],
  ]);
  const evaluations = evaluateAll(data);

  const bad = evaluations.find((e) => e.ticker === 'BAD');
  const ok = evaluations.find((e) => e.ticker === 'OK');
  assert.ok(bad.error, 'el ticker inválido debería quedar marcado con error');
  assert.equal(bad.signal, 'HOLD');
  assert.ok(ok && !ok.error);
});
