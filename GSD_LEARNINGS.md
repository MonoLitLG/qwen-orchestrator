# GSD (Get Shit Done) - Key Learnings for Qwen Orchestrator

## Overview
GSD is a sophisticated meta-prompting and spec-driven development system for Claude Code and other AI coding assistants. It provides a structured workflow for building software with AI.

## Key Concepts

### 1. Phase-Based Workflow
GSD uses a 6-step phase lifecycle:
1. **Discuss** - Capture decisions and clarify gray areas
2. **Research** - Gather information and answer open questions
3. **Plan** - Create executable plans with tasks
4. **Plan Check** - Verify plans meet requirements
5. **Execute** - Run plans with wave-based parallelization
6. **Verify** - Ensure quality and catch gaps
7. **Advance** - Move to next phase

### 2. State Management
- **STATE.md** - Central state file with YAML frontmatter
- **CONTEXT.md** - Project context and decisions
- **ROADMAP.md** - Phase-based roadmap
- **RESEARCH.md** - Research findings and open questions

### 3. Session Architecture
- Each session runs via `query()` from `@anthropic-ai/claude-agent-sdk`
- Sessions have budgets (`maxBudgetUsd`) and turn limits (`maxTurns`)
- Event stream for observability (`GSDEventStream`)
- Config-driven step skipping and human gates

### 4. Planning System
- Plans are YAML + XML format with frontmatter
- Plans have waves for parallel execution
- Plans reference artifacts and must-haves
- Plans have acceptance criteria and verification steps

### 5. Tool Scoping
- Tools are scoped by phase type
- Different phases get different tool permissions
- Configurable via `agent_skills` and tool restrictions

## Key Files to Study

### `sdk/src/phase-runner.ts`
- Core state machine for phase lifecycle
- Implements retry logic with `retryOnce()`
- Handles human gate callbacks
- Manages progress and cost tracking

### `sdk/src/session-runner.ts`
- Orchestrates `query()` calls for plan execution
- Builds executor prompts from parsed plans
- Processes message streams and extracts results
- Manages cost and token usage tracking

### `sdk/src/config.ts`
- Loads `.planning/config.json` with defaults
- Supports workstream configs with deep merge
- Config-driven step skipping
- Model profiles (balanced, quality, speed)

### `sdk/src/planning-journal.ts`
- Event journal for audit trail
- Idempotency keys prevent duplicate events
- SHA-256 request hashing for integrity
- JSONL format for append-only logging

### `sdk/src/plan-parser.ts`
- Parses YAML frontmatter + XML task bodies
- Validates plan structure
- Extracts tasks, artifacts, and requirements

## Potential Integration Points for Qwen Orchestrator

### 1. Enhanced Session Management
GSD's session management is more sophisticated:
- Budget tracking (`maxBudgetUsd`)
- Turn limits (`maxTurns`)
- Event streaming for progress
- Cost tracking per session

**Recommendation**: Add similar budget/turn limits to Qwen Orchestrator sessions

### 2. State Machine Pattern
GSD's `PhaseRunner` implements a clean state machine:
- Each step is a method with clear inputs/outputs
- Human gates for approval points
- Retry logic with configurable attempts
- Event emission for observability

**Recommendation**: Consider adopting similar pattern for Qwen Orchestrator missions

### 3. Config-Driven Behavior
GSD uses config files to control behavior:
- `skip_discuss`, `skip_research`, etc.
- `parallelization` flag for wave execution
- `auto_advance` for headless mode
- `max_discuss_passes` for self-discuss limits

**Recommendation**: Add similar config options to Qwen Orchestrator

### 4. Planning Structure
GSD's plan format is well-structured:
- YAML frontmatter for metadata
- XML body for tasks
- Artifacts with provides/contains constraints
- Must-haves for verification

**Recommendation**: Consider adopting similar structure for Qwen Orchestrator missions

### 5. Event Stream Architecture
GSD's event stream provides observability:
- Phase start/complete events
- Step start/complete events
- Wave start/complete events
- Cost and duration tracking

**Recommendation**: Add similar event system to Qwen Orchestrator

## Implementation Patterns

### Retry Logic
```typescript
private async retryOnce<T>(
  stepName: string,
  fn: () => Promise<T>
): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    // Log and retry once
    this.logger?.info(`Retrying ${stepName} after error`);
    return await fn();
  }
}
```

### Human Gate Callbacks
```typescript
private async invokeBlockerCallback(
  callbacks: HumanGateCallbacks,
  phaseNumber: string,
  step: PhaseStepType,
  message: string
): Promise<string> {
  if (callbacks.onBlocker) {
    return await callbacks.onBlocker({
      phaseNumber,
      step,
      message,
    });
  }
  return 'proceed'; // Default: auto-approve
}
```

### Event Emission
```typescript
this.eventStream.emitEvent({
  type: GSDEventType.PhaseStepComplete,
  timestamp: new Date().toISOString(),
  sessionId: planResult.sessionId,
  phaseNumber,
  step,
  success,
  durationMs,
  error: planResult.error?.messages.join('; ') || undefined,
});
```

## Architecture Differences

### GSD
- **Multi-agent**: Uses specialized agents (researcher, planner, executor)
- **Spec-driven**: Heavy emphasis on requirements and verification
- **Config-heavy**: Lots of config options for workflow control
- **Event-driven**: Comprehensive event stream for observability
- **Stateful**: Central STATE.md with YAML frontmatter

### Qwen Orchestrator (Current)
- **Single-agent**: Uses Qwen Code directly
- **Mission-based**: Focus on mission completion
- **Simpler**: Less config, more straightforward workflow
- **Session-based**: Session isolation per project
- **File-based**: State in session directories

## Recommendations for Qwen Orchestrator v0.0.3

1. **Add Budget Tracking**: Track token usage and costs per session
2. **Add Event Stream**: Implement event emission for progress tracking
3. **Add Config Options**: Add config file for workflow control
4. **Add Retry Logic**: Implement retry with backoff for resilience
5. **Add Human Gates**: Add approval points for critical decisions
6. **Add Wave Execution**: Support parallel task execution
7. **Add Plan Structure**: Consider adopting GSD's plan format
8. **Add State Management**: Centralize state in session directories

## Conclusion

GSD is a mature, production-ready system with sophisticated patterns for AI-assisted development. While Qwen Orchestrator has a simpler, more focused approach, there are valuable patterns from GSD that could enhance its capabilities without over-complicating the workflow.

The key is to adopt patterns that align with Qwen Orchestrator's philosophy: "The complexity is in the system, not in your workflow."
