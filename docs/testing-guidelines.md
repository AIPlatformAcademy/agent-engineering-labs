# Estrategia de testing de UniPay

## Propósito

Este documento define cómo deben verificarse los cambios realizados en UniPay.

Los tests constituyen evidencia de que el comportamiento implementado cumple el resultado esperado.

UniPay utiliza:

```text
Vitest
```

para tests unitarios y:

```text
Supertest
```

para probar el comportamiento HTTP de la aplicación.

# Organización

Los tests están organizados de la siguiente manera:

```text
tests/
├── unit/
│   ├── student.service.test.js
│   └── transfer.service.test.js
│
├── integration/
│   ├── students.api.test.js
│   └── transfers.api.test.js
│
└── helpers/
    └── reset-data.js
```

# Tests unitarios

Los tests unitarios validan principalmente comportamiento de los Services.

Ubicación:

```text
tests/unit/
```

Las reglas de negocio implementadas en Services deben estar cubiertas mediante tests unitarios.

Ejemplos de comportamientos que pertenecen a este nivel:

```text
rechazar una transferencia inválida;
validar saldo disponible;
validar límites;
evitar modificaciones de estado ante un error;
registrar correctamente una transferencia válida.
```

Los tests unitarios deben enfocarse en comportamiento observable.

# Tests de integración

Los tests de integración validan el contrato HTTP utilizando la aplicación Express.

Ubicación:

```text
tests/integration/
```

Debe utilizarse Supertest para ejecutar requests contra la aplicación.

Estos tests pueden verificar:

```text
status HTTP;
estructura de la respuesta;
código de error;
creación correcta de recursos;
comportamiento observable de endpoints.
```

# Aislamiento

Los Repositories utilizados por el laboratorio mantienen información en memoria.

Los tests que modifican el estado de la aplicación deben empezar desde un estado conocido.

Utilizar:

```javascript
beforeEach(resetData);
```

cuando corresponda.

El helper:

```text
tests/helpers/reset-data.js
```

restablece estudiantes y transferencias.

Los tests no deben depender del orden de ejecución de otros tests.

# Estrategia para corrección de bugs

Las correcciones de defectos deben seguir este flujo:

```text
INCIDENTE
    ↓
Reproducir
    ↓
TEST FALLA
    ↓
Investigar causa
    ↓
Implementar cambio mínimo
    ↓
TEST PASA
    ↓
Ejecutar suite completa
```

Antes de modificar la implementación de un bug debe existir una prueba que demuestre el comportamiento incorrecto cuando sea viable reproducirlo mediante test automatizado.

# Evidencia de una corrección

Una corrección no se considera validada únicamente porque el código parezca correcto.

Debe existir evidencia mediante tests.

Para un comportamiento rechazado relacionado con una transferencia, verificar según corresponda:

1. que la operación sea rechazada;
2. que se genere el error esperado;
3. que el balance del emisor no cambie;
4. que el balance del receptor no cambie;
5. que no se registre una transferencia completada.

# Regresiones

Después de validar los tests directamente relacionados con un cambio, debe ejecutarse la suite completa.

Comando:

```bash
npm test
```

El objetivo es detectar posibles regresiones sobre comportamiento existente.

# Principios

Los tests deben:

- verificar comportamiento observable;
- ser deterministas;
- estar aislados;
- utilizar nombres que describan el comportamiento esperado;
- incluir casos negativos cuando exista una regla que pueda rechazarse;
- mantener los datos de prueba fáciles de entender.

Los tests no deben:

- depender del orden de ejecución;
- ocultar un fallo para conseguir una suite verde;
- eliminar assertions existentes simplemente para hacer pasar la prueba;
- considerarse exitosos si no fueron ejecutados.

# Definición mínima de terminado

Para una corrección de un incidente:

```text
Defecto reproducido mediante test
        +
Cambio implementado
        +
Test relacionado pasa
        +
Suite completa pasa
        =
Cambio validado
```