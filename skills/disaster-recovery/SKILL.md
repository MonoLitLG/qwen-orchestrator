---
name: disaster-recovery
description: Use when designing disaster recovery plans, implementing backup strategies, creating restore procedures, setting up failover systems, and defining RTO/RPO targets. Includes DR testing, recovery sites, and disaster recovery best practices. Based on CISSP, CDRP certifications.
license: MIT
---

# Disaster Recovery Skill — DevOps Engineer

## Overview

This skill provides comprehensive guidance for designing and implementing disaster recovery plans. It covers backup strategies, restore procedures, failover systems, RTO/RPO targets, DR testing, and disaster recovery best practices following CISSP and CDRP certifications.

## When to Use

**Use this skill when:**

- Designing disaster recovery plans
- Implementing backup strategies
- Creating restore procedures
- Setting up failover systems
- Defining RTO and RPO targets
- Testing disaster recovery plans
- Implementing backup automation
- Creating DR documentation
- Setting up DR monitoring
- Implementing backup encryption
- Creating backup retention policies
- Setting up DR testing schedules
- Implementing DR failover procedures
- Creating DR runbooks
- Setting up DR alerting
- Implementing backup verification
- Creating DR training materials
- Implementing DR compliance
- Setting up DR governance
- Creating DR cost models
- Implementing DR optimization
- Setting up DR escalation procedures
- Implementing DR communication plans

**Do NOT use this skill when:**

- Writing application business logic (use domain-driven skill)
- Designing database schemas (use database-design skill)
- Writing API endpoint specifications (use api-design skill)
- Performing security audits (use security-auditor skill)
- Writing SQL queries (use sql-best-practices skill)
- Designing multi-page website layouts (use design-system skill)
- Analyzing deployment configurations (use deployment skill)
- Writing documentation (use documentation-best-practices skill)

## Disaster Recovery Planning

### DR Planning Framework

```
┌─────────────────────────────────────────────────────────────┐
│              DR Planning Framework                          │
├─────────────────────────────────────────────────────────────┤
│  1. Business Impact Analysis (BIA)                          │
│     - Identify critical systems                             │
│     - Determine RTO and RPO                                 │
│     - Assess financial impact                               │
│                                                              │
│  2. Risk Assessment                                         │
│     - Identify threats                                      │
│     - Assess vulnerabilities                                │
│     - Determine risk level                                  │
│                                                              │
│  3. Strategy Development                                    │
│     - Choose DR strategy                                    │
│     - Select recovery sites                                 │
│     - Define backup strategy                                │
│                                                              │
│  4. Plan Development                                        │
│     - Create DR procedures                                  │
│     - Document roles and responsibilities                   │
│     - Develop communication plan                            │
│                                                              │
│  5. Plan Testing and Maintenance                            │
│     - Conduct DR tests                                      │
│     - Review and update plan                                │
│     - Train personnel                                       │
└─────────────────────────────────────────────────────────────┘
```

### RTO and RPO Targets

```
┌─────────────────────────────────────────────────────────────┐
│              RTO and RPO Targets                            │
├─────────────────────────────────────────────────────────────┤
│  RTO (Recovery Time Objective):                             │
│  - Time to restore service after disaster                   │
│  - Examples: 1 hour, 4 hours, 24 hours                      │
│  - Impacts: Backup frequency, DR strategy                   │
│                                                              │
│  RPO (Recovery Point Objective):                            │
│  - Maximum acceptable data loss                             │
│  - Examples: 0 hours (real-time), 1 hour, 24 hours          │
│  - Impacts: Backup frequency, data replication              │
│                                                              │
│  Example Matrix:                                            │
│  ┌─────────────┬─────────────┬─────────────┐               │
│  │ System      │ RTO         │ RPO         │               │
│  ├─────────────┼─────────────┼─────────────┤               │
│  │ Primary DB  │ 1 hour      │ 0 hours     │               │
│  │ Secondary DB│ 4 hours     │ 1 hour      │               │
│  │ Analytics   │ 24 hours    │ 24 hours    │               │
│  └─────────────┴─────────────┴─────────────┘               │
└─────────────────────────────────────────────────────────────┘
```

## Backup Strategies

### Backup Types

```
┌─────────────────────────────────────────────────────────────┐
│              Backup Types                                   │
├─────────────────────────────────────────────────────────────┤
│  Full Backup:                                               │
│  - Complete copy of all data                                │
│  - Longest to complete, easiest to restore                  │
│  - Storage: High, Frequency: Weekly                         │
│                                                              │
│  Incremental Backup:                                        │
│  - Only changed since last backup                           │
│  - Fastest to create, complex to restore                    │
│  - Storage: Low, Frequency: Daily                           │
│                                                              │
│  Differential Backup:                                       │
│  - Changed since last full backup                           │
│  - Faster restore than incremental                          │
│  - Storage: Medium, Frequency: Daily                        │
│                                                              │
│  Snapshot Backup:                                           │
│  - Point-in-time copy                                       │
│  - Fast, storage-efficient                                  │
│  - Storage: Medium, Frequency: Hourly                       │
└─────────────────────────────────────────────────────────────┘
```

### Backup Retention Policy

```
┌─────────────────────────────────────────────────────────────┐
│              Backup Retention Policy                        │
├─────────────────────────────────────────────────────────────┤
│  Hourly Backups: 7 days                                     │
│  Daily Backups: 30 days                                     │
│  Weekly Backups: 90 days                                    │
│  Monthly Backups: 1 year                                    │
│  Annual Backups: 7 years (compliance)                       │
│                                                              │
│  Retention Rules:                                           │
│  - Keep last 7 daily backups                                │
│  - Keep last 4 weekly backups                               │
│  - Keep last 12 monthly backups                             │
│  - Keep 1 annual backup for compliance                      │
│  - Encrypt backups at rest                                  │
│  - Test backup restoration monthly                          │
└─────────────────────────────────────────────────────────────┘
```

## Failover Strategies

### Failover Types

```
┌─────────────────────────────────────────────────────────────┐
│              Failover Strategies                            │
├─────────────────────────────────────────────────────────────┤
│  Hot Site:                                                  │
│  - Fully configured, ready to run                           │
│  - RTO: Minutes                                             │
│  - RPO: Near-zero                                           │
│  - Cost: High                                               │
│                                                              │
│  Warm Site:                                                 │
│  - Partially configured                                     │
│  - RTO: Hours                                               │
│  - RPO: Low                                                 │
│  - Cost: Medium                                             │
│                                                              │
│  Cold Site:                                                 │
│  - Basic infrastructure only                                │
│  - RTO: Days                                                │
│  - RPO: High                                                │
│  - Cost: Low                                                │
│                                                              │
│  Cloud-Based:                                               │
│  - AWS/Azure/GCP recovery                                   │
│  - RTO: Minutes to Hours                                    │
│  - RPO: Variable                                            │
│  - Cost: Variable                                           │
└─────────────────────────────────────────────────────────────┘
```

### Failover Process

```
┌─────────────────────────────────────────────────────────────┐
│              Failover Process                               │
├─────────────────────────────────────────────────────────────┤
│  1. Detection                                               │
│     - Monitor for failure                                   │
│     - Confirm failure                                       │
│     - Assess impact                                         │
│                                                              │
│  2. Initiation                                              │
│     - Activate DR team                                      │
│     - Notify stakeholders                                   │
│     - Begin failover procedures                             │
│                                                              │
│  3. Execution                                               │
│     - Failover primary services                             │
│     - Verify services running                               │
│     - Update DNS records                                    │
│     - Update load balancer                                  │
│                                                              │
│  4. Validation                                              │
│     - Test all services                                     │
│     - Verify data integrity                                 │
│     - Confirm RTO met                                       │
│     - Confirm RPO met                                       │
│                                                              │
│  5. Communication                                           │
│     - Update stakeholders                                   │
│     - Document incident                                     │
│     - Schedule recovery                                     │
└─────────────────────────────────────────────────────────────┘
```

## DR Testing

### Testing Types

```
┌─────────────────────────────────────────────────────────────┐
│              DR Testing Types                               │
├─────────────────────────────────────────────────────────────┤
│  Checklist Review:                                          │
│  - Review DR procedures                                     │
│  - Check team availability                                  │
│  - Verify contact lists                                    │
│  - Duration: 1-2 hours                                      │
│                                                              │
│  Tabletop Exercise:                                         │
│  - Simulate disaster scenario                               │
│  - Walk through procedures                                  │
│  - Identify gaps                                            │
│  - Duration: 2-4 hours                                      │
│                                                              │
│  Partial Failover Test:                                     │
│  - Failover non-critical systems                            │
│  - Test restore procedures                                  │
│  - Validate data integrity                                  │
│  - Duration: 4-8 hours                                      │
│                                                              │
│  Full Failover Test:                                        │
│  - Failover all systems                                     │
│  - Test all procedures                                      │
│  - Validate all data                                        │
│  - Duration: 1-2 days                                       │
│                                                              │
│  Parallel Test:                                             │
│  - Run both sites simultaneously                            │
│  - Validate data consistency                                │
│  - Test failback procedures                                 │
│  - Duration: 1-2 days                                       │
└─────────────────────────────────────────────────────────────┘
```

### Testing Schedule

```
┌─────────────────────────────────────────────────────────────┐
│              DR Testing Schedule                            │
├─────────────────────────────────────────────────────────────┤
│  Monthly:                                                   │
│  - Checklist review                                         │
│  - Backup verification                                      │
│                                                              │
│  Quarterly:                                                 │
│  - Tabletop exercise                                        │
│  - Partial failover test                                    │
│                                                              │
│  Semi-Annual:                                               │
│  - Full failover test (non-production)                      │
│  - Documentation review                                     │
│                                                              │
│  Annual:                                                    │
│  - Full failover test (production)                          │
│  - Comprehensive review                                     │
│  - Plan updates                                             │
└─────────────────────────────────────────────────────────────┘
```

## Real-World Impact

**Before this skill:**

- No disaster recovery plan
- Data loss during disasters
- Extended downtime
- No failover procedures
- Unprepared team

**After this skill:**

- Comprehensive DR plan
- Minimal data loss
- Fast recovery
- Automated failover
- Prepared team

## Cross-References

- **`devops-pipeline`** - For CI/CD and deployment strategies
- **`security-auditor`** - For DR security review
- **`database-security`** - For database backup security

## References

- [NIST SP 800-34 Rev. 1](https://csrc.nist.gov/publications/detail/sp/800-34/rev-1/final)
- [Disaster Recovery Institute](https://www.drii.org/)
- [CISSP Certification](https://www.isc2.org/Certifications/CISSP)
- [CDRP Certification](https://www.drii.org/certification/cdrp)
- [Disaster Recovery Best Practices](https://www.sans.org/)
