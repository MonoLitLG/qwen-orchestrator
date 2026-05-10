---
name: security-audit
description: >
  Security auditing skill following OWASP Top 10 and SANS Top 25. Use when
  reviewing code for vulnerabilities, handling user input, or implementing
  authentication/authorization systems. Based on OWASP Top 10, SANS Top 25, CISSP, and security certification standards.
license: MIT
---

# Security Audit Skill — Vulnerability Detection

This skill provides systematic security review following industry-standard frameworks. Based on OWASP Top 10, SANS Top 25, CISSP, and security certification standards.

## When to Use

**Use this skill when:**
- Performing security audits following OWASP Top 10 checklist
- Reviewing code for common vulnerabilities (SQL injection, XSS, CSRF)
- Implementing authentication and authorization systems
- Handling user input and sanitization
- Reviewing API security implementations
- Setting up security headers and CSP
- Implementing rate limiting and DDoS protection
- Reviewing encryption and cryptographic implementations
- Setting up security monitoring and logging
- Implementing secure error handling
- Reviewing third-party dependency security
- Setting up security CI/CD gates
- Implementing secrets management
- Reviewing security configurations
- Setting up security training for teams
- Implementing security testing in CI/CD
- Creating security documentation and runbooks
- Building security incident response plans
- Implementing security compliance frameworks (GDPR, HIPAA, PCI-DSS)

**Do NOT use this skill when:**
- Writing application business logic (use developer skill)
- Designing database schema (use database design skill)
- Creating UI components (use frontend design skill)
- Performing general code review (use code-review skill)
- Implementing features without security considerations

## OWASP Top 10 (2025) Checklist

### A01: Broken Access Control

- [ ] Direct object references protected
- [ ] Role-based access enforced at every endpoint
- [ ] Admin functions require admin privileges
- [ ] API endpoints validate ownership of resources
- [ ] CORS properly configured

### A02: Cryptographic Failures

- [ ] Passwords hashed with bcrypt/scrypt/argon2
- [ ] TLS used for all data in transit
- [ ] Sensitive data encrypted at rest
- [ ] No hardcoded secrets or keys
- [ ] Strong key management practices

### A03: Injection

- [ ] Parameterized queries for all database access
- [ ] Input validation on all user-supplied data
- [ ] Output encoding for all rendered content
- [ ] Command execution sanitized
- [ ] File path traversal prevented

### A04: Insecure Design

- [ ] Threat modeling performed
- [ ] Security requirements defined
- [ ] Rate limiting implemented
- [ ] Secure defaults used
- [ ] Defense in depth applied

### A05: Security Misconfiguration

- [ ] Default credentials changed
- [ ] Unnecessary features disabled
- [ ] Error messages don't leak info
- [ ] Security headers present (CSP, HSTS, X-Frame)
- [ ] Debug mode disabled in production

### A06: Vulnerable Components

- [ ] Dependencies audited for CVEs
- [ ] Packages updated to latest stable
- [ ] Unused dependencies removed
- [ ] Lock file integrity verified

### A07: Auth Failures

- [ ] Multi-factor authentication available
- [ ] Account lockout after failed attempts
- [ ] Session management secure
- [ ] Password policy enforced
- [ ] Token expiration reasonable

### A08: Data Integrity Failures

- [ ] Deserialization validated
- [ ] Digital signatures verified
- [ ] CI/CD pipeline secured
- [ ] Supply chain verified

### A09: Logging & Monitoring Failures

- [ ] Security events logged
- [ ] Logs don't contain sensitive data
- [ ] Alerting configured for anomalies
- [ ] Incident response plan exists

### A10: Server-Side Request Forgery

- [ ] URL validation on server-side requests
- [ ] Allowlist for external domains
- [ ] Network segmentation enforced
- [ ] Response filtering applied

## Input Validation Rules

```typescript
// ALWAYS validate on the server
const schema = z.object({
  email: z.string().email().max(254),
  password: z.string().min(12).max(128),
  name: z
    .string()
    .min(1)
    .max(100)
    .regex(/^[a-zA-Z\s]+$/),
  age: z.number().int().min(0).max(150),
});
```

## Security Headers Checklist

```
Content-Security-Policy: default-src 'self'
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 0
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## Severity Classification

| Level    | CVSS    | Example               | Response Time |
| -------- | ------- | --------------------- | ------------- |
| Critical | 9.0+    | SQL Injection, RCE    | Immediate     |
| High     | 7.0-8.9 | Auth bypass, XSS      | < 24 hours    |
| Medium   | 4.0-6.9 | Info disclosure, CSRF | < 1 week      |
| Low      | 0.1-3.9 | Missing headers       | Next release  |
