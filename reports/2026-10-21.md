# Reporte diario de inversión (simulado) — 2026-10-21

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$1000.98**
- P&L acumulado: $0.98 (+0.10%)
- Core (70%, largo plazo): $701.09 (+0.16%) | Satellite (30%, técnico): $299.89 (-0.04%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 16.63 — CALMA (Dentro del rango histórico normal.) Variación 10d: +1.2 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +1.08 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -0.80 pts — normal.
- **Índice dólar (DXY)**: 101.69 (variación 10d: -0.45)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor mercado | P&L no realizado |
|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $257.65 | $69.47 | $-0.53 (-0.76%) |
| PG | Consumer Staples | 0.442 | $158.20 | $156.89 | $69.42 | $-0.58 (-0.83%) |
| KO | Consumer Staples | 0.755 | $92.72 | $92.68 | $69.96 | $-0.04 (-0.05%) |
| XOM | Energy | 0.395 | $177.30 | $178.07 | $70.30 | $0.30 (+0.43%) |
| CVX | Energy | 0.311 | $224.78 | $226.76 | $70.62 | $0.62 (+0.88%) |
| JPM | Financials | 0.209 | $335.73 | $335.13 | $69.87 | $-0.13 (-0.18%) |
| MSFT | Information Technology | 0.131 | $532.73 | $532.95 | $70.03 | $0.03 (+0.04%) |
| V | Financials | 0.172 | $406.96 | $408.07 | $70.19 | $0.19 (+0.27%) |
| LMT | Industrials | 0.127 | $549.38 | $551.97 | $70.33 | $0.33 (+0.47%) |
| TXN | Information Technology | 0.249 | $279.65 | $284.65 | $70.90 | $1.25 (+1.79%) |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor mercado | P&L no realizado |
|---|---|---|---|---|---|---|
| MRNA | Health Care | 0.155 | $241.29 | $245.81 | $38.20 | $0.70 (+1.87%) |
| VEEV | Health Care | 0.226 | $315.43 | $320.48 | $72.52 | $1.14 (+1.60%) |
| ISRG | Health Care | 0.221 | $438.48 | $428.12 | $94.75 | $-2.29 (-2.36%) |
| TMO | Health Care | 0.114 | $690.08 | $694.29 | $79.47 | $0.48 (+0.61%) |

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| MRNA | Health Care | 68 | BUY | $245.81 | Tendencia de corto plazo alcista: SMA20 (210.03) por encima de SMA50 (165.64). |
| ACN | Information Technology | 67 | BUY | $240.28 | Tendencia de corto plazo alcista: SMA20 (204.82) por encima de SMA50 (191.55). |
| VEEV | Health Care | 64 | BUY | $320.48 | Tendencia de corto plazo alcista: SMA20 (292.97) por encima de SMA50 (273.90). |
| ILMN | Health Care | 62 | BUY | $282.86 | Tendencia de corto plazo alcista: SMA20 (272.08) por encima de SMA50 (238.74). |
| MTD | Health Care | 58 | HOLD | $1677.63 | Tendencia de corto plazo alcista: SMA20 (1562.42) por encima de SMA50 (1456.49). |
| PSX | Energy | 57 | BUY | $290.12 | Tendencia de corto plazo alcista: SMA20 (274.90) por encima de SMA50 (260.21). |
| PLTR | Information Technology | 56 | BUY | $201.72 | Tendencia de corto plazo alcista: SMA20 (194.98) por encima de SMA50 (183.89). |
| MPC | Energy | 54 | BUY | $468.41 | Tendencia de corto plazo alcista: SMA20 (441.16) por encima de SMA50 (404.97). |
| TMO | Health Care | 54 | BUY | $694.29 | Tendencia de corto plazo alcista: SMA20 (672.27) por encima de SMA50 (641.72). |
| A | Health Care | 53 | BUY | $177.72 | Tendencia de corto plazo alcista: SMA20 (171.75) por encima de SMA50 (160.24). |
| DDOG | Information Technology | 53 | BUY | $273.09 | Tendencia de corto plazo alcista: SMA20 (271.30) por encima de SMA50 (248.07). |
| VTRS | Health Care | 52 | BUY | $18.45 | Tendencia de corto plazo alcista: SMA20 (17.83) por encima de SMA50 (17.09). |
| CRL | Health Care | 51 | BUY | $344.81 | Tendencia de corto plazo alcista: SMA20 (301.76) por encima de SMA50 (291.56). |
| MAR | Consumer Discretionary | 51 | HOLD | $404.00 | Tendencia de corto plazo alcista: SMA20 (368.61) por encima de SMA50 (354.68). |
| TWLO | Information Technology | 51 | BUY | $266.69 | Tendencia de corto plazo alcista: SMA20 (279.84) por encima de SMA50 (254.67). |
| ISRG | Health Care | 30 | HOLD | $428.12 | Tendencia de corto plazo alcista: SMA20 (416.02) por encima de SMA50 (394.19). |
| ARE | Real Estate | -58 | SELL | $42.24 | Tendencia de corto plazo bajista: SMA20 (45.18) por debajo de SMA50 (48.57). |
| T | Communication Services | -58 | SELL | $21.91 | Tendencia de corto plazo bajista: SMA20 (23.71) por debajo de SMA50 (24.62). |
| WDC | Information Technology | -59 | SELL | $378.51 | Tendencia de corto plazo bajista: SMA20 (405.50) por debajo de SMA50 (437.82). |
| APP | Communication Services | -60 | SELL | $267.90 | Tendencia de corto plazo bajista: SMA20 (281.83) por debajo de SMA50 (301.78). |
| MOS | Materials | -60 | SELL | $17.70 | Tendencia de corto plazo bajista: SMA20 (20.23) por debajo de SMA50 (22.53). |
| CVNA | Consumer Discretionary | -61 | SELL | $59.20 | Tendencia de corto plazo bajista: SMA20 (61.77) por debajo de SMA50 (67.21). |
| CMG | Consumer Discretionary | -61 | SELL | $28.09 | Tendencia de corto plazo bajista: SMA20 (30.99) por debajo de SMA50 (33.71). |
| FSLR | Information Technology | -61 | SELL | $174.82 | Tendencia de corto plazo bajista: SMA20 (176.62) por debajo de SMA50 (195.43). |
| NFLX | Communication Services | -65 | SELL | $65.04 | Tendencia de corto plazo bajista: SMA20 (69.65) por debajo de SMA50 (74.66). |
| VRT | Industrials | -65 | SELL | $212.22 | Tendencia de corto plazo bajista: SMA20 (235.64) por debajo de SMA50 (251.38). |
| AKAM | Information Technology | -68 | SELL | $90.27 | Tendencia de corto plazo bajista: SMA20 (101.68) por debajo de SMA50 (107.20). |
| TMUS | Communication Services | -70 | SELL | $153.75 | Tendencia de corto plazo bajista: SMA20 (160.69) por debajo de SMA50 (171.25). |
| SKYD | Communication Services | -72 | SELL | $7.86 | Tendencia de corto plazo bajista: SMA20 (8.88) por debajo de SMA50 (9.83). |
| ORCL | Information Technology | -74 | SELL | $129.10 | Tendencia de corto plazo bajista: SMA20 (136.53) por debajo de SMA50 (143.60). |
| NRG | Utilities | -77 | SELL | $99.80 | Tendencia de corto plazo bajista: SMA20 (101.08) por debajo de SMA50 (108.05). |

#### Detalle de razonamiento (señales destacadas)

**MRNA** (score 68, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (210.03) por encima de SMA50 (165.64).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 25.1%.
  - RSI 69: zona neutral.
**ACN** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (204.82) por encima de SMA50 (191.55).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 23.2%.
  - RSI 72: sobrecompra, riesgo de corrección.
**VEEV** (score 64, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (292.97) por encima de SMA50 (273.90).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 13.4%.
  - RSI 77: sobrecompra, riesgo de corrección.
**ILMN** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (272.08) por encima de SMA50 (238.74).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.6%.
  - RSI 58: zona neutral.
**MTD** (score 58, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (1562.42) por encima de SMA50 (1456.49).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.4%.
  - RSI 89: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 89 >= 80): se espera una corrección antes de entrar.
**PSX** (score 57, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (274.90) por encima de SMA50 (260.21).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.8%.
  - RSI 73: sobrecompra, riesgo de corrección.
**PLTR** (score 56, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (194.98) por encima de SMA50 (183.89).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.9%.
  - RSI 59: zona neutral.
**MPC** (score 54, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (441.16) por encima de SMA50 (404.97).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.9%.
  - RSI 73: sobrecompra, riesgo de corrección.
**TMO** (score 54, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (672.27) por encima de SMA50 (641.72).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.9%.
  - RSI 65: zona neutral.
**A** (score 53, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (171.75) por encima de SMA50 (160.24).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.1%.
  - RSI 70: zona neutral.
**DDOG** (score 53, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (271.30) por encima de SMA50 (248.07).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 0.6%.
  - RSI 48: zona neutral.
**VTRS** (score 52, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (17.83) por encima de SMA50 (17.09).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.5%.
  - RSI 65: zona neutral.
**CRL** (score 51, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (301.76) por encima de SMA50 (291.56).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 14.8%.
  - RSI 79: sobrecompra, riesgo de corrección.
**MAR** (score 51, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (368.61) por encima de SMA50 (354.68).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 13.3%.
  - RSI 88: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 88 >= 80): se espera una corrección antes de entrar.
**TWLO** (score 51, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (279.84) por encima de SMA50 (254.67).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -2.3%.
  - RSI 37: zona neutral.
**ISRG** (score 30, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (416.02) por encima de SMA50 (394.19).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: 3.3%.
  - RSI 66: zona neutral.
**ARE** (score -58, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (45.18) por debajo de SMA50 (48.57).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -6.6%.
  - RSI 30: zona neutral.
**T** (score -58, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (23.71) por debajo de SMA50 (24.62).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.4%.
  - RSI 34: zona neutral.
**WDC** (score -59, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (405.50) por debajo de SMA50 (437.82).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -6.6%.
  - RSI 32: zona neutral.
**APP** (score -60, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (281.83) por debajo de SMA50 (301.78).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -4.8%.
  - RSI 43: zona neutral.
**MOS** (score -60, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (20.23) por debajo de SMA50 (22.53).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.4%.
  - RSI 13: sobreventa, posible rebote.
**CVNA** (score -61, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (61.77) por debajo de SMA50 (67.21).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -5.7%.
  - RSI 39: zona neutral.
**CMG** (score -61, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (30.99) por debajo de SMA50 (33.71).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.7%.
  - RSI 26: sobreventa, posible rebote.
**FSLR** (score -61, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (176.62) por debajo de SMA50 (195.43).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -2.9%.
  - RSI 54: zona neutral.
**NFLX** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (69.65) por debajo de SMA50 (74.66).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -6.7%.
  - RSI 42: zona neutral.
**VRT** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (235.64) por debajo de SMA50 (251.38).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.9%.
  - RSI 24: sobreventa, posible rebote.
**AKAM** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (101.68) por debajo de SMA50 (107.20).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.7%.
  - RSI 30: sobreventa, posible rebote.
**TMUS** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (160.69) por debajo de SMA50 (171.25).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.3%.
  - RSI 42: zona neutral.
**SKYD** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (8.88) por debajo de SMA50 (9.83).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.6%.
  - RSI 37: zona neutral.
**ORCL** (score -74, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (136.53) por debajo de SMA50 (143.60).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.7%.
  - RSI 43: zona neutral.
**NRG** (score -77, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (101.08) por debajo de SMA50 (108.05).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.1%.
  - RSI 54: zona neutral.

---
_Generado automáticamente el 2026-10-21T20:07:33.528Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

No se encontraron noticias verificables del 2026-10-21 en las búsquedas web (índices S&P 500/Nasdaq, tickers del core ni del satellite): los resultados devolvieron solo datos de meses anteriores (julio–septiembre 2026 o 2025), que no se usan para no inventar causalidad. Por eso no se atribuye el movimiento del día a ninguna noticia. Datos propios del bot: la cartera combinada cerró en $1000.98 (+0.10% acumulado), con régimen ALCISTA, VIX 16.63 (calma) y sin trades en el satellite.

### Core (largo plazo)
Sin noticia relevante encontrada para ningún ticker del core hoy.

### Satellite (técnico)
Sin noticia relevante encontrada para MRNA, VEEV, ISRG, TMO ni los demás tickers destacados hoy.

### Fuentes
- [Stock market today: S&P 500 closes above 7,000 (Yahoo Finance, fecha no confirmada, no usada)](https://finance.yahoo.com/markets/stocks/article/stock-market-today-sp-500-nasdaq-dow-futures-hover-amid-renewed-hopes-for-us-iran-talks-231104868.html)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
