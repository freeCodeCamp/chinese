> -  原文地址：[TCP vs UDP – Which Protocol is Faster?](https://www.freecodecamp.org/news/tcp-vs-udp-which-is-faster/)
> -  原文作者：[Prashanth](https://www.freecodecamp.org/news/author/prashanth/)
> -  译者：
> -  校对者：

![TCP vs UDP – Which Protocol is Faster?](https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/TCP-VS-UDP.jpg)

## What is TCP?

**TCP** is an acronym for **Transmission Control Protocol**. It is a transport layer protocol that **allows packets** to be sent from one location to another.

TCP is a connection-oriented protocol, which means it establishes the connection before any communication between the network’s computer units. Because we use this protocol in conjunction with an IP protocol, we call it **TCP/ IP.**

### How does TCP work?

TCP’s primary job is to collect data from the application layer. It then separates the data into multiple packets, assigns a number to each packet, and sends the packets to their destination.

It also reassembles the packets before sending them to the application layer. Given that TCP is a connection-oriented protocol, the connection will be maintained until the sender and receiver have completed their exchange.

It is a reliable protocol. That is, the receiver always provides the sender either a positive or negative acknowledgment regarding the data packet, so the sender always knows if the data packet has arrived at its destination or if it needs to be resent.

It guarantees that data arrives at its destination in the same sequence that it was sent. It has a built-in error-checking and recovery system. and is responsible for providing end-to-end communication. TCP also gives access to flow control and quality of service.

TCP supports a **full-duplex server**, which means it can act as both a receiver and a sender. It operates in a point-to-point Client/ Server manner.

## What is UDP?

**UDP** is an acronym for **User Datagram Protocol**. The User Datagram Protocol (UDP) is the most basic of the TCP/IP protocol suite’s Transport Layer communication protocols. It uses the bare minimum of communication mechanisms.

### How does UDP work?

Although UDP is considered an unreliable transport protocol, it does its job by using IP services, which provide a best-effort delivery method.

In UDP, the receiver does not generate a packet acknowledgment, and the sender does not wait for a packet acknowledgment. Because of this vulnerability, the protocol is both unreliable and easier to process.

We use UDP in cases where it's not as important to acknowledge the data being received. It works well for cases where data flows in one direction and it is most appropriate for query-based communication.

UDP does not assure the ordered delivery of the data packets. It's stateless and it does not provide for any congestion control mechanism.

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-31-at-10.54.01-AM.png)

TCP Vs UDP

## Differences Between TCP and UDP

UDP is a connectionless protocol, whereas TCP is a connection-oriented protocol. TCP is slower than UDP, which is one of the main differences between the two protocols.

Overall, UDP is a much faster, simpler, and more efficient protocol. But only TCP allows for the retransmission of lost data packets.

Another difference between TCP and UDP is that TCP ensures the orderly transfer of data from the user to the server (and vice versa). UDP is not designed for end-to-end communication and does not check the receiver’s readiness so it requires less overhead and takes up less space.

### Summary of TCP vs UDP

#### Connection

TCP requires that you set up a well-established connection before the sender and the receiver start communicating. It is a connection-oriented protocol.

UDP is a connectionless protocol.

#### Preservation of order of data transmitted

In TCP, since there is a well-established connection beforehand, the data packets are received by the receiver in an ordered fashion.

Since there is no well-established connection between the sender and the receiver in UDP, the data packets may be received by the receiver in an unordered fashion.

#### Reliability

Whenever a packet is received via TCP, it sends an acknowledgment to the sender. In case of failure, it makes a request for retransmission.

With UDP, no acknowledgment is sent in this case and it relies on high-level protocols to ensure reliability.

#### Error Checking

There are extensive error checking rules in TCP while only basic error checking techniques such as checksums exist in UDP

#### Transfer method

In TCP, data is read in the form of a byte stream, and messages are sent to segment boundaries.

Individual UDP packets with defined limits are sent and verified for integrity upon arrival.

#### Broadcasting

TCP does not support broadcasting. When you're using it, the server and receiver must first create a connection, which must then be terminated once the transfer is complete.

UDP does support broadcasting.

### Use cases for TCP vs UDP

TCP is used by HTTPS (HyperText Transfer Protocol Secure), HTTP (HyperText Transfer Protocol), SMTP (Simple Mail Transfer Protocol), FTP (File Transfer Protocol), and many others.

UDP is used in Video Streaming, Video Calling, Voice over IP services (Call over the internet), DNS (Domain Name System), and so on.

## TCP vs UDP – Which is faster?

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-31-at-10.55.58-AM.png)

In general, UDP is faster than TCP because of the following factors:

### Difference in Header Size TCP vs UDP

Let's analyze the headers of both a TCP packet and a UDP packet.

TCP headers must be at least 20 bytes long and no more than 60 bytes long.

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-31-at-10.56.59-AM.png)

#### Headers in TCP consist of:

1.  **Source Port** – indicates the source port on the sending device. 16 bits are reserved for it.
2.  **Destination Port** – indicates the destination port on the receiving device. 16 bits are reserved for it.
3.  **Sequence Number** – indicates the sequence number of the data segment in a session. 32 bits are reserved for it.
4.  **Acknowledgment Number** – This number comprises the next sequence number of the data byte expected and serves as an acknowledgment of the previous data received when the ACK flag is set. 32 bits are reserved for this.
5.  **Data Offset** – This field indicates the size of the TCP header (32-bit words) as well as the data offset in the current packet over the whole TCP segment. 4 bits are reserved for this.
6.  **Reserved** –  bits kept for future use and are set to 0 by default. 3 bits are reserved for this.
7.  **Flags** – There is 1 bit reserved for various flags which help TCP check for various activities such as acknowledgments.
8.  **Checksum** – This field contains the checksum.
9.  **Urgent Pointer** – This specifies the data byte if the URG flag is set to 1.
10.  **Options** – This specifies additional options which are not present otherwise in a regular header.

Now let us analyze a UDP header.

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-31-at-10.57.27-AM.png)

#### Headers in UDP consist of:

1.  **Source Port** – indicates the source port on the sending device. 16 bits are reserved for it.
2.  **Destination Port** – indicates the destination port on the receiving device. 16 bits are reserved for it.
3.  **Length** – specifies the UDP packet’s entire length. It’s a 16-bit field with an 8-byte minimum value, which equals the size of the UDP header itself.
4.  **Checksum** – The checksum value created by the sender before sending is stored in this field. This field is optional in IPv4, therefore if it contains no value, it is set to 0, and all of its bits are set to zero.

We can clearly see the difference in the overhead of TCP’s header vs UDP’s header. Since a TCP header is much larger than a UDP header, it takes more time to process it which makes UDP faster than TCP.

### Acknowledgment in TCP vs UDP

In TCP, acknowledgment is sent to the sender on the data segment being received by the receiver. This ensures that the packet has been delivered to the receiver.

If it receives no acknowledgment, it attempts a retransmission. This process makes TCP a lot slower compared to UDP. And remember that UDP doesn't send any acknowledgments.

### Exceptions to the rule

There have been certain cases where TCP proves to be faster than UDP. For example in an experiment where 300 byte packets were sent over an ethernet connection with a Maximum Transmission Unit of 1500 bytes, TCP was about 50% faster than UDP.

This is because TCP will attempt to buffer the data and fill a whole network segment, maximizing the available bandwidth. UDP, on the other hand, immediately sends the packet along the wire, clogging the network with many little packets.

## Conclusion

Both TCP and UDP have their own uses. In cases where reliability and the order of data packets received are a major concern, you'd want to use TCP.

On the other hand, in cases where the major concern is speed and it doesn't really matter if some data packets are compromised or lost, choose UDP.

So you see, you'll always have to compromise on either reliability or speed. If you increase one, the other gets reduced because of the constraints from the first.

For example, in YouTube videos, you might have noticed that there are various options for setting the quality of the video.

When you increase the quality, the video takes more bandwidth. This is because in lower quality, even if some data packets are lost we simply ignore them. But if we want high-quality videos, we cannot afford to lose on data packets.

Thanks for reading! I hope you have a better understanding of TCP vs UDP.