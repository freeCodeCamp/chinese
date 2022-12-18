> -   原文地址：[How to make your first pull request on GitHub 如何在 GitHub 提交第一个 pull request](https://www.freecodecamp.org/news/how-to-make-your-first-pull-request-on-github-3/)
> -   原文作者：M.V.Thanoshan
> -   译者：Humilitas
> -   校对者：

![How to make your first pull request on GitHub](https://www.freecodecamp.org/news/content/images/size/w2000/2020/01/Untitled-design.png)

## 什么是复刻（forking）

我们可以通过复刻操作将喜爱的仓库保存自己的 GitHub 账户中，以便独立地对其进行操作。

通过复刻，我们可以得到包含完整版本历史的目标仓库的实例，之后可以对复刻得到的仓库进行任意操作而不会影响到原始仓库。

## 什么是拉取请求（pull request）

拉取请求是为团队项目或开源项目做贡献的一种方式。

例如，一个名为 Harry forks 的用户复刻了一个属于 ThanoshanMV 的仓库并对其做了一些变更，Harry 可以向 ThanoshanMV 发起一个拉取请求，不过是否接受取决于 ThanoshanMV。这就好像是在说：“ThanoshanMV，你可以拉取我所做的变更吗？”。

## 为开源项目做贡献

除了编写代码，还有许多其他方式可以为开源项目做贡献。下面介绍一些可选的贡献方式。

[99xtechnology][1] 资讯科技公司的骇客入门指南为我们介绍了以下几种为开源项目做贡献的方式：

1. 设计工作：构建整个项目的布局，提升可用性，提升导航和菜单的用户体验，创作项目 logo 和艺术 T 恤，提供样式指导等。

2. 文档工作：编写、完善或者翻译项目文档，编写项目相关的时事通讯，编写教程，筛选邮件列表中的亮点内容，创建项目使用示例合辑等。

3. 整理工作：链接重复的议题，提议新的议题标签，提议关闭过时的未解决议题，针对近期的议题抛出问题以推动相关讨论。

4. 提供帮助：在议题下解答问题，审查他人提交的代码，为其他贡献者提供指导。

5. 编写代码：协助解决议题中提及的问题，询问是否需要自己提供帮助来增加新的功能特性或改进工具和测试流程。

## 创建第一个拉取请求

如果你还不太熟悉 Git 和 GitHub, 请查看 [The beginner’s guide to Git & GitHub][2].

### 1\. 复刻仓库

点击页面顶部的“fork”按钮即可复刻仓库，这将在你的账户中创建此仓库的完整实例。

![](https://www.freecodecamp.org/news/content/images/2020/01/fork-1.png)

### 2\. 克隆仓库

现在你的账户中已经包含了这个仓库，将它克隆到本地来进行编辑。

点击“clone”按钮，复制下面的链接。

![](https://www.freecodecamp.org/news/content/images/2020/01/clone1.png)

打开终端并执行如下命令，把仓库克隆到本地。

```plain
$ git clone [HTTPS ADDRESS]
```

![](https://www.freecodecamp.org/news/content/images/2020/01/clone2.png)

现在我们建立了远程仓库的 master 分支的一个副本。

运行如下命令，进入项目目录：

```plain
$ cd [NAME OF REPOSITORY]
```

![](https://www.freecodecamp.org/news/content/images/2020/01/clone3.png)

### 3\. 创建一个分支

不管是对于小项目还是团队协作的项目，使用仓库时，最好新建一个分支。

分支名称应该保持简短，并且能够反映我们所做的工作。

使用 `git checkout` 命令来创建一个分支：

```plain
$ git checkout -b [Branch Name]
```

![](https://www.freecodecamp.org/news/content/images/2020/01/branch1.png)

### 4\. 进行更改并提交

对项目进行必要的更改并保存。

执行 `git status` , 查看变更。

![](https://www.freecodecamp.org/news/content/images/2020/01/status.png)

执行 `git add` 命令，将这些变更加入到刚刚创建的分支:

```plain
$ git add .
```

![](https://www.freecodecamp.org/news/content/images/2020/01/add1.png)

使用 `git commit` 提交这些变更:

```plain
$ git commit -m "Adding an article to week 02 of articles of the week"
```

![](https://www.freecodecamp.org/news/content/images/2020/01/commit.png)

### 5\. 把变更推送到 GitHub

在推送变更之前先确认远程库的名称。

```plain
$ git remote
```

![](https://www.freecodecamp.org/news/content/images/2020/01/remote.png)

当前仓库对应的远程库名称是“origin”。

确认了远程库的名称之后，可以放心的把变更推送到 GitHub。

```plain
git push origin [Branch Name]
```

![](https://www.freecodecamp.org/news/content/images/2020/01/branch2.png)

### 6\. 创建拉取请求

在 GitHub 仓库中可以看到一个“Compare & pull request”按钮，点击它。

![](https://www.freecodecamp.org/news/content/images/2020/01/compare.png)

请提供必要的说明来介绍你所做的变更（可以使用“#”来引用议题）。提交拉取请求。

恭喜！你已经成功创建了第一个拉取请求。

![](https://www.freecodecamp.org/news/content/images/2020/01/pullRequest-1.png)

如果拉取请求被接受的话，你将会收到邮件通知。

### 7\. 同步复刻的 master 分支

在向原始仓库提交拉取请求之前，必须先将原始仓库的最新内容同步到本地仓库。

即使没打算提交拉取请求也应该及时同步，因为自你复刻仓库之后，原始仓库中的项目可能添加了一些新的功能特性或者修复了一些 bug。

按照以下步骤来更新你的 master 分支：

1. 首先查看当前所在分支。

```plain
$ git branch
```

![](https://www.freecodecamp.org/news/content/images/2020/01/branch4.png)

这将列出所有分支，并以绿色来指明当前或活动分支。

2\. 切换到 master 分支。

```plain
$ git checkout master
```

![](https://www.freecodecamp.org/news/content/images/2020/01/master9.png)

3\. 将原始仓库添加为 upstream 仓库。

为了能够拉取原始仓库的变更到你的复刻仓库中，需要将原始仓库添加为 upstream 仓库。

```plain
$ git remote add upstream [HTTPS]
```

这里的 \[HTTPS\] 是你从原始仓库页面复制的 URL。

![](https://www.freecodecamp.org/news/content/images/2020/01/owner-repo.png)

![](https://www.freecodecamp.org/news/content/images/2020/01/remote-add.png)

4\. 获取原始仓库的变更

从原始仓库获取变更，所有提交到原始仓库的变更将会保存在本地的 upstream/master 分支中。

```plain
$ git fetch upstream
```

![](https://www.freecodecamp.org/news/content/images/2020/01/fetch.png)

5\. 合并变更

将 upstream/master 分支中的变更合并到本地的 master 分支，这样就能够做到让本地的 master 分支与原始仓库保持同步的同时保留本地变更。

```plain
$ git merge upstream/master
```

6\. 把变更推送到 GitHub

现在你的本地分支已经原始仓库的 master 分支同步了。如果想更新 GitHub 仓库，需要把变更推送到 GitHub。

```plain
$ git push origin master
```

**注意：** 在同步了 master 分支之后，可以移除 upstream 仓库。不过以后同步的时候还会用到，所以最好留着它。

![](https://www.freecodecamp.org/news/content/images/2020/01/remote-dlt.png)

```plain
$ git remote rm [Remote Name]
```

### 8\. 删除无用的分支

创建分支是为了完成一些特定目标，目标完成之后，这些分支就没必要继续存在了，可以删除掉。

```plain
$ git branch -d [Branch Name]
```

![](https://www.freecodecamp.org/news/content/images/2020/01/delete.png)

GitHub 上的无用分支也可以删除。

```plain
git push origin --delete [Branch Name]
```

![](https://www.freecodecamp.org/news/content/images/2020/01/last.png)

## 总结

GitHub 是一个强大的版本历史控制工具，每一个人都可通过发起拉取请求来为开源项目做贡献，而且除了编写代码之外还有许多方式可以做出贡献。

最后要说的是，如果你的拉取请求没有被接受也不要感到困惑，维护者们花费了大量的时间精力来优化项目，他们比我们更加了解整个项目，所以他们知道如何做出合理选择。

> Stay strong, stay positive, and never give up.  
> ― Roy T. Bennett, [The Light in the Heart][3]

文章首发于 [Medium][4].

联系作者 [Twitter][5].

**请继续为开源世界做贡献！**

[1]: https://www.99xtechnology.com/
[2]: https://medium.com/@mvthanoshan9/ubuntu-a-beginners-guide-to-git-github-44a2d2fda0b8
[3]: https://www.goodreads.com/work/quotes/49604402
[4]: https://medium.com/@mvthanoshan9/how-to-make-your-first-pull-request-on-github-9aefca5cc837
[5]: https://twitter.com/ThanoshanMV
