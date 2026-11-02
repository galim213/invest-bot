# Reporte diario de inversión (simulado) — 2026-11-02

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$1023.56**
- P&L acumulado: $23.56 (+2.36%)
- Core (70%, largo plazo): $731.22 (+4.46%) | Satellite (30%, técnico): $292.34 (-2.55%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 21.25 — ELEVADO (Por encima del promedio histórico (~15-20).) Variación 10d: +3.9 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.91 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -1.98 pts — **ESTRÉS**.
- **Índice dólar (DXY)**: 101.72 (variación 10d: -0.01)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $271.54 | $73.22 | 10.0% | $3.22 (+4.59%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $164.29 | $72.69 | 9.9% | $2.69 (+3.85%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $96.18 | $72.61 | 9.9% | $2.61 (+3.73%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $180.60 | $71.30 | 9.8% | $1.30 (+1.86%) | $1.0300/acción (2026-08-17) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $228.31 | $71.10 | 9.7% | $1.10 (+1.57%) | $1.7800/acción (2026-08-19) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $341.53 | $71.21 | 9.7% | $1.21 (+1.73%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $513.59 | $67.49 | 9.2% | $-2.51 (-3.59%) | $0.9100/acción (2026-08-20) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $425.74 | $73.23 | 10.0% | $3.23 (+4.61%) | $0.6700/acción (2026-08-11) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $643.55 | $82.00 | 11.2% | $12.00 (+17.14%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $306.67 | $76.38 | 10.4% | $6.73 (+9.66%) | $1.5200/acción (2026-10-30) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| VEEV | Health Care | 0.226 | $315.43 | $308.15 | $69.73 | 23.9% | $-1.65 (-2.31%) |
| ISRG | Health Care | 0.221 | $438.48 | $438.08 | $96.95 | 33.2% | $-0.09 (-0.09%) |
| TMO | Health Care | 0.114 | $690.08 | $686.31 | $78.55 | 26.9% | $-0.43 (-0.55%) |
| CRL | Health Care | 0.062 | $339.66 | $342.48 | $21.28 | 7.3% | $0.17 (+0.83%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $416.08 | $11.08 | 3.8% | $0.51 (+4.86%) |

### Concentración y correlación (informativo)

- Posiciones: 5 · N efectivo por peso (1/HHI): **3.67**
- Correlación promedio entre posiciones (retornos diarios, últimas 60 ruedas): **0.18** → N efectivo ajustado por correlación: **2.48**
- Por sector: Health Care 96% · Consumer Discretionary 4%

_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| CRWD | Information Technology | 75 | BUY | $243.24 | Tendencia de corto plazo alcista: SMA20 (253.47) por encima de SMA50 (241.28). |
| TXN | Information Technology | 72 | BUY | $306.68 | Tendencia de corto plazo alcista: SMA20 (288.94) por encima de SMA50 (275.22). |
| CRL | Health Care | 70 | BUY | $342.48 | Tendencia de corto plazo alcista: SMA20 (326.39) por encima de SMA50 (302.86). |
| CCL | Consumer Discretionary | 68 | BUY | $29.93 | Tendencia de corto plazo alcista: SMA20 (27.05) por encima de SMA50 (24.94). |
| GDDY | Information Technology | 68 | BUY | $117.65 | Tendencia de corto plazo alcista: SMA20 (106.97) por encima de SMA50 (101.85). |
| ADI | Information Technology | 67 | BUY | $417.83 | Tendencia de corto plazo alcista: SMA20 (408.53) por encima de SMA50 (389.30). |
| CBOE | Financials | 67 | BUY | $348.60 | Tendencia de corto plazo alcista: SMA20 (312.92) por encima de SMA50 (295.48). |
| RCL | Consumer Discretionary | 67 | BUY | $319.09 | Tendencia de corto plazo alcista: SMA20 (288.07) por encima de SMA50 (271.82). |
| ACN | Information Technology | 65 | BUY | $262.02 | Tendencia de corto plazo alcista: SMA20 (230.75) por encima de SMA50 (203.24). |
| IT | Information Technology | 65 | BUY | $234.96 | Tendencia de corto plazo alcista: SMA20 (211.42) por encima de SMA50 (197.06). |
| SNPS | Information Technology | 64 | BUY | $469.82 | Tendencia de corto plazo alcista: SMA20 (472.98) por encima de SMA50 (438.92). |
| FDS | Financials | 62 | BUY | $341.15 | Tendencia de corto plazo alcista: SMA20 (306.49) por encima de SMA50 (293.20). |
| ULTA | Consumer Discretionary | 61 | BUY | $636.39 | Tendencia de corto plazo alcista: SMA20 (601.30) por encima de SMA50 (567.14). |
| CCI | Real Estate | 60 | BUY | $86.93 | Tendencia de corto plazo alcista: SMA20 (81.06) por encima de SMA50 (75.70). |
| HAS | Consumer Discretionary | 60 | HOLD | $118.93 | Tendencia de corto plazo alcista: SMA20 (106.01) por encima de SMA50 (96.88). |
| MAR | Consumer Discretionary | 53 | BUY | $416.08 | Tendencia de corto plazo alcista: SMA20 (385.25) por encima de SMA50 (361.39). |
| ISRG | Health Care | 48 | BUY | $438.08 | Tendencia de corto plazo alcista: SMA20 (431.96) por encima de SMA50 (402.73). |
| VEEV | Health Care | 39 | BUY | $308.15 | Tendencia de corto plazo alcista: SMA20 (307.39) por encima de SMA50 (285.06). |
| TMO | Health Care | 38 | BUY | $686.31 | Tendencia de corto plazo alcista: SMA20 (679.96) por encima de SMA50 (655.65). |
| COHR | Information Technology | -64 | SELL | $201.27 | Tendencia de corto plazo bajista: SMA20 (253.84) por debajo de SMA50 (277.81). |
| LRCX | Information Technology | -64 | SELL | $227.10 | Tendencia de corto plazo bajista: SMA20 (272.57) por debajo de SMA50 (292.60). |
| ORCL | Information Technology | -64 | SELL | $119.38 | Tendencia de corto plazo bajista: SMA20 (133.50) por debajo de SMA50 (140.90). |
| FIX | Industrials | -65 | SELL | $1207.39 | Tendencia de corto plazo bajista: SMA20 (1452.78) por debajo de SMA50 (1552.69). |
| COIN | Financials | -65 | SELL | $136.65 | Tendencia de corto plazo bajista: SMA20 (169.07) por debajo de SMA50 (178.74). |
| T | Communication Services | -66 | SELL | $21.46 | Tendencia de corto plazo bajista: SMA20 (22.45) por debajo de SMA50 (24.09). |
| BE | Industrials | -66 | SELL | $198.07 | Tendencia de corto plazo bajista: SMA20 (236.78) por debajo de SMA50 (248.15). |
| CHRW | Industrials | -66 | SELL | $128.49 | Tendencia de corto plazo bajista: SMA20 (137.50) por debajo de SMA50 (144.90). |
| NFLX | Communication Services | -66 | SELL | $62.44 | Tendencia de corto plazo bajista: SMA20 (67.33) por debajo de SMA50 (72.33). |
| APP | Communication Services | -67 | SELL | $229.93 | Tendencia de corto plazo bajista: SMA20 (264.94) por debajo de SMA50 (292.68). |
| NEM | Materials | -67 | SELL | $109.48 | Tendencia de corto plazo bajista: SMA20 (114.09) por debajo de SMA50 (120.15). |
| SNDK | Information Technology | -67 | SELL | $1088.26 | Tendencia de corto plazo bajista: SMA20 (1387.97) por debajo de SMA50 (1547.75). |
| BA | Industrials | -68 | SELL | $175.59 | Tendencia de corto plazo bajista: SMA20 (184.47) por debajo de SMA50 (195.35). |
| STX | Information Technology | -68 | SELL | $596.09 | Tendencia de corto plazo bajista: SMA20 (698.57) por debajo de SMA50 (793.72). |
| FICO | Information Technology | -74 | SELL | $717.06 | Tendencia de corto plazo bajista: SMA20 (736.30) por debajo de SMA50 (862.70). |

#### Detalle de razonamiento (señales destacadas)

**CRWD** (score 75, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (253.47) por encima de SMA50 (241.28).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.6%.
  - RSI 41: zona neutral.
**TXN** (score 72, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (288.94) por encima de SMA50 (275.22).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.6%.
  - RSI 63: zona neutral.
**CRL** (score 70, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (326.39) por encima de SMA50 (302.86).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 14.2%.
  - RSI 66: zona neutral.
**CCL** (score 68, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (27.05) por encima de SMA50 (24.94).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 13.2%.
  - RSI 69: zona neutral.
**GDDY** (score 68, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (106.97) por encima de SMA50 (101.85).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.3%.
  - RSI 70: zona neutral.
**ADI** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (408.53) por encima de SMA50 (389.30).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.0%.
  - RSI 51: zona neutral.
**CBOE** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (312.92) por encima de SMA50 (295.48).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 13.7%.
  - RSI 72: sobrecompra, riesgo de corrección.
**RCL** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (288.07) por encima de SMA50 (271.82).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 13.2%.
  - RSI 72: sobrecompra, riesgo de corrección.
**ACN** (score 65, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (230.75) por encima de SMA50 (203.24).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.6%.
  - RSI 75: sobrecompra, riesgo de corrección.
**IT** (score 65, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (211.42) por encima de SMA50 (197.06).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 13.1%.
  - RSI 75: sobrecompra, riesgo de corrección.
**SNPS** (score 64, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (472.98) por encima de SMA50 (438.92).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.4%.
  - RSI 43: zona neutral.
**FDS** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (306.49) por encima de SMA50 (293.20).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.5%.
  - RSI 74: sobrecompra, riesgo de corrección.
**ULTA** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (601.30) por encima de SMA50 (567.14).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.6%.
  - RSI 69: zona neutral.
**CCI** (score 60, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (81.06) por encima de SMA50 (75.70).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.2%.
  - RSI 69: zona neutral.
**HAS** (score 60, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (106.01) por encima de SMA50 (96.88).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 20.8%.
  - RSI 95: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 95 >= 80): se espera una corrección antes de entrar.
**MAR** (score 53, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (385.25) por encima de SMA50 (361.39).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.5%.
  - RSI 78: sobrecompra, riesgo de corrección.
**ISRG** (score 48, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (431.96) por encima de SMA50 (402.73).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.1%.
  - RSI 59: zona neutral.
**VEEV** (score 39, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (307.39) por encima de SMA50 (285.06).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -2.7%.
  - RSI 55: zona neutral.
**TMO** (score 38, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (679.96) por encima de SMA50 (655.65).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.0%.
  - RSI 58: zona neutral.
**COHR** (score -64, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (253.84) por debajo de SMA50 (277.81).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.3%.
  - RSI 23: sobreventa, posible rebote.
**LRCX** (score -64, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (272.57) por debajo de SMA50 (292.60).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -16.6%.
  - RSI 23: sobreventa, posible rebote.
**ORCL** (score -64, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (133.50) por debajo de SMA50 (140.90).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.9%.
  - RSI 34: zona neutral.
**FIX** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (1452.78) por debajo de SMA50 (1552.69).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -17.5%.
  - RSI 25: sobreventa, posible rebote.
**COIN** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (169.07) por debajo de SMA50 (178.74).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -18.9%.
  - RSI 25: sobreventa, posible rebote.
**T** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (22.45) por debajo de SMA50 (24.09).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.5%.
  - RSI 39: zona neutral.
**BE** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (236.78) por debajo de SMA50 (248.15).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.4%.
  - RSI 31: zona neutral.
**CHRW** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (137.50) por debajo de SMA50 (144.90).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.5%.
  - RSI 39: zona neutral.
**NFLX** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (67.33) por debajo de SMA50 (72.33).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.6%.
  - RSI 27: sobreventa, posible rebote.
**APP** (score -67, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (264.94) por debajo de SMA50 (292.68).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.6%.
  - RSI 28: sobreventa, posible rebote.
**NEM** (score -67, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (114.09) por debajo de SMA50 (120.15).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.2%.
  - RSI 42: zona neutral.
**SNDK** (score -67, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (1387.97) por debajo de SMA50 (1547.75).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -20.6%.
  - RSI 28: sobreventa, posible rebote.
**BA** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (184.47) por debajo de SMA50 (195.35).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.3%.
  - RSI 39: zona neutral.
**STX** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (698.57) por debajo de SMA50 (793.72).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.8%.
  - RSI 31: zona neutral.
**FICO** (score -74, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (736.30) por debajo de SMA50 (862.70).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.2%.
  - RSI 49: zona neutral.

---
_Generado automáticamente el 2026-11-02T20:09:15.282Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

No se pudo obtener cobertura noticiosa fechada del 2026-11-02: la búsqueda web no devolvió ningún cierre de mercado ni noticia de hoy para el S&P 500, el Nasdaq, los 10 tickers del core ni los del satellite (solo páginas de cotización sin fecha o de meses anteriores). Además, las research notes de hoy salieron vacías porque Yahoo Finance fue inalcanzable desde el entorno (`fc.yahoo.com` ENOTFOUND), así que no hay veredicto por ticker contra el cual contrastar. Por honestidad, no se inventa ninguna explicación del movimiento del día.

### Core (largo plazo)
Sin noticia relevante verificable encontrada.

### Satellite (técnico)
Sin noticia relevante verificable encontrada.

### Fuentes consultadas (sin datos del día)
- [Market pulse 2026-09-29](https://tapeboard.com/blog/market-pulse-2026-09-29)
- [Stocks fall as Dow, S&P 500 and Nasdaq close lower (17 ago)](https://nbcpalmsprings.com/2026/08/17/stocks-fall-as-dow-sp-500-and-nasdaq-close-lower-monday)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
