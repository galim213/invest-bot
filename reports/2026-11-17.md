# Reporte diario de inversión (simulado) — 2026-11-17

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$1000.55**
- P&L acumulado: $0.55 (+0.05%)
- Core (70%, largo plazo): $713.99 (+2.00%) | Satellite (30%, técnico): $286.56 (-4.48%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 26.35 — ELEVADO (Por encima del promedio histórico (~15-20).) Variación 10d: +9.7 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.96 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: 0.18 pts — normal.
- **Índice dólar (DXY)**: 103.48 (variación 10d: +1.97)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $279.02 | $75.23 | 10.5% | $5.23 (+7.47%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $171.98 | $76.10 | 10.7% | $6.10 (+8.71%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $99.08 | $74.80 | 10.5% | $4.80 (+6.86%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $166.67 | $65.80 | 9.2% | $-4.20 (-6.00%) | $1.0700/acción (2026-11-16) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $215.77 | $67.19 | 9.4% | $-2.81 (-4.01%) | $1.7800/acción (2026-08-19) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $329.89 | $68.78 | 9.6% | $-1.22 (-1.74%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $506.51 | $66.55 | 9.3% | $-3.45 (-4.92%) | $0.9100/acción (2026-08-20) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $418.71 | $72.02 | 10.1% | $2.02 (+2.89%) | $0.7800/acción (2026-11-10) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $586.87 | $74.78 | 10.5% | $4.78 (+6.82%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $292.00 | $72.73 | 10.2% | $3.08 (+4.42%) | $1.5200/acción (2026-10-30) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| VEEV | Health Care | 0.226 | $315.43 | $290.28 | $65.68 | 22.9% | $-5.69 (-7.97%) |
| ISRG | Health Care | 0.221 | $438.48 | $431.42 | $95.48 | 33.3% | $-1.56 (-1.61%) |
| TMO | Health Care | 0.114 | $690.08 | $687.52 | $78.69 | 27.5% | $-0.29 (-0.37%) |
| CRL | Health Care | 0.062 | $339.66 | $332.72 | $20.67 | 7.2% | $-0.43 (-2.04%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $424.00 | $11.29 | 3.9% | $0.72 (+6.85%) |

### Concentración y correlación (informativo)

- Posiciones: 5 · N efectivo por peso (1/HHI): **3.66**
- Correlación promedio entre posiciones (retornos diarios, últimas 60 ruedas): **0.18** → N efectivo ajustado por correlación: **2.49**
- Por sector: Health Care 96% · Consumer Discretionary 4%

_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| CDW | Information Technology | 77 | BUY | $163.57 | Tendencia de corto plazo alcista: SMA20 (162.98) por encima de SMA50 (151.36). |
| STE | Health Care | 67 | BUY | $257.62 | Tendencia de corto plazo alcista: SMA20 (242.96) por encima de SMA50 (224.80). |
| HCA | Health Care | 66 | BUY | $499.41 | Tendencia de corto plazo alcista: SMA20 (484.77) por encima de SMA50 (456.78). |
| BBY | Consumer Discretionary | 65 | BUY | $99.15 | Tendencia de corto plazo alcista: SMA20 (99.96) por encima de SMA50 (93.99). |
| JKHY | Financials | 65 | BUY | $176.22 | Tendencia de corto plazo alcista: SMA20 (168.31) por encima de SMA50 (158.26). |
| VTRS | Health Care | 64 | BUY | $20.51 | Tendencia de corto plazo alcista: SMA20 (19.49) por encima de SMA50 (18.26). |
| ABNB | Consumer Discretionary | 63 | BUY | $181.67 | Tendencia de corto plazo alcista: SMA20 (176.34) por encima de SMA50 (169.35). |
| EW | Health Care | 61 | HOLD | $106.07 | Tendencia de corto plazo alcista: SMA20 (97.93) por encima de SMA50 (91.16). |
| KMB | Consumer Staples | 61 | BUY | $108.11 | Tendencia de corto plazo alcista: SMA20 (109.11) por encima de SMA50 (102.94). |
| RMD | Health Care | 61 | BUY | $238.15 | Tendencia de corto plazo alcista: SMA20 (240.83) por encima de SMA50 (232.10). |
| LUV | Industrials | 61 | BUY | $45.94 | Tendencia de corto plazo alcista: SMA20 (44.19) por encima de SMA50 (42.16). |
| ZBH | Health Care | 61 | BUY | $102.32 | Tendencia de corto plazo alcista: SMA20 (101.29) por encima de SMA50 (95.92). |
| CAH | Health Care | 60 | HOLD | $280.53 | Tendencia de corto plazo alcista: SMA20 (263.39) por encima de SMA50 (245.55). |
| CNC | Health Care | 60 | BUY | $72.47 | Tendencia de corto plazo alcista: SMA20 (70.22) por encima de SMA50 (67.39). |
| CLX | Consumer Staples | 60 | HOLD | $108.19 | Tendencia de corto plazo alcista: SMA20 (96.44) por encima de SMA50 (88.60). |
| VEEV | Health Care | 53 | BUY | $290.28 | Tendencia de corto plazo alcista: SMA20 (309.19) por encima de SMA50 (292.42). |
| ISRG | Health Care | 46 | BUY | $431.42 | Tendencia de corto plazo alcista: SMA20 (447.03) por encima de SMA50 (420.64). |
| CRL | Health Care | 42 | BUY | $332.72 | Tendencia de corto plazo alcista: SMA20 (345.58) por encima de SMA50 (313.04). |
| MAR | Consumer Discretionary | 41 | BUY | $424.00 | Tendencia de corto plazo alcista: SMA20 (411.66) por encima de SMA50 (378.49). |
| TMO | Health Care | 35 | BUY | $687.52 | Tendencia de corto plazo alcista: SMA20 (696.38) por encima de SMA50 (673.82). |
| FLEX | Information Technology | -69 | SELL | $72.01 | Tendencia de corto plazo bajista: SMA20 (79.58) por debajo de SMA50 (97.72). |
| GLW | Information Technology | -70 | SELL | $107.24 | Tendencia de corto plazo bajista: SMA20 (119.42) por debajo de SMA50 (139.02). |
| VRT | Industrials | -70 | SELL | $186.48 | Tendencia de corto plazo bajista: SMA20 (207.26) por debajo de SMA50 (227.38). |
| VST | Utilities | -70 | SELL | $127.61 | Tendencia de corto plazo bajista: SMA20 (135.18) por debajo de SMA50 (142.32). |
| AMAT | Information Technology | -71 | SELL | $341.58 | Tendencia de corto plazo bajista: SMA20 (376.61) por debajo de SMA50 (433.20). |
| BE | Industrials | -71 | SELL | $169.31 | Tendencia de corto plazo bajista: SMA20 (200.31) por debajo de SMA50 (240.38). |
| FIX | Industrials | -71 | SELL | $1081.31 | Tendencia de corto plazo bajista: SMA20 (1179.09) por debajo de SMA50 (1445.36). |
| ETN | Industrials | -71 | SELL | $333.92 | Tendencia de corto plazo bajista: SMA20 (363.12) por debajo de SMA50 (397.00). |
| LRCX | Information Technology | -71 | SELL | $206.50 | Tendencia de corto plazo bajista: SMA20 (228.43) por debajo de SMA50 (273.39). |
| GEV | Industrials | -72 | SELL | $765.14 | Tendencia de corto plazo bajista: SMA20 (834.16) por debajo de SMA50 (905.12). |
| SKYD | Communication Services | -72 | SELL | $6.89 | Tendencia de corto plazo bajista: SMA20 (7.83) por debajo de SMA50 (8.83). |
| KLAC | Information Technology | -73 | SELL | $141.67 | Tendencia de corto plazo bajista: SMA20 (151.39) por debajo de SMA50 (170.97). |
| DASH | Consumer Discretionary | -74 | SELL | $165.24 | Tendencia de corto plazo bajista: SMA20 (178.22) por debajo de SMA50 (186.62). |
| EME | Industrials | -74 | SELL | $640.63 | Tendencia de corto plazo bajista: SMA20 (659.33) por debajo de SMA50 (718.23). |
| PWR | Industrials | -79 | SELL | $591.32 | Tendencia de corto plazo bajista: SMA20 (589.11) por debajo de SMA50 (626.06). |

#### Detalle de razonamiento (señales destacadas)

**CDW** (score 77, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (162.98) por encima de SMA50 (151.36).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.2%.
  - RSI 51: zona neutral.
**STE** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (242.96) por encima de SMA50 (224.80).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.4%.
  - RSI 71: sobrecompra, riesgo de corrección.
**HCA** (score 66, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (484.77) por encima de SMA50 (456.78).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.9%.
  - RSI 63: zona neutral.
**BBY** (score 65, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (99.96) por encima de SMA50 (93.99).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.6%.
  - RSI 53: zona neutral.
**JKHY** (score 65, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (168.31) por encima de SMA50 (158.26).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.0%.
  - RSI 70: sobrecompra, riesgo de corrección.
**VTRS** (score 64, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (19.49) por encima de SMA50 (18.26).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.4%.
  - RSI 69: zona neutral.
**ABNB** (score 63, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (176.34) por encima de SMA50 (169.35).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.8%.
  - RSI 61: zona neutral.
**EW** (score 61, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (97.93) por encima de SMA50 (91.16).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.4%.
  - RSI 81: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 81 >= 80): se espera una corrección antes de entrar.
**KMB** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (109.11) por encima de SMA50 (102.94).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.5%.
  - RSI 50: zona neutral.
**RMD** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (240.83) por encima de SMA50 (232.10).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.2%.
  - RSI 41: zona neutral.
**LUV** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (44.19) por encima de SMA50 (42.16).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.7%.
  - RSI 59: zona neutral.
**ZBH** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (101.29) por encima de SMA50 (95.92).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.4%.
  - RSI 58: zona neutral.
**CAH** (score 60, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (263.39) por encima de SMA50 (245.55).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.9%.
  - RSI 89: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 89 >= 80): se espera una corrección antes de entrar.
**CNC** (score 60, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (70.22) por encima de SMA50 (67.39).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.4%.
  - RSI 59: zona neutral.
**CLX** (score 60, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (96.44) por encima de SMA50 (88.60).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 15.3%.
  - RSI 90: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 90 >= 80): se espera una corrección antes de entrar.
**VEEV** (score 53, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (309.19) por encima de SMA50 (292.42).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -4.3%.
  - RSI 24: sobreventa, posible rebote.
**ISRG** (score 46, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (447.03) por encima de SMA50 (420.64).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -2.1%.
  - RSI 46: zona neutral.
**CRL** (score 42, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (345.58) por encima de SMA50 (313.04).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -5.4%.
  - RSI 36: zona neutral.
**MAR** (score 41, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (411.66) por encima de SMA50 (378.49).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.8%.
  - RSI 74: sobrecompra, riesgo de corrección.
**TMO** (score 35, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (696.38) por encima de SMA50 (673.82).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -1.6%.
  - RSI 45: zona neutral.
**FLEX** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (79.58) por debajo de SMA50 (97.72).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -18.3%.
  - RSI 32: zona neutral.
**GLW** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (119.42) por debajo de SMA50 (139.02).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.8%.
  - RSI 34: zona neutral.
**VRT** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (207.26) por debajo de SMA50 (227.38).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -21.0%.
  - RSI 33: zona neutral.
**VST** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (135.18) por debajo de SMA50 (142.32).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.6%.
  - RSI 40: zona neutral.
**AMAT** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (376.61) por debajo de SMA50 (433.20).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.6%.
  - RSI 35: zona neutral.
**BE** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (200.31) por debajo de SMA50 (240.38).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -20.9%.
  - RSI 35: zona neutral.
**FIX** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (1179.09) por debajo de SMA50 (1445.36).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -15.8%.
  - RSI 35: zona neutral.
**ETN** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (363.12) por debajo de SMA50 (397.00).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.5%.
  - RSI 35: zona neutral.
**LRCX** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (228.43) por debajo de SMA50 (273.39).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.5%.
  - RSI 35: zona neutral.
**GEV** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (834.16) por debajo de SMA50 (905.12).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -16.7%.
  - RSI 36: zona neutral.
**SKYD** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (7.83) por debajo de SMA50 (8.83).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.8%.
  - RSI 37: zona neutral.
**KLAC** (score -73, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (151.39) por debajo de SMA50 (170.97).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.2%.
  - RSI 42: zona neutral.
**DASH** (score -74, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (178.22) por debajo de SMA50 (186.62).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.9%.
  - RSI 47: zona neutral.
**EME** (score -74, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (659.33) por debajo de SMA50 (718.23).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.4%.
  - RSI 43: zona neutral.
**PWR** (score -79, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (589.11) por debajo de SMA50 (626.06).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.0%.
  - RSI 48: zona neutral.

---
_Generado automáticamente el 2026-11-17T20:07:15.189Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

La búsqueda web no devolvió cobertura fechada del 2026-11-17 (cierre de S&P 500/Nasdaq, ni noticias puntuales de los tickers del core o del satellite), así que no se puede atribuir el movimiento de hoy a una causa concreta. Último contexto fechado encontrado: la rueda del 2026-11-13 cerró a la baja en S&P 500 y Nasdaq tras datos de inflación más altos de lo esperado, y el 2026-11-12 los índices cayeron ~0.4%. Esto es coherente con el VIX elevado (26.35) del panel macro, pero no es una explicación confirmada de hoy.

### Core (largo plazo)
Sin noticia relevante fechada hoy para JNJ, PG, KO, XOM, CVX, JPM, MSFT, V, LMT ni TXN. Los resultados de búsqueda de MSFT, XOM y CVX eran de meses anteriores o de años previos, y no se usan para sacar conclusiones. research-notes-latest.md no generó veredictos hoy (Yahoo Finance inalcanzable desde el entorno), por lo que no hay caso alcista/bajista sintetizado con el cual contrastar.

### Satellite (técnico)
Sin noticia relevante fechada hoy para VEEV (la búsqueda solo devolvió páginas de 2025 y marzo 2026) ni para el resto de las señales destacadas.

### Fuentes
- [How major US stock indexes fared Thursday 11/12/2026](https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-thursday-11122026-nid12112026/)
- [Stocks end higher as S&P 500, Nasdaq rally](https://www.thesenior.com.au/story/9390211/stocks-end-higher-as-sp-500-nasdaq-rally/)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
