> 🌐 简体中文版本 | [阅读英文版](../README.md)

# Qwen Orchestrator — Qwen Code 多 Agent AI 开发团队

**[English](../README.md)** · **[Español](README.es.md)** · **[中文](README.zh.md)** · **[日本語](README.ja.md)** · **[한국어](README.ko.md)** · **[Português](README.pt.md)** · **[Français](README.fr.md)** · **[العربية](README.ar.md)**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version: 0.0.1](https://img.shields.io/badge/version-0.0.1-green.svg)](package.json)
[![Qwen Code Extension](https://img.shields.io/badge/Qwen%20Code-Extension-orange.svg)](https://github.com/QwenLM/qwen-code)
[![Agents: 22](https://img.shields.io/badge/agents-22-blue.svg)](#agent-团队22-个专业-agent)
[![Skills: 22](https://img.shields.io/badge/skills-22-purple.svg)](#技能22-项专业技能)

> 🤖 **专为 [Qwen Code CLI](https://github.com/QwenLM/qwen-code) 打造的企业级多 Agent AI 编排扩展**
>
> 将你的 AI 编程助手转变为一个完整的**软件开发部门** — 拥有 22 个专业 Agent、22 项专业技能、6 个斜杠命令、持久化记忆和 MCP 工具集成。
>
> **作者：** [Omar-Obando](https://github.com/Omar-Obando) · **许可证：** MIT · **版本：** 0.0.1

---

## ⚡ Qwen Orchestrator 是什么？

**Qwen Orchestrator** 是一个专为 **[Qwen Code](https://github.com/QwenLM/qwen-code)** 构建的强大扩展 — Qwen Code 是阿里巴巴推出的开源 AI 编程 CLI 工具。它将单个 AI 编程助手转变为一个由 **22 个专业 AI Agent 组成的协调团队**，像一个专业的软件开发部门一样协同工作。

### 为什么选择 Qwen Orchestrator？

想象一下，你手边就有一支完整的工程团队：一个负责编排的 **Commander**、一个负责架构的 **Planner**、并行编码的 **前端和后端开发者**、一个把控质量的 **Reviewer**、一个负责测试的 **QA 工程师**、一个审计漏洞的 **网络安全工程师**、一个负责部署的 **DevOps 工程师** — 还有另外 14 名专家，全部自动协调工作。

**没有其他 AI 编程扩展能提供这种级别的专业多 Agent 编排能力。**

### 专属构建平台

<table>
<tr>
<td width="80" align="center">

![Qwen Code](https://img.shields.io/badge/Qwen%20Code-CLI-orange?style=for-the-badge)

</td>
<td>

**[Qwen Code](https://github.com/QwenLM/qwen-code)** 由 [QwenLM / Alibaba](https://github.com/QwenLM) 开发 — 开源 AI 编程助手 CLI，支持多种 LLM 提供商（Qwen、DeepSeek、OpenAI、Anthropic、本地模型）。Qwen Orchestrator 是一个**社区构建的扩展**，与阿里巴巴无关联或背书关系。

</td>
</tr>
</table>

> ⚠️ **此扩展仅适用于 [Qwen Code CLI](https://github.com/QwenLM/qwen-code)**。它不是独立工具，不是 VS Code 扩展，也不兼容其他 AI 编程助手。如果你还没有安装 Qwen Code，请[先安装](https://github.com/QwenLM/qwen-code#installation)。

---

## 🎯 概览

Qwen Orchestrator 将 Qwen Code 转变为一个**专业 IT 部门**，拥有 **22 个专业 AI Agent**、**22 项专家技能**、**6 个斜杠命令**、**持久化记忆（Knowledge Graph）** 和一个 **MCP 工具服务器**。每个功能都经过测试、审查和完整交付 — **没有模型稿、没有占位符、没有未完成的 CRUD 操作**。

### 核心保障

| 保障项              | 实施方式                                                             |
| ------------------- | -------------------------------------------------------------------- |
| **无模型稿/占位符** | Agent 被禁止编写桩代码；anti-pattern 技能会检测违规行为              |
| **无模型锁定**      | 所有 Agent 默认使用用户的模型；可选择按 Agent 覆盖                   |
| **循环保护**        | Monitor Agent 自动检测并中断 LLM 循环                                |
| **N+1 查询防护**    | SQL best-practices 技能 + Database Architect Agent 强制预加载        |
| **SQL 格式化**      | 大写关键词、每行一列、缩进 JOIN — 由技能强制执行                     |
| **安全优先**        | 通过 security-audit 技能和 Reviewer Agent 实现 OWASP Top 10 合规     |
| **CRUD 完整性**     | Tech Lead 验证每个实体都具备 Create/Read/Update/Delete/Restore       |
| **多语言支持**      | 支持 TypeScript、PHP、Python、Dart、Rust、Go、Java、C# — 不仅仅是 TS |
| **Context7 可选**   | 无需 Context7 即可工作；安装后，Agent 可获取实时文档查询             |
| **压缩恢复**        | 状态持久化到 `.qwen-orchestrator/` — 在上下文窗口压缩后仍可恢复      |

### 🌟 亮点

- **22 个专业 Agent** — 从 Commander 到 Localization Engineer，每个都有专属工具和专业知识
- **22 项专业技能** — TDD workflow、security audit、anti-pattern 检测、design system、SQL best practices 等
- **6 个斜杠命令** — `/orchestrator`、`/orchestrate`、`/plan`、`/review`、`/test`、`/deploy`
- **先问后做** — Agent 在开始工作前通过 `AskUserQuestion` 提出澄清问题
- **持久化记忆** — 通过 MCP Memory Server 的 Knowledge Graph 跨会话存储决策
- **零模型锁定** — 支持 Qwen、DeepSeek、OpenAI、Anthropic 或任何本地模型
- **多语言支持** — 不仅限 TypeScript：PHP（Laravel）、Python（Django）、Dart（Flutter）、Rust、Go、Java、C#
- **框架技能** — 内置 Flutter Web、Laravel、NestJS 和 Supabase 技能
- **循环保护** — Monitor Agent 自动检测并中断 LLM 无限循环
- **Agent 间消息传递** — Commander 可通过 SendMessage 在任务执行中向后台 Agent 发送指令
- **定时任务** — 使用 CronCreate 创建定期质量审计、健康检查和进度报告
- **实时监控** — 通过 Monitor 工具监控构建、容器和日志
- **UI/UX 集成** — Frontend Developer 可利用 UI UX Pro Max、Designer Skills 和 Taste Skill

---

## 📊 快速统计

| 指标               | 数量 | 详情                                                                                                                                                                                                                                                                                               |
| ------------------ | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Agents**         | 22   | Commander、Planner、Frontend Dev、Backend Dev、Reviewer、QA、PM、Doc Researcher、Tech Lead、DB Architect、Product Owner、DevOps、Code Quality Guard、Monitor、SEO Specialist、Tech Selector、Cybersecurity Eng.、Performance Eng.、Release Manager、API Specialist、Mobile Eng.、Localization Eng. |
| **Skills**         | 22   | Design system、code review、TDD、security audit、performance、debugging、deployment、Context7 docs、domain-driven、API design、refactoring、compaction recovery、git workflow、database design、anti-pattern、multi-language、SQL、Flutter Web、Laravel、NestJS、Supabase                          |
| **Commands**       | 6    | `/orchestrator`、`/orchestrate`、`/plan`、`/review`、`/test`、`/deploy`                                                                                                                                                                                                                            |
| **MCP 工具**       | 7    | Mission 状态、项目验证、TODO 生成、Agent 名册、Context7 解析、CRUD 检查、检查点                                                                                                                                                                                                                    |
| **MCP 服务器**     | 2    | Orchestrator 工具 + Memory Knowledge Graph                                                                                                                                                                                                                                                         |
| **编程语言**       | 8+   | TypeScript、PHP、Python、Dart、Rust、Go、Java、C#                                                                                                                                                                                                                                                  |
| **Qwen Code 工具** | 21   | 完整工具集 — Edit、WriteFile、ReadFile、Grep、Glob、Shell、AskUserQuestion、Agent、Skill、SendMessage、Monitor、CronCreate、ExitPlanMode 等                                                                                                                                                        |

### 核心保障

| 保障项              | 实施方式                                                             |
| ------------------- | -------------------------------------------------------------------- |
| **无模型稿/占位符** | Agent 被禁止编写桩代码；anti-pattern 技能会检测违规行为              |
| **无模型锁定**      | 所有 Agent 默认使用用户的模型；可选择按 Agent 覆盖                   |
| **循环保护**        | Monitor Agent 自动检测并中断 LLM 循环                                |
| **N+1 查询防护**    | SQL best-practices 技能 + Database Architect Agent 强制预加载        |
| **SQL 格式化**      | 大写关键词、每行一列、缩进 JOIN — 由技能强制执行                     |
| **安全优先**        | 通过 security-audit 技能和 Reviewer Agent 实现 OWASP Top 10 合规     |
| **CRUD 完整性**     | Tech Lead 验证每个实体都具备 Create/Read/Update/Delete/Restore       |
| **多语言支持**      | 支持 TypeScript、PHP、Python、Dart、Rust、Go、Java、C# — 不仅仅是 TS |
| **Context7 可选**   | 无需 Context7 即可工作；安装后，Agent 可获取实时文档查询             |
| **压缩恢复**        | 状态持久化到 `.qwen-orchestrator/` — 在上下文窗口压缩后仍可恢复      |

---

## 架构

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

## Agent 团队（22 个专业 Agent）

| #   | Agent                  | 颜色      | 角色              | 超能力                                 |
| --- | ---------------------- | --------- | ----------------- | -------------------------------------- |
| 1   | **Commander**          | 🔴 红色   | 总编排师          | 并行委派、持续执行直到完成             |
| 2   | **Planner**            | 🔵 蓝色   | 研究与架构        | 文件级规划、设计决策                   |
| 3   | **Frontend Developer** | 🔵 青色   | UI/UX 实现        | 组件开发、响应式、无障碍、高性能       |
| 4   | **Backend Developer**  | 🟢 绿色   | 服务端逻辑        | API、认证、缓存、数据库操作            |
| 5   | **Reviewer**           | 🟣 紫色   | 质量守门员        | 唯一能批准任务完成的 Agent             |
| 6   | **QA Engineer**        | 🟠 橙色   | 质量保证          | 测试策略、边界用例发现                 |
| 7   | **Project Manager**    | 🔵 青色   | 交付管理          | 范围控制、风险评估                     |
| 8   | **Doc Researcher**     | 🟣 洋红   | Context7 知识引擎 | 实时文档查询、防止幻觉                 |
| 9   | **Tech Lead**          | 🟡 金色   | 标准与指导        | 模块完整性、CRUD 验证                  |
| 10  | **Database Architect** | 🟢 青色   | 数据层专家        | Schema 设计、迁移安全                  |
| 11  | **Product Owner**      | 🟡 琥珀   | 业务价值          | 用户故事、验收标准                     |
| 12  | **DevOps Engineer**    | 🔘 石板   | 基础设施          | CI/CD、Docker、部署自动化              |
| 13  | **Code Quality Guard** | 🌹 玫瑰   | 质量哨兵          | 语法检查、代码规范、类型检查           |
| 14  | **Monitor**            | 🛡️ 盾牌   | 循环守护者        | 检测/中断 LLM 循环、运行时看门狗       |
| 15  | **SEO Specialist**     | 🔵 蓝色   | SEO 与网页性能    | Meta 标签、结构化数据、Core Web Vitals |
| 16  | **Tech Selector**      | 🟣 紫罗兰 | 技术顾问          | 框架/数据库选型，附带优缺点分析        |
| 17  | **Cybersecurity Eng.** | 🔴 深红   | 应用安全          | OWASP、威胁建模、依赖审计              |
| 18  | **Performance Eng.**   | ⚡ 琥珀   | 速度与扩展        | 性能分析、查询优化、负载测试           |
| 19  | **Release Manager**    | 🏷️ 靛蓝   | 发布与版本管理    | SemVer、变更日志、回滚规划             |
| 20  | **API Specialist**     | 🔗 青色   | API 与集成        | REST/GraphQL、版本控制、第三方 API     |
| 21  | **Mobile Engineer**    | 📱 天蓝   | 移动应用          | Flutter、React Native、离线优先        |
| 22  | **Localization Eng.**  | 🌐 青柠   | i18n/L10n         | 多语言、RTL、文化适配                  |

---

## 技能（22 项专业技能）

| #   | 技能                    | 用途                                                         |
| --- | ----------------------- | ------------------------------------------------------------ |
| 1   | **Code Review**         | OWASP + SOLID + Clean Code 系统化审查                        |
| 2   | **Architect**           | 架构设计，包含 ADR 记录                                      |
| 3   | **TDD Workflow**        | 测试驱动开发（Red/Green/Refactor）                           |
| 4   | **Security Audit**      | OWASP Top 10 漏洞检测                                        |
| 5   | **Performance**         | 性能分析、优化、基准测试                                     |
| 6   | **Debugging**           | 系统化调试方法论                                             |
| 7   | **Deployment**          | CI/CD、Docker、发布管理                                      |
| 8   | **Context7 Docs**       | 可选 — 通过 Context7 MCP 查询实时文档                        |
| 9   | **Domain-Driven**       | 完整业务模块构建器 — 子模块、CRUD、无模型稿                  |
| 10  | **API Design**          | RESTful 标准、响应封装、分页                                 |
| 11  | **Refactoring**         | 安全的行为保持型代码重构                                     |
| 12  | **Compaction Recovery** | 上下文压缩后的状态恢复                                       |
| 13  | **Git Workflow**        | 分支策略、提交规范、PR 模板                                  |
| 14  | **Database Design**     | Schema 设计、索引、迁移安全                                  |
| 15  | **Anti-Pattern**        | 禁止模型稿、占位符、N+1 查询、死代码                         |
| 16  | **Multi-Language**      | 8+ 语言：TS、PHP、Python、Dart、Rust、Go、Java、C#           |
| 17  | **SQL Best Practices**  | 缩进格式、N+1 防护、参数化查询                               |
| 18  | **Design System**       | 多页面架构、调色板、字体排版、间距、Astro + Cloudflare Pages |
| 19  | **Flutter Web**         | 响应式布局、自适应组件、状态管理、表单                       |
| 20  | **Laravel**             | Eloquent ORM、Form Requests、队列、API 后端模式              |
| 21  | **NestJS**              | 模块、Guards、Pipes、拦截器、请求生命周期                    |
| 22  | **Supabase**            | RLS 策略、Edge Functions、认证、自动生成 API                 |

---

## 命令（6 个斜杠命令）

### `/orchestrator` — 主入口 ⭐

```bash
/orchestrator Build a checkout system with Stripe payments
```

这是**核心命令**。它激活完整的 22 Agent 团队并执行完整的专业工作流：

1. **澄清** → 如果存在歧义，通过 `AskUserQuestion` 向你提出针对性问题
2. **发现** → 扫描项目、检测技术栈、读取配置
3. **规划** → 将任务分解为里程碑，支持并行执行组
4. **执行** → 同时启动专业 Agent 以实现最大吞吐量
5. **验证** → Reviewer + QA 确认一切正常，零回归
6. **交付** → 构建内容、变更内容和证据的完整总结

### 全部命令

| 命令                       | 说明                                |
| -------------------------- | ----------------------------------- |
| **`/orchestrator [目标]`** | ⭐ **主入口** — 完整团队 + 澄清协议 |
| `/orchestrate [任务]`      | 直接执行任务（不提出澄清问题）      |
| `/plan [功能]`             | 仅创建实施计划                      |
| `/review [目标]`           | 全面代码审查                        |
| `/test [目标]`             | 执行并分析测试套件                  |
| `/deploy [目标]`           | 带前后验证的部署                    |

> **何时使用 `/orchestrator` 还是 `/orchestrate`？**
>
> - `/orchestrator` — 当开始新功能、新项目或复杂任务时。团队会先提出澄清问题。
> - `/orchestrate` — 当你已经清楚知道要什么，只需要快速执行。

---

## 用户澄清：先问后做

编排器**从不假设**你想要什么。当任务开始时，Commander 和 Planner Agent 使用 `AskUserQuestion` 工具在编写任何代码之前澄清需求。

### 工作方式

1. 你描述你的任务（例如 `/orchestrator Build a user authentication system`）
2. Commander 分析你的请求并检查：**这是 100% 清晰的吗？**
3. 如果不是，它会提出带有预定义选项的针对性问题
4. 你回答后，规划才会开始

### 交互示例

```
👤 用户: /orchestrator Build an e-commerce checkout

🤖 Commander: 我需要在规划前澄清几个问题：

   📋 支付提供商 (问题 1/3)
   我应该集成哪个支付网关？
   ○ Stripe       — 行业标准，API 优秀，支持订阅
   ○ PayPal       — 广泛信任，良好的国际支持
   ○ MercadoPago  — 最适合拉美市场

   📋 结账流程 (问题 2/3)
   需要哪种结账体验？
   ○ 单页面       — 所有步骤在一页（更简单、更快）
   ○ 多步骤       — 每步一个页面（更可控）

   📋 访客结账 (问题 3/3)
   是否允许用户无需账户即可结账？
   ○ 是           — 降低门槛，提高转化率
   ○ 否           — 需要账户，更有利于用户留存

👤 用户选择: MercadoPago → 多步骤 → 是

🤖 Commander: 完美。正在规划使用 MercadoPago、多步骤流程、支持访客的结账功能。
```

### 会提问的 Agent

| Agent              | 何时提问                                              |
| ------------------ | ----------------------------------------------------- |
| Commander          | 每个任务之前 — 范围、优先级、约束条件                 |
| Planner            | 架构决策之前 — 技术栈、设计模式                       |
| Product Owner      | 定义用户故事时 — 验收标准、边界用例                   |
| QA Engineer        | 设计测试策略时 — 关键路径、阈值                       |
| Project Manager    | 范围界定时 — 截止日期、风险容忍度、资源               |
| **Tech Selector**  | **技术栈未指定时 — 展示框架、数据库、语言及其优缺点** |
| **SEO Specialist** | **构建 Web 项目时 — 目标受众、内容类型、地区**        |

> **提示**：你总是可以预先提供完整细节来跳过提问。Agent 只在检测到歧义或缺少信息时才会提问。

---

## 高级工具集成

编排器利用 Qwen Code 完整的工具集，超越基本的文件操作：

### Agent 间通信（SendMessage）

Commander 可以在任务执行过程中向后台 Agent 发送消息，以重定向、澄清或提供额外上下文，而无需等待 Agent 完成。

```
SendMessage({ task_id: "worker-auth", message: "User clarified: use JWT, not sessions." })
```

### 实时监控（Monitor）

DevOps Engineer 可以监控长时间运行的进程（构建、容器、测试套件）并接收流式通知。

```
Monitor({ command: "docker compose logs -f app", description: "Watch app logs during deploy" })
```

### 定时任务（CronCreate/CronList/CronDelete）

创建定期或一次性任务，用于自动化质量检查和进度报告。

```
CronCreate({ cron: "0 6 * * 1-5", prompt: "Run security audit", recurring: true })
```

### 计划审批门（ExitPlanMode）

Planner 在执行开始前展示最终计划供用户审批，确保目标一致。

### 任务取消（TaskStop）

Commander 可以立即取消失控或过时的后台任务。

### Agent-工具矩阵

| 工具               | Cmd | Plan | FE  | BE  | Rev | QA  | PM  | Doc | TL  | DB  | PO  | Dev | CQG | Mon | SEO | TSel |
| ------------------ | :-: | :--: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :--: |
| AskUserQuestion    | ✅  |  ✅  | ✅  |     |     | ✅  | ✅  |     |     |     | ✅  |     |     |     | ✅  |  ✅  |
| Agent (sub-agents) | ✅  |  ✅  |     |     |     |     |     |     |     |     |     |     |     |     |     |      |
| Skill (load skill) |     |      | ✅  |     |     |     |     |     |     |     |     |     |     |     |     |      |
| SendMessage        | ✅  |  ✅  |     |     |     |     |     |     |     |     |     |     |     | ✅  |     |      |
| Monitor (watchdog) | ✅  |      |     |     |     |     | ✅  |     |     |     |     |     | ✅  |     |     |
| TaskStop           | ✅  |      |     |     |     |     |     |     |     |     |     |     | ✅  |     |     |
| CronCreate/List    | ✅  |      |     |     |     | ✅  | ✅  |     |     |     |     |     | ✅  |     |     |
| ExitPlanMode       |     |  ✅  |     |     |     |     |     |     |     |     |     |     |     |     |     |
| SaveMemory         | ✅  |  ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  |     | ✅  |     |     | ✅  | ✅  |  ✅  |
| Lsp (diagnostics)  | ✅  |  ✅  | ✅  | ✅  | ✅  |     |     | ✅  | ✅  |     |     | ✅  | ✅  |     |     |
| WebFetch           | ✅  |  ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  |     | ✅  |  ✅  |

---

## 模型配置

**默认情况下，所有 Agent 使用你的 Qwen Code 默认模型。** 没有硬编码模型 — 零锁定。

### 使用默认模型（推荐）

安装扩展后直接使用即可。每个 Agent 会自动使用你在 Qwen Code 中配置的模型。

### 为特定 Agent 设置特定模型

要为特定 Agent 使用不同模型，编辑 `agents/` 目录下对应 Agent 的 `.md` 文件，取消注释 `model` 行：

```yaml
---
name: commander
# ... other fields ...
# model: uncomment below to override the user's default model
model: qwen-max # ← 取消注释并设置你偏好的模型
---
```

### 各角色推荐模型

| Agent              | 推荐模型                  | 原因                       |
| ------------------ | ------------------------- | -------------------------- |
| Commander          | `qwen-max` 或 `qwen-plus` | 编排需要强大的推理能力     |
| Planner            | `qwen-max` 或 `qwen-plus` | 架构分析需要强大的分析能力 |
| Frontend Developer | `qwen3-coder-plus`        | 专为代码生成优化           |
| Backend Developer  | `qwen3-coder-plus`        | 专为代码生成优化           |
| Reviewer           | `qwen-max`                | 质量门控需要深度理解能力   |
| QA Engineer        | `qwen-plus`               | 测试策略的平衡选择         |
| Code Quality Guard | `qwen-plus`               | 语法/规范检查响应速度快    |
| 其他所有 Agent     | 用户默认模型              | 无特殊需求                 |

> **注意**：支持你的 Qwen Code 安装中所配置的任何模型 — 包括 DeepSeek、OpenAI、Anthropic 或本地模型。model 字段只是一个传递给你配置的提供商的字符串。

---

## Orchestrator 模式

Qwen Orchestrator 作为一个**虚拟 CLI 模式**，通过 `/orchestrator` 激活。Commander Agent 接管并管理完整的 22 Agent 团队。

### 推荐的 CLI 设置

为获得最大自主性，在运行 `/orchestrate` **之前**，将你的 Qwen Code CLI 设置为以下模式之一：

| CLI 模式      | 设置        | 说明                                                     |
| ------------- | ----------- | -------------------------------------------------------- |
| **Auto-Edit** | `auto-edit` | Agent 自由编辑/写入文件。用户确认 Shell 操作。**推荐。** |
| **YOLO**      | `yolo`      | 完全自主。无需确认。最快速度。                           |
| **Default**   | `default`   | 用户确认每次编辑。较慢但控制力最强。                     |
| **Plan**      | `plan`      | 仅规划 — Agent 无法写入文件。                            |

### 为什么 Agent 不会覆盖你的设置

Agent 故意**没有** `approvalMode`、`runConfig` 或 `background` 字段：

- **你从 CLI 控制自主性**，而不是从扩展中
- **没有时间/轮次限制** — Monitor Agent 负责处理失控检测
- **后台执行** 由 Commander 在生成子 Agent 时管理
- **编排器适应你的 CLI 设置**，而不是反过来

---

## Context7 集成（可选）

[Context7](https://context7.com) 为任何库或框架提供实时、特定版本的文档。它是**可选的** — 编排器在没有它的情况下也能完美工作。

### 安装了 Context7

- Doc Researcher Agent 解析库 ID 并获取实时文档
- 所有 Agent 可以在编写不熟悉的 API 代码之前查询 Context7
- API 签名和模式零幻觉

### 未安装 Context7

- Agent 回退到网络搜索和训练知识
- `context7-docs` 技能会优雅降级
- 不会出现错误或功能缺失

### 如何安装 Context7

添加到你的 Qwen Code MCP 配置：

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

`@modelcontextprotocol/server-memory` MCP 服务器提供了一个跨会话持久化的 **Knowledge Graph**。Agent 可以保存决策、偏好和项目上下文，即使会话重置也不会丢失。

### 存储内容

- **项目决策**：数据库选择、框架选择、架构模式
- **用户偏好**：偏好的 CSS 框架、深色/浅色模式、命名约定
- **架构记录**：组件层级、API 约定、部署目标
- **会话连续性**：上次任务、下一步、前一会话的已知问题

### Agent 如何使用

```
# Commander 保存一个决策
create_entities({
  entities: [{ name: "database", entityType: "decision", observations: ["PostgreSQL 16", "RLS enabled", "UUID primary keys"] }]
})

# Tech Lead 保存编码标准
create_entities({
  entities: [{ name: "code-standards", entityType: "standard", observations: ["PascalCase for components", "ESLint strict mode", "Tests mandatory"] }]
})

# 任何 Agent 查询之前的决策
read_graph({})
```

### 设置（已包含在扩展中）

Memory MCP 服务器已在 `qwen-extension.json` 中配置，加载扩展时自动运行。无需额外设置。

> **参考**：[MCP Server Memory on npm](https://www.npmjs.com/package/@modelcontextprotocol/server-memory)

---

## MCP 工具服务器（可选）

可选的 MCP 服务器提供 7 个用于任务管理的工具：

| 工具                       | 用途                          |
| -------------------------- | ----------------------------- |
| `get_mission_status`       | 获取当前任务进度              |
| `validate_project`         | 验证项目结构和健康状态        |
| `generate_todo`            | 从任务描述生成结构化 TODO     |
| `get_agent_roster`         | 列出所有 22 个 Agent 及其能力 |
| `context7_resolve_library` | 解析 Context7 库 ID           |
| `check_crud_completeness`  | 验证所有实体的完整 CRUD       |
| `create_checkpoint`        | 创建用于压缩恢复的状态检查点  |

### 设置

```bash
cd qwen-orchestrator
npm install
npm run build
npm run mcp:start
```

然后添加到你的 Qwen Code MCP 配置：

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

## 执行流程

```
User Request
     │
     ▼
┌──────────┐     ┌──────────┐     ┌──────────┐
│ COMMANDER│────▶│ PLANNER  │────▶│   TODO   │
│ Discovers│     │ Analyzes │     │ Created  │
│ & Scopes │     │ & Plans  │     │          │
└──────────┘     └──────────┘     └────┬─────┘
                                       │
                    ┌──────────────────┼──────────────────┐
                    ▼                  ▼                  ▼
              ┌──────────┐      ┌──────────┐      ┌──────────┐
              │ FE DEV A │      │ BE DEV B │      │ MOB DEV C│
              │ Task 1   │      │ Task 2   │      │ Task 3   │
              └────┬─────┘      └────┬─────┘      └────┬─────┘
                  │                 │                  │
                  ▼                 ▼                  ▼
             ┌──────────┐      ┌──────────┐      ┌──────────┐
             │ REVIEWER │      │   QA     │      │ CQ GUARD │
             │ Verifies │      │ Tests A  │      │ Lint+Type│
             └────┬─────┘      └────┬─────┘      └────┬─────┘
                  │                 │                  │
                  └────────────────┼──────────────────┘
                                   ▼
                          ┌──────────────┐
                          │   COMMANDER  │
                          │   CONCLUDES  │
                          └──────────────┘
```

---

## 质量标准

编排器生成的每一行代码都满足：

- **复杂度**：每个函数圈复杂度 ≤ 10
- **大小**：每个函数 ≤ 40 行，≤ 4 个参数
- **类型**：严格类型，不使用 `any`
- **测试**：TDD 强制，80%+ 覆盖率
- **安全**：OWASP Top 10 合规
- **SQL**：大写关键词、每行一列、缩进 JOIN、N+1 防护
- **审查**：合并前多维代码审查
- **语言**：不仅限 TypeScript — 适应项目的技术栈

---

## 项目结构

```
qwen-orchestrator/
├── qwen-extension.json       # 扩展清单 (v0.0.1)
├── package.json              # NPM 包配置
├── AGENTS.md                 # Agent 操作规则
├── LICENSE                   # MIT 许可证
│
├── agents/                   # 22 个 Agent 定义
│   ├── commander.md          #   总编排师
│   ├── planner.md            #   研究与规划
│   ├── frontend-developer.md #   UI/UX 实现
│   ├── backend-developer.md  #   服务端逻辑
│   ├── reviewer.md           #   质量守门员
│   ├── qa-engineer.md        #   测试策略
│   ├── project-manager.md    #   交付管理
│   ├── doc-researcher.md     #   Context7 知识引擎
│   ├── tech-lead.md          #   标准与模块完整性
│   ├── database-architect.md #   Schema 与迁移安全
│   ├── product-owner.md      #   用户故事与验收标准
│   ├── devops-engineer.md    #   CI/CD 与基础设施
│   ├── code-quality-guard.md #   语法、规范、类型检查哨兵
│   ├── monitor.md            #   循环守护与运行时看门狗
│   ├── seo-specialist.md     #   SEO 与网页性能
│   ├── tech-selector.md      #   技术选型顾问
│   ├── cybersecurity-engineer.md  # 应用安全
│   ├── performance-engineer.md    # 速度与扩展优化
│   ├── release-manager.md         # SemVer 与发布流程
│   ├── api-specialist.md          # REST/GraphQL 与集成
│   ├── mobile-engineer.md         # Flutter、React Native
│   └── localization-engineer.md   # i18n/L10n 与 RTL
│
├── skills/                   # 22 项技能定义
│   ├── code-review/          #   代码审查方法论
│   ├── architect/            #   架构设计
│   ├── tdd-workflow/         #   TDD 模式
│   ├── security-audit/       #   OWASP Top 10
│   ├── performance/          #   性能优化
│   ├── debugging/            #   调试方法论
│   ├── deployment/           #   DevOps 与 CI/CD
│   ├── context7-docs/        #   Context7 文档查询（可选）
│   ├── domain-driven/        #   完整模块构建器
│   ├── api-design/           #   RESTful API 标准
│   ├── refactoring/          #   安全代码重构
│   ├── compaction-recovery/  #   上下文保持
│   ├── git-workflow/         #   Git 分支与提交
│   ├── database-design/      #   Schema 与查询优化
│   ├── anti-pattern/         #   禁止模型稿、N+1、死代码
│   ├── multi-lang/           #   8+ 语言支持
│   ├── sql-best-practices/   #   SQL 格式化与安全
│   ├── design-system/        #   调色板、字体排版、间距、多页面
│   ├── flutter-web/          #   Flutter Web 模式
│   ├── laravel/              #   Laravel PHP 模式
│   ├── nestjs/               #   NestJS TypeScript 模式
│   └── supabase/             #   Supabase 模式
│
├── commands/                 # 6 个斜杠命令
│   ├── orchestrator.md       #   ⭐ 主入口（澄清优先）
│   ├── orchestrate.md        #   直接执行任务
│   ├── plan.md               #   创建计划
│   ├── review.md             #   代码审查
│   ├── test.md               #   测试执行
│   └── deploy.md             #   带验证的部署
│
├── context/
│   └── QWEN.md               #   最佳实践（注入到会话中）
│
├── mcp-server/src/
│   └── index.ts              #   7 个 MCP 工具（可选）
│
└── docs/
    ├── ARCHITECTURE.md       #   详细架构
    └── QUICK-START.md        #   快速入门指南
```

---

## UI/UX 技能集成（推荐）

Frontend Developer Agent 可以利用外部 UI/UX 技能库获取超越代码的设计智能。这些是**可选的**，但对于 Web 项目强烈推荐。

### 推荐技能

| 技能                | 安装命令                                                 | 提供的功能                                                                                                                                                       |
| ------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **UI UX Pro Max**   | `npx uipro-cli init`                                     | 161 条推理规则、67 种 UI 风格、设计系统生成器、领域搜索（产品/风格/字体/颜色）、技术栈专用代码（React、Next.js、Vue、Flutter 等）                                |
| **Designer Skills** | `/plugin marketplace add Owl-Listener/designer-skills`   | 8 个插件的 87 项技能和 27 个命令：design-research、design-systems、ux-strategy、ui-design、interaction-design、prototyping-testing、design-ops、designer-toolkit |
| **Taste Skill**     | `npx skills add https://github.com/Leonxlnx/taste-skill` | 反 AI 通用风格前端框架 — 高端布局、字体排版、动效、间距。技能：design-taste-frontend、minimalist-ui、soft-skill、brutalist-ui、redesign                          |

### 使用场景

- **新项目** → 运行 UI UX Pro Max 的设计系统生成器获取颜色、字体排版、间距 Token
- **组件库** → 使用 Designer Skills 的 design-systems 插件管理 Token、主题和规范
- **优化现有 UI** → 使用 Taste Skill 的 `redesign-existing-projects` 审计并修复布局/间距
- **UX 研究** → 使用 Designer Skills 的 ux-strategy 插件进行竞品分析和信息架构
- **动效与交互** → 使用 Designer Skills 的 interaction-design 插件添加微动画

---

## 安装

### 快速安装（推荐）

```bash
qwen extensions install https://github.com/Omar-Obando/qwen-orchestrator
```

这将自动注册所有 22 个 Agent、22 项技能、6 个命令和 MCP Memory 服务器。

### 手动安装

1. 克隆仓库：

```bash
git clone https://github.com/Omar-Obando/qwen-orchestrator.git
```

2. 添加到你的 Qwen Code 配置：

```json
{
  "extensions": ["./path/to/qwen-orchestrator"]
}
```

3. （可选）构建 MCP 工具服务器：

```bash
cd qwen-orchestrator
npm install
npm run build
```

### 添加 MCP 服务器

扩展包含两个 MCP 服务器。要添加更多（如 Context7），在 `qwen-extension.json` 的 `mcpServers` 中添加：

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

> **文档**：[创建 Qwen Code 扩展](https://qwenlm.github.io/qwen-code-docs/en/developers/extensions/extension/#create-a-boilerplate-extension)

---

## 作者

**Omar Obando**

- GitHub: [@Omar-Obando](https://github.com/Omar-Obando)
- 许可证: MIT

---

## 🔑 关键词与主题

`qwen-code` · `qwen-code-extension` · `multi-agent` · `ai-agents` · `orchestration` · `ai-coding` · `ai-development` · `tdd` · `code-review` · `devops` · `cicd` · `mcp` · `model-context-protocol` · `ai-orchestrator` · `software-engineering` · `ai-assistant` · `coding-agent` · `enterprise-ai` · `multi-agent-system` · `ai-coding-assistant` · `qwen` · `deepseek` · `openai` · `flutter` · `laravel` · `nestjs` · `supabase` · `typescript` · `python` · `php` · `rust` · `golang` · `java` · `csharp` · `sql` · `security-audit` · `owasp` · `test-driven-development` · `code-quality` · `frontend` · `backend` · `mobile` · `devops` · `database` · `api-design` · `i18n` · `localization` · `seo` · `performance` · `refactoring` · `anti-patterns`

---

<div align="center">

**用 ❤️ 为 [Qwen Code](https://github.com/QwenLM/qwen-code) 社区构建**

[⬆ 返回顶部](#qwen-orchestrator--qwen-code-多-agent-ai-开发团队)

</div>
