# Reporte diario de inversión (simulado) — 2026-10-27

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$1015.44**
- P&L acumulado: $15.44 (+1.54%)
- Core (70%, largo plazo): $719.18 (+2.74%) | Satellite (30%, técnico): $296.26 (-1.25%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 17.51 — CALMA (Dentro del rango histórico normal.) Variación 10d: +0.6 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.95 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -1.56 pts — **ESTRÉS**.
- **Índice dólar (DXY)**: 102.30 (variación 10d: -0.25)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $268.78 | $72.47 | 10.1% | $2.47 (+3.53%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $159.24 | $70.46 | 9.8% | $0.46 (+0.66%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $91.18 | $68.83 | 9.6% | $-1.17 (-1.67%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $179.89 | $71.02 | 9.9% | $1.02 (+1.46%) | $1.0300/acción (2026-08-17) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $228.33 | $71.11 | 9.9% | $1.11 (+1.58%) | $1.7800/acción (2026-08-19) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $335.78 | $70.01 | 9.7% | $0.01 (+0.01%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $531.33 | $69.82 | 9.7% | $-0.18 (-0.26%) | $0.9100/acción (2026-08-20) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $401.94 | $69.14 | 9.6% | $-0.86 (-1.23%) | $0.6700/acción (2026-08-11) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $623.10 | $79.39 | 11.0% | $9.39 (+13.42%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $308.91 | $76.94 | 10.7% | $7.29 (+10.46%) | $1.4200/acción (2026-07-31) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| VEEV | Health Care | 0.226 | $315.43 | $312.78 | $70.77 | 23.9% | $-0.60 (-0.84%) |
| ISRG | Health Care | 0.221 | $438.48 | $445.88 | $98.68 | 33.3% | $1.64 (+1.69%) |
| TMO | Health Care | 0.114 | $690.08 | $693.33 | $79.36 | 26.8% | $0.37 (+0.47%) |
| CRL | Health Care | 0.062 | $339.66 | $359.04 | $22.31 | 7.5% | $1.20 (+5.71%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $390.23 | $10.39 | 3.5% | $-0.17 (-1.66%) |

### Concentración y correlación (informativo)

- Posiciones: 5 · N efectivo por peso (1/HHI): **3.66**
- Correlación promedio entre posiciones (retornos diarios, últimas 60 ruedas): **0.21** → N efectivo ajustado por correlación: **2.34**
- Por sector: Health Care 96% · Consumer Discretionary 4%

_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| ACN | Information Technology | 66 | BUY | $235.11 | Tendencia de corto plazo alcista: SMA20 (219.37) por encima de SMA50 (197.36). |
| IT | Information Technology | 65 | BUY | $220.90 | Tendencia de corto plazo alcista: SMA20 (203.61) por encima de SMA50 (194.19). |
| CDNS | Information Technology | 61 | BUY | $343.08 | Tendencia de corto plazo alcista: SMA20 (336.11) por encima de SMA50 (319.17). |
| CRL | Health Care | 61 | HOLD | $359.04 | Tendencia de corto plazo alcista: SMA20 (312.94) por encima de SMA50 (296.94). |
| TXN | Information Technology | 61 | BUY | $308.91 | Tendencia de corto plazo alcista: SMA20 (286.19) por encima de SMA50 (273.30). |
| HAS | Consumer Discretionary | 60 | HOLD | $118.33 | Tendencia de corto plazo alcista: SMA20 (100.17) por encima de SMA50 (94.83). |
| NOW | Information Technology | 59 | BUY | $154.83 | Tendencia de corto plazo alcista: SMA20 (144.26) por encima de SMA50 (138.92). |
| SWKS | Information Technology | 58 | BUY | $85.48 | Tendencia de corto plazo alcista: SMA20 (81.31) por encima de SMA50 (79.27). |
| CRWD | Information Technology | 57 | BUY | $268.02 | Tendencia de corto plazo alcista: SMA20 (256.08) por encima de SMA50 (236.78). |
| VTRS | Health Care | 57 | BUY | $18.72 | Tendencia de corto plazo alcista: SMA20 (17.92) por encima de SMA50 (17.28). |
| CBOE | Financials | 55 | BUY | $324.98 | Tendencia de corto plazo alcista: SMA20 (302.05) por encima de SMA50 (292.38). |
| ILMN | Health Care | 55 | BUY | $279.47 | Tendencia de corto plazo alcista: SMA20 (272.15) por encima de SMA50 (245.13). |
| ISRG | Health Care | 55 | BUY | $445.88 | Tendencia de corto plazo alcista: SMA20 (424.12) por encima de SMA50 (398.31). |
| CCL | Consumer Discretionary | 54 | BUY | $27.73 | Tendencia de corto plazo alcista: SMA20 (26.31) por encima de SMA50 (24.72). |
| ADI | Information Technology | 53 | BUY | $425.35 | Tendencia de corto plazo alcista: SMA20 (405.58) por encima de SMA50 (385.14). |
| MAR | Consumer Discretionary | 51 | BUY | $390.23 | Tendencia de corto plazo alcista: SMA20 (376.05) por encima de SMA50 (357.78). |
| VEEV | Health Care | 47 | BUY | $312.78 | Tendencia de corto plazo alcista: SMA20 (301.10) por encima de SMA50 (279.91). |
| TMO | Health Care | 46 | BUY | $693.33 | Tendencia de corto plazo alcista: SMA20 (673.10) por encima de SMA50 (648.87). |
| JBL | Information Technology | -62 | SELL | $283.43 | Tendencia de corto plazo bajista: SMA20 (291.80) por debajo de SMA50 (302.09). |
| CBRE | Real Estate | -63 | SELL | $121.67 | Tendencia de corto plazo bajista: SMA20 (129.73) por debajo de SMA50 (137.87). |
| T | Communication Services | -64 | SELL | $20.94 | Tendencia de corto plazo bajista: SMA20 (23.03) por debajo de SMA50 (24.39). |
| CMG | Consumer Discretionary | -64 | SELL | $27.98 | Tendencia de corto plazo bajista: SMA20 (30.24) por debajo de SMA50 (33.30). |
| FICO | Information Technology | -64 | SELL | $691.94 | Tendencia de corto plazo bajista: SMA20 (724.79) por debajo de SMA50 (897.23). |
| FSLR | Information Technology | -64 | SELL | $175.85 | Tendencia de corto plazo bajista: SMA20 (175.99) por debajo de SMA50 (191.29). |
| HWM | Industrials | -65 | SELL | $191.96 | Tendencia de corto plazo bajista: SMA20 (215.94) por debajo de SMA50 (234.02). |
| BA | Industrials | -66 | SELL | $168.16 | Tendencia de corto plazo bajista: SMA20 (188.35) por debajo de SMA50 (199.10). |
| VRT | Industrials | -67 | SELL | $208.78 | Tendencia de corto plazo bajista: SMA20 (226.01) por debajo de SMA50 (244.12). |
| NRG | Utilities | -68 | SELL | $95.27 | Tendencia de corto plazo bajista: SMA20 (100.24) por debajo de SMA50 (105.78). |
| STX | Information Technology | -68 | SELL | $667.85 | Tendencia de corto plazo bajista: SMA20 (746.82) por debajo de SMA50 (809.61). |
| NFLX | Communication Services | -69 | SELL | $62.52 | Tendencia de corto plazo bajista: SMA20 (68.50) por debajo de SMA50 (73.71). |
| DASH | Consumer Discretionary | -70 | SELL | $170.56 | Tendencia de corto plazo bajista: SMA20 (187.36) por debajo de SMA50 (200.47). |
| ORCL | Information Technology | -70 | SELL | $130.55 | Tendencia de corto plazo bajista: SMA20 (134.70) por debajo de SMA50 (141.68). |
| SKYD | Communication Services | -73 | SELL | $7.75 | Tendencia de corto plazo bajista: SMA20 (8.40) por debajo de SMA50 (9.66). |

#### Detalle de razonamiento (señales destacadas)

**ACN** (score 66, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (219.37) por encima de SMA50 (197.36).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.1%.
  - RSI 73: sobrecompra, riesgo de corrección.
**IT** (score 65, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (203.61) por encima de SMA50 (194.19).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.2%.
  - RSI 72: sobrecompra, riesgo de corrección.
**CDNS** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (336.11) por encima de SMA50 (319.17).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.7%.
  - RSI 44: zona neutral.
**CRL** (score 61, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (312.94) por encima de SMA50 (296.94).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 20.1%.
  - RSI 82: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 82 >= 80): se espera una corrección antes de entrar.
**TXN** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (286.19) por encima de SMA50 (273.30).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.3%.
  - RSI 65: zona neutral.
**HAS** (score 60, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (100.17) por encima de SMA50 (94.83).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 23.3%.
  - RSI 97: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 97 >= 80): se espera una corrección antes de entrar.
**NOW** (score 59, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (144.26) por encima de SMA50 (138.92).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.7%.
  - RSI 70: zona neutral.
**SWKS** (score 58, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (81.31) por encima de SMA50 (79.27).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.7%.
  - RSI 55: zona neutral.
**CRWD** (score 57, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (256.08) por encima de SMA50 (236.78).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.6%.
  - RSI 51: zona neutral.
**VTRS** (score 57, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (17.92) por encima de SMA50 (17.28).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.5%.
  - RSI 64: zona neutral.
**CBOE** (score 55, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (302.05) por encima de SMA50 (292.38).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.2%.
  - RSI 69: zona neutral.
**ILMN** (score 55, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (272.15) por encima de SMA50 (245.13).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.1%.
  - RSI 58: zona neutral.
**ISRG** (score 55, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (424.12) por encima de SMA50 (398.31).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.6%.
  - RSI 69: zona neutral.
**CCL** (score 54, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (26.31) por encima de SMA50 (24.72).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.7%.
  - RSI 62: zona neutral.
**ADI** (score 53, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (405.58) por encima de SMA50 (385.14).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.6%.
  - RSI 57: zona neutral.
**MAR** (score 51, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (376.05) por encima de SMA50 (357.78).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.0%.
  - RSI 74: sobrecompra, riesgo de corrección.
**VEEV** (score 47, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (301.10) por encima de SMA50 (279.91).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.7%.
  - RSI 73: sobrecompra, riesgo de corrección.
**TMO** (score 46, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (673.10) por encima de SMA50 (648.87).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.6%.
  - RSI 62: zona neutral.
**JBL** (score -62, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (291.80) por debajo de SMA50 (302.09).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.8%.
  - RSI 42: zona neutral.
**CBRE** (score -63, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (129.73) por debajo de SMA50 (137.87).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -6.2%.
  - RSI 41: zona neutral.
**T** (score -64, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (23.03) por debajo de SMA50 (24.39).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.4%.
  - RSI 32: zona neutral.
**CMG** (score -64, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (30.24) por debajo de SMA50 (33.30).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.8%.
  - RSI 34: zona neutral.
**FICO** (score -64, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (724.79) por debajo de SMA50 (897.23).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -4.3%.
  - RSI 51: zona neutral.
**FSLR** (score -64, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (175.99) por debajo de SMA50 (191.29).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -5.8%.
  - RSI 45: zona neutral.
**HWM** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (215.94) por debajo de SMA50 (234.02).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.5%.
  - RSI 25: sobreventa, posible rebote.
**BA** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (188.35) por debajo de SMA50 (199.10).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.8%.
  - RSI 27: sobreventa, posible rebote.
**VRT** (score -67, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (226.01) por debajo de SMA50 (244.12).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.0%.
  - RSI 28: sobreventa, posible rebote.
**NRG** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (100.24) por debajo de SMA50 (105.78).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.1%.
  - RSI 30: zona neutral.
**STX** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (746.82) por debajo de SMA50 (809.61).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.6%.
  - RSI 30: sobreventa, posible rebote.
**NFLX** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (68.50) por debajo de SMA50 (73.71).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.3%.
  - RSI 32: zona neutral.
**DASH** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (187.36) por debajo de SMA50 (200.47).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.7%.
  - RSI 34: zona neutral.
**ORCL** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (134.70) por debajo de SMA50 (141.68).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.8%.
  - RSI 40: zona neutral.
**SKYD** (score -73, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (8.40) por debajo de SMA50 (9.66).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -16.4%.
  - RSI 39: zona neutral.

---
_Generado automáticamente el 2026-10-27T20:08:33.599Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

No se encontró cobertura periodística fechada hoy (2026-10-27) para el cierre de los índices ni para los tickers del core o del satellite; las búsquedas devolvieron solo datos de días previos o material sin fecha. Contexto verificado más reciente: el 22-oct hubo una venta fuerte en tecnología (Nasdaq -2.60%) y el 23-oct el S&P 500 cerró -0.52% (~7,623) y el Dow -1.24%. El valor total del portfolio hoy (-0.4% vs. ayer) no se pudo explicar con noticias de la jornada.

### Core (largo plazo)

- **TXN**: reportaba resultados del Q3 2026 el 21-oct (consenso EPS ~$2.39–2.44, ingresos ~$5.9B) y subió su dividendo trimestral 7% a $1.52 en septiembre. No se hallaron los resultados reales ni la reacción del precio, así que no se puede afirmar si refuerzan o contradicen el caso alcista (hoy +10.5% sobre costo). research-notes de hoy vino vacío (Yahoo inalcanzable), sin veredicto contra el cual contrastar.

### Satellite (técnico)

Sin noticias relevantes encontradas para las posiciones abiertas (VEEV, ISRG, TMO, CRL, MAR) ni para las señales destacadas.

### Fuentes

- [Investrade — Market review October 23, 2026](https://investrade.com/market-review-october-23-2026/)
- [Tapeboard — Market pulse 2026-10-22](https://tapeboard.com/blog/market-pulse-2026-10-22)
- [Quiver Quant — Texas Instruments rises as investors position ahead of Q3 results](https://www.quiverquant.com/news/Texas+Instruments+rises+as+investors+position+ahead+of+Q3+results)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.

**Chequeo de alertas:** ninguna condición se cumplió (0 ventas, research-notes vacío/sin sellTriggers, variación total ≈ -0.4%). No se envió email. Nota: research notes, fundamentales y 13F fallaron por red (Yahoo/SEC inalcanzables).
