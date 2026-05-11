---
name: database-security
description: Use when implementing database security controls, encryption, access control, audit logging, compliance, and database hardening. Includes data masking, row-level security, encryption at rest and in transit, and database security best practices. Based on CISSP, CDP certifications.
license: MIT
---

# Database Security Skill — Database Architect

## Overview

This skill provides comprehensive guidance for implementing database security controls. It covers encryption, access control, audit logging, compliance, data masking, row-level security, and database hardening following CISSP and CDP certifications.

## When to Use

**Use this skill when:**

- Implementing database encryption
- Setting up access control and RBAC
- Creating audit logging for databases
- Ensuring compliance (GDPR, HIPAA, PCI-DSS)
- Implementing data masking
- Setting up row-level security
- Encrypting data at rest
- Encrypting data in transit
- Implementing database hardening
- Setting up database monitoring
- Creating database security policies
- Implementing database firewalls
- Setting up database activity monitoring
- Implementing secret management
- Setting up database backups securely
- Implementing database patch management
- Creating database security documentation
- Implementing database vulnerability scanning
- Setting up database security alerts
- Implementing database access review
- Creating database security training
- Implementing database security testing
- Setting up database security governance
- Implementing database security architecture

**Do NOT use this skill when:**

- Writing application business logic (use domain-driven skill)
- Designing database schemas (use database-design skill)
- Writing API endpoint specifications (use api-design skill)
- Performing security audits (use security-auditor skill)
- Writing SQL queries (use sql-best-practices skill)
- Designing multi-page website layouts (use design-system skill)
- Analyzing deployment configurations (use deployment skill)
- Writing documentation (use documentation-best-practices skill)

## Database Security Controls

### Encryption

```
┌─────────────────────────────────────────────────────────────┐
│              Database Encryption                            │
├─────────────────────────────────────────────────────────────┤
│  Encryption at Rest:                                        │
│  - Database-level encryption                                │
│  - Table-level encryption                                   │
│  - Column-level encryption                                  │
│  - Filesystem-level encryption                              │
│                                                              │
│  Encryption in Transit:                                     │
│  - TLS for database connections                             │
│  - SSL certificates                                         │
│  - Certificate validation                                   │
│  - Certificate pinning                                      │
│                                                              │
│  Encryption Keys:                                           │
│  - Key management service                                   │
│  - Key rotation                                             │
│  - Key access control                                       │
│  - Key audit logging                                        │
└─────────────────────────────────────────────────────────────┘
```

### Access Control

```
┌─────────────────────────────────────────────────────────────┐
│              Access Control Models                          │
├─────────────────────────────────────────────────────────────┤
│  Role-Based Access Control (RBAC):                          │
│  - Roles: admin, developer, readonly, auditor              │
│  - Permissions: CRUD, DDL, DCL                              │
│  - Role hierarchy                                           │
│                                                              │
│  Row-Level Security (RLS):                                  │
│  - Per-row access control                                   │
│  - Tenant isolation                                         │
│  - Data segmentation                                        │
│                                                              │
│  Column-Level Security:                                     │
│  - Column masking                                           │
│  - Column encryption                                        │
│  - Column access control                                    │
└─────────────────────────────────────────────────────────────┘
```

## Audit Logging

### Audit Log Schema

```sql
-- Audit log table
CREATE TABLE audit_log (
    id SERIAL PRIMARY KEY,
    user_id UUID,
    action VARCHAR(50),
    table_name VARCHAR(100),
    record_id UUID,
    old_values JSONB,
    new_values JSONB,
    ip_address INET,
    user_agent TEXT,
    timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- Audit trigger function
CREATE OR REPLACE FUNCTION audit_trigger()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO audit_log (user_id, action, table_name, record_id, new_values)
        VALUES (current_user_id(), 'INSERT', TG_TABLE_NAME, NEW.id, to_jsonb(NEW));
        RETURN NEW;
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO audit_log (user_id, action, table_name, record_id, old_values, new_values)
        VALUES (current_user_id(), 'UPDATE', TG_TABLE_NAME, NEW.id, to_jsonb(OLD), to_jsonb(NEW));
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO audit_log (user_id, action, table_name, record_id, old_values)
        VALUES (current_user_id(), 'DELETE', TG_TABLE_NAME, OLD.id, to_jsonb(OLD));
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;
```

### Audit Log Retention

```
┌─────────────────────────────────────────────────────────────┐
│              Audit Log Retention                            │
├─────────────────────────────────────────────────────────────┤
│  Compliance Requirements:                                   │
│  - GDPR: 1 year                                             │
│  - HIPAA: 6 years                                           │
│  - PCI-DSS: 1 year                                          │
│  - SOX: 7 years                                             │
│                                                              │
│  Retention Strategy:                                        │
│  - Hot storage: 90 days (fast access)                      │
│  - Warm storage: 1 year (compressed)                       │
│  - Cold storage: 7 years (archived)                        │
│  - Destruction: Secure deletion with audit                 │
└─────────────────────────────────────────────────────────────┘
```

## Data Masking

### Dynamic Data Masking

```sql
-- Mask credit card numbers
ALTER TABLE customers
ALTER COLUMN credit_card ADD MASKED FUNCTION =
    'partial(4,"XXXX-XXXX-XXXX-",4)';

-- Mask email addresses
ALTER TABLE customers
ALTER COLUMN email ADD MASKED FUNCTION =
    'email()';

-- Mask phone numbers
ALTER TABLE customers
ALTER COLUMN phone ADD MASKED FUNCTION =
    'partial(3,"XXX-XXX-",4)';

-- Mask social security numbers
ALTER TABLE customers
ALTER COLUMN ssn ADD MASKED FUNCTION =
    'partial(0,"XXX-XX-",4)';
```

### Static Data Masking

```sql
-- Mask data in development environment
UPDATE users
SET email = CONCAT('user', id, '@example.com'),
    phone = CONCAT('555-555-', LPAD(id::text, 4, '0')),
    ssn = CONCAT('XXX-XX-', LPAD(id::text, 4, '0'));
```

## Compliance Frameworks

### GDPR Compliance

```
┌─────────────────────────────────────────────────────────────┐
│              GDPR Compliance                                │
├─────────────────────────────────────────────────────────────┤
│  Data Protection Requirements:                              │
│  - Data minimization                                        │
│  - Purpose limitation                                       │
│  - Data accuracy                                            │
│  - Storage limitation                                       │
│  - Integrity and confidentiality                            │
│  - Accountability                                           │
│                                                              │
│  Rights Implementation:                                     │
│  - Right to access                                          │
│  - Right to rectification                                   │
│  - Right to erasure (right to be forgotten)                │
│  - Right to restriction of processing                       │
│  - Right to data portability                                │
│  - Right to object                                          │
│                                                              │
│  Documentation:                                             │
│  - Data protection impact assessments                       │
│  - Records of processing activities                         │
│  - Data processing agreements                               │
└─────────────────────────────────────────────────────────────┘
```

### PCI-DSS Compliance

```
┌─────────────────────────────────────────────────────────────┐
│              PCI-DSS Compliance                             │
├─────────────────────────────────────────────────────────────┤
│  Requirement 3: Protect stored cardholder data              │
│  - Encrypt stored cardholder data                           │
│  - Use strong cryptography                                  │
│  - Secure key management                                    │
│                                                              │
│  Requirement 7: Restrict access to cardholder data          │
│  - Role-based access control                                │
│  - Least privilege principle                                │
│  - Access review and certification                          │
│                                                              │
│  Requirement 10: Track and monitor all access             │
│  - Audit logging                                            │
│  - Log management                                           │
│  - Log review and analysis                                  │
└─────────────────────────────────────────────────────────────┘
```

## Database Hardening

### Hardening Checklist

```
┌─────────────────────────────────────────────────────────────┐
│              Database Hardening Checklist                   │
├─────────────────────────────────────────────────────────────┤
│  Configuration:                                             │
│  [ ] Remove default accounts                                │
│  [ ] Change default passwords                               │
│  [ ] Disable unused features                                │
│  [ ] Configure secure settings                              │
│  [ ] Enable logging                                         │
│                                                              │
│  Network:                                                   │
│  [ ] Use firewalls                                          │
│  [ ] Enable TLS                                             │
│  [ ] Restrict IP access                                     │
│  [ ] Use VPN for remote access                              │
│                                                              │
│  Authentication:                                            │
│  [ ] Use strong passwords                                   │
│  [ ] Enable MFA                                             │
│  [ ] Use certificate authentication                         │
│  [ ] Implement account lockout                              │
│                                                              │
│  Monitoring:                                                │
│  [ ] Enable audit logging                                   │
│  [ ] Set up alerts                                          │
│  [ ] Monitor for anomalies                                  │
│  [ ] Regular security reviews                               │
└─────────────────────────────────────────────────────────────┘
```

## Real-World Impact

**Before this skill:**

- Unencrypted sensitive data
- Weak access controls
- No audit logging
- Compliance violations
- Data breaches

**After this skill:**

- Encrypted data at rest and in transit
- Proper access controls
- Comprehensive audit logging
- Full compliance
- Secure database infrastructure

## Cross-References

- **`database-design`** - For database schema design
- **`security-auditor`** - For security audits
- **`devops-pipeline`** - For secure database deployments

## References

- [OWASP Database Security](https://owasp.org/www-project-database-security/)
- [PCI-DSS Requirements](https://www.pcisecuritystandards.org/)
- [GDPR Guidelines](https://gdpr.eu/)
- [CISSP Certification](https://www.isc2.org/Certifications/CISSP)
- [CDP Certification](https://iapp.org/certify/)
