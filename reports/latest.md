# Reporte diario de inversión (simulado) — 2026-10-28

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$1022.23**
- P&L acumulado: $22.23 (+2.22%)
- Core (70%, largo plazo): $722.80 (+3.26%) | Satellite (30%, técnico): $299.43 (-0.19%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 16.86 — CALMA (Dentro del rango histórico normal.) Variación 10d: +0.4 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +1.05 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -1.35 pts — normal.
- **Índice dólar (DXY)**: 102.14 (variación 10d: +0.14)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $271.21 | $73.13 | 10.1% | $3.13 (+4.47%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $158.37 | $70.08 | 9.7% | $0.08 (+0.11%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $91.85 | $69.34 | 9.6% | $-0.66 (-0.94%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $182.06 | $71.88 | 9.9% | $1.88 (+2.68%) | $1.0300/acción (2026-08-17) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $229.29 | $71.40 | 9.9% | $1.40 (+2.01%) | $1.7800/acción (2026-08-19) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $339.49 | $70.78 | 9.8% | $0.78 (+1.12%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $531.01 | $69.77 | 9.7% | $-0.23 (-0.32%) | $0.9100/acción (2026-08-20) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $401.02 | $68.98 | 9.5% | $-1.02 (-1.46%) | $0.6700/acción (2026-08-11) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $629.98 | $80.27 | 11.1% | $10.27 (+14.67%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $309.83 | $77.17 | 10.7% | $7.52 (+10.79%) | $1.4200/acción (2026-07-31) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| VEEV | Health Care | 0.226 | $315.43 | $318.04 | $71.96 | 24.0% | $0.59 (+0.83%) |
| ISRG | Health Care | 0.221 | $438.48 | $444.18 | $98.30 | 32.8% | $1.26 (+1.30%) |
| TMO | Health Care | 0.114 | $690.08 | $704.77 | $80.67 | 26.9% | $1.68 (+2.13%) |
| CRL | Health Care | 0.062 | $339.66 | $374.16 | $23.25 | 7.8% | $2.14 (+10.16%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $394.40 | $10.50 | 3.5% | $-0.06 (-0.60%) |

### Concentración y correlación (informativo)

- Posiciones: 5 · N efectivo por peso (1/HHI): **3.68**
- Correlación promedio entre posiciones (retornos diarios, últimas 60 ruedas): **0.22** → N efectivo ajustado por correlación: **2.33**
- Por sector: Health Care 96% · Consumer Discretionary 4%

_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| CRWD | Information Technology | 70 | BUY | $266.66 | Tendencia de corto plazo alcista: SMA20 (256.17) por encima de SMA50 (237.86). |
| IT | Information Technology | 70 | BUY | $219.15 | Tendencia de corto plazo alcista: SMA20 (205.24) por encima de SMA50 (194.93). |
| TXN | Information Technology | 70 | BUY | $309.83 | Tendencia de corto plazo alcista: SMA20 (287.68) por encima de SMA50 (274.05). |
| ACN | Information Technology | 67 | BUY | $243.96 | Tendencia de corto plazo alcista: SMA20 (222.48) por encima de SMA50 (198.81). |
| CCL | Consumer Discretionary | 66 | BUY | $28.08 | Tendencia de corto plazo alcista: SMA20 (26.49) por encima de SMA50 (24.74). |
| CDNS | Information Technology | 64 | BUY | $342.46 | Tendencia de corto plazo alcista: SMA20 (336.73) por encima de SMA50 (319.69). |
| RCL | Consumer Discretionary | 63 | BUY | $298.59 | Tendencia de corto plazo alcista: SMA20 (282.38) por encima de SMA50 (270.59). |
| ADI | Information Technology | 62 | BUY | $428.27 | Tendencia de corto plazo alcista: SMA20 (407.16) por encima de SMA50 (386.20). |
| RVTY | Health Care | 62 | BUY | $165.36 | Tendencia de corto plazo alcista: SMA20 (155.38) por encima de SMA50 (142.84). |
| CRL | Health Care | 60 | HOLD | $374.16 | Tendencia de corto plazo alcista: SMA20 (316.89) por encima de SMA50 (298.83). |
| HAS | Consumer Discretionary | 60 | HOLD | $118.68 | Tendencia de corto plazo alcista: SMA20 (101.72) por encima de SMA50 (95.34). |
| ILMN | Health Care | 60 | BUY | $288.79 | Tendencia de corto plazo alcista: SMA20 (272.91) por encima de SMA50 (247.14). |
| AMD | Information Technology | 59 | BUY | $578.44 | Tendencia de corto plazo alcista: SMA20 (579.36) por encima de SMA50 (545.58). |
| DDOG | Information Technology | 59 | BUY | $278.41 | Tendencia de corto plazo alcista: SMA20 (272.84) por encima de SMA50 (250.57). |
| APA | Energy | 58 | BUY | $51.11 | Tendencia de corto plazo alcista: SMA20 (47.47) por encima de SMA50 (45.02). |
| ISRG | Health Care | 57 | BUY | $444.18 | Tendencia de corto plazo alcista: SMA20 (426.00) por encima de SMA50 (399.37). |
| VEEV | Health Care | 56 | BUY | $318.04 | Tendencia de corto plazo alcista: SMA20 (302.76) por encima de SMA50 (281.43). |
| MAR | Consumer Discretionary | 54 | BUY | $394.40 | Tendencia de corto plazo alcista: SMA20 (377.98) por encima de SMA50 (358.54). |
| TMO | Health Care | 40 | BUY | $704.77 | Tendencia de corto plazo alcista: SMA20 (674.57) por encima de SMA50 (651.19). |
| COHR | Information Technology | -57 | SELL | $239.63 | Tendencia de corto plazo bajista: SMA20 (270.90) por debajo de SMA50 (282.17). |
| LVS | Consumer Discretionary | -57 | SELL | $36.23 | Tendencia de corto plazo bajista: SMA20 (36.76) por debajo de SMA50 (40.31). |
| TMUS | Communication Services | -57 | SELL | $148.08 | Tendencia de corto plazo bajista: SMA20 (156.89) por debajo de SMA50 (168.18). |
| SCHW | Financials | -58 | SELL | $88.77 | Tendencia de corto plazo bajista: SMA20 (93.84) por debajo de SMA50 (101.36). |
| FICO | Information Technology | -58 | SELL | $698.19 | Tendencia de corto plazo bajista: SMA20 (730.06) por debajo de SMA50 (889.63). |
| JBHT | Industrials | -58 | SELL | $223.26 | Tendencia de corto plazo bajista: SMA20 (228.28) por debajo de SMA50 (243.98). |
| FLEX | Information Technology | -62 | SELL | $93.03 | Tendencia de corto plazo bajista: SMA20 (100.34) por debajo de SMA50 (106.57). |
| BG | Consumer Staples | -63 | SELL | $100.69 | Tendencia de corto plazo bajista: SMA20 (104.84) por debajo de SMA50 (111.37). |
| BKNG | Consumer Discretionary | -64 | SELL | $147.94 | Tendencia de corto plazo bajista: SMA20 (158.52) por debajo de SMA50 (173.60). |
| DASH | Consumer Discretionary | -64 | SELL | $169.49 | Tendencia de corto plazo bajista: SMA20 (186.66) por debajo de SMA50 (199.53). |
| NFLX | Communication Services | -64 | SELL | $61.99 | Tendencia de corto plazo bajista: SMA20 (68.12) por debajo de SMA50 (73.40). |
| BA | Industrials | -65 | SELL | $167.12 | Tendencia de corto plazo bajista: SMA20 (187.40) por debajo de SMA50 (197.99). |
| T | Communication Services | -67 | SELL | $20.72 | Tendencia de corto plazo bajista: SMA20 (22.86) por debajo de SMA50 (24.31). |
| HWM | Industrials | -67 | SELL | $195.28 | Tendencia de corto plazo bajista: SMA20 (214.39) por debajo de SMA50 (232.08). |
| HOOD | Financials | -68 | SELL | $91.43 | Tendencia de corto plazo bajista: SMA20 (103.32) por debajo de SMA50 (108.78). |

#### Detalle de razonamiento (señales destacadas)

**CRWD** (score 70, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (256.17) por encima de SMA50 (237.86).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.0%.
  - RSI 52: zona neutral.
**IT** (score 70, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (205.24) por encima de SMA50 (194.93).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.9%.
  - RSI 67: zona neutral.
**TXN** (score 70, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (287.68) por encima de SMA50 (274.05).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.4%.
  - RSI 66: zona neutral.
**ACN** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (222.48) por encima de SMA50 (198.81).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 13.5%.
  - RSI 72: sobrecompra, riesgo de corrección.
**CCL** (score 66, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (26.49) por encima de SMA50 (24.74).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.1%.
  - RSI 64: zona neutral.
**CDNS** (score 64, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (336.73) por encima de SMA50 (319.69).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.9%.
  - RSI 47: zona neutral.
**RCL** (score 63, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (282.38) por encima de SMA50 (270.59).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.9%.
  - RSI 64: zona neutral.
**ADI** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (407.16) por encima de SMA50 (386.20).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.1%.
  - RSI 61: zona neutral.
**RVTY** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (155.38) por encima de SMA50 (142.84).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.8%.
  - RSI 74: sobrecompra, riesgo de corrección.
**CRL** (score 60, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (316.89) por encima de SMA50 (298.83).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 23.9%.
  - RSI 86: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 86 >= 80): se espera una corrección antes de entrar.
**HAS** (score 60, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (101.72) por encima de SMA50 (95.34).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 24.3%.
  - RSI 97: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 97 >= 80): se espera una corrección antes de entrar.
**ILMN** (score 60, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (272.91) por encima de SMA50 (247.14).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.3%.
  - RSI 64: zona neutral.
**AMD** (score 59, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (579.36) por encima de SMA50 (545.58).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.3%.
  - RSI 42: zona neutral.
**DDOG** (score 59, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (272.84) por encima de SMA50 (250.57).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.4%.
  - RSI 52: zona neutral.
**APA** (score 58, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (47.47) por encima de SMA50 (45.02).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.4%.
  - RSI 79: sobrecompra, riesgo de corrección.
**ISRG** (score 57, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (426.00) por encima de SMA50 (399.37).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.7%.
  - RSI 68: zona neutral.
**VEEV** (score 56, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (302.76) por encima de SMA50 (281.43).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.0%.
  - RSI 75: sobrecompra, riesgo de corrección.
**MAR** (score 54, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (377.98) por encima de SMA50 (358.54).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.1%.
  - RSI 74: sobrecompra, riesgo de corrección.
**TMO** (score 40, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (674.57) por encima de SMA50 (651.19).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.7%.
  - RSI 71: sobrecompra, riesgo de corrección.
**COHR** (score -57, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (270.90) por debajo de SMA50 (282.17).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.0%.
  - RSI 31: zona neutral.
**LVS** (score -57, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (36.76) por debajo de SMA50 (40.31).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -2.1%.
  - RSI 51: zona neutral.
**TMUS** (score -57, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (156.89) por debajo de SMA50 (168.18).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -6.2%.
  - RSI 31: zona neutral.
**SCHW** (score -58, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (93.84) por debajo de SMA50 (101.36).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.3%.
  - RSI 22: sobreventa, posible rebote.
**FICO** (score -58, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (730.06) por debajo de SMA50 (889.63).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -3.0%.
  - RSI 49: zona neutral.
**JBHT** (score -58, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (228.28) por debajo de SMA50 (243.98).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -3.8%.
  - RSI 45: zona neutral.
**FLEX** (score -62, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (100.34) por debajo de SMA50 (106.57).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.3%.
  - RSI 33: zona neutral.
**BG** (score -63, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (104.84) por debajo de SMA50 (111.37).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.5%.
  - RSI 33: zona neutral.
**BKNG** (score -64, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (158.52) por debajo de SMA50 (173.60).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.9%.
  - RSI 34: zona neutral.
**DASH** (score -64, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (186.66) por debajo de SMA50 (199.53).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.9%.
  - RSI 33: zona neutral.
**NFLX** (score -64, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (68.12) por debajo de SMA50 (73.40).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.2%.
  - RSI 24: sobreventa, posible rebote.
**BA** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (187.40) por debajo de SMA50 (197.99).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.5%.
  - RSI 27: sobreventa, posible rebote.
**T** (score -67, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (22.86) por debajo de SMA50 (24.31).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.1%.
  - RSI 28: sobreventa, posible rebote.
**HWM** (score -67, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (214.39) por debajo de SMA50 (232.08).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.2%.
  - RSI 29: sobreventa, posible rebote.
**HOOD** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (103.32) por debajo de SMA50 (108.78).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.5%.
  - RSI 32: zona neutral.

---
_Generado automáticamente el 2026-10-28T20:08:29.923Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

No se pudieron confirmar noticias financieras fechadas el 2026-10-28: las búsquedas web no devolvieron cobertura del cierre de hoy ni de ninguno de los tickers del core (JNJ, PG, KO, XOM, CVX, JPM, MSFT, V, LMT, TXN) ni del satellite. Además, research-notes-latest quedó vacío porque Yahoo Finance fue inalcanzable desde el entorno (ENOTFOUND), así que no hay veredicto previo con el que contrastar. Para evitar inventar causalidad, no se atribuye el movimiento de hoy a ninguna noticia.

Datos objetivos del reporte: core +0.5% en el día ($719.18 → $722.80), satellite +1.1% ($296.26 → $299.43); régimen ALCISTA, VIX 16.86 (calma).

### Core (largo plazo)
Sin noticia verificable de hoy. Contexto no fechado hoy: TXN tenía resultados del T3 previstos para ~21 de octubre (no se confirmó el resultado) y LMT reportó un miss en el T1 2026 (abril); ninguno confirmado como causa del movimiento de hoy.

### Satellite (técnico)
Sin noticia verificable de hoy para VEEV, ISRG, TMO, CRL ni MAR.

Fuentes consultadas (sin cobertura fechada hoy):
- [Earnings Whispers – TXN](https://www.earningswhispers.com/stocks/TXN)
- [Unusual Whales – TXN earnings](https://unusualwhales.com/stock/TXN/earnings)
- [CNN Markets – LMT](https://www.cnn.com/markets/stocks/LMT)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
