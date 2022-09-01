> -  原文地址：[Common Attacks on SSL/TLS – and How to Protect Your System](https://www.freecodecamp.org/news/attacks-on-ssl-tls-and-how-to-protect-your-system/)
> -  原文作者：[Megan Kaczanowski](https://www.freecodecamp.org/news/author/megansdoingfine/)
> -  译者：
> -  校对者：

![Common Attacks on SSL/TLS – and How to Protect Your System](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/cybersecurity-by-Christiaan-Colen-creative-commons-free-to-use.jpeg)

The SSL and TLS protocols are frequently attacked. And understanding past attacks can inform your knowledge as a defender and help you secure current systems. It can also help you predict the direction of future attacks.

So here's a summary of some of the most famous attacks targeting these protocols:

## Browser Exploit Against SSL/TLS (BEAST):

BEAST (disclosed in 2011) allowed a man-in-the-middle attacker to discover encrypted information from an SSL/TLS session. It impacted SSL 3.0 and TLS 1.0.

This attack depended on the implementation of the block cipher used by TLS. The implementation used CBC, Cipher Block Chaining mode. This involves XORing each block of plaintext (except the first) with the previous block of ciphertext, then using the encryption algorithm on the block.

The first block is XORed with an IV (initialization vector). Much of the mode's security depends on the IV being truly random. But TLS 1.0 didn't randomly generate IVs – it just used the last block of ciphertext from the previous message. That meant that anyone able to snoop on the encrypted traffic had a copy of the IV.

An attacker who could snoop on the encrypted traffic could launch a chosen plaintext attack by guessing a block of data, XORing it with the (known) IV and the previous block of ciphertext, and injecting the created block into the session. This allowed the attacker to check if the entire block was correct.

Given this, the flaw was seen as largely theoretical until BEAST was released. BEAST found a way to shift the cipher block boundaries to isolate one byte of a message at a time until it had been guessed.

That, and the fact that HTTP messages are typically standardized so that an attacker would know where in the message sensitive information (like the session cookie) was transmitted, allowed an attacker to brute force compromise a session cookie.

While the attack was theoretically extremely interesting, and generated a lot of interest, it only works if the attacker can insert malicious code into a page and violate the same-origin policy. If the attacker had this much access to your system, they would also have a number of attacks they could attempt, many of which are far less complicated to execute.

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

### Mitigation Measures for SSL/TLS Attacks:

1.  (Safest) Only allow TLS 1.1 or 1.2 since they addressed the vulnerability. However, at the time, most websites and browsers didn't support TLS 1.1. or 1.2.
2.  As TLS supported both a block cipher and a stream cipher, switch to the stream cipher (RC4). However, in 2013 it was demonstrated that RC4 was insecure, and in 2015 it was officially banned (by the Internet Engineering Task Force, or IETF).
3.  Use a different block cipher mode. Unfortunately, TLS 1.0 didn't support any other modes.
4.  Insert packets of length 0. Essentially, as a packet of length 0 would be padded to the block size, it becomes a packet of just padding for the sender, but is immediately discarded by the recipient. These blocks would be used as IVs for the next message, solving the problem of insecure IVs. This option was largely unused as it caused interoperability issues with some SSL stacks, notably including Internet Explorer 6.0. OpenSSL implemented this, but disabled it by default.
5.  Practice defense in depth to prevent attackers from getting man-in-the-middle access to a victim network.

### Sources/Further Information:

-   [How the BEAST Attack Works](https://www.netsparker.com/blog/web-security/how-the-beast-attack-works/)
-   [An Illustrated Guide to the BEAST Attack](https://commandlinefanatic.com/cgi-bin/showarticle.cgi?article=art027)
-   [Original Write Up of BEAST](https://vnhacker.blogspot.com/2011/09/beast.html)
-   [A Comprehensive Study of BEAST, CRIME, TIME, BREACH, LUCKY 13 & RC4 Biases](https://www.nccgroup.com/us/our-research/attacks-on-ssl/)

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

## Heartbleed Vulnerability:

Heartbleed (introduced in 2012/disclosed in April 2014) was a vulnerability in the heartbeat extension of the OpenSSL library (this is used to keep a connection opened).

This library is used largely for servers running Apache and NGINX (at the time of disclosure, roughly 17% of the internet's 'secure' (using SSL/TLS) websites were vulnerable), but impacted any server which depended on the vulnerable version of OpenSSL.

Essentially, the client sends a message to the server which contains the response it requests and the size of the response. The server would respond with the requested data in the size it was requested (see below for an explanation from xkcd).

![Screen-Shot-2020-12-29-at-4.16.21-PM](https://megankaczanowski.com/content/images/2020/12/Screen-Shot-2020-12-29-at-4.16.21-PM.png)

The vulnerability was that the server would not check that the request was actually the same size as its stated size. If the user sent a requested response (for example 'bird') which was shorter than the requested length (500 letters), the server would 'pad' the response with data from its memory to meet the length requirement, potentially leaking sensitive memory information.

![Screen-Shot-2020-12-29-at-4.16.31-PM](https://megankaczanowski.com/content/images/2020/12/Screen-Shot-2020-12-29-at-4.16.31-PM.png)

![Screen-Shot-2020-12-29-at-4.16.38-PM](https://megankaczanowski.com/content/images/2020/12/Screen-Shot-2020-12-29-at-4.16.38-PM.png)

https://xkcd.com/1354/

This leaked data would be unencrypted and could contain anything – sensitive credentials, documents, and so on.

But in order to successfully exploit this bug, several things needed to happen: the site had to have implemented SSL, it needed to be running a vulnerable version of OpenSSL (the vulnerable versions were between 1.0.1 and 1.0.1f), the attacker needed to have had access to the environment between finding out the bug exists and it being patched, and there needed to have been something useful in memory at the time the attacker carried out the attack. This is relatively more difficult, though far from impossible.

Unfortunately, since the exploitation doesn't leave any abnormal traces in logs, it's hard to know if or how often this bug was actually exploited.

Also, this doesn't account for the danger of an attacker having previous pcaps of traffic and pulling the site's private key in an attack. This means they could have decrypted large amounts of sensitive data, causing a serious breach.

If intelligence agencies were able to pull off this type of attack, it's likely it would never be publicly released.

### Mitigation Measures for Heartbleed:

-   Upgrade OpenSSL to the latest version, patching the vulnerability (the vulnerable versions were between 1.0.1 and 1.0.1f).

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

### Sources/Further Reading:

-   [5 Years Later, Heartbleed Vulnerability Still Unpatched](https://blog.malwarebytes.com/exploits-and-vulnerabilities/2019/09/everything-you-need-to-know-about-the-heartbleed-vulnerability/)
-   [XKCD Heartbleed](https://xkcd.com/1354/)
-   [Everything you need to know about the Heartbleed Bug](https://www.troyhunt.com/everything-you-need-to-know-about3/)

## Padding Oracle On Downgraded Legacy Encryption (POODLE):

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

### Mitigation Measures for POODLE:

-   Disabling SSL 3.0 is the only complete mitigation of POODLE. However, some sites only supported SSL 3.0.
-   An alternative is to use the TLS\_FALLBACK\_SCV cipher suite. This suite allows a server to fall back to earlier protocols, but rather than dropping immediately to SSL 3.0, the client can specify a preference. One problem with this suite is that it wasn't broadly supported when it was introduced (limited to largely Google services). Additionally, if the only option the server supports is SSL 3.0, POODLE attacks are still possible. However, it means that an attacker can't force a downgrade on a connection with a server which supports alternative protocols.
-   Practice defense in depth to prevent attackers from getting man-in-the-middle access to a victim network. While the attack is dangerous, it requires man-in-the-middle access, making it much harder to exploit than the remotely exploitable Heartbleed.

### Sources/Further Information:

-   [Everything you need to know about the POODLE bug](https://www.troyhunt.com/everything-you-need-to-know-about/)
-   [This POODLE Bites: Exploiting the SSL 3.0 Fallback](https://www.openssl.org/~bodo/ssl-poodle.pdf)
-   [What is the POODLE Attack?](https://www.acunetix.com/blog/web-security-zone/what-is-poodle-attack/)
-   [CISA SSL 3.0 Protocol Vulnerability](https://us-cert.cisa.gov/ncas/alerts/TA14-290A)

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

## Wrapping Up

Understanding past attacks on TLS and SSL can both inform your knowledge as a defender and help you secure your systems.

Often systems are out of date, or legacy applications may require use of outdated protocols. This means that even older attacks may be successful if defenses aren't applied appropriately.

In many cases, working in corporate security requires having enough information to make informed decisions and recommendations. If, for example, a legacy app requires using an outdated protocol, knowledge of attacks like POODLE and Heartbleed can help you make effective recommendations about how to secure that application, rather than making general recommendations like 'update to a newer protocol' (which might be impossible).

Typically, as a security analyst, you're trying to balance business needs with technical capabilities, and making recommendations based on the organization's risk level. That might mean saying that a legacy app shouldn't be run anymore, or it may mean making recommendations on how to secure the application as much as possible, given that it needs to use an insecure protocol.

Understanding past TLS/SSL attacks can also help you predict the direction of future attacks. Since Heartbleed and POODLE (in 2014), we've seen attacks like FREAK and Logjam in 2015 and Sweet32 in 2016. We'll likely continue to see additional attacks.

Understanding the fundamentals of how TLS and SSL work, and how they've been attacked in the past can help you predict or understand future attacks.

Cover photo: "cybersecurity" by Christian Colen