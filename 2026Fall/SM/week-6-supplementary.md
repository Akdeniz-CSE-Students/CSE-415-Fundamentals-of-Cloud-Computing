# Week 6: Monitoring Tools - Supplementary Resource

## Overview

Effective monitoring is critical for maintaining cloud application health, performance, and reliability. This week covers Azure Advisor for optimization recommendations, Azure Service Health for infrastructure status, diagnostic settings for data collection, and Azure Monitor as the comprehensive monitoring platform.

---

## 1. Azure Advisor

### Definition

**Azure Advisor** analyzes your Azure resource configuration and usage telemetry, then provides personalized recommendations to optimize cost, performance, reliability, security, and operational excellence.

### Key Features

- **Automated Analysis**: Continuously scans resources for best practices
- **Personalized Recommendations**: Tailored to your specific resources
- **Multiple Categories**: Cost, Security, Reliability, Performance, Operational Excellence
- **Actionable Insights**: Specific remediation steps provided
- **Impact Assessment**: Shows potential impact (High, Medium, Low)

### Recommendation Categories

| Category | Focus | Example Recommendations |
|----------|-------|----------------------|
| **Cost** | Reduce spending | Resize underutilized VMs, delete unused resources |
| **Security** | Enhance security posture | Enable MFA, configure security groups, encrypt data |
| **Reliability** | Improve availability | Add redundancy, configure backups, enable auto-scaling |
| **Performance** | Optimize speed | Scale up resources, enable caching, optimize queries |
| **Operational Excellence** | Improve efficiency | Use automation, implement monitoring, standardize processes |

### How Advisor Works

1. Collects configuration and telemetry data from your resources
2. Analyzes against Microsoft best practices (typically 24-hour delay)
3. Generates recommendations with severity levels
4. Displays in Advisor dashboard categorized by impact

### Supported Resources

Advisor provides recommendations for 30+ Azure services:
- Azure Virtual Machines and Scale Sets
- Azure App Service
- Azure SQL Database
- Azure Storage Accounts
- Azure Cosmos DB
- Azure Key Vault
- Azure Load Balancer
- And many more...

### Advisor Score

A metric (0-100) reflecting your overall optimization across all five categories. Higher scores indicate better alignment with Azure best practices.

---

## 2. Azure Service Health

### Definition

**Azure Service Health** provides real-time information about Azure service health, planned maintenance, and potential issues affecting your resources.

### Three Main Components

#### 1. Service Health (Previously Azure Status)
- Real-time status of Azure services worldwide
- Shows current and past incidents
- Planned maintenance schedules
- Service degradation notifications

#### 2. Resource Health
- Health status of specific resources in your subscription
- Why a resource is unavailable
- Availability timeline
- Recommended actions for recovery

#### 3. Planned Maintenance
- Notifications of upcoming maintenance
- Scheduled downtime windows
- Affected resources and regions
- Time to prepare for outages

### Notification Features

- **Custom Alerts**: Set up alerts for specific services or regions
- **Historical Data**: Review past incidents and maintenance
- **Impact Assessment**: Understand which of your resources are affected
- **Email Notifications**: Proactive notifications to stakeholders

### When to Use Service Health

- Troubleshooting why a service is unavailable
- Planning maintenance windows
- Understanding regional outages
- Staying informed about Azure platform changes

---

## 3. Azure Diagnostic Settings

### Definition

**Diagnostic Settings** allow you to configure where Azure resource logs and metrics are sent for storage, analysis, and alerting.

### Data Types Collected

- **Metrics**: Numerical performance data (CPU%, memory, network throughput)
- **Logs**: Detailed events and diagnostics (errors, warnings, access logs)
- **Activity Logs**: Platform-level events (resource creation, policy changes, RBAC modifications)

### Destination Options

| Destination | Use Case | Retention |
|------------|----------|-----------|
| **Azure Monitor Logs** | Querying and analysis | Configurable (30 days - 2 years) |
| **Azure Storage** | Long-term archival, compliance | Configurable retention |
| **Event Hubs** | Real-time streaming, third-party tools | As configured by consumer |
| **Log Analytics Workspace** | Advanced querying and alerting | 30 days - 730 days |

### Configuration Steps

1. Navigate to resource in Azure Portal
2. Select "Diagnostic Settings"
3. Click "Add Diagnostic Setting"
4. Choose logs and metrics to collect
5. Select destination(s)
6. Set retention policy
7. Save

### Example Scenarios

- **Compliance**: Send logs to Storage Account for 7-year retention
- **Real-time Alerting**: Stream logs to Event Hubs for immediate processing
- **Analysis**: Send metrics to Log Analytics for querying and visualization

---

## 4. Azure Monitor

### Definition

**Azure Monitor** is a comprehensive monitoring and analytics platform providing a unified solution for collecting, analyzing, and acting on telemetry data from cloud and on-premises environments.

### Core Components

#### 1. Metrics
- Numerical data points (CPU usage, memory, network)
- Near real-time collection (60-second granularity typical)
- Stored for 30 days (longer for custom metrics)
- Used for performance monitoring and alerting

#### 2. Logs (Log Analytics)
- Detailed event and diagnostic data
- Queried using Kusto Query Language (KQL)
- Stored for extended periods (configurable)
- Used for investigation, analysis, and troubleshooting

#### 3. Application Insights
- Application performance monitoring (APM)
- End-to-end transaction tracing
- Dependency mapping
- Exception and failure tracking
- Automatic anomaly detection

#### 4. Azure Monitor for VMs
- VM performance and health monitoring
- Dependency map showing VM relationships
- Guest OS metrics and logs
- Performance trending over time

#### 5. Azure Monitor for Containers
- Kubernetes and Docker container monitoring
- Container health status
- Pod and node performance
- Container registry scanning

#### 6. Alerts
- Proactive notifications when conditions are met
- Multiple alert types: Metric, Log, Activity Log, Health alerts
- Action Groups: Execute automated responses (email, webhook, runbook)

#### 7. Workbooks
- Interactive reports and dashboards
- Combine metrics, logs, and text
- Customizable visualizations
- Shareable across teams

### Alert Types

| Alert Type | Trigger Condition | Use Case |
|-----------|------------------|----------|
| **Metric Alert** | Threshold on numeric metric | CPU > 80%, disk space low |
| **Log Alert** | Query result condition | Error count in logs > 10 |
| **Activity Log Alert** | Specific activity event | Resource created, policy changed |
| **Health Alert** | Resource/service health change | VM stopped unexpectedly |

### Action Groups

Automated responses when alerts trigger:
- **Email Notifications**: Alert subscribers
- **SMS/Webhooks**: Trigger external systems
- **Azure Runbooks**: Execute automation scripts
- **Logic Apps**: Complex workflow automation
- **Service Manager**: Incident ticket creation
- **Third-party Integrations**: Slack, PagerDuty, etc.

### Monitoring Best Practices

1. **Enable Diagnostics Early**: Configure on all critical resources
2. **Set Appropriate Thresholds**: Avoid alert fatigue
3. **Use Action Groups**: Automate responses
4. **Create Dashboards**: Visualize key metrics
5. **Set Retention Policies**: Balance storage costs with compliance needs
6. **Correlate Data**: Link metrics, logs, and events for root cause analysis
7. **Monitor Costs**: Alert on resource spending
8. **Plan for Scale**: Ensure monitoring can handle growth

### Typical Monitoring Workflow

```
Resource Generate Data
    ↓
Diagnostic Settings Route Data
    ↓
Azure Monitor Collects & Stores
    ↓
Alerts Evaluate Conditions
    ↓
Action Groups Execute Responses
    ↓
Dashboards Visualize Health
```

---

## 5. Monitoring Pyramid

A recommended approach to comprehensive monitoring:

```
Level 4: Proactive Analysis
         (Workbooks, custom dashboards)

Level 3: Alerting & Response
         (Alerts, action groups, automation)

Level 2: Collection & Analysis
         (Monitor logs, metrics, diagnostics)

Level 1: Foundation
         (Resource configuration, diagnostic settings enabled)
```

---

## 6. Integration Example: E-commerce Application

**Scenario**: Monitor a web application serving customers

**Monitoring Stack**:
- **Advisor**: Identifies cost-saving opportunities (resize underutilized VMs)
- **Service Health**: Alerts to potential Azure platform issues
- **Diagnostic Settings**: Sends application logs to Log Analytics
- **Azure Monitor Metrics**: Tracks response time, CPU, memory
- **Application Insights**: Monitors user transactions, failures
- **Alerts**: Triggers when response time > 1 second or error rate > 1%
- **Action Group**: Sends SMS to on-call engineer, creates incident ticket
- **Workbook**: Dashboard showing real-time system health

---

**Reference**: All content based on Microsoft Learn and Azure monitoring documentation, current as of November 2025.
