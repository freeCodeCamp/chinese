> * 原文地址：[How to make your first pull request on GitHub 如何在 GitHub 提交第一个 pull request](https://www.freecodecamp.org/news/how-to-make-your-first-pull-request-on-github-3/)
> * 原文作者：M.V.Thanoshan
> * 译者：Humilitas
> * 校对者：

![How to make your first pull request on GitHub](https://www.freecodecamp.org/news/content/images/size/w2000/2020/01/Untitled-design.png)

## 什么是复刻（forking）?

When we love someone’s repository and would like to have it in our GitHub account, we fork it so that we can work with it separately.
我们可以通过复刻操作将喜爱的仓库保存自己的GitHub账户中，以便独立地对其进行操作。

When we fork a repository, we get an instance of that entire repository with its whole history. After forking, we can do whatever we want to do without affecting the original version.
通过复刻，我们可以得到包含完整版本历史的目标仓库的实例，之后可以对复刻得到的仓库进行任意操作而不会影响到原始仓库。

## 什么是拉取请求（pull request）?

Pull requests are the way we contribute to group projects or open source projects.
拉取请求是为团队项目或开源项目做贡献的一种方式。

For instance, a user Harry forks a repository of ThanoshanMV and makes changes to that repository. Now Harry can make a pull request to ThanoshanMV, but it’s up to ThanoshanMV to accept or decline it. It’s like saying, “ThanoshanMV, would you please pull my changes?”
例如，一个名为Harry forks的用户复刻了一个属于ThanoshanMV的仓库并对其做了一些变更，Harry可以向ThanoshanMV发起一个拉取请求，不过是否接受取决于ThanoshanMV。这就好像是在说：“ThanoshanMV，你可以拉取我所做的变更吗？”。

## 为开源项目做贡献

Not only can we contribute to an open source project with code, but we can also contribute in many other ways. Some of these ways are described below.
除了编写代码，我们还有许多其他方式可以为开源项目做贡献。下面介绍一些可选的贡献方式。

As  [99xtechnology][1]  IT firm’s hacktitude starting guide says, we can contribute to an open source project in the following ways:
[99xtechnology][1] 资讯科技公司的骇客入门指南为我们介绍了以下几种为开源项目做贡献的方式：

1.  Designing: You can construct the layouts of a project to improve its usability, improve the project’s navigation and menu based on user research programs, create art for logos or t-shirts, and provide style guides for the project.
1. 设计工作：构建整个项目的布局，提升可用性，提升导航和菜单的用户体验，创作项目logo和艺术T恤，提供样式指导等。
2.  Writing: You can write and improve the project’s documentation or translate the documentation, start a newsletter for the project or write tutorials for the project and curate highlights from the mailing list, or curate a folder of examples showing how the projects are used.
2. 文档工作：编写、完善或者翻译项目文档，编写项目相关的时事通讯，编写教程，筛选邮件列表中的亮点内容，创建项目使用示例合辑等。
3.  Organizing: You can link duplicate issues, suggest new issue labels, suggest to close old open issues and ask questions on recently opened issues to move the discussion forward.
3. 整理工作：链接重复的议题，提议新的议题标签，提议关闭过时的未解决议题，针对近期的议题抛出问题以推动相关讨论。
4.  Help others: Answer questions on open issues, review code on other people’s submissions and offer to mentor another contributor.
4. 提供帮助：在议题下解答问题，审查他人提交的代码，为其他贡献者提供指导。
5.  Coding: Help solve any open issues, ask if you can provide any new features and improve tooling and testing.
5. 编写代码：协助解决议题中提及的问题，询问是否需要自己提供帮助来增加新的功能特性或改进工具和测试流程。

## 创建第一个拉取请求!

If you’re not very familiar with Git & GitHub, please go review  [The beginner’s guide to Git & GitHub][2].
如果你还不太熟悉 Git 和 GitHub, 请查看  [The beginner’s guide to Git & GitHub][2].

### 1\. 复刻仓库

Fork the repository by clicking the fork button on the top of the page. This will create an instance of that entire repository in your account.
点击页面顶部的“fork”按钮即可复刻仓库，这将在你的账户中创建此仓库的完整实例。

![](https://www.freecodecamp.org/news/content/images/2020/01/fork-1.png)

### 2\. 克隆仓库

Once the repository is in your account, clone it to your machine to work with it locally.
现在你的账户中已经包含了这个仓库，将它克隆到本地来进行编辑。

To clone, click on the clone button and copy the link.
点击“clone”按钮，复制下面的链接。

![](https://www.freecodecamp.org/news/content/images/2020/01/clone1.png)

Open the terminal and run the following command. It will clone the repository locally.
打开终端并执行如下命令，把仓库克隆到本地。

```
$ git clone [HTTPS ADDRESS]
```

![](https://www.freecodecamp.org/news/content/images/2020/01/clone2.png)

Now we have set up a copy of the master branch from the main online project repository.
现在我们建立了远程仓库的master分支的一个副本。

We need to go to that cloned directory by running this command:
运行如下命令，进入项目目录：

```
$ cd [NAME OF REPOSITORY]
```

![](https://www.freecodecamp.org/news/content/images/2020/01/clone3.png)

### 3\. 创建一个分支

It’s good practice to create a new branch when working with repositories, whether it’s a small project or contributing to a group's work.
不管是对于小项目还是团队协作的项目，使用仓库时，最好新建一个分支。
Branch name should be short and it should reflect the work we’re doing.
分支名称应该保持简短，并且能够反映我们所做的工作。
Now create a branch using the  `git checkout`  command:
使用  `git checkout`  命令来创建一个分支：

```
$ git checkout -b [Branch Name]
```

![](https://www.freecodecamp.org/news/content/images/2020/01/branch1.png)

### 4\. 进行更改并提交

Make essential changes to the project and save it.
对项目进行必要的更改并保存。
Then execute  `git status`  , and you’ll see the changes.
执行  `git status`  , 查看变更。

![](https://www.freecodecamp.org/news/content/images/2020/01/status.png)

Add those changes to the branch you just created using the  `git add`  command:
执行  `git add`  命令，将这些变更加入到刚刚创建的分支:

```
$ git add .
```

![](https://www.freecodecamp.org/news/content/images/2020/01/add1.png)

Now commit those changes using the  `git commit`  command:
使用  `git commit`  提交这些变更:

```
$ git commit -m "Adding an article to week 02 of articles of the week"
```

![](https://www.freecodecamp.org/news/content/images/2020/01/commit.png)

### 5\. 把变更推送到GitHub

In order to push the changes to GitHub, we need to identify the remote’s name.
在推送变更之前先确认远程库的名称。

```
$ git remote
```

![](https://www.freecodecamp.org/news/content/images/2020/01/remote.png)

For this repository the remote’s name is “origin”.
当前仓库对应的远程库名称是“origin”。

After identifying the remote’s name we can safely push those changes to GitHub.
确认了远程库的名称之后，可以放心的把变更推送到GitHub。

```
git push origin [Branch Name]
```

![](https://www.freecodecamp.org/news/content/images/2020/01/branch2.png)

### 6\. 创建拉取请求

Go to your repository on GitHub and you’ll see a button “Compare & pull request” and click it.
在GitHub仓库中可以看到一个“Compare & pull request”按钮，点击它。

![](https://www.freecodecamp.org/news/content/images/2020/01/compare.png)

Please provide necessary details on what you’ve done (You can reference issues using “#”). Now submit the pull request.
请提供必要的说明来介绍你所做的变更（可以使用“#”来引用议题）。提交拉取请求。

Congratulations! You've made your first pull request.

![](https://www.freecodecamp.org/news/content/images/2020/01/pullRequest-1.png)

If your pull request is accepted you’ll receive an email.
如果拉取请求被接受的话，你将会收到邮件通知。

### 7\. 同步复刻的master分支

Before submitting any pull requests to the original repository you have to sync your repository to the original one.
在向原始仓库提交拉取请求之前，必须先将原始仓库的最新内容同步到本地仓库。

Even if you are not going to submit a pull request to the original repository, it’s better to sync with the original repository as some additional features and bug fixes may have been done since you forked the original repository.
即使没打算提交拉取请求也应该及时同步，因为自你复刻仓库之后，原始仓库中的项目可能添加了一些新的功能特性或者修复了一些bug。

Follow these steps to update/sync those changes to your master branch:
按照以下步骤来更新你的master分支：

1.  First, check which branch you are in.
1. 首先查看当前所在分支。

```
$ git branch
```

![](https://www.freecodecamp.org/news/content/images/2020/01/branch4.png)

It’ll list all branches and indicates the current or active branch in green.
这将列出所有分支，并以绿色来指明当前或活动分支。

2\. Switch to the master branch.
2\. 切换到master分支。

```
$ git checkout master
```

![](https://www.freecodecamp.org/news/content/images/2020/01/master9.png)

3\. Add the original repository as an upstream repository.
3\. 将原始仓库添加为upstream仓库。

In order to pull the changes from the original repository into your forked version, you need to add the original Git repository as an upstream repository.
为了能够拉取原始仓库的变更到你的复刻仓库中，需要将原始仓库添加为upstream仓库。

```
$ git remote add upstream [HTTPS]
```

Here, \[HTTPS\] is the URL that you have to copy from the owner’s repository.
这里的 \[HTTPS\] 是你从原始仓库页面复制的URL。

![](https://www.freecodecamp.org/news/content/images/2020/01/owner-repo.png)

![](https://www.freecodecamp.org/news/content/images/2020/01/remote-add.png)

4\. Fetch the repository.
4\. 获取原始仓库的变更

Fetch all of the changes from the original repository. Commits to the original repository will be stored in a local branch called upstream/master.
从原始仓库获取变更，所有提交到原始仓库的变更将会保存在本地的upstream/master分支中。

```
$ git fetch upstream
```

![](https://www.freecodecamp.org/news/content/images/2020/01/fetch.png)

5\. Merge it.
5\. 合并变更

Merge the changes from the upstream/master into your local master branch. This will bring your fork’s master branch into sync with the upstream repository without losing your local changes.
将upstream/master分支中的变更合并到本地的master分支，这样就能够做到让本地的master分支与原始仓库保持同步的同时保留本地变更。

```
$ git merge upstream/master
```

6\. Push changes to GitHub
6\. 把变更推送到GitHub

At this point your local branch is synced to the original repository’s master branch. If you want to update the GitHub repository, you need to push your changes.
现在你的本地分支已经原始仓库的master分支同步了。如果想更新GitHub仓库，需要把变更推送到GitHub。

```
$ git push origin master
```

**NOTE:**  After syncing your forked master branch you can remove that remote if you want to. But you’ll need to update/sync your repository in future too, so it's best practice to keep it.
**注意：**  在同步了master分支之后，可以移除upstream仓库。不过以后同步的时候还会用到，所以最好留着它。

![](https://www.freecodecamp.org/news/content/images/2020/01/remote-dlt.png)

```
$ git remote rm [Remote Name]
```

### 8\. 删除无用的分支

Branches are created for a special purpose. Once that purpose is accomplished, those branches aren’t necessary, so you can delete them.
创建分支是为了完成一些特定目标，目标完成之后，这些分支就没必要继续存在了，可以删除掉。

```
$ git branch -d [Branch Name]
```

![](https://www.freecodecamp.org/news/content/images/2020/01/delete.png)

You can delete the version of it on GitHub, too.
GitHub上的分支也可以删除。

```
git push origin --delete [Branch Name]
```

![](https://www.freecodecamp.org/news/content/images/2020/01/last.png)

## 总结

GitHub is a powerful tool to control version history. Everyone can contribute to open source projects by making pull requests. Contributions aren’t always code – there are other ways to contribute, too.
GitHub是一个强大的版本历史控制工具，每一个人都可通过发起拉取请求来为开源项目做贡献，而且除了编写代码之外还有许多方式可以做出贡献。

Finally, I have to tell you that you shouldn't worry if your pull requests are rejected. Maintainers spend a lot time improving their projects, and they know a lot more about their projects than we do. So don't worry if your request isn't merged.
最后要说的是，如果你的拉取请求没有被接受也不要感到困惑，维护者们花费了大量的时间精力来优化项目，他们比我们更加了解整个项目，所以他们知道如何做出合理选择。

> Stay strong, stay positive, and never give up.  
> ― Roy T. Bennett,  [The Light in the Heart][3]

文章首发于  [Medium][4].

联系作者  [Twitter][5].

**请继续为开源世界做贡献！**

  

[1]: https://www.99xtechnology.com/
[2]: https://medium.com/@mvthanoshan9/ubuntu-a-beginners-guide-to-git-github-44a2d2fda0b8
[3]: https://www.goodreads.com/work/quotes/49604402
[4]: https://medium.com/@mvthanoshan9/how-to-make-your-first-pull-request-on-github-9aefca5cc837
[5]: https://twitter.com/ThanoshanMV
