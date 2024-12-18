<!-- ---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes. -->

# Week 1: Foundations of Cybersecurity

## Day 1: Introduction to Cybersecurity, Ethical Hacking, and Setting up the Lab Environment

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

---

## Day 2: Linux Basics I (File System, Navigation, Basic Commands)

### **Introduction to Linux**
- **Why Linux for Cybersecurity?**
  - Open-source and customizable.
  - Extensive tool support (e.g., Nmap, Wireshark).

### **Linux File System Structure**:
1. **/bin**: Essential command binaries.
2. **/etc**: Configuration files.
3. **/home**: User directories.
4. **/var**: Variable data like logs.

### **Basic Commands**:
1. **File Navigation**:
   - List files:
     ```bash
     ls
     ```
   - Change directory:
     ```bash
     cd /path/to/directory
     ```
2. **File Operations**:
   - Create file:
     ```bash
     touch filename.txt
     ```
   - Copy file:
     ```bash
     cp source.txt destination.txt
     ```
   - Move file:
     ```bash
     mv source.txt destination_folder/
     ```
   - Delete file:
     ```bash
     rm filename.txt
     ```
3. **View File Contents**:
   - Display contents:
     ```bash
     cat file.txt
     ```
   - Display paginated view:
     ```bash
     less file.txt
     ```

---

## Day 3: Linux Basics II (User Management, Permissions, Package Management)

### **User Management in Linux**:
1. **Add a User**:
   ```bash
   sudo adduser username
   ```
2. **Switch User**:
   ```bash
   su - username
   ```
3. **Delete a User**:
   ```bash
   sudo userdel username
   ```

### **File Permissions**:
- Format: `rwx` (Read, Write, Execute)
- View permissions:
  ```bash
  ls -l
  ```
- Change permissions:
  ```bash
  chmod 755 filename
  ```
- Change ownership:
  ```bash
  sudo chown user:group filename
  ```

### **Package Management**:
1. **APT (Debian-based Systems)**:
   - Update package list:
     ```bash
     sudo apt update
     ```
   - Install a package:
     ```bash
     sudo apt install packagename
     ```
2. **YUM/DNF (RHEL-based Systems)**:
   - Install a package:
     ```bash
     sudo yum install packagename
     ```

---

# Week 2: Intermediate Concepts

## Day 1: Advanced Linux Commands, Piping, Redirection, and Bash Scripting

### **Advanced Linux Commands**:
- **Find Files**:
  ```bash
  find / -name "filename"
  ```
- **Search in Files**:
  ```bash
  grep 'pattern' file.txt
  ```
- **Monitor System**:
  ```bash
  top
  ```

### **Piping and Redirection**:
- Pipe output of one command to another:
  ```bash
  ls | grep 'pattern'
  ```
- Redirect output to a file:
  ```bash
  command > output.txt
  ```

### **Introduction to Bash Scripting**:
1. Create a script:
   ```bash
   nano script.sh
   ```
   ```bash
   #!/bin/bash
   echo "Hello, World!"
   ```
2. Make it executable:
   ```bash
   chmod +x script.sh
   ```
3. Run the script:
   ```bash
   ./script.sh
   ```

---

## Day 2: Networking Fundamentals – OSI Model, IP Addressing, and Basic Network Troubleshooting

### **OSI Model**:
- **Layers**:
  1. Physical: Transmission of raw bit streams (e.g., cables).
  2. Data Link: Frame transmission (e.g., MAC addresses).
  3. Network: Routing and IP addressing (e.g., routers).
  4. Transport: Data delivery and error checking (e.g., TCP/UDP).
  5. Session: Managing sessions (e.g., login sessions).
  6. Presentation: Data translation and encryption (e.g., SSL).
  7. Application: End-user interfaces (e.g., HTTP, FTP).

### **IP Addressing**:
1. **IPv4 Address Classes**:
   - Class A: `1.0.0.0 - 126.0.0.0` (large networks)
   - Class B: `128.0.0.0 - 191.255.0.0` (medium networks)
   - Class C: `192.0.0.0 - 223.255.255.0` (small networks)
   - Class D: `224.0.0.0 - 239.255.255.255` (multicasting)
   - Class E: `240.0.0.0 - 255.255.255.255` (reserved)

2. **Subnetting**:
   - Breaks a network into smaller sub-networks.
   - Subnet mask example:
     - `/24` (CIDR) = `255.255.255.0` (256 addresses).
   - Calculate subnets:
     ```
     Total Subnets = 2^(Borrowed Bits)
     ```

3. **Private vs Public IP**:
   - **Private**:
     - Class A: `10.0.0.0 - 10.255.255.255`
     - Class B: `172.16.0.0 - 172.31.255.255`
     - Class C: `192.168.0.0 - 192.168.255.255`
   - **Public**: Used for internet-facing systems.

4. **Broadcast and Network Addresses**:
   - **Network Address**: First address in a subnet (e.g., `192.168.1.0`).
   - **Broadcast Address**: Last address in a subnet (e.g., `192.168.1.255`).

### **Basic Network Troubleshooting**:
- Check connectivity:
  ```bash
  ping 8.8.8.8
  ```
- Trace route:
  ```bash
  traceroute google.com
  ```
- Check open ports:
  ```bash
  netstat -tuln
  ```

---

## Day 3: Introduction to Cybersecurity Concepts – CIA Triad, Types of Threats, and Real-World Incident Analysis

### **CIA Triad**:
1. **Confidentiality**: Protecting data from unauthorized access.
2. **Integrity**: Ensuring data consistency and accuracy.
3. **Availability**: Ensuring data/services are accessible.

### **Types of Threats**:
1. **Malware**: Viruses, worms, ransomware.
2. **Phishing**: Fraudulent attempts to obtain sensitive information.
3. **Denial of Service (DoS)**: Overloading a system to make it unavailable.

### **Real-World Incident Analysis**:
- Case Study: **Equifax Breach (2017)**
  - Cause: Unpatched vulnerability in Apache Struts.
  - Impact: Data of 147 million individuals exposed.
  - Lesson: Regular patch management is critical.

---

# Week 3: Information Gathering

## Day 1: Footprinting and Reconnaissance Techniques – WHOIS, DNS, and Website Footprinting

### **Footprinting**:
- Collecting publicly available information about a target.

### **Techniques**:
1. **WHOIS Lookup**:
   - Tool: `whois`
   - Command:
     ```bash
     whois example.com
     ```
   - Information Gathered: Domain owner, registration, expiry dates.

2. **DNS Enumeration**:
   - Tool: `nslookup`
   - Command:
     ```bash
     nslookup example.com
     ```
   - Enumerate DNS records (A, MX, CNAME).

3. **Website Footprinting**:
   - Tool: `wget`
   - Command:
     ```bash
     wget -m http://example.com
     ```
   - Gather information about website structure.

---

## Day 2: Network Scanning Methods – Port Scanning, OS Fingerprinting, and Nmap

### **Port Scanning**:
- **Purpose**: Identify open ports and services.
- Tool: `Nmap`
  ```bash
  nmap -p- 192.168.1.1
  ```

### **OS Fingerprinting**:
- **Purpose**: Determine the operating system of a host.
- Tool: `Nmap`
  ```bash
  nmap -O 192.168.1.1
  ```

---

## Day 3: Hands-on Lab with Reconnaissance and Scanning Tools

### **Practical Exercises**:
1. Use Nmap for a full network scan.
2. Analyze WHOIS results for multiple domains.
3. Use `wget` to download a website’s structure and identify its components.
