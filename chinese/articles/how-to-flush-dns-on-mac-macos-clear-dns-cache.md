> - 原文地址：[How to Flush DNS on Mac – MacOS Clear DNS Cache](https://www.freecodecamp.org/news/how-to-flush-dns-on-mac-macos-clear-dns-cache/)
> - 原文作者：[Dionysia Lemonaki](https://www.freecodecamp.org/news/author/dionysia/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![How to Flush DNS on Mac – MacOS Clear DNS Cache](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/kaitlyn-baker-vZJdYl5JVXY-unsplash.jpg)

在本教程中，你将了解为什么刷新你的 DNS 缓存是很重要的，以及你如何在你的本地系统上清除缓存。

以下是我们将在本指南中讨论的内容:

1. [什么是 DNS 缓存？](./#what-is-dns-cache?)
    1. [为什么刷新DNS缓存很重要](./#why-flushing-dns-cache-is-important)
2. [如何在 MacOS 上刷新 DNS 缓存](./#how-to-flush-dns-on-macos)
    1. [如何在MacOS上访问终端应用程序](./#how-to-access-the-terminal-application-on-macos)
    2. [如何根据你的MacOS版本清除DNS缓存](./#how-to-clear-dns-cache-for-your-macos-version)

<h2 id="what-is-dns-cache?">什么是 DNS 缓存？</h2>

DNS 的作用很像一个互联网电话簿。想想电话簿的作用——它将一个人的名字映射到他们所尊重的电话号码。

DNS（域名系统的简称）将域名映射到其相关的 IP 地址。

一个域名，如 `freecodecamp.org`，很容易被人类阅读、理解和回忆。

IP地址（IP是互联网协议的简称）是一个机器可读的地址，由一系列独特的数字组成。这些数字可以识别连接到互联网的设备。

它们的格式对人不太友好，因为每次你想访问一个网站时，都很难记住一个准确的数字序列。

然后 DNS 将 `freecodecamp.org` 映射到其相关的IP地址 - `104.26.3.33`。

把DNS缓存看作是你Mac上的一个本地存储区。

它暂时存储并跟踪你的计算机的活动记录，如最近的网站访问。

每次你通过输入一个网站的URL（统一资源定位器的简称）访问该网站时，DNS缓存会保存与该网站相关的IP地址。

当你第二次访问同一网站时，查询过程更有效，查询时间也更短。

这有助于节省大量时间。

<h3 id="why-flushing-dns-cache-is-important">为什么刷新DNS缓存很重要</h3>

你应该刷新 DNS 缓存，有几个原因。

最重要的两个原因是:

1. **刷新 DNS 是排除互联网连接问题的一个有用步骤**.

你可能在浏览器中遇到 DNS 错误，例如在试图访问一个网站并建立连接时，出现 `DNS Server Not Responding` 的信息。

请记住，你的本地缓存信息可能会随着时间的推移变得过时。

当网站发生 DNS 更新时，你的 Mac 仍在使用旧的、不准确的信息来加载请求的页面。

刷新 DNS 缓存可以确保缓存信息是最新的。

2.**刷新 DNS 缓存可以防止网络安全威胁、恶意攻击和 DNS 缓存中毒的发生**.

黑客可以访问并篡改你保存的DNS缓存记录。

例如，他们可以操纵和改变与你已经访问过的网站的域名相关的 IP 地址，并将其映射到一个恶意的地址。

下次你请求访问同一网站时，将被重定向到一个虚假和被破坏的 URL。

黑客可以要求提供个人和敏感信息，如信用卡号码，并窃取这些信息。

经常刷新 DNS 缓存将有助于防止这种情况的发生。

<h2 id="how-to-flush-dns-on-macos">如何在 MacOS 上刷新 DNS 缓存</h2>

清除Mac上的DNS缓存是一个相对简单的过程，即使你没有很多技术知识。

以下是你将需要的东西。

- 访问命令行。
- 你的电脑密码。
- 输入一个文本命令（该命令将取决于你所运行的macOS版本）。

<h3 id="how-to-access-the-terminal-application-on-macos">如何在MacOS上访问终端应用程序</h3>

macOS有一个内置的CLI（命令行界面），名为 `Terminal.app`，它允许你输入基于文本的命令，操作系统将执行这些命令。

有几种方法可以打开终端。

最简单的方法是通过 Spotlight 搜索。

为此，你可以:

- 鼠标移动到屏幕的右上角，点击看起来像放大镜的图标。
- 或者，你也可以使用 `Command Space` 的快捷方式。

两者都将打开以下窗口:

![Screenshot-2022-04-20-at-10.07.52-AM](https://www.freecodecamp.org/news/content/images/2022/04/Screenshot-2022-04-20-at-10.07.52-AM.png)

在那里，开始输入 `terminal`，并点击出现的 `Terminal.app` 选项。

你应该看到打开的一个窗口，看起来类似于以下内容:

![Screenshot-2022-04-20-at-10.12.29-AM](https://www.freecodecamp.org/news/content/images/2022/04/Screenshot-2022-04-20-at-10.12.29-AM.png)

<h3 id="how-to-clear-dns-cache-for-your-macos-version">如何根据你的MacOS版本清除DNS缓存</h3>

在终端窗口中，你将需要输入一个命令。

该命令根据你所运行的 macOS 版本而不同。

每个版本的 macOS 都有一个版本号和一个版本名称。

要想知道你电脑上的 macOS 版本，点击屏幕左上角的苹果图标。在出现的下拉菜单中，选择 `关于此Mac`。

在 `概览` 标签中，你将首先看到版本名称。然后，在这下面，你会看到版本号。

![Screenshot-2022-04-20-at-11.07.26-AM](https://www.freecodecamp.org/news/content/images/2022/04/Screenshot-2022-04-20-at-11.07.26-AM.png)

在下面的表格中，你将看到按时间倒序排列的macOS版本--从最近的版本到最老的版本。

导航到你的Mac版本并复制相应的命令。

| MacOS      版本     | 使用的命令 |
| --- | --- |
| macOS 12 (Monterey) | `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` |
| macOS 11 (Big Sur) | `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` |
| macOS 10.15 (Catalina) | `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` |
| macOS 10.14 (Mojave) | `sudo killall -HUP mDNSResponder` |
| macOS 10.13 (High Sierra) | `sudo killall -HUP mDNSResponder` |
| macOS 10.12 (Sierra) | `sudo killall -HUP mDNSResponder` |
| OS X 10.11 (El Capitan) | `sudo killall -HUP mDNSResponder` |
| OS X 10.10 (Yosemite) | `sudo discoveryutil udnsflushcaches` |
| OS X 10.9 (Mavericks) | `sudo killall -HUP mDNSResponder` |
| OS X 10.8 (Mountain Lion) | `sudo killall -HUP mDNSResponder` |
| Mac OS X 10.7 (Lion) | `sudo killall -HUP mDNSResponder` |
| Mac OS X 10.6 (Snow Leopard) | `sudo dscacheutil -flushcache` |
| Mac OS X 10.5 (Leopard) | `sudo lookupd -flushcache` |
| Mac OS X 10.4 (Tiger) | `lookupd -flushcache` |

在输入命令并按下回车键后，会有一个提示，让你输入计算机的密码。

请记住，当你输入密码时，你将无法查看你正在输入的内容--甚至没有任何星号。

这看起来好像什么都没有发生，但请放心，有些事情正在发生。

一旦你输入了你的密码并点击了回车键，你将不会看到一个表明该过程已经完成的信息。

相反，你将看到一个新的终端提示。

## Conclusion

就这样，你的本地DNS缓存现在已经清除。

希望这有助于解决你可能遇到的任何网络连接问题。

经常清除DNS总是一个好主意，以帮助解决麻烦的互联网连接，并确保你的系统安全，免受潜在威胁。

谢谢你的阅读!
