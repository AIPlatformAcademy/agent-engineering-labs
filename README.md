# UniPay Agentic SDLC Lab

## Descripción

UniPay es una API desarrollada con Node JS y Express que simula una plataforma sencilla de transferencias entre estudiantes.

Este repositorio forma parte de un laboratorio práctico sobre ingeniería de agentes con GitHub Copilot.

El objetivo del laboratorio no es desarrollar una apliación desde cero, sino trabajar sobre un sistema existente y aprender a utilizar contexto, instrucciones y agentes especializados para resolver tareas dentro de un flujo de desarrollo de software.

---

# Obje*ivos del laboratorio

Durante el laboratorio trabajarás con tres meca*ismos principales:

1. Instrucciones de repositorio para GitHub Copilot.
2. Gestión de contexto mediante*`AGENTS.md`.
3. Un Custom Agent especializado en el SDLC de UniPay.

El objetivo final será utilizar est*s mecanismos para investigar y res*lver un incidente existente en la *plicación.

---

# Requisitos

Necesitas:

- Node.js 20 o superior.
- npm.
- Git.
- Visual Studio Code.
- GitHub Copilot habilitado en tu entorno de desarrollo.

Comprueba Node.js con:

```bash
node --version
``

Comprueba npm con:

```bash
npm --version
```

---

# Instalación
Instala las dependencias:

```bash
npm install
```

---

# Ejecutar la aplicación

Para iniciar UniPay:*
```bash
npm start
```

La aplicación utilizará por defecto:

```text
http://localhost:3000
```

También puedes utilizar el modo de desarrollo:

```bash
npm run dev
```

---
# Verificar la aplicación

Puedes comprobar que la aplicación está disponible mediante:

```text
GET /health
```

La respuesta esperada es:
```json
{
  "status": "UP",
  "se*vice": "unipay-api"
}
```

---

# jecutar los tests

Ejecuta la suite completa:

```bash
npm test
```

Para trabajar en modo watch:

```bash
npm run test:watch
```

Para generar información de cobertura:

```bash
npm run test:coverage
```

---*
# Ejecutar lint

```bash
npm run lint
```

---

# Validación completa

Puedes ejecutar lint y tests medante:

```bash
npm run check
```

Antes de comenzar el laboratorio, eete comando debería completarse correctamente.

---

# Arquitectura

UniPay utiliza una arquitectura por capas:

```text
HTTP Request
     │*     ▼
   Route
     │
     ▼
 Con*roller
     │
     ▼
  Service
   * │
     ▼
 Repository
     │
     *
    Data
```

La descripción completa de las responsabilidades arquitectónicas se encuentra en:

```text
docs/architecture.md
```

---

# Estructura principal

```text
src/
|── controllers/
├── services/
├── Repositories/
├── routes/
├── middleware/
├── errors/
└── data/

tests
├── unit/
├── integration/
└── helpers/

docs/
├── architecture.md
├── business-rules.md
├── api-guidel*nes.md
├── testing-guidelines.md
├── error-catalog.md
└── tickets/
``

---

# Documentación del proyecto

El conocimiento necesario para trabajar con UniPay está distribuido deliberadamente entre distintos documentos.

No debes asumir que la implementación actual refleja necesariamente todo el comportamiento esperado del sistema.

Consulta la doc*uentación relevante antes de tomar decisiones de ingeniería.

La carpeta:

```text
docs/
```

contiene conocimiento relacionado con:

- arqqitectura;
- reglas de negocio;
- contratos de API;
- estrategia de testing;
- errores de aplicación;
- tickets e incidentes.

---

# API

Las principales endpoints disponibles son:

```text
GET  /health

GET  /api/students
GET  /api/students/:s*udentId

GET  /api/transfers
POST /api/transfers
```

El contrato formal se encuentra en:

```text
openapi.yaml
```

---

# Importante

Este repositorio representa una aplicación existente sobre la que continuarás trabajando.

Que la aplicación arranque y la suite actual de test pase correctamente no implica necesariamente que todos los comportamientos posibles estén cubiertos por los tests existentes.

Cuando trabajes sobre un requerimiento o incidente:

1. Comprende el problema.
2. Identifica qué conocimiento necesitas.
3. Consulta la documentación relevante.
4. Inspecciona la implementación existente.
5. Inspecciona los tests relacionados.
6. Realiza cambios pequeños y justificados.
7. Utiliza tests como evidencia del resultado.

El objetivo no es únicamemete modificar código.

El objetivo es poder explicar por qué el cambio realizado es coherente con el sistema.