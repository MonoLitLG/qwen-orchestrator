/**
 * Context Redirector - Hook for context injection
 *
 * This hook intercepts context injection and ensures context files
 * are written to session-isolated directories.
 *
 * @author Omar-Obando
 * @license MIT
 */

import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

import {
  getSessionDir,
  readCurrentSessionId,
  type SessionState,
  writeSessionState,
} from '../session-manager.js';

/**
 * Context injection payload
 */
export interface ContextInjectionPayload {
  context: Record<string, unknown>;
  sessionId?: string;
}

/**
 * Context redirect result
 */
export interface ContextRedirectResult {
  success: boolean;
  sessionDir: string;
  contextFiles: string[];
  error?: string;
}

/**
 * Redirect context to session directory
 */
export async function redirectContextToSession(
  payload: ContextInjectionPayload
): Promise<ContextRedirectResult> {
  try {
    const { context } = payload;
    let sessionId = payload.sessionId || readCurrentSessionId();

    if (!sessionId) {
      return {
        success: false,
        sessionDir: '',
        contextFiles: [],
        error: 'No active session found',
      };
    }

    const sessionDir = getSessionDir(sessionId);
    const contextDir = join(sessionDir, 'context');

    // Create context directory
    mkdirSync(contextDir, { recursive: true });

    // Write context files
    const contextFiles: string[] = [];

    for (const [key, value] of Object.entries(context)) {
      const filePath = join(contextDir, `${key}.json`);
      writeFileSync(filePath, JSON.stringify(value, null, 2), 'utf8');
      contextFiles.push(filePath);
    }

    // Update session state
    const state = {
      sessionId,
      lastContextUpdate: new Date().toISOString(),
      contextKeys: Object.keys(context),
    };

    // Merge with existing state
    const existingStateRaw = await getSessionState(sessionId);
    const existingState = existingStateRaw as Partial<SessionState> | null;
    if (existingState) {
      writeSessionState(sessionId, {
        sessionId: existingState.sessionId ?? sessionId,
        createdAt: (existingState.createdAt as string) ?? new Date().toISOString(),
        active: (existingState.active as boolean) ?? true,
      });
    } else {
      writeSessionState(sessionId, {
        ...state,
        createdAt: new Date().toISOString(),
        active: true,
      });
    }

    return {
      success: true,
      sessionDir,
      contextFiles,
    };
  } catch (error: any) {
    console.error('Context redirect failed:', error);
    return {
      success: false,
      sessionDir: '',
      contextFiles: [],
      error: error.message || 'Unknown error',
    };
  }
}

/**
 * Read context from session directory
 */
export async function readContextFromSession(sessionId?: string): Promise<{
  success: boolean;
  context: Record<string, unknown>;
  sessionDir: string;
  error?: string;
}> {
  try {
    let sid = sessionId || readCurrentSessionId();

    if (!sid) {
      return {
        success: false,
        context: {},
        sessionDir: '',
        error: 'No active session found',
      };
    }

    const sessionDir = getSessionDir(sid);
    const contextDir = join(sessionDir, 'context');

    if (!existsSync(contextDir)) {
      return {
        success: true,
        context: {},
        sessionDir,
      };
    }

    const fs = await import('fs');
    const entries = fs.readdirSync(contextDir, { withFileTypes: true });

    const context: Record<string, unknown> = {};

    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.json')) {
        const key = entry.name.replace('.json', '');
        const filePath = join(contextDir, entry.name);
        const content = fs.readFileSync(filePath, 'utf8');
        context[key] = JSON.parse(content);
      }
    }

    return {
      success: true,
      context,
      sessionDir,
    };
  } catch (error: any) {
    console.error('Context read failed:', error);
    return {
      success: false,
      context: {},
      sessionDir: '',
      error: error.message || 'Unknown error',
    };
  }
}

/**
 * Get session state helper
 */
async function getSessionState(sessionId: string): Promise<unknown> {
  const { getSessionState: get } = await import('../session-manager.js');
  return get(sessionId);
}

/**
 * Export hook registration object
 */
export const contextRedirectHook = {
  name: 'context:inject',
  handler: redirectContextToSession,
  readContextFromSession,
};

/**
 * Get all context-aware paths for a session
 */
export async function getContextAwarePaths(sessionId?: string): Promise<{
  sessionDir: string;
  contextDir: string;
  stateFile: string;
  contextFiles: string[];
}> {
  let sid = sessionId || readCurrentSessionId();

  if (!sid) {
    return {
      sessionDir: '',
      contextDir: '',
      stateFile: '',
      contextFiles: [],
    };
  }

  const sessionDir = getSessionDir(sid);
  const contextDir = join(sessionDir, 'context');
  const stateFile = join(sessionDir, 'session-state.json');

  const fs = await import('fs');
  const contextFiles: string[] = [];

  if (existsSync(contextDir)) {
    const entries = fs.readdirSync(contextDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.json')) {
        contextFiles.push(join(contextDir, entry.name));
      }
    }
  }

  return {
    sessionDir,
    contextDir,
    stateFile,
    contextFiles,
  };
}
