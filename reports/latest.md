# Reporte diario de inversión (simulado) — 2026-10-30

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$1023.23**
- P&L acumulado: $23.23 (+2.32%)
- Core (70%, largo plazo): $729.48 (+4.21%) | Satellite (30%, técnico): $293.75 (-2.08%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 20.80 — ELEVADO (Por encima del promedio histórico (~15-20).) Variación 10d: +2.4 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.95 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -1.76 pts — **ESTRÉS**.
- **Índice dólar (DXY)**: 101.90 (variación 10d: -0.08)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $273.18 | $73.66 | 10.1% | $3.66 (+5.23%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $161.55 | $71.48 | 9.8% | $1.48 (+2.12%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $94.12 | $71.05 | 9.7% | $1.05 (+1.50%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $187.24 | $73.92 | 10.1% | $3.92 (+5.61%) | $1.0300/acción (2026-08-17) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $235.08 | $73.21 | 10.0% | $3.21 (+4.58%) | $1.7800/acción (2026-08-19) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $337.09 | $70.28 | 9.6% | $0.28 (+0.41%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $521.91 | $68.58 | 9.4% | $-1.42 (-2.03%) | $0.9100/acción (2026-08-20) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $413.68 | $71.16 | 9.8% | $1.16 (+1.65%) | $0.6700/acción (2026-08-11) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $637.27 | $81.20 | 11.1% | $11.20 (+16.00%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $300.89 | $74.94 | 10.3% | $5.29 (+7.60%) | $1.4200/acción (2026-07-31) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| VEEV | Health Care | 0.226 | $315.43 | $313.11 | $70.85 | 24.1% | $-0.52 (-0.73%) |
| ISRG | Health Care | 0.221 | $438.48 | $432.01 | $95.61 | 32.5% | $-1.43 (-1.48%) |
| TMO | Health Care | 0.114 | $690.08 | $697.44 | $79.83 | 27.2% | $0.84 (+1.07%) |
| CRL | Health Care | 0.062 | $339.66 | $355.44 | $22.08 | 7.5% | $0.98 (+4.65%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $399.30 | $10.63 | 3.6% | $0.07 (+0.63%) |

### Concentración y correlación (informativo)

- Posiciones: 5 · N efectivo por peso (1/HHI): **3.68**
- Correlación promedio entre posiciones (retornos diarios, últimas 60 ruedas): **0.20** → N efectivo ajustado por correlación: **2.41**
- Por sector: Health Care 96% · Consumer Discretionary 4%

_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| CRWD | Information Technology | 81 | BUY | $247.70 | Tendencia de corto plazo alcista: SMA20 (254.81) por encima de SMA50 (240.20). |
| CCL | Consumer Discretionary | 71 | BUY | $28.72 | Tendencia de corto plazo alcista: SMA20 (26.83) por encima de SMA50 (24.85). |
| RCL | Consumer Discretionary | 70 | BUY | $306.74 | Tendencia de corto plazo alcista: SMA20 (285.85) por encima de SMA50 (271.24). |
| TXN | Information Technology | 69 | BUY | $300.89 | Tendencia de corto plazo alcista: SMA20 (289.62) por encima de SMA50 (275.66). |
| P | Information Technology | 68 | BUY | $127.06 | Tendencia de corto plazo alcista: SMA20 (138.10) por encima de SMA50 (119.71). |
| CRL | Health Care | 67 | BUY | $355.44 | Tendencia de corto plazo alcista: SMA20 (324.60) por encima de SMA50 (301.83). |
| IT | Information Technology | 66 | BUY | $228.78 | Tendencia de corto plazo alcista: SMA20 (209.06) por encima de SMA50 (196.28). |
| ACN | Information Technology | 65 | BUY | $259.50 | Tendencia de corto plazo alcista: SMA20 (227.39) por encima de SMA50 (201.70). |
| GDDY | Information Technology | 65 | BUY | $117.29 | Tendencia de corto plazo alcista: SMA20 (106.08) por encima de SMA50 (101.43). |
| ADI | Information Technology | 63 | BUY | $416.43 | Tendencia de corto plazo alcista: SMA20 (408.56) por encima de SMA50 (388.37). |
| CCI | Real Estate | 63 | BUY | $89.29 | Tendencia de corto plazo alcista: SMA20 (80.12) por encima de SMA50 (75.46). |
| BIIB | Health Care | 61 | BUY | $253.46 | Tendencia de corto plazo alcista: SMA20 (237.31) por encima de SMA50 (227.07). |
| HPE | Information Technology | 61 | BUY | $55.11 | Tendencia de corto plazo alcista: SMA20 (62.38) por encima de SMA50 (59.66). |
| SNPS | Information Technology | 61 | BUY | $461.17 | Tendencia de corto plazo alcista: SMA20 (473.59) por encima de SMA50 (437.35). |
| CBOE | Financials | 60 | BUY | $336.30 | Tendencia de corto plazo alcista: SMA20 (309.40) por encima de SMA50 (294.52). |
| MAR | Consumer Discretionary | 45 | BUY | $399.30 | Tendencia de corto plazo alcista: SMA20 (382.24) por encima de SMA50 (360.20). |
| VEEV | Health Care | 45 | BUY | $313.11 | Tendencia de corto plazo alcista: SMA20 (306.16) por encima de SMA50 (283.86). |
| TMO | Health Care | 36 | BUY | $697.44 | Tendencia de corto plazo alcista: SMA20 (679.51) por encima de SMA50 (654.50). |
| ISRG | Health Care | 32 | HOLD | $432.01 | Tendencia de corto plazo alcista: SMA20 (430.38) por encima de SMA50 (401.54). |
| LRCX | Information Technology | -63 | SELL | $239.11 | Tendencia de corto plazo bajista: SMA20 (278.50) por debajo de SMA50 (294.33). |
| COHR | Information Technology | -65 | SELL | $204.53 | Tendencia de corto plazo bajista: SMA20 (260.17) por debajo de SMA50 (279.46). |
| FIX | Industrials | -65 | SELL | $1231.30 | Tendencia de corto plazo bajista: SMA20 (1478.00) por debajo de SMA50 (1561.63). |
| NFLX | Communication Services | -65 | SELL | $61.89 | Tendencia de corto plazo bajista: SMA20 (67.57) por debajo de SMA50 (72.67). |
| HOOD | Financials | -65 | SELL | $84.99 | Tendencia de corto plazo bajista: SMA20 (100.95) por debajo de SMA50 (108.49). |
| BG | Consumer Staples | -66 | SELL | $95.99 | Tendencia de corto plazo bajista: SMA20 (103.78) por debajo de SMA50 (110.60). |
| APP | Communication Services | -67 | SELL | $229.93 | Tendencia de corto plazo bajista: SMA20 (267.62) por debajo de SMA50 (294.23). |
| CHRW | Industrials | -67 | SELL | $123.19 | Tendencia de corto plazo bajista: SMA20 (138.04) por debajo de SMA50 (145.12). |
| SNDK | Information Technology | -67 | SELL | $1118.53 | Tendencia de corto plazo bajista: SMA20 (1417.14) por debajo de SMA50 (1557.26). |
| BA | Industrials | -68 | SELL | $171.45 | Tendencia de corto plazo bajista: SMA20 (185.32) por debajo de SMA50 (196.12). |
| FICO | Information Technology | -70 | SELL | $711.31 | Tendencia de corto plazo bajista: SMA20 (734.94) por debajo de SMA50 (871.81). |
| NEM | Materials | -70 | SELL | $105.40 | Tendencia de corto plazo bajista: SMA20 (114.35) por debajo de SMA50 (120.56). |
| T | Communication Services | -71 | SELL | $21.39 | Tendencia de corto plazo bajista: SMA20 (22.57) por debajo de SMA50 (24.16). |
| BKNG | Consumer Discretionary | -71 | SELL | $148.04 | Tendencia de corto plazo bajista: SMA20 (157.48) por debajo de SMA50 (171.13). |
| HWM | Industrials | -71 | SELL | $199.30 | Tendencia de corto plazo bajista: SMA20 (211.67) por debajo de SMA50 (229.04). |

#### Detalle de razonamiento (señales destacadas)

**CRWD** (score 81, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (254.81) por encima de SMA50 (240.20).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.9%.
  - RSI 42: zona neutral.
**CCL** (score 71, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (26.83) por encima de SMA50 (24.85).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.9%.
  - RSI 65: zona neutral.
**RCL** (score 70, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (285.85) por encima de SMA50 (271.24).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.5%.
  - RSI 67: zona neutral.
**TXN** (score 69, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (289.62) por encima de SMA50 (275.66).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.8%.
  - RSI 62: zona neutral.
**P** (score 68, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (138.10) por encima de SMA50 (119.71).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.5%.
  - RSI 33: zona neutral.
**CRL** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (324.60) por encima de SMA50 (301.83).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 18.4%.
  - RSI 72: sobrecompra, riesgo de corrección.
**IT** (score 66, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (209.06) por encima de SMA50 (196.28).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.4%.
  - RSI 74: sobrecompra, riesgo de corrección.
**ACN** (score 65, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (227.39) por encima de SMA50 (201.70).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 13.0%.
  - RSI 75: sobrecompra, riesgo de corrección.
**GDDY** (score 65, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (106.08) por encima de SMA50 (101.43).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.7%.
  - RSI 70: sobrecompra, riesgo de corrección.
**ADI** (score 63, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (408.56) por encima de SMA50 (388.37).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.3%.
  - RSI 54: zona neutral.
**CCI** (score 63, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (80.12) por encima de SMA50 (75.46).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.5%.
  - RSI 72: sobrecompra, riesgo de corrección.
**BIIB** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (237.31) por encima de SMA50 (227.07).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.9%.
  - RSI 71: sobrecompra, riesgo de corrección.
**HPE** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (62.38) por encima de SMA50 (59.66).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -0.0%.
  - RSI 26: sobreventa, posible rebote.
**SNPS** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (473.59) por encima de SMA50 (437.35).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.4%.
  - RSI 39: zona neutral.
**CBOE** (score 60, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (309.40) por encima de SMA50 (294.52).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.8%.
  - RSI 66: zona neutral.
**MAR** (score 45, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (382.24) por encima de SMA50 (360.20).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.9%.
  - RSI 73: sobrecompra, riesgo de corrección.
**VEEV** (score 45, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (306.16) por encima de SMA50 (283.86).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 0.9%.
  - RSI 63: zona neutral.
**TMO** (score 36, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (679.51) por encima de SMA50 (654.50).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.1%.
  - RSI 63: zona neutral.
**ISRG** (score 32, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (430.38) por encima de SMA50 (401.54).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: 1.2%.
  - RSI 52: zona neutral.
**LRCX** (score -63, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (278.50) por debajo de SMA50 (294.33).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.4%.
  - RSI 24: sobreventa, posible rebote.
**COHR** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (260.17) por debajo de SMA50 (279.46).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.2%.
  - RSI 24: sobreventa, posible rebote.
**FIX** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (1478.00) por debajo de SMA50 (1561.63).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.4%.
  - RSI 26: sobreventa, posible rebote.
**NFLX** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (67.57) por debajo de SMA50 (72.67).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.2%.
  - RSI 25: sobreventa, posible rebote.
**HOOD** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (100.95) por debajo de SMA50 (108.49).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.0%.
  - RSI 24: sobreventa, posible rebote.
**BG** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (103.78) por debajo de SMA50 (110.60).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.6%.
  - RSI 29: sobreventa, posible rebote.
**APP** (score -67, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (267.62) por debajo de SMA50 (294.23).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.6%.
  - RSI 29: sobreventa, posible rebote.
**CHRW** (score -67, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (138.04) por debajo de SMA50 (145.12).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.7%.
  - RSI 30: zona neutral.
**SNDK** (score -67, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (1417.14) por debajo de SMA50 (1557.26).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.9%.
  - RSI 29: sobreventa, posible rebote.
**BA** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (185.32) por debajo de SMA50 (196.12).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.9%.
  - RSI 31: zona neutral.
**FICO** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (734.94) por debajo de SMA50 (871.81).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.8%.
  - RSI 45: zona neutral.
**NEM** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (114.35) por debajo de SMA50 (120.56).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.1%.
  - RSI 34: zona neutral.
**T** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (22.57) por debajo de SMA50 (24.16).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.8%.
  - RSI 42: zona neutral.
**BKNG** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (157.48) por debajo de SMA50 (171.13).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.4%.
  - RSI 37: zona neutral.
**HWM** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (211.67) por debajo de SMA50 (229.04).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.8%.
  - RSI 36: zona neutral.

---
_Generado automáticamente el 2026-10-30T20:10:43.615Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

No se encontró cobertura indexada del cierre del 2026-10-30 (las búsquedas solo devolvieron datos hasta ~2026-10-22, cuando el S&P 500 cayó 1.21% a 7,663 y el Nasdaq 2.60%, con tecnología a la cabeza). No hay noticias verificables de hoy para los tickers del core ni del satellite, así que no se atribuye el movimiento a ninguna noticia puntual. Nota: las research notes del día salieron vacías (sin datos de Yahoo por red), así que tampoco hay veredicto base para contrastar.

Datos de la propia simulación: valor total $1023.23 (-0.76% vs. ayer); core -0.3%, satellite -1.9%. Sin trades hoy. Alertas: ninguna condición se cumplió (sin ventas, sin sellTriggers, caída < 3%), no se envió email.

### Core (largo plazo)
_Sin noticia relevante encontrada._

### Satellite (técnico)
_Sin noticia relevante encontrada._

### Fuentes
- [Tapeboard market pulse 2026-10-22](https://tapeboard.com/blog/market-pulse-2026-10-22)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
