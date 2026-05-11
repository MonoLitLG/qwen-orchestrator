---
name: load-testing
description: Use when designing and executing load testing, stress testing, endurance testing, spike testing, and performance testing. Includes test planning, test script creation, result analysis, and performance optimization. Based on CPE certification and performance testing best practices.
license: MIT
---

# Load Testing Skill — Performance Engineer

## Overview

This skill provides comprehensive guidance for load testing and performance testing. It covers test planning, test script creation, result analysis, and performance optimization following CPE certification and performance testing best practices.

## When to Use

**Use this skill when:**

- Designing load testing strategies
- Creating load test scripts
- Executing load tests
- Analyzing load test results
- Identifying performance bottlenecks
- Conducting stress testing
- Performing endurance testing
- Executing spike testing
- Creating performance baselines
- Analyzing system capacity
- Conducting scalability testing
- Performing regression testing
- Creating performance reports
- Analyzing test metrics
- Identifying memory leaks
- Analyzing CPU and memory usage
- Conducting database load testing
- Creating performance test documentation
- Analyzing network performance
- Conducting API load testing
- Creating performance test plans
- Analyzing test coverage
- Creating performance optimization recommendations

**Do NOT use this skill when:**

- Writing application business logic (use domain-driven skill)
- Designing database schemas (use database-design skill)
- Writing API endpoint specifications (use api-design skill)
- Performing security audits (use security-auditor skill)
- Writing SQL queries (use sql-best-practices skill)
- Designing multi-page website layouts (use design-system skill)
- Analyzing deployment configurations (use deployment skill)
- Writing documentation (use documentation-best-practices skill)

## Load Testing Types

### Test Types Overview

```
┌─────────────────────────────────────────────────────────────┐
│              Load Testing Types                             │
├─────────────────────────────────────────────────────────────┤
│  Load Testing:                                              │
│  - Simulate expected load                                   │
│  - Validate performance under normal conditions             │
│  - Duration: 30-60 minutes                                  │
│  - Target: 100% of expected traffic                         │
│                                                              │
│  Stress Testing:                                            │
│  - Exceed system capacity                                   │
│  - Identify breaking point                                  │
│  - Duration: Until failure                                  │
│  - Target: Beyond capacity limits                           │
│                                                              │
│  Endurance Testing:                                         │
│  - Run extended duration                                    │
│  - Identify memory leaks                                    │
│  - Duration: 6-24 hours                                     │
│  - Target: Sustained normal load                            │
│                                                              │
│  Spike Testing:                                             │
│  - Sudden traffic increase                                  │
│  - Validate auto-scaling                                    │
│  - Duration: Short bursts                                   │
│  - Target: 200-500% of normal load                          │
│                                                              │
│  Volume Testing:                                            │
│  - Large data volumes                                       │
│  - Validate data handling                                   │
│  - Duration: Varies                                         │
│  - Target: Maximum data capacity                            │
└─────────────────────────────────────────────────────────────┘
```

### Test Metrics

```
┌─────────────────────────────────────────────────────────────┐
│              Test Metrics                                   │
├─────────────────────────────────────────────────────────────┤
│  Response Time:                                             │
│  - Average response time                                    │
│  - 95th percentile response time                            │
│  - 99th percentile response time                            │
│  - Minimum and maximum response times                       │
│                                                              │
│  Throughput:                                                │
│  - Requests per second                                      │
│  - Transactions per second                                  │
│  - Bytes per second                                         │
│                                                              │
│  Error Rate:                                                │
│  - HTTP error rate                                          │
│  - Application error rate                                   │
│  - Database error rate                                      │
│                                                              │
│  Resource Utilization:                                      │
│  - CPU utilization                                          │
│  - Memory utilization                                       │
│  - Disk I/O                                                 │
│  - Network I/O                                              │
│                                                              │
│  Concurrency:                                               │
│  - Active users                                             │
│  - Concurrent sessions                                      │
│  - Connection pool usage                                    │
└─────────────────────────────────────────────────────────────┘
```

## Load Testing Tools

### Popular Tools

```
┌─────────────────────────────────────────────────────────────┐
│              Load Testing Tools                             │
├─────────────────────────────────────────────────────────────┤
│  k6:                                                        │
│  - Modern, developer-friendly                               │
│  - Scripting with JavaScript                                │
│  - CI/CD integration                                        │
│  - Cloud and on-premise                                     │
│                                                              │
│  JMeter:                                                    │
│  - Mature and widely used                                   │
│  - GUI and CLI interfaces                                   │
│  - Extensive plugin ecosystem                               │
│  - Distributed testing                                      │
│                                                              │
│  Locust:                                                    │
│  - Python-based scripting                                   │
│  - Web-based UI                                             │
│  - Distributed testing                                      │
│  - Real-time monitoring                                     │
│                                                              │
│  Gatling:                                                   │
│  - Scala-based scripting                                    │
│  - High performance                                         │
│  - Beautiful reports                                        │
│  - CI/CD integration                                        │
│                                                              │
│  LoadRunner:                                                │
│  - Enterprise-grade                                         │
│  - Comprehensive features                                   │
│  - High cost                                                │
│  - Professional support                                     │
└─────────────────────────────────────────────────────────────┘
```

### Tool Comparison

```
┌─────────────────────────────────────────────────────────────┐
│              Tool Comparison                                │
├─────────────────────────────────────────────────────────────┤
│  Feature           │ k6   │ JMeter │ Locust │ Gatling │ LR │
│  ──────────────────┼──────┼───────┼────────┼─────────┼─────│
│  Scripting         │ JS   │ XML   │ Python │ Scala   │ GUI │
│  Learning Curve    │ Low  │ Med   │ Low    │ Med     │ High│
│  Performance       │ High │ High  │ High   │ High    │ High│
│  Reporting         │ Good │ Good  │ Good   │ Excellent│ Med│
│  Cost              │ Free │ Free  │ Free   │ Free    │ High│
│  CI/CD Integration │ Good │ Good  │ Good   │ Good    │ Med │
└─────────────────────────────────────────────────────────────┘
```

## Test Planning

### Test Plan Template

```
┌─────────────────────────────────────────────────────────────┐
│              Test Plan Template                             │
├─────────────────────────────────────────────────────────────┤
│  Test Objective:                                            │
│  [Clear objective of the test]                              │
│                                                              │
│  Test Scope:                                                │
│  - Included endpoints                                       │
│  - Excluded endpoints                                       │
│  - Test data requirements                                   │
│                                                              │
│  Test Scenarios:                                            │
│  1. [Scenario 1]                                            │
│  2. [Scenario 2]                                            │
│  3. [Scenario 3]                                            │
│                                                              │
│  Test Parameters:                                           │
│  - Number of users                                          │
│  - Ramp-up time                                             │
│  - Test duration                                            │
│  - Think time                                               │
│  - Iterations                                               │
│                                                              │
│  Success Criteria:                                          │
│  - Response time < 2 seconds (95th percentile)              │
│  - Error rate < 1%                                          │
│  - CPU utilization < 80%                                    │
│  - Memory utilization < 80%                                 │
│                                                              │
│  Environment:                                               │
│  - Test environment details                                 │
│  - Data requirements                                        │
│  - Dependencies                                             │
└─────────────────────────────────────────────────────────────┘
```

### Test Execution Checklist

```
┌─────────────────────────────────────────────────────────────┐
│              Test Execution Checklist                       │
├─────────────────────────────────────────────────────────────┤
│  Pre-Test:                                                  │
│  [ ] Test environment ready                                 │
│  [ ] Test data prepared                                     │
│  [ ] Monitoring tools configured                            │
│  [ ] Baseline metrics collected                             │
│  [ ] Test script validated                                  │
│                                                              │
│  During Test:                                               │
│  [ ] Monitor system resources                               │
│  [ ] Monitor application logs                               │
│  [ ] Monitor database performance                           │
│  [ ] Record test results                                    │
│  [ ] Note any anomalies                                     │
│                                                              │
│  Post-Test:                                                 │
│  [ ] Results analyzed                                       │
│  [ ] Metrics compared to baseline                           │
│  [ ] Issues documented                                      │
│  [ ] Recommendations created                                │
│  [ ] Report finalized                                       │
└─────────────────────────────────────────────────────────────┘
```

## Result Analysis

### Analysis Framework

```
┌─────────────────────────────────────────────────────────────┐
│              Result Analysis Framework                      │
├─────────────────────────────────────────────────────────────┤
│  1. Response Time Analysis                                  │
│     - Identify slow endpoints                               │
│     - Analyze response time distribution                    │
│     - Compare to SLAs                                       │
│                                                              │
│  2. Throughput Analysis                                     │
│     - Identify throughput limits                            │
│     - Analyze throughput trends                             │
│     - Compare to capacity                                   │
│                                                              │
│  3. Error Analysis                                          │
│     - Identify error patterns                               │
│     - Analyze error root cause                              │
│     - Determine error impact                                │
│                                                              │
│  4. Resource Analysis                                       │
│     - Identify resource bottlenecks                         │
│     - Analyze resource utilization trends                   │
│     - Determine resource limits                             │
│                                                              │
│  5. Scalability Analysis                                    │
│     - Identify scaling limits                               │
│     - Analyze scaling behavior                              │
│     - Determine scaling recommendations                     │
└─────────────────────────────────────────────────────────────┘
```

## Real-World Impact

**Before this skill:**

- No performance testing
- Unexpected performance issues
- Poor user experience
- System crashes
- No capacity planning

**After this skill:**

- Comprehensive performance testing
- Predictable performance
- Excellent user experience
- Stable systems
- Data-driven capacity planning

## Cross-References

- **`performance`** - For performance optimization
- **`devops-pipeline`** - For performance CI/CD gates
- **`testing-strategy`** - For test strategy

## References

- [Load Testing Best Practices](https://www.blazemeter.com/)
- [k6 Documentation](https://k6.io/docs/)
- [JMeter Documentation](https://jmeter.apache.org/)
- [CPE Certification](https://www.cpe.com/)
- [Performance Testing Handbook](https://www.amazon.com/)
