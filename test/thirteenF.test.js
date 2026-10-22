'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { normalizeCompanyName, matchTicker, parseInfoTable } = require('../lib/thirteenF');

test('normalizeCompanyName: quita sufijos corporativos y puntuación comunes', () => {
  assert.equal(normalizeCompanyName('APPLE INC'), 'APPLE');
  assert.equal(normalizeCompanyName('Alphabet Inc.'), 'ALPHABET');
  assert.equal(normalizeCompanyName('Bank of Amer Corp'), 'BANK OF AMER');
});

test('normalizeCompanyName: string vacío o null no explota', () => {
  assert.equal(normalizeCompanyName(''), '');
  assert.equal(normalizeCompanyName(null), '');
});

test('matchTicker: encuentra un match exacto por nombre normalizado', () => {
  const index = new Map([['APPLE', 'AAPL'], ['CHEVRON', 'CVX']]);
  assert.equal(matchTicker('APPLE INC', index), 'AAPL');
  assert.equal(matchTicker('CHEVRON CORPORATION', index), 'CVX');
});

test('matchTicker: sin match disponible, devuelve null en vez de adivinar', () => {
  const index = new Map([['APPLE', 'AAPL']]);
  assert.equal(matchTicker('EMPRESA QUE NO EXISTE XYZ', index), null);
});

test('matchTicker: nombre vacío no explota', () => {
  const index = new Map([['APPLE', 'AAPL']]);
  assert.equal(matchTicker('', index), null);
  assert.equal(matchTicker(null, index), null);
});

test('parseInfoTable: parsea tenencias normales (sin putCall)', () => {
  const xml = `
    <informationTable>
      <infoTable>
        <nameOfIssuer>APPLE INC</nameOfIssuer>
        <titleOfClass>COM</titleOfClass>
        <cusip>037833100</cusip>
        <value>65950296923</value>
        <shrsOrPrnAmt><sshPrnamt>228000000</sshPrnamt><sshPrnamtType>SH</sshPrnamtType></shrsOrPrnAmt>
      </infoTable>
    </informationTable>`;
  const holdings = parseInfoTable(xml);
  assert.equal(holdings.length, 1);
  assert.equal(holdings[0].issuer, 'APPLE INC');
  assert.equal(holdings[0].cusip, '037833100');
  assert.equal(holdings[0].valueUsd, 65950296923);
  assert.equal(holdings[0].shares, 228000000);
  assert.equal(holdings[0].putCall, null);
});

test('parseInfoTable: distingue una posición de opción (putCall presente)', () => {
  const xml = `
    <informationTable>
      <infoTable>
        <nameOfIssuer>NVIDIA CORPORATION</nameOfIssuer>
        <cusip>67066G104</cusip>
        <value>186580000</value>
        <shrsOrPrnAmt><sshPrnamt>1000000</sshPrnamt></shrsOrPrnAmt>
        <putCall>Put</putCall>
      </infoTable>
    </informationTable>`;
  const holdings = parseInfoTable(xml);
  assert.equal(holdings[0].putCall, 'Put');
});

test('parseInfoTable: XML vacío o sin infoTable no explota', () => {
  assert.deepEqual(parseInfoTable('<informationTable></informationTable>'), []);
  assert.deepEqual(parseInfoTable(''), []);
});

test('parseInfoTable: parsea múltiples posiciones', () => {
  const xml = `
    <informationTable>
      <infoTable><nameOfIssuer>A</nameOfIssuer><cusip>111</cusip><value>100</value><shrsOrPrnAmt><sshPrnamt>10</sshPrnamt></shrsOrPrnAmt></infoTable>
      <infoTable><nameOfIssuer>B</nameOfIssuer><cusip>222</cusip><value>200</value><shrsOrPrnAmt><sshPrnamt>20</sshPrnamt></shrsOrPrnAmt></infoTable>
    </informationTable>`;
  const holdings = parseInfoTable(xml);
  assert.equal(holdings.length, 2);
  assert.equal(holdings[1].issuer, 'B');
});
