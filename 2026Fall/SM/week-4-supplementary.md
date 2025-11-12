# Week 4: Governance and Compliance - Supplementary Resource

## Overview

Cloud governance encompasses the practices, policies, and tools that ensure organizations maintain control, compliance, and standardization across their Azure environment. This week covers governance frameworks, policy enforcement mechanisms, resource protection, and data governance.

---

## 1. Governance Fundamentals

### What is Governance?

**Governance** is a set of practices and tools that help organizations:
- Establish and enforce organizational policies
- Manage resources consistently
- Maintain compliance with regulations and standards
- Control costs and usage
- Ensure security and risk management

### Why Governance Matters

Without governance:
- Teams deploy resources inconsistently (different naming, configurations)
- Security vulnerabilities accumulate
- Compliance violations occur
- Cost overruns happen due to unused resources
- Risk of unauthorized access or data exposure increases

### Cloud Governance vs. Traditional IT Governance

- **Traditional**: Manual enforcement, documentation-based, slow to adapt
- **Cloud**: Automated policy enforcement, code-based, real-time compliance monitoring

---

## 2. Azure Blueprints

### Definition

**Azure Blueprints** provides a declarative way to orchestrate the deployment of resource templates and other governance artifacts in a repeatable manner.

### What Blueprints Package Together

- **Resource Groups**: Logical containers for organizing resources
- **Azure Resource Manager (ARM) Templates**: Infrastructure as Code (IaC) definitions
- **Azure Policy Assignments**: Compliance policies
- **Role-Based Access Control (RBAC) Assignments**: User permissions
- **Deployment Order**: Sequencing of artifact deployment

### How Blueprints Work

1. **Define**: Create blueprint definition with resources, policies, and role assignments
2. **Publish**: Mark blueprint version as published
3. **Assign**: Deploy published blueprint to subscription(s)
4. **Track**: Monitor compliance and audit deployments

### Blueprint vs. ARM Templates

| Aspect | ARM Templates | Blueprints |
|--------|---------------|-----------|
| Scope | Single resource deployment | Environment setup (multi-artifact) |
| Artifacts | Only resources | Resources + policies + roles + groups |
| Relationship | One-time deployment | Persistent tracking of blueprint-to-deployed state |
| Updates | No built-in versioning | Blueprint versioning and updates |
| Auditing | Manual | Automated tracking |
| Use Case | Individual deployments | Standardized environment setup |

### Blueprint Lifecycle

1. **Draft**: Blueprint under development
2. **Published**: Ready for assignment
3. **Assigned**: Deployed to subscription(s)
4. **Updated**: New version published; can upgrade existing assignments

### Example Scenario

Organization wants all development environments to have:
- Specific resource naming convention
- Required security policies enabled
- Developer role assigned to team members
- Network isolation with specific firewall rules

**Solution**: Create blueprint with these artifacts, publish, and assign to all dev subscriptions.

---

## 3. Azure Policy

### Definition

**Azure Policy** is a service for creating, assigning, and managing policies that enforce organizational standards and compliance across all Azure resources.

### How Azure Policy Works

1. **Define Policy**: Create policy with rules and effects
2. **Assign Policy**: Apply policy to scope (subscription, resource group)
3. **Evaluate**: Scan resources for compliance
4. **Report**: Show compliance status and non-compliant resources
5. **Remediate**: Automatically fix non-compliant resources (optional)

### Policy Components

- **Policy Definition**: Rule defining what to evaluate and what effect to take
- **Policy Assignment**: Application of policy to specific scope
- **Policy Effect**: Action taken when non-compliance detected (Deny, Audit, Append, Modify, Deploy if not exists, etc.)
- **Scope**: Level of application (management group, subscription, resource group)

### Built-in Policies (Examples)

- **Require SQL Server 12.0**: Only allow SQL Server version 12.0
- **Allowed Storage Account SKUs**: Restrict storage account types (Standard vs Premium)
- **Allowed Locations**: Only allow resources in specific regions
- **Allowed Virtual Machine SKUs**: Restrict VM sizes to approved types
- **Apply tag and its default value**: Auto-tag resources with default values
- **Not allowed resource types**: Block deployment of certain resource types

### Custom Policies

Organizations can create custom policies using JSON definitions to enforce specific rules:
- Naming conventions for resources
- Mandatory tagging standards
- Encryption requirements
- Network configuration rules
- Compliance requirements

### Policy Effects

| Effect | Behavior |
|--------|----------|
| **Deny** | Prevent creation/modification of non-compliant resources |
| **Audit** | Log non-compliance but allow resource creation |
| **Append** | Add properties to non-compliant resources |
| **Modify** | Change properties of non-compliant resources |
| **DeployIfNotExists** | Deploy remediation if resource doesn't exist |
| **AuditIfNotExists** | Audit if specific resource doesn't exist |

### Compliance Remediation

- **Automatic Remediation**: Modify non-compliant resources automatically
- **Manual Remediation**: Admin reviews and manually fixes non-compliant resources
- **Compliant Resources**: Resources meeting policy requirements (no action needed)

---

## 4. Resource Locks

### Definition

**Resource Locks** prevent accidental deletion or modification of critical resources.

### Lock Types

1. **CanNotDelete Lock**
   - Prevents deletion of resource
   - Allows modifications (read and update operations)
   - Use case: Database containing production data

2. **ReadOnly Lock**
   - Prevents both deletion and modification
   - Allows read operations only
   - Use case: Critical archived data, compliance-required resources

### Lock Scope

- **Subscription Level**: Applies to all resources in subscription
- **Resource Group Level**: Applies to all resources in group
- **Individual Resource Level**: Protects specific resource

### Lock Inheritance

Child resources inherit locks from parent. Example:
- Resource group has CanNotDelete lock
- All resources within that group also have CanNotDelete lock

### Lock Management

- Anyone with Owner or User Access Administrator role can manage locks
- Locks apply regardless of user permissions
- Even subscription owners cannot bypass locks

---

## 5. Microsoft Purview

### Definition

**Microsoft Purview** is a unified data governance service helping organizations discover, understand, and manage data across on-premises, multi-cloud, and SaaS environments.

### Core Capabilities

#### Data Discovery
- Automatically scan data sources (Azure Storage, SQL databases, on-premises systems)
- Create metadata catalog
- Understand what data exists

#### Data Classification
- Automatically classify data based on sensitivity (public, internal, confidential, restricted)
- Apply classification labels
- Identify personal data (PII)

#### Data Lineage
- Track data flow from source to destination
- Understand data transformations
- Identify data dependencies

#### Data Catalog
- Centralized inventory of data assets
- Business-friendly descriptions
- Searchable metadata
- Ownership and stewardship information

#### Data Governance
- Set policies for data access and usage
- Manage data lifecycle (retention, deletion)
- Enforce compliance with regulations
- Role-based access to sensitive data

#### Data Compliance
- Monitor compliance with regulations (GDPR, HIPAA, CCPA)
- Generate compliance reports
- Track data handling policies
- Audit data access

#### Data Security
- Identify sensitive data
- Encrypt sensitive assets
- Prevent unauthorized access
- Monitor data exfiltration attempts

### Purview Use Cases

1. **Regulatory Compliance**: Automatically discover and classify PII for GDPR compliance
2. **Data Lakes**: Understand and manage unstructured data in data lakes
3. **Shadow IT**: Discover unauthorized data stores and SaaS applications
4. **Data Quality**: Identify duplicate or outdated data
5. **Merger & Acquisition**: Quickly understand target organization's data assets

---

## 6. Compliance Standards

### Common Compliance Frameworks

| Standard | Focus | Industries |
|----------|-------|-----------|
| **GDPR** | Personal data protection | EU, any company with EU customers |
| **HIPAA** | Healthcare data | Healthcare, pharmaceuticals |
| **PCI-DSS** | Payment card data | Finance, retail, e-commerce |
| **SOC 2** | Security controls | SaaS, cloud services |
| **ISO 27001** | Information security | Any organization |
| **CMMC** | Cybersecurity maturity | Defense contractors, government |
| **FedRamp** | Federal compliance | Government agencies, vendors |
| **CCPA** | Consumer privacy | California residents |

### Azure Compliance Resources

- **Compliance Manager**: Assess compliance posture against regulations
- **Compliance Blueprint Samples**: Pre-built blueprints aligned with compliance standards (ISO 27001, PCI-DSS, HIPAA, etc.)
- **Regulatory Compliance Policies**: Built-in policies enforcing compliance requirements

---

## 7. Governance Best Practices

1. **Start with Landing Zones**: Use Azure landing zone blueprints as foundation
2. **Enforce Policies Early**: Implement governance before resources proliferate
3. **Balance Flexibility and Control**: Policies should enforce standards without stifling innovation
4. **Automate Everything**: Use Azure Policy and Blueprints to automate enforcement
5. **Monitor and Audit**: Regularly review compliance and adjust policies
6. **Document Standards**: Clearly communicate governance policies to teams
7. **Use RBAC + Policies**: Combine role-based access with policy enforcement
8. **Implement Naming Conventions**: Enforce resource naming via policies
9. **Tag Resources**: Use mandatory tagging for organization and cost allocation
10. **Regular Reviews**: Schedule quarterly governance reviews and policy updates

---

**Reference**: All content based on Microsoft Learn and Azure governance documentation, current as of November 2025.
