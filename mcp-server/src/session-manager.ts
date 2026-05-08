/**
 * Session Manager - Session Isolation Logic
 *
 * Provides session management utilities for the Qwen Orchestrator.
 * Ensures each session has isolated state in .qwen-orchestrator/sessions/<session-id>/
 * Supports workspace-based isolation: each project folder has its own workspace.
 *
 * @author Omar-Obando
 * @license MIT
 */

import {
  existsSync,
  mkdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from 'fs';
import { dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Base directory for orchestrator state (extension installation folder)
const ORCHESTRATOR_DIR = join(__dirname, '..', '..', '..');

/**
 * Get workspace directory for a given project path
 * Each project folder gets its own workspace directory
 */
export function getWorkspaceDir(projectPath: string): string {
  // Normalize the project path to create a unique workspace folder name
  // Use relative path from orchestrator dir, or absolute path if outside
  try {
    const relPath = relative(ORCHESTRATOR_DIR, projectPath);
    // Replace path separators with underscores to create a safe folder name
    const safeName = relPath.replace(/[\\/]+/g, '__');
    return join(ORCHESTRATOR_DIR, '.qwen-orchestrator', 'workspaces', safeName);
  } catch {
    // If relative path fails (e.g., different drives on Windows), use absolute path
    const safeName = projectPath.replace(/[\\/]+/g, '__').replace(/[:]+/g, '-');
    return join(ORCHESTRATOR_DIR, '.qwen-orchestrator', 'workspaces', safeName);
  }
}

/**
 * Session directory structure
 */
export interface SessionDirectories {
  root: string;
  progress: string;
  checkpoints: string;
  docs: string;
}

/**
 * Session state interface
 */
export interface SessionState {
  sessionId: string;
  createdAt: string;
  active: boolean;
  projectPath?: string;
  mission?: string;
}

/**
 * Get the base orchestrator directory
 */
export function getOrchestratorDir(): string {
  return ORCHESTRATOR_DIR;
}

/**
 * Get the sessions directory path
 */
export function getSessionsDir(): string {
  return join(ORCHESTRATOR_DIR, '.qwen-orchestrator', 'sessions');
}

/**
 * Get the current session ID file path
 */
export function getCurrentSessionFile(): string {
  return join(ORCHESTRATOR_DIR, '.qwen-orchestrator', 'current-session');
}

/**
 * Get the archived sessions directory
 */
export function getArchivedSessionsDir(): string {
  return join(ORCHESTRATOR_DIR, '.qwen-orchestrator', 'archived-sessions');
}

/**
 * Get the workspace sessions directory for a given project path
 */
export function getWorkspaceSessionsDir(projectPath: string): string {
  return join(getWorkspaceDir(projectPath), 'sessions');
}

/**
 * Get the workspace current session file for a given project path
 */
export function getWorkspaceCurrentSessionFile(projectPath: string): string {
  return join(getWorkspaceDir(projectPath), 'current-session');
}

/**
 * Generate a unique session ID
 * Format: YYYY-MM-DDTHH-MM-SS-<random>
 */
export function generateSessionId(): string {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -1);
  const random = Math.random().toString(36).substring(2, 8);
  return `session-${timestamp}-${random}`;
}

/**
 * Read the current session ID from workspace file
 * Returns null if no current session exists
 */
export function readCurrentSessionId(projectPath?: string): string | null {
  const currentSessionFile = projectPath
    ? getWorkspaceCurrentSessionFile(projectPath)
    : getCurrentSessionFile();
  if (!existsSync(currentSessionFile)) {
    return null;
  }
  try {
    return readFileSync(currentSessionFile, 'utf8').trim();
  } catch (error) {
    console.error('Failed to read current session:', error);
    return null;
  }
}

/**
 * Write the current session ID to workspace file
 */
export function writeCurrentSessionId(
  sessionId: string,
  projectPath?: string
): void {
  const currentSessionFile = projectPath
    ? getWorkspaceCurrentSessionFile(projectPath)
    : getCurrentSessionFile();
  const dir = dirname(currentSessionFile);

  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  writeFileSync(currentSessionFile, sessionId, 'utf8');
}

/**
 * Get the session directory path for a given session ID and project path
 */
export function getSessionDir(
  sessionId: string,
  projectPath?: string
): string {
  const sessionsDir = projectPath
    ? getWorkspaceSessionsDir(projectPath)
    : getSessionsDir();
  return join(sessionsDir, sessionId);
}

/**
 * Get all session directories for a project (or all if no projectPath)
 */
export async function listSessionDirs(
  projectPath?: string
): Promise<string[]> {
  const sessionsDir = projectPath
    ? getWorkspaceSessionsDir(projectPath)
    : getSessionsDir();
  if (!existsSync(sessionsDir)) {
    return [];
  }

  try {
    const entries = statSync(sessionsDir);
    if (!entries.isDirectory()) {
      return [];
    }

    // Try reading as a file first (legacy format)
    try {
      return readFileSync(sessionsDir, 'utf8')
        .split('\n')
        .filter((line) => line.trim().length > 0);
    } catch {
      // Fallback: read directory entries
      const fs = await import('fs');
      return fs
        .readdirSync(sessionsDir, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);
    }
  } catch {
    return [];
  }
}

/**
 * Create a new session directory structure
 */
export function createSessionDirectory(
  sessionId: string,
  projectPath?: string
): SessionDirectories {
  const sessionDir = getSessionDir(sessionId, projectPath);
  const progressDir = join(sessionDir, 'progress');
  const checkpointsDir = join(sessionDir, 'checkpoints');
  const docsDir = join(sessionDir, 'docs');

  // Create all directories
  mkdirSync(sessionDir, { recursive: true });
  mkdirSync(progressDir, { recursive: true });
  mkdirSync(checkpointsDir, { recursive: true });
  mkdirSync(docsDir, { recursive: true });

  return {
    root: sessionDir,
    progress: progressDir,
    checkpoints: checkpointsDir,
    docs: docsDir,
  };
}

/**
 * Check if a session directory exists for a project
 */
export function sessionExists(
  sessionId: string,
  projectPath?: string
): boolean {
  return existsSync(getSessionDir(sessionId, projectPath));
}

/**
 * Get session state from session directory
 */
export function getSessionState(
  sessionId: string,
  projectPath?: string
): SessionState | null {
  const sessionDir = getSessionDir(sessionId, projectPath);
  const stateFile = join(sessionDir, 'session-state.json');

  if (!existsSync(stateFile)) {
    return null;
  }

  try {
    const content = readFileSync(stateFile, 'utf8');
    return JSON.parse(content) as SessionState;
  } catch (error) {
    console.error('Failed to read session state:', error);
    return null;
  }
}

/**
 * Write session state to session directory
 */
export function writeSessionState(
  sessionId: string,
  state: SessionState,
  projectPath?: string
): void {
  const sessionDir = getSessionDir(sessionId, projectPath);
  const stateFile = join(sessionDir, 'session-state.json');

  writeFileSync(stateFile, JSON.stringify(state, null, 2), 'utf8');
}

/**
 * Archive a session
 */
export async function archiveSession(
  sessionId: string,
  projectPath?: string
): Promise<boolean> {
  const sessionDir = getSessionDir(sessionId, projectPath);
  const archivedDir = getArchivedSessionsDir();
  const archivedSessionDir = join(archivedDir, sessionId);

  if (!existsSync(sessionDir)) {
    return false;
  }

  // Create archived directory if needed
  mkdirSync(archivedDir, { recursive: true });

  // Move session directory to archived
  try {
    const { rename, cpSync, rmSync } = await import('fs');
    rename(sessionDir, archivedSessionDir, (err) => {
      if (err) {
        // Fall back to copy+delete
        console.warn('Rename failed, using copy+delete fallback');
        // Use cpSync for synchronous copy
        cpSync(sessionDir, archivedSessionDir, { recursive: true });
        rmSync(sessionDir, { recursive: true, force: true });
      }
    });
    return true;
  } catch (error) {
    console.error('Failed to archive session:', error);
    return false;
  }
}

/**
 * Delete a session directory
 */
export async function deleteSession(
  sessionId: string,
  projectPath?: string
): Promise<boolean> {
  const sessionDir = getSessionDir(sessionId, projectPath);

  if (!existsSync(sessionDir)) {
    return false;
  }

  try {
    const { rmSync } = await import('fs');
    rmSync(sessionDir, { recursive: true, force: true });
    return true;
  } catch (error) {
    console.error('Failed to delete session:', error);
    return false;
  }
}

/**
 * Initialize or retrieve the current session.
 * Each project folder gets its own isolated session space.
 *
 * @param projectPath - Project path to associate with this session (uses workspace isolation)
 * @param mission - Optional mission description for the session
 * @param forceNew - When true, ALWAYS creates a new session and archives the previous one
 */
export async function initializeSession(
  projectPath: string = ORCHESTRATOR_DIR,
  mission?: string,
  forceNew: boolean = false
): Promise<SessionState> {
  const existingSessionId = readCurrentSessionId(projectPath);

  // If forceNew and there's an existing session, archive it first
  if (forceNew && existingSessionId && sessionExists(existingSessionId, projectPath)) {
    const existingState = getSessionState(existingSessionId, projectPath);
    if (existingState) {
      existingState.active = false;
      writeSessionState(existingSessionId, existingState, projectPath);
    }
    await archiveSession(existingSessionId, projectPath);
    console.warn(
      `Archived previous session: ${existingSessionId} (mission: ${existingState?.mission ?? 'unknown'})`
    );
  }

  // Create new session if: forceNew, or no existing session, or existing is invalid
  if (forceNew || !existingSessionId || !sessionExists(existingSessionId, projectPath)) {
    const sessionId = generateSessionId();
    const sessionDirs = createSessionDirectory(sessionId, projectPath);

    const state: SessionState = {
      sessionId,
      createdAt: new Date().toISOString(),
      active: true,
      projectPath,
      mission,
    };

    writeSessionState(sessionId, state, projectPath);
    writeCurrentSessionId(sessionId, projectPath);

    console.warn(`Created new session: ${sessionId}`);
    console.warn(`Session directory: ${sessionDirs.root}`);
    console.warn(`Workspace directory: ${getWorkspaceDir(projectPath)}`);

    return state;
  }

  // Reuse existing session (only when forceNew is false)
  const state = getSessionState(existingSessionId, projectPath);
  if (!state) {
    throw new Error(`Session ${existingSessionId} has no state file`);
  }

  return state;
}

/**
 * Get the session-aware path for a file
 * If file exists in session directory, return that; otherwise fall back to root
 */
export function getSessionAwarePath(
  sessionId: string,
  filePath: string,
  projectPath?: string
): string {
  const sessionDir = getSessionDir(sessionId, projectPath);
  const sessionFilePath = join(sessionDir, filePath);

  // Check if file exists in session directory
  if (existsSync(sessionFilePath)) {
    return sessionFilePath;
  }

  // Fall back to root orchestrator directory
  const rootFilePath = join(ORCHESTRATOR_DIR, '.qwen-orchestrator', filePath);
  if (existsSync(rootFilePath)) {
    return rootFilePath;
  }

  // Return session path as primary (file will be created there)
  return sessionFilePath;
}

/**
 * Get all session files for a given session and project
 */
export async function listSessionFiles(
  sessionId: string,
  projectPath?: string
): Promise<string[]> {
  const sessionDir = getSessionDir(sessionId, projectPath);
  if (!existsSync(sessionDir)) {
    return [];
  }

  const files: string[] = [];
  const queue = [sessionDir];

  while (queue.length > 0) {
    const currentDir = queue.shift()!;
    const fs = await import('fs');
    const dirents = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const dirent of dirents) {
      const path = join(currentDir, dirent.name);
      if (dirent.isDirectory()) {
        queue.push(path);
      } else if (dirent.isFile()) {
        files.push(path);
      }
    }
  }

  return files;
}

/**
 * Check if session isolation is properly configured for a project
 */
export function checkSessionIsolation(
  projectPath?: string
): {
  valid: boolean;
  issues: string[];
} {
  const issues: string[] = [];
  const sessionsDir = projectPath
    ? getWorkspaceSessionsDir(projectPath)
    : getSessionsDir();

  // Check if sessions directory exists
  if (!existsSync(sessionsDir)) {
    issues.push('Sessions directory does not exist');
  }

  // Check if current-session file exists
  if (!existsSync(projectPath ? getWorkspaceCurrentSessionFile(projectPath) : getCurrentSessionFile())) {
    issues.push('Current session file does not exist');
  }

  return {
    valid: issues.length === 0,
    issues,
  };
}
