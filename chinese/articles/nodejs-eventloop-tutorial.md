> - 原文地址：[Event Loops in NodeJS – Beginner's Guide to Synchronous and Asynchronous Code](https://www.freecodecamp.org/news/nodejs-eventloop-tutorial/)
> - 原文作者：[Tejan Singh](https://www.freecodecamp.org/news/author/tejan/)
>
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Event Loops in NodeJS – Beginner's Guide to Synchronous and Asynchronous Code](https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/oliver-hale-2cYueJxEDz8-unsplash.jpg)

NodeJS是一个异步事件驱动的JavaScript运行环境，旨在建立可扩展的网络应用。

这里的异步指的是JavaScript中所有那些在后台处理的功能，而不会阻塞任何其他请求。

在这篇文章中，你将学习并理解NodeJS是如何工作的，如何处理发送到服务器的所有功能或请求，无论是 _同步（synchronously）_ 还是 _异步（asynchronously）_。

## 什么是事件循环（Event Loop）？

你可能已经猜对了--Node在NodeJS环境中使用**事件循环（Event loop）**处理请求。但首先，让我们了解一些基本术语，这将有助于我们理解整个机制。

事件循环是一个**事件监听器（event-listener）**，它在NodeJS环境中发挥作用，并随时准备监听、处理和输出一个 _事件（event）_。

一个事件可以是任何东西，从鼠标点击到按键或超时。

## 什么是同步（Synchronous）和异步（Asynchronous）编程？

**同步编程（Synchronous programming）**意味着代码按其定义的顺序运行。在一个同步程序中，当一个函数被调用并返回了一些值后，才会执行下一行。

让我们通过这个例子来理解:

```js
const listItems = function(items) {
  items.forEach(function(item) {
    console.log(item)
  })
}

const items = ["Buy milk", "Buy coffee"]

listItems(items)
```

```js
The output will look like this:

"Buy milk"
"Buy coffee"

```

在这个例子中，当`listItems(items)`函数被调用时，它将循环浏览数组中的项目。`console.log(item)`函数首先对数组的第一个项目被调用，并打印出`"Buy milk"`。然后`console.log(item)`再次被执行，这次它通过数组的第二项，并打印出`"Buy coffee"`。

所以你可以说这个函数是按照它被定义的**顺序（sequence）**执行的。

另一方面，**异步编程（Asynchronous programming）**是指不按顺序执行的代码。这些函数不是按照它们在程序中定义的顺序执行，而是只有在满足某些条件时才执行。

例如，`setTimeOut()`在延迟一定数量的毫秒后执行一项任务。

```js
setTimeOut(function(){
    return( console.log("Hello World!") )
}, 3000)
```

这些函数并不逐行运行，而只是在需要运行的时候才运行，与函数的声明无关。在这种情况下，当所有的同步函数都被执行后，该函数会在3秒后自动运行。

_注意：异步函数只有在所有同步函数被执行后才会运行和执行。在此之前，它们将在后台被处理。_

如果你想了解更多关于NodeJS和异步编程的信息，你可以参考这篇[文章](https://www.freecodecamp.org/news/node-js-what-when-where-why-how-ab8424886e2/)

但是，NodeJS如何在后台处理异步函数并先运行所有同步函数？所有这些机制都可以用NodeJS的事件循环轻松解释。

## 事件循环（Event Loop）是如何工作的？

现在让我们看看NodeJS事件循环如何使用Nodejs事件循环图来执行一个简单的同步程序。然后我们将检查Node是如何逐行执行程序的

当我们通过本节时，你将开始理解你在这里看到的东西:  
![1](https://www.freecodecamp.org/news/content/images/2021/08/1.PNG)

在左上角，你有一个将要被执行的Node文件。在左下方，你有一个程序的输出终端。然后，你有 _调用堆栈（Call stack）、Node APIs和回调队列（Callback queue）。_ 所有这些共同构成了NodeJS环境。

对于同步编程，你只需要关注调用栈（call stack）。这是NodeJS环境中唯一的一部分，将在这种情况下工作。

回调栈（callback stack）是一个数据结构（data structure），你用它来跟踪将在程序内部运行的所有函数的执行情况。这个数据结构只有一个开放端（open），用于添加或删除顶部项目（top items）。

当程序开始执行时，它首先被包裹在一个匿名（anonymous ）的`main()`函数中。这是由NodeJS自动定义的。所以`main()`首先被推送到回调栈中。

![2](https://www.freecodecamp.org/news/content/images/2021/08/2.PNG)

接下来，变量`a`和`b`被创建，它们的总和被存储在一个变量`sum`中。所有这些值都存储在内存中。

现在，`console.log()`是一个被调用并推到回调栈内（callback stack）的函数。它被执行，你可以在终端屏幕上看到输出。

![3](https://www.freecodecamp.org/news/content/images/2021/08/3.PNG)

在这个函数被执行后，它被从回调栈中删除。然后`main()`也被删除，因为程序中没有任何东西可以被调用。这就是一个同步程序的执行方式。

![4](https://www.freecodecamp.org/news/content/images/2021/08/4.PNG)  
![5](https://www.freecodecamp.org/news/content/images/2021/08/5.PNG)

现在，让我们看看异步函数或程序如何在NodeJS内部执行。我们需要回调栈（callback stack）、Node API和回调队列（callback queue）一起处理一个异步函数。

让我们先看一下这个例子:

![1-1](https://www.freecodecamp.org/news/content/images/2021/08/1-1.PNG)

像往常一样，当程序开始执行时，首先`main()`函数被添加到回调栈（callback stack）中。然后`console.log("Start")`被调用并添加到回调栈（callback stack）中。在处理之后，输出在终端上是可见的，然后它被从回调栈中删除。

![2-1](https://www.freecodecamp.org/news/content/images/2021/08/2-1.PNG)  
![3-1](https://www.freecodecamp.org/news/content/images/2021/08/3-1.PNG)

现在，接下来是`setTimeOut(...Zero...)`函数，它被添加到回调栈（callback stack）中。

由于这是一个异步函数，它**不会**在回调栈（callback stack）中得到处理。然后，它被从回调栈（callback stack）中添加到Node APIs中，在那里，一个事件被注册，一个回调函数被设置为在后台得到处理。

![4-1](https://www.freecodecamp.org/news/content/images/2021/08/4-1.PNG)  
![5-1](https://www.freecodecamp.org/news/content/images/2021/08/5-1.PNG)

接下来是`setTimeOut(...Two...)`，它也从回调栈（callback stack）中被添加到Node API，因为它是一个异步函数。然后另一个回调函数被设置为在后台超时2秒后被处理。直到这一点，其他的功能可以被执行。

这就是所谓的**非阻塞**行为，所有的同步函数首先被处理和执行，异步函数在后台处理，同时等待轮到自己被执行。

![6](https://www.freecodecamp.org/news/content/images/2021/08/6.PNG)  
![7](https://www.freecodecamp.org/news/content/images/2021/08/7.PNG)

接下来，`console.log("End")`函数在回调栈（callback stack）的最后被调用，并在此得到处理。你可以看到终端上的输出。现在，所有的同步函数都被处理了，`main()`被从回调栈（callback stack）中移除。

在后台，所有的异步函数被处理，它们的回调被存储在回调队列（callback queue）中。首先被处理的函数将被首先加入回调栈（callback stack）的执行队列中。

![8](https://www.freecodecamp.org/news/content/images/2021/08/8.PNG)  
![9](https://www.freecodecamp.org/news/content/images/2021/08/9.PNG)  
![10](https://www.freecodecamp.org/news/content/images/2021/08/10.PNG)

_注意：异步函数不能在回调栈（callback stack）内运行，直到它被清空。这意味着在`main()`被从调用栈（callback stack）中移除后，所有的异步函数才能开始执行。_

现在，它们一个接一个地被推到回调栈（callback stack）中，使用**事件循环（event loop）**，最后被执行。每个回调函数都会打印值，每次都会调用`console.log()`函数。

![11](https://www.freecodecamp.org/news/content/images/2021/08/11.PNG)

最后，这些在被执行后也被移除，现在回调栈（callback stack）是空的。

![12](https://www.freecodecamp.org/news/content/images/2021/08/12.PNG)

这就是NodeJS将如何在环境中执行同步和异步函数，以及事件循环如何管理调用异步函数。

## 总结

在这篇文章中，你了解了NodeJS的内部工作，看到了异步程序是如何被执行的。

现在你应该明白为什么两秒的延时函数不会阻止程序的其他部分执行。你也知道为什么零秒延时函数在 "End "打印后最后打印出数值。

这就是全部! 我希望你喜欢阅读这篇文章，并学到一些新东西。如果你觉得这篇文章有用，请分享这篇文章。
