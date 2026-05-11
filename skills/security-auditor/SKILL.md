---
name: security-auditor
description: Use when performing security audits, OWASP compliance checks, penetration testing, vulnerability assessments, and implementing security best practices. Includes authentication, authorization, data protection, and compliance frameworks.
license: MIT
---

# Security Auditor Skill — Comprehensive Security Practices

## Overview

This skill provides comprehensive guidance for security audits, OWASP compliance, penetration testing, and security best practices. It covers authentication, authorization, data protection, and compliance frameworks like SOC 2, PCI-DSS, HIPAA, and GDPR.

## When to Use

**Use this skill when:**

- Performing security audits
- Checking OWASP compliance
- Implementing authentication/authorization
- Assessing data protection measures
- Conducting vulnerability assessments
- Ensuring compliance with security frameworks

**Do NOT use this skill when:**

- Writing business logic
- Database schema design
- Performance optimization

## OWASP Top 10

### 2021 OWASP Top 10

| #   | Vulnerability                    | Prevention                         |
| --- | -------------------------------- | ---------------------------------- |
| 1   | Broken Access Control            | RBAC, ABAC, access checks          |
| 2   | Cryptographic Failures           | HTTPS, strong encryption           |
| 3   | Injection                        | Parameterized queries, validation  |
| 4   | Insecure Design                  | Threat modeling, secure patterns   |
| 5   | Security Misconfiguration        | Hardening, least privilege         |
| 6   | Vulnerable Components            | Dependency updates, scanning       |
| 7   | Identification Failures          | MFA, session management            |
| 8   | Software Data Integrity Failures | Signatures, checksums              |
| 9   | Security Logging Failures        | Centralized logging, monitoring    |
| 10  | SSRF                             | Input validation, network controls |

## Security Checklist

### Authentication

```markdown
## Authentication Checklist

- [ ] Use HTTPS for all traffic
- [ ] Implement strong password policies
- [ ] Use bcrypt/argon2 for password hashing
- [ ] Implement MFA for sensitive operations
- [ ] Use secure session management
- [ ] Implement account lockout after failures
- [ ] Use OAuth2/OpenID Connect for external auth
- [ ] Validate JWT tokens properly
- [ ] Implement token refresh mechanism
- [ ] Log authentication events
```

### Authorization

```markdown
## Authorization Checklist

- [ ] Implement RBAC or ABAC
- [ ] Check permissions on every request
- [ ] Use role-based access control
- [ ] Implement principle of least privilege
- [ ] Validate ownership for user resources
- [ ] Use authorization headers/tokens
- [ ] Implement resource-level permissions
- [ ] Audit permission changes
- [ ] Test authorization logic
- [ ] Deny by default
```

### Input Validation

```markdown
## Input Validation Checklist

- [ ] Validate all input on server side
- [ ] Use allowlists over denylists
- [ ] Sanitize for specific context (HTML, SQL, shell)
- [ ] Limit input length
- [ ] Validate data types
- [ ] Check for SQL injection patterns
- [ ] Check for XSS patterns
- [ ] Validate file uploads
- [ ] Implement rate limiting
- [ ] Use parameterized queries
```

### Data Protection

```markdown
## Data Protection Checklist

- [ ] Encrypt sensitive data at rest
- [ ] Use TLS 1.2+ for all traffic
- [ ] Hash passwords with bcrypt/argon2
- [ ] Mask sensitive data in logs
- [ ] Implement data retention policies
- [ ] Securely delete data
- [ ] Encrypt backup data
- [ ] Implement data access auditing
- [ ] Use secure key management
- [ ] Implement data classification
```

## Security Testing

### Penetration Testing Checklist

```markdown
## Penetration Testing Checklist

### Reconnaissance

- [ ] Open ports scanning
- [ ] Service version detection
- [ ] Subdomain enumeration
- [ ] Email harvesting

### Authentication Testing

- [ ] Brute force protection
- [ ] Session fixation
- [ ] Token theft
- [ ] Password reset vulnerabilities

### Authorization Testing

- [ ] IDOR testing
- [ ] Privilege escalation
- [ ] Bypass authorization
- [ ] ACL testing

### Input Validation Testing

- [ ] SQL injection
- [ ] XSS attacks
- [ ] Command injection
- [ ] File upload attacks

### API Security

- [ ] Rate limiting
- [ ] Authentication bypass
- [ ] Data exposure
- [ ] Error message disclosure
```

### Security Headers

```typescript
// Express security headers
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'https:'],
        connectSrc: ["'self'"],
        fontSrc: ["'self'"],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'none'"],
      },
    },
    crossOriginEmbedderPolicy: true,
    crossOriginOpenerPolicy: true,
    crossOriginResourcePolicy: { policy: 'same-site' },
    dnsPrefetchControl: { allow: false },
    frameguard: { action: 'deny' },
    hidePoweredBy: true,
    hsts: { maxAge: 31536000, includeSubDomains: true },
    ieNoOpen: true,
    noSniff: true,
    originAgentCluster: true,
    permittedCrossDomainPolicies: { permittedPolicies: 'none' },
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
    xssFilter: true,
  })
);
```

## Compliance Frameworks

### SOC 2

| Category             | Controls                               |
| -------------------- | -------------------------------------- |
| Security             | Access control, encryption, monitoring |
| Availability         | System monitoring, redundancy          |
| Processing Integrity | Accuracy, completeness                 |
| Confidentiality      | Data protection, encryption            |
| Privacy              | Data handling, consent                 |

### PCI-DSS

| Requirement                 | Implementation                    |
| --------------------------- | --------------------------------- |
| 1. Install firewalls        | Network segmentation              |
| 2. Don't use defaults       | Change passwords, remove defaults |
| 3. Protect stored data      | Encryption, tokenization          |
| 4. Encrypt transmission     | TLS 1.2+                          |
| 5. Use antivirus            | Endpoint protection               |
| 6. Develop secure systems   | Secure coding, code review        |
| 7. Restrict access          | Least privilege                   |
| 8. Identify users           | MFA, strong auth                  |
| 9. Restrict physical access | Physical security                 |
| 10. Monitor systems         | Logging, monitoring               |
| 11. Test security           | Pen testing, vuln scanning        |
| 12. Maintain policy         | Security policy, training         |

### HIPAA

| Requirement                     | Implementation                  |
| ------------------------------- | ------------------------------- |
| Access Controls                 | User authentication, encryption |
| Audit Controls                  | Audit trails, monitoring        |
| Integrity                       | Data validation, checksums      |
| Person or Entity Authentication | Authentication procedures       |
| Transmission Security           | Encryption, integrity controls  |

### GDPR

| Requirement                   | Implementation             |
| ----------------------------- | -------------------------- |
| Lawfulness                    | Consent, legal basis       |
| Purpose limitation            | Data minimization          |
| Data minimization             | Only collect what needed   |
| Accuracy                      | Data correction mechanisms |
| Storage limitation            | Data retention policies    |
| Integrity and confidentiality | Security measures          |
| Accountability                | Documentation, policies    |

## Vulnerability Scanning

### Automated Scanning

```bash
# Dependency scanning
npm audit --audit-level=moderate

# SAST scanning
npx eslint src/ --format json > eslint-report.json
npx tsc --noEmit

# DAST scanning (if applicable)
npx OWASP-ZAP -quicksetup -quickout report.html
```

### Dependency Security

```json
{
  "scripts": {
    "audit": "npm audit --audit-level=moderate",
    "audit:fix": "npm audit fix",
    "audit:recursive": "npm audit --audit-level=moderate && npm audit --audit-level=moderate --recursive"
  },
  "resolutions": {
    "lodash": "^4.17.21"
  }
}
```

## Security Best Practices

### Code Security

```typescript
// ❌ BAD: SQL injection vulnerability
const query = `SELECT * FROM users WHERE email = '${email}'`;

// ✅ GOOD: Parameterized query
const query = 'SELECT * FROM users WHERE email = ?';
const params = [email];

// ❌ BAD: XSS vulnerability
res.send(`<div>${userInput}</div>`);

// ✅ GOOD: Sanitized output
res.send(`<div>${escapeHtml(userInput)}</div>`);
```

### Error Handling

```typescript
// ❌ BAD: Exposing stack traces
app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message,
    stack: err.stack, // Exposes internals!
  });
});

// ✅ GOOD: Environment-aware error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const requestId = req.id;

  // Always log full error internally
  logger.error({ err, requestId }, 'Unhandled error');

  // Return safe response
  res.status(500).json({
    error: {
      code: 'INTERNAL_ERROR',
      message:
        process.env.NODE_ENV === 'development'
          ? err.message
          : 'An unexpected error occurred',
      requestId,
    },
  });
});
```

### Rate Limiting

```typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/', limiter);
```

## Security Incident Response

### Incident Response Checklist

```markdown
## Security Incident Response Checklist

1. **Containment**
   - [ ] Isolate affected systems
   - [ ] Block malicious IPs
   - [ ] Revoke compromised credentials

2. **Eradication**
   - [ ] Identify root cause
   - [ ] Remove malicious code
   - [ ] Patch vulnerabilities

3. **Recovery**
   - [ ] Restore from clean backups
   - [ ] Verify system integrity
   - [ ] Monitor for anomalies

4. **Post-Incident**
   - [ ] Document incident timeline
   - [ ] Identify lessons learned
   - [ ] Update security measures
```

## Real-World Impact

**Before this skill:**

- Security vulnerabilities in production
- Data breaches
- Non-compliance fines
- Reputational damage

**After this skill:**

- Secure applications
- Compliance with frameworks
- Protection against attacks
- Trust and reputation

## Cross-References

- **`devops-pipeline`** - For CI/CD security gates
- **`testing-strategy`** - For security testing
- **`architecture-patterns`** - For secure architecture design

## References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Cheat Sheets](https://cheatsheetseries.owasp.org/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
