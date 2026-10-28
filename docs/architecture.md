# Arquitectura de UniPay

## Propósito

Este documento describe la arquitectura de la API UniPay, las responsabilidades de cada capa y las reglas que deben respetarse al realizar cambios en la aplicación.

UniPay utiliza una arquitectura por capas para mantener separadas las responsabilidades relacionadas con HTTP, lógica de negocio y acceso a datos.

## Flujo principal

Las solicitudes HTTP deben seguir el siguiente flujo:

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

Las respuestas recorren el flujo inverso hasta regresar al cliente.

## Estructura de la aplicación

```text
src/
├── app.js
├── server.js
│
├── controllers/
│   ├── student.controller.js
│   └── transfer.controller.js
│
├── services/
│   ├── student.service.js
│   └── transfer.service.js
│
├── repositories/
│   ├── student.repository.js
│   └── transfer.repository.js
│
├── routes/
│   ├── student.routes.js
│   └── transfer.routes.js
│
├── middleware/
│   ├── request-id.js
│   ├── not-found.js
│   └── error-handler.js
│
├── errors/
│   └── application-error.js
│
└── data/
    └── seed.js
```

# Capas

## Routes

Los Routes son responsables exclusivamente de definir los endpoints HTTP y asociarlos con sus Controllers correspondientes.

Ejemplos:

```text
GET  /api/students
GET  /api/students/:studentId
GET  /api/transfers
POST /api/transfers
```

Los Routes pueden:

- definir métodos HTTP;
- definir paths;
- asociar endpoints con Controllers.

Los Routes no deben:

- implementar reglas de negocio;
- validar balances;
- implementar límites de transferencia;
- acceder directamente a datos;
- modificar entidades;
- decidir errores de negocio.

## Controllers

Los Controllers representan la frontera entre HTTP y la lógica de aplicación.

Son responsables de:

- obtener parámetros del request;
- obtener datos del body;
- obtener query parameters;
- invocar Services;
- transformar resultados en respuestas HTTP;
- establecer códigos HTTP de éxito.

Un Controller puede hacer:

```text
HTTP Request
      ↓
Extraer parámetros
      ↓
Invocar Service
      ↓
HTTP Response
```

Los Controllers no deben:

- contener reglas de negocio;
- calcular balances;
- validar límites de transferencia;
- modificar entidades directamente;
- implementar lógica que debería pertenecer a un Service.

## Services

Los Services contienen la lógica de aplicación y las reglas de negocio.

Todas las decisiones relacionadas con comportamiento del dominio deben implementarse en esta capa.

Esto incluye reglas relacionadas con:

- transferencias;
- balances;
- importes;
- límites;
- validaciones;
- estudiantes involucrados en una operación;
- condiciones necesarias para completar una transferencia.

Ejemplo conceptual:

```text
Controller
    ↓
Service
    │
    ├── validar operación
    ├── aplicar reglas del negocio
    ├── coordinar repositorios
    └── devolver resultado
```

Si una nueva regla determina si una transferencia puede o no ejecutarse, esa regla debe implementarse en el Service correspondiente.

## Repositories

Los Repositories proporcionan acceso a los datos utilizados por la aplicación.

Son responsables de:

- consultar entidades;
- guardar entidades;
- actualizar datos;
- restablecer datos utilizados durante testing.

Los Repositories no deben:

- implementar reglas de negocio;
- decidir límites;
- validar transferencias;
- decidir qué operaciones son válidas.

En el laboratorio, los Repositories utilizan almacenamiento en memoria.

No existe una base de datos externa.

## Middleware

Los Middleware gestionan preocupaciones transversales relacionadas con el procesamiento de requests HTTP.

Actualmente UniPay utiliza:

### `request-id.js`

Genera un identificador único para cada solicitud.

Este identificador se utiliza para correlacionar una respuesta o un error con la solicitud que lo originó.

### `not-found.js`

Gestiona solicitudes realizadas a rutas que no existen.

### `error-handler.js`

Centraliza la transformación de errores de aplicación en respuestas HTTP.

## ApplicationError

Los errores conocidos de la aplicación utilizan:

```text
src/errors/application-error.js
```

Un `ApplicationError` contiene:

```text
code
message
statusCode
```

Las reglas de negocio deben generar errores de aplicación cuando una operación no pueda completarse.

El middleware global es responsable de transformar esos errores en respuestas HTTP.

# Principios arquitectónicos

Al modificar UniPay deben respetarse los siguientes principios:

1. Mantener la separación de responsabilidades entre capas.
2. No colocar reglas de negocio en Routes.
3. No colocar reglas de negocio en Controllers.
4. Mantener las reglas del dominio en Services.
5. Mantener el acceso a datos en Repositories.
6. Utilizar el mecanismo centralizado de errores.
7. Evitar introducir nuevas capas si el requerimiento puede resolverse con la arquitectura existente.
8. Evitar modificar componentes no relacionados con el requerimiento.

# Regla para cambios

Antes de implementar un cambio, identificar primero qué tipo de responsabilidad está siendo modificada.

```text
HTTP routing
    ↓
Route

HTTP input/output
    ↓
Controller

Business behaviour
    ↓
Service

Data access
    ↓
Repository

Cross-cutting HTTP concern
    ↓
Middleware
```

La solución debe respetar esta distribución.