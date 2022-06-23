> - 原文地址：[How to Recover a Deleted File in Git – Revert Changes After a Hard Reset](https://www.freecodecamp.org/news/how-to-recover-a-deleted-file-in-git/)
> - 原文作者：[Zaira Hira](https://www.freecodecamp.org/news/author/zaira/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![How to Recover a Deleted File in Git – Revert Changes After a Hard Reset](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/Copy-of-read-write-files-python--1-.png)

Git is a version control system that helps you keep track of the changes in a project's life cycle. It preserves the history of the project and allows you and your team members to coordinate effectively throughout.

There could be situations where you deleted a file and you want to recover it. The good news is that you can – most of the time – recover the files when using a version control system (VCS).

In this tutorial, we will learn the different methods that Git offers to restore deleted files.

## How to Recover Files after Committing Changes

Let's say you committed a change but did a hard reset ( `git reset --hard HEAD`) to a different commit which removed the latest commit from your current branch.

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

## How to Recover Files When Changes Are Staged but Not Committed

假设你用`git add <file-name>`暂存了一个文件，然后在提交前用`git reset --hard HEAD`做了一次硬重置。之后，您发现缓存的文件不见了。在这种情况下，你也可以恢复这些文件。

我们可以使用`git fsck`命令来恢复硬重置后的文件。

### What is `git fsk`?

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

## How to Restore Changes that Are Neither Committed nor Staged

在既没有暂存也没有提交的情况下，Git 无法帮助你恢复这些文件。

这是因为这些文件没有被添加到暂存区，Git 无法得知这些文件的状态。

在这种情况下，在临时文件或文本编辑器的缓存历史中搜索会有帮助（译者注： 如 jetbrains 开发的 IDE 的 Local History 功能）。

## 收尾

在处理有风险的文件时，最好是使用 VCS（版本控制系统）。通过这种方式，文件将被保存下来，并减少意外数据丢失的机会。

在本教程中，我们学习了如何恢复被删除的文件，无论它们是被缓存（staged ）的还是提交（committed）的。

我希望你认为本教程对你有帮助。谢谢你读到最后。

你从本教程中学到的最喜欢的东西是什么？请在[推特](https://twitter.com/hira_zaira)上告诉我!

你也可以阅读我的其他文章 [这里](https://www.freecodecamp.org/news/author/zaira/)。