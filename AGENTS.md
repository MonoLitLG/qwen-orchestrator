# AGENTS.md

This file defines the operational rules for all agent work in this repository.

---

## Core Principle

All work must be **evidence-based**. Read files before editing. Run commands and observe output. Run tests and check results. Never assume.

---

## Website Rules

### Multi-Page Websites (MANDATORY)

When the user asks for "a website", "a site", or "a page for X business" — create a **full multi-page website**. Never a single landing page.

**Minimum pages**: Home, About, Services (listing + detail per service), Products/Portfolio (listing + detail per product), Contact.

**Exception**: Only when the user explicitly says "landing page" or "one-page site".

### Zero Emojis (MANDATORY)

Professional websites never use emojis. Use SVG icons from Lucide, Heroicons, or Phosphor (pick ONE, use consistently).

### Section Spacing (MANDATORY)

- Section padding: minimum `80px` top+bottom (`clamp(4rem, 8vw, 6rem)`)
- Hero: minimum `96px`, target `70vh`
- Footer: `128px` top padding minimum
- Alternating backgrounds: `--color-bg` / `--color-surface`
- Max 7 items in main navigation; use dropdowns for groups

---

## Quality Gates

Before marking any task complete, run the appropriate checks for the project's framework:

| Framework   | Check Commands                                                                 |
| ----------- | ------------------------------------------------------------------------------ |
| Astro       | `astro check` · `eslint .` · `tsc --noEmit` · `astro build`                    |
| Next.js     | `next lint` · `eslint .` · `tsc --noEmit` · `next build`                       |
| TypeScript  | `tsc --noEmit` · `eslint .` · `npm run build`                                  |
| Flutter     | `dart analyze` · `flutter build web`                                           |
| Laravel/PHP | `php -l app/**/*.php` · `pint --test` · `phpstan analyse` · `php artisan test` |
| React       | `tsc --noEmit` · `eslint .` · `npm run build`                                  |
| Python      | `python -m py_compile` · `ruff check .` · `mypy src/` · `pytest`               |
| Rust        | `cargo check` · `cargo clippy` · `cargo test`                                  |
| Go          | `go vet` · `golangci-lint` · `go test ./...`                                   |

Always read `package.json`, `composer.json`, `pubspec.yaml` first to discover project-specific scripts.

---

## TodoWrite

Track all tasks via TodoWrite. Every call must include the **full** todos array (it replaces, not merges).

```json
{
  "todos": [
    { "id": "t1", "content": "Task description", "status": "pending" },
    { "id": "t2", "content": "Another task", "status": "in_progress" },
    { "id": "t3", "content": "Completed task", "status": "completed" }
  ]
}
```

Set `in_progress` when starting, `completed` only after quality gates pass.

---

## Large Files

If `write_file` is rejected due to max_tokens truncation, split the work:

1. `write_file` with a skeleton (imports, function signatures, empty bodies)
2. Multiple `edit` calls to fill in each section incrementally

---

## SQL Formatting

```sql
SELECT
    p.id,
    p.name,
    c.name AS category_name
FROM
    products p
    INNER JOIN categories c ON p.category_id = c.id
WHERE
    p.status = 'active'
    AND p.deleted_at IS NULL
ORDER BY p.created_at DESC
LIMIT 20 OFFSET 0;
```

- Keywords: UPPERCASE
- One column per line with trailing comma
- JOINs indented under FROM
- Always parameterized queries — never string concatenation
- Eager loading (JOIN / IN) to prevent N+1

---

## Anti-Patterns

**Never write:**

- `return []; // TODO: implement` or `throw new Error('Not implemented')`
- Mock/hardcoded data in production code paths
- Empty function bodies or stubs returning static values
- N+1 queries or raw SQL with string concatenation

**Always write:**

- Full implementation with real logic, validation, and error handling
- Parameterized queries only
- Input validation on every endpoint

---

## Code Quality

- Cyclomatic complexity ≤ 10, parameters ≤ 4, function length ≤ 40 lines, nesting ≤ 3
- No untyped `any`, no magic strings/numbers, no circular dependencies
- Comments explain **why**, not what
- Detect project language from config files before writing code — never assume TypeScript

---

## Parallel Agent Rules

Only parallelize when:

- File ownership does not overlap
- One agent's output is not another's required input
- No shared state is modified concurrently

Do NOT parallelize if multiple agents edit the same file, or if schema/migration/dependency work is involved.

---

## Agent Selection

| Agent                    | Use For                                                    |
| ------------------------ | ---------------------------------------------------------- |
| `frontend-developer`     | UI, styling, responsive design, React/Vue/Astro components |
| `backend-developer`      | APIs, DB, auth, server logic, Laravel/Node/Python services |
| `reviewer`               | Code review, quality gates, regression detection           |
| `qa-engineer`            | Test strategy, coverage, E2E test planning                 |
| `code-quality-guard`     | Lint, typecheck, syntax, formatting                        |
| `database-architect`     | Schema, migrations, queries, N+1 prevention                |
| `devops-engineer`        | CI/CD, Docker, deployment, environment setup               |
| `planner`                | Architecture research, design docs, tech stack analysis    |
| `seo-specialist`         | SEO, structured data, Core Web Vitals, sitemap/robots.txt  |
| `tech-selector`          | Tech stack selection, framework comparison, PoC guidance   |
| `api-specialist`         | REST/GraphQL design, OpenAPI specs, integration patterns   |
| `cybersecurity-engineer` | OWASP, auth/authorization, secrets, threat modeling        |
| `performance-engineer`   | Speed, scalability, profiling, optimization strategies     |
| `mobile-engineer`        | Flutter, React Native, native app patterns                 |
| `localization-engineer`  | i18n, l10n, translation workflows, locale management       |

**Rules for delegation**:

- Only delegate to one agent per atomic task
- Launch independent tasks in parallel (no overlapping files)
- Never skip Phase 5 DELIVER — always archive session

---

## Session Memory

Each `/orchestrator` invocation creates an isolated session under `.qwen-orchestrator/sessions/<session-id>/`.

Update `$SESSION_DIR/memory.md` at session end with: current task, last completed step, next step, key decisions, and files to open first on resume.

---

## Completion

Before declaring completion:

- Changed files re-read and verified
- Build + tests executed with observed results
- Side effects reviewed, artifacts synchronized
- Session memory updated
