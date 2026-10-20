# Más allá de acciones: mercados y técnicas — 2026-10-20

> 📚 **Sección educativa.** El motor de trading de este bot opera solo acciones del S&P 500 (satellite) + 10 empresas de calidad (core) — esto es contexto sobre otros mercados y herramientas que existen, para decidir con información, no es asesoría financiera real.

## Otros mercados: precio y momentum

| Categoría | Activo | Precio | Momentum 1m | Momentum 3m |
|---|---|---|---|---|
| Cripto | Bitcoin (`BTC-USD`) | $82491.59 | -1.4% | 27.5% |
| Cripto | Ethereum (`ETH-USD`) | $2434.50 | -9.0% | 27.0% |
| Forex | EUR/USD (`EURUSD=X`) | $1.12 | -2.0% | -1.2% |
| Forex — relevante para Chile | USD/CLP (`USDCLP=X`) | $974.27 | 2.8% | 3.4% |
| Materias primas — diversificado | Canasta amplia de commodities (ETF) (`DBC`) | $33.56 | 3.0% | 12.4% |
| Materias primas — energía | Petróleo WTI (futuro) (`CL=F`) | $98.23 | 2.6% | 13.1% |
| Materias primas — energía | Gas natural (futuro) (`NG=F`) | $3.01 | 6.1% | 2.9% |
| Materias primas — metales | Oro (futuro) (`GC=F`) | $4140.50 | -5.6% | -0.3% |
| Materias primas — metales | Plata (futuro) (`SI=F`) | $57.92 | -12.0% | -3.5% |
| Materias primas — metales | Cobre (futuro) (`HG=F`) | $6.61 | -1.1% | 2.5% |
| Real estate | REITs — bienes raíces EEUU (ETF) (`VNQ`) | $92.31 | -1.6% | -6.8% |
| Renta fija | Bonos del Tesoro EEUU 7-10 años (ETF) (`IEF`) | $90.25 | -1.0% | -3.1% |
| Renta fija | Bonos del Tesoro EEUU 20+ años (ETF) (`TLT`) | $80.13 | -2.0% | -4.0% |

_Futuros de materias primas (`=F`) y pares de forex (`=X`) pueden tener mayor volatilidad y mecánica de apalancamiento distinta a una acción — ver la sección de técnicas abajo. Cripto cotiza 24/7, el resto sigue horario de mercado._

## Técnicas de inversión más allá de comprar y mantener

Cada técnica tiene un nivel de riesgo y un caso de uso típico. "Implementado en el bot" indica si el motor de simulación ya puede ejecutar esto con plata ficticia (y si está activo en producción o todavía en validación).

### 🔴 Venta en corto (short selling) — riesgo ALTO

**Cómo funciona:** Pedís prestadas acciones que no tenés, las vendés al precio actual, y más adelante las recomprás para devolverlas. Ganás si el precio bajó entre la venta y la recompra; perdés si subió. Necesita una cuenta de margen: el bróker exige dejar una fracción del valor de la posición como colateral (Reg T en EEUU: ~50%) y puede forzar el cierre (margin call) si la posición se mueve mucho en contra.

**Ejemplo numérico:** Shorteás 10 acciones a $100 (recibís $1000). Si bajan a $80, recomprás por $800 y ganás $200 menos comisiones. Si en cambio suben a $150, recomprás por $1500 y perdés $500 — el doble de lo que habrías perdido comprando 10 acciones y que cayeran un 50%.

**Riesgos:**
- Pérdida sin techo: una acción puede subir indefinidamente (a diferencia de comprar, donde lo máximo que perdés es el 100% invertido).
- Short squeeze: si muchos shorteistas cubren al mismo tiempo porque el precio sube, la propia carrera por recomprar empuja el precio más arriba todavía.
- Costo de mantener la posición (borrow fee) y tenés que pagar los dividendos que reparta la acción mientras la tengas shorteada.
- Un bróker puede prohibir temporalmente el short selling en una acción (circuit breakers regulatorios) justo cuando más necesitarías cerrar la posición.

**Cuándo lo usa un profesional:** Convicción bajista fuerte sobre un nombre específico (no solo 'el mercado puede bajar'), o para cubrir (hedge) una cartera larga sin vender las posiciones de largo plazo.

**En este bot:** Implementado en el motor del satellite (lib/portfolio.js: shortSell/coverShort, lib/decide.js), con stop obligatorio (no opcional, dado el riesgo sin techo) y tamaño de posición más chico que las compras largas. Apagado en producción (ALLOW_SHORTING_IN_PRODUCTION=false en config.js) hasta validarlo fuera de muestra con validate.js — ver GRADUATION_CRITERIA.md para el resultado.

### 🔴 Opciones: conceptos base (call y put) — riesgo MEDIO-ALTO

**Cómo funciona:** Una opción es un contrato que da el derecho (no la obligación) de comprar (call) o vender (put) 100 acciones a un precio fijo (strike) antes de una fecha (vencimiento). El comprador paga una prima; el vendedor la cobra pero asume la obligación si el comprador ejerce.

**Ejemplo numérico:** Call de AAPL, strike $200, vencimiento en 30 días, prima $3/acción ($300 por el contrato de 100 acciones). Si AAPL sube a $220, el call vale al menos $20/acción — ganaste $17 netos de la prima pagada. Si AAPL se queda en $190, el call vence sin valor y perdés toda la prima ($300).

**Riesgos:**
- Comprar opciones: podés perder el 100% de la prima pagada si el precio no se mueve como esperabas antes del vencimiento — el tiempo juega en contra (decay).
- Vender opciones 'descubiertas' (sin tener el activo subyacente o el colateral): riesgo potencialmente ilimitado, similar o peor al short selling.
- Requiere entender griegas básicas (delta, theta) para no subestimar cuánto valor se pierde solo por el paso del tiempo.

**Cuándo lo usa un profesional:** Base para estrategias más acotadas en riesgo como covered call o protective put (ver abajo) — rara vez se compran/venden opciones sueltas sin un objetivo de hedge o de generar ingreso.

**En este bot:** No implementado todavía. Requiere un modelo de pricing (Black-Scholes con volatilidad histórica, ya que no hay datos gratuitos de cadenas de opciones en vivo) y lógica de vencimiento/ejercicio día por día en el motor de simulación — más trabajo que shorts, queda como próximo paso.

### 🟡 Covered call (venta de call cubierta) — riesgo BAJO-MEDIO

**Cómo funciona:** Tenés 100+ acciones de algo y vendés una call contra ellas. Cobrás la prima ahora mismo. Si el precio se queda por debajo del strike, te quedás con las acciones Y la prima (ingreso extra). Si sube por encima del strike, te las 'llaman' (assignment): vendés tus acciones al strike, perdiendo la suba por encima de ese precio, pero quedándote con la prima.

**Ejemplo numérico:** Tenés 100 acciones de JNJ a $160. Vendés un call strike $170 a 30 días por $2/acción ($200). Si JNJ cierra en $165: te quedás con las acciones y los $200 (ingreso extra de ~1.25% en 30 días). Si cierra en $185: te las llaman a $170 — vendiste $15 más bajo de lo que hubieras podido, pero igual ganaste $10/acción + la prima de $2.

**Riesgos:**
- Limita la ganancia si la acción sube fuerte por encima del strike — 'cap' en el upside.
- No protege de una caída: si la acción se desploma, seguís teniendo toda la pérdida de las acciones, solo amortiguada levemente por la prima cobrada.

**Cuándo lo usa un profesional:** Generar ingreso extra (yield enhancement) sobre posiciones de largo plazo en las que no esperás una suba explosiva en el corto plazo — calza natural con el sleeve core de este bot (acciones con dividendo, buy & hold).

**En este bot:** No implementado todavía (mismo motivo que options-basics: necesita modelo de pricing). Es el candidato más natural para el core (JNJ, PG, KO, XOM, etc. — posiciones que ya se mantienen a largo plazo sin tradearse).

### 🟡 Protective put (compra de put como seguro) — riesgo BAJO-MEDIO

**Cómo funciona:** Tenés acciones y comprás una put sobre ellas como seguro. Si el precio cae por debajo del strike, la put gana valor y compensa gran parte de la pérdida de las acciones. Si el precio sube o se mantiene, la put vence sin valor y perdiste solo la prima — como pagar un seguro que no usaste.

**Ejemplo numérico:** Tenés 100 acciones de XOM a $120. Comprás una put strike $110 a 60 días por $3/acción ($300). Si XOM cae a $95: sin la put perderías $2500; con la put, la put vale al menos $15/acción ($1500), así que la pérdida neta es mucho menor. Si XOM sube a $130, perdiste los $300 de prima, pero tus acciones ganaron $1000.

**Riesgos:**
- Cuesta la prima siempre, se use o no — en mercados que suben la mayoría del tiempo, comprar seguro todos los meses erosiona el retorno.
- Solo protege hasta donde alcance el tamaño/duración del put comprado — no es una garantía permanente.

**Cuándo lo usa un profesional:** Proteger ganancias no realizadas antes de un evento con incertidumbre alta (resultados trimestrales, una decisión regulatoria) sin tener que vender la posición y pagar impuestos por la ganancia.

**En este bot:** No implementado todavía (mismo motivo: necesita modelo de pricing). Candidato natural para posiciones del satellite con ganancia no realizada grande antes de resultados.

---
_Generado automáticamente el 2026-10-20T20:04:32.497Z. Precios: Yahoo Finance (público, retrasado). Las técnicas son contenido educativo estático (investment-techniques.json) — no son recomendaciones de uso, cada una tiene riesgo real de pérdida. No es asesoría financiera real._