> - 原文地址：[How to Recover a Deleted File in Git – Revert Changes After a Hard Reset](https://www.freecodecamp.org/news/how-to-recover-a-deleted-file-in-git/)
> - 原文作者：[Zaira Hira](https://www.freecodecamp.org/news/author/zaira/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![How to Recover a Deleted File in Git – Revert Changes After a Hard Reset](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/Copy-of-read-write-files-python--1-.png)

Git 是一个版本控制系统，帮助你跟踪项目生命周期中的变化。它保留了项目的历史，让你和你的团队成员在整个过程中有效地协作。

可能有这样的情况：你删除了一个文件，你想恢复它。好消息是，在使用版本控制系统（VCS）时，你可以大多数时候，可以恢复文件。

在本教程中，我们将学习 Git 提供的恢复被删除文件的不同方法。

## 如何在提交(commit)修改后恢复文件

假设你提交了一个修改，但做了一个硬重置（`git reset --hard HEAD`）到一个不同的提交，这个提交删除了你当前分支中的最新提交。

![Untitled-2022-06-21-2120](https://www.freecodecamp.org/news/content/images/2022/06/Untitled-2022-06-21-2120.png)

硬重置(Hard reset )的解释。

在这种情况下，你可以用`git checkout`或`git reflog`来恢复文件。

你可以从命令中找到上次提交的哈希值。`git log`。

之后，只需用以下方法恢复到之前的提交:

```bash
git checkout <hash-id>
```

如果你没有哈希 ID，你可以使用`git reflog`命令。

`reflog`是一种记录机制，它记录了所有的变化，并与它们唯一的`hash-id`相对应。

下面是一个`git reflog`输出的例子:

![image-155](https://www.freecodecamp.org/news/content/images/2022/06/image-155.png)

`git reflog`的输出

挑选提交 ID 并使用它来恢复该提交。

```bash
git reflog <hash-id>
```

## 如何在更改已进入缓存（Staged）但未提交（Committed）的情况下恢复文件

假设你用`git add <file-name>`暂存了一个文件，然后在提交前用`git reset --hard HEAD`做了一次硬重置。之后，您发现缓存的文件不见了。在这种情况下，你也可以恢复这些文件。

我们可以使用`git fsck`命令来恢复硬重置后的文件。

### 什么是 `git fsk`?

`git fsck`将进行文件系统检查。它检查`.git`目录中所有不属于任何修改的 `悬空(dangling )的blobs`。例如，可能有一些被分阶段的修改(some changes that were staged)，但没有被添加到任何地方。

![image-154](https://www.freecodecamp.org/news/content/images/2022/06/image-154.png)

`git fsck`的输出。

一旦我们能够识别 `dangling blobs`，我们就可以用`git show`来查看细节。

```bash
git show f24facc98b387a375a50ba6d19193626cbfe7d45
```

根据不同的变化，你将能够查看对应的变化。

你可能还想把变化保存在一个文件中。你可以简单地使用`>`操作符将输出重定向到一个文件。

```bash
git show f24facc98b387a375a50ba6d19193626cbfe7d45 > restored_file.txt
```

现在，`restored_file.txt`将包括提交的内容。

## 如何恢复既未提交（Committed ）也未缓存（Staged）的更改

在既没有暂存也没有提交的情况下，Git 无法帮助你恢复这些文件。

这是因为这些文件没有被添加到暂存区，Git 无法得知这些文件的状态。

在这种情况下，在临时文件或文本编辑器的缓存历史中搜索会有帮助（译者注： 如 jetbrains 开发的 IDE 的 Local History 功能）。

## 收尾

在处理有风险的文件时，最好是使用 VCS（版本控制系统）。通过这种方式，文件将被保存下来，并减少意外数据丢失的机会。

在本教程中，我们学习了如何恢复被删除的文件，无论它们是被缓存（staged ）的还是提交（committed）的。

我希望你认为本教程对你有帮助。谢谢你读到最后。

你从本教程中学到的最喜欢的东西是什么？请在[推特](https://twitter.com/hira_zaira)上告诉我!

你也可以阅读我的其他文章 [这里](https://www.freecodecamp.org/news/author/zaira/)。
