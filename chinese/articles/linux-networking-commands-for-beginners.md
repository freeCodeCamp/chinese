> -  原文地址：[Linux Networking Commands You Should Know as a Beginner](https://www.freecodecamp.org/news/linux-networking-commands-for-beginners/)
> -  原文作者：[Arunachalam B](https://www.freecodecamp.org/news/author/arunachalam/)
> -  译者：[luojiyin](https://github.com/luojiyin1987)
> -  校对者：

![Linux Networking Commands You Should Know as a Beginner](https://www.freecodecamp.org/news/content/images/size/w2000/2022/12/FreeCodeCamp---Networking-in-Linux.png)

你能想象有一台笔记本电脑却不能上网是什么样子吗？

如果你是一名开发人员（或有抱负的人），你可能每天都会使用互联网。所以你应该学习一些有用的网络命令。

要在 Linux 中学习网络，你还应该知道如何使用终端。因为使用终端命令要比使用用户界面强大得多。它也会更快、更有效率。

## Prerequisites

对 Linux 终端有一个基本的了解，就足以学习 Linux 中的网络。

## How to Find the IP Address of Your Machine

这是网络中最基本的问题，它是学习网络的起点。

但是，请等待。

### What's an IP Address?

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

我回答说："使用 `ifconfig`命令来查找你的机器的 IP 地址"。

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

### Characteristics of Network Interface

第一行显示 UP、LOOPBACK、RUNNING、NOARP、MULTICAST 等。这些是网络接口的特性。例如，能够进行 BROADCAST，能够进行 MULTICAST。默认情况下，`ifconfig` 命令只列出 UP 状态设备。该接口也可以处于 down 状态。

### What is MTU?

MTU 是指最大传输单元。它决定了所发送的数据包的最大有效载荷大小。默认的标准值是 **1500 字节**。然而，你可以增加数据包的有效载荷大小（MTU），这样你就可以发送更多的数据，提高数据传输率。

### inet row in ifconfig

**inet** 是分配给该指定接口的互联网（IPv4）地址。它将由 DHCP 客户端设置。

**Netmask** 是一个 32 位的 `掩码`，用于将一个 IP 地址段划分为子网，并指定网络的可用主机。

**Broadcast address（广播地址）** 指的是同时在指定网络上的所有主机。

**Destination adress （目的地）** 是点对点链接另一端的远程主机的地址。

**inet6** 是分配给该指定接口的 IPv6 地址。

**prefixlen** 被称为前缀长度，它指定了 IP 地址中作为子网掩码的比特数。

**scopeid** 是为一个区域分配的 ID。范围是一个拓扑区域，在这个区域内，IPv6 地址可以作为一个接口或一组接口的唯一标识。

### RX and Tx

Rx / Tx packets  - 显示接收/传输的数据包数量  
Rx / Tx bytes – 显示桶（buckets）中的数据包大小
Rx / Tx errors – 显示错误数据包的数量
Rx / Tx drop – 显示丢弃的数据包数量
Rx / Tx overrun – 显示溢出数据包的数量

All the items mentioned above are self-explanatory except overrun. Here's a quick definition of overrun.  
An **overrun** is a packet that does not get sent out during a specific polling cycle. This is due to scheduling. It does not indicate a failure of the packet, merely that it was not sent. Overrun packets are re-scheduled for the next cycle, but it is possible that the same packet may be overrun once more.

Let's explore what's each block for.

The first block starting with `enx...` (previously called `eth0`) is for Ethernet connection. Since, I have not connected an ethernet cable, it does not show any data.

![image-34](https://www.freecodecamp.org/news/content/images/2022/12/image-34.png)

Ethernet block in ifconfig command

The block starting with `lo` is called LoopBack Interface. This is a special interface that the system uses to communicate with itself.

![image-35](https://www.freecodecamp.org/news/content/images/2022/12/image-35.png)

LoopBack Interface block in ifconfig command

The block starting with `tun0` is called Tunneling Interface. It contains information about the VPN you are connected to.

![image-36](https://www.freecodecamp.org/news/content/images/2022/12/image-36.png)

Tunnel Interface block in ifconfig command

The block starting with `wlp2s0` is called Wireless on PCI. This is the main interface that is connected to the WIFI of your Local network.

![image-37](https://www.freecodecamp.org/news/content/images/2022/12/image-37.png)

Wireless Interface block in ifconfig command

If you're connected to your Wifi, you have to use the last one.

## How to Download a File Using the Linux Terminal

One fine day my boss sent a bunch of downloadable links to me and asked me to download and wrap them in a Zip file and send it back to him.  

I thought it would be easy work, but then I realized that it had 100+ downloadable links 🥲.

Activating Zen mode, I started searching for a way to automate this. This is when I found out about the `wget` command. You can use this terminal command to download a resource from a link.

The `wget` command is highly flexible and you can use it in scripts and cron jobs. As `wget` is non-interactive, it can independently download resources in the background and does not require a user to be active or logged in.

The following command will download an image from the w3schools website, as an example, in your current folder:

```bash
wget https://www.w3schools.com/html/img_chania.jpg
```

Command to download file from Linux-terminal

![qOuoghtmQbA7z0LYjN0vyL_UmDcJr_GIcOx_eU2RbUAo5IJFJ1_PiS6ncoTcUm_MUDHBEkk9N5oEnq3nH6ClbIwXFstZzBKqCHcU-0EUw0wObDngNWeMWOAUOBMBzpzrlJxGSNBP9omCkqVCMuujevN1-x6QnS-ZME0v6uPK0eKir02c5mSdfvfZEFSQog](https://lh5.googleusercontent.com/qOuoghtmQbA7z0LYjN0vyL_UmDcJr_GIcOx_eU2RbUAo5IJFJ1_PiS6ncoTcUm_MUDHBEkk9N5oEnq3nH6ClbIwXFstZzBKqCHcU-0EUw0wObDngNWeMWOAUOBMBzpzrlJxGSNBP9omCkqVCMuujevN1-x6QnS-ZME0v6uPK0eKir02c5mSdfvfZEFSQog)

Command to download file using Linux Terminal

You can pass another argument to specify the destination folder where the file should be downloaded, like this:

```bash
wget https://www.w3schools.com/html/img_chania.jpg /home/user/downloads/pics/
```

Terminal command to download a file on the given folder

I wrote a script to download all the files using the `wget` command and handed them over to my boss in just 15 minutes. He was pretty amazed.

## How to Find Out if Your System is Connected to the Internet Using a Terminal Command

You've likely faced this issue at least once in your lifetime.

My Laptop is connected to wifi. But why I'm not able to access the internet whereas the people around me can?

By default, most people typically try to disconnect and re-connect to the same or a different wifi network. 99% of the time this won't work, and you'll end up facing a "**Hmm. We’re having trouble finding that site.**" message in **Firefox**, or "**No internet**" with a dinosaur game in **Chrome**.

This is when you just need to be patient to figure out the issue. You need to discover whether it's an issue with your system or your browser. You have to figure out if you're able to access the internet without using a browser.

You can achieve this by using the `ping` terminal command. It looks like this:

```bash
ping google.com
```

Terminal command to check Internet Connectivity

![2XfEhTdEZNavg-ZMMyWDjhBzQAe4ZSXmXkeUUElef6KSrmCcfJ1Y9G2-R2BFo8iO7SoIuKMp37PAUvIYMOzrODEHaUdatGqonjUOKLXpyJBoSInyfqdpy5_0SFhrXPyqkMO5utbvsC4vBekygIq4FX4OG1_YL7C6a07KYqnuPrCtWf-1aNWz-qaUhVkLSA](https://lh6.googleusercontent.com/2XfEhTdEZNavg-ZMMyWDjhBzQAe4ZSXmXkeUUElef6KSrmCcfJ1Y9G2-R2BFo8iO7SoIuKMp37PAUvIYMOzrODEHaUdatGqonjUOKLXpyJBoSInyfqdpy5_0SFhrXPyqkMO5utbvsC4vBekygIq4FX4OG1_YL7C6a07KYqnuPrCtWf-1aNWz-qaUhVkLSA)

Sample output of ping command

You can use the ping command to check your network connectivity. This command takes the URL or IP address as an argument and sends data packets to that specified address. Then it prints the response from the server with the transition time. It will print the response continuously until you cancel that process (with CTRL + C). Finally it will return the following details:

1.  Minimum Time taken to receive a response
2.  Average Time taken to receive a response
3.  Maximum Time taken to receive a response

We can specify the number of packets to send using the `-c` flag, like this:

```bash
ping google.com -c 10
```

Terminal command to verify connectivity by sending 10 packets

And we can specify the packet size also using the `-s` flag:

```bash
ping google.com -s 40
```

Terminal command to verify connectivity by sending 40 bytes of packets

We can also specify the next request time using the `-i` flag:

```bash
ping google.com -i 2
```

Terminal command to verify connectivity with a gap between two requests of 2 seconds

and many more.

After executing the above command, hopefully you should be able to find if your system is connected to the internet. Most probably, your browser will be the culprit. Reinstalling the browser will fix this issue.

## How to Find the IP Address of a Website

Before we move on, you should be able to answer the following:

### What is a DNS?

DNS stands for Domain Name System. Every website we use has a domain (for example google.com or freecodecamp.org). Each of these domain names will point to particular IP address of a server. DNS is basically a system that has a table that maps each domain with the IP address.

Now it's time to move back on track and learn how to find the IP address of a site.

**`nslookup`** (stands for “Name Server Lookup”) is a command to query the DNS server. It is a network administration tool for querying the Domain Name System (DNS) to get the domain name or IP address mapping or any other specific DNS record. System Admins and DevOps use it to troubleshoot DNS related issues.

Here's how to use it:

```bash
nslookup google.com
```

Terminal Command to find IP address of any site

![lwSLDftMWk2HsBYdKfc7FTwksBDqe4DqYBeNj6YEtU22Qi9cMVhbxy3SKFORTptHl2MOf4n8RZqmGDPPpFZoa5yyythXFKBVtIQBeioK3rLOgK6ExQ3_CUiC76DNMIreiW2zdLrVGgtI9DMIU4Tx8dj8Gg0pHh1PF5pdwl6vNBmf4bsSOX--dquLupoJbw](https://lh3.googleusercontent.com/lwSLDftMWk2HsBYdKfc7FTwksBDqe4DqYBeNj6YEtU22Qi9cMVhbxy3SKFORTptHl2MOf4n8RZqmGDPPpFZoa5yyythXFKBVtIQBeioK3rLOgK6ExQ3_CUiC76DNMIreiW2zdLrVGgtI9DMIU4Tx8dj8Gg0pHh1PF5pdwl6vNBmf4bsSOX--dquLupoJbw)

Sample output of nslookup command

## How to Know Which User is Logged-In

Linux supports multiple users and lets you manage those users. Each time you can log in as a different user. And you can use the `who` command to know which user you have been logged in as.

```bash
who
```

Terminal Command to find the logged-in user

It looks like this:

![H6ceH-av643ixKZD2Zj5R13uPoNrHKH4gqcipQmWUMCIREKz9AAPZ8jV5eVYXvGldFPZKQzL5CiRZ-DXUSfVNH6Ot0jXo-5BkrcQ2DMr3Zs-TUCAFA0VmOwRQYvPLjwIRW3mZfpdkiMw5CC22edsvC4rNi4rcbf3Je0cXEfWSRyg30ohFChk8w93klrSXg](https://lh5.googleusercontent.com/H6ceH-av643ixKZD2Zj5R13uPoNrHKH4gqcipQmWUMCIREKz9AAPZ8jV5eVYXvGldFPZKQzL5CiRZ-DXUSfVNH6Ot0jXo-5BkrcQ2DMr3Zs-TUCAFA0VmOwRQYvPLjwIRW3mZfpdkiMw5CC22edsvC4rNi4rcbf3Je0cXEfWSRyg30ohFChk8w93klrSXg)

Terminal command to find Logged-In user in Linux Terminal

## Conclusion

In this article, you have learned some basic networking commands in Linux.

You can subscribe to my newsletter on my [personal site](https://5minslearn.gogosoon.com/) to receive more such insightful articles straight to your inbox. You'll also find a consolidated list of all my blogs.