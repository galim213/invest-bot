'use strict';

// Capital inicial ficticio de la simulación.
const STARTING_CAPITAL = 1000;

// Watchlist diversificada: mega-caps de distintos sectores + 2 ETFs de referencia.
// (ticker, sector, tipo) — se usa solo para contexto en el reporte.
const WATCHLIST = [
  { ticker: 'AAPL', sector: 'Tecnología', type: 'stock' },
  { ticker: 'MSFT', sector: 'Tecnología', type: 'stock' },
  { ticker: 'NVDA', sector: 'Semiconductores', type: 'stock' },
  { ticker: 'AMZN', sector: 'Consumo discrecional', type: 'stock' },
  { ticker: 'GOOGL', sector: 'Comunicación', type: 'stock' },
  { ticker: 'JPM', sector: 'Financiero', type: 'stock' },
  { ticker: 'XOM', sector: 'Energía', type: 'stock' },
  { ticker: 'JNJ', sector: 'Salud', type: 'stock' },
  { ticker: 'SPY', sector: 'ETF S&P 500', type: 'etf' },
  { ticker: 'QQQ', sector: 'ETF Nasdaq 100', type: 'etf' },
];

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
};

module.exports = { STARTING_CAPITAL, WATCHLIST, STRATEGY };
