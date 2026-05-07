> 🌐 日本語版 | [English版を読む](../README.md)

# Qwen Orchestrator — Qwen Code向けマルチエージェントAI開発チーム

**[English](../README.md)** · **[Español](README.es.md)** · **[中文](README.zh.md)** · **[日本語](README.ja.md)** · **[한국어](README.ko.md)** · **[Português](README.pt.md)** · **[Français](README.fr.md)** · **[العربية](README.ar.md)**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version: 0.0.1](https://img.shields.io/badge/version-0.0.1-green.svg)](package.json)
[![Qwen Code Extension](https://img.shields.io/badge/Qwen%20Code-Extension-orange.svg)](https://github.com/QwenLM/qwen-code)
[![Agents: 22](https://img.shields.io/badge/agents-22-blue.svg)](#エージェントチーム22の専門エージェント)
[![Skills: 22](https://img.shields.io/badge/skills-22-purple.svg)](#スキル22のプロフェッショナルスキル)

> 🤖 **[Qwen Code CLI](https://github.com/QwenLM/qwen-code)専用のエンタープライズグレード マルチエージェントAIオーケストレーション拡張機能**
>
> AIコーディングアシスタントを完全な**ソフトウェア開発部門**に変換します — 22の専門エージェント、22のプロフェッショナルスキル、6つのスラッシュコマンド、永続メモリ、MCPツール統合を備えています。
>
> **作者:** [Omar-Obando](https://github.com/Omar-Obando) · **ライセンス:** MIT · **バージョン:** 0.0.1

---

## ⚡ Qwen Orchestratorとは？

**Qwen Orchestrator**は、AlibabaのオープンソースAIコーディングCLIである**[Qwen Code](https://github.com/QwenLM/qwen-code)**専用に構築された強力な拡張機能です。単一のAIコーディングアシスタントを、プロフェッショナルなソフトウェア開発部門のように連携する**22の専門AIエージェントチーム**に変換します。

### なぜQwen Orchestratorなのか？

指先一つでエンジニアリングチーム全体を擁する世界を想像してください。オーケストレーションを行う**Commander**、アーキテクチャを設計する**Planner**、並行してコーディングを行う**フロントエンド・バックエンドデベロッパー**、品質を管理する**Reviewer**、テストを行う**QA Engineer**、脆弱性を監査する**Cybersecurity Engineer**、デプロイを行う**DevOps Engineer** — さらに14のスペシャリストがすべて自動的に連携します。

**このレベルのプロフェッショナルなマルチエージェントオーケストレーションを提供するAIコーディング拡張機能は他にありません。**

### 専用開発プラットフォーム

<table>
<tr>
<td width="80" align="center">

![Qwen Code](https://img.shields.io/badge/Qwen%20Code-CLI-orange?style=for-the-badge)

</td>
<td>

**[Qwen Code](https://github.com/QwenLM/qwen-code)** by [QwenLM / Alibaba](https://github.com/QwenLM) — 複数のLLMプロバイダー（Qwen、DeepSeek、OpenAI、Anthropic、ローカルモデル）をサポートするオープンソースのAI搭載コーディングアシスタントCLI。Qwen Orchestratorは**コミュニティ構築の拡張機能**であり、Alibabaの提携または推奨ではありません。

</td>
</tr>
</table>

> ⚠️ **この拡張機能は[Qwen Code CLI](https://github.com/QwenLM/qwen-code)でのみ動作します。** スタンドアロンツールではなく、VS Code拡張機能ではなく、他のAIコーディングアシスタントとは互換性がありません。Qwen Codeがインストールされていない場合は、[まずインストールしてください](https://github.com/QwenLM/qwen-code#installation)。

---

## 🎯 概要

Qwen Orchestratorは、Qwen Codeを**プロフェッショナルIT部門**に変換します。**22の専門AIエージェント**、**22のエキスパートスキル**、**6つのスラッシュコマンド**、**永続メモリ（Knowledge Graph）**、**MCPツールサーバー**を備えています。すべての機能はテスト済み、レビュー済み、完成品として提供されます — **モックアップなし、プレースホルダーなし、未完成のCRUD操作なし**。

### 主な保証

| 保証                                  | 実施方法                                                                                       |
| ------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **モックアップ/プレースホルダーなし** | エージェントはスタブの作成が禁止、アンチパターンスキルが違反を検出                             |
| **モデルロックインなし**              | すべてのエージェントはユーザーのモデルをデフォルトとする、エージェントごとの上書きはオプション |
| **ループ保護**                        | MonitorエージェントがLLMループを自動検出・中断                                                 |
| **N+1クエリ防止**                     | SQLベストプラクティススキル + Database Architectエージェントがイーガーロードを強制             |
| **SQLフォーマット**                   | キーワード大文字、1カラム1行、インデント付きJOIN — スキルで強制                                |
| **セキュリティファースト**            | セキュリティ監査スキルとReviewerエージェントによるOWASP Top 10準拠                             |
| **CRUD完全性**                        | Tech LeadがすべてのエンティティにCreate/Read/Update/Delete/Restoreがあることを確認             |
| **マルチ言語対応**                    | TypeScript、PHP、Python、Dart、Rust、Go、Java、C#をサポート — TSだけではない                   |
| **Context7はオプション**              | Context7なしでも動作、ありならエージェントがリアルタイムドキュメント検索を利用可能             |
| **圧縮リカバリ**                      | 状態は`.qwen-orchestrator/`に永続化 — コンテキストウィンドウ圧縮後も維持                       |

### 🌟 ハイライト

- **22の専門エージェント** — CommanderからLocalization Engineerまで、それぞれが専用ツールと専門知識を持つ
- **22のプロフェッショナルスキル** — TDDワークフロー、セキュリティ監査、アンチパターン検出、デザインシステム、SQLベストプラクティスなど17以上
- **6つのスラッシュコマンド** — `/orchestrator`、`/orchestrate`、`/plan`、`/review`、`/test`、`/deploy`
- **構築前に質問** — エージェントは作業開始前に`AskUserQuestion`で明確化の質問を行う
- **永続メモリ** — MCP Memory Server経由のKnowledge Graphがセッション間で決定事項を保存
- **ゼロモデルロックイン** — Qwen、DeepSeek、OpenAI、Anthropic、任意のローカルモデルで動作
- **マルチ言語サポート** — TypeScriptだけではない：PHP（Laravel）、Python（Django）、Dart（Flutter）、Rust、Go、Java、C#
- **フレームワークスキル** — Flutter Web、Laravel、NestJS、Supabaseの組み込みスキル
- **ループ保護** — MonitorエージェントがLLM無限ループを自動検出・中断
- **エージェント間メッセージング** — CommanderがSendMessage経由でタスク中にバックグラウンドエージェントに指示を送信
- **スケジュールタスク** — CronCreateで定期的な品質監査、ヘルスチェック、進捗レポートを設定
- **リアルタイムモニタリング** — Monitorツールでビルド、コンテナ、ログを監視
- **UI/UX統合** — Frontend DeveloperがUI UX Pro Max、Designer Skills、Taste Skillを活用可能

---

## 📊 統計情報

| 指標                | 数  | 詳細                                                                                                                                                                                                                                                                                               |
| ------------------- | --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **エージェント**    | 22  | Commander, Planner, Frontend Dev, Backend Dev, Reviewer, QA, PM, Doc Researcher, Tech Lead, DB Architect, Product Owner, DevOps, Code Quality Guard, Monitor, SEO Specialist, Tech Selector, Cybersecurity Eng., Performance Eng., Release Manager, API Specialist, Mobile Eng., Localization Eng. |
| **スキル**          | 22  | Design system, code review, TDD, security audit, performance, debugging, deployment, Context7 docs, domain-driven, API design, refactoring, compaction recovery, git workflow, database design, anti-pattern, multi-language, SQL, Flutter Web, Laravel, NestJS, Supabase                          |
| **コマンド**        | 6   | `/orchestrator`, `/orchestrate`, `/plan`, `/review`, `/test`, `/deploy`                                                                                                                                                                                                                            |
| **MCPツール**       | 7   | Mission status, project validation, TODO generation, agent roster, Context7 resolve, CRUD check, checkpoint                                                                                                                                                                                        |
| **MCPサーバー**     | 2   | Orchestrator tools + Memory Knowledge Graph                                                                                                                                                                                                                                                        |
| **対応言語**        | 8+  | TypeScript, PHP, Python, Dart, Rust, Go, Java, C#                                                                                                                                                                                                                                                  |
| **Qwen Codeツール** | 21  | フルツールスイート — Edit, WriteFile, ReadFile, Grep, Glob, Shell, AskUserQuestion, Agent, Skill, SendMessage, Monitor, CronCreate, ExitPlanMode など                                                                                                                                              |

### 主な保証

| 保証                                  | 実施方法                                                                                       |
| ------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **モックアップ/プレースホルダーなし** | エージェントはスタブの作成が禁止、アンチパターンスキルが違反を検出                             |
| **モデルロックインなし**              | すべてのエージェントはユーザーのモデルをデフォルトとする、エージェントごとの上書きはオプション |
| **ループ保護**                        | MonitorエージェントがLLMループを自動検出・中断                                                 |
| **N+1クエリ防止**                     | SQLベストプラクティススキル + Database Architectエージェントがイーガーロードを強制             |
| **SQLフォーマット**                   | キーワード大文字、1カラム1行、インデント付きJOIN — スキルで強制                                |
| **セキュリティファースト**            | セキュリティ監査スキルとReviewerエージェントによるOWASP Top 10準拠                             |
| **CRUD完全性**                        | Tech LeadがすべてのエンティティにCreate/Read/Update/Delete/Restoreがあることを確認             |
| **マルチ言語対応**                    | TypeScript、PHP、Python、Dart、Rust、Go、Java、C#をサポート — TSだけではない                   |
| **Context7はオプション**              | Context7なしでも動作、ありならエージェントがリアルタイムドキュメント検索を利用可能             |
| **圧縮リカバリ**                      | 状態は`.qwen-orchestrator/`に永続化 — コンテキストウィンドウ圧縮後も維持                       |

---

## アーキテクチャ

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

## エージェントチーム（22の専門エージェント）

| #   | エージェント           | カラー     | 役割                         | 特殊能力                                               |
| --- | ---------------------- | ---------- | ---------------------------- | ------------------------------------------------------ |
| 1   | **Commander**          | 🔴 Red     | マスターオーケストレーター   | 並行委任、粘り強い実行                                 |
| 2   | **Planner**            | 🔵 Blue    | リサーチ・アーキテクチャ     | ファイルレベルの計画、設計決定                         |
| 3   | **Frontend Developer** | 🔵 Cyan    | UI/UX実装                    | コンポーネント、レスポンシブ、アクセシビリティ、高速化 |
| 4   | **Backend Developer**  | 🟢 Green   | サーバーサイドロジック       | API、認証、キャッシング、データベース操作              |
| 5   | **Reviewer**           | 🟣 Purple  | 品質ゲートキーパー           | タスクを承認できる唯一のエージェント                   |
| 6   | **QA Engineer**        | 🟠 Orange  | 品質保証                     | テスト戦略、エッジケース発見                           |
| 7   | **Project Manager**    | 🔵 Cyan    | デリバリー管理               | スコープ管理、リスク評価                               |
| 8   | **Doc Researcher**     | 🟣 Magenta | Context7ナレッジ             | リアルタイムドキュメント検索、アンチハルシネーション   |
| 9   | **Tech Lead**          | 🟡 Gold    | 標準・ガイダンス             | モジュール完全性、CRUD検証                             |
| 10  | **Database Architect** | 🟢 Teal    | データ層スペシャリスト       | スキーマ設計、マイグレーション安全性                   |
| 11  | **Product Owner**      | 🟡 Amber   | ビジネスバリュー             | ユーザーストーリー、受け入れ基準                       |
| 12  | **DevOps Engineer**    | 🔘 Slate   | インフラストラクチャ         | CI/CD、Docker、デプロイメント自動化                    |
| 13  | **Code Quality Guard** | 🌹 Rose    | 品質センチネル               | 構文チェック、リント、型チェック                       |
| 14  | **Monitor**            | 🛡️ Shield  | ループガーディアン           | LLMループの検出/中断、ランタイムウォッチドッグ         |
| 15  | **SEO Specialist**     | 🔵 Blue    | SEO・Webパフォーマンス       | メタタグ、構造化データ、Core Web Vitals                |
| 16  | **Tech Selector**      | 🟣 Violet  | テクノロジーアドバイザー     | フレームワーク/DB選定、メリット・デメリット提示        |
| 17  | **Cybersecurity Eng.** | 🔴 Crimson | アプリケーションセキュリティ | OWASP、脅威モデリング、依存関係監査                    |
| 18  | **Performance Eng.**   | ⚡ Amber   | スピード・スケール           | プロファイリング、クエリ最適化、負荷テスト             |
| 19  | **Release Manager**    | 🏷️ Indigo  | リリース・バージョニング     | SemVer、チェンジログ、ロールバック計画                 |
| 20  | **API Specialist**     | 🔗 Teal    | API・統合                    | REST/GraphQL、バージョニング、サードパーティAPI        |
| 21  | **Mobile Engineer**    | 📱 Sky     | モバイルアプリ               | Flutter、React Native、オフラインファースト            |
| 22  | **Localization Eng.**  | 🌐 Lime    | i18n/L10n                    | 多言語対応、RTL、文化的適応                            |

---

## スキル（22のプロフェッショナルスキル）

| #   | スキル                  | 目的                                                                                               |
| --- | ----------------------- | -------------------------------------------------------------------------------------------------- |
| 1   | **Code Review**         | OWASP + SOLID + Clean Codeの体系的レビュー                                                         |
| 2   | **Architect**           | ADRレコード付きアーキテクチャ設計                                                                  |
| 3   | **TDD Workflow**        | テスト駆動開発（Red/Green/Refactor）                                                               |
| 4   | **Security Audit**      | OWASP Top 10脆弱性検出                                                                             |
| 5   | **Performance**         | プロファイリング、最適化、ベンチマーク                                                             |
| 6   | **Debugging**           | 体系的調査手法                                                                                     |
| 7   | **Deployment**          | CI/CD、Docker、リリース管理                                                                        |
| 8   | **Context7 Docs**       | オプション — Context7 MCP経由のリアルタイムドキュメント検索                                        |
| 9   | **Domain-Driven**       | 完全なビジネスモジュールビルダー — サブモジュール、CRUD、モックアップなし                          |
| 10  | **API Design**          | RESTful標準、レスポンスエンベロープ、ページネーション                                              |
| 11  | **Refactoring**         | 安全な動作保存型コード変換                                                                         |
| 12  | **Compaction Recovery** | セッション圧縮を越えたコンテキスト保存                                                             |
| 13  | **Git Workflow**        | ブランチ戦略、コミット規約、PRテンプレート                                                         |
| 14  | **Database Design**     | スキーマ設計、インデックス、マイグレーション安全性                                                 |
| 15  | **Anti-Pattern**        | モックアップ、プレースホルダー、N+1クエリ、デッドコードを禁止                                      |
| 16  | **Multi-Language**      | 8以上の言語：TS、PHP、Python、Dart、Rust、Go、Java、C#                                             |
| 17  | **SQL Best Practices**  | インデント、N+1防止、パラメータ化クエリ                                                            |
| 18  | **Design System**       | マルチページアーキテクチャ、カラーパレット、タイポグラフィ、スペーシング、Astro + Cloudflare Pages |
| 19  | **Flutter Web**         | レスポンシブレイアウト、アダプティブウィジェット、状態管理、フォーム                               |
| 20  | **Laravel**             | Eloquent ORM、Form Requests、キュー、APIバックエンドパターン                                       |
| 21  | **NestJS**              | モジュール、ガード、パイプ、インターセプター、リクエストライフサイクル                             |
| 22  | **Supabase**            | RLSポリシー、Edge Functions、認証、自動生成API                                                     |

---

## コマンド（6つのスラッシュコマンド）

### `/orchestrator` — メインエントリポイント ⭐

```bash
/orchestrator Build a checkout system with Stripe payments
```

これが**メイン**コマンドです。完全な22エージェントチームを完全なプロフェッショナルワークフローで起動します：

1. **CLARIFY（明確化）** → 曖昧な点があれば的を絞った質問をします（`AskUserQuestion`経由）
2. **DISCOVER（発見）** → プロジェクトをスキャン、技術スタックを検出、設定を読み込み
3. **PLAN（計画）** → ミッションをマイルストーンに分解、並行実行グループを作成
4. **EXECUTE（実行）** → スループット最大化のために専門エージェントを同時起動
5. **VERIFY（検証）** → Reviewer + QAがすべての動作を確認、ゼロリグレッション
6. **DELIVER（納品）** → 構築・変更内容とエビデンスのサマリー

### すべてのコマンド

| コマンド                   | 説明                                                   |
| -------------------------- | ------------------------------------------------------ |
| **`/orchestrator [goal]`** | ⭐ **メインエントリ** — 明確化プロトコル付きフルチーム |
| `/orchestrate [mission]`   | 直接ミッション実行（明確化の質問なし）                 |
| `/plan [feature]`          | 実装計画のみ作成                                       |
| `/review [target]`         | 包括的なコードレビュー                                 |
| `/test [target]`           | テストスイートの実行と分析                             |
| `/deploy [target]`         | デプロイ前後の検証付きデプロイ                         |

> **`/orchestrator`と`/orchestrate`の使い分け**
>
> - `/orchestrator` — 新機能、新プロジェクト、複雑なタスクを開始する時。チームがまず明確化の質問をします。
> - `/orchestrate` — やりたいことが明確で、すぐに実行したい場合。

---

## ユーザー明確化：構築前に質問

オーケストレーターはユーザーの要望を**決して推測しません**。ミッション開始時、CommanderとPlannerエージェントは1行のコードを書く前に`AskUserQuestion`ツールを使って要件を明確にします。

### 仕組み

1. ミッションを説明します（例：`/orchestrator Build a user authentication system`）
2. Commanderがリクエストを分析し、確認します：**これは100%明確か？**
3. 明確でない場合、定義済みの選択肢付きの的を絞った質問をします
4. ユーザーが回答し、その後初めて計画が始まります

### インタラクション例

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

### 質問を行うエージェント

| エージェント       | 質問のタイミング                                                                         |
| ------------------ | ---------------------------------------------------------------------------------------- |
| Commander          | すべてのミッション開始前 — スコープ、優先順位、制約                                      |
| Planner            | アーキテクチャ決定前 — 技術スタック、パターン                                            |
| Product Owner      | ユーザーストーリー定義時 — 受け入れ基準、エッジケース                                    |
| QA Engineer        | テスト戦略設計時 — クリティカルパス、しきい値                                            |
| Project Manager    | スコープ策定時 — 締め切り、リスク許容度、リソース                                        |
| **Tech Selector**  | **技術スタックが未指定の場合 — メリット/デメリット付きでフレームワーク、DB、言語を提示** |
| **SEO Specialist** | **Webプロジェクト構築時 — ターゲット層、コンテンツタイプ、地域**                         |

> **ヒント**: 事前に完全な詳細を提供すれば、質問をスキップできます。エージェントは曖昧さや不足情報を検出した場合のみ質問します。

---

## 高度なツール統合

オーケストレーターは基本的なファイル操作を超えて、Qwen Codeのフルツールスイートを活用します：

### エージェント間通信（SendMessage）

Commanderはタスク中にバックグラウンドエージェントにメッセージを送信し、エージェントの完了を待たずにリダイレクト、明確化、追加コンテキストの提供を行うことができます。

```
SendMessage({ task_id: "worker-auth", message: "User clarified: use JWT, not sessions." })
```

### リアルタイムモニタリング（Monitor）

DevOps Engineerは長時間実行されるプロセス（ビルド、コンテナ、テストスイート）を監視し、ストリーミング通知を受信できます。

```
Monitor({ command: "docker compose logs -f app", description: "Watch app logs during deploy" })
```

### スケジュールタスク（CronCreate/CronList/CronDelete）

定期的または一回限りのタスクをスケジュールして、自動品質チェックや進捗レポートを実行します。

```
CronCreate({ cron: "0 6 * * 1-5", prompt: "Run security audit", recurring: true })
```

### 計画承認ゲート（ExitPlanMode）

Plannerは実行開始前に最終計画をユーザーの承認に提出し、認識の一致を確保します。

### タスクキャンセル（TaskStop）

Commanderは暴走した、または古くなったバックグラウンドタスクを即座にキャンセルできます。

### エージェント・ツールマトリックス

| ツール             | Cmd | Plan | FE  | BE  | Rev | QA  | PM  | Doc | TL  | DB  | PO  | Dev | CQG | Mon | SEO | TSel |
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

## モデル設定

**デフォルトでは、すべてのエージェントがQwen Codeのデフォルトモデルを使用します。** ハードコードされたモデルはありません — ゼロロックインです。

### デフォルトモデルの使用（推奨）

拡張機能をインストールしてそのまま使用してください。すべてのエージェントがQwen Codeで設定されたモデルを自動的に使用します。

### エージェントごとのモデル設定

特定のエージェントに異なるモデルを使用する場合、`agents/`内のエージェントの`.md`ファイルを編集し、`model`行のコメントを外します：

```yaml
---
name: commander
# ... other fields ...
# model: uncomment below to override the user's default model
model: qwen-max # ← Uncomment and set your preferred model
---
```

### 役割別おすすめモデル

| エージェント       | おすすめモデル            | 理由                                     |
| ------------------ | ------------------------- | ---------------------------------------- |
| Commander          | `qwen-max` or `qwen-plus` | オーケストレーションに強い推論能力が必要 |
| Planner            | `qwen-max` or `qwen-plus` | アーキテクチャに強い分析力が必要         |
| Frontend Developer | `qwen3-coder-plus`        | コード生成に最適化                       |
| Backend Developer  | `qwen3-coder-plus`        | コード生成に最適化                       |
| Reviewer           | `qwen-max`                | 品質ゲートには深い理解が必要             |
| QA Engineer        | `qwen-plus`               | テスト戦略にバランスの取れた能力         |
| Code Quality Guard | `qwen-plus`               | 構文/リントチェックに高速処理            |
| その他すべて       | ユーザーのデフォルト      | 特別な要件なし                           |

> **注意**: Qwen Codeのインストールでサポートされている任意のモデルが動作します — DeepSeek、OpenAI、Anthropic、ローカルモデルを含みます。modelフィールドは設定済みプロバイダーに渡される単なる文字列です。

---

## オーケストレーターモード

Qwen Orchestratorは`/orchestrator`で起動する**仮想CLIモード**として機能します。Commanderエージェントが制御を引き継ぎ、22エージェントチーム全体を管理します。

### 推奨CLI設定

最大限の自律性を得るために、`/orchestrate`を実行する**前に**Qwen Code CLIを以下のいずれかのモードに設定してください：

| CLIモード     | 設定        | 動作                                                                  |
| ------------- | ----------- | --------------------------------------------------------------------- |
| **Auto-Edit** | `auto-edit` | エージェントが自由に編集/書き込み。シェルはユーザーが確認。**推奨。** |
| **YOLO**      | `yolo`      | 完全自律。確認なし。最大速度。                                        |
| **Default**   | `default`   | すべての編集をユーザーが確認。低速だが最大コントロール。              |
| **Plan**      | `plan`      | 計画のみ — エージェントはファイルを書き込めない。                     |

### エージェントが設定を上書きしない理由

エージェントには意図的に`approvalMode`、`runConfig`、`background`フィールドが**ありません**：

- **自律性はユーザーがCLIから制御** — 拡張機能からではない
- **時間/ターン制限なし** — Monitorエージェントが暴走検出を担当
- **バックグラウンド実行** — Commanderがサブエージェント起動時に管理
- **オーケストレーターはCLI設定に適応** — 逆ではない

---

## Context7統合（オプション）

[Context7](https://context7.com)は、任意のライブラリやフレームワークのリアルタイムでバージョン固有のドキュメントを提供します。**オプション**です — オーケストレーターはこれなしでも完全に動作します。

### Context7をインストールしている場合

- Doc ResearcherエージェントがライブラリIDを解決し、ライブドキュメントを取得
- すべてのエージェントが不慣れなAPIコードを書く前にContext7を照会可能
- APIシグネチャとパターンのハルシネーションがゼロに

### Context7なしの場合

- エージェントはWeb検索とトレーニング知識にフォールバック
- `context7-docs`スキルがグレースフルにダウングレード
- エラーや機能欠落なし

### Context7のインストール方法

Qwen CodeのMCP設定に追加してください：

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

`@modelcontextprotocol/server-memory` MCPサーバーは、セッション間で永続化される**Knowledge Graph**を提供します。エージェントはセッションリセット後も維持される決定事項、設定、プロジェクトコンテキストを保存できます。

### 保存内容

- **プロジェクトの決定事項**: データベースの選択、フレームワークの選定、アーキテクチャパターン
- **ユーザー設定**: 使用するCSSフレームワーク、ダーク/ライトモード、命名規則
- **アーキテクチャレコード**: コンポーネント階層、API規約、デプロイメントターゲット
- **セッション継続性**: 最後のタスク、次のステップ、前セッションからの既知の問題

### エージェントの活用方法

```
# Commander saves a decision
create_entities({
  entities: [{ name: "database", entityType: "decision", observations: ["PostgreSQL 16", "RLS enabled", "UUID primary keys"] }]
})

# Tech Lead saves coding standards
create_entities({
  entities: [{ name: "code-standards", entityType: "standard", observations: ["PascalCase for components", "ESLint strict mode", "Tests mandatory"] }]
})

# Any agent queries previous decisions
read_graph({})
```

### セットアップ（拡張機能に含まれる）

Memory MCPサーバーは`qwen-extension.json`で設定されており、拡張機能のロード時に自動的に実行されます。追加のセットアップは不要です。

> **参考**: [MCP Server Memory on npm](https://www.npmjs.com/package/@modelcontextprotocol/server-memory)

---

## MCPツールサーバー（オプション）

オプションのMCPサーバーは、ミッション管理のための7つのツールを提供します：

| ツール                     | 目的                                       |
| -------------------------- | ------------------------------------------ |
| `get_mission_status`       | 現在のミッション進捗を取得                 |
| `validate_project`         | プロジェクト構造と健全性を検証             |
| `generate_todo`            | ミッション記述から構造化TODOを生成         |
| `get_agent_roster`         | 全22エージェントの能力一覧を表示           |
| `context7_resolve_library` | Context7ライブラリIDを解決                 |
| `check_crud_completeness`  | すべてのエンティティのCRUD完全性を確認     |
| `create_checkpoint`        | 圧縮リカバリ用の状態チェックポイントを作成 |

### セットアップ

```bash
cd qwen-orchestrator
npm install
npm run build
npm run mcp:start
```

Qwen CodeのMCP設定に追加してください：

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

## 実行フロー

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

## 品質基準

オーケストレーターが生成するすべてのコードは以下を満たします：

- **複雑度**: サイクロマティック複雑度 ≤ 10/関数
- **サイズ**: ≤ 40行/関数、≤ 4パラメータ
- **型**: 厳格な型付け、`any`なし
- **テスト**: TDD必須、カバレッジ80%以上
- **セキュリティ**: OWASP Top 10準拠
- **SQL**: キーワード大文字、1カラム1行、インデント付きJOIN、N+1防止
- **レビュー**: マージ前の多角的コードレビュー
- **言語**: TypeScriptだけではない — プロジェクトの技術スタックに適応

---

## プロジェクト構成

```
qwen-orchestrator/
├── qwen-extension.json       # 拡張機能マニフェスト (v0.0.1)
├── package.json              # NPMパッケージ設定
├── AGENTS.md                 # エージェント運用ルール
├── LICENSE                   # MITライセンス
│
├── agents/                   # 22のエージェント定義
│   ├── commander.md          #   マスターオーケストレーター
│   ├── planner.md            #   リサーチ・計画
│   ├── frontend-developer.md #   UI/UX実装
│   ├── backend-developer.md  #   サーバーサイドロジック
│   ├── reviewer.md           #   品質ゲートキーパー
│   ├── qa-engineer.md        #   テスト戦略
│   ├── project-manager.md    #   デリバリー管理
│   ├── doc-researcher.md     #   Context7ナレッジエンジン
│   ├── tech-lead.md          #   標準・モジュール完全性
│   ├── database-architect.md #   スキーマ・マイグレーション安全性
│   ├── product-owner.md      #   ユーザーストーリー・受け入れ基準
│   ├── devops-engineer.md    #   CI/CD・インフラ
│   ├── code-quality-guard.md #   構文・リント・型チェックセンチネル
│   ├── monitor.md            #   ループガーディアン・ランタイムウォッチドッグ
│   ├── seo-specialist.md     #   SEO・Webパフォーマンス
│   ├── tech-selector.md      #   テクノロジー選定アドバイザー
│   ├── cybersecurity-engineer.md  # アプリケーションセキュリティ
│   ├── performance-engineer.md    # スピード・スケール最適化
│   ├── release-manager.md         # SemVer・リリースワークフロー
│   ├── api-specialist.md          # REST/GraphQL・統合
│   ├── mobile-engineer.md         # Flutter、React Native
│   └── localization-engineer.md   # i18n/L10n・RTL
│
├── skills/                   # 22のスキル定義
│   ├── code-review/          #   コードレビュー手法
│   ├── architect/            #   アーキテクチャ設計
│   ├── tdd-workflow/         #   TDDパターン
│   ├── security-audit/       #   OWASP Top 10
│   ├── performance/          #   パフォーマンス最適化
│   ├── debugging/            #   デバッグ手法
│   ├── deployment/           #   DevOps・CI/CD
│   ├── context7-docs/        #   Context7ドキュメント（オプション）
│   ├── domain-driven/        #   完全モジュールビルダー
│   ├── api-design/           #   RESTful API標準
│   ├── refactoring/          #   安全なコード変換
│   ├── compaction-recovery/  #   コンテキスト保存
│   ├── git-workflow/         #   Gitブランチング・コミット
│   ├── database-design/      #   スキーマ・クエリ最適化
│   ├── anti-pattern/         #   モックアップ、N+1、デッドコード禁止
│   ├── multi-lang/           #   8以上の言語サポート
│   ├── sql-best-practices/   #   SQLフォーマット・安全性
│   ├── design-system/        #   カラーパレット、タイポグラフィ、スペーシング、マルチページ
│   ├── flutter-web/          #   Flutter Webパターン
│   ├── laravel/              #   Laravel PHPパターン
│   ├── nestjs/               #   NestJS TypeScriptパターン
│   └── supabase/             #   Supabaseパターン
│
├── commands/                 # 6つのスラッシュコマンド
│   ├── orchestrator.md       #   ⭐ メインエントリポイント（明確化ファースト）
│   ├── orchestrate.md        #   直接ミッション実行
│   ├── plan.md               #   計画作成
│   ├── review.md             #   コードレビュー
│   ├── test.md               #   テスト実行
│   └── deploy.md             #   検証付きデプロイ
│
├── context/
│   └── QWEN.md               #   ベストプラクティス（セッションに注入）
│
├── mcp-server/src/
│   └── index.ts              #   7つのMCPツール（オプション）
│
└── docs/
    ├── ARCHITECTURE.md       #   詳細アーキテクチャ
    └── QUICK-START.md        #   はじめにガイド
```

---

## UI/UXスキル統合（推奨）

Frontend Developerエージェントは、コードを超えたデザインインテリジェンスのために外部UI/UXスキルリポジトリを活用できます。これらは**オプション**ですが、Webプロジェクトで強く推奨されます。

### 推奨スキル

| スキル              | インストールコマンド                                     | 提供内容                                                                                                                                                                                      |
| ------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **UI UX Pro Max**   | `npx uipro-cli init`                                     | 161の推論ルール、67のUIスタイル、デザインシステムジェネレーター、ドメイン検索（product/style/typography/color）、スタック固有コード（React、Next.js、Vue、Flutter等）                         |
| **Designer Skills** | `/plugin marketplace add Owl-Listener/designer-skills`   | 8つのプラグインに87スキル、27コマンド：design-research, design-systems, ux-strategy, ui-design, interaction-design, prototyping-testing, design-ops, designer-toolkit                         |
| **Taste Skill**     | `npx skills add https://github.com/Leonxlnx/taste-skill` | アンチスロップフロントエンドフレームワーク — プレミアムレイアウト、タイポグラフィ、モーション、スペーシング。スキル：design-taste-frontend, minimalist-ui, soft-skill, brutalist-ui, redesign |

### 使用タイミング

- **新規プロジェクト** → UI UX Pro Maxのデザインシステムジェネレーターでカラー、タイポグラフィ、スペーシングトークンを生成
- **コンポーネントライブラリ** → Designer Skillsのdesign-systemsプラグインでトークン、テーマ、ガバナンスを管理
- **既存UIの改善** → Taste Skillの`redesign-existing-projects`でレイアウト/スペーシングを監査・修正
- **UXリサーチ** → Designer Skillsのux-strategyプラグインで競合分析、情報アーキテクチャを実施
- **モーション・インタラクション** → Designer Skillsのinteraction-designプラグインでマイクロアニメーションを追加

---

## インストール

### クイックインストール（推奨）

```bash
qwen extensions install https://github.com/Omar-Obando/qwen-orchestrator
```

これにより、22のエージェント、22のスキル、6のコマンド、MCP Memoryサーバーが自動的に登録されます。

### 手動インストール

1. リポジトリをクローン：

```bash
git clone https://github.com/Omar-Obando/qwen-orchestrator.git
```

2. Qwen Codeの設定に追加：

```json
{
  "extensions": ["./path/to/qwen-orchestrator"]
}
```

3. （オプション）MCPツールサーバーをビルド：

```bash
cd qwen-orchestrator
npm install
npm run build
```

### MCPサーバーの追加

拡張機能には2つのMCPサーバーが含まれています。さらに追加する場合（Context7など）、`qwen-extension.json`の`mcpServers`に追加してください：

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

> **ドキュメント**: [Creating Qwen Code Extensions](https://qwenlm.github.io/qwen-code-docs/en/developers/extensions/extension/#create-a-boilerplate-extension)

---

## 作者

**Omar Obando**

- GitHub: [@Omar-Obando](https://github.com/Omar-Obando)
- ライセンス: MIT

---

## 🔑 キーワード・トピック

`qwen-code` · `qwen-code-extension` · `multi-agent` · `ai-agents` · `orchestration` · `ai-coding` · `ai-development` · `tdd` · `code-review` · `devops` · `cicd` · `mcp` · `model-context-protocol` · `ai-orchestrator` · `software-engineering` · `ai-assistant` · `coding-agent` · `enterprise-ai` · `multi-agent-system` · `ai-coding-assistant` · `qwen` · `deepseek` · `openai` · `flutter` · `laravel` · `nestjs` · `supabase` · `typescript` · `python` · `php` · `rust` · `golang` · `java` · `csharp` · `sql` · `security-audit` · `owasp` · `test-driven-development` · `code-quality` · `frontend` · `backend` · `mobile` · `devops` · `database` · `api-design` · `i18n` · `localization` · `seo` · `performance` · `refactoring` · `anti-patterns`

---

<div align="center">

**[Qwen Code](https://github.com/QwenLM/qwen-code)コミュニティのために ❤️ で構築されました**

[⬆ トップに戻る](#qwen-orchestrator--qwen-code向けマルチエージェントai開発チーム)

</div>
