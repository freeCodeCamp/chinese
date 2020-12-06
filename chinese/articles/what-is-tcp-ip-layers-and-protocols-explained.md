> * 原文：[What is TCP/IP? Layers and Protocols Explained TCP/IP 协议详解](https://www.freecodecamp.org/news/what-is-tcp-ip-layers-and-protocols-explained/)
> * 作者：Victoria Drake
> * 译者：
> * 校对者：

![What is TCP/IP? Layers and Protocols Explained](https://www.freecodecamp.org/news/content/images/size/w2000/2020/11/cover-2.png)

A significant part of the process of creating something is the ability to imagine things that do not yet exist.

This skill was instrumental to the creation of the Internet. If no one had imagined the underlying technology that most now take for granted every day, there would be no cat memes.

To make the Internet possible, two things that needed imagining were  _layers_  and  _protocols._

Layers are conceptual divides that group similar functions together. The word “protocol,” means “the way we’ve agreed to do things around here,” more or less.

In short, both layers and protocols can be explained to a five-year-old as “ideas that people agreed sounded good, and then they wrote them down so that other people could do things with the same ideas.”

The Internet Protocol Suite is described in terms of layers and protocols. Collectively, the suite refers to the communication protocols that enable our endless scrolling.

It’s often called by its foundational protocols: the Transmission Control Protocol (TCP) and the Internet Protocol (IP). Lumped together as TCP/IP, these protocols describe how data on the Internet is packaged, addressed, sent, and received.

Here’s why the Internet Protocol Suite, or TCP/IP, is an imaginary rainbow layer cake.

## **Layers are imaginary**

If you consider the general nature of a rainbow layer sponge cake, it’s mostly made up of soft, melt-in-your mouth vanilla-y goodness. This goodness is in itself comprised of something along the lines of eggs, butter, flour, and sweetener.

![Cartoon of a slice of rainbow layer cake, reads &ldquo;Yay! Free cake!&quot;](https://www.freecodecamp.org/news/content/images/2020/11/free-cake.png)

There isn’t much to distinguish one layer of a rainbow sponge cake from another. Often, the only difference between layers is the food-coloring and a bit of frosting. When you think about it, it’s all cake from top to bottom. The rainbow layers are only there because the baker thought they ought to be.

Similar to cake ingredients, layers in the context of computer networking are mostly composed of protocols, algorithms, and configurations, with some data sprinkled in.

It can be easier to talk about computer networking if its many functions are split up into groups, so certain people came up with descriptions of layers, which we call network models. TCP/IP is just one network model among others. In this sense, layers are concepts, not things.

Some of the people in question are part of the Internet Engineering Task Force (IETF). They created the  [RFC-1122][1]  publication, discussing the Internet’s communications layers. Half of a whole, the standard:

> …covers the communications protocol layers: link layer, IP layer, and transport layer; its companion  [RFC-1123][2]  covers the application and support protocols.

The layers described by RFC-1122 and RFC-1123 each encapsulate protocols that satisfy the layer’s functionality. Let’s look at each of these communications layers and see how TCP and IP stack up in this model of the Internet layer cake.

## **Link layer protocols**

![Link cake layer cartoon](https://www.freecodecamp.org/news/content/images/2020/11/link.png)

The  [link layer][3]  is the most basic, or lowest-level, classification of communication protocol. It deals with sending information between hosts on the same local network, and translating data from the higher layers to the physical layer.

Protocols in the link layer describe how data interacts with the transmission medium, such as electronic signals sent over specific hardware. Unlike other layers, link layer protocols are dependent on the hardware being used.

## **Internet layer protocols**

Protocols in the  [Internet layer][4]  describe how data is sent and received over the Internet. The process involves packaging data into packets, addressing and transmitting packets, and receiving incoming packets of data.

![Internet cake layer cartoon](https://www.freecodecamp.org/news/content/images/2020/11/internet.png)

The most widely known protocol in this layer gives TCP/IP its last two letters. IP is a connectionless protocol, meaning that it provides no guarantee that packets are sent or received in the right order, along the same path, or even in their entirety.

Reliability is handled by other protocols in the suite, such as in the transport layer.

There are currently two versions of IP in use: IPv4, and IPv6. Both versions describe how devices on the Internet are assigned IP addresses, which are used when navigating to cat memes.

IPv4 is more widely used, but has only  [32 bits for addressing][5], allowing for about 4.3 billion (ca. 4.3×109) possible addresses. These are running out, and IPv4 will eventually suffer from address exhaustion as more and more people use more devices on the Internet.

The successor version IPv6 aims to solve address exhaustion by  [using 128 bits for addresses][6]. This provides, um, a  _lot_  more address possibilities (ca. 3.4×1038).

## **Transport layer protocols**

In May 1974, Vint Cerf and Bob Kahn (collectively often called “the fathers of the Internet”) published a paper entitled  [A Protocol for Packet Network Intercommunication][7].

This paper contained the first description of a Transmission Control Program, a concept encompassing what would eventually be known as the Transmission Control Protocol (TCP) and User Datagram Protocol (UDP). (I had the pleasure of meeting Vint and can personally confirm that yes, he does look exactly like The Architect in the Matrix movies.)

![Transport cake layer cartoon](https://www.freecodecamp.org/news/content/images/2020/11/transport.png)

The  [transport layer][8]  presently encapsulates TCP and UDP. Like IP, UDP is connectionless and can be used to prioritize time over reliability.

TCP, on the other hand, is a connection-oriented transport layer protocol that prioritizes reliability over latency, or time. TCP describes transferring data in the same order as it was sent, retransmitting lost packets, and controls affecting the rate of data transmission.

## **Application layer protocols**

![Application cake layer cartoon](https://www.freecodecamp.org/news/content/images/2020/11/application.png)

The application layer describes the protocols that software applications interact with most often. The specification includes descriptions of the remote login protocol  [Telnet][9], the  [File Transfer Protocol (FTP)][10], and the  [Simple Mail Transfer Protocol (SMTP)][11].

Also included in the application layer are the Hypertext Transfer Protocol (HTTP) and its successor, Hypertext Transfer Protocol Secure (HTTPS).

HTTPS is secured by Transport Layer Security, or TLS, which can be said to be the top-most layer of the networking model described by the Internet protocol suite.

If you’d like to further understand TLS and how this protocol secures your cat meme viewing, I invite you  [read my article about TLS and cryptography][12].

## **The Internet cake is still baking**

Like a still-rising sponge cake, descriptions of layers, better protocols, and new models are being developed every day. The Internet, or whatever it will become in the future, is still in the process of being imagined.

![Cartoon of the full Internet layer cake, topped with Nyan Cat memes](https://www.freecodecamp.org/news/content/images/2020/11/cake.png)

If you enjoyed learning from this post, there’s a lot more where this came from! I write about computing, cybersecurity, and building great technical teams. Join the thousands of people who learn from my articles on  [victoria.dev][13]! Visit and subscribe by email or RSS to see new articles first.

[1]: https://tools.ietf.org/html/rfc1122
[2]: https://tools.ietf.org/html/rfc1123
[3]: https://tools.ietf.org/html/rfc1122#page-21
[4]: https://tools.ietf.org/html/rfc1122#page-27
[5]: https://tools.ietf.org/html/rfc791#section-2.3
[6]: https://tools.ietf.org/html/rfc8200#section-1
[7]: https://web.archive.org/web/20160304150203/http://ece.ut.ac.ir/Classpages/F84/PrincipleofNetworkDesign/Papers/CK74.pdf
[8]: https://tools.ietf.org/html/rfc1122#page-77
[9]: https://tools.ietf.org/html/rfc1123#section-3
[10]: https://tools.ietf.org/html/rfc1123#section-4
[11]: https://tools.ietf.org/html/rfc1123#section-5
[12]: https://victoria.dev/blog/tls
[13]: https://victoria.dev/
