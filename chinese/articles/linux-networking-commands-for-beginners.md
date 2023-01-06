> - 原文地址：[Linux Networking Commands You Should Know as a Beginner](https://www.freecodecamp.org/news/linux-networking-commands-for-beginners/)
> - 原文作者：[Arunachalam B](https://www.freecodecamp.org/news/author/arunachalam/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Linux Networking Commands You Should Know as a Beginner](https://www.freecodecamp.org/news/content/images/size/w2000/2022/12/FreeCodeCamp---Networking-in-Linux.png)

你能想象有一台笔记本电脑却不能上网是什么样子吗？

如果你是一名开发人员（或有抱负的人），你可能每天都会使用互联网。所以你应该学习一些有用的网络命令。

要在 Linux 中学习网络，你还应该知道如何使用终端。因为使用终端命令要比使用用户界面强大得多。它也会更快、更有效率。

## 前提条件

对 Linux 终端有一个基本的了解，就足以学习 Linux 中的网络。

## 如何找到你的机器的 IP 地址

这是网络中最基本的问题，它是学习网络的起点。

但是，请等待。

### 什么是 IP 地址？

IP 是 "互联网协议 "的缩写，它是管理数据如何通过互联网或本地网络发送的协议（一套规则）。

IP 地址基本上是一个唯一的地址，用于识别互联网或本地网络上的设备。

好了，现在我们知道什么是 IP 地址了，让我们继续。

作为一个专业的网络开发人员，我的工作是开发网站及其后端服务。

有一天，一个实习生问我一些关于他正在做的一个有趣项目的问题。他希望他的网站在桌面、手机和平板电脑上都能访问。

虽然该网站看起来是响应式的，但一旦我调整浏览器窗口，在他的笔记本电脑上切换到移动视图，部署后在手机上的结果就不那么令人印象深刻了。

所以，他向我寻求帮助。

"我想用我的手机在开发模式下检查网站的响应性。这可能吗？"他问。

"是的，它是。将你的笔记本电脑和手机连接在同一个网络上。找到你的笔记本 IP，并在你的手机浏览器上访问`ip:<server_port>`，我回答说。

于是他在浏览器中打开一个新标签，开始输入 "https://whatismy..."，我阻止了他，问他在搜索什么。

他告诉我他正在寻找他的 IP 地址。

我回答说："使用 `ifconfig` 命令来查找你的机器的 IP 地址"。

他打开了终端，试了试这个命令，像这样:

```bash
ifconfig
```

找到你的机器的 IP 地址的命令

![ikkm_6NNhq1HetyT5ahF0dKUda-E23afbdn6seevR-tZTEalhOBN-W75GhUApYv1Xiw-ojtm9YLqIAXcalxsSpal53tsOefrLuzbhMzlK-2N7bkyUu4PZyharx0XzsQSN-9KBNjZ4pk_kLnnaTiyQcsYDBaSF5mAUSz0EGZx1pGJGlBO0PYhQZEpOjVCVg](https://lh3.googleusercontent.com/ikkm_6NNhq1HetyT5ahF0dKUda-E23afbdn6seevR-tZTEalhOBN-W75GhUApYv1Xiw-ojtm9YLqIAXcalxsSpal53tsOefrLuzbhMzlK-2N7bkyUu4PZyharx0XzsQSN-9KBNjZ4pk_kLnnaTiyQcsYDBaSF5mAUSz0EGZx1pGJGlBO0PYhQZEpOjVCVg)

ifconfig 命令的输出示例

"哦，伙计! 我现在很迷惑。哪个是我的 IP？"，这是他的下一个问题。

于是我向他解释了上述输出中的每个内容:

在进入每个信息区间之前，你可以发现有几个是所有信息区间的共同点。让我们来了解一下它们。

### 网络接口的特性

第一行显示 UP、LOOPBACK、RUNNING、NOARP、MULTICAST 等。这些是网络接口的特性。例如，能够进行 BROADCAST，能够进行 MULTICAST。默认情况下，`ifconfig` 命令只列出 UP 状态设备。该接口也可以处于 down 状态。

### 什么是 MTU?

MTU 是指最大传输单元。它决定了所发送的数据包的最大有效载荷大小。默认的标准值是 **1500 字节**。然而，你可以增加数据包的有效载荷大小（MTU），这样你就可以发送更多的数据，提高数据传输率。

### ifconfig 中的 inet 行

**inet** 是分配给该指定接口的互联网（IPv4）地址。它将由 DHCP 客户端设置。

**Netmask** 是一个 32 位的 `掩码`，用于将一个 IP 地址段划分为子网，并指定网络的可用主机。

**Broadcast address（广播地址）** 指的是同时在指定网络上的所有主机。

**Destination adress （目的地）** 是点对点链接另一端的远程主机的地址。

**inet6** 是分配给该指定接口的 IPv6 地址。

**prefixlen** 被称为前缀长度，它指定了 IP 地址中作为子网掩码的比特数。

**scopeid** 是为一个区域分配的 ID。范围是一个拓扑区域，在这个区域内，IPv6 地址可以作为一个接口或一组接口的唯一标识。

### RX 和 Tx

Rx / Tx packets - 显示接收/传输的数据包数量  
Rx / Tx bytes – 显示桶（buckets）中的数据包大小
Rx / Tx errors – 显示错误数据包的数量
Rx / Tx drop – 显示丢弃的数据包数量
Rx / Tx overrun – 显示溢出数据包的数量

上面提到的所有关键词都是不言自明的，除了溢出（overrun）。这里有一个关于溢出（overrun）的定义。  
**overrun** 是指在一个特定的轮询周期内没有被发送出去的数据包。这是由于调度的原因。它并不表明数据包的失败，只是表明它没有被发送。Overrun packets（溢出数据包）会在下一个周期重新调度，但同一个数据包有可能再次被溢出（overrun）。

让我们探讨一下每个信息展示的用途。

第一个以 "enx... "开头的块（以前叫 "eth0"）是用于以太网连接。由于我没有连接以太网电缆（网线），所以它没有显示任何数据。

![image-34](https://www.freecodecamp.org/news/content/images/2022/12/image-34.png)

ifconfig 命令中的以太信息

以 `lo`开头的块被称为回环接口。这是一个特殊的接口，系统用它来与自己通信。

![image-35](https://www.freecodecamp.org/news/content/images/2022/12/image-35.png)

ifconfig 命令中的 LoopBack 接口信息

以 `tun0` 开头的块被称为隧道接口。它包含你所连接的 VPN 的信息。

![image-36](https://www.freecodecamp.org/news/content/images/2022/12/image-36.png)

ifconfig 命令中的隧道接口信息

以 `wlp2s0` 开头的块被称为 PCI 上的无线。这是连接到本地网络 WIFI 的主要接口。

![image-37](https://www.freecodecamp.org/news/content/images/2022/12/image-37.png)

ifconfig 命令中的无线接口信息

如果你连接了你的 Wifi，你应该使用最后一个。

## 如何使用 Linux 终端下载文件

有一天，我的老板给我发了一堆可下载的链接，并要求我下载并把它们压缩在一个 Zip 文件中，然后发送回给他。

我以为这是个简单的工作，但后来我发现它有 100 多个可下载的链接。

激活了思考模式，我开始寻找一种方法来自动处理这个问题。这时我发现了`wget`命令。你可以使用这个终端命令从一个链接中下载资源。

`wget`命令非常灵活，你可以在脚本和 cron 工作中使用它。由于`wget`是非交互式的，它可以在后台独立下载资源，并且不要求用户处于活动或登录状态。

下面的命令将从 w3schools 网站下载一张图片，作为例子，在你当前的文件夹中:

```bash
wget https://www.w3schools.com/html/img_chania.jpg
```

从 Linux 终端下载文件的命令

![qOuoghtmQbA7z0LYjN0vyL_UmDcJr_GIcOx_eU2RbUAo5IJFJ1_PiS6ncoTcUm_MUDHBEkk9N5oEnq3nH6ClbIwXFstZzBKqCHcU-0EUw0wObDngNWeMWOAUOBMBzpzrlJxGSNBP9omCkqVCMuujevN1-x6QnS-ZME0v6uPK0eKir02c5mSdfvfZEFSQog](https://lh5.googleusercontent.com/qOuoghtmQbA7z0LYjN0vyL_UmDcJr_GIcOx_eU2RbUAo5IJFJ1_PiS6ncoTcUm_MUDHBEkk9N5oEnq3nH6ClbIwXFstZzBKqCHcU-0EUw0wObDngNWeMWOAUOBMBzpzrlJxGSNBP9omCkqVCMuujevN1-x6QnS-ZME0v6uPK0eKir02c5mSdfvfZEFSQog)

你可以传递另一个参数来指定下载文件的目标文件夹，像这样。

```bash
wget https://www.w3schools.com/html/img_chania.jpg /home/user/downloads/pics/
```

终端命令下载文件到指定文件夹上

我写了一个脚本，使用`wget`命令下载所有的文件，并在短短 15 分钟内把它们交给了我的老板。他相当惊讶。

## How to Find Out if Your System is Connected to the Internet Using a Terminal Command

在你的一生中，你可能至少遇到过一次这个问题。

我的笔记本电脑连接了 wifi。但为什么我不能上网，而我周围的人却能上网？

默认情况下，大多数人通常会尝试断开连接并重新连接到相同或不同的 WIFI 网络。99%的情况下这是行不通的，你最终会面临一个 **嗯。我们找不到那个网站。** 的信息，或者在 **Chorme 浏览器的恐龙游戏中出现**，提示没有互联网。

这时你只需要耐心地找出问题所在。你需要发现是你的系统还是你的浏览器有问题。你必须弄清楚你是否能够在不使用浏览器的情况下访问互联网。

你可以通过使用 `ping` 终端命令来实现这一目标。它看起来像这样:

```bash
ping google.com
```

检查互联网连接的终端命令

![2XfEhTdEZNavg-ZMMyWDjhBzQAe4ZSXmXkeUUElef6KSrmCcfJ1Y9G2-R2BFo8iO7SoIuKMp37PAUvIYMOzrODEHaUdatGqonjUOKLXpyJBoSInyfqdpy5_0SFhrXPyqkMO5utbvsC4vBekygIq4FX4OG1_YL7C6a07KYqnuPrCtWf-1aNWz-qaUhVkLSA](https://lh6.googleusercontent.com/2XfEhTdEZNavg-ZMMyWDjhBzQAe4ZSXmXkeUUElef6KSrmCcfJ1Y9G2-R2BFo8iO7SoIuKMp37PAUvIYMOzrODEHaUdatGqonjUOKLXpyJBoSInyfqdpy5_0SFhrXPyqkMO5utbvsC4vBekygIq4FX4OG1_YL7C6a07KYqnuPrCtWf-1aNWz-qaUhVkLSA)

ping 命令的输出示例

你可以使用 ping 命令来检查你的网络连接。该命令以 URL 或 IP 地址为参数，向该指定地址发送数据包。然后它打印来自服务器的响应和传输时间。它将连续打印响应，直到你取消这个过程（用 CTRL + C）。最后，它将返回以下细节:

1. 收到响应所需的最少时间
2. 接收响应的平均时间
3. 收到回复所需的最长时间

我们可以使用`-c`标志指定要发送的数据包的数量，像这样:

```bash
ping google.com -c 10
```

通过发送 10 个数据包来验证连接性的终端命令

我们还可以使用 `-s` 标志指定数据包的大小:

```bash
ping google.com -s 40
```

终端命令通过发送 40 字节的数据包来验证连接性

我们还可以使用`-i`标志来指定下一个请求时间:

```bash
ping google.com -i 2
```

终端命令来验证连接性，两个请求之间的间隔为 2 秒以及更多。

执行上述命令后，希望你能发现你的系统是否连接到了互联网。最有可能的是，你的浏览器将是问题的根源。重新安装浏览器将解决这个问题。

## 如何找到一个网站的 IP 地址

在我们继续前进之前，你应该能够回答以下问题:

### 什么是 DNS?

DNS 是域名系统的意思。我们使用的每个网站都有一个域名（例如 google.com 或 freecodecamp.org）。这些域名中的每一个都会指向服务器的特定 IP 地址。DNS 基本上是一个系统，它有一个表，将每个域名与 IP 地址映射。

现在是时候回到正轨，学习如何找到一个网站的 IP 地址。

**`nslookup`**（代表 "名称服务器查询"）是一个查询 DNS 服务器的命令。它是一个网络管理工具，用于查询域名系统（DNS）以获得域名或 IP 地址映射或任何其他特定的 DNS 记录。系统管理员和 DevOps 使用它来解决与 DNS 有关的问题。

下面是如何使用它:

```bash
nslookup google.com
```

查找任何网站的 IP 地址的终端命令

![lwSLDftMWk2HsBYdKfc7FTwksBDqe4DqYBeNj6YEtU22Qi9cMVhbxy3SKFORTptHl2MOf4n8RZqmGDPPpFZoa5yyythXFKBVtIQBeioK3rLOgK6ExQ3_CUiC76DNMIreiW2zdLrVGgtI9DMIU4Tx8dj8Gg0pHh1PF5pdwl6vNBmf4bsSOX--dquLupoJbw](https://lh3.googleusercontent.com/lwSLDftMWk2HsBYdKfc7FTwksBDqe4DqYBeNj6YEtU22Qi9cMVhbxy3SKFORTptHl2MOf4n8RZqmGDPPpFZoa5yyythXFKBVtIQBeioK3rLOgK6ExQ3_CUiC76DNMIreiW2zdLrVGgtI9DMIU4Tx8dj8Gg0pHh1PF5pdwl6vNBmf4bsSOX--dquLupoJbw)

nslookup 命令的输出样本

## 如何知道哪个用户已经登录

Linux 支持多个用户并让你管理这些用户。每次你都可以以不同的用户身份登录。而且你可以使用 `who` 命令来了解你以哪个用户的身份登录。

```bash
who
```

寻找登录用户的终端命令

它看起来像这样:

![H6ceH-av643ixKZD2Zj5R13uPoNrHKH4gqcipQmWUMCIREKz9AAPZ8jV5eVYXvGldFPZKQzL5CiRZ-DXUSfVNH6Ot0jXo-5BkrcQ2DMr3Zs-TUCAFA0VmOwRQYvPLjwIRW3mZfpdkiMw5CC22edsvC4rNi4rcbf3Je0cXEfWSRyg30ohFChk8w93klrSXg](https://lh5.googleusercontent.com/H6ceH-av643ixKZD2Zj5R13uPoNrHKH4gqcipQmWUMCIREKz9AAPZ8jV5eVYXvGldFPZKQzL5CiRZ-DXUSfVNH6Ot0jXo-5BkrcQ2DMr3Zs-TUCAFA0VmOwRQYvPLjwIRW3mZfpdkiMw5CC22edsvC4rNi4rcbf3Je0cXEfWSRyg30ohFChk8w93klrSXg)

## 总结

在这篇文章中，你已经学会了 Linux 中的一些基本网络命令。

你可以在我的 [个人网站](https://5minslearn.gogosoon.com/) 上订阅我的消息，以便直接在你的收件箱中收到更多这样有见地的文章。你还会发现我所有博客的综合列表。
