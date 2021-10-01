> -   原文地址：[The Linux Command Handbook Linux 命令手册](https://www.freecodecamp.org/news/the-linux-commands-handbook/)
> -   原文作者：Flavio Copes
> -   译者：Monstorix
> -   校对者：

![Linux 命令手册](https://www.freecodecamp.org/news/content/images/size/w2000/2020/10/cover-1.jpg)

这本《Linux 命令手册》将涵盖 60 个作为开发者时，你需要用到的核心 Bash 命令。每个命令都附有代码示例和用法提示。

这本手册遵循二八定律：你花两成的时间学习一个主题，便可获得其中八成的知识。

我觉得这种方式能给你一个全面的概述。

这本手册并不试图涵盖所有关于 Linux 及其命令的内容，而是专注于那些你在大部分时间里都会用到的小型核心命令，同时试着简化更复杂命令的用法。

以下介绍的命令，在 Linux、macOS、WSL 和其他类 UNIX 环境均可使用。

我希望这本手册的内容可以帮助你达成你想要的目标：**熟练掌握 Linux** 。

你可以收藏本页，这样就能在以后随时参考这本手册。

你也可以 [免费下载这本书的 PDF、ePUB、Mobi 版本][1].

尽情享受吧！

## 目录

-   [Linux 和 Shell 简介][2]
-   [Linux 中的 `man` 命令][3]
-   [Linux 中的 `ls` 命令][4]
-   [Linux 中的 `cd` 命令][5]
-   [Linux 中的 `pwd` 命令][6]
-   [Linux 中的 `mkdir` 命令][7]
-   [Linux 中的 `rmdir` 命令][8]
-   [Linux 中的 `mv` 命令][9]
-   [Linux 中的 `cp` 命令][10]
-   [Linux 中的 `open` 命令][11]
-   [Linux 中的 `touch` 命令][12]
-   [Linux 中的 `find` 命令][13]
-   [Linux 中的 `ln` 命令][14]
-   [Linux 中的 `gzip` 命令][15]
-   [Linux 中的 `gunzip` 命令][16]
-   [Linux 中的 `tar` 命令][17]
-   [Linux 中的 `alias` 命令][18]
-   [Linux 中的 `cat` 命令][19]
-   [Linux 中的 `less` 命令][20]
-   [Linux 中的 `tail` 命令][21]
-   [Linux 中的 `wc` 命令][22]
-   [Linux 中的 `grep` 命令][23]
-   [Linux 中的 `sort` 命令][24]
-   [Linux 中的 `uniq` 命令][25]
-   [Linux 中的 `diff` 命令][26]
-   [Linux 中的 `echo` 命令][27]
-   [Linux 中的 `chown` 命令][28]
-   [Linux 中的 `chmod` 命令][29]
-   [Linux 中的 `umask` 命令][30]
-   [Linux 中的 `du` 命令][31]
-   [Linux 中的 `df` 命令][32]
-   [Linux 中的 `basename` 命令][33]
-   [Linux 中的 `dirname` 命令][34]
-   [Linux 中的 `ps` 命令][35]
-   [Linux 中的 `top` 命令][36]
-   [Linux 中的 `kill` 命令][37]
-   [Linux 中的 `killall` 命令][38]
-   [Linux 中的 `jobs` 命令][39]
-   [Linux 中的 `bg` 命令][40]
-   [Linux 中的 `fg` 命令][41]
-   [Linux 中的 `type` 命令][42]
-   [Linux 中的 `which` 命令][43]
-   [Linux 中的 `nohup` 命令][44]
-   [Linux 中的 `xargs` 命令][45]
-   [Linux 中的 `vim` 编辑器命令][46]
-   [Linux 中的 `emacs` 编辑器命令][47]
-   [Linux 中的 `nano` 编辑器命令][48]
-   [Linux 中的 `whoami` 命令][49]
-   [Linux 中的 `who` 命令][50]
-   [Linux 中的 `su` 命令][51]
-   [Linux 中的 `sudo` 命令][52]
-   [Linux 中的 `passwd` 命令][53]
-   [Linux 中的 `ping` 命令][54]
-   [Linux 中的 `traceroute` 命令][55]
-   [Linux 中的 `clear` 命令][56]
-   [Linux 中的 `history` 命令][57]
-   [Linux 中的 `export` 命令][58]
-   [Linux 中的 `crontab` 命令][59]
-   [Linux 中的 `uname` 命令][60]
-   [Linux 中的 `env` 命令][61]
-   [Linux 中的 `printenv` 命令][62]
-   [结语][63]

## Linux 和 Shell 简介

### 什么是 Linux？

Linux 是一种操作系统， 就像 macOS 和 Windows 一样。

它也是最流行的开放源代码操作系统，给予用户很大的自由度。

它驱动了绝大多数的互联网服务器，是构建任何设施的“地基”，但还不仅如此。 Android 操作系统（中文也称“安卓”）实际上是基于（一种修改版的）Linux 构建的。

Linux 的“内核” （我们称之为 _kernel_ ）诞生于 1991 年的芬兰，从最初的简陋构造到今天，已经走了很长的一段路。后来它成为了 GNU 操作系统的内核，于是出现了 GNU/Linux 组合系统。

Linux 可以让你拥有用计算机做任何事情的自由。这是微软、苹果、谷歌这样的大公司永远不会向用户提供的。

他们实际走的是另一条路：创造生态壁垒，尤其是在移动端。

而 Linux 代表着无尽的自由。

它的开发人员通常来自社区志愿者，这其中一些人是独立参与开发工作的，还有一些人是由于受雇于使用它的公司而参与的，但从来没有任何一家商业公司可以擅自决定 Linux 所含的内容，或者是某个项目的优先级。

你可以将 Linux 作为日常使用的系统。我当前使用 macOS ，因为我很喜欢它的应用程序和界面设计（同时我也是一名 iOS 和 Mac 应用开发者）。但在此之前，我一直使用 Linux 作为我的主要计算机操作系统。

在 Linux 上面，没有人能够支配你可以运行哪些应用程序，或者使用特定的应用程序收集你的个人资料、位置和其他信息。

Linux 还有一个特别之处，那就是“世界上不只有一个 Linux”，这和 Windows 还有 macOS 是不一样的。对于 Linux，我们有**发行版**的概念。

发行版通常由某个公司或组织制作，他们会将 Linux 内核和一些额外的程序与工具整合在一起。

例如，你也许使用过 Debian、Red Hat、Ubuntu，这些可能是最流行的发行版了。

但实际上还有更多。你甚至还可以制作属于你自己的发行版。然而在大多数情况下，人们会选择一个流行的发行版，因为这些版本通常有大量的用户，以及完善的社区支持。这可以让你花更少的时间，做更多的事，既不需要重复造轮子，同时查找某个问题的解决方案也更为方便。

某些台式电脑或笔记本电脑在出厂时预装了 Linux。但你也可以在 Windows 或 Mac 电脑上手动安装它。

不过，如果你只是想了解 Linux 的运行方式，那么没有必要去打乱现有的电脑系统。

我自己并没有专门的“Linux 电脑”。

如果你在使用 Mac，你只需要了解一件事：抛去外壳，macOS 实际上是一种 UNIX 操作系统，而 GNU/Linux 是 UNIX 的自由替代品，因此 macOS 和 GNU/Linux 在很多理念和一些软件的使用上，是共通的。

> [UNIX][64] 是对 20 世纪 70 年代开始在一些大型公司和机构中使用的多种操作系统的统称。

在 macOS 的终端里，你同样可以使用我在这本手册中介绍的任何命令。

微软官方提供了 [适用于 Linux 的 Windows 子系统][65]，你可以（甚至是有必要！）将其安装在 Windows 上。这让在 PC 上运行 Linux 有了一种更简单的方式。

但大多数时候，人们会通过 VPS （虚拟专用服务器，如 DigitalOcean） 在云端运行 Linux 电脑。

### 什么是 Linux 的 Shell？

Shell 通常指的是命令行界面的解析器，简单来说，它给用户提供一个操作界面，来访问底层的操作系统内核进行工作。

它可以让你使用文本和命令执行操作，同时还提供诸如创建脚本之类的高级功能。

这很重要：Shell 为用户提供了一种比 GUI （图形用户界面）更为高效的方式来做事。命令行工具可以提供更多不同的参数设置，但用起来不会变得太复杂。

Shell 有很多种，这里主要介绍 Unix shell，通常在 Linux 和 macOS 电脑上都可以见到。

经过长年发展，很多人为这些系统开发了不同种类的 Shell。其中有一些是最主要的，比如 Bash、Csh、Zsh、Fish 等，当然还有更多。

所有的 Shell 都从 Bourne Shell 发展而来，我们把它叫做 `sh`。名字中的“Bourne”是取自它的创建人——史蒂夫 · 伯恩（Steve Bourne）。

Bash 的全称是 _Bourne-again shell_。 `sh` 是专有软件，并不开放源码，Bash 则在 1989 年由 GNU 计划和自由软件基金会创建，意在为其提供一个免费的替代品。由于 Bourne shell 需要付费才能在项目中使用，因而 Bash 变得非常流行。

如果你在使用 Mac，可以试试打开终端，默认的 Shell 一般是 ZSH（在 Catalina 版本之前，默认是 Bash）。

你可以在你的系统上配置和运行各种 Shell，譬如我使用的是 Fish shell。

每一种 Shell 都有其独特的功能和高级的用法，但在大多数的操作上是相通的：它们可以让你执行程序，你也可以对它们进行编程。

在本手册的余下部分，我们将详细探究那些人们最常用到的命令。

## Linux 中的 `man` 命令

我们要介绍的第一条命令，将帮助你了解剩下的其他命令。

每当我不记得某条命令的用法时，我会输入 `man <命令名>` 获取它的说明：

![](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-07-04-at-18.42.40.png)

这是一个 man （取自 \_\_manual\_\_ 的缩写）页面。Man 页面是你学习开发时的必备工具。它通常包含非常多的信息（有时几乎可以说太多了！）。
上方的屏幕截图，实际上只是 `ls` 命令的 14 页用法指南中的第 1 页。

大多数时候，如果我需要快速了解某个命令的用法，我会访问一个叫做** tldr pages **的网站（[https://tldr.sh][66]）。 它也可以作为一条命令安装在你的电脑上。比如，你可以运行 `tldr <命令名>` ，它就会快速提供这条命令的概述，以及一些常见的使用场景和用法指引：

![](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-07.35.41.png)

需要注意的是，这条命令并不是 `man` 的替代品，而只是一个帮助你摆脱迷失在 `man` 页面上大量信息里的便利工具。之后你还是可以在 `man` 页面查阅某个命令可用的不同选项和详细参数。

## Linux 中的 `ls` 命令

在文件夹内，你可以使用 `ls` 命令列出其中包含的全部文件：

```bash
ls
```

如果你在后面加上别的文件夹名字或者路径，它就会列出那个文件夹的内容：

```bash
ls /bin
```

![Screenshot-2019-02-09-at-18.50.14](https://www.freecodecamp.org/news/content/images/2020/10/Screenshot-2019-02-09-at-18.50.14.png)

`ls` 支持很多参数。我喜欢的其中一个是 `-al` 。试试看：

```bash
ls -al /bin
```

![Screenshot-2019-02-09-at-18.49.52](https://www.freecodecamp.org/news/content/images/2020/10/Screenshot-2019-02-09-at-18.49.52.png)

与常规的 `ls` 命令相比，这会返回更多的信息。

你可以看到（从左至右）：

-   文件权限（如果你的系统支持 ACL，这里也会有一个 ACL 标识）
-   链接到该文件的数量
-   该文件的所有者
-   该文件的用户组
-   文件大小（单位为字节）
-   文件最后的修改日期
-   文件名

这串数据是由 `l` 参数产生的，而 `a` 参数则用来包含被隐藏的文件。

隐藏文件的文件名通常以英文句号（ `.` ）开头。

## Linux 中的 `cd` 命令

假如有一个文件夹，那么你可以用 `cd` 命令来打开它。 `cd` 是 **c**hange **d**irectory（改变目录）的缩写。同样，你可以在后面加上文件夹的名字，或完整的路径，来访问某个特定的文件夹。

示例：

```bash
mkdir fruits
cd fruits
```

现在你进入了 `fruits` 文件夹。

你可以使用 `..` 这个特殊的路径来代指上级目录。

```bash
cd .. #回到上级目录
```

在这里，井号（#）表示注释的开始，在它之后的整行内容都是注释。

`..` 也可以用来组成路径：

```bash
mkdir fruits
mkdir cars
cd fruits
cd ../cars
```

另一个特殊路径是 `.`，它指代的是**当前**所在的文件夹。

你也可以使用绝对路径，也就是从根文件夹 `/` 开始的位置：

```bash
cd /etc
```

## Linux 中的 `pwd` 命令

如果你在文件系统里迷路了，输入 `pwd` ，它会显示你现在的位置：

```bash
pwd
```

这条命令输出当前所在文件夹的路径。

## Linux 中的 `mkdir` 命令

使用 `mkdir` 命令创建新的文件夹：

```bash
mkdir fruits
```

这条命令还可以一次创建多个文件夹：

```bash
mkdir dogs cars
```

你也可以添加 `-p` 参数，创建多个嵌套的文件夹：

```bash
mkdir -p fruits/apples
```

UNIX 命令的参数通常都是这样的形式，只需要在命令的名字之后加上它们，就可以改变命令的工作方式。你可以同时使用多个参数。

你可以通过 Man 页面查找某个命令支持的具体参数，只需要输入 `man <命令名>`。现在，你可以试试输入 `man mkdir`，来查看这一命令的参数（按下字母`q`以退出 Man 页面）。 Man 页面是 UNIX 上非常棒的内置帮助系统。

## Linux 中的 `rmdir` 命令

如上所述，`mkdir` 命令可以创建文件夹，与之相反，`rmdir` 命令用来删除文件夹：

```bash
mkdir fruits
rmdir fruits
```

这个命令也可以一次删除多个文件夹：

```bash
mkdir fruits cars
rmdir fruits cars
```

用这个命令删除的文件夹，必须是空的。

如果要删除含有内容的文件夹，这里有一个更通用的命令：`rm` ，配合 `-rf` 参数即可同时删除文件夹和其中的文件：

```bash
rm -rf fruits cars
```

请小心操作，这个命令在执行时不会向你确认，而是立刻删除你指定的文件。

用命令行删除文件，是没有**回收站**存在的，恢复丢失的文件会很难。

## Linux 中的 `mv` 命令

当你有一个文件时，你可以用 `mv` 命令移动它。只需要指定文件的当前路径和新路径：

```bash
touch test
mv pear new_pear
```

文件 `pear` 现在被移动到 `new_pear` 了。这也是为文件和目录进行**重命名**的方法。

如果你指定的最后路径是一个文件夹，那么前面路径中的文件将被移动到那个文件夹。这时，你可以列出一组要移动的文件，这些文件将被移动到最后一个参数中指定的路径：

```bash
touch pear
touch apple
mkdir fruits
mv pear apple fruits #文件 pear 和 apple 被移动到 fruits 文件夹
```

## Linux 中的 `cp` 命令

`cp` 命令可以用来复制文件：

```bash
touch test
cp apple another_apple
```

要复制整个文件夹，可以添加 `-r` 参数来递归复制那个文件夹的内容：

```bash
mkdir fruits
cp -r fruits cars
```

## Linux 中的 `open` 命令

`open` 命令可以让你打开任意一个文件，格式如下：

```bash
open <命令名>
```

你也可以用它打开目录。在 macOS 上，这个命令会打开访达（Finder）并显示你当前指定的目录：

```bash
open <目录名>
```

我一直使用下面的命令打开当前目录：

```bash
open .
```

> 特殊符号 `.` 代指当前目录， 而 `..` 代指上级目录。

此外，它还可以用来打开一个应用程序：

```bash
open <应用程序名>
```

## Linux 中的 `touch` 命令

`touch` 命令可以用来创建空白的文件：

```bash
touch apple
```

如果指定的文件已经存在，那么它将以写入模式打开文件，文件的时间戳（修改日期）也同时更新。

## Linux 中的 `find` 命令

`find` 命令可以用来按特定的模式搜索文件和文件夹。它以递归的方式进行搜索。

让我们通过几个例子来学习它的用法。

你可以用下面的命令，查找当前目录树下所有扩展名为 `.js` 的文件，并输出每个匹配文件的相对路径：

```bash
find . -name '*.js'
```

在星号（`*`）等特殊字符周围打上引号是很重要的，这可以避免 Shell 弄错它们的意义。

如果要查找在当前目录树下，所有与"src"这一名称匹配的目录，请输入：

```bash
find . -type d -name src
```

同理，如果只搜索文件，可以使用 `-type f` 参数；如果只搜索符号链接，可以使用 `-type l` 参数。

`-name` 参数对于大小写敏感。如果不需要区分大小写，你应该使用 `-iname` 参数。

你可以在不同的根目录树下搜索文件：

```bash
find folder1 folder2 -name filename.txt
```

要在当前目录树下搜索名称为 "node_modules" 或是 'public' 的目录，请输入：

```bash
find . -type d -name node_modules -or -name public
```

你可以用 `-not -path` 参数排除某个路径：

```bash
find . -type d -name '*.md' -not -path 'node_modules/*'
```

你还可以搜索当前目录树中内容超过 100 个字符（字节）的文件：

```bash
find . -type f -size +100c
```

搜索大于 100KB，但小于 1MB 的文件：

```bash
find . -type f -size +100k -size -1M
```

搜索至少 3 天前编辑的文件：

```bash
find . -type f -mtime +3
```

搜索最近 24 小时编辑的文件：

```bash
find . -type f -mtime -1
```

你可以使用 `-delete` 参数同步删除搜索到的文件。比如，下面的命令会删除最近 24 小时编辑的文件：

```bash
find . -type f -mtime -1 -delete
```

你还可以在每个搜索结果上同时运行某个命令。在这里，我们运行 `cat` 来输出搜索到的文件的内容：

```bash
find . -type f -exec cat {} \;
```

请注意结尾的 `\;` 。 命令执行时，搜索结果中的文件名会被自动填入花括号 `{}` 。

## Linux 中的 `ln` 命令

`ln` 命令是 Linux 诸多文件系统命令的一部分。

它的用途是创建链接。“链接”是什么？链接就像是指针，指向另一个文件，或者说是指向另一个文件的文件。你可能熟悉 Windows 上的快捷方式，二者是类似的。

我们有两种类型的链接：**硬链接**和**软链接**。

#### 硬链接

硬链接现在很少使用。它有一些弱点：你无法链接到目录，也无法链接到外部文件系统（磁盘驱动器）。

要创建一个硬链接，可以使用下面的语法：

```bash
ln <源文件路径> <链接路径>
```

例如，你有一个叫做 recipes.txt 的文件，你可以用下面的写法创建一个硬链接：

```bash
ln recipes.txt newrecipes.txt
```

这个新创建的硬链接和普通的文件没有什么区别：

![Screen-Shot-2020-09-02-at-11.26.21](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-02-at-11.26.21.png)

现在，如果你编辑这对文件中的任何一个，另一个文件的内容也会随之更新。

即使你删除了源文件，链接文件仍然会包含源文件的内容。那是因为直到创建硬链接时，源文件还没有被删除。

![Screen-Shot-2020-09-02-at-11.26.07](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-02-at-11.26.07.png)

#### 软链接

软链接则有所不同，它更为强大一些，你可以用它链接到其他的文件系统和目录。但请注意，当你删除源文件时，这个链接会断掉。

你可以使用 `ln` 命令的 `-s` 参数创建一个软链接：

```bash
ln -s <源文件路径> <链接路径>
```

例如，你有一个叫做 recipes.txt 的文件。你可以用下面的写法为它创建一个软链接：

```bash
ln -s recipes.txt newrecipes.txt
```

这种情况下，当你用 `ls -al` 列出文件时，你可以看见一个特殊的 `l` 标记。在文件名的末尾有一个 `@` 符号，如果你启用了终端的显色，文件名还会有不同的颜色：

![Screen-Shot-2020-09-02-at-11.27.18](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-02-at-11.27.18.png)

现在，如果你删除源文件，链接就会断掉，如果你在终端里尝试访问它，Shell 会提示 "No such file or directory" （没有这个文件或目录）：

![Screen-Shot-2020-09-02-at-11.27.03](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-02-at-11.27.03.png)

## Linux 中的 `gzip` 命令

你可以使用 `gzip` 命令，从而使用一种称为 [LZ77][67] 的 gzip 压缩协议，来压缩文件。

以下是最简单的用法：

```bash
gzip 文件名
```

这会压缩指定的文件，并为它加上 `.gz` 扩展名。源文件会被删除。

如果不想删除源文件，你可以加上 `-c` 参数，然后使用输出重定向，将输出文件写到 `filename.gz` 中。

```bash
gzip -c filename > filename.gz
```

> `-c` 参数用来指定输出文件进入标准输出流，同时保持原始文件的完整性。

或者使用 `-k` 参数：

```bash
gzip -k 文件名
```

文件有不同的压缩率。压缩率越高，压缩（或者解压）的时间就越长。压缩率等级一般从 1（速度最快，压缩效果最差）开始，直到 9 （速度最慢，压缩效果更好）结束。默认为 6 。

你可以用 `-<数字>` 参数指定使用的压缩率：

```bash
gzip -1 文件名
```

你可以压缩多个文件，只需要依次列出它们：

```bash
gzip file1 file2
```

你可以用递归的方式压缩某个目录包含的全部文件，只需要使用 `-r` 参数：

```bash
gzip -r 文件夹路径
```

`-v` 参数会输出文件压缩时的百分比信息。以下是它和 `-k` （Keep 的简写） 参数并用时的情形：

![Screen-Shot-2020-09-09-at-15.55.42](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-09-at-15.55.42.png)

`gzip` 命令也可以用来解压文件，只需使用 `-d` 参数：

```bash
gzip -d filename.gz
```

## Linux 中的 `gunzip` 命令

`gunzip` 命令与 `gzip` 命令基本等同，但前者总是默认启用后者的 `-d` 参数。

可以用下面的方式调用这个命令：

```bash
gunzip filename.gz
```

这会执行解压，将压缩文件的 `.gz` 扩展名去除，并将结果放进 `filename` 文件中。如果相应文件已经存在，将会被提取结果覆盖。

你可以加上 `-c` 参数，使用输出重定向，将压缩文件解压到不同的文件名：

```bash
gunzip -c filename.gz > 另一个文件名
```

## Linux 中的 `tar` 命令

`tar` 命令可以用来创建档案包，将多个文件打包为一个文件。

它的名称来源于旧时，意思是 _tape archive（磁带档案）_ （很久以前档案都是用磁带存储的）。

下面的命令会将 `file1` 和 `file2` 打包成一个名为 `archive.tar` 的档案包文件：

```bash
tar -cf archive.tar file1 file2
```

> `c` 参数是 _create（创建）_ 的简写。`f` 参数则用来将合成的档案包写入一个文件。

要在当前文件夹下的某个档案包中提取文件，可以使用如下命令：

```bash
tar -xf archive.tar
```

> 参数 `x` 是 _extract（提取）_ 的简写。

如果要提取文件到指定目录，应该使用下面的命令：

```bash
tar -xf archive.tar -C 目录路径
```

你也可以不提取文件，只罗列某个档案包里含有的文件列表：

![Screen-Shot-2020-09-09-at-16.56.33](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-09-at-16.56.33.png)  
`tar` 常用来创建**压缩档案包**。

这可以用 `z` 参数来完成：

```bash
tar -czf archive.tar.gz file1 file2
```

这就像是先创建了一个 tar 档案包，再运行 `gzip` 来压缩它。

如果你要提取一个被压缩的档案包，可以先使用 `gunzip` 或 `gzip -d` 来解压，再提取里面的文件。除此之外 `tar -xf` 也可以直接识别压缩的档案包，然后为你完成解压提取操作：

```bash
tar -xf archive.tar.gz
```

## Linux 中的 `alias` 命令

通常情况下，人们总会使用一组喜欢的参数去运行一个程序。

此处用 `ls` 命令举例。默认情况下，它只输出少量的信息：

![Screen-Shot-2020-09-03-at-15.21.00](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-15.21.00.png)

但如果你带上了 `-al` 参数，它会输出一些更有用的信息，像是文件的修改日期、大小、所有者、权限之类。它也会同时列出隐藏的文件（文件名以英文句号`.` 开头的文件）：

![Screen-Shot-2020-09-03-at-15.21.08](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-15.21.08.png)

你可以创建一个新的命令，比如我喜欢叫它 `ll`，它是 `ls -al` 命令的一个别名。

方法如下所示：

```bash
alias ll='ls -al'
```

只要这么做了，你就可以像使用普通的 UNIX 命令一样，调用 `ll` ：

![Screen-Shot-2020-09-03-at-15.22.51](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-15.22.51.png)

当调用 `alias` ，但不加任何参数时，它会列出已经定义的所有别名：

![Screen-Shot-2020-09-03-at-15.30.19](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-15.30.19.png)  
用以上方法定义的别名，在终端会话关闭后就会失效。

如果要让别名永久有效，你必须将其添加到 Shell 的配置文件中。如果你正在使用 Bash shell，配置文件可能是 `~/.bashrc` 、`~/.profile` 或 `~/.bash_profile` ，依据实际用法而定。

如果你定义的命令中存在变量，那么请注意引号的用法：如果使用双引号，变量会在进行定义时解析；如果使用单引号，变量则会在命令被调用时解析。两者是不同的：

```bash
alias lsthis="ls $PWD"
alias lscurrent='ls $PWD'
```

$PWD 代表 Shell 当前所在的文件夹。如果你导航到新的文件夹，`lscurrent` 命令会列出新文件夹中的文件，而 `lsthis` 仍然会列出你首次定义变量时所在文件夹中的文件。

## Linux 中的 `cat` 命令

 `cat` 命令与后面会介绍到的 [`tail`][68] 命令有些相似，但 `cat` 命令可以向任一文件添加内容，这就使得它非常强大。 

`cat` 最简单的用法是将任一文件的内容打印到标准输出中：

```bash
cat 文件名
```

你可以打印输出多个文件的内容：

```bash
cat file1 file2
```

配合输出重定向操作符 `>` ，你可以把多个文件的内容拼接成一个新的文件：

```bash
cat file1 file2 > file3
```

使用操作符 `>>` ，你可以将多个文件的内容附加到任一文件中，如果目标文件不存在，则会新建一个：

```bash
cat file1 file2 >> file3
```

当查看源代码时，读取行数是非常有用的。使用 `cat` 的参数 `-n` 即可完成：

```bash
cat -n file1
```

使用 `-b` 参数可以（同时也只能）向文件的非空行添加一个数字。而使用 `-s` 参数则可以移除文件中所有的多行空行。

`cat` 经常和管道符 `|` 一并使用，可以将任一文件的内容输入给另一个命令使用： `cat 文件名1 | 另一个命令`。

## Linux 中的 `less` 命令

`less` 是我经常使用的命令之一。它透过一个漂亮的交互用户界面向你展示任一文件中存储的内容：

用法： `less <文件名>`.

![Screenshot-2019-02-10-at-09.11.05](https://www.freecodecamp.org/news/content/images/2020/10/Screenshot-2019-02-10-at-09.11.05.png)

当你处于 `less` 会话时，按下 `q` 键即可离开。

你可以使用 `上` 键和 `下` 键浏览文件的内容，或者使用 `空格` 键和 `b` 键逐页浏览。按下 `G` 键（大写）可以跳转到文件的末尾，而按下 `g` 键（小写）则可以回到文件的开头。

按下左斜杠键 `/` 并输入文字，就可以在文件中进行搜索。这会 _向前_ 搜索。如果要向后搜索，你需要使用问号 `?` 并输入文字。

这个命令只是将文件的内容可视化。你可以直接按 `v` 打开一个编辑器。它将使用系统编辑器，在大多数情况下是 `vim` 。

按 `F` 键即可进入 _跟踪模式_，也称 _观察模式_。当文件被别人修改时，比如从另一个程序中修改，你就可以 _实时_ 看到修改的内容。

默认状态下不会出现这种情况，你只能看到你打开文件时的文件版本。你需要按 `ctrl-C` 来退出这个模式。在这种情况下，行为类似于运行 `tail -f <文件名>` 命令。

你可以打开多个文件，并使用 `:n` （next，转到下一个文件）和 `:p` （previous，转到上一个文件）浏览它们。

## Linux 中的 `tail` 命令

在我看来，tail 命令的最佳用法是带上 `-f` 参数一起调用。它会打开并显示文件最末尾的内容，并实时监控文件的改动。

有新内容进入文件时，它就将其输出到终端窗口中。这对于查看日志文件是非常棒的。例如：

```bash
tail -f /var/log/system.log
```

要退出，就按下 `ctrl-C`.

使用以下命令，你可以输出任一文件的最后十行内容：

```bash
tail -n 10 <文件名>
```

你还可以在行号前添加加号 `+` 指定从文件的某一行开始输出之后的所有内容：

```bash
tail -n +10 <文件名>
```

`tail` 还可以做更多的事情，像往常一样，我建议你去查询 `man tail` 了解更多。

## Linux 中的 `wc` 命令

`wc` 命令会为我们显示关于指定文件（或透过管道符接收的参数）的有用信息。

```bash
echo test >> test.txt
wc test.txt
1       1       5 test.txt
```

以下是透过管道符的例子，我们可以利用它来给 `ls -al` 命令的运行输出计数：

```bash
ls -al | wc
6      47     284
```

第一列返回的是行数，第二列是字数，第三列则是比特数。

我们可以让它只计算行数：

```bash
wc -l test.txt
```

或者只计算字数：

```bash
wc -w test.txt
```

或者只计算比特数：

```bash
wc -c test.txt
```

在 ASCII 字符集中，比特数等于字符数。但对于非 ASCII 字符集，由于一些字符可能占用多个比特，字符的数目可能会不同（这在 Unicode 里有发生过）。

这种情况下使用 `-m` 参数可以得到正确的数目：

```bash
wc -m test.txt
```

## Linux 中的 `grep` 命令

`grep` 命令是一个非常有用的工具。假若掌握了它，对日常的编码工作会有很大的帮助。
> 如果你比较好奇， `grep` 的全写是 _global regular expression print_ （全局正则表达式打印）。

你可以使用 `grep` 在文件中进行搜索，或者与管道符配合使用，将输出结果传递到其他命令。

例如，可以用以下命令在 `index.md` 文件里搜寻 `document.getElementById` 这一行出现的次数：

```bash
grep -n document.getElementById index.md
```

![Screen-Shot-2020-09-04-at-09.42.10](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-04-at-09.42.10.png)

使用 `-n` 参数可以显示行号：

```bash
grep -n document.getElementById index.md
```

![Screen-Shot-2020-09-04-at-09.47.04](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-04-at-09.47.04.png)

一个非常有用的方法是告诉 grep 在相应行的前后各输出 2 行，以提供更多的上下文。这可以用参数 `-C` 来完成，它可以受取其后的若干行数：

```bash
grep -nC 2 document.getElementById index.md
```

![Screen-Shot-2020-09-04-at-09.44.35](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-04-at-09.44.35.png)

搜索默认是区分大小写的。使用参数 `-i` 可以使其不再区分。

如上所述，你可以使用 grep 来过滤其他命令的输出。我们可以使用以下方法重现前述的功能：

```bash
less index.md | grep -n document.getElementById

```

![Screen-Shot-2020-09-04-at-09.43.15](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-04-at-09.43.15.png)

搜索字符串中可以使用正则表达式，这让 `grep` 变得非常强大。

另一个你可能发现很有用的方法是——使用参数 `-v` 反转结果，排除与特定字符串匹配的行：

![Screen-Shot-2020-09-04-at-09.42.04](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-04-at-09.42.04.png)

## Linux 中的 `sort` 命令

假定你有一份文本文件，里面包含一些狗狗的名字：

![Screen-Shot-2020-09-07-at-07.56.28](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-07.56.28.png)

这串名字并没有进行排序。

而 `sort` 命令会帮你按照名称顺序排列它们：

![Screen-Shot-2020-09-07-at-07.57.08](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-07.57.08.png)

使用 `r` 参数倒转排序结果：

![Screen-Shot-2020-09-07-at-07.57.28](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-07.57.28.png)

默认情况下，排序区分大小写，并且遵循英文字母顺序。使用 `--ignore-case` 参数进行不区分大小写的排序，使用 `-n` 参数可按数值大小顺序进行排序。

如果文件包含重复的行：

![Screen-Shot-2020-09-07-at-07.59.03](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-07.59.03.png)

你可以使用 `-u` 参数移除它们：

![Screen-Shot-2020-09-07-at-07.59.16](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-07.59.16.png)

`sort` 命令不像多数 UNIX 命令那样，只是用于操作文件，它还可以与管道符配合使用。因此你可以将它用在其他命令的输出上。例如，你可以用它排序 `ls` 命令传回的文件列表：

```bash
ls | sort
```

`sort` 的功能非常强大，它还支持更多的参数，你可以输入 `man sort` 来探索：

![Screen-Shot-2020-09-07-at-08.01.27](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-08.01.27.png)

## Linux 中的 `uniq` 命令

`uniq` 命令可以帮助你排序文本文件中的行。

这些行可以通过文件获取，或用管道符从另一个命令的输出中得到：

```bash
uniq dogs.txt
ls | uniq
```

此处需要考虑一个关键点： `uniq` 只会检测相邻的重复行。

这意味着你可能会将它与 `sort` 配合使用：

```bash
sort dogs.txt | uniq
```

`sort` 命令拥有自己的参数—— `-u` (_unique_) 来移除重复的行。但 `uniq` 更为强大。

默认情况下，它会删除重复的行：

![Screen-Shot-2020-09-07-at-08.39.35](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-08.39.35.png)

你可以告诉它只是显示重复的行，例如，使用 `-d` 参数：

```bash
sort dogs.txt | uniq -d
```

![Screen-Shot-2020-09-07-at-08.36.50](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-08.36.50.png)

还可以使用 `-u` 参数，那样就只会显示不重复的行：

![Screen-Shot-2020-09-07-at-08.38.50](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-08.38.50.png)

使用 `-c` 参数计算每一行的出现次数：

![Screen-Shot-2020-09-07-at-08.37.15](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-08.37.15.png)

使用以下的特殊命令组合：

```bash
sort dogs.txt | uniq -c | sort -nr
```

即可将文件内的行按最常见的频率排序：

![Screen-Shot-2020-09-07-at-08.37.49](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-08.37.49.png)

## Linux 中的 `diff` 命令

`diff` 是一个非常方便的命令。假定有两个文件，它们包含几乎相同的信息，你没有办法找出区别。

`diff` 会处理文件，然后告诉你有差异的地方。

假定有两个文件： `dogs.txt` 和 `moredogs.txt`。它们的区别是： `moredogs.txt` 比前者多了一条狗狗的名字：

![Screen-Shot-2020-09-07-at-08.55.18](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-08.55.18.png)

`diff dogs.txt moredogs.txt` 会告诉你后者多了一行，在第 3 行有 `Vanille` 这一行：

![Screen-Shot-2020-09-07-at-08.56.05](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-08.56.05.png)

如果你改变两个文件的顺序，它会告诉你后者的第三行丢失了，也就是 `Vanille` 那一行： 

![Screen-Shot-2020-09-07-at-08.56.10](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-08.56.10.png)

使用 `-y` 参数会逐行对比两个文件：

![Screen-Shot-2020-09-07-at-08.57.56](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-08.57.56.png)

你可能更熟悉 `-u` 参数，因为在 Git 版本管理系统中，它一样是用来显示不同版本文件差异的：

![Screen-Shot-2020-09-07-at-08.58.23](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-08.58.23.png)

对于目录，比较的方式是一样的。你必须使用 `-r` 选项来进行递归比较（进入子目录）：

![Screen-Shot-2020-09-07-at-09.01.07](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-09.01.07.png)

如果你只对哪个文件存在差异感兴趣，而非关注文件的内容，可以使用 `r` 和 `q` 参数：

![Screen-Shot-2020-09-07-at-09.01.30](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-09.01.30.png)

它还支持更多参数，你可以用 man 页面来探索，只需键入 `man diff`：

![Screen-Shot-2020-09-07-at-09.02.32](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-09.02.32.png)

## Linux 中的 `echo` 命令

`echo` 命令会做一件简单的事情：它将传递给自身的参数打印输出。

以下示例：

```bash
echo "hello"
```

会将 `hello` 输出到终端。

我们可以将输出追加到文件中：

```bash
echo "hello" >> output.txt
```

我们可以对环境变量进行插值：

```bash
echo "The path variable is $PATH"
```

![Screen-Shot-2020-09-03-at-15.44.33](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-15.44.33.png)

注意，特殊字符需要用反斜杠进行转义。以 `$` 为例：

![Screen-Shot-2020-09-03-at-15.51.18](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-15.51.18.png)

这只是个开始。当与 Shell 功能交互时，我们可以用它来做一些很棒的事情。

我们可以输出当前文件夹中的文件：

```
echo *
```

我们还可以输出当前文件夹中所有以字母 `o` 开头的文件：

```
echo o*
```

任何有效的 Bash（或者是你使用的其他 Shell）命令和功能可以在此使用。 and feature can be used here.

你可以输出你的主文件夹（home）的路径：

```
echo ~
```

![Screen-Shot-2020-09-03-at-15.46.36](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-15.46.36.png)

你还可以执行命令，并且将执行结果打印到标准输出（或者是文件，正如你看到的）：

```
echo $(ls -al)
```

![Screen-Shot-2020-09-03-at-15.48.55](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-15.48.55.png)

注意，输出在默认情况下不保留空白。如需留白，必须用双引号来包裹命令：

![Screen-Shot-2020-09-03-at-15.49.53](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-15.49.53.png)

你可以用它生成字符串列表，例如指定一个范围：

```
echo {1..5}
```

![Screen-Shot-2020-09-03-at-15.47.19](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-15.47.19.png)

## Linux 中的 `chown` 命令

在 Linux 或 macOS 操作系统（或是任一 UNIX 系统）中，每个文件或目录都有**所有者**。

所有者可以对文件做任何事情。它可以决定文件的命运。

使用 `chown` 命令，所有者（以及 `root` 用户）也可以将文件所有权转移给另一个用户：

```
chown <所有者> <文件>
```

像这样：

```
chown flavio test.txt
```

例如，假设有一个为 `root` 所拥有的文件，作为其他用户，你无法对它进行写入：

![Screen-Shot-2020-09-03-at-18.40.49](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-18.40.49.png)

你可以使用 `chown` 将文件所有权转移到你：

![Screen-Shot-2020-09-03-at-18.40.58](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-18.40.58.png)  
一种需求十分常见：改变目录的所有权，同时遍历修改其中包含的文件、子目录以及子目录中的文件的所有权。

你可以使用 `-R` 参数来完成：

```
chown -R <所有者> <文件>
```

文件和目录不仅属于所有者，同时还属于**用户组**。使用以下命令，你可以在变更所有者的同时，更改其所属用户组：

```
chown <所有者>:<用户组> <文件>
```

举例：

```
chown flavio:users test.txt

```

你还可以使用 `chgrp` 命令，只更改文件的所属用户组：

```
chgrp <用户组> <文件名>
```

## Linux 中的 `chmod` 命令

在 Linux 或 macOS 操作系统（或是任一 UNIX 系统）中，每个文件都有三种权限：读取、写入和执行。

进入一个文件夹，并运行 `ls -al` 命令。

![Screen-Shot-2020-09-03-at-18.49.22](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-18.49.22.png)  
你在文件列表每一行见到的，像是 `drwxr-xr-x` 这样的奇怪字符串，定义了文件或文件夹的权限。

让我们来剖析一下。

第一个字母表示文件的类型：

-   `-` 表示这是一个常规的文件
-   `d` 表示这是一个目录
-   `l` 表示这是一个链接

之后你就有了三组值：

-   第一组代表文件**所有者**拥有的权限
-   第二组代表文件所关联的**用户组**成员拥有的权限
-   第三组代表**其他人**拥有的权限

这些组由三个值组成。`rwx` 代表特定 _角色_ 拥有读取、写入和执行访问权限。任何被移除的权限会被替换为 `-` ，因此你可以将不同的值，及其代表的相关权限进行组合：例如 `rw-`、r--`、`r-x` 等等。

你可以使用 `chmod` 命令来改变一个文件的权限。

`chmod` 有两种用法。其一是使用符号参数，其二是使用数字参数。首先来试试更为直观的符号参数。

终端输入 `chmod` ，空格，之后加上一个字母：

-   `a` 表示 _all_，即全体
-   `u` 表示 _user_，即用户
-   `g` 表示 _group_，即用户组
-   `o` 表示 _others_，即其他人

然后输入 `+` 或 `-` 并加上一个或多个权限符号（`r`、`w`、`x`），来添加或删除任意权限。

键入以上所有命令和参数之后，都要加上文件或文件夹名称。

以下是一些例子：

```
chmod a+r filename #每个人都可以读取
chmod a+rw filename #每个人都可以读取和写入
chmod o-rwx filename #其他人（非文件所有者，也不在文件所属用户组中的用户）无法读取、写入或执行文件

```

只需要在 `+`/`-` 前添加多个字母，即可将相同的权限批量应用到不同的身份：

```
chmod og-r filename #其他人，和用户组无法读取文件。

```

如果你正在编辑一个文件夹，你可以使用 `-r`（递归）参数将权限应用到该文件夹中的每个文件。

使用数字参数速度更快，但我认为当你不是每天都使用的话，是很难记住它们的。数字在此代表任一角色的权限。这个数字值最大可以是7，它是这样计算的：

-   拥有执行权限，记为 `1` 
-   拥有写入权限，记为 `2` 
-   拥有读取权限，记为 `4` 

这又给我们带来四种组合：

-   `0` 代表无权限
-   `1` 代表可以执行
-   `2` 代表可以写入
-   `3` 代表可以写入和执行
-   `4` 代表可以读取
-   `5` 代表可以读取和执行
-   `6` 代表可以读取和写入
-   `7` 代表可以读取、执行和写入

我们使用三组数字，来同时设置所有 3 个用户身份的全部权限：

```
chmod 777 filename
chmod 755 filename
chmod 644 filename

```

## Linux 中的 `umask` 命令

创建一个文件时，不需要事先决定权限。权限有默认值。

这些默认值可以使用 `umask` 命令来控制和修改。

不带参数输入 `umask` ，它会显示当前的 umask 值，本例中为 `0022`：

![Screen-Shot-2020-09-04-at-09.04.19](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-04-at-09.04.19.png)

`0022` 是什么意思？ 这是一个代表权限的八进制数值。

另一个常见的数值是 `0002`.

使用 `umask -S` 查看更具可读性的注释：

![Screen-Shot-2020-09-04-at-09.08.18](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-04-at-09.08.18.png)  
在这里，用户（`u`），也就是文件的所有者，拥有对文件的读取、写入和执行的权限。

和所有者位于同一用户组的用户（`g`）拥有对文件的读取和执行权限，除此之外的其他用户（`o`）也一样。

在数字符号中，我们通常会改变最后3位数字。

以下列表给出了这些数字的含义：

-   `0` 代表读取、写入与执行
-   `1` 代表读取与写入
-   `2` 代表读取与执行
-   `3` 代表只读
-   `4` 代表写入与执行
-   `5` 代表仅写入
-   `6` 代表仅执行
-   `7` 代表没有权限

注意，这里的数字含义与前述 `chmod` 命令中用到的并不同。

可以用数值格式，为权限掩码设置一个新的值：

```
umask 002

```

也可以更改特定角色的权限：

```
umask g+r

```

## Linux 中的 `du` 命令

`du` 命令会计算整个目录的大小：

```
du
```

![Screen-Shot-2020-09-04-at-08.11.30](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-04-at-08.11.30.png)

这里的 `32` 是一个单位为字节（Byte）的值。

运行 `du *` 会单独计算每个文件的大小：

![Screen-Shot-2020-09-04-at-08.12.35](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-04-at-08.12.35.png)

你也可以执行 `du -m` 或 `du -g`，以兆字节（MB）或千兆字节（GB）为单位显示文件大小。

使用 `-h` 选项，会显示更为可读的，适应大小的数值：

![Screen-Shot-2020-09-04-at-08.14.40](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-04-at-08.14.40.png)

添加 `-a` 选项同样会输出文件夹中每一个文件的大小：

![Screen-Shot-2020-09-04-at-08.20.12](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-04-at-08.20.12.png)

一个方便的做法是按大小对目录进行排序：

```
du -h <directory> | sort -nr
```

然后通过管道输出到 `head` ，从而仅获取前 10 个结果：

![Screen-Shot-2020-09-04-at-08.22.25](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-04-at-08.22.25.png)

## Linux 中的 `df` 命令

`df` 命令用来获取磁盘的使用情况信息。

它的基础形式会输出当前挂载的磁盘卷信息：

![Screen-Shot-2020-09-08-at-08.40.39](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-08-at-08.40.39.png)

使用 `-h` 参数 （`df -h`）会将值以更为可读的方式显示：

![Screen-Shot-2020-09-08-at-08.40.50](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-08-at-08.40.50.png)

你也可以指定任一文件或目录名，以获取其所在的特定卷的信息：

![Screen-Shot-2020-09-08-at-08.41.27](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-08-at-08.41.27.png)

## Linux 中的 `basename` 命令

假设有一个文件路径，比如 `/Users/flavio/test.txt`。

执行

```
basename /Users/flavio/test.txt
```

会返回 `text.txt` 字符串：

![Screen-Shot-2020-09-10-at-08.27.52](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-10-at-08.27.52.png)

如果你在任一指向目录的路径字符串上执行 `basename` ，你会得到路径的最后一节。在以下例子中，`/Users/flavio` 是一个目录：

![Screen-Shot-2020-09-10-at-08.28.11](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-10-at-08.28.11.png)

## Linux 中的 `dirname` 命令

假设有一个文件路径，比如 `/Users/flavio/test.txt`。

执行

```
dirname /Users/flavio/test.txt

```

会返回 `/Users/flavio` 字符串：

![Screen-Shot-2020-09-10-at-08.31.08-1](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-10-at-08.31.08-1.png)

## Linux 中的 `ps` 命令

电脑每时每刻都在运行大量不同的进程。

你可以用 `ps` 命令检查它们：

![Screen-Shot-2020-09-02-at-12.25.08](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-02-at-12.25.08.png)

这是当前会话中运行的，由用户发起的进程列表。

此处我打开了一些 `fish` Shell 实例，大多数是在 VS Code 编辑器内部启动的，还运行了一个 Hugo 实例，用来生成网站的开发预览。

这些只是分配给当前用户的命令。要列出**所有**进程，我们需要给 `ps` 传递一些参数。

我最常使用的命令是 `ps ax`：

![Screen-Shot-2020-09-02-at-12.26.00](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-02-at-12.26.00.png)

> `a` 参数用来同时列出其他用户的进程。`x` 显示那些未与终端相连的进程（不是由用户通过终端发起的）。

如你所见，较长的命令被截断了。使用 `ps axww` 继续在新的行上列出命令，而非截断。

![Screen-Shot-2020-09-02-at-12.30.22](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-02-at-12.30.22.png)

> 我们需要输入 `w` 两次来应用这个设置（这不是笔误）。

你可以配合使用 `grep` 和管道符来搜索特定的进程，比如像这样：

```
ps axww | grep "Visual Studio Code"

```

![Screen-Shot-2020-09-02-at-12.33.45](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-02-at-12.33.45.png)  
`ps` 返回的列表达了一些重要信息。

第一个信息是 `PID`，也就是进程 ID。当你想在另一个命令中引用这个进程时，比如说要杀死它，这是关键的。

然后是 `TT`，它告诉我们进程所使用的终端 ID。

接下来 `STAT` 告诉我们进程的状态：

`I` 代表闲置的进程（睡眠时间超过约 20 秒）
`R` 代表可运行的进程
`S` 代表睡眠时间少于 20 秒的进程 
`T` 代表已停止的进程  
`U` 代表处于不间断等待中的进程 
`Z` 代表已死亡的进程（_zombie_，即僵尸进程）

如果出现一个以上的字母，那么第二个字母代表进一步的、可能非常有技术性的信息。

常见的是 `+` ，它代表相应进程在终端中处于前台。而 `s` 代表相应进程是一个 [会话领头进程（session leader）][69].

`TIME` 则告诉我们进程已经运行了多长时间。

## Linux 中的 `top` 命令

`top` 命令用来显示系统中正在运行的进程的动态实时信息。

如果要了解系统发生了什么，这条命令真的很方便。

它的用法很简单。你只需要输入 `top` ，终端会完全沉浸到新的视图中：

![Screen-Shot-2020-09-03-at-11.39.53](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-11.39.53.png)  
这个进程是持续运行的。要退出，你可以输入字母 `q` 或按下 `ctrl-C`。

它给出了很多信息：进程数量、有多少进程在运行或休眠、系统负载、CPU 使用率，还有更多信息。

在下方，占用 CPU 和内存资源最多的进程列表不断刷新。

默认情况下，进程按 CPU 使用率排列，正如你在高亮标记的 `%CPU` 列中看到的那样。

你可以添加一个参数，要求进程列表按内存利用率排列：

```
top -o mem

```

## Linux 中的 `kill` 命令

Linux 进程可以接收**信号**并做出反应。

这是我们与运行中进程打交道的一种方式。

`kill` 程序可以向任一程序发送多种信号。

虽然这个命令的名字暗示了它的主要功能，但它不只是用来终止程序的。

它的用法是：

```
kill <PID>

```

默认情况下，它会向指定的进程 ID 发送 `TERM` 信号。

我们可以使用参数来发送其它信号，包括以下这些：

```
kill -HUP <PID>
kill -INT <PID>
kill -KILL <PID>
kill -TERM <PID>
kill -CONT <PID>
kill -STOP <PID>

```

`HUP` 代表 **hang up（挂起）**。 如果在终止进程之前，先关闭了启动它的终端窗口，这一信号将被自动发送。

`INT` 代表 **interrupt（干扰）**，这个信号和在终端中按下 `ctrl-C` 组合键的作用一样，常常用来终结进程。

`KILL` 信号并不直接发送给进程，而是发送到操作系统内核，内核会让指定进程立刻停止并终结。

`TERM` 代表 **terminate（终结）**。这是本命令的默认信号，进程收到它会自主终结。

`CONT` 代表 **continue（继续）**。它可以用来恢复一个被停止的进程。

`STOP` 信号并不直接发送给进程，而是发送到操作系统内核，内核会让指定进程立刻停止（但不终结）。

有时你也会见到用数字表示状态的情况，例如 `kill -1 <PID>`。在这种情况下，

`1` 对应 `HUP`.  
`2` 对应 `INT`.  
`9` 对应 `KILL`.  
`15` 对应 `TERM`.  
`18` 对应 `CONT`.  
`15` 对应 `STOP`.

## Linux 中的 `killall` 命令

与 `kill` 命令类似， `killall` 也向进程发送状态信号，但区别是后者可以同时向多个进程发送信号，而非前者只能向单个进程 ID 发送信号。

这是它的命令语法：

```
killall <name>

```

`name` 也就是进程的名字。例如，假设有多个 `top` 程序的实例在运行， `killall top` 命令将完全终结它们。

你可以指定某一个信号，就像使用 `kill` 命令那样（请向上翻阅 `kill` 命令的指南以了解更多具体可以发送的信号），例如：

```
killall -HUP top

```

## Linux 中的 `jobs` 命令

当我们在 Linux / macOS 中运行命令时，我们可以在末尾加入 `&` 符号，使其在后台运行。

例如，让 `top` 命令在后台运行：

```
top &

```

这对于需要长时间运行的程序来说很方便。

要返回切入后台的程序，可以使用 `fg` 命令。如果后台只有一个作业进程，那么直接使用就好；否则要在后面加上作业进程的号码，如： `fg 1`、`fg 2` ，以此类推。

要获取作业进程号，我们可以使用 `jobs` 命令。

假设我们运行了 `top &`，之后再运行 `top -o mem &` ，因而我们有两个 top 实例在运行。此时 `jobs` 命令会这样告诉我们：

![Screen-Shot-2020-09-03-at-11.49.42](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-11.49.42.png)  
现在我们可以利用 `fg <作业号>` 切回任意一个实例。要再次终止程序，可以按下 `cmd-Z` 。

运行 `jobs -l` 也会列出每一个作业的进程 ID。

## Linux 中的 `bg` 命令

当命令执行时，你可以按下 `ctrl-Z` 暂停它。

按下后，命令会即刻停止，并将你带回到 Shell 终端。

你可以恢复命令在后台的执行，这样既可以使命令保持运行，同时又不会妨碍你在终端中做其他工作。

在这一例子中，有 2 个命令停止了：

![Screen-Shot-2020-09-03-at-16.06.18](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-16.06.18.png)  
运行 `bg 1` 即可在后台恢复作业 #1 的执行。

我也可以不带任何参数执行 `bg` 命令，它会默认选取作业列表中的 #1 项。

## Linux 中的 `fg` 命令

当命令在后台运行时，由于此前你已经在命令末尾加上了 `&` （例如 `top &` ，或是使用了 `bg` 命令将命令放到后台），此时你可以用 `fg` 命令将其切换回前台。

执行

```
fg

```

它将在前台恢复最后被暂停的作业。

你也可以加上作业号，即可指定任一你想在前台恢复的作业，作业号可以使用 `jobs` 命令获得。

![Screen-Shot-2020-09-03-at-16.12.46](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-16.12.46.png)

执行 `fg 2` 将恢复作业 #2：

![Screen-Shot-2020-09-03-at-16.12.54](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-16.12.54.png)

## Linux 中的 `type` 命令

命令可分为以下四种类型：

-   可执行程序
-   Shell 内置程序
-   Shell 功能
-   命令别名

如果你很想知道或只是很好奇，`type` 命令可以帮你分清这些。它会告诉你某一命令如何被解析。

输出根据 Shell 的类型而有所不同，这是在 Bash 中的样子：

![Screen-Shot-2020-09-03-at-16.32.50](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-16.32.50.png)

这是在 Zsh 中的样子：

![Screen-Shot-2020-09-03-at-16.32.57](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-16.32.57.png)

这是在 Fish 中的样子：

![Screen-Shot-2020-09-03-at-16.33.06](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-16.33.06.png)  
其中一个有趣的现象是：对于别名，它会告诉你某个别名将被解析到何处。例如，在 Bash 和 Zsh 中， `ll` 显示为一个别名，而在 Fish 中，由于 `ll` 是默认提供的，所以它会告诉你这是内置的 Shell 功能。 

## Linux 中的 `which` 命令

假定你有一个可直接执行的命令，因为它处在 Shell 路径中，但你想知道它的具体位置。

你可以用 `which` 来做这件事。这个命令会返回指定命令的路径。

![Screen-Shot-2020-09-03-at-17.22.47](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-17.22.47.png)  
`which` 只对存储在磁盘上的可执行文件起作用，对别名或内置 Shell 功能无效。

## Linux 中的 `nohup` 命令

有时你必须在远程机器上运行一个长时间活跃的进程，但之后你需要断开连接。

或者，你只是想防止当本地和服务器之间有任何网络问题时，命令被停止执行。

要让任一命令在登出或关闭服务器会话后继续运行，可以使用 `nohup` 命令。

执行 `nohup <命令>` 可以让某个进程在你登出后继续工作。

## Linux 中的 `xargs` 命令

在 UNIX Shell 中，`xargs` 命令用来将标准输入的数据转换成命令的参数。

换句话说，使用 `xargs` ，可以将一条命令的输出，用作另一条命令的输入。

下面是你将会用到的语法：

```
command1 | xargs command2

```

我们使用管道符（`|`）将输出传递给 `xargs`。它将负责运行 `command2` 命令，使用 `command1` 的输出作为参数。

我们来做个简单的例子。假设你要删除某个目录下的一些特定文件。这些文件列在一个文本文件中。

我们有三个文件： `file1`、 `file2`、 `file3`。

在 `todelete.txt` 中，我们有一份想要删除的文件列表，在这一例子中是 `file1` 和 `file3`：

![Screen-Shot-2020-09-08-at-07.45.28](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-08-at-07.45.28.png)

我们将通过 `xargs` 把 `cat todelete.txt` 的输出引向 `rm` 命令。

就像这样：

```
cat todelete.txt | xargs rm

```

以下是执行结果，我们列出的文件现在已经被删除：

![Screen-Shot-2020-09-08-at-07.46.39](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-08-at-07.46.39.png)

它的工作方式是：`xargs` 会运行 `rm` 2次，为 `cat` 返回的每一行运行一次。

这是 `xargs` 最简单的用法。我们还可以使用以下的一些参数。

在我看来，其中最有用的是 `-p`（特别是刚开始学习 `xargs` 时）。使用这个选项将使 `xargs` 打印出一个确认提示，说明它要采取的行动：

![Screen-Shot-2020-09-08-at-08.19.09](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-08-at-08.19.09.png)

`-n` 选项令 `xargs` 每次执行若干个迭代，因此你可以用 `-p` 单独确认它们。这里我们用 `-n1` 告诉 `xargs` 一次执行一个迭代:

![Screen-Shot-2020-09-08-at-08.32.58](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-08-at-08.32.58.png)

The `-I` option is another widely used one. It allows you to get the output into a placeholder, and then you can do various things.
另一个广泛应用的参数是 `-I`。它可以将输出内容放入占位符，之后你可以用来做各种事。

其中一件事是同时运行多个命令，例如：

```
command1 | xargs -I % /bin/bash -c 'command2 %; command3 %'

```

![Screen-Shot-2020-09-08-at-08.35.37](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-08-at-08.35.37.png)

> 你可以将上方的 `%` 符号换成其他任何东西——它只是个变量。

## Linux 中的 `vim` 编辑器命令

`vim` 是一个**非常**流行的文件编辑器，特别是在程序员中。 它被积极开发且经常更新，且有巨大的社区力量围绕着。甚至还有一个 [Vim 会议][70]！

在现代系统中，`vi` 只是 `vim` 的一个别名，意思是“改进的 `vi`”（即 “`vi` i`m`proved”）。

你可以在命令行运行 `vi` 启动它。

![Screenshot-2019-02-10-at-11.44.36](https://www.freecodecamp.org/news/content/images/2020/10/Screenshot-2019-02-10-at-11.44.36.png)

调用时指定一个文件名，你就可以编辑对应的文件：

```
vi test.txt

```

![Screenshot-2019-02-10-at-11.36.21](https://www.freecodecamp.org/news/content/images/2020/10/Screenshot-2019-02-10-at-11.36.21.png)

你需要了解的是，Vim 有两个主要的模式：

-   _命令（command）_ 模式，也称为 _普通（normal）_ 模式
-   _插入（insert）_ 模式

当你启动编辑器时，默认处于命令模式。这时你无法像期望的那样，在基于图形界面的编辑器中输入文本。你需要进入**插入模式**。

可以按下 `i` 键进入插入模式。当你这样做之后， 在编辑器下方会出现 `-- 插入 --` （或 INSERT）字样：

![Screenshot-2019-02-10-at-11.47.39](https://www.freecodecamp.org/news/content/images/2020/10/Screenshot-2019-02-10-at-11.47.39.png)

现在你可以开始输入了，用文件内容来填充终端屏幕：

![Screenshot-2019-02-10-at-11.48.39](https://www.freecodecamp.org/news/content/images/2020/10/Screenshot-2019-02-10-at-11.48.39.png)

你可以用方向键在文件中移动光标，或者使用 `h` - `j` - `k` - `l` 四个键。 `h-l` 代表左和右，`j-k` 代表上和下。

当完成编辑时，按下 `esc` 键即可退出插入模式，回到**命令模式**。

![Screenshot-2019-02-10-at-11.48.44](https://www.freecodecamp.org/news/content/images/2020/10/Screenshot-2019-02-10-at-11.48.44.png)  
此时你可以浏览文件，但无法向其添加内容（要注意按下了哪个键，某些键可能是编辑器的命令）。

现在你可能想知道如何**保存文件**。可以按下 `:` （冒号），然后输入 `w`，即 `:w`

要**保存并退出**，可以按下 `:` 然后输入 `w` 和 `q`，即 `:wq`

要**退出但不保存文件**，可以按下 `:` 然后输入 `q` 和 `!`，即 `:q!`

要**撤销**某一个更改并再次编辑，可以在命令模式中按下 `u`。 如果要**重做** （取消上次的撤销操作），可以按下 `ctrl-r`。

以上是使用 Vim 工作的基本操作。接下来是一个无底洞，这篇简短的介绍是无法讲完的。

下面我只会提到那些能让你入门 Vim 编辑的命令：

-   按下 `x` 键，删除当前光标高亮的字符
-   按下 `A` 跳转到当前选择行的末尾
-   按下 `0` 跳转到行的开头
-   定位到任一单词的首字母，按下 `d` ，然后按 `w` 即可删除相应单词。如果输入 `e` 而非 `w`，后一个单词前的空白处将被保留
-   在 `d` 和 `w` 之间加入一个数字，即可删除多个单词，例如使用 `d3w` 来向前删除 3 个单词
-   按下 `d` 然后再按一次 `d` ，即可删除整行。按下 `d` 然后再按 `$` ，即可删除以光标为开头，直至当前行末尾的整行内容。

如需了解更多 Vim 的内容，我推荐参考 [Vim 常见问题][71]。你还可以运行 `vimtutor` 命令，它应该已经安装到系统中，可以对你开始探索 `vim`  有很大帮助。

## Linux 中的 `emacs` editor 命令

`emacs` is an awesome editor and it's historically regarded as _the_ editor for UNIX systems. Famously, `vi` vs `emacs` flame wars and heated discussions have caused many unproductive hours for developers around the world.

`emacs` is very powerful. Some people use it all day long as a kind of operating system ([https://news.ycombinator.com/item?id=19127258][72]). We'll just talk about the basics here.

You can open a new emacs session simply by invoking `emacs`:

![Screenshot-2019-02-10-at-12.14.18](https://www.freecodecamp.org/news/content/images/2020/10/Screenshot-2019-02-10-at-12.14.18.png)

macOS users, stop a second now. If you are on Linux there are no problems, but macOS does not ship applications using GPLv3, and every built-in UNIX command that has been updated to GPLv3 has not been updated.

While there is a little problem with the commands I listed up to now, in this case using an emacs version from 2007 is not exactly the same as using a version with 12 years of improvements and change.

This is not a problem with Vim, which is up to date. To fix this, run `brew install emacs` and running `emacs` will use the new version from Homebrew (make sure you have [Homebrew][73] installed).

You can also edit an existing file by calling `emacs <filename>`:

![Screenshot-2019-02-10-at-13.12.49](https://www.freecodecamp.org/news/content/images/2020/10/Screenshot-2019-02-10-at-13.12.49.png)

You can now start editing. Once you are done, press `ctrl-x` followed by `ctrl-w`. You confirm the folder:

![Screenshot-2019-02-10-at-13.14.29](https://www.freecodecamp.org/news/content/images/2020/10/Screenshot-2019-02-10-at-13.14.29.png)

and Emacs tells you the file exists, asking you if it should overwrite it:

![Screenshot-2019-02-10-at-13.14.32](https://www.freecodecamp.org/news/content/images/2020/10/Screenshot-2019-02-10-at-13.14.32.png)

Answer `y`, and you get a confirmation of success:

![Screenshot-2019-02-10-at-13.14.35](https://www.freecodecamp.org/news/content/images/2020/10/Screenshot-2019-02-10-at-13.14.35.png)  
You can exit Emacs by pressing `ctrl-x` followed by `ctrl-c`.  
Or `ctrl-x` followed by `c` (keep `ctrl` pressed).

There is a lot to know about Emacs, certainly more than I am able to write in this little introduction. I encourage you to open Emacs and press `ctrl-h` `r` to open the built-in manual and `ctrl-h` `t` to open the official tutorial.

## Linux 中的 `nano` editor 命令

`nano` is a beginner friendly editor.

Run it using `nano <filename>`.

`You can directly type characters into the file without worrying about modes.

You can quit without editing using `ctrl-X`. If you edited the file buffer, the editor will ask you for confirmation and you can save the edits, or discard them.

The help at the bottom shows you the keyboard commands that let you work with the file:

![Screenshot-2019-02-10-at-11.03.51](https://www.freecodecamp.org/news/content/images/2020/10/Screenshot-2019-02-10-at-11.03.51.png)  
`pico` is more or less the same, although `nano` is the GNU version of `pico` which at some point in history was not open source. The `nano` clone was made to satisfy the GNU operating system license requirements.

## Linux 中的 `whoami` 命令

Type `whoami` to print the user name currently logged in to the terminal session:

![Screen-Shot-2020-09-03-at-18.08.05](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-18.08.05.png)

> Note: this is different from the `who am i` command, which prints more information

## Linux 中的 `who` 命令

The `who` command displays the users logged in to the system.

Unless you're using a server multiple people have access to, chances are you will be the only user logged in, multiple times:

![Screen-Shot-2020-09-03-at-18.03.05](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-18.03.05.png)

Why multiple times? Because each shell opened will count as an access.

You can see the name of the terminal used, and the time/day the session was started.

The `-aH` flags will tell `who` to display more information, including the idle time and the process ID of the terminal:

![Screen-Shot-2020-09-03-at-18.05.29](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-18.05.29.png)

The special `who am i` command will list the current terminal session details:

![Screen-Shot-2020-09-03-at-18.06.35](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-18.06.35.png)

![Screen-Shot-2020-09-03-at-18.07.30](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-18.07.30.png)

## Linux 中的 `su` 命令

While you're logged in to the terminal shell with one user, you might need to switch to another user.

For example you're logged in as root to perform some maintenance, but then you want to switch to a user account.

You can do so with the `su` command:

```
su <username>

```

For example: `su flavio`.

If you're logged in as a user, running `su` without anything else will prompt you to enter the `root` user password, as that's the default behavior.

![Screen-Shot-2020-09-03-at-18.18.09](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-18.18.09.png)  
`su` will start a new shell as another user.

When you're done, typing `exit` in the shell will close that shell, and will return you back to the current user's shell.

## Linux 中的 `sudo` 命令

`sudo` is commonly used to run a command as root.

You must be enabled to use `sudo`, and once you are, you can run commands as root by entering your user's password (_not_ the root user password).

The permissions are highly configurable, which is great especially in a multi-user server environment. Some users can be granted access to running specific commands through `sudo`.

For example you can edit a system configuration file:

```
sudo nano /etc/hosts

```

which would otherwise fail to save since you don't have the permissions  
for it.

You can run `sudo -i` to start a shell as root:

![Screen-Shot-2020-09-03-at-18.25.50](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-18.25.50.png)

You can use `sudo` to run commands as any user. `root` is the default, but use the `-u` option to specify another user:

```
sudo -u flavio ls /Users/flavio

```

## Linux 中的 `passwd` 命令

Users in Linux have a password assigned. You can change the password using the `passwd` command.

There are two situations here.

The first is when you want to change your password. In this case you type:

```
passwd

```

and an interactive prompt will ask you for the old password, then it will ask you for the new one:

![Screen-Shot-2020-09-04-at-07.32.05](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-04-at-07.32.05.png)

When you're `root` (or have superuser privileges) you can set the username for which you want to change the password:

```
passwd <username> <new password>

```

`In this case you don't need to enter the old one.

## Linux 中的 `ping` 命令

The `ping` command pings a specific network host, on the local network or on the Internet.

You use it with the syntax `ping <host>` where `<host>` could be a domain name, or an IP address.

Here's an example pinging `google.com`:

![Screen-Shot-2020-09-09-at-15.21.46](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-09-at-15.21.46.png)  
The command sends a request to the server, and the server returns a response.

`ping` keeps sending the request every second, by default. It will keep running until you stop it with `ctrl-C`, unless you pass the number of times you want to try with the `-c` option: `ping -c 2 google.com`.

Once `ping` is stopped, it will print some statistics about the results: the percentage of packages lost, and statistics about the network performance.

`As you can see the screen prints the host IP address, and the time that it took to get the response back.

Not all servers support pinging, in case the request times out:

![Screen-Shot-2020-09-09-at-15.21.27](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-09-at-15.21.27.png)

`Sometimes this is done on purpose, to "hide" the server, or just to reduce the load. The ping packets can also be filtered by firewalls.

`ping` works using the **ICMP protocol** (_Internet Control Message Protocol_), a network layer protocol just like TCP or UDP.

The request sends a packet to the server with the `ECHO_REQUEST` message, and the server returns a `ECHO_REPLY` message. I won't go into details, but this is the basic concept.

`Pinging a host is useful to know if the host is reachable (supposing it implements ping), and how distant it is in terms of how long it takes to get back to you.

`Usually the nearer the server is geographically, the less time it will take to return back to you. Simple physical laws cause a longer distance to introduce more delay in the cables.

## Linux 中的 `traceroute` 命令

`When you try to reach a host on the Internet, you go through your home router. Then you reach your ISP network, which in turn goes through its own upstream network router, and so on, until you finally reach the host.

Have you ever wanted to know what steps your packets go through to do that?

The `traceroute` command is made for this.

You invoke

```
traceroute <host>

```

`and it will (slowly) gather all the information while the packet travels.

In this example I tried reaching for my blog with `traceroute flaviocopes.com`:

![Screen-Shot-2020-09-09-at-16.32.01](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-09-at-16.32.01.png)

Not every router travelled returns us information. In this case, `traceroute` prints `* * *`. Otherwise, we can see the hostname, the IP address, and some performance indicator.

`For every router we can see 3 samples, which means traceroute tries by default 3 times to get you a good indication of the time needed to reach it.

This is why it takes this long to execute `traceroute` compared to simply doing a `ping` to that host.

You can customize this number with the `-q` option:

```
traceroute -q 1 flaviocopes.com

```

![Screen-Shot-2020-09-09-at-16.36.07](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-09-at-16.36.07.png)

## Linux 中的 `clear` 命令

Type `clear` to clear all the previous commands that were run in the current terminal.

The screen will clear and you will just see the prompt at the top:

![Screen-Shot-2020-09-03-at-18.10.32](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-03-at-18.10.32.png)

> Note: this command has a handy shortcut: `ctrl-L`

`Once you do that, you will lose access to scrolling to see the output of the previous commands entered.

So you might want to use `clear -x` instead, which still clears the screen, but lets you go back to see the previous work by scrolling up.

## Linux 中的 `history` 命令

`Every time you run a command, it's memorized in the history.

You can display all the history using:

```
history

```

This shows the history with numbers:

![Screen-Shot-2020-09-04-at-08.03.10](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-04-at-08.03.10.png)

You can use the syntax `!<command number>` to repeat a command stored in the history. In the above example typing `!121` will repeat the `ls -al | wc -l` command.

`Typically the last 500 commands are stored in the history.

You can combine this with `grep` to find a command you ran:

```
history | grep docker

```

![Screen-Shot-2020-09-04-at-08.04.50](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-04-at-08.04.50.png)  
To clear the history, run `history -c`.

## Linux 中的 `export` 命令

The `export` command is used to export variables to child processes.

What does this mean?

Suppose you have a variable TEST defined in this way:

```
TEST="test"

```

You can print its value using `echo $TEST`:

![Screen-Shot-2020-09-09-at-17.32.49](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-09-at-17.32.49.png)

But if you try defining a Bash script in a file `script.sh` with the above command:

![Screen-Shot-2020-09-09-at-17.35.23](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-09-at-17.35.23.png)

Then when you set `chmod u+x script.sh` and you execute this script with `./script.sh`, the `echo $TEST` line will print nothing!

This is because in Bash the `TEST` variable was defined local to the shell. When executing a shell script or another command, a subshell is launched to execute it, which does not contain the current shell local variables.

To make the variable available there we need to define `TEST` not in this way:

```
TEST="test"

```

but in this way:

```
export TEST="test"

```

Try that, and running `./script.sh` now should print "test":

![Screen-Shot-2020-09-09-at-17.37.56](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-09-at-17.37.56.png)  
Sometimes you need to append something to a variable. It's often done with the `PATH` variable. You use this syntax:

```
export PATH=$PATH:/new/path

```

It's common to use `export` when you create new variables in this way. But you can also use it when you create variables in the `.bash_profile` or `.bashrc` configuration files with Bash, or in `.zshenv` with Zsh.

To remove a variable, use the `-n` option:

```
export -n TEST

```

Calling `export` without any option will list all the exported variables.

## Linux 中的 `crontab` 命令

Cron jobs are jobs that are scheduled to run at specific intervals. You might have a command perform something every hour, or every day, or every 2 weeks. Or on weekends.

They are very powerful, especially when used on servers to perform maintenance and automations.

The `crontab` command is the entry point to work with cron jobs.

The first thing you can do is to explore which cron jobs are defined by you:

```
crontab -l

```

You might have none, like me:

![Screen-Shot-2020-09-09-at-17.54.31](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-09-at-17.54.31.png)

Run

```
crontab -e

```

`to edit the cron jobs, and add new ones.

By default this opens with the default editor, which is usually `vim`. I like `nano` more. You can use this line to use a different editor:

```
EDITOR=nano crontab -e

```

`Now you can add one line for each cron job.

The syntax to define cron jobs is kind of scary. This is why I usually use a website to help me generate it without errors: [https://crontab-generator.org/][74]

![Screen-Shot-2020-09-09-at-18.03.57](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-09-at-18.03.57.png)

`You pick a time interval for the cron job, and you type the command to execute.

I chose to run a script located in `/Users/flavio/test.sh` every 12 hours. This is the crontab line I need to run:

```
* */12 * * * /Users/flavio/test.sh >/dev/null 2>&1

```

I run `crontab -e`:

```
EDITOR=nano crontab -e

```

and I add that line, then I press `ctrl-X` and press `y` to save.

If all goes well, the cron job is set up:

![Screen-Shot-2020-09-09-at-18.06.19](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-09-at-18.06.19.png)

Once this is done, you can see the list of active cron jobs by running:

```
crontab -l

```

![Screen-Shot-2020-09-09-at-18.07.00](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-09-at-18.07.00.png)

You can remove a cron job running `crontab -e` again, removing the line and exiting the editor:

![Screen-Shot-2020-09-09-at-18.07.40](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-09-at-18.07.40.png)

![Screen-Shot-2020-09-09-at-18.07.49](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-09-at-18.07.49.png)

## Linux 中的 `uname` 命令

Calling `uname` without any options will return the Operating System codename:

![Screen-Shot-2020-09-07-at-07.37.41](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-07.37.41.png)

The `m` option shows the hardware name (`x86_64` in this example) and the `p` option prints the processor architecture name (`i386` in this example):

![Screen-Shot-2020-09-07-at-07.37.51](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-07.37.51.png)

The `s` option prints the Operating System name. `r` prints the release, and `v` prints the version:

![Screen-Shot-2020-09-07-at-07.37.56](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-07.37.56.png)

The `n` option prints the node network name:

![Screen-Shot-2020-09-07-at-07.38.01](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-07.38.01.png)

The `a` option prints all the information available:

![Screen-Shot-2020-09-07-at-07.38.06](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-07-at-07.38.06.png)

On macOS you can also use the `sw_vers` command to print more information about the macOS Operating System. Note that this differs from the Darwin (the Kernel) version, which above is `19.6.0`.

> `Darwin is the name of the kernel of macOS. The kernel is the "core" of the Operating System, while the Operating System as a whole is called macOS. In Linux, Linux is the kernel, and GNU/Linux would be the Operating System name (although we all refer to it as "Linux").

## Linux 中的 `env` 命令

The `env` command can be used to pass environment variables without setting them on the outer environment (the current shell).

Suppose you want to run a Node.js app and set the `USER` variable to it.

`You can run`

```
env USER=flavio node app.js

```

and the `USER` environment variable will be accessible from the Node.js app via the Node `process.env` interface.

You can also run the command clearing all the environment variables already set, using the `-i` option:

```
env -i node app.js

```

In this case you will get an error saying `env: node: No such file or directory` because the `node` command is not reachable, as the `PATH` variable used by the shell to look up commands in the common paths is unset.

So you need to pass the full path to the `node` program:

```
env -i /usr/local/bin/node app.js

```

Try with a simple `app.js` file with this content:

```
console.log(process.env.NAME)
console.log(process.env.PATH)

```

You will see the output as

```
undefined

```

You can pass an env variable:

```
env -i NAME=flavio node app.js

```

and the output will be

```
flavio
undefined

```

Removing the `-i` option will make `PATH` available again inside the program:

![Screen-Shot-2020-09-10-at-16.55.17](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-10-at-16.55.17.png)

The `env` command can also be used to print out all the environment variables. If run with no options:

```
env

```

it will return a list of the environment variables set, for example:

```
HOME=/Users/flavio
LOGNAME=flavio
PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin
PWD=/Users/flavio
SHELL=/usr/local/bin/fish

```

You can also make a variable inaccessible inside the program you run, using the `-u` option. For example this code removes the `HOME` variable from the command environment:

```
env -u HOME node app.js

```

## Linux 中的 `printenv` 命令

Here's a quick guide to the `printenv` command, used to print the values of environment variables

In any shell there are a good number of environment variables, set either by the system, or by your own shell scripts and configuration.

You can print them all to the terminal using the `printenv` command. The output will be something like this:

```
HOME=/Users/flavio
LOGNAME=flavio
PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/Apple/usr/bin
PWD=/Users/flavio
SHELL=/usr/local/bin/fish

```

with a few more lines, usually.

You can append a variable name as a parameter, to only show that variable value:

```
printenv PATH

```

![Screen-Shot-2020-09-10-at-16.31.20](https://www.freecodecamp.org/news/content/images/2020/10/Screen-Shot-2020-09-10-at-16.31.20.png)

## `结语`

Thanks a lot for reading this handbook.

I hope it will inspire you to learn more about Linux and its capabilities. It's evergreen knowledge that will not be out of date any time soon.

Remember that you can [download this handbook in PDF / ePUB / Mobi format][75] if you want!

I **publish programming tutorials** every day on my website [flaviocopes.com][76] if you want to check out more great content like this.

You can reach me on Twitter [@flaviocopes][77].

[1]: https://flaviocopes.com/page/linux-commands-handbook/
[2]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#introductiontolinuxandshells
[3]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-man-command
[4]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-ls-command
[5]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-cd-command
[6]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-pwd-command
[7]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-mkdir-command
[8]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-rmdir-command
[9]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-mv-command
[10]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-cp-command
[11]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-open-command
[12]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-touch-command
[13]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-find-command
[14]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-ln-command
[15]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-gzip-command
[16]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-gunzip-command
[17]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-tar-command
[18]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-alias-command
[19]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-cat-command
[20]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-less-command
[21]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-tail-command
[22]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-wc-command
[23]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-grep-command
[24]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-sort-command
[25]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-uniq-command
[26]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-diff-command
[27]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-echo-command
[28]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-chown-command
[29]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-chmod-command
[30]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-umask-command
[31]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-du-command
[32]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-df-command
[33]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-basename-command
[34]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-dirname-command
[35]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-ps-command
[36]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-top-command
[37]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-kill-command
[38]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-killall-command
[39]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-jobs-command
[40]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-bg-command
[41]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-fg-command
[42]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-type-command
[43]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-which-command
[44]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-nohup-command
[45]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-xargs-command
[46]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-vim-editor-command
[47]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-emacs-editor-command
[48]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-nano-editor-command
[49]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-whoami-command
[50]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-who-command
[51]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-su-command
[52]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-sudo-command
[53]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-passwd-command
[54]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-ping-command
[55]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-traceroute-command
[56]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-clear-command
[57]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-history-command
[58]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-export-command
[59]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-crontab-command
[60]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-uname-command
[61]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-env-command
[62]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#the-linux-printenv-command
[63]: https://www.freecodecamp.org/news/the-linux-commands-handbook/#conclusion
[64]: https://en.wikipedia.org/wiki/Unix
[65]: https://docs.microsoft.com/en-us/windows/wsl/install-win10
[66]: https://tldr.sh/
[67]: https://en.wikipedia.org/wiki/LZ77_and_LZ78
[68]: https://www.freecodecamp.org/news/unix-command-tail/
[69]: https://unix.stackexchange.com/questions/18166/what-are-session-leaders-in-ps
[70]: https://vimconf.org/
[71]: https://vimhelp.org/vim_faq.txt.html
[72]: https://news.ycombinator.com/item?id=19127258
[73]: https://flaviocopes.com/homebrew/
[74]: https://crontab-generator.org/
[75]: https://flaviocopes.com/page/linux-commands-handbook/
[76]: https://flaviocopes.com/
[77]: https://twitter.com/flaviocopes
