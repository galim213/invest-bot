> 🚨 **ALERTA 2026-10-22:** venta de MRNA por stop-loss (-16%, vendida a $202.63) en el satellite. El email de alerta NO se pudo enviar (el conector de Gmail no tiene el permiso necesario). Además research-notes quedó vacío (Yahoo Finance inalcanzable), no se pudo chequear sellTriggers.

# Reporte diario de inversión (simulado) — 2026-10-22

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$1008.16**
- P&L acumulado: $8.16 (+0.82%)
- Core (70%, largo plazo): $713.06 (+1.87%) | Satellite (30%, técnico): $295.10 (-1.63%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 19.37 — CALMA (Dentro del rango histórico normal.) Variación 10d: +4.5 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.93 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -2.14 pts — **ESTRÉS**.
- **Índice dólar (DXY)**: 101.63 (variación 10d: -0.58)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $267.68 | $72.17 | 10.1% | $2.17 (+3.11%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $165.60 | $73.28 | 10.3% | $3.28 (+4.68%) | $1.0890/acción (2026-07-24) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $95.34 | $71.97 | 10.1% | $1.97 (+2.82%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $178.19 | $70.35 | 9.9% | $0.35 (+0.50%) | $1.0300/acción (2026-08-17) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $226.65 | $70.58 | 9.9% | $0.58 (+0.83%) | $1.7800/acción (2026-08-19) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $336.51 | $70.16 | 9.8% | $0.16 (+0.23%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $521.08 | $68.47 | 9.6% | $-1.53 (-2.19%) | $0.9100/acción (2026-08-20) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $414.26 | $71.26 | 10.0% | $1.26 (+1.79%) | $0.6700/acción (2026-08-11) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $590.20 | $75.20 | 10.5% | $5.20 (+7.43%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $279.50 | $69.61 | 9.8% | $-0.04 (-0.05%) | $1.4200/acción (2026-07-31) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| VEEV | Health Care | 0.226 | $315.43 | $322.69 | $73.02 | 24.7% | $1.64 (+2.30%) |
| ISRG | Health Care | 0.221 | $438.48 | $443.85 | $98.23 | 33.3% | $1.19 (+1.22%) |
| TMO | Health Care | 0.114 | $690.08 | $676.55 | $77.44 | 26.2% | $-1.55 (-1.96%) |
| CRL | Health Care | 0.062 | $339.66 | $339.66 | $21.10 | 7.2% | $0.00 (0.00%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $396.80 | $10.57 | 3.6% | $0.00 (0.00%) |

### Movimientos ejecutados hoy

- **VENTA MRNA** — 0.155 shares a $202.63 ($31.48). _Stop-loss: precio -16.0% desde el precio de entrada (umbral -12%)._
- **COMPRA CRL** — 0.062 shares a $339.66 ($21.10). _Señal técnica de compra (score 57): Tendencia de corto plazo alcista: SMA20 (304.03) por encima de SMA50 (292.66). Precio por encima de la media de 200 días: contexto de fondo alcista. Momentum 10d: 14.0%. RSI 74: sobrecompra, riesgo de corrección._
- **COMPRA MAR** — 0.027 shares a $396.80 ($10.57). _Señal técnica de compra (score 57): Tendencia de corto plazo alcista: SMA20 (370.87) por encima de SMA50 (355.54). Precio por encima de la media de 200 días: contexto de fondo alcista. Momentum 10d: 9.9%. RSI 78: sobrecompra, riesgo de corrección._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| ACN | Information Technology | 60 | HOLD | $258.74 | Tendencia de corto plazo alcista: SMA20 (208.96) por encima de SMA50 (193.15). |
| MTD | Health Care | 60 | HOLD | $1685.52 | Tendencia de corto plazo alcista: SMA20 (1570.75) por encima de SMA50 (1461.43). |
| VEEV | Health Care | 60 | HOLD | $322.69 | Tendencia de corto plazo alcista: SMA20 (295.36) por encima de SMA50 (275.52). |
| CRL | Health Care | 57 | BUY | $339.66 | Tendencia de corto plazo alcista: SMA20 (304.03) por encima de SMA50 (292.66). |
| MAR | Consumer Discretionary | 57 | BUY | $396.80 | Tendencia de corto plazo alcista: SMA20 (370.87) por encima de SMA50 (355.54). |
| MRNA | Health Care | 57 | BUY | $202.63 | Tendencia de corto plazo alcista: SMA20 (210.43) por encima de SMA50 (168.42). |
| SWKS | Information Technology | 57 | BUY | $82.39 | Tendencia de corto plazo alcista: SMA20 (81.95) por encima de SMA50 (78.36). |
| ILMN | Health Care | 56 | BUY | $269.40 | Tendencia de corto plazo alcista: SMA20 (271.85) por encima de SMA50 (240.27). |
| RVTY | Health Care | 55 | BUY | $157.33 | Tendencia de corto plazo alcista: SMA20 (153.50) por encima de SMA50 (139.26). |
| A | Health Care | 54 | BUY | $173.98 | Tendencia de corto plazo alcista: SMA20 (171.83) por encima de SMA50 (160.76). |
| ISRG | Health Care | 54 | BUY | $443.85 | Tendencia de corto plazo alcista: SMA20 (418.24) por encima de SMA50 (395.04). |
| VTRS | Health Care | 54 | BUY | $18.48 | Tendencia de corto plazo alcista: SMA20 (17.88) por encima de SMA50 (17.14). |
| TMO | Health Care | 53 | BUY | $676.55 | Tendencia de corto plazo alcista: SMA20 (672.16) por encima de SMA50 (643.20). |
| HUM | Health Care | 52 | BUY | $420.77 | Tendencia de corto plazo alcista: SMA20 (408.15) por encima de SMA50 (397.04). |
| WST | Health Care | 52 | BUY | $394.30 | Tendencia de corto plazo alcista: SMA20 (375.51) por encima de SMA50 (361.15). |
| FSLR | Information Technology | -60 | SELL | $171.25 | Tendencia de corto plazo bajista: SMA20 (176.57) por debajo de SMA50 (194.32). |
| HWM | Industrials | -60 | SELL | $193.21 | Tendencia de corto plazo bajista: SMA20 (221.91) por debajo de SMA50 (239.80). |
| MOS | Materials | -60 | SELL | $17.26 | Tendencia de corto plazo bajista: SMA20 (19.91) por debajo de SMA50 (22.43). |
| VRT | Industrials | -60 | SELL | $195.60 | Tendencia de corto plazo bajista: SMA20 (233.15) por debajo de SMA50 (249.53). |
| CVNA | Consumer Discretionary | -63 | SELL | $58.69 | Tendencia de corto plazo bajista: SMA20 (61.50) por debajo de SMA50 (66.93). |
| ORCL | Information Technology | -63 | SELL | $125.51 | Tendencia de corto plazo bajista: SMA20 (135.86) por debajo de SMA50 (143.06). |
| CMG | Consumer Discretionary | -65 | SELL | $28.13 | Tendencia de corto plazo bajista: SMA20 (30.80) por debajo de SMA50 (33.62). |
| STX | Information Technology | -65 | SELL | $642.14 | Tendencia de corto plazo bajista: SMA20 (787.28) por debajo de SMA50 (828.50). |
| AKAM | Information Technology | -66 | SELL | $91.13 | Tendencia de corto plazo bajista: SMA20 (100.72) por debajo de SMA50 (106.56). |
| APP | Communication Services | -66 | SELL | $264.28 | Tendencia de corto plazo bajista: SMA20 (279.42) por debajo de SMA50 (300.99). |
| NFLX | Communication Services | -69 | SELL | $67.05 | Tendencia de corto plazo bajista: SMA20 (69.42) por debajo de SMA50 (74.52). |
| TMUS | Communication Services | -69 | SELL | $158.79 | Tendencia de corto plazo bajista: SMA20 (160.37) por debajo de SMA50 (170.90). |
| SKYD | Communication Services | -71 | SELL | $7.78 | Tendencia de corto plazo bajista: SMA20 (8.76) por debajo de SMA50 (9.80). |
| WDC | Information Technology | -71 | SELL | $354.19 | Tendencia de corto plazo bajista: SMA20 (400.70) por debajo de SMA50 (435.82). |
| NRG | Utilities | -79 | SELL | $94.32 | Tendencia de corto plazo bajista: SMA20 (100.90) por debajo de SMA50 (107.52). |

#### Detalle de razonamiento (señales destacadas)

**ACN** (score 60, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (208.96) por encima de SMA50 (193.15).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 25.2%.
  - RSI 92: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 92 >= 80): se espera una corrección antes de entrar.
**MTD** (score 60, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (1570.75) por encima de SMA50 (1461.43).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.2%.
  - RSI 89: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 89 >= 80): se espera una corrección antes de entrar.
**VEEV** (score 60, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (295.36) por encima de SMA50 (275.52).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 13.3%.
  - RSI 87: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 87 >= 80): se espera una corrección antes de entrar.
**CRL** (score 57, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (304.03) por encima de SMA50 (292.66).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 14.0%.
  - RSI 74: sobrecompra, riesgo de corrección.
**MAR** (score 57, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (370.87) por encima de SMA50 (355.54).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.9%.
  - RSI 78: sobrecompra, riesgo de corrección.
**MRNA** (score 57, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (210.43) por encima de SMA50 (168.42).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.9%.
  - RSI 53: zona neutral.
**SWKS** (score 57, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (81.95) por encima de SMA50 (78.36).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.0%.
  - RSI 43: zona neutral.
**ILMN** (score 56, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (271.85) por encima de SMA50 (240.27).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.8%.
  - RSI 48: zona neutral.
**RVTY** (score 55, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (153.50) por encima de SMA50 (139.26).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.4%.
  - RSI 59: zona neutral.
**A** (score 54, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (171.83) por encima de SMA50 (160.76).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.5%.
  - RSI 60: zona neutral.
**ISRG** (score 54, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (418.24) por encima de SMA50 (395.04).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.8%.
  - RSI 78: sobrecompra, riesgo de corrección.
**VTRS** (score 54, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (17.88) por encima de SMA50 (17.14).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.0%.
  - RSI 64: zona neutral.
**TMO** (score 53, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (672.16) por encima de SMA50 (643.20).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.8%.
  - RSI 57: zona neutral.
**HUM** (score 52, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (408.15) por encima de SMA50 (397.04).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.7%.
  - RSI 61: zona neutral.
**WST** (score 52, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (375.51) por encima de SMA50 (361.15).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.5%.
  - RSI 76: sobrecompra, riesgo de corrección.
**FSLR** (score -60, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (176.57) por debajo de SMA50 (194.32).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -4.2%.
  - RSI 46: zona neutral.
**HWM** (score -60, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (221.91) por debajo de SMA50 (239.80).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.2%.
  - RSI 16: sobreventa, posible rebote.
**MOS** (score -60, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (19.91) por debajo de SMA50 (22.43).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.5%.
  - RSI 13: sobreventa, posible rebote.
**VRT** (score -60, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (233.15) por debajo de SMA50 (249.53).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -19.7%.
  - RSI 13: sobreventa, posible rebote.
**CVNA** (score -63, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (61.50) por debajo de SMA50 (66.93).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.1%.
  - RSI 36: zona neutral.
**ORCL** (score -63, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (135.86) por debajo de SMA50 (143.06).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.2%.
  - RSI 36: zona neutral.
**CMG** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (30.80) por debajo de SMA50 (33.62).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.9%.
  - RSI 25: sobreventa, posible rebote.
**STX** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (787.28) por debajo de SMA50 (828.50).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -17.1%.
  - RSI 25: sobreventa, posible rebote.
**AKAM** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (100.72) por debajo de SMA50 (106.56).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.7%.
  - RSI 28: sobreventa, posible rebote.
**APP** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (279.42) por debajo de SMA50 (300.99).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -5.7%.
  - RSI 48: zona neutral.
**NFLX** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (69.42) por debajo de SMA50 (74.52).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -6.3%.
  - RSI 50: zona neutral.
**TMUS** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (160.37) por debajo de SMA50 (170.90).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.3%.
  - RSI 46: zona neutral.
**SKYD** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (8.76) por debajo de SMA50 (9.80).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -16.2%.
  - RSI 35: zona neutral.
**WDC** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (400.70) por debajo de SMA50 (435.82).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.9%.
  - RSI 36: zona neutral.
**NRG** (score -79, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (100.90) por debajo de SMA50 (107.52).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.3%.
  - RSI 49: zona neutral.

---
_Generado automáticamente el 2026-10-22T20:08:15.563Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

Jornada negativa para Wall Street: el S&P 500 cayó ~1,2% (cerca de 7.650) y el Nasdaq Composite ~2,6%, con el sector tecnológico hundiéndose por el regreso de los temores sobre el gasto en IA tras los resultados de Tesla y Meta (Meta cayó con fuerza al subir su plan de capex). Petróleo y rendimientos del Tesoro también se citaron como factores. Cifras aproximadas: no se encontró un cierre oficial confirmado. Nota: `research-notes-latest` quedó vacío hoy (Yahoo Finance inalcanzable desde el entorno), así que no hay veredicto sintetizado contra el cual contrastar.

### Core (largo plazo)
- **LMT**: subió con fuerza (el reporte lo registra en $590,20, +7,4% sobre costo) tras resultados del 3T que superaron lo esperado (EPS ajustado $7,97 vs $7,52; ingresos +11% a $20,7 mil millones), guía 2026 elevada, backlog récord (~$292 mil millones) y un acuerdo marco de 10 años por al menos 850 F-35. Refuerza el caso alcista de largo plazo y fue contracíclico frente a un mercado en baja.
- **MSFT**: cayó ~2% arrastrada por el sell-off de IA/tech (cotizó ~$522 vs ~$533 previo). Sin noticia propia verificada; el catalizador siguiente son los resultados del 28 de octubre. Movimiento de mercado, no de fundamentales.

### Satellite (técnico)
- **MRNA** (vendida hoy por stop-loss a $202,63 según el bot): la acción se desplomó ~25% el 22/oct (de $245,81 a ~$185 intradía) tras reportes de una supuesta filtración de datos embargados de Fase 3 de su vacuna contra melanoma, antes de la presentación en ESMO. El stop-loss del bot se activó correctamente aunque el precio de cierre usado (-16%) fue menor a la caída intradía observada en las búsquedas; la noticia contradice una posición alcista.
- **CRL** (comprada hoy): subió fuerte el 21/oct tras su investor day ("Pathway to Purpose"), mejoras de analistas (UBS a Compra, objetivo $357) y rally sectorial. Respalda la señal técnica, pero el bot compró con RSI 74 (sobrecompra), tras un salto grande: riesgo de corrección.

### Fuentes
- [Stock Market Today: October 22, 2026 (Yahoo Finance)](https://finance.yahoo.com/markets/live/stock-market-today-thursday-october-22-dow-sp-500-nasdaq-tesla-meta-112217857.html)
- [Stock Market Midday, Oct. 22 (Motley Fool)](https://www.fool.com/coverage/stock-market-today/2026/10/22/stock-market-midday-oct-22-tech-weakness-drags-nasdaq-lower-as-ai-spending-concerns-mount/)
- [Why is Lockheed Martin stock surging today? (Investing.com)](https://www.investing.com/news/stock-market-news/why-is-lockheed-martin-stock-surging-today-93CH-4965500)
- [Lockheed Martin Stock Rises on F-35 Framework Deal (MarketScreener)](https://www.marketscreener.com/news/lockheed-martin-stock-rises-on-f-35-framework-deal-with-government-record-backlog-ce785cded88af523)
- [Meta Falls 3%... Microsoft Holds Steady (24/7 Wall St.)](https://247wallst.com/investing/2026/10/22/meta-falls-3-as-higher-ai-spending-outlook-overshadows-earnings-beat-alphabet-dips-microsoft-holds-steady)
- [Moderna MRNA (Pluang)](https://pluang.com/en/asset/usstock/MRNA/10054)
- [Charles River Laboratories Jumps 7.3% (Alphastreet)](https://news.alphastreet.com/charles-river-laboratories-international-jumps-7-3-in-broad-rally/)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
