> -  原文地址：[What is a Promise? JavaScript Promises for Beginners](https://www.freecodecamp.org/news/what-is-promise-in-javascript-for-beginners/)
> -  原文作者：[Kingsley Ubah](https://www.freecodecamp.org/news/author/ubahthebuilder/)
> -  译者：byself
> -  校对者：

![What is a Promise? JavaScript Promises for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/JS-Promises-Expl.png)

如果你还是一个Javascript小白，你可能要纠结一下Promise到底是什么。

最近我发了一条推特，描述了这个问题，我被大家的反馈震惊到了。所以我决定写一篇关于Promise的教程。

我看过很多关于Promise的文章，但大部分教程都没有通过类比的方式解释清楚Promise到底是什么。初学者搞不懂Promise的根本原因是他们不知道Promise是做什么的，以及如何在简单和复杂的场景中使用它。

因此在这篇教程中，我将通过一个小故事来解释什么是Promise，Promise是如何工作的。同时我也会通过一些代码示例来说明在JavaScript中如何使用Promise。

## 什么是Promise?

想象一下，你准备面试某个公司的前端工程师。

你走进面试会场，当面试马上要开始时你发现简历忘带了，这时你怎么办？

你没有气馁。因为你很幸运，你有一个室友。

你马上给室友打电话寻求帮助，恳求室友帮你找到简历。你的室友**承诺**他一旦找到就立马回你消息。

假设简历被找到，室友给你回复信息：

> “太好了，我找到你的简历了！”

但是如果室友没有找到，他就要回复一条失败的信息，并解释他为什么没有找到简历。比如，他可能给正在面试的你发如下信息：

> “对不起，我没有找到你的简历，因为你的保险柜钥匙丢了。”

与此同时，面试还要继续。但面试官并没有拿到真实的简历，而是得到一个**正在找简历**的承诺，同时面试官把该简历的状态设置成**进行中（PENDING）**。

你回答了所有问题。但不幸的是，能否得到这个工作还要依赖你简历的**最终状态（FINAL STATUS）**。

你的室友终于回消息了。正如我们前面讨论过的，如果他没有找到简历，他就需要发一个失败的信息并解释为什么没有找到。

如果是这种情况，面试结束，你被**拒绝（Rejected）**了。

如果室友找到了简历，他会很高兴的告诉你他找到了，而你将继续面试，并**获得（FULFILL）**这份工作。

## 如何把上述过程翻译成JS Code?

室友承诺找简历并回复信息的过程等同于我们在JavaScript中定义一个Promise。定义Promise并不能直接或立即获得返回值，而是返回一个Promise对象。这个Promise对象在一段时间后会接收返回值。

Promise对象是异步的，这就意味着程序需要花点时间才能获得结果。这和找简历是一样的，都需要花点时间去找。

基于这个原因，在找的这个时间里，面试官并不是什么都没做，而是基于**简历一会就找到**的承诺，他们依然开始面试候选人。在这个场景里，我们用**简历一会就找到**的承诺替换了**真实的简历**。

同理，JS引擎也并不是等着什么也不做，而是继续执行后续代码，并将返回的Promise对象状态设置为**Pending**。

回复信息包含是否找到简历的状态信息。对于Promise对象来说，回复信息被称作返回值。

如果回复信息是“success”，我们将录取候选人。如果是“failure”，我们不录取该候选人。

在Promise中，我们通过[回调函数](/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/) 处理Promise的返回值。这些处理函数定义在`then()`方法中。

为了指定如何调用回调函数，需要使用以下两个方法：

-  `resolve(value)`: 表明Promise任务成功，调用`then()`的成功回调函数。
-   `reject(error)`: 表明Promise任务失败，调用`then()`的错误回调函数。

如果Promise成功，则调用成功回调，如果失败，调用失败回调。

在异步任务完成之前，Promise只是一个占位符。当你定义了一个Promise，你并不会**立即**获得返回值，而是获得一个Promise对象。

## 如何在JavsScript中使用Promise

你可以通过`Promise`类定义一个Promise对象。

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is the eventual value the promise will return');
  }, 3000);
});

console.log(myPromise);
```

示例1

在控制台运行将返回一个`Promise`对象：

![](https://www.freecodecamp.org/news/content/images/2021/08/promise-console-1.png)

除了通过构造函数声明一个Promise对象外，还可以使用Promise内置的API进行声明：

```js
const anotherPromise = Promise.resolve("this is the eventual value the promise will return")

console.log(anotherPromise);
```

示例2

示例1中的Promise等待3s后获取到成功返回的信息：`this is the eventual...`，而示例2中将立即获取到成功返回的信息。

## JavaScript Promise中的错误处理

Promise对象也能被*rejected*。大多数时候，**rejected**的发生是因为执行异步任务的时候抛出了错误，此时就会调用`reject()`方法。

下面的示例展示了一个Promise对象是如何执行reject方法的: 

```js
const myPromise = new Promise((resolve, reject) => {
  let a = false;
  setTimeout(() => {
    return (a) ? resolve('a is found!'): reject('sorry, no a');
  }, 3000);
}); 

```

示例3

你能想到Promise被rejected的原因吗？如果你的答案是：`a`的值是false，那么恭喜你答对了。

在示例3中，代码执行3s后将调用reject方法，因为`(a)?`表达式的值是false，所以触发`reject`方法。

## Promise的链式调用

当Promise返回了某个值，通常你都会对返回值进行处理。

比如，你发送了一个网络请求，你期望获取数据并展示在页面上。

你可以定义两个回调函数，当Promise返回成功或失败时进行回调。这两个回调函数定义在`then()`内：

```JS
const anotherPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is the eventual value the promise will return');
  }, 3000);
});

// CONTINUATION
anotherPromise
.then(value => { console.log(value) }) 
```

示例4

示例4的代码在3s后返回成功信息：

![](https://www.freecodecamp.org/news/content/images/2021/08/EVENTAL-RETURN.png)

原则上你可以无限链式调用，调用链会依次执行，而且前一个then的返回值作为参数传入后一个then。

```js
const anotherPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is the eventual value the promise will return');
  }, 3000);
});

anotherPromise
.then(fulfillFn, rejectFn)
.then(fulfilFn, rejectFn)
.then(value => { console.log(value) })
```

示例5

但我们还是遗漏了重要的内容。

要时刻记住，`then()`方法必须有两个回调函数：第一个参数是成功回调，第二个参数是错误回调。

在示例4和示例5中都没有传入第二个回调函数。因此，如果代码报错，就没有错误回调捕获错误信息。

如果你执意要在`then()`中只定义一个回调函数（即成功回调），那么你就需要在Promise调用链的末端调用`catch()`方法捕获任何可能的报错信息。

### 如何在JS中使用`catch()`方法

在Promise调用链上，无论哪个环节报错，`catch()`方法都会被调用。

```js
const myPromise = new Promise((resolve, reject) => {
  let a = false;
  setTimeout(() => {
    return (a) ? resolve('a is found!'): reject('sorry, no a');
  }, 3000);
}); 

myPromise
.then(value => { console.log(value) })
.catch(err => { console.log(err) });


```

示例6

因为`myPromise`最终状态是rejected，`then()`方法中的成功回调被忽略。而`catch()`方法中的错误回调被执行，并在控制台打印如下错误信息：

![](https://www.freecodecamp.org/news/content/images/2021/08/Catch.png)

## 写在最后

JavaScript中的Promise是一个运行异步任务的强大功能。大部分情况下，在前端面试时，面试官都会问一些关于promise的问题。

在这片文章中，我已经解释了promise的简单应用场景，也通过示例的方式展示了基本用法。

希望你能从文章中获取有用的知识。如果你喜欢编程教程，点击查看[我的博客](https://ubahthebuilder.tech/user-authentication-vs-user-authorization-what-do-they-mean-in-back-end-web-development)。我会经常发布一些有关软件开发的文章。

再次感谢您的阅读，再会。

********P/S********: 

如果你也在学习JavaScript，我也创建了一个电子书，上面有50个关于js的主题，而且都是我亲自手绘的哦~~ [点此查看](https://ubahthebuilder.gumroad.com/l/js-50).
