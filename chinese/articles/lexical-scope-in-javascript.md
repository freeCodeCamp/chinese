> -  原文地址：[Lexical Scope in JavaScript – Beginner's Guide](https://www.freecodecamp.org/news/lexical-scope-in-javascript/)
> -  原文作者：[Keyur Paralkar](https://www.freecodecamp.org/news/author/keyurparalkar/)
> -  译者：Papaya HUANG
> -  校对者：

![Lexical Scope in JavaScript – Beginner's Guide](https://www.freecodecamp.org/news/content/images/size/w2000/2022/05/spacex--p-KCm6xB9I-unsplash-1.jpg)

在这篇文章中，我们将借助一些实用的例子来理解什么是词法作用域。

我们也将简单探讨JavaScript是怎么编译和执行程序的。

最后，我们将看一看如何使用词法作用域来解释未声明的变量错误和引用错误。

话不多说，让我们开始吧！

## 目录

-   [JavaScript是如何执行程序的？](#how-does-javascript-execute-programs)
-   [JavaScript如何解析/编译以及执行代码的？](#how-javascript-parses-compiles-and-executes-code)
-   [理解语法错误](#syntax-error)
-   [理解变量/函数提升](#variable-function-hoisting)
-   [什么是词法作用域](#what-is-lexical-scope)?
-   [理解词法作用](#understanding-lexical-scope)
-   [总结](#summary)

<h2 id="how-does-javascript-execute-programs">JavaScript是如何执行程序的？</h2>

在了解JavaScript执行代码或程序之前，让我们先从理论角度探索一下，编译器是如何分步骤编译的。

不论使用何种编程语言，编译器都会执行以下步骤：

### 分词/词法分析

在这个过程中，整个程序会被分解为不同的关键词，这些关键词被称为词法单元（token）。以`let temp = 10`这个声明为例，一旦被分词后，这个声明就会被转化为这些关键词：`let`, `temp`, `=`, `10`。

词法分析（lexing）和分词（tokenizing）这两个术语可以替换使用，两者间略微有些不同。词法分析是分词的过程，但是在这个过程中还会检查是否为独立的词法单元。**词法分析**是智能版的分词。

### 解析

在这一部分中会将上一步骤的所有词法单元都集合起来，转换成逐级嵌套的代码语法树结构。

这个树结构被称为抽象语法树。（AST）

### 代码生成

在这一步骤中会把AST转换成机器可以解读的代码。

以上内容简单介绍了是编译器如何运行并生成机器可读代码。

当然编译过程要比以上提到的步骤要复杂得多，但是介绍其他步骤超出了本文的讨论范围。

我们从中能够得出JS执行代码最重要的两个步骤是：

1.  解析
2.  执行

在理解词法作用域之前，必须首先知道JavaScript是如何执行程序的。在下一章节，我们会深入了解这两个步骤。

<h2 id="how-javascript-parses-compiles-and-executes-code">JavaScript如何解析/编译以及执行代码的？</h2>

![Untitled](https://www.freecodecamp.org/news/content/images/2022/05/Untitled.png)

解析过程

让我们先来探讨解析过程。在这个过程中，JavaScript引擎查看整个程序，分配不同的变量到各自的作用域，然后检查是否有错误，一旦发现错误，执行就终止。

解析之后，执行才真正开始。

让我们结合下面两个场景来进一步了解解析：

-   语法错误
-   变量提升

<h3 id="syntax-error">语法错误</h3>

最简单高效展示JS先解析后执行代码的例子是语法错误行为：

考虑以下有问题的代码：

```Javascript
const token = "ABC";
console.log(token);

//语法错误:
const newToken = %((token);
```

以上代码最后一行会生成语法错误，这个报错是：

```Javascript
Uncaught SyntaxError: Unexpected token '%'
```

仔细看这个报错，JavaScript引擎并没有执行 `console.log`声明。取而代之，引擎经历了以下步骤：

-   在第一行：发现一个声明了的变量和定义。将这个变量保存在当前作用域中的`token`的变量中，当前作用域即全局作用域。
-   在第二行：JavaScript引擎发现`token`变量被引用，引擎首先在当前作用域查找`token`的变量是否存在，如果存在，则为引用的`token`变量的声明。
-   在第三行：引擎发现`newToken`变量被声明以及定义。引擎检查在当前作用域中是否有命名为`newToken`的变量，如果有，则抛出reference error;如果没有，则在当前作用域存储这个变量。
-   在同一行，引擎也发现了需要引用变量`%((token)`，但是因为这个变量是以`%`开头的，变量命名不可以使用保留字，所以抛出syntax error（语法错误）。

<h3 id="variable-function-hoisting">理解变量/函数提升</h3>

提升是一种机制，在这个机制内，变量在其所在作用域提升，即放置到作用域的最上方。

让我们借助一个例子来看看在解析阶段提升是怎么发生的，以及提升之后是怎么执行的：

```Javascript
doSomething();

function doSomething(){
	console.log("How you doing?");
}
```

在上述代码中，引擎这样执行程序：

-   在第一行：JavaScript引擎遇到一个叫做`doSomething`的函数。引擎在当前作用域查找，看是否有`doSomething`,如果有，则引用这个函数，没有则抛出一个reference error。
-   在解析的过程中引擎发现`function doSomething`位于当前作用域，这样，就在当前作用域添加对这个变量的引用，然后使整个程序都可以访问到这个变量。
-   最终，`doSomething`函数打印出字符串`How you doing?`.

在上述解释中，我们发现代码首先被解析成中介代码以确保变量或者函数（这里既是`doSomething`)可以在当前作用域被访问。

这样在下一个阶段，JavaScript就知道了这个函数，并且开始执行。

从上述例子，我们可以总结出JavaScript引擎在执行代码前进行了如下操作：

1.  解析代码
2.  生成中介代码来描述可以访问的变量或者函数
3.  使用中介代码，开始执行程序

<h2 id="#what-is-lexical-scope">什么是词法作用域</h2>

决定变量或者函数在执行的时候位于什么作用域的过程被称为词法作用域。*词法*这个词源于JS编译的*分词/词法分析阶段*。

运行代码时，JavaScript做了两件事：`解析`和`执行`。如上文所述，在解析阶段，变量或者函数的作用域被定义。这就是为什么理解代码执行的解析阶段非常重要，因为这是理解词法作用域的基础。

通俗地讲，JavaScript引擎的解析阶段就是词法作用域发生的地方。

在了解了基础之后，让我们来看看词法作用域的主要特征：

首先，在解析阶段，作用域由变量被声明的地方决定。

举个例子，思考这样一个情境，一个变量在函数内部被引用，但是在全局作用域声明。在这个情况下，内部变量被分配了外部作用域，也就是全局作用域。

![ezgif.com-gif-maker--1---1-](https://www.freecodecamp.org/news/content/images/2022/05/ezgif.com-gif-maker--1---1-.gif)

作用域分配示意图

然后，给变量分配作用域之后，JavaScript引起会检查该变量的父级作用域以查看其可访问性。

如果存在这个变量，则变量的作用域为父级作用域。如果没有的话，则抛出reference error。 
  
下面的示意图，展现了变量作用域的搜索。

![ezgif.com-gif-maker--3---1-](https://www.freecodecamp.org/news/content/images/2022/05/ezgif.com-gif-maker--3---1-.gif)

JS引擎成功通过搜索每一个作用找到变量

下面是展示JS引擎在作用域中搜索一个不存在变量的例子：

![ezgif.com-gif-maker--6---1-](https://www.freecodecamp.org/news/content/images/2022/05/ezgif.com-gif-maker--6---1-.gif)

JS引擎抛出引用错误

<h2 id="understanding-lexical-scope">理解词法作用域</h2>

我们学习了词法作用域的定义，以及主要特征。

在这一部分，我们将借助例子来了解词法作用域。正如人们常说的，使用现实生活中的例子可以帮助我们了解复杂的话题，让我们开始吧！

在我们使用的例子中，相同颜色的代码属于同样的作用域。现在看起来有点让人困惑，但是让我慢慢演示：

![Global-and-Functional-Scope--1---1-](https://www.freecodecamp.org/news/content/images/2022/05/Global-and-Functional-Scope--1---1-.gif)

使用颜色区分的例子来了解词法作用域

让我们一起看看在这个例子中发生了什么。

在我们的程序中有这些内容：

-   `empData`: 对象数组
-   `allPositions`: 包含所有雇员职位的字符串数组
-   最后，我们有一个控制台声明，打印`allPositions`变量。

让我们来看看在程序的解析阶段发生了什么：

-   引擎从第一行开始，遇到变量声明`empData`.
-   引擎检查`empData` 在当前作用域是否可以访问。由于在当前作用域没有找到勒色的变量，就去父作用域中寻找。
-   由于没有父作用域，所有引擎停止寻找，当前作用域为全局作用语。
-   然后，引擎在解析阶段将`undefined`赋值给`empData`，一旦任何嵌套作用域引用这个变量，就可以使用这个值。
-   在程序执行阶段，引擎评估赋值操作符的右侧。
-   引擎使用同样的方法，在编译阶段将`allPositions`变量赋值为`undefined`。
-   在赋值操作符右侧，我们也引用`empData`变量，在这个阶段，引擎检查变量是否可以在当前作用域访问，因为可以访问，引用和赋值操作符左侧是一致的（即变量在全局作用域）。
-   引擎仍然在右侧，并发现在map函数内有一个箭头函数。因为引擎遇到了函数定义，所以会创造一个新的作用域，即gif动画中的数字2。
-   因为这是一个新的作用域，所以我们将它变成黑色。
-   箭头函数有一个叫做`data`的参数，并返回`data.position`,在解析阶段，引擎提升当前作用域和父级作用域所有需要被引用的变量。
-   在函数内部，`data`变量被引用，所以引擎检索在当前作用域中是否存在这个变量。因为这个变量在当前作用域，所以左右引用一致。
-   当引擎遇到`}`花括号时，离开函数作用域。
-   最后，在程序结尾，有一个展示`allPositions`的控制台声明。因为这个声明引用了`allPositions`变量，所以在当前作用域查找（即全局作用域）。在全局作用域找到了引用，在`console`声明中的引用一致。

<h2 id="summary">总结</h2>

在这篇文章中，我们学习了什么事词法作用域，利用简单的涂色例子展示了词法作用域。

感谢阅读！

你可以在 [Twitter](https://twitter.com/keurplkar)，[GitHub](https://github.com/keyurparalkar)和[LinkedIn](https://www.linkedin.com/in/keyur-paralkar-494415107/)上关注我。
