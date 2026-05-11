---
name: threat-modeling
description: Use when performing threat modeling, identifying security threats, analyzing attack vectors, creating threat models, and implementing threat mitigation strategies. Includes STRIDE, DREAD, attack trees, and threat modeling frameworks. Based on CISSP, CSSLP certifications and OWASP threat modeling standards.
license: MIT
---

# Threat Modeling Skill — Cybersecurity Engineer

## Overview

This skill provides comprehensive guidance for threat modeling and security analysis. It covers threat identification, attack vector analysis, threat model creation, and threat mitigation following CISSP and CSSLP certifications and OWASP threat modeling standards.

## When to Use

**Use this skill when:**

- Performing threat modeling for systems
- Identifying security threats and vulnerabilities
- Analyzing attack vectors and attack paths
- Creating threat models for applications
- Implementing STRIDE threat modeling
- Using DREAD risk assessment
- Creating attack trees
- Performing threat modeling workshops
- Identifying security requirements
- Creating threat mitigation strategies
- Documenting threat models
- Performing threat modeling for APIs
- Creating threat models for microservices
- Performing threat modeling for cloud systems
- Identifying insider threats
- Analyzing supply chain threats
- Creating security requirements
- Performing threat modeling for mobile apps
- Identifying data flow threats
- Creating threat models for IoT systems
- Performing threat modeling for web applications
- Identifying authentication threats
- Analyzing authorization threats
- Creating threat models for databases

**Do NOT use this skill when:**

- Writing application business logic (use domain-driven skill)
- Designing database schemas (use database-design skill)
- Writing API endpoint specifications (use api-design skill)
- Performing general code review (use code-review skill)
- Writing SQL queries (use sql-best-practices skill)
- Designing multi-page website layouts (use design-system skill)
- Analyzing deployment configurations (use deployment skill)
- Writing documentation (use documentation-best-practices skill)

## Threat Modeling Frameworks

### STRIDE Model

```
┌─────────────────────────────────────────────────────────────┐
│              STRIDE Threat Modeling                         │
├─────────────────────────────────────────────────────────────┤
│  S - Spoofing Identity:                                     │
│  - Impersonating users or systems                           │
│  - Attack examples: Credential theft, token theft           │
│  - Mitigations: Authentication, MFA, certificates           │
│                                                              │
│  T - Tampering with Data:                                   │
│  - Modifying data in transit or at rest                     │
│  - Attack examples: Data manipulation, code injection       │
│  - Mitigations: Integrity checks, digital signatures        │
│                                                              │
│  R - Repudiation:                                           │
│  - Actions cannot be traced to actor                        │
│  - Attack examples: Denying actions, log tampering          │
│  - Mitigations: Audit logging, non-repudiation              │
│                                                              │
│  I - Information Disclosure:                                │
│  - Unauthorized access to information                       │
│  - Attack examples: Data breaches, eavesdropping            │
│  - Mitigations: Encryption, access controls                 │
│                                                              │
│  D - Denial of Service:                                     │
│  - Service unavailable to legitimate users                  │
│  - Attack examples: DDoS, resource exhaustion               │
│  - Mitigations: Rate limiting, redundancy                   │
│                                                              │
│  E - Elevation of Privilege:                                │
│  - Gaining higher privileges than intended                  │
│  - Attack examples: Privilege escalation, code execution    │
│  - Mitigations: Least privilege, access controls            │
└─────────────────────────────────────────────────────────────┘
```

### DREAD Risk Assessment

```
┌─────────────────────────────────────────────────────────────┐
│              DREAD Risk Assessment                          │
├─────────────────────────────────────────────────────────────┤
│  D - Damage Potential:                                      │
│  - How much damage can this threat cause?                   │
│  - Scale: 1-10 (1=minor, 10=catastrophic)                   │
│                                                              │
│  R - Reproducibility:                                       │
│  - Can the attack be reproduced consistently?               │
│  - Scale: 1-10 (1=rare, 10=always)                          │
│                                                              │
│  E - Exploitability:                                        │
│  - How easy is it to exploit this threat?                   │
│  - Scale: 1-10 (1=difficult, 10=trivial)                    │
│                                                              │
│  A - Affected Users:                                        │
│  - How many users can be affected?                          │
│  - Scale: 1-10 (1=few, 10=all)                              │
│                                                              │
│  D - Discoverability:                                       │
│  - How easy is it to discover this vulnerability?           │
│  - Scale: 1-10 (1=hard, 10=obvious)                         │
│                                                              │
│  Risk Score = (D + R + E + A + D) / 5                       │
│  - Critical: 8.0+                                           │
│  - High: 6.0-7.9                                            │
│  - Medium: 4.0-5.9                                          │
│  - Low: 0.0-3.9                                             │
└─────────────────────────────────────────────────────────────┘
```

## Threat Modeling Process

### Threat Modeling Workflow

```
┌─────────────────────────────────────────────────────────────┐
│              Threat Modeling Process                        │
├─────────────────────────────────────────────────────────────┤
│  1. Define Scope                                            │
│     - System boundaries                                     │
│  - Assets to protect                                       │
│  - Threat model audience                                   │
│                                                              │
│  2. Identify Assets                                         │
│     - Data in transit                                       │
│  - Data at rest                                            │
│  - Compute resources                                       │
│  - Network boundaries                                      │
│                                                              │
│  3. Identify Threats                                        │
│     - Use STRIDE framework                                  │
│  - Analyze data flow diagrams                              │
│  - Identify attack vectors                                 │
│                                                              │
│  4. Analyze Threats                                         │
│     - Use DREAD assessment                                  │
│  - Prioritize threats                                      │
│  - Document threat details                                 │
│                                                              │
│  5. Mitigate Threats                                        │
│     - Implement security controls                           │
│  - Update threat model                                     │
│  - Document mitigations                                    │
│                                                              │
│  6. Validate                                                │
│     - Review threat model                                   │
│  - Test mitigations                                        │
│  - Update documentation                                    │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│              Data Flow Diagram                              │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐       ┌─────────────┐       ┌───────────┐ │
│  │   Actor     │──────>│   System    │──────>│  Database │ │
│  │  (User)     │       │   (App)     │       │   (DB)    │ │
│  └─────────────┘       └─────────────┘       └───────────┘ │
│         │                      │                     │      │
│         │                      │                     │      │
│         ▼                      ▼                     ▼      │
│  ┌─────────────┐       ┌─────────────┐       ┌───────────┐ │
│  │   External  │       │   Internal  │       │  Storage  │ │
│  │   Services  │       │   Services  │       │   (Data)  │ │
│  └─────────────┘       └─────────────┘       └───────────┘ │
│                                                              │
│  Threats:                                                   │
│  - Spoofing (Actor identity)                                │
│  - Tampering (Data in transit)                              │
│  - Repudiation (Actions not logged)                         │
│  - Information Disclosure (Data at rest)                    │
└─────────────────────────────────────────────────────────────┘
```

## Attack Trees

### Attack Tree Structure

```
┌─────────────────────────────────────────────────────────────┐
│              Attack Tree                                    │
├─────────────────────────────────────────────────────────────┤
│  Root: Gain Admin Access                                    │
│  └── OR:                                                    │
│      ├── AND: Steal Admin Credentials                       │
│      │   ├── Phishing attack                                │
│      │   ├── Keylogger infection                            │
│      │   └── Password reuse                                 │
│      │                                                       │
│      ├── AND: Exploit Vulnerability                         │
│      │   ├── SQL injection                                  │
│      │   ├── XSS attack                                     │
│      │   └── CSRF attack                                    │
│      │                                                       │
│      └── AND: Social Engineering                            │
│          ├── Impersonate admin                              │
│          ├── Bypass MFA                                     │
│          └── Social engineering                             │
│                                                              │
│  Mitigations:                                               │
│  - Multi-factor authentication                              │
│  - Input validation                                         │
│  - Security awareness training                              │
│  - Regular vulnerability scanning                           │
└─────────────────────────────────────────────────────────────┘
```

## Threat Modeling Tools

### Threat Modeling Tools

```
┌─────────────────────────────────────────────────────────────┐
│              Threat Modeling Tools                          │
├─────────────────────────────────────────────────────────────┤
│  OWASP Threat Dragon:                                       │
│  - Open-source threat modeling tool                         │
│  - Draw threat diagrams                                     │
│  - Generate threat lists                                    │
│  - Export threat models                                     │
│                                                              │
│  Microsoft Threat Modeling Tool:                            │
│  - STRIDE-based threat modeling                             │
│  - Template-based approach                                  │
│  - Integration with Azure DevOps                            │
│  - Threat library                                           │
│                                                              │
│  ThreatModeler:                                             │
│  - Cloud-based threat modeling                              │
│  - Automated threat generation                              │
│  - Integration with DevOps tools                            │
│  - Collaborative threat modeling                            │
│                                                              │
│  Custom Tools:                                              │
│  - Excel/Google Sheets templates                            │
│  - Whiteboard sessions                                      │
│  - Documentation-based approach                             │
└─────────────────────────────────────────────────────────────┘
```

## Real-World Impact

**Before this skill:**

- No threat modeling
- Security vulnerabilities discovered late
- Reactive security approach
- Incomplete security requirements
- Security gaps in design

**After this skill:**

- Proactive threat identification
- Security integrated in design
- Threat-informed decisions
- Complete security requirements
- Proven security controls

## Cross-References

- **`security-auditor`** - For security audits
- **`security-code-review`** - For code security review
- **`devops-pipeline`** - For security CI/CD gates

## References

- [OWASP Threat Modeling](https://owasp.org/www-community/Threat_Modeling)
- [OWASP Threat Dragon](https://threatdragon.org/)
- [Microsoft Threat Modeling Tool](https://www.microsoft.com/)
- [CISSP Certification](https://www.isc2.org/Certifications/CISSP)
- [CSSLP Certification](https://www.isc2.org/Certifications/CSSLP)
