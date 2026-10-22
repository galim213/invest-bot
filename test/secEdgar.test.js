'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { extractKeyFundamentals } = require('../lib/secEdgar');

function usd(entries) {
  return { units: { USD: entries } };
}

test('extractKeyFundamentals: devuelve null si no hay facts de us-gaap', () => {
  assert.equal(extractKeyFundamentals({ facts: {} }), null);
  assert.equal(extractKeyFundamentals({}), null);
});

test('extractKeyFundamentals: toma el 10-K/FY más reciente para resultados, y el instant más reciente para balance', () => {
  const facts = {
    entityName: 'Test Corp',
    facts: {
      'us-gaap': {
        Revenues: usd([
          { end: '2023-12-31', val: 100, form: '10-K', fp: 'FY', fy: 2023, filed: '2024-02-01' },
          { end: '2024-12-31', val: 120, form: '10-K', fp: 'FY', fy: 2024, filed: '2025-02-01' },
          { start: '2025-01-01', end: '2025-03-31', val: 35, form: '10-Q', fp: 'Q1', fy: 2025, filed: '2025-05-01' }, // más reciente pero no anual
        ]),
        NetIncomeLoss: usd([{ end: '2024-12-31', val: 20, form: '10-K', fp: 'FY', fy: 2024, filed: '2025-02-01' }]),
        Assets: usd([
          { end: '2024-12-31', val: 500 },
          { end: '2025-03-31', val: 520 }, // instant: el más reciente gana aunque no sea de un 10-K
        ]),
        Liabilities: usd([{ end: '2025-03-31', val: 300 }]),
        StockholdersEquity: usd([{ end: '2025-03-31', val: 220 }]),
        LongTermDebtNoncurrent: usd([{ end: '2025-03-31', val: 110 }]),
      },
    },
  };

  const result = extractKeyFundamentals(facts);

  assert.equal(result.revenue, 120); // el 10-K FY2024, no el Q1 2025 más reciente
  assert.equal(result.resultsArePartial, false);
  assert.equal(result.netIncome, 20);
  assert.equal(result.totalAssets, 520); // instant: sí toma el más reciente
  assert.ok(Math.abs(result.debtToEquityPct - (110 / 220) * 100) < 1e-9);
  assert.ok(Math.abs(result.netMarginPct - (20 / 120) * 100) < 1e-9);
  assert.equal(result.source, 'SEC EDGAR (10-K más reciente)');
});

test('extractKeyFundamentals: sin 10-K todavía bajo este CIK, cae al último período disponible y lo marca parcial', () => {
  // Caso real encontrado con XOM (2026-10-22): CIK nuevo, solo 10-Q, sin 10-K.
  const facts = {
    entityName: 'Holding Corp Nueva',
    facts: {
      'us-gaap': {
        Revenues: usd([{ start: '2026-01-01', end: '2026-06-30', val: 200, form: '10-Q', fp: 'Q2', fy: 2026, filed: '2026-08-01' }]),
        NetIncomeLoss: usd([{ start: '2026-01-01', end: '2026-06-30', val: 18, form: '10-Q', fp: 'Q2', fy: 2026, filed: '2026-08-01' }]),
      },
    },
  };

  const result = extractKeyFundamentals(facts);

  assert.equal(result.revenue, 200);
  assert.equal(result.resultsArePartial, true);
  assert.equal(result.resultsPeriodLabel, '10-Q Q2 (2026-01-01 a 2026-06-30)');
  assert.equal(result.source, 'SEC EDGAR (último período disponible, no un año completo)');
});

test('extractKeyFundamentals: prueba varios alias de tag conocidos para el mismo concepto', () => {
  const facts = {
    facts: {
      'us-gaap': {
        // Sin "Revenues", pero sí el alias que usan algunas empresas.
        RevenueFromContractWithCustomerExcludingAssessedTax: usd([
          { end: '2024-12-31', val: 90, form: '10-K', fp: 'FY', fy: 2024, filed: '2025-02-01' },
        ]),
      },
    },
  };

  const result = extractKeyFundamentals(facts);
  assert.equal(result.revenue, 90);
});

test('extractKeyFundamentals: campos sin datos quedan en null, sin inventar nada', () => {
  const facts = { entityName: 'Vacía Corp', facts: { 'us-gaap': { Assets: usd([{ end: '2024-12-31', val: 100 }]) } } };

  const result = extractKeyFundamentals(facts);

  assert.equal(result.totalAssets, 100);
  assert.equal(result.revenue, null);
  assert.equal(result.netIncome, null);
  assert.equal(result.debtToEquityPct, null);
  assert.equal(result.netMarginPct, null);
});
