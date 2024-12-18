## Practical Exercises with OSINT Tools

### Objective
- Gain hands-on experience using OSINT tools to gather intelligence

### Lab Tasks

1. **Google Dorking**
   ```bash
   site:example.com filetype:doc
   intitle:"Index of"
   ```

2. **Social Media Recon with Sherlock**
   ```bash
   sherlock target_username
   ```

3. **WHOIS and DNS Enumeration**
   ```bash
   whois example.com
   dig example.com ANY
   dnsenum example.com
   ```

4. **Network Recon with Shodan**
   ```bash
   shodan search apache country:IN
   ```

5. **Metadata Analysis**
   ```bash
   exiftool target_image.jpg
   ```

### Lab Report Template

| Task | Tool Used | Command | Findings |
|------|-----------|---------|----------|
| Google Dorking | Google | `site:example.com` | Found PDF files |
| Username Search | Sherlock | `sherlock target_username` | User profiles |
| DNS Enumeration | dig/dnsenum | `dig example.com` | DNS records |

### Learning Outcomes for Week 4
- ✅ Perform enumeration using NetBIOS, SMB, and DNS tools
- ✅ Understand OSINT methodologies and gather intelligence
- ✅ Use tools like Sherlock, ExifTool, and Shodan for practical recon
- ✅ Generate a comprehensive report from practical exercises