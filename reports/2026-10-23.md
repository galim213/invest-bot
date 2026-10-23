# Reporte diario de inversión (simulado) — 2026-10-23

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$1010.42**
- P&L acumulado: $10.42 (+1.04%)
- Core (70%, largo plazo): $713.53 (+1.93%) | Satellite (30%, técnico): $296.90 (-1.03%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 19.82 — CALMA (Dentro del rango histórico normal.) Variación 10d: +4.6 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.96 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -1.65 pts — **ESTRÉS**.
- **Índice dólar (DXY)**: 101.81 (variación 10d: -0.78)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $263.85 | $71.14 | 10.0% | $1.14 (+1.63%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $161.12 | $71.29 | 10.0% | $1.29 (+1.85%) | $1.0890/acción (2026-07-24) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $92.70 | $69.98 | 9.8% | $-0.02 (-0.03%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $183.20 | $72.33 | 10.1% | $2.33 (+3.32%) | $1.0300/acción (2026-08-17) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $233.24 | $72.63 | 10.2% | $2.63 (+3.76%) | $1.7800/acción (2026-08-19) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $331.54 | $69.13 | 9.7% | $-0.87 (-1.25%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $524.51 | $68.92 | 9.7% | $-1.08 (-1.54%) | $0.9100/acción (2026-08-20) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $408.02 | $70.18 | 9.8% | $0.18 (+0.26%) | $0.6700/acción (2026-08-11) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $604.47 | $77.02 | 10.8% | $7.02 (+10.03%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $284.69 | $70.91 | 9.9% | $1.26 (+1.80%) | $1.4200/acción (2026-07-31) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| VEEV | Health Care | 0.226 | $315.43 | $322.91 | $73.07 | 24.6% | $1.69 (+2.37%) |
| ISRG | Health Care | 0.221 | $438.48 | $452.29 | $100.10 | 33.7% | $3.06 (+3.15%) |
| TMO | Health Care | 0.114 | $690.08 | $673.88 | $77.13 | 26.0% | $-1.85 (-2.35%) |
| CRL | Health Care | 0.062 | $339.66 | $345.24 | $21.45 | 7.2% | $0.35 (+1.64%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $390.71 | $10.41 | 3.5% | $-0.16 (-1.53%) |

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| SWKS | Information Technology | 69 | BUY | $83.43 | Tendencia de corto plazo alcista: SMA20 (81.65) por encima de SMA50 (78.64). |
| CRL | Health Care | 63 | BUY | $345.24 | Tendencia de corto plazo alcista: SMA20 (306.65) por encima de SMA50 (293.94). |
| ACN | Information Technology | 60 | HOLD | $249.43 | Tendencia de corto plazo alcista: SMA20 (212.70) por encima de SMA50 (194.60). |
| RVTY | Health Care | 57 | BUY | $158.70 | Tendencia de corto plazo alcista: SMA20 (153.88) por encima de SMA50 (140.08). |
| VEEV | Health Care | 57 | HOLD | $322.91 | Tendencia de corto plazo alcista: SMA20 (297.47) por encima de SMA50 (276.93). |
| MTD | Health Care | 55 | BUY | $1668.62 | Tendencia de corto plazo alcista: SMA20 (1578.56) por encima de SMA50 (1466.17). |
| ISRG | Health Care | 54 | BUY | $452.29 | Tendencia de corto plazo alcista: SMA20 (420.59) por encima de SMA50 (396.06). |
| ULTA | Consumer Discretionary | 54 | BUY | $624.46 | Tendencia de corto plazo alcista: SMA20 (574.84) por encima de SMA50 (552.91). |
| WST | Health Care | 54 | BUY | $392.07 | Tendencia de corto plazo alcista: SMA20 (376.58) por encima de SMA50 (362.07). |
| MAR | Consumer Discretionary | 53 | BUY | $390.71 | Tendencia de corto plazo alcista: SMA20 (372.81) por encima de SMA50 (356.32). |
| A | Health Care | 52 | BUY | $173.05 | Tendencia de corto plazo alcista: SMA20 (171.85) por encima de SMA50 (161.24). |
| BIIB | Health Care | 52 | BUY | $250.69 | Tendencia de corto plazo alcista: SMA20 (230.92) por encima de SMA50 (223.38). |
| IT | Information Technology | 52 | BUY | $230.27 | Tendencia de corto plazo alcista: SMA20 (199.59) por encima de SMA50 (192.36). |
| TMO | Health Care | 52 | BUY | $673.88 | Tendencia de corto plazo alcista: SMA20 (672.11) por encima de SMA50 (644.76). |
| EBAY | Consumer Discretionary | 50 | HOLD | $121.41 | Tendencia de corto plazo alcista: SMA20 (113.80) por encima de SMA50 (109.09). |
| TTWO | Communication Services | -60 | SELL | $203.69 | Tendencia de corto plazo bajista: SMA20 (205.31) por debajo de SMA50 (214.98). |
| VRT | Industrials | -60 | SELL | $194.30 | Tendencia de corto plazo bajista: SMA20 (230.20) por debajo de SMA50 (247.67). |
| APO | Financials | -61 | SELL | $112.79 | Tendencia de corto plazo bajista: SMA20 (114.81) por debajo de SMA50 (124.14). |
| CBRE | Real Estate | -62 | SELL | $123.36 | Tendencia de corto plazo bajista: SMA20 (130.57) por debajo de SMA50 (139.00). |
| PCG | Utilities | -65 | SELL | $12.63 | Tendencia de corto plazo bajista: SMA20 (12.75) por debajo de SMA50 (14.08). |
| WDC | Information Technology | -65 | SELL | $343.67 | Tendencia de corto plazo bajista: SMA20 (395.04) por debajo de SMA50 (432.95). |
| NFLX | Communication Services | -66 | SELL | $65.85 | Tendencia de corto plazo bajista: SMA20 (69.15) por debajo de SMA50 (74.27). |
| NEM | Materials | -66 | SELL | $108.86 | Tendencia de corto plazo bajista: SMA20 (115.58) por debajo de SMA50 (121.59). |
| CMG | Consumer Discretionary | -67 | SELL | $27.51 | Tendencia de corto plazo bajista: SMA20 (30.61) por debajo de SMA50 (33.52). |
| CVNA | Consumer Discretionary | -68 | SELL | $57.79 | Tendencia de corto plazo bajista: SMA20 (61.14) por debajo de SMA50 (66.61). |
| SKYD | Communication Services | -69 | SELL | $7.76 | Tendencia de corto plazo bajista: SMA20 (8.65) por debajo de SMA50 (9.76). |
| AKAM | Information Technology | -70 | SELL | $93.53 | Tendencia de corto plazo bajista: SMA20 (99.70) por debajo de SMA50 (105.93). |
| DASH | Consumer Discretionary | -70 | SELL | $179.38 | Tendencia de corto plazo bajista: SMA20 (188.69) por debajo de SMA50 (202.29). |
| ORCL | Information Technology | -72 | SELL | $126.08 | Tendencia de corto plazo bajista: SMA20 (135.33) por debajo de SMA50 (142.47). |
| NRG | Utilities | -77 | SELL | $92.32 | Tendencia de corto plazo bajista: SMA20 (100.50) por debajo de SMA50 (106.97). |

#### Detalle de razonamiento (señales destacadas)

**SWKS** (score 69, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (81.65) por encima de SMA50 (78.64).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.3%.
  - RSI 49: zona neutral.
**CRL** (score 63, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (306.65) por encima de SMA50 (293.94).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 14.4%.
  - RSI 69: zona neutral.
**ACN** (score 60, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (212.70) por encima de SMA50 (194.60).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 20.3%.
  - RSI 86: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 86 >= 80): se espera una corrección antes de entrar.
**RVTY** (score 57, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (153.88) por encima de SMA50 (140.08).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.9%.
  - RSI 52: zona neutral.
**VEEV** (score 57, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (297.47) por encima de SMA50 (276.93).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.0%.
  - RSI 85: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 85 >= 80): se espera una corrección antes de entrar.
**MTD** (score 55, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (1578.56) por encima de SMA50 (1466.17).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.7%.
  - RSI 79: sobrecompra, riesgo de corrección.
**ISRG** (score 54, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (420.59) por encima de SMA50 (396.06).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.7%.
  - RSI 77: sobrecompra, riesgo de corrección.
**ULTA** (score 54, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (574.84) por encima de SMA50 (552.91).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.5%.
  - RSI 78: sobrecompra, riesgo de corrección.
**WST** (score 54, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (376.58) por encima de SMA50 (362.07).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.1%.
  - RSI 66: zona neutral.
**MAR** (score 53, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (372.81) por encima de SMA50 (356.32).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.8%.
  - RSI 75: sobrecompra, riesgo de corrección.
**A** (score 52, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (171.85) por encima de SMA50 (161.24).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.5%.
  - RSI 54: zona neutral.
**BIIB** (score 52, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (230.92) por encima de SMA50 (223.38).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.1%.
  - RSI 75: sobrecompra, riesgo de corrección.
**IT** (score 52, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (199.59) por encima de SMA50 (192.36).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 20.5%.
  - RSI 80: sobrecompra, riesgo de corrección.
**TMO** (score 52, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (672.11) por encima de SMA50 (644.76).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.4%.
  - RSI 49: zona neutral.
**EBAY** (score 50, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (113.80) por encima de SMA50 (109.09).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.2%.
  - RSI 81: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 81 >= 80): se espera una corrección antes de entrar.
**TTWO** (score -60, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (205.31) por debajo de SMA50 (214.98).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -4.6%.
  - RSI 50: zona neutral.
**VRT** (score -60, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (230.20) por debajo de SMA50 (247.67).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -20.0%.
  - RSI 11: sobreventa, posible rebote.
**APO** (score -61, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (114.81) por debajo de SMA50 (124.14).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -4.9%.
  - RSI 44: zona neutral.
**CBRE** (score -62, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (130.57) por debajo de SMA50 (139.00).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -5.7%.
  - RSI 42: zona neutral.
**PCG** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (12.75) por debajo de SMA50 (14.08).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -3.8%.
  - RSI 56: zona neutral.
**WDC** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (395.04) por debajo de SMA50 (432.95).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.5%.
  - RSI 25: sobreventa, posible rebote.
**NFLX** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (69.15) por debajo de SMA50 (74.27).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -6.3%.
  - RSI 46: zona neutral.
**NEM** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (115.58) por debajo de SMA50 (121.59).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.6%.
  - RSI 39: zona neutral.
**CMG** (score -67, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (30.61) por debajo de SMA50 (33.52).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.9%.
  - RSI 28: sobreventa, posible rebote.
**CVNA** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (61.14) por debajo de SMA50 (66.61).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.3%.
  - RSI 34: zona neutral.
**SKYD** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (8.65) por debajo de SMA50 (9.76).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -15.2%.
  - RSI 32: zona neutral.
**AKAM** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (99.70) por debajo de SMA50 (105.93).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.5%.
  - RSI 33: zona neutral.
**DASH** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (188.69) por debajo de SMA50 (202.29).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.7%.
  - RSI 39: zona neutral.
**ORCL** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (135.33) por debajo de SMA50 (142.47).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.8%.
  - RSI 37: zona neutral.
**NRG** (score -77, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (100.50) por debajo de SMA50 (106.97).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.5%.
  - RSI 45: zona neutral.

---
_Generado automáticamente el 2026-10-23T20:07:42.737Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

No pude encontrar un reporte de cierre publicado para el 23/10 al momento de la búsqueda. El último cierre verificado (jueves 22/10) fue de fuerte caída tecnológica: S&P 500 -1,21% (7.663) y Nasdaq -2,60% (26.009), por renovadas dudas sobre el gasto en IA tras una tanda de resultados; el Dow quedó casi plano (+0,02%). Los futuros del 23/10 apuntaban levemente a la baja. Nota técnica: research-notes de hoy salió vacío (Yahoo inalcanzable desde el entorno), así que no hay veredicto sintetizado contra el cual contrastar.

### Core (largo plazo)

- **LMT**: reportó Q3 el 22/10 con ingresos de $20.7B (+11.3%), EPS $7.97 vs $7.52 esperado, guía anual elevada y backlog récord de $292B (F-35, defensa antimisiles). Explica el +10% de P&L no realizado de la posición en el core; UBS y RBC subieron price targets. Refuerza el caso alcista (los precios citados por las fuentes difieren, verificar cotización en vivo).

### Satellite (técnico)

- **ISRG**: Q3 (20/10) superó en ingresos ($3.05B, +22%) y EPS ajustado ($3.00 vs $2.65), pero hubo un cargo de $450M por el acuerdo antimonopolio y guía de menor ingreso por procedimiento (-3% a -5% en 2027) por cambios de precios; cayó ~8% pre-apertura ese día y luego recuperó. Mixto frente a la señal técnica BUY (score 54): la tendencia sigue alcista pero el recorte de precios es un riesgo fundamental a vigilar.

Sin noticias relevantes encontradas para el resto de los tickers.

### Fuentes

- [Stock market today: S&P 500, Nasdaq tanks as tech stocks sink amid AI trade worries](https://finance.yahoo.com/markets/live/stock-market-today-thursday-october-22-dow-sp-500-nasdaq-tesla-meta-112217857.html)
- [S&P 500, Nasdaq end sharply lower as revived AI doubts ignite tech selloff](https://finance.yahoo.com/markets/stocks/articles/nasdaq-futures-drop-over-1-093849296.html)
- [Lockheed Martin (LMT) Reports Strong Q3 2026 Results, Boosts Full-Year Outlook](https://www.gurufocus.com/news/9137508/lockheed-martin-lmt-reports-strong-q3-2026-results-boosts-fullyear-outlook)
- [Lockheed Martin Stock Buzzing on Beat-and-Raise, Record Backlog](https://www.schaeffersresearch.com/content/news/2026/10/22/lockheed-martin-stock-buzzing-on-beat-and-raise-record-backlog)
- [Intuitive Surgical Stock: Margin Hit Masks Strong Q3 Growth Story](https://www.marketbeat.com/articles/intuitive-surgical-stock-margin-hit-masks-strong-q3-growth-story/)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
