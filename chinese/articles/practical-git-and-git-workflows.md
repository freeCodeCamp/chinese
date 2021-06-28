> -  原文地址：[How to Use Git and Git Workflows – a Practical Guide](https://www.freecodecamp.org/news/practical-git-and-git-workflows/)
> -  原文作者：[John MosesmanJohn Mosesman](https://www.freecodecamp.org/news/author/johnmosesman/)
> -  译者：frankflx
> -  校对者：

![How to Use Git and Git Workflows – a Practical Guide](https://images.unsplash.com/photo-1543674892-7d64d45df18b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDIxfHxwaXBlc3xlbnwwfHx8fDE2MTcyMjM0Mzc&ixlib=rb-1.2.1&q=80&w=2000)

每个人都说你应该学习 Git——你确实应该——但是说实话：Git 有点难。

甚至在我近10年的软件开发生涯后，我还在学习 Git 的基本原理和如何更有效地使用 Git。

就在不久前我意识到我对一个已经使用了无数次的关键命令[有最基本的误解](https://twitter.com/johnmosesman/status/1306255666718310401)。

就像编程的其他很多领域一样，我相信最好的学习方法就是开始 _实践。_

只要开始使用这个工具，就会有成效——随着时间的推移，基本原理和边缘案例终会得到解决的。

所以在这个教程中，这正是我们要做的。我们会通过一些系列的实例来全面了解如何使用 Git 以及与队友协作。

在这个过程中，我们会用简单的命令并且解释它们的基本概念，因为它们有用——但是只限于有助于理解的程度。

Git 的内容肯定比这里介绍的多得多，但这些都是你在长期使用过程中会学到东西。

我也不会使用树状图（像下面这个）因为它们会把我搞糊涂，而且作为一名软件开发者，我从来不需要像这样来理解 Git。

![](https://www.freecodecamp.org/news/content/images/2021/03/hero.svg)

https://www.atlassian.com/git/tutorials/using-branches/git-checkout

这些是我们要涉及到的内容。不要被这份清单吓到，我们会一步一步的进行。

-   [安装 git 并建立一个 GitHub 帐户](#how-to-install-git-and-set-up-a-github-account)
-   [如何在 GitHub 上创建一个新的仓库](#how-to-create-a-new-repository-in-github)
-   [克隆仓库](#how-to-clone-a-git-repository)
-   [Git 分支](#git-branches)
-   [如何查看一个 Git 项目的状态](#how-to-check-the-status-of-a-git-project)
-   [如何做出我们的第一个 commit](#how-to-make-our-first-commit)
-   [如何将我们的第一个 commit 推送到 GitHub](#how-to-push-up-our-first-commit-to-github)
-   [如何在 Git 中添加另一个 commit](#how-to-add-another-commit-in-git)
-   [如何在 Git 中 stage change](#how-to-stage-changes-in-git)
-   [如何查看 Git diff](#how-to-view-the-git-diff)
-   [如何在 Git 中与他人协作](#how-to-collaborate-with-others-in-git)
-   [Git 中的功能分支](#feature-branches-in-git)
-   [用于协作的 Git 工作流](#git-workflows-for-collaboration)
-   [如何在 Git 中合并分支](#how-to-merge-a-branch-in-git)
-   [拉取请求工作流](#pull-request-workflow)
-   [如何使本地保持更新](#how-to-bring-our-local-up-to-date)
-   [如何获取远程数据](#how-to-retrieve-remote-data)
-   [如何修复 Git 中的合并冲突](#how-to-fix-merge-conflicts-in-git)
-   [回顾：如何启动一个新功能的工作流](#review-how-to-start-a-new-feature-workflow)
-   [总结](#conclusion)

说了这么多，我鼓励你在自己的机器上跟着例子一起进行——让我们开始吧！

## 如何安装 Git 并建立一个 GitHub 账号

首先，在启动运行前我们需要处理一些无聊的事情。

如果你已经安装了 Git，注册了 GitHub 账户（或者使用任何其他的服务商，像是 GitLab 或者 Bitbucket），并且已经设置了SSH密匙的话，可以跳过这个章节。

否则，你将首先需要 [安装 Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)。

其次，在本教程里我们会使用 GitHub，所以注册一个 [GitHub 帐户](https://github.com/join)。

GitHub 账户注册完成后，你将会需要创建一个 SSH 密匙以便将你的代码从本地推送到 GitHub （在推送代码时这个密匙可以向 GitHub 证明你是“你”）。

这并不难——只要 [按照这里的步骤就可以了](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)。

## 如何在 GitHub 里创建一个新的仓库

下一步我们会在 GitHub 里创建一个新的仓库。

这很简单。只需要点击你的主页上的”New”仓库按钮。

![](https://www.freecodecamp.org/news/content/images/2021/04/Screen-Shot-2021-03-31-at-7.30.33-PM.png)

创建一个新仓库

接下来,为仓库选择一个名字，以及你希望仓库是公开的还是私有的。如果你愿意，你可以选择添加一个 README 文件，然后点击 "Create repository"。

![](https://www.freecodecamp.org/news/content/images/2021/04/Screen-Shot-2021-03-31-at-7.29.07-PM.png)

设置新仓库

我把我的仓库命名为 [practical-git-tutorial](https://github.com/johnmosesman/practical-git-tutorial)。这个仓库里已经有了这个教程所有的完成步骤，如果你想的话，可以把它作为参考。

## 如何克隆一个 Git 仓库

首先，我们将“克隆”这个仓库。克隆一个仓库意味着从源头(在这里就是指 GitHub)上下载所有项目的代码和元数据。

要克隆一个仓库，我们使用 `git clone <URL>`。

我使用了我刚刚创建的仓库的URL，但是你应该使用你自己仓库的URL：

```
$ git clone git@github.com:johnmosesman/practical-git-tutorial.git
Cloning into 'practical-git-tutorial'...
remote: Enumerating objects: 6, done.
remote: Counting objects: 100% (6/6), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 6 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (6/6), done.
```

> **注意：** 在你终端运行的命令将以 `$` 作为前缀。

我们很快会详细介绍 `git clone` 的作用，但现在但现在只需知道它下载项目并将其放在你当前工作目录的一个文件夹中。

接下来，让我们用 `cd` 切换到新的目录：

```
$ cd practical-git-tutorial/
/practical-git-tutorial (main)$
```

我们已经切换到了这个文件夹（和其他文件夹一样），你的终端可能会在目录名旁边显示一些东西： `(main)` 。

## Git 分支

这个 `(main)` 意味着我们现在位于一个叫做 `main` 的 **分支** 上。你可以把一个 Git 分支看作是项目 _在某一特定时间点_ 的副本，可以独立于其他分支进行修改。

例如，如果我们用 Git 来跟踪一本书的写作，我们可能会有这样的分支：

-   `main` 分支
-   `table-of-contents` 分支
-   `chapter-1` 分支
-   `chapter-2` 分支
-   等等。

`main` 分支是，嗯，“主”分支——我们将把书中的所有内容合并成一本最终完成的书的地方。

我们可以创建其他分支来分离和跟踪特定的工作。

如果我在写第一章，而你在写第二章，我们可以创建两个不同的分支， `chapter-1` 和 `chapter-2` ——实际上就是这本书当前状态的两个不同副本。

这样我们就可以在各自的章节上工作，而互不影响，也不会改动到对方的内容——我们都有自己的工作副本，彼此是分开的。

当我们中的任何一个人完成了自己的章节，我们就可以把我章节分支的内容加回到 `main` 分支中。当我们两个都完成后， `main` 分支就会同时包含第一章和第二章。

然而，有些时候，你 _会_ 覆盖或更改别人相同的内容，我们将不得不想办法解决这些分歧——我们很快就会看到。

> **注意：** 根据项目的不同 [你可能会看到一个分支](https://github.com/github/renaming) 被命名为 `master` 而不是 `main` 。它没有任何功能上的区别，只需要根据你的项目中的内容输入 `master` 或 `main` 即可。

## 如何查看一个 Git 项目的状态

我们经常会做的一件事是检查我们项目的状态。已经做了哪些改动，我们想用他们做什么？

查看项目的状态，我们使用 `git status` ：

```
(main)$ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

这个命令的结果中有一些东西，让我们把它们分解一下。

`git status` 告诉我们的第一件事是我们在 `main` 分支上：

```
 On branch main
```

第二句话比较有意思：

```
Your branch is up to date with 'origin/main'.
```

Git 告诉我们，我们的分支是与 `origin/main` “保持更新的”。

`origin` 是一个新的概念，被称为 **远程**。远程是一个不同于你本地机器的“远程源”。

在这个项目中，我们有自己的本地副本，但我们也可以添加可以协作的远程源。毕竟，这是 Git 最大的好处之一：与他人的可控协作。

继续我们写书的例子，如果我在我的机器上写第一章，你在你的机器上写第二章，我们都可以把对方的电脑添加为“远程”并发送和接受对方的修改。

在实践中，编程社区广泛决定最好有一个代码的 **可信单一数据源（SSOT）**。关于代码库的当前状态有一个地方总是“正确”的。按照惯例，我们称这个地方为 **源（origin）**。

在这种情况下，GitHub 是我们的“源（origin）”。

事实上，我们可以通过运行 `git remote -v` (`-v` 代表 "verbose")命令看到这一点：

```
(main)$ git remote -v
origin  git@github.com:johnmosesman/practical-git-tutorial.git (fetch)
origin  git@github.com:johnmosesman/practical-git-tutorial.git (push)
```

这个命令列出我们所有的远程（remote）。从结果我们们可以看到我们有一个远程叫做 `origin` ，这个远程的 Git URL 指向我们在 Github.com 上的仓库。这个远程是在我们运行 `git clone` 时自动设置的。

回到 `git status` 的结果中的这句话：

`Your branch is up to date with 'origin/main'.`

当我们询问项目状态是， Git 告诉我们，我们本地的 `main` 分支与源（即 GitHub ）的 `main` 分支是保持更新的。

事实上， `git clone` 自动为我们在本地创建了一个 `main` 分支，因为它看到我们克隆的源有一个叫 `main` 的分支作为主分支。

基本上，我们本地机器上没有与 GitHub 不同的变化，反之亦然——我们的本地 `main` 分支和 GitHub 上的 `main` 分支是相同的。

随着我们进行修改，我们会看到这条信息的变化，来反映我们本地仓库和源 (GitHub) 仓库的差异。

`git status` 的最后一条信息是关于本地项目的状态：

```
nothing to commit, working tree clean
```

当我们进行修改时会在这里进行更详细的说明，但这个消息基本上是说我们没有做任何事——所以没有变化要报告。

总结一下 `git status` 的结果：

-   我们在 `main` 分支上
-   我们的本地 `main` 分支与 `origin` 的（ GitHub 的） `main` 分支相同
-   我们还没有对该项目做出任何修改

## 如何做出我们的第一次 commit

现在我们了解了我们项目的初始状态，让我们做一些修改并看看结果。

继续我们书本的比喻，让我们创建一个新的文件，命名为 `chapter-1.txt` 并在其中插入一个句子。

（你可以使用下面的终端命令，或者在任何文本编辑器中创建和编辑该文件——这没关系。）

```
(main)$ touch chapter-1.txt
(main)$ echo "Chapter 1 - The Beginning" >> chapter-1.txt
(main)$ cat chapter-1.txt
Chapter 1 - The Beginning
```

上面的命令用 `touch` 创建了一个名为 `chapter-1.txt` 的新文件，用 `echo` 和 `>>` 操作符插入句子“第一章——开端”，并且为了检查我们的工作，用 `cat` 现实文件内容。

结果是一个里面有一句话的简单文本文件。

让我们再次运行 `git status` ，看看它的输出有什么不同：

```
(main)$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        chapter-1.txt

nothing added to commit but untracked files present (use "git add" to track)
```

在这里我们看到一个与之前不同的输出结果。我们看到一个描述“未跟踪文件”的部分，我们的新文件 `chapter-1.txt` 被列在那里。

在 Git 开始追踪一个文件的变化之前，我们首先需要告诉 Git 去追踪它——正如消息底部所显示的——我们可以用 `git add` 来实现：

```
(main)$ git add chapter-1.txt
```

（除了为 `git add` 制定文件名外，你可以使用（`.`）来添加目录中的所有修改）。

让我们再检查一下状态：

```
(main)$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   chapter-1.txt

john:~/code/practical-git-tutorial (main)$
```

信息又变了。它现在说我们有一些修改，已经准备好“提交（ committed ）”。

Git 中的 **commit** 是一个被保存的工作块，但它与你在文本编辑器中保存一个文本文件时的保存有点不同。

你可以把 commit想成是一个 _完成的想法活工作单位（ unit of work )。_

例如，如果我们继续写书中第一章的内容，它可能看起来是这样的：

-   写下这一章的标题。 _\*在我们的编辑器中点击保存\*_
-   写下这一章的第一段。 _\*在我们的编辑器中点击保存\*_
-   写下这一章的第二段。 _\*再次点击保存\*_
-   写下这一章的最后一段。 _\*再次点击保存\*_

在这里，这个文件我们已经“保存”了四次，但在这四次保存结束后，我们现在又了这一章的第一稿，这一稿就是一个“工作单位( unit of work )”。

我们想把这个文件保存在我们的电脑上，但是我们也想表明这是一个已经完成的工作单位——即使它只是一个草稿。这是值得被保留的一大块工作。将来我们可能会想重温它、再次编辑它、或者把这个草稿合并到整本书的当前草稿中。

为此，我们创建一个新的 commit 来表示这个里程碑。每个 commit 有自己独特的标识符，而且 commits 的顺序也被保留下来。

要 commit 我们的修改，必须先用  `git add` 把它们添加到 **暂存区（ staging area ）** 。

（我们很快会讨论更多关于 **暂存区（ staging area ）** 的问题。）

接下来，我们需要 `git commit` 来最终完成提交。

最佳实践是提供一个详细的信息，说明你做了 _那些修改_ ——更重要的是——你 _为什么_ 要提交（ commit ）这些修改。

一旦提交（ commit ）历史达到几百或几千条，如果没有一个好的提交信息（ commit message ）就几乎不可能理解 _为什么_ 会有这些修改。Git 会显示哪些文件有修改，以及这些修改是什么，但这些 _修改的意义_ 要靠我们自己提供。

让我们来提交我们制作的新文件并用 `-m` 或 "message" 标志来附上提交信息：

```
(main)$ git commit -m "New chapter 1 file with chapter heading"
[main a8f8b95] New chapter 1 file with chapter heading
 1 file changed, 1 insertion(+)
 create mode 100644 chapter-1.txt
```

我们现在已经提交了那块工作，可以通过 `git log` 查看 Git 日志：

```
(main)$ git log
commit a8f8b95f19105fe10ed144fead9cab84520181e3 (HEAD -> main)
Author: John Mosesman <johnmosesman@gmail.com>
Date:   Fri Mar 19 12:27:35 2021 -0500

    New chapter 1 file with chapter heading

commit 2592324fae9c615a96f856a0d8b8fe1d2d8439f8 (origin/main, origin/HEAD)
Author: John Mosesman <johnmosesman@users.noreply.github.com>
Date:   Wed Mar 17 08:48:25 2021 -0500

    Update README.md

commit 024ea223ee4055ae82ee31fc605bbd8a5a3673a0
Author: John Mosesman <johnmosesman@users.noreply.github.com>
Date:   Wed Mar 17 08:48:10 2021 -0500

    Initial commit
```

看一下这个日志，我们会发现在项目历史中有三个提交（ commit ）。

最新的提交（ commit ）是我们刚刚做的那个。我们可以看到刚才使用的提交信息： _"New chapter 1 file..."._

还有两个之前的提交：一个是我初始化项目的时候，另一个是我更新 GitHub 上的 `README.md` 文件的时候。

注意每个提交（ commit ）都有一长串与之相关的数字和字符：

```
commit a8f8b95f19105fe10ed144fead9cab84520181e3 (HEAD -> main)
```

这一串数字和字符叫做 [安全散列函数（ SHA ）](https://en.wikipedia.org/wiki/SHA-1)——它是由散列算法（也叫哈希算法）为该提交（ commit ）生成的唯一ID。现在只需要注意一下，我们很开就会再来讨论这个问题。

在提交（ commit ）SHA后面，我们还看到另外两个有趣的东西：

-   在 `(HEAD -> main)` 旁边是我们最新的提交（ commit ）内容
-   而 `(origin/main, origin/HEAD)` 则在该提交（ commit ）之前的提交（ commit ）旁边。

这些信息告诉我们 _我们的分支和远程的当前状态_ （据我们所知——稍后我们再详细讨论）。

关于最新的提交（ commit ），我们看到 `HEAD` （也就是项目历史中的“我们现在的位置”）只想我们的 _本地_ `main` 分支——由 `HEAD -> main` 表示。

这是有道理的，因为我们刚刚做了那个提交（ commit ），并且我们还没有做其他事情——我还在做那个提交（ commit ）的时间点上。

如果我们看一下以 `25923` 开头的前一个提交（ commit ），我们可以看到 `(origin/main, origin/HEAD)`。这告诉我们，  _在源点（即 GitHub）_ ， GitHub 的 `HEAD` 或 “当前位置”在我们之前的提交（ commit ）上。

基本上，我们的本地机器认为本地 `main` 分支的最新改动是我们添加第一章的提交（ commit ），而我们的本地机器也认为 _GitHub 上_ 的最新改动是我们在写这篇文章之前更新 README 的提交（ commit ）。

这也是合理的——我们还没有告诉 GitHub 我们最新的提交（ commit ）。GitHub 仍然认为这个仓库是它看到的最新的。

现在让我们把我们的新提交（ commit ）推送（ push ）到 GitHub。

## 如何将我们的第一个提交（ commit ）推送（ push ）到 GitHub

我们在本地机器上有一个新的提交（ commit ），我们需要更新我们的“可信单一数据源”—— `origin` 远程——即 GitHub.

我们目前在本地的 `main` 分支上，所以我们需要告诉 GitHub 用我们的新提交（ commit ）来更新他自己的 `main` 。

我们使用 `git push` 命令做到这一点，我们可以指定 _我们要推送（ push ）到哪里_ 以及 _我们要推送（ push ）到哪个分支_。

```
(main)$ git push origin main
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 16 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 326 bytes | 326.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To github.com:johnmosesman/practical-git-tutorial.git
   2592324..a8f8b95  main -> main
```

这里我们推动到 `origin` 远程（ GitHub ）的 `main` 分支。

输出结果告诉我们 Git 为此所做的一些文件操作，最后一行告诉我们它推送（ push ）了哪些提交（ commit ），推送（ push ）到了哪里。

```
To github.com:johnmosesman/practical-git-tutorial.git
   2592324..a8f8b95  main -> main
```

这里显示我们把我们的 `main` 分支推送（ push ）到了 GitHub 的 `main` 分支。

如果我们回头开一下 `git log` 的输出，会发现我们的本地和 `origin` 现在都指向同一个提交（ commit ）：

```
(main)$ git log
commit f5b6e2f18f742e2b851e38f52a969dd921f72d2f (HEAD -> main, origin/main, origin/HEAD)
Author: John Mosesman <johnmosesman@gmail.com>
Date:   Mon Mar 22 10:07:35 2021 -0500

    Added the intro line to chapter 1
```

简而言之，在 `origin` （ GitHub ）上 `main` 分支（也写成 `origin/main` ）现在已经将我们的新提交（ commit ）标记为了历史中的最新提交 （ commit ）。

如果我们和其他合作者一些工作，现在他们可以从 GitHub 上拉取（ pull ）我们的最新修改并开始编辑第一章。

## 如何在 Git 中添加另一个提交（ commit ）

在我们和其他人合作之前，让我们在做一个小改动，看看当我们编辑一个现有文件时会发生什么。

让我们在第一章的文件里再添加一行：

```
(main)$ echo "It was the best of times, it was the worst of times" >> chapter-1.txt
(main)$ cat chapter-1.txt
Chapter 1 - The Beginning
It was the best of times, it was the worst of times
```

使用 `cat` 我们可以看到我们的文件现在包含两行。

让我们再看看我们的 Git 仓库的状态：

```
(main)$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   chapter-1.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

从顶部开始，我们会注意到输出结果显示 `Your branch is up to date with 'origin/main'.`

这可能看起来比较奇怪，我们刚刚修改了一个文件，但是 Git 只是将我们做的 _提交（ commit ）_ 和 `origin/main` 中的提交（ commit ）进行比较。

输出的下一部分内容做了更多解释：

```
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   chapter-1.txt
```

在这里 Git 告诉我们，我们有“修改未为提交暂存（ changes not staged for commit ）”。

在我们提交一组修改之前，我们首先需要把它们 **暂存（ stage ）**。

### 如何在 Git 中暂存修改 （ stage change ）

为了说明暂存区域（ staging area ）的作用，让我们先用  `git add` 来暂存（ stage ）我们的修改：

```
(main)$ git add .
(main)$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   chapter-1.txt
```

这些修改现在可以提交（ commit ）了，但在提交（ commit ）之前，让我们在 `chapter-1.txt` 文件中再添加一个修改。

我要把 `chapter-1.txt` 的内容完全替换成新的文本：

> **注意：** 我在这里使用 `>` 而不是 `>>` ，这将替换文件的内容而不是追加到文件中。

```
(main)$ echo "New file contents" > chapter-1.txt

(main)$ cat chapter-1.txt
New file contents

(main)$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   chapter-1.txt

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   chapter-1.txt
```

从输出中我们可以看到我们现在有 _已缓存的修改（ staged changes）_ ，和 _未缓存的修改（ not staged changes ）。_

虽然文件本身只能包含一个东西，但 Git 为我们记录了这两个修改——尽管它们是对同一行的修改！

然而，从上面的输出中我们无法真正知道这些变化是什么——我们只知道它们存在。

我们首先看一下使用命令行怎么查看这些修改（我从来不用），然后看一下使用图形用户界面（GUI）（100%更好用）。

### 如何查看 Git 差异（ diff ）

要查看这些修改，我们需要查看 Git **差异（ diff ）。**

_差异（ diff ）_ 是两组修改之间的差异。这些修改可以是从已缓存的修改（ staged changes）到未缓存的修改（ not staged changes ）再到提交（ commit ）中的任何一个。

使用命令行的方式查看需要用到 `git diff`。

为了全面的展示，我们将在这里看一下这个简单案例的输出。但是，正如我之前提到的，我们对有效的 Git 工作流感兴趣，一旦你要在多个文件中进行任何大规模的修改，这种命令行输出就变得无效了。

但是为了全面，请看下面：

```
(main)$ git diff
diff --git a/chapter-1.txt b/chapter-1.txt
index 0450d87..4cbeaee 100644
--- a/chapter-1.txt
+++ b/chapter-1.txt
@@ -1,2 +1 @@
-Chapter 1 - The Beginning
-It was the best of times, it was the worst of times
+New file contents
```

我的终端试图对这个输出进行着色来帮助提高可读性，但是需要注意的地方是，它告诉我们这在比较的文件是 `chapter-1.txt` ，并且在底部显示了实际差异。让我们来看看这几行输出：

```
-Chapter 1 - The Beginning
-It was the best of times, it was the worst of times
+New file contents
```

以减号（ `-` ）开始的几行是我们完全或部分删除的行，以加号（ `+` ）开头的行代表完全或部分添加的行。

随着多个文件和修改行的增加，这种输出会很快变得不方便。有一个更好的方法，在我近十年的编程生涯中，我一直使用一个简单的 GUI 程序来帮助查看和管理差异（ diff ）。

我使用的程序叫做 [GitX](http://gitx.frim.nl/)，它是一个老旧过时的软件，甚至已经没有了真正的维护。然而，我只是用它来查看和管理文件差异（ diff ），所以它对我有用。

我不会着重推荐这个软件，但它是免费的。虽然我没有用过，但 [GitHub Desktop client](https://desktop.github.com/) 很可能是一个不错的选择。

现在把这个小问题解决了，这是差异（ diff ）在我的工具中的样子。

首先，右侧的已缓存修改（ staged changes ）显示了我们对第二句话的原始添加：

![](https://www.freecodecamp.org/news/content/images/2021/03/staged_changes.png)

GitX 中的已缓存修改（ staged changes ）

在左侧的未缓存修改（ unstaged changes ）中，我们可以看到完全删除了这两行并添加了新的一行：

![](https://www.freecodecamp.org/news/content/images/2021/03/unstaged_changes.png)

GitX 中的未缓存修改（ unstaged changes ）

这与我们运行的文件替换命令相对应。

在一个 GUI 程序中了解差异（ diff ）要容易的多。这个程序还允许我们通过拖动文件来快速暂存和取消暂存。我甚至可以暂存或取消暂存一个文件中的个别行。

使用命令行与GUI程序相比没有任何加分。使用任何能帮你完成工作的方法。

现在我们已经看到了暂存区域（ staging area ）和 Git 差异（ diff ）是如何工作的，让我们放弃未暂存修改（ non-staged changes ），这样我们就可以回去提交（ commit ）我们第一个修改。

在我的 GUI 程序中，我可以右键点击文件并点击“放弃修改”，但是我在这里也会演示命令行是怎么工作的。

我们上个 `git status` 的输出实际上已经告诉我们如何通过使用 `git restore` 来做到这一点了。我们可以输入文件路径或者 `.` 来代表整个目录：

```
(main)$ git restore .
```

如果我们再次查看状态，我们就回到了只有我们的已暂存修改（ staged changes ），我们可以继续下一步。

> **注意：** Git 只提交已暂存修改（ staged changes ），所以我们可以把那些未暂存的修改（ unstated changes ）留在我们的工作目录中，这样不会干扰提交过程。  
>
> 但是，这会使我们未来的修改处理起来更麻烦——所以放弃这些修改以保持我们的工作目录的良好状态是合理的。

现在，让我们提交这些修改，并附上关于我们所做的事情的信息：

```
(main)$ git commit -m "Added the intro line to chapter 1"
[main f5b6e2f] Added the intro line to chapter 1
 1 file changed, 1 insertion(+)
```

再次检查状态，可以发现我们的分支“比 'origin/main' 领先一次提交（ Your branch is ahead of 'origin/main' by 1 commit ）”：

```
(main)$ git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```

最后让我们推送（ push ）我们的修改：

```
(main)$ git push origin main
```

## 如何在 Git 中与他人协作

到目前为止，我们一直在研究最简单的例子：自己在一个分支上工作。

在现实中，我们通常会和多人在多个不同的分支上一起工作。这是 Git 的真正威力：一个可以在众多合作者之间进行协作并跟踪变化的系统。

现在让我们先像项目中只有一个人一样继续工作，但让我们稍微调整一下我们的工作流程，为情况发生变化时做准备。

通常最佳实践是 _不_ 直接在 `main` 分支上工作。

`main` 分支应该是项目的“可信单一数据源”——对它的改动应该受到仔细审查。`origin/main` 中的任何改动都会成为其他任何在项目中工作的人的新的“可信数据源”，所以我们不因该在没有经过思考并通过他人审查的情况下随便改动它。

与其直接在 `main` 上直接工作，不如从 `main`  _分支_ 出我们自己的 **功能分支（ feature branch ）**， 然后将这些修改 **合并（ merge ）** 到 `main`。

这里出现了很多新的术语，所以让我们一步步来。

### Git 中的功能分支（ feature branch ）

首先，让我们从 `main` 分支出来，创建我们自己的功能分支（ feature branch ）。

当你从另一个分支上创建一个分支时，你就在 _那个时间点上_ 创建了一个该分支的副本。现在你可以独立于原始分支修改这个新分支。

为了尝试这一点，让我们建立一个名为 `chapter-2` 的新分支。我们使用 `git checkout` 加上 `-b` 标志和我们想要的新分支的名称：

```
(main)$ git checkout -b chapter-2
Switched to a new branch 'chapter-2'
(chapter-2)$
```

现在终端显示我们在 `chapter-2` 分支上。在 `chapter-2` 分支上的修改完全不会影响 `main` 分支。我们有了一个新的游乐场，可以在不影响 `main` 的情况下做任何我们想做的修改。

这里在后台有很多有趣的事情发生，但就本教程而言，我们只需要知道在 Git 中“检出 （ checkout ）”某个东西意味着“将我的本地项目改变成与该项目 _在某个特定时间点上的样子一模一样。_ ”你可以把一个分支看作是指向 Git 历史上某个特定时间线的指针。

这里实际发生了很多事情，但现在这个定义应该是足够了。

我们有了一个新的分支，现在这个新的分支和 `main` 是一样的（我们还没有做任何修改）。

接下来，让我们重复之前已经做过的事情，创建一个名为 `chapter-2.txt` 的新文件，给它一些内容，然后提交（ commit ）：

```
(chapter-2)$ touch chapter-2.txt
(chapter-2)$ echo "Chapter 2 - The next chapter" >> chapter-2.txt

(chapter-2)$ git status
On branch chapter-2
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        chapter-2.txt

nothing added to commit but untracked files present (use "git add" to track)

(chapter-2)$ git add .

(chapter-2)$ git commit -m "Creates chapter 2 and adds the topic sentence"
[chapter-2 741822a] Creates chapter 2 and adds the topic sentence
 1 file changed, 1 insertion(+)
 create mode 100644 chapter-2.txt
```

这里面没有什么新东西——与我们为第一章所做的事情一样。

现在我们在 `chapter-2` 分支上有了新的提交（ commit ），让我们看看 Git 日志，将这个新分支与 `main` 进行比较：

```
(chapter-2)$ git log
commit 741822a9fd7b15b6e3caf437dd0617fabf918449 (HEAD -> chapter-2)
Author: John Mosesman <johnmosesman@gmail.com>
Date:   Mon Mar 22 10:33:26 2021 -0500

    Creates chapter 2 and adds the topic sentence

commit f5b6e2f18f742e2b851e38f52a969dd921f72d2f (origin/main, origin/HEAD, main)
Author: John Mosesman <johnmosesman@gmail.com>
Date:   Mon Mar 22 10:07:35 2021 -0500

    Added the intro line to chapter 1

commit a8f8b95f19105fe10ed144fead9cab84520181e3
Author: John Mosesman <johnmosesman@gmail.com>
Date:   Fri Mar 19 12:27:35 2021 -0500

    New chapter 1 file with chapter heading
...
```

我们会注意到在日志中，我们最新的提交（ commit ）显示在最上面，而且我们的 `HEAD` 又与 `origin` 不同。这也是合理的——我们在本地做了一些修改，还不在 GitHub 上。

现在我们需要把我们的心改动放到 `main` 分支中。

## 用于协作的 Git 工作流程

有几种方法可以让我们新的第二章进入 `main` 分支和 GitHub，我们选择的方法取决于项目和我们与他人协作所使用的工作流程。

首先让我们来谈谈我们可以使用的几个不同的工作流程。

第一种是最直接的：

1.  将 `chapter-2` 的修改合并（ merge ）到我们的本地 `main` 分支
2.  将本地 `main` 分支推送到 `origin/main`

第二种方法更复杂一些：

-   将我们的本地 `chapter-2` 分支推送到 `origin` （这会在 `origin` 上创建一个名为 `origin/chapter-2` 的新分支）
-   将 `origin/chapter-2` 合并（ merge ）到 GitHub 上的 `origin/main`
-   从 `origin/main` 拉取（ pull ）新的修改到我们本地的 `main`

第一个工作流程肯定更容易，如果我自己一个人做这个项目，没有任何其他合作者，我会用这个工作流程。

然而，如果我有合作者，我不会想从我的本地直接推送到 `main` 分支。这样做的话，我就会仅凭自己的改动改变和控制了项目历史，而没有获得合作者的任何意见或审查。

出于这个原因，如果多人在同一个项目上工作，我会使用第二种工作流程，因为这对团队来说是一个更好的协作流程。

既然如此，我们就来看看这两种工作流程，让我们从第一个工作流程开始，它不那么复杂。

## 如何在 Git 中合并（ merge ）一个分支

当你在 Git 中想把两个分支的内容合并成一个时，有几种方法可以做到。第一种，也可能是最简单的方法，是做一个 **合并（ merge ）**

合并（ merge ），就像它听起来那样，试图将一个分支的内容（修改）应用（或“合并”）到另一个分支。

在我们的情境中，我们想要把 `chapter-2` 分支的内容 _合并（ merge ）到_ `main` 中。换句话说，我们先在 `main` 的当前状态中加入 `chapter-2` 分支的修改。

我们可以通过使用 `git merge` 来实现，之后我们会看一下它的结果。

我需要做的第一件事是切换到我们想要把修改合并（ merge ）_进去_ 的主要分支上。因为我们想要 `main` 吸收 `chapter-2` 的修改，所以我们首先需要在 `main` 分支上。

要切换回 `main` 分支，我们可以再次使用 `git checkout` 并指定 `main` 的分支名称。这一次我们不使用 `-b` 标志，因为我们想切换到一个现有分支，而不是创建一个新分支：

```
(chapter-2)$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
(main)$
```

我们现在回到了 `main` 分支，我们得到了一个简短的信息，告诉我们已经与 `origin/main`进行了更新。

接下来，让我们把 `chapter-2` 分支合并（ merge ）到 `main`：

```
(main)$ git merge chapter-2
Updating f5b6e2f..741822a
Fast-forward
 chapter-2.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 chapter-2.txt
```

让我们再看一下 Git 日志，看看结果：

```
(main)$ git log
commit 741822a9fd7b15b6e3caf437dd0617fabf918449 (HEAD -> main, chapter-2)
Author: John Mosesman <johnmosesman@gmail.com>
Date:   Mon Mar 22 10:33:26 2021 -0500

    Creates chapter 2 and adds the topic sentence

commit f5b6e2f18f742e2b851e38f52a969dd921f72d2f (origin/main, origin/HEAD)
Author: John Mosesman <johnmosesman@gmail.com>
Date:   Mon Mar 22 10:07:35 2021 -0500

    Added the intro line to chapter 1
    
...
```

我们可以看到我们的 `main` 分支现在包含了 `chapter-2` 的新提交（ commit ），而我们的 `origin` 仍然在前一个提交（ commit ）（因为我们还没有更新 `origin` ）。

最后，让我们推送（ push ）修改到 `origin/main`：

```
(main)$ git push origin main
Total 0 (delta 0), reused 0 (delta 0)
To github.com:johnmosesman/practical-git-tutorial.git
   f5b6e2f..741822a  main -> main
```

我们已经成功合并（ merge ）了 `chapter-2` 分支，并将修改推送（ push ）到 GitHub 上了！

作为最后的清理步骤，让我们删除 `chapter-2` 功能分支（ feature branch ），因为它已经被合并（ merge ）到 `main` 里了：

```
(main)$ git branch -d chapter-2
Deleted branch chapter-2 (was 741822a).
```

> **注意：** `git branch` 命令如果没有分支名称参数，将列出你在本地的所有分支。 
>
> 加上 `-d` 标志和一个分支名称，就会删除传递进来的分支。

## 拉取请求（ pull request ）工作流程

为了完成我们的协作工作流程，让我们在一个名为 `chapter-3` 的新分支上重复我们对第一章和第二章所做的同样的事情：

（现在是你自己尝试的好时机！）

```
(main)$ git checkout -b chapter-3
(chapter-3)$ touch chapter-3.txt
(chapter-3)$ echo "Chapter 3 - The End?" >> chapter-3.txt
(chapter-3)$ git add .
(chapter-3)$ git commit -m "Adds Chapter 3"
```

现在我们在一个叫做 `chapter-3` 的新分支上有一个新的提交（ commit ）。

让我们回顾一下如何将这个新的分支合并到 `main` 中， _而不直接在 `main` 上操作：_

-   将本地 `chapter-3` 分支推送到`origin` （这在 `origin` 上创建一个名为 `origin/chapter-3` 的新分支）
-   将 `origin/chapter-3` 合并（ merge ）到 GitHub 上的 `origin/main`
-   从 `origin/main` 拉取（ pull ）新的修改到我们本地的 `main`

还有几个步骤，但都不太复杂。

第一步是把我们的新分支推送到 GitHub。由于这个分支在 GitHub 上还不存在，GitHub 将为我们创建一个新分支，它是我们推送（ push ）内容的副本：

```
(chapter-3)$ git push origin chapter-3
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 16 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 299 bytes | 299.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote:
remote: Create a pull request for 'chapter-3' on GitHub by visiting:
remote:      https://github.com/johnmosesman/practical-git-tutorial/pull/new/chapter-3
remote:
To github.com:johnmosesman/practical-git-tutorial.git
 * [new branch]      chapter-3 -> chapter-3
```

现在我们在 GitHub 上有了自己的分支，我们可以创建一个 **拉取请求（ pull request ）**，让我们的队友审查。

GitHub 甚至在上面的输出中为我们提供了要访问的 URL： `https://github.com/johnmosesman/practical-git-tutorial/pull/new/chapter-3`

> **几个注意事项：** 接下来的部分展示了 GitHub 的用户界面和拉取请求的流程，但这个流程应该与其他服务非常相似（如 GitLab，Bitbucket等）。 
>
> 另外请记住，我使用的是我自己的仓库，所以你在这里看到的一些 URL 会与你的不同。

访问上面的 URL， 我们到达了一个发起新拉取请求（ pull request ）的页面。

我们可以看到几个东西：

-   一个指定拉取请求（ pull request ）名称的地方（一个主题句，以便于理解这个拉取请求（ pull request ）是关于什么的）
-   一个描述框，以解释我们所做的修改和我们想提供的任何其他背景信息（你也可以在这里添加图片、gif或视频）。
-   而在所有这些下面是我们修改的文件的列表和其中的变化（差异）。

![](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2021-03-24-at-10.22.13-AM.png)

发起一个新的拉取请求（ pull request ）

可以注意到，用户界面显示 `base: main <- compare: chapter-3`。这是 GitHub 在告诉我们，我们正在设置拉取请求将 `chapter-3`合并 _到_ `main`。

在拉取请求（ pull request ）的描述下方是我们所做修改的差异（ diff ）：

![](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2021-03-24-at-10.26.42-AM.png)

拉取请求（ pull request ）差异（ diff ）

我们会注意到只有文件 `chapter-3.txt` 被显示出来，这是因为它是我们修改的唯一文件。

目前在我们的项目中还有其他文件（ `chapter-1.txt`，`chapter-2.txt` ），但这些文件没有修改，所有没有必要显示。

我们看到我们插入到 `chapter-3.txt` 中的一行——在该行的开头有一个 `+` 号，绿色的背景标志着对该文件的补充。

点击“创建拉取请求（ Create Pull Request ）”后，我们会被带到我们刚刚制作的新的拉取请求（ pull request ）。

在这一点上，我们可以个拉取请求（ pull request ）指定一个审查员，通过在差异（ diff ）中的特定行上留言，围绕代码进行讨论。在代码被审查，我们进行了任何必要的修改后，我们就可以准备合并（ merge ）了。

在本教程中，我们将跳过审查过程，直接点击绿色的合并（ merge ）按钮：

![](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2021-03-24-at-10.39.55-AM.png)

合并（ merge ）的拉取请求（ pull request）

就这样，我们的拉取请求（ pull request）被合并（ merge ）到了 `main`！

## 如何使我们的本地保持跟新

我们现在以一种安全、可控、经过同行审查的方式对 `origin/main` 进行了修改。

但是，我们的本地对这个修改一无所知。在本地， Git 仍然认为我们的 `chapter-3` 分支没有合并（ merge ）到 `main`：

```
(chapter-3)$ git log
commit 085ca1ce2d0010fdaa1c0ffc23ff880091ce1692 (HEAD -> chapter-3, origin/chapter-3)
Author: John Mosesman <johnmosesman@gmail.com>
Date:   Tue Mar 23 09:19:14 2021 -0500

    Adds Chapter 3

commit 741822a9fd7b15b6e3caf437dd0617fabf918449 (origin/main, origin/HEAD, main)
Author: John Mosesman <johnmosesman@gmail.com>
Date:   Mon Mar 22 10:33:26 2021 -0500

    Creates chapter 2 and adds the topic sentence

...
```

我们的本地显示 `origin/main` 还在之前的以 `741822` 开始的提交（ commit ）。我们需要从 `origin` 拉取（ pull ）新的信息来更新我们的本地仓库。

### 如何获取远程数据

与 Git 的其他许多事情一样，完成同样的任务可以有许多不同的方法。

以我们的目标出发，我们将研究一种在大多数情况下都能发挥作用的简单方法。

首先，让我们切换到本地的 `main` 分支：

```
(chapter-3)$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
```

我们的本地认为我们的与 `origin/main` 保持了更新，因为自从我们在一开始使用 `git clone` 拉取（ pull ）了项目后，我们没有向远程仓库（ `origin` ）索要新的信息。

Git 仓库不是实时更新的——它们只是某个时间点上的历史快照。要收到关于仓库的任何新信息，我们必须再次发出请求。

我们使用 `git fetch` 从远程获取任何新信息：

```
(main)$ git fetch
From github.com:johnmosesman/practical-git-tutorial
   741822a..10630f2  main       -> origin/main
```

输出结果显示， `origin/main` 现在指向一个以 `10630f2` 开头的提交（ commit ）。这个提交前缀与我们拉取请求（ pull request ）的SHA一致。 

有几种方法可以将两个分支合并到一起，其中一种方法是创建一个 **合并提交（ merge commit ）**。这就是这里发生的事情。

![](https://www.freecodecamp.org/news/content/images/2021/03/commit.png)

我们的拉取请求的合并提交

我们的本地仓库现在知道这些新提交的存在，但我们还没有对它做任何事情。

运行 `git fetch` 实际上并没有修改我们的任何文件——它只是从远程下载关于仓库状态的新信息。

现在我们的本地仓库已经知道了每个分支的状态（ 但还没有 _修改或更新_ 任何分支），让我们再次检查一下状态：

```
(main)$ git status
Your branch is behind 'origin/main' by 2 commits, and can be fast-forwarded.
  (use "git pull" to update your local branch)
```

我们的本地现在知道我们的本地 `main` 比 `origin/main` 晚了两个提交（来自 `chapter-3` 分支的提交和拉取请求的合并提交）。

它还提示我们使用 `git pull` 来更新我们的本地分支：

```
john:~/code/practical-git-tutorial (main)$ git pull origin main
From github.com:johnmosesman/practical-git-tutorial
 * branch            main       -> FETCH_HEAD
Updating 741822a..10630f2
Fast-forward
 chapter-3.txt | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 chapter-3.txt
```

`git pull` 命令实际上是运行两条命令的简写：运行 `git fetch` 后运行 `git merge`。

由于 `git fetch` 不会在本地运行任何修改，所以用 `git fetch` 来查看我们的分支是否与远端同步（ 也许我们还不想合并修改），或者拉取存在与远端而不在本地上的新分支，都是很有用的。

从远端获取（ fetch ）一个新的分支就会把这个分支也下载到你的本地机器上——因为它是一个新的分支，所以不会与你本地设置中的任何东西冲突。

我们最初可以只做 `git pull` 而不是先做 `git fetch` ，但我想解释一下 `git fetch`，因为它本身非常有用。

运行了 `git pull` 之后，如果我们再运行一次 `git status` ，我们会看到所有东西都已经更新了。

就这样，我们从远端拉取了修改，是我们的本地获得了更新！

## 如何修复 Git 中的合并冲突（ merge conflict ）

我们要讨论的最后一个话题是如何处理冲头。

到目前为止， Git 神奇的处理了所有的文件更新，而且大多数时候 Git 都能直接处理。但是，有些时候 Git 不知道如何把修改合并起来，这就产生了 **冲突（ conflict ）。**

当合并两个改动了文件中同一行的修改时，就会发生冲突。如果两个提交修改了文件中的痛一行， Git 不知道该使用哪一个提交的修改，它就会要求你做出选择。

为了设置这个情境，我在 Github 上创建了另一个名为 `chapter-3-collaboration` 的分支。让我们想象一下，一个队友已经开始在个分支上工作，他要求你与他合作完成第三章。

由于这是一个我们本地没有的新分支，我可以用 `git fetch` 从远程获取新分支的信息，然后用 `git checkout` 切换到该分支：

```
(main)$ git fetch
From github.com:johnmosesman/practical-git-tutorial
 * [new branch]      chapter-3-collaboration -> origin/chapter-3-collaboration

(main)$ git checkout chapter-3-collaboration
Branch 'chapter-3-collaboration' set up to track remote branch 'chapter-3-collaboration' from 'origin'.
Switched to a new branch 'chapter-3-collaboration'
(chapter-3-collaboration)$
```

现在我们已经把新的分支拉取到本地仓库并切换到了它上。这是目前这个新分支上 `chapter-3.txt` 的内容：

```
(chapter-3-collaboration)$ cat chapter-3.txt
Chapter 3 - The End?

This is a sentence.
```

这是一个标题和一个句子。让我们把标题改成新的东西，比如 _"Chapter 3 - The End Is Only The Beginning."_

`chapter-3.txt` 的内容现在看起来像这样：

```
(chapter-3-collaboration)$ cat chapter-3.txt
Chapter 3 - The End Is Only The Beginning

This is a sentence.
```

在提交修改后，如果我们试图推送（ push ）它就会得到这个消息：

```
(chapter-3-collaboration)$ git push origin chapter-3-collaboration
To github.com:johnmosesman/practical-git-tutorial.git
 ! [rejected]        chapter-3-collaboration -> chapter-3-collaboration (non-fast-forward)
error: failed to push some refs to 'git@github.com:johnmosesman/practical-git-tutorial.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

我们的队友已经在我们之前做了一些提交，并推送到了远程分支。我们的本地分支现在与远程分支不一致， GitHub 拒绝了我们的推送，直到我们合并队友的修改。

```
... the tip of your current branch is behind its remote counterpart. Integrate the remote changes ... before pushing again.
```

它也给了我们一个关于如果操作的提示： `git pull`。

```
(chapter-3-collaboration)$ git pull origin chapter-3-collaboration
From github.com:johnmosesman/practical-git-tutorial
 * branch            chapter-3-collaboration -> FETCH_HEAD
Auto-merging chapter-3.txt
CONFLICT (content): Merge conflict in chapter-3.txt
Automatic merge failed; fix conflicts and then commit the result.
```

在拉取后——正如我们可能已经预料到的那样，考虑到我们目前正在讨论的主题——我们有一个合并冲突。

Git 试图将我们队友的修改自动合并到我们的文件中，但文件中有一个地方它不能自动合并——我们都修改了同一行。

Git 在“合并中途”停止了工作，并告诉我们在完成合并之前需要修复合并冲突。让我们看看当前的 `git status` ：

```
(chapter-3-collaboration)$ git status
On branch chapter-3-collaboration
Your branch and 'origin/chapter-3-collaboration' have diverged,
and have 1 and 1 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)

You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   chapter-3.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

Git 告诉我们，我们的分支和远程分支之间有一个不用的提交，它还告诉我们，我们有一些“未合并的路径”——我们目前正在合并中途，需要修复冲突。

它显示 `chapter-3.txt` 目前已被修改，那让我们来看看 `chapter-3.txt` 的内容：

```
(chapter-3-collaboration)$ cat chapter-3.txt
<<<<<<< HEAD
Chapter 3 - The End Is Only The Beginning
=======
Chapter 3 - The End But Not The Ending
>>>>>>> 2f6874f650a6a9d2b7ccefa7c9618deb1d45541e

This is a sentence.
```

Git 在文件中添加了一些标记以显示冲突发生的位置。我们和队友都修改了标题句，所以它被 Git 的冲突标记包裹着： `<<<` 和 `>>>` 箭头，以一行 `===` 分隔。

最上面的一行，以 `<<<<<<< HEAD` 为标志，后面是 _"Chapter 3 - The End Is Only The Beginning"_ ，是我们刚刚做的修改。 Git 告诉我们，这一行是我们当前 `HEAD` 所在的位置——也就是说，这是我们当前提交的修改。

它下面的一行，  _"Chapter 3 - The End But Not The Ending"_ 后面跟着 `>>>>>>> 2f6874f650a6a9d2b7ccefa7c9618deb1d45541e` ，是我们队友的行和提交。

基本上， Git 是在告诉我们，“你想保留这些行（或这些行的组合）里的哪一条？”

你会注意到文件底部那一行没有被冲突标记包裹——他没有被两个提交同时修改。

我们需要通过删除一行或将两行合并为一行来解决冲突（ 记得也要删除 Git 放在那里的所有额外标记 ）。

我将组合这些行，所以最后的文件看起来像这样：

```
(chapter-3-collaboration)$ cat chapter-3.txt
Chapter 3 - The End Is Not The Ending--But Only The Beginning

This is a sentence.
```

我们只需要提交我们的冲突解决方案来完成合并：

```
(chapter-3-collaboration)$ git add .
(chapter-3-collaboration)$ git commit -m "Merge new title from teammate"
[chapter-3-collaboration bd621aa] Merge new title from teammate

(chapter-3-collaboration)$ git status
On branch chapter-3-collaboration
Your branch is ahead of 'origin/chapter-3-collaboration' by 2 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```

`git status` 的结果告诉我们，我们的本地分支比 `origin/chapter-3-collaboration` 领先两个提交（ `is ahead of 'origin/chapter-3-collaboration' by 2 commits.`）。

看一下 `git log` 就可以证明这一点：

```
commit bd621aa0e491a291af409283f5fd1f68407b94e0 (HEAD -> chapter-3-collaboration)
Merge: 74ed9b0 2f6874f
Author: John Mosesman <johnmosesman@gmail.com>
Date:   Thu Mar 25 09:20:42 2021 -0500

    Merge new title from teammate

commit 74ed9b0d0d9154c912e1f194f04dbd6abea602e6
Author: John Mosesman <johnmosesman@gmail.com>
Date:   Thu Mar 25 09:02:03 2021 -0500

    New title

commit 2f6874f650a6a9d2b7ccefa7c9618deb1d45541e (origin/chapter-3-collaboration)
Author: John Mosesman <johnmosesman@gmail.com>
Date:   Thu Mar 25 08:58:58 2021 -0500

    Update title

...
```

由此产生的提交历史中，分支上的提交和我们的合并提交都在顶部。

从这里，我们只需要把我们的修改推送到远程：

```
(chapter-3-collaboration)$ git pull origin chapter-3-collaboration
Enumerating objects: 10, done.
Counting objects: 100% (10/10), done.
Delta compression using up to 16 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 647 bytes | 647.00 KiB/s, done.
Total 6 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To github.com:johnmosesman/practical-git-tutorial.git
   2f6874f..bd621aa  chapter-3-collaboration -> chapter-3-collaboration
```

现在我们已经改变了远程分支，我们的队友需要做一个 `git pull` 来合并我们新的合并修改。

而且，最好是告诉我们的队友，我们推送了一个新的修改，这样他们就可以在继续编辑之前把它拉取下来——减少他们在未来也要修复合并冲突的可能性。

### 在分支上进行分支

我们也可以在 `chapter-3-collaboration` 分支上创建自己的分支。这将使我们直到工作最后才需要解决合并冲突。

当我们在自己的独立分支上完成了工作，我们就可以将 _我们_ 的功能分支合并到 _队友_ 的功能分支上，然后再合并到 `main`。

> `chapter-3-collaboration-john` -> `chapter-3-collaboration` -> `main`

正如你所看到的，随着越来越多的分支彼此分离，并成为彼此的前分支和后分支，分支结构会变得相当复杂。

因此，一般来说，保持分支的 **小而独立（ small and isolated） ** 并尝试 **快速和经常合并他们（ merge them quickly and often ）** 是个好主意。

这可以帮助避免很多痛苦的合并冲突。

## 回顾：如何启动一个新的功能工作流程

最后，我将快速的回顾一下如何着手开始一个新的任务，以及做这个任务需要的命令和流程。

假设你在新工作中得到了第一个任务：处理你的团队产品中的一个小错误 （ bug ）。

你需要做的第一件事时使用 `git clone <URL>` 拉取该仓库。

接下来，你要用 `git checkout -b <BRANCH_NAME>` 在 `main` 之外创建一个功能分支。之后，你将修复这个错误，并使用 `git add` 和 `git commit` 提交修改。

也许解决这个问题需要进行多次提交，或者你在试图解决这个问题时做了多次提交，最后才找到了解决方案。这也是可以的。

提交后，将新分支推送到 `origin` （ `git push origin <BRANCH_NAME>`）并创建一个拉取请求。经过代码审查，你的分支被合并了（耶！）。

现在你已经完成了你的功能，是时候切换回 `main` 了（使用 `git checkout main` ），使用 `git pull` 获取你的最新修改和其他人的修改，然后从新的分支开始。

## 结语

正如开头所提到的，使用 Git 和 Git 工作流程有很多种方法。

还有很多 Git 底层的“魔法”（也就是说，正在运行的代码你还不了解），但是随着时间的推移，你会学到并掌握更多东西。

在我职业生涯的前几年，我只是通过记忆命令和工作流程来使用 Git。这很有效。当我遇到问题或与队友协作时，我学到了更多的东西，最终我的 Git 技能得到了扩展。

刚开始的时候，不要把事情搞得太复杂！随着时间的推移，你会学会的。

如果你喜欢这篇文章，我 [在我的网站上](https://johnmosesman.com/) 写像这样的技术话题以及非技术话题。

我也在推特（ Twitter ）[@johnmosesman](https://twitter.com/johnmosesman) 上写相似的东西。

无论怎样，请随时给我发信息。

谢谢阅读！

John
