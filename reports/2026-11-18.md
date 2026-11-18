🚨 **ALERTA**: se cumplió la condición (b): JNJ (core, posición abierta) tiene sellTrigger activo (payout ratio >100%). El email de alerta NO se pudo enviar (conector Gmail sin permiso de envío).

# Reporte diario de inversión (simulado) — 2026-11-18

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$986.88**
- P&L acumulado: $-13.12 (-1.31%)
- Core (70%, largo plazo): $703.93 (+0.56%) | Satellite (30%, técnico): $282.95 (-5.68%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 24.88 — ELEVADO (Por encima del promedio histórico (~15-20).) Variación 10d: -3.3 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.92 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -0.35 pts — normal.
- **Índice dólar (DXY)**: 103.87 (variación 10d: +2.32)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $273.45 | $73.73 | 10.5% | $3.73 (+5.33%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $169.82 | $75.14 | 10.7% | $5.14 (+7.34%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $97.90 | $73.91 | 10.5% | $3.91 (+5.59%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $163.41 | $64.51 | 9.2% | $-5.49 (-7.84%) | $1.0700/acción (2026-11-16) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $206.27 | $64.24 | 9.1% | $-5.76 (-8.23%) | $1.7800/acción (2026-08-19) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $325.27 | $67.82 | 9.6% | $-2.18 (-3.12%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $508.18 | $66.77 | 9.5% | $-3.23 (-4.61%) | $0.9100/acción (2026-08-20) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $414.64 | $71.32 | 10.1% | $1.32 (+1.89%) | $0.7800/acción (2026-11-10) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $577.99 | $73.65 | 10.5% | $3.65 (+5.21%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $292.46 | $72.84 | 10.3% | $3.19 (+4.58%) | $1.5200/acción (2026-10-30) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| VEEV | Health Care | 0.226 | $315.43 | $278.82 | $63.09 | 22.3% | $-8.28 (-11.61%) |
| ISRG | Health Care | 0.221 | $438.48 | $425.16 | $94.09 | 33.3% | $-2.95 (-3.04%) |
| TMO | Health Care | 0.114 | $690.08 | $690.06 | $78.98 | 27.9% | $-0.00 (-0.00%) |
| CRL | Health Care | 0.062 | $339.66 | $332.93 | $20.68 | 7.3% | $-0.42 (-1.98%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $426.37 | $11.36 | 4.0% | $0.79 (+7.45%) |

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
| CRL | Health Care | 65 | BUY | $332.93 | Tendencia de corto plazo alcista: SMA20 (344.95) por encima de SMA50 (314.12). |
| VTRS | Health Care | 62 | BUY | $20.59 | Tendencia de corto plazo alcista: SMA20 (19.59) por encima de SMA50 (18.34). |
| APA | Energy | 60 | BUY | $45.84 | Tendencia de corto plazo alcista: SMA20 (48.05) por encima de SMA50 (46.22). |
| CLX | Consumer Staples | 57 | HOLD | $108.07 | Tendencia de corto plazo alcista: SMA20 (97.59) por encima de SMA50 (88.96). |
| EOG | Energy | 55 | BUY | $150.28 | Tendencia de corto plazo alcista: SMA20 (155.74) por encima de SMA50 (149.98). |
| CPAY | Financials | 54 | HOLD | $455.43 | Tendencia de corto plazo alcista: SMA20 (430.94) por encima de SMA50 (412.62). |
| MSI | Information Technology | 54 | BUY | $524.16 | Tendencia de corto plazo alcista: SMA20 (506.97) por encima de SMA50 (476.49). |
| LMT | Industrials | 53 | BUY | $577.99 | Tendencia de corto plazo alcista: SMA20 (606.90) por encima de SMA50 (556.90). |
| TSN | Consumer Staples | 53 | HOLD | $64.49 | Tendencia de corto plazo alcista: SMA20 (58.93) por encima de SMA50 (55.12). |
| WST | Health Care | 53 | BUY | $406.95 | Tendencia de corto plazo alcista: SMA20 (406.49) por encima de SMA50 (384.45). |
| EW | Health Care | 52 | BUY | $105.33 | Tendencia de corto plazo alcista: SMA20 (98.75) por encima de SMA50 (91.53). |
| TSCO | Consumer Discretionary | 52 | HOLD | $39.12 | Tendencia de corto plazo alcista: SMA20 (35.62) por encima de SMA50 (33.81). |
| LH | Health Care | 51 | BUY | $370.13 | Tendencia de corto plazo alcista: SMA20 (359.27) por encima de SMA50 (332.40). |
| SO | Utilities | 51 | BUY | $94.35 | Tendencia de corto plazo alcista: SMA20 (92.71) por encima de SMA50 (88.35). |
| STE | Health Care | 51 | BUY | $259.27 | Tendencia de corto plazo alcista: SMA20 (244.84) por encima de SMA50 (225.68). |
| MAR | Consumer Discretionary | 38 | BUY | $426.37 | Tendencia de corto plazo alcista: SMA20 (412.72) por encima de SMA50 (380.37). |
| VEEV | Health Care | 36 | BUY | $278.82 | Tendencia de corto plazo alcista: SMA20 (307.01) por encima de SMA50 (292.74). |
| TMO | Health Care | 31 | HOLD | $690.06 | Tendencia de corto plazo alcista: SMA20 (696.14) por encima de SMA50 (675.51). |
| ISRG | Health Care | 5 | HOLD | $425.16 | Tendencia de corto plazo alcista: SMA20 (446.83) por encima de SMA50 (422.06). |
| NOW | Information Technology | -65 | SELL | $90.64 | Tendencia de corto plazo bajista: SMA20 (115.66) por debajo de SMA50 (129.62). |
| XYL | Industrials | -65 | SELL | $95.32 | Tendencia de corto plazo bajista: SMA20 (97.41) por debajo de SMA50 (101.55). |
| DELL | Information Technology | -66 | SELL | $313.86 | Tendencia de corto plazo bajista: SMA20 (390.91) por debajo de SMA50 (480.36). |
| HOOD | Financials | -66 | SELL | $69.39 | Tendencia de corto plazo bajista: SMA20 (84.12) por debajo de SMA50 (100.37). |
| SMCI | Information Technology | -66 | SELL | $24.51 | Tendencia de corto plazo bajista: SMA20 (29.96) por debajo de SMA50 (35.64). |
| WDC | Information Technology | -66 | SELL | $286.39 | Tendencia de corto plazo bajista: SMA20 (324.19) por debajo de SMA50 (380.19). |
| MU | Information Technology | -68 | SELL | $699.72 | Tendencia de corto plazo bajista: SMA20 (808.83) por debajo de SMA50 (925.43). |
| ALB | Materials | -69 | SELL | $86.64 | Tendencia de corto plazo bajista: SMA20 (93.70) por debajo de SMA50 (101.17). |
| GLW | Information Technology | -69 | SELL | $107.72 | Tendencia de corto plazo bajista: SMA20 (118.14) por debajo de SMA50 (137.84). |
| SKYD | Communication Services | -70 | SELL | $6.74 | Tendencia de corto plazo bajista: SMA20 (7.78) por debajo de SMA50 (8.76). |
| BE | Industrials | -72 | SELL | $170.45 | Tendencia de corto plazo bajista: SMA20 (197.12) por debajo de SMA50 (238.49). |
| DASH | Consumer Discretionary | -73 | SELL | $168.34 | Tendencia de corto plazo bajista: SMA20 (177.40) por debajo de SMA50 (186.03). |
| NFLX | Communication Services | -75 | SELL | $59.89 | Tendencia de corto plazo bajista: SMA20 (63.17) por debajo de SMA50 (68.17). |
| MOS | Materials | -75 | SELL | $19.86 | Tendencia de corto plazo bajista: SMA20 (20.22) por debajo de SMA50 (21.16). |
| ARE | Real Estate | -78 | SELL | $42.31 | Tendencia de corto plazo bajista: SMA20 (43.21) por debajo de SMA50 (45.75). |

#### Detalle de razonamiento (señales destacadas)

**CRL** (score 65, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (344.95) por encima de SMA50 (314.12).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.0%.
  - RSI 36: zona neutral.
**VTRS** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (19.59) por encima de SMA50 (18.34).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.2%.
  - RSI 66: zona neutral.
**APA** (score 60, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (48.05) por encima de SMA50 (46.22).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.0%.
  - RSI 35: zona neutral.
**CLX** (score 57, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (97.59) por encima de SMA50 (88.96).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.0%.
  - RSI 85: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 85 >= 80): se espera una corrección antes de entrar.
**EOG** (score 55, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (155.74) por encima de SMA50 (149.98).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.2%.
  - RSI 37: zona neutral.
**CPAY** (score 54, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (430.94) por encima de SMA50 (412.62).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.8%.
  - RSI 80: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 80 >= 80): se espera una corrección antes de entrar.
**MSI** (score 54, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (506.97) por encima de SMA50 (476.49).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.5%.
  - RSI 71: sobrecompra, riesgo de corrección.
**LMT** (score 53, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (606.90) por encima de SMA50 (556.90).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -2.9%.
  - RSI 31: zona neutral.
**TSN** (score 53, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (58.93) por encima de SMA50 (55.12).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.4%.
  - RSI 82: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 82 >= 80): se espera una corrección antes de entrar.
**WST** (score 53, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (406.49) por encima de SMA50 (384.45).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -0.4%.
  - RSI 43: zona neutral.
**EW** (score 52, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (98.75) por encima de SMA50 (91.53).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.0%.
  - RSI 76: sobrecompra, riesgo de corrección.
**TSCO** (score 52, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (35.62) por encima de SMA50 (33.81).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.9%.
  - RSI 82: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 82 >= 80): se espera una corrección antes de entrar.
**LH** (score 51, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (359.27) por encima de SMA50 (332.40).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 0.6%.
  - RSI 52: zona neutral.
**SO** (score 51, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (92.71) por encima de SMA50 (88.35).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.1%.
  - RSI 59: zona neutral.
**STE** (score 51, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (244.84) por encima de SMA50 (225.68).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.6%.
  - RSI 71: sobrecompra, riesgo de corrección.
**MAR** (score 38, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (412.72) por encima de SMA50 (380.37).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 0.4%.
  - RSI 71: sobrecompra, riesgo de corrección.
**VEEV** (score 36, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (307.01) por encima de SMA50 (292.74).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -10.2%.
  - RSI 22: sobreventa, posible rebote.
**TMO** (score 31, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (696.14) por encima de SMA50 (675.51).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -2.3%.
  - RSI 44: zona neutral.
**ISRG** (score 5, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (446.83) por encima de SMA50 (422.06).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.8%.
  - RSI 42: zona neutral.
**NOW** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (115.66) por debajo de SMA50 (129.62).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -16.7%.
  - RSI 25: sobreventa, posible rebote.
**XYL** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (97.41) por debajo de SMA50 (101.55).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -5.7%.
  - RSI 59: zona neutral.
**DELL** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (390.91) por debajo de SMA50 (480.36).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -15.7%.
  - RSI 26: sobreventa, posible rebote.
**HOOD** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (84.12) por debajo de SMA50 (100.37).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -20.6%.
  - RSI 26: sobreventa, posible rebote.
**SMCI** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (29.96) por debajo de SMA50 (35.64).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -17.2%.
  - RSI 27: sobreventa, posible rebote.
**WDC** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (324.19) por debajo de SMA50 (380.19).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.6%.
  - RSI 27: sobreventa, posible rebote.
**MU** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (808.83) por debajo de SMA50 (925.43).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.0%.
  - RSI 31: zona neutral.
**ALB** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (93.70) por debajo de SMA50 (101.17).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.8%.
  - RSI 38: zona neutral.
**GLW** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (118.14) por debajo de SMA50 (137.84).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.1%.
  - RSI 36: zona neutral.
**SKYD** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (7.78) por debajo de SMA50 (8.76).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -19.6%.
  - RSI 34: zona neutral.
**BE** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (197.12) por debajo de SMA50 (238.49).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.9%.
  - RSI 36: zona neutral.
**DASH** (score -73, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (177.40) por debajo de SMA50 (186.03).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -15.2%.
  - RSI 43: zona neutral.
**NFLX** (score -75, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (63.17) por debajo de SMA50 (68.17).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.8%.
  - RSI 43: zona neutral.
**MOS** (score -75, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (20.22) por debajo de SMA50 (21.16).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.1%.
  - RSI 59: zona neutral.
**ARE** (score -78, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (43.21) por debajo de SMA50 (45.75).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.0%.
  - RSI 56: zona neutral.

---
_Generado automáticamente el 2026-11-18T20:07:11.363Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

Búsqueda web: no se encontró cobertura publicada del cierre del 2026-11-18. Lo más reciente verificable: el lunes 2026-11-16 el S&P 500 cayó 1,9% (tercera baja seguida) y el Nasdaq 2,5%, liderado por una venta en tecnología con Nvidia a la cabeza. Nuestra cartera combinada cayó -1,37% hoy (core +0,56% acumulado, satellite -5,68% acumulado), consistente con un entorno de volatilidad elevada (VIX 24,88).

### Core (largo plazo)
- **JNJ**: no se encontró noticia de hoy; lo último fue un alza de ~2% el 9-nov (motivo no visible) y la adquisición de Halda Therapeutics. Sin cambios al veredicto; el gatillo de venta por payout ratio >100% (research-notes) sigue vigente y es lo que disparó la alerta.

### Satellite (técnico)
- **VEEV**: sin noticia de hoy. Referencias de noviembre: UCB eligió Veeva Vault CRM (4-nov), BTIG subió objetivo a $360 y UBS a $325 (neutral). Los targets de analistas están por encima del precio actual ($278,82), lo que sería consistente con el caso alcista, aunque la posición está -11,6% — datos de precio de las fuentes eran inconsistentes, tomar con cautela.

### Fuentes
- [Veeva Vault CRM / UCB](https://finviz.com/news/415246/ucb-selects-veeva-vault-crm)
- [How major US stock indexes fared Monday 11/16/2026](https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-monday-11162026-nid16112026/)
- [MarketBeat JNJ news](https://www.marketbeat.com/stocks/NYSE/JNJ/news/)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
