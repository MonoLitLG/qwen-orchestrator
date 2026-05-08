# Qwen Code Patterns - Key Learnings for Qwen Orchestrator

## Overview

Qwen Code provides a sophisticated MCP (Model Context Protocol) framework for building AI-assisted development tools. It includes extension hooks, MCP servers, and session management capabilities that form the foundation for the Qwen Orchestrator.

## Key Concepts

### 1. MCP (Model Context Protocol)

Qwen Code uses MCP to enable communication between the IDE and external tools:

- **MCP Servers**: Node.js services that expose tools via standardized protocol
- **Extension Hooks**: Event-driven callbacks triggered by IDE actions
- **Session Management**: Isolated state per project folder

### 2. Extension Hooks System

Qwen Code provides hooks that trigger on specific events:

| Hook Event       | Triggered When                  | Use Case                                        |
| ---------------- | ------------------------------- | ----------------------------------------------- |
| `session:start`  | New session initialization      | Create session directories, initialize state    |
| `session:end`    | Session completion              | Cleanup, save final state, send notifications   |
| `file:read`      | File read operations            | Redirect to session directory, fallback to root |
| `file:write`     | File write operations           | Ensure writes go to session directory           |
| `context:inject` | Context data injection          | Write context to session directory              |
| `PreToolUse`     | Before tool execution           | Validate, modify, or block tool calls           |
| `PostToolUse`    | After successful tool execution | Log, transform, or enhance responses            |
| `SubagentStart`  | When subagent starts            | Initialize subagent state, track progress       |
| `SubagentStop`   | When subagent stops             | Cleanup, save results, notify parent            |

### 3. Session-Based Isolation

Each project folder gets its own isolated session space:

```
.qwen-orchestrator/
├── workspaces/
│   ├── <safe-project-path>__sessions/
│   │   └── <session-id>/
│   │       ├── session-state.json
│   │       ├── progress/
│   │       ├── checkpoints/
│   │       └── docs/
│   └── ...
├── archived-sessions/
└── current-session
```

### 4. MCP Server Architecture

Qwen Code MCP servers use a standardized structure:

```typescript
// Server definition
const server: Server = {
  name: 'qwen-orchestrator',
  version: '0.0.2',
  capabilities: {},
  instructions: 'Orchestration tools for AI development teams',
};

// Tool definition
const createSessionTool: Tool = {
  name: 'create_session',
  description: 'Create new session directory and set active',
  inputSchema: {
    type: 'object',
    properties: {
      projectPath: {
        type: 'string',
        description: 'Project path for isolation',
      },
      mission: { type: 'string', description: 'Mission description' },
    },
  },
};
```

## Key Files to Study

### `qwen-code/AGENTS.md`

- Comprehensive agent documentation
- Agent delegation patterns
- Task management and subagent monitoring
- Hook configuration examples

### `qwen-code/CONTRIBUTING.md`

- Development workflow
- Testing guidelines
- Code quality standards
- Release process

### `examples/` Directory

- **agent/**: Extension agent definitions
- **commands/**: Extension command definitions
- **context/**: Context injection patterns
- **mcp-server/**: MCP server examples
- **skills/**: Skill definitions and usage

## Session Management Patterns

### Hook-Based Initialization

```typescript
// hooks/session-handler.ts
export async function handleSessionStart(
  event: SessionStartEvent
): Promise<SessionState> {
  const projectPath = event.cwd || process.cwd();
  const sessionId = generateSessionId();

  // Create session directory structure
  const sessionDirs = createSessionDirectory(sessionId, projectPath);

  // Write initial state
  const state: SessionState = {
    sessionId,
    createdAt: new Date().toISOString(),
    active: true,
    projectPath,
  };

  writeSessionState(sessionId, state, projectPath);
  writeCurrentSessionId(sessionId, projectPath);

  return state;
}
```

### File Interception

```typescript
// hooks/file-interceptor.ts
export async function handleFileRead(
  event: FileReadEvent
): Promise<FileReadResult> {
  const projectPath = event.cwd || process.cwd();
  const currentSession = readCurrentSessionId(projectPath);

  if (currentSession) {
    // Check session directory first
    const sessionDir = getSessionDir(currentSession, projectPath);
    const sessionFilePath = join(sessionDir, event.path);

    if (existsSync(sessionFilePath)) {
      return {
        content: readFileSync(sessionFilePath, 'utf8'),
        fromSession: true,
      };
    }
  }

  // Fall back to root
  return {
    content: readFileSync(event.path, 'utf8'),
    fromSession: false,
  };
}
```

### Context Injection

```typescript
// hooks/context-redirector.ts
export async function handleContextInject(
  event: ContextInjectEvent
): Promise<void> {
  const projectPath = event.cwd || process.cwd();
  const currentSession = readCurrentSessionId(projectPath);

  if (currentSession) {
    const sessionDir = getSessionDir(currentSession, projectPath);
    const contextDir = join(sessionDir, 'context');

    mkdirSync(contextDir, { recursive: true });

    // Write context data
    const contextFile = join(contextDir, `${event.key}.json`);
    writeFileSync(contextFile, JSON.stringify(event.data, null, 2));

    // Update session state
    const state = getSessionState(currentSession, projectPath);
    if (state) {
      state.contextKeys = [...(state.contextKeys || []), event.key];
      writeSessionState(currentSession, state, projectPath);
    }
  }
}
```

## MCP Tool Patterns

### Session Management Tools

```typescript
// mcp-server/src/session-tools.ts
export const sessionTools = [
  {
    name: 'create_session',
    description: 'Create new session directory and set active',
    inputSchema: {
      type: 'object',
      properties: {
        projectPath: {
          type: 'string',
          description: 'Project path for workspace isolation',
        },
        mission: {
          type: 'string',
          description: 'Mission description for the session',
        },
        forceNew: {
          type: 'boolean',
          description: 'Archive existing session and create new one',
        },
      },
    },
  },
  {
    name: 'get_current_session',
    description: 'Get current session ID and path',
    inputSchema: {
      type: 'object',
      properties: {
        projectPath: {
          type: 'string',
          description: 'Project path to check',
        },
      },
    },
  },
  {
    name: 'redirect_to_session',
    description: 'Get session-aware path for a file',
    inputSchema: {
      type: 'object',
      properties: {
        sessionId: { type: 'string', description: 'Session ID' },
        filePath: { type: 'string', description: 'File path' },
        projectPath: { type: 'string', description: 'Project path' },
      },
    },
  },
  {
    name: 'archive_session',
    description: 'Archive a completed session',
    inputSchema: {
      type: 'object',
      properties: {
        sessionId: { type: 'string', description: 'Session ID to archive' },
        projectPath: { type: 'string', description: 'Project path' },
      },
    },
  },
  {
    name: 'check_session_isolation',
    description: 'Verify session isolation configuration',
    inputSchema: {
      type: 'object',
      properties: {
        projectPath: { type: 'string', description: 'Project path' },
      },
    },
  },
];
```

### Tool Implementation

```typescript
export async function handleCreateSession(
  params: CreateSessionParams
): Promise<SessionState> {
  const { projectPath, mission, forceNew } = params;

  // Default to extension directory if no project path
  const targetPath = projectPath || ORCHESTRATOR_DIR;

  // Initialize session
  const state = await initializeSession(targetPath, mission, forceNew);

  return state;
}

export async function handleGetCurrentSession(
  params: GetCurrentSessionParams
): Promise<CurrentSessionInfo | null> {
  const { projectPath } = params;
  const sessionId = readCurrentSessionId(projectPath);

  if (!sessionId) {
    return null;
  }

  const projectDir = projectPath || ORCHESTRATOR_DIR;
  const sessionDir = getSessionDir(sessionId, projectDir);
  const state = getSessionState(sessionId, projectDir);

  return {
    sessionId,
    sessionDir,
    state,
  };
}
```

## Hook Configuration

### Extension Configuration

```json
// qwen-extension.json
{
  "mcpServers": {
    "orchestrator": {
      "command": "node",
      "args": ["${extensionRoot}/mcp-server/dist/index.js"],
      "env": {}
    }
  },
  "hooks": {
    "session:start": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "node",
            "args": [
              "${extensionRoot}/mcp-server/dist/hooks/session-handler.js"
            ],
            "cwd": "${extensionRoot}",
            "shell": "cmd.exe",
            "name": "Session Handler",
            "description": "Initialize session directory structure"
          }
        ]
      }
    ],
    "file:read": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "node",
            "args": [
              "${extensionRoot}/mcp-server/dist/hooks/file-interceptor.js"
            ],
            "cwd": "${extensionRoot}",
            "shell": "cmd.exe",
            "name": "File Interceptor",
            "description": "Intercept file reads for session isolation"
          }
        ]
      }
    ],
    "file:write": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "node",
            "args": [
              "${extensionRoot}/mcp-server/dist/hooks/file-interceptor.js"
            ],
            "cwd": "${extensionRoot}",
            "shell": "cmd.exe",
            "name": "File Interceptor (Write)",
            "description": "Intercept file writes for session isolation"
          }
        ]
      }
    ],
    "context:inject": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "node",
            "args": [
              "${extensionRoot}/mcp-server/dist/hooks/context-redirector.js"
            ],
            "cwd": "${extensionRoot}",
            "shell": "cmd.exe",
            "name": "Context Redirector",
            "description": "Redirect context to session directory"
          }
        ]
      }
    ]
  }
}
```

## Path Safety

Project paths are converted to safe folder names:

- **Windows**: `C:\Users\user\Documents\project` → `C__Users_user_Documents_project`
- **Unix/Linux**: `/home/user/projects/project` → `_home_user_projects_project`
- **Mac**: `/Users/user/Sites/site` → `_Users_user_Sites_site`

## Best Practices

### 1. Session Isolation

- Always use workspace-aware functions with `projectPath` parameter
- Never write directly to `.qwen-orchestrator/` root
- Use `redirect_to_session` for file paths

### 2. Hook Design

- Keep hooks lightweight and fast
- Log to session directory for debugging
- Handle errors gracefully with fallbacks
- Use async operations for non-blocking hooks

### 3. MCP Server Structure

- Group related tools together
- Use consistent naming conventions
- Provide clear descriptions and schemas
- Handle edge cases and errors

### 4. State Management

- Store state in session directories
- Use JSON for state files (human-readable)
- Create atomic writes with temp files
- Archive completed sessions

## Implementation Checklist

- [ ] Hook handlers created and tested
- [ ] MCP server tools implemented
- [ ] Session isolation working correctly
- [ ] File interception functioning
- [ ] Context injection working
- [ ] Error handling in place
- [ ] Logging configured
- [ ] Documentation updated

## Future Enhancements

1. **Budget Tracking**: Add token usage and cost tracking per session
2. **Event Stream**: Implement event emission for progress tracking
3. **Config Options**: Add config file for workflow control
4. **Retry Logic**: Implement retry with backoff for resilience
5. **Human Gates**: Add approval points for critical decisions
6. **Wave Execution**: Support parallel task execution
7. **Plan Structure**: Adopt structured plan format
8. **State Management**: Centralize state in session directories
