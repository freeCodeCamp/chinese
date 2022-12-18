> - 原文地址：[Git and GitHub Tutorial – Version Control for Beginners](https://www.freecodecamp.org/news/git-and-github-for-beginners/)
> - 原文作者：[Ihechikara Vincent Abba](https://www.freecodecamp.org/news/author/ihechikara/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Git and GitHub Tutorial – Version Control for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2021/11/g1117.png)

Git和GitHub是每个开发者都应该学习的两项技术，不管他们在哪个领域。

如果你是一个初级开发者，你可能会认为这两个术语意味着同样的事情--但它们是不同的。

本教程将帮助你了解什么是Git和版本控制，你需要知道的基本Git命令，如何使用其功能来提高工作效率，以及如何使用GitHub来扩展这些功能。

本指南对初学者友好，因为例子将非常容易理解。它也将是一个通用的教程，所以不管你最喜欢的编程语言是什么，任何人都可以跟着学。

对于我们的项目，我们将做一个写在文本（txt）文件中的待办事项清单。你将看到我们如何使用Git的功能来工作，并创建列表的最终版本。

### 你需要先准备好的

为了完成本教程，你将需要以下条件:

- 一个命令行界面（或者说是终端）。
- 一个你选择的文本编辑器（我将使用VS Code）。
- 一个GitHub账户。

## 什么是Git？

Git是一个版本控制系统，可以让你跟踪你对文件所做的修改。使用Git，你可以恢复到文件的各种状态（就像一台时间旅行机）。你也可以制作一个文件的副本，对该副本进行修改，然后将这些修改合并到原来的副本中。

例如，你可以在一个网站的登陆页面上工作，发现你不喜欢这个导航栏。但与此同时，你可能不想开始改变它的组件，因为它可能会变得更糟。

有了Git，你可以为该文件创建一个相同的副本，然后对导航栏进行修改。然后，当你对你的改动感到满意时，你可以把副本合并到原文件中。

你并不局限于将Git仅仅用于源代码文件，你也可以用它来跟踪文本文件，甚至是图像。这意味着，Git 不仅仅是为开发者服务的，任何人都可以找到它的帮助。

### 如何安装Git

为了使用 Git，你必须在你的电脑上安装它。要做到这一点，你可以在 [官方网站](https://git-scm.com/downloads) 下载最新版本。你可以从给出的选项中下载适合你的操作系统。

你也可以用命令行来安装Git，但由于每个操作系统的命令都不一样，我们将专注于更通用的方法。

### 如何配置Git

我将假设此时你已经安装了Git。为了验证这一点，你可以在命令行上运行这个命令：`git --version`。这将显示当前安装在你电脑上的版本。

接下来，你需要做的是设置你的用户名和电子邮件地址。Git会使用这些信息来识别谁对文件进行了修改。

要设置你的用户名，输入并执行这些命令 : `git config --global user.name "YOUR_USERNAME"` 和 `git config --global user.email "YOUR_EMAIL"`。请确保用你选择的值替换 `"YOUR_USERNAME"` 和`"YOUR_EMAIL"`。

## 如何在Git中创建和初始化一个项目

我们终于完成了安装和设置Git的工作。现在是时候创建我们的项目了。

我在桌面上创建了一个名为 `Git and GitHub tutorial`的文件夹。使用命令行，进入到你新项目的文件夹位置。对我来说，我将运行以下命令。:

`cd desktop`

`cd Git and GitHub tutorial`

如果你是命令行的新手，并且还在学习如何使用它来查看你的电脑文件夹，那么我建议使用微软的 `Visual Studio Code`。它是一个代码编辑器，有一个内置的终端来执行命令。你可以下载它 [这里](https://code.visualstudio.com/download)。

安装VS Code后，在编辑器中打开你的项目，为你的项目打开一个新的终端。这将自动把终端/命令行指向你的项目的路径。

现在要初始化你的项目，只需运行`git init`。这将告诉Git准备好开始监视你的文件的每一个变化。它看起来像这样:

![Screenshot--95-](https://www.freecodecamp.org/news/content/images/2021/11/Screenshot--95-.png)

```shell
git init
```

第一行是关于我的电脑的信息和文件夹存在的路径。第二行是命令`git init`，第三行是发回的响应，告诉我我的仓库（repo）已经被初始化了。它被认为是空的，因为我们还没有告诉Git要追踪哪些文件。

仓库只是定义一个被 Git 监视/跟踪的项目的另一种方式。

### Git项目文件

我只创建了一个名为 "todo.txt "的文件。这个文件看起来是这样的:

```txt
MY TO-DO LIST

1. Write an article.
2. Code.
3. Study books.
4. Attend classes on time.
5. Visit aunt.
6. Apply for remote jobs. 
```

在我们继续学习其他Git命令之前，让我们先谈谈GitHub。

## 什么是GitHub？

GitHub是一个为Git存储库提供的在线托管服务。想象一下，你在家里做一个项目，当你不在的时候，也许是在朋友那里，你突然想起了一个代码错误的解决方案，让你几天都坐立不安。

你不能进行这些修改，因为你的电脑不在你身边。但如果你的项目托管在GitHub上，你就可以在你能接触到的任何电脑上用命令访问和下载该项目。然后你就可以进行修改，并将最新版本推送回 GitHub。

总之，GitHub 可以让你在他们的平台上存储你的 repo。GitHub的另一个了不起的功能是可以在任何地方与其他开发者进行合作。

现在我们已经在本地创建并初始化了我们的项目，让我们把它推送到 GitHub。

如果你是初学者，你会遇到一些新的术语，比如推送（push）、提交（commit）、添加（add）等等--但不要被它们吓倒。只要多加练习，你就能记住这些术语和它们的作用。

## 如何推送一个仓库到GitHub

我将把本节分为几个步骤，以帮助你更清楚地了解这个过程。

### 第1步 - 创建一个GitHub账户

为了能够使用GitHub，你必须先创建一个账户。你可以在他们的[网站]（https://github.com/) 创建。

### 第2步 - 创建一个存储库

你可以点击页面右上角的`+`符号，然后选择 "New repository"。给你的版本库起个名字，然后向下滚动并点击 "Create repository"。

### 第三步 - 添加和提交文件

在我们 "添加（add）"和 "提交（commit）"我们的文件之前，你需要了解一个文件被 Git 跟踪的阶段。

#### 已经提交的状态

当一个文件的所有修改都被保存在本地的 repo 中时，该文件就处于**提交的（committed）**状态。处于提交阶段的文件是可以被推送到远程 repo（在 GitHub 上）的文件。

#### 已修改状态

处于**修改（modified）**状态的文件已经做了一些修改，但还没有保存。这意味着该文件的状态与之前在提交状态下的状态有了改变。

#### 阶段性状态

处于**阶段（staged）**状态的文件意味着它可以被提交了。在这种状态下，所有必要的修改都已经完成，所以下一步就是把文件移到提交状态。

你可以把 Git 想象成一台摄像机，这样就能更好地理解。只有当文件到达提交状态时，相机才会进行快照。在这个状态之后，相机开始比较正在对同一文件进行的修改和最后一次快照（这就是修改状态）。而当所需的修改完成后，文件就会被分阶段移动到提交状态，以便进行新的快照。

目前，这可能是一个很大的信息量，但不要气馁--随着实践的进行，它变得更容易。

### 如何在Git中添加文件

当我们第一次初始化我们的项目时，该文件没有被Git追踪到。要做到这一点，我们使用这个命令`git add .`，将添加当前目录下所有文件。如果你想添加一个特定的文件，也许是一个名为`about.txt`的文件，你可以用`git add about.txt`。

现在，我们的文件已经处于暂存状态（staged state）。这条命令之后你不会得到回应，但要知道你的文件处于什么状态，你可以运行`git status`命令。

### 如何在 Git 中提交文件

文件下一个状态处于提交状态（committed state）。为了提交我们的文件，我们使用`git commit -m "first commit"`命令。

命令的第一部分 "git commit "告诉 Git，所有被暂存的文件都准备好提交了，所以是时候进行快照了。第二部分 `-m "first commit"` 是提交信息。`-m`是信息的缩写，而括号内的文字是提交信息。

执行这个命令后，你应该得到一个类似这样的响应:

![Screenshot--97-](https://www.freecodecamp.org/news/content/images/2021/11/Screenshot--97-.png)

```shell
git commit
```

现在我们的文件已经处于提交状态（committed state）。

### 第四步 - 推送仓库到 GitHub

创建完仓库后，你的浏览器应该跳到向到一个页面，告诉你如何在本地创建一个仓库或推送一个现有仓库。

在我们的例子中，项目已经存在于本地，所以我们将使用 ".…or push an existing repository from the command line" 部分的命令。这些是命令:

```shell
git remote add origin https://github.com/ihechikara/git-and-github-tutorial.git
git branch -M main
git push -u origin main
```

第一个命令 `git remote add origin [https://github.com/ihechikara/git-and-github-tutorial.git](https://github.com/ihechikara/git-and-github-tutorial.git)`，在你的本地 repo 和 Github 上的远程 repo 之间建立连接。

你的远程项目的URL应该与上面的完全不同。所以要根据你的实际URL，确保你是按照步骤，用你自己的远程 repo 工作。执行这个命令后，你通常不会得到回应，但要确保你有互联网连接。

第二个命令 `git branch -M main` 将主分支的名字改为 "main"。默认的分支可能被创建为 "master"，但 "main "是现在这个 repo 的标准名称。这里通常没有回应。

最后一个命令 `git push -u origin main`  将你的 repo 从本地设备推送到 GitHub。你应该得到与此类似的回应:

![Screenshot--102-](https://www.freecodecamp.org/news/content/images/2021/11/Screenshot--102-.png)

```shell
git push
```

为了帮助你加深对文件阶段的理解，我将对文件进行修改，然后将新版本推送到GitHub。

回顾一下，我们的文件现在处于提交状态。让我们对文件进行修改，并注意到这些状态。

我将在待办事项列表中添加一个新任务:

```txt
MY TO-DO LIST

1. Write an article.
2. Code.
3. Study books.
4. Attend classes on time.
5. Visit aunt.
6. Apply for remote jobs. 
7. Practice code
```

添加新任务后，运行`git status`命令。你应该看到这样的情况:

![Screenshot--98-](https://www.freecodecamp.org/news/content/images/2021/11/Screenshot--98-.png)

```shell
git status
```

在对文件进行修改后，它移到了修改状态--但它还没有被分期提交，所以你还不能把它推送到 GitHub。Git 并没有对这个当前状态进行最终的快照，因为它只是将我们现在所做的修改与最后的快照进行比较。

现在我们要添加（stage）这个文件，然后提交（commit ）并推送（push）它。这与上一节的做法相同。

我们首先使用`git add .`添加文件，它添加了当前目录下的所有文件（在我们的例子中是一个文件）。然后我们通过运行`git commit -m "added new task"`来提交该文件，接着是`git push -u origin main`。

这就是将修改过的文件推送到 GitHub 的三个步骤。添加（add），提交（commit），然后推送（push）。我希望你现在理解了文件阶段和与之相关的命令。

## 如何在Git中使用分支（branch）

有了分支，你可以在不破坏原始副本的情况下，创建一个你想要处理的文件副本。你可以把这些修改合并到原始副本上，或者让分支保持独立。

在我们开始使用分支之前，我想给大家看一下我们的 repo 的可视化表示，它看起来像这样:

![g638](https://www.freecodecamp.org/news/content/images/2021/11/g638.png)

main banch

上图显示了我们的主分支和最近的两次提交（第一次提交和添加的新任务提交）。

在这一点上，我想在列表中添加更多的任务，但我还不确定是否要把它们放在主列表中。因此，我将创建一个名为 `test` 的新分支，看看加入更多任务后我的列表会是什么样子。

要创建一个新的分支，运行这个命令。`git checkout -b test`。我将把它分开来。

`checkout`告诉Git它应该切换到一个新的分支。`b`告诉Git创建一个新的分支。`test`是要创建和切换到的分支的名字。以下是你应该得到的响应。:

![Screenshot--99-](https://www.freecodecamp.org/news/content/images/2021/11/Screenshot--99-.png)

```shell
git checkout -b
```

现在我们已经创建了一个新的分支，这就是我们的 repo 的模样:

![g664](https://www.freecodecamp.org/news/content/images/2021/11/g664.png)

```shell
git branch
```

我们从上次提交的状态中创建了新的分支。现在让我们为这个新分支添加更多任务。

```txt
MY TO-DO LIST

1. Write an article.
2. Code.
3. Study books.
4. Attend classes on time.
5. Visit aunt.
6. Apply for remote jobs. 
7. Practice code
8. Complete internship task.
9. Practice chess openings.
10. Solve chess puzzles.
11. Check exam schedule. 
```

我增加了四个新任务。要把新的状态合并到主分支（main branch）。你必须先把这个分支分阶段并提交，由于我们在上一节中做了两次，我就不详细介绍如何提交。

你应该自己试着做一下，这样你就会明白它是如何工作的。作为提示，先添加文件，然后带着信息提交（参考上一节的细节，告诉你如何做）。

提交完测试分支后，通过运行以下命令切换回主分支，`git checkout main`。

你是否注意到，我们没有添加`-b`？这是因为我们不是在创建一个新的分支，而是切换到一个现有的分支。你可以通过运行`git branch`命令来检查你的 repo 中存在的所有分支。

现在，我们可以通过运行`git merge test`，将测试分支中的修改合并到主分支中。这时，你会看到测试分支中的所有改动都反映在主分支中。你还应该收到类似这样的回复:

![Screenshot--100-](https://www.freecodecamp.org/news/content/images/2021/11/Screenshot--100-.png)

```shell
git merge
```

下面是我们的 repo 的图示:

![g816](https://www.freecodecamp.org/news/content/images/2021/11/g816.png)

如果你继续将你的 repo 推送到 GitHub，你会发现测试分支不会被推送。它只会保留在你的本地 repo 中。如果你想推送你的测试分支，可以用`git checkout test`切换到该分支，然后运行`git push -u origin test`。

## 如何在Git中拉出一个存储库

在Git中拉取意味着将远程仓库的当前状态克隆到你的电脑/仓库中。当你想在不同的电脑上操作你的仓库时，或者当你在网上为一个开源项目做贡献时，这就很方便了。

要测试这一点，不用担心切换到新的电脑。只要运行`cd ..` 就可以离开当前目录并返回上一层目录。在我自己的例子中，我已经导航回到了我的桌面。

进入GitHub，在你的仓库的主页上，你应该看到一个绿色的按钮，上面写着 "code"。当你点击这个按钮时，你应该在一个下拉菜单中看到一些选项。继续并复制HTTPS URL。

之后，运行`git clone YOUR_HTTPS_URL`。这个命令会把远程版本库拉到你的本地电脑上，放在一个叫`git-and-git-tutorial`的文件夹里。就是说:

![Screenshot--101-](https://www.freecodecamp.org/news/content/images/2021/11/Screenshot--101-.png)

```shell
git clone
```

## 结语

本文介绍了有助于你开始使用Git的基本命令。我们还开始学习如何使用GitHub。

如果你已经跟到了这一步，那么恭喜你，你已经可以开始了。现在无论你使用什么编程语言，都可以在你的项目中使用Git。

你应该知道，这些并不是Git中存在的所有命令，所以你可以随时做更多的研究来了解更多的命令和它们的用途。 [这篇文章](https://www.freecodecamp.org/news/what-is-git-learn-git-version-control/) 和 [手册](https://www.freecodecamp.org/news/git-cheat-sheet/) 是很好的开始。 [这个gist](https://gist.github.com/brandon1024/14b5f9fcfd982658d01811ee3045ff1e) 是查看更多 Git 命令的详细列表的好地方。

在推特上找到我 [@ihechikara2](https://twitter.com/Ihechikara2)。 享受编程！
