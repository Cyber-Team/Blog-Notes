## Linux Basics II (User Management, Permissions, Package Management)

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

### Learning Outcomes for Week 1
- ✅ A fully functional lab environment using VirtualBox and Kali Linux.
- ✅ A solid foundation in Linux navigation and basic commands.
- ✅ An understanding of user management, permissions, and package management.
---