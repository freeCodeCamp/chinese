> -   原文地址：[The OSI Model – The 7 Layers of Networking Explained in Plain English](https://www.freecodecamp.org/news/osi-model-networking-layers-explained-in-plain-english/)
> -   原文作者：Chloe Tucker
> -   译者：zhannicholas
> -   校对者：

![The OSI Model – The 7 Layers of Networking Explained in Plain English](https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/network-3537401_1920.jpg)

![白话 OSI 七层网络模型](https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/network-3537401_1920.jpg)

This article explains the Open Systems Interconnection (OSI) model and the 7 layers of networking, in plain English.

本文讲的是开放网络互连（OSI，Open Systems Interconnection）模型以及网络体系结构中的七个层次。

The OSI model is a conceptual framework that is used to describe how a network functions. In plain English, the OSI model helped standardize the way computer systems send information to each other.

OSI 模型是一个描述网络功能的概念框架。简单来说，OSI 模型标对计算机系统彼此之间发送信息的方式进行了标准化。

Learning networking is a bit like learning a language - there are lots of standards and then some exceptions. Therefore, it’s important to really understand that the OSI model is not a set of rules. It is a tool for understanding how networks function.

学习网络有点像学习一门语言——有很多标准，又有一些例外。因此，真正理解 OSI 模型不是一组规则非常重要，它是一个用于理解网络如何运作的工具。

Once you learn the OSI model, you will be able to further understand and appreciate this glorious entity we call the Internet, as well as be able to troubleshoot networking issues with greater fluency and ease.

一旦你学会了 OSI 模型，你不仅能进一步理解和欣赏这个被我们称之为因特网的宏大实体，还能更轻松流畅地排查网络问题。

All hail the Internet!

向因特网致敬！

## Prerequisites

## 预备知识

You don’t need any prior programming or networking experience to understand this article. However, you will need:

-   Basic familiarity with common networking terms (explained below)
-   A curiosity about how things work :)

虽然你无需具备任何编程或网络方面的经验就能理解本文，但是你需要：

- 基本熟悉常见的网络术语（下面会解释）
- 好奇事物如何运作的 :)

## Learning Objectives

## 学习目标

Over the course of this article, you will learn:

1.  What the OSI model is
2.  The purpose of each of the 7 layers
3.  The problems that can happen at each of the 7 layers
4.  The difference between TCP/IP model and the OSI model

你将从本文学到：

1. 什么是 OSI 模型
2. 七层模型中各层的用途
3. 七层模型中各层可能出现的问题
4. TCP/IP 模型与 OSI 模型的区别

## Common Networking Terms

## 常见网络术语

Here are some common networking terms that you should be familiar with to get the most out of this article. I’ll use these terms when I talk about OSI layers next.

这里是一些常见的网络术语，为了充分理解本文，你应该熟悉它们。我会在接下来谈论 OSI 各层的时候使用这些术语。

### Nodes

### 节点

A node is a physical electronic device hooked up to a network, for example a computer, printer, router, and so on. If set up properly, a node is capable of sending and/or receiving information over a network.

节点（node）是连接到网络的物理电子设备，比如电脑、打印机、路由器等等。如果配置正确的话，节点可以在网络上进行信息的收发。

Nodes may be set up adjacent to one other, wherein Node A can connect directly to Node B, or there may be an intermediate node, like a switch or a router, set up between Node A and Node B.

节点可以彼此相邻，其中的节点 A 可以直接连接到节点 B。节点之间也可以有中间节点，例如节点 A 和节点 B 之间可以放置一个交换机或路由器。

Typically, routers connect networks to the Internet and switches operate within a network to facilitate intra-network communication.  [Learn more about hub vs. switch vs. router.][1]

通常，路由器将网络连接到因特网，而交换机运行在网络内部，促进内网通信。[了解更多有关集线器、交换机和路由器的信息][1]。

Here's an example:

举个例子：

![](https://lh3.googleusercontent.com/Zt1HpeBEFSgcQuwW21zUUq8RIvT5CBXa0xwLdH7fGeBLyUAgQ7oeQSyd358GZOyWdkHUU6gOoe-FxpjpsPcfjm0m1jvK8LGDfJBK16-88GKK41XCIyuxTar7kvtNbqLG7EOeri4t)

[Source][2]

<figure>
    <img src="https://lh3.googleusercontent.com/Zt1HpeBEFSgcQuwW21zUUq8RIvT5CBXa0xwLdH7fGeBLyUAgQ7oeQSyd358GZOyWdkHUU6gOoe-FxpjpsPcfjm0m1jvK8LGDfJBK16-88GKK41XCIyuxTar7kvtNbqLG7EOeri4t">
    <figcaption><a href="https://learning.oreilly.com/library/view/the-illustrated-network/9780128110287/xhtml/chp001.xhtml">来源</a></figcaption>
</figure>

_For the nitpicky among us (yep, I see you),  **host**  is another term that you will encounter in networking. I will define a host as a type of node that requires an IP address. All hosts are nodes, but not all nodes are hosts. Please Tweet angrily at me if you disagree._

_对于我们当中那些挑剔的人来说（没错，我发现你了），**主机（host）** 将是你在网络中遇到的另一个术语。我将把它定义为一种需要具有 IP 地址的节点。所有的主机都是节点，但是并不是所有的节点都是主机。如果你不赞同，带着愤怒 Tweet 我吧。_

### Links

### 链路

Links connect nodes on a network. Links can be wired, like Ethernet, or cable-free, like WiFi.

链路（link）连接网络中的节点，它可以是有线的，比如以太网，也可以是无线的，比如 WiFi。

Links to can either be point-to-point, where Node A is connected to Node B, or multipoint, where Node A is connected to Node B and Node C.

链路要么是点对点的（节点 A 与节点 B 相连），要么是多点的（节点 A 与节点 B 和节点 C 相连）。

When we’re talking about information being transmitted, this may also be described as a one-to-one vs. a one-to-many relationship.

我们也可以在谈论信息传输时将其描述成一对一与一对多的关系。

### Protocol

### 协议

A protocol is a mutually agreed upon set of rules that allows two nodes on a network to exchange data.

协议（protocol）是一组相互商定的规则，允许网络中的两个节点交换数据。

> “A protocol defines the rules governing the syntax (what can be communicated), semantics (how it can be communicated), and synchronization (when and at what speed it can be communicated) of the communications procedure. Protocols can be implemented on hardware, software, or a combination of both. Protocols can be created by anyone, but the most widely adopted protocols are based on standards.” - The Illustrated Network.

> “协议定义了管理通信过程中语法（可通信的内容）、语义（如何通信）以及同步（何时通信以及通信的速度）的规则。协议可以由硬件、软件或二者的组合实现。协议可以由任何人创建，但是最被广泛采纳的协议都是基于标准的。” —— The Illustrated Network

Both wired and cable-free links can have protocols.

有线和无线链路都可以有协议。

While anyone can create a protocol, the most widely adopted protocols are often based on standards published by Internet organizations such as the Internet Engineering Task Force (IETF).

虽然任何人都可以创建协议，但是基于因特网组织（例如，因特网工程任务组（IETF，Internet Engineering Task Force））发布的标准的协议通常是最被广泛采纳的。

### Networks

### 网络

A network is a general term for a group of computers, printers, or any other device that wants to share data.

网络（network）是一组计算机、打印机或任何其它想要共享数据的设备的通用术语。

Network types include LAN, HAN, CAN, MAN, WAN, BAN, or VPN. Think I’m just randomly rhyming things with the word  _can_? I  _can_’t say I am - these are all real network types. Learn more  [here][3].

网络的类型包括：LAN、HAN、CAN、MAN、WAN、BAN 或 VPN。你觉得我只是随便用 _can_ 一词来押韵吗？才不是呢——这些都是真实的网络类型。从[这里][3]了解更多。

### Topology

### 拓扑

Topology describes how nodes and links fit together in a network configuration, often depicted in a diagram. Here are some common network topology types:

拓扑（topology）描述的是节点和链路如何在网络配置中组合在一起，通常用图描述。这里是一些常见的网络拓扑类型：

![What is Network Topology? Best Guide to Types & Diagrams - DNSstuff](https://lh5.googleusercontent.com/4oofyzO7Vpjz4oOAi30hEEcN8svH1Yon1SR96RKPyfC8jUeRo05nppE-r2BEXAbRH6BCrG1NPF4mtfUzmurmq5cepLtep_p0dEIytxLQithHzpBkOkzNKa8s5p1XkTtCpM2BjEHe)

[Source][4]  \+ l[earn more about network topologies here][5]

<figure>
    <img src="https://lh5.googleusercontent.com/4oofyzO7Vpjz4oOAi30hEEcN8svH1Yon1SR96RKPyfC8jUeRo05nppE-r2BEXAbRH6BCrG1NPF4mtfUzmurmq5cepLtep_p0dEIytxLQithHzpBkOkzNKa8s5p1XkTtCpM2BjEHe" alt="What is Network Topology? Best Guide to Types & Diagrams - DNSstuff">
    <figcaption><a href="https://www.dnsstuff.com/what-is-network-topology">来源</a> + <a href="https://www.geeksforgeeks.org/types-of-network-topology/">了解更多网络拓扑</a></figcaption>
</figure>

_A network consists of nodes, links between nodes, and protocols that govern data transmission between nodes._

_网络由节点、节点之间的链路和管理节点间数据传输的协议组成。_

At whatever scale and complexity networks get to, you will understand what’s happening in all computer networks by learning the OSI model and 7 layers of networking.

无论网络的规模和复杂度如何，你都可以通过学习 OSI 模型和七层网络来理解所有在计算机网络中发生的事情。

# What is the OSI Model?

# 什么是 OSI 模型？

The OSI model consists of 7 layers of networking.

OSI 模型由七层网络组成。

First, what’s a layer?

首先，层（layer）是什么？

![Cave, Dragon'S Lair, Mountains](https://lh6.googleusercontent.com/iZIJo7NB8zKmLC0sZW-Z720ZNmLAA7VqJNlb7Tp9w8b6244rrkCHFgkzI7-SIHHLkLbj-X-sr5idmenTE_cjSSaEbbAapDUasOfLhPnDcGY_Gbso2ocOCVffEtQzhuEyfxzshwld)

[Source][6]

<figure>
    <img src="https://lh6.googleusercontent.com/iZIJo7NB8zKmLC0sZW-Z720ZNmLAA7VqJNlb7Tp9w8b6244rrkCHFgkzI7-SIHHLkLbj-X-sr5idmenTE_cjSSaEbbAapDUasOfLhPnDcGY_Gbso2ocOCVffEtQzhuEyfxzshwld" alt="洞穴、龙穴、群山">
    <figcaption><a href="https://pixabay.com/photos/cave-dragon-s-lair-mountains-1766835/">来源</a></figcaption>
</figure>

Ooo, lair.

噢，巢穴（lair）。

No, a layer - not a  _lair_. Here there are no dragons.

不，层——而不是 _巢穴_。这里没有龙。

_A layer is a way of categorizing and grouping functionality and behavior on and of a network._

_层是对网络上的功能和行为进行分类和分组的一种方式。_

In the OSI model, layers are organized from the most tangible and most physical, to less tangible and less physical but closer to the end user.

在 OSI 模型中，层的组织结构从最具形态和最物理到不太有形，虚拟但更接近最终用户。

Each layer  _abstracts_  lower level functionality away until by the time you get to the highest layer. All the details and inner workings of all the other layers are hidden from the end user.

每一层都 _抽象_ 低层的功能，直到最高层为止。最终用户是看不到所有其它层的所有细节和内部运作的。

How to remember all the names of the layers? Easy.

-   **Please**  | Physical Layer
-   **Do**  | Data Link Layer
-   **Not**  | Network Layer
-   **Tell**  (the)  | Transport Layer
-   **Secret**  | Session Layer
-   **Password**  (to)  | Presentation Layer
-   **Anyone**  | Application Layer

如何记住所有层的名字呢？很简单。

> 请不要把暗号告诉任何人（Please Do Not Tell the Secret Password to Anyone）。

- **Please** | 物理层（Physical Layer）
- **Do** | 数据链路层（Data Link Layer）
- **Not** | 网络层（Network Layer）
- **Tell** （the）| 传输层（Transport Layer）
- **Secret** | 会话层（Session Layer）
- **Password** （to）| 表示层（Presentation Layer）
- **Anyone** | 应用层（Application Layer）


_Keep in mind that while certain technologies, like protocols, may logically “belong to” one layer more than another, not all technologies fit neatly into a single layer in the OSI model. For example, Ethernet, 802.11 (Wifi) and the Address Resolution Protocol (ARP) procedure operate on >1 layer._

_要牢记：虽然某些技术（比如协议）在逻辑上比起其它层来说可能“属于”某一层，但并非所有的技术都完全契合 OSI 模型中的单个层。例如，以太网（Ethernet）、802.11（Wifi）和地址解析协议（ARP，Address Resolution Protocol）程序在不只一层上工作。_

The OSI is a model and a tool, not a set of rules.

OSI 只是一个模型，一个工具，并不是一组规则。

## OSI Layer 1

## OSI 第一层

Layer 1 is the  **physical layer**. There’s a lot of technology in Layer 1 - everything from physical network devices, cabling, to how the cables hook up to the devices. Plus if we don’t need cables, what the signal type and transmission methods are (for example, wireless broadband).

第一层是 **物理层**。第一层中有很多技术——从物理网络设备、布线到电缆如何连接到设备之间的一切。另外，如果我们不需要电缆，那么信号的类型和传输方式是什么（例如，无线宽带）。

Instead of listing every type of technology in Layer 1, I’ve created broader categories for these technologies. I encourage readers to learn more about each of these categories:

我没有列出第一层中的各种技术，而是为这些技术创建了一个更大的分类。我鼓励读者进一步学习每一种分类：

-   **Nodes (devices) and networking hardware components.**  Devices include hubs, repeaters, routers, computers, printers, and so on. Hardware components that live inside of these devices include antennas, amplifiers, Network Interface Cards (NICs), and more.
-   **Device interface mechanics.**  How and where does a cable connect to a device (cable connector and device socket)? What is the size and shape of the connector, and how many pins does it have? What dictates when a pin is active or inactive?
-   **Functional and procedural logic.**  What is the function of each pin in the connector - send or receive? What procedural logic dictates the sequence of events so a node can start to communicate with another node on Layer 2?
-   **Cabling protocols and specifications.**  Ethernet (CAT), USB,  [Digital Subscriber Line (DSL)][7], and more. Specifications include maximum cable length, modulation techniques, radio specifications, line coding, and bits synchronization (more on that below).
-   **Cable types.** Options include shielded or unshielded twisted pair, untwisted pair, coaxial and so on.  [Learn more about cable types here][8].
-   **Signal type.**  Baseband is a single bit stream at a time, like a railway track - one-way only. Broadband consists of multiple bit streams at the same time, like a bi-directional highway.
-   **Signal transmission method (may be wired or cable-free).**  Options include electrical (Ethernet), light (optical networks, fiber optics), radio waves (802.11 WiFi, a/b/g/n/ac/ax variants or Bluetooth). If cable-free, then also consider frequency: 2.5 GHz vs. 5 GHz. If it’s cabled, consider voltage. If cabled and Ethernet, also consider networking standards like 100BASE-T and related standards.

- **节点（设备）和网络硬件。** 设备包括集线器、中继器、路由器、计算机、打印机，等等。这些设备内的硬件包括天线、放大器、网卡（NIC，Network Interface Card），等等。
- **设备接口机制。** 电缆如何连接到某个设备，以及连接到设备上的哪个地方（电缆连接器和设备插座）？连接器的大小和形状如何，它有多少个引脚？决定引脚处于活动状态还是非活动状态的东西是什么？
- **功能和程序逻辑。** 连接器中每个引脚的功能是什么——发送还是接收？决定事件顺序，以便节点能够开始与第二层上的另一个节点通信的程序逻辑是什么？
- **电缆协议和规范。** 以太网（CAT）、USB、[数字用户线（Digital Subcriber Line, DSL）][7]等。规范包括最大电缆长度、调制技术、无线电规范、线路编码和位同步（下文还有更多）。
- **电缆类型。** 选择有屏蔽或非屏蔽双绞线、非双绞线、同轴电缆等。[从这里了解更多电缆类型][8]。
- **信号类型。** 基带一次一个比特流，就像铁路一样——只支持单向。宽带同时包含多个比特流，就像双向高速公路一样。
- **信号传输方法（可能是有线的或无线的）。** 选择包括电（以太网）、光（光纤网络、光纤）、无线电波（802.11 WiFi，a/b/g/n/ac/ax 变种或蓝牙）。如果是无线的话，则要考虑频率：2.5 GHz 还是 5 GHz。如果是有线或以太网的话，则还要考虑网络标准，例如 100BASE-T 和相关标准。

The data unit on Layer 1 is the bit.

第一层的数据单元是比特（bit）。

A bit the smallest unit of transmittable digital information. Bits are binary, so either a 0 or a 1. Bytes, consisting of 8 bits, are used to represent single characters, like a letter, numeral, or symbol.

比特是可传输数字信息的最小单元。比特是二进制的，要么为 0 要么为 1。字节（byte）由八个比特组成，用于表示单个字符，比如字母、数字或符号。

Bits are sent to and from hardware devices in accordance with the supported data rate (transmission rate, in number of bits per second or millisecond) and are synchronized so the number of bits sent and received per unit of time remains consistent (this is called bit synchronization). The way bits are transmitted depends on the signal transmission method.

根据硬件设备支持的数据速率（传输速率，每秒或每毫秒的比特数量），比特被发送到硬件设备或从设备发出。这个过程是同步的，从而保持单位时间内发送和接收比特的数量相等（这被称为比特同步）。比特的传输方式由信号的传输方式决定。

Nodes can send, receive, or send and receive bits. If they can only do one, then the node uses a simplex mode. If they can do both, then the node uses a duplex mode. If a node can send and receive at the same time, it’s full-duplex – if not, it’s just half-duplex.

节点可以发送比特、接收比特，或者收发兼顾。如果节点只能收或只能发，那么该节点采用的就是单工模式。如果节点既可以收又可以发，那么该节点采用的就是双工模式。如果一个节点可以同时进行收发操作，那么它就是全双工的，否则就是半双工的。

The original Ethernet was half-duplex. Full-duplex Ethernet is an option now, given the right equipment.

最初的以太网是半双工的。如果采用了正确的设备，现在也可以选择全双工的以太网。

### How to Troubleshoot OSI Layer 1 Problems

### 如何排查第一层中的问题

Here are some Layer 1 problems to watch out for:

-   Defunct cables, for example damaged wires or broken connectors
-   Broken hardware network devices, for example damaged circuits
-   Stuff being unplugged (...we’ve all been there)

这里是第一层中要当心的一些问题：

- 电缆失效，例如电线损坏或连接器损坏
- 网络硬件设备故障，例如电路损坏
- 东西正被拔出（我们都遇到过……）

If there are issues in Layer 1, anything beyond Layer 1 will not function properly.

如果第一层出了问题，第一层以上的任何东西都不会正常工作。

### TL;DR

_Layer 1 contains the infrastructure that makes communication on networks possible._

_第一层包含的是基础设施，它让网络通信变成可能。_

_It defines the electrical, mechanical, procedural, and functional specifications for activating, maintaining, and deactivating physical links between network devices. -_ [Source][9]

_它定义了用于激活、维护和停用网络设备之间的物理连接的电气、机械、程序和功能规范。_——[来源][9]

Fun fact: deep-sea communications cables transmit data around the world. This map will blow your mind:  [https://www.submarinecablemap.com/][10]

有趣的事实：深海通信电缆在全世界传输数据。这张地图会让你大开眼界：[https://www.submarinecablemap.com/][10]。

And because you made it this far, here’s a koala:

因为你已经坚持到这儿了，所以送你一只考拉：

![Koala, Nature, Animals, Paws, Australia, Puppy](https://lh4.googleusercontent.com/01fHh4ca3BJwiXqKBUpxizPK4BSO__5sk5v5gWWYjI8pP3CqQBkHVZDpzN043d1pwmwelUugTEePT58rMMV_PxBQY5IfYVxYhz8GKfDT1eVJD6bKdgl0bdzotLO-AhtAfZCnZ1ua)

[Source][11]

<figure>
    <img src="https://lh4.googleusercontent.com/01fHh4ca3BJwiXqKBUpxizPK4BSO__5sk5v5gWWYjI8pP3CqQBkHVZDpzN043d1pwmwelUugTEePT58rMMV_PxBQY5IfYVxYhz8GKfDT1eVJD6bKdgl0bdzotLO-AhtAfZCnZ1ua" alt="考拉、自然、动物、爪子、澳大利亚、幼仔">
    <figcaption><a href="https://pixabay.com/photos/koala-nature-animals-paws-630117/">来源</a></figcaption>
</figure>

## OSI Layer 2

## OSI 第二层

Layer 2 is the  **data link layer**. Layer 2 defines how data is formatted for transmission, how much data can flow between nodes, for how long, and what to do when errors are detected in this flow.

第二层是 **数据链路层**。它定义了数据的传输格式、可以在节点间流动的数据量大小、数据流动可以持续的时长，以及在流中检测到错误时应采取的措施。

In more official tech terms:

-   **Line discipline.**  Who should talk for how long? How long should nodes be able to transit information for?
-   **Flow control.**  How much data should be transmitted?
-   **Error control**  **\- detection and correction**. All data transmission methods have potential for errors, from electrical spikes to dirty connectors. Once Layer 2 technologies tell network administrators about an issue on Layer 2 or Layer 1, the system administrator can correct for those errors on subsequent layers. Layer 2 is mostly concerned with error detection, not error correction. ([Source][12])

使用更加正式的技术术语描述如下：

- **线路规划。** 谁应该交流多久？节点传输信息的时间应该持续多久？
- **流量控制。** 应该传输的数据量是多少？
- **错误控制-检测和校正。** 从电尖峰脉冲到卑鄙的连接器，所有的数据传输方法都有可能出错。一旦第二层的技术告知网络管理员有关第二层或第一层的问题，系统管理员就能为后续几层纠正那些错误。第二层主要关心的是错误检测，而不是错误校正。（[来源][12]）

There are two distinct sublayers within Layer 2:

-   **Media Access Control (MAC):**  the MAC sublayer handles the assignment of a hardware identification number, called a MAC address, that uniquely identifies each device on a network. No two devices should have the same MAC address. The MAC address is assigned at the point of manufacturing. It is automatically recognized by most networks. MAC addresses live on Network Interface Cards (NICs). Switches keep track of all MAC addresses on a network. Learn more about MAC addresses  [here][13]  and  [here][14]. Learn more about network switches  [here][15].
-   **Logical Link Control (LLC):**  the LLC sublayer handles framing addressing and flow control. The speed depends on the link between nodes, for example Ethernet or Wifi.

第二层内有两个截然不同的子层：

- **介质访问控制（MAC，Media Access Control）：** MAC 子层负责分配硬件标识号，这个标识号被称为 MAC 地址，它能够唯一标识网络上的各个设备。两个设备不应该有相同的 MAC 地址。MAC 地址在硬件制造时就分配好了，位于网卡当中，大多数网络都会自动对其进行识别。交换机会跟踪网络上所有的 MAC 地址。在[这里][13]和[这里][14]了解更多有关 MAC 地址的信息，在[这里][15]进一步了解网络交换机。
- **逻辑链路控制（LLC，Logical Link Control）:** LLC 子层处理帧的寻址以及流量控制。速度取决于两个节点之间的链路，例如以太网或 Wifi。

The data unit on Layer 2 is a  _frame_.

第二层的数据单元是 _帧（frame）。_

Each frame contains a frame header, body, and a frame trailer:

-   Header: typically includes MAC addresses for the source and destination nodes.
-   Body: consists of the bits being transmitted.
-   Trailer: includes error detection information. When errors are detected, and depending on the implementation or configuration of a network or protocol, frames may be discarded or the error may be reported up to higher layers for further error correction. Examples of error detection mechanisms: Cyclic Redundancy Check (CRC) and Frame Check Sequence (FCS).  [Learn more about error detection techniques here][16].

每一帧都包括一个帧头、主体和一个帧尾：

- 帧头：通常包括源节点和目的节点的 MAC 地址。
- 主体：由要传输的比特组成。
- 帧尾：包括错误检测信息。当检测到错误时，根据实现或网络的配置或协议，帧可能被丢弃，或者错误会被报告给上面的层，用于进一步错误校正。例如，错误检测机制的有循环冗余校验（CRC，Cyclic Redundancy Check）和帧校验序列（FCS，Frame Check Sequence）。[从这里了解更多有关错误检测技术的信息][16]。

![](https://lh4.googleusercontent.com/CJpYzIm5a1uYujH_a6wC2Rc09H2TiWiNHdV9XByqbGPRod4lYwYoqrwUa8qJGAO3cjuqZ8GER7j7Xzberj4LBBRojj3exVfGcZPGVdt_9PZrAYsFmaThz5zhL1qeHL5wYv96o-xh)

[Source][17]

<figure>
    <img src="https://lh4.googleusercontent.com/CJpYzIm5a1uYujH_a6wC2Rc09H2TiWiNHdV9XByqbGPRod4lYwYoqrwUa8qJGAO3cjuqZ8GER7j7Xzberj4LBBRojj3exVfGcZPGVdt_9PZrAYsFmaThz5zhL1qeHL5wYv96o-xh">
    <figcaption><a href="https://learning.oreilly.com/library/view/the-illustrated-network/9780128110287/xhtml/chp001.xhtml">来源</a></figcaption>
</figure>

Typically there is a maximum frame size limit, called an Maximum Transmission Unit, MTU. Jumbo frames exceed the standard MTU,  [learn more about jumbo frames here][18].

帧的大小通常有一个最大值，这个值被称为最大传输单元（MTU，Maximum Transmission Unit）。巨型帧的大小超过了标准的 MTU，[从这里了解更多有关巨型帧的信息][18]。

### How to Troubleshoot OSI Layer 2 Problems

### 如何排查 OSI 第二层中的问题

Here are some Layer 2 problems to watch out for:

-   All the problems that can occur on Layer 1
-   Unsuccessful connections (sessions) between two nodes
-   Sessions that are successfully established but intermittently fail
-   Frame collisions

这里是第二层中要当心的一些问题：

- 可能在第一层上发生的所有问题
- 两个节点间的连接（会话）不成功
- 成功建立但又间歇性失败的会话
- 帧冲突

### TL;DR

_The Data Link Layer allows nodes to communicate with each other within a local area network. The foundations of line discipline, flow control, and error control are established in this layer._

_数据链路层允许局域网内的各节点彼此相互通信。这一层建立了线路规划、流量控制和错误控制的基础。_

## OSI Layer 3

## OSI 第三层

Layer 3 is the  **network layer**. This is where we send information  _between and across_  networks through the use of routers. Instead of just node-to-node communication, we can now do network-to-network communication.

第三层是 **网络层。** 就是在这里，我们通过路由器在网络间或跨网发送信息。不仅仅是节点到节点的通信，我们现在还可以进行网络到网络的通信了。

Routers are the workhorse of Layer 3 - we couldn’t have Layer 3 without them. They move data packets across multiple networks.

路由器是第三层的主力——它们是在第三层中必不可少。路由器跨越多个网络移动数据包。

Not only do they connect to Internet Service Providers (ISPs) to provide access to the Internet, they also keep track of what’s on its network (remember that switches keep track of all MAC addresses on a network), what other networks it’s connected to, and the different paths for routing data packets across these networks.

路由器不仅通过连接到网络服务提供商（ISPs，Internet Service Providers）提供因特网访问，还跟踪着所在网络中的一切（记住交换机跟踪的是一个网络中所有的 MAC 地址），它所连接的其它网络，以及在这些网络中路由数据包的不同路径。

Routers store all of this addressing and routing information in routing tables.

路由器将所有的地址和路由信息都保存在路由表中。

Here’s a simple example of a routing table:

这里是一个简单的路由表示例：

![](https://lh3.googleusercontent.com/g3LrFVHdbqIEJj-Mp-oSREXrT30dTdPW-4doqmdT5qNHImZTzFOj-kdgQRmuUWPR1RUgDC1QNiCxDNiqXSf30IRfl0C33Oq166fR1ygkeco1nRrFY-6VclAT3BPWSx1Ddc8_J8Vo)

[Image source + learn more about routing tables here][19].

<figure>
    <img src="https://lh3.googleusercontent.com/g3LrFVHdbqIEJj-Mp-oSREXrT30dTdPW-4doqmdT5qNHImZTzFOj-kdgQRmuUWPR1RUgDC1QNiCxDNiqXSf30IRfl0C33Oq166fR1ygkeco1nRrFY-6VclAT3BPWSx1Ddc8_J8Vo">
    <figcaption><a href="https://www.geeksforgeeks.org/routing-tables-in-computer-network/">图片来源 + 从这里了解更多有关路由表的信息</a></figcaption>
</figure>

The data unit on Layer 3 is the  _data packet_. Typically, each data packet contains a frame  **plus**  an IP address information wrapper. In other words, frames are encapsulated by Layer 3 addressing information.

第三层的数据单元是 _数据包（data packet）_。通常，每个数据包都包含一个帧 **加上** 一个 IP 地址信息的包装。换句话说，帧被第三层的地址信息封装了。

The data being transmitted in a packet is also sometimes called the  _payload_. While each packet has everything it needs to get to its destination, whether or not it makes it there is another story.

数据包中传输的数据有时也被称为 _负载（payload）_。每个包都拥有到达目的地所需的一切，但是它能不能成功抵达就是另外一回事儿了。

Layer 3 transmissions are connectionless, or best effort - they don't do anything but send the traffic where it’s supposed to go. More on data transport protocols on Layer 4.

第三层上的传输是无连接的、尽力而为的——除了将流量发往它应该去的地方，它们不会做任何事。更多与数据传输有关的协议在第四层。

Once a node is connected to the Internet, it is assigned an Internet Protocol (IP) address, which looks either like 172.16. 254.1 (IPv4 address convention) or like 2001:0db8:85a3:0000:0000:8a2e:0370:7334 (IPv6 address convention). Routers use IP addresses in their routing tables.

节点一旦连接到因特网，它就会被赋予一个因特网协议（IP，Internet Protocol）地址，它看起来要么像 172.16.254.4（IPv4 地址），要么像 2001:0db8:85a3:0000:0000:8a2e:0370:7334（IPv6 地址）。路由器在它们的路由表中使用 IP 地址。

IP addresses are associated with the physical node’s MAC address via the Address Resolution Protocol (ARP), which resolves MAC addresses with the node’s corresponding IP address.

IP 地址通过地址解析协议（ARP，Address Resolution Protocol）与物理节点的 MAC 地址相关联，ARP 用节点对应的 IP 地址解析 MAC 地址。

ARP is conventionally considered part of Layer 2, but since IP addresses don’t exist until Layer 3, it’s also part of Layer 3.

ARP 通常被认为是第二层的一部分，但是由于 IP 地址在第三层以下都不存在，所以 ARP 也是第三层的一部分。

### How to Troubleshoot OSI Layer 3 Problems

### 如何排查第三层中的问题

Here are some Layer 3 problems to watch out for:

-   All the problems that can crop up on previous layers :)
-   Faulty or non-functional router or other node
-   IP address is incorrectly configured

这里是第三层中要当心的一些问题：

- 所有可能在之前各层中出现的问题 :)
- 路由器或其它节点故障或无功能
- IP 地址配置不正确

Many answers to Layer 3 questions will require the use of command-line tools like  _ping_,  _trace_,  _show ip route_, or  _show ip protocols_. Learn more about troubleshooting on layer 1-3  [here][20].

很多第三层问题的答案都要求使用像 _ping_、_trace_、_show ip route_ 或 _show ip protocols_ 这样的命令行工具。在[这里][20]了解更多与有关一至三层问题排查的信息。

### TL;DR

_The Network Layer allows nodes to connect to the Internet and send information across different networks._

_第三层允许节点连接到因特网并跨越不同网络发送数据。_

## OSI Layer 4

## OSI 第四层

Layer 4 is the  **transport layer**. This where we dive into the nitty gritty specifics of the connection between two nodes and how information is transmitted between them. It builds on the functions of Layer 2 - line discipline, flow control, and error control.

第四层是 **传输层**。在这里，我们会深入探讨了两个节点之间连接的具体细节，以及信息是如何在它们之间进行传输的。第四层建立在第二层的功能之上——线路规划、流量控制和错误控制。

This layer is also responsible for data packet segmentation, or how data packets are broken up and sent over the network.

这一层也负责数据包的分段，或者说数据包如何被拆分成小片并发往整个网络。

Unlike the previous layer, Layer 4 also has an understanding of the whole message, not just the contents of each individual data packet. With this understanding, Layer 4 is able to manage network congestion by not sending all the packets at once.

不像上一层，第四层也理解整个消息，而不只是每个独立的数据包的内容。根据对整个消息的理解，第四层不再一次性发送所有数据包，从而管理网络拥塞。

The data units of Layer 4 go by a few names. For TCP, the data unit is a packet. For UDP, a packet is referred to as a datagram. I’ll just use the term data packet here for the sake of simplicity.

第四层的数据单元有好几个不同的名字，对于 TCP 而言，数据单元是数据包。对于 UDP 而言，包被称为数据报（datagram）。为了简化，我将只使用数据包这个术语。

Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) are two of the most well-known protocols in Layer 4.

第四层中最有名的两个协议是传输控制协议（TCP，Transmission Control Protocol）和用户数据报协议（UDP，User Datagram Protocol）。

TCP, a connection-oriented protocol, prioritizes data quality over speed.

TCP 是一个面向连接的协议，优先保证的是数据的质量而不是速度。

TCP explicitly establishes a connection with the destination node and requires a handshake between the source and destination nodes when data is transmitted. The handshake confirms that data was received. If the destination node does not receive all of the data, TCP will ask for a retry.

TCP 显式地与目的节点建立连接，并要求在数据传输时进行源节点与目的节点之间的握手操作。握手能够确认数据已经被接收。如果目的节点没有收到所有的数据，TCP 就会要求进行重传。

TCP also ensures that packets are delivered or reassembled in the correct order.  [Learn more about TCP here][21].

TCP 也会确保数据包以正确的顺序交付或者重组。[从这里了解更多有关 TCP 的信息][21]。

UDP, a connectionless protocol, prioritizes speed over data quality. UDP does not require a handshake, which is why it’s called connectionless.

UDP 是一个无连接的协议，优先保证速度而不是数据的质量。UDP 不要求进行握手，这也正是它被称为无连接的原因。

Because UDP doesn’t have to wait for this acknowledgement, it can send data at a faster rate, but not all of the data may be successfully transmitted and we’d never know.

因为 UDP 不必等待确认，所以它可以以更快的速度发送数据，但并非所有的数据都能成功传输，我们也不会知道哪些数据传输失败了。

If information is split up into multiple datagrams, unless those datagrams contain a sequence number, UDP does not ensure that packets are reassembled in the correct order.  [Learn more about UDP here][22].

如果信息被拆分成多个数据报，除非这些数据报都包含一个序列号，否则 UDP 无法确保以正确的顺序重组数据包。[从这里了解更多有关 UDP 的信息][22]。

TCP and UDP both send data to specific ports on a network device, which has an IP address. The combination of the IP address and the port number is called a socket.

TCP 和 UDP 都将数据发往网络设备上的特定端口，这些网络设备都有自己的 IP 地址。IP 地址和端口号的组合被称为套接字（socket）。

[Learn more about sockets here][23].

[从这里了解更多有关套接字的信息][23]。

Learn more about the differences and similarities between these two protocols  [here][24]  and  [here][25].

从[这里][24]和[这里][25]了解 TCP 与 UDP 这两个协议之间的更多差异和相似之处。

### How to Troubleshoot OSI Layer 4 Problems

### 如何排查 OSI 第四层中的问题

Here are some Layer 4 problems to watch out for:

-   All the problems that can crop up on previous layers :)
-   Blocked ports - check your Access Control Lists (ACL) & firewalls
-   Quality of Service (QoS) settings. QoS is a feature of routers/switches that can prioritize traffic, and they can really muck things up.  [Learn more about QoS here][26].

这里是第四层中要当心的一些问题：

- 所有可能在之前各层中出现的问题 :)
- 被封锁的端口——检查你的访问控制列表（ACL，Access Control List）和防火墙
- 服务质量（QoS，Quality of Service）设置。QoS 是路由器/交换机的一个功能，可以对流量进行优先级排序，并且它们真的可以把事情搞砸。[从这里学习更多有关 Qos 的信息][26]。

### TL;DR

_The Transport Layer provides end-to-end transmission of a message by segmenting a message into multiple data packets; the layer supports connection-oriented and connectionless communication._

_传输层通过将消息分割成多个数据包提供端到端的消息传输，支持面向连接的和无连接的通信。_

## OSI Layer 5

## OSI 第五层

Layer 5 is the  **session layer**. This layer establishes, maintains, and terminates sessions.

第五层是 **会话层**，负责建立、维持和终止会话。

A session is a mutually agreed upon connection that is established between two network applications. Not two nodes! Nope, we’ve moved on from nodes. They were  _so_  Layer 4.

会话建立在两个网络应用之间，是双方商定好的连接。注意，我们没有说两个节点，我们已经离开节点了，它们是第四层中的东西。

Just kidding, we still have nodes, but Layer 5 doesn’t need to retain the concept of a node because that’s been abstracted out (taken care of) by previous layers.

开玩笑的，我们还是有节点的，但是第五层不需要保留节点的概念，因为它是之前各层抽象出来的（关心）的概念。

So a session is a connection that is established between two specific end-user applications. There are two important concepts to consider here:

所以会话是一个建立在两个特定的用户应用之间的连接，其中有一些重要的概念需要考虑：

-   Client and server model: the application requesting the information is called the client, and the application that has the requested information is called the server.
-   Request and response model: while a session is being established and during a session, there is a constant back-and-forth of requests for information and responses containing that information or “hey, I don’t have what you’re requesting.”

- 客户端与服务器模型：请求信息的应用被称为客户端，拥有被请求信息的应用被称为服务器。
- 请求与响应模型：在建立会话的过程和会话期间，不断有来回的信息请求，还有包含被请求信息的响应或者是“嘿，我没有你要的东西”。

Sessions may be open for a very short amount of time or a long amount of time. They may fail sometimes, too.

会话持续的时间可以非常短，也可以非常长，有时会话也可能会失败。

Depending on the protocol in question, various failure resolution processes may kick in. Depending on the applications/protocols/hardware in use, sessions may support simplex, half-duplex, or full-duplex modes.

根据所采用的协议，会话可能会启动各种故障解决程序。根据所使用的应用程序/协议/硬件，会话可能支持单工，半双工或全双工模式。

Examples of protocols on Layer 5 include Network Basic Input Output System (NetBIOS) and Remote Procedure Call Protocol (RPC), and many others.

第五层中协议的例子有网络基本输入输出系统（NetBIOS，Network Basic Input Output System）和远程过程调用协议（RPC，Remote Procedure Call Protocol）等等。

From here on out (layer 5 and up), networks are focused on ways of making connections to end-user applications and displaying data to the user.

从这里往上（第五层及以上），网络关注的是与用户应用程序建立连接以及如何向用户展示数据。

### How to Troubleshoot OSI Layer 5 Problems

### 如何诊断 OSI 第五层中的问题

Here are some Layer 5 problems to watch out for:

这里是第五层中需要当心的一些问题：

-   Servers are unavailable
-   Servers are incorrectly configured, for example Apache or PHP configs
-   Session failure - disconnect, timeout, and so on.

- 服务器不可用
- 服务器未被正确地配置，例如 Apache 或 PHP 配置
- 会话故障——断连、超时，等等

### TL;DR

_The Session Layer initiates, maintains, and terminates connections between two end-user applications. It responds to requests from the presentation layer and issues requests to the transport layer._

_会话层负责初始化、维持并终止两个用户应用程序之间的连接。它响应来自表示层的请求，并向传输层发起请求。_

## OSI Layer 6

## OSI 第六层

Layer 6 is the  **presentation layer**. This layer is responsible for data formatting, such as character encoding and conversions, and data encryption.

第六层是 **表示层**，负责数据的格式，比如字符编码与转换，以及数据加密。

The operating system that hosts the end-user application is typically involved in Layer 6 processes. This functionality is not always implemented in a network protocol.

托管用户应用程序的操作系统通常包含第六层中的程序，这个功能并不总是被网络协议实现。

Layer 6 makes sure that end-user applications operating on Layer 7 can successfully consume data and, of course, eventually display it.

第六层确保第七层中的用户程序可以成功地消费数据，当然还有最终数据的展示。

There are three data formatting methods to be aware of:

-   American Standard Code for Information Interchange (ASCII): this 7-bit encoding technique is the most widely used standard for character encoding. One superset is ISO-8859-1, which provides most of the characters necessary for languages spoken in Western Europe.
-   Extended Binary-Coded Decimal Interchange Code (EBDCIC): designed by IBM for mainframe usage. This encoding is incompatible with other character encoding methods.
-   Unicode: character encodings can be done with 32-, 16-, or 8-bit characters and attempts to accommodate every known, written alphabet.

有三种数据格式化方法需要注意：

- 美国信息交换标准代码（ASCII，American Standard Code for Information Interchange）：这个七位编码技术是字符编码中使用最广泛的标准。ASCII 的一个超集是 ISO-885901，它提供了西欧语言所必需的大多数字符。
- 扩充的二进制编码的十进制交换码（EBDCIC，Extended Binary-Coded Decimal Interchange Code）：由 IBM 设计，用于大型机。此编码与其他字符编码方法不兼容。
- 万国码（Unicode）：可以使用 32 位，16 位或 8 位字符的字符编码，它尝试容纳所有已知的字母。

Learn more about character encoding methods  [here][27],  [here][28], and  [here][29].

从[这里][27]、[这里][28]还有[这里][29]了解有关字符编码的更多信息。

Encryption: SSL or TLS encryption protocols live on Layer 6. These encryption protocols help ensure that transmitted data is less vulnerable to malicious actors by providing authentication and data encryption for nodes operating on a network. TLS is the successor to SSL.

加密：SSL 或 TLS 加密协议位于第六层。这些加密协议为网络上的节点提供身份认证和数据加密功能，帮助确保传输的数据抵御恶意用户的攻击。TLS 是 SSL 继任者。

### How to Troubleshoot OSI Layer 6 Problems

### 如何诊断 OSI 第六层中的问题

Here are some Layer 6 problems to watch out for:

-   Non-existent or corrupted drivers
-   Incorrect OS user access level

这里是第六层中需要当心的一些问题：

- 驱动程序不存在或损坏
- 操作系统用户访问级别不正确

### TL;DR

_The Presentation Layer formats and encrypts data._

_表示层负责格式化与加密数据。_

## OSI Layer 7

## OSI 第七层

Layer 7 is the  **application layer**.

第七层是 **应用层**。

True to its name, this is the layer that is ultimately responsible for supporting services used by end-user applications. Applications include software programs that are installed on the operating system, like Internet browsers (for example, Firefox) or word processing programs (for example, Microsoft Word).

顾名思义，这一层最终负责支持用户程序使用的服务。应用程序包括安装在操作系统中的软件程序，比如因特网浏览器（例如 Firefox）或文字处理程序（例如 Microsoft Word）。

Applications can perform specialized network functions under the hood and require specialized services that fall under the umbrella of Layer 7.

应用程序可以在后台执行专门的网络功能，也可以要求第七层中专门的服务。

Electronic mail programs, for example, are specifically created to run over a network and utilize networking functionality, such as email protocols, which fall under Layer 7.

例如专门创建电子邮件程序，它在网络上运行并利用第七层中网络功能（比如电子邮件协议）。

Applications will also control end-user interaction, such as security checks (for example, MFA), identification of two participants, initiation of an exchange of information, and so on.

应用程序也可以控制用户交互，比如安全检查（例如 MFA）、识别两名参与者的身份、初始化信息交换等。

Protocols that operate on this level include File Transfer Protocol (FTP), Secure Shell (SSH), Simple Mail Transfer Protocol (SMTP), Internet Message Access Protocol (IMAP), Domain Name Service (DNS), and Hypertext Transfer Protocol (HTTP).

这一层中运行的协议包括文件传输协议（FTP，File Transfer Protocol）、安全壳协议（SSH，Secure Shell）、简单邮件传输协议（SMTP，Simple Mail Transfer Protocol）、因特网消息访问协议（IMAP，Internet Message Access Protocol）、域名服务（DNS，Domain Name Service）和超文本传输协议（HTTP，Hypertext Transfer Protocol）。

While each of these protocols serve different functions and operate differently, on a high level they all facilitate the communication of information. ([Source][30])

虽然这些协议中的每一个都服务于不同的功能，运行的方式也各不相同，但从较高的层次看，它们都促进了信息的交流。

### How to Troubleshoot OSI Layer 7 Problems

### 如何诊断 OSI 第七层中的协议

Here are some Layer 7 problems to watch out for:

-   All issues on previous layers
-   Incorrectly configured software applications
-   User error (... we’ve all been there)

这里是第七层中需要当心的一些问题：

- 所有之前各层中的问题
- 软件应用程序配置不正确
- 用户操作失误（我们都遇到过……）

### TL;DR

_The Application Layer owns the services and functions that end-user applications need to work. It does not include the applications themselves._

_应用层拥有用户应用程序运行所需的服务和功能，不包括应用程序本身。_

# **Conclusion**

# 结论

Our Layer 1 koala is all grown up.

我们第一层中出现的小考拉已经长大了。

![](https://lh5.googleusercontent.com/HwLDfHDJ_Y5Dl8NoUHL076tPp0JhqbM-kl666fA7IXRnkF_vJt1nL-P1OdKdqT5TEGG73yH7C2JWK3nEGoceQRHJUviopkITLR98P_ntOm5Rtn8dzGlSF0K9BsxXP1MRKKzcgqUh)

Learning check - can you apply makeup to a koala?

学习检查——你能给考拉化妆吗？

Don’t have a koala?

没有考拉？

Well - answer these questions instead. It’s the next best thing, I promise.

好吧——那就回答这些问题。我保证，这是第二好的选择：

-   What is the OSI model?
-   What are each of the layers?
-   How could I use this information to troubleshoot networking issues?

- 什么是 OSI 模型？
- 每一层分别是什么？
- 如何使用这些信息去排查网络问题？

Congratulations - you’ve taken one step farther to understanding the glorious entity we call the Internet.

恭喜！你离理解我们称之为因特网的这个宏大实体又进了一步。

## **Learning Resources**

## 学习资源

Many,  _very_  smart people have written entire books about the OSI model or entire books about specific layers. I encourage readers to check out any O’Reilly-published books about the subject or about network engineering in general.

很多非常聪明的人已经写了有关 OSI 模型或特定层的整本书。我鼓励读者阅读 O'Reilly 出版的有关该主题的书，或者网络工程方面的书籍。

Here are some resources I used when writing this article:

这里是我撰写本文时用到的一些资源：

-   The Illustrated Network, 2nd Edition
-   Protocol Data Unit (PDU):  [https://www.geeksforgeeks.org/difference-between-segments-packets-and-frames/][31]
-   Troubleshooting Along the OSI Model:  [https://www.pearsonitcertification.com/articles/article.aspx?p=1730891][32]
-   The OSI Model Demystified:  [https://www.youtube.com/watch?v=HEEnLZV2wGI][33]
-   OSI Model for Dummies:  [https://www.dummies.com/programming/networking/layers-in-the-osi-model-of-a-computer-network/][34]

### About Me

### 关于我

Chloe Tucker is an artist and computer science enthusiast based in Portland, Oregon. As a former educator, she's continuously searching for the intersection of learning and teaching, or technology and art. Reach out to her on Twitter  [@\_chloetucker][35] and check out her website at  [chloe.dev][36].

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
