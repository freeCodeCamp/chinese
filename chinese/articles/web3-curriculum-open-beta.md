> - 原文地址：[freeCodeCamp's Web3 Curriculum Open Beta – And How to Run it](https://www.freecodecamp.org/news/web3-curriculum-open-beta/)
> - 原文作者：[Tom Mondloch](https://www.freecodecamp.org/news/author/tom-m/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![freeCodeCamp's Web3 Curriculum Open Beta – And How to Run it](https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/thomas-habr-wprOCzLIEYI-unsplash.jpg)

在过去的 11 个月中，我们在 Web3 课程方面取得了相当大的进展。今天我很高兴地告诉大家，这个课程的部分内容现在已经进入公开测试阶段。你今天就可以试用它们。

在我们讨论细节之前，我想感谢 KaijuKingz 社区，他们为 freeCodeCamp 提供了捐款，使这些课程的开发成为可能。你可以 [在这里阅读更多关于他们给 freeCodeCamp 社区的礼物](https://www.freecodecamp.org/news/carbon-neutral-web3-curriculum-plans/)。

## 如何使用这些 Web3 课程

作为本课程的先决条件，我们建议首先学习全栈网站开发。你可以通过学习前 7 个 [freeCodeCamp 认证](https://www.freecodecamp.org/learn/) 来做好准备。

我们还建议你了解一些基本的区块链开发概念的知识。freeCodeCamp 有 [一个深入的 32 小时的课程，包括这个](https://www.freecodecamp.org/news/learn-blockchain-solidity-full-stack-javascript-development/)，由开发人员和讲师 Patrick Collins 教授制作。

我们还建议你学习一些 Rust，你可以使用 [freeCodeCamp 的 Rust 课程](https://www.freecodecamp.org/news/rust-in-replit/) 进行互动学习。

同样，这些先决条件只是我们的建议。你可以自由地选择，并在你认为合适的时候使用这些资源。

1. 建立一个视频游戏市场区块链
2. 构建一个筹款智能合约
3. 构建一个点对点网络
4. 为你的 dApp 建立一个 Web3 客户端软件包
5. 在 Rust 中建立一个智能合约

这些项目中的每一个都有自己的一套说明，其中有你需要完成的任务，以及确保你正确实施项目的测试。完成所有的任务并通过所有的测试来完成每个项目。

## 这 5 个项目只是一个开始

我们还在开发 10 个交互式 Web3 实践项目。

这些将引导您了解构建我们今天发布的这 5 个集成项目所需了解的所有 Web3 概念。

为什么我们要先发布困难的部分（5 个集成项目）？ 对于不介意观看 [Patrick 的课程](https://www.freecodecamp.org/news/learn-blockchain-solidity-full-stack-javascript-development/) 的 Web3 铁杆爱好者，请阅读官方文档 ，并参考许多其他免费的 Web3 教程。

任何人学习这些工具和概念，都很快地会变得更加顺畅。 但我们想首先为铁杆爱好者人群提供一些东西。

## Web3 课程正处于开放测试阶段。我们欢迎你的反馈和错误报告

请注意，这些都处于公开测试阶段——这意味着我们将根据您的反馈继续完善它们。

您可以通过加入我们新的 [Web3 Curriculum Discord 服务器](https://discord.gg/9KngwWzvd4) ，介绍自己，并帮助其他在构建这 5 个集成项目时遇到困难的人。

您还可以注册更新,将使构建这 5 个集成项目变得更加容易，您实际上是在做最困难、最模棱两可的部分 [在下面注册更新](#sign-up) 课程发布。

##  它将如何运作？

这些课程将使用 VS Code 和 [freeCodeCamp Courses extension](https://marketplace.visualstudio.com/items?itemName=freeCodeCamp.freecodecamp-courses) 在 docker 容器中运行。

### 这是一个示例

## 如何运行课程

按照以下步骤来运行这些课程

### 开发环境需要先行安装的

在你开始之前，确保你的电脑上安装了这些东西:

1. [Docker Engine](https://docs.docker.com/engine/)
2. [VS Code](https://code.visualstudio.com/download) 和 [Remote Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) 插件
3. Git

### 如何在 Docker 中运行课程

按照这些说明来 clone repo 并运行课程:

1. 打开终端并 clone [web3-curriculum](https://github.com/freeCodeCamp/web3-curriculum) repo，用:

```shell
git clone https://github.com/freeCodeCamp/web3-curriculum.git
```

2. 进入`web3-curriculum`目录，并在 VSCode 工作区打开它，用:

```shell
code .
```

3. 按`Ctrl / Cmd + Shift + P`打开命令输入界面，并运行`Remote-Containers: Rebuild Container and Reopen in Container`。VS Code 将建立容器(docker)来运行项目，第一次需要几分钟时间。
4. 一旦完成，再次按`Ctrl / Cmd + Shift + P`并运行 `freeCodeCamp: Run Course` 来启动课程。这也会花费一些时间。
5. 完成后，浏览器会自动打开。如果它是一个空白的白页，使用刷新按钮来更新它并看到课程主页。
6. 点击其中一个可用的项目，开始一个项目。
7. 按照说明完成项目。
8. 玩得开心!

如果你想切换项目，请点击顶部的 freeCodeCamp 图标，回到主页。

## 注册获取最新信息

填写 [这个谷歌表格](https://docs.google.com/forms/d/e/1FAIpQLSdaKRd34e36eGVA7ne1g1x3kLPjTbLF0YoNqLWH6L7P2AmpxA/viewform?usp=sf_link)，以便在新课程发布时收到更新信息。

## 别的课程

我们也在围绕 Solana 和 NEAR 协议创建课程。

查看[Solana 公告文章。](https://www.freecodecamp.org/news/solana-curriculum/)  
查看[NEAR 公告文章。](https://www.freecodecamp.org/news/near-curriculum/)

或者，查看我们展示所有课程的 [web3.freecodecamp.org](https://web3.freecodecamp.org/) 域名。
