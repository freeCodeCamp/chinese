> -  原文地址：[What is a Promise? JavaScript Promises for Beginners](https://www.freecodecamp.org/news/what-is-promise-in-javascript-for-beginners/)
> -  原文作者：[Kingsley Ubah](https://www.freecodecamp.org/news/author/ubahthebuilder/)
> -  译者：byself
> -  校对者：

![What is a Promise? JavaScript Promises for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/JS-Promises-Expl.png)

If you're a JavaScript beginner, you might be struggling to understand what a promise really is.
如果你还是一个Javascript小白，你可能要纠结一下promise到底是什么。

I recently published this as a thread on Twitter and was blown away by the responses. So I decided to expand this into an introductory tutorial on JavaScript promises.
最近我发了一条推特，描述了这个问题，我被大家的反馈震惊到了。所以我决定写一篇关于JavaScript promise的教程。

I have read a lot of articles on promises and the problem is that many of these guides don't explain them in a relatable way. People don't understand what a promise is in JavaScript is because they don't really know what it is about and how it behaves in simple and relatable terms.
我看过很多关于`promise`的文章，大部分都没有解释清楚。初学者搞不懂Javascript中promise的根本原因是他们不知道promise是做什么的，以及如何在简单和复杂的场景中使用它。

So in this article, I will be telling you a short story which explains what promises are and how exactly they work. I will also show you how to use promises in your JavaScript with some examples.
因此在这篇教程中，我将通过一个小故事来解释什么是promise，以及它是如何工作的。同时我也会通过一些案例来说明在JavaScript中如何使用promise。

## What is a Promise in JavaScript?
## 什么是Promise?

Imagine that you are interviewing job seekers for a position at your company.
想象一下，你正在公司面试某个职位的求职者。

A young man frantically comes in for an interview. When his interview session is about to begin, he realizes that he has forgotten his résumé.
一个年轻人走进来面试。当他准备开始面试时发现建立忘带了，怎么办呢？

Bummer, right?

He's not daunted, though. Luckily for him, he has a roommate who was still at home at that time.
他没有气馁。幸运的是他有一个室友。

He quickly calls his roommate over the phone and asks him for help. He pleads with his roommate to help find his résumé. His roommate PROMISES to text back as soon as he has something to report.
他马上给室友打电话寻求帮助，恳求室友帮他找到简历。他室友**承诺**他一旦找到就立马回消息。

Assuming the résumé is eventually found, he can text back:
假设简历被找到，室友回复信息：

> “Successful, I found your resume!”
> “太好了，我找到你的简历了！”

But if he doesn't find it, he is supposed to text back a failure message with the reason why he couldn't find the résumé. For example, he may text this message over to his friend who's interviewing:
但是如果室友没有找到，他就要回去一条失败的信息，并解释他为什么没有找到简历。比如，他可能给正在面试的朋友发如下信息：

> “Sorry, I couldn’t find your résumé because the key to your safe is missing.”
> “对不起，我没有找到你的简历，因为你的保险柜钥匙丢了。”

In the meantime, the interview continues as planned, and the interviewer holds on to the promise of finding the résumé, and not the actual résumé. At that time, the interviewer sets the status of the résumé delivery to PENDING.
与此同时，面试要继续进行。但面试官并没有拿到真实的简历，而是一个找到简历的承诺，同时面试官把该简历的状态设置成**进行中（PENDING）**。

The interviewee answers all the questions he is asked. But ultimately, his employment still depends on the FINAL STATUS of his résumé.
面试者回答了所有问题。但不幸的是，能否得到这个工作还要依赖他简历的**最终状态（FINAL STATUS）**。

His roommate finally texts back. As we discussed before, if he didn't find the résumé, he will share this failure with you along with the reason why he didn't find it.
他的室友终于回消息了。正如我们前面讨论过的，如果他没有找到简历，他就需要发一个失败的信息并解释为什么没有找到。

When that happens, the interview will end and the interviewee will be rejected.
如果是这种情况，面试结束，面试者被**拒绝（Rejected）**。

On the other hand, if the roommate finds the résumé, he will happily tell his friend that he was successful, and he will go ahead and FULFILL his hopes of getting a job.
如果室友找到了简历，他会很高兴的告诉面试者他找到了，而面试者讲继续面试，并把他获取这份工作的期望设置成**完成（FULFILL）**

## So How Does This Translate to JS Code?
## 如何把上述过程翻译成JS Code?

The roommate promising to find the résumé and texting back is synonymous with how we define a promise in JavaScript. The code does not directly or immediately return a value. Instead, it returns a promise that it will eventually provide the value at a later time.
室友承诺找简历并回复信息的过程等同于我们在JavaScript中定义一个promise（new Promise()）。定义promise并不能直接或立即获得返回值。相反，它会返回一个promise对象，这个对象在未来会接受到返回值。

A promise in JavaScript is asynchronous, meaning it takes time to resolve or finish. Just as the search for the applicant's resume takes time to complete.
JavaScript中的promise对象是异步的，这就意味着需要花点时间才能等到一个结果。就像从找简历到找到也要花点时间一样。

For that reason, the interviewer decides not to sit around doing nothing, so they begin interviewing the candidate based on the promise of a résumé delivery. We're using the promise of returning a résumé in place of an actual resume.
基于这个原因，面试官并不是什么都没做，而是基于简历一会就到的承诺，他们依然开始面试候选人。在这个场景里，我们用简历一会就到的承诺替换了真实的简历。

The JS engine also doesn’t wait around doing nothing – it starts executing other parts of the code, pending the returned value of the promise.
JS引擎也并不是等着什么也不做，而是开始执行后续代码，并将返回的promise对象设置为**Pending**状态。

The message text contains the status message of the résumé search. With a JavaScript Promise, that is also called the return value.
回复信息包含寻找简历的状态信息（是否找到）。对于JavaScript的Promise对象来说，回复信息被称作返回值。

If the message is a “success”, we will proceed to sign the candidate in and grant him the position. If it fails, we proceed to reject his application.
如果回复信息是“success”，我们将录取候选人。如果是“failure”，我们不录取该候选人。

With JavaScript promises, we do this by [using a callback function](/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/) (promise handlers). These functions are defined in a nested `then()` method.
在JS promises代码中，我们通过[回调函数](/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/) 的方式作为promise的处理函数。而这些处理函数定义在`then`方法中。

To specify what callbacks to call, you use the following two functions:
为了指定如何调用回调函数，需要使用以下两个方法：

-   `resolve(value)`: This indicates that the asynchronous task was successful. This will call the fulfillment callback in the `then()` handler.
-   `reject(error)`: This indicates an error while trying to run the asynchronous task. This will call the rejection callback in the `then()` handler.
-  `resolve(value)`: 该方法表明promise任务是成功的，并调用`then()`的成功回调。
-   `reject(error)`: 该方法表明运行异步任务报错了，并调用`then()`的错误回调。

If the promise is successful, the fulfillment callback will be called. If the promise is rejected, the rejected call back will be called instead.
如果promise成功，则调用成功回调，如果失败，调用失败回调。

A promise is simply a placeholder for an asynchronous task which is yet to be completed. When you define a promise object in your script, instead of returning a value immediately, it returns a promise.
Promise只是一个未完成的异步任务的占位符。当在代码中定义了一个Promise，你并不会**立即**获得一个返回值，而是获得一个promise对象。

## How to Write a Promise in JavaScript
## 如何在JavsScript中使用Promise

You can define a promise in your JavaScript by calling the `Promise` class and constructing an object like this:
你可以通过`Promise`类定义promise。

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is the eventual value the promise will return');
  }, 3000);
});

console.log(myPromise);
```

Code sample one
示例1

Running this in the console will return a `Promise` object:
在控制台运行将返回一个`Promise`对象：

![](https://www.freecodecamp.org/news/content/images/2021/08/promise-console-1.png)

Constructing an object is not the only way you can define a promise, though. You can also use the built-in `Promise` API to achieve the same thing:
除了通过构造函数声明一个promise对象外，还可以使用`Promise`内置的API进行声明：

```js
const anotherPromise = Promise.resolve("this is the eventual value the promise will return")

console.log(anotherPromise);
```

Code sample two
示例2

While the promise in the first code sample will wait for 3 seconds before fulfilling the promise with the `this is the eventual...` message, the promise in the second code sample will immediately fulfill it with the same message.
示例1中的promise等待3s后获取到成功返回的信息：`this is the eventual...`，而示例2中将立即获取到成功返回的信息。

## Rejected Promises in JavaScript
## JavaScript Promise中的错误处理

A Promise can also be rejected. Most of the time, rejections occur because JS encountered some kind of error while running the Asynchronous code. In such a scenario, it calls the `reject()` function instead.
Promise对象也可能被*rejected*。大多数时候，**rejected**的发生是因为执行异步任务的时候js触发了某种错误，此时就会调用`reject()`方法。

Here is simple and contrived example of how a promise can get rejected:
如下示例展示了一个promise对象是如何执行reject: 

```js
const myPromise = new Promise((resolve, reject) => {
  let a = false;
  setTimeout(() => {
    return (a) ? resolve('a is found!'): reject('sorry, no a');
  }, 3000);
}); 

```

Code example three
示例3

Can you think of the reason why this promise gets rejected? If you said "because `a` is not false", congratulations!
你能想到promise被rejected的原因吗？如果你的答案是：`a`的值是false，那么恭喜你答对了。

The promise in the third code sample will resolve to a rejection after a timeout of three seconds, because the `(a)?` statement resolves to false, which will trigger `reject`.
在示例3中 3s后将执行reject方法，因为`(a)?`表达式的值是false，将触发`reject`方法。

## How to Chain Promises with `then()`
## Promise的链式调用

When the promise finally returns a value, you will typically want to do something with that return value.
当promise返回了某个值，通常你都会对返回值进行处理。

For example, if you were making a network request, you might want to access the value and display it on the page for the user.
比如，你发送了一个网络请求，你可能期望获取值并展示在页面上。

You can define two callback functions which you want to get called when a promise is either fulfilled or rejected. These functions are defined inside a nested `then()` method:
你可以定义两个回调函数，当promise返回成功或失败时进行回调。这两个回调函数定义在`then()`内：

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

Code example four
示例4

Running this code will display the fulfillment message after three seconds in the console:
示例4代码在3s后返回成功信息：

![](https://www.freecodecamp.org/news/content/images/2021/08/EVENTAL-RETURN.png)

Note that you can nest as many promises as you want. Each step will execute after the previous step, taking in the return value of that previous step:
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

Code example five
示例5

But we have missed something important.
但我们还是遗漏了重要的内容。

Always keep in mind that a `then()` method must take both the fulfillment hander and a rejection handler. This way, the first is called if the promise is fulfilled and the second is called if the promise is rejected with an error.
要时刻记住，`then()`方法必须有两个回调函数：一个是成功回调，一个是错误回调。而且第一个参数是成功回调，第二个参数是错误回调。

The promises in code samples four and five does not include a second handler. So, assuming that an error is encountered, there would be no rejection handler to handle the error.
在示例4和示例5中都没有传入第二个回调函数。因此，如果代码报错，就没有错误回调捕捉到错误信息。

If you are only going to define a single callback function (aka a fulfillment handler) in `then()`, then you will need to nest a `catch()` method at the bottom of the promise chain to catch any possible errors.
如果你执意要在`then()`中只定义一个回调函数（即成功回调），那么你就需要在promise调用链的末端调用`catch()`方法捕获任何可能的报错信息。

### How to Use the `catch()` Method in JS
### 如何在JS中使用`catch()`方法

The `catch()` method will always get called whenever an error is encountered at any point along the promise chain:
在promise调用链上，无论哪个环节报错，`catch()`方法都会被调用。

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

Code example six
示例6

Since `myPromise` will eventually resolve to a rejection, the function defined in the nested `then()` will be ignored. Instead, the error handler in `catch()` will run, which should log the following error message to the console:
因为`myPromise`最终状态是rejected，`then()`方法中的成功回调被忽略。而`catch()`方法中的错误回调被调用，并在控制台打印如下错误信息：

![](https://www.freecodecamp.org/news/content/images/2021/08/Catch.png)

## Wrapping Up
## 写在最后

JavaScript promises are a very powerful feature that help you run asynchronous code in JavaScript. In most, if not all, interviews for roles which use JavaScript, your interviewer will probably ask a question about promises.
JavaScript中的Promise是一个非常强大的，运行异步脚本的功能。大部分情况下，在前端面试时，面试官都会问一些关于promise的问题。

In this article, I have explained what a promise is in simple terms, and I've shown its basic practical usage with some code examples.
在这片文章中，我已经解释了promise的简单应用场景，也通过示例的方式展示了基本用法。

I hope you got something useful from this article. If you like programming-related tutorials like this, you should [check out my blog](https://ubahthebuilder.tech/user-authentication-vs-user-authorization-what-do-they-mean-in-back-end-web-development). I regularly publish articles on software development there.
希望你能从文章中获取有用的知识。如果你喜欢编程教程，点击查看[我的博客](https://ubahthebuilder.tech/user-authentication-vs-user-authorization-what-do-they-mean-in-back-end-web-development)。我会经常发布一些有关软件开发的文章。

Thank you for reading and see you soon.
再次感谢您的阅读，有机会再见。

********P/S********: If you are learning JavaScript, I created an eBook which teaches 50 topics in JavaScript with hand-drawn digital notes. [Check it out here](https://ubahthebuilder.gumroad.com/l/js-50).

如果你也在学习JavaScript，我也创建了一个电子书，上面有50个关于js的主题，而且都是我亲自手绘的哦~~ [点此查看](https://ubahthebuilder.gumroad.com/l/js-50).
