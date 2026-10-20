'use strict';

const { FETCH_CONCURRENCY } = require('../config');

const YAHOO_CHART_URL = 'https://query1.finance.yahoo.com/v8/finance/chart/';

/**
 * Trae velas diarias (OHLCV) de los últimos ~1.5 años para un ticker.
 * Usa el endpoint público de charts de Yahoo Finance (sin API key).
 * Devuelve { ticker, candles: [{ date, open, high, low, close, volume }], currency }
 */
async function fetchDailyCandles(ticker, { range = '1y', interval = '1d', includeDividends = false } = {}) {
  const url = `${YAHOO_CHART_URL}${encodeURIComponent(ticker)}?range=${range}&interval=${interval}${includeDividends ? '&events=div' : ''}`;
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (invest-bot educational paper trading)' },
  });
  if (!res.ok) {
    throw new Error(`Yahoo Finance respondió ${res.status} para ${ticker}`);
  }
  const json = await res.json();
  const result = json?.chart?.result?.[0];
  if (!result) {
    const err = json?.chart?.error?.description || 'sin datos';
    throw new Error(`No se pudo obtener data de ${ticker}: ${err}`);
  }

  const timestamps = result.timestamp || [];
  const quote = result.indicators?.quote?.[0] || {};
  const adjCloseArr = result.indicators?.adjclose?.[0]?.adjclose || null;
  const candles = timestamps
    .map((ts, i) => ({
      date: new Date(ts * 1000).toISOString().slice(0, 10),
      open: quote.open?.[i] ?? null,
      high: quote.high?.[i] ?? null,
      low: quote.low?.[i] ?? null,
      close: quote.close?.[i] ?? null,
      // Ajustado por splits (ya viene implícito en `close`) y dividendos — se usa
      // para calcular indicadores técnicos, nunca para el precio real de trading.
      adjClose: adjCloseArr?.[i] ?? quote.close?.[i] ?? null,
      volume: quote.volume?.[i] ?? null,
    }))
    .filter((c) => c.close !== null);

  const dividendEvents = result.events?.dividends
    ? Object.values(result.events.dividends)
        .map((d) => ({ date: new Date(d.date * 1000).toISOString().slice(0, 10), amountPerShare: d.amount }))
        .sort((a, b) => (a.date < b.date ? -1 : 1))
    : [];

  return {
    ticker,
    currency: result.meta?.currency || 'USD',
    regularMarketPrice: result.meta?.regularMarketPrice ?? candles.at(-1)?.close ?? null,
    candles,
    dividends: dividendEvents,
  };
}

/**
 * Trae candles para una lista de tickers con concurrencia limitada (para no
 * disparar cientos de requests simultáneos contra Yahoo / una red con allowlist),
 * tolerando fallos individuales. Devuelve un Map<ticker, data> + errores aparte.
 */
async function fetchAll(tickers, options = {}) {
  const data = new Map();
  const errors = [];
  const queue = [...tickers];

  async function worker() {
    while (queue.length > 0) {
      const ticker = queue.shift();
      try {
        const d = await fetchDailyCandles(ticker, options);
        data.set(ticker, d);
      } catch (err) {
        errors.push({ ticker, message: err.message });
      }
    }
  }

  const workers = Array.from({ length: Math.min(FETCH_CONCURRENCY, tickers.length) }, worker);
  await Promise.all(workers);

  return { data, errors };
}

module.exports = { fetchDailyCandles, fetchAll };
