# Week 3: Identity, Access Management & Security - Supplementary Resource

## Overview

Azure security fundamentals build on three core pillars: **Identity** (who you are), **Access** (what you can do), and **Security** (protection mechanisms). This week covers Azure Active Directory (now Microsoft Entra ID), authentication/authorization concepts, access control, and zero-trust security principles.

---

## 1. Core Concepts: Identity, Authentication, Authorization

### Identity
An **identity** is a representation of a person, application, or device that needs access to resources. Examples include user accounts, service principals, managed identities, and application identities.

### Authentication vs. Authorization
- **Authentication (AuthN)**: Verifying who you are. Example: Providing username and password to prove your identity.
- **Authorization (AuthZ)**: Verifying what you're allowed to access. Example: A user can read files but not delete them.

Both must succeed for secure access. Authentication without authorization is useless, and authorization without authentication is dangerous.

---

## 2. Azure Active Directory / Microsoft Entra ID

### Traditional Active Directory
- On-premises directory service
- Designed for network-based authentication (Kerberos, NTLM)
- Limited internet/cloud support
- Best for internal corporate networks

### Azure Active Directory (Azure AD) / Microsoft Entra ID
- Cloud-based identity platform
- Designed for internet and cloud applications
- Supports modern protocols: OAuth 2.0, OpenID Connect, SAML
- Multi-cloud and hybrid scenarios
- Provides Identity as a Service (IDaaS)

### Key Azure AD Features
- **Single Sign-On (SSO)**: Sign in once, access multiple applications
- **Multi-tenant support**: Serve multiple organizations
- **Seamless hybrid integration**: Connect on-premises AD with cloud
- **Device and application management**: Manage access from any device
- **Conditional policies**: Dynamic access rules based on risk

---

## 3. Authentication Methods

### Traditional Password-Based Authentication
- Simple but vulnerable to phishing, brute force, and credential theft
- Weak passwords common despite policies
- High operational overhead for password resets

### Multi-Factor Authentication (MFA)
Requires 2+ factors:
- **Something you know**: Password, PIN
- **Something you have**: Phone, authenticator app, hardware key
- **Something you are**: Biometric (fingerprint, facial recognition)

**Methods supported by Azure AD**:
- SMS codes
- Email codes
- Authenticator app (Microsoft Authenticator, Google Authenticator)
- Phone call verification
- OATH hardware tokens
- Windows Hello for Business

### Passwordless Authentication
Modern approach eliminating password dependency:
- **Windows Hello for Business**: Biometric or PIN on corporate device
- **Microsoft Authenticator**: Approval on mobile device
- **FIDO2 Security Keys**: Hardware-based authentication
- **Phone Sign-in**: Approve login request on mobile

**Benefits**: Better security (resistant to phishing), improved user experience (no password fatigue)

---

## 4. Azure AD Authentication Flow (Token-Based)

1. **User initiates login** to an application
2. **Application redirects** user to Azure AD login endpoint
3. **User authenticates** (password, MFA, etc.)
4. **Azure AD issues token** (ID token, access token, refresh token)
5. **Token sent to application** via redirect
6. **Application validates token** cryptographically
7. **User granted access** to resources

**Why tokens?** Stateless, scalable, secure, work across different systems.

---

## 5. Role-Based Access Control (RBAC)

### Concept
Define roles with specific permissions, assign users to roles, grant or deny access based on role membership.

### Azure RBAC Components
1. **Security Principal**: User, group, service principal, or managed identity
2. **Role Definition**: Set of permissions (e.g., "Reader", "Contributor", "Owner")
3. **Scope**: Resource group, subscription, or specific resource where role applies

### Built-in Azure Roles
- **Owner**: Full control, can delegate access
- **Contributor**: Can create/modify resources, but cannot grant access
- **Reader**: View resources only
- **Custom roles**: Define specific permission combinations

### RBAC vs. Azure AD Roles
- **RBAC**: Controls access to Azure resources (VMs, storage, databases)
- **Azure AD Roles**: Controls access to Azure AD and Microsoft cloud services (user management, licensing)

---

## 6. Conditional Access

### Concept
Dynamic policy engine evaluating access requests in real-time based on signals:
- **User and identity**: Who is logging in?
- **Location**: Where are they accessing from?
- **Device**: Is it corporate, personal, compliant?
- **Application**: What are they accessing?
- **Real-time risk**: Is this a suspicious login?

### Common Conditional Access Policies
- **Require MFA for high-risk users**: If suspicious activity detected
- **Require MFA for specific apps**: For sensitive applications
- **Require compliant device**: For accessing sensitive data
- **Block access from unknown locations**: Protect against unauthorized access
- **Require password change after risk**: If credential compromise detected

### Benefits
- Reduces false positives compared to static rules
- Adapts to evolving threats
- Improves user experience (access granted when low-risk)

---

## 7. Zero Trust Security Model

### Traditional Security (Perimeter-Based)
"Trust everything inside the firewall, block everything outside."
- Assumption: External = bad, internal = safe
- Problem: Breaches from insider threats or lateral movement ignored

### Zero Trust Model
"Never trust, always verify."

#### Three Core Principles
1. **Verify Explicitly**: Always authenticate and authorize, regardless of location
2. **Use Least Privileged Access**: Grant minimum permissions needed, nothing more
3. **Assume Breach**: Operate under assumption that attackers may already be inside

#### Just-In-Time (JIT) Access
Grant elevated permissions only when needed, for limited duration.
- Example: Admin accesses production database only for 1 hour

#### Just-Enough-Access (JAC)
Grant only specific permissions needed for a task, not blanket access.
- Example: Support technician can reset passwords but not delete users

---

## 8. Defense in Depth

Layered security approach: if one layer breached, others protect.

| Layer | Controls | Example |
|-------|----------|---------|
| **Physical** | Door locks, key cards, surveillance | Secure data center access |
| **Perimeter** | Firewalls, DDoS protection, WAF | Block malicious traffic |
| **Network** | NSGs, micro-segmentation, VPNs | Isolate resources by network |
| **Compute** | Antimalware, vulnerability scanning | Protect VMs and containers |
| **Application** | Input validation, secure coding | Prevent injection attacks |
| **Data** | Encryption, access controls, masking | Protect sensitive data |
| **Identity** | MFA, Conditional Access, RBAC | Control who accesses what |

---

## 9. Microsoft Defender for Cloud

### Purpose
Unified security management platform providing threat protection, compliance, and vulnerability assessment.

### Key Capabilities
- **Cloud Security Posture Management (CSPM)**: Assess configuration against security best practices
- **Threat Protection**: Detect and respond to threats in real-time
- **Workload Protection**: Specific protection for VMs, containers, databases, App Service
- **Compliance**: Monitor compliance with regulatory standards (PCI-DSS, HIPAA, SOC 2)
- **Vulnerability Management**: Identify and prioritize security issues

### Supported Resources
- Azure resources (VMs, databases, storage)
- On-premises resources (via Azure Arc)
- Multi-cloud resources (AWS, GCP via connectors)

---

## 10. Key Azure Identity Services

### Azure AD (Microsoft Entra ID)
Core identity and access management platform.

### Azure AD B2C
Consumer identity platform for customer-facing applications.

### Azure AD B2B
Collaboration with external organizations using their identities.

### Azure AD Domain Services
Managed on-premises-like Active Directory in cloud.

### Privileged Identity Management (PIM)
Manage, control, monitor access to sensitive resources.

---

## 11. Security Best Practices

1. **Enable MFA everywhere**: Every user, every application
2. **Use strong authentication**: Passwordless when possible, MFA minimum
3. **Apply least privilege**: Grant minimum necessary permissions
4. **Implement Conditional Access**: Dynamic policies for risk-based access
5. **Monitor and audit**: Log all access, review regularly
6. **Use managed identities**: For application authentication
7. **Rotate credentials**: Regularly update passwords and secrets
8. **Educate users**: Security awareness training
9. **Plan for zero trust**: Gradually implement throughout organization
10. **Backup and disaster recovery**: Prepare for compromised accounts

---

**Reference**: All content based on Microsoft Learn and Azure security documentation, current as of November 2025.
