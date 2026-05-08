## MCP Hooks and Session Isolation

### Overview

The Qwen Orchestrator uses MCP (Model Context Protocol) hooks to automatically manage session isolation. Each project folder gets its own isolated workspace with independent sessions, similar to how Qwen Code handles workspace-based isolation.

### Key Concepts

#### Workspace-Based Isolation

- **Each project folder has its own workspace** - Sessions are isolated per project, not shared across folders
- **Session isolation** - Each session has its own state, progress, and checkpoints
- **Backward compatible** - Existing sessions continue to work; new projects get workspace isolation

#### Workspace Directory Structure

```
.qwen-orchestrator/
├── current-session          # Active session ID (for default/orchestrator folder)
├── sessions/                # Sessions for orchestrator folder (legacy)
├── workspaces/              # NEW: Per-project workspace directories
│   ├── <safe-project-path-1>__sessions/
│   │   └── <session-id>/    # Per-session state for project 1
│   │       ├── session-state.json
│   │       ├── progress/
│   │       ├── checkpoints/
│   │       └── docs/
│   ├── <safe-project-path-2>__sessions/
│   │   └── <session-id>/    # Per-session state for project 2
│   └── ...
├── archived-sessions/       # Archived completed sessions
└── current-session          # Active session ID
```

### Hook Types

| Hook Name        | Triggered When             | Handler File                                  | Purpose                                   |
| ---------------- | -------------------------- | --------------------------------------------- | ----------------------------------------- |
| `session:start`  | New session initialization | `mcp-server/dist/hooks/session-handler.js`    | Create session directory and state        |
| `file:read`      | File read operations       | `mcp-server/dist/hooks/file-interceptor.js`   | Check session dir first, fallback to root |
| `file:write`     | File write operations      | `mcp-server/dist/hooks/file-interceptor.js`   | Always write to session directory         |
| `context:inject` | Context data injection     | `mcp-server/dist/hooks/context-redirector.js` | Write context to session directory        |

### Hook Behavior

#### session:start Hook

- Automatically creates new session directory structure
- Generates unique session ID (timestamp + random)
- Creates subdirectories: `progress/`, `checkpoints/`, `docs/`
- Updates `current-session` file with new session ID
- **Each project folder gets its own workspace directory**

#### file:read Hook

- Checks `$SESSION_DIR/` first for requested file
- Falls back to root `.qwen-orchestrator/` if not found in session
- Returns `fromSession: true` if read from session directory

#### file:write Hook

- ALWAYS writes to `$SESSION_DIR/` (never root)
- Creates directory structure if needed
- Ensures session isolation - no cross-session file overwrites

#### context:inject Hook

- Writes context data to `$SESSION_DIR/context/`
- Creates structured context files per key
- Updates session state with context keys

### MCP Tools for Session Management

| Tool                      | Purpose                                     | When to Use                          |
| ------------------------- | ------------------------------------------- | ------------------------------------ |
| `create_session`          | Create new session directory and set active | At start of every `/orchestrator`    |
| `get_current_session`     | Get current session ID and path             | Verify active session before writes  |
| `redirect_to_session`     | Get session-aware path for a file           | Before reading/writing session files |
| `archive_session`         | Archive a completed session                 | When mission is complete             |
| `check_session_isolation` | Verify session isolation configuration      | Debugging session issues             |

### Session Directory Structure (Per Project)

Each project folder gets its own workspace:

```
.qwen-orchestrator/workspaces/<safe-project-path>__sessions/
└── <session-id>/
    ├── session-state.json     # Session metadata and state
    ├── progress/              # Mission snapshots
    ├── checkpoints/           # State snapshots for recovery
    └── docs/                  # Cached documentation
```

### Workspace Path Safety

Project paths are converted to safe folder names:

- Windows paths: `/path/to/project` → `<safe-project-path>`
- Unix paths: `/home/user/project` → `_home_user_project`
- Special characters replaced with underscores

### Backward Compatibility

- Existing sessions without workspace isolation continue to work
- Files in root `.qwen-orchestrator/` are still accessible
- Hook-based redirection is additive, not breaking
- Graceful fallback if session directory is missing

### Error Handling

- Missing session directory: Creates automatically
- Session not found: Returns error with guidance to call `create_session`
- File not found: Returns `null` content, allows graceful handling
- Hook execution failure: Logs error, continues with fallback behavior

### Migration Guide

#### For Existing Users

1. **No action required** - Existing sessions continue to work
2. **New projects** - Automatically get workspace isolation
3. **Legacy sessions** - Can be archived or migrated manually

#### For New Projects

1. Run `/orchestrator` command
2. Workspace directory is created automatically
3. Sessions are isolated per project folder

### Example: Workspace Isolation in Action

```bash
# Project A: qwen-orchestrator (example path)
cd /path/to/qwen-orchestrator
/orchestrator Build a new agent
# Creates session in: .qwen-orchestrator/workspaces/<safe-path-1>__sessions/session-xxx/

# Project B: marketing-agency-panama (example path)
cd /path/to/marketing-agency-panama
/orchestrator Build a website
# Creates session in: .qwen-orchestrator/workspaces/<safe-path-2>__sessions/session-yyy/
```

Each project has completely independent sessions!

**Path Safety Examples**:

- Windows: `C:\Users\user\Documents\project` → `C__Users_user_Documents_project`
- Unix: `/home/user/projects/project` → `_home_user_projects_project`
- Mac: `/Users/user/Sites/site` → `_Users_user_Sites_site`
