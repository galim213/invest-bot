# Reporte diario de inversión (simulado) — 2026-10-26

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$1019.86**
- P&L acumulado: $19.86 (+1.99%)
- Core (70%, largo plazo): $722.06 (+3.15%) | Satellite (30%, técnico): $297.80 (-0.73%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 18.37 — CALMA (Dentro del rango histórico normal.) Variación 10d: +3.1 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.96 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -1.96 pts — **ESTRÉS**.
- **Índice dólar (DXY)**: 101.99 (variación 10d: -0.19)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $266.35 | $71.82 | 9.9% | $1.82 (+2.59%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $159.94 | $70.77 | 9.8% | $0.77 (+1.10%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $92.71 | $69.99 | 9.7% | $-0.01 (-0.02%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $184.54 | $72.86 | 10.1% | $2.86 (+4.08%) | $1.0300/acción (2026-08-17) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $232.00 | $72.25 | 10.0% | $2.25 (+3.21%) | $1.7800/acción (2026-08-19) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $334.14 | $69.67 | 9.6% | $-0.33 (-0.48%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $532.60 | $69.98 | 9.7% | $-0.02 (-0.02%) | $0.9100/acción (2026-08-20) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $404.22 | $69.53 | 9.6% | $-0.47 (-0.67%) | $0.6700/acción (2026-08-11) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $635.32 | $80.95 | 11.2% | $10.95 (+15.64%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $298.12 | $74.25 | 10.3% | $4.60 (+6.60%) | $1.4200/acción (2026-07-31) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| VEEV | Health Care | 0.226 | $315.43 | $318.21 | $72.00 | 24.2% | $0.63 (+0.88%) |
| ISRG | Health Care | 0.221 | $438.48 | $451.63 | $99.95 | 33.6% | $2.91 (+3.00%) |
| TMO | Health Care | 0.114 | $690.08 | $684.84 | $78.38 | 26.3% | $-0.60 (-0.76%) |
| CRL | Health Care | 0.062 | $339.66 | $357.35 | $22.20 | 7.5% | $1.10 (+5.21%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $394.75 | $10.51 | 3.5% | $-0.05 (-0.52%) |

### Concentración y correlación (informativo)

- Posiciones: 5 · N efectivo por peso (1/HHI): **3.65**
- Correlación promedio entre posiciones (retornos diarios, últimas 60 ruedas): **0.18** → N efectivo ajustado por correlación: **2.49**
- Por sector: Health Care 96% · Consumer Discretionary 4%

_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| SWKS | Information Technology | 65 | BUY | $83.34 | Tendencia de corto plazo alcista: SMA20 (81.44) por encima de SMA50 (78.91). |
| CRL | Health Care | 62 | BUY | $357.35 | Tendencia de corto plazo alcista: SMA20 (309.79) por encima de SMA50 (295.49). |
| TXN | Information Technology | 62 | BUY | $298.12 | Tendencia de corto plazo alcista: SMA20 (284.83) por encima de SMA50 (272.78). |
| ACN | Information Technology | 60 | HOLD | $247.29 | Tendencia de corto plazo alcista: SMA20 (216.40) por encima de SMA50 (196.03). |
| HAS | Consumer Discretionary | 57 | HOLD | $117.96 | Tendencia de corto plazo alcista: SMA20 (98.67) por encima de SMA50 (94.35). |
| ULTA | Consumer Discretionary | 57 | BUY | $625.33 | Tendencia de corto plazo alcista: SMA20 (578.65) por encima de SMA50 (555.21). |
| MAR | Consumer Discretionary | 56 | BUY | $394.75 | Tendencia de corto plazo alcista: SMA20 (374.62) por encima de SMA50 (357.10). |
| VEEV | Health Care | 56 | BUY | $318.21 | Tendencia de corto plazo alcista: SMA20 (299.39) por encima de SMA50 (278.42). |
| ADI | Information Technology | 55 | BUY | $407.93 | Tendencia de corto plazo alcista: SMA20 (404.23) por encima de SMA50 (384.42). |
| IT | Information Technology | 55 | HOLD | $231.21 | Tendencia de corto plazo alcista: SMA20 (201.87) por encima de SMA50 (193.36). |
| APA | Energy | 54 | HOLD | $51.66 | Tendencia de corto plazo alcista: SMA20 (46.54) por encima de SMA50 (44.65). |
| CRWD | Information Technology | 53 | BUY | $261.83 | Tendencia de corto plazo alcista: SMA20 (255.81) por encima de SMA50 (235.70). |
| NXPI | Information Technology | 53 | BUY | $245.83 | Tendencia de corto plazo alcista: SMA20 (234.92) por encima de SMA50 (230.14). |
| NOW | Information Technology | 53 | BUY | $158.19 | Tendencia de corto plazo alcista: SMA20 (143.01) por encima de SMA50 (138.17). |
| BIIB | Health Care | 52 | BUY | $252.26 | Tendencia de corto plazo alcista: SMA20 (232.10) por encima de SMA50 (224.23). |
| ISRG | Health Care | 50 | BUY | $451.63 | Tendencia de corto plazo alcista: SMA20 (422.44) por encima de SMA50 (397.20). |
| TMO | Health Care | 45 | BUY | $684.84 | Tendencia de corto plazo alcista: SMA20 (672.42) por encima de SMA50 (646.70). |
| VRT | Industrials | -60 | SELL | $199.91 | Tendencia de corto plazo bajista: SMA20 (228.00) por debajo de SMA50 (245.80). |
| T | Communication Services | -61 | SELL | $20.84 | Tendencia de corto plazo bajista: SMA20 (23.19) por debajo de SMA50 (24.45). |
| CBRE | Real Estate | -61 | SELL | $122.89 | Tendencia de corto plazo bajista: SMA20 (130.19) por debajo de SMA50 (138.40). |
| CMG | Consumer Discretionary | -61 | SELL | $28.42 | Tendencia de corto plazo bajista: SMA20 (30.44) por debajo de SMA50 (33.42). |
| NEM | Materials | -62 | SELL | $110.38 | Tendencia de corto plazo bajista: SMA20 (115.29) por debajo de SMA50 (121.45). |
| PCG | Utilities | -62 | SELL | $12.84 | Tendencia de corto plazo bajista: SMA20 (12.80) por debajo de SMA50 (13.98). |
| FICO | Information Technology | -64 | SELL | $707.11 | Tendencia de corto plazo bajista: SMA20 (721.03) por debajo de SMA50 (904.66). |
| HWM | Industrials | -64 | SELL | $194.35 | Tendencia de corto plazo bajista: SMA20 (217.89) por debajo de SMA50 (235.97). |
| ORCL | Information Technology | -64 | SELL | $126.06 | Tendencia de corto plazo bajista: SMA20 (135.03) por debajo de SMA50 (141.99). |
| STX | Information Technology | -65 | SELL | $644.21 | Tendencia de corto plazo bajista: SMA20 (759.10) por debajo de SMA50 (816.13). |
| WDC | Information Technology | -65 | SELL | $356.13 | Tendencia de corto plazo bajista: SMA20 (390.19) por debajo de SMA50 (429.90). |
| DASH | Consumer Discretionary | -68 | SELL | $168.44 | Tendencia de corto plazo bajista: SMA20 (188.19) por debajo de SMA50 (201.31). |
| SKYD | Communication Services | -69 | SELL | $7.48 | Tendencia de corto plazo bajista: SMA20 (8.51) por debajo de SMA50 (9.71). |
| NFLX | Communication Services | -71 | SELL | $63.90 | Tendencia de corto plazo bajista: SMA20 (68.89) por debajo de SMA50 (73.98). |
| NRG | Utilities | -72 | SELL | $93.63 | Tendencia de corto plazo bajista: SMA20 (100.33) por debajo de SMA50 (106.32). |

#### Detalle de razonamiento (señales destacadas)

**SWKS** (score 65, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (81.44) por encima de SMA50 (78.91).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.6%.
  - RSI 52: zona neutral.
**CRL** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (309.79) por encima de SMA50 (295.49).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 18.4%.
  - RSI 78: sobrecompra, riesgo de corrección.
**TXN** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (284.83) por encima de SMA50 (272.78).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.8%.
  - RSI 51: zona neutral.
**ACN** (score 60, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (216.40) por encima de SMA50 (196.03).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 16.0%.
  - RSI 85: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 85 >= 80): se espera una corrección antes de entrar.
**HAS** (score 57, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (98.67) por encima de SMA50 (94.35).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 24.5%.
  - RSI 96: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 96 >= 80): se espera una corrección antes de entrar.
**ULTA** (score 57, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (578.65) por encima de SMA50 (555.21).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.2%.
  - RSI 77: sobrecompra, riesgo de corrección.
**MAR** (score 56, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (374.62) por encima de SMA50 (357.10).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.9%.
  - RSI 74: sobrecompra, riesgo de corrección.
**VEEV** (score 56, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (299.39) por encima de SMA50 (278.42).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.6%.
  - RSI 79: sobrecompra, riesgo de corrección.
**ADI** (score 55, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (404.23) por encima de SMA50 (384.42).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 0.4%.
  - RSI 44: zona neutral.
**IT** (score 55, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (201.87) por encima de SMA50 (193.36).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 19.1%.
  - RSI 83: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 83 >= 80): se espera una corrección antes de entrar.
**APA** (score 54, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (46.54) por encima de SMA50 (44.65).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.8%.
  - RSI 86: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 86 >= 80): se espera una corrección antes de entrar.
**CRWD** (score 53, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (255.81) por encima de SMA50 (235.70).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -0.4%.
  - RSI 43: zona neutral.
**NXPI** (score 53, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (234.92) por encima de SMA50 (230.14).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.2%.
  - RSI 51: zona neutral.
**NOW** (score 53, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (143.01) por encima de SMA50 (138.17).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.7%.
  - RSI 75: sobrecompra, riesgo de corrección.
**BIIB** (score 52, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (232.10) por encima de SMA50 (224.23).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.0%.
  - RSI 77: sobrecompra, riesgo de corrección.
**ISRG** (score 50, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (422.44) por encima de SMA50 (397.20).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.6%.
  - RSI 78: sobrecompra, riesgo de corrección.
**TMO** (score 45, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (672.42) por encima de SMA50 (646.70).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.4%.
  - RSI 61: zona neutral.
**VRT** (score -60, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (228.00) por debajo de SMA50 (245.80).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -16.5%.
  - RSI 17: sobreventa, posible rebote.
**T** (score -61, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (23.19) por debajo de SMA50 (24.45).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.3%.
  - RSI 31: zona neutral.
**CBRE** (score -61, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (130.19) por debajo de SMA50 (138.40).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -6.0%.
  - RSI 39: zona neutral.
**CMG** (score -61, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (30.44) por debajo de SMA50 (33.42).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -6.5%.
  - RSI 36: zona neutral.
**NEM** (score -62, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (115.29) por debajo de SMA50 (121.45).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -5.8%.
  - RSI 41: zona neutral.
**PCG** (score -62, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (12.80) por debajo de SMA50 (13.98).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -2.4%.
  - RSI 57: zona neutral.
**FICO** (score -64, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (721.03) por debajo de SMA50 (904.66).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -4.4%.
  - RSI 51: zona neutral.
**HWM** (score -64, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (217.89) por debajo de SMA50 (235.97).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.0%.
  - RSI 23: sobreventa, posible rebote.
**ORCL** (score -64, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (135.03) por debajo de SMA50 (141.99).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.2%.
  - RSI 34: zona neutral.
**STX** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (759.10) por debajo de SMA50 (816.13).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.5%.
  - RSI 25: sobreventa, posible rebote.
**WDC** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (390.19) por debajo de SMA50 (429.90).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.0%.
  - RSI 35: zona neutral.
**DASH** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (188.19) por debajo de SMA50 (201.31).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.3%.
  - RSI 31: zona neutral.
**SKYD** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (8.51) por debajo de SMA50 (9.71).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -18.3%.
  - RSI 32: zona neutral.
**NFLX** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (68.89) por debajo de SMA50 (73.98).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.5%.
  - RSI 38: zona neutral.
**NRG** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (100.33) por debajo de SMA50 (106.32).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.0%.
  - RSI 37: zona neutral.

---
_Generado automáticamente el 2026-10-26T20:07:55.513Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

No se pudo obtener un análisis cualitativo confiable de hoy (2026-10-26): las búsquedas web no devolvieron cobertura fechada del cierre de S&P 500 / Nasdaq ni noticias verificables de hoy para los tickers del core o del satellite (los resultados eran de otras fechas o sin fecha). Además, las fuentes de datos de research notes (Yahoo Finance) y 13F estuvieron inalcanzables en esta corrida, por lo que research-notes-latest quedó vacío (0 notas). Por eso no se atribuye ninguna noticia a ningún ticker.

### Core (largo plazo)
Sin noticias relevantes verificadas.

### Satellite (técnico)
Sin noticias relevantes verificadas. Hoy no hubo trades; las posiciones (VEEV, ISRG, TMO, CRL, MAR) siguen abiertas.

### Fuentes
- [Búsqueda de cierre de mercado — sin resultado fechado para hoy](https://finance.yahoo.com/news/stock-market-today-stocks-sag-142325638.html)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
