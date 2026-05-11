# Security Auditor Skill

**Version:** 1.0.0  
**Status:** Active  
**License:** MIT

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

## What It Covers

### OWASP Top 10

- **Broken Access Control** - RBAC, ABAC, access checks
- **Cryptographic Failures** - HTTPS, strong encryption
- **Injection** - Parameterized queries, validation
- **Insecure Design** - Threat modeling, secure patterns
- **Security Misconfiguration** - Hardening, least privilege
- **Vulnerable Components** - Dependency updates, scanning
- **Identification Failures** - MFA, session management
- **Software Data Integrity Failures** - Signatures, checksums
- **Security Logging Failures** - Centralized logging, monitoring
- **SSRF** - Input validation, network controls

### Security Checklists

- **Authentication** - HTTPS, password policies, MFA, session management
- **Authorization** - RBAC/ABAC, permission checks, least privilege
- **Input Validation** - Server-side validation, sanitization
- **Data Protection** - Encryption, TLS, secure deletion

### Security Testing

- **Penetration Testing** - Reconnaissance, authentication, authorization
- **Security Headers** - Helmet, CSP, HSTS
- **Vulnerability Scanning** - Dependency scanning, SAST, DAST

### Compliance Frameworks

- **SOC 2** - Security, availability, processing integrity
- **PCI-DSS** - Firewalls, encryption, access control
- **HIPAA** - Access controls, audit controls, integrity
- **GDPR** - Lawfulness, purpose limitation, data minimization

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

- Security checklists
- Penetration testing templates
- Compliance framework checklists
- Code security examples

## References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Cheat Sheets](https://cheatsheetseries.owasp.org/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)

## Related Skills

- **`devops-pipeline`** - For CI/CD security gates
- **`testing-strategy`** - For security testing
- **`architecture-patterns`** - For secure architecture design

## Contributing

Contributions are welcome! Please read `CONTRIBUTING.md` for details.

## License

MIT - See [LICENSE](LICENSE) for details.
