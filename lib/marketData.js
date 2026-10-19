'use strict';

const YAHOO_CHART_URL = 'https://query1.finance.yahoo.com/v8/finance/chart/';

/**
 * Trae velas diarias (OHLCV) de los últimos ~1.5 años para un ticker.
 * Usa el endpoint público de charts de Yahoo Finance (sin API key).
 * Devuelve { ticker, candles: [{ date, open, high, low, close, volume }], currency }
 */
async function fetchDailyCandles(ticker, { range = '1y', interval = '1d' } = {}) {
  const url = `${YAHOO_CHART_URL}${encodeURIComponent(ticker)}?range=${range}&interval=${interval}`;
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
  const candles = timestamps
    .map((ts, i) => ({
      date: new Date(ts * 1000).toISOString().slice(0, 10),
      open: quote.open?.[i] ?? null,
      high: quote.high?.[i] ?? null,
      low: quote.low?.[i] ?? null,
      close: quote.close?.[i] ?? null,
      volume: quote.volume?.[i] ?? null,
    }))
    .filter((c) => c.close !== null);

  return {
    ticker,
    currency: result.meta?.currency || 'USD',
    regularMarketPrice: result.meta?.regularMarketPrice ?? candles.at(-1)?.close ?? null,
    candles,
  };
}

/**
 * Trae candles para una lista de tickers en paralelo, tolerando fallos individuales.
 * Devuelve un Map<ticker, data> y arrastra errores por separado.
 */
async function fetchAll(tickers, options = {}) {
  const data = new Map();
  const errors = [];

  await Promise.all(
    tickers.map(async (ticker) => {
      try {
        const d = await fetchDailyCandles(ticker, options);
        data.set(ticker, d);
      } catch (err) {
        errors.push({ ticker, message: err.message });
      }
    })
  );

  return { data, errors };
}

module.exports = { fetchDailyCandles, fetchAll };
