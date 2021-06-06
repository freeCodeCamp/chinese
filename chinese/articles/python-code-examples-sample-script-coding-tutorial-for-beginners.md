> -  原文地址：[Python Code Examples – Sample Script Coding Tutorial for Beginners](https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/)
> -  原文作者：[Estefania Cassingena NavoneEstefania Cassingena Navone](https://www.freecodecamp.org/news/author/estefaniacn/)
> -  译者：ywxgod
> -  校对者：

![Python 代码示例——面向初学者的示例脚本编程教程](https://www.freecodecamp.org/news/content/images/size/w2000/2020/11/Code-Examples-Image.png)

Hi! 欢迎。您是否正在学习Python，如果是的，那这篇文章就是为您而准备的，在文中你将会找到Python语法的详尽描述以及大量的Python代码示例，它将会指导你的Python编程之旅。

### 涵盖的内容：

-   [Python中的变量定义](#-variable-definitions-in-python)
-   [Python中的Hello, World!](#-hello-world-program-in-python)
-   [Python中的数据类型和内建数据结构](#-data-types-and-built-in-data-structures-in-python)
-   [Python中的运算符](#-python-operators)
-   [Python中的条件语句](#-conditionals-in-python)
-   [Python中的for循环](#-for-loops-in-python)
-   [Python中while循环](#-while-loops-in-python)
-   [Python中的循环嵌套](#-nested-loops-in-python)
-   [Python中的函数](#-functions-in-python)
-   [Python中的递归](#-recursion-in-python)
-   [Python中的异常处理](#-exception-handling-in-python)
-   [Python中的面向对象编程](#-object-oriented-programming-in-python)
-   [Python中如何处理文件](#-how-to-work-with-files-in-python)
-   [Python中的导入(import)语句](#-import-statements-in-python)
-   [Python的列表(List)和字典(Dict)推导](#-list-and-dictionary-comprehension-in-python)
-   ...

准备好了吗？让我们开始吧！🔅

💡 **提示：** 在文章中, 我会用`<>`表示这一整块会被其中间的文本描述的元素所取代。例如，`<var>`表示我们写代码时，它会被一个变量所替换。

## 🔹 Python中的变量定义

变量的概念都是任何编程语言中的一个最基本的构件, 变量有一个名称和一个内存中用于存储其值得位置。

在Python中，我们使用这种语法来创建一个变量并为这个变量赋值：

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

如果变量名不止一个单词, 在[Python代码的风格指南](https://www.python.org/dev/peps/pep-0008/)中的建议是要用下划线将单词分开，“根据需要提高代码的可读性”。

例如：

```
my_list = [1, 2, 3, 4, 5]
```

💡 **提示：** Python代码风格指南(PEP 8)有很好的建议，你应该遵循这些建议来编写整洁的Python代码。

## 🔸 Hello, World!

在我们开始深入了解Python的数据类型与数据结构之前，让我们看看如何编写第一个Python程序。

你只需要调用`print()`函数，并且在括号里写上`"Hello, World!"`即可：

```python
print("Hello, World!")
```

程序执行后，你会看到下面的信息:

```
"Hello, World!"
```

💡 **提示：** 写一个`"Hello, World!"`程序是开发者社区的一个传统。大多数开发者都是从编写这个程序开始学习编程的。

很好，你刚刚写了你的第一个Python程序。 现在让我们开始学习Python中的数据类型和内建的数据结构。

## 🔹 Python中的数据类型与内建数据结构

我们有几种基本的数据类型和内建的数据结构可以使用，每一个都有各自特殊的应用场景，让我们来看看具体的使用细节。

### Python中的数字类型：整数(Integers)，浮点数(Floats)，复数(Complex)

Python可以使用的数字类型有下面几种：

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

### Python中的字符串

Python中的字符串非常有用，它们包含一连串的字符，通常用于表示代码中的文本。

例如:

```
"Hello, World!"
```

```
'Hello, World!'
```

我们可以使用单引号`''`或双引号`""`来定义一个字符串。不管哪一种，它们都是有效的、等同的定义，但在程序中你应该始终保持选择其中的一种。

**💡 提示：** 是的！你在写`"Hello, World!"`程序的时候就已经使用过字符串了。无论何时，当你在Python中看到一个被单引号或双引号包围的值时，那它就是一个字符串。

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

Python程序中我们可以使用索引来访问字符串中的字符。索引是一个整数，表示字符串中的一个特定位置。

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

**💡 提示：** 注意，如果某个参数值超出了索引的范围, 并不会影响切片的展示。这就是Python的发明者在考虑如何实现字符串切片功能时所考虑到的。

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

我们还可以用一个**负的**step值来从右向左取值:

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

在Python 3.6或以上版本中，我们可以是使用一种被称为f-string的字符串，它能帮助我们处理字符串格式化更加方便。

定义一个f-string，我们只需要将字符`f`放到单引号或双引号的前面，然后在字符串里面，我们将变量或者表达式用`{}`包含起来。当程序执行的时候，他们会被替换为变量或者表达式的值。

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

字符串的方法，都是被Python开发者实现的一些常见的功能，所以我们可以在代码中直接使用它们。这些字符串方法对执行一些常见的操作非常有用。

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

想了解更多Python方法，建议去Python官方网站阅读[这篇](https://docs.python.org/3/library/stdtypes.html#string-methods)。

💡 **提示：** 所有字符串方法返回的都是一个字符串的副本。它们不会对原始字符串做修改，因为在Python中字符串时不可修改的.

### Python中的布尔类型

Python中布尔类型的值就只有`True`和`False`。它们必须已大写字母开头，这样Python才能识别到是布尔类型的值。

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

### Python中的列表

到此我们已经说完了Python的基本数据类型，现在我们来看看内置的数据结构。首先，来看列表。

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

嵌套列表可以用于表示简单2D游戏板的结构，其中每个数字可以表示不同的元素或图块:

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

💡 **提示：** 这个方法只会删除找到的第一个元素。例如，假设我们想从列表中删除数字3，但列表中包含两个3，那么第二个3将不会被删除。

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

Python同样也实现了一些常用的列表方法，供我们处理一些常用的操作。下面是一些常用列表方法的使用示例：

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

想了解更多列表方法，建议去Python官网阅读[这篇](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)。

### Python中的元组

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

Python中有一个很酷的功能叫做元组解包。 利用解包操作，我们可以在一行同时向多个变量赋值。

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

### Python中的字典

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

上面的表达式将会被key(键)对应的值所替换。

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

想了解更多字典的方法，建议去Python的官网[读这篇](https://docs.python.org/3/library/stdtypes.html#mapping-types-dict)。

## 🔸 Python中的运算符

很好。 现在我们已经知道了Python中的基本数据类型与内建的数据结构，那么接下来我们来深入了解一下Python中的运算符，他们对于执行一些操作和构建表达式至关重要。

### Python中的算法运算符

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

在Python中，`True`等于`1`，`False`等于`0`。这就是为什么`1 + 0 = 1`的原因。

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

#### 乘法运算: \*

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

#### 指数运算: \*\*

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

在Python中，我们可以使用被称为“比较运算符链”的功能。这种链接比较可以让我们更简洁的进行多个表达式的比较。

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

Python中有三种逻辑运算符：`与`，`或`，与`非`。这些运算符中的每一个都有自己的真值表，它们对于处理条件语句至关重要。

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

## 🔹 Python中的条件语句

现在我们看看如何编写一个条件语句，让它使我们程序中的某些部分根据条件的`True`或`False`来执行(或者不执行)。

### Python中的`if`语句

`if`语句的基本语法：

```
if <condition>:
    <code>
```

如果条件是`True`，代码就会执行。 相反，如果是`False`，代码不会执行。

**💡 提示：** 第一行结尾有一个冒号(`:`)并且代码块是有缩进的。缩进在Python中是必不可少的，它能让代码块属于某个条件的范畴。

下面是一些例子：

#### False的情况

```
x = 5

if x > 9:
    print("Hello, World!")
```

条件判断是`x > 9`，代码块是`print("Hello, World!")`。

上面的例子, 条件判断结果是`False`，所以不会有输出。

#### True的情况

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

上面的例子中, 判断条件`x > 9`是`False`，所以第一个print语句不会执行，但是最后一个print语句会被执行，因为它并不属于上面条件语句的代码块，所以最终的输出会是：

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

### Python中的`if/else`语句

如果我们需要指定当条件为`False`时应该做些什么，那么我们可以在条件语句中增加一个`else`字句。

这是一般语法：

```python
if <condition>:
    <code>
else:
    <code>
```

**💡 提示：** 注意上面的两个代码块都有缩进(`if`与`else`)。这些缩进对于Python能区分代码块是属于if还是else语句至关重要。

让我们看一个`else`子语的例子：

#### True的情况

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

当`if`的条件判断是`True`时，if子句被执行，`else`子句不会执行。

#### False的情况

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

### Python中的`if/elif/else`语句

为了进一步定制我们的条件语句，我们还可以添加一个或多个`elif`子句，用来处理多个条件判断。 只有第一个条件为`True`的子句会被执行。

**💡 提示：** `elif`必须写在`if`与`else`之间。

#### 第一个条件为True的情况

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

#### 第二个条件为True的情况

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

#### 所有条件为False的情况

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

#### 多个elif子句的情况

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

## 🔸 Python中的for循环

我们已经了解如何写条件语句, 现在我们来看看for循环。 For循环是一种神奇的代码结构，你可以用它来将代码重复执行你所指定的次数。

Python中for循环基本语法:

```
for <loop_variable> in <iterable>:
    <code>
```

iterable表示可迭代对象，它可以是一个列表，元组，字典，字符串，range返回的一个序列，一个文件，或者其他任意的可迭代类型的数据。下面我们就从`range()`开始。

### `range()`函数

这个函数返回一个整数序列，我们可以用它来确定循环的迭代次数。循环对每一个整数执行一次迭代。

**💡 提示：** 每个整数在每次迭代中都会被赋给一个循环变量。

使用`range()`来创建for循环的基本语法：

```
for <loop_variable> in range(<start>, <stop>, <step>):
    <code>
```

就像你看到的，range函数有三个参数：

-   `start`: 整数序列开始的数字，默认值是`0`。
-   `stop`: 整数序列结束的数字(不包含)。
-   `step`: 序列中从当前数字到下一个数字需要增加的值，默认值是`1`。

你可以传1个，2个或3个参数给`range()`：

-   1个参数，它会赋值给`stop`参数，其他两个参数取默认值。
-   2个参数，会分别赋值给`start`和`stop`参数，`step`取默认值。
-   3个参数，会根据顺序分别赋值给`start`，`stop`与`step`。

**1个参数**的例子：

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

我们还可以将for循环用于内置数据结构，比如列表：

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

**2个参数**的例子：

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

**3个参数**的例子：

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

### Python中如何迭代所有可迭代对象

我们可以使用for循环直接迭代可迭代对象，例如列表、元组、字典、字符串和文件。 在每一次迭代中我们可以获取到它们元素中的一个，这对能直接使用这些对象非常有帮助。

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

我们还可以在for循环中迭代通过调用字符串方法修改后返回的字符串副本，就像这样:

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

#### Break语句

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

#### Continue语句

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

### Python中的zip()函数

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

### Python中的enumerate()函数

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

#### else子句

For循环还有一个`else`子句。你可以在`else`子句中添加额外的代码附加到for循环的后面，只有当for循环的break语句没有被执行到的时候它才会被执行。

**💡 提示：** 如果`break`语句被执行，`else`子句不会执行；如果`break`没有被执行，`else`子句就会被执行。

下面的例子中，我们尝试在列表中找到一个大于6的元素，但是没找到，所以`break`语句没有被执行，而`else`语句被执行了。

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

## 🔹 Python中的While循环

While循环跟for循环一样，都是让我们可以重复执行一个代码块。 不同之处是while与执行之前有一个条件判断要为`True`。

在while循环中，我们要定义一个条件语句，它不是数字的迭代。当条件为`False`时终止循环。

while循环的通用语法：

```python
while <condition>:
    <code>
```

💡 **提示：** 在while循环中, 循环变量会作为条件语句的一部分，我们必须要更新这个循环变量，以确保条件语句最终会变为`False`。

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

#### Break与Continue

在while循环中我们同样可以使用`break`和`continue`，它们工作的原理跟for循环是完全一样的：

-   `break` 立即停止while循环.
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

我们同样可以给while循环添加一个`else`子句。如果`break`被执行，`else`子句不会执行，如果`break`没有被执行，`else`子句就会被执行。

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

#### 无限While循环

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

我们可以在for循环里面再写一个for循环，或者在while循环里面再写一个while循环。这种循环里面的循环就叫做嵌套的循环。

💡 **提示：** 外部循环的每一次迭代，内部循环都会执行一次。

### 嵌套的For循环

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

如果我们添加print语句，我们将会发现这里背后发生了什么：

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

### 嵌套的While循环

下面是一个while循环嵌套的例子。 在这种情况下，我们必须更新作为条件语句的一部分的循环变量，以保证循环的终止。

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

💡 **提示：** 我们同样可以将fow循环写在while循环里面，或者将while循环写到for循环里面。

## 🔹 Python的函数

在Python中，我们可以定义函数来使我们的代码可重用、更具可读性和组织性。下面是函数的基本语法：

```python
def <function_name>(<param1>, <param2>, ...):
    <code>
```

**💡 提示：** 函数可以有0个，1个或多个参数。

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

### 有1个参数的函数

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

### 2个或多个参数的函数

为了定义2个或多个参数，我们只需要将它们用逗号进行分割：

```
def print_sum(a, b):
    print(a + b)
```

当调用上面的函数时，我们必须得传2个参数：

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

你可以看到下面带有自定义字符的输出，是通过我们传了2个参数的调用输出的。

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

很好。现在你已经知道了如何定义一个函数，那么让我们看看如何使用return语句。

我们经常需要从函数中返回一个值，而`return`语句可以做到。我们只需要将return语句加到函数的定义中。

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

我们也可以用条件语句跟`return`语句一起使用，return会根据条件是`True`还是`False`来返回一个值。

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

[Python代码的风格指南](https://www.python.org/dev/peps/pep-0008/#programming-recommendations) 建议我们一贯第使用返回语句。我们应该：

> Be consistent in return statements. Either all return statements in a function should return an expression, or none of them should. If any return statement returns an expression, any return statements where no value is returned should explicitly state this as return None, and an explicit return statement should be present at the end of the function (if reachable)

### Default Arguments in Python

We can assign default arguments for the parameters of our function. To do this, we just need to write `<parameter>=<value>` in the list of parameters.

**💡 Tip:** The [Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/#other-recommendations) mentions that we shouldn't "use spaces around the = sign when used to indicate a keyword argument."

In this example, we assign the default value 5 to the parameter `b`. If we omit this value when we call the function, the default value will be used.

```
def print_product(a, b=5):
    print(a * b)
```

If we call the function without this argument, you can see the output:

```python
>>> print_product(4)
20
```

We confirm that the default argument 5 was used in the operation.

But we can also assign a custom value for `b` by passing a second argument:

```python
>>> print_product(3, 4)
12
```

💡 **Tip:** parameters with default arguments have to be defined at the end of the list of parameters. Else, you will see this error: `SyntaxError: non-default argument follows default argument`.

Here we have another example with the function that we wrote to print a pattern. We assign the default value `"*"` to the `char` parameter.

```
def print_pattern(num_rows, char="*"):
	for i in range(num_rows):
		for num_cols in range(num_rows-i):
			print(char, end="")
		print()
```

Now we have the option to use the default value or customize it:

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

## 🔸 Recursion in Python

A recursive function is a function that calls itself. These functions have a base case that stops the recursive process and a recursive case that continues the recursive process by making another recursive call.

Here we have some examples in Python:

```python
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n-1)
```

Recursive Factorial Function

```python
def fibonacci(n):
    if n == 0 or n == 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)
```

The Fibonacci Function

```python
def find_power(a, b):
    if b == 0:
        return 1
    else:
        return a * find_power(a, b-1)
```

Find a Power Recursively

## 🔹 Exception Handling in Python

An error or unexpected event that that occurs while a program is running is called an **exception**. Thanks to the elements that we will see in just a moment, we can avoid terminating the program abruptly when this occurs.

Let's see the types of exceptions in Python and how we can handle them.

### Common Exceptions in Python

This is a list of common exceptions in Python and why they occur:

-   **ZeroDivisionError:** raised when the second argument of a division or modulo operation is zero.

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

-   **IndexError:** raised when we try to use an invalid index to access an element of a sequence.

```python
>>> my_list = [3, 4, 5, 6]

>>> my_list[15]
Traceback (most recent call last):
  File "<pyshell#4>", line 1, in <module>
    my_list[15]
IndexError: list index out of range
```

-   **KeyError:** raised when we try to access a key-value pair that doesn't exist because the key is not in the dictionary.

```python
>>> my_dict = {"a": 1, "b": 2, "c": 3}

>>> my_dict["d"]
Traceback (most recent call last):
  File "<pyshell#6>", line 1, in <module>
    my_dict["d"]
KeyError: 'd'
```

-   **NameError:** raised when we use a variable that has not been defined previously.

```python
>>> b
Traceback (most recent call last):
  File "<pyshell#8>", line 1, in <module>
    b
NameError: name 'b' is not defined
```

-   **RecursionError:** raised when the interpreter detects that the maximum recursion depth is exceeded. This usually occurs when the process never reaches the base case.

In the example below, we will get a `RecursionError`. The `factorial` function is implemented recursively but the argument passed to the recursive call is `n` instead of `n-1`. Unless the value is already `0` or `1`, the base case will not be reached because the argument is not being decremented, so the process will continue and we will get this error.

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

💡 **Tip:** to learn more about these exceptions, I recommend reading [this article](https://docs.python.org/3/library/exceptions.html) from the documentation.

### `try` / `except` in Python

We can use try/except in Python to catch the exceptions when they occur and handle them appropriately. This way, the problem can terminate appropriately or even recover from the exception.

This is the basic syntax:

```python
try:
    <code_that_may_raise_an_exception>
except:
    <code_to_handle_the_exception_if_it_occurs>
```

For example, if we take user input to access an element in a list, the input might not be a valid index, so an exception could be raised:

```python
index = int(input("Enter the index: "))

try:
    my_list = [1, 2, 3, 4]
    print(my_list[index])
except:
    print("Please enter a valid index.")
```

If we enter an invalid value like 15, the output will be:

```python
Please enter a valid index.
```

Because the `except` clause runs. However, if the value is valid, the code in `try` will run as expected.

Here we have another example:

```
a = int(input("Enter a: "))
b = int(input("Enter b: "))

try:
    division = a / b
    print(division)
except:
    print("Please enter valid values.")
```

The output is:

```
Enter a: 5
Enter b: 0

Please enter valid values.
```

### How to Catch a Specific Type of Exception in Python

Instead of catching and handling all possible exceptions that could occur in the `try` clause, we could catch and handle a specific type of exception. We just need to specify the type of the exception after the `except` keyword:

```python
try:
    <code_that_may_raise_an_exception>
except <exception_type>:
    <code_to_handle_an_exception_if_it_occurs>
```

For example:

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

### How to Assign a Name to the Exception Object in Python

We can specify a name for the exception object by assigning it to a variable that we can use in the `except` clause. This will let us access its description and attributes.

We only need to add `as <name>`, like this:

```python
try:
    <code_that_may_raise_an_exception>
except <exception_type> as <name>:
    <code_to_handle_an_exception_if_it_occurs>
```

For example:

```python
index = int(input("Enter the index: "))

try:
    my_list = [1, 2, 3, 4]
    print(my_list[index])
except IndexError as e:
    print("Exception raised:", e)
```

This is the output if we enter `15` as the index:

```
Enter the index: 15
Exception raised: list index out of range
```

This is another example:

```python
a = int(input("Enter a: "))
b = int(input("Enter b: "))

try:
    division = a / b
    print(division)
except ZeroDivisionError as err:
    print("Please enter valid values.", err)
```

This is the output if we enter the value `0` for `b`:

```python
Please enter valid values. division by zero
```

### `try` / `except` / `else` in Python

We can add an `else` clause to this structure after `except` if we want to choose what happens when no exceptions occur during the execution of the `try` clause:

```python
try:
    <code_that_may_raise_an_exception>
except:
    <code_to_handle_an_exception_if_it_occurs>
else:
    <code_that_only_runs_if_no_exception_in_try>
```

For example:

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

If we enter the values `5` and `0` for `a` and `b` respectively, the output is:

```
Please enter valid values. division by zero
```

But if both values are valid, for example `5` and `4` for `a` and `b` respectively, the `else` clause runs after `try` is completed and we see:

```python
1.25
Both values were valid.
```

### `try` / `except` / `else` / `finally` in Python

We can also add a `finally` clause if we need to run code that should always run, even if an exception is raised in `try`.

For example:

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

If both values are valid, the output is the result of the division and:

```
Both values were valid.
Finally!
```

And if an exception is raised because `b` is `0`, we see:

```python
Please enter valid values. division by zero
Finally!
```

The `finally` clause always runs.

**💡 Tip:** this clause can be used, for example, to close files even if the code throws an exception.

## 🔸 Object-Oriented Programming in Python

In Object-Oriented Programming (OOP), we define classes that act as blueprints to create objects in Python with attributes and methods (functionality associated with the objects).

This is a general syntax to define a class:

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

**💡 Tip:** `self` refers to an instance of the class (an object created with the class blueprint).

As you can see, a class can have many different elements so let's analyze them in detail:

### Class Header

The first line of the class definition has the `class` keyword and the name of the class:

```
class Dog:
```

```
class House:
```

```
class Ball:
```

**💡 Tip:** If the class inherits attributes and methods from another class, we will see the name of the class within parentheses:

```
class Poodle(Dog):
```

```
class Truck(Vehicle):
```

```
class Mom(FamilyMember):
```

In Python, we write class name in Upper Camel Case (also known as Pascal Case), in which each word starts with an uppercase letter. For example: `FamilyMember`

### `__init__` and instance attributes

We are going to use the class to create object in Python, just like we build real houses from blueprints.

The objects will have attributes that we define in the class. Usually, we initialize these attributes in `__init__`. This is a method that runs when we create an instance of the class.

This is the general syntax:

```python
def __init__(self, <parameter1>, <parameter2>, ...):
        self.<attribute1> = <parameter1>  # Instance attribute
        self.<attribute2> = <parameter2>  # Instance attribute
        .
        .
        .
        # As many instance attributes as needed
```

We specify as many parameters as needed to customize the values of the attributes of the object that will be created.

Here is an example of a `Dog` class with this method:

```python
class Dog:

    def __init__(self, name, age):
        self.name = name
        self.age = age
```

💡 **Tip:** notice the double leading and trailing underscore in the name `__init__`.

### How to Create an Instance

To create an instance of `Dog`, we need to specify the name and age of the dog instance to assign these values to the attributes:

```python
my_dog = Dog("Nora", 10)
```

Great. Now we have our instance ready to be used in the program.

Some classes will not require any arguments to create an instance. In that case, we just write empty parentheses. For example:

```
class Circle:

    def __init__(self):
        self.radius = 1
```

To create an instance:

```python
>>> my_circle = Circle()
```

💡 **Tip:** `self` is like a parameter that acts "behind the scenes", so even if you see it in the method definition, you shouldn't consider it when you pass the arguments.

### Default Arguments

We can also assign default values for the attributes and give the option to the user if they would like to customize the value.

In this case, we would write `<attribute>=<value>` in the list of parameters.

This is an example:

```
class Circle:

    def __init__(self, radius=1):
        self.radius = radius
```

Now we can create a `Circle` instance with the default value for the radius by omitting the value or customize it by passing a value:

```python
# Default value
>>> my_circle1 = Circle()

# Customized value
>>> my_circle2 = Circle(5)
```

### How to Get an Instance Attribute

To access an instance attribute, we use this syntax:

```python
<object_variable>.<attribute>
```

For example:

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

### How to Update an Instance Attribute

To update an instance attribute, we use this syntax:

```
<object_variable>.<attribute> = <new_value>
```

For example:

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

### How to Remove an Instance Attribute

To remove an instance attribute, we use this syntax:

```
del <object_variable>.<attribute>
```

For example:

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

### How to Delete an Instance

Similarly, we can delete an instance using `del`:

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

### Public vs. Non-Public Attributes in Python

In Python, we don't have access modifiers to functionally restrict access to the instance attributes, so we rely on naming conventions to specify this.

For example, by adding a leading underscore, we can signal to other developers that an attribute is meant to be non-public.

For example:

```python
class Dog:

    def __init__(self, name, age):
        self.name = name  # Public attribute
        self._age = age   # Non-Public attribute
```

The Python documentation mentions:

> Use one leading underscore only for non-public methods and instance variables.  
>   
> Always decide whether a class's methods and instance variables (collectively: "attributes") should be public or non-public. If in doubt, choose non-public; it's easier to make it public later than to make a public attribute non-public.  
>   
> Non-public attributes are those that are not intended to be used by third parties; you make no guarantees that non-public attributes won't change or even be removed. - [source](https://www.python.org/dev/peps/pep-0008/#designing-for-inheritance)

However, as the documentation also mentions:

> We don't use the term "private" here, since no attribute is really private in Python (without a generally unnecessary amount of work). - [source](https://www.python.org/dev/peps/pep-0008/#designing-for-inheritance)

**💡 Tip:** technically, we can still access and modify the attribute if we add the leading underscore to its name, but we shouldn't.

### Class Attributes in Python

Class attributes are shared by all instances of the class. They all have access to this attribute and they will also be affected by any changes made to these attributes.

```python
class Dog:

    # Class attributes
    kingdom = "Animalia"
    species = "Canis lupus"

    def __init__(self, name, age):
        self.name = name
        self.age = age
```

**💡 Tip:** usually, they are written before the `__init__` method.

### How to Get a Class Attribute

To get the value of a class attribute, we use this syntax:

```
<class_name>.<attribute>
```

For example:

```
>>> class Dog:

    kingdom = "Animalia"

    def __init__(self, name, age):
        self.name = name
        self.age = age

        
>>> Dog.kingdom
'Animalia'
```

**💡 Tip:** You can use this syntax within the class as well.

### How to Update a Class Attribute

To update a class attribute, we use this syntax:

```
<class_name>.<attribute> = <value>
```

For example:

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

### How to Delete a Class Attribute

We use `del` to delete a class attribute. For example:

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

### How to Define Methods

Methods represent the functionality of the instances of the class.

**💡 Tip:** Instance methods can work with the attributes of the instance that is calling the method if we write `self.<attribute>` in the method definition.

This is the basic syntax of a method in a class. They are usually located below `__init__`:

```python
class <ClassName>:

    # Class attributes

    # __init__

    def <method_name>(self, <param1>, ...):
        <code>
```

They may have zero, one, or more parameters if needed (just like functions!) but instance methods must always have `self` as the first parameter.

For example, here is a `bark` method with no parameters (in addition to `self`):

```python
class Dog:

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        print(f"woof-woof. I'm {self.name}")
```

To call this method, we use this syntax:

```
<object_variable>.<method>(<arguments>)
```

For example:

```python
# Create the instance
>>> my_dog = Dog("Nora", 10)

# Call the method
>>> my_dog.bark()
woof-woof. I'm Nora
```

Here we have a `Player` class with an `increment_speed` method with one parameter:

```python
class Player:

    def __init__(self, name):
        self.name = name
        self.speed = 50

    def increment_speed(self, value):
        self.speed += value
```

To call the method:

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

💡 **Tip:** to add more parameters, just separate them with a comma. It is recommended to add a space after the comma.

### Properties, Getters and Setters in Python

Getters and setters are methods that we can define to get and set the value of an instance attribute, respectively. They work as intermediaries to "protect" the attributes from direct changes.

In Python, we typically use properties instead of getters and setters. Let's see how we can use them.

To define a property, we write a method with this syntax:

```
@property
def <property_name>(self):
    return self.<attribute>
```

This method will act as a getter, so it will be called when we try to access the value of the attribute.

Now, we may also want to define a setter:

```
@<property_name>.setter
def <property_name>(self, <param>):
    self.<attribute> = <param>
```

And a deleter to delete the attribute:

```
@<property_name>.deleter
def <property_name>(self):
    del self.<attribute>
```

**💡 Tip:** you can write any code that you need in these methods to get, set, and delete an attribute. It is recommended to keep them as simple as possible.

This is an example:

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

If we add descriptive print statements, we can see that they are called when we perform their operation:

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

## 🔹 How to Work with Files in Python

Working with files is very important to create powerful programs. Let's see how you can do this in Python.

### How to Read Files in Python

In Python, it's recommended to use a `with` statement to work with files because it opens them only while we need them and it closes them automatically when the process is completed.

To read a file, we use this syntax:

```python
with open("<file_path>") as <file_var>:
    <code>
```

We can also specify that we want to open the file in read mode with an `"r"`:

```python
with open("<file_path>", "r") as <file_var>:
    <code>
```

But this is already the default mode to open a file, so we can omit it like in the first example.

This is an example:

```python
with open("famous_quotes.txt") as file:
    for line in file:
        print(line)
```

or...

```python
with open("famous_quotes.txt", "r") as file:
    for line in file:
        print(line)
```

**💡 Tip:** that's right! We can iterate over the lines of the file using a for loop. The file path can be relative to the Python script that we are running or it can be an absolute path.

### How to Write to a File in Python

There are two ways to write to a file. You can either replace the entire content of the file before adding the new content, or append to the existing content.

```python
with open("<file_path>", "w") as <file_var>:
    <code>
```

To replace the content completely, we use the `"w"` mode, so we pass this string as the second argument to `open()`. We call the `.write()` method on the file object passing the content that we want to write as argument.

For example:

```python
words = ["Amazing", "Green", "Python", "Code"]

with open("famous_quotes.txt", "w") as file:
    for word in words:
        file.write(word + "\n")
```

When you run the program, a new file will be created if it doesn't exist already in the path that we specified.

This will be the content of the file:

```python
Amazing
Green
Python
Code
```

### How to Append to a File in Python

However, if you want to append the content, then you need to use the `"a"` mode:

```
with open("<file_path>", "a") as <file_var>:
    <code>
```

For example:

```python
words = ["Amazing", "Green", "Python", "Code"]

with open("famous_quotes.txt", "a") as file:
    for word in words:
        file.write(word + "\n")
```

This small change will keep the existing content of the file and it will add the new content to the end.

If we run the program again, these strings will be added to the end of the file:

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

### How to Delete a File in Python

To delete a file with our script, we can use the `os` module. It is recommended to check with a conditional if the file exists before calling the `remove()` function from this module:

```import
import os

if os.path.exists("<file_path>"):
  os.remove("<file_path>")
else:
  <code>
```

For example:

```python
import os

if os.path.exists("famous_quotes.txt"):
  os.remove("famous_quotes.txt")
else:
  print("This file doesn't exist")
```

You might have noticed the first line that says `import os`. This is an import statement. Let's see why they are helpful and how you can work with them.

## 🔸 Import Statements in Python

Organizing your code into multiple files as your program grows in size and complexity is good practice. But we need to find a way to combine these files to make the program work correctly, and that is exactly what import statements do.

By writing an import statement, we can import a module (a file that contains Python definitions and statements) into another file.

These are various alternatives for import statements:

### First Alternative:

```
import <module_name>
```

For example:

```
import math
```

💡 **Tip:** `math` is a built-in Python module.

If we use this import statement, we will need to add the name of the module before the name of the function or element that we are referring to in our code:

```python
>>> import math
>>> math.sqrt(25)
5.0
```

We explicitly mention in our code the module that the element belongs to.

### Second Alternative:

```
import <module> as <new_name>
```

For example:

```
import math as m
```

In our code, we can use the new name that we assigned instead of the original name of the module:

```python
>>> import math as m
>>> m.sqrt(25)
5.0
```

### Third Alternative:

```
from <module_name> import <element>
```

For example:

```
from math import sqrt
```

With this import statement, we can call the function directly without specifiying the name of the module:

```
>>> from math import sqrt
>>> sqrt(25)
5.0
```

### Fourth Alternative:

```
from <module_name> import <element> as <new_name>
```

For example:

```python
from math import sqrt as square_root
```

With this import statement, we can assign a new name to the element imported from the module:

```python
>>> from math import sqrt as square_root
>>> square_root(25)
5.0
```

### Fifth Alternative:

```
from <module_name> import *
```

This statement imports all the elements of the module and you can refer to them directly by their name without specifying the name of the module.

For example:

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

💡 **Tip:** this type of import statement can make it more difficult for us to know which elements belong to which module, particularly when we are importing elements from multiple modules.

According to the [Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/#imports):

> **Wildcard imports** (from <module> import \*) should be avoided, as they make it unclear which names are present in the namespace, confusing both readers and many automated tools.

## 🔹 Python中的列表与字典推导

Python中你应该知道的一个很棒的功能特性是列表与字典推导功能。它们是一种更加紧凑地创建列表和字典的方法。

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

我们可以使用生成器表达式在for循环中迭代并一次获取一个元素。但如果你需要将元素存储到列表中，你应该使用列表推导。

### 字典推导

Now let's dive into dictionary comprehension. The basic syntax that we need to use to define a dictionary comprehension is:

```
{<key_value>: <value> for <var> in <sequence>}
```

```python
{<key_value>: <value> for <var> in <sequence> if <condition>}
```

Here we have some examples of dictionary comprehension:

```
>>> {num: num**3 for num in range(3, 15)}
{3: 27, 4: 64, 5: 125, 6: 216, 7: 343, 8: 512, 9: 729, 10: 1000, 11: 1331, 12: 1728, 13: 2197, 14: 2744}

>>> {x: x + y for x in range(4, 8) for y in range(3, 7)}
{4: 10, 5: 11, 6: 12, 7: 13}
```

This is an example with a conditional where we take an existing dictionary and create a new dictionary with only the students who earned a passing grade greater than or equal to 60:

```
>>> grades = {"Nora": 78, "Gino": 100, "Talina": 56, "Elizabeth": 45, "Lulu": 67}

>>> approved_students = {student: grade for (student, grade) in grades.items() if grade >= 60}

>>> approved_students
{'Nora': 78, 'Gino': 100, 'Lulu': 67}
```

****I** really **hope you liked this article and found it helpful.** ** Now you know how to write and work with the most important elements of Python.

⭐ [Subscribe to my YouTube channel](https://www.youtube.com/channel/UCng0h8WiHLmT57JJ8At4LfQ) and follow me on [Twitter](https://twitter.com/EstefaniaCassN) to find more coding tutorials and tips. Check out my online course [Python Exercises for Beginners: Solve 100+ Coding Challenges](https://www.udemy.com/course/python-exercises-for-beginners-solve-coding-challenges/?referralCode=804D1EFAF779D07914D2)
