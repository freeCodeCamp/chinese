> -  原文地址：[Open Source for Developers – A Beginner's Handbook to Help You Start Contributing](https://www.freecodecamp.org/news/a-practical-guide-to-start-opensource-contributions/)
> -  原文作者：[TAPAS ADHIKARY](https://www.freecodecamp.org/news/author/tapas/)
> -  译者：Papaya HUANG
> -  校对者：

![Open Source for Developers – A Beginner's Handbook to Help You Start Contributing](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/Book-PNG.png)

听到`开源`的时候你脑海中会浮现什么画面? 在编程世界中，开源是开源软件(OSS)的统称。开源软件建立在对所有人开放查看、更改、扩展和分发的源代码之上。

本文将讨论开源软件和其生态系统的各个方面。包括为开源项目贡献的条件、你需要掌握的技能、如何维护开源项目、挑战和资源，以及一些你可以开始着手尝试的激动人心的项目。

在开始之前，让我简单介绍一下我自己以及我对开源社区的兴趣。

我每天都会使用开源项目、产品和服务，我也参与贡献开源项目提升自我。我维护着一些向初学者提供web编程教学的开源项目。

你可以在我的[GitHub资料](https://github.com/atapas)上查看我的开源项目。

如果你尚未开始贡献开源项目，我将通过这篇文章分享我自己的经验帮助你开启开源之旅。

## 开源是如何运作的?

开源项目包含以下人物和元素：

`项目维护者`: 维护者有一位或者多位，他们启动开源项目、管理项目、制定决策、集思广益并且和贡献者、用户以及营销平台密切接触。

项目维护者拥有额外的权利来控制项目的各个方面。

`项目贡献者`: 启动开源项目的维护者是早起贡献者。随着项目的壮大，更多人了解到项目并且愿意参与贡献。

项目越大，贡献者越多。任何人都可以查看项目代码、修改代码、请求校对并将改变并入项目中。

`源代码和文档库`: 维护者将项目源代码保存在一个中心化的源代码库 (例如GitHub)。这样所有贡献者就可以访问代码并且参与贡献。

`项目许可证`: 每一个开源项目都必须指定一个分发许可证，给用户和使用者提供清晰的信息。

有各种个样的许可证，维护者可以根据项目做选择。比较广泛被采用的许可证包括：MIT、 Apache License 2.0、 GNU General Public License (GPL) 3.0 等。

`贡献指南`: OSS项目的维护者创建贡献指南帮助贡献者理解合并请求（pull request)的流程、标准、范围等。

`行为准则指南`: 行为准则指南讨论各种指导方针、对贡献者的协同和行为期望，以及如何提出和解决issue（问题）。

`项目文化`: 项目文化随着项目社区发展而变化。虽然维护者对其影响重大，但贡献者也有同样的责任来维护一个健康学习、分享和成长的文化。

`社区`: 随着项目发展，围绕项目的社区也发展起来。组织社区交流的常用平台有GitHub Discussions和Discord。

`分发`: 开源项目应该接触到终端用户和消费者，所以应该有一个分发模型将代码转化为最终的产品，进行交付。

`用户/客户`: 用户和客户是开源团队通过源代码构建产品的消费者。

让我们查看下面的图片，图片是一个包含维护者和开发者的开源项目社区。

中心化的仓库里包含源代码。 贡献者 `fork（分叉）` (你马上要学到这个术语) `upstream repository（上游仓库）`并贡献。一旦完成，项目维护者将其`merges（合并）`到主分支（main branch)。

![opensource-model](https://www.freecodecamp.org/news/content/images/2022/07/opensource-model.png)

开源项目运作模型的高层视角

如果你不熟悉fork、 branch、 merge这些词，不用担心！我们马上就会讨论这些词，请继续阅读。

现在让我们讨论一下开源软件是如何交付给用户/客户的。

下面的图片显示了一种可能性的高层视角。开源项目应具有构建-打包-部署机制，该机制使用持续集成和持续部署（CI/CD）流程。

每当`main branch（主分支）`的代码发生改动，CI/CD工作流就开始自动工作：构建源代码、打包并部署，供终端用户和目标客户能够使用。

![deploy](https://www.freecodecamp.org/news/content/images/2022/07/deploy.png)

从源代码到用户的高层视角

请注意: CI/CD或者其他部署机制并不是开源软件开发的一部分，但了解它有助于理解OSS端到端的工作模型。


## 开源项目贡献是什么意思?

`开源`贡献就是使用一切办法来提升开源项目。一个常见的误解是你只能贡献源代码，完全不是这样。

贡献源代码是参与开源项目的一种形式，但是还有其他方式：

-   项目的文档。提高文档质量，帮助贡献者和用户更容易参与和使用。
-   测试应用、发现问题，并在问题管理系统创建问题（issue）。
-   参与代码校对，帮助提高项目的编码标准。
-   编写单元测试、端到端测试，使得应用的质量更高。
-   创建如文章、视频之类的内容来提升项目的知名度。
-   帮助创建兴趣社区。

以上都是重要的开源贡献方面。

## 参与开源贡献的好处

贡献开源项目对于开发者来说好处多多，但是主要的好处有：

-   抓住机会、提高技能水平
-   提高软件/应用的代码和文档水平
-   接触想法相似的朋友、建立人脉和社区
-   理解应用开发和维护的流程
-   从Pull Request反馈中学习
-   学习如何管理自己的开源项目

## 开源迷思

我们已经了解了开源模型和它的好处。接下来我们就要学习如何作为项目的`维护者` 和`参与者`来开启开源之旅。

在开始之前，让我们先消除一些迷思。

❌ **迷思**: 我不了解代码。开源不适合我。

✅ **事实:** 开源不仅仅是编写代码！你可以通过提高文档、测试、创建媒体、内容等各种方式参与进来。所以不要让不具备编码技能成为你参与开源项目的绊脚石。

❌ **迷思**: 我知道怎么写代码。但是我对开源项目使用的技术不熟悉，我不能贡献。

✅ **事实:** 相反，这是学习新东西绝佳的机会！开源生态系统提供足够的时间和耐心让你学习和参与贡献。

❌ **迷思**: 开源项目的维护标准不如企业。

✅ **事实:** 完全不对。实际上有非常多的企业软件来源于开源软件。所以认为开源项目的质量和标准不高不对。

❌ **迷思**: 开源项目难以维护。

✅ **事实:** 开源项目是由贡献者支持的。维护者主要的工作是设定范围、创建路线图、创建社区以及保持社区的贡献热情。

许多开源项目的维护者甚至不需要编写代码。只要维护者提供必要的支持，贡献者就可以将项目运作起来。

❌ **迷思**: 开源软件总是免费的。

✅ **事实:** 大多数开源项目是免费的，但不是所有的都是。这是由项目的许可证所决定的。有一些许可证要求必须让使用和分发免费。你需要格外注意项目许可证信息，了解OSS到底免费到什么程度。

❌ **迷思**: 开源项目只适合初学者。

✅ **事实:** 许多开发者认为开源项目是为初学者和学生设计的。实际上任何人都可以参与进来。对于主题专家来说，利用他们的知识和经验来增强开源项目是有意义的。

## 开始参与开源需要具备什么条件

开发者想要快速开始参与开源项目需要了解一些基本技能。这些是可选的，但是如果具备，你将更享受参与开源贡献。

### 了解Git基础

如果你已经了解Git的概念及其主要用途，那么你已经前进了一大步。Git在开源世界中无处不在，你不能忽视它。

你至少要了解以下话题：

-   什么是Git，它是怎么运作的？
-   仓库是什么?
-   如何复制(clone)一个仓库?
-   如何stage/un-stage（暂存/取消暂存）修改?
-   如何commit（提交）你的修改?
-   如何编写更好的提交消息?
-   如何解决合并冲突?
-   如何将你的修改推送（push）到远程仓库?
-   如何从远程仓库拉取（pull）修改?

如果你尚不了解Git，我推荐你观看这个视频，了解Git的概念和上面提到的用例： [为初学者揭开Git的神秘面纱](https://www.youtube.com/watch?v=vWtu4mzUgQo).

### 熟悉GitHub

[GitHub](https://github.com/)上有超过1.28亿个公开仓库，其中很大一部分是开源项目。你想要参与贡献的开源项目可能在GitHub上，所以你应该学习如何使用GitHub。

作为开源项目的贡献者，你应该知道：

-   如何fork（分叉）一个仓库?
-   如何找到仓库的URL并clone（克隆）仓库?
-   如何创建一个Pull Request?
-   如何校对一个Pull Request?

作为一个项目维护者，你应该知道：

-   如何创建一个仓库?
-   如何为项目添加许可证信息?
-   如何创建贡献指南和行为准则指南?
-   如何创建提交issue和pull requests的标准?
-   如何合并pull requests?

你可以关注下面的Twitter thread，它分步骤讲解了上面的所有信息：

> Do you have public GitHub repositories?  
>   
> Here are 10 tips to help you with,  
>   
> 🤝 Gain more engagements  
> 💻 Code contributions  
> ⭐ Acknowledgment of work(like stars, maybe sponsors)  
> 🔥 Building followers on GitHub  
>   
> A Mega Thread  
>   
> 🧵 👇
> 
> — Tapas Adhikary (@tapasadhikary) [September 21, 2021](https://twitter.com/tapasadhikary/status/1440296182396309513?ref_src=twsrc%5Etfw)



### 学习如何Fork（分叉）一个仓库

Fork（分叉）是一个重要的概念。 大部分`开源` 项目不允许贡献者直接在仓库创建分支。取而代之的工作流如下：

-   fork（分叉）仓库。
-   clone（克隆）分叉后的仓库。
-   编写修改。
-   从UPSTREAM（上游）提取修改。
-   创建从分叉仓库到基础仓库的pull request。

在我和众多贡献者的工作经验中，大部分人觉得理解Fork（分叉）的概念有点困难。

你可以通过这个视频学习Fork的概念 [如何分叉一个Github仓库](https://www.youtube.com/watch?v=h8suY-Osn8Q)。同时你可以在这个[GitHub仓库](https://github.com/atapas/fork-me)练习分叉，这是为初学者设计来提升信心的仓库。

### 学习解决合并冲突（Merge Conflicts）

如果询问任意一位开发者对解决待合并冲突的看法，你得到的答案会是不那么简单。遇到得越多，自然就更熟练。了解解决合并冲突的过程，并且思考背后的逻辑和如何具体操作十分有必要。

这里有一份[解决合并冲突实用指南](https://www.freecodecamp.org/news/resolve-merge-conflicts-in-git-a-practical-guide/)，欢迎查阅。

### 学习Markdown语法

文档是任何开源项目的基础。`Readme.md`文件介绍了项目，如何设置、运行、部署等。

`Contributing.md`文件介绍如何给项目做贡献。

`CODE_OF_CONDUCT.md`文件介绍了对贡献者行为和参与的期望。当然，你可以基于自己的项目，编写任意 `.md`文件。

`md`代表着markdown（标记语言），是一种在Github上用于写文档的语法。了解基础的语法有助于你流畅地编写文档。

这里有一个开源项目提供了Markdown语法，可以复制和使用。欢迎查阅。

[

GitHub - atapas/markdown-cheatsheet: A single place for all the markdown syntaxes I have learned so far.

A single place for all the markdown syntaxes I have learned so far. - GitHub - atapas/markdown-cheatsheet: A single place for all the markdown syntaxes I have learned so far.

![favicon](https://github.githubassets.com/favicons/favicon.svg)atapasGitHub

![875262cc-d687-4a77-9967-57fbb5d07b7a](https://repository-images.githubusercontent.com/498971132/875262cc-d687-4a77-9967-57fbb5d07b7a)

](https://github.com/atapas/markdown-cheatsheet)



### 发展你的软技能

`开源`是许多开发者工作、学习和共同创建的天地。若想成为一位贡献者，仅仅具备技术技能不足以让你在此畅游。

让我们来看看开发者需要具备的一些软技能：

-   **耐心**: `耐心`是所有开发者必备的技能。当你在学习新知识，排查复杂问题的bug，和其他人一起工作、谈判，给予和吸收意见的时候都需要耐心。事情常常不如预期的节奏推进，所以你需要保持耐心面对现状。
-   **好奇心**: `好奇`使人进步。参与开源贡献将拥有无限可能。你需要对解决问题充满好奇心。好奇心不仅适用于解决技术难题，也适用于和他人一起工作。
-   **责任心**: 在开源生态中，你可能不会经常和人见面及交流。你必须对所有查询、任务、请求以及委任与你的事情`负责`。许多伟大的倡议往往因为人们缺乏责任心而不了了之。
-   **谦逊之心**: `谦虚`是成功的关键。有学识但不谦逊的人往往不适合团队协作。

## 如何开始参与开源项目贡献

让我们来看看如何开始参与开源项目贡献。下面的清单提供了一些链接和资源助你马上开启开源贡献之旅。

### GitHub Explore

GitHub Explore会向你展示你感兴趣的仓库，你可以给特定仓库设置提醒。

同时，你可以使用话题和趋势来寻找仓库。使用GitHub explore来寻找最合适你的技能、需求以及对你最有启发的项目。你可以通过这个地址查看： [https://github.com/explore/](https://github.com/explore/)


### 如何参与freeCodeCamp的开源项目

freeCodeCamp的这个仓库绝对是一个宝藏，它提供了许多资源和指示帮助你开启开源之旅。你可以通过这个地址查看：[https://github.com/freeCodeCamp/how-to-contribute-to-open-source](https://github.com/freeCodeCamp/how-to-contribute-to-open-source)

### Contributor Ninja

这个网站供你选择一系列编程语言：JavaScript、 HTML、 Rust、 Go等。你可以通过卡片选择对应的仓库，简单方便，是一个不错的开始。你可以通过这个地址查看： [https://contributor.ninja/](https://contributor.ninja/)

### First Contributions

这是一个巨大的清单，包含供你查找和过滤的开源项目。每个项目都有编写清晰的文档。你可以通过这个地址查看：[https://firstcontributions.github.io/](https://firstcontributions.github.io/)


### CodeTriage

CodeTriage是一个包含巨量开放issue项目的清单。它将issue和文档归类后分发给你。这个网站十分有用，你可以通过这个地址查看: [https://www.codetriage.com/](https://www.codetriage.com/)

### Up For Grabs

这里包含了各种各样的开源项目，你可以基于自己兴趣筛选。你可以通过这个地址查看:[https://up-for-grabs.net/#/](https://up-for-grabs.net/#/)

### First Timers Only

如果你之前从未参与开源贡献，并且跃跃欲试，可以考虑阅读这个网站。

在阅读的过程中，你或许会碰到我们讨论过的资源，这个网站能量满满。你可以通过这个地址查看: [https://www.firsttimersonly.com/](https://www.firsttimersonly.com/)


### Open Source Friday

你本周五或者下周五有什么打算？花点时间给你使用或者喜欢的软件做点贡献？推荐你查看这个网站并且注册。你可以通过这个地址查看:  [https://opensourcefriday.com/](https://opensourcefriday.com/)

希望这些资源对你来说有帮助。另外，你还可以查看这个Twitter thread以及相关的回应，你或许会有所收获。

> Looking forward to contributing to OPENSOURCE? Here are 8 RESOURCES to get you started immediately.  
>   
> A 🧵 👇
> 
> — Tapas Adhikary (@tapasadhikary) [September 8, 2021](https://twitter.com/tapasadhikary/status/1435590663035310086?ref_src=twsrc%5Etfw)

## 开源项目维护者

到目前为止我们讨论的都是开源项目的贡献者，如果止步于此这篇文章就不完整，所以我们也讲讲开源项目维护者相关的内容。

作为项目维护者，你应该遵循一些标准使得其他人能够理解并且参与贡献你的项目仓库。

-   提供项目明确的名字和介绍。你也可以添加项目相关的话题。
-   添加清晰的`Readme.md`文件介绍项目的目标、如何使用、设置等。如果说源码是项目的心脏，拿README文件就是项目的脸面。
-   建立社区档案。开源仓库维护者可以通过它来检查工作、了解哪里需要帮助。
-   建立编码行为准则。
-   创建贡献指南。
-   决定issue的模板。
-   创建Pull Request (PR)模板。
-   激活GitHub赞助。

[你可以通过阅读这篇文章](https://www.freecodecamp.org/news/increase-engagement-on-your-public-github-repositories/) 了解更多细节。

## 在结束之前...

就这么多！到这里，我们就到了本文的结尾。希望这篇文章对你有所启发，并且给了你足够的动力开始为开源做贡献。

在我们结束之前，我想再提几个开源项目和仓库：

-   [EddieHub](https://github.com/EddieHubCommunity)
-   [ReactPlay](https://github.com/reactplay)
-   [Hacktoberfest](https://github.com/topics/hacktoberfest)
-   [First Contributions](https://github.com/firstcontributions/first-contributions)
-   [The Hive](https://github.com/deleteman/the-hive)

这个列表可以继续增加，但让我停在这里。如果你喜欢阅读本文，或有任何疑问想要联系我，可以在以下地方找到我：

-   [Twitter](https://twitter.com/tapasadhikary)
-   [LinkedIn](https://www.linkedin.com/in/tapasadhikary/)
-   [GitHub](https://github.com/atapas)
-   [YouTube](https://youtube.com/tapasadhikary)
