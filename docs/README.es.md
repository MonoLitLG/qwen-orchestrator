> 🌐 Versión en Español | [Read in English](../README.md)

# Qwen Orchestrator — Equipo de Desarrollo AI Multi-Agente para Qwen Code

**[English](../README.md)** · **[Español](README.es.md)** · **[中文](README.zh.md)** · **[日本語](README.ja.md)** · **[한국어](README.ko.md)** · **[Português](README.pt.md)** · **[Français](README.fr.md)** · **[العربية](README.ar.md)**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version: 0.0.1](https://img.shields.io/badge/version-0.0.1-green.svg)](package.json)
[![Qwen Code Extension](https://img.shields.io/badge/Qwen%20Code-Extension-orange.svg)](https://github.com/QwenLM/qwen-code)
[![Agents: 22](https://img.shields.io/badge/agents-22-blue.svg)](#equipo-de-agentes-22-agentes-especializados)
[![Skills: 22](https://img.shields.io/badge/skills-22-purple.svg)](#habilidades-22-habilidades-profesionales)

> 🤖 **La extensión de orquestación AI multi-agente de nivel empresarial exclusivamente para [Qwen Code CLI](https://github.com/QwenLM/qwen-code)**
>
> Transforma tu asistente de programación AI en un **departamento completo de desarrollo de software** — con 22 agentes especializados, 22 habilidades profesionales, 6 comandos slash, memoria persistente e integración de herramientas MCP.
>
> **Autor:** [Omar-Obando](https://github.com/Omar-Obando) · **Licencia:** MIT · **Versión:** 0.0.1

---

## ⚡ ¿Qué es Qwen Orchestrator?

**Qwen Orchestrator** es una extensión poderosa construida exclusivamente para **[Qwen Code](https://github.com/QwenLM/qwen-code)** — la CLI de programación AI de código abierto de Alibaba. Transforma un solo asistente de programación AI en un **equipo coordinado de 22 agentes AI especializados** que trabajan juntos como un departamento profesional de desarrollo de software.

### ¿Por qué Qwen Orchestrator?

Imagina tener todo un equipo de ingeniería al alcance de tu mano: un **Commander** que orquesta, un **Planner** que diseña la arquitectura, **Desarrolladores Frontend y Backend** que programan en paralelo, un **Reviewer** que protege la calidad, un **Ingeniero QA** que prueba, un **Ingeniero de Ciberseguridad** que audita vulnerabilidades, un **Ingeniero DevOps** que despliega — y 14 especialistas más, todos coordinados automáticamente.

**Ninguna otra extensión de programación AI ofrece este nivel de orquestación multi-agente profesional.**

### Construido Exclusivamente Para

<table>
<tr>
<td width="80" align="center">

![Qwen Code](https://img.shields.io/badge/Qwen%20Code-CLI-orange?style=for-the-badge)

</td>
<td>

**[Qwen Code](https://github.com/QwenLM/qwen-code)** por [QwenLM / Alibaba](https://github.com/QwenLM) — La CLI de asistente de programación AI de código abierto que soporta múltiples proveedores de LLM (Qwen, DeepSeek, OpenAI, Anthropic, modelos locales). Qwen Orchestrator es una **extensión construida por la comunidad** y no está afiliada ni respaldada por Alibaba.

</td>
</tr>
</table>

> ⚠️ **Esta extensión SOLO funciona con [Qwen Code CLI](https://github.com/QwenLM/qwen-code)**. NO es una herramienta independiente, NO es una extensión de VS Code, y NO es compatible con otros asistentes de programación AI. Si no tienes Qwen Code instalado, [instálalo primero](https://github.com/QwenLM/qwen-code#installation).

---

## 🎯 Resumen

Qwen Orchestrator transforma Qwen Code en un **departamento de TI profesional** con **22 agentes AI especializados**, **22 habilidades expertas**, **6 comandos slash**, **memoria persistente (Knowledge Graph)** y un **servidor de herramientas MCP**. Cada funcionalidad se entrega probada, revisada y completa — **sin mockups, sin placeholders, sin operaciones CRUD inconclusas**.

### Garantías Clave

| Garantía                         | Cómo se Aplica                                                                                |
| -------------------------------- | --------------------------------------------------------------------------------------------- |
| **Sin mockups/placeholders**     | Los agentes tienen prohibido escribir stubs; la habilidad anti-patrón detecta violaciones     |
| **Sin bloqueo de modelo**        | Todos los agentes usan el modelo del usuario por defecto; sobrescribir por agente es opcional |
| **Protección contra bucles**     | El agente Monitor detecta y rompe bucles LLM automáticamente                                  |
| **Prevención N+1**               | La habilidad de SQL best-practices + el agente Database Architect aplican eager loading       |
| **Formateo SQL**                 | Keywords en mayúsculas, una columna por línea, JOINs indentados — aplicado por la habilidad   |
| **Seguridad primero**            | Cumplimiento OWASP Top 10 mediante la habilidad security-audit y el agente Reviewer           |
| **Completitud CRUD**             | El Tech Lead verifica que cada entidad tenga Create/Read/Update/Delete/Restore                |
| **Multi-lenguaje**               | Soporta TypeScript, PHP, Python, Dart, Rust, Go, Java, C# — no solo TS                        |
| **Context7 opcional**            | Funciona sin Context7; con él, los agentes obtienen consulta de documentación en tiempo real  |
| **Recuperación de compactación** | El estado persiste en `.qwen-orchestrator/` — sobrevive la compresión del contexto            |

### 🌟 Aspectos Destacados

- **22 Agentes Especializados** — Desde Commander hasta Localization Engineer, cada uno con herramientas y experiencia dedicadas
- **22 Habilidades Profesionales** — TDD workflow, security audit, detección de anti-patrones, design system, SQL best practices, y 17 más
- **6 Comandos Slash** — `/orchestrator`, `/orchestrate`, `/plan`, `/review`, `/test`, `/deploy`
- **Pregunta Antes de Construir** — Los agentes hacen preguntas de clarificación vía `AskUserQuestion` antes de empezar a trabajar
- **Memoria Persistente** — Knowledge Graph vía MCP Memory Server almacena decisiones entre sesiones
- **Cero Bloqueo de Modelo** — Funciona con Qwen, DeepSeek, OpenAI, Anthropic, o cualquier modelo local
- **Soporte Multi-Lenguaje** — No solo TypeScript: PHP (Laravel), Python (Django), Dart (Flutter), Rust, Go, Java, C#
- **Habilidades de Framework** — Habilidades integradas para Flutter Web, Laravel, NestJS, y Supabase
- **Protección contra Bucles** — El agente Monitor detecta y rompe bucles infinitos LLM automáticamente
- **Mensajería entre Agentes** — El Commander envía instrucciones a agentes en segundo plano durante tareas vía SendMessage
- **Tareas Programadas** — CronCreate para auditorías de calidad recurrentes, chequeos de salud, e informes de progreso
- **Monitoreo en Tiempo Real** — Observa builds, contenedores y logs vía la herramienta Monitor
- **Integración UI/UX** — El Frontend Developer puede aprovechar UI UX Pro Max, Designer Skills, y Taste Skill

---

## 📊 Estadísticas Rápidas

| Métrica                    | Cantidad | Detalles                                                                                                                                                                                                                                                                                           |
| -------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Agentes**                | 22       | Commander, Planner, Frontend Dev, Backend Dev, Reviewer, QA, PM, Doc Researcher, Tech Lead, DB Architect, Product Owner, DevOps, Code Quality Guard, Monitor, SEO Specialist, Tech Selector, Cybersecurity Eng., Performance Eng., Release Manager, API Specialist, Mobile Eng., Localization Eng. |
| **Habilidades**            | 22       | Design system, code review, TDD, security audit, performance, debugging, deployment, Context7 docs, domain-driven, API design, refactoring, compaction recovery, git workflow, database design, anti-pattern, multi-language, SQL, Flutter Web, Laravel, NestJS, Supabase                          |
| **Comandos**               | 6        | `/orchestrator`, `/orchestrate`, `/plan`, `/review`, `/test`, `/deploy`                                                                                                                                                                                                                            |
| **Herramientas MCP**       | 7        | Mission status, project validation, TODO generation, agent roster, Context7 resolve, CRUD check, checkpoint                                                                                                                                                                                        |
| **Servidores MCP**         | 2        | Orchestrator tools + Memory Knowledge Graph                                                                                                                                                                                                                                                        |
| **Lenguajes**              | 8+       | TypeScript, PHP, Python, Dart, Rust, Go, Java, C#                                                                                                                                                                                                                                                  |
| **Herramientas Qwen Code** | 21       | Suite completa de herramientas — Edit, WriteFile, ReadFile, Grep, Glob, Shell, AskUserQuestion, Agent, Skill, SendMessage, Monitor, CronCreate, ExitPlanMode, y más                                                                                                                                |

### Garantías Clave

| Garantía                         | Cómo se Aplica                                                                                |
| -------------------------------- | --------------------------------------------------------------------------------------------- |
| **Sin mockups/placeholders**     | Los agentes tienen prohibido escribir stubs; la habilidad anti-patrón detecta violaciones     |
| **Sin bloqueo de modelo**        | Todos los agentes usan el modelo del usuario por defecto; sobrescribir por agente es opcional |
| **Protección contra bucles**     | El agente Monitor detecta y rompe bucles LLM automáticamente                                  |
| **Prevención N+1**               | La habilidad de SQL best-practices + el agente Database Architect aplican eager loading       |
| **Formateo SQL**                 | Keywords en mayúsculas, una columna por línea, JOINs indentados — aplicado por la habilidad   |
| **Seguridad primero**            | Cumplimiento OWASP Top 10 mediante la habilidad security-audit y el agente Reviewer           |
| **Completitud CRUD**             | El Tech Lead verifica que cada entidad tenga Create/Read/Update/Delete/Restore                |
| **Multi-lenguaje**               | Soporta TypeScript, PHP, Python, Dart, Rust, Go, Java, C# — no solo TS                        |
| **Context7 opcional**            | Funciona sin Context7; con él, los agentes obtienen consulta de documentación en tiempo real  |
| **Recuperación de compactación** | El estado persiste en `.qwen-orchestrator/` — sobrevive la compresión del contexto            |

---

## Arquitectura

```
╔══════════════════════════════════════════════════════════════════════════╗
║                    QWEN ORCHESTRATOR v0.0.1                            ║
║                     by Omar-Obando (GitHub)                            ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                        ║
║  ┌─────────────────────────────────────────────────────────────────┐   ║
║  │                      COMMANDER 🔴                               │   ║
║  │       "I orchestrate. I never stop until done."                 │   ║
║  │    EXPLORE → LEARN → ADAPT → ACT → VERIFY → DELIVER            │   ║
║  └──────┬─────────┬─────────┬─────────┬────────────────────────────┘   ║
║         │         │         │         │                                 ║
║  ┌──────▼──┐ ┌────▼──────┐ ┌▼────────┐ ┌▼──────────────┐              ║
║  │ PLANNER │ │FE DEV+BE  │ │REVIEWER │ │ QA ENGINEER   │              ║
║  │  🔵     │ │   🟢🟠    │ │  🟣     │ │    🟠         │              ║
║  │Research │ │ TDD Code  │ │Gatekeep │ │Test Strategy  │              ║
║  │Design   │ │ Deliver   │ │Approve  │ │Coverage       │              ║
║  └─────────┘ └───────────┘ └─────────┘ └───────────────┘              ║
║         │         │         │         │                                 ║
║  ┌──────▼─────────▼─────────▼─────────▼──────────────────────────┐    ║
║  │               PROJECT MANAGER 🔵                               │    ║
║  │         Scope · Risk · Progress · Delivery                     │    ║
║  └────────────────────────────────────────────────────────────────┘    ║
║                                                                        ║
║  ┌──────────────┐ ┌──────────────┐ ┌─────────────────────────────┐    ║
║  │DOC RESEARCHER│ │  TECH LEAD   │ │    DATABASE ARCHITECT       │    ║
║  │  🟣 Magenta  │ │  🟡 Gold    │ │       🟢 Teal              │    ║
║  │ Context7     │ │ CRUD Verify │ │   Schema & Migration        │    ║
║  └──────────────┘ └──────────────┘ └─────────────────────────────┘    ║
║                                                                        ║
║  ┌──────────────┐ ┌──────────────┐ ┌─────────────────────────────┐    ║
║  │PRODUCT OWNER │ │DEVOPS ENGINEER│ │   CODE QUALITY GUARD      │    ║
║  │  🟡 Amber    │ │  🔘 Slate    │ │       🌹 Rose             │    ║
║  │User Stories  │ │  CI/CD       │ │  Syntax · Lint · Types    │    ║
║  └──────────────┘ └──────────────┘ └─────────────────────────────┘    ║
║                                                                        ║
║  Skills: 22 | Agents: 22 | Commands: 6 | MCP Tools: 7 | Languages: 8+           ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## Equipo de Agentes (22 Agentes Especializados)

| #   | Agente                 | Color      | Rol                          | Superpoder                                                  |
| --- | ---------------------- | ---------- | ---------------------------- | ----------------------------------------------------------- |
| 1   | **Commander**          | 🔴 Rojo    | Orquestador Maestro          | Delegación paralela, ejecución incansable                   |
| 2   | **Planner**            | 🔵 Azul    | Investigación y Arquitectura | Planificación a nivel de archivos, decisiones de diseño     |
| 3   | **Frontend Developer** | 🔵 Cyan    | Implementación UI/UX         | Componentes, responsivo, accesible, rápido                  |
| 4   | **Backend Developer**  | 🟢 Verde   | Lógica del Lado Servidor     | APIs, autenticación, caché, operaciones de base de datos    |
| 5   | **Reviewer**           | 🟣 Púrpura | Guardián de Calidad          | ÚNICO agente que puede aprobar tareas                       |
| 6   | **QA Engineer**        | 🟠 Naranja | Aseguramiento de Calidad     | Estrategia de pruebas, descubrimiento de casos extremos     |
| 7   | **Project Manager**    | 🔵 Cyan    | Gestión de Entrega           | Control de alcance, evaluación de riesgos                   |
| 8   | **Doc Researcher**     | 🟣 Magenta | Conocimiento Context7        | Consulta de documentación en vivo, anti-alucinación         |
| 9   | **Tech Lead**          | 🟡 Dorado  | Estándares y Guía            | Completitud de módulos, verificación CRUD                   |
| 10  | **Database Architect** | 🟢 Teal    | Especialista Capa de Datos   | Diseño de schema, seguridad de migraciones                  |
| 11  | **Product Owner**      | 🟡 Ámbar   | Valor de Negocio             | Historias de usuario, criterios de aceptación               |
| 12  | **DevOps Engineer**    | 🔘 Slate   | Infraestructura              | CI/CD, Docker, automatización de despliegue                 |
| 13  | **Code Quality Guard** | 🌹 Rosa    | Centinela de Calidad         | Verificación de sintaxis, lint, typecheck                   |
| 14  | **Monitor**            | 🛡️ Escudo  | Guardián de Bucles           | Detectar/romper bucles LLM, watchdog en tiempo de ejecución |
| 15  | **SEO Specialist**     | 🔵 Azul    | SEO y Rendimiento Web        | Meta tags, datos estructurados, Core Web Vitals             |
| 16  | **Tech Selector**      | 🟣 Violeta | Asesor de Tecnología         | Selección de framework/BD con pros y contras                |
| 17  | **Cybersecurity Eng.** | 🔴 Carmesí | Seguridad de Aplicaciones    | OWASP, modelado de amenazas, auditoría de dependencias      |
| 18  | **Performance Eng.**   | ⚡ Ámbar   | Velocidad y Escala           | Profiling, optimización de consultas, pruebas de carga      |
| 19  | **Release Manager**    | 🏷️ Índigo  | Releases y Versionado        | SemVer, changelogs, planificación de rollback               |
| 20  | **API Specialist**     | 🔗 Teal    | APIs e Integración           | REST/GraphQL, versionado, APIs de terceros                  |
| 21  | **Mobile Engineer**    | 📱 Sky     | Apps Móviles                 | Flutter, React Native, offline-first                        |
| 22  | **Localization Eng.**  | 🌐 Lima    | i18n/L10n                    | Multi-lenguaje, RTL, adaptación cultural                    |

---

## Habilidades (22 Habilidades Profesionales)

| #   | Habilidad               | Propósito                                                                                      |
| --- | ----------------------- | ---------------------------------------------------------------------------------------------- |
| 1   | **Code Review**         | Revisión sistemática OWASP + SOLID + Clean Code                                                |
| 2   | **Architect**           | Diseño de arquitectura con registros ADR                                                       |
| 3   | **TDD Workflow**        | Desarrollo Guiado por Pruebas (Red/Green/Refactor)                                             |
| 4   | **Security Audit**      | Detección de vulnerabilidades OWASP Top 10                                                     |
| 5   | **Performance**         | Profiling, optimización, benchmarks                                                            |
| 6   | **Debugging**           | Metodología de investigación sistemática                                                       |
| 7   | **Deployment**          | CI/CD, Docker, gestión de releases                                                             |
| 8   | **Context7 Docs**       | Opcional — consulta de documentación en vivo vía Context7 MCP                                  |
| 9   | **Domain-Driven**       | Constructor completo de módulos de negocio — sub-módulos, CRUD, sin mockups                    |
| 10  | **API Design**          | Estándares RESTful, envelopes de respuesta, paginación                                         |
| 11  | **Refactoring**         | Transformaciones seguras de código que preservan comportamiento                                |
| 12  | **Compaction Recovery** | Preservación de contexto a través de la compactación de sesiones                               |
| 13  | **Git Workflow**        | Estrategias de branching, convenciones de commits, plantillas de PR                            |
| 14  | **Database Design**     | Diseño de schema, indexación, seguridad de migraciones                                         |
| 15  | **Anti-Pattern**        | Prohíbe mockups, placeholders, consultas N+1, código muerto                                    |
| 16  | **Multi-Language**      | 8+ lenguajes: TS, PHP, Python, Dart, Rust, Go, Java, C#                                        |
| 17  | **SQL Best Practices**  | Indentación, prevención N+1, consultas parametrizadas                                          |
| 18  | **Design System**       | Arquitectura multi-página, paletas de colores, tipografía, espaciado, Astro + Cloudflare Pages |
| 19  | **Flutter Web**         | Layouts responsivos, widgets adaptativos, gestión de estado, formularios                       |
| 20  | **Laravel**             | Eloquent ORM, Form Requests, colas, patrones de backend API                                    |
| 21  | **NestJS**              | Módulos, guards, pipes, interceptors, ciclo de vida de peticiones                              |
| 22  | **Supabase**            | Políticas RLS, Edge Functions, auth, APIs auto-generadas                                       |

---

## Comandos (6 Comandos Slash)

### `/orchestrator` — Punto de Entrada Principal ⭐

```bash
/orchestrator Build a checkout system with Stripe payments
```

Este es **EL** comando. Activa el equipo completo de 22 agentes con el flujo de trabajo profesional completo:

1. **CLARIFICAR** → Te hace preguntas específicas si algo es ambiguo (vía `AskUserQuestion`)
2. **DESCUBRIR** → Escanea tu proyecto, detecta el stack tecnológico, lee configuraciones
3. **PLANIFICAR** → Descompone la misión en hitos con grupos de ejecución paralela
4. **EJECUTAR** → Lanza agentes especializados simultáneamente para máximo rendimiento
5. **VERIFICAR** → Reviewer + QA confirman que todo funciona, cero regresiones
6. **ENTREGAR** → Resumen de lo construido, cambiado, con evidencia

### Todos los Comandos

| Comando                        | Descripción                                                          |
| ------------------------------ | -------------------------------------------------------------------- |
| **`/orchestrator [objetivo]`** | ⭐ **Entrada principal** — Equipo completo con protocolo de claridad |
| `/orchestrate [misión]`        | Ejecución directa de misión (sin preguntas de claridad)              |
| `/plan [funcionalidad]`        | Solo crear plan de implementación                                    |
| `/review [objetivo]`           | Revisión exhaustiva de código                                        |
| `/test [objetivo]`             | Ejecutar y analizar suite de pruebas                                 |
| `/deploy [objetivo]`           | Desplegar con verificación pre/post                                  |

> **¿Cuándo usar `/orchestrator` vs `/orchestrate`?**
>
> - `/orchestrator` — Cuando empiezas una funcionalidad nueva, proyecto o tarea compleja. El equipo te hará preguntas de clarificación primero.
> - `/orchestrate` — Cuando ya sabes exactamente qué quieres y solo necesitas que se ejecute rápido.

---

## Claridad del Usuario: Pregunta Antes de Construir

El orquestador **nunca asume** lo que quieres. Cuando empieza una misión, los agentes Commander y Planner usan la herramienta `AskUserQuestion` para clarificar requisitos antes de escribir una sola línea de código.

### Cómo Funciona

1. Describes tu misión (ej. `/orchestrator Build a user authentication system`)
2. El Commander analiza tu solicitud y verifica: **¿está 100% claro?**
3. Si no, te hace preguntas específicas con opciones predefinidas
4. Respondes, y solo entonces comienza la planificación

### Ejemplo de Interacción

```
👤 Usuario: /orchestrator Build an e-commerce checkout

🤖 Commander: Necesito clarificar algunas cosas antes de planificar:

   📋 Proveedor de Pagos (Pregunta 1/3)
   ¿Qué pasarela de pago debería integrar?
   ○ Stripe       — Estándar de la industria, excelente API, soporta suscripciones
   ○ PayPal       — Ampliamente confiable, buen soporte internacional
   ○ MercadoPago  — Mejor para mercados latinoamericanos

   📋 Flujo de Checkout (Pregunta 2/3)
   ¿Qué tipo de experiencia de checkout?
   ○ Página Única — Todos los pasos en una página (más simple, más rápido)
   ○ Multi-Paso   — Páginas separadas por paso (más controlado)

   📋 Checkout sin Cuenta (Pregunta 3/3)
   ¿Deberían los usuarios poder comprar sin una cuenta?
   ○ Sí           — Menos fricción, mayor conversión
   ○ No           — Cuenta requerida, mejor para retención

👤 Usuario selecciona: MercadoPago → Multi-Paso → Sí

🤖 Commander: Perfecto. Planificando checkout con MercadoPago, flujo multi-paso, soporte para invitados.
```

### Agentes que Hacen Preguntas

| Agente             | Cuándo Pregunta                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------- |
| Commander          | Antes de cada misión — alcance, prioridades, restricciones                                                    |
| Planner            | Antes de decisiones de arquitectura — stack tecnológico, patrones                                             |
| Product Owner      | Al definir historias de usuario — criterios de aceptación, casos extremos                                     |
| QA Engineer        | Al diseñar estrategia de pruebas — caminos críticos, umbrales                                                 |
| Project Manager    | Al definir alcance — plazos, tolerancia a riesgos, recursos                                                   |
| **Tech Selector**  | **Cuando el stack tecnológico no está especificado — presenta frameworks, BDs, lenguajes con pros y contras** |
| **SEO Specialist** | **Cuando se construyen proyectos web — audiencia objetivo, tipo de contenido, región**                        |

> **Consejo**: Siempre puedes proporcionar todos los detalles desde el inicio y saltarte las preguntas. Los agentes solo preguntan cuando detectan ambigüedad o información faltante.

---

## Integración Avanzada de Herramientas

El orquestador aprovecha la suite completa de herramientas de Qwen Code más allá de las operaciones básicas de archivos:

### Comunicación entre Agentes (SendMessage)

El Commander puede enviar mensajes a agentes en segundo plano durante una tarea para redirigir, clarificar o proporcionar contexto adicional sin esperar a que el agente termine.

```
SendMessage({ task_id: "worker-auth", message: "User clarified: use JWT, not sessions." })
```

### Monitoreo en Tiempo Real (Monitor)

El DevOps Engineer puede observar procesos de larga duración (builds, contenedores, suites de pruebas) y recibir notificaciones en streaming.

```
Monitor({ command: "docker compose logs -f app", description: "Watch app logs during deploy" })
```

### Tareas Programadas (CronCreate/CronList/CronDelete)

Programa tareas recurrentes o de una sola vez para chequeos automáticos de calidad e informes de progreso.

```
CronCreate({ cron: "0 6 * * 1-5", prompt: "Run security audit", recurring: true })
```

### Puerta de Aprobación del Plan (ExitPlanMode)

El Planner presenta el plan final para aprobación del usuario antes de que comience la ejecución, asegurando alineación.

### Cancelación de Tareas (TaskStop)

El Commander puede cancelar tareas en segundo plano descontroladas o desactualizadas instantáneamente.

### Matriz Agente-Herramienta

| Herramienta         | Cmd | Plan | FE  | BE  | Rev | QA  | PM  | Doc | TL  | DB  | PO  | Dev | CQG | Mon | SEO | TSel |
| ------------------- | :-: | :--: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :--: |
| AskUserQuestion     | ✅  |  ✅  | ✅  |     |     | ✅  | ✅  |     |     |     | ✅  |     |     |     | ✅  |  ✅  |
| Agent (sub-agentes) | ✅  |  ✅  |     |     |     |     |     |     |     |     |     |     |     |     |     |      |
| Skill (cargar hab.) |     |      | ✅  |     |     |     |     |     |     |     |     |     |     |     |     |      |
| SendMessage         | ✅  |  ✅  |     |     |     |     |     |     |     |     |     |     |     | ✅  |     |      |
| Monitor (watchdog)  | ✅  |      |     |     |     |     | ✅  |     |     |     |     |     | ✅  |     |     |
| TaskStop            | ✅  |      |     |     |     |     |     |     |     |     |     |     | ✅  |     |     |
| CronCreate/List     | ✅  |      |     |     |     | ✅  | ✅  |     |     |     |     |     | ✅  |     |     |
| ExitPlanMode        |     |  ✅  |     |     |     |     |     |     |     |     |     |     |     |     |     |
| SaveMemory          | ✅  |  ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  |     | ✅  |     |     | ✅  | ✅  |  ✅  |
| Lsp (diagnósticos)  | ✅  |  ✅  | ✅  | ✅  | ✅  |     |     | ✅  | ✅  |     |     | ✅  | ✅  |     |     |
| WebFetch            | ✅  |  ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  |     | ✅  |  ✅  |

---

## Configuración de Modelos

**Por defecto, todos los agentes usan tu modelo predeterminado de Qwen Code.** No hay modelo fijo — cero bloqueo.

### Usando el modelo predeterminado (recomendado)

Simplemente instala la extensión y úsala. Cada agente usará el modelo que tengas configurado en Qwen Code.

### Configurar un modelo específico por agente

Para usar un modelo diferente para un agente específico, edita el archivo `.md` del agente en `agents/` y descomenta la línea `model`:

```yaml
---
name: commander
# ... otros campos ...
# model: descomenta abajo para sobrescribir el modelo por defecto del usuario
model: qwen-max # ← Descomenta y establece tu modelo preferido
---
```

### Modelos recomendados por rol

| Agente             | Modelo Recomendado       | Por qué                                               |
| ------------------ | ------------------------ | ----------------------------------------------------- |
| Commander          | `qwen-max` o `qwen-plus` | Necesita razonamiento fuerte para orquestación        |
| Planner            | `qwen-max` o `qwen-plus` | Necesita análisis fuerte para arquitectura            |
| Frontend Developer | `qwen3-coder-plus`       | Optimizado para generación de código                  |
| Backend Developer  | `qwen3-coder-plus`       | Optimizado para generación de código                  |
| Reviewer           | `qwen-max`               | Necesita comprensión profunda para puertas de calidad |
| QA Engineer        | `qwen-plus`              | Equilibrado para estrategia de pruebas                |
| Code Quality Guard | `qwen-plus`              | Rápido para verificaciones de sintaxis/lint           |
| Todos los demás    | Modelo del usuario       | Sin necesidades especiales                            |

> **Nota**: Cualquier modelo soportado por tu instalación de Qwen Code funciona — incluyendo DeepSeek, OpenAI, Anthropic, o modelos locales. El campo model es solo un string que se pasa a tu proveedor configurado.

---

## Modo Orquestador

Qwen Orchestrator funciona como un **modo CLI virtual** activado vía `/orchestrator`. El agente Commander toma el control y gestiona el equipo completo de 22 agentes.

### Configuración CLI Recomendada

Para máxima autonomía, configura tu Qwen Code CLI en uno de estos modos **antes** de ejecutar `/orchestrate`:

| Modo CLI      | Configuración | Qué Sucede                                                                          |
| ------------- | ------------- | ----------------------------------------------------------------------------------- |
| **Auto-Edit** | `auto-edit`   | Los agentes editan/escriben libremente. El usuario confirma shell. **Recomendado.** |
| **YOLO**      | `yolo`        | Autonomía completa. Sin confirmaciones. Velocidad máxima.                           |
| **Default**   | `default`     | El usuario confirma cada edición. Más lento pero máximo control.                    |
| **Plan**      | `plan`        | Solo planificación — los agentes no pueden escribir archivos.                       |

### Por qué los Agentes No Sobrescriben tu Configuración

Los agentes intencionalmente **no** tienen campos `approvalMode`, `runConfig`, o `background`:

- **Tú controlas la autonomía** desde la CLI, no la extensión
- **Sin límites de tiempo/turnos** — el agente Monitor maneja la detección de bucles en su lugar
- **Ejecución en segundo plano** gestionada por el Commander al lanzar sub-agentes
- **El orquestador se adapta a tu configuración CLI**, no al revés

---

## Integración Context7 (Opcional)

[Context7](https://context7.com) proporciona documentación en tiempo real y específica por versión para cualquier biblioteca o framework. Es **opcional** — el orquestador funciona perfectamente sin él.

### Con Context7 instalado

- El agente Doc Researcher resuelve IDs de bibliotecas y obtiene documentación en vivo
- Todos los agentes pueden consultar Context7 antes de escribir código de APIs desconocidas
- Cero alucinación en firmas de API y patrones

### Sin Context7

- Los agentes recurren a búsqueda web y su conocimiento de entrenamiento
- La habilidad `context7-docs` se degrada elegantemente
- Sin errores ni funcionalidades faltantes

### Cómo instalar Context7

Agrega a tu configuración MCP de Qwen Code:

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    }
  }
}
```

---

## MCP Memory Server — Knowledge Graph

El servidor MCP `@modelcontextprotocol/server-memory` proporciona un **Knowledge Graph** que persiste entre sesiones. Los agentes pueden guardar decisiones, preferencias y contexto del proyecto que sobreviven a reinicios de sesión.

### Qué Almacena

- **Decisiones del proyecto**: Elección de base de datos, selección de framework, patrones de arquitectura
- **Preferencias del usuario**: Framework CSS preferido, modo dark/light, convenciones de nombres
- **Registros de arquitectura**: Jerarquía de componentes, convenciones de API, destinos de despliegue
- **Continuidad de sesión**: Última tarea, siguiente paso, problemas conocidos de sesiones anteriores

### Cómo lo Usan los Agentes

```
# El Commander guarda una decisión
create_entities({
  entities: [{ name: "database", entityType: "decision", observations: ["PostgreSQL 16", "RLS enabled", "UUID primary keys"] }]
})

# El Tech Lead guarda estándares de código
create_entities({
  entities: [{ name: "code-standards", entityType: "standard", observations: ["PascalCase for components", "ESLint strict mode", "Tests mandatory"] }]
})

# Cualquier agente consulta decisiones previas
read_graph({})
```

### Configuración (incluida en la extensión)

El servidor MCP Memory está configurado en `qwen-extension.json` y se ejecuta automáticamente cuando se carga la extensión. No necesita configuración adicional.

> **Referencia**: [MCP Server Memory en npm](https://www.npmjs.com/package/@modelcontextprotocol/server-memory)

---

## Servidor de Herramientas MCP (Opcional)

El servidor MCP opcional proporciona 7 herramientas para gestión de misiones:

| Herramienta                | Propósito                                                       |
| -------------------------- | --------------------------------------------------------------- |
| `get_mission_status`       | Obtener progreso actual de la misión                            |
| `validate_project`         | Validar estructura y salud del proyecto                         |
| `generate_todo`            | Generar un TODO estructurado desde la descripción de misión     |
| `get_agent_roster`         | Listar los 22 agentes con sus capacidades                       |
| `context7_resolve_library` | Resolver IDs de bibliotecas Context7                            |
| `check_crud_completeness`  | Verificar CRUD completo para todas las entidades                |
| `create_checkpoint`        | Crear un checkpoint de estado para recuperación de compactación |

### Configuración

```bash
cd qwen-orchestrator
npm install
npm run build
npm run mcp:start
```

Luego agrega a tu configuración MCP de Qwen Code:

```json
{
  "mcpServers": {
    "qwen-orchestrator": {
      "command": "node",
      "args": ["./qwen-orchestrator/mcp-server/dist/index.js"]
    }
  }
}
```

---

## Flujo de Ejecución

```
Solicitud del Usuario
     │
     ▼
┌──────────┐     ┌──────────┐     ┌──────────┐
│ COMMANDER│────▶│ PLANNER  │────▶│   TODO   │
│ Descubre │     │ Analiza  │     │ Creado   │
│ y Define │     │ y Planif.│     │          │
└──────────┘     └──────────┘     └────┬─────┘
                                       │
                    ┌──────────────────┼──────────────────┐
                    ▼                  ▼                  ▼
              ┌──────────┐      ┌──────────┐      ┌──────────┐
              │ FE DEV A │      │ BE DEV B │      │ MOB DEV C│
              │ Tarea 1  │      │ Tarea 2  │      │ Tarea 3  │
              └────┬─────┘      └────┬─────┘      └────┬─────┘
                   │                 │                  │
                   ▼                 ▼                  ▼
              ┌──────────┐      ┌──────────┐      ┌──────────┐
              │ REVIEWER │      │   QA     │      │ CQ GUARD │
              │ Verifica │      │ Prueba A │      │ Lint+Type│
              └────┬─────┘      └────┬─────┘      └────┬─────┘
                   │                 │                  │
                   └────────────────┼──────────────────┘
                                    ▼
                           ┌──────────────┐
                           │   COMMANDER  │
                           │   CONCLUYE   │
                           └──────────────┘
```

---

## Estándares de Calidad

Cada línea de código producida por el orquestador cumple:

- **Complejidad**: ≤ 10 complejidad ciclomática por función
- **Tamaño**: ≤ 40 líneas por función, ≤ 4 parámetros
- **Tipos**: Tipos estrictos, sin `any`
- **Testing**: TDD obligatorio, 80%+ cobertura
- **Seguridad**: Cumplimiento OWASP Top 10
- **SQL**: Keywords en mayúsculas, una columna por línea, JOINs indentados, prevención N+1
- **Revisión**: Revisión de código multidimensional antes de merge
- **Lenguajes**: No solo TypeScript — se adapta al stack tecnológico del proyecto

---

## Estructura del Proyecto

```
qwen-orchestrator/
├── qwen-extension.json       # Manifiesto de extensión (v0.0.1)
├── package.json              # Configuración de paquete NPM
├── AGENTS.md                 # Reglas operacionales de agentes
├── LICENSE                   # Licencia MIT
│
├── agents/                   # 22 Definiciones de agentes
│   ├── commander.md          #   Orquestador maestro
│   ├── planner.md            #   Investigación y planificación
│   ├── frontend-developer.md #   Implementación UI/UX
│   ├── backend-developer.md  #   Lógica del lado servidor
│   ├── reviewer.md           #   Guardián de calidad
│   ├── qa-engineer.md        #   Estrategia de pruebas
│   ├── project-manager.md    #   Gestión de entrega
│   ├── doc-researcher.md     #   Motor de conocimiento Context7
│   ├── tech-lead.md          #   Estándares y completitud de módulos
│   ├── database-architect.md #   Schema y seguridad de migraciones
│   ├── product-owner.md      #   Historias de usuario y criterios de aceptación
│   ├── devops-engineer.md    #   CI/CD e infraestructura
│   ├── code-quality-guard.md #   Centinela de sintaxis, lint, typecheck
│   ├── monitor.md            #   Guardián de bucles y watchdog en tiempo de ejecución
│   ├── seo-specialist.md     #   SEO y rendimiento web
│   ├── tech-selector.md      #   Asesor de selección de tecnología
│   ├── cybersecurity-engineer.md  # Seguridad de aplicaciones
│   ├── performance-engineer.md    # Optimización de velocidad y escala
│   ├── release-manager.md         # SemVer y flujo de releases
│   ├── api-specialist.md          # REST/GraphQL e integraciones
│   ├── mobile-engineer.md         # Flutter, React Native
│   └── localization-engineer.md   # i18n/L10n y RTL
│
├── skills/                   # 22 Definiciones de habilidades
│   ├── code-review/          #   Metodología de revisión de código
│   ├── architect/            #   Diseño de arquitectura
│   ├── tdd-workflow/         #   Patrones TDD
│   ├── security-audit/       #   OWASP Top 10
│   ├── performance/          #   Optimización de rendimiento
│   ├── debugging/            #   Metodología de debugging
│   ├── deployment/           #   DevOps y CI/CD
│   ├── context7-docs/        #   Documentación Context7 (opcional)
│   ├── domain-driven/        #   Constructor completo de módulos
│   ├── api-design/           #   Estándares de API RESTful
│   ├── refactoring/          #   Transformaciones seguras de código
│   ├── compaction-recovery/  #   Preservación de contexto
│   ├── git-workflow/         #   Branching y commits en Git
│   ├── database-design/      #   Schema y optimización de consultas
│   ├── anti-pattern/         #   Prohíbe mockups, N+1, código muerto
│   ├── multi-lang/           #   Soporte 8+ lenguajes
│   ├── sql-best-practices/   #   Formateo y seguridad SQL
│   ├── design-system/        #   Paletas de colores, tipografía, espaciado, multi-página
│   ├── flutter-web/          #   Patrones Flutter Web
│   ├── laravel/              #   Patrones Laravel PHP
│   ├── nestjs/               #   Patrones NestJS TypeScript
│   └── supabase/             #   Patrones Supabase
│
├── commands/                 # 6 Comandos Slash
│   ├── orchestrator.md       #   ⭐ Punto de entrada principal (claridad primero)
│   ├── orchestrate.md        #   Ejecución directa de misión
│   ├── plan.md               #   Crear plan
│   ├── review.md             #   Revisión de código
│   ├── test.md               #   Ejecución de pruebas
│   └── deploy.md             #   Desplegar con verificación
│
├── context/
│   └── QWEN.md               #   Mejores prácticas (inyectado en sesiones)
│
├── mcp-server/src/
│   └── index.ts              #   7 Herramientas MCP (opcional)
│
└── docs/
    ├── ARCHITECTURE.md       #   Arquitectura detallada
    └── QUICK-START.md        #   Guía de inicio rápido
```

---

## Integración de Habilidades UI/UX (Recomendado)

El agente Frontend Developer puede aprovechar repositorios externos de habilidades UI/UX para inteligencia de diseño más allá del código. Son **opcionales** pero muy recomendados para proyectos web.

### Habilidades Recomendadas

| Habilidad           | Comando de Instalación                                   | Qué Proporciona                                                                                                                                                                                  |
| ------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **UI UX Pro Max**   | `npx uipro-cli init`                                     | 161 reglas de razonamiento, 67 estilos UI, generador de design system, búsqueda por dominio (producto/estilo/tipografía/color), código específico por stack (React, Next.js, Vue, Flutter, etc.) |
| **Designer Skills** | `/plugin marketplace add Owl-Listener/designer-skills`   | 87 habilidades, 27 comandos en 8 plugins: design-research, design-systems, ux-strategy, ui-design, interaction-design, prototyping-testing, design-ops, designer-toolkit                         |
| **Taste Skill**     | `npx skills add https://github.com/Leonxlnx/taste-skill` | Framework frontend anti-slop — layout premium, tipografía, motion, espaciado. Habilidades: design-taste-frontend, minimalist-ui, soft-skill, brutalist-ui, redesign                              |

### Cuándo Usarlas

- **Proyecto nuevo** → Ejecuta el generador de design system de UI UX Pro Max para colores, tipografía, tokens de espaciado
- **Biblioteca de componentes** → Usa el plugin design-systems de Designer Skills para tokens, theming, gobernanza
- **Pulir UI existente** → Usa `redesign-existing-projects` de Taste Skill para auditar y corregir layout/espaciado
- **Investigación UX** → Usa el plugin ux-strategy de Designer Skills para análisis competitivo, arquitectura de información
- **Motion e interacción** → Usa el plugin interaction-design de Designer Skills para micro-animaciones

---

## Instalación

### Instalación Rápida (Recomendada)

```bash
qwen extensions install https://github.com/Omar-Obando/qwen-orchestrator
```

Esto registra automáticamente los 22 agentes, 22 habilidades, 6 comandos y el servidor MCP Memory.

### Instalación Manual

1. Clona el repositorio:

```bash
git clone https://github.com/Omar-Obando/qwen-orchestrator.git
```

2. Agrega a tu configuración de Qwen Code:

```json
{
  "extensions": ["./path/to/qwen-orchestrator"]
}
```

3. (Opcional) Construye el servidor de herramientas MCP:

```bash
cd qwen-orchestrator
npm install
npm run build
```

### Agregar Servidores MCP

La extensión incluye dos servidores MCP. Para agregar más (como Context7), añádelos a `qwen-extension.json` bajo `mcpServers`:

```json
{
  "mcpServers": {
    "qwen-orchestrator": {
      "command": "node",
      "args": ["${extensionPath}${/}mcp-server${/}dist${/}index.js"],
      "cwd": "${extensionPath}"
    },
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    },
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    }
  }
}
```

> **Documentación**: [Crear Extensiones para Qwen Code](https://qwenlm.github.io/qwen-code-docs/en/developers/extensions/extension/#create-a-boilerplate-extension)

---

## Autor

**Omar Obando**

- GitHub: [@Omar-Obando](https://github.com/Omar-Obando)
- Licencia: MIT

---

## 🔑 Palabras Clave y Temas

`qwen-code` · `qwen-code-extension` · `multi-agent` · `ai-agents` · `orchestration` · `ai-coding` · `ai-development` · `tdd` · `code-review` · `devops` · `cicd` · `mcp` · `model-context-protocol` · `ai-orchestrator` · `software-engineering` · `ai-assistant` · `coding-agent` · `enterprise-ai` · `multi-agent-system` · `ai-coding-assistant` · `qwen` · `deepseek` · `openai` · `flutter` · `laravel` · `nestjs` · `supabase` · `typescript` · `python` · `php` · `rust` · `golang` · `java` · `csharp` · `sql` · `security-audit` · `owasp` · `test-driven-development` · `code-quality` · `frontend` · `backend` · `mobile` · `devops` · `database` · `api-design` · `i18n` · `localization` · `seo` · `performance` · `refactoring` · `anti-patterns`

---

<div align="center">

**Construido con ❤️ para la comunidad de [Qwen Code](https://github.com/QwenLM/qwen-code)**

[⬆ Volver arriba](#qwen-orchestrator--equipo-de-desarrollo-ai-multi-agente-para-qwen-code)

</div>
