# Kubernetes Orchestration Skill

**Version:** 1.0.0
**Status:** Active
**License:** MIT

## Overview

This skill provides comprehensive guidance for deploying and managing applications on Kubernetes, including deployment strategies, pod security, resource management, autoscaling, service mesh integration, ingress configuration, secrets management, and production best practices. Based on official Kubernetes documentation and CKA/CKAD/CKS certification standards.

## When to Use

**Use this skill when:**

- Deploying applications to Kubernetes clusters
- Implementing deployment strategies (rolling, blue-green, canary)
- Configuring pod security and Pod Security Admission
- Setting up resource requests, limits, and quotas
- Implementing Horizontal Pod Autoscaling (HPA) or Vertical Pod Autoscaling (VPA)
- Configuring ingress controllers (NGINX, Traefik, AWS ALB)
- Setting up service mesh (Istio, Linkerd)
- Managing secrets and config maps securely
- Deploying stateful sets for databases
- Configuring daemon sets for logging and monitoring
- Setting up jobs and cron jobs for batch processing
- Implementing monitoring with Prometheus and Grafana
- Setting up logging with EFK/ELK stack
- Configuring network policies for pod isolation
- Implementing RBAC and service accounts
- Using Helm charts for application packaging
- Implementing GitOps with ArgoCD or Flux
- Configuring node affinity, anti-affinity, taints and tolerations

## What It Covers

### Workload Types

- **Deployment** - Stateless application management
- **StatefulSet** - Stateful application orchestration
- **DaemonSet** - Node-level agent deployment
- **Job** - One-time batch processing
- **CronJob** - Scheduled batch processing

### Deployment Strategies

- **Rolling Update** - Zero-downtime incremental updates
- **Blue-Green** - Instant rollback capability
- **Canary** - Gradual traffic shifting
- **Recreate** - Full restart for migrations
- **Shadow** - Production traffic mirroring

### Resource Management

- **Resource Requests/Limits** - Container resource guarantees
- **Horizontal Pod Autoscaler** - CPU/memory-based scaling
- **Vertical Pod Autoscaler** - Automatic resource adjustment
- **Cluster Autoscaler** - Node pool scaling
- **Resource Quotas** - Namespace-level limits
- **Limit Ranges** - Default container limits

### Security

- **Pod Security Admission** - Pod-level security enforcement
- **RBAC** - Role-based access control
- **Service Accounts** - Pod identity management
- **Network Policies** - Pod network isolation
- **Security Contexts** - Container privilege restrictions
- **Secrets Management** - Sensitive data handling
- **OPA/Gatekeeper** - Policy enforcement
- **Falco** - Runtime security monitoring
- **Trivy** - Image vulnerability scanning

### Networking

- **Ingress Controllers** - NGINX, Traefik, AWS ALB
- **Service Mesh** - Istio, Linkerd
- **Network Policies** - Pod-level firewall rules
- **Load Balancing** - Service traffic distribution

### Storage

- **Persistent Volumes** - Cluster storage management
- **Persistent Volume Claims** - Pod storage requests
- **Storage Classes** - Dynamic provisioning
- **Volume Mounts** - Container storage access

### Configuration Management

- **ConfigMaps** - Non-sensitive configuration
- **Secrets** - Sensitive data storage
- **Helm Charts** - Application packaging
- **Kustomize** - Configuration overlays
- **GitOps** - ArgoCD, Flux CD

### Scheduling

- **Node Affinity** - Node selection rules
- **Pod Anti-Affinity** - Pod distribution
- **Taints and Tolerations** - Node restrictions
- **Pod Priority** - Preemption rules
- **Pod Disruption Budgets** - Availability guarantees

### Monitoring and Logging

- **Prometheus** - Metrics collection
- **Grafana** - Dashboard visualization
- **ServiceMonitor** - Prometheus service discovery
- **Fluentd/FluentBit** - Log aggregation
- **EFK/ELK Stack** - Elasticsearch, Fluentd, Kibana

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

- Deployment strategy implementations
- Pod security configurations
- Resource management templates
- Ingress controller setups
- Service mesh configurations
- Helm chart templates
- GitOps workflows
- Monitoring configurations

## References

- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [Kubernetes Best Practices](https://kubernetes.io/docs/concepts/overview/working-with-objects/)
- [CKA Study Guide](https://github.com/cncf/curriculum)
- [CKAD Study Guide](https://github.com/cncf/curriculum)
- [CKS Study Guide](https://github.com/cncf/curriculum)
- [Kubernetes Security Best Practices](https://kubernetes.io/docs/concepts/security/overview/)
- [Helm Documentation](https://helm.sh/docs/)
- [ArgoCD Documentation](https://argo-cd.readthedocs.io/)
- [Istio Documentation](https://istio.io/latest/docs/)
- [Prometheus Kubernetes Monitoring](https://prometheus.io/docs/guides/kube-prometheus-stack/)
- [Kubernetes Network Policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/)
- [Pod Security Standards](https://kubernetes.io/docs/concepts/security/pod-security-standards/)

## Related Skills

- **`docker-containerization`** - For building container images before deployment
- **`devops-pipeline`** - For CI/CD integration with Kubernetes
- **`terraform-iac`** - For provisioning Kubernetes clusters
- **`aws-serverless`** - For AWS EKS-specific configurations
- **`monitoring`** - For Prometheus/Grafana setup
- **`security-auditor`** - For cluster security audits
- **`disaster-recovery`** - For backup and recovery strategies

## Contributing

Contributions are welcome! Please read `CONTRIBUTING.md` for details.

## License

MIT - See [LICENSE](LICENSE) for details.
