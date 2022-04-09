> - 原文地址：[Command Line for Beginners – How to Use the Terminal Like a Pro](https://www.freecodecamp.org/news/command-line-for-beginners/)
> - 原文作者：[Germán Cocca](https://www.freecodecamp.org/news/author/gercocca/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Command Line for Beginners – How to Use the Terminal Like a Pro](https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/pexels-pixabay-207580.jpg)

大家好! 在这篇文章中，我们将好好看看命令行（也被称为CLI、控制台、终端或shell）。

命令行是我们作为开发者和一般的计算机用户所拥有的最有用和最有效的工具之一。但是，当你开始使用它时，可能会感到有点不知所措和复杂。

在这篇文章中，我将尽力简单解释构成命令行界面的各个部分，以及它如何工作的基本原理，这样你就可以开始使用它来完成你的日常任务。

开始吧! =D

## Table of Contents

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
- [Round up](#roundup)

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

- **git pull** pulls (downloads) the code from your remote repository and combines it with your local repo. This is particularly useful when working in teams, when many developers are working on the same code base. In this case each developer periodically pulls from the remote repo in order to work in a code base that includes the changes done by all the other devs.

If there's new code in your remote repo, the command will return the actual files that were modified in the pull. If not, we get `Already up to date`.

```shell
git pull // output:
Already up to date.
```

- **git diff** allows you to view the differences between the branch you're currently in and another.

```shell
git diff newBranch // output:
diff --git a/newFileInNewBranch.js b/newFileInNewBranch.js
deleted file mode 100644
index e69de29..0000000
```

As a side comment, when comparing differences between branches or repos, ussually visual tools like [Meld](https://meldmerge.org/) are used. It's not that you can't visualize it directly in the terminal, but this tools are greate for a clearer visualization.

- **git merge** merges (combines) the branch you're currently in with another. Keep in mind the changes will be incorporated only to the branch you're currently in, not to the other one.

```shell
git merge newBranch // output:
Updating f15cf51..3a3d62f
Fast-forward
 newFileInNewBranch.js | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 newFileInNewBranch.js
```

- **git log** lists all previous commits you've done in the repo.

```
git log // output:
commit 3a3d62fe7cea7c09403c048e971a5172459d0948 (HEAD -> main, tag: TestTag, origin/main, newBranch)
Author: German Cocca <german.cocca@avature.net>
Date:   Fri Apr 1 18:48:20 2022 -0300

    Added new file

commit f15cf515dd3ec398210108dce092debf26ff9e12
Author: German Cocca <german.cocca@avature.net>
    ...
```

- The **\--help** flag will show you information about a given command, exactly the same way it works with bash.

```
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

Now we're ready to get to the truly fun and awesome part of the command line, scripting!

As I mentioned previously, a script is nothing more than a series of commands or instructions that we can execute at any given time. To explain how we can code one, we'll use a simple example that will allow us to create a github repo by running a single command. ;)

- First thing to do is create a `.sh` file. You can put it wherever want. I called mine `newGhRepo.sh`.

- Then open it on your text/code editor of choice.

- On our first line, we'll write the following: `#! /bin/sh`

This is called a **shebang**, and its function is to declare what shell is going to run this script.

Remember previously when we mentioned that we can use a given shell for general interaction and another given shell for executing a script? Well, the shebang is the instruction that dictates what shell runs the script.

As mentioned too, we're using a "stripped down" shell (also known as sh shells) to run the scripts as they're more efficient (though the difference might be unnoticeable to be honest, It's just a personal preference). In my computer I have dash as my sh shell.

If we wanted this script to run with bash the shebang would be `#! /bin/bash`

- Our next line will be `repoName=$1`

Here we're declaring a **variable** called repoName, and assigning it to the value of the first parameter the script receives.

A **parameter** is a set of characters that is entered after the script/comand. Like with the `cd` command, we need to specify a directory parameter in order to change directory (ie: `cd testFolder`).

A way we can identify parameters within a script is by using dollar sign and the order in which that parameter is expected.

If I'm expecting more than one parameter I could write:

```
paramOne=$1
paramTwo=$2
paramThree=$3
...
```

- So we're expecting the repository name as parameter of our script. But what happens if the user forgets to enter it? We need to plan for that so next we're going to code a **conditional** that keeps asking the user to enter the repo name until that parameter is received.

We can do that like this:

```
while [ -z "$repoName" ]
do
   echo 'Provide a repository name'
   read -r -p $'Repository name:' repoName
done
```

What we're doing here is:

1. While the repoName variable is not assigned (`while [ -z "$repoName" ]`)
2. Write to the console this message (`echo 'Provide a repository name'`)
3. Then read whatever input the user provides and assign the input to the repoName variable (`read -r -p $'Repository name:' repoName`)

- Now that we have our repo name in place, we can create our local Git repo like this:

```
echo "# $repoName" >> README.md
git init
git add .
git commit -m "First commit"
```

This is creating a readme file and writting a single line with the repo name (`echo "# $repoName" >> README.md`) and then initializing the git repo and making a first commit.

- Then it's time to upload our repo to github. To do that we're going to take advantage of the [github API](https://docs.github.com/en/rest/reference/repos) in the following command:

`curl -u coccagerman https://api.github.com/user/repos -d '{"name": "'"$repoName"'", "private":false}'`

**curl** is a command to transfer data from or to a server, using one of the many supported protocols.

Next we're using the `-u` flag to declare the user we're creating the repo for (`-u coccagerman`).

Next comes the endpoint provided by the GitHub API (`https://api.github.com/user/repos`)

And last we're using the `-d` flag to pass parameters to this command. In this case we're indicating the repository name (for which we're using our `repoName` variable) and setting `private` option to `false`, since we want our repo to be puiblic.

Lots of other config options are available in the API, so [check the docs](https://docs.github.com/en/rest/reference/repos#create-a-repository-for-the-authenticated-user) for more info.

- After running this command, GitHub will prompt us to enter our **private token** for authentication.

If you don't have a private token yet, you can generate it in GitHub in **Settings > Developer settings > Personal access tokens**

![screenshot](https://www.freecodecamp.org/news/content/images/2022/04/screenshot.png)

![screenshot_1](https://www.freecodecamp.org/news/content/images/2022/04/screenshot_1.png)

![screenshot_2](https://www.freecodecamp.org/news/content/images/2022/04/screenshot_2.png)

- Cool, we're almost done now! What we need now is the **remote URL** of our newly created GitHub repo.

To get that we're going to use curl and the GitHub API again, like this:

```
GIT_URL=$(curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/coccagerman/"$repoName" | jq -r '.clone_url')
```

Here we're declaring a variable called `GIT_URL` and assigning it to whatever the following command returns.

The `-H` flag sets the header of our request.

Then we pass the GitHub API endpoint, which should contain our user name and repo name (`https://api.github.com/repos/coccagerman/"$repoName"`).

Then we're **piping** the return value of our request. Piping just means passing the return value of a process as the input value of another process. We can do it with the `|` symbol like `<process1> | <process2>`.

And finally we run the `jq` command, which is a tool for processing JSON inputs. Here we tell it to get the value of `.clone_url` which is where our remote git URL will be according to the data format provided by the GitHub API.

- And as last step, we rename our master branch to main, add the remote origin we just obtained, and push our code to GitHub! =D

```
git branch -M main
git remote add origin $GIT_URL
git push -u origin main
```

Our full script should look something like this:

```
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

- Now it's time to test our script! To **execute** it there're two things we can do.

One option is to enter the shell name and pass the file as parameter, like: `dash ../ger/code/projects/scripts/newGhRepo.sh`.

And the other is to make the file **executable** by running `chmod u+x ../ger/code/projects/scripts/newGhRepo.sh`.

Then you can just execute the file directly by running `../ger/code/projects/scripts/newGhRepo.sh`.

And that's it! We have our script up and running. Everytime we need a new repo we can just execute this script from whatever directory we're in.

But there's something a bit annoying about this. We need to remember the exact route of the script directory. Wouldn't it be cool to execute the script with a single command that it's always the same independently of what directory we're at?

In come **bash aliases** to solve our problem.

Aliases are a way bash provides for making names for exact commands we want to run.

To create a new alias, we need to edit the bash configuration files in our system. This files are normally located in the home directory. Aliases can be defined in different files (mainly `.bashrc` or `.bash_aliases`).

I have a `.bash_aliases` file on my system, so let's edit that.

- In our CLI we enter `cd` to go over home directory.

- Then we can enter `ls -a` to list all files (includen hidden ones) and check if we have either a `.bashrc` or `.bash_aliases` file in our system.

- We open the file with our text/code editor of choice.

- And we write our new alias like this:  
    `alias newghrepo="dash /home/German/Desktop/ger/code/projects/scripts/newGhRepo.sh"`

Here I'm declaring the alias name, the actual command I'm going to enter to run the script (`newghrepo`).

And between quotes, define what that alias is going to do (`"dash /home/German/Desktop/ger/code/projects/scripts/newGhRepo.sh"`)

See that I'm passing the [absolute path](https://www.computerhope.com/issues/ch001708.htm) of the script, so that this command works the same no matter what my current directory is.

If you don't know what the absolute path of your script is, go to the script directory on your terminal and enter `readlink -f newGhRepo.sh`. That should return the full path for you. ;)

- After we're done editing, we save our file, restart our terminal, and voilà! Now we can run our script by just entering `newghrepo`, no matter in what directory we currently are. Much quicker than opening the browser and clicking around to create our repo! =D

I hope this gives you a little taste of the kind of optimizations that are possible with scripting. It certainly requires a bit more work the first time you write, test, and set up the script. But after that, you'll never have to perform that task manually again. ;)

# Round up

The terminal can feel like an intimidating and intricate place when you're starting out. But it's certainly worth it to put time and effort into learning the ins and outs of it. The efficiency benefits are too good to pass up!

> If you're interested in learning more about the terminal and Bash, Zach Gollwitzer has [an awesome crash course series on youtube](https://www.youtube.com/playlist?list=PLYQSCk-qyTW0d88jNocdi_YIFMA5Fnpug).  
> He has also great tutorials on other topics such as Node and Javascript, so I recommend that you follow him. ;)

As always, I hope you enjoyed the article and learned something new. If you want, you can also follow me on [linkedin](https://www.linkedin.com/in/germancocca/) or [twitter](https://twitter.com/CoccaGerman).

Cheers and see you in the next one! =D

![8ef61e333efccb5900cd117a4d64e8d3](https://www.freecodecamp.org/news/content/images/2022/04/8ef61e333efccb5900cd117a4d64e8d3.gif)
