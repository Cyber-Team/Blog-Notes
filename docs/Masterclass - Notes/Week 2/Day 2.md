## Networking Fundamentals – OSI Model, IP Addressing, and Basic Network Troubleshooting

## 2.1 OSI Model

The OSI (Open Systems Interconnection) Model breaks network communication into 7 layers for understanding and troubleshooting:

| Layer | Number | Function | Example Protocols |
|-------|--------|----------|-------------------|
| Application | 7 | User interaction | HTTP, FTP, SMTP |
| Presentation | 6 | Data encryption, formatting | SSL/TLS |
| Session | 5 | Manage sessions | NetBIOS, PPTP |
| Transport | 4 | Data transfer reliability | TCP, UDP |
| Network | 3 | Routing and IP addressing | IP, ICMP |
| Data Link | 2 | Framing and MAC addresses | Ethernet, ARP |
| Physical | 1 | Hardware transmission | Cables, Wi-Fi |

### Layer Breakdown

#### Layer 7: Application
- Closest layer to the end user
- Provides network services directly to applications
- Protocols: HTTP, FTP, SMTP, SSH

#### Layer 6: Presentation
- Translates data between application and network formats
- Handles data encryption and compression
- Ensures data is in a usable format
- Protocols: SSL/TLS, JPEG, GIF

#### Layer 5: Session
- Manages connections between applications
- Establishes, maintains, and terminates sessions
- Handles authentication and reconnection
- Protocols: NetBIOS, PPTP

#### Layer 4: Transport
- Ensures reliable data transfer
- Manages data segmentation and reassembly
- Provides error checking and flow control
- Protocols:
  - TCP (Transmission Control Protocol)
    - Connection-oriented
    - Guaranteed delivery
    - Used for web browsing, email
  - UDP (User Datagram Protocol)
    - Connectionless
    - Faster but less reliable
    - Used for streaming, online gaming

#### Layer 3: Network
- Handles routing and logical addressing
- Determines best path for data transmission
- Manages IP addressing
- Protocols: IP, ICMP

#### Layer 2: Data Link
- Manages physical addressing (MAC addresses)
- Detects and possibly corrects errors from the physical layer
- Defines how data is formatted for transmission
- Protocols: Ethernet, ARP

#### Layer 1: Physical
- Actual physical connection
- Deals with hardware transmission
- Defines physical characteristics
- Includes: Network cables, Wi-Fi, electrical signals


### **OSI Model**:
- **Layers**:
  1. Physical: Transmission of raw bit streams (e.g., cables).
  2. Data Link: Frame transmission (e.g., MAC addresses).
  3. Network: Routing and IP addressing (e.g., routers).
  4. Transport: Data delivery and error checking (e.g., TCP/UDP).
  5. Session: Managing sessions (e.g., login sessions).
  6. Presentation: Data translation and encryption (e.g., SSL).
  7. Application: End-user interfaces (e.g., HTTP, FTP).

## 2.2 IP Addressing

## What is an IP Address?

- An **IP address (Internet Protocol address)** is a unique identifier assigned to each device on a network.
- It allows devices to **communicate** with each other over the internet or a local network.

## IPv4 Address

### IPv4 Format
- **32-bit address**, divided into 4 octets separated by dots.
- Each octet ranges from **0 to 255**.
- Example: `192.168.1.1`

### IPv4 Address Classes

IPv4 addresses are divided into 5 classes (A, B, C, D, E):

| Class | Range | Default Subnet Mask | Network/Host Ratio | Purpose |
|-------|-------|---------------------|-------------------|---------|
| A | 1.0.0.0 – 126.255.255.255 | 255.0.0.0 | Large networks, many hosts | Public networks |
| B | 128.0.0.0 – 191.255.255.255 | 255.255.0.0 | Medium-sized networks | Public networks |
| C | 192.0.0.0 – 223.255.255.255 | 255.255.255.0 | Small networks, few hosts | Public networks |
| D | 224.0.0.0 – 239.255.255.255 | N/A | Reserved for Multicast | Streaming, multicast traffic |
| E | 240.0.0.0 – 255.255.255.255 | N/A | Reserved for Research | Experimental use |

## Public IP vs Private IP

### 1. Public IP
- Assigned by ISPs (Internet Service Providers).
- Globally routable over the internet.
- Example: `8.8.8.8` (Google DNS).

### 2. Private IP
- Reserved for internal network use; not routable on the internet.
- Private IP ranges:

| Private IP Range | Class |
|-----------------|-------|
| 10.0.0.0 – 10.255.255.255 | Class A |
| 172.16.0.0 – 172.31.255.255 | Class B |
| 192.168.0.0 – 192.168.255.255 | Class C |

#### Why Use Private IPs?
- To conserve public IP addresses.
- Used in local networks (homes, offices).
- Requires NAT (Network Address Translation) for internet access.

## Subnetting

### What is Subnetting?
- **Subnetting** divides a large network into smaller networks (subnets) for:
  - Improved network efficiency
  - Enhanced security
  - Better resource allocation

### Subnet Mask
- Determines which part of the IP address is **network** and which is **host**.
- Example: `255.255.255.0` → Network part is first 3 octets.

### Default Subnet Masks

| Class | Default Subnet Mask |
|-------|---------------------|
| A | 255.0.0.0 |
| B | 255.255.0.0 |
| C | 255.255.255.0 |

### Subnetting Example
Given IP Address: `192.168.1.0/24`
- `/24` → Means 24 bits are for the network, 8 bits for hosts.
- **Subnet Mask**: `255.255.255.0`
- **Available Hosts**: 2^8 - 2 = 254 hosts

| Network ID | Range | Broadcast Address |
|-----------|-------|------------------|
| 192.168.1.0 | 192.168.1.1 – 192.168.1.254 | 192.168.1.255 |

**Broadcast and Network Addresses**:
   - **Network Address**: First address in a subnet (e.g., `192.168.1.0`).
   - **Broadcast Address**: Last address in a subnet (e.g., `192.168.1.255`).

## CIDR Notation (Classless Inter-Domain Routing)
- CIDR allows flexible subnetting by specifying the **number of bits used for the network**.
- Example:
  - `192.168.1.0/24` → 24 network bits, 8 host bits.

| CIDR | Subnet Mask | Hosts per Subnet |
|------|-------------|-----------------|
| /24 | 255.255.255.0 | 254 |
| /25 | 255.255.255.128 | 126 |
| /26 | 255.255.255.192 | 62 |
| /27 | 255.255.255.224 | 30 |
| /28 | 255.255.255.240 | 14 |


## 2.3 Basic Network Troubleshooting Commands

### 1. ping
- Tests connectivity to a host
- Command: `ping 8.8.8.8`
- Checks network responsiveness
- Measures round-trip time

### 2. traceroute
- Shows path packets take to reach destination
- Command: `traceroute google.com`
- Helps identify network routing issues

### 3. netstat
- Displays network connections
- Command: `netstat -an`
- Shows active connections and listening ports

### 4. nslookup
- Queries DNS to resolve hostnames
- Command: `nslookup google.com`
- Verifies DNS resolution

### 5. curl
- Tests HTTP/HTTPS connections
- Command: `curl https://google.com`
- Retrieves website content
- Useful for checking web service availability

## What are Ports?

Ports are virtual points or endpoints used for specific types of network communication. They help computers route incoming data to the correct services or applications. Think of ports like specialized doors through which different types of network traffic enter and exit a computer.

## Port Basics

### Port Number Ranges
- **Well-Known Ports (0-1023)**: Reserved for standard services
- **Registered Ports (1024-49151)**: User-registered services
- **Dynamic/Private Ports (49152-65535)**: Temporary or private use

### Common Well-Known Ports
| Port | Protocol | Service |
|------|----------|---------|
| 20/21 | TCP | FTP (File Transfer Protocol) |
| 22 | TCP | SSH (Secure Shell) |
| 23 | TCP | Telnet |
| 25 | TCP | SMTP (Simple Mail Transfer) |
| 53 | UDP/TCP | DNS (Domain Name System) |
| 80 | TCP | HTTP (Web Traffic) |
| 443 | TCP | HTTPS (Secure Web Traffic) |
| 3389 | TCP | RDP (Remote Desktop Protocol) |


---