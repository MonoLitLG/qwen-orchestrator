---
name: release-workflow
description: Use when designing release workflows, implementing CI/CD pipelines, managing staging and production environments, creating rollback procedures, and ensuring release quality. Includes deployment strategies, release gates, and release management best practices. Based on Certified DevOps Engineer and CKA certifications.
license: MIT
---

# Release Workflow Skill — Release Manager

## Overview

This skill provides comprehensive guidance for designing and implementing release workflows. It covers CI/CD pipelines, staging and production environments, rollback procedures, release gates, and release management best practices following Certified DevOps Engineer and CKA certifications.

## When to Use

**Use this skill when:**
- Designing release workflows
- Implementing CI/CD pipelines
- Managing staging and production environments
- Creating rollback procedures
- Ensuring release quality
- Implementing deployment strategies
- Creating release gates
- Managing release documentation
- Implementing release monitoring
- Creating release communication plans
- Managing release dependencies
- Implementing release testing
- Creating release checklists
- Managing release approvals
- Implementing release automation
- Creating release rollback strategies
- Managing release versions
- Implementing release notifications
- Creating release reporting
- Managing release risks
- Implementing release compliance
- Creating release training materials
- Managing release coordination
- Implementing release optimization

**Do NOT use this skill when:**
- Writing application business logic (use domain-driven skill)
- Designing database schemas (use database-design skill)
- Writing API endpoint specifications (use api-design skill)
- Performing security audits (use security-auditor skill)
- Writing SQL queries (use sql-best-practices skill)
- Designing multi-page website layouts (use design-system skill)
- Analyzing deployment configurations (use deployment skill)
- Writing documentation (use documentation-best-practices skill)

## Release Workflow Stages

### Release Pipeline

```
┌─────────────────────────────────────────────────────────────┐
│              Release Pipeline                               │
├─────────────────────────────────────────────────────────────┤
│  1. Code Commit                                             │
│     └── Developer commits code to repository                │
│                                                              │
│  2. Automated Build                                         │
│     └── CI server builds the application                    │
│     └── Runs unit tests                                     │
│     └── Runs static analysis                                │
│                                                              │
│  3. Automated Testing                                       │
│     └── Runs integration tests                              │
│     └── Runs API tests                                      │
│     └── Runs UI tests (if applicable)                       │
│                                                              │
│  4. Quality Gates                                           │
│     └── Code coverage check                                 │
│     └── Security scan                                       │
│     └── Performance benchmark                               │
│                                                              │
│  5. Staging Deployment                                      │
│     └── Deploy to staging environment                       │
│     └── Run smoke tests                                     │
│     └── Run acceptance tests                                │
│                                                              │
│  6. Release Approval                                        │
│     └── Stakeholder approval                                │
│     └── Security review                                     │
│     └── Compliance check                                    │
│                                                              │
│  7. Production Deployment                                   │
│     └── Deploy to production                                │
│     └── Run smoke tests                                     │
│     └── Monitor deployment                                  │
│                                                              │
│  8. Post-Release Monitoring                                 │
│     └── Monitor application health                          │
│     └── Monitor performance                                 │
│     └── Monitor error rates                                 │
└─────────────────────────────────────────────────────────────┘
```

### Deployment Strategies

```
┌─────────────────────────────────────────────────────────────┐
│              Deployment Strategies                          │
├─────────────────────────────────────────────────────────────┤
│  Blue-Green Deployment:                                     │
│  - Two identical environments                               │
│  - Switch traffic between environments                      │
│  - Rollback by switching environments                       │
│  - Zero downtime                                            │
│                                                              │
│  Canary Deployment:                                         │
│  - Deploy to small subset of users                          │
│  - Gradually increase traffic                               │
│  - Monitor for issues                                       │
│  - Rollback if issues detected                              │
│                                                              │
│  Rolling Deployment:                                        │
│  - Deploy to servers one at a time                          │
│  - Monitor each deployment                                  │
│  - Continue if successful                                   │
│  - Rollback if issues detected                              │
│                                                              │
│  Recreate Deployment:                                       │
│  - Stop old version                                         │
│  - Start new version                                        │
│  - Simple but downtime                                      │
│  - Quick rollback                                           │
│                                                              │
│  Feature Flag Deployment:                                   │
│  - Deploy with feature flags                                │
│  - Enable feature for subset                                │
│  - Gradually enable for all                                 │
│  - Rollback by disabling flag                               │
└─────────────────────────────────────────────────────────────┘
```

## Release Gates

### Quality Gate Checklist

```
┌─────────────────────────────────────────────────────────────┐
│              Quality Gate Checklist                         │
├─────────────────────────────────────────────────────────────┤
│  Code Quality:                                              │
│  [ ] All unit tests pass                                    │
│  [ ] Code coverage >= 80%                                   │
│  [ ] No critical security vulnerabilities                   │
│  [ ] No code smells                                         │
│                                                              │
│  Performance:                                               │
│  [ ] Performance benchmarks met                             │
│  [ ] No performance regressions                             │
│  [ ] Response times acceptable                              │
│  [ ] Resource utilization acceptable                        │
│                                                              │
│  Security:                                                  │
│  [ ] Security scan passed                                   │
│  [ ] No critical vulnerabilities                            │
│  [ ] Dependencies audited                                   │
│  [ ] Secrets not in code                                    │
│                                                              │
│  Testing:                                                   │
│  [ ] Integration tests pass                                 │
│  [ ] API tests pass                                         │
│  [ ] UI tests pass (if applicable)                          │
│  [ ] Manual QA approved                                     │
│                                                              │
│  Documentation:                                             │
│  [ ] Documentation updated                                  │
│  [ ] API documentation updated                              │
│  [ ] Deployment documentation updated                       │
│  [ ] Runbooks updated                                       │
└─────────────────────────────────────────────────────────────┘
```

### Release Approval Process

```
┌─────────────────────────────────────────────────────────────┐
│              Release Approval Process                       │
├─────────────────────────────────────────────────────────────┤
│  1. Pre-Approval Checklist                                  │
│     - All quality gates passed                              │
│     - All tests passed                                      │
│     - Documentation updated                                 │
│     - Dependencies resolved                                 │
│                                                              │
│  2. Approval Workflow                                       │
│     - Technical lead approval                               │
│     - Product owner approval                                │
│     - Security team approval                                │
│     - Compliance approval (if needed)                       │
│                                                              │
│  3. Release Notes Review                                    │
│     - Changes documented                                    │
│     - Breaking changes identified                           │
│     - Migration steps documented                            │
│     - Known issues documented                               │
│                                                              │
│  4. Final Approval                                          │
│     - Release manager approval                              │
│     - Stakeholder approval                                  │
│     - Go/No-go decision                                     │
└─────────────────────────────────────────────────────────────┘
```

## Rollback Procedures

### Rollback Plan Template

```
┌─────────────────────────────────────────────────────────────┐
│              Rollback Plan Template                         │
├─────────────────────────────────────────────────────────────┤
│  Trigger Conditions:                                        │
│  - Critical bug in production                               │
│  - Performance degradation                                  │
│  - Security vulnerability                                   │
│  - Data corruption                                          │
│                                                              │
│  Rollback Steps:                                            │
│  1. Identify current version                                │
│  2. Stop new deployment                                     │
│  3. Restore previous version                                │
│  4. Verify rollback success                                 │
│  5. Notify stakeholders                                     │
│  6. Document incident                                       │
│                                                              │
│  Rollback Verification:                                     │
│  - Application starts successfully                          │
│  - Core functionality works                                 │
│  - Performance metrics normal                               │
│  - Error rates normal                                       │
│  - Database connectivity verified                           │
│                                                              │
│  Post-Rollback Actions:                                     │
│  - Investigate root cause                                   │
│  - Create incident ticket                                   │
│  - Update documentation                                     │
│  - Plan next release                                        │
└─────────────────────────────────────────────────────────────┘
```

### Rollback Automation

```yaml
# Example: GitLab CI/CD rollback
rollback:
  stage: rollback
  script:
    - kubectl rollout undo deployment/my-app
    - kubectl rollout status deployment/my-app
  only:
    - production
  when: manual
```

## Release Documentation

### Release Documentation Template

```
┌─────────────────────────────────────────────────────────────┐
│              Release Documentation Template                 │
├─────────────────────────────────────────────────────────────┤
│  Release Information:                                       │
│  - Release version: [Version]                               │
│  - Release date: [Date]                                     │
│  - Release manager: [Name]                                  │
│                                                              │
│  Changes:                                                   │
│  - New features                                             │
│  - Bug fixes                                                │
│  - Performance improvements                                 │
│  - Security updates                                         │
│                                                              │
│  Deployment Instructions:                                   │
│  - Pre-deployment steps                                     │
│  - Deployment commands                                      │
│  - Post-deployment steps                                    │
│  - Rollback procedures                                      │
│                                                              │
│  Verification Steps:                                        │
│  - Smoke tests                                              │
│  - Integration tests                                        │
│  - Performance tests                                        │
│  - Security tests                                           │
│                                                              │
│  Contact Information:                                       │
│  - Release manager: [Email, Phone]                          │
│  - Technical lead: [Email, Phone]                           │
│  - Support team: [Email, Phone]                             │
└─────────────────────────────────────────────────────────────┘
```

## Real-World Impact

**Before this skill:**
- Ad-hoc release processes
- Manual deployments
- No rollback procedures
- Release failures
- Poor communication

**After this skill:**
- Automated release workflows
- Reliable deployments
- Comprehensive rollback procedures
- Successful releases
- Clear communication

## Cross-References

- **`devops-pipeline`** - For CI/CD and deployment strategies
- **`security-auditor`** - For release security review
- **`disaster-recovery`** - For release recovery

## References

- [GitOps](https://opengitops.dev/)
- [CI/CD Best Practices](https://www.redhat.com/)
- [DevOps Certification](https://www.devopsinstitute.com/)
- [CKA Certification](https://www.cncf.io/certification/cka/)
- [Release Management Best Practices](https://www.sans.org/)
