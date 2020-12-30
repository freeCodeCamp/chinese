> * 原文地址：[A Visual Guide to Git Internals — Objects, Branches, and How to Create a Repo From Scratch Git 内部构建可视指南——对象、分支以及如何从头开始创建仓库](https://www.freecodecamp.org/news/git-internals-objects-branches-create-repo/)
> * 原文作者：Omer Rosenbaum
> * 译者：zhannicholas
> * 校对者：

![Git 内部原理图解——对象、分支以及如何从零开始建仓库](https://images.unsplash.com/photo-1501084291732-13b1ba8f0ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc3M3wwfDF8c2VhcmNofDI5fHx8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=2000)

我们中的许多人每天都在使用 `git`，但是有多少人知道它的内部是怎么运作的呢？

例如我们使用 `git commit` 时发生了什么？提交（commit）与提交之间保存的是什么？两次提交之间难道只是文件的差异（diff）吗？如果是，这个差异是如何编码的？还是说每次提交都会保存一个当前仓库的完整快照（snapshot）呢？我们使用 `git init` 时到底发生了什么？

很多 `git` 的使用者都不知道这几个问题的答案，但这又有什么关系呢？

首先，作为专业人员，我们应当努力弄清楚手中使用的工具，尤其是那些我们一直都在使用的——比如 `git`。

但是我深刻地意识到，理解 Git 的工作原理在很多情况下都非常有用——不管是解决合并冲突、进行有趣的变基（rebase）操作，还是在某些东西变得有点不对劲的时候。

如果你有足够的 `git` 经验，对 `git pull`、`git push`、`git add` 或 `git commit` 这些命令得心应手，你会从本文中获益。

不过，为了确保我们在 `git` 的原理（尤其是本文上下所使用的术语）上步调一致，我们将从概览开始。

我也在 YouTube 上传了一个涵盖本文所有内容的系列视频——欢迎[在此][1]观看。

# 本教程的内容

我们将对日常使用的 `git` 的内部运行原理有一个比较深入的理解。

我们会从对象（object）——**blob**、**树对象（tree）** 和 **提交对象（commit）** 开始，然后简单讨论一下 **分支（branch）** 及其实现方式，之后会深入 **工作目录（working directory）**、**暂存区（staging area）** 和 **仓库（repository）**。

我们会确保理解了这些术语是与我们用来创建新仓库的那些命令之间是如何关联的。

接下来，我们会从零开始创建一个仓库——不使用 `git init`、`git add` 或 `git commit`。这会在我们使用 `git` 的过程中，**加深我们对其内部正在发生的事情的理解**。

我们也会创建新的分支、在分支间切换，再进行一些提交——全程不使用 `git branch` 或 `git checkout`。

在本文结束之前，**你会觉得自己真的 _理解了_ `git`**。你准备好了吗？😎

> 译者注：建议读者配合[Git 内部原理](https://git-scm.com/book/zh/v2/Git-内部原理-底层命令与上层命令)阅读本文。

# Git 对象——blob、tree 和 commit
> 译者注：译文中的 **数据对象**、**树对象** 和 **提交对象** 指的就是 blob、tree 和 commit 这三者。因为 Git 官网的文档[Git 内部原理 - Git 对象](https://git-scm.com/book/zh/v2/Git-内部原理-Git-对象)对三者进行了这样的翻译，本文是为了与其保持一致。但由于 blob 一词的特殊性，译文会直接保留原词，而不是将其翻译为“数据对象”。

将 `git` 看成一个文件系统（尤其是该系统的实时快照）是很有用的。

一个文件系统从 _根目录（root directory）_ 开始（在基于 UNIX 的系统中是 `/`），通常也会包含其它的目录（例如 `/usr` 或 `/bin`）。这些目录会包含其它的目录和（或）文件（例如 `/usr/1.txt`）。

在 `git` 中，文件的内容存储在一些被称为 **blob** （二进制大对象）的对象中。

**blob** 与文件的不同在于，文件还会包含元数据（meta-data）。例如一个文件会“记住”它的创建时间，如果你把它移动到另一个目录，它的创建时间是不会改变的。

相反，**blob** 只是内容——数据的二进制流。除了内容以外，**blob** 不会记录它的创建时间、名字或任何其它东西。

`git` 中的 **blob** 通过 [SHA-1 哈希值][2] 唯一标识。SHA-1 哈希值由 20 个字节（byte）组成，通常表示成 40 个十六进制形式的字符。在这篇文章中，我们有时只会展示这个哈希值的前几个字符。

![Blob 有对应的 SHA-1 哈希值](https://www.freecodecamp.org/news/content/images/2020/12/image-34.png)

在 `git` 中，**树对象（tree）** 相当于目录。一个 **树对象** 基本上就是一个目录列表，它引用着 **blob** 和其它的 **树对象**。

**树对象** 也用 SHA-1 哈希值唯一标识，它通过其它对象（**blob** 或 **树对象**）的 SHA-1 哈希值引用它们。

![树对象是一个目录列表](https://www.freecodecamp.org/news/content/images/2020/12/image-35.png)

注意 **CAFE7** 这个 **树对象** 指向了 **blob F92A0**（_pic.png_），在另一个 **树对象** 中，同一个 **blob** 可能会有不同的名字。

![树对象可能包含子树对象和其它 blob](https://www.freecodecamp.org/news/content/images/2020/12/image-36.png)

上面这张图相当于一个文件系统，这个文件系统有一个根目录，根目录下有一个位于 `/test.js` 的文件和一个名为 `/docs` 的目录，`/docs` 目录下有两个文件：`/docs/pic.png` 和 `/docs/1.txt`。

现在是时候捕获该文件系统的一个快照了，把那个时刻存在的所有文件连同它们的内容保存下来。

在 `git` 中，一个快照就是一个 **提交（commit）**。一个 **提交** 对象包括一个指向主要 **树对象**（根目录）的指针和一些像 **提交者**、**提交信息** 和 **提交时间** 这样的元数据。

在大多数情况下，一个 **提交** 还会有一个或多个父 **提交**——之前的快照。当然，**提交** 对象也通过它们的 SHA-1 哈希值唯一标识。这些哈希值就是我们使用 `git log` 命令时看到的那些哈希值。

![提交对象是某个时刻的快照。它引用着树的根节点。由于这是第一次提交，它没有父节点](https://www.freecodecamp.org/news/content/images/2020/12/image-37.png)

每个 **提交** 都持有 _完整的快照_，并不只是与之前 **提交** 之前的差异。

那是它是怎么工作的呢？难道它不代表我们每次提交都必须保存很多数据吗？

让我们来看看改变一个文件的内容会发生什么。我们编辑 `1.txt`，加一个感叹号——也就是把文件的内容由 `HELLO WORLD` 变为 `HELLO WORLD!`。

这个改变意味着我们会有一个新的 **blob**，它有新的 SHA-1 哈希值。这是有意义的，因为 `sha1("HELLO WORLD")` 与 `sha1("HELLO WORLD!")` 并不相同。

![改变 blob 会得到新的 SHA-1 值](https://www.freecodecamp.org/news/content/images/2020/12/image-38.png)

由于我们得到了一个新的哈希值，所以对应 **树对象** 的目录也会改变。毕竟，我们的 **树对象** 不再指向 **blob 73D8A** 了，而是指向了 **blob 62E7A**。当我们改变 **树对象** 的内容时，我们也改变了它的哈希值。

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/12/image-39.png">
    <figcaption style="text-align: center">blob 变了，指向它的树对象也需要变</figcaption>
</figure>

现在，由于原来那个 **树对象** 的哈希值已经不同了，我们也需要改变它的 **父树对象**——后者不再指向 **tree CAFE7**了，而是指向了 **tree 246001**。最终，**父树对象** 也会有一个新的哈希值。

![根节点也变了，它的哈希值也变了](https://www.freecodecamp.org/news/content/images/2020/12/image-40.png)

几乎做好创建一个新 **提交** 对象的准备了，我们好像会再一次保存很多的数据——整个文件系统。但是真的有必要这么做吗？

实际上，一些对象（尤其是 **blob** 对象）相比起之前的提交来说没有任何改变——**blob F92A0**仍然原封不动，**blob F00D1** 也一样。

这就是其中的秘诀——只有对象改变了，我们才再次保存它。在这个例子中，我们不需要再次保存 **blob F92A0** 和 **blob F00b1**。我们只需要通过它们的哈希值引用它们，然后我们可以创建 **提交** 对象。

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/12/image-41.png">
    <figcaption style="text-align: center">那些没有丝毫变化的 blob 是通过它们的哈希值被引用的</figcaption>
</figure>

由于这次 **提交** 不是第一次 **提交**，所以它有一个父节点——**commit A1337**。

#### 回顾一下，我们介绍了三种 git 对象：

- **blob**——文件的内容。
- **树对象**——一个（由 **blob** 和 **树对象** 组成的）目录列表。
- **提交对象**——工作树的一个快照。

让我们思考一下这些对象的哈希值吧。如果我写了 `git is awesome!` 并从它创建了一个 **blob**。你也在自己的系统上这么做，我们会有相同的哈希值吗？

答案是肯定的。因为这两个 **blob** 有相同的内容，自然也会有相同的 SHA-1 哈希值。

如果我创建了一个引用 `git is awesome!` 这个 **blob** 的 **树对象** ，赋给它一个特定的名字和元数据，你也在自己的系统上重复我的操作。我们会有相同的哈希值吗？

答案还是肯定的。因为这两个 **树对象** 是相同的，它们会有同样的哈希值。

如果我创建了一个指向那个 **树对象** 的 **提交对象**，提交信息为 `Hello`，你也在自己的系统上重复了一遍这个操作，结果会怎样呢？我们的哈希值还会相同吗？

这个时候的答案是否定的。即使我们的 **提交对象** 指向了相同的 **树对象**，它们也会有不同的 **提交详情**——时间、提交者，等等。

# Git 中的分支

**分支（branch）只不过是提交对象的命名引用**。

> 译者注：分支引用的是 **提交对象**，为了简单起见，下文在谈分支时，有时候会将 **提交对象** 简称为 **提交**。

我们可以一直用 SHA-1 哈希值引用一个 **提交**，但是人们通常喜欢以其他形式命名对象。**分支** 恰好是引用 **提交** 的一种方式，实际上也只是这样。

在大多数仓库中，主线开发都是在一个叫做 `master` 的分支上完成的。`master` 只是一个名字，它是在我们使用 `git init` 命令的时候被创建的。正因为如此，它被广泛使用。然而，它并不特别，我们可以用任何我们喜欢的名字代替它。

通常，分支指向的是当前开发线上的最近一次 **提交**。

![分支只不过提交的命名引用](https://www.freecodecamp.org/news/content/images/2020/12/image-42.png)

我们通常使用 `git branch` 命令创建一个新分支，而我们实际创建的却是另一个指针（pointer）。假设我们使用 `git branch test` 命令创建了一个名为 `test` 的分支，我们实际上是创建了另一个指针，它指向当前分支上的同一 **提交**。

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/12/image-43.png">
    <figcaption style="text-align: center">使用 `git branch` 创建另一个指针</figcaption>
</figure>

`git` 是怎么知道我们当前所在的分支呢？答案是它维护了一个名为 `HEAD` 的特殊指针。通常情况下，`HEAD` 会指向一个分支，这个分支指向一个 **提交**。有时候，`HEAD` 也能直接指向一个 **提交**，不过这不是我们的重点。

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/12/image-44.png">
    <figcaption style="text-align: center">HEAD 指向我们当前所在的分支</figcaption>
</figure>

> 译者注：活动分支（active branch）指的是我们当前所在的分支，也就是 `HEAD` 指向的分支。

要将活动分支切换到 `test`，我们可以使用命令 `git checkout test`。现在我们已经能猜到这条命令真正做的事情了——它只不过是把 `HEAD` 指向的分支改成了 `test`。

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/12/image-45.png">
    <figcaption style="text-align: center">`git checkout test` 改变 `HEAD` 指向的分支</figcaption>
</figure>

在创建 `test` 分支之前，我们也可以使用 `git checkout -b test`，这条命令等价于先运行 `git branch test` 创建分支，再运行 `git checkout test` 使 `HEAD` 指向新的分支。

如果我们做了一些改动并使用 `git commit` 创建了一个新 **提交** 呢？这个新 **提交** 会被添加到哪个分支上呢？

答案是 `test` 分支，因为它是当前的活动分支（因为 `HEAD` 指向了它）。之后，`test` 指针会移动至新添加的 **提交** 上。注意 `HEAD` 仍然指向 `test`。

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/12/image-46.png">
    <figcaption style="text-align: center">每次执行 `git commit` 命令都会让分支的指针移动到新创建的提交上</figcaption>
</figure>

因此，如果我们使用 `git checkout master` 回到 master 分支，我们就让 `HEAD` 的再次指向 `master` 了。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-47.png)

如果我们现在创建一个新的 **提交**，它就会被添加到 `master` 分支，**commit B2424** 会成为新提交的父节点。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-48.png)

# 如何在 Git 中记录变化

通常，我们在 **工作目录（working dir）** 中编写源代码。**工作目录** （或 **工作树（working tree）**）可以是文件系统上的任何一个目录，它关联着一个 **仓库（repository）** 。目录内不仅包含工程的文件夹和文件，还包含一个名为 `.git` 的目录。稍后我们会再讨论 `git` 这个目录。

在做了一些改动之后，我们想把这些改动记录到我们的 **仓库** 中。一个 **仓库** （缩写：**repo**）就是一系列 **提交** 的集合，每个 **提交** 都是工程 **工作树** 的归档。除了我们自己机器上的提交外，仓库也会包含他人机器上的提交。

**仓库** 也包含除代码文件以外的其它东西，例如 `HEAD` 指针、分支等等。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-49.png)

你可能使用过的其它和 `git` 类似工具，但是 `git` 并不会像其它工具那样直接将变化从 **工作树** 提交到 **仓库**。相反，它会先把这些变化注册到一个被称为 **索引（index）** 或 **暂存区（staging area）** 的地方。

这两个术语指的都是同一个东西，它们也经常被 `git` 的文档使用，我们将会在这篇文章中交替使用它们。

当我们 `checkout` 到一个分支时，`git` 会将上一次检出到工作目录中的所有文件填充到 **索引**，它们看起来就像最初被检出时的样子。之后执行 `git commit` 时， **提交** 会在当前 **索引** 的基础上创建。

**索引** 允许我们精心准备每次 **提交**。举个例子，自上一次 **提交** 以来，我们的 **工作目录** 中可能有两个文件发生了变化，但是我们可能只想将其中的一个添加到 **索引**（使用 `git add`），然后使用 `git commit` 记录这一个文件的变化。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-50.png)

**工作目录** 下文件的状态不外乎有两种：**已跟踪（tracked）** 或 **未跟踪（untracked）**。

**已跟踪文件** 是指那些 `git` 已经知道的文件。它们要么已经在上一次快照（**提交**）中，要么已经被 **暂存（staged）**（换句话说，它们已经在 **暂存区** 中）。

**工作目录** 中除已跟踪文件以外的所有其它文件都属于 **未跟踪文件（untracked）**，它们既没有在上次快照（**提交**）中，也没有在 **暂存区** 中。 

# 创建仓库的常规方式

让我们确认下我们已经理解了“创建**仓库**”时介绍的相关术语。在我们更加深入这个过程之前，这只是一个非常高阶的视角。

注意：大多数带有 shell 命令的文章展示的都是 UNIX 命令。我将同时给出 Windows 和 UNIX 下的命令。为了换换花样，我会给出 Windows 下面的截图。当两种环境下的命令完全一样时，我只会给出一次命令。

我们用 `git init repo_1` 初始化一个新的 **仓库**，然后用 `cd repo_1` 切换到仓库所在目录。借助 `tree /f .git` 命令，我们可以看到运行 `git init` 之后 `.git` 目录下面出现了很多子目录（`/f` 表示在 `tree` 的输出中包含文件）。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-51.png)

让我们在 `repo_1` 目录中创建一个文件吧：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-52.png)

Linux 系统：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-53.png)

这个文件已经在我们的 **工作目录** 中了。目前，我们还没有将它添加到 **暂存区**，所以它是 **未跟踪** 状态。让我们用 `git status` 验证一下：

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/12/image-54.png">
    <figcaption style="text-align: center">因为我们没有将新的文件添加到暂存区，所以它还是未跟踪状态，它也没有在之前的提交中</figcaption>
</figure>

我们现在用 `git add new_file.txt` 将这个文件添加到 **暂存区**，再用 `git status` 验证一下它是否已经被暂存了：

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/12/image-55.png">
    <figcaption style="text-align: center">添加新的文件到暂存区</figcaption>
</figure>

我们可现在可以用 `git commit` 创建一个 **提交**：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-56.png)

`.git` 目录有变化吗？我们用 `tree /f .git` 检查一下：

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/12/image-57.png">
    <figcaption style="text-align: center">`git` 目录中的很多东西已经变了</figcaption>
</figure>

很明显，很多东西都变了。是时候深入 `.git` 的结构，理解执行 `git init`、`git add` 或 `git commit` 之后发生的什么事情了。

# 是时候上干货了

目前我们已经讲了一些 Git 的基础知识，现在已经做好 _Git 上路_ 的准备了。

为了深入理解 `git` 是如何工作的，我们将从零开始创建一个 **仓库**。

我们不会使用 `git init`、`git add` 或 `git commit`，这会让我们更好地理解这个过程。

# 如何设置 `.git`

先创建一个新目录，然后在里面运行 `git status`：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-106.png)

好吧，因为我们没有 `.git` 文件夹，`git` 好像不怎么高兴。我们先把这个目录创建出来：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-107.png)

很明显，只创建一个 `.git` 目录还不够。我们需要往这个目录添加一些东西。

**一个 git 仓库有两个主要组成部分：**

1. 一组对象——**blob**、**树对象** 和 **提交对象**。
2. 一个命名这些对象的方式——称为 **引用**。

> 译者注：引用是 Git 中的一个重要概念，读者可以进一步阅读[Git 引用](https://git-scm.com/book/zh/v2/Git-内部原理-Git-引用)。

一个 **仓库** 可能还包含一些其它的东西，比如 git 钩子（hooks）。不过，仓库至少必须要有对象和引用。

让我们分别为对象和引用（简称：**refs**）各创建一个目录，Windows 下的两个目录分别为 `.git\objects` 和 `.git\refs`（UNIX 下的两个目录分别为 `.git/objects` 和 `.git/refs`）。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-108.png)

**分支** 是引用的一种，`git` 内部将 **分支** 称为 **heads**，所以我们会为它们创建一个目录 `git\refs\heads`。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-109.png)

然而 `git status` 的输出还是纹丝不动：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-110.png)

在寻找 **仓库** 中的 **提交** 时，`git` 怎么知道该从何开始呢？我之前解释过，它会寻找 `HEAD`，而 `HEAD` 指向着活动分支。

所以，我们需要创建 `HEAD`，它是一个位于 `.git\HEAD` 的文件。我们可以这么做：

Windows：`> echo ref: refs/heads/master > .git\HEAD`

UNIX：`$ echo "ref: refs/heads/master" > .git/HEAD`

⭐ 所以我们现在知道 `HEAD` 是如何实现的了——它只是一个文件，文件内容描述了它所指向的分支。

执行上面的命令以后，`git status` 似乎改变它的主意了：

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/12/image-111.png">
    <figcaption style="text-align: center">HEAD 只不过是一个文件</figcaption>
</figure>

注意：虽然我们还没有创建 `master` 分支，但是 `git` 相信我们就在这个分支上。之前有讲过，`master`只是一个名字。如果我们想的话，也可以让 `git` 认为我们在 `banana` 分支上：

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/12/image-112.png">
    <figcaption style="text-align: center">🍌</figcaption>
</figure>

按照惯例，我们将在本文的剩余部分中切回 `master` 分支。

我们已经准备好了 `git` 目录，现在继续往下，来一次 **提交**（同样地，不使用 `git add` 或 `git commit`）。

# Git 中的底层命令与上层命令

这个时候，区分 **底层（plumbing）** 和 **上层（poreclain）** 两类 `git` 命令会对你很有帮助。这两个术语的应用奇怪地来自于马桶（没错，就是🚽）。马桶通常是用陶瓷（porcelain）做的，它的基本结构是管道（plumbing，上水道和下水道）。

我们可以说上层命令为底层命令提供了一个用户友好的接口。大多数人只会涉及到上层命令。然而，当事情变得（非常）糟糕时，有人可能就会想知道为什么，他们会卷起袖子去检查底层命令。（注意：这些术语并不是我发明的，它们在 `git` 中的使用非常广泛）。

> 译者注：读者若想更好的理解这两个术语，建议阅读[Git 内部原理 - 底层命令与上层命令](https://git-scm.com/book/zh/v2/Git-内部原理-底层命令与上层命令)。

`git` 使用这些术语进行类比，从而将用户不常使用的底层命令（plumbing）和那些更友好的高层（porcelain）命令区分开。

目前，我们已经接触过上层命令——`git init`、`git add` 和 `git commit`。接下来，我们转到底层命令。

# 如何创建对象

让我们从创建对象并将其写入 `git` 的对象数据库开始吧，`git` 的对象数据库位于 `.git\objects` 中。第一条底层命令 `git hash-object` 会让我们将找到 **blob 对象** 的 SHA-1 哈希值。方式如下：

Windows：

`> echo git is awesome | git hash-object --stdin`

UNIX：

`$ echo "git is awesome" | git hash-object --stdin`

我们使用 `--stdin` 告知 `git hash-object` 从标准输入（standard input）获取输入内容，这将给我们提供相应的哈希值。

为了真的将该 **blob 对象** 写入 `git` 的对象数据库，我们可以简单地给 `git hash-object` 加一个 `-w` 开关。然后，检查 `.git` 目录中的内容，看看它们有没有改变。

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/12/image-113.png">
    <figcaption style="text-align: center">将一个 blob 对象写入对象数据库</figcaption>
</figure>

我们现在可以看到，这个 **blob** 的哈希值为 `54f6...36`， `.git\objects` 下也多出来了一个名为 `54` 的目录，目录内有一个名为 `f6..36` 的文件。

所以，`git` 实际上是使用 SHA-1 哈希值的前两个字符作为目录的名字，剩余字符用作 **blob** 所在文件的文件名。

为什么要这样呢？考虑一个非常大的仓库，仓库的数据库内存有三十万个对象（**blob 对象**、**树对象** 和 **提交对象**）。从这三十万个哈希值中找出一个值会花些时间，因此，`git` 将这个问题划分成了 256 份。

为了查找上面的那个哈希值，`git` 会先寻找 `.git\objects` 目录下名为 `54` 的目录，然后搜索那个目录，这进一步缩小了搜索范围。`.git\objects` 目录下最多可能会有 256 个子目录（从 `00` 到 `FF`）。

回到生成 **提交对象** 的过程中来，现在我们已经创建了一个对象，它的类型是什么呢？我们可以通过另一个底层命令 `git cat-file -t` （`-t` 代表“type”）瞧一瞧：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-114.png)

不出所料，这个对象是一个 **blob**。我们还可以使用 `git cat-file -p` （`-p` 代表“pretty-print”）查看它的内容：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-115.png)

创建 **blob** 这个过程通常发生在我们将一些东西添加到 **暂存区** 的时候——也就是我们使用 `git add` 的时候。

记住：`git` 是为 _整个_ 暂存的文件创建 **blob**。即使文件中只有修改或添加了一个字符（如同我们在之前的例子红添加 `!` 一样），该文件也会有一个新的 **blob**，这个 **blob** 有着新的哈希值。

`git status` 会有任何改变吗？

![](https://www.freecodecamp.org/news/content/images/2020/12/image-116.png)

显然没有。向 `git` 的内部数据库中添加一个 **blob** 对象并不会改变状态，因为 `git` 在这个阶段是不知道任何已跟踪或未跟踪文件的。

我们需要跟踪这个文件——把它添加到 **暂存区**。为此，我们可以使用底层命令 `git update-index`，例如：`git update-index --add --cacheinfo 100644 <blob-hash> <filename>`。

注意：`cacheinfo` 是一个[git 存储的][3]十六位的文件模式，这个模式遵循 [POSIX 类型和模式][4] 的布局。这超出了本文讨论的范围。

运行上述命令会改变 `.git` 目录的内容：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-117.png)

你能发现变化吗？多了一个名为 `index` 的新文件。这就是著名的 **索引** （或 **暂存区**），它基本上是一个位于 `.git\index` 中的文件。

既然 **blob** 已经被添加到了 **索引**，我们希望 `git status` 看起来会有所不同，像这样：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-118.png)

真有趣！这里发生了两件事。

第一件事，我们可以在 `changes to be committed` 中看到绿色的 `new_file.txt`。这是因为 **索引** 中有了 `new_file.txt`，它正等着被提交。

第二件事，我们可以看到红色的 `new_file.txt`——因为 `git` 相信 `my_file.txt` 这个 _文件_ 已经被删除了，并且它没有被暂存。

这发生在我们将内容为 `git is awesome` 的 **blob** 添加到对象数据库中的时候，我们告诉 **索引** ，那个 **blob** 的内容在文件 `my_file.txt` 中，但是我们从未创建过那个文件。

通过将那个 **blob** 的内容写入我们文件系统中名为 `my_file.txt` 的文件，我们可以很容易地解决这个问题：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-119.png)

执行 `git status` 后，它将不再出现在红色内容中：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-120.png)

现在是时候从我们的 **暂存区** 创建一个 **提交** 对象了。如上所述，一个 **提交** 对象引用着一个 **树对象**，所以我们需要创建一个 **树对象**。

我们可以用 `git write-tree` 做这件事，它会在一个 **树对象** 中记录 **索引** 的内容。当然，我们可以使用 `git cat-file -t` 进行确认：

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/12/image-121.png">
    <figcaption style="text-align: center">创建索引的树对象</figcaption>
</figure>

我们还可以用 `git cat-file -p` 查看它的内容：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-122.png)

太棒了！我们创建了一个 **树对象**，现在我们需要创建一个引用这个 **树对象** 的 **提交** 对象。为此，我们可以使用 `git commit-tree <tree-hash> -m <commit message>`：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-123.png)

你现在应该对查看对象类型和打印对象内容的命令感到得心应手了：

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/12/image-124.png">
    <figcaption style="text-align: center">创建一个提交对象</figcaption>
</figure>

注意这个 **提交** 并没有 **父节点**，因为它是第一个 **提交**。当我们添加另一个 **提交** 时，我们就得声明它的 **父节点**了——我们稍后会做这个。

我们刚得到的哈希值（`80e...8f`）是一个 **提交对象** 的哈希值。实际上我们非常习惯使用这些哈希值——我们一直都在看它们。注意这个 **提交对象** 拥有一个 **树对象**，树对象有自己的哈希值，不过我们几乎不会显式地指定这个哈希值。

`git status` 会有所变化吗？

![](https://www.freecodecamp.org/news/content/images/2020/12/image-125.png)

并没有 🤔.

为什么呢？`git` 需要知道最近一次 **提交**，才能知道文件已经被提交。那么 `git` 是怎么做的呢？它会去找 `HEAD`：

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/12/image-126.png">
    <figcaption style="text-align: center">在 Windows 上查看 `HEAD`</figcaption>
</figure>

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/12/image-127.png">
    <figcaption style="text-align: center">在 UNIX 上查看 `HEAD`</figcaption>
</figure>

`HEAD` 指向 `master`，但是 `master` 是什么呢？我们还没有创建它呢。

如同我们在前面解释的那样，分支只是 **提交对象** 的命名引用。这时，我们想要让 `master` 指向哈希值为 `80e8ed4fb0bfc3e7ba88ec417ecf2f6e6324998f` 的 **提交对象**。

这实现起来很简单，在 `\refs\heads\master` 创建一个文件，文件内容为这个哈希值。像这样：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-128.png)

⭐ 总而言之，**分支** 只是 `.git\refs\heads` 中的一个文件，文件内容为该分支所指向的 **提交对象** 的哈希值。

现在，`git status` 和 `git log` 终于欣赏我们的付出了：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-129.png)

我们已经成功创建出了一个 **提交**，全程没有使用上层命令！是不是很酷？🎉

# 与 Git 分支一起工作——背后的故事

就像我们不借助 `git init`、`git add` 或 `git commit` 创建 **仓库** 和 **提交** 一样，我们将要创建 **分支**，在不同 **分支** 间来回切换，整个过程也不使用上层命令（`git branch` 或 `git checkout`）。

如果你很兴奋，这是完全可以理解的。我也很兴奋 🙂

**咱们开始吧：**

目前我们只有一个名为 `master` 的分支。要创建另一个名为 `test` 的分支（等价于执行 `git branch test`），我需要在 `.git\refs\heads` 下创建一个名为 `test` 的文件，文件的内容应该和 `master` 分支指向的那个  **提交** 的哈希值一致。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-130.png)

如果我们使用 `git log`，就可以看到 `master` 和 `test` 确实是指向同一个 **提交**：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-131.png)

我们也切换到新创建的分支吧（等价于执行 `git branch test`）。为此，我们需要改变 `HEAD` 的指向，让它指向我们的新分支：

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/12/image-132.png">
    <figcaption style="text-align: center">通过修改 `HEAD` 切换到 `test` 分支</figcaption>
</figure>

我们可以看到：`git status` 和 `git log` 都确认 `HEAD` 现在指向的是 `test` 分支（活动分支）。

我们现在可以使用之前的命令去创建另一个文件，然后将它添加到索引：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-133.png)

我们用上面的命令创建了一个名为 `test.txt` 的文件，文件内容为 `Testing`。我们还创建了相应的 **blob**，将它添加了到 **索引**。我们还创建了代表这个 **索引** 的 **树对象**。

现在是时候创建引用这个 **树对象** 的 **提交** 了。这一次，我们还应该声明这个提交的 _父提交_，也就是之前的那次 **提交**。我们用 `git commit-tree` 命令的 `-p` 开关声明父节点：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-136.png)

可以看到，我们刚刚创建了一个 **提交**，还有它的 **树对象** 和父节点：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-139.png)

`git log` 会展示我们的新 **提交** 吗？

![](https://www.freecodecamp.org/news/content/images/2020/12/image-138.png)

可以看到：`git log` 并没有展示任何新的东西。为什么呢？🤔 还记得 `git log` 会跟踪 **分支** ，查找要展示的相关提交吗？它现在给我们展示了 `test` 和它指向的那个 **提交**，还展示了指向同一个提交的 `master`。

没错，我们需要让 `test` 指向我们的新 **提交**。我们只需要稍微改变一下 `.git\refs\heads\test` 的内容：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-140.png)

成功了! 🎉🥂

`git log` 找到 `HEAD`，`HEAD` 告诉它去 `test` 分支，`test` 分支指向着 **提交** `465...5e`，这个提交又链接到它的父 **提交** `80e...8f`。

尽情欣赏美吧，we _git_ you。 😊
# 总结

本文向你介绍了 `git` 的内部原理，我们一开始讲了基本对象——**blob**、**树对象** 和 **提交对象** 。

我们了解到 **blob** 持有文件的内容，**树对象** 是一个包含 **blob 对象** 和 **子树对象** 的目录列表，**提交对象** 是工作目录的一个快照，包含了一些像时间或提交信息这样的元数据。

我们接着讨论了 **分支**，它们不过是 **提交对象** 的命名引用。

我们继续描述了 **工作目录**，它是一个目录，有着相应的仓库。**暂存区（索引）** 为下一个 **提交对象** 持有对应的 **树对象**，而仓库就是一个 **提交对象** 的集合。

我们阐明了这些术语与 `git init`、`git add` 和 `git commit` 之间的关系，我们用这几条著名的命令创建新仓库、提交文件。

然后，我们大胆地深入 `git` 内部，停止使用上层命令，转而使用底层命令。

借助 `echo` 和 `git bash-object` 这类的底层命令，我们创建了 **blob**，把它添加到 **索引**，创建了 **索引** 的 **树对象**，以及指向这个 **树对象** 的 **提交对象**。

我们还创建了 **分支**，在 **分支** 间来回切换。为你们中那些亲身尝试这个过程的人鼓个掌！👏

希望你在跟着本文操作一遍之后，对使用 `git` 过程中背后发生的事情有了更深入的理解。

**感谢阅读本文！** 如果你喜欢这篇文章，你可以在 [swimm.io blog][5] 阅读更多这个主题的内容。

_[Omer Rosenbaum][6] 是 [Swimm][7] 的首席技术官、网络培训专家、Checkpoint 安全学院的创始人和[计算机网络（希伯来语）][8]的作者_。

访问我的 _[YouTube 频道][9]_。

---

# 附加资源

`git` 相关的资源已经有的很多了，我发现下面这些参考特别有用：

-   [Git Internals YouTube playlist — by Brief][10]
-   [Tim Berglund’s lecture — “Git From the Bits Up”][11]
-   [Git from the Bottom Up — by John Wiegley][12]
-   [as promised, docs: git for the confused][13]
-   [Git Internals — Git Objects — from Pro Git book, by Scott Chacon and Ben Straub][14]

  

[1]: https://www.youtube.com/playlist?list=PL9lx0DXCC4BNUby5H58y6s2TQVLadV8v7
[2]: https://en.wikipedia.org/wiki/SHA-1
[3]: https://github.com/git/git/blob/master/Documentation/technical/index-format.txt
[4]: http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/sys_stat.h.html
[5]: http://swimm.io/
[6]: https://www.linkedin.com/in/omer-rosenbaum-034a08b9/
[7]: https://swimm.io/
[8]: https://data.cyber.org.il/networks/networks.pdf
[9]: https://www.youtube.com/watch?v=79jlgESHzKQ&list=PL9lx0DXCC4BMS7dB7vsrKI5wzFyVIk2Kg
[10]: https://www.youtube.com/playlist?list=PL9lx0DXCC4BNUby5H58y6s2TQVLadV8v7
[11]: https://www.youtube.com/watch?v=MYP56QJpDr4
[12]: https://jwiegley.github.io/git-from-the-bottom-up/
[13]: http://www.gelato.unsw.edu.au/archives/git/0512/13748.html
[14]: https://git-scm.com/book/en/v2/Git-Internals-Git-Objects
