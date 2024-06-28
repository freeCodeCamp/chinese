> - 原文地址：[The Ultimate Node.js Production Checklist](https://www.freecodecamp.org/news/node-js-production-checklist/)
> - 原文作者：[Mehul Mohan](https://www.freecodecamp.org/news/author/mehulmpt/)
>
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![The Ultimate Node.js Production Checklist](https://www.freecodecamp.org/news/content/images/size/w2000/2020/03/screely-1585049597841.png)

你在生产环境中做对了 Node 这件事吗？让我们看看人们在生产环境中运行 Node 的一些常见错误（直接来自我自己的项目--如[codedamn](https://codedamn.com)），以及如何减轻它们。

当你部署 Node 应用程序时，你可以把它作为你在生产环境中的检查清单。由于这是一篇关于生产环境准备的文章，当你在本地系统上开发应用程序时，其中很多内容并不适用。

## 以 cluster（集群）模式运行/separate node 进程

记住，Node 是单线程（single threaded）的。它可以将很多事情（如 HTTP 请求和文件系统的读写）委托给操作系统，由它在多线程（multithreaded）环境下处理。但是，你写的代码，即业务逻辑，仍然是在单线程中运行。

通过在单线程中运行，你的 Node 进程总是被限制在你的 CPU 上一个核心。因此，如果你的服务器有多个 CPU 核，那么你在服务器上只运行一个 Node 进程就是在浪费计算能力。

`running Node just once`是什么意思？你看，操作系统有一个内置的调度器，它负责程序进程如何在机器的 CPU 上分配。当你在一台双核机器上只运行 2 个进程时，操作系统会决定最好在不同的 CPU 核上分别运行这两个进程，以挤出最大的性能。

对 Node 也需要做类似的事情。在这一点上，你有两个选择:

1. **Run Node in cluster mode -** 集群（cluster）模式是一种架构，Node 本身已经支持。简单地说，Node 会分叉（forks）出更多自己的进程，并通过一个主进程（master process）分配负载。
2. **Run Node processes independently -** 这个选项与上面的略有不同，因为你现在没有一个主进程来控制子 Node 进程。这意味着，当你产生不同的 Node 进程时，它们将完全独立运行。没有共享内存，没有 IPC，没有通信，什么都没有。

根据[stackoverflow answer](https://stackoverflow.com/a/47122606/2513722), 后者(选择 2) 的性能好得多，比(选择 1)，但设置起来有点麻烦。

为什么呢？因为在 Node 应用中，不仅有应用逻辑，而且当你在 Node 代码中设置服务时，几乎总是需要绑定端口。而一个应用程序的代码库不能在同一个操作系统上绑定两次相同的端口。

然而，这个问题是很容易解决的。环境变量、Docker 容器、NGiNX 前端代理（frontend proxy）等等都是这方面的一些解决方案。

## 限制你的接入点（endpoints）速率

让我们面对现实吧。世界上不是每个人都对你的服务器抱有良好的意图。当然，像 DDoS 这样的攻击是非常复杂的，甚至像 GitHub 这样的巨头在发生这样的事情时也会瘫痪。

但是，你至少可以防止一个脚本小子对你的服务器上有一个系统开销昂贵的 API 端点（endpoints）进行攻击，因为没有任何速率限制，导致你的服务器瘫痪。

如果你使用 Express 和 Node，有 2 个好用的包（packages），它们可以无缝地一起工作，在第 7 层限制流量。:

1. Express Rate Limit - [https://www.npmjs.com/package/express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
2. Express Slow Down - [https://www.npmjs.com/package/express-slow-down](https://www.npmjs.com/package/express-slow-down)

Express Slow Down 实际上是给你的请求慢慢增加的响应延迟，而不是丢弃它们。这样一来，如果合法用户不小心 DDoS 了（在这里和那里点击按钮的超级活动），他们只是被减慢了速度，而不会被限制速率。

另一方面，如果有一个脚本小子在运行脚本来破坏服务器，Express 速率限制器会根据用户的 IP、用户账户或其他你想要的东西来监控和限制这个特定的用户。

速率限制也可以（应该！）通过 IP 地址应用在第 4 层（第 4 层意味着在发现内容之前阻止流量 - HTTP）。如果你愿意，你可以设置一个 NGiNX 规则，在第 4 层拦截流量，拒绝来自一个 IP 的流量，从而使你的服务器进程不至于不堪重负。

## 使用前端服务器（frontend server）使用 SSL

Node 提供了开箱即用的支持，使用`https`服务器模块和所需的 SSL 证书与浏览器进行 SSL 握手。

但是，让我们在这里说实话，无论如何，你的应用程序不应该首先关注 SSL。这不是应用逻辑应该做的事情。你的节点代码应该只负责处理请求，而不是对进出服务器的数据进行预处理和后处理。

SSL 终止（SSL termination）是指将流量从 HTTPS 转换为 HTTP。在这方面，有比 Node 更好的工具可用。我推荐 NGiNX 或 HAProxy。两者都有免费版本，可以完成工作，Node 不用处理 SSL 问题。

## 使用前端服务器（frontend server）来提供静态文件服务

同样，与其使用内置的方法如`express.static`来提供静态文件，不如使用前端的反向代理服务器如 NGiNX 来来处理磁盘上的静态文件。

首先，NGiNX 比 Node 做得更快（因为它是从头开始建立的，只做这个）。但它也从单线程的 Node 进程中接过文件服务，而 Node 可以把别的事做得更好。

不仅如此--像 NGiNX 这样的前端代理服务器还可以利用 GZIP 压缩技术帮助你更快地传送内容。你还可以设置过期标题、缓存数据等等，这不是我们应该期望 Node 做的事情（不过，Node 还是可以做到的）。

## 配置错误处理

正确的错误处理可以使你免于花费数小时的时间来调试和试图重现困难的错误。在服务器上，设置错误处理的架构特别容易，因为你是运行它的人。我推荐像[Sentry](https://sentry.io)与 Node 这样的工具，它可以记录、报告并在服务器因源代码中的错误而崩溃时向你发送电子邮件。

一旦到位，现在是时候在服务器崩溃时重新启动它了，这样整个网站就不会瘫痪几个小时，直到你手动将它重新启动。

为此，你可以使用像[PM2](https://www.npmjs.com/package/pm2),这样的进程管理器。或者更好的是，使用一个 docker 化的容器环境，使用诸如`restart: always`的策略，并设置适当的内存和磁盘限制。

Docker 设置确保即使你的容器在 OME 中运行，进程也会再次启动起来（这在 PM2 环境中可能不会发生，因为如果运行中的进程在某处有内存泄漏，操作系统可能会杀死 PM2）。

## 正确配置日志

所有的答案都在日志中。服务器黑客攻击、服务器崩溃、可疑的用户行为等。为此，你必须确保:

1. 每一个请求尝试都会被记录下来，包括 IP 地址/请求方式/访问路径，基本上可以记录尽可能多的信息（当然，密码和信用卡信息等私人信息除外）
2. 这可以通过[morgan](https://www.npmjs.com/package/morgan)软件包实现。
3. 在生产中设置**文件流日志（file stream logs）**，而不是控制台输出。这更快，更容易看到，并允许你将日志导出到在线日志查看服务。
4. 不是所有的日志信息都有同等的权重。有些日志只是用来调试的，而如果有些日志出现了，则可能预示着出现了裤衩的情况（比如服务器被黑或未经授权的访问）。使用 winston-logger 来记录不同级别的日志。
5. 设置**日志轮换（log rotation）**，这样你就不会在一个月左右后看到服务器的日志大小为 GB。
6. 在轮换（rotation）之后，**GZIP**你的日志文件。文本系统开销少（Text is cheap），而且可压缩性高，容易存储。只要文本日志被压缩了，而且你运行的服务器有相当大的磁盘空间（25GB 以上），你就不应该面临文本日志的问题。

## 结语

在生产中注意到一些做法是很容易的，这可以为你以后少流后悔得眼泪和节省调试的时间。请确保你遵循这些最佳做法，并让我知道你的想法，请在我的[推特](https://twitter.com/mehulmpt)反馈。

如果你喜欢这篇文章，让我们在社交媒体上交流。这是我的[Instagram](https://instagram.com/mehulmpt)和 [Twitter](https://twitter.com/mehulmpt)。我是超级活跃的人，很愿意和我聊天！让我们联系。

Peace!  
Mehul
