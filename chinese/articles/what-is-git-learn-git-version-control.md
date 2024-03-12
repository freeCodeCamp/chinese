> -   原文地址：[What is Git? A Beginner's Guide to Git Version Control](https://www.freecodecamp.org/news/what-is-git-learn-git-version-control/)
> -   原文作者：Anna Skoulikari
> -   译者：nemanjajoe
> -   校对者：

![What is Git? A Beginner's Guide to Git Version Control](https://www.freecodecamp.org/news/content/images/size/w2000/2021/03/Artboard-2.png)

Git 是一个全世界开发者都在用的版本控制系统。它会帮助你与其他开发者合作，以及跟踪你不同版本的代码。

如果你长时间在一个项目工作，你也许会想对那些有改动的地方保持跟踪：是谁，以及什么时候改动的。要是在你完成时，发现你代码里有 bug，这跟踪就变得越来越重要了。

当你第一次学它的时候，Git 也会变得有点小可怕和小迷惑。所以在这篇文章里，我会以一种人们易于理解的方式来介绍它。
我们将覆盖像仓库、提交、分支等等这样的话题，所以我们开始吧！

这是我们在这篇文章所要完成的：
*   什么是 Git？
*   什么是 GitHub？
*   如何开始使用 Git？
*   Git 是如何跟踪改动的？
*   一个典型的 Git 工作流。
*   用来学习 Git 版本控制的线上课程。

## 什么是 Git？

**Git** 是一个你可以下载到你电脑上的版本控制系统。如果你想在一个编码项目里和其他开发者合作，或者是你自己的项目里，那么使用 Git 是必不可少的。

为了检查你的电脑是否早就安装好了 Git，你可以在命令行上输入 `git --version`。

如果你早就装好了 Git，你就会看到你所在的版本。如果你没装好 Git，你可以访问[Git 官网](https://git-scm.com/)。只需简单地循着下载指示，去给你的操作系统安装正确的版本。

## 什么是 GitHub？

**GitHub** 是一个允许你在一个你不知道的远程服务器上（换句话说，就是在云上）管控你的 Git 项目的产品。

Github 不是 Git，记住，这很重要。Github 只提供托管服务。这也有其他提供托管服务的公司，像 Bitbucket 和 GitLab。

![](https://www.freecodecamp.org/news/content/images/2021/03/1_JL0fpMQTlDNbyQ5GlLdA_g.png)

GitHub 和 Git 之间的不同之处。

## 如何开始使用 Git？

### 命令行 VS 图形用户界面

你可在命令行里通过输入指令来使用 Git，也可以使用一个图形用户界面（GUI），例如 Sourcetree 或者 GitKraken。

如果你选择命令行，你得去找找你将需要哪些 Git 指令。

幸运的是，你不需要用心的去学习这些。除了少数几个你将要最常使用的指令外，剩下的你可以查，在任何你需要它们的时候（这也是大多数开发者所做的，即使是那些有几十年开发经验的人）。Git 在它的[网站](https://git-scm.com/docs)上提供了详细的文档。

如果你选择使用一个 GUI，那么你需要用到的，多方面的功能，会以一个更加视觉化的方式展现出来。

无论你选择使用命令行，亦或是一个 GUI。为了去自信去使用它，你都将需要理解 Git 工作的基本要素。

对于这篇文章的剩下部分，我会分享一些在命令行使用 Git 的例子。但如果你是在使用一个 GUI，我们分享的步骤也是十分相似的。

### 如何在 Git 里准备你的项目文件夹

去使用 Git，我们得有一个需要进行版本控制的项目，这可以是一个新的项目，也可以是一个已经存在的项目。
如果它是一个新的项目，那么我们需要创建一个新的项目文件夹（小提示：可以使用`mkdir`命令），然后在命令行中导航进入这个文件夹。
如果我们选择的是一个已经存在的项目，那么我们只需在命令行中简单导航进去就行了。
在我们的例子里，会创建一个新的项目文件夹叫做`novel`。
![](https://www.freecodecamp.org/news/content/images/2021/03/1_GwzrUZNrMWv_MfZaoudhIg.png)

创建我们的项目文件夹。

### 如何创建一个 Git 仓库
一旦我们进入了项目文件夹，为了开始使用 Git，我们将使用`git init`命令去创建（或 初始化）一个仓库。
一旦我们在命令行中，输入，按下回车，执行了这个指令，它可能看上去没有什么多大变化。但别被骗了！Git 可以变得很卑鄙，它在这背后完成了大量动作。
为了看看 Git 在这背后干了什么，我们来瞧瞧我们的隐藏文件。确保在你的文件系统中打开了项目文件夹，然后，如果是 Mac 用户，为了在你的文件系统中查看隐藏文件，可以选用**Command**+**Shift**+**.** ；如果你在 Windows 系统上，可以更改查看里的设置来查看隐藏文件夹。
为了在命令行中查看隐藏文件，我们可以使用命令`ls -a`。
在我们的项目文件夹里，应该看到一个`.git`文件夹。这就是通常意义上我们的仓库。
![](https://www.freecodecamp.org/news/content/images/2021/03/1_fUAS61mZR44MwNeWRpnm2w.png)

创建我们的仓库。

### 什么是一个 Git 仓库？

在我们项目文件夹里，**仓库**就是`.git`文件夹。随着时间流逝，它会在我们项目里面，跟踪所有对文件的改动和记录这个历史。
在我们电脑上拥有的这个仓库，指的是**本地仓库** 。
先前，我们提到了像 GitHub、GitLab 和 Bitbucket 这样的托管服务。当我们 push（也就是 上传）我们的本地文件夹到其中一家服务里面，那么归属在这些云上的服务里的仓库就被叫做**远程仓库** 。
使用一个远程仓库是很重要的，目的是能够与其他人合作，也备份一下我们的项目，以防我们的笔记本或电脑会发生什么。

### 如何使用 Git 与其他开发者合作？
如果其他开发者想在项目里与我们合作，那么他们可以在你所上传的托管服务中 clone（克隆；也即是 下载）这个远程仓库到他们的电脑。
这允许他们在自己的电脑里也可以有这个项目。然后，在他们电脑里的这个项目也被指作本地仓库。
在一个有多个开发者的项目里，每个人都在电脑上有一个本地仓库。而且这有一个所有人都可以贡献和分享他们工作的远程仓库。
![](https://www.freecodecamp.org/news/content/images/2021/03/1_BdQ8MuiohcSVp20163pEig.png)

远程仓库和本地仓库

## Git 是如何跟踪改动的？

为了在 Git 中保存我们项目的不同版本，我们就使用 commits（提交）。

### 什么是一个 Git 提交（commit）？
一个**提交**就是你项目的一个版本。它代表你项目的一个独立版本， 和有一个对所有文件和文件夹的参考引用，这些也是该版本的一部分。

### 我该如何在 Git 中用个提交？
为了理解我们如何使用提交，我们得了解 Git 里面的三个不同空间——工作目录、暂存区和提交历史。
**工作目录**基本上就是被我们项目文件夹里的内容代表了（提示：一个目录和一个文件夹是同一件事）。它有点像一个工作分支，在这分支上，我们可以在项目里增加、编辑和删除文件
暂存区和提交历史是我们仓库的一部分。
这个**暂存区**就有点像一个粗略的打草稿的空间。在这，我们可以增加更新了的文件，或为了选中那些我们要在下一次提交中所包括的而移除些文件。
最后，**提交历史** 基本上就是我们的提交所存在的地方了。在`.git`文件夹里，一个叫做`objects`的文件夹代表了提交历史。

![](https://www.freecodecamp.org/news/content/images/2021/03/1_V8i09C2Q9xK0u1y7531t3Q--1-.png)

工作目录、仓库、暂存区和提交历史。

## 一个典型的 Git 工作流
### 步骤一：编辑文件
如果你有一个新的项目，你会在新项目里创建第一个文件。在我们的`novel`项目文件夹里，做一个简单的文本文件叫做`chapter1`。我们可以用文本编辑器做这个，也可以在命令行直接做。此例子中，我们通过在命令行直接输入`touch chapter1.txt`来做。
如果你有一个已存在的项目，你将编辑一些已存在的文件，增加新文件或删除文件。
接下来，我们使用`git status`命令。该命令会告诉我们，工作目录和暂存区的状态，也会告诉我们这两者是否有何不同。
![](https://www.freecodecamp.org/news/content/images/2021/03/1_jHl7OaAsZBBa-6fuyK8Esw.png)

增加一个文件到我们的项目。
在我们的例子中，只加了一个新文件到我们的新项目中。当我们使用`git status`命令，Git 告诉我们，工作目录中有一个未跟踪的文件，我们需要在要提交的地方用`git add`命令去包括它。这把我们带到了步骤二。
![](https://www.freecodecamp.org/news/content/images/2021/03/1_r3tL0x5-6x60uycPkIQxbg.png)

我们的文件在工作目录。
### 步骤二：增加文件到暂存区
我们可以使用`git add`命令去增加或更新文件到暂存区。如果我们决定不想在下一次提交中包括一些改动了的文件，那么简单地确保不把这些特殊的文件加到暂存区就行了。
![](https://www.freecodecamp.org/news/content/images/2021/03/updated.png)

增加一个文件到暂存区。
在我们例子中，使用`git add`命令和传入文件名，只加了我们项目中仅有的文件到暂存区。然后，我们使用`git status`命令，会看到我们的文件已经加到了暂存区。
![](https://www.freecodecamp.org/news/content/images/2021/03/1_90QUPov6WsHjkokIzJw10g.png)

我们的文件在暂存区内。
注意该文件**并没有**从工作目录移到了暂存区，而是从工作目录复制到了该区域。

### 步骤 3：完成提交（commit)
最后，我们用`git commit`和`-m`选项传入一个提交信息来完成提交。例如：`git commit -m "this is the first commit"`。
![](https://www.freecodecamp.org/news/content/images/2021/03/1_KoPfPCVxlsOI3qqQLfd9Dw.png)

完成我们第一个提交
为了以时间顺序的倒序列出项目中所有的提交，那么使用`git log`命令。
![](https://www.freecodecamp.org/news/content/images/2021/03/1_O8tbeMHOrjCGNajx2chxHQ.png)

我们完成了第一个提交
现在，我们已经在项目中完成了第一个提交！换句话说，我们已经保存了项目的第一个版本。
这个提交有个 40 个字符的提交哈希值。一个**提交哈希值**是 40 个字和数字，他们作为一个为了该提交的名字，或作为一种方式去引用它
我们也可以看到这样的信息，像谁完成的提交，提交什么时候完成的，和提交信息。
## 在 Git 里什么是一个提交历史?
一个仓库由许多提交组成。在最简单的例子里，每一个提交都有一个父提交，它是在本提交之前的一个提交。这就是为什么在下面的图片中，提交后面跟着一个它之前的提交。
当我们进入到多项分支与合并的领域时，会有更多复杂的例子，但这已经超出了这篇文章的范围了。
![](https://www.freecodecamp.org/news/content/images/2021/03/1_pZBMf1JSUf0feoe-fst0Lg.png)

一个简单的提交历史。

## 最后，在 Git 里，什么是一个分支（branch）？
一个**分支**就是一个指向提交的指针。在 Git 里，默认的分支叫作**master**或者**main**。
进入到`.git`文件夹，打开`refs`文件夹，打开`heads`文件夹，最后打开叫做`master`的文件，我们可以看到一个分支就是以一个指向提交的指针。
我们可以再一次的用`git log`命令列出项目中的所有提交，会发现和提交（commit）同行的哈希值旁边括号里有一个`master`标签。
![](https://www.freecodecamp.org/news/content/images/2021/03/1_4yV_t7acLQZBMwkpXkZyBg.png)

在我们`.git`文件夹里展示 master 分支。
在命令行上，通过输入`git branch`命令，我们可以看到所有分支的列表。
![](https://www.freecodecamp.org/news/content/images/2021/03/1_88nz0tfYI77kjBzQvCDF9Q.png)

展示这个指向我们提交的 master 分支。
分支真的很重要，因为他们使得与他人合作，和同时在多个特征或你项目的不同部分工作变得大大简化。
随着我们完成更多的提交，我们所在的分支会更新到指向我们最近一次的提交。
![](https://www.freecodecamp.org/news/content/images/2021/03/1_iBdgErtar3XDmVQGRyT_9A.png)

展示我们的提交历史和指向我们最近一次提交的 master 分支。
## Conclusion
## 总结
如果你已经成功读到这了，恭喜！关于 Git，你还有一大堆更多的东西要去学，在本文中我们只揭开了冰山一角。在下面免费去查看更多学习 Git 的资源吧！

### 学习 Git 版本控制的线上课程
这篇文章基于教程[**online course I created that teaches Git version control called Git Learning Journey**](https://www.udemy.com/course/git-learning-journey/?referralCode=3FA102A7FD43300B5BC2)。它教 Git 版本控制的基础内容，更深入更详细的覆盖上面所讲的内容，包括工作于远程仓库，合并和变基。
它是特别为那些从非科技背景转换过来的人们设计的，在 Udemy 它已经变成了一个**高分**课程，有着 4.8 颗星和超过 600 个满意的学生（查看学生的回顾，他们对自己说的）。刚开始的八节课是免费的，所以放心去看看吧！
![](https://cdn-images-1.medium.com/max/1600/1*wc4fSBxpGKNX5kZZSMHFhA.png)
