# Research Log

Bitácora fechada de la rutina de investigación y mejora continua: qué se investigó cada día, qué se decidió y por qué.

## 2026-10-21

**Estado revisado:** no existía este log (se crea hoy). `data/research-notes-history.json` todavía no existe (el track record se introdujo el 2026-10-20), así que no hay 30+ días para evaluar: no se corrió `track-record.js`. Re-chequear recién a fines de noviembre de 2026.

**Idea elegida:** ampliar cobertura de tests a un archivo de `lib/` sin tests — `lib/sleeves.js` (core 70%: compra inicial buy&hold y acreditación de dividendos, la parte que nunca tradea y donde un bug de doble pago de dividendos inflaría silenciosamente el retorno).

**Decisión:** implementado. `test/sleeves.test.js` (6 tests, `node:test` sin dependencias, mismo estilo que el resto): compra en partes iguales, omisión de tickers sin precio, idempotencia de `initCoreIfEmpty`, no pagar dividendos anteriores a la apertura ni duplicarlos entre corridas, ignorar dividendos con fecha futura. `npm test`: 77/77 en verde. No se tocó lógica de trading ni ningún archivo de `lib/`, por lo que no aplica el gate de `validate.js`. Sin cambios visibles en dashboard ni reportes.

**Fuentes:** cambio puramente de cobertura de tests sobre código existente; no se consultó fuente externa nueva (documentación de [node:test](https://nodejs.org/api/test.html) ya es la base de los tests del repo).

**Pendiente para próximos días:** tests para `decide.js`/`simulate.js`/`researchNote.js`/`marketIntel.js` (falta cobertura de `simulate.js`, `researchNote.js`, `marketIntel.js`, `macroRisk.js`); investigar concentración sectorial del satellite.

## 2026-10-22

**Estado revisado:** `data/research-notes-history.json` sigue sin existir (track record introducido el 2026-10-20) → no hay 30+ días; no se corrió `track-record.js`. Re-chequear a fines de noviembre de 2026.

**Idea elegida:** cobertura de tests para `lib/macroRisk.js` (panel macro: VIX, pendiente de curva 10y-3m, proxy de spread de crédito HYG vs LQD, tendencia del dólar), que no tenía tests.

**Decisión:** implementado. `test/macroRisk.test.js` (7 tests, `node:test`, sin dependencias; `marketData.fetchAll` se stubbea, sin red): umbrales de `classifyVix` (20/30/40), curva invertida vs normal, panel sin datos devuelve nulls sin inventar señales, estrés de crédito (HYG rinde >1.5% menos que LQD en 20d), caso sin estrés y caso con pocas velas, tendencia/clasificación del VIX. `npm test`: 121/121 en verde. No se tocó ningún archivo de `lib/` ni lógica de trading → no aplica el gate de `validate.js`. Sin cambios visibles en dashboard ni reportes.

**Fuentes:** cambio de cobertura sobre código existente; no se consultó fuente externa nueva.

**Pendiente:** tests para `simulate.js`, `marketIntel.js`; investigar concentración sectorial del satellite (idea (a)), con fuente antes de implementar.

## 2026-10-23

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no hay 30+ días de track record; no se corrió `track-record.js`. Re-chequear a fines de noviembre de 2026.

**Idea elegida:** cobertura de tests para `lib/simulate.js` (`runBacktest`, el motor compartido por `backtest.js` y `validate.js`, hasta hoy sin tests).

**Decisión:** implementado. `test/simulate.test.js` (4 tests, `node:test`, sin red ni dependencias): sin tickers deja el capital intacto y sin trades; período y snapshots correctos; retorno del benchmark (100→120 = 20%); benchmark null si no se pasa; consistencia cerrados = ganadores + perdedores en una serie sintética. `npm test`: 142/142 en verde. No se tocó ningún archivo de `lib/` ni lógica de trading → no aplica el gate de `validate.js`. Sin cambios en dashboard ni reportes.

**Fuentes:** cambio de cobertura sobre código existente; no se consultó fuente externa nueva.

**Pendiente:** tests para `marketIntel.js`; investigar concentración sectorial del satellite (idea (a)) con fuente antes de implementar.

## 2026-10-24

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no hay 30+ días de track record; no se corrió `track-record.js`. Re-chequear a fines de noviembre de 2026.

**Idea elegida:** cobertura de tests para `lib/marketIntel.js` (rotación sectorial y generación de los markdown de informe de mercado y research notes), sin tests hasta hoy.

**Decisión:** implementado. `test/marketIntel.test.js` (4 tests, `node:test`, sin red ni dependencias; `marketData.fetchAll` se stubbea): ranking de `buildSectorRotation` por momentum 1m descendente, momentum null con pocas velas (va al final), formato de nulos (`—`) y agrupado por sector en `buildMarketIntelMarkdown`, y veredictos/aviso sin Yahoo/caso sin señales en `buildResearchNotesMarkdown`. `npm test`: 152/152 en verde. No se tocó ningún archivo de `lib/` ni lógica de trading → no aplica el gate de `validate.js`. Sin cambios en dashboard ni reportes.

**Fuentes:** cambio de cobertura sobre código existente; no se consultó fuente externa nueva.

**Pendiente:** investigar concentración/correlación sectorial del satellite (idea (a)) con fuente antes de implementar; tests para `decide.js` si faltan casos.

## 2026-10-25

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no hay 30+ días de track record; no se corrió `track-record.js`. Re-chequear a fines de noviembre de 2026.

**Idea elegida:** idea (a), solo como métrica INFORMATIVA — concentración/correlación de las posiciones abiertas del satellite. Motivo: el satellite hoy está ~96% en Health Care (VEEV, ISRG, TMO, CRL + MAR) y el reporte no lo mostraba de forma resumida. No se intenta "corregirlo": tope sectorial, menor `maxPositionPct` y shorts ya se descartaron con números (GRADUATION_CRITERIA.md, puntos 4-5).

**Decisión:** implementado. `lib/concentration.js` (+ `test/concentration.test.js`, 5 tests): peso por sector, N efectivo por peso (1/HHI), correlación promedio entre pares (retornos diarios, 60 ruedas) y N efectivo ajustado por correlación `N/(1+(N−1)ρ)` (aproximación para activos equiponderados con ρ medio; ρ<0 se trunca a 0; esta fórmula es de conocimiento general, no de las fuentes citadas). Se muestra como sección "Concentración y correlación (informativo)" bajo la tabla del satellite en el reporte diario y como `satellite.concentration` en el JSON. Smoke test con `node run-daily.js`: 5 posiciones, N efectivo 3.64, correlación media 0.18, N ajustado 2.47, Health Care 96%. `npm test`: 164/164 en verde. No toca lógica de decisión → no aplica `validate.js`. Los artefactos generados por el smoke test no se comitearon (los genera la rutina de apertura/cierre).

**Dashboard/reportes:** el reporte diario (md y `latest.json`) gana la sección/campo `concentration`; el Artifact del dashboard puede leerlo opcionalmente, no es necesario para que siga funcionando.

**Fuentes:** [HHI & Effective Positions (fffinstill)](https://fffinstill.com/learning/concepts/herfindahl-hirschman-index-hhi-effective-positions) (N efectivo = 1/Σw², ejemplo 40/25/15/12/8 → 3.76, usado en el test; nota que HHI ignora correlación); [The Diversification Ratio (Portfolio Optimizer)](https://portfoliooptimizer.io/blog/the-diversification-ratio-measuring-portfolio-diversification) (la diversificación cae al subir concentración o correlación media); [Concentration is up, diversification isn't gone (SSGA)](https://www.ssga.com/us/en/individual/insights/concentration-is-up-diversification-isnt-gone) (uso de N efectivo como medida de concentración).

**Pendiente:** idea de diversificar el CORE (no el satellite) sigue sin probarse; revisar track record a fines de noviembre.

## 2026-10-26

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no hay 30+ días de track record; no se corrió `track-record.js`. Re-chequear a fines de noviembre de 2026.

**Idea elegida:** cobertura de tests para `lib/fundamentalScore.js` (score de calidad por percentiles y tilt al score técnico), que alimenta la lógica de decisión y no tenía tests.

**Decisión:** implementado. `test/fundamentalScore.test.js` (5 tests, `node:test`, sin red): extremos 100/0 y orden good > mid > bad, P/E negativo = percentil 0, renormalización con factores faltantes y null sin datos, ticker único = 50, tilt lineal (`qualityScoreToTilt`). `npm test`: 177/177 en verde. No se modificó ningún archivo de `lib/` ni lógica de trading → no aplica `validate.js`. Sin cambios en dashboard ni reportes.

**Fuentes:** cambio de cobertura sobre código existente; no se consultó fuente externa nueva.

**Pendiente:** tests para `midcapWatch.js`/`pointInTime.js`; revisar track record a fines de noviembre; diversificación del CORE sin probar.

## 2026-10-27

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no hay 30+ días de track record; no se corrió `track-record.js`. Re-chequear a fines de noviembre de 2026.

**Idea elegida:** cobertura de tests para `lib/pointInTime.js` (membresía histórica del S&P 500 usada por backtest/validate para evitar sesgo de look-ahead), sin tests hasta hoy.

**Decisión:** implementado. `test/pointInTime.test.js` (3 tests, `node:test`, sin red): `normalizeTicker`, universo en la primera fecha de cobertura (Set con >100 tickers) y fallback a `WATCHLIST` para fechas fuera de cobertura (antes y después). `npm test` en verde. No se tocó ningún archivo de `lib/` ni lógica de trading → no aplica `validate.js`. Sin cambios en dashboard ni reportes.

**Fuentes:** cambio de cobertura sobre código existente; no se consultó fuente externa nueva.

**Pendiente:** tests para `midcapWatch.js`; revisar track record a fines de noviembre; diversificación del CORE sin probar.
