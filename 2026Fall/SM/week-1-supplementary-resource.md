# Week 1 Supplementary Resource: Introduction to Cloud Computing and Azure Fundamentals

This supplementary resource complements the university course materials for **Week 1: Introduction to Cloud Computing and Azure**. All information is sourced from Microsoft Learn official training modules and Azure documentation, providing a comprehensive foundation for understanding cloud computing concepts and Azure platform architecture.

---

## 1. Cloud Computing Fundamentals

### 1.1 Definition and Core Concepts

**Cloud computing** is the on-demand delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet with a **pay-as-you-go** pricing model. This approach enables organizations to access IT resources flexibly without maintaining expensive physical infrastructure.

The fundamental value proposition of cloud computing consists of:
- **On-demand access**: Resources are available whenever needed
- **Scalability**: Resources can grow or shrink based on demand
- **Pay-as-you-use**: Organizations pay only for what they consume (OpEx model instead of CapEx)
- **Global accessibility**: Services are accessible from anywhere via the Internet

### 1.2 The Shared Responsibility Model

The **Shared Responsibility Model** is a critical concept in cloud computing that defines the division of security and management responsibilities between the cloud provider and the customer.

| Responsibility Area | On-Premises | IaaS | PaaS | SaaS |
|---|---|---|---|---|
| Data | Customer | Customer | Customer | Customer |
| Accounts & Access | Customer | Customer | Customer | Cloud Provider |
| Identity & Directory | Customer | Customer | Customer | Cloud Provider |
| Applications | Customer | Customer | Cloud Provider | Cloud Provider |
| Network Controls | Customer | Customer | Cloud Provider | Cloud Provider |
| Operating System | Customer | Customer | Cloud Provider | Cloud Provider |
| Physical Infrastructure | Customer | Cloud Provider | Cloud Provider | Cloud Provider |
| Physical Network | Customer | Cloud Provider | Cloud Provider | Cloud Provider |

**Key Principle**: As you move from IaaS to PaaS to SaaS, your management responsibilities decrease while the cloud provider's responsibilities increase.

---

## 2. Cloud Deployment Models

### 2.1 Public Cloud

**Definition**: A public cloud is shared infrastructure managed by a cloud service provider and available to the general public over the Internet.

**Characteristics**:
- Shared resources and infrastructure among multiple organizations
- Service provider manages all infrastructure, security, and updates
- Easily scalable and cost-effective (pay-per-use)
- Lower upfront costs
- Limited customization options

**Use Cases**:
- Web applications and APIs
- Development and testing environments
- Non-sensitive business applications
- Educational and research projects

**Examples**: Microsoft Azure (public cloud services), Amazon AWS, Google Cloud Platform

### 2.2 Private Cloud

**Definition**: A private cloud is dedicated infrastructure managed either on-premises or by a third party exclusively for a single organization.

**Characteristics**:
- Dedicated resources for a single organization
- Higher level of control and customization
- Enhanced security and compliance capabilities
- Higher operational and capital costs
- Greater management responsibility

**Use Cases**:
- Highly sensitive data and applications
- Industries with strict regulatory requirements (healthcare, finance)
- Organizations requiring extensive customization
- Mission-critical applications

### 2.3 Hybrid Cloud

**Definition**: A hybrid cloud combines public cloud and private cloud resources, allowing data and applications to be shared between them.

**Characteristics**:
- Flexibility to use public cloud for non-sensitive workloads
- Private cloud for sensitive data and regulated applications
- Can leverage benefits of both deployment models
- More complex to manage and secure
- Requires careful data governance

**Use Cases**:
- Organizations transitioning to cloud
- Applications with varying security requirements
- Burst capacity needs (use public cloud during peak demand)
- Regulatory compliance while utilizing cloud scalability

**Comparison Table**:

| Aspect | Public Cloud | Private Cloud | Hybrid Cloud |
|---|---|---|---|
| Cost | Lower | Higher | Medium |
| Setup Difficulty | Easy | Difficult | Very Difficult |
| Security | Provider-managed | Organization-managed | Mixed |
| Scalability | High | High | High |
| Customization | Limited | Extensive | Extensive |
| Compliance Support | Standard | Custom | Custom |

---

## 3. Cloud Service Types (Service Models)

### 3.1 Infrastructure as a Service (IaaS)

**Definition**: IaaS provides virtualized computing resources over the Internet, including virtual machines, storage, networking, and other fundamental computing resources.

**Customer Responsibility**:
- Applications
- Data
- Operating System
- Middleware
- Runtime

**Provider Responsibility**:
- Virtual machines
- Storage
- Networking infrastructure
- Servers
- Physical security

**Advantages**:
- Maximum flexibility and control
- Pay-per-use model
- Rapid scaling capabilities
- No need for physical infrastructure investment

**Disadvantages**:
- Requires technical expertise for management
- Higher operational responsibility
- Complex security configuration

**Use Cases**:
- Development and testing environments
- High-performance computing
- Big data analysis
- Web hosting

**Azure Examples**: Azure Virtual Machines, Azure Storage, Azure Networking

### 3.2 Platform as a Service (PaaS)

**Definition**: PaaS provides a managed platform for developing, running, and managing applications without dealing with underlying infrastructure.

**Customer Responsibility**:
- Applications
- Data

**Provider Responsibility**:
- Infrastructure
- Operating systems
- Middleware
- Development tools
- Database management

**Advantages**:
- Simplified application development
- Built-in development tools and services
- Automatic scaling and load balancing
- Reduced operational overhead
- Focus on business logic, not infrastructure

**Disadvantages**:
- Less control over infrastructure
- Vendor lock-in potential
- Limited customization options

**Use Cases**:
- Web application development
- API development and management
- Database hosting
- Business analytics and reporting

**Azure Examples**: Azure App Service, Azure SQL Database, Azure Cosmos DB, Azure Functions

### 3.3 Software as a Service (SaaS)

**Definition**: SaaS delivers fully managed software applications over the Internet on a subscription basis.

**Customer Responsibility**:
- Typically limited to user configuration and data input

**Provider Responsibility**:
- Infrastructure
- Operating systems
- Applications
- Maintenance and updates
- Security

**Advantages**:
- No installation or maintenance required
- Accessible from anywhere
- Automatic updates
- Lower initial cost
- Easy collaboration

**Disadvantages**:
- Minimal customization options
- Potential data privacy concerns
- Internet dependency
- Limited control over features

**Use Cases**:
- Email and productivity tools
- Customer relationship management (CRM)
- Collaboration platforms
- Human resources management

**Azure Examples**: Microsoft 365, Dynamics 365, Azure DevOps Services

### 3.4 Serverless Computing (Functions as a Service - FaaS)

**Definition**: Serverless computing allows you to run code without provisioning or managing servers. You deploy code, and the platform automatically manages the execution and scaling.

**Key Characteristics**:
- Event-driven execution
- Automatic scaling
- Pay-per-execution model
- Developers focus only on code logic
- Platform handles infrastructure and operational concerns

**Use Cases**:
- Real-time data processing
- Event-driven workflows
- Scheduled tasks
- API backends
- Image processing

**Azure Examples**: Azure Functions, Azure Logic Apps

---

## 4. Cloud Computing Benefits

### 4.1 High Availability and Reliability

**Definition**: The ability of a system to remain operational and accessible with minimal downtime.

**Implementation**: Azure provides:
- Service Level Agreements (SLAs) guaranteeing uptime (e.g., 99.99% for many services)
- Redundancy across multiple data centers
- Automatic failover mechanisms
- Disaster recovery capabilities

### 4.2 Scalability and Elasticity

**Scalability**: The ability to handle growing workloads by adding resources.
- **Vertical scaling**: Adding more power to existing resources (e.g., upgrading VM size)
- **Horizontal scaling**: Adding more instances of resources (e.g., adding more VMs)

**Elasticity**: The ability to automatically adjust resources based on current demand.
- Resources scale up during peak usage
- Resources scale down during low usage
- Cost-efficient pay-as-you-use model

**Implementation in Azure**:
- Virtual Machine Scale Sets for automatic scaling
- App Service auto-scaling rules
- Azure Kubernetes Service (AKS) automatic node scaling

### 4.3 Cost Efficiency

**Pay-as-You-Go Model**:
- No upfront capital expenditure (CapEx)
- Pay only for resources consumed (Operational expenditure - OpEx)
- Predictable monthly billing
- No investment in idle resources

**Cost Reduction Factors**:
- Eliminate data center maintenance and staffing costs
- Reduce power, cooling, and real estate expenses
- Leverage economies of scale provided by cloud providers
- Utilize reserved instances for long-term workloads

### 4.4 Security and Compliance

**Cloud Provider Responsibility**:
- Infrastructure security (physical and network)
- Encryption of data at rest and in transit
- Identity and access management
- Compliance certifications (ISO, SOC 2, HIPAA, etc.)

**Organization Responsibility** (per Shared Responsibility Model):
- Data protection and classification
- Access control policies
- Application-level security
- Regular security updates

**Azure Security Features**:
- Azure Security Center for threat detection
- Microsoft Defender for cloud protection
- Encryption using Azure Key Vault
- Network security with Azure Firewall
- Compliance with major standards (GDPR, HIPAA, FedRAMP, etc.)

### 4.5 Global Reach and Performance

**Global Infrastructure**:
- Azure operates in 60+ regions worldwide
- Multiple data centers in each region
- Content delivery networks (CDN) for low latency
- Ability to deploy applications closer to users

**Performance Benefits**:
- Reduced network latency for end users
- Better application responsiveness
- Improved user experience globally

### 4.6 Flexibility and Agility

**Benefits**:
- Quickly provision new resources without purchasing hardware
- Experiment with new technologies with minimal risk
- Rapidly scale to meet market demands
- Deploy applications in minutes instead of weeks
- Support for multiple programming languages and frameworks

---

## 5. Azure Global Datacenter Infrastructure

### 5.1 Regions

**Definition**: An Azure **region** is a geographical area containing one or more data centers with independent infrastructure.

**Current Global Presence**: Azure operates in 60+ regions across the globe, ensuring:
- Low latency for users in different geographical locations
- Data residency compliance for organizations in specific regions
- Redundancy and business continuity

**Region Selection Considerations**:
- **Proximity to users**: Select regions geographically close to your target users
- **Compliance requirements**: Choose regions within required data residency boundaries
- **Feature availability**: Not all Azure services are available in all regions
- **Pricing variations**: Some regions may have different pricing

**Examples of Azure Regions**:
- West Europe (Netherlands)
- East US (Virginia)
- Southeast Asia (Singapore)
- Australia East (Sydney)
- Central India (Pune)
- UK South (London)

### 5.2 Region Pairs

**Definition**: Azure **region pairs** are two regions within the same geography paired for disaster recovery purposes.

**Benefits of Region Pairs**:
- Automatic replication of certain services
- Prioritized recovery during outages
- Sequential updates to minimize downtime
- Data residency maintained within geography

**Examples**:
- East US paired with West US
- North Europe paired with West Europe
- Southeast Asia paired with East Asia

### 5.3 Availability Zones

**Definition**: **Availability Zones** are independent sets of data centers within a region, each with isolated power, cooling, and networking.

**Characteristics**:
- Separate datacenters within the same region
- Physically isolated from other zones
- Connected through high-speed networks
- Allow for zone-redundant deployments

**Benefits**:
- High availability for applications
- Protection against datacenter failures
- Improved disaster recovery capabilities
- Single-digit millisecond latency between zones

**Usage**: Deploying VMs across multiple availability zones ensures that if one zone fails, your application continues running on VMs in other zones.

---

## 6. Azure Resource Hierarchy and Management

### 6.1 Organizational Structure

Azure provides a hierarchical structure for organizing and managing cloud resources:

```
Azure Account (Subscription Provider)
    ↓
Management Group(s)
    ↓
Subscription(s)
    ↓
Resource Group(s)
    ↓
Resources
```

### 6.2 Management Groups

**Purpose**: Organization-level hierarchy for managing multiple subscriptions.

**Characteristics**:
- Support up to 6 levels of hierarchy below root
- Enable governance policies across multiple subscriptions
- Useful for large enterprises with many subscriptions

### 6.3 Subscriptions

**Definition**: A subscription is the primary billing and access control unit in Azure.

**Characteristics**:
- Billing boundary for resource usage
- Access control boundary using role-based access control (RBAC)
- One subscription is associated with one billing account
- Organizations can have multiple subscriptions

**Subscription Types**:
- **Pay-as-you-go**: Pay for resources consumed
- **Enterprise Agreement**: Volume licensing with discounts
- **Free Trial**: Limited free resources for evaluation
- **Student**: Free resources for eligible students

### 6.4 Resource Groups

**Definition**: A **Resource Group** is a logical container that holds related Azure resources for an Azure solution.

**Characteristics**:
- All resources must belong to a resource group
- Resources in a group share the same lifecycle
- Organization by project, environment, or department
- Easy management of multiple related resources

**Best Practices**:
- Group resources by project or application
- Keep development, testing, and production resources separate
- Use naming conventions for easy identification
- One resource group per application or project

### 6.5 Resources

**Definition**: Resources are individual Azure services and components (VMs, databases, storage accounts, etc.).

**Management**: Resources are managed within their parent resource group and can be organized using:
- **Tags**: Key-value pairs for categorization and cost tracking
- **Policies**: Governance rules to enforce standards
- **Role-Based Access Control (RBAC)**: Fine-grained permission management

---

## 7. Pricing Models and Cost Management

### 7.1 Consumption-Based Pricing

**Pay-as-You-Go Model**:
- Billed based on actual consumption
- Usage measured in various units (per hour, per GB, per execution, etc.)
- No minimum commitments
- Flexible but potentially unpredictable costs

### 7.2 Reserved Instances

**Benefits**:
- Up to 72% cost savings compared to pay-as-you-go
- One or three-year commitment periods
- Suitable for predictable, long-running workloads
- Unused reservations can be exchanged or refunded

### 7.3 Spot Instances

**Characteristics**:
- Discounted pricing (up to 90% savings)
- Can be interrupted when Azure needs capacity
- Best for non-critical, flexible workloads
- Suitable for batch processing and development environments

### 7.4 Cost Estimation and Optimization

**Azure Pricing Calculator**:
- Estimate costs for Azure services
- Compare different service tiers and options
- Export and share pricing estimates

**Cost Optimization Strategies**:
- Right-size resources to match actual needs
- Use reserved instances for stable workloads
- Implement autoscaling to avoid over-provisioning
- Monitor and analyze spending patterns
- Use cost alerts to monitor budget compliance
- Leverage free tier services when applicable

---

## 8. Key Comparison Tables

### Service Types Comparison

| Feature | IaaS | PaaS | SaaS | FaaS |
|---|---|---|---|---|
| Management | Most | Medium | Least | Minimal |
| Flexibility | High | Medium | Low | High (for code) |
| Cost | Medium-High | Medium | Low | Low (usage-based) |
| Development Speed | Slow | Fast | Very Fast | Very Fast |
| Customization | Extensive | Limited | Very Limited | Code-only |
| Ideal For | Control-focused | Developer-focused | User-focused | Event-driven |

### Deployment Models Comparison

| Aspect | Public | Private | Hybrid |
|---|---|---|---|
| Ownership | Cloud Provider | Organization | Shared |
| Cost | Lowest | Highest | Medium |
| Control | Limited | Maximum | High |
| Security | Provider-managed | Organization-managed | Complex |
| Compliance | Standard | Custom | Flexible |
| Best For | Cost-sensitive | Security-critical | Mixed workloads |

---

## 9. Azure Service Examples by Category

### Compute Services
- **Azure Virtual Machines (IaaS)**: Full OS control
- **Azure App Service (PaaS)**: Web app hosting
- **Azure Functions (FaaS)**: Serverless code execution
- **Azure Kubernetes Service (PaaS)**: Container orchestration

### Storage Services
- **Azure Blob Storage**: Unstructured data
- **Azure File Share**: Managed file storage
- **Azure Queue Storage**: Message queueing
- **Azure Table Storage**: NoSQL storage

### Database Services
- **Azure SQL Database (PaaS)**: Relational database
- **Azure Cosmos DB (PaaS)**: Global distributed database
- **Azure Database for MySQL/PostgreSQL (PaaS)**: Open-source databases

### Networking Services
- **Azure Virtual Network**: VPN and connectivity
- **Azure Load Balancer**: Traffic distribution
- **Azure Application Gateway**: Web traffic management
- **Azure CDN**: Content delivery

### AI and Analytics
- **Azure Machine Learning**: ML model development
- **Azure Cognitive Services**: AI capabilities
- **Azure Data Lake**: Big data analytics
- **Azure Synapse Analytics**: Data warehouse

---

## 10. Next Steps and Further Learning

To deepen your understanding of Azure cloud computing:

1. **Hands-on Exploration**: Create a free Azure account at azure.microsoft.com/free
2. **Microsoft Learn Modules**: Complete official training modules for each service
3. **Azure Certification**: Work toward Microsoft Azure Fundamentals (AZ-900) certification
4. **Practice Labs**: Use Azure sandbox environments for risk-free experimentation
5. **Community Resources**: Engage with Azure community forums and documentation

---

**Note**: This resource is current as of November 2025 and based on official Microsoft Azure documentation and training materials. Azure services and features are continuously updated; refer to Microsoft Learn for the latest information.