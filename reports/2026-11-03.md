# Reporte diario de inversión (simulado) — 2026-11-03

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$1021.39**
- P&L acumulado: $21.39 (+2.14%)
- Core (70%, largo plazo): $726.73 (+3.82%) | Satellite (30%, técnico): $294.66 (-1.78%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 20.87 — ELEVADO (Por encima del promedio histórico (~15-20).) Variación 10d: +4.2 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.92 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -1.97 pts — **ESTRÉS**.
- **Índice dólar (DXY)**: 101.87 (variación 10d: +0.09)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $267.14 | $72.03 | 9.9% | $2.03 (+2.90%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $161.98 | $71.67 | 9.9% | $1.67 (+2.39%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $95.03 | $71.74 | 9.9% | $1.74 (+2.48%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $178.15 | $70.33 | 9.7% | $0.33 (+0.47%) | $1.0300/acción (2026-08-17) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $225.77 | $70.31 | 9.7% | $0.31 (+0.44%) | $1.7800/acción (2026-08-19) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $337.72 | $70.41 | 9.7% | $0.41 (+0.59%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $522.69 | $68.68 | 9.5% | $-1.32 (-1.88%) | $0.9100/acción (2026-08-20) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $421.66 | $72.53 | 10.0% | $2.53 (+3.61%) | $0.6700/acción (2026-08-11) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $641.62 | $81.75 | 11.2% | $11.75 (+16.79%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $310.27 | $77.28 | 10.6% | $7.63 (+10.95%) | $1.5200/acción (2026-10-30) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| VEEV | Health Care | 0.226 | $315.43 | $304.46 | $68.89 | 23.4% | $-2.48 (-3.48%) |
| ISRG | Health Care | 0.221 | $438.48 | $442.47 | $97.92 | 33.2% | $0.88 (+0.91%) |
| TMO | Health Care | 0.114 | $690.08 | $699.66 | $80.08 | 27.2% | $1.10 (+1.39%) |
| CRL | Health Care | 0.062 | $339.66 | $353.32 | $21.95 | 7.4% | $0.85 (+4.02%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $415.33 | $11.06 | 3.8% | $0.49 (+4.67%) |

### Concentración y correlación (informativo)

- Posiciones: 5 · N efectivo por peso (1/HHI): **3.67**
- Correlación promedio entre posiciones (retornos diarios, últimas 60 ruedas): **0.18** → N efectivo ajustado por correlación: **2.49**
- Por sector: Health Care 96% · Consumer Discretionary 4%

_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| CRL | Health Care | 70 | BUY | $353.32 | Tendencia de corto plazo alcista: SMA20 (328.61) por encima de SMA50 (303.87). |
| CBOE | Financials | 67 | BUY | $344.23 | Tendencia de corto plazo alcista: SMA20 (316.25) por encima de SMA50 (296.23). |
| TXN | Information Technology | 65 | BUY | $310.27 | Tendencia de corto plazo alcista: SMA20 (289.43) por encima de SMA50 (276.18). |
| CRWD | Information Technology | 64 | BUY | $243.14 | Tendencia de corto plazo alcista: SMA20 (251.62) por encima de SMA50 (242.30). |
| RCL | Consumer Discretionary | 64 | BUY | $313.50 | Tendencia de corto plazo alcista: SMA20 (289.41) por encima de SMA50 (272.31). |
| RVTY | Health Care | 63 | BUY | $167.28 | Tendencia de corto plazo alcista: SMA20 (156.91) por encima de SMA50 (145.85). |
| SNPS | Information Technology | 63 | BUY | $461.97 | Tendencia de corto plazo alcista: SMA20 (470.63) por encima de SMA50 (440.19). |
| CCL | Consumer Discretionary | 62 | BUY | $29.23 | Tendencia de corto plazo alcista: SMA20 (27.19) por encima de SMA50 (25.01). |
| LLY | Health Care | 62 | HOLD | $1417.71 | Tendencia de corto plazo alcista: SMA20 (1272.41) por encima de SMA50 (1203.67). |
| KR | Consumer Staples | 61 | BUY | $67.08 | Tendencia de corto plazo alcista: SMA20 (64.28) por encima de SMA50 (61.01). |
| ADI | Information Technology | 59 | BUY | $418.60 | Tendencia de corto plazo alcista: SMA20 (408.18) por encima de SMA50 (390.17). |
| FDS | Financials | 59 | BUY | $333.51 | Tendencia de corto plazo alcista: SMA20 (309.69) por encima de SMA50 (293.84). |
| CCI | Real Estate | 58 | BUY | $86.28 | Tendencia de corto plazo alcista: SMA20 (81.97) por encima de SMA50 (75.92). |
| ALLE | Industrials | 57 | HOLD | $189.56 | Tendencia de corto plazo alcista: SMA20 (166.88) por encima de SMA50 (159.44). |
| DOW | Materials | 57 | BUY | $33.87 | Tendencia de corto plazo alcista: SMA20 (31.20) por encima de SMA50 (29.95). |
| MAR | Consumer Discretionary | 48 | BUY | $415.33 | Tendencia de corto plazo alcista: SMA20 (387.97) por encima de SMA50 (362.50). |
| ISRG | Health Care | 46 | BUY | $442.47 | Tendencia de corto plazo alcista: SMA20 (433.78) por encima de SMA50 (404.08). |
| TMO | Health Care | 41 | BUY | $699.66 | Tendencia de corto plazo alcista: SMA20 (681.94) por encima de SMA50 (657.00). |
| VEEV | Health Care | 33 | HOLD | $304.46 | Tendencia de corto plazo alcista: SMA20 (308.38) por encima de SMA50 (286.16). |
| WDC | Information Technology | -64 | SELL | $343.69 | Tendencia de corto plazo bajista: SMA20 (369.32) por debajo de SMA50 (417.18). |
| DASH | Consumer Discretionary | -65 | SELL | $181.55 | Tendencia de corto plazo bajista: SMA20 (185.30) por debajo de SMA50 (196.22). |
| BKNG | Consumer Discretionary | -66 | SELL | $152.05 | Tendencia de corto plazo bajista: SMA20 (156.97) por debajo de SMA50 (168.81). |
| LRCX | Information Technology | -66 | SELL | $228.89 | Tendencia de corto plazo bajista: SMA20 (267.34) por debajo de SMA50 (290.99). |
| FIX | Industrials | -67 | SELL | $1275.13 | Tendencia de corto plazo bajista: SMA20 (1425.28) por debajo de SMA50 (1545.85). |
| COHR | Information Technology | -68 | SELL | $206.02 | Tendencia de corto plazo bajista: SMA20 (247.16) por debajo de SMA50 (276.39). |
| HOOD | Financials | -68 | SELL | $85.18 | Tendencia de corto plazo bajista: SMA20 (98.10) por debajo de SMA50 (107.63). |
| T | Communication Services | -69 | SELL | $21.25 | Tendencia de corto plazo bajista: SMA20 (22.30) por debajo de SMA50 (24.00). |
| BA | Industrials | -70 | SELL | $173.80 | Tendencia de corto plazo bajista: SMA20 (183.66) por debajo de SMA50 (194.62). |
| SNDK | Information Technology | -70 | SELL | $1111.16 | Tendencia de corto plazo bajista: SMA20 (1359.84) por debajo de SMA50 (1539.85). |
| COIN | Financials | -71 | SELL | $145.43 | Tendencia de corto plazo bajista: SMA20 (167.11) por debajo de SMA50 (178.09). |
| NEM | Materials | -71 | SELL | $107.25 | Tendencia de corto plazo bajista: SMA20 (113.62) por debajo de SMA50 (119.66). |
| STX | Information Technology | -72 | SELL | $605.10 | Tendencia de corto plazo bajista: SMA20 (688.43) por debajo de SMA50 (789.89). |
| APP | Communication Services | -74 | SELL | $243.67 | Tendencia de corto plazo bajista: SMA20 (263.13) por debajo de SMA50 (291.56). |
| FICO | Information Technology | -79 | SELL | $722.16 | Tendencia de corto plazo bajista: SMA20 (738.00) por debajo de SMA50 (853.95). |

#### Detalle de razonamiento (señales destacadas)

**CRL** (score 70, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (328.61) por encima de SMA50 (303.87).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.0%.
  - RSI 67: zona neutral.
**CBOE** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (316.25) por encima de SMA50 (296.23).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.3%.
  - RSI 68: zona neutral.
**TXN** (score 65, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (289.43) por encima de SMA50 (276.18).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.2%.
  - RSI 72: sobrecompra, riesgo de corrección.
**CRWD** (score 64, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (251.62) por encima de SMA50 (242.30).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.9%.
  - RSI 47: zona neutral.
**RCL** (score 64, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (289.41) por encima de SMA50 (272.31).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.9%.
  - RSI 72: sobrecompra, riesgo de corrección.
**RVTY** (score 63, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (156.91) por encima de SMA50 (145.85).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.3%.
  - RSI 65: zona neutral.
**SNPS** (score 63, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (470.63) por encima de SMA50 (440.19).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.2%.
  - RSI 44: zona neutral.
**CCL** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (27.19) por encima de SMA50 (25.01).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.0%.
  - RSI 69: zona neutral.
**LLY** (score 62, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (1272.41) por encima de SMA50 (1203.67).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.4%.
  - RSI 80: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 80 >= 80): se espera una corrección antes de entrar.
**KR** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (64.28) por encima de SMA50 (61.01).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.5%.
  - RSI 64: zona neutral.
**ADI** (score 59, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (408.18) por encima de SMA50 (390.17).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.4%.
  - RSI 57: zona neutral.
**FDS** (score 59, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (309.69) por encima de SMA50 (293.84).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.8%.
  - RSI 69: zona neutral.
**CCI** (score 58, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (81.97) por encima de SMA50 (75.92).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.3%.
  - RSI 68: zona neutral.
**ALLE** (score 57, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (166.88) por encima de SMA50 (159.44).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 20.7%.
  - RSI 90: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 90 >= 80): se espera una corrección antes de entrar.
**DOW** (score 57, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (31.20) por encima de SMA50 (29.95).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.4%.
  - RSI 78: sobrecompra, riesgo de corrección.
**MAR** (score 48, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (387.97) por encima de SMA50 (362.50).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.5%.
  - RSI 77: sobrecompra, riesgo de corrección.
**ISRG** (score 46, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (433.78) por encima de SMA50 (404.08).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.0%.
  - RSI 62: zona neutral.
**TMO** (score 41, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (681.94) por encima de SMA50 (657.00).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.8%.
  - RSI 59: zona neutral.
**VEEV** (score 33, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (308.38) por encima de SMA50 (286.16).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -4.5%.
  - RSI 56: zona neutral.
**WDC** (score -64, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (369.32) por debajo de SMA50 (417.18).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -5.7%.
  - RSI 46: zona neutral.
**DASH** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (185.30) por debajo de SMA50 (196.22).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -5.3%.
  - RSI 48: zona neutral.
**BKNG** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (156.97) por debajo de SMA50 (168.81).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.2%.
  - RSI 40: zona neutral.
**LRCX** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (267.34) por debajo de SMA50 (290.99).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.1%.
  - RSI 27: sobreventa, posible rebote.
**FIX** (score -67, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (1425.28) por debajo de SMA50 (1545.85).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.7%.
  - RSI 34: zona neutral.
**COHR** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (247.16) por debajo de SMA50 (276.39).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.1%.
  - RSI 30: zona neutral.
**HOOD** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (98.10) por debajo de SMA50 (107.63).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.3%.
  - RSI 30: sobreventa, posible rebote.
**T** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (22.30) por debajo de SMA50 (24.00).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.2%.
  - RSI 36: zona neutral.
**BA** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (183.66) por debajo de SMA50 (194.62).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.8%.
  - RSI 39: zona neutral.
**SNDK** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (1359.84) por debajo de SMA50 (1539.85).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -18.6%.
  - RSI 33: zona neutral.
**COIN** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (167.11) por debajo de SMA50 (178.09).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.9%.
  - RSI 34: zona neutral.
**NEM** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (113.62) por debajo de SMA50 (119.66).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.2%.
  - RSI 44: zona neutral.
**STX** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (688.43) por debajo de SMA50 (789.89).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.4%.
  - RSI 36: zona neutral.
**APP** (score -74, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (263.13) por debajo de SMA50 (291.56).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.6%.
  - RSI 41: zona neutral.
**FICO** (score -79, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (738.00) por debajo de SMA50 (853.95).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.7%.
  - RSI 50: zona neutral.

---
_Generado automáticamente el 2026-11-03T20:08:27.861Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

Resumen: el 3-nov (día de elecciones de medio término en EEUU) el Nasdaq y el S&P 500 subieron en la tarde (S&P ~+0.3-0.4%, Nasdaq ~+0.6-0.9%) tras tres sesiones a la baja, impulsados por el rebote de los chips antes de los resultados de AMD; el Dow cayó (~-0.4%) arrastrado por Apple tras sus resultados. Los cierres oficiales no estaban confirmados en las fuentes consultadas (cifras intradía).

Nota: las research notes de hoy salieron vacías (Yahoo fundamentales inalcanzable), así que no hay veredicto sintetizado contra el cual contrastar las noticias.

### Core (largo plazo)
- **LMT**: ligeramente a la baja (~-0.3%, ~$641) pese a noticias favorables: Morgan Stanley subió a Overweight (objetivo $835), Wells Fargo subió objetivo a $700, backlog récord de $292 mil millones y guía 2026 elevada. Refuerza el caso alcista de largo plazo; el movimiento del día es ruido. Próximo dividendo $3.60 (ex-date 2026-12-01).

### Satellite (técnico)
- **VEEV**: cerró 2-nov en $307 (-1.9%), +14.5% en el último mes; hoy $304.46 (-3.5% vs costo). Catalizadores próximos: Investor Day el 5-nov y resultados el 2-dic — riesgo de evento a vigilar.
- **ISRG**: ingresos Q3 de $3.05 mil millones, por encima del consenso ($2.91 mil millones); RBC bajó objetivo a $550, Oppenheimer reiteró Outperform ($500). Hubo ventas de insiders menores. Fundamento operativo sólido pese a que la acción acumula ~-23% en el año.

### Fuentes
- [Stock Market Today (Nov. 3, 2026): Nasdaq edges higher as U.S. midterm voting begins](https://finance.yahoo.com/markets/stocks/articles/stock-market-today-nov-3-145801086.html)
- [Stock Market Today Live, November 3, 2026](https://www.stocktitan.net/articles/stock-market-today-live-november-3-2026)
- [Election Day Trading Splits the Benchmarks](https://www.marketscreener.com/news/election-day-trading-splits-the-benchmarks-with-the-dow-lower-and-the-nasdaq-higher-ce785fdeda88f726)
- [Lockheed Martin (LMT) - Yahoo Finance](https://finance.yahoo.com/quote/LMT/)
- [Lockheed Martin am Dienstagnachmittag mit Einbussen - finanzen.ch](https://finanzen.ch/nachrichten/aktien/lockheed_martin-aktie-kursbewegung-03-11-2026-1035061914)
- [Veeva Systems (VEEV) Stock Price & Overview](https://stockanalysis.com/stocks/veev/)
- [Intuitive Surgical (ISRG) Drives Better Outcomes and Lower Care Costs](https://finance.yahoo.com/healthcare/articles/intuitive-surgical-isrg-drives-better-142635109.html)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
