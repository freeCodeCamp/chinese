> - 原文地址：[Command Line for Beginners – How to Use the Terminal Like a Pro](https://www.freecodecamp.org/news/command-line-for-beginners/)
> - 原文作者：[Germán Cocca](https://www.freecodecamp.org/news/author/gercocca/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Command Line for Beginners – How to Use the Terminal Like a Pro](https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/pexels-pixabay-207580.jpg)

大家好! 在这篇文章中，我们将好好看看命令行（也被称为CLI、控制台、终端或shell）。

命令行是我们作为开发者和一般的计算机用户所拥有的最有用和最有效的工具之一。但是，当你开始使用它时，可能会感到有点不知所措和复杂。

在这篇文章中，我将尽力简单解释构成命令行界面的各个部分，以及它如何工作的基本原理，这样你就可以开始使用它来完成你的日常任务。

开始吧! =D

## 目录

- [Difference between console, terminal, command line (CLI) and Shell](#differencebetweenconsolecommandlinecliterminalandshell)
  - [Console](#console)
  - [Terminal](#terminal)
  - [Shell](#shell)
  - [Command line (CLI)](#commandlineorclicommandlineinterface)
- [Why should I even care about using the terminal?](#whyshouldievencareaboutusingtheterminal)
- [Different kinds of shells](#differentkindsofshells)
  - [A bit of history - Posix](#abitofhistoryposix)
  - [How do I know what shell I'm running?](#howdoiknowwhatshellimrunning)
  - [What shell is better?](#whatshellisbetter)
    - [A comment about customization](#acommentaboutcustomization)
- [Most common and useful commands to use](#mostcommonandusefulcommandstouse)
  - [Git commands](#gitcommands)
- [Our first script](#ourfirstscript)
- [总结](#总结)

# Difference between console, command line (CLI), terminal and Shell

我认为一个好的开始是准确了解什么是命令行。

在提到这一点时，你可能听说过终端、控制台、命令行、CLI和shell这些术语。人们经常交替使用这些词，但事实是它们实际上是不同的东西。

区分它们并不一定是很重要的知识，但它将有助于澄清事情。因此，让我们简单地解释一下每一个。

## Console

控制台（console）是允许你与计算机互动的 **物理设备**。

通俗地说，它就是你的电脑屏幕、键盘和鼠标。作为一个用户，你 **通过** 控制台与计算机进行互动。

![image_13b2c80d-a2d6-4429-8ca6-f053340897cc](https://www.freecodecamp.org/news/content/images/2022/03/image_13b2c80d-a2d6-4429-8ca6-f053340897cc.png)

## Terminal

终端是一个文本输入和输出环境。它是作为一个**包装器（wrapper）** 的 **程序**，允许我们输入计算机处理的命令。

用简单来说，它是一个 "窗口"，你在其中输入计算机将处理的实际命令。

![terminal](https://www.freecodecamp.org/news/content/images/2022/03/terminal.png)

请记住，终端是一个程序，就像其他任何程序一样。和其他程序一样，你可以随意安装和卸载它。也可以在你的电脑中安装许多终端，随时运行你想运行的终端。

所有的操作系统都安装了一个默认的终端，但有很多选择，每个都有自己的功能和特点。

## Shell

shell是一个**程序**，作为命令行解释器。它**处理命令**并**输出结果**。它解释和处理用户输入的命令。

与终端（terminal）一样，shell是所有操作系统中默认的程序，但也可以由用户自己安装和卸载。

不同的shell也有不同的语法和特点。也可以在你的电脑上安装许多shell，并在你想的时候运行每个shell。

在大多数Linux和Mac操作系统中，默认的shell是Bash。而在Windows中则是Powershell。其他一些常见的shell的例子是Zsh和Fish。

 shells也可以作为 **编程语言** 来工作，在这个意义上，我们可以用它们建立 **脚本（scripts）**，使我们的计算机执行某种任务。脚本只不过是一系列指令（命令），我们可以将其保存在文件中，然后在我们想执行的时候执行。

我们将在本文的后面看一下脚本的内容。现在只要记住，shell是你的计算机用来 **理解** 和执行你的命令的程序，你也可以用它来编写任务。

还要记住，终端是shell运行的程序。但这两个程序是独立的。这意味着，我可以让任何shell在任何终端上运行。在这个意义上，两个程序之间没有依赖性。

## Command line or CLI (command line interface)

CLI是一个界面，我们在其中输入命令供计算机处理。用简单来说，它是一个空间，你在其中输入计算机将处理的命令。

![cli](https://www.freecodecamp.org/news/content/images/2022/03/cli.png)

这实际上与终端（terminal）是一样的，在我看来，这些术语可以互换使用。

这里要提到的一件有趣的事情是，大多数操作系统都有两种不同类型的界面:

- **CLI**，它将命令作为输入，以使计算机执行任务。
- 另一个是**GUI**（图形用户界面），用户可以看到屏幕上的东西并点击它们，计算机将通过执行相应的任务对这些事件作出反应。

# Why should I even care about using the terminal?

我们刚刚提到，大多数操作系统都有一个图形用户界面。因此，如果我们可以在屏幕上看到东西，并点击来做我们想做的事情，你可能会想，为什么你要学习这个复杂的终端（terminal）/cli/shell东西呢？

第一个原因是，对于许多任务来说，它只是**更有效率**。我们稍后会看到一些例子，但是有很多任务在GUI中需要在不同的窗口中进行多次点击。但在CLI上，这些任务可以用一个命令来执行。

从这个意义上说，熟悉命令行将帮助你节省时间，能够更快地执行你的任务。

第二个原因是，通过使用命令，你可以轻松地**自动化任务**。如前所述，我们可以用我们的shell建立脚本，然后在我们想要的时候执行这些脚本。在处理那些我们不想重复做的重复性任务时，这非常有用。

仅举一些例子，我们可以建立一个脚本，为我们创建一个新的在线 repo，或者为我们在云提供商上创建一个特定的基础设施，或者执行一个更简单的任务，如每小时改变我们的屏幕墙纸。

脚本是一种节省重复性任务时间的好方法。

第三个原因是，有时CLI将是我们能够与计算机互动的***唯一方式。例如，当你需要与云平台服务器互动时。在大多数情况下，你不会有一个GUI，只有一个CLI来运行命令。

因此，熟练掌握CLI将使你能够在所有情况下与计算机互动。

最后一个原因是它看起来很酷，很有趣。你不会看到电影中的黑客在他们的电脑周围点击，对吗？）

# Different kinds of shells

在深入研究你可以在终端运行的实际命令之前，我认为认识不同类型的shell以及如何识别你目前正在运行的shell很重要。

不同的shell有不同的语法和不同的功能，所以要知道到底要输入什么命令，你首先要知道你在运行什么shell。

## A bit of history – Posix

对于shells，有一个通用的标准，叫做 **[Posix](https://en.wikipedia.org/wiki/POSIX)**。

Posix对shell的作用与ECMAScript对JavaScript的作用非常相似。它是一个标准，规定了所有shell应该遵守的某些特性和功能。

这个标准是在20世纪80年代建立的，目前大多数shell都是根据这个标准开发的。这就是为什么大多数shell共享类似的语法和类似的特征。

## How do I know what shell I'm running?

要知道你当前运行的是什么shell，只需打开你的终端并输入`echo $0`。这将打印出当前运行的程序名称，在这种情况下，它就是实际的shell。

![screenshot-1](https://www.freecodecamp.org/news/content/images/2022/04/screenshot-1.png)

## What shell is better?

大多数shell之间没有很大的区别。由于它们大多符合相同的标准，你会发现它们中的大多数工作都是类似的。

不过，你可能想知道一些细微的差别:

- 如前所述，**Bash**是使用最广泛的，在Mac和Linux上默认安装。
- *Zsh**与Bash非常相似，但它是在Bash之后创建的，并且比它有一些不错的改进。如果你想更详细地了解它的区别，[这里有一篇很酷的文章](https://linuxhint.com/differences_between_bash_zsh/#:~:text=It%20has%20many%20features%20like,by%20default%20with%20Linux%20distribution.) 关于 zsh。
- **Fish**是另一个常用的shell，它有一些不错的内置功能和配置，如自动完成和语法高亮。关于Fish的问题是，它不是Posix兼容，而Bash和Zsh是。这意味着你能在Bash和Zsh上运行的一些命令不能在Fish上运行，反之亦然。这使得Fish脚本与Bash和Zsh相比对大多数计算机的兼容性较差。
- 还有一些其他的shell，比如**Ash**或**Dash**（命名只是让一切变得更加混乱，我知道......），它们是Posix shell的精简版本。这意味着它们只提供Posix所需要的功能，而没有其他的。而Bash和Zsh **增加** 了比Posix要求更多的功能。

事实上，shells增加了更多的功能，使它们更容易、更友好地进行交互，但执行脚本和命令的速度较慢。

因此，一种常见的做法是使用Bash或Zsh这样的 **增强型** shell进行一般的交互，而使用Ash或Dash这样的 **剥离型** shell来执行脚本。

当我们在后面讨论脚本时，我们将看到如何定义什么shell来执行一个给定的脚本。

如果你对这些shell之间更详细的比较感兴趣，[这里有一个视频，解释得非常清楚](https://www.youtube.com/watch?v=dRdGq8khTJc):

如果必须推荐一个shell，我会推荐bash，因为它是最标准和最常用的一个。这意味着你能够将你的知识转化为大多数环境。

但是，事实上，大多数shell之间并没有很大的区别。所以在任何情况下，你都可以尝试几种，看看你最喜欢哪一种。:)

### A comment about customization

我刚刚提到，Fish有内置的配置，比如自动完成和语法高亮。这在Fish中是内置的，但在Bash或Zsh中你也可以配置这些功能。

关键是shells是可定制的。你可以编辑程序如何工作，你有哪些命令，你的提示符显示什么信息，等等。

我们不会在这里看到详细的定制选项，但要知道，当你在你的计算机上安装shell时，你的系统上将会创建某些文件。以后你可以编辑这些文件来定制你的程序。

此外，网上有许多插件，允许你以更容易的方式定制你的外壳。你只需安装它们并获得该插件提供的功能。一些例子是 [OhMyZsh](https://ohmyz.sh/) 和 [Starship](https://starship.rs/)。

这些定制选项对终端也是如此。

因此，你不仅有许多shell和终端（terminal）选项可供选择--你还为每个shell和终端有许多配置选项。

如果你刚开始使用，所有这些信息可能会让你感到有点不知所措。但只要知道有许多选项可用，而且每个选项也可以被定制。

# Most common and useful commands to use

现在我们对CLI的工作方式有了一个基础，让我们深入了解一下最有用的命令，你可以开始在你的日常工作中使用。

请记住，这些例子将基于我目前的配置（Linux操作系统上的Bash）。但无论如何，大多数命令应该适用于大多数配置。

- **Echo**在终端打印出我们传递给它的任何参数。

```shell
echo Hello freeCodeCamp! // Output: Hello freeCodeCamp!
```

- **pwd**代表打印工作目录，它打印出我们目前在计算机中的 **位置** 或目录。

```shell
pwd // Output: /home/German
```

- **ls** 向你展示你当前所在的目录的内容。它将向你展示你当前目录中的文件和其他目录。

例如，这里我在最近工作的一个React项目目录上:

```shell
ls // Output:
node_modules  package.json  package-lock.json  public  README.md  src
```

If you pass this command the flag or paremter `-a` It will also show you hidden files or directories. Like `.git` or `.gitignore` files

```shell
ls -a // Output:
.   .env  .gitignore    package.json       public     src
..  .git  node_modules  package-lock.json  README.md
```

- **cd** 是Change directory的缩写，它将把你从你的当前目录带到另一个目录。

在我的 `home` 目录下，我可以输入`cd Desktop`，它将把我带到桌面目录。

如果我想上升一个目录，也就是说，去包含当前目录的目录，我可以输入`cd ..`。

如果你只输入`cd`，它将直接带你到你的 `home` 目录。

- **mkdir** 代表制作目录，它将为你创建一个新的目录。你必须把目录名称参数传给命令。

如果我想创建一个名为 "Test "的新目录，我将输入`mkdir test`。

- **rmdir** 代表删除目录，它就是这样做的。它和 `mkdir` 一样需要目录名参数：`rmdir test`。

- **touch** 允许你在当前目录下创建一个空文件。作为参数，它需要文件名，如`touch test.txt`。

- **rm**允许你删除文件，与 `rmdir` 允许你删除目录的方式相同。 `rm test.txt`

- **cp** 允许你复制文件或目录。这个命令需要两个参数：第一个是你想复制的文件或目录，第二个是你复制的目的地（你想把文件/目录复制到哪里）。

如果我想在同一目录下复制我的txt文件，我可以输入以下内容:

```shell
cp test.txt testCopy.txt
```

看，目录没有改变，因为在 **目的地** 中我输入了新的文件名。

如果我想把文件复制到一个不同的目录，但保持相同的文件名，我可以输入这个:

```shell
cp test.txt ./testFolder/
```

而如果我想复制到一个不同的文件夹，改变字段名，当然可以这样输入:

```shell
cp test.txt ./testFolder/testCopy.txt
```

- **mv**是移动的简称，它让我们把一个文件或目录从一个地方移动到另一个地方。也就是说，在一个新的目录中创建它，并在前一个目录中删除它（就像你通过剪切和粘贴所做的一样）。

同样，这个命令需要两个参数，即我们想要移动的文件或目录和目的地。

```shell
mv test.txt ./testFolder/
```

如果我们愿意，也可以在同一命令中改变文件的名称:

```shell
mv test.txt ./testFolder/testCopy.txt
```

- **head**允许你直接从终端查看文件或管道数据的开始部分。

```shell
head test.txt // Output:
this is the beginning of my test file
```

- **tail** 的工作原理是一样的，但它会向你显示文件的结尾部分内容。

```shell
tail test.txt // Output:

this is the end of my test file
```

- **--help/**标志可用于大多数命令，它将返回如何使用该命令的信息。

```shell
cd --help // output:
cd: cd [-L|[-P [-e]] [-@]] [dir]
Change the shell working directory.
```

将当前目录改为DIR。默认的DIR是HOME shell 变量的值。

变量CDPATH定义了包含DIR的目录的搜索路径。CDPATH中的备选目录名由冒号`:`分隔。

如果DIR以`...`开头，则空目录名与当前目录相同。

- 以类似的方式，**man** 命令将返回任何特定命令的信息。

```shell
    man cp // output:

    CP(1)                            User Commands                           CP(1)

    NAME
           cp - copy files and directories

    SYNOPSIS
           cp [OPTION]... [-T] SOURCE DEST
           cp [OPTION]... SOURCE... DIRECTORY
           cp [OPTION]... -t DIRECTORY SOURCE...

    DESCRIPTION
           Copy SOURCE to DEST, or multiple SOURCE(s) to DIRECTORY.

           Mandatory  arguments  to  long  options are mandatory for short options
           too.

           -a, --archive
                  same as -dR --preserve=all

           --attributes-only
                  don't copy the file data, just the attributes
    ...
```

你甚至可以输入 "man bash"，这将返回一个关于这个shell的所有知识的详细手册。 ;)

- **code**将打开你的默认代码编辑器。如果你单独输入这个命令，它只是打开你最近打开的文件/目录的编辑器。

你也可以通过传递参数来打开一个指定的文件：`code test.txt`。

或者通过传递新的文件名来打开一个新的文件： `code thisIsAJsFile.js`.

- **edit**将在你的默认命令行文本编辑器上打开文本文件（如果你是在Mac或Linux上，可能是Nano或Vim）。

如果你打开了你的文件，然后无法退出你的编辑器，首先看一下这个:

![vimExit](https://www.freecodecamp.org/news/content/images/2022/03/vimExit.png)

然后输入 `:q!` 并回车。(译者注： q是quit的缩写)

这个备忘录很有趣，因为每个人一开始都在为使用CLI文本编辑器而挣扎，因为大多数操作（比如退出编辑器）都是通过键盘快捷键完成的。使用这些编辑器是另外一个话题，如果你有兴趣了解更多，就去找教程吧。 ;)

- **ctrl+c** 允许你退出终端正在运行的当前进程。例如，如果你正在用`npx create-react-app`创建一个react应用，并想在某个时候取消构建，只要按下组合键 **ctrl+c**，它就会停止。

- 从终端复制文本可以用**ctrl+shift+c**来完成，粘贴可以用**ctrl+shift+v**来完成。

- **clear**将清除你的终端上的所有内容。

- **exit**将关闭你的终端，（这不是一个命令，但它也很酷）**ctrl+alt+t**将为你打开一个新终端。

- 通过按**上 下方向键**你可以浏览你之前输入的命令。

- 按下 **tab**，你将得到基于你到目前为止所写的命令的自动补全。按下 **两次tab**，你会得到基于你到目前为止所写命令的建议。

例如，如果我输入 **edit test** 并按下两次 tab，我就会得到 `testFolder/ test.txt`。如果我写`edit test.`并按下 **tab**，我的文本会自动补全为`edit test.txt`。

## Git commands

除了在文件系统中工作和安装/卸载东西，作为一个开发者在终端最常使用可能是Git和线上仓库的交互。

从终端做这些事情比到处点击更有效率，所以让我们看看最有用的git命令吧。

- **git init**将为你创建一个新的本地版本库。

```shell
git init // output:
Initialized empty Git repository in /home/German/Desktop/testFolder/.git/
```

- **git add*将一个或多个文件添加到暂存区。你可以详细说明要添加到暂存区的特定文件，或者通过输入 "git add .`"来添加所有更改的文件。

- **git commit**将你的修改提交给版本库。提交必须总是必须伴随着`-m`标志和提交信息。

```shell
git commit -m 'This is a test commit' // output:
[master (root-commit) 6101dfe] This is a test commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 test.js
```

- **git status**告诉你，你目前在哪个分支上，以及你是否有修改要提交。

```shell
git status  // output:
On branch master
nothing to commit, working tree clean
```

- **git clone**允许你克隆（复制）一个仓库到你当前所在的目录。请记住，你既可以克隆远程仓库（GitHub、GitLab等），也可以克隆本地仓库（那些存储在你电脑中的仓库）。

```shell
git clone https://github.com/coccagerman/MazeGenerator.git // output:
Cloning into 'MazeGenerator'...
remote: Enumerating objects: 15, done.
remote: Counting objects: 100% (15/15), done.
remote: Compressing objects: 100% (15/15), done.
remote: Total 15 (delta 1), reused 11 (delta 0), pack-reused 0
Unpacking objects: 100% (15/15), done.
```

- **git remote add origin**是用来详细说明你的项目要使用的远程仓库的URL。如果你想在某个时候改变它，你可以通过使用`git remote set-url origin`命令来实现。

```shell
git remote add origin https://github.com/coccagerman/testRepo.git
```

> 请记住，你需要先创建你的远程版本，以便获得其URL。稍后我们将看到你如何通过一个小脚本从命令行中做到这一点。 ;)

- **git remote -v**可以让你列出当前正在使用的远程仓库。

```shell
git remote -v // output:
origin https://github.com/coccagerman/testRepo.git (fetch)
origin https://github.com/coccagerman/testRepo.git (push)
```

- **git push**将你已提交的修改上传到你的远程 repo。

```shell
git push // output:
Counting objects: 2, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 266 bytes | 266.00 KiB/s, done.
Total 2 (delta 0), reused 0 (delta 0)
```

- **git branch**列出了你的 repo 上的所有可用分支，并告诉你目前在哪个分支上。如果你想创建一个新的分支，你只需把新的分支名称作为参数加入，比如`git branch <branch name>`。

```shell
git branch // output:
* main
```

- **git checkout**将你从一个分支移到另一个分支。它把你的目标分支作为 paremeter。

```shell
git checkout newBranch // output:
Switched to branch 'newBranch'
```

- **git pull**从你的远程仓库拉取（下载）代码，并将其与你的本地仓库相结合（combines）。这在团队工作中特别有用，当许多开发人员在同一个代码库中工作时。在这种情况下，每个开发者都会定期从远程版本库拉取代码，以便在一个包括所有其他开发者所做修改的代码库中工作。

如果你的远程版本中有新的代码，该命令将返回在拉取中被修改的实际文件。如果没有，我们会得到 _`Already up to date（已经更新)`_。

```shell
git pull // output:
Already up to date.
```

- **git diff**允许你查看你当前所在的分支和另一个分支之间的差异。

```shell
git diff newBranch // output:
diff --git a/newFileInNewBranch.js b/newFileInNewBranch.js
deleted file mode 100644
index e69de29..0000000
```

顺便说一下，当比较不同分支或版本之间的差异时，通常会使用 [Meld](https://meldmerge.org/) 这样的可视化工具。并不是说你不能在终端中直接看到它，但这个工具对于更清晰的可视化是非常有用的。

- **git merge**将你当前所在的分支与另一个分支合并（合并）。请记住，所做的修改将只并入你当前所在的分支，而不是另一个分支。

```shell
git merge newBranch // output:
Updating f15cf51..3a3d62f
Fast-forward
 newFileInNewBranch.js | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 newFileInNewBranch.js
```

- **git log**列出了你在 repo 中以前做过的所有提交。

```shell
git log // output:
commit 3a3d62fe7cea7c09403c048e971a5172459d0948 (HEAD -> main, tag: TestTag, origin/main, newBranch)
Author: German Cocca <german.cocca@avature.net>
Date:   Fri Apr 1 18:48:20 2022 -0300

    Added new file

commit f15cf515dd3ec398210108dce092debf26ff9e12
Author: German Cocca <german.cocca@avature.net>
    ...
```

- **--help/**标志会显示关于某个命令的信息，与bash的工作方式完全相同。

```shell
git diff --help // output:
GIT-DIFF(1)                       Git Manual                       GIT-DIFF(1)

NAME
       git-diff - Show changes between commits, commit and working tree, etc

SYNOPSIS
       git diff [options] [<commit>] [--] [<path>...]
       git diff [options] --cached [<commit>] [--] [<path>...]
       ...
```

# Our first script

现在我们准备进入命令行中真正有趣和很棒的部分，即脚本!

正如我之前提到的，一个脚本只不过是一系列我们可以在任何时候执行的命令或指令。为了解释我们如何编写一个脚本，我们将使用一个简单的例子，让我们通过运行一个命令来创建一个github repo。 ;)

- 首先要做的是创建一个`.sh`文件。你可以把它放在任何地方。我把我的文件称为 `newGhRepo.sh`。

- 然后在你选择的文本/代码编辑器中打开它。

- 在我们的第一行，我们将写下以下内容。`#! /bin/sh`。

这被称为**shebang**，它的作用是声明什么shell来运行这个脚本。

还记得我们以前提到过，我们可以用一个给定的shell来进行一般的交互，而用另一个给定的shell来执行一个脚本吗？那么，shebang就是决定由哪个shell来运行脚本的指令。

如前所述，我们使用一个 "精简的 "shell（也称为sh shells）来运行脚本，因为它们更有效率（尽管说实话，这种差别可能是难以察觉的，这只是一种个人偏好）。在我的电脑中，我把dash作为我的sh shell。

如果我们想让这个脚本用bash运行，那么shebang应该是`#! /bin/bash`。

- 我们的下一行将是`repoName=$1`。

这里我们声明了一个名为 **repoName** 的变量，并将其分配给脚本收到的第一个参数的值。

一个**参数**是一组在脚本/命令后面输入的字符。就像 `cd` 命令一样，我们需要指定一个目录参数，以便改变目录（即：`cd testFolder`）。

我们可以通过使用 `$` 符号和预期参数的顺序来识别脚本中的参数。

如果我期望有一个以上的参数，我可以这样写:

```shell
paramOne=$1
paramTwo=$2
paramThree=$3
...
```

- 所以，我们希望将代码库的名称作为我们脚本的参数。但如果用户忘记输入会怎样？我们需要想一下，所以接下来我们要编写一个**条件**，不断要求用户输入版本库名称，直到收到该参数。
我们可以这样做:

```shell
while [ -z "$repoName" ]
do
   echo 'Provide a repository name'
   read -r -p $'Repository name:' repoName
done
```

我们可以这样做:

1. 当repoName变量未被分配时（`while [ -z "$repoName" ]`）
2. 将此信息打印到控制台（`echo '提供一个版本库名称'`）
3. 然后读取用户提供的任何输入，并将输入分配给 `repoName` 变量 (`read -r -p $'Repository name:' repoName`)

- 现在我们有了我们的 repo 名称，我们可以像这样创建我们的本地 Git repo:

```shell
echo "# $repoName" >> README.md
git init
git add .
git commit -m "First commit"
```

这就是创建一个readme文件，并在第一行写上 repo名称（`echo "# $repoName" >> README.md`），然后初始化git repo并做第一次提交。

- 然后，是时候把我们的 repo 上传到 github 了。要做到这一点，我们将利用[github API](https://docs.github.com/en/rest/reference/repos)的优势，使用以下命令:

`curl -u coccagerman https://api.github.com/user/repos -d '{"name": "'"$repoName"'", "private":false}'`

**curl** 是一个从服务器传输数据的命令，使用许多支持的协议之一。

接下来我们使用`-u`标志来声明我们为之创建的用户（`-u coccagerman`）。

接下来是GitHub API提供的 endpoint(`https://api.github.com/user/repos`)

最后，我们使用`-d`标志来传递参数给这个命令。在这种情况下，我们要指出版本库的名称（为此我们使用`repoName`变量），并将`private`选项设置为`false`，因为我们希望我们的版本库是公开的。

在API中还有很多其他的配置选项，所以[查看文档](https://docs.github.com/en/rest/reference/repos#create-a-repository-for-the-authenticated-user)了解更多信息。

- 运行此命令后，GitHub 会提示我们输入 **(private token)私人令牌** 进行认证。

如果你还没有私人令牌，你可以在GitHub的  **Settings > Developer settings > Personal access tokens**

![screenshot](https://www.freecodecamp.org/news/content/images/2022/04/screenshot.png)

![screenshot_1](https://www.freecodecamp.org/news/content/images/2022/04/screenshot_1.png)

![screenshot_2](https://www.freecodecamp.org/news/content/images/2022/04/screenshot_2.png)

- 酷，我们现在几乎已经完成了! 现在我们需要的是我们新创建的GitHub repo的 **remote URL**。

为了得到它，我们将再次使用 curl 和 GitHub API，像这样:

```shell
GIT_URL=$(curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/coccagerman/"$repoName" | jq -r '.clone_url')
```

这里我们声明了一个叫做`GIT_URL`的变量，并将其分配给下面命令返回的任何内容。

`-H`标志设置了我们请求的头。

然后我们传递GitHub的API endpoint，其中应包含我们的用户名(user name)和 repo名称 (`https://api.github.com/repos/coccagerman/"$repoName"`).

然后，我们就 **piping** 了我们请求的返回值。管道化(piping)只是意味着将一个进程的返回值作为另一个进程的输入值。我们可以用`|`符号来做，比如`<process1> | <process2>`。

最后我们运行 `jq` 命令，这是一个处理JSON输入的工具。在这里，我们告诉它获得 `.clone_url` 的值，根据GitHub API提供的数据格式，这是我们的远程git URL的位置。

- 最后一步，我们将主分支重命名为main，添加我们刚刚获得的远程源码，然后将我们的代码推送到GitHub上! =D

```shell
git branch -M main
git remote add origin $GIT_URL
git push -u origin main
```

我们的完整脚本应该看起来像这样:

```shell
#! /bin/sh
repoName=$1

while [ -z "$repoName" ]
do
    echo 'Provide a repository name'
    read -r -p $'Repository name:' repoName
done

echo "# $repoName" >> README.md
git init
git add .
git commit -m "First commit"

curl -u <yourUserName> https://api.github.com/user/repos -d '{"name": "'"$repoName"'", "private":false}'

GIT_URL=$(curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/<yourUserName>/"$repoName" | jq -r '.clone_url')

git branch -M main
git remote add origin $GIT_URL
git push -u origin main
```

- 现在是测试我们的脚本的时候了! 要 **执行** 它，我们可以做两件事。

一种方法是输入shell名称，并将文件作为参数传入，比如。`dash ../ger/code/projects/scripts/newGhRepo.sh`。

另一种是通过运行`chmod u+x ../ger/code/projects/scripts/newGhRepo.sh`，使文件有可执行权限。

然后你可以通过运行`../ger/code/projects/scripts/newGhRepo.sh`直接执行该文件。

这就是了! 我们有了我们的脚本并开始运行。每当我们需要一个新的 repo 时，我们就可以从我们所在的任何目录中执行这个脚本。

但这有一点很烦人。我们需要记住脚本目录的确切路径。如果能用一条命令来执行脚本，不管我们在哪个目录下都是一样的，那不是很酷吗？

在这里, **bash aliases（别名）** 来解决我们的问题。

别名是bash提供的一种方法，用于为我们想要运行的确切命令命名。

要创建一个新的别名，我们需要编辑我们系统中的bash配置文件。这些文件通常位于主目录中。别名可以在不同的文件中定义（主要是`.bashrc`或`.bash_aliases`）。

我的系统上有一个`.bash_aliases`文件，所以我们来编辑它。

- 在我们的CLI中，我们输入`cd ~`来查看主目录。

- 然后我们可以输入`ls -a`列出所有文件（包括隐藏的），并检查我们的系统中是否有`.bashrc`或`.bash_aliases`文件。

- 我们用我们选择的文本/代码编辑器打开该文件。

- 然后我们这样写我们的新别名:  
    `alias newghrepo="dash /home/German/Desktop/ger/code/projects/scripts/newGhRepo.sh"`

在这里，我声明了别名的名称，以及我将要输入的运行脚本的实际命令（`newghrepo`）。

在引号之间，定义这个别名要做什么（`"dash /home/German/Desktop/ger/code/projects/scripts/newGhRepo.sh"`)。

请看，我传递的是脚本的 [绝对路径](https://www.computerhope.com/issues/ch001708.htm)，这样，无论我的当前目录是什么，这个命令都是一样的。

如果你不知道你的脚本的绝对路径是什么，在你的终端上进入脚本目录，然后输入 `readlink -f newGhRepo.sh`。这应该可以为你返回完整的路径;)

- 编辑完成后，我们保存文件，重新启动终端，然后就可以了！我们可以通过输入 `newghrepo` 来运行我们的脚本。现在我们可以通过输入 `newghrepo` 来运行我们的脚本，无论我们目前在哪个目录下。这比打开浏览器和点击创建我们的 repo 要快得多！ =D

我希望这能让你体会到脚本所能带来的优化效果。当然，在你第一次编写、测试和设置脚本的时候，它需要多做一些工作。但在那之后，你就再也不用手动执行这项任务了。;)

# 总结

当你开始工作时，终端可能感觉是一个令人生畏和复杂的地方。但是，花时间和精力去学习它的内在和延展，肯定是值得的。极大提高效率。

> 如果你有兴趣学习更多关于终端和Bash的知识，Zach Gollwitzer在Youtube上有 [一个很棒的速成系列课程](https://www.youtube.com/playlist?list=PLYQSCk-qyTW0d88jNocdi_YIFMA5Fnpug).  
> 他在其他主题上也有很好的教程，如Node和Javascript，所以我推荐你关注他;)

像往常一样，我希望你喜欢这篇文章，并学到一些新东西。如果你愿意，你也可以在 [linkedin](https://www.linkedin.com/in/germancocca/) 或 [twitter](https://twitter.com/CoccaGerman) 上关注我。

感谢你的阅读，下一篇见! =D

![8ef61e333efccb5900cd117a4d64e8d3](https://www.freecodecamp.org/news/content/images/2022/04/8ef61e333efccb5900cd117a4d64e8d3.gif)
