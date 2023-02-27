> - 原文地址：[What is a Remote Branch in Git? How to Check out Remote Branches from GitHub](https://www.freecodecamp.org/news/remote-branches-in-git/)
> - 原文作者：[Dionysia Lemonaki](https://www.freecodecamp.org/news/author/dionysia/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![What is a Remote Branch in Git? How to Check out Remote Branches from GitHub](https://www.freecodecamp.org/news/content/images/size/w2000/2023/02/pexels-antonio-borriello-1297611.jpg)

Git 是一个免费的开源工具。具体来说，它是当今软件开发中最流行的版本控制系统。

Git 允许你跟踪和维护一个编程项目的不同版本。

有了 Git，开发者和技术团队可以在一个项目上进行协作和工作。

多个开发者可以同时在项目的相同或不同部分工作，而不互相干扰，提高生产力和效率。

由于 Git 提供的内置功能和工具，开发者可以同时进行协作，并在他们的环境中工作，其中之一就是分支（branch）。

## 什么是 Git 中的分支？

Git 中的分支是一个独立的、安全的、与主项目相分离的开发区域。

分支允许开发人员开发和测试新的功能，修复错误，实验新的想法，并减少破坏代码库中稳定代码的风险。

### 本地分支与远程分支--有什么区别？

在 Git 中，有两种类型的分支：本地分支(local branch)和远程分支(remote branch)。

一个本地分支只存在于你的本地机器上。

所有你引入并提交到本地仓库的修改都只存储在你的本地系统上。它们提供了一种实验、修复错误和开发新功能而不影响主代码库的方式。

要创建一个本地分支，可以使用 `git branch <branch-name>` 命令，其中 `branch-name` 是新分支的名称。

例如，如果你想创建一个名为 "test "的新分支，你可以使用以下命令:

```bash
git branch test
```

你可以使用`git checkout`命令切换到新的分支，并创建你想要的修改:

```bash
git checkout test
```

要查看本地分支的列表，请使用`git branch`命令。

说了这么多，你不能在本地分支上与其他开发者协作。这时，远程分支就派上用场了。

远程分支是开发者在同一个项目上同时协作的方式。

远程分支存在于一个远程仓库中（通常称为 `origin`），托管在 [GitHub](https://github.com/) 等平台上。

当你向本地分支提交了修改，你可以使用`git push <remote> <local>`语法将本地分支推送到远程仓库（`origin`）。然后，其他人就可以看到你的代码了。

```bash
git push -u origin test
```

Git 会在远程仓库中创建一个本地分支的副本。这个副本被称为远程分支。

要查看项目中所有远程分支的列表，请使用`git branch -r`命令。

## 如何在 Git 中签出一个远程分支

你可能需要访问另一个开发者创建的分支，以进行审查或协作。

这个分支不在你的本地系统上,它是存储在远程仓库上的一个远程分支。

问题是，Git 并不自动允许你在别人的分支上工作。

相反，你需要创建一个本地副本，映射你要处理的远程分支，然后在本地进行修改。

让我们看看下面几节中你需要采取的步骤。

### 如何获取所有远程分支

首先，你需要使用`git fetch`命令获取必要的分支数据，以及远程存储库的名称:

```bash
git fetch origin
```

这个命令将从远程仓库下载最新的修改（包括远程分支）到你的本地机器。

如果你有一个不同的远程名称，用它替换`origin`。

### 如何查看可检出的分支

接下来，要查看可供签出的分支列表，请使用以下命令:

```bash
git branch -r
```

`-r`（是 remote 的缩写）选项告诉 Git 列出远程分支。

该命令的输出将是一个所有可供签出的远程分支的列表。你会看到分支名称前有`remotes/origin`的前缀。

### 如何检出远程分支的情况

你不能直接对你感兴趣的远程分支进行修改，你需要一个本地副本。

你需要检出(checkout)你感兴趣的分支，这样你就可以开始在本地进行你想做的修改。

要做到这一点，使用`git checkout`命令，加上`b`（代表分支）选项。语法看起来与此类似。:

```bash
git checkout -b <new-local-branch-name> origin/<remote-branch-name>
```

因此，如果你想获得远程分支`new-feature`的副本，你应该做以下事情:

```bash
git checkout -b new-feature origin/new-feature
```

上面的命令在你的机器上创建了一个新的本地副本，它基于并连接到远程分支。

它创建了一个名为 "new-feature "的新分支，检出(checkout)该分支，并将 `origin/new-feature` 中的修改拉到新分支中。

现在你可以向`origin/new-feature`推送新的提交。

### 谢谢你的阅读!

现在你知道如何在 Git 中检出和使用远程分支了。愉快地去编程!
