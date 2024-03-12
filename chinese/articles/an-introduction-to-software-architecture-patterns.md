> -  原文地址：[The Software Architecture Handbook](https://www.freecodecamp.org/news/an-introduction-to-software-architecture-patterns/)
> -  原文作者：[Germán Cocca](https://www.freecodecamp.org/news/author/gercocca/)
> -  译者：Papaya HUANG
> -  校对者：

![The Software Architecture Handbook](https://www.freecodecamp.org/news/content/images/size/w2000/2022/05/pexels----3172740.jpg)

大家好！在本文中，我们将讨论一个非常有趣、广泛且复杂的主题：软件架构。

我刚开始写代码时就被这个主题困扰过，在这篇文章中，我将尝试为你提供简单的、表面的、易于理解的介绍。

我们将讨论软件领域中的架构是什么、一些主要概念以及当今最流行的架构模式。

对于每个主题，我都会给出一个简单、初级的理论介绍和代码或者伪代码示例，你可以从中了解每个概念是如何运作的。让我们开始吧！

## 目录

-   [什么是软件架构](#what-is-software-architecture)?
-   [重要的软件架构概念](#important-software-architecture-concepts-to-know)
    -   [什么是客户端——服务器模型](#whats-the-client-server-model)?
    -   [什么是 API](#what-are-apis)?
    -   [什么是模块化](#what-is-modularity)?
-   [你的基础架构是什么样的?](#what-s-your-infrastructure-like)
    -   [单体式架构](#monolithic-architecture)
    -   [微服务架构](#microservices-architecture)
    -   [服务于前端的后端是什么(BFF)](#what-is-back-end-for-front-end-bff-)?
    -   [如何使用负载均衡器和水平扩展](#how-to-use-load-balancers-and-horizontal-scaling)
-   [你的基础架构所在的位置](#where-your-infrastructure-lives)
    -   [本地托管](#on-premise-hosting)
    -   [传统服务器供应商](#traditional-server-providers)
    -   [云托管](#hosting-on-the-cloud)
        -   [传统的](#traditional)
        -   [弹性的](#elastic)
        -   [无服务的](#serverless)
        -   [更多其他服务](#lots-of-other-services)
-   [不同的文件夹结构](#different-folder-structures-to-know)
    -   [全在一个文件夹中的结构](#all-in-one-place-folder-structure)
    -   [分层文件夹结构](#layers-folder-structure)
    -   [MVC 文件夹结构](#mvc-folder-structure)
-   [总结](#conclusion)

<h1 id="what-is-software-architecture">什么是软件架构</h1>

[卡耐基·梅隆大学软件工程学院给的定义](https://www.sei.cmu.edu/our-work/software-architecture/):

> 系统的软件架构代表与整个系统结构和行为相关的设计决策。

这个说法笼统，对吧？当然！这正是在研究软件架构时让我非常困惑的地方。软件架构包含很多内容，这个术语可以指代不同的事物。

我用简单的话来概括就是：软件架构是指你在创建软件的过程中如何组织内容。而这里的“内容”可以指：

-   **实现细节** (即你仓库的文件夹结构)
-   **实现** **设计** 决策 (你是使用服务端还是客户端渲染？使用关系型还是非关系性数据库)
-   你选择的**技术** (你是使用 REST 还是 GraphQl API? 后端使用 Python/Django 还是 Nod/Express 技术栈？)
-   **系统** **设计** 决策(你的系统是采用单体式架构还是微服务架构?)
-   **基础设施**决策 (你是在本地还是在云提供商上托管软件?)

以上概括了非常多的选择和可能性。让情况变得更复杂的是，在这个五个类别中，不同的模式可以结合。比方说，我可以采用一个单体式的 REST 或者 GraphQL 的 API，或者一个微服务架构的应用托管在云供应商或者本地。

为了更好地解释这些混沌的概念，首先我们将讨论一些基础的概念，然后再逐条讲解这些分类，并解释时下搭建应用最常用的架构模式和选择。

<h1 id="#important-software-architecture-concepts-to-know">重要的软件结构概念</h1>

<h2 id="whats-the-client-server-model">什么是客户端-服务器模型?</h2>

**客户端-服务器**是一种构建应用程序任务或者工作负载结构的模型，连接资源或服务**提供者**（服务器）和服务或资源请求者（客户端）。

简言之，客户端就是请求信息或者行为的应用程序；服务器就是根据客户端的请求，发送信息或者执行行为的程序。

客户端通常是前端应用，可以在 web 或者手机应用上运行（虽然也可以通过其他平台使用以及后端应用也可以被当作客户端）；服务器通常是后端应用。

举个例子，想象你在浏览你最喜欢的社交网络，当你在浏览器输入 URL 并点击回车之后，你的浏览器就像客户端应用一样，向社交网络服务器**发送请求**，社交网络服务器**响应**请求，并向你发送网站内容。

时下大部分应用都采用客户端-服务器模型，最重要的概念是**客户端请求资源和服务**，**服务器实现**。

另一个重要的概念是，虽然客户端和服务器隶属于同一个系统，但是两者各自都拥有自己的应用或者程序。也就是说你可以分别开发、托管和执行两者。

如果你不熟悉前端和后端的区别，[这里有一篇写得不错的文章，供你参考](https://www.freecodecamp.org/news/frontend-vs-backend-whats-the-difference/)。这里还有[另一篇文章](https://www.freecodecamp.org/news/how-the-web-works-part-ii-client-server-model-the-structure-of-a-web-application-735b4b6d76e3/)介绍了客户端-服务器的概念。

<h2 id="what-are-apis">什么是API</h2>

我们刚刚讲解了客户端和服务器是两个相互通信的实体，前端发送请求，后端响应请求。两者相互通信通常是通过 API（应用程序接口）。

API 只不过是一系列确定应用间如何通信的规则，就像两方之间的协议：“如果你发送 A，我就响应 B；如果你发送 C，我就响应 D……”。

有了这一系列规则，客户端就知道完成特定任务需要发送什么请求；而服务器也知道客户端特定行为意味着什么需求。

API 的实现方式多种多样，时下最常用的是 REST、SOAP 和 GraphQL。

在 API 通信中，HTTP 协议是最常使用的，内容通常采用 JSON 或者 XML 格式。不过也存在其他的协议和内容格式。

如果你想要进一步了解这个话题， 推荐你阅读[这篇文章](https://www.freecodecamp.org/news/http-request-methods-explained/) 。

<h2 id="#what-is-modularity">什么是模块化</h2>

当我们在软件工程中讨论“模块化”，我们指的是将大事化小的行为。拆解的目的是为了简化庞大的应用或者代码库。

模块化具备以下优势：

-   这有利于将关注点和功能分离，有助于项目的可视化、理解和组织。
-   当项目被清晰地构建和细分之后，就更容易维护也更不容易出错。
-   如果项目被细分为许多不同的部分，每个部分可以单独进行处理和修改，这样更利于软件开发。

这听上去有些笼统，但是模块化或者说将项目细分是软件架构中非常重要的一部分。所以只要记住这个概念，通过一些例子，你对它的理解会更加清晰。 ;)

如果你想要阅读更多该话题相关内容，我最近写了一篇 [关于在 JS 中使用模块的文章](https://www.freecodecamp.org/news/modules-in-javascript/) ，希望对你有帮助。

<h1 id="what-s-your-infrastructure-like">你的基础架构是什么样的？</h1>

好的，我们进入文章的精华部分了。我们将讨论构建软件应用程序的不同方式，从项目的基础架构开始。

为了让概念不那么抽象，我将创建一个虚构的应用，叫做 Notflix。🤔🤫🥸

注意：请记住这个例子可能不太现实，我仅以此作为讲解概念的例子。这里只是为了帮助你通过例子来了解架构的核心概念，而不是分析现实例子。

<h2 id="monolithic-architecture">单体式架构</h2>

Notflix 将是一视频流媒体应用，用户可以使用它观看电影、剧集、纪录片等。用户可以在 web 浏览器、手机和 TV 应用上使用它。

这个应用的主要服务包括： **验证** (用户可以创建账户、登陆等)、 **支付** (用户可以订阅并获取内容，你不希望服务完全免费，对吧？ 😑) 和**流媒体**(用户可以观看付费内容)。

基础的架构如图：

![Untitled-Diagram.drawio-3](https://www.freecodecamp.org/news/content/images/2022/07/Untitled-Diagram.drawio-3.png)

经典的单体式架构

左手边是三种不同的前端应用，将作为系统中的客户端。它们可以通过 React 和 React-native 开发。

一个服务器接受三个客户端应用的请求，并在必要的时候和数据库通信，并返回给对应的前端。后端可以由 Node 和 Express 开发。

这种形式的架构就被称为**单体式**，因为仅有一个服务器应用来负责系统的所有功能。在我们的例子中，如果用户需要注册、支付或者观看任意一部影片，所有的请求都发送到同一个服务器应用。

单体式的优势在于设计简单。这种架构的功能和设置简单易操作，这也是为什么大多数应用采用这种架构的原因。

<h2 id="microservices-architecture">微服务架构</h2>

结果 Noflix 表现相当不错。我们刚刚发布了最新一季的《怪奇物语》，这是一部关于青少年说唱歌手的科幻片，以及电影《特工 404》（是关于一个潜入公司假扮资深程序员的特工，其实这个特工完全不懂编程），创造了新的收视纪录。

每个月来自世界各地成千上万的新用户注册 Noflix，这对于我们的经营状况来说是好事，但对于单体式的应用来说可不妙。

最近我们一直在经历服务器响应时间延迟，尽管我们已经**垂直扩展**了服务器（增加了 RAM 和 GPU），但是服务器还是超负载了。

此外，我们也在系统中开发新的功能（如根据用户喜好推荐电影的推荐工具），**代码库变得臃肿且复杂**。

深入分析问题之后，我们发现是流媒体占用了大量的资源，其他服务如认证和支付资源占比不大。

为了解决这个问题，我们决定实现**微服务架构** ，如图所示：

![Untitled-Diagram.drawio--1-](https://www.freecodecamp.org/news/content/images/2022/07/Untitled-Diagram.drawio--1-.png)

我们的首个微服务架构

如果你刚接触这个概念，你可能会问“微服务到底是个什么玩意儿？”，其实就是把服务器细分成不同的小服务器，负责一个或者几个功能。

在我们例子中，起初我们仅有一个服务器来响应所有功能（单体式架构），实现微服务架构后，我们就有一个服务器负责认证，另一个负责支付，还有一个负责流媒体，最后一个负责推荐。

当需要登陆的时候，客户端应用与认证服务通信，用户需要支付时，向支付服务器通信，需要观看视频时向流媒体服务器通信。

所有 **通信都通过 API 实现**，这和单体式架构一样 (或者通过如 [Kafka](https://kafka.apache.org/) 或[RabbitMQ](https://www.rabbitmq.com/)等通信系统)。 唯一的区别是，现在我们使用不同的服务器负责不同的行为，而不是采用一个服务器解决所有问题。

听上去有一点点复杂，确实如此，微服务的优势在于：

-   你可以**根据需要扩展特定服务**，而不是扩展整个后端。 在我们的示例中，当碰到体验问题时，我们垂直扩展了整个服务器，但实际上需要更多资源的仅为流媒体部分。把流媒体功能分离到单个服务器，我们就可以扩展这一个服务器，继续其他部分的正常工作。
-   功能将 **松散耦合**， 意味着我们可以独立开发和部署这些功能。
-   每一个服务器的**代码库**更加**短小精悍**，这对于一开始就一起工作的开发者来说是一件好事，对新加入的开发者快速融入也是好事。

微服务是一个设置和管理更为复杂的架构，这也是为什么仅有一些非常大的项目才使用这种架构。大部分项目一开始使用的是单体式架构，仅在性能需要时迁移到微服务架构。

如果你想了解更多微服务相关的知识，[这里有一个很好的解释视频](https://www.youtube.com/watch?v=CdBtNQZH8a4)。

<h3 id="what-is-back-end-for-front-end-bff-">服务于前端的后端是什么？（BFF）</h3>

实现微服务的一个问题是与前端的通信变得复杂。在我们示例中，多个服务器负责不同的行为也就意味着前端应用需要记录是谁发起的请求。

通常解决这个问题的方式是在前端应用和微服务之间增加一个中间层。这个中间层将接受所有前端的请求，重定向到对应的微服务，接受微服务的回应，然后重定向到对应的前端应用。

BFF 模式的好处在于我们在使用了微服务架构的同时，没有复杂化前端应用的通信。

![Untitled-Diagram.drawio--2-](https://www.freecodecamp.org/news/content/images/2022/07/Untitled-Diagram.drawio--2-.png)

BFF 实现

如果你想了解更多相关内容，这里有一期[解释 BFF 模式的视频](https://www.youtube.com/watch?v=SSo-z16wEnc)。

<h3 id="how-to-use-load-balancers-and-horizontal-scaling">如何使用负载均衡器和水平扩展</h3>

我们的流媒体应用正在呈指数型增长，来自世界各地百万量级的用户全天候使用 Noflix 观看电影，马上我们又要面临新的性能问题。

我们再一次发现是流媒体服务承受最大的压力，我们已经尽我们所能**垂直扩展**了这个服务器，进一步细分这个服务成更多微服务没有意义。所以我们决定**水平扩展**服务器。

在前文中我们提到 **垂直扩展** 就是给单个服务器或者计算机增加更多资源(RAM、磁盘空间、GPU 等)；**水平扩展** 就是设置更多的服务器来处理同一个任务。

我们不再只使用一个服务器来负责所有流媒体工作，而是使用三个。这样来自客户端的请求将被平均分配到这三个服务器处理，每一个服务器的负载就被控制在可承受范围内。

请求的分配通常由**负载均衡器**来实现。 负载均衡器如同服务器的**[反向代理](https://www.strongdm.com/blog/difference-between-proxy-and-reverse-proxy#:~:text=A%20traditional%20forward%20proxy%20server,on%20behalf%20of%20multiple%20servers.)**，拦截请求并重定向到对应的服务器。

一个典型的客户端-服务器连接如图：

![1234](https://www.freecodecamp.org/news/content/images/2022/07/1234.png)

这是我们之前的形式

使用负载均衡器在多个服务器间分发客户端请求如图：

![4312.drawio-1](https://www.freecodecamp.org/news/content/images/2022/07/4312.drawio-1.png)

这是我们想要的形式

水平扩展可以在服务器实现就可以在代码库实现。其中一个实现办法是通过源-副本模型（source-replica model)，一个特定的源 DB 将接受所有写入的请求然后复制这些数据到更多的副本 DB，副本 DB 将接受和响应所有读取的请求。

DB 副本的优势在于：

-   更优的性能：这一模型使得更多个请求可以并行。
-   可靠性和可用性：如果一个数据库服务器因为任何原因被破坏或者无法访问，其他 DB 仍保有数据。

实现了负载均衡器、水平扩展和 DB 副本之后，我们的架构如图：

![Untitled-Diagram.drawio--3--2](https://www.freecodecamp.org/news/content/images/2022/07/Untitled-Diagram.drawio--3--2.png)

水平扩展架构

如果你想要了解更多内容，这里有[一个介绍负载均衡器的视频](https://www.youtube.com/watch?v=sCR3SAVdyCc)。

注意：当我们在讨论微服务、负载均衡器和水平扩展的时候，我们讨论的是后端应用。对于前端应用来说，我们通常是以单体式架构开发的，当然也有一个有趣的概念叫做 [微前端](https://www.youtube.com/watch?v=w58aZjACETQ) 。🧐

<h1 id="where-your-infrastructure-lives">你的基础架构所在的位置</h1>

现在我们对应用的基础架构是如何组织的有了一定了解，现在让我们来看看我们把基础架构放在哪里。

主要有三种托管应用程序的方式：本地、传统服务器供应商和云。

<h2 id="on-premise-hosting">本地托管</h2>

本地托管意味着你拥有运行应用软件的硬件。这曾是最传统的托管方式。软件公司为服务器专门提供房间，并且有专业的团队致力于设置和维护硬件。

这样做的好处是公司全权掌握硬件，坏处是这样耗费空间、时间和金钱。

假设你需要水平扩展一个服务器，你需要购买更多的设备，设置好，并且持续监控，一旦出现问题就要维修……如果之后你需要缩小服务器，你通常也没办法退换你购买的设备。🥲

对于公司来说，采用本地托管意味着将资源何经理分配到非公司目标上。

![image-221](https://www.freecodecamp.org/news/content/images/2022/07/image-221.png)

我们想象中的 Notflix 服务器机房

![image-222](https://www.freecodecamp.org/news/content/images/2022/07/image-222.png)

实际的画面

当需要处理精密或者私人信息的时候，本地托管还是能派上用场的。假设这个软件需要处理一个发电厂或者私人的银行信息，软件公司会决定使用本地托管服务器来全权控制软件和硬件。

<h2 id="traditional-server-providers">传统服务器供应商</h2>

对于大多数公司来说一个更舒适的选择是传统服务器供应商。供应商有自己的服务器，并且提供租赁。你决定为你的项目使用什么样的硬件，并且提交月费（或者根据其他条件确定的费用）。

使用服务器供应商的好处是你不需要担心硬件相关的问题，供应商会处理好。软件公司只需要关注自己的主要目标，软件本身。

另一个好处是，扩展或者缩小变得更加方便自由。如果需要更多硬件，你就购买；如果不需要了，就停止付费。

一个知名供应商的例子是[hostinger](https://www.hostinger.com)。

<h2 id="hosting-on-the-cloud">云托管</h2>

如果你在科技圈呆过一阵子，你可能已经听说过不止一次”云“。咋一听，这好像是某种抽象的魔术，实际上云只不过是由 Amazon、Google 和 Microsoft 这样的大公司拥有的超大数据中心。

这些大公司拥有巨大的算力，这些算力并不是时时被利用。与其让这些硬件白白浪费钱，更聪明的做法是将这些算力商业化。

这就是云计算。数据中心可以利用这些算力，使用 **AWS** (Amazon 的 web 服务)、 **Google Cloud**或 Microsoft 的 **Azure**。
![image-219](https://www.freecodecamp.org/news/content/images/2022/07/image-219.png)

“云”实际的样子

提到云服务，一个很重要的知识点是存在不同的使用方式：

<h3 id="traditional">传统的</h3>

第一种方法与使用传统服务器提供商类似。您可以选择所需的硬件类型并按月支付费用。

<h3 id="elastic">弹性的</h3>

第二种方法利用了大多数供应商提供的“弹性”算力。“弹性”意味着你的应用使用的硬件大小会根据使用情况，自动放大或缩小。

例如，你开始使用的是 8gb 内存和 500gb 磁盘空间的服务器。如果服务器收到越来越多的请求并且这些容量不再足以提供良好的性能，系统可以自动执行垂直或水平扩展。

这样做的好处是，你预先配置服务器后，就没有必再担心它的变化。服务器自动扩展和缩减，你只需为使用的资源付费。

<h3 id="serverless">无服务的</h3>

使用云计算的另一种方式是使用无服务架构。

在这个模式中，没有接受所有请求并响应的服务器，而是独立的函数映射到访问点（类似于 API 端点）。

每当接受到一个请求，这些函数就会执行你编写的程序（链接数据库、执行 CRUD 等普通服务器会做的事情）。

无服务架构的好处是可以免去服务器维护和扩展。如果需要使用，你只需要编写执行的函数，函数会自动根据需要扩展或者缩小。

作为消费者，你只需要支付函数执行的次数以及函数执行持续时长的费用。

如果你想了解更多这方面的内容，[这里有一个介绍无服务架构的视频](https://www.youtube.com/watch?v=vxJobGtqKVM)。

<h3 id="lots-of-other-services">更多其他服务</h3>

你很容易发现无服务和弹性云计算提供的简单便捷的设置软件架构的方式。

除了提供服务器相关服务，云供应商还提供许多其他的解决方案，如：关系型和非关系型数据库、文件存储服务、缓存服务、认证服务、机器学习和数据处理服务、监控和性能分析等。这些服务都托管在云。

通过如[Terraform](https://www.terraform.io/)或 AWS 的[Cloud formation](https://aws.amazon.com/es/cloudformation/)这样的工具，我们甚至可以通过编写代码来设置基础架构，也就是说我们可以花几分钟编写脚本来设置服务器、数据库等在云上的内容。

对于软件工程来说这是颠覆想象的举措，这也给开发者提供了巨大的便利。云计算提供了丰富的解决方法应对小微项目，也可以处理好非常大的数字产品。这也是为什么越来越多的软件工程项目选择在云上搭建基础架构。

如前文所诉，时下最知名且最常用的云有[AWS](https://aws.amazon.com/)、[Google Cloud](https://cloud.google.com/)和[Azure](https://azure.microsoft.com/)。 当然还有其他的选择如[IBM](https://www.ibm.com/cloud)、[DigitalOcean](https://www.digitalocean.com/)和[Oracle](https://www.oracle.com/cloud/)。

大部分云供应商都提供同样的服务，虽然服务的命名不相同。同样是无服务功能，在 AWS 被叫做"lambdas"，在 Google Cloud 被叫做"cloud functions“。

<h1 id="different-folder-structures-to-know">不同的文件夹结构</h1>

目前我们讨论的架构指的是基础架构的组织和托管，现在让我们看看一些代码，以及架构在文件结构和代码模块化方面的作用。

<h2 id="all-in-one-place-folder-structure">全在一个文件夹中的结构</h2>

为了演示为什么文件夹结构很重要，我们一起来搭建一个简单的示例 API。我们将使用一个模拟的数据库，名为兔子🐰🐰，这个 API 会执行[CRUD](https://www.freecodecamp.org/news/crud-operations-explained/) 操作，我们将使用 Node 和 Express 来搭建。

下图是我们的第一步，没有任何文件夹结构，我们的仓库包含`node modules`文件夹，`app.js`、 `package-lock.json` 和 `package.json` 文件。

![image-227](https://www.freecodecamp.org/news/content/images/2022/07/image-227.png)

在`app.js`文件包含一个小服务器，虚拟 DB(数据库）和两个端点：

```javascript
// App.js
const express = require('express');

const app = express()
const port = 7070

// 虚拟DB
const db = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Joe' },
    { id: 4, name: 'Jack' },
    { id: 5, name: 'Jill' },
    { id: 6, name: 'Jak' },
    { id: 7, name: 'Jana' },
    { id: 8, name: 'Jan' },
    { id: 9, name: 'Jas' },
    { id: 10, name: 'Jasmine' },
]

/* 路由 */
app.get('/rabbits', (req, res) => {
    res.json(db)
})

app.get('/rabbits/:idx', (req, res) => {
    res.json(db[req.params.idx])
})

app.listen(port, () => console.log(`⚡️[server]: Server is running at http://localhost:${port}`))
```

测试两个端点，发现它们运行正常：

```
http://localhost:7070/rabbits

# [
#   {
#     "id": 1,
#     "name": "John"
#   },
#   {
#     "id": 2,
#     "name": "Jane"
#   },
#   {
#     "id": 3,
#     "name": "Joe"
#   },
#   ....
# ]

###

http://localhost:7070/rabbits/1

# {
#   "id": 2,
#   "name": "Jane"
# }
```

这有什么问题吗？其实没有，一切运行良好。但当代码库变得更大更复杂，我们在 API 中添加新的功能后，问题就会浮现。

这和我们讨论单体式架构的问题一样，一开始把所有内容放在一个地方很方便，但是随着内容变得更大更复杂，这个方式就会让人困惑。

根据模块化原则，更好的处理方法是使用不同的文件夹和文件来执行不同的责任和行为。

为了更好地演示，让我们给 API 添加新的功能，看看我们怎么使用模块的方法来给文件夹结构添加不同层级。

<h2 id="layers-folder-structure">分层文件夹结构</h2>

分层文件夹结构是将关注点和责任分配到不同的文件夹和文件中，仅允许在特定的文件夹和文件中进行直接通信。

一个项目应该有几个层级，每个层级如何命名，应该处理什么行为都是需要讨论的问题。让我们一起来看看我的例子：

我们的应用程序将有五个层级，并以下面的顺序排列：

![layers](https://www.freecodecamp.org/news/content/images/2022/07/layers.png)

应用程序分层

-   应用层（application layer)将处理服务器的基本设置，并且连接到路由（下一层）。
-   路由层(routes layer)将定义所有路由以及连接到控制器层（下一层）。
-   控制器层(controllers layer)是每个端点的实现具体逻辑，并且连接到模型层（下一层，你已经知道这是怎么一回事了……）。
-   模型层(model layer)是与虚拟数据库的交互逻辑。
-   最终持久层(persistence layer)存储了所有数据。

采用这样的方法就更有结构感，关注点也实现了分离。这个方法看上去比较像样板，但设置以后，这样的结构能够帮助我们清晰地了解文件夹和文件具体负责应用程序的哪个行为。

需要注意的是，在这样的结构中层级间的**通信流是确定的**，这样这个结构才成立。

也就是说一个请求必须先通过第一层，然后是第二层，然后第三层，以此类推。请求不能够跳过层级，因为这样会使得结构的逻辑混乱，就借助不了组织和模块化带来的好处。

![layers--1--1](https://www.freecodecamp.org/news/content/images/2022/07/layers--1--1.png)

结构的另一种表现形式

让我们看一些代码，以上面的分层结构为基础，我们的文件夹结构如下：

![image-229](https://www.freecodecamp.org/news/content/images/2022/07/image-229.png)

-   一个名为 `db`的新文件夹保存所有数据文件
-   另一个名为`rabbits`的文件夹包含所有路由、控制器和模型
-   `app.js`设置服务器，并与路由连接

```javascript
// App.js
const express = require('express');

const rabbitRoutes = require('./rabbits/routes/rabbits.routes')

const app = express()
const port = 7070

/* 路由 */
app.use('/rabbits', rabbitRoutes)

app.listen(port, () => console.log(`⚡️[server]: Server is running at http://localhost:${port}`))
```

-   `rabbits.routes.js` 连接实体的端点和对应控制器的路由（执行请求到达端点的函数）。

```javascript
// rabbits.routes.js
const express = require('express')
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()

const { listRabbits, getRabbit, editRabbit, addRabbit, deleteRabbit } = require('../controllers/rabbits.controllers')

const router = express.Router()

router.get('/', listRabbits)

router.get('/:id', getRabbit)

router.put('/:id', jsonParser, editRabbit)

router.post('/', jsonParser, addRabbit)

router.delete('/:id', deleteRabbit)

module.exports = router
```

-   `rabbits.controllers.js`处理每个端点的逻辑。在这里函数接受输入，然后处理输出和返回。 😉 另外，每一个控制器都连接到对应的模型函数（处理数据相关的操作）。

```javascript
// rabbits.controllers.js
const { getAllItems, getItem, editItem, addItem, deleteItem } = require('../models/rabbits.models')

const listRabbits = (req, res) => {
    try {
        const resp = getAllItems()
        res.status(200).send(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

const getRabbit = (req, res) => {
    try {
        const resp = getItem(parseInt(req.params.id))
        res.status(200).send(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

const editRabbit = (req, res) => {
    try {
        const resp = editItem(req.params.id, req.body.item)
        res.status(200).send(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

const addRabbit = (req, res) => {
    try {
        console.log( req.body.item )
        const resp = addItem(req.body.item)
        res.status(200).send(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

const deleteRabbit = (req, res) => {
    try {
        const resp = deleteItem(req.params.idx)
        res.status(200).send(resp)
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports = { listRabbits, getRabbit, editRabbit, addRabbit, deleteRabbit }
```

-   `rabbits.models.js` 定义了使用 CRUD 处理数据库的函数。每一个函数都代表了一种行为（读取一个数据、读取所有数据、编辑数据、删除数据等），这个文件与 DB 连接。

```javascript
// rabbits.models.js
const db = require('../../db/db')

const getAllItems = () => {
    try {
        return db
    } catch (err) {
        console.error("getAllItems error", err)
    }
}

const getItem = id => {
    try {
        return db.filter(item => item.id === id)[0]
    } catch (err) {
        console.error("getItem error", err)
    }
}

const editItem = (id, item) => {
    try {
        const index = db.findIndex(item => item.id === id)
        db[index] = item
        return db[index]
    } catch (err) {
        console.error("editItem error", err)
    }
}

const addItem = item => {
    try {
        db.push(item)
        return db
    } catch (err) {
        console.error("addItem error", err)
    }
}

const deleteItem = id => {
    try {
        const index = db.findIndex(item => item.id === id)
        db.splice(index, 1)
        return db
        return db
    } catch (err) {
        console.error("deleteItem error", err)
    }
}

module.exports = { getAllItems, getItem, editItem, addItem, deleteItem }
```

-   最后，`db.js`托管了我们的模拟数据库。在真实的项目中，这里是连接真实数据库的地方。

```javascript
// db.js
const db = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Joe' },
    { id: 4, name: 'Jack' },
    { id: 5, name: 'Jill' },
    { id: 6, name: 'Jak' },
    { id: 7, name: 'Jana' },
    { id: 8, name: 'Jan' },
    { id: 9, name: 'Jas' },
    { id: 10, name: 'Jasmine' },
]

module.exports = db
```

如你所见，现在就有更多的文件夹和文件。但是最为回报，我们的代码库变得结构感更加明显，并且组织更加清晰。每一个代码都呆在应该在的地方，文件之间的通信也被清晰地定义了。

这样的组织形式能够极大地方便添加新的功能、修改代码和改 bug。

一旦你熟悉了这样的文件夹结构，知道去哪儿找你想要的内容。你就会发现在更短更小的文件中工作，比在一到两个巨大的文件中滑动寻找想要的内容要方便得多。

我也支持为应用的每一个实体（在我的例子中是兔子）创建一个文件夹。这样我们就能够更清晰地知道每一个文件和什么内容相关。

假设我们需要添加新的功能去添加、修改、删除猫咪或者小狗，我们就为这些新的动物创建文件夹，每一个文件夹里包含各自的路由、控制器和模型文件。这一方法就是将关注点分离。👌👌

<h2 id="mvc-folder-structure">MVC文件夹结构</h2>

MVC 的全称是**Model View Controller（模型视图控制器）**。 我们可以说 MVC 结构就像是分层结构的简化版，并包含了应用程序的前端 (UI)。

在这个结构中只有三层：

-   视图层负责渲染 UI.
-   控制层负责定义路由和路由背后的逻辑
-   模型层负责和数据库的交互

![mvc--2-](https://www.freecodecamp.org/news/content/images/2022/07/mvc--2-.png)

和之前的一样，每一个层级只和下一个层级交互，所以必须是清晰定义的通信流。

![mvc](https://www.freecodecamp.org/news/content/images/2022/07/mvc.png)

另一种展现层级的方式

有许多实现 MVC 结构的框架 (如[Django](https://www.djangoproject.com/) 或 [Ruby on Rails](https://rubyonrails.org/) )。如果要在 Node 和 Express 中使用这个结构，我们需要借助模版引擎，如[EJS](https://ejs.co/)。

如果你对模版引擎这个概念不是太熟悉的话，可以把它理解成更容易渲染的 HTML，它利用了如变量、循环和条件句这些编程特性使得渲染更加容易（和 React 中的 JSX 很像）。

在下面的例子中，我们会使用 EJS 文件来创建每一个页面，并且由控制器来处理响应，传入到对应的响应变量。

文件夹结构如下：

![image-230](https://www.freecodecamp.org/news/content/images/2022/07/image-230.png)

-   我们删掉了大部分文件夹，但保留了`db`、`controllers`和 `models`。
-   我们添加了`views`文件夹保存我们需要渲染的页面或响应。
-   `db.js`和`models.js`保持不变。
-   `app.js`如下：

```javascript
// App.js
const express = require("express");
var path = require('path');

const rabbitControllers = require("./rabbits/controllers/rabbits.controllers")

const app = express()
const port = 7070

// Ejs 设置
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, './rabbits/views'))

/* 控制器 */
app.use("/rabbits", rabbitControllers)

app.listen(port, () => console.log(`⚡️[server]: Server is running at http://localhost:${port}`))
```

-   `rabbits.controllers.js`用来定义路由、连接对应的模型函数以及渲染每一个请求对应的视图。可以看到在每一个渲染方法中我们传入了请求响应作为参数。 😉

```javascript
// rabbits.controllers.js
const express = require('express')
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()

const { getAllItems, getItem, editItem, addItem, deleteItem } = require('../models/rabbits.models')

const router = express.Router()

router.get('/', (req, res) => {
    try {
        const resp = getAllItems()
        res.render('rabbits', { rabbits: resp })

    } catch (err) {
        res.status(500).send(err)
    }
})

router.get('/:id', (req, res) => {
    try {
        const resp = getItem(parseInt(req.params.id))
        res.render('rabbit', { rabbit: resp })

    } catch (err) {
        res.status(500).send(err)
    }
})

router.put('/:id', jsonParser, (req, res) => {
    try {
        const resp = editItem(req.params.id, req.body.item)
        res.render('editRabbit', { rabbit: resp })

    } catch (err) {
        res.status(500).send(err)
    }
})

router.post('/', jsonParser, (req, res) => {
    try {
        const resp = addItem(req.body.item)
        res.render('addRabbit', { rabbits: resp })

    } catch (err) {
        res.status(500).send(err)
    }
})

router.delete('/:id', (req, res) => {
    try {
        const resp = deleteItem(req.params.idx)
        res.render('deleteRabbit', { rabbits: resp })

    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router
```

-   最后，在视图文件中，我们将变量作为参数并且渲染为 HTML。

```html
<!-- Rabbits view -->
<!DOCTYPE html>
<html lang="en">
    <body>
        <header>All rabbits</header>
        <main>
            <ul>
                <% rabbits.forEach(function(rabbit) { %>
                    <li>
                        Id: <%= rabbit.id %>
                        Name: <%= rabbit.name %>
                    </li>
                <% }) %>
            </ul>
        </main>
    </body>
</html>
```

```html
<!-- Rabbit view -->
<!DOCTYPE html>
<html lang="en">
    <body>
        <header>Rabbit view</header>
        <main>
                <p>
                    Id: <%= rabbit.id %>
                    Name: <%= rabbit.name %>
                </p>
        </main>
    </body>
</html>
```

打开浏览器，登陆[`http://localhost:7070/rabbits`](http://localhost:7070/rabbits)，会得到：

![image-232](https://www.freecodecamp.org/news/content/images/2022/07/image-232.png)

或者`[http://localhost:7070/rabbits](http://localhost:7070/rabbits)/2` 会得到：

![image-233](https://www.freecodecamp.org/news/content/images/2022/07/image-233.png)

这就是 MVC!

![bugs-bunny-looney-tunes](https://www.freecodecamp.org/news/content/images/2022/07/bugs-bunny-looney-tunes.gif)

<h1 id="conclusion">总结</h1>

希望这些示例能够帮助你理解软件工程世界里的“架构”。

如我在文章开头中所说，架构是一个非常巨大且复杂的概念，包含了非常多的内容。

在这篇文章中，我们介绍了架构模式和系统、托管的选择以及云供应商，以及一些通用的文件夹结构。

我们还学习了垂直和水平扩展、单体式应用和微服务、弹性和无服务云计算……非常多的内容。但这些只是冰山一角！请再接再厉，探索更多内容。 💪💪

希望你喜欢这篇文章，并且有所收获，你可以在[LinkedIn](https://www.linkedin.com/in/germancocca/)或[Twitter](https://twitter.com/CoccaGerman)上关注我。 
  
这是一首[告别曲](https://www.youtube.com/watch?v=PDilu87kQCk)， 哈哈...调皮一下！ 🤷‍♂️

![7zSe](https://www.freecodecamp.org/news/content/images/2022/07/7zSe.gif)

干杯！下篇文章见！ ✌️
