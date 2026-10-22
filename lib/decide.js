'use strict';

const { STRATEGY, WATCHLIST } = require('../config');
const portfolio = require('./portfolio');

// Sector de cada ticker del universo (estático, no point-in-time — alcanza
// para el tope de concentración sectorial, que no necesita la precisión
// histórica que sí necesita la membresía del índice).
const sectorByTicker = new Map(WATCHLIST.map((w) => [w.ticker, w.sector]));

function countPositionsInSector(positions, sector) {
  if (!sector) return 0;
  return Object.keys(positions).filter((t) => sectorByTicker.get(t) === sector).length;
}

/**
 * Motor de decisión: combina los scores de `strategy.evaluateAll` con el estado actual
 * del portfolio y las reglas de riesgo (stop-loss, take-profit, tamaño máx. de posición,
 * reserva mínima de cash) para decidir qué comprar/vender hoy. Muta `state` ejecutando
 * los trades vía lib/portfolio.
 */
function runDecisionEngine(
  state,
  evaluations,
  date,
  { regimeBullish = true, eligibleForEntry = null, allowShorting = false, enforceSectorCap = false } = {}
) {
  const byTicker = new Map(evaluations.map((e) => [e.ticker, e]));
  const prices = new Map(
    evaluations.filter((e) => e.lastClose != null).map((e) => [e.ticker, e.lastClose])
  );

  const trades = [];
  const warnings = [];

  // 0) Gestionar posiciones CORTAS existentes: stop obligatorio (riesgo sin
  // techo, nunca opcional), toma de ganancias, o reversión de la señal
  // (si ya no está en zona bajista fuerte, se cubre por convicción perdida).
  for (const [ticker, pos] of Object.entries({ ...state.shorts })) {
    const price = prices.get(ticker);
    if (price == null) {
      warnings.push(`Sin datos frescos de ${ticker}; se mantiene la posición corta sin cambios.`);
      continue;
    }

    const changeFromEntry = (price - pos.avgCost) / pos.avgCost; // positivo = el precio subió en contra del short

    if (changeFromEntry >= STRATEGY.shortStopLossPct) {
      const trade = portfolio.coverShort(state, {
        ticker,
        price,
        fraction: 1,
        date,
        reason: `Stop obligatorio de corto: precio +${(changeFromEntry * 100).toFixed(1)}% desde la entrada (umbral +${(STRATEGY.shortStopLossPct * 100).toFixed(0)}%) — pérdida sin techo si no se cubre.`,
      });
      if (trade) trades.push(trade);
      continue;
    }

    if (changeFromEntry <= STRATEGY.shortTakeProfitPct) {
      const trade = portfolio.coverShort(state, {
        ticker,
        price,
        fraction: 1,
        date,
        reason: `Toma de ganancias de corto: precio ${(changeFromEntry * 100).toFixed(1)}% desde la entrada (umbral ${(STRATEGY.shortTakeProfitPct * 100).toFixed(0)}%).`,
      });
      if (trade) trades.push(trade);
      continue;
    }

    const ev = byTicker.get(ticker);
    if (ev && ev.score > STRATEGY.sellThreshold) {
      const trade = portfolio.coverShort(state, {
        ticker,
        price,
        fraction: 1,
        date,
        reason: `Se cubre el corto: la convicción bajista se perdió (score ${ev.score}, ya no está por debajo del umbral de venta).`,
      });
      if (trade) trades.push(trade);
    }
  }

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

  const totalValueAtOpen = portfolio.portfolioValue(state, prices);
  const minCashReserve = STRATEGY.minCashReservePct * totalValueAtOpen;
  // El margen reservado por shorts abiertos no es cash libre para abrir más
  // posiciones (ni largas ni cortas) — si no, se estaría apalancando de más.
  const freeCapital = () => Math.max(0, state.cash - (state.marginReserved || 0) - minCashReserve);

  // 2) Evaluar nuevas compras entre los candidatos con señal BUY que no se posean ya.
  // Filtro de régimen de mercado: si el benchmark general está en tendencia bajista
  // (por debajo de su propia SMA200), no abrimos posiciones largas nuevas — seguimos
  // vendiendo/protegiendo lo que ya tenemos, pero no sumamos exposición en un mercado
  // que la propia estrategia no está diseñada para leer bien (es un filtro de régimen
  // de mercado general, no un parámetro curve-fit al universo de acciones).
  if (!regimeBullish) {
    warnings.push('Régimen de mercado bajista (benchmark por debajo de su SMA200): no se abren compras largas nuevas hoy.');
  } else {
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
      const availableCash = freeCapital();
      if (availableCash < 10) break; // sin margen para seguir comprando

      // Tope de concentración sectorial: probado y DESCARTADO el 2026-10-22
      // (empeoró en 4/5 regímenes, ver GRADUATION_CRITERIA.md) — apagado por
      // default. `enforceSectorCap` queda para seguir experimentando.
      if (enforceSectorCap) {
        const sector = sectorByTicker.get(ev.ticker);
        if (sector && countPositionsInSector(state.positions, sector) >= STRATEGY.maxPositionsPerSector) continue;
      }

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
  }

  // 3) Evaluar nuevas posiciones CORTAS. Apagado por default (`allowShorting`,
  // ver ALLOW_SHORTING_IN_PRODUCTION en config.js — recién se prende en
  // producción si sobrevive la validación multi-régimen, igual que cualquier
  // otro cambio de lógica de trading). A diferencia de las compras largas,
  // esto NO depende de `regimeBullish`: un régimen bajista es justamente
  // cuando shortear tiene sentido, no cuando hay que frenarlo.
  if (allowShorting) {
    const shortCandidates = evaluations
      .filter(
        (e) =>
          e.score <= STRATEGY.shortThreshold &&
          !state.positions[e.ticker] &&
          !(state.shorts && state.shorts[e.ticker]) &&
          e.lastClose != null &&
          (!eligibleForEntry || eligibleForEntry(e.ticker))
      )
      .sort((a, b) => a.score - b.score); // más bajista primero

    const marginPct = STRATEGY.shortMarginRequirementPct || 0.5;
    const maxAggregateShortNotional = (STRATEGY.maxAggregateShortExposurePct || 1) * totalValueAtOpen;
    let openShortNotional = Object.values(state.shorts || {}).reduce((sum, p) => sum + p.shares * p.avgCost, 0);

    for (const ev of shortCandidates) {
      const availableCapital = freeCapital();
      if (availableCapital < 10) break;

      const remainingAggregateRoom = Math.max(0, maxAggregateShortNotional - openShortNotional);
      if (remainingAggregateRoom < 10) break; // ya se llegó al tope agregado de exposición corta

      const targetAllocation = Math.min(
        STRATEGY.maxShortPositionPct * totalValueAtOpen,
        availableCapital / marginPct,
        remainingAggregateRoom
      );
      if (targetAllocation < 10) continue;

      const trade = portfolio.shortSell(state, {
        ticker: ev.ticker,
        price: ev.lastClose,
        usdAmount: targetAllocation,
        date,
        reason: `Señal técnica fuertemente bajista (score ${ev.score}, umbral de corto ${STRATEGY.shortThreshold}): ${ev.reasons.join(' ')}`,
      });
      if (trade) {
        trades.push(trade);
        openShortNotional += trade.usdAmount;
      }
    }
  }

  return { trades, warnings, prices };
}

module.exports = { runDecisionEngine };
