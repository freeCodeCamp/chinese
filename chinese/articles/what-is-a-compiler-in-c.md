> -  原文地址：[What is a Compiler? Compilers in C Explained for Beginners](https://www.freecodecamp.org/news/what-is-a-compiler-in-c/)
> -  原文作者：[Tiago Monteiro](https://www.freecodecamp.org/news/author/tiago/)
> -  译者：gyf11069
> -  校对者：

![什么是编译器？面向初学者的 C 编译器解释](https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/1-YhjIVZXE56R6YZaTF-Lzig.jpeg)

您是否知道软件的存在要归功于编译器？

确切地说 ，编译器非常重要，所有编程语言中都存在某种形式的编译器。

但是，什么是编译器？他们到底做了什么？

本文将教您：

1.  编译器是什么类比。
2.  C 编译器的基本历史。


别担心，您不需要编程经验来了解编译器是什么。

你只需要先理解这个概念，然后如果你愿意，你可以去寻求技术定义。 

## 1\. 什么是编译器？比如

![手机图片](https://miro.medium.com/max/1400/1*xFzl6UbF6XI6V0_Tnx-PYg.jpeg)

Pexels 上的[**Tyler Lastovich**](https://www.pexels.com/@lastly?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) 拍摄的照片来自 [**Pexels**](https://www.pexels.com/photo/black-iphone-7-on-brown-table-699122/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)

想象一下，您正在学习一门语言（法语，西班牙语或葡萄牙语），并且您想知道单词或句子的含义。

为此，您将使用谷歌翻译。

**第一步**是知道您将在Google翻译中键入的内容，并检查其键入是否正确。

**第二步**是选择要转换的语言。对于许多读者来说，这可能是英语。

**第三步**也是最后一步是了解这句话在英语中的含义。

从本质上讲，您只是在Google翻译中输入了您不理解的句子或单词。谷歌翻译将这句话翻译成英文。

![将nadar（葡萄牙语）翻译成游泳（英语）](https://miro.medium.com/max/1400/1*c-mJCyjYTrVguxSgsgYvrQ.png)

示例：纳达尔（葡萄牙语）–>游泳（英语）

同样的事情也发生在编程中。

在这种情况下，我们使用的是 C 语言。

您必须采取的**第一步**是知道您将在`.c`文件中键入的内容以及是否正确键入。
在此示例中，该文件称为`main.c`。

```C
#include <stdio.h>

int main()
{
	printf("Hello World");
    
    return 0;
}
```

![将在控制台中打印“Hello world”的代码 ](https://miro.medium.com/max/1400/1*BtjyNkvX0eboU5JVsD0ayQ.png)

**第一步：此代码将打印"Hello world"**

**第二步**是编译它。它将根据您拥有的编译器进行编译。

```Bash
gcc -o main main.c -Wall
```

![编译代码的 Bash 命令 ](https://miro.medium.com/max/1400/1*cqSo_NpYOYKdSjlBs8_EiQ.png)

**第二步：编译c代码的命令**

**第三步**也是最后一步是简单地了解程序的输出 - 确保它像我们想要的那样运行。

快速提示：如果你想知道命令行终端中每个单词的含义，请查看本文的“更多...”部分！

![Hello world](https://miro.medium.com/max/1400/1*3oyRNX8txXm3RQrq3XBWNQ.png)

**第三步：你好，世界！**

您可以在下图中看到编译过程的直观说明：

![翻译文件与编译文件的视觉比较 ](https://miro.medium.com/max/1400/1*gusV5pXcVHc6vUfenbiuDQ.png)

比较 C 文件的编译与单词的翻译

## C 编译器的工作原理

![1*OH7zqS0KyPMj5qCfjM-lTA](https://miro.medium.com/max/1400/1*OH7zqS0KyPMj5qCfjM-lTA.jpeg)

摄影： [**JÉSHOOTS**](https://www.pexels.com/@jeshoots?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) 来自 [**Pexels**](https://www.pexels.com/photo/person-holding-sony-ps4-dualshock-4-21067/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)

多年来，技术以惊人的速度发展。这同样适用于编译器。

随着时间的推移，C编译器已经演变成许多版本。

就像 PlayStation – 有 Playstation 2, Playstation 3, Playstation 4, 等等.

C 编译器也是如此。一旦它被标准化，就创建了许多版本：

-   C89/90, C的一个版本，一旦标准化，
-   C99 在1999年取代了C89和C90。
-   C11 在2011年取代了C99。
-   C17 在2018年取代了C11。
-   C2X 将在2023年取代C17。

就像 PlayStation 一样，每个新版本都有新功能。

有些人更喜欢在他们的 PlayStation2 上玩。

程序员也是如此。由于各种原因，程序员可能更喜欢使用 C99 或 C11 编写和调试 C 代码。

## 有关编译器的更多信息

我们在上面的代码中看到的"gcc -o main main.c -Wall"到底是什么意思？让我们一点一点地分解一下。

`gcc` 是调用编译过程（预处理、编译、程序集和链接）的命令。

`-o main` 表示由编译"main.c"创建的可执行文件的名称将称为"main"。

`main.c` 是要编译的文件的名称。

`-Wall` 该选项启用编译器警告。编译器警告会让您知道代码中的某些内容不太正确。

这类似于语法。 如果语法建议更改句子，在大多数情况下，您应该更改它以使其更清晰、更正确。

否则，如果你试图改变一个已经正确的短语中的某些内容，它可能会变得难以辨认。

同样，如果忽略代码中的警告，它最终会导致重大错误，您的项目甚至可能失败。

### "标准化"是什么意思？

所以你可能想知道，我们在上面看到的"标准化"是什么意思？

![1*HcaTyHriNP7mxrhZ_Fjijw](https://miro.medium.com/max/1400/1*HcaTyHriNP7mxrhZ_Fjijw.jpeg)

摄影： [**Pixabay**](https://www.pexels.com/@pixabay?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) 来自 [**Pexels**](https://www.pexels.com/photo/architecture-building-construction-daylight-534220/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)

让我们通过另一个类比来看看它。建造房屋的方法有很多种。但是有一种方法通常是最有效和最安全的。

因此，人们和组织必须同意有一种标准的建造房屋的方式。

创建该标准的过程称为标准化。

当一组规则成为标准时，这组规则就变得标准化。

这组规则可以是法律，证书，也可以只是某个领域工人使用的基本惯例。

这同样适用于`C`编译器。

正是标准化帮助人们就应该如何做事达成一致，无论是`C`编译器，汽车组件还是其他任何东西。

标准化还可以帮助人们就使用哪个版本的C达成一致。`C`编译器就是一个例子。

长期以来，`C`编译器一直被认为是软件开发的基本组成部分。

由于采用了`C`编译器标准，开发人员可以编译和运行其他人的代码，而不必担心他们的编译器无法正常工作。

为了创建如此重要的行业组成部分，必须有一个组织负责建立标准

许多组织创建和管理标准。对于`C`编译器，`ISO`（国际标准化组织）管理标准。


只要`ISO`管理未来的`C`编译器标准，程序员和公司就可以开发可靠的软件。

## 结束语

感谢您的阅读！现在您明白了：

-  什么是编译器
-   C 编译器的历史
-   标准化意味着什么

[Github](https://github.com/tiagomonteiro0715/freecodecamp-my-articles-source-code)仓库，其中包含我创建的代码和图像文件。
