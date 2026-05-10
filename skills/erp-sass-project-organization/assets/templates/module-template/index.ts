/**
 * Module Name Entry Point
 *
 * @description
 * This file exports all public APIs for the module.
 * Follows the barrel export pattern.
 */

// Domain layer exports
export * from './domain/entities/index.js';
export * from './domain/value-objects/index.js';
export * from './domain/repositories/index.js';
export * from './domain/services/index.js';

// Application layer exports
export * from './application/use-cases/index.js';
export * from './application/dtos/index.js';

// Infrastructure layer exports
export * from './infrastructure/adapters/index.js';
export * from './infrastructure/persistence/index.js';

// Public types
export type { ModuleConfig } from './config/index.js';
