# LS170 Exam Prep Note

## The Internet

### What the internet is and how it works

- The internet is a 'network of networks.' It is a global network of vast number of servers, computers and other devices connected with hubs, switches, routers and other network equipment and infrastructure, so that the information would flow resiliantly even when a part of the network is down.

- To communicate over the internet, we would need to have systems of rules called 'protocols'. Protocol as in terms of computer networks means a set of rules governing the exchange or transmission of data.

- There are different layers of protocol groups in the overall system of communication, and ther are two popular models explaining such layers: OSI model and Internet Protocol Suite

- OSI (by the functions that each layer provides): Application / Presentation / Session / Transport / Network / Data Link / Physical

- Internet Protocol Suite (by the scope of communications within each layer): Application / Transport / Internet / Link

- PDU (Protocol Data Unit): block of data transferred over a network. The data of one layer is hidden by encapsulating it within a data unit of the layer below. (Not really clear what this means.) The entire PDU from a protocol at one layer is set as the data payload for a protocol at the alyer below.

  - Data Link (ex. Ethernet): Frame
  - Internet / Network (ex. IP): packet
  - Transport (ex. TCP): segment (TCP) / datagram (UDP)
  - Application (ex. HTTP): Request / Response

- Ethernet Frame (as a protocol data unit, a structure by constructed with sets of rules)

### The characteristics of the physical network

- What it does:

  - Convert the bits (binary data) into signals (electrical, light or radio signal) and transport the signal through physical media. (copper wire, fiber optics, radio waves)

- Why we care?

  - Because our understanding of the physical limitations impacts the way we think about higher-level protocols and decisions we make about how to use them in our application.

#### Latency

- A measure of the time it takes for some data to get from one point in a network to another point in a network. We consider latency as a measure of delay, and there are different types of delays including Propagation delay, Transmission delay, Processing delay and Queuing delay

- A lot of latency is due to the 'last-mile latency', meaning more frequent and shorter hops would be extpected to delay the communication at the network edge, where signal travels from ISP's network to end-user's home or office network.

- Round-trip Time (RTT): Time required for a signal to be sent and acknowledgement or response to be received.

#### Bandwidth

- The amount of data that can be sent at once. It varies across the network.

- The lowest amount at a particular point (bandwidth bottleneck) in the overall connection determines the bandwidth that a connection receives.

### How lower level protocols operate

- OSI L2 (link / data link layer) mostly concerns where to send the signal. Meaning that the identification of devices (hosts, switches and routers) is the important job for the protocols in this layer to move data over the physical network.

- Most common protocol in L2 is Ethernet protocol.

  - Framing: The key is to have destination MAC address and source MAC address as a part of frame header, and have data payload that contains the whole PDU of the internet / network layer above. See the Ethernet Frame as structured data.

  - Addressing: Each Network Interface Card (NIC) has assigned unique MAC Address when manufactured.
    - Hub will just broadcast each frame to all connected devices, and devices will drop the frame if the destination MAC is not their own MAC.
    - Switch better handles this, as it only send the frame to the matching host.
    - We can theoratically conduct inter-network communication using MAC addresses, with routers have the records of MAC addresses other routers can access.
    - However, since MAC Address is not hierarchical and it is burned in to a specific physical device, we would have scale problem if we want to expend this to global level.
    - Routers would need to have impossibly large reference tables mapping each and every device in the world. (And here comes Internet Protocol to save the day.)

- OSI L3 (network layer) facilitates communication between hosts on different networks. The internet protocol (IP) is teh predominant protocol used at this layer for inter-network communication.

### What is IP address

- IP address is logical address, meaning that it is not bound to a certain physical device. It can be assigned to devices when they join a network, and the address would fall within a certain range of addresses available to the local network.

- This hierarchy gives router better way to find the route from one device (in a certain network) to other device (in other network), so make the inter-network communication feasible for the global scale, the internet.

- IPv4 addresses are 32 bits in length. There are four sections of eight bits each, represented as 0 to 255 each seciton. (something like 121.109.221.43)

- IPv6 came out because it is anticipated that 4.3 billion addresses will be exhausted soon. Since IPv6 uses 128-bit addresses with eight 16-bit blocks, there will be a lot of addresses available (340 undecillion)

- IPv6 differs to IPv4 also in header structure for the packet and in absense of error checking (leave it to Link Layer checksum)

### What is port number

### How DNS works

### Client-server model of web interactions

#### The role of HTTP as a protocol within that model

## TCP & UDP

### TCP protocols

### UDP protocols

### The three-way handshake and its purpose

### Flow control

### Congetion avoidance

## URLs

### The components of a URL

#### Query strings

### How to construct a valid URL

### What URL encoding is

#### When it might be used

## HTTP and the request/response cycle

### what HTTP requests and responses are

#### Identify the conponents of each

### Describe the HTTP request/response cycle

### Explain what status codes are

#### Examples of different status code types

### What is meant by 'state' in the context of the web

#### Some techniques that are used to simulate state

### The different between `GET` and `POST`

#### When to choose each

## Security

### Various security risks that can affect HTTP

#### Outline measures that can be used to mitigate against theses risks

### Different services that TLS can provide

#### Explain each of those services
