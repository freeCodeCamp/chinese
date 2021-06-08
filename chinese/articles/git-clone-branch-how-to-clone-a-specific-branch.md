> * 原文：[Git Clone Branch – How to Clone a Specific Branch 如何 Git Clone 指定分支](https://www.freecodecamp.org/news/git-clone-branch-how-to-clone-a-specific-branch/)
> * 作者：Bolaji Ayodeji
> * 译者：Tengfei Wang
> * 校对者：

![Git Clone Branch – How to Clone a Specific Branch](https://www.freecodecamp.org/news/content/images/size/w2000/2020/06/article-banner--1-.gif)

Unlike older centralized version control systems such as SVN and CVS, Git is distributed. Every developer has the full history and control of their code locally or remotely. They can also access or manipulate several parts of the code as they deem fit from different locations.
不像 SVN 和 CVS 等旧的集中式版本控制系统一样，Git是分布式的。 每个开发者都能在本地和远程查看记录和控制代码。
他们也可以视情况从不同位置访问或操纵不同部分的代码。

Since Linus Torvalds (the famous creator of the Linux operating system kernel) created Git in 2005 for Linux kernel development, it has become the most widely used modern version control system in the world.
 自从 Linus Torvalds （Linux 操作系统内核的著名作者） 在2005年为 Linux 内核开发创建了 Git，它就开始成为世界上使用最广泛的现代版本控制系统。

In this article, I'll introduce you to the Git clone and Git branch workflows and I'll show you how you can clone a specific branch based on your needs. Let's begin! ?
在本篇文章中，我会介绍 Git 克隆和 Git 分支工作流，并且展示如何根据需求克隆一个指定的分支。让我们开始吧！

## Prerequisites
## 必备知识

-   Basic knowledge of the terminal
-   基本的终端知识
-   Ability to type commands in the terminal
-   能使用终端指令
-   Git installed (I'll still show you how)
-   安装 Git（我也会教如何安装）
-   A GitHub account
-   GitHub 账号
-   A smile on your face (Put up that smile friend ?)
-   好的心情（笑起来，朋友）

## Quick Introduction to Git and GitHub
## 快速入门 Git 和 GitHub

According to  [Wikipedia][1],
来自  [维基百科][1],

> **Git**  is a distributed version control system designed to track changes to a project (code) in software development. It is intended to enforce coordination, collaboration, speed, and efficiency among developers.
> **Git**  软件开发中用来跟踪项目（代码）变更的一个分布式版本控制系统。 主要专注在开发人员之间加强协调，协作，速度和效率。

> **GitHub**  on the other hand, is a web-based hosting service for version control using Git. It offers all of the distributed version control and source code management functionality of Git as well as adding more features for computer code.
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

Or you can type this command:

```
brew install git
```

Now that we've got Git installed, let's move on to the tutorial.
现在我们已经安装了 Git，让我们继续本教程。

## 简介 Git 克隆

Git allows you to manage and version your project(s) in a "repository". This repository is stored on a web-based hosting service for version control, like GitHub.
Git 允许你在“仓库”中版本化管理项目。该仓库是基于 Web 的托管服务进行版本控制，和 GitHub一样。

You can then clone this repository to your local machine and have all the files and branches locally (I'll explain more about branches soon).
你可以克隆仓库到你本地的机器，并且得到所有的文件和分支。（我稍后会讲解更多关于分支）

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-23-at-5.47.48-AM.png)

For example, you can clone freeCodeCamp's repository with SSH like so:  
例如，可以通过SSH克隆 freeCodeCamp 的仓库，如下：

```
git clone git@github.com:freeCodeCamp/freeCodeCamp.git
```

## Introduction to Git Branches
## 简介 Git 分支

When working on a project, you will likely have different features. And multiple contributors will be working on this project and its features.
在做项目时，你可能会有不同的功能。并且有多个贡献者会做该项目及其功能。

Branches allow you to create a "playground" with the same files in the  `master`  branch. You can use this branch to build independent features, test new features, make breaking changes, create fixes, write docs or try out ideas without breaking or affecting the production code. When you're done, you merge the branch into the production  `master`  branch.
分支允许你在 `master` 分支中使用相同的文件创建一个 “playground（游乐场）” 。你可以使用这个分支构建独立的功能，测试新功能，做重大改动，修复代码，写文档、或者在不中断的情况下尝试自己的想法、或者优化生产代码。

Branching is a core concept in Git which is also used in GitHub to manage workflows of different versions of one project. The  `master`  branch is always the default branch in a repository that is most often considered "production and deployable code". New branches like  `passwordless-auth`  or  `refactor-signup-ux`  can be created from the  `master`  branch.
分支是 Git 中的一个核心概念，在 Github 中也用于管理一个项目不同版本的工作流。  `master`  分支始终是仓库中的默认分支，通常被认为是 “生产和可部署代码”。 新分支如  `passwordless-auth`  或  `refactor-signup-ux` 可以从  `master`  分支中创建。

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-22-at-2.47.53-AM.png)

All branches in freeCodeCamp's repository
freeCodeCamp 仓库中的所有分支

## How to Clone Git Branches
如何克隆 Git 分支

While you can clone repositories with the  `git clone`  command, keep in mind that this clones the branch and the remote  `HEAD`. This is usually  `master`  by default and includes all other branches in the repository.
当你使用  `git clone`  指令克隆仓库时，请记住这会克隆分支和远程  `HEAD` 。默认情况下通常是  `master`  分支，并包括仓库中的所有其他分支。

So when you clone a repository, you clone the  `master`  and all other branches. This means you will have to checkout another branch yourself.
所以当你克隆一个仓库时，你克隆了  `master`  分支和所有其他分支。这意味着你可以随意切换到另一个分支。

Let's say your task on a project is to work on a feature to add passwordless authentication to a user dashboard. And this feature is in the  `passwordless-auth`  branch.
假设你在项目上的任务是开发一项功能，将无密码身份验证添加到用户仪表板。这个功能位于  `passwordless-auth`  分支上。

You really don't need the  `master`  branch since your "feature branch" will be merged into  `master`  afterward. How then do you clone this  `passwordless-auth`  branch without fetching all other branches with "a bunch of files you don't need"?
你不需要 `master` 分支，因为你的 “功能分支” 之后会被合并到 `master` 中。那么你如何克隆  `passwordless-auth`  分支，而无需获取所有其他分支的 “一堆你不需要的文件” ？

I created this sample repository to explain this. This repository holds a simple blog built with Nextjs and has four dummy branches:
我创建了示例仓库来解释这一点。 此仓库包含一个使用 NextJS 构建的简单博客，有四个虚拟分支机构：

-   master
-   dev
-   staging
-   passwordless-auth

In Nextjs, any file inside the folder  `pages/api`  is mapped to the  `/api/*`  path and will be treated as an API endpoint instead of a  `page`. In our repository, I have created different dummy APIs  [in this directory][4]  to make each branch different.
在 Nextjs 中，文件加   `pages/api`  内的任何文件都被映射到  `/api/*` 路径，并将被视为替代  `page`  的 API 端点。在我的仓库中，我还创建了不同的虚拟 APIs  [in this directory][4] 以使每个分支都不同。

The  `master`  branch holds the file  **pages/api/hello.js**  while  `passwordless-auth`  holds the file  **pages/api/auth.js**. Each file just returns a dummy text response. See  `master`'s hello API response  [here][5]  (with a special message for you ?).
 `master`  分支保存  **pages/api/hello.js**  文件，而  `passwordless-auth`  分支保存  **pages/api/auth.js** 文件。每个文件仅返回一个伪文本响应。查看  `master`  分支的 API 响应 [here][5] （给你一个特别的消息？）。

Let's clone the repository:
让我们克隆仓库：

```
git clone git@github.com:BolajiAyodeji/nextjs-blog.git
```

This gives us access to all branches in this repository and you can easily toggle between each to see each version and its files.
使我们可以访问此仓库中的所有分支，你可以在每个版本之间轻松切换，以查看每个版本及其文件。

```
git branch -a
```

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-22-at-4.51.56-AM.png)

Wondering where the  **remotes/origin/..**  branches came from?  
想下  **remotes/origin/..**  分支来自哪里？
  
When you clone a repository, you pull data from a repository on the internet or an internal server known as the  **remote**. The word origin is an alias created by your Git to replace the remote URL (you can change or specify another alias if you want).
当你克隆仓库时，你是从互联网或内部服务器上的  **remote**  仓库提取数据。Origin 是你的 Git 创建的别名，用于替换远程 URL (如果你愿意，你可以更改或指定其他别名)。

These  **remotes/origin/..** branches point you back to the origin repository you cloned from the internet so you can still perform pull/push from the origin.
 **remotes/origin/..** 分支指向从 Internet 克隆的源仓库，因此你仍然可以从源执行 pull/push 。 

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-23-at-5.24.43-AM.png)

  
So when you clone  `master`  onto your machine,  `remotes/origin/master`  is the original  `master`  branch on the internet, and  `master`  is on your local machine. So you will pull/push from and to the  `remotes/origin/master`.  
所以当你克隆  `master`  分支到你的机器上时，  `remotes/origin/master`  是  `master`  在网络上的源分支， `master`  是你本机的分支。因此，你将从  `remotes/origin/master`  中 pull/push。
  
In summary  **Remote**  is the URL that points you to the repository on the internet while  **Origin**  is an alias for this remote URL.
总的来说  **Remote**  是指向互联网上仓库的 URL，而  **Origin**  是这个远程 URL 的别名。

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-23-at-5.28.06-AM.png)

## How to Clone a Specific Branch
如何可能一个指定的分支

Now let's clone a specific branch from our demo repository. There are two ways to clone a specific branch. You can either:
现在从我们的演示仓库中克隆一个指定的分支。有两种方法克隆一个特定的分支。你可以：

-   Clone the repository, fetch all branches, and checkout to a specific branch immediately.
-   克隆仓库，获取所有分支，立即切换到指定的分支。
-   Clone the repository and fetch only a single branch.
-   克隆仓库并仅获取一个分支。

### Option One
方案一

```
git clone --branch <branchname> <remote-repo-url>
```

或

```
git clone -b <branchname> <remote-repo-url>
```

Here  **\-b**  is just an alias for  **\--branch**
这里  **\-b**  只是  **\--branch**  的别名。
  
With this, you fetch all the branches in the repository, checkout to the one you specified, and the specific branch becomes the configured local branch for  `git push`  and  `git pull`  . But you still fetched all files from each branch. This might not be what you want right? ?
这样，你就可以获取仓库中的所有分支，切换到你指定的分支，指定的分支成为本地分支用于  `git push`  和  `git pull`  。但你仍然从每个分支中获取了所有文件。 这可能不是你想要的吧？

Let's test it:
让我们测试看看：

```
 git clone -b passwordless-auth git@github.com:BolajiAyodeji/nextjs-blog.git
```

This automatically configures  `passwordless-auth`  as the local branch but still tracks other branches.
这会自动将  `passwordless-auth`  配置为本地分支，但仍会跟踪其他分支。

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-23-at-5.30.01-AM.png)

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-30-at-3.27.31-AM.png)

### Option Two
方案二

```
git clone --branch <branchname> --single-branch <remote-repo-url>
```

或

```
git clone -b <branchname> --single-branch <remote-repo-url>
```

Here  **\-b**  is just an alias for  **\--branch**
这里  **\-b**  只是  **\--branch**  的别名。

This performs the same action as option one, except that the  `--single-branch`  option was introduced in Git version 1.7.10 and later. It allows you to only fetch files from the specified branch without fetching other branches.
这与方案一的操作相同，除了  `--single-branch`  选项，它是在 Git 版本 1.7.10 及更高版本中引入的。这个选项允许你仅从指定的分支中获取文件而不获取其他分支。

Let's test it:
让我们测试看看：

```
git clone -b passwordless-auth --single-branch git@github.com:BolajiAyodeji/nextjs-blog.git
```

This automatically configures  `passwordless-auth`  as the local branch and only tracks this branch.
这会自动将  `passwordless-auth`  配置为本地分支，且只能跟踪此分支。


![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-23-at-5.31.12-AM.png)

![](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-30-at-3.29.07-AM.png)

If you run  `cd pages/api`  you'll find the  `auth.js`  file in the  `passwordless-auth`  branch as expected from the previous setup.
如果你执行  `cd pages/api`  ，你会在  `passwordless-auth`  分支中找到之前设置的  `auth.js`  文件。

## Conclusion
总结

You might be running out of internet or storage space but you need to work on a task in a specific branch. Or you might want to clone a specific branch with limited files for various reasons. Fortunately, Git provides you the flexibility to do this. Flex your muscles and try it out, there's much more "Git" to learn.  
你可能无法使用互联网或没有足够的存储空间，但你需要在指定的分支中工作。或者你可能出于各种原因希望克隆具有有限文件的指定分支。幸运的是， Git 为你提供了执行此操作的灵活性。锻炼你的新知识并尝试一下，还有更多的 "Git" 知识去学习。
  
One at a time, yeah? ✌?

[1]: https://en.wikipedia.org/wiki/Git
[2]: https://git-for-windows.github.io/
[3]: https://sourceforge.net/projects/git-osx-installer/files/
[4]: https://github.com/BolajiAyodeji/nextjs-blog/tree/master/pages/api
[5]: https://nextjs-blog.bolajiayodeji.vercel.app/api/hello
