> - 原文地址：[Git Pull Force – How to Overwrite Local Changes With Git](https://www.freecodecamp.org/news/git-pull-force-how-to-overwrite-local-changes-with-git/)
> - 原文作者：[Piotr Gaczkowski](https://www.freecodecamp.org/news/author/doomhammer/)
>
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Git Pull Force – How to Overwrite Local Changes With Git](https://cdn-media-2.freecodecamp.org/w1280/5f9c99a5740569d1a4ca20f0.jpg)

当你学会编码时，你迟早也会了解到版本控制系统。虽然在这个领域有许多相互竞争的工具，但其中一个是事实上的标准，几乎被业内所有人使用。它是如此受欢迎，以至于有些公司在其品牌宣传中使用了它的名字。当然，我们说的是Git。

虽然Git是一个强大的工具，但它的威力却隐藏得很深。要想真正熟练掌握Git，你需要了解一些基本概念。好消息是，一旦你学会了这些，你几乎不会再遇到无法摆脱的麻烦。

# 典型工作流程

在一个典型的 Git 工作流程中，你会用到一个本地仓库（local repository）、一个远程仓库（remote repository）和一个或多个分支（branches）。仓库存储了项目的所有信息，包括它的全部历史和所有分支。一个分支基本上是一个变化的集合，从一个空的项目到当前的状态间任何一步的变化。

克隆（cloning）一个版本库后，你在本地副本上工作并引入新的修改。在你推送（push）本地修改到远程版本库之前，你的所有工作都只能在你的机器上进行。

当你完成一个任务时，是时候与远程版本库同步了。你可以拉（pull）远程修改以保持项目的进展，你可以推送（push）本地修改以与他人分享你的工作。

# 本地修改

当你和你团队的其他成员在完全独立的文件上工作时，一切都很好。无论发生什么，你们都不会踩到对方的脚。

然而，有的时候，你和你的队友同时在同一个地方引入变化。而这通常是问题开始的地方。

你是否曾经执行过 `git pull`，却看到可怕的`error: Your local changes to the following files would be overwritten by merge:?`。迟早有一天，每个人都会遇到这个问题。

这里更令人困惑的是，你并不想合并任何东西，只是想拉取代码（pull），对吗？实际上，pull比你想象的要复杂一些。

# Git Pull究竟是如何工作的？

拉动不是一个单一的操作。它包括从远程服务器获取数据（fetch），然后将变化与本地版本库合并（merging）。如果你想的话，这两个操作可以手动执行:

```bash
git fetch
git merge origin/$CURRENT_BRANCH
```

`origin/$CURRENT_BRANCH` 是指:

- Git 将合并远程仓库中名为`origin`（你克隆的那个）的改动
- 添加到`$CURRENT_BRANCH'中的变化
- 这些将会在你的本地签出的分支中的改动

由于Git只在没有未提交的修改时执行合并，所以每次运行`git pull`时，如果有未提交的修改，就会给你带来麻烦。幸运的是，有一些方法可以让你从麻烦中全身而退

![image-167](https://www.freecodecamp.org/news/content/images/2021/04/image-167.png)

Photo by [Sneaky Elbow](https://unsplash.com/@sneakyelbow?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit) / [Unsplash](https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit)

# 不同的选择

当你有未提交的本地修改，但仍想从远程服务器拉出一个新版本时，你的用例通常属于以下情况之一:

- 你不关心本地的修改，想把它们覆盖掉,
- 你非常关心这些修改，想在远程修改之后再应用它们,
- 你想下载远程修改，但还没有应用它们

每种选择都需要一个不同的解决方案。

### 你不关心本地的修改

在这种情况下，你只是想放弃所有未提交的本地修改。也许你修改了一个文件来做实验，但你不再需要这个修改。你所关心的是与上游保持同步。

这意味着你在获取远程修改和合并它们之间又增加了一个步骤。这一步将重置分支到未修改的状态，从而使`git merge`发挥作用。

```bash
git fetch
git reset --hard HEAD
git merge origin/$CURRENT_BRANCH
```

如果你不想每次运行这个命令时都输入分支名，Git有一个很好的快捷方式，指向上游分支。`@{u}`。上游分支是指你推送和获取的远程仓库中的分支。

这就是上述命令的简写方式:

```bash
git fetch
git reset --hard HEAD
git merge '@{u}'
```

我们在例子中的`git merge` 中使用引号，是防止shell进行转义。

### 你非常关心这些修改

当你的未提交的修改对你很重要时，有两个选择。你可以提交它们，然后执行`git pull`，或者你可以把它们暂存（stash）起来。

暂存（stash）是指把这些修改暂时放在一边，以后再拿回来。更准确地说，`git stash`会创建一个在当前分支上不可见的提交，但仍然可以被 Git 访问。

要把上次暂存的修改带回来，你可以使用`git stash pop`命令。在成功应用暂存的修改后，这个命令也会删除暂存的提交，因为它不再需要了。

然后工作流程可以是这样的:

```bash
git fetch
git stash
git merge '@{u}'
git stash pop
```

默认情况下，修改会成为暂存。。如果你想解除缓存，请使用`git restore --staged`命令（需要使用比2.25.0更新的Git）。

### 你只是想下载远程更改

最后一种情况与之前的情况有些不同。比方说，你正处于一个非常混乱的重构过程中。丢失修改和暂存修改都不是一种选择。然而，你仍然想获得远程修改，以便对它们运行`git diff`。

你可能已经发现，下载远程修改根本不需要`git pull'！`git fetch'是一个很好的方法。`git fetch`就足够了。

有一点需要注意的是，默认情况下，`git fetch`只会给你带来当前分支的变化。要想获得所有分支的所有变化，请使用`git fetch --all`。如果你想清理一些不再存在于远程仓库中的分支，`git fetch --all --prune`将完成清理工作。

![image-166](https://www.freecodecamp.org/news/content/images/2021/04/image-166.png)

Photo by [Lenin Estrada](https://unsplash.com/@lenin33?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit) / [Unsplash](https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit)

# 提高自动化

你听说过 Git 配置吗？它是 Git 存储所有用户配置的文件。它驻留在你的主目录中：以`~/.gitconfig`或`~/.config/git/config`的形式。你可以编辑它来添加一些自定义别名，这些别名将被理解为Git命令。

例如，要有一个相当于`git diff --cached`的快捷方式（显示当前分支和暂存文件之间的差异），你要添加以下部分:

```bash
[alias]
  dc = diff --cached
```

之后，你可以在任何时候运行`git dc`来审查这些变化。这样一来，我们可以设置一些与之前用例相关的别名。

```bash
[alias]
  pull_force = !"git fetch --all; git reset --hard HEAD; git merge @{u}"
  pf = pull_force
  pull_stash = !"git fetch --all; git stash; git merge @{u}; git stash pop"
```

这样，运行`git pull_force`会覆盖本地修改，而`git pull_stash`会保留它们。

# git 强制拉取（Pull Force）

好奇的人可能已经发现有 "git pull --force "这样一个东西。然而，这与本文所介绍的是一个非常不同的野兽。

它可能听起来像是帮助我们覆盖本地修改的东西。相反，它可以让我们从一个远程分支获取变化到另一个本地分支。`git pull --force`只修改了获取部分的行为。因此它等同于`git fetch --force`。

和`git push`一样，`git fetch`允许我们指定我们要操作的本地和远程分支。`git fetch origin/feature-1:my-feature`将意味着远程仓库的`feature-1`分支的修改最终将在本地分支`my-feature`上可见。当这样的操作修改现有历史时，如果没有明确的`--force`参数，Git是不允许的。

就像`git push --force`允许覆盖远程分支一样，`git fetch --force`（或`git pull --force`）允许覆盖本地分支。它总是与作为参数提及的源和目标分支一起使用。使用`git --pull force`覆盖本地修改的另一种方法是`git pull --force "@{u}:HEAD"`。

# 结语

Git的世界是广阔的。本文只涵盖了仓库维护的其中一个方面：将远程修改纳入本地仓库。即使是这种日常场景，也需要我们对这个版本控制工具的内部机制进行更深入的研究。

学习实际的用例可以帮助你更好地理解Git在内部的工作原理。这反过来又会让你在遇到麻烦时，不断这样做，让你更有底气。
