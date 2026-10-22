'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { appendToJournal, loadJournal, buildDecisionJournalMarkdown } = require('../lib/decisionJournal');

function tmpFile() {
  return path.join(os.tmpdir(), `decision-journal-test-${Date.now()}-${Math.random().toString(36).slice(2)}.json`);
}

function trade(overrides = {}) {
  return { date: '2026-10-22', ticker: 'MRNA', action: 'BUY', shares: 1.5, price: 200, usdAmount: 300, fee: 0.15, reason: 'Señal técnica de compra (score 70): ...', ...overrides };
}

function note(overrides = {}) {
  return { verdict: 'POSITIVO', bull: ['a'], bear: [], sellTriggers: [], ...overrides };
}

test('appendToJournal: guarda el trade junto al research note vigente de ese ticker', () => {
  const file = tmpFile();
  const notes = new Map([['MRNA', note()]]);
  const added = appendToJournal([trade()], notes, file);

  assert.equal(added, 1);
  const journal = loadJournal(file);
  assert.equal(journal.length, 1);
  assert.equal(journal[0].ticker, 'MRNA');
  assert.equal(journal[0].researchAvailable, true);
  assert.equal(journal[0].researchVerdict, 'POSITIVO');
  fs.unlinkSync(file);
});

test('appendToJournal: sin research note para ese ticker, lo marca explícitamente en vez de inventar uno', () => {
  const file = tmpFile();
  const added = appendToJournal([trade({ ticker: 'XYZ', action: 'SELL' })], new Map(), file);

  assert.equal(added, 1);
  const journal = loadJournal(file);
  assert.equal(journal[0].researchAvailable, false);
  assert.equal(journal[0].researchVerdict, null);
  fs.unlinkSync(file);
});

test('appendToJournal: es idempotente — el mismo trade exacto no se duplica si run-daily.js corre dos veces', () => {
  const file = tmpFile();
  appendToJournal([trade()], new Map(), file);
  const addedAgain = appendToJournal([trade()], new Map(), file);

  assert.equal(addedAgain, 0);
  assert.equal(loadJournal(file).length, 1);
  fs.unlinkSync(file);
});

test('appendToJournal: dos trades distintos el mismo día se agregan los dos', () => {
  const file = tmpFile();
  const added = appendToJournal([trade({ ticker: 'AAA' }), trade({ ticker: 'BBB' })], new Map(), file);
  assert.equal(added, 2);
  fs.unlinkSync(file);
});

test('appendToJournal: conserva realizedPnl cuando el trade lo tiene (venta/cobertura)', () => {
  const file = tmpFile();
  appendToJournal([trade({ action: 'SELL', realizedPnl: 12.5 })], new Map(), file);
  const journal = loadJournal(file);
  assert.equal(journal[0].realizedPnl, 12.5);
  fs.unlinkSync(file);
});

test('buildDecisionJournalMarkdown: sin entradas, lo dice explícitamente', () => {
  const md = buildDecisionJournalMarkdown({ journal: [] });
  assert.ok(/Todavía no hay trades/.test(md));
});

test('buildDecisionJournalMarkdown: ordena del más reciente al más viejo y respeta el límite', () => {
  const journal = [
    { date: '2026-10-01', ticker: 'A', action: 'BUY', shares: 1, price: 10, usdAmount: 10, reason: 'r', researchAvailable: false },
    { date: '2026-10-22', ticker: 'B', action: 'BUY', shares: 1, price: 10, usdAmount: 10, reason: 'r', researchAvailable: false },
  ];
  const md = buildDecisionJournalMarkdown({ journal, limit: 1 });
  assert.ok(md.includes('2026-10-22'));
  assert.ok(!md.includes('2026-10-01'));
});

test('buildDecisionJournalMarkdown: muestra el veredicto y las razones cuando hay research note', () => {
  const journal = [{ date: '2026-10-22', ticker: 'MRNA', action: 'BUY', shares: 1, price: 10, usdAmount: 10, reason: 'r', researchAvailable: true, researchVerdict: 'POSITIVO', researchBull: ['motivo bull'], researchBear: [], researchSellTriggers: [] }];
  const md = buildDecisionJournalMarkdown({ journal });
  assert.ok(md.includes('POSITIVO'));
  assert.ok(md.includes('motivo bull'));
});
