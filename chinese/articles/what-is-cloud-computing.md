> -  原文地址：[What is Cloud Computing?Introduction to the Cloud for Beginners](https://www.freecodecamp.org/news/what-is-cloud-computing/)
> -  原文作者: [Zubair Idris Aweda](https://www.freecodecamp.org/news/author/zubair-idris-aweda/)
> -  译者: JunoWei
> -  校对者: 


January 3, 2024 / [#Cloud Computing][1]

<!-- more -->

# What is Cloud Computing? Introduction to the Cloud for Beginners

![Zubair Idris Aweda](https://www.freecodecamp.org/news/content/images/size/w60/2023/02/IMG_6413-2.jpg)

[Zubair Idris Aweda][2]

  ![What is Cloud Computing? Introduction to the Cloud for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2022/05/cloud-sky.jpeg)

As the digital landscape continues to evolve and technology marches forward, cloud computing has remained an important topic for developers to learn.
随着数字化领域和科技的不断发展，云计算仍然是一个重要议题，值得开发人员学习。
You've probably encountered cloud requirements in job listings, heard people talk about it in conversations, or seen ads by companies offering cloud services – and now you're interested in learning more about it.
你可能会在岗位招聘中遇到关于“云”的相关需求，可能会在对话中听到关于“云”的相关讨论，可能会在云服务商发布的广告中看到关于“云”的相关宣传，现在你对“云”充满好奇，想要知道更多。
In this article, I'll demystify the cloud for you, breaking down complex concepts into easy-to-understand bits.
在这篇文章中，我会将复杂的概念分成简单易懂的小模块，让你更加容易理解“云”。
Here's what we'll cover in this article:
这是本文中涉及的主要内容：
-   [云计算出现前的世界](#the-world-before-cloud-computing)
-   [云计算是什么?](#what-is-cloud-computing)
-   [云服务供应商](#cloud-service-providers)
-   [云服务类型](#different-cloud-services)
-   [云计算助力解决的难题](#challenges-that-cloud-computing-helps-solve)
-   [云计算是如何帮助我们的?](#how-can-cloud-computing-help-you)
-   [Cloud Deployment Models][9]

So let's dive in and learn cloud computing basics so you can start your journey into this growing field.
让我们从学习云计算的基础内容开始，然后你可以在云计算这个持续发展的领域深入学习。
<h2 id="the-world-before-cloud-computing">云计算出现前的世界</h2> ## The World Before Cloud Computing

To understand cloud computing, it is important to understand the problem cloud computing tries to solve. This will help you understand its history and appreciate the convenience it brings into the world of technology.
了解云计算尝试解决的问题，可以帮助你理解云计算的历史发展，并感激云计算给世界科技带来的便携，这样才能更好地全方位理解云计算。
Before the cloud, deploying web services was a very expensive process. To deploy a web application, you had to purchase servers with the correct amount of storage and memory, keep them on-site, setup these servers, and use them to host your application.
“云”出现以前，部署网络服务曾是一个昂贵的过程。为了部署一套网络应用程序，首先需要采购符合存储要求的服务器，然后找到合适的空间存放，搭建好服务器后才能使用服务器托管应用程序。
This comes with many additional costs, other than the original server costs, like electricity and the data required to keep your server up and online every time. There are also security concerns, as you'll need to prevent your server from being damaged or stolen by bad actors.
除了服务器的购置费，为了维持服务器不间断运行并持续在线，后续还会有很多额外支出，譬如电费和流量费用。同时还有安全问题，需要避免服务器遭到恶意破坏和盗取信息。
Beyond all this, many developers are not exactly server specialists. So you would either have to train your developers to become system admins or hire system admins to setup and configure the servers to work with your applications. Then to deploy a new application, you'd have to repeat the whole process with new costs.
除此之外，大多数的开发人员都不是精通服务器的专家，所以要么培养开发人员做系统管理者，要么招聘系统管理的专职人员，负责搭建配置服务器保证应用程序的稳定运行。而安装部署一套新的应用程序，重复整个过程并产生新的费用。
Scaling applications wasn't easy before the cloud. If you tried to manage costs and not buy too many servers, or hire many system engineers, you might end up with insufficient compute power and you'd need to scale. Scaling means buying more servers (or replacing existing ones with better ones), configuring them to match existing configurations, and deploying your applications on them.
扩展是指购买更多的服务器（或者是购买更好地服务器替换已有的服务器），配置符合现有配置的环境，然后将应用程序部署在新的服务器上。“云”时代之前，扩展应用程序并没有很方便，如果一开始控制成本，没有购入足够多的服务器或者是招聘足够多的系统工程师，最终可能导致算力不充足而需要扩展。
These are some of the issues we faced before cloud computing. Now, you might wonder, "how does cloud computing solve these?". Let's find out.
这些都是云计算出现以前我们面对的问题，或许你现在困惑“云计算是怎么解决这些问题”，请看下文讲解。
<h2 id="what-is-cloud-computing">云计算是什么？</h2>## What Is Cloud Computing?

> **Cloud computing** is the on-demand availability of computer system resources, especially data storage (cloud storage) and computing power, without direct active management by the user.  
> **云计算**是一种按需提供的计算系统资源，例如数据存储（云存储）、算力等，且不需要用户直接主动管理。
> Cloud computing relies on sharing of resources to achieve coherence and typically uses a pay-as-you-go model, which can help in reducing capital expenses but may also lead to unexpected operating expenses for users. – [维基百科](https://en.wikipedia.org/wiki/Cloud_computing)
>云计算通过资源共享获取一致性，采用按使用量付费的模式，协助降低固定资产费用，同时可能需要用户支付超出预期的营业费用。

Think of Cloud Computing like renting a computer from a cybercafe. In a cybercafe, they have the computers ready for use – you just come in, pay for your desired time, and use the computer for that period.
想象一下，云计算与在网吧中使用电脑类似。网吧中准备好了电脑，当你走进网吧时，只需要支付期望使用时间对应的费用，然后在这个时间段内就可以随便使用电脑。
In the case of cloud computing, you don't have to worry about buying the computer, or protecting it, or covering the running costs. The cloud provider covers all these worries. You rarely ever have to worry about software issues, or the absence of specific software on these computers. And the best part? You only pay for the computer you use, and only for the time you use it.
而云计算呢，你不需要购入、运维服务器，也不用承担运行成本，你也不用担心软件问题或者这些服务器缺少特定的软件，因为这些都由云服务供应商负责。云计算体验感最佳的地方就在于，你只需要付费订购需要使用的服务器以及服务时间段。
So in more relatable terms, say you have a web application to deploy. You go to a cloud service provider, select specific server requirements your application requires, select software dependencies, and deploy your application, with zero worries.
进一步而言，当部署一套网络应用程序时，不用考虑很多事情，只用找到一个云服务供应商，选择符合程序要求的服务器，选择操作系统，然后就可以部署应用了。
Cloud computing as explained to a five year old is _"letting someone else manage your computing needs"_. You have some website that you need to put online, or maybe a mobile app, or some other piece of technology, and instead of having to buy servers to deploy it, someone else buys and sets up the servers. You simply upload your files. Its almost the same as renting an apartment, but now you are renting compute space on another computer.
用简单易懂的话解释，云计算就是让别人来管理你的计算需求。当需要上线网站、手机APP或其他类似应用时，不再需要购置实体的服务器进行部署，只要使用他人已经准备好的服务器，上传代码文件即可。这和租房子类似，而现在做的就是在另外一台电脑中租用了计算空间。
<h2 id="cloud-service-providers">云服务供应商</h2>## Cloud Service Providers

Companies that provide these cloud services are called cloud services providers. These companies already have many servers, and system engineers. They're concerned with all the stuff you don't have to worry about like server costs and running costs. They provide a web interface where you can access their servers and use them when you need.
云服务供应商是指提供云服务的公司。这些公司通常有很多服务器和系统工程师，会提供全流程服务，用户无需担心类似服务器成本和运行费用等问题，他们会给用户提供一个用于连接服务器的用户界面，当用户需要时使用即可。
Currently, the most popular cloud service providers are Google (Google Cloud Platform), Amazon AWS (Amazon Web Services), and Microsoft (Azure). These companies offer similar services, but with various different price models, features, and so on.
目前最受欢迎的云服务供应商是谷歌云、亚马逊（AWS）和微软（Azure），这些公司提供的服务都比较类似，但是定价模式、特点等各有不同。
Here's a summary of what each of them offers:
以下是这些公司的提供内容的简介：
### Google
### 谷歌

They offer IaaS (Compute Engine), Containers As A Service, CaaS, (Kubernetes Engine), and PaaS (App Engine) services. They also offer data storage services, with tools like Google Cloud Storage, Cloud SQL, and Cloud Bigtable.
谷歌提供基础架构即服务IaaS（Compute Engine），容器即服务CaaS（Kubernetes Engine）以及平台即服务PaaS（App Engine）等服务，同时提供数据存储服务，如Cloud Storage, Cloud SQL以及Bigtable等产品。
### AWS
### 亚马逊
This is the first cloud services provider. They offer IaaS (Elastic Compute, EC2), CaaS (Elastic Kubernetes Service, EKS)  and PaaS (Elastic Beanstalk) services. They also offer data storage services, with tools like Amazon S3, and DynamoDb.
亚马逊是第一家提供云服务的公司，提供基础架构即服务IaaS（Elastic Compute, EC2），容器即服务CaaS（Elastic Kubernetes Service, EKS）以及平台即服务PaaS（Elastic Beanstalk）等产品，同时提供数据存储服务，如Amazon S3、 DynamoDb等产品。
### Microsoft
### 微软
They offer IaaS (Virtual Machine), CaaS (Kubernetes Service, AKS), and PaaS (App Service) services. They also offer data storage services, with tools like Cosmos DB.
微软提供基础架构即服务IaaS（Virtual Machine），容器即服务CaaS（Kubernetes Service, AKS）以及平台即服务PaaS（App Service）等产品，同时提供数据存储服务，如Cosmos DB等产品。
To maximise resources, cloud service providers have their clients sharing servers. The clients don't have to know or worry about this allocation.
云服务供应商通常为了资源利用最大化会让用户共享服务器，但用户无需知道这方面的内容，也不用担心。
Now let's understand what some of the above acronyms/terms mean so you have a better idea of what these cloud services are.
接下来我们讲解一下以上提到的一些云服务类型，以便于更好理解这些云服务内容。
<h2 id="different-cloud-services">云服务类型</h2>## Different Cloud Services

Cloud service providers offer plenty of different computing services. Here are the most common services:
云服务供应商可以提供很多云服务类型，以下是最常见的服务类型：
### SaaS (Software As A Service)
### SaaS（软件即服务）
![saas-778x445](https://www.freecodecamp.org/news/content/images/2022/05/saas-778x445.jpeg)

[Geek Super](https://www.google.com/url?sa=i&url=https%3A%2F%2Fgeeksuper.com%2Fadvantages-of-saas-platforms-for-online-courses%2F&psig=AOvVaw0J54lC0WsxXAoS0L2czE27&ust=1652833369985000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCIDvwOio5fcCFQAAAAAdAAAAABAO)

This service involves you just using some software without any knowledge of its source code or host environment or development details. You just use it and trust that it's being managed and updated properly.
这项服务是指用户直接使用一些软件应用，不用关心源代码、托管环境或者开发细节等事情。只是使用软件，并且相信软件会被持续管理与升级。
### PaaS (Platform As A Service)
### 平台即服务（PaaS）
Here, you focus only on your application development as everything has been handled (the hardware, computing environments, and required software).
这项服务是指用户只需专注应用的开发，其他的事项都已经准备好了（如硬件、计算环境和需要的软件）
### IaaS (Infrastructure As A Service)
### 基础架构即服务（IaaS）
This is the most flexible of all cloud services. Here you have the most control over things. You can customise and change things as you see fit.
这项服务是所有云服务中最复杂的类型，用户对订购的服务拥有最大的自主权，可以按照用户自己的想法适配和修改，
But you don't own the servers. The cloud service provider only provides you with the infrastructure you need, and you are responsible for creating your own computing environments and installing required software for your application to work.
但用户没有服务器的所属权。云服务供应商为用户提供所需的基础架构，用户负责搭建计算环境，安装运行应用程序所需的软件。
The idea here is similar to buying hardware. The only difference is that now, you're renting it and it's virtual (to you).
这个方式与购买硬件非常类似，唯一的区别是用户租用并且虚拟拥有（没有实物）。

<h2 id="challenges-that-cloud-computing-helps-solve">云计算助力解决的难题</h2>## Challenges that Cloud Computing Helps Solve

Cloud computing removes the need to purchase and setup servers on-site every time a new application needed to be developed. This is a great advantage as it saves companies a lot of money – both on servers, as well as on the engineers who would setup and configure the servers to work for your applications.
云计算可以避免每次开发新的应用时就需要购置并现场搭建物理服务器，最大的优势就是可以帮助公司降低成本，包括服务器费用和搭建配置服务器的人工费。
Scaling isn't usually easy as it often involves a lot of setup and configuration. For example, to provide more storage for an application, you could get an external data store and connect to the current server. This definitely has its limits, though.
扩展服务器因为需要有大量的搭建和配置工作，所以通常都不是简单的事情。譬如，一个应用程序需要更多的存储空间，一般情况下可以通过给现有服务器外置一个数据存储来解决，但这种方法往往有局限性。
A point will likely come when you need a better server, or an additional server. Either way, every software that you installed to get it running on the former server would have to be installed again on the new server. Application files would have to be moved, and so on.
这时就会想到购置一个配置更好的服务器或者再购置一个服务器，无论是哪种方法，旧服务器上安装的与应用运行相关的所有软件，都需要在新的服务器上再安装一遍，并且还有把应用的文件转移到新服务器等操作。
Also, these applications are often underutilising these hardware resources. This, from the business perspective, is a loss. An initial fix to this was virtualisation. This basically meant creating virtual (contained) environments where the application has all of its required software and can function well on the servers. These led to better utilisation of resources. But it definitely wasn't the perfect solution.
通常情况下，这些服务器资源也不会被应用程序充分利用。从商业角度出发，这是一种损失。这个问题最初的解决方案是虚拟化，在服务器中安装虚拟环境，并在虚拟环境中安装应用运行需要的所有软件，应用就可以在虚拟环境中运行起来了。这个方案虽然实现了资源最大化利用，但并不完美。
<h2 id="how-can-cloud-computing-help-you">云计算有什么好处?</h2>## How Can Cloud Computing Help You?

Cloud computing offers plenty benefits, some of which are highlighted here:
云计算有很多好处，一些突出优势如下：
-   It is cheaper to pay a subscription than to build a whole datacenter. You have plans that let you use only what you use.
-   相比于建立一个完整的数据中心，付费订购更加划算，只需要计划好需要使用的配置。
-   Scaling and management are responsibilities of the cloud service provider.
-   云服务供应商负责扩展和运维服务器。
-   Easy setup. Developers get to just focus on the code as all the actual server and hardware setup can be done using a user interface provided by the cloud service provider. This leads to faster development time, and applications are shipped faster.
-   搭建方便，开发人员只需要专注于代码编写，所有的服务器搭建配置都能通过云服务供应商提供的用户界面操作完成，可以缩短开发时间，应用程序交付速度也更快。
-   Accessibility. Cloud service providers tend to have multiple datacenters around the world, making sure your users always get access to your services as fast as possible.
-   可访问性，云服务供应商一般在全球有多个数据中心，确保应用的使用者可以快速地连接到服务器。
-   Data security. Because your data is not stored in your physical space anymore, it's more difficult for bad actors to come in and damage or steal your servers.
-   数据安全，因为数据不再存储在物理服务器上，所以更不容易被恶意攻击或者盗取数据信息。

<h2 id="cloud-deployment-models">云计算部署模式</h2>## Cloud Deployment Models

A cloud deployment model determines where your data (and applications) is stored and how your customers interact with it.
云计算部署模式决定了数据（以及应用）存储位置和用户与服务器交互方式。
### 公有云Public cloud

Here, everything is handled by the cloud service provider. It's the most popular model. When using a public cloud, you're not concerned about the server maintenance, and you're sure of high reliability and the possibility of unlimited scalability. This usually means you share servers with other people.
公有云的所有事项都由云服务供应商负责，这是最受欢迎的模式。选择使用公有云，就不需要关心服务器的运维，并且有高可靠性和无限扩展的可能性，但通常也意味着需要和他人共享服务器。
It is the cheapest model, and companies usually use a pay-as-you-go model (so you never have to commit too much upfront financially).
这也是最便宜的模式，公司一般会采用按使用量付费的方式（所以无需过早提前支付）。
A potential issue with this is, having everything handled by the cloud service provider means you have little or no control over the services.
但这个模式有一个潜在弊端，因为所有事项由云服务供应商负责，意味着用户几乎没有服务器的控制权。
### 私有云Private cloud

This is similar to the traditional ways of hosting applications. Here, you do have your own data centers. This means that only you get to use the servers and have unlimited control over them.
私有云模式与传统托管应用程序的方式类似，需要有自己的数据中心，只有用户自己可以使用服务器，意味着用户拥有服务器的最高控制权限。
Now, the difference is, you provide a self service interface to users of your servers, usually developers in your company. You still have to manage the physical servers, and you're responsible for their maintenance and scaling.
不同的是，用户可以给服务器的使用者——通常是用户公司的开发人员，提供一个私有的服务界面。用户仍然需要管理这些物理服务器，需要自行负责运维和扩展。
This method can be more secure than the public cloud, as you have control and can setup as much security as possible. It also comes in very handy if you have data that must not get out due to compliance requirements.
这个模式让用户可以自行控制并且尽可能地搭建安全性环境，所以比公有云更安全。如果基于合规要求必须保证数据不会被泄露，这种模式就最符合要求。
But this method is way more cost intensive, although with a more predictable or fixed pricing model. These servers and hardware are expensive. Having them means having someone to manage them, which means more expense. Scaling also means buying new devices every time.
不过这种模式是高额成本的模式，虽然现在有了固定价格模型，但服务器和硬件依然很昂贵，同时还需要额外费用招人运维，而且扩展也需要每次购置新的设备。
### 混合云Hybrid cloud

![What-is-Hybrid-Cloud](https://www.freecodecamp.org/news/content/images/2022/05/What-is-Hybrid-Cloud.jpeg)

混合云 | [W3Codemasters](https://www.google.com/url?sa=i&url=https%3A%2F%2Fw3codemasters.in%2Fwhat-is-hybrid-cloud-benefits-of-a-unified-hybrid-cloud-platform%2F&psig=AOvVaw3ekfLv5gwNG2kjXGoFfWA4&ust=1652833178148000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCPj5qKKp5fcCFQAAAAAdAAAAABAI)

This approach merges both the public and cloud methods. It basically allows you more flexibility. You get to use public services, and also setup your own when you need to. Here you're able to comply with regulations, through your servers, and also offer high accessibility, through a cloud service provider. This method is perfect for organizations trying to migrate from one model to another, keeping the business operation during the transition.
混合云是将公有云和私有云混合起来的模式，更具有灵活性。在使用公有云的同时，也可以按需搭建私有云。服务器用于遵守监管规则，云服务供应商则可以使访问更方便。当机构需要模式转换时，这种模式是最佳的选择，在转移过渡期间依然能够被使用维持商业运行。
An example application of this would be hosting an application on a public cloud and connecting it to a database on a secured private cloud.
举个例子，应用程序托管在公有云上，再连接安装在安全的私有云上的数据库。
This method is also more expensive than the public cloud as you do have to cater for some of the servers. It could also get complicated as data gets distributed between multiple servers and applications.
这个模式因为需要一些自有服务器，所以定价比公有云更贵；而且因为数据和应用分散分布于多个服务器，比公有云也更为复杂。
### 如何选择部署模式How to Choosed a Deployment Model

The choice between public, private, or hybrid cloud deployment models depends on an organization's unique requirements.
基于用户的特殊需求决定使用公有云、私有云还是混合云。
-   Public clouds offer cost efficiency and global reach
-   公有云定价合理获取便利
-   Private clouds provide enhanced security and control
-   私有云提供更可靠的安全性和更高的控制权
-   Hybrid clouds offer flexibility and a strategic balance between the two.
-   混合云更加灵活，是介于公有云与私有云之间的方式

The decision ultimately hinges on factors such as security needs, compliance requirements, scalability, and the level of control desired over the IT infrastructure.
一些重要因素，如安全需求、合规要求、可扩展性、IT架构中对控制权限的要求等，最终决定部署模式
## **Conclusion总结**

Now you should have have enough information to kickstart your career in cloud computing.
学习了基础知识后，你现在可以开始深入学习云计算了。
If you have any questions or relevant advice, please get in touch with me to share them.
如果你有任何问题或者相关建议，请联系并转述给我。
To read more of my articles or follow my work, you can connect with me on [LinkedIn][13], [Twitter][14], and [Github][15]. It’s quick, it’s easy, and it’s free!
想到阅读更多我的文章或者关注我的工作，你可以通过[LinkedIn](https://www.linkedin.com/in/idris-aweda-zubair-5433121a3/)、[Twitter](https://twitter.com/AwedaIdris)、[Github](https://github.com/Zubs)，快速方便并且是免费的！

---

![Zubair Idris Aweda](https://www.freecodecamp.org/news/content/images/size/w60/2023/02/IMG_6413-2.jpg)

[Zubair Idris Aweda](/news/author/zubair-idris-aweda/)

Experienced Software Engineer with a demonstrated history of working in the computer software industry. Skilled in PHP, JavaScript, and other Web Development technologies.
在计算机软件领域有多年软件工程经验，精通PHP、JavaScript和其他web开发工具。

---

If you read this far, thank the author to show them you care. Say Thanks

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started][17]

[1]: /news/tag/cloud-computing/
[2]: /news/author/zubair-idris-aweda/
[3]: #the-world-before-cloud-computing
[4]: #what-is-cloud-computing
[5]: #cloud-service-providers
[6]: #different-cloud-services
[7]: #challenges-that-cloud-computing-helps-solve
[8]: #how-can-cloud-computing-help-you
[9]: #cloud-deployment-models
[10]: https://en.wikipedia.org/wiki/Cloud_computing
[11]: https://www.google.com/url?sa=i&url=https%3A%2F%2Fgeeksuper.com%2Fadvantages-of-saas-platforms-for-online-courses%2F&psig=AOvVaw0J54lC0WsxXAoS0L2czE27&ust=1652833369985000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCIDvwOio5fcCFQAAAAAdAAAAABAO
[12]: https://www.google.com/url?sa=i&url=https%3A%2F%2Fw3codemasters.in%2Fwhat-is-hybrid-cloud-benefits-of-a-unified-hybrid-cloud-platform%2F&psig=AOvVaw3ekfLv5gwNG2kjXGoFfWA4&ust=1652833178148000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCPj5qKKp5fcCFQAAAAAdAAAAABAI
[13]: https://www.linkedin.com/in/idris-aweda-zubair-5433121a3/
[14]: https://twitter.com/AwedaIdris
[15]: https://github.com/Zubs
[16]: /news/author/zubair-idris-aweda/
[17]: https://www.freecodecamp.org/learn/
