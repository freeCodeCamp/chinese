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
-   [Numbers in Python](#numbersinpython)
-   [Constants in Python](#constantsinpython)
-   [Enums in Python](#enumsinpython)
-   [User Input in Python](#userinputinpython)
-   [Control Statements in Python](#controlstatementsinpython)
-   [Lists in Python](#listsinpython)
-   [Tuples in Python](#tuplesinpython)
-   [Dictionaries in Python](#dictionariesinpython)
-   [Sets in Python](#setsinpython)
-   [Functions in Python](#functionsinpython)
-   [Objects in Python](#objectsinpython)
-   [Loops in Python](#loopsinpython)
-   [Classes in Python](#classesinpython)
-   [Modules in Python](#modulesinpython)
-   [The Python Standard Library](#thepythonstandardlibrary)
-   [The PEP8 Python Style Guide](#thepep8pythonstyleguide)
-   [Debugging in Python](#debugginginpython)
-   [Variable Scope in Python](#variablescopeinpython)
-   [How to Accept Arguments from the Command Line in Python](#howtoacceptargumentsfromthecommandlineinpython)
-   [Lambda Functions in Python](#lambdafunctionsinpython)
-   [Recursion in Python](#recursioninpython)
-   [Nested Functions in Python](#nestedfunctionsinpython)
-   [Closures in Python](#closuresinpython)
-   [Decorators in Python](#decoratorsinpython)
-   [Docstrings in Python](#docstringsinpython)
-   [Introspection in Python](#introspectioninpython)
-   [Annotations in Python](#annotationsinpython)
-   [Exceptions in Python](#exceptionsinpython)
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

name = "Roger" # this is an inline comment
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
type(name) == str #True
```

或者使用`isinstance()`：

```python
name = "Roger"
isinstance(name, str) #True
```

> 请注意，要在REPL之外查看`True`值，您需要将此代码包装在`print()`中，但为了清楚起见，我避免使用它。

我们在这里使用了`str`，但这种方法同样适用于其它数据类型。

首先，我们有数字。整数使用`int`表示，浮点数（分数）的类型为`float`：

```python
age = 1
type(age) == int #True
```

```python
fraction = 0.1
type(fraction) == float #True
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
print(age) #20

fraction = 0.1
intFraction = int(fraction)
print(intFraction) #0
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
1 + 1 #2
2 - 1 #1
2 * 2 #4
4 / 2 #2
4 % 3 #1
4 ** 2 #16
4 // 2 #2
```

> 请注意，操作数之间不需要空格，但加上空格有利于可读性。

`-`也可用作一元运算符表示负号：

```python
print(-4) #-4
```

`+`也可用于连接字符串：

```python
"Roger" + " is a good dog"
#Roger is a good dog
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

a == b #False
a != b #True
a > b #False
a <= b #True
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

not condition1 #False
condition1 and condition2 #False
condition1 or condition2 #True
```

但是，请注意可能的混淆：

表达式中使用`or`，则表达式的结果是第一个为非假值（假值：`False`、`0`、`''`、`[]`..）的操作数，否则返回最后一个操作数作为表达式的值。

```python
print(0 or 1) ## 1
print(False or 'hey') ## 'hey'
print('hi' or 'hey') ## 'hi'
print([] or False) ## 'False'
print(False or []) ## '[]'
```

Python文档将其（x or y）描述为`如果x为假，则为y，否则为x`。（翻译者理解：`or`碰到真值就停，没有真值就走到最后）

`and`运算操作仅在第一个操作数为真时，才计算第二个操作数。因此，如果第一个操作数是假值（假值：`False`、`0`、`''`、`[]`..），它会返回那个操作数。否则，它就会计算第二个操作数：

```python
print(0 and 1) ## 0
print(1 and 0) ## 0
print(False and 'hey') ## False
print('hi' and 'hey') ## 'hey'
print([] and False ) ## []
print(False and [] ) ## False
```

Python文档将其（x and y）描述为`如果x为假，则为x，否则为y`。（翻译者理解：`or`碰到假值就停，没有假值就走到最后）

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
（翻译者：感觉这个例子不太好，因为这里写成`return age > 18`会更好，换成这个例子`return "age大于18" if age > 18 else "age小于等于18"`会更好理解一些）

```python
def is_adult(age):
    return True if age > 18 else False
```

首先定义条件为真的结果，然后判断条件，最后定义条件为假的结果：

```python
<条件为真得到的结果> if <条件表达式> else <条件为假得到的结果>
```

<h2 id="strings-in-python">Python字符串</h2>

A string in Python is a series of characters enclosed in quotes or double quotes:

Python中的字符串是用单引号或双引号括起来的一串字符：

```python
"Roger"
'Roger'
```

You can assign a string value to a variable:

您可以将字符串赋值给变量：

```python
name = "Roger"
```

You can concatenate two strings using the `+` operator:

```python
phrase = "Roger" + " is a good dog"
```

You can append to a string using `+=`:

您可以使用`+`运算符连接两个字符串：

```python
name = "Roger"
name += " is a good dog"

print(name) #Roger is a good dog
```

You can convert a number to a string using the `str` class constructor:

您可以使用`str`类构造函数将数字转换为字符串：

```python
str(8) #"8"
```

This is essential to concatenate a number to a string:

这对于连接数字和字符串来说很重要：

```python
print("Roger is " + str(8) + " years old") #Roger is 8 years old
```

A string can be multi-line when defined with a special syntax, enclosing the string in a set of 3 quotes:

当使用特殊语法定义时，字符串可以是多行的，将字符串括在一组3个引号中：

```python
print("""Roger is

    8

years old
""")

#double quotes, or single quotes

print('''
Roger is

    8

years old
''')
```

A string has a set of built-in methods, like:

字符串具有一组内置方法，例如：

-   `isalpha()` to check if a string contains only characters and is not empty
-   `isalpha()` 检查字符串是否只包含字母字符，并且不为空字符串
-   `isalnum()` to check if a string contains characters or digits and is not empty
-   `isalnum()` 检查字符串是否包含字母字符或数字字符，并且不为空
-   `isdecimal()` to check if a string contains digits and is not empty
-   `isdecimal()` 检查字符串是否只包含十进制字符，并且不为空
-   `lower()` to get a lowercase version of a string
-   `lower()` 获取字符串的小写版本
-   `islower()` to check if a string is lowercase
-   `islower()` 检查字符串是否全为小写
-   `upper()` to get an uppercase version of a string
-   `upper()` 获取字符串的大写版本
-   `isupper()` to check if a string is uppercase
-   `isupper()` 检查字符串是否全为大写
-   `title()` to get a capitalized version of a string
-   `title()` 获取字符串的“标题化”版本（所有单词首字母大写）
-   `startswith()` to check if the string starts with a specific substring
-   `startsswith()` 检查字符串是否以特定子字符串开头
-   `endswith()` to check if the string ends with a specific substring
-   `endswith()` 检查字符串是否以特定子字符串结尾
-   `replace()` to replace a part of a string
-   `replace()` 替换字符串的一部分
-   `split()` to split a string on a specific character separator
-   `split()` 按特定分隔符拆分字符串
-   `strip()` to trim the whitespace from a string
-   `strip()` 修剪字符串中的空格
-   `join()` to append new letters to a string
-   `join()` 将字符添加到另一个字符串
-   `find()` to find the position of a substring
-   `find()` 查找特定子字符串在字符串中的位置

and many more.

以及其它等等。

None of those methods alter the original string. They return a new, modified string instead. For example:

这些方法都不会改变原始字符串，它们将会返回一个新的、修改后的字符串。例如：

```python
name = "Roger"
print(name.lower()) #"roger"
print(name) #"Roger"
```

You can use some global functions to work with strings, too.

您也可以使用一些全局函数来处理字符串。

In particular I think of `len()`, which gives you the length of a string:

这里我特别想到了`len()`，它返回给你指定字符串的长度：

```python
name = "Roger"
print(len(name)) #5
```

The `in` operator lets you check if a string contains a substring:

`in`运算符可以让您检查字符串是否包含某个子字符串：

```python
name = "Roger"
print("ger" in name) #True
```

Escaping is a way to add special characters into a string.

转义是一种将特殊字符添加到字符串中的方法。

For example, how do you add a double quote into a string that's wrapped into double quotes?

例如，如何将双引号添加到被双引号包裹的字符串中？

```python
name = "Roger"
```

`"Ro"Ger"` will not work, as Python will think the string ends at `"Ro"`.

`"Ro"Ger"`将不起作用，因为Python会认为字符串以`"Ro"`结尾。

The way to go is to escape the double quote inside the string, with the `\` backslash character:

方法是使用 `\` 反斜杠字符转义字符串内的双引号：

```python
name = "Ro\"ger"
```

This applies to single quotes too `\'`, and for special formatting characters like `\t` for tab, `\n` for new line and `\\` for the backslash.
这也适用于单引号`\'`，以及特殊格式字符，如制表符`\t`、换行符`\n`和反斜杠`\\`。

Given a string, you can get its characters using square brackets to get a specific item, given its index, starting from 0:

给定一个字符串，并给定一个索引（从0开始），您就可以使用方括号获取指定位置上的字符，从而获取特定内容：

```python
name = "Roger"
name[0] #'R'
name[1] #'o'
name[2] #'g'
```

Using a negative number will start counting from the end:

使用负数将从末尾开始计数：

```python
name = "Roger"
name[-1] #"r"
```

You can also use a range, using what we call **slicing**:

您还可以使用范围，即使用我们所说的**切片**：

```python
name = "Roger"
name[0:2] #"Ro"
name[:2] #"Ro"
name[2:] #"ger"
```

<h2 id="booleans-in-python">Python布尔值</h2>

Python provides the `bool` type, which can have two values: `True` and `False` (capitalized).

```python
done = False
done = True
```

Booleans are especially useful with conditional control structures like `if` statements:

```python
done = True

if done:
    # run some code here
else:
    # run some other code
```

When evaluating a value for `True` or `False`, if the value is not a `bool` we have some rules depending on the type we're checking:

-   numbers are always `True` except for the number `0`
-   strings are `False` only when empty
-   lists, tuples, sets, and dictionaries are `False` only when empty

You can check if a value is a boolean in this way:

```python
done = True
type(done) == bool #True
```

Or using `isinstance()`, passing 2 arguments: the variable, and the `bool` class:

```python
done = True
isinstance(done, bool) #True
```

The global `any()` function is also very useful when working with booleans, as it returns `True` if any of the values of the iterable (list, for example) passed as argument are `True`:

```python
book_1_read = True
book_2_read = False

read_any_book = any([book_1_read, book_2_read])
```

The global `all()` function is same, but returns `True` if all of the values passed to it are `True`:

```python
ingredients_purchased = True
meal_cooked = False

ready_to_serve = all([ingredients_purchased, meal_cooked])
```

## Numbers in Python

Numbers in Python can be of 3 types: `int`, `float` and `complex`.

### Integer numbers in Python

Integer numbers are represented using the `int` class. You can define an integer using a value literal:

```python
age = 8
```

You can also define an integer number using the `int()` constructor:

```python
age = int(8)
```

To check if a variable is of type `int`, you can use the `type()` global function:

```python
type(age) == int #True
```

### Floating point numbers in Python

Floating point numbers (fractions) are of type `float`. You can define an integer using a value literal:

```python
fraction = 0.1
```

Or using the `float()` constructor:

```python
fraction = float(0.1)
```

To check if a variable is of type `float`, you can use the `type()` global function:

```python
type(fraction) == float #True
```

### Complex numbers in Python

Complex numbers are of type `complex`.

You can define them using a value literal:

```python
complexNumber = 2+3j
```

or using the `complex()` constructor:

```python
complexNumber = complex(2, 3)
```

Once you have a complex number, you can get its real and imaginary part:

```python
complexNumber.real #2.0
complexNumber.imag #3.0
```

Again, to check if a variable is of type `complex`, you can use the `type()` global function:

```python
type(complexNumber) == complex #True
```

### Arithmetic operations on numbers in Python

You can perform arithmetic operations on numbers, using the arithmetic operators: `+`, `-`, `*`, `/` (division), `%` (remainder), `**` (exponentiation) and `//` (floor division):

```python
1 + 1 #2
2 - 1 #1
2 * 2 #4
4 / 2 #2
4 % 3 #1
4 ** 2 #16
4 // 2 #2
```

and you can use the compound assignment operators

-   `+=`
-   `-=`
-   `*=`
-   `/=`
-   `%=`
-   ..and so on

to quickly perform operations on variables, too:

```python
age = 8
age += 1
```

### Built-in Functions in Python

There are 2 built-in functions that help with numbers:

`abs()` returns the absolute value of a number.

`round()` given a number, returns its value rounded to the nearest integer:

```python
round(0.12) #0
```

You can specify a second parameter to set the decimal point's precision:

```python
round(0.12, 1) #0.1
```

Several other math utility functions and constants are provided by the Python standard library:

-   the `math` package provides general math functions and constants
-   the `cmath` package provides utilities to work with complex numbers.
-   the `decimal` package provides utilities to work with decimals and floating point numbers.
-   the `fractions` package provides utilities to work with rational numbers.

We'll explore some of those separately later on.

## Constants in Python

Python has no way to enforce that a variable should be a constant.

The nearest you can get is to use an enum:

```Python
class Constants(Enum):
    WIDTH = 1024
    HEIGHT = 256
```

And get to each value using, for example, `Constants.WIDTH.value`.

No one can reassign that value.

Otherwise if you want to rely on naming conventions, you can adhere to this one: declare variables that should never change uppercase:

```python
WIDTH = 1024
```

No one will prevent you from overwriting this value, and Python will not stop it.

That's what most Python code does that you will see.

## Enums in Python

Enums are readable names that are bound to a constant value.

To use enums, import `Enum` from the `enum` standard library module:

```python
from enum import Enum
```

Then you can initialize a new enum in this way:

```python
class State(Enum):
    INACTIVE = 0
    ACTIVE = 1
```

Once you do so, you can reference `State.INACTIVE` and `State.ACTIVE`, and they serve as constants.

Now if you try to print `State.ACTIVE` for example:

```python
print(State.ACTIVE)
```

it will not return `1`, but `State.ACTIVE`.

The same value can be reached by the number assigned in the enum: `print(State(1))` will return `State.ACTIVE`. Same for using the square brackets notation `State['ACTIVE']`.

You can, however, get the value using `State.ACTIVE.value`.

You can list all the possible values of an enum:

```python
list(State) # [<State.INACTIVE: 0>, <State.ACTIVE: 1>]
```

You can count them:

```python
len(State) # 2
```

## User Input in Python

In a Python command line application you can display information to the user using the `print()` function:

```python
name = "Roger"
print(name)
```

We can also accept input from the user, using `input()`:

```python
print('What is your age?')
age = input()
print('Your age is ' + age)
```

This approach gets input at runtime, meaning the program will stop execution and will wait until the user types something and presses the `enter` key.

You can also do more complex input processing and accept input at program invocation time, and we'll see how to do that later on.

This works for command line applications. Other kinds of applications will need a different way of accepting input.

## Control Statements in Python

When you're dealing with booleans, and expressions that return a boolean in particular, we can make decisions and take different roads depending on their `True` or `False` values.

In Python we do so using the `if` statement:

```python
condition = True

if condition == True:
    # do something
```

When the condition test resolves to `True`, like in the above case, its block gets executed.

What is a block? A block is that part that is indented one level (4 spaces usually) on the right:

```python
condition = True

if condition == True:
    print("The condition")
    print("was true")
```

The block can be formed by a single line, or multiple lines as well, and it ends when you move back to the previous indentation level:

```python
condition = True

if condition == True:
    print("The condition")
    print("was true")

print("Outside of the if")
```

In combination with `if` you can have an `else` block that's executed if the condition test of `if` results to `False`:

```python
condition = True

if condition == True:
    print("The condition")
    print("was True")
else:
    print("The condition")
    print("was False")
```

And you can have different linked `if` checks with `elif` that's executed if the previous check was `False`:

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

The second block in this case is executed if `condition` is `False`, and the `name` variable value is "Roger".

In a `if` statement you can have just one `if` and `else` check, but multiple series of `elif` checks:

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

`if` and `else` can also be used in an inline format, which lets us return one value or another based on a condition.

Example:

```python
a = 2
result = 2 if a == 0 else 3
print(result) # 3
```

## Lists in Python

Lists are an essential Python data structure.

The allow you to group together multiple values and reference them all with a common name.

For example:

```python
dogs = ["Roger", "Syd"]
```

A list can hold values of different types:

```python
items = ["Roger", 1, "Syd", True]
```

You can check if an item is contained in a list with the `in` operator:

```python
print("Roger" in items) # True
```

A list can also be defined as empty:

```python
items = []
```

You can reference the items in a list by their index, starting from zero:

```python
items[0] # "Roger"
items[1] # 1
items[3] # True
```

Using the same notation you can change the value stored at a specific index:

```python
items[0] = "Roger"
```

You can also use the `index()` method:

```python
items.index(0) # "Roger"
items.index(1) # 1
```

As with strings, using a negative index will start searching from the end:

```python
items[-1] # True
```

You can also extract a part of a list, using slices:

```python
items[0:2] # ["Roger", 1]
items[2:] # ["Syd", True]
```

Get the number of items contained in a list using the `len()` global function, the same we used to get the length of a string:

```python
len(items) #4
```

You can add items to the list by using a list `append()` method:

```python
items.append("Test")
```

or the extend() method:

```python
items.extend(["Test"])
```

You can also use the `+=` operator:

```python
items += ["Test"]

# items is ['Roger', 1, 'Syd', True, 'Test']
```

> Tip: with `extend()` or `+=` don't forget the square brackets. Don't do `items += "Test"` or `items.extend("Test")` or Python will add 4 individual characters to the list, resulting in `['Roger', 1, 'Syd', True, 'T', 'e', 's', 't']`

Remove an item using the `remove()` method:

```python
items.remove("Test")
```

You can add multiple elements using

```python
items += ["Test1", "Test2"]

#or

items.extend(["Test1", "Test2"])
```

These append the item to the end of the list.

To add an item in the middle of a list, at a specific index, use the `insert()` method:

```python
items.insert("Test", 1) # add "Test" at index 1
```

To add multiple items at a specific index, you need to use slices:

```python
items[1:1] = ["Test1", "Test2"]
```

Sort a list using the `sort()` method:

```python
items.sort()
```

> Tip: sort() will only work if the list holds values that can be compared. Strings and integers for example can't be compared, and you'll get an error like `TypeError: '<' not supported between instances of 'int' and 'str'` if you try.

The `sort()` methods orders uppercase letters first, then lowercase letters. To fix this, use:

```python
items.sort(key=str.lower)
```

instead.

Sorting modifies the original list content. To avoid that, you can copy the list content using

```python
itemscopy = items[:]
```

or use the `sorted()` global function:

```python
print(sorted(items, key=str.lower))
```

that will return a new list, sorted, instead of modifying the original list.

## Tuples in Python

Tuples are another fundamental Python data structure.

They allow you to create immutable groups of objects. This means that once a tuple is created, it can't be modified. You can't add or remove items.

They are created in a way similar to lists, but using parentheses instead of square brackets:

```python
names = ("Roger", "Syd")
```

A tuple is ordered, like a list, so you can get its values by referencing an index value:

```python
names[0] # "Roger"
names[1] # "Syd"
```

You can also use the `index()` method:

```python
names.index('Roger') # 0
names.index('Syd')   # 1
```

As with strings and lists, using a negative index will start searching from the end:

```python
names[-1] # True
```

You can count the items in a tuple with the `len()` function:

```python
len(names) # 2
```

You can check if an item is contained in a tuple with the `in` operator:

```python
print("Roger" in names) # True
```

You can also extract a part of a tuple, using slices:

```python
names[0:2] # ('Roger', 'Syd')
names[1:] # ('Syd',)
```

Get the number of items in a tuple using the `len()` global function, the same we used to get the length of a string:

```python
len(names) #2
```

You can create a sorted version of a tuple using the `sorted()` global function:

```python
sorted(names)
```

You can create a new tuple from existing tuples using the `+` operator:

```python
newTuple = names + ("Vanille", "Tina")
```

## Dictionaries in Python

Dictionaries are a very important Python data structure.

While lists allow you to create collections of values, dictionaries allow you to create collections of **key / value pairs**.

Here is a dictionary example with one key/value pair:

```python
dog = { 'name': 'Roger' }
```

The key can be any immutable value like a string, a number or a tuple. The value can be anything you want.

A dictionary can contain multiple key/value pairs:

```python
dog = { 'name': 'Roger', 'age': 8 }
```

You can access individual key values using this notation:

```python
dog['name'] # 'Roger'
dog['age']  # 8
```

Using the same notation you can change the value stored at a specific index:

```python
dog['name'] = 'Syd'
```

And another way is using the `get()` method, which has an option to add a default value:

```python
dog.get('name') # 'Roger'
dog.get('test', 'default') # 'default'
```

The `pop()` method retrieves the value of a key, and subsequently deletes the item from the dictionary:

```python
dog.pop('name') # 'Roger'
```

The `popitem()` method retrieves and removes the last key/value pair inserted into the dictionary:

```python
dog.popitem()
```

You can check if a key is contained into a dictionary with the `in` operator:

```python
'name' in dog # True
```

Get a list with the keys in a dictionary using the `keys()` method, passing its result to the `list()` constructor:

```python
list(dog.keys()) # ['name', 'age']
```

Get the values using the `values()` method, and the key/value pairs tuples using the `items()` method:

```python
print(list(dog.values()))
# ['Roger', 8]

print(list(dog.items()))
# [('name', 'Roger'), ('age', 8)]
```

Get a dictionary length using the `len()` global function, the same we used to get the length of a string or the items in a list:

```python
len(dog) #2
```

You can add a new key/value pair to the dictionary in this way:

```python
dog['favorite food'] = 'Meat'
```

You can remove a key/value pair from a dictionary using the `del` statement:

```python
del dog['favorite food']
```

To copy a dictionary, use the copy() method:

```python
dogCopy = dog.copy()
```

## Sets in Python

Sets are another important Python data structure.

We can say they work like tuples, but they are not ordered, and they are **mutable**.

Or we can say they work like dictionaries, but they don't have keys.

They also have an immutable version, called `frozenset`.

You can create a set using this syntax:

```python
names = {"Roger", "Syd"}
```

Sets work well when you think about them as mathematical sets.

You can intersect two sets:

```python
set1 = {"Roger", "Syd"}
set2 = {"Roger"}

intersect = set1 & set2 #{'Roger'}
```

You can create a union of two sets:

```python
set1 = {"Roger", "Syd"}
set2 = {"Luna"}

union = set1 | set2
#{'Syd', 'Luna', 'Roger'}
```

You can get the difference between two sets:

```python
set1 = {"Roger", "Syd"}
set2 = {"Roger"}

difference = set1 - set2 #{'Syd'}
```

You can check if a set is a superset of another (and of course if a set is a subset of another):

```python
set1 = {"Roger", "Syd"}
set2 = {"Roger"}

isSuperset = set1 > set2 # True
```

You can count the items in a set with the `len()` global function:

```python
names = {"Roger", "Syd"}
len(names) # 2
```

You can get a list from the items in a set by passing the set to the `list()` constructor:

```python
names = {"Roger", "Syd"}
list(names) #['Syd', 'Roger']
```

You can check if an item is contained in a set with the `in` operator:

```python
print("Roger" in names) # True
```

## Functions in Python

A function lets us create a set of instructions that we can run when needed.

Functions are essential in Python and in many other programming languages. They help us create meaningful programs, because they allow us to decompose a program into manageable parts, and they promote readability and code reuse.

Here is an example function called `hello` that prints "Hello!":

```python
def hello():
    print('Hello!')
```

This is the function **definition**. Thereis a name (`hello`) and a body, the set of instructions, which is the part that follows the colon. It's indented one level on the right.

To run this function, we must call it. This is the syntax to call the function:

```python
hello()
```

We can execute this function once, or multiple times.

The name of the function, `hello`, is very important. It should be descriptive, so anyone calling it can imagine what the function does.

A function can accept one or more parameters:

```python
def hello(name):
    print('Hello ' + name + '!')
```

In this case we call the function by passing the argument

```python
hello('Roger')
```

> We call _parameters_ the values accepted by the function inside the function definition, and _arguments_ the values we pass to the function when we call it. It's common to get confused about this distinction.

An argument can have a default value that's applied if the argument is not specified:

```python
def hello(name='my friend'):
    print('Hello ' + name + '!')

hello()
#Hello my friend!
```

Here's how we can accept multiple parameters:

```python
def hello(name, age):
    print('Hello ' + name + ', you are ' + str(age) + ' years old!')
```

In this case we call the function passing a set of arguments:

```python
hello('Roger', 8)
```

Parameters are passed by reference. All types in Python are objects, but some of them are immutable, including integers, booleans, floats, strings, and tuples. This means that if you pass them as parameters and you modify their value inside the function, the new value is not reflected outside of the function:

```python
def change(value):
    value = 2

val = 1
change(val)

print(val) #1
```

If you pass an object that's not immutable, and you change one of its properties, the change will be reflected outside.

A function can return a value, using the `return` statement. For example in this case we return the `name` parameter name:

```python
def hello(name):
    print('Hello ' + name + '!')
    return name
```

When the function meets the `return` statement, the function ends.

We can omit the value:

```python
def hello(name):
    print('Hello ' + name + '!')
    return
```

We can have the return statement inside a conditional, which is a common way to end a function if a starting condition is not met:

```python
def hello(name):
    if not name:
        return
    print('Hello ' + name + '!')
```

If we call the function passing a value that evaluates to `False`, like an empty string, the function is terminated before reaching the `print()` statement.

You can return multiple values by using comma separated values:

```python
def hello(name):
    print('Hello ' + name + '!')
    return name, 'Roger', 8
```

In this case calling `hello('Syd')` the return value is a tuple containing those 3 values: `('Syd', 'Roger', 8)`.

## Objects in Python

Everything in Python is an object.

Even values of basic primitive types (integer, string, float..) are objects. Lists are objects, as are tuples, dictionaries, everything.

Objects have **attributes** and **methods** that can be accessed using the dot syntax.

For example, try defining a new variable of type `int`:

```python
age = 8
```

`age` now has access to the properties and methods defined for all `int` objects.

This includes, for example, access to the real and imaginary part of that number:

```python
print(age.real) # 8
print(age.imag) # 0

print(age.bit_length()) #4

# the bit_length() method returns the number of bits necessary to represent this number in binary notation
```

A variable holding a list value has access to a different set of methods:

```python
items = [1, 2]
items.append(3)
items.pop()
```

The methods depend on the type of value.

The `id()` global function provided by Python lets you inspect the location in memory for a particular object.

```python
id(age) # 140170065725376
```

> Your memory value will change - I am only showing it as an example.

If you assign a different value to the variable, its address will change, because the content of the variable has been replaced with another value stored in another location in memory:

```python
age = 8

print(id(age)) # 140535918671808

age = 9

print(id(age)) # 140535918671840
```

But if you modify the object using its methods, the address stays the same:

```python
items = [1, 2]

print(id(items)) # 140093713593920

items.append(3)

print(items) # [1, 2, 3]
print(id(items)) # 140093713593920
```

The address only changes if you reassign a variable to another value.

Some objects are _mutable_, while others are _immutable_. This depends on the object itself.

If the object provides methods to change its content, then it's mutable. Otherwise it's immutable.

Most types defined by Python are immutable. For example an `int` is immutable. There are no methods to change its value. If you increment the value using

```python
age = 8
age = age + 1

#or

age += 1
```

and you check with `id(age)`, you will find that `age` points to a different memory location. The original value has not mutated, we just switched to another value.

## Loops in Python

Loops are one essential part of programming.

In Python we have 2 kinds of loops: **while loops** and **for loops**.

### `while` loops in Python

`while` loops are defined using the `while` keyword, and they repeat their block until the condition is evaluated as `False`:

```python
condition = True
while condition == True:
    print("The condition is True")
```

This is an **infinite loop**. It never ends.

Let's halt the loop right after the first iteration:

```python
condition = True
while condition == True:
    print("The condition is True")
    condition = False

print("After the loop")
```

In this case, the first iteration is run, as the condition test is evaluated to `True`. At the second iteration, the condition test evaluates to `False`, so the control goes to the next instruction after the loop.

It's common to have a counter to stop the iteration after some number of cycles:

```python
count = 0
while count < 10:
    print("The condition is True")
    count = count + 1

print("After the loop")
```

### `for` loops in Python

Using `for` loops we can tell Python to execute a block for a pre-determined amount of times, up front, and without the need of a separate variable and conditional to check its value.

For example we can iterate the items in a list:

```python
items = [1, 2, 3, 4]
for item in items:
    print(item)
```

Or, you can iterate a specific amount of times using the `range()` function:

```python
for item in range(04):
    print(item)
```

`range(4)` creates a sequence that starts from 0 and contains 4 items: `[0, 1, 2, 3]`.

To get the index, you should wrap the sequence into the `enumerate()` function:

```python
items = [1, 2, 3, 4]
for index, item in enumerate(items):
    print(index, item)
```

### Break and continue in Python

Both `while` and `for` loops can be interrupted inside the block, using two special keywords: `break` and `continue`.

`continue` stops the current iteration and tells Python to execute the next one.

`break` stops the loop altogether, and goes on with the next instruction after the loop ends.

The first example here prints `1, 3, 4`. The second example prints `1`:

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

## Classes in Python

In addition to using the Python-provided types, we can declare our own classes, and from classes we can instantiate objects.

An object is an instance of a class. A class is the type of an object.

We can define a class in this way:

```python
class <class_name>:
    # my class
```

For example let's define a Dog class

```python
class Dog:
    # the Dog class
```

A class can define methods:

```python
class Dog:
    # the Dog class
    def bark(self):
        print('WOF!')
```

> `self` as the argument of the method points to the current object instance, and must be specified when defining a method.

We create an instance of a class, an **object**, using this syntax:

```python
roger = Dog()
```

Now `roger` is a new object of type Dog.

If you run

```python
print(type(roger))
```

You will get `<class '__main__.Dog'>`

A special type of method, `__init__()` is called constructor, and we can use it to initialize one or more properties when we create a new object from that class:

```python
class Dog:
    # the Dog class
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        print('WOF!')
```

We use it in this way:

```python
roger = Dog('Roger', 8)
print(roger.name) # 'Roger'
print(roger.age)  # 8

roger.bark() # 'WOF!'
```

One important feature of classes is inheritance.

We can create an Animal class with a method `walk()`:

```python
class Animal:
    def walk(self):
        print('Walking..')
```

and the Dog class can inherit from Animal:

```python
class Dog(Animal):
    def bark(self):
        print('WOF!')
```

Now creating a new object of class `Dog` will have the `walk()` method as that's inherited from `Animal`:

```python
roger = Dog()
roger.walk() # 'Walking..'
roger.bark() # 'WOF!'
```

## Modules in Python

Every Python file is a module.

You can import a module from other files, and that's the base of any program of moderate complexity, as it promotes a sensible organization and code reuse.

In the typical Python program, one file acts as the entry point. The other files are modules and expose functions that we can call from other files.

The file `dog.py` contains this code:

```python
def bark():
    print('WOF!')
```

We can import this function from another file using `import`. And once we do, we can reference the function using the dot notation, `dog.bark()`:

```python
import dog

dog.bark()
```

Or, we can use the `from .. import` syntax and call the function directly:

```python
from dog import bark

bark()
```

The first strategy allows us to load everything defined in a file.

The second strategy lets us pick the things we need.

Those modules are specific to your program, and importing depends on the location of the file in the filesystem.

Suppose you put `dog.py` in a `lib` subfolder.

In that folder, you need to create an empty file named `__init__.py`. This tells Python the folder contains modules.

Now you can choose - you can import `dog` from `lib`:

```py
from lib import dog

dog.bark()
```

or you can reference the `dog` module specific function importing from `lib.dog`:

```py
from lib.dog import bark

bark()
```

## The Python Standard Library

Python exposes a lot of built-in functionality through its **standard library**.

The standard library is a huge collection of all sort of utilities, ranging from math utilities to debugging to creating graphical user interfaces.

You can find the full list of standard library modules here: [https://docs.python.org/3/library/index.html](https://docs.python.org/3/library/index.html)

Some of the important modules are:

-   `math` for math utilities
-   `re` for regular expressions
-   `json` to work with JSON
-   `datetime` to work with dates
-   `sqlite3` to use SQLite
-   `os` for Operating System utilities
-   `random` for random number generation
-   `statistics` for statistics utilities
-   `requests` to perform HTTP network requests
-   `http` to create HTTP servers
-   `urllib` to manage URLs

Let's introduce how to _use_ a module of the standard library. You already know how to use modules you create, importing from other files in the program folder.

Well that's the same with modules provided by the standard library:

```python
import math

math.sqrt(4) # 2.0
```

or

```python
from math import sqrt

sqrt(4) # 2.0
```

We'll soon explore the most important modules individually to understand what we can do with them.

## The PEP8 Python Style Guide

When you write code, you should adhere to the conventions of the programming language you use.

If you learn the right naming and formatting conventions right from the start, it will be easier to read code written by other people, and people will find your code easier to read.

Python defines its conventions in the PEP8 style guide. PEP stands for _Python Enhancement Proposals_ and it's the place where all Python language enhancements and discussions happen.

There are a lot of PEP proposals, all available at [https://www.python.org/dev/peps/](https://www.python.org/dev/peps/).

PEP8 is one of the first ones, and one of the most important, too. It defines the formatting and also some rules on how to write Python in a "pythonic" way.

You can read its full content here: [https://www.python.org/dev/peps/pep-0008/](https://www.python.org/dev/peps/pep-0008/) but here's a quick summary of the important points you can start with:

-   Indent using spaces, not tabs
-   Indent using 4 spaces.
-   Python files are encoded in UTF-8
-   Use maximum 80 columns for your code
-   Write each statement on its own line
-   Functions, variable names and file names are lowercase, with underscores between words (snake\_case)
-   Class names are capitalized, separate words are written with the capital letter too, (CamelCase)
-   Package names are lowercase and do not have underscores between words
-   Variables that should not change (constants) are written in uppercase
-   Variable names should be meaningful
-   Add useful comments, but avoid obvious comments
-   Add spaces around operators
-   Do not use unnecessary whitespace
-   Add a blank line before a function
-   Add a blank line between methods in a class
-   Inside functions/methods, blank lines can be used to separate related blocks of code to help readability

## Debugging in Python

Debugging is one of the best skills you can learn, as it will help you in many difficult situations.

Every language has its debugger. Python has `pdb`, available through the standard library.

You debug by adding one breakpoint into your code:

```python
breakpoint()
```

> You can add more breakpoints if needed.

When the Python interpreter hits a breakpoint in your code, it will stop, and it will tell you what is the next instruction it will run.

Then and you can do a few things.

You can type the name of any variable to inspect its value.

You can press `n` to step to the next line in the current function. If the code calls functions, the debugger does not get into them, and considers them "black boxes".

You can press `s` to step to the next line in the current function. If the next line is a function, the debugger goes into that, and you can then run one instruction of that function at a time.

You can press `c` to continue the execution of the program normally, without the need to do it step-by-step.

You can press `q` to stop the execution of the program.

Debugging is useful to evaluate the result of an instruction, and it's especially good to know how to use it when you have complex iterations or algorithms that you want to fix.

## Variable Scope in Python

When you declare a variable, that variable is visible in parts of your program, depending on where you declare it.

If you declare it outside of any function, the variable is visible to any code running after the declaration, including functions:

```python
age = 8

def test():
    print(age)

print(age) # 8
test() # 8
```

We call it a **global variable**.

If you define a variable inside a function, that variable is a **local variable**, and it is only visible inside that function. Outside the function, it is not reachable:

```python
def test():
    age = 8
    print(age)

test() # 8

print(age)
# NameError: name 'age' is not defined
```

## How to Accept Arguments from the Command Line in Python

Python offers several ways to handle arguments passed when we invoke the program from the command line.

So far you've run programs either from a REPL, or using

```sh
python <filename>.py
```

You can pass additional arguments and options when you do so, like this:

```sh
python <filename>.py <argument1>
python <filename>.py <argument1> <argument2>
```

A basic way to handle those arguments is to use the `sys` module from the standard library.

You can get the arguments passed in the `sys.argv` list:

```python
import sys
print(len(sys.argv))
print(sys.argv)
```

The `sys.argv` list contains as the first item the name of the file that was run, for example `['main.py']`.

This is a simple way, but you have to do a lot of work. You need to validate arguments, make sure their type is correct, and you need to print feedback to the user if they are not using the program correctly.

Python provides another package in the standard library to help you: `argparse`.

First you import `argparse` and you call `argparse.ArgumentParser()`, passing the description of your program:

```python
import argparse

parser = argparse.ArgumentParser(
    description='This program prints the name of my dogs'
)
```

Then you proceed to add arguments you want to accept.  
For example in this program we accept a `-c` option to pass a color, like this: `python program.py -c red`

```python
import argparse

parser = argparse.ArgumentParser(
    description='This program prints a color HEX value'
)

parser.add_argument('-c', '--color', metavar='color', required=True, help='the color to search for')

args = parser.parse_args()

print(args.color) # 'red'
```

If the argument is not specified, the program raises an error:

```
➜  python python program.py
usage: program.py [-h] -c color
program.py: error: the following arguments are required: -c
```

You can set an option to have a specific set of values, using `choices`:

```python
parser.add_argument('-c', '--color', metavar='color', required=True, choices={'red','yellow'}, help='the color to search for')
```

```
➜  python python program.py -c blue
usage: program.py [-h] -c color
program.py: error: argument -c/--color: invalid choice: 'blue' (choose from 'yellow', 'red')
```

There are more options, but those are the basics.

And there are community packages that provide this functionality, too, like [Click](https://click.palletsprojects.com/en/7.x/) and [Python Prompt Toolkit](https://python-prompt-toolkit.readthedocs.io/en/master/index.html).

## Lambda Functions in Python

Lambda functions (also called anonymous functions) are tiny functions that have no name and only have one expression as their body.

In Python they are defined using the `lambda` keyword:

```python
lambda <arguments> : <expression>
```

The body must be a single expression - an expression, not a statement.

> This difference is important. An expression returns a value, a statement does not.

The simplest example of a lambda function is a function that doubles the value of a number:

```python
lambda num : num * 2
```

Lambda functions can accept more arguments:

```python
lambda a, b : a * b
```

Lambda functions cannot be invoked directly, but you can assign them to variables:

```python
multiply = lambda a, b : a * b

print(multiply(2, 2)) # 4
```

The utility of lambda functions comes when combined with other Python functionality, for example in combination with `map()`, `filter()` and `reduce()`.

## Recursion in Python

A function in Python can call itself. That's what recursion is. And it can be pretty useful in many scenarios.

The common way to explain recursion is by using the factorial calculation.

The factorial of a number is the number `n` mutiplied by `n-1`, multiplied by `n-2`... and so on, until reaching the number `1`:

```
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
```

Using recursion we can write a function that calculates the factorial of any number:

```python
def factorial(n):
    if n == 1: return 1
    return n * factorial(n-1)

print(factorial(3)) #   6
print(factorial(4)) #  24
print(factorial(5)) # 120
```

If inside the `factorial()` function you call `factorial(n)` instead of `factorial(n-1)`, you are going to cause an infinite recursion. Python by default will halt recursions at 1000 calls, and when this limit is reached, you will get a `RecursionError` error.

Recursion is helpful in many places, and it helps us simplify our code when there's no other optimal way to do it, so it's good to know this technique.

## Nested Functions in Python

Functions in Python can be nested inside other functions.

A function defined inside a function is visible only inside that function.

This is useful to create utilities that are useful to a function, but not useful outside of it.

You might ask: why should I be "hiding" this function, if it does no harm?

One, because it's always best to hide functionality that's local to a function, and is not useful elsewhere.

Also, because we can make use of closures (more on this later).

Here is an example:

```python
def talk(phrase):
    def say(word):
        print(word)

    words = phrase.split(' ')
    for word in words:
        say(word)

talk('I am going to buy the milk')
```

If you want to access a variable defined in the outer function from the inner function, you first need to declare it as `nonlocal`:

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

This is useful especially with closures, as we'll see next.

## Closures in Python

If you return a nested function from a function, that nested function has access to the variables defined in that function, even if that function is not active any more.

Here is a simple counter example.

```python
def counter():
    count = 0

    def increment():
        nonlocal count
        count = count + 1
        return count

    return increment

increment = counter()

print(increment()) # 1
print(increment()) # 2
print(increment()) # 3
```

We return the `increment()` inner function, and that still has access to the state of the `count` variable even though the `counter()` function has ended.

## Decorators in Python

Decorators are a way to change, enhance, or alter in any way how a function works.

Decorators are defined with the `@` symbol followed by the decorator name, just before the function definition.

Example:

```python
@logtime
def hello():
    print('hello!')
```

This `hello` function has the `logtime` decorator assigned.

Whenever we call `hello()`, the decorator is going to be called.

A decorator is a function that takes a function as a parameter, wraps the function in an inner function that performs the job it has to do, and returns that inner function. In other words:

```python
def logtime(func):
    def wrapper():
        # do something before
        val = func()
        # do something after
        return val
    return wrapper
```

## Docstrings in Python

Documentation is hugely important, not just to communicate to other people what the goal of a function/class/method/module is, but it also communicates it to yourself.

When you come back to your code 6 or 12 months from now, you might not remember all the knowledge you are holding in your head. At that point, reading your code and understanding what it is supposed to do will be much more difficult.

Comments are one way to help yourself (and others) out:

```python
# this is a comment

num = 1 #this is another comment
```

Another way is to use **docstrings**.

The utility of docstrings is that they follow conventions. As such they can be processed automatically.

This is how you define a docstring for a function:

```python
def increment(n):
    """Increment a number"""
    return n + 1
```

This is how you define a docstring for a class and a method:

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

Document a module by placing a docstring at the top of the file, for example supposing this is `dog.py`:

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

Docstrings can span multiple lines:

```python
def increment(n):
    """Increment
    a number
    """
    return n + 1
```

Python will process those and you can use the `help()` global function to get the documentation for a class/method/function/module.

For example calling `help(increment)` will give you this:

```
Help on function increment in module
__main__:

increment(n)
    Increment
    a number
```

There are many different standards to format docstrings, and you can choose to adhere to your favorite one.

I like Google's standard: [https://github.com/google/styleguide/blob/gh-pages/pyguide.md#38-comments-and-docstrings](https://github.com/google/styleguide/blob/gh-pages/pyguide.md#38-comments-and-docstrings)

Standards allow to have tools to extract docstrings and automatically generate documentation for your code.

## Introspection in Python

Functions, variables, and objects can be analyzed using **introspection**.

First, using the `help()` global function we can get the documentation if provided in form of docstrings.

Then, you can use print() to get information about a function:

```python
def increment(n):
    return n + 1

print(increment)

# <function increment at 0x7f420e2973a0>
```

or an object:

```python
class Dog():
    def bark(self):
        print('WOF!')

roger = Dog()

print(roger)

# <__main__.Dog object at 0x7f42099d3340>
```

The `type()` function gives us the type of an object:

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

The `dir()` global function lets us find out all the methods and attributes of an object:

```python
print(dir(roger))

# ['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'bark']
```

The `id()` global function shows us the location in memory of any object:

```python
print(id(roger)) # 140227518093024
print(id(1))     # 140227521172384
```

It can be useful to check if two variables point to the same object.

The `inspect` standard library module gives us more tools to get information about objects, and you can check it out here: [https://docs.python.org/3/library/inspect.html](https://docs.python.org/3/library/inspect.html)

## Annotations in Python

Python is dynamically typed. We do not have to specify the type of a variable or function parameter, or a function return value.

Annotations allow us to (optionally) do that.

This is a function without annotations:

```python
def increment(n):
    return n + 1
```

This is the same function with annotations:

```python
def increment(n: int) -> int:
    return n + 1
```

You can also annotate variables:

```python
count: int = 0
```

Python will ignore those annotations. A separate tool called [`mypy`](http://mypy-lang.org/) can be run standalone, or integrated by IDE like VS Code or PyCharm to automatically check for type errors statically, while you are coding. It will also help you catch type mismatch bugs before even running the code.

A great help especially when your software becomes large and you need to refactor your code.

## Exceptions in Python

It's important to have a way to handle errors, and Python gives us exception handling to do so.

If you wrap lines of code into a `try:` block:

```python
try:
    # some lines of code
```

If an error occurs, Python will alert you and you can determine which kind of error occurred using a `except` blocks:

```python
try:
    # some lines of code
except <ERROR1>:
    # handler <ERROR1>
except <ERROR2>:
    # handler <ERROR2>
```

To catch all exceptions you can use `except` without any error type:

```python
try:
    # some lines of code
except <ERROR1>:
    # handler <ERROR1>
except:
    # catch all other exceptions
```

The `else` block is run if no exceptions were found:

```python
try:
    # some lines of code
except <ERROR1>:
    # handler <ERROR1>
except <ERROR2>:
    # handler <ERROR2>
else:
    # no exceptions were raised, the code ran successfully
```

A `finally` block lets you perform some operation in any case, regardless of whether an error occurred or not:

```python
try:
    # some lines of code
except <ERROR1>:
    # handler <ERROR1>
except <ERROR2>:
    # handler <ERROR2>
else:
    # no exceptions were raised, the code ran successfully
finally:
    # do something in any case
```

The specific error that's going to occur depends on the operation you're performing.

For example if you are reading a file, you might get an `EOFError`. If you divide a number by zero you will get a `ZeroDivisionError`. If you have a type conversion issue you might get a `TypeError`.

Try this code:

```python
result = 2 / 0
print(result)
```

The program will terminate with an error:

```
Traceback (most recent call last):
  File "main.py", line 1, in <module>
    result = 2 / 0
ZeroDivisionError: division by zero
```

and the lines of code after the error will not be executed.

Adding that operation in a `try:` block lets us recover gracefully and move on with the program:

```python
try:
    result = 2 / 0
except ZeroDivisionError:
    print('Cannot divide by zero!')
finally:
    result = 1

print(result) # 1
```

You can raise exceptions in your own code, too, using the `raise` statement:

```python
raise Exception('An error occurred!')
```

This raises a general exception, and you can intercept it using:

```python
try:
    raise Exception('An error occurred!')
except Exception as error:
    print(error)
```

You can also define your own exception class, extending from Exception:

```python
class DogNotFoundException(Exception):
    pass
```

> `pass` here means "nothing" and we must use it when we define a class without methods, or a function without code, too.

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
