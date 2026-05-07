# Qwen Orchestrator — Qwen Code를 위한 멀티 에이전트 AI 개발 팀

> 🌐 한국어 버전 | [English로 읽기](../README.md)

**[English](../README.md)** · **[Español](README.es.md)** · **[中文](README.zh.md)** · **[日本語](README.ja.md)** · **[한국어](README.ko.md)** · **[Português](README.pt.md)** · **[Français](README.fr.md)** · **[العربية](README.ar.md)**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version: 0.0.1](https://img.shields.io/badge/version-0.0.1-green.svg)](package.json)
[![Qwen Code Extension](https://img.shields.io/badge/Qwen%20Code-Extension-orange.svg)](https://github.com/QwenLM/qwen-code)
[![Agents: 22](https://img.shields.io/badge/agents-22-blue.svg)](#에이전트-팀-22개-전문-에이전트)
[![Skills: 22](https://img.shields.io/badge/skills-22-purple.svg)](#스킬-22개-전문-스킬)

> 🤖 **[Qwen Code CLI](https://github.com/QwenLM/qwen-code) 전용 엔터프라이즈급 멀티 에이전트 AI 오케스트레이션 확장 프로그램**
>
> AI 코딩 어시스턴트를 완전한 **소프트웨어 개발 부서**로 변환하세요 — 22개의 전문 에이전트, 22개의 프로페셔널 스킬, 6개의 슬래시 명령어, 영구 메모리, MCP 도구 통합까지 제공합니다.
>
> **작성자:** [Omar-Obando](https://github.com/Omar-Obando) · **라이선스:** MIT · **버전:** 0.0.1

---

## ⚡ Qwen Orchestrator란 무엇인가요?

**Qwen Orchestrator**는 Alibaba의 오픈소스 AI 코딩 CLI인 **[Qwen Code](https://github.com/QwenLM/qwen-code)** 전용으로 제작된 강력한 확장 프로그램입니다. 단일 AI 코딩 어시스턴트를 전문 소프트웨어 개발 부서처럼 협업하는 **22개의 전문 AI 에이전트 팀**으로 변환합니다.

### 왜 Qwen Orchestrator를 선택해야 하나요?

손끝에 완벽한 엔지니어링 팀이 있다고 상상해 보세요: 오케스트레이션을 담당하는 **Commander**, 아키텍처를 설계하는 **Planner**, 병렬로 코딩하는 **Frontend 및 Backend Developer**, 품질을 관리하는 **Reviewer**, 테스트를 수행하는 **QA Engineer**, 취약점을 감사하는 **Cybersecurity Engineer**, 배포를 관리하는 **DevOps Engineer** — 그리고 14명의 전문가가 모두 자동으로 조정됩니다.

**이처럼 전문적인 멀티 에이전트 오케스트레이션을 제공하는 AI 코딩 확장 프로그램은 다른 곳에 없습니다.**

### 전용 제작 대상

<table>
<tr>
<td width="80" align="center">

![Qwen Code](https://img.shields.io/badge/Qwen%20Code-CLI-orange?style=for-the-badge)

</td>
<td>

**[Qwen Code](https://github.com/QwenLM/qwen-code)** by [QwenLM / Alibaba](https://github.com/QwenLM) — 여러 LLM 제공자(Qwen, DeepSeek, OpenAI, Anthropic, 로컬 모델)를 지원하는 오픈소스 AI 코딩 어시스턴트 CLI입니다. Qwen Orchestrator는 **커뮤니티 제작 확장 프로그램**이며 Alibaba와 제휴하거나 보증받지 않습니다.

</td>
</tr>
</table>

> ⚠️ **이 확장 프로그램은 [Qwen Code CLI](https://github.com/QwenLM/qwen-code)에서만 작동합니다.** 독립 실행형 도구가 아니며, VS Code 확장 프로그램이 아니고, 다른 AI 코딩 어시스턴트와 호환되지 않습니다. Qwen Code가 설치되어 있지 않다면 [먼저 설치하세요](https://github.com/QwenLM/qwen-code#installation).

---

## 🎯 개요

Qwen Orchestrator는 Qwen Code를 **22개의 전문 AI 에이전트**, **22개의 전문가 스킬**, **6개의 슬래시 명령어**, **영구 메모리(Knowledge Graph)**, **MCP 도구 서버**를 갖춘 **전문 IT 부서**로 변환합니다. 모든 기능은 테스트, 검토, 완성된 상태로 제공됩니다 — **목업 없음, 플레이스홀더 없음, 미완성 CRUD 없음**.

### 핵심 보장

| 보장 사항                  | 시행 방법                                                                   |
| -------------------------- | --------------------------------------------------------------------------- |
| **목업/플레이스홀더 없음** | 에이전트가 스텁 작성을 금지함; 안티 패턴 스킬이 위반을 감지                 |
| **모델 종속성 없음**       | 모든 에이전트가 사용자 모델을 기본으로 사용; 에이전트별 오버라이드는 선택   |
| **루프 보호**              | Monitor 에이전트가 LLM 루프를 자동으로 감지하고 중단                        |
| **N+1 쿼리 방지**          | SQL 모범 사례 스킬 + Database Architect 에이전트가 eager loading 강제       |
| **SQL 포맷팅**             | 대문자 키워드, 한 줄에 한 컬럼, 들여쓰기 JOIN — 스킬로 강제                 |
| **보안 우선**              | security-audit 스킬과 Reviewer 에이전트를 통한 OWASP Top 10 준수            |
| **CRUD 완전성**            | Tech Lead가 모든 엔터티에 Create/Read/Update/Delete/Restore가 있는지 확인   |
| **다국어 지원**            | TypeScript, PHP, Python, Dart, Rust, Go, Java, C# 지원 — TS만 지원하지 않음 |
| **Context7 선택적**        | Context7 없이도 작동; 있으면 에이전트가 실시간 문서 조회 가능               |
| **컴팩션 복구**            | 상태가 `.qwen-orchestrator/`에 저장됨 — 컨텍스트 창 압축 후에도 유지        |

### 🌟 하이라이트

- **22개 전문 에이전트** — Commander부터 Localization Engineer까지, 각각 전용 도구와 전문성 보유
- **22개 프로페셔널 스킬** — TDD 워크플로우, 보안 감사, 안티 패턴 감지, 디자인 시스템, SQL 모범 사례 등 17개 더
- **6개 슬래시 명령어** — `/orchestrator`, `/orchestrate`, `/plan`, `/review`, `/test`, `/deploy`
- **작성 전 질문** — 에이전트가 작업을 시작하기 전에 `AskUserQuestion`으로 명확한 질문을 합니다
- **영구 메모리** — MCP Memory Server를 통한 Knowledge Graph가 세션 간 결정을 저장합니다
- **모델 종속성 제로** — Qwen, DeepSeek, OpenAI, Anthropic 또는 모든 로컬 모델에서 작동합니다
- **다국어 지원** — TypeScript 전용이 아님: PHP(Laravel), Python(Django), Dart(Flutter), Rust, Go, Java, C#
- **프레임워크 스킬** — Flutter Web, Laravel, NestJS, Supabase 내장 스킬
- **루프 보호** — Monitor 에이전트가 LLM 무한 루프를 자동으로 감지하고 중단합니다
- **에이전트 간 메시징** — Commander가 작업 중에 SendMessage로 백그라운드 에이전트에 지시를 보냅니다
- **예약 작업** — 반복 품질 감사, 상태 확인, 진행 보고를 위한 CronCreate
- **실시간 모니터링** — Monitor 도구로 빌드, 컨테이너, 로그를 감시합니다
- **UI/UX 통합** — Frontend Developer가 UI UX Pro Max, Designer Skills, Taste Skill을 활용할 수 있습니다

---

## 📊 빠른 통계

| 지표               | 수  | 세부 사항                                                                                                                                                                                                                                                                                          |
| ------------------ | --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **에이전트**       | 22  | Commander, Planner, Frontend Dev, Backend Dev, Reviewer, QA, PM, Doc Researcher, Tech Lead, DB Architect, Product Owner, DevOps, Code Quality Guard, Monitor, SEO Specialist, Tech Selector, Cybersecurity Eng., Performance Eng., Release Manager, API Specialist, Mobile Eng., Localization Eng. |
| **스킬**           | 22  | Design system, code review, TDD, security audit, performance, debugging, deployment, Context7 docs, domain-driven, API design, refactoring, compaction recovery, git workflow, database design, anti-pattern, multi-language, SQL, Flutter Web, Laravel, NestJS, Supabase                          |
| **명령어**         | 6   | `/orchestrator`, `/orchestrate`, `/plan`, `/review`, `/test`, `/deploy`                                                                                                                                                                                                                            |
| **MCP 도구**       | 7   | 미션 상태, 프로젝트 검증, TODO 생성, 에이전트 명단, Context7 resolve, CRUD 확인, 체크포인트                                                                                                                                                                                                        |
| **MCP 서버**       | 2   | Orchestrator 도구 + Memory Knowledge Graph                                                                                                                                                                                                                                                         |
| **언어**           | 8+  | TypeScript, PHP, Python, Dart, Rust, Go, Java, C#                                                                                                                                                                                                                                                  |
| **Qwen Code 도구** | 21  | 전체 도구 모음 — Edit, WriteFile, ReadFile, Grep, Glob, Shell, AskUserQuestion, Agent, Skill, SendMessage, Monitor, CronCreate, ExitPlanMode 등                                                                                                                                                    |

---

## 아키텍처

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
║  Skills: 22 | Agents: 22 | Commands: 6 | MCP Tools: 7 | Languages: 8+ ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## 에이전트 팀 (22개 전문 에이전트)

| #   | 에이전트               | 색상       | 역할                  | 특수 능력                                   |
| --- | ---------------------- | ---------- | --------------------- | ------------------------------------------- |
| 1   | **Commander**          | 🔴 Red     | 마스터 오케스트레이터 | 병렬 위임, 끊임없는 실행                    |
| 2   | **Planner**            | 🔵 Blue    | 연구 및 아키텍처      | 파일 수준 계획, 설계 결정                   |
| 3   | **Frontend Developer** | 🔵 Cyan    | UI/UX 구현            | 컴포넌트, 반응형, 접근성, 성능              |
| 4   | **Backend Developer**  | 🟢 Green   | 서버 사이드 로직      | API, 인증, 캐싱, 데이터베이스 작업          |
| 5   | **Reviewer**           | 🟣 Purple  | 품질 게이트키퍼       | 작업을 승인할 수 있는 유일한 에이전트       |
| 6   | **QA Engineer**        | 🟠 Orange  | 품질 보증             | 테스트 전략, 엣지 케이스 발견               |
| 7   | **Project Manager**    | 🔵 Cyan    | 납품 관리             | 범위 관리, 위험 평가                        |
| 8   | **Doc Researcher**     | 🟣 Magenta | Context7 지식         | 실시간 문서 조회, 안티 환각                 |
| 9   | **Tech Lead**          | 🟡 Gold    | 표준 및 가이드        | 모듈 완전성, CRUD 검증                      |
| 10  | **Database Architect** | 🟢 Teal    | 데이터 레이어 전문가  | 스키마 설계, 마이그레이션 안전              |
| 11  | **Product Owner**      | 🟡 Amber   | 비즈니스 가치         | 사용자 스토리, 인수 기준                    |
| 12  | **DevOps Engineer**    | 🔘 Slate   | 인프라                | CI/CD, Docker, 배포 자동화                  |
| 13  | **Code Quality Guard** | 🌹 Rose    | 품질 감시자           | 구문 검사, 린트, 타입체크                   |
| 14  | **Monitor**            | 🛡️ Shield  | 루프 수호자           | LLM 루프 감지/중단, 런타임 와치독           |
| 15  | **SEO Specialist**     | 🔵 Blue    | SEO 및 웹 성능        | 메타 태그, 구조화된 데이터, Core Web Vitals |
| 16  | **Tech Selector**      | 🟣 Violet  | 기술 자문             | 장단점이 있는 프레임워크/DB 선택            |
| 17  | **Cybersecurity Eng.** | 🔴 Crimson | 애플리케이션 보안     | OWASP, 위협 모델링, 종속성 감사             |
| 18  | **Performance Eng.**   | ⚡ Amber   | 속도 및 확장          | 프로파일링, 쿼리 최적화, 부하 테스트        |
| 19  | **Release Manager**    | 🏷️ Indigo  | 릴리즈 및 버전 관리   | SemVer, 체인지로그, 롤백 계획               |
| 20  | **API Specialist**     | 🔗 Teal    | API 및 통합           | REST/GraphQL, 버전 관리, 서드파티 API       |
| 21  | **Mobile Engineer**    | 📱 Sky     | 모바일 앱             | Flutter, React Native, 오프라인 우선        |
| 22  | **Localization Eng.**  | 🌐 Lime    | i18n/L10n             | 다국어, RTL, 문화적 적응                    |

---

## 스킬 (22개 프로페셔널 스킬)

| #   | 스킬                    | 목적                                                                            |
| --- | ----------------------- | ------------------------------------------------------------------------------- |
| 1   | **Code Review**         | OWASP + SOLID + Clean Code 체계적 리뷰                                          |
| 2   | **Architect**           | ADR 레코드가 있는 아키텍처 설계                                                 |
| 3   | **TDD Workflow**        | 테스트 주도 개발(Red/Green/Refactor)                                            |
| 4   | **Security Audit**      | OWASP Top 10 취약점 탐지                                                        |
| 5   | **Performance**         | 프로파일링, 최적화, 벤치마크                                                    |
| 6   | **Debugging**           | 체계적인 조사 방법론                                                            |
| 7   | **Deployment**          | CI/CD, Docker, 릴리즈 관리                                                      |
| 8   | **Context7 Docs**       | 선택적 — Context7 MCP를 통한 실시간 문서 조회                                   |
| 9   | **Domain-Driven**       | 완전한 비즈니스 모듈 빌더 — 하위 모듈, CRUD, 목업 없음                          |
| 10  | **API Design**          | RESTful 표준, 응답 봉투, 페이지네이션                                           |
| 11  | **Refactoring**         | 안전한 동작 보존 코드 변환                                                      |
| 12  | **Compaction Recovery** | 세션 컴팩션 간 컨텍스트 보존                                                    |
| 13  | **Git Workflow**        | 브랜칭 전략, 커밋 규칙, PR 템플릿                                               |
| 14  | **Database Design**     | 스키마 설계, 인덱싱, 마이그레이션 안전                                          |
| 15  | **Anti-Pattern**        | 목업, 플레이스홀더, N+1 쿼리, 데드 코드 금지                                    |
| 16  | **Multi-Language**      | 8개 이상 언어: TS, PHP, Python, Dart, Rust, Go, Java, C#                        |
| 17  | **SQL Best Practices**  | 들여쓰기, N+1 방지, 매개변수화 쿼리                                             |
| 18  | **Design System**       | 멀티 페이지 아키텍처, 색상 팔레트, 타이포그래피, 간격, Astro + Cloudflare Pages |
| 19  | **Flutter Web**         | 반응형 레이아웃, 적응형 위젯, 상태 관리, 폼                                     |
| 20  | **Laravel**             | Eloquent ORM, Form Requests, 큐, API 백엔드 패턴                                |
| 21  | **NestJS**              | 모듈, 가드, 파이프, 인터셉터, 요청 수명 주기                                    |
| 22  | **Supabase**            | RLS 정책, Edge Functions, 인증, 자동 생성 API                                   |

---

## 명령어 (6개 슬래시 명령어)

### `/orchestrator` — 메인 진입점 ⭐

```bash
/orchestrator Build a checkout system with Stripe payments
```

이것이 **메인** 명령어입니다. 완전한 프로페셔널 워크플로우로 22개 에이전트 팀을 활성화합니다:

1. **CLARIFY** → 모호한 사항이 있으면 타겟팅된 질문을 합니다(`AskUserQuestion` 통해)
2. **DISCOVER** → 프로젝트를 스캔하고, 기술 스택을 감지하고, 설정을 읽습니다
3. **PLAN** → 미션을 병렬 실행 그룹이 있는 마일스톤으로 분해합니다
4. **EXECUTE** → 최대 처리량을 위해 전문 에이전트를 동시에 실행합니다
5. **VERIFY** → Reviewer + QA가 모든 것이 작동함을 확인합니다. 회귀 제로
6. **DELIVER** → 구축 및 변경된 내용과 증거 요약

### 모든 명령어

| 명령어                     | 설명                                              |
| -------------------------- | ------------------------------------------------- |
| **`/orchestrator [목표]`** | ⭐ **메인 진입** — 명확성 프로토콜이 있는 전체 팀 |
| `/orchestrate [미션]`      | 직접 미션 실행(명확성 질문 없음)                  |
| `/plan [기능]`             | 구현 계획만 생성                                  |
| `/review [대상]`           | 종합 코드 리뷰                                    |
| `/test [대상]`             | 테스트 스위트 실행 및 분석                        |
| `/deploy [대상]`           | 사전/사후 검증이 포함된 배포                      |

> **`/orchestrator` vs `/orchestrate`는 언제 사용하나요?**
>
> - `/orchestrator` — 새 기능, 프로젝트 또는 복잡한 작업을 시작할 때. 팀이 먼저 명확한 질문을 합니다.
> - `/orchestrate` — 원하는 것이 정확히 무엇인지 알고 있고 빠르게 실행만 하면 될 때.

---

## 사용자 명확성: 작성 전에 질문하기

오케스트레이터는 사용자가 원하는 것을 **절대 추측하지 않습니다**. 미션이 시작되면 Commander와 Planner 에이전트가 한 줄의 코드를 작성하기 전에 `AskUserQuestion` 도구를 사용하여 요구 사항을 명확히 합니다.

### 작동 방식

1. 미션을 설명합니다(예: `/orchestrator Build a user authentication system`)
2. Commander가 요청을 분석하고 확인합니다: **이것이 100% 명확한가?**
3. 명확하지 않다면, 미리 정의된 옵션이 있는 타겟팅된 질문을 합니다
4. 답변하면 그때서야 계획이 시작됩니다

### 예시 상호작용

```
👤 User: /orchestrator Build an e-commerce checkout

🤖 Commander: I need to clarify a few things before planning:

   📋 Payment Provider (Question 1/3)
   Which payment gateway should I integrate?
   ○ Stripe       — Industry standard, great API, supports subscriptions
   ○ PayPal       — Widely trusted, good international support
   ○ MercadoPago  — Best for Latin American markets

   📋 Checkout Flow (Question 2/3)
   What type of checkout experience?
   ○ Single Page  — All steps on one page (simpler, faster)
   ○ Multi-Step   — Separate pages per step (more controlled)

   📋 Guest Checkout (Question 3/3)
   Should users be able to checkout without an account?
   ○ Yes          — Lower friction, higher conversion
   ○ No           — Required account, better for retention

👤 User selects: MercadoPago → Multi-Step → Yes

🤖 Commander: Perfect. Planning checkout with MercadoPago, multi-step flow, guest support.
```

### 질문을 하는 에이전트

| 에이전트           | 질문 시기                                                                              |
| ------------------ | -------------------------------------------------------------------------------------- |
| Commander          | 모든 미션 시작 전 — 범위, 우선순위, 제약 사항                                          |
| Planner            | 아키텍처 결정 전 — 기술 스택, 패턴                                                     |
| Product Owner      | 사용자 스토리 정의 시 — 인수 기준, 엣지 케이스                                         |
| QA Engineer        | 테스트 전략 설계 시 — 크리티컬 경로, 임계값                                            |
| Project Manager    | 범위 설정 시 — 마감일, 위험 허용 범위, 리소스                                          |
| **Tech Selector**  | **기술 스택이 지정되지 않았을 때 — 장단점이 있는 프레임워크, 데이터베이스, 언어 제시** |
| **SEO Specialist** | **웹 프로젝트 구축 시 — 대상 독자, 콘텐츠 유형, 지역**                                 |

> **팁**: 처음부터 모든 세부 사항을 제공하고 질문을 건너뛸 수 있습니다. 에이전트는 모호성이나 누락된 정보를 감지할 때만 질문합니다.

---

## 고급 도구 통합

오케스트레이터는 기본 파일 작업을 넘어 Qwen Code의 전체 도구 모음을 활용합니다:

### 에이전트 간 통신 (SendMessage)

Commander는 에이전트가 완료될 때까지 기다리지 않고 작업 중에 백그라운드 에이전트에게 리디렉션, 명확화 또는 추가 컨텍스트를 제공하기 위해 메시지를 보낼 수 있습니다.

```
SendMessage({ task_id: "worker-auth", message: "User clarified: use JWT, not sessions." })
```

### 실시간 모니터링 (Monitor)

DevOps Engineer은 장시간 실행되는 프로세스(빌드, 컨테이너, 테스트 스위트)를 감시하고 스트리밍 알림을 받을 수 있습니다.

```
Monitor({ command: "docker compose logs -f app", description: "Watch app logs during deploy" })
```

### 예약 작업 (CronCreate/CronList/CronDelete)

자동화된 품질 검사 및 진행 보고를 위해 반복 또는 일회성 작업을 예약합니다.

```
CronCreate({ cron: "0 6 * * 1-5", prompt: "Run security audit", recurring: true })
```

### 계획 승인 게이트 (ExitPlanMode)

Planner가 실행 시작 전에 최종 계획을 사용자 승인을 위해 제시하여 일관성을 보장합니다.

### 작업 취소 (TaskStop)

Commander가 이탈하거나 outdated된 백그라운드 작업을 즉시 취소할 수 있습니다.

### 에이전트-도구 매트릭스

| 도구                  | Cmd | Plan | FE  | BE  | Rev | QA  | PM  | Doc | TL  | DB  | PO  | Dev | CQG | Mon | SEO | TSel |
| --------------------- | :-: | :--: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :--: |
| AskUserQuestion       | ✅  |  ✅  | ✅  |     |     | ✅  | ✅  |     |     |     | ✅  |     |     |     | ✅  |  ✅  |
| Agent (하위 에이전트) | ✅  |  ✅  |     |     |     |     |     |     |     |     |     |     |     |     |     |      |
| Skill (스킬 로드)     |     |      | ✅  |     |     |     |     |     |     |     |     |     |     |     |     |      |
| SendMessage           | ✅  |  ✅  |     |     |     |     |     |     |     |     |     |     |     | ✅  |     |      |
| Monitor (와치독)      | ✅  |      |     |     |     |     | ✅  |     |     |     |     |     | ✅  |     |     |
| TaskStop              | ✅  |      |     |     |     |     |     |     |     |     |     |     | ✅  |     |     |
| CronCreate/List       | ✅  |      |     |     |     | ✅  | ✅  |     |     |     |     |     | ✅  |     |     |
| ExitPlanMode          |     |  ✅  |     |     |     |     |     |     |     |     |     |     |     |     |     |
| SaveMemory            | ✅  |  ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  |     | ✅  |     |     | ✅  | ✅  |  ✅  |
| Lsp (진단)            | ✅  |  ✅  | ✅  | ✅  | ✅  |     |     | ✅  | ✅  |     |     | ✅  | ✅  |     |     |
| WebFetch              | ✅  |  ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  | ✅  |     | ✅  |  ✅  |

---

## 모델 설정

**기본적으로 모든 에이전트는 Qwen Code 기본 모델을 사용합니다.** 하드코딩된 모델이 없습니다 — 종속성 제로입니다.

### 기본 모델 사용 (권장)

확장 프로그램을 설치하고 사용하기만 하면 됩니다. 모든 에이전트가 Qwen Code에 설정된 모델을 사용합니다.

### 에이전트별 특정 모델 설정

특정 에이전트에 다른 모델을 사용하려면 `agents/`에서 해당 에이전트의 `.md` 파일을 편집하고 `model` 줄의 주석을 해제하세요:

```yaml
---
name: commander
# ... other fields ...
# model: uncomment below to override the user's default model
model: qwen-max # ← Uncomment and set your preferred model
---
```

### 역할별 권장 모델

| 에이전트           | 권장 모델                   | 이유                              |
| ------------------ | --------------------------- | --------------------------------- |
| Commander          | `qwen-max` 또는 `qwen-plus` | 오케스트레이션에 강력한 추론 필요 |
| Planner            | `qwen-max` 또는 `qwen-plus` | 아키텍처에 강력한 분석 필요       |
| Frontend Developer | `qwen3-coder-plus`          | 코드 생성에 최적화                |
| Backend Developer  | `qwen3-coder-plus`          | 코드 생성에 최적화                |
| Reviewer           | `qwen-max`                  | 품질 게이트에 깊은 이해 필요      |
| QA Engineer        | `qwen-plus`                 | 테스트 전략에 균형 잡힌 성능      |
| Code Quality Guard | `qwen-plus`                 | 구문/린트 검사에 빠른 성능        |
| 기타 모든 에이전트 | 사용자 기본값               | 특별한 요구 사항 없음             |

> **참고**: Qwen Code 설치에서 지원하는 모든 모델이 작동합니다 — DeepSeek, OpenAI, Anthropic 또는 로컬 모델 포함. 모델 필드는 설정된 제공자에게 전달되는 단순한 문자열입니다.

---

## 오케스트레이터 모드

Qwen Orchestrator는 `/orchestrator`를 통해 활성화되는 **가상 CLI 모드**로 작동합니다. Commander 에이전트가接管하고 전체 22개 에이전트 팀을 관리합니다.

### 권장 CLI 설정

최대 자율성을 위해 `/orchestrate`를 실행하기 **전에** Qwen Code CLI를 다음 모드 중 하나로 설정하세요:

| CLI 모드      | 설정        | 발생하는 일                                                  |
| ------------- | ----------- | ------------------------------------------------------------ |
| **Auto-Edit** | `auto-edit` | 에이전트가 자유롭게 편집/작성. 쉘은 사용자가 확인. **권장.** |
| **YOLO**      | `yolo`      | 완전한 자율성. 확인 없음. 최대 속도.                         |
| **Default**   | `default`   | 모든 편집을 사용자가 확인. 느리지만 최대 제어.               |
| **Plan**      | `plan`      | 계획만 — 에이전트가 파일을 작성할 수 없음.                   |

### 에이전트가 설정을 오버라이드하지 않는 이유

에이전트는 의도적으로 `approvalMode`, `runConfig` 또는 `background` 필드가 **없습니다**:

- **사용자가 CLI에서 자율성을 제어**합니다. 확장 프로그램이 아닙니다
- **시간/턴 제한 없음** — Monitor 에이전트가 이탈 감지를 대신 처리합니다
- **백그라운드 실행**은 Commander가 하위 에이전트를 생성할 때 관리합니다
- **오케스트레이터가 CLI 설정에 적응**합니다. 반대가 아닙니다

---

## Context7 통합 (선택적)

[Context7](https://context7.com)은 모든 라이브러리나 프레임워크에 대한 실시간, 버전별 문서를 제공합니다. **선택적**입니다 — 오케스트레이터는 없이도 완벽하게 작동합니다.

### Context7이 설치된 경우

- Doc Researcher 에이전트가 라이브러리 ID를 확인하고 실시간 문서를 가져옵니다
- 모든 에이전트가 익숙하지 않은 API 코드를 작성하기 전에 Context7을 쿼리할 수 있습니다
- API 시그니처와 패턴에 대한 환각 제로

### Context7이 없는 경우

- 에이전트가 웹 검색과 훈련 지식으로 대체합니다
- `context7-docs` 스킬이 정상적으로 저하됩니다
- 오류나 누락된 기능 없음

### Context7 설치 방법

Qwen Code MCP 설정에 추가하세요:

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

`@modelcontextprotocol/server-memory` MCP 서버는 세션 간에 지속되는 **Knowledge Graph**를 제공합니다. 에이전트는 세션 재설정 후에도 유지되는 결정, 선호도, 프로젝트 컨텍스트를 저장할 수 있습니다.

### 저장되는 내용

- **프로젝트 결정**: 데이터베이스 선택, 프레임워크 선택, 아키텍처 패턴
- **사용자 선호도**: 선호하는 CSS 프레임워크, 다크/라이트 모드, 명명 규칙
- **아키텍처 레코드**: 컴포넌트 계층, API 규칙, 배포 대상
- **세션 연속성**: 이전 세션의 마지막 작업, 다음 단계, 알려진 문제

### 에이전트 사용 방법

```
# Commander가 결정을 저장
create_entities({
  entities: [{ name: "database", entityType: "decision", observations: ["PostgreSQL 16", "RLS enabled", "UUID primary keys"] }]
})

# Tech Lead가 코딩 표준을 저장
create_entities({
  entities: [{ name: "code-standards", entityType: "standard", observations: ["PascalCase for components", "ESLint strict mode", "Tests mandatory"] }]
})

# 모든 에이전트가 이전 결정을 쿼리
read_graph({})
```

### 설정 (확장 프로그램에 포함)

Memory MCP 서버는 `qwen-extension.json`에 설정되어 있으며 확장 프로그램이 로드될 때 자동으로 실행됩니다. 추가 설정이 필요하지 않습니다.

> **참조**: [MCP Server Memory on npm](https://www.npmjs.com/package/@modelcontextprotocol/server-memory)

---

## MCP 도구 서버 (선택적)

선택적 MCP 서버는 미션 관리를 위한 7개의 도구를 제공합니다:

| 도구                       | 목적                                    |
| -------------------------- | --------------------------------------- |
| `get_mission_status`       | 현재 미션 진행 상황 가져오기            |
| `validate_project`         | 프로젝트 구조 및 상태 검증              |
| `generate_todo`            | 미션 설명에서 구조화된 TODO 생성        |
| `get_agent_roster`         | 기능이 포함된 22개 에이전트 전체 나열   |
| `context7_resolve_library` | Context7 라이브러리 ID 확인             |
| `check_crud_completeness`  | 모든 엔터티에 대한 전체 CRUD 확인       |
| `create_checkpoint`        | 컴팩션 복구를 위한 상태 체크포인트 생성 |

### 설정

```bash
cd qwen-orchestrator
npm install
npm run build
npm run mcp:start
```

그런 다음 Qwen Code MCP 설정에 추가하세요:

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

## 실행 흐름

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

## 품질 표준

오케스트레이터가 생성하는 모든 코드 라인은 다음 기준을 충족합니다:

- **복잡도**: 함수당 순환 복잡도 ≤ 10
- **크기**: 함수당 ≤ 40줄, ≤ 4개 매개변수
- **타입**: 엄격한 타입, `any` 없음
- **테스트**: TDD 필수, 80% 이상 커버리지
- **보안**: OWASP Top 10 준수
- **SQL**: 대문자 키워드, 한 줄에 한 컬럼, 들여쓰기 JOIN, N+1 방지
- **리뷰**: 병합 전 다차원 코드 리뷰
- **언어**: TypeScript 전용이 아님 — 프로젝트의 기술 스택에 적응

---

## 프로젝트 구조

```
qwen-orchestrator/
├── qwen-extension.json       # Extension manifest (v0.0.1)
├── package.json              # NPM 패키지 설정
├── AGENTS.md                 # 에이전트 운영 규칙
├── LICENSE                   # MIT 라이선스
│
├── agents/                   # 22개 에이전트 정의
│   ├── commander.md          #   마스터 오케스트레이터
│   ├── planner.md            #   연구 및 계획
│   ├── frontend-developer.md #   UI/UX 구현
│   ├── backend-developer.md  #   서버 사이드 로직
│   ├── reviewer.md           #   품질 게이트키퍼
│   ├── qa-engineer.md        #   테스트 전략
│   ├── project-manager.md    #   납품 관리
│   ├── doc-researcher.md     #   Context7 지식 엔진
│   ├── tech-lead.md          #   표준 및 모듈 완전성
│   ├── database-architect.md #   스키마 및 마이그레이션 안전
│   ├── product-owner.md      #   사용자 스토리 및 인수 기준
│   ├── devops-engineer.md    #   CI/CD 및 인프라
│   ├── code-quality-guard.md #   구문, 린트, 타입체크 감시자
│   ├── monitor.md            #   루프 수호자 및 런타임 와치독
│   ├── seo-specialist.md     #   SEO 및 웹 성능
│   ├── tech-selector.md      #   기술 선택 자문
│   ├── cybersecurity-engineer.md  # 애플리케이션 보안
│   ├── performance-engineer.md    # 속도 및 확장 최적화
│   ├── release-manager.md         # SemVer 및 릴리즈 워크플로우
│   ├── api-specialist.md          # REST/GraphQL 및 통합
│   ├── mobile-engineer.md         # Flutter, React Native
│   └── localization-engineer.md   # i18n/L10n 및 RTL
│
├── skills/                   # 22개 스킬 정의
│   ├── code-review/          #   코드 리뷰 방법론
│   ├── architect/            #   아키텍처 설계
│   ├── tdd-workflow/         #   TDD 패턴
│   ├── security-audit/       #   OWASP Top 10
│   ├── performance/          #   성능 최적화
│   ├── debugging/            #   디버깅 방법론
│   ├── deployment/           #   DevOps 및 CI/CD
│   ├── context7-docs/        #   Context7 문서 (선택적)
│   ├── domain-driven/        #   완전한 모듈 빌더
│   ├── api-design/           #   RESTful API 표준
│   ├── refactoring/          #   안전한 코드 변환
│   ├── compaction-recovery/  #   컨텍스트 보존
│   ├── git-workflow/         #   Git 브랜칭 및 커밋
│   ├── database-design/      #   스키마 및 쿼리 최적화
│   ├── anti-pattern/         #   목업, N+1, 데드 코드 금지
│   ├── multi-lang/           #   8개 이상 언어 지원
│   ├── sql-best-practices/   #   SQL 포맷팅 및 안전
│   ├── design-system/        #   색상 팔레트, 타이포그래피, 간격, 멀티 페이지
│   ├── flutter-web/          #   Flutter Web 패턴
│   ├── laravel/              #   Laravel PHP 패턴
│   ├── nestjs/               #   NestJS TypeScript 패턴
│   └── supabase/             #   Supabase 패턴
│
├── commands/                 # 6개 슬래시 명령어
│   ├── orchestrator.md       #   ⭐ 메인 진입점 (명확성 우선)
│   ├── orchestrate.md        #   직접 미션 실행
│   ├── plan.md               #   계획 생성
│   ├── review.md             #   코드 리뷰
│   ├── test.md               #   테스트 실행
│   └── deploy.md             #   검증이 포함된 배포
│
├── context/
│   └── QWEN.md               #   모범 사례 (세션에 주입)
│
├── mcp-server/src/
│   └── index.ts              #   7개 MCP 도구 (선택적)
│
└── docs/
    ├── ARCHITECTURE.md       #   상세 아키텍처
    └── QUICK-START.md        #   시작 가이드
```

---

## UI/UX 스킬 통합 (권장)

Frontend Developer 에이전트는 코드를 넘어선 디자인 인텔리전스를 위해 외부 UI/UX 스킬 저장소를 활용할 수 있습니다. 이들은 **선택적**이지만 웹 프로젝트에 강력히 권장됩니다.

### 권장 스킬

| 스킬                | 설치 명령어                                              | 제공하는 내용                                                                                                                                                              |
| ------------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **UI UX Pro Max**   | `npx uipro-cli init`                                     | 161개 추론 규칙, 67개 UI 스타일, 디자인 시스템 생성기, 도메인 검색(제품/스타일/타이포그래피/색상), 스택별 코드(React, Next.js, Vue, Flutter 등)                            |
| **Designer Skills** | `/plugin marketplace add Owl-Listener/designer-skills`   | 8개 플러그인에 걸친 87개 스킬, 27개 명령어: design-research, design-systems, ux-strategy, ui-design, interaction-design, prototyping-testing, design-ops, designer-toolkit |
| **Taste Skill**     | `npx skills add https://github.com/Leonxlnx/taste-skill` | 안티 슬롭 프론트엔드 프레임워크 — 프리미엄 레이아웃, 타이포그래피, 모션, 간격. 스킬: design-taste-frontend, minimalist-ui, soft-skill, brutalist-ui, redesign              |

### 사용 시기

- **새 프로젝트** → UI UX Pro Max의 디자인 시스템 생성기로 색상, 타이포그래피, 간격 토큰 생성
- **컴포넌트 라이브러리** → Designer Skills의 design-systems 플러그인으로 토큰, 테마, 거버넌스
- **기존 UI 개선** → Taste Skill의 `redesign-existing-projects`로 레이아웃/간격 감사 및 수정
- **UX 리서치** → Designer Skills의 ux-strategy 플러그인으로 경쟁 분석, 정보 아키텍처
- **모션 및 인터랙션** → Designer Skills의 interaction-design 플러그인으로 마이크로 애니메이션

---

## 설치

### 빠른 설치 (권장)

```bash
qwen extensions install https://github.com/Omar-Obando/qwen-orchestrator
```

이 명령은 22개의 에이전트, 22개의 스킬, 6개의 명령어, MCP Memory 서버를 자동으로 등록합니다.

### 수동 설치

1. 저장소를 클론합니다:

```bash
git clone https://github.com/Omar-Obando/qwen-orchestrator.git
```

2. Qwen Code 설정에 추가합니다:

```json
{
  "extensions": ["./path/to/qwen-orchestrator"]
}
```

3. (선택적) MCP 도구 서버를 빌드합니다:

```bash
cd qwen-orchestrator
npm install
npm run build
```

### MCP 서버 추가

확장 프로그램에는 두 개의 MCP 서버가 포함되어 있습니다. 더 추가하려면(예: Context7) `qwen-extension.json`의 `mcpServers`에 추가하세요:

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

> **문서**: [Creating Qwen Code Extensions](https://qwenlm.github.io/qwen-code-docs/en/developers/extensions/extension/#create-a-boilerplate-extension)

---

## 작성자

**Omar Obando**

- GitHub: [@Omar-Obando](https://github.com/Omar-Obando)
- 라이선스: MIT

---

## 🔑 키워드 및 주제

`qwen-code` · `qwen-code-extension` · `multi-agent` · `ai-agents` · `orchestration` · `ai-coding` · `ai-development` · `tdd` · `code-review` · `devops` · `cicd` · `mcp` · `model-context-protocol` · `ai-orchestrator` · `software-engineering` · `ai-assistant` · `coding-agent` · `enterprise-ai` · `multi-agent-system` · `ai-coding-assistant` · `qwen` · `deepseek` · `openai` · `flutter` · `laravel` · `nestjs` · `supabase` · `typescript` · `python` · `php` · `rust` · `golang` · `java` · `csharp` · `sql` · `security-audit` · `owasp` · `test-driven-development` · `code-quality` · `frontend` · `backend` · `mobile` · `devops` · `database` · `api-design` · `i18n` · `localization` · `seo` · `performance` · `refactoring` · `anti-patterns`

---

<div align="center">

**[Qwen Code](https://github.com/QwenLM/qwen-code) 커뮤니티를 위해 ❤️로 제작되었습니다**

[⬆ 맨 위로 돌아가기](#qwen-orchestrator--qwen-code를-위한-멀티-에이전트-ai-개발-팀)

</div>
