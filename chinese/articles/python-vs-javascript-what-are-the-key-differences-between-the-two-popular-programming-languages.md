> * 原文地址：[Python VS JavaScript – What are the Key Differences Between The Two Popular Programming Languages?](https://www.freecodecamp.org/news/python-vs-javascript-what-are-the-key-differences-between-the-two-popular-programming-languages/)
> * 原文作者：Estefania Cassingena Navone
> * 译者：ZhichengChen
> * 校对者：

![Python VS JavaScript – What are the Key Differences Between The Two Popular Programming Languages?](https://www.freecodecamp.org/news/content/images/size/w2000/2021/01/Python-vs.-JavaScript-1.png)

**欢迎**！如果你想了解 Python 和 JavaScript 的区别，这篇文章就是为你准备的。

这两门语言都很流行也很强大，但是他们有一些区别。这里会详细介绍。

**在这篇文章里，你会学到：**

-   现实中 Python 和 JavaScript 的应用场景。
-   Python 和 JavaScript 句法和函数的区别。

**开始吧**  ✨

## 🔹 Python VS JavaScript: 真实世界的应用领域

我们会快速看一下他们在现实中的应用领域。

![](https://www.freecodecamp.org/news/content/images/2021/01/image-187.png)

### Python

得益于 Python 的功能强大和灵活多变，它已成为全球几乎所有科学领域中必不可少的工具。 它是一种通用的编程语言，支持不同的编程范式。

Python 广泛应用于科学和特定领域，包括数据科学、人工智能、机器学习、计算机科学教育、计算机视觉和图像处理、医学、生物甚至是天文学。

Python 也可以用于 web 开发。我们要和 JavaScript 应用对比的就是 Python 的 web 应用。Python 可以用于后端开发，后端开发的程序是 web 开发里用户直接看不到的部分，比如服务端应用程序。
### JavaScript

Python 可以用来开发后端应用，JavaScript 既可以开发后端应用也可以开发前端应用。

前端是应用里用户可以看见及交互的部分。当你浏览或者操作网站或者 web 应用时，就使用了 JavaScript。

类似的，当你使用移动应用时，也可能用到了 JavaScript，因为一些框架诸如   [React Native][1] 允许我们写一些可以发布到不同平台的移动应用。

JavaScript 在 web 开发里应用的如此广泛也得益于它的灵活性，可以用它来构建各种 web 组件。

### Python 和 JavaScript 应用领域的区别

简短来说，开发者经常在科学领域使用 Python。而 JavaScript 则用于 web 开发，用户界面交互以及服务端开发。

## 🔸 Python VS JavaScript: 句法

现在了解了他们的应用领域，来看一看他们写法和句法的不同。

我们会涉及到如下部分：

-   语句块
-   变量定义
-   变量命名约定
-   常量
-   数据类型和值
-   注释
-   内置数据结构
-   操作符
-   输入/输出
-   条件语句
-   for 循环和 while 循环
-   函数
-   面向对象编程

## Python 和 JavaScript 中的语句块

每种编程语言都有他自己的代码块风格，让我们来看看 Python 和 JavaScript 间代码块的区别：

### Python 怎样定义代码块

Python 依赖缩进来定义代码块。当一系列连续的代码行缩进级别相同时，代表他们是同一个代码块。

我们在 Python 中用这种方式来定义条件、函数、循环以及每个基本的语句。

这里是一些例子：

![](https://www.freecodecamp.org/news/content/images/2021/01/image-127.png)
Python 中使用缩进来定义代码块

**💡 提示:**  一会我们会看到 Python 和 JavaScript 中这些语句的区别，目前只关注缩进就好了。

### JavaScript 怎样定义代码块

JavaScript 使用大括号(`{}`)来给相同的代码块分组。

这里是一些例子：

![](https://www.freecodecamp.org/news/content/images/2021/01/image-128.png)
JavaScript 使用大括号来定义代码块

## Python 和 JavaScript 中的变量定义

赋值语句在任何编程语言里都是最基础的语句。来看一下 怎样在 Python 和 JavaScript 中定义一个变量。
### 怎样在 Python 中定义一个变量

在 Python 中定义变量，可以在变量名后跟一个等号(`=`)和要赋给变量的值。

如下：

```python
<variable_name> = <value>
```

比如：

```python
x = 5
```

### 怎样在 JavaScript 中定义一个变量

JavaScript 的句法类似，只需要在变量名前添加关键字 `var`，然后在行末尾添加一个分号（`;`）。

如下：

```
var <variable_name> = <value>;
```

**💡 提示:**  当使用 `var`  定义变量时，变量具有函数作用域。

举个例子：

```
var x = 5;
```

也可以使用关键字 `let`：

```
let <variable_name> = <value>;
```

举个例子：

```
let x = 5;
```

**💡 提示:** 在这里，使用 `let` 关键字，变量具有块级作用域。仅可以在定义它的语句块内可用。

![](https://www.freecodecamp.org/news/content/images/2021/01/image-125.png)
Python 和 JavaScript 中的变量定义

💡  **提示：** 在 JavaScript 里，语句结尾有一个分号（`;`）但是在 Python 里，另起一行就代表了语句结束。

## Python 和 JavaScript 里的变量命名约定

Python 和 JavaScript 遵循两种不同的变量命名约定。

### Python 怎么命名变量

在 Python 里使用 `蛇形命名（snake_case）`。

根据  [Python 编程规范][2]：

> 变量命名遵循和函数命名相同的规范。
>
> 函数命名应该 “小写，下划线分割单词” 以提高辨识度。

因此，Python 里典型的变量命名如下：

```python
first_name
```

💡  **提示：** 编程规范也提到，如果上下文使用了 `mixedCase`，那么应该保持风格统一。

### JavaScript 里怎么命名变量

在 JavaScript 里使用 `小驼峰（lowerCamelCase）` 命名风格。变量名以小写字母开始，每个新的单词以大写字母开始。

根据 MDN Web 文档的 [JavaScript 准则][3]：

> 变量命名使用小驼峰。命名应该是简洁的、可读的、语义化的。

JavaScript 里典型的命名变量如下：

```javascript
firstName
```

![](https://www.freecodecamp.org/news/content/images/2021/01/image-178.png)

## Python和 JavaScript 里的常量

可。现在已经了解了变量，现在来聊一聊常量。常量的值在程序执行期间不可改变。

### 怎样在 Python 里定义常量

在 Python 里，用命名约定来定义常量，在语言没有严格的规则来阻止值的改变。

根据  [Python 编程规范][4]：

> 常量通常在模块级别定义，单词大写通过下划线分割。

这是在 Python 里定义常量的命名风格：

```
CONSTANT_NAME
```

比如:

```javascript
TAX_RATE_PERCENTAGE = 32
```

 💡 **提示：** 这对我们自己和其他开发人员来说是一个提示，表示不应在程序中修改此值。但是技术上，这个值还是能被修改的。

# 怎样在 JavaScript 中定义常量

JavaScript 则可以定义不能在程序里修改，无法重新分配修饰符的常量。

但这并不意味着值本身不能改变。

根据  [MDN Web 文档][5] 里的  `const` 文章：

> `const`  声明创建了值的一个只读引用。这并不意味着值不能改变 — 只是表示修饰符不能重新分配。比如，如果常量引用的是一个对象，这意味着对象的内容（比如，属性）可以改变。

在常量名称前添加 `const` 关键字来定义常量：

```
const TAX_RATE_PERCENTAGE = 32;
```

如果尝试改变常量的值，会报错：

![](https://www.freecodecamp.org/news/content/images/2021/01/image-180.png)

也就是说，常量的值不能改成另一个值。

**💡 提示：** 可以在  [Chrome 开发者工具里的控制台][6] 来运行 JavaScript 代码片段。

![](https://www.freecodecamp.org/news/content/images/2021/01/image-181.png)

## Python 和 JavaScript 里的数据类型和值

让我们来看一下 Python 和 JavaScript 的数据类型的区别。

### 数值类型

**Python** 具有三种数值类型，可帮助我们更科学的执行精确的计算。 这些数字类型包括：`int`（整数），`float`（浮点数）和 `complex`（复数）。 它们中的每一个都有其自己的属性，特征和应用领域。

而  **JavaScript** 只有两种数值类型：`Number`  和  `BigInt`。 `Number` 既可以是整数也可以是浮点数。

根据 MDN Web 文档的  [Number][7]：

> JavaScript 代码中的数字如 `37` 是浮点值，而不是整数。 日常使用中没有单独的整数类型。（JavaScript 现在有了 [BigInt][8] 类型，但并非旨在用于替换日常使用的 Number 。`37` 仍然是Number而不是BigInt。）

### None vs. null

在 **Python** 中，有一个特殊的值叫做 **None**，我们通常使用它来描述变量在程序中没有值的状态。

**JavaScript** 中的等效值是 `null`，它表示变量指向尚未创建的对象（[源][9]）。

![](https://www.freecodecamp.org/news/content/images/2021/01/image-144.png)

### `undefined`  值

在 **JavaScript** 中，我们有一个特殊值，当我们声明变量而不分配初始值时会自动分配这个特殊值。

这是一个例子：

![](https://www.freecodecamp.org/news/content/images/2021/01/image-142.png)

可以看到，变量 `x` 的值是 `undefined`。

在 **Python** 中，必须为变量分配一个初始值。 没有初始值会声明失败。

**💡提示：** 可以将 **None** 分配为 Python 中的变量作为初始值，以表示不存在任何值。

### Python 和 JavaScript 里的原始数据类型

原始数据类型是可以在编程语言中使用的最基本的值。让我们比较一下这两种语言的原始数据类型：

- **Python** 具有四种原始数据类型：整数类型（`int`）、浮点数类型（`float`）、布尔类型（`bool`）和字符串类型（`str`）。
 - **JavaScript** 具有六种原始数据类型：`undefined`、布尔值、字符串、数字、`BigInt` 和 `Symbol`。

## 怎样在 Python 和 JavaScript 里写注释

注释对于编写简洁易读的代码非常重要。让我们看看如何在 Python 和 JavaScript 中添加注释：

### 单行注释

- 在 **Python** 中，我们使用井号（`#`）编写注释。 该符号后面同一行上的所有字符均被视为注释的一部分。
 - 在 **JavaScript** 中，我们用两个斜线（`//`）开始单行注释。

这里是一个例子：

![](https://www.freecodecamp.org/news/content/images/2021/01/image-145.png)

在 Python 里:

```python
# Comment
```

在 JavaScript 里:

```javascript
// Comment
```

### 多行注释

- 在 **Python** 中，多行注释的每一行都以井号标签开始。
- 在 **JavaScript** 中，多行注释以 `/*` 开始，以 `*/` 结尾。 这些符号之间的所有字符均被视为注释的一部分。

![](https://www.freecodecamp.org/news/content/images/2021/01/image-146.png)

在 Python 里:

```python
# Multi-line comment 
# in Python to explain
# the code in detail.
```

在 JavaScript 里:

```javascript
/* 
Multi-line comment 
in JavaScript to explain 
the code in detail.
*/
```

## Python 和 JavaScript 的内置数据结构

Python 和 JavaScript 的内置数据结构也有一些区别。

### Tuples

- 在 **Python** 中，我们有一个称为 **tuple** 的内置数据结构，它与 list 非常相似，但不可变。因此，在程序执行期间无法更改它，它可以用于存储不应修改的数据。
 - 在 **JavaScript** 中，没有内置这种数据结构。但是可以使用语言的某些特性来实现类似的数据结构。


![](https://www.freecodecamp.org/news/content/images/2021/01/image-182.png)

### Lists vs. Arrays

- 在 **Python** 中，**lists** 用于在同一数据结构中存储一系列值。 可以在程序中对其进行修改、索引、切片和使用。
- 在 **JavaScript** 中，此数据结构的等效版本称为 **array**。

这是一个例子：

![](https://www.freecodecamp.org/news/content/images/2021/01/image-147.png)

### 哈希表

- 在 **Python** 中，有一个称为 **dictionary** 的内置数据结构，可帮助我们将某些值映射到其他值并创建键值对。这可以用作哈希表。
 - **JavaScript** 没有这种类型的内置数据结构，可以使用语言的某些元素来实现相同的功能。

![](https://www.freecodecamp.org/news/content/images/2021/01/image-183.png)

## Python 和 JavaScript 的运算符

任何编程语言编写表达式都需要用到运算符。让我们看看 Python 和 JavaScript 中的运算符主要区别。

### Floor Division

大多数算术运算符在 Python 和 JavaScript 中的用法完全相同，Floor Division 运算符却略有不同。

- 在 **Python** 中， 用双斜杠（`//`）表示 floor division 运算（也称为 “整数除法”）。
 - 在 **JavaScript** 中，没有特定的 floor division 运算符。 但是可以调用 **Math.floor()** 方法将结果四舍五入到最接近的整数。

![](https://www.freecodecamp.org/news/content/images/2021/01/image-149.png)

### 比较值和类型

在 **Python** 里使用 `==` 运算符来比较两个值或者数据类型是否相等。

比如：

```python
# Comparing Two Integers
>>> 0 == 0     
True
# Comparing Integer to String
>>> 0 == "0"
False
```

在 **JavaScript** 中也有此运算符，但它的工作方式略有不同，它会在执行比较之前将两个对象转换为相同的类型。

如果我们使用 JavaScript 运行上一个示例中的 “整数与字符串” 比较（`0 == "0"`），比较的结果为 `True` 而不是 `False` ，因为 JavaScript 在比较之前会将比较的值转换为相同的数据类型：

![](https://www.freecodecamp.org/news/content/images/2021/01/image-150.png)

在JavaScript中，要检查值**和**数据类型是否相等，我们需要使用此运算符 `===`（严格相等运算符）。

现在我们得到了预期的结果：

![](https://www.freecodecamp.org/news/content/images/2021/01/image-151.png)

棒！

**💡提示：** Python中的 `==` 等价于JavaScript中的 `===` 运算符。

### 逻辑运算符

- 在 **Python** 中，三个逻辑运算符为：`and`、`or` 和 `not`。
- 在 **JavaScript** 中，这些运算符分别为：`&&`、`||` 和 `!` 。

![](https://www.freecodecamp.org/news/content/images/2021/01/image-152.png)

### 类型运算符

- 在 **Python** 中，使用 `type()` 函数来检查对象的类型。
 -在 **JavaScript** 中，使用 `typeof` 运算符。

这是它们语法的图示：

![](https://www.freecodecamp.org/news/content/images/2021/01/image-153.png)

## Python 和 JavaScript 里的输入和输出

读取用户输入并向用户显示值是非常常见的操作。让我们看看如何用 Python 和 JavaScript 做到这一点：

### Input

- 在 **Python** 中，使用 `input()` 函数来读取用户输入。 将提示信息写在括号内。
- 在 **JavaScript** 中，一种替代方法（如果您正在浏览器上运行代码）是显示 `window.prompt(message)` 提示框，并将结果分配给变量。

两种方法之间的主要区别是，在 Python 中，将提示用户在控制台中输入值，而在 JavaScript 中，浏览器中会显示一个提示框，用户可以在上面输入值。

![](https://www.freecodecamp.org/news/content/images/2021/01/image-161.png)

💡  **提示：** 您将在 Python 控制台中看到如下提示：

![](https://www.freecodecamp.org/news/content/images/2021/01/image-184.png)

对于 JavaScript，可以打开Chrome Developer工具并在控制台中输入以下代码：

![](https://www.freecodecamp.org/news/content/images/2021/01/image-163.png)

会展示如下提示框：

![](https://www.freecodecamp.org/news/content/images/2021/01/image-162.png)
当调用  window.prompt() 时弹出的提示框

### Output

- 在 **Python** 中，使用 `print()` 函数将值打印到控制台，括号内是要打印的值。
- 在 **JavaScript** 中，使用 `console.log()` 向控制台打印一个值，括号内是要打印的值。

![](https://www.freecodecamp.org/news/content/images/2021/01/image-164.png)

💡 **提示：** 如果您使用的是浏览器，还可以调用 `alert()` 以显示一个提示框，括号内是要显示的消息（或值）。

## Python 和 JavaScript 中的条件语句

使用条件，可以根据特定条件是 `True` 还是 `False` 来选择程序中执行的语句。让我们看看它们在 Python 和 JavaScript 中的区别。

### `if`  语句

- 在 **Python** 中，依靠缩进来指示哪些代码行属于条件代码。
- 在 **JavaScript** 中，必须用括号将条件括起来，用花括号将条件代码括起来。该代码也应缩进。

![](https://www.freecodecamp.org/news/content/images/2021/01/image-154.png)
Python（左）和 JavaScript（右）的条件

### `if/else`  语句

else 子句在两种语言中都非常相似。唯一的区别是：

- 在 **Python** 中，要在 `else` 关键字后写一个冒号（`:`）
- 在 **JavaScript** 中，用花括号（`{}`）将属于此子句的代码括起来。


![](https://www.freecodecamp.org/news/content/images/2021/01/image-155.png)

### 多重条件

多重条件用法:

- 在 **Python** 中，在关键字 `elif` 后跟新的条件。条件后跟一个冒号（`:`），并在下一行缩进显示条件执行的代码。
- 在 **JavaScript** 中，在关键字 `else if` 后接条件（用括号括起来）。条件后写花括号，并在花括号中缩进代码。

![](https://www.freecodecamp.org/news/content/images/2021/01/image-156.png)
Python（左）和 JavaScript（右）的条件

### JavaScript 里的 Switch 语句

- 在 **JavaScript** 中，我们还有一个额外的控件结构，可用于根据表达式的值选择要执行的代码。 该语句就是 `switch`。
- **Python** 没有内置这种控制结构。

这是该语句的一般语法：

![](https://www.freecodecamp.org/news/content/images/2021/01/image-159.png)
JavaScript 中的 switch 语句

在 JavaScript 里：

```javascript
switch (expression) {
    case value1:
        // Code
        break;
    case value2:
        // Code
        break;
    case value3:
        // Code
        break;
    default:
        // Code
}
```

**💡提示：** 我们可以根据需要添加任意多个 case，并且表达式可以是变量。

## Python 和 JavaScript 中的 for 循环和 while 循环

现在，让我们看看如何在 Python 和 JavaScript 中定义不同类型的循环以及它们的主要区别。

### For 循环

在 Python 中定义 for 循环的语法比 JavaScript 中的语法相对简单。

- 在 **Python** 中，在关键字 `for` 后跟循环变量的名称，关键字`in`，以及对 `range()` 函数的调用，函数需指定必要的参数。然后，我们写一个冒号（`:`），后面跟缩进的循环体。
-  在 **JavaScript** 中，必须明确指定几个语句。从关键字 `for` 开始，后跟括号。在这些括号内，定义循环变量及其初始值，为 `False` 时终止的循环的条件，以及每次迭代时变量的更新方式。然后，我们编写花括号以创建代码块，并在花括号内编写缩进的循环主体。

![](https://www.freecodecamp.org/news/content/images/2021/01/image-165.png)
Python（左）和 JavaScript（右）中的 For 循环

### 通过遍历迭代

可以在 Python 和 JavaScript 中使用 for 循环来迭代可迭代对象的元素。

- 在 **Python** 中，关键字 `for` 后跟循环变量，`in` 关键字和迭代的对象。 然后是冒号（`:`）和循环体（缩进）。
- 在 **JavaScript** 中，可以使用 `for..of` 循环。 先写 `for` 关键字后跟括号，然后在括号内写上 `var` 关键字后以及循环变量、关键字 `of` 和迭代的对象。接着用花括号将循环的主体括起来，别忘了保持缩进。

![](https://www.freecodecamp.org/news/content/images/2021/01/image-167.png)
Python（左）和 JavaScript（右）中的 For 循环

在 **JavaScript** 中，还可以用 `for..in` 循环来迭代对象的属性。

根据 [MDN Web 文档][10]:

> `for...in` 语句以任意顺序遍历一个对象的除 Symbol 以外的可枚举属性。

这是例子：

```javascript
const object = { a: 1, b: 2, c: 3 };

```

当我们在 Chrome 开发者工具的控制台中运行此代码时，输​​出为：

![](https://www.freecodecamp.org/news/content/images/2021/01/image-168.png)

### While循环

While 循环在 Python 和 JavaScript 中非常相似。

- 在 **Python** 中，编写关键字 `while` 后跟条件、冒号（`:`），并在新行中编写循环的主体（缩进）。
- 在 **JavaScript** 中，语法非常相似。 不同之处在于，必须用括号将条件括起来，并用花括号将循环的主体括起来。

![](https://www.freecodecamp.org/news/content/images/2021/01/image-169.png)
Python（左）和 JavaScript（右）中的 While 循环

### JavaScript 中的 `do..while` 循环

在 **JavaScript** 中，我们还有一种 Python 中不存在的循环类型。

这种循环称为 `do..while` 循环，因为它至少执行一次操作，并且在条件为  `True` 时继续运行。

这是基本语法：

```javascript
do {
    // Code
} while (condition);
```

💡 **提示：** 这种类型的循环保证代码将至少执行一次。

当我们要求用户输入时，这特别有用，因为将提示用户键入值。 如果输入有效，我们可以继续执行该程序。 如果无效，我们可以提示用户再次输入该值，直到有效为止。

## Python 和 JavaScript 中的函数

对于编写简洁、可维护和易读的程序，函数非常重要。函数的语法在 Python 和 JavaScript 中非常相似，让我们分析它们的主要区别：

- 在 **Python** 中，关键字 `def` 后跟函数名称，括号内是参数列表。 在此列表之后，跟一个冒号（`:`）和该函数的主体（缩进）。
- 在 **JavaScript** 中，唯一的区别是我们使用 `function` 关键字定义一个函数，并用花括号将函数的主体括起来。

![](https://www.freecodecamp.org/news/content/images/2021/01/image-170.png)
Python（左）和 JavaScript（右）中的函数

此外，Python 和 JavaScript 函数之间还有一个非常重要的区别：

### Function 的参数个数

- 在 **Python** 中，传递给函数调用的参数数量必须与函数定义中定义的参数数量相匹配。 如果不是这种情况，将发生异常。

这是一个例子：

```python
>>> def foo(x, y):
    print(x, y)

```

- 在 **JavaScript** 中，这不是必要的，因为参数是可选的。可以传入比函数定义的参数更少或更多的参数来调用函数。默认情况下，缺少的参数会被赋予值 `undefined`，并且额外的参数可以通过 `arguments` 对象进行访问。

这是 JavaScript 中的一个例子：

![](https://www.freecodecamp.org/news/content/images/2021/01/image-171.png)

注意用三个参数调用函数，但是函数定义的参数列表中仅包含两个参数。

💡 **提示：** 要获取传递给函数的参数数量，您可以在函数内使用 `arguments.length`。

## Python 和 JavaScript 面向对象编程

Python 和 JavaScript 都支持面向对象编程，因此让我们看看如何创建和使用此编程范例的主要元素。

### Classes

在 Python 和 JavaScript 中 class 定义的第一行非常相似。 关键字 `class` 后跟类的名称。

唯一的区别是：

- 在 **Python** 中，在 class 名之后，要写一个冒号（`:`）
- 在 **JavaScript** 中，用大括号（`{}`）包围 class 的内容

![](https://www.freecodecamp.org/news/content/images/2021/01/image-172.png)
Python（左）和 JavaScript（右）中的 class 定义

**💡提示：** 在 Python 和 JavaScript 中，类名应以大写字母开头，每个单词也应以大写字母开头。

### 构造器和属性

构造函数是一种特殊的方法，当创建类的新实例（新对象）时会调用该方法。 其主要目的是初始化实例的属性。

- 在 **Python** 中，用于初始化新实例的构造函数称为`init`（前后都有两个下划线）。 在创建类的实例初始化其属性时，会自动调用此方法。 它的参数列表定义了创建实例必须传递的值。 该列表的第一个参数是 `self`。

**💡提示：** 在 Python 中，使用 `self` 来引用实例，而在 JavaScript 中，使用 `this`。

使用以下语法，将值分配给 **Python** 中的属性：

```
self.attribute = value
```

而在 **JavaScript**，使用如下语法：

```
this.attribute = value;
```

![](https://www.freecodecamp.org/news/content/images/2021/01/image-174.png)
Python（左）和 JavaScript（右）中的 class 例子

## Python 和 JavaScript 中的方法

- 在 **Python** 中，我们使用关键字 `def` 定义方法，然后是方法名以及括号内的参数列表。 该参数列表以 `self` 参数开头，该参数引用正在调用该方法的实例。 在此列表之后，需要跟一个冒号（`:`），并将该方法的主体缩进。

这是一个例子：

```python

class Circle:

	def __init__(self, radius, color):
		self.radius = radius
		self.color = color

	def calc_diameter(self):
		return self.radius * 2


```

例子：Python Class 里的方法

- 在 **JavaScript** 中，方法是通过编写其名称，后跟参数列表和花括号来定义的。 在花括号内，我们编写方法的主体。

```javascript

class Circle {

    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    calcDiameter() {
        return this.radius * 2;
    }
}

```

例子：JavaScript Class 里的方法

### Instances

创建 class 的实例

- 在 **Python** 中，直接编写类的名称，并在括号内传递参数。

```python
my_circle = Circle(5, "Red")
```

- 在 **JavaScript** 中，需要在类名之前添加 `new` 关键字。

```javascript
my_circle = new Circle(5, "Red");
```

## 🔹总结

Python 和 JavaScript 在不同的应用场景里都是非常强大的语言。

Python 可用于 Web 开发和其他广泛的应用场景，包括科学研究领域。  JavaScript 主要用于 Web 开发（前端和后端）和移动应用程序开发。

它们具有重要的区别，但是它们都具有我们编写功能强大的程序所需的相同基本要素。

**我希望您喜欢这篇文章并且对您有所帮助。** 现在，您知道 Python 和 JavaScript 之间的主要区别了吧。

⭐ [**订阅我的 YouTube 频道**][11]，并在 [**Twitter**][12] 上关注我，以找到更多的编码教程和技巧。

  

[1]: https://reactnative.dev/
[2]: https://www.python.org/dev/peps/pep-0008/#function-and-variable-names
[3]: https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript#Variable_naming
[4]: https://www.python.org/dev/peps/pep-0008/#constants
[5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
[6]: https://developers.google.com/web/tools/chrome-devtools/console
[7]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[8]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[9]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
[10]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
[11]: https://www.youtube.com/channel/UCng0h8WiHLmT57JJ8At4LfQ
[12]: https://twitter.com/EstefaniaCassN
