'use strict';

const fs = require('fs');
const path = require('path');

// Capital inicial ficticio de la simulación.
const STARTING_CAPITAL = 1000;

// Universo: S&P 500 completo (sp500.json), no una selección a mano.
// Elegir 10 acciones "a dedo" sesga cualquier backtest porque uno tiende a
// elegir nombres que ya sabe que les fue bien (survivorship/selection bias).
// Usar el índice completo deja que el score decida, no la memoria del lunes.
const sp500 = JSON.parse(fs.readFileSync(path.join(__dirname, 'sp500.json'), 'utf8'));
const WATCHLIST = sp500.map((r) => ({ ticker: r.ticker, sector: r.sector, type: 'stock' }));
// Benchmark de referencia (no forma parte del universo operable, solo para comparar).
const BENCHMARK_TICKER = 'SPY';

const STRATEGY = {
  // Ventanas de medias móviles para tendencia.
  // v2 (tras backtest): SMA10/30 generaba whipsaw (entra y sale del mismo ticker
  // varias veces en pocas semanas). SMA20/50 es más lenta y filtra ruido de corto plazo.
  smaFast: 20,
  smaSlow: 50,
  smaTrend: 200, // tendencia de fondo (bull/bear)
  rsiPeriod: 14,
  momentumWindow: 10, // días para el % de cambio (momentum)
  volWindow: 20, // días para volatilidad (desviación estándar de retornos diarios)

  // Umbrales de score (-100 a 100) para decidir acción.
  buyThreshold: 35, // antes 30: exigir señales de mayor calidad antes de entrar
  sellThreshold: -35, // antes -20: no vender ante caídas leves, solo ante reversión clara

  // Gestión de riesgo.
  maxPositionPct: 0.25, // máx 25% del valor del portfolio en un solo ticker
  minCashReservePct: 0.05, // dejar al menos 5% en efectivo
  stopLossPct: -0.12, // antes -8%: evitar que la volatilidad normal saque posiciones sanas
  takeProfitTrimPct: 0.25, // antes +20%: dejar correr más la ganancia antes de trimear

  // Costo de transacción simulado (comisión + spread efectivo), ida y vuelta.
  // Un backtest sin fricción siempre se ve mejor que la realidad.
  transactionCostPct: 0.0005, // 5 bps por operación
};

// Cuántas señales mostrar en el reporte/dashboard (el universo completo se evalúa
// igual para decidir trades; esto es solo un recorte para que el reporte sea legible).
const REPORT_TOP_N = 15;

// Límite de requests HTTP concurrentes al pedir datos de mercado (evita que Yahoo
// u otra red con allowlist nos corte por ráfaga de cientos de requests a la vez).
const FETCH_CONCURRENCY = 20;

module.exports = {
  STARTING_CAPITAL,
  WATCHLIST,
  BENCHMARK_TICKER,
  STRATEGY,
  REPORT_TOP_N,
  FETCH_CONCURRENCY,
};
