# Reporte diario de inversión (simulado) — 2026-11-13

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$1022.79**
- P&L acumulado: $22.79 (+2.28%)
- Core (70%, largo plazo): $728.39 (+4.06%) | Satellite (30%, técnico): $294.40 (-1.87%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 19.15 — CALMA (Dentro del rango histórico normal.) Variación 10d: -2.0 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +1.03 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: 0.68 pts — normal.
- **Índice dólar (DXY)**: 103.41 (variación 10d: +1.66)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $286.94 | $77.37 | 10.6% | $7.37 (+10.53%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $169.79 | $75.13 | 10.3% | $5.13 (+7.33%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $99.20 | $74.89 | 10.3% | $4.89 (+6.98%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $170.01 | $67.12 | 9.2% | $-2.88 (-4.11%) | $1.0300/acción (2026-08-17) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $218.82 | $68.14 | 9.4% | $-1.86 (-2.65%) | $1.7800/acción (2026-08-19) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $345.07 | $71.95 | 9.9% | $1.95 (+2.78%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $524.81 | $68.96 | 9.5% | $-1.04 (-1.49%) | $0.9100/acción (2026-08-20) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $425.98 | $73.27 | 10.1% | $3.27 (+4.67%) | $0.7800/acción (2026-11-10) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $595.64 | $75.89 | 10.4% | $5.89 (+8.42%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $303.82 | $75.67 | 10.4% | $6.02 (+8.64%) | $1.5200/acción (2026-10-30) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| VEEV | Health Care | 0.226 | $315.43 | $302.30 | $68.40 | 23.2% | $-2.97 (-4.16%) |
| ISRG | Health Care | 0.221 | $438.48 | $446.25 | $98.76 | 33.5% | $1.72 (+1.77%) |
| TMO | Health Care | 0.114 | $690.08 | $699.51 | $80.06 | 27.2% | $1.08 (+1.37%) |
| CRL | Health Care | 0.062 | $339.66 | $340.44 | $21.15 | 7.2% | $0.05 (+0.23%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $423.31 | $11.27 | 3.8% | $0.71 (+6.68%) |

### Concentración y correlación (informativo)

- Posiciones: 5 · N efectivo por peso (1/HHI): **3.65**
- Correlación promedio entre posiciones (retornos diarios, últimas 60 ruedas): **0.17** → N efectivo ajustado por correlación: **2.53**
- Por sector: Health Care 96% · Consumer Discretionary 4%

_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| CDW | Information Technology | 76 | BUY | $171.83 | Tendencia de corto plazo alcista: SMA20 (161.91) por encima de SMA50 (150.72). |
| ZBH | Health Care | 72 | BUY | $102.93 | Tendencia de corto plazo alcista: SMA20 (100.64) por encima de SMA50 (95.68). |
| BBY | Consumer Discretionary | 71 | BUY | $104.04 | Tendencia de corto plazo alcista: SMA20 (99.08) por encima de SMA50 (93.49). |
| JKHY | Financials | 69 | BUY | $178.79 | Tendencia de corto plazo alcista: SMA20 (165.99) por encima de SMA50 (157.69). |
| ALGN | Health Care | 68 | BUY | $170.22 | Tendencia de corto plazo alcista: SMA20 (158.80) por encima de SMA50 (151.71). |
| CBOE | Financials | 67 | BUY | $376.77 | Tendencia de corto plazo alcista: SMA20 (340.80) por encima de SMA50 (305.06). |
| DD | Industrials | 67 | BUY | $153.96 | Tendencia de corto plazo alcista: SMA20 (143.73) por encima de SMA50 (135.37). |
| SWK | Industrials | 67 | BUY | $113.52 | Tendencia de corto plazo alcista: SMA20 (106.08) por encima de SMA50 (96.58). |
| GWW | Industrials | 67 | BUY | $1491.34 | Tendencia de corto plazo alcista: SMA20 (1400.52) por encima de SMA50 (1327.66). |
| IDXX | Health Care | 66 | BUY | $703.90 | Tendencia de corto plazo alcista: SMA20 (625.63) por encima de SMA50 (562.40). |
| BF-B | Consumer Staples | 65 | BUY | $30.72 | Tendencia de corto plazo alcista: SMA20 (29.46) por encima de SMA50 (27.70). |
| MCK | Health Care | 65 | BUY | $1097.82 | Tendencia de corto plazo alcista: SMA20 (1028.10) por encima de SMA50 (954.99). |
| ABNB | Consumer Discretionary | 64 | BUY | $186.46 | Tendencia de corto plazo alcista: SMA20 (175.55) por encima de SMA50 (169.11). |
| STE | Health Care | 64 | BUY | $264.29 | Tendencia de corto plazo alcista: SMA20 (239.34) por encima de SMA50 (223.27). |
| TYL | Information Technology | 64 | BUY | $425.33 | Tendencia de corto plazo alcista: SMA20 (399.32) por encima de SMA50 (362.50). |
| ISRG | Health Care | 61 | BUY | $446.25 | Tendencia de corto plazo alcista: SMA20 (447.26) por encima de SMA50 (417.65). |
| MAR | Consumer Discretionary | 55 | BUY | $423.31 | Tendencia de corto plazo alcista: SMA20 (408.59) por encima de SMA50 (374.81). |
| VEEV | Health Care | 49 | BUY | $302.30 | Tendencia de corto plazo alcista: SMA20 (311.52) por encima de SMA50 (291.44). |
| TMO | Health Care | 39 | BUY | $699.51 | Tendencia de corto plazo alcista: SMA20 (695.74) por encima de SMA50 (670.55). |
| CRL | Health Care | 37 | BUY | $340.44 | Tendencia de corto plazo alcista: SMA20 (343.06) por encima de SMA50 (311.11). |
| MRVL | Information Technology | -67 | SELL | $156.44 | Tendencia de corto plazo bajista: SMA20 (194.73) por debajo de SMA50 (229.17). |
| TPL | Energy | -67 | SELL | $290.31 | Tendencia de corto plazo bajista: SMA20 (312.92) por debajo de SMA50 (337.09). |
| COIN | Financials | -68 | SELL | $128.61 | Tendencia de corto plazo bajista: SMA20 (150.36) por debajo de SMA50 (170.41). |
| TER | Information Technology | -68 | SELL | $250.25 | Tendencia de corto plazo bajista: SMA20 (281.76) por debajo de SMA50 (342.62). |
| DELL | Information Technology | -70 | SELL | $342.36 | Tendencia de corto plazo bajista: SMA20 (413.06) por debajo de SMA50 (492.99). |
| SNDK | Information Technology | -70 | SELL | $873.48 | Tendencia de corto plazo bajista: SMA20 (1123.77) por debajo de SMA50 (1441.20). |
| BKR | Energy | -71 | SELL | $49.18 | Tendencia de corto plazo bajista: SMA20 (52.29) por debajo de SMA50 (55.19). |
| LITE | Information Technology | -71 | SELL | $592.59 | Tendencia de corto plazo bajista: SMA20 (723.08) por debajo de SMA50 (867.15). |
| STX | Information Technology | -72 | SELL | $526.04 | Tendencia de corto plazo bajista: SMA20 (598.80) por debajo de SMA50 (740.38). |
| SMCI | Information Technology | -72 | SELL | $26.67 | Tendencia de corto plazo bajista: SMA20 (31.28) por debajo de SMA50 (36.53). |
| WDC | Information Technology | -73 | SELL | $294.43 | Tendencia de corto plazo bajista: SMA20 (336.35) por debajo de SMA50 (391.69). |
| CIEN | Information Technology | -74 | SELL | $280.42 | Tendencia de corto plazo bajista: SMA20 (307.68) por debajo de SMA50 (343.25). |
| FIX | Industrials | -75 | SELL | $1108.84 | Tendencia de corto plazo bajista: SMA20 (1214.89) por debajo de SMA50 (1467.62). |
| FLEX | Information Technology | -79 | SELL | $75.27 | Tendencia de corto plazo bajista: SMA20 (81.01) por debajo de SMA50 (99.27). |
| VRT | Industrials | -80 | SELL | $202.23 | Tendencia de corto plazo bajista: SMA20 (208.99) por debajo de SMA50 (231.31). |

#### Detalle de razonamiento (señales destacadas)

**CDW** (score 76, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (161.91) por encima de SMA50 (150.72).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.7%.
  - RSI 56: zona neutral.
**ZBH** (score 72, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (100.64) por encima de SMA50 (95.68).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.9%.
  - RSI 58: zona neutral.
**BBY** (score 71, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (99.08) por encima de SMA50 (93.49).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.8%.
  - RSI 59: zona neutral.
**JKHY** (score 69, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (165.99) por encima de SMA50 (157.69).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.8%.
  - RSI 68: zona neutral.
**ALGN** (score 68, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (158.80) por encima de SMA50 (151.71).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 13.6%.
  - RSI 66: zona neutral.
**CBOE** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (340.80) por encima de SMA50 (305.06).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.3%.
  - RSI 72: sobrecompra, riesgo de corrección.
**DD** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (143.73) por encima de SMA50 (135.37).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.9%.
  - RSI 71: sobrecompra, riesgo de corrección.
**SWK** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (106.08) por encima de SMA50 (96.58).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.7%.
  - RSI 70: zona neutral.
**GWW** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (1400.52) por encima de SMA50 (1327.66).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.9%.
  - RSI 72: sobrecompra, riesgo de corrección.
**IDXX** (score 66, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (625.63) por encima de SMA50 (562.40).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 27.7%.
  - RSI 73: sobrecompra, riesgo de corrección.
**BF-B** (score 65, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (29.46) por encima de SMA50 (27.70).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.0%.
  - RSI 60: zona neutral.
**MCK** (score 65, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (1028.10) por encima de SMA50 (954.99).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.4%.
  - RSI 75: sobrecompra, riesgo de corrección.
**ABNB** (score 64, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (175.55) por encima de SMA50 (169.11).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 13.4%.
  - RSI 61: zona neutral.
**STE** (score 64, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (239.34) por encima de SMA50 (223.27).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 16.4%.
  - RSI 77: sobrecompra, riesgo de corrección.
**TYL** (score 64, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (399.32) por encima de SMA50 (362.50).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.9%.
  - RSI 66: zona neutral.
**ISRG** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (447.26) por encima de SMA50 (417.65).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.3%.
  - RSI 48: zona neutral.
**MAR** (score 55, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (408.59) por encima de SMA50 (374.81).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.0%.
  - RSI 71: sobrecompra, riesgo de corrección.
**VEEV** (score 49, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (311.52) por encima de SMA50 (291.44).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -3.4%.
  - RSI 34: zona neutral.
**TMO** (score 39, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (695.74) por encima de SMA50 (670.55).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 0.4%.
  - RSI 54: zona neutral.
**CRL** (score 37, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (343.06) por encima de SMA50 (311.11).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -5.3%.
  - RSI 45: zona neutral.
**MRVL** (score -67, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (194.73) por debajo de SMA50 (229.17).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -20.3%.
  - RSI 29: sobreventa, posible rebote.
**TPL** (score -67, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (312.92) por debajo de SMA50 (337.09).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.5%.
  - RSI 29: sobreventa, posible rebote.
**COIN** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (150.36) por debajo de SMA50 (170.41).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.4%.
  - RSI 29: sobreventa, posible rebote.
**TER** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (281.76) por debajo de SMA50 (342.62).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.8%.
  - RSI 36: zona neutral.
**DELL** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (413.06) por debajo de SMA50 (492.99).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -19.3%.
  - RSI 33: zona neutral.
**SNDK** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (1123.77) por debajo de SMA50 (1441.20).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -24.1%.
  - RSI 34: zona neutral.
**BKR** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (52.29) por debajo de SMA50 (55.19).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.5%.
  - RSI 35: zona neutral.
**LITE** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (723.08) por debajo de SMA50 (867.15).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -29.5%.
  - RSI 34: zona neutral.
**STX** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (598.80) por debajo de SMA50 (740.38).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -18.4%.
  - RSI 37: zona neutral.
**SMCI** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (31.28) por debajo de SMA50 (36.53).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -19.0%.
  - RSI 37: zona neutral.
**WDC** (score -73, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (336.35) por debajo de SMA50 (391.69).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -19.6%.
  - RSI 38: zona neutral.
**CIEN** (score -74, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (307.68) por debajo de SMA50 (343.25).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.6%.
  - RSI 40: zona neutral.
**FIX** (score -75, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (1214.89) por debajo de SMA50 (1467.62).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.0%.
  - RSI 43: zona neutral.
**FLEX** (score -79, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (81.01) por debajo de SMA50 (99.27).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.0%.
  - RSI 49: zona neutral.
**VRT** (score -80, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (208.99) por debajo de SMA50 (231.31).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.0%.
  - RSI 51: zona neutral.

---
_Generado automáticamente el 2026-11-13T20:07:34.919Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

No se pudo obtener una crónica verificable del cierre del 2026-11-13: la búsqueda web solo devolvió notas de la misma fecha de 2025 y un cierre del 2026-11-06 (S&P 500 7,376.86, +0.3%; Nasdaq 24,579.42, +1.1%), que no corresponde a hoy. Además, las research notes quedaron vacías porque Yahoo Finance fue inalcanzable desde el entorno (ENOTFOUND), por lo que no hay veredicto por ticker para contrastar. No se menciona ningún ticker del core ni del satellite al no haber noticia real verificada.

Contexto cuantitativo del propio reporte: valor total $1022.79 (+0.04% vs. ayer), sin trades en el satellite, VIX 19.15 (calma).

Fuentes consultadas:
- [Stock market news for Nov 4 2026 (Zacks)](https://www.zacks.com/stock/news/3022827/stock-market-news-for-nov-4-2026)
- [How major US stock indexes fared Friday 11/6/2026](https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-friday-1162026-nid06112026/)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
