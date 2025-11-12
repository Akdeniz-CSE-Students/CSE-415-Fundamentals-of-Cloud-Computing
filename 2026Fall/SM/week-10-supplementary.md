# Week 10: Identity, Access Management & Security - Q&A Review

## Overview

Week 10 provides comprehensive Q&A review of Identity, Access Management, and Security concepts from Week 3. This resource consolidates exam-style questions covering Azure Active Directory, authentication, authorization, Multi-Factor Authentication, Conditional Access, Role-Based Access Control, and Zero Trust security model.

---

## 1. Identity Fundamentals - Q&A Review

### Question: What is Identity?

**Definition**: An identity is a representation of a person, application, or device that needs to access resources.

**Types of Identities**:
- User identities (people accessing resources)
- Service principals (applications accessing resources)
- Managed identities (Azure resources accessing other resources)
- Device identities (physical or virtual devices)

---

### Question: Identity vs. Access vs. Authentication vs. Authorization

**Identity**: Who you are (representation of user/app/device)

**Access**: Ability to use resources (outcome of permission grant)

**Authentication (AuthN)**: Verifying who you are (proving identity)
- Example: Providing username and password

**Authorization (AuthZ)**: Verifying what you can do (confirming permissions)
- Example: User allowed to read files but not delete them

**Key Principle**: Both authentication AND authorization must succeed for secure resource access.

---

## 2. Azure Active Directory (Azure AD) - Q&A Review

### Question: What is Azure Active Directory's primary role?

**Answer**: To centrally manage user identities and access to applications and resources.

### Question: Azure AD Primary Purpose - Multiple Choice

**Options**:
- a. Manage containers and orchestrate applications
- b. Provide secure networking configurations
- c. **Centrally manage user identities and access to applications** ✓
- d. Store and manage unstructured data

**Correct Answer**: **c** - Central identity and access management platform

---

### Question: What problem does Azure AD solve?

**Traditional Challenge**: Managing user accounts and access across many applications is complex and error-prone

**Azure AD Solution**: 
- Centralized user identity management
- Single Sign-On (SSO) - sign in once, access multiple apps
- Multi-tenant support for SaaS applications
- Seamless hybrid with on-premises Active Directory

---

### Question: EduTech Case Study

**Scenario**: EduTech wants students and staff to securely access educational resources and applications with a single set of credentials.

**Question**: Which Azure service enables centralized identity management and single sign-on?

**Options**:
- a. Azure Key Vault
- b. Azure Virtual Network
- c. **Azure Active Directory (Azure AD)** ✓
- d. Azure Blob Storage

**Correct Answer**: **c** - Azure AD provides centralized identity and SSO capabilities

---

## 3. Authentication Methods - Q&A Review

### Question: Authentication vs. Password-Based Authentication

**Basic Authentication Challenge**: 
- Simple passwords are vulnerable to phishing and brute force attacks
- Users choose weak passwords despite policies
- High operational overhead for password resets

**Solution**: Modern authentication methods with multiple verification factors

---

### Question: Multi-Factor Authentication (MFA)

**Definition**: Authentication requiring 2+ factors:
1. **Something you know**: Password, PIN
2. **Something you have**: Phone, authenticator app, hardware key
3. **Something you are**: Biometric (fingerprint, facial recognition)

### Question: FinanceCo Security Enhancement

**Scenario**: FinanceCo wants extra layer of security, requiring second form of verification beyond passwords.

**Question**: Which Azure service implements this?

**Options**:
- a. Azure Key Vault
- b. Azure SQL Database
- c. **Azure Multi-Factor Authentication (MFA)** ✓
- d. Azure Functions

**Correct Answer**: **c** - MFA requires multiple verification factors

---

### Question: MFA Primary Purpose

**Correct Answer**: To enhance security by requiring multiple forms of verification

**Why MFA Matters**:
- Even if password compromised, second factor prevents unauthorized access
- Significantly reduces account takeover risk
- Industry-standard security practice

---

### Question: MFA Methods Supported by Azure

- SMS codes
- Email codes
- Authenticator app (Microsoft Authenticator, Google Authenticator)
- Phone call verification
- OATH hardware tokens
- Windows Hello for Business
- FIDO2 Security Keys

---

### Question: Passwordless Authentication

**Definition**: Modern authentication eliminating password dependency

**Methods**:
- **Windows Hello for Business**: Biometric or PIN on corporate device
- **Microsoft Authenticator**: Approve request on mobile device
- **FIDO2 Security Keys**: Hardware-based authentication
- **Phone Sign-in**: Approval on mobile for login

**Benefits**:
- Better security (resistant to phishing)
- Improved user experience (no password fatigue)

---

## 4. Authorization and Access Control - Q&A Review

### Question: Role-Based Access Control (RBAC) Primary Purpose

**Correct Answer**: To control access to Azure resources based on roles and permissions

### Question: TechCorp Team Permissions

**Scenario**: TechCorp needs different teams to have specific permissions when working with Azure resources.

**Question**: Which service allows them to define and enforce access policies by assigning roles?

**Options**:
- a. Azure Active Directory
- b. Azure Virtual Network
- c. **Azure Role-Based Access Control (RBAC)** ✓
- d. Azure App Service

**Correct Answer**: **c** - RBAC allows role-based permission assignment

---

### Question: How RBAC Works

**Three Components**:
1. **Security Principal**: User, group, or service principal
2. **Role Definition**: Set of permissions (e.g., Owner, Contributor, Reader)
3. **Scope**: Where role applies (subscription, resource group, resource)

**Process**:
1. Create role assignment
2. User performs action
3. RBAC evaluates: Does user's role at this scope allow action?
4. Allow or deny access

---

### Question: Built-in RBAC Roles

| Role | Permissions | Typical Use |
|------|-------------|------------|
| **Owner** | Full control, can delegate | Subscription owner, admin |
| **Contributor** | Create/modify resources, cannot grant access | Developer, team member |
| **Reader** | View resources only | Auditor, stakeholder |

---

### Question: Healthcare Organization Departments

**Scenario**: Healthcare organization needs specific permissions for different departments accessing Azure resources.

**Question**: Which feature ensures department-level access control?

**Options**:
- a. Azure Multi-Factor Authentication (MFA)
- b. **Azure Role-Based Access Control (RBAC)** ✓
- c. Azure Conditional Access
- d. Azure Managed Identity

**Correct Answer**: **b** - RBAC provides role-based department access control

---

## 5. Conditional Access - Q&A Review

### Question: What is Conditional Access?

**Definition**: Dynamic policy engine evaluating access requests in real-time based on signals:
- User identity and location
- Device compliance
- Application type
- Real-time risk assessment

**Outcome**: Grant, deny, or require additional verification

---

### Question: Conditional Access Signals

**User/Identity Signals**:
- Who is logging in?
- Has suspicious activity been detected?
- Is user in high-risk group?

**Location Signals**:
- Where is user accessing from?
- Is location geographically expected?
- Unknown location detected?

**Device Signals**:
- Is device corporate/personal?
- Is device compliant with policy?
- Is device trusted?

**Application Signals**:
- Which application being accessed?
- Is application classified as risky?
- Is application regulated (healthcare, finance)?

**Risk Signals**:
- Real-time anomaly detection
- Machine learning-based risk scoring
- Sign-in risk from impossible travel

---

### Question: EnterpriseX Conditional Policy

**Scenario**: EnterpriseX wants policies restricting access to sensitive data based on user location, device compliance, and time of day.

**Question**: Which Azure service defines these conditional access policies?

**Options**:
- a. Azure Role-Based Access Control (RBAC)
- b. **Azure Conditional Access** ✓
- c. Azure Active Directory
- d. Azure Key Vault

**Correct Answer**: **b** - Conditional Access defines dynamic access policies

---

### Question: Common Conditional Access Policies

1. **Require MFA for High-Risk Users**: If suspicious activity, require second factor
2. **Require MFA for Sensitive Apps**: Enforce for healthcare/finance applications
3. **Require Compliant Device**: For sensitive data, device must be company-managed
4. **Block Unknown Locations**: Restrict access from unexplained new locations
5. **Require Password Change Post-Risk**: If compromise detected, force password reset

---

## 6. Zero Trust Security - Q&A Review

### Question: What Sets Zero Trust Apart?

**Traditional Model**: "Trust everything inside network, block outside"
- Problem: Breaches from insider threats, lateral movement overlooked

**Zero Trust Model**: "Never trust, always verify"

### Question: Zero Trust Authentication

**Question**: What sets Zero Trust apart from traditional models regarding authentication?

**Options**:
- a. Single sign-on for all users
- b. Periodic password changes
- c. **Continuous and adaptive authentication** ✓
- d. Static access controls based on job roles

**Correct Answer**: **c** - Zero Trust uses continuous, adaptive authentication

**Explanation**: Zero Trust doesn't accept "one-time login." Instead, it continuously verifies identity and adjusts access based on risk, regardless of past logins.

---

### Question: Zero Trust Three Core Principles

1. **Verify Explicitly**: Always authenticate and authorize, every time
2. **Use Least Privilege Access**: Grant minimum permissions needed
3. **Assume Breach**: Operate assuming attackers are already inside

---

### Question: Zero Trust Data Protection

**Question**: How does Zero Trust approach data protection?

**Options**:
- a. Allow unrestricted access to sensitive data
- b. Rely on network firewalls for security
- c. **Encrypt data at rest and in transit, regardless of location** ✓
- d. Depend on perimeter security

**Correct Answer**: **c** - Zero Trust encrypts data everywhere

**Explanation**: Zero Trust doesn't trust network location. All data encrypted at rest (storage) and in transit (network), whether on corporate network or internet.

---

### Question: Just-In-Time (JIT) Access

**Definition**: Grant elevated permissions only when needed, for limited duration

**Example**:
- Admin needs to access production database for 1 hour
- Elevated permission automatically granted for 1 hour
- Permission automatically revoked after 1 hour
- Improves security by minimizing exposure window

---

### Question: Just-Enough-Access (JAC)

**Definition**: Grant only specific permissions needed for task

**Example**:
- Support technician can reset passwords but NOT delete users
- Reduces scope of potential damage from compromised account

---

## 7. Defense in Depth - Q&A Review

### Question: Defense in Depth Primary Goal

**Correct Answer**: To provide redundancy in case of security breach

**Or**: To create multiple layers of security to protect against various threats

### Question: Defense in Depth Layers

| Layer | Controls | Example |
|-------|----------|---------|
| **Physical** | Door locks, surveillance | Secure datacenter access |
| **Perimeter** | Firewalls, DDoS protection | Block malicious traffic |
| **Network** | Network segmentation, NSGs | Isolate resources |
| **Compute** | Antimalware, patching | Protect VMs |
| **Application** | Input validation, secure coding | Prevent injection attacks |
| **Data** | Encryption, access controls | Protect sensitive data |
| **Identity** | MFA, Conditional Access | Control who accesses what |

**Key Principle**: If one layer breached, others provide additional protection.

---

## 8. Additional Security Services - Q&A Review

### Microsoft Defender for Cloud

**Purpose**: Unified security management and threat protection

**Capabilities**:
- Cloud Security Posture Management (CSPM)
- Threat detection and response
- Vulnerability assessment
- Compliance monitoring

---

### Azure Key Vault

**Purpose**: Securely store and manage cryptographic keys and secrets

**What It Stores**:
- Encryption keys
- Database passwords
- API keys
- Certificates

---

### Azure AD B2B (Business-to-Business)

**Purpose**: Securely collaborate with external partners using their identities

**Question**: Which service enables external partner collaboration using their own credentials?

**Options**:
- a. Azure Blob Storage
- b. **Azure AD B2B** ✓
- c. Azure Data Box
- d. Azure Virtual Network

**Correct Answer**: **b** - B2B enables external partner access with their credentials

---

## 9. Exam Preparation Summary

### Most Important Concepts

1. **Azure AD**: Centralized identity management, SSO
2. **MFA**: Multi-factor authentication for enhanced security
3. **RBAC**: Role-based access control for authorization
4. **Conditional Access**: Dynamic access policies based on risk
5. **Zero Trust**: Continuous verification, least privilege, assume breach
6. **Defense in Depth**: Multiple security layers

### Common Question Patterns

- "Which service manages **[identity/access/authentication]**?"
- "What's the primary purpose of **[service]**?"
- "**[Company] wants [security requirement]**. Which service?"
- Scenario-based with multiple services to choose from

### Service Selection Quick Reference

| Need | Service |
|------|---------|
| Centralized identity | Azure AD |
| Second factor security | MFA |
| Role-based permissions | RBAC |
| Dynamic access policies | Conditional Access |
| Continuous verification | Zero Trust |
| Multiple security layers | Defense in Depth |

---

**Reference**: All content based on Week 10 Q&A review of Identity, Access Management & Security, covering Week 3 material in examination format.
