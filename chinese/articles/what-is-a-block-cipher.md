> -  原文地址：[Cipher Definition – What is a Block Cipher and How Does it Work to Protect Your Data?](https://www.freecodecamp.org/news/what-is-a-block-cipher/)
> -  原文作者：[Megan KaczanowskiMegan Kaczanowski](https://www.freecodecamp.org/news/author/megansdoingfine/)
> -  译者：luojiyin
> -  校对者：

![密码的订阅-什么是区块密码，它是如果保护你的数据](https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/block-and-stream-cipher.jpg)

密码学是使用代码和密码来保护信息的学科。加密涉及对信息进行编码，以便预定的接收者能够知道信息的含义。它经常被用来保护传输的数据。

加密是一个双向的功能-也就是说，你能消除任何对信息进行扰乱。

今天，有两种基本类型的基本算法-对此和非对称。

对此算法也被称为`secret key`(秘钥) 算法，而非对称算法则被称为`public key`(公钥)算法。

两者的关键区别在于，对称算法使用相同的密钥进行加密和解密，而非对称算法使用不同的密钥进行加密和解密。

关于密码学的一般概述以及对称和非对称密码的区别，请查看[本文](/news/how-to-send-secret-messages/).

## 当你开发一个密码时，哪些原则时重要的？

克尔克霍夫原则指出，一个加密系统应该是安全的，即使所有的细节(key除外)都是公开的。克劳德-香农后来将这一说成 `敌人知道系统`。

从本质上讲，一个设计得非常好得系统应该能够发送加密信息，即使攻击者能使用相同得算法(用不同得密钥)加密和解密自己的消息。加密信息的安全性应该完全取决于密钥。

此外，为了阻碍统计分析(试图破解加密算法)，一个好的密码系统应该采用混乱和扩散的原则。

混乱要求密钥不能以简单的方式与加密后产生的文本相关联性。加密后产生的文本的每个字符都应取决于密钥的多个部分。其目的是使攻击者很难从加密后产生的文本中确定密钥。

扩散的意思是，如果明文中的一个字符被改变，那么加密后产生的文本中几个字符也应该改变。如果加密后产生的文本中一个字符改变，那么明文中的几个字符也应该改变。

理想情况下，加密后产生的文本和明文之间的关系是隐藏的。没有任何扩散是完美的(都会有一些模式)，但最好的扩散是将模式广泛扩散，甚至是几个模式一起使用。

扩散使攻击者难以发现模式，并要求攻击者拥有更多的数据，以发起成功的攻击。

如果你想多读一点这方面的内容，可以查看[密码学的数学理论](https://www.iacr.org/museum/shannon/shannon45.pdf).

## 什么是块和流加密(Stream Ciphers)？

块和流加密都是对称密钥密码(如DES、RCx、Blowfish和Rijndael AES)。块加密将明文逐块转换为密文，而流加密则每次转换为一个字节。

大多数现代对称算法都是`block ciphers`(块加密)，尽管块大小不同(如EDS(64位)，AES(128,192和256位)，等等)。

### 流加密的优势是什么？

流加密的速度更快(时间上是线性的)，在空间上是恒定的。它不太可能发生传输错误，因为一个字节的转换错误不会影响下一个字节。

当明文的数量未知时(如音频或视频流)，或者极端的性能要求下(如非常高速的连接，或者需要非常有效的和紧凑的设备，如智能卡)，你通常会使用流加密。

流加密的工作原理是由密钥生成一系列的伪随机字节(对于给定的密钥，加密和解密过程中的使用相同的伪随机字节)。不同的密钥会产生不同的字节串。

为了加密数据，明文字节与伪随机字节串进行XOR(异或操作)。为了解密，将加密后产生的文本与相同的伪随机字节串进行XOR(异或操作)，就可以看到明文。

### 块加密的优势是什么？

块加密有很高的扩散性(一个明文符合被扩散到几个密码文本符号中)。攻击者要插入符号而不被发现是很困难的，因为他们不可能轻易将符号插入到块的中间。

然而，它比流加密慢(加密/解密之前需要传输整个块)，如果发生错误，它可以传染到这个块，破坏整个块。

当你知道传输数据规模时，块加密是一个更好的选择，例如在传输文件。

## 块加密的常见模式是什么？

为了对多块的数据进行加密，有几种`模式`已经被开发出来。这些模块将单块原则用于更长的消息。

块加密有5种保密模式。其中一些模式需要一个初始化向量(IV) 才能发挥作用。

###  什么是Initialization Vector (IV  初始化变量)?

IV的本质只是用于创建密文的另一个输入(除了明文和密钥)。它是一个数据块，被几种模式的块加密用来随机化加密，这样即使相同的明文被重复加密，也会产生不同的密文。

它通常不是秘密，尽管它不会被重复使用。在理想情况下，它应该是随机的，不可预测和一次性使用。

两个相同的信息用相同的密钥加密，但不同的IV，将导致不同的密文。 这使进行攻击更加困难。

### Electronic Code Book Mode (ECB 电子代码本模式)

在明文的输入块和密文输出块有一个固定的映射(基本上就像一个实际的密码本，密文的字与明文直接相关)。

ECD对每个明文块应用加密函数进行加密(对每个密文块应用逆向函数进行解密)。这意味着CBC可以并行地加密和解密多个块(因为它们相互不依赖)，加快了处理进程。

![](https://megankaczanowski.com/content/images/2020/12/Screen-Shot-2020-12-31-at-8.22.20-PM.png)

https://en.wikipedia.org/wiki/Block\_cipher\_mode\_of\_operation

要使这种模式正常工作，要么信息长度是块大小的整数倍，要么你需要使用填充来满足长度条件。

填充实质上为了满足块大小而添加的额外数据。在这种模式下，给定相同的密钥，相同的明文块将总是导致相同的密文块。这是它很容易受到攻击，所以这种模式很少使用(应该避免使用)。
### Cipher Block Chaining Mode (CBC  加密块链模式)

这种加密模式将新的明文块与前一个加密区`关联(chains)`或者结合起来，这需要为第一个块提供一个IV。IV不需要加密，但它要不可预测。

CBC将第一个明文块与IV密文块进行XOR(异或)，以创建第一个密文块。使用ECB模式将IV作为一个短消息单独发送。

然后，CBD对该块使用加密算法，产生第一个密文块。然后，CBC将此密文块与第一个文明块进行XOR(异或)，并应用加密算法产生第二个密文块，如果反复，直到消息的最后。

为了解密，CBC做了想法的工作--第一个密文块使用反向的加密算法，然后将该块与IV进行XOR(异或),得到第一个明文块。

然后，CBC将加密算法的逆运算应用于第二个密文块，并将该块与第一密文块进行XOR，得到第二个明文块。这个过程将一直持续到消息被解密。

![](https://megankaczanowski.com/content/images/2020/12/Screen-Shot-2020-12-31-at-8.22.37-PM.png)

https://en.wikipedia.org/wiki/Block\_cipher\_mode\_of\_operation

因为每个输入块(除了第一个)都依赖于前一个块被加密，CBC不能并行地进行加密。然而，由于解密需要(立即可用)密文块进行XOR，所以它可以并行进行。CBC是最常用的模式之一。

于ECB相似，要使用这种模式正常工作，消息的长度需要是块大小的两倍，不足要进行填充来满足长度。

### Cipher Feedback Mode (CFB 加密反馈模式)

CFB is similar to CBC, but instead of using the entire previous ciphertext block to compute the next block, CFB uses a fraction of the previous block.

CFB starts with an IV of the same block size as expected by the block cipher, and encrypts it with the encryption algorithm.

CFB retains s (significant) bytes from this output and XORs them with s bytes of plaintext to be transmitted.

Then, CFB shifts the IV s bytes to the left, inserting the ciphertext bytes produced by step 2 as the righthand bytes (IV stays the same length).

Then it repeats these steps.

To decrypt a message, CFB uses the IV as the first block and forms each following block by performing step 3 above and applying the encryption algorithm to form blocks. CFB then XORs s bites with the corresponding ciphertext to reveal the plaintext.

Within CFB, the encryption system processes s < b plaintext bits at a time, even though the algorithm itself carries out b-bits to b-bits transformation. This means that s can be any number, including 1 byte and CFP can functionally operate as a stream cipher.

![](https://megankaczanowski.com/content/images/2020/12/Screen-Shot-2020-12-31-at-8.24.31-PM.png)

https://en.wikipedia.org/wiki/Block\_cipher\_mode\_of\_operation

Unfortunately, this means that CFB can propagate errors downstream. If a byte is received with an error, when CFB uses it to decrypt the first byte, it will produce an erroneous decryption, causing downstream errors when fed back into the decryption.

Like CBC, when CFB encrypts, the input to each round relies on the result of the previous round, meaning that encryption cannot be done in parallel, though decryption can be performed in parallel if the input blocks are first created from the IV and ciphertext.

### Output Feedback (OFB)

OFB is similar to CFB, but instead of processing s < b bits into a b-bits to b-bits transformation, it processes s bits directly. Similarly to CFB, OFB can be functionally used as a stream cipher.

OFB requires that the IV be a unique nonce (number used once) for each execution with a given key.

First, OFB encrypts the IV with the encryption algorithm, to produce an output block. OFB then XORs this block with the first plaintext block, producing the first ciphertext block.

OFB encrypts the first output block with the encryption algorithm to produce the second output block. It then XORs this block with the second plaintext block to produce the second ciphertext block. OFB repeats this process for the length of the message.

![](https://megankaczanowski.com/content/images/2020/12/Screen-Shot-2020-12-31-at-8.22.54-PM.png)

https://en.wikipedia.org/wiki/Block\_cipher\_mode\_of\_operation

When decrypting, OFB encrypts the IV with the encryption algorithm, producing an output block. OFB then XORs this block with the first ciphertext block, recovering the first plaintext block.

OFB encrypts the first output block with the encryption algorithm to produce the second output block. OFB then XORs it with the second ciphertext block to recover the second plaintext block. OFB repeats this process for the length of the message.

Because the output blocks for decryption are locally generated, OFB is more resistant to transmission errors than CFB.

### Counter (CTR)

CTR applies the encryption algorithm to a set of unique input blocks (counters) in order to produce outputs which are XORed with the plaintext to produce ciphertext.

CTR encrypts the first counter with the encryption algorithm, then XORs the resulting output with the first plaintext block to produce the first ciphertext block. CTR repeats this for each block (with a new counter – counters must be unique across all messages encrypted using a single key).

If the final block is a partial block of s bytes, the most significant bits, s, of the output block are used for the XOR, while the b - s bytes of the output block are discarded.

![](https://megankaczanowski.com/content/images/2020/12/Screen-Shot-2020-12-31-at-8.23.02-PM.png)

https://en.wikipedia.org/wiki/Block\_cipher\_mode\_of\_operation

The decryption follows the same pattern. CTR encrypts the counter with the encryption algorithm, then XORs the output with the corresponding ciphertext block to produce the plaintext block.

If the final block is a partial block of s bytes, the most significant bits, s, of the output block are used for the XOR, while the b - s bytes of the output block are discarded.

CTR has been shown to be at least as secure as the other four modes, while also being able to be executed in parallel (both encryption and decryption), meaning that it is very fast.

Each block can be recovered independently if its counter block can be determined and the encryption can be applied to the counters in advance of receiving the plaintext or ciphertext (if memory is no constraint).

Further Reading: [NIST Recommendation for Block Cipher Modes of Operation](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf)

## How do Attackers Attempt to Break Ciphers?

There are a number of techniques attackers use, but they broadly fall into the following categories of attack, based on information required to carry it out.

This isn't an exhaustive list (there are other attacks such side channel attacks), but many of the most common fall into one of these categories.

### Known Ciphertext Attack

An attacker has some ciphertext, but does not know what plaintext was used to generate this ciphertext. The attacker does not get to choose which ciphertext they have and they cannot obtain/produce more.

This is the easiest type of attack to try, since it's easiest to eavesdrop on an encrypted conversation (since presumably the people having the conversation are using strong encryption and aren't as worried about eavesdroppers). But it's the hardest to be successful, as long as the people sending messages used appropriately strong encryption.

_For example: David finds an encrypted message (ciphertext) in a [dead drop](https://en.wikipedia.org/wiki/Dead_drop#:~:text=A%20dead%20drop%20or%20dead,individuals%20can%20maintain%20operational%20security.), but has no idea what the message means._

### Known Plaintext Attack

An attacker has some plaintext and ciphertext pairs which they didn't choose (so the attacker didn't choose the message that was encrypted, but was able to successfully steal a plaintext message and its associated ciphertext). The attacker cannot obtain/produce more pairs.

_For example: David finds an enemy spy's hiding place and interrupts him while he is sending an encrypted message. The spy is silly enough to have fled, leaving both the plaintext message and its associated ciphertext written down._

### Chosen Plaintext Attack

An attacker can choose any plaintext and obtain the ciphertext in return (but they can't see the key itself).

This is further broken down into batch chosen plaintext (where the attacker can submit a set of plaintexts and receive the ciphertext, but cannot do so again) and adaptive chosen-plaintext (where the attacker can submit plaintext, receive the ciphertext and submit additional plaintext based on the previous ciphertext.)

_For example: One nation-state is eavesdropping on another's encrypted communication and knows they use the same key for all of their encryption. They send a sensitive diplomatic communication to the other nation-state, knowing it will be transmitted via the encrypted channel, thus giving them a chosen plaintext - ciphertext pair._

### Chosen Ciphertext Attack

This is the opposite of the last attack, where the attacker can choose any ciphertext and obtain the plaintext in return (but they can't see the key itself).

_For example:  David knows an enemy spy is going to send an encrypted message tomorrow, so he replaces the text with his own chosen ciphertext, then spies on the recipient, listening as they read out the plaintext of the message._

### Sources/Further Reading:

-   [NIST Recommendations for Block Cipher Modes of Operation](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf)
-   [Diffusion and Confusion](https://www.nku.edu/~christensen/diffusionandconfusion)
-   [Confusion and Diffusion](https://en.wikipedia.org/wiki/Confusion_and_diffusion)
-   [Kerckhoffs's Principle](https://en.wikipedia.org/wiki/Kerckhoffs%27s_principle)
-   [Padding Mechanisms](http://www.crypto-it.net/eng/theory/padding.html)
-   [Foundations of Computer Science: Stream and Block Encryption](https://www.cs.utexas.edu/~byoung/cs361/lecture45.pdf)