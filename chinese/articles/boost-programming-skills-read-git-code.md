> -   原文地址：[Boost Your Programming Skills by Reading Git's Code](https://www.freecodecamp.org/news/boost-programming-skills-read-git-code/)
> -   原文作者：Jacob Stopak
> -   译者：weiqinglai
> -   校对者：

![Boost Your Programming Skills by Reading Git's Code](https://www.freecodecamp.org/news/content/images/size/w2000/2021/03/Boost-Your-Programming-Skills-by-Reading-Git-s-Code.png)

These days there are plenty of trendy ways to improve your programming skills and knowledge, including:

*   Taking a free or paid online programming course
*   Reading a programming book
*   Picking a personal project and hacking away to learn as you code
*   Following along with an online tutorial project
*   Keeping up to date with relevant programming blogs

现今有很多时新的方法可以帮你提升编程知识和技能，其中包括：

* 参加免费或付费的在线编程课程
* 读一本编程书
* 挑选一个个人项目并不停地敲代码去学习
* 跟随一个在线教程项目去学
* 和相关的一些编程博客保持同步

Each of these methods will appeal to different people, and each one has elements that will definitely make you a better programmer. If you are an intermediate or advanced coder, it is almost certain that you've tried each of these methods at least once.

这些方法中的每一个都会吸引不同的人，并且每个方法里都有一些东西肯定会使您成为一个更好的程序员。如果您是一个中级或高级程序员，那几乎可以肯定这里的每种方法您已经尝试了至少一次。

However, there is another method that the vast majority of developers overlook, which is a shame in my opinion because it has so much to offer. This method is to **learn by reading, analyzing, and understanding existing, high\-quality codebases!**

但是，绝大多数开发人员都忽略了另一种方法，我认为这很可惜，因为它可以学到很多东西。这种方法就是**通过阅读，分析和理解现有的高质量代码库来学习！**

We are lucky to live in a time where good code is often accessible for free via high\-quality, free\-and\-open\-source (FOSS) projects. And it takes less than a minute to clone down copies of these codebases to our local machines from sites like GitHub or BitBucket.

我们很幸运地生活在这样一个时代，通常可以通过高质量，免费和开源（FOSS）项目免费访问优质代码。 而且，从 GitHub 或 BitBucket 之类的网站上将这些代码库的副本克隆到我们的本地计算机上，只需不到一分钟的时间。

Furthermore, modern version control systems like Git allow us to view the code at any point in its development history. Clearly there is a wealth of information right in front of our noses!

此外，像 Git 这样的现代版本控制系统使我们可以查看在其开发历史中任意节点的代码。显然，我们眼前有大量丰富的信息！

In this article, we will discuss the original version of Git's code in order to highlight how reading existing code can help boost your coding skills.

在本文中，我们将讨论 Git 代码的原始版本，以突出显示如何通过阅读现有代码帮助提升您的编程技能。

We will cover why it's worth learning about Git's code, how to access Git's code, and review some related C programming concepts.

我们将介绍有关 Git 的代码为什么值得学习，如何访问 Git 的代码以及回顾一些相关的C编程概念。

We will provide an overview of Git's original codebase structure and learn how Git's core functionalities are implemented in code.

我们将概述 Git 的原始代码库结构，并学习如何在代码中实现 Git 的核心功能。

Finally, we will recommend some next steps for curious developers to continue learning from Git's code and other projects.

最后，我们将为好奇的开发人员推荐一些后续步骤，以便他们继续从 Git 的代码和其他项目中学习。

## Why Learn About Git's Code?

## 为什么要学习关于 Git 的代码呢？

Git's codebase is an incredible resource for intermediate developers to further their programming knowledge and skills. Here are 7 reasons why it's worth digging into Git's code:

对于中级开发人员来说，Git 的代码库是用来进一步提高他们的编程知识和技能的一个极好资源。以下是值得深入研究 Git 代码的 7 个原因：

1) Git is probably the most popular software dev tool in use today. In short, if you're a developer, you probably use Git. Learning how Git's code works will give you a deeper understanding of an essential tool you work with every day.

1) Git 可能是当今使用的最受欢迎的软件开发工具。简而言之，如果您是开发人员，则可能会使用 Git。学习 Git 的代码如何工作将使您对每天使用的基本工具有更深入的了解。

2) Git is interesting! Git is a versatile tool that solves many interesting problems to allow developers to collaborate on code. As a curious human, I thoroughly enjoyed learning more about it.

2) Git 很有趣！ Git 是一种多功能工具，可以解决许多有趣的问题，能帮助开发人员在代码上进行协作。作为一个好奇的人，我非常喜欢学习更多有关它的知识。

3) Git's code is written in the **C** programming language, which offers a great opportunity for developers to branch out into an important language they may not have used much before.

3) Git 的代码是用 **C** 语言编写的，这为开发人员提供了一个很好的机会，使他们可以了解一种以前可能很少使用的重要语言。

4) Git makes use of many important programming concepts, including *content\-addressable databases, file compression/inflation, hash functions, caching,* and a *simple* *data model*. Git's code illustrates how these concepts can be implemented in a real project.

4) Git 利用了许多重要的编程概念，包括*内容寻址数据库，文件压缩/解压缩，哈希函数，缓存*和*简单的数据模型*。 Git 的代码说明了如何在实际项目中实现这些概念。

5) Git's code and design are *elegant.* It is a great example of a functional, minimalist codebase that accomplishes its goal in a clear, effective way.

5) Git 的代码和设计非常*优雅*。这是一个功能强大的极简代码库的一个很好的示例，它可以清晰有效地实现其目标。

6) Git's initial commit is small in size – it is made up of only 10 files, containing less than 1,000 total lines of code. This is very small compared to most other projects and is very manageable to understand in a reasonable amount of time.

6) Git 的初始提交代码很小，它仅由 10 个文件组成，总共包含少于 1,000 行代码。与大多数其他项目相比这是非常小的，并且在合理的时间内可以很容易地理解。

7) The code in Git's initial commit can be compiled and executed successfully. This means you can play with and test the original version of Git's code to see how it works.

7) Git 的初始提交代码可以成功编译和执行。这意味着您可以使用并测试 Git 代码的原始版本，以了解其工作原理。

Now, let's take a look at how to access the original version of Git's code.

现在，让我们看一看要如何访问 Git 代码的原始版本。

## How to check out Git's initial commit?
## 如何查看Git的初始提交代码呢？

The official copy of Git's codebase is hosted in [this public GitHub repository](https://github.com/git/git). However, I created a fork of Git's codebase and added extensive inline comments to the source code, to help developers easily read through it line by line.

Git 代码库的正式副本托管在[GitHub公开

](https://github.com/git/git)中。但是，我创建了 Git 代码库的一个分支，并在源码中添加了大量的行内注释以帮助开发人员轻松地逐行阅读它。

Since I worked off of the very first commit in Git's history, I named this project **Baby Git**. The Baby Git codebase is located in [this public BitBucket repository](https://bitbucket.org/jacobstopak/baby-git).

由于这是我 Git 历史上的第一次工作，所以我把项目命名为 **Baby Git**。Baby Git 的代码库托管在[BitBucket 的公开仓库](https://bitbucket.org/jacobstopak/baby-git)中。


I recommend cloning the Baby Git codebase to your local machine by running the following command in your terminal:

我建议通过在终端中运行以下命令将 Baby Git 代码库 clone 到您本地计算机：

```sh
git clone https://bitbucket.org/jacobstopak/baby-git.git
```

If you want to stick with Git's original codebase (without the extensive comments I added), use this command instead:

如果您想坚持使用 Git 的原始代码库（即无需我所添加的大量注释），请改用以下命令：

```sh
git clone https://github.com/git/git.git
```

Browse into the new `git` directory by running the command `cd git`. Feel free to poke around the folders and files in here.

通过运行命令 `cd git` 跳转到新生成的 `git` 目录，随意浏览下里面的文件夹和文件。

You'll quickly notice that in the current version of Git – the version currently checked out in your working directory – that there are **a lot** of files containing a lot of very long and complicated\-looking code.

您会很快注意到，在您工作目录 checked out 的 Git 当前版本中，有**大量**的文件包含许多非常长而且看起来很复杂的代码。

Clearly this current version of Git is too big for a single developer to realistically get acquainted with in a reasonable amount of time.

显然当前的 Git 版本代码库太大了，很难让单个开发人员在短时间内熟悉它。

Let's simplify things by checking out Git's initial commit, using the command:

让我们使用以下命令 checked out Git 的初始提交来简化这事情：

```sh
git log --reverse
```

This shows a list of Git's commit log in reverse order, starting from Git's initial commit. Note that the first commit ID in the list is `e83c5163316f89bfbde7d9ab23ca2e25604af290`.

列表逆序（即与最新日期在前相反）显示了从 Git 第一次提交代码到现在的提交日志。列表里第一次提交的 ID 是 `e83c5163316f89bfbde7d9ab23ca2e25604af290`。

Check out the contents of this commit into the working directory by running the command:

通过运行命令以下命令把第一次提交的内容 check out 到您的工作目录：

```sh
git checkout e83c5163316f89bfbde7d9ab23ca2e25604af290
```

This [puts Git into a *detached head state*](https://initialcommit.com/blog/what-is-git-head) and places Git's original code files into the working directory.

这会让 [Git 进入 *分离头指针状态*](https://initialcommit.com/blog/what-is-git-head)，并把 Git 的源代码检出到您的工作目录。

Now run the `ls` command to list these files, and note that there are only 10 that actually contain code! (The 11th is just a README). Understanding the code in these files is totally manageable for an intermediate developer!

现在运行 'ls' 命令列出所有文件，注意里面只有 10 个文件真正包含代码（第 11 个只是自述文件）。对于中级开发人员来说理解这些文件中的代码是完全可预期的！

**Note:** If you're using my Baby Git repository, you'll want to run the command `git checkout master` to abandon the detached head and move back to the tip of the master branch. This will enable you to see all the inline comments describing how Git's code works line by line!

**注意：** 如果您使用的是 Baby Git 仓库，则需要运行命令 `git checkout master` 来放弃分离的头部，然后移回 master 分支。 这将使您能够查看所有描述 Git 的代码如何逐行工作的行内注释！

## Important C Concepts that Will Help You Understand Git's Code

## 一些重要的 C 概念将帮助您理解 Git 的代码

Before diving straight into Git's code, it helps to get a refresher on a few C programming concepts that appear throughout the codebase.

在深入研究 Git 的代码之前，它有助于重新了解整个代码库中出现的一些 C 编程概念。

### C Header Files

### C 头文件

A C header file is a code file ending in the `.h` extension. Header files are used to store variables, functions, and other C objects that a developer wants to include in multiple `.c` source code files using the `#include "headerFile.h"` directive.

C 头文件是一个扩展名为 `.h` 的代码文件。头文件用于存储开发人员希望使用 `#include "headerFile.h"` 指令将其包括在多个 `.c` 源代码文件中的变量，函数和其他 C 对象。

If you're familiar with importing files in Python or Java, this is a comparable procedure.

如果您熟悉用 Python 或 Java 导入文件，那么这是一个类似的过程。

### C Function Prototypes (or Function Signatures)

### C 函数原型（或函数签名）

A function prototype or signature tells the C compiler information about a function definition – the function's name, number of argument, types of arguments, and return type – without providing a function body. They help the C compiler identify function properties in situations where the function body appears after the function is called.

一个函数原型或签名告诉 C 编译器有关函数定义的信息 —— 函数名称、参数数量、参数类型和返回值类型，但无需提供函数体。它们帮助 C 编译器在有函数体的情况下调用函数识别函数属性。

Here is an example of a function prototype:

下面是一个关于函数原型的例子：

```c
int multiplyNumbers(int a, int b);
```

### C Macros

### C 语言的宏

A macro in C is essentially a rudimentary variable that is processed before code compilation in a C program. Macros are created using the `#define` directive, such as:

C 语言中的宏本质上是一个基本变量，在 C 程序中的代码编译之前先进行处理。宏是使用 `#define` 指令创建的，例如：

```c
#define TESTMACRO asdf
```

This creates a macro called `TESTMACRO` with a value of `asdf`. Wherever the placeholder `TESTMACRO` is used in the code, it will be replaced by the preprocessor (before code compilation) with the value `asdf`.

这将创建一个名为 `TESTMACRO` 的宏，其值为 `asdf`。在代码中使用占位符 `TESTMACRO` 的任何地方，它将被预处理器（在代码编译之前）替换为值 `asdf`。

Macros are commonly used in a few ways:

宏通常在以下几种情况使用：

*   As a true/false switch by checking whether a macro is defined
*   作为一个 true/false 的开关检查宏是否定义
*   To store a simple integer or string value to be replaced in the code in multiple locations
*   替换在代码中的多个位置出现的简单整数或字符串值
*   To store a simple (usually one\-line) code snippet to be replaced in the code in multiple locations
*   替换在代码中的多个位置出现的简单（通常为单行）代码段

Macros are convenient tools since they enable developers to update a single line of code which influences the behavior of the code in multiple locations.

宏是方便的工具，因为它们使开发人员可以更新一行代码影响代码在多个位置的行为。


### C Structs

### C 语言结构体

A struct in C is a grouped set of properties that are related to a single object.

C 语言中的结构体是一组属性的集合组成的单个对象。

You are probably familiar with Classes in languages such as Java and Python. A struct is a predecessor to a class – it can be thought of as a primitive class with no methods.

您可能熟悉 Java 和 Python 等语言中的类，结构体其实就是类的前身，它可以认为是一个不包含方法的原始类。

```c
struct person {

	int person_id;
	char *first_name;
	char *last_name;

};
```

This struct represents a person, by grouping together an ID field, along with the person's first and last names. A variable can be instantiated and initialized from this struct as follows:


上面这个结构体代表一个由 ID 属性、名字属性、姓氏属性组成的人，可以通过以下方式实例化和初始化一个变量：
```c
struct person jacob = { 1, "Jacob", "Stopak" };
```

Struct properties can be retrieved using the dot operator:

结构体属性取值通过 `.` 操作完成：

```c
jacob.person_id
jacob.first_name
jacob.last_name
```

### C Pointers

### C 语言中的指针

A pointer is a memory address of a variable – it is the memory address at which the value of that variable is stored.

指针就是变量的内存地址，该内存地址用于存储变量的值。

A pointer to an existing variable can be obtained by using the `&` symbol, and stored in a pointer variable declared with the `*` symbol:

可以使用 `＆` 符号获取指向现有变量的指针，并将其存储在以 `*` 符号声明的指针变量中：

```c
int age = 21;

int* age_pointer = &age;
```

This snippet defines the variable `age` and assigns it a value of 21. Then it defines a *pointer to an integer* called `age_pointer`, and uses the `&` to obtain the memory address that the value of the age variable is stored at.

上面这段代码定义了一个`age` 变量，并给其赋值为 21 。然后定义了一个整型的指针变量叫 `age_pointer`，再使用 `&` 获得 `age` 变量的内存地址存储在指针 `age_pointer` 中。

Pointers can be *dereferenced* (i.e. obtain the value stored at the memory address), using the `*` as well.

```c
int new_age = *age_pointer + 10;
```

Continuing from our previous example, we use the `*age_pointer` syntax to fetch the value stored in the pointer (21), and add 10 to it. So the `new_age` variable would contain a value of 31.

继续前面的示例， 我们使用 `*age_pointer` 的语法获取指针 `age_pointer` 内存地址存储的值（21），然后加上 10 把新值 31 赋值给变量 `new_age`。

Now that our short segue into C programming is completed, let's get back to Git's code.

现在我们对 C 语言的简单回顾就完成了，让我们回到 Git 的代码吧！

## Overview of Git's Codebase Structure

## Git 代码库结构概述

There are ten relevant code files that make up Git's initial commit. We'll start by briefly discussing these two:

Git 初次提交的代码由 10 个相关的代码文件组成，让我们简要从下面两个文件开始讨论：

*   Makefile
*   cache.h

We'll discuss `Makefile` and `cache.h` first because they are a bit special.

我们首先讨论 `Makefile` 和 `cache.h`，因为它们有一点点特殊。

`Makefile` is a build file that contains a set of commands used to build the other source code files into executables.

`Makefile` 是一个构建文件，其中包含一组用于将其他源代码文件构建为可执行文件的命令。
Makefile是一个构建文件，

When you run the command `make all` from the command line, the Makefile will compile the source code files and spit out the relevant executables for Git's commands. If you're interested, I wrote an [in\-depth guide on Git's makefile](https://initialcommit.com/blog/Learn-Git-Makefile).


当您从命令行运行 `make all` 命令时，这个 `Makefile` 文件将会编译源代码并生成 Git 命令的相关可执行文件。如果你感兴趣，我写了一份 [深入了解 Git 的 makefile 的指南](https://initialcommit.com/blog/Learn-Git-Makefile)。

**Note:** If you actually want to compile Git's code locally, which I recommend you do, you'll need to use my Baby Git version of the code mentioned above. The reason is that I made some tweaks to allow Git's original code to compile on modern operating systems.

**注意** 如果您确实像我推荐的那样想在本地编译 Git 的源码，那么您需要使用上面我提到的版本 Baby Git，因为我做了一些调整让 Git 的源代码可以在现代操作系统上编译。


Next up is the `cache.h` file, which is Baby Git's only header file. As mentioned above, the header file defines many of the function signatures, structs, macros, and other settings that are used in the `.c` source code files. If you're curious, I wrote an [in\-depth guide on Git's header file](https://initialcommit.com/blog/Learn-Git-Header-Files).

接下来是 `cache.h` 文件，这是 Baby Git 唯一的头文件。如上所述，头文件定义了剩下 `.c` 源代码文件中使用的许多函数签名、结构体、宏以及其他设置。如果您感到好奇，我写了一篇 [深入了解 Git 头文件的指南](https://initialcommit.com/blog/Learn-Git-Header-Files)。


The remaining eight code files are all `.c` source code files:

其余 8 个代码文件都是 `.c` 源代码文件：

*   `init-db.c`
*   `update-cache.c`
*   `read-cache.c`
*   `write-tree.c`
*   `commit-tree.c`
*   `read-tree.c`
*   `cat-file.c`
*   `show-diff.c`

Each file (except `read-cache.c`) is named after the Git command that it contains the code for – some probably look familiar to you. For example, the `init-db.c` file contains the code for the `init-db` command used to initialize a new Git repository. As you probably guessed, this was the precursor to the `git init` command.

每个文件（`read-cache.c` 除外）均以包含该代码的 Git 命令命名，您可能对其中的某些文件很熟悉。比如 `init-db.c` 文件包含用于初始化新 Git 仓库的 `init-db` 命令的代码。您可能已经猜到了，这是 `git init` 命令的前身。

In fact, each of these `.c` files (except `read-cache.c`) contains the code for one of the original eight Git commands. The build process compiles each of these files and creates an executable file (with matching name) for each one. Once these executables are added to the filesystem path, they can be executed similarly to any modern Git command.

实际上每个 `.c` 文件（`read-cache.c` 除外）都包含原始的 8 个 Git 命令之一的代码，构建过程将编译每个文件并为每个文件创建一个可执行文件（具有匹配的名称）。将这些可执行文件添加到文件系统路径后，即可像执行任何现代 Git 命令一样执行它们。

So after compiling the code using the `make all` command, the following executables are produced:

因此使用 `make all` 命令编译代码后，将生成以下可执行文件：

*   `init-db`: Initializes a new Git repository. Equivalent to `git init`.
*    `init-db`：初始化一个新的 Git 仓库，相当于 `git init`
*   `update-cache`: Add a file to the staging index. Equivalent to `git add`.
*   `update-cache`：添加一个新文件到暂存区，相当于 `git add`
*   `write-tree`: Creates a tree object in the Git repository from the current index contents.
*   `write-tree`：根据当前索引内容在 Git 仓库中创建树对象（即目录结构）
*   `commit-tree`: Creates a new commit object in the Git repository. Equivalent to `git commit`.
*   `commit-tree`：在 Git 仓库中创建一个新的提交对象。相当于 `git commit`
*   `read-tree`: Print out the contents of a tree from the Git repository.
*   `read-tree`：从 Git 仓库中打印出树（即目录结构）的内容
*   `cat-file`: Retrieve the the contents of an object from the Git repository, and store it in a temporary file in the current directory. Equivalent to `git show`.
*   `cat-file`：从 Git 仓库中检索对象的内容，并将其存储在当前目录中的临时文件中。相当于 `git show`
*   `show-diff`: Show the differences between files staged in the index and the current versions of those files as they exist in the filesystem. Equivalent to `git diff`.
*   `show-diff`：显示索引中暂存的文件与文件系统中存在的这些文件的当前版本之间的差异。相当于 `git diff`。

These commands are executed individually in sequence, similar to how modern Git commands are executed as a part of standard development workflows.

这些命令按顺序分别执行，类似于现代 Git 命令作为标准开发工作流程的一部分执行的方式。

The one file we haven't discussed yet is `read-cache.c`. This file contains a set of helper functions that the other `.c` source code files use to retrieve information from the Git repository.

我们尚未讨论的一个文件是 `read-cache.c`。该文件包含一组其他 `.c` 源代码文件用于从 Git 仓库中检索信息的辅助函数。

Now that we've touched on each of the important files in Git's initial commit, let's discuss some of the core programming concepts that allow Git to function.

现在我们已经接触到了 Git 最初提交中的每个重要文件，让我们讨论一些让 Git 起作用的核心编程概念。

## Implementation of Git's Core Concepts

## Git 核心概念的实现

In this section, we'll discuss the following programming concepts that Git uses to work its magic, as well as how they were implemented in Git's original code:

在这部分中，我们将讨论 Git 用于实现其魔力的以下编程概念，以及它们在 Git 的原始代码中是如何实现的：

*   File compression
*   文件压缩
*   Hash function
*   哈希函数
*   Objects
*   Git 对象
*   Current directory cache (staging area)
*   当前目录缓存（暂存区）
*   Content addressable database (object database)
*   内容寻址数据库（对象数据库）

### File Compression

### 文件压缩

File compression, also know as deflation, is used for storage and performance efficiency in Git. This reduces the size of the files that Git stores on disk and increases the speed of data retrieval when Git needs to transfer these files across a network.

文件压缩（也称为缩放）用于 Git 中的存储和提高性能。当 Git 需要通过网络传输这些文件时，这会减小 Git 存储在磁盘上的文件的大小并提高数据检索的速度。

This is important since Git's local and network operations need to be as fast as possible. As a part of the data retrieval process, Git decompresses, or inflates, the files to obtain their content.

这很重要，因为 Git 的本地和网络操作需要尽可能快。作为数据检索过程的一部分，Git 对文件进行解压缩或扩展以获取其内容。

![](https://www.freecodecamp.org/news/content/images/2021/03/image-37.png)

Source: https://initialcommit.com/blog/Learn\-Git\-Guidebook\-For\-Developers\-Chapter\-2

File deflation and inflation were implemented in Git's original code using the popular `zlib.h` C library. This library contains functions, structures, and properties for compressing and decompressing content. Specifically, `Zlib` defines a `z_stream` struct that is used to hold the content that is to be deflated or inflated.

在 Git 的原始代码中使用流行的 `zlib.h` C 语言库实现了文件压缩和解压缩，该库包含用于压缩和解压缩内容的函数、结构体和属性。具体来说，`Zlib` 库定义了一个结构体 `z_stream` 用于保存要压缩或扩展的内容。

The following `zlib` functions are used to *initialize* a stream for deflation or inflation, respectively:

下面的 `zlib` 库函数用于*初始化*一个流以进行压缩和解压缩，它们分别是：

```c
/*
 * Initializes the internal `z_stream` state
 * for compression at `level`, which indicates
 * scale of speed versuss compression on a
 * scale from 0-9. Sourced from <zlib.h>.
 */
deflateInit(z_stream, level);

/*
 * Initializes the internal `z_stream` state for
 * decompression. Sourced from <zlib.h>.
 */
inflateInit(z_stream);
```

The following `zlib` functions are used to perform the actual deflation and inflation operations:

```c
/*
 * Compresses as much data as possible and stops
 * when the input buffer becomes empty or the
 * output buffer becomes full. Sourced from <zlib.h>.
 */
deflate(z_stream, flush);

/*
 * Decompresses as much data as possible and stops
 * when the input buffer becomes empty or the
 * output buffer becomes full. Sourced from <zlib.h>.
 */
inflate(z_stream, flush);
```

The actual deflation/inflation process is a bit more complex than this and involves setting several parameters of the compression stream, but we won't go into more detail here.

实际的压缩、解压缩过程要比这复杂得多，并且涉及设置压缩流的几个参数，但是我们在这里不做更多详细介绍。

Next, we'll discuss the concept of hash functions and how they are implemented in Git's original code.

接下来，我们将讨论哈希函数的概念以及如何在 Git 的源代码中实现它们。

### Hash Functions

### 哈希函数

A hash function is a function that can easily transform an input into a unique output, but makes it very difficult or impossible to reverse that operation. In other words, it is a **one\-way function**. It is not possible with today's technology to use the output of a hash function to deduce the input that was used to generate that output.

哈希函数是一种可以轻松将输入转换为唯一输出但反转该操作非常困难或不可能的函数。换句话说，它是一种 **单向函数**，在当今的技术下不可能使用哈希函数的输出来推断用于生成该输出的输入。

Git uses a hash function – specifically the SHA\-1 hash function – to generate unique identifiers for the files we tell Git to track.

Git 使用哈希函数，特别是用 SHA-1 哈希函数为我们让 Git 跟踪的文件生成唯一标识符。

As developers, we make changes to the code files in the codebase we are working on using a text editor, and at some point we tell Git to track those changes. At this point, Git uses those file changes as inputs for the hash function.

作为开发人员，我们使用文本编辑器对正在使用的代码库中的代码文件进行更改，并在某些时候告诉 Git 跟踪这些更改。此时，Git 使用这些文件更改信息作为哈希函数的输入。

The output to the hash function is called a **hash***.* The hash is a hexadecimal value 40 characters in length, such as `47a013e660d408619d894b20806b1d5086aab03b`.

哈希函数的输出称为一个 **哈希值**值。哈希值是一个长度为 40 个字符的十六进制值数，例如 `47a013e660d408619d894b20806b1d5086aab03b`。


![Git hash function](https://initialcommit.com/img/initialcommit/figure5.png "Git hash function")


Source: https://initialcommit.com/blog/Learn\-Git\-Guidebook\-For\-Developers\-Chapter\-2

Git uses these hashes for various purposes that we will see in the following sections.

Git 将这些哈希用于各种目的，我们将在以下各节中看到它们。

### Objects

### Git 对象

Git uses a simple data model – a structured set of related objects – to implement its functionality. These objects are the nuggets of information that enable Git to track changes to the files of a codebase. The three types of objects that Git uses are:

Git 使用一个简单的数据模型（结构化的相关对象集）来实现其功能。 这些对象是信息块，这些信息块使 Git 能够跟踪对代码库文件的更改。 Git 使用的三种对象类型是：

*   Blob
*   数据对象
*   Tree
*   树对象
*   Commit
*   提交对象

Let's discuss each one in turn.

让我们按顺序逐个讨论。

#### Blob

#### 数据对象

A blob is short for a **B**inary **L**arge **OB**ject. When Git is told to track a file using the `update-cache <filename.ext>` command, (the predecessor to `git add`), Git creates a new blob using the compressed contents of that file.

Blob 是 **B**inary **L**arge **OB**ject（数据对象）的缩写形式，当使用 `update-cache <filename.ext>` 命令（`git add` 的前身）告诉 Git 跟踪文件时，Git 使用该文件的压缩内容创建一个新的数据对象。

Git takes the content of the file, compresses it using the `zlib` functions we described above, and uses this compressed content as input to the SHA\-1 hash function. This creates a 40 character hash that Git uses to identify the blob in question.

Git 获取文件的内容并使用我们上面描述的 `zlib` 函数对其进行压缩，再将此压缩后的内容用作 SHA-1 哈希函数的输入，这会创建一个 40 个字符的哈希，Git 会使用该哈希来识别相关的数据对象。

Finally, Git saves the blob as a binary file in a special folder called the **object database** (more on this in a minute). The name of the blob file is the generated hash, and the contents of the blob file are the compressed file contents that were added using `update-cache`.

最后，Git 将数据对象作为二进制文件保存在名为 **对象数据库** 的特殊文件夹中（稍后会详细介绍）。数据对象文件的名称是生成的哈希，数据对象文件的内容是使用 `update-cache` 命令添加的压缩文件内容。

#### Tree

#### 树对象

Tree objects are used to link together multiple blobs that are added to Git at once. They are also used to correlate blobs with file names (and other file metadata like permissions), since blobs don't provide any information besides the hash and compressed binary file content.

树对象用于把多个数据对象在添加到 Git 的时候就组织到一起，它们还用于将数据对象与文件名（以及其他文件元数据，如权限）相关联，因为数据对象除了提供哈希和压缩的二进制文件内容外不提供任何信息。

For example, if two changed files are added using the `update-cache` command, a tree will be created containing the hashes of those files, along with the file name that each of those blobs corresponds to.

比如说，如果使用 `update-cache` 命令添加了两个更改的文件，则将创建一棵包含这些文件的哈希值以及每个数据对象所对应的文件名的树。

What Git does next is very interesting, so pay attention. Git uses **the content of the tree itself** as input to the SHA\-1 hash function, which generates a 40 character hash. This hash is used to identify the tree object, and Git saves this in the same special folder that blobs are saved in – the object database we'll touch on shortly.

Git 接下来要做的事情非常有趣，因此请注意， Git 使用**树本身的内容**作为 SHA-1 哈希函数的输入生成 40 个字符的哈希。该哈希用于标识树对象，Git 将其保存在与保存数据对象相同的特殊文件夹，即我们将在稍后讨论的对象数据库中。

#### Commit

#### 提交对象

You're probably more familiar with commit objects than with blobs and trees. A commit represents a set of file changes saved by Git, along with descriptive information about the change such as a commit message, the author's name, and the timestamp of the commit.

比起数据对象和树对象您可能对提交对象更熟悉。一个提交对象表示由 Git 保存的一组文件更改，以及有关更改的描述性信息，例如提交消息，作者的姓名和提交的时间戳。

In Git's original code, a commit object is the result of running the `commit-tree <tree-hash>` command. The resulting commit object includes the specified tree object (which remember, represents a collection of file changes via one or more blobs mapped to their file names), and the descriptive information mentioned in the previous paragraph.

在 Git 的源代码中，提交对象是运行 `commit-tree <tree-hash>` 命令的结果，生成的提交对象包括指定的树对象（记住，该树对象表示通过映射到其文件名的一个或多个数据对象表示文件更改的集合），以及上一段中提到的描述性信息。

Like blobs and trees, Git identifies the commit by hashing its content using the SHA\-1 hash function, and saving it in the object database. Importantly, each commit object also contains the hash of its parent commit. In this way, the commits form a chain that Git can use to represent the history of a project.

像数据对象和树对象一样， Git 通过使用 SHA-1 哈希函数对提交的内容进行哈希处理并将其保存在对象数据库中。重要的是，每个提交对象还包含其父提交的哈希。 这样提交就形成了一条链，Git 可以使用它来表示项目的历史记录。

### Current Directory Cache (Staging Area)

### 当前目录缓存（暂存区）

You probably know Git's staging area as the place your changed files go after using the `git add` command, patiently waiting to be committed using `git commit`. But what exactly is the staging area?

您可能知道 Git 的暂存区就是使用 `git add` 命令后更改文件耐心地等待使用 `git commit` 提交所在的位置，但是暂存区到底是什么呢？

In Git's original version, the staging area is called the **current directory cache**. The current directory cache is just a binary file stored in the repository at the path `.dircache/index`.

在 Git 的原始版本中，暂存区被称为 **当前目录缓存**，当前目录缓存只是一个存储在资源库中的二进制文件，路径为 `.dircache/index`。

As mentioned in the previous section, after changed files are added to Git using the `update-cache` (`git add`) command, Git calculates the blob and tree objects associated with those changes. The generated tree object associated with the staged files is added to the `index` file.

如上一节所述，在使用 `update-cache` (`git add`) 命令将更改的文件添加到 Git 之后，Git 会计算与这些更改关联的数据对象和树对象，然后将与暂存文件关联的生成的树对象添加到 `index` 文件中。


It is called a **cache** because it is just a temporary storage location for the staged changes to reside before being committed. When the user makes a commit by running the `commit-tree` command, the tree from the current directory cache can be supplied. It also includes other commit information like the commit message for Git to create a new commit object with.


之所以称为 **缓存**，是因为它只是保留已进行的更改在提交之前的临时存储位置，当用户通过运行`commit-tree`命令进行提交时，当前目录缓存可以提供对应的树，和其他提交信息，比如用于 Git 创建新提交对象的提交消息。

At that point the `index` file is simply removed to make room for new changes to be staged.

这时候，只是删除了index文件，为新更改暂存腾出空间。

### Content Addressable Database (Object Database)

### 内容寻址数据库（对象数据库）

The object database is Git's primary storage location. This is where all the objects we discussed above – blobs, trees, and commits – are stored. In Git's original version, the object database is simply a directory at the path `.dircache/objects/`.

对象数据库是 Git 的主要存储位置，我们上面讨论的所有对象（数据对象，树对象和提交对象）都存储在对象数据库中。在 Git 的原始版本中，对象数据库只是一个目录，路径是 `.dircache/objects/`。

When Git creates objects through operations such as `update-cache`, `write-tree`, and `commit-tree`, (the predecessors of `git add` and `git commit`), these objects are compressed, hashed, and stored in the object database.

当 Git 通过诸如 `update-cache`，`write-tree` 和 `commit-tree'（`git add` 和 `git commit` 的前身）之类的操作创建对象时，这些对象将被压缩，再进行哈希，然后存储在对象数据库中。

The name of each object is the hash of its content, hence why the object database is also called a **content addressable database***.*  Each piece of content (blob, tree, or commit) is stored and retrieved based on an identifier generated from the content itself.

每个对象的名称都是其内容的哈希值，这也是对象数据库为什么也叫作 **内容寻址数据库** 的原因。每块内容（数据对象、树对象或者提交对象）都基于从内容本身生成的标识符进行存储和检索。

The modern version of Git works very much the same way. The difference is that storage formats have been optimized to use more efficient methods (especially related to data transfer over networks), but the basic principles are the same.

现代版本的 Git 的工作方式几乎相同。不同之处在于现代版本的 Git 通过使用更有效的方法（尤其是与通过网络进行数据传输有关的方法）已经对存储格式进行了优化，但是基本原理是相同的。

## Summary

## 总结

In this article, we discussed the original version of Git's code in order to highlight how reading existing code can help boost your coding skills.

在本文中我们讨论了 Git 代码的原始版本，以突出显示如何阅读现有代码可以帮助提高您的编码技能。

We covered the reasons Git is a great project to learn from in this way, how to access Git's code, and reviewed some related C programming concepts. Finally, we provided an overview of Git's original codebase structure and dove into some concepts that Git's code relies on.

我们介绍了以这种方式学习为什么 Git 是一个的好项目的原因，如何访问 Git 的代码，并回顾了一些相关的 C 编程概念。 最后，我们提供了 Git 原始代码库结构的概述，并深入探讨了 Git 代码所依赖的一些概念。

## Next Steps

## 下一步

If you're interested in learning more about Git's code, [we wrote a guidebook you can check out here](https://initialcommit.com/store/baby-git-guidebook-for-developers). This book dives into Git's original C code in detail and directly explains how the code works.

如果您有兴趣了解有关 Git 代码的更多信息，[我们编写了一本指南，您可以在此处查看](https://initialcommit.com/store/baby-git-guidebook-for-developers)。 这本书详细介绍了 Git 的原始 C 代码，并直接说明了该代码是怎么工作的。

I encourage any and all developers to explore the open\-source community to try and find quality projects that interest you. Those projects will have codebases that you can clone down in a matter of minutes.

我鼓励所有开发人员探索开源社区去尝试找到您感兴趣的高质量项目，这些项目将具有您可以在几分钟内克隆的代码库。

Take some time to poke around the code, and you might learn something you never expected to find.

花一些时间来探究一下代码，您可能会学到一些从未想到的东西。
