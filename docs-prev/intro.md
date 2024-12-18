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



# Week 2: Advanced Linux, Networking Fundamentals, and Cybersecurity Concepts

## Day 1: Advanced Linux Commands, Piping, Redirection, and Bash Scripting

### 1.1 Advanced Linux Commands
These commands help automate tasks and manage system operations more efficiently.

- **grep**: Search for patterns in files.
  - *Example*: `grep "pattern" filename` → Finds the word "pattern" in the file.

- **find**: Locate files and directories.
  - *Example*: `find /home -name "file.txt"` → Find file.txt in /home.

- **tar**: Archive and extract files.
  - *Example*:
    - Archive: `tar -cvf archive.tar file1 file2`
    - Extract: `tar -xvf archive.tar`

- **awk**: Text processing in files.
  - *Example*: `awk '{print $1}' file.txt` → Prints the first column.

- **sed**: Stream editor for text substitution.
  - *Example*: `sed 's/old/new/' file.txt` → Replaces "old" with "new" in the file.

- **top / htop**: Display system processes.
  - Use htop for a user-friendly, colorful interface.

### 1.2 Piping and Redirection

#### Piping (|)
Pass the output of one command as input to another.
- *Example*: `ls -l | grep ".txt"` → List only .txt files.

#### Redirection
Send output or input to/from files:
- `>`: Overwrite output to a file
  - *Example*: `echo "Hello" > file.txt` → Writes "Hello" to file.txt.
- `>>`: Append output to a file
  - *Example*: `echo "World" >> file.txt` → Adds "World" to file.txt.
- `<`: Input redirection
  - *Example*: `sort < file.txt` → Sorts the contents of file.txt.

### 1.3 Introduction to Bash Scripting

#### What is Bash Scripting?
Automating repetitive tasks in Linux. Bash scripts are sequences of Linux commands stored in a file.

#### Creating a Bash Script
1. Open a file: `nano script.sh`
2. Add the shebang:
   ```bash
   #!/bin/bash
   echo "Hello, World!"
   ```
3. Save and close the file.
4. Make it executable: `chmod +x script.sh`
5. Run the script: `./script.sh`

#### Variables in Bash
```bash
#!/bin/bash
name="CyberTeam"
echo "Welcome to $name's Masterclass!"
```

#### Conditionals
```bash
#!/bin/bash
if [ -f "file.txt" ]; then
    echo "File exists"
else
    echo "File does not exist"
fi
```

#### Loops
```bash
#!/bin/bash
for i in {1..5}; do
    echo "Number $i"
done
```

## Day 2: Networking Fundamentals – OSI Model, IP Addressing, and Troubleshooting

### 2.1 OSI Model
The OSI Model breaks network communication into 7 layers for understanding and troubleshooting:

| Layer | Function | Example Protocols |
|-------|----------|-------------------|
| 7. Application | User interaction | HTTP, FTP, SMTP |
| 6. Presentation | Data encryption, formatting | SSL/TLS |
| 5. Session | Manage sessions | NetBIOS, PPTP |
| 4. Transport | Data transfer reliability | TCP, UDP |
| 3. Network | Routing and IP addressing | IP, ICMP |
| 2. Data Link | Framing and MAC addresses | Ethernet, ARP |
| 1. Physical | Hardware transmission | Cables, Wi-Fi |

### 2.2 IP Addressing

#### What is an IP Address?
- A unique identifier for devices on a network.
- Allows devices to communicate over the internet or local network.

#### IPv4 Address
- 32-bit address
- Divided into 4 octets separated by dots
- Each octet ranges from 0 to 255
- *Example*: `192.168.1.1`

#### IPv4 Address Classes

| Class | Range | Default Subnet Mask | Network/Host Ratio | Purpose |
|-------|-------|---------------------|--------------------|------------|
| A | 1.0.0.0 – 126.255.255.255 | 255.0.0.0 | Large networks, many hosts | Public networks |
| B | 128.0.0.0 – 191.255.255.255 | 255.255.0.0 | Medium-sized networks | Public networks |
| C | 192.0.0.0 – 223.255.255.255 | 255.255.255.0 | Small networks, few hosts | Public networks |
| D | 224.0.0.0 – 239.255.255.255 | N/A | Reserved for Multicast | Streaming, multicast traffic |
| E | 240.0.0.0 – 255.255.255.255 | N/A | Reserved for Research | Experimental use |

#### Private IP Ranges
- 10.0.0.0 – 10.255.255.255 (Class A)
- 172.16.0.0 – 172.31.255.255 (Class B)
- 192.168.0.0 – 192.168.255.255 (Class C)

### 2.3 Basic Network Troubleshooting Commands

1. **ping**: Test connectivity to a host
   - *Example*: `ping 8.8.8.8` → Tests Google's DNS

2. **traceroute**: Show the path packets take to reach a destination
   - *Example*: `traceroute google.com`

3. **netstat**: Show network connections
   - *Example*: `netstat -an`

4. **nslookup**: Query DNS to resolve hostnames
   - *Example*: `nslookup google.com`

5. **curl**: Test HTTP/HTTPS connections
   - *Example*: `curl https://google.com`

## Day 3: Introduction to Cybersecurity Concepts – CIA Triad, Types of Threats, and Real-World Analysis

### 3.1 Recap of the CIA Triad
- **Confidentiality**: Preventing unauthorized access to data
- **Integrity**: Ensuring data accuracy and consistency
- **Availability**: Ensuring resources are available when needed

### 3.2 Types of Cybersecurity Threats
- **Malware**: Malicious software (e.g., viruses, trojans)
- **Phishing**: Fraudulent emails to steal credentials
- **DDoS**: Overwhelming systems to deny service
- **Man-in-the-Middle (MITM)**: Intercepting communications
- **Ransomware**: Encrypting data and demanding ransom

### 3.3 Real-World Incident Analysis

#### Example Case Study: WannaCry Ransomware Attack

**What Happened**:
- Exploited a vulnerability in Windows SMB protocol
- Locked files and demanded Bitcoin payments

**Key Learnings**:
- Always update systems (patch management)
- Use firewalls to restrict unnecessary ports
- Train users to identify phishing emails

### Tools to Explore Cybersecurity Threats
- **Wireshark**: Analyze network traffic
- **Nmap**: Scan for open ports and services
- **Burp Suite**: Intercept and test web application traffic

## Learning Objectives
By the end of Week 2, students will:
- ✅ Be comfortable with advanced Linux operations and bash scripting
- ✅ Understand networking fundamentals and basic troubleshooting
- ✅ Recognize cybersecurity threats and analyze real-world incidents



# Day 2: Networking Fundamentals

## 2.1 OSI Model

The OSI (Open Systems Interconnection) Model breaks network communication into 7 layers for understanding and troubleshooting:

| Layer | Number | Function | Example Protocols |
|-------|--------|----------|-------------------|
| Application | 7 | User interaction | HTTP, FTP, SMTP |
| Presentation | 6 | Data encryption, formatting | SSL/TLS |
| Session | 5 | Manage sessions | NetBIOS, PPTP |
| Transport | 4 | Data transfer reliability | TCP, UDP |
| Network | 3 | Routing and IP addressing | IP, ICMP |
| Data Link | 2 | Framing and MAC addresses | Ethernet, ARP |
| Physical | 1 | Hardware transmission | Cables, Wi-Fi |

### Layer Breakdown

#### Layer 7: Application
- Closest layer to the end user
- Provides network services directly to applications
- Protocols: HTTP, FTP, SMTP, SSH

#### Layer 6: Presentation
- Translates data between application and network formats
- Handles data encryption and compression
- Ensures data is in a usable format
- Protocols: SSL/TLS, JPEG, GIF

#### Layer 5: Session
- Manages connections between applications
- Establishes, maintains, and terminates sessions
- Handles authentication and reconnection
- Protocols: NetBIOS, PPTP

#### Layer 4: Transport
- Ensures reliable data transfer
- Manages data segmentation and reassembly
- Provides error checking and flow control
- Protocols:
  - TCP (Transmission Control Protocol)
    - Connection-oriented
    - Guaranteed delivery
    - Used for web browsing, email
  - UDP (User Datagram Protocol)
    - Connectionless
    - Faster but less reliable
    - Used for streaming, online gaming

#### Layer 3: Network
- Handles routing and logical addressing
- Determines best path for data transmission
- Manages IP addressing
- Protocols: IP, ICMP

#### Layer 2: Data Link
- Manages physical addressing (MAC addresses)
- Detects and possibly corrects errors from the physical layer
- Defines how data is formatted for transmission
- Protocols: Ethernet, ARP

#### Layer 1: Physical
- Actual physical connection
- Deals with hardware transmission
- Defines physical characteristics
- Includes: Network cables, Wi-Fi, electrical signals

## 2.2 IP Addressing

### What is an IP Address?
- Unique identifier for devices on a network
- Allows communication between devices

### IPv4 Address
- 32-bit address
- Divided into 4 octets
- Each octet ranges from 0-255
- Example: `192.168.1.1`

### IP Address Classes
- Class A: 1.0.0.0 – 126.255.255.255
- Class B: 128.0.0.0 – 191.255.255.255
- Class C: 192.0.0.0 – 223.255.255.255
- Class D: 224.0.0.0 – 239.255.255.255 (Multicast)
- Class E: 240.0.0.0 – 255.255.255.255 (Reserved)

### Private IP Ranges
- 10.0.0.0 – 10.255.255.255
- 172.16.0.0 – 172.31.255.255
- 192.168.0.0 – 192.168.255.255

## 2.3 Basic Network Troubleshooting Commands

### 1. ping
- Tests connectivity to a host
- Command: `ping 8.8.8.8`
- Checks network responsiveness
- Measures round-trip time

### 2. traceroute
- Shows path packets take to reach destination
- Command: `traceroute google.com`
- Helps identify network routing issues

### 3. netstat
- Displays network connections
- Command: `netstat -an`
- Shows active connections and listening ports

### 4. nslookup
- Queries DNS to resolve hostnames
- Command: `nslookup google.com`
- Verifies DNS resolution

### 5. curl
- Tests HTTP/HTTPS connections
- Command: `curl https://google.com`
- Retrieves website content
- Useful for checking web service availability

## Practical Tips
- Always update network configurations
- Use private IP ranges for internal networks
- Implement proper subnetting
- Regularly test network connectivity
- Monitor network performance

## Recommended Tools
1. **Wireshark**: Comprehensive network traffic analysis
2. **Nmap**: Network discovery and security auditing
3. **Burp Suite**: Web application traffic interception
4. **IPCalc**: IP address and subnet calculations

# Day 3: Introduction to Cybersecurity Concepts

## 3.1 The CIA Triad: Foundation of Cybersecurity

### Confidentiality
- **Definition**: Preventing unauthorized access to data
- **Key Principles**:
  - Access control
  - Data encryption
  - User authentication
  - Need-to-know basis
- **Techniques**:
  - Encryption (symmetric and asymmetric)
  - Secure access controls
  - Virtual Private Networks (VPNs)
  - Multi-factor authentication

### Integrity
- **Definition**: Ensuring data accuracy and consistency
- **Key Principles**:
  - Data cannot be modified without detection
  - Maintaining data trustworthiness
  - Preventing unauthorized alterations
- **Techniques**:
  - Checksums
  - Digital signatures
  - Hash functions
  - Version control systems
  - Blockchain technology

### Availability
- **Definition**: Ensuring resources are available when needed
- **Key Principles**:
  - System uptime
  - Reliable access to data and resources
  - Rapid recovery from disruptions
- **Techniques**:
  - Redundant systems
  - Load balancing
  - Disaster recovery plans
  - Backup systems
  - Continuous monitoring

## 3.2 Types of Cybersecurity Threats

### 1. Malware
- **Definition**: Malicious software designed to damage or exploit systems
- **Types**:
  - Viruses: Self-replicating programs
  - Trojans: Disguised as legitimate software
  - Worms: Spread across networks
  - Spyware: Covertly collects information
- **Prevention**:
  - Updated antivirus software
  - Regular system scans
  - Careful download practices

### 2. Phishing
- **Definition**: Fraudulent attempts to obtain sensitive information
- **Characteristics**:
  - Impersonates trusted entities
  - Often uses email or fake websites
  - Targets personal or financial information
- **Red Flags**:
  - Urgent or threatening language
  - Unexpected attachments
  - Requests for personal information
  - Suspicious email addresses
- **Mitigation**:
  - Security awareness training
  - Email filtering
  - Multi-factor authentication
  - Verify sender identity

### 3. Distributed Denial of Service (DDoS)
- **Definition**: Overwhelming systems to deny service
- **Attack Mechanism**:
  - Multiple compromised systems attack a single target
  - Floods system with traffic
  - Renders services unavailable
- **Types**:
  - Volumetric attacks
  - Protocol attacks
  - Application layer attacks
- **Mitigation**:
  - Traffic filtering
  - Robust network infrastructure
  - DDoS protection services
  - Scalable bandwidth

### 4. Man-in-the-Middle (MITM)
- **Definition**: Intercepting communications between two parties
- **Attack Techniques**:
  - IP spoofing
  - DNS spoofing
  - Session hijacking
- **Risks**:
  - Data theft
  - Communication manipulation
  - Credential compromise
- **Prevention**:
  - Encryption (HTTPS)
  - VPN usage
  - Network segmentation
  - Certificate validation

### 5. Ransomware
- **Definition**: Encrypting data and demanding ransom
- **Characteristics**:
  - Locks user out of systems
  - Demands cryptocurrency payment
  - Often spreads through phishing
- **Impact**:
  - Data loss
  - Financial damage
  - Operational disruption
- **Mitigation**:
  - Regular backups
  - Endpoint protection
  - Network segmentation
  - User training

## 3.3 Real-World Incident Analysis: WannaCry Ransomware Attack

### What Happened
- Exploited vulnerability in Windows SMB protocol
- Global outbreak in May 2017
- Infected over 200,000 computers in 150 countries
- Estimated damages: $4 billion

### Attack Mechanism
- Spread through unpatched Windows systems
- Encrypted user files
- Demanded Bitcoin ransom
- Primarily targeted:
  - Healthcare systems
  - Government agencies
  - Small businesses

### Key Learnings
1. **Patch Management**
   - Regularly update systems
   - Apply security patches immediately
   - Maintain current software versions

2. **Network Security**
   - Use firewalls
   - Restrict unnecessary ports
   - Implement network segmentation

3. **User Training**
   - Recognize phishing attempts
   - Understand cybersecurity risks
   - Follow security protocols

## Cybersecurity Tools to Explore

### 1. Wireshark
- Network traffic analysis
- Packet capture and inspection
- Protocol analysis

### 2. Nmap
- Network discovery
- Security scanning
- Vulnerability detection

### 3. Burp Suite
- Web application security testing
- Traffic interception
- Vulnerability assessment

## Learning Objectives Achieved
- ✅ Understand core cybersecurity principles
- ✅ Recognize common cyber threats
- ✅ Analyze real-world cybersecurity incidents
- ✅ Learn basic mitigation strategies

## Recommended Next Steps
- Practice using cybersecurity tools
- Stay updated on emerging threats
- Develop a security-first mindset
- Continuous learning and certification

# IP Addressing Detailed Notes

## What is an IP Address?

- An **IP address (Internet Protocol address)** is a unique identifier assigned to each device on a network.
- It allows devices to **communicate** with each other over the internet or a local network.

## IPv4 Address

### IPv4 Format
- **32-bit address**, divided into 4 octets separated by dots.
- Each octet ranges from **0 to 255**.
- Example: `192.168.1.1`

### IPv4 Address Classes

IPv4 addresses are divided into 5 classes (A, B, C, D, E):

| Class | Range | Default Subnet Mask | Network/Host Ratio | Purpose |
|-------|-------|---------------------|-------------------|---------|
| A | 1.0.0.0 – 126.255.255.255 | 255.0.0.0 | Large networks, many hosts | Public networks |
| B | 128.0.0.0 – 191.255.255.255 | 255.255.0.0 | Medium-sized networks | Public networks |
| C | 192.0.0.0 – 223.255.255.255 | 255.255.255.0 | Small networks, few hosts | Public networks |
| D | 224.0.0.0 – 239.255.255.255 | N/A | Reserved for Multicast | Streaming, multicast traffic |
| E | 240.0.0.0 – 255.255.255.255 | N/A | Reserved for Research | Experimental use |

## Public IP vs Private IP

### 1. Public IP
- Assigned by ISPs (Internet Service Providers).
- Globally routable over the internet.
- Example: `8.8.8.8` (Google DNS).

### 2. Private IP
- Reserved for internal network use; not routable on the internet.
- Private IP ranges:

| Private IP Range | Class |
|-----------------|-------|
| 10.0.0.0 – 10.255.255.255 | Class A |
| 172.16.0.0 – 172.31.255.255 | Class B |
| 192.168.0.0 – 192.168.255.255 | Class C |

#### Why Use Private IPs?
- To conserve public IP addresses.
- Used in local networks (homes, offices).
- Requires NAT (Network Address Translation) for internet access.

## Subnetting

### What is Subnetting?
- **Subnetting** divides a large network into smaller networks (subnets) for:
  - Improved network efficiency
  - Enhanced security
  - Better resource allocation

### Subnet Mask
- Determines which part of the IP address is **network** and which is **host**.
- Example: `255.255.255.0` → Network part is first 3 octets.

### Default Subnet Masks

| Class | Default Subnet Mask |
|-------|---------------------|
| A | 255.0.0.0 |
| B | 255.255.0.0 |
| C | 255.255.255.0 |

### Subnetting Example
Given IP Address: `192.168.1.0/24`
- `/24` → Means 24 bits are for the network, 8 bits for hosts.
- **Subnet Mask**: `255.255.255.0`
- **Available Hosts**: 2^8 - 2 = 254 hosts

| Network ID | Range | Broadcast Address |
|-----------|-------|------------------|
| 192.168.1.0 | 192.168.1.1 – 192.168.1.254 | 192.168.1.255 |

### Broadcast Address
- **Definition**: A special IP address used to send data to all devices in a subnet.
- **Example**: 
  - Subnet: `192.168.1.0/24` → Broadcast address: `192.168.1.255`

## CIDR Notation (Classless Inter-Domain Routing)
- CIDR allows flexible subnetting by specifying the **number of bits used for the network**.
- Example:
  - `192.168.1.0/24` → 24 network bits, 8 host bits.

| CIDR | Subnet Mask | Hosts per Subnet |
|------|-------------|-----------------|
| /24 | 255.255.255.0 | 254 |
| /25 | 255.255.255.128 | 126 |
| /26 | 255.255.255.192 | 62 |
| /27 | 255.255.255.224 | 30 |
| /28 | 255.255.255.240 | 14 |



### 4. ifconfig / ip
- Display and configure IP settings



# **Week 5: Web Application Security and System Hacking**

## **Day 1: Web Application Vulnerabilities – OWASP Top 10**


# Understanding Ports: A Comprehensive Guide

## What are Ports?

Ports are virtual points or endpoints used for specific types of network communication. They help computers route incoming data to the correct services or applications. Think of ports like specialized doors through which different types of network traffic enter and exit a computer.

## Port Basics

### Port Number Ranges
- **Well-Known Ports (0-1023)**: Reserved for standard services
- **Registered Ports (1024-49151)**: User-registered services
- **Dynamic/Private Ports (49152-65535)**: Temporary or private use

### Common Well-Known Ports
| Port | Protocol | Service |
|------|----------|---------|
| 20/21 | TCP | FTP (File Transfer Protocol) |
| 22 | TCP | SSH (Secure Shell) |
| 23 | TCP | Telnet |
| 25 | TCP | SMTP (Simple Mail Transfer) |
| 53 | UDP/TCP | DNS (Domain Name System) |
| 80 | TCP | HTTP (Web Traffic) |
| 443 | TCP | HTTPS (Secure Web Traffic) |
| 3389 | TCP | RDP (Remote Desktop Protocol) |

## Port Scanning Techniques

### 1. Connection Scanning
- **TCP Connect Scan**: Completes full TCP connection
- **Command Example**:
```bash
nmap -sT 192.168.1.1
```

### 2. Stealth Scanning
- **SYN Scan**: Half-open scanning technique
- **Command Example**:
```bash
nmap -sS 192.168.1.1
```

### 3. UDP Scanning
- **Detects open UDP ports**
- **Command Example**:
```bash
nmap -sU 192.168.1.1
```

## Port Security Considerations

### Potential Risks
1. **Open Ports**: Can be entry points for attackers
2. **Unnecessary Services**: Increase attack surface
3. **Misconfigured Firewall Rules**

### Mitigation Strategies
- **Firewall Configuration**
- **Regular Port Audits**
- **Close Unused Ports**
- **Implement Network Segmentation**

## Practical Port Analysis Tools

1. **Nmap**
   - Comprehensive port scanning
   ```bash
   nmap -p- 192.168.1.1  # Scan all ports
   ```

2. **Netstat**
   - View active network connections
   ```bash
   netstat -tuln  # List listening ports
   ```

3. **Wireshark**
   - Network protocol analysis
   - Inspect port-specific traffic

## Advanced Port Scanning Techniques

### 1. Banner Grabbing
- Retrieve service information from open ports
```bash
nmap -sV 192.168.1.1
```

### 2. OS Fingerprinting
- Determine operating system
```bash
nmap -O 192.168.1.1
```

## Cybersecurity Implications

### Port Vulnerability Assessment
1. **Identify Exposed Services**
2. **Detect Potential Entry Points**
3. **Understand Network Topology**

### Common Attack Vectors
- **Port Scanning**
- **Service Exploitation**
- **Unauthorized Access**

## Defensive Recommendations

1. **Use Firewalls**
2. **Implement Network Segmentation**
3. **Regular Vulnerability Assessments**
4. **Disable Unnecessary Services**
5. **Keep Systems Updated**

## Hands-On Practice

### Port Scanning Exercise
1. **Scan Local Network**
```bash
nmap 192.168.1.0/24
```

2. **Detailed Scan**
```bash
nmap -sV -p- 192.168.1.1
```

## Learning Resources
- **SANS Institute Networking Courses**
- **Cybrary Network Security Training**
- **Offensive Security Certified Professional (OSCP)**

## Key Takeaways
- Ports are crucial network communication endpoints
- Understanding ports is critical for security
- Regular scanning and monitoring are essential
- Multiple tools exist for port analysis