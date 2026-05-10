# Offline-First Development Skill

**Version:** 1.0.0
**Status:** Active
**License:** MIT

## Overview

This skill provides comprehensive guidance for implementing offline-first applications. It covers local storage management, data synchronization, conflict resolution, offline UI patterns, and offline state management following offline-first development best practices.

## When to Use

**Use this skill when:**
- Implementing offline-first applications
- Managing local storage (IndexedDB, localStorage)
- Implementing data synchronization
- Handling synchronization conflicts
- Creating offline UI patterns
- Implementing service workers
- Managing offline state
- Creating offline data models
- Implementing offline-first APIs
- Handling network failures
- Creating offline indicators
- Implementing queue for offline actions
- Managing offline data validation
- Creating offline sync strategies
- Implementing conflict resolution
- Managing offline data consistency
- Creating offline-first UX patterns
- Implementing background sync
- Managing offline data caching
- Creating offline-first error handling
- Implementing offline data encryption
- Managing offline storage limits
- Creating offline-first testing

## What It Covers

### Offline-First Principles
- **Always Available** - Application works offline
- **Data Persistence** - Local storage
- **Automatic Sync** - Transparent synchronization
- **Conflict Resolution** - Handle offline changes
- **Offline UI** - Clear status indicators

### Local Storage
- **localStorage** - Key-value storage
- **sessionStorage** - Session-scoped storage
- **IndexedDB** - Database-style storage
- **Cache API** - HTTP response caching

### Sync Strategies
- **Last Write Wins** - Timestamp-based
- **Operational Transform** - Collaborative editing
- **CRDT** - Automatic conflict resolution
- **Merge Conflicts** - User-assisted
- **Queue-based Sync** - Action-based

## Quick Start

```bash
# Read the skill
cat SKILL.md

# Review examples
cat examples/*.md

# Check references
cat references/*.md
```

## Examples

See `examples/` for:
- Offline sync implementations
- Service worker examples
- Offline UI patterns
- Conflict resolution examples

## References

- [Offline-First by Adam Silver](https://abookapart.com/products/offline-first)
- [Service Worker API](https://developer.mozilla.org/)
- [IndexedDB API](https://developer.mozilla.org/)
- [Cache API](https://developer.mozilla.org/)
- [Offline-First Development](https://offlinefirst.org/)

## Related Skills

- **`mobile-performance`** - For mobile optimization
- **`testing-strategy`** - For offline testing
- **`api-design`** - For offline-first APIs

## Contributing

Contributions are welcome! Please read `CONTRIBUTING.md` for details.

## License

MIT - See [LICENSE](LICENSE) for details.
