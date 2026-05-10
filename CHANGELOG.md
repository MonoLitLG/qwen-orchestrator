# Changelog

All notable changes to Qwen Orchestrator will be documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased](https://github.com/your-org/qwen-orchestrator/compare/v0.0.5...HEAD)

### Changed

- **Qwen Code Patterns documentation** - Comprehensive guide to MCP servers, hooks, and session management patterns
- **QWEN_CODE_PATTERNS.md** - Documentation covering MCP architecture, hook system, and best practices

## [0.0.5] - 2025-01-11

### Added

- **7 new technical skills** for senior developer roles:
  - `docker-containerization` - Multi-stage builds, security hardening, image optimization, Docker Compose orchestration
  - `kubernetes-orchestration` - Deployments, HPA, service mesh, ingress, secrets, stateful sets, GitOps with ArgoCD/Flux
  - `terraform-iac` - Modules, state management, workspaces, remote backend, Sentinel policies, Terratest integration
  - `github-actions-cicd` - Workflows, matrices, environments, secrets, caching, composite actions, reusable workflows
  - `redis-caching` - Data structures, caching patterns, session management, pub/sub, clustering, Lua scripting
  - `graphql-api-design` - Schema design, resolvers, DataLoader, pagination, Apollo Federation, performance optimization
  - `multi-platform-dev` - Cross-platform shell commands, path handling, line endings, permissions, package managers

- **Tool Registry pattern** - Central registry with auto-discovery, check_fn caching (30s TTL), and dynamic schema overrides
- **Command Registry pattern** - Single source of truth with aliases, categories, and gateway/CLI routing
- **Toolset Composition** - Toolsets that include other toolsets for flexible composition
- **Checkpoint Manager** - Filesystem checkpoints for recovery with rollback capabilities
- **Approval System** - Dangerous command approval workflow with session-level and always modes

### Changed

- **Skills enhanced with "When NOT to Use" sections** - All 75+ skills now include clear boundaries to prevent token waste
- **Cross-references between skills** - Each skill now references related skills for better navigation
- **Production checklists** - All new skills include comprehensive production deployment checklists
- **Certification references** - Skills now reference relevant certifications (CKA, CKAD, CKS, Terraform Associate, etc.)

### Improved

- **Agent skill mapping** - Each of the 24 agents now has minimum 5 relevant technical skills
- **Context7 integration** - All new skills researched and validated with Context7 MCP for accuracy
- **Anti-patterns documentation** - Each skill includes common anti-patterns and their solutions
- **Real-world impact sections** - Before/after comparisons showing skill value

### Statistics

| Category | Skills Before | Skills After | New Skills |
|----------|---------------|--------------|------------|
| Containerization & Orchestration | 0 | 2 | 2 |
| Infrastructure as Code | 0 | 1 | 1 |
| CI/CD Automation | 0 | 1 | 1 |
| Caching & Performance | 0 | 1 | 1 |
| API Design | 0 | 1 | 1 |
| Multi-Platform Development | 0 | 1 | 1 |
| **Total** | **75** | **82** | **7** |

## [0.0.3] - 2025-01-10

### Changed

- **GSD_LEARNINGS.md removed** - Replaced with Qwen Code patterns documentation

## [0.0.2] - 2025-01-10

### Added

- **Workspace-based session isolation** - Each project folder now gets its own isolated session space, similar to Qwen Code's approach. Sessions are no longer shared across different project folders.
- **Session state persistence** - Each session stores state in `session-state.json` with metadata including session ID, creation time, project path, and active status.
- **Progress tracking** - Mission snapshots are stored in `progress/` subdirectory for tracking work progress.
- **Checkpoint system** - State snapshots for recovery are stored in `checkpoints/` subdirectory.
- **Documentation caching** - Cached documentation is stored in `docs/` subdirectory.

### Changed

- **Session directory structure** - Now uses `.qwen-orchestrator/workspaces/<safe-project-path>/sessions/` instead of flat `.qwen-orchestrator/sessions/`
- **Path safety** - Project paths are converted to safe folder names: Windows paths (`C:\`) → `C__`, Unix paths (`/`) → `_`
- **MCP tools** - All session management tools (`create_session`, `get_current_session`, `archive_session`, `redirect_to_session`, `check_session_isolation`) now support optional `projectPath` parameter

### Fixed

- **Session isolation** - Sessions are now properly isolated per project folder, preventing cross-contamination between projects
- **TypeScript compilation** - Added `@types/node` dependency and updated `tsconfig.json` with proper type definitions

## [0.0.1] - 2025-01-10

### Added

- **Initial release** - Basic session management system
- **Session creation** - `create_session` MCP tool for creating new sessions
- **Session retrieval** - `get_current_session` MCP tool for getting current session info
- **Session archiving** - `archive_session` MCP tool for archiving completed sessions
- **Session redirection** - `redirect_to_session` MCP tool for getting session-aware file paths
- **Session isolation check** - `check_session_isolation` MCP tool for debugging session configuration
- **Session handler hooks** - Automatic session initialization via MCP hooks
- **Orchestration tools** - Core orchestration functionality for AI development teams

### Features

- Session-based state management
- MCP hook integration for automatic session management
- File read/write interception for session isolation
- Context injection to session directories
- Support for multiple concurrent sessions

---

## Notes

- **Safe Path Naming**: Project paths are converted to safe folder names to ensure compatibility across different operating systems:
  - Windows: `C:\Users\user\Documents\project` → `C__Users_user_Documents_project`
  - Unix/Linux: `/home/user/projects/project` → `_home_user_projects_project`
  - Mac: `/Users/user/Sites/site` → `_Users_user_Sites_site`

- **Backward Compatibility**: Existing sessions without workspace isolation continue to work. The new system is additive, not breaking.

- **Migration**: No action required for existing users. New projects automatically get workspace isolation.
