# invest-bot — paper trading simulado (educativo)

Simula un corredor de bolsa operando con **$1000 USD ficticios** sobre un watchlist de acciones/ETFs de EEUU. No es asesoría financiera real, no ejecuta órdenes en ningún broker de verdad, y las señales pueden estar equivocadas.

Este repo es operado por una rutina automática en la nube (dos veces por día hábil, apertura y cierre de Wall Street) que:
1. Corre el motor cuantitativo (`npm run invest:daily`) — señales técnicas multi-factor (SMA20/50, SMA200, momentum, RSI) + panel de riesgo macro (VIX, curva de rendimientos) + ejecución de trades simulados con gestión de riesgo (stop-loss, toma de ganancias, límites de posición).
2. Busca noticias financieras reales del día para el watchlist y el panorama macro, y agrega una sección de análisis cualitativo al reporte.
3. Hace commit y push del reporte (`reports/<fecha>.md`) y del estado del portfolio (`data/portfolio.json`) para que quede un historial auditable día por día.

## Estructura

- `config.js` — watchlist y parámetros de la estrategia (umbrales, stop-loss, etc.)
- `lib/marketData.js` — datos de mercado (Yahoo Finance, sin API key)
- `lib/indicators.js` — SMA, RSI, momentum, volatilidad
- `lib/strategy.js` — scoring multi-factor por ticker (-100 a 100) → BUY/SELL/HOLD
- `lib/decide.js` — motor de decisión (combina señales + gestión de riesgo + estado del portfolio)
- `lib/portfolio.js` — estado persistente (cash, posiciones, historial de trades)
- `lib/macroRisk.js` — panel de riesgo macro (VIX, curva de rendimientos)
- `lib/report.js` — genera el reporte diario en markdown
- `run-daily.js` — orquestador del ciclo diario
- `backtest.js` — valida la estrategia contra datos históricos reales (`npm run invest:backtest -- <días>`)
- `data/portfolio.json` — estado actual del portfolio simulado (se crea solo con $1000 la primera vez)
- `reports/` — un `.md` por día + `latest.md`

## Correrlo manualmente

```
npm run invest:daily       # ciclo diario completo (datos + señales + trades + reporte)
npm run invest:backtest -- 120   # backtest sobre los últimos ~120 días hábiles
```

## Limitaciones

- Datos públicos (Yahoo Finance), pueden tener retraso de minutos.
- La estrategia es un conjunto de reglas técnicas simples, validadas por backtest pero no un modelo predictivo robusto — puede perder plata en mercados reales, por eso opera en modo ficticio.
- El panel de riesgo macro (VIX, curva de rendimientos) es contexto histórico, **no una predicción de crisis** — tiene horizontes largos y variables y tasas de falso positivo conocidas.
