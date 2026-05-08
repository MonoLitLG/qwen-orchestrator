/**
 * Session Handler - Hook for session:start event
 *
 * This hook is triggered when a new session starts.
 * It creates the session directory structure and initializes session state.
 *
 * @author Omar-Obando
 * @license MIT
 */

import {
  createSessionDirectory,
  initializeSession,
  type SessionState,
  writeSessionState,
} from '../session-manager.js';

/**
 * Hook payload for session:start event
 */
export interface SessionStartPayload {
  sessionId?: string;
  projectPath?: string;
  mission?: string;
}

/**
 * Hook result after session initialization
 */
export interface SessionStartResult {
  success: boolean;
  sessionId: string;
  sessionDir: string;
  directories: {
    root: string;
    progress: string;
    checkpoints: string;
    docs: string;
  };
  state: {
    createdAt: string;
    active: boolean;
    projectPath?: string;
    mission?: string;
  };
  error?: string;
}

/**
 * Handle session:start hook event
 * Creates session directory and initializes session state
 */
export async function handleSessionStart(
  payload: SessionStartPayload = {}
): Promise<SessionStartResult> {
  try {
    const { projectPath, mission } = payload;

    // Initialize or create new session
    const state = await initializeSession(projectPath, mission);

    // Get session directories
    const sessionDirs = createSessionDirectory(state.sessionId, projectPath);

    // Ensure state is written
    writeSessionState(
      state.sessionId,
      {
        ...state,
        active: true,
        projectPath: state.projectPath ?? undefined,
        mission: state.mission ?? undefined,
      },
      projectPath
    );

    return {
      success: true,
      sessionId: state.sessionId,
      sessionDir: sessionDirs.root,
      directories: sessionDirs,
      state: {
        createdAt: state.createdAt,
        active: state.active,
        projectPath: state.projectPath,
        mission: state.mission,
      },
    };
  } catch (error: unknown) {
    console.error('Session start hook failed:', error);
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    return {
      success: false,
      sessionId: '',
      sessionDir: '',
      directories: {
        root: '',
        progress: '',
        checkpoints: '',
        docs: '',
      },
      state: {
        createdAt: new Date().toISOString(),
        active: false,
      },
      error: errorMessage,
    };
  }
}

/**
 * Get the current session info from the hook
 */
export async function getCurrentSessionInfo(projectPath?: string): Promise<{
  sessionId: string | null;
  sessionDir: string | null;
  state: SessionState | null;
}> {
  const { readCurrentSessionId, getSessionState, getSessionDir } =
    await import('../session-manager.js');

  const sessionId = readCurrentSessionId(projectPath);
  if (!sessionId) {
    return {
      sessionId: null,
      sessionDir: null,
      state: null,
    };
  }

  const sessionDir = getSessionDir(sessionId, projectPath);
  const state = getSessionState(sessionId, projectPath);

  return {
    sessionId,
    sessionDir,
    state,
  };
}

/**
 * Export hook registration object
 */
export const sessionHook = {
  name: 'session:start',
  handler: handleSessionStart,
  getCurrentSessionInfo,
};
