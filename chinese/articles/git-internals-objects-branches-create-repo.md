> * 原文地址：[A Visual Guide to Git Internals — Objects, Branches, and How to Create a Repo From Scratch Git 内部构建可视指南——对象、分支以及如何从头开始创建仓库](https://www.freecodecamp.org/news/git-internals-objects-branches-create-repo/)
> * 原文作者：Omer Rosenbaum
> * 译者：zhannicholas
> * 校对者：

![A Visual Guide to Git Internals — Objects, Branches, and How to Create a Repo From Scratch](https://images.unsplash.com/photo-1501084291732-13b1ba8f0ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc3M3wwfDF8c2VhcmNofDI5fHx8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=2000)

![Git 内部原理图解——对象、分支以及如何从零开始建仓库](https://images.unsplash.com/photo-1501084291732-13b1ba8f0ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc3M3wwfDF8c2VhcmNofDI5fHx8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=2000)

Many of us use  `git`  on a daily basis. But how many of us know what goes on under the hood?

我们中的许多人每天都在使用 `git`，但是有多少人知道它的内部是怎么运作的呢？

For example, what happens when we use  `git commit`? What is stored between commits? Is it just a diff between the current and previous commit? If so, how is the diff encoded? Or is an entire snapshot of the repo stored each time? What really happens when we use  `git init`  ?

例如我们使用 `git commit` 时发生了什么？提交（commit）与提交之间保存的是什么？两次提交之间难道只是文件的差异（diff）吗？如果是，这个差异是如何编码的？还是说每次提交都会保存一个当前仓库的完整快照（snapshot）呢？我们使用 `git init` 时到底发生了什么？

Many people who use  `git`  don’t know the answers to the questions above. But does it really matter?

很多 `git` 的使用者都不知道这几个问题的答案，但这又有什么关系呢？

First, as professionals, we should strive to understand the tools we use, especially if we use them all the time — like  `git`  .

首先，作为专业人员，我们应当努力弄清楚手中使用的工具，尤其是那些我们一直都在使用的——比如 `git`。

But even more acutely, I've found that understanding how git actually works is useful in many scenarios — whether it’s resolving merge conflicts, looking to conduct an interesting rebase, or even just when something goes slightly wrong.

但是我深刻地意识到，理解 Git 的工作原理在很多情况下都非常有用——不管是解决合并冲突、进行有趣的变基（rebase）操作，还是在某些东西变得有点不对劲的时候。

You’ll benefit from this post if you’re experienced enough with  `git`  to feel comfortable with commands such as  `git pull`  ,`git push`  ,`git add`  or  `git commit`.

如果你有足够的 `git` 经验，对 `git pull`、`git push`、`git add` 或 `git commit` 这些命令得心应手，你会从本文中获益。

Still, we will start with an overview to make sure we are on the same page regarding the mechanisms of  `git`, and specifically, the terms used throughout this post.

不过，为了确保我们在 `git` 的原理（尤其是本文上下所使用的术语）上步调一致，我们将从概览开始。

I also uploaded a YouTube series covering this post — you are welcome to watch it  [here][1].

我也在 YouTube 上传了一个涵盖本文所有内容的系列视频——欢迎[在此][1]观看。

# What to expect from this tutorial

# 本教程的内容

We will get a rare understanding of what goes on under the hood of what we do almost daily.

我们将对日常使用的 `git` 的内部运行原理有一个比较深入的理解。

We will start by covering objects — **blobs, trees,** and  **commits.**  We will then briefly discuss  **branches** and how they are implemented. We will dive into the  **working directory, staging area** and  **repository**.

我们会从对象（object）——**blob**、**树对象（tree）** 和 **提交对象（commit）** 开始，然后简单讨论一下 **分支（branch）** 及其实现方式，之后会深入 **工作目录（working directory）**、**暂存区（staging area）** 和 **仓库（repository）**。

And we will make sure we understand how these terms relate to the  `git`  commands we know and use to create a new repository.

我们会确保理解了这些术语是与我们用来创建新仓库的那些命令之间是如何关联的。

Next, will create a repository from scratch — without using  `git init`,  `git add`, or  `git commit`. This will allow us to  **deepen our understanding of what is happening under the hood**  when we work with  `git`.

接下来，我们会从零开始创建一个仓库——不使用 `git init`、`git add` 或 `git commit`。这会在我们使用 `git` 的过程中，**加深我们对其内部正在发生的事情的理解**。

We will also create new branches, switch branches, and create additional commits — all without using  `git branch`  or  `git checkout`.

我们也会创建新的分支、在分支间切换，再进行一些提交——全程不使用 `git branch` 或 `git checkout`。

By the end of this post,  **you will feel like you  _understand_** `**git**`. Are you up for it? 😎

在本文结束之前，**你会觉得自己真的 _理解了_ `git`**。你准备好了吗？😎

> 译者注：建议读者配合[Git 内部原理](https://git-scm.com/book/zh/v2/Git-内部原理-底层命令与上层命令)阅读本文。

# Git Objects — blob, tree and commit

# Git 对象——blob、tree 和 commit
> 译者注：译文中的 **数据对象**、**树对象** 和 **提交对象** 指的就是 blob、tree 和 commit 这三者。因为 Git 官网的文档[Git 内部原理 - Git 对象](https://git-scm.com/book/zh/v2/Git-内部原理-Git-对象)对三者进行了这样的翻译，本文是为了与其保持一致。但由于 blob 一词的特殊性，译文会直接保留原词，而不是将其翻译为“数据对象”。

It is very useful to think about  `git`  as maintaining a file system, and specifically — snapshots of that system in time.

将 `git` 看成一个文件系统（尤其是该系统的实时快照）是很有用的。

A file system begins with a  _root directory_ (in UNIX-based systems,  `/`), which usually contains other directories (for example,  `/usr`  or  `/bin`). These directories contain other directories, and/or files (for example,  `/usr/1.txt`).

一个文件系统从 _根目录（root directory）_ 开始（在基于 UNIX 的系统中是 `/`），通常也会包含其它的目录（例如 `/usr` 或 `/bin`）。这些目录会包含其它的目录和（或）文件（例如 `/usr/1.txt`）。

In  `git`, the contents of files are stored in objects called  **blobs**, binary large objects.

在 `git` 中，文件的内容存储在一些被称为 **blob** （二进制大对象）的对象中。

The difference between  **blobs**  and files is that files also contain meta-data. For example, a file “remembers” when it was created, so if you move that file into another directory, its creation time remains the same.

**blob** 与文件的不同在于，文件还会包含元数据（meta-data）。例如一个文件会“记住”它的创建时间，如果你把它移动到另一个目录，它的创建时间是不会改变的。

**Blobs**, on the other hand, are just contents — binary streams of data. A  **blob** doesn’t register its creation date, its name, or anything but its contents.

相反，**blob** 只是内容——数据的二进制流。除了内容以外，**blob** 不会记录它的创建时间、名字或任何其它东西。

Every  **blob**  in  `git`  is identified by its  [SHA-1 hash][2]. SHA-1 hashes consist of 20 bytes, usually represented by 40 characters in hexadecimal form. Throughout this post we will sometimes show just the first characters of that hash.

`git` 中的 **blob** 通过 [SHA-1 哈希值][2] 唯一标识。SHA-1 哈希值由 20 个字节（byte）组成，通常表示成 40 个十六进制形式的字符。在这篇文章中，我们有时只会展示这个哈希值的前几个字符。

![Blobs have SHA-1 hashes associated with them](https://www.freecodecamp.org/news/content/images/2020/12/image-34.png)

![Blob 有对应的 SHA-1 哈希值](https://www.freecodecamp.org/news/content/images/2020/12/image-34.png)

In  `git`, the equivalent of a directory is a  **tree**. A  **tree** is basically a directory listing, referring to  **blobs**  as well as other  **trees**.

在 `git` 中，**树对象（tree）** 相当于目录。一个 **树对象** 基本上就是一个目录列表，它引用着 **blob** 和其它的 **树对象**。

**Trees**  are identified by their SHA-1 hashes as well. Referring to these objects, either  **blobs**  or other  **trees**, happens via the SHA-1 hash of the objects.

**树对象** 也用 SHA-1 哈希值唯一标识，它通过其它对象（**blob** 或 **树对象**）的 SHA-1 哈希值引用它们。

![A tree is a directory listing](https://www.freecodecamp.org/news/content/images/2020/12/image-35.png)

![树对象是一个目录列表](https://www.freecodecamp.org/news/content/images/2020/12/image-35.png)

Note that the  **tree**  **CAFE7** refers to the  **blob F92A0**  as  _pic.png._ In another  **tree**, that same  **blob** may have another name.

注意 **CAFE7** 这个 **树对象** 指向了 **blob F92A0**（_pic.png_），在另一个 **树对象** 中，同一个 **blob** 可能会有不同的名字。

![A tree may contain sub-trees, as well as blobs](https://www.freecodecamp.org/news/content/images/2020/12/image-36.png)

![树对象可能包含子树对象和其它 blob](https://www.freecodecamp.org/news/content/images/2020/12/image-36.png)

The diagram above is equivalent to a file system with a root directory that has one file at  `/test.js`, and a directory named  `/docs`  with two files:  `/docs/pic.png`  and  `/docs/1.txt`.

上面这张图相当于一个文件系统，这个文件系统有一个根目录，根目录下有一个位于 `/test.js` 的文件和一个名为 `/docs` 的目录，`/docs` 目录下有两个文件：`/docs/pic.png` 和 `/docs/1.txt`。

Now it’s time to take a snapshot of that file system — and store all the files that existed at that time, along with their contents.

现在是时候捕获该文件系统的一个快照了，把那个时刻存在的所有文件连同它们的内容保存下来。

In  `git`, a snapshot is a  **commit**. A  **commit**  object includes a pointer to the main  **tree**  (the root directory), as well as other meta-data such as the  **committer**, a  **commit**  message and the  **commit**  time.

在 `git` 中，一个快照就是一个 **提交（commit）**。一个 **提交** 对象包括一个指向主要 **树对象**（根目录）的指针和一些像 **提交者**、**提交信息** 和 **提交时间** 这样的元数据。

In most cases, a  **commit**  also has one or more parent  **commits** — the previous snapshot(s). Of course,  **commit**  objects are also identified by their SHA-1 hashes. These are the hashes we are used to seeing when we use  `git log`.

在大多数情况下，一个 **提交** 还会有一个或多个父 **提交**——之前的快照。当然，**提交** 对象也通过它们的 SHA-1 哈希值唯一标识。这些哈希值就是我们使用 `git log` 命令时看到的那些哈希值。

![A commit is a snapshot in time. It refers to the root tree. As this is the first commit, it has no parent(s).](https://www.freecodecamp.org/news/content/images/2020/12/image-37.png)

![提交对象是某个时刻的快照。它引用着树的根节点。由于这是第一次提交，它没有父节点](https://www.freecodecamp.org/news/content/images/2020/12/image-37.png)

Every  **commit** holds the  _entire snapshot_, not just diffs from the previous  **commit(s)**.

每个 **提交** 都持有 _完整的快照_，并不只是与之前 **提交** 之前的差异。

How can that work? Doesn’t that mean that we have to store a lot of data every commit?

那是它是怎么工作的呢？难道它不代表我们每次提交都必须保存很多数据吗？

Let’s examine what happens if we change the contents of a file. Say that we edit  `1.txt`, and add an exclamation mark — that is, we changed the content from  `HELLO WORLD`, to  `HELLO WORLD!`.

让我们来看看改变一个文件的内容会发生什么。我们编辑 `1.txt`，加一个感叹号——也就是把文件的内容由 `HELLO WORLD` 变为 `HELLO WORLD!`。

Well, this change would mean that we have a new  **blob,** with a new SHA-1 hash. This makes sense, as  `sha1("HELLO WORLD")`  is different from  `sha1("HELLO WORLD!")`.

这个改变意味着我们会有一个新的 **blob**，它有新的 SHA-1 哈希值。这是有意义的，因为 `sha1("HELLO WORLD")` 与 `sha1("HELLO WORLD!")` 并不相同。

![Changing the blob results in a new SHA-1](https://www.freecodecamp.org/news/content/images/2020/12/image-38.png)

![改变 blob 会得到新的 SHA-1 值](https://www.freecodecamp.org/news/content/images/2020/12/image-38.png)

Since we have a new hash, then the  **tree**’s listing should also change. After all, our  **tree** no longer points to  **blob 73D8A**, but rather  **blob 62E7A**  instead. As we change the  **tree**’s contents, we also change its hash.

由于我们得到了一个新的哈希值，所以对应 **树对象** 的目录也会改变。毕竟，我们的 **树对象** 不再指向 **blob 73D8A** 了，而是指向了 **blob 62E7A**。当我们改变 **树对象** 的内容时，我们也改变了它的哈希值。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-39.png)

The tree that points to the changed blob needs to change as well

blob 变了，指向它的树对象也需要变

And now, since the hash of that  ****tree**** is different, we also need to change the parent  ****tree ****— as the latter no longer points to  ****tree CAFE7****, but rather  ****tree 24601****.  Consequently, the  ****parent****  ****tree**** will also have a new hash.

现在，由于原来那个 **树对象** 的哈希值已经不同了，我们也需要改变它的 **父树对象**——后者不再指向 **tree CAFE7**了，而是指向了 **tree 246001**。最终，**父树对象** 也会有一个新的哈希值。

![The root tree also changes, and so does its hash.](https://www.freecodecamp.org/news/content/images/2020/12/image-40.png)

![根节点也变了，它的哈希值也变了](https://www.freecodecamp.org/news/content/images/2020/12/image-40.png)

Almost ready to create a new  **commit**  object, and it seems like we are going to store a lot of data — the entire file system, once more! But is that really necessary?

几乎做好创建一个新 **提交** 对象的准备了，我们好像会再一次保存很多的数据——整个文件系统。但是真的有必要这么做吗？

Actually, some objects, specifically  **blob**  objects, haven’t changed since the previous commit — **blob F92A0** remained intact, and so did  **blob F00D1.**

实际上，一些对象（尤其是 **blob** 对象）相比起之前的提交来说没有任何改变——**blob F92A0**仍然原封不动，**blob F00D1** 也一样。

So this is the trick — as long as an object doesn’t change, we don’t store it again. In this case, we don’t need to store  **blob F92A0** and **blob F00D1** once more.  We only refer to them by their hash values. We can then create our  **commit** object.

这就是其中的秘诀——只有对象改变了，我们才再次保存它。在这个例子中，我们不需要再次保存 **blob F92A0** 和 **blob F00b1**。我们只需要通过它们的哈希值引用它们，然后我们可以创建 **提交** 对象。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-41.png)

Blobs that remained intact are referenced by their hash values

那些没有丝毫变化的 blob 是通过它们的哈希值被引用的

Since this  **commit**  is not the first  **commit**, it has a parent — **commit A1337**.

由于这次 **提交** 不是第一次 **提交**，所以它有一个父节点——**commit A1337**。

#### So to recap, we introduced three git objects:

-   **blob — **contents of a file.
-   **tree **— a directory listing (of  **blobs**  and  **trees**).
-   **commit **— a snapshot of the working tree.

#### 回顾一下，我们介绍了三种 git 对象：

- **blob**——文件的内容。
- **树对象**——一个（由 **blob** 和 **树对象** 组成的）目录列表。
- **提交对象**——工作树的一个快照。

Let us consider the hashes of these objects for a bit. Let’s say I wrote the string  `git is awesome!`  and created a  **blob** from it. You did the same on your system. Would we have the same hash?

让我们思考一下这些对象的哈希值吧。如果我写了 `git is awesome!` 并从它创建了一个 **blob**。你也在自己的系统上这么做，我们会有相同的哈希值吗？

The answer is — Yes. Since the  **blobs**  consist of the same data, they’ll have the same SHA-1 values.

答案是肯定的。因为这两个 **blob** 有相同的内容，自然也会有相同的 SHA-1 哈希值。

What if I made a  **tree** that references the  **blob** of  `git is awesome!`, and gave it a specific name and metadata, and you did exactly the same on your system. Would we have the same hash?

如果我创建了一个引用 `git is awesome!` 这个 **blob** 的 **树对象** ，赋给它一个特定的名字和元数据，你也在自己的系统上重复我的操作。我们会有相同的哈希值吗？

Again, yes. Since the  **trees** objects are the same, they would have the same hash.

答案还是肯定的。因为这两个 **树对象** 是相同的，它们会有同样的哈希值。

What if I created a  **commit**  of that  **tree** with the commit message  `Hello`, and you did the same on your system. Would we have the same hash?

如果我创建了一个指向那个 **树对象** 的 **提交对象**，提交信息为 `Hello`，你也在自己的系统上重复了一遍这个操作，结果会怎样呢？我们的哈希值还会相同吗？

In this case, the answer is — No. Even though our  **commit** objects refer to the same  **tree**, they have different  **commit** details — time, committer etc.

这个时候的答案是否定的。即使我们的 **提交对象** 指向了相同的 **树对象**，它们也会有不同的 **提交详情**——时间、提交者，等等。
# Branches in Git

# Git 中的分支

**A branch is just a named reference to a commit**.

**分支（branch）只不过是提交对象的命名引用**。

> 译者注：分支引用的是 **提交对象**，为了简单起见，下文在谈分支时，会将 **提交对象** 简称为 **提交**。

We could always reference a  **commit** by its SHA-1 hash, but humans usually prefer other forms to name objects. A  **branch**  is one way to reference a  **commit**, but it’s really just that.

我们可以一直用 SHA-1 哈希值引用一个 **提交**，但是人们通常喜欢以其他形式命名对象。**分支** 恰好是引用 **提交** 的一种方式，实际上也只是这样。

In most repositories, the main line of development is done in a branch called  `master`. This is just a name, and it’s created when we use  `git init`, making it is widely used. However, it’s by no means special, and we could use any other name we’d like.

在大多数仓库中，主线开发都是在一个叫做 `master` 的分支上完成的。`master` 只是一个名字，它是在我们使用 `git init` 命令的时候被创建的。正因为如此，它被广泛使用。然而，它并不特别，我们可以用任何我们喜欢的名字代替它。

Typically, the branch points to the latest  **commit**  in the line of development we are currently working on.

通常，分支指向的是当前开发线上的最近一次 **提交**。

![A branch is just a named reference to a commit](https://www.freecodecamp.org/news/content/images/2020/12/image-42.png)

![分支只不过提交的命名引用](https://www.freecodecamp.org/news/content/images/2020/12/image-42.png)

To create another branch, we usually use the  `git branch`  command. By doing that, we actually create another pointer. So if we create a branch called  `test`, by using  `git branch test`, we are actually creating another pointer that points to the same  **commit** as the branch we are currently on.

我们通常使用 `git branch` 命令创建一个新分支，而我们实际创建的却是另一个指针（pointer）。假设我们使用 `git branch test` 命令创建了一个名为 `test` 的分支，我们实际上是创建了另一个指针，它指向当前分支上的同一 **提交**。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-43.png)

Using \`git branch\` creates another pointer

使用 \`git branch\` 创建另一个指针

How does  `git`  know what branch we’re currently on? It keeps a special pointer called  `HEAD`. Usually,  `HEAD`  points to a branch, which in turns points to a  **commit**. In some cases,  `HEAD`  can also point to a  **commit**  directly, but we won’t focus on that.

`git` 是怎么知道我们当前所在的分支呢？答案是它维护了一个名为 `HEAD` 的特殊指针。通常情况下，`HEAD` 会指向一个分支，这个分支指向一个 **提交**。有时候，`HEAD` 也能直接指向一个 **提交**，不过这不是我们的重点。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-44.png)

HEAD points to the branch we are currently on.

HEAD 指向的是我们当前所在的分支

To switch the active branch to be  `test`, we can use the command  `git checkout test`. Now we can already guess what this command actually does — it just changes  `HEAD`  to point to  `test`.

> 译者注：活动分支（active branch）指的是我们当前所在的分支，也就是 `HEAD` 指向的分支。

要将活动分支切换到 `test`，我们可以使用命令 `git checkout test`。现在我们已经能猜到这条命令真正做的事情了——它只不过是把 `HEAD` 指向的分支改成了 `test`。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-45.png)

\`git checkout test\` changes where \`HEAD\` points

\`git checkout test\` 改变 \`HEAD\` 指向的分支

We could also use  `git checkout -b test`  before creating the  `test`  branch, which is the equivalent of running  `git branch test`  to create the branch, and then  `git checkout test`  to move  `HEAD`  to point to the new branch.

在创建 `test` 分支之前，我们也可以使用 `git checkout -b test`，这条命令等价于先运行 `git branch test` 创建分支，再运行 `git checkout test` 使 `HEAD` 指向新的分支。

What happens if we make some changes and create a new  **commit** using  `git commit`? Which branch will the new  **commit** be added to?

如果我们做了一些改动并使用 `git commit` 创建了一个新 **提交** 呢？这个新 **提交** 会被添加到哪个分支上呢？

The answer is the  `test`  branch, as this is the active branch (since  `HEAD`  points to it). Afterwards, the  `test`  pointer will move to the newly added  **commit**. Note that  `HEAD`  still points to  `test`.

答案是 `test` 分支，因为它是当前的活动分支（因为 `HEAD` 指向了它）。之后，`test` 指针会移动至新添加的 **提交** 上。注意 `HEAD` 仍然指向 `test`。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-46.png)

Every time we use \`git commit\`, the branch pointer moves to the newly created commit.

每次执行 \`git commit\` 命令都会让分支的指针移动到新创建的提交上。

So if we go back to master by  `git checkout master`, we move  `HEAD`  to point to  `master`  again.

因此，如果我们使用 `git checkout master` 回到 master 分支，我们就让 `HEAD` 的再次指向 `master` 了。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-47.png)

Now, if we create another  **commit**, it will be added to the  `master`  branch (and its parent would be  **commit B2424**).

如果我们现在创建一个新的 **提交**，它就会被添加到 `master` 分支，**commit B2424** 会成为新提交的父节点。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-48.png)

# How to Record Changes in Git

# 如何在 Git 中记录变化

Usually, when we work on our source code we work from a  **working dir**. A  **working dir(ectrory)** (or  **working tree**)  is any directory on our file system which has a  **repository** associated with it. It contains the folders and files of our project, and also a directory called  `.git`  that we will talk more about later.

通常，我们在 **工作目录（working dir）** 中编写源代码。**工作目录** （或 **工作树（working tree）**）可以是文件系统上的任何一个目录，它关联着一个 **仓库（repository）** 。目录内不仅包含工程的文件夹和文件，还包含一个名为 `.git` 的目录。稍后我们会再讨论 `git` 这个目录。

After we make some changes, we want to record them in our  **repository**. A  **repository**  (in short:  **repo**) is a collection of  **commits**, each of which is an archive of what the project’s  **working tree** looked like at a past date, whether on our machine or someone else’s.

在做了一些改动之后，我们想把这些改动记录到我们的 **仓库** 中。一个 **仓库** （缩写：**repo**）就是一系列 **提交** 的集合，每个 **提交** 都是工程 **工作树** 的归档。除了我们自己机器上的提交外，仓库也会包含他人机器上的提交。

A  **repository** also includes things other than our code files, such as  `HEAD`, branches, and so on.

**仓库** 也包含除代码文件以外的其它东西，例如 `HEAD` 指针、分支等等。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-49.png)

Unlike other, similar tools you may have used,  `git`  does not commit changes from the  **working tree** directly into the  **repository**. Instead, changes are first registered in something called the  **index**, or the  **staging area**.

你可能使用过的其它和 `git` 类似工具，但是 `git` 并不会像其它工具那样直接将变化从 **工作树** 提交到 **仓库**。相反，它会先把这些变化注册到一个被称为 **索引（index）** 或 **暂存区（staging area）** 的地方。

Both of these terms refer to the same thing, and they are used often in  `git`’s documentation. We will use these terms interchangeably throughout this post.

这两个术语指的都是同一个东西，它们也经常被 `git` 的文档使用，我们将会在这篇文章中交替使用它们。

When we  `checkout`  a branch,  `git`  populates the  **index** with all the file contents that were last checked out into our  **working directory** and what they looked like when they were originally checked out. When we use  `git commit`, the  **commit** is created based on the state of the  **index**.

当我们 `checkout` 到一个分支时，`git` 会将上一次检出到工作目录中的所有文件填充到 **索引**，它们看起来就像最初被检出时的样子。之后执行 `git commit` 时， **提交** 会在当前 **索引** 的基础上创建。

The use of the  **index**  allows us to carefully prepare each  **commit**. For example, we may have two files with changes since our last  **commit**  in our  **working dir**. We may only add one of them to the  **index** (using  `git add`), and then use  `git commit`  to record this change only.

**索引** 允许我们精心准备每次 **提交**。举个例子，自上一次 **提交** 以来，我们的 **工作目录** 中可能有两个文件发生了变化，但是我们可能只想将其中的一个添加到 **索引**（使用 `git add`），然后使用 `git commit` 记录这一个文件的变化。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-50.png)

Files in our  **working directory** can be in one of two states:  **tracked**  or  **untracked**.

**工作目录** 下文件的状态不外乎有两种：**已跟踪（tracked）** 或 **未跟踪（untracked）**。

**Tracked files** are files that  `git`  knows about. They either were in the last snapshot (**commit**), or they are  **staged** now (that is, they are in the  **staging area**).

**已跟踪文件** 是指那些 `git` 已经知道的文件。它们要么已经在上一次快照（**提交**）中，要么已经被 **暂存（staged）**（换句话说，它们已经在 **暂存区** 中）。

**Untracked files** are everything else — any files in our **working directory**  that were not in our last snapshot (**commit**) and are not in our  **staging area**.

**工作目录** 中除已跟踪文件以外的所有其它文件都属于 **未跟踪文件（untracked）**，它们既没有在上次快照（**提交**）中，也没有在 **暂存区** 中。 

# How to Create a Repo — The Conventional Way

# 创建仓库的常规方式

Let’s make sure that we understand how the terms we’ve introduced relate to the process of creating a  **repository**. This is just a quick high-level view, before we dive much deeper into this process.

让我们确认下我们已经理解了“创建**仓库**”时介绍的相关术语。在我们更加深入这个过程之前，这只是一个非常高阶的视角。

Note — most posts with shell commands show UNIX commands. I will provide commands for both Windows and UNIX, with screenshots from Windows, for the sake of variance. When the commands are exactly the same, I will provide them only once.

注意：大多数带有 shell 命令的文章展示的都是 UNIX 命令。我将同时给出 Windows 和 UNIX 下的命令。为了换换花样，我会给出 Windows 下面的截图。当两种环境下的命令完全一样时，我只会给出一次命令。

We will initialize a new  **repository** using  `git init repo_1`, and then change our directory to that of the repository using  `cd repo_1`. By using  `tree /f .git`  we can see that running  `git init`  resulted in quite a few sub-directories inside  `.git`. (The flag  `/f`  includes files in  `tree`’s output).

我们用 `git init repo_1` 初始化一个新的 **仓库**，然后用 `cd repo_1` 切换到仓库所在目录。借助 `tree /f .git` 命令，我们可以看到运行 `git init` 之后 `.git` 目录下面出现了很多子目录（`/f` 表示在 `tree` 的输出中包含文件）。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-51.png)

Let's create a file inside the  `repo_1`  directory:

让我们在 `repo_1` 目录中创建一个文件吧：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-52.png)

On a Linux system:

Linux 系统：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-53.png)

This file is within our  **working directory**. Yet, since we haven’t added it to the  **staging area**, it is currently  **untracked**. Let's verify using  `git status`:

这个文件已经在我们的 **工作目录** 中了。目前，我们还没有将它添加到 **暂存区**，所以它是 **未跟踪** 状态。让我们用 `git status` 验证一下：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-54.png)

The new file is untracked as we haven’t added it to the staging area, and it wasn’t included in a previous commit

因为我们没有将新的文件添加到暂存区，所以它还是未跟踪状态，它也没有在之前的提交中

We can now add this file to the  **staging area**  by using  `git add new_file.txt`. We can verify that it has been staged by running  `git status`:

我们现在用 `git add new_file.txt` 将这个文件添加到 **暂存区**，再用 `git status` 验证一下它是否已经被暂存了：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-55.png)

Adding the new file to the staging area

添加新文件到暂存区

We can now create a  **commit**  using  `git commit`:

我们可现在可以用 `git commit` 创建一个 **提交**：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-56.png)

Has something changed within  `.git`  directory? Let’s run  `tree /f .git`  to check:

`.git` 目录有变化吗？我们用 `tree /f .git` 检查一下：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-57.png)

A lot of things have changed within \`.git\`

\`git\` 目录中的很多东西已经变了

Apparently, quite a lot has changed. It's time to dive deeper into the structure of  `.git`  and understand what is going on under the hood when we run  `git init`,  `git add`  or  `git commit`.

很明显，很多东西都变了。是时候深入 `.git` 的结构，理解执行 `git init`、`git add` 或 `git commit` 之后发生的什么事情了。

# Time to get hard core

# 是时候上干货了

So far we've covered some Git fundamentals, and now we’re ready to really  __Git going.__

目前我们已经讲了一些 Git 的基础知识，现在已经做好 _Git going_ 的准备了。

In order to deeply understand how  `git`  works, we will create a  ****repository****, but this time — we'll build it from scratch.

为了深入理解 `git` 是如何工作的，我们将从零开始创建一个 **仓库**。

We won’t use  `git init`,  `git add`  or  `git commit`  which will enable us to get a better hands-on understanding of the process.

我们不会使用 `git init`、`git add` 或 `git commit`，这会让我们更好地理解这个过程。

# How to Set Up  `.git`

# 如何设置 `.git`

Let’s create a new directory, and run  `git status`  within it:

先创建一个新目录，然后在里面运行 `git status`：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-106.png)

Alright, so  `git`  seems unhappy as we don’t have a  `.git`  folder. The natural thing to do would be to simply create that directory:

好吧，因为我们没有 `.git` 文件夹，`git` 好像不怎么高兴。我们先把这个目录创建出来：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-107.png)

Apparently, creating a  `.git`  directory is just not enough. We need to add some content to that directory.

很明显，只创建一个 `.git` 目录还不够。我们需要往这个目录添加一些东西。

****A****  ****git repository has two** main  **components****:

1.  A collection of objects —  ****blobs****,  ****trees,****  and  ****commits****.
2.  A system of naming those objects — called  ****references****.

**一个 git 仓库有两个主要组成部分：**

1. 一组对象——**blob**、**树对象** 和 **提交对象**。
2. 一个命名这些对象的方式——称为 **引用**。

> 译者注：引用是 Git 中的一个重要概念，读者可以进一步阅读[Git 引用](https://git-scm.com/book/zh/v2/Git-内部原理-Git-引用)。

A  ****repository****  may also contain other things, such as git hooks, but at the very least — it must include objects and references.

一个 **仓库** 可能还包含一些其它的东西，比如 git 钩子（hooks）。不过，仓库至少必须要有对象和引用。

Let’s create a directory for the objects at  `.git\objects`  and a directory for the references (in short:  ****refs****) at  `.git\refs`  (on UNIX -based systems —  `.git/objects`  and  `.git/refs`, respectively).

让我们分别为对象和引用（简称：**refs**）各创建一个目录，Windows 下的两个目录分别为 `.git\objects` 和 `.git\refs`（UNIX 下的两个目录分别为 `.git/objects` 和 `.git/refs`）。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-108.png)

One type of reference is  ****branches****. Internally,  `git`  calls  ****branches**** by the name  ****heads****. So we will create a directory for them —  `.git\refs\heads`.

**分支** 是引用的一种，`git` 内部将 **分支** 称为 **heads**，所以我们会为它们创建一个目录 `git\refs\heads`。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-109.png)

This still doesn’t change our  `git status`:

然而 `git status` 的输出还是纹丝不动：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-110.png)

How does  `git`  know where to start when looking for a  ****commit****  in the  ****repository****? As I explained earlier, it looks for  `HEAD`, which points to the current active branch (or  ****commit****, in some cases).

在寻找 **仓库** 中的 **提交** 时，`git` 怎么知道该从何开始呢？我之前解释过，它会寻找 `HEAD`，而 `HEAD` 指向着活动分支。

So, we need to create the  `HEAD`, which is just a file residing at  `.git\HEAD`. We can apply the following:

On Windows:  `> echo ref: refs/heads/master > .git\HEAD`

On UNIX:  `$ echo "ref: refs/heads/master" > .git/HEAD`

所以，我们需要创建 `HEAD`，它是一个位于 `.git\HEAD` 的文件。我们可以这么做：

Windows：`> echo ref: refs/heads/master > .git\HEAD`

UNIX：`$ echo "ref: refs/heads/master" > .git/HEAD`

⭐ So we now know how  `HEAD`  is implemented — it’s simply a file, and its contents describe what it points to.

⭐ 所以我们现在知道 `HEAD` 是如何实现的了——它只是一个文件，文件内容描述了它所指向的分支。

Following the command above,  `git status`  seems to change its mind:

执行上面的命令以后，`git status` 似乎改变它的主意了：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-111.png)

HEAD is just a file

HEAD 只不过是一个文件

Notice that  `git`  believes we are on a branch called  `master`, even though we haven’t created this branch. As mentioned before,  `master`  is just a name. We could also make  `git`  believe we are on a branch called  `banana`  if we wanted to:

注意：虽然我们还没有创建 `master` 分支，但是 `git` 相信我们就在这个分支上。之前有讲过，`master`只是一个名字。如果我们想的话，也可以让 `git` 认为我们在 `banana` 分支上：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-112.png)

🍌

We will switch back to  `master`  for the rest of this post, just to adhere to the normal convention.

按照惯例，我们将在本文的剩余部分中切回 `master` 分支。

Now that we have our  `.git`  directory ready, can we work our way to make a  ****commit****  (again, without using  `git add`  or  `git commit`).

我们已经准备好了 `git` 目录，现在继续往下，来一次 **提交**（同样地，不使用 `git add` 或 `git commit`）。

# Plumbing vs Porcelain Commands in Git

# Git 中的底层命令与上层命令

At this point, it would be helpful to make a distinction between two types of  `git`  commands:  ****plumbing**** and  ****porcelain****. The application of the terms oddly comes from toilets (yeah, these — 🚽), traditionally made of porcelain, and the infrastructure of plumbing (pipes and drains).

这个时候，区分 **底层（plumbing）** 和 **上层（poreclain）** 两类 `git` 命令会对你很有帮助。这两个术语的应用奇怪地来自于马桶（没错，就是🚽）。马桶通常是用陶瓷（porcelain）做的，它的基本结构是管道（plumbing，上水道和下水道）。

We can say that the porcelain layer provides a user-friendly interface to the plumbing. Most people only deal with the porcelain. Yet, when things go (terribly) wrong, and someone wants to understand why, they would have to roll-up their sleeves to check the plumbing. (Note: these terms are not mine, they are used very widely in  `git`).

我们可以说上层命令为底层命令提供了一个用户友好的接口。大多数人只会涉及到上层命令。然而，当事情变得（非常）糟糕时，有人可能就会想知道为什么，他们会卷起袖子去检查底层命令。（注意：这些术语并不是我发明的，它们在 `git` 中的使用非常广泛）。

> 译者注：读者若想更好的理解这两个术语，建议阅读[Git 内部原理 - 底层命令与上层命令](https://git-scm.com/book/zh/v2/Git-内部原理-底层命令与上层命令)。

`git`  uses this terminology as an analogy to separate the low-level commands that users don’t usually need to use directly (“plumbing” commands) from the more user-friendly high level commands (“porcelain” commands).

`git` 使用这些术语进行类比，从而将用户不常使用的底层命令（plumbing）和那些更友好的高层（porcelain）命令区分开。

So far, we have dealt with porcelain commands —  `git init`,  `git add`  or  `git commit`. Next, we transition to plumbing commands.

目前，我们已经接触过上层命令——`git init`、`git add` 和 `git commit`。接下来，我们转到底层命令。

# How to Create Objects in Git

# 如何创建对象

Let's start with creating an object and writing it into the objects’ database of  `git`, residing within  `.git\objects`. We'll find the SHA-1 hash value of a  ****blob****  by using our first plumbing command,  `git hash-object`, in the following way:

让我们从创建对象并将其写入 `git` 的对象数据库开始吧，`git` 的对象数据库位于 `.git\objects` 中。第一条底层命令 `git hash-object` 会让我们将找到 **blob 对象** 的 SHA-1 哈希值。方式如下：

On Windows:

`> echo git is awesome | git hash-object --stdin`

On UNIX:

`$ echo "git is awesome" | git hash-object --stdin`

By using  `--stdin`  we are instructing  `git hash-object`  to take its input from the standard input. This will provide us with the relevant hash value.

我们使用 `--stdin` 告知 `git hash-object` 从标准输入（standard input）获取输入内容，这将给我们提供相应的哈希值。

In order to actually write that  ****blob****  into  `git`’s object database, we can simply add the  `-w`  switch for  `git hash-object`. Then, we can check the contents of the  `.git`  folder, and see that they have changed.

为了真的将该 **blob 对象** 写入 `git` 的对象数据库，我们可以简单地给 `git hash-object` 加一个 `-w` 开关。然后，检查 `.git` 目录中的内容，看看它们有没有改变。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-113.png)

Writing a blob to the objects’ database

将一个 blob 对象写入对象数据库

We can now see that the hash of our  ****blob****  is —  `54f6...36`. We can also see that a directory has been created under  `.git\objects`, a directory named  `54`, and within it, a file by the name of  `f6...36`.

我们现在可以看到，这个 **blob** 的哈希值为 `54f6...36`， `.git\objects` 下也多出来了一个名为 `54` 的目录，目录内有一个名为 `f6..36` 的文件。

So  `git`  actually takes the first two characters of the SHA-1 hash and uses them as the name of a directory. The remaining characters are used as the filename for the file that actually contains the  ****blob****.

所以，`git` 实际上是使用 SHA-1 哈希值的前两个字符作为目录的名字，剩余字符用作 **blob** 所在文件的文件名。

Why is that so? Consider a fairly big repository, one that has 300,000 objects (****blobs****,  ****trees****, and  ****commits****) in its database. To look up a hash inside that list of 300,000 hashes can take a while. Thus,  `git`  simply divides that problem by 256.

为什么要这样呢？考虑一个非常大的仓库，仓库的数据库内存有三十万个对象（**blob 对象**、**树对象** 和 **提交对象**）。从这三十万个哈希值中找出一个值会花些时间，因此，`git` 将这个问题划分成了 256 份。

To look up the hash above,  `git`  would first look for the directory named  `54`  inside the directory  `.git\objects`, which may have up to 256 directories (`00`  through  `FF`). Then, it will search that directory, narrowing down the search as it goes.

为了查找上面的那个哈希值，`git` 会先寻找 `.git\objects` 目录下名为 `54` 的目录，然后搜索那个目录，这进一步缩小了搜索范围。`.git\objects` 目录下最多可能会有 256 个子目录（从 `00` 到 `FF`）。

Back to our process of generating a  ****commit****. We have now created an object. What is the type of that object? We can use another plumbing command,  `git cat-file -t`  (`-t`  stands for “type”), to check that out:

回到生成 **提交对象** 的过程中来，现在我们已经创建了一个对象，它的类型是什么呢？我们可以通过另一个底层命令 `git cat-file -t` （`-t` 代表“type”）瞧一瞧：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-114.png)

Not surprisingly, this object is a  ****blob****. We can also use  `git cat-file -p`  (`-p`  stands for “pretty-print”) to see its contents:

不出所料，这个对象是一个 **blob**。我们还可以使用 `git cat-file -p` （`-p` 代表“pretty-print”）查看它的内容：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-115.png)

This process of creating a  ****blob**** usually happens when we add something to the  ****staging area**** — that is, when we use  `git add`.

创建 **blob** 这个过程通常发生在我们将一些东西添加到 **暂存区** 的时候——也就是我们使用 `git add` 的时候。

Remember that  `git`  creates a  ****blob****  of the  __entire__  file that is staged. Even if a single character is modified or added (as we added  `!`  in our example before), the file has a new  ****blob**** with a new  ****hash****.

记住：`git` 是为 _整个_ 暂存的文件创建 **blob**。即使文件中只有修改或添加了一个字符（如同我们在之前的例子红添加 `!` 一样），该文件也会有一个新的 **blob**，这个 **blob** 有着新的哈希值。

Will there be any change to  `git status`?

`git status` 会有任何改变吗？

![](https://www.freecodecamp.org/news/content/images/2020/12/image-116.png)

Apparently, no. Adding a  ****blob****  object to  `git`’s internal database doesn’t change the status, as  `git`  doesn’t know of any tracked or untracked files at this stage.

显然没有。向 `git` 的内部数据库中添加一个 **blob** 对象并不会改变状态，因为 `git` 在这个阶段是不知道任何已跟踪或未跟踪文件的。

We need to track this file — add it to the  ****staging area****. To do that, we can use the plumbing command  `git update-index`, like so:  `git update-index --add --cacheinfo 100644 <blob-hash> <filename>`.

我们需要跟踪这个文件——把它添加到 **暂存区**。为此，我们可以使用底层命令 `git update-index`，例如：`git update-index --add --cacheinfo 100644 <blob-hash> <filename>`。

Note: (The  `cacheinfo`  is a 16-bit file mode  [as stored by git][3], following the layout of  [POSIX types and modes][4]. This is not within the scope of this post).

注意：`cacheinfo` 是一个[git 存储的][3]十六位的文件模式，这个模式遵循 [POSIX 类型和模式][4] 的布局。这超出了本文讨论的范围。

Running the command above will result in a change to  `.git`'s contents:

运行上述命令会改变 `.git` 目录的内容：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-117.png)

Can you spot the change? A new file by the name of  `index`  was created. This is it — the famous  ****index****  (or  ****staging area****), is basically a file that resides within  `.git\index`.

你能发现变化吗？多了一个名为 `index` 的新文件。这就是著名的 **索引** （或 **暂存区**），它基本上是一个位于 `.git\index` 中的文件。

So now that our  ****blob****  has been added to the  ****index****, we expect  `git status`  to look different, like this:

既然 **blob** 已经被添加到了 **索引**，我们希望 `git status` 看起来会有所不同，像这样：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-118.png)

That’s interesting! Two things happened here.

真有趣！这里发生了两件事。

First, we can see that  `new_file.txt`  appears in green, in the  `Changes to be committed`  area. That is so because the  ****index****  now has  `new_file.txt`, waiting to be committed.

第一件事，我们可以在 `changes to be committed` 中看到绿色的 `new_file.txt`。这是因为 **索引** 中有了 `new_file.txt`，它正等着被提交。

Second, we can see that  `new_file.txt`  appears in red — because  `git`  believes the  __file__  `my_file.txt`  has been deleted, and the fact that the file has been deleted is not staged.

第二件事，我们可以看到红色的 `new_file.txt`——因为 `git` 相信 `my_file.txt` 这个 _文件_ 已经被删除了，并且它没有被暂存。

This happens as we added the  ****blob****  with the contents  `git is awesome`  to the objects’ database, and told the  ****index****  that the file  `my_file.txt`  has the contents of that  ****blob****, but we never actually created that file.

这发生在我们将内容为 `git is awesome` 的 **blob** 添加到对象数据库中的时候，我们告诉 **索引** ，那个 **blob** 的内容在文件 `my_file.txt` 中，但是我们从未创建过那个文件。

We can easily solve this by taking the contents of the  ****blob****, and writing them to our file system, to a file called  `my_file.txt`:

通过将那个 **blob** 的内容写入我们文件系统中名为 `my_file.txt` 的文件，我们可以很容易地解决这个问题：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-119.png)

As a result, it will no longer appear in red by  `git status`:

执行 `git status` 后，它将不再出现在红色内容中：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-120.png)

So now it’s time to create a  ****commit****  object from our  ****staging area****. As explained above, a  ****commit****  object has a reference to a  ****tree****, so we need to create a  ****tree****.

现在是时候从我们的 **暂存区** 创建一个 **提交** 对象了。如上所述，一个 **提交** 对象引用着一个 **树对象**，所以我们需要创建一个 **树对象**。

We can do this with the command  `git write-tree`, which records the contents of the  ****index****  in a  ****tree****  object. Of course, we can use  `git cat-file -t`  to see that it’s indeed a  ****tree:****

我们可以用 `git write-tree` 做这件事，它会在一个 **树对象** 中记录 **索引** 的内容。当然，我们可以使用 `git cat-file -t` 进行确认：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-121.png)

Creating a tree object of the index

创建索引的树对象

And we can use  `git cat-file -p`  to see its contents:

我们还可以用 `git cat-file -p` 查看它的内容：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-122.png)

Great, so we created a  ****tree****, and now we need to create a  ****commit****  object that references this  ****tree****. To do that, we can use  `git commit-tree <tree-hash> -m <commit message>`:

太棒了！我们创建了一个 **树对象**，现在我们需要创建一个引用这个 **树对象** 的 **提交** 对象。为此，我们可以使用 `git commit-tree <tree-hash> -m <commit message>`：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-123.png)

You should now feel comfortable with the commands used to check the created object’s type, and print its contents:

你现在应该对查看对象类型和打印对象内容的命令感到得心应手了：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-124.png)

Creating a commit object

创建一个提交对象

Note that this  ****commit**** doesn’t have a  ****parent****, because it’s the first  ****commit****. When we add another  ****commit****  we will have to declare its  ****parent**** — we will do so later.

注意这个 **提交** 并没有 **父节点**，因为它是第一个 **提交**。当我们添加另一个 **提交** 时，我们就得声明它的 **父节点**了——我们稍后会做这个。

The last hash that we got —  `80e...8f`  – is a  ****commit****’s hash. We are actually very used to using these hashes — we look at them all the time. Note that this  ****commit**** owns a  ****tree**** object, with its own hash, which we rarely specify explicitly.

我们刚得到的哈希值（`80e...8f`）是一个 **提交对象** 的哈希值。实际上我们非常习惯使用这些哈希值——我们一直都在看它们。注意这个 **提交对象** 拥有一个 **树对象**，树对象有自己的哈希值，不过我们几乎不会显式地指定这个哈希值。

Will something change in  `git status`?

`git status` 会有所变化吗？

![](https://www.freecodecamp.org/news/content/images/2020/12/image-125.png)

Nope 🤔.

并没有 🤔.

Why is that? Well, to know that our file has been committed,  `git`  needs to know about the latest  ****commit****. How does  `git`  do that? It goes to the  `HEAD`:

为什么呢？`git` 需要知道最近一次 **提交**，才能知道文件已经被提交。那么 `git` 是怎么做的呢？它会去找 `HEAD`：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-126.png)

Looking at \`HEAD\` on Windows

在 Windows 上查看 \`HEAD\`

![](https://www.freecodecamp.org/news/content/images/2020/12/image-127.png)

Looking at \`HEAD\` on UNIX

在 UNIX 上查看 \`HEAD\`

`HEAD`  points to  `master`, but what is  `master`? We haven’t really created it yet.

`HEAD` 指向 `master`，但是 `master` 是什么呢？我们还没有创建它呢。

As we explained earlier in this post, a branch is simply a named reference to a  ****commit****. And in this case, we would like  `master`  to refer to the  ****commit****  with the hash  `80e8ed4fb0bfc3e7ba88ec417ecf2f6e6324998f`.

如同我们在前面解释的那样，分支只是 **提交对象** 的命名引用。这时，我们想要让 `master` 指向哈希值为 `80e8ed4fb0bfc3e7ba88ec417ecf2f6e6324998f` 的 **提交对象**。

We can achieve this by simply creating a file at  `\refs\heads\master`, with the contents of this hash, like so:

这实现起来很简单，在 `\refs\heads\master` 创建一个文件，文件内容为这个哈希值。像这样：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-128.png)

⭐ In sum, a  ****branch****  is just a file inside  `.git\refs\heads`, containing a hash of the  ****commit**** it refers to.

⭐ 总而言之，**分支** 只是 `.git\refs\heads` 中的一个文件，文件内容为该分支所指向的 **提交对象** 的哈希值。

Now, finally,  `git status`  and  `git log`  seem to appreciate our efforts:

现在，`git status` 和 `git log` 终于欣赏我们的付出了：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-129.png)

We have successfully created a  ****commit**** without using porcelain commands! How cool is that? 🎉

我们已经成功创建出了一个 **提交**，全程没有使用上层命令！是不是很酷？🎉

# How to Work with Branches in Git — Under the Hood

# 与 Git 分支一起工作——背后的故事

Just as we’ve created a  ****repository****  and a  ****commit**** without using  `git init`,  `git add`  or  `git commit`, now we will create and switch between  ****branches****  without using porcelain commands (`git branch`  or  `git checkout`).

就像我们不借助 `git init`、`git add` 或 `git commit` 创建 **仓库** 和 **提交** 一样，我们将要创建 **分支**，在不同 **分支** 间来回切换，整个过程也不使用上层命令（`git branch` 或 `git checkout`）。

It’s perfectly understandable if you are excited, I am too 🙂

如果你很兴奋，这是完全可以理解的。我也很兴奋 🙂

****Let’s start:****

**咱们开始吧：**

So far we only have one  ****branch****,  named  `master`. To create another one with the name  `test`  (as the equivalent of  `git branch test`), we would need to simply create a file named  `test`  within  `.git\refs\heads`, and the contents of that file would be the same  ****commit****’s hash as the  `master`  points to.

目前我们只有一个名为 `master` 的分支。要创建另一个名为 `test` 的分支（等价于执行 `git branch test`），我需要在 `.git\refs\heads` 下创建一个名为 `test` 的文件，文件的内容应该和 `master` 分支指向的那个  **提交** 的哈希值一致。

![](https://www.freecodecamp.org/news/content/images/2020/12/image-130.png)

If we use  `git log`, we can see that this is indeed the case — both  `master`  and  `test`  point to this  ****commit****:

如果我们使用 `git log`，就可以看到 `master` 和 `test` 确实是指向同一个 **提交**：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-131.png)

Let’s also switch to our newly created branch (the equivalent of  `git checkout test`). For that, we should change  `HEAD`  to point to our new branch:

我们也切换到新创建的分支吧（等价于执行 `git branch test`）。为此，我们需要改变 `HEAD` 的指向，让它指向我们的新分支：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-132.png)

Switching to branch \`test\` by changing \`HEAD\`

通过修改 \`HEAD\` 切换到 \`test\` 分支

As we can see, both  `git status`  and  `git log`  confirm that  `HEAD`  now points to  `test`, which is, therefore, the active branch.

我们可以看到：`git status` 和 `git log` 都确认 `HEAD` 现在指向的是 `test` 分支（活动分支）。

We can now use the commands we have already used to create another file and add it to the index:

我们现在可以使用之前的命令去创建另一个文件，然后将它添加到索引：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-133.png)

Using the commands above, we have created a file named  `test.txt`, with the content of  `Testing`, created a corresponding  ****blob,**** and added it to the ****index****. We also created a  ****tree****  representing the  ****index****.

我们用上面的命令创建了一个名为 `test.txt` 的文件，文件内容为 `Testing`。我们还创建了相应的 **blob**，将它添加了到 **索引**。我们还创建了代表这个 **索引** 的 **树对象**。

It’s now time to create a  ****commit****  referencing this  ****tree****. This time, we should also specify the  __parent__  of this  ****commit****  — which would be the previous  ****commit****. We specify the parent using the  `-p`  switch of  `git commit-tree`:

现在是时候创建引用这个 **树对象** 的 **提交** 了。这一次，我们还应该声明这个提交的 _父提交_，也就是之前的那次 **提交**。我们用 `git commit-tree` 命令的 `-p` 开关声明父节点：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-136.png)

We have just created a  ****commit****, with a  ****tree****  as well as a parent, as we can see:

可以看到，我们刚刚创建了一个 **提交**，还有它的 **树对象** 和父节点：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-139.png)

Will  `git log`  show us the new  ****commit****?

`git log` 会展示我们的新 **提交** 吗？

![](https://www.freecodecamp.org/news/content/images/2020/12/image-138.png)

As we can see,  `git log`  doesn’t show anything new. Why is that? 🤔 Remember that  `git log`  traces the  ****branches****  to find relevant commits to show. It shows us now  `test`  and the  ****commit****  it points to, and it also shows  `master`  which points to the same  ****commit****.

可以看到：`git log` 并没有展示任何新的东西。为什么呢？🤔 还记得 `git log` 会跟踪 **分支** ，查找要展示的相关提交吗？它现在给我们展示了 `test` 和它指向的那个 **提交**，还展示了指向同一个提交的 `master`。

That’s right — we need to change  `test`  to point to our new  ****commit****. We can do that by simply changing the contents of  `.git\refs\heads\test`:

没错，我们需要让 `test` 指向我们的新 **提交**。我们只需要稍微改变一下 `.git\refs\heads\test` 的内容：

![](https://www.freecodecamp.org/news/content/images/2020/12/image-140.png)

It worked! 🎉🥂

成功了! 🎉🥂

`git log`  goes to  `HEAD`, which tells it to go to the branch  `test`, which points to  ****commit****  `465...5e`, which links back to its parent  ****commit****  `80e...8f`.

`git log` 找到 `HEAD`，`HEAD` 告诉它去 `test` 分支，`test` 分支指向着 **提交** `465...5e`，这个提交又链接到它的父 **提交** `80e...8f`。

Feel free to admire the beauty, we  __git__ you. 😊

尽情欣赏美吧，we _git_ you。 😊
# Summary

# 总结

This post introduced you to the internals of  `git`. We started by covering the basic objects — **blobs**,  **trees,** and  **commits**.

本文向你介绍了 `git` 的内部原理，我们一开始讲了基本对象——**blob**、**树对象** 和 **提交对象** 。

We learned that a  **blob**  holds the contents of a file. A  **tree**  is a directory-listing, containing  **blobs**  and/or sub-**trees**. A  **commit**  is a snapshot of our working directory, with some meta-data such as the time or the commit message.

我们了解到 **blob** 持有文件的内容，**树对象** 是一个包含 **blob 对象** 和 **子树对象** 的目录列表，**提交对象** 是工作目录的一个快照，包含了一些像时间或提交信息这样的元数据。

We then discussed  **branches** and explained that they are nothing but a named reference to a  **commit**.

我们接着讨论了 **分支**，它们不过是 **提交对象** 的命名引用。

We went on to describe the  **working directory**, a directory that has a repository associated with it, the  **staging area (index)**  which holds the  **tree** for the next  **commit**, and the  **repository**, which is a collection of  **commits**.

我们继续描述了 **工作目录**，它是一个目录，有着相应的仓库。**暂存区（索引）** 为下一个 **提交对象** 持有对应的 **树对象**，而仓库就是一个 **提交对象** 的集合。

We clarified how these terms relate to  `git`  commands we know by creating a new repository and committing a file using the well-known  `git init`,  `git add`, and  `git commit`.

我们阐明了这些术语与 `git init`、`git add` 和 `git commit` 之间的关系，我们用这几条著名的命令创建新仓库、提交文件。

Then, we fearlessly deep-dived into  `git`. We stopped using porcelain commands and switched to plumbing commands.

然后，我们大胆地深入 `git` 内部，停止使用上层命令，转而使用底层命令。

By using  `echo`  and low-level commands such as  `git hash-object`, we were able to create a  ****blob****, add it to the  ****index****, create a  ****tree****  of the  ****index****, and create a  ****commit**** object pointing to that  ****tree****.

借助 `echo` 和 `git bash-object` 这类的底层命令，我们创建了 **blob**，把它添加到 **索引**，创建了 **索引** 的 **树对象**，以及指向这个 **树对象** 的 **提交对象**。

We were also able to create and switch between  ****branches****. Kudos to those of you who tried this on their own!👏

我们还创建了 **分支**，在 **分支** 间来回切换。为你们中那些亲身尝试这个过程的人鼓个掌！👏

Hopefully, after following this post you feel you’ve deepened your understanding of what is happening under the hood when working with  `git`.

希望你在跟着本文操作一遍之后，对使用 `git` 过程中背后发生的事情有了更深入的理解。

**Thanks for reading!**  If you enjoyed this article, you can read more on this topic on the  [s][5]wimm.io blog.

**感谢阅读本文！** 如果你喜欢这篇文章，你可以在 [swimm.io blog][5] 阅读更多这个主题的内容。

_[Omer Rosenbaum][6],  [Swimm][7]’s Chief Technology Officer. Cyber training expert and Founder of Checkpoint Security Academy. Author of_ [_Computer Networks (in Hebrew)_][8]_._

_[Omer Rosenbaum][6] 是 [Swimm][7] 的首席技术官、网络培训专家、Checkpoint 安全学院的创始人和[计算机网络（希伯来语）][8]的作者_.

_Visit My_ [_YouTube Channel_][9]_._

我的 _[YouTube 频道]_。

---

# Additional References

# 附加资源

A lot has been written and said about  `git`. Specifically, I found these references to be useful:

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
