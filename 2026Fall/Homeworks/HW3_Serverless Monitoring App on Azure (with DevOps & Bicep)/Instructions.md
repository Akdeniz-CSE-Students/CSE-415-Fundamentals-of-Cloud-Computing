# Serverless Monitoring App on Azure (with DevOps & Bicep)

**Son tarih:** 18 Aralık 2025 23:59 • **Kapanış:** 18 Aralık 2025 23:59

## Yönergeler

### ⚠️ ⚠️ ⚠️ Important Note ⚠️ ⚠️ ⚠️

Deploying something to a live environment is **always full of surprises**. You will encounter authentication errors, permission issues, missing variables, pipeline failures, and more. **Do not wait until the last day** to deploy. Plan ahead, start early, and treat every failed deployment as part of the learning process.

---

## Scenario

You are building a small “Service Health Monitor” for a company.

* The company wants to periodically check whether a list of public URLs are “up” or “down” (e.g. their own website, API, etc.).
* They also want a simple HTTP API where:
    * You can manually trigger a check for a single URL.
    * You can query the latest status of all monitored URLs.

Your task is to design this using Azure Functions, Cosmos DB, App Configuration, and optionally Key Vault, fully automated with Bicep and Azure DevOps CI/CD.

---

## Technical Requirements

### 1. Azure Functions

* **One Timer-triggered function:**
    * Runs on a schedule (e.g., every 5 or 10 minutes).
    * Reads a list of URLs from configuration.
    * Checks their status (e.g., HTTP 200 or not).
    * Saves the results (URL, time, status) to Cosmos DB.
* **One HTTP-triggered function:**
    * **Option A:** Manually trigger a check for a specific URL.

### 2. Cosmos DB

* 1 database and at least 1 container.
* **Stores:**
    * URL
    * Status (up/down, status code)
    * Timestamp
    * Response time, error message, etc.

### 3. Azure App Configuration

* Store non-secret settings, such as:
    * The list of URLs to monitor.
    * Timer schedule expression.
* Your function app must read at least one setting from App Configuration at runtime.

### 4. Azure Key Vault (Bonus)

* Store secrets, e.g.:
    * Cosmos DB connection string / key

---

## Infrastructure as Code (Bicep)

* Create all required Azure resources using **Bicep**:
    * Resource group.
    * Function App + Storage Account.
    * Cosmos DB account, database, container.
    * App Configuration.
    * (Bonus) Key Vault.
* The Bicep file(s) should be:
    * Stored in your Azure DevOps repo.
    * Deployable via Azure DevOps pipeline (no manual portal clicking, except initial setup if necessary).

---

## Azure DevOps Integration

### 1. Repository

* Host all code in an Azure DevOps Git repo:
    * `/src` → Azure Functions code.
    * `/infra` → Bicep files.
    * `/pipelines` → YAML definitions.

### 2. CI/CD Pipeline

* Use Azure DevOps Pipelines (YAML) to:
    * **CI: On each push:**
        * Restore dependencies.
        * Build the Azure Functions project.
    * **CD: On main branch update:**
        * Deploy infrastructure using Bicep.
        * Deploy the Function App (code) to Azure.

(You don’t have to create a very complex pipeline; a simple working one is enough.)

---

## Deliverables

You must submit **all** of the following:

### 1. Azure DevOps Repo Files (As a .zip file)

* The full project (Functions code + Bicep + pipeline files).

### 2. Screen Recording (Demo) – ~ 10 minutes

* Show the Azure DevOps repo and pipelines.
* Show a pipeline run (CI/CD).
* Show the resources in the Azure Portal (Function App, Cosmos DB, App Config, Key Vault if used).
* Call the HTTP function (e.g. via browser/Postman) and show:
    * Response from the function.
    * Data in Cosmos DB (e.g. via Data Explorer).
* Briefly explain where App Configuration is used and (if implemented) Key Vault.

---

## Minimal Step Guide

**Note:** This is intentionally high-level. You are expected to research the details.

1.  Create an Azure DevOps project and repository; push your initial code structure.
2.  Write Bicep templates to define the infrastructure.
3.  Implement the timer and HTTP functions and connect them to Cosmos DB.
4.  Use App Configuration to store at least one runtime setting and read it from your function.
5.  (Bonus) Move secrets to Key Vault and use it securely.
6.  Create an Azure DevOps pipeline (YAML) for:
    * Building and publishing the Function App.
    * Deploying the Bicep templates and the function code.
7.  Deploy, test, and then record your demo video.

---

## Grading

* **Core functionality (Timer + HTTP + Cosmos DB):** 40%
* **Bicep-based deployment:** 20%
* **Azure DevOps CI/CD pipeline:** 25%
* **App Configuration usage:** 15%
* **Bonus – Key Vault integration:** +10%
