> -  原文地址：[Cipher Definition – What is a Block Cipher and How Does it Work to Protect Your Data?](https://www.freecodecamp.org/news/what-is-a-block-cipher/)
> -  原文作者：[Megan KaczanowskiMegan Kaczanowski](https://www.freecodecamp.org/news/author/megansdoingfine/)
> -  译者：
> -  校对者：

![Cipher Definition – What is a Block Cipher and How Does it Work to Protect Your Data?](https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/block-and-stream-cipher.jpg)

Cryptography is the science of using codes and ciphers to protect messages. And encryption involves encoding messages so that only the intended recipient can understand the meaning of the message. It's often used to protect data in transit.

Encryption is a two way function – that is, you need to be able to undo whatever scrambling you’ve done to the message.

Today, there are two basic types of algorithms — symmetric and asymmetric.

Symmetric algorithms are also known as ‘secret key’ algorithms, and asymmetric algorithms are known as ‘public key’ algorithms.

The key difference between the two is that symmetric algorithms use the same key for encryption and decryption, while asymmetric algorithms use different keys for encryption and decryption.

For a general overview of cryptography and the difference between symmetric and asymmetric ciphers, check out [this article](/news/how-to-send-secret-messages/).

## What Principles are Important When You're Developing a Cipher?

Kerckhoff's principle states that a cryptographic system should be secure, even if all the details (other than the key) are known publicly. Claude Shannon later rewrote this message as 'The enemy knows the system.'

Essentially, a very well designed system should be able to send secret messages even if an attacker can encrypt and decrypt their own messages using the same algorithm (with a different key). The security of the encrypted message should depend entirely on the key.

Additionally, in order to hinder statistical analysis (attempts to break an encryption algorithm), a good cryptographic system should employ the principles of confusion and diffusion.

Confusion requires that the key does not relate to the ciphertext in a simple manner. Each character of the ciphertext should depend on multiple parts of the key. The goal is to make it very difficult for an attacker to determine the key from the ciphertext.

Diffusion means that if a single character of the plaintext is changed, then several characters of the ciphertext should change. And if a single character of the ciphertext is changed, then several characters of the plaintext should change.

Ideally, the relationship between the ciphertext and the plaintext is hidden. No diffusion is perfect (all will have some patterns), but the best diffusion scatters patterns widely, even scrambling several patterns together.

Diffusion makes patterns hard for an attacker to spot, and requires the attacker to have more data in order to mount a successful attack.

If you want to read up on this a bit more, check out [A Mathematical Theory of Cryptography](https://www.iacr.org/museum/shannon/shannon45.pdf).

## What are Block and Stream Ciphers?

Both block and stream ciphers are symmetric key ciphers (like DES, RCx, Blowfish, and Rijndael AES). Block ciphers convert plaintext to ciphertext block by block, while stream ciphers convert one byte at a time.

Most modern symmetric algorithms are block ciphers, though the block sizes vary (such as DES (64 bits), AES (128, 192, and 256 bits), and so on).

### What is the advantage of a stream cipher?

Stream encryption is faster (linear in time) and constant in space. It is unlikely to propagate errors, as an error in one byte's translation won't impact the next byte.

However, there's little diffusion as one plaintext symbol is directly translated to one ciphertext symbol. Also, the ciphertext is susceptible to insertions or modifications. If an attacker is able to break the algorithm, they may be able to insert text which looks authentic.

You typically use a stream cipher when the amount of plaintext is unknown (like audio or video streaming), or when extreme performance is important (like with very high speed connections, or for devices which need to be very efficient and compact, like smart cards).

A stream cipher works by generating a series of pseudorandom bytes which depend on the key (for any given key, the series of bytes is the same for encryption and decryption). Different keys will produce different strings of bytes.

In order to encrypt data the plaintext bytes are XORed with the string of pseudorandom bytes. To decrypt, the ciphertext is XORed with the same string in order to see the plaintext.

### What is the advantage of a block cipher?

A block cipher has high diffusion (information from one plaintext symbol is spread into several cipher-text symbols). It is also fairly difficult for an attacker to insert symbols without detection, because they can't easily insert them into the middle of a block.

However, it is slower than a stream cipher (an entire block needs to be transmitted before encryption/decryption can happen) and if an error does occur, it can propagate throughout the block, corrupting the entire section.

Block ciphers are a better choice when you know the transmission size – such as in file transfer.

## What are the common modes of Block Ciphers?

In order to encrypt data which is longer than a single block, there are several 'modes' which have been developed. These describe how to apply the single block principles to longer messages.

There are 5 confidentiality modes for block ciphers. Some of these modes require an initialization vector (IV) in order to function.

### What is an Initialization Vector (IV)?

An IV is essentially just another input (in addition to the plaintext and the key) used to create ciphertext. It's a data block, used by several modes of block ciphers to randomize encryption so that different cipher text is created even if the same plain text is repeatedly encrypted.

It usually does not need to be secret, though it cannot be re-used. Ideally, it should be random, unpredictable, and single-use.

Two of the same messages encrypted with the same key, but different IVs, will result in different ciphertext. This makes an attacker's job more difficult.

### Electronic Code Book Mode (ECB)

There is a fixed mapping between input blocks of plaintext and output blocks of ciphertext (essentially like an actual code book where ciphertext words directly relate to plaintext words).

ECB applies the cipher function independently to each block of plaintext to encrypt it (and the inverse function to each block of ciphertext to decrypt it). This means that CBC can encrypt and decrypt multiple blocks in parallel (since they don't depend on each other), speeding up the process.

![](https://megankaczanowski.com/content/images/2020/12/Screen-Shot-2020-12-31-at-8.22.20-PM.png)

https://en.wikipedia.org/wiki/Block\_cipher\_mode\_of\_operation

For this mode to work correctly, either the message length needs to be a multiple of the block size or you need to use padding for the length condition to be met.

Padding is essentially extra data that's added in order to ensure that the block size is met. With this mode, given the same key, the same plaintext block will always result in the same ciphertext block. That makes it vulnerable to attack, so this mode is rarely used (and should be avoided).

### Cipher Block Chaining Mode (CBC)

This mode 'chains' or combines new plaintext blocks with the previous ciphertext block when encrypting them which requires an IV for the first block. The IV doesn't need to be secret, but it needs to be unpredictable.

CBC exclusive ors (XORs) the first block of plaintext with the IV ciphertext block to create the first ciphertext block. The IV is sent separately as a short message using ECB Mode.

Then, CBC applies the encryption algorithm to the block, creating the first block of ciphertext. CBC then XORs this block with the second plaintext block and the applies the encryption algorithm to produce the second ciphertext block, and so on until the end of the message.

In order to decrypt the message, CBC does the reverse - applies the inverse of the encryption algorithm to the first ciphertext block and then XORs the block with the IV to obtain the first plaintext block.

CBC then applies the inverse of the encryption algorithm to the second ciphertext block and XORs the block with the first ciphertext block to obtain the second plaintext block. This process continues until the message is decrypted.

![](https://megankaczanowski.com/content/images/2020/12/Screen-Shot-2020-12-31-at-8.22.37-PM.png)

https://en.wikipedia.org/wiki/Block\_cipher\_mode\_of\_operation

Because each input block (except the first) relies on the previous block being encrypted, CBC can't perform encryption in parallel. However, since the decryption requires XORing with the (immediately available) ciphertext blocks, it can be done in parallel. CBC is one of the most commonly used modes.

Similarly to ECB, for this mode to work correctly, either the message length needs to be a multiple of the block size or you need to use padding for the length condition to be met.

### Cipher Feedback Mode (CFB)

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