# Instrucciones del proyecto UniPay API

API educativa en Node.js + Express para gestionar estudiantes y transferencias de saldo.
El contrato vive en `openapi.yaml` y es la fuente de verdad.

## Arquitectura
- Respeta la arquitectura en capas existente (routes → controllers → services → repositories); la lógica de negocio debe vivir solo en services/*.service.js.

- Mantén los contratos existentes (API, firmas de funciones, esquemas) sin romper la compatibilidad.
- Implementa toda regla de negocio exclusivamente en la capa Service.

- Mantén los Controllers enfocados únicamente en gestionar la entrada y salida HTTP; no incluyas lógica de negocio en ellos.

- Usa los Repositories solo para acceder y modificar datos.

- Conserva los contratos HTTP existentes, salvo que el requerimiento solicite explícitamente modificarlos.

## Testing

- Todo cambio de código debe incluir o actualizar tests (unitarios y/o de integración) que lo cubran.
- Incluye tests automatizados que demuestren el resultado esperado en todo cambio de comportamiento.

## Dependencias
- Evita agregar dependencias (paquetes) innecesarias; justifica cualquier dependencia nueva.

- No introduzcas nuevas dependencias si el cambio puede resolverse con las capacidades existentes del proyecto.

## Planificación
- Presenta un plan antes de modificar código y espera confirmación antes de aplicarlo.

- Al inicio explica brevemente, indica **simple** (≤3 archivos y sin impacto en otras partes del sistema) o **complejo** (>3 archivos o con impacto).

- Antes de modificar código, presenta un plan breve que indique qué vas a cambiar y por qué.

## Reglas de negocio
- Si necesitas implementar una regla de negocio nueva que no esta documentada, pide confirmación antes de implementarla.
- No inventes reglas de negocio, límites, códigos de error ni comportamientos que no estén definidos explícitamente en el proyecto.