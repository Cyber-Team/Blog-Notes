## Web Application Vulnerabilities – OWASP Top 10

### **What is OWASP?**
- **Definition**: The **Open Web Application Security Project (OWASP)** is a global community that focuses on improving the security of software.  

### **What are Web Application Vulnerabilities?**  
- **Definition**: Web application vulnerabilities are flaws or weaknesses in an application's code, structure, or configuration that could be exploited by an attacker.
  
- **Why Learn about Vulnerabilities?**  
  - Understanding vulnerabilities helps security professionals protect applications.
  - Identifying risks before they can be exploited by attackers.
  - Knowing how attackers think helps in creating secure applications.

### **OWASP Top 10 Overview**  
The **OWASP Top 10** is a list published by the Open Web Application Security Project (OWASP) that categorizes the ten most critical web application security risks. These risks reflect the most common threats to modern web applications.

#### **1. Injection**
   - **What is it?**: Injection flaws occur when untrusted data is sent to an interpreter as part of a command or query, leading to unwanted commands being executed.
   - **Examples**: SQL injection, Command injection.
   - **Risk**: Unauthorized access to the backend, database manipulation.
   
   **Tools for Detecting**:  
   - **SQLmap**: Automated tool to detect and exploit SQL injection flaws.
   - **Burp Suite**: Can automate injections and fuzz inputs to find vulnerabilities.

#### **2. Broken Authentication**
   - **What is it?**: Flaws that allow attackers to compromise user identities and credentials, leading to unauthorized access.
   - **Examples**: Weak session handling, predictable password policies.
   - **Risk**: Account takeovers, unauthorized actions.

   **Tools for Detecting**:  
   - **Burp Suite**: Used for brute-forcing login endpoints.
   - **Hydra**: Brute-force attack tool for testing authentication mechanisms.

#### **3. Sensitive Data Exposure**
   - **What is it?**: Insecure storage or transmission of sensitive data (e.g., passwords, credit card details).
   - **Examples**: Weak encryption, unencrypted traffic.
   - **Risk**: Data leaks, privacy violations.

   **Tools for Detecting**:
   - **Wireshark**: Packet analyzer to check for unencrypted sensitive data.

#### **4. XML External Entities (XXE)**
   - **What is it?**: An attacker submits malicious XML content to exploit vulnerable XML parsers and perform server-side request forgery (SSRF) or retrieve local files.
   - **Examples**: Attacks using vulnerable XML parsers.
   - **Risk**: Remote code execution, data exfiltration.

   **Tools for Detecting**:  
   - **Burp Suite**: Can test for XML-based vulnerabilities.
   - **XXE Injector**: Specialized tool for testing XXE vulnerabilities.

#### **5. Broken Access Control**
   - **What is it?**: Access controls are improperly implemented, allowing unauthorized users to access sensitive resources or perform unauthorized actions.
   - **Examples**: Insecure direct object references (IDOR).
   - **Risk**: Data theft, privilege escalation.

   **Tools for Detecting**:  
   - **OWASP ZAP**: Open-source tool to scan for access control vulnerabilities.

#### **6. Security Misconfiguration**
   - **What is it?**: The application is misconfigured, such as leaving unnecessary services open, or debugging information exposed.
   - **Examples**: Default credentials, unnecessary services enabled.
   - **Risk**: Easy exploitation by attackers.

   **Tools for Detecting**:  
   - **Nmap**: Scanning tool to find unnecessary open ports and misconfigurations.
   - **Nikto**: Web server scanner that identifies misconfigurations and vulnerabilities.

#### **7. Cross-Site Scripting (XSS)**
   - **What is it?**: XSS occurs when an attacker injects malicious scripts into content that is viewed by other users.
   - **Examples**: Reflected XSS, Stored XSS.
   - **Risk**: Data theft, session hijacking.

   **Tools for Detecting**:  
   - **OWASP ZAP**: Scan for script-based injections.
   - **Burp Suite**: Intercepting proxy to test inputs for vulnerabilities.

#### **8. Insecure Deserialization**
   - **What is it?**: When an attacker sends untrusted data to an application, it can lead to remote code execution or escalation of privileges.
   - **Examples**: Exploiting vulnerable serialization mechanisms.
   - **Risk**: Remote code execution, system compromise.

   **Tools for Detecting**:
   - **Burp Suite**: Intercept and modify serialized objects.
   - **ysoserial**: Tool to exploit deserialization vulnerabilities.

#### **9. Using Components with Known Vulnerabilities**
   - **What is it?**: Using outdated or vulnerable libraries and frameworks exposes the application to known attacks.
   - **Examples**: Unpatched CVEs in libraries like Apache Struts, Log4j.
   - **Risk**: Exploitation via known vulnerabilities.

   **Tools for Detecting**:
   - **Snyk**: Tool for detecting vulnerable dependencies.
   - **OWASP Dependency-Check**: Scan dependencies for known vulnerabilities.

#### **10. Insufficient Logging & Monitoring**
   - **What is it?**: Lack of proper logging and monitoring prevents timely detection of attacks.
   - **Examples**: Not logging critical events.
   - **Risk**: Delayed attack detection.

   **Tools for Detecting**:  
   - **ELK Stack**: For centralized logging and real-time monitoring.
   - **Splunk**: Used for event monitoring and detecting anomalies.



### **OWASP Top 10 Vulnerabilities (2021)**  

| **Rank** | **Vulnerability**             | **Description**                                       | **Tools**                          |  
|----------|--------------------------------|-------------------------------------------------------|------------------------------------|  
| **A01**  | Broken Access Control          | Improper enforcement of access restrictions.         | Burp Suite, OWASP ZAP              |  
| **A02**  | Cryptographic Failures         | Weak encryption leading to data leaks.               | SSLScan, OpenSSL                   |  
| **A03**  | Injection                      | Code injections like SQLi, XSS.                      | SQLMap, Burp Suite, NoSQLMap       |  
| **A04**  | Insecure Design                | Flawed application design.                           | Threat Modeling Tools              |  
| **A05**  | Security Misconfiguration      | Default settings, unused pages, exposed files.       | Nmap, Nikto, Wappalyzer            |  
| **A06**  | Vulnerable Components          | Outdated libraries or frameworks.                    | Dependency-Check, Retire.js        |  
| **A07**  | Identification and Authentication Failures | Weak authentication, missing MFA.            | Hydra, Burp Suite, Gobuster         |  
| **A08**  | Software and Data Integrity Failures | Exploiting insecure CI/CD pipelines.          | OWASP Dependency-Track             |  
| **A09**  | Security Logging and Monitoring Failures | Insufficient monitoring of security events.   | ELK Stack, Graylog                 |  
| **A10**  | Server-Side Request Forgery (SSRF) | Exploiting server functionality to perform requests. | Burp Suite, SSRFmap                |  

### **Practical Exercise: Identifying OWASP Top 10 Vulnerabilities**  

1. **Tool: Burp Suite**  
   - **Why**: Proxy-based tool for testing web applications.  
   - **How**:  
     - Intercept and analyze HTTP requests.  
     - Perform active and passive scans.  
   - **Command**:  
     ```bash
     burpsuite
     ```  

2. **Tool: SQLMap**  
   - **Why**: Automated SQL injection detection and exploitation.  
   - **How**:  
     - Test for SQL vulnerabilities and dump database contents.  
   - **Command**:  
     ```bash
     sqlmap -u "http://example.com?id=1" --dbs
     ```  

3. **Tool: OWASP ZAP (Zed Attack Proxy)**  
   - **Why**: Automated scanner for web application security testing.  
   - **How**:  
     - Use ZAP to perform spidering and vulnerability scans.  
   - **Command**:  
     ```bash
     zap.sh -daemon -port 8080
     ```  

4. **Tool: Nikto**  
   - **Why**: Web server scanner to detect security issues.  
   - **How**:  
     - Detect misconfigurations and vulnerable components.  
   - **Command**:  
     ```bash
     nikto -h http://example.com
     ```  

