## Hands-on Lab – Reconnaissance and Scanning

### Objective
- Perform hands-on activities using WHOIS, DNS queries, and Nmap for scanning

### Lab Tasks

1. **WHOIS Lookups**
   - Use `whois` CLI or ICANN Lookup to query a domain

2. **DNS Footprinting**
   - Use `dig` or `nslookup` to gather DNS information
   - Identify subdomains with `DNSDumpster`

3. **Website Footprinting**
   - Use `WhatWeb` and `Wappalyzer` to analyze website technologies

4. **Network Scanning with Nmap**
   - Scan for live hosts: `nmap 192.168.1.0/24`
   - Identify open ports: `nmap -p1-65535 192.168.1.1`
   - Perform OS detection: `nmap -O 192.168.1.1`
   - Run vulnerability scripts: `nmap --script vuln 192.168.1.1`

5. **Advanced Scanning with Masscan**
   - Scan large networks quickly: `masscan -p1-65535 192.168.1.0/24`

### Lab Report Template

| Task | Tool Used | Command | Observations |
|------|-----------|---------|--------------|
| WHOIS Query | WHOIS CLI | `whois example.com` | Output... |
| DNS Lookup | dig | `dig example.com` | Output... |
| Nmap Port Scan | Nmap | `nmap -p1-65535 target` | Open ports... |

### Learning Outcomes for Week 3
- ✅ Understand and perform footprinting techniques (WHOIS, DNS, website)
- ✅ Conduct network scanning using Nmap and other tools
- ✅ Identify open ports, services, and operating systems of target systems
- ✅ Develop a lab report summarizing reconnaissance and scanning findings