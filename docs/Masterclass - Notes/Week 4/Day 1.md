## Enumeration Techniques

### What is Enumeration?
- **Definition**: Enumeration is the process of identifying and extracting detailed information about a target network, system, or application.
- **Purpose**:
  - Discover usernames, machine names, shared resources, and services
  - Identify weak configurations or vulnerabilities to gain further access

### Types of Enumeration

#### 1. NetBIOS Enumeration
**Definition**: NetBIOS (Network Basic Input/Output System) allows applications on different computers to communicate over a LAN.

**Enumeration Goals**:
- Shared resources
- Machine and domain names
- Usernames

**Tools for NetBIOS Enumeration**:

1. **NBTScan**
   ```bash
   nbtscan -r 192.168.1.0/24
   ```

2. **Net View** (Windows)
   ```cmd
   net view \\192.168.1.10
   ```

3. **Nmap**
   ```bash
   nmap --script smb-os-discovery 192.168.1.10
   ```

#### 2. SMB Enumeration
**Definition**: SMB (Server Message Block) is a protocol for file sharing, printer sharing, and inter-process communication on Windows systems.

**Purpose**:
- Identify shared files and folders
- Discover potential misconfigurations or weak permissions

**Tools for SMB Enumeration**:

1. **SMBClient**
   ```bash
   smbclient -L //192.168.1.10
   ```

2. **enum4linux**
   ```bash
   enum4linux -a 192.168.1.10
   ```

3. **Nmap SMB Scripts**
   ```bash
   nmap --script smb-enum-shares 192.168.1.10
   ```

#### 3. DNS Enumeration
**Definition**: DNS enumeration is the process of collecting DNS records to map an organization's domain and subdomains.

**Purpose**:
- Identify IP addresses, mail servers, and subdomains
- Understand the network architecture

**DNS Records to Enumerate**:

| Record Type | Purpose |
|------------|---------|
| A | Maps hostname to IPv4 |
| MX | Identifies mail servers |
| NS | Identifies name servers |
| TXT | Miscellaneous information |

**Tools for DNS Enumeration**:

1. **dig**
   ```bash
   dig example.com
   dig @8.8.8.8 example.com ANY
   ```

2. **Fierce**
   ```bash
   fierce --domain example.com
   ```

3. **DNSenum**
   ```bash
   dnsenum example.com
   ```

4. **Sublist3r**
   ```bash
   sublist3r -d example.com
   ```



