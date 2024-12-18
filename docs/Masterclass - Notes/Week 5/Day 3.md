## Privilege Escalation Techniques

## **Day 3: Privilege Escalation Techniques for Windows and Linux**

### **What is Privilege Escalation?**  
Privilege escalation involves gaining higher levels of access or control over a system, often moving from a normal user account to an admin or root account.

### **1. Privilege Escalation in Windows**  

#### **Local Privilege Escalation**:
   - Exploiting vulnerabilities in the local system to gain administrator rights.
   
   **Common Techniques**:  
   - **Unquoted Service Path**: Service misconfiguration that allows users to execute malicious binaries by placing them in the unquoted directory.
   
   **Tools for Escalation**:  
   - **JuicyPotato**: Exploit COM objects to get SYSTEM-level access.
   - **Mimikatz**: Dump Windows credentials from memory.

#### **Remote Privilege Escalation**:  
   - Exploiting open ports, vulnerabilities, or services that can provide remote administrative access.

#### **Tools for Windows Privilege Escalation**:  
- **WinPeas**: Script for Windows privilege escalation.  
- **PowerUp**: PowerShell script to identify misconfigurations.  

### **2. Privilege Escalation in Linux**

#### **Common Techniques**:  
1. **Sudo Misconfigurations**:  
   - Sudo allows a user to run commands as root; misconfigurations or vulnerabilities can be exploited.
   
   **Example**:  
   ```bash
   sudo -l
   ```
2. **SUID Binaries**  
   - Identify files with SUID permission set.  
   - **Command**:  
     ```bash
     find / -perm -4000 2>/dev/null
     ```  
   - Exploit misconfigured binaries for privilege escalation.

3. **Kernel Exploits**:  
   - Vulnerabilities in the Linux kernel allow local privilege escalation.
   - **Tools**: **Linux Exploit Suggester**, **ExploitDB**.
   
   **Example**:  
   ```bash
   linux-exploit-suggester.sh
   ```

4. **Weak Permissions**  
   - Search for writable files owned by root.  
   - **Command**:  
     ```bash
     find /etc -writable
     ```  

**Tools for Linux Privilege Escalation**:  
- **Linpeas**: Script for Linux privilege escalation checks.  
- **GTFOBins**: Find binaries that can be exploited.  


### **Hands-On Exercises**

1. **Windows Privilege Escalation**  
   - Perform privilege escalation using **Mimikatz** or **JuicyPotato**.

2. **Linux Privilege Escalation**  
   - Use **Linux Exploit Suggester** or check **sudo** misconfigurations.


### **Practical Exercises**  

1. **Metasploit Privilege Escalation**  
   - Use Metasploit to exploit a vulnerable service and escalate privileges.  

2. **Linux Escalation with Linpeas**  
   - Run Linpeas to enumerate privilege escalation paths.  
   - **Command**:  
     ```bash
     ./linpeas.sh
     ```  

3. **Windows Escalation with WinPeas**  
   - Run WinPeas to identify misconfigurations.  
   - **Command**:  
     ```bash
     winpeas.exe
     ```  

### **Learning Outcomes for Week 5**  
✅ Understand the OWASP Top 10 vulnerabilities and how to identify them.  
✅ Perform system hacking using password cracking, social engineering, and Metasploit.  
✅ Execute privilege escalation techniques on Windows and Linux systems.  
✅ Use tools like Burp Suite, John the Ripper, Metasploit, and Linpeas to identify and exploit vulnerabilities.