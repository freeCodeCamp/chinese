> -   原文地址：[Functional Programming in JavaScript for Beginners](https://www.freecodecamp.org/news/functional-programming-in-javascript-for-beginners/)
> -   原文作者：Nahla Davies
> -   译者：Humilitas
> -   校对者：

![Functional Programming in JavaScript for Beginners](https://images.unsplash.com/photo-1482745637430-91c0bbcea3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE1fHxqYXZhc2NyaXB0fGVufDB8fHx8MTYxNjY5MTE0MA&ixlib=rb-1.2.1&q=80&w=2000)

函数式编程并不是新出现的编程方式，但它近几年才流行起来。

这是因为，一旦程序员理解了这个技术背后的基础知识（并能够使用它写出整洁可靠的代码），就能够使用函数式编程编写出更易于使用的应用。

因此，当你学完 [JavaScript beginners’ handbook](https://www.freecodecamp.org/news/the-complete-javascript-handbook-f26b2c71719c/) 之后，有必要进一步学习函数式编程。

如果你经常和 JavaScript 打交道，使用这种编程方式能为你节省开发时间，还能让你的代码更易读，也许还能提升代码安全性。

在本文中，我们将会探讨函数式编程的基本原理，然后介绍一些在 JavaScript 中使用这种编程方式的关键工具。

## 命令式编程 vs. 函数式编程

函数式编程的起源可以追溯到 20 世纪 30 年代 Lambda 运算的发明。

这是一种[寻求定义通用任务](https://en.wikipedia.org/wiki/Lambda_calculus)的计算方法，这种函数不修改目标数据（如数组、列表）的结构而是在其上执行数学运算。

![](https://www.freecodecamp.org/news/content/images/2021/02/image-144.png)

[图片来源](https://android.jlelse.eu/how-to-wrap-your-imperative-brain-around-functional-reactive-programming-in-rxjava-91ac89a4eccf)

可能听起来很抽象，尤其是对于编程初学者而言。但事实上，函数式编程和命令式编程之间的区别可以用一个例子来简明扼要地解释。看如下示例：

### 命令式：

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getOdds(arr) {
  let odds = [];
  for (let i = 0; i < arr.length + 1; i++) {
    if (i % 2 !== 0) {
      odds.push(i);
    }
  }
  return odds;
}

console.log(getOdds(arr)); // logs [1, 3, 5, 7, 9]

```

### 函数式：

```js
function getOdds2(arr){
return arr.filter(num => num % 2 !== 0)
}
console.log(getOdds2(arr))
// logs [ 1, 3, 5, 7, 9 ]

const getOdds3 = arr => arr.filter(num => num % 2 !== 0)
console.log(getOdds3(arr))
// logs [ 1, 3, 5, 7, 9 ]
```

如你所见，两种方法工作方式完全不同。

命令式方法定义一个数据结构，操作数据以获得我们需要的输出。函数式方法则使用 filter 函数定义一个程序化的函数，再按需调用。

当然，[函数式编程运作](https://www.freecodecamp.org/news/an-introduction-to-the-basic-principles-of-functional-programming-a2c2a15c84/)的大部分复杂性对终端用户是隐藏的，对使用前端开发框架的程序员也是隐藏的。

即使仅从这个例子来看，函数式编程的优势就已经很明显了——它使得代码更简洁、更易读、更易理解、更易修改。

## 为什么使用函数式编程

除了这些基本的优势之外，使用函数式编程还有许多其他优势。

许多优势源于一个简单的事实——函数式代码比指令式代码更易读。人们可以很轻易地看出函数式程序是如何工作的，而不用通过拆分来理解代码，这使得许多测试都被简化了。

### 函数式编程通过渗透测试确保代码完整性

在代码是人类可读的情况下，渗透测试会变得更加有效。这使得评估函数式代码的完整性更加容易。

根据 [Cloud Defense](https://www.clouddefense.ai/blog/penetration-testing) 的软件开发者 Barbara Ericson 的说法，JavaScript 应用总是应该进行渗透测试，并且函数式编程能使其更加严谨。

这种易读性也简化了开发工作的管理流程。

使用函数式编程，合规流程也变得更加简单，因为程序员不用过多担心他们代码的执行细节，意味着程序中处理敏感数据的部分可以独立于其他部分进行运算。

### 函数式编程让代码更易读

然而函数式编程的优势不局限于评估代码，它还有助于开发。

事实上，函数式编程利用并放大了 JavaScript 自身的[优点和缺点](https://www.freecodecamp.org/news/the-advantages-and-disadvantages-of-javascript/)。

![](https://www.freecodecamp.org/news/content/images/2021/02/image-145.png)

[图片来源](https://itnext.io/why-are-we-creating-a-javascript-only-world-wide-web-db8c3a340b9)

代码更易读了，就可以让更多人加入开发流程，即使他们并未完全掌握 JavaScript。

这是 DevOps 方法的一个关键原则，可以帮助减少 JavaScript 代码中的[漏洞](https://privacycanada.net/how-to-fight-common-java-security-vulnerabilities-from-devops/)，这也是函数式编程带来的好处之一。

## 函数式编程的关键工具

实际应用函数式编程之前需要了解一些关键工具和概念，我们一起看看。

### 1\. 纯函数与非纯函数

在最基本的层面来看，函数式方法[意图操作数据](https://www.geeksforgeeks.org/functional-programming-paradigm/)而不改变它们，这意味着一个“函数式函数”接收数据、执行一些计算并返回结果（在此过程中不对源数据本身做任何改动）。

这样的函数就叫做“纯函数”，此外其它函数则叫做“非纯函数”。

```js

function getSquare(items) {
  var len = items.length;
  for (var i = 0; i < len; i++) {
    items[i] = items[i] * items[i];
  }
  return items;
}
```

这里的总体思想就是完全不影响源数据。

如果想要合并两个数组，不应该使用 `Array.prototype.push()`（这会覆盖源数据），而应该使用 `Array.prototype.concat()` 方法，它会创建并返回一个新数组供你使用。

### 2\. 匿名函数

[匿名函数](https://www.javascripttutorial.net/javascript-anonymous-functions/)也是函数式编程的重要组成部分，它也是源于 Lambda 运算。

匿名函数，顾名思义，没有显式定义的函数名，它们是赋值给变量的函数，并通过变量来调用。

```js
 alert((function(x) {
    return !(x > 1)
      ? 1
      : arguments.callee(x - 1) * x;
  })(20));
```

这样的好处是可以很容易地通过变量调用其指向的函数、通过变量在模块之间传递这些函数，为我们提供了一种强大且灵活的函数使用新方式。

### 3\. 递归函数

函数式编程的另一个标志是递归函数的使用。即使是编程新手也能熟知递归的一般概念，函数式编程通过定义调用自身的函数将这一概念的运用更进一步。

```js
function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(3);
```

这使得递归的实现更加简单——主要是由于程序员不再需要使用循环来实现。

然而，它也是有风险的。具体来说，定义调用自身的函数更可能意外地造成死循环，所以务必为递归函数定义严格的终止条件。

## 总结

这三个都是函数式编程的典型概念，事实上这个范式的应用范围意味着它更像是一种哲学而不是一套设计好的工具和流程。

进入函数式编程的精彩世界，你会发现它的影响无处不在。事实上，它为如今许多[常见 JavaScript 实践](https://www.freecodecamp.org/news/what-is-javascript/)提供了参考。

换句话说，虽然函数式编程表面看起来很简单，却对编码方式有着深远影响。正因如此，即使并不常用，它依然值得学习。
