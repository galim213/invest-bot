'use strict';

const CRUMB_SEED_URL = 'https://fc.yahoo.com';
const CRUMB_URL = 'https://query1.finance.yahoo.com/v1/test/getcrumb';
const QUOTE_SUMMARY_URL = 'https://query1.finance.yahoo.com/v10/finance/quoteSummary/';
const UA = 'Mozilla/5.0 (invest-bot educational paper trading)';

let cachedAuth = null; // { cookie, crumb } | { error: string }

/**
 * Yahoo Finance no documenta esta API públicamente y requiere una cookie +
 * "crumb" de sesión (el mismo mecanismo que usa la librería yfinance). No hay
 * API key, pero tampoco es un endpoint estable — si Yahoo cambia el flujo de
 * auth, o bloquea el rango de IP desde donde se corre esto (típico con
 * datacenters/nube), esto puede fallar. Por eso queda bien diagnosticado
 * (motivo exacto en vez de fallar en silencio) pero nunca tira abajo el
 * resto del pipeline — ver fetchFundamentalsAll.
 */
async function getAuth() {
  if (cachedAuth) return cachedAuth;

  // OJO: fc.yahoo.com responde 404 a propósito (es un endpoint "trampa" solo para
  // setear la cookie de sesión) — el status no importa, solo que venga el Set-Cookie.
  let seedRes;
  try {
    seedRes = await fetch(CRUMB_SEED_URL, { headers: { 'User-Agent': UA } });
  } catch (err) {
    cachedAuth = { error: `fc.yahoo.com inalcanzable: ${err.message}` };
    return cachedAuth;
  }

  const setCookie = seedRes.headers.getSetCookie ? seedRes.headers.getSetCookie() : [seedRes.headers.get('set-cookie')].filter(Boolean);
  const cookie = setCookie.map((c) => c.split(';')[0]).join('; ');
  if (!cookie) {
    cachedAuth = { error: 'fc.yahoo.com no devolvió cookie de sesión (Set-Cookie vacío)' };
    return cachedAuth;
  }

  let crumbRes;
  try {
    crumbRes = await fetch(CRUMB_URL, { headers: { 'User-Agent': UA, Cookie: cookie } });
  } catch (err) {
    cachedAuth = { error: `getcrumb inalcanzable: ${err.message}` };
    return cachedAuth;
  }
  const crumbText = (await crumbRes.text()).trim();
  if (!crumbRes.ok) {
    cachedAuth = { error: `getcrumb respondió ${crumbRes.status}: ${crumbText.slice(0, 150)}` };
    return cachedAuth;
  }
  if (!crumbText || crumbText.includes('<') || crumbText.includes('Unauthorized')) {
    cachedAuth = { error: `crumb inválido: ${crumbText.slice(0, 150)}` };
    return cachedAuth;
  }

  cachedAuth = { cookie, crumb: crumbText };
  return cachedAuth;
}

/**
 * Fundamentales básicos de un ticker: sector, industria, market cap, P/E,
 * dividendo, márgenes, ROE, crecimiento de ingresos, deuda/equity, empleados
 * y un resumen del negocio en texto. Pensado para un puñado de tickers
 * "de calidad" (educativo), no para correr sobre los 503 del S&P 500 todos
 * los días — este endpoint no es tan robusto como el de precios.
 * Devuelve { data } en éxito, { error } en falla (nunca tira excepción por
 * un fallo esperable de Yahoo).
 */
async function fetchFundamentals(ticker) {
  const auth = await getAuth();
  if (auth.error) return { error: `auth: ${auth.error}` };

  const modules = 'summaryDetail,defaultKeyStatistics,assetProfile,financialData,price';
  const url = `${QUOTE_SUMMARY_URL}${encodeURIComponent(ticker)}?modules=${modules}&crumb=${encodeURIComponent(auth.crumb)}`;

  let res;
  try {
    res = await fetch(url, { headers: { 'User-Agent': UA, Cookie: auth.cookie } });
  } catch (err) {
    return { error: `fetch: ${err.message}` };
  }
  const bodyText = await res.text();
  if (!res.ok) return { error: `HTTP ${res.status}: ${bodyText.slice(0, 150)}` };

  let json;
  try {
    json = JSON.parse(bodyText);
  } catch {
    return { error: `respuesta no-JSON: ${bodyText.slice(0, 150)}` };
  }
  const r = json?.quoteSummary?.result?.[0];
  if (!r) {
    const errDesc = json?.quoteSummary?.error?.description || json?.finance?.error?.description;
    return { error: `sin result en la respuesta${errDesc ? `: ${errDesc}` : ''}` };
  }

  const raw = (obj) => (obj && typeof obj.raw === 'number' ? obj.raw : null);

  return {
    data: {
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
    },
  };
}

/**
 * Investigación "profunda" de un ticker: todo lo de fetchFundamentals más
 * tendencia de recomendaciones de analistas, próxima fecha de resultados,
 * historial de EPS vs estimado (últimos trimestres), upgrades/downgrades
 * recientes y transacciones de insiders. Pensado para un puñado de tickers
 * (core + posiciones actuales), no para correr sobre todo el universo —
 * son 2-3x más datos por request.
 */
async function fetchDeepResearch(ticker) {
  const auth = await getAuth();
  if (auth.error) return { error: `auth: ${auth.error}` };

  const modules = [
    'summaryDetail',
    'defaultKeyStatistics',
    'assetProfile',
    'financialData',
    'price',
    'recommendationTrend',
    'calendarEvents',
    'earningsHistory',
    'upgradeDowngradeHistory',
    'insiderTransactions',
  ].join(',');
  const url = `${QUOTE_SUMMARY_URL}${encodeURIComponent(ticker)}?modules=${modules}&crumb=${encodeURIComponent(auth.crumb)}`;

  let res;
  try {
    res = await fetch(url, { headers: { 'User-Agent': UA, Cookie: auth.cookie } });
  } catch (err) {
    return { error: `fetch: ${err.message}` };
  }
  const bodyText = await res.text();
  if (!res.ok) return { error: `HTTP ${res.status}: ${bodyText.slice(0, 150)}` };

  let json;
  try {
    json = JSON.parse(bodyText);
  } catch {
    return { error: `respuesta no-JSON: ${bodyText.slice(0, 150)}` };
  }
  const r = json?.quoteSummary?.result?.[0];
  if (!r) {
    const errDesc = json?.quoteSummary?.error?.description || json?.finance?.error?.description;
    return { error: `sin result en la respuesta${errDesc ? `: ${errDesc}` : ''}` };
  }

  const raw = (obj) => (obj && typeof obj.raw === 'number' ? obj.raw : null);
  const fmtDate = (obj) => obj?.fmt ?? null;

  const recTrend = r.recommendationTrend?.trend ?? [];
  const earnings = (r.earningsHistory?.history ?? []).map((e) => ({
    quarter: fmtDate(e.quarter),
    epsActual: raw(e.epsActual),
    epsEstimate: raw(e.epsEstimate),
    surprisePercent: raw(e.surprisePercent),
  }));
  const upgrades = (r.upgradeDowngradeHistory?.history ?? []).slice(0, 10).map((u) => ({
    date: u.epochGradeDate ? new Date(u.epochGradeDate * 1000).toISOString().slice(0, 10) : null,
    firm: u.firm ?? null,
    action: u.action ?? null,
    toGrade: u.toGrade ?? null,
    fromGrade: u.fromGrade ?? null,
    priceTargetAction: u.priceTargetAction ?? null,
    currentPriceTarget: u.currentPriceTarget ?? null,
  }));
  const insiders = (r.insiderTransactions?.transactions ?? []).slice(0, 10).map((t) => ({
    date: fmtDate(t.startDate),
    filer: t.filerName ?? null,
    relation: t.filerRelation ?? null,
    text: t.transactionText ?? null,
    shares: raw(t.shares),
    value: raw(t.value),
  }));

  return {
    data: {
      ticker,
      sector: r.assetProfile?.sector ?? null,
      industry: r.assetProfile?.industry ?? null,
      businessSummary: r.assetProfile?.longBusinessSummary ?? null,
      marketCap: raw(r.price?.marketCap),
      currentPrice: raw(r.financialData?.currentPrice),
      trailingPE: raw(r.summaryDetail?.trailingPE),
      forwardPE: raw(r.summaryDetail?.forwardPE),
      fiftyTwoWeekLow: raw(r.summaryDetail?.fiftyTwoWeekLow),
      fiftyTwoWeekHigh: raw(r.summaryDetail?.fiftyTwoWeekHigh),
      dividendYield: raw(r.summaryDetail?.dividendYield),
      payoutRatio: raw(r.summaryDetail?.payoutRatio),
      profitMargin: raw(r.financialData?.profitMargins),
      returnOnEquity: raw(r.financialData?.returnOnEquity),
      revenueGrowth: raw(r.financialData?.revenueGrowth),
      debtToEquity: raw(r.financialData?.debtToEquity),
      targetMeanPrice: raw(r.financialData?.targetMeanPrice),
      recommendationKey: r.financialData?.recommendationKey ?? null,
      recommendationTrend: recTrend.map((t) => ({
        period: t.period,
        strongBuy: t.strongBuy,
        buy: t.buy,
        hold: t.hold,
        sell: t.sell,
        strongSell: t.strongSell,
      })),
      nextEarningsDate: fmtDate(r.calendarEvents?.earnings?.earningsDate?.[0]),
      earningsEpsEstimate: raw(r.calendarEvents?.earnings?.earningsAverage),
      earningsHistory: earnings,
      recentRatingActions: upgrades,
      recentInsiderTransactions: insiders,
    },
  };
}

/** Trae investigación profunda para varios tickers con concurrencia baja. */
async function fetchDeepResearchAll(tickers, concurrency = 3) {
  const results = new Map();
  const errors = [];
  const queue = [...tickers];

  async function worker() {
    while (queue.length > 0) {
      const ticker = queue.shift();
      try {
        const { data, error } = await fetchDeepResearch(ticker);
        if (data) results.set(ticker, data);
        else errors.push({ ticker, message: error || 'sin datos' });
      } catch (err) {
        errors.push({ ticker, message: err.message });
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, tickers.length) }, worker));
  return { data: results, errors };
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
        const { data, error } = await fetchFundamentals(ticker);
        if (data) results.set(ticker, data);
        else errors.push({ ticker, message: error || 'sin datos' });
      } catch (err) {
        errors.push({ ticker, message: err.message });
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, tickers.length) }, worker));
  return { data: results, errors };
}

module.exports = { fetchFundamentals, fetchFundamentalsAll, fetchDeepResearch, fetchDeepResearchAll };
