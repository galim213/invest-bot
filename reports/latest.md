> 🚨 **ALERTA 2026-11-20:** se cumplió la condición (b): JNJ (core, posición abierta) tiene un gatillo de venta activo en research-notes ("si el payout ratio sigue subiendo por encima del 100%, el dividendo actual no es sostenible"). No hubo ventas hoy ni caída >3% (-0.88%). **El email de alerta no se pudo enviar** (el conector de Gmail no tiene el permiso necesario).

# Reporte diario de inversión (simulado) — 2026-11-20

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$956.62**
- P&L acumulado: $-43.38 (-4.34%)
- Core (70%, largo plazo): $687.10 (-1.84%) | Satellite (30%, técnico): $269.52 (-10.16%)

**Régimen de mercado: BAJISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 34.32 — ALTO (Estrés de mercado elevado.) Variación 10d: +14.4 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.79 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -0.84 pts — normal.
- **Índice dólar (DXY)**: 103.83 (variación 10d: +2.18)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $271.41 | $73.18 | 10.7% | $3.18 (+4.54%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $170.24 | $75.33 | 11.0% | $5.33 (+7.61%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $97.09 | $73.30 | 10.7% | $3.30 (+4.71%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $160.46 | $63.35 | 9.2% | $-6.65 (-9.50%) | $1.0700/acción (2026-11-16) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $209.32 | $65.18 | 9.5% | $-4.82 (-6.88%) | $1.7800/acción (2026-11-18) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $311.26 | $64.90 | 9.4% | $-5.10 (-7.29%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $485.75 | $63.83 | 9.3% | $-6.17 (-8.82%) | $0.9800/acción (2026-11-19) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $404.22 | $69.53 | 10.1% | $-0.47 (-0.67%) | $0.7800/acción (2026-11-10) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $566.39 | $72.17 | 10.5% | $2.17 (+3.10%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $266.37 | $66.34 | 9.7% | $-3.31 (-4.75%) | $1.5200/acción (2026-10-30) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| ISRG | Health Care | 0.221 | $438.48 | $402.68 | $89.12 | 33.1% | $-7.92 (-8.16%) |
| TMO | Health Care | 0.114 | $690.08 | $672.77 | $77.00 | 28.6% | $-1.98 (-2.51%) |
| CRL | Health Care | 0.062 | $339.66 | $312.48 | $19.41 | 7.2% | $-1.69 (-8.00%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $408.30 | $10.87 | 4.0% | $0.31 (+2.90%) |
| J | Industrials | 0.327 | $154.68 | $151.49 | $49.50 | 18.4% | $-1.04 (-2.06%) |
| ALL | Financials | 0.038 | $268.70 | $268.70 | $10.14 | 3.8% | $0.00 (0.00%) |

### Concentración y correlación (informativo)

- Posiciones: 6 · N efectivo por peso (1/HHI): **3.87**
- Correlación promedio entre posiciones (retornos diarios, últimas 60 ruedas): **0.18** → N efectivo ajustado por correlación: **2.55**
- Por sector: Health Care 72% · Industrials 19% · Consumer Discretionary 4% · Financials 4%

_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._

### Movimientos ejecutados hoy

- **COMPRA ALL** — 0.038 shares a $268.70 ($10.14). _Señal técnica de compra (score 63): Tendencia de corto plazo alcista: SMA20 (262.20) por encima de SMA50 (247.56). Precio por encima de la media de 200 días: contexto de fondo alcista. Momentum 10d: 5.5%. RSI 55: zona neutral._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| DLTR | Consumer Staples | 65 | BUY | $137.32 | Tendencia de corto plazo alcista: SMA20 (136.46) por encima de SMA50 (125.10). |
| ALL | Financials | 63 | BUY | $268.70 | Tendencia de corto plazo alcista: SMA20 (262.20) por encima de SMA50 (247.56). |
| J | Industrials | 63 | BUY | $151.49 | Tendencia de corto plazo alcista: SMA20 (154.98) por encima de SMA50 (146.40). |
| LMT | Industrials | 63 | BUY | $566.08 | Tendencia de corto plazo alcista: SMA20 (604.10) por encima de SMA50 (558.57). |
| REGN | Health Care | 62 | BUY | $921.82 | Tendencia de corto plazo alcista: SMA20 (912.96) por encima de SMA50 (829.78). |
| FERG | Industrials | 61 | BUY | $241.83 | Tendencia de corto plazo alcista: SMA20 (245.45) por encima de SMA50 (231.40). |
| HRL | Consumer Staples | 61 | BUY | $23.57 | Tendencia de corto plazo alcista: SMA20 (22.00) por encima de SMA50 (20.78). |
| TSN | Consumer Staples | 59 | BUY | $64.93 | Tendencia de corto plazo alcista: SMA20 (59.67) por encima de SMA50 (55.58). |
| EG | Financials | 57 | BUY | $423.98 | Tendencia de corto plazo alcista: SMA20 (414.87) por encima de SMA50 (392.01). |
| ACGL | Financials | 56 | BUY | $109.25 | Tendencia de corto plazo alcista: SMA20 (107.63) por encima de SMA50 (101.15). |
| LLY | Health Care | 56 | BUY | $1351.54 | Tendencia de corto plazo alcista: SMA20 (1382.96) por encima de SMA50 (1265.67). |
| WMT | Consumer Staples | 56 | BUY | $128.62 | Tendencia de corto plazo alcista: SMA20 (125.36) por encima de SMA50 (116.66). |
| ALLE | Industrials | 55 | BUY | $184.21 | Tendencia de corto plazo alcista: SMA20 (187.41) por encima de SMA50 (168.16). |
| CDW | Information Technology | 55 | BUY | $162.01 | Tendencia de corto plazo alcista: SMA20 (163.49) por encima de SMA50 (152.55). |
| CL | Consumer Staples | 55 | BUY | $98.94 | Tendencia de corto plazo alcista: SMA20 (96.97) por encima de SMA50 (91.81). |
| MAR | Consumer Discretionary | 48 | BUY | $408.30 | Tendencia de corto plazo alcista: SMA20 (413.80) por encima de SMA50 (382.90). |
| CRL | Health Care | 34 | HOLD | $312.48 | Tendencia de corto plazo alcista: SMA20 (342.74) por encima de SMA50 (315.91). |
| TMO | Health Care | 24 | HOLD | $672.77 | Tendencia de corto plazo alcista: SMA20 (696.83) por encima de SMA50 (678.55). |
| ISRG | Health Care | 2 | HOLD | $402.68 | Tendencia de corto plazo alcista: SMA20 (442.31) por encima de SMA50 (423.58). |
| ETN | Industrials | -68 | SELL | $310.78 | Tendencia de corto plazo bajista: SMA20 (355.99) por debajo de SMA50 (391.73). |
| GEV | Industrials | -68 | SELL | $700.62 | Tendencia de corto plazo bajista: SMA20 (818.01) por debajo de SMA50 (893.38). |
| LITE | Information Technology | -68 | SELL | $465.33 | Tendencia de corto plazo bajista: SMA20 (655.33) por debajo de SMA50 (826.15). |
| MRVL | Information Technology | -68 | SELL | $122.17 | Tendencia de corto plazo bajista: SMA20 (171.05) por debajo de SMA50 (220.25). |
| MU | Information Technology | -68 | SELL | $593.55 | Tendencia de corto plazo bajista: SMA20 (786.60) por debajo de SMA50 (912.17). |
| TWLO | Information Technology | -68 | SELL | $172.36 | Tendencia de corto plazo bajista: SMA20 (213.06) por debajo de SMA50 (248.35). |
| BG | Consumer Staples | -69 | SELL | $90.79 | Tendencia de corto plazo bajista: SMA20 (97.10) por debajo de SMA50 (103.67). |
| GLW | Information Technology | -69 | SELL | $94.33 | Tendencia de corto plazo bajista: SMA20 (115.82) por debajo de SMA50 (135.28). |
| ALB | Materials | -70 | SELL | $80.21 | Tendencia de corto plazo bajista: SMA20 (92.51) por debajo de SMA50 (99.63). |
| VRT | Industrials | -70 | SELL | $164.51 | Tendencia de corto plazo bajista: SMA20 (204.55) por debajo de SMA50 (222.98). |
| BE | Industrials | -71 | SELL | $142.17 | Tendencia de corto plazo bajista: SMA20 (192.10) por debajo de SMA50 (234.02). |
| NFLX | Communication Services | -71 | SELL | $57.07 | Tendencia de corto plazo bajista: SMA20 (62.30) por debajo de SMA50 (67.41). |
| ORCL | Information Technology | -71 | SELL | $101.46 | Tendencia de corto plazo bajista: SMA20 (122.52) por debajo de SMA50 (131.95). |
| ARE | Real Estate | -72 | SELL | $40.83 | Tendencia de corto plazo bajista: SMA20 (43.02) por debajo de SMA50 (45.42). |
| RDDT | Communication Services | -76 | SELL | $86.06 | Tendencia de corto plazo bajista: SMA20 (103.47) por debajo de SMA50 (133.12). |

#### Detalle de razonamiento (señales destacadas)

**DLTR** (score 65, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (136.46) por encima de SMA50 (125.10).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.7%.
  - RSI 49: zona neutral.
**ALL** (score 63, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (262.20) por encima de SMA50 (247.56).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.5%.
  - RSI 55: zona neutral.
**J** (score 63, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (154.98) por encima de SMA50 (146.40).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.7%.
  - RSI 37: zona neutral.
**LMT** (score 63, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (604.10) por encima de SMA50 (558.57).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -0.2%.
  - RSI 28: sobreventa, posible rebote.
**REGN** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (912.96) por encima de SMA50 (829.78).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.9%.
  - RSI 40: zona neutral.
**FERG** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (245.45) por encima de SMA50 (231.40).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.5%.
  - RSI 50: zona neutral.
**HRL** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (22.00) por encima de SMA50 (20.78).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.4%.
  - RSI 69: zona neutral.
**TSN** (score 59, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (59.67) por encima de SMA50 (55.58).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.8%.
  - RSI 80: sobrecompra, riesgo de corrección.
**EG** (score 57, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (414.87) por encima de SMA50 (392.01).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.1%.
  - RSI 54: zona neutral.
**ACGL** (score 56, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (107.63) por encima de SMA50 (101.15).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.8%.
  - RSI 50: zona neutral.
**LLY** (score 56, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (1382.96) por encima de SMA50 (1265.67).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -0.1%.
  - RSI 40: zona neutral.
**WMT** (score 56, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (125.36) por encima de SMA50 (116.66).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.5%.
  - RSI 52: zona neutral.
**ALLE** (score 55, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (187.41) por encima de SMA50 (168.16).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -0.6%.
  - RSI 39: zona neutral.
**CDW** (score 55, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (163.49) por encima de SMA50 (152.55).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.2%.
  - RSI 58: zona neutral.
**CL** (score 55, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (96.97) por encima de SMA50 (91.81).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.5%.
  - RSI 54: zona neutral.
**MAR** (score 48, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (413.80) por encima de SMA50 (382.90).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -1.8%.
  - RSI 44: zona neutral.
**CRL** (score 34, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (342.74) por encima de SMA50 (315.91).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -7.4%.
  - RSI 40: zona neutral.
**TMO** (score 24, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (696.83) por encima de SMA50 (678.55).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -3.2%.
  - RSI 47: zona neutral.
**ISRG** (score 2, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (442.31) por encima de SMA50 (423.58).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.1%.
  - RSI 38: zona neutral.
**ETN** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (355.99) por debajo de SMA50 (391.73).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.8%.
  - RSI 35: zona neutral.
**GEV** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (818.01) por debajo de SMA50 (893.38).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.5%.
  - RSI 33: zona neutral.
**LITE** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (655.33) por debajo de SMA50 (826.15).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.6%.
  - RSI 30: sobreventa, posible rebote.
**MRVL** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (171.05) por debajo de SMA50 (220.25).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.5%.
  - RSI 31: zona neutral.
**MU** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (786.60) por debajo de SMA50 (912.17).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.0%.
  - RSI 30: zona neutral.
**TWLO** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (213.06) por debajo de SMA50 (248.35).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.7%.
  - RSI 30: zona neutral.
**BG** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (97.10) por debajo de SMA50 (103.67).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.7%.
  - RSI 44: zona neutral.
**GLW** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (115.82) por debajo de SMA50 (135.28).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.9%.
  - RSI 32: zona neutral.
**ALB** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (92.51) por debajo de SMA50 (99.63).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -19.2%.
  - RSI 33: zona neutral.
**VRT** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (204.55) por debajo de SMA50 (222.98).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.0%.
  - RSI 33: zona neutral.
**BE** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (192.10) por debajo de SMA50 (234.02).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -17.9%.
  - RSI 36: zona neutral.
**NFLX** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (62.30) por debajo de SMA50 (67.41).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.0%.
  - RSI 35: zona neutral.
**ORCL** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (122.52) por debajo de SMA50 (131.95).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.6%.
  - RSI 36: zona neutral.
**ARE** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (43.02) por debajo de SMA50 (45.42).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.9%.
  - RSI 43: zona neutral.
**RDDT** (score -76, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (103.47) por debajo de SMA50 (133.12).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.5%.
  - RSI 46: zona neutral.

---
_Generado automáticamente el 2026-11-20T20:07:14.965Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

El cierre de hoy (2026-11-20) no se pudo confirmar con fuentes: la búsqueda web no devolvió coberturas fechadas hoy. Lo último verificable es el 18/11: S&P 500 -0.2% (7,323.63, quinta caída seguida, la racha más larga desde junio), Nasdaq +0.4%, Dow -1.1%, con las acciones de IA/tecnología (Nvidia) como principal foco de volatilidad y el VIX en 34.3 (estrés alto) según el propio reporte. El portfolio combinado cayó -0.88% hoy ($965.07 → $956.62).

### Core (largo plazo)

No se encontró noticia relevante fechada esta semana para los tickers del core (la búsqueda de JNJ solo devolvió material antiguo; último precio de referencia ~$276 el 4/11, hoy $271.41). El gatillo de venta de JNJ en research-notes (payout ratio > 100%) sigue vigente y es lo único a vigilar; nada en las noticias lo confirma ni lo contradice.

### Satellite (técnico)

Sin noticias relevantes encontradas para las señales destacadas (DLTR, ALL, J, LMT, REGN, etc.). Hoy solo se ejecutó una compra técnica (ALL).

### Fuentes

- [How major US stock indexes fared Wednesday 11/18/2026](https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-wednesday-11182026-nid18112026/)
- [Stock market news for Nov 18, 2026 (Zacks)](https://www.zacks.com/stock/news/3031665/stock-market-news-for-nov-18-2026)
- [JNJ (Trefis)](https://www.trefis.com/data/companies/JNJ?from=section_ticker)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
