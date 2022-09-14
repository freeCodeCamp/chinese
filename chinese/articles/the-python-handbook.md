> -  原文地址：[The Python Handbook](https://www.freecodecamp.org/news/the-python-handbook/)
> -  原文作者：[Flavio Copes](https://www.freecodecamp.org/news/author/flavio/)
> -  译者：ZhijieXiong
> -  校对者：

![The Python Handbook](https://www.freecodecamp.org/news/content/images/size/w2000/2021/03/book.png)

这本Python编程手册遵循“80/20定律”：使用20%的时间学习80%的内容。

我认为这种方法可以为学习者提供一个对Python全面的了解。

本手册并没有涵盖与Python相关的全部内容。它专注于这门编程语言的核心主题，并且试图简化那些复杂的内容。

我希望这本手册可以帮助您实现：**学习Python的基础**

> Note: 您可以获取这本手册的[PDF、ePub或者Mobi版本](https://flaviocopes.com/page/python-handbook/)

Enjoy!

<h2 id="summary">目录</h2>

-   [Python介绍](#introduction-to-python)
-   [如何安装Python](#how-to-install-python)
-   [如何运行Python程序](#how-to-run-python-programs)
-   [Python 2 vs Python 3](#python2-vs-python3)
-   [Python基础](#python-basics)
-   [Python数据类型](#data-types-in-python)
-   [Python运算符](#operators)
-   [Python三元运算符](#the-ternary-operator-in-python)
-   [Python字符串](#strings-in-python)
-   [Python布尔值](#booleans-in-python)
-   [Python数字](#numbers-in-python)
-   [Python常量](#constants-in-python)
-   [Python枚举](#enums-in-python)
-   [Python用户输入](#user-input-in-python)
-   [Python控制语句](#control-statements-in-python)
-   [Python列表](#lists-in-python)
-   [Python元组](#tuples-in-python)
-   [Python字典](#dictionaries-in-python)
-   [Python集合](#sets-in-python)
-   [Python函数](#functions-in-python)
-   [Pytho对象](#objects-in-python)
-   [Python循环](#loops-in-python)
-   [Python类](#classes-in-python)
-   [Python模块](#modules-in-python)
-   [Python标准库](#the-python-standard-library)
-   [Python PEP8风格指导](#the-pep8-python-style-guide)
-   [Python代码调试](#debugging-in-python)
-   [Python变量作用域](#variable-scope-in-python)
-   [Python接收从命令行传入的参数](#how-to-accept-arguments-from-the-command-line-in-python)
-   [Python的Lambda函数](#lambda-functions-in-python)
-   [Python递归](#recursion-in-python)
-   [Python嵌套函数](#nested-functions-in-python)
-   [Python闭包](#closures-in-python)
-   [Python装饰器](#decorators-in-python)
-   [Python文档字符串](#docstrings-in-python)
-   [Python反射](#introspection-in-python)
-   [Python注解](#annotations-in-python)
-   [Python异常](#exceptions-in-python)
-   [The with Statement in Python](#thewithstatementinpython)
-   [How to Install 3rd Party Packages in Python Using pip](#howtoinstall3rdpartypackagesinpythonusingpip)
-   [List Comprehensions in Python](#listcomprehensionsinpython)
-   [Polymorphism in Python](#polymorphisminpython)
-   [Operator Overloading in Python](#operatoroverloadinginpython)
-   [Virtual Environments in Python](#virtualenvironmentsinpython)
-   [Conclusion](#conclusion)

<h2 id="introduction-to-python">Python介绍</h2>

Python正在逐步“占领”编程世界。它的受欢迎度和使用度正在以计算机历史中前所未有的方式实现增长。

Python在各种应用场景下都表现出色——**Shell 脚本**、**自动化的任务**和**Web 开发**只是其基本的应用。

Python是做**数据分析**和**机器学习**的首选语言，但是它也可以用来做游戏或者在嵌入式设备上工作。

最重要的是，Python是世界上多所大学介绍**计算机科学课程**时选择的编程语言。

许多学生选择Python作为自己的第一门编程语言来学习。很多人正在学习Python，将来还会有更多人学习它。并且对于学习者中的大部分人来说，Python将是他们唯一需要的编程语言。

基于其独特的情况，Python在未来很有可能会更快地增长。

Python这门编程语言的特点是简单易上手，表示丰富，非常直接，易于理解。

Python的生态系统非常庞大，可能需要一个图书馆才能容纳你所想象到的一切。

因为其直观的语法、庞大的社区和充满活力的生态系统，Python是一门适合编程初学者的高级编程语言。

Python也受到不同领域的专家赞赏。

从技术上讲，Python是一种解释型语言，它不像编译型语言（例如C或Java）那样具有中间编译阶段。

和许多解释型语言一样，Python是动态类型的，这意味着您不必声明所使用的变量的类型，并且变量不必为特定类型。

这有利有弊。特别是，您编写程序的速度会更快，但另一方面，您从工具中获得防止出现可能错误的帮助会较少。这意味着您只有在执行程序时才能发现某些问题。

Python支持多种编程范式，包括面向过程编程、面向对象编程和函数式编程。它足够灵活，可以适应不同的需求。

自从Python由Guido van Rossum于1991年创建后，它便越来越受欢迎——尤其是在过去5年中，正如这张Google趋势信息图所示：

![Screen-Shot-2020-11-09-at-19.22.38](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2020-11-09-at-19.22.38.png)

开始Python编程非常容易。您只需从[python.org](https://www.python.org/)选择适用于Windows、macOS或Linux的官方软件包安装，然后就可以开始使用Python了。

如果您是编程新手，我将会在接下来的内容中引导您从零开始成为一名Python程序员。

即使您目前是一名专门研究另一种编程语言的程序员，Python也值得您了解，因为我认为它只会继续发展壮大。

像C++和Rust这样相对于Python来说更“低级”的语言，对于专业程序员来说可能很棒，但它们从一开始就令人生畏，而且需要很长时间才能掌握。

另一方面，Python是一种适用于任何人——学生、使用Excel完成日常工作的人、科学家等等——的编程语言。

**这是每个对编程感兴趣的人都应该首先学习的语言**。

<h2 id="how-to-install-python"> 如何安装Python </h2>

进入[https://www.python.org](https://www.python.org) ，选择下载菜单（Downloads），然后选择您的操作系统，将出现一个带有官方软件包下载链接的面板：

![Screen-Shot-2020-11-09-at-13.57.36-1](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2020-11-09-at-13.57.36-1.png)

请确保遵循关于您电脑所用的操作系统的特定说明。在macOS上，您可以在[https://flaviocopes.com/python-installation-macos/](https://flaviocopes.com/python-installation-macos/) 上找到详细指南。

<h2 id="how-to-run-python-programs">如何运行Python程序</h2>

您可以使用几种不同的方式来运行Python程序。

特别地，使用交互式环境（输入Python代码后，便立即执行它），和将Python程序保存到文件中，然后再执行它，这二者之间存在区别。

让我们从交互式环境开始。

如果您打开终端并输入`python`，将在终端窗口上看到如下内容：

![Screen-Shot-2020-11-10-at-13.44.07](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2020-11-10-at-13.44.07.png)

这是Python REPL（交互式解释器，即读取-评估-打印-循环）。

注意`>>>`符号和之后的光标。，您可以在此处输入任何Python代码，然后按 `enter` 键运行它。

例如尝试定义一个新变量

```python
name = "Flavio"
```

然后使用`print()`打印`name`的值：

```python
print(name)
```

![Screen-Shot-2020-11-10-at-14.11.57](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2020-11-10-at-14.11.57.png)

> 请注意：在REPL中，您也可以只输入`name`，然后按 `enter` 键，您会看到`name`的值。但是在写到文件中的程序里，如果这样做，您将看不到任何输出——您需要使用 `print()` 代替这种写法。

您在此处编写的任何Python代码行都将立即执行。

输入`quit()`可以退出这个Python REPL。

您可以使用Python自动安装的IDLE应用程序使用相同的交互式环境：

![Screen-Shot-2020-11-10-at-14.13.25](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2020-11-10-at-14.13.25.png)

这对您来说可能更方便，因为与使用终端相比，使用鼠标可以更轻松地四处移动和复制/粘贴。

以上是Python默认附带的基础内容。不过我建议您安装[IPython](https://ipython.org/)，它可能是您能找到的最好的Python命令行REPL应用程序。

使用下面的命令安装它

```sh
pip install ipython
```

上面的命令需要确保pip可执行文件的路径在您的环境变量中，安装好之后运行`ipython`：

![Screen-Shot-2020-11-11-at-09.36.29](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2020-11-11-at-09.36.29.png)

`ipython`是另一个让您使用Python REPL的接口，并提供了一些不错的功能，如语法突出显示、代码完成以及等等。

运行Python程序的第二种方法是将Python程序代码写入文件，例如`program.py`：

![Screen-Shot-2020-11-10-at-14.01.24](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2020-11-10-at-14.01.24.png)

然后用`python program.py`运行它：

![Screen-Shot-2020-11-10-at-14.01.32](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2020-11-10-at-14.01.32.png)

> 请注意，我们约定使用`.py`扩展名保存Python程序文件。

在这种情况下，程序作为一个整体被执行，而不是一次运行一行。而这就是我们运行程序的典型方式。

我们使用REPL进行快速的代码原型设计和学习。

在Linux和macOS上，也可以将Python程序文件转换为shell脚本，方法是在文件最前面加上一个特殊行，用来指示使用哪个可执行文件来运行它。

在我的系统上，Python解释器的路径是`/usr/bin/python3`，所以我在第一行输入`#!/usr/bin/python3`：

![Screen-Shot-2020-11-10-at-14.17.26](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2020-11-10-at-14.17.26.png)

然后我可以对文件设置执行权限：

```sh
chmod u+x program.py
```

然后我可以使用下面的命令运行程序

```sh
./program.py
```

![Screen-Shot-2020-11-10-at-14.18.42](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2020-11-10-at-14.18.42.png)

这在您编写与终端交互的脚本时特别有用。

我们还有许多其它方式可以运行Python程序。

一种方法是使用VS Code，尤其是Microsoft官方的Python扩展插件：

![Screen-Shot-2020-11-10-at-14.23.32](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2020-11-10-at-14.23.32.png)

安装好此扩展插件后，您将可以使用Python代码自动补全、语法错误检查、自动格式化和使用`pylint`进行代码检查，以及一些特殊命令，包括：

**Python: Start REPL**  用于在VS Code的集成终端中运行REPL：

![Screen-Shot-2020-11-10-at-14.31.36](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2020-11-10-at-14.31.36.png)

**Python: Run Python File in Terminal**  用于在终端中运行当前文件：

![Screen-Shot-2020-11-10-at-14.31.06](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2020-11-10-at-14.31.06.png)

**Python: Run Current File in Python Interactive Window**:

![Screen-Shot-2020-11-10-at-14.30.02-1](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2020-11-10-at-14.30.02-1.png)

以及很多其它命令。只需打开命令面板（查看 -> 命令面板，或按下Cmd+Shift+P）并输入`python`，即可查看所有与Python相关的命令：

![Screen-Shot-2020-11-10-at-14.30.02](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2020-11-10-at-14.30.02.png)

另一种轻松运行Python代码的方法是repl.it，这是一个非常不错的网站，它提供了一个编程环境，您可以使用任何语言创建并运行程序，包括Python：

![Screen-Shot-2020-11-10-at-14.33.58](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2020-11-10-at-14.33.58.png)

使用这个网站要先注册（免费注册），然后在“create a repl”下单击Python：

![Screen-Shot-2020-11-10-at-14.46.34](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2020-11-10-at-14.46.34.png)

然后您将看到一个带有`main.py`文件的编辑器，这样就已经准备好了编写Python代码：

![Screen-Shot-2020-11-10-at-14.47.15](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2020-11-10-at-14.47.15.png)

一旦您写好一些代码后，单击“Run”就可以在窗口右侧运行它：

![Screen-Shot-2020-11-10-at-14.48.09](https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2020-11-10-at-14.48.09.png)

我认为repl.it很方便，因为：

- 您只需分享链接即可轻松分享代码
- 它允许多人处理相同的代码
- 它可以托管长时间运行的程序
- 您可以在上面安装第三方包
- 它为您提供用于复杂应用程序的键值数据库

<h2 id="python2-vs-python3">Python 2 vs Python 3</h2>

我们一开始就应该讨论的一个关键主题是Python 2与Python 3。

Python 3于2008年被推出，其后作为主要的Python版本一直在被持续开发，而Python 2则通过错误修复和安全补丁进行维护，直到2020年初。

在那一天，对Python 2的支持停止。

许多程序仍然使用Python 2编写，并且组织仍在积极致力于这些程序，因为迁移到Python 3并非易事，升级这些程序需要大量工作。并且重要文件的大型迁移总是会引入新的bug。

但是对应新的代码程序，除非您必须遵守组织设置的强制使用Python 2的规则，否则应使用Python 3进行编写。

> 本书重点介绍 Python 3。

<h2 id="python-basics">Python 基础</h2>

### Python中的变量

我们可以通过使用赋值运算符`=`为“标签”赋值，从而创建一个新的Python变量。

在下面这个示例中，我们将字符串`"Roger"`分配给变量`name`：

```python
name = "Roger"
```

下面是一个给变量`age`赋值为数字的示例：

```python
age = 8
```

一个变量的名字可以由字符、数字和`_`下划线字符组成。变量名不能以数字开头。以下都是**有效的**变量名：

```python
name1
AGE
aGE
a11111
my_name
_name
```

以下都是**无效的**变量名：

```python
123
test!
name%
```

除此之外，任何输入都是有效的变量名，除非它是Python的**关键字**，如`for`、`if`、`while`、`import`等就是关键字。

无需记住它们，因为如果您使用其中任何一个关键字作为变量名，Python都会提醒您，并且您会逐渐视它们为Python语法的一部分。

### Python表达式和语句

我们可以_构造_任意一个有返回值的表达式代码，例如

```python
1 + 1
"Roger"
```

另一方面，语句是对值的操作。例如，下面是2个语句：

```python
name = "Roger"
print(name)
```

程序由一系列语句组成。每个语句占一行，但您可以使用分号在一行中包含多个语句：

```python
name = "Roger"; print(name)
```

### 注释

在Python程序中，井号之后的所有内容都被忽略，并被视为注释：

```python
#this is a commented line

name = "Roger"  # this is an inline comment
```

### Python中的缩进

Python中的缩进是有意义的。

您不能像这样随意缩进：

```python
name = "Flavio"
    print(name)
```

对于其它一些语言，空格是没有意义的，但是在Python中，缩进很重要。

在上面这种情况下，如果您尝试运行这个程序，您会得到一个`IndentationError: unexpected indent`错误，因为缩进有特殊的含义。

一个缩进中的所有内容属于一个块，如控制语句块或条件块，函数或类主体。 我们稍后会看到更多关于这些内容的解释。

<h2 id="data-types-in-python">Python数据类型</h2>

Python有几种内置类型。

如果您创建`name`变量并为其分配值"Roger"，则此变量现在自动表示**String**数据类型。

```python
name = "Roger"
```

您可以使用`type()`函数检查变量的类型，即将变量作为参数，然后将函数返回结果与`str`进行比较：

```python
name = "Roger"
type(name) == str  # True
```

或者使用`isinstance()`：

```python
name = "Roger"
isinstance(name, str)  # True
```

> 请注意，要在REPL之外查看`True`值，您需要将此代码包装在`print()`中，但为了清楚起见，我避免使用它。

我们在这里使用了`str`，但这种方法同样适用于其它数据类型。

首先，我们有数字。整数使用`int`表示，浮点数（分数）的类型为`float`：

```python
age = 1
type(age) == int  # True
```

```python
fraction = 0.1
type(fraction) == float  # True
```

您已经了解了如何从字面值创建某一类型的变量，如下所示：

```python
name = "Flavio"
age = 20
```

Python自动从变量值检测数据类型。

您还可以通过向类构造器传递字面值或变量名，来创建特定类型的变量：

```python
name = str("Flavio")
anotherName = str(name)
```

您还可以使用类构造器，将一种类型转换为另一种类型。Python将尝试转换为正确的值，例如从字符串中提取数字：

```python
age = int("20")
print(age)  # 20

fraction = 0.1
intFraction = int(fraction)
print(intFraction)  # 0
```

这称为**casting**。当然，这种转换并不总是有效，具体取决于传递的值。如果您在上面的字符串中写了`test`而不是`20`，您会得到一个`ValueError: invalid literal for int() with base 10: 'test'`错误。

这些只是基础的数据类型。Python中有更多其它数据类型：

-   `complex` 复数
-   `bool` 布尔值
-   `list` 列表
-   `tuple` 元组
-   `range` 范围
-   `dict` 字典
-   `set` 集合

以及更多！

我们很快就会探索它们。

<h2 id="operators">Python运算符</h2>

我们使用Python运算符来对值和变量进行运算操作。

我们可以根据它们执行操作的类型来划分运算符：

-   赋值运算符
-   算术运算符
-   比较运算符
-   逻辑运算符
-   位运算符

再加上一些其它有趣的运算符，比如`is`和`in`。

### Python赋值运算符

赋值运算符用于为变量赋值：

```python
age = 8
```

或者将变量的值分配给另一个变量：

```python
age = 8
anotherVariable = age
```

从Python 3.8开始，可以使用_海象运算符_`:=`为变量赋值，同时该运算可作为另一个操作的一部分。例如在`if`或循环的条件部分。这个稍后再谈。

### Python算术运算符

Python有许多算术运算符：`+`、`-`、`*`、`/`（除法）、`%`（取余）、`**`（求幂）和 `//`（向下取整除法） ：

```python
1 + 1  # 2
2 - 1  # 1
2 * 2  # 4
4 / 2  # 2
4 % 3  # 1
4 ** 2  # 16
4 // 2  # 2
```

> 请注意，操作数之间不需要空格，但加上空格有利于可读性。

`-`也可用作一元运算符表示负号：

```python
print(-4)  # -4
```

`+`也可用于连接字符串：

```python
"Roger" + " is a good dog"
# Roger is a good dog
```

我们可以将赋值运算符与算术运算符结合起来：

-   `+=`
-   `-=`
-   `*=`
-   `/=`
-   `%=`
-   以及等等

例子：

```python
age = 8
age += 1
# age is now 9
```

### Python比较运算符

Python定义了一些比较运算符：

-   `==`
-   `!=`
-   `>`
-   `<`
-   `>=`
-   `<=`

您可以使用这些运算符获取根据比较结果得到的布尔值（`True`或`False`）：

```python
a = 1
b = 2

a == b  # False
a != b  # True
a > b  # False
a <= b  # True
```

### Python布尔运算符

Python为我们提供了以下布尔运算符：

-   `not`
-   `and`
-   `or`

当使用`True`或`False`属性时，它们的作用类似于逻辑与、逻辑或和逻辑非，并且经常用于 `if` 条件表达式判断：

```python
condition1 = True
condition2 = False

not condition1  # False
condition1 and condition2  # False
condition1 or condition2  # True
```

但是，请注意可能的混淆：

表达式中使用`or`，则表达式的结果是第一个为非假值（假值：`False`、`0`、`''`、`[]`..）的操作数，否则返回最后一个操作数作为表达式的值。

```python
print(0 or 1)  # 1
print(False or 'hey')  # 'hey'
print('hi' or 'hey')  # 'hi'
print([] or False)  # 'False'
print(False or [])  # '[]'
```

Python文档将其（x or y）描述为`如果x为假，则为y，否则为x`。（译者：`or`碰到真值就停，没有真值就走到最后）

`and`运算操作仅在第一个操作数为真时，才计算第二个操作数。因此，如果第一个操作数是假值（假值：`False`、`0`、`''`、`[]`..），它会返回那个操作数。否则，它就会计算第二个操作数：

```python
print(0 and 1)  # 0
print(1 and 0)  # 0
print(False and 'hey')  # False
print('hi' and 'hey')  # 'hey'
print([] and False )  # []
print(False and [] )  # False
```

Python文档将其（x and y）描述为`如果x为假，则为x，否则为y`。（译者：`or`碰到假值就停，没有假值就走到最后）

### Python位运算符

一些运算符用于处理位和二进制数：

-   `&` 执行二进制与操作
-   `|` 执行二进制或操作
-   `^` 执行二进制异或操作
-   `~` 执行二进制非操作
-   `<<` 二进制左移操作
-   `>>` 二进制右移操作

一般很少使用位运算符，仅在非常特定的情况下使用，但是值得一提。

### Python中的`is`和`in`

`is`被称为**identity operator**（验证运算符），用于比较两个对象，如果两者是同一个对象，则返回true。稍后将详细介绍对象。

`in`被称为**membership operator**（成员运算符），用于判断一个值是否包含在一个列表或序列中。稍后将详细介绍列表和其他序列数据类型。

<h2 id="the-ternary-operator-in-python">Python三元运算符</h2>

使用Python三元运算符，您可以快速定义条件语句。

假设您有一个函数，它将`age`变量与`18`进行比较，并根据结果返回True或False。

可以不这样写：

```python
def is_adult(age):
    if age > 18:
        return True
    else:
        return False
```

您可以通过使用三元运算符这种方式来实现它：
（译者：感觉这个例子不太好，因为这里写成`return age > 18`会更好，换成这个例子`return "age大于18" if age > 18 else "age小于等于18"`会更好理解一些）

```python
def is_adult(age):
    return True if age > 18 else False
```

首先定义条件为真的结果，然后判断条件，最后定义条件为假的结果：

```python
<条件为真得到的结果> if <条件表达式> else <条件为假得到的结果>
```

<h2 id="strings-in-python">Python字符串</h2>

Python中的字符串是用单引号或双引号括起来的一串字符：

```python
"Roger"
'Roger'
```

您可以将字符串赋值给变量：

```python
name = "Roger"
```

您可以使用`+`运算符连接两个字符串：

```python
phrase = "Roger" + " is a good dog"
```

您也可以使用`+=`将一个字符串添加到另一个字符串后面：

```python
name = "Roger"
name += " is a good dog"

print(name)  # Roger is a good dog
```

您可以使用`str`类构造函数将数字转换为字符串：

```python
str(8)  # "8"
```

这对于连接数字和字符串来说很重要：

```python
print("Roger is " + str(8) + " years old")  # Roger is 8 years old
```

当使用特殊语法定义时，字符串可以是多行的，将字符串括在一组3个引号中：

```python
print("""Roger is

    8

years old
""")

# double quotes, or single quotes

print('''
Roger is

    8

years old
''')
```

字符串具有一组内置方法，例如：

-   `isalpha()` 检查字符串是否只包含字母字符，并且不为空字符串
-   `isalnum()` 检查字符串是否只包含字母字符或数字字符，并且不为空
-   `isdecimal()` 检查字符串是否只包含十进制字符，并且不为空
-   `lower()` 获取字符串的小写版本
-   `islower()` 检查字符串是否全为小写
-   `upper()` 获取字符串的大写版本
-   `isupper()` 检查字符串是否全为大写
-   `title()` 获取字符串的“标题化”版本（译者：所有单词首字母大写）
-   `startsswith()` 检查字符串是否以特定子字符串开头
-   `endswith()` 检查字符串是否以特定子字符串结尾
-   `replace()` 替换字符串的一部分
-   `split()` 按特定分隔符拆分字符串
-   `strip()` 修剪字符串中的空格
-   `join()` 将字符串添加到另一个字符串（译者：实际上是将字符串添加到另一个可迭代对象生成的字符串中）
-   `find()` 查找特定子字符串在字符串中的位置

以及其它等等。

这些方法都不会改变原始字符串，它们将会返回一个新的、修改后的字符串。例如：

```python
name = "Roger"
print(name.lower())  # "roger"
print(name)  # "Roger"
```

您也可以使用一些全局函数来处理字符串。

这里我特别想到了`len()`，它返回给您指定字符串的长度：

```python
name = "Roger"
print(len(name))  # 5
```

`in`运算符可以让您检查字符串是否包含某个子字符串：

```python
name = "Roger"
print("ger" in name)  # True
```

转义是一种将特殊字符添加到字符串中的方法。

例如，如何将双引号添加到被双引号包裹的字符串中？

```python
name = "Roger"
```

`"Ro"Ger"`将不起作用，因为Python会认为字符串以`"Ro"`结尾。

方法是使用`\`反斜杠字符转义字符串内的双引号：

```python
name = "Ro\"ger"
```

这也适用于单引号`\'`，以及其它特殊格式字符，如制表符`\t`、换行符`\n`和反斜杠`\\`。

给定一个字符串，并给定一个索引（从0开始），您就可以使用方括号获取指定位置上的字符，从而获取特定内容：

```python
name = "Roger"
name[0]  # 'R'
name[1]  # 'o'
name[2]  # 'g'
```

使用负数将从末尾开始计数：

```python
name = "Roger"
name[-1]  # "r"
```

您还可以使用范围，即使用我们所说的**切片**：

```python
name = "Roger"
name[0:2]  # "Ro"
name[:2]  # "Ro"
name[2:]  # "ger"
```

<h2 id="booleans-in-python">Python布尔值</h2>

Python提供了`bool`类型，它可以有两个值：`True` 和 `False`（首字母大写）。

```python
done = False
done = True
```

布尔值对于条件控制结构特别有用，例如`if`语句：

```python
done = True

if done:
    # run some code here
else:
    # run some other code
```

在判断值为`True`或`False`时，如果该值不是`bool`布尔类型，我们有一些取决于我们所检查值类型的规则：

-   数字除`0`以外，始终为`True`
-   字符串仅在是空字符串时为`False`
-   列表、元组、集合和字典仅在其为空时为`False`

您可以通过以下方式检查值是否为布尔值：

```python
done = True
type(done) == bool  # True
```

或者使用`isinstance()`，需要传递2个参数：变量和`bool`类：

```python
done = True
isinstance(done, bool)  # True
```

全局函数`any()`在处理布尔值时也非常有用，当作为参数传递的可迭代对象（如列表）中的任意一个值是 `True`时，它就会返回 `True`（译者：类似`or`）：

```python
book_1_read = True
book_2_read = False

read_any_book = any([book_1_read, book_2_read])  # True
```

全局函数`all()`相类似，但是是当传递给它的所有值都是`True`时，才返回 `True`（译者：类似`and`）：

```python
ingredients_purchased = True
meal_cooked = False

ready_to_serve = all([ingredients_purchased, meal_cooked])  # False
```

<h2 id="numbers-in-python">Python数字</h2>

Python中的数字有3种类型：`int`、`float`和`complex`。

### Python整数

整数使用`int`表示，您可以使用字面值定义整数：

```python
age = 8
```

您还可以使用`int()`构造函数定义一个整数：

```python
age = int(8)
```

您可以使用全局函数`type()`检查变量是否为`int`类型：

```python
type(age) == int  # True
```

### Python浮点数

浮点数（分数）的类型为`float`，您可以使用字面值定义浮点数：

```python
fraction = 0.1
```

或者使用`float()`构造函数：

```python
fraction = float(0.1)
```

您可以使用全局函数`type()`检查变量是否为`float`类型：

```python
type(fraction) == float  # True
```

### Python复数

复数属于`complex`类型。

您可以使用字面值定义它们：

```python
complexNumber = 2+3j
```

或者使用`complex()`构造函数：

```python
complexNumber = complex(2, 3)
```

一旦您定义了一个复数，您就可以得到它的实部和虚部：

```python
complexNumber.real  # 2.0
complexNumber.imag  # 3.0
```

同样，您可以使用全局函数`type()`检查变量是否为`complex`类型：

```python
type(complexNumber) == complex #True
```

### Python中数字的算术运算

您可以使用算术运算符对数字执行算术运算：`+`、`-`、`*`、`/`（除法）、`%`（取余）、`**`（求幂）和`//`（向下取整除法）：

```python
1 + 1  # 2
2 - 1  # 1
2 * 2  # 4
4 / 2  # 2
4 % 3  # 1
4 ** 2  # 16
4 // 2  # 2
```

您还可以使用复合赋值运算符

-   `+=`
-   `-=`
-   `*=`
-   `/=`
-   `%=`
-   其它等等

这样可以快速对变量执行运算操作：

```python
age = 8
age += 1  # age: 9
```

### Python内置函数

有2个内置函数可以帮助处理数字：

`abs()`返回一个数字的绝对值。

给定一个数字，`round()`返回四舍五入到最接近整数的值：

```python
round(0.12)  # 0
```

您可以指定第二个参数来设置舍入到小数点的精度：

```python
round(0.12, 1)  # 0.1
```

Python标准库提供了其它几个数学实用函数和常量：

-   `math`包提供通用的数学函数和常量
-   `cmath`包提供了处理复数的方法
-   `decimal`包提供了处理小数和浮点数的方法
-   `fractions`包提供了处理有理数的方法

稍后我们将分别探讨其中的一些。

<h2 id="constants-in-python">Python常量</h2>

Python中无法强制改变的值是常量。

比较常用的是枚举：

```Python
class Constants(Enum):
    WIDTH = 1024
    HEIGHT = 256
```

并使用`Constants.WIDTH.value`这样的表达获取每个值。

没有人可以重新分配该值。

否则，如果您想依赖命名约定（来定义常量），您可以遵守这个规则——声明大写的永远不应该改变的变量：

```python
WIDTH = 1024
```

没有人会阻止您覆盖这个值，Python也不会阻止。（译者：全大写的变量表示不应改变的常量，这只是一种约定）

正如您将来会看到的，大多数Python代码都采用这种命名约定的写法。

<h2 id="enums-in-python">Python枚举</h2>

枚举是绑定到常量值的可读名称。

要使用枚举，请从`enum`标准库模块中导入`Enum`：

```python
from enum import Enum
```

然后您可以用这种方式初始化一个新的枚举：

```python
class State(Enum):
    INACTIVE = 0
    ACTIVE = 1
```

这样做后，您可以引用作为常量的`State.INACTIVE`和`State.ACTIVE`。

现在，如果您尝试打印`State.ACTIVE`，例如：

```python
print(State.ACTIVE)
```

它不会返回`1`，而是返回`State.ACTIVE`。

枚举中分配的数字可以达到相同的效果：`print(State(1))`将打印`State.ACTIVE`。使用方括号符号`State['ACTIVE']`也是如此。

但是，您可以使用`State.ACTIVE.value`获取具体值。

您可以列出枚举的所有可能值：

```python
list(State)  # [<State.INACTIVE: 0>, <State.ACTIVE: 1>]
```

您可以获取总数：

```python
len(State)  # 2
```

<h2 id="user-input-in-python">Python用户输入</h2>

在Python命令行程序中，您可以使用`print()`函数向用户显示信息：

```python
name = "Roger"
print(name)
```

我们也可以使用`input()`接受来自用户的输入：

```python
print('What is your age?')
age = input()
print('Your age is ' + age)
```

这种方法在运行时获取输入，这意味着程序（执行到`input()`时）将停止执行，等待用户输入内容并按下`enter`键。

您还可以在程序调用时接受输入并进行更复杂的输入处理，稍后我们将看到如何做到这一点。

这适用于命令行程序。其它类型的应用程序需要使用不同的方式来接受输入。

<h2 id="control-statements-in-python">Python控制语句</h2>

当您处理布尔值和返回布尔值的表达式时，您可以根据它们的值为`True`或`False`来采取不同的方式。

在Python中，我们使用`if`语句来做到这一点：

```python
condition = True

if condition == True:
    # do something
```

当条件解析为`True`时，就像上面的情况一样，if下面的代码块被执行。

什么是代码块？代码块是向右侧缩进一级（通常为4个空格）的部分：

```python
condition = True

if condition == True:
    print("The condition")
    print("was true")
```

代码块可以由单行或多行组成，并在您移回到上一个缩进级别时结束：

```python
condition = True

if condition == True:
    print("The condition")
    print("was true")

print("Outside of the if")
```

如果`if`的条件测试结果为`False`，结合`if`则可以执行`else`块：

```python
condition = True

if condition == True:
    print("The condition")
    print("was True")
else:
    print("The condition")
    print("was False")
```

如果前面的`if`检查是`False`，您可以使用`elif`执行另一个条件检查：

```python
condition = True
name = "Roger"

if condition == True:
    print("The condition")
    print("was True")
elif name == "Roger":
    print("Hello Roger")
else:
    print("The condition")
    print("was False")
```

如果`condition`为`False`并且`name`变量的值为"Roger"，则执行本例中的第二个代码块。

在一个`if`语句中，您只可以进行一次`if`和 `else`检查，但可以进行多个`elif`检查：

```python
condition = True
name = "Roger"

if condition == True:
    print("The condition")
    print("was True")
elif name == "Roger":
    print("Hello Roger")
elif name == "Syd":
    print("Hello Syd")
elif name == "Flavio":
    print("Hello Flavio")
else:
    print("The condition")
    print("was False")
```

`if`和 `else`也可以内联使用，这让我们可以根据条件返回一个值或另一个值。

例子：

```python
a = 2
result = 2 if a == 0 else 3
print(result)  # 3
```

<h2 id="lists-in-python">Python列表</h2>

列表是Python中一种基本的数据结构。

使用列表，您可以将多个值组合在一起，并使用一个名称引用它们。

例如：

```python
dogs = ["Roger", "Syd"]
```

一个列表中可以保存不同数据类型的值：

```python
items = ["Roger", 1, "Syd", True]
```

您可以使用`in`运算符检查某个元素是否在列表中：

```python
print("Roger" in items)  # True
```

当然也可以定义空的列表：

```python
items = []
```

您可以通过从零开始的索引引用列表中的元素：

```python
items[0]  # "Roger"
items[1]  # 1
items[3]  # True
```

使用相同的表示法，您可以更改存储在特定索引处的值：

```python
items[0] = "Roger"
```

您还可以使用`index()`：

```python
items.index(0)  # "Roger"
items.index(1)  # 1
```

就像字符串（索引）一样，使用负索引将从末尾开始数：

```python
items[-1]  # True
```

您还可以使用切片提取列表的一部分：

```python
items[0:2]  # ["Roger", 1]
items[2:]  # ["Syd", True]
```

使用全局函数`len()`获取列表中包含的元素数目，这与我们用来获取字符串长度的方法相同：

```python
len(items)  # 4
```

您可以使用list的`append()`方法将新元素添加到列表中：

```python
items.append("Test")
```

或者使用`extend()`方法：

```python
items.extend(["Test"])
```

您还可以使用`+=`运算符：

```python
items += ["Test"]

# items is ['Roger', 1, 'Syd', True, 'Test']
```

> 注意：使用`extend()`或`+=`不要忘记方括号。不要执行`items += "Test"`或`items.extend("Test")`，否则Python会在列表中添加4个单独的字符，即`['Roger', 1, 'Syd', True, 'T'、'e'、's'、't']`

使用`remove()`方法删除元素：

```python
items.remove("Test")
```

您可以添加多个元素：

```python
items += ["Test1", "Test2"]

# or

items.extend(["Test1", "Test2"])
```

这些方法会将元素加到列表的末尾。

要在列表中间的特定索引处添加元素，请使用`insert()`方法：

```python
items.insert("Test", 1)  # add "Test" at index 1
```

要在特定索引处添加多个项目，您需要使用切片：

```python
items[1:1] = ["Test1", "Test2"]
# 译者：这里实际上是先删除再添加，就该例子来说，先删除[1:1]的元素（切片是左闭右开，所有[1:1]没有选中任何元素），再在删除的位置上添加
#。    比如s = [1,2,3];  s[0:2] = ['a', 'b', 'c'];  --> 执行完前面两个语句，s就变为['a', 'b', 'c', 3]
```

使用`sort()`方法对列表进行排序：

```python
items.sort()
```

> 注意：sort()仅在列表包含可比较的值时才有效。例如，无法比较字符串和整数，如果您尝试（对元素之间不可比较的列表进行排序），您将看到到类似`TypeError: '<' not supported between 'int' and 'str'`的错误。

（针对字符串排序）`sort()`方法首先排序大写字母，然后是小写字母。要解决此问题，请使用：

```python
items.sort(key=str.lower)
```

（使用sort方法）排序会修改原始列表内容。为避免这种情况，您可以先复制列表

```python
itemscopy = items[:]
```

或者使用全局函数`sorted()`：

```python
print(sorted(items, key=str.lower))
```

这将返回一个排好序的新列表，而不是修改原始列表。

<h2 id="tuples-in-python">Python元组</h2>

元组是Python中另一种基本的数据结构。

它允许您创建不可变的对象组。这意味着一旦创建了元组，就无法修改它。您不能添加或删除元组中的元素。

元组的创建方式类似于列表，但是是使用括号而不是方括号：

```python
names = ("Roger", "Syd")
```

元组是有序的，就像列表一样，所以您可以通过一个索引来获取具体位置的值：

```python
names[0]  # "Roger"
names[1]  # "Syd"
```

您也可以使用`index()`方法：

```python
names.index('Roger')  # 0
names.index('Syd')  # 1
```

与字符串和列表一样，使用负索引将从末尾开始：

```python
names[-1]  # True
```

您可以使用函数`len()`计算元组中的元素个数：

```python
len(names)  # 2
```

您可以使用`in`运算符检查元素是否在元组中：

```python
print("Roger" in names)  # True
```

您还可以使用切片提取元组的一部分：

```python
names[0:2]  # ('Roger', 'Syd')
names[1:]  # ('Syd',)
```

您可以使用全局函数`sorted()`创建元组排好序的版本：
（译者：请注意，元组没有sort方法，因为元组是不可改变的）

```python
sorted(names)
```

您可以使用`+`运算符从现有元组创建一个新元组：

```python
newTuple = names + ("Vanille", "Tina")
```

<h2 id="dictionaries-in-python">Python字典</h2>

字典是Python中非常重要的一种数据结构。

列表允许您创建值的集合，而字典允许您创建**键/值对**的集合。

这是有一个键/值对的字典示例：

```python
dog = { 'name': 'Roger' }
```

键可以是任何不可变的值，例如字符串、数字或元组，该值可以是您想要的任何值。

一个字典可以包含多个键/值对：

```python
dog = { 'name': 'Roger', 'age': 8 }
```

您可以使用此表示法访问单个键对应的值：

```python
dog['name']  # 'Roger'
dog['age']  # 8
```

使用相同的表示法，您可以更改在特定索引（键）对应的值：

```python
dog['name'] = 'Syd'
```

另一种方法是使用`get()`方法，该方法可以添加默认值（译者：即字典中没有该键时返回的值）：

```python
dog.get('name')  # 'Roger'
dog.get('test', 'default')  # 'default'
```

`pop()`方法检索键的值，然后从字典中删除该键/值对：

```python
dog.pop('name')  # 'Roger'
```

`popitem()`方法检索并删除最后一个插入字典的键/值对：

```python
dog.popitem()
```

您可以使用`in`运算符检查键是否包含在字典中：

```python
'name' in dog  # True
```

使用`keys()`方法获取字典中的键，并将结果传递给`list()`构造函数：

```python
list(dog.keys())  # ['name', 'age']
```

使用`values()`方法获取字典中的值，使用`items()`方法获取键/值对组成的元组：

```python
print(list(dog.values()))
# ['Roger', 8]

print(list(dog.items()))
# [('name', 'Roger'), ('age', 8)]
```

使用全局函数`len()`获取字典长度，这与获取字符串或列表的长度相同：

```python
len(dog)  # 2
```

您可以通过这种方式将新的键/值对添加到字典中：

```python
dog['favorite food'] = 'Meat'
```

您可以使用`del`语句从字典中删除键/值对：

```python
del dog['favorite food']
```

要复制字典，请使用copy()方法：
（译者：这种方式是浅拷贝）

```python
dogCopy = dog.copy()
```

<h2 id="sets-in-python">Python集合</h2>

集合是Python另一个重要的数据结构。

可以说它像元组一样工作，但集合不是有序的，而且是**可变的**。

或者我们可以说它像字典一样工作，但它们没有键。

集合还有一个不可变的版本，称为`frozenset`。

您可以使用以下语法创建集合：

```python
names = {"Roger", "Syd"}
```

您将它们视为数学上的集合，会更好理解。

您可以求两个集合的交集：

```python
set1 = {"Roger", "Syd"}
set2 = {"Roger"}

intersect = set1 & set2  # {'Roger'}
```

您可以创建两个集合的并集：

```python
set1 = {"Roger", "Syd"}
set2 = {"Luna"}

union = set1 | set2
# {'Syd', 'Luna', 'Roger'}
```

您可以得到两个集合的差集：

```python
set1 = {"Roger", "Syd"}
set2 = {"Roger"}

difference = set1 - set2  # {'Syd'}
```

您可以检查一个集合是否是另一个集合的超集（也即一个集合是另一个集合的子集）：

```python
set1 = {"Roger", "Syd"}
set2 = {"Roger"}

isSuperset = set1 > set2  # True
```

您可以使用全局函数`len()`计算集合中的元素个数：

```python
names = {"Roger", "Syd"}
len(names)  # 2
```

您可以通过将集合传递给`list()`构造函数来获取集合元素的列表：

```python
names = {"Roger", "Syd"}
list(names)  # ['Syd', 'Roger']
```

您可以使用`in`运算符检查元素是否在集合中：

```python
print("Roger" in names)  # True
```

<h2 id="functions-in-python">Python函数</h2>

函数可以创建一组指令，我们在需要时运行这些指令。

函数在Python和其它许多编程语言中是必不可少的。它帮助我们创建有意义的程序，因为我们可以使用函数将程序分解为可管理的部分，并且促进了代码的可读性和重用性。

这是一个名为`hello`的函数示例，它打印"Hello!"：

```python
def hello():
    print('Hello!')
```

函数**定义**：有一个名称（`hello`）和一个由一组指令组成的主体（即冒号后面的部分），主体在右侧缩进一级。

要运行这个函数，我们必须调用它。这是调用函数的语法：

```python
hello()
```

我们可以调用这个函数一次或多次。

函数名`hello`非常重要，它应该是描述性的，这样任何调用该函数的人都可以理解它的作用。

一个函数可以接受一个或多个参数：

```python
def hello(name):
    print('Hello ' + name + '!')
```

这种情况下，我们通过传递参数来调用函数

```python
hello('Roger')
```

> 我们称_parameters_为函数定义中函数所接受的值（形参），称_arguments_为我们调用函数时所传递给函数的值（实参）。对这种区别感到困惑是很正常的。

如果（调用函数时）未指定参数，则参数可以具有默认值：

```python
def hello(name='my friend'):
    print('Hello ' + name + '!')

hello()
# Hello my friend!
```

以下是如何接受多个参数：

```python
def hello(name, age):
    print('Hello ' + name + ', you are ' + str(age) + ' years old!')
```

在这种情况下，我们调用函数并传递一组参数：

```python
hello('Roger', 8)
```

形参通过引用传递。Python中的所有内容都是对象，但其中一些是不可变的，包括整数、布尔值、浮点数、字符串和元组。这意味着如果您将它们作为参数传递给函数，并在函数内部修改它们的值，则新值不会反映在函数外部：

```python
def change(value):
    value = 2

val = 1
change(val)

print(val)  # 1
```

如果您传递一个可变的对象，并且（在函数内部）更改了它的一个属性，则该更改将反映在外部。

函数可以使用`return`语句返回一个值。例如我们返回 `name` 参数：

```python
def hello(name):
    print('Hello ' + name + '!')
    return name
```

当函数执行到`return`语句时，该函数结束。

我们可以省略该返回值：

```python
def hello(name):
    print('Hello ' + name + '!')
    return
```

我们可以在条件中包含return语句，这是在不满足起始条件时结束函数的常用方法：

```python
def hello(name):
    if not name:
        return
    print('Hello ' + name + '!')
```

如果我们调用该函数并传递一个计算结果为`False`的表达式，比如一个空字符串，函数在到达`print()`语句之前终止。

您可以使用逗号分隔来返回多个值：

```python
def hello(name):
    print('Hello ' + name + '!')
    return name, 'Roger', 8
```

在这种情况下，调用 `hello('Syd')` 返回值是一个包含这 3 个值的元组：`('Syd', 'Roger', 8)`。

<h2 id="objects-in-python">Python对象</h2>

Python中的一切都是对象。

原始类型（整数、字符串、浮点数……）的值也是对象。 同时列表、元组、字典和一切也都是对象。

对象具有可以使用点语法访问的**属性**和**方法**。

例如，尝试定义一个`int`类型的新变量：

```python
age = 8
```

`age`现在可以访问为`int`对象定义的属性和方法。

这包括访问该数字的实部和虚部，例如：

```python
print(age.real)  # 8
print(age.imag)  # 0

print(age.bit_length())  # 4

# bit_length()方法返回该数字的二进制表示法所需的位数
```

列表类型的变量可以使用一组方法：

```python
items = [1, 2]
items.append(3)
items.pop()
```

这些（可使用的）方法取决于变量的数据类型。

Python提供的全局函数`id()`可让您检查特定对象在内存中的位置。

```python
id(age)  # 140170065725376
```

> 您（电脑上查看的age）的内存地址值会不一样——这里只是作为一个例子来展示。

如果给变量赋不同的值，它的地址会改变，因为变量已经指向存储在内存中另一个位置的另一个值：

```python
age = 8

print(id(age))  # 140535918671808

age = 9

print(id(age))  # 140535918671840
```

但是，如果您使用对象的方法修改该对象，其内存地址将保持不变：

```python
items = [1, 2]

print(id(items))  # 140093713593920

items.append(3)

print(items)  # [1, 2, 3]
print(id(items))  # 140093713593920
```

仅当您将变量重新赋一个值时，地址才会更改。

一些类型的对象是_可变的_，而另一些是_不可变的_。这取决于对象本身。

如果对象提供改变其内容的方法，那么它是可变的。否则它是不可变的。

Python定义的大多数类型都是不可变的， 例如`int` ，没有任何方法可以改变它的值。 如果您增加它的值

```python
age = 8
age = age + 1

# 或者

age += 1
```

然后您使用`id(age)`检查，您会发现`age`前后指向不同的内存位置。 原来的值并没有发生变异，age只是指向另一个值。

<h2 id="loops-in-python">Python循环</h2>

循环是编程的重要组成部分。

在 Python 中，我们有2种循环：**while循环**和**for循环**。

###  Python中的`while`循环

`while`循环是使用`while`关键字定义的，它重复执行自己的块，直到判断条件为`False`：

```python
condition = True
while condition == True:
    print("The condition is True")
```

这是一个永远不会停下来的**无限循环**。

让我们在第一次迭代后立即停止循环：

```python
condition = True
while condition == True:
    print("The condition is True")
    condition = False

print("After the loop")
```

在这种情况下，将执行第一次迭代，因为此时判断条件为`True`。在第二次迭代时，判断条件为`False`，因此执行循环外的下一条指令。

通常有一个计数器用于在一些周期后停止迭代：

```python
count = 0
while count < 10:
    print("The condition is True")
    count = count + 1

print("After the loop")
```

### Python中的`for`循环

使用`for`循环，我们可以让Python执行一个预先确定循环次数的代码块，并且不需要单独的变量和条件来检查它的值。

例如，我们可以迭代列表中的元素：

```python
items = [1, 2, 3, 4]
for item in items:
    print(item)
```

或者，您可以使用`range()`函数迭代特定次数：

```python
for item in range(04):
    print(item)
```

`range(4)`创建一个从0开始并包含4个元素的序列：`[0, 1, 2, 3]`。

如果要获取索引，您应该将序列包装到`enumerate()`函数中：

```python
items = [1, 2, 3, 4]
for index, item in enumerate(items):
    print(index, item)
```

### Python中的`Break`和`continue` 

`while`和 `for`循环都可以在代码块内被中断，这需要使用两个特殊关键字：`break`和`continue`。

`continue`停止当前迭代并告诉Python执行下一个迭代。

`break`完全停止循环，并继续执行循环外的下一条指令。

这里第一个示例打印 `1, 3, 4`。第二个示例打印 `1`：

```python
items = [1, 2, 3, 4]
for item in items:
    if item == 2:
        continue
    print(item)
```

```python
items = [1, 2, 3, 4]
for item in items:
    if item == 2:
        break
    print(item)
```

<h2 id="classes-in-python">Python类</h2>

除了使用Python提供的数据类型之外，我们还可以声明自定义的类，并使用类实例化对象。

对象是类的实例。类是对象的类型。

我们可以这样定义一个类：

```python
class <class_name>:
    # 自定义的类
```

例如，让我们定义一个Dog类

```python
class Dog:
    # Dog类
```

一个类里面可以定义方法：

```python
class Dog:
    # Dog类
    def bark(self):
        print('WOF!')
```

> `self`作为方法的参数，指向当前实例对象，定义类的方法时必须指定`self`。（译者：大多数情况下如此，有些特殊的方法不用指定）

我们使用以下语法创建一个类的实例对象，即创建一个**object**：

```python
roger = Dog()
```

现在`roger`是Dog类型的对象。

如果运行

```python
print(type(roger))
```

您会看到`<class '__main__.Dog'>`

当我们从类中创建新对象时，我们使用一种被称为构造函数的特殊方法`__init__()`来初始化一个或多个属性：

```python
class Dog:
    # the Dog class
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        print('WOF!')
```

我们这样使用它：

```python
roger = Dog('Roger', 8)
print(roger.name)  # 'Roger'
print(roger.age)  # 8

roger.bark()  # 'WOF!'
```

类的一个重要特性是继承。

我们创建一个可以使用`walk()`方法的Animal 类：

```python
class Animal:
    def walk(self):
        print('Walking..')
```

然后Dog类继承Animal类：

```python
class Dog(Animal):
    def bark(self):
        print('WOF!')
```

现在创建`Dog`类的新对象，它将具有`walk()`方法，因为`Dog`类继承自`Animal`类：

```python
roger = Dog()
roger.walk()  # 'Walking..'
roger.bark()  # 'WOF!'
```

<h2 id="modules-in-python">Python模块</h2>

每个Python文件都是一个模块。

您可以从其它文件导入模块，这是任何具有一定复杂性的程序的基础，因为它促进了合理的组织结构和代码重用。

在典型的Python程序中，一个文件作为入口点，那么其它文件是模块，并公开可以从模块中调用的函数。（译者：不只是可以公开函数，类、常量等等都行）

文件`dog.py`包含以下代码：

```python
def bark():
    print('WOF!')
```

我们可以使用`import`从另一个文件中导入这个模块。一旦我们这样做了，我们就可以使用`dog.bark()`来引用该函数：

```python
import dog

dog.bark()
```

或者，我们可以使用`from .. import`语法直接导入函数：

```python
from dog import bark

bark()
```

第一个策略导入文件中定义的所有内容。

第二个策略只选择导入我们需要的东西。

这些模块（的形式）取决于您的程序，导入（方法）取决于所导入模块（即文件）在文件系统中的位置。

假设您将`dog.py`文件放在`lib`文件夹中。

在该文件夹中，您需要创建一个名为`__init__.py`的空文件来告诉Python该文件夹包含模块。

现在您可以选择从`lib`中导入`dog`：

```py
from lib import dog

dog.bark()
```

或者您可以从`lib.dog`导入特定`dog`模块函数：

```py
from lib.dog import bark

bark()
```

<h2 id="the-python-standard-library">Python标准库</h2>

Python通过其**标准库**公开了许多内置功能。

标准库是各种应用程序的集合，包括数学应用，代码调试，以及图形用户界面创建等等。

您可以在此处找到标准库模块的完整列表：[https://docs.python.org/3/library/index.html](https://docs.python.org/3/library/index.html)

一些比较重要的模块是：

-   `math` 数学计算相关应用程序
-   `re` 正则表达式的使用
-   `json` 处理json数据
-   `datetime` 处理日期
-   `sqlite3` 使用SQLite
-   `os` 操作系统实用程序
-   `random` 生成随机数
-   `statistics` 数学统计相关应用程序
-   `requests` 执行HTTP网络请求
-   `http` 创建HTTP服务器
-   `urllib` 管理URL

接下来介绍如何_使用_标准库的一个模块。您已经知道如何使用自己创建的模块，即从程序文件夹中的其它文件导入。

标准库提供的模块也是如此使用：

```python
import math

math.sqrt(4)  # 2.0
```

或者

```python
from math import sqrt

sqrt(4)  # 2.0
```

我们很快将单独探索最重要的模块，以了解我们可以用其做什么。

<h2 id="the-pep8-python-style-guide">Python PEP8风格指导</h2>

编写代码时，应遵守所使用的编程语言的一些约定。

如果您从一开始就学习正确的命名和格式约定，那么将更容易阅读其他人编写的代码，同样其他人也会发现您的代码易于阅读。

Python在PEP8样式指南中定义了其代码风格约定。PEP即_Python Enhancement Proposals_，它描述了Python语言所有增强和讨论的地方。

有很多PEP提案，都可以在[https://www.python.org/dev/peps/](https://www.python.org/dev/peps/) 上找到。

PEP8是最早和最重要的提案之一，它定义了格式和以"pythonic"方式编写Python代码的一些规则。

您可以在此处阅读其完整内容：[https://www.python.org/dev/peps/pep-0008/](https://www.python.org/dev/peps/pep-0008/) ，下面是几点总结，您可以从这里快速开始：

-   使用空格而不是制表符缩进
-   使用4个空格缩进
-   Python文件用UTF-8编码
-   一行代码最多80列
-   每个语句写在自己所在的一行上
-   函数、变量名和文件名使用小写，单词之间用下划线分隔（例如snake\_case）
-   类名单词首字母大写（例如CamelCase）
-   包名是小写的，单词之间没有下划线
-   不应该改变的常量全用大写字母
-   变量名应该有意义
-   添加有用的注释，但应该避免为非常易懂的代码添加注释
-   在运算符两边添加空格
-   不要使用不必要的空格
-   在函数（的定义）前添加一个空行
-   在类中的方法之间添加一个空行
-   在函数/方法内部，可以使用空行分隔相关的代码块，以提高可读性

<h2 id="debugging-in-python">Python代码调试</h2>

调试代码是您应该学习的最佳技能之一，因为在许多困难的情况下，它将为您提供帮助。

每种编程语言都有其调试器。Python使用`pdb`调试代码，可通过标准库获得。

您可以通过在代码中添加一个断点来进行调试：

```python
breakpoint()
```

> 如果需要，您可以添加更多断点。

当Python解释器在您的代码中遇到断点时，它会停止执行代码，并会告诉您下一条将运行的指令是什么。

接下来您可以做一些事情。

您可以键入任何变量的名称来检查其值。

您可以按`n`跳到当前函数的下一行。如果下一行代码调用了函数，调试器不会进入它们，并将它们视为"黑匣子"。

您可以按 `s`跳到当前函数的下一行。如果下一行是调用一个函数，则调试器会进入该函数，然后您可以一次运行该函数的一条指令。

您可以按`c`继续正常执行剩下的程序，而无需逐步执行。

您可以按`q`停止程序的执行。

调试对于评估程序的结果很有用，当您有复杂的迭代或要修改的算法时，了解如何使用它尤其有用。

<h2 id="variable-scope-in-python">Python变量作用域</h2>

当您声明一个变量时，该变量在程序的某些部分中可见，这具体取决于您声明它的位置。

如果您在函数之外声明它，则该变量对声明之后的任何代码都是可见的，包括（这之后定义的）函数：

```python
age = 8

def test():
    print(age)

print(age)  # 8
test()  # 8
```

我们称这种变量为**全局变量**。

如果您在函数内部定义变量，则该变量是**局部变量**，并且仅在该函数内部可见。在函数之外，它是不可访问的：

```python
def test():
    age = 8
    print(age)

test()  # 8

print(age)
# 这些这个print会报错 NameError: name 'age' is not defined
```

<h2 id="how-to-accept-arguments-from-the-command-line-in-python">Python接收从命令行传入的参数</h2>

当我们从命令行调用程序时，Python提供了几种方法来处理传递的参数。

到目前为止，您已经使用过REPL来执行程序，或使用如下方法执行Python代码

```sh
python <文件名>.py
```

（像上面）这样做时，您可以传递附加的参数和选项，如下所示：

```sh
python <文件名>.py <参数1>
python <文件名>.py <参数1> <参数2>
```

处理这些参数的基本方法是使用标准库中的`sys`模块。

您可以获取在`sys.argv`列表中传递的参数：

```python
import sys
print(len(sys.argv))
print(sys.argv)
```

`sys.argv`列表的第一项包含所运行文件的名称，例如 `['main.py']`。

这是一种简单的方法，但您必须自己做很多工作。您需要验证参数，确保它们的类型是正确的，如果用户没有正确使用程序，您需要向他们打印反馈信息。

Python在标准库中提供了另一个包来帮助您：`argparse`。

您首先导入`argparse`并调用`argparse.ArgumentParser()`，传递程序的描述：

```python
import argparse

parser = argparse.ArgumentParser(
    description='This program prints the name of my dogs'
)
```

然后继续添加想要接受的参数。
例如，在下面这个程序中，我们接受一个`-c`选项来传递颜色，就像这样（执行代码文件）：`python program.py -c red`

```python
import argparse

parser = argparse.ArgumentParser(
    description='This program prints a color HEX value'
)

parser.add_argument('-c', '--color', metavar='color', required=True, help='the color to search for')

args = parser.parse_args()

print(args.color)  # 'red'
```

如果未指定参数，程序将报错：

```
➜  python python program.py
usage: program.py [-h] -c color
program.py: error: the following arguments are required: -c

program.py: error: 程序运行需要如下参数: -c
```


您可以使用`choices`将选项设置为一组特定值：

```python
parser.add_argument('-c', '--color', metavar='color', required=True, choices={'red','yellow'}, help='the color to search for')
```

```
➜  python python program.py -c blue
usage: program.py [-h] -c color
program.py: error: argument -c/--color: invalid choice: 'blue' (choose from 'yellow', 'red')

program.py: error: argument -c/--color: 无效的选择: 'blue' (该选项只能为'yellow'或'red')
```

还有更多选择，但以上是基础。

也有提供此功能的社区包，例如[Click](https://click.palletsprojects.com/en/7.x/)和[Python Prompt Toolkit](https://python-prompt-toolkit.readthedocs.io/en/master/index.html)。


<h2 id="lambda-functions-in-python">Python的Lambda函数</h2>

Lambda函数（也称为匿名函数）是没有名称且只有一个表达式作为其主体的小型函数。

在Python中，它们是使用`lambda`关键字定义的：

```python
lambda <参数> : <表达式>
```

主体必须是单个表达式，而不是语句。

> 这很重要：表达式返回值，语句不返回。

最简单的lambda函数示例是将数字的值加倍：

```python
lambda num : num * 2
```

Lambda函数可以接受更多参数：

```python
lambda a, b : a * b
```

无法直接调用Lambda函数，但您可以将它们分配给变量：

```python
multiply = lambda a, b : a * b

print(multiply(2, 2))  # 4
```

Lambda函数的实用性在于与其它Python功能结合使用，例如结合`map()`、`filter()`和`reduce()`。

<h2 id="recursion-in-python">Python递归</h2>

Python中的函数可以调用自身，这就是递归。递归在许多情况下都非常有用。

解释递归的常用方法是实现阶乘计算。

一个数字`n`的阶乘是数字`n`乘以`n-1`，再乘以`n-2`，以此类推，直到数字`1`：

```
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
```

使用递归，我们可以编写一个计算任意数阶乘的函数：

```python
def factorial(n):
    if n == 1: return 1
    return n * factorial(n-1)

print(factorial(3))  # 6
print(factorial(4))  # 24
print(factorial(5))  # 120
```

如果在 `factorial()` 函数中调用`factorial(n)`而不是`factorial(n-1)`，则会导致无限递归。 默认情况下，Python将在1000次调用时停止递归，此时您将收到`RecursionError`错误。

递归在很多地方都有用，它可以帮助我们在没有其它更好方法的情况下简化代码，所以了解这种技术是件好事。

<h2 id="nested-functions-in-python">Python嵌套函数</h2>

Python中函数可以嵌套在其它函数中。

在函数内部定义的函数仅在该函数内可见。

这对于创建在函数内有用，但在函数外无用的程序很有用。

您可能会问：如果它没有害处，我为什么要“隐藏”这个功能？

因为最好隐藏函数本地并且在其它地方没有用的功能。

另外，这样我们可以使用闭包（稍后会详细介绍）。

这里是一个例子：

```python
def talk(phrase):
    def say(word):
        print(word)

    words = phrase.split(' ')
    for word in words:
        say(word)

talk('I am going to buy the milk')
```

如果要从内部函数访问外部函数中定义的变量，首先需要将其声明为`nonlocal`：

```python
def count():
    count = 0

    def increment():
        nonlocal count
        count = count + 1
        print(count)

    increment()

count()
```

这对闭包特别有用，我们将在接下来的说明中看到。


<h2 id="closures-in-python">Python闭包</h2>

如果函数返回一个嵌套函数，则该嵌套函数可以访问在该函数中定义的变量，即使该函数不再处于运行状态。

这是一个简单的计数器示例。

```python
def counter():
    count = 0

    def increment():
        nonlocal count
        count = count + 1
        return count

    return increment

increment = counter()

print(increment())  # 1
print(increment())  # 2
print(increment())  # 3
```

我们返回`increment()`这个内部函数，即使`counter()`函数已经结束，`increment`仍然可以访问`count`变量的状态。

<h2 id="decorators-in-python">Python装饰器</h2>

装饰器是一种可以以任何方式增强或改变函数工作方式的方法。

装饰器是用`@`符号定义的，`@`后面跟装饰器名称，（装饰器用在）在函数定义之前。

例子：

```python
@logtime
def hello():
    print('hello!')
```

这个`hello`函数分配了`logtime`装饰器。

每当我们调用`hello()`时，装饰器也都会被调用。

装饰器是一个以函数为参数的函数，它将（被装饰的）函数包装在内部函数中，该内部函数执行必须完成的工作，然后返回这个内部函数。 换句话说：

```python
def logtime(func):
    def wrapper():
        # do something before
        val = func()
        # do something after
        return val
    return wrapper
```

<h2 id="docstrings-in-python">Python文档字符串</h2>

文档非常重要，不仅可以用于告知其他人（自己写的）函数/类/方法/模块的目标是什么，还可以帮助您（在较长时间后）理解自己的代码。

当您在6或12个月后会看您的的代码时，可能不记得写代码时脑海中的所有想法。这个时候阅读您的代码并理解它在做什么将变得非常困难。

注释是帮助自己（和他人）摆脱这种困境的一种方式：

```python
# this is a comment

num = 1  # this is another comment
```

另一种方法是使用**docstrings**。

文档字符串的实用性在于它们遵循约定，因此它们可以被自动处理。

这是您为函数定义文档字符串的方式：

```python
def increment(n):
    """Increment a number"""
    return n + 1
```

这是为类和方法定义文档字符串的方式：

```python
class Dog:
    """A class representing a dog"""
    def __init__(self, name, age):
        """Initialize a new dog"""
        self.name = name
        self.age = age

    def bark(self):
        """Let the dog bark"""
        print('WOF!')
```

通过在文件顶部放置一个文档字符串来解释记录一个模块，例如，假设这是`dog.py`：

```python
"""Dog module

This module does ... bla bla bla and provides the following classes:

- Dog
...
"""

class Dog:
    """A class representing a dog"""
    def __init__(self, name, age):
        """Initialize a new dog"""
        self.name = name
        self.age = age

    def bark(self):
        """Let the dog bark"""
        print('WOF!')
```

文档字符串可以跨越多行：

```python
def increment(n):
    """Increment
    a number
    """
    return n + 1
```

Python将处理这些（文档字符串），您可以使用全局函数`help()`来获取类/方法/函数/模块的文档。

例如调用`help(increment)`会给返回这个：

```
Help on function increment in module
__main__:

increment(n)
    Increment
    a number
```

格式化文档字符串有许多不同的标准，您可以选择遵守自己喜欢的标准。

我喜欢谷歌的标准： [https://github.com/google/styleguide/blob/gh-pages/pyguide.md#38-comments-and-docstrings](https://github.com/google/styleguide/blob/gh-pages/pyguide.md#38-comments-and-docstrings)

（遵循）标准可以使用工具来提取文档字符串并自动为您的代码生成文档。



<h2 id="introspection-in-python">Python反射</h2>

可以使用**反射**来分析函数、变量和对象。

首先，使用全局函数`help()`（如果以文档字符串的形式提供）我们可以获得文档。

然后，您可以使用print()获取有关函数的信息：

```python
def increment(n):
    return n + 1

print(increment)

# <function increment at 0x7f420e2973a0>
```

或者（获取）对象（的信息）：

```python
class Dog():
    def bark(self):
        print('WOF!')

roger = Dog()

print(roger)

# <__main__.Dog object at 0x7f42099d3340>
```

我们可以使用`type()`函数获取对象的类型：

```python
print(type(increment))
# <class 'function'>

print(type(roger))
# <class '__main__.Dog'>

print(type(1))
# <class 'int'>

print(type('test'))
# <class 'str'>
```

全局函数`dir()`可以找出对象的所有方法和属性：

```python
print(dir(roger))

# ['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'bark']
```

全局函数`id()`显示任意对象在内存中的位置：

```python
print(id(roger))  # 140227518093024
print(id(1))  # 140227521172384
```

这对于检查两个变量是否指向同一个对象会很有用。

`inspect`标准库模块为我们提供了更多获取对象信息的工具，您可以在[这里](https://docs.python.org/3/library/inspect.html)查看


<h2 id="annotations-in-python">Python注解</h2>

Python是动态类型的，我们不必指定变量、函数参数或函数返回值的类型。

注解允许我们（可选地）这样做。

这是一个没有注解的函数：

```python
def increment(n):
    return n + 1
```

这是带有注解的相同函数：

```python
def increment(n: int) -> int:
    return n + 1
```

您还可以注解变量：

```python
count: int = 0
```

Python将忽略这些注解。 一个名为[`mypy`](http://mypy-lang.org/)的工具可以独立运行，也可以集成到VS Code或PyCharm等IDE中，以便在您编码时自动检查静态类型错误。它还将帮助您在运行代码之前捕获类型不匹配的错误。

这是一个很大的帮助，尤其是当您的软件规模变得很大并且需要重构代码时。



<h2 id="exceptions-in-python">Python异常</h2>

处理错误很重要，Python为我们提供了异常处理来做到这一点。

如果将代码行包装到`try:`块中：

```python
try:
    # 一些代码
```

如果发生错误，Python会提醒您，您可以使用`except`块确认发生了哪种错误：

```python
try:
    # 一些代码
except <ERROR1>:
    # 处理 <ERROR1>
except <ERROR2>:
    # 处理 <ERROR2>
```

要捕获所有异常，您可以使用不包含任何错误类型的`except`块：

```python
try:
    # 一些代码
except <ERROR1>:
    # 处理 <ERROR1>
except:
    # 捕获其它所有错误
```

如果没有发现异常，则将运行`else`块：

```python
try:
    # 一些代码
except <ERROR1>:
    # 处理 <ERROR1>
except <ERROR2>:
    # 处理 <ERROR2>
else:
    # 没有抛出异常，代码成功运行
```

`finally`块允许您在任何情况下执行某些操作，无论是否发生错误：

```python
try:
    # 一些代码
except <ERROR1>:
    # 处理 <ERROR1>
except <ERROR2>:
    # 处理 <ERROR2>
else:
    # 没有抛出异常，代码成功运行
finally:
    # 任何情况下都将运行的代码
```

将发生的具体错误取决于您正在执行的操作。

例如，如果您正在读取一个文件，可能会得到一个`EOFError`。如果您将一个数除以零，将会得到一个`ZeroDivisionError`。如果发生类型转换问题，您可能会得到一个`TypeError`。

试试这个代码：

```python
result = 2 / 0
print(result)
```

程序将因错误而终止：

```
Traceback (most recent call last):
  File "main.py", line 1, in <module>
    result = 2 / 0
ZeroDivisionError: division by zero
```

并且错误（代码行）之后的代码将不会被执行。

在`try:`块中添加该操作可以让我们优雅地恢复（错误）并继续执行程序：

```python
try:
    result = 2 / 0
except ZeroDivisionError:
    print('Cannot divide by zero!')
finally:
    result = 1

print(result)  # 1
```

您也可以在自己的代码中使用`raise`语句引发异常：

```python
raise Exception('An error occurred!')
```

这会抛出一个异常，您可以使用以下方法拦截它：

```python
try:
    raise Exception('An error occurred!')
except Exception as error:
    print(error)
```

您还可以扩展Exception来定义自己的异常类：

```python
class DogNotFoundException(Exception):
    pass
```

> 这里`pass`的意思是“什么都没有”，当我们定义一个没有方法的类或没有代码的函数时，我们必须使用它。

```python
try:
    raise DogNotFoundException()
except DogNotFoundException:
    print('Dog not found!')
```

## The `with` Statement in Python

The `with` statement is very helpful to simplify working with exception handling.

For example when working with files, each time we open a file, we must remember to close it.

`with` makes this process transparent.

Instead of writing:

```python
filename = '/Users/flavio/test.txt'

try:
    file = open(filename, 'r')
    content = file.read()
    print(content)
finally:
    file.close()
```

You can write:

```python
filename = '/Users/flavio/test.txt'

with open(filename, 'r') as file:
    content = file.read()
    print(content)
```

In other words we have built-in implicit exception handling, as `close()` will be called automatically for us.

`with` is not just helpful to work with files. The above example is just meant to introduce its capabilities.

## How to Install 3rd Party Packages in Python Using `pip`

The Python standard library contains a huge number of utilities that simplify our Python development needs, but nothing can satisfy _everything_.

That's why individuals and companies create packages, and make them available as open source software for the entire community.

Those modules are all collected in a single place, the **Python Package Index** available at [https://pypi.org](https://pypi.org), and they can be installed on your system using `pip`.

There are more than 270,000 packages freely available at the time of writing.

> You should have `pip` already installed if you followed the Python installation instructions.

Install any package using the command `pip install`:

```
pip install <package>
```

or, if you do have troubles, you can also run it through `python -m`:

```
python -m pip install <package>
```

For example you can install the [`requests`](https://pypi.org/project/requests/) package, a popular HTTP library:

```
pip install requests
```

and once you do, it will be available for all your Python scripts, because packages are installed globally.

The exact location depends on your operating system.

On macOS, running Python 3.9, the location is `/Library/Frameworks/Python.framework/Versions/3.9/lib/python3.9/site-packages`.

Upgrade a package to its latest version using:

```
pip install –U <package>
```

Install a specific version of a package using:

```
pip install <package>==<version>
```

Uninstall a package using:

```
pip uninstall <package>
```

Show an installed package details, including version, documentation website and author information using:

```
pip show <package>
```

## List Comprehensions in Python

List comprehensions are a way to create lists in a very concise way.

Suppose you have a list:

```python
numbers = [1, 2, 3, 4, 5]
```

You can create a new list using a list comprehension, composed by the `numbers` list elements, power 2:

```python
numbers_power_2 = [n**2 for n in numbers]
# [1, 4, 9, 16, 25]
```

List comprehensions are a syntax that's sometimes preferred over loops, as it's more readable when the operation can be written on a single line:

```python
numbers_power_2 = []
for n in numbers:
    numbers_power_2.append(n**2)
```

and over `map()`:

```python
numbers_power_2 = list(map(lambda n : n**2, numbers))
```

## Polymorphism in Python

Polymorphism generalizes a functionality so it can work on different types. It's an important concept in object-oriented programming.

We can define the same method on different classes:

```python
class Dog:
    def eat():
        print('Eating dog food')

class Cat:
    def eat():
        print('Eating cat food')
```

Then we can generate objects and we can call the `eat()` method regardless of the class the object belongs to, and we'll get different results:

```python
animal1 = Dog()
animal2 = Cat()

animal1.eat()
animal2.eat()
```

We built a generalized interface and we now do not need to know that an animal is a Cat or a Dog.

## Operator Overloading in Python

Operator overloading is an advanced technique we can use to make classes comparable and to make them work with Python operators.

Let's take a class Dog:

```python
class Dog:
    # the Dog class
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

Let's create 2 Dog objects:

```python
roger = Dog('Roger', 8)
syd = Dog('Syd', 7)
```

We can use operator overloading to add a way to compare those 2 objects, based on the `age` property:

```python
class Dog:
    # the Dog class
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def __gt__(self, other):
        return True if self.age > other.age else False
```

Now if you try running `print(roger > syd)` you will get the result `True`.

In the same way we defined `__gt__()` (which means greater than), we can define the following methods:

-   `__eq__()` to check for equality
-   `__lt__()` to check if an object should be considered lower than another with the `<` operator
-   `__le__()` for lower or equal (`<=`)
-   `__ge__()` for greater or equal (`>=`)
-   `__ne__()` for not equal (`!=`)

Then you have methods to interoperate with arithmetic operations:

-   `__add__()` respond to the `+` operator
-   `__sub__()` respond to the `–` operator
-   `__mul__()` respond to the `*` operator
-   `__truediv__()` respond to the `/` operator
-   `__floordiv__()` respond to the `//` operator
-   `__mod__()` respond to the `%` operator
-   `__pow__()` respond to the `**` operator
-   `__rshift__()` respond to the `>>` operator
-   `__lshift__()` respond to the `<<` operator
-   `__and__()` respond to the `&` operator
-   `__or__()` respond to the `|` operator
-   `__xor__()` respond to the `^` operator

There are a few more methods to work with other operators, but you get the idea.

## Virtual Environments in Python

It's common to have multiple Python applications running on your system.

When applications require the same module, at some point you will reach a tricky situation where an app needs a version of a module, and another app a different version of that same module.

To solve this, you use **virtual environments**.

We'll use `venv`. Other tools work similarly, like `pipenv`.

Create a virtual environment using

```sh
python -m venv .venv
```

in the folder where you want to start the project, or where you already have an existing project.

Then run

```sh
source .venv/bin/activate
```

> Use `source .venv/bin/activate.fish` on the Fish shell

Executing the program will activate the Python virtual environment. Depending on your configuration you might also see your terminal prompt change.

Mine changed from

`➜ folder`

to

`(.venv) ➜ folder`

Now running `pip` will use this virtual environment instead of the global environment.

## Conclusion

Thanks a lot for reading this book.

I hope it will inspire you to learn more about Python.

For more on Python and programming tutorials in general, check out my blog [flaviocopes.com](https://flaviocopes.com).

Send any feedback, errata, or opinions at [mailto:flavio@flaviocopes.com](mailto:flavio@flaviocopes.com), and you can reach me on Twitter [@flaviocopes](https://twitter.com/flaviocopes).

> Note: You can [get a PDF, ePub and Mobi version of this Python Handbook](https://flaviocopes.com/page/python-handbook/)
