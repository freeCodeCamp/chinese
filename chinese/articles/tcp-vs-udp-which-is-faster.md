> -  原文地址：[TCP vs UDP – Which Protocol is Faster?](https://www.freecodecamp.org/news/tcp-vs-udp-which-is-faster/)
> -  原文作者：[Prashanth](https://www.freecodecamp.org/news/author/prashanth/)
> -  译者：seanbei
> -  校对者：

![TCP vs UDP – Which Protocol is Faster?](https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/TCP-VS-UDP.jpg)

## 什么是TCP？

**TCP**是**Transmission Control Protocol**的首字母缩写词，它是一种传输层协议，**允许数据包**从一个位置发送到另一个位置。

TCP是面向连接的协议，也就是说它在网络计算机单元之间的任何通信之前建立连接。由于我们把这个协议与IP协议结合使用，我们称其为**TCP/ IP**。

### TCP是怎么工作的?

TCP的主要任务是从应用层收集数据。它将数据拆分成多个数据包，为每个数据包分配一个编号，然后将这些数据包发送到它们的目的地。

同样，在将数据包发送到应用层之前，它会重新组合数据包。鉴于TCP是面向连接的协议，这个连接将一直保持，直到发送方和接收方完成数据交换。

它是一种可靠的协议。因为，接收方总是会给发送方提供一条关于数据包的确认消息，要么肯定要么否定，因此，发送方总是能知道数据包是否到达它的目的地，还是说需要被重新发送。

它保证了数据能到达其目的地，而且到达的顺序与发送时相同。它有一套内置的错误检查和恢复体系，负责提供端到端通信。TCP还提供对流量控制和服务质量的访问。

TCP支持**全双工服务器**，既可以当接收者，也可以当发送者。它以点对点的客户端/服务器方式运行。

## 什么是UDP？

**UDP**是**User Datagram Protocol**的首字母缩写词。用户数据报协议（UDP）是TCP/IP协议套件的最基本的传输层通信协议。它使用最低限度的通信机制。

### UDP是怎么工作的？

尽管UDP被认为是一种不可靠的传输协议，但它通过使用IP服务来完成其工作，提供了一种尽力而为的传递方法。

在UDP中，接收方不生成数据包确认，发送方也不等待数据包确认。正是由于这个不足，该协议虽不可靠但是易于处理。

如果确认是否接收到数据并不那么重要，这种情况下，我们使用UDP。它很适用于单向数据流的场景，最适合基于查询的通信。

UDP不保证数据包的有序传递。它是无状态的，不提供任何拥塞控制机制。

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-31-at-10.54.01-AM.png)

TCP Vs UDP

## TCP和UDP的区别

UDP是一种无连接协议，而TCP是一种面向连接的协议。TCP比UDP要慢，这是两种协议的主要区别之一。

总的来说，UDP是一种更快、更简单、更高效的协议。但是只有TCP允许对丢失的数据包进行重新传输。

TCP和 UDP的另一个区别是TCP可以确保数据从用户到服务器的有序传输（反之亦然）。UDP不是为端到端通信而设计的，并不会检查接收方的准备情况，因此它需要更少的开销并占用更少的空间。

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
