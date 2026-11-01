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

## Planificación y autorización

- En sesiones interactivas de IDE, presenta el plan y espera confirmación antes de modificar código.

- En ejecuciones iniciadas mediante asignación de un Issue a Copilot Cloud Agent, considera la asignación como autorización para implementar dentro del alcance y los criterios de aceptación del Issue.

- En ejecuciones automatizadas, documenta brevemente el plan y continúa con la implementación sin esperar otra confirmación.

- Nunca inventes reglas de negocio. Si falta información necesaria, documenta el bloqueo y solicita aclaraciones.

## Reglas de negocio
- Si necesitas implementar una regla de negocio nueva que no esta documentada, pide confirmación antes de implementarla.
- No inventes reglas de negocio, límites, códigos de error ni comportamientos que no estén definidos explícitamente en el proyecto.