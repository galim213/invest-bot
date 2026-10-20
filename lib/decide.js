'use strict';

const { STRATEGY } = require('../config');
const portfolio = require('./portfolio');

/**
 * Motor de decisión: combina los scores de `strategy.evaluateAll` con el estado actual
 * del portfolio y las reglas de riesgo (stop-loss, take-profit, tamaño máx. de posición,
 * reserva mínima de cash) para decidir qué comprar/vender hoy. Muta `state` ejecutando
 * los trades vía lib/portfolio.
 */
function runDecisionEngine(state, evaluations, date, { regimeBullish = true, eligibleForEntry = null } = {}) {
  const byTicker = new Map(evaluations.map((e) => [e.ticker, e]));
  const prices = new Map(
    evaluations.filter((e) => e.lastClose != null).map((e) => [e.ticker, e.lastClose])
  );

  const trades = [];
  const warnings = [];

  // 1) Gestionar posiciones existentes: stop-loss, take-profit, señal de venta.
  for (const [ticker, pos] of Object.entries({ ...state.positions })) {
    const ev = byTicker.get(ticker);
    const price = prices.get(ticker);

    if (price == null) {
      warnings.push(`Sin datos frescos de ${ticker}; se mantiene la posición sin cambios.`);
      continue;
    }

    const changeFromEntry = (price - pos.avgCost) / pos.avgCost;

    if (changeFromEntry <= STRATEGY.stopLossPct) {
      const trade = portfolio.sell(state, {
        ticker,
        price,
        fraction: 1,
        date,
        reason: `Stop-loss: precio ${(changeFromEntry * 100).toFixed(1)}% desde el precio de entrada (umbral ${(STRATEGY.stopLossPct * 100).toFixed(0)}%).`,
      });
      if (trade) trades.push(trade);
      continue;
    }

    if (changeFromEntry >= STRATEGY.takeProfitTrimPct && !pos.trimmedProfit) {
      const trade = portfolio.sell(state, {
        ticker,
        price,
        fraction: 0.5,
        date,
        reason: `Toma de ganancias parcial: +${(changeFromEntry * 100).toFixed(1)}% desde la entrada (umbral +${(STRATEGY.takeProfitTrimPct * 100).toFixed(0)}%). Se vende el 50% de la posición.`,
      });
      if (trade) trades.push(trade);
      if (state.positions[ticker]) state.positions[ticker].trimmedProfit = true;
      continue;
    }

    if (ev && ev.signal === 'SELL') {
      const trade = portfolio.sell(state, {
        ticker,
        price,
        fraction: 1,
        date,
        reason: `Señal técnica de venta (score ${ev.score}): ${ev.reasons.join(' ')}`,
      });
      if (trade) trades.push(trade);
    }
  }

  // 2) Evaluar nuevas compras entre los candidatos con señal BUY que no se posean ya.
  // Filtro de régimen de mercado: si el benchmark general está en tendencia bajista
  // (por debajo de su propia SMA200), no abrimos posiciones largas nuevas — seguimos
  // vendiendo/protegiendo lo que ya tenemos, pero no sumamos exposición en un mercado
  // que la propia estrategia no está diseñada para leer bien (es un filtro de régimen
  // de mercado general, no un parámetro curve-fit al universo de acciones).
  if (!regimeBullish) {
    warnings.push('Régimen de mercado bajista (benchmark por debajo de su SMA200): no se abren compras nuevas hoy.');
    return { trades, warnings, prices };
  }

  const totalValueAtOpen = portfolio.portfolioValue(state, prices);
  const candidates = evaluations
    .filter(
      (e) =>
        e.signal === 'BUY' &&
        !state.positions[e.ticker] &&
        e.lastClose != null &&
        (!eligibleForEntry || eligibleForEntry(e.ticker))
    )
    .sort((a, b) => b.score - a.score);

  for (const ev of candidates) {
    const minCashReserve = STRATEGY.minCashReservePct * totalValueAtOpen;
    const availableCash = Math.max(0, state.cash - minCashReserve);
    if (availableCash < 10) break; // sin margen para seguir comprando

    let targetAllocation = Math.min(STRATEGY.maxPositionPct * totalValueAtOpen, availableCash);

    const vol = ev.metrics?.volatility;
    if (vol != null && vol > 0) {
      const volAdjust = Math.max(0.5, Math.min(1.5, 0.02 / vol));
      targetAllocation = Math.min(targetAllocation * volAdjust, availableCash);
    }

    if (targetAllocation < 10) continue;

    const trade = portfolio.buy(state, {
      ticker: ev.ticker,
      price: ev.lastClose,
      usdAmount: targetAllocation,
      date,
      reason: `Señal técnica de compra (score ${ev.score}): ${ev.reasons.join(' ')}`,
    });
    if (trade) trades.push(trade);
  }

  return { trades, warnings, prices };
}

module.exports = { runDecisionEngine };
