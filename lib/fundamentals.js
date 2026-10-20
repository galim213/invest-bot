'use strict';

const CRUMB_SEED_URL = 'https://fc.yahoo.com';
const CRUMB_URL = 'https://query1.finance.yahoo.com/v1/test/getcrumb';
const QUOTE_SUMMARY_URL = 'https://query1.finance.yahoo.com/v10/finance/quoteSummary/';
const UA = 'Mozilla/5.0 (invest-bot educational paper trading)';

let cachedAuth = null; // { cookie, crumb } — se reusa durante toda la corrida

/**
 * Yahoo Finance no documenta esta API públicamente y requiere una cookie +
 * "crumb" de sesión (el mismo mecanismo que usa la librería yfinance). No hay
 * API key, pero tampoco es un endpoint estable — si Yahoo cambia el flujo de
 * auth esto puede romperse sin aviso. Por eso todo el módulo falla en
 * silencio (devuelve null) en vez de tirar abajo el resto del pipeline.
 */
async function getAuth() {
  if (cachedAuth) return cachedAuth;

  const seedRes = await fetch(CRUMB_SEED_URL, { headers: { 'User-Agent': UA } });
  const setCookie = seedRes.headers.getSetCookie ? seedRes.headers.getSetCookie() : [seedRes.headers.get('set-cookie')].filter(Boolean);
  const cookie = setCookie.map((c) => c.split(';')[0]).join('; ');
  if (!cookie) return null;

  const crumbRes = await fetch(CRUMB_URL, { headers: { 'User-Agent': UA, Cookie: cookie } });
  if (!crumbRes.ok) return null;
  const crumb = (await crumbRes.text()).trim();
  if (!crumb || crumb.includes('<')) return null; // HTML de error, no un crumb válido

  cachedAuth = { cookie, crumb };
  return cachedAuth;
}

/**
 * Fundamentales básicos de un ticker: sector, industria, market cap, P/E,
 * dividendo, márgenes, ROE, crecimiento de ingresos, deuda/equity, empleados
 * y un resumen del negocio en texto. Pensado para un puñado de tickers
 * "de calidad" (educativo), no para correr sobre los 503 del S&P 500 todos
 * los días — este endpoint no es tan robusto como el de precios.
 */
async function fetchFundamentals(ticker) {
  const auth = await getAuth();
  if (!auth) return null;

  const modules = 'summaryDetail,defaultKeyStatistics,assetProfile,financialData,price';
  const url = `${QUOTE_SUMMARY_URL}${encodeURIComponent(ticker)}?modules=${modules}&crumb=${encodeURIComponent(auth.crumb)}`;

  const res = await fetch(url, { headers: { 'User-Agent': UA, Cookie: auth.cookie } });
  if (!res.ok) return null;
  const json = await res.json();
  const r = json?.quoteSummary?.result?.[0];
  if (!r) return null;

  const raw = (obj) => (obj && typeof obj.raw === 'number' ? obj.raw : null);

  return {
    ticker,
    sector: r.assetProfile?.sector ?? null,
    industry: r.assetProfile?.industry ?? null,
    employees: r.assetProfile?.fullTimeEmployees ?? null,
    businessSummary: r.assetProfile?.longBusinessSummary ?? null,
    marketCap: raw(r.price?.marketCap),
    trailingPE: raw(r.summaryDetail?.trailingPE),
    forwardPE: raw(r.summaryDetail?.forwardPE),
    dividendYield: raw(r.summaryDetail?.dividendYield),
    profitMargin: raw(r.financialData?.profitMargins),
    returnOnEquity: raw(r.financialData?.returnOnEquity),
    revenueGrowth: raw(r.financialData?.revenueGrowth),
    debtToEquity: raw(r.financialData?.debtToEquity),
    currentPrice: raw(r.financialData?.currentPrice),
    targetMeanPrice: raw(r.financialData?.targetMeanPrice),
    recommendationKey: r.financialData?.recommendationKey ?? null,
  };
}

/** Trae fundamentales para varios tickers con concurrencia baja (este endpoint es frágil). */
async function fetchFundamentalsAll(tickers, concurrency = 3) {
  const results = new Map();
  const errors = [];
  const queue = [...tickers];

  async function worker() {
    while (queue.length > 0) {
      const ticker = queue.shift();
      try {
        const f = await fetchFundamentals(ticker);
        if (f) results.set(ticker, f);
        else errors.push({ ticker, message: 'sin datos (posible bloqueo de Yahoo o ticker inválido)' });
      } catch (err) {
        errors.push({ ticker, message: err.message });
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, tickers.length) }, worker));
  return { data: results, errors };
}

module.exports = { fetchFundamentals, fetchFundamentalsAll };
