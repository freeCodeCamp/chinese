> -   原文地址：[The Linux LS Command – How to List Files in a Directory + Option Flags Linux LS 命令 – 如何列出目录中的文件 + 选项标志](https://www.freecodecamp.org/news/the-linux-ls-command-how-to-list-files-in-a-directory-with-options/)
> -   原文作者：Bolaji Ayodeji
> -   译者：ZhichengChen
> -   校对者：

![The Linux LS Command – How to List Files in a Directory + Option Flags](https://www.freecodecamp.org/news/content/images/size/w2000/2020/09/article-banner-7.png)

自 1970 年代 Unix 发明以来，许多操作系统都以它为基础。这些操作系统中有许多失败了，也有一些大获成功。

Linux 是最流行的基于 Unix 的操作系统之一。它是开源的，并在世界各地的许多行业中广泛应用。

Linux 操作系统的一项重要功能是命令行界面（CLI），它允许用户通过 Shell 与计算机进行交互。Linux Shell 是一个 REPL（**R**ead，**E**valuate，**P**rint，**L**oop）环境，用户可以在其中输入命令，然后 Shell 执行该命令并返回一个结果。

`ls` 命令是可以从 CLI 列出文件或目录的众多 Linux 命令之一。

在本文中，我们将深入探讨 `ls` 命令以及常用的一些选项。

## 先决条件

* 具有目录和文件的计算机
* 安装一个 Linux 发行版
* 在 CLI 上导航的基本知识
* 你脸上的笑容 :)

## Linux ls 命令

`ls` 命令用于在 Linux 和其他基于 Unix 的操作系统中列出文件或目录。

就像使用 GUI 在*文件浏览器*或*文件夹*中导航一样，默认情况下，`ls` 命令可以列出当前目录中的所有文件或目录，并通过命令行进一步操作它们。

启动终端并输入 `ls` 以查看实际效果：

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-20-at-9.40.29-PM.png)

## 如何使用选项列出目录中的文件

`ls` 命令还接受一些标志（也称为选项），这些标志是更改终端中文件或目录的展示方式的附加信息。

换句话说，标志改变了 `ls` 命令的工作方式：

```
 ls [flags] [directory]
```

> PS：整篇文章中使用的**内容**一词是指列出的**文件和目录**，而不是文件/目录的实际内容。

### 列出当前工作目录中的文件

输入 `ls` 命令以列出当前工作目录的内容：

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-20-at-9.40.29-PM.png)

### 列出另一个目录中的文件

键入 `ls [directory path here]` 命令以列出另一个目录的内容：

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-20-at-10.32.52-PM.png)

### 列出根目录中的文件

输入 `ls /` 命令以列出根目录的内容：

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-20-at-10.46.10-PM.png)

### 列出父目录中的文件

键入`ls ..` 命令以列出上一级父目录的内容。 使用 `ls ../..` 表示列出父目录的父目录的内容：

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-20-at-10.48.22-PM.png)

### 列出用户主目录（/home/user）中的文件

键入`ls ~` 命令以列出用户主目录中的内容：

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-20-at-10.51.19-PM.png)

### 仅列出目录

输入 `ls -d * /` 命令仅列出目录：

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-21-at-12.53.05-PM.png)

### 列出带有子目录的文件

键入  `ls *`  命令以列出目录及其子目录的内容：

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-21-at-1.07.54-PM.png)

### 递归列出文件

输入 `ls -R` 命令以列出所有文件和目录并逐级展示子目录内的目录和文件：

![](https://www.freecodecamp.org/news/content/images/2020/09/Screenshot-2020-09-01-at-9.04.56-AM.png)

> 如果有很多文件，这可能需要很长时间才能完成，因为将打印出每个目录中的每个文件。可以改为指定一个目录来运行此命令，如：`ls Downloads -R`

### 列出文件的大小

键入`ls -s` 命令（**s** 为小写字母）以列出文件或目录的大小：

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-21-at-12.30.19-PM.png)

###  以长格式列出文件

键入`ls -l` 命令以表格格式列出目录的内容，其列包括：

* 内容权限
* 内容链接数
* 内容的所有者
* 内容组的所有者
* 内容大小（以字节为单位）
* 内容的最后修改日期/时间
* 文件或目录名称

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-20-at-10.52.37-PM.png)

### 以可读的文件大小长格式列出文件

键入`ls -lh` 命令以上面相同的表格格式列出文件或目录，但用另一列表示每个文件/目录的大小：

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-21-at-12.14.33-PM.png)

请注意，当文件或目录的大小大于 1024 字节时，大小以字节（B）、兆字节（MB）、千兆字节（GB）或 TB（TB）列出。

### 列出文件，包括隐藏文件

键入 `ls -a`  命令以列出包括隐藏的文件或目录。在 Linux 中，任何以 `.` 开头的文件都被视为隐藏文件：

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-21-at-11.12.26-AM.png)

### 以长格式列出包括隐藏文件的文件

输入 `ls -l -a` 或 `ls -a -l` 或  `ls -la` 或 `ls -al` 命令以表格格式列出文件或目录，并提供包括隐藏文件或目录在内的更多信息：

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-21-at-12.17.01-PM.png)

### 列出文件并按日期和时间排序

键入`ls -t` 命令以列出文件或目录，并按降序（从最大到最小）按上次修改的日期和时间排序。

还可以添加 `-r` 标志来反转排序顺序，如下所示：`ls -tr`：

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-21-at-12.20.09-PM.png)

### 列出文件并按文件大小排序

键入`ls -S`（**S** 为大写）命令以列出文件或目录，并按日期或时间降序排列（从大到小）。

还可以添加 `-r` 标志来反转排序顺序，如下所示：`ls -Sr`：

![](https://www.freecodecamp.org/news/content/images/2020/08/Screenshot-2020-08-21-at-12.20.38-PM.png)

###  列出文件并将结果输出到文件

输入`ls> output.txt` 命令，将前一个命令的输出打印到 `output.txt` 文件中。可以使用前面讨论过的任何标志，例如 `-la` －这里的关键是结果将输出到文件中而不记录到命令行中。

然后，可以根据需要使用该文件，也可以使用 `cat output.txt` 展示该文件的内容：

![](https://www.freecodecamp.org/news/content/images/2020/09/Screenshot-2020-09-01-at-9.12.59-AM.png)

# 总结

还有很多命令可以和 `ls` 组合使用，以根据需要列出文件和目录。 要记住，可以一次将多个命令组合在一起。

假设要以长格式列出文件（包括隐藏文件），然后按文件大小排序。 命令是 `ls -alS`，这是 `ls -l`，`ls -a` 和 `ls -S` 的组合。

如果忘记了任何命令或不确定该怎么做，则可以运行 `ls --help` 或 `man ls`，这将显示一本手册，包含了 `ls` 命令的所有选项：

![](https://www.freecodecamp.org/news/content/images/2020/09/Screenshot-2020-09-01-at-9.57.37-AM.png)

感谢阅读！
