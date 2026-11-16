# Reporte diario de inversión (simulado) — 2026-11-16

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$1012.67**
- P&L acumulado: $12.67 (+1.27%)
- Core (70%, largo plazo): $721.41 (+3.06%) | Satellite (30%, técnico): $291.27 (-2.91%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 23.92 — ELEVADO (Por encima del promedio histórico (~15-20).) Variación 10d: +3.1 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +1.00 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -0.05 pts — normal.
- **Índice dólar (DXY)**: 103.55 (variación 10d: +1.68)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $283.15 | $76.35 | 10.6% | $6.35 (+9.07%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $172.74 | $76.43 | 10.6% | $6.43 (+9.19%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $99.30 | $74.96 | 10.4% | $4.96 (+7.09%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $167.04 | $65.95 | 9.1% | $-4.05 (-5.79%) | $1.0300/acción (2026-08-17) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $217.43 | $67.71 | 9.4% | $-2.29 (-3.27%) | $1.7800/acción (2026-08-19) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $338.24 | $70.52 | 9.8% | $0.52 (+0.75%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $518.51 | $68.13 | 9.4% | $-1.87 (-2.67%) | $0.9100/acción (2026-08-20) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $426.29 | $73.32 | 10.2% | $3.32 (+4.75%) | $0.7800/acción (2026-11-10) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $582.37 | $74.20 | 10.3% | $4.20 (+6.00%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $296.40 | $73.82 | 10.2% | $4.17 (+5.99%) | $1.5200/acción (2026-10-30) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| VEEV | Health Care | 0.226 | $315.43 | $300.22 | $67.93 | 23.3% | $-3.44 (-4.82%) |
| ISRG | Health Care | 0.221 | $438.48 | $438.93 | $97.14 | 33.4% | $0.10 (+0.10%) |
| TMO | Health Care | 0.114 | $690.08 | $692.52 | $79.26 | 27.2% | $0.28 (+0.35%) |
| CRL | Health Care | 0.062 | $339.66 | $335.60 | $20.85 | 7.2% | $-0.25 (-1.20%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $425.47 | $11.33 | 3.9% | $0.76 (+7.23%) |

### Concentración y correlación (informativo)

- Posiciones: 5 · N efectivo por peso (1/HHI): **3.66**
- Correlación promedio entre posiciones (retornos diarios, últimas 60 ruedas): **0.17** → N efectivo ajustado por correlación: **2.52**
- Por sector: Health Care 96% · Consumer Discretionary 4%

_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| CDW | Information Technology | 78 | BUY | $166.70 | Tendencia de corto plazo alcista: SMA20 (162.60) por encima de SMA50 (151.00). |
| BBY | Consumer Discretionary | 69 | BUY | $103.54 | Tendencia de corto plazo alcista: SMA20 (99.71) por encima de SMA50 (93.78). |
| CNC | Health Care | 68 | BUY | $74.49 | Tendencia de corto plazo alcista: SMA20 (70.12) por encima de SMA50 (67.23). |
| VTRS | Health Care | 67 | BUY | $20.71 | Tendencia de corto plazo alcista: SMA20 (19.39) por encima de SMA50 (18.18). |
| STE | Health Care | 64 | BUY | $262.19 | Tendencia de corto plazo alcista: SMA20 (241.35) por encima de SMA50 (224.02). |
| HCA | Health Care | 63 | BUY | $507.63 | Tendencia de corto plazo alcista: SMA20 (482.88) por encima de SMA50 (454.73). |
| ABNB | Consumer Discretionary | 62 | BUY | $186.45 | Tendencia de corto plazo alcista: SMA20 (176.12) por encima de SMA50 (169.21). |
| JKHY | Financials | 62 | BUY | $177.76 | Tendencia de corto plazo alcista: SMA20 (167.18) por encima de SMA50 (157.91). |
| TSN | Consumer Staples | 62 | BUY | $62.89 | Tendencia de corto plazo alcista: SMA20 (58.04) por encima de SMA50 (54.62). |
| DD | Industrials | 61 | BUY | $150.50 | Tendencia de corto plazo alcista: SMA20 (144.78) por encima de SMA50 (135.75). |
| GWW | Industrials | 61 | BUY | $1497.17 | Tendencia de corto plazo alcista: SMA20 (1409.49) por encima de SMA50 (1331.12). |
| CAH | Health Care | 60 | HOLD | $283.73 | Tendencia de corto plazo alcista: SMA20 (262.24) por encima de SMA50 (244.74). |
| CLX | Consumer Staples | 60 | HOLD | $110.43 | Tendencia de corto plazo alcista: SMA20 (95.35) por encima de SMA50 (88.24). |
| EW | Health Care | 60 | HOLD | $106.44 | Tendencia de corto plazo alcista: SMA20 (97.01) por encima de SMA50 (90.76). |
| FISV | Financials | 60 | HOLD | $63.47 | Tendencia de corto plazo alcista: SMA20 (55.84) por encima de SMA50 (50.61). |
| ISRG | Health Care | 53 | BUY | $438.93 | Tendencia de corto plazo alcista: SMA20 (447.42) por encima de SMA50 (419.04). |
| CRL | Health Care | 52 | BUY | $335.60 | Tendencia de corto plazo alcista: SMA20 (344.72) por encima de SMA50 (312.01). |
| VEEV | Health Care | 52 | BUY | $300.22 | Tendencia de corto plazo alcista: SMA20 (310.66) por encima de SMA50 (291.93). |
| TMO | Health Care | 43 | BUY | $692.52 | Tendencia de corto plazo alcista: SMA20 (696.43) por encima de SMA50 (672.15). |
| MAR | Consumer Discretionary | 40 | BUY | $425.47 | Tendencia de corto plazo alcista: SMA20 (410.32) por encima de SMA50 (376.58). |
| TER | Information Technology | -67 | SELL | $234.89 | Tendencia de corto plazo bajista: SMA20 (276.69) por debajo de SMA50 (340.16). |
| FCX | Materials | -68 | SELL | $55.58 | Tendencia de corto plazo bajista: SMA20 (62.93) por debajo de SMA50 (68.08). |
| SNDK | Information Technology | -68 | SELL | $816.61 | Tendencia de corto plazo bajista: SMA20 (1096.62) por debajo de SMA50 (1422.96). |
| TPL | Energy | -68 | SELL | $291.86 | Tendencia de corto plazo bajista: SMA20 (310.36) por debajo de SMA50 (335.71). |
| WDC | Information Technology | -68 | SELL | $283.29 | Tendencia de corto plazo bajista: SMA20 (332.96) por debajo de SMA50 (388.04). |
| STX | Information Technology | -69 | SELL | $503.90 | Tendencia de corto plazo bajista: SMA20 (591.06) por debajo de SMA50 (733.53). |
| BE | Industrials | -71 | SELL | $178.16 | Tendencia de corto plazo bajista: SMA20 (203.02) por debajo de SMA50 (242.56). |
| GEV | Industrials | -71 | SELL | $767.60 | Tendencia de corto plazo bajista: SMA20 (840.59) por debajo de SMA50 (909.31). |
| MU | Information Technology | -71 | SELL | $725.27 | Tendencia de corto plazo bajista: SMA20 (829.02) por debajo de SMA50 (937.87). |
| GLW | Information Technology | -72 | SELL | $106.60 | Tendencia de corto plazo bajista: SMA20 (120.68) por debajo de SMA50 (140.19). |
| FIX | Industrials | -73 | SELL | $1062.62 | Tendencia de corto plazo bajista: SMA20 (1195.07) por debajo de SMA50 (1456.77). |
| DASH | Consumer Discretionary | -73 | SELL | $169.37 | Tendencia de corto plazo bajista: SMA20 (179.52) por debajo de SMA50 (187.31). |
| SKYD | Communication Services | -74 | SELL | $7.03 | Tendencia de corto plazo bajista: SMA20 (7.84) por debajo de SMA50 (8.90). |
| FLEX | Information Technology | -76 | SELL | $74.57 | Tendencia de corto plazo bajista: SMA20 (80.34) por debajo de SMA50 (98.56). |
| VRT | Industrials | -77 | SELL | $188.36 | Tendencia de corto plazo bajista: SMA20 (208.10) por debajo de SMA50 (229.46). |

#### Detalle de razonamiento (señales destacadas)

**CDW** (score 78, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (162.60) por encima de SMA50 (151.00).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.7%.
  - RSI 54: zona neutral.
**BBY** (score 69, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (99.71) por encima de SMA50 (93.78).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.7%.
  - RSI 57: zona neutral.
**CNC** (score 68, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (70.12) por encima de SMA50 (67.23).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.0%.
  - RSI 60: zona neutral.
**VTRS** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (19.39) por encima de SMA50 (18.18).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.9%.
  - RSI 72: sobrecompra, riesgo de corrección.
**STE** (score 64, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (241.35) por encima de SMA50 (224.02).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.4%.
  - RSI 77: sobrecompra, riesgo de corrección.
**HCA** (score 63, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (482.88) por encima de SMA50 (454.73).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.5%.
  - RSI 71: sobrecompra, riesgo de corrección.
**ABNB** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (176.12) por encima de SMA50 (169.21).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.0%.
  - RSI 63: zona neutral.
**JKHY** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (167.18) por encima de SMA50 (157.91).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.8%.
  - RSI 74: sobrecompra, riesgo de corrección.
**TSN** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (58.04) por encima de SMA50 (54.62).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.2%.
  - RSI 80: sobrecompra, riesgo de corrección.
**DD** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (144.78) por encima de SMA50 (135.75).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.5%.
  - RSI 65: zona neutral.
**GWW** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (1409.49) por encima de SMA50 (1331.12).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.9%.
  - RSI 75: sobrecompra, riesgo de corrección.
**CAH** (score 60, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (262.24) por encima de SMA50 (244.74).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.6%.
  - RSI 92: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 92 >= 80): se espera una corrección antes de entrar.
**CLX** (score 60, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (95.35) por encima de SMA50 (88.24).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 22.8%.
  - RSI 97: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 97 >= 80): se espera una corrección antes de entrar.
**EW** (score 60, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (97.01) por encima de SMA50 (90.76).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 14.1%.
  - RSI 83: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 83 >= 80): se espera una corrección antes de entrar.
**FISV** (score 60, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (55.84) por encima de SMA50 (50.61).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 22.2%.
  - RSI 87: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 87 >= 80): se espera una corrección antes de entrar.
**ISRG** (score 53, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (447.42) por encima de SMA50 (419.04).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 0.5%.
  - RSI 48: zona neutral.
**CRL** (score 52, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (344.72) por encima de SMA50 (312.01).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -0.9%.
  - RSI 43: zona neutral.
**VEEV** (score 52, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (310.66) por encima de SMA50 (291.93).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -2.2%.
  - RSI 36: zona neutral.
**TMO** (score 43, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (696.43) por encima de SMA50 (672.15).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.4%.
  - RSI 50: zona neutral.
**MAR** (score 40, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (410.32) por encima de SMA50 (376.58).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.2%.
  - RSI 77: sobrecompra, riesgo de corrección.
**TER** (score -67, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (276.69) por debajo de SMA50 (340.16).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.0%.
  - RSI 29: sobreventa, posible rebote.
**FCX** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (62.93) por debajo de SMA50 (68.08).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.7%.
  - RSI 31: zona neutral.
**SNDK** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (1096.62) por debajo de SMA50 (1422.96).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -24.0%.
  - RSI 29: sobreventa, posible rebote.
**TPL** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (310.36) por debajo de SMA50 (335.71).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.5%.
  - RSI 31: zona neutral.
**WDC** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (332.96) por debajo de SMA50 (388.04).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -16.3%.
  - RSI 30: zona neutral.
**STX** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (591.06) por debajo de SMA50 (733.53).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -15.1%.
  - RSI 32: zona neutral.
**BE** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (203.02) por debajo de SMA50 (242.56).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.2%.
  - RSI 40: zona neutral.
**GEV** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (840.59) por debajo de SMA50 (909.31).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.0%.
  - RSI 35: zona neutral.
**MU** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (829.02) por debajo de SMA50 (937.87).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.0%.
  - RSI 35: zona neutral.
**GLW** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (120.68) por debajo de SMA50 (140.19).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.3%.
  - RSI 37: zona neutral.
**FIX** (score -73, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (1195.07) por debajo de SMA50 (1456.77).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.4%.
  - RSI 38: zona neutral.
**DASH** (score -73, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (179.52) por debajo de SMA50 (187.31).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.9%.
  - RSI 49: zona neutral.
**SKYD** (score -74, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (7.84) por debajo de SMA50 (8.90).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.9%.
  - RSI 39: zona neutral.
**FLEX** (score -76, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (80.34) por debajo de SMA50 (98.56).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.4%.
  - RSI 43: zona neutral.
**VRT** (score -77, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (208.10) por debajo de SMA50 (229.46).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -16.0%.
  - RSI 45: zona neutral.

---
_Generado automáticamente el 2026-11-16T20:07:21.647Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

No se pudo obtener un reporte de cierre confiable para el 2026-11-16: la búsqueda web no devolvió noticias de hoy sobre S&P 500/Nasdaq ni sobre los tickers del core o del satellite (solo resultados del 10-nov-2026 y de años anteriores, con cifras contradictorias entre fuentes). Por eso no se atribuye el movimiento del día a ninguna causa. Además, las research notes quedaron vacías porque Yahoo Finance fue inalcanzable desde este entorno (ENOTFOUND), así que no hay veredicto sintetizado contra el cual contrastar noticias.

### Core (largo plazo)
Sin noticia relevante verificada hoy.

### Satellite (técnico)
Sin noticia relevante verificada hoy. Sin trades hoy.

Chequeo de alertas: sin ventas hoy, sin sellTriggers (notas vacías) y caída combinada de ~-0.99% (de $1022.79 a $1012.67), menor al umbral de 3%. No se envió email.

Fuentes consultadas (no concluyentes):
- [Zacks: stock market news for Nov 10 2026](https://www.zacks.com/stock/news/3026944/stock-market-news-for-nov-10-2026)
- [Tapeboard: market pulse 2026-11-10](https://tapeboard.com/blog/market-pulse-2026-11-10)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
