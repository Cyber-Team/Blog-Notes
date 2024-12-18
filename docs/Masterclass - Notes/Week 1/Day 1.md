## Introduction to Cybersecurity, Ethical Hacking, and Setting up the Lab Environment

### **What is Cybersecurity?**
- **Definition**: The practice of protecting systems, networks, and programs from digital attacks.
- **Objective**: To ensure confidentiality, integrity, and availability (CIA triad) of data.

### **Key Concepts**:
1. **Ethical Hacking**: Legally identifying vulnerabilities in systems to secure them.
2. **Types of Hackers**:
   - White Hat: Ethical hackers working within the law.
   - Black Hat: Malicious hackers violating laws.
   - Grey Hat: A mix of white and black hats.

### **Tools to Set Up Your Cybersecurity Lab**:
1. **Virtualization Software**:
   - **VirtualBox** or **VMware**: Used for creating virtual machines (VMs).
     - Command for installation on Ubuntu:
       ```bash
       sudo apt update && sudo apt install virtualbox -y
       ```
2. **Operating Systems**:
   - **Kali Linux**: A penetration testing distribution.
   - **Ubuntu**: For general-purpose testing and learning.

### **Lab Setup Instructions**:
1. Install VirtualBox or VMware.
2. Download and install Kali Linux VM image.
3. Set up a test network with tools like **Metasploitable** (an intentionally vulnerable VM).

### **Networking Basics**:
- Ensure the VMs can communicate through NAT/Bridged mode.
  - Command to check network connection:
    ```bash
    ifconfig
    ```
