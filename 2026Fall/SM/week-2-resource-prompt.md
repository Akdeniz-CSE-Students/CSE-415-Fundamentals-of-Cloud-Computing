# Week 2: Azure Core Services - Supplementary Resource

---

## PART 1: SUPPLEMENTARY RESOURCE (English)

### Week 2 Supplementary Resource: Azure Core Services

This document complements the university course materials for **Week 2: Azure Core Services**. All information is sourced from Microsoft Learn official training modules, providing a comprehensive foundation for understanding Azure Compute, Networking, and Storage services.

---

#### 1. Azure Compute Services

**Definition**: Compute services enable you to run applications and workloads in the cloud. Azure offers multiple compute options to suit different requirements.

##### 1.1 Virtual Machines (IaaS)

**Overview**: Azure Virtual Machines provide on-demand, scalable computing with Windows or Linux operating systems. You have full control over OS configuration and installed software.

**Key Characteristics**:

- Full OS control (Windows or Linux)
- Customizable hardware specifications (vCPUs, memory, storage)
- Pay-per-hour pricing
- Suitable for lift-and-shift migrations from on-premises

**Use Cases**:

- Running custom applications requiring specific OS configuration
- Development and test environments
- Legacy application hosting
- High-performance computing (HPC) workloads

**Resource Requirements**:

- Virtual Network (VNet) for network connectivity
- Storage account or Managed Disks for OS and data storage
- Network Interface Card (NIC) for networking
- Optional: Public IP for internet access

---

##### 1.2 Virtual Machine Scale Sets (VMSS)

**Definition**: VMSS allows you to deploy and manage a group of identical, load-balanced virtual machines. The number of instances automatically adjusts based on demand.

**Key Features**:

- Automatic scaling up to 1,000 VMs (or up to 10,000 with Compute Fleet)
- Load balancing across instances
- Uniform configuration for all VMs in the set
- Fault domain distribution for high availability

**How It Works**:

1. Define a VM template with OS and configuration
2. Specify minimum, maximum, and desired instance count
3. Configure autoscaling rules (CPU, memory, custom metrics)
4. VMSS automatically creates/deletes VMs based on demand

**Advantages**:

- Automatic elasticity reduces operational overhead
- Improved availability through distribution
- Simplified management of multiple VMs
- Cost-effective for variable workloads

**Common Use Cases**:

- Web applications with varying traffic
- Batch processing jobs
- CI/CD pipelines with dynamic testing
- Real-time data processing

---

##### 1.3 App Service (PaaS)

**Definition**: Azure App Service is a fully managed platform for building and hosting web apps, REST APIs, and mobile back-ends.

**Key Characteristics**:

- Platform as a Service (PaaS) - focus on code, not infrastructure
- Automatic OS patching and updates
- Built-in CI/CD integration
- Supports multiple programming languages (Node.js, Python, Java, .NET, PHP, Ruby)
- Auto-scaling capability
- Integrated authentication and security

**Service Tiers**:

- **Free/Shared**: Low-cost, for development
- **Basic**: Single instance, manual scaling
- **Standard**: Multiple instances, autoscaling, custom domains
- **Premium**: Advanced features, dedicated resources
- **Isolated**: Complete isolation and maximum performance

**Deployment Options**:

- Direct Git/GitHub integration
- FTP upload
- Azure DevOps CI/CD pipelines
- Docker containers (with App Service on Linux)

**Suitable For**:

- Web applications (ASP.NET, Node.js, Python, etc.)
- REST and GraphQL APIs
- Real-time applications with WebSockets
- Mobile application back-ends
- Serverless business logic

---

##### 1.4 Azure Container Instances (ACI)

**Definition**: Quickly run containers without provisioning servers. Pay only for the compute resources you use.

**Key Features**:

- Fast container startup (seconds, not minutes)
- Per-second billing
- Supports both Linux and Windows containers
- Simple deployment via Azure portal or CLI
- Suitable for batch jobs, testing, and CI/CD

**When to Use ACI**:

- Quick container deployments without complexity
- Batch processing or event-driven workloads
- Container testing and validation
- Microservices requiring fast scaling

**Limitations**:

- No built-in load balancing or automatic scaling
- Single container or container group deployment
- Better for lightweight workloads

---

##### 1.5 Azure Kubernetes Service (AKS)

**Definition**: Managed Kubernetes service for deploying and managing containerized applications at scale.

**Key Benefits**:

- Kubernetes cluster management simplified
- Auto-scaling pods and nodes based on demand
- Self-healing and automatic rollouts/rollbacks
- Integrated with Azure Container Registry (ACR)
- Built-in security and compliance
- Integrated with Azure DevOps for CI/CD

**Architecture**:

- **Control Plane**: Managed by Azure (free)
- **Worker Nodes**: Your VMs running containers
- **Pods**: Smallest deployable units (one or more containers)
- **Services**: Expose pods to network traffic

**Use Cases**:

- Large-scale containerized applications
- Microservices architectures
- Multi-tenant applications
- Complex stateful and stateless workloads
- IoT applications

---

##### 1.6 Azure Virtual Desktop

**Definition**: Cloud-based Windows desktop experience accessible from any device, location, or network.

**Key Features**:

- Full Windows 10/11 desktop in the cloud
- Multi-user sessions (cost-effective)
- Seamless application and desktop delivery
- Built-in security and compliance
- GPU support for graphics-intensive applications

**Deployment Models**:

- **Pooled**: Multiple users per VM (cost-effective)
- **Personal**: Dedicated VM per user (persistent desktop)

**Use Cases**:

- Remote work and BYOD scenarios
- Specialized workstations (design, engineering)
- High-security environments requiring centralized desktop management
- Temporary workforce access

---

#### 2. Azure Networking Services

**Definition**: Networking services provide connectivity, isolation, and security for your Azure resources.

##### 2.1 Azure Virtual Network (VNet)

**Definition**: Logically isolated network environment in Azure where you provision compute and storage resources.

**Core Components**:

- **Address Space**: IP address range (e.g., 10.0.0.0/16)
- **Subnets**: Subdivisions of the address space (e.g., 10.0.1.0/24)
- **Network Security Groups (NSGs)**: Firewall rules controlling inbound/outbound traffic
- **Network Interface Cards (NICs)**: Connect VMs to subnets

**Key Capabilities**:

- Multiple subnets for resource organization
- Service endpoints for accessing Azure services securely
- Private endpoints for restricted access
- Route tables for custom routing logic

**Networking Scenarios**:

- Multi-tier application architecture (web, application, database tiers)
- Hybrid connectivity with on-premises networks
- Complete network isolation for compliance

---

##### 2.2 VNet Peering

**Definition**: Direct connection between two Azure Virtual Networks for private communication.

**Characteristics**:

- No internet traversal (private, secure)
- Supports peering across regions (Global Peering)
- Low latency and high bandwidth
- Traffic encrypted between networks

**Use Cases**:

- Connecting development and production networks
- Multi-region application architecture
- Centralized management network
- Resource sharing across organizational units

**Benefits**:

- Simple, secure connectivity
- No redundancy or complexity compared to VPN
- No additional infrastructure needed

---

##### 2.3 VPN Gateway & ExpressRoute

**VPN Gateway**:

- Encrypted connection between on-premises networks and Azure VNet
- Uses public internet (less reliable, lower cost)
- Supports site-to-site (network-to-network) and point-to-site (client-to-network) VPNs
- Typical latency: higher than private connections

**ExpressRoute**:

- Dedicated private connection to Azure
- Does not traverse public internet
- High reliability and low latency
- Higher cost but guaranteed performance
- Ideal for mission-critical applications

**Comparison**:
| Feature | VPN Gateway | ExpressRoute |
|---------|-------------|--------------|
| Connectivity | Public Internet | Private Dedicated Link |
| Bandwidth | Typically 100-1000 Mbps | 50 Mbps to 100 Gbps |
| Latency | Variable | Consistent and low |
| Cost | Lower | Higher |
| Setup Time | Quick | 1-3 months |
| Reliability | Standard | Premium SLA |

---

##### 2.4 Public and Private Endpoints

**Public Endpoint**:

- Azure resource accessible over the internet
- Requires proper authentication and authorization
- Examples: Azure SQL Database, Storage Account with public access

**Private Endpoint**:

- Azure resource accessible only within a VNet or via private connection
- No internet exposure
- Uses private IP addresses
- Enhanced security for sensitive resources

**Private Endpoint Benefits**:

- Prevents data exfiltration
- Complies with data residency requirements
- Eliminates internet exposure attack surface
- Works seamlessly within hybrid networks

---

##### 2.5 Load Balancer

**Definition**: Distributes incoming network traffic across backend virtual machines or scale sets.

**Two Variants**:

**Public Load Balancer**:

- Balances inbound internet traffic to VMs
- Translates private IPs to public IPs for outbound traffic
- Layer 4 (Transport Layer) operation

**Internal (Private) Load Balancer**:

- Balances traffic within a VNet
- Supports hybrid scenarios (on-premises to Azure)
- No internet exposure

**Key Components**:

- **Frontend IP Configuration**: Receives incoming traffic
- **Backend Pool**: VMs receiving load-balanced traffic
- **Health Probes**: Monitors VM health
- **Load Balancing Rules**: Defines traffic forwarding logic
- **Inbound NAT Rules**: Port forwarding for direct VM access

**Use Cases**:

- High-availability web applications
- Database load balancing
- API gateway scenarios
- Stateless application scaling

---

##### 2.6 Application Gateway

**Definition**: Layer 7 (Application Layer) load balancer providing advanced routing and Web Application Firewall (WAF).

**Key Features Beyond Load Balancer**:

- URL-based routing (route based on URL path)
- Hostname-based routing (route based on domain)
- Cookie-based session affinity
- SSL/TLS offloading
- Web Application Firewall for DDoS and SQL injection protection
- Multi-site hosting

**When to Use**:

- Microservices with different routing requirements
- APIs requiring advanced request routing
- Applications needing WAF protection
- SSL certificate management for multiple sites

---

##### 2.7 Content Delivery Network (CDN)

**Definition**: Globally distributed network of edge servers caching content closer to users.

**How It Works**:

1. User requests content (e.g., image, video)
2. Request routed to nearest CDN edge location
3. If cached, content served immediately
4. If not cached, CDN fetches from origin and caches it
5. Future requests from nearby users served from edge

**Performance Benefits**:

- Reduced latency (content served from nearby edge server)
- Decreased bandwidth costs (less origin server load)
- Improved user experience (faster content delivery)
- Global reach (content available worldwide)

**Use Cases**:

- Static website content (images, CSS, JavaScript)
- Video streaming
- Large file downloads
- Real-time media

---

#### 3. Azure Storage Services

**Definition**: Scalable, secure, cloud-based data storage for any type of data.

##### 3.1 Storage Account

**Definition**: Unique namespace in Azure for all your storage data. Entry point for Azure Storage services.

**Account Types**:

- **General-purpose v2 (GPv2)**: Recommended for most scenarios (Blob, File, Queue, Table)
- **General-purpose v1**: Legacy, for backward compatibility
- **Blob Storage**: Optimized for unstructured data
- **File Storage**: Optimized for Azure Files

**Redundancy Options**:

- **LRS (Locally Redundant Storage)**: Three copies within single datacenter (~99.99% durability)
- **ZRS (Zone-Redundant Storage)**: Three copies across three availability zones (~99.99% durability)
- **GRS (Geo-Redundant Storage)**: LRS + replica in paired region (~99.99999999% durability)
- **RA-GRS (Read-Access Geo-Redundant)**: GRS + read access to replica

**Performance Tiers**:

- **Standard**: Cost-effective for most workloads
- **Premium**: High performance for latency-sensitive applications

---

##### 3.2 Blob Storage

**Definition**: Object storage for unstructured data like documents, images, videos, logs, and backups.

**Blob Types**:

- **Block Blob**: Optimized for streaming and uploads (recommended for most scenarios)
- **Append Blob**: Optimized for append operations (logs)
- **Page Blob**: Optimized for random read/write (VHD files for VMs)

**Access Tiers**:

- **Hot**: Frequently accessed data, lowest latency, highest storage cost
- **Cool**: Infrequently accessed, slightly higher latency, lower cost (minimum 30 days retention)
- **Archive**: Rarely accessed, highest latency (hours to retrieve), lowest cost (minimum 180 days retention)

**Benefits**:

- Unlimited scalability (petabytes of data)
- Cost-effective for large datasets
- Lifecycle management (automatically move data between tiers)
- Data redundancy options

**Use Cases**:

- Backup and disaster recovery
- Media streaming
- Data lakes for analytics
- Big data storage

---

##### 3.3 Disk Storage (Managed Disks)

**Definition**: Persistent storage volumes attached to virtual machines.

**Key Advantages of Managed Disks**:

- Simplified management (Azure handles storage accounts)
- High availability (99.99% uptime SLA)
- Snapshot and backup capabilities
- Disk encryption built-in
- Supports Up to 64 TB per disk (with Ultra Disk)

**Disk Types**:

- **Standard HDD**: Cost-effective for non-critical workloads
- **Standard SSD**: Balanced price/performance
- **Premium SSD**: High performance for production workloads
- **Ultra SSD**: Extreme performance for mission-critical applications

**Use Cases**:

- VM OS and data storage
- Database hosting
- Cache storage for applications

---

##### 3.4 Azure Files

**Definition**: Managed file shares in the cloud accessible via SMB (Server Message Block) protocol.

**Key Features**:

- SMB 3.0 protocol support (Windows, Linux, macOS)
- Supports both standard and premium tiers
- Encryption at rest and in transit
- Azure File Sync for hybrid scenarios

**File Share Quotas**:

- Standard tier: Up to 100 TB per share
- Premium tier: Up to 100 TB per share

**Use Cases**:

- Lift-and-shift of on-premises file servers
- Multi-machine access to shared data
- Application configuration files
- Shared logging and diagnostics

**Hybrid Scenario** (Azure File Sync):

- Sync Azure Files with on-premises file servers
- Local caching for performance
- Automatic tiering based on access patterns

---

##### 3.5 Data Redundancy and Replication

**Redundancy Within Region**:

- **LRS**: Protects against hardware failures within a single datacenter
- **ZRS**: Protects against entire zone failure

**Redundancy Across Regions**:

- **GRS/RA-GRS**: Automatic failover to secondary region during outage
- **GZRS/RA-GZRS**: Combines zone and geo redundancy for maximum protection

**Recovery Objectives**:

- **RPO (Recovery Point Objective)**: How much data loss is acceptable (typically minutes)
- **RTO (Recovery Time Objective)**: How quickly you need to recover (typically hours)

---

#### 4. Service Comparison Table

| Service          | Type                 | Use Case                              | Scalability              |
| ---------------- | -------------------- | ------------------------------------- | ------------------------ |
| Virtual Machines | IaaS                 | Custom workloads, legacy apps         | Manual or VMSS           |
| App Service      | PaaS                 | Web apps, APIs                        | Automatic                |
| Azure Functions  | Serverless           | Event-driven, short-running tasks     | Automatic                |
| ACI              | Containers           | Quick container deployment            | Limited                  |
| AKS              | Containers           | Microservices, complex orchestration  | Automatic (pods & nodes) |
| Virtual Desktop  | Desktop as a Service | Remote work, specialized workstations | User-based               |

---

#### 5. Networking Service Comparison

| Service             | Purpose                   | Connectivity Type       | Best For                  |
| ------------------- | ------------------------- | ----------------------- | ------------------------- |
| VNet                | Isolation & segmentation  | Internal                | Multi-tier applications   |
| VNet Peering        | Direct network connection | Private, low-latency    | Connected applications    |
| VPN Gateway         | Hybrid connectivity       | Encrypted over internet | Cost-effective hybrid     |
| ExpressRoute        | Dedicated connection      | Private dedicated link  | Mission-critical hybrid   |
| Load Balancer       | Traffic distribution      | Layer 4                 | High-availability apps    |
| Application Gateway | Advanced routing          | Layer 7                 | Complex routing, security |
| CDN                 | Content delivery          | Global edge locations   | Static content, video     |

---

#### 6. Storage Service Comparison

| Service       | Data Type    | Access Method | Scalability          |
| ------------- | ------------ | ------------- | -------------------- |
| Blob Storage  | Unstructured | HTTP/REST     | Petabytes            |
| Disk Storage  | VM volumes   | Block storage | 64 TB per disk       |
| Azure Files   | Shared files | SMB protocol  | Multi-machine access |
| Queue Storage | Messages     | REST API      | Event-driven         |
| Table Storage | NoSQL        | REST API      | Scale-out workloads  |

---

**Note**: This resource is current as of November 2025 and based on official Microsoft Azure documentation. For the latest information, consult [Microsoft Learn Azure Training](https://learn.microsoft.com/en-us/training/azure/).

---

---

## PART 2: VIDEO CREATION PROMPT (NotebookLM)

**Copy-paste the entire text below into NotebookLM's video creation tool, selecting both your Week 2 PDF and the above markdown resource as sources:**

```
Üniversite düzeyinde "Cloud Computing Fundamentals" dersi veren bir öğretmen 
rolünde, aşağıdaki özelliklerle kapsamlı bir video dersi oluştur:

LANGUAGE & TERMINOLOGY REQUIREMENTS:
- Tüm anlatım TÜRKÇEdir.
- FAKAT: Bütün teknik terimler, kavramlar, servis isimleri ve kavram adları 
  MUTLAKa İNGİLİZCEdir.
- Örn: "Virtual Machine", "Virtual Machine Scale Set", "App Service", "Load Balancer", 
  "Azure Virtual Network", "Blob Storage", "Managed Disk", "Public Endpoint", 
  "Private Endpoint", "Content Delivery Network" vb. tüm terimler tam İngilizce 
  geçmelidir.
- Açıklamalar ve anlatım Türkçe, ama teknoloji dili İngilizce.

NARRATIVE CONTINUITY:
- Bir önceki derste (Week 1) cloud computing'in temel kavramlarını ve Azure platformunun 
  genel yapısını öğrendik. Şu cümle ile başla: "Geçen derste cloud computing'in 
  temel tanımını, cloud deployment models'i (public, private, hybrid), service types'ları 
  (IaaS, PaaS, SaaS, FaaS), ve Azure'ın global infrastructure'ını öğrendik. 
  Şimdi bu bilgiler üzerine inşa ederek, Azure'ın en temel ve en sık kullanılan 
  servislerine—Compute, Networking ve Storage—odaklanacağız."
- Konular arasında geçişte "Hatırlayacağınız gibi IaaS'ta sorumluluk modelini..." 
  veya "Bir önceki derste bahsettiğimiz public cloud'un faydalarından biri..." 
  gibi referanslar ekle.

CONTENT STRUCTURE & TOPICS:
Dersi aşağıdaki başlıklar altında kapsayıcı şekilde sun, her servis için tanım, 
özel kullanım senaryoları ve avantaj/dezavantajları açıkla:

### COMPUTE SERVICES (20-25 dakika):
1. **Virtual Machines (VMs)**
   - Tanım: IaaS, tam işletim sistemi kontrolü
   - Kullanım: Legacy uygulamalar, custom iş yükleri
   - Özellikleri: Windows/Linux, konfigürasyonlu boyutlar, saat başına ücret

2. **Virtual Machine Scale Sets (VMSS)**
   - Tanım: Aynı yapılandırmalı, yük-dengeleli birden fazla VM
   - Elastik ölçekleme: Talebe göre otomatik VM ekle/çıkar
   - Uygulamalar: Değişken trafikli web uygulamaları, batch işler
   - Fark: VM'den farkı - bir tıkla 1000'e varan makine yönet

3. **App Service**
   - PaaS platform: Altyapı üzerine görmezden gel, kod yaz
   - Otomatik patching, CI/CD integration
   - Desteklenen diller: Node.js, Python, Java, .NET, PHP, Ruby
   - Uygulamalar: Web uygulamaları, REST API'lar, mobil backend'ler
   - Fiyatlama: Free/Shared, Basic, Standard, Premium, Isolated

4. **Azure Container Instances (ACI)**
   - Hızlı container başlatma (saniye cinsinden)
   - Sunucu yönetimi yok, pay-per-second
   - Uygulamalar: Batch işler, test, CI/CD

5. **Azure Kubernetes Service (AKS)**
   - Yönetilmiş Kubernetes cluster
   - Microservices mimarisi
   - Auto-scaling pods ve nodes
   - Uygulamalar: Büyük ölçekli containerized uygulamalar, IoT

6. **Azure Virtual Desktop**
   - Cloud tabanlı Windows desktop
   - Heryerden erişim (BYOD ve remote work)
   - Pooled (çok kullanıcı) ve Personal (dedicated) modlar

### NETWORKING SERVICES (15-20 dakika):
1. **Azure Virtual Network (VNet)**
   - Buluta taşınan kendi ağınız
   - Subnets: Ağı bölümlere ayır
   - Network Security Groups (NSGs): Firewall kuralları
   - Uygulamalar: Multi-tier aplikasyon (web, app, database tiers)

2. **VNet Peering**
   - İki VNet arasında doğrudan bağlantı
   - Global Peering: Bölgeler arası bağlantı
   - Avantajı: Low latency, özel ve güvenli

3. **VPN Gateway ve ExpressRoute**
   - VPN Gateway: Encrypted, public internet, ucuz
   - ExpressRoute: Dedicated private link, yüksek performans
   - Karşılaştırma tablosu: Bandwidth, latency, maliyet, güvenilirlik
   - Seç: Basit hybrid ihtiyacı = VPN; mission-critical = ExpressRoute

4. **Public ve Private Endpoints**
   - Public: İnternet üzerinden erişilebilir
   - Private: Sadece VNet içerisinden erişim
   - Güvenlik: Private endpoint veri sızıntılarından korur

5. **Load Balancer**
   - Layer 4 (Transport Layer) load balancing
   - Public (internet traffic) ve Internal (VNet traffic)
   - Bileşenleri: Frontend, Backend Pool, Health Probes, Rules
   - Uygulamalar: High-availability web uygulamaları, database load balancing

6. **Application Gateway**
   - Layer 7 (Application Layer) - daha akıllı routing
   - URL-based routing, hostname-based routing
   - Web Application Firewall (WAF) security
   - SSL/TLS offloading

7. **Content Delivery Network (CDN)**
   - Global edge location ağı
   - İçerik kullanıcıya yakın sunucudan gelir
   - Kullanım: Video streaming, statik content, büyük dosya downloads

### STORAGE SERVICES (15-20 dakika):
1. **Storage Account**
   - Tüm Azure Storage'ın giriş noktası
   - GPv2 (General-purpose v2) tavsiye edilen
   - Redundancy seçenekleri: LRS, ZRS, GRS, RA-GRS
   - Performance Tiers: Standard ve Premium

2. **Blob Storage**
   - Yapılandırılmamış veri: belgeler, görüntüler, videolar
   - Blob types: Block Blob, Append Blob, Page Blob
   - Access Tiers: Hot (sık), Cool (ender), Archive (çok ender)
   - Örnekler: Backup, media streaming, data lakes

3. **Managed Disks (Disk Storage)**
   - VM'lere bağlanan persistent storage
   - Disk Türleri: Standard HDD, Standard SSD, Premium SSD, Ultra SSD
   - Avantajları: Snapshot, encryption, high availability (99.99%)

4. **Azure Files**
   - SMB protokolü ile shared file storage
   - On-premises file server'lardan lift-and-shift
   - Azure File Sync: Hybrid senaryo (cloud + on-premises)
   - Multi-machine access: Windows, Linux, macOS

5. **Data Redundancy and Replication**
   - LRS: Single datacenter içinde (99.99%)
   - ZRS: Availability zones arasında (99.99%)
   - GRS/RA-GRS: Bölgeler arası (99.99999999%)
   - RPO ve RTO: Recovery Point/Time Objectives
   - Seç: Bölgesel outage'a karşı koruma = ZRS/GRS

TEACHING STYLE & ENGAGEMENT:
- Sade ve net Türkçe kullan; herhangi bir öğrenci takip etebilsin.
- Her servisi açıklarken: "Bu neden önemli?" sorusuna cevap ver.
- Gerçek hayat örnekleri kullan: "Eğer 10 milyon kullanıcı sayfanızı ziyaret 
  ederse Virtual Machine Scale Set otomatik olarak..."
- İngilizce terimler Türkçe açıklandıktan sonra, "buna İngilizce 'elasticity' denir" 
  şeklinde tekrar vurgula.
- Tablolar ve karşılaştırmalar: "Load Balancer vs Application Gateway'i karşılaştıracak olursak..."
- Kısa ara vermeler: Öğrencinin konseptleri hazmetmesi için 5-10 saniye sessiz ver.

NARRATIVE FLOW:
- Compute → Networking → Storage sırası ile (doğal bağlantı)
- Her servis için: tanım → özellikler → use case → karşılaştırma (eğer varsa)
- Adım adım zorluk: Başta VM basit, sonra VMSS daha kompleks, AKS en kompleks
- Dersin sonunda: "Compute, Networking ve Storage Azure'ın üç temel ayağı. 
  Hemen hemen her uygulama bu üç kategoriden servisler kullanır."

DURATION & PACING:
- Video toplam 25-30 dakika olmalı
- Tempo: Ne çok hızlı ne çok yavaş, rahat takip edilebilecek hız
- Her konu 2-4 dakika arasında (max)

PRESENTATION TECHNIQUE:
- Kaynaklardaki tablolar ve örnekleri aktif olarak kullan
- Hayal gücüne hitap et: "Bir e-commerce sitesini düşün..."
- Kontrastlar: "VM'de her şeyi kendin yaparsın; App Service'te Azure yönetir"
- Soruşturma: "Peki, hangi services'i seçersiniz?" diye soru sor (didaktik)
```

---

**Kullanım Talimatları / Usage Instructions:**

1. NotebookLM'e gir: https://notebooklm.google
2. Yeni bir not oluştur (Create New Notebook)
3. İki kaynağı yükle:
   - `cse415-fundamentals-of-cloud-computing-week-2.pdf`
   - Bu markdown dosyası (ek kaynak)
4. Sayfanın sağında "Audio Overview" veya "Video Overview" seçeneğini bul
5. **"Video Overview"** tıkla
6. "Customize with a note" kısmında yukarıdaki PROMPTu tamamen kopyala-yapıştır
7. "Generate" tıkla ve 5-10 dakika için bekle
8. Video oluşturulduktan sonra izle ve indir

---

**Hazırsan Week 3'ü gönderebilirsin!** 🚀