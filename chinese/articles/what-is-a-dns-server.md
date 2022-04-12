> -  原文地址：[What is a DNS Server? DNS Servers Explained](https://www.freecodecamp.org/news/what-is-a-dns-server/)
> -  原文作者：[Quincy Larson](https://www.freecodecamp.org/news/author/quincylarson/)
> -  译者：
> -  校对者：

![What is a DNS Server? DNS Servers Explained](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/christina-wocintechchat-com-glRqyWJgUeY-unsplash--1-.jpg)

The web would not work at all without DNS servers. They are responsible for translating domain names into IP addresses. Then computers use those IP addresses to locate and connect to web servers, and send users to the right websites.

Many people first learned about the DNS system in October of 2021, when all of Facebook's apps and websites went down at the same time, due to a catastrophic DNS misconfiguration.

### What is an IP Address?

An IP address is a unique identifier for a device on a network. They are used to route traffic to the correct device on a network.

The primary IP address of google.com, for instance, is 172.217.165.14.

IP addresses can be hard to remember. Especially if they are long and complicated. Human-readable names are much easier to remember.

## What are the main types of DNS Servers?

There are many different types of DNS servers, each with its own unique capabilities.

The most common type of DNS server is the recursive DNS server. This is responsible for performing DNS lookups on behalf of its clients.

### How Recursive DNS Servers Work

A client – typically a web browser – sends a DNS query (what's the IP address of this domain name?) to a recursive DNS server. That server resolves the query, then returns the answer to the client.

Recursive DNS servers are typically run by Internet Service Providers (ISPs). These are the companies you pay for your internet access each month.

### How Authoritative DNS Servers Work

Another type of DNS server is the Authoritative DNS server. These are responsible for storing the DNS records for a domain. They contain a database of public IP addresses and corresponding hostnames.

Authoritative DNS servers are responsible for translating domain names to IP addresses. This allows users to access websites using domain names instead of IP addresses.

Authoritative DNS servers are typically provided by domain registrars.

### What are the Ways a DNS Servers Can be Configured?

You can configure a DNS servers using one of these approaches:

-   **Static IP Address servers** – permanent IP addresses that have been assigned to specific computers. Static IP addresses are ideal for computers that need to be accessible at all times – such as servers.
-   **Dynamic IP Address servers** – these are useful when devices aren't permanently connected to the network (such as with public Wi-Fi networks). You can also use these to balance network traffic, or assign temporary IP addresses to devices that only infrequently connect to the network.
-   **Round Robin servers** – these resolves domain names by returning a list of IP addresses – each corresponding to a server able to provide the requested information. Round Robin server can distribute traffic evenly across a group of servers. This ensures that no single server is overloaded with requests, and that other servers receive their fair share of traffic, too.
-   **Load Balancing servers** – these figure out the most efficient way to distribute requests across servers. freeCodeCamp.org uses load balancing servers (also called "Load Balancers") and I imagine most major websites do, too.

You can also configure DNS servers to use different types of caching, which can improve performance.

### What is caching?

Caching is a technique where you store data from past requests in a temporary memory location. The thinking is: if someone needs this information, someone else will probably need this information as well.

When someone requests data from your server, you can then first check to see whether the data is stored in your cache. If it is, you can retrieve it from cache rather than the original location.

This is how Content Delivery Networks (CDNs) work. Caching can dramatically speed up the performance of your website or service.

## Does DNS change your IP address?

No. Switching DNS servers will not change your IP address.

DNS servers translate domain names to IP addresses. By default, all the web browsers come with the option to automatically detect the DNS settings of their current network.

So when you connect to a Virtual Private Network (VPN), the DNS server of your VPN replaces the DNS server of your ISP.

## How do I setup a DNS server?

If you want to set up your own DNS server for your company or organization, here are some steps to get started:

1.  Choose the right DNS server software. Some popular options include BIND, ISC DHCP, and PowerDNS.
2.  Install the DNS server software on a dedicated server. This will help you ensure that your server has the resources it needs to run reliably. If you use the cloud, you won't have to worry as much about a power outage or network outage taking down your DNS.
3.  Configure the DNS server software. This includes setting up the DNS zones and records.
4.  Test the DNS server. Once it's is up and running, you might stress test it by simulating traffic to make sure it doesn't "fall over."

There are also plenty of hosted DNS server tools you can use, which should work out of the box and save you some time. These cost a bit of money each month, but require less expertise to supervise.

## I hope you learned a lot about DNS Servers.

I hope you've found this helpful. If you want to learn more about programming and technology, try [freeCodeCamp's core coding curriculum](https://www.freecodecamp.org/learn). It's free.