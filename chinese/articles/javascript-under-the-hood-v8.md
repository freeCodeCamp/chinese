> - 原文地址：[How JavaScript Works: Under the Hood of the V8 Engine JavaScript 到底是怎么运行的](https://www.freecodecamp.org/news/javascript-under-the-hood-v8/)
> - 作者：Ilya Lyamkin
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![How JavaScript Works: Under the Hood of the V8 Engine](https://images.unsplash.com/photo-1552656967-7a0991a13906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

今天我们来看看 JavaScript 的 V8 引擎，弄清楚 JavaScript 到底是如何执行的。

[在之前的文章中][1]，我们了解了浏览器的结构，并对Chromium有了一个 [高度的概述][2]。让我们回顾一下，这样我们就可以准备好在这里深入研究了。

## Background

[Web 标准][3] 是浏览器实施的一套规则。它们定义并描述了[万维网][4].

[W3C][5] 是一个为网络开发开放标准的国际社区。他们确保每个人都遵循相同的准则，不必支持几十个完全不同的环境。

现代浏览器是一个相当复杂的软件，它的代码库有 [数千万行的代码][6]。所以它被分割成很多模块，负责不同的逻辑。

而浏览器中最重要的两个部分是JavaScript引擎和渲染引擎。

[Blink][7] 是一个渲染引擎，负责整个渲染管道，包括DOM树、样式、事件和V8集成。它解析DOM树，解决样式问题，并确定所有元素的视觉几何。

在通过动画帧不断监测动态变化的同时，Blink在屏幕上绘制内容。JS引擎是浏览器的一个重要部分--但我们还没有进入这些细节。

### JavaScript Engine 101

JavaScript 引擎将 JavaScript 编译成本地机器代码并执行。每个主要的浏览器都开发了自己的 JS 引擎。谷歌的 Chrome 使用 V8，Safari 使用 JavaScriptCore，Firefox 使用 SpiderMonkey。

我们将特别使用V8，因为它在Node.js和Electron中使用，但其他引擎也是以同样的方式构建的。

每个步骤都将包括一个负责该步骤的代码链接，因此你可以熟悉代码库，并在本文之后继续研究。

我们将使用 [GitHub上的V8镜像][8]，因为它提供了一个方便和知名的 UI 来浏览代码库。

## Preparing the source code

V8需要做的第一件事是下载源代码。这可以通过网络、缓存或服务工作者来完成。

一旦收到代码，我们需要以编译器可以理解的方式来改变它。这个过程被称为解析（parsing），由两部分组成：扫描器（scanner）和解析器（parser）本身。

[扫描器][9] 接收 JS 文件并将其转换为已知的标记列表。在 [keywords.txt文件][10]中有一个所有 JS 标记的列表。

[解析器][11] 捡起它并创建一个 [抽象语法树（AST）][12]：源代码的树状表示。树上的每个节点都表示代码中出现的一个结构。

让我们看一下一个简单的例子:

```javascript
function foo() {
    let bar = 1;
    return bar;
}
```

这段代码将产生以下树状结构:

![](https://www.freecodecamp.org/news/content/images/2020/08/ast-tree.png)

AST树的例子

你可以通过执行前序遍历（根、左、右）来执行这段代码:

1. 定义 `foo` 函数。
2. 声明 `bar` 变量。
3. 将 `1` 分配给 `bar`。
4. 从函数中返回 `bar`。
你还会看到 `VariableProxy`--一个将抽象变量连接到内存中某个地方的元素。解决 `VariableProxy` 的过程被称为 **范围分析(Scope Analysis)**。

在我们的例子中，这个过程的结果是所有 `VariableProxy` 都指向同一个 `bar` 变量。

## The Just-in-Time (JIT) paradigm

一般来说，为了使你的代码能够执行，编程语言需要被转化为机器代码。对于如何以及何时发生这种转换，有几种方法。

最常见的转换代码的方法是进行超前编译。它的工作原理：在编译阶段，代码在程序执行之前就被转化为机器代码了。许多编程语言都采用这种方法，如C++、Java 和其他语言。

在表格的另一边，是解释型：每一行代码都将在运行时执行。这种方法通常被动态类型语言（如 JavaScript 和 Python）采用，因为在执行之前不能知道确切的类型。

因为提前编译可以一起评估所有代码，它可以提供更好的优化并最终生成更高性能的代码。 另一方面，解释型语言更容易实现，但它通常比提前编译慢。

为了更快、更有效地为动态语言转换代码，创建了一种称为即时 (JIT) 编译的新方法。 它最好地结合了解释和编译。

在使用解释(interpretation) 作为基础方法的同时，V8 可以检测到比其他函数更频繁使用的函数，并使用以前执行的类型信息对其进行编译。

然而，类型有可能会发生变化。我们需要对已编译的代码进行去优化，转而返回到解释法（之后，我们可以在得到新的类型反馈后重新编译函数）。

让我们更详细地探讨一下JIT编译的每个部分。

### Interpreter

V8 使用一个叫做 [Ignition][13] 的解释器。最初，它接受一个抽象的语法树并生成字节码。

字节码指令也有元数据，如源行位置，以便将来进行调试。一般来说，字节码指令与JS的抽象内容相匹配。

现在让我们以我们的例子为例，为它手动生成字节码:

```bytecode
LdaSmi #1 // write 1 to accumulator
Star r0   // read to r0 (bar) from accumulator
Ldar r0   // write from r0 (bar) to accumulator
Return    // returns accumulator
```

Ignition 有一个叫做累加器（accumulator）的东西--一个可以存储/读取数值的地方。

累加器避免了推送和弹出堆栈顶部的需要。它也是许多字节代码的隐含参数，通常保存操作的结果。隐式地返回累加器。

你可以查看 [在相应的源代码中][14] 所有可用的字节码。如果你对其他 JS 概念（如循环和async/await）如何在字节码中呈现感兴趣，我觉得通过这些 [测试用例][15]来阅读是很有用的。

### Execution

生成后，Ignition 将使用一个以字节码为关键的处理程序表来解释这些指令。对于每个字节码，Ignition 可以查找相应的处理程序函数，并使用提供的参数执行它们。

正如我们之前提到的，执行阶段还提供关于代码的类型反馈。让我们来弄清楚它是如何被收集和管理的。

首先，我们应该讨论如何在内存中表示JavaScript对象。在一个天真的方法中，我们可以为每个对象创建一个字典，并将其链接到内存中。

![](https://www.freecodecamp.org/news/content/images/2020/08/naive-object.png)

保存对象的第一种方法

然而，我们通常有很多具有相同结构的对象，所以存储大量重复的字典是没有效率的。

为了解决这个问题，V8 使用 **Object Shapes**（或内部映射 Maps internally）和内存中的值向量将对象的结构与值本身分开。

例如，我们创建一个对象字面:

```javascript
let c = { x: 3 };
let d = { x: 5 };
c.y = 4;
```

In the first line, it will produce a shape `Map[c]` that has the property `x` with an offset 0.

In the second line, V8 will reuse the same shape for a new variable.

After the third line, it will create a new shape `Map[c1]` for property `y` with an offset 1 and create a link to the previous shape `Map[c]` .

![](https://www.freecodecamp.org/news/content/images/2020/08/object-shapes-1.png)

Example of object shapes

In the example above, you can see that each object can have a link to the object shape where for each property name, V8 can find an offset for the value in memory.

Object shapes are essentially linked lists. So if you write `c.x`, V8 will go to the head of the list, find `y` there, move to the connected shape, and finally it gets `x` and reads the offset from it. Then it’ll go to the memory vector and return the first element from it.

As you can imagine, in a big web app you’ll see a huge number of connected shapes. At the same time, it takes linear time to search through the linked list, making property lookups a really expensive operation.

To solve this problem in V8, you can use the [**Inline Cache (IC)**][16]. It memorizes information on where to find properties on objects to reduce the number of lookups.

You can think about it as a listening site in your code: it tracks all _CALL_, _STORE_, and _LOAD_ events within a function and records all shapes passing by.

The data structure for keeping IC is called [**Feedback Vector**][17]**.** It’s just an array to keep all ICs for the function.

```javascript
function load(a) {
    return a.key;
}
```

For the function above, the feedback vector will look like this:

```javascript
[{ slot: 0, icType: LOAD, value: UNINIT }];
```

It’s a simple function with only one IC that has a type of LOAD and value of `UNINIT`. This means it’s uninitialized, and we don’t know what will happen next.

Let’s call this function with different arguments and see how Inline Cache will change.

```javascript
let first = { key: 'first' }; // shape A
let fast = { key: 'fast' }; // the same shape A
let slow = { foo: 'slow' }; // new shape B
```

After the first call of the `load` function, our inline cache will get an updated value:

```javascript
[{ slot: 0, icType: LOAD, value: MONO(A) }];
```

That value now becomes monomorphic, which means this cache can only resolve to shape A.

After the second call, V8 will check the IC's value and it'll see that it’s monomorphic and has the same shape as the `fast` variable. So it will quickly return offset and resolve it.

The third time, the shape is different from the stored one. So V8 will manually resolve it and update the value to a polymorphic state with an array of two possible shapes.

```javascript
[{ slot: 0, icType: LOAD, value: POLY[(A, B)] }];
```

Now every time we call this function, V8 needs to check not only one shape but iterate over several possibilities.

For the faster code, you _can_ initialize objects with the same type and not change their structure too much.

**Note: You can keep this in mind, but don’t do it if it leads to code duplication or less expressive code.**

Inline caches also keep track of how often they're called to decide if it’s a good candidate for optimizing the compiler — Turbofan.

### Compiler

Ignition only gets us so far. If a function gets hot enough, it will be optimized in the compiler, [Turbofan][18], to make it faster.

Turbofan takes byte code from Ignition and type feedback (the Feedback Vector) for the function, applies a set of reductions based on it, and produces machine code.

As we saw before, type feedback doesn’t guarantee that it won’t change in the future.

For example, Turbofan optimized code based on the assumption that some addition always adds integers.

But what would happen if it received a string? This process is called **deoptimization.** We throw away optimized code, go back to interpreted code, resume execution, and update type feedback.

## Summary

In this article, we discussed JS engine implementation and the exact steps of how JavaScript is executed.

To summarize, let’s have a look at the compilation pipeline from the top.

![](https://www.freecodecamp.org/news/content/images/2020/08/v8-overview-2.png)

V8 overview

We’ll go over it step by step:

1. It all starts with getting JavaScript code from the network.
2. V8 parses the source code and turns it into an Abstract Syntax Tree (AST).
3. Based on that AST, the Ignition interpreter can start to do its thing and produce bytecode.
4. At that point, the engine starts running the code and collecting type feedback.
5. To make it run faster, the byte code can be sent to the optimizing compiler along with feedback data. The optimizing compiler makes certain assumptions based on it and then produces highly-optimized machine code.
6. If, at some point, one of the assumptions turns out to be incorrect, the optimizing compiler de-optimizes and goes back to the interpreter.

That’s it! If you have any questions about a specific stage or want to know more details about it, you can dive into source code or hit me up on [Twitter][19].

### Further reading

- [“Life of a script][20]” video from Google
- [A crash course in JIT compilers][21] from Mozilla
- Nice explanation of [Inline Caches in V8][22]
- Great dive in [Object Shapes][23]

[1]: https://lyamkin.com/blog/what-are-web-standards-and-how-does-web-browser-work/
[2]: https://www.chromium.org/developers/how-tos/getting-around-the-chrome-source-code
[3]: https://www.w3.org/TR/
[4]: https://en.wikipedia.org/wiki/World_Wide_Web
[5]: https://www.w3.org/
[6]: https://www.openhub.net/p/chrome/analyses/latest/languages_summary
[7]: https://docs.google.com/presentation/d/1boPxbgNrTU0ddsc144rcXayGA_WF53k96imRH8Mp34Y/edit#slide=id.g60f92a5151_40_0
[8]: https://github.com/v8/v8
[9]: https://github.com/v8/v8/blob/master/src/parsing/scanner.h
[10]: https://github.com/v8/v8/blob/master/src/parsing/keywords.txt
[11]: https://github.com/v8/v8/blob/master/src/parsing/parser.h
[12]: https://github.com/v8/v8/tree/master/src/ast
[13]: https://github.com/v8/v8/blob/master/src/interpreter/interpreter.h
[14]: https://github.com/v8/v8/blob/master/src/interpreter/bytecodes.h
[15]: https://github.com/v8/v8/tree/master/test/cctest/interpreter/bytecode_expectations
[16]: https://github.com/v8/v8/tree/master/src/ic
[17]: https://github.com/v8/v8/blob/master/src/objects/feedback-vector.h
[18]: https://github.com/v8/v8/tree/master/src/compiler
[19]: https://twitter.com/ilyamkin
[20]: https://www.youtube.com/watch?v=voDhHPNMEzg
[21]: https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/
[22]: https://www.youtube.com/watch?v=u7zRSm8jzvA
[23]: https://mathiasbynens.be/notes/shapes-ics
