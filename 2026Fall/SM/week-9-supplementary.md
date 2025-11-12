# Week 9: Azure Core Services - Q&A Review

## Overview

Week 9 provides comprehensive Q&A review of Azure Core Services covering Compute, Networking, and Storage services from Week 2. This resource consolidates key service purposes, use cases, and scenario-based questions to prepare for exams.

---

## 1. Azure Compute Services - Q&A Review

### Virtual Machines (VMs)

**Primary Purpose**: Run virtualized servers in the cloud with full control over operating system and configuration

**Key Characteristics**:
- Full OS control (Windows or Linux)
- IaaS service model
- Pay-per-second billing
- Ideal for custom workloads, migrations

**Common Scenarios**:
- Lift-and-shift migrations from on-premises
- Applications requiring specific OS configurations
- Development and testing environments
- High-performance computing workloads

---

### Virtual Machine Scale Sets (VMSS)

**Primary Purpose**: Deploy and manage group of identical, load-balanced virtual machines with automatic scaling

**Key Features**:
- Uniform configuration for all VMs
- Automatic scaling based on demand
- Up to 1,000 VMs per scale set
- Load balancing across instances

**Common Scenarios**:
- Web applications with variable traffic
- Batch processing jobs
- CI/CD testing environments
- Stateless application workloads

---

### App Service

**Primary Purpose**: Host and scale web applications without managing underlying infrastructure (PaaS)

**Key Characteristics**:
- PaaS service model
- Automatic OS patching and updates
- Built-in CI/CD integration
- Supports multiple programming languages
- Auto-scaling capability

**Common Scenarios**:
- Web application hosting
- REST API deployment
- Mobile application backends
- Rapid web app development

**Question Example**: TechCo wants to deploy web application without managing infrastructure. Which service?
**Answer**: **Azure App Service** - PaaS service handling infrastructure management

---

### Azure Container Instances (ACI)

**Primary Purpose**: Quickly run containers without provisioning servers

**Key Characteristics**:
- Fast container startup (seconds)
- Per-second billing
- No server management
- Lightweight deployments

**Common Scenarios**:
- Container testing
- Batch processing
- CI/CD pipelines
- Short-lived workloads

---

### Azure Kubernetes Service (AKS)

**Primary Purpose**: Deploy and manage containerized applications at scale using Kubernetes orchestration

**Key Characteristics**:
- Managed Kubernetes service
- Auto-scaling pods and nodes
- Self-healing and rollouts
- Production-grade container orchestration

**Common Scenarios**:
- Microservices architectures
- Complex containerized applications
- Multi-tenant applications
- Large-scale deployments

**Question Example**: TechStart adopts microservices and needs container orchestration. Which service?
**Answer**: **Azure Kubernetes Service (AKS)** - Manages containerized workloads efficiently

---

### Azure Functions

**Primary Purpose**: Run code in response to events without provisioning or managing servers (Serverless)

**Key Characteristics**:
- Event-driven execution
- Pay-per-execution model
- No server management
- 1 million free executions/month
- $0.20 per million additional executions

**Common Scenarios**:
- Real-time data processing
- Event-triggered workflows
- Scheduled tasks
- API backends
- File processing

**Question Example**: HealthcareCo wants serverless code execution triggered by events. Which service?
**Answer**: **Azure Functions** - Executes code in serverless environment, triggered by events

---

### Windows Virtual Desktop

**Primary Purpose**: Provide cloud-based Windows desktop accessible from any location

**Key Characteristics**:
- Full Windows 10/11 desktop experience
- Multi-user sessions (cost-effective)
- GPU support available
- Secure remote access
- BYOD support

**Common Scenarios**:
- Remote work enablement
- Specialized workstations (design, engineering)
- Secure desktop access
- Temporary workforce provisioning

---

## 2. Azure Networking Services - Q&A Review

### Azure Virtual Network (VNet)

**Primary Purpose**: Create private, isolated networks in the cloud for resource communication

**Key Components**:
- Address space (e.g., 10.0.0.0/16)
- Subnets for segmentation
- Network Security Groups (NSGs) for firewall rules
- Network Interface Cards (NICs) for resource connectivity

**Key Features**:
- Logical isolation
- Service endpoints for Azure service access
- Private endpoints for restricted access
- Route tables for custom routing

**Common Scenarios**:
- Multi-tier application architecture
- Hybrid connectivity with on-premises
- Complete network isolation for compliance

**Question Example**: ManufactureCo connects on-premises datacenter to Azure securely. Which service?
**Answer**: **Azure Virtual Network** - Creates private, isolated networks with secure connections

---

### Azure Virtual Network Peering

**Primary Purpose**: Enable communication between Azure Virtual Networks in the same region without internet traversal

**Key Characteristics**:
- Private, low-latency connectivity
- No internet traffic
- Supports multi-region (Global Peering)
- Secure and direct connection

**Common Scenarios**:
- Multi-region application architecture
- Connected development and production networks
- Centralized management network
- Resource sharing across organizational units

**Question Example**: GlobalCorp operates in multiple regions, needs VNet communication. Which service?
**Answer**: **Azure Virtual Network peering** - Enables seamless communication between VNets without internet

---

### VPN Gateway

**Primary Purpose**: Create encrypted connections between on-premises networks and Azure VNets over public internet

**Key Characteristics**:
- Encrypted IPsec tunnels
- Site-to-site or point-to-site connections
- Uses public internet (less reliable, lower cost)
- Typical bandwidth: 100-1000 Mbps

**Common Scenarios**:
- Cost-effective hybrid connectivity
- Remote user VPN access
- Backup connectivity links

---

### ExpressRoute

**Primary Purpose**: Establish dedicated private network connection to Azure without internet traversal

**Key Characteristics**:
- Private dedicated link (no internet)
- High reliability and low latency
- Bandwidth: 50 Mbps to 100 Gbps
- Premium pricing
- Guarantees SLA

**Common Scenarios**:
- Mission-critical applications
- Large data transfers
- Consistent, predictable performance
- Regulated industries (healthcare, finance)

---

### DDoS Protection

**Primary Purpose**: Protect Azure resources from Distributed Denial of Service attacks

**Types**:
- **Basic**: Automatic, included with Azure
- **Standard**: Enhanced protection, DDoS alerts, real-time monitoring

**Common Scenarios**:
- Public-facing web applications
- E-commerce sites
- Applications under frequent attacks

---

### Azure Firewall

**Primary Purpose**: Centralized network security management and traffic filtering

**Key Features**:
- Layer 7 (application-level) filtering
- Threat intelligence
- URL filtering
- Centralized policy management

**Common Scenarios**:
- Hub-and-spoke network architecture
- Centralized security policies
- East-West traffic inspection

---

### Network Security Groups (NSGs)

**Primary Purpose**: Filter network traffic to/from Azure resources using firewall rules

**Key Characteristics**:
- Subnet-level or NIC-level application
- Inbound/outbound rules
- Priority-based rule evaluation
- Stateful filtering

**Common Scenarios**:
- Basic network security
- Resource-level access control
- Simple traffic filtering

---

### Load Balancer

**Primary Purpose**: Distribute incoming network traffic across backend servers

**Types**:
- **Public**: Balances internet traffic to VMs
- **Internal**: Balances traffic within VNet

**Key Components**:
- Frontend IP configuration
- Backend pool
- Health probes
- Load balancing rules

**Common Scenarios**:
- High-availability web applications
- Database load balancing
- Multi-instance application scaling

---

### Application Gateway

**Primary Purpose**: Layer 7 (application-level) load balancing with advanced routing capabilities

**Key Features**:
- URL-based routing
- Hostname-based routing
- Web Application Firewall (WAF)
- SSL/TLS offloading
- Session affinity

**Common Scenarios**:
- Microservices routing
- API gateway scenarios
- Applications requiring WAF protection
- Multi-site hosting

---

### Content Delivery Network (CDN)

**Primary Purpose**: Globally distribute static content from edge servers for reduced latency

**Key Benefits**:
- Reduced latency (content served from nearest edge)
- Decreased origin server load
- Improved user experience
- Global reach with 200+ edge locations

**Common Scenarios**:
- Static website content
- Video streaming
- Large file downloads
- Real-time media

---

### Azure Front Door

**Primary Purpose**: Global load balancing and DDoS protection at edge locations

**Key Features**:
- Global anycast routing
- Session affinity
- Backend health probes
- SSL/TLS termination
- Built-in DDoS protection

**Common Scenarios**:
- Global web application distribution
- Multi-region failover
- Performance optimization

---

### Network Watcher

**Primary Purpose**: Monitor, diagnose, and troubleshoot network connectivity and performance

**Key Capabilities**:
- Network traffic visualization
- Packet capture
- Connection troubleshooter
- Flow logs

**Common Scenarios**:
- Network performance troubleshooting
- Connectivity diagnosis
- Network behavior analysis

---

## 3. Azure Storage Services - Q&A Review

### Azure Blob Storage

**Primary Purpose**: Store and manage unstructured data (documents, images, videos, logs, backups)

**Key Characteristics**:
- Object storage (unlimited scalability)
- Access tiers: Hot (frequent), Cool (infrequent), Archive (rare)
- Lifecycle management
- Versioning and soft delete support

**Blob Types**:
- **Block Blob**: Optimized for streaming
- **Append Blob**: Optimized for append operations
- **Page Blob**: Optimized for VHD files

**Common Scenarios**:
- Backup and disaster recovery
- Media streaming
- Data lakes for analytics
- Big data storage

**Question Example**: MediaCorp stores large video/audio files. Which service?
**Answer**: **Azure Blob Storage** - Provides scalable, cost-effective object storage

**Question Example**: What's Blob Storage's primary purpose?
**Answer**: **Store and manage unstructured data**

---

### Azure Disk Storage (Managed Disks)

**Primary Purpose**: Provide persistent storage volumes attached to virtual machines

**Disk Types**:
- **Standard HDD**: Cost-effective for non-critical workloads
- **Standard SSD**: Balanced performance and cost
- **Premium SSD**: High-performance for production
- **Ultra SSD**: Extreme performance for mission-critical

**Key Benefits**:
- Automated management (no storage accounts)
- 99.99% uptime SLA
- Snapshots and backup capabilities
- Built-in encryption

**Common Scenarios**:
- VM OS and data storage
- Database hosting
- Cache storage

---

### Azure File Storage (Azure Files)

**Primary Purpose**: Provide managed SMB file shares accessible from multiple machines

**Key Characteristics**:
- SMB 3.0 protocol support
- Cross-platform (Windows, Linux, macOS)
- Standard and Premium tiers
- Azure File Sync for hybrid scenarios

**Common Scenarios**:
- Lift-and-shift of on-premises file servers
- Multi-machine shared access
- Application configuration files
- Hybrid file storage (on-premises + cloud)

---

### Azure File Sync

**Primary Purpose**: Synchronize files between on-premises file servers and Azure Files seamlessly

**Key Features**:
- Bidirectional sync
- Local caching for performance
- Automatic tiering based on access patterns
- Scalable hybrid file sharing

**Common Scenarios**:
- Extending on-premises storage to cloud
- Disaster recovery for file shares
- Gradual cloud migration
- Seamless file-sharing solution

**Question Example**: EnterpriseX extends on-premises file server to Azure. Which service?
**Answer**: **Azure File Sync** - Synchronizes file servers with Azure Files

---

### Storage Tiers

| Tier | Access Pattern | Cost | Latency | Best For |
|------|----------------|------|---------|----------|
| **Hot** | Frequent access | High storage, low retrieval | Milliseconds | Active data, frequent use |
| **Cool** | Infrequent access | Low storage, high retrieval | Milliseconds | 30+ days infrequent access |
| **Archive** | Rare access | Lowest storage, highest retrieval | Hours | 180+ days rare access, compliance |

**Lifecycle Management**: Automatically move data between tiers based on age and access patterns

---

### AzCopy

**Primary Purpose**: Transfer data to/from Azure Storage at scale

**Key Features**:
- Command-line tool
- Supports blob, file, table storage
- Resume capability
- High-performance data transfer

**Common Scenarios**:
- Bulk data migration to Blob Storage
- Backup automation
- On-premises to Azure data transfer

**Question Example**: What's AzCopy's primary role?
**Answer**: **Transfer data to/from Azure Blob Storage** - High-performance migration tool

---

### Azure Migrate

**Primary Purpose**: Discover, assess, and migrate on-premises virtual machines to Azure

**Key Capabilities**:
- VM discovery and inventory
- Compatibility assessment
- Dependency mapping
- Cost estimation
- Migration orchestration
- Post-migration validation

**Supported Scenarios**:
- Hyper-V VMs
- VMware VMs
- Physical servers
- AWS instances

**Common Scenarios**:
- Datacenter migration
- Decommissioning on-premises infrastructure
- Cloud-first strategy implementation
- Disaster recovery planning

**Question Example**: TechSolutions migrates on-premises VMs. Which service assists?
**Answer**: **Azure Migrate** - Discovers, assesses, and performs smooth migration

---

## 4. Service Comparison Q&A

### Storage Services Comparison

| Service | Data Type | Protocol/Access | Scalability | Best For |
|---------|-----------|-----------------|-------------|----------|
| **Blob Storage** | Unstructured | HTTP/REST | Petabytes | Media, backups, data lakes |
| **Disk Storage** | VM volumes | Block device | 64 TB/disk | VMs, databases |
| **File Storage** | Shared files | SMB | Multi-machine | File sharing, lift-and-shift |
| **Table Storage** | NoSQL | REST | Scale-out | Non-relational data, IoT |

---

### Networking Services Categorization

**Connectivity Services**: VNet, VPN Gateway, ExpressRoute, DNS
**Protection Services**: DDoS Protection, Firewall, NSGs
**Delivery Services**: Load Balancer, Application Gateway, CDN, Front Door
**Monitoring Services**: Network Watcher, ExpressRoute Monitor, Azure Monitor

---

### Compute Services by Use Case

| Use Case | Service | Model |
|----------|---------|-------|
| **Full control, OS-level** | Virtual Machines | IaaS |
| **Scalable web apps** | App Service | PaaS |
| **Container orchestration** | AKS | Managed |
| **Quick container runs** | Container Instances | Lightweight |
| **Serverless code** | Functions | Serverless |
| **Remote desktop** | Virtual Desktop | DaaS |

---

## 5. Key Takeaways for Exam Preparation

### Always Remember
- **IaaS (VMs)**: Customer manages OS, apps, data
- **PaaS (App Service)**: Customer manages apps, data only
- **SaaS**: Provider manages everything
- **Serverless (Functions)**: Code without servers

### Service Selection Process
1. **Storage Need**: Unstructured data → Blob Storage; Structured → SQL Database; Files → Azure Files
2. **Compute Need**: Custom app → VMs; Web app → App Service; Containers → AKS; Events → Functions
3. **Network Need**: Connectivity → VNet; Performance → Load Balancer; Global → Front Door; Security → Firewall

### Common Exam Patterns
- "Which service is suitable for **[use case]**?"
- "What's the **primary purpose** of **[service]**?"
- "**[Company] wants [requirement]**. Which service?"
- Scenario-based questions testing service selection

---

**Reference**: All content based on Week 9 Q&A review of Azure Core Services, covering Week 2 material in examination format.
