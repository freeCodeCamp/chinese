> - 原文地址：[What is a Compiler? Compilers in C Explained for Beginners](https://www.freecodecamp.org/news/what-is-a-compiler-in-c/)
> - 原文作者：[Tiago Monteiro](https://www.freecodecamp.org/news/author/tiago/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![What is a Compiler? Compilers in C Explained for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/1-YhjIVZXE56R6YZaTF-Lzig.jpeg)

你知道吗，正是由于编译器的存在，软件才得以存在？

没错--编译器非常重要，所有编程语言都存在某种形式的编译器。

但是，什么是编译器？它们到底是做什么的？

这篇文章将教你。

1. 用一个比喻说明什么是编译器。
2. C语言编译器的基本历史。

别担心，你不需要编程经验就能理解什么是编译器。

你只需要先了解这个概念，然后如果你愿意，你可以去了解技术定义。

## 1\. 什么是编译器？打个比方

![Image of phone](https://miro.medium.com/max/1400/1*xFzl6UbF6XI6V0_Tnx-PYg.jpeg)

图片 [**Tyler Lastovich**](https://www.pexels.com/@lastly?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) 来自 [**Pexels**](https://www.pexels.com/photo/black-iphone-7-on-brown-table-699122/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)

想象一下，你正在学习一种语言（法语、西班牙语或葡萄牙语），你想知道某个单词或句子的意思。

要做到这一点，你要使用谷歌翻译。

**第一步** 是知道你将在谷歌翻译中输入什么，并检查它是否输入正确。
**第二步** 是选择你要转换的语言。对于许多读者来说，这将是英语。

**第三步** 也是最后一步，就是了解这句话在英语中的含义。

基本上，你只是在谷歌翻译中输入了一个你不理解的句子或单词。谷歌翻译将该句子翻译成英语。

![Translating nadar(portuguese) to swimming(english) ](https://miro.medium.com/max/1400/1*c-mJCyjYTrVguxSgsgYvrQ.png)

例如：nadar(葡萄牙语) -> swimming(英语)

同样的事情也发生在编程中。

在这种情况下，我们使用的是C语言。

你必须采取知道你将在.c文件中输入什么，以及它的输入是否正确。

在这个例子中，该文件被称为main.c

```C
#include <stdio.h>

int main()
{
 printf("Hello World");
    
    return 0;
}
```

![Code that will print "Hello world" in a console](https://miro.medium.com/max/1400/1*BtjyNkvX0eboU5JVsD0ayQ.png)

**第一步，打印出 'Hello World'**

第二步 是编译它。它将根据你使用的编译器进行编译。

```Bash
gcc -o main main.c -Wall
```

![Bash command that compiles code](https://miro.medium.com/max/1400/1*cqSo_NpYOYKdSjlBs8_EiQ.png)

**第二步： 编译c代码的命令**

第三步，也是最后一步，就是简单地了解程序的输出情况--确保它是按照我们的要求运行。

快速提示：如果你想知道命令行终端的每个字是什么意思，本文中会在下面说清楚

![Hello world](https://miro.medium.com/max/1400/1*3oyRNX8txXm3RQrq3XBWNQ.png)

**第三步: Hello world!**

你可以在下面的图片中看到对编译过程的直观解释:

![Visual comparason os ytranslating a file with compiling a file](https://miro.medium.com/max/1400/1*gusV5pXcVHc6vUfenbiuDQ.png)

比较 C 文件的编译和单词的翻译。

## C语言编译器如何工作

![1*OH7zqS0KyPMj5qCfjM-lTA](https://miro.medium.com/max/1400/1*OH7zqS0KyPMj5qCfjM-lTA.jpeg)

图片 [**JÉSHOOTS**](https://www.pexels.com/@jeshoots?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) 来自 [**Pexels**](https://www.pexels.com/photo/person-holding-sony-ps4-dualshock-4-21067/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)

多年来，技术已经以令人难以置信的速度发展起来。这同样适用于编译器。

随着时间的推移，C语言编译器已经演变成了许多版本。

就像PlayStation--有PlayStation 2、PlayStation 3、PlayStation 4，等等。

C语言编译器的情况也是如此。一旦它被_标准化，_就会产生许多版本。:

- C89/90, a version of C once _standardized,_
- C99 代替 C89 和 C90 在 1999.
- C11 代替 C99 在 2011.
- C17 代替 C11 在 2018.
- C2X 将代替 C17 在 2023.

就像PlayStation一样，每个新版本都有新的功能。

有些人喜欢只在他们的PlayStation2上玩。

这对程序员来说也是一样的。由于各种原因，程序员可能更喜欢用C99或C11编写和调试C代码。

## 关于编译器的更多信息

我们在上面的代码中看到的_"gcc -o main main.c -Wall"_到底是什么意思？让我们把它逐个击破。

`gcc`是调用编译过程的命令（预处理、编译、汇编和连接）。

`-o main`表示编译 "main.c "后创建的可执行文件的名称将被称为 "main"。

`main.c`是要编译的文件的名称。

`-Wall` 选项启用编译器警告。编译器警告让你知道你的代码中有些地方不太对。

这类似于Grammarly。如果Grammarly建议改变一个句子，在大多数情况下，你应该改变它，使其更清晰、更正确。

否则，如果你试图改变一个已经正确的短语中的东西，它可能会变得难以辨认。

同样，如果你忽视了代码中的警告，最终会导致重大的错误，你的项目甚至可能失败。

### `标准化` 是什么意思？

所以你可能想知道，我们在上面看到的  __standardized__ 是什么意思？

![1*HcaTyHriNP7mxrhZ_Fjijw](https://miro.medium.com/max/1400/1*HcaTyHriNP7mxrhZ_Fjijw.jpeg)

图片 [**Pixabay**](https://www.pexels.com/@pixabay?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) 来自 [**Pexels**](https://www.pexels.com/photo/architecture-building-construction-daylight-534220/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)

让我们通过另一个比喻来看看它。有许多方法来建造房子。但有一种方法通常是最有效和最安全的。

正因为如此，人们和组织必须同意有一种 `标准` 的建房方式。

创建该标准的过程被称为**标准化(standardization)**。

当一套规则成为标准时，这套规则就成了**标准化的**。

这套规则可以是一条法律，一个证书，或者只是某个领域的工人使用的基本惯例。

这同样适用于C语言编译器。

正是标准化帮助人们就事情应该如何做达成一致，无论是C语言编译器、汽车部件，还是其他任何东西。

标准化还可以帮助人们就使用哪个版本的C语言达成一致。C语言编译器就是一个例子。

长期以来，C语言编译器一直被认为是软件开发的一个基本组成部分。

由于有了C语言编译器标准，开发者可以编译和运行其他人的代码，而不必担心他们的编译器无法工作。

为了创造如此重要的行业基石，必须有一个负责建立标准的组织

许多组织创建和管理标准。就C语言编译器而言，ISO（国际标准化组织）管理着这些标准。

只要ISO管理未来的C编译器标准，程序员和公司就可以开发可靠的软件。

## 结束语

谢你的阅读! 现在你明白:

- 什么是编译器
- C语言编译器的基本历史
- 标准化意味着什么

[这是GitHub仓库](https://github.com/tiagomonteiro0715/freecodecamp-my-articles-source-code)，里面有我创建的代码和图像文件。
