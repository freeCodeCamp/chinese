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

[在之前的教程中](https://www.freecodecamp.org/news/the-definitive-guide-to-git-merge/)，我们对 `git merge` 有了相当的了解。我们看到，在执行合并时，我们会创建一个 **合并提交(merge commit)**,这个提交的内容是两个分支的组合，它也有两个父分支，每个分支一个。

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

如果我们通过执行`git diff main <SHA_OF_COMMIT_5>`来看看 `Commit 5` 引入的差异:

![image-199](https://www.freecodecamp.org/news/content/images/2023/06/image-199.png)

运行 `git diff` 来观察 `Commit 5` 引入的补丁 (Source： [简介](https://youtu.be/3VFsitGUB3s))

如果你想玩玩我用的版本库，自己试试这些命令，你可以得到这个版本库[这里](https://github.com/Omerr/rebase_playground)。

你可以看到，在这个提交中，John 开始创作一首名为 `Lucy in the Sky with Diamonds` 的歌曲：

![image-200](https://www.freecodecamp.org/news/content/images/2023/06/image-200.png)

`git diff`的输出结果,`Commit 5` 引入的补丁(patch) (来源: [Brief](https://youtu.be/3VFsitGUB3s))

提醒一下，你也可以使用`git show`命令来获得同样的输出：

```shell
git show <SHA_OF_COMMIT_5>
```

现在，如果你`cherry-pick`这个提交，你将在活动分支(active branch)上专门引入这个改动。先切换到 "main":

`git checkout main` (or `git switch main`)

并创建另一个分支，只是为了明确:

`git checkout -b my_branch` (or `git switch -c my_branch`)

![image-201](https://www.freecodecamp.org/news/content/images/2023/06/image-201.png)

从 `main` 分支创建出 `my_branch` 分支 (源自: [Brief](https://youtu.be/3VFsitGUB3s))

`cherry-pick`这个提交(commit):

```shell
git cherry-pick <SHA_OF_COMMIT_5>
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

这个命令被称为 `rebase`，因为它改变了运行它的分支的基点提交(base commit)。也就是说，在运行`git rebase`之前，`paul_branch`的基点提交是 `Commit 4`,因为这是分支 `诞生(born)` 的地方（从`main`开始）。使用 `rebase` 时，你要求 Git 给它另一个基点，也就是假装它是从 `Commit 6` 诞生的。

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
git reset -–hard <ORIGINAL_COMMIT 4>
```

![image-238](https://www.freecodecamp.org/news/content/images/2023/06/image-238.png)

`撤销(undoing)` 上次合并操作 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

通过 rebase 进行撤销:

```shell
git checkout paul_branch
git reset -–hard <ORIGINAL_COMMIT 9>
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

在提交图(commit graph) 中继续向后退:

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
git rebase -i <SHA_OF_COMMIT_4>
```

或者，由于 `main` 指向 `Commit 4`，我们只需运行:

```shell
git rebase -i main
```

通过运行这条命令，你会告诉 Git 使用一个新的基(base) `Commit 4`。这样，Git 就会回溯到所有在 `Commit 4`之后提交的、从当前的 `HEAD` 可以到达的提交，并重放(replay) 这些提交。

对于每一个被重放的提交，Git 都会询问我们想对它做什么:

![image-250](https://www.freecodecamp.org/news/content/images/2023/06/image-250.png)

`git rebase -i main` 会提示您选择对每次提交的处理方式 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

在这种情况下，将提交视为补丁是很有用的。也就是说，`commit 7` 就是 `commit 7` 在其父版本之上引入的补丁"。

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
git commit -m "Commit 10"
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
git commit -m "Commit 11"
```

另一个变化:

![image-259](https://www.freecodecamp.org/news/content/images/2023/06/image-259.png)

添加 `@Author` 的描述 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

提交变化:

```shell
git add code.py
git commit -m "Commit 12"
```

哦，等等，现在我意识到，我是想让你把 `Commit 11` 中引入的更改作为 `new_branch` 的一部分。唉。你能怎么办呢？ 🤔

回顾 git 提交历史:

![image-260](https://www.freecodecamp.org/news/content/images/2023/06/image-260.png)

`Commit 12` 后的历史 (Source: [Brief](https://youtu.be/3VFsitGUB3s))

我希望 `Commit 10` 不只出现在 `main` 分支上，而是同时出现在 `main` 分支和 `new_branch` 上。从视觉上看，我希望把它移到图的下面:

![image-261](https://www.freecodecamp.org/news/content/images/2023/06/image-261.png)

Visually, I want you to "push" "Commit 10" (Source: [Brief](https://youtu.be/3VFsitGUB3s))

Can you see where I am going? 😇

Well, as we understand, rebase allows us to basically _replay_ the changes introduced in `new_branch`, those introduced in "Commit 10", as if they had been originally conducted on "Commit 11", rather than "Commit 4".

To do that, you can use other arguments of `git rebase`. You'd tell Git that you want to take all the history introduced between the common ancestor of `main` and `new_branch`, which is "Commit 4", and have the new base for that history be "Commit 11". To do that, use:

```shell
git rebase -–onto <SHA_OF_COMMIT_11> main new_branch
```

![image-262](https://www.freecodecamp.org/news/content/images/2023/06/image-262.png)

The history before and after the rebase, "Commit 10" has been "pushed" (Source: [Brief](https://youtu.be/3VFsitGUB3s))

And look at our beautiful history! 😍

![image-263](https://www.freecodecamp.org/news/content/images/2023/06/image-263.png)

The history before and after the rebase, "Commit 10" has been "pushed" (Source: [Brief](https://youtu.be/3VFsitGUB3s))

Let's consider another case.

Say I started working on a branch, and by mistake I started working from `feature_branch_1`, rather than from `main`.

So to emulate this, create `feature_branch_1`:

```shell
git checkout main
git checkout -b feature_branch_1
```

And erase `new_branch` so you don't see it in the graph anymore:

```shell
git branch -D new_branch
```

Create a simple Python file called `1.py`:

![image-264](https://www.freecodecamp.org/news/content/images/2023/06/image-264.png)

A new file, `1.py`, with `print('Hello world!')` (Source: [Brief](https://youtu.be/3VFsitGUB3s))

Stage and commit this file:

```shell
git add 1.py
git commit -m  "Commit 13"
```

Now branched out (by mistake) from `feature_branch_1`:

```shell
git checkout -b feature_branch_2
```

And create another file, `2.py`:

![image-265](https://www.freecodecamp.org/news/content/images/2023/06/image-265.png)

Creating `2.py` (Source: [Brief](https://youtu.be/3VFsitGUB3s))

Stage and commit this file as well:

```shell
git add 2.py
git commit -m  "Commit 14"
```

And introduce some more code to `2.py`:

![image-266](https://www.freecodecamp.org/news/content/images/2023/06/image-266.png)

Modifying `2.py` (Source: [Brief](https://youtu.be/3VFsitGUB3s))

Stage and commit these changes too:

```shell
git add 2.py
git commit -m  "Commit 15"
```

So far you should have this history:

![image-267](https://www.freecodecamp.org/news/content/images/2023/06/image-267.png)

The history after introducing "Commit 15" (Source: [Brief](https://youtu.be/3VFsitGUB3s))

Get back to `feature_branch_1` and edit `1.py`:

```shell
git checkout feature_branch_1
```

![image-268](https://www.freecodecamp.org/news/content/images/2023/06/image-268.png)

Modifying `1.py` (Source: [Brief](https://youtu.be/3VFsitGUB3s))

Now stage and commit:

```shell
git add 1.py
git commit -m  "Commit 16"
```

Your history should look like this:

![image-270](https://www.freecodecamp.org/news/content/images/2023/06/image-270.png)

The history after introducing "Commit 16" (Source: [Brief](https://youtu.be/3VFsitGUB3s))

Say now you realize, you've made a mistake. You actually wanted `feature_branch_2` to be born from the `main` branch, rather than from `feature_branch_1`.

How can you achieve that? 🤔

Try to think about it given the history graph and what you've learned about the `--onto` flag for the `rebase` command.

Well, you want to "replace" the parent of your first commit on `feature_branch_2`, which is "Commit 14", to be on top of `main` branch, in this case, "Commit 12", rather than the beginning of `feature_branch_1`, in this case, "Commit 13". So again, you will be creating a _new base,_ this time for the first commit on `feature_branch_2`.

![image-271](https://www.freecodecamp.org/news/content/images/2023/06/image-271.png)

You want to move around "Commit 14" and "Commit 15" (Source: [Brief](https://youtu.be/3VFsitGUB3s))

How would you do that?

First, switch to `feature_branch_2`:

```shell
git checkout feature_branch_2
```

And now you can use:

```shell
git rebase -–onto main <SHA_OF_COMMIT_13>
```

As a result, you have `feature_branch_2` based on `main` rather than `feature_branch_1`:

![image-272](https://www.freecodecamp.org/news/content/images/2023/06/image-272.png)

The commit history after performing rebase (Source: [Brief](https://youtu.be/3VFsitGUB3s))

The syntax is of the command is:

```shell
git rebase --onto <new_parent> <old_parent>
```

## How to rebase on a single branch

You can also use `git rebase` while looking at a history of a single branch.

Let's see if you can help me here.

Say I worked from `feature_branch_2`, and specifically edited the file `code.py`. I started by changing all strings to be wrapped by double quotes rather than single quotes:

![image-273](https://www.freecodecamp.org/news/content/images/2023/06/image-273.png)

Changing `'` into `"` in `code.py` (Source: [Brief](https://youtu.be/3VFsitGUB3s))

Then, I staged and committed:

```shell
git add code.py
git commit -m "Commit 17"
```

I then decided to add a new function at the beginning of the file:

![image-274](https://www.freecodecamp.org/news/content/images/2023/06/image-274.png)

Adding the function `another_feature` (Source: [Brief](https://youtu.be/3VFsitGUB3s))

Again, I staged and committed:

```shell
git add code.py
git commit -m "Commit 18"
```

And now I realized I actually forgot to change the single quotes to double quotes wrapping the `__main__` (as you might have noticed), so I did that too:

![image-275](https://www.freecodecamp.org/news/content/images/2023/06/image-275.png)

Changing `'__main__'` into `"__main__"` (Source: [Brief](https://youtu.be/3VFsitGUB3s))

Of course, I staged and committed this change:

```shell
git add code.py
git commit -m "Commit 19"
```

Now, consider the history:

![image-276](https://www.freecodecamp.org/news/content/images/2023/06/image-276.png)

The commit history after introducing "Commit 19" (Source: [Brief](https://youtu.be/3VFsitGUB3s))

It isn't really nice, is it? I mean, I have two commits that are related to one another, "Commit 17" and "Commit 19" (turning `'`s into `"`s), but they are split by the unrelated "Commit 18" (where I added a new function). What can we do? 🤔 Can you help me?

Intuitively, I want to edit the history here:

![image-277](https://www.freecodecamp.org/news/content/images/2023/06/image-277.png)

These are the commits I want to edit (Source: [Brief](https://youtu.be/3VFsitGUB3s))

So, what would you do?

You are right! 👏🏻

I can rebase the history from "Commit 17" to "Commit 19", on top of "Commit 15". To do that:

```
git rebase --interactive --onto <SHA_OF_COMMIT_15> <SHA_OF_COMMIT_15>
```

Notice I specified "Commit 15" as the beginning of the range of commits, excluding this commit. And I didn't need to explicitly specify `HEAD` as the last parameter.

![image-279](https://www.freecodecamp.org/news/content/images/2023/06/image-279.png)

Using `rebase --onto` on a single branch (Source: [Brief](https://youtu.be/3VFsitGUB3s))

After following your advice and running the `rebase` command (thanks! 😇) I get the following screen:

![image-280](https://www.freecodecamp.org/news/content/images/2023/06/image-280.png)

Interactive rebase (Source: [Brief](https://youtu.be/3VFsitGUB3s))

So what would I do? I want to put "Commit 19" _before_ "Commit 18", so it comes right after "Commit 17". I can go further and squash them together, like so:

![image-281](https://www.freecodecamp.org/news/content/images/2023/06/image-281.png)

Interactive rebase - changing the order of commit and squashing (Source: [Brief](https://youtu.be/3VFsitGUB3s))

Now when I get prompted for a commit message, I can provide the message "Commit 17+19":

![image-282](https://www.freecodecamp.org/news/content/images/2023/06/image-282.png)

Providing a commit message (Source: [Brief](https://youtu.be/3VFsitGUB3s))

And now, see our beautiful history:

![image-283](https://www.freecodecamp.org/news/content/images/2023/06/image-283.png)

The resulting history (Source: [Brief](https://youtu.be/3VFsitGUB3s))

Thanks again! 🙌🏻

# More Rebase Use Cases + More Practice

By now I hope you feel comfortable with the syntax of rebase. The best way to actually understand it is to consider various cases and figure out how to solve them yourself.

With the upcoming use cases, I strongly suggest you stop reading after I've introduced each use case, and then try to solve it on your own.

## How to Exclude Commits

Say you have this history on another repo:

![image-284](https://www.freecodecamp.org/news/content/images/2023/06/image-284.png)

Another commit history (Source: [Brief](https://youtu.be/3VFsitGUB3s))

Before playing around with it, store a tag to "Commit F" so you can get back to it later:

```shell
git tag original_commit_f
```

Now, you actually don't want the changes in "Commit C" and "Commit D" to be included. You could use an interactive rebase like before and remove their changes. Or, could can use again `git rebase -–onto`. How would you use `--onto` in order to "remove" these two commits?

You can rebase `HEAD` on top of "Commit B", where the old parent was actually "Commit D", and now it should be "Commit B". Consider the history again:

![image-284](https://www.freecodecamp.org/news/content/images/2023/06/image-284.png)

The history again (Source: [Brief](https://youtu.be/3VFsitGUB3s))

Rebasing so that "Commit B" is the base of "Commit E", means "moving" both "Commit E" and "Commit F", and giving them another _base_ – "Commit B". Can you come up with the command yourself?

```
git rebase --onto <SHA_OF_COMMIT_B> <SHA_OF_COMMIT_D> HEAD
```

Notice that using the syntax above would not move `main` to point to the new commit, so the result is a "detached" `HEAD`. If you use `gg` or another tool that displays the history reachable from branches it might confuse you:

![image-285](https://www.freecodecamp.org/news/content/images/2023/06/image-285.png)

Rebasing with `--onto` results in a detached `HEAD` (Source: [Brief](https://youtu.be/3VFsitGUB3s))

But if you simply use `git log` (or my alias `git lol`), you will see the desired history:

![image-286](https://www.freecodecamp.org/news/content/images/2023/06/image-286.png)

The resulting history (Source: [Brief](https://youtu.be/3VFsitGUB3s))

I don't know about you, but these kinds of things make me really happy. 😊😇

By the way, you could omit `HEAD` from the previous command as this is the default value for the third parameter. So just using:

```shell
git rebase --onto <SHA_OF_COMMIT_B> <SHA_OF_COMMIT_D>
```

Would have the same effect. The last parameter actually tells Git where the end of the current sequence of commits to rebase is. So the syntax of `git rebase --onto` with three arguments is:

```shell
git rebase --onto <new_parent> <old_parent> <until>
```

## How to move commits across branches

So let's say we get to the same history as before:

```shell
git checkout original_commit_f
```

And now I want only "Commit E", to be on a branch based on "Commit B". That is, I want to have a new branch, branching from "Commit B", with only "Commit E".

![image-287](https://www.freecodecamp.org/news/content/images/2023/06/image-287.png)

The current history, considering "Commit E" (Source: [Brief](https://youtu.be/3VFsitGUB3s))

So, what does this mean in terms of rebase? Consider the image above. What commit (or commits) should I rebase, and which commit would be the new base?

I know I can count on you here 😉

What I want is to take "Commit E", and this commit only, and change its base to be "Commit B". In other words, to _replay_ the changes introduced in "Commit E" onto "Commit B".

Can you apply that logic to the syntax of `git rebase`?

Here it is (this time I'm writing `<COMMIT_B>` instead of `<SHA_OF_COMMIT_B>`, for brevity):

```shell
git rebase –-onto <COMMIT_B> <COMMIT_D> <COMMIT_E>
```

Now the history looks like so:

![image-288](https://www.freecodecamp.org/news/content/images/2023/06/image-288.png)

The history after rebase (Source: [Brief](https://youtu.be/3VFsitGUB3s))

Awesome!

# A Note About Conflicts

Note that when performing a rebase, you may run into conflicts just as when merging. You may have conflicts because when rebasing, you are trying to apply patches on a different base, perhaps where the patches do not apply.

For example, consider the previous repository again, and specifically, consider the change introduced in "Commit 12", pointed to by `main`:

```shell
git show main
```

![image-289](https://www.freecodecamp.org/news/content/images/2023/06/image-289.png)

The patch introduced in "Commit 12" (Source: [Brief](https://youtu.be/3VFsitGUB3s))

I already covered the format of `git diff` in detail in [a previous post](https://www.freecodecamp.org/news/git-diff-and-patch/), but as a quick reminder, this commit instructs Git to add a line after the two lines of context:

````
```shell
This is a sample file
````

And before these three lines of context:

````
```
def new_feature():
  print('new feature')
````

Say you are trying to rebase "Commit 12" onto another commit. If, for some reason, these context lines don't exist as they do in the patch on the commit you are rebasing _onto_, then you will have a conflict. To learn more about conflicts and how to resolve them, see [this guide](https://www.freecodecamp.org/news/the-definitive-guide-to-git-merge/).

# Zooming Out for the Big Picture

![image-290](https://www.freecodecamp.org/news/content/images/2023/06/image-290.png)

Comparing rebase and merge (Source: [Brief](https://youtu.be/3VFsitGUB3s))

In the beginning of this guide, I started by mentioning the similarity between `git merge` and `git rebase`: both are used to integrate changes introduced in different histories.

But, as you now know, they are very different in how they operate. While merging results in a diverged history, rebasing results in a linear history. Conflicts are possible in both cases. And there is one more column described in the table above that requires some close attention.

Now that you know what "Git rebase" is, and how to use interactive rebase or `rebase --onto`, as I hope you agree, `git rebase` is a super powerful tool. Yet, it has one huge drawback when compared with merging.

Git rebase changes the history.

This means that you should **not** rebase commits that exist outside your local copy of the repository, and that other people may have based their commits on.

In other words, if the only commits in question are those you created locally – go ahead, use rebase, go wild.

But if the commits have been pushed, this can lead to a huge problem – as someone else may rely on these commits, that you later overwrite, and then you and they will have different versions of the repository.

This is unlike `merge` which, as we have seen, does not modify history.

For example, consider the last case where we rebased and resulted in this history:

![image-288](https://www.freecodecamp.org/news/content/images/2023/06/image-288.png)

The history after rebase (Source: [Brief](https://youtu.be/3VFsitGUB3s))

Now, assume that I have already pushed this branch to the remote. And after I had pushed the branch, another developer pulled it and branched out from "Commit C". The other developer didn't know that meanwhile, I was locally rebasing my branch, and would later push it again.

This results in an inconsistency: the other developer works from a commit that is no longer available on my copy of the repository.

I will not elaborate on what exactly this causes in this guide, as my main message is that you should definitely avoid such cases. If you're interested in what would actually happen, I'll leave a link to a useful resource below. For now, let's summarize what we have covered.

# Recap

In this tutorial, you learned about `git rebase`, a super-powerful tool to rewrite history in Git. You considered a few use cases where `git rebase` can be helpful, and how to use it with one, two, or three parameters, with and without the `--onto` switch.

I hope I was able to convince you that `git rebase` is powerful – but also that it is quite simple once you get the gist. It is a tool to "copy-paste" commits (or, more accurately, patches). And it's a useful tool to have under your belt.

# Additional References

- [Git Internals YouTube playlist — by Brief](https://www.youtube.com/playlist?list=PL9lx0DXCC4BNUby5H58y6s2TQVLadV8v7) (my YouTube channel).
- [Omer's previous post about Git internals.](https://www.freecodecamp.org/news/git-internals-objects-branches-create-repo/)
- [Omer's tutorial about Git UNDO - rewriting history with Git](https://medium.com/@Omer_Rosenbaum/git-undo-how-to-rewrite-git-history-with-confidence-d4452e2969c2).
- [Git docs on rebasing](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)
- [Branching and the power of rebase](https://jwiegley.github.io/git-from-the-bottom-up/1-Repository/7-branching-and-the-power-of-rebase.html)
- [Interactive rebasing](https://jwiegley.github.io/git-from-the-bottom-up/1-Repository/8-interactive-rebasing.html)
- [Git rebase --onto](https://womanonrails.com/git-rebase-onto)

# **\*\***About the Author**\*\***

[Omer Rosenbaum](https://www.linkedin.com/in/omer-rosenbaum-034a08b9/) is [Swimm](https://swimm.io/)’s Chief Technology Officer. He's the author of the [Brief YouTube Channel](https://youtube.com/@BriefVid). He's also a cyber training expert and founder of Checkpoint Security Academy. He's the author of [Computer Networks (in Hebrew)](https://data.cyber.org.il/networks/networks.pdf). You can find him on [Twitter](https://twitter.com/Omer_Ros).
