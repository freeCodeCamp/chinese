> -  原文地址：[Linux Networking Commands You Should Know as a Beginner](https://www.freecodecamp.org/news/linux-networking-commands-for-beginners/)
> -  原文作者：[Arunachalam B](https://www.freecodecamp.org/news/author/arunachalam/)
> -  译者：
> -  校对者：

![Linux Networking Commands You Should Know as a Beginner](https://www.freecodecamp.org/news/content/images/size/w2000/2022/12/FreeCodeCamp---Networking-in-Linux.png)

Can you imagine what it would be like to have a laptop but not to be able to access the internet?

If you're a developer (or an aspiring one), you'll likely use the internet every day. So you should learn a few useful networking commands.

To learn networking in Linux, you should also know how to use the Terminal. Because using terminal commands is way more powerful than using the UI. It'll also be faster and more efficient.

## Prerequisites

A basic understanding of the Linux terminal is enough to learn networking in Linux.

## How to Find the IP Address of Your Machine

This is the most basic question in networking and it's the starting point of learning networking.

But, Wait.

### What's an IP Address?

IP stands for "Internet Protocol," which is the protocol (set of rules) governing how data are sent via the internet or a local network.

An IP address is basically a unique address to identify a device on the internet or on a local network.

Ok, now that we know what an IP address is, let's continue.

Being a professional web developer, I work on developing websites along with their backend services.

One day an intern asked me some questions about an interesting project he was working on. He wanted his site to be responsive on desktop, mobile, and tablet.

Though the site looked responsive, once I adjusted the browser window and switched to the mobile view on his laptop, the outcome on the phone after deployment was not so impressive.

So, he asked me for help,

"I wanted to check the site's responsiveness with my mobile in development mode. Is it possible?" he asked.

"Yes, it is. Connect your laptop and mobile on the same network. Find your laptop IP, and navigate to `ip:<server_port>` on your mobile browser", I replied.

So he opened a new tab in the browser and started typing "https://whatismy...", I stopped him and asked what he was searching for.

He told me he was finding his IP address.

"Use `ifconfig` command to find the IP address of your machine", I replied.

He opened up the terminal and tried out the command, like this:

```bash
ifconfig
```

Command to find IP address of your machine

![ikkm_6NNhq1HetyT5ahF0dKUda-E23afbdn6seevR-tZTEalhOBN-W75GhUApYv1Xiw-ojtm9YLqIAXcalxsSpal53tsOefrLuzbhMzlK-2N7bkyUu4PZyharx0XzsQSN-9KBNjZ4pk_kLnnaTiyQcsYDBaSF5mAUSz0EGZx1pGJGlBO0PYhQZEpOjVCVg](https://lh3.googleusercontent.com/ikkm_6NNhq1HetyT5ahF0dKUda-E23afbdn6seevR-tZTEalhOBN-W75GhUApYv1Xiw-ojtm9YLqIAXcalxsSpal53tsOefrLuzbhMzlK-2N7bkyUu4PZyharx0XzsQSN-9KBNjZ4pk_kLnnaTiyQcsYDBaSF5mAUSz0EGZx1pGJGlBO0PYhQZEpOjVCVg)

Sample Output of the ifconfig command

"Oh, Man! I'm confused now. Which is my IP here?", was his next question.

So I explained to him about each block in the above output:

Before walking into each block, you can find that few items are common for all blocks. Let's learn about them.

### Characteristics of Network Interface

The first line shows UP, LOOPBACK, RUNNING, NOARP, MULTICAST, etc. These are the characteristics of the network interface. For example, able to do BROADCAST, able to do MULTICAST. By default, the `ifconfig` command lists only the UP devices. The interface can also made down.

### What is MTU?

MTU stands for Maximum Transmission Unit. It determines the maximum payload size of a packet that is sent. The default standard value is **1500 bytes**. However, you can increase the payload size of the packet, which allows you to send more data and increase the data transfer rates.

### inet row in ifconfig

**inet** is the internet(IPv4) address assigned to that particular interface.  It will be set by DHCP client.

A **Netmask** is a 32-bit "mask" used to divide an IP address into subnets and specify the network's available hosts.

**Broadcast** address refers to all hosts on the specified network simultaneously.

**Destination** adress is the address of the remote host at the other end of the point-to-point link.

**inet6** is the IPv6 address assigned to that particular interface.

**prefixlen** is called Prefix length which specifies the number of bits in the IP address that are to be used as the subnet mask.

**scopeid** is a id assigned for a zone. A scope is a topological area within which the IPv6 address can be used as a unique identifier for an interface or a set of interfaces.

### RX and Tx

Rx / Tx packets – displays the number of received / transmitted packets  
Rx / Tx bytes – displays the packets size in buckets  
Rx / Tx errors – displays the amount of error packets  
Rx / Tx drop – displays the amount of dropped packets  
Rx / Tx overrun – displays the amount of overrun packets  

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