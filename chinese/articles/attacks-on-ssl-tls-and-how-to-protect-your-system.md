> - 原文地址：[Common Attacks on SSL/TLS – and How to Protect Your System](https://www.freecodecamp.org/news/attacks-on-ssl-tls-and-how-to-protect-your-system/)
> - 原文作者：[Megan Kaczanowski](https://www.freecodecamp.org/news/author/megansdoingfine/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Common Attacks on SSL/TLS – and How to Protect Your System](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/cybersecurity-by-Christiaan-Colen-creative-commons-free-to-use.jpeg)

SSL 和 TLS 协议经常受到攻击。了解过去的攻击可以为你作为防御者的知识提供参考，并帮助你保护当前的系统。它还可以帮助你预测未来攻击的方向。

因此，这里总结了一些针对这些协议的最有名的攻击:

## 针对 SSL/TLS 的浏览器漏洞(BEAST)

BEAST（2011 年披露）允许中间人攻击者从 SSL/TLS 会话中发现加密的信息。它影响了 SSL 3.0 和 TLS 1.0。

这种攻击取决于 TLS 使用的区块密码的实现。该实现使用 CBC，即密码块链模式。这包括将每个明文块（除了第一个）与前一个密码块进行 XOR，然后对该块使用加密算法。

第一个区块与一个 IV（初始化向量）进行 XOR。该模式的大部分安全性取决于 IV 是真正随机的。但 TLS 1.0 并没有随机生成 IV--它只是使用前一个信息的最后一个密码文本块。这意味着，任何能够窥探加密通信的人都有一份 IV 的副本。

可以窥探加密通信的攻击者可以通过猜测一个数据块，将其与（已知）IV 和前一个密码文本块进行 XOR，并将创建的数据块注入会话，从而发起选择明文攻击。这使得攻击者可以检查整个数据块是否正确。

鉴于此，在 BEAST 发布之前，这个缺陷在很大程度上被认为是理论上的。BEAST 找到了一种方法来转移密码块的边界，每次隔离一个字节的信息，直到它被猜中。

这一点，加上 HTTP 消息通常是标准化的，所以攻击者会知道敏感信息（如会话 cookie）在消息中的传输位置，允许攻击者用暴力破坏会话 cookie。

虽然这种攻击在理论上非常有趣，并引起了很多人的兴趣，但它只有在攻击者能够在页面中插入恶意代码并违反同源策略的情况下才有效。如果攻击者对你的系统有这么多的访问权，他们也会有许多可以尝试的攻击，其中许多执行起来要复杂得多。

### 针对 SSL/TLS 攻击的缓解措施

1. （最安全）只允许 TLS 1.1 或 1.2，因为它们解决了这个漏洞。然而，在当时，大多数网站和浏览器都不支持 TLS 1.1.或 1.2。
2. 由于 TLS 同时支持区块密码和流密码，因此改用流密码（RC4）。然而，在 2013 年证明 RC4 是不安全的，在 2015 年它被正式禁止（由互联网工程任务组，或 IETF）。
3. 使用不同的区块密码模式。不幸的是，TLS 1.0 并不支持任何其他模式。
4. 基本上，由于长度为 0 的数据包将被填充到块的大小，它对发送方来说只是一个填充的数据包，但会被接收方立即丢弃。这些块将被用作下一个消息的 IV，解决了不安全的 IV 问题。这个选项在很大程度上没有被使用，因为它导致了与一些 SSL 堆栈的互操作性问题，特别是包括 Internet Explorer 6.0。OpenSSL 实现了这一点，但默认情况下禁用了它。
5. 实行纵深防御，以防止攻击者获得对受害者网络的中间人访问。

### 来源/更多信息

- [BEAST 攻击是如何工作的](https://www.netsparker.com/blog/web-security/how-the-beast-attack-works/)
- [BEAST 攻击的图解指南](https://commandlinefanatic.com/cgi-bin/showarticle.cgi?article=art027)
- [BEAST 的原创文章](https://vnhacker.blogspot.com/2011/09/beast.html)
- [对 BEAST、CRIME、TIME、BREACH、LUCKY 13 和 RC4 Biases 的综合研究](https://www.nccgroup.com/us/our-research/attacks-on-ssl/)

## Heartbleed 漏洞

Heartbleed（2012 年引入/2014 年 4 月披露）是 OpenSSL 库的 heartbeat 扩展中的一个漏洞（这是用来保持连接打开）。

这个库主要用于运行 Apache 和 NGINX 的服务器（在披露时，大约 17%的互联网 "安全"（使用 SSL/TLS）网站存在漏洞），但影响到任何依赖有漏洞的 OpenSSL 版本的服务器。

基本上，客户端向服务器发送一个消息，其中包含它所要求的响应和响应的大小。服务器会以所要求的大小响应所要求的数据（见下面 xkcd 的解释）。

![Screen-Shot-2020-12-29-at-4.16.21-PM](https://megankaczanowski.com/content/images/2020/12/Screen-Shot-2020-12-29-at-4.16.21-PM.png)

漏洞是服务器不会检查请求是否真的与它的声明大小相同。如果用户发送的请求响应（例如 "鸟"）比要求的长度（500 个字母）短，服务器就会用内存中的数据 "填充 "响应，以满足长度要求，可能会泄露敏感的内存信息。

![Screen-Shot-2020-12-29-at-4.16.31-PM](https://megankaczanowski.com/content/images/2020/12/Screen-Shot-2020-12-29-at-4.16.31-PM.png)

![Screen-Shot-2020-12-29-at-4.16.38-PM](https://megankaczanowski.com/content/images/2020/12/Screen-Shot-2020-12-29-at-4.16.38-PM.png)

<https://xkcd.com/1354/>

这些泄漏的数据将是未加密的，可能包含任何东西--敏感的证书、文件等等。

但是，为了成功地利用这个漏洞，需要发生几件事：网站必须实施 SSL，需要运行有漏洞的 OpenSSL 版本（有漏洞的版本在 1.0.1 和 1.0.1f 之间），攻击者需要在发现漏洞存在和它被修补之间有机会进入环境，并且在攻击者进行攻击时，内存中需要有一些有用的东西。这相对来说更加困难，尽管远非不可能。

不幸的是，由于该漏洞在日志中没有留下任何异常的痕迹，所以很难知道这个漏洞是否真的被利用了，或者有多频繁。

此外，这还没有考虑到攻击者有以前的 pcaps 流量，并在攻击中提取网站的私钥的危险。这意味着他们可能已经解密了大量的敏感数据，造成严重的漏洞。

如果情报机构能够完成这种类型的攻击，它很可能永远不会被公开发布。

### 缓解 Heartbleed 漏洞的措施

- 将 OpenSSL 升级到最新版本，修补漏洞（有漏洞的版本在 1.0.1 和 1.0.1f 之间）。

### 来源/更多信息

- [5 年后，Heartbleed 漏洞仍未得到修补](https://blog.malwarebytes.com/exploits-and-vulnerabilities/2019/09/everything-you-need-to-know-about-the-heartbleed-vulnerability/)
- [XKCD Heartbleed](https://xkcd.com/1354/)
- [你需要知道的关于 "Heartbleed" 的一切信息](https://www.troyhunt.com/everything-you-need-to-know-about3/)

## 填充 Oracle 导致传统加密降级（POODLE）

POODLE（2014 年 9 月披露）利用了 SSL3.0 的一个缺陷。为了支持传统系统，一些系统继续提供对 SSL3.0 的支持，尽管它已经被更新的版本所取代。

为了使攻击成功，攻击者需要能够控制 SSL 连接的客户端的部分内容，并需要对所产生的密码文本有可见性（拥有这种权限的最常见方法是充当中间人）。

这种攻击虽然强大，但确实需要单独的攻击来获得这种权限。

在一个典型的握手协商中，客户和服务器将一起工作，以找到一个适合双方通信的协议。他们会从双方都提供的最高协议开始，然后往下进行（因此客户可能提供 TLS 1.2，而服务器可能回应 TLS 1.1）。

但如果连接失败（无论是由于攻击者还是网络连接问题），客户服务器将降级到他们提供的最低协议，可能是 SSL 3.0。这是一个提供的 "功能"，以便处于不同发展阶段的服务器和客户端可以进行通信。

SSL3.0 使用 RC4（流密码）或 CBC 模式的块密码进行加密。RC4 是众所周知的，即使在当时，也有一些缺陷，包括如果重复发送相同的秘密（如 cookie），越来越多的信息会泄漏。

CBC 模式要求消息的长度是区块大小的倍数，或者使用填充物来满足长度条件。这意味着填充物经常被使用，而在 SSL 3.0 的实现中，并没有验证它在传输过程中是否有变化。

从本质上讲，虽然在发送前和接收端对信息进行了哈希处理，并对重新编译的哈希进行比较以确保信息的完整性，但不包括填充。

对填充的唯一规定是，最后一个字节需要是填充的长度。因此，攻击者可以替换填充物，只要他们的最后一个数字正确，仍然会被接受。 

如果攻击者知道他们试图解密的数据的位置（例如 HTTP 会话 cookie，它通常每次都是在区块的相同部分发送，因此很容易找到），他们可以把它复制到最后的区块，替换掉填充。

然后，接收器将把填充的块与前一个块的密码文本（攻击者可以看到）进行 XOR，只有在最后一个字节与填充的长度相匹配时才会接受数据。

从本质上讲，这种攻击使暴力破解 SSL 成为可能。而在没有任何信息的情况下，几乎不可能对 SSL 进行暴力破解，这种攻击允许在每个字节最多尝试 256 次后恢复每个字节。这意味着，在几分钟内，攻击者可以破坏一个会话 cookie 或其他敏感信息。

### POODLE 的缓解措施

- 禁用 SSL 3.0 是唯一完全缓解 POODLE 的方法。然而，有些网站只支持 SSL 3.0。
- 一个替代方案是使用 TLS_FALLBACK_SCV 密码套件。这个套件允许服务器回落到早期的协议，但不是立即下降到 SSL 3.0，客户可以指定一个偏好。这个套件的一个问题是，它在推出时并没有得到广泛支持（主要限于谷歌服务）。此外，如果服务器支持的唯一选项是 SSL 3.0，POODLE 攻击仍然是可能的。然而，这意味着攻击者无法在与支持其他协议的服务器的连接上强制降级。
- 实行纵深防御，以防止攻击者获得对受害者网络的中间人访问。虽然这种攻击很危险，但它需要中间人访问，这使得它比可远程利用的 Heartbleed 更难被利用。

### 来源/更多信息

- [你需要知道的关于 POODLE 漏洞的一切](https://www.troyhunt.com/everything-you-need-to-know-about/)
- [POODLE 攻击: 利用 SSL 3.0 的回退功能](https://www.openssl.org/~bodo/ssl-poodle.pdf)
- [什么是 POODLE 攻击?](https://www.acunetix.com/blog/web-security-zone/what-is-poodle-attack/)
- [CISA SSL 3.0 协议漏洞](https://us-cert.cisa.gov/ncas/alerts/TA14-290A)

## 结束语

了解过去对 TLS 和 SSL 的攻击，既可以为你作为防御者提供知识，也可以帮助你保护你的系统。

通常情况下，系统是过时的，或者传统的应用程序可能需要使用过时的协议。这意味着，如果不适当地应用防御措施，甚至旧的攻击也可能成功。

在许多情况下，从事企业安全工作需要有足够的信息来做出明智的决定和建议。例如，如果一个传统的应用程序需要使用一个过时的协议，那么像 POODLE 和 Heartbleed 这样的攻击知识可以帮助你对如何保护该应用程序提出有效的建议，而不是提出像 "更新到一个更新的协议",这样的一般性建议（这可能在实际中做不了）。

通常情况下，作为一个安全分析师，你要努力平衡业务需求和技术能力，并根据组织的风险水平提出建议。这可能意味着说，一个传统的应用程序不应该再运行了，也可能意味着鉴于它需要使用一个不安全的协议，就如何尽可能地保证应用程序的安全运行而提出建议。

了解过去的 TLS/SSL 攻击也可以帮助你预测未来攻击的方向。自 Heartbleed 和 POODLE（2014 年）以来，我们已经看到了像 2015 年的 FREAK 和 Logjam 以及 2016 年的 Sweet32 的攻击。我们可能会继续看到更多的攻击。

了解 TLS 和 SSL 工 作的基本原理，以及它们在过去是如何被攻击的，可以帮助你预测或了解未来的攻击。

封面照片："cybersecurity"，作者：Christian Colen
