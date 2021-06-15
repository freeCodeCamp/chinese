> * 原文：[Git Clone Branch – How to Clone a Specific Branch 如何 Git Clone 指定分支](https://www.freecodecamp.org/news/git-clone-branch-how-to-clone-a-specific-branch/)
> * 作者：Bolaji Ayodeji
> * 译者：Tengfei Wang
> * 校对者：

![Git Clone Branch – How to Clone a Specific Branch](https://www.freecodecamp.org/news/content/images/size/w2000/2020/06/article-banner--1-.gif)


Git是分布式的, 不同于 SVN 和 CVS 等旧的集中式版本控制系统。 每个开发者都能在本地和远程查看记录和控制代码。
他们也可以视情况从不同位置访问或操纵不同部分的代码。

自从 Linus Torvalds （Linux 操作系统内核的著名作者） 在2005年为 Linux 内核开发了 Git，它就开始成为世界上使用最广泛的现代版本控制系统。

在本篇文章中，我会介绍 Git 克隆和 Git 分支工作流，并且展示如何根据需求克隆一个指定的分支。让我们开始吧！

## 必备知识

-   基本的终端知识
-   能使用终端指令
-   安装 Git（我也会教如何安装）
-   GitHub 账号
-   好的心情（笑起来，朋友）

## 快速入门 Git 和 GitHub

摘自  [维基百科][1],

> **Git**  是软件开发中用来跟踪项目（代码）变更的一个分布式版本控制系统。 主要专注于开发人员之间加强协调，协作，速度和效率。

> **GitHub**  是基于 Web 的托管服务，使用 Git 进行版本控制。 它提供了 Git 的所有分布式版本控制和源代码管理的功能，还添加了更多计算机编码的功能。

## 如何在 Windows 上安装 Git

下载和安装最新的版本  [Windows 上 Git 的安装程序][2]

## 如何在 Linux 上安装 Git

不同的 Linux 发行版本，有不同的命令：

### Debian or Ubuntu

```
sudo apt-get update
sudo apt-get install git
```

### Fedora

```
sudo dnf install git
```

### CentOS

```
sudo yum install git
```

### Arch Linux

```
sudo pacman -Sy git
```

### Gentoo

```
sudo emerge --ask --verbose dev-vcs/git
```

## 如何在 Mac 上安装 Git

下载和安装最新的版本  [Mac 上 Git 的安装程序][3].

或者可以执行如下指令：

```
brew install git
```

现在我们已经安装了 Git，让我们继续本教程。

## 简介 Git 克隆

Git 允许你在“仓库”中版本化管理项目。该仓库是基于 Web 的托管服务进行版本控制，和 GitHub一样。

你可以克隆仓库到你本地的机器，并且得到所有的文件和分支。（我稍后会讲解更多关于分支）

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-23-at-5.47.48-AM.png)

例如，可以通过SSH克隆 freeCodeCamp 的仓库，如下：

```
git clone git@github.com:freeCodeCamp/freeCodeCamp.git
```

## 简介 Git 分支

在做项目时，你可能会有不同的功能。并且有多个贡献者会做该项目及其功能。

分支允许你在  `master`  分支中使用相同的文件创建一个 “playground（游乐场）” 。你可以使用这个分支构建独立的功能，测试新功能，做重大改动，修复代码，写文档、或者在不中断的情况下尝试自己的想法、或者优化生产代码。

分支是 Git 中的一个核心概念，在 Github 中也用于管理一个项目不同版本的工作流。  `master`  分支始终是仓库中的默认分支，通常被认为是 “生产和可部署代码”。 新分支如  `passwordless-auth`  或  `refactor-signup-ux`  可以从  `master`  分支中创建。

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-22-at-2.47.53-AM.png)

freeCodeCamp 仓库中的所有分支

## 如何克隆 Git 分支

当你使用  `git clone`  指令克隆仓库时，请记住这会克隆分支和远程  `HEAD`  。默认情况下通常是  `master`  分支，并包括仓库中的所有其他分支。

所以当你克隆一个仓库时，你克隆了  `master`  分支和所有其他分支。这意味着你可以随意切换到另一个分支。

假设你在项目上的任务是开发一项功能，将无密码身份验证添加到用户仪表板。这个功能位于  `passwordless-auth`  分支上。

你不需要  `master`  分支，因为你的 “功能分支” 之后会被合并到  `master`  中。那么你如何克隆  `passwordless-auth`  分支，而无需获取所有其他分支的 “一堆你不需要的文件” ？

我创建了示例仓库来解释这一点。 此仓库包含一个使用 NextJS 构建的简单博客，有四个虚拟分支机构：

-   master
-   dev
-   staging
-   passwordless-auth

在 Nextjs 中，文件夹   `pages/api`  内的任何文件都被映射到  `/api/*` 路径，并被视为替代  `page`  的 API 端点。在我的仓库中，我还创建了不同的虚拟 APIs  [in this directory][4] 以使每个分支都不同。

  `master`  分支保存  **pages/api/hello.js**  文件，而  `passwordless-auth`  分支保存  **pages/api/auth.js** 文件。每个文件仅返回一个伪文本响应。查看  `master`  分支的 API 响应 [here][5] （给你一个特别的消息）。

让我们克隆仓库：

```
git clone git@github.com:BolajiAyodeji/nextjs-blog.git
```

我们可以访问此仓库中的所有分支，你可以在每个版本之间轻松切换，以查看每个版本及其文件。

```
git branch -a
```

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-22-at-4.51.56-AM.png)

想下  **remotes/origin/..**  分支来自哪里？

当你克隆仓库时，你是从互联网或内部服务器上的  **remote**  仓库提取数据。Origin 是你的 Git 创建的别名，用于替换远程 URL (如果你愿意，你可以更改或指定其他别名)。

 **remotes/origin/..** 分支指向从互联网克隆的源仓库，因此你仍然可以从源执行 pull/push 。 

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-23-at-5.24.43-AM.png)


所以当你克隆  `master`  分支到你的机器上时，  `remotes/origin/master`  是  `master`  在网络上的源分支， `master`  是你本机的分支。因此，你将从  `remotes/origin/master`  中 pull/push。
  
总的来说  **Remote**  是指向互联网上仓库的 URL，而  **Origin**  是这个远程 URL 的别名。

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-23-at-5.28.06-AM.png)

## 如何克隆一个指定的分支

现在从我们的演示仓库中克隆一个指定的分支。有两种方法克隆一个特定的分支。你可以：

-   克隆仓库，获取所有分支，立即切换到指定的分支。
-   克隆仓库并仅获取一个分支。

### 方案一

```
git clone --branch <branchname> <remote-repo-url>
```

或

```
git clone -b <branchname> <remote-repo-url>
```

这里  **\-b**  只是  **\--branch**  的别名。
  
这样，你就可以获取仓库中的所有分支，切换到你指定的分支，指定的分支成为本地分支用于  `git push`  和  `git pull`  。但你仍然从每个分支中获取了所有文件。 这可能不是你想要的吧？

让我们测试看看：

```
 git clone -b passwordless-auth git@github.com:BolajiAyodeji/nextjs-blog.git
```

这会自动将  `passwordless-auth`  配置为本地分支，但仍会跟踪其他分支。

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-23-at-5.30.01-AM.png)

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-30-at-3.27.31-AM.png)

### 方案二

```
git clone --branch <branchname> --single-branch <remote-repo-url>
```

或

```
git clone -b <branchname> --single-branch <remote-repo-url>
```

这里  **\-b**  只是  **\--branch**  的别名。

这与方案一的操作相同，除了  `--single-branch`  选项，它是在 Git 版本 1.7.10 及更高版本中引入的。这个选项允许你仅从指定的分支中获取文件而不获取其他分支。

让我们测试看看：

```
git clone -b passwordless-auth --single-branch git@github.com:BolajiAyodeji/nextjs-blog.git
```

这会自动将  `passwordless-auth`  配置为本地分支，且只能跟踪此分支。


![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-23-at-5.31.12-AM.png)

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-30-at-3.29.07-AM.png)

如果你执行  `cd pages/api`  ，你会在  `passwordless-auth`  分支中找到之前设置的  `auth.js`  文件。

## 总结

你可能无法使用互联网或没有足够的存储空间，但你需要在指定的分支中工作。或者你可能出于各种原因希望克隆具有有限文件的指定分支。幸运的是， Git 为你提供了执行此操作的灵活性。锻炼你学到的新知识并尝试一下吧，还有更多的 "Git" 知识去学习。
  
One at a time, yeah? ✌?

[1]: https://en.wikipedia.org/wiki/Git
[2]: https://git-for-windows.github.io/
[3]: https://sourceforge.net/projects/git-osx-installer/files/
[4]: https://github.com/BolajiAyodeji/nextjs-blog/tree/master/pages/api
[5]: https://nextjs-blog.bolajiayodeji.vercel.app/api/hello
