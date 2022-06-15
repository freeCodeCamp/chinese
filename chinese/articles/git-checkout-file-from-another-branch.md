> - 原文地址：[Git Checkout – How to Checkout a File from Another Branch](https://www.freecodecamp.org/news/git-checkout-file-from-another-branch/)
> - 原文作者：[Tim Mouskhelichvili](https://www.freecodecamp.org/news/author/tim-mouskhelichvili/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Git Checkout – How to Checkout a File from Another Branch](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/cover.png)

当你在 Git 中处理一个仓库时，你可能需要从另一个分支中获取（checkout）一个指定的文件。

幸运的是，Git 提供了许多可能的方法来快速完成这项任务。其中一个最简单的解决方案是使用`git checkout`命令，将指定的文件作为一个参数。

在这篇文章中，我们将分析这个问题的不同解决方案，并介绍每一种解决方案所需要遵循的流程。

让我们开始吧 😎.

## Git Checkout Use Case Example

你正在处理一个名为`feature/A`的分支，其中包含一个名为`utils.js`的文件。

你有另一个名为 "feature/B "的分支，里面有一个更新的 "utils.js "文件。

你想签出该文件，并将其从`feature/B`分支带到`feature/A`分支。

下面是这个任务的三种可行的解决方案。

### Solution 1: Use the `git checkout` command

`git checkout`命令提供了一个简单的方法来从另一个分支获取文件或文件夹。

以下是从另一个分支获得（checkout）文件的语法:

```Bash
git checkout <other-branch-name> -- path/to/your/folder
```

以下是要遵循的流程:

1\. 切换（checkout）到你想复制文件的那个分支。

```Bash
git checkout feature/A
```

2\. 你在当前分支上，复制该文件。

```Bash
git checkout feature/B -- utils.js
```

3\. 使用[git status](https://timmousk.com/blog/git-status/)命令来确保文件已经被复制了。

4\. 提交并推送到远程。

在使用 `checkout` 命令时，你也可以得到:

- 一个来自另一个分支的文件夹。
- 通过指定每一个文件，可以指定多个文件

另外，请注意，你可以从 `stash` 获得一个文件/文件夹。

### Solution 2: Use the `git restore` command

另一个选择是使用`git switch`命令和`git restore`命令。

如果你从未听说过这两个命令，那也没关系。它们是比较新的。Git 在 2019 年的 2.23 版本中引入了它们。

这两个命令的目的是减少使用 `git checkout`命令，以简化用户的工作。

`git restore`命令可以恢复工作树。

`git switch`命令切换分支。

下面是从另一个分支获取文件的过程:

1\. 切换到你想获取（checkout）文件的分支。

```Bash
git switch feature/A
```

2\. 从另一个分支获取文件。

```Bash
git restore --source feature/B -- utils.js
```

3\. 提交并推送更改。

### Solution 3: Use the `git show` command

最后，我们可以使用`git show`命令。

以下是要遵循的流程:

1\. 切换到工作分支。

```Bash
git switch feature/A
```

2\. 从另一个分支获取文件。

```Bash
git show feature/B:path/utils.js > path/utils.js
```

3\. 提交并推送更改。

**注意:** 这次你需要指定来自你的目录根的相对路径。

## 最终想法

正如你所看到的，从另一个分支获取一个文件并不是什么像发射火箭那样困难。

当我在日常生活中需要这样做时，我通常使用`git checkout`命令。

![6ii6ur](https://www.freecodecamp.org/news/content/images/2022/06/6ii6ur.jpg)

如果你有兴趣发现更多关于 Git 或 TypeScript 等 Web 开发技术的信息，请访问[我的博客](https://timmousk.com/)。

谢谢你阅读这篇文章。
