> -  原文地址：[How to Contribute to Open Source – a Guide for Technical Writers](https://www.freecodecamp.org/news/how-to-contribute-to-open-source-for-technical-writers/)
> -  原文作者：[Valentine Gatwiri](https://www.freecodecamp.org/news/author/gatwirival/)
> -  译者：Narcissus91
> -  校对者：

![技术文档作者如何参与开源贡献](https://www.freecodecamp.org/news/content/images/size/w2000/2022/10/pexels-william-fortunato-6393024.jpg)

可能想到开源贡献，你就会觉得畏惧，尤其是如果你之前从未参与过开源贡献，或者你习惯的是写文档而不是写代码。

本指南将帮助技术文档作者开启开源项目贡献之旅，并概述在开始贡献时，你可能会遇到的常见误区。

另外，本指南会重点介绍一些参与开源贡献的好处，也会提供一些便于技术文档作者开始参与开源贡献的资源。

## 你能学到什么

本文内容包括：技术文档作者参与开源贡献的方式、好处、一些潜在的坏处，以及一些新手入门资源。

## 什么是开源？

开源是一种软件开发与发布的协作方式。世界各地的人们通过为软件添加功能、修复bug（错误）、回答问题、翻译文本或写作教程来做开源贡献。

## 为什么要贡献？

为开源软件做贡献是技术文档作者和其他知识工作者回馈社会并为社会带来改变的最佳方式之一。

你可以帮忙改进你每天都在使用的软件，或者你可以从开源界前辈那儿学到东西。此外，参与贡献也是一种结识志趣相投的朋友的好途径。当你所做的贡献被人赞赏时，你会觉得自己是社区的一部分。

你可能会想自己应该什么时候参与贡献呢？嗯，如果你是开源新手，按你自己的节奏参与贡献就好啦——不要担心过早地尝试做太多。你会找到自己觉得舒适的节奏。

为开源做贡献不仅可以增加你的技能，还可以发展你的社区人脉，甚至创造自由工作的机会。

要成为一名活跃的贡献者需要花一些时间积累必要的知识和技能（尤其是因为通常文档写作所需要的技能是不同于编程的），但是，这些时间是值得投入的。

## 参与贡献会面临的挑战

技术文档作者在开始参与开源项目贡献时，会面临一些挑战。最常见的一项挑战就是不确定如何最大化做出贡献，特别是如果你还对项目一无所知。

你可能也不清楚你的任务应该做到什么程度或者这个任务对贡献者有什么期望。对于这个问题，有几个解决办法：你可以阅读 `README` 文件和/或文档，看看里面有没有贡献指南。你也可以与项目团队成员联系，并寻求帮助。

## 如何参与开源项目

首先，在[GitHub](https://github.com/)上找到你想要参与贡献的一个项目。你可以[阅读这份教程](https://www.freecodecamp.org/news/github-search-tips/) 查看如何在GitHub上进行搜索并找到项目。

然后，打开README文件，确保你理解里面提到的说明。

接着，点击屏幕右上角的Fork按钮，将这个repo（仓库）fork（复制）下来。

![x3IyU70meecZi1qYS4_CCZW0cOZqpcTdVfKjG3_TpM1TJj_tH15FhNaKmrAL2bl8fTU7fcUAditd6AzqJbJItmCavBxQObpD2bAJCRlYds-sX-Z3iyA4b_pajXsOnAJM1_8tbPdbyOGNrXyxCfu1Qk-x3AyDrtDrFxbbxlmIaSSwaj3kYX87ELMUSQ](https://lh5.googleusercontent.com/x3IyU70meecZi1qYS4_CCZW0cOZqpcTdVfKjG3_TpM1TJj_tH15FhNaKmrAL2bl8fTU7fcUAditd6AzqJbJItmCavBxQObpD2bAJCRlYds-sX-Z3iyA4b_pajXsOnAJM1_8tbPdbyOGNrXyxCfu1Qk-x3AyDrtDrFxbbxlmIaSSwaj3kYX87ELMUSQ)

使用下列命令将fork（复制）的仓库复制到你的本地电脑：

```bash
git clone <链接到仓库>
```

当你点击代码下拉菜单时，会看到仓库链接。

复制好后，打开包含你的新fork的目录，开始添加你的贡献。

完成后，使用下列说明将你的修改推送到GitHub：

```bash
git status //显示哪些修改已经分阶段完成
git add . // 在复制的仓库里添加更改
git commit -m "changes" //对复制的仓库进行一次提交
git branch -M changes //创建一个新的分支
git push -u origin changes //推送修改
```

将修改推送到复制的仓库后，GitHub页面会弹出提示创建一个Pull Request（PR，拉取请求）。创建PR，等待项目维护者将你复制的仓库合并到主仓库。

如果你不久前叉入了该项目，**请确保将上游的修改纳入你的本地仓库** 。

如果你遇到一个大文件，并且还没有安装`git-lfs`的话，就用这条命令`brew install git-lfs`去安装一个git-lsf。

Git LFS（Large File Storage大文件存储）是由Atlassian、GitHub以及其他开源贡献者开发的Git扩展。它通过缓慢下载大文件的相关版本来减少文件在仓库中的影响。

你也可以根据这个[文档](https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage) 安装`git-lfs`。

### 开源贡献的最佳实践

1.  确定一个你可以提供帮助的领域，然后在GitHub上找到相关的项目。
2.  阅读任何可能与你感兴趣的项目或程序相似的文档。这样你就会更了解贡献会涉及什么以及其他人做了什么贡献。
3.  搜索标注了good first issue（第一个好问题）的问题，并通读这些问题——这些问题通常是很容易解决的。
4.  遵循项目的贡献指南，准备好你的代码。
5.  写一个详细的PR，给出你的解决方案，并解释为什么你的方案可以解决当前问题。如果有必要，附上相关资源的链接。
6.  提交你的PR以待审阅。项目团队会讨论是否将你的PR合入仓库，并将结果更新给你。
7.  如果他们决定不接受你的PR，你就询问如何能解决他们的顾虑，这样他们之后就会重新考虑接受PR。
8.  如果他们确实接受了你的PR请求，记得表示感谢！
9.  继续寻找要解决的新问题，并在此过程中分享你的进步！

## 我能做什么类型的贡献？

你可以通过多种方式为项目做贡献，包括为bug修复或功能新增提PR、编写软件使用文档、改进已有文档、翻译文档和修改拼写错误。

在深入参与贡献某个项目之前，你应该首先挑选一个你感兴趣的项目，并通读该项目的文档。

参与开源项目的文档写作，有助于将自己打造成行业专家并为将来获得自由职业机会做准备。

在为开源项目写文档时，技术文档作者始终应牢记的一点是，文档读者主要是开发人员。这意味着相较于其他类型的文档，读者需要在技术文档中看到更多的技术细节。

## 去哪里找开源项目？

有很多地方都能找到开源项目。GitHub是最受欢迎的地方，但在BitBucket、Gitlab和其它网站也有开源项目的仓库。

如果你有一个想法，但还没有对应的开源项目，可以先把你的想法和计划放在一个`README`文件中。如果你不确定如何开始为一个已有的项目做贡献，那么可以查看该项目的文档或通读一些PR，然后提交自己的PR。

## **示例项目**

-   [HTML5 Boilerplate项目](https://github.com/h5bp/html5-boilerplate) 是一个受Web网页开发者欢迎的开源项目。项目支持通过HTML、CSS和Javascript代码来创建网站或网页应用。
-   [Bootstrap框架](https://github.com/twbs) 也是一个开源项目，是一个帮助开发者快速创建响应式网站的工具集合。
-   [Jekyll](https://jekyllrb.com/docs/contributing/) 是一个用Ruby编写的静态网站生成器，为个人博客而设计。
-   [React.js文档](https://github.com/reactjs/reactjs.org) 上有官方的React.js使用文档。
-   [GitHub pages](https://github.com/github/docs) 包含所有你需要知道的GitHub信息。
-   [Galaxy项目（培训资料）](https://github.com/galaxyproject/training-material) 是Galaxy项目的一个培训资料集。该项目是一个基于网页的开放平台，用于数据密集型的计算研究，其范围超出了生物科学。
-   [CNCF（云原生计算基金会）](https://github.com/cncf) CNCF是开源的云原生计算，托管Kubernetes和Prometheus等项目，使云原生无处不在且可持续。

你还可以看看[谷歌文档之季](https://developers.google.com/season-of-docs)，它帮助开源项目优化文档，同时让技术熟练的技术文档作者获得开源方面的经验。

不同的贡献方式有很多，你总能找到适合自己的。

## **总结**

对技术文档作者和内容创作者来说，参与开源贡献是一种很好的与世界分享知识的方式。

参与开源贡献的方式有很多，总之，人人皆可贡献。
