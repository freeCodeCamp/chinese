> - 原文地址：[The Git Rebase Handbook – A Definitive Guide to Rebasing](https://www.freecodecamp.org/news/git-rebase-handbook/)
> - 原文作者：[Omer Rosenbaum](https://www.freecodecamp.org/news/author/omer/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![The Git Rebase Handbook – A Definitive Guide to Rebasing](https://www.freecodecamp.org/news/content/images/size/w2000/2023/07/The-Git-Rebase-Handbook-Book-Cover--1-.png)

开发人员的工具箱中最强大的工具之一是`git rebase'。但它因复杂和被误解而臭名昭著。

事实上，如果你了解它的实际作用，`git rebase'是一个非常优雅和直接的工具，可以实现 Git 中许多不同的事情。

在之前的文章中，你了解了 [什么是 Git diff](https://www.freecodecamp.org/news/git-diff-and-patch/)，[什么是 merge](https://www.freecodecamp.org/news/the-definitive-guide-to-git-merge/)，以及 [Git 如何解决合并冲突(merge conflicts)](https://www.freecodecamp.org/news/the-definitive-guide-to-git-merge/)。在这篇文章中，你将了解什么是 Git rebase，为什么它与 merge 不同，以及如何放心地进行 rebase 💪🏻

## Notes before we start

1. 我还制作了一个涵盖本帖内容的视频。如果你想在阅读的同时观看，你可以找到[它](https://youtu.be/3VFsitGUB3s)。
2. 如果你想玩玩我用的软件库，自己试试这些命令，你可以得到软件库[这里](https://github.com/Omerr/rebase_playground)。
3. 我正在写一本关于 Git 的书! 你有兴趣阅读初始版本并提供反馈吗？请给我发[邮件](gitting.things@gmail.com)

好了，你准备好了吗？

# Short Recap - What is Git Merge? 🤔

从底层来讲，`git rebase` 和 `git merge`是非常、非常不同的事情。那为什么人们一直在比较它们呢？

原因是它们的用法。使用 Git 时，我们通常在不同的分支工作，并对这些分支进行修改。

在[以前的教程](https://www.freecodecamp.org/news/the-definitive-guide-to-git-merge/#howgits3waymergealgorithmworks)中，我举了一个例子， John 和 paul（披头士乐队）正在共同创作一首新歌。他们从 "主 "分支开始，然后各自发散，修改歌词并提交他们的修改。

然后，两人想整合他们的改动，这是使用 Git 工作时经常发生的事情。

![image-197](https://www.freecodecamp.org/news/content/images/2023/06/image-197.png)

分歧(diverged)的历史 - `paul_branch` 和 `john_branch` 与 `main`分歧 (来源： [简介](https://youtu.be/3VFsitGUB3s))

在 Git 中，有两种主要的方式来整合不同分支的变化，或者说，不同的提交和提交历史。它们是 merge 和 rebase。

[在之前的教程中](https://www.freecodecamp.org/news/the-definitive-guide-to-git-merge/)，我们对 `git merge` 有了相当的了解。我们看到，在执行合并时，我们会创建一个 **合并提交(merge Commit)**,这个提交的内容是两个分支的组合，它也有两个父分支，每个分支一个。

所以，假设你在分支`john_branch`上（假设是上图中描述的历史），你运行`git merge paul_branch`。你会得到这样的状态--在`john_branch`上，有一个新的提交，有两个父分支。第一个是合并前`HEAD`指向的`john_branch`分支上的提交，本例中是 `Commit 6`。第二个是 `paul_branch` 所指向的提交 `Commit 9`。

![image-196](https://www.freecodecamp.org/news/content/images/2023/06/image-196.png)

运行`git merge paul_branch'的结果：一个新的合并提交(Merge Commit)，有两个父分支 (Source： [简介](https://youtu.be/3VFsitGUB3s))
再看一下历史图：你创建了一个**分歧的(diverged)**历史。你实际上可以看到它在哪里分叉(branched)，在哪里又合并了(merged)。

所以当使用`git merge`时，你并没有重写历史--而是在现有的历史中增加一个提交。具体来说，是在现有的历史中增加一个提交，创造一个分歧(diverged)的历史。

# How is `git rebase` Different than `git merge`? 🤔

当使用`git rebase`时，会发生不同的情况。🥁

让我们从大的方面开始：如果你在`paul_branch`上，并使用`git rebase john_branch`，Git 会去找 John 的分支和 Paul 的分支的共同祖先。然后把 Paul 分支的提交中引入的补丁，应用到 John 分支。

所以在这里，你用`rebase`把在一个分支,Paul 的分支上提交的修改，在另一个分支`john_branch`上重演(replay)。

![image-198](https://www.freecodecamp.org/news/content/images/2023/06/image-198.png)

运行`git rebase john_branch`的结果：`paul_branch`上的提交被 `重演(replay)` 到 `john_branch`之上 (来源：Graphics： [简介](https://youtu.be/3VFsitGUB3s))

等等，那是什么意思？🤔

我们现在将一点一点地进行分析，以确保你完全理解在底层发生的事情 😎

# `cherry-pick` as a Basis for Rebase

使用 git rebase 可以理解为执行 `git cherry-pick`，`git cherry-pick` 是一个命令，它接受一个提交，计算出该提交引入的补丁(patch)，即计算出父提交和该提交之间的差异，并且通过 `cherry-pick` 将这个差异`重演(replay)`出来。

让我们手动来做这个。

如果我们通过执行`git diff main <SHA_OF_Commit_5>`来看看 `Commit 5` 引入的差异:

![image-199](https://www.freecodecamp.org/news/content/images/2023/06/image-199.png)

运行 `git diff` 来观察 `Commit 5` 引入的补丁 (Source： [简介](https://youtu.be/3VFsitGUB3s))

如果你想玩玩我用的版本库，自己试试这些命令，你可以得到这个版本库[这里](https://github.com/Omerr/rebase_playground)。

你可以看到，在这个提交中，John 开始创作一首名为 `Lucy in the Sky with Diamonds` 的歌曲：

![image-200](https://www.freecodecamp.org/news/content/images/2023/06/image-200.png)

`git diff`的输出结果,`Commit 5` 引入的补丁(patch) (来源: [Brief](https://youtu.be/3VFsitGUB3s))

提醒一下，你也可以使用`git show`命令来获得同样的输出：

```shell
git show <SHA_OF_Commit_5>
```

现在，如果你`cherry-pick`这个提交，你将在活动分支(active branch)上专门引入这个改动。先切换到 "main":

`git checkout main` (or `git switch main`)

并创建另一个分支，只是为了明确:

`git checkout -b my_branch` (or `git switch -c my_branch`)

![image-201](https://www.freecodecamp.org/news/content/images/2023/06/image-201.png)

从 `main` 分支创建出 `my_branch` 分支 (源自: [Brief](https://youtu.be/3VFsitGUB3s))

`cherry-pick`这个提交(Commit):

```shell
git cherry-pick <SHA_OF_Commit_5>
```

![image-202](https://www.freecodecamp.org/news/content/images/2023/06/image-202.png)

使用 `cherry-pick` 将 `Commit 5` 中引入的修改应用到 `main`上 (源自： [简介](https://youtu.be/3VFsitGUB3s))
考虑一下日志 (`git lol`的输出):

![image-205](https://www.freecodecamp.org/news/content/images/2023/06/image-205.png)

`git lol`的输出 (源自： [简介](https://youtu.be/3VFsitGUB3s))

(`git lol`是我加在 Git 上的一个别名，用来以图形的方式直观地查看历史。你可以找到它[这里](https://gist.github.com/Omerr/8134a61b56ca82dd90e546e7ef04eb77))。

你复制的 `Commit 5`。请记住，尽管它有相同的提交信息，并引入了相同的修改，甚至在这种情况下指向与原始 `Commit 5`相同的树对象,它仍然是一个不同的提交对象，因为它是以不同的时间戳创建的。

看一下这些变化，使用`git show HEAD`:

![image-204](https://www.freecodecamp.org/news/content/images/2023/06/image-204.png)

`git show HEAD`的输出结果 (Source： [简介](https://youtu.be/3VFsitGUB3s))

它们与 `Commit 5` 的相同。

当然，如果你看一下这个文件（比如，用`nano lucy_in_the_sky_with_diamonds.md`），它的状态和最初的 `Commit 5` 之后的状态是一样的。

酷! 😎

好了，现在你可以删除新的分支，这样它就不会每次都出现在你的历史记录上:

```shell
git checkout main
git branch -D my_branch
```

## Beyond `cherry-pick` – How to Use `git rebase`

你可以把 `git rebase` 看成是一个接一个地执行多个 `cherry-pick` 的方法，也就是 `重放(replay)`多个提交。这不是`rebase`唯一能做的事情，但它是我们解释的一个很好的起点。
是时候玩玩`git rebase`了！ 👏🏻👏🏻

之前，你把 `paul_branch` 合并到了 `john_branch`。如果把`paul_branch` _rebased_ `john_branch`，会发生什么呢？你会得到一个非常不同的历史(history)。

从本质上说，就好像我们把在`paul_branch`上的提交中引入的变更，在`john_branch`上重放(replay)一样。结果就是一个 **线性** 历史。[译者注：`git log --graph` 输出历史的是直线的，没有分叉]

为了理解这个过程，我将提供一个高层视图，然后深入到每一步。将一个分支重定向(rebasing)到另一个分支之上的过程如下:

1. 找到共同的祖先(ancestor)。
2. 确定要 `重放(replayed)`的提交。
3. 对于每个提交`X`，计算`diff(parent(X), X)`，并存储为`patch(X)`。
4. 移动 `HEAD` 到新的基(base).
5. 在目标分支上按顺序应用生成的补丁。每次都用新的状态创建一个新的提交对象。

在新提交中使用与现有提交相同的变更集的过程也被称为 **重放(replaying)**，我们已经使用过这个术语。

# **Time to Get Hands-On with Rebase🙌🏻**

从 Paul 的分支开始:

```shell
git checkout paul_branch
```

这是提交历史:

![image-206](https://www.freecodecamp.org/news/content/images/2023/06/image-206.png)

执行`git rebase`前的提交历史(Source: [Brief](https://youtu.be/3VFsitGUB3s))

现在，进入激动人心的部分:

```shell
git rebase john_branch
```

查看历史:

![image-207](https://www.freecodecamp.org/news/content/images/2023/06/image-207.png)

rebase 后的历史 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

( `gg` 是我的 [视频](https://youtu.be/3VFsitGUB3s) 中介绍的一个外部工具的别名). [译者注: [git-graph](https://github.com/mlange-42/git-graph)]

因此，使用 `git merge` 你增加了历史(history)，而使用 `git rebase`, 你改写了历史。你创建了新的提交对象。此外，结果是一个线性的历史图,而不是一个发散图。

![image-209](https://www.freecodecamp.org/news/content/images/2023/06/image-209.png)

rebase 后的历史 (来源： [简介](https://youtu.be/3VFsitGUB3s))

本质上，我们 `复制` 了 `paul_branch` 上 `Commit 4` 之后的提交，并将它们 `粘贴`到了 `john_branch` 上。

这个命令被称为 `rebase`，因为它改变了运行它的分支的基点提交(base Commit)。也就是说，在运行`git rebase`之前，`paul_branch`的基点提交是 `Commit 4`,因为这是分支 `诞生(born)` 的地方（从`main`开始）。使用 `rebase` 时，你要求 Git 给它另一个基点，也就是假装它是从 `Commit 6` 诞生的。

为此，Git 将原来的 `Commit 7` 的改动 `重放(replayed)`到 `Commit 6` 上，然后创建了一个新的提交对象。这个对象与原来的 `Commit 7` 有三点不同:

1. 时间戳不同。
2. 它有不同的父提交, `Commit 6` 而不是 `Commit 4`。
3. 它指向的[tree object](https://www.freecodecamp.org/news/git-internals-objects-branches-create-repo/) 是不同的,因为修改被引入到了 `Commit 6` 指向的树，而不是 `Commit 4` 指向的树。

注意这里的最后一个提交，`Commit 9`。它所代表的快照 (也就是它所指向的 [tree](https://www.freecodecamp.org/news/git-internals-objects-branches-create-repo/)) 与合并两个分支后得到的树完全相同。Git 仓库中文件的状态与使用 `git merge` 时一样。不同的只是历史，当然还有提交对象。

现在，您可以简单地使用:

```shell
git checkout main
git merge paul_branch
```

Hm…… 如果运行最后这条命令，会发生什么？🤔 在查看了 `main` 之后，再次查看提交历史:

![image-210](https://www.freecodecamp.org/news/content/images/2023/06/image-210.png)

 rebase 后，再切换到 `main` 分支的历史 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

合并 `paul_branch` 到 `main` 会发生什么?

事实上，Git 可以简单地执行快进合并(fast-forward merge)，因为历史是完全线性的（如果你需要关于快进合并的提醒，请查看 [this post](https://www.freecodecamp.org/news/the-definitive-guide-to-git-merge/#timetogethandson) ）。因此，`main` 和 `paul_branch` 现在指向同一个提交:

![image-211](https://www.freecodecamp.org/news/content/images/2023/06/image-211.png)

快进合并(fast-forward merge)的结果 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

# Advanced Rebasing in Git💪🏻

既然你已经了解了 rebase 的基础知识，现在就该考虑更高级的情况了，在这些情况下，`rebase` 命令的附加选项和参数就会派上用场。

在前面的例子中，当你只说了 `rebase`（没有附加选项），Git 就会重放(replayed) 从共同祖先到当前分支顶端的所有提交。

但是，rebase 是一个超级强大的命令，它能够...，改写历史。如果你想修改历史，把它变成你自己的，它就会派上用场。

让 `main` 再次指向 `Commit 4`，撤销上次的合并:

```shell
git reset -–hard <ORIGINAL_Commit 4>
```

![image-238](https://www.freecodecamp.org/news/content/images/2023/06/image-238.png)

`撤销(undoing)` 上次合并操作 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

通过 rebase 进行撤销:

```shell
git checkout paul_branch
git reset -–hard <ORIGINAL_Commit 9>
```

![image-239](https://www.freecodecamp.org/news/content/images/2023/06/image-239.png)

`撤销` rebase 操作 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

请注意，您的历史记录与以前完全相同:

![image-240](https://www.freecodecamp.org/news/content/images/2023/06/image-240.png)

在 `撤销` rebase 操作后可视化历史记录 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

需要再次说明的是，`Commit 9` 并不是在当前 `HEAD` 无法访问时就消失了。相反，它仍然保存在对象数据库中。当你使用 `git reset` 将 `HEAD` 改为指向该提交(Commit 9)时，你就能检索到它以及它的父提交，因为它们也存储在数据库中。很酷吧？😎

好了，快速查看 Paul 介绍的更改:

```shell
git show HEAD
```

![image-241](https://www.freecodecamp.org/news/content/images/2023/06/image-241.png)

`git show HEAD` 显示了 `Commit 9` 引入的补丁 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

在提交图(Commit graph) 中继续向后退:

```shell
git show HEAD~
```

![image-242](https://www.freecodecamp.org/news/content/images/2023/06/image-242.png)

`git show HEAD~`（与 `git show HEAD~1`相同）显示 `Commit 8` 引入的补丁  (Source: [Brief](https://youtu.be/3VFsitGUB3s))

更进一步:

```shell
git show HEAD~2
```

![image-243](https://www.freecodecamp.org/news/content/images/2023/06/image-243.png)

`git show HEAD~2` 显示 `Commit 7` 引入的补丁 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

所以，这些改动很好，但也许 Paul 并不想要这样的历史记录。相反，他想让 `Commit 7` 和 `Commit 8` 中的改动看起来像是一次提交。

为此，你可以使用 **interactive(交互式)** rebase。为此，我们在 `rebase` 命令中添加 `-i`（或 `--interactive`）选项:

```shell
git rebase -i <SHA_OF_Commit_4>
```

或者，由于 `main` 指向 `Commit 4`，我们只需运行:

```shell
git rebase -i main
```

通过运行这条命令，你会告诉 Git 使用一个新的基(base) `Commit 4`。这样，Git 就会回溯到所有在 `Commit 4`之后提交的、从当前的 `HEAD` 可以到达的提交，并重放(replay) 这些提交。

对于每一个被重放的提交，Git 都会询问我们想对它做什么:

![image-250](https://www.freecodecamp.org/news/content/images/2023/06/image-250.png)

`git rebase -i main` 会提示您选择对每次提交的处理方式 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

在这种情况下，将提交视为补丁是很有用的。也就是说，`Commit 7` 就是 `Commit 7` 在其父版本之上引入的补丁"。

一种选项是使用 `pick`。这是默认行为，它告诉 Git 重放该提交中引入的改动。在这种情况下，如果保持原样, `pick` 所有提交,就会得到相同的历史记录，Git 甚至不会创建新的提交对象。

另一个选项是 `squash`。一个 _squashed_ 提交的内容会被 `折叠(folded)` 到它之前的提交内容中。因此，在我们的例子中，Paul 想把 `Commit 8` 压缩成 `Commit 7`:

![image-251](https://www.freecodecamp.org/news/content/images/2023/06/image-251.png)

`Commit 8` 压缩成 `Commit 7` (Source: [Brief](https://youtu.be/3VFsitGUB3s))

如你所见，`git rebase -i` 提供了更多选项，但我们不会在这篇文章中一一介绍。如果允许 `rebase` 运行，系统会提示你为新创建的提交（即引入了 `Commit 7`和 `Commit 8`改动的提交）选择提交信息：

![image-252](https://www.freecodecamp.org/news/content/images/2023/06/image-252.png)

提供提交信息: `Commits 7+8` (Source: [Brief](https://youtu.be/3VFsitGUB3s))

再看历史:

![image-253](https://www.freecodecamp.org/news/content/images/2023/06/image-253.png)

运行 interactive rebase 后的历史 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

正如我们想要的那样!我们在`paul_branch`分支上有 `Commit 9` (当然,它是一个不同的对象,与原来的 `Commit 9` 不同)。它指向 `Commit 7+8`,这是一个单独的提交,引入了原来 `Commit 7`和 `Commit 8` 的所有变更。这个提交的父提交是 `Commit 4`,也就是`main`分支当前所指向的提交。你现在在`john_branch`分支上。

![image-254](https://www.freecodecamp.org/news/content/images/2023/06/image-254.png)

interactive rebase  后可视化的历史 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

哇哦，是不是很酷？ 😎

`git rebase` 允许你无限制地控制任何分支的形态。你可以用它来重新排序提交，或删除错误的改动，或回溯修改改动。或者，你也可以把分支的基础移到另一个提交上，任何你想要的提交。

## How to Use the `--onto` Switch of `git rebase`

让我们再看一个例子。再次进入 `main`:

```shell
git checkout main
```

然后删除 `paul_branch` 和 `john_branch` 分支 ，这样在提交图中就看不到它们了:

```shell
git branch -D paul_branch
git branch -D john_branch
```

现在从 `main` 分支基础上开一个新的分支:

```shell
git checkout -b new_branch
```

![image-255](https://www.freecodecamp.org/news/content/images/2023/06/image-255.png)

从 `main` 分支上创建一个新分支(new_branch) (Source: [Brief](https://youtu.be/3VFsitGUB3s))

![image-256](https://www.freecodecamp.org/news/content/images/2023/06/image-256.png)


一个干净的历史记录, 从 `main` 分支上创建的 `new_branch` 分支。 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

现在，在此处添加一些更改并提交:

```shell
nano code.py
```

![image-257](https://www.freecodecamp.org/news/content/images/2023/06/image-257.png)

`new_branch` 分支上添加 `code.py` 文件 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

```shell
git add code.py
git Commit -m "Commit 10"
```

切回 `main` 分支:

```shell
git checkout main
```

并引入另一个变化:

![image-258](https://www.freecodecamp.org/news/content/images/2023/06/image-258.png)

在文件开头添加了文档字符串 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

是时候提交这些更改:

```shell
git add code.py
git Commit -m "Commit 11"
```

另一个变化:

![image-259](https://www.freecodecamp.org/news/content/images/2023/06/image-259.png)

添加 `@Author` 的描述 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

提交变化:

```shell
git add code.py
git Commit -m "Commit 12"
```

哦，等等，现在我意识到，我是想让你把 `Commit 11` 中引入的更改作为 `new_branch` 的一部分。唉。你能怎么办呢？ 🤔

回顾 git 提交历史:

![image-260](https://www.freecodecamp.org/news/content/images/2023/06/image-260.png)

`Commit 12` 后的历史 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

我希望 `Commit 10` 不只出现在 `main` 分支上，而是同时出现在 `main` 分支和 `new_branch` 上。从视觉上看，我希望把它移到图的下面:

![image-261](https://www.freecodecamp.org/news/content/images/2023/06/image-261.png)

如图所示, 我想让你 `push` "Commit 10" (Source: [Brief](https://youtu.be/3VFsitGUB3s))

你能看清楚我意图? 😇

我们清楚, `rebase` 允许我们重新使用 `new_branch` 分支引入变更,也就是 `Commit 10` 引入的变更,就像这些变更最初是在 `Commit 11`上进行的,而不是在 `Commit 4` 上进行的。

要实现这个目标,你可以使用 `git rebase` 的其他参数。你可以告诉 Git,你想要取 `main` 分支和 `new_branch` 分支的共同祖先 `Commit 4` 之后引入的所有历史变更,并将这部分历史变更的新的基础设置为 `Commit 11`。要实现这个目的,可以使用:

```shell
git rebase -–onto <SHA_OF_Commit_11> main new_branch
```

![image-262](https://www.freecodecamp.org/news/content/images/2023/06/image-262.png)

重置前后的历史记录, `Commit 10` 已经被推送(pushed) (Source: [Brief](https://youtu.be/3VFsitGUB3s))

看看我们美丽的历史! 😍

![image-263](https://www.freecodecamp.org/news/content/images/2023/06/image-263.png)

重置前后的历史记录, `Commit 10 已经被推送(pushed) (Source: [Brief](https://youtu.be/3VFsitGUB3s))

让我们再看一个例子。

假设我开始在一个分支上工作，却犯了错误，从 `feature_branch_1` 而不是从 `main` 开始。
因此，要模拟这种情况，请创建 `feature_branch_1`:

```shell
git checkout main
git checkout -b feature_branch_1
```

删除 `new_branch` 后，图表中就看不到它了:

```shell
git branch -D new_branch
```

创建一个简单的 Python 文件 `1.py`:

![image-264](https://www.freecodecamp.org/news/content/images/2023/06/image-264.png)

新文件 `1.py`,里面有 `print('Hello world!')` (Source: [Brief](https://youtu.be/3VFsitGUB3s))

提交此文件:

```shell
git add 1.py
git Commit -m  "Commit 13"
```

现在(错误地)从 `feature_branch_1`开出新分支:

```shell
git checkout -b feature_branch_2
```

创建新文件 `2.py`:

![image-265](https://www.freecodecamp.org/news/content/images/2023/06/image-265.png)

创建的 `2.py` (Source: [Brief](https://youtu.be/3VFsitGUB3s))

提交该文件:

```shell
git add 2.py
git Commit -m  "Commit 14"
```

再添加一些代码到文件 `2.py`:

![image-266](https://www.freecodecamp.org/news/content/images/2023/06/image-266.png)

修改 `2.py` (Source: [Brief](https://youtu.be/3VFsitGUB3s))

提交该变化:

```shell
git add 2.py
git Commit -m  "Commit 15"
```

到目前为止，您应该有这样的历史记录:

![image-267](https://www.freecodecamp.org/news/content/images/2023/06/image-267.png)

引入 `Commit 15` 的历史 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

切回 `feature_branch_1` 分支，编辑文件 `1.py`:

```shell
git checkout feature_branch_1
```

![image-268](https://www.freecodecamp.org/news/content/images/2023/06/image-268.png)

修改 `1.py` (Source: [Brief](https://youtu.be/3VFsitGUB3s))

提交修改:

```shell
git add 1.py
git Commit -m  "Commit 16"
```

你的历史记录应该是这样的:

![image-270](https://www.freecodecamp.org/news/content/images/2023/06/image-270.png)

引入 `Commit 16` 后的历史 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

说现在你意识到了，你犯了一个错误。你实际上想让 `feature_branch_2` 从 `main` 分支中分出，而不是从 `feature_branch_1` 中分出。

怎样才能做到这一点呢？🤔

试着根据历史图和你所学到的关于 `rebase` 命令的 `--onto` 参数来思考一下。

你想把 `feature_branch_2` 上第一个提交的父分支，也就是 `commit 14`，替换到 `main` 分支的顶部，这里是 `commit 12`，而不是 `feature_branch_1` 的起点，这里是 `commit 13`。因此，你将再次创建一个 _新的基点_，这次是在`feature_branch_2`上的第一个 Commit。

![image-271](https://www.freecodecamp.org/news/content/images/2023/06/image-271.png)

你想要在 `Commit 14` 和 `Commit 15` 之间进行移动（来源：Brief）

你打算怎么做呢？

第一，切到 `feature_branch_2` 分支:

```shell
git checkout feature_branch_2
```

然后你可以执行:

```shell
git rebase -–onto main <SHA_OF_Commit_13>
```

因此，您的 `feature_branch_2` 是基于 `main` 分支而不是 `feature_branch_1` 分支：

![image-272](https://www.freecodecamp.org/news/content/images/2023/06/image-272.png)

执行变基(rebase)后的提交历史（来源：[Brief](https://youtu.be/3VFsitGUB3s)）

该命令的语法是:

```shell
git rebase --onto <new_parent> <old_parent>
```

## 如何在一个单独的分支上执行变基

在查看单个分支的历史时，您也可以使用 git rebase。

让我们看看你是否能在这里帮助我。

假设我是从 `feature_branch_2` 开始工作的，具体来说是编辑了文件 `code.py`。我首先将所有字符串的引号从单引号改为双引号：

![image-273](https://www.freecodecamp.org/news/content/images/2023/06/image-273.png)

在 `code.py` 中将 `'` 改为 `"`（来源：Brief）

然后，我将其进行了暂存（staged）并提交（Committed）：

```shell
git add code.py
git Commit -m "Commit 17"
```

然后我决定在文件开头添加一个新函数:

![image-274](https://www.freecodecamp.org/news/content/images/2023/06/image-274.png)

添加函数 `another_feature` (Source: [Brief](https://youtu.be/3VFsitGUB3s))

然后，我将其进行了暂存（staged）并提交（Committed）:

```shell
git add code.py
git Commit -m "Commit 18"
```

现在我意识到我实际上忘记了将 `main` 用双引号包裹起来（你可能已经注意到了），所以我也做了这个改动:

![image-275](https://www.freecodecamp.org/news/content/images/2023/06/image-275.png)

将 `'__main__'` 改成 `"__main__"`  (Source: [Brief](https://youtu.be/3VFsitGUB3s))

当然, 我将其进行了暂存（staged）并提交（Committed）:

```shell
git add code.py
git Commit -m "Commit 19"
```

现在，让我们来看看历史:

![image-276](https://www.freecodecamp.org/news/content/images/2023/06/image-276.png)

引入 `Commit 19` 之后的提交记录 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

这样看起来不太好，对吧？我的意思是，`Commit 17` 和 `Commit 19`（将`'`改为`"`）是相关的，但它们被无关的 `Commit 18`（我在那里添加了一个新函数）分隔开了。我们能做些什么？🤔 你能帮我吗？

直觉上，我想在这里修改历史:

![image-277](https://www.freecodecamp.org/news/content/images/2023/06/image-277.png)

这些是我想要修改的提交 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

那么，你会怎么做呢？

你说得对！👏🏻

我可以在 `commit 15`的基础上，将历史记录从 `commit 17` 变基(rebase)为 `commit 19`。要做到这一点:

```shell
git rebase --interactive --onto <SHA_OF_Commit_15> <SHA_OF_Commit_15>
```

请注意，我指定了 `Commit 15` 作为提交范围的起点，不包括本次提交。而且我不需要明确指定 `HEAD` 作为最后一个参数。

![image-279](https://www.freecodecamp.org/news/content/images/2023/06/image-279.png)

在单个分支上使用 `rebase --onto` (Source: [Brief](https://youtu.be/3VFsitGUB3s))

按照您的建议运行 `rebase` 命令后（谢谢！😇），我看到了下面的显示：

![image-280](https://www.freecodecamp.org/news/content/images/2023/06/image-280.png)

交互式变基 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

那我该怎么办呢？我想把 `Commit 19` 放在 `Commit 18` 之前，这样它就紧跟在 `Commit 17`之后。我还可以进一步将它们合并在一起，就像这样：

![image-281](https://www.freecodecamp.org/news/content/images/2023/06/image-281.png)

交互式 rebase - 调整提交顺序并合并 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

现在当我被提示输入提交信息时，我可以提供信息 `Commit 17+19`:

![image-282](https://www.freecodecamp.org/news/content/images/2023/06/image-282.png)

输入 Commit 信息 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

现在，让我们来看看我们美丽的提交历史吧:

![image-283](https://www.freecodecamp.org/news/content/images/2023/06/image-283.png)

由此产生的提交历史 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

再次感谢！ 🙌🏻

# 更多变基用户案例 + 更多实践

现在，我希望你已经对 变基(rebase) 的语法感到得心应手了。要真正理解它，最好的办法是理解各种案例，并自己想办法解决它们。

对于接下来的用例，我强烈建议你在我介绍完每个用例后就停止阅读，然后尝试自己解决。

## 如何排除 Commits

假设您在另一个软件仓库中有这样的历史记录:

![image-284](https://www.freecodecamp.org/news/content/images/2023/06/image-284.png)

别的 Commit 提交历史 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

在使用之前，先将 `tag` 存储为 `original_Commit_f`，以便稍后再查看:

```shell
git tag original_Commit_f
```

现在，你实际上并不希望包含 `Commit C`和 `Commit D` 中的更改。你可以像之前一样使用交互式 rebase，删除它们的改动。或者，也可以再次使用 `git rebase--onto`。如何使用 `--onto`来 `移除(remove)` 这两个提交(commit)呢？

你可以在 `commit B`的基础上重建 `HEAD`，原来的父提交是 `commit D`，现在应该是 `commit B`,看提交历史记录：

![image-284](https://www.freecodecamp.org/news/content/images/2023/06/image-284.png)

再次回顾提交历史 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

 rebase 使 `Commit B` 成为 `Commit E` 的 _基(base)_，意味着 `移动(moving)` `Commit E`和 `Commit F`，并赋予它们另一个 _基(base)_ -- `Commit B`。你能自己想出这个命令吗？

```shell
git rebase --onto <SHA_OF_Commit_B> <SHA_OF_Commit_D> HEAD
```

请注意，使用上述语法不会移动 `main` 指向新的 Commit，因此结果是一个 `分离的(detached)` `HEAD`。如果你使用 `gg` 或其他显示分支历史的工具，这可能会让你感到困惑：

![image-285](https://www.freecodecamp.org/news/content/images/2023/06/image-285.png)

用 `--onto` 变基(rebase) 会导致一个分离(detached)的 `HEAD` （来源：[Brief](https://youtu.be/3VFsitGUB3s))

但如果使用 `git log`（或我的别名 `git lol`），就能看到想要的历史记录：

![image-286](https://www.freecodecamp.org/news/content/images/2023/06/image-286.png)

由此形成的提交历史 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

我不知道你怎么想，但这些事情让我非常开心。 😊😇

顺便说一下，你可以省略前面命令中的 `HEAD`，因为这是第三个参数的默认值。因此，只需使用:

```shell
git rebase --onto <SHA_OF_Commit_B> <SHA_OF_Commit_D>
```

会有同样的效果。最后一个参数实际上是告诉 Git 当前提交序列的终点在哪里。所以有三个参数的 `git rebase --onto` 的语法是

```shell
git rebase --onto <new_parent> <old_parent> <until>
```

## 如何在不同分支间移动提交

因此，让我们回到之前的提交历史:

```shell
git checkout original_Commit_f
```

现在我只想让 `commit E`位于基于 `commit B` 的分支上。也就是说，我想建立一个新的分支，从 `commit B`分支出去，其中只有 `commit E`。

![image-287](https://www.freecodecamp.org/news/content/images/2023/06/image-287.png)

考虑到 `commit E` 的当前历史 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

那么，这意味着什么呢？请看上图。我应该变基(rebase)哪个提交（或哪些提交），哪个提交是新的基础(base)？

我知道在这里我可以让你来 😉

我想要的是取出 `commit E`，只有这个提交，并将其基础更改为 `commit B`。换句话说，将`commit E`引入的更改 `重放(replay)` 到 `commit B`上。

你能将这个逻辑应用到 `git rebase` 的语法中吗？

这里是语法（这次我用 `<Commit_B>` 代替 `<SHA_OF_Commit_B>`，为了简洁起见）：

```shell
git rebase –-onto <Commit_B> <Commit_D> <Commit_E>
```

现在的提交历史是这样的:

![image-288](https://www.freecodecamp.org/news/content/images/2023/06/image-288.png)

变基后的提交历史 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

棒极了！

# 关于冲突的说明

请注意，进行变基时可能会遇到与合并时一样的冲突。可能会出现冲突，因为在变基时，您试图将补丁(patches)应用在不同的基础上，也许这些补丁(patches)并不适用。

例如，再次考虑之前的代码库，特别是考虑由 `main` 指向的 `commit 12` 引入的更改：

```shell
git show main
```

![image-289](https://www.freecodecamp.org/news/content/images/2023/06/image-289.png)

在 `Commit 12` 中引入的补丁 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

我在[上一篇文章](https://www.freecodecamp.org/news/git-diff-and-patch/)中已经详细介绍了 `git diff` 的格式，但为了快速提醒大家，这个 Commit 会指示 Git 在两行上下文之后添加一行：

````
```shell
This is a sample file
````

而在这三行上下文之前:

````
```
def new_feature():
  print('new feature')
````

假设您正试图将 `commit 12` 重定向到另一个提交上。如果由于某种原因，这些上下文行并不存在于您要重置的 Commit 上的补丁中，那么就会产生冲突。要进一步了解冲突以及如何解决冲突，请参阅 [本指南](https://www.freecodecamp.org/news/the-definitive-guide-to-git-merge/)。

# 放眼全局

![image-290](https://www.freecodecamp.org/news/content/images/2023/06/image-290.png)

比较变基(rebase)和合并(merge)（来源：[Brief](https://youtu.be/3VFsitGUB3s)）

在本指南的开始，我提到了 `git merge` 和 `git rebase` 之间的相似性：它们都用于整合不同历史中引入的更改。

但是，正如你现在所知，它们在操作方式上有很大的不同。合并导致了一个分叉的历史，而变基导致了一个线性的历史。在两种情况下都可能出现冲突。表格中还有一列需要特别关注。

现在你知道了什么是 `Git 变基(rebase)`，以及如何使用交互式变基或 `rebase --onto`，希望你理解，`git rebase` 是一个超级强大的工具。然而，与合并相比，它有一个巨大的缺点。

Git 变基改变了提交历史。

这意味着你**不应该**对存在于你本地代码库之外的并且其他人可能以此为基础进行提交的提交进行变基。

换句话说，如果问题涉及的只有你在本地创建的提交，那就继续使用变基，尽情操作。

但是，如果这些提交已经被推送，这可能会导致一个巨大的问题，因为其他人可能依赖这些提交，而后来你覆盖了它们，然后你和他们将拥有存储库的不同版本。

这与我们所见的不修改历史的 `merge` 不同。

例如，考虑最后一个情况，我们进行了变基，导致了这样的提交历史:

![image-288](https://www.freecodecamp.org/news/content/images/2023/06/image-288.png)

变基后的提交历史（来源：[Brief](https://youtu.be/3VFsitGUB3s)）

现在，假设我已经将这个分支推送到远程仓库。在我推送了这个分支之后，另一个开发人员拉取了它，并从 `commit C`创建了一个新分支。另一个开发人员不知道与此同时，我正在本地对我的分支进行变基，并且稍后会再次推送它。

这导致了一个不一致：另一个开发人员从一个在我的代码库副本上不再可用的提交中进行工作。

我不会在本指南中详细阐述这到底会导致什么，因为我的主要观点是你绝对应该避免这种情况。如果你对实际会发生什么感兴趣，我会在下面留下一个有用资源的链接。现在，让我们总结一下我们所讨论的内容。

# 回顾

在本教程中，你将学习到 `git rebase` 这个在 Git 中重写历史的超级强大工具。你考虑了一些`git rebase`可能有用的用例，以及如何使用一个、两个或三个参数，使用或不使用`--onto`开关。

我希望我能让你相信，`git rebase` 不仅功能强大，而且一旦掌握了要领，使用起来也很简单。它是一个 `复制粘贴(copy-paste)` 提交（或者更准确地说，是补丁）的工具。它是一个非常有用的工具。


# 其他参考资料

- [Git Internals YouTube 播放列表 - 作者：Brief](https://www.youtube.com/playlist?list=PL9lx0DXCC4BNUby5H58y6s2TQVLadV8v7) (my YouTube channel).
- [Omer 上一篇关于 Git 内部结构的文章。](https://www.freecodecamp.org/news/git-internals-objects-branches-create-repo/)
- [Omer 的 Git UNDO 教程--用 Git 重写历史](https://medium.com/@Omer_Rosenbaum/git-undo-how-to-rewrite-git-history-with-confidence-d4452e2969c2).
- [关于变基的 Git 文档](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)
- [分支和 rebase 的强大功能](https://jwiegley.github.io/git-from-the-bottom-up/1-Repository/7-branching-and-the-power-of-rebase.html)
- [交互式变基](https://jwiegley.github.io/git-from-the-bottom-up/1-Repository/8-interactive-rebasing.html)
- [Git rebase --onto](https://womanonrails.com/git-rebase-onto)

# **关于作者**

[Omer Rosenbaum](https://www.linkedin.com/in/omer-rosenbaum-034a08b9/) 是 [Swimm](https://swimm.io/) 的首席技术官。他是[Brief YouTube 频道](https://youtube.com/@BriefVid) 的作者。他也是一位网络安全培训专家，创立了 Checkpoint Security Academy。他是 [《计算机网络》（希伯来语版）](https://data.cyber.org.il/networks/networks.pdf) 的作者。你可以在 [Twitter](https://twitter.com/Omer_Ros) 上找到他.
