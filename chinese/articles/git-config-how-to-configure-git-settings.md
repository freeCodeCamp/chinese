> - 原文地址：[git config – How to Configure Git Settings to Improve Your Development Workflow](https://www.freecodecamp.org/news/git-config-how-to-configure-git-settings/)
> - 原文作者：[Dillion Megida](https://www.freecodecamp.org/news/author/dillionmegida/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![git config – How to Configure Git Settings to Improve Your Development Workflow](https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/pexels-thisisengineering-3861958.jpg)

`git config` 是 Git 的一个强大命令。你可以使用 Git 配置文件来定制 Git 的工作方式。

这个文件存在于初始化 Git 的项目目录（`/project/.git/config`）或用户根目录（`~/.gitconfig`）。如果没有指定配置，Git 会使用其默认设置。

在这篇文章中，你会学到一些有用的 Git 配置，可以改善你的开发工作流程。这里分享的技巧是对我有用的东西。还有很多你可以在阅读后尝试。

# Git 配置技巧

下面是一些全局性的 Git 配置技巧。

## 1\. 为 Git 选择默认的编辑器

当你试图在 Git 中进行提交时，它默认会打开一个 `vi` 编辑器，看起来像这样:

![image-18](https://www.freecodecamp.org/news/content/images/2022/03/image-18.png)

这个文本编辑器可能很难使用，如果你像我一样，你可能想用你喜欢的编辑器来写提交。在你的 `~/.gitconfig` 文件中，添加以下内容:

```txt
[core]
    editor = code --wait
```

or use this shell command:

```txt
git config --global core.editor "code --wait"
```

这个配置告诉 Git，对于提交和标签等操作，我想使用我的 [VSCode 编辑器](https://code.visualstudio.com/)。

对于其他类型的编辑器，请参考 [Atlassian](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-config) 的这个图片:

![image-19](https://www.freecodecamp.org/news/content/images/2022/03/image-19.png)

来自 [Atlassian](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-config) 的 git 的文本编辑器配置。

## 2\. fetch 过程中的 Git 修剪（pruning ）

你知道 `prune` 命令在 `fetch` 过程中的作用吗？如果不知道，你可能想先看看这篇文章，它涵盖了如何 [用 prune git 选项和分支删除命令删除过时的本地分支](https://dillionmegida.com/p/delete-outdated-branches/#git-fetch---prune)。

TLDR: 在 `fetch` 过程中修剪是一种清理方法，当你进行 `git fetch --prune` 时，会删除你的 `.git` 目录中过时的远程引用。

正如我在刚才的文章中解释的那样，你可以自动执行这个操作，而不必总是添加`--prune`选项。要做到这一点，在`~/.gitconfig`中添加以下内容:

```txt
[fetch]
    prune = true
```

或使用以下命令:

```shell
git config --global fetch.prune true
```

有了这个，每当你进行 `git fetch` 时，就会发生修剪(pruning)。

## 3\. Git 别名

在 Git 配置文件中，你可以为那些你时常输入的长命令添加别名。例如，commits，stashing，等等。

比方说，你想添加一个别名，用于添加一个空的提交。在这种情况下，你可以在配置文件中添加以下内容:

```txt
[alias]
    empty = "git commit --allow-empty"
```

或在终端:

```shell
git config --global alias.empty "git commit --allow-empty"
```

你可以像这样使用该命令:

```shell
git empty "Empty commit"
```

你也可以在 Git 之外添加其他 shell 命令作为别名。例如，删除一个已经合并到远程的本地分支的别名:

```txt
[alias]
    delete-local-merged = "!git fetch && git branch --merged | egrep -v 'master' | xargs git branch -d"
```

**！** 告诉 Git 把它作为一个 shell 命令运行，而不是 `git` 命令。

对于别名，我们做一个 git fetch。然后我们得到合并后的分支，把它作为 egrep 命令的输入，过滤掉 `master` 分支，然后删除这些分支。

## 4\. 设置默认分支

在初始化版本库时（`git init`），默认的分支是 `master`。今天，一些开发者希望是 `main` 或其他完全不同的东西。

你不必创建一个名为 `main` 的新分支，删除 `master` 分支，并使用 `main` 作为默认分支。这是个漫长的过程。在 Git 配置文件中，你可以在 Git 初始化时设置一个默认分支。下面是方法:

```txt
[init]
    defaultBranch = main (或任何你想要的名字)
```

这样，`git init`会创建一个 "main "分支作为默认。

## 5\. 默认显示简短状态

默认情况下，`git status` 命令显示你的项目中的变化，并有很长的细节。它的格式是这样的:

```bash
On branch [branch name]
Your branch is up to date with ...

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in the working directory)
    modified: ...
    
Untracked files:
  (use "git add <file>..." to include in what will be committed)
    ...
    
no changes added to commit (use "git add" and/or "git commit -a")
```

这是一个有指导意义的输出，但有时你只需要一个版本库状态的总结。在 `git status` 中添加 `--short` 选项，可以得到一个简短的格式化输出。结果会是这样的:

```bash
M [file]
?? [file]
```

"M" 表示已修改, "??" 表示未跟踪。我们可以通过使用以下配置使其成为默认的状态视图来进一步改进 `git status` 的输出:

```txt
[status]
    short = true
```

# 总结

在这份并非详尽的清单中，我们看到了五种通过自定义 Git 的默认工作方式来改善我们的开发工作流程的方法。

你可以在 [git-config 文档](https://git-scm.com/docs/git-config) 中找到更多关于所有 Git 配置选项的信息（从分支到拉取，再到取回，还有更多）。
