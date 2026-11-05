# Reporte diario de inversión (simulado) — 2026-11-05

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$1009.05**
- P&L acumulado: $9.05 (+0.90%)
- Core (70%, largo plazo): $712.23 (+1.75%) | Satellite (30%, técnico): $296.82 (-1.06%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 23.91 — ELEVADO (Por encima del promedio histórico (~15-20).) Variación 10d: +4.5 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.85 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -1.91 pts — **ESTRÉS**.
- **Índice dólar (DXY)**: 101.55 (variación 10d: -0.26)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $273.58 | $73.77 | 10.4% | $3.77 (+5.38%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $166.87 | $73.84 | 10.4% | $3.84 (+5.48%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $95.75 | $72.28 | 10.1% | $2.28 (+3.26%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $167.70 | $66.21 | 9.3% | $-3.79 (-5.42%) | $1.0300/acción (2026-08-17) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $215.73 | $67.18 | 9.4% | $-2.82 (-4.03%) | $1.7800/acción (2026-08-19) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $336.61 | $70.18 | 9.9% | $0.18 (+0.26%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $536.53 | $70.50 | 9.9% | $0.50 (+0.71%) | $0.9100/acción (2026-08-20) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $424.85 | $73.08 | 10.3% | $3.08 (+4.39%) | $0.6700/acción (2026-08-11) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $578.55 | $73.72 | 10.4% | $3.72 (+5.31%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $287.03 | $71.49 | 10.0% | $1.84 (+2.64%) | $1.5200/acción (2026-10-30) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| VEEV | Health Care | 0.226 | $315.43 | $309.88 | $70.12 | 23.6% | $-1.26 (-1.76%) |
| ISRG | Health Care | 0.221 | $438.48 | $465.60 | $103.04 | 34.7% | $6.00 (+6.19%) |
| TMO | Health Care | 0.114 | $690.08 | $681.91 | $78.05 | 26.3% | $-0.94 (-1.18%) |
| CRL | Health Care | 0.062 | $339.66 | $317.62 | $19.73 | 6.6% | $-1.37 (-6.49%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $417.86 | $11.13 | 3.7% | $0.56 (+5.31%) |

### Concentración y correlación (informativo)

- Posiciones: 5 · N efectivo por peso (1/HHI): **3.59**
- Correlación promedio entre posiciones (retornos diarios, últimas 60 ruedas): **0.17** → N efectivo ajustado por correlación: **2.49**
- Por sector: Health Care 96% · Consumer Discretionary 4%

_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| MRNA | Health Care | 75 | BUY | $241.42 | Tendencia de corto plazo alcista: SMA20 (223.39) por encima de SMA50 (189.62). |
| CCI | Real Estate | 68 | BUY | $91.30 | Tendencia de corto plazo alcista: SMA20 (84.26) por encima de SMA50 (76.61). |
| IDXX | Health Care | 68 | BUY | $669.79 | Tendencia de corto plazo alcista: SMA20 (576.34) por encima de SMA50 (544.11). |
| RCL | Consumer Discretionary | 68 | BUY | $321.39 | Tendencia de corto plazo alcista: SMA20 (293.93) por encima de SMA50 (273.82). |
| CCL | Consumer Discretionary | 67 | BUY | $29.52 | Tendencia de corto plazo alcista: SMA20 (27.62) por encima de SMA50 (25.19). |
| SNPS | Information Technology | 67 | BUY | $442.87 | Tendencia de corto plazo alcista: SMA20 (465.95) por encima de SMA50 (441.95). |
| HCA | Health Care | 65 | BUY | $506.53 | Tendencia de corto plazo alcista: SMA20 (468.11) por encima de SMA50 (441.88). |
| AMT | Real Estate | 64 | BUY | $193.78 | Tendencia de corto plazo alcista: SMA20 (184.94) por encima de SMA50 (176.13). |
| CBOE | Financials | 63 | BUY | $351.99 | Tendencia de corto plazo alcista: SMA20 (322.33) por encima de SMA50 (297.79). |
| FTV | Industrials | 63 | BUY | $65.89 | Tendencia de corto plazo alcista: SMA20 (61.29) por encima de SMA50 (58.33). |
| GEHC | Health Care | 62 | BUY | $83.25 | Tendencia de corto plazo alcista: SMA20 (73.17) por encima de SMA50 (69.08). |
| TYL | Information Technology | 62 | BUY | $427.83 | Tendencia de corto plazo alcista: SMA20 (377.00) por encima de SMA50 (356.77). |
| ROP | Information Technology | 60 | HOLD | $494.67 | Tendencia de corto plazo alcista: SMA20 (423.22) por encima de SMA50 (398.06). |
| VLTO | Industrials | 60 | HOLD | $117.34 | Tendencia de corto plazo alcista: SMA20 (105.00) por encima de SMA50 (99.56). |
| GILD | Health Care | 59 | BUY | $168.57 | Tendencia de corto plazo alcista: SMA20 (159.36) por encima de SMA50 (152.50). |
| ISRG | Health Care | 56 | BUY | $465.60 | Tendencia de corto plazo alcista: SMA20 (439.58) por encima de SMA50 (408.16). |
| MAR | Consumer Discretionary | 55 | BUY | $417.86 | Tendencia de corto plazo alcista: SMA20 (394.28) por encima de SMA50 (365.05). |
| TMO | Health Care | 46 | BUY | $681.91 | Tendencia de corto plazo alcista: SMA20 (685.57) por encima de SMA50 (659.52). |
| VEEV | Health Care | 38 | BUY | $309.88 | Tendencia de corto plazo alcista: SMA20 (310.97) por encima de SMA50 (288.71). |
| CRL | Health Care | 27 | HOLD | $317.62 | Tendencia de corto plazo alcista: SMA20 (330.82) por encima de SMA50 (304.87). |
| LITE | Information Technology | -68 | SELL | $531.54 | Tendencia de corto plazo bajista: SMA20 (828.72) por debajo de SMA50 (902.93). |
| ETN | Industrials | -69 | SELL | $328.98 | Tendencia de corto plazo bajista: SMA20 (387.11) por debajo de SMA50 (406.80). |
| ORCL | Information Technology | -69 | SELL | $115.35 | Tendencia de corto plazo bajista: SMA20 (130.63) por debajo de SMA50 (139.51). |
| STX | Information Technology | -69 | SELL | $476.52 | Tendencia de corto plazo bajista: SMA20 (661.05) por debajo de SMA50 (777.25). |
| FLEX | Information Technology | -70 | SELL | $68.72 | Tendencia de corto plazo bajista: SMA20 (90.15) por debajo de SMA50 (103.29). |
| MU | Information Technology | -70 | SELL | $680.00 | Tendencia de corto plazo bajista: SMA20 (897.11) por debajo de SMA50 (966.91). |
| FICO | Information Technology | -71 | SELL | $699.11 | Tendencia de corto plazo bajista: SMA20 (738.65) por debajo de SMA50 (836.59). |
| IBKR | Financials | -71 | SELL | $73.39 | Tendencia de corto plazo bajista: SMA20 (81.84) por debajo de SMA50 (86.82). |
| BE | Industrials | -72 | SELL | $169.76 | Tendencia de corto plazo bajista: SMA20 (222.90) por debajo de SMA50 (247.00). |
| CHRW | Industrials | -72 | SELL | $127.56 | Tendencia de corto plazo bajista: SMA20 (136.68) por debajo de SMA50 (144.07). |
| AKAM | Information Technology | -73 | SELL | $79.23 | Tendencia de corto plazo bajista: SMA20 (92.94) por debajo de SMA50 (102.14). |
| VRT | Industrials | -73 | SELL | $177.26 | Tendencia de corto plazo bajista: SMA20 (217.39) por debajo de SMA50 (238.72). |
| AXON | Industrials | -74 | SELL | $377.12 | Tendencia de corto plazo bajista: SMA20 (413.14) por debajo de SMA50 (447.38). |
| SMCI | Information Technology | -74 | SELL | $27.38 | Tendencia de corto plazo bajista: SMA20 (34.00) por debajo de SMA50 (37.64). |
| WDC | Information Technology | -74 | SELL | $277.30 | Tendencia de corto plazo bajista: SMA20 (359.62) por debajo de SMA50 (410.89). |

#### Detalle de razonamiento (señales destacadas)

**MRNA** (score 75, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (223.39) por encima de SMA50 (189.62).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 19.1%.
  - RSI 58: zona neutral.
**CCI** (score 68, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (84.26) por encima de SMA50 (76.61).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 15.8%.
  - RSI 70: zona neutral.
**IDXX** (score 68, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (576.34) por encima de SMA50 (544.11).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 18.2%.
  - RSI 71: sobrecompra, riesgo de corrección.
**RCL** (score 68, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (293.93) por encima de SMA50 (273.82).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.3%.
  - RSI 69: zona neutral.
**CCL** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (27.62) por encima de SMA50 (25.19).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.0%.
  - RSI 66: zona neutral.
**SNPS** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (465.95) por encima de SMA50 (441.95).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.8%.
  - RSI 46: zona neutral.
**HCA** (score 65, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (468.11) por encima de SMA50 (441.88).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.4%.
  - RSI 66: zona neutral.
**AMT** (score 64, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (184.94) por encima de SMA50 (176.13).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.7%.
  - RSI 61: zona neutral.
**CBOE** (score 63, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (322.33) por encima de SMA50 (297.79).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.4%.
  - RSI 66: zona neutral.
**FTV** (score 63, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (61.29) por encima de SMA50 (58.33).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.7%.
  - RSI 77: sobrecompra, riesgo de corrección.
**GEHC** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (73.17) por encima de SMA50 (69.08).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 16.6%.
  - RSI 80: sobrecompra, riesgo de corrección.
**TYL** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (377.00) por encima de SMA50 (356.77).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.0%.
  - RSI 75: sobrecompra, riesgo de corrección.
**ROP** (score 60, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (423.22) por encima de SMA50 (398.06).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 13.4%.
  - RSI 90: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 90 >= 80): se espera una corrección antes de entrar.
**VLTO** (score 60, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (105.00) por encima de SMA50 (99.56).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.9%.
  - RSI 87: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 87 >= 80): se espera una corrección antes de entrar.
**GILD** (score 59, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (159.36) por encima de SMA50 (152.50).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.2%.
  - RSI 64: zona neutral.
**ISRG** (score 56, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (439.58) por encima de SMA50 (408.16).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.9%.
  - RSI 64: zona neutral.
**MAR** (score 55, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (394.28) por encima de SMA50 (365.05).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.3%.
  - RSI 69: zona neutral.
**TMO** (score 46, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (685.57) por encima de SMA50 (659.52).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 0.8%.
  - RSI 47: zona neutral.
**VEEV** (score 38, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (310.97) por encima de SMA50 (288.71).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -3.9%.
  - RSI 50: zona neutral.
**CRL** (score 27, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (330.82) por encima de SMA50 (304.87).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -6.5%.
  - RSI 55: zona neutral.
**LITE** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (828.72) por debajo de SMA50 (902.93).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -29.4%.
  - RSI 29: sobreventa, posible rebote.
**ETN** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (387.11) por debajo de SMA50 (406.80).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.8%.
  - RSI 34: zona neutral.
**ORCL** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (130.63) por debajo de SMA50 (139.51).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.1%.
  - RSI 41: zona neutral.
**STX** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (661.05) por debajo de SMA50 (777.25).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -25.8%.
  - RSI 32: zona neutral.
**FLEX** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (90.15) por debajo de SMA50 (103.29).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.4%.
  - RSI 33: zona neutral.
**MU** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (897.11) por debajo de SMA50 (966.91).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -20.6%.
  - RSI 33: zona neutral.
**FICO** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (738.65) por debajo de SMA50 (836.59).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -15.1%.
  - RSI 36: zona neutral.
**IBKR** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (81.84) por debajo de SMA50 (86.82).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.8%.
  - RSI 34: zona neutral.
**BE** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (222.90) por debajo de SMA50 (247.00).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -22.0%.
  - RSI 37: zona neutral.
**CHRW** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (136.68) por debajo de SMA50 (144.07).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.4%.
  - RSI 37: zona neutral.
**AKAM** (score -73, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (92.94) por debajo de SMA50 (102.14).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.1%.
  - RSI 38: zona neutral.
**VRT** (score -73, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (217.39) por debajo de SMA50 (238.72).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.4%.
  - RSI 42: zona neutral.
**AXON** (score -74, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (413.14) por debajo de SMA50 (447.38).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.0%.
  - RSI 45: zona neutral.
**SMCI** (score -74, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (34.00) por debajo de SMA50 (37.64).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -18.8%.
  - RSI 40: zona neutral.
**WDC** (score -74, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (359.62) por debajo de SMA50 (410.89).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -21.7%.
  - RSI 40: zona neutral.

---
_Generado automáticamente el 2026-11-05T20:07:48.951Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

No se encontraron noticias verificables fechadas hoy (2026-11-05): las búsquedas web devolvieron solo artículos de otras fechas, por lo que no se puede atribuir el movimiento del día (valor total combinado -2.46% vs. cierre anterior: core -2.39%, satellite -2.61%) a ninguna noticia concreta. Tampoco se pudieron generar research notes (Yahoo Finance inalcanzable desde el entorno), así que no hay veredicto contra el cual contrastar. No se menciona ningún ticker por falta de noticias relevantes.

### Core (largo plazo)

Sin noticias relevantes encontradas para hoy.

### Satellite (técnico)

Sin noticias relevantes encontradas para hoy.

### Fuentes

- [Stock market today (resultado de búsqueda, sin cobertura del 2026-11-05)](https://www.nbcpalmsprings.com/2026/07/22/stock-market-today-dow-sp-500-and-nasdaq-close-lower-wednesday)

Chequeo de alertas: sin venta en el satellite hoy, sin sellTriggers (research notes vacías), caída total -2.46% (< 3%) → no se envió email.

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
