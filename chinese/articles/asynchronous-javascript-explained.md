> -  原文地址：[Asynchronous JavaScript – Callbacks, Promises, and Async/Await Explained](https://www.freecodecamp.org/news/asynchronous-javascript-explained/)
> -  原文作者：[Njong Emy](https://www.freecodecamp.org/news/author/afumbom_bingeh/)
> -  译者：Utopia-xxl
> -  校对者：

![Asynchronous JavaScript – Callbacks, Promises, and Async/Await Explained](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/Purple-Minimal-We-Are-Hiring-Twitter-Post--1--1.gif)

如果你已经学习一段时间的 JavaScript ，那么你可能听到过“异步”这个术语。

这是因为 JavaScript 是一种异步语言……但这到底意味着什么呢？在本文中，我希望向你展示这个概念并不像听起来那么难。

# 同步 vs 异步

在我们真正开始之前，让我们先看看这两个词——同步和异步。

默认情况下， JavaScript 是一种同步的单线程编程语言。这意味着指令只能一个接一个地运行，而不能并行运行。思考下面的代码片段：

```javascript
let a = 1;
let b = 2;
let sum = a + b;
console.log(sum);
```

上面的代码非常简单—它将两个数字相加，然后将总和输出到浏览器控制台。解释器按照这个顺序一个接一个地执行这些指令，直到完成为止。

但是这种方法也有缺点。假设我们想从数据库中获取大量数据，然后将其显示在我们的界面上。当解释器到达获取此数据的指令时，其余代码将被阻止执行，直到数据被获取并返回。

现在，您可能会说，要获取的数据不是那么大，它不会占用任何明显的时间。假设您必须在多个不同的点获取数据。这种复合延迟听起来并不是用户想要遇到的。

幸运的是，通过引入异步的概念解决了同步 JavaScript 的问题。

可以把异步代码想象成现在就可以开始执行，以后再完成执行的代码。当 JavaScript 异步运行时，指令不一定像我们前面看到的那样一个接一个地执行。

 为了正确地实现这种异步行为，多年来开发人员使用了几种不同的解决方案。每个解决方案都在前一个解决方案的基础上进行改进，这使得代码更加优化，并且在代码变得复杂时更容易理解。

为了进一步理解 JavaScript 的异步特性，我们将介绍回调函数、promise、async和await。

# JavaScript中的回调函数是什么?

回调是在另一个函数内部传递的函数，然后在该函数中调用以执行任务。

感到困惑吗?让我们通过实际执行来分解它。

```Javascript
console.log('fired first');
console.log('fired second');

setTimeout(()=>{
    console.log('fired third');
},2000);

console.log('fired last');
```

上面的代码片段是一个小程序，它将所有内容输出到控制台。但这里有一些新的东西。解释器会执行第一条指令，然后是第二条，但它会跳过第三条指令，然后执行最后一条指令。

 `setTimeout` 是一个接受两个参数的 JavaScript 函数。第一个参数是另一个函数，第二个参数是该函数执行的时间，以毫秒为单位。现在您看到了回调函数的定义开始起作用了。

在本例中，`setTimeout` 内部的函数需要在两秒( 2000 毫秒)后运行。想象一下，它被带到浏览器的某个单独部分执行，而其他指令继续执行。两秒钟后，返回函数的结果。

这就是为什么如果我们在程序中运行上面的代码片段，会得到这样的结果:

```javascript
fired first
fired second
fired last
fired third
```

你会看到在函数 `setTimeout` 返回结果之前输出了最后一条指令。假设我们使用此方法从数据库中获取数据。当用户在等待数据库调用返回结果时，执行中的流程不会被中断。

这种方法非常有效，但仅限于一点。有时候，开发人员必须对代码中的不同源代码进行多次调用。为了进行这些调用，回调将被嵌套，直到它们变得非常难以读取或维护。这被称为 **回调地狱**

为了解决这个问题，引入了Promise。

# JavaScript 中的 Promise 是什么?

我们经常听到人们做出承诺。你的表弟承诺给你免费的钱，一个孩子承诺不经允许不会再碰饼干罐……但 JavaScript 中的承诺略有不同。

 在我们的语境中，承诺是需要一些时间去做的事情。一个承诺有两种可能的结果:

-   我们要么运行并解决承诺，要么
-   执行过程中出现了一些错误，承诺被拒绝

Promise 的出现是为了解决回调函数的问题。Promise 接受两个函数作为参数。即`resolve`和`reject`。请记住，resolve 表示成功时，reject 表示错误发生时。

让我们看一下Promise的作用:

```JavaScript
const getData = (dataEndpoint) => {
   return new Promise ((resolve, reject) => {
     //some request to the endpoint;
     
     if(request is successful){
       //do something;
       resolve();
     }
     else if(there is an error){
       reject();
     }
   
   });
};
```

上面的代码是一个Promise，包含在对某个端点的请求中。就像我前面提到的，这个Promise包含了`resolve`和`reject`。

 例如，在调用端点之后，如果请求成功，我们将解决承诺并继续对响应执行任何我们想要的操作。但是如果出现错误，承诺就会被拒绝。

Promise 是一种巧妙的方法用来解决回调地狱带来的问题, 被称为 **Promise 链式调用**。你可以使用这个方法从多个端点顺序地获取数据，但代码更少，方法更简单。

但还有一种更好的方法！你可能更熟悉下面的方法，因为它是在 JavaScript 中处理数据和 API 调用的首选方法。

# JavaScript 中的 Async 和 Await 是什么?

问题是，像回调一样将 Promise 链接在一起会变得非常庞大和混乱。这就是产生 Async 和 Await 的原因。

执行以下操作定义一个异步函数:

```JavaScript
const asyncFunc = async() => {

}
```

请注意，调用异步函数将始终返回一个 Promise 。看看这个：

```JavaScript
const test = asyncFunc();
console.log(test);
```

在浏览器控制台中运行上面的代码，我们看到 `asyncFunc` 返回了一个 Promise.

现在让我们真正分解一些代码。思考下面的代码片段:

```JavaScript
const asyncFunc = async () => {
	const response = await fetch(resource);
   	const data = await response.json();
}
```

 `async` 关键字是我上面提到的用来定义 async 函数的。但是 `await`呢？好吧，它阻止 JavaScript 在解决promise之前将 `fetch` 赋值给response变量。一旦 promise 被解决，现在可以将 fetch 方法的结果分配给 response 变量。

第 3 行代码也是相同的行为。 `.json` 方法返回一个 Promise 对象，我们可以使用 `await` 延迟分配直到 promise 被解决。

# 阻塞还是非阻塞

当我说“暂停”，你一定认为实现Async和Await以某种方式阻塞代码执行。因为我们的请求花费的时间太长了，对吧？

事实上并不是。async函数内部的代码会阻塞，但不会以任何方式影响程序的执行。代码的执行仍然是异步的。正如下面的代码：

```javascript
const asyncFunc = async () => {
	const response = await fetch(resource);
   	const data = await response.json();
}

console.log(1);
console.log(2);

asyncFunc().then(data => console.log(data));

console.log(3);
console.log(4);
```

在我们的浏览器控制台中，上面的输出看起来像这样：

```
1
2
3
4
data returned by asyncFunc
```

你会看到，当我们调用 `asyncFunc` 时，我们的代码会继续运行，直到该函数返回结果。

# Conclusion

本文并没有深入探讨这些概念，但我希望它能展示异步 JavaScript 的含义以及需要注意的一些事项。

它是 JavaScript 的一个非常重要的部分，本文只触及了表面。尽管如此，我希望这篇文章有助于理解这些概念。
