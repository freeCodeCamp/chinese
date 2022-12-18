> -  原文地址：[SSH Keygen Tutorial – How to Generate an SSH Public Key for RSA Login](https://www.freecodecamp.org/news/ssh-keygen-how-to-generate-an-ssh-public-key-for-rsa-login/)
> -  原文作者：[Bolaji Ayodeji](https://www.freecodecamp.org/news/author/bolajiayodeji/)
> -  译者：
> -  校对者：

![SSH Keygen Tutorial – How to Generate an SSH Public Key for RSA Login](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/article-banner.jpg)

Cryptography uses encryption and decryption to conceal messages. This introduces secrecy in information security.

The purpose of cryptography is to ensure secure communication between two people or devices who are connecting through insecure channels.

The sender often employs an encryption key to lock the message, while the recipient uses a decryption key to unlock the message.

In general, cryptography employs two strategies:

1.  **Symmetric-key Cryptography (Private key):** With this technique, the encryption and decryption keys are both known to the sender and receiver. Some examples of algorithms that use this technique include One Time Pad cipher, Vernam cipher, Playfair, Row column cipher, and Data Encryption Standard (DES).
2.  **Asymmetric Key Cryptography (Public key):** With this technique, each person has two keys: the Private (secret and accessible to the creator) and Public keys (freely available to anyone). The sender and receiver use different keys for encryption and decryption. Some examples of algorithms that use this technique include the Rivest–Shamir–Adleman algorithm (RSA), Diffie - Hellman Key Exchange (DHE), and the Digital Signature Algorithm (DSA).

![Cryptography--2-](https://www.freecodecamp.org/news/content/images/2022/06/Cryptography--2-.png)

The Encryption Model for Secured Data Transmission

Software engineers generally have to authenticate with servers or other services like GitHub for version control.

As opposed to using password authentication, they can use public key authentication to generate and store a pair of cryptographic keys on their computer. Then they can configure the server running on another computer to recognize and accept those keys.

This is the asymmetric key cryptography technique flow we discussed earlier and it is a more secure authentication process.

In this tutorial, you will learn how it all works, what SSH means, and how to generate SSH keys with an RSA algorithm using SSH keygen.

## Prerequisites

-   A working computer running on any operating system.
-   Basic knowledge of navigating around the command-line.
-   A smile on your face :)

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

## Brief Introduction to SSH (**S**ecure **Sh**ell Protocol)

Public key authentication using SSH is a more secure approach for logging into services than passwords. Understanding SSH is easier once you understand how cryptography works from the above intro.

Here's a helpful basic definition:

> "The **S**ecure **Sh**ell Protocol is a **cryptographic network protocol** for operating network services securely **over an unsecured network**." ([Source](https://en.wikipedia.org/wiki/Secure_Shell))

SSH is used between a client and a server both running on the SSH protocol to remotely login into the server and access certain resources through the command line.

![image-197](https://www.freecodecamp.org/news/content/images/2022/06/image-197.png)

Source: SSH Academy

There is an open-source version of the SSH protocol (version 2) with a suite of tools called [OpenSSH](https://www.openssh.com) (also known as OpenBSD Secure Shell). This project includes the following tools:

-   Remote operations: [ssh](https://man.openbsd.org/ssh.1), [scp](https://man.openbsd.org/scp.1), and [sftp](https://man.openbsd.org/sftp.1).
-   Key generation: [ssh-add](https://man.openbsd.org/ssh-add.1), [ssh-keysign](https://man.openbsd.org/ssh-keysign.8), [ssh-keyscan](https://man.openbsd.org/ssh-keyscan.1), and [**ssh-keygen**](https://man.openbsd.org/ssh-keygen.1).
-   Service side: [sshd](https://man.openbsd.org/sshd.8), [sftp-server](https://man.openbsd.org/sftp-server.8), and [ssh-agent](https://man.openbsd.org/ssh-agent.1).

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

## How to Generate an SSH Public Key for RSA Login

Our goal is to use ssh-keygen to generate an SSH public key using the RSA algorithm. This will create a key pair containing a private key (saved to your local computer) and a public key (uploaded to your chosen service).

Now to proceed, follow the steps below to achieve this:

1.  Install OpenSSH if you don't have it installed already using the command below:

```
// for mac

brew install openssh

// for linux

sudo apt install openssh-client && sudo apt install openssh-server
```

2\.  Create a private/public key pair with an RSA algorithm (2046-bit encryption by default), using the command:

```
ssh-keygen -t rsa
```

3\.  Or, if you want to create with an RSA algorithm with 4096-bit encryption, use the command:

```
ssh-keygen -t rsa -b 4096
```

4\.  Enter a file location to save the key to (by default it will save to your users directory (for example, `(/Users/bolajiayodeji/.ssh/id_rsa)` ).

5\.  Enter a passphrase for extra security to your private key. Generally, a good passphrase should have at least 15 characters (including at least one upper case letter, lower case letters, numerical digits, and special characters) and must be difficult to guess. You can use one of those password generators online or use hexdump to generate a paraphrase easily like so:

```
hexdump -vn16 -e'4/4 "%08X" 1 "\n"' /dev/urandom
```

6\.  Once you've successfully created your password, your private key will be saved in `/<your_chosen_directory>/.ssh/id_rsa` and your public key will be saved in `/<your_chosen_directory>/.ssh/id_rsa.pub`.

![Screenshot-2022-08-30-at-1.18.15-PM](https://www.freecodecamp.org/news/content/images/2022/08/Screenshot-2022-08-30-at-1.18.15-PM.png)

Now you can copy the created key into the authorized\_keys file of the server you want to connect to using ssh-copy-id (this tool is a part of openSSH) like so:

```
ssh-copy-id username@remote_host
```

Alternatively, you'd want to add your SSH private key to the ssh-agent and store your passphrase in the keychain. You can then add the SHH key to your server's account via a dashboard UI or so (for example, using tools like Git or GitHub).

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

## Conclusion

Although a strong password helps prevent brute-force attacks, public key authentication provides a much more secure authentication process using cryptography.

I hope you found this article helpful. In addition, you can check out the [ssh-keygen manual page](https://man.openbsd.org/ssh-keygen.1) and the following resources for further learning:

-   [Connecting to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
-   [Get started with OpenSSH for Windows](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse)

Cheers! 💙