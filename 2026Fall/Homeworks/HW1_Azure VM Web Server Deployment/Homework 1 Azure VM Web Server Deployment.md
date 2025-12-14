Objective

Demonstrate your ability to deploy, configure, and manage both Linux and Windows virtual machines in Azure to serve web content. 



Core Tasks

1\.  Resource Group: Create a single new resource group to contain all resources for this assignment. Name it `YourName-HW1-RG`.

2\.  Ubuntu VM: Deploy an Ubuntu Linux virtual machine.

&nbsp;    Install and configure a web server (e.g., Apache or Nginx).

&nbsp;    Create a simple `index.html` page that displays the text: `Success from \[Your Name]'s Ubuntu VM`.

3\.  Windows VM: Deploy a Windows Server virtual machine.

&nbsp;   Install and configure the Internet Information Services (IIS) web server role.

&nbsp;   Create a simple `index.html` page that displays the text: `Success from \[Your Name]'s Windows VM`.

4\.  Networking:

&nbsp;   Ensure both VMs are securely accessible for management (SSH for Ubuntu, RDP for Windows).

&nbsp;   Configure the networking for both VMs so their web servers are accessible to the public internet via HTTP.

&nbsp;   Assign a public DNS name to each virtual machine for easy access.



Deliverable \& Submission

Your submission will be a single, unedited screen recording video (max 5 minutes) demonstrating the successful completion of all tasks. 

Do not record your screen while you are building everything. Your video should be a final demonstration recorded after all components are working. The goal is to prove the final result, not to show the entire setup process.



Your video must clearly show the following:

The Azure Portal, displaying the Microsoft account, subscription, the resource group and all the resources you created.

A successful SSH connection to your Ubuntu VM.

A successful RDP connection to your Windows Server VM.

A web browser on your local machine loading the custom `index.html` page from the Ubuntu VM's public DNS name.

The same web browser loading the custom `index.html` page from the Windows VM's public DNS name.



⚠️ Important: Delete the resource group to prevent ongoing Azure costs.⚠️



