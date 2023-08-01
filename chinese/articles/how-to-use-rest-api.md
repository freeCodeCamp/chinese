> -  原文地址：[How to Use REST APIs – A Complete Beginner's Guide](https://www.freecodecamp.org/news/how-to-use-rest-api/)
> -  原文作者：[Alex Husar](https://www.freecodecamp.org/news/author/alex-husar/)
> -  译者：Papaya HUANG
> -  校对者：

![How to Use REST APIs – A Complete Beginner's Guide](https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/The-Complete-Guide-to-Understanding-and-Using-REST-APIs.png)

应用程序编程接口（API）是一个需要掌握的重要编程概念。如果花时间学习这些接口，你就可以更轻松地管理任务。

最常见的 API 之一就是 REST API。如果你曾经尝试过从另一个网站（如：Twitter 或 Github）上获取数据，你可能已经使用过这个 API。

那为什么理解 REST API 对你有帮助？REST API 是如何确保现代业务的连通性的？

在创建或者运行一个 API（这里特指 REST API）之前，你得先学习什么是 API。这篇文章会带着你一步一步理解 REST API 的基本原则，以及这些原则如何使得 REST API 成为强大的应用。

## **API 是如何工作的，我们为什么需要它？**

API 代表一组定义和协议。你需要使用 API 来开发和集成应用，因为 API 可以协调两个软件之间的数据交换，如信息供应商（服务器）和用户之间。

客户向生产商发出调用，生产商返回响应。API 规定了返回的可访问内容。

程序使用 API 进行通信、检索信息或执行功能。API 允许用户通过这一系统返回想要的结果。

简言之，API 就是用户（客户）和资源（服务器）之间的中间人。

当用户发出 API 请求或者浏览一个在线商城，会期望快速得到反馈，所以作为开发者你需要优化加载时间（参考——[优化麦进斗 TTFB (Time To First Byte)](https://onilab.com/blog/magento-ttfb-optimization/)）或者使用其他更适合你的内容管理系统（CMS）的性能提升策略。

集成 API 的原因包括：

-   精简资源、信息共享
-   通过[验证和定义权利](https://www.freecodecamp.org/news/authenticate-and-authorize-apis-in-dotnet5/)的手段来控制特定人群访问特定内容
-   安全性和控制权
-   无需了解软件细节
-   即便使用不同的技术，服务间也可以保持持续通信

## **REST API 概览**

![DUwmoHyRnoD1WovETSrQdSaIv8rh5WUVPxVjPN9_cvVokx7E4fZxzGyCY0_XMRA2cikjPkWIUDlXmtDqqGDX-KCzya5EVEEgxi8sEVwpVTeiHBNsqCULC-78QCE4dJ0_ieC1mQzn](https://lh3.googleusercontent.com/DUwmoHyRnoD1WovETSrQdSaIv8rh5WUVPxVjPN9_cvVokx7E4fZxzGyCY0_XMRA2cikjPkWIUDlXmtDqqGDX-KCzya5EVEEgxi8sEVwpVTeiHBNsqCULC-78QCE4dJ0_ieC1mQzn)

RESTful 指的是一种软件架构，即“表现层状态转移”（Representational State Transfer)。你可能在有关制定信息交换系统（web 服务）标准的内容中听到过这个表达。

web 服务通过无状态协议使得在线资源由文本的方式呈现，并且可以读取和处理这些在线资源。客户端通过著名的 HTTP 协议进行数据获取、更新和删除。

REST 于 2000 年被首次提出，目的是通过对 API 采取特定的规范来提升 API 的性能、可扩展性并简化 API。

由于可以广泛兼容各种设备和应用，REST API 变得越来越受欢迎。下图列举了使用 REST API 的一些场景：

![Jk2xFwUgtgRzOuJuSa9kiWPPe51CN0qLd2hXMJ3F2SyW6MM10Gzq2qIY36dDQQj6fPJPG7Axl3q431QumWwi3WtYyFC1FA5TcI1i7i5PeQOO38tpdSCgIF0dJktnVhoWvVjAwFOK](https://lh4.googleusercontent.com/Jk2xFwUgtgRzOuJuSa9kiWPPe51CN0qLd2hXMJ3F2SyW6MM10Gzq2qIY36dDQQj6fPJPG7Axl3q431QumWwi3WtYyFC1FA5TcI1i7i5PeQOO38tpdSCgIF0dJktnVhoWvVjAwFOK)

### 1. Web 使用

REST 并没有限制客户端技术，因此适用于各种各样的项目，如：

-   web 开发
-   iOS 应用
-   IoT 设备
-   Windows 手机应用

因为不必拘泥于某一种客户端技术栈，所以你可以使用 REST 为公司搭建任意基础设施。

### 2\. 云应用

由于无状态特性，调用 REST API 对于云应用来说是理想的解决方案。一旦出现问题，你可以重新部署无状态组件，组件会管理流量转移。

### 3\. 云计算

与服务连接的 API 需要控制 URL 的解码方式，所以 REST 在云服务中作用巨大。

云计算和微服务的发展使得 RESTful API 架构在将来会成为一种常态。

## REST API 是如何运作的?

数据（如：图像、视频和文本）实体化了 REST 的资源。客户浏览一个特定的 URL，并向服务器发送请求以获得响应。

![HwYHNtAz8M84Tggswzk662nm_dyGUA77st12KGsiqw4rVBGqhJM2gQ5wgL2sL8ZhWmwOGsoEJx6Uqt7TdxU4Bkbg_uccr2UVTXtWsxnR495yZReGoY_reZEd9rq5_9vnjiaUUBs2](https://lh4.googleusercontent.com/HwYHNtAz8M84Tggswzk662nm_dyGUA77st12KGsiqw4rVBGqhJM2gQ5wgL2sL8ZhWmwOGsoEJx6Uqt7TdxU4Bkbg_uccr2UVTXtWsxnR495yZReGoY_reZEd9rq5_9vnjiaUUBs2)

### **REST API 背后的概念**

一个请求（你访问的 URL）包含以下四个方面：

-   **终点（路径）**， 即以 `root-endpoint/?`为结构的 URL
-   **请求方式**， 有五种请求方式： GET, POST, PUT, PATCH, DELETE
-   **请求头**， 包含各种功能，如信息验证以及请求体的内容(可以使用 `-H`或`--header`来发送 HTTP 请求头)
-   **数据（请求体）**， 是你通过 `-d`或`--data`向服务器发送的 POST, PUT, PATCH 或 DELETE 请求。

HTTP 请求允许你使用以下方式处理数据，如：

-   POST 请求创建记录
-   GET 请求从服务器读取或获取资源（如图像文件或者其他资源合集）
-   PUT 和 PATCH 请求更新记录
-   DELETE 请求服务器删除某个资源

这四种方式可以总结为 CRUD（增删查改）：建立（Create）、读取（Read）、改正（Update）和删除（Delete）。
![Quydyrq2Zw2Mh3uJj4G9LE40DhjJyWLjRCU9-hqs0uKt-hGCgoyGVP9eiU_6IBnb6GwxsILeu9kqjO5LQ6s7LBmHDtbksnqb13YtPoCKRq062zXi1Pz4wf0GAO27maHMlhamixAz](https://lh5.googleusercontent.com/Quydyrq2Zw2Mh3uJj4G9LE40DhjJyWLjRCU9-hqs0uKt-hGCgoyGVP9eiU_6IBnb6GwxsILeu9kqjO5LQ6s7LBmHDtbksnqb13YtPoCKRq062zXi1Pz4wf0GAO27maHMlhamixAz)

服务器使用以下格式向客服端发送数据：

-   [HTML](https://www.freecodecamp.org/news/html-best-practices/)
-   JSON (由于其独立于计算机语言以及人机都可以访问的特性，这是目前最常用的格式)
-   XLT
-   PHP
-   Python
-   纯文本

## 为什么使用 REST API?

选择 REST 而不是其他的 API，如 SOA 是出于一系列原因，比如：REST 易于扩展、操作灵活、可移植性和独立性。

![yJ2QDrpGbA-RpzwhXOXr1yl9aGTvVHXeiuyBvFxsMtE5KQu2wRmNLwlCX7cNGOlp1TjRK-P9VsBsFaGRNkxZw-QWvggxqXLYFtLg-THClHzB-5GJlMX6hGkY3DQnFh1YpzkHt2iE](https://lh4.googleusercontent.com/yJ2QDrpGbA-RpzwhXOXr1yl9aGTvVHXeiuyBvFxsMtE5KQu2wRmNLwlCX7cNGOlp1TjRK-P9VsBsFaGRNkxZw-QWvggxqXLYFtLg-THClHzB-5GJlMX6hGkY3DQnFh1YpzkHt2iE)

### 不依赖项目架构

独立运行的客户端和服务器意味着开发者不受任何项目部分的约束。由于 REST API 的自适应，开发者可以分别开发各个部分，互不打扰。

### 可移植性和适应性

REST API 仅当某个请求的数据发送成功时运作。你可以从一个服务器迁移到另一个服务器，并且随时更新数据。

### 可在未来扩展项目

由于客户端和服务器相互独立，开发者可以迅速开发产品。

## **RESTful 架构的风格特征**

若使用 SOAP、XML-RPC 这类 API，开发者必须构思出严谨的架构。但是 REST API 与众不同，REST 广泛支持数据类型，也可以使用几乎任何编程语言编写。

六种 REST 架构限制是设计解决方案的原则，具体如下：

![XRsmwgFoTf1sCI3hZf6n5DxHXDqHclunxf6ocqxjUVgWPss5KHiz8wm4fXYzCJ9mkijpfwhGc-YzSO_R1fm9JtOej1T1SQJwngs-wK_Lz0DhUwI2LfCOQWsZvm88nVlkGkmBgV-E](https://lh5.googleusercontent.com/XRsmwgFoTf1sCI3hZf6n5DxHXDqHclunxf6ocqxjUVgWPss5KHiz8wm4fXYzCJ9mkijpfwhGc-YzSO_R1fm9JtOej1T1SQJwngs-wK_Lz0DhUwI2LfCOQWsZvm88nVlkGkmBgV-E)

### **1\. 统一接口（一致的用户接口）**

这个概念规定不论源头是哪里，所有请求同一个资源的 API 必须一致，即使用同一种语言。统一标识符（URI）和关联数据一一对应，如用户名或者电子邮件地址。

统一接口原则的另一个要求是信息必须是自我描述的。即信息必须是服务器可以理解并决定如何处理的（如，请求类型、MIME 类型等）。

### **2\. 客户端和服务器分离**

REST 架构风格采取了特殊的方式实现客户端和服务器。也就是说，客户端和服务器可以在不知道彼此的情况下实现。

例如，客户端仅使用统一标识符（URI）请求资源，并不能使用其他方式和服务器通信。同时，服务器无法影响客户端，仅通过 HTTP 协议传输必要的数据。

这意味着你可以随时修改客户端代码，完全不影响服务器的运行。

这同样适用于服务器：改变服务端的代码不会影响客户端的运行。

你可以保持客户端和服务器程序的模块化和独立性，只要两边都知道向对方发送什么格式的信息就行。

将用户接口问题和数据存储限制分离的好处是什么呢？我们提高了接口的灵活性，可以跨不同平台使用，并且提高了扩展的可能。

另外，每一个组件从分离受益，因为组件可以独立进化。一个 REST 接口可以帮助不同的客户端：

-   访问相同的 REST 终点
-   执行相同的活动
-   获得相同的响应

### **3\. 客户端和服务器之间的无状态通信**

基于 REST 的系统是无状态的，意味着客户端状态对于服务器来说未知，反之亦然。这样的限制可以确保服务器和客户端之间理解每条信息，即便是上一条信息不知情的情况下。

为了加强对无状态的限制，你必须使用资源而非命令。资源是网络的名词。使用名词的目的是描述你想要从其他服务获取或者通信的对象。

你可以在不影响这个系统的情况下控制、改变以及复用组件，所以限制的好处包括：

-   稳定性
-   速度
-   RESTful 应用的可扩展性

注意每一个请求必须包括你想要的所有信息，这个请求才得以完成。客户端必须保存会话状态，因为服务端不会存储和请求相关的任何数据。

### **4\. 可缓存数据**

REST 要求在可能的情况下缓存服务端和客户端的资源。网络发展到今天，数据和响应的缓存对于客户端性能提升至关重要。

这对用户有什么影响？一个管理良好的缓存可以减少客户端的通信。

缓存也增加了服务器扩展的可能性，因为这样减轻了服务器的任务压力。缓存提高了页面加载的速度，同时也使得用户可以在不需要网络连接的情况下浏览之前浏览过的内容。

### **5\. 分层系统架构**

![DBk2dcqnTMZdz-dBA0sFDUe5cQu71VxMqG8pW-ux4rqNvkVcsixRNR_ZyuY1z6UeWWZ5NRV11FPIv8XYK86EGr2G-Nnb7O_njC9PER6a5TdmfpZ2qmRTI7f9P--S7QU50cYwD9EC](https://lh3.googleusercontent.com/DBk2dcqnTMZdz-dBA0sFDUe5cQu71VxMqG8pW-ux4rqNvkVcsixRNR_ZyuY1z6UeWWZ5NRV11FPIv8XYK86EGr2G-Nnb7O_njC9PER6a5TdmfpZ2qmRTI7f9P--S7QU50cYwD9EC)

RESTful 分层架构也是我们要讨论的一个限制。这个原则是将特定功能的层分到一组。

REST API 的层各司其职，并且按层次顺序排列。例如，第一层是负责从服务器存储数据的，第二层就负责从另一个服务器部署 API，第三层就负责从再一个服务器验证请求。

这些分层像中间人一样防止服务器和客户端直接通信。所以，客户端并不知道他们的请求发送给了哪一个服务器或者组件。

在传输信息前每一层各司其职意味着什么？这样可以提高 API 整体的安全性和灵活性，因为增加、修改或者删除 API 都不会影响其他接口组件。

### **6\. 按需编码（非强制性）**

使用 REST API 最常见的场景是传输如 XML 或者 JSON 格式的静态资源。

这样的架构风格方便用户以 Java 小程序或脚本（JavaScript）的形式来下载并运行代码。例如，客户端可以调用 API 来检索和渲染 UI 插件的代码。

## **使用 REST API 面临的挑战**

了解 REST API 的设计和架构限制后，你需要了解使用这种架构风格将迎接的问题：

![FnzdrS-v1CIkyY6lWVBZymkIbLGDOQb4ZFAPqcJD6_EDL9QL1Xd3KGwd2SP24GfYO2CTwO4-9ra4a8Dc8gOvokndr3uO7Zt0-VOjQjR6bdcLrSH3SWK0vmAeg5mZlEavHkgpsIhh](https://lh3.googleusercontent.com/FnzdrS-v1CIkyY6lWVBZymkIbLGDOQb4ZFAPqcJD6_EDL9QL1Xd3KGwd2SP24GfYO2CTwO4-9ra4a8Dc8gOvokndr3uO7Zt0-VOjQjR6bdcLrSH3SWK0vmAeg5mZlEavHkgpsIhh)

### REST 终点的一致性

无论 URL 如何构造，API 都应该保持一致。但随着可用组合方法数量的增加，保持大型代码库的一致性变得越来越难。

### REST API 的特性版本

API 需要定期[更新或控制版本](https://www.freecodecamp.org/news/how-to-version-a-rest-api/)以防止兼容性问题。旧版本的终点保持运行常常会增加工作量。

### 大量认证方式

你可以限制特定用户访问特定资源。比方说，你可以决定哪一个第三方服务器可以访问顾客的电子邮箱地址或者其他的敏感信息，以及服务器可以对这个信息做什么。

但 20 个各不相同的认证方式会导致初始化 API 调用变得十分复杂。这一初始化难题使得开发者不愿意推进项目进展。

### REST API 的安全弱点

尽管 RESTful API 是分层结构，仍存在安全隐患。例如一个应用因为缺乏加密而不够安全，就会泄露敏感数据。

又比如黑客每秒发送成千上万的 API 请求，导致 DDoS 攻击，或者采用其他滥用 API 服务的行为，使服务器崩溃。

### 过量的数据收集和请求

服务器可能会返回一个请求的所有信息，有时是没有必要的。或者你需要运行多个请求来获取有用的信息。

## **总结**

毫不意外 API 会在未来简化 web 通信。API 的目的就是助力 web 应用的通信和数据的共享。

通过开发强大且富有创造性的系统，API 帮助在线业务的发展。随着 API 架构的进化，会出现更加轻量、更灵活的变体，这对于手机应用和分散网络的发展至关重要。

在这篇文章中你学习了 REST API 的基础。
