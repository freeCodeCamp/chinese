> - 原文地址：[How to make your app's architecture secure right now: separation, configuration, and access](https://www.freecodecamp.org/news/secure-application-basics/)
> - 原文作者：Victoria Drake
> - 译者：
> - 校对者：

![How to make your app's architecture secure right now: separation, configuration, and access](https://www.freecodecamp.org/news/content/images/size/w2000/2019/09/cover-2.png)

### If you're a busy developer, this article will be a good starting point for building secure application architecture.

Developers today get to focus more on building software than they were able to in the past, and that’s a great thing.

We’re benefitting from maker culture, an attitude of “always be shipping,” open source collaboration, and a lots of apps that help us prioritize and execute with maximum efficiency.

We’re in an environment of constant creation, where both teams and solo entrepreneurs can be maximally productive.

But sometimes this breakneck-speed productivity shows its downsides.

As I learn more about security best practices, I can’t help but see more and more applications that don’t have a clue. Their developers seem to have a a general lack of awareness of security. This leads to a lack of prioritization of tasks that don’t directly support bringing the product to launch.

The market seems to have made it more important to launch a usable product than a secure one. The prevailing attitude is: “we can do the security stuff later.”

Building a foundation based on expediency rather than longevity is a bad way to build applications. It's a great way to build security debt.

Security debt, like technical debt, amasses when developers make (usually hasty) decisions that can make it more difficult to secure the application later on.

If you’re familiar with the concept of “pushing left” (or if you read my  [article about sensitive data exposure][1]), you’ll know that when it comes to security, sometimes there isn’t a version of “later” that isn’t  _too_  late.

It’s a shame, since following some basic security practices with high benefit yield early in the development process doesn’t take significantly more time than  _not_  following them. Often, it comes down to having some basic but important knowledge that helps you to make the more secure decision.

While application architecture varies greatly, there are a few basic principles you can apply. This article will give you a high-level overview of these areas and point you in the right direction.

There must be a reason we call it application “architecture.” I like to think it’s because the architecture of software is similar in some basic ways to the architecture of a building. (Or at least, in my absolute zero building-creation expertise, how I imagine a pretty utilitarian building to be.)

Here’s how I like to summarize three basic points of building secure application architecture:

1.  Separated storage
2.  Customized configuration
3.  Controlled access and user scope

This is only a jumping-off point meant to get us started on the right foot. A complete picture of a fully-realized application’s security posture includes areas outside the scope of this post, including authentication, logging and monitoring, integration, and sometimes compliance.

## 1\. Separated storage

From a security standpoint, the concept of separation refers to storing files that serve different purposes in different places.

When you’re constructing a building and deciding where all the rooms go, you create the lobby on the ground floor. Administrative offices go on higher floors, usually off the main path. While both a lobby and offices are rooms, you understand that they serve different purposes. They also have different functional needs, and very different security requirements.

![](https://www.freecodecamp.org/news/content/images/2019/09/separation.png)

When it comes to your files, the benefit is perhaps easiest to understand if you consider a simple file structure:

```txt
application/
 ├───html/
 │   └───index.html
 ├───assets/
 │   ├───images/
 │   │   ├───rainbows.jpg
 │   │   └───unicorns.jpg
 │   └───style.css
 └───super-secret-configurations/
     └───master-keys.txt
```

In this simplified example, let’s say that all your application’s images are stored in the  `application/assets/images/`  directory. When one of your users creates a profile and uploads their picture to it, this picture is also stored in this folder. Makes sense, right? It’s an image, and that’s where the images go. What’s the issue?

If you’re familiar with navigating a file structure in a terminal, you may have seen this syntax before:  `../../`. The two dots are a handy way of saying, “go up one directory.” If you execute the command  `cd ../../`  in the  `images/`  directory of the simple file structure above, you’d go up into  `assets/`, then up again to the root directory,  `application/`. This is a problem because of a wee little vulnerability dubbed  [path traversal][2].

While the dot syntax saves some typing, it also introduces the interesting advantage of not actually needing to know what the parent directory is called in order to go to it.

Consider an attack payload script, delivered into the  `images/`  folder of this insecure application, that went up one directory using  `cd ../`  and then sent everything it found to the attacker, on repeat. Eventually, it would reach the root application directory and access the  `super-secret-configurations/`  folder. Not good.

While other measures should be in place to prevent path traversal and related user upload vulnerabilities, the simplest prevention by far is a separation of storage. Core application files and assets should not mix with other data, and especially not with  [user input][3]. It’s best to keep user-uploaded files and activity logs (which may contain juicy data and can be vulnerable to injection attacks) separate from the main application.

You can achieve separation by using a different server, different instance, separate IP range, or separate domain.

## 2\. Customized configuration

While wasting time on customization can hinder productivity, one area that you want to customize is configuration settings.

[Security misconfiguration][4]  is listed in the OWASP Top 10. A significant number of security incidents occur because a server, firewall, or administrative account is running in production with default settings. Upon the opening of your new building, you’d hopefully be more careful to ensure you haven’t left any keys in the locks.

![](https://www.freecodecamp.org/news/content/images/2019/09/defaultkey.png)

Usually, the victims of attacks related to default settings aren’t specifically targeted. They are instead found by automated scanning tools that attackers run over many possible targets. These attackers are testing many different systems to see if any roll over and expose a useful exploit.

The automated nature of this attack means that it’s important to review settings for every piece of the architecture. Even if an individual piece doesn’t seem significant, it may provide a vulnerability that gives an attacker a gateway to the application.

In particular, examine architecture components for unattended areas such as:

-   Default accounts, especially with default passwords, left in service;
-   Example web pages, tutorial applications, or sample data left in the application;
-   Unnecessary ports left in service, or ports left open to the Internet;
-   Unrestricted permitted HTTP methods;
-   Sensitive information stored in automated logs;
-   Default configured permissions in managed services; and,
-   Directory listings, or sensitive file types, left accessible by default.

This list isn’t exhaustive. Specific architecture components, such as cloud storage or web servers, will have other configurable features to review. In general, reduce the application’s attack surface by using minimal architecture components. If you use fewer components or don’t install modules you don’t need, you’ll have fewer possible attack entry points to configure and safeguard.

## 3\. Controlled access and user scope

One of the more difficult security problems to test in an application is misconfigured access control. Automated testing tools have limited capability to find areas of an application that one user shouldn’t be able to access. This is often thus left to manual testing or source code review to discover.

Developers can reduce the risk that this becomes are hard problem to fix later. Consider this vulnerability early on in the software development lifecycle, when architectural decisions are being made. After all, you wouldn’t simply leave your master keys out of reach on a high ledge and hope no one comes along with a ladder.

![](https://www.freecodecamp.org/news/content/images/2019/09/access-1.png)

[Broken access control][5]  is in the OWASP Top 10, which goes into more detail on its various forms. As a simple example, consider an application with two levels of access: administrators, and users. Developers want to build a new feature - the ability to moderate or ban users - with the intention that only administrators would be allowed to use it.

If you’re aware of possible access control vulnerabilities, you may decide to build the moderation feature in a separate area from the user-accessible space. This may be on a different domain, or as part of a model that users don’t share. This reduces the risk that an access control misconfiguration or elevation of privilege vulnerability might allow a user to improperly access the moderation feature later on.

Of course, robust access control in your application needs more support to be effective. Consider factors such as sensitive tokens, or keys passed as URL parameters, or whether a control fails securely or insecurely. Even so, by considering authorization at the architectural stage, you will set yourself up to make further reinforcements easier.

## Security basics for maximum benefit

Developers avoid racking up technical debt by choosing a well-vetted framework. Similarly, developers avoid security debt by becoming aware of common vulnerabilities and the architectural decisions that can help mitigate them. For a much more detailed resource on how to bake security into applications from the start, the  [OWASP Application Security Verification Standard][6]  is a robust guide.

[1]: https://victoria.dev/blog/hackers-are-googling-your-plain-text-passwords-preventing-sensitive-data-exposure/
[2]: https://cwe.mitre.org/data/definitions/22.html
[3]: https://victoria.dev/blog/sql-injection-and-xss-what-white-hat-hackers-know-about-trusting-user-input/
[4]: https://github.com/OWASP/Top10/blob/cb5f8967bba106e14a350761ac4f93b8aec7f8fa/2017/en/0xa6-security-misconfiguration.md
[5]: https://github.com/OWASP/Top10/blob/master/2017/en/0xa5-broken-access-control.md
[6]: https://github.com/OWASP/ASVS
