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

The OG way of handling the asynchronous nature of JavaScript engines was through callbacks. Callbacks are basically functions which will be executed, **usually**, at the end of synchronous or I/O blocking operations.

A straightforward example of this pattern is the built-in `setTimeout` function that will wait for a certain number of milliseconds before executing the callback.

```js
setTimeout(2000, () => {
  console.log("Hello");
});
```

While it's convenient to just attach callbacks to blocking operations, this pattern also introduces a couple of problems:

- Callback hell
- Inversion of control (not the good kind!)

#### What is callback hell?

Let's look at an example with Santa and his elves again. To prepare a present, Santa's workshop would have to carry out a few different steps (with each taking different amounts of time simulated using `setTimeout`):

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

These steps need to be carried out in a specific order:

```js
translateLetter("wooden truck", (instruction) => {
  assembleToy(instruction, (toy) => {
    wrapPresent(toy, console.log);
  });
});
// This will produced a "wrapped polished wooden truck" as the final result
```

As we do things this way, adding more steps to the process would mean pushing the inner callbacks to the right and ending up in callback hell like this:

![Callback Hell](https://www.freecodecamp.org/news/content/images/2021/05/callback-hell.jpeg)

Callbacks look sequential, but at times the execution order doesn't follow what is shown on your screen. With multiple layers of nested callbacks, you can easily lose track of the big picture of the whole program flow and produce more bugs or just become slower when writing your code.

So how do you solve this problem? Simply modularise the nested callbacks into named functions and you will have a nicely left-aligned program that's easy to read.

```js
function assembleCb(toy) {
  wrapPresent(toy, console.log);
}
function translateCb(instruction) {
  assembleToy(instruction, assembleCb);
}
translateLetter("wooden truck", translateCb);
```

#### Inversion of Control

Another problem with the callback pattern is that you don't decide how the higher-order functions will execute your callbacks. They might execute it at the end of the function, which is conventional, but they could also execute it at the start of the function or execute it multiple times.

Basically, you are at the mercy of your dependency owners, and you might never know when they will break your code.

To solve this problem, as a dependency user, there's not much you can do about it. However, if you're ever a dependency owner yourself, please always:

- Stick to the conventional callback signature with error as the first argument
- Execute a callback only once at the end of your higher-order function
- Document anything out-of-convention that is absolutely required and always aim for backward compatibility

### Promises in JavaScript

[Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) were created to solve these above mentioned problems with callbacks. Promises make sure that JavaScript users:

- Stick to a specific convention with their signature `resolve` and `reject` functions.
- Chain the callback functions to a well-aligned and top-down flow.

Our previous example with Santa's workshop preparing presents can be rewritten with promises like so:

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

with the steps being carried out nicely in a chain:

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

However, promises are not without problems either. Data in each eye of our chain have a different scope and only have access data passed from the immediate previous step or parent scope.

For example, our gift-wrapping step might want to use data from the translation step:

```js
function wrapPresent(toy, instruction) {
  return Promise((resolve, reject) => {
    setTimeout(1000, () => {
      resolve(`wrapped ${toy} with instruction: "${instruction}`);
    });
  });
}
```

This is rather [a classic "memory sharing" problem with threading](https://livebook.manning.com/book/c-plus-plus-concurrency-in-action/chapter-3/1). To solve this, instead of using variables in the parent's scope, we should use `Promise.all` and ["share data by communicating, rather than communicate by sharing data"](https://blog.golang.org/codelab-share).

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

### Async/Await in JavaScript

Last but definitely not least, the shiniest kid around the block is async/await. It is very easy to use but it also has some risks.

Async/await solves the memory sharing problems of promises by having everything under the same scope. Our previous example can be rewritten easily like so:

```js
(async function main() {
  const instruction = await translateLetter("wooden truck");
  const toy = await assembleToy(instruction);
  const present = await wrapPresent(toy, instruction);
  console.log(present);
})();
// This would produce the present: wrapped polished wooden truck with instruction: "kcurt nedoow"
```

However, as much as it's easy to write asynchronous code with async/await, it's also easy to make mistakes that create performance loopholes.

Let's now localise our example Santa's workshop scenario to wrapping presents and loading them on the sleigh.

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

A common mistake you might make is carrying out the steps this way:

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

But does Santa need to `await` for each of the presents to be wrapped one by one before loading? Definitely not! The presents should be wrapped concurrently. You might make this mistake often as it's so easy to write `await` without thinking about the blocking nature of the keyword.

To solve this problem, we should bundle the gift wrapping steps together and execute them all at once:

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

Here are some recommended steps to tackle concurrency performance issue in your Node.js code:

- Identify hotspots with multiple consecutive awaits in your code
- Check if they are dependent on each other (that is one function uses data returned from another)
- Make independent function calls concurrent with `Promise.all`

## Wrapping up (the article, not Christmas presents 😂)

Congratulations on reaching the end of this article, I tried my best to make  
this post shorter, but the async topic in JavaScript is just so broad.

Here are some key takeaways:

- Modularise your JavaScript callbacks to avoid callback hell
- Stick to [the convention for JS callbacks](https://gist.github.com/sunnycmf/b2ad4f80a3b627f04ff2)
- Share data by communicating through `Promise.all` when using promises
- Be careful about the performance implication of async/await code

We ❤️ JavaScript :)

## Thank you for reading

Last but not least, if you like my writings, please head over to [my blog](https://blog.stanleynguyen.me/) for similar commentaries and follow [me on Twitter](https://twitter.com/stanley_ngn). 🎉
