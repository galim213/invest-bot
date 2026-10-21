# Research Log

Bitácora fechada de la rutina de investigación y mejora continua: qué se investigó cada día, qué se decidió y por qué.

## 2026-10-21

**Estado revisado:** no existía este log (se crea hoy). `data/research-notes-history.json` todavía no existe (el track record se introdujo el 2026-10-20), así que no hay 30+ días para evaluar: no se corrió `track-record.js`. Re-chequear recién a fines de noviembre de 2026.

**Idea elegida:** ampliar cobertura de tests a un archivo de `lib/` sin tests — `lib/sleeves.js` (core 70%: compra inicial buy&hold y acreditación de dividendos, la parte que nunca tradea y donde un bug de doble pago de dividendos inflaría silenciosamente el retorno).

**Decisión:** implementado. `test/sleeves.test.js` (6 tests, `node:test` sin dependencias, mismo estilo que el resto): compra en partes iguales, omisión de tickers sin precio, idempotencia de `initCoreIfEmpty`, no pagar dividendos anteriores a la apertura ni duplicarlos entre corridas, ignorar dividendos con fecha futura. `npm test`: 77/77 en verde. No se tocó lógica de trading ni ningún archivo de `lib/`, por lo que no aplica el gate de `validate.js`. Sin cambios visibles en dashboard ni reportes.

**Fuentes:** cambio puramente de cobertura de tests sobre código existente; no se consultó fuente externa nueva (documentación de [node:test](https://nodejs.org/api/test.html) ya es la base de los tests del repo).

**Pendiente para próximos días:** tests para `decide.js`/`simulate.js`/`researchNote.js`/`marketIntel.js` (falta cobertura de `simulate.js`, `researchNote.js`, `marketIntel.js`, `macroRisk.js`); investigar concentración sectorial del satellite.
