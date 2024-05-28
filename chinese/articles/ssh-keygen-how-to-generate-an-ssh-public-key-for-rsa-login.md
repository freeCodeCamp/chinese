> -  原文地址：[SSH Keygen Tutorial – How to Generate an SSH Public Key for RSA Login](https://www.freecodecamp.org/news/ssh-keygen-how-to-generate-an-ssh-public-key-for-rsa-login/)
> -  原文作者：[Bolaji Ayodeji](https://www.freecodecamp.org/news/author/bolajiayodeji/)
> -  译者：Jun Sun
> -  校对者：

![SSH Keygen Tutorial – How to Generate an SSH Public Key for RSA Login](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/article-banner.jpg)

Cryptography uses encryption and decryption to conceal messages. This introduces secrecy in information security.
密码学中使用加密和解密来隐藏原始信息。这也使加密的概念引入到了信息安全。


The purpose of cryptography is to ensure secure communication between two people or devices who are connecting through insecure channels.
密码学的目的是确保两个人或两台设备之间，在使用不安全连接通道时的安全通信。


The sender often employs an encryption key to lock the message, while the recipient uses a decryption key to unlock the message.
发送者通常使用加密密钥来加密信息，而接收者使用解密密钥来解密信息。


In general, cryptography employs two strategies:
一般来说，密码学采用两种策略：

1.  **Symmetric-key Cryptography (Private key):** With this technique, the encryption and decryption keys are both known to the sender and receiver. Some examples of algorithms that use this technique include One Time Pad cipher, Vernam cipher, Playfair, Row column cipher, and Data Encryption Standard (DES).
**对称密钥加密（私钥）**这种技术，使用的加密密钥和解密密钥对于发送方、接收方都是已知的。使用这种方式的有一次性密码、Vernam 密码、Playfair、行列密码和数据加密标准（DES）。

2.  **Asymmetric Key Cryptography (Public key):** With this technique, each person has two keys: the Private (secret and accessible to the creator) and Public keys (freely available to anyone). The sender and receiver use different keys for encryption and decryption. Some examples of algorithms that use this technique include the Rivest–Shamir–Adleman algorithm (RSA), Diffie - Hellman Key Exchange (DHE), and the Digital Signature Algorithm (DSA).

**非对称密钥加密（公钥）：** 使用此技术，每个人都有两个密钥：私钥（创建者可以访问的秘密密钥）和公钥（任何人都可以免费使用）。发送方和接收方使用不同的密钥进行加密和解密。使用该技术的一些算法示例包括 Rivest–Shamir–Adleman 算法（RSA）、Diffie–Hellman 密钥交换（DHE）和数字签名算法（DSA）。


![Cryptography--2-](https://www.freecodecamp.org/news/content/images/2022/06/Cryptography--2-.png)

The Encryption Model for Secured Data Transmission
安全数据传输的加密模型


Software engineers generally have to authenticate with servers or other services like GitHub for version control.
软件工程师通常必须通过服务器或 GitHub 等其他服务进行身份验证才能进行版本控制。


As opposed to using password authentication, they can use public key authentication to generate and store a pair of cryptographic keys on their computer. Then they can configure the server running on another computer to recognize and accept those keys.

与使用密码身份验证相反，他们可以使用公钥身份验证在计算机上生成并存储一对加密密钥。然后，他们可以将运行在另一台计算机上的服务器配置为识别并接受这些密钥。

This is the asymmetric key cryptography technique flow we discussed earlier and it is a more secure authentication process.
这是我们前面讨论的非对称密钥加密技术流程，它是一个更安全的身份验证过程。


In this tutorial, you will learn how it all works, what SSH means, and how to generate SSH keys with an RSA algorithm using SSH keygen.
在本教程中，您将了解这一切是如何工作的，SSH 的含义，以及如何使用 SSH 密钥生成使用 RSA 算法的 SSH 密钥。

## Prerequisites
先决条件

-   A working computer running on any operating system.
-   Basic knowledge of navigating around the command-line.
-   A smile on your face :)
-在任何操作系统上运行的工作计算机。
-围绕命令行导航的基本知识。
-你脸上的笑容：）


## Brief Introduction to SSH (**S**ecure **Sh**ell Protocol)

Public key authentication using SSH is a more secure approach for logging into services than passwords. Understanding SSH is easier once you understand how cryptography works from the above intro.
使用 SSH 的公钥身份验证是一种比密码更安全的登录服务方法。一旦您从上面的介绍中了解了密码学是如何工作的，那么理解 SSH 就更容易了。


Here's a helpful basic definition:
以下是一个有用的基本定义

> "The **S**ecure **Sh**ell Protocol is a **cryptographic network protocol** for operating network services securely **over an unsecured network**." ([Source](https://en.wikipedia.org/wiki/Secure_Shell))
“Secure Shell 协议是一种加密网络协议，用于在不安全的网络上安全地运行网络服务。（来源)


SSH is used between a client and a server both running on the SSH protocol to remotely login into the server and access certain resources through the command line.
SSH 在客户端和服务器之间使用，两者都在 SSH 协议上运行，以远程登录到服务器并通过命令行访问某些资源。

![image-197](https://www.freecodecamp.org/news/content/images/2022/06/image-197.png)

Source: SSH Academy

There is an open-source version of the SSH protocol (version 2) with a suite of tools called [OpenSSH](https://www.openssh.com) (also known as OpenBSD Secure Shell). This project includes the following tools:
SSH 协议有一个开源版本（版本 2），其中包含一套称为 OpenSSH（也称为 OpenBSD Secure Shell）的工具。此项目包括以下工具：

-   Remote operations: [ssh](https://man.openbsd.org/ssh.1), [scp](https://man.openbsd.org/scp.1), and [sftp](https://man.openbsd.org/sftp.1).
-   Key generation: [ssh-add](https://man.openbsd.org/ssh-add.1), [ssh-keysign](https://man.openbsd.org/ssh-keysign.8), [ssh-keyscan](https://man.openbsd.org/ssh-keyscan.1), and [**ssh-keygen**](https://man.openbsd.org/ssh-keygen.1).
-   Service side: [sshd](https://man.openbsd.org/sshd.8), [sftp-server](https://man.openbsd.org/sftp-server.8), and [ssh-agent](https://man.openbsd.org/ssh-agent.1).

远程操作：ssh、scp 和 sftp。
密钥生成：ssh-add、ssh-keysign、ssh-keyscan 和 ssh-keygen。
服务端：sshd、sftp-server 和 ssh-agent。

## How to Generate an SSH Public Key for RSA Login
如何为 RSA 登录生成 SSH 公钥

Our goal is to use ssh-keygen to generate an SSH public key using the RSA algorithm. This will create a key pair containing a private key (saved to your local computer) and a public key (uploaded to your chosen service).
我们的目标是使用 ssh-keygen 使用 RSA 算法生成 SSH 公钥。这将创建一个密钥对，其中包含私钥（保存到本地计算机）和公钥（上传到所选服务）。

Now to proceed, follow the steps below to achieve this:
现在要继续，请按照以下步骤实现此目的：

1.  Install OpenSSH if you don't have it installed already using the command below:
如果您尚未安装 OpenSSH，请使用以下命令安装 OpenSSH：

```
// for mac

brew install openssh

// for linux

sudo apt install openssh-client && sudo apt install openssh-server
```

2\.  Create a private/public key pair with an RSA algorithm (2046-bit encryption by default), using the command:
使用以下命令使用 RSA 算法（默认为 2046 位加密）创建私钥/公钥对：

```
ssh-keygen -t rsa
```

3\.  Or, if you want to create with an RSA algorithm with 4096-bit encryption, use the command:
或者，如果要使用具有 4096 位加密的 RSA 算法进行创建，请使用以下命令：

```
ssh-keygen -t rsa -b 4096
```

4\.  Enter a file location to save the key to (by default it will save to your users directory (for example, `(/Users/bolajiayodeji/.ssh/id_rsa)` ).
 输入要将密钥保存到的文件位置（默认情况下，它将保存到您的用户目录（例如，）。(/Users/bolajiayodeji/.ssh/id_rsa)

5\.  Enter a passphrase for extra security to your private key. Generally, a good passphrase should have at least 15 characters (including at least one upper case letter, lower case letters, numerical digits, and special characters) and must be difficult to guess. You can use one of those password generators online or use hexdump to generate a paraphrase easily like so:
入密码短语以提高私钥的安全性。通常，一个好的密码短语应至少包含 15 个字符（包括至少一个大写字母、小写字母、数字和特殊字符），并且必须难以猜测。您可以在线使用这些密码生成器之一，也可以使用十六进制转储轻松生成释义，如下所示：

```
hexdump -vn16 -e'4/4 "%08X" 1 "\n"' /dev/urandom
```

6\.  Once you've successfully created your password, your private key will be saved in `/<your_chosen_directory>/.ssh/id_rsa` and your public key will be saved in `/<your_chosen_directory>/.ssh/id_rsa.pub`.
成功创建密码后，您的私钥将保存在 中，您的公钥将保存在 中。/<your_chosen_directory>/.ssh/id_rsa/<your_chosen_directory>/.ssh/id_rsa.pub

![Screenshot-2022-08-30-at-1.18.15-PM](https://www.freecodecamp.org/news/content/images/2022/08/Screenshot-2022-08-30-at-1.18.15-PM.png)

Now you can copy the created key into the authorized_keys file of the server you want to connect to using ssh-copy-id (this tool is a part of openSSH) like so:
现在，您可以使用 ssh-copy-id（此工具是 openSSH 的一部分）将创建的密钥复制到要连接的服务器的 authorized_keys 文件中，如下所示：

```
ssh-copy-id username@remote_host
```

Alternatively, you'd want to add your SSH private key to the ssh-agent and store your passphrase in the keychain. You can then add the SHH key to your server's account via a dashboard UI or so (for example, using tools like Git or GitHub).
或者，您希望将 SSH 私钥添加到 ssh 代理中，并将密码存储在钥匙串中。然后，您可以通过仪表板 UI 等将 SHH 密钥添加到服务器的帐户中（例如，使用 Git 或 GitHub 等工具）。



## Conclusion
结论
Although a strong password helps prevent brute-force attacks, public key authentication provides a much more secure authentication process using cryptography.
尽管强密码有助于防止暴力攻击，但公钥身份验证使用加密技术提供了更安全的身份验证过程。

I hope you found this article helpful. In addition, you can check out the [ssh-keygen manual page](https://man.openbsd.org/ssh-keygen.1) and the following resources for further learning:
希望这篇文章对您有所帮助。此外，您可以查看 ssh-keygen 手册页和以下资源以进行进一步学习：

-   [Connecting to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
-   [Get started with OpenSSH for Windows](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse)

Cheers! 💙
