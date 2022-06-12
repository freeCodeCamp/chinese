> -  原文地址：[What is a Buffer Overflow Attack – and How to Stop it](https://www.freecodecamp.org/news/buffer-overflow-attacks/)
> -  原文作者：[Megan KaczanowskiMegan Kaczanowski](https://www.freecodecamp.org/news/author/megansdoingfine/)
> -  译者：IZUMI-Zu
> -  校对者：

![What is a Buffer Overflow Attack – and How to Stop it](https://images.unsplash.com/photo-1506563613713-f88697472a45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDIxfHxvdmVyZmxvd3xlbnwwfHx8fDE2MTcxMjQ5MzM&ixlib=rb-1.2.1&q=80&w=2000)

当写到内存的内容超过分配给它的大小时，就会发生缓冲区溢出。这种行为可能会导致数据损坏、程序崩溃，甚至是恶意代码的执行。

C、C++和 Objective-C 是容易出现缓冲区溢出漏洞的主要语言（因为它们比许多解释型语言更直接地处理内存），而且它们是互联网的大部分基础。

即使代码是用"安全"语言（如 Python）编写的，如果它调用任何用 C、C++或 Objective C 编写的库，它仍然有可能受到缓冲区溢出的影响。

## 内存分配

为了理解缓冲区溢出，我们有必要了解一下程序如何分配内存。在 C 语言中，你可以在编译时在堆栈中分配内存，也可以在运行时在堆中分配内存。

在堆栈上声明一个变量：`int numberPoints = 10;`

或者在堆上声明变量：`int* ptr = malloc (10 * sizeof(int));`

缓冲区溢出可以发生在栈（栈溢出）或堆上（堆溢出）。

一般来说，栈溢出比堆溢出更常被利用。这是因为栈包含一连串的嵌套函数，每个函数都返回调用函数的地址，在函数运行结束后，栈应该返回该地址。这个返回地址可以被替换为执行一段恶意代码的指令。

由于堆较少存储这些返回地址，因此更难发起攻击（尽管不是不可能）。堆上的内存通常包含程序数据，并且是在程序运行时动态分配的。这意味着堆溢出很可能要覆盖一个函数指针--比栈溢出更难也更不有效。

由于栈溢出是更常被利用的缓冲区溢出类型，我们将简要地挖掘它们的具体工作原理。

## 栈溢出

当一个可执行文件被运行时，它在一个进程中运行，每个进程都有自己的栈。当进程执行主函数时，它将发现并创建新的局部变量（这些变量将被推到堆栈的顶部）和对其他函数的调用（这些函数将创建一个新的栈帧）。

为了更清楚的展示，请参考下图：

![](https://megankaczanowski.com/content/images/2021/01/Screen-Shot-2021-01-05-at-12.31.23-PM.png)

https://en.wikipedia.org/wiki/Stack\_(abstract\_data\_type)

### 那么，什么是栈帧？

首先，调用栈基本上是一个特定程序的汇编代码。它是一个由变量和栈帧组成的栈，它告诉计算机以什么顺序执行指令。每个尚未完成执行的函数都会有一个栈帧，它位于正在执行的函数在堆栈的顶部。

为了持续的追踪栈帧，计算机在内存中保留了以下几个指针：

-   **栈指针：** 指向进程调用栈的顶部（或压入栈的最后一个指针）。
-   **指令指针：** 指向下一条要执行的 CPU 指令的地址。
-   **基准指针（BP）：** (也称为帧指针) 指向当前栈帧的基点。只要程序在执行当前栈帧，它就保持不变（尽管栈指针会改变）。

例如，请看以下程序：

```C
int main() {
    int j = firstFunction(5);
    return 0;
}
    
int firstFunction(int z) {
    int x = 1 + z;
    return x;
}
```

在调用 firstFunction 和执行语句`int x = 1+z`之后，调用栈会是这样的：

![](https://megankaczanowski.com/content/images/2021/04/Screen-Shot-2021-04-03-at-12.04.52-PM.png)

这里，`main`调用了`firstFunction`（目前正在执行），所以它在调用栈的顶部。返回地址是调用它的函数的内存地址（这是在创建栈帧时由指令指针持有）。仍在范围内的局部变量也在调用栈上。当它们被执行并超出范围时，它们会从栈顶部被 "弹出"。

因此，计算机能够跟踪哪条指令需要被执行，判断以及以何种顺序执行。栈溢出是为了用攻击者自己设计的恶意地址覆盖这些保存的返回地址之一。

**缓冲区溢出漏洞实例 (C):**

```C
int main() {
    bufferOverflow();
 }
 
 bufferOverflow() {
    char textLine[10];
    printf("Enter your line of text: ");
    gets(textLine);
    printf("You entered: ", textLine);
    return 0;
 }
```

这个简单的例子读入了任意数量的数据（gets 会读入到文件的末尾或换行符）。想一想我们上面看过的调栈，你就会明白为什么这很危险。如果用户输入的数据多于变量被分配的数量，用户输入的字符串将覆盖调用栈的下一个内存位置。如果它足够长，它甚至可能覆盖调用函数的返回地址。

计算机对此的反应取决于栈的实现方式和特定系统中内存的分配方式。对缓冲区溢出的反应是不可预测的，从程序故障，到崩溃，再到执行恶意代码。

## 为什么会发生缓冲区溢出?

缓冲区溢出之所以成为如此重大的问题，是因为 C 和 C++中的许多内存操作函数不执行任何边界检查。缓冲区溢出现在相当有名，它们也非常普遍地被利用 (例如，[WannaCry](https://en.wikipedia.org/wiki/WannaCry_ransomware_attack) 利用了缓冲区溢出）。

缓冲区溢出最常见的情况是，代码依赖于外部输入数据，这种方式过于复杂，程序员不容易理解其行为，或者它有代码直接范围之外的依赖关系。

网络服务器、应用服务器和网络应用环境都容易受到缓冲区溢出的影响。

用解释型语言编写的环境是个例外，尽管解释者本身也容易受到溢出的影响。

## 如何减轻缓冲区溢出的影响

-   **使用解释性的语言** 这并不容易受缓冲区溢出的影响。
-   **避免使用不进行缓冲区检查的函数** （例如，在 C 语言中，用 fgets() 代替 gets()。）
-   **使用能够帮助识别不安全函数或错误的编译器。**
-   **[使用](https://ritcsec.wordpress.com/2017/05/18/buffer-overflows-aslr-and-stack-canaries/)[金丝雀](http://www.cbi.umn.edu/securitywiki/CBI_ComputerSecurity/MechanismCanary.html)，** 这是一种 "防护值"，可以帮助防止缓冲区溢出。它们被插入到堆栈中的返回地址之前，并在返回地址被访问之前被检查。如果程序检测到金丝雀值的变化，它将中止进程，防止攻击者得逞。警戒值要么是随机的（所以，攻击者很难猜到），要么是一串字符，由于技术原因，不可能被覆盖。
-   **重新安排局部变量** 所以普通变量（单个固定大小的数据对象）高于数组变量（包含多个值）。这意味着，如果数组变量真的溢出，它们不会影响普通变量。这种技术，当与警戒值相结合时，它可以帮助抵御缓冲区溢出攻击。
-   **将一个栈变为不可执行** 通过设置 NX（No-eXecute）位，防止攻击者将 shellcode 直接插入栈中并在那里执行它。这并不是一个完美的解决方案，因为即使是不可执行的栈也会成为缓冲区溢出攻击的受害者，如返回到 libc 攻击。当栈框架的返回地址被替换成已经在进程地址空间的库的地址时，这种攻击就会发生。此外，并非所有的 CPU 都允许设置 NX 位。
-   **[ASLR（地址空间布局随机化）](https://en.wikipedia.org/wiki/Address_space_layout_randomization)**，它可以作为一种一般的防御措施（以及对返回到 libc 攻击的特殊防御）。这意味着，无论何时一个库文件或其他函数被运行中的进程调用，其地址都会被一个随机数移位。这使得几乎不可能将一个固定的进程内存地址与函数联系起来，这意味着攻击者很难，甚至不可能知道从哪里调用特定的函数。在许多版本的 Linux、OS X 和 Android 中，ASLR 是默认开启的（可以在命令行中切换关闭）。

### 关于 Stack Underflow 的说明：

当同一个程序的两个部分以不同的方式处理同一个内存块时，也有可能出现缓冲区溢出的漏洞。例如，如果你分配了一个大小为 X 的数组，但用大小为 x<X 的数组填充它，后来你试图检索所有 X 字节，你很可能得到 X-x 字节的垃圾数据。

从本质上讲，你可能已经拉出了一些数据，这些数据是以前使用该内存时留下的。最好的情况是，它是没有任何意义的垃圾，而最坏的情况是，它是攻击者可能会滥用的敏感数据。

### 资料来源/进一步的阅读：

-   [Computer and Network Security Lectures, Avinash Kak](https://engineering.purdue.edu/kak/compsec/)
-   [OWASP Buffer Overflow](https://owasp.org/www-community/vulnerabilities/Buffer_Overflow)s
-   [Stack vs Heap](https://gribblelab.org/CBootCamp/7_Memory_Stack_vs_Heap.html)
