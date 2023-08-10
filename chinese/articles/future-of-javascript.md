> -   原文地址：[Why JavaScript Is the Programming Language of the Future](https://www.freecodecamp.org/news/future-of-javascript/)
> -   原文作者：Mehul Mohan
> -   译者：赵翘楚
> -   校对者：

![Why JavaScript Is the Programming Language of the Future](https://www.freecodecamp.org/news/content/images/size/w2000/2020/04/jsposter.jpg)

JavaScript 是我学习的第一种编程语言。嗯，实际上我是从 HTML 和 CSS 开始的。就像许多其他的网页开发者一样，选择 JavaScript 是不费吹灰之力的。这只是因为它与 HTML 和 CSS 融合得很好，而且实际上也能提高你的 HTML/CSS 技能。我曾经用其他各种编程语言开发过应用程序和游戏，包括 Java、Swift、C++ 和 Dart。但是，JavaScript 所提供的灵活性是无可比拟的--尽管它对初学者来说可能被认为是不好的，因为它所提供的选项远远超过了完成一项简单任务的要求。

今天，JavaScript 是地球上最强大的语言之一，因为它的性能和无处不在的存在。

我个人觉得，JavaScript 有潜力进入许多流行的行业，如机器学习和数据分析，而 Python 仍然统治着这些领域。现在，像 Tensorflow.js 这样的工具甚至已经诞生了!

然而，以前的 JavaScript 绝对不是这样的。早些时候，它是一种脆弱的、不具性能的语言，而且被人诟病。JavaScript 是为“losers”准备的。

但现在不是了。让我们看看 JavaScript 在过去的 10 年里是如何扭转局面的，为什么它变得比以前更强大，以及为什么它将继续保持今天的地位。

# V8: 为 JavaScript 提供动力的猛兽

V8 实际上是一个 JavaScript 引擎。你可能会问，什么是 JavaScript 引擎？JavaScript 引擎是一个执行 JavaScript 代码的解释器。一个 JavaScript 引擎可以实现为一个标准的解释器，也可以实现为及时（JIT）编译器，以某种形式将 JavaScript 编译为字节码。

V8 是谷歌的开源高性能 JavaScript 和 WebAssembly JIT 引擎，用 C++ 编写。它被用于 Chrome 和 Node.js 等等。V8 可以独立运行，也可以嵌入到任何 C++ 应用程序中。

这是一款可以深度优化你的 JS 代码并将其转换为机器代码供 CPU 执行的软件。V8 处理的一些任务是:

1.  垃圾回收
2.  编译成机器码
3.  内联缓存
4.  指针压缩
5.  还有更多的优化

事实上，指针压缩是 V8 中一项非常新的技术，可以在不影响性能的情况下提升内存优化。如果你是一个极客，你可以在 V8 的官方博客上阅读更多关于它是如何实现的。

从中得到的启示是，你可以写 JavaScript，并在晚上睡个安稳觉，因为你的 JS 代码可以非常好地运行。

# 成熟的生态系统和社区

JavaScript 拥有最成熟的生态系统之一，这是任何一种编程语言从未拥有过的。JavaScript 的社区非常庞大，而且入门门槛极低。

你可以启动浏览器（100%的个人电脑上都有），打开控制台，你会发现一个 JS 引擎在等着你运行代码！这在其他编程语言中是绝无仅有的。任何其他如此复杂的编程语言都不存在这种情况。

如果庞大的社区还不够，我们还有 `npm` 和 `yarn` 软件包系统。你能在 `npm` 源上找到任何一个包--例如从创建随机字符串到处理 JavaScript 中的流和缓冲区的一切。在 JavaScript 开发者中，有一句非常有名的话

> 任何能被 JavaScript 实现的，终将被 JavaScript 实现

这很有趣，但很低调，我相信这一点。

如果你以初学者的身份进入，你很少有机会遇到以前没有人遇到过的问题。这是因为所有可能的简单 JavaScript 问题的错误几乎已经在 Stack Overflow 等网站上被问到并存档了。

像 React、Angular 和 Vue 这样的框架和库正在为未来应用程序的构建方式铺平道路。他们将视角转向声明式编程而不是命令式编程，转向什么而不是如何。这让开发者可以开发高质量的应用程序，而不必担心底层的高性能代码。

## 全能

JavaScript 存在于:

1.  前端（浏览器）
2.  后端（Node，Deno）
3.  Android/iOS（React Native、NativeScript 等）
4.  桌面（Electron）
5.  混合型（Ionic）

是什么让这成为可能？像 V8 这样的 JS 引擎是用 C/C++ 编写的，甚至可以在嵌入式系统上进行编译 对于其他平台来说，因为浏览器总是存在的（比如 Andorid/iOS），所以它们搭载了一个 JS 引擎，然后可以用来运行任何 JS 代码，甚至可以用 React Native 写原生应用。

## 前沿功能和进阶

JavaScript 标准是由 ECMA-262 TC39 社区领导的，这些人的更新速度真快！ECMAScript 每年都会发布新的 JavaScript 标准（见 ECMAScript2020 的新功能！）。作为一个开发者，你甚至可以要求在语言中加入新的功能。

例如，这里有一些有待开发的前沿功能，在不久的将来可能会被加入到 JavaScript 中。

![](https://www.freecodecamp.org/news/content/images/2020/04/Screenshot-2020-04-04-at-10.03.59-PM.png)

你可以在这找到所有的提案: [TC39 Proposals][1].

## JavaScript 是快速且可扩展的

当然，没有什么能真正击败 C/C++/Rust，但 JavaScript 的意义在于快速，V8 可以通过监控你的代码执行情况，延迟不使用的位执行，并优化被反复使用的代码段，从而生成高度优化的代码。特别是与它最近的竞争对手如 Python 相比。随着 V8 的进步，它的性能和内存效率都在不断提高。

JavaScript（Node）是高度可扩展的（有 TypeScript 等超集）。在单线程架构上运行，人们经常批评 Node 缺乏线程环境，但实际情况是它影响并不大。

你扩展 Node 应用程序的方式与你扩展多线程应用程序的方式不太一样。Node 的字面意思是 "节点"--进程树中的一个单一节点。Node 是通过运行它的多个实例和集群管理来扩展的。

JavaScript 引领了业界的异步事件驱动编程模式，不需要线程来扩展。相反，单个 Node 进程可以被生成，以处理和利用完整的 CPU 核心。以后会有更多关于扩展 Node 的内容!

## 总结

我喜欢 JavaScript，利用它我为像你这样的开发者创建了一个开发平台。在那里，你不仅可以学习 JavaScript，还可以学习其他各种语言，如 C、C++、Java、Node、Python 等等 [Join here for free][2]并与其他开发者一起直接在你的浏览器上学习!

JavaScript 在这里将继续存在，并在这十年中统治整个行业。你同意吗？请在我的[twitter][3]和[Instagram][4]上告诉我--让我们联系起来!

[1]: https://github.com/tc39/proposals
[2]: https://codedamn.com/
[3]: https://twitter.com/mehulmpt
[4]: https://instagram.com/mehulmpt
