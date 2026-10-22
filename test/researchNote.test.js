'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { synthesizeVerdict, buildResearchNotes } = require('../lib/researchNote');

function secFacts(overrides = {}) {
  return { debtToEquityPct: null, netMarginPct: null, resultsArePartial: false, fiscalYear: 2025, ...overrides };
}

test('synthesizeVerdict: con research=null (Yahoo caído) no explota, sigue con lo que SEC tenga', () => {
  const result = synthesizeVerdict(null, null, secFacts({ debtToEquityPct: 200 }));
  assert.equal(result.verdict, 'CAUTELA');
  assert.ok(result.bear.some((b) => /Deuda\/equity/.test(b) && /SEC EDGAR/.test(b)));
});

test('synthesizeVerdict: sin research NI secFundamentals, no tira nada y queda NEUTRAL', () => {
  const result = synthesizeVerdict(null, null, null);
  assert.equal(result.verdict, 'NEUTRAL');
  assert.deepEqual(result.bull, []);
  assert.deepEqual(result.bear, []);
});

test('synthesizeVerdict: deuda de Yahoo tiene prioridad sobre la de SEC cuando ambas existen', () => {
  const research = { debtToEquity: 160 };
  const result = synthesizeVerdict(research, null, secFacts({ debtToEquityPct: 999 }));
  assert.ok(result.bear.some((b) => /160%/.test(b)));
  assert.ok(!result.bear.some((b) => /999%/.test(b)));
  assert.ok(!result.bear.some((b) => /SEC EDGAR/.test(b))); // no aclara "dato de SEC" porque vino de Yahoo
});

test('synthesizeVerdict: margen neto negativo de SEC genera una señal bajista', () => {
  const result = synthesizeVerdict(null, null, secFacts({ netMarginPct: -12.5 }));
  assert.ok(result.bear.some((b) => /[Mm]argen neto negativo/.test(b)));
});

test('synthesizeVerdict: margen neto alto de SEC genera una señal alcista', () => {
  const result = synthesizeVerdict(null, null, secFacts({ netMarginPct: 25 }));
  assert.ok(result.bull.some((b) => /[Mm]argen neto/.test(b)));
});

test('buildResearchNotes: un ticker sin datos de Yahoo pero con SEC igual genera una nota (yahooDataAvailable=false)', () => {
  const deepResearch = new Map(); // Yahoo falló por completo
  const sec = new Map([['XOM', secFacts({ debtToEquityPct: 50 })]]);
  const notes = buildResearchNotes(['XOM'], deepResearch, new Map(), sec);

  assert.equal(notes.length, 1);
  assert.equal(notes[0].ticker, 'XOM');
  assert.equal(notes[0].yahooDataAvailable, false);
  assert.ok(notes[0].secFundamentals);
  assert.equal(notes[0].currentPrice, null); // sin Yahoo no hay precio en vivo
});

test('buildResearchNotes: un ticker sin NINGUNA fuente se omite (no genera una nota vacía)', () => {
  const notes = buildResearchNotes(['NOPE'], new Map(), new Map(), new Map());
  assert.equal(notes.length, 0);
});

test('buildResearchNotes: con Yahoo disponible y sin SEC, sigue funcionando igual que antes', () => {
  const deepResearch = new Map([['AAPL', { sector: 'Information Technology', currentPrice: 200, debtToEquity: 50 }]]);
  const notes = buildResearchNotes(['AAPL'], deepResearch, new Map(), new Map());

  assert.equal(notes.length, 1);
  assert.equal(notes[0].yahooDataAvailable, true);
  assert.equal(notes[0].secFundamentals, null);
  assert.equal(notes[0].currentPrice, 200);
});
