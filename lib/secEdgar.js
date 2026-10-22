'use strict';

const fs = require('fs');
const path = require('path');

const CONTACT = 'invest-bot galiazzo.nicoras@gmail.com';
const TICKER_MAP_URL = 'https://www.sec.gov/files/company_tickers.json';
const COMPANY_FACTS_URL = 'https://data.sec.gov/api/xbrl/companyfacts/CIK';
const TICKER_MAP_CACHE_PATH = path.join(__dirname, '..', 'data', 'sec-ticker-cik-map.json');
const TICKER_MAP_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000; // 7 días — la lista cambia poco

/**
 * SEC EDGAR (data.sec.gov): datos financieros XBRL oficiales (de los 10-K/10-Q
 * presentados por cada empresa), gratis, sin API key — a cambio exige un
 * User-Agent con nombre/organización + email de contacto real (si no, 403 o
 * bloqueo de IP; ver GRADUATION_CRITERIA.md / README para la investigación de
 * fuentes). Complementa al endpoint no oficial de Yahoo (lib/fundamentals.js):
 * Yahoo da cosas que SEC no tiene (analistas, insiders, precio en vivo); SEC
 * da los números contables tal cual se presentaron, oficiales y estables —
 * útil como respaldo cuando Yahoo falla (pasó dos días seguidos, 2026-10-20
 * y 2026-10-21) y como segunda fuente para cruzar los números de deuda/equity.
 */

async function loadTickerCikMap() {
  if (fs.existsSync(TICKER_MAP_CACHE_PATH)) {
    const stat = fs.statSync(TICKER_MAP_CACHE_PATH);
    if (Date.now() - stat.mtimeMs < TICKER_MAP_MAX_AGE_MS) {
      return JSON.parse(fs.readFileSync(TICKER_MAP_CACHE_PATH, 'utf8'));
    }
  }

  const res = await fetch(TICKER_MAP_URL, { headers: { 'User-Agent': CONTACT } });
  if (!res.ok) throw new Error(`sec.gov/files/company_tickers.json respondió ${res.status}`);
  const raw = await res.json();

  const map = {};
  for (const entry of Object.values(raw)) {
    if (entry && entry.ticker) map[entry.ticker.toUpperCase()] = entry.cik_str;
  }

  fs.mkdirSync(path.dirname(TICKER_MAP_CACHE_PATH), { recursive: true });
  fs.writeFileSync(TICKER_MAP_CACHE_PATH, JSON.stringify(map));
  return map;
}

/** SEC no usa guiones para acciones de doble clase (BRK-B es BRK.B para ellos). */
function normalizeForSec(ticker) {
  return ticker.toUpperCase().replace(/-/g, '.');
}

async function getCikForTicker(ticker, map) {
  return map[ticker.toUpperCase()] ?? map[normalizeForSec(ticker)] ?? null;
}

async function fetchCompanyFactsByCik(cik) {
  const padded = String(cik).padStart(10, '0');
  const res = await fetch(`${COMPANY_FACTS_URL}${padded}.json`, { headers: { 'User-Agent': CONTACT } });
  const bodyText = await res.text();
  if (!res.ok) throw new Error(`data.sec.gov respondió ${res.status}: ${bodyText.slice(0, 150)}`);
  return JSON.parse(bodyText);
}

/** Para conceptos "instant" (balance): la entrada con el `end` más reciente, de cualquier alias. */
function latestInstant(gaap, tagAliases) {
  let best = null;
  for (const tag of tagAliases) {
    const entries = gaap[tag]?.units?.USD;
    if (!entries) continue;
    for (const e of entries) {
      if (e.val == null || !e.end) continue;
      if (!best || e.end > best.end) best = e;
    }
  }
  return best;
}

/**
 * Para conceptos "duration" (resultados): preferir el último ejercicio anual
 * completo (10-K, fp=FY). Si la empresa todavía no tiene un 10-K bajo este
 * CIK (pasa con reestructuraciones/holdings nuevos — encontrado con XOM,
 * CIK recién creado en 2025/2026 con solo 10-Q todavía), cae al último
 * período disponible de cualquier forma — se marca `partial: true` para no
 * hacerlo pasar por una cifra anual cuando es trimestral o acumulada parcial.
 */
function latestAnnual(gaap, tagAliases) {
  let bestAnnual = null;
  let bestAny = null;
  for (const tag of tagAliases) {
    const entries = gaap[tag]?.units?.USD;
    if (!entries) continue;
    for (const e of entries) {
      if (e.val == null || !e.end) continue;
      if (e.form === '10-K' && e.fp === 'FY') {
        if (!bestAnnual || e.end > bestAnnual.end) bestAnnual = e;
      }
      if (!bestAny || e.end > bestAny.end) bestAny = e;
    }
  }
  if (bestAnnual) return { ...bestAnnual, partial: false };
  if (bestAny) return { ...bestAny, partial: true };
  return null;
}

/**
 * Extrae un puñado de métricas clave de los facts XBRL completos de una
 * empresa — función pura, sin red, para que sea testeable: distintas
 * empresas usan tags distintos para "lo mismo" (ej. Revenues vs
 * RevenueFromContractWithCustomerExcludingAssessedTax), por eso cada
 * concepto prueba varios alias conocidos en orden.
 */
function extractKeyFundamentals(facts) {
  const gaap = facts?.facts?.['us-gaap'];
  if (!gaap) return null;

  const revenue = latestAnnual(gaap, ['Revenues', 'RevenueFromContractWithCustomerExcludingAssessedTax', 'SalesRevenueNet']);
  const netIncome = latestAnnual(gaap, ['NetIncomeLoss']);
  const eps = latestAnnual(gaap, ['EarningsPerShareDiluted', 'EarningsPerShareBasic']);
  const totalAssets = latestInstant(gaap, ['Assets']);
  const totalLiabilities = latestInstant(gaap, ['Liabilities']);
  const stockholdersEquity = latestInstant(gaap, ['StockholdersEquity', 'StockholdersEquityIncludingPortionAttributableToNoncontrollingInterest']);
  const longTermDebt = latestInstant(gaap, ['LongTermDebtNoncurrent', 'LongTermDebt']);

  const debtToEquityPct =
    longTermDebt?.val != null && stockholdersEquity?.val != null && stockholdersEquity.val !== 0
      ? (longTermDebt.val / stockholdersEquity.val) * 100
      : null;
  const netMarginPct =
    netIncome?.val != null && revenue?.val != null && revenue.val !== 0 ? (netIncome.val / revenue.val) * 100 : null;

  // Si cualquiera de revenue/netIncome vino de un período parcial (sin 10-K
  // todavía bajo este CIK), se avisa explícitamente — no se presenta como
  // cifra anual cuando es trimestral o year-to-date parcial.
  const resultsArePartial = Boolean(revenue?.partial || netIncome?.partial);
  const resultsPeriodLabel = revenue
    ? `${revenue.form} ${revenue.fp}${revenue.start ? ` (${revenue.start} a ${revenue.end})` : ''}`
    : null;

  return {
    entityName: facts.entityName ?? null,
    fiscalYear: revenue?.fy ?? netIncome?.fy ?? null,
    filedDate: revenue?.filed ?? netIncome?.filed ?? null,
    resultsArePartial,
    resultsPeriodLabel,
    revenue: revenue?.val ?? null,
    netIncome: netIncome?.val ?? null,
    eps: eps?.val ?? null,
    totalAssets: totalAssets?.val ?? null,
    totalLiabilities: totalLiabilities?.val ?? null,
    stockholdersEquity: stockholdersEquity?.val ?? null,
    longTermDebt: longTermDebt?.val ?? null,
    debtToEquityPct,
    netMarginPct,
    source: resultsArePartial ? 'SEC EDGAR (último período disponible, no un año completo)' : 'SEC EDGAR (10-K más reciente)',
  };
}

/** Fundamentales oficiales de un ticker desde SEC EDGAR. Nunca lanza — devuelve {data} o {error}. */
async function fetchSecFundamentals(ticker, cikMap) {
  try {
    const map = cikMap ?? (await loadTickerCikMap());
    const cik = await getCikForTicker(ticker, map);
    if (!cik) return { error: `sin CIK conocido para ${ticker}` };

    const facts = await fetchCompanyFactsByCik(cik);
    const extracted = extractKeyFundamentals(facts);
    if (!extracted) return { error: `sin datos us-gaap para ${ticker} (CIK ${cik})` };

    return { data: { ticker, cik, ...extracted } };
  } catch (err) {
    const cause = err.cause ? ` (cause: ${err.cause.code || err.cause.message || err.cause})` : '';
    return { error: `${err.message}${cause}` };
  }
}

/** Trae fundamentales SEC para varios tickers, respetando el límite de 10 req/seg de la SEC. */
async function fetchSecFundamentalsAll(tickers, concurrency = 4) {
  const results = new Map();
  const errors = [];

  let cikMap;
  try {
    cikMap = await loadTickerCikMap();
  } catch (err) {
    return { data: results, errors: tickers.map((ticker) => ({ ticker, message: `no se pudo cargar el mapa ticker→CIK: ${err.message}` })) };
  }

  const queue = [...tickers];
  async function worker() {
    while (queue.length > 0) {
      const ticker = queue.shift();
      const { data, error } = await fetchSecFundamentals(ticker, cikMap);
      if (data) results.set(ticker, data);
      else errors.push({ ticker, message: error || 'sin datos' });
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, tickers.length) }, worker));
  return { data: results, errors };
}

module.exports = {
  CONTACT,
  loadTickerCikMap,
  getCikForTicker,
  fetchCompanyFactsByCik,
  extractKeyFundamentals,
  fetchSecFundamentals,
  fetchSecFundamentalsAll,
};
