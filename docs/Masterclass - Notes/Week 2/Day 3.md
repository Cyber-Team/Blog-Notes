## Introduction to Cybersecurity Concepts : CIA Triad, Types of Threats, and Real-World Analysis

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

## Key Tools for IP Management and Troubleshooting

### 1. Nmap (Network Mapper)
- **Purpose**: Scan IP addresses, open ports, and services
- **Command**: `nmap 192.168.1.0/24` → Scan the subnet

### 2. Wireshark
- **Purpose**: Analyze packet captures and monitor network traffic
- **Usage**: Start Wireshark, choose the network interface, and capture packets

### 3. IPCalc
- **Purpose**: Calculate subnets, broadcast addresses, and hosts
- **Command**: `ipcalc 192.168.1.0/24`

### Learning Outcomes for Week 2
- ✅ Be comfortable with advanced Linux operations and bash scripting.
- ✅ Understand networking fundamentals and basic troubleshooting.
- ✅ Recognize cybersecurity threats and analyze real-world incidents.