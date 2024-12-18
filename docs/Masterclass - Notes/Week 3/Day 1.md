## Footprinting and Reconnaissance Techniques

### What is Footprinting?
- **Definition**: Footprinting is the process of gathering information about a target system, network, or organization to identify potential vulnerabilities.
- **Purpose**:
  - To collect publicly available information
  - Prepare for later phases like scanning and exploitation

### Types of Footprinting

#### 1. Active Footprinting
- Involves direct interaction with the target
- Examples: Scanning ports, using tools like Nmap, interacting with web servers

#### 2. Passive Footprinting
- Involves collecting information without directly interacting with the target
- Examples: Gathering data from public websites, WHOIS records, and DNS data

### Footprinting Techniques

#### 1. WHOIS Lookups
**Definition**: WHOIS is a protocol used to query databases for information about registered domains (owners, IP ranges, contacts)

**Why use WHOIS?**
- Obtain domain ownership information
- Discover DNS servers, IP address ranges, and organizational details

**Tools for WHOIS Lookups**:
- **WHOIS CLI**: Run `whois example.com`
- **Web Tools**:
  - [ICANN Lookup](https://lookup.icann.org)
  - [Who.is](https://www.who.is)

**Example Output**:
```
Domain Name: example.com
Registrar: XYZ Registrar
Owner: John Doe
DNS: ns1.example.com, ns2.example.com
```

#### 2. DNS Footprinting
**Definition**: Gathering information about DNS (Domain Name System) records to identify target servers and subdomains

**Why use DNS Footprinting?**
- Identify mail servers, name servers, and subdomains
- Understand the target's network infrastructure

**Key DNS Record Types**:

| Record Type | Purpose |
|------------|---------|
| A | Maps hostname to IPv4 address |
| AAAA | Maps hostname to IPv6 address |
| MX | Identifies mail servers |
| CNAME | Alias of another domain |
| TXT | Miscellaneous text-based records |

**Tools for DNS Footprinting**:
1. **`dig` (Domain Information Groper)**
   - **Command**: `dig example.com` → Retrieve DNS records
   - **Command for subdomains**: `dig sub.example.com`

2. **`nslookup`**
   - **Command**: `nslookup example.com`

3. **Online Tools**:
   - [MXToolbox](https://mxtoolbox.com)
   - [DNSDumpster](https://dnsdumpster.com) → Visualize DNS infrastructure

#### 3. Website Footprinting
**Definition**: Gathering data about a target website and its technologies

**Purpose**:
- Identify software versions and vulnerabilities
- Analyze web server, scripts, and CMS (e.g., WordPress)

**Tools for Website Footprinting**:
1. **WhatWeb**: Detect technologies and versions of web services
   - **Command**: `whatweb example.com`

2. **Wappalyzer** (Browser Extension):
   - Identify CMS, frameworks, libraries, and databases

3. **Burp Suite**:
   - Analyze website requests, responses, and server info

4. **Online Tools**:
   - [BuiltWith](https://builtwith.com) → Detect website technologies



