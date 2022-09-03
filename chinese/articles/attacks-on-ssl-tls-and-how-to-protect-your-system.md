> - 原文地址：[Common Attacks on SSL/TLS – and How to Protect Your System](https://www.freecodecamp.org/news/attacks-on-ssl-tls-and-how-to-protect-your-system/)
> - 原文作者：[Megan Kaczanowski](https://www.freecodecamp.org/news/author/megansdoingfine/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Common Attacks on SSL/TLS – and How to Protect Your System](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/cybersecurity-by-Christiaan-Colen-creative-commons-free-to-use.jpeg)

SSL 和 TLS 协议经常受到攻击。了解过去的攻击可以为你作为防御者的知识提供参考，并帮助你保护当前的系统。它还可以帮助你预测未来攻击的方向。

因此，这里总结了一些针对这些协议的最有名的攻击:

## Browser Exploit Against SSL/TLS (BEAST)

BEAST（2011 年披露）允许中间人攻击者从 SSL/TLS 会话中发现加密的信息。它影响了 SSL 3.0 和 TLS 1.0。

这种攻击取决于 TLS 使用的区块密码的实现。该实现使用 CBC，即密码块链模式。这包括将每个明文块（除了第一个）与前一个密码块进行 XOR，然后对该块使用加密算法。

第一个区块与一个 IV（初始化向量）进行 XOR。该模式的大部分安全性取决于 IV 是真正随机的。但 TLS 1.0 并没有随机生成 IV--它只是使用前一个信息的最后一个密码文本块。这意味着，任何能够窥探加密通信的人都有一份 IV 的副本。

可以窥探加密通信的攻击者可以通过猜测一个数据块，将其与（已知）IV 和前一个密码文本块进行 XOR，并将创建的数据块注入会话，从而发起选择明文攻击。这使得攻击者可以检查整个数据块是否正确。

鉴于此，在 BEAST 发布之前，这个缺陷在很大程度上被认为是理论上的。BEAST 找到了一种方法来转移密码块的边界，每次隔离一个字节的信息，直到它被猜中。

这一点，加上 HTTP 消息通常是标准化的，所以攻击者会知道敏感信息（如会话 cookie）在消息中的传输位置，允许攻击者用暴力破坏会话 cookie。

虽然这种攻击在理论上非常有趣，并引起了很多人的兴趣，但它只有在攻击者能够在页面中插入恶意代码并违反同源策略的情况下才有效。如果攻击者对你的系统有这么多的访问权，他们也会有许多可以尝试的攻击，其中许多执行起来要复杂得多。

### Mitigation Measures for SSL/TLS Attacks

1. （最安全）只允许 TLS 1.1 或 1.2，因为它们解决了这个漏洞。然而，在当时，大多数网站和浏览器都不支持 TLS 1.1.或 1.2。
2. 由于 TLS 同时支持区块密码和流密码，因此改用流密码（RC4）。然而，在 2013 年证明 RC4 是不安全的，在 2015 年它被正式禁止（由互联网工程任务组，或 IETF）。
3. 使用不同的区块密码模式。不幸的是，TLS 1.0 并不支持任何其他模式。
4. 基本上，由于长度为 0 的数据包将被填充到块的大小，它对发送方来说只是一个填充的数据包，但会被接收方立即丢弃。这些块将被用作下一个消息的 IV，解决了不安全的 IV 问题。这个选项在很大程度上没有被使用，因为它导致了与一些 SSL 堆栈的互操作性问题，特别是包括 Internet Explorer 6.0。OpenSSL 实现了这一点，但默认情况下禁用了它。
5. 实行纵深防御，以防止攻击者获得对受害者网络的中间人访问。

### Sources/Further Information

- [BEAST 攻击是如何工作的](https://www.netsparker.com/blog/web-security/how-the-beast-attack-works/)
- [BEAST 攻击的图解指南](https://commandlinefanatic.com/cgi-bin/showarticle.cgi?article=art027)
- [BEAST 的原创文章](https://vnhacker.blogspot.com/2011/09/beast.html)
- [对 BEAST、CRIME、TIME、BREACH、LUCKY 13 和 RC4 Biases 的综合研究](https://www.nccgroup.com/us/our-research/attacks-on-ssl/)

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

## Heartbleed Vulnerability

Heartbleed (introduced in 2012/disclosed in April 2014) was a vulnerability in the heartbeat extension of the OpenSSL library (this is used to keep a connection opened).

This library is used largely for servers running Apache and NGINX (at the time of disclosure, roughly 17% of the internet's 'secure' (using SSL/TLS) websites were vulnerable), but impacted any server which depended on the vulnerable version of OpenSSL.

Essentially, the client sends a message to the server which contains the response it requests and the size of the response. The server would respond with the requested data in the size it was requested (see below for an explanation from xkcd).

![Screen-Shot-2020-12-29-at-4.16.21-PM](https://megankaczanowski.com/content/images/2020/12/Screen-Shot-2020-12-29-at-4.16.21-PM.png)

The vulnerability was that the server would not check that the request was actually the same size as its stated size. If the user sent a requested response (for example 'bird') which was shorter than the requested length (500 letters), the server would 'pad' the response with data from its memory to meet the length requirement, potentially leaking sensitive memory information.

![Screen-Shot-2020-12-29-at-4.16.31-PM](https://megankaczanowski.com/content/images/2020/12/Screen-Shot-2020-12-29-at-4.16.31-PM.png)

![Screen-Shot-2020-12-29-at-4.16.38-PM](https://megankaczanowski.com/content/images/2020/12/Screen-Shot-2020-12-29-at-4.16.38-PM.png)

<https://xkcd.com/1354/>

This leaked data would be unencrypted and could contain anything – sensitive credentials, documents, and so on.

But in order to successfully exploit this bug, several things needed to happen: the site had to have implemented SSL, it needed to be running a vulnerable version of OpenSSL (the vulnerable versions were between 1.0.1 and 1.0.1f), the attacker needed to have had access to the environment between finding out the bug exists and it being patched, and there needed to have been something useful in memory at the time the attacker carried out the attack. This is relatively more difficult, though far from impossible.

Unfortunately, since the exploitation doesn't leave any abnormal traces in logs, it's hard to know if or how often this bug was actually exploited.

Also, this doesn't account for the danger of an attacker having previous pcaps of traffic and pulling the site's private key in an attack. This means they could have decrypted large amounts of sensitive data, causing a serious breach.

If intelligence agencies were able to pull off this type of attack, it's likely it would never be publicly released.

### Mitigation Measures for Heartbleed

- Upgrade OpenSSL to the latest version, patching the vulnerability (the vulnerable versions were between 1.0.1 and 1.0.1f).

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

### Sources/Further Reading

- [5 Years Later, Heartbleed Vulnerability Still Unpatched](https://blog.malwarebytes.com/exploits-and-vulnerabilities/2019/09/everything-you-need-to-know-about-the-heartbleed-vulnerability/)
- [XKCD Heartbleed](https://xkcd.com/1354/)
- [Everything you need to know about the Heartbleed Bug](https://www.troyhunt.com/everything-you-need-to-know-about3/)

## Padding Oracle On Downgraded Legacy Encryption (POODLE)

POODLE (disclosed in September 2014) took advantage of a flaw in SSL3.0. In order to support legacy systems, some systems continued to offer support for SSL 3.0, even though it had been replaced by newer versions.

For the attack to be successful, the attacker needed to be able to control parts of the client side of the SSL connection and needed to have visibility of the resulting ciphertext (the most common way to have this access is to act as a man-in-the-middle).

This attack, while powerful, does require a separate attack to gain this access.

During a typical handshake negotiation, the client and server will work together to find a protocol which works for both to communicate. They'll start with the highest protocol they both offer and work down (so the client may offer TLS 1.2, and the server may respond with TLS 1.1).

But if the connection fails (either due to an attacker or a network connection problem), the client server will downgrade to the lowest protocol they offer, likely SSL 3.0. This is a 'feature' offered so that servers and clients at different stages of advancement can communicate.

SSL3.0 uses either RC4 (stream cipher) or a block cipher in CBC mode for encryption. RC4 was well-known, even at the time, for having a number of flaws, including that if the same secret (like a cookie) was sent repeatedly, more and more information about it would leak.

CBC mode requires that the message length is a multiple of the block size or that padding is used to fulfill the length condition. This means that padding is frequently used, and in the SSL 3.0 implementation it isn't verified that it hasn't changed in transit.

Essentially, while the message is hashed before sending and at the receiving end, and the re-compiled hash is compared to ensure message integrity, the padding is not included.

The only specification for padding is that the last byte needs to be the padding length. Therefore, an attacker can replace the padding and it will still be accepted, as long as they get the last digit correct.  

If an attacker knows the location of the data they're trying to decrypt (for example an HTTP session cookie, which is typically sent in the same part of the block each time and is therefore easy to locate), they can copy it over into the final block, replacing the padding.

Then, the receiver will XOR the padded block with the previous block's ciphertext (which the attacker can see) and will only accept the data if the last byte matches the padding's length.

Essentially this attack makes brute-forcing SSL feasible. Whereas it would be practically impossible to brute force SSL without any information, this attack allows for recovering each byte after a maximum of 256 attempts per byte. That means that, in a few minutes, an attacker could compromise a session cookie or other sensitive information.

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

### Mitigation Measures for POODLE

- Disabling SSL 3.0 is the only complete mitigation of POODLE. However, some sites only supported SSL 3.0.
- An alternative is to use the TLS\_FALLBACK\_SCV cipher suite. This suite allows a server to fall back to earlier protocols, but rather than dropping immediately to SSL 3.0, the client can specify a preference. One problem with this suite is that it wasn't broadly supported when it was introduced (limited to largely Google services). Additionally, if the only option the server supports is SSL 3.0, POODLE attacks are still possible. However, it means that an attacker can't force a downgrade on a connection with a server which supports alternative protocols.
- Practice defense in depth to prevent attackers from getting man-in-the-middle access to a victim network. While the attack is dangerous, it requires man-in-the-middle access, making it much harder to exploit than the remotely exploitable Heartbleed.

### Sources/Further Information

- [Everything you need to know about the POODLE bug](https://www.troyhunt.com/everything-you-need-to-know-about/)
- [This POODLE Bites: Exploiting the SSL 3.0 Fallback](https://www.openssl.org/~bodo/ssl-poodle.pdf)
- [What is the POODLE Attack?](https://www.acunetix.com/blog/web-security-zone/what-is-poodle-attack/)
- [CISA SSL 3.0 Protocol Vulnerability](https://us-cert.cisa.gov/ncas/alerts/TA14-290A)

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

## Wrapping Up

Understanding past attacks on TLS and SSL can both inform your knowledge as a defender and help you secure your systems.

Often systems are out of date, or legacy applications may require use of outdated protocols. This means that even older attacks may be successful if defenses aren't applied appropriately.

In many cases, working in corporate security requires having enough information to make informed decisions and recommendations. If, for example, a legacy app requires using an outdated protocol, knowledge of attacks like POODLE and Heartbleed can help you make effective recommendations about how to secure that application, rather than making general recommendations like 'update to a newer protocol' (which might be impossible).

Typically, as a security analyst, you're trying to balance business needs with technical capabilities, and making recommendations based on the organization's risk level. That might mean saying that a legacy app shouldn't be run anymore, or it may mean making recommendations on how to secure the application as much as possible, given that it needs to use an insecure protocol.

Understanding past TLS/SSL attacks can also help you predict the direction of future attacks. Since Heartbleed and POODLE (in 2014), we've seen attacks like FREAK and Logjam in 2015 and Sweet32 in 2016. We'll likely continue to see additional attacks.

Understanding the fundamentals of how TLS and SSL work, and how they've been attacked in the past can help you predict or understand future attacks.

Cover photo: "cybersecurity" by Christian Colen
