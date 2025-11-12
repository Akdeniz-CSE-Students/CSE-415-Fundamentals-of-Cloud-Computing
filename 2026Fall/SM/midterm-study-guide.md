# CSE 415 Midterm (Vize) Review - Weeks 1-7 Comprehensive Study Guide

## 📋 Midterm Exam Scope: Weeks 1-7

This comprehensive study guide covers all topics from the first 7 weeks of CSE 415 Fundamentals of Cloud Computing course. The midterm exam focuses on cloud fundamentals, Azure core services, security, governance, management tools, monitoring, and cost management.

---

# WEEK 1: Introduction to Cloud Computing and Azure

## Key Definitions

**Cloud Computing**: On-demand delivery of IT resources over the Internet with pay-as-you-go pricing.

**Key Characteristics**:
- On-demand resource access
- Self-service provisioning
- Broad network access
- Resource pooling
- Rapid elasticity
- Measured service

## Shared Responsibility Model

| Responsibility | On-Premises | IaaS | PaaS | SaaS |
|---|---|---|---|---|
| **Data** | Customer | Customer | Customer | Customer |
| **Accounts & Access** | Customer | Customer | Customer | Provider |
| **Identity & Directory** | Customer | Customer | Customer | Provider |
| **Applications** | Customer | Customer | Provider | Provider |
| **Network Controls** | Customer | Customer | Provider | Provider |
| **Operating System** | Customer | Customer | Provider | Provider |
| **Physical Infrastructure** | Customer | Provider | Provider | Provider |
| **Physical Network** | Customer | Provider | Provider | Provider |

**Key Principle**: As you move from IaaS → PaaS → SaaS, customer responsibility decreases, provider responsibility increases.

## Cloud Service Types

### IaaS (Infrastructure as a Service)
- **Customer Manages**: Applications, data, OS, middleware, runtime
- **Provider Manages**: Infrastructure, virtualization
- **Examples**: Virtual Machines, Azure App Service (Compute only)
- **Flexibility**: Maximum control, maximum responsibility

### PaaS (Platform as a Service)
- **Customer Manages**: Applications, data only
- **Provider Manages**: Infrastructure, OS, middleware, runtime
- **Examples**: Azure App Service, Azure SQL Database
- **Balance**: Good balance of control and convenience

### SaaS (Software as a Service)
- **Customer Manages**: Minimal (user configuration, data input)
- **Provider Manages**: Everything
- **Examples**: Microsoft 365, Dynamics 365
- **Convenience**: Maximum convenience, minimal management

### FaaS (Functions as a Service)
- **Execution Model**: Event-driven, serverless
- **Billing**: Pay-per-execution
- **Example**: Azure Functions, Logic Apps
- **Use Case**: Unpredictable workloads, event responses

## Cloud Deployment Models

### Public Cloud
- **Ownership**: Third-party provider
- **Access**: Over internet, available to public
- **Cost**: Lowest upfront cost, pay-as-you-go
- **Scalability**: Excellent
- **Control**: Limited
- **Best For**: Cost-sensitive, flexible requirements

### Private Cloud
- **Ownership**: Single organization
- **Access**: Organization's network only
- **Cost**: Higher upfront and operational
- **Scalability**: High but planned
- **Control**: Maximum
- **Best For**: Security-critical, regulated industries

### Hybrid Cloud
- **Mix**: On-premises + public cloud
- **Flexibility**: Excellent
- **Cost**: Medium
- **Complexity**: High
- **Best For**: Transition strategies, mixed workloads

## Azure Global Infrastructure

**Regions**: 60+ worldwide, strategic geographic locations
**Region Pairs**: Primary-secondary regions for disaster recovery
**Availability Zones**: Isolated datacenters within region with separate power/cooling
**Benefit**: Geographic redundancy, low latency, compliance

## Azure Resource Hierarchy

```
Azure Account (Billing root)
    ↓
Management Group(s) (Policy scope)
    ↓
Subscription (Billing container, access control)
    ↓
Resource Group (Logical organization)
    ↓
Resource (Individual service: VM, database, etc.)
```

**Key Points**:
- Every resource must belong to exactly one resource group
- Subscriptions are billing and access control boundaries
- Resource groups enable lifecycle management
- Management groups organize subscriptions

## 7 Benefits of Cloud Computing

1. **High Availability**: 99.99% uptime (4 nines = 4 min/month downtime)
2. **Scalability**: Handle growth through vertical or horizontal scaling
3. **Elasticity**: Automatic scaling based on demand
4. **Reliability**: System operates without failures over specified period
5. **Predictability**: Forecast costs and performance accurately
6. **Security**: Data protection, encryption, access control, compliance
7. **Governance**: Policies, compliance, audit trails, standardization

---

# WEEK 2: Azure Core Services (Compute, Networking, Storage)

## Compute Services

### Virtual Machines (VMs)
- **Model**: IaaS
- **Purpose**: Run virtualized servers with full OS control
- **Billing**: Pay-per-second while running
- **Use Cases**: Migrations, custom applications, testing
- **Responsibility**: OS, applications, data (customer responsibility)

### Virtual Machine Scale Sets (VMSS)
- **Purpose**: Deploy and manage multiple identical VMs
- **Auto-scaling**: Based on demand (up to 1,000 VMs)
- **Load Balancing**: Automatic across instances
- **Use Cases**: Web applications, batch processing, CI/CD

### App Service
- **Model**: PaaS
- **Purpose**: Host web applications without managing infrastructure
- **Features**: Automatic patching, CI/CD integration, auto-scaling
- **Use Cases**: Web apps, APIs, mobile backends

### Azure Container Instances (ACI)
- **Purpose**: Run containers quickly without servers
- **Startup**: Seconds (not minutes)
- **Billing**: Per-second
- **Use Cases**: Testing, batch jobs, CI/CD pipelines

### Azure Kubernetes Service (AKS)
- **Purpose**: Orchestrate and manage containerized applications at scale
- **Kubernetes**: Production-grade container management
- **Auto-scaling**: Pods and nodes
- **Use Cases**: Microservices, complex containerized applications

### Azure Functions
- **Model**: Serverless/FaaS
- **Execution**: Event-driven
- **Billing**: 1M free/month, then $0.20/million
- **Use Cases**: Data processing, workflows, event responses

### Windows Virtual Desktop
- **Purpose**: Cloud-based Windows desktop from anywhere
- **Model**: DaaS (Desktop as a Service)
- **Benefit**: Remote work, GPU support available
- **Use Cases**: Remote workers, specialized workstations

## Networking Services

### Azure Virtual Network (VNet)
- **Purpose**: Create private, isolated networks
- **Components**: Address space, subnets, NSGs, NICs
- **Benefit**: Complete network isolation
- **Features**: Service endpoints, private endpoints

### VNet Peering
- **Purpose**: Direct communication between VNets
- **Advantage**: Private, low-latency, no internet
- **Types**: Regional and global peering

### VPN Gateway
- **Purpose**: Encrypted connection over public internet
- **Cost**: Lower cost
- **Bandwidth**: 100-1000 Mbps
- **Connection Type**: Site-to-site, point-to-site

### ExpressRoute
- **Purpose**: Dedicated private connection (no internet)
- **Cost**: Premium pricing
- **Bandwidth**: 50 Mbps - 100 Gbps
- **SLA**: Guaranteed uptime
- **Use Cases**: Mission-critical, large data transfers

### Network Security Groups (NSGs)
- **Purpose**: Firewall rules at subnet/NIC level
- **Rules**: Inbound/outbound filters
- **Evaluation**: Priority-based, stateful

### Load Balancer
- **Purpose**: Distribute traffic across backends
- **Types**: Public (internet), Internal (VNet)
- **Health Checks**: Automatic monitoring

### Application Gateway
- **Purpose**: Layer 7 load balancing with routing
- **Features**: URL-based routing, WAF, SSL termination
- **Use Cases**: Microservices, API gateway, multi-site

### Content Delivery Network (CDN)
- **Purpose**: Globally distribute static content
- **Benefit**: Reduced latency, decreased origin load
- **Locations**: 200+ edge servers worldwide

## Storage Services

### Blob Storage
- **Purpose**: Store unstructured data (images, videos, documents)
- **Tiers**: Hot (frequent), Cool (30+ days), Archive (180+ days)
- **Scalability**: Unlimited
- **Billing**: Per GB + operations
- **Use Cases**: Backups, media, data lakes

### Azure Disks (Managed Disks)
- **Purpose**: VM persistent storage volumes
- **Types**: Standard HDD/SSD, Premium SSD, Ultra SSD
- **Management**: Automated (no storage accounts)
- **Use Cases**: OS drives, database storage

### Azure Files
- **Purpose**: SMB file shares accessible from multiple machines
- **Protocol**: SMB 3.0
- **Cross-platform**: Windows, Linux, macOS
- **Use Cases**: Lift-and-shift, shared storage, legacy apps

### Azure File Sync
- **Purpose**: Sync on-premises and cloud file shares
- **Bidirectional**: Cloud ↔ On-premises
- **Caching**: Local performance with cloud scale
- **Use Cases**: Hybrid storage, disaster recovery

### Azure Table Storage
- **Type**: NoSQL key-value
- **Scalability**: Scale-out easily
- **Use Cases**: Non-relational data, IoT telemetry

---

# WEEK 3: Identity, Access Management & Security

## Identity Fundamentals

**Identity**: Representation of person, application, or device needing access

**Authentication (AuthN)**: Verifying who you are
- Example: Username + password

**Authorization (AuthZ)**: Verifying what you can do
- Example: User can read but not delete

**Key Rule**: BOTH authentication AND authorization must succeed

## Azure Active Directory (Azure AD / Microsoft Entra ID)

**Purpose**: Centrally manage user identities and access

**Key Features**:
- **SSO** (Single Sign-On): Sign in once, access multiple apps
- **Multi-tenant**: Support multiple organizations
- **Hybrid**: Connect on-premises AD with cloud
- **Modern Protocols**: OAuth 2.0, OpenID Connect, SAML

**Advantage**: Cloud-based, internet-ready, scales easily

## Authentication Methods

### Password-Based (Traditional)
- **Vulnerability**: Phishing, brute force, weak passwords
- **Drawback**: High management overhead

### Multi-Factor Authentication (MFA)
- **Factors**: 2+ of: something you know, have, are
- **Methods**: SMS, Email, Authenticator app, Phone call, FIDO2
- **Benefit**: Even if password stolen, attacker still can't access

### Passwordless Authentication
- **Methods**: Windows Hello, Microsoft Authenticator, FIDO2 Keys
- **Benefits**: Better security (phishing-resistant), better UX

## Role-Based Access Control (RBAC)

**Components**:
1. **Security Principal**: User, group, service principal
2. **Role Definition**: Set of permissions
3. **Scope**: Where role applies (subscription, resource group, resource)

**Built-in Roles**:
- **Owner**: Full control, can delegate
- **Contributor**: Create/modify resources, cannot grant access
- **Reader**: View only

**Principle**: Least Privilege - grant minimum permissions needed

## Conditional Access

**Purpose**: Dynamic access policies based on real-time risk assessment

**Signals Evaluated**:
- User identity and location
- Device compliance
- Application type
- Real-time risk

**Outcomes**: Grant, deny, require additional verification

## Zero Trust Security Model

**Principles**:
1. **Verify Explicitly**: Always authenticate and authorize
2. **Use Least Privilege**: Grant minimum permissions
3. **Assume Breach**: Operate as if attackers are inside

**Concepts**:
- Just-In-Time (JIT) Access: Elevated permissions for limited time
- Just-Enough-Access (JAC): Only specific permissions needed

## Defense in Depth

Layered security approach - multiple defensive layers:

| Layer | Controls | Example |
|-------|----------|---------|
| Physical | Door locks, surveillance | Datacenter security |
| Perimeter | Firewalls, DDoS protection | Block malicious traffic |
| Network | NSGs, segmentation | Isolate resources |
| Compute | Antimalware, patching | Protect VMs |
| Application | Input validation | Prevent injection |
| Data | Encryption, access controls | Protect sensitive data |
| Identity | MFA, Conditional Access | Control who accesses what |

**Principle**: If one layer breached, others provide protection

---

# WEEK 4: Governance and Compliance

## Governance Fundamentals

**Definition**: Practices and tools for establishing and enforcing policies, managing resources consistently, maintaining compliance

**Why Important**:
- Ensures consistency in deployments
- Maintains compliance with regulations
- Prevents security vulnerabilities
- Controls costs
- Enforces organizational standards

## Azure Blueprints

**Purpose**: Orchestrate deployment of templates + policies + RBAC as reusable artifact

**Components**:
- ARM Templates (infrastructure)
- Azure Policy Assignments (compliance)
- RBAC Assignments (user permissions)
- Resource Groups (organization)
- Deployment order (sequencing)

**Lifecycle**: Draft → Published → Assigned → Updated

**Advantage**: Deploy complete standardized environments consistently

## Azure Policy

**Purpose**: Create rules across all Azure resources to enforce configurations

**Process**:
1. Define policy with rules
2. Assign to scope
3. Evaluate resources
4. Report compliance
5. Take action (deny, audit, remediate)

**Effects**:
- **Deny**: Block non-compliant deployments
- **Audit**: Log non-compliance, allow deployment
- **Append**: Add properties to resources
- **Modify**: Change resource properties
- **DeployIfNotExists**: Deploy if missing

**Built-in Policies**: 100+ pre-built policies available

**Custom Policies**: Create specific rules via JSON

## Resource Locks

**Purpose**: Prevent accidental deletion or modification

**Types**:
- **ReadOnly**: Prevent deletion AND modification
- **CanNotDelete**: Prevent deletion only

**Scope**: Subscription, resource group, or individual resource

**Important**: Locks apply regardless of permissions (even Owner can't bypass)

## Microsoft Purview

**Purpose**: Unified data governance service for discovering, understanding, managing data

**Capabilities**:
- Data discovery and classification
- Data lineage and catalog
- Data governance and lifecycle
- Compliance monitoring
- Data security and protection

**Use Cases**: GDPR compliance, data lakes, shadow IT detection, M&A

---

# WEEK 5: Management Tools

## Azure Portal

**Purpose**: Graphical user interface for managing Azure resources

**Strengths**: Easy to learn, visual, good for exploration

**Limitations**: Not ideal for large deployments, automation, version control

**Use Cases**: Learning, one-off tasks, troubleshooting

## PowerShell vs Azure CLI

| Aspect | PowerShell | Azure CLI |
|--------|-----------|----------|
| Platform | Windows-native | Cross-platform |
| Syntax | Object-oriented, cmdlets | Simple, command-based |
| Use Case | Complex automation | DevOps, straightforward tasks |
| Learning | Steeper curve | Easier |

## Azure Cloud Shell

**Purpose**: Browser-based shell without installation

**Features**:
- Pre-configured with CLI and PowerShell
- Automatically authenticated
- File persistence via Azure Storage
- Bash and PowerShell options

**Advantage**: No local installation, no maintenance

## Azure Arc

**Purpose**: Extend Azure management to on-premises and multi-cloud

**Key Feature**: Manage VMs anywhere (on-premises, AWS, GCP) from Azure

**Cost**: Free service (no additional charge)

**Benefit**: Unified management pane for hybrid/multi-cloud

## Infrastructure as Code (IaC)

**Definition**: Define infrastructure using code instead of manual deployment

**Benefits**:
- Consistency: Identical deployments every time
- Version control: Track all changes
- Repeatability: Redeploy easily
- Disaster recovery: Quick rebuilds
- Documentation: Code as documentation
- Testing: Validate before deployment

**Principle**: Idempotency - same code always produces same state

## ARM Templates

**Format**: JSON-based Infrastructure as Code

**Components**:
- `$schema`: Template version
- `contentVersion`: Template version number
- `parameters`: User inputs
- `variables`: Reusable values
- `resources`: Azure resources to deploy
- `outputs`: Return values

**Deployment**: Portal, CLI, PowerShell, CI/CD pipelines

---

# WEEK 6: Monitoring Tools

## Azure Monitor

**Purpose**: Unified platform for collecting, analyzing, and acting on telemetry data

**Components**:
- **Metrics**: Numerical performance data (CPU%, memory, etc.)
- **Logs**: Detailed events via Log Analytics
- **Application Insights**: Application performance monitoring
- **Alerts**: Notifications on conditions
- **Workbooks**: Interactive dashboards

**Benefit**: Centralized monitoring for all resources

## Azure Application Insights

**Purpose**: Application-specific performance monitoring (APM)

**Features**:
- End-to-end transaction tracing
- Performance monitoring
- Availability testing
- Dependency mapping
- Exception tracking
- User behavior analysis

**Use Cases**: Web app monitoring, API performance, microservice dependencies

## Azure Advisor

**Purpose**: Provide best practice recommendations

**Categories** (5):
1. **Cost**: Reduce spending, delete unused, right-size
2. **Security**: Enable MFA, firewalls, encryption
3. **Reliability**: Add redundancy, backups, auto-scale
4. **Performance**: Optimize speed, scale resources
5. **Operational Excellence**: Automation, monitoring, standards

**Feature**: Advisor Score (0-100) reflecting overall optimization

## Azure Service Health

**Purpose**: Monitor health and availability of Azure services

**Components**:
1. **Azure Status**: Global Azure service status
2. **Service Health**: Personalized to your resources
3. **Resource Health**: Individual resource status

**Notifications**: Incidents, maintenance, advisories

**Benefit**: Know how Azure platform issues affect YOUR resources

## Diagnostic Settings

**Purpose**: Configure where logs and metrics are routed

**Data Types**: Metrics, Logs, Activity Logs

**Destinations**:
- Azure Monitor Logs (query and analyze)
- Azure Storage (long-term archival)
- Event Hubs (real-time streaming)

**Use Cases**: Compliance archival, analysis, third-party integration

---

# WEEK 7: Cost Management

## Azure Cost Management and Billing

**Purpose**: Monitor, control, and optimize cloud spending

**Features**:
- Cost analysis
- Budget tracking
- Alerts
- Recommendations
- Multi-cloud support (Azure, AWS, GCP)

## Pricing Factors

### Free Services
- Resource Groups, VNet (up to 50), NSGs
- Load Balancer (basic), Azure AD (basic)
- Web Apps (free tier, up to 10)

### Billing Models

1. **Pay Per Execution**: Functions, Logic Apps
   - 1M free/month, then $0.20/million

2. **Pay for Time**: VMs, App Service
   - Charged per second while running
   - Billing stops when stopped
   - Cheapest VM ~$20/month

3. **Pay Per Capacity**: Reserved Instances
   - Fixed price for commitment
   - 1-year: 10-15% discount
   - 3-year: 25-35% discount

4. **Pay Per Data/Operations**: Storage, transactions
   - Outbound bandwidth most expensive
   - First 5GB free, then tiered

### Regional Pricing
- Different regions have different costs (20-40% variance)
- Premium tiers cost significantly more
- Availability zones have different pricing

## Pricing Calculator

**Purpose**: Estimate costs before deployment

**Features**:
- Multi-service estimation
- Regional pricing comparison
- Real-time pricing
- Export capability
- What-if scenarios

## Total Cost of Ownership (TCO)

**Purpose**: Compare on-premises vs Azure costs

**On-Premises Costs Include**:
- Hardware, software licenses
- Facilities, electricity, cooling
- Internet connectivity
- IT labor (setup and maintenance)
- Backup infrastructure

**Benefit**: Quantify migration savings and justify cloud adoption

## Resource Tags

**Purpose**: Organize resources and allocate costs

**Structure**: Key-value metadata (e.g., Environment:Production)

**Common Tags**:
- Environment (Prod/Dev/Test)
- Department (Finance/IT/Sales)
- CostCenter (budget code)
- Project (project name)
- Owner (contact person)

**Benefit**: Enable cost allocation and chargeback

**Best Practice**: Mandatory tagging policy

---

# QUICK REFERENCE TABLES

## Service Comparison Matrix

| Service | Type | Best For | Key Feature |
|---------|------|----------|------------|
| VMs | IaaS | Custom apps | Full OS control |
| App Service | PaaS | Web apps | No infra mgmt |
| Functions | Serverless | Events | Pay-per-execution |
| AKS | Managed | Microservices | Container orchestration |
| Blob Storage | Storage | Unstructured | Unlimited scale |
| SQL Database | PaaS DB | Relational | Managed |
| VNet | Networking | Isolation | Private network |
| Load Balancer | Networking | Distribution | Layer 4 balancing |

## Key Acronyms

- **IaaS**: Infrastructure as a Service
- **PaaS**: Platform as a Service
- **SaaS**: Software as a Service
- **FaaS**: Functions as a Service
- **AuthN**: Authentication
- **AuthZ**: Authorization
- **RBAC**: Role-Based Access Control
- **MFA**: Multi-Factor Authentication
- **VNet**: Virtual Network
- **NSG**: Network Security Group
- **VM**: Virtual Machine
- **VMSS**: Virtual Machine Scale Sets
- **ACI**: Azure Container Instances
- **AKS**: Azure Kubernetes Service
- **ARM**: Azure Resource Manager
- **IaC**: Infrastructure as Code
- **TCO**: Total Cost of Ownership
- **APM**: Application Performance Monitoring
- **CDN**: Content Delivery Network
- **WAF**: Web Application Firewall
- **JIT**: Just-In-Time
- **JAC**: Just-Enough-Access

---

# STUDY TIPS FOR MIDTERM EXAM

1. **Understand Core Concepts**: Know definitions clearly
2. **Service Selection**: Understand when to use each service
3. **Shared Responsibility**: Know who manages what in each service type
4. **Security Layering**: Understand defense in depth approach
5. **Cost Factors**: Know what affects pricing
6. **Practical Scenarios**: Be able to apply knowledge to situations
7. **Multiple Choice Strategy**: Eliminate obviously wrong answers
8. **Time Management**: Budget time appropriately

---

**Good luck on your midterm exam!** 💪

