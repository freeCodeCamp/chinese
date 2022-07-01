> -  原文地址：[Yield! Yield! How Generators work in JavaScript.](https://www.freecodecamp.org/news/yield-yield-how-generators-work-in-javascript-3086742684fc/)
> -  原文作者：[Anonymous](https://www.freecodecamp.orgAnonymous)
> -  译者：Papaya HUANG
> -  校对者：

![Yield! Yield! How Generators work in JavaScript.](https://cdn-media-1.freecodecamp.org/images/0*Ts8-usYa-T4lL8yc)

by Ashay Mandwarya

# Yield! Yield! How Generators work in JavaScript.

![js0jIJmWBpkS7FqofAi1h-JFSyq6FXE1cyC5](https://cdn-media-1.freecodecamp.org/images/js0jIJmWBpkS7FqofAi1h-JFSyq6FXE1cyC5)

Photo by [Frederik Trovatten.com](https://unsplash.com/@trovatten?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

如果标题的提示还不够清晰的话，我就明说了，在这篇文章中我们将讨论生成器。

在进入正题之前，我们先复习一下函数基础：

-   在JavaScript中，函数是执行某项任务的一组语句，并且在结尾会返回某个值。
-   如果你重复调用一个函数，函数会重复执行所有语句。
-   箭一旦脱弓就再也收不回来了，要么击中要么错过目标。被调用的函数也一样，要么运行并返回一个值，要么抛出一个错误然后停止所有语句的执行。

想要理解生成器，你必须要牢记这三点。

### 生成器

生成器是一种特殊的函数，可以在函数执行途中停下来，之后再在同一个地方继续执行。生成器是迭代器和函数的结合。现在看这句话可能让你觉得困惑，但我保证读完这篇文章你就会豁然开朗。

打一个比方，你和妈妈正在玩游戏，突然妈妈有一些事要忙，你们停下游戏，帮妈妈完成工作，然后继续游戏，这个感觉就和生成器一样。

> **迭代器**是一个对象，它定义了一个序列，并在其终止时可能有一个返回值。 — MDN。

_迭代器本身也是一个内容丰富的话题，本文不做展开_

#### 基本语法

生成器的语法类似函数，但是多了一个星号(\*)。

```js
function* name(arguments) { statements }
```

**name —** 函数（生成器）名

**arguments —** 函数（生成器）的参数

**statements —** 函数（生成器）体

#### 返回

函数返回任意值：一个值、一个对象或者函数本身。生成器函数返回一个特殊的对象叫做生成器对象(_不完全对_)。这个对象如下面的代码片段：

*译者注：之所以说返回一个生成器对象不完全对，是因为准确来讲，首次调用生成器函数的时候返回Generator迭代器，然后通过调用生成器下一个方法消耗值时，Generator函数执行，知道遇到yield关键字。详情可以查看[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators)。*

```js
{value: value,  done: true|false}
```

这个对象有两个属性 `value`和`done`。 `value`包含了被**yield**关键字控制的值。`done`包含了一个**布尔值(true|false)**告诉生成器 **.next()**是否生成下一值或者是**undefined**。

上述内容比较难以理解，让我们通过例子来解释：

![2GKCXYgOAdydbo5qaKeXPayVwUXMpDPPzY1p](https://cdn-media-1.freecodecamp.org/images/2GKCXYgOAdydbo5qaKeXPayVwUXMpDPPzY1p)

```js
function* generator(e) {  
    yield e + 10;  
    yield e + 25;  
    yield e + 33;
    }
    var generate = generator(27);
```

```js
console.log(generate.next().value); // 37
console.log(generate.next().value); // 52
console.log(generate.next().value); // 60
console.log(generate.next().value); // undefined
```

让我们逐行理解上面的代码运行机制：

**_第1–5行:_** 在第1-5行我们定义了一个名为`generator`的生成器并有一个形参`e`，在这个函数体中包含了被关键字`yield`控制的语句以及运算。

**_第6行:_** 在第六行中，我们将生成器赋值给一个变量，变量名为`generate`。

**_第8–11行:_** 这里调用了一堆`console.log`分别调用生成器对应的`next`方法，这个方法会调用生成器对象的`value`属性。

![cafqdPSIaj55dp6A5GaErDFtrS0LueYhf87K](https://cdn-media-1.freecodecamp.org/images/cafqdPSIaj55dp6A5GaErDFtrS0LueYhf87K)

当生成器被调用的时候，它并不像普通函数一样立刻被执行，取而代之的是返回一个迭代器(_这就是为什么生成器会使用\*，告诉JS要返回一个迭代器对象_). 当迭代器的`next()`方法被调用， 生成器开始执行直到遇到带有`yield`关键字的语句。碰到`yield`之后，返回生成器对象，这个部分上文已经详细介绍过了。 再次调用`next()`方法会重新开始执行生成器直到遇到下一个`yield`语句，不断反复直到没有任何`yield`关键字。

![b8YEAKz8FN0BiZTL-9nWtahqnChK1A0dcnIa](https://cdn-media-1.freecodecamp.org/images/b8YEAKz8FN0BiZTL-9nWtahqnChK1A0dcnIa)

到这一步之后如果再次调用`next`方法会返回值为`undefined`的生成器对象。

现在让我们对这个生成器例子稍作修改，在内部添加一个`return`语句：

![cwoYBqzWffwSM5RCEJAUzpsPs-U39zfe6EV1](https://cdn-media-1.freecodecamp.org/images/cwoYBqzWffwSM5RCEJAUzpsPs-U39zfe6EV1)

在生成器中的中的`return`语句和其他所有函数中的一样，会停止函数执行。一旦遇到`return`关键字，生成器对象的`done属性`会被设置为`true`，`return`的值会被设为生成器对象的`value`属性。之后其他所有`yield`关键字会返回`undefined`。

如果抛出了一个错误，生成器的执行也会停止。

![VtjqhfNkczhAnzaY7BmLV1Y7fLs0Du3cVzQP](https://cdn-media-1.freecodecamp.org/images/VtjqhfNkczhAnzaY7BmLV1Y7fLs0Du3cVzQP)

如果要`yield`一个生成器，我们需要在`yield`关键字后添加一个 \* 来告诉JS我们要在内部执行一个生成器。 `[yield*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*)`被分配给另一个生成器函数之后所有`generator2`中的值都可以通过原函数中的`generate.next()`来生成。在控制台中第一个 `yield`来自第一个生成器，后面两个来自第二个生成器，只不过是被第一个生成器生成的。

#### 优点

**懒加载**

懒加载指的是仅在需要的时候做价值评估。正如我们会在接下来的例子中看到的，我们可以使用生成器来实现懒加载。我们可以在需要的时候生成值，而不是同时执行所有语句。

下面的例子会生成无限多个随机数字。我们可以尽情调用 `next()`在我们需要的时候生成我们想要的随机数。 

![0uRO5-e1uAChjJR9-m21IhjV46cZ7tzH10Xl](https://cdn-media-1.freecodecamp.org/images/0uRO5-e1uAChjJR9-m21IhjV46cZ7tzH10Xl)

```js
function * randomize() {  
    while (true) {
        let random = Math.floor(Math.random()*1000);
            yield random;  
            }
        }
```

```js
var random= randomize();
```

```js
console.log(random.next().value)
```

**内存效率**

从上面这个例子中我们可以看出生成器非常省内存，因为我们只按需生成值，所以就不需要太多内存。

#### 陷阱

生成器虽然有用但是也有一些陷阱：

-   **生成器不可以被随机访问** 和数组以及其他一些数据结构一样，生成器中的值必须一个接一个的生成，不能随机访问其中某一个元素。
-   **生成器只提供一次性访问** 生成器不允许反复遍历值，一旦访问完所有的值就必须创造新的生成器实例来重新遍历值。

#### 为什么需要生成器?

在JS中生成器被广泛采用，让我们来创造自己的生成器。

**实现生成器**

> **一个迭代器**使得程序员可以遍历容器对象 ——维基百科

让我们使用迭代器打印字符串中所有字母。字符串本身也是迭代器。

**迭代器**

![jxlJeu0eRnrbnVoQQiUnQWuW6WRqy6lewlui](https://cdn-media-1.freecodecamp.org/images/jxlJeu0eRnrbnVoQQiUnQWuW6WRqy6lewlui)

```js
const string = 'abcde';
const iterator = string[Symbol.iterator]();
console.log(iterator.next().value) //a
console.log(iterator.next().value) //b
console.log(iterator.next().value) //c
console.log(iterator.next().value) //d
console.log(iterator.next().value) //e
```

我们也可以使用生成器完成上述操作：

![BLoMgkxRn2Um8XnncvONthkIzSnwnDtLZxtd](https://cdn-media-1.freecodecamp.org/images/BLoMgkxRn2Um8XnncvONthkIzSnwnDtLZxtd)

```js
function * iterator() {
    yield 'a';
    yield 'b';
    yield 'c';
    yield 'd';
    yield 'e';
    }
    for (let x of iterator()) {
       console.log(x);
       }
//a
//b
//c
//d
//e
```

对比上述两种方法，我们能够发现生成器避免了混乱。我知道上述例子不够完美，但起码证明了：

-   在生成器中不需要执行 `next()`
-   在生成器中不需要`[Symbol.iterator]()`调用
-   在一些情况下，如果使用迭代器我们甚至需要设置`object.done`属性来返回true/false。

#### Async-Await ~ Promises+生成器

你可以阅读[我之前写的文章](https://medium.com/@ashaymurceilago/async-await-javascript-5038668ec6eb)了解async/await， 也可以阅读[这篇文章](https://medium.com/javascript-in-plain-english/truly-understanding-promises-in-javascript-cb31ee487860)了解Promise。

简言之，Async/Await是promise和生成器的结合。

Async-Await

```js
async function asyncAwait(){
    let a = await(task1);
    console.log(a);
    let b = await(task2);
    console.log(b);
    let c = await(task3);
    console.log(c);
}
```

Promises+Generators

```js
function * generatorPromise(){
    let a = yield Promise1();
    console.log(a);
    let b = yield Promise2();
    console.log(b);
    let c = yield Promise3();
    console.log(c);
}
```

正如我们估计的那样，两者的输出结果一致。这正是因为async/await的机制就是基于生成器和promise的结合。async/await本身包含更多的内容，但是上面的例子我们只展现其中一小部分。

#### 无限数据结构

标题可能有点让人困惑，但是我们确实可以通过while循环来创建一个无限生成值的生成器：

![ximCs8aJ4EUtQfo8AAPza6eRK9IAUd70QLCN](https://cdn-media-1.freecodecamp.org/images/ximCs8aJ4EUtQfo8AAPza6eRK9IAUd70QLCN)

```js
function * randomize() { 
     while (true) {
        let random = Math.floor(Math.random()*1000);
            yield random;  
            }
        }
    var random= randomize();
    while(true)
    console.log(random.next().value)
```

在上述代码中，我们创建了一个无限生成器。每次调用`next()`方法都会生成一个随机数。这个生成器可以生成无限的随机数，这就是一个非常基础的例子。

### 总结

关于生成器的内容非常多，我们在这篇文章中只介绍了基础。希望你喜欢这篇文章并从中学习到新的知识。

关注我，鼓掌！

![dagqbne49wWylj3wlhZWGKij2pXISMlkKyn6](https://cdn-media-1.freecodecamp.org/images/dagqbne49wWylj3wlhZWGKij2pXISMlkKyn6)
