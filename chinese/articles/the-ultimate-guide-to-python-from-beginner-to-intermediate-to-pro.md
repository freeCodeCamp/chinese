> -   原文地址：[The Ultimate Guide to Python: How to Go From Beginner to Pro](https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/)
> -   原文作者：Sharvin Shah
> -   译者：zhannicholas
> -   校对者：

  
![The Ultimate Guide to Python: How to Go From Beginner to Pro](https://www.freecodecamp.org/news/content/images/size/w2000/2020/05/The-Ultimate-Guide-To-Python-1.png)

![Python 终极指南: 进阶之路](https://www.freecodecamp.org/news/content/images/size/w2000/2020/05/The-Ultimate-Guide-To-Python-1.png)

If you have an interest in Data Science, Web Development, Robotics, or IoT you must learn Python. Python has become the fastest-growing programming language due to its heavy usage and wide range of applications.

如果你对数据科学、Web 开发、机器人或物联网感兴趣，Python 非学不可。由于 Python 的大量使用和广泛应用，它已经成为了增长最快的编程语言。

For a beginner or a person from a non-tech background, learning Python is a good choice. The syntax is like talking and writing plain English. For example, consider this syntax which shows its resemblance to the English language.

对于一个初学者或没有技术背景的人来说，学习 Python 是一个不错的选择。它的语法就像使用通俗英语说话和写作一样。以这个语法为例，它展示了和英语的相似性：

```python
print("Hello folks")
```

We will use  `Python3`  in this tutorial as it is widely used. Most of Python's frameworks and libraries support this version.

我们将在这篇教程中采用被广泛使用的 `Python3`，大多数 Python 的框架和库都支持这个版本。

> **Note:**  Any version above 3.5.2 supports most of the libraries and frameworks.

> **注意：** 任何高于 3.5.2 的版本都支持绝大多数库和框架。

## Index:

1.  [Introduction][1]
2.  [Installation][2]
3.  [Python shell][3]
4.  [Comment][4]
5.  [Print][5]
6.  [Indentation][6]
7.  [Variables][7]
8.  [Operators][8]
9.  [Conditional Statements][9]
10.  [For Loops][10]
11.  [While loops][11]
12.  [User Input][12]
13.  [Typecasting][13]
14.  [Dictionaries][14]
15.  [Lists][15]
16.  [Tuples][16]
17.  [Sets][17]
18.  [Functions and Arguments][18]
19.  [Args][19]
20.  [keyword Arguments][20]
21.  [Default Arguments][21]
22.  [kwargs][22]
23.  [Scope][23]
24.  [Return Statement][24]
25.  [Lambda Expression][25]
26.  [List comprehension][26]
27.  [OOPS concepts][27]
28.  [Classes][28]
29.  [Methods][29]
30.  [Objects][30]
31.  [Constructor][31]
32.  [Instance attribute][32]
33.  [Class attributes][33]
34.  [Self][34]
35.  [Inheritance][35]
36.  [Super][36]
37.  [Multiple Inheritance][37]
38.  [Polymorphism][38]
39.  [Encapsulation][39]
40.  [Decorators][40]
41.  [Exceptions][41]
42.  [Package Import][42]
43.  [JSON Handling][43]

## 索引：

1.  [绪论](#绪论)
2.  [安装](#安装)
3.  [Python shell](#python-shell)
4.  [注释](#注释)
5.  [打印](#打印)
6.  [缩进](#缩进)
7.  [变量](#变量)
8.  [运算符](#运算符)
9.  [条件语句](#条件语句)
10.  [For 循环](#for-loops)
11.  [While 循环](#while-loops)
12.  [用户输入](#用户输入)
13.  [类型转换](#类型转换)
14.  [字典](#字典)
15.  [列表](#列表)
16.  [元组](#元组)
17.  [集合](#集合)
18.  [函数与参数](#函数与参数)
19.  [Args](#Args)
20.  [关键字参数](#关键字参数)
21.  [默认参数](#默认参数)
22.  [kwargs](#kwargs)
23.  [作用域](#作用域)
24.  [Return 语句](#return-statement)
25.  [Lambda 表达式](#lambda-expression)
26.  [列表推导式](#列表推导式)
27.  [面向对象编程](#面向对象编程)
28.  [类](#类)
29.  [方法](#方法)
30.  [对象](#对象)
31.  [构造器](#构造器)
32.  [实例属性](#实例属性)
33.  [类属性](#类属性)
34.  [Self](#Self)
35.  [继承](#继承)
36.  [Super](#Super)
37.  [多重继承](#多重继承)
38.  [多态](#多态)
39.  [封装](#封装)
40.  [装饰器](#装饰器)
41.  [异常](#异常)
42.  [包的导入](#包的导入)
43.  [JSON 处理](#json-handling)

**Note:**  The beginning of this guide is geared towards beginners. If you have intermediate experience in Python, feel free to skip ahead using the links above.

**注意：** 这篇指南的开头部分是为初学者准备的。如果你拥有中级 Python 经验，随时可以使用上面的链接向前跳转。

## **Introduction**:

## 绪论：

As per Github's  [octoverse][44], Python is the second most used language by developers in 2019.

根据 Github 的 [octoverse][44]，Python 是 2019 年被开发者使用第二多的语言。

![](https://www.freecodecamp.org/news/content/images/2020/04/Screenshot-2020-04-29-at-6.53.10-PM.png)

Octoverse graph of how languages have evolved

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/04/Screenshot-2020-04-29-at-6.53.10-PM.png"/>
    <figcaption style="text-align: center">Octoverse 编程语言演变图</figcaption>
</figure>

Before learning any language, it's helpful to know how that language came into existence. Well, Python was developed by  [Guido van Rossum][45], a Dutch programmer, and was released in 1991.

在学习任何一门编程语言之前，了解该语言的由来是很有用的。Python 由荷兰程序员 [Guido van Rossum][45] 开发，于 1991 年发布。

Python is an Interpreted language. It uses the  [CPython][46]  Interpreter to compile the Python code to byte code. For a beginner, you don't need to know much about CPython, but you must be aware of how Python works internally.

Python 是一门解释型语言，它使用 [CPython][46] 解释器将 Python 代码编译成字节码。对于初学者来说，你不需要对 CPython 有过多了解，但你必须知道 Python 内部是如何工作的。

The philosophy behind Python is that code must be readable. It achieves this with the help of indentation. It supports many programming paradigms like Functional and Object Oriented programming. You will understand more about these as you read through the article.

Python 背后的哲学就是代码必须可读，这是通过缩进实现的。Python 还支持很多编程范式，比如函数式编程和面向对象编程。你将在阅读本文的过程中对它们有一个更好的理解。

The basic question that most beginners have in mind is what a language can do. Here are some of the use-cases of Python:

-   Server-side development ( Django, Flask )
-   Data Science ( Pytorch, Tensor-flow )
-   Data analysis / Visualisation ( Matplotlib )
-   Scripting ( Beautiful Soup )
-   Embedded development

大多数初学者脑中的基本问题就是一门编程语言能够做什么。这里是 Pyhton 的一些使用场景：

- 服务端开发（Django，Flask）
- 数据科学（Pytorch，Tensor-flow）
- 数据分析/可视化（Matplotlib）
- 脚本（Beautiful Soup）
- 嵌入式开发

> **Note:**  I do not endorse any of the above-mentioned libraries or frameworks in particular. They are popular and broadly used in their respective domains.

> **注意：** 我并不是特别支持上面提到的任何库或框架，它们在各自的领域中都非常流行，也得到了广泛使用。

## Installation:

## 安装：

The first step of learning any programming language is installing it. Python comes bundled with most operating systems nowadays. Use the following command in your terminal to check if Python is available:

学习任何编程语言的第一步都是安装它。如今，大多数操作系统都自带 Python。你可以在终端执行以下命令，检查 Python 是否可用：

```shell
python3 --version
```

You'll see the following output:

输出如下：

```shell
Python 3.7.0
```

Note that your version of Python might be different. If you have Python installed and the version is above 3.5.2 then you can skip this section.

注意：你的 Python 版本可能会有所不同。如果你已经安装过 Python 并且版本号在 3.5.2 以上，可以跳过这一部分。

For those who don't have Python installed, follow the steps below:

对于电脑上没有 Python 的人来说，下面是安装步骤：

-   [Windows User][47]
-   [Mac User][48]
-   [Linux User][49]

- [Windows 用户][47]
- [Mac 用户][48]
- [Linux 用户][49]

### Windows User:

### Windows 用户：

-   Go to  [Python's official website][50].
-   Click on the download button ( Download Python 3.8.2 ) \[  **Note:**  The version may differ based on when you are reading this article \]
-   Go to the path where the package is downloaded and double-click the installer.
-   Check the box indicating to "Add Python 3.x to PATH" and then click on "Install Now".
-   Once done you'll get a prompt that "Setup was successful". Check again if python is configured properly using the above command.
-   To confirm if Python is installed and configured properly, use the command  `python3 --version`.

- 打开 [Python 官网](50)。
- 点击下载按钮（下载 Python 3.8.2）[**注意：** 在你阅读本文时，版本可能会有所不同]。
- 前往下载目录，双击安装程序。
- 勾选“Add Python 3.x to PATH”，并单击“Install Now”。
- 安装完成后，你会收到一个“Setup was successful”的提示。再次使用上面的命令检查 python 是否配置正确。
- 使用命令 `python3 --version` 确认 Python 是否安装成功以及配置正确。
### Mac User:

### Mac 用户

-   First install  [xcode][51]  from the app store.
-   If you want to install Xcode using the terminal then use the following command:

- 首先从应用商店安装 [xcode][51]。
- 如果你想从终端安装 Xcode，可以使用以下命令：

```shell
xcode-select --install
```

-   After that, we will use the brew package manager to install Python. To install and configure  [brew][52], use the following command:

- 之后，我们将使用 brew 包管理器安装 Python。安装和配置 [brew][52] 的命令如下：

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

-   Once brew setup is done, use the following command to update any outdated packages:

- 一旦 brew 设置完成，就使用下面这条命令更新所有过时的包：

```shell
brew update
```

-   Use the following command to install Python:

- 使用以下命令安装 Python：

```shell
brew install python3
```

-   To confirm if Python is installed and configured properly, use the command  `python3 --version`.

- 使用命令 `python3 --version` 确认 Python 是否安装成功以及配置正确。

### Linux User:

### Linux 用户

-   To install Python using  `apt`, use the following command:

- 使用 `apt` 安装 Python 的命令如下：

```shell
sudo apt install python3
```

-   To install the Python using  `yum`, use the following command:

- 使用 `yum` 安装 Python 的命令如下：

```shell
sudo yum install python3
```

-   To confirm if Python is installed and configured properly, use the command  `python3 --version`.

- 使用命令 `python3 --version` 确认 Python 是否安装成功以及配置正确。 

## Python shell:

<h2 id="python-shell">Python shell：</h2>

The shell is one of the most useful tools you'll come across. The Python shell gives us the power to quickly test any concept before integrating it into our application.

Shell 将会是你遇到的最有用的工具之一。 Python shell 允许我们在将任何想法集成到应用之前进行快速测试。

Go to the terminal or command line prompt. Enter  `python3`  command and you'll get the following output:

打开终端或者命令行提示符，输入 `python3` 命令，你会得到以下输出：

```shell
➜ python3.7
Python 3.7.0 (v3.7.0:1bf9cc5093, Jun 26 2018, 23:26:24)
[Clang 6.0 (clang-600.0.57)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

In this tutorial, we will learn some concepts with the help of the python3 shell which you can see above. From now on, whenever I mention  **go to the Python shell**, it means that you have to use the  `python3`  command.

在本教程中，我们将利用你刚看到的 python3 shell 学习一些概念。从现在开始，只要我提到“打开 Python shell”，就表示你需要使用 `python3` 命令。

To learn the remaining concepts we will create a file called "testing" with the extension  `.py`. To run this file we will use the following command:

我们会创建一个以 `.py` 为扩展的文件 “testing”，用于学习剩下的概念。我们将使用以下命令运行这个文件：

```shell
python3 testing.py
```

Let's go to the Python shell. Type  `10 + 12`  after the  `>>>`  mark. You'll get the output 22:

打开 Python shell，在 `>>>` 标记后输入 `10 + 12`，你会得到 22：

```python
>>> 10 + 12
22
```

## Commenting:

## 注释：

Comments make it easy to write code as they help us (and others) understand why a particular piece of code was written. Another awesome thing about comments is that they help improve the readability of the code.

注释（comment）帮助我们（和其他人）理解为什么要写某段代码，让代码的编写更加容易。注释的另一大作用就是帮助我们提高代码的可读性。

```python
# Stay Safe
```

When you add the above syntax, the Python interpreter understands that it is a comment. Everything after  `#`  is not executed.

当你像上面这么写时，Python 解释器就会知道它是一个注释。`#` 之后的任何东西都不会被执行。

You may be wondering why you should use comments. Imagine you are a developer and you have been assigned to a huge project. The project has more than a thousand lines of code. To understand how everything works you'll need to go line by line and read through all the code.

你可能想知道为什么应该使用注释。假设你是一名开发者，被指派了一个庞大的项目，这个项目有超过一千行代码。为了理解一切都是怎么工作的，你需要逐行阅读所有的代码。

What's a better solution than that? Ah-ha! Comments. Comments help us understand why a particular piece of code was written and what it returns or does. Consider it as documentation for every piece of code.

有比这更好的解决办法吗？哈哈，有，就是注释。注释帮助我们理解为什么要写某段代码，它返回啥或者它干了啥。注释看作是这段代码的文档。

## Print:

## 打印：

Other than debugging tools from the editor, the thing which helps developers solve problems most often is a print statement. The print statement is one of the most underrated pieces of syntax in all of programming.

除了编辑器的调试工具，最常帮助开发者解决问题的东西就是 print 语句了。print 语句是所有编程中最容易被低估的语法之一。

So how does it help in debugging an issue? Well, consider that you have a module and you want to check the flow of execution to understand or debug it. There are two options. Either you can use a debugger or add a print statement.

那么它是如何帮助我们调试问题的呢？假设你有一个模块，你想通过检查这个模块的执行过程理解或调试它。你有两个选择：要么使用调试工具，要么使用 print 语句。

It's not always possible to use a debugger. For example, if you are using the Python shell, then a debugger is not available. In such a scenario, print helps us. Another scenario is when your application is running. You can add a print statement that will display in the logs of your application and monitor them in runtime.

并不是任何时候都可以使用调试工具。例如，如果你正在使用 Python shell，就没有调试工具可以用了。在这种情况下，print 语句可以帮我们。另一种情况就是你的应用正在运行，你可以添加一条显示日志的 print 语句，在运行时监视它们。

Python provides a inbuilt print method with the following syntax:

Python 提供了一个内置的 print 方法，语法如下：

```python
print("Stay safe...")
```

## Indentation:

## 缩进：

Another interesting part of this language is indentation. Why? Well, the answer is simple: It makes the code readable and well-formatted. It is compulsory in Python to follow the rules of indentation. If proper indentation is not followed you'll get the following error:

Python 中另一个有趣的部分就是缩进（indentation）。为什么呢？答案很简单：缩进让代码易读、结构良好。Python 强制使用者遵守缩进规则，如果缩进不合适，你就会得到下面这个错误：

```python
IndentationError: unexpected indent
```

See, even the errors in Python are so readable and easy to understand. At the start, you may be annoyed by the compulsion of indentation. But with the time you'll understand that indentation is a developer's friend.

看到了吧，即使是 Python 中的错误也这么易读和理解。你可能会在刚开始的时候因强制缩进而感到心烦，但是你会慢慢发现缩进是开发者的好朋友。

## **Variables:**

## 变量：

As the name implies, a variable is something that can change. A variable is a way of referring to a memory location used by a computer program.

顾名思义，变量（variable）就是能够变化的东西。在计算机程序中，变量则是引用内存位置的一种方式。

Well in most programming languages you need to assign the type to a variable. But in Python, you don’t need to. For example, to declare an integer in C, the following syntax is used:  `int num = 5;`. In Python it's  `num = 5`  .

在大多数编程语言中，你需要指定变量的类型。但是在 Python 中，你不需要这么做。例如，要声明一个整型变量，C 语言中需要写 `int num = 5`，而 Python 中只需要写 `num = 5`。

Go to the Python shell and perform the operation step by step:

打开 Python shell，然后一步一步执行：

-   `Integer`: Numerical values that can be positive, negative, or zero without a decimal point.

- `Integer`：可正可负，也可为零的数值，不含小数点。

```python
>>> num = 5
>>> print(num)
5
>>> type(num)
<class 'int'>
```

As you can see here we have declared a  `num`  variable and assigned 5 as a value. Python's inbuilt `type`  method can be used to check the type of variable. When we check the type of  `num`  we see the output `<class 'int'>`. For now, just focus on the  `int`  in that output.  `int`  represents an integer.

如你所见，我们声明了一个 `num` 变量并赋值为 5。Python 内置的 `type` 方法可以被用来检查变量的类型。检查 `num` 的类型，我们得到的结果为 `<class 'int'>`。现在，只关注结果中的 `int`，它表示一个整数。

-   `Float`: Similar an integer but with one slight difference – floats are a numerical value with a decimal place.

- `Float`：和整数类似，但又有点细微的差别——浮点数是含有小数点的数值。

```python
>>> num = 5.0
>>> print(num)
5.0
>>> type(num)
<class 'float'>
```

Here we have assigned a number with a single decimal to the  `num`. When we check the type of  `num`  we can see it is  `float`.

我们将带有一位小数的数值赋值给了 `num`。检查 `num` 的类型，我们得到的结果是 `float`。

-   `String`: A formation of characters or integers. They can be represented using double or single quotes.

- `String`：由字符或整数构成，可以使用双引号或单引号表示。

```python
>>> greet = "Hello user"
>>> print(greet)
Hello user
>>> type(greet)
<class 'str'>
```

Here we have assigned a string to  `greet`. The type of greet is a string as you can see from the output.

我们在这里将一个字符串赋值给了 `greet`。从输出中你可以看到，它的类型为字符串。

-   `Boolean`: A binary operator with a True or False value.

- `Boolean`：一个二元操作符，值为 True 或 False。

```python
>>> is_available = True
>>> print(is_available)
True
>>> type(is_available)
<class 'bool'>
```

Here we have assigned a True value to  `is_available`. The type of this variable is boolean. You can only assign  **True**  or  **False**. Remember  **T**  and  **F**  should be capital or it will give an error as follows:

我们将 `is_available` 赋值为 True，它的类型为布尔。你只可以给布尔变量赋值为 **True** 或 **False**。记住，**T** 和 **F** 应该是大写，否则你会收到一个错误，如下：

```shell
>>> is_available = true
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'true' is not defined
```

-   `NoneType`: This is used when we don't have the value of the variable.

- `NoneType`：在变量没有值的时候使用。

```python
>>> num = None
>>> print(num)
None
>>> type(num)
<class 'NoneType'>
```

## Operators:

## 运算符：

Take a look at the image below to see all the arithmetic operators available in Python:

下图展示了 Python 中所有的运算符：

![](https://www.freecodecamp.org/news/content/images/2020/04/Screenshot-2020-04-30-at-12.28.55-PM.png)

Operators table

<figure>
    <img src="https://www.freecodecamp.org/news/content/images/2020/04/Screenshot-2020-04-30-at-12.28.55-PM.png"/>
    <figcaption>运算符表</figcaption>
</figure>

Let's go over the operators one by one.

我们一个一个地看。

### Arithmetic operators

### 算术运算符

These include addition, subtraction, deletion, exponentiation, modulus, and floor division. Also the shorthand syntax for some operators.

算术运算符包括加、减、乘、求幂、取模和向下取整除，一些运算符还有简写语法。

First, we will declare two variables,  `a`  and  `b`.

先声明两个变量，`a` 和 `b`。

```python
>>> a = 6 # 赋值
>>> b = 2
```

Let's try our basic arithmetic operations:

尝试下基本算术运算符：

```python
>>> a + b # 加
8
>>> a - b # 减
4
>>> a * b # 乘
12
>>> a / b # 除
3.0
>>> a ** b # 求幂
36
```

To test for other arithmetic operations let's change the value of  `a`  and  `b`.

为了测试其它的算术运算符，我们要改变一下 `a` 和 `b` 的值。

```python
>>> a = 7
>>> b = 3
>>> a % b # 取模
1
>>> a // b # 向下取整除
2
```

Shorthand arithmetic operations are also available in Python. Refer back to the image above to test them out. To print the output of the shorthand operations use the  `print`  statement.

Python 中也支持使用简写的算术运算符，你可以参照上面的图片进行测试，使用 `print` 语句打印出简写运算的结果。

### Comparison operators

### 比较运算符

These include equal to, greater than, and less than.

比较运算符包括等于、大于和小于。

```python
>>> a = 5 # 赋值
>>> b = 2 # 赋值
>>> a > b # 大于
True
>>> a < b # 小于
False
>>> a == b # 等于
False
>>> a >= 5 # 大于等于
True
>>> b <= 1 # 小于等于
False
```

### Logical operators

### 逻辑运算符

These operators include not, and, & or.

逻辑运算符包括非（not）、与（and）、或（or）。

```python
>>> a = 10
>>> b = 2
>>> a == 2 and b == 10 # 与
False
>>> a == 10 or b == 10 # 或
True
>>> not(a == 10) # 非
False
>>> not(a == 2)
True
```

## Conditional Statements:

## 条件语句：

As the name suggests, conditional statements are used to evaluate if a condition is true or false.

顾名思义，条件语句用于计算条件的真假。

Many times when you are developing an application you need to check a certain condition and do different things depending on the outcome. In such scenarios conditional statements are useful. If, elif and else are the conditional statements used in Python.

很多时候，你需要在开发过程中根据特定的条件做不同的事情。在这种情况下，条件语句就非常有用了。Python 中的条件语句包括 if、elif 和 else。

We can compare variables, check if the variable has any value or if it's a boolean, then check if it's true or false. Go to the Python shell and perform the operation step by step:

我们可以比较变量，检查变量是否为一些值。如果变量为布尔类型的话，就检查它是真还是假。打开 Python shell，逐步执行：

**Condition Number 1:** We have an integer and 3 conditions here. The first one is the  `if`  condition. It checks if the number is equal to 10.

**条件 1：** 我们有一个整数和三个条件。第一个是 `if` 条件，它检查数字是否等于 10。

The second one is the  `elif`  condition. Here we are checking if the number is less than 10.

第二个是 `elif` 条件，它检查数字是否小于 10。

The last condition is  `else`. This condition executes when none of the above conditions match.

最后一个条件是 `else`，它在以上两个条件匹配失败时执行。

```python
>>> number = 5
>>> if number == 10:
...     print("Number is 10")
... elif number < 10:
...     print("Number is less than 10")
... else:
...     print("Number is more than 10")
...
```

Output:

输出：

```shell
Number is less than 10
```

**Note:** It is not compulsory to check that two conditions are equal in the  `if`  condition. You can do it in the  `elif`  also.

**注意：** 并不是只能在 `if` 条件中检查两个条件是否相等，你也可以使用 `elif`。

**Condition Number 2:** We have a boolean and 2 conditions here. Have you noticed how we are checking if the condition is true? If  `is_available`, then print "Yes it is available", else print "Not available".

**条件 2：** 我们有一个布尔值和两个条件。你有注意到我们是如何检查条件为真吗？如果 `is_available`，就打印“Yes it is available”，否则打印“Not available”。

```python
>>> is_available = True
>>> if is_available:
...     print("Yes it is available")
... else:
...     print("Not available")
...

```

Output:

输出：

```shell
Yes it is available
```

**Condition Number 3:** Here we have reversed condition number 2 with the help of the not operator.

**条件 3：** 使用取反运算符反转条件 2。

```python
>>> is_available = True
>>> if not is_available:
...     print("Not available")
... else:
...     print("Yes it is available")
...

```

Output:

输出：

```shell
Yes it is available
```

**Condition Number 4:**  Here we are declaring the data as None and checking if the data is available or not.

**条件 4：** 将 data 声明为 None，然后检查 data 是否可用。

```python
>>> data = None
>>> if data:
...     print("data is not none")
... else:
...     print("data is none")
...

```

Output:

输出：

```shell
data is none
```

**Condition Number 5:**  You can also use an inline if in Python. The syntax to achieve this is the following:

**条件 5：** 使用行内 if，语法如下：

```python
>>> num_a = 10
>>> num_b = 5
>>> if num_a > num_b: print("num_a is greater than num_b")
...
```

Output:

输出：

```shell
num_a is greater than num_b
```

**Condition Number 6:** You can also use an inline if else in Python. The syntax to achieve this is the following:

**条件 6：** 使用行内 if else，语法如下：

```python
expression_if_true if condition else expression_if_false

```

Example:

示例：

```python
>>> num = 5
>>> print("Number is five") if num == 5 else print("Number is not five")
```

Output:

输出：

```shell
Number is five
```

**Conditional Number 7:** You can also use nested if-else statements. The syntax to achieve this is the following:

**条件 7：** 使用嵌套的 if-else 语句，语法如下：

```python
>>> num = 25
>>> if num > 10:
...     print("Number is greater than 10")
...     if num > 20:
...             print("Number is greater than 20")
...     if num > 30:
...             print("Number is greater than 30")
... else:
...     print("Number is smaller than 10")
...
```

Output:

输出：

```shell
Number is greater than 10
Number is greater than 20
```

**Condition Number 8:**  You can also use the  `and`  operator in a conditional statement. It states if condition1 and condition2 both are true then execute it.

**条件 8：** 在条件语句中使用 `and` 运算符，它只有在两个条件同时满足时才会执行。

```python
>>> num = 10
>>> if num > 5 and num < 15:
...     print(num)
... else:
...     print("Number may be small than 5 or larger than 15")
...
```

Output:

输出：

```shell
10
```

As our number is between 5 and 15 we get the output of 10.

由于我们的数字在 5 到 15 之间，所以我们得到的结果是 10。

**Condition Number 9:**  You can also use the  `or`  operator in a conditional statement. It states that if either condition1 or condition2 is true then execute it.

**条件 9：** 使用 `or` 运算符，它在任一条件为真时执行。

```python
>>> num = 10
>>> if num > 5 or num < 7:
...     print(num)
...
```

Output:

输出：

```shell
10
```

Are you confused because the value of  `num`  is 10 and our second condition states that  `num`  is less than 7? So why do we get the output as 10? It's because of the  `or`  condition. As one of the conditions matches, it will execute it.

因为 `num` 的值为 10，并且我们的第二个条件要求 `num` 小于 7，你是不是很困惑？为什么输出是 10 呢？因为 `or` 只要匹配上任意一个条件，就会执行。

## For Loops:

<h2 id="for-loops">For 循环：</h2>

Another useful method in any programming language is an iterator. If you have to implement something multiple times, what will you do?

另一个在所有编程语言中都非常有用的方法就是迭代器（iterator）。如果你不得不多次实现某个东西，你会怎么做？

```python
print("Hello")
print("Hello")
print("Hello")
```

Well, that's one way to do it. But imagine you have to do it a hundred or a thousand times. Well, that's a lot of print statements we have to write. There's a better way called iterators or loops. We can either use a  `for`  or  `while`  loop.

这是一种方式。但是，如果必须做一百或一千次，你就要非写大量的 print 语句不可。有一种更好的处理方式——使用迭代器或循环。我们可以使用 `for` 循环，也可以使用 `while` 循环。

Here we are using the range method. It specifies the range until which the loop should be repeated. By default, the starting point is 0.

这里使用了 range 方法，它给出了一个区间，循环应该在这个区间内重复执行。默认情况下，range 的开始点为 0。

```python
>>> for i in range(3):
...     print("Hello")
...
```

Output:

输出：

```shell
Hello
Hello
Hello
```

You can also specify the range in this way  `range(1,3)`.

你也可以使用 `range(1,3)` 这种方式声明区间。

```python
>>> for i in range(1,3):
...     print("Hello")
...
```

Output:

输出：

```shell
Hello
Hello
```

"Hello" is only printed two times as we have specified the range here. Think of the range as  `Number on right - Number on left`.

因为我们声明了区间，所以“Hello”只打印了两次。你可以把区间看成 `Number on right - Number on left`。

Well, you can also add an else statement in the for loop.

你还可以将 else 语句添加到 for 循环。

```python
>>> for i in range(3):
...     print("Hello")
... else:
...     print("Finished")
```

Output:

输出：

```shell
Hello
Hello
Hello
Finished
```

See our loop iterated 3 times ( 3 - 0 ) and once that is done it executed the else statement.

循环先迭代了 3 次（3 - 0），else 语句在迭代完成后立即执行。

We can also nest a for loop inside another for loop.

我们也可以将一个 for 循环嵌入到另一个 for 循环之中。

```python
>>> for i in range(3):
...     for j in range(2):
...             print("Inner loop")
...     print("Outer loop")
...
```

Output:

输出：

```shell
Inner loop
Inner loop
Outer loop
Inner loop
Inner loop
Outer loop
Inner loop
Inner loop
Outer loop
```

As you can see the inner loop print statement executed two times. After that outer loop print statement executed. Again the inner loop executed two times. So what is happening here? If you are confused then consider this to solve it:

如你所见，内层循环的打印语句执行了两次，之后外层循环的打印语句执行了一次，然后又是两次内层循环。所以这里在发生什么呢？如果你感到困惑，这么想一想：

-   Our Interpreter comes and sees that there is a  `for`  loop. It goes down again and checks there is another  `for`  loop.
-   So now it will execute the inner  `for`  loop two times and exit. Once it's finished it knows that outer for loop has instructed it to repeat two more times.
-   It starts again and sees the inner for loop and repeats.

- 解释器一上来就看见了一个 `for` 循环，它再次向下，发现还有另一个 `for` 循环。
- 现在它会执行两次内层的 `for` 循环，然后退出。内层循环执行完之后，编译器就会得知外层循环要求它再重复执行两次。
- 解释器再次执行，遇到内层循环，然后重复这个过程。

Well, you can also choose to pass a certain  `for`  loop condition. What does pass mean here? Well whenever that for loop will occur and the Interpreter sees the  `pass`  statement it won't execute it and will move to the next line.

你还可以选择通过某个 `for` 循环条件，通过在这里是什么意思呢？不论 for 循环在何时发生，只要解释器看到了 `pass` 语句，它什么都不会做，直接跳到下一行。

```python
>>> for i in range(3):
...     pass
...
```

You will not get any output on the shell.

你不会在 shell 中得到任何输出。

## While loops:

<h2 id="while-loops">While 循环：</h2>

Another loop or iterator available in Python is the  `while`  loop. We can achieve some of the same results with the help of a  `while`  loop as we achieved with the  `for`  loop.

Python 中还有一种循环或迭代器，它就是 `while` 循环。我们可以使用 `while` 循环得到与 `for` 循环一样的结果。

```python
>>> i = 0
>>> while i < 5:
...     print("Number", i)
...     i += 1
...
```

Output:

输出：

```shell
Number 0
Number 1
Number 2
Number 3
Number 4
```

Remember whenever you use a while loop it's important that you add an increment statement or a statement that will end the while loop at some point. If not then the while loop will execute forever.

不论你何时使用 while 循环，都要记得添加一个递增语句，或者一个在某种情况下能够结束 while 循环的语句。否则，循环会一直执行下去。

Another option is to add a  `break`  statement in a  `while`  loop. This will break the loop.

另一种方式就是在 `while` 循环中加入一个 `break` 语句，它会打破循环。

```python
>>> i = 0
>>> while i < 5:
...     if i == 4:
...             break
...     print("Number", i)
...     i += 1
...
```

Output:

输出：

```shell
Number 0
Number 1
Number 2
Number 3
```

Here we are breaking the  `while`  loop if we find the value of  `i`  to be 4.

在这里，如果发现 `i` 的值为 4，我们就打破 `while` 循环。

Another option is to add an  `else`  statement in  `while`  loop. The statement will be executed after the while loop is completed.

另一种方式是在 `while` 循环中加入一个 `else` 语句，它会在 while 循环完成后执行。

```python
>>> i = 0
>>> while i < 5:
...     print("Number", i)
...     i += 1
... else:
...     print("Number is greater than 4")
...
```

Output:

输出：

```shell
Number 0
Number 1
Number 2
Number 3
Number 4
Number is greater than 4
```

The  `continue`  statement can be used to skip the current execution and to proceed to the next.

`continue` 语句可以用来跳出当前循环，直接进到下次循环。

```python
>>> i = 0
>>> while i < 6:
...     i += 1
...     if i == 2:
...             continue
...     print("number", i)
...
```

Output:

输出：

```shell
number 1
number 3
number 4
number 5
number 6
```

## User Input:

## 用户输入：

Imagine you are building a command-line application. Now you have to take the user input and act accordingly. To do that you can use Python's inbuilt  `input`  method.

假设你正在构建一个命令行应用，现在你需要根据用户的输入执行不同的操作。为了达到这个目的，你可以使用 Python 内置的 `input` 方法。

The syntax to achieve this is as follows:

实现的语法很简单，如下所示：

```python
variable = input(".....")
```

Example:

示例：

```python
>>> name = input("Enter your name: ")
Enter your name: Sharvin
```

When you use the  `input`  method and press enter, you'll be prompted with the text that you enter in the  `input`  method. Let's check if our assignment is working or not:

当你使用 `input` 方法时，你会在按下回车键之后收到一个提示，提示的内容就是你输入到 `input` 方法的文本。我们来检查一下赋值有没有成功：

```python
>>> print(name)
Sharvin
```

There it is! It is working perfectly. Here  `Sharvin`  is of the type string.

就是这个！它运行得很好，`Sharvin` 就是输入的字符串。

```python
>>> type(name)
<class 'str'>
```

Let's try one more example where we will assign an integer rather than a string and check the type.

我们用另一个例子试一下。这一次我们会把它赋值给一个整数，而不是字符串，然后会检查它的类型。

```python
>>> date = input("Today's date: ")
Today's date: 12
>>> type(date)
<class 'str'>
```

Are you confused? We entered an integer 12 and it's still giving us its type as a string. It's not a bug. It's how input is intended to work. To convert the string to integer we will use typecasting.

又困惑了吗？我们输入了一个整数 12，但它还是告诉我们类型为字符串。这并不是一个 bug，它正是输入的工作机制。要将字符串转成整数，我们需要使用类型转换。

## Typecasting:

## 类型转换：

We saw that the  `input`  method returns a string for the integer also. Now if we want to compare this output with another integer then we need a way to convert it back to an integer.

我们看到 `input` 方法为整数返回了字符串。如果我们现在想把这个输出和另一个整数进行比较，就需要一种将其转换回整数的方式。

```python
>>> date_to_int = int(date)
>>> type(date_to_int)
<class 'int'>
```

Here we took the date that we have declared above in the User input section and converted it into the integer using the Python's inbuilt  `int`  method. This is called typecasting.

这里我们使用了用户输入一节声明的 date，使用 Python 内置的 `int` 方法将它转换成一个整数。这就是类型转换（typecasting）。

Basically you can do the following conversion with the help of typecasting:

你基本上可以进行下列转换：

-   integer to string:  `str()`
-   string to integer:  `int()`
-   integer to float:  `float()`

- 整数到字符串：`str()`
- 字符串到整数：`int()`
- 整数到浮点数：`float()`

> Note: Conversion from float to integer is also possible.

> 注意：浮点数到整数的转换也是可能的。

```python
>>> type(date)
<class 'str'>

# 从字符串转换到浮点数
>>> date_to_float = float(date)
>>> type(date_to_float)
<class 'float'>
# 从浮点数转换到字符串
>>> date_to_string = str(date_to_float)
>>> type(date_to_string)
<class 'str'>

```

## Dictionaries:

## 字典

Imagine you want to store some user details. So how can you store these details? Yes, we can use variable to store them as follows:

假如你想保存一些用户的详细资料，你会怎么保存它们呢？没错，我们可以用变量保存它们，像下面这样：

```python
>>> fname = "Sharvin"
>>> lname = "Shah"
>>> profession = "Developer"
```

To access this value we can do the following:

要访问变量的值，可以这么做：

```python
>>> print(fname)
Sharvin
```

But is this an elegant and optimized way to access it? The answer is no. To make it more friendly, let's store the data in a key-value dictionary.

但是这是访问用户资料最优雅的方式吗？并不是。让我们把数据存到键值对形式的字典（dictionary）中吧，它会让用户资料的访问变得更加友好。

What is a dictionary? A dictionary is a collection that is unordered and mutable ( i.e. it can be updated ).

那么什么是字典呢？字典是一种无序、可变（即它可以被更新）的集合。

Following is the format of the dictionary:

字典的格式如下：

```json
data = {
    "key" : "value"
}
```

Let's understand the dictionary further by an example:

让我们通过一个示例进一步理解字典吧：

```python
>>> user_details = {
...     "fname": "Sharvin",
...     "lname": "Shah",
...     "profession": "Developer"
... }
```

### How to access a value in a dictionary

### 如果访问字典中的值

We can access the value inside a dictionary in two ways. We will take a look at both and then debug them to find out which is better.

有两种访问字典中的值的方式，我们将逐一查看并调试它们，从而找出哪种方式更好。

Method 1:  To access the value of  `fname`  key from  `user_details`  dictionary we can use the following syntax:

方法一：使用以下语法访问 `user_details` 字典中键为 `fname` 的值：

```python
>>> user_details["fname"]
'Sharvin'
```

Method 2: We can also access the value of  `fname`  key from  `user_details`  dictionary using  `get`.

方法二：使用 `get` 访问 `user_details` 字典中键为 `fname` 的值：

```python
>>> user_details.get("fname")
'Sharvin'
```

I know method 1 looks easier to understand. The problem with it occurs when we try to access the data that is not available in our dictionary.

我知道方法一看起来更容易理解。当我们尝试访问一个字典中不存在的数据的时，它的问题体现出来了。

```python
>>> user_details["age"]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'age'
```

We get a KeyError which indicates that the key is not available. Let's try the same scenario with method 2.

我们得到了一个 KeyError，表示那个键不可用。我们使用方法二试一下这种情况。

```python
>>> user_details.get("age")
```

We do not get anything printed in our console. Let's debug it further to know why this happened. Assign a variable age to our  `get`  operation and we will print it in our console.

控制台空空如也。让我们进一步调试，搞清楚为何会这样。将 `get` 操作赋值给一个 age 变量，然后将其打印在控制台。

```python
>>> age = user_details.get("age")
>>> print(age)
None
```

So when  `get`  doesn't find the key it sets the value to None. Because of this, we do not get any error. Now you may be wondering which one is right. Most of the time using method 2  makes more sense, but for some strict checking conditions, we need to use method 1.

所以，`get` 方法会在找不到键时把值设置为 None。正因为如此，我们才不会得到任何错误。现在你或许知道该使用哪个了吧。大多数情况下，方法二更合适，但是对于需要严格检查的条件，还是应该使用方法一。

### How to check if a key exists

### 如何检查一个键是否存在

You may be wondering how to check if the dictionary has a particular key or not in it. Python provides the built-in method  `keys()`  to solve this issue.

你或许想知道如何检查字典中是否有某个键。Python 为此提供了一个内置的方法 `keys()`。

```python
>>> if "age" in user_details.keys():
...     print("Yes it is present")
... else:
...     print("Not present")
...
```

We will get the following output:

输出如下：

```shell
Not present
```

What if we want to check if the dictionary is empty or not? To understand this let's declare an empty dictionary as follows:

如果我们想检查字典是否为空呢？为了便于理解，先声明一个空的字典：

```python
>>> user_details = {}
```

When we use if-else on a dictionary directly it either returns true if data is present or false if empty.

我们直接在字典上使用 if-else，它要么在数据存在时返回 True，要么就在字典为空时返回 False。

```python
>>> if user_details:
...     print("Not empty")
... else:
...     print("Empty")
...
```

Output:

输出：

```shell
Empty
```

We can also use Python's inbuilt method  `bool`  to check if the dictionary is empty or not. Remember bool returns False if the dictionary is empty and True if it is filled.

我们也可以使用 Python 内置的 `bool` 方法检查字典是否为空。记住：如果字典为空，bool 会返回 False，否则会返回 True。

```python
>>> bool(user_details)
False

```

### How to update the value of an existing key

### 如果更新已有键的值

So now we know how to get a particular key and find if it exists – but how do you update it in the dictionary?

现在我们知道了如何获取某个特定的键以及如何检查键是否存在，但是你怎么在字典中更新某个键呢？

Declare a dictionary as follows:

声明一个字典，如下：

```python
>>> user_details = {
...     "fname":"Sharvin",
...     "lname": "Shah",
...     "profession": "Developer"
... }
```

To update the value use the following syntax:

使用以下语法更新对应的值：

```python
>>> user_details["profession"] = "Software Developer"
>>> print(user_details)
{'fname': 'Sharvin', 'lname': 'Shah', 'profession': 'Software Developer'}
```

Updating a value of key in dictionary is same as assigning a value to the variable.

在字典中，更新键的值的方式与给变量赋值的方式一摸一样。

### How to add a key-value pair

### 如何添加键-值对

The next question is how to add a new value to the dictionary? Let's add an  `age`  key with a value of 100.

下一个问题是如何添加一个新的值到字典中？让我们添加一个 `age` 键吧，值为 100。

```python
>>> user_details["age"] = "100"
>>> print(user_details)
{'fname': 'Sharvin', 'lname': 'Shah', 'profession': 'Software Developer', 'age': '100'}
```

As you can see a new key-value is added in our dictionary.

如你所见，一个新的键-值对已经被添加到字典中。

### How to remove a key-value pair

### 如何移除键-值对

To remove a key-value from the dictionary, Python provides an inbuilt method called  `pop`.

要将一个键-值对从字典中移除，你可以使用 Python 内置的 `pop`方法。

```python
>>> user_details.pop("age")
'100'

```

This removes the  `age`  key-value pair from the  `user_details`  dictionary. We can also use a  `del`  operator to delete the value.

这将 `age` 键-值对从 `user_details` 字典中移除，我们也可以使用 `del` 运算符删除这个值。

```python
>>> del user_details["age"]

```

The  `del`  method can also be used to  **delete complete dictionary**. Use the following syntax to delete complete dictionary  `del user_details`.

`del` 方法也可以用来 **删除整个字典**，语法为 `del user_details`。

### How to copy a dictionary

### 如何复制字典

A dictionary cannot be copied in a traditional way. For example, you cannot copy value of  `dictA`  to  `dictB`  as follows:

字典是不能使用传统方式复制的。例如，你不能像下面这样将 `dictA` 的值复制到 `dictB`：

```python
dictA = dictB
```

To copy the values you need to use the  `copy`  method.

你需要使用 `copy` 方法完成值的复制。

```python
>>> dictB = user_details.copy()

```

## Lists:

## 列表：

Imagine you have a bunch of data that is not labeled. In other words, each piece of data doesn't have a key that defines it. So how will you store it? Lists to the rescue. They are defined as follows:

假如你有一堆没有标签的数据，换句话说，每条数据都没有定义它的键。你会怎么保存它呢？这个时候就该列表出场了，数据的定义如下：

```python
data = [ 1, 5, "xyz", True ]
```

A list is a collection of random, ordered, and mutable data (i.e., it can be updated).

列表（list）是一种随机、有序和可变的集合。

### How to access list elements

### 如何访问列表元素

Let's try to access the first element:

让我们试着访问列表中的第一个元素：

```python
>>> data[1]
5
```

Wait what happened here? We are trying to access the first element but we are getting the second element. Why?

等一下，这里发生了什么？我们尝试访问第一个元素，但是却得到了第二个元素。为什么？

Indexing of the list begins from zero. So what do I mean by this? The indexing of the position of the elements begins from zero. The syntax to access an element is as follows:

列表的索引从零开始。我这么说的意思是什么呢？元素位置的索引从零开始。访问列表元素的语法如下：

```python
list[position_in_list]
```

To access the first element we need to access it as follows:

要访问第一个元素，我们需要这么做：

```python
>>> data[0]
1
```

You can also specify a range to access the element between those positions.

你也可以声明一个要访问元素的范围，范围应该处于所有元素的位置之间：

```python
>>> data[2:4]
['xyz', True]
```

Here, the first value represents the start while the last value represents the position until which we want the value.

第一个值表示开始位置，而最后一个值表示我们想要访问值的前一个位置。

### How to add an item to a list

### 如何向列表添加数据项

To add an item in the list we need to use the append method provided by python.

要将一个数据项添加到列表中，我们需要使用 Python 提供的 append 方法。

```python
>>> data.append("Hello")

```

### How to change the value of an item

### 如何改变数据项的值

To change the value of an item, use the following syntax:

改变数据项的值的语法如下：

```python
>>> data[2] = "abc"

```

### How to remove an item from a list

### 如何从列表中删除数据项

To remove an item from a list we can use the Python's inbuilt  `remove`  method.

我们可以使用 Python 内置的 `remove` 方法从列表中删除一个数据项。

```python
>>> data.remove("Hello")
>>> data
[1, 5, 'abc', True]
```

### How to loop through a list

### 如何遍历列表

We can also loop through the list to find a certain element and operate on it.

我们也可以遍历列表，从中找出某个元素，然后操作这个元素。

```python
>>> for i in data:
...     print(i)
...
```

Output:

输出：

```shell
1
5
abc
True

```

### How to check if an item exists or not

### 如何检查一个数据项存在与否

To check if a particular item exists or not in list we can use if loop as follows:

要检查某个数据项是否存在于列表中，我们可以像下面这样使用 if：

```python
>>> if 'abc' in data:
...     print("yess..")
...
yess..
```

### How to copy list data

### 如何复制列表数据

To copy list data from one list to another we need to use  `copy`  method.

要将一个列表的数据复制到另一个列表，我们需要使用 `copy` 方法。

```python
>>> List2 = data.copy()
>>> List2
[1, 5, 'abc', True]
```

### How to check the length of a list

### 如何检查列表长度

We can also check the length of list using Python's inbuilt  `len`  method.

我们可以使用 Python 内置的 `len` 方法检查列表的长度。

```python
>>> len(data)
4
```

### How to join two lists

### 如何连接两个列表

To join two list we can use the  `+`  operator.

我们可以使用 `+` 操作符连接两个列表。

```python
>>> list1 = [1, 4, 6, "hello"]
>>> list2 = [2, 8, "bye"]
>>> list1 + list2
[1, 4, 6, 'hello', 2, 8, 'bye']
```

What happens if we try to access a element position which is not available in the list? We get a  `list index out of range error`  in such a condition.

如果我们尝试访问一个在列表中不可用的元素位置会怎样？我们会得到一个 `list index out of range error`。

```python
>>> list1[6]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: list index out of range
```

## Tuples:

## 元组：

The tuple is a data type which is ordered and immutable (i.e. data cannot be changed).

元组（tuple）是一种有序但不可变（即数据不能被改变）的数据类型。

Let's create a tuple:

创建一个元组：

```python
>>> data = ( 1, 3 , 5, "bye")
>>> data
(1, 3, 5, 'bye')
```

### How to access a tuple element

### 如何访问元组中的元素

We can access elements in the tuple the same way as we access them in a list:

我们可以用访问列表元素的方式访问元组中的元素：

```python
>>> data[3]
'bye'
```

We can access the index range as follows:

用以下方式访问索引范围：

```python
>>> data[2:4]
(5, 'bye')
```

### How to change a tuple's value

### 如何改变元组的值

If you are thinking wait – how can we change the value of tuple, then you are right my friend. We cannot change the value of tuple as it is immutable. We get the following error if we try to change the value of a tuple:

如果你正在思考如何改变元组的值，我就真拿你当朋友了。我们不能改变元组的值，因为它是不可变的。如果我们尝试改变元组的值，会得到如下错误：

```python
>>> data[1] = 8
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
```

There's a workaround available to change the value of a tuple:

有一种改变元组的值的变通方法：

```python
>>> data = ( 1, 3 , 5, "bye")
>>> data_two = list(data) # 转换成列表
>>> data_two[1] = 8 # 列表是可变的，更新值
>>> data = tuple(data_two) # 再次转换成元组
>>> data
(1, 8, 5, 'bye')

```

All other methods that we have seen in the list are applicable for the tuple also.

我们见过的其它列表方法都适用于元组。

**\[ Note: Once a tuple is created a new value cannot be added in it. \]**.

**\[注意：一旦元组被创建出来，就不能添加新值到其中了\]**。

## Sets:

## 集合

Sets are another data type in Python which are unordered and unindexed. Sets are declared as follows:

集合（set）是 Python 中的另一种数据类型，它是无序的，没有索引。集合的声明方式如下：

```python
>>> data = { "hello", "bye", 10, 15 }
>>> data
{10, 15, 'hello', 'bye'}
```

### How to access a value

### 如何访问值

As sets are unindexed we cannot directly access the value in a set. Thus to access the value in the set you need to use a for loop.

由于集合没有索引，所以我们不能直接访问集合中的值。因此，我们需要使用 for 循环：

```python
>>> for i in data:
...     print(i)
...

```

### How to change a value

### 如何改变一个值

Once the set is created, values cannot be changed.

一旦集合被创建，值就不能被改变。

### How to add an item

### 如何添加一个数据项

To add an item to the set python provides an inbuilt method called  `add`.

Python 提供的 `add` 方法就可以将数据项添加到集合。

```python
>>> data.add("test")
>>> data
{10, 'bye', 'hello', 15, 'test'}
```

### How to check length

### 如何检查长度

To check the length of the set we use the  `len`  method.

我们可以使用 `len` 方法检查集合的长度。

```python
>>> len(data)
5
```

### How to remove an item

### 如何删除一个数据项

To remove an item use the  `remove`  method:

使用 `remove` 方法移除数据项：

```python
>>> data.remove("test")
>>> data
{10, 'bye', 'hello', 15}
```

## Functions and Arguments:

## 函数与参数

Functions are a handy way to declare an operation that we want to perform. With the help of functions, you can separate logic according to the operation.

函数（Function）是一种声明我们想要执行的操作的简单方式。在函数的帮助下，你可以根据操作拆分逻辑。

Functions are a block of code that helps us in the reusability of the repetitive logic. Functions can be both inbuilt and user-defined.

函数就是一个代码块，它帮助我们复用重复的逻辑。函数既可以是内置的也可以是用户自定义的。

To declare a function we use the  `def`  keyword. Following is the syntax of the functions:

我们使用 `def` 关键字声明函数，下面是函数的语法：

```python
>>> def hello_world():
...     print("Hello world")
...

```

Here we are declaring a function which, when called, prints a "Hello world" statement. To call a function we use the following syntax:

我们声明了一个函数，它会在被调用时打印出“Hello World”语句。调用函数的语法如下：

```python
>>> hello_world()
```

We will get the following output:

我们会得到以下结果：

```shell
Hello world
```

Remember that the  `()`  brackets in a function call means to execute it. Remove those round brackets and try the call again.

记住，函数调用中的 `()` 括号表示执行函数本身。你可以把圆括号去掉试一下。

```python
>>> hello_world
```

You'll get the following output:

你会得到以下输出：

```shell
<function hello_world at 0x1083eb510>
```

When we remove the round brackets from the function call then it gives us a function reference. Here above as you can see the reference of  `function hello_world`  points to this memory address  `0x1083eb510`.

当我们把圆括号从函数调用上去掉时，它会给我们一个函数引用。从上面可以看出：`function hello_world` 的引用指向了 `0x1083eb510` 这个内存地址。

Consider you have to perform an addition operation. You can do it by declaring  `a`  and  `b`  and then performing the addition.

如果你要执行一个加法操作，你可以先声明 `a` 和 `b`，然后把它们相加。

```python
>>> a = 5
>>> b = 10
>>> a + b
15
```

This is one way to go. But now consider that the value of  `a`  and  `b`  have changed and you need to do it again.

这是一种方式。但是，如果 `a` 和 `b` 的值变了，你就需要再这么来一次。

```python
>>> a = 5
>>> b = 10
>>> a + b
15
>>> a = 2
>>> b = 11
>>> a + b
13
```

This still looks doable. Now imagine we need to add a set of two numbers a hundred times. The numbers within the set are different for every calculation. That's a lot to do. Don't worry – we have a function at our disposal to solve this issue.

这看起来仍然是可行的。现在，假设我们需要进行一百次两数相加操作，每次相加的两个数都不同，这就有得做了。别担心，我们有函数，它可以解决这个问题。

```python
>>> def add(a,b):
...     print(a+b)
...

```

Here we are adding  `a`  and  `b`  as a compulsory argument to the  `add`  function. To call this function we will use the following syntax:

我们在这里把 `a` 和 `b` 作为了 `add` 函数的必备参数（compulsory argument），调用这个函数的语法如下：

```python
>>> add(10,5)
```

Output:

输出：

```shell
15
```

See how easy it is to define a function and use it? So what happens if we don't pass an argument?

定义一个函数并使用它是不是很容易？如果我们不传递参数会怎么样？

```python
>>> add()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: add() missing 2 required positional arguments: 'a' and 'b'
```

Python throws a TypeError and informs us that the function requires two arguments.

Python 抛出了一个 TypeError，告知我们这个函数需要有两个参数。

Can you guess what will happen if we pass a third argument?

如果我们传递了第三个参数，你能猜出来会发生什么吗？

```
>>> add(10,5,1)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: add() takes 2 positional arguments but 3 were given
```

Well, Python will inform us that we have passed 3 arguments but there are only 2 positional arguments.

Python 会告诉我们：我们传递了三个参数，但是只有两个位置参数。

So what can we do when we don't know how many arguments a function can take? To solve this issue we use args and kwargs.

所以当我们不知道函数的参数数量时该怎么做呢？我们可以使用 args 和 kwargs 解决这个问题。

## Args:

## Args：

When you don't know how many arguments will be passed to the function, use args and kwargs (kwargs are discussed below).

当你不知道要给函数传递多少个参数时，可以使用 args 和 kwargs（kwargs 会在下面进行讨论）。

To pass n number of arguments to a function we use args. We add a  `*`  in front of the argument.

要给函数传递 n 个参数，我们使用 args。在参数的前面添加一个 `*`。

> Remember when you attach a  `*`  in front, you will be receiving a tuple of arguments.

> 记住：当你在前面添加 `*` 时，你会得到一个由参数构成的元组。

```python
>>> def add(*num):
...     print(num)
...
```

Here  `*num`  is an instance of args. Now when we call the function  `add`  we can pass in n number of arguments and it won't throw a  `TypeError`.

这里的 `*num` 是 args 的一个实例。当我们调用 `add` 函数时，可以传入 n 个参数，也不会有 `TypeError` 被抛出。

```python
>>> add(1,2,3)
(1, 2, 3)

```

Now to perform the addition operation we will use the Python's builtin function  `sum`

现在我们使用 Python 内置的 `sum` 函数进行加法操作：

```python
>>> def add(*num):
...     print(sum(num))
...

```

Now when we call the add function we will get the following output:

当我们调用 add 函数时，就会得到以下输出：

```python
>>> add(1,2,3) # 函数调用
6
>>> add(1,2,3,4) # 函数调用
10
```

## Keyword Arguments:

## 关键字参数：

There are times when we don't know the order of the arguments that will be passed to our function when it's called. In such a scenario we use keyword arguments because you can pass them in any order in your call and our function will know the value. Take a look at this example:

有时候，我们并不知道传递给函数的参数顺序。这时就可以使用关键词参数，不管我们以何种顺序传递参数，函数都会知道对应的参数值。来看这个示例：

```python
>>> def user_details(username, age):
...     print("Username is", username)
...     print("Age is", age)
...
```

Let's call this function as follows:

像下面这样调用这个函数：

```python
>>> user_details("Sharvin", 100)
```

We will get the following output:

输出如下：

```shell
Username is Sharvin
Age is 100
```

Well this looks correct, but imagine if we called our function in this way:

这看起来没错，但是如果我们用这种方式调用这个函数呢：

```python
>>> user_details(100, "Sharvin")
```

We will get the following output:

输出如下：

```shell
Username is 100
Age is Sharvin
```

This does not look right. What happened is  `username`  took the value of 100 while  `age`  took the value of "Sharvin". In scenarios like this where we don't know the order of arguments we can use keyword arguments when calling the function:

这看起来不太对。`username` 取了 100 这个值，而 `age` 取了“Sharvin”这个值。在我们不知道参数的顺序时，可以在调用函数时使用关键词参数：

```python
>>> user_details(age=100, username="Sharvin")

```

Output:

输出：

```shell
Username is Sharvin
Age is 100
```

## Default Argument:

## 默认参数：

Suppose there is a condition where we are not sure if a particular argument will get a value or not when the function is called. In such a scenario we can use Default arguments as follows:

有时，我们并不确定某个参数是否会在函数被调用时得到值。这种情况下可以使用默认参数，例如：

```python
>>> def user_details(username, age = None):
...     print("Username is", username)
...     print("Age is", age)
...
```

Here we are assigning a  `None`  to our age argument. If we don't pass a second argument while calling the function it will take None as a default value.

这里将 `None` 赋给了 age 参数，如果我们在调用函数时不传递第二个参数，它就会自动将 None 作为默认值。

Let's call the function:

让我们调用一下这个函数吧：

```python
>>> user_details("Sharvin")
```

Output:

输出：

```shell
Username is Sharvin
Age is None
```

If we pass in the second argument it will override None and use it as the value.

如果我们传了第二个参数，它就会覆盖 None 并使用自己作为参数值。

```python
>>> user_details("Sharvin", 200)
Username is Sharvin
Age is 200
```

But what will happen if we assign the first argument in our function as default and the second as a compulsory argument? Go to the Python shell and try this out:

但是，如果我们将第一个参数设置为默认并把第二个参数设置为必备参数，会怎么样呢？打开 Python shell，一探究竟：

```python
>>> def user_details(username=None, age):
...     print("Username is", username)
...     print("Age is", age)
...
```

You'll get the following error:

你会得到如下错误：

```shell
  File "<stdin>", line 1
SyntaxError: non-default argument follows default argument
```

> **Remember:**  All compulsory arguments must be declared first and then the default argument must be declared.

> **记住：** 所有的必备参数必须先于默认参数声明。

## kwargs:

## Kwargs：

There can be a situation where you don't know how many keyword arguments will be passed into the function. In such a scenario we can use Kwargs.

有时你并不知道会有多少个关键字参数会被传递给函数，这种情况可以使用 Kwargs。

To use kwargs we put  **in front of the argument.**

要使用 kwargs，我们要把它放在 **参数之前**。

> ****Remember:**  When you attach a** in front, you will be receiving a dictionary of arguments.

> **记住：** 当你在前面附加一个 `**` 时，你将会收到一个参数字典。

Let's understand this by example. We will declare a function which accepts username as it's argument with  **in front of it.**

让我们通过示例理解这个吧。声明一个函数，以 username 为参数，username 前面会有 `**`。

```python
>>> def user(**username):
...     print(username)
...
```

When we call the  `user`  function as follows we will receive a dictionary.

当我们调用 `user` 函数时，我们会收到一个字典。

```python
>>> user(username1="xyz",username2="abc")
```

Output:

输出：

```shell
{'username1': 'xyz', 'username2': 'abc'}
```

So what's happening here? It looks the same as args, right?

所以这里发生了什么呢？它看起来和 args 一摸一样，是不是？

No, it's not. In args, you cannot access a particular value by its name as it is in the form of a tuple. Here we get the data in the form of a dictionary so we can easily access the value.

不，并不是。在 args 中，你不能通过名字传值，因为它在元组中。这里我们得到的数据是字典，所以我们可以轻而易举地访问值。

Consider this example:

考虑下这个示例：

```python
>>> def user(user_details):
...     print(user_details['username'])
...
```

**Let's call our function:**

调用我们的函数：

```python
>>> user(username="Sharvin",age="1000")
```

And you'll get the following output:

输出如下：

```shell
Sharvin
```

## Scope:

## 作用域

A scope defines where a variable or function is available. There are two types of scope in Python: Global and Local.

作用域（scope）定义了变量或函数的作用范围。Python 中有两种类型的作用域：全局（global）和局部（local）。

### Global Scope

### 全局作用域

A variable or function created in the main body of Python code is called a global variable or function and is part of the global scope. For example:

在 Python 代码主体中创建的变量或函数被称为全局变量或全局函数，它们是全局作用域的一部分。例如：

```python
>>> greet = "Hello world"
>>> def testing():
...     print(greet)
...
>>> testing()
Hello world
```

Here the variable  `greet`  is available globally because it is declared in the body of the program.

我们在这里定义的是一个全局可用的变量 `greet`，因为它是在程序体内声明的。

### Local Scope

### 局部作用域

A variable or function created inside a function is called a local variable or function and is part of the local scope:

在函数内部创建的变量或函数被称为局部变量或局部函数，它们是局部作用域的一部分：

```python
>>> def testing():
...     greet = "Hello world"
...     print(greet)
...
>>> testing()
Hello world
```

Here  `greet`  is created inside the testing function and is only available there. Let's try to access it in our main body and see what happens:

这里的 `greet` 是在 testing 函数内部创建的，它只能在这个函数内部使用。我们试着这代码主体内访问它，看看会发生什么：

```python
>>> print(greet)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'greet' is not defined
```

**Remember:** Restart the Python console by pressing ctrl + d and starting the shell again by using the  `python3`  command before testing the code above. The first example has you declare the  `greet`  variable in the global scope meaning it will still be available in memory when you run the second example.

**记住：** 在测试上述代码之前要重启 Python 控制台：先按 ctrl + d 停止程序，再使用 `python3` 命令启动 shell。因为第一个例子中将 `greet` 变量声明在全局作用域，所以在运行第二个示例时，它仍然在内存中可用。

As  `greet`  is not available globally we get the error that it is not defined.

由于 `greet` 并不是全局可用，所以我们会得到一个指出它未定义的错误。

## Return Statement:

<h2 id="return-statement">Return 语句：</h2>

Until now our functions are pretty simple. They are receiving data, processing it, and printing them. But in the real world, you need a function to return output so that it can be used in different operations.

到目前为止，我们的函数都非常简单：它们接收数据，进行处理，然后打印它们。但是在真实世界中，你需要函数将输出返回，以便它可以在不同操作中使用。

To achieve this, return statements are used. Remember, return statements are only part of functions and methods. The syntax for the return statement is quite easy.

`return` 语句可以达到这个目的。记住，return 语句只是函数和方法的一部分，它的语法非常简单。

```python
>>> def add(a, b):
...     return a + b
...
>>> add(1,3)
4
```

Instead of printing our addition, we are returning the output. The value of the returned output can also be stored in a variable.

我们将输出返回，而没有打印相加的结果。返回值也可以被存放在变量中。

```python
>>> sum = add(5,10)
>>> print(sum)
15
```

## Lambda Expression:

<h2 id="lambda-expression">Lambda 表达式</h2>

Consider a situation where you don't want to perform much computation in a function. In such a situation writing a full-fledged function doesn't make sense. To solve this we use a lambda expression or lambda function.

有时候，你并不想在一个函数内执行太多的计算，这时写一个完整的函数就没什么意义了。要解决这个问题，我们可以使用 lambda 表达式或 lambda 函数。

So what is a lambda expression? It is an anonymous function and they are restricted to a single expression. The lambda expression can take n number of arguments.

那么什么是 lambda 表达式呢？它是一个匿名函数，表达式只能有一行。Lambda 表达式可以接收 n 个参数。

The syntax for lambda expression is:

Lambda 表达式的语法如下：

```python
variable = lambda arguments: operation
```

Let's understand it more by example:

让我们通过一个示例进一步理解：

```python
>>> sum = lambda a: a + 10
```

Here we have declared a variable  `sum`  which we are using to call the lambda function.  `a`  represents the argument that is passed to that function.

我们在这里声明了一个变量 `sum`，它会被用来调用 lambda 函数。`a` 表示传递给函数的参数。

Let's call our function:

让我们调用一下我们的函数吧：

```python
>>> x(5)
15
```

## List comprehension:

## 列表推导式

Consider a situation where you want a list of squares. Normally you'll declare a `squares`  list and then in a for loop you'll square out the numbers.

考虑这样这一种场景：你想要一个由平方数组成的列表。通常你会声明一个 `squares` 列表，然后在一个 for 循环中计算这些数字的平方。

```python
>>> squares = []
>>> for x in range(10):
...     squares.append(x**2)
...
>>> squares
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

Well this is doable, but we can achieve this in a single line with the help of list comprehension.

虽然这是可行的，但是在列表推导式（list comprehension）的帮助下，我们用一行代码就可以实现：

There are two ways to achieve this. Let's understand both of them.

实现的方式有两种，我们两个方法都理解一下。

```python
>>> squares = list(map(lambda x: x**2, range(10)))
>>> squares
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

Here we are using  `list`  constructor to build a list and inside that lambda function which squares out the number. Another way to achieve the same result is as follows:

这里使用 `list` 构造器构造了一个列表，它里面是计算平方值的 lambda 函数。另一种方式也得到了同样的结果，如下：

```python
>>> squares = list(x**2 for x in range(10))
>>> squares
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

I prefer this way because it is easier to more concise and easier to understand.

我更喜欢这种方式，因为它更简单、易懂。

What about when we have a condition where we want a set of two numbers that are the same? Well, we need to write two for loops and one if loop.

如果我们有一个条件，想要一组相同的两个数字该怎么办呢？嗯，我们需要写两个 for 循环和一个 if 条件。

Let's see how that will look:

我们来看一下这该怎么写：

```python
>>> num_list = []
>>> for i in range(10):
...     for j in range(10):
...             if i == j:
...                     num_list.append((i,j))
...
>>> num_list
[(0, 0), (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8), (9, 9)]
```

That's a lot of work. And in terms of readability it's hard to understand.

这工作量还是挺大的，而且从可读性方面来看，代码更难理解了。

Let's use list comprehension to achieve the same result.

让我们用列表推导式实现它吧。

```python
>>> num_list = list((i,j) for i in range(10) for j in range(10) if i == j)

```

See how easy it is to get the same output in a single expression? Well, that's the power of list comprehension.

看见了吧，用一个表达式得到同样的结果是不是很容易？这就是列表生成式的强大之处。

## OOP concepts:

## 面向对象编程

Python is a multi-paradigm programming language. It means Python can use different approaches to solve a problem. One of the paradigms is procedural or functional programming. It structures the code like a recipe – a set of steps in the form of functions and code blocks.

Python 是一门多范式的编程语言，即它可以使用不同的方式解决同一个问题。其中的一种范式就是过程式（procedural）或函数式（functional）编程，代码结构就像一个食谱——一组以函数或代码块呈现的步骤。

Another approach to solving the problem is by creating classes and objects. This is known as object-oriented oriented programming. An object is a collection of data (variables) and methods that act on those data. And classes are a blueprint for each object.

解决这个问题的另一种方式就是创建类（class）和对象（object），这就是所谓的面向对象编程（OOP）。对象就是一组数据（变量）和方法的集合，方法操作这些数据。类是对象的蓝图。

The important thing to understand in object-oriented programming is that objects are at the center of the paradigm – they not only represent the data but also the structure of the program.

理解面向对象编程的关键在于：以对象为中心——它们不仅代表数据，还代表程序的结构。

You can choose the paradigm that best suits the problem at hand, mix different paradigms in one program, and/or switch from one paradigm to another as your program evolves.

你可以为要处理的问题选择最适合的范式，在一个程序中混用不同的范式，也可以在程序的演进过程中从一种范式切换到另一种范式。

### Advantages of object oriented programming

### 面向对象编程的优点

-   **Inheritance:**  This is one of the most useful concepts in OOP. It specifies that the child object will have all the properties and behavior of the parent object. Thus Inheritance allows us to define a class that inherits all the methods and properties from another class.
-   **Polymorphism:**  To understand polymorphism let’s divide the word into two parts. The first part "poly" means many and "morph" means to form or shape. Thus polymorphism means one task can be performed in many different ways.  
      
    For example, you have a class  `animal`, and all animals speak. But they speak differently. Here, the “speak” behavior is polymorphic and depends on the animal. So, the abstract “animal” concept does not actually “speak”, but specific animals (like dogs and cats) have a concrete implementation of the action “speak”.  
      
    Polymorphism means the same function name or method name being used for different types.
-   **Encapsulation:**  In object-oriented programming you can restrict access to methods and variables – we can make the methods and variables private. This can prevent the data from being modified by accident and is known as encapsulation.

- **继承（Inheritance）：** 这是面向对象编程中最有用的概念之一。它指明子对象会拥有父对象所有的属性和行为。因此，继承允许我们定义一个类，这个类将继承另一个类的所有方法和属性。
- **多态（Polymorphism）：** 为了理解多态，我们可以将这个词划分为两部分。第一部分“poly”表示很多，而“morph”表示形成或形状。因此 polymorphism 表示一个任务可以以不同方式执行。

    例如，你有一个 `animal` 类，并且所有的动物都能说话。但是它们说话的方式不同。这里的“说话”这个行为就是多态的，它依赖于具体的动物。所以，抽象的“动物”实际上并不“说话”，但是特定的动物（比如狗和猫）就有“说话”这个动作的具体实现。

    多态意味着相同的函数名或方法名可以被用于不同的类型。

- **封装（Encapsulation）：** 在面向对象编程中，你可以限制对方法和变量的访问——我们可以把方法和变量设置成私有的。这就能防止数据被意外修改，这种方式被称为封装。

First, we will understand classes, objects, and constructors. Then after that, we will look into the above properties again. If you already know about classes, objects, and constructors, feel free to skip ahead.

首先，我们会理解类、对象和构造器。之后，我们会再次查看上述属性。如果你已经对类、对象和构造器有所了解，可以自由跳过。

## Classes:

## 类：

There are primitive data structures available in Python, for example, numbers, strings, and lists. These can all be used for simple representations like name, place, cost, and so on.

Python 中一些可以直接使用的基本数据结构，比如数字、字符串和列表。这些都可以用来简单地表示名字、地方、价值，等等。

But what if we have more complex data? If there is a pattern in the repetition of the properties of that data, what can we do?

但是如果我们有更复杂的数据，该怎么办呢？如果这些数据有着重复的属性，我们可以做什么呢？

Suppose we have 100 different animals. Every animal has a name, age, legs, etc. What if we want to add other properties to each animal, or one more animal gets added to that list? To manage such a complex scenario we need classes.

假设我们有一百只不同的动物，每只动物都有名字、年龄、腿，等等。如果我们想给每只动物再添加一个属性，或者再添加一只动物到这个列表中，该怎么办呢？要应付这种复杂的情况，我们需要使用类（class）。

According to the official  [Python documentation][53]:

根据 [Python 官方文档][53]：

> Classes provide a means of bundling data and functionality together. Creating a new class creates a new type of object, allowing new instances of that type to be made.

> 类提供了一种将数据数据和功能捆绑在一起的方法。创建一个新类意味着创建一种新的对象类型，从而允许创建一个该类型的新实例。

Each class instance can have attributes attached to it for maintaining its state. Class instances can also have methods (defined by its class) for modifying its state.

每个类的实例可以拥有保存状态的属性，也可以有改变状态的（定义在类中的）方法。

Syntax of class:

类的语法：

```python
class ClassName:

    <expression-1>
    .
    .
    .
    <expression-N>
```

We use `class` keyword to define a class. We will define a `class Car`.

我们使用 `class` 关键字定义一个类。我们将定义一个 `Car` 类。

```python
class Car:
    pass
```

## 方法：

Methods look the same as functions. The only difference is that methods are dependent on an object. A function can be invoked by name while methods need to be invoked by using their class reference. They are defined inside the class.

方法（Method）看起来和函数一样，它们之间唯一的区别就是：方法依赖于对象。函数可以通过函数名调用，而方法必须通过它们的类引用调用。方法在类中定义。

In our example, let's create two methods. One is an engine and another is a wheel. These two methods define the parts available in our car.

在我们的示例中，创建了两个方法：一个是 engine，另一个是 wheel。这两个方法定义了汽车的可用部件。

The below program will give us a better idea of classes:

下面这段程序会让我们对类有一个更好的理解：

```python
>>> class Car:
...     def engine(self):
...             print("Engine")
...

>>> Car().engine()
Engine
```

Here we are calling the  `engine`  method by using the  `Car()`  reference.

在这里，我们通过 `Car()` 引用调用 `engine` 方法。

To summarize, the class provides a blueprint of what should be defined but it does not provide any real content. The  `Car`  class above defines the engine but it will not state what a specific car’s engine is. It is specified by the object.

总而言之，类提供定义的蓝图，但并不提供任何真实内容。`Car` 类定义了引擎（engine），但它并不会声明一辆特定汽车的引擎是什么。引擎是通过对象声明的。

## Objects:

## 对象：

The object is an instance of the class. Let’s consider the above example of a car. Here Car is our  `class`  and  `toyota`  is the  `object`  of the car. We can create multiple copies of the object. Every object must be defined using the class.

对象（object）是类的实例。考虑上述汽车的例子，汽车就是我们的类，而 `toyota` 就是汽车的对象。我们可以创建多个对象的副本。每个对象都必须使用类进行定义。

The syntax for creating an object is:

创建对象的语法如下：

```python
toyota = Car()

```

Let’s consider our  `Car`  example to understand objects a bit better:

为了更好的理解对象，考虑下我们的 `Car` 示例：

```python
class Car:

    def engine(self):
        print("Engine")

    def wheel(self):
        print("Wheel")

toyota = Car()
```

The above  `toyota = Car()`  is a  **class object**. Class objects support two kinds of operations: attribute references and instantiation.

上面的 `toyota = Car()` 就是一个 **类对象**。类对象支持两种类型的操作：属性引用和实例化。

Class instantiation uses function notation. The instantiation operation (“calling” a class object) creates an empty object.

类的实例化使用函数符号，实例化操作（“调用”类对象）会创建一个空对象。

Now we can call different methods from our class  `Car`  using the object  `toyota`  that we have created. let’s call the method  `engine`  and  `wheel`.

现在我们可以使用 `toyota` 对象调用 `Car` 类的不同方法，让我们调用下方法 `engine` 和 `wheel` 吧。

Open your editor and create a file named  `mycar.py`. In that file copy the code below:

打开你的编辑器，创建一个名为 `mycar.py` 的文件。将以下代码复制到该文件中：

```python
class Car:

    def engine(self):
        print("Engine")

    def wheel(self):
        print("Wheel")

if __name__ == "__main__":
    toyota = Car()
    toyota.engine()
    toyota.wheel()
```

Save the above code. Now let's take a closer look at our program.

保存上述代码。现在让我们仔细看一看这个程序。

Here we are creating a  `toyota`  object with the help of  `Car`  class. The  `toyota.engine()`  is a method object. What exactly happens when a method object is called?

我们利用 `Car` 类创建了一个 `toyota` 对象。`toyota.engine()` 是一个方法对象，当一个方法对象被调用时，到底发生了什么？

In the call  `toyota.engine()`  doesn't take any argument but if you see the method declaration we can see that it takes a  `self`  argument.

调用 `toyota.engine()` 时并没有传递任何参数，但是如果你看一眼方法声明，你就会发现它有一个 `self` 参数。

You may be confused about why it is not throwing an error. Well whenever we use a method object, the call  `toyota.engine()`  is converted to  `Car.engine(toyota)`. We will understand more about the self in the upcoming section.

你可能会因没有抛出错误而感到疑惑。其实每次我们在使用方法对象时， `toyota.engine()` 都会被转换成 `Car.engine(toyota)`。

Run the program using the following command.

使用以下命令运行程序。

```shell
python mycar.py

```

You'll get the following output:

你会得到以下输出：

```shell
Engine
Wheel
```

## Constructor:

## 构造器：

The  `__init__`  method is the constructor method in Python. The constructor method is used to initialize the data.

`__init__` 方法是 Python 中的构造器方法（constructor method），构造器方法用于初始化数据。

Go to the Python shell and enter this example:

打开 Python shell，输入这个示例：

```python
>>> class Car():
...     def __init__(self):
...             print("Hello I am the constructor method.")
...

```

When we will call our class we will get the following output:

调用这个类得到的输出如下：

```python
>>> toyota = Car()
Hello I am the constructor method.
```

**Note:**  You will never have to call the  **init**() method – it gets called automatically when you create a class instance.

**注意：** 你永远都不必调用 `init()` 方法——它会在创建类实例时被自动调用。

## Instance attributes:

## 实例属性：

All the classes have objects and all the objects have attributes. Attributes are the properties. We use  `**init**()`  method to specify an object’s initial attribute.

所有的类都有对象，所有的对象都有属性（attributes）。属性就是对象具有的性质。我们使用 `__init__()`方法声明一个对象的初始属性。

Let’s consider our car example:

以汽车为例：

```python
class Car():
    def init(self, model): 
        self.model = model  #实例属性
```

In our example, each  `Car()`  has a specific model. Thus instance attributes are unique data to each instance.

在我们的示例中，每个 `Car()` 都有一个特定的型号（model），因此实例属性对每个实例来说都是唯一的。

## Class attributes:

## 类属性：

We saw that instance attributes are specific to each object but class attributes are the same for all the instances. Let us look at the example of the car with the help of class attributes.

我们看到实例属性是针对每个对象来说的，但是类属性对所有的实例来说都是一样的。我们借助类属性看一下汽车的示例：

```python
class Car():

    no_of_wheels = 4 #类属性
```

So each car can have different models but all the cars will have only 4 wheels.

所以每辆汽车都可以有不同的型号，但是所有的汽车都只会有四个轮子。

## Self:

## Self：

Now let’s understand what `self` means and how we use it in object-oriented programming. `self` represents the instance of a class. By using the `self` keyword we can access the data initialized in the constructor and methods of a class.

现在我们来理解下 `self` 的含义，以及如何在面向对象编程中使用它。`self` 表示类的实例，我们可以通过这个关键字访问由构造器和类方法初始化的数据。

Let's look at an example of how `self` can be used. Let’s create a method named `brand` under our class `Car`.

现在来看一个使用 `self` 的示例，我们在 `Car` 类中创建一个名为 `brand` 的方法。

Inside that `__init__` method, we will pass a model by passing our car’s model name when we are instantiating our object. This name can be accessed anywhere in the class, for example `self.model` in our case.

在 `__init__` 方法中，我们会在实例化对象时传递汽车型号的名字，这个名字可以在类中的任何地方被访问，比如我们的 `self.model`。

Go to the file named `mycar.py` and replace old code with this code:

打开名为 `mycar.py` 的文件，将旧代码换成这个代码：

```python
class Car(): 

  def __init__(self, model): 
    self.model = model
  		
  def brand(self): 
    print("The brand is", self.model)  

if __name__ == "__main__":
  car = Car("Bmw")
  car.brand()
```

Now when we run our above program using the following command:

现在当我们使用以下命令运行上述程序时：

```shell
python mycar.py
```

We will get the following output:

会得到以下结果：

```shell
The brand is Bmw
```

**Note:** `self`  is a convention and not a real Python keyword.  `self`  is an argument in a method and we can use another name in place of it. But it is recommended to use  `self`  because it increases the readability of your code.

**注意：** `self` 是只是一个习惯，它并不是一个 Python 的关键词。方法中的 `self` 只是一个参数，我们可以使用另一个名字替换它。但是推荐使用 `self`，因为它会提高代码的可读性。

## Inheritance:

## 继承：

Inheritance refers to when a class inherits the property of another class.

继承指一个类继承了另一个类的属性。

The class from which properties are inherited is called the base class. The class which inherits the property of another class is called the derived class.

被继承了属性的那个类称为基类（base class）。继承了另一个类的属性的那个类被称为派生类（derived class）。

Inheritance can be defined as a parent and child relationship. The child inherits the properties of the parent. Thus making the child a derived class while parent is a base class. Here the term property refers to attributes and methods.

继承可以被定义为父子关系。子类继承父类的性质，因此子类就是派生类，而父类就是基类。这里的性质指的是属性和方法。

The syntax for a derived class definition looks like this:

派生类定义的语法如下：

```python
class DerivedClassName(BaseClassName):
    <statement-1>
    .
    .
    .
    <statement-N>
```

It’s important to note that child classes override or extend the attributes and behaviors of parent class methods. This is to say that child classes inherit all of the the attributes and behaviors of their parents – but they're also able to specify different behavior to follow.

注意到子类覆盖或扩展父类方法的属性和行为 z 这一点很重要。这就是说，子类继承父类所有的属性和行为，但是子类又可以声明不同的行为。

The most basic type of class is an object, which generally all other classes inherit as their parent. Let’s modify our previous example to understand how inheritance works.

最基本的类类型是 object，它通常被所有的其它类作为父类继承。我们来修改一下之前的示例，理解继承是如何工作的。

We will create a base class named  `vehicle`:

创建一个名为 `vehicle` 的基类：

```python
class Vehicle:
    def __init__(self, name):
        self.name = name
    
    def getName(self):
        return self.name
```

We have created a class `Vehicle` and instantiated a constructor with `self.name` which we are using in `getName` method. Whenever this method will be called, it will return the `name` that has been passed when an object is instantiated for that class.

我们已经创建了一个 `Vehicle` 类，使用 `self.name` 实例化了一个构造器，我们将在 `getName` 方法中使用 `self.name`。每次调用这个方法时，它都会返回对象初始化时传入的 `name`。

Now let’s create a child class `Car`:

现在创建一个子类 `Car`：

```python
class Vehicle:
    def __init__(self, name):
        self.name = name
    
    def getName(self):
        return self.name

class Car(Vehicle):
  pass
```

`Car`  is a child class of  `Vehicle`. It inherits all the method and attributes of parent class.

`Car` 是 `Vehicle` 的一个子类，它继承了父类所有的方法和属性。

Now let’s use methods and attribute from the  `Vehicle`  class in our child class  `Car`.

现在在子类 `Car` 中使用父类 `Vehicle` 的方法和属性。

```python
class Vehicle:

    def __init__(self, name, color='silver'):
        self.name = name
        self.color = color
    
    def get_name(self):
        return self.name
    
    def get_color(self):
        return self.color

class Car(Vehicle):
  pass

audi = Car("Audi r8")
print("The name of our car is", audi.get_name(), "and color is", audi.get_color())
```

Let's understand what we have done here.

理解一下我们在这里干了啥。

We have declared a class named  `Vehicle`  with a constructor that takes name as an argument while color has a default argument.

我们声明了一个名为 `Vehicle` 的类，它的构造器将名字作为参数，而颜色有一个默认参数。

We have two methods inside it.  `get_name`  returns name while  `get_color`  returns the color. We have instantiated an object and passed the car name.

类中有两个方法：`get_name` 返回名字，而 `get_color` 返回颜色。我们实例化了一个对象，传递了一个汽车名。

One thing you'll notice here that we are using base class methods in our child class declaration.

在这里，你会发现我们在子类声明中使用了父类的方法。

Run the above program using the following command:

使用以下命令运行上述程序：

```shell
python mycar.py
```

Output:

输出：

```
The name of our car is Audi r8 and color is silver

```

  
We can also override a parent method or attribute. In the above example, we have defined our vehicle color has silver. But what if the color of our car is black?

我们也重写了一个父类的方法或属性。在以上示例中，我们定义交通工具的颜色为银色，但是如果我们的汽车是黑色的呢？

Now for every child class, we can’t make changes in the parent class. There comes the overriding functionality.

对于每个子类，我们不能直接在它的父类中进行修改，这就有了重写机制。

```python
class Vehicle:

    def __init__(self, name, color='silver'):
        self.name = name
        self.color = color
    
    def get_name(self):
        return self.name
    
    def get_color(self):
        return self.color

class Car(Vehicle):

    def get_color(self):
        self.color = 'black'
        return self.color

audi = Car("Audi r8")
print("The name of our car is", audi.get_name(), "and color is", audi.get_color()
```

As you can see in the above program, I have not instantiated a constructor. The reason behind this is that our child class  `Car`  is only using attributes from the  `Vehicle`  class and it is already inheriting them. So in such a scenario, there is no need to re-instantiate these attributes.

如你所见，我们并没有实例化一个构造器。因为子类 `Car` 只是使用来自 `Vehicle` 类的属性，而它早就继承这些属性了。所以在这种场景下，没有必要重新实例化这些属性。

Now when we run the above program we will get the following output:

运行程序，输出如下：

```shell
The name of our car is Audi r8 and color is black

```

## Super:

## Super：

`super()`  returns a temporary object of the superclass that then allows us to call that superclass’s methods.

`super()` 返回一个父类的临时对象，允许我们调用父类的方法。

Calling the previously built methods with  `super()`  saves us from needing to rewrite those methods in our subclass, and allows us to swap out superclasses with minimal code changes. Thus  `super`  extends the functionality of the inherited method.

直接使用 `super()` 调用已有的方法让我们免于在子类中重写那些方法，允许我们用最小的代码改动替换父类。因此 `super` 扩展了继承方法的功能。

Let’s extend our car example using  `super()`. We will instantiate a constructor with  `brand_name`  and  `color`  in the parent class,  `Vehicle`. Now we will call this constructor from our child class (`Car`) using  `super`. We will create a  `get_description`  method which is returning  `self.model`  from  `Car`  class and  `self.brand_name`,  `self.color`  from the  `Vehicle`  class.

让我们使用 `super()` 对汽车示例进行扩展吧。我们将用父类 `Vehicle` 中的 `brand_name` 和 `color` 重新实例化一个构造器。现在在子类（`Car`）中使用 `super` 调用父类的这个构造器，我们将创建一个 `get_description` 方法，它从 `Car` 类返回 `self.model` 并从 `Vehicle` 类返回 `self.brand_name` 和 `self.color`。

```python
class Vehicle:
 
    def __init__(self, brand_name, color):
        self.brand_name = brand_name
        self.color = color
 
    def get_brand_name(self):
        return self.brand_name
 
class Car(Vehicle):
 
    def __init__(self, brand_name, model, color):  
        super().__init__(brand_name, color)       
        self.model = model
 
    def get_description(self):
        return "Car Name: " + self.get_brand_name() + self.model + " Color:" + self.color
 
c = Car("Audi ",  "r8", " Red")
print("Car description:", c.get_description())
print("Brand name:", c.get_brand_name())
```

When we run the above program we get following output:

运行上述程序，输出如下：

```shell
Car description: Car Name: Audi r8 Color: Red
Brand name: Audi
```

## Multiple Inheritance:

## 多重继承：

When a class inherits the method and attributes from multiple parent class then it is called multiple inheritance. This allows us to use the property from multiple base classes or parent classes in a derived or child class.

多重继承（multiple inheritance）是指一个类从多个父类继承方法和属性。它允许我们在派生类或子类中使用多个基类或父类的性质。

The general syntax of multiple Inheritance is as follows:

多继承的通用语法如下：

```python
class DerivedClassName(Base1, Base2, Base3):
    <statement-1>
    .
    .
    .
    <statement-N>
```

Let’s extend our vehicle example using the multiple inheritance property. Here in this example, we will create 3 classes i.e.  `Vehicle`,  `Cost`  and  `Car`

让我们使用多继承对交通工具这个示例进行扩展吧。在这个示例中我们会创建三个类：`Vehicle`、`Cost` 和 `Car`。

The classes  `Vehicle`  and  `Cost`  will be the Parent class. A  `Vehicle`  class represents the general property while the  `Cost`  class represents its pricing.

`Vehicle` 类 和 `Cost` 会成为父类。`Vehicle` 类表示通用属性，而 `Cost` 类表示价值。

As  `Car`  has a general property and cost will have two parent classes. Thus we will inherit multiple parent classes.

因为 `Car` 有一个通用属性和价值，所以它将会有两个父类。因此我们将继承多个父类。

```python
class Vehicle:

    def __init__(self, brand_name):
        self.brand_name = brand_name
    
    def get_brand_name(self):
        return self.brand_name


class Cost:		

    def __init__(self, cost):
        self.cost = cost
    
    def get_cost(self):
        return self.cost

 
class Car(Vehicle, Cost):	

    def __init__(self, brand_name, model, cost): 
        self.model = model 
        Vehicle.__init__(self, brand_name) 
        Cost.__init__(self, cost) 

    def get_description(self):
        return self.get_brand_name() + self.model + " is the car " + "and it's cost is " + self.get_cost()
		
c = Car("Audi ",  "r8", "2 cr")
print("Car description:", c.get_description())
```

Here you will find one thing in the above program that is different from all the other programs in this tutorial. I have used  `Vehicle.**init**(self, brand_name)`  in the constructor of  `Car`  class. This is one way of calling attributes from the parent class. Another was is  `super`  which I have explained above.

在上述程序中，你会发现有一个东西与这篇教程中的其它程序都不同，我在 `Car` 类的构造器中使用了 `Vehicle.__init(self, brand_name)`。这是调用父类属性的一种方式，另一种方式就是我在上面提到的 `super`。

When we run the above program we will get the following output:

运行程序，结果如下：

```python
Car description: Audi r8 is the car and it's cost is 2 cr

```

Though it can be used effectively, multiple inheritance should be done with care so that our programs do not become ambiguous and difficult for other programmers to understand.

尽管多重继承可以被高效使用，但是也需要保持谨慎，避免程序变得模棱两可，防止程序对于其它程序员难于理解。

## Polymorphism:

## 多态：

The word polymorphism means having many forms. In programming, polymorphism means same function name (but different signatures) being uses for different types.

多态一词表示具有很多种形式。在编程中，多态表示同一个函数名（但是不同的函数签名）被用于不同的类型。

Let’s extend our car program using polymorphism. We will create two classes,  `Car`  and  `Bike`. Both the classes have common method or function, but they are printing different data. The program is pretty self-explanatory:

让我们用多态扩展汽车程序吧。我们将会创建两个类：`Car` 和 `Bike`。两个类都有共同的方法或函数，但是它们会打印不同的数据。程序本身很容易理解：

```python
class Car: 

    def company(self): 
        print("Car belongs to Audi company.")
   
    def model(self): 
        print("The Model is R8.") 
   
    def color(self): 
        print("The color is silver.") 
   
class Bike: 

    def company(self): 
        print("Bike belongs to pulsar company.") 
   
    def model(self): 
        print("The Model is dominar.") 
   
    def color(self): 
        print("The color is black.") 
  
def func(obj): 
    obj.company() 
    obj.model() 
    obj.color() 
   
car = Car() 
bike = Bike() 
   
func(car) 
func(bike)
```

When we run the above code we will get the following output:

运行以上代码，结果如下：

```shell
Car belongs to Audi company.
The Model is R8.
The color is silver.
Bike belongs to pulsar company.
The Model is dominar.
The color is black.
```

## Encapsulation:

## 封装：

In most object-oriented programming, we can restrict access to methods and variables. This can prevent the data from being modified by accident and is known as encapsulation.

在大多数面向对象编程中，我们都可以限制对方法和变量的访问。这能防止数据被意外修改，也被称为封装。

Let’s use encapsulation in our car example. Now imagine we have a super-secret engine. In the first example, we will hide our engine using a  **private variable**. In the second example, we will hide our engine using a  **private method**.

让我们在汽车示例中使用封装吧。假设我们有一个绝密的引擎。在第一个示例中，我们将使用 **私有变量** 隐藏引擎。在第二个示例中，我们将使用 **私有方法** 对引擎进行隐藏。

**Example 1:**

**示例 1：**

```python
cclass Car:

  def __init__(self): 
    self.brand_name = 'Audi '
    self.model = 'r8'
    self.__engine = '5.2 L V10'
    
  def get_description(self):
        return self.brand_name + self.model + " is the car"
  
c = Car()
print(c.get_description)
print(c.__engine)
```

**In this example  `self.`**`engine`  is a private attribute. When we run this program we will get the following output.

在这个示例中，`self.__engine` 是私有属性。当我们运行这个程序时，就会得到以下结果。

```shell
Audi r8 is the car
AttributeError: 'Car' object has no attribute 'engine'
```

We get an error that  `Car`  object doesn't have \_engine because it is a private object.

我们得到了一个错误：`Car` 对象没有 `_engine` 属性，因为它是一个私有对象。

****Example 2:****

**示例 2：**

**We can also define a private method by adding** in front of the method name. Following is the example of how we can define a private method.

我们也可以通过在方法名前面加上 `__` 定义私有方法。以下就是一个定义私有方法的示例。

```python
class Car:

  def __init__(self):
      self.brand_name = 'Audi '
      self.model = 'r8'

  def __engine(self):
      return '5.2 L V10'

  def get_description(self):
      return self.brand_name + self.model + " is the car"
    
    
c = Car()
print(c.get_description())
print(c.__engine()) 
```

**In this example  `def __engine(self)`  is a private method. When we run this program we will get the following output.**

示例中的 `def __engine(self)` 是一个私有方法。运行程序，结果如下：

```shell
Audi r8 is the car
AttributeError: 'Car' object has no attribute '__engine'
```

Now suppose we want to access the private attribute or method we can do it in the following way:

假设现在我们想访问私有属性或私有方法，我们可以这么做：

```python
class Car:

  def __init__(self):
      self.brand_name = 'Audi '
      self.model = 'r8'
      self.__engine_name = '5.2 L V10'

  def __engine(self):
      return '5.2 L V10'

  def get_description(self):
      return self.brand_name + self.model + " is the car"
    
    
c = Car()
print(c.get_description())
print("Accessing Private Method: ", c._Car__engine()) 
print("Accessing Private variable: ", c._Car__engine_name)
```

The output of the following program is:

程序的输出如下：

```shell
Audi r8 is the car
Accessing Private Method:  5.2 L V10
Accessing Private variable:  5.2 L V10
```

Encapsulation gives you more control over the degree of coupling in your code. It allows a class to change its implementation without affecting other parts of the code.

封装使你可以更好地控制代码中的耦合程度，允许你在不影响其它部分的情况下修改类的实现。

## Decorator:

## 装饰器：

Imagine you have to extend the functionality of multiple functions. How will you do that?

假设你需要扩展多个函数的功能，你会怎么做？

Well, one way is you can make functional calls and in that function, you can handle it. Making changes in 30 to 40 function calls and remembering where to place the call is a messy task. But the more elegant way provided by Python is with decorators.

一种方式是进行函数调用，你可以在函数内进行处理。对三十到四十个函数调用进行修改，还要记住应该把调用放在何处，这是一项很棘手额工作。不过，Python 给你提供了一种更加优雅的方式——装饰器（decorator）。

What is a decorator? A decorator is a function that takes a function and extends its functionality without modifying it explicitly. Well, I understand if you are still confused about what decorators are. Don't worry – we have a tool named example to explain it.

什么是装饰器？装饰器就是一个函数，它接受一个函数并扩展其功能，整个过程不涉及对原函数的显式修改。我觉得你仍然不太明白装饰器是什么，别急，我们有一个示例对它进行解释。

Let's try an example to understand the decorator. There are two ways to write a decorator.

让我们通过示例理解装饰器吧。有两种写装饰器的方法。

### Method 1

### 方法 1

We declare a decorator function and in the arguments of the function we expect the function to be passed as an argument. Inside that, we write a wrapper function where operations are carried out and it is returned.

我们声明一个装饰器函数，并将我们期望的函数作为参数传入。在装饰器函数内部，我们写一个包装函数执行操作并将其返回。

```python
>>> def my_decorator(func):
...     def wrapper():
...             print("Line Number 1")
...             func()
...             print("Line Number 3")
...     return wrapper
...
>>> def say_hello():
...     print("Hello I am line Number 2")
...
```

To call the function we assign the decorator with  `say_hello`  as an argument.

要调用这个函数，我们将 `say_hello` 赋给装饰器作为参数。

```python
>>> say_hello = my_decorator(say_hello)
```

We can also check the reference using  `say_hello`. We will get the output that tells us it has been wrapped by the  `my_decorator`  function.

我们还可以使用 `say_hello` 检查引用，结果会告诉我们它已经被 `my_decorator` 函数包装。

```python
<function my_decorator.<locals>.wrapper at 0x10dc84598>
```

Let's call our  `say_hello`  function:

调用一下 `say_hello` 函数：

```python
>>> say_hello()
Line Number 1
Hello I am line Number 2
Line Number 3
```

See the magic the line "Hello I am line Number 2" gets printed in between Line Number 1 and 3 because the function call gets executed there.

“Hello I am line Number 2”魔术般地被打印在“Line Number 1”和“Line Number 3”之间，因为这个函数调用就在那里执行的。

Method 1 is clunky, and because of that many people prefer a different approach.

方法 1 很笨重，因此很多人更喜欢使用另一种方式。

### Method 2

### 方法 2

Here our decorator declaration remains same but we change how the call is assigned to that decorator. Whichever function requires that decorator wraps itself with  `@decorator_name`.

这里我们的装饰器装饰仍然不变，但是我们改变了调用被赋给装饰器的方式。每个需要装饰器的函数都用 `@decorator_name` 包裹自己。

```python
>>> def my_decorator(func):
...     def wrapper():
...             print("Line Number 1")
...             func()
...             print("Line Number 3")
...     return wrapper
...
>>> @my_decorator
... def say_hello():
...     print("Hello I am line Number 2")
...
>>> say_hello()
```

Output is the same:

输出不变：

```shell
Line Number 1
Hello I am line Number 2
Line Number 3
```

A decorator is a powerful tool and it is used in the following development scenarios of an application:

-   Setup logger
-   Setup configuration
-   Setup Error catching
-   Extending common functionality for all function and classes

装饰器是一个非常强大的工具，它被用在下列开发场景中：

- 日志设置
- 配置设置
- 错误捕获
- 为所有的函数和类扩展通用功能

## Exceptions:

## 异常：

When we were learning various syntax we came across various errors. Those errors occurred because of the syntax. But in a real-world application, errors (or commonly known as bugs) not only occur due to syntax issues but also because of network errors or some other cause.

在学习各种语法的过程中，我们也遇到了各种各样的错误。那些错误因为语法问题而出现。但是在真实应用中，错误（通常也称为 bug）并不只是由语法问题引起的，也可能是网络或其他原因。

To handle these issues we use Try - Except. In  `try`  block, we write the expression that we want to be executed, while in  `except`  block we catch the error. The Try-Except block looks as follows:

我们使用 Try-Except 处理这些问题。在 `try` 块中，写我们想要执行的表达式，而在 `except` 块中，我们捕获错误。Try-Except 块形式如下：

```python
try:
    expression
except:
    catch error
```

Let's understand this by an example:

让我们通过示例来理解吧：

```python
>>> try:
...     print(value)
... except:
...     print("Something went wrong")
...
```

Here we are trying to print the value variable but it is not defined. So we get the following output:

我们尝试打印出 value 变量，但是它并没有被定义。所以我们得到了以下结果：

```shell
Something went wrong
```

You may be thinking that the line "something went wrong" is not that helpful. So how can we know what went wrong here?

你可能在想，“something went wrong”这一行并没有多大帮助。所以我们要怎样才能知道是什么错了呢？

We can print the exception and use it to find out what went wrong. Let's test this in our example:

我们可以把异常打印出来，然后用它找出是什么出错了。我们在示例中试一下吧：

```python
>>> try:
...     print(value)
... except Exception as e:
...     print(e)
...
```

And the result is:

结果为：

```shell
name 'value' is not defined
```

Whoa! That's magic. It is notifying me that 'value' is not defined.

哇！太神奇了。它提示我“value”没有被定义。

Python also provides a tool named  `raise`. Suppose you don't want a certain condition to occur and if it occurs you want to raise it. In such condition you can use  `raise`. Consider the example below:

Python 也提供了一个名为 `raise` 的工具。假如你不希望某个条件发生，你想在它发生的时候把它抛出来。在这种情况下，你可以使用 `raise`。示例如下：

```python
>>> i = 5
>>> if i < 6:
...     raise Exception("Number below 6 are not allowed")
...
```

The output we get is as follows:

我们得到的结果如下：

```shell
Traceback (most recent call last):
  File "<stdin>", line 2, in <module>
Exception: Number below 6 are not allowed
```

There are many sub-types of Exceptions, so I recommend that you go through the  [Python Documentation][54]  to understand them.

异常有很多子类型，我推荐你阅读 [Python 文档][54]，进一步理解它们。

## Package Import:

## 包的导入：

You have learned the basics of Python and now you are all ready to build awesome applications. But hold on – we are still missing some important topics.

你已经学完了 Python 的基础知识，现在已经做好构建出色应用程序的准备了。但是，等一等，我们还漏掉了一些重要的主题。

Without package import, you will be forced to write everything in one single file. Imagine what a mess it will be.

如果没有包的导入，你将被迫在一个文件里写下所有的代码。想象一下这是多么的糟糕。

Create two files named  `main.py`  and  `hello.py`. Remember both file needs to be in the same directory.

创建两个文件，分别命名为 `mani.py` 和 `hello.py`。记住，两个文件需要在同一个目录中。

Under  `hello.py`  copy paste the following code:

将以下代码复制到 `hello.py`中：

```python
def say_hello():
    print("Hello world")
```

Under  `main.py`  copy paste the following code:

将以下代码复制到 `main.py` 中：

```python
import hello

if __name__ == "__main__":
    hello.say_hello()
```

In  `hello.py`  we have declared a  `say_hello()`  function which prints "Hello world". In  `main.py`  you'll see an import statement. We are importing the hello module and calling the  `say_hello()`  function from that module.

我们在 `hello.py` 中声明了一个 `say_hello()` 函数，它打印“Hello world”。在 `main.py` 中，你会看到一个 import 语句。我们导入 hello 模块，并从那个模块调用 `say_hello` 函数。

Run our program using the following command:

使用以下命令运行程序：

```shell
➜ python main.py
```

Output:

输出：

```shell
Hello world
```

Now let's understand how to import a module which is in another directory.

现在我们来理解一下如何导入另一个目录中的模块。

Let's create a directory named "data" and move our  `hello.py`  inside that directory.

我们先创建一个名为“data”的目录，然后将 `hello.py` 移动到该目录下。

Go to the  `main.py`  and change the previous import statement.

打开 `main.py`，修改之前的 import 语句：

```python
from data import hello

if __name__ == "__main__":
    hello.say_hello()
```

There are two ways to import from a directory.

-   Method 1:  `from data import hello`
-   Method 2:  `import data.hello`

从一个目录导入的方式有两种：

- 方法 1：`from data import hello`
- 方法 2：`import data.hello`

I prefer method 1 because of its readability. You can choose whichever method looks better to you.

我更喜欢方法 1，因为它更易读。你可以选择适合自己的导入方式。

Let's run our application using the following command:

使用以下命令运行我们的应用：

```shell
➜ python main.py
```

And an error occurs. Wait why did this happen? We did everything right. Let's go through the error:

出现了一个错误，为什么会这样呢？我们没做错，仔细检查一下错误吧：

```shell
Traceback (most recent call last):
  File "main.py", line 1, in <module>
    from data import hello
ImportError: No module named data
```

Well Python is telling us that it doesn't recognize a module named data. To solve this issue create a  `**init**.py`  inside data directory. Leave the file blank and run the program again and you'll get the following output:

Python 告诉我们它没有识别出名为“data”的模块。要解决这个问题，我们需要在“data”目录中创建一个 `__init__.py`。文件内容留空，再次运行程序，你会得到以下结果：

```shell
Hello world
```

Well python by default does not treat a directory as a module. To inform Python to treat a directory as a module,  `**init**.py`  is required.

默认情况下，Python 不把目录当作模块对待。要通知 Python 将某个目录视为模块，需要有 `__init__.py`。

## JSON Handling:

<h2 id="json-handling">JSON 处理：</h2>

If you have worked previously with web development or app development you may be aware that all the API calls take place in JSON format. While JSON looks similar to a dictionary in Python, remember that it's very different.

如果你之前从事过 web 开发或应用开发，你可能会知道所有的 API 调用都以 JSON 格式进行。虽然 JSON 看起来和 Python 中的字典很像，但是它完全不同。

To handle JSON, Python provides an inbuilt  `json`  package. To use this package we need to import it as follows:

Python 提供了一个内置的 `json` 包，用于处理 JSON。要使用这个包，我们需要先导入它：

```python
import json
```

This library provides two methods which help us in handling the JSON. Let's understand them one by one.

这个库提供了两个处理 JSON 的方法，我们逐一进行理解：

### JSON loads:

### JSON loads：

If you have a JSON string and want to convert it back to a dictionary you need to use the  `loads`  method. Go to the Python shell and copy-paste the following code:

如果你想把 JSON 字符串转换回字典，就需要使用 `load` 方法。打开 Python shell，复制-粘贴以下代码：

```python
>>> import json
>>> json_string = '{ "user_name":"Sharvin", "age":1000}' #JSON 字符串
>>> type(json_string)
<class 'str'>
>>> data = json.loads(json_string)
>>> type(data)
<class 'dict'>
>>> data
{'user_name': 'Sharvin', 'age': 1000}
```

### JSON dumps:

### JSON dumps：

Now let's convert our data back to the JSON string format using the  `dumps`  method.

现在，让我们用 `dumps` 方法将数据转换回 JSON 字符串格式吧。

```python
>>> jsonString = json.dumps(data)
>>> type(jsonString)
<class 'str'>
>>> jsonString
'{"user_name": "Sharvin", "age": 1000}'
```

To learn more about JSON Manipulation, go through the  [Python Documentation][55].

若想学习更多关于 JSON 操作的支持，可以前往 [Python 文档][55]。

## That's it!

And we're done! I hope you now understand the basics of Python. Congratulations! That's a huge achievement.

说完了！我希望你现在已经理解 Python 的基础知识。祝贺你！这是一个巨大的成就。

Feedback is welcomed. Also if you want to learn about any other topic you can tweet the topic name on Twitter and include my Twitter handle. \[  **@sharvinshah26**  \]

欢迎反馈。如果你想了解任何其它主题的内容，你可以在 Twitter 上发送主题名字并带上我的 Twitter handle（**@sharvinshah26**）。

> Feel free to connect with me on  [Twitter][56]  and  [Github][57].

> 随时通过[Twitter][56] 和 [Github][57] 与我联系。

  

[1]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#introduction-
[2]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#installation-
[3]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#python-shell-
[4]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#comment-
[5]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#print-
[6]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#indentation-
[7]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#variables-
[8]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#operators-
[9]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#conditional-statements-
[10]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#for-loops-
[11]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#while-loops-
[12]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#user-input-
[13]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#typecasting-
[14]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#dictionaries-
[15]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#lists-
[16]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#tuples-
[17]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#sets-
[18]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#functions-and-arguments-
[19]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#args-
[20]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#keyword-arguments-
[21]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#default-argument-
[22]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#kwargs-
[23]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#scope-
[24]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#return-statement-
[25]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#lambda-expression-
[26]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#list-comprehension-
[27]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#oops-concepts-
[28]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#classes-
[29]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#methods-
[30]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#objects-
[31]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#constructor-
[32]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#instance-attributes-
[33]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#class-attributes-
[34]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#self-
[35]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#inheritance-
[36]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#super-
[37]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#multiple-inheritance-
[38]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#polymorphism-
[39]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#encapsulation-
[40]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#decorator-
[41]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#exceptions-
[42]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#package-import-
[43]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#json-handling-
[44]: https://octoverse.github.com/#top-languages
[45]: https://en.wikipedia.org/wiki/Guido_van_Rossum
[46]: https://en.wikipedia.org/wiki/CPython
[47]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#windows-user-
[48]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#mac-user-
[49]: https://www.freecodecamp.org/news/the-ultimate-guide-to-python-from-beginner-to-intermediate-to-pro/#linux-user-
[50]: https://www.python.org/downloads/
[51]: https://apps.apple.com/in/app/xcode/id497799835?mt=12
[52]: https://brew.sh/
[53]: https://docs.python.org/3/tutorial/classes.html
[54]: https://docs.python.org/3/tutorial/errors.html#errors-and-exceptions
[55]: https://docs.python.org/3/library/json.html
[56]: https://twitter.com/sharvinshah26
[57]: https://github.com/Sharvin26
