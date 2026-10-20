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

  // Peso máximo del factor fundamental (ROE, márgenes, crecimiento, deuda, P/E)
  // sobre el score técnico (-100 a 100).
  fundamentalTiltMax: 15,

  // --- Posiciones cortas (short selling) ---
  // El riesgo es asimétrico: ganancia tope 100% (una acción no baja de $0),
  // pérdida sin techo (puede subir indefinidamente) — por eso cada parámetro
  // acá es más estricto que su equivalente largo.
  shortThreshold: -60, // mucho más estricto que sellThreshold (-35): hace falta convicción bajista alta para asumir riesgo sin techo
  shortStopLossPct: 0.15, // obligatorio: cubrir si el precio SUBE 15% desde la entrada (no es opcional, dado el riesgo sin techo)
  shortTakeProfitPct: -0.2, // cubrir si el precio CAYÓ 20% desde la entrada (toma de ganancia)
  maxShortPositionPct: 0.1, // tope más chico que maxPositionPct (0.25): menor tamaño por el riesgo asimétrico
  shortMarginRequirementPct: 0.5, // Reg T: ~50% del valor de la posición queda reservado como colateral, no disponible para otras compras
  // Tope agregado sobre TODOS los shorts simultáneos (no solo por posición):
  // en un crash muchos tickers a la vez pueden puntuar muy bajista (score
  // correlacionado), y sin este tope se podría terminar con una apuesta
  // concentrada de >100% del portfolio en shorts el mismo día — justo lo que
  // explotó en la validación de COVID 2020 (ver GRADUATION_CRITERIA.md).
  maxAggregateShortExposurePct: 0.3,
};

// Apagado por default: la mecánica de shorts ya existe (lib/portfolio.js,
// lib/decide.js) y se puede probar con `node backtest.js <días> --shorts` o
// `node validate.js --shorts`, pero recién se prende en producción si
// sobrevive la misma validación multi-régimen que todo lo demás — ver
// GRADUATION_CRITERIA.md. Todavía no se corrió esa validación.
const ALLOW_SHORTING_IN_PRODUCTION = false;

// Mercados más allá de acciones (educativo/contexto, no el motor de trading):
// materias primas, bonos, REITs, cripto y forex — mismo endpoint de Yahoo que
// ya usamos para ETFs sectoriales, confirmado en vivo el 2026-10-20 (todos
// estos tickers devuelven datos sin autenticación).
const OTHER_MARKETS = [
  { ticker: 'GC=F', name: 'Oro (futuro)', category: 'Materias primas — metales' },
  { ticker: 'SI=F', name: 'Plata (futuro)', category: 'Materias primas — metales' },
  { ticker: 'HG=F', name: 'Cobre (futuro)', category: 'Materias primas — metales' },
  { ticker: 'CL=F', name: 'Petróleo WTI (futuro)', category: 'Materias primas — energía' },
  { ticker: 'NG=F', name: 'Gas natural (futuro)', category: 'Materias primas — energía' },
  { ticker: 'DBC', name: 'Canasta amplia de commodities (ETF)', category: 'Materias primas — diversificado' },
  { ticker: 'TLT', name: 'Bonos del Tesoro EEUU 20+ años (ETF)', category: 'Renta fija' },
  { ticker: 'IEF', name: 'Bonos del Tesoro EEUU 7-10 años (ETF)', category: 'Renta fija' },
  { ticker: 'VNQ', name: 'REITs — bienes raíces EEUU (ETF)', category: 'Real estate' },
  { ticker: 'BTC-USD', name: 'Bitcoin', category: 'Cripto' },
  { ticker: 'ETH-USD', name: 'Ethereum', category: 'Cripto' },
  { ticker: 'EURUSD=X', name: 'EUR/USD', category: 'Forex' },
  { ticker: 'USDCLP=X', name: 'USD/CLP', category: 'Forex — relevante para Chile' },
  // ETFs de referencia (2026-10-20): mismo universo que SPY (benchmark) pero con
  // distintos enfoques — para comparar costo/composición, no para operarlos.
  { ticker: 'VTI', name: 'Mercado total EEUU (ETF, ~3600 empresas)', category: 'ETF — mercado amplio EEUU' },
  { ticker: 'QQQ', name: 'Nasdaq-100 (ETF, cargado a tecnología)', category: 'ETF — mercado amplio EEUU' },
  { ticker: 'SCHD', name: 'Dividendo de calidad EEUU (ETF)', category: 'ETF — dividendos' },
  { ticker: 'VYM', name: 'Alto dividendo EEUU (ETF)', category: 'ETF — dividendos' },
  { ticker: 'VXUS', name: 'Resto del mundo ex-EEUU (ETF, un solo fondo)', category: 'ETF — internacional' },
  { ticker: 'VEA', name: 'Mercados desarrollados ex-EEUU (ETF)', category: 'ETF — internacional' },
  { ticker: 'VWO', name: 'Mercados emergentes (ETF)', category: 'ETF — internacional' },
  { ticker: 'BND', name: 'Bonos EEUU diversificados (ETF)', category: 'ETF — renta fija diversificada' },
];

// Apagado por default en producción: testeado en backtest.js con --fundamentals
// y el resultado fue el mismo patrón sospechoso que el filtro de régimen que ya
// descartamos — empeora en ventanas cortas (60/120 días) y solo "mejora" en la
// ventana larga (250 días), que es justo la más contaminada por look-ahead bias
// (el cache es una foto de HOY aplicada retroactivamente a todo el año). No se
// confía en una mejora que solo aparece en la ventana ya conocida/ajustada — ver
// GRADUATION_CRITERIA.md. Prender esto en producción requeriría fundamentales
// point-in-time reales, que no están disponibles gratis.
const USE_FUNDAMENTAL_TILT_IN_PRODUCTION = false;

// Cuántas señales mostrar en el reporte/dashboard (el universo completo se evalúa
// igual para decidir trades; esto es solo un recorte para que el reporte sea legible).
const REPORT_TOP_N = 15;

// Límite de requests HTTP concurrentes al pedir datos de mercado (evita que Yahoo
// u otra red con allowlist nos corte por ráfaga de cientos de requests a la vez).
const FETCH_CONCURRENCY = 20;

// ETFs sectoriales (SPDR Select Sector + un par de especializados) para medir
// rotación sectorial — qué sectores lideran/retrasan en distintas ventanas de
// tiempo. No son parte del universo operable, solo contexto de mercado.
const SECTOR_ETFS = [
  { ticker: 'XLE', sector: 'Energía' },
  { ticker: 'XLK', sector: 'Tecnología' },
  { ticker: 'SMH', sector: 'Semiconductores' },
  { ticker: 'ITA', sector: 'Aeroespacial y Defensa' },
  { ticker: 'XLF', sector: 'Financiero' },
  { ticker: 'XLV', sector: 'Salud' },
  { ticker: 'XLY', sector: 'Consumo discrecional' },
  { ticker: 'XLP', sector: 'Consumo básico' },
  { ticker: 'XLI', sector: 'Industrial' },
  { ticker: 'XLB', sector: 'Materiales' },
  { ticker: 'XLRE', sector: 'Bienes raíces' },
  { ticker: 'XLU', sector: 'Servicios públicos' },
  { ticker: 'XLC', sector: 'Comunicaciones' },
];

// --- Estructura core-satellite (2026-10-20) ---
// En vez de un solo portfolio, se divide en dos sub-portfolios con reglas
// distintas — así como invierte la mayoría de la gente que arma una
// estrategia real: una base grande que compone sola a largo plazo, y una
// porción chica donde se asume más riesgo buscando ganancias de corto plazo.
const CORE_ALLOCATION_PCT = 0.7; // 70% del capital — largo plazo, dividendos, buy&hold
const SATELLITE_ALLOCATION_PCT = 0.3; // 30% — el motor técnico que ya tenemos, más activo

// Core: empresas de calidad con dividendo real y moat sólido, diversificadas por
// sector (salud, consumo básico x2, energía x2, financiero x2, tecnología, defensa,
// semiconductores) — subconjunto de qualityCompanies.json. Se compran UNA vez, en
// partes iguales, y se mantienen — no se tradea con señales técnicas diarias.
const CORE_HOLDINGS = ['JNJ', 'PG', 'KO', 'XOM', 'CVX', 'JPM', 'MSFT', 'V', 'LMT', 'TXN'];

module.exports = {
  STARTING_CAPITAL,
  WATCHLIST,
  BENCHMARK_TICKER,
  STRATEGY,
  REPORT_TOP_N,
  FETCH_CONCURRENCY,
  SECTOR_ETFS,
  USE_FUNDAMENTAL_TILT_IN_PRODUCTION,
  CORE_ALLOCATION_PCT,
  SATELLITE_ALLOCATION_PCT,
  CORE_HOLDINGS,
  ALLOW_SHORTING_IN_PRODUCTION,
  OTHER_MARKETS,
};
