> * 原文地址：[System Design Interview Questions – Concepts You Should Know 系统设计面试题精选](https://www.freecodecamp.org/news/systems-design-for-interviews/)
> * 原文作者：Zubin Pratap
> * 译者：zhannicholas
> * 校对者：

![System Design Interview Questions – Concepts You Should Know](https://www.freecodecamp.org/news/content/images/size/w2000/2020/04/gil.jpeg)

![系统设计面试问题：必备概念](https://www.freecodecamp.org/news/content/images/size/w2000/2020/04/gil.jpeg)

You may have heard the terms "Architecture" or "System Design." These come up a lot during developer job interviews – especially at big tech companies.

你或许听说过“架构”或“系统设计”这两个术语，它们在开发者的求职面试中经常出现，很受大型科技公司的青睐。

This in-depth guide will help prepare you for the System Design interview, by teaching you basic software architecture concepts.

这篇教程将深入软件架构的基本概念，帮你做好系统设计面试的准备。

This is not an exhaustive treatment, since System Design is a vast topic. But if you're a junior or mid-level developer, this should give you a strong foundation.

因为系统设计是一个庞大的主题，所以这篇文章并不会面面俱到。但如果你是一名初中级开发者的话，这应该能为你奠定坚实的基础。

From there, you can dig deeper with other resources. I've listed some of my favourite resources at the very bottom of this article.

你可以从这里深入挖掘其它资源。我已经在文章底部列出了一些我我喜爱的资源。

I've broken this guide into bite-sized chunks by topic and so I recommend you bookmark it. I've found  [spaced learning and repetition][1]  to be incredibly valuable tools to learn and retain information. And I've designed this guide to be chunked down into pieces that are easy to do spaced repetition with.

我已经将这篇教程按照主题划分成了很多小模块，我建议你将它加入到书签。我发现 [间隔性学习与重复][1] 是获取知识的宝贵工具，真让人难以置信。我已将本教程设计成很多小片段，以便你进行间歇性重复记忆。

1.  [Section 1: Networks & Protocols (IP, DNS, HTTP, TCP etc)][2]
2.  [Section 2: Storage, Latency & Throughput][3]
3.  [Section 3: Availability][4]
4.  [Section 4: Caching][5]
5.  [Section 5: Proxies][6]
6.  [Section 6: Load Balancing][7]
7.  [Section 7: Consistent Hashing][8]
8.  [Section 8: Databases][9]
9.  [Section 9: Leader Election][10]
10.  [Section 10: Polling, Streaming, Sockets][11]
11.  [Section 11: Endpoint Protection][12]
12.  [Section 12: Messages & Pub-Sub][13]
13.  [Section 13: Smaller Essentials][14]

1. [第一节：网络与协议（IP、DNS、HTTP、TCP 等）](#section1)
2. [第二节：存储、延迟与吞吐量](#section2)
3. [第三节：可用性](#section3)
4. [第四节：缓存](#section4)
5. [第五节：代理](#section5)
6. [第六节：负载均衡](#section6)
7. [第七节：一致性哈希](#section7)
8. [第八节：数据库](#section8)
9. [第九节：领导选取](#section9)
10. [第十节：轮询、流、套接字](#section10)
11. [第十一节：端点保护](#section11)
12. [第十二节：消息与发布-订阅](#section12)
13. [第十三节：必备小知识](#section13)

Let's get started!

咱们开始吧！

## Section 1: Networks and Protocols

<h2 id="section1">第一节：网络与协议</h2>

"Protocols" is a fancy word that has a meaning in English totally independent of computer science. It means a system of rules and regulations that govern something. A kind of "official procedure" or "official way something must be done".

“协议（protocol）”是一个很花哨的词，它在英语中的含义与在计算机科学中的含义截然不同。它表示一套管理事物的规章制度，一种“官方步骤”或“做事情时必须采用的官方做法”。

For people to connect to machines and code that communicate with each other, they need a network over which such communication can take place. But the communication also needs some rules, structure, and agreed-upon procedures.

为了让人们连接到彼此通信的机器和代码，他们需要一个可以在其上进行通信的网络。但是通信也需要一些规则、结构和协商好的步骤。

Thus, network protocols are protocols that govern how machines and software communicate over a given network. An example of a network is our beloved world wide web.

因此，网络协议（network protocols）是管理给定网络上机器与软件之间如何通信通信的协议。我们热爱的万维网就是网络的一个例子。

You may have heard of the most common network protocols of the internet era - things like HTTP, TCP/IP etc. Let's break them down into basics.

你可能听过因特网时代中一些最常见的网络协议，比如 HTTP、TCP/IP 等等。让我们将它们分解成基础构造块吧。

### IP -  [Internet Protocol][15]

### 因特网协议[15]

Think of this as the fundamental layer of protocols. It is the basic protocol that instructs us on how almost all communication across internet networks must be implemented.

把因特网协议（IP，Internet Protocol）视为是协议层的基础吧，它是一个基础协议，指导我们如何实现几乎所有的因特网内通信。

Messages over IP are often communicated in "packets", which are small bundles of information (2^16 bytes). Each packet has an  [essential structure][16]  made up of two components: the Header and the Data.

因特网协议上的消息（message）通常以“数据包”的形式进行通信。数据包（packet）是一小团信息（2^16 字节），它的[核心结构][16]包含两节：协议头（Header）和数据（Data）。

The header contains "meta" data about the packet and its data. This metadata includes information such as the IP address of the source (where the packet comes from) and the destination IP address (destination of the packet). Clearly, this is fundamental to being able to send information from one point to another - you need the "from" and "to" addresses.

协议头包含与数据包及其内部数据的有关的元数据，比如源 IP 地址（数据包源自哪里）和目的 IP 地址（数据包的目的地）。很明显，这是将信息从一个点发送到另一个点的基础——你需要“从哪来”的地址和“去往哪”的地址。

And an  [IP Address][17]  is a numeric label assigned to each device connected to a  [computer network][18]  that uses the Internet Protocol for communication. There are public and private IP addresses, and there are currently two versions. The new version is called IPv6 and is increasingly being adopted because IPv4 is running out of numerical addresses.

每个连接到使用 IP 协议通信的 [计算机网络][18]的设备都会被赋予一个数字标签，这个标签就是 [IP 地址][17]。IP 地址分为公有地址和私有地址，当前有两个版本 IP 协议。新版本被称为 IPv6，它正被逐渐采用，因为 IPv4 地址快耗尽了。

The other protocols we will consider in this post are built on top of IP, just like your favorite software language has libraries and frameworks built on top of it.

我们在这篇文章中要考虑的其它协议都建立在 IP 之上，就像你最最喜欢的软件语言有建立在它上面的库和框架一样。

### TCP -  [Transmission Control Protocol][19]

### 传输控制协议[19]

TCP is a utility built on top of IP. As you may know from reading my posts, I firmly believe you need to understand  _why_  something was invented in order to truly understand  _what_  it does.

传输控制协议（TCP，Transmission Control Protocol）是一个建立在 IP 之上的实用程序。通过阅读我的文章，你可能知道：我坚信你若要真正理解某个东西是做 _什么_ 的，你就要先理解它 _为什么_ 被发明出来。

TCP was created to solve a problem with IP. Data over IP is typically sent in multiple packets because each packet is fairly small (2^16 bytes). Multiple packets can result in (A) lost or dropped packets and (B) disordered packets, thus corrupting the transmitted data. TCP solves both of these by guaranteeing  _transmission_  of packets in an  _ordered_  way.

创建 TCP 是为了解决 IP 的一个问题。通过 IP 传输的数据通常在多个数据包中发送，由于每个数据包都相当小（2^16 字节），所以多个数据包可能出现：(A) 数据包丢失；(B) 乱序。因此导致传输数据损坏。 TCP 通过保证数据包的 _有序传输_ 解决了这些问题。

Being built on top of IP, the packet has a header called the TCP header in addition to the IP header. This TCP header contains information about the ordering of packets, and the number of packets and so on. This ensures that the data is reliably received at the other end. It is generally referred to as TCP/IP because it is built on top of IP.

因为是建立在 IP 之上的，所以 TCP 数据包除了有 IP 头外，还有 TCP 头。这个 TCP 头包含数据包的顺序和数据包的数量等信息。这保证了另一端接收到的数据是可靠的。TCP 通常因建立在 IP 之上而被称为 TCP/IP。

TCP needs to establish a connection between source and destination before it transmits the packets, and it does this via a "handshake". This connection itself is established using packets where the source informs the destination that it wants to open a connection, and the destination says OK, and then a connection is opened.

TCP 需要在传输数据包之前建立源端与目的端之间的连接，这是通过“握手”完成的。连接本身是通过使用数据包建立的：源端告知目的端它想打开一个连接，目的端表示同意，然后一个连接就打开了。

This, in effect, is what happens when a server "listens" at a port - just before it starts to listen there is a handshake, and then the connection is opened (listening starts). Similarly, one sends the other a message that it is about to close the connection, and that ends the connection.

这实际上就是服务器“监听”某个端口时发生的事情——在它开始监听前，会先进行一次握手，然后连接被打开（监听开始）。类似地，连接的一端给另一端发送一个打算关闭连接的消息，这就会终止该连接。

### HTTP -  [Hyper Text Transfer Protocol][20]

### 超文本传输协议[20]

HTTP is a protocol that is an abstraction built on top of TCP/IP. It introduces a very important pattern called the request-response pattern, specifically for client-server interactions.

超文本传输协议（HTTP，Hyper Text Transfer Protocol）是一种建立在 TCP/IP 之上的抽象，它引入了一个被称为请求-响应模式非常重要的模式，专门用于客户端-服务端交互。

A client is simply a machine or system that requests information, and a server is the machine or system that responds with information. A browser is a client, and a web-server is a server. When a server requests data from another server then the first server is also a client, and the second server is the server (I know, tautologies).

客户端通常是请求信息的机器或系统，而服务器是以信息进行响应的机器或系统。浏览器是客户端，而 Web 服务器是服务器。当一台服务器向另一台服务器请求数据时，前者是客户端，后者是服务器（赘述，我知道）。

So this request-response cycle has its own rules under HTTP and this standardizes how information is transmitted across the internet.

所以这个请求-响应环路在 HTTP 下有自己的规则，这也标准化了因特网间的信息传输方式。

At this level of abstraction we typically don't need to worry too much about IP and TCP. However, in HTTP, requests and responses have headers and bodies too, and these contain data that can be set by the developer.

在这层抽象上，我们通常不需要过于担心 IP 和 TCP。然而，HTTP 中的请求与响应不仅有头部，还有主体部分。它们包含了能被开发者设置的数据。

HTTP requests and responses can be thought of as messages with key-value pairs, very similar to objects in JavaScript and dictionaries in Python, but not the same.

HTTP 请求与响应可以被看作键-值对形式的消息，它们和 JavaScript 中的对象以及 Python 中的字典非常相似，但又有所不同。

Below is an illustration of the content, and key-value pairs in HTTP request and response messages.

下图展示了 HTTP 报文的内容和 HTTP 请求与响应消息中的键-值对。

![](https://www.freecodecamp.org/news/content/images/2020/03/image-44.png)

source:  [https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages][21]

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/03/image-44.png">
    <figcaption>来自：<a>https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages</a></figcaption>
</figure>

HTTP also comes with some "verbs" or "methods" which are commands that give you an idea of what sort of operation is intended to be performed. For example, the common HTTP methods are "GET", "POST", "PUT", "DELETE" and "PATCH", but there are more. In the above picture, look for the HTTP verb in the start line.

同 HTTP 一起的还有一些“动词”或“方法”，它们是一些指令，告诉你将要执行何种操作。例如，常见的 HTTP 方法有“GET”、“POST”、“PUT”、“DELETE”和“PATCH”，但远不止这些。找一下上图中起始行中的 HTTP 动词。
## Section 2: Storage, Latency & Throughput

<h2 id="section2">第二节：存储、延迟与吞吐量</h2>

### Storage

### 存储

Storage is about holding information. Any app, system, or service that you program will need to store and retrieve data, and those are the two fundamental purposes of storage.

存储（storage）和保存信息有关。你编写的任何应用、系统或服务都需要保存和检索数据，这正是存储的两个基本功能。

But it's not just about storing data – it's also about fetching it. We use a database to achieve this. A database is a software layer that helps us store and retrieve data.

但是存储并不只和保存数据有关，它还涉及到数据的取出。我们使用数据库（database）来实现存储。数据库是一个软件层，它帮助我们保存和检索数据。

These two primary types of operations, storing and retrieving, are also variously called 'set, get', 'store, fetch', 'write, read' and so on. To interact with storage, you will need to go through the database, which acts as an intermediary for you to conduct these fundamental operations.

保存（storing）和检索（retrieving）这两种主要的操作类型又被称为放置（set）和获取（get）、存储（store）和取出（fetch）、写（write）和读（read），等等。要与存储交互，你需要经过数据库，它是你执行这些基础操作的中间人。

The word "storage" can sometimes fool us into thinking about it in physical terms. If I "store" my bike in the shed, I can expect it to be there when I next open the shed.

“存储”一词有时能让我们傻傻地从物理的角度思考它。如果我把我的自行车“存储”在仓库，我就能预料到下次打开仓库时它就在那里。

But that doesn't always happen in the computing world. Storage can broadly be of two types: "Memory" storage and "Disk" storage.

但是，计算机世界中有时并不会这样。存储可以大体分为两种类型：“内存（Memory）”存储和“磁盘（Disk）”存储。

Of these two, the disk storage tends to be the more robust and "permanent" (not truly permanent, so we often use the word "persistent" storage instead). Disk storage is persistent storage. This means that when you save something to Disk, and turn the power off, or restart your server, that data will "persist". It won't be lost.

在这两种类型中，磁盘存储往往更稳健，也更具“永久性”（并不是真的永久（permanent），所以我们经常使用“持久化的（persistent）”存储取而代之）。磁盘存储是一种持久化存储，这意味着只要你把东西保存到磁盘，不管断电，还是重启服务器，那些数据都将“持久保存”，不会丢失。

However, if you leave data in "Memory" then that usually gets wiped away when you shut down or restart, or otherwise lose power.  

然而，如果你让数据驻留在“内存”中，数据通常会在关机、重启或断电时被擦除。
  
The computer you use everyday has both these storage types. Your hard disk is "persistent" Disk storage, and your RAM is transient Memory storage.

你每天都在使用的计算机同时拥有这两种类型的存储。你的硬盘是“持久化的”磁盘存储，而你的 RAM 是瞬时的内存存储。

On servers, if the data you're keeping track of is only useful during a session of that server, then it makes sense to keep it in Memory. This is much faster and less expensive than writing things to a persistent database.

在服务器上，如果你正在记录的数据只在该服务器的会话（session）中有用，那么将它保存在内存中是合理的。这种方式比将东西写入到持久化数据库更快，更实惠。

For example, a single session may mean when a user is logged in and using your site. After they log out, you may not need to hold on to bits of data that you collected during the session.

例如，单个会话可能指用户登录，使用你的网站。在用户退出之后，你可能并不需要紧紧抓住这次会话期间收集到的数据不放。

But whatever you do want to hold on to (like shopping cart history) you will put in persistent Disk storage. That way you can access that data the next time the user logs in, and they will have a seamless experience.

但是，你会把你任何你想留住的数据（比如购物车历史）放到持久化的磁盘存储中。这样，你可以在用户再次登录时访问那些数据，给用户提供一个无缝的使用体验。

Ok, so this seems quite simple and basic, and it's meant to be. This is a primer. Storage can get very complex. If you take a look at the range of storage products and solutions your head will spin.

好了，这些似乎非常简单和基础，但实际上并非如此。这是个入门。存储可以变得非常复杂，如果你看一看存储产品和解决方案的规模，很快就会头晕目眩了。

This is because different use-cases require different types of storage. They key to choosing the right storage types for your system depends on a lot of factors and the needs of your application, and how users interact with it. Other factors include:

这是因为不同的使用场景需要不同类型的存储。为你的系统选择正确的存储方式的关键取决于很多因素和应用的需求，还有用户如何与之交互。其它的因素包括：

-   the shape (structure) of your data, or
-   what sort of availability it needs (what level of downtime is OK for your storage), or
-   scalability (how fast do you need to read and write data, and will these reads and writes happen concurrently (simultaneously) or sequentially) etc, or
-   consistency - if you protect against downtime using distributed storage, then how consistent is the data across your stores?

- 数据的形状（结构），或者
- 数据需要具有的何种可用性（对你的存储来说，什么级别的停机时间是可以出现的），或者
- 可伸缩性（你需要怎样的数据读写速度，以及这些读写是并发（同时）进行的还是顺序进行的）等等，或者
- 持久性——如果你使用分布式存储处理停机，那么各存储之间的数据一致性如何？


These questions and the conclusions require you to consider your trade-offs carefully. Is consistency more important than speed? Do you need the database to service millions of operations per minute or only for nightly updates? I will be dealing with these concepts in sections later, so don't worry if you've no idea what they are.

这些问题和结论需要你仔细权衡。一致性的重要程度高于速度吗？你需要数据库抗住每分钟数百万次操作，还是仅用于每晚更新？我将会在后续章节中讨论这些概念，如果你不知道它们是什么，也不用担心。

### Latency
### 延迟

"Latency" and "Throughput" are terms you're going to hear a lot of as you start to get more experienced with designing systems to support the front end of your application. They are very fundamental to the experience and performance of your application and the system as a whole. There is often a tendency to use these terms in a broader sense than intended, or out of context, but let's fix that.

随着你在支撑前端应用方面的系统设计经验的增加，你会不断听到“延迟”或“吞吐量”这两个术语。总的来说，它们对应用和系统的使用体验和性能至关重要。这些术语的使用普遍都倾向于超出预期范围或脱离上下文，但让我们来解决掉这个问题吧。

**Latency**  is simply the measure of a duration. What duration? The duration for an action to complete something or produce a result. For example: for data to move from one place in the system to another. You may think of it as a lag, or just simply the time taken to complete an operation.

**延迟（Latency）** 只是对持续时间的度量。什么是持续时间呢？某个动作的持续时间是指完成某事或产生结果所经历的时间。例如：对于从系统中的一个地方移动到另一个地方的数据来说，你可以将持续时间看成延迟（lag），也可以简单地把它看成是完成某个操作所花费的时间。

The most commonly understood latency is the "round trip" network request - how long does it take for your front end website (client) to send a query to your server, and get a response back from the server.

延迟最常见的理解就是“往返”的网络请求——前端网站（客户端）从给服务器发送查询，到收到服务器返回的响应所花费的时长。

When you're loading a site, you want this to be as fast and as smooth as possible. In other words you want  _low_  latency. Fast lookups means low latency. So finding a value in an array of elements is slower (higher latency, because you need to iterate over each element in the array to find the one you want) than finding a value in a hash-table (lower latency, because you simply look up the data in "constant" time , by using the key. No iteration needed.).

当加载一个网站时，你想要加载过程尽可能的快、整个过程尽可能的流畅。换句话说，你想要的是 _低_ 延迟。快速查找就意味着低延迟。所以在数组中（高延迟，因为你需要迭代数组中的每个元素，找出你想要的那一个）寻找一个值比在哈希表中（低延迟，因为你只需要通过键就可以在“常量”时间内获得数据，不需要进行迭代）更慢。

Similarly, reading from memory is much faster than reading from a disk (read more  [here][22]_)._ But both have latency, and your needs will determine which type of storage you pick for which data.

类似地，从内存读取数据比从磁盘读取数据要快得多（[阅读更多][22]）。但是这两种方式都存在延迟，你的需求会决定为何种数据选择何种类型的存储。

In that sense, latency is the inverse of speed. You want higher speeds, and you want lower latency. Speed (especially on network calls like via HTTP) is determined also by the distance. So,  [latency from London to another city][23], will be impacted by the distance from London.

这样看来，延迟是速度的对立面。你想要更高的速度，就是想要更低的延迟。速度（尤其是像通过 HTTP 这样的网络调用）也由距离决定。所以，[伦敦到另一座城市的延迟][23] 将受该城市与伦敦之间的距离的影响。

As you can imagine, you want to design a system to avoid pinging distant servers, but then storing things in memory may not be feasible for your system. These are the tradeoffs that make system design complex, challenging and extremely interesting!

想象一下，如果你要设计一个避免 ping 远程服务器的系统，但是为你的系统将数据保存到内存又不太可行。这些都是权衡点，它们让系统设计变得复杂、充满挑战，并且趣味十足！

For example, websites that show news articles may prefer uptime and availability over loading speed, whereas online multiplayer games may require availability  _and_  super low latency. These requirements will determine the design and investment in infrastructure to support the system's special requirements.

例如，新闻网站比起加载速度可能更看重正常运行的时间和可用性，而多人游戏可能要求可用性和超低延迟。这些需求将决定基础设施的设计和相关投资，从而支持系统的特殊需求。

### Throughput

### 吞吐量

This can be understood as the maximum capacity of a machine or system. It's often used in factories to calculate how much work an assembly line can do in an hour or a day, or some other unit of time measurement.

吞吐量（Throughput）可以被理解为机器或系统的最大容量。它经常在工厂中使用，用于计算装配线一个小时或一天或其它时间计量单位内能完成的工作量。

For example an assembly line can assemble 20 cars per hour, which is its throughput. In computing it would be the amount of data that can be passed around in a unit of time. So a 512 Mbps internet connection is a measure of throughput - 512 Mb (megabits) per second.

例如，对一条每小时能够组装二十辆汽车的装配线来说，每小时二十辆汽车就是它的吞吐量。在计算机中，吞吐量指的是单位时间内传送的数据量。所以一个 512 Mbps 的连接就是一种吞吐量的度量方式——512 Mb（兆字节）每秒。

Now imagine freeCodeCamp's web-server. If it receives 1 million requests per second, and can serve only 800,000 requests, then its throughput is 800,000 per second. You may end up measuring the throughput in terms of bits instead of requests, so it would be N bits per second.

现在想象一下 freeCodeCamp 的服务器。如果它每秒收到一百万个请求，而它只能处理八十万个请求，它的吞吐量就是八十万每秒。你最终可能会用二进制位（bit）的形式而不是请求数量来衡量吞吐量，所以它将会是 N 位每秒。

In this example, there is a  _bottleneck_  because the server cannot handle more than N bits a second, but the requests are more than that. A bottleneck is therefore the constraint on a system. A system is only as fast as its  _slowest bottleneck._

这个示例中有一个 _瓶颈（bottleneck）_，因为服务器一秒内最多只能 N 位的数据，但是请求的数据比这个值要高。瓶颈因此成为了系统的约束，系统能达到的最快速度就是它的 _最慢瓶颈_。

If one server can handle 100 bits per second, and another can handle 120 bits per second and a third can handle only 50, then the overall system will be operating at 50bps because that is the constraint - it holds up the speed of the other servers in a given system.

如果一台服务器每秒可以处理一百位，另一台服务器每秒可以处理一百二十位，第三台服务器每秒只能处理五十位，那么整个系统将会以 50bps 的速度进行处理，因为它就是整个系统的约束——它阻挡住了系统中其它服务器的速度。

So increasing throughput anywhere other than the bottleneck may be a waste - you may want to just increase  _throughput_  at the  _lowest bottleneck_  first.

所以，在瓶颈之外的任何地方增加吞吐量都可能会徒劳无功，你可以先在 _最低瓶颈_ 处增加 _吞吐量_。

You can increase throughput by buying more hardware (horizontal scaling) or increasing the capacity and performance of your existing hardware (vertical scaling) or a few other ways.

为了增加吞吐量，你可以购买更多的硬件（横向伸缩），也可以增加现有硬件的容量和性能（纵向伸缩），还可以采用另外几种方式。

Increasing throughput may sometimes be a short term solution, and so a good systems designer will think through the best ways to scale the throughput of a given system including by splitting up requests (or any other form of "load"), and distributing them across other resources etc. The key point to remember is what throughput is, what a constraint or bottleneck is, and how it impacts a system.

有时候，增加吞吐量可能只是一个临时的解决方案，所以一个好的系统设计师会全面考虑伸在伸缩给定系统的最佳方式，包括分离请求（或任何其它形式的“负载”），并把他们分发到其它资源上，等等。要牢记的关键点就是：什么是吞吐量，约束或瓶颈又是什么，这些约束和瓶颈是如何影响系统的。

Fixing latency and throughput are not isolated, universal solutions by themselves, nor are they correlated to each other. They have impacts and considerations across the system, so it's important to understand the system as a whole, and the nature of the demands that will be placed on the system over time.

固定延迟和吞吐量并不是独立的、通用的解决方案，它们也不互相关联。它们在整个系统中都有影响和需要考虑的地方，所以了解整个系统以及随时间加入到系统中的需求的本质非常重要。

## Section 3: System Availability

<h2 id="section3">第三节：系统可用性</h2>

Software engineers aim to build systems that are reliable. A reliable system is one that consistently satisfies a user's needs, whenever that user seeks to have that need satisfied. A key component of that reliability is Availability.

软件工程师的目标是建立可靠系统。可靠系统始终能够满足用户需要，任何时候只要用户有需要，都会被满足。可靠性（reliability）的一个关键部分是可用性（availability）。

It's helpful to think of availability as the resiliency of a system. If a system is robust enough to handle failures in the network, database, servers etc, then it can generally be considered to be a fault-tolerant system - which makes it an available system.

将可用性看成系统的弹性（resiliency）是很有帮助的。如果系统足够稳健，能够处理好网络、数据库和服务器等中的故障，就可以被看成是一个容错（fault-tolerant）系统——容错让系统变得可靠。

Of course, a system is a sum of its parts in many senses, and each part needs to be [highly available][24]  if availability is relevant to the end user experience of the site or app.

当然，从多种意义上来说，系统其各个部件的总和，如果可用性关系到终端用户在网站或应用上的使用体验，那么每个部件都需要是 [高可用的][24]。

### Quantifying Availability

### 量化可用性

To quantify the availability of a system, we calculate the percentage of time that the system's primary functionality and operations are available (the uptime) in a given window of time.

为了量化一个系统的可用性，我们计算给定时间段内系统主要功能和操作处于可用状态下的时长（正常运行时间）所占的百分比。

The most business-critical systems would need to have a near-perfect availability. Systems that support highly variable demands and loads with sharp peaks and troughs may be able to get away with slightly lower availability during off-peak times.

大多数关键业务系统都需要具有近乎完美的可用性。那些支持具有尖峰和低谷的高可变需求和负载的系统，在非高峰时期的可用性可以稍微低一点。

It all depends on the use and nature of the system. But in general, even things that have low, but consistent demands or an implied guarantee that the system is "on-demand" would need to have high availability.

这一切都取决于系统的使用和性质。但是一般来说，即便是那些有着不变的需求或只“按需”得到保障的系统也需要有高可用性。

Think of a site where you backup your pictures. You don't always need to access and retrieve data from this - it's mainly for you to store things in. You would still expect it to always be available any time you login to download even just a single picture.

想想一个你用来备份照片的网站。你并不总是需要来这个网站检索数据——它主要是用来为你存储东西的。你还是希望每次登录网站时它都是可用的，哪怕只是下载一张照片。

A different kind of availability can be understood in the context of the massive e-commerce shopping days like Black Friday or Cyber Monday sales. On these particular days demand will skyrocket and millions will try to access the deals simultaneously. That would require an extremely reliable and high-availability system design to support those loads.

一种不同类型的可用性可以放在像黑色星期五或网络星期一这样的大型电商购物日中进行理解。在这些特定的日子中，需求猛涨，成千上万的用户尝试同时访问订单。这就需要极其可靠和高度可用的系统设计来支撑那些负载了。

A commercial reason for high availability is simply that any downtime on the site will result in the site losing money. Also, it could be really bad for reputation, for example, where the service is a service used by  _other_ businesses to offer services. If AWS S3 goes down, a lot of companies will suffer, including Netflix, and that is  _not good_.

高可用性的一个商业原因很简单：网站的任何停机时间都会导致金钱的损失。并且，这会对网站的声誉造成非常恶劣的影响。例如，在一个服务是被 _其它_ 业务用来提供服务的场景中，如果 AWS S3 挂了，那么包括 Netflix 在内的很多公司都会遭殃，这可 _不是什么好事儿_。

So uptimes are extremely important for success. It is worth remembering that commercial availability numbers are calculated based on annual availability, so a downtime of 0.1% (i.e. availability of 99.9%) is  [8.77 hours a year][25]!

所以上线时间对成功尤为重要。值得牢记的一点是：商业可用性数字是根据年度可用性计算的，所以 0.1% 的停机时间（即 99.9% 的可用性）就是 [一年 8.77 小时][25]。

Hence, uptimes are extremely high sounding. It is common to see things like 99.99% uptime (52.6 minutes of downtime per year). Which is why it is now common to refer to uptimes in terms of "nines" -  [the number of nines][26]  in the uptime assurance.

因此，上线听起来时间极高。看见像 99.99% 上线时间（每年的停机时间仅为 52.6 分钟）的东西是很普遍的，这就是为什么现在普遍使用术语“nines”；来指代正常运行时间——担保正常运行时间中（[9 的个数][26]）。

In today's world that is unacceptable for large-scale or mission critical services. Which is why these days "five nines" is considered the ideal availability standard because that translates to a little over 5 minutes of downtime  _per year_.

当今世界中，大规模或关键服务宕机是不可接受的。这就是为何现在将“five nines”看成了理想的可用性标准，因为它表示 _每年_ 的停机时间只有五分钟多一点。

### SLAs

### 服务级别协议

In order to make online services competitive and meet the market's expectations, online service providers typically offer Service Level Agreements/Assurances. These are a set of guaranteed service level metrics. 99.999% uptime is one such metric and is often offered as part of premium subscriptions.

为了使得在线服务具有竞争力并满足市场的期望，在线服务提供商通常会提供一个服务级别协议/保证（Service Level Agreements/Assurances）。它们是一系列保证的服务级别指标，99.999% 的正常运行时间就是其中之一，它也经常作为高级订阅服务的一部分。

In the case of database and cloud service providers this can be offered even on the trial or free tiers if a customer's core use for that product justifies the expectation of such a metric.

至于数据库和云服务提供商，如果客户的核心用途可以证明了该指标是符合期望的，它甚至可以在试用或免费套餐中提供。

In many cases failing to meet the SLA will give the customer a right to credits or some other form of compensation for the provider's failure to meet that assurance. Here, by way of example, is  [Google's SLA for the Maps API.][27]

在很多情况下，如果未能满足 SLA，客户会因提供商未能满足保证而得到信用或其它形式的补偿。[Google's SLA for the Maps API][27] 就是一个例子。

SLAs are therefore a critical part of the overall commercial and technical consideration when designing a system. It is especially important to consider whether availability is in fact a key requirement for a part of a system, and which parts require high availability.

SLA 因此成为了设计系统时整个商业和技术要考虑的关键部分。考虑可用性是否是系统某个部分的关键需求，以及系统的哪些部分需要具有高可用性尤其重要。

### Designing HA

### 设计高可用系统

When designing a high availability (HA) system, then, you need to reduce or eliminate "single points of failure". A single point of failure is an element in the system that is the  _sole_  element that can produce that undesirable loss of availability.

在设计一个高可用（HA，high availability）系统时，你需要减少或消除“单点故障”。[单点故障](https://en.wikipedia.org/wiki/Single_point_of_failure)是系统中的一个部件，它的故障会导致系统丢失可用性。

You eliminate single points of failure by designing 'redundancy' into the system. Redundancy is basically making 1 or more alternatives (i.e. backups) to the element that is critical for high availability.

你可以通过在设计系统时引入“冗余”来去除单点故障。冗余（redundancy）就是为对高可用性有影响的关键元素准备一个或多个替代品（即备份）。

So if your app needs users to be authenticated to use it, and there is only one authentication service and back end, and that fails, then, because that is the single point of failure, your system is no longer usable. By having two or more services that can handle authentication, you have added redundancy and eliminated (or reduced) single points of failure.

所以，如果你的应用要求用户在使用前必须得到认证，但你又只有一个认证服务和后端，然后它挂了，那么由于它是单点故障，你的系统就没法被使用了。通过准备两个或多个处理认证的服务，你添加了冗余，消除（或减少）了单点故障。

Therefore, you need to understand and de-compose your system into all its parts. Map out which ones are likely to cause single points of failure, which ones are not tolerant of such failure, and which parts can tolerate them. Because engineering HA requires tradeoffs and some of these tradeoffs may be expensive in terms of time, money and resources.

因此，你需要理解并将你的系统拆分为各个部件。找出最有可能导致单点故障的那些部件（那些无法容忍这种错误的部件），以及那些可以容忍错误的部件。因为高可用工程需要进行权衡，而有些权衡可能会在时间、金钱和资源方面非常昂贵。

## Section 4: Caching

<h2 id="section4">第四节：缓存</h2>

Caching! This is a very fundamental and easy-to-understand technique to speed up performance in a system. Thus caching helps to reduce  ["latency"][28]  in a system.

缓存（caching）是一项用于提升系统性能的技术，非常基础，也很容易理解。它帮助降低系统中的[“延迟”](#section2)。

In our daily lives, we use caching as a matter of common-sense (most of the time...). If we live next door to a supermarket, we still want to buy and store some basics in our fridge and our food cupboard. This is caching. We could always step out, go next door, and buy these things every time we want food – but if its in the pantry or fridge, we reduce the time it takes to make our food. That's caching.

在我们的日常生活中，缓存在大多数时候都是用作一种常识。如果我们住在超市的隔壁，我们还是会想要购买一些基本用品，并将它们保存在冰箱或者柜橱中，这就是缓存。我们总是可以在每次想要食物的时候走出门，来到隔壁，然后购买它们——但是如果储藏室或冰箱中有这些东西的话，我们就减少了做东西吃的时间，那就是缓存。

### Common Scenarios for Caching

### 常见缓存场景

Similarly, in software terms, if we end up relying on certain pieces of data often, we may want to cache that data so that our app performs faster.

类似地，在软件方面，如果我们经常依赖某些数据，我们就会想把那些数据缓存起来，以便应用可以执行得更快。

This is often true when it's faster to retrieve data from Memory rather than  [disk][29]  because of the latency in making network requests. In fact many websites are cached (especially if content doesn't change frequently) in  [CDNs][30]  so that it can be served to the end user much faster, and it reduces load on the backend servers.

从内存中检索数据比[磁盘](#section2)要快的多，因为网络请求中存在延迟。实际上，很多网站都使用 [CDN][30] 缓存数据（尤其是那些很少改变的内容），以便为最终用户提供更快的服务，降低后端服务器的负载。

Another context in which caching helps could be where your backend has to do some computationally intensive and time consuming work. Caching previous results that converts your lookup time from a linear O(N) time to constant O(1) time could be very advantageous.

缓存的另一个使用场景就是后端需要进行一些计算密集型和耗时的工作。缓存之前的结果可以让你在线性 O(N) 到常量 O(1) 的时间内进行查找，非常有帮助。

Likewise, if your server has to make multiple network requests and API calls in order to compose the data that gets sent back to the requester, then caching data could reduce the number of network calls, and thus the latency.

同样地，如果你的服务器需要进行多次网络请求和 API 调用才能拿到响应请求所需要的完整数据，缓存数据就能帮你减少网络调用的次数，还有延迟。

If your system has a client (front end), and a server and databases (backend) then caching can be inserted on the client (e.g. browser storage), between the client and the server (e.g. CDNs), or on the server itself. This would reduce over-the-network calls to the database.

如果你的系统有客户端（前端）、服务器和数据库（后端），那么缓存可以被放到客户端上（比如浏览器缓存），也可以放到客户端和服务器之间（比如 CDN），还可以放到服务器本身。这将减少去往数据库的网络调用。

So caching can occur at multiple points or levels in the system, including at the hardware (CPU) level.

所以缓存可以位于系统中的多个位置或多个级别，包括硬件（CPU）级别。

### Handling Stale Data

### 处理过期数据

You may have noticed that the above examples are implicitly handy for "read" operations. Write operations are not that different, in main principles, with the following added considerations:

你可能已经注意到了上面的示例对“读”操作的处理是隐式的。写操作在主要原则上也没什么不同，只是加了以下的考虑：

-   write operations require keeping the cache and your database in sync
-   this may increase complexity because there are more operations to perform, and new considerations around handling un-synced or "stale" data need to be carefully analyzed
-   new design principles may need to be implemented to handle that syncing - should it be done synchronously, or asynchronously? If async, then at what intervals? Where does data get served from in the mean time? How often does the cache need to be refreshed, etc...
-   data "eviction" or turnover and refreshes of data, to keep cached data fresh and up-to-date. These include techniques like  [LIFO][31],  [FIFO][32],  [LRU][33]  and  [LFU][34].

- 写操作要求缓存与数据库保持同步
- 这可能会增加复杂度，因为有更多的操作要执行，对未同步或“过期”数据的处理需要仔细分析
- 新的设计原则可能需要实现对同步的处理——它应该是同步进行，还是异步进行？如果异步进行，那么时间间隔取多大？
- 数据“驱逐”或更新和数据的刷新，从而保证缓存数据是最新的。这包括像 [LIFO][31]、[FIFO][32]、[LRU][33] 和 [LFU][34] 这样的技术。

So let's end with some high-level, and non-binding conclusions. Generally, caching works best when used to store static or infrequently changing data, and when the sources of change are likely to be single operations rather than user-generated operations.

所以让我们用一些概括性的、非约束性的结论结束这一节吧。通常来说，在保存静态或不经常改变的数据时，以及变化源很有可能是单个操作而不是用户产生的操作时，缓存表现最好。

Where consistency and freshness in data is critical, caching may not be an optimal solution, unless there is another element in the system that efficiently refreshes the caches are intervals that do not adversely impact the purpose and user experience of the application.

在数据的一致性和新鲜度非常关键的场合下，缓存可能就不是最优的解决方案了，除非系统中有一个一个部件在高效地刷新着缓存，并且刷新间隔还不会反过来影响到应用的用户体验。

## Section 5: Proxies

<h2 id="section5">代理</h5>

Proxy. What? Many of us have heard of proxy servers. We may have seen configuration options on some of our PC or Mac software that talk about adding and configuring proxy servers, or accessing "via a proxy".

代理。啥？我们中的很多人都听说过代理服务器（proxy servers）。我们或许已经在一些自己的 PC 或 Mac 软件上见过关于添加和配置代理服务器的配置项，或者是一些关于如何“通过代理”访问的配置。

So let's understand that relatively simple, widely used and important piece of tech. This is a word that exists in the English language completely independent of computer science, so let's start with that  [definition][35].

所以让我们来看看这个相对简单而又被广泛使用的的重要技术吧。英语中的代理一词与计算机中的代理毫不相关，所以我们先从它的[定义][35]开始。

![](https://www.freecodecamp.org/news/content/images/2020/03/Screen-Shot-2020-03-08-at-12.57.03-pm.png)

Source:  [https://www.merriam-webster.com/dictionary/proxy][36]

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/03/Screen-Shot-2020-03-08-at-12.57.03-pm.png">
    <figcaption>来自：<a href="https://www.merriam-webster.com/dictionary/proxy">https://www.merriam-webster.com/dictionary/proxy</a></figcaption>
</figure>

Now you can eject most of that out of your mind, and hold on to one key word: "substitute".

现在你可以将大多数含义从脑海中驱逐出去，只留下一个关键词：“代替（substitute）”。

In computing, a proxy is typically a server, and it is a server that acts as a middleman between a client and another server. It literally is a bit of code that sits between client and server. That's the crux of proxies.

在计算机中，代理通常是一个服务器，并且是一个扮演客户端与另一台服务器之间的中间人角色的服务器。它就是位于客户端与服务器之间的一段代码，这就是代理的关键。

In case you need a refresher, or aren't sure of the definitions of client and server, a "client" is a process (code) or machine that requests data from another process or machine (the "server"). The browser is a client when it requests data from a backend server.

也许你需要复习一下，或者还不太确定客户端和服务器的定义：“客户端”是一个进程（代码）或机器，它从另一个进程或机器（“服务器”）请求数据。当浏览器向一个后端服务器请求数据时，它就是客户端。

The server serves the client, but can also be a client - when it retrieves data from a database. Then the database is the server, the server is the client (of the database) and  _also_  a server for the front-end client (browser).

服务器为客户端提供服务，但它也可以是客户端——当它从数据库检索数据时，数据库就是服务器，服务器本身既是（数据库的）客户端，_又是_ 前端客户端（浏览器）的服务器。

![](https://www.freecodecamp.org/news/content/images/2020/03/image-22.png)

Source:  [https://teoriadeisegnali.it/appint/html/altro/bgnet/clientserver.html#figure2][37]

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/03/image-22.png">
    <figcaption>来自：<a href="https://teoriadeisegnali.it/appint/html/altro/bgnet/clientserver.html#figure2">https://teoriadeisegnali.it/appint/html/altro/bgnet/clientserver.html#figure2</a></figcaption>
</figure>

As you can see from the above, the client-server relationship is bi-directional. So one things can be both the client and server. If there was a middleman server that received requests, then sent them to another service, then forwards the response it got from that other service back to the originator client, that would be a proxy server.

如你所见，客户端-服务器关系是双向的。所以一个东西可以同时是客户端和服务器。如果有一个接收请求的中间人服务器，它将请求发给另一个服务，然后转发这个服务给源客户端的响应，那么它就是一个代理服务器。

Going forward we will refer to clients as clients, servers as servers and proxies as the thing between them.

后面我们将把客户端称作客户端，把服务器称作服务器，把代理称作客户端和服务器之间的东西。

So when a client sends a request to a server via the proxy, the proxy may sometimes mask the identity of the client - to the server, the IP address that comes through in the request may be the proxy and not the originating client.

所以当客户端通过代理给服务器发送请求时，代理有时会对服务器掩盖客户端的身份，请求中携带的 IP 地址可能是代理的而不是源客户端的。

For those of you who access sites or download things that otherwise are restricted (from the torrent network for example, or sites banned in your country), you may recognize this pattern - it's the principle on which VPNs are built.

对于你们当中那些想要访问网站或下载受限资源（例如从种子网络或被所在国家禁止的网站）的人来说，你们可以识别出这个模式——它就是建立 VPN 的原理。

Before we move a bit deeper, I want to call something out - when generally used, the term proxy refers to a "forward" proxy. A forward proxy is one where the proxy acts on behalf of (substitute for) the client in the interaction between client and server.

在我们继续深入之前，我想先说一下：术语代理在使用时通常指的是“转发”代理。转发代理就是在客户与服务器通信过程中代表（或代替）客户端的代理。

This is distinguished from a reverse proxy - where the proxy acts on behalf of a server. On a diagram it would look the same - the proxy sits between the client and the server, and the data flows are the same client <-> proxy <-> server.

这与反向代理不同，反向代理代表的是服务器。图上它看起来和转发代理一样是位于客户端和服务器之间的代理，数据流与客户端<->代理<->服务器一样。

The key difference is that a reverse proxy is designed substitute for the server. Often clients won't even know that the network request got routed through a proxy and the proxy passed it on to the intended server (and did the same thing with the server's response).

二者关键的区别是：反向代理是设计用来代替服务器的。通常客户端根本不知道网络请求是通过代理路由并且是代理将其传递给内部服务器的（对服务器的响应也是这么做的）。

So, in a forward proxy, the server won't know that the client's request and its response are traveling through a proxy, and in a reverse proxy the client won't know that the request and response are routed through a proxy.

所以，在转发代理中，服务器将不会知道客户端的请求和响应经过了代理。而在反向代理中，客户端经不会知道请求和响应都是经过代理路由的。

Proxies feel kinda sneaky :)

代理有点偷偷摸摸的 :)

But in systems design, especially for complex systems, proxies are useful and reverse proxies are particularly useful. Your reverse proxy can be delegated a lot of tasks that you don't want your main server handling - it can be a gatekeeper, a screener, a load-balancer and an all around assistant.

但是在系统设计中，尤其是对复杂系统来说，代理很有用，反向代理特别有用。你的反向代理可以委派大量你不希望在主服务器处理的任务，它可以是一个网关、一个筛选器、一个负载均衡器和全能助手。

So proxies can be useful but you may not be sure why. Again, if you've read my other stuff you'd know that I firmly believe that you can understand things properly only when you know  _why_  they exist - knowing  _what_  they do is not enough.

所以代理非常有用，但你可能并不知道为何如此。再一次，如果你读过我的其它材料，你就会知道我坚信：你只有在知道某些东西 _为何_ 存在之后，才能对它们有正确的认识——只知道它们做 _什么_ 并不够。

We've talked about VPNs (for forward proxies) and load-balancing (for reverse proxies), but there are more examples  [here][38]  \- I particularly recommend Clara Clarkson's high level summary.
> 这一段位置有问题，原文中在下一节

## Section 6: Load Balancing

<h2 id="section6">第六节：负载均衡</h2>

If you think about the two words, load and balance, you will start to get an intuition as to what this does in the world of computing. When a server simultaneously receives a lot of requests, it can slow down (throughput reduces, latency rises). After a point it may even fail (no availability).

如果你考虑一下负载（load）和均衡（balance）这两个词，你就会开始对它们在计算机世界中所做的事情有了一个直觉。当服务器同时收到大量请求时，它可能会慢下来（吞吐量下降、延迟上升）。达到一定程度之后，服务器甚至会宕机（丧失可用性）。

You can give the server more muscle power (vertical scaling) or you can add more servers (horizontal scaling). But now you got to work out how the income requests get distributed to the various servers - which requests get routed to which servers and how to ensure they don't get overloaded too? In other words, how do you balance and allocate the request load?

你可以赋予服务器更多的能力（纵向伸缩），也可以添加更多的服务器（横向伸缩）。但是现在你要解决的是如何将进来的请求分布到不同的服务器上去——哪些请求被路由到哪些服务器以及如何保证这些服务器也不会过载？换句话说，你如何均衡并分配请求负载？

Enter load balancers. Since this article is an introduction to principles and concepts, they are, of necessity, very simplified explanations. A load balancer's job is to sit between the client and server (but there are other places it can be inserted) and work out how to distribute incoming request loads across multiple servers, so that the end user (client's) experience is consistently fast, smooth and reliable.

我们现在进入负载均衡器（load balancer）部分。由于这篇文章是一篇对原则和概念的介绍，所以不可避免地，它们都是非常简单的解释。负载均衡器的任务是位于客户端和服务器之间（但是它们也可以被放在其它的地方）并负责将传入请求分发到多个服务器上去，从而不断给终端用户（客户端）带来快速、流畅和可靠的体验。

So load balancers are like traffic managers who direct traffic. And they do this to maintain  [availability][39]  and  [throughput][40].

所以负载均衡器就像指挥交通的交管人员一样。它们这样做是为了维持[可用性](#section2)和[吞吐量](#section3)。

When understanding where a load balancer is inserted in the system's architecture, you can see that load balancers can be thought of as  [reverse proxies][41]. But a load balancer can be inserted in other places too - between other exchanges - for example, between your server and your database.

在理解负载均衡器被放置到系统架构中的哪个位置时，你可以看到负载均衡器可以被看作 [反向代理](#section5)。但是负载均衡器也可以被插入到其它地方——其它有着信息交换的部件之间，例如你的服务器和数据库之间。

### The Balancing Act - Server Selection Strategies

### 均衡操作——服务端选择策略

So how does the load balancer decide how to route and allocate request traffic? To start with, every time you add a server, you need to let your load balancer know that there is one more candidate for it to route traffic to.

所以负载均衡器是如何决定如何路由和分配请求流量的呢？首先，你每新增一台服务器，就需要让负载均衡器知道又多了一台可以将流量路由过去的候选服务器。

If you remove a server, the load balancer needs to know that too. The configuration ensures that the load balancer knows how many servers it has in its go-to list and which ones are available. It is even possible for the load balancer to be kept informed on each server's load levels, status, availability, current task and so on.

如果你去掉了一台服务器，负载均衡器也需要知道。配置信息确保负载均衡器知道它的访问列表中有多少台服务器以及哪些服务器是可用的。持续通知负载均衡器每台服务器的负载级别、状态、可用性、当前任务等信息也是可能的。

Once the load balancer is configured to know what servers it can redirect to, we need to work out the best routing strategy to ensure there is proper distribution amongst the available servers.

将负载均衡器配置为知道可以重定向到哪些服务器后，我们需要制定最佳路由策略，以确保请求被适当地分配到可用服务器之间。

A naive approach to this is for the load balancer to just randomly pick a server and direct each incoming request that way. But as you can imagine, randomness can cause problems and "unbalanced" allocations where some servers get more loaded than others, and that could affect performance of the overall system negatively.

一种简单的方法就是：负载均衡器随机选择一个服务器，然后将每个传入请求转发过去。但是可想而知，随机化会导致负载的“不均衡”分配，一些服务器获得的负载比其它服务器多，这可能会给整个系统的性能带来负面影响。

### Round Robin and Weighted Round Robin

### 轮询和加权轮询

Another method that can be intuitively understood is called "round robin". This is the way many humans process lists that loop. You start at the first item in the list, move down in sequence, and when you're done with the last item you loop back up to the top and start working down the list again.

另一种可以被直观理解的方法叫做“轮询（round robin）”。这是很多人处理循环处理列表的方式。你从列表中的第一个元素开始，依次向下移动，在抵达最后一个元素之后，回到顶点，再次向下处理这个列表。

The load balancer can do this too, by just looping through available servers in a fixed sequence. This way the load is pretty evenly distributed across your servers in a simple-to-understand and predictable pattern.

负载均衡器也可以这么做，它只需要以固定的顺序循环迭代所有的可用服务器。这种负载方式以一种易于理解和可预测的模式完成了多个服务器之间负载的均匀分发。

You can get a little more "fancy" with the round robin by "weighting" some services over others. In the normal, standard round robin, each server is given equal weight (let's say all are given a weighting of 1). But when you differently weight servers, then you can have some servers with a lower weighting (say 0.5, if they're less powerful), and others can be higher like 0.7 or 0.9 or even 1.

通过给一些服务“加权”，你可以轮询会变得更加“花哨”。在标准的轮询中，每台服务器都被赋予了相等的权重（所有的服务器的权重都为 1）。但是当你对服务器分开加权后，就能让一些服务器有着更低的权重（比如 0.5，如果它们更弱的话），而另一些服务器会有更高的权重，比如 0.7 或 0.9 甚至 1。

Then the total traffic will be split up in proportion to those weights and allocated accordingly to the servers that have power proportionate to the volume of requests.

然后整个流量将会根据权重的比例被划分并根据服务器对大量请求的处理能力呈比例分配。

### Load-based server selection

### 基于负载的服务器选择

More sophisticated load balancers can work out the current capacity, performance, and loads of the servers in their go-to list and allocate dynamically according to current loads and calculations as to which will have the highest throughput, lowest latency etc. It would do this by monitoring the performance of each server and deciding which ones can and cannot handle the new requests.

更加复杂的负载均衡器可以根据当前的容量、性能和列表中的服务器负载进行决策，根据当前负载并计算出如何才能达到最高吞吐量、最低延迟等，然后动态分配负载。负载均衡器监控每台服务器的性能，据此决定哪些服务器不能处理新的请求。

### IP Hashing based selection

### 基于 IP 哈希的选择

You can configure your load balancer to  [hash][42]  the IP address of incoming requests, and use the hash value to determine which server to direct the request too. If I had 5 servers available, then the hash function would be designed to return one of five hash values, so one of the servers definitely gets nominated to process the request.

你可以配置负载均衡器对传入请求的 IP 地址进行[哈希][42]，然后使用哈希值决定将请求转发到哪台服务器。如果我有五台可用的服务器，那么哈希函数就会被设计返回五个哈希值中的一个，所以肯定会有一台服务器被指派去处理这个请求。

IP hash based routing can be very useful where you want requests from a certain country or region to get data from a server that is best suited to address the needs from within that region, or where your servers cache requests so that they can be processed fast.

如果你想让来自某个国家或地区的请求从该地区中最能满足需求的服务器获取数据，或者你的服务器通过缓存请求来实现更快的处理，基于 IP 哈希的路由策略会非常有用。

In the latter scenario, you want to ensure that the request goes to a server that has previously cached the same request, as this will improve speed and performance in processing and responding to that request.

在后一种场景中，你可能想确保请求去往那台之前已经缓存相同请求的服务器，因为这会提高处理和响应请求的速度与性能。

If your servers each maintain independent caches and your load balancer does not consistently send identical requests to the same server, you will end up with servers re-doing work that has already been done in as previous request to another server, and you lose the optimization that goes with caching data.

如果你的每台服务器都维护着独立的缓存，负载均衡器也不总是将相同的请求转发到同一台服务器，结果可能就是服务器重复做着之前已经做过的工作，因为之前的请求去了另一台服务器，而你又不能利用那些缓存数据进行优化。

### Path or Service based selection

### 基于路径或服务的选择

You can also get the load balancer to route requests based on their "path" or function or service that is being provided. For example if you're buying flowers from an online florist, requests to load the "Bouquets on Special" may be sent to one server and credit card payments may be sent to another server.

你也可以让负载均衡器根据请求的“路径”或功能或被提供的服务路由请求。例如，如果你正从一家网上花店买花，加载“Bouquets on Special”的请求可能被发送到一台服务器，而信用卡支付的请求可能被发送到另一台服务器。

If only one in twenty visitors actually bought flowers, then you could have a smaller server processing the payments and a bigger one handling all the browsing traffic.

如果二十位访问者中实际上只有一位买了花，那么你可以让一个较小的服务器处理支付，让一个更大的服务器处理所有的浏览流量。

### Mixed Bag

### 混合包

And as with all things, you can get to higher and more detailed levels of complexity. You can have multiple load balancers that each have different server selection strategies! And if yours is a very large and highly trafficked system, then you may need  _load balancers for load balancers..._

和其它东西一样，你可以达到更高和更细层次的复杂度。你可以有多个负载均衡器，它们各自有着不同的服务器选择策略！此外，如果你的系统是一个非常大的高流量系统，你或许需要 _负载均衡器的负载均衡器……_

Ultimately, you add pieces to the system until your performance is tuned to your needs (your needs may look flat, or slow upwards mildly over time, or be prone to spikes!).

最终，你需要不断地往系统中添加组件，直到系统的性能适应了你的需求（你的需求可能看起来平缓，或者随时间缓慢上升，或者容易出现峰值）。

We've talked about VPNs (for forward proxies) and load-balancing (for reverse proxies), but there are more examples  [here][38]  \- I particularly recommend Clara Clarkson's high level summary.

> '-' 之后的那句原文没有。

我们已经讲了 VPN（用于转发代理）和负载均衡（用于反向代理），但是 [这里][38] 还有更多的例子。

## Section 7: Consistent Hashing

<h2 id="section7">第七节：一致性哈希</h2>

One of the slightly more tricky concepts to understand is hashing in the context of load balancing. So it gets its own section.

负载均衡中的哈希是我们要理解的稍微有点棘手的概念之一，因此它有了自己单独的一节。

In order to understand this, please first understand  [how hashing works at a conceptual level][43]. The TL;DR is that hashing converts an input into a fixed-size value, often an integer value (the hash).

为了理解它，请首先了解 [哈希在概念上是如何工作的][43]。简单来说，哈希将输入转换成一个固定长度的值，通常是一个整数（哈希值）。

One of the key principles for a good hashing algorithm or function is that the function must be  [deterministic][44], which is a fancy way for saying that identical inputs will generate identical outputs when passed into the function. So, deterministic means - if I pass in the string "Code" (case sensitive) and the function generates a hash of 11002, then every time I pass in "Code" it must generate "11002" as an integer. And if I pass in "code" it will generate a different number (consistently).

对于一个好的哈希算法或函数而言，一个关键的原则是函数本身必须是[可确定的][44]，也就是相同的输入在传入函数之后会得到相同的输出。所以，可确定性（determinstic）表示：如果我传入了一个字符串“Code”（大小写敏感）然后函数生成的哈希值为 11002，那么每次我传入“Code”时，它就必须生成整数“11002”。如果我传入“code”，它就会生成另一个不同的数字（这个数字也是不变的）。

Sometimes the hashing function can generate the same hash for more than one input - this is not the end of the world and there are ways to deal with it. In fact it becomes more likely the more the range of unique inputs are. But when more than one input deterministically generates the same output, it's called a "collision".

有时，哈希函数可能会为多个输入生成相同的哈希值——不要担心，我们还有应对方式。实际上，唯一输入的范围越大，出现这种情况的可能性就越大。但是当不只一个输入生成相同的输出时，就产生了“冲突（collision）”。

With this in firmly in mind, let's apply it to routing and directed requests to servers. Let's say you have 5 servers to allocate loads across. An easy to understand method would be to hash incoming requests (maybe by IP address, or some client detail), and then generate hashes for each request. Then you apply the modulo operator to that hash, where the right operand is the number of servers.

牢记这一点，让我们把它用到路由和将请求转发到服务器的过程中。假设你有五台用于分配负载的服务器，一种容易理解的方法就是对传入请求（可能是 IP 地址，或者一些其它的客户端信息）进行哈希，为每个请求生成哈希值。然后你就可以对这个哈希值进行取模运算，运算的右操作数为服务器的数量。

For example, this is what your load balancers' pseudo code could look like:

例如，你的负载均衡器的伪代码可能长这样：

```javascript
request#1 => hashes to 34
request#2 => hashes to 23
request#3 => hashes to 30
request#4 => hashes to 14

// You have 5 servers => [Server A, Server B ,Server C ,Server D ,Server E]
// so modulo 5 for each request...

// 你有五台服务器 => [Server A, Server B, Server C, Server D, Server E]
// 所以对每个请求的哈希值进行模 5 运算……
request#1 => hashes to 34 => 34 % 5 = 4 => send this request to servers[4] => Server E
request#2 => hashes to 23 => 23 % 5 = 3 => send this request to servers[3] => Server D
request#3 => hashes to 30 => 30 % 5 = 0 => send this request to  servers[0] => Server A

```

As you can see, the hashing function generates a spread of possible values, and when the modulo operator is applied it brings out a smaller range of numbers that map to the server number.

如你所见，哈希函数生成了大量可能的值，取模运算符把这个值的范围变小了，刚好映射到了服务器的数量。

You will definitely get different requests that map to the same server, and that's fine, as long as there is "[uniformity][45]" in the overall allocation to all the servers.

你肯定会遇到不同的请求被映射到同一台服务器，这还好，只要在所有服务器上的所有分配是“[一致的][45]”就行。

### Adding Servers, and Handling Failing Servers

### 添加服务器，处理故障服务器

So - what happens if one of the servers that we are sending traffic to dies? The hashing function (refer to the pseudo code snippet above) still thinks there are 5 servers, and the mod operator generates a range from 0-4. But we only have 4 servers now that one has failed, and we are still sending it traffic. Oops.

所以，如果我们向其发送流量的服务器挂了会怎样呢？哈希函数（我们上面的那一段伪代码）仍然认为还有五台服务器，取模运算符会生成 0-4 这个范围的数字。但是由于一台服务器挂了，我们只有四台服务器了，可我们还是向那台挂了的服务器发送流量。糟糕。

Inversely, we could add a sixth server but that would  _never_  get any traffic because our mod operator is 5, and it will never yield a number that would include the newly added 6th server. Double oops.

相反，我们可以加入第六台服务器，但它 _永远_ 都不会收到任何流量，因为我们的模操作数为 5，它永远也不会产生一个将第六台服务器包括进来的数字。更糟糕了。

```
// Let's add a 6th server
// 添加第六台服务器
servers => [Server A, Server B ,Server C ,Server D ,Server E, Server F]
// let's change the modulo operand to 6
// 将模操作数改成 6
request#1 => hashes to 34 => 34 % 6 = 4 => send this request to servers[4] => Server E
request#2 => hashes to 23 => 23 % 6 = 5 => send this request to servers[5] => Server F
request#3 => hashes to 30 => 30 % 6 = 0 => send this request to  servers[0] => Server A

```

We note that the server number after applying the mod changes (though, in this example,  _not_  for request#1 and request#3 - but that is just because in this specific case the numbers worked out that way).

我们发现服务器数字在取模后变了（尽管，在这个示例中，request#1 和 request#3 _没有改变_——但这只是一个特例）。

In effect, the result is that half the requests (could be more in other examples!) are now being routed to new servers altogether, and we lose the benefits of previously cached data on the servers.

于是，现在总共有一半的请求（其它示例中可能会更多！）被路由到了新的服务器，我们因此失去了之前缓存在服务器上的数据的所带来的好处。

For example, request#4 used to go to Server E, but now goes to Server C. All the cached data relating to request#4 sitting on Server E is of no use since the request is now going to Server C. You can calculate a similar problem for where one of your servers dies, but the mod function keeps sending it requests.

例如，request#4 之前去往 Server E，但是现在去了 Server C。Server E 中所有与 request#4 有关的缓存数据都没用了，因为现在请求都去了 Server C。你可以为一台宕机的服务器计算一个类似的问题，但是取模函数仍然给它发送请求。

It sounds minor in this tiny system. But on a very large scale system this is a poor outcome. #SystemDesignFail.

在这个微型系统中，它看似没啥影响。但在一个超大规模的系统中，这就是一个糟糕的结果。系统设计失败。

So clearly, a simple hashing-to-allocate system does not scale or handle failures well.

显然，一个简单地通过哈希分配请求的系统不能很好地处理错误。

### A popular solution - consistent hashing

### 流行的解决方案——一致性哈希

Unfortunately this is the part where I feel word descriptions will not be enough. Consistent hashing is best understood visually. But the purpose of this post so far is to give you an intuition around the problem, what it is, why it arises, and what the shortcomings in a basic solution might be. Keep that firmly in mind.

不幸的是，我觉得用文字并不足以描述这一部分。一致性哈希（consistent hashing）最好是通过可视化进行理解。但是到目前为止，本篇文章的目的是给你关于该问题的直观想法，为什么会出现这个问题，以及常规解决方案可能的不足。牢记这一点。

The key problem with naive hashing, as we discussed, is that when (A) a server fails, traffic still gets routed to it, and (B) you add a new server, the allocations can get substantially changed, thus losing the benefits of previous caches.

正如我们讨论的，普通哈希的关键问题在于：当 (A) 一个服务器宕机了，仍然有流量被路由到它，并且 (B) 你添加了一台新的服务器，分配方式本质上已经变了，因此你失去了之前的缓存带来的好处。

There are two very important things to keep in mind when digging into consistent hashing:

在深入一致性哈希时，有两个重要的点需要牢记：

1.  Consistent hashing  _does not eliminate the problems_, especially B. But it does reduce the problems a lot. At first you might wonder what the big deal is in consistent hashing, as the underlying downside still exists - yes, but to a much smaller extent, and that itself is a valuable improvement in very large scale systems.
2.  Consistent hashing applies a hash function to incoming requests  _and the servers_. The resulting outputs therefore fall in a set range (continuum) of values. This detail is very important.

1. 一致性哈希 _没有消除问题_，尤其是 B。但是它确实减少了很多问题。一开始你可能想知道为什么一致性哈希那么重要，底层的缺点依然存在，确实如此，但是它们变少了，并且一致性哈希本身也是对大规模系统的一个有效改进。
2. 一致性哈希对传入请求 _和服务器_ 进行哈希操作，哈希结果因此陷入一系列（连续）的值。这个细节非常重要。

Please keep these in mind as you watch the below recommended video that explains consistent hashing, as otherwise its benefits may not be obvious.

请在观看下面推荐的解释一致性哈希的视频时牢记这一点，否则它的效果就没那么明显了。

I strongly recommend this video as it embeds these principles without burdening you with too much detail.

我强烈推荐这个视频，它融入了这些原则，却没有过多烦扰你的细节。

<iframe width="560" height="315" src="https://www.youtube.com/embed/tHEyzVbl4bg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A brief intro to consistent hashing by Hannah Barton

<center>一个关于一致性哈希的简单介绍，来自 Hannah Barton</center>

If you're having a little trouble really understanding why this strategy is important in load balancing, I suggest you take a break, then return to the  [load balancing section][46]  and then re-read this again. It's not uncommon for all this to feel very abstract unless you've directly encountered the problem in your work!

如果你在理解消化为什么这个策略在负载均衡中很重要时遇到了任何问题，我建议你先休息一下，然后回到 [负载均衡一节](#section6)，再次阅读。除非你在工作中遇到过这个问题，否则所有的这些都会变得非常抽象，这并不罕见。

## Section 8: Databases

<h2 id="section8">第八节：数据库</h2>

We briefly  [considered][47]  that there are different types of storage solutions (databases) designed to suit a number of different use-cases, and some are more specialized for certain tasks than others. At a very high level though, databases can be categorized into two types: Relational and Non-Relational.

我们简要地[考虑了](#section2)为满足许多不同使用场景设计的不同类型的存储方案（数据库），并且其中的一些和其它的相比，更适用于特定的任务。站在一个非常高的视角，数据库可以被分类成两种类型：关系型（Relational）和非关系型（Non-Relational）。

### Relational Databases

### 关系型数据库

A  **[relational database][48]**  is one that has strictly enforced relationships between things stored in the database. These relationships are typically made possible by requiring the database to represented each such thing (called the "entity") as a structured table - with zero or more rows ("records", "entries") and and one or more columns ("attributes, "fields").

**[关系型数据库][48]** 是一种严格执行数据库中所存事物之间关系的数据库。这些关系通常可能会要求数据库将每个东西（称为“实体”）表示成一个结构化表，表中有零行或多行（“记录”，“条目”）和一列或多列（“属性”，“字段”）。

By forcing such a structure on an entity, we can ensure that each item/entry/record has the right data to go with it. It makes for better consistency and the ability to make tight relationships between the entities.

通过在实体上强制推行这种结构，我们可以确保每个数据项/条目/记录都具有正确的数据。它带来了更好的一致性，以及形成实体间更精密关系的能力。

You can see this structure in the table recording "Baby" (entity) data below. Each record ("entry) in the table has 4 fields, which represent data relating to that baby. This is a classic relational database structure (and a formalized entity structure is called a  [schema][49]).

你可以从下面记录“Baby”（实体）数据的表中看到这个结构。表中的每条记录（“条目”）都有四个字段，它们表示与那个宝宝有关的数据。这是一个经典的关系型数据库结构（也是一个被称为[模式][49]的规范实体结构）。

![](https://www.freecodecamp.org/news/content/images/2020/03/image-46.png)

source:  [https://web.stanford.edu/class/cs101/table-1-data.html][50]

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/03/image-46.png">
    <figcaption style="text-align: center">
        来自：<a href="https://web.stanford.edu/class/cs101/table-1-data.html">https://web.stanford.edu/class/cs101/table-1-data.html</a>
    </figcaption>
</figfure>

So the key feature to understand about relational databases is that they are highly structured, and impose structure on all the entities. This structure in enforced by ensuring that data added to the table conforms to that structure. Adding a height field to the table when its schema doesn't allow for it will not be permitted.

所以理解关系型数据库的关键在于它们是高度结构化的，并且将结构强加给所有的实体。通过确保添加到表的数据符合该结构来强制实施此结构。添加一个模式不允许的高度字段到表将不被准许。

Most relational databases support a database querying language called SQL -  [Structured Query Language][51]. This is a language specifically designed to interact with the contents of a structured (relational) database. The two concepts are quite tightly coupled, so much so that people often referred to a relational database as a "SQL database" (and sometimes pronounced as "sequel" database).

大多数关系型数据库都支持数据库查询语言，叫做 SQL——[结构化查询语言][51]。这是一门专为与结构化（关系型）数据库内容交互设计的语言。这两个概念的联系非常紧密，以至于很多人通常将关系型数据库称作“SQL 数据库”（有时发音为“sequel”数据库）。

In general, it is considered that SQL (relational) databases support more complex queries (combining different fields and filters and conditions) than non-relational databases. The database itself handles these queries and sends back matching results.

通常认为，SQL（关系型）数据库比非关系型数据库支持更加复杂的查询（组合不同的字段、过滤器和条件）。数据库本身处理这些查询，然后返回满足的结果。

Many people who are SQL database fans argue that without that function, you would have to fetch  _all_ the data and then have the server or the client load that data "[in memory][52]" and apply the filtering conditions - which is OK for small sets of data but for a large, complex dataset, with millions of records and rows, that would badly affect performance. However, this is not always the case, as we will see when we learn about NoSQL databases.

很多 SQL 数据库迷都说，如果没有这个功能（指复杂查询）的话，你将不得不先取出 _所有的_ 数据，让服务器或客户端把数据加载进 “[内存](#section2)”，然后应用过滤条件——这在小数据集上还好，但是对于有着成千上万的记录和行的大型复杂数据集来说，就会对性能带来非常严重的影响。然而，并不总是这样，我们将会在学习 NoSQL 数据库时看到原因。

A common and much-loved example of a relational database is the  [PostgreSQL][53]  (often called "Postgres") database.

一个常见而又倍受喜爱的关系型数据库是 [PostgreSQL][53]（通常称为“Postgres”）数据库。

### ACID

ACID transactions are a set of features that describe the transactions that a good relational database will support.  [ACID = "Atomic, Consistent, Isolation, Durable"][54]. A transaction is an interaction with a database, typically read or write operations.

ACID 事务描述的是良好关系型数据库都将支持的事务的一组特征。[ACID = "Atomic, Consistent, Isolation, Durable"][54]。事务是与数据库的交互，通常是读或写操作。

**Atomicity**  requires that when a single transaction comprises of more than one operation, then the database must guarantee that if one operation fails the  _entire_  transaction (all operations) also fail. It's "all or nothing". That way if the transaction succeeds, then on completion you know that all the sub-operations completed successfully, and if an operation fails, then you know that all the operations that went with it failed.

**原子性（Atomicity）** 要求：当单个事务包含到超过一个操作时，数据库必须保证如果有一个操作失败，_整个_ 事务（所有的操作）也会失败。它就是“要么全部，要么一个也不”。这样，如果事务成功了，那么你会知道所有的子操作都成功了，如果某个操作失败了，那么你会知道所有同它一起的操作都失败了。

For example if a single transaction involved reading from two tables and writing to three, then if any one of those individual operations fails the entire transaction fails. This means that none of those individual operations should complete. You would not want even 1 out of the 3 write transactions to work - that would "dirty" the data in your databases!

例如，如果一个事务包括从两个表中读数据并往三个表写数据，那么如果它们中的任意一个操作失败了，整个事务就失败了。这意味着一个独立的操作都不应该完成。你甚至不希望三个写操作中的一个成功——这会“弄脏”数据库内的数据！

**Consistency**  requires that each transaction in a database is valid according to the database's defined rules, and when the database changes state (some information has changed), such change is valid and does not corrupt the data. Each transaction moves the database from one  _valid_  state to another  _valid_  state. Consistency can be thought of as the following: every "read" operation receives the most recent "write" operation results.

**一致性（Consistency）** 要求：数据中的每个事务都符合数据库定义的规则，当数据库改变状态（一些信息改变了）时，这个改变是有效的，不会损坏数据。每个事务都将数据库从一个 _有效的_ 状态移动到另一个 _有效的_ 状态。可以这么看待一致性：每个“读”操作都收到最近一次“写”操作的结果。

**Isolation**  means that you can "concurrently" (at the same time) run multiple transactions on a database, but the database will end up with a state that looks as though each operation had been run serially ( in a sequence, like a queue of operations). I personally think "Isolation" is not a very descriptive term for the concept, but I guess ACCD is less easy to say than ACID...

**隔离性（Isolation）** 表示你可以在数据库“并发（concurrently）”（同时）运行多个事务，但是数据库最终的状态看起来就像每个操作串行（按顺序，就像一个操作队列一样）运行结束后一样。我个人认为“隔离性”对概念的描述性不是非常强，但是我猜 ACCD 比 ACID 说起来更难……

**Durability**  is the promise that once the data is stored in the database, it will remain so. It will be "[persistent][55]" - stored on disk and not in "memory".

**持久性（Durability）** 保证：一旦数据被保存到数据库中，就会一直在那里。它将会是“[持久的](#section2)”——保存在硬盘，而不是“内存”中。

### Non-relational databases

### 非关系型数据库

In contrast, a  **non-relational database**  has a less rigid, or, put another way, a more flexible structure to its data. The data typically is presented as "key-value" pairs. A simple way of representing this would be as an array (list) of "key-value" pair objects, for example:

相反，**非关系型数据库** 就没有那么死板了，或者，换句话说，它的数据有着更加灵活的结构。数据通常以“键-值”对的形式呈现。这种方式的一个简化形式就是一个由“键-值”对对象构成的数组（列表），例如：

```javascript
// baby names
[
	{ 
    	name: "Jacob",
        rank: ##,
        gender: "M",
        year: ####
    },
    { 
    	name: "Isabella",
        rank: ##,
        gender: "F",
        year: ####
    },
    {
      //...
    },
    
    // ...
]
```

Non relational databases are also referred to as "NoSQL" databases, and offer benefits when you do not want or need to have consistently structured data.

非关系型数据库也被称为“NoSQL”数据库，当你不想或不需要结构一致的数据时，它能给你提供便利。

Similar to the ACID properties, NoSQL database properties are sometimes referred to as BASE:

和 ACID 性质类似，NoSQL 数据库的性质有时候被称为 BASE：

**Basically Available** which states that the system guarantees availability

**基本可用（Basically Abailable）**规定系统保证可用性

**Soft State** means the state of the system may change over time, even without input

**软状态（Soft State）** 表示系统的状态可能随时间改变，即使没有输入也是如此

**Eventual Consistency**  states that the system will become consistent over a (very short) period of time unless other inputs are received.

**最终一致性（Eventual Consistency）** 规定系统在一段（短暂）的时间间隔之后会达到一致的状态，除非收到了其它的输入。

Since, at their core, these databases hold data in a hash-table-like structure, they are extremely fast, simple and easy to use, and are perfect for use cases like caching, environment variables, configuration files and session state etc. This flexibility makes them perfect for using in memory (e.g.  [Memcached][56]) and also in persistent storage (e.g.  [DynamoDb][57]).

由于这些数据库的内核都采用类哈希表结构保存数据，所以它们会非常快、简单、易用，完美适用于缓存、环境变量、配置文件和会话状态等使用场景。这种灵活性使得它们在内存中（比如 [Memcached][56]）和持久化存储（比如 [DynamoDb][57]）中的使用非常完美。

There are other "JSON-like" databases called document databases like the well-loved  [MongoDb][58], and at the core these are also "key-value" stores.

还有很多“类 JSON” 的数据库，它们被称为文档数据库，比如倍受喜爱的 [MongoDb][58]，这些数据库的内核也采用“键-值”存储。

### Database Indexing

### 数据库索引

This is a complicated topic so I will simply skim the surface for the purpose of giving you a high level overview of what you need for systems design interviews.

这是一个复杂的话题，所以为了给你一个关于系统设计面试需要哪些知识的高度概述，我将会简单地给出冰山一角。

Imagine a database table with 100 million rows. This table is used mainly to look up one or two values in each record. To retrieve the values for a specific row you would need to iterate over the table. If it's the very last record that would take a long time!

想象一个有一亿行数据的数据库表，这个表主要被用来查找每条记录的一个或者两个值。为了得到特定行的值，你需要迭代整个表，如果它是非常靠后的记录，那将会花费很长时间！

Indexing is a way of short cutting to the record that has matching values more efficiently than going through each row. Indexes are typically a data structure that is added to the database that is designed to facilitate fast searching of the database for those  _specific_  attributes (fields).

索引（indexing）是记录的一种快捷方式，它在匹配值时比逐行检查的更加高效。索引通常是一种被添加到数据库的数据结构，它专为促进数据库内 _特定_ 属性（字段）上的快速搜索而设计。

So if the census bureau has 120 million records with names and ages, and you most often need to retrieve lists of people belonging to an age group, then you would index that database on the age attribute.

所以，如果人口统计局有一亿两千万条具有名字和年龄的记录，而你最常需要的就是检索属于某个年龄组的人员列表，那么就可以在该数据库的年龄属性上建立索引。

Indexing is core to relational databases and is also widely offered on non-relational databases. The benefits of indexing are thus available in theory for both types of databases, and this is hugely beneficial to optimise lookup times.

索引是关系型数据库的核心，在非关系型数据库中也广泛使用。因此，从理论上讲，索引的好处可用于两种类型的数据库，这对优化查找时间非常有利。

### Replication and Sharding

### 复制和分片

While these may sound like things out of a bio-terrorism movie, you're more likely to hear them everyday in the context of database scaling.

虽然这些听起来像是一部生物恐怖电影中的东西，但你更有可能每天都在数据库扩展中听到它们。

Replication means to duplicate (make copies of, replicate) your database. You may remember that when we discussed  [availability][59].

复制（replication）是指复制（duplicate, make copies of, replicate）你的数据库。你或许记得我们在[可用性](#section3)一节讨论过它。

We had considered the benefits of having redundancy in a system to maintain high availability. Replication ensures redundancy in the database if one goes down. But it also raises the question of how to synchronize data across the replicas, since they're meant to have the same data. Replication on write and update operations to a database can happen synchronously (at the same time as the changes to the main database) or asynchronously .

我们已经考虑了在系统内进行冗余以维持高可用带来的好处。复制在单个数据库宕机时保证数据库的冗余。但是它也引发了如何在副本中同步数据的问题，因为它们要有相同的数据。数据库写操作和更新操作的复制可以同步进行（主数据库发生改变的同时），也可以异步进行。

The acceptable time interval between synchronising the main and a replica database really depends on your needs - if you really need state between the two databases to be consistent then the replication needs to be rapid. You also want to ensure that if the write operation to the replica fails, the write operation to the main database also fails (atomicity).

主库与从库之间同步数据的可接受时间间隔取决于具体的需求——如果你确实需要两个数据库之间的状态是一致的，那么复制操作必须非常快。你也想确保从库上的写操作失败时，主库上的写操作也失败（原子性）。

But what do you do when you've got so much data that simply replicating it may solve availability issues but does not solve throughput and latency issues (speed)?

但是，当你拥有如此多的数据，以至于简单地进行复制可能会解决可用性问题，但不能解决吞吐量和延迟问题（速度）时，你会怎么做？

At this point you may want to consider "chunking down" your data, into "shards". Some people also call this partitioning your data (which is different from partitioning your hard drive!).

这个时候你可能会考虑对你的数据进行“分类”，形成“分片（shard）”。一些人也管这个叫数据划分（partitioning），它与硬盘分区完全不同。

Sharding data breaks your huge database into smaller databases. You can work out how you want to shard your data depending on its structure. It could be as simple as every 5 million rows are saved in a different shard, or go for other strategies that best fit your data, needs and locations served.

数据分片将大数据库拆分为较小的数据库。你可以根据数据结构决定如何对数据进行分片。分片可以像每五百万行一个分片这么简单，也可以采用最适用于当前数据、需要和服务位置的其它策略。

## Section 9: Leader Election

<h2 id="section9">第九节：领导选举</h2>

Let's move back to servers again for a slightly more advanced topic. We already understand the principle of  [Availability][60], and how redundancy is one way to increase availability. We have also walked through some practical considerations when handling the  [routing of requests][61]  to clusters of redundant servers.

 让我们再次回到服务器，讨论一个稍微高级点的话题。我们已经了解了 [可用性](#section3)的原则，以及冗余是如何作为增加可用性的一种手段的。在处理到冗余服务器集群的[请求路由](#section6)时，我们还介绍了一些实践中的注意事项。

But sometimes, with this kind of setup where multiple servers are doing much the same thing, there can arise situations where you need only one server to take the lead.

但是有时候，在这种设置中，多个服务器中的事情没多大差别，这可能会出现只需要一台服务器带头的情况。

For example, you want to ensure that only one server is given the responsibility for updating some third party API because multiple updates from different servers could cause issues or run up costs on the third-party's side.

例如，你想确保只有一台服务器负责更新某些第三方 API，因为来自不同服务器的多次更新可能导致问题，或者增加第三方的成本。

In this case you need to choose that primary server to delegate this update responsibility to. That process is called  [leader election][62].

在这种情况下，你需要选择一台主服务器，然后将更新职责委派给它。这个过程被称为 [领导选举][62]。

When multiple servers are in a cluster to provide redundancy, they could, amongst themselves, be configured to have one and only one leader. They would also detect when that leader server has failed, and appoint another one to take its place.

当一个集群中有多台服务器提供冗余时，可以配置它们之间有且只有一个领导。它们也会在检测到领导服务器宕机时，指定另一台服务器顶替领导服务器的位置。

The principle is very simple, but the devil is in the details. The really tricky part is ensuring that the servers are "in sync" in terms of their data, state and operations.

原理非常简单，但细节才是最让人头疼的。真正棘手的部分在于：确保服务器之间保持数据、状态和操作的同步。

There is always the risk that certain outages could result in one or two servers being disconnected from the others, for example. In that case, engineers end up using some of the underlying ideas that are used in blockchain to derive consensus values for the cluster of servers.

例如，始终存在某些事故导致一台或两台服务器断开与其他服务器之间的连接的风险。在这种情况下，工程师们最终会使用一些区块链中的基本理念让服务器集群达成共识。

In other words, a  [consensus algorithm][63]  is used to give all the servers an "agreed on" value that they can all rely on in their logic when identifying which server is the leader.

换句话说，[共识算法][63] 用于告知所有服务器一个“达成一致的”值，它们都可以在识别领导服务器的逻辑中依赖这个值。

Leader Election is commonly implemented with software like  [etcd][64], which is a store of key-value pairs that offers both high availability  _and_ strong consistency (which is valuable and an unusual combination) by using Leader Election itself and using a consensus algorithm.

领导选举通常使用像 [etcd][64] 这样的软件实现，它是一个键-值对存储，通过使用领导选举本身和共识算法，它同时提供了可用性 _和_ 强一致性（这很有价值，也是不寻常的组合）。

So engineers can rely on etcd's own leader election architecture to produce leader election in their systems. This is done by storing in a service like etcd, a key-value pair that represents the current leader.

所以工程师们可以依赖 etcd 自己的领导选举架构，在他们的系统中进行领导选举。这是通过在像 etcd 这样的服务中存储一个表示当前领导的键-指对来完成的。

Since etcd is highly available  _and_ strongly consistent, that key-value pair can always be relied on by your system to contain the final "source of truth" server in your cluster is the current elected leader.

因为 etcd 是高可用 _和_ 强一致性的，所以你总是可以在自己的系统中依赖那个键-值对，它包含集群中关于当前领导是哪台服务器的最终“事实来源”。

## Section 10: Polling, Streaming, Sockets

<h2 id="section10">第十节：轮询、流、套接字</h2>

In the modern age of continuous updates, push notifications, streaming content and real-time data, it is important to grasp the basic principles that underpin these technologies. To have data in your application updated regularly or instantly requires the use of one of the two following approaches.

在这个不断更新、推送通知、流内容和实时数据的现代时代，掌握支撑这些技术的基本原理非常重要。要定期或立即更新应用中的数据，你需要使用以下两种方法中的一种。

### Polling

### 轮询

This one is simple. If you look at the [wikipedia entry][65]  you may find it a bit intense. So instead take a look at its dictionary meaning, especially in the context of computer science. Keep that simple fundamental in mind.

这种方法很简单。如果查看 [维基百科词条][65]，你会发现它讲的有点多。所以还是看一看词典中是如何解释它吧，尤其是计算机科学背景下的含义。牢记这个简单的基础。

![](https://www.freecodecamp.org/news/content/images/2020/03/Screen-Shot-2020-03-14-at-10.25.44-am.png)

Polling is simply having your client check on a server by sending it a network request and asking for updated data.  These requests are typically made at regular intervals like 5 seconds, 15 seconds, 1 minute or any other interval required by your use case.
> Markdown 中的这一段貌似和原文对不上

轮询（polling）就是简单地让客户端检查服务器，客户端发送一个网络请求请求更新的数据。这些请求通常按照固定的时间间隔发出，比如五秒、十五秒、一分钟或用例要求的任何时间间隔。

Polling every few seconds is still not quite the same as real-time, and also comes with the following downsides, especially if you have a million plus simultaneous users:

每几秒钟进行一次轮询还是和实时大有不同，还以下缺点，特别是你的并发用户在一百万以上的时候：

-   almost-constant network requests (not great for the client)
-   almost constant inbound requests (not great for the server loads - 1 million+ requests per second!)

- 几乎不变的网络请求（不利于客户端）
- 几乎不变的入站请求（不利于服务端负载——每秒超过一百万次请求！）

So polling rapidly is not really efficient or performant, and polling is best used in circumstances when small gaps in data updates is not a problem for your application.

所以快速轮询并不是真的很高效，轮询最好是用在数据更新中的小差别对应用来说不是问题的场景中。

For example, if you built an Uber clone, you may have the driver-side app send driver location data every 5 seconds, and your rider-side app poll for the driver's location every 5 seconds.

例如，如果你克隆了 Uber，你或许会让司机端应用每五秒发送一次司机的位置数据，让乘客端应用每五秒轮询一次司机的位置。

### Streaming

### 流

Streaming solves the constant polling problem. If constantly hitting the server is necessary, then it's better to use something called  [web-sockets][66].

流（streaming）解决了不断轮询的问题。如果有必要不断访问服务器，最好使用像 [web-socket][66] 这样的东西。

This is a network communication protocol that is designed to work over TCP. It opens a two-way dedicated channel (socket) between a client and server, kind of like an open hotline between two endpoints.

这是一个旨在 TCP 上工作的网络通信协议。它在客户端和服务器之间打开一个双向的专用通道（套接字），有点像在两个端点之间的开放热线。

Unlike the usual TCP/IP communication, these sockets are "long-lived" so that its a single request to the server that opens up this hotline for the two-way transfer of data, rather than multiple separate requests. By long-lived, we meant that the socket connection between the machines will last until either side closes it, or the network drops.

与通常的 TCP/IP 通信不同，这些套接字是“长久的（long-lived）”，以便它向服务器发出的单个请求打开了进行双向数据传输的热线，而不是采用多个独立的请求。我们使用长久一词表示机器之间的套接字连接将会一致持续到连接的一端关闭它，或者网络故障。

You may remember from our discussion on IP, TCP and HTTP that these operate by sending "packets" of data, for each request-response cycle. Web-sockets mean that there is a single request-response interaction (not a cycle really if you think about it!) and that opens up the channel through which two-data is sent in a "stream".

你可能还记得我们对 IP、TCP 和 HTTP 的讨论，这些操作在每个请求-响应环中都发送数据的“数据包”。Web-socket 意味着只有一个请求-响应交互（不是你认为的环！），它打开了一个通道，通道两端数据都以“流”的形式发送。

The big difference with polling and all "regular" IP based communication is that whereas polling has the client making requests to the server for data at regular intervals ("pulling" data), in streaming, the client is "on standby" waiting for the server to "push" some data its way. The server will send out data when it changes, and the client is always listening for that. Hence, if the data change is constant, then it becomes a "stream", which may be better for what the user needs.

轮询与所有“常规”的基于 IP 的通信的一大区别就是：轮询让客户端定时给服务器发送获取数据的请求（“拉取”数据），而在流中，客户端“随时等待”着服务器将一些数据“推送”给它。服务器会在数据改变时将其发出，并且客户端总是在监听它。因此，如果数据不断变化，那么它就成为了一个“流”，这可能更加符合用户的需求。

For example, while using  [collaborative coding IDEs][67], when either user types something, it can show up on the other, and this is done via web-sockets because you want to have real-time collaboration. It would suck if what I typed showed up on your screen after you tried to type the same thing or after 3 minutes of you waiting wondering what I was doing!

例如，在使用 [协作式编码 IDE][67] 时，只要有用户输入了东西，它就可以立马被其它人看到，这就是通过 web-socket 实现的，因为你想要的是实时协作。如果我输入的内容在你输入同样的内容之后才在你的屏幕上显示，或者你等了三分钟才知道我干了啥，那就太糟糕了！

Or think of online, multiplayer games - that is a perfect use case for streaming game data between players!

或者想一下多人在线游戏——那是在玩家之间的流式传输游戏数据的绝佳案例！

To conclude, the use case determines the choice between polling and streaming. In general, you want to stream if your data is "real-time", and if it's OK to have a lag (as little as 15 seconds is still a lag) then polling may be a good option. But it all depends on how many simultaneous users you have and whether they expect the data to be instantaneous. A commonly used example of a streaming service is  [Apache Kafka][68].

总之，使用场景决定选择轮询还是流。通常，如果你希望数据是“实时的”，就用流；如果滞后（十五秒也是滞后）对你来说是可以的，那么轮询也是一个不错的选择。但是这完全取决于你有多少并发用户，以及他们是否期望数据是实时的。流式服务的一个常见示例就是 [Apache Kafka][68]。

## Section 11: Endpoint Protection

<h2 id="section11">第十一节：端点保护</h2>

When you build large scale systems it becomes important to protect your system from too many operations, where such operations are not actually needed to use the system. Now that sounds very abstract. But think of this - how many times have you clicked furiously on a button thinking it's going to make the system more responsive? Imagine if each one of those button clicks pinged a server and the server tried to process them all! If the throughput of the system is low for some reason (say a server was struggling under unusual load) then each of those clicks would have made the system even slower because it has to process them all!

当你构建大规模系统时，保护系统免受过多操作（使用系统时实际上不需要这些操作）就变得很重要了。现在听起来还是非常抽象。但是想一下这个——你有多少次疯狂点击着一个按钮，以为它将会使系统更快？想象一下如果每次点击都 ping 一次服务器，服务器也尝试全部处理它们！如果系统的吞吐量由于某些原因很低（比如服务器正在异常负载下挣扎），那么每次点击都会使系统变得更慢，因为系统必须处理所有的点击！

Sometimes it's not even about protecting the system. Sometimes you want to limit the operations because that is part of your service. For example, you may have used free tiers on third-party API services where you're only allowed to make 20 requests per 30 minute interval. if you make 21 or 300 requests in a 30 minute interval, after the first 20, that server will stop processing your requests.

有时它甚至与保护系统无关。有时你想要限制操作次数，因为那是你提供服务的一部分。例如，你使用了第三方 API 服务的免费套餐，他们只允许你每三十分钟进行二十次请求。如果你在三个分钟内进行了二十一次或三百次请求，那么在前二十次请求后，服务器将不再处理你的请求。

That is called rate-limiting. Using rate-limiting, a server can limit the number of operations attempted by a client in a given window of time. A rate-limit can be calculated on users, requests, times, payloads, or other things. Typically, once the limit is exceeded in a time window, for the rest of that window the server will return an error.

这被称为限流（rate-limiting）。服务器可以通过限流手段限制客户端给定时间段内尝试进行的操作数量。限流可以根据用户计算，也可以根据请求、次数、负载或任何其它东西。通常，一旦某个时间段内的操作超出了限制，服务器会在剩余的时间内返回错误。

Ok, now you might think that endpoint "protection" is an exaggeration. You're just restricting the users ability to get something out of the endpoint. True, but it is also protection when the user (client) is malicious - like say a bot that is smashing your endpoint. Why would that happen? Because flooding a server with more requests than it can handle is a strategy used by malicious folks to bring down that server, which effectively brings down that service. That's exactly what a  [Denial of Service (D0S) attack][69] is.

好了，现在你可能认为端点“保护”有些夸张。你只是在限制用户从端点获取某些东西的能力。的确如此，但是它面对恶意用户（客户端）时也能提供保护——就像一个机器人正在攻击你的端点一样。为什么会发生那种事情呢？因为用超过服务器处理能力的大量请求淹没服务器是一种策略，这是恶意攻击者让服务器宕机的一种方式，这种方式也能有效击垮服务。它正是 [拒绝服务（DoS，Denial of Service）攻击][69]。

While DoS attacks can be defended against in this way, rate-limiting by itself won't protect you from a sophisticated version of a DoS attack - a  _distributed_  DoS. Here distribution simply means that the attack is coming from multiple clients that seem unrelated and there is no real way to identify them as being controlled by the single malicious agent. Other methods need to be used to protect against such coordinated, distributed attacks.

虽然限流可以抵御 DoS 攻击，但是它本身并不能把你从高级版本的 DoS 攻击——_分布式_ DoS 中解救出来。这里的分布式只是简单地表示攻击来自多个看似毫不相关的客户端，也没有识别它们是被单个恶意代理控制的有效方式。需要采取其它方式来防止这种协作型分布式攻击。

But rate-limiting is useful and popular anyway, for less scary use-cases, like the API restriction one I mentioned. Given how rate-limiting works, since the server has to first check the limit conditions and enforce them if necessary, you need to think about what kind of data structure and database you'd want to use to make those checks super fast, so that you don't slow down processing the request if it's within allowed limits. Also, if you have it in-memory within the server itself, then you need to be able to guarantee that all requests from a given client will come to that server so that it can enforce the limits properly. To handle situations like this it's popular to use a separate  [Redis service][70]  that sits outside the server, but holds the user's details in-memory, and can quickly determine whether a user is within their permitted limits.

但是无论如何，对于像我在上面提到的 API 限制这些没那么恐怖的场景而言，限流是一种有用且流行的方式。考虑到限流的工作原理，由于服务器必须先检查限制条件并在必要时强制实行，所以你需要考虑使用何种数据结构和数据库才能使这个检查超级快，以便允许范围内的请求不会拖慢处理该请求的处理速度。另外，如果你将其存储在服务器本身的内存中，那么你就需要保证所有来自给定客户端的请求都会抵达服务器，以便它可以正确地进行限制。为了处理像这样的情形，使用位于服务器之外的独立 [Redis 服务][70]非常流行，但是他们将用户详情保存在内存中，这能快速决定用户是否在允许的范围内。

Rate limiting can be made as complicated as the rules you want to enforce, but the above section should cover the fundamentals and most common use-cases.

限流可以和你想要的规则一样复杂，但是本节应该涵盖的是基础知识和最常见的用例。

## Section 12: Messaging & Pub-Sub

<h2 id="section12">第十二节：消息与发布-订阅</h2>

When you design and build large-scale and  [distributed systems][71], for that system to work cohesively and smoothly, it is important to exchange information between the components and services that make up the system. But as we have seen before, systems that rely on networks suffer from the same weakness as networks - they are fragile. Networks fail and its not an infrequent occurrence. When networks fail, components in the system are not able to communicate may degrade the system (best case) or cause the system to fail altogether (worst case). So distributed systems need robust mechanisms to ensure that the communication continues or recovers where it left off, even if there is an "arbitrary partition" (i.e. failure) between components in the system.

当你设计和构建大规模 [分布式系统][71]时，为了让系统可以一起流畅工作，进行系统组件与服务之间信息交换是很重要的。但是如我之前所讲的那样，依赖网络的系统遭受着和网络一样的弱点——它们可经不起折腾。网络故障经常发生。当网络故障时，系统中的组件就无法进行通信，系统可能会降级（最好的情况）或者跟着发生故障（最差的情况）。所以分布式系统需要健壮的机制来确保通信持续进行，或者从停止点恢复，即使系统中的组件之间存在“任意分区”（即故障）也能做到。

Imagine, as an example, that you're booking airline tickets. You get a good price, choose your seats, confirm the booking and you've even paid using your credit card. Now you're waiting for your ticket PDF to arrive in your inbox. You wait, and wait, and it never comes. Somewhere, there was a system failure that didn't get handled or recover properly. A booking system will often connect with airline and pricing APIs to handle the actual flight selection, fare summary, date and time of flight etc. All that gets done while you click through the site's booking UI. But it doesn't have to send you the PDF of the tickets until a few minutes later. Instead the UI can simply confirm that your booking is done, and you can expect the tickets in your inbox shortly. That's a reasonable and common user experience for bookings because the moment of paying and the receipt of the tickets does not have to be simultaneous - the two events can be asynchronous. Such a system would need messaging to ensure that the service (server endpoint) that asynchronously generates the PDF gets notified of a confirmed, paid-for booking, and all the details, and then the PDF can be auto-generated and emailed to you. But if that messaging system fails, the email service would never know about your booking and no ticket would get generated.

举个例子，想象你正预定飞机票。你得到了一个好价钱，选座，确认订票，甚至已经用信用卡付完款。现在你正等待票证的 PDF 被发到你的收件箱。你等呀等，却一直等不到它的出现。系统中的某个地方出现了无法处理或不能正确恢复的故障。订票系统通常会联系航空公司，访问价格 API，处理实际的航班选择——费用汇总、航班的日期和时间等。当你点击网站的预定界面时，一切都会办理妥当。但是，它不必在几分钟后将票证的 PDF 发送给你。相反，界面可以简单地对你的预定进行完成确认，你可以期待票证稍后出现在收件箱中。对订票来说，这是合理也很常规用户体验，因为支付和票证收据不必同时进行——这两个事件是异步的。这样的系统需要发送消息，确认生成 PDF 的异步服务（服务端点）收到已确认的预定付款和所有详情的通知，然后 PDF 可以被自动生成并发送给你。但是如果这个消息系统出现故障，邮件服务永远都不会知道你的预定信息，自然也就不会生成票证了。

**Publisher / Subscriber Messaging**

**发布者/订阅者消息传递**

This is a very popular paradigm (model) for messaging. The key concept is that publishers 'publish' a message and a subscriber subscribes to messages. To give greater granularity, messages can belong to a certain "topic" which is like a category. These topics are like dedicated "channels" or pipes, where each pipe exclusives handles messages belonging to a specific topic. Subscribers choose which topic they want to subscribe to and get notified of messages in that topic. The advantage of this system is that the publisher and the subscriber can be completely de-coupled - i.e. they don't need to know about each other. The publisher announces, and the subscriber listens for announcements for topics that it is on the lookout for.

这是一个非常流行的消息范式（模型），关键概念在于：发布者“发布”消息，订阅者订阅消息。为了提供更好的粒度，消息可以属于某个“主题（topic）”，它就像是一个目录。这些主题就像专用的“频道（channel）”或管道一样，每个管道只处理属于特定主题的消息。订阅者选取想要订阅的主题，然后从中获取消息通知。这个系统的优势就是发布者与订阅者之间是完全解耦的——它们不需要了解彼此。发布者播报，订阅者监听其正在寻找的主题的通知。

A server is often the publisher of messages and there are usually several topics (channels) that gets published to. The consumer of a specific topic subscribes to those topics. There is no direct communication between the server (publisher) and the subscriber (could be another server). The only interaction is between publisher and topic, and topic and subscriber.

服务器通常是消息的发布者，它们通常会发布好几种主题（频道）。特定主题的消费者订阅对那些主题进行订阅。服务器（发布者）与订阅者（可以是另一个服务器）之间没有直接的通信。交互只在发布者与主题之间，主题与订阅者之间发生。

The messages in the topic are just data that needs to be communicated, and can take on whatever forms you need. So that gives you four players in Pub/Sub: Publisher, Subscriber, Topics and Messages.

主题中的消息只不过是需要通信的数据，可以呈现为任何你需要的形式。这样一来，你的发布/订阅中的就有四个参与者：发布者、订阅者、主题和消息。

### Better than a database

### 比数据库更好

So why bother with this? Why not just persist all data to a database and consume it directly from there? Well, you need a system to queue up the messages because each message corresponds to a task that needs to be done based on that message's data. So in our ticketing example, if a 100 people make a booking in 35 minutes, putting all that in the database doesn't solve the problem of emailing those 100 people. It just stores a 100 transactions. Pub/Sub systems handle the communication, the task sequencing  _and_  the messages get persisted in a database. So the system can offer useful features like "at least once" delivery (messages won't be lost), persistent storage, ordering of messages, "try-again", "re-playability" of messages etc. Without this system, just storing the messages in the database will not help you ensure that the message gets delivered (consumed) and acted upon to successfully complete the task.

所以为什么要在这上面费心呢？为什么不把所有的数据都持久化到数据库，然后直接从数据库消费呢？你需要一个对消息进行排队的系统，因为每个消息都对应着任务，这个任务需要该消息的数据才能完成。所以在我们订票的例子中，如果三十五分钟内有一百个人订票，将所有这些都放到数据库并不能解决给这一百个人发邮件的问题。它只不过是保存一百个事务。发布/订阅（Pub/Sub ）系统处理通信、对任务进行串行排序，并且将消息持久化到数据库。所以这个系统可以提供很多有用的特性，如“至少一次”交付（消息将不会丢失）、持久化存储、消息排序、“重试”、消息的“重放”，等等。若没有这个系统，只是将消息存储在数据库中并不会帮你确保消息被交付（被消费）并成功完成任务。

Sometimes the same message may get consumed more than once by a subscriber - typically because the network dropped out momentarily, and though the subscriber consumed the message, it didn't let the publisher know. So the publisher will simply re-send it to the subscriber. That's why the guarantee is "at least once" and not "once and only once". This is unavoidable in distributed systems because networks are inherently unreliable. This can raise complications, where the message triggers an operation on the subscriber's side, and that operation could change things in the database (change state in the overall application). What if a single operation gets repeated multiple times, and each time the application's state changes?

有时同一个消息可能会不只一次被一个订阅者消费——通常是因为瞬时网络故障，尽管订阅者消费了消息，但是它没有让发布者知道这一点。所以发布者会把消息再次重发给订阅者，这就是为什么保证“至少一次”而不是“有且只有一次”。多次消费的问题在分布式系统中是不可避免的，因为网络天生就是不可靠的。这会让情况变得更复杂，消息在订阅者一侧触发一个操作，那个操作可以改变数据库内的东西（改变整个应用的状态）。如果单个操作被重复多次，并且每次应用的状态都改变了会怎样？

### Controlling Outcomes - one or many outcomes?

### 控制结果——一个或多个结果？

The solution to this new problem is called idempotency - which is a concept that is important but not intuitive to grasp the first few times you examine it. It is a concept that can appear complex (especially if you read the wikipedia entry), so for the current purpose, here is a user-friendly simplification  [from StackOverflow][72]:

这个新问题的解决方案被称为幂等性（idempotency）——这是一个很重要的概念，但是在你前几次检查它时没那么直观。这个概念看起来可能很复杂（特别是你读维基百科词条的时候），所以就当前的目的而言，这里是 [来自 StackOverflow][72] 的一个更加友好的简化版本：

> _In computing, an idempotent operation is one that has no additional effect if it is called more than once with the same input parameters._

> _在计算机中，幂等性指使用相同的参数多次调用某个操作的结果与调用一次的结果相同。_

So when a subscriber processes a message two or three times, the overall state of the application is exactly what it was after the message was processed the  _first_  time. If, for example, at the end of booking your flight tickets and after you entered your credit card details, you clicked on "Pay Now" three times because the system was slow ... you would not want to pay 3X the ticket price right? You need idempotency to ensure that each click after the  _first_  one doesn't make another purchase and charge your credit card more than once. In contrast, you can post an identical comment on your best friend's newsfeed N number of times. They will all show up as separate comments, and apart from being annoying, that's not actually  _wrong._ Another example is offering "claps" on Medium posts - each clap is meant to increment the number of claps, not be one and only one clap. These latter two examples do not require idempotency, but the payment example does.

所以当订阅者处理一个消息两次或三次时，应用的整体状态与消息 _第一次_ 被处理后的状态完全相同。例如，如果在预定机票快要完成时，你输入了信用卡信息，由于系统真的太慢了，你点击了三次“立即支付”按钮……你总不想支付三倍的机票钱吧？你需要幂等性确保 _第一次_ 点击后的每次点击都不会产生其它的购买行为，不会不止一次地从你的信用卡扣款。相反，你可以给你最要好的朋友的 newsfeed （译者注：[newsfeed](https://en.wikipedia.org/wiki/News_Feed) 是 Facebook 的一个功能）发送 N 次完全相同的评论。它们都将显示为单独的评论，除了令人讨厌之外，它们并没有 _错_。另一个例子是在 Medium 文章上“鼓掌（clap）”——每次鼓掌都表示增加一次鼓掌的数量，而不是仅仅一次（译者注：[Claps](https://help.medium.com/hc/en-us/articles/115011350967-Claps#) 是 Medium 的一个功能，允许你用它来表示对某篇文章的支持，类似于微信朋友圈的点赞）。后面的这两个例子并不要求幂等性，但是支付那个例子是需要的。

There are many flavours of messaging systems, and the choice of system is driven by the use-case to be solved for. Often, people will refer to "event based" architecture which means that the system relies on messages about "events" (like paying for tickets) to process operations (like emailing the ticket). The really commonly talked about services are Apache Kafka, RabbitMQ, Google Cloud Pub/Sub, AWS SNS/SQS.

有很多不同的消息系统，系统的选取取决于要解决的用例。通常，人们会参考“基于事件的”架构，即系统依赖“事件（event）”（比如支付票证）消息处理操作（比如发送票证邮件）。最常讨论的消息服务有 Apache Kafka、RabbitMQ、Google Cloud Pub/Sub 和 AWS SNS/SQS。

## Section 13: Smaller Essentials

<h2 id="section13">第十三节：必备小知识</h2>

### Logging

### 日志

Over time your system will collect a lot of data. Most of this data is extremely useful. It can give you a view of the health of your system, its performance and problems. It can also give you valuable insight into who uses your system, how they use it, how often, which parts get used more or less, and so on.

随着时间的推移，你的系统会收集大量的数据。大多数数据都是极其有用的，让你了解系统的健康情况、性能和问题，给你提供有价值的见解，帮你了解谁在使用你的系统、如何使用的、多久使用一次、哪些部分被使用得更多或更少，等等。

This data is valuable for analytics, performance optimization and product improvement. It is also extremely valuable for debugging, not just when you log to your console during development, but in actually hunting down bugs in your test and production environments. So logs help in traceability and audits too.

这些数据对分析、性能优化和产品改进很有价值。它们还有着巨大的调试价值，不论在开发过程中打印到控制台时，还是在测试和生成环境中找出 bug 时，都非常有用。所以日志也帮助你追溯和审计。

The key trick to remember when logging is to view it as a sequence of consecutive events, which means the data becomes time-series data, and the tools and databases you use should be specifically designed to help work with that kind of data.

记录日志时要记住的要诀就是将它看成一系列连续事件，这意味着数据变成时间序列数据，并且应该使用经过特别设计的工具和数据库来帮你处理此类数据。

### Monitoring

### 监控

This is the next steps after logging. It answers the question of "What do I do with all that logging data?". You monitor and analyze it. You build or use tools and services that parse through that data and present you with dashboards or charts or other ways of making sense of that data in a human-readable way.

这是日志之后的下一步。它回答了“我使用所有的日志数据干啥？”这个问题。你监控并分析它。你可以建立或使用解析此类数据的工具和服务，将数据呈现为仪表盘或图表，或其它人类可读的方式。

By storing the data in a specialized database designed to handle this kind of data (time-series data) you can plug in other tools that are built with that data structure and intention in mind.

通过将数据保存到专为此类数据（时间序列数据）设计的数据库中，你可以插入其它基于该数据结构和意图构建的工具。

### Alerting

### 预警

When you are actively monitoring you should also put a system in place to alert you of significant events. Just like having an alert for stock prices going over a certain ceiling or below a certain threshold, certain metrics that you're watching may warrant an alert being sent if they go too high or too low. Response times (latency) or errors and failures are good ones to set up alerting for if they go above an "acceptable" level.

当你积极监控时，也应该安放另一个可以提醒你重大事件的系统。就像一个股票价格超过某个上限或低于某个阈值时出现的警告一样，如果你正在观察的某个指标过高或过低，也可能会发送警报。响应时间（延迟）或错误和故障都是设置警告的好东西，如果它们超过了“可接受”级别，就发送警告。

The key to good logging and monitoring is to ensure your data is fairly consistent over time, as working with inconsistent data could result in missing fields that then break the analytical tools or reduce the benefits of the logging.

良好的日志和监控的关键就是确保你的数据随时间推移变得非常一致，因为使用不一致的数据可能导致字段缺失，进而破坏分析工具，或者减少日志带来的好处。

## Resources

## 资源

As promised, some useful resources are as follows:

正如所承诺的，一些有用的资源如下：

1.  A fantastic  [Github repo][73]  full of concepts, diagrams and study prep
2.  Tushar Roy's introduction to  [Systems Design][74]
3.  Gaurav Sen's  [YouTube playlist][75]
4.  [SQL vs NoSQL][76]

1. 一个出色的 [Github 仓库][73]，充满了概念、图和预学习资料
2. Tushar Roy 的 [系统设计介绍][74]
3. Gaurav Sen 的 [YouTube 播放列表][75]
4. [SQL vs NoSQL][76]

I hope you enjoyed this long-form guide!

我希望你喜欢这份长篇指南！

You can  [ask me questions on Twitter][77].

你可以[在 Twitter 上向我提问][77]。

************Postscript******** f********or******** f********reeCodeCamp students************

**附言：献给 freeCodeCamp 学员**

I really, truly believe your most precious resources are your time, effort and money. Of these, the single most important resource is time, because the other two can be renewed and recovered. So if you’re going to spend time on something make sure it gets you closer to this goal.

我真的，真的完全相信你最宝贵的资源就是你的时间、精力和金钱。其中，最重要的资源是时间，因为其他两个都可以得到更新或恢复。所以，如果你在某些事情上面花了时间，确保它会让你离目标更进一步。

With that in mind, if you want to invest 3 hours with me to find your shortest path to learning to code (especially if you’re a career changer, like me), then head to  [my course site][78]  and use the form there sign up (not the popup!). If you add the words “I LOVE CODE” to the message, I will know you’re a freeCodeCamp reader, and I will send you a promo code, because just like you,  [freeCodeCamp gave me][79]  a solid start.

考虑到这一点，如果你想在我的身上投入三个小时，找出学习编码的最佳路径（特别是如果你像我一样转了行话），那么就去 [我的课程网站][78] 填写表单注册吧（不是弹出框！）。如果你在消息（Leave us a message *）中添加“I LOVE CODE”，我就会知道你是一个 freeCodeCamp 读者，我将你给发送一个优惠码。因为 [freeCodeCamp][79] 给我了一个良好的开始，就像你一样。

****Also****  if you would like to learn more, check out [episode 53][80]  of the [freeCodeCamp podcast][81], where Quincy (founder of FreeCodeCamp) and I share our experiences as career changers that may help you on your journey. You can also access the podcast on  [iTunes][82],  [Stitcher][83], and  [Spotify][84].

**此外**：如果你想了解更多信息，可以查阅 [freeCodeCamp 播客][81] 的 [第 53 集][80]，我在那里同 Quicy（FreeCodeCamp 的创始人）一起分享了我们转行的经验，这些经验可能会对你有所帮助。你也可以访问 [iTunes][82]、[Stitcher][83] 和 [Spotify][84] 上的播客。

[1]: https://www.freecodecamp.org/news/use-spaced-repetition-with-anki-to-learn-to-code-faster-7c334d448c3c/
[2]: https://www.freecodecamp.org/news/systems-design-for-interviews/#section-1-networks-and-protocols
[3]: https://www.freecodecamp.org/news/systems-design-for-interviews/#section-2-storage-latency-throughput
[4]: https://www.freecodecamp.org/news/systems-design-for-interviews/#section-3-system-availability
[5]: https://www.freecodecamp.org/news/systems-design-for-interviews/#section-4-caching
[6]: https://www.freecodecamp.org/news/systems-design-for-interviews/#section-5-proxies
[7]: https://www.freecodecamp.org/news/systems-design-for-interviews/#section-6-load-balancing
[8]: https://www.freecodecamp.org/news/systems-design-for-interviews/#section-7-consistent-hashing
[9]: https://www.freecodecamp.org/news/systems-design-for-interviews/#section-8-databases
[10]: https://www.freecodecamp.org/news/systems-design-for-interviews/#section-9-leader-election
[11]: https://www.freecodecamp.org/news/systems-design-for-interviews/#section-10-polling-streaming-sockets
[12]: https://www.freecodecamp.org/news/systems-design-for-interviews/#section-11-endpoint-protection
[13]: https://www.freecodecamp.org/news/systems-design-for-interviews/#section-12-messaging-pub-sub
[14]: https://www.freecodecamp.org/news/systems-design-for-interviews/#section-13-smaller-essentials
[15]: https://en.wikipedia.org/wiki/Internet_Protocol
[16]: https://en.wikipedia.org/wiki/IPv4#Packet_structure
[17]: https://en.wikipedia.org/wiki/IP_address
[18]: https://en.wikipedia.org/wiki/Computer_network
[19]: https://en.wikipedia.org/wiki/Transmission_Control_Protocol
[20]: https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol
[21]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages
[22]: https://stackoverflow.com/questions/1371400/how-much-faster-is-the-memory-usually-than-the-disk
[23]: https://wondernetwork.com/pings/London
[24]: https://en.wikipedia.org/wiki/High_availability
[25]: https://en.wikipedia.org/wiki/High_availability
[26]: https://en.wikipedia.org/wiki/High_availability#%22Nines%22
[27]: https://cloud.google.com/maps-platform/terms/sla
[28]: https://www.freecodecamp.org/news/systems-design-for-interviews/#storage-latency-throughput
[29]: https://www.freecodecamp.org/news/systems-design-for-interviews/#storage-latency-throughput
[30]: https://www.cloudflare.com/learning/cdn/what-is-caching/
[31]: https://en.wikipedia.org/wiki/Cache_replacement_policies#Last_in_first_out_(LIFO)_or_First_in_last_out_(FILO)
[32]: https://en.wikipedia.org/wiki/Cache_replacement_policies#First_in_first_out_(FIFO)
[33]: https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)
[34]: https://en.wikipedia.org/wiki/Cache_replacement_policies#Least-frequently_used_(LFU)
[35]: https://www.merriam-webster.com/dictionary/proxy
[36]: https://www.merriam-webster.com/dictionary/proxy
[37]: https://teoriadeisegnali.it/appint/html/altro/bgnet/clientserver.html#figure2
[38]: https://www.quora.com/What-are-the-different-uses-of-proxy-servers
[39]: https://www.freecodecamp.org/news/systems-design-for-interviews/#system-availability
[40]: https://www.freecodecamp.org/news/systems-design-for-interviews/#storage-latency-throughput
[41]: https://www.freecodecamp.org/news/systems-design-for-interviews/#proxies
[42]: https://www.cs.cmu.edu/~adamchik/15-121/lectures/Hashing/hashing.html
[43]: https://www.cs.cmu.edu/~adamchik/15-121/lectures/Hashing/hashing.html
[44]: https://en.wikipedia.org/wiki/Hash_function#Deterministic
[45]: https://en.wikipedia.org/wiki/Hash_function#Uniformity
[46]: https://www.freecodecamp.org/news/systems-design-for-interviews/#load-balancing
[47]: https://www.freecodecamp.org/news/systems-design-for-interviews/#storage-latency-throughput
[48]: https://en.wikipedia.org/wiki/Relational_database
[49]: https://en.wikipedia.org/wiki/Database_schema
[50]: https://web.stanford.edu/class/cs101/table-1-data.html
[51]: https://en.wikipedia.org/wiki/SQL
[52]: https://www.freecodecamp.org/news/systems-design-for-interviews/#storage-latency-throughput
[53]: https://en.wikipedia.org/wiki/PostgreSQL
[54]: https://en.wikipedia.org/wiki/ACID
[55]: https://www.freecodecamp.org/news/systems-design-for-interviews/#section-2-storage-latency-throughput
[56]: https://en.wikipedia.org/wiki/Memcached
[57]: https://en.wikipedia.org/wiki/Amazon_DynamoDB
[58]: https://www.mongodb.com/document-databases
[59]: https://www.freecodecamp.org/news/systems-design-for-interviews/#system-availability
[60]: https://www.freecodecamp.org/news/systems-design-for-interviews/#section-3-system-availability
[61]: https://www.freecodecamp.org/news/systems-design-for-interviews/#section-6-load-balancing
[62]: https://en.wikipedia.org/wiki/Leader_election
[63]: https://en.wikipedia.org/wiki/Consensus_algorithm
[64]: https://etcd.io/
[65]: https://en.wikipedia.org/wiki/Polling_(computer_science)
[66]: https://en.wikipedia.org/wiki/WebSocket
[67]: https://www.freecodecamp.org/news/p/51a1d601-c57e-48cf-8f8d-9bb1c333d64d/repl.it
[68]: https://en.wikipedia.org/wiki/Apache_Kafka
[69]: https://en.wikipedia.org/wiki/Denial-of-service_attack
[70]: https://en.wikipedia.org/wiki/Redis
[71]: https://blog.stackpath.com/distributed-system/
[72]: https://stackoverflow.com/questions/1077412/what-is-an-idempotent-operation
[73]: https://github.com/donnemartin/system-design-primer
[74]: https://www.youtube.com/watch?v=UzLMhqg3_Wc
[75]: https://www.youtube.com/watch?v=quLrc3PbuIw&list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX
[76]: https://www.sitepoint.com/sql-vs-nosql-differences/
[77]: https://twitter.com/ZubinPratap
[78]: https://matchfitmastery.weebly.com/
[79]: https://medium.freecodecamp.org/what-learning-to-code-actually-taught-me-a11fd850af0a
[80]: http://podcast.freecodecamp.org/53-zubin-pratap-from-lawyer-to-developer
[81]: http://podcast.freecodecamp.org/
[82]: https://itunes.apple.com/au/podcast/ep-53-zubin-pratap-from-lawyer-to-developer/id1313660749?i=1000431046274&mt=2
[83]: https://www.stitcher.com/podcast/freecodecamp-podcast/e/59201373?autoplay=true
[84]: https://open.spotify.com/episode/4lG0RGpzriG5vXRMgza05C
