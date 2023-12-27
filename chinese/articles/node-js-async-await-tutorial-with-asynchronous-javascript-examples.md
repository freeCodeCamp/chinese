> - 原文地址：[Node.js Async Await Tutorial – With Asynchronous JavaScript Examples](https://www.freecodecamp.org/news/node-js-async-await-tutorial-with-asynchronous-javascript-examples/)
> - 原文作者：[Stanley Nguyen](https://www.freecodecamp.org/news/author/stanley/)
>
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Node.js Async Await Tutorial – With Asynchronous JavaScript Examples](https://www.freecodecamp.org/news/content/images/size/w2000/2021/05/yoda.jpeg)

当你第一次学习JavaScript时，最难理解的概念之一是该语言的异步处理（asynchronous processing）模式。对于我们大多数人来说，学习异步编程看起来差不多是这样的

![async](https://www.freecodecamp.org/news/content/images/2021/05/async.png)

如果你第一次使用async时不是这样，请认为自己是个天才。

尽管它很难学，但如果你想使用JavaScript和Node.js构建网络应用程序和服务器，异步编程是至关重要的，因为JS代码**默认是异步的**。

## 异步编程基础知识

那么，究竟什么是异步处理模型，或 "非阻塞I/O "模型（如果你是Node.js用户，你可能已经听说过）？

这里有一个很长的，请不要看的描述：在异步处理模型中，当你的应用程序引擎与外部各方（如文件系统或网络）进行交互时，它不会等到从这些各方得到一个结果，才做下一步。相反，它继续进行后续的任务，只有在得到结果的信号后才回到之前的外部各方进行处理。

为了理解Node.js的默认异步处理模型，我们来看看一个假设的圣诞老人工作室。在任何工作开始之前，圣诞老人将不得不阅读来自世界各地的孩子们的每一封可爱的信。

![Santa reading letter for workshop](https://www.freecodecamp.org/news/content/images/2021/05/santa-01.png)

然后，他将弄清所要求的礼物，将物品名称翻译成[精灵语](https://en.wikipedia.org/wiki/Elvish_languages)，然后将指令传递给我们每个勤劳的精灵，他们有不同的专长：红色的擅长木制玩具，蓝色的擅长填充玩具，绿色的精通做机器人玩具。

![Santa passing instruction to Red](https://www.freecodecamp.org/news/content/images/2021/05/santa-02.png)

今年，由于[COVID-19大流行](https://en.wikipedia.org/wiki/COVID-19_pandemic)，只有一半的圣诞老人的精灵可以到他的车间来帮忙。不过，因为他很聪明，圣诞老人决定不等每个精灵准备完礼物（也就是同步工作），而是继续翻译和传递他那堆信中的指示。

![Santa passing instruction to Blue](https://www.freecodecamp.org/news/content/images/2021/05/santa-03.png)

诸如此类...

![Santa continue passing out instructions](https://www.freecodecamp.org/news/content/images/2021/05/santa-04.png)

当他正准备读另一封信时，红色精灵通知圣诞老人，他已经完成了准备好了第一份礼物。然后，圣诞老人从红色精灵手中接过礼物，并把它放在一边。

![Santa receiving Red's present](https://www.freecodecamp.org/news/content/images/2021/05/santa-05.png)

然后他继续翻译和传递下一封信。

![Santa passing instruction to Green](https://www.freecodecamp.org/news/content/images/2021/05/santa-06.png)

由于他只需要包装一个预先制作好的飞行机器人，绿精灵可以迅速完成准备工作并将礼物交给圣诞老人。

![Santa receiving Green's present](https://www.freecodecamp.org/news/content/images/2021/05/santa-07.png)

经过一整天艰苦的异步工作，圣诞老人和精灵们设法完成了所有的礼物准备工作。由于他改进了异步工作模式，尽管受到大流行病的重创，圣诞老人的工作室还是在创纪录的时间内完成了工作。

![Santa's gotten all the presents](https://www.freecodecamp.org/news/content/images/2021/05/santa-08.png)

这就是异步或非阻塞I/O处理模型的基本思想。现在让我们看看它在Node.js中是如何具体完成的。

## Node.js的事件循环

你可能听说过Node.js是单线程的。然而，确切地说，只有Node.js中的事件循环是单线程的，它与后台C++工作线程池交互。Node.js的处理模式有四个重要组成部分:

- 事件队列（Event Queue）: 在程序中声明的任务，或通过[回调 callbacks](https://nodejs.org/en/knowledge/getting-started/control-flow/what-are-callbacks/)从处理线程池中返回. (在我们的圣诞老人工作室里，相当于给圣诞老人的那堆信)
- 事件循环（Event Loop）: Node.js的主线程，促进事件队列和工人线程池进行操作--包括异步和同步。(这里是圣诞老人 🎅)
- （后台线程池）Background thread pool: 这些线程做任务的实际处理，这可能是I/O阻塞（例如调用和等待外部API的响应）。(这些是我们车间里勤奋的精灵 🧝🧝‍♀️🧝‍♂️。)

你可以将这种处理模式可视化，如下所示:

![processing-model](https://www.freecodecamp.org/news/content/images/2021/05/processing-model.png)

图片来源：c-sharpcorner.com

让我们看看一个实际的代码片段，看看这些代码的作用:

```js
console.log("Hello");
https.get("https://httpstat.us/200", (res) => {
  console.log(`API returned status: ${res.statusCode}`);
});
console.log("from the other side");
```

如果我们执行上面这段代码，我们会在标准输出中得到这个结果:

```bash
Hello
from the other side
API returned status: 200
```

那么Node.js引擎是如何执行上述代码片段的呢？它从调用栈中的三个函数开始:

![Processing starts with 3 functions in the call stack](https://www.freecodecamp.org/news/content/images/2021/05/execution-01-1.png)

然后，"Hello "被打印到控制台，相应的函数调用从堆栈中删除。

![Hello console log removed from stack](https://www.freecodecamp.org/news/content/images/2021/05/execution-02-1.png)

然后，对`https.get`的函数调用（即对相应的URL进行获取请求）被执行，并被委托给工人线程池，并附加一个回调。

![https.get delegated to worker pool](https://www.freecodecamp.org/news/content/images/2021/05/execution-03.png)

对`console.log`的下一个函数调用被执行，`来自另一边`被打印到控制台。

![Next console.log get executed](https://www.freecodecamp.org/news/content/images/2021/05/execution-04.png)

现在网络调用已经返回了一个响应，然后回调函数的调用将进入回调队列（callback queue）中。请注意，这一步可能发生在紧接着的上一步之前（即 `从另一边`得到打印），尽管通常情况下不是这样的。

![Network call completes and callback queued](https://www.freecodecamp.org/news/content/images/2021/05/execution-05.png)

然后回调被放在我们的调用栈（call stack）中:

![Callback put inside call stack](https://www.freecodecamp.org/news/content/images/2021/05/execution-06.png)

然后我们会在控制台（console）看到 "API返回状态：200"，像这样:

![Status code printed out](https://www.freecodecamp.org/news/content/images/2021/05/execution-07.png)

通过促进回调队列（callback queue）和调用栈（call stack），Node.js中的事件循环以异步方式有效地执行我们的JavaScript代码。

## JavaScript和Node.js的同步编程的发展历史 async/await

现在你对异步执行和Node.js事件循环的内部工作有了很好的理解，让我们深入了解JavaScript中的async/await。我们将看看它是如何工作的，从最初的回调驱动（callback-driven）的实现到最新闪目耀人的async/await关键字。

### JavaScript中的回调（Callbacks）

OG处理JavaScript引擎的异步性的方法是通过回调。回调基本上是在同步或I/O阻塞操作结束后执行的函数。

这种模式的一个直接例子是内置的`setTimeout`函数，它将在执行回调之前等待一定数量的毫秒。

```js
setTimeout(2000, () => {
  console.log("Hello");
});
```

虽然将回调加到阻塞操作上很方便，但这种模式也带来了一些问题:

- 回调地狱（Callback hell）
- 控制反转（不是好的那种！）。

#### 什么是回调地狱？

让我们再看看圣诞老人和他的精灵们的例子。为了准备一份礼物，圣诞老人的工作室必须进行几个不同的步骤（每个步骤都要用`setTimeout`模拟不同的时间）:

```js
function translateLetter(letter, callback) {
  return setTimeout(2000, () => {
    callback(letter.split("").reverse().join(""));
  });
}
function assembleToy(instruction, callback) {
  return setTimeout(3000, () => {
    const toy = instruction.split("").reverse().join("");
    if (toy.includes("wooden")) {
      return callback(`polished ${toy}`);
    } else if (toy.includes("stuffed")) {
      return callback(`colorful ${toy}`);
    } else if (toy.includes("robotic")) {
      return callback(`flying ${toy}`);
    }
    callback(toy);
  });
}
function wrapPresent(toy, callback) {
  return setTimeout(1000, () => {
    callback(`wrapped ${toy}`);
  });
}
```

这些步骤需要按照特定的顺序进行:

```js
translateLetter("wooden truck", (instruction) => {
  assembleToy(instruction, (toy) => {
    wrapPresent(toy, console.log);
  });
});
// This will produced a "wrapped polished wooden truck" as the final result
```

由于我们这样做，在这个过程中增加更多的步骤将意味着把内部的回调推到右边，并最终进入回调地狱，如图所示:

![Callback Hell](https://www.freecodecamp.org/news/content/images/2021/05/callback-hell.jpeg)

回调看起来是有顺序的，但有时执行的顺序并不遵循你屏幕上显示的内容。有了多层嵌套的回调，你很容易失去对整个程序流程的大局观，产生更多的错误，或者只是在写代码时变得更慢。

那么你如何解决这个问题呢？简单地将嵌套的回调模块化为命名的函数，你将有一个很好的左对齐的程序，很容易阅读。

```js
function assembleCb(toy) {
  wrapPresent(toy, console.log);
}
function translateCb(instruction) {
  assembleToy(instruction, assembleCb);
}
translateLetter("wooden truck", translateCb);
```

#### 控制反转（Inversion of Control）

回调模式的另一个问题是，你并没有决定高阶函数如何执行你的回调。他们可能在函数的结尾处执行，这是传统的做法，但他们也可能在函数的开始处执行，或者多次执行。

基本上，你处于依赖关系所有者的摆布之下，你可能永远不知道他们何时会破坏你的代码。

为了解决这个问题，作为一个依赖性用户，你能做的并不多。然而，如果你自己曾经是一个依赖关系的所有者，请一定要:

- 坚持传统的回调签名，将错误作为第一个参数
- 只在高阶函数的末尾执行一次回调
- 记录绝对需要的任何不合常规的东西，并始终以向后兼容为目标

### JavaScript中的Promises

[Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 是为了解决上述回调的问题而创建的。Promises确保了JavaScript用户:

- 坚持用他们的签名`resolve`和`reject`函数进行特定的约定。
- 将回调函数链接到一个排列整齐的、自上而下的流程。

我们之前关于圣诞老人工作室准备礼物的例子可以用这样的承诺来重写:

```js
function translateLetter(letter) {
  return new Promise((resolve, reject) => {
    setTimeout(2000, () => {
      resolve(letter.split("").reverse().join(""));
    });
  });
}
function assembleToy(instruction) {
  return new Promise((resolve, reject) => {
    setTimeout(3000, () => {
      const toy = instruction.split("").reverse().join("");
      if (toy.includes("wooden")) {
        return resolve(`polished ${toy}`);
      } else if (toy.includes("stuffed")) {
        return resolve(`colorful ${toy}`);
      } else if (toy.includes("robotic")) {
        return resolve(`flying ${toy}`);
      }
      resolve(toy);
    });
  });
}
function wrapPresent(toy) {
  return new Promise((resolve, reject) => {
    setTimeout(1000, () => {
      resolve(`wrapped ${toy}`);
    });
  });
}
```

顺利地进行了一系列的步骤:

```js
translateLetter("wooden truck")
  .then((instruction) => {
    return assembleToy(instruction);
  })
  .then((toy) => {
    return wrapPresent(toy);
  })
  .then(console.log);
// This would produce the exact same present: wrapped polished wooden truck
```

然而，promises 也不是没有问题的。我们链条上的每一个眼的数据都有不同的范围，并且只能访问从紧邻的前一个步骤或父级范围传递过来的数据。

例如，我们的礼物包装步骤可能想使用翻译步骤的数据。:

```js
function wrapPresent(toy, instruction) {
  return Promise((resolve, reject) => {
    setTimeout(1000, () => {
      resolve(`wrapped ${toy} with instruction: "${instruction}`);
    });
  });
}
```

这倒是[一个典型的 "内存共享 "的线程问题](https://livebook.manning.com/book/c-plus-plus-concurrency-in-action/chapter-3/1)。 为了解决这个问题，我们应该使用`Promise.all`和["通过通信共享数据，而不是通过共享数据进行通信"](https://blog.golang.org/codelab-share)，而不是使用父级范围内的变量。

```js
translateLetter("wooden truck")
  .then((instruction) => {
    return Promise.all([assembleToy(instruction), instruction]);
  })
  .then((toy, instruction) => {
    return wrapPresent(toy, instruction);
  })
  .then(console.log);
// This would produce the present: wrapped polished wooden truck with instruction: "kcurt nedoow"
```

### JavaScript中的Async/Await

最后但绝对不是最不重要的，最靓的仔是async/await。它非常容易使用，但也有一些风险。

Async/await解决了Promise的内存共享问题，把所有的东西都放在同一个范围内。我们之前的例子可以很容易地改写成这样:

```js
(async function main() {
  const instruction = await translateLetter("wooden truck");
  const toy = await assembleToy(instruction);
  const present = await wrapPresent(toy, instruction);
  console.log(present);
})();
// This would produce the present: wrapped polished wooden truck with instruction: "kcurt nedoow"
```

然而，尽管用async/await写异步代码很容易，但也很容易犯错误，造成性能漏洞。

现在让我们把我们的例子圣诞老人工作室的场景本地化，以包装礼物并把它们装到雪橇上。

```js
function wrapPresent(toy) {
  return Promise((resolve, reject) => {
    setTimeout(5000 * Math.random(), () => {
      resolve(`wrapped ${toy}`);
    });
  });
}
function loadPresents(presents) {
  return Promise((resolve, reject) => {
    setTimeout(5000, () => {
      let itemList = "";
      for (let i = 0; i < presents.length; i++) {
        itemList += `${i}. ${presents[i]}\n`;
      }
    });
  });
}
```

你可能犯的一个常见错误是这样执行步骤:

```js
(async function main() {
  const presents = [];
  presents.push(await wrapPresent("wooden truck"));
  presents.push(await wrapPresent("flying robot"));
  presents.push(await wrapPresent("stuffed elephant"));
  const itemList = await loadPresents(presents);
  console.log(itemList);
})();
```

但是，圣诞老人是否需要 `等待`每件礼物被逐一包装好后再装车？当然不需要。礼物应该是同时包装的。你可能会经常犯这个错误，因为你很容易写出`await`，而没有考虑到这个关键字的阻塞性（blocking nature）。

为了解决这个问题，我们应该把礼物包装的步骤捆绑在一起，一次性执行:

```js
(async function main() {
  const presents = await Promise.all([
    wrapPresent("wooden truck"),
    wrapPresent("flying robot"),
    wrapPresent("stuffed elephant"),
  ]);
  const itemList = await loadPresents(presents);
  console.log(itemList);
})();
```

以下是一些建议的步骤，以解决你的Node.js代码中的并发性能问题:

- 在你的代码中找出有多个连续等待的hotspots
- 检查它们是否相互依赖（即一个函数使用另一个函数返回的数据）
- 用`Promise.all`使独立的函数调用同时进行

## 收拾（文章，而不是圣诞礼物😂）

祝贺你读到了本文的结尾，我已经尽力让这篇文章变得更短。这篇文章，但JavaScript中的异步话题实在是太广泛了。

下面是一些关键的收获:

- 将你的JavaScript回调模块化以避免回调地狱
- 坚持使用[JS回调的惯例](https://gist.github.com/sunnycmf/b2ad4f80a3b627f04ff2)
- 在使用promises的时候，通过`Promise.all`来共享数据
- 要注意async/await代码的性能影响

We ❤️ JavaScript :)

## 谢谢您的阅读

最后，如果你喜欢我的文章，请到[我的博客](https://blog.stanleynguyen.me/)了解类似的评论，并关注[我的推特](https://twitter.com/stanley_ngn). 🎉
