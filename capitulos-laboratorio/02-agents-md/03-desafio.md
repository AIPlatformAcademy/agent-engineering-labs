# 03 — Desafío: construye el mapa de UniPay

## 🎯 Tu misión

En la demo utilizamos un `AGENTS.md` pequeño para entender el concepto.

Ahora construirás el mapa completo de UniPay.

Abre:

```text
AGENTS.md
```

y asegúrate de comenzar con el archivo vacío.

# 🧩 El reto

UniPay tiene estas fuentes de conocimiento:

```text
docs/
├── architecture.md
├── business-rules.md
├── api-guidelines.md
├── testing-guidelines.md
├── error-catalog.md
└── tickets/
    └── UL-102-negative-balance-incident.md

openapi.yaml
```

Tu `AGENTS.md` debe ayudar a encontrar conocimiento sobre:

```text
🏗️ Arquitectura

⚙️ Reglas de negocio

⚠️ Errores

🌐 API

🧪 Testing

🎫 Tickets
```

# 💡 ¿Qué debes definir?

Para cada categoría responde únicamente:

```text
¿CUÁNDO consultarla?

¿DÓNDE encontrarla?
```

Ejemplo:

```markdown
### Arquitectura

Consulta:

- `docs/architecture.md`

Cuando necesites comprender:

- La estructura de la aplicación.
- Las responsabilidades entre capas.
- El flujo general del sistema.
- La ubicación adecuada de un cambio.
```

# 🚧 Recuerda

`AGENTS.md` es un mapa.

### ✅ Correcto

```text
Para reglas sobre transferencias consulta:

docs/business-rules.md
```

### ❌ Incorrecto

```text
El límite máximo de una transferencia es PEN 100.
```

La regla real pertenece a:

```text
docs/
```

# 🛠️ Construye tu mapa

Puedes comenzar con:

```markdown
# UniPay Agent Guide

Utiliza este archivo como mapa para descubrir el conocimiento del proyecto.

Consulta únicamente el contexto necesario y amplíalo cuando aparezca una nueva necesidad.

## Mapa de contexto

### Arquitectura

...

### Reglas de negocio

...

### Errores

...

### API

...

### Testing

...

### Tickets

...
```

No copies las respuestas utilizadas en la demo.

Utiliza los documentos del repositorio para completar tu propio mapa.

# 🧪 Prueba tu mapa

No repetiremos los escenarios de la demo.

Ahora comprobaremos otras partes de tu `AGENTS.md`.

## 🌐 Prueba 1 — API

Abre un chat nuevo y ejecuta:

```text
Necesitamos añadir un nuevo enpoint al API UniPay.

Indica únicamente el contexto mínimo que consultarías primero.

No propongas una solución.
```

### 🔎 Busca evidencia

Tu mapa debería permitir localizar:

```text
docs/api-guidelines.md
openapi.yaml
```

## 🧪 Prueba 2 — Testing

Abre un chat nuevo y ejecuta:

```text
Necesitamos validar mediante pruebas un cambio de comportamiento en UniPay.

¿Qué documento consultarías primero para conocer la estrategia de testing del proyecto?

No propongas una solución.
```

### 🔎 Busca evidencia

Tu mapa debería permitir localizar:

```text
docs/testing-guidelines.md
```

## 🎫 Prueba 3 — Tickets

Abre un chat nuevo y ejecuta:

```text
Necesitamos investigar UL-102.

¿Dónde buscarías primero la descripción del incidente?

No investigues ni propongas una solución.
```

### 🔎 Busca evidencia

Tu mapa debería permitir localizar:

```text
docs/tickets/UL-102-negative-balance-incident.md
```

> En esta prueba solo estamos comprobando que el agente pueda localizar el ticket. Todavía no vamos a resolverlo.

# ✅ Reto completado

Tu `AGENTS.md` está listo si:

```text
[ ] Todas las rutas existen.

[ ] Indica CUÁNDO consultar cada fuente.

[ ] Indica DÓNDE encontrar el conocimiento.

[ ] No copia contenido de docs/.

[ ] No repite reglas de copilot-instructions.md.

[ ] Permite empezar con contexto mínimo.

[ ] Permite ampliar contexto cuando aparece una nueva necesidad.
```

# ⭐ Qué debes recordar

```text
AGENTS.md
↓
DÓNDE buscar


PROGRESSIVE DISCLOSURE
↓
CUÁNTO contexto necesito
y CUÁNDO ampliarlo
```

> **Un buen AGENTS.md no contiene todo el conocimiento. Ayuda a encontrar el adecuado cuando se necesita.**

# 🚀 Siguiente nivel

Ya tenemos:

```text
INSTRUCTIONS
↓
CÓMO trabajar


AGENTS.md
↓
DÓNDE buscar


PROGRESSIVE DISCLOSURE
↓
CUÁNTO contexto utilizar
```

Pero todavía dirigimos manualmente cada tarea.

La siguiente pregunta es:

> **¿Podemos convertir estas capacidades en un especialista que elija y ejecute una estrategia completa?**

Continúa con:

```text
03-custom-agent/
```