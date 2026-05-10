# Terraform Infrastructure as Code Skill

**Version:** 1.0.0
**Status:** Active
**License:** MIT

## Overview

This skill provides comprehensive guidance for provisioning and managing infrastructure with Terraform, including module design, state management, workspace organization, remote backend configuration, provider management, Sentinel policies, Terratest integration, and production-ready Infrastructure as Code practices. Based on official HashiCorp documentation and HashiCorp Certified: Terraform Associate (003) certification standards.

## When to Use

**Use this skill when:**
- Provisioning cloud infrastructure (AWS, Azure, GCP) with Terraform
- Creating reusable Terraform modules with inputs and outputs
- Managing Terraform state with S3/DynamoDB remote backends
- Configuring Terraform workspaces for multi-environment deployments
- Setting up provider configurations with version pinning
- Implementing Terraform Cloud/Enterprise workflows
- Writing Sentinel policies for compliance enforcement
- Integrating Terratest for infrastructure testing
- Importing existing infrastructure into Terraform state
- Detecting and remediating configuration drift
- Managing Terraform state files (mv, rm, list, pull, push)
- Configuring TFLint for static analysis
- Implementing Terraform formatting and validation pipelines
- Designing variable definitions with validation rules
- Using data sources for external data lookups
- Implementing provisioners (shell, file, remote-exec)
- Publishing modules to Terraform Registry
- Managing Terraform outputs and local values
- Using Terraform Console for interactive exploration
- Setting up CI/CD pipelines with Terraform plan/apply
- Destroying infrastructure safely with dependency awareness

## What It Covers

### Workflow Lifecycle
- **Init** - Download providers, modules, configure backend
- **Validate** - Check configuration syntax and internal consistency
- **Format** - Auto-format HCL code for consistency
- **Plan** - Preview changes without applying
- **Apply** - Create/update/delete resources
- **Destroy** - Remove all managed resources
- **Import** - Add existing resources to state
- **Console** - Interactive expression evaluation

### State Management
- **Local State** - Personal projects and experimentation
- **Remote S3** - Team collaboration with DynamoDB locking
- **Terraform Cloud** - Enterprise workflows and team collaboration
- **Azure RM** - Azure Blob Storage backend
- **GCS** - Google Cloud Storage backend

### Module Design
- **Root Module** - Top-level configuration entry point
- **Child Module** - Reusable component abstractions
- **Nested Module** - Complex module compositions
- **Wrapper Module** - Registry module customization
- **Factory Module** - Dynamic resource creation with count/for_each

### Provider Configuration
- **AWS Provider** - Multi-region with default tags
- **Azure Provider** - Feature flags and resource management
- **GCP Provider** - Project and region configuration
- **Provider Aliases** - Multi-region and multi-account setups
- **Version Pinning** - Provider version constraints

### Backend Configuration
- **S3 + DynamoDB** - Remote state with locking and encryption
- **Terraform Cloud** - HashiCorp-managed backend
- **Azure Blob Storage** - Azure-native state storage
- **Google Cloud Storage** - GCP-native state storage

### Variables and Outputs
- **Variable Validation** - Custom validation rules
- **Sensitive Variables** - Secure secret handling
- **Complex Types** - Objects, maps, lists, sets
- **Output Sensitivity** - Controlled output exposure
- **Local Values** - Computed configuration values

### Workspaces
- **Workspace Management** - Create, select, delete workspaces
- **Workspace-Aware Config** - Dynamic environment configuration
- **Environment Isolation** - Separate state per environment

### Data Sources
- **AMI Lookup** - Dynamic AMI selection
- **Caller Identity** - Current AWS context
- **VPC Lookup** - Existing infrastructure discovery
- **External Data** - External script integration

### Provisioners
- **File Provisioner** - Remote file copy
- **Remote-Exec** - Remote command execution
- **Local-Exec** - Local side effects
- **User Data** - Instance bootstrapping

### Import and State
- **Resource Import** - Existing infrastructure adoption
- **State Manipulation** - Move, remove, list resources
- **State Locking** - Concurrent access prevention
- **Drift Detection** - Configuration drift identification

### Policy and Testing
- **Sentinel Policies** - Compliance enforcement
- **Terratest** - Infrastructure testing with Go
- **TFLint** - Static analysis and linting
- **Format and Validate** - Code quality enforcement

### Terraform Cloud/Enterprise
- **Remote Operations** - Plan and apply remotely
- **Run Tasks** - External validation workflows
- **Cost Estimation** - Spend prediction and control
- **Team Collaboration** - Review and approval workflows

### Security
- **State Encryption** - At-rest and in-transit encryption
- **Sensitive Variables** - Secret masking in output
- **Provider Authentication** - Secure credential management
- **State Access Control** - IAM-based state protection

### CI/CD Integration
- **GitHub Actions** - Automated validation and deployment
- **Format Checking** - Pre-commit formatting validation
- **Plan Review** - Change preview in pull requests
- **Automated Apply** - Production deployment automation

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
- VPC module with public/private subnets
- Multi-provider configuration
- Remote backend setup
- Workspace management patterns
- Sentinel policy examples
- Terratest test cases
- TFLint configuration
- CI/CD pipeline templates

## References

- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [Terraform Language Reference](https://developer.hashicorp.com/terraform/language)
- [Terraform Registry](https://registry.terraform.io/)
- [Terraform Cloud Documentation](https://developer.hashicorp.com/terraform/cloud-docs)
- [Terraform Associate (003) Study Guide](https://www.hashicorp.com/certification/terraform-associate)
- [Terraform Best Practices](https://www.terraform-best-practices.com/)
- [Sentinel Documentation](https://developer.hashicorp.com/sentinel/docs)
- [Terratest Documentation](https://terratest.gruntwork.io/)
- [TFLint Documentation](https://github.com/terraform-linters/tflint)
- [AWS Provider Documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- [Azure Provider Documentation](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs)
- [Google Provider Documentation](https://registry.terraform.io/providers/hashicorp/google/latest/docs)

## Related Skills

- **`docker-containerization`** - For building container images deployed to infrastructure
- **`kubernetes-orchestration`** - For deploying to Terraform-provisioned EKS/AKS/GKE clusters
- **`devops-pipeline`** - For CI/CD integration with Terraform workflows
- **`aws-serverless`** - For AWS-specific serverless infrastructure
- **`security-auditor`** - For security review of Terraform configurations
- **`disaster-recovery`** - For multi-region disaster recovery infrastructure

## Contributing

Contributions are welcome! Please read `CONTRIBUTING.md` for details.

## License

MIT - See [LICENSE](LICENSE) for details.
