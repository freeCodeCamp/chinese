> -   原文地址：[What is Git? A Beginner's Guide to Git Version Control](https://www.freecodecamp.org/news/what-is-git-learn-git-version-control/)
> -   原文作者：Anna Skoulikari
> -   译者：nemanjajoe
> -   校对者：

![What is Git? A Beginner's Guide to Git Version Control](https://www.freecodecamp.org/news/content/images/size/w2000/2021/03/Artboard-2.png)

Git is a version control system that developers use all over the world. It helps you track different versions of your code and collaborate with other developers.
Git 是一个全世界开发者都在用的版本控制系统。它会帮助你与其他开发者合作，以及跟踪你不同版本的代码。

If you are working on a project over time, you may want to keep track of which changes were made, by whom, and when those changes were made. This becomes increasingly important if you end up having a bug in your code! Git can help you with this.
如果你长时间在一个项目工作，你也许会想对那些有改动的地方保持跟踪：是谁，以及什么时候改动的。要是在你完成时，发现你代码里有bug，这跟踪就变得越来越重要了。

But Git can also be a bit scary and confusing when you first start learning it, so in this article I will introduce Git in a humanly understandable way. We'll cover topics such as repositories, commits, branches and much more, so let's get started!
当你第一次学它的时候，Git也会变得有点小可怕和小迷惑。所以在这篇文章里，我会以一种人们易于理解的方式来介绍它。
我们将覆盖像仓库、提交、分支等等这样的话题，所以我们开始吧！

Here's what we'll go over in this article:
这是我们在这篇文章所要完成的：
*   What is Git?
*   什么是Git？
*   What is GitHub?
*   什么是GitHub？
*   How to get started using Git
*   如何开始使用Git？
*   How does Git track changes?
*   Git是如何跟踪改动的？
*   A typical Git workflow
*   一个典型的Git工作流。
*   Online course to learn Git version control
*   用来学习Git版本控制的线上课程。

## What is Git?
## 什么是Git？

**Git** is a version control system that you download onto your computer. It is essential that you use Git if you want to collaborate with other developers on a coding project or work on your own project.
**Git** 是一个你可以下载到你电脑上的版本控制系统。如果你想在一个编码项目里和其他开发者合作，或者是你自己的项目里，那么使用Git是必不可少的。

In order to check if you already have Git installed on your computer you can type the command `git --version` in the terminal.
为了检查你的电脑是否早就安装好了Git，你可以在命令行上输入 `git --version`。

If you already have Git installed then you will see what version you have. If you don’t have Git installed you can visit the [Git website](https://git-scm.com/) and easily follow the download instructions to install the correct version for your operating system.
如果你早就装好了Git，你就会看到你所在的版本。如果你没装好Git，你可以访问[Git website](https://git-scm.com/)。只需简单地循着下载指示，去给你的操作系统安装正确的版本。

## What is GitHub?
## 什么是GitHub？

**GitHub** is a product that allows you to host your Git projects on a remote server somewhere (or in other words, in the cloud).
**GitHub** 是一个允许你在一个你不知道的远程服务器上（换句话说，就是在云上）管控你的Git项目的产品。

It's important to remember that GitHub is not Git. GitHub is just a hosting service. There are other companies who offer hosting services that do the same thing as GitHub, such as Bitbucket and GitLab.
Github不是Git，记住，这很重要。Github只提供托管服务。这也有其他提供托管服务的公司，像Bitbucket和GitLab。

![](https://www.freecodecamp.org/news/content/images/2021/03/1_JL0fpMQTlDNbyQ5GlLdA_g.png)

The difference between GitHub and Git
GitHub和Git之间的不同之处。

## How to Get Started with Git
## 如何开始使用Git？

### Terminal vs GUI
### 命令行 VS 图形用户界面

You can either use Git by typing commands in the terminal or you can use a graphical user interface (GUI) such as Sourcetree or GitKraken.
你可在命令行里通过输入指令来使用Git，也可以使用一个图形用户界面（GUI），例如Sourcetree或者GitKraken。

If you choose the terminal, you will have to look up which Git commands you will need.
如果你选择命令行，你得去找找你将需要哪些Git指令。

Luckily you don’t have to learn these by heart. Other than a handful of commands that you will use most often, the rest you can look up whenever you need them (this is what most developers do, even those with decades of experience). Git offers in\-depth [documentation on their website](https://git-scm.com/docs).
幸运的是，你不需要用心的去学习这些。除了少数几个你将要最常使用的指令外，剩下的你可以查，在任何你需要它们的时候（这也是大多数开发者所做的，即使是那些有几十年开发经验的人）。Git在它的[网站](https://git-scm.com/docs)上提供了详细的文档。

If you choose to use a GUI, then the various actions you need to take will be displayed in a more visual manner.
如果你选择使用一个GUI，那么你需要用到的，多方面的功能，会以一个更加视觉化的方式展现出来。

Whether you choose to use the terminal or a GUI, you will need to understand the basics of how Git works in order to use it confidently.
无论你选择使用命令行，亦或是一个GUI。为了去自信去使用它，你都将需要理解Git工作的基本要素。

For the rest of this article, we will share examples using Git in the terminal. But the steps we share are very similar if you are using a GUI.
对于这篇文章的剩下部分，我会分享一些在命令行使用Git的例子。但如果你是在使用一个GUI，我们分享的步骤也是十分相似的。

### How to Prepare your Project Folder in Git
### 如何在Git里准备你的项目文件夹

To use Git we need to have a project that we want to version control. This can either be a new project or an existing project.
去使用Git，我们得有一个需要进行版本控制的项目，这可以是一个新的项目，也可以是一个已经存在的项目。
If it is a new project, then we need to create a new project folder (hint: we can use the `mkdir` command) and then navigate into that project folder in the terminal.
如果它是一个新的项目，那么我们需要创建一个新的项目文件夹（小提示：可以使用`mkdir`命令），然后在命令行中导航进入这个文件夹。
If we were to choose an existing project then we simply navigate into that project folder in the terminal.
如果我们选择的是一个已经存在的项目，那么我们只需在命令行中简单导航进去就行了。
In our example, we will create a new project folder called `novel`.
在我们的例子里，会创建一个新的项目文件夹叫做`novel`。
![](https://www.freecodecamp.org/news/content/images/2021/03/1_GwzrUZNrMWv_MfZaoudhIg.png)

Creating our project folder
创建我们的项目文件夹。

### How to Create a Git Repository
### 如何创建一个Git仓库
Once we are in our project folder, in order to start using Git we will need to create (or initialize) a repository using the `git init` command.
一旦我们进入了项目文件夹，为了开始使用Git，我们将使用`git init`命令去创建（或 初始化）一个仓库。
Once we execute the command by typing it in the terminal and pressing enter, it will probably seem like not much happened. But don’t be deceived, Git can be sneaky sometimes and it carries out a lot of actions behind the scenes.
一旦我们在命令行中，输入，按下回车，执行了这个指令，它可能看上去没有什么多大变化。但别被骗了！Git可以变得很卑鄙，它在这背后完成了大量动作。
In order to see what Git did behind the scenes we will have to view our hidden files. Make sure to open your project folder in your file system. Then, if you are on a mac you can select **Command** + **Shift** + **Dot** in order to see hidden files in your file system. If you are on a windows OS then you can change your view settings in order to view hidden files in your file system.
为了看看Git在这背后干了什么，我们来瞧瞧我们的隐藏文件。确保在你的文件系统中打开了项目文件夹，然后，如果是Mac用户，为了在你的文件系统中查看隐藏文件，可以选用**Command**+**Shift**+**.** ；如果你在Windows系统上，可以更改查看里的设置来查看隐藏文件夹。
In order to view hidden files in the terminal we can use the command `ls -a`.
为了在命令行中查看隐藏文件，我们可以使用命令`ls -a`。
What we should see now is a `.git` folder inside our project folder. This is generally what represents our repository.
在我们的项目文件夹里，应该看到一个`.git`文件夹。这就是通常意义上我们的仓库。
![](https://www.freecodecamp.org/news/content/images/2021/03/1_fUAS61mZR44MwNeWRpnm2w.png)

Creating our repository
创建我们的仓库。

### What is a Git Repository?
### 什么是一个Git仓库？

The **repository** is the `.git` folder inside our project folder. It will track all the changes made to the files in our project and record that history over time.
在我们项目文件夹里，**仓库**就是`.git`文件夹。随着时间流逝，它会在我们项目里面，跟踪所有对文件的改动和记录这个历史。
The repository that we have on our computer is referred to as the **local repository**.
在我们电脑上拥有的这个仓库，指的是**本地仓库** 。
Earlier we mentioned hosting services such as GitHub, GitLab and Bitbucket. When we push (in other words upload) our local repository to one of these services, then the repository that resides in these service in the cloud is referred to as the **remote repository**.
先前，我们提到了像GitHub、GitLab和Bitbucket这样的托管服务。当我们push（也就是 上传）我们的本地文件夹到其中一家服务里面，那么归属在这些云上的服务里的仓库就被叫做**远程仓库** 。
It is important to use a remote repository in order to be able to collaborate with other people as well as to backup our projects in case something happens to our laptop or computer.
使用一个远程仓库是很重要的，目的是能够与其他人合作，也备份一下我们的项目，以防我们的笔记本或电脑会发生什么。
### How to Collaborate with Other Developers Using Git
### 如何使用Git与其他开发者合作？
If another developer wants to collaborate with us on our project then they can clone (or in other words download) the remote repository from the hosting service you uploaded it to their computer.
如果其他开发者想在项目里与我们合作，那么他们可以在你所上传的托管服务中clone（克隆；也即是 下载）这个远程仓库到他们的电脑。
This allows them to have the project on their computer as well. The project on their computer is then also referred to as a local repository.
这允许他们在自己的电脑里也可以有这个项目。然后，在他们电脑里的这个项目也被指作本地仓库。
In a project with multiple developers, each one has a local repository on their computer. And there is one remote repository that they all contribute to and they use it to share their work.
在一个有多个开发者的项目里，每个人都在电脑上有一个本地仓库。而且这有一个所有人都可以贡献和分享他们工作的远程仓库。
![](https://www.freecodecamp.org/news/content/images/2021/03/1_BdQ8MuiohcSVp20163pEig.png)

Remote repository and local repositories
远程仓库和本地仓库

## How Does Git Track Changes?
## Git 是如何跟踪改动的？

In order to save different versions of our project in Git we will make commits.
为了在Git中保存我们项目的不同版本，我们就使用commits（提交）。
### What is a Git Commit?
### 什么是一个Git commit？
A **commit** is a version of your project. It represents a standalone version of your project and has a reference to all the files and folders that are a part of that version.
一个**commit**就是你项目的一个版本。它代表你项目的一个独立版本， 和有一个对所有文件和文件夹的参考引用，这些也是该版本的一部分。
### How Do I Make a Commit in Git?
### 我该如何在Git中用个Commit？
In order to understand how we make a commit we need to learn about three different spaces inside Git — the working directory, staging area, and commit history.
为了理解我们如何使用Commit，我们得了解Git里面的三个不同空间——工作目录、暂存区和commit历史。
The **working directory** is basically represented by the contents of our project folder (hint: a directory is the same thing as a folder). It is sort of like a work bench, where we can add, edit, and delete files in our project.
**工作目录**基本上就是被我们项目文件夹里的内容代表了（提示：一个目录和一个文件夹是同一件事）。它有点像一个工作分支，在这分支上，我们可以在项目里增加、编辑和删除文件
The staging area and commit history are part of our repository.
暂存区和commit历史是我们仓库的一部分。
The **staging area** is sort of like a rough draft space. It is where we can add updated versions of files or remove files in order to choose what we want to include in our next commit (version of our project). In the `.git` folder the staging area is represented by a file called `index`.
这个**暂存区**就有点像一个粗略的打草稿的空间。在这，我们可以增加更新了的文件，或为了选中那些我们要在下一次commit中所包括的而移除些文件。
And finally the **commit history** is basically where our commits live after they’ve been made. In the `.git` folder the commit history is represented by a folder called `objects`.
最后，**commit 历史** 基本上就是我们提交的commits所存在的地方了。在`.git`文件夹里，一个叫做`objects`的文件夹代表了commit历史。

![](https://www.freecodecamp.org/news/content/images/2021/03/1_V8i09C2Q9xK0u1y7531t3Q--1-.png)

Working directory, repository, staging area, and commit history
工作目录、仓库、暂存区和commit历史。

## A Typical Git Workflow
## 一个典型的Git工作流
### Step 1 — Edit Files
### 步骤一：编辑文件
If you have a new project, you will create the very first file in your new project. In our `novel` project folder we will make a simple text file called `chapter1`. We can either do this using a text editor or directly in the terminal. In our example we do it directly in the terminal by typing `touch chapter1.txt`.
如果你有一个新的项目，你会在新项目里创建第一个文件。在我们的`novel`项目文件夹里，做一个简单的文本文件叫做`chapter1`。我们可以用文本编辑器做这个，也可以在命令行直接做。此例子中，我们通过在命令行直接输入`touch chapter1.txt`来做。
If you have an existing project then you will edit some of your existing files, add new files, or delete files.
如果你有一个已存在的项目，你将编辑一些已存在的文件，增加新文件或删除文件。
Next, we can use the `git status` command. This command will tell us the state of our working directory and staging area and will tell us if there are any differences between the two.
接下来，我们使用`git status`命令。该命令会告诉我们，工作目录和暂存区的状态，也会告诉我们这两者是否有何不同。
![](https://www.freecodecamp.org/news/content/images/2021/03/1_jHl7OaAsZBBa-6fuyK8Esw.png)

Adding a file to our project
增加一个文件到我们的项目。
In our example, we added just one new file to our new project. When we use the `git status` command, Git tells us that we have an untracked file in our working directory and that we need to use the `git add` command to include it in what will be committed. Which takes us to step 2.
在我们的例子中，只加了一个新文件到我们的新项目中。当我们使用`git status`命令，Git告诉我们，工作目录中有一个未跟踪的文件，我们需要在要提交的地方用`git add`命令去包括它。这把我们带到了步骤二。
![](https://www.freecodecamp.org/news/content/images/2021/03/1_r3tL0x5-6x60uycPkIQxbg.png)

Our file is in the working directory
我们的文件在工作目录。
### Step 2 — Add Files to the Staging Area
### 步骤二：增加文件到暂存区。
We can use the `git add` command in order to add new or updated files to the staging area. If we decide we don’t want to include some of the files we changed in our next commit then we simply make sure not to add those particular files to the staging area.
我们可以使用`git add`命令去增加或更新文件到暂存区。
![](https://www.freecodecamp.org/news/content/images/2021/03/updated.png)

Adding a file to the staging area

In our example, we add the only file we have in our project to the staging area using the `git add` command and passing in the name of the file. Then if we use the `git status` command we will see that Git will tell us that we have added our file to the staging area.

![](https://www.freecodecamp.org/news/content/images/2021/03/1_90QUPov6WsHjkokIzJw10g.png)

Our file is in the staging area

It is also important to note that files **do not** **move** from the working directory to the staging area. Files are **copied over** from the working directory to the staging area.

### Step 3 — Make the Commit

Finally, to make the commit we use the `git commit` command with `-m` option and pass in a commit message, for example `git commit -m "this is the first commit"`.

![](https://www.freecodecamp.org/news/content/images/2021/03/1_KoPfPCVxlsOI3qqQLfd9Dw.png)

Making our first commit

We can then use the `git log` command in order to list all the commits we have in our project in reverse chronological order. In our example we only have one commit.

![](https://www.freecodecamp.org/news/content/images/2021/03/1_O8tbeMHOrjCGNajx2chxHQ.png)

We have made our first commit

Now we have made our first commit in our project! In other words we have saved the first version of our project.

The commit has a 40 character commit hash. A **commit hash** is 40 letters and numbers that act as a name for the commit or a way to refer to it.

We can also see information such as who made the commit, when the commit was made, and the commit message.

## What is a Commit History in Git?

A repository consists of multiple commits, and in the simplest case each commit has one parent commit which is the commit that came before it. That is why one commit points back to the commit that came before it in the image below.

There are more complex cases when we get into the realm of multiple branches and merges, but that is out of the scope of this article.

![](https://www.freecodecamp.org/news/content/images/2021/03/1_pZBMf1JSUf0feoe-fst0Lg.png)

A simple commit history

## Finally, What is a Branch in Git?

A **branch** is a pointer to a commit. The default branch in Git is called **master** or **main**.

We can see that a branch is a pointer to a commit by going into the `.git` folder and then opening the `refs` folder, opening the `heads` folder, and finally opening the file called `master`. Inside this file we will find that there is a hash. This is the hash of the commit that our master branch is pointing to.

We can once again use the `git log` command to list all the commits in our repository and we will find that that hash lines up with the commit that has the `master` label next to it in parentheses.

![](https://www.freecodecamp.org/news/content/images/2021/03/1_4yV_t7acLQZBMwkpXkZyBg.png)

Showing the master branch in our .git folder

In the terminal, we can see a list of all the branches by typing in the command `git branch`.

![](https://www.freecodecamp.org/news/content/images/2021/03/1_88nz0tfYI77kjBzQvCDF9Q.png)

Showing the master branch pointing to our commit

Branches are really important because they make it a lot easier to collaborate with other people and to work on multiple features or different parts of your project at the same time.

As we make more commits, the branch we are on will update to point to our latest commit.

![](https://www.freecodecamp.org/news/content/images/2021/03/1_iBdgErtar3XDmVQGRyT_9A.png)

Showing our commit history and the master branch pointing to our latest commit

## Conclusion

If you’ve made it this far, congratulations! There is a whole bunch more to learn about Git, and in this article we only scratched the surface. Feel free to check out some more resources to learn Git down below!

### Online course to learn Git version control

This article is based on an [**online course I created that teaches Git version control called Git Learning Journey**](https://www.udemy.com/course/git-learning-journey/?referralCode=3FA102A7FD43300B5BC2). It teaches the basics of Git version control which covers all of the above in much more depth and much more, including working with remote repositories, merging and rebasing.

It is specifically designed for people transitioning into tech from non\-technical backgrounds and it has become a **highest rated** course on Udemy with a 4.8 star ⭐️ rating and more than 600 satisfied students (check out the student review, they speak for themselves). And the first eight lessons are a free preview so feel free to take a peek!

![](https://cdn-images-1.medium.com/max/1600/1*wc4fSBxpGKNX5kZZSMHFhA.png)
