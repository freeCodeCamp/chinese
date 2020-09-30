> -   原文地址：[How to run GETH from a Docker container](https://www.freecodecamp.org/news/how-to-run-geth-from-a-docker-container-b6d30620ca74/)
> -   原文作者：Vince Tabora
> -   译者：@too
> -   校对者：

![如何使用 Docker 容器来运行 GETH How to run GETH from a Docker container](https://cdn-media-1.freecodecamp.org/images/1*QZk8YSNM8shw4Trn8YtvAA.png)

by Vince Tabora

在计算机上安装以太坊节点客户端可能是一个繁琐的过程。使用 Docker 客户端可以更简单地完成此操作。这是从 Docker 容器内运行 \***\*GETH\*\***（Ethereum-Go）节点客户端的指南。GETH 是以太坊协议的 GoLang 实现。可以从 Docker 中心存储库中获取运行环境的映像。

[\***\*GoEthereum\*\***][1] 网站上介绍有以下的映像是可供使用的：

-   `ethereum/client-go:latest` 是 Geth 的最新开发版本
-   `ethereum/client-go:stable` 是 Geth 的最新稳定版本
-   `ethereum/client-go:{version}` 是指定版本号的 Geth 的稳定版本
-   `ethereum/client-go:release-{version}` 是指定的版本系列中 Geth 的最新稳定版本

在容器运行的时候，默认会打开以下端口

-   `8545` TCP，用作基于 HTTP 的 JSON RPC API
-   `8546` TCP，用作基于 WebSocket 的 JSON RPC API
-   `30303` TCP 和 UDP，用作运行 P2P 协议的网络
-   `30304` UDP，用作 P2P 协议的新 Peer 发现覆盖（new peer discovery overlay）

必须在要运行容器的计算机上安装 Docker 客户端软件。只有安装了 Docker 客户端才能运行容器。根据您的操作系统，需要安装对应版本的客户端。

Windows，Linux 和 MacOS 有单独的版本。该容器甚至可以在 AWS 上提供的 Linux 实例上运行，就像一般装好的 Linux 一样。安装 Docker 客户端后，底层平台无关紧要。这些命令对所有人来说都是一样的（是在 Docker 里运行的）

## 获取映像文件

在 Linux 或 MacOS 上打开\***\*终端\*\***，或从 Windows 打开 \***\*PowerShell\*\*** 命令提示符。在 CLI 提示符下，键入以下命令：

\***\*docker pull ethereum/client-go\*\***

这将 Docker 映像从以太坊开发人员上传的中心存储库中获取下载回来。执行此命令后，应显示以下或类似的信息：（缺图？译注）

我已经拉取了映像，所以可能看起来和你的情况不同。当您执行 pull 命令时，它将始终下载最新的可用映像，这是一种很好的做法。

## 运行节点

现在，您可以通过发出以下命令来启动节点：

![](https://www.freecodecamp.org/news/content/images/2019/08/image-49.png)

我们会使用标志选项 \***\*\-i\*\*** 和 \***\*\-t\*\*** 来运行节点以显示来自容器的信息。该 \***\*\-p\*\*** 表示使用的端口号，在这里就是 30303。同样，该命令可以不带标志运行，它会使用容器内的默认端口和设置。

终端应显示以下信息。

![](https://www.freecodecamp.org/news/content/images/2019/08/image-51.png)

INFO 开头的行里的配置信息显示了哪些节点客户端软件是已安装的。节点客户端正在运行以太坊软件的最新版本（在此发布时），该版本是 Constantinople，是块高度为 7280000 的用户激活硬分叉。

在 JSON-RPC API 中运行时：

![](https://www.freecodecamp.org/news/content/images/2019/08/image-52.png)

请注意，运行选项 rpcaddr “0.0.0.0”并不安全，因为会向所有的通讯流量打开你的节点。如果您的 ETH 钱包已解锁，黑客可以通过这种方式到达您的节点并拿走您的电子货币。我本文中对安全性不详细叙述，但您可以在[此处][2]阅读更多相关信息（保护 GETH 节点的 RPC 端口）。请始终遵守安全和最佳实践。

如果节点在 INFO 行中显示以下内容，那就是遇到问题了：

config=”{ChainID: 1 Homestead: 1150000 DAO: 1920000 DAOSupport: true EIP150: 2463000 EIP155: 2675000 EIP158: 2675000 Byzantium: 4370000 Constantinople: <nil> Engine: ethash}”

`Constantinople: <nil>` 表示软件未更新。也没有出现 `ConstantinopleFix` 的信息，它应该在正确的配置中出现。

## Persistent Data 持久化存储数据

对于持久化区块链数据，Docker 数据卷应与 \***\*\-v\*\*** 选项一起使用。`path/on/host` 需要替换成你对应的位置。为此，必须使用以下命令：

![](https://www.freecodecamp.org/news/content/images/2019/08/image-54.png)

## 检查节点状态

您可以使用以下命令检查容器的状态：

\***\*docker ps\*\***

![](https://www.freecodecamp.org/news/content/images/2019/08/image-55.png)

这将显示容器 ID，其中包含使用的映像名称，状态和使用的端口。

```

#下面的命令是从 Docker CLI 来运行以太坊 Go 节点客户端

#获取映像
docker pull ethereum/client-go
#运行节点
docker run -it -p 30303:30303 ethereum/client-go
#使用 API 运行节点
docker run -it -p 8545:8545 -p 30303:30303 ethereum/client-go --rpc --rpcaddr "0.0.0.0"
#注意，在线上环境使用 --rpcaddr "0.0.0.0" 指令要小心。这种打开节点的方式不安全
#会有各种不同的方法可以加强你的端口安全，但是如果你打算使用 API 的话，这一点是要记住的。

#持久数据
docker run -it -p 30303:30303 -v /path/on/host:/root/.ethereum ethereum/client-go

```

---

![](https://www.freecodecamp.org/news/content/images/2019/08/image-56.png)

用 Docker 容器运行 GETH

请注意，这不会自动挖掘 ETH。那是一个不同的过程。运行 GETH 的目的是为了快速访问以太坊的区块链。

有关完整代码源，请访问： [https://github.com/Play3rZer0/GETHDocker.git][3]

[1]: https://geth.ethereum.org/
[2]: https://medium.com/coinmonks/securing-your-ethereum-nodes-from-hackers-8b7d5bac8986
[3]: https://github.com/Play3rZer0/GETHDocker.git
