> -   原文地址：[The OSI Model – The 7 Layers of Networking Explained in Plain English](https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/)
> -   原文作者：Chloe Tucker
> -   译者：zhannicholas
> -   校对者：

![白话 OSI 七层网络模型](https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/network-3537401_1920.jpg)

本文讲的是开放网络互连（OSI，Open Systems Interconnection）模型以及网络体系结构中的七个层次。

OSI 模型是一个描述网络功能的概念框架。简单来说，OSI 模型标对计算机系统彼此之间发送信息的方式进行了标准化。

学习网络有点像学习一门语言——有很多标准，又有一些例外。因此，真正理解 OSI 模型不是一组规则非常重要，它是一个用于理解网络如何运作的工具。

一旦你学会了 OSI 模型，你不仅能进一步理解和欣赏这个被我们称之为因特网的宏大实体，还能更轻松流畅地排查网络问题。

向因特网致敬！

## 预备知识

虽然你无需具备任何编程或网络方面的经验就能理解本文，但是你需要：

- 基本熟悉常见的网络术语（下面会解释）
- 好奇事物如何运作的 :)

## 学习目标

你将从本文学到：

1. 什么是 OSI 模型
2. 七层模型中各层的用途
3. 七层模型中各层可能出现的问题
4. TCP/IP 模型与 OSI 模型的区别

## 常见网络术语

这里是一些常见的网络术语，为了充分理解本文，你应该熟悉它们。我会在接下来谈论 OSI 各层的时候使用这些术语。

### 节点

节点（node）是连接到网络的物理电子设备，比如电脑、打印机、路由器等等。如果配置正确的话，节点可以在网络上进行信息的收发。

节点可以彼此相邻，其中的节点 A 可以直接连接到节点 B。节点之间也可以有中间节点，例如节点 A 和节点 B 之间可以放置一个交换机或路由器。

通常，路由器将网络连接到因特网，而交换机运行在网络内部，促进内网通信。[了解更多有关集线器、交换机和路由器的信息][1]。

举个例子：

<figure>
    <img src="https://lh3.googleusercontent.com/Zt1HpeBEFSgcQuwW21zUUq8RIvT5CBXa0xwLdH7fGeBLyUAgQ7oeQSyd358GZOyWdkHUU6gOoe-FxpjpsPcfjm0m1jvK8LGDfJBK16-88GKK41XCIyuxTar7kvtNbqLG7EOeri4t">
    <figcaption><a href="https://learning.oreilly.com/library/view/the-illustrated-network/9780128110287/xhtml/chp001.xhtml">来源</a></figcaption>
</figure>

_对于我们当中那些挑剔的人来说（没错，我发现你了），**主机（host）** 将是你在网络中遇到的另一个术语。我将把它定义为一种需要具有 IP 地址的节点。所有的主机都是节点，但是并不是所有的节点都是主机。如果你不赞同，带着愤怒 Tweet 我吧。_

### 链路

链路（link）连接网络中的节点，它可以是有线的，比如以太网，也可以是无线的，比如 WiFi。

链路要么是点对点的（节点 A 与节点 B 相连），要么是多点的（节点 A 与节点 B 和节点 C 相连）。

我们也可以在谈论信息传输时将其描述成一对一与一对多的关系。

### 协议

协议（protocol）是一组相互商定的规则，允许网络中的两个节点交换数据。

> “协议定义了管理通信过程中语法（可通信的内容）、语义（如何通信）以及同步（何时通信以及通信的速度）的规则。协议可以由硬件、软件或二者的组合实现。协议可以由任何人创建，但是最被广泛采纳的协议都是基于标准的。” —— The Illustrated Network

有线和无线链路都可以有协议。

虽然任何人都可以创建协议，但是基于因特网组织（例如，因特网工程任务组（IETF，Internet Engineering Task Force））发布的标准的协议通常是最被广泛采纳的。

### 网络

网络（network）是一组计算机、打印机或任何其它想要共享数据的设备的通用术语。

网络的类型包括：LAN、HAN、CAN、MAN、WAN、BAN 或 VPN。你觉得我只是随便用 _can_ 一词来押韵吗？才不是呢——这些都是真实的网络类型。从[这里][3]了解更多。

### 拓扑

拓扑（topology）描述的是节点和链路如何在网络配置中组合在一起，通常用图描述。这里是一些常见的网络拓扑类型：

<figure>
    <img src="https://lh5.googleusercontent.com/4oofyzO7Vpjz4oOAi30hEEcN8svH1Yon1SR96RKPyfC8jUeRo05nppE-r2BEXAbRH6BCrG1NPF4mtfUzmurmq5cepLtep_p0dEIytxLQithHzpBkOkzNKa8s5p1XkTtCpM2BjEHe" alt="What is Network Topology? Best Guide to Types & Diagrams - DNSstuff">
    <figcaption><a href="https://www.dnsstuff.com/what-is-network-topology">来源</a> + <a href="https://www.geeksforgeeks.org/types-of-network-topology/">了解更多网络拓扑</a></figcaption>
</figure>

_网络由节点、节点之间的链路和管理节点间数据传输的协议组成。_

无论网络的规模和复杂度如何，你都可以通过学习 OSI 模型和七层网络来理解所有在计算机网络中发生的事情。

# 什么是 OSI 模型？

OSI 模型由七层网络组成。

首先，层（layer）是什么？

<figure>
    <img src="https://lh6.googleusercontent.com/iZIJo7NB8zKmLC0sZW-Z720ZNmLAA7VqJNlb7Tp9w8b6244rrkCHFgkzI7-SIHHLkLbj-X-sr5idmenTE_cjSSaEbbAapDUasOfLhPnDcGY_Gbso2ocOCVffEtQzhuEyfxzshwld" alt="洞穴、龙穴、群山">
    <figcaption><a href="https://pixabay.com/photos/cave-dragon-s-lair-mountains-1766835/">来源</a></figcaption>
</figure>

噢，巢穴（lair）。

不，层——而不是 _巢穴_。这里没有龙。

_层是对网络上的功能和行为进行分类和分组的一种方式。_

在 OSI 模型中，层的组织结构从最具形态和最物理到不太有形，虚拟但更接近最终用户。

每一层都 _抽象_ 低层的功能，直到最高层为止。最终用户是看不到所有其它层的所有细节和内部运作的。

如何记住所有层的名字呢？很简单。

> 请不要把暗号告诉任何人（Please Do Not Tell the Secret Password to Anyone）。

- **Please** | 物理层（Physical Layer）
- **Do** | 数据链路层（Data Link Layer）
- **Not** | 网络层（Network Layer）
- **Tell** （the）| 传输层（Transport Layer）
- **Secret** | 会话层（Session Layer）
- **Password** （to）| 表示层（Presentation Layer）
- **Anyone** | 应用层（Application Layer）


_要牢记：虽然某些技术（比如协议）在逻辑上比起其它层来说可能“属于”某一层，但并非所有的技术都完全契合 OSI 模型中的单个层。例如，以太网（Ethernet）、802.11（Wifi）和地址解析协议（ARP，Address Resolution Protocol）程序在不只一层上工作。_

OSI 只是一个模型，一个工具，并不是一组规则。

## OSI 第一层

第一层是 **物理层**。第一层中有很多技术——从物理网络设备、布线到电缆如何连接到设备之间的一切。另外，如果我们不需要电缆，那么信号的类型和传输方式是什么（例如，无线宽带）。

我没有列出第一层中的各种技术，而是为这些技术创建了一个更大的分类。我鼓励读者进一步学习每一种分类：

- **节点（设备）和网络硬件。** 设备包括集线器、中继器、路由器、计算机、打印机，等等。这些设备内的硬件包括天线、放大器、网卡（NIC，Network Interface Card），等等。
- **设备接口机制。** 电缆如何连接到某个设备，以及连接到设备上的哪个地方（电缆连接器和设备插座）？连接器的大小和形状如何，它有多少个引脚？决定引脚处于活动状态还是非活动状态的东西是什么？
- **功能和程序逻辑。** 连接器中每个引脚的功能是什么——发送还是接收？决定事件顺序，以便节点能够开始与第二层上的另一个节点通信的程序逻辑是什么？
- **电缆协议和规范。** 以太网（CAT）、USB、[数字用户线（DSL，Digital Subcriber Line）][7]等。规范包括最大电缆长度、调制技术、无线电规范、线路编码和位同步（下文还有更多）。
- **电缆类型。** 选择有屏蔽或非屏蔽双绞线、非双绞线、同轴电缆等。[从这里了解更多电缆类型][8]。
- **信号类型。** 基带一次一个比特流，就像铁路一样——只支持单向。宽带同时包含多个比特流，就像双向高速公路一样。
- **信号传输方法（可能是有线的或无线的）。** 选择包括电（以太网）、光（光纤网络、光纤）、无线电波（802.11 WiFi，a/b/g/n/ac/ax 变种或蓝牙）。如果是无线的话，则要考虑频率：2.5 GHz 还是 5 GHz。如果是有线或以太网的话，则还要考虑网络标准，例如 100BASE-T 和相关标准。

第一层的数据单元是比特（bit）。

比特是可传输数字信息的最小单元。比特是二进制的，要么为 0 要么为 1。字节（byte）由八个比特组成，用于表示单个字符，比如字母、数字或符号。

根据硬件设备支持的数据速率（传输速率，每秒或每毫秒的比特数量），比特被发送到硬件设备或从设备发出。这个过程是同步的，从而保持单位时间内发送和接收比特的数量相等（这被称为比特同步）。比特的传输方式由信号的传输方式决定。

节点可以发送比特、接收比特，或者收发兼顾。如果节点只能收或只能发，那么该节点采用的就是单工模式。如果节点既可以收又可以发，那么该节点采用的就是双工模式。如果一个节点可以同时进行收发操作，那么它就是全双工的，否则就是半双工的。

最初的以太网是半双工的。如果采用了正确的设备，现在也可以选择全双工的以太网。

### 如何排查第一层中的问题

这里是第一层中要当心的一些问题：

- 电缆失效，例如电线损坏或连接器损坏
- 网络硬件设备故障，例如电路损坏
- 东西正被拔出（我们都遇到过……）

如果第一层出了问题，第一层以上的任何东西都不会正常工作。

### TL;DR

_第一层包含的是基础设施，它让网络通信变成可能。_

_它定义了用于激活、维护和停用网络设备之间的物理连接的电气、机械、程序和功能规范。_——[来源][9]

有趣的事实：深海通信电缆在全世界传输数据。这张地图会让你大开眼界：[https://www.submarinecablemap.com/][10]。

因为你已经坚持到这儿了，所以送你一只考拉：

<figure>
    <img src="https://lh4.googleusercontent.com/01fHh4ca3BJwiXqKBUpxizPK4BSO__5sk5v5gWWYjI8pP3CqQBkHVZDpzN043d1pwmwelUugTEePT58rMMV_PxBQY5IfYVxYhz8GKfDT1eVJD6bKdgl0bdzotLO-AhtAfZCnZ1ua" alt="考拉、自然、动物、爪子、澳大利亚、幼仔">
    <figcaption><a href="https://pixabay.com/photos/koala-nature-animals-paws-630117/">来源</a></figcaption>
</figure>

## OSI 第二层

第二层是 **数据链路层**。它定义了数据的传输格式、可以在节点间流动的数据量大小、数据流动可以持续的时长，以及在流中检测到错误时应采取的措施。

使用更加正式的技术术语描述如下：

- **线路规划。** 谁应该交流多久？节点传输信息的时间应该持续多久？
- **流量控制。** 应该传输的数据量是多少？
- **错误控制-检测和校正。** 从电尖峰脉冲到卑鄙的连接器，所有的数据传输方法都有可能出错。一旦第二层的技术告知网络管理员有关第二层或第一层的问题，系统管理员就能为后续几层纠正那些错误。第二层主要关心的是错误检测，而不是错误校正。（[来源][12]）

第二层内有两个截然不同的子层：

- **介质访问控制（MAC，Media Access Control）：** MAC 子层负责分配硬件标识号，这个标识号被称为 MAC 地址，它能够唯一标识网络上的各个设备。两个设备不应该有相同的 MAC 地址。MAC 地址在硬件制造时就分配好了，位于网卡当中，大多数网络都会自动对其进行识别。交换机会跟踪网络上所有的 MAC 地址。在[这里][13]和[这里][14]了解更多有关 MAC 地址的信息，在[这里][15]进一步了解网络交换机。
- **逻辑链路控制（LLC，Logical Link Control）:** LLC 子层处理帧的寻址以及流量控制。速度取决于两个节点之间的链路，例如以太网或 Wifi。

第二层的数据单元是 _帧（frame）。_

每一帧都包括一个帧头、主体和一个帧尾：

- 帧头：通常包括源节点和目的节点的 MAC 地址。
- 主体：由要传输的比特组成。
- 帧尾：包括错误检测信息。当检测到错误时，根据实现或网络的配置或协议，帧可能被丢弃，或者错误会被报告给上面的层，用于进一步错误校正。例如，错误检测机制的有循环冗余校验（CRC，Cyclic Redundancy Check）和帧校验序列（FCS，Frame Check Sequence）。[从这里了解更多有关错误检测技术的信息][16]。

<figure>
    <img src="https://lh4.googleusercontent.com/CJpYzIm5a1uYujH_a6wC2Rc09H2TiWiNHdV9XByqbGPRod4lYwYoqrwUa8qJGAO3cjuqZ8GER7j7Xzberj4LBBRojj3exVfGcZPGVdt_9PZrAYsFmaThz5zhL1qeHL5wYv96o-xh">
    <figcaption><a href="https://learning.oreilly.com/library/view/the-illustrated-network/9780128110287/xhtml/chp001.xhtml">来源</a></figcaption>
</figure>

帧的大小通常有一个最大值，这个值被称为最大传输单元（MTU，Maximum Transmission Unit）。巨型帧的大小超过了标准的 MTU，[从这里了解更多有关巨型帧的信息][18]。

### 如何排查 OSI 第二层中的问题

这里是第二层中要当心的一些问题：

- 可能在第一层上发生的所有问题
- 两个节点间的连接（会话）不成功
- 成功建立但又间歇性失败的会话
- 帧冲突

### TL;DR

_数据链路层允许局域网内的各节点彼此相互通信。这一层建立了线路规划、流量控制和错误控制的基础。_

## OSI 第三层

第三层是 **网络层。** 就是在这里，我们通过路由器在网络间或跨网发送信息。不仅仅是节点到节点的通信，我们现在还可以进行网络到网络的通信了。

路由器是第三层的主力——它们是在第三层中必不可少。路由器跨越多个网络移动数据包。

路由器不仅通过连接到网络服务提供商（ISPs，Internet Service Providers）提供因特网访问，还跟踪着所在网络中的一切（记住交换机跟踪的是一个网络中所有的 MAC 地址），它所连接的其它网络，以及在这些网络中路由数据包的不同路径。

路由器将所有的地址和路由信息都保存在路由表中。

这里是一个简单的路由表示例：

<figure>
    <img src="https://lh3.googleusercontent.com/g3LrFVHdbqIEJj-Mp-oSREXrT30dTdPW-4doqmdT5qNHImZTzFOj-kdgQRmuUWPR1RUgDC1QNiCxDNiqXSf30IRfl0C33Oq166fR1ygkeco1nRrFY-6VclAT3BPWSx1Ddc8_J8Vo">
    <figcaption><a href="https://www.geeksforgeeks.org/routing-tables-in-computer-network/">图片来源 + 从这里了解更多有关路由表的信息</a></figcaption>
</figure>

第三层的数据单元是 _数据包（data packet）_。通常，每个数据包都包含一个帧 **加上** 一个 IP 地址信息的包装。换句话说，帧被第三层的地址信息封装了。

数据包中传输的数据有时也被称为 _负载（payload）_。每个包都拥有到达目的地所需的一切，但是它能不能成功抵达就是另外一回事儿了。

第三层上的传输是无连接的、尽力而为的——除了将流量发往它应该去的地方，它们不会做任何事。更多与数据传输有关的协议在第四层。

节点一旦连接到因特网，它就会被赋予一个因特网协议（IP，Internet Protocol）地址，它看起来要么像 172.16.254.4（IPv4 地址），要么像 2001:0db8:85a3:0000:0000:8a2e:0370:7334（IPv6 地址）。路由器在它们的路由表中使用 IP 地址。

IP 地址通过地址解析协议（ARP，Address Resolution Protocol）与物理节点的 MAC 地址相关联，ARP 用节点对应的 IP 地址解析 MAC 地址。

ARP 通常被认为是第二层的一部分，但是由于 IP 地址在第三层以下都不存在，所以 ARP 也是第三层的一部分。

### 如何排查第三层中的问题

这里是第三层中要当心的一些问题：

- 所有可能在之前各层中出现的问题 :)
- 路由器或其它节点故障或无功能
- IP 地址配置不正确

很多第三层问题的答案都要求使用像 _ping_、_trace_、_show ip route_ 或 _show ip protocols_ 这样的命令行工具。在[这里][20]了解更多与有关一至三层问题排查的信息。

### TL;DR

_第三层允许节点连接到因特网并跨越不同网络发送数据。_

## OSI 第四层

第四层是 **传输层**。在这里，我们会深入探讨了两个节点之间连接的具体细节，以及信息是如何在它们之间进行传输的。第四层建立在第二层的功能之上——线路规划、流量控制和错误控制。

这一层也负责数据包的分段，或者说数据包如何被拆分成小片并发往整个网络。

不像上一层，第四层也理解整个消息，而不只是每个独立的数据包的内容。根据对整个消息的理解，第四层不再一次性发送所有数据包，从而管理网络拥塞。

第四层的数据单元有好几个不同的名字，对于 TCP 而言，数据单元是数据包。对于 UDP 而言，包被称为数据报（datagram）。为了简化，我将只使用数据包这个术语。

第四层中最有名的两个协议是传输控制协议（TCP，Transmission Control Protocol）和用户数据报协议（UDP，User Datagram Protocol）。

TCP 是一个面向连接的协议，优先保证的是数据的质量而不是速度。

TCP 显式地与目的节点建立连接，并要求在数据传输时进行源节点与目的节点之间的握手操作。握手能够确认数据已经被接收。如果目的节点没有收到所有的数据，TCP 就会要求进行重传。

TCP 也会确保数据包以正确的顺序交付或者重组。[从这里了解更多有关 TCP 的信息][21]。

UDP 是一个无连接的协议，优先保证速度而不是数据的质量。UDP 不要求进行握手，这也正是它被称为无连接的原因。

因为 UDP 不必等待确认，所以它可以以更快的速度发送数据，但并非所有的数据都能成功传输，我们也不会知道哪些数据传输失败了。

如果信息被拆分成多个数据报，除非这些数据报都包含一个序列号，否则 UDP 无法确保以正确的顺序重组数据包。[从这里了解更多有关 UDP 的信息][22]。

TCP 和 UDP 都将数据发往网络设备上的特定端口，这些网络设备都有自己的 IP 地址。IP 地址和端口号的组合被称为套接字（socket）。

[从这里了解更多有关套接字的信息][23]。

从[这里][24]和[这里][25]了解 TCP 与 UDP 这两个协议之间的更多差异和相似之处。

### 如何排查 OSI 第四层中的问题

这里是第四层中要当心的一些问题：

- 所有可能在之前各层中出现的问题 :)
- 被封锁的端口——检查你的访问控制列表（ACL，Access Control List）和防火墙
- 服务质量（QoS，Quality of Service）设置。QoS 是路由器/交换机的一个功能，可以对流量进行优先级排序，并且它们真的可以把事情搞砸。[从这里学习更多有关 Qos 的信息][26]。

### TL;DR

_传输层通过将消息分割成多个数据包提供端到端的消息传输，支持面向连接的和无连接的通信。_

## OSI 第五层

第五层是 **会话层**，负责建立、维持和终止会话。

会话建立在两个网络应用之间，是双方商定好的连接。注意，我们没有说两个节点，我们已经离开节点了，它们是第四层中的东西。

开玩笑的，我们还是有节点的，但是第五层不需要保留节点的概念，因为它是之前各层抽象出来的（关心）的概念。

所以会话是一个建立在两个特定的用户应用之间的连接，其中有一些重要的概念需要考虑：

- 客户端与服务器模型：请求信息的应用被称为客户端，拥有被请求信息的应用被称为服务器。
- 请求与响应模型：在建立会话的过程和会话期间，不断有来回的信息请求，还有包含被请求信息的响应或者是“嘿，我没有你要的东西”。

会话持续的时间可以非常短，也可以非常长，有时会话也可能会失败。

根据所采用的协议，会话可能会启动各种故障解决程序。根据所使用的应用程序/协议/硬件，会话可能支持单工，半双工或全双工模式。

第五层中协议的例子有网络基本输入输出系统（NetBIOS，Network Basic Input Output System）和远程过程调用协议（RPC，Remote Procedure Call Protocol）等等。

从这里往上（第五层及以上），网络关注的是与用户应用程序建立连接以及如何向用户展示数据。

### 如何诊断 OSI 第五层中的问题

这里是第五层中需要当心的一些问题：

- 服务器不可用
- 服务器未被正确地配置，例如 Apache 或 PHP 配置
- 会话故障——断连、超时，等等

### TL;DR

_会话层负责初始化、维持并终止两个用户应用程序之间的连接。它响应来自表示层的请求，并向传输层发起请求。_

## OSI 第六层

第六层是 **表示层**，负责数据的格式，比如字符编码与转换，以及数据加密。

托管用户应用程序的操作系统通常包含第六层中的程序，这个功能并不总是被网络协议实现。

第六层确保第七层中的用户程序可以成功地消费数据，当然还有最终数据的展示。

有三种数据格式化方法需要注意：

- 美国信息交换标准代码（ASCII，American Standard Code for Information Interchange）：这个七位编码技术是字符编码中使用最广泛的标准。ASCII 的一个超集是 ISO-885901，它提供了西欧语言所必需的大多数字符。
- 扩充的二进制编码的十进制交换码（EBDCIC，Extended Binary-Coded Decimal Interchange Code）：由 IBM 设计，用于大型机。此编码与其他字符编码方法不兼容。
- 万国码（Unicode）：可以使用 32 位，16 位或 8 位字符的字符编码，它尝试容纳所有已知的字母。

从[这里][27]、[这里][28]还有[这里][29]了解有关字符编码的更多信息。

加密：SSL 或 TLS 加密协议位于第六层。这些加密协议为网络上的节点提供身份认证和数据加密功能，帮助确保传输的数据抵御恶意用户的攻击。TLS 是 SSL 继任者。

### 如何诊断 OSI 第六层中的问题

这里是第六层中需要当心的一些问题：

- 驱动程序不存在或损坏
- 操作系统用户访问级别不正确

### TL;DR

_表示层负责格式化与加密数据。_

## OSI 第七层

第七层是 **应用层**。

顾名思义，这一层最终负责支持用户程序使用的服务。应用程序包括安装在操作系统中的软件程序，比如因特网浏览器（例如 Firefox）或文字处理程序（例如 Microsoft Word）。

应用程序可以在后台执行专门的网络功能，也可以要求第七层中专门的服务。

例如专门创建电子邮件程序，它在网络上运行并利用第七层中网络功能（比如电子邮件协议）。

应用程序也可以控制用户交互，比如安全检查（例如 MFA）、识别两名参与者的身份、初始化信息交换等。

这一层中运行的协议包括文件传输协议（FTP，File Transfer Protocol）、安全壳协议（SSH，Secure Shell）、简单邮件传输协议（SMTP，Simple Mail Transfer Protocol）、因特网消息访问协议（IMAP，Internet Message Access Protocol）、域名服务（DNS，Domain Name Service）和超文本传输协议（HTTP，Hypertext Transfer Protocol）。

虽然这些协议中的每一个都服务于不同的功能，运行的方式也各不相同，但从较高的层次看，它们都促进了信息的交流。

### 如何诊断 OSI 第七层中的协议

这里是第七层中需要当心的一些问题：

- 所有之前各层中的问题
- 软件应用程序配置不正确
- 用户操作失误（我们都遇到过……）

### TL;DR

_应用层拥有用户应用程序运行所需的服务和功能，不包括应用程序本身。_

# 结论

我们第一层中出现的小考拉已经长大了。

![](https://lh5.googleusercontent.com/HwLDfHDJ_Y5Dl8NoUHL076tPp0JhqbM-kl666fA7IXRnkF_vJt1nL-P1OdKdqT5TEGG73yH7C2JWK3nEGoceQRHJUviopkITLR98P_ntOm5Rtn8dzGlSF0K9BsxXP1MRKKzcgqUh)

学习检查——你能给考拉化妆吗？

没有考拉？

好吧——那就回答这些问题。我保证，这是第二好的选择：

- 什么是 OSI 模型？
- 每一层分别是什么？
- 如何使用这些信息去排查网络问题？

恭喜！你离理解我们称之为因特网的这个宏大实体又进了一步。

## 学习资源

很多非常聪明的人已经写了有关 OSI 模型或特定层的整本书。我鼓励读者阅读 O'Reilly 出版的有关该主题的书，或者网络工程方面的书籍。

这里是我撰写本文时用到的一些资源：

-   The Illustrated Network, 2nd Edition
-   Protocol Data Unit (PDU):  [https://www.geeksforgeeks.org/difference-between-segments-packets-and-frames/][31]
-   Troubleshooting Along the OSI Model:  [https://www.pearsonitcertification.com/articles/article.aspx?p=1730891][32]
-   The OSI Model Demystified:  [https://www.youtube.com/watch?v=HEEnLZV2wGI][33]
-   OSI Model for Dummies:  [https://www.dummies.com/programming/networking/layers-in-the-osi-model-of-a-computer-network/][34]

### 关于我

Chloe Tucker 是位于俄勒冈州波特兰的一名艺术家和计算机科学爱好者。她以前是一名教育工作者，一直在寻找学与教，技术与艺术的交集。你可以通过 Twitter [@_chloetucker][35] 与她联系，还可以访问她的网站 [chloe.dev][36]。

[1]: https://www.themillergroup.com/differences-hubs-switches-routers/
[2]: https://learning.oreilly.com/library/view/the-illustrated-network/9780128110287/xhtml/chp001.xhtml
[3]: https://www.c1c.net/blog/network-101/
[4]: https://www.dnsstuff.com/what-is-network-topology
[5]: https://www.geeksforgeeks.org/types-of-network-topology/
[6]: https://pixabay.com/photos/cave-dragon-s-lair-mountains-1766835/
[7]: https://www.centurylink.com/home/help/internet/what-is-DSL.html
[8]: https://www.computernetworkingnotes.com/networking-tutorials/network-cable-types-and-specifications.html
[9]: https://learning.oreilly.com/videos/wireshark-for-packet/9781839212352/9781839212352-video3_11
[10]: https://www.submarinecablemap.com/
[11]: https://pixabay.com/photos/koala-nature-animals-paws-630117/
[12]: https://learning.oreilly.com/videos/wireshark-for-packet/9781839212352/9781839212352-video3_10
[13]: https://www.pcmag.com/encyclopedia/term/mac-address
[14]: https://people.richland.edu/dkirby/141macaddress.htm
[15]: https://www.networkworld.com/article/3584876/what-is-a-network-switch-and-how-does-it-work.html
[16]: http://www.msc.uky.edu/ken/cs471/notes/chap5.htm
[17]: https://learning.oreilly.com/library/view/the-illustrated-network/9780128110287/xhtml/chp001.xhtml
[18]: https://kb.netgear.com/25091/Guidance-on-the-use-of-jumbo-frames
[19]: https://www.geeksforgeeks.org/routing-tables-in-computer-network/
[20]: https://www.pearsonitcertification.com/articles/article.aspx?p=1730891
[21]: https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/
[22]: https://www.cloudflare.com/learning/ddos/glossary/user-datagram-protocol-udp/
[23]: https://www.dummies.com/programming/networking/cisco/network-basics-tcpudp-socket-and-port-overview/
[24]: https://www.geeksforgeeks.org/differences-between-tcp-and-udp/
[25]: https://www.pearsonitcertification.com/articles/article.aspx?p=2873377
[26]: https://www.pcworld.com/article/2689995/quality-of-service-explained-how-routers-with-strong-qos-make-better-home-networks.html
[27]: https://www.ibm.com/support/knowledgecenter/ssw_ibm_i_73/nls/rbagsunicodeandprior.htm
[28]: https://www.smashingmagazine.com/2012/06/all-about-unicode-utf8-character-sets/
[29]: https://kunststube.net/encoding/
[30]: https://jaimelightfoot.com/blog/osi-model/
[31]: https://www.geeksforgeeks.org/difference-between-segments-packets-and-frames/
[32]: https://www.pearsonitcertification.com/articles/article.aspx?p=1730891
[33]: https://www.youtube.com/watch?v=HEEnLZV2wGI
[34]: https://www.dummies.com/programming/networking/layers-in-the-osi-model-of-a-computer-network/
[35]: https://twitter.com/_chloetucker
[36]: https://chloe.dev/
