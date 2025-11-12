# Week 7: Cost Management - Supplementary Resource

## Overview

Understanding and managing cloud costs is critical for organizations adopting Azure. This week covers pricing factors, cost estimation tools, Total Cost of Ownership analysis, Azure Cost Management capabilities, and resource tagging strategies for cost allocation.

---

## 1. Azure Pricing Factors

### Free Services

Certain Azure services are available at no charge, helping to reduce baseline costs:

- **Azure Resource Groups**: Management containers are free
- **Azure Virtual Network (basic)**: Up to 50 VNets free per subscription
- **Load Balancer (basic)**: Basic tier is free
- **Azure Active Directory (basic)**: Free tier included
- **Network Security Groups**: No charge for creation/management
- **Web Apps (free tier)**: Up to 10 free web app instances

### Billing Models

#### Pay Per Execution
- **Use case**: Serverless services with unpredictable usage patterns
- **Examples**: Azure Functions, Logic Apps
- **Pricing**: Charged per function invocation
- **Example**: Functions: 1 million executions free/month, then $0.20 per million

#### Pay Per Time
- **Use case**: Running VM instances or continuously available resources
- **Model**: Charged per second (or hour) while resource runs
- **Benefit**: Stops charging when resource is stopped/deallocated
- **Stability**: Predictable costs for steady-state workloads
- **Example**: Cheapest VM approximately $20/month when running continuously

#### Pay Per Capacity (Reserved)
- **Use case**: Predictable, consistent workloads
- **Model**: Pay fixed price monthly regardless of usage
- **Discounts**: 1-year commitment (10-15% savings), 3-year commitment (25-35% savings)
- **Azure Reserved Instances (RIs)**: Pre-purchase compute capacity at discounted rates
- **Consideration**: Risk of unused reserved capacity

#### Pay Per Data Transfer/Storage

**Outbound Bandwidth (Most Expensive)**:
- First 5 GB: Free
- Beyond 5 GB: Charged at tiered rates
- Between availability zones: Higher cost than within same zone

**Inbound Data**: Free
**Inbound to Azure within same region**: Free
**Cross-region transfer**: Charged

### Region and Service Variations

- **Geographic Pricing**: Different regions have different costs (West US vs. Australia East typically varies 20-40%)
- **Service Tier Pricing**: Premium tiers cost significantly more than Standard
- **Availability Zone Distribution**: Resources in different AZs may have different costs
- **Environment Type**: Dev/Test pricing offers discounts vs. Production

---

## 2. Azure Pricing Calculator

### Purpose

The **Azure Pricing Calculator** helps estimate monthly Azure costs based on specific service configurations and usage patterns.

### How to Use

1. **Access**: Visit https://azure.microsoft.com/en-us/pricing/calculator/
2. **Product Picker**: Search for or browse specific Azure services
3. **Configure**: Set service specifications (region, size, tier, etc.)
4. **Add Services**: Build multi-service estimate
5. **View Summary**: See upfront and monthly costs
6. **Save & Share**: Export to Excel or save as URL

### Key Inputs

- **Region**: Geographic deployment location
- **Service Tier**: Standard, Premium, Enterprise, etc.
- **Subscription Type**: Enterprise, Pay-as-you-go, DevTest
- **Support Plan**: None, Developer, Standard, Professional Direct
- **Licenses**: Existing software licenses (BYOL)
- **Usage Quantity**: Amount of consumption (hours, GB, operations)

### Calculator Capabilities

- **Multiple Estimates**: Create what-if scenarios
- **Negotiated Pricing**: View Enterprise Agreement or CSP pricing if logged in
- **Export**: Share estimates with stakeholders
- **Real-time Pricing**: Updates reflect current Azure pricing
- **Service Breakdown**: Itemized costs by service

### Limitations

- Only estimates retail pricing (not negotiated rates for all account types)
- Does not include data transfer costs in some cases
- Requires manual configuration for custom scenarios

---

## 3. Total Cost of Ownership (TCO) Calculator

### Purpose

The **TCO Calculator** compares on-premises infrastructure costs with Azure cloud costs, justifying cloud migration decisions.

### Typical On-Premises Costs Included

- **Hardware**: Servers, storage, networking equipment
- **Software**: Licenses, operating system, applications
- **Facilities**: Rack space, office floor area
- **Power & Cooling**: Electricity consumption, air conditioning
- **IT Staff**: Salaries for system administration and maintenance
- **Network**: Internet connectivity, WAN links
- **Backup & Recovery**: Physical backup infrastructure

### TCO Calculation Example

| Component | Annual Cost (On-Premises) | Azure Cost |
|-----------|---------------------------|-----------|
| Hardware | $50,000 | $0 |
| Software Licenses | $20,000 | $0 (if using included licenses) |
| IT Labor | $100,000 | $20,000 (reduced management) |
| Facility Costs | $30,000 | $0 |
| Power & Cooling | $15,000 | $0 |
| Network | $10,000 | Included |
| **Total Annual** | **$225,000** | **~$50,000** |

### TCO Benefits

- Quantifies migration savings
- Identifies cost reduction opportunities
- Justifies cloud adoption to business stakeholders
- Considers hidden on-premises costs often overlooked

---

## 4. Azure Cost Management

### Core Capabilities

#### Cost Analysis
- **Visualize spending** by service, resource group, or resource
- **Trend analysis** over time (daily, monthly, yearly)
- **Forecasting** of future costs based on current usage
- **Custom filtering** and grouping options

#### Budgets
- **Set budget limits** by subscription or resource group
- **Track spending** against budget in real-time
- **Control scope**: Define which resources to include
- **Reset frequency**: Monthly, quarterly, annual

#### Alerts
- **Budget Alerts**: Trigger at specified spending thresholds (50%, 75%, 100%)
- **Credit Alerts**: Monitor Azure Prepayment consumption (Enterprise Agreements)
- **Anomaly Alerts**: Detect unusual spending patterns
- **Actions**: Email notifications to budget owners

#### Cost Exports
- **Schedule Reports**: Automated daily/weekly/monthly exports
- **Destinations**: Azure Storage Account or external systems
- **Formats**: CSV for analysis in Excel/tools
- **Audit Trail**: Track all cost changes over time

#### Reserved Instances Management
- **RI Recommendations**: System suggests RIs based on current usage
- **Purchase Planning**: Calculate savings from 1-year or 3-year commitments
- **Utilization Tracking**: Monitor RI usage percentage

#### Chargeback & Cost Allocation
- **Department Tagging**: Allocate costs to specific departments
- **Project Tagging**: Track costs per project
- **Cost Per Unit**: Calculate cost per customer, application, or business unit
- **Reports**: Generate department-level cost reports

### Typical Cost Management Workflow

```
1. Set Budget → 2. Monitor Spending → 3. Receive Alerts
    ↓
4. Analyze Costs → 5. Identify Optimization → 6. Take Action
    ↓
7. Recommend RIs → 8. Forecast Future Costs → 9. Plan Budget
```

---

## 5. Resource Tags

### Definition

**Resource Tags** are key-value metadata attached to Azure resources for organization, billing, and automation purposes.

### Tag Structure

- **Key**: Tag category (e.g., "Environment", "Department", "Project")
- **Value**: Specific value (e.g., "Production", "Finance", "ProjectX")
- **Example**: Tag = `Environment:Production`, `CostCenter:12345`, `Owner:TeamA`

### Common Tag Examples

| Key | Value | Purpose |
|-----|-------|---------|
| Environment | Production/Development/Testing | Identify environment type |
| Department | Finance/IT/Sales/HR | Allocate costs to departments |
| CostCenter | 12345/67890 | Billing and chargebacks |
| Project | ProjectName | Track project-specific costs |
| Owner | person@company.com | Identify responsible party |
| Application | AppName | Track application costs |

### Tag Benefits

- **Cost Allocation**: Charge costs to departments/projects
- **Automation**: Script-based resource management using tags
- **Compliance**: Ensure tagging standards are applied
- **Organization**: Logical grouping of resources
- **Reporting**: Generate cost reports by tag
- **Access Control**: Enforce policies based on tags

### Tag Implementation Strategy

1. **Define Naming Convention**: Standardize key and value formats
2. **Mandatory Tags**: Enforce required tags via policies
3. **Default Tags**: Auto-apply tags during resource creation
4. **Regular Audits**: Verify compliance with tagging standards
5. **Cost Reports**: Generate reports by tag for visibility

### Example Tag Policy

```
All resources MUST have tags:
- Environment (required): Prod, Dev, Test
- Department (required): Finance, IT, Sales, etc.
- CostCenter (required): Valid cost center code
- Owner (required): Email address
- Project (optional): Project name if applicable
```

---

## 6. Cost Optimization Strategies

1. **Right-Size Resources**: Eliminate overprovisioned VMs and databases
2. **Use Reserved Instances**: Commit to 1-3 year discounts for predictable workloads
3. **Auto-Shutdown**: Schedule resource shutdowns for non-production environments
4. **Eliminate Unused Resources**: Remove orphaned disks, old snapshots, unused IPs
5. **Use Spot Instances**: Run flexible, non-critical workloads at steep discounts
6. **Optimize Storage**: Use cooler tiers for infrequently accessed data
7. **Consolidate Resources**: Combine underutilized resources
8. **Monitor Data Transfer**: Minimize cross-region and outbound transfers
9. **Implement Chargeback**: Use tags to allocate costs accurately
10. **Regular Reviews**: Quarterly cost analysis and optimization checks

---

## 7. Cost Monitoring Best Practices

- **Enable Cost Management Early**: Start tracking from beginning
- **Use Consistent Tagging**: All resources must follow tagging standards
- **Set Realistic Budgets**: Based on historical data and growth projections
- **Alert Thresholds**: Set alerts at 50% and 75% of budget
- **Review Regularly**: Weekly or monthly cost reviews
- **Forecast Spending**: Use Azure tools to predict future costs
- **Compare Regions**: Evaluate if different regions save money
- **Negotiate Discounts**: Enterprise Agreement or Spot pricing discounts

---

**Reference**: All content based on Microsoft Learn and Azure pricing documentation, current as of November 2025.
