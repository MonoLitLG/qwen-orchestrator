# Redis Caching Skill

Comprehensive guidance for implementing Redis caching strategies, data structure operations, session management, pub/sub messaging, and production best practices.

## Overview

This skill covers all aspects of Redis implementation including:

- **Data Structures**: Strings, Hashes, Lists, Sets, Sorted Sets, Streams, Bitmaps, HyperLogLogs, Geospatial
- **Caching Patterns**: Cache-Aside, Write-Through, Write-Behind, Write-Around
- **Advanced Features**: Lua Scripting, Transactions, Pipelines, Pub/Sub
- **Infrastructure**: Clustering, Sentinel, Replication, Persistence (RDB/AOF)
- **Operations**: Memory Management, Eviction Policies, TTL Management, Connection Pooling
- **Client Libraries**: ioredis, node-redis, redis-py, Lettuce, Jedis, Redisson

## When to Use

Use this skill when working with Redis for:
- Implementing caching layers
- Managing distributed sessions
- Building real-time messaging systems
- Creating rate limiters
- Implementing leaderboards and rankings
- Building message queues with Streams
- Setting up Redis clustering or Sentinel
- Optimizing Redis memory usage
- Writing Lua scripts for atomic operations

## Quick Reference

### Data Structure Selection Guide

| Need | Use |
|------|-----|
| Simple key-value cache | **String** |
| Object storage | **Hash** |
| Queue or stack | **List** |
| Unique members, tags | **Set** |
| Rankings, leaderboards | **Sorted Set** |
| Message queue, event sourcing | **Stream** |
| Feature flags, presence tracking | **Bitmap** |
| Unique counting (approximate) | **HyperLogLog** |
| Location-based queries | **Geospatial** |

### Caching Pattern Selection

| Scenario | Pattern |
|----------|---------|
| Most common, simple | **Cache-Aside** |
| Data consistency critical | **Write-Through** |
| Write performance critical | **Write-Behind** |
| Reduce cache pollution | **Write-Around** |

### Client Library Selection

| Language | Recommended |
|----------|-------------|
| Node.js | **ioredis** |
| Python | **redis-py** |
| Java | **Lettuce** |
| Go | **go-redis** |
| Ruby | **redis-rb** |

## License

MIT
