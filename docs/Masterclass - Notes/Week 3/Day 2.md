## Network Scanning Methods

### What is Network Scanning?
**Definition**: Network scanning involves discovering active devices, ports, and services on a network

**Purpose**:
- Identify open ports and services
- Fingerprint operating systems
- Map the network for vulnerabilities

### Types of Scanning

1. **Port Scanning**
   - Checks for open ports on target devices
   - Helps identify running services (e.g., HTTP, FTP)

2. **Service Scanning**
   - Detects applications and versions running on open ports

3. **OS Fingerprinting**
   - Determines the target system's operating system using packet analysis

### Nmap: Network Scanning Tool

**What is Nmap?**
- Nmap (Network Mapper) is an open-source tool for network discovery and security auditing

**Why use Nmap?**
- Identify live hosts, open ports, running services, and OS information

**Basic Nmap Commands**:

| Command | Purpose |
|---------|---------|
| `nmap 192.168.1.1` | Basic scan of a single IP |
| `nmap 192.168.1.0/24` | Scan an entire subnet |
| `nmap -sS 192.168.1.1` | Perform a stealth TCP SYN scan |
| `nmap -O 192.168.1.1` | Enable OS detection |
| `nmap -sV 192.168.1.1` | Detect service versions on open ports |
| `nmap --script vuln 192.168.1.1` | Run vulnerability scan with Nmap scripts |

#### FOR MORE ON NMAP VISIT : [CYBERTEAM_NMAP](https://youtu.be/Wu5AmSBdujg?si=MXKKvUakQgcKvMEH)

**Other Tools for Scanning**:
1. **Masscan**: Fast port scanning tool for large networks
   - **Command**: `masscan -p1-65535 192.168.1.0/24`
2. **Angry IP Scanner**: GUI-based network scanning tool for beginners

### OS Fingerprinting
**Definition**: Identifying the operating system of a target machine using network packets

**Tools for OS Fingerprinting**:
1. **Nmap** (using `-O`)
2. **xProbe**: A tool for active OS fingerprinting