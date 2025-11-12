# Week 11: Governance and Compliance - Q&A Review

## Overview

Week 11 provides comprehensive Q&A review of Governance and Compliance concepts from Week 4. This resource consolidates exam-style questions covering Azure Blueprints, Azure Policy, Resource Locks, Microsoft Purview, and practical governance scenarios.

---

## 1. Governance Fundamentals - Q&A Review

### Question: What is Governance?

**Definition**: Governance is the set of practices and tools that help organizations:
- Establish and enforce policies
- Manage resources consistently
- Maintain compliance within Azure environment
- Control and standardize resource deployment and configuration

**Why Governance Matters**:
- Ensures consistency in resource creation
- Maintains compliance with regulations
- Prevents security vulnerabilities
- Reduces operational costs
- Enforces organizational standards

---

### Question: Manual vs. Automated Governance

**Scenario 1: VM Naming Convention**

Organization wants all VMs to follow naming convention (e.g., "prod-vm-01").

**Option 1 - Manual** (Ineffective):
- Create documentation describing naming rules
- Send email to teams
- Assume everyone reads and applies rules
- Result: Inconsistent naming, manual enforcement burden

**Option 2 - Automated** (Best Practice):
- Use Azure tools (Azure Policy, Blueprints) to enforce rules
- Automatically reject non-compliant deployments
- Centralized policy enforcement
- Result: Consistent naming, no manual intervention needed

**Key Principle**: Automated governance is more reliable than manual documentation

---

### Question: Scenario 2 - Backup Requirements

Organization requires daily backups enabled on every server.

**Correct Approach**: 
- Use Azure Policy or Blueprints to enforce backup requirement
- Automatically configure backups on new resources
- Prevent deployment of resources without backup configuration
- Monitor compliance

---

## 2. Azure Blueprints - Q&A Review

### Question: Azure Blueprints Primary Purpose

**Correct Answer**: To orchestrate deployment of resource templates and other governance artifacts in a repeatable manner

**What Blueprints Package Together**:
- ARM Templates (infrastructure definition)
- Azure Policy Assignments (compliance policies)
- Role-Based Access Control (RBAC) Assignments (user permissions)
- Resource Groups (logical organization)
- Deployment Order (sequencing)

---

### Question: Blueprints vs. ARM Templates Relationship

**Question**: Which statement best describes the relationship between Azure Blueprints and ARM Templates?

**Options**:
- a. Azure Blueprints and ARM templates are interchangeable terms
- b. **Azure Blueprints uses ARM templates as foundational component** ✓
- c. ARM templates are an alternative to Blueprints, same purpose
- d. Azure Blueprints and ARM templates have no relationship

**Correct Answer**: **b** - Blueprints use ARM Templates as foundational infrastructure component

**Explanation**: 
- ARM Templates: Define individual resources (VMs, databases, etc.)
- Azure Blueprints: Package ARM Templates + Policies + RBAC + Organization for complete environment setup

---

### Question: Azure Blueprints Lifecycle

**Stages**:
1. **Draft**: Blueprint under development
2. **Published**: Blueprint version ready for assignment
3. **Assigned**: Blueprint deployed to subscription(s)
4. **Updated**: New version published, existing assignments can be upgraded

---

### Question: Azure Blueprints Use Case

**Question**: Which scenario is best suited for Azure Blueprints?

**Answer**: Standardized environment setup for multiple subscriptions with consistent resources, policies, and access controls

---

## 3. Azure Policy - Q&A Review

### Question: Azure Policy Primary Purpose

**Correct Answer**: To create rules across all Azure resources to enforce desired configurations and compliance

### Question: How Azure Policy Works

**Process**:
1. Define policy with rules and effects
2. Assign policy to scope (subscription, resource group)
3. Evaluate resources for compliance
4. Report compliance status
5. Take action (deny, audit, remediate)

---

### Question: What Is Azure Policy Definition?

**Question**: Which statement accurately describes an Azure Policy definition?

**Options**:
- a. Specifies allowed values for parameters in assignment
- b. **Defines set of rules applied to resources to enforce desired configurations** ✓
- c. Determines order of resource deployment
- d. Is a blueprint for entire subscription

**Correct Answer**: **b** - Policy definition specifies rules for resource configuration

---

### Question: Built-In Policies (Examples)

- Require SQL Server 12.0
- Allowed Storage Account SKUs
- Allowed Locations
- Allowed Virtual Machine SKUs
- Apply tag and its default value
- Not allowed resource types

---

### Question: Custom Policies

**How to Create Custom Policies**: By using JSON definitions in Azure Policy

**Use Cases for Custom Policies**:
- Enforce specific naming conventions
- Require mandatory resource tagging
- Enforce encryption requirements
- Enforce network configurations
- Compliance-specific requirements

---

### Question: How Azure Policy Enforces Compliance

**Question**: How does Azure Policy enforce compliance within Azure environment?

**Options**:
- a. By automatically fixing non-compliant resources
- b. **By blocking deployment of non-compliant resources** ✓ (with Deny effect)
- c. By generating compliance reports for manual review
- d. By sending compliance alerts to administrators

**Correct Answer**: **b** - Policy can block deployment (with Deny effect) or audit/remediate

**Clarification**: Different policy effects enable different enforcement:
- **Deny**: Blocks non-compliant deployment
- **Audit**: Logs non-compliance
- **Append/Modify**: Automatically adds/changes properties
- **DeployIfNotExists**: Deploys if resource doesn't exist

---

### Question: Blueprints + Policy Integration

**Question**: Which Azure service is commonly integrated with Azure Blueprints for advanced policy enforcement and compliance?

**Options**:
- a. Azure Functions
- b. Azure Logic Apps
- c. **Azure Policy** ✓
- d. Azure Security Center

**Correct Answer**: **c** - Azure Policy works closely with Blueprints for governance

---

### Question: Azure Policy Definition vs. Assignment

**Policy Definition**: The rule itself (e.g., "all storage accounts must be encrypted")

**Policy Assignment**: Application of the policy to specific scope (e.g., "apply encryption policy to West US subscription")

---

### Question: Policy Assignment Purpose

**Question**: What is the purpose of Policy Assignment in Azure Policy?

**Options**:
- a. To define a new policy rule
- b. To create a custom initiative
- c. **To associate a policy with specific scope (subscription/resource group)** ✓
- d. To enforce policies on non-compliant resources

**Correct Answer**: **c** - Assignment applies policy to specific scope

---

### Question: Azure Policy Effects

**Effect**: Action taken when resource is non-compliant

**Common Effects**:

| Effect | Behavior | Use Case |
|--------|----------|----------|
| **Deny** | Blocks resource deployment | Prevent unauthorized resource types |
| **Audit** | Logs non-compliance, allows deployment | Track non-compliant resources |
| **Append** | Adds properties to resource | Add mandatory tags |
| **Modify** | Changes resource properties | Auto-fix configurations |
| **DeployIfNotExists** | Deploys resource if missing | Ensure required resources exist |

---

### Question: Append Effect

**Question**: What does the Append effect do in Azure Policy?

**Options**:
- a. Adds additional parameters to policy definition
- b. Appends new policy definition to existing initiative
- c. **Adds new properties/fields to resources** ✓
- d. Adds policies to policy store

**Correct Answer**: **c** - Append effect adds/modifies resource properties

---

## 4. Resource Locks - Q&A Review

### Question: Resource Locks Primary Purpose

**Correct Answer**: To prevent accidental deletion or modification of critical resources

### Question: Types of Resource Locks

**ReadOnly Lock**:
- Prevents both deletion AND modification
- Allows read operations only
- Use case: Critical archived data, compliance-required resources

**CanNotDelete Lock**:
- Prevents deletion only
- Allows modifications (read and update operations)
- Use case: Production database, critical application data

---

### Question: Resource Lock Scope

**Where Locks Apply**:
- Subscription level: All resources in subscription
- Resource group level: All resources in group
- Individual resource level: Specific resource
- Child resources inherit parent locks

---

### Question: Lock Inheritance

**Question**: How do resource locks interact with resource group permissions?

**Answer**: Locks apply regardless of user permissions. Even Owner and User Access Administrator cannot bypass locks.

**Example**: Owner user cannot delete VM if CanNotDelete lock applied.

---

### Question: Lock Management

**Who Can Manage Locks**:
- Owner role
- User Access Administrator role
- Users must have explicit permissions

---

## 5. Microsoft Purview - Q&A Review

### Question: Microsoft Purview Primary Purpose

**Correct Answer**: Unified data governance service for discovering, understanding, and managing data across multi-cloud and on-premises environments

### Question: Purview Core Capabilities

- Data Discovery: Automatically scan data sources
- Data Classification: Classify by sensitivity level
- Data Lineage: Track data flow and transformations
- Data Catalog: Centralized metadata inventory
- Data Governance: Manage policies and lifecycle
- Data Compliance: Monitor regulatory compliance
- Data Security: Identify and protect sensitive data

---

### Question: Purview Use Cases

- GDPR Compliance: Discover and classify PII
- Data Lakes: Understand unstructured data
- Shadow IT: Identify unauthorized data stores
- Data Quality: Find duplicate/outdated data
- M&A: Understand target organization's data

---

## 6. Governance Scenarios - Q&A Review

### Question: VM Naming Convention Enforcement

**Scenario**: Organization requires all VMs follow "prod-vm-[number]" naming pattern

**Best Approach**: 
1. Create Azure Policy with naming convention rule
2. Set effect to "Deny" for non-compliant names
3. Automatically rejects VM deployments with wrong names
4. Ensures 100% compliance without manual intervention

---

### Question: Mandatory Backup Policy

**Scenario**: All servers must have daily backups enabled

**Best Approach**:
1. Use Azure Policy with "DeployIfNotExists" effect
2. Automatically configure backups on new resources
3. Monitor compliance with Azure Policy
4. Alert/remediate if backup disabled

---

### Question: Data Governance and Compliance

**Scenario**: Financial institution must comply with regulations (PCI-DSS, SOX)

**Best Approach**:
1. Use Microsoft Purview to discover sensitive data
2. Classify financial data appropriately
3. Apply Azure Policy to enforce encryption
4. Use Resource Locks on critical systems
5. Monitor compliance with Blueprints

---

## 7. Service Integration - Q&A Review

### Question: Governance Service Relationships

**Blueprints**: Deploy complete environments (templates + policies + RBAC)

**Azure Policy**: Enforce rules on resources

**Resource Locks**: Prevent accidental changes/deletion

**Microsoft Purview**: Manage and govern data

**Together**: Complete governance framework

---

## 8. Exam Preparation Summary

### Most Important Concepts

1. **Governance Definition**: Practices and tools for policy enforcement
2. **Blueprints**: Package templates + policies + RBAC
3. **Azure Policy**: Create rules across resources
4. **Policy Effects**: Deny, Audit, Append, Modify, DeployIfNotExists
5. **Resource Locks**: Prevent accidental changes
6. **Microsoft Purview**: Data governance and discovery

### Quick Reference Table

| Service | Purpose | Scope |
|---------|---------|-------|
| **Blueprints** | Deploy standardized environments | Multi-artifact orchestration |
| **Azure Policy** | Enforce compliance rules | Individual resources/compliance |
| **Resource Locks** | Prevent accidental changes | Specific resources/groups |
| **Microsoft Purview** | Govern and discover data | Data assets and lineage |

### Common Question Patterns

- "Which service **[governance need]**?"
- "How does **[service]** enforce compliance?"
- "What's relationship between **[service A]** and **[service B]**?"
- Scenario-based governance questions

---

**Reference**: All content based on Week 11 Q&A review of Governance and Compliance, covering Week 4 material in examination format.
