> -   原文地址：[The C Beginner's Handbook: Learn C Programming Language basics in just a few hours C 语言入门手册](https://www.freecodecamp.org/news/the-c-beginners-handbook/)
> -   原文作者：Flavio Copes
> -   译者：zhannicholas
> -   校对者：

![The C Beginner's Handbook: Learn C Programming Language basics in just a few hours](https://www.freecodecamp.org/news/content/images/size/w2000/2020/03/coverc-1.jpg)

![C 语言入门手册: 几小时内就能学会的 C 语言基础](https://www.freecodecamp.org/news/content/images/size/w2000/2020/03/coverc-1.jpg)

This C Beginner's Handbook follows the 80/20 rule. You'll learn 80% of the C programming language in 20% of the time.

本手册遵循二八定律。你将在 20% 的时间内学习 80% 的 C 编程语言。

This approach will give you a well-rounded overview of the language.

这种方式将会让你对这门语言有一个全面的认识。

This handbook does not try to cover everything under the sun related to C. It focuses on the core of the language, trying to simplify the more complex topics.

本手册并不会尝试覆盖与 C 有关的一切。它只会关注这门语言的核心部分，尽量将更加复杂的主题简单化。

And note:  [You can get a PDF and ePub version of this C Beginner's Handbook here][1].

提示：[你可以从这里获得这本手册的 PDF 或 ePub 版本][1]。

Enjoy!

尽情享受吧！

## Table of Contents

1.  [Introduction to C][2]
2.  [Variables and types][3]
3.  [Constants][4]
4.  [Operators][5]
5.  [Conditionals][6]
6.  [Loops][7]
7.  [Arrays][8]
8.  [Strings][9]
9.  [Pointers][10]
10.  [Functions][11]
11.  [Input and output][12]
12.  [Variables scope][13]
13.  [Static variables][14]
14.  [Global variables][15]
15.  [Type definitions][16]
16.  [Enumerated Types][17]
17.  [Structures][18]
18.  [Command line parameters][19]
19.  [Header files][20]
20.  [The preprocessor][21]
21.  [Conclusion][22]

## 目录

1.  [C 语言简介](#introduction-to-c)
2.  [变量与类型](#variables-and-types)
3.  [常量](#constants)
4.  [运算符](#operators)
5.  [条件语句](#conditionals)
6.  [循环](#loops)
7.  [数组](#arrays)
8.  [字符串](#strings)
9.  [指针](#pointers)
10.  [函数](#functions)
11.  [输入与输出](#input-and-output)
12.  [变量作用域](#variable-scope)
13.  [静态变量](#static-variables)
14.  [全局变量](#global-variables)
15.  [类型定义](#type-definitions)
16.  [枚举类型](#emunerated-types)
17.  [结构体](#structures)
18.  [命令行参数](#command-line-parameters)
19.  [头文件](#header-files)
20.  [预处理器](#the-preprocessor)
21.  [结语](#conclusion)

## Introduction to C

<h2 id="introduction-to-c">C 语言简介</h2>

C is probably the most widely known programming language. It is used as the reference language for computer science courses all over the world, and it's probably the language that people learn the most in school along with Python and Java.

C 可能是最广为人知的编程语言。它被全世界的计算机科学课程中用作参考语言，除了 Python 与 Java，它可能是人们在学校学得最多得编程语言。

I remember it being my second programming language ever, after Pascal.

我记得它是我在 Pascal 之后的第二门编程语言。

C is not just what students use to learn programming. It's not an academic language. And I would say it's not the easiest language, because C is a rather low level programming language.

学生们用 C 来学习编程，但它的作用远不止这一点。它不是一门学术型语言。它不是最简单的语言，因为 C 是一门非常底层的编程语言。

Today, C is widely used in embedded devices, and it powers most of the Internet servers, which are built using Linux. The Linux kernel is built using C, and this also means that C powers the core of all Android devices. We can say that C code runs a good portion of the entire world. Right now. Pretty remarkable.

今天，C 在嵌入式设备中广泛使用，它驱动着绝大多数用 Linux 搭建的因特网服务器。Linux 内核是用 C 写的，这也意味着 C 驱动着所有安卓设备的内核。可以这么说，此时此刻，整个世界的一大部分就是由 C 代码运行的，令人惊叹。

When it was created, C was considered a high level language, because it was portable across machines. Today we kind of take for granted that we can run a program written on a Mac on Windows or Linux, perhaps using Node.js or Python.

在诞生之初，C 被认为是一门高级语言，因为它可以在不同机器之间移植。如今，我们或多或少都认为在 Mac 或 Windows 或 Linux 运行一个程序（可能使用 Node.js 或 Python）是理所当然的。

Once upon a time, this was not the case at all. What C brought to the table was a language that was simple to implement and that had a compiler that could be easily ported to different machines.

在以前，完全不是这样的。C 带来了一门易于实现的语言，它的编译器可以很容易地被移植到不同的机器上。

I said compiler: C is a compiled programming language, like Go, Java, Swift or Rust. Other popular programming language like Python, Ruby or JavaScript are interpreted. The difference is consistent: a compiled language generates a binary file that can be directly executed and distributed.

我说下译器：C 是一门编译型语言，就像 Go、Java、Swift 或 Rust 一样。其它流行的语言，比如 Python、Ruby 或 JavaScript 都是解释型语言。编译型语言与解释型语言的差别是不变的：编译型语言生成的是可直接执行和分发的二进制文件。

C is not garbage collected. This means we have to manage memory ourselves. It's a complex task and one that requires a lot of attention to prevent bugs, but it is also what makes C ideal to write programs for embedded devices like Arduino.

C 不支持垃圾收集（garbage collection），这意味着我们必须自己管理内存。管理内存是一项复杂的任务，需要十分小心才能预防缺陷，但 C 也因此成为了嵌入式设备（例如 Arduino）编程的理想语言。

C does not hide the complexity and the capabilities of the machine underneath. You have a lot of power, once you know what you can do.

C 并不会隐藏下层机器的复杂性和能力。一旦知道你能做什么，你就能拥有巨大的能力。

I want to introduce the first C program now, which we'll call "Hello, World!"

现在，我想介绍第一个 C 程序，我们将会管它叫“Hello, World”。

hello.c

```c
#include <stdio.h>

int main(void) {
    printf("Hello, World!");
}
```

Let's describe the program source code: we first import the  `stdio`  library (the name stands for standard input-output library).

让我们描述一下这段程序源代码：我们首先导入了 `stdio` 库（`stdio` 表示的是标准输入输出库（standard input-output library））。

This library gives us access to input/output functions.

这个库允许我们访问输入/输出函数。

C is a very small language at its core, and anything that's not part of the core is provided by libraries. Some of those libraries are built by normal programmers, and made available for others to use. Some other libraries are built into the compiler. Like  `stdio`  and others.

C 是一门内核非常小的语言，任何内核以外的部分都以库的形式提供。其中一些库由普通编程人员构建并供他人使用。另一些库被内置在编译器中，比如 `stdio` 等。

`stdio`  is the library that provides the  `printf()`  function.

`stdio` 库提供了 `prinf()` 函数。

This function is wrapped into a  `main()`  function. The  `main()`  function is the entry point of any C program.

这个函数被包裹在 `main()` 函数中，`main()` 函数是所有 C 程序的入口。

But what is a function, anyway?

但是，究竟什么是函数呢？

A function is a routine that takes one or more arguments, and returns a single value.

函数（function）是一个例程，它接收一个或多个参数并返回一个值。

In the case of  `main()`, the function gets no arguments, and returns an integer. We identify that using the  `void`  keyword for the argument, and the  `int`  keyword for the return value.

在 `main()` 的例子中，函数没有参数，返回一个整数。我们使用 `void` 关键字标识该参数，使用 `int` 关键字标识返回值。

The function has a body, which is wrapped in curly braces. Inside the body we have all the code that the function needs to perform its operations.

函数有一个由花括号包裹的函数体，函数需要进行的所有操作的代码都在函数体内。

The  `printf()`  function is written differently, as you can see. It has no return value defined, and we pass a string, wrapped in double quotes. We didn't specify the type of the argument.

如你所见，`printf()` 函数的写法稍有不同。它没有定义返回值，并且我们给它传入了一个用双引号包裹的字符串。我们并没有声明参数的类型。

That's because this is a function invocation. Somewhere, inside the  `stdio`  library,  `printf`  is defined as

那是因为这是一个函数调用。在 `stdio` 库中的某个地方，`printf` 被定义成

```c
int printf(const char *format, ...);

```

You don't need to understand what this means now, but in short, this is the definition. And when we call  `printf("Hello, World!");`, that's where the function is run.

你现在不需要理解这是何含义，简单来说，这是就是函数定义。当我们调用 `printf("Hello, World!");` 时，这就是该函数运行的地方。

The  `main()`  function we defined above:

我们在上面定义的 `main()` 函数： 

```c
#include <stdio.h>

int main(void) {
    printf("Hello, World!");
}
```

will be run by the operating system when the program is executed.

将会在程序被执行的时候由操作系统运行。

How do we execute a C program?

我们如何执行一个 C 程序呢？

As mentioned, C is a compiled language. To run the program we must first compile it. Any Linux or macOS computer already comes with a C compiler built-in. For Windows, you can use the Windows Subsystem for Linux (WSL).

如我所说，C 是一门编译型语言。要运行程序，我们必须先编译它。任何 Linux 或 macOS 计算机都自带了 C 编译器。至于 Windows，你可以使用适用于 Linux 的 Windows 子系统（WSL）。

In any case, when you open the terminal window you can type  `gcc`, and this command should return an error saying that you didn't specify any file:

无论如何，你都可以在打开终端时输入 `gcc`，这个命令应该会返回一个错误，提示你没有声明任何文件：

![](https://www.freecodecamp.org/news/content/images/2020/03/Screen-Shot-2020-01-29-at-10.10.50.png)

That's good. It means the C compiler is there, and we can start using it.

很好。它说明 C 编译器是有的，现在我们可以开始使用它了。

Now type the program above into a  `hello.c`  file. You can use any editor, but for the sake of simplicity I'm going to use the  `nano`  editor in the command line:

现在将上面的程序输入到一个名为 `hello.c` 的文件中。你可以使用任何编辑器，不过为了简单起见，我将在命令行中使用 `nano` 编辑器：

![](https://www.freecodecamp.org/news/content/images/2020/03/Screen-Shot-2020-01-29-at-10.11.39.png)

Type the program:

输入程序：

![](https://www.freecodecamp.org/news/content/images/2020/03/Screen-Shot-2020-01-29-at-10.16.52.png)

Now press  `ctrl-X`  to exit:

现在按 `ctrl-X` 退出：

![](https://www.freecodecamp.org/news/content/images/2020/03/Screen-Shot-2020-01-29-at-10.18.11.png)

Confirm by pressing the  `y`  key, then press enter to confirm the file name:

按 `y` 键确认，然后按回车键确认文件名：

![](https://www.freecodecamp.org/news/content/images/2020/03/Screen-Shot-2020-01-29-at-10.18.15.png)

That's it, we should be back to the terminal now:

就是这样，我们现在应该已经回到终端了：

![](https://www.freecodecamp.org/news/content/images/2020/03/Screen-Shot-2020-01-29-at-10.13.46.png)

Now type

现在输入

```sh
gcc hello.c -o hello

```

The program should give you no errors:

程序应该不会给你任何错误信息：

![](https://www.freecodecamp.org/news/content/images/2020/03/Screen-Shot-2020-01-29-at-10.16.31.png)

but it should have generated a  `hello`  executable. Now type

但是它应该已经生成了一个名为 `hello` 的可执行程序。现在输入

```sh
./hello

```

to run it:

运行它：

![](https://www.freecodecamp.org/news/content/images/2020/03/Screen-Shot-2020-01-29-at-10.19.20.png)

I prepend  `./`  to the program name to tell the terminal that the command is in the current folder

我在程序名的前面加了 `./`，告诉终端要执行的命令就在当前目录下。

Awesome!

太棒了！

Now if you call  `ls -al hello`, you can see that the program is only 12KB in size:

现在，如果你调用 `ls -al hello`，你能看到这个程序只有 12KB 大：

![](https://www.freecodecamp.org/news/content/images/2020/03/Screen-Shot-2020-01-29-at-10.19.55.png)

This is one of the pros of C: it's highly optimized, and this is also one of the reasons it's this good for embedded devices that have a very limited amount of resources.

这是 C 的优点之一：它是高度优化的，这也是它非常适用于资源非常有限的嵌入式设备的原因之一。

## Variables and types

<h2 id="variables-and-types">变量与类型<h2>

C is a statically typed language.

C 是一门静态类型语言。

This means that any variable has an associated type, and this type is known at compilation time.

这意味着任何变量都有一个相关联的类型，并且该类型在编译时是可知的。

This is very different than how you work with variables in Python, JavaScript, PHP and other interpreted languages.

这与你在 Python、JavaScript、PHP 和其它解释型语言中使用变量的方式大有不同。

When you create a variable in C, you have to specify the type of a variable at the declaration.

当你在 C 中创建变量时，你必须在声明中给出该变量的类型。

In this example we initialize a variable  `age`  with type  `int`:

在这个示例中，我们初始化一个 `int` 类型的变量 `age`：

```c
int age;

```

A variable name can contain any uppercase or lowercase letter, can contain digits and the underscore character, but it can't start with a digit.  `AGE`  and  `Age10`  are valid variable names,  `1age`  is not.

变量名可以包含任意大写或小写字母，也可以包含数字和下划线，但是不能以数字开头。`AGE` 和 `Age10` 都是有效的变量名，但 `1age` 就不是了。

You can also initialize a variable at declaration, specifying the initial value:

你还可以在声明中初始化变量，给出初始值即可：

```c
int age = 37;

```

Once you declare a variable, you are then able to use it in your program code. You can change its value at any time, using the  `=`  operator for example, like in  `age = 100;`  (provided the new value is of the same type).

变量一旦声明，你就可以在程序代码中使用它了。你在任何时候都可以使用 `=` 改变它的值，例如 `age = 100;`（提供的新值的类型与原值相同）。

In this case:

在这种情况下：

```c
#include <stdio.h>

int main(void) {
    int age = 0;
    age = 37.2;
    printf("%u", age);
}
```

the compiler will raise a warning at compile time, and will convert the decimal number to an integer value.

编译器会在编译时发出警告，然后将小数转为整数。

The  [C][23]  built-in data types are  `int`,  `char`,  `short`,  `long`,  `float`,  `double`,  `long double`. Let's find out more about those.

[C][23] 的内置数据类型有 `int`、`char`、`short`、`long`、`float`、`double`、`long double`。咱们进一步了解这些数据类型吧。

### Integer numbers

### 整数

C provides us the following types to define integer values:

C 给我们提供了下列定义整数的类型：

-   `char`
-   `int`
-   `short`
-   `long`

Most of the time, you'll likely use an  `int`  to store an integer. But in some cases, you might want to choose one of the other 3 options.

通常，你很可能会使用 `int` 保存整数。但是在某些情况下，你或许想在其它三个选项中选取合适的类型。

The  `char`  type is commonly used to store letters of the ASCII chart, but it can be used to hold small integers from  `-128`  to  `127`. It takes at least 1 byte.

`char` 类型通常被用来保存 ASCII 表中的字母，但是它也可以用来保存 `-128` 到 `127` 之间的小整数。它占据至少一个字节。

`int`  takes at least 2 bytes.  `short`  takes at least 2 bytes.  `long`  takes at least 4 bytes.

`int` 占据至少两个字节。`short` 占据至少两个字节。`long` 占据至少四个字节。

As you can see, we are not guaranteed the same values for different environments. We only have an indication. The problem is that the exact numbers that can be stored in each data type depends on the implementation and the architecture.

如你所见，我们并不保证不同环境下的值相同。我们只有一个指示。问题在于每种数据类型中所存储的具体值是由实现和系统架构决定的。

We're guaranteed that  `short`  is not longer than  `int`. And we're guaranteed  `long`  is not shorter than  `int`.

我们保证 `short` 不会比 `int` 长。并且我们还保证 `long` 不会比 `int` 短。

The ANSI C spec standard determines the minimum values of each type, and thanks to it we can at least know what's the minimum value we can expect to have at our disposal.

ANSI C 规范标准确定了每种类型的最小值，多亏了它，我们至少可以知道使用某个类型时可以期待的最小值。

If you are programming C on an Arduino, different board will have different limits.

如果你正在 Arduino 上用 C 编程，不同的板子上的限制会有所不同。

On an Arduino Uno board,  `int`  stores a 2 byte value, ranging from  `-32,768`  to  `32,767`. On a Arduino MKR 1010,  `int`  stores a 4 bytes value, ranging from  `-2,147,483,648`  to  `2,147,483,647`. Quite a big difference.

在 Arduino Uno 开发板上，`int` 占两个字节，范围从 `-32,768` 到 `32,767`。在 Arduino MKR 1010 上，`int` 占四个字节，范围从 `-2,147,483,648` 到 `2,147,483,647`。差异还真不小。

On all Arduino boards,  `short`  stores a 2 bytes value, ranging from  `-32,768`  to  `32,767`.  `long`  store 4 bytes, ranging from  `-2,147,483,648`  to  `2,147,483,647`.

在所有的 Arduino 开发板上，`short` 都占两个字节，范围从 `-32,768` 到 `32,767`。`long` 占四个字节，范围从 `-2,147,483,648`  到  `2,147,483,647`。

### Unsigned integers

### 无符号整数

For all the above data types, we can prepend  `unsigned`  to start the range at 0, instead of a negative number. This might make sense in many cases.

-   `unsigned char`  will range from  `0`  to at least  `255`
-   `unsigned int`  will range from  `0`  to at least  `65,535`
-   `unsigned short`  will range from  `0`  to at least  `65,535`
-   `unsigned long`  will range from  `0`  to at least  `4,294,967,295`

对于以上所有的数据类型，我们都可以在其前面追加一个 `unsigned`。这样一来，值的范围就不再从负数开始，而是从 0 开始。这在很多情况下是很有用的。

- `unsigned char` 的范围从 `0` 开始，至少到 `255`
- `unsigned int` 的范围从 `0` 开始，至少到 `65,535`
- `unsigned short` 的范围从 `0` 开始，至少到 `65,535`
- `unsigned long` 的范围从 `0` 开始，至少到 `4,294,967,295`

### The problem with overflow

### 溢出的问题

Given all those limits, a question might come up: how can we make sure our numbers do not exceed the limit? And what happens if we do exceed the limit?

鉴于所有这些限制，可能会出现一个问题：我们如何确保数字不超过限制？如果超过了限制会怎样？

If you have an  `unsigned int`  number at 255, and you increment it, you'll get 256 in return. As expected. If you have an  `unsigned char`  number at 255, and you increment it, you'll get 0 in return. It resets starting from the initial possible value.

如果你有一个值为 255 的 `unsigned int`，自增返回的值为 256，这在意料之中。如果你有一个值为 255 的 `unsigned char`，你得到的结果就是 0。它重置为了初始值。

If you have a  `unsigned char`  number at 255 and you add 10 to it, you'll get the number  `9`:

如果你有一个值为 255 的 `unsigned char`，给它加上 10 会得到数字 `9`：

```c
#include <stdio.h>

int main(void) {
  unsigned char j = 255;
  j = j + 10;
  printf("%u", j); /* 9 */
}
```

If you don't have a signed value, the behavior is undefined. It will basically give you a huge number which can vary, like in this case:

> If you don't have a signed value, the behavior is undefined.
> 原文这里可能是 typo，从代码来看，这里描述的是有符号整数的溢出行为。

如果你的值是有符号的，程序的行为则是未知的。程序基本上会给你一个很大的值，这个值可能变化，就像这样：

```c
include <stdio.h>

int main(void) {
  char j = 127;
  j = j + 10;
  printf("%u", j); /* 4294967177 */
}
```

In other words, C does not protect you from going over the limits of a type. You need to take care of this yourself.

换句话说，C 并不会在你超出类型的限制时保护你。对于这种情况，你需要自己当心。

### Warnings when declaring the wrong type

### 声明错误类型时的警告

When you declare the variable and initialize it with the wrong value, the  `gcc`  compiler (the one you're probably using) should warn you:

如果你声明变量并用错误的值进行初始化，`gcc` 编译器（你可能正在使用这个编译器）应该会发出警告：

```c
#include <stdio.h>

int main(void) {
  char j = 1000;
}
```

```
hello.c:4:11: warning: implicit conversion 
  from 'int' to
      'char' changes value from 1000 to -24
      [-Wconstant-conversion]
        char j = 1000;
             ~   ^~
1 warning generated.

```

And it also warns you in direct assignments:

如果你直接赋值，也会有警告：

```c
#include <stdio.h>

int main(void) {
  char j;
  j = 1000;
}

```

But not if you increase the number using, for example,  `+=`:

但是对值进行增加操作（例如，使用 `+=`）就不会有警告：

```c
#include <stdio.h>

int main(void) {
  char j = 0;
  j += 1000;
}
```

### Floating point numbers

### 浮点数

Floating point types can represent a much larger set of values than integers can, and can also represent fractions, something that integers can't do.

浮点类型可以表示的数值范围比整数大得多，还可以表示整数无法表示的分数。

Using floating point numbers, we represent numbers as decimal numbers times powers of 10.

使用浮点数时，我们将数表示成小数乘以 10 的幂。

You might see floating point numbers written as

你可能见过浮点数被写成

-   `1.29e-3`
-   `-2.3e+5`

and in other seemingly weird ways.

和其它的一些看起来很奇怪的形式。

The following types:

下面的几种类型：

-   `float`
-   `double`
-   `long double`

are used to represent numbers with decimal points (floating point types). All can represent both positive and negative numbers.

是用来表示带有小数点的数字（浮点类型）的。这几种类型都可以表示正数和负数。

The minimum requirements for any C implementation is that  `float`  can represent a range between 10^-37 and 10^+37, and is typically implemented using 32 bits.  `double`  can represent a bigger set of numbers.  `long double`  can hold even more numbers.

任何 C 的实现都必须满足的最小要求是 `float` 可以表示范围在 10^-37 到 10^+37 之间的数，这通常用 32 位比特实现。 `double` 可以表示一组更大范围的数，`long double` 可以保存的数还要更多。

The exact figures, as with integer values, depend on the implementation.

与整数一样，浮点数的确切值取决于具体实现。

On a modern Mac, a  `float`  is represented in 32 bits, and has a precision of 24 significant bits. 8 bits are used to encode the exponent.

在现代的 Mac 上，`float` 用 32 位表示，精度为 24 个有效位，剩余 8 位被用来编码指数部分。

A  `double`  number is represented in 64 bits, with a precision of 53 significant bits. 11 bits are used to encode the exponent.

`double` 用 64 位表示，精度为 53 个有效位，剩余 11 为用于编码指数部分。

The type  `long double`  is represented in 80 bits, has a precision of 64 significant bits. 15 bits are used to encode the exponent.

`long double` 类型用 80 位表示，精度为 64 位有效位，剩余 15 位被用来编码指数部分。

On your specific computer, how can you determine the specific size of the types? You can write a program to do that:

你如何能在自己的计算机上确定这些类型的大小呢？你可以写一个程序来干这事儿：

```c
#include <stdio.h>

int main(void) {
  printf("char size: %lu bytes\n", sizeof(char));
  printf("int size: %lu bytes\n", sizeof(int));
  printf("short size: %lu bytes\n", sizeof(short));
  printf("long size: %lu bytes\n", sizeof(long));
  printf("float size: %lu bytes\n", sizeof(float));
  printf("double size: %lu bytes\n", sizeof(double));
  printf("long double size: %lu bytes\n", sizeof(long double));
}
```

In my system, a modern Mac, it prints:

在我的系统上（一台现代 Mac），输出如下：

```
char size: 1 bytes
int size: 4 bytes
short size: 2 bytes
long size: 8 bytes
float size: 4 bytes
double size: 8 bytes
long double size: 16 bytes

```

## Constants

<h2 id="constants">常量</h2>

Let's now talk about constants.

咱们现在来谈谈常量。

A constant is declared similarly to variables, except it is prepended with the  `const`  keyword, and you always need to specify a value.

常量的声明与变量类似，不同之处在于常量声明的前面带有 `const` 关键字，并且你总是需要给常量指定一个值。

Like this:

比如这样：

```c
const int age = 37;

```

This is perfectly valid C, although it is common to declare constants uppercase, like this:

这在 C 中是完全有效的，尽管通常情况下将常量声明为大写，就像这样：

```c
const int AGE = 37;

```

It's just a convention, but one that can greatly help you while reading or writing a C program as it improves readability. Uppercase name means constant, lowercase name means variable.

虽然这只是一个惯例，但是在你阅读或编写 C 程序时，他能给你提供巨大的帮助，因为它提高了可读性。大写的名字意味着常量，小写的名字意味着变量。

A constant name follows the same rules for variable names: can contain any uppercase or lowercase letter, can contain digits and the underscore character, but it can't start with a digit.  `AGE`  and  `Age10`  are valid variable names,  `1AGE`  is not.

常量的命名规则与变量相同：可以包含任意大小写字母、数字和下划线，但是不能以数字开头。`AGE` 和 `Age10` 都是有效的变量名，而 `1AGE` 就不是了。

Another way to define constants is by using this syntax:

另一种定义常量的方式是使用这种语法：

```c
#define AGE 37

```

In this case, you don't need to add a type, and you don't also need the  `=`  equal sign, and you omit the semicolon at the end.

在这种情况下，你不需要添加类型，也不需要使用等于符号 `=`，并且可以省略末尾的分号。

The C compiler will infer the type from the value specified, at compile time.

C 编译器将会在编译时从声明的值推断出相应的类型。

## Operators

<h2 id="operators">运算符</h2>

C offers us a wide variety of operators that we can use to operate on data.

C 给我们提供了各种各样的运算符，我们可以用来操作数据。

In particular, we can identify various groups of operators:

-   arithmetic operators
-   comparison operators
-   logical operators
-   compound assignment operators
-   bitwise operators
-   pointer operators
-   structure operators
-   miscellaneous operators

特别地，我们可以识别不同分组的运算符：

- 算术运算符
- 比较运算符
- 逻辑运算符
- 复合赋值运算符
- 位运算符
- 指针运算符
- 结构运算符
- 混合运算符

In this section I'm going to detail all of them, using 2 imaginary variables  `a`  and  `b`  as examples.

在这一节中，我们将用两个假想的变量 `a` 和 `b` 举例，详细介绍所有这些运算符。

I am keeping bitwise operators, structure operators and pointer operators out of this list, to keep things simpler

为了简单起见，我将不会介绍位运算符、结构运算符和指针运算符。
### Arithmetic operators

### 算术运算符

In this macro group I am going to separate binary operators and unary operators.

我将把这个小型分组分为二元运算符和一元运算符。

Binary operators work using two operands:

| OPERATOR | NAME | EXAMPLE |
| --- | --- | --- |
| `=` | Assignment | `a = b` |
| `+` | Addition | `a + b` |
| `-` | Subtraction | `a - b` |
| `*` | Multiplication | `a * b` |
| `/` | Division | `a / b` |
| `%` | Modulo | `a % b` |

二元操作符需要两个操作数：

| 操作符 | 名字 | 示例 |
| --- | --- | --- |
| `=` | 赋值 | `a = b` |
| `+` | 加 | `a + b` |
| `-` | 减 | `a - b` |
| `*` | 乘 | `a * b` |
| `/` | 除 | `a / b` |
| `%` | 取模 | `a % b` |

Unary operators only take one operand:

| OPERATOR | NAME | EXAMPLE |
| --- | --- | --- |
| `+` | Unary plus | `+a` |
| `-` | Unary minus | `-a` |
| `++` | Increment | `a++`  or  `++a` |
| `--` | Decrement | `a--`  or  `--a` |

一元运算符只需要一个操作数：

| 运算符 | 名字 | 示例 |
| --- | --- | --- |
| `+` | 一元加 | `+a` |
| `-` | 一元减 | `-a` |
| `++` | 自增 | `a++`  or  `++a` |
| `--` | 自减 | `a--`  or  `--a` |

The difference between  `a++`  and  `++a`  is that  `a++`  increments the  `a`  variable after using it.  `++a`  increments the  `a`  variable before using it.

`a++` 与 `++a` 的区别在于：`a++` 在使用 `a` 之后才自增它的值，而 `++a` 会在使用 `a` 之前自增它的值。

For example:

```c
int a = 2;
int b;
b = a++ /* b is 2, a is 3 /
b = ++a / b is 4, a is 4 /

```

例如：

```c
int a = 2;
int b;
b = a++ /* b 为 2，a 为 3 */
b = ++a /* b 为 4，a 为 4 */

```

_The same applies to the decrement operator._

这也适用于递减运算符。

### _Comparison operators_

### 比较运算符

| OPERATOR | NAME | EXAMPLE |
| --- | --- | --- |
| `==` | Equal operator | `a == b` |
| `!=` | Not equal operator | `a != b` |
| `>` | Bigger than | `a > b` |
| `<` | Less than | `a < b` |
| `>=` | Bigger than or equal to | `a >= b` |
| `<=` | Less than or equal to | `a <= b` |

| 运算符 | 名字 | 示例 |
| --- | --- | --- |
| `==` | 相等 | `a == b` |
| `!=` | 不相等 | `a != b` |
| `>` | 大于 | `a > b` |
| `<` | 小于 | `a < b` |
| `>=` | 大于等于 | `a >= b` |
| `<=` | 小于等于 | `a <= b` |

### _Logical operators_

### 逻辑运算符

-   _`!`  NOT (example:  `!a`)_
-   _`&&`  AND (example:  `a && b`)_
-   _`||`  OR (example:  `a || b`)_

- `!` 非（例如：`!a`）
- `&&` 与（例如：`a && b`）
- `||` 或（例如：`a || b`）

_Those operators are great when working with boolean values._

这些运算符在使用布尔值时非常有用。

### _Compound assignment operators_

### 复合赋值运算符

_Those operators are useful to perform an assignment and at the same time perform an arithmetic operation:_

| OPERATOR | NAME | EXAMPLE |
| --- | --- | --- |
| `+=` | Addition assignment | `a += b` |
| `-=` | Subtraction assignment | `a -= b` |
| `=` | Multiplication assignment | `a *= b` |
| `/=` | Division assignment | `a /= b` |
| `%=` | Modulo assignment | `a %= b` |

当赋值与算术运算同时进行时，这些运算符非常有用。

| 运算符 | 名字 | 示例 |
| --- | --- | --- |
| `+=` | 加且赋值 | `a += b` |
| `-=` | 减且赋值 | `a -= b` |
| `*=` | 乘且赋值 | `a *= b` |
| `/=` | 除且赋值 | `a /= b` |
| `%=` | 求模且赋值 | `a %= b` |

### _The ternary operator_

### 三目运算符

_The ternary operator is the only operator in C that works with 3 operands, and it’s a short way to express conditionals._

三目运算符是 C 中唯一一个使用三个操作数的运算符，并且它是表达条件的简便方法。

_This is how it looks:_

它看起来长这样：

_`<condition> ? <expression> : <expression>`_ 

`<条件> ? <表达式> : <表达式>`

_Example:_

示例：

```c
`a ? b : c`_
```

_If  `a`  is evaluated to  `true`, then the  `b`  statement is executed, otherwise  `c`  is._

若 `a` 的值为 `true`，就执行语句 `b`，否则执行语句 `c`。

_The ternary operator is functionality-wise same as an if/else conditional, except it is shorter to express and it can be inlined into an expression._

三目运算符的功能与 if/else 条件语句相同，但是它更短，还可以被内联进表达式。

### _sizeof_

### sizeof

_The  `sizeof`  operator returns the size of the operand you pass. You can pass a variable, or even a type._

`sizeof` 运算符返回你传入的操作数的大小。你可以传入变量，或者甚至是类型也可以。

_Example usage:_

使用示例：

```c
#include <stdio.h>

int main(void) {
  int age = 37;
  printf("%ld\n", sizeof(age));
  printf("%ld", sizeof(int));
}
```

### _Operator precedence_

### 运算符优先级

_With all those operators (and more, which I haven't covered in this post, including bitwise, structure operators, and pointer operators), we must pay attention when using them together in a single expression._

对于所有的这些运算符（以及我们还没有在本文中介绍的其它运算符，包括位运算符、结构运算符和指针运算符），我们在单个表达式中一起使用它们时必须要留意。

_Suppose we have this operation:_

假如我们有这个运算：

```c
int a = 2;
int b = 4;
int c = b + a * a / b - a;
```

_What's the value of  `c`? Do we get the addition being executed before the multiplication and the division?_

`c` 的值是多少？我们在执行乘和除之前有进行加法操作吗？

_There is a set of rules that help us solve this puzzle._

这里是给我们解惑的一组规则。

_In order from less precedence to more precedence, we have:_

-   _the  `=`  assignment operator_
-   _the  `+`  and  `-`  **binary**  operators_
-   _the  `*`  and  `/`  operators_
-   _the  `+`  and  `-`  unary operators_

按照顺序，优先级从低到高：

- 赋值运算符 `=`
- 二元运算符 `+` 和 `-`
- 运算符 `*` 和 `/`
- 一元运算符 `+` 和 `-`

_Operators also have an associativity rule, which is always left to right except for the unary operators and the assignment._

运算符还具有关联规则，除了一元运算符和赋值运算符之外，该规则总是从左到右的。

_In:_

_`int c = b + a * a / b - a;`_ 

在：

```c
int c = b + a * a / b - a;
```

_We first execute  `a * a / b`, which, due to being left-to-right, we can separate into  `a * a`  and the result  `/ b`:  `2 * 2 = 4`,  `4 / 4 = 1`._

中，我们首先执行 `a * a / b`，由于是从左到右的，我们可以拆分为 `a * a` 与其结果 `/b`：`2 * 2 = 4`，`4 / 4 = 1`。

_Then we can perform the sum and the subtraction: 4 + 1 - 2. The value of  `c`  is  `3`._

然后我们可以进行加法操作和减法操作：4 + 1 - 2。`c` 的值是 `3`。

_In all cases, however, I want to make sure you realize you can use parentheses to make any similar expression easier to read and comprehend._

然而，在所有的示例中，我都想确保你意识到你可以使用括号让任何相似的表达式更易读和易理解。

_Parentheses have higher priority over anything else._

括号的优先级比其它任何运算符都要高。

_The above example expression can be rewritten as:_

上述示例表达式可以被重写为：

_`int c = b + ((a * a) / b) - a;`_ 

```c
int c = b + ((a * a) / b) - a;
```

_and we don't have to think about it that much._

并且我们不必考虑太多。

## _Conditionals_

<h2 id="conditionals">条件语句</h2>

_Any programming language provides the programmers the ability to perform choices._

任何编程语言都给程序员提供了进行选择的能力。

_We want to do X in some cases, and Y in other cases._

我们想要在一些情况下进行 X，而在其它情况下进行 Y。

_We want to check data, and make choices based on the state of that data._

我们想检查数据，根据数据的状态做选择。

_C provides us 2 ways to do so._

C 给我们提供了两种方式。

_The first is the  `if`  statement, with its  `else`  helper, and the second is the  `switch`  statement._

第一种方式是带 `else` 的 `if` 语句，第二种是 `switch` 语句。

### _if_

### if

_In an  `if`  statement, you can check for a condition to be true, and then execute the block provided in the curly brackets:_

_`int a = 1;` 

`if (a == 1) {
  /* do something */
}`_ 

在 `if` 语句中，你可以在检查到条件为 true 的时候，执行花括号内的代码块：

```c
int a = 1;

if (a == 1) {
  /* 进行一些操作 */
}
```

_You can append an  `else`  block to execute a different block if the original condition turns out to be false:_

_`int a = 1;` 

`if (a == 2) {
  /* do something _/_ _} else {
  /_ do something else */
}`_ 

如果原始条件的结果是 false，你可以追加一个 `else` 块以不同的代码块：

```c
int a = 1;

if (a == 2) {
  /* 进行一些操作 */
} else {
  /* 进行另一些操作 */
}
```

_Beware of one common source of bugs - always use the comparison operator  `==`  in comparisons, and not the assignment operator  `=`. If you don't, the  `if`  conditional check will always be true, unless the argument is  `0`, for example if you do:_

_`int a = 0;` 

`if (a = 0) {
  /* never invoked */
}`_ 

谨防一种常见的缺陷源——总是在比较中使用比较运算符 `==`，而不是赋值运算符 `=`。如果你不这么做，除非参数为 `0`，否则 `if` 条件检查的结果将一直都是 true。例如，如果你这么做：

```c
int a = 0;

if (a = 0) {
  /* 永远都不会被调用 */
}
```

_Why does this happen? Because the conditional check will look for a boolean result (the result of a comparison), and the  `0`  number always equates to a false value. Everything else is true, including negative numbers._

为什么会这样呢？因为条件检查会寻找一个布尔类型的结果（比较的结果），数字 `0` 总是等于 false。其它的任何东西都是 true，包括负数。

_You can have multiple  `else`  blocks by stacking together multiple  `if`  statements:_

_`int a = 1;` 

`if (a == 2) {
  /* do something _/_ _} else if (a == 1) {
  /_ do something else _/
} else {
  /_ do something else again */
}`_ 

通过将多个 `if` 语句堆叠在一起，你可以有多个 `else` 块：

```c
int a = 1;

if (a == 2) {
  /* do something */
} else if (a == 1) {
  /* 进行一些操作 */
} else {
  /* 进行另一些操作 */
}
```

### _switch_

### switch

_If you need to do too many if / else / if blocks to perform a check, perhaps because you need to check the exact value of a variable, then  `switch`  can be very useful to you._

如果你的检查需要使用非常多的 if/else/if 块，可能是因为你需要检查变量的具体值，这时 `switch` 语句对你来说就非常有用了。

_You can provide a variable as condition, and a series of  `case`  entry points for each value you expect:_

_`int a = 1;` 

`switch (a) {
  case 0:
    /* do something _/_ _break;
  case 1:
    /_ do something else _/
    break;
  case 2:
    /_ do something else */
    break;
}`_ 

你可以提供一个变量作为条件，然后为期望的每个值使用一个 `case` 入口点：

```c
int a = 1;

switch (a) {
  case 0:
    /* 进行一些操作 */
    break;
  case 1:
    /* 进行另一些操作 */
    break;
  case 2:
    /* 进行另一些操作 */
    break;
```

_We need a  `break`  keyword at the end of each case to avoid the next case being executed when the one before ends. This "cascade" effect can be useful in some creative ways._

当前一个 case 执行完后，为了避免下一个 case 被执行，我们需要在每个 case 的末尾使用 `break` 关键字。这种“级联”效果在某些创造性方法中非常有用的。

_You can add a "catch-all" case at the end, labeled  `default`:_

_`int a = 1;` 

`switch (a) {
  case 0:
    /* do something _/_ _break;
  case 1:
    /_ do something else _/
    break;
  case 2:
    /_ do something else _/
    break;
  default:
    /_ handle all the other cases _/
    break;
}_`_ 

你可以在末尾添加一个“捕获所有的” case，名为 `default`：

```c
int a = 1;

switch (a) {
  case 0:
    /* 进行一些操作 */
    break;
  case 1:
    /* 进行另一些操作 */
    break;
  case 2:
    /* 进行另一些操作 */
    break;
  default:
    /* 处理所有其它的情况 */
    break;
}
```

## __Loops__

<h2 id="loops">循环</h2>

__C offers us three ways to perform a loop:  **for loops**,  **while loops**  and  **do while loops**. They all allow you to iterate over arrays, but with a few differences. Let's see them in detail.__

C 给我们提供了三种循环：**For 循环**、**while 循环** 和 **do while 循环**。它们都允许你在数组上进行迭代，但又各有不同。咱们仔细来看一看它们。

### __For loops__

### For 循环

__The first and probably most common way to perform a loop is  **for loops**.__

第一种执行循环是 **for 循环**，它可能也是最常见的循环。

__Using the  `for`  keyword we can define the  _rules_  of the loop up front, and then provide the block that is going to be executed repeatedly.__

使用 `for` 关键字时，我们可以先定义循环的 _规则_，然后提供反复执行的那个代码块。

__Like this:__

__`for (int i = 0; i <= 10; i++) {
  /`_ `instructions to be repeated _/
}_`_ 

就像这样：

```c
for (int i = 0; i <= 10; i++) {
  /* 反复执行的指令 */
}
``` 

__The  `(int i = 0; i <= 10; i++)`  block contains 3 parts of the looping details:__

-   __the initial condition (`int i = 0`)__
-   __the test (`i <= 10`)__
-   __the increment (`i++`)__

`(int i = 0; i <= 10; i++)` 代码块包含与循环细节有关的三个部分：

- 初始条件（`int i = 0`）
- 测试（`i <= 10`）
- 增长（`i++`）

__We first define a loop variable, in this case named  `i`.  `i`  is a common variable name to be used for loops, along with  `j`  for nested loops (a loop inside another loop). It's just a convention.__

我们首先定义循环变量，本示例中为 `i`。`i` 是循环中的一个常用变量名，`j` 是嵌套循环（循环内的循环）内使用的变量名。这只是一个惯例。

__The variable is initialized at the 0 value, and the first iteration is done. Then it is incremented as the increment part says (`i++`  in this case, incrementing by 1), and all the cycle repeats until you get to the number 10.__

变量 `i` 的值被初始化为 0，并且第一次迭代执行完毕。然后 `i` 像增长部分（这个示例中是 `i++`，递增 1）所说的那样增长，并且所有的循环会一直重复，直到 `i` 的值达到数字 10。

__Inside the loop main block we can access the variable  `i`  to know at which iteration we are. This program should print  `0 1 2 3 4 5 5 6 7 8 9 10`:__

__`for (int i = 0; i <= 10; i++) {
  /`_ `instructions to be repeated _/
  printf("%u ", i);
}_`_ 

在循环的主代码块内，我们可以访问变量 `i`，从而获知我们当前所处的是哪个迭代。这个程序应该打印 `0 1 2 3 4 5 5 6 7 8 9 10`：

```c
for (int i = 0; i <= 10; i++) {
  /* 反复执行的指令 */
  printf("%u ", i);
}
```

__Loops can also start from a high number, and go a lower number, like this:__

__`for (int i = 10; i > 0; i--) {
  /`_ `instructions to be repeated _/
}_`_ 

循环可以从较高的数字开始，往较低的数字逼近，就像这样：

```c
for (int i = 10; i > 0; i--) {
  /* 反复执行的指令 */
}
```

__You can also increment the loop variable by 2 or another value:__

__`for (int i = 0; i < 1000; i = i + 30) {
  /`_ `instructions to be repeated */
}`_ 

你也可以让循环变量的增量为 2 或者其它值：

```c
for (int i = 0; i < 1000; i = i + 30) {
  /* 反复执行的指令 */
}
```

### _While loops_

### while 循环

_**While loops**  is simpler to write than a  `for`  loop, because it requires a bit more work on your part._

**while 循环** 写起来比 `for` 循环要简单，因为它需要你在自己的部分做更多的事情。

_Instead of defining all the loop data up front when you start the loop, like you do in the  `for`  loop, using  `while`  you just check for a condition:_

_`while (i < 10) {` 

`}`_ 

使用 `while` 时，你只需要检查条件，而不用在循环开始时预先定义所有的循环数据（就像你在 `for` 循环中做的那样）：

```c
while (i < 10) {

}
```

_This assumes that  `i`  is already defined and initialized with a value._

这段代码假定 `i` 已经定义并且用某个值进行了初始化。

_And this loop will be an  **infinite loop**  unless you increment the  `i`  variable at some point inside the loop. An infinite loop is bad because it will block the program, allowing nothing else to happen._

除非你在循环内的某些地方增加变量 `i` 的值，否则这个循环会变成一个 **无限循环**。无限循环非常糟糕，因为它会阻塞程序，从而使其它任何事情都不会发生。

_This is what you need for a "correct" while loop:_

_`int i = 0;

while (i < 10) {
  /* do something */` 

 `i++;
}`_ 

对于一个“正确的” while 循环，这是你需要知道的：

```c
int i = 0;

while (i < 10) {
  /* 做点事情 */

  i++;
}
```

_There's one exception to this, and we'll see it in one minute. Before, let me introduce  `do while`._

其中有一个例外，我们将会在一分钟后看到它。在这之前，让我介绍下 `do while`。

### _Do while loops_

### Do while 循环

_While loops are great, but there might be times when you need to do one particular thing: you want to always execute a block, and then  _maybe_  repeat it._

while 循环非常棒，但是有些时候你可能需要做某件特定的事情：你总是想执行某个代码块，然后 _可能_ 一直重复它。

_This is done using the  `do while`  keyword. In a way it's very similar to a  `while`  loop, but slightly different:_

_`int i = 0;

do {
  /* do something */` 

 `i++;
} while (i < 10);`_ 

这可以通过 `do while` 关键字来完成。它在某种程度上和 `while` 循环非常类似，但是会有些许不同：

```c
int i = 0;

do {
  /* 做点事情 */

  i++;
} while (i < 10);
```

_The block that contains the  `/* do something _/_` _comment is always executed at least once, regardless of the condition check at the bottom.__

尽管条件检查在底部，但是包含注释 `/* 做点事情 */` 的代码块总是会至少执行一次。

__Then, until  `i`  is less than 10, we'll repeat the block.__

然后，只要 `i` 小于 10，我们都将会重复这个代码块。

### __Breaking out of a loop using break__

### 使用 break 跳出循环

__In all the C loops we have a way to break out of a loop at any point in time, immediately, regardless of the conditions set for the loop.__

在所有的 C 循环内，不管循环的条件设置得如何，我们都有一种在某个时间立即跳出循环的方法。

__This is done using the  `break`  keyword.__

这是通过 `break` 关键字来完成的。

__This is useful in many cases. You might want to check for the value of a variable, for example:__

__`for (int i = 0; i <= 10; i++) {
  if (i == 4 && someVariable == 10) {
    break;
  }
}`__ 

这在很多情况下非常有用，你可能想检查某个变量的值，例如：

```c
for (int i = 0; i <= 10; i++) {
  if (i == 4 && someVariable == 10) {
    break;
  }
}
```

__Having this option to break out of a loop is particularly interesting for  `while`  loops (and  `do while`  too), because we can create seemingly infinite loops that end when a condition occurs. You define this inside the loop block:__

__`int i = 0;
while (1) {
  /`_ `do something */` 

 `i++;
  if (i == 10) break;
}`_ 

对 `while` 循环（也适用于 `do while` 循环）来说，使用这种方式跳出循环非常有趣，因为我们可以创建一个看似无限的循环，不过我们可以在某个条件发生时结束这个循环。你可以在循环代码块里面定义它：

```c
int i = 0;
while (1) {
  /* 做点事情 */

  i++;
  if (i == 10) break;
}
```

_It's rather common to have this kind of loop in C._

这种循环在 C 中非常普遍。

## _Arrays_

<h2 id="arrays">数组</h2>

_An array is a variable that stores multiple values._

数组是存储多个变量的变量。

_Every value in the array, in C, must have the  **same type**. This means you will have arrays of  `int`  values, arrays of  `double`  values, and more._

在 C 中，数组中的每个值都必须有 **相同的类型**。这意味着你将会有 `int` 值组成的数组， `double` 值组成的数组，等等。

_You can define an array of  `int`  values like this:_

_`int prices[5];`_ 

你可以像这样定义一个 `int` 型的数组：

```c
int prices[5];
```

_You must always specify the size of the array. C does not provide dynamic arrays out of the box (you have to use a data structure like a linked list for that)._

你必须总是声明数组的大小。C 没有提供开箱即用的动态数组（为此，你必须使用像链表这样的数据结构）。

_You can use a constant to define the size:_

_`const int SIZE = 5;
int prices[SIZE];`_ 

你可以使用常量定义数组的大小：

```c
const int SIZE = 5;
int prices[SIZE];
```

_You can initialize an array at definition time, like this:_

_`int prices[5] = { 1, 2, 3, 4, 5 };`_ 

你可以在定义数组的时候进行初始化，就像这样：

```c
int prices[5] = { 1, 2, 3, 4, 5 };
```

_But you can also assign a value after the definition, in this way:_

_`int prices[5];` 

`prices[0] = 1;
prices[1] = 2;
prices[2] = 3;
prices[3] = 4;
prices[4] = 5;`_ 

但是你也可以在定义数组之后为其赋值，用这种方式：

```c
int prices[5];

prices[0] = 1;
prices[1] = 2;
prices[2] = 3;
prices[3] = 4;
prices[4] = 5;
```

_Or, more practical, using a loop:_

_`int prices[5];` 

`for (int i = 0; i < 5; i++) {
  prices[i] = i + 1;
}`_ 

或者使用循环，这更加实际：

```c
int prices[5];

for (int i = 0; i < 5; i++) {
  prices[i] = i + 1;
}
```

_And you can reference an item in the array by using square brackets after the array variable name, adding an integer to determine the index value. Like this:_

_`prices[0]; /* array item value: 1 _/_ _prices[1]; /_ array item value: 2 _/_`_ 

你总是可以通过在数据变量名后面使用方括号来引用一个数组项，在方括号中添加一个用来决定索引值的整数。就像这样：

```c
prices[0]; /* 第一个数组项的值 */
prices[1]; /* 第二个数组项的值 */
```

__Array indexes start from 0, so an array with 5 items, like the  `prices`  array above, will have items ranging from  `prices[0]`  to  `prices[4]`.__

数组的索引从 0 开始，所以一个有五个元素的数组，比如上面的 `prices` 数组，将会包含的数组项的范围为 `prices[0]` 到 `prices[4]`。

__The interesting thing about C arrays is that all elements of an array are stored sequentially, one right after another. Not something that normally happens with higher-level programming languages.__

有趣的是，C 数组中的所有元素都是顺序存放的，一个接一个。高级编程语言通常不会出现这种情况。

__Another interesting thing is this: the variable name of the array,  `prices`  in the above example, is a  **pointer**  to the first element of the array. As such it can be used like a normal pointer.__

另一件有趣的事情是：数组的变量名，上述示例中的 `prices`，是一个指向数组中首个元素的 **指针**。因此，可以像普通指针一样使用数组。

__More on pointers soon.__

稍后会介绍更多有关指针的内容。

## __Strings__

<h2 id="strings">字符串</h2>

__In C, strings are one special kind of array: a string is an array of  `char`  values:__

__`char name[7];`__ 

在 C 中，字符串是一种特殊的数组：字符串是由 `char` 值组成的数组：

```c
char name[7];
```

__I introduced the  `char`  type when I introduced types, but in short it is commonly used to store letters of the ASCII chart.__

我在介绍 C 中的数据类型时介绍过 `char` 类型，但是简而言之，它通常用于存储 ASCII 表中的字母。

__A string can be initialized like you initialize a normal array:__

__`char name[7] = { "F", "l", "a", "v", "i", "o" };`__ 

可以像初始化一个普通的数组那样初始化一个字符串：

```c
char name[7] = { "F", "l", "a", "v", "i", "o" };
```

__Or more conveniently with a string literal (also called string constant), a sequence of characters enclosed in double quotes:__

__`char name[7] = "Flavio";`__ 

或者使用更加方便的字符串字面量（也被称为字符串常量），一组用双引号引起来的字符：

```c
char name[7] = "Flavio";
```

__You can print a string via  `printf()`  using  `%s`:__

__`printf("%s", name);`__ 

你可以通过 `printf()` 打印字符串，使用 `%s`：

```c
printf("%s", name);
```

__Do you notice how "Flavio" is 6 chars long, but I defined an array of length 7? Why? This is because the last character in a string must be a `0`  value, the string terminator, and we must make space for it.__

你有注意到“Flavio”是 6 个字符长，但是我定义了一个长度为 7 的数组吗？这是因为字符串中的最后一个字符必须是 `0`，它是字符串的终止符号，我们必须给它留个位置。

__This is important to keep in mind especially when manipulating strings.__

记住这个非常重要，尤其是当你操作字符串的时候。

__Speaking of manipulating strings, there's one important standard library that is provided by C:  `string.h`.__

说到操作字符串，C 提供了一个非常重要的标准库：`string.h`。

__This library is essential because it abstracts many of the low level details of working with strings, and provides us with a set of useful functions.__

这个库是必不可少的，因为它抽象了很多与字符串有关的底层细节，给我们提供了一组非常有用的函数。

__You can load the library in your program by adding on top:__

__`#include <string.h>`__ 

你可以在程序中加载这个库，需要在文件顶部加上：

```c
#include <string.h>
```

__And once you do that, you have access to:__

-   __`strcpy()`  to copy a string over another string__
-   __`strcat()`  to append a string to another string__
-   __`strcmp()`  to compare two strings for equality__
-   __`strncmp()`  to compare the first  `n`  characters of two strings__
-   __`strlen()`  to calculate the length of a string__

一旦你这么做了之后，你就可以访问函数：

- `strcpy()`：将一个字符串复制到另一个字符串
- `strcat()`：将一个字符串追加到另一个字符串
- `strcmp()`：比较两个字符串是否相等
- `strncmp()`：比较两个字符串的前 `n` 个字符
- `strlen()`：计算字符串的长度

__and many, many more.__

还有很多很多其它的函数供你调用。

## __Pointers__

<h2 id="pointers">指针</h2>

__Pointers are one of the most confusing/challenging parts of C, in my opinion. Especially if you are new to programming, but also if you come from a higher level programming language like Python or JavaScript.__

在我看来，指针是 C 中最令人不解/最具挑战的部分。尤其当你是编程新手的时候，如果你是从像 Python 或 JavaScript 这样的高级语言来到 C 的，也会这样。

__In this section I want to introduce them in the simplest yet not-dumbed-down way possible.__

在这一节中，我想以最简单但又不模糊的方式介绍它们。

__A pointer is the address of a block of memory that contains a variable.__

指针是某个内存块的地址，这个内存块包含一个变量。

__When you declare an integer number like this:__

__`int age = 37;`__ 

当你像这样声明一个整数时：

```c
int age = 37;
```

__We can use the  `&`  operator to get the value of the address in memory of a variable:__

__`printf("%p", &age); /`_ `0x7ffeef7dcb9c _/_`_ 

我们可以使用 `&` 运算符获取内存中该变量的地址值：

```c
printf("%p", &age); /* 0x7ffeef7dcb9c */
```

__I used the  `%p`  format specified in  `printf()`  to print the address value.__

我在 `printf()` 内声明 `%p` 格式来打印地址值。

__We can assign the address to a variable:__

__`int`_ `address = &age;`_ 

我们可以将该地址赋给一个变量：

```c
int address = &age;
```

_Using  `int _address_` _in the declaration, we are not declaring an integer variable, but rather a  **pointer to an integer**.__

当在声明中使用 `int *address` 时，我们并没有在声明一个整数值，而是在声明一个 **指向一个整数的指针**。

__We can use the pointer operator_ to get the value of the variable an address is pointing to:_

_`int age = 37;
int *address = &age;
printf("%u", *address); /* 37 _/_`_ 

我们可以使用指针运算符获取该地址指向的变量的值：

```c
int age = 37;
int *address = &age;
printf("%u", *address); /* 37 */
```

__This time we are using the pointer operator again, but since it's not a declaration this time it means "the value of the variable this pointer points to".__

我们又一次使用指针运算符，但是由于这次它不是一个声明，所以它表示“该指针指向的变量的值”。

__In this example we declare an  `age`  variable, and we use a pointer to initialize the value:__

__`int age;
int`_ `address = &age;
*address = 37;
printf("%u", *address);`_ 

在这个示例中，我们声明了一个 `age` 变量，但是我们使用了一个指针来初始化它的值：

```c
int age;
int *address = &age;
*address = 37;
printf("%u", *address);
```

_When working with C, you'll find that a lot of things are built on top of this simple concept. So make sure you familiarize with it a bit by running the above examples on your own._

在使用 C 时，你会发现很多东西都建立在这个简单的概念之上。所以自己运行一下上面的示例，确保你对它有所熟悉。

_Pointers are a great opportunity because they force us to think about memory addresses and how data is organized._

指针是一个非常好的机会，因为它们迫使我们考虑内存地址以及数据是如何组织的。

_Arrays are one example. When you declare an array:_

_`int prices[3] = { 5, 4, 3 };`_ 

数组就是一个例子。当你声明一个数组时：

```c
int prices[3] = { 5, 4, 3 };
```

_The  `prices`  variable is actually a pointer to the first item of the array. You can get the value of the first item using this  `printf()`  function in this case:_

_`printf("%u", *prices); /* 5 _/_`_ 

`prices` 变量实际上是一个指向数组首个元素的指针。在这种情况下，你可以使用这个 `printf()` 函数获取第一个数组元素的值：

```c
printf("%u", *prices); /* 5 */
```

__The cool thing is that we can get the second item by adding 1 to the  `prices`  pointer:__

__`printf("%u",`_ `(prices + 1)); /* 4 */`_ 

我们可以通过给 `prices` 指针加一来获取第二个元素，这是一件非常酷的事情：

```c
printf("%u",`_ `(prices + 1)); /* 4 */
```

_And so on for all the other values._

这种做法对于所有的其它值也适用。

_We can also do many nice string manipulation operations, since strings are arrays under the hood._

我们还可以进行很多非常美妙的字符串操作，因为字符串的底层就是数组。

_We also have many more applications, including passing the reference of an object or a function around to avoid consuming more resources to copy it._

我们还有很多其它的使用场景，包括传递对象或函数的引用，从而避免消耗更多的资源来进行复制。

## _Functions_

<h2 id="functions">函数</h2>

_Functions are the way we can structure our code into subroutines that we can:_

1.  _give a name to_
2.  _call when we need them_

我们通过函数将代码组织成子例程，这样就可以：

1. 给它一个名字
2. 在需要它们的时候进行调用

_Starting from your very first program, a "Hello, World!", you immediately make use of C functions:_

_`#include <stdio.h>` 

`int main(void) {
    printf("Hello, World!");
}`_ 

从你的第一个程序（“Hello, World!”）开始，你就在使用 C 函数了：

```c
#include <stdio.h>

int main(void) {
    printf("Hello, World!");
}
```

_The  `main()`  function is a very important function, as it's the entry point for a C program._

`main()` 函数是一个非常重要的函数，它是 C 程序的入口点。

_Here's another function:_

_`void doSomething(int value) {
    printf("%u", value);
}`_ 

这是另一个函数：

```c
void doSomething(int value) {
    printf("%u", value);
}
```

_Functions have 4 important aspects:_

1.  _they have a name, so we can invoke ("call") them later_
2.  _they specify a return value_
3.  _they can have arguments_
4.  _they have a body, wrapped in curly braces_

函数有 4 个重要的方面：

1. 它们有一个名字，所以我们可以在之后调用它们
2. 它们声明一个返回值
3. 它们可以有参数
4. 它们有一个函数体，用花括号包裹

_The function body is the set of instructions that are executed any time we invoke a function._

函数体是一组指令，任何时候，只要函数被调用，这组指令就会被执行。

_If the function has no return value, you can use the keyword  `void`  before the function name. Otherwise you specify the function return value type (`int`  for an integer,  `float`  for a floating point value,  `const char *`  for a string, etc)._

如果函数没有返回值，你可以在函数名前面使用关键字 `void`。否则你就要声明该函数的返回值类型（整数为 `int`，浮点数为 `float`，字符串为 `const char *`，等等）。

_You cannot return more than one value from a function._

函数返回值的数量不能超过一个。

_A function can have arguments. They are optional. If it does not have them, inside the parentheses we insert  `void`, like this:_

_`void doSomething(void) {
   /* ... _/_ _}_`_ 

函数可以有参数。它们是可选的。如果函数没有参数，我们就在括号内插入 `void`，就像这样：

 ```c
void doSomething(void) {
   /* ... */
}
 ```

__In this case, when we invoke the function we'll call it with nothing in the parentheses:__

__`doSomething();`__ 

在这种情况下，当我们调用该函数时，括号内没有任何东西：

```c
doSomething();
```

__If we have one parameter, we specify the type and the name of the parameter, like this:__

__`void doSomething(int value) {
   /`_ `... _/
}_`_ 

如果有一个参数，我们就声明该参数的类型和名字，就像这样：

```c
void doSomething(int value) {
   /* ... */
}
```

__When we invoke the function, we'll pass that parameter in the parentheses, like this:__

__`doSomething(3);`__ 

当我们调用该函数时，我们会在括号内传递对应的参数，就像这样：

```c
doSomething(3);
```

__We can have multiple parameters, and if so we separate them using a comma, both in the declaration and in the invocation:__

__`void doSomething(int value1, int value2) {
   /`_ `... */
}` 

`doSomething(3, 4);`_ 

我们可以有多个参数，为此我们使用逗号对它们进行分隔，在声明和调用时都是这样：

```c
void doSomething(int value1, int value2) {
   /* ... */
}

doSomething(3, 4);
```

_Parameters are passed by  **copy**. This means that if you modify  `value1`, its value is modified locally. The value outside of the function, where it was passed in the invocation, does not change._

参数是通过 **拷贝** 传递的。这意味着如果你修改 `value1`，它的值是在局部作用域内修改的。函数外的那个值，即我们在调用时传入的值，并不会改变。

_If you pass a  **pointer**  as a parameter, you can modify that variable value because you can now access it directly using its memory address._

如果你传入的参数为一个 **指针**，你可以修改该变量的值，因为你现在可以使用它的内存地址直接访问它。

_You can't define a default value for a parameter. C++ can do that (and so Arduino Language programs can), but C can't._

你不能为参数定义默认值。C++ 是可以的（Arduino Language 程序也可以），但是 C 不行。

_Make sure you define the function before calling it, or the compiler will raise a warning and an error:_

_`➜  ~ gcc hello.c -o hello; ./hello
hello.c:13:3: warning: implicit declaration of
      function 'doSomething' is invalid in C99
      [-Wimplicit-function-declaration]
  doSomething(3, 4);
  ^
hello.c:17:6: error: conflicting types for
      'doSomething'
void doSomething(int value1, char value2) {
     ^
hello.c:13:3: note: previous implicit declaration
      is here
  doSomething(3, 4);
  ^
1 warning and 1 error generated.`_ 

确保你在调用函数之前定义了该函数，否则编译器将会给出一个警告和一个错误：

```
➜  ~ gcc hello.c -o hello; ./hello
hello.c:13:3: warning: implicit declaration of
      function 'doSomething' is invalid in C99
      [-Wimplicit-function-declaration]
  doSomething(3, 4);
  ^
hello.c:17:6: error: conflicting types for
      'doSomething'
void doSomething(int value1, char value2) {
     ^
hello.c:13:3: note: previous implicit declaration
      is here
  doSomething(3, 4);
  ^
1 warning and 1 error generated.
```

_The warning you get regards the ordering, which I already mentioned._

你收到的警告与顺序有关，我之前有提到过这个。

_The error is about another thing, related. Since C does not "see" the function declaration before the invocation, it must make assumptions. And it assumes the function to return  `int`. The function however returns  `void`, hence the error._

错误与另一件事情有关。因为 C 没有在调用函数之前没有“看到”该函数的声明，所以它必须进行假设。并且，它假设该函数返回 `int`。然而该函数返回的是 `void`，因此出现了错误。

_If you change the function definition to:_

_`int doSomething(int value1, int value2) {
  printf("%d %d\n", value1, value2);
  return 1;
}`_ 

如果你将该函数的定义修改为：

```c
int doSomething(int value1, int value2) {
  printf("%d %d\n", value1, value2);
  return 1;
}
```

_you'd just get the warning, and not the error:_

_`➜  ~ gcc hello.c -o hello; ./hello
hello.c:14:3: warning: implicit declaration of
      function 'doSomething' is invalid in C99
      [-Wimplicit-function-declaration]
  doSomething(3, 4);
  ^
1 warning generated.`_ 

你就只会得到警告，错误消失了：

```
➜  ~ gcc hello.c -o hello; ./hello
hello.c:14:3: warning: implicit declaration of
      function 'doSomething' is invalid in C99
      [-Wimplicit-function-declaration]
  doSomething(3, 4);
  ^
1 warning generated.
```

_In any case, make sure you declare the function before using it. Either move the function up, or add the function prototype in a header file._

不管是何种情况，确保你在使用函数之前声明了它。要么将函数上移，要么在头文件中加入该函数的原型。

_Inside a function, you can declare variables._

_`void doSomething(int value) {
  int doubleValue = value * 2;
}`_ 

在函数内部，你可以声明变量：

```c
void doSomething(int value) {
  int doubleValue = value * 2;
}
```

_A variable is created at the point of invocation of the function and is destroyed when the function ends. It's not visible from the outside._

变量在调用该函数的那一刻创建，并且在函数退出的时候销毁。它对函数外面来说是不可见的。

_Inside a function, you can call the function itself. This is called  **recursion**  and it's something that offers peculiar opportunities._

在函数内部，你可以调用函数自己。这被称为 **递归**，它提供了特有的机会。

## _Input and output_

<h2 id="input-and-output">输入与输出</h2>

_C is a small language, and the "core" of C does not include any Input/Output (I/O) functionality._

C 是一门小型语言，并且 C 的“内核”并不包含任何输入/输出（I/O）功能。

_This is not something unique to C, of course. It's common for the language core to be agnostic of I/O._

当然，这并不是 C 所独有的。语言内核与 I/O 无关是很常见的。

_In the case of C, Input/Output is provided to us by the C Standard Library via a set of functions defined in the  `stdio.h`  header file._

在 C 中，输入/输出由 C 的标准库通过一组定义在 `stdio.h` 头文件中的函数向我们提供。

_You can import this library using:_

_`#include <stdio.h>`_ 

_on top of your C file._

你可以在 C 文件顶部使用：

```c
#include <stdio.h>
```

导入这个库。

_This library provides us with, among many other functions:_

-   _`printf()`_
-   _`scanf()`_
-   _`sscanf()`_
-   _`fgets()`_
-   _`fprintf()`_

这个库给我们提供了很多其它的函数：

- `printf()`
- `scanf()`
- `sscanf()`
- `fgets()`
- `fprintf()`

_Before describing what those functions do, I want to take a minute to talk about  **I/O streams**._

在描述这个函数干啥之前，我想先花一分钟讲一下 **I/O 流**。

_We have 3 kinds of I/O streams in C:_

-   _`stdin`  (standard input)_
-   _`stdout`  (standard output)_
-   _`stderr`  (standard error)_

在 C 中，我们有三种类型的 I/O 流：

- `stdin`（标准输入）
- `stdout`（标准输出）
- `stderr`（标准错误）

_With I/O functions we always work with streams. A stream is a high level interface that can represent a device or a file. From the C standpoint, we don't have any difference in reading from a file or reading from the command line: it's an I/O stream in any case._

借助 I/O 函数，我们始终可以和流一起工作。流是一个高级接口，可以代表一个设备或文件。从 C 的角度来看，我们在从文件读取和命令行读取没有任何差异：不论如何，它都是一个 I/O 流。

_That's one thing to keep in mind._

那是我们需要牢记的一件事情。

_Some functions are designed to work with a specific stream, like  `printf()`, which we use to print characters to  `stdout`. Using its more general counterpart  `fprintf()`, we can specify which stream to write to._

某些函数是为与特定的流一起工作而设计的，就像 `printf()`一样，我们用它来将字符串打印到 `stdout`。使用它更加通用的版本 `fprintf()` 时，我们可以指定我们要写到的流。

_Since I started talking about  `printf()`, let's introduce it now._

由于我最开始谈论的是 `printf()`，咱们现在就介绍它吧。

_`printf()`  is one of the first functions you'll use when learning C programming._

`printf()` 是你在学习 C 编程时最先使用的函数之一。

_In its simplest usage form, you pass it a string literal:_

_`printf("hey!");`_ 

在它最简单的使用形式中，你给它传递一个字符串字面量：

```c
printf("hey!");
```

_and the program will print the content of the string to the screen._

并且程序会将该字符串的内容打印到屏幕上。

_You can print the value of a variable. But it's a bit tricky because you need to add a special character, a placeholder, which changes depending on the type of the variable. For example we use  `%d`  for a signed decimal integer digit:_

_`int age = 37;` 

`printf("My age is %d", age);`_ 

你可以打印一个变量的值。但是这有点棘手，因为你需要添加一个特殊的字符，一个占位符，它会根据变量的类型变化。例如，我们为有符号十进制整数使用 `%d`：

```c
int age = 37;

printf("My age is %d", age);
```

_We can print more than one variable by using commas:_

_`int age_yesterday = 37;
int age_today = 36;` 

`printf("Yesterday my age was %d and today is %d", age_yesterday, age_today);`_ 

通过使用逗号，我现在可以打印多个变量：

```c
int age_yesterday = 37;
int age_today = 36;

printf("Yesterday my age was %d and today is %d", age_yesterday, age_today);
```

_There are other format specifiers like  `%d`:_

-   _`%c`  for a char_
-   _`%s`  for a char_
-   _`%f`  for floating point numbers_
-   _`%p`  for pointers_

_and many more._

还有其它像 `%d` 一样的格式指示符：

- `%c` 用于字符
- `%s` 用于字符（串）
- `%f` 用于浮点数
- `%p` 用于指针

还有很多。

_We can use escape characters in  `printf()`, like  `\n`  which we can use to make the output create a new line._

我们可以在 `printf()` 中使用转义字符，比如 `\n` 可以用来让输出创建一个新行。

### _`scanf()`_

### `scanf()`

_`printf()`  is used as an output function. I want to introduce an input function now, so we can say we can do all the I/O thing:  `scanf()`._

`printf()` 被用作输出函数。我现在想介绍一个输入函数，这样我们就能完成所有的 I/O 操作：`scanf()`。

_This function is used to get a value from the user running the program, from the command line._

这个函数被用来从用户运行的程序，从命令行获取一个值。

_We must first define a variable that will hold the value we get from the input:_

_`int age;`_ 

我们必须先定义一个变量，它将被用来存放我们从输入中获取的值：

```c
int age;
```

_Then we call  `scanf()`  with 2 arguments: the format (type) of the variable, and the address of the variable:_

_`scanf("%d", &age);`_ 

然后我们调用 `scanf()`，传入两个参数：变量的格式（类型），和变量的地址：

```c
scanf("%d", &age);
```

_If we want to get a string as input, remember that a string name is a pointer to the first character, so you don't need the  `&`  character before it:_

_`char name[20];
scanf("%s", name);`_ 

如果我们想在输入时获取一个字符串，还记得字符串名是一个指向第一个字符的指针，所以你不需要在它前面加上 `&`：

```c
char name[20];
scanf("%s", name);
```

_Here's a little program that uses both  `printf()`  and  `scanf()`:_

_`#include <stdio.h>` 

`int main(void) {
  char name[20];
  printf("Enter your name: ");
  scanf("%s", name);
  printf("you entered %s", name);
}`_ 

这里是一个小程序，它同时使用了 `printf()` 和 `scanf()`：

```c
#include <stdio.h>

int main(void) {
  char name[20];
  printf("Enter your name: ");
  scanf("%s", name);
  printf("you entered %s", name);
}
```

## _Variable scope_

<h2 id="variable-scope">变量作用域</h2>

_When you define a variable in a C program, depending on where you declare it, it will have a different  **scope**._

当你在 C 程序中定义一个变量时，根据你声明它的位置，它会有一个不同的 **作用域（scope）**。

_This means that it will be available in some places, but not in others._

这意味着它将会在某些地方可用，而在其它地方不可用。

_The position determines 2 types of variables:_

-   _**global variables**_
-   _**local variables**_

该位置决定了两种类型的变量：

- **全局变量（global variables）**
- **局部变量（local variables）**

_This is the difference: a variable declared inside a function is a local variable, like this:_

_`int main(void) {
  int age = 37;
}`_ 

这就是区别：在函数内部声明的变量就是局部变量，比如这个：

```c
int main(void) {
  int age = 37;
}
```

_Local variables are only accessible from within the function, and when the function ends they stop their existence. They are cleared from the memory (with some exceptions)._

局部变量只有在函数内才能访问，它们会在函数结束后不复存在。它们会被从内存中清除掉（有一些例外）。

_A variable defined outside a function is a global variable, like in this example:_

_`int age = 37;` 

`int main(void) {
  /* ... */
}`_ 

定义在函数外部的变量就是全局变量，比如这个示例：

```c
int age = 37;

int main(void) {
  /* ... */
}
```

_Global variables are accessible from any function of the program, and they are available for the whole execution of the program, until it ends._

全局变量可以从程序中的任何一个函数访问，它们在整个程序的执行过程中都是可用的，直到程序结束。

_I mentioned that local variables are not available any more after the function ends._

我提到过局部变量在函数结束之后就不再可用。

_The reason is that local variables are declared on the  **stack**, by default, unless you explicitly allocate them on the heap using pointers. But then you have to manage the memory yourself._

原因是局部变量默认是在 **栈（stack）** 上声明的，除非你使用指针在堆中显式地分配它们。但是这样一来，你就不得不自己管理内存了。

## _Static variables_

<h2 id="static-variables">静态变量</h2>

_Inside a function, you can initialize a  **static variable**  using the  `static`  keyword._

在函数内部，你可以使用 `static` 关键字初始化一个 **静态变量（static variable）**。

_I said "inside a function" because global variables are static by default, so there's no need to add the keyword._

我说了“在函数内部”，因为全局变量默认就是静态的，所以没有必要再添加这个关键字。

_What's a static variable? A static variable is initialized to 0 if no initial value is specified, and it retains the value across function calls._

什么是静态变量？静态变量在没有声明初始值的时候会被初始化为 0，并且它会在函数调用中保持该值。

_Consider this function:_

_`int incrementAge() {
  int age = 0;
  age++;
  return age;
}`_ 

考虑这个函数：

```c
int incrementAge() {
  int age = 0;
  age++;
  return age;
}
```

_If we call  `incrementAge()`  once, we'll get  `1`  as the return value. If we call it more than once, we'll always get 1 back, because  `age`  is a local variable and it's re-initialized to  `0`  on every single function call._

如果我们调用一次 `incrementAge()`，我们将会得到返回值 `1`。如果我们再调用一次，我们总是会得到 1，因为 `age` 是一个局部变量并且在每次调用该函数的时候都会被重新初始化为 `0`。

_If we change the function to:_

_`int incrementAge() {
  static int age = 0;
  age++;
  return age;
}`_ 

如果我们将该函数改为：

```c
int incrementAge() {
  static int age = 0;
  age++;
  return age;
}
```

_Now every time we call this function, we'll get an incremented value:_

_`printf("%d\n", incrementAge());
printf("%d\n", incrementAge());
printf("%d\n", incrementAge());`_ 

_will give us_

_`1
2
3`_ 

现在我们每调用一次这个函数，我们就会得到一个增加了的值：

```c
printf("%d\n", incrementAge());
printf("%d\n", incrementAge());
printf("%d\n", incrementAge());
```

将会给我们：

```
1
2
3
```

_We can also omit initializing  `age`  to 0 in  `static int age = 0;`, and just write  `static int age;`  because static variables are automatically set to 0 when created._

我们也可以在 `static int age = 0;` 中省略初始化 `age` 为 0 的代码，只写 `static int age;`，因为静态变量在创建时会自动设置为 0。

_We can also have static arrays. In this case, each single item in the array is initialized to 0:_

_`int incrementAge() {
  static int ages[3];
  ages[0]++;
  return ages[0];
}`_ 

我们也可以有静态数组。这时，每一个数组元素都被初始化为 0：

```c
int incrementAge() {
  static int ages[3];
  ages[0]++;
  return ages[0];
}
```

## _Global variables_

<h2 id="global-variables">全局变量</h2>

_In this section I want to talk more about the difference between  **global and local variables**._

在这一节中，我想多谈论一点 **全局变量与局部变量** 之间的差异。

_A  **local variable**  is defined inside a function, and it's only available inside that function._

**局部变量** 被定义在函数内部，只在该函数内可用。

_Like this:_

_`#include <stdio.h>` 

`int main(void) {
  char j = 0;
  j += 10;
  printf("%u", j); //10
}`_ 

就像这样：

```c
#include <stdio.h>

int main(void) {
  char j = 0;
  j += 10;
  printf("%u", j); //10
}
```

_`j`  is not available anywhere outside the  `main`  function._

`j` 在 `main` 函数之外的任何地方都不可用。

_A  **global variable**  is defined outside of any function, like this:_

_`#include <stdio.h>

char i = 0;` 

`int main(void) {
  i += 10;
  printf("%u", i); //10
}`_ 


**全局变量** 定义在所有函数的外部，就像这样：

```c
#include <stdio.h>

char i = 0;

int main(void) {
  i += 10;
  printf("%u", i); //10
}
```

_A global variable can be accessed by any function in the program. Access is not limited to reading the value: the variable can be updated by any function._

全局变量可以被程序内的任何函数访问。该访问并不只局限于读取全局变量的值：任何函数都可以更新全局变量的值。

_Due to this, global variables are one way we have of sharing the same data between functions._

因此，全局变量是一种在函数间共享相同数据的一种方式。

_The main difference with local variables is that the memory allocated for variables is freed once the function ends._

局部变量的主要不同在于，分配给局部变量的内存会在函数结束之后立即释放。

_Global variables are only freed when the program ends._

全局变量只在程序结束时才会释放。

## _Type definitions_

<h2 id="type-definitions">类型定义</h2>

_The  `typedef`  keyword in C allows you to defined new types._

C 中的 `typedef` 关键字允许你定义新的类型。

_Starting from the built-in C types, we can create our own types, using this syntax:_

_`typedef existingtype NEWTYPE`_ 

我们可以从 C 内置的类型开始创建自己的类型，使用这个语法：

```c
typedef existingtype NEWTYPE
```

_The new type we create is usually, by convention, uppercase._

按照惯例，我们创建的新类型通常是大写的。

_This it to distinguish it more easily, and immediately recognize it as type._

这样可以更加容易区分它，并且可以立即识别出它是一种类型。

_For example we can define a new  `NUMBER`  type that is an  `int`:_

_`typedef int NUMBER`_ 

例如，我们可以定义一个新的 `NUMBER` 类型，它还是 `int`：

```c
typedef int NUMBER
```

_and once you do so, you can define new  `NUMBER`  variables:_

_`NUMBER one = 1;`_ 

一旦你这么做了之后，你就可以定义新的 `NUMBER` 变量了：

```c
NUMBER one = 1;
```

_Now you might ask: why? Why not just use the built-in type  `int`  instead?_

现在你可能会问：为什么？为什么不直接使用内置的 `int` 类型呢？

_Well,  `typedef`  gets really useful when paired with two things: enumerated types and structures._

嗯，当两个东西搭配在一起的时候，`typedef` 会变得真的很有用：枚举类型和结构体。

## _Enumerated types_

<h2 id="enumerated-types">枚举类型</h2>

_Using the  `typedef`  and  `enum`  keywords we can define a type that can have either one value or another._

使用 `typedef` 和 `enum` 关键字，我们可以定义具有指定值的类型。

_It's one of the most important uses of the  `typedef`  keyword._

这是 `typedef` 关键字最重要的使用场景之一。

_This is the syntax of an enumerated type:_

_`typedef enum {
  //...values
} TYPENAME;`_ 

这是枚举类型的语法：

```c
typedef enum {
  //...值
}
```

_The enumerated type we create is usually, by convention, uppercase._

按照惯例，我们创建的枚举类通常是大写的。

_Here is a simple example:_

_`typedef enum {
  true,
  false
} BOOLEAN;`_ 

这里是一个简单的示例：

```c
typedef enum {
  true,
  false
} BOOLEAN;
```

_C comes with a  `bool`  type, so this example is not really practical, but you get the idea._

C 自带 `bool` 类型，所以这个示例并不实用，但是它会让你领悟到其中的精髓。

_Another example is to define weekdays:_

_`typedef enum {
  monday,  
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
} WEEKDAY;`_ 

另一个示例是定义一周中的那几个日子：

```c
typedef enum {
  monday,  
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
} WEEKDAY;
```

_Here's a simple program that uses this enumerated type:_

_`#include <stdio.h>

typedef enum {
  monday,  
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
} WEEKDAY;

int main(void) {
  WEEKDAY day = monday;` 

 `if (day == monday) {
    printf("It's monday!"); 
  } else {
    printf("It's not monday"); 
  }
}`_ 

这里是使用这个枚举类的一个简单程序：

```c
#include <stdio.h>

typedef enum {
  monday,  
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
} WEEKDAY;

int main(void) {
  WEEKDAY day = monday;

  if (day == monday) {
    printf("It's monday!"); 
  } else {
    printf("It's not monday"); 
  }
}
```

_Every item in the enum definition is paired to an integer, internally. So in this example  `monday`  is 0,  `tuesday`  is 1 and so on._

枚举定义中的每个枚举项在内部都与一个整数配对。所以在这个示例中 `monday` 是 0，`tuesday` 是 1，以此类推。

_This means the conditional could have been  `if (day == 0)`  instead of  `if (day == monday)`, but it's way simpler for us humans to reason with names rather than numbers, so it's a very convenient syntax._

这意味着对应的条件可以是 `if (day == 0)` 而不是 `if (day == monday)`，但是对于我们人类来说，使用名字比数字更合理，所以它是一个非常便利的语法。

## _Structures_

<h2 id="structures">结构体</h2>

_Using the  `struct`  keyword we can create complex data structures using basic C types._

利用 `struct` 关键字，我们可以使用基本的 C 类型创建复杂的数据结构。

_A structure is a collection of values of different types. Arrays in C are limited to a type, so structures can prove to be very interesting in a lot of use cases._

结构体是一组由不同类型的值组成的集合。C 中的数组被限制为一种类型，所以结构体在很多用例中会显得非常有趣。

_This is the syntax of a structure:_

_`struct <structname> {
  //...variables
};`_ 


这里是结构体的语法：

```c
struct <structname> {
  //变量……
};
```

_Example:_

_`struct person {
  int age;
  char *name;
};`_ 

示例：

```c
struct person {
  int age;
  char *name;
};
```

_You can declare variables that have as type that structure by adding them after the closing curly bracket, before the semicolon, like this:_

_`struct person {
  int age;
  char *name;
} flavio;`_ 

通过将变量添加到右花括号之后，分号之前，你可以声明类型为该结构体的变量，就像这样：

```c
struct person {
  int age;
  char *name;
} flavio;
```

_Or multiple ones, like this:_

_`struct person {
  int age;
  char *name;
} flavio, people[20];`_ 

或者多个变量也行，就像这样：

```c
struct person {
  int age;
  char *name;
} flavio, people[20];
```

_In this case I declare a single  `person`  variable named  `flavio`, and an array of 20  `person`  named  `people`._

这次我声明一个名为 `flavio` 的 `person` 变量，以及一个具有 20 个 `person` 的名为 `people` 的数组。

_We can also declare variables later on, using this syntax:_

_`struct person {
  int age;
  char *name;
};` 

`struct person flavio;`_ 

我们也可以稍后再声明变量，使用这个语法：

```c
struct person {
  int age;
  char *name;
};

struct person flavio;
```

_We can initialize a structure at declaration time:_

_`struct person {
  int age;
  char *name;
};` 

`struct person flavio = { 37, "Flavio" };`_ 

我们可以在声明的时候初始化一个结构体：

```c
struct person {
  int age;
  char *name;
};

struct person flavio = { 37, "Flavio" };
```

_and once we have a structure defined, we can access the values in it using a dot:_

_`struct person {
  int age;
  char *name;
};` 

`struct person flavio = { 37, "Flavio" };
printf("%s, age %u", flavio.name, flavio.age);`_ 

一旦定义了结构体，我们就可以使用一个点（`.`）来访问它里面的值了：

```c
struct person {
  int age;
  char *name;
};

struct person flavio = { 37, "Flavio" };
printf("%s, age %u", flavio.name, flavio.age);
```

_We can also change the values using the dot syntax:_

_`struct person {
  int age;
  char *name;
};

struct person flavio = { 37, "Flavio" };` 

`flavio.age = 38;`_ 

我们也可以使用点语法改变结构体中的值：

```c
struct person {
  int age;
  char *name;
};

struct person flavio = { 37, "Flavio" };

flavio.age = 38;
```

_Structures are very useful because we can pass them around as function parameters, or return values, embedding various variables within them. Each variable has a label._

结构体非常有用，因为它们既可以作为函数的参数，也可以作为函数的返回值，以及它们内部的嵌入变量。每个变量都有一个标签。

_It's important to note that structures are  **passed by copy**, unless of course you pass a pointer to a struct, in which case it's passed by reference._

注意到结构体是 **复制传递** 的，这一点很重要，除非，当然你可以传递一个指向结构体的指针，这种情况下它就是引用传递。

_Using  `typedef`  we can simplify the code when working with structures._

使用 `typedef`，我们可以简化处理结构体时的代码。

_Let's look at an example:_

_`typedef struct {
  int age;
  char *name;
} PERSON;`_ 

咱们看一个示例：

```c
typedef struct {
  int age;
  char *name;
} PERSON;
```

_The structure we create using  `typedef`  is usually, by convention, uppercase._

按照惯例，我们使用 `typedef` 创建的结构体通常是大写的。

_Now we can declare new  `PERSON`  variables like this:_

_`PERSON flavio;`_ 

现在，我们可以像这样声明一个新的 `PERSON` 变量：

```c
PERSON flavio;
```

_and we can initialize them at declaration in this way:_

_`PERSON flavio = { 37, "Flavio" };`_ 

并且我们可以用这种方式在声明的时候初始化它们：

```c
PERSON flavio = { 37, "Flavio" };
```

## _Command line parameters_

<h2 id="commandline-parameters">命令行参数</h2>

_In your C programs, you might need to accept parameters from the command line when the command launches._

在 C 程序中，你可能需要在命令启动时从命令行接收参数。

_For simple needs, all you need to do to do so is change the  `main()`  function signature from_

_`int main(void)`_ 

_to_

_`int main (int argc, char *argv[])`_ 

对于简单的需求而言，你只需要将 `main()` 函数的签名从 

```c
int main(void)
```

修改为

```c
int main (int argc, char *argv[])
```

_`argc`  is an integer number that contains the number of parameters that were provided in the command line._

`argc` 是一个整数，包含从命令行提供的参数的数量。

_`argv`  is an array of strings._

`argv` 是一个字符串数组。

_When the program starts, we are provided the arguments in those 2 parameters._

当程序开始运行时，我们用这两个参数给主函数提供参数。

_Note that there's always at least one item in the  `argv`  array: the name of the program_

注意 `argv` 数组中总是至少有一个元素：程序的名字。

_Let's take the example of the C compiler we use to run our programs, like this:_

_`gcc hello.c -o hello`_ 

咱们以我们用来运行程序的 C 编译器作为示例吧，就像这样：

```c
gcc hello.c -o hello
```

_If this was our program, we'd have  `argc`  being 4 and  `argv`  being an array containing_

-   _`gcc`_
-   _`hello.c`_
-   _`-o`_
-   _`hello`_

如果这就是我们的程序，我们的 `argc` 将会是 4，`argv` 将是一个包含以下内容的数组：

- `gcc`
- `hello.c`
- `-o`
- `hello`

_Let's write a program that prints the arguments it receives:_

_`#include <stdio.h>` 

`int main (int argc, char *argv[]) {
  for (int i = 0; i < argc; i++) {
    printf("%s\n", argv[i]);
  }
}`_ 

咱们写一个打印它收到的参数的程序吧：

```c
#include <stdio.h>

int main (int argc, char *argv[]) {
  for (int i = 0; i < argc; i++) {
    printf("%s\n", argv[i]);
  }
}
```

_If the name of our program is  `hello`  and we run it like this:  `./hello`, we'd get this as output:_

_`./hello`_ 

如果我们的程序名为 `hello`，并且我们像这样运行它：`./hello`，我们就会得到以下输出：

```
./hello
```

_If we pass some random parameters, like this:  `./hello a b c`  we'd get this output to the terminal:_

_`./hello
a
b
c`_ 

如果我们传递一些随机参数，就像这样：`./hello a b c`，我们竟会在终端中得到这个输出：

```
./hello
a
b
c
```

_This system works great for simple needs. For more complex needs, there are commonly used packages like  **getopt**._

对于简单的需求而言，这个系统工作得很好。对于更加复杂的需求，有一些常用的包，比如 **getopt**。

## _Headers files_

<h2 id="headers-files">头文件</h2>

_Simple programs can be put in a single file. But when your program grows larger it's impossible to keep it all in just one file._

简单的程序可以直接放在单个文件中。但是当你的程序变大，将它放在单个文件中就不可能了。

_You can move parts of a program to a separate file. Then you create a  **header file**._

你可以将程序一些部分移动到一个单独的文件中，然后创建一个 **头文件**。

_A header file looks like a normal C file, except it ends with  `.h`  instead of  `.c`. Instead of the implementations of your functions and the other parts of a program, it holds the  **declarations**._

头文件看起来就像普通的 C 文件一样，但是它是以 `.h` 而不是 `.c` 结尾的。它里面的内容是 **声明**，而不是函数的实现和程序的其它部分。

_You already used header files when you first used the  `printf()`  function, or other I/O function, and you had to type:_

_`#include <stdio.h>`_ 

_to use it._

你已经在第一次使用 `printf()` 函数或其它 I/O 函数的时候使用过头文件了，如果你要使用它，需要输入以下内容：

```c
#include <stdio.h>
```

_`#include`  is a preprocessor directive._

`#include` 是一个预处理器指令。

_The preprocessor goes and looks up the  `stdio.h`  file in the standard library because you used brackets around it. To include your own header files, you'll use quotes, like this:_

_`#include "myfile.h"`_ 

该预处理器会在标准库中寻找 `stdio.h` 文件，因为你使用了花括号包裹它。若要包含你自己的头文件，你需要使用引号（`"`），就像这样：

```c
#include "myfile.h"
```

_The above will look up  `myfile.h`  in the current folder._

上述代码会让预处理器在当前文件夹内寻找 `myfile.h`。

_You can also use a folder structure for libraries:_

_`#include "myfolder/myfile.h"`_ 

你也可以使用文件夹结构的库：

```c
#include "myfolder/myfile.h"
```

_Let's look at an example. This program calculates the years since a given year:_

_`#include <stdio.h>

int calculateAge(int year) {
  const int CURRENT_YEAR = 2020;
  return CURRENT_YEAR - year;
}` 

`int main(void) {
  printf("%u", calculateAge(1983));
}`_ 

咱们看一个示例。这个程序计算自给定年份以来的年数：

```c
#include <stdio.h>

int calculateAge(int year) {
  const int CURRENT_YEAR = 2020;
  return CURRENT_YEAR - year;
}

int main(void) {
  printf("%u", calculateAge(1983));
}
```

_Suppose I want to move the  `calculateAge`  function to a separate file._

假设我想将 `caculateAge` 函数移到一个单独的文件中。

_I create a  `calculate_age.c`  file:_

_`int calculateAge(int year) {
  const int CURRENT_YEAR = 2020;
  return CURRENT_YEAR - year;
}`_ 

我创建一个名为 `calculate_age.c` 的文件：

```c
int calculateAge(int year) {
  const int CURRENT_YEAR = 2020;
  return CURRENT_YEAR - year;
}
```

_And a  `calculate_age.h`  file where I put the  _function prototype_, which is the same as the function in the  `.c`  file, except the body:_

_`int calculateAge(int year);`_ 

我还创建了一个名为 `calculate_age.h` 的文件，我在其中放入了 _函数原型_，除了函数体，它与 `.c` 文件中的函数完全相同：

```c
int calculateAge(int year);
```

_Now in the main  `.c`  file we can go and remove the  `calculateAge()`  function definition, and we can import  `calculate_age.h`, which will make the  `calculateAge()`  function available:_

_`#include <stdio.h>
#include "calculate_age.h"` 

`int main(void) {
  printf("%u", calculateAge(1983));
}`_ 


现在在主 `.c` 文件中，我们可以移除 `calculateAge()` 函数的定义，并且我们可以导入 `calculate_age.h`，它会让 `calculateAge()` 函数可用：

```c
#include <stdio.h>
#include "calculate_age.h"

int main(void) {
  printf("%u", calculateAge(1983));
}
```

_Don't forget that to compile a program composed by multiple files, you need to list them all in the command line, like this:_

_`gcc -o main main.c calculate_age.c`_ 

别忘了编译多个文件组成的程序，你需要在命令行中列出它们，就像这样：

```sh
gcc -o main main.c calculate_age.c
```

_And with more complex setups, a Makefile is necessary to tell the compiler how to compile the program._

如果配置更加复杂，一个告诉编译器如何编译该程序的 Makefile 是必需的。

## _The preprocessor_

<h2 id="the-preprocessor">预处理器</h2>

_The preprocessor is a tool that helps us a lot when programming with C. It is part of the C Standard, just like the language, the compiler, and the standard library._

预处理器是一个工具，当我们用 C 编程时，它对我们有很大的帮助。它是 C 标准的一部分，就像语言本身、编译器和标准库一样。

_It parses our program and makes sure that the compiler gets all the things it needs before going on with the process._

它解析我们的程序，确保编译器在处理之前获得所有需要的东西。

_What does it do, in practice?_

在实践中，它是做什么的呢？

_For example, it looks up all the header files you include with the  `#include`  directive._

例如，它查找你使用 `#include` 指令包含的所有头文件。

_It also looks at every constant you defined using  `#define`  and substitutes it with its actual value._

它还查看你使用 `#define` 定义的每个常量并将其替换为实际的值。

_That's just the start. I mentioned those 2 operations because they are the most common ones. The preprocessor can do a lot more._

这只是一个开始。我提到了这两个操作，是因为它们是最常见的两个。预处理器能做的事情还有很多。

_Did you notice `#include`  and `#define`  have a  `#`  at the beginning? That's common to all the preprocessor directives. If a line starts with  `#`, that's taken care of by the preprocessor._

你有注意到 `#include` 和 `#define` 在开头有一个 `#` 吗？那在预处理器指令中是很常见的。如果某一行以 `#` 开始，它就会被预处理器关照。

### _Conditionals_

### 条件

_One of the things we can do is to use conditionals to change how our program will be compiled, depending on the value of an expression._

我们能做的一件事情是使用条件让表达式决定程序的编译方式。

_For example we can check if the  `DEBUG`  constant is 0:_

_`#include <stdio.h>

const int DEBUG = 0;` 

`int main(void) {
#if DEBUG == 0
  printf("I am NOT debugging\n");
#else
  printf("I am debugging\n");
#endif
}`_ 

例如，我们可以检查 `DEBUG` 常量是否为 0：

```c
#include <stdio.h>

const int DEBUG = 0;

int main(void) {
#if DEBUG == 0
  printf("I am NOT debugging\n");
#else
  printf("I am debugging\n");
#endif
}
```

### _Symbolic constants_

### 符号常量

_We can define a  **symbolic constant**:_

_`#define VALUE 1
#define PI 3.14
#define NAME "Flavio"`_ 

我们可以定义一个 **符号常量（symbolic constant）**：

```c
#define VALUE 1
#define PI 3.14
#define NAME "Flavio"
```

_When we use NAME or PI or VALUE in our program, the preprocessor replaces its name with the value before executing the program._

当我们在自己的程序中使用 NAME 或 PI 或 VALUE 时，预处理器会在执行程序之前将名字替换成对应的值。

_Symbolic constants are very useful because we can give names to values without creating variables at compilation time._

符号常量非常有用，因为我们可以给值名字，而不用在编译时创建变量。

### _Macros_

### 宏

_With  `#define`  we can also define a  **macro**. The difference between a macro and a symbolic constant is that a macro can accept an argument and typically contains code, while a symbolic constant is a value:_

_`#define POWER(x) ((x) * (x))`_ 

我们还可以使用 `#define` 定义 **宏（macro）**。宏与符号常量之间的差别在于：宏可以接受一个参数，并且通常包含代码，而符号常量只是一个值：

```c
#define POWER(x) ((x) * (x))
```

_Notice the parentheses around the arguments: this is a good practice to avoid issues when the macro is replaced in the precompilation process._

注意参数两侧的括号：当宏在预编译过程中被替换时，这是一个避免问题的好方法。

_Then we can use it in our code like this:_

_`printf("%u\n", POWER(4)); //16`_ 

然后我们可以在代码中使用它，像这样：

```c
printf("%u\n", POWER(4)); //16
```

_The big difference with functions is that macros do not specify the type of their arguments or return values, which might be handy in some cases._

它与函数之间的一个大差别就是：宏不会声明参数或返回值的类型，这在一些场景中可能很方便。

_Macros, however, are limited to one line definitions._

然而，宏的定义被限制成只有一行。

### _If defined_

### If defined

_We can check if a symbolic constant or a macro is defined using  `#ifdef`:_

_`#include <stdio.h>
#define VALUE 1` 

`int main(void) {
#ifdef VALUE
  printf("Value is defined\n");
#else
  printf("Value is not defined\n");
#endif
}`_ 

我们可以使用 `#ifdef` 来检查某个符号常量或宏是否被定义过：

```c
#include <stdio.h>
#define VALUE 1

int main(void) {
#ifdef VALUE
  printf("Value is defined\n");
#else
  printf("Value is not defined\n");
#endif
}
```

_We also have  `#ifndev`  to check for the opposite (macro not defined)._

我们也可以使用 `#ifndev` 检查对立面（宏未定义）。

_We can also use  `#if defined`  and  `#if !defined`  to do the same task._

我们还可以使用 `#if defined` 和 `#if !defined` 来达到同样的目的。

_It's common to wrap some block of code into a block like this:_

_`#if 0` 

`#endif`_ 

像这样将一些代码块包裹到单个块中是很常见的：

```c
#if 0

#endif
```

_to temporarily prevent it from running, or to use a DEBUG symbolic constant:_

_`#define DEBUG 0` 

`#if DEBUG
  //code only sent to the compiler
  //if DEBUG is not 0
#endif`_ 

这样可以临时防止程序运行，也可以使用一个 DEBUG 符号常量：

```c
#define DEBUG 0

#if DEBUG
  // 当 DEBUG 不为 0 时，代码才会被发给编译器
#endif
```

### _Predefined symbolic constants you can use_

_The preprocessor also defines a number of symbolic constants you can use, identified by the 2 underscores before and after the name, including:_

-   _`**LINE**`  translates to the current line in the source code file_
-   _`**FILE**`  translates to the name of the file_
-   _`**DATE**`  translates to the compilation date, in the  `Mmm gg aaaa`  format_
-   _`**TIME**`  translates to the compilation time, in the  `hh:mm:ss`  format_

### 你可以使用的预定义的符号常量

预处理器还定义了很多你可以直接使用的符号常量，它们的名字的前后有两个下划线作为标识，包括：

- **`__LINE__`** 代表源代码文件中的当前行
- **`__FILE__`** 代表文件的名字
- **`__DATE__`** 表示编译日期，格式为 `Mmm gg aaaa`
- **`__TIME__`** 表示编译实践，格式为 `hh:mm:ss`

## _Conclusion_

<h2 id="conclusion">结语</h2>

_Thanks a lot for reading this handbook!_

非常感谢阅读本手册！

_I hope it will inspire you to know more about C._

我希望它将鼓励你去了解更多有关 C 的知识。

_For more tutorials, check out my blog  [flaviocopes.com][24]._

若想查看更多教程，你可以访问我的[博客](https://flaviocopes.com/)。

_Send any feedback, errata, or opinions at  [hey@flaviocopes.com][25]_

通过 [hey@flaviocopes.com](mailto:hey@flaviocopes.com) 给我发送反馈、勘误或者意见。

_And remember:  [You can get a PDF and ePub version of this C Beginner's Handbook][26]_

记住：[你可以从这里获得这本手册的 PDF 或 ePub 版本][26]。

_You can reach me on Twitter  [@flaviocopes][27]._

你可以在 Twitter [@flaviocopes][27] 联系我。

[1]: https://flaviocopes.com/page/c-handbook/
[2]: https://www.freecodecamp.org/news/the-c-beginners-handbook/#introduction-to-c
[3]: https://www.freecodecamp.org/news/the-c-beginners-handbook/#variables-and-types
[4]: https://www.freecodecamp.org/news/the-c-beginners-handbook/#constants
[5]: https://www.freecodecamp.org/news/the-c-beginners-handbook/#operators
[6]: https://www.freecodecamp.org/news/the-c-beginners-handbook/#conditionals
[7]: https://www.freecodecamp.org/news/the-c-beginners-handbook/#loops
[8]: https://www.freecodecamp.org/news/the-c-beginners-handbook/#arrays
[9]: https://www.freecodecamp.org/news/the-c-beginners-handbook/#strings
[10]: https://www.freecodecamp.org/news/the-c-beginners-handbook/#pointers
[11]: https://www.freecodecamp.org/news/the-c-beginners-handbook/#functions
[12]: https://www.freecodecamp.org/news/the-c-beginners-handbook/#input-and-output
[13]: https://www.freecodecamp.org/news/the-c-beginners-handbook/#variables-scope
[14]: https://www.freecodecamp.org/news/the-c-beginners-handbook/#static-variables
[15]: https://www.freecodecamp.org/news/the-c-beginners-handbook/#global-variables
[16]: https://www.freecodecamp.org/news/the-c-beginners-handbook/#type-definitions
[17]: https://www.freecodecamp.org/news/the-c-beginners-handbook/#enumerated-types
[18]: https://www.freecodecamp.org/news/the-c-beginners-handbook/#structures
[19]: https://www.freecodecamp.org/news/the-c-beginners-handbook/#command-line-parameters
[20]: https://www.freecodecamp.org/news/the-c-beginners-handbook/#header-files
[21]: https://www.freecodecamp.org/news/the-c-beginners-handbook/#the-preprocessor
[22]: https://www.freecodecamp.org/news/the-c-beginners-handbook/#conclusion
[23]: http://localhost:4000/c-introduction
[24]: https://flaviocopes.com/
[25]: mailto:hey@flaviocopes.com
[26]: https://flaviocopes.com/page/c-handbook/
[27]: https://twitter.com/flaviocopes
