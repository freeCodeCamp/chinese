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

由于这是我 Git 历史上的第一次工作，所以我把项目命名为 **Baby Git**。Baby Git 的代码库托管在[BitBucket 的公开资源库](https://bitbucket.org/jacobstopak/baby-git)中。


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

**注意：** 如果您使用的是 Baby Git 资源库，则需要运行命令 `git checkout master` 来放弃分离的头部，然后移回 master 分支。 这将使您能够查看所有描述 Git 的代码如何逐行工作的行内注释！

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

A struct in C is a grouped set of properties that are related to a single object.

You are probably familiar with Classes in languages such as Java and Python. A struct is a predecessor to a class – it can be thought of as a primitive class with no methods.

```c
struct person {

	int person_id;
	char *first_name;
	char *last_name;

};
```

This struct represents a person, by grouping together an ID field, along with the person's first and last names. A variable can be instantiated and initialized from this struct as follows:

```c
struct person jacob = { 1, "Jacob", "Stopak" };
```

Struct properties can be retrieved using the dot operator:

```c
jacob.person_id
jacob.first_name
jacob.last_name
```

### C Pointers

A pointer is a memory address of a variable – it is the memory address at which the value of that variable is stored.

A pointer to an existing variable can be obtained by using the `&` symbol, and stored in a pointer variable declared with the `*` symbol:

```c
int age = 21;

int* age_pointer = &age;
```

This snippet defines the variable `age` and assigns it a value of 21. Then it defines a *pointer to an integer* called `age_pointer`, and uses the `&` to obtain the memory address that the value of the age variable is stored at.

Pointers can be *dereferenced* (i.e. obtain the value stored at the memory address), using the `*` as well.

```c
int new_age = *age_pointer + 10;
```

Continuing from our previous example, we use the `*age_pointer` syntax to fetch the value stored in the pointer (21), and add 10 to it. So the `new_age` variable would contain a value of 31.

Now that our short segue into C programming is completed, let's get back to Git's code.

## Overview of Git's Codebase Structure

There are ten relevant code files that make up Git's initial commit. We'll start by briefly discussing these two:

*   Makefile
*   cache.h

We'll discuss `Makefile` and `cache.h` first because they are a bit special.

`Makefile` is a build file that contains a set of commands used to build the other source code files into executables.

When you run the command `make all` from the command line, the Makefile will compile the source code files and spit out the relevant executables for Git's commands. If you're interested, I wrote an [in\-depth guide on Git's makefile](https://initialcommit.com/blog/Learn-Git-Makefile).

**Note:** If you actually want to compile Git's code locally, which I recommend you do, you'll need to use my Baby Git version of the code mentioned above. The reason is that I made some tweaks to allow Git's original code to compile on modern operating systems.

Next up is the `cache.h` file, which is Baby Git's only header file. As mentioned above, the header file defines many of the function signatures, structs, macros, and other settings that are used in the `.c` source code files. If you're curious, I wrote an [in\-depth guide on Git's header file](https://initialcommit.com/blog/Learn-Git-Header-Files).

The remaining eight code files are all `.c` source code files:

*   `init-db.c`
*   `update-cache.c`
*   `read-cache.c`
*   `write-tree.c`
*   `commit-tree.c`
*   `read-tree.c`
*   `cat-file.c`
*   `show-diff.c`

Each file (except `read-cache.c`) is named after the Git command that it contains the code for – some probably look familiar to you. For example, the `init-db.c` file contains the code for the `init-db` command used to initialize a new Git repository. As you probably guessed, this was the precursor to the `git init` command.

In fact, each of these `.c` files (except `read-cache.c`) contains the code for one of the original eight Git commands. The build process compiles each of these files and creates an executable file (with matching name) for each one. Once these executables are added to the filesystem path, they can be executed similarly to any modern Git command.

So after compiling the code using the `make all` command, the following executables are produced:

*   `init-db`: Initializes a new Git repository. Equivalent to `git init`.
*   `update-cache`: Add a file to the staging index. Equivalent to `git add`.
*   `write-tree`: Creates a tree object in the Git repository from the current index contents.
*   `commit-tree`: Creates a new commit object in the Git repository. Equivalent to `git commit`.
*   `read-tree`: Print out the contents of a tree from the Git repository.
*   `cat-file`: Retrieve the the contents of an object from the Git repository, and store it in a temporary file in the current directory. Equivalent to `git show`.
*   `show-diff`: Show the differences between files staged in the index and the current versions of those files as they exist in the filesystem. Equivalent to `git diff`.

These commands are executed individually in sequence, similar to how modern Git commands are executed as a part of standard development workflows.

The one file we haven't discussed yet is `read-cache.c`. This file contains a set of helper functions that the other `.c` source code files use to retrieve information from the Git repository.

Now that we've touched on each of the important files in Git's initial commit, let's discuss some of the core programming concepts that allow Git to function.

## Implementation of Git's Core Concepts

In this section, we'll discuss the following programming concepts that Git uses to work its magic, as well as how they were implemented in Git's original code:

*   File compression
*   Hash function
*   Objects
*   Current directory cache (staging area)
*   Content addressable database (object database)

### File Compression

File compression, also know as deflation, is used for storage and performance efficiency in Git. This reduces the size of the files that Git stores on disk and increases the speed of data retrieval when Git needs to transfer these files across a network.

This is important since Git's local and network operations need to be as fast as possible. As a part of the data retrieval process, Git decompresses, or inflates, the files to obtain their content.

![](https://www.freecodecamp.org/news/content/images/2021/03/image-37.png)

Source: https://initialcommit.com/blog/Learn\-Git\-Guidebook\-For\-Developers\-Chapter\-2

File deflation and inflation were implemented in Git's original code using the popular `zlib.h` C library. This library contains functions, structures, and properties for compressing and decompressing content. Specifically, `Zlib` defines a `z_stream` struct that is used to hold the content that is to be deflated or inflated.

The following `zlib` functions are used to *initialize* a stream for deflation or inflation, respectively:

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

Next, we'll discuss the concept of hash functions and how they are implemented in Git's original code.

### Hash Functions

A hash function is a function that can easily transform an input into a unique output, but makes it very difficult or impossible to reverse that operation. In other words, it is a **one\-way function**. It is not possible with today's technology to use the output of a hash function to deduce the input that was used to generate that output.

Git uses a hash function – specifically the SHA\-1 hash function – to generate unique identifiers for the files we tell Git to track.

As developers, we make changes to the code files in the codebase we are working on using a text editor, and at some point we tell Git to track those changes. At this point, Git uses those file changes as inputs for the hash function.

The output to the hash function is called a **hash***.* The hash is a hexadecimal value 40 characters in length, such as `47a013e660d408619d894b20806b1d5086aab03b`.

![Git hash function](https://initialcommit.com/img/initialcommit/figure5.png "Git hash function")

Source: https://initialcommit.com/blog/Learn\-Git\-Guidebook\-For\-Developers\-Chapter\-2

Git uses these hashes for various purposes that we will see in the following sections.

### Objects

Git uses a simple data model – a structured set of related objects – to implement its functionality. These objects are the nuggets of information that enable Git to track changes to the files of a codebase. The three types of objects that Git uses are:

*   Blob
*   Tree
*   Commit

Let's discuss each one in turn.

#### Blob

A blob is short for a **B**inary **L**arge **OB**ject. When Git is told to track a file using the `update-cache <filename.ext>` command, (the predecessor to `git add`), Git creates a new blob using the compressed contents of that file.

Git takes the content of the file, compresses it using the `zlib` functions we described above, and uses this compressed content as input to the SHA\-1 hash function. This creates a 40 character hash that Git uses to identify the blob in question.

Finally, Git saves the blob as a binary file in a special folder called the **object database** (more on this in a minute). The name of the blob file is the generated hash, and the contents of the blob file are the compressed file contents that were added using `update-cache`.

#### Tree

Tree objects are used to link together multiple blobs that are added to Git at once. They are also used to correlate blobs with file names (and other file metadata like permissions), since blobs don't provide any information besides the hash and compressed binary file content.

For example, if two changed files are added using the `update-cache` command, a tree will be created containing the hashes of those files, along with the file name that each of those blobs corresponds to.

What Git does next is very interesting, so pay attention. Git uses **the content of the tree itself** as input to the SHA\-1 hash function, which generates a 40 character hash. This hash is used to identify the tree object, and Git saves this in the same special folder that blobs are saved in – the object database we'll touch on shortly.

#### Commit

You're probably more familiar with commit objects than with blobs and trees. A commit represents a set of file changes saved by Git, along with descriptive information about the change such as a commit message, the author's name, and the timestamp of the commit.

In Git's original code, a commit object is the result of running the `commit-tree <tree-hash>` command. The resulting commit object includes the specified tree object (which remember, represents a collection of file changes via one or more blobs mapped to their file names), and the descriptive information mentioned in the previous paragraph.

Like blobs and trees, Git identifies the commit by hashing its content using the SHA\-1 hash function, and saving it in the object database. Importantly, each commit object also contains the hash of its parent commit. In this way, the commits form a chain that Git can use to represent the history of a project.

### Current Directory Cache (Staging Area)

You probably know Git's staging area as the place your changed files go after using the `git add` command, patiently waiting to be committed using `git commit`. But what exactly is the staging area?

In Git's original version, the staging area is called the **current directory cache**. The current directory cache is just a binary file stored in the repository at the path `.dircache/index`.

As mentioned in the previous section, after changed files are added to Git using the `update-cache` (`git add`) command, Git calculates the blob and tree objects associated with those changes. The generated tree object associated with the staged files is added to the `index` file.

It is called a **cache** because it is just a temporary storage location for the staged changes to reside before being committed. When the user makes a commit by running the `commit-tree` command, the tree from the current directory cache can be supplied. It also includes other commit information like the commit message for Git to create a new commit object with.

At that point the `index` file is simply removed to make room for new changes to be staged.

### Content Addressable Database (Object Database)

The object database is Git's primary storage location. This is where all the objects we discussed above – blobs, trees, and commits – are stored. In Git's original version, the object database is simply a directory at the path `.dircache/objects/`.

When Git creates objects through operations such as `update-cache`, `write-tree`, and `commit-tree`, (the predecessors of `git add` and `git commit`), these objects are compressed, hashed, and stored in the object database.

The name of each object is the hash of its content, hence why the object database is also called a **content addressable database***.*  Each piece of content (blob, tree, or commit) is stored and retrieved based on an identifier generated from the content itself.

The modern version of Git works very much the same way. The difference is that storage formats have been optimized to use more efficient methods (especially related to data transfer over networks), but the basic principles are the same.

## Summary

In this article, we discussed the original version of Git's code in order to highlight how reading existing code can help boost your coding skills.

We covered the reasons Git is a great project to learn from in this way, how to access Git's code, and reviewed some related C programming concepts. Finally, we provided an overview of Git's original codebase structure and dove into some concepts that Git's code relies on.

## Next Steps

If you're interested in learning more about Git's code, [we wrote a guidebook you can check out here](https://initialcommit.com/store/baby-git-guidebook-for-developers). This book dives into Git's original C code in detail and directly explains how the code works.

I encourage any and all developers to explore the open\-source community to try and find quality projects that interest you. Those projects will have codebases that you can clone down in a matter of minutes.

Take some time to poke around the code, and you might learn something you never expected to find.
