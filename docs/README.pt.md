> 🌐 Versão em Português | [Ler em English](../README.md)

**[English](../README.md)** · **[Español](README.es.md)** · **[中文](README.zh.md)** · **[日本語](README.ja.md)** · **[한국어](README.ko.md)** · **Português** · **[Français](README.fr.md)** · **[العربية](README.ar.md)**

# Qwen Orchestrator — Equipe de Desenvolvimento IA Multi-Agente para Qwen Code

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../LICENSE)
[![Version: 0.0.1](https://img.shields.io/badge/version-0.0.1-green.svg)](../package.json)
[![Qwen Code Extension](https://img.shields.io/badge/Qwen%20Code-Extension-orange.svg)](https://github.com/QwenLM/qwen-code)
[![Agents: 22](https://img.shields.io/badge/agents-22-blue.svg)]
[![Skills: 22](https://img.shields.io/badge/skills-22-purple.svg)]

> 🤖 **A extensão de orquestração IA multi-agente corporativa construída exclusivamente para [Qwen Code CLI](https://github.com/QwenLM/qwen-code)**
>
> Transforme seu assistente de codificação IA em um **departamento completo de desenvolvimento de software** — com 22 agentes especializados, 22 habilidades profissionais, 6 comandos slash, memória persistente e integração de ferramentas MCP.
>
> **Autor:** [Omar-Obando](https://github.com/Omar-Obando) · **Licença:** MIT · **Versão:** 0.0.1

---

## ⚡ O que é o Qwen Orchestrator?

**Qwen Orchestrator** é uma extensão poderosa construída exclusivamente para o **[Qwen Code](https://github.com/QwenLM/qwen-code)** — o CLI de codificação IA de código aberto da Alibaba. Ele transforma um único assistente de codificação IA em uma **equipe coordenada de 22 agentes IA especializados** que trabalham juntos como um departamento profissional de desenvolvimento de software.

### Por que Qwen Orchestrator?

Imagine ter uma equipe de engenharia completa ao seu alcance: um **Commander** que orquestra, um **Planner** que arquiteta, **Desenvolvedores Frontend e Backend** que codificam em paralelo, um **Reviewer** que controla a qualidade, um **QA Engineer** que testa, um **Cybersecurity Engineer** que audita vulnerabilidades, um **DevOps Engineer** que faz deploy — e 14 especialistas adicionais, todos coordenados automaticamente.

> ⚠️ **Esta extensão SOMENTE funciona com [Qwen Code CLI](https://github.com/QwenLM/qwen-code)**. NÃO é uma ferramenta independente, NÃO é uma extensão do VS Code, e NÃO é compatível com outros assistentes de codificação IA. Se você não tem o Qwen Code instalado, [instale primeiro](https://github.com/QwenLM/qwen-code#installation).

---

## 🎯 Visão Geral

O Qwen Orchestrator transforma o Qwen Code em um **departamento de TI profissional** com **22 agentes IA especializados**, **22 habilidades especializadas**, **6 comandos slash**, **memória persistente (Knowledge Graph)** e um **servidor de ferramentas MCP**.

### Garantias Principais

| Garantia                        | Como é Aplicada                                                                      |
| ------------------------------- | ------------------------------------------------------------------------------------ |
| **Sem mockups/placeholders**    | Agentes são proibidos de escrever stubs; habilidade anti-pattern detecta violações   |
| **Sem lock-in de modelo**       | Todos os agentes usam o modelo padrão do usuário; substituição por agente é opcional |
| **Proteção contra loops**       | Agente Monitor detecta e quebra loops LLM automaticamente                            |
| **Prevenção N+1**               | Habilidade SQL best-practices + agente Database Architect forçam eager loading       |
| **Formatação SQL**              | Keywords em maiúsculas, uma coluna por linha, JOINs indentados                       |
| **Segurança em primeiro lugar** | Conformidade OWASP Top 10 via habilidade security-audit e agente Reviewer            |
| **Completude CRUD**             | Tech Lead verifica se cada entidade tem Create/Read/Update/Delete/Restore            |
| **Multi-linguagem**             | Suporta TypeScript, PHP, Python, Dart, Rust, Go, Java, C#                            |
| **Context7 opcional**           | Funciona sem Context7; com ele, agentes consultam documentação em tempo real         |
| **Recuperação de compactação**  | Estado persiste em `.qwen-orchestrator/` — sobrevive à compressão do contexto        |

---

## Equipe de Agentes (22 Agentes Especializados)

| #   | Agente                 | Cor         | Função                  | Superpoder                                             |
| --- | ---------------------- | ----------- | ----------------------- | ------------------------------------------------------ |
| 1   | **Commander**          | 🔴 Vermelho | Orquestrador Mestre     | Delegação paralela, execução incansável                |
| 2   | **Planner**            | 🔵 Azul     | Pesquisa e Arquitetura  | Planejamento em nível de arquivo, decisões de design   |
| 3   | **Frontend Developer** | 🔵 Ciano    | Implementação UI/UX     | Componentes, responsivo, acessível, rápido             |
| 4   | **Backend Developer**  | 🟢 Verde    | Lógica Server-Side      | APIs, autenticação, cache, operações de BD             |
| 5   | **Reviewer**           | 🟣 Roxo     | Guardião de Qualidade   | ÚNICO agente que pode aprovar tarefas                  |
| 6   | **QA Engineer**        | 🟠 Laranja  | Garantia de Qualidade   | Estratégia de testes, descoberta de edge cases         |
| 7   | **Project Manager**    | 🔵 Ciano    | Gestão de Entrega       | Controle de escopo, avaliação de riscos                |
| 8   | **Doc Researcher**     | 🟣 Magenta  | Conhecimento Context7   | Consulta de docs em tempo real, anti-alucinação        |
| 9   | **Tech Lead**          | 🟡 Dourado  | Padrões e Orientação    | Completude de módulos, verificação CRUD                |
| 10  | **Database Architect** | 🟢 Teal     | Especialista em Dados   | Design de schema, segurança de migrações               |
| 11  | **Product Owner**      | 🟡 Âmbar    | Valor de Negócio        | Histórias de usuário, critérios de aceitação           |
| 12  | **DevOps Engineer**    | 🔘 Slate    | Infraestrutura          | CI/CD, Docker, automação de deploy                     |
| 13  | **Code Quality Guard** | 🌹 Rosa     | Sentinela de Qualidade  | Verificação de sintaxe, lint, typecheck                |
| 14  | **Monitor**            | 🛡️ Escudo   | Guardião de Loops       | Detecta/quebra loops LLM, watchdog de runtime          |
| 15  | **SEO Specialist**     | 🔵 Azul     | SEO e Performance Web   | Meta tags, dados estruturados, Core Web Vitals         |
| 16  | **Tech Selector**      | 🟣 Violeta  | Consultor de Tecnologia | Seleção de framework/BD com prós/contras               |
| 17  | **Cybersecurity Eng.** | 🔴 Carmesim | Segurança de Aplicação  | OWASP, modelagem de ameaças, auditoria de dependências |
| 18  | **Performance Eng.**   | ⚡ Âmbar    | Velocidade e Escala     | Profiling, otimização de queries, testes de carga      |
| 19  | **Release Manager**    | 🏷️ Índigo   | Release e Versionamento | SemVer, changelogs, planejamento de rollback           |
| 20  | **API Specialist**     | 🔗 Teal     | API e Integração        | REST/GraphQL, versionamento, APIs de terceiros         |
| 21  | **Mobile Engineer**    | 📱 Sky      | Apps Mobile             | Flutter, React Native, offline-first                   |
| 22  | **Localization Eng.**  | 🌐 Lima     | i18n/L10n               | Multi-idioma, RTL, adaptação cultural                  |

---

## Habilidades (22 Habilidades Profissionais)

| #   | Habilidade              | Propósito                                                                                     |
| --- | ----------------------- | --------------------------------------------------------------------------------------------- |
| 1   | **Code Review**         | Revisão sistemática OWASP + SOLID + Clean Code                                                |
| 2   | **Architect**           | Design de arquitetura com registros ADR                                                       |
| 3   | **TDD Workflow**        | Desenvolvimento Orientado a Testes (Red/Green/Refactor)                                       |
| 4   | **Security Audit**      | Detecção de vulnerabilidades OWASP Top 10                                                     |
| 5   | **Performance**         | Profiling, otimização, benchmarks                                                             |
| 6   | **Debugging**           | Metodologia de investigação sistemática                                                       |
| 7   | **Deployment**          | CI/CD, Docker, gerenciamento de releases                                                      |
| 8   | **Context7 Docs**       | Opcional — consulta de documentação em tempo real via Context7 MCP                            |
| 9   | **Domain-Driven**       | Construtor completo de módulos de negócio                                                     |
| 10  | **API Design**          | Padrões RESTful, envelopes de resposta, paginação                                             |
| 11  | **Refactoring**         | Transformações seguras de código que preservam comportamento                                  |
| 12  | **Compaction Recovery** | Preservação de contexto entre compactações de sessão                                          |
| 13  | **Git Workflow**        | Estratégias de branching, convenções de commit, templates de PR                               |
| 14  | **Database Design**     | Design de schema, indexação, segurança de migrações                                           |
| 15  | **Anti-Pattern**        | Proíbe mockups, placeholders, queries N+1, código morto                                       |
| 16  | **Multi-Language**      | 8+ linguagens: TS, PHP, Python, Dart, Rust, Go, Java, C#                                      |
| 17  | **SQL Best Practices**  | Indentação, prevenção N+1, queries parametrizadas                                             |
| 18  | **Design System**       | Arquitetura multi-página, paletas de cores, tipografia, espaçamento, Astro + Cloudflare Pages |
| 19  | **Flutter Web**         | Layouts responsivos, widgets adaptativos, gerenciamento de estado                             |
| 20  | **Laravel**             | Eloquent ORM, Form Requests, filas, padrões de API backend                                    |
| 21  | **NestJS**              | Módulos, guards, pipes, interceptors, ciclo de vida de requests                               |
| 22  | **Supabase**            | Políticas RLS, Edge Functions, auth, APIs auto-geradas                                        |

---

## Comandos (6 Comandos Slash)

| Comando                        | Descrição                                                           |
| ------------------------------ | ------------------------------------------------------------------- |
| **`/orchestrator [objetivo]`** | ⭐ **Entrada principal** — Equipe completa com protocolo de clareza |
| `/orchestrate [missão]`        | Execução direta de missão (sem perguntas de clareza)                |
| `/plan [funcionalidade]`       | Criar apenas plano de implementação                                 |
| `/review [alvo]`               | Revisão de código abrangente                                        |
| `/test [alvo]`                 | Executar e analisar suite de testes                                 |
| `/deploy [alvo]`               | Deploy com verificação pré/pós                                      |

---

## Clareza do Usuário: Perguntar Antes de Construir

O orquestrador **nunca assume** o que você quer. Quando uma missão começa, os agentes Commander e Planner usam a ferramenta `AskUserQuestion` para esclarecer requisitos antes de escrever uma única linha de código.

### Exemplo de Interação

```
👤 Usuário: /orchestrator Construir um checkout de e-commerce

🤖 Commander: Preciso esclarecer algumas coisas antes de planejar:

   📋 Provedor de Pagamento (Pergunta 1/3)
   Qual gateway de pagamento devo integrar?
   ○ Stripe       — Padrão da indústria, excelente API
   ○ PayPal       — Amplamente confiável, suporte internacional
   ○ MercadoPago  — Melhor para mercados latino-americanos
```

---

## Instalação

### Instalação Rápida (Recomendada)

```bash
qwen extensions install https://github.com/Omar-Obando/qwen-orchestrator
```

### Instalação Manual

```bash
git clone https://github.com/Omar-Obando/qwen-orchestrator.git
```

```json
{
  "extensions": ["./path/to/qwen-orchestrator"]
}
```

---

## Configuração de Modelo

**Por padrão, todos os agentes usam seu modelo padrão do Qwen Code.** Não há modelo hardcoded — zero lock-in.

```yaml
---
name: commander
# model: descomente abaixo para substituir o modelo padrão do usuário
model: qwen-max # ← Descomente e defina seu modelo preferido
---
```

---

## Autor

**Omar Obando**

- GitHub: [@Omar-Obando](https://github.com/Omar-Obando)
- Licença: MIT

---

<div align="center">

**Construído com ❤️ para a comunidade [Qwen Code](https://github.com/QwenLM/qwen-code)**

[⬆ Voltar ao topo](#qwen-orchestrator--equipe-de-desenvolvimento-ia-multi-agente-para-qwen-code)

</div>
