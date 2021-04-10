> -   原文地址：[How to Be a Good Open Source Project Owner – The Ultimate Guide](https://www.freecodecamp.org/news/ultimate-owners-guide-to-open-source/)
> -   原文作者：JeB Barabanov
> -   译者：zhannicholas
> -   校对者：

![How to Be a Good Open Source Project Owner – The Ultimate Guide](https://www.freecodecamp.org/news/content/images/size/w2000/2021/03/mark-konig-fbKMKNVJjwo-unsplash.jpeg)

![如何成为一名优秀的开源项目负责人——终极指南](https://www.freecodecamp.org/news/content/images/size/w2000/2021/03/mark-konig-fbKMKNVJjwo-unsplash.jpeg)

Have you ever thought about having your own open source project? I bet you have — you’re reading this article.

你有没有想过拥有自己的开源项目？我敢打赌，你一定有——因为你正在读这篇文章。

Maybe you are thinking about it right now. Maybe you came here to learn what to expect, what challenges you’re going to face, and how to deal with them. Well, you’ve come to the right place.

也许你你现在正在考虑这事儿。也许你来这里是为了了解应该对开源项目有何期望，你将面临哪些挑战，以及如何应对这些挑战。好吧，你来对地方了。

The following guide is based on my personal experience in **owning** an open source project. And I do mean owning – not just contributing to – an open source project. There is a big difference, and we’re going to learn why.

以下指南基于我个人 **拥有** 一个开源项目中的经验。我的指的是拥有一个开源项目，而不仅是向一个开源项目做贡献。这两者之间有着巨大的差别，我们将学习为什么。

### So let's get started with...The Ultimate Owners Guide to Open Source

### 所以让我们从开源项目负责人终极指南开始吧……

![](https://www.freecodecamp.org/news/content/images/2021/03/mark-konig-fbKMKNVJjwo-unsplash-1.jpeg)

## Table of contents

*   [Intro](#first-a-bit-about-me)
*   [What is Open Source](#so-what-is-open-source)
*   [Why Start an Open Source Project](#why-start-an-open-source-project)
*   [How to Start an Open Source Project](#how-to-start-an-open-source-project)
*   [How To Write Documentation](#how-to-write-documentation-for-your-open-source-project)
*   [How to Publicize Your Open Source Project](#how-to-publicize-your-open-source-project)
*   [How to Manage Issues and Pull Requests](#how-to-manage-issues-and-pull-requests-in-your-open-source-project)
*   [How to Automate Your Process](#how-to-automate-your-process)
*   [Version management](#version-management)

## 目录

* [介绍](#我是谁)
* [什么是开源](#那么什么是开源)
* [为什么要启动一个开源项目](#为什么要启动一个开源项目)
* [如何发起一个开源项目](#如何发起一个开源项目)
* [如何编写文档](#如何为你的开源项目编写文档)
* [如何推广你的开源项目](#如何推广你的开源项目)
* [如何管理议题与拉取请求](#如何管理议题与拉取请求)
* [如何实现流程自动化](#如何实现流程自动化)
* [版本管理](#版本管理)

![](https://www.freecodecamp.org/news/content/images/2021/03/1_now0_4liLR7fJcvvnWWStQ.jpeg)

## First, A Bit About Me

## 我是谁

My name is Jeb and I’ve been maintaining a few open source projects for a couple of years. The most popular one and the one from which I’ve learnt the most is [@angular\-builders](https://github.com/just-jeb/angular-builders). At the moment of writing it has ~900 stars on Github and about 1M monthly downloads.

我叫 Jeb，这几年一直在维护几个开源项目。其中最受欢迎的一个是 [@angular\-builders](https://github.com/just-jeb/angular-builders)，它也是我从中学到最多东西的一个开源项目。在写这篇文章的时候，它在 Github 上有约九百颗星，月下载量大约一百万。

Yes, it’s not even close to huge projects like Angular or React – but I feel that I have enough experience to share with you to help you avoid the same mistakes I made. And more importantly, to help you understand the cost of owning an open source project.

是的，它与 Angular 或 React 这样的大型项目相差甚远，但是我觉得我有足够的经验和你分享，帮助你避免重蹈覆辙。更重要的是，帮助你了解拥有一个开源项目的成本。
## So What is Open Source?

## 那么什么是开源

Let’s first establish a common language and align on key terms and definitions.
What is open source? Here is a very generic [definition](https://en.wikipedia.org/wiki/Open_source_(disambiguation)) from a well known **Open Source** Encyclopedia (aka Wikipedia):

首先，让我们建立共同语言，并在关键术语和定义上达成共识。
什么开源（open source）？这里是一个非常通用的[定义](https://en.wikipedia.org/wiki/Open_source_(disambiguation)，它来自著名 **开源** 百科全书（亦称维基百科）：

> [Open source](https://en.wikipedia.org/wiki/Open_source) is the concept of the information allowing the replication or modification of something being open to the public.

> [开源](https://en.wikipedia.org/wiki/Open_source)是指允许复制或修改的信息向公众开放的概念。

or, in terms of [software development](https://en.wikipedia.org/wiki/Open-source_model) models:

或者，从[软件开发](https://en.wikipedia.org/wiki/Open-source_model)模式来看：

> The open\-source model is a decentralized [software development](https://en.wikipedia.org/wiki/Software_development) model that encourages [open collaboration](https://en.wikipedia.org/wiki/Open_collaboration).
>
> A main principle of [open\-source software development](https://en.wikipedia.org/wiki/Open-source_software_development) is [peer production](https://en.wikipedia.org/wiki/Peer_production), with products such as source code, [blueprints](https://en.wikipedia.org/wiki/Blueprint), and documentation freely available to the public.

> 开源模式是一种去中心化的[软件开发](https://en.wikipedia.org/wiki/Software_development)模式，鼓励[开放协作](https://en.wikipedia.org/wiki/Open_collaboration)。
>
> [开源软件开发](https://en.wikipedia.org/wiki/Open-source_software_development)的一个主要原则是[对等生产](https://en.wikipedia.org/wiki/Peer_production)，源代码、[蓝图](https://en.wikipedia.org/wiki/Blueprint)和文档等产品免费向公众开放。

In the case of Wikipedia, we have those who edit the articles (contributors) and those who approve the edits (more experienced members, moderators).

以维基百科为例，我们有编辑文章的人（贡献者），也有批准编辑的人（经验更加丰富的成员、版主）。

If we project it onto the software world, the editors would form a core team of an open source project and the contributors would be, well, contributors.

如果我们将其投射到软件世界，那些编辑们将形成一个开源项目的核心团队，而贡献者贡献就是贡献者。

Wikipedia is a huge open source project but it all started from [something small](https://en.wikipedia.org/wiki/History_of_Wikipedia). Wikipedia was born from Nupedia and it was created for a reason:

维基百科是一个非常庞大的开源项目，但这一切都是从一个[小东西](https://en.wikipedia.org/wiki/History_of_Wikipedia)开始的。维基百科诞生自新百科全书（Nepedia），它的创建是有原因的：

> Despite its mailing list of interested editors, and the presence of a full\-time editor\-in\-chief, [Larry Sanger](https://en.wikipedia.org/wiki/Larry_Sanger), a graduate [philosophy](https://en.wikipedia.org/wiki/Philosophy) student hired by Wales, the writing of content for Nupedia was extremely slow, with only 12 articles written during the first year.

> 尽管邮件列表里有很多感兴趣的编辑，还有一个全职主编 [Larry Sanger](https://en.wikipedia.org/wiki/Larry_Sanger)（威尔士聘请的[哲学](https://en.wikipedia.org/wiki/Philosophy)研究生）在场，但新百科全书的内容写作还是非常缓慢，第一年只写了 12 篇文章。

So here’s where the first question comes into play...

所以第一个问题来了……

### Why Should You Bother With Open Source?

### 为什么你应该关注开源

As you can imagine, one of the main reasons for opening something to the wider audience is **to gain collaborators.**

你可以想象，将某些东西开放给更多人的一个主要的原因是 *为了获取协作者（collaborator）*。

> Together we’re strong.
> (Zarya, 2016)

At the moment of writing this article, Wikipedia [has](https://en.wikipedia.org/wiki/Wikipedia:Wikipedians) 37,899,499 registered accounts of which 134,022 are actively editing.

在写这篇文章的时候，维基百科[拥有](https://en.wikipedia.org/wiki/Wikipedia:Wikipedians) 37899499 个注册账户，其中有 134022 个账户正在积极编辑。

Just think of it…… ****134,022 active collaborators.**** Oh, and it [has 6M content pages](https://en.wikipedia.org/wiki/Special:Statistics)!

想想看…… **134022 名活跃的协作者**。噢，它还[有六百万的内容页](https://en.wikipedia.org/wiki/Special:Statistics)！

Would the numbers have been the same if Nupedia didn’t move to an open source model? I highly doubt it.

如果新百科全书没有转向开源，这个数字还会是这样吗？我对此表示高度怀疑。

Nothing is different when it comes to software. In order to solve a certain problem you have to write code. In order to solve a big problem you have to write a lot of code. And in order to solve it properly, you have to write high quality code, make a high quality design, and so on.

在软件领域也没有什么不同。为了解决某个问题，你必须写代码。为了解决一个大问题，你必须写很多代码。而为了妥善解决这个问题，你必须写出高质量的代码，做出高质量的设计，等等。

All this requires resources**,** which, let’s be honest, you probably don't have. You have a rent to pay, after all.

所有的这些都需要资源，说实话，你可能还没有这些资源。毕竟，你需要交房租。

## Why Start an Open Source Project?

## 为什么要启动一个开源项目

While gaining collaborators is a reasonable incentive, almost no one starts a new open source project solely because of that. Your reasons might be different, but let’s talk about most popular ones.

虽然获得协作者是一个合理的动力，但几乎没有人仅仅因为这个原因就启动一个新的开源项目。你的理由可能会有所不同，但是我们来聊聊最流行的理由吧。
### #1 You want to solve a problem for which no free solution exists

### #1 你想解决一个没有免费解决方案的问题

You face a problem, but there is nothing out there that solves it for you (or there is something, but it costs money) so you have to solve it yourself. You manage to solve it, you’re really excited about your work, and you think others can benefit from it. So you open source the project.

你遇到一个问题，但没有任何东西可以为你解决它（或者有，但是要花钱），所以你不得不自己解决它。你设法解决了这个问题，你对自己的工作感到非常兴奋，而且你认为其他人可以从中受益。所以你把这个项目开源了。
### #2 You want to be a founder

### #2 你想成为发起人

You want to be recognized as a founder of an open source project, and you want that fancy line in your CV. You have an ego (we’re all human, after all). If this is the **main reason** for you, then I promise you – after reading this guide you’ll reconsider. It’s likely not worth it.

你想成为一个开源项目的发起人，你想在你的简历上写上那漂亮的一行。你真自以为是（毕竟，我们都是人）。如果这是你的 *主要理由*，那么我向你保证——读完本指南之后，你会重新考虑的。这么做可能很不值得。

### #3 You want to solve a problem better than someone else does

### #3 你想比别人更好地解决一个问题

You face a problem, and there is an open source project that actually solves it for you but it’s not good enough (in your opinion) or doesn’t have the exact feature you need.

你面临一个问题，有一个开源项目实际上为你解决了这个问题，但是它不够好（在你看来）或者它没有你需要的确切功能。

If you create a new open source project solely because of this, then **most probably** you’re at #2 (ego). Make yourself a contributor, and create a PR to the existing project instead.

如果你仅仅因为这个就创建一个新的开源项目，那么你 *很有可能* 处于第二种情况（自以为是）。让自己成为一个贡献者，然后为现有的项目创建一个 PR 吧。

If the existing project has a different vision and making a PR is not an option, you should consider either extending it by reusing its functionality in your project or [forking](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) it. It may save you a lot of headache later.

如果那个现有的项目有不同的愿景，创建 PR 并不可行，那么你应该考虑通过在你的项目中重用它的功能来扩展它，或者 [复刻（fork）](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)它。这可能会让你以后省去很多头疼的事情。

### #4 You want to solve a problem by creating an open source project

### #4 你想通过创建一个开源项目来解决一个问题

You face a problem and there is nothing out there that solves it for you. So you think that starting the solution as open source from the very beginning is a very good idea.

你面临一个问题，并且现在没有任何人为你解决过它。所以，你认为从一开始就以开源的方式解决问题是一个非常好的想法。

In my opinion, it’s not.

在我看来，并不是。

Solve the problem, make sure it works for you, and after that go to #1.

解决这个问题，确保它对你有用，然后进入第一种情况。

These are the four incentives I most commonly find for people creating a new open source project. But in this guide we’re going to focus mainly on scenario #1.

这是我最常发现人们创建新的开源项目的四个动力。但是在这篇指南中，我们将主要关注第一种情况。

The reason is simple — I believe that if your **main reason** for starting an open source project is anything other than eagerness to share and contribute what you've made, then this won’t hold.

原因很简单——我相信，如果你发起开源项目的 *主要原因* 不是热衷于分享或者贡献你所做的东西，那么这就不成立了。

For quite a long time the fact that you’re helping someone might be the only reward you get. And if this is not the kind of satisfaction you’re looking for, then maybe you should stop here and not waste your time.

在相当长的一段时间内，你帮助别人这一事实可能是你得到的唯一回报。如果这不是你要找的那种满足感，那么你或许应该就此打住，不要再浪费你的时间了。

There is another quite popular scenario which is worth mentioning: there are companies that open part of their code to the community. Examples of this are Angular (maintained by Google), React (maintained by Facebook), VSCode (maintained by Microsoft) and more.

另一个相当流行场景值得一提：有些公司将它们的部分代码开放给社区。例如 Angular（由 Google 维护）、React（由 Facebook 维护）、VSCode（由微软维护）等等。

Their reasons may vary, but gaining collaborators and contributing to community are surely among them.

它们的理由可能各有不同，但是赢得协作者和为社区做贡献肯定是少不了的。

While I can’t argue with the importance of this practice, this scenario is quite different from the others because employees that maintain such projects ****get paid**** for their job.

虽然我不能否认这种做法的重要性，但是这种情况与其它的情况有很大不同，因为维护这些项目的雇员们会因自己的工作 **得到报酬**。

If you work at a company that considers the possibility of creating an open source project, the majority of the content here will be still relevant for you, however the incentives might be different.

如果你在一家考虑创建开源项目的公司工作，那么这里的大部分内容对你来说还是有意义的，但是动力可能有所不同。

### So should you create an open source project?

### 那么你是否应该创建一个开源项目呢？

If I had to summarize this part in one sentence it would be:

如果要我用一句话对这部分进行总结的话，那就是：

> Make sure your intentions match your expectations.

> 确保你的意图符合你的期望。

Believing that you want to have an open source project is not the same as actually having one, as you will see in the following chapters.

要相信，你想拥有一个开源项目与你实际拥有一个开源项目并不相同，你将会这接下来的几章中看到。

![](https://www.freecodecamp.org/news/content/images/2021/03/1_6OX0spWqVQZxG3ue5D_EBA.jpeg)

## How to Start an Open Source Project

## 如何发起一个开源项目

So you’re in scenario #1 – you have a solution for a specific problem and you’re eager to share it with the world. Let’s emphasize it again:

1.  It’s not about your ego
2.  You’re not hoping to benefit from it
3.  You truly want to help others with the same problem

所以你现在处于第一种情况——你有某个问题的解决方案，并且你渴望与世界分享。让我们再强调一遍：

1. 它与你的自负无关
2. 你不是希望从中获益
3. 你真的想要帮助有着相同问题的其他人

If you answered yes to all of these things, then here is a quick checklist for you to make sure you’re doing the right thing:

1.  Make sure that open source is the right format. If it’s something small that you want to share with the world, then a blog post might be just enough.
2.  Double check that a similar project doesn’t exist already. Maybe your solution makes a perfect PR for an established open source project.

对于所有这些问题，如果你的答案都是肯定的，那么这里是一份为你准备的快速检查单，让你确保你做的是正确的事情：

1. 确保开源是正确的形式。如果它只是某个你想与世界分享的小东西，那么一篇博客文章可能就足够了。
2. 仔细检查是否已经有类似的项目存在。或许你的解决方案对某个已有的开源项目来说是一个绝佳的 PR。

### Be prepared for what’s coming

### 为即将到来的事情做好准备

As I mentioned, owning an open source project carries with it a lot of challenges.

正如我所提到的，拥有一个开源项目会带来很多挑战。

One that stands out is that it requires a lot of your time. Everything that you do for your project requires time, whether it’s writing code, managing issues, updating dependencies, talking to people, answering questions, and so on.

其中最突出的一点就是，它需要你投入大量时间。你为项目做的一切都需要时间，无论是写代码、管理议题（issues）、更新依赖、与人交谈、回答问题，等等。

Every minute that you invest into your open source is a minute that you could have but didn’t invest in your family, your hobby, your health and what not.

你每多投入一分钟到你的开源项目中，你本可以投入到你的家庭、你的爱好、你的健康和其它的一切中的时间就会少一分钟。

The only thing that you can do to make this better is to start delegating. When (or should I say “if”) you have enough collaborators, you can outsource part of your responsibilities to the people you trust.

你能做的唯一一件能让这种情况变好的事情就是开始委派任务。当（或者我应该说“如果”）你有足够多的协作者时，你可以将部分责任外包给你信任的人。

### Code separation

### 代码分离

So here we go, you have a solution for your specific problem and you think others can benefit from it. It is still integrated within your code base and you probably don’t want to make the whole code base open source (unless you do).

所以我们开始了，你有一个针对特定问题的解决方案，并且你认为其他人可以从中受益。这个解决方案仍然集成在你的代码库中，你可能并不想让整个代码库开源（除非你真的想）。

First you have to separate this code from the rest of your code base.

首先你需要将这部分代码从代码库中的其它代码分离出来。

![](https://www.freecodecamp.org/news/content/images/2021/03/idigomnotoya-refactoring.jpg)

……which will eventually mean that all the code that is going to be opened will reside in a separate directory.

这最终会意味着将要开源的所有代码都会位于一个单独的目录中。

### Make the code generic

### 让代码变得通用

Make sure that the code in the new directory is generic and is not bound to your specific problem. Make an abstraction layer if needed.

确保新目录中的代码是通用的，同时也不局限于你那特定的问题。如果需要的话，写一个抽象层。

As an example, I started [angular\-builders](https://github.com/just-jeb/angular-builders) with a very specific need (coming from [one of my other open source projects](https://github.com/just-jeb/electron-angular-native)) of adding a custom loader for native modules to Angular build.

举个例子，我以发起[angular-builders](https://github.com/just-jeb/angular-builders) 的时候，有一个非常具体的需求（来自[我其它的开源项目之一](https://github.com/just-jeb/electron-angular-native)），就是为 Angular 构建添加一个自定义原生模块加载器。

I could have created **native\-module\-builder** which would serve only this very purpose. However, I realized that at a relatively low cost I could create a more generic solution that would solve similar (but not the same!) problems.

我本可以创建 **原生模块构建器**，它只用于这个目的。然而，我意识到我可以以相对较低的代价创建一个更加通用的解决方案，来解决相似（但不相同！）问题。

This is how [custom\-webpack](https://github.com/just-jeb/angular-builders/tree/master/packages/custom-webpack) builder was born.

[custom\-webpack](https://github.com/just-jeb/angular-builders/tree/master/packages/custom-webpack) 构建器就是这样诞生的。

### Keep it simple

### 保持简单

Generic is great, but be careful not to get too excited about that.

通用非常棒，但要注意别过头了。

Premature optimization and over\-generalization are two very well known problems in software engineering. You should find this sweet spot where your solution solves problems other than yours but **not all the problems in the world.**

过早优化（premature optimization）和过度泛化（over-generalization）是软件工程中两个非常著名的问题。你应该找到那个最佳的点，你的解决方案可以解决你的问题之外的问题，*但是不能解决世界上所有的问题*。

If you build a scale where the solution for your specific problem is 1 and a solution for all the world problems is 100 then you should start with 2.

如果你建立了一个量表，其中你那特定问题的解决方案是 1 ，而世界上所有问题的解决方案是 100 ，那么你应该从 2 开始。

**Your generic code should be able to solve a a few more problems than your specific code.**

*你的通用代码应该能比你的特定代码多解决几个问题。*

### [Eat your own dog food](https://en.wikipedia.org/wiki/Eating_your_own_dog_food)

### [吃自己的狗粮](https://en.wikipedia.org/wiki/Eating_your_own_dog_food)

Keep using this generic code in your code base at every step — doing so makes sure you eliminate the unnecessary parts and leave only what’s needed. It also ensures that the code you’re going to open is working properly.

坚持在你的代码库中使用这部分通用代码——这样可以确保你去除不必要的部分，只留下必需的。它可以确保你要开源的代码能够正常工作。

**Remember, you are the very first user of your open source project.**

*记住，你是你的开源项目的第一个用户。*

### Don’t get sued

### 别被告了

If you’re extracting the code from your company code base, consult with your superiors and if needed with the legal department. Make sure that they support your initiative and that the code you’re going to open is not subject to the IP (intellectual property) of your company.

如果你正从公司的代码库中提取代码，咨询下你的上级，如果需要的话，也咨询下法律部门。确保他们支持你的提议，并且你打算开源的那部分代码不会违反公司的知识产权。

This will also help you to decide which [open source license](https://opensource.org/licenses) is more suitable for your project.

这也能帮你决定哪个[开源协议]更加适用于(https://opensource.org/licenses)你的项目。

When everything is working, the code is separated and is generic enough, and you have all the approvals (if needed), then it is time to open it to the world.

当一切正常，代码已经分离并且足够通用，你也得到了所有的批准（如果需要的话），那么就是时候向世界开放它了。

![](https://www.freecodecamp.org/news/content/images/2021/03/1_oT-ftfrBJ_BvmaZk2zumpg.jpeg)

Once your open source code is separated and generalized it’s time to disconnect it completely from your code base.

当你的开源代码分离完成并且通用化，就可以把它从你的代码库中完全分开了。

### Go public with your code

### 公开你的代码

First, you have to open the source code of your project (at the end of the day that is what makes it an Open Source Project!).

首先，你需要开放你项目的源代码（在一天结束时，这让它成为了一个开源项目！）。

There are [different options](https://stackify.com/source-code-repository-hosts/) for hosting source code online, but we’ll go with the default — GitHub.

1.  [Create a new repo](https://help.github.com/en/github/getting-started-with-github/create-a-repo) on GitHub
2.  Clone the repository
3.  Move the sources from the directory you previously created (don’t remove the directory yet).
4.  Commit & push — voilà it’s now an open source project.

在线托管源代码的[选择有很多](https://stackify.com/source-code-repository-hosts/)，但是我们将会采用默认的——Github。

1. 在 Github 上[创建一个新仓库](https://help.github.com/en/github/getting-started-with-github/create-a-repo)
2. 克隆该仓库
3. 将源代码从你之前创建的目录（暂时不要删除这个目录）移动到这个仓库
4. 提交并推送（Commit & push）——就这样，它现在是一个开源项目了。

**Or is it?**

*不是吗？*

### Create a package

### 创建一个包

Your project is publicly available, but no one is using it (including you, since you’re using a copy of this code within your larger code base). And no one is aware of its existence.

你的项目已公开，但是没有人使用它（包括你，因为你正在自己更大的代码库中使用这份代码的副本）。并且，没有人知道它的存在。

Furthermore the only format in which your project is publicly available on the web is the **source code*.* And the only way to consume it is copy\-pasting the code into a code base. Not a very convenient way, right?

此外，你的项目在网上公开的唯一形式是 *源代码*。而使用它的唯一方式就是将它复制-粘贴进代码库中。这种方式并不是很方便，对不对？

In order to properly distribute your project, you have to:

1.  Create a package out of the source code
2.  Make this package available on one of the public package registries (depends on your ecosystem, for example, for Java it might be [Maven Central Repository](https://search.maven.org/), in the case of JavaScript it might be [Npm Package Registry](https://www.npmjs.com/) and so on)

为了恰当地分发你的项目，你需要：

1. 从源代码创建一个包
2. 将这个包放到某个公开的程序包注册中心中。（根据你的生态系统进行选择，例如，对 Java 来说可能是 [Maven Central Repository](https://search.maven.org/)，对 JavaScript 来说可能是 [Npm Package Registry](https://www.npmjs.com/)，等等）。

This is when you add a build chain to your new shiny repository, define your project's name, and more.

这时，你要为你的新仓库添加一个构建链，确定项目的名字，等等。

I’m not going to break down the whole process because it is very dependent on your ecosystem, set of tools and language you are using.

我并不打算对整个过程进行分解，因为它非常依赖于你的生态系统、工具集和你使用的编程语言。

You might be an all around person to whom defining a new project as well as adding a build chain and publishing the package is a piece of cake. If this is the case — good for you!

你可能无所不包，对你来说，确定新项目，添加构建链，发布程序包都是小菜一碟。如果是这样的话，那就好办了！

You also might be a person that is used to only writing code but has never faced all these definitions, configurations, artifacts and stuff like that. It might be a whole new world to you.

你可能习惯于只写代码，从未面对过所有的这些定义、配置、工件和类似的东西。对你来说，这可能是一个全新的新世界。

If you're that person, it's time to learn. Not going to be quick, I promise you that, but we'll get there.

如果你是后者，就该学习了。我向你保证，要不了多久就能达成目标。

### In any case...

### 不论如何

When you’re done filling in all the missing puzzle pieces in your head, you’ve learned everything about the relevant package registry, and your package is actually published, **then** **and only then** can you truly consider your project open source.

当你完成脑海中所有缺失拼图的拼装，你就学会了有关程序包注册中心的一切。并且你的程序包已经发布了，*那时，也只有那时你才能真正地认为你的项目开源了*。

**At this point you can actually tell people: “Hey, I already have a solution to your problem, just add this package to your project and use it!”**

*这时，你可以告诉人们：“嘿，我已经有你那问题的解决方案了，你只需要把这个包添加到你的项目中，然后使用它就行了！”*

### Perform a sanity check

### 进行理智的检查

Before your project goes viral, make sure it works.

确保你的项目在开始像病毒一样传播之前能够正常工作。

A sanity check for your package would be actually removing the generic directory from your larger code base and use the publicly available package instead.
After all, **you’re the very first user of your open source project**.

对程序包的理智的检查，实际上就是从你那更大的代码库中删除通用的目录，并改用这个公开的程序包。
毕竟，*你是你的开源项目的第一个用户*。

### How to Handle Further Development on your Code Base

### 如何处理你的代码库中的进一步开发问题

When you start using the package in your code base, the development flow is likely to change. Previously, the now\-open\-source\-code was part of your code base – you could consume the changes right away.

当你开始在你的代码库中使用这个程序包时，开发流程可能会发生变化。以前，现在的开源代码是你代码库的一部分——你可以立即使用所做的更改。

But now it’s as much of an external package as any other 3rd party package used in your code.

但是现在，它与你代码中使用的任何其它第三方软件包一样，都是外部的软件包。

Thus, when you develop a new feature in your shiny new open source project, you’ll have to publish it first in order to be able to consume it in your larger code base. However you cannot publish it if you aren’t positive it works, because once published it might affect other users.

因此，当你在崭新的开源项目中开发新的功能时，必须先发布它，才能在你那更大的代码库中使用它。然而，如果你不确定它是否可行，你就不能发布它。因为一旦发布，就可能会影响其他用户。

So here are a few things you can do in order to avoid publishing broken versions:

1.  Cover your code with tests, both unit tests and end\-to\-end tests.
    **I don’t think I have to convince you how important the tests are.**
2.  Package and install the new version of the package locally, into your larger code base.
    **Once verified that everything works as expected*, *you may publish it.**
3.  Publish a beta version which is available only to those who explicitly want it rather than to the whole world.
    **For example in* the *npm package registry there are** [**dist tags**](https://docs.npmjs.com/cli/dist-tag) **that can be used for this purpose.**
    **The default tag is** `**latest**` **and when you run** `**npm install mypackage**` **it effectively runs** `**npm install mypackage@latest**`**. When you publish a new version under another tag, for instance** `**beta**`**,* people *will have to explicitly install from this tag in order to get the latest version:**
    `**npm install mypackage@beta**` **.**

为了避免发布有问题的版本，你可以做以下几件事情：

1. 用测试覆盖你的代码，包括单元测试和端到端测试。
   *我认为我不需要跟你讲测试是多么的重要。*
2. 在本地打包并安装新版本的程序包到你那更大的代码库中。
   *验证一切安预期工作之后，你就可以发布它了。*
3. 发布一个 Beta 版本，仅开放给那些明确希望使用该版本的用户，而不是全世界。
   *例如，在 npm 的程序包注册中心中，[dist tags](https://docs.npmjs.com/cli/dist-tag) 就可以用于这个目的。*
   *默认的 tag 是 `default`，当你运行 `npm install mypackage` 时，它实际上会运行 `npm install mypackage@latest`。当你用另一个 tag（比如 `beta`） 发布一个新版本时，人们只有显式地从这个 tag 安装才能获取到最新的版本：`npm install mypackage@beta`。*

### Wrapping it up

### 小结

Unlike the previous part, which was completely theoretical, this part actually requires some work from you. Depending on your experience and learning abilities it might take you a few days or even weeks to complete this mandatory step. And we haven't even started yet.

与前一节的纯理论不同，这一节实际上会要求你做一些事情。根据你经验和学习能力，可能需要花费你几天甚至几周的时间来完成这个必需步骤。而我们甚至还没有开始呢。

This is why it is my duty to ask you again:

这就是为什么我有责任再问你一次：

> Are you fully prepared to give a decent amount of your precious time to the community?

> 你真的准备好将宝贵的时间奉献给社区了吗？

![](https://www.freecodecamp.org/news/content/images/2021/03/1_z5sGJuWoz02x3uSBaF4tLg.jpeg)

## How to Write Documentation for your Open Source Project

## 如何为你的开源项目编写文档

The first two parts of this article were targeted to those who are considering creating an open source project. I wanted to let them know what to expect and give them a head start in the open source world.

这篇文章的前两部分是针对那些正在考虑创建开源项目的人写的。我想让他们知道应该期望什么，并帮他们在开源世界里开个头。

This part, as well as the upcoming ones, will also be relevant to people who already maintain an open source project and want to improve at what they do.

这一部分，以及即将到来的部分，也会与那些已经在维护开源项目并希望有所改进的人们有关。

### The baseline for this part:

### 这一部分的基线：

> You already have an open source project, it is available on GitHub, and it can be consumed easily via one of the package registries.

> 你已经有了一个开源项目，我们可以在 Github 上访问它，并且可以很容易地通过某个程序包注册中心使用它。

### Why Do You Need Documentation, and What Should It Contain?

### 为什么你需要文档，它应该包含哪些内容？

> An open source project without documentation is a dead project

> 一个没有文档的开源项目毫无生命可言

It is dead because no one will dive into your code to find out how it should be used. And even before **how**,  no one will even know **what** your code is supposed to do.

之所以说毫无生命，是因为没有人会深入你的代码，去了解应该如何使用它。在此之前，甚至没有人知道你的代码是干嘛的。

So these are basically the two things that your documentation should contain — **what** and **how**. These are the corner stones, the must\-haves of documentation.

所以你的文档应该基本上包含这两部分的内容——*它是做什么的* 以及 *如何使用它*。这两点是文档的奠基石，是文档的必备内容。

### How to Write a Description of Your Project

### 如何写项目描述

The description is the first thing everyone sees when they enter a GitHub repository. Therefore a good description should answer in a short and informative manner the **what** question. For example:

人们在进入某个 Github 仓库时，首先看到的就是项目的描述信息。因此，一个好的描述应该简明扼要地回答 *它是做什么的* 这个问题。例如：

[React](https://github.com/facebook/react):

> **A declarative, efficient, and flexible JavaScript library for building user interfaces. [https://reactjs.org](https://reactjs.org/)**

> *一个声明式的、高效且灵活的 JavaScript 库，用于构建用户界面。[https://reactjs.org](https://reactjs.org/)*

[Moment.js:](https://github.com/moment/moment)

> **Parse, validate, manipulate, and display dates in* J*ava*Sc*ript. [http://momentjs.com](http://momentjs.com/)**

> *在 JavaScript 中解析、验证、操作并展示日期。[http://momentjs.com](http://momentjs.com/)*

[Angular builders](https://github.com/just-jeb/angular-builders) (this one is mine):

[Angular builders](https://github.com/just-jeb/angular-builders) （这个项目是我的）：

> **Angular build facade extensions (Jest and custom webpack configuration)**

> *Angular 构建门面扩展（Jest 与自定义 webpack 配置）*

You can edit description in the `About` section of your repository:

你可以在仓库的 `About` 部分编辑描述信息：

![](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2021-03-11-at-10.20.43-1.png)

### How to Write a README.MD File

### 如何写 README.MD 文件

README.MD is a file in the root directory of your project, written with [Markdown syntax](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax), which contains all the information someone needs to know about your project.

README.MD 是一个位于你的项目根目录中的文件，用 [Markdown 语法](https://docs.github.com/cn/github/writing-on-github/basic-writing-and-formatting-syntax)编写，它包含别人需要知道的有关你的项目所需要的一切信息。

The README file should contain a detailed description (which expands on the **what** question) and very detailed instructions on **how** to use you project.
The instructions should cover every single piece of **public API**, preferably with usage examples.

README 文件应该包含一个详细的描述（在 *它是做什么的* 这个问题上进行展开），以及关于 *如何* 使用你的开源项目的详细说明。
说明的内容应该覆盖每一个 *公共 API* ，最好是有使用示例。

Here are a few points for writing a good API documentation:

*   **Keep it simple** – The simpler the API and the example, the easier for a user to understand what it does on how to use it
*   **Keep it structured** – Use the same template and visual structure for every API method. This way you’ll define your own language for communicating the API to the user.
*   **Be a user** – Always write API description from the user's perspective. Assume that you know nothing about the internals and this documentation is all you have.
*   **Keep it up to date** – As your project evolves, the APIs might change. Make sure that your README file always contains the most current APIs and examples.

这里编写良好 API 文档的几个要点：

* **最简法则**——API 和示例越简单，使用者就越容易理解它是做什么的以及如何使用它
* **条理清晰**——对所有的 API 方法都使用相同的模板和可视化结构。这样，你就可以定义自己的语言，向使用者传达 API。
* **变身用户**——总是从用户的角度编写 API 描述。假设你对项目的内部一无所知，并且这份文档就是你的全部。
* **保持最新**——随着项目的演进，API 可能会发生变化。确保你的 README 文件总是包含最新的 API 和示例。

The README can (but doesn’t have to) contain the following things:

*   Link to a contribution guide
*   List of contributors
*   Link to a change log
*   Latest version
*   License
*   Build status
*   Downloads counter
*   Link to a chat for fast feedback

README 可以（但不是必须的）包含以下内容：

* 贡献指南的链接
* 贡献者名单
* 变更日志的链接
* 最新版本
* 协议
* 构建状态
* 下载次数
* 用于快速反馈的聊天链接

[Here](https://github.com/aws-amplify/amplify-js) is a an example for what a good README could look like.

[这里](https://github.com/aws-amplify/amplify-js)是一个优秀 README 的示例。

### What Are Badges?

### 何为徽标

Badges are a fairly good way to visually expose the essential info about your project, such as: build status, version, license and various tools used by your project.

徽标（Badge）是一种很好的方式，可以直观地显示项目的基本信息，例如：构建状态、版本、协议以及项目使用的各种工具。

There are quite a few options, but I’d recommend you use [shields.io](https://shields.io/) badges.
They have a badge for literally everything.

选择有很多，但是我推荐你使用 [shields.io](https://shields.io/) 的徽标。
他们的徽标几乎包揽一切。

Adding a badge to your README file is really simple:

1.  Go to [shields.io](https://shields.io/)
2.  Choose the appropriate category
3.  Click on a badge you’d like to add to your README
4.  Fill in the required information (if any)
5.  Choose Copy Markdown from a drop down menu
6.  Paste the markdown into your README file

给 README 文件添加徽标真的非常简单：

1. 前往 [shields.io](https://shields.io/)
2. 选择合适的分类
3. 点击你想要添加到 README 的徽标
4. 填写需要的信息（如果需要的话）
5. 从下拉菜单中选择 Copy Markdown
6. 将 markdown 粘贴到你的 README 文件中

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-141342.png)

The badges are usually put at the top of the README file right before the detailed description. This is what it looks like:

徽标通常放在 README 文件的顶部，就在详细描述的前面。它看起来像这样：

![](https://www.freecodecamp.org/news/content/images/2021/03/1_hgG8kurYMkdAsMXxji4iVg.png)

### Make Sure You Have Tests

### 确保你进行了测试

API reference is great, but nothing compares to real code using your public APIs.

API 参考很棒，但是没有什么比使用你的公共 API 的真实代码更好了。

One of the best ways to complement your documentation is having good code coverage with descriptive tests. Sometimes tests explain the code better than any documentation.

完善文档的最佳方式之一就是用描述性测试来覆盖代码。有时，测试比任何文档更能解释代码。

### Wrapping it up

### 小结

In this part we’ve only covered the basics of documentation. There's a lot more than just a README or a description, for example. As your project grows and issues arise, they become an integral part of the documentation.

在这一部分，我们只覆盖了文档的基础知识。例如，除了 README 和描述信息，还有很多其它内容。随着项目的发展和问题（issue）的出现，它们将成为文档的组成部分。

> However, having a README file that covers the public API is the bare minimum for any decent open source project

> 然而，对于任何一个像样的开源项目来说，拥有一份覆盖公共 API 的 README 文件只是最低要求。

![](https://www.freecodecamp.org/news/content/images/2021/03/david-menidrey-16ep3TGZR-0-unsplash.jpeg)

## How to Publicize Your Open Source Project

## 如何推广你的开源项目

We’ve already discussed what it means to start a project, how to do it optimally, and how to write good documentation for it.

我们已经讨论过发起一个项目意味着什么，如何以最佳的方式去做，以及如何为它写好的文档。

Now let's talk about drawing the public's attention to your project and optimizing it to both attract and correctly manage contributions.

现在，我们就来聊聊如何将公众的注意力吸引到你的项目上来，以及如何在吸引与正确管理贡献者上面对项目进行优化。

### The baseline for this part is:

### 这一部分的基线是：

> *You already have an open source project, it is available on GitHub, it's well\-documented and can be consumed easily via one of the package registries.*

> *你已经有了一个开源项目，人们可以在 Github 上访问它，它有着良好的文档，并且可以很容易地通过某个程序包注册中心使用它。*

### How to Spread the Word About Your Project

### 如何宣传你的项目

Let’s address the elephant in the room: as your project grows, you simply wont be able to handle everything by yourself. So you'll need more people to work on the project if you want it to live long and prosper.

咱们开门见山吧：随着项目的发展，你根本无法独自处理每件事情。所以，如果你想让项目长久生存下去并繁荣昌盛，你需要更多的人参与到项目中来。

To get more people involved in your project you need more people to know about it and above all else to believe in it.

为了让更多的人参与到你的项目中，你需要更多的人知道它，更重要的是相信它。

From my experience the best way to expose your open source to the right audience is to ****use one of the well known resources**** and write a blog post about your project.

根据我的经验，将你的开源项目暴露给合适的受众的最佳方式是 **使用知名的资源渠道** 并写一篇关于项目的博客文章。

The resource might be purely dev\-oriented (like dev.to**)** or not (like Medium).

资源渠道可以是纯面向开发的（比如 dev.to），也可以不是（比如 Medium）。

One commonality between all these resources is that they have an established audience and it is the relevant audience.

所有这些资源之间都有一个共同点：它们都有既定的受众，并且是相关的受众。

You can also [cross\-post](https://en.wikipedia.org/wiki/Crossposting) your article between various online resources so that you cover an even larger audience. But be aware – cross\-posting has a few downsides:

*   Each of these platforms may have a different mark up language and you’ll have to redo all the formatting
*   Maintenance — if something changes (and things **will** change) you’ll need to update your blog post across all of the resources.

你也可以在不同在线资源之间[交叉发表](https://en.wikipedia.org/wiki/Crossposting)你的文章，从而覆盖到更到的受众。但是要注意，交叉发表有几个弊端：

* 每个平台可能都有各自不同的标记语言，你不得不重新调整所有的格式
* 维护性——如果某部分内容变了（事情 *会* 发生变化），你就需要在所有的资源中对你的博客进行更新

If you go for Medium, I’d highly recommend you submit your article to one of the [large publications](https://getgist.com/top-50-medium-publications/). It will require additional effort on your end, since you’ll have to align your article with the publication's requirements. But it will also ensure that your article is exposed to a large and, which is even more important, **relevant** audience.

如果你选择 Medium，我会高度推荐你将自己的文章提交到某个[大型专栏](https://getgist.com/top-50-medium-publications/)。这将要求你做更多的事情，因为你不得不让你的文章满足专栏的要求。但是它也能确保更多的受众接触到你的文章，更重要的是，*相关* 的受众。

You can also decide to go behind a [metered paywall](https://help.medium.com/hc/en-us/articles/360018834314-Stories-that-are-part-of-the-metered-paywall) (you can earn money from doing this!):

你还可以决定选择 [metered paywall](https://help.medium.com/hc/en-us/articles/360018834314-Stories-that-are-part-of-the-metered-paywall)（你可以从中赚钱！）：

> **Stories that are part of the paywall are also eligible for distribution to Medium readers through topics, which power recommendations on Medium on our home page, on our topic pages, in our Daily Digest and in our apps**

> 属于付费专区的故事也可以通过主题分发给 Medium 读者，这些主题可在我们的主页、主题页、每日摘要和应用程序中被推荐。

I can’t tell you which one is better, but my personal preference is publications because it ensures your article is exposed, instead of the vague “eligible for distribution” term.

我无法告诉你哪种方式更好，但是我个人更喜欢专栏，因为它能确保你的文章被读者看到，而不是像“符合发行条件”一词这么模糊。

If your blog post goes viral then it can create a cascading effect and add even more leads to your open source project.

如果你的博客广为传播，那么它就可以产生级联效应，为你的开源项目带来更多的人。

For example, if after publishing the article your Github project received a few dozens of stars in one day it can get to the Github [Trending](https://github.com/trending) page which is in itself another source of exposure.

例如，如果你的 Github 项目在发表文章之后的一天之内收获了几十颗星，就可以进入 Github 的[趋势](https://github.com/trending)页，这本身也是另一个暴露源。

A few points to make your blog post great:

*   Start with a problem statement. It might even be the title of the blog post.
    **Usually people are looking for a solution to a specific problem and before they decide* to invest *the time to read your post they should have an idea whether it’s what they’re looking for.* [Here's an example](https://medium.com/angular-in-depth/customizing-angular-cli-build-an-alternative-to-ng-eject-v2-c655768b48cc) of an article I wrote.*
    **As you can see it clearly states the problem that it solves in the title.**
    **If you google “Customizing Angular build” this is* one of the first *result*s *you’ll get and right from the search page you can see which problem it addresses.**
*   Describe why and how exactly your project solves this problem
*   Provide a detailed step\-by\-step guide, starting with installation and finishing with a working example.
*   Create an example project that uses your open source and link to the sources in the blog post.
    **There are lots of developers who prefer a working example to any blog post.**
*   Get some feedback before publishing it.
    **Make your friends go over it without telling them what it’s about and see if they can figure it out themselves. If they can’t then probably it’s not that clear and you need to elaborate.**

让你的博文更加优秀的几个要点：

* 以问题陈述作为开始。它甚至可以是博客的标题。
  *人们通常是在寻找某个特定问题的解决方案，在他们决定花时间读你的文章之前，他们应该知道你的文章是否是他们正在寻找的东西。这里是我写的一篇文章的[示例](https://medium.com/angular-in-depth/customizing-angular-cli-build-an-alternative-to-ng-eject-v2-c655768b48cc)。*
  *如你所见，它在标题中清晰地阐述了它所解决的问题。*
  *如果你在谷歌搜索“Customizing Angular build”，它将会出现在排名靠前的几个结果中，并且你可以直接从搜索页面上看到它解决了哪个问题。*
* 描述一下你的项目为什么要解决了这个问题，它是如何解决的。
* 提供一份详细的逐步指导，从安装开始，以可以正常运行的示例结束。
  *有很多开发者都更喜欢可以正常运行的示例，而不是博客文章。*
* 在发表文章之前，先获取一些反馈。
  *让你的朋友们仔细阅读你的文章，不要告诉他们你的文章是关于什么的，看它们能够自己说出来。如果他们做不到，那么很有可能是你的文章不够清晰，你需要写得更加详细。*

After you’ve published your blog post, make sure you share it on social media, with your friends, your family, and strangers on the street.

在发表博文之后，确保你在社交媒体上与你的朋友、家人和马路上的陌生人进行了分享。

This will increase your project’s exposure – but you also have to make people **want** to contribute to your project.

这将会增加你的项目的曝光度——但是你也要让人们 *愿意* 向你的项目做贡献。

### How to Make your Project Attractive to Contributors

### 如何让项目吸引贡献者

The best thing is to start an open source with other people. This way from the very beginning you have a team with which you can split the burden.

最好的办法就是与他人一起发起一个开源项目。通过这种方式，你从一开始就能拥有一个可以一起分担责任的团队。

However, that’s not always the case.

然而，并不总是如此。

If you started alone, you have to attract contributors. And in my experience there are two types:

1.  Someone who wants to make an impact and looks for a project to contribute to (these are rare but still exist).
2.  Someone that uses your package and found either a bug or lack of certain functionality.

如果你独自发起开源项目，你必须吸引贡献者。根据我的经验，有两种类型的贡献者：

1. 想要产生影响并在找项目做贡献的人（虽然很少见，但是也有）。
2. 使用你的程序包并且发现了缺陷或者缺少某些功能的人。

In both cases just having your source code shared on Github and a single blog post on how to use it are not enough. Here are a coupe of things that can make people want to contribute:

在这两种情况下，只在 Github 上分享你的源代码并写一篇关于如何使用它的博文是不够的。以下是一些可以使人们愿意做贡献的事情：

#### Have a pending implementation list.

#### 一个待实现清单

It might contain known bugs, planned features, or something else. This list will make it simpler for contributors of type #1 to pick the right item and issue a PR.
It can be a standalone list or you can (and probably should) use issues and labels on GitHub.

它可能包含已知缺陷、规划的功能或者其它的东西。这个清单会让第一类贡献者更容易选择正确的事项并发起 PR。
它可以是一个独立的清单，你也可以（或许是应该）使用 Github 上的议题（issues）和标签（labels）。

#### Have a [contributors guide](https://help.github.com/en/github/building-a-strong-community/setting-guidelines-for-repository-contributors).

#### 一份 [贡献者指南](https://docs.github.com/cn/github/building-a-strong-community/setting-guidelines-for-repository-contributors)

A very basic contributors guide should explain the repository structure and have a step\-by\-step guide for building and running your project and tests. The expanded guide can contain architecture, design decisions, code of conduct and more.

基本的贡献者指南应该解释仓库的结构，包含关于构建并运行项目与测试的逐步指导。扩展的指南可以包含架构、设计决策、行为准则等。

A good example is [Atom’s contributors guide](https://github.com/atom/atom/blob/master/CONTRIBUTING.md). Don’t underestimate it’s value! It’s something that takes a decent amount of time to make when the project has grown, and I wish I created it at the very beginning and updated it gradually as the project evolved.

[Atom 的贡献者指南](https://github.com/atom/atom/blob/master/CONTRIBUTING.md)就是一个很好的例子。千万不到低估它的价值！随着项目的发展，这需要花费大量的时间，我希望我从一开始就创建它，并随着项目的发展逐渐更新。

Unfortunately, I didn’t have someone to point out its importance, and today [my project](https://github.com/just-jeb/angular-builders) has no contributors guide. It’s always on my TODO list but there is always something more urgent than that.

不幸的是，我没有人指出它的重要性，而[我的项目](https://github.com/just-jeb/angular-builders)今天都还没有贡献者指南。它一直在我的待办清单上，但总有比它更紧急的事情。

#### Recognize your contributors.

#### 感谢你的贡献者们

Listing your contributors on the main page of the project will give them additional incentive to make a contribution.

在项目的主页列出贡献者们，这会让他们有更多的动力去做贡献。

Just adding user names can be enough, but I’d recommend that you use [All Contributors](https://github.com/all-contributors/all-contributors). Apart of creating a fancy section with profile images and badges for your all your contributors, it automates the addition of new contributors by creating PRs that add contributors to this section.

只添加他们的名字就够了，但是我将会推荐你使用 [All Contributors](https://github.com/all-contributors/all-contributors)。它不仅能为你的所有贡献者创建带有个人资料图片和徽标的精美部分，还能通过创建 PR 来自动添加新的贡献者，将贡献者添加到这个区域。

### Wrapping it up

### 小结

In this part we’ve discussed several things that will increase your project’s exposure and provide people with an initial incentive to open a PR or an issue.

我们在这一部分讨论了增加项目曝光度以及赋予人们初始动力去创建 PR 或议题的几件事情。

> But this won’t keep them as contributors, nor will it make sure they will finish the work they started.

> 但是这并不能让他们坚持做贡献者，也不能确保他们完成已开始的工作。

![](https://www.freecodecamp.org/news/content/images/2021/03/1_tyzBkDXaXjRW4UIEWBikzQ.jpeg)

## How to Manage Issues and Pull Requests in Your Open Source Project

## 如何管理议题与拉取请求

Now that we've explored sharing information and making your open source project more attractive, let's discuss **contributions,** the holy grail of every open source project.

既然我们已经探索了共享信息和如何让你的开源项目变得更具吸引力，让我们来讨论一下 *贡献* 吧，它是每个开源项目的圣杯。

### What are open source contributions?

### 什么是开源贡献？

A contribution to an open\-source project is any change that’s done by a person other than the owner. In practice it comes in two forms:

对一个开源项目的贡献是指由所有者以外的人所做的任何改变。在实践中，它有两种形式：

#### Issues

#### 议题

Here’s what Github [says](https://help.github.com/en/github/managing-your-work-on-github/about-issues) about issues:

这里是 Github 关于议题（issues） 的[描述](https://docs.github.com/cn/github/managing-your-work-on-github/about-issues)：

> **You can collect user feedback, report software bugs, and organize tasks you'd like to accomplish with issues in a repository. Issues can act as more than just a place to report software bugs.**

> *您可以在仓库中使用议题收集用户反馈，报告软件漏洞，并且组织要完成的任务。 议题不只是一个报告软件漏洞的地方。*

In a nutshell, an issue is any piece of information that requires some sort of action.

简而言之，议题可以是需要采取某种行动的任何信息。

#### Pull requests (PRs)

#### 拉取请求（PR）

Here’s what Github [says](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) about pull requests:

这里是 Github 关于拉取请求（Pull Request，PR）的[描述](https://docs.github.com/cn/github/collaborating-with-issues-and-pull-requests/about-pull-requests)：

> **Pull requests let you tell others about changes you’ve pushed to a branch in a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow\-up commits before your changes are merged into the base branch.**

> *拉取请求可让您在 GitHub 上向他人告知您已经推送到仓库中分支的更改。 在拉取请求打开后，您可以与协作者讨论并审查潜在更改，在更改合并到基本分支之前添加跟进提交。*

In a nutshell, a pull request is an actual change to the project.

简而言之，拉取请求就是对项目的实际修改。

### How to Work with Issues and PRs

### 如何使用议题和 PR

So how do you actually work with issues and PRs, and how do you approach issues and PRs created by contributors?

那么，你应该如何使用议题和 PR，又该如何处理贡献者创建的议题与 PR 呢？

#### Use a Personal Example

#### 以身作则

The best advice I can give you is to **use a personal example** to incorporate a certain work method. This means that when you’re working on a new feature you should create a PR for this and merge it once it meets all your standards.

我能给你的最好建议是，结合某个具体的工作方法 *以身作则*。这意味着，当你开发新功能时，你应该为这个功能创建一个 PR，在它满足你所有的要求之后就进行合并。

And when you find a bug or think of some missing functionality you should create an issue.

你应该在发现缺陷或者一些缺失功能时创建议题。

Not only will this method organize your work and bring order to your project, it will also provide contributors with a reference from which they can learn and adapt their issues and PRs accordingly.

这个方法不仅能组织好你的工作，让你的项目变得井井有条，还能给贡献者们提供一个参考，他们可以从中学习并调整自己的议题与 PR。

Additionally, if you have high standards (meaning that you believe that every PR should come with proper documentation, test coverage, and so on) then you should treat yourself just like you would any other contributor. You can’t demand from others something what you’re not doing yourself.

此外，如果你的标准很高（即你相信每个 PR 都应该有适当的文档、测试覆盖等等），那么你应该像对待任何其他贡献者一样对待你自己。你不能要求别人做你自己都没有做的事情。

Moreover, sometimes you should be even more lenient towards the contributors than to yourself. Especially if your project is at an early stage and doesn’t have a lot of contributors. This brings us to the following point.

还有就是，有时候你对贡献者应该比对自己更宽容。在你的项目处于初期阶段，没有很多贡献者时，更应该这样。这就涉及到了下面这一点。

#### All Work is Appreciated

#### 感谢一切付出

Collaborating with others is all about mutual respect. You should respect your contributors. Be patient when answering their questions (even ones that seem simple) and be polite when providing **constructive criticism**.

与他人协作就是要相互尊重。你应该尊重你的贡献者们。耐心地回答他们的问题（即便问题看起来很简单），礼貌地对待 *建设性批评*。

Remember: it’s vital to appreciate your contributors’ work. If someone just created an issue (even without thorough research, even without reproduction) — thank them. They bothered to move their chair a bit closer to the table, they sat up straight and typed something they thought could be beneficial to you. Thank them and if needed, ask for additional details in a polite and respectful manner.

记住：对贡献者工作的感谢至关重要。如果某人只是创建了一个议题（即使这个议题没有经过深入研究，甚至没有重现），感谢他们。他们费力地把自己的椅子挪到离桌子近一点的地方，坐直身子，然后打了一点他们认为对你有用的东西。感谢他们，如果需要的话，用礼貌而又尊重的方式向他们询问更多的细节。

If someone created a PR that doesn’t meet your high standards — thank them. Thank them and ask politely to make code changes/write tests/add documentation and so on. Give them a link to one of your PRs for reference or provide them with a link to the contribution guide.

如果某人创建的 PR 没有满足你的高标准，感谢他们。感谢他们并礼貌地请求他们修改代码/编写测试/添加文档，等等。给他们一个你的 PR 的链接作为参考，或者给他们一个贡献指南的链接。

A constructive and positive conversation will give those contributors additional incentive to continue their work. Or it won’t……

建设性地积极对话将会给予那些贡献者们额外的动力，让他们继续工作。否则就不会……

#### Quality Versus Quantity

#### 质量 vs 数量

Eventually, there’s almost always a tradeoff (unless you own a huge open source project, like Angular or React). You can decide that you’re not easing up your standards, not even for a little bit, and most probably you’ll end up implementing all of the work yourself.

最终，几乎总会有一个折衷（除非你自己拥有一个像 Angular 或 React 这样的大型开源项目）。你可以决定不放低标准，哪怕是一点点也不行，很有可能你最终会自己完成所有的工作。

Or, you can decide that you’re lowering the standards for contributors (but this would make your standards futile as they’re not applied).

或者，你可以决定放低对贡献者的标准（但是这可能会让你的标准显得毫无用处，因为它们没有被实行）。

I’ve learned that every contributor requires a different approach. It really depends on the person and their personal interest in their contribution.

我了解到，每个贡献者都需要使用不同的方法。这真的是由他们个人及其对贡献的兴趣决定的。

You should take into account such factors as the urgency of the issue, the experience of the contributor, the complexity of your code, the complexity of the required fix or feature, the contributor’s motivation, and more.

你应该考虑议题的紧急性、贡献者的经验、代码的复杂度、所需修复或功能的复杂度、贡献者的动机等因素。

Usually, I politely ask for changes, wait for a few days, and if nothing happens I make the changes myself, given of course that the issue is considerably important.
As for less important (nice\-to\-have) fixes or features — I usually leave them entirely to the community.

通常，当议题非常重要时，我会礼貌地请求贡献者进行更改，然后等个几天，如果没有任何进展，我就会自己进行更改。至于那些没那么重要的（有了会更好）修复或者功能，我通常会把它们完全留给社区。

Over time as the number of issues and PRs grows it becomes an ambitious task to keep track of, prioritize, and categorize them. This means that labels become incredibly important.

随着议题和 PR 数量的增长，跟踪、确定优先级并对它们进行分类就会成为一项艰巨的任务。这意味着标签会变得异常重要。

#### Use Helpful Labels

#### 使用有用的标签

[Github labels](https://help.github.com/en/github/managing-your-work-on-github/about-labels) is a great tool for keeping your issues and PRs prioritized and organized. While this allows you to search and filter by labels, what I find most helpful here is it’s ability to aid in the visualization of the overall state of your project.

[Github 的标签](https://docs.github.com/cn/github/managing-your-work-on-github/managing-labels)是让议题和 PR 保持优先级与组织性的好工具。虽然你可以通过标签进行搜索和过滤，但是我发现最有用的还是它可以帮助可视化项目的整体状态。

Thus, you can enter the “Issues” page and see that most of your issues are labeled as `bug`(meaning that you should stop pushing forward and instead focus on fixing them.)

这样，你可以在进入“议题”页，看到大部分议题都被打上了 `bug` 标签（这意味着你应该停下来集中精力修复它们，而不是往前推进了）。

Alternatively, you can see that most of the issues are labeled as `enhancement` or required `features`. `priority` is another useful label that helps you focus on the significant things first.

或者，你可以看见大部分议题都被标记为 `enhancement` 或需要 `features`。`priority` 是另一个有用的标签，可以帮你首先关注到重要的东西。

Additionally, your contributors can (and will) benefit from you using labels. For example, going back to ****Getting collaborators****, someone can enter the “Issues” page and visually identify the issues that require the help of the community (`help-wanted`, `pr-welcome`, and so on.)

此外，你的贡献者可以（也会）从你使用的标签中受益。例如，回到 **获取贡献者**，一些人可以进入“议题”页，然后直观地地识别出那些需要社区帮忙处理的议题（`help-wanted`、`pr-welcome`，等等）。

Aside from the labels with single responsibility (like `bug` or `enhancement` ), I recommend using labels for scoping an issue/PR or putting it on a certain scale. For example:

*   `priority:low` , `priority:high`
*   `required:investigation` , `required:tests` , `required:docs`
*   Or in the case of mono repo: `packages:package1` , `packages:package2` etc.

除了职责单一的标签（比如 `bug` 或 `enchancement`）外，我推荐你使用标签来限定议题/PR 的范围。例如：

*   `priority:low`，`priority:high`
*   `required:investigation`，`required:tests`，`required:docs`
*   或者在单仓库的情况下： `packages:package1`，`packages:package2` 等等

Here is an example of the labeled issues page from my project:

这里是一个使用了标签的议题页，它来自我的项目：

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-141634.png)

Labels make it pretty easy to distinguish at a quick glance what the issues are that require your (or your contributors’) attention, to which component these issues are related, and what is required in order to proceed.

标签让你可以快速地分辨出哪些问题是需要你（或你的贡献者）注意的，这些问题与哪个组件相关以及需要什么才能继续进行。
#### Use PR and Issue Templates

#### 使用 PR 和议题模板

I highly recommend that you spend a few minutes of your time and define templates for [Issues](https://help.github.com/en/github/building-a-strong-community/configuring-issue-templates-for-your-repository) and [PRs](https://help.github.com/en/github/building-a-strong-community/creating-a-pull-request-template-for-your-repository).

我强烈建议您花几分钟时间，为[议题](https://docs.github.com/cn/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)和 [PR](https://docs.github.com/cn/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository) 定义模板。

> **With issue and pull request templates, you can customize and standardize the information you’d like contributors to include when they open issues and pull requests in your repository.**

> *利用议题和拉取请求模板，可以自定义和标准化您希望贡献者在您的仓库中打开议题和拉取请求时加入的信息。*

This will save you a lot of time since you won’t have to respond to each issue or PR with a request for additional information or changes. You’ll still have to do it sometimes (because there are contributors that simply don’t pay attention to the templates) but it will happen far less often than it would if you didn’t create templates.

这将为你节省大量的时间，因为你不需要对每个问题或 PR 进行附加信息或更改的请求。有时候你还是需要这样做（因为有些贡献者根本不关注模板），但是它发生的频率要比不创建模板少得多。

Here is an example of a default issue that you see when the corresponding template is defined in your repository:

这里是默认议题的一个例子，你可以看到对应的模板是何时在你的仓库中定义的：

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-141725.png)

#### Use Github Apps and Actions

#### 使用 Github 的应用程序与操作

There are quite a few [Github apps and actions](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/about-actions#comparing-github-actions-to-github-apps) that can help you manage PRs and Issues. The list constantly grows, but I personally find these to be most useful:

有很多的 Github [应用程序和操作](https://docs.github.com/cn/actions/creating-actions/about-actions)可以帮你管理 PR 与议题。相关应用程序和操作的数量仍在不断增长，但是我个人发现这些功能最有用：

*   [Stale bot](https://github.com/marketplace/stale)
*   [WIP](https://github.com/marketplace/wip)
*   [Autoapproval](https://github.com/dkhmelenko/autoapproval)
*   [PR labeler](https://github.com/actions/labeler)

#### Make Sure You're Responsive

#### 及时响应

If I open an issue or a PR to another open\-source project and it takes an eternity to get a response, then I switch. [Here](https://github.com/greenkeeperio/monorepo-definitions/pull/24) is one example:

*   The initial response was quite quick, taking only two days
*   The discussion was pretty fruitful
*   The PR is still open with no updates on what exactly is missing/wrong

如果我在其它开源项目上打开了一个议题或 PR，并且等了很长时间才收到回复，那么我就会对它失去兴趣。[这里](https://github.com/greenkeeperio/monorepo-definitions/pull/24)是一个例子：

* 最初的响应非常快，只花了两天
* 讨论的成果丰富
* PR 仍然处于打开状态，但却没有关于到底是什么少了/错了的更新

As a result, I switched to another package.

最终，我转向了另一个包。

The same will hold true for your project if you’re not responsive: if it takes you two weeks to respond to PRs that are waiting for you, instead of pending for contributor’s changes required by you, then you’ll lose users (i.e. potential contributors).

如果你不及时响应，这也会发生在你的项目上：如果你要花两周的时间响应一个需要你处理的 PR，而不是等待你要求的贡献者更改，那么你就会失去用户（即潜在的贡献者）。

So do yourself a favor — be responsive. It doesn’t have to be an immediate solution to someone's problem but even letting the user know that you’ll look into their issue next week already gives them some certainty and time frames.

所以帮你自己一个忙——及时响应。不一定要立马解决某人的问题，但是，即便是让用户知道你会在下周研究他们的议题，也给了他们一些确定性和时限。

The bad news is that you should stand by your promises. If these get away from you from time to time, don’t worry — we all have personal lives and it’s understandable if you had some urgent matters which postponed your work on the open\-source.

坏消息是，你应该信守诺言。如果你的诺言有时没有完成，不要担心——我们所有人都有自己的生活，如果你因一些紧急的事情推迟了你在开源上的工作，是可以理解的。

If this occurs then give a short update — it’s not a big deal, just write a word or two to let people know that the feature they’ve been waiting for has been postponed.

如果发生了这种情况，就给一个简短的更新——又不是什么大事儿，只需要写一两个字，让人们知道他们一直在等待的那个功能被推迟了。

### How to Prioritize your Issues

### 如何确定议题的优先级

There are a few methods that can help you prioritize your most important issues.

有几种方法可以帮你确定最重要议题的优先级。

First, how should someone identify the most important issues? As I see it, the most important issues are the ones that users want the most, whether it's a new feature, a bug\-fix, or something else.

首先，应该如何识别出最重要的议题呢？我个人认为，最重要的议题就是用户最想要的那些东西，不管它是新功能、缺陷修复，还是其它东西。

Sometimes a user will express their interest in the issue but most likely they won’t. Therefore, I present to you quite a simple way to know what users are interested in:

有时候，用户会在议题中表现出他们的兴趣，但是他们很有可能不会这么做。因此，我给大家介绍一种了解用户对哪些东西感兴趣的简单方法：

Every project on Github has an “Insights” tab, with a “Traffic” section:

Github 上的每个项目都有一个“Insights”选项，其中有一部分叫“Traffic"：

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-142214.png)

At the bottom of this section you can find the Popular Content  table which gives you insights into which pages are most viewed by your visitors:

你可以在这部分的底部找到热门内容表（Popular Content table），它可以让你深入了解哪些页面是使用者们访问得最多的：

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-142309.png)

The issues listed in this table are the most visited issues and therefore are most like to be important to the users.

这个表中展示的议题是访问频率最高的那些议题，因此对你的用户来说，它们最有可能是最重要的。

When you have identified the most important issues you need to highlight them on the issues page. Here are a few ways to do that:

甄别出最重要的议题后，你需要在议题页面突出它们。这里是几种方式：
#### Pin the issue

#### 固定议题

You can have up to three pinned issue per repository. Pinned issues appear at the top of your issues page so it’s nearly impossible to miss them:

每个仓库可以有最多三个固定议题（pinned issue）。固定议题出现在议题页面的顶部，所以几乎不可能忽略他们：

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-142429.png)

#### Add a label

#### 添加标签

We already talked about **using** the labels, and this is an excellent example for **applying** the `help-wanted` as well as `priority:high` labels. Those labels will let the potential contributors know that this issue is important and that any help is appreciated.

我们已经讨论过 *使用* 标签了，并且对 `help-wanted` 和 `priority:high` 标签的应用来说，这是一个绝佳的例子。这些标签会让潜在的贡献者们知道这个议题很重要，并且他们的任何帮助都会被感谢。

#### Continuous Integration

#### 持续集成

Having every Pull Request built and tested before it is merged into the master will give you a decent amount of confidence in the code you’re about to merge into your master branch (depending on the test coverage).

在将每个拉取请求合并到主干（master）之前，先进行构建和测试，这将让你对即将合并到主干分支的代码充满信心（取决于测试的覆盖程度）。

While I couldn’t but mention it as a part of the PR management process, it’s an **automation** of a task that otherwise you’ll have to do yourself, therefore it is not directly related to PR management.

尽管我不能不提到它是 PR 管理过程的一部分，但是它是一项任务的 *自动化*，否则你不得不自己做，这样它就与 PR 管理没有直接关系了。

You can still check out every PR, build it locally, run the tests, and merge if everything is green (therefore Continuous Integration is not directly related to the PRs management). Don’t worry though, we’ll cover it in detail in the next section.

你仍然可以检出（check out）每个 PR，在本地构建，运行测试，然后在一切都通过之后进行合并（这样的话，持续集成就与 PR 管理没有直接关系）。不过别担心，我们将会在下一部分详细介绍持续集成。

### Wrapping it up

### 小结

It’s very important to keep your project clean and organized because — as we all know — cleanliness is next to godliness. Not only does it make the management process more effective, but it also improves the overall impression of your project.

让你的项目保持整洁有序非常重要，因为，我们都知道，整洁是一种美德。它不仅让管理过程更加高效，还能改善项目给人的总体印象。

> PRs and issues (along with the codebase) are integral parts of your open source projects facade. Don’t underestimate their value.

> PR 和议题（以及代码库）是开源项目门面的不可或缺的一部分。不要低估它们的价值。

![](https://www.freecodecamp.org/news/content/images/2021/03/1_n8_iSirZKBjHRufT6silGw.jpeg)

## How to Automate Your Process

## 如何实现流程自动化

A natural part of managing contributions (that is, issues and PRs) is automation — probably one of the most important aspects of OSS project management.

管理贡献（即议题和 PR）的一个自然部分是自动化——可能是 OSS 项目管理中最重要的方面之一。

### Why automate?

### 为什么要自动化？

If there is anything I’ve learned over the years of owning an open\-source system, it’s that the less routine work you have to do yourself the more free time you have for actual work (like fixing bugs and developing new features). Therefore, I seek to ****automate whatever I can.****

如果说我在拥有一个开源系统的这些年里学到了什么，那就是你要做的例行事项越少，你就有越多的空闲时间用于实际的工作（比如修复缺陷或者开发新功能）。因此，我力求 **尽可能自动化**。

Here’s how I’d like us to approach this aim: let’s first examine both workflows, (the non\-automated and the fully\-automated) to see how much of your time is actually put into routine tasks. We’ll then go into how we can achieve an improved workflow leading to more time to fix bugs.

这里是我希望我们如何实现这个目标的方式：首先检查两个工作流程（非自动化和全自动化），看你有多少时间实际上是花在例行事项上的。然后，我们将探讨如何实现改进的工作流程，让我们有更多的时间来修复缺陷。

### Worst case — no automation

### 最糟糕的情况——没有自动化

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-142749.png)

As you can see, in a case where nothing is automated, you do all the work. It is a lot of work just for a bug fix, and on top of that, this is the work that **you’ll** have to do **every time** there is a bug fix or a new feature!

如你所见，在没有任何自动化的情况下，所有的工作都由你来做。仅仅对于一个缺陷修复来说，你就需要做很多工作，更重要的是，*每次* 修复缺陷或开发新功能时，你都要做这些工作！

Now let’s take a look at an alternate scenario.

现在我们来看看另一种情况。

### Best case — everything is automated

### 最好的情况——一切都是自动化的

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-142807.png)

In this case you only do what you have to do — inspect the code and (sometimes) approve the pull request. Everything else is done automatically.

在这种情况下，你只需要做必须要做的事情——检查代码和（偶尔）批准拉取请求。其他的一切都是自动完成的。

Science fiction? No, it’s called ****continuous integration**** and ****continuous deployment****. We’re not going to get into the details of building scripts and system\-specific configurations here. Instead we’ll review the tools you need to make it work and I’ll let you decide on the specifics yourself.

科幻小说？不，它被称为 **持续集成（continuous integration）** 和 **持续部署（continuous deployment）**。在这里，我们并不会深入构建脚本和特定系统配置的细节。相反，我们将会
查看让它发挥作用所需的工具，我将会让你自己决定具体细节。
### What is Continuous integration (CI)?

### 什么是持续集成（CI）?

> **Continuous integration (CI) is the practice of automating the integration of code changes from multiple contributors into a single software project. The CI process is comprised of automatic tools that assert the new code’s correctness before integration.**

> *持续集成（CI）是一种自动将代码改动从多个贡献者集成到单个软件项目中的实践。 CI 过程由自动工具组成，这些工具会在集成之前断言新代码的正确性。*

A very basic CI run would include ****build**** and ****unit tests****, however it is not limited to these two. It might also include all kinds of static code analysis tools, linters, and so on. This is where you define your standards.

一个非常基础的 CI 运行将会包括 **构建（build）** 和 **单元测试（unit tests）**，但是并不局限于这两种。可能也会包含各种各样的静态代码分析工具、链接器，等等。这里的标准由你定。

### Why You Should Use End\-to\-End Tests

### 为什么你应该使用端到端测试

Build and unit tests provide you with quick feedback for code changes, take a relatively short time, and fail quickly if something goes wrong. But end\-to\-end (E2E) tests have a special place in CI.

构建和单元测试可以为你提供有关代码变动的快速反馈，所需时间相对较短，并且在出现问题的时候迅速失败。但是端到端（end-to-end，E2E）测试在 CI 中有着特殊的地位。

E2E tests should cover not just the correctness of the code but also your deployment flow, package integrity, and so on.

端到端测试不仅应该覆盖代码的正确性，还应该覆盖到你的部署流程、包的完整性等等。

I myself realized this when I accidentally published a new version of a package that didn’t contain any code. The build has passed, the unit tests were green as well as E2E tests (those at a time were installed by linking the build output directory from the test project). Where did it fail? In the packaging phase.

我自己也意识到了这一点，当我不小心发布了一个不包含代码的新版本包。构建通过了，单元测试和端到端测试也没有问题（这一次是通过链接测试项目的构建输出目录来安装的）。哪里失败了呢？在打包阶段。

A key takeaway here: E2E tests should test your packages as if it was used by a real user.

这里有一个关键点：端到端测试应该像真实用户使用那样测试你的软件包。

In order to achieve this I recommend the following:

1.  During your CI run, start up a local package registry. Each language/ecosystem has a few options, for example for Java or Scala projects you have the [Nexus Repository](https://blog.sonatype.com/using-nexus-3-as-your-repository-part-1-maven-artifacts), and for JavaScript there is [Verdaccio](https://github.com/verdaccio/verdaccio) (which I’m using in [@angular\-builders](https://github.com/just-jeb/angular-builders))
2.  Have a separate project that makes use of your package (this can reside in the same repo). The tests in this project should test your package’s functionality.
3.  Configure this project to use the local package registry.
4.  After your package is built, publish it to the local package registry (started up in your CI system).
5.  Install the latest version of the package (that you’ve just published) into your test project.
6.  Run the tests.

为了达到这个目标，我推荐以下几步：

1. 在你的 CI 运行期间，启动一个本地的包注册中心。每个语言/生态系统都有几个选择，例如对 Java 或 Scala 项目来说，你可以用 [Nexus 仓库](https://blog.sonatype.com/using-nexus-3-as-your-repository-part-1-maven-artifacts)，对 JavaScript 来说，可以使用 [Verdaccio](https://github.com/verdaccio/verdaccio)（我在 [@angular-builders](https://github.com/just-jeb/angular-builders)中使用它）。
2. 有一个使用你的软件包的独立项目（它可以位于同一个仓库中）。这个仓库中的测试应该测试你的打包功能。
3. 配置这个项目使用本地包注册中心。
4. 构建完你的包之后，将其发布到本地包注册中心（在你的 CI 系统中启动）
5. 安装改包的最新版本（你刚才构建的那个）到你的测试项目中。
6. 运行测试。

Not only will it test your package integrity and reliability, but it will also save you some work when it comes to continuous deployment.

这不仅可以测试软件包的完整性和可靠性，还可以在进行持续部署时给你省去一些工作。

### How a CI System Works

### CI 系统是如何工作的

There are plenty of CI systems that have a free plan for open source projects, among them [Travis CI](https://travis-ci.com/), [CircleCI](https://circleci.com/), [AppVeyor](https://www.appveyor.com/), [Github Actions](https://github.com/features/actions), and others.

很多 CI 系统都有针对开源项目的免费计划，其中有 [Travis CI](https://travis-ci.com/)、[CircleCI](https://circleci.com/)、[AppVeyor](https://www.appveyor.com/)、[Github Actions](https://github.com/features/actions) 等。

They are all more of the same and do basically the same in that they check out your code to a virtual machine, run a script that you define (usually run build and tests), and then report either a success or a failure to GitHub.

它们的功能都比较多，做的事情也基本相同：检出你的代码到虚拟机、运行你定义的脚本（通常运行构建和测试），然后向 Github 报告成功或失败。

All of these systems have an [app](https://github.com/marketplace?category=continuous-integration&type=apps) for integration with GitHub and the integration flow is pretty similar in all of them:

1.  Register on the platform.
2.  Install the corresponding app in your GitHub account.
3.  [Configure access](https://github.com/settings/installations) to the selected repositories.
4.  Create a configuration file (like `travis.yaml` ) that defines the build matrix, required build chain, and CI script.
5.  Push it to the master

所有这些系统都有一个用于和 Github 集成的 [应用程序](https://github.com/marketplace?category=continuous-integration&type=apps)，它们当中的集成过程也非常类似：

1. 在平台上注册。
2. 在你的 Github 账户中安装对应的应用程序。
3. [配置对所选仓库的访问](https://github.com/settings/installations)。
4. 创建一个配置文件（比如 `travis.yaml`），定义构建矩阵、所需构建链和 CI 脚本。
5. 将它推送到主干。

This will make your CI run on every PR and report the status to GitHub – but this isn’t enough. What you really want is to block the merge to the master branch until the PR has passed all the checks.

这会使你的 CI 在每个 PR 上运行，并向 Github 报告状态——但是这还不够。你真正想要的是在 PR 通过所有检查之前，阻止合并到主干分支。

This is done by defining the branch protection rules. In order to define those, you should go to the “****Branches”**** section in your repository “****Settings”**** and press the “****Add rule”**** button:

这可以通过定义分支保护规则来实现。为了定义这些规则，你需要前往你仓库的 **Setting** 中的 **Branch** 部分，然后点击 **Add rule** 按钮：

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-142547.png)

Then check the “****Require status checks to pass before merging”**** checkbox:

然后选择多选框 **Require status checks to pass before merging**：

![](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-142635.png)

As you can see, the corresponding Github Apps checkboxes already appear here, so the only thing that’s left is to enable them.

如你所见，相应的 Github Apps 多选框也已经出现在了这里，所以剩下的唯一一件事情就是启用它们。

The exact build script really depends on your ecosystem, the language your project is written in, the frameworks you’re using, and more. Therefore we won’t cover it here — you’ll have to check out the documentation of the CI system yourself to get into specifics. However, you now have a pretty good idea of what CI is and how it automates your PRs, so let’s move on.

具体的构建脚本由你的生态系统、编写项目的语言、你所使用的框架等决定。因此，我不会在这里进行介绍——你需要自己检查 CI 系统的文档，了解具体细节。然而，你现在对什么是 CI 以及它是如何自动化你的 PR 有了很好的认识，让我们继续前进吧。

### How Continuous Deployment (CD) Works

### 持续部署（CD）是如何工作的

> **Continuous Deployment (CD) is a software release process that uses automated testing to validate if changes to a codebase are correct and stable for immediate autonomous deployment to a production environment.**

> *持续部署（CD）是一个软件发布过程，它使用自动化测试来验证对代码库的更改是否正确和稳定，以便立即自动部署到生产环境中。*

In our case, the production environment is when a package is publicly available in a package registry. This is a point\-of\-no\-return phase, as once you have published it you cannot un\-publish it since this is publicly available (and hence potentially in use).

在我们的情况中，生产环境就是程序包在包注册中心中公开可用的时候。这是一个无法返回的阶段，因为一旦发布，就不能取消发布了，因为程序包是公开可用的（因此，它可能正被使用）。

There are multiple strategies for continuous deployment which really depend on the project and its complexity. But in my opinion, releases should be made solely from a master branch as this makes the workflow pretty easy. Here’s how:

1.  Each PR represents either a bug fix or a new feature.
2.  The code is tested (including E2E) before it even gets to the master.
3.  The master is a protected branch so as long as you don’t merge failing PRs the master stays stable.
4.  Every PR merge to a master triggers a master CI run which eventually releases a new version.

持续部署有多种策略，具体策略取决于项目及其复杂程度。但是在我看来，发行（release）只应该基于主干分支，因为这会让工作流变得非常简单。具体做法如下：

1. 每个 PR 要么代表一个缺陷修复，要么代表一个新功能。
2. 代码在进入主干之前经过了测试（包括端到端测试）。
3. 主干分支是受保护的分支，所以只要你不合并失败的 PR，它就会保持稳定。
4. 每个合并到主干的 PR 都会触发主干 CI 运行，CI 最终会发布一个新版本。

This will ensure that all the releases are sequential and will make it really easy to associate certain PR with specific versions.

这将确保所有的发布都是按顺序进行的，并且可以很容易地将某些 PR 与特定的版本联系起来。

To automate package releases, we’ll need a few things:

1.  Automatic version advancement based on commit messages.
2.  Automatic CHANGELOG updates based on commit messages.
3.  Automatic package publishing to a public package repository.
4.  Automatic release on Github.

为了自动化程序包的发行过程，你需要做几件事情：

1. 基于提交信息自动升级版本。
2. 基于提交信息自动更新 CHANGELOG。
3. 自动发布程序包到公共程序包仓库。
4. 自动在 Gihub 上发行。

Good news everyone: all of these are already supported by [semantic\-release](https://github.com/semantic-release/semantic-release). Bad news: you’ll have to invest some time to make it work (but eventually it pays off).

给大家带来一个好消息：语义化版本（[semantic-release](https://github.com/semantic-release/semantic-release)）已经支持所有这些功能了。坏消息是：你需要花一些时间才能让它发挥作用（但是最终会有所回报）。

### How Semantic\-release Works

### Semantic-release 是如何工作的

> **semantic\-release automates the whole package release workflow including: determining the next version number, generating the release notes and publishing the package.**
>
> **This removes the immediate connection between human emotions and version numbers, strictly following the [Semantic Versioning](http://semver.org/) specification.**

> *semantic-release 自动化整个程序包发行工作流程，包括：确定下个版本号、生成发行说明和发布程序包。*
>
> *这消除了人类感情和版本号之间的直接联系，严格遵循 [语义化版本](http://semver.org/) 版本规范。*

We won’t be covering the whole integration process here as they have very good documentation and there is no reason to recapitulate it here. I will mention a few points though:

*   Make sure that you understand [semantic versioning specification](https://semver.org/) and the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) format before you start with Semantic Release.
*   To make semantic\-release work well, you should enforce certain commit message formats. To do so you can run [commitlint](https://github.com/conventional-changelog/commitlint) as a [husky](https://github.com/typicode/husky) precommit hook. It will enforce conventional commits when someone creates a local commit, but it can’t do anything about commits that are performed directly from the GitHub web UI (which often happens when someone wants to make a quick fix to their PR). Therefore I recommend that you back it up by [commitlint Github Action](https://github.com/marketplace/actions/commit-linter).

我们不会在这里介绍整个集成过程，因为它们有良好的文档，也没有理由在这里进行复述。不过，我还是会提几点：

* 在你开始 Semantic Release 之前，确保你理解 [语义化版本声明](https://semver.org/) 和 [约定式提交](https://www.conventionalcommits.org/en/v1.0.0/) 的格式。
* 为了使 semantic-release 能够良好地工作，你应该强制执行某些提交消息格式。为此，你可以将 [Commitlint](https://github.com/conventional-changelog/commitlint) 作为一个 [husky](https://github.com/typicode/husky) 预提交钩子运行。当有人创建本地提交时，它将强制执行常规提交，但对于直接从 Github Web UI 进行的提交就无能为力了（这通常发生在有人想要快速修复他们的 PR 时）。因此，我建立你通过 [commitlint Github Action](https://github.com/marketplace/actions/commit-linter) 对其进行备份。

After you set up the semantic release as part of your workflow, you’re pretty much done and you no longer have to spend your time on these routine processes. Although there is one more optimization you can do.

在将语义化发行设置为工作流的一部分之后，你差不多就快完成了，你不再需要在这些常规过程上花时间。尽管你还可以进行另一项优化。

### How to Keep the Project Up to Date

### 如何保持项目的更新

If your project has no external dependencies — skip this part. However, most projects depend on other packages, and other packages tend to change.

如果你的项目没有外部依赖，跳过这一部分。然而，大多数项目都依赖于其它程序包，而其它程序包往往会发生变化。

Keeping your project up to date with its dependencies is important but **it is time\-consuming**. Luckily for us, there is a solution. In fact, there are a few of them such as [Greenkeeper](https://greenkeeper.io/), [Renovate](https://renovate.whitesourcesoftware.com/), and [Dependabot](https://dependabot.com/).

使项目保持最新的依赖关系很重要，但这很耗时。幸运的是，我们有一个解决方案。实际上，有一些，例如 [Greenkeeper](https://greenkeeper.io/)、[Renovate](https://renovate.whitesourcesoftware.com/) 和 [Dependabot](https://dependabot.com/)。

The idea is pretty much the same in all of them so I’ll just quote Dependabot’s “How it works” section:

它们的想法几乎相同，因此我只引用 Dependabot 的 “How it works” 部分：

> **1. Dependabot checks for updates**
> *Dependabot pulls down your dependency files and looks for any outdated or insecure requirements.*

> **2. Dependabot opens pull requests**
> *If any of your dependencies are out-of-date, Dependabot opens individual pull requests to update each one.*

> **3. You review and merge**
> *You check that your tests pass, scan the included changelog and release notes, then hit merge with confidence.*

As you may have noticed it only makes sense when you have a working CI.

你可能已经注意到，他只在你有能发挥作用的 CI 时才有意义。

### Wrapping it up

### 小结

If you have a fully automated CI/CD cycle and a new issue is opened in your OSS repository, you can provide a bug fix within minutes.

如果你有一个全自动化的 CI/CD 闭环，并且在你的 OSS 仓库中有一个新打开的议题，你可以在几分钟内提供一个缺陷修复。

In fact, you can enter the mobile Github version from your phone, fix the buggy line or two, and commit the code. The rest is done automatically, and your customers are provided with a new version right away.

实际上，你可以在你的手机上进入 Github 移动版，修复一两行缺陷代码，然后提交。剩余的事情就自动完成了，你的客户马上就能得到一个新的版本。

I myself was able to quickly and painlessly get a fixed version to my customers multiple times.

我自己就能够快速、轻松地向客户多次提供修复版本。

> **Having great automation is not about freeing* up *some time for leisure, it’s about dedicating your time to really important things and increasing your responsiveness.**

> *拥有强大的自动化能力并不是为了腾出一些时间进行休闲娱乐，而是要把时间用在真正重要的事情上，并提高响应能力。*

![](https://www.freecodecamp.org/news/content/images/2021/03/1_6k7J2Dj1iz0c901UExzjWg.jpeg)

## Version Management

## 版本管理

To conclude the guide I'd like to talk about Versions Management, an aspect that always becomes relevant for any OSS project that has a decent number of users.
You’ll learn about version notations, breaking changes, back\-ports, and more.

在这篇指南的最后，我想谈一谈版本管理，对于任何拥有大量用户的 OSS 项目来说，版本管理总是很重要。你将会了解到版本符号、中断性变更、向后移植，等等。

### What is Software Versioning?

### 什么是软件版本控制？

Let’s see what Wikipedia has to say about software versioning.

咱们来看一下维基百科对软件版本控制（software versioning）的解释吧。

> ******Software upgrade versioning***is the process of assigning either unique *version names* or unique *version numbers* to unique states of [computer software](https://en.wikipedia.org/wiki/Computer_software).**
>
> **Modern computer software is often tracked using two different software versioning schemes — [internal version number](https://en.wikipedia.org/wiki/Software_versioning#Internal_version_numbers) that may be incremented many times in a single day, such as a revision control number, and a *release version* that typically changes far less often, such as semantic versioning[\[1\]](https://en.wikipedia.org/wiki/Software_versioning#cite_note-semver-1) or a [project code name](https://en.wikipedia.org/wiki/Code_name#Project_code_name).**

> *软件升级版本控制（Software upgrade versioning）是将唯一的版本名称或版本号分配给[计算机软件](https://en.wikipedia.org/wiki/Computer_software)的唯一状态的一个过程。*
>
> *现代计算机软件通常采用两种不同的软件版本控制方案进行版本跟踪——可能在一天内增长很多次的[内部版本号](https://en.wikipedia.org/wiki/Software_versioning#Internal_version_numbers)，比如修订控制号，还有一个就是发行版本，它变化得通常没这么快，比如语义化版本[\[1\]](https://en.wikipedia.org/wiki/Software_versioning#cite_note-semver-1)或[项目代号](https://en.wikipedia.org/wiki/Code_name#Project_code_name)。*

Indeed, there are multiple ways of uniquely identifying your software product version.

确实，有很多方法可以唯一标识你的软件产品的版本。

The most widely known way is by giving it a name.

最广为人知的方式就是给它起一个名字。

The vast majority of people on Earth, even those indirectly connected to technology, have probably heard of Android Ice Cream Sandwich and Marshmallow or Mac OS Leopard, its frozen cousin Snow Leopard, and Big Sur.

地球上的绝大多数人，甚至包含那些与技术有着间接关系的人，都可能听说过安卓的冰淇淋三明治（Ice Cream Sandwich）和棉花糖（Marshmallow）或 Mac OS 的美洲豹（Leopard），以及它的冷冻表亲雪豹（Snow Leopard），还有 Big Sur。

Programmers have probably heard about Eclipse with its celestial bodies Luna, Mars, and Photon.

程序员可能听过 Eclipse 及其天体版本 Luna、Mars 和 Photon。

All these are major versions of software products.

所有这些都是软件产品的大版本号。

Though names are great for marketing, they can also be confusing sometimes.
In fact, Google has dropped the usage of candies in their Android version names because they:

尽管名字非常适合市场营销，但是它们有时候也会让人感到困惑。
实际上，谷歌已经在它们的安卓版本名字中取消了对糖果的使用，因为它们：

> **Heard feedback over the years from users that the names weren’t always intuitively understandable by everyone in the global community**

> *多年以来都听到用户在反馈：这些名字总是不能让全球社区中的每个人都有直观的理解。*

And rightfully so, yet perhaps we just haven’t evolved enough to extrapolate version numbers from animal species, even though Snow Leopard is much cooler than Leopard.

没错，但也许只是我们还没进化到从动物种类推断出版本号的程度，尽管雪豹（Snow Leapard）比美洲豹（Leopard）要酷很多。

Celestial bodies and candies are a bit easier concepts to grasp, but only if you name them alphabetically (as Android and Eclipse do). But one thing is certain — there is no better way to determine succession than numbers.

天体和糖果都是比较容易理解的概念，但前提是你必须按照字母的出现顺序命名（像安卓和 Eclipse 这样）。但是有一点可以肯定——没有什么方法能够比数字更好地确定连续的情况。

Thus, if you name the first version of your software product “Product 1” and the second version “Product 2” it’s pretty intuitive to say that the second version is the more recent, isn’t it?

因此，如果你将你的软件产品的第一个版本命名为“Product 1”，将第二个版本命名为“Product 2”，那么就可以很直观地说第二个版本是最新的，不是吗？

However, unlike standalone software products that don’t expose APIs, software that is consumed by other software (like the majority of OSS products) needs better versioning than just a sequence of numbers.

然而，不同于不暴露 API 的独立软件产品，那些被其他软件（比如 OSS 产品主体部分）使用的软件需要更好的版本控制，而不仅仅是一串数字。

For example, if we used a simple numbers sequence for versioning, how would the user distinguish between a bug fix and a change that is breaking the existing API?

例如，如果我们用一个简单的数字序列进行版本控制，用户如何能区分出缺陷修复和中断现有 API 的变更呢？

The answer is……semantic versioning.

答案就是……语义化版本。

### What is Semantic Versioning?

### 什么是语义化版本？

Semantic version (also known as SemVer) is a widely adopted version scheme that uses a sequence of 3 digits in the following format: `MAJOR.MINOR.PATCH` .

语义化版本（又称 SemVer）是一个广泛采用的版本管理方案，它使用格式为 `MAJOR.MINOR.PATCH` 的三位数字序列。

The rules are simple — given a version number `MAJOR.MINOR.PATCH`, increment the:

*   `MAJOR` version when you make incompatible API changes
*   `MINOR` version when you add functionality in a backwards compatible manner
*   `PATCH` version when you make backwards compatible bug fixes.

规则很简单——给定一个版本号 `MAJOR.MINOR.PATCH`，分别在不同的情况下递增不同的版本：

* 当你进行了不兼容的 API 变更时，递增 `MAJOR` 版本
* 当你以向后兼容的方式添加了一个功能时，递增 `MINOR` 版本
* 当你进行了向后兼容的缺陷修复时，递增 `PATCH` 版本

Additional labels for pre\-release and build metadata are available as extensions to the `MAJOR.MINOR.PATCH` format.

预发行和构建元数据的其他标签可以作为 `MAJOR.MINOR.PATCH` 格式的扩展使用。

![](https://www.freecodecamp.org/news/content/images/2021/03/versioning.png)

It provides a clear and concise way to communicate the changes in your software product to your users.

它提供了一种简洁明了的方式，来将软件产品中的变更传递给你的用户。

But most importantly, it is widely adopted by all kinds of package managers and build tools (like [NPM](https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept) and [Maven](https://docs.oracle.com/middleware/1212/core/MAVEN/maven_version.htm#MAVEN8903)), which allows users to depend on a specific ****range of versions**** rather than on a specific version.

但是最重要的是，它被所有种类的包管理器和构建工具（比如 [NPM](https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept) 和 [Maven](https://docs.oracle.com/middleware/1212/core/MAVEN/maven_version.htm#MAVEN8903)）广泛使用，这些工具允许用户依赖 *某个范围内* 的版本，而不是某个特定的版本。

For example, specifying the version range `^2.2.1` rather than an explicit version `2.2.1`would let the user accept any backwards compatible bug fixes or new features that will be released on top of version `2.2.1`.

例如，声明版本区间 `^2.2.1` 而不是显式的版本号 `2.2.1` 将会让用户接受任何向后兼容的缺陷修复或将会在 `2.2.1` 版本之上发布的新功能。

That said, build tools and package managers rely on a contract between a user and a package owner — a contract that is defined by SemVer.

也就是说，构建工具和包管理器依赖用户和包的所有者之间的约定——这个约定是由 SemVer 定义的。

That means the responsibility is **yours**— you’re the one who defines what a breaking change is and what a minor change is. You can accidentally release a breaking change as a bug fix (patch version) and it **will** break builds that depend on a range.

那意味着你要全权负责——你就是那个给中断性变更和小型变更下定义的人。你可以不小心将一个中断性变更作为缺陷修复（补丁版本）发布，并且它 *将会* 破坏依赖某个范围的构建。

Breaking builds is a horrible thing to do so I’d recommend you use `semantic-release` with a predefined message format together with a commits format enforcement tool.

破坏构建是一件非常恐怖的事情，所以我推荐你使用带有预定义消息格式的 `semantic-release` 和提交格式的强制工具。

You can find more info about Semantic Versioning on the official website, [semver.org](https://semver.org/).

你可以在 [Server.org](https://semver.org/) 的官网找到更多有关语义化版本的信息。

Now, that we learned about **identifying** the breaking changes, let’s talk about **introducing** them.

既然我们已经学了如何 *识别* 中断性变更，我们就来聊聊如何 *引入* 它们吧。

### How to Manage Breaking Changes

### 如何管理中断性变更

Breaking changes are changes to your public API that remove, rename, or change your contracts with the user in an incompatible way.

中断性变更（breaking change）是那些对公开 API 的变更，这些变更以不兼容的方式移除、重命名或更改了你与用户之间的约定。

Ideally, you would maintain backward compatibility in your code and wouldn’t introduce any breaking changes ever. But then you wake up to a harsh reality.

理想情况下，你将会在你的代码中保持向后兼容，并且永远不会引入中断性变更。但是，你会意识到现实的残酷的。

Software is evolving and so does your code. The needs of the users change and so does your API. You grow as a developer and so does your product.

软件在不断演进，你的代码也是。用户的需求会变，你的 API 也会变。你作为一名开发者在成长，你的产品也在成长。

Therefore, especially as an open\-source developer who doesn’t get paid for their job, you just can’t allow yourself to maintain all the legacy code that exists in your project. Sometimes, you need to get rid of it.

因此，特别是作为一个不拿工资的开源开发者，你就是不能容许你自己维护的项目中存在的所有遗留代码。有时，你需要移除它们。

The question is how?

问题是如何移除？

As always, it is a tradeoff. You would know better how this change or another impacts the users.

与往常一样，需要进行权衡。你会更清楚这个或其它的变更对用户的影响。

You don’t **have** to maintain backward compatibly at any cost, nor do you have to implement all the new features in every old version. But it is certainly something that you **should** take into account.

你不必不惜代价地保持向后兼容，也不必在每个旧版本中实现所有的新功能。但是，这毫无疑问是你 *应该* 考虑到的事情。

If the migration cost is relatively low for the user, then it’s fine to make a breaking change and it’s quite reasonable to not support this feature in older versions.

如果用户的迁移成本比较低，那么进行中断性变更是可以的，在较老的版本中不支持这个功能也很合理。

However, if the migration cost is high and the vast majority of users cannot afford this effort, you should probably consider making this change backward compatible at first and releasing a deprecation warning.

然而，如果迁移成本很高，绝大多数用户无法承担的话，你或许应该先考虑让这个变更向后兼容，然后发布一个废弃警告。

A deprecation warning is often released together with a new API, while the old API is still supported. This way the users have time to migrate. Once they do, in the next major version, the deprecation warning and the old API can be safely removed.

废弃警告通常和新的 API 一起发布，旧的 API 仍然受到支持。这样一来，用户就有时间进行迁移。在他们完成迁移之后，你就可以再下个大版本中安全地移除废弃警告和旧的 API 了。

In any case whenever you introduce a breaking change make sure you have a migration guide that has step\-by\-step instructions for the migration.

无论如何，不管你何时引入中断性变更，都要确保有一份迁移指南，包含迁移的每一步。

In addition, as an act of courtesy, it would be very nice of you to **give users the time** to prepare for a breaking change, especially if it doesn’t have a grace period (where both old and new APIs are supported).

此外，出于礼貌，你最好给用户留下为中断性变更做准备的时间，尤其是在没有宽限期的情况下（新旧 API 都支持）。

A little heads\-up that explains the breaking change, the reasoning behind it, and the expected time frame is very helpful. It can be a tweet, a blog post, or even a new minor version of your product with a deprecation warning.

一个解释中断性变更、其背后的原因以及预期的时间范围的预先通知是非常有用的。这个通知可以是一条推特、一篇博客文章，甚至是任何带有废弃警告的新的小版本。

Remember that while a breaking change is essentially a negative experience, a **sudden** breaking change is an **extremely** negative experience.

记住，虽然中断性变更基本上是一个负面体验，但是一个 *突然* 的中断性变更却是一个 *非常* 负面的体验。

### Automatic Migration

### 自动迁移

We can divide breaking changes into two categories — non\-deterministic and deterministic.

我们可以将中断性变更分为两类——非确定性（non-determinstic）变更与确定性（determinstic）变更。

Non\-deterministic are the ones in which you can’t predict the outcome of the migration effort, for example when you completely remove a certain portion of an API.

非确定性变更是指那些你无法预测迁移工作结果的变更，比如将某个 API 的特定部分完全移除。

In this case, it’s up to the user to decide whether they want to replace it with some other 3rd party library, implement it themself, or depreciate it as well.

在这种情况下，由用户自己决定是否要用第三方库替换它、自己实现它，或者贬值它。

Deterministic changes are the ones that, given code `X` and user input `I`, allow you to transform it into code `Y`. For example, changing a function name or an import statement.

确定性变更是指那些给定代码 `X` 和用户输入 `I`，允许你将其转变为代码 `Y` 的变更（即通过输入可以明确地知道输出）。比如，改变函数名或者导入语句。

If you introduce a deterministic breaking change you can write an automation that will change the user’s codebase and adjust it to the new API.

如果你引入了一个确定的中断性变更，你可以编写一个自动化程序，修改用户的代码库，并将其调整为新的 API。

With this automation in place, you won’t have to care about backward compatibility and detailed migration guides. You provide the user with a way to upgrade their code with zero effort from their side, which is crucial in software updates.

有了这种自动化，你就不必担心向后兼容和详细的迁移指南了。你给用户提供一种不需任何努力就能升级他们代码的方式，这对软件更新至关重要。

However, there is an inherent tradeoff here as well. Writing code takes time, just as writing a migration guide does. And naturally, writing code that migrates a complex code flow into a new API will take more time than writing code that replaces a function name with a new one.

然而，这里也存在固有的权衡。写代码需要花时间，就像编写迁移指南一样。当然，编写将复杂代码流迁移到新 API 的代码比编写替换函数名的代码花费更多的时间。

Sometimes you just can’t afford this kind of effort.

有时，你并不能负担起这个时间。

In case you do decide to go for it, there are tools that can help you achieve what you want.

如果你决定这么做，有一些工具可以帮你实现目标。

The most widely known and language agnostic one is [Codemode](https://github.com/facebook/codemod) by Facebook.

其中最广为人知且语言无关的就是 Facebook 的 [Codemode](https://github.com/facebook/codemod)。

> **codemod is a tool/library to assist you with large\-scale codebase refactors that can be partially automated but still require human oversight and occasional intervention.**

> *codemod 是一个工具/库，可以帮助你重构大规模代码库，重构可以部分自动化，但仍然需要人工监督和偶尔干预。*

There are also more sophisticated tools that use [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) and can be used for more complicated tasks than just Find & Replace.

还有一些更加复杂的工具，它们使用 [抽象语法树（AST）](https://en.wikipedia.org/wiki/Abstract_syntax_tree)，可以用于更加复杂的任务，而不仅仅是查找并替换。

For example, another Facebook library (JS/TS specific) called [JSCodeShift](https://github.com/facebook/jscodeshift).
Or [code\-migrate](https://github.com/ranyitz/code-migrate) — a tool (again JS/TS specific) that allows you to write a guided migration relatively easy and provides a user with nice CLI based prompts.

例如，Facebook 的另一个库（只适用于 JS/TS）被称为 [JSCodeShift](https://github.com/facebook/jscodeshift)。或者 [code-migrate](https://github.com/ranyitz/code-migrate)——一个允许你比较容易地编写迁移指南的工具（还是只适用于 JS/TS），为用户提供一个漂亮的基于命令提示符的 CLI 界面。

![](https://www.freecodecamp.org/news/content/images/2021/03/1_aFlF8Vx0-thA0EutbBgiUA.png)

Some big OSS projects even have a solution of their own. One example for such a solution is [Angular schematics](https://angular.io/guide/schematics) — a template\-based code generator that supports complex logic.

一些大型 OSS 项目甚至有他们自己的解决方案。其中有一个例子就是 [Angular schematics](https://angular.io/guide/schematics) ——一个基于模板的代码生成器，支持复杂逻辑。

Automatic code migration can be published as a separate package (like `my-cool-oss-migrate-v4-v5` ) and mentioned as a step in the migration guide.

自动代码迁移可以作为一个单独的程序包（比如 `my-cool-oss-migrate-v4-v5`）发布，并作为迁移指南中的一个步骤被提到。

Alternatively, the migration can be a part of your major version that contains breaking changes and be executed upon installation of this version in the user’s codebase. The choice is yours.

另外，迁移可以是包含中断性变更的大版本的一部分，可以在用户在代码库中安装该版本后执行。具体由你决定。

### Back\-porting

### 移植

Another common practice is back\-porting important changes to previous versions. For example, a critical bug has been found after a major release (with a breaking change) but it also applies to a previous version.

另一个惯例就是将重要的变更移植到以前的版本中。例如，在某个主要发行版本（此版本包含中断性变更）之后发现了一个严重缺陷，但是这个缺陷也存在于之前的版本中。

In this case, you can’t expect your users to perform a tedious migration because of a single bug. On the other hand, checking out the older revision, implementing the fix on top of it, and releasing it as a minor bump of an older version might be cumbersome.

这时，你不能指望用户们因为这一个缺陷就去进行繁琐的迁移。相反，检出老的修订版本，在它的上面进行修复，然后以该老版本的小版本发行，可能会很复杂。

> *The solution: have a protected branch per major version.*

> *解决方案：为每个大版本建立一个受保护的分支。*

Every time you plan to release a major version you create a branch from the main branch named `c.x.x` where `c` is the current major version number.
You make all such branches protected (just as the main branch) so that you don't accidentally break them. Then, anytime you have to back\-port a feature or a bug fix from a newer major version, you either reimplement it on this branch or (if possible) cherry\-pick the commits from the main branch.

每当你计划发行一个大版本时，就从主分支创建出一个命名为 `c.x.x` 的分支，其中 `c` 就是当前的大版本号。把所有这样的分支设置为受保护的分支（就像主分支一样），这样你就不会在不经意间破坏到它们。然后，在你不得不从一个新的大版本中移植某个功能或缺陷修复的任何时候，你可以在这个分支上重新实现它，也可以（如果可能的话）从主分支挑选（cherry-pick）对应的提交。

In addition, a strategy that is worth mentioning is having a separate branch for the **next** major version as well (as opposed to only having branches for previous major versions).

此外，有一个策略值得一提：为 *下一个* 大版本创建一个单独的分支（而不是只为之前大版本创建分支）。

This is usually relevant for large scale projects (like Webpack or Babel) that have a lot of changes in every new major version.

这通常与=适用于大规模项目（比如 Webpack 或 Babel），这些项目在每个新的大版本中多有很多的变更。

Having a separate branch for the upcoming major version allows working on it and having it published for testing, while still keeping the most relevant version (and working on it) in the main branch.

为即将到来的大版本建立一个单独的分支允许在其上开展工作，并将其发布进行测试，同时仍然将最相关的版本（在其上开展工作）保留在主分支。

Once the new major version is published, its branch becomes a main branch and a new branch is created for the next major version.

新版本发布之后，它的分支就成为主分支，下个大版本的新分支也会被创建。

## Final Thoughts

## 最后的想法

I hope you enjoyed this guide, and have a pretty good understanding now of what it means to own an open source project.

我希望你喜欢这篇指南，现在已经对拥有一个开源项目意味着什么有了一个更好的理解。

In the end I’d like to share with you one thing that you should always keep in mind while owning an open\-source project.

最后，我想和大家分享一件事，在拥有一个开源项目时，你应该使用牢记。

### Listen to Your Users

### 倾听用户的声音

It might sound counter\-intuitive, but that is the truth — you’re not the only one who defines the road map, users define it too. In fact, users define most of it.
If you own an open\-source project then you do it to help others, not yourself.

这听起来可能有点违反直觉，但事实就是这样——你并不是唯一一个定义路线图的人，用户也定义了它。实际上，用户定义了路线图的绝大部分。
如果你拥有一个开源项目，你这么做的目的是为了帮助他人，而不是你自己。

Have multiple channels for feedback. There are users that only have a quick question to which you can provide an answer within a second.

准备多个反馈渠道。有些用户只有一个快速的问题，你可以在一秒钟内给出答案。

There are potential contributors that would like to discuss the roadmap but don’t want to do this in public. Give them a way to contact you. Provide a link to Slack or Discord, share your Twitter account, and so on. The more channels the better.

也有潜在的贡献者想要讨论路线图，但是他们又不想公开讨论。给他们一个联系你的途径。提供一个 Slack 或 Discord 的链接，分享你的 Twitter 账户，等等。渠道越多越好。

Speaking of channels, you're always welcome to DM me on [Twitter](https://twitter.com/_Just_JeB_) in case you have any questions or thoughts.

说到渠道，如果你有任何问题或想法，可以随时在 [Twitter](https://twitter.com/_Just_JeB_) 上直接给我发消息。
