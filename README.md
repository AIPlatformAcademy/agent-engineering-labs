# Laboratorio de Ingeniería de Agentes y SDLC con GitHub Copilot

Este repositorio forma parte de un laboratorio práctico guiado sobre Ingeniería de Agentes con GitHub Copilot. En este laboratorio, no se creará una aplicación desde cero, sino que se trabajará sobre un sistema existente para aprender a utilizar contexto, instrucciones y Agentes especializados para resolver tareas dentro de un flujo de desarrollo de software.

En este sentido, **UniPay** es una API desarrollada con Node.js y Express que simula una plataforma sencilla de transferencias entre estudiantes, sirviendo como base para este ejercicio.

## Objetivo

Durante el laboratorio trabajarás con tres mecanismos principales:

1. **Instrucciones** de repositorio para GitHub Copilot.
2. Gestión de contexto mediante `AGENTS.md`.
3. Un **Custom Agent** especializado en el SDLC de **UniPay**.

El objetivo final será utilizar estos mecanismos para investigar y resolver un incidente existente en la aplicación.

## Requisitos

- Node.js 20 o superior
- npm
- Git
- Visual Studio Code
- GitHub Copilot habilitado en tu entorno de desarrollo

Comprueba Node.js con:

```bash
node --version
```

Comprueba npm con:

```bash
npm --version
```

## Instalación

Instala las dependencias:

```bash
npm install
```

## Ejecuta la aplicación

Para iniciar **UniPay**:

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

## Verificar la aplicación

Puedes comprobar que la aplicación está disponible mediante:

```text
GET /health
```

La respuesta esperada es:

```json
{
  "status": "UP",
  "service": "unipay-api"
}
```

## Ejecutar los tests

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

## Ejecutar lint

```bash
npm run lint
```

## Validación completa

Puedes ejecutar lint y tests mediante:

```bash
npm run check
```

Nota: Antes de comenzar el laboratorio, este comando (`npm run check`) debería completarse correctamente.

## Arquitectura

**UniPay** utiliza una arquitectura por capas:

```text
HTTP Request
     │
     ▼
   Route
     │
     ▼
 Controller
     │
     ▼
  Service
     │
     ▼
 Repository
     │
     ▼
    Data
```

La descripción completa la encuentras en **Responsabilidades Arquitectónicas**. [Leer](./docs/architecture.md)

## Estructura principal

```text
src/
├── controllers/
├── services/
├── repositories/
├── routes/
├── middleware/
├── errors/
├── data/
└── tests/
    ├── unit/
    ├── integration/
    └── helpers/

docs/
├── architecture.md
├── business-rules.md
├── api-guidelines.md
├── testing-guidelines.md
├── error-catalog.md
└── tickets/
```

## Documentación del proyecto

El conocimiento necesario para trabajar con UniPay está distribuido deliberadamente entre distintos documentos.

No debes asumir que la implementación actual refleja necesariamente todo el comportamiento esperado del sistema.

Consulta la documentación relevante antes de tomar decisiones de ingeniería.

La carpeta `docs/` contiene conocimiento relacionado con:

- Arquitectura
- Reglas de negocio
- Contratos de API
- Estrategia de testing
- Errores de aplicación
- Tickets e incidentes

## API

Los principales endpoints disponibles son:

```text
GET  /health

GET  /api/students
GET  /api/students/:studentId

GET  /api/transfers
POST /api/transfers
```

El contrato formal se encuentra en:

```text
openapi.yaml
```

## Importante

Este repositorio representa una aplicación existente sobre la que continuarás trabajando. Que la aplicación arranque y la suite actual de tests pase correctamente no implica necesariamente que todos los comportamientos posibles estén cubiertos por los tests existentes.

Cuando trabajes sobre un requerimiento o incidente:

1. Comprende el problema.
2. Identifica qué conocimiento necesitas.
3. Consulta la documentación relevante.
4. Inspecciona la implementación existente.
5. Inspecciona los tests relacionados.
6. Realiza cambios pequeños y justificados.
7. Utiliza tests como evidencia del resultado.

El objetivo no es únicamente modificar código, sino poder explicar por qué el cambio realizado es coherente con el sistema.
