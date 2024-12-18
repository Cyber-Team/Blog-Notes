## Open-Source Intelligence (OSINT) Gathering Techniques

### What is OSINT?
- **Definition**: Open-Source Intelligence (OSINT) is the process of collecting publicly available information about a target.
- **Purpose**:
  - Gather intelligence for reconnaissance
  - Identify sensitive data or vulnerabilities

### OSINT Sources

#### 1. Search Engines
**Google Dorks**: Advanced queries for Google search
```bash
site:example.com filetype:pdf
intitle:"Index of" site:example.com
```

#### 2. Social Media Platforms
**Tools**:
- **Twint**: Scrapes Twitter data
  ```bash
  twint -u target_username
  ```

#### 3. WHOIS Databases
- Obtain information about domains and ownership

#### 4. Public Archives and Data Dumps
- **Have I Been Pwned**: Check for compromised credentials
- **Sherlock**: Find usernames across multiple platforms
  ```bash
  sherlock target_username
  ```

#### 5. Image Analysis
**ExifTool**: Extract image metadata
```bash
exiftool image.jpg
```

#### 6. IP and Network OSINT
**Shodan CLI**:
```bash
shodan search apache country:IN
```