> - 原文地址：[Git Reset Origin – How to Reset a Local Branch to Remote Tracking Branch](https://www.freecodecamp.org/news/git-reset-origin-how-to-reset-a-local-branch-to-remote-tracking-branch/)
> - 原文作者：[Dionysia Lemonaki](https://www.freecodecamp.org/news/author/dionysia/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Git Reset Origin – How to Reset a Local Branch to Remote Tracking Branch](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/tanner-van-dera-oaQ2mTeaP7o-unsplash.jpg)

Git 是一个免费和开源的版本控制系统。它是当今最流行的版本控制系统。

Git 可以跟踪一个项目在一段时间内的变化。这使得多个开发者可以在同一个项目上进行协作和并行工作，无论他们在世界何处。

它可以让开发者查看项目的历史，了解谁做了什么修改，以及为什么要做这些修改。另外，有了 Git，你可以在需要时恢复到旧版本的代码。

本质上，Git 确保开发人员都在同一个频道上，并且知道项目中发生了什么。

当在一个项目上工作时，你可能面临的挑战之一是试图同步你的工作。具体来说，同步本地和远程分支。

在这篇文章中，你将学习如何重置并准确匹配本地 Git 分支和远程分支。

以下是我们涵盖的内容:

1. [什么是 Git 中的分支?](#intro)
    1. [本地、远程和远程跟踪分支之间有什么区别？](#difference)
2. [如何将本地 Git 分支重置为远程分支？](#reset)
    1. [保存你的本地分支机构的当前状态](#save)
    2. [执行 `git checkout`](#checkout)
    3. [获取 origin](#fetch)
    4. [重置本地存储库](#reset-local)
    5. [清理任何未被追踪的变化](#clean)
3. [总结](#conclusion)

## 什么是 Git 中的分支？将 Git 分支简明扼要地介绍给初学者

分支（Branching ）是版本控制的一个核心方面，也是一个需要学习的重要概念。

因为有了分支，开发者能够以更灵活的方式进行协作。分支使日常开发过程更加顺畅和高效。

分支是管理不同版本代码的一种方式，它就像一个指向变化快照的指针。

当你第一次为你的项目创建一个 Git 仓库时，在同一时间，**主分支（main branch）**也被创建。

主分支是项目的主要和默认分支。它代表着你的代码的无错误、稳定和可用的版本，可以随时发布并与公众分享。它是主代码库。

但是，当你想给你的项目添加一个新的功能时，会发生什么？

在添加之前，你需要对它进行测试，确保它不会引入新的错误或干扰现有的代码。

需要有一种方法在不影响代码库的情况下处理新功能。

这就是分支派上用场的地方。

分支是实验和测试新代码的隔离空间，不会影响主分支的代码。

你可以创建一个新的分支，做你想做的改动。如果你对这些改动感到满意，你可以通过合并把它们添加到主分支中。如果不满意，可以删除该分支，而不影响项目中的主代码。

分支还允许开发者在同一时间处理不同的功能，而不会干扰彼此的工作。

要了解更多关于 Git 分支的信息，请看 [这段视频](https://www.youtube.com/watch?v=e2IbNHi4uCI) 解释它们是如何工作的，并收藏 [这篇文章](https://www.freecodecamp.org/news/how-to-use-branches-in-git/) 提供的关于如何使用它们的简明手册。

### 本地 VS 远程 VS 远程跟踪 Git 中的分支 - 有什么区别？

**本地分支**是只能在您的本地机器上访问的分支，并且是独立存在的。从这里，您可以添加文件并提交您所做的任何更改。 这些更改将保存在本地，并且仅对您可见并且在您的本地物理机上可用。

其他开发者将无法查看你的工作和你所做的修改。

你可以用以下命令创建一个名为 `my_branch` 的本地分支:

```bash
git branch my_branch
```

而要列出所有的本地分支，你可以使用`git branch`命令。

为了与同一项目的其他开发者合作，并让他们查看你所做的任何修改，你需要从本地分支推送修改到远程仓库。

这就引出了**远程分支（remote branches）**。

远程分支是指存在于远程仓库的一个分支。

远程仓库，也被称为远程，通常是指托管在互联网上某个地方的仓库，如 GitHub 服务器上。远程仓库的默认名称是 `origin`。

现在，一个**远程跟踪的分支（remote-tracking branch）**指的是对远程分支状态的本地引用。默认情况下，分支之间没有任何联系。也就是说，你可以告诉一个本地分支去跟踪（track）一个远程分支。

## How to Reset A Local Git Branch to Remote?

你可能一直在你的本地分支上工作，对一个项目做了各种修改，而你认为你所做的那些修改不再需要了。

你想删除它们，并将该分支重置为远程分支。

除此之外，另一个开发者可能已经做了修改并推送到了远程分支，所以你需要从远程仓库获取这些最新的修改，以获得最新的代码。

要做到这一点，你需要采取以下步骤:

- 保存本地分支的当前状态（可选）。
- 从远程获取（fetch）最新版本的代码。
- 重置本地分支。
- 清理文件（可选）。

### 保存你的本地分支的当前状态

在开始之前，你可能想在另一个分支中保存当前分支的状态。

当把本地的 Git 分支重设为远程分支时，你会失去在本地所做的修改。

这一步是可选的，你可以选择这样做，以防出错或将来想再次回到该代码。

要保存代码，请使用以下命令:

```bash
git commit -a -m "I am saving my work"
git branch backup_work
```

你的工作现在被保存到名为 `backup_work` 的分支。

### 执行 `git checkout`

通常情况下，会有一个本地远程跟踪分支，其名称与你想重置的远程分支相同，如`main`。

使用下面的命令来检查本地远程主分支:

```bash
git checkout main
```

如果你为这个分支使用不同的名字，请用你使用别的名字替换`main`。

### 获取 origin

要获取远程版本库，以及远程版本库中代码的最新状态和版本，请输入以下命令:

```bash
git fetch origin
```

`origin`是一个由 Git 创建的别名，用来指定远程仓库的远程 URL。通常情况下，Git 会自动设置远程仓库的名称为 `origin`。

如果你有一个不同的远程名称，请将`origin`替换为你正在使用的名称。

### 重置本地代码库

现在，用下面的命令将本地的`main`分支重置到远程版本库:

```bash
git reset --hard origin/main
```

### 清理任何未跟踪的更改

这个步骤是可选的。

在使用上述命令后，你可能最终会有一些未被追踪(untracked)的文件。

使用下面的命令来清理任何未被追踪的变化:

```bash
git clean -xdf
```

让我们把`-xdf` 参数分开来讲解，解释每一部分的作用。:

- 参数 `-x`  删除被忽略的文件
- 参数 `-d`  移除未跟踪的文件夹。
- 参数 `-f`  删除未跟踪的文件。

## 总结

就这样，你现在已经把你的本地分支重置为远程分支。

希望这篇文章对你有帮助。

要了解更多关于 Git 的信息，请查看以下免费资源:

- [Git 和 GitHub 初学者 - 快速入门](https://www.youtube.com/watch?v=RGOj5yH7evk)
- [专业人士的 Git 教程 - 掌握 Git 版本控制的工具和概念](https://www.youtube.com/watch?v=Uszj_k0DGsg)
- [高级 Git 教程 - 交互式 Rebase、Cherry-Picking、Reflog、子模块等](https://www.youtube.com/watch?v=qsTthZi23VE)

谢谢你的阅读，祝你编码愉快 :)
