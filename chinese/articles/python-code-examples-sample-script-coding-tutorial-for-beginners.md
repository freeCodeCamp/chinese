> -  原文地址：[Python Code Examples – Sample Script Coding Tutorial for Beginners](https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/)
> -  原文作者：[Estefania Cassingena NavoneEstefania Cassingena Navone](https://www.freecodecamp.org/news/author/estefaniacn/)
> -  译者：ywxgod
> -  校对者：

![Python 代码示例——面向初学者的示例脚本编程教程](https://www.freecodecamp.org/news/content/images/size/w2000/2020/11/Code-Examples-Image.png)

Hi! 欢迎。您是否正在学习 Python，如果是的，那这篇文章就是为您而准备的，在文中你将会找到 Python 语法的详尽描述以及大量的 Python 代码示例，它将会指导你的 Python 编程之旅。

### 涵盖的内容

-   [Python 中的变量定义](#-variable-definitions-in-python)
-   [Python 中的 Hello, World!](#-hello-world-program-in-python)
-   [Python 中的数据类型和内建数据结构](#-data-types-and-built-in-data-structures-in-python)
-   [Python 中的运算符](#-python-operators)
-   [Python 中的条件语句](#-conditionals-in-python)
-   [Python 中的 for 循环](#-for-loops-in-python)
-   [Python 中 while 循环](#-while-loops-in-python)
-   [Python 中的循环嵌套](#-nested-loops-in-python)
-   [Python 中的函数](#-functions-in-python)
-   [Python 中的递归](#-recursion-in-python)
-   [Python 中的异常处理](#-exception-handling-in-python)
-   [Python 中的面向对象编程](#-object-oriented-programming-in-python)
-   [Python 中如何处理文件](#-how-to-work-with-files-in-python)
-   [Python 中的导入(import)语句](#-import-statements-in-python)
-   [Python 的列表(List)和字典(Dict)推导](#-list-and-dictionary-comprehension-in-python)
-   ...

准备好了吗？让我们开始吧！🔅

💡 **提示：** 在文章中, 我会用`<>`表示这一整块会被其中间的文本描述的元素所取代。例如，`<var>`表示我们写代码时，它会被一个变量所替换。

## 🔹 Python 中的变量定义

变量的概念都是任何编程语言中的一个最基本的构件, 变量有一个名称和一个内存中用于存储其值得位置。

在 Python 中，我们使用这种语法来创建一个变量并为这个变量赋值：

```Python
<var_name> = <value>
```

例如：

```
age = 56
```

```
name = "Nora"
```

```
color = "Blue"
```

```
grades = [67, 100, 87, 56]
```

如果变量名不止一个单词, 在[Python 代码的风格指南](https://www.python.org/dev/peps/pep-0008/)中的建议是要用下划线将单词分开，“根据需要提高代码的可读性”。

例如：

```
my_list = [1, 2, 3, 4, 5]
```

💡 **提示：** Python 代码风格指南(PEP 8)有很好的建议，你应该遵循这些建议来编写整洁的 Python 代码。

## 🔸 Hello, World!

在我们开始深入了解 Python 的数据类型与数据结构之前，让我们看看如何编写第一个 Python 程序。

你只需要调用`print()`函数，并且在括号里写上`"Hello, World!"`即可：

```python
print("Hello, World!")
```

程序执行后，你会看到下面的信息:

```
"Hello, World!"
```

💡 **提示：** 写一个`"Hello, World!"`程序是开发者社区的一个传统。大多数开发者都是从编写这个程序开始学习编程的。

很好，你刚刚写了你的第一个 Python 程序。 现在让我们开始学习 Python 中的数据类型和内建的数据结构。

## 🔹 Python 中的数据类型与内建数据结构

我们有几种基本的数据类型和内建的数据结构可以使用，每一个都有各自特殊的应用场景，让我们来看看具体的使用细节。

### Python 中的数字类型：整数(Integers)，浮点数(Floats)，复数(Complex)

Python 可以使用的数字类型有下面几种：

#### 整数

整数就是没有小数的数字，你可以用`type()`函数来检查一个数字是否是一个整数。如果`type()`函数的输出是`<class 'int'>`，则说明这个数字是一个整数。

例如：

```python
>>> type(1)
<class 'int'>

>>> type(15)
<class 'int'>

>>> type(0)
<class 'int'>

>>> type(-46)
<class 'int'>
```

#### 浮点数

浮点数就是带有小数的数字，你可以通过定位小数点来直观的检测他们。如果我们用`type()`来检测这些值得类型，你会看到下面这样的输出:

```
<class 'float'>
```

一些例子：

```python
>>> type(4.5)
<class 'float'>

>>> type(5.8)
<class 'float'>

>>> type(2342423424.3)
<class 'float'>

>>> type(4.0)
<class 'float'>

>>> type(0.0)
<class 'float'>

>>> type(-23.5)
<class 'float'>
```

#### 复数

复数有一个实部和一个带有`j`的虚部。 你可以通过`complex()`来创建复数。`complex()`的第一个参数是实部，第二个参数是虚部。

一些例子：

```python
>>> complex(4, 5)
(4+5j)

>>> complex(6, 8)
(6+8j)

>>> complex(3.4, 3.4)
(3.4+3.4j)

>>> complex(0, 0)
0j

>>> complex(5)
(5+0j)

>>> complex(0, 4)
4j
```

### Python 中的字符串

Python 中的字符串非常有用，它们包含一连串的字符，通常用于表示代码中的文本。

例如:

```
"Hello, World!"
```

```
'Hello, World!'
```

我们可以使用单引号`''`或双引号`""`来定义一个字符串。不管哪一种，它们都是有效的、等同的定义，但在程序中你应该始终保持选择其中的一种。

**💡 提示：** 是的！你在写`"Hello, World!"`程序的时候就已经使用过字符串了。无论何时，当你在 Python 中看到一个被单引号或双引号包围的值时，那它就是一个字符串。

字符串可以包含我们从键盘上输入的任何字符，包括数字、符号和其他特殊字符。

例如：

```
"45678"
```

```
"my_email@email.com"
```

```
"#IlovePython"
```

**💡 提示：** 空格也被算作字符串中的字符。

#### 字符串中的引号

如果我们用双引号`""`定义字符串，那我们可以在字符串中使用单引号。例如：

```
"I'm 20 years old"
```

如果我们使用单引号`''`定义字符串，那我们可以在字符串中使用双引号。例如：

```
'My favorite book is "Sense and Sensibility"'
```

#### 字符串索引

Python 程序中我们可以使用索引来访问字符串中的字符。索引是一个整数，表示字符串中的一个特定位置。

下面是字符串`"Hello"`的图示:

```
String:  H e l l o
Index:   0 1 2 3 4
```

**💡 提示：** 索引从`0`开始，每向右增加一个字符，就增加`1`。

例如：

```python
>>> my_string = "Hello"

>>> my_string[0]
'H'

>>> my_string[1]
'e'

>>> my_string[2]
'l'

>>> my_string[3]
'l'

>>> my_string[4]
'o'
```

我们还可以用负的索引来访问字符串中字符:

```python
>>> my_string = "Hello"

>>> my_string[-1]
'o'

>>> my_string[-2]
'l'

>>> my_string[-3]
'l'

>>> my_string[-4]
'e'

>>> my_string[-5]
'H'
```

**💡 提示：** 通常用`-1`来访问字符串中的最后一个字符。

#### 字符串切片

我们可能需要获取字符串的切片或其子集。我们可以使用字符串切片来实现。

切片的一般语法:

```python
<string_variable>[start:stop:step]
```

`start`是切片中第一个字符的索引，默认值是`0`。

-   `stop`是切片的最后一个字符的索引(这个字符**并不**包含在切片中)，默认值是字符串中的最后一个字符(如果我们省略这个值，最后一个字符也将被包含在内)。
-   `step`是我们从当前索引到下一个索引所要增加的数量。

我们可以指定两个参数，然后第三个参数`step`使用默认值`1`，这样就会获取到`start`到`stop`(不包含)之间的所有字符：

```python
<string_variable>[start:stop]
```

例如:

```python
>>> freecodecamp = "freeCodeCamp"

>>> freecodecamp[2:8]
'eeCode'

>>> freecodecamp[0:3]
'fre'

>>> freecodecamp[0:4]
'free'

>>> freecodecamp[4:7]
'Cod'

>>> freecodecamp[4:8]
'Code'

>>> freecodecamp[8:11]
'Cam'

>>> freecodecamp[8:12]
'Camp'

>>> freecodecamp[8:13]
'Camp'
```

**💡 提示：** 注意，如果某个参数值超出了索引的范围, 并不会影响切片的展示。这就是 Python 的发明者在考虑如何实现字符串切片功能时所考虑到的。

如果我们给`step`赋值, 我们将会根据这个值从一个索引"跳到"另一个索引.

例如:

```python
>>> freecodecamp = "freeCodeCamp"

>>> freecodecamp[0:9:2]
'feCdC'

>>> freecodecamp[2:10:3]
'eoC'

>>> freecodecamp[1:12:4]
'roa'

>>> freecodecamp[4:8:2]
'Cd'

>>> freecodecamp[3:9:2]
'eoe'

>>> freecodecamp[1:10:5]
'rd'
```

我们还可以用一个**负的**step 值来从右向左取值:

```python
>>> freecodecamp = "freeCodeCamp"

>>> freecodecamp[10:2:-1]
'maCedoCe'

>>> freecodecamp[11:4:-2]
'paeo'

>>> freecodecamp[5:2:-4]
'o'
```

并且我们可以省略任意一个参数而使用其默认值。如果我们省略`start`，`stop`，或者两者，那么我们只需要一个对应的冒号(`:`)：

```python
>>> freecodecamp = "freeCodeCamp"

# Default start and step
>>> freecodecamp[:8]
'freeCode'

# Default end and step
>>> freecodecamp[4:]
'CodeCamp'

# Default start
>>> freecodecamp[:8:2]
'feCd'

# Default stop
>>> freecodecamp[4::3]
'Cem'

# Default start and stop
>>> freecodecamp[::-2]
'paeoer'

# Default start and stop
>>> freecodecamp[::-1]
'pmaCedoCeerf'
```

**💡 提示：** 最后的一个是最常用的反转字符串的例子。

#### f-字符串

在 Python 3.6 或以上版本中，我们可以是使用一种被称为 f-string 的字符串，它能帮助我们处理字符串格式化更加方便。

定义一个 f-string，我们只需要将字符`f`放到单引号或双引号的前面，然后在字符串里面，我们将变量或者表达式用`{}`包含起来。当程序执行的时候，他们会被替换为变量或者表达式的值。

例如:

```python
first_name = "Nora"
favorite_language = "Python"

print(f"Hi, I'm {first_name}. I'm learning {favorite_language}.")
```

The output is:

```
Hi, I'm Nora. I'm learning Python.
```

下面我们有一个例子，展示了计算一个表达式的值并将结果替换到字符串中。

```python
value = 5

print(f"{value} multiplied by 2 is: {value * 2}")
```

它们的值在输出中被替换:

```python
5 multiplied by 2 is: 10
```

我们还可以在大括号中调用方法，当程序执行后，返回的值会替换掉原字符串中的函数调用:

```python
freecodecamp = "FREECODECAMP"

print(f"{freecodecamp.lower()}")
```

输出:

```python
freecodecamp
```

#### 字符串方法

字符串的方法，都是被 Python 开发者实现的一些常见的功能，所以我们可以在代码中直接使用它们。这些字符串方法对执行一些常见的操作非常有用。

下面是调用字符串方法的一般语法：

```python
<string_variable>.<method_name>(<arguments>)
```

例如：

```python
>>> freecodecamp = "freeCodeCamp"

>>> freecodecamp.capitalize()
'Freecodecamp'

>>> freecodecamp.count("C")
2

>>> freecodecamp.find("e")
2

>>> freecodecamp.index("p")
11

>>> freecodecamp.isalnum()
True

>>> freecodecamp.isalpha()
True

>>> freecodecamp.isdecimal()
False

>>> freecodecamp.isdigit()
False

>>> freecodecamp.isidentifier()
True

>>> freecodecamp.islower()
False

>>> freecodecamp.isnumeric()
False

>>> freecodecamp.isprintable()
True

>>> freecodecamp.isspace()
False

>>> freecodecamp.istitle()
False

>>> freecodecamp.isupper()
False

>>> freecodecamp.lower()
'freecodecamp'

>>> freecodecamp.lstrip("f")
'reeCodeCamp'

>>> freecodecamp.rstrip("p")
'freeCodeCam'

>>> freecodecamp.replace("e", "a")
'fraaCodaCamp'

>>> freecodecamp.split("C")
['free', 'ode', 'amp']

>>> freecodecamp.swapcase()
'FREEcODEcAMP'

>>> freecodecamp.title()
'Freecodecamp'

>>> freecodecamp.upper()
'FREECODECAMP'
```

想了解更多 Python 方法，建议去 Python 官方网站阅读[这篇](https://docs.python.org/3/library/stdtypes.html#string-methods)。

💡 **提示：** 所有字符串方法返回的都是一个字符串的副本。它们不会对原始字符串做修改，因为在 Python 中字符串时不可修改的.

### Python 中的布尔类型

Python 中布尔类型的值就只有`True`和`False`。它们必须已大写字母开头，这样 Python 才能识别到是布尔类型的值。

例如:

```python
>>> type(True)
<class 'bool'>

>>> type(False)
<class 'bool'>
```

如果写成了小写，会报错：

```python
>>> type(true)
Traceback (most recent call last):
  File "<pyshell#92>", line 1, in <module>
    type(true)
NameError: name 'true' is not defined

>>> type(false)
Traceback (most recent call last):
  File "<pyshell#93>", line 1, in <module>
    type(false)
NameError: name 'false' is not defined
```

### Python 中的列表

到此我们已经说完了 Python 的基本数据类型，现在我们来看看内置的数据结构。首先，来看列表。

定义列表, 我们要用中括号`[]`，然后中括号里面是用逗号分隔的元素。

**💡 提示：** 建议在每个逗号后面加一个空格，以增加代码的可读性。

例如，下面是一些列表的例子：

```
[1, 2, 3, 4, 5]
```

```
["a", "b", "c", "d"]
```

```
[3.4, 2.4, 2.6, 3.5]
```

列表可以包含不同类型的数据，所以下面是一个合法的列表:

```
[1, "Emily", 3.4]
```

我们还可以将一个列表赋值给一个变量:

```python
my_list = [1, 2, 3, 4, 5]
```

```python
letters = ["a", "b", "c", "d"]
```

#### 列表嵌套

列表可以包含任何类型的数据，甚至包含其他的列表。 这些被包含在内部的列表叫做**嵌套列表**。

```python
[[1, 2, 3], [4, 5, 6]]
```

上面的例子, `[1, 2, 3]`与`[4, 5, 6]`是两个嵌套的列表.

再看看另外一个有效的例子:

```python
[["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]]
```

```python
[1, [2, 3, 4], [5, 6, 7], 3.4]
```

我们可以使用相应的索引来访问嵌套的列表：

```python
>>> my_list = [[1, 2, 3], [4, 5, 6]]

>>> my_list[0]
[1, 2, 3]

>>> my_list[1]
[4, 5, 6]
```

嵌套列表可以用于表示简单 2D 游戏板的结构，其中每个数字可以表示不同的元素或图块:

```python
# Sample Board where: 
# 0 = Empty tile
# 1 = Coin
# 2 = Enemy
# 3 = Goal
board = [[0, 0, 1],
         [0, 2, 0],
         [1, 0, 3]]
```

#### 列表的长度

我们可以用`len()`方法来获取列表的长度(包含的元素的个数)。

例如:

```python
>>> my_list = [1, 2, 3, 4]

>>> len(my_list)
4
```

#### 更新列表中的元素

更新列表中某个索引出的值，可以用下面的语法：

```python
<list_variable>[<index>] = <value>
```

例如:

```python
>>> letters = ["a", "b", "c", "d"]

>>> letters[0] = "z"

>>> letters
['z', 'b', 'c', 'd']
```

#### 向列表中添加一个值

我们可以用`.append()`方法向列表的尾部添加一个值。

例如：

```python
>>> my_list = [1, 2, 3, 4]

>>> my_list.append(5)

>>> my_list
[1, 2, 3, 4, 5]
```

#### 从列表中删除一个值

我们可以使用`.remove()`方法从列表中删除一个值。

例如：

```python
>>> my_list = [1, 2, 3, 4]

>>> my_list.remove(3)

>>> my_list
[1, 2, 4]
```

💡 **提示：** 这个方法只会删除找到的第一个元素。例如，假设我们想从列表中删除数字 3，但列表中包含两个 3，那么第二个 3 将不会被删除。

```python
>>> my_list = [1, 2, 3, 3, 4]

>>> my_list.remove(3)

>>> my_list
[1, 2, 3, 4]
```

#### 列表索引

列表索引跟字符串的索引一样，也是从`0`开始的：

```python
>>> letters = ["a", "b", "c", "d"]

>>> letters[0]
'a'

>>> letters[1]
'b'

>>> letters[2]
'c'

>>> letters[3]
'd'
```

#### 列表切片

我们还可以使用跟字符串切片相同的语法来处理列表的切片，包括省略参数来使用索引的默认值。现在，我们要做的是向列表中添加元素，而不是像字符串切片中添加字符了。

```python
<list_variable>[start:stop:step]
```

例如:

```python
>>> my_list = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]

>>> my_list[2:6:2]
['c', 'e']

>>> my_list[2:8]
['c', 'd', 'e', 'f', 'g', 'h']

>>> my_list[1:10]
['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

>>> my_list[4:8:2]
['e', 'g']

>>> my_list[::-1]
['i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']

>>> my_list[::-2]
['i', 'g', 'e', 'c', 'a']

>>> my_list[8:1:-1]
['i', 'h', 'g', 'f', 'e', 'd', 'c']
```

#### 列表方法

Python 同样也实现了一些常用的列表方法，供我们处理一些常用的操作。下面是一些常用列表方法的使用示例：

```python
>>> my_list = [1, 2, 3, 3, 4]

>>> my_list.append(5)
>>> my_list
[1, 2, 3, 3, 4, 5]

>>> my_list.extend([6, 7, 8])
>>> my_list
[1, 2, 3, 3, 4, 5, 6, 7, 8]

>>> my_list.insert(2, 15)
>>> my_list
[1, 2, 15, 3, 3, 4, 5, 6, 7, 8, 2, 2]

>>> my_list.remove(2)
>>> my_list
[1, 15, 3, 3, 4, 5, 6, 7, 8, 2, 2]

>>> my_list.pop()
2

>>> my_list.index(6)
6

>>> my_list.count(2)
1

>>> my_list.sort()
>>> my_list
[1, 2, 3, 3, 4, 5, 6, 7, 8, 15]

>>> my_list.reverse()
>>> my_list
[15, 8, 7, 6, 5, 4, 3, 3, 2, 1]

>>> my_list.clear()
>>> my_list
[]
```

想了解更多列表方法，建议去 Python 官网阅读[这篇](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)。

### Python 中的元组

定义元组，我们使用小括号`()`，然后小括号里面的元素用逗号分隔。建议在每个逗号后面加一个空格，以增加代码的可读性。

```python
(1, 2, 3, 4, 5)
```

```python
("a", "b", "c", "d")
```

```python
(3.4, 2.4, 2.6, 3.5)
```

我们可以将元组赋值给一个变量：

```python
my_tuple = (1, 2, 3, 4, 5)
```

#### 元组的索引

我们可以通过元组的索引来访问它的元素：

```python
>>> my_tuple = (1, 2, 3, 4)

>>> my_tuple[0]
1

>>> my_tuple[1]
2

>>> my_tuple[2]
3

>>> my_tuple[3]
4
```

我们同样可以使用负的索引：

```python
>>> my_tuple = (1, 2, 3, 4)

>>> my_tuple[-1]
4

>>> my_tuple[-2]
3

>>> my_tuple[-3]
2

>>> my_tuple[-4]
1
```

#### 元组长度

为了获取元组的长度，我们可以将元组本身传入`len()`函数：

```python
>>> my_tuple = (1, 2, 3, 4)

>>> len(my_tuple)
4
```

#### 嵌套元组

元组可以包含任意数据类型，包括列表和其他的元组。这些包含在里面的元组被称为**嵌套元组**.

```python
([1, 2, 3], (4, 5, 6))
```

下面的例子, 我们有一个被嵌套的元组`(4, 5, 6)`和一个列表。你可以通过他们相应的索引来访问它们。

例如:

```python
>>> my_tuple = ([1, 2, 3], (4, 5, 6))

>>> my_tuple[0]
[1, 2, 3]

>>> my_tuple[1]
(4, 5, 6)
```

#### 元组切片

对元组进行切片操作，就像列表和字符串一样，都是相同的原理与规则。

下面是一般的语法：

```python
<tuple_variable>[start:stop:step]
```

例如：

```python
>>> my_tuple = (4, 5, 6, 7, 8, 9, 10)

>>> my_tuple[3:8]
(7, 8, 9, 10)

>>> my_tuple[2:9:2]
(6, 8, 10)

>>> my_tuple[:8]
(4, 5, 6, 7, 8, 9, 10)

>>> my_tuple[:6]
(4, 5, 6, 7, 8, 9)

>>> my_tuple[:4]
(4, 5, 6, 7)

>>> my_tuple[3:]
(7, 8, 9, 10)

>>> my_tuple[2:5:2]
(6, 8)

>>> my_tuple[::2]
(4, 6, 8, 10)

>>> my_tuple[::-1]
(10, 9, 8, 7, 6, 5, 4)

>>> my_tuple[4:1:-1]
(8, 7, 6)
```

#### 元组方法

元组有两个内建的方法：

```python
>>> my_tuple = (4, 4, 5, 6, 6, 7, 8, 9, 10)

>>> my_tuple.count(6)
2

>>> my_tuple.index(7)
5
```

💡 **提示：** 元组是不可变的，不可被修改，所以我们不能向元组中添加、更新、删除元素。如果你确实需要修改元组的元素，我们可以将其复制一份。

#### 元组解包

Python 中有一个很酷的功能叫做元组解包。 利用解包操作，我们可以在一行同时向多个变量赋值。

这些值会根据其出现的顺序被赋给相对应的变量。例如，`a, b = 1, 2`中的值`1`会被赋给变量`a`，`2`会被赋给变量`b`。

例如:

```python
# Tuple Assignment
>>> a, b = 1, 2

>>> a
1

>>> b
2
```

**💡 提示：** 元组解包常被用于交换两个变量的值：

```python
>>> a = 1

>>> b = 2

# Swap the values
>>> a, b = b, a

>>> a
2

>>> b
1
```

### Python 中的字典

现在让我们开始深入字典类型。字典类型允许我们创建值对，一个值关联另外一个值。

定义字典, 我们通常使用大括号`{}`，大括号里面是用逗号分隔的键-值对。

键与值之间用冒号`:`分隔，像这样：

```python
{"a": 1, "b": 2, "c"; 3}
```

你可以将字典赋给一个变量：

```python
my_dict = {"a": 1, "b": 2, "c"; 3}
```

字典的键必须是一种不可变的数据类型。例如，它们可以是字符串、数字和元组，但不能是列表，因为列表时可变的类型。

-   字符串类型的键: `{"City 1": 456, "City 2": 577, "City 3": 678}`
-   数字类型的键: `{1: "Move Left", 2: "Move Right", 3: "Move Up", 4: "Move Down"}`
-   元组类型的键: `{(0, 0): "Start", (2, 4): "Goal"}`

字典的值可以是任意数据类型，所以它可以被赋值为字符串、数字、列表、元组、集合，甚至其他字典也可以作为它的值。下面是一些例子：

```
{"product_id": 4556, "ingredients": ["tomato", "cheese", "mushrooms"], "price": 10.67}
```

```python
{"product_id": 4556, "ingredients": ("tomato", "cheese", "mushrooms"), "price": 10.67}
```

```python
{"id": 567, "name": "Emily", "grades": {"Mathematics": 80, "Biology": 74, "English": 97}}
```

#### 字典的长度

我们可以调用`len()`方法来获取键-值对的个数：

```python
>>> my_dict = {"a": 1, "b": 2, "c": 3, "d": 4}

>>> len(my_dict)
4
```

#### 从字典中获取一个值

要从字典中获取一个，我们可以利用它的键，语法如下：

```python
<variable_with_dictionary>[<key>]
```

上面的表达式将会被 key(键)对应的值所替换。

例如：

```python
my_dict = {"a": 1, "b": 2, "c": 3, "d": 4}

print(my_dict["a"])
```

输出的是`"a"`关联的值：

```
1
```

#### 更新字典中的一个值

要更新一个已存在的键对应的值，跟获取键的值类似，只是我们需要在后面增加一个值的赋值操作：

```python
<variable_with_dictionary>[<key>] = <value>
```

例如：

```
>>> my_dict = {"a": 1, "b": 2, "c": 3, "d": 4}

>>> my_dict["b"] = 6
```

现在字典是这样子了:

```python
{'a': 1, 'b': 6, 'c': 3, 'd': 4}
```

#### 向字典中增加一个键-值对

字典的键需要是唯一的。要添加键值对，我们可以使用跟更新值相同的语法，不过只是使用一个新的键而已。

```python
<variable_with_dictionary>[<new_key>] = <value>
```

例如：

```python
>>> my_dict = {"a": 1, "b": 2, "c": 3, "d": 4}

>>> my_dict["e"] = 5
```

现在我们的字典有了一个新的键-值对：

```python
{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
```

#### 从字典中删除键-值对

我们可以使用`del`语句来删除字典中的键-值对：

```python
del <dictionary_variable>[<key>]
```

例如：

```python
>>> my_dict = {"a": 1, "b": 2, "c": 3, "d": 4}

>>> del my_dict["c"]
```

现在的字典如下：

```python
{'a': 1, 'b': 2, 'd': 4}
```

#### 字典的方法

下面是一些字典常用方法的使用示例：

```python
>>> my_dict = {"a": 1, "b": 2, "c": 3, "d": 4}

>>> my_dict.get("c")
3

>>> my_dict.items()
dict_items([('a', 1), ('b', 2), ('c', 3), ('d', 4)])

>>> my_dict.keys()
dict_keys(['a', 'b', 'c', 'd'])

>>> my_dict.pop("d")
4

>>> my_dict.popitem()
('c', 3)

>>> my_dict.setdefault("a", 15)
1

>>> my_dict
{'a': 1, 'b': 2}

>>> my_dict.setdefault("f", 25)
25

>>> my_dict
{'a': 1, 'b': 2, 'f': 25}

>>> my_dict.update({"c": 3, "d": 4, "e": 5})

>>> my_dict.values()
dict_values([1, 2, 25, 3, 4, 5])

>>> my_dict.clear()

>>> my_dict
{}
```

想了解更多字典的方法，建议去 Python 的官网[读这篇](https://docs.python.org/3/library/stdtypes.html#mapping-types-dict)。

## 🔸 Python 中的运算符

很好。 现在我们已经知道了 Python 中的基本数据类型与内建的数据结构，那么接下来我们来深入了解一下 Python 中的运算符，他们对于执行一些操作和构建表达式至关重要。

### Python 中的算法运算符

算术运算符有以下这些：

#### 加法运算: +

```python
>>> 5 + 6
11

>>> 0 + 6
6

>>> 3.4 + 5.7
9.1

>>> "Hello" + ", " + "World"
'Hello, World'

>>> True + False
1
```

💡 **提示：** 最后的两个示例有些奇怪，是吗？运算符的行为会根据操作数类型的不同而不同。

当它们都是字符串的时候，该操作符会将字符串相连，当它们是布尔值时，它将执行一个特定的操作。

在 Python 中，`True`等于`1`，`False`等于`0`。这就是为什么`1 + 0 = 1`的原因。

#### 减法运算: -

```python
>>> 5 - 6
-1

>>> 10 - 3
7

>>> 5 - 6
-1

>>> 4.5 - 5.6 - 2.3
-3.3999999999999995

>>> 4.5 - 7
-2.5

>>> - 7.8 - 6.2
-14.0
```

#### 乘法运算 

```python
>>> 5 * 6
30

>>> 6 * 7
42

>>> 10 * 100
1000

>>> 4 * 0
0

>>> 3.4 *6.8
23.119999999999997

>>> 4 * (-6)
-24

>>> (-6) * (-8)
48

>>> "Hello" * 4
'HelloHelloHelloHello'

>>> "Hello" * 0
''

>>> "Hello" * -1
''
```

**💡 提示：** 你可以用一个数字与一个字符串"相乘"，结果会让字符串重复与相乘的这个数字相同的次数。

#### 指数运算 

```python
>>> 6 ** 8
1679616

>>> 5 ** 2
25

>>> 4 ** 0
1

>>> 16 ** (1/2)
4.0

>>> 16 ** (0.5)
4.0

>>> 125 ** (1/3)
4.999999999999999

>>> 4.5 ** 2.3
31.7971929089206

>>> 3 ** (-1)
0.3333333333333333
```

#### 除法运算: /

```python
>>> 25 / 5
5.0

>>> 3 / 6
0.5

>>> 0 / 5
0.0

>>> 2467 / 4673
0.5279263856195163

>>> 1 / 2
0.5

>>> 4.5 / 3.5
1.2857142857142858

>>> 6 / 7
0.8571428571428571

>>> -3 / -4
0.75

>>> 3 / -4
-0.75

>>> -3 / 4
-0.75
```

💡 **提示：** 该运算会返回一个`float`类型的结果，即时数字的小数部分是`.0`。

如果你尝试除`0`，你将会得到一个`ZeroDivisionError`错误：

```python
>>> 5 / 0
Traceback (most recent call last):
  File "<pyshell#109>", line 1, in <module>
    5 / 0
ZeroDivisionError: division by zero
```

#### 整除运算: //

如果操作数是整数，结果将会是整数。如果操作数是浮点数，结果将会是一个带`.0`的浮点数，因为小数部分会被截断。

```python
>>> 5 // 6
0

>>> 8 // 2
4

>>> -4 // -5
0

>>> -5 // 8
-1

>>> 0 // 5
0

>>> 156773 // 356
440
```

#### 模运算: %

```
>>> 1 % 5
1

>>> 2 % 5
2

>>> 3 % 5
3

>>> 4 % 5
4

>>> 5 % 5
0

>>> 5 % 8
5

>>> 3 % 1
0

>>> 15 % 3
0

>>> 17 % 8
1

>>> 2568 % 4
0

>>> 245 % 15
5

>>> 0 % 6
0

>>> 3.5 % 2.4
1.1

>>> 6.7 % -7.8
-1.0999999999999996

>>> 2.3 % 7.5
2.3
```

#### 比较操作符

有以下几种比较操作:

-   大于: `>`
-   大于等于: `>=`
-   小于: `<`
-   小于等于: `<=`
-   等于: `==`
-   不等于: `!=`

这些比较运算符使表达式的计算结果为`True`或`False`。下面是一些例子：

```
>>> 5 > 6
False

>>> 10 > 8
True

>>> 8 > 8
False

>>> 8 >= 5
True

>>> 8 >= 8
True

>>> 5 < 6
True

>>> 10 < 8
False

>>> 8 < 8
False

>>> 8 <= 5
False

>>> 8 <= 8
True

>>> 8 <= 10
True

>>> 56 == 56
True

>>> 56 == 78
False

>>> 34 != 59
True

>>> 67 != 67
False
```

我们还可以使用它们根据字母顺序来比较字符串：

```python
>>> "Hello" > "World"
False
>>> "Hello" >= "World"
False
>>> "Hello" < "World"
True
>>> "Hello" <= "World"
True
>>> "Hello" == "World"
False
>>> "Hello" != "World"
True
```

我们通常使用它们来比较两个或多个变量的值：

```python
>>> a = 1
>>> b = 2

>>> a < b
True

>>> a <= b
True

>>> a > b
False

>>> a >= b
False

>>> a == b
False

>>> a != b
True
```

💡 **提示：** 注意，比较运算符是`==`，而赋值运算符是`=`。它们的效果是不一样的。`==`返回`True`或`False`而`=`是将值赋值给变量。

#### 链式比较运算符

在 Python 中，我们可以使用被称为“比较运算符链”的功能。这种链接比较可以让我们更简洁的进行多个表达式的比较。

例如，下面的语句时检查`a`是否小于`b`且`b`是否又小于`c`：

```
a < b < c
```

下面是一些例子：

```
>>> a = 1
>>> b = 2
>>> c = 3

>>> a < b < c
True

>>> a > b > c
False

>>> a <= b <= c
True

>>> a >= b >= c
False

>>> a >= b > c
False

>>> a <= b < c
True
```

#### 逻辑运算符

Python 中有三种逻辑运算符：`与`，`或`，与`非`。这些运算符中的每一个都有自己的真值表，它们对于处理条件语句至关重要。

`与`运算:

```python
>>> True and True
True

>>> True and False
False

>>> False and True
False

>>> False and False
False
```

`或`运算:

```python
>>> True or True
True

>>> True or False
True

>>> False or True
True

>>> False or False
False
```

`非`运算:

```python
>>> not True
False

>>> not False
True
```

这些逻辑运算符结合不同的其他运算符或变量，来产生更复杂的表达式：

例如：

```python
>>> a = 6
>>> b = 3

>>> a < 6 or b > 2
True

>>> a >= 3 and b >= 1
True

>>> (a + b) == 9 and b > 1
True

>>> ((a % 3) < 2) and ((a + b) == 3)
False
```

#### 赋值操作符

赋值运算符用于将值赋给一个变量。

赋值运算符有：`=`, `+=`, `-=`, `*=`, `%=`, `/=`, `//=`, `**=`

-   `=` 将值赋给一个变量。
-   其他的运算符对变量的当前值与新值进行运算，并将结果重新赋值给变量。

例如：

```python
>>> x = 3
>>> x
3

>>> x += 15
>>> x
18

>>> x -= 2
>>> x
16

>>> x *= 2
>>> x
32

>>> x %= 5
>>> x
2

>>> x /= 1
>>> x
2.0

>>> x //= 2
>>> x
1.0

>>> x **= 5
>>> x
1.0
```

💡 **提示：** 这些运算符在将结果赋值给变量之前会进行位运算：`&=`，`|=`，`^=`，`>>=`，`<<=`。

#### 成员操作符

你可以运用操作符：`in` and `not in`来检查一个元素是否在一个序列之中。成员操作符的运算结果，要么是`True`要么是`False`。

例如：

```python
>>> 5 in [1, 2, 3, 4, 5]
True

>>> 8 in [1, 2, 3, 4, 5]
False

>>> 5 in (1, 2, 3, 4, 5)
True

>>> 8 in (1, 2, 3, 4, 5)
False

>>> "a" in {"a": 1, "b": 2}
True

>>> "c" in {"a": 1, "b": 2}
False

>>> "h" in "Hello"
False

>>> "H" in "Hello"
True

>>> 5 not in [1, 2, 3, 4, 5]
False

>>> 8 not in (1, 2, 3, 4, 5)
True

>>> "a" not in {"a": 1, "b": 2}
False

>>> "c" not in {"a": 1, "b": 2}
True

>>> "h" not in "Hello"
True

>>> "H" not in "Hello"
False
```

我们通常将它们与存储序列的变量一起使用，比如这个例子：

```python
>>> message = "Hello, World!"

>>> "e" in message
True
```

## 🔹 Python 中的条件语句

现在我们看看如何编写一个条件语句，让它使我们程序中的某些部分根据条件的`True`或`False`来执行(或者不执行)。

### Python 中的`if`语句

`if`语句的基本语法：

```
if <condition>:
    <code>
```

如果条件是`True`，代码就会执行。 相反，如果是`False`，代码不会执行。

**💡 提示：** 第一行结尾有一个冒号(`:`)并且代码块是有缩进的。缩进在 Python 中是必不可少的，它能让代码块属于某个条件的范畴。

下面是一些例子：

#### False 的情况

```
x = 5

if x > 9:
    print("Hello, World!")
```

条件判断是`x > 9`，代码块是`print("Hello, World!")`。

上面的例子, 条件判断结果是`False`，所以不会有输出。

#### True 的情况

看另外一个例子，条件判断结果是`True`：

```
color = "Blue"

if color == "Blue":
    print("This is my favorite color")
```

输出：

```
"This is my favorite color"
```

#### 条件语句后面的代码块

下面的例子中，代码块会在条件判断后执行。注意最后一行代码没有缩进，这就表示它并不属于条件语句的代码块。

```python
x = 5

if x > 9:
    print("Hello!")

print("End")
```

上面的例子中, 判断条件`x > 9`是`False`，所以第一个 print 语句不会执行，但是最后一个 print 语句会被执行，因为它并不属于上面条件语句的代码块，所以最终的输出会是：

```python
End
```

然而，如果条件是`True`，像下面的例子:

```python
x = 15

if x > 9:
    print("Hello!")

print("End")
```

输出：

```
Hello!
End
```

#### 条件语句的例子

条件语句的另外一个例子：

```python
favorite_season = "Summer"

if favorite_season == "Summer":
    print("That is my favorite season too!")
```

输出：

```python
That is my favorite season too!
```

如果我们改变`favorite_season`的值：

```python
favorite_season = "Winter"

if favorite_season == "Summer":
    print("That is my favorite season too!")
```

将不会有输出，因为条件是`False`.

### Python 中的`if/else`语句

如果我们需要指定当条件为`False`时应该做些什么，那么我们可以在条件语句中增加一个`else`字句。

这是一般语法：

```python
if <condition>:
    <code>
else:
    <code>
```

**💡 提示：** 注意上面的两个代码块都有缩进(`if`与`else`)。这些缩进对于 Python 能区分代码块是属于 if 还是 else 语句至关重要。

让我们看一个`else`子语的例子：

#### True 的情况

```python
x = 15

if x > 9:
    print("Hello!")
else:
    print("Bye!")

print("End")
```

输出:

```
Hello!
End
```

当`if`的条件判断是`True`时，if 子句被执行，`else`子句不会执行。

#### False 的情况

这次`else`子句会被执行，因为条件判断是`False`。

```python
x = 5

if x > 9:
    print("Hello!")
else:
    print("Bye!")

print("End")
```

输出:

```
Bye!
End
```

### Python 中的`if/elif/else`语句

为了进一步定制我们的条件语句，我们还可以添加一个或多个`elif`子句，用来处理多个条件判断。 只有第一个条件为`True`的子句会被执行。

**💡 提示：** `elif`必须写在`if`与`else`之间。

#### 第一个条件为 True 的情况

```python
x = 5

if x < 9:
    print("Hello!")
elif x < 15:
    print("It's great to see you")
else:
    print("Bye!")

print("End")
```

这里有两个条件判断`x < 9`与`x < 15`。从上到下，只有第一个条件为`True`的代码块会被执行。

这种情况的输出：

```
Hello!
End
```

因为第一个条件为`True`：`x < 9`。

#### 第二个条件为 True 的情况

如果第一个条件为`False`，接着会检查第二个条件。

下面的例子中，第一个条件`x < 9`是`False`，但是第二个条件`x < 15`是`True`，所以属于第二个条件的代码块会被执行。

```python
x = 13

if x < 9:
    print("Hello!")
elif x < 15:
    print("It's great to see you")
else:
    print("Bye!")

print("End")
```

输出：

```
It's great to see you
End
```

#### 所有条件为 False 的情况

如果所有条件为`False`，然后`else`子句会被执行：

```python
x = 25

if x < 9:
    print("Hello!")
elif x < 15:
    print("It's great to see you")
else:
    print("Bye!")

print("End")
```

输出：

```
Bye!
End
```

#### 多个 elif 子句的情况

我们可以根据需要添加任意多的`elif`子句。下面是一个具有两个`elif`子句的例子：

```python
if favorite_season == "Winter":
    print("That is my favorite season too")
elif favorite_season == "Summer":
    print("Summer is amazing")
elif favorite_season == "Spring":
    print("I love spring")
else:
    print("Fall is my mom's favorite season")
```

每一个条件都会被检查，但只有第一个条件为`True`的代码块会被执行。如果没有为`True`的，`else`子句将会被执行。

## 🔸 Python 中的 for 循环

我们已经了解如何写条件语句, 现在我们来看看 for 循环。 For 循环是一种神奇的代码结构，你可以用它来将代码重复执行你所指定的次数。

Python 中 for 循环基本语法:

```
for <loop_variable> in <iterable>:
    <code>
```

iterable 表示可迭代对象，它可以是一个列表，元组，字典，字符串，range 返回的一个序列，一个文件，或者其他任意的可迭代类型的数据。下面我们就从`range()`开始。

### `range()`函数

这个函数返回一个整数序列，我们可以用它来确定循环的迭代次数。循环对每一个整数执行一次迭代。

**💡 提示：** 每个整数在每次迭代中都会被赋给一个循环变量。

使用`range()`来创建 for 循环的基本语法：

```
for <loop_variable> in range(<start>, <stop>, <step>):
    <code>
```

就像你看到的，range 函数有三个参数：

-   `start`: 整数序列开始的数字，默认值是`0`。
-   `stop`: 整数序列结束的数字(不包含)。
-   `step`: 序列中从当前数字到下一个数字需要增加的值，默认值是`1`。

你可以传 1 个，2 个或 3 个参数给`range()`：

-   1 个参数，它会赋值给`stop`参数，其他两个参数取默认值。
-   2 个参数，会分别赋值给`start`和`stop`参数，`step`取默认值。
-   3 个参数，会根据顺序分别赋值给`start`，`stop`与`step`。

**1 个参数**的例子：

```python
for i in range(5):
    print(i)
```

输出：

```
0
1
2
3
4
```

💡 **提示：** 循环变量会被自动更新。

```python
>>> for j in range(15):
    print(j * 2)
```

输出：

```python
0
2
4
6
8
10
12
14
16
18
20
22
24
26
28
```

下面的例子中，每次迭代我们将字符串重复了跟循环变量值一样多的次数。

```python
>>> for num in range(8):
	print("Hello" * num)
```

输出：

```python
Hello
HelloHello
HelloHelloHello
HelloHelloHelloHello
HelloHelloHelloHelloHello
HelloHelloHelloHelloHelloHello
HelloHelloHelloHelloHelloHelloHello
```

我们还可以将 for 循环用于内置数据结构，比如列表：

```python
>>> my_list = ["a", "b", "c", "d"]

>>> for i in range(len(my_list)):
	print(my_list[i])
```

输出：

```
a
b
c
d
```

💡 **提示：** 当你使用`range(len(<seq>))`，你会得到一个从`0`到`len(<seq>)-1`的整数序列。下面的例子展示了序列的有效的索引范围。

**2 个参数**的例子：

```python
>>> for i in range(2, 10):
	print(i)
```

输出：

```python
2
3
4
5
6
7
8
9
```

**代码：**

```python
>>> for j in range(2, 5):
	print("Python" * j)
```

输出：

```python
PythonPython
PythonPythonPython
PythonPythonPythonPython
```

**代码：**

```python
>>> my_list = ["a", "b", "c", "d"]

>>> for i in range(2, len(my_list)):
	print(my_list[i])
```

输出：

```python
c
d
```

**代码：**

```python
>>> my_list = ["a", "b", "c", "d"]

>>> for i in range(2, len(my_list)-1):
	my_list[i] *= i
```

现在的列表时：`['a', 'b', 'cc', 'd']`

**3 个参数**的例子：

```python
>>> for i in range(3, 16, 2):
	print(i)
```

输出：

```python
3
5
7
9
11
13
15
```

**代码：**

```
>>> for j in range(10, 5, -1):
	print(j)
```

输出：

```python
10
9
8
7
6
```

**代码：**

```python
>>> my_list = ["a", "b", "c", "d", "e", "f", "g"]

>>> for i in range(len(my_list)-1, 2, -1):
	print(my_list[i])
```

输出：

```python
g
f
e
d
```

### Python 中如何迭代所有可迭代对象

我们可以使用 for 循环直接迭代可迭代对象，例如列表、元组、字典、字符串和文件。 在每一次迭代中我们可以获取到它们元素中的一个，这对能直接使用这些对象非常有帮助。

让我们看一些例子：

#### 迭代一个字符串

如果我们迭代一个字符串，那么它的每一个字符(包括空格和符号)都会一个一个地赋值给循环变量。

```python
>>> message = "Hello, World!"

>>> for char in message:
	print(char)

	
H
e
l
l
o
,
 
W
o
r
l
d
!
```

我们还可以在 for 循环中迭代通过调用字符串方法修改后返回的字符串副本，就像这样:

```python
>>> word = "Hello"

>>> for char in word.lower(): # calling the string method
	print(char)

	
h
e
l
l
o
```

```python
>>> word = "Hello"

>>> for char in word.upper(): # calling the string method
	print(char)

	
H
E
L
L
O
```

#### 迭代列表和元组

```python
>>> my_list = [2, 3, 4, 5]

>>> for num in my_list:
	print(num)
```

输出：

```python
2
3
4
5
```

**代码：**

```python
>>> my_list = (2, 3, 4, 5)

>>> for num in my_list:
	if num % 2 == 0:
		print("Even")
	else:
		print("Odd")
```

输出：

```python
Even
Odd
Even
Odd
```

### 迭代字典所有的键、所有的值以及所有的键值对

我们可以通过调用字典特定的方法来对其所有的键、值以及键值对进行迭代，让我们看看是怎么做到的：

要**迭代** **所有键**，可以这样：

```python
for <var> in <dictionary_variable>:
    <code>
```

我们只要将可迭代对象换成字典变量的名称即可。

**💡 提示：** 你还可以写成`<dictionary_variable>.keys()`，但直接使用字典对象的变量名称会更方便，且它们的效果是一样的。

例如：

```python
>>> my_dict = {"a": 1, "b": 2, "c": 3}

>>> for key in my_dict:
	print(key)

	
a
b
c
```

**💡 提示：** 你可以给循环变量赋一个任意有效的名称。

要**迭代** **所有值**，我们可以：

```python
for <var> in <dictionary_variable>.values():
    <code>
```

例如：

```python
>>> my_dict = {"a": 1, "b": 2, "c": 3}

>>> for value in my_dict.values():
	print(value)

	
1
2
3
```

要**迭代** **所有键值对**，我们可以：

```python
for <key>, <value> in <dictionary_variable>.items():
    <code>
```

💡 **提示：** 我们需要定义两个循环变量，因为循环中一个对应键，一个对应值。

```python
>>> my_dict = {"a": 1, "b": 2, "c": 3}

>>> for key, value in my_dict.items():
	print(key, value)

	
a 1
b 2
c 3
```

如果我们只定义了一个循环变量，它的值将会是一个包含键和值的元组：

```python
>>> my_dict = {"a": 1, "b": 2, "c": 3}
>>> for pair in my_dict.items():
	print(pair)

	
('a', 1)
('b', 2)
('c', 3)
```

### 循环中断(break)和跳过(continue)

现在我们已经知道如何对序列进行了，我们还有循环控制语句来自定义循环运行时发生的情况：`break`与`continue`。

#### Break 语句

`break`用于立即停止循环。

当发现一个`break`语句，循环会停止，程序会回到循环之外正常执行。

下面的例子中，当我找到一个元素时终止了循环。

```python
>>> my_list = [1, 2, 3, 4, 5]

>>> for elem in my_list:
	if elem % 2 == 0:
		print("Even:", elem)
		print("break")
		break
	else:
		print("Odd:", elem)

		
Odd: 1
Even: 2
break
```

#### Continue 语句

`continue`用于跳过当前迭代。

当循环执行时遇到`continue`语句，当前迭代会被停止，新的迭代会以更新后的循环变量值开始。

下面的例子中，当元素时偶数的时候我们跳过当前迭代，奇数的时候我们输出元素的值：

```python
>>> my_list = [1, 2, 3, 4, 5]

>>> for elem in my_list:
	if elem % 2 == 0:
		print("continue")
		continue
	print("Odd:", elem)

	
Odd: 1
continue
Odd: 3
continue
Odd: 5
```

### Python 中的 zip()函数

`zip()`是一个神奇的内置函数，我们可以使用它一次迭代多个序列，并且在每次迭代中我们可以获取到每个序列中对应的元素。

我们只需要将各个序列作为参数传给`zip()`函数，并且将其返还的结果作为可迭代对象放到循环中即可。

例如：

```python
>>> my_list1 = [1, 2, 3, 4]
>>> my_list2 = [5, 6, 7, 8]

>>> for elem1, elem2 in zip(my_list1, my_list2):
	print(elem1, elem2)

	
1 5
2 6
3 7
4 8
```

### Python 中的 enumerate()函数

你还可以在循环中使用`enum()`函数来对循环进行跟踪和计数。它通常被用于迭代一个序列，并获取元素相应的索引。

**💡 提示：** 默认情况下，计数器的开始值时`0`。

例如：

```python
>>> my_list = [5, 6, 7, 8]

>>> for i, elem in enumerate(my_list):
	print(i, elem)

	
0 5
1 6
2 7
3 8
```

```python
>>> word = "Hello"

>>> for i, char in enumerate(word):
	print(i, char)

	
0 H
1 e
2 l
3 l
4 o
```

如果你从`0`开始计数，那么你可以在同一迭代中使用索引和当前值来修改序列。

```python
>>> my_list = [5, 6, 7, 8]

>>> for index, num in enumerate(my_list):
	my_list[index] = num * 3

>>> my_list
[15, 18, 21, 24]
```

给`enumerate()`函数传入第二个参数，可以让我们从不同的起始值开始计数：

```python
>>> word = "Hello"

>>> for i, char in enumerate(word, 2):
	print(i, char)

	
2 H
3 e
4 l
5 l
6 o
```

#### else 子句

For 循环还有一个`else`子句。你可以在`else`子句中添加额外的代码附加到 for 循环的后面，只有当 for 循环的 break 语句没有被执行到的时候它才会被执行。

**💡 提示：** 如果`break`语句被执行，`else`子句不会执行；如果`break`没有被执行，`else`子句就会被执行。

下面的例子中，我们尝试在列表中找到一个大于 6 的元素，但是没找到，所以`break`语句没有被执行，而`else`语句被执行了。

```python
my_list = [1, 2, 3, 4, 5]

for elem in my_list:
    if elem > 6:
        print("Found")
        break
else:
    print("Not Found")
```

输出：

```
Not Found
```

但是，如果`break`语句执行了，`else`不会被执行。从下面的例子中我们可以看到这一点：

```python
my_list = [1, 2, 3, 4, 5, 8] # Now the list has the value 8

for elem in my_list:
    if elem > 6:
        print("Found")
        break
else:
    print("Not Found")
```

输出：

```
Found
```

## 🔹 Python 中的 While 循环

While 循环跟 for 循环一样，都是让我们可以重复执行一个代码块。 不同之处是 while 与执行之前有一个条件判断要为`True`。

在 while 循环中，我们要定义一个条件语句，它不是数字的迭代。当条件为`False`时终止循环。

while 循环的通用语法：

```python
while <condition>:
    <code>
```

💡 **提示：** 在 while 循环中, 循环变量会作为条件语句的一部分，我们必须要更新这个循环变量，以确保条件语句最终会变为`False`。

例如：

```python
>>> x = 6

>>> while x < 15:
	print(x)
	x += 1

	
6
7
8
9
10
11
12
13
14
```

```python
>>> x = 4

>>> while x >= 0:
	print("Hello" * x)
	x -= 1

	
HelloHelloHelloHello
HelloHelloHello
HelloHello
Hello
```

```python
>>> num = 5

>>> while num >= 1:
	print("*" * num)
	num -= 2

	
*****
***
*
```

#### Break 与 Continue

在 while 循环中我们同样可以使用`break`和`continue`，它们工作的原理跟 for 循环是完全一样的：

-   `break` 立即停止 while 循环.
-   `continue` 停止当前迭代并开始下一个迭代.

例如：

```python
>>> x = 5

>>> while x < 15:
	if x % 2 == 0:
		print("Even:", x)
		break
	print(x)
	x += 1
    

5
Even: 6
```

```python
>>> x = 5

>>> while x < 15:
	if x % 2 == 0:
		x += 1
		continue
	print("Odd:", x)
	x += 1

	
Odd: 5
Odd: 7
Odd: 9
Odd: 11
Odd: 13
```

#### `else`子句

我们同样可以给 while 循环添加一个`else`子句。如果`break`被执行，`else`子句不会执行，如果`break`没有被执行，`else`子句就会被执行。

看下面的例子：

```python
x = 5

while x < 15:
	if x % 2 == 0:
		print("Even number found")
		break
	print(x)
	x += 2
else:
	print("All numbers were odd")
```

输出：

```python
5
7
9
11
13
All numbers were odd
```

但是下面的例子中，`break`会被执行，`else`不会被执行：

```
x = 5

while x < 15:
	if x % 2 == 0:
		print("Even number found")
		break
	print(x)
	x += 1 # Now we are incrementing the value by 1
else:
	print("All numbers were odd")
```

输出：

```python
5
Even number found
```

#### 无限 While 循环

当我们在处理循环的时候，可能会遇到“无限循环”。 如果条件永远不为`False`，在无外部干扰的情况下，循环将永远不会停止。

这种情况通常发生在我们没能正确的更新条件语句中的循环变量。

**💡 提示：** 你必须对这些变量进行必要的更新，以确保条件语句最终的结果为`False`。

例如：

```python
>>> x = 5

>>> while x > 2:
	print(x)

	
5
5
5
5
5
5
5
5
5
.
.
.
# The output continues indefinitely
```

💡 **提示：** 要结束这个进程，你可以按`CTRL + C`，你将会看到一个`KeyboardInterrupt`消息。

## 🔸 循环嵌套

我们可以在 for 循环里面再写一个 for 循环，或者在 while 循环里面再写一个 while 循环。这种循环里面的循环就叫做嵌套的循环。

💡 **提示：** 外部循环的每一次迭代，内部循环都会执行一次。

### 嵌套的 For 循环

```python
>>> for i in range(3):
	for j in range(2):
		print(i, j)

		
0 0
0 1
1 0
1 1
2 0
2 1
```

如果我们添加 print 语句，我们将会发现这里背后发生了什么：

```python
>>> for i in range(3):
	print("===> Outer Loop")
	print(f"i = {i}")
	for j in range(2):
		print("Inner Loop")
		print(f"j = {j}")

		
===> Outer Loop
i = 0
Inner Loop
j = 0
Inner Loop
j = 1
===> Outer Loop
i = 1
Inner Loop
j = 0
Inner Loop
j = 1
===> Outer Loop
i = 2
Inner Loop
j = 0
Inner Loop
j = 1
```

外部循环每迭代一次，内部循环会迭代两次。 内部和外部循环的循环变量在各自迭代一次后都会被更新。

另外一个例子：

```python
>>> num_rows = 5

>>> for i in range(5):
	for num_cols in range(num_rows-i):
		print("*", end="")
	print()

	
*****
****
***
**
*
```

### 嵌套的 While 循环

下面是一个 while 循环嵌套的例子。 在这种情况下，我们必须更新作为条件语句的一部分的循环变量，以保证循环的终止。

```python
>>> i = 5

>>> while i > 0:
	j = 0
	while j < 2:
		print(i, j)
		j += 1
	i -= 1

	
5 0
5 1
4 0
4 1
3 0
3 1
2 0
2 1
1 0
1 1
```

💡 **提示：** 我们同样可以将 fow 循环写在 while 循环里面，或者将 while 循环写到 for 循环里面。

## 🔹 Python 的函数

在 Python 中，我们可以定义函数来使我们的代码可重用、更具可读性和组织性。下面是函数的基本语法：

```python
def <function_name>(<param1>, <param2>, ...):
    <code>
```

**💡 提示：** 函数可以有 0 个，1 个或多个参数。

### 无参数函数

函数定义时，函数名后跟一对空的括号，那它就是无参数函数。例如：

```python
def print_pattern():
    size = 4
    for i in range(size):
        print("*" * size)
```

调用函数时的输出：

```python
>>> print_pattern()
****
****
****
****
```

**💡 提示：** 在调用的时候，你必须在函数名后加一对空括号。

### 有 1 个参数的函数

函数定义时，函数名后的括号中是一个或多个参数的列表。

```python
def welcome_student(name):
    print(f"Hi, {name}! Welcome to class.")
```

当调用函数时，我们只需要传递一个值作为参数，该值会被函数定义中使用参数的地方替代：

```python
>>> welcome_student("Nora")
Hi, Nora! Welcome to class.
```

再看另外一个例子 – 一个打印由星号构成的图案的函数。你需要指定所要打印的行数：

```python
def print_pattern(num_rows):
    for i in range(num_rows):
        for num_cols in range(num_rows-i):
            print("*", end="")
        print()
```

你可以看到不同的`num_rows`值，输出不同的结果：

```
>>> print_pattern(3)
***
**
*

>>> print_pattern(5)
*****
****
***
**
*

>>> print_pattern(8)
********
*******
******
*****
****
***
**
*
```

### 2 个或多个参数的函数

为了定义 2 个或多个参数，我们只需要将它们用逗号进行分割：

```
def print_sum(a, b):
    print(a + b)
```

当调用上面的函数时，我们必须得传 2 个参数：

```python
>>> print_sum(4, 5)
9

>>> print_sum(8, 9)
17

>>> print_sum(0, 0)
0

>>> print_sum(3, 5)
8
```

我们可以将刚刚看到的带有一个参数的函数调整为使用两个参数并打印带有自定义字符的图案：

```python
def print_pattern(num_rows, char):
	for i in range(num_rows):
		for num_cols in range(num_rows-i):
			print(char, end="")
		print()
```

你可以看到下面带有自定义字符的输出，是通过我们传了 2 个参数的调用输出的。

```
>>> print_pattern(5, "A")
AAAAA
AAAA
AAA
AA
A

>>> print_pattern(8, "%")
%%%%%%%%
%%%%%%%
%%%%%%
%%%%%
%%%%
%%%
%%
%

>>> print_pattern(10, "#")
##########
#########
########
#######
######
#####
####
###
##
#
```

### 如何返回一个值

很好。现在你已经知道了如何定义一个函数，那么让我们看看如何使用 return 语句。

我们经常需要从函数中返回一个值，而`return`语句可以做到。我们只需要将 return 语句加到函数的定义中。

```python
return <value_to_return>
```

**💡 提示：** 当发现`return`语句时，函数会立即停止执行并返回值。

例如：

```python
def get_rectangle_area(length, width):
    return length * width
```

现在我们可以调用该函数并将结果赋给一个变量，因为结果是由该函数返回的。

```python
>>> area = get_rectangle_area(4, 5)
>>> area
20
```

我们也可以用条件语句跟`return`语句一起使用，return 会根据条件是`True`还是`False`来返回一个值。

下面的例子中，函数返回序列中找到的第一个元素：

```python
def get_first_even(seq):
    for elem in seq:
        if elem % 2 == 0:
            return elem
        else:
            return None
```

如果我们调用函数，你将会看到预期的结果：

```python
>>> value1 = get_first_even([2, 3, 4, 5])
>>> value1
2
```

```python
>>> value2 = get_first_even([3, 5, 7, 9])
>>> print(value2)
None
```

💡 **提示：** 如果函数没有`return`语句，函数将会返回默认值`None`。

[Python 代码的风格指南](https://www.python.org/dev/peps/pep-0008/#programming-recommendations) 建议我们一贯第使用返回语句。我们应该：

> 返回语句要保持一致。 函数中的 return 语句，要么所有的都返回一个表达式，要么都不要返回。如果确定让所有返回语句都返回一个表达式，那么对于那些没有返回值的函数应该明确地说明返回值为 None, 且在函数的结尾要有一个显式的 return 语句(如果可以执行到 return 语句)。

### 默认参数

对于函数，我们可以使用参数的默认值作为参数，你只需要在参数列表中使用`<parameter>=<value>`这样的语法。

**💡 提示：** [Python 代码的风格指南](https://www.python.org/dev/peps/pep-0008/#other-recommendations) 中说到“我们不应该在关键字参数赋值的 = 两边使用空格”。

下面的例子中，我们给参数`b`赋了一个默认值 5。当函数调用时，如果我们省略参数`b`，`b`的默认值 5 将会被使用。

```
def print_product(a, b=5):
    print(a * b)
```

省略参数`b`的调用, 我们看到的输出:

```python
>>> print_product(4)
20
```

从上面的结果可以确定的是，运算中确实使用了默认值 5。

我们还可以给参数`b`赋一个自定义的值：

```python
>>> print_product(3, 4)
12
```

💡 **提示：** 带有默认值的参数，需要放在参数列表的最后面。 否则，你会看到一个错误：`语法错误：非默认值参数放到了默认值参数后面了`。

下面是用来打印图案函数的另外的一个例子。我们将`"*"`作为默认值赋值给`char`参数。

```
def print_pattern(num_rows, char="*"):
	for i in range(num_rows):
		for num_cols in range(num_rows-i):
			print(char, end="")
		print()
```

现在我们可以选择用默认值或者自己赋一个值：

```python
>>> print_pattern(5)
*****
****
***
**
*

>>> print_pattern(6, "&")
&&&&&&
&&&&&
&&&&
&&&
&&
&
```

## 🔸 Python 中的递归

一个递归函数就是能调用自己的函数。 这些递归函数都有一个用于结束递归过程的基本情况，还有通过进行另一个递归调用来继续递归过程的递归情况。

下面是一些例子：

```python
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n-1)
```

递归实现的阶乘函数

```python
def fibonacci(n):
    if n == 0 or n == 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)
```

斐波那契函数

```python
def find_power(a, b):
    if b == 0:
        return 1
    else:
        return a * find_power(a, b-1)
```

递归求幂

## 🔹 Python 中的异常处理

程序运行过程中发生的错误或意外事件被称为**异常**。多亏有了后面我们将看到的这些对异常的处理，才让我们的程序在发出异常时不至于突然终止。

让我们看看 Python 中的异常类型，以及如何处理它们。

### Python 中的常见异常

下面是常见异常的一个列表，以及它们发生的原因：

-   **ZeroDivisionError:** 当除法或模运算的第二个参数为 0 时，会抛出这个异常。

```python
>>> 5 / 0
Traceback (most recent call last):
  File "<pyshell#0>", line 1, in <module>
    5 / 0
ZeroDivisionError: division by zero

>>> 7 // 0
Traceback (most recent call last):
  File "<pyshell#1>", line 1, in <module>
    7 // 0
ZeroDivisionError: integer division or modulo by zero

>>> 8 % 0
Traceback (most recent call last):
  File "<pyshell#2>", line 1, in <module>
    8 % 0
ZeroDivisionError: integer division or modulo by zero
```

-   **IndexError:** 当我们试图使用一个无效的索引来访问序列的元素时，会抛出这个异常。

```python
>>> my_list = [3, 4, 5, 6]

>>> my_list[15]
Traceback (most recent call last):
  File "<pyshell#4>", line 1, in <module>
    my_list[15]
IndexError: list index out of range
```

-   **KeyError:** 当我们试图访问一个不存在的键值对时，就会抛出这个异常，因为这个键不在字典中。

```python
>>> my_dict = {"a": 1, "b": 2, "c": 3}

>>> my_dict["d"]
Traceback (most recent call last):
  File "<pyshell#6>", line 1, in <module>
    my_dict["d"]
KeyError: 'd'
```

-   **NameError:** 当访问一个前文没有定义的变量名称时会抛出此异常。

```python
>>> b
Traceback (most recent call last):
  File "<pyshell#8>", line 1, in <module>
    b
NameError: name 'b' is not defined
```

-   **RecursionError:** 当解释器检测到超过了最大递归深度时抛出，通常发生在递归过程始终无法达到基本情形的时候。

在下面的例子中，会抛出一个`RecursionError`错误。`factorial`是一个递归函数，但在每次的递归过程中传递给它的是`n`，而不是`n-1`。除非 n 的值是`0`或`1`否则不会达到基本的情形，因为参数没有被递减，所以递归过程会一直持续下去，然后就会发生这个递归错误。

```python
>>> def factorial(n):
	if n == 0 or n == 1:
		return 1
	else:
		return n * factorial(n)

	
>>> factorial(5)
Traceback (most recent call last):
  File "<pyshell#6>", line 1, in <module>
    factorial(5)
  File "<pyshell#5>", line 5, in factorial
    return n * factorial(n)
  File "<pyshell#5>", line 5, in factorial
    return n * factorial(n)
  File "<pyshell#5>", line 5, in factorial
    return n * factorial(n)
  [Previous line repeated 1021 more times]
  File "<pyshell#5>", line 2, in factorial
    if n == 0 or n == 1:
RecursionError: maximum recursion depth exceeded in comparison
```

💡 **提示：** 想了解更多关于异常的知识, 建议阅读来自 Python 官网的[这篇](https://docs.python.org/3/library/exceptions.html)。

### Python 中的`try` / `except`

Python 中我们可以用 try/except 来捕获异常的发生，并适当得处理它们。 这样，异常中的错误就可以被适当的终止，甚至还可以从异常中恢复。

这是基本语法：

```python
try:
    <code_that_may_raise_an_exception>
except:
    <code_to_handle_the_exception_if_it_occurs>
```

例如，如果我们接受用户的输入来访问一个列表的元素，而这个输入可能是一个无效的索引，所以可能会导致一个异常：

```python
index = int(input("Enter the index: "))

try:
    my_list = [1, 2, 3, 4]
    print(my_list[index])
except:
    print("Please enter a valid index.")
```

假设我们输入无效值，比如 15，输出会是：

```python
Please enter a valid index.
```

因为`except`语句被执行了。然而，如果该值是有效的，`try`中的代码将会按预期运行。

下面是另外一个例子：

```
a = int(input("Enter a: "))
b = int(input("Enter b: "))

try:
    division = a / b
    print(division)
except:
    print("Please enter valid values.")
```

输出：

```
Enter a: 5
Enter b: 0

Please enter valid values.
```

### Python 中如何捕获一个特定类型的异常

在`try`子句中，我们不想捕捉和处理所有可能发生的异常，而是想要捕捉和处理一种特定类型的异常。我们只需要在`except`关键字后面指定异常的类型：

```python
try:
    <code_that_may_raise_an_exception>
except <exception_type>:
    <code_to_handle_an_exception_if_it_occurs>
```

例如：

```python
index = int(input("Enter the index: "))

try:
    my_list = [1, 2, 3, 4]
    print(my_list[index])
except IndexError: # specify the type
    print("Please enter a valid index.")
```

```python
a = int(input("Enter a: "))
b = int(input("Enter b: "))

try:
    division = a / b
    print(division)
except ZeroDivisionError: # specify the type
    print("Please enter valid values.")
```

### 如何给 Python 中的异常对象指定一个名称

我们可以在`except`子句中将异常对象赋值给一个变量，这样可以让我们访问到它的描述和属性。

我们只需要添加`as <name>`，像这样：

```python
try:
    <code_that_may_raise_an_exception>
except <exception_type> as <name>:
    <code_to_handle_an_exception_if_it_occurs>
```

例如：

```python
index = int(input("Enter the index: "))

try:
    my_list = [1, 2, 3, 4]
    print(my_list[index])
except IndexError as e:
    print("Exception raised:", e)
```

如果我们输入的索引值为`15`：

```
Enter the index: 15
Exception raised: list index out of range
```

另一个例子：

```python
a = int(input("Enter a: "))
b = int(input("Enter b: "))

try:
    division = a / b
    print(division)
except ZeroDivisionError as err:
    print("Please enter valid values.", err)
```

`b`的输入为`0`时：

```python
Please enter valid values. division by zero
```

### `try` / `except` / `else`

如果我们想选择在执行`try`子句期间没有发生异常时的情况，我们可以在`except`后面添加一个`else`子句。

```python
try:
    <code_that_may_raise_an_exception>
except:
    <code_to_handle_an_exception_if_it_occurs>
else:
    <code_that_only_runs_if_no_exception_in_try>
```

例如：

```python
a = int(input("Enter a: "))
b = int(input("Enter b: "))

try:
    division = a / b
    print(division)
except ZeroDivisionError as err:
    print("Please enter valid values.", err)
else:
    print("Both values were valid.")
```

如果我们给`a`和`b`分别输入为`5`和`0`：

```
Please enter valid values. division by zero
```

但是，如果`a`，`b`的值都是有效的, 比如是：`5`和`4`，那么`else`会在`try`子句执行完成之后执行：

```python
1.25
Both values were valid.
```

### `try` / `except` / `else` / `finally`

我们可以添加`finally`子句来执行一直运行的代码，即使在`try`中出现了异常。

例如：

```python
a = int(input("Enter a: "))
b = int(input("Enter b: "))

try:
    division = a / b
    print(division)
except ZeroDivisionError as err:
    print("Please enter valid values.", err)
else:
    print("Both values were valid.")
finally:
    print("Finally!")
```

如果输入的值都是有效的，除法的输出：

```
Both values were valid.
Finally!
```

如果由于`b`是`0`而发生异常，那么：

```python
Please enter valid values. division by zero
Finally!
```

`finally`子句都会被执行。

**💡 提示：** 这个子句可以用来关闭文件，比如, 当你处理文件时抛出了异常。

## 🔸 Python 中的面向对象编程

在面向对象编程中(OOP), 我们可以定义类作为蓝图，用于在 Python 中创建具有属性和方法(与对象相关的功能)的对象。

定义类的一般语法：

```
class <className>:

    <class_attribute_name> = <value>

    def __init__(self,<param1>, <param2>, ...):
        self.<attr1> = <param1>
        self.<attr2> = <param2>
        .
        .
        .
        # As many attributes as needed
    
   def <method_name>(self, <param1>, ...):
       <code>
       
   # As many methods as needed
```

**💡 提示：** `self`是类的实例(用类创建的对象)的引用。

如你所见，类可以有很多不同的元素，让我们来分析一下他们的细节：

### 类的头部

类定义的第一行是`class`关键字和类名：

```
class Dog:
```

```
class House:
```

```
class Ball:
```

**💡 提示：** 如果一个类继承了另外一个类的属性和方法，我们会在括号中看到该类的名称：

```
class Poodle(Dog):
```

```
class Truck(Vehicle):
```

```
class Mom(FamilyMember):
```

Python 中, 类名用大驼峰(也称为 Pascal Case)，名称中的每个一个单词都是以大写字母开头。例如：`FamilyMember`

### `__init__`和实例属性

接下来，我们将使用类在 Python 中创建对象，就像我们根据图纸建造真正的房屋一样。

对象中的属性来自于我们在类中定义，而这些属性通常是在`__init__`方法中被初始化，而`__init__`方法会在创建类的实例时被执行。

这是一般语法：

```python
def __init__(self, <parameter1>, <parameter2>, ...):
        self.<attribute1> = <parameter1>  # Instance attribute
        self.<attribute2> = <parameter2>  # Instance attribute
        .
        .
        .
        # As many instance attributes as needed
```

我们可以根据需要来给类指定尽可能多的属性。

`Dog`类的一个`__init__`方法例子：

```python
class Dog:

    def __init__(self, name, age):
        self.name = name
        self.age = age
```

💡 **提示：** 注意名称`__init__`中的前后的双下划线。

### 如何创建类的实例

要创建`Dog`类的实例，我们需要指定 name 和 age 属性。

```python
my_dog = Dog("Nora", 10)
```

很好。现在我们已经准备好了一个可以在代码中使用的 Dog 实例了。

有些类，可以不需要任何参数来创建实例。 这种情况我们只需要一个空括号，例如：

```
class Circle:

    def __init__(self):
        self.radius = 1
```

创建实例：

```python
>>> my_circle = Circle()
```

💡 **提示：** `self`像是一个"幕后"的参数，即使我们在方法的定义中看到它，但你传参数时可以不用考虑它。

### 默认参数

我们可以为类的属性指定默认值，但如果使用者想自己赋值，也是可以的。

这种情况下, 我们可以在参数列表中写上形如：`<attribute>=<value>`

例如：

```
class Circle:

    def __init__(self, radius=1):
        self.radius = radius
```

现在我们创建`Circle`实例，你可以通过忽略 radius 参数使用它的默认值，也可以传入一个自己的值： 

```python
# Default value
>>> my_circle1 = Circle()

# Customized value
>>> my_circle2 = Circle(5)
```

### 如何获取实例的属性

访问实例属性，可以用下面的语法：

```python
<object_variable>.<attribute>
```

例如：

```python
# Class definition
>>> class Dog:

    def __init__(self, name, age):
        self.name = name
        self.age = age

# Create instance        
>>> my_dog = Dog("Nora", 10)

# Get attributes
>>> my_dog.name
'Nora'

>>> my_dog.age
10
```

### 如何更新实例的属性

更新实例的属性，我们可以用下面的语法：

```
<object_variable>.<attribute> = <new_value>
```

例如：

```python
>>> class Dog:

    def __init__(self, name, age):
        self.name = name
        self.age = age

        
>>> my_dog = Dog("Nora", 10)

>>> my_dog.name
'Nora'

# Update the attribute
>>> my_dog.name = "Norita"

>>> my_dog.name
'Norita'
```

### 如何删除实例属性

要删除实例属性，可以用下面的语法：

```
del <object_variable>.<attribute>
```

例如：

```python
>>> class Dog:

    def __init__(self, name, age):
        self.name = name
        self.age = age

        
>>> my_dog = Dog("Nora", 10)

>>> my_dog.name
'Nora'

# Delete this attribute
>>> del my_dog.name

>>> my_dog.name
Traceback (most recent call last):
  File "<pyshell#77>", line 1, in <module>
    my_dog.name
AttributeError: 'Dog' object has no attribute 'name'
```

### 如何删除一个示例

同样的，删除实例我们也可以用`del`：

```
>>> class Dog:

    def __init__(self, name, age):
        self.name = name
        self.age = age

        
>>> my_dog = Dog("Nora", 10)

>>> my_dog.name
'Nora'

# Delete the instance
>>> del my_dog

>>> my_dog
Traceback (most recent call last):
  File "<pyshell#79>", line 1, in <module>
    my_dog
NameError: name 'my_dog' is not defined
```

### 公开 vs. 非公开 的属性

Python 中，我们没有用访问修饰符来限制对实例属性的访问，而是依靠命名惯例来做到这一点。

例如，在属性前添加一个前导下划线，就可以告诉开发者这是一个非公开的属性。

例如：

```python
class Dog:

    def __init__(self, name, age):
        self.name = name  # Public attribute
        self._age = age   # Non-Public attribute
```

Python 文档中提到：

> 一个前导下划线仅用于非公开的方法和实例变量。  
>   
> 你需要决定实例的哪些方法和变量("属性")是需要公开或不公开的。如果有疑惑，可以选择不公开；将一个不公开的属性改为公开，要比将其从公开改为不公开要容易得多。
>   
> 非公开属性是那些不打算被第三方使用的属性，我们无法保证非公开属性不会被第三方使用者改变甚至被删除。 - [源](https://www.python.org/dev/peps/pep-0008/#designing-for-inheritance)

然而，如文档中还提到的：

> 我们在这里不使用"私有"一词，因为在 Python 中没有任何属性是真正的私有的(省去一些不必要的工作)。 - [源](https://www.python.org/dev/peps/pep-0008/#designing-for-inheritance)

**💡 提示：** 从技术上讲，如果我们在属性的名称中加入前导下划线，我们仍然可以访问和修改该属性，但我们不应该这样做。

### Python 中类的属性

类的属性由类的所有实例共享。所有实例都可以访问这些属性，如果这些属性被修改，这些实例将都会受到影响。

```python
class Dog:

    # Class attributes
    kingdom = "Animalia"
    species = "Canis lupus"

    def __init__(self, name, age):
        self.name = name
        self.age = age
```

**💡 提示：** 通常，它们写在`__init__`方法的前面。

### 如何获取一个类属性

要获取类属性，我们使用下面的方法：

```
<class_name>.<attribute>
```

例如：

```
>>> class Dog:

    kingdom = "Animalia"

    def __init__(self, name, age):
        self.name = name
        self.age = age

        
>>> Dog.kingdom
'Animalia'
```

**💡 提示：** 你可以使用同样的语法在类里面获取它的值。

### 如何更新一个类属性

要更新一个类属性，我们使用下面的语法：

```
<class_name>.<attribute> = <value>
```

例如：

```python
>>> class Dog:

    kingdom = "Animalia"

    def __init__(self, name, age):
        self.name = name
        self.age = age

        
>>> Dog.kingdom
'Animalia'

>>> Dog.kingdom = "New Kingdom"

>>> Dog.kingdom
'New Kingdom'
```

### 如何删除一个类属性

我们使用`del`一个类属性。例如：

```python
>>> class Dog:

    kingdom = "Animalia"

    def __init__(self, name, age):
        self.name = name
        self.age = age

>>> Dog.kingdom
'Animalia'
        
# Delete class attribute
>>> del Dog.kingdom

>>> Dog.kingdom
Traceback (most recent call last):
  File "<pyshell#88>", line 1, in <module>
    Dog.kingdom
AttributeError: type object 'Dog' has no attribute 'kingdom'
```

### 如何定义方法

方法用于表示类实例的功能。

**💡 提示：** 如果我们在实例方法的定义中写上`self.<attribute>`，那么实例方法就可以调用实例属性。

下面是定义方法的基本语法，这些方法一般定义在`__init__`方法后面：

```python
class <ClassName>:

    # Class attributes

    # __init__

    def <method_name>(self, <param1>, ...):
        <code>
```

这些实例方法可能有 0 个、1 个或多个参数(就像函数!)，但`self`必须是第一个参数。

例如，下面的`bark`方法没有参数(除了`self`):

```python
class Dog:

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        print(f"woof-woof. I'm {self.name}")
```

要调用这个方法，我们用下面的语法：

```
<object_variable>.<method>(<arguments>)
```

例如：

```python
# Create the instance
>>> my_dog = Dog("Nora", 10)

# Call the method
>>> my_dog.bark()
woof-woof. I'm Nora
```

`Player`类里定义了只有一个参数的`increment_speed`方法：

```python
class Player:

    def __init__(self, name):
        self.name = name
        self.speed = 50

    def increment_speed(self, value):
        self.speed += value
```

调用此方法：

```
# Create instance        
>>> my_player = Player("Nora")

# Check initial speed to see the change
>>> my_player.speed
50

# Increment the speed
>>> my_player.increment_speed(5)

# Confirm the change
>>> my_player.speed
55
```

💡 **提示：** 要添加更多参数，只需要将多个参数用逗号分隔。建议在每个逗号后面加一个空格。

### 属性, Getters 与 Setters

定义 getters 与 setters 方法可以用于获取和设置实例的属性值。Getters 与 setters 方法充当一种中介，以"保护"属性免受直接更改。

在 Python 中，我们通常使用属性而不是 getter 和 setter。让我们看看如何使用它们。

要定义一个属性，我们可以用下面的语法编写一个方法：

```
@property
def <property_name>(self):
    return self.<attribute>
```

这个方法会充当一个 getter，它在我们访问属性时被调用。

我们可能还想定义一个 setter：

```
@<property_name>.setter
def <property_name>(self, <param>):
    self.<attribute> = <param>
```

还有一个删除器来删除属性：

```
@<property_name>.deleter
def <property_name>(self):
    del self.<attribute>
```

**💡 提示：** 你可以在这些方法中编写你需要的任何代码来读取、设置和删除属性。建议让这些方法尽可能简单。

下面是一个例子：

```python
class Dog:

    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, new_name):
        self._name = new_name

    @name.deleter
    def name(self):
        del self._name
```

如果我们添加描述性的 print 语句，我们可以看到当执行其操作时，print 语句会被调用。

```python
>>> class Dog:

    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        print("Calling getter")
        return self._name

    @name.setter
    def name(self, new_name):
        print("Calling setter")
        self._name = new_name

    @name.deleter
    def name(self):
        print("Calling deleter")
        del self._name

        
>>> my_dog = Dog("Nora")

>>> my_dog.name
Calling getter
'Nora'

>>> my_dog.name = "Norita"
Calling setter

>>> my_dog.name
Calling getter
'Norita'

>>> del my_dog.name
Calling deleter
```

## 🔹 Python 中如何处理文件

处理文件对于创建强大的程序非常重要。下面让我们看看如何在 Python 中执行此操作。

### Python 中如何读取文件

Python 中，建议使用`with`语句来处理文件，因为它只在我们需要的时候打开文件，并且在处理完后会自动关闭文件。

要读取文件，我们使用下面的语法：

```python
with open("<file_path>") as <file_var>:
    <code>
```

我们还可以在打开文件的时候，指定`"r"`以只读模式打开：

```python
with open("<file_path>", "r") as <file_var>:
    <code>
```

不过这已经是打开文件的默认模式了，所以我们可以忽略它，例如下面的例子：

例子：

```python
with open("famous_quotes.txt") as file:
    for line in file:
        print(line)
```

或者……

```python
with open("famous_quotes.txt", "r") as file:
    for line in file:
        print(line)
```

**💡 提示：** 是的！我们可以通过 for 循环来遍历文件所有的行。文件路径可以是一个相对于当前正在运行的 Python 脚本的相对路径，也可以是绝对路径。

### Python 中如何写文件

写文件有两种方法。你可以将要添加的内容退换掉现有的内容，或者追加到现有内容中。

```python
with open("<file_path>", "w") as <file_var>:
    <code>
```

要完全替换现有内容，我们可以用`"w"`模式，可以将“w”作为`open()`第二个参数来调用。我们在文件对象上调用`.write()`方法，将我们想写的内容作为参数传给该对象。

例如：

```python
words = ["Amazing", "Green", "Python", "Code"]

with open("famous_quotes.txt", "w") as file:
    for word in words:
        file.write(word + "\n")
```

当你运行程序时，如果指定路径中的文件不存在，它会被创建。

这是文件内容：

```python
Amazing
Green
Python
Code
```

### 如何向文件中追加内容

然而，如果你想向文件中追加内容，那么需要使用`"a"`模式：

```
with open("<file_path>", "a") as <file_var>:
    <code>
```

例如：

```python
words = ["Amazing", "Green", "Python", "Code"]

with open("famous_quotes.txt", "a") as file:
    for word in words:
        file.write(word + "\n")
```

这个小改动将会保留文件的现有内容，它将新的内容加到最后。

如果我们再次运行程序，这些字符串将会被添加到文件的末尾：

```python
Amazing
Green
Python
Code
Amazing
Green
Python
Code
```

### 如何删除文件

要在我们的脚本中删除文件，得用`os`模块。建议在调用 os 模块的`remove()`方法之前，先检查文件是否存在。

```import
import os

if os.path.exists("<file_path>"):
  os.remove("<file_path>")
else:
  <code>
```

例如：

```python
import os

if os.path.exists("famous_quotes.txt"):
  os.remove("famous_quotes.txt")
else:
  print("This file doesn't exist")
```

你可能注意到了第一行代码`import os`，这是一个导入语句。下面我们看看它们有什么用，以及如何使用。

## 🔸 Python 中的导入语句

一个较好的做法是，随着程序规模和复杂性的增加，我们要将代码组织成多个文件。但我们需要找到一种方法来组合这些文件以使程序正常工作，而这正是导入语句的作用。

通过导入语句，我们可以将一个模块(包含 Python 定义和语句的文件)导入导另一个文件中。

下面是各种形式的导入语句：

### 第一种选择

```
import <module_name>
```

例如：

```
import math
```

💡 **提示：** `math`是 Python 的一个内置模块。

如果我们使用这个导入语句，我们需要在代码中引用的函数或元素的名称前添加模块的名称。

```python
>>> import math
>>> math.sqrt(25)
5.0
```

我们在代码中明确的指明该元素所属的模块。

### 第二中选择

```
import <module> as <new_name>
```

例如：

```
import math as m
```

在代码中，我们可以使用我们指定的新名称，而不是模块的原始名称：

```python
>>> import math as m
>>> m.sqrt(25)
5.0
```

### 第三种选择

```
from <module_name> import <element>
```

例如：

```
from math import sqrt
```

使用这个导入语句，我们可以直接调用函数，而不必指定模块的名称。

```
>>> from math import sqrt
>>> sqrt(25)
5.0
```

### 第四种选择

```
from <module_name> import <element> as <new_name>
```

例如：

```python
from math import sqrt as square_root
```

使用这种导入语句，我们可以给从模块中导出的元素指定一个新的名字。

```python
>>> from math import sqrt as square_root
>>> square_root(25)
5.0
```

### 第五种选择

```
from <module_name> import *
```

上面的导入语句导入了模块的所有元素，我们可以通过名称来直接引用这些元素，而不用指定模块名称。

例如：

```python
>>> from math import *

>>> sqrt(25)
5.0

>>> factorial(5)
120

>>> floor(4.6)
4

>>> gcd(5, 8)
1
```

💡 **提示：** 这种类型的导入语句会使我们很难知道哪些元素属于哪个模块，特别是当我们从多个模块导入元素的时候。

根据[Python 代码的风格指南](https://www.python.org/dev/peps/pep-0008/#imports):

> **有通配符的导入** (from <module> import \*) 应该避免使用，因为他们会让你搞不清楚哪些元素是属于哪个模块, 对读者和一些自动化工具都具有迷惑性。

## 🔹 Python 中的列表与字典推导

Python 中你应该知道的一个很棒的功能特性是列表与字典推导功能。它们是一种更加紧凑地创建列表和字典的方法。

### 列表推导

要定义列表推导，我们可以使用下面四种语法模式中的任意一种：

```
[<value_to_include> for <var> in <sequence>]
```

```
[<value_to_include> for <var1> in <sequence1> for <var2> in <sequence2>]
```

```
[<value_to_include> for <var> in <sequence> if <condition>]
```

```
[<value> for <var1> in <sequence1> for <var2> in <sequence2> if <condition>]
```

**💡 提示：** 列表推导一般使用在一些简单逻辑的情形，就是说使用它们时，我们不应该让我们的代码变得难以阅读和理解。

下面是一些例子：

```python
>>> [i for i in range(4, 15)]
[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

>>> [chr(i) for i in range(67, 80)]
['C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O']

>>> [i**3 for i in range(2, 5)]
[8, 27, 64]

>>> [i + j for i in range(5, 8) for j in range(3, 6)]
[8, 9, 10, 9, 10, 11, 10, 11, 12]

>>> [k for k in range(3, 35) if k % 2 == 0]
[4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34]

>>> [i * j for i in range(2, 6) for j in range(3, 7) if i % j == 0]
[9, 16, 25]
```

### 列表推导 vs. 生成器表达式

列表推导使用的是中括号`[]`。而生成器表达式用的是括号`()`。它们看上去相似，但却有很大的不同。让我们看看为啥。

-   **列表推导** 一次产生整个序列且整个序列都存储在内存中。
-   **生成器表达式** 当元素被要求时，一次产生一个元素。

我们可以通过`sys`模块来检查上述不同。在下面的例子中，你可以看到他们的大小在内存中差别很大。

```
>>> import sys
>>> sys.getsizeof([i for i in range(500)])
2132
>>> sys.getsizeof((i for i in range(500)))
56
```

我们可以使用生成器表达式在 for 循环中迭代并一次获取一个元素。但如果你需要将元素存储到列表中，你应该使用列表推导。

### 字典推导

现在让我们深入字典推导。定义字典推导的基本语法：

```
{<key_value>: <value> for <var> in <sequence>}
```

```python
{<key_value>: <value> for <var> in <sequence> if <condition>}
```

字典推导的一些例子：

```
>>> {num: num**3 for num in range(3, 15)}
{3: 27, 4: 64, 5: 125, 6: 216, 7: 343, 8: 512, 9: 729, 10: 1000, 11: 1331, 12: 1728, 13: 2197, 14: 2744}

>>> {x: x + y for x in range(4, 8) for y in range(3, 7)}
{4: 10, 5: 11, 6: 12, 7: 13}
```

这是一个带有条件的例子，我们从一个现有的字典中提取，并创建一个新的字典，其中只有获得成绩大于或等于 60 分的学生：

```
>>> grades = {"Nora": 78, "Gino": 100, "Talina": 56, "Elizabeth": 45, "Lulu": 67}

>>> approved_students = {student: grade for (student, grade) in grades.items() if grade >= 60}

>>> approved_students
{'Nora': 78, 'Gino': 100, 'Lulu': 67}
```

****I** 真的 **希望你喜欢这篇文章，且能对你有帮助** ** 现在你已经知道了如何编写和使用 Python 中最重要的元素了。

⭐ [订阅我的 YouTube](https://www.youtube.com/channel/UCng0h8WiHLmT57JJ8At4LfQ) 和关注我的[Twitter](https://twitter.com/EstefaniaCassN)以便找到更多的编程教程和技巧。 查看我的在线教程[Python Exercises for Beginners: Solve 100+ Coding Challenges](https://www.udemy.com/course/python-exercises-for-beginners-solve-coding-challenges/?referralCode=804D1EFAF779D07914D2)
