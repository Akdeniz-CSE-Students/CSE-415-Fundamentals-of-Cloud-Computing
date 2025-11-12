# CSE 415 Midterm (Vize) - Exam Questions (Weeks 1-7)

## 📝 50 Practice Questions for Midterm Exam

---

## SECTION 1: CLOUD COMPUTING FUNDAMENTALS (Week 1)

### Question 1
What is cloud computing?
- A. Storing data only on cloud servers
- **B. On-demand delivery of IT resources with pay-as-you-go pricing**
- C. A physical server location
- D. Local network storage

### Question 2
Which of the following is NOT a characteristic of cloud computing?
- A. On-demand access
- B. Resource pooling
- C. Rapid elasticity
- **D. Unlimited free usage**

### Question 3
What is the primary purpose of the Shared Responsibility Model?
- A. To eliminate customer responsibility
- **B. To clarify who manages what between cloud provider and customer**
- C. To increase cloud provider profits
- D. To prevent all security issues

### Question 4
In the Shared Responsibility Model for SaaS, who is primarily responsible for data security?
- **A. The customer (always)**
- B. The service provider only
- C. Both equally
- D. Neither party

### Question 5
Which deployment model provides the most control to the organization?
- A. Public Cloud
- B. Hybrid Cloud
- **C. Private Cloud**
- D. Multi-cloud

### Question 6
What is the primary advantage of public cloud deployment?
- A. Maximum security
- **B. Lowest cost and highest scalability**
- C. No shared resources
- D. Dedicated support team

### Question 7
What does "High Availability" mean in cloud computing?
- A. System available 100% of the time
- **B. System with minimal downtime, typically 99.99% uptime**
- C. Fast data access
- D. Multiple copies of data

### Question 8
What is the correct order of Azure resource hierarchy?
- A. Resource → Resource Group → Subscription → Management Group
- **B. Account → Management Group → Subscription → Resource Group → Resource**
- C. Subscription → Account → Resource Group → Resource
- D. Management Group → Subscription → Account → Resource

### Question 9
Which of the following is an Azure region?
- **A. West US, East Europe, Southeast Asia**
- B. CPU1, CPU2, CPU3
- C. Cloud Zone 1, Cloud Zone 2
- D. North Building, South Building

### Question 10
What is an Availability Zone?
- A. A geographic region
- **B. An isolated set of datacenters within a region with separate power/cooling**
- C. A security perimeter
- D. A network bandwidth allocation

---

## SECTION 2: AZURE CORE SERVICES (Week 2)

### Question 11
Which Azure service would you use to host a website without managing servers?
- **A. Azure App Service**
- B. Virtual Machines
- C. Azure Blob Storage
- D. Azure SQL Database

### Question 12
What is the billing model for Azure Virtual Machines?
- A. Fixed monthly fee
- **B. Pay-per-second while running, stops when deallocated**
- C. Pay-per-month regardless of usage
- D. Annual subscription only

### Question 13
Which service is best for orchestrating containerized applications?
- A. Azure Container Instances
- **B. Azure Kubernetes Service (AKS)**
- C. Virtual Machines
- D. App Service

### Question 14
What is Azure Functions primarily used for?
- A. Hosting websites
- B. Managing virtual networks
- **C. Running event-driven serverless code**
- D. Storing large files

### Question 15
Azure Blob Storage is best for storing:
- A. Structured relational data
- **B. Unstructured data like videos, images, documents**
- C. Active directory credentials
- D. Configuration files only

### Question 16
What does a Network Security Group (NSG) do?
- A. Protects against viruses
- **B. Filters network traffic with firewall rules**
- C. Stores network data
- D. Optimizes network speed

### Question 17
Which networking service provides dedicated private connectivity without using the internet?
- A. VPN Gateway
- B. Load Balancer
- **C. ExpressRoute**
- D. Application Gateway

### Question 18
What is VNet Peering?
- A. Peer pressure for cloud adoption
- B. Comparing virtual networks
- **C. Direct private communication between virtual networks**
- D. Sharing virtual network resources

### Question 19
Which storage service would you use for a shared file server accessible from multiple machines?
- A. Blob Storage
- B. Disk Storage
- **C. Azure Files (SMB protocol)**
- D. Table Storage

### Question 20
What is the primary purpose of Azure Container Instances (ACI)?
- **A. Quickly run containers without managing servers**
- B. Orchestrate microservices at scale
- C. Store container images only
- D. Provide virtual networking

---

## SECTION 3: IDENTITY & SECURITY (Week 3)

### Question 21
What is the primary purpose of Azure Active Directory?
- A. Store user passwords
- **B. Centrally manage user identities and access**
- C. Provide backup storage
- D. Monitor network traffic

### Question 22
Difference between Authentication and Authorization?
- A. They are the same thing
- **B. AuthN = verifying who you are; AuthZ = verifying what you can do**
- C. AuthN = network security; AuthZ = data security
- D. One is for employees, one is for customers

### Question 23
What is Multi-Factor Authentication (MFA)?
- A. Allowing multiple users to login at once
- **B. Requiring 2+ factors to verify identity (something you know/have/are)**
- C. Multiple passwords for one account
- D. Logging in from multiple locations

### Question 24
Which authentication method is considered "passwordless"?
- **A. Windows Hello, Microsoft Authenticator, FIDO2 keys**
- B. Weak passwords
- C. Shared passwords
- D. Written passwords

### Question 25
What is Role-Based Access Control (RBAC)?
- A. Restricting physical access to servers
- **B. Controlling access based on assigned roles**
- C. Blocking all external access
- D. Same as passwords

### Question 26
What is the principle of "Least Privilege"?
- A. Give everyone full access
- **B. Grant only the minimum permissions needed for a task**
- C. Deny all access by default
- D. Use the same role for everyone

### Question 27
What is the Zero Trust Security Model?
- A. Trust everyone inside the network
- **B. Never trust, always verify - assume breach mentality**
- C. No security needed if firewall is strong
- D. Trust the network perimeter

### Question 28
What is "Defense in Depth"?
- A. Deep security passwords
- **B. Multiple layers of security controls for redundancy**
- C. Underground data centers
- D. Complex security rules

### Question 29
What does Conditional Access do?
- A. Denies all access attempts
- **B. Dynamically evaluates access based on risk signals (location, device, user)**
- C. Allows everyone access
- D. Only allows access from one location

### Question 30
In the Shared Responsibility Model, who is ALWAYS responsible for data?
- **A. The customer**
- B. The cloud provider
- C. Both equally
- D. A third party

---

## SECTION 4: GOVERNANCE & COMPLIANCE (Week 4)

### Question 31
What is Azure Policy primarily used for?
- A. Storing policies in a document
- **B. Creating rules across Azure resources to enforce compliance**
- C. Managing user passwords
- D. Backing up data

### Question 32
What is the primary purpose of Azure Blueprints?
- A. Drawing network diagrams
- **B. Orchestrating deployment of templates + policies + RBAC**
- C. Creating visual presentations
- D. Storing images of infrastructure

### Question 33
What is a Resource Lock used for?
- **A. Preventing accidental deletion or modification**
- B. Encrypting data
- C. Managing access permissions
- D. Monitoring resource usage

### Question 34
Difference between CanNotDelete and ReadOnly locks?
- A. They are the same
- **B. CanNotDelete prevents deletion only; ReadOnly prevents all modifications**
- C. ReadOnly is for public clouds only
- D. No practical difference

### Question 35
What is Microsoft Purview primarily used for?
- A. Creating backups
- **B. Unified data governance - discover, classify, manage data**
- C. Monitoring performance
- D. Managing virtual machines

### Question 36
Which effect of Azure Policy denies non-compliant deployments?
- **A. Deny**
- B. Audit
- C. Append
- D. Monitor

### Question 37
What does the "Audit" effect do in Azure Policy?
- A. Deletes non-compliant resources
- **B. Logs non-compliance but allows resource creation**
- C. Automatically fixes resources
- D. Blocks all deployments

### Question 38
When would you use Azure Policy instead of Azure Blueprints?
- A. They are used identically
- **B. Policy for enforcing rules; Blueprints for standardized environment setup**
- C. Always use Blueprints
- D. Only for Microsoft resources

### Question 39
What is compliance tagging used for?
- A. Labeling compliance documents
- **B. Marking resources to enforce compliance policies**
- C. No technical purpose
- D. Storing metadata only

### Question 40
Which scenario requires Blueprints?
- A. Blocking a single resource type
- **B. Deploying standardized multi-resource environments consistently**
- C. Encrypting data only
- D. Blocking network traffic

---

## SECTION 5: MANAGEMENT TOOLS (Week 5)

### Question 41
When is Azure Portal most appropriate?
- A. Large-scale infrastructure automation
- **B. Learning Azure, one-off tasks, visual troubleshooting**
- C. Version control of infrastructure
- D. CI/CD pipeline deployments

### Question 42
Which tool is best for cross-platform, straightforward Azure management?
- A. Azure Portal
- B. PowerShell only
- **C. Azure CLI**
- D. Only on Windows

### Question 43
What is Azure Cloud Shell?
- A. A command-line tool you download locally
- **B. Browser-based shell without installation, pre-configured**
- C. A database query tool
- D. A security group

### Question 44
What is Infrastructure as Code (IaC)?
- A. Writing code only, no configuration
- **B. Defining infrastructure using code for version control and repeatability**
- C. Managing data only
- D. No relationship to infrastructure

### Question 45
What is the primary purpose of ARM Templates?
- **A. Define Azure infrastructure declaratively as JSON**
- B. Create visual diagrams
- C. Store passwords
- D. Manage user accounts

### Question 46
How does Azure Arc benefit hybrid environments?
- A. Speeds up networking only
- **B. Extends Azure management to on-premises and multi-cloud**
- C. Provides backup only
- D. No relationship to hybrid

### Question 47
What is the key principle of Infrastructure as Code called?
- **A. Idempotency - same code produces same state**
- B. Mutability - code changes frequently
- C. Volatility - unpredictable results
- D. Complexity - code is hard to understand

### Question 48
Which is NOT a benefit of IaC?
- A. Version control
- B. Disaster recovery
- **C. Guaranteed zero downtime**
- D. Repeatable deployments

### Question 49
When should you use PowerShell over Azure CLI?
- A. Always
- **B. For complex automation with conditional logic**
- C. For Linux environments only
- D. PowerShell is obsolete

### Question 50
What is the primary advantage of ARM Templates over Portal deployment?
- **A. Version control, repeatability, automation**
- B. No technical advantages
- C. Only works for VMs
- D. Lower cost only

---

## SECTION 6: MONITORING & COST (Weeks 6-7)

**BONUS: MONITORING (Week 6)**

### Bonus Question 1
What is Azure Monitor primarily used for?
- A. Managing user accounts
- **B. Collecting and analyzing performance and operational data**
- C. Storing documents
- D. Deploying resources

### Bonus Question 2
What is Azure Advisor?
- A. A technical support person
- **B. Service providing best practice recommendations in 5 categories**
- C. A pricing calculator
- D. A backup service

### Bonus Question 3
Which category is NOT part of Azure Advisor?
- A. Cost
- B. Security
- C. Reliability
- **D. Political correctness**

### Bonus Question 4
What is Azure Service Health?
- A. Physical health status
- **B. Monitoring Azure platform health and service incidents**
- C. Customer health insurance
- D. Unrelated to cloud

### Bonus Question 5
What do Diagnostic Settings do?
- **A. Configure where logs and metrics are routed**
- B. Fix problems automatically
- C. Store passwords
- D. Create backups only

---

## ANSWER KEY (Quick Reference)

1. B | 2. D | 3. B | 4. A | 5. C | 6. B | 7. B | 8. B | 9. A | 10. B
11. A | 12. B | 13. B | 14. C | 15. B | 16. B | 17. C | 18. C | 19. C | 20. A
21. B | 22. B | 23. B | 24. A | 25. B | 26. B | 27. B | 28. B | 29. B | 30. A
31. B | 32. B | 33. A | 34. B | 35. B | 36. A | 37. B | 38. B | 39. B | 40. B
41. B | 42. C | 43. B | 44. B | 45. A | 46. B | 47. A | 48. C | 49. B | 50. A

**BONUS: 1. B | 2. B | 3. D | 4. B | 5. A**

---

## STUDY STRATEGY

**Before Exam:**
1. Review all 7 weeks of materials
2. Practice these 50 questions multiple times
3. Focus on weak areas
4. Understand "why", not just "what"
5. Create your own flashcards for definitions

**During Exam:**
1. Read questions carefully
2. Eliminate obviously wrong answers
3. Review your answers if time permits
4. Don't overthink - your first instinct is often correct

**Good luck on your midterm exam!** 💪📚

