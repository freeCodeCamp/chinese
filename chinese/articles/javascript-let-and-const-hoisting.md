> -  原文地址：[Hoisting in JavaScript with let and const – and How it Differs from var](https://www.freecodecamp.org/news/javascript-let-and-const-hoisting/)
> -  原文作者：[Dillion Megida](https://www.freecodecamp.org/news/author/dillionmegida/)
> -  译者：Humilitas
> -  校对者：

![Hoisting in JavaScript with let and const – and How it Differs from var](https://www.freecodecamp.org/news/content/images/size/w2000/2022/11/5.-let-const-hoisting.png)

我曾经以为只有 `var` 定义的变量会提升（hoisting）。但我最近又了解到，`let` 或者 `const` 定义的变量也会提升。

本文会详细解释这个问题。

感兴趣的话，可以查看[本文的视频版本](https://www.youtube.com/watch?v=VbHaL_J8Ex0) 。

## `var` 定义的变量是如何提升的

以下代码展示了 `var` 定义的变量的提升情况：

```js
console.log(number)
// undefined

var number = 10

console.log(number)
// 10

```

`number` 提升到了全局作用域的顶部，这使得它在变量声明代码之前的代码中也能够被访问，而不会报错。

不过需要注意的是，这里只有变量声明（`var number`）被提升了，变量的初始化（`= 10`）却没有被提升。所以在 `number` 声明之前访问它，得到的是 **var 定义的变量的默认初始值**，即 `undefined`。

变量声明和初始化的代码执行之后，访问 `number` 得到的就是它的初始值，即 **10**。

## let/const 定义的变量是如何提升的

对 `let` 或 `const` 定义的变量做同样的测试：

```js
console.log(number)

let number = 10
// 或 const number = 10

console.log(number)

```

发现会报错：**ReferenceError: Cannot access 'number' before initialization**。

由此可见，用 var 定义的变量可以在声明之前被访问而不报错，但是用 `let` 或 `const` 定义的变量却不行。

这正是令我以为只有 var 定义的变量才会提升的原因。

不过，如我所言，我最近发现 `let` 或者 `const` 定义的变量也会提升。接下来，我会解释这个情况。

看以下代码：

```js
console.log(number2)

let number = 10

```

我尝试在控制台打印名为 `number2` 的变量，接着又初始化了一个名为 `number` 的变量。

执行这段代码，结果报错了：**ReferenceError: number2 is not defined**。

注意到这个报错信息和之前的报错信息有何不同了吗？之前的报错信息是 **ReferenceError: Cannot access 'number' before initialization**，而这次则是 **ReferenceError: number2 is not defined**。

两者是有区别的，前一个是说“无法在初始化之前访问”，后一个是说“未定义”。

后一个报错意味着 JavaScript 完全不认识 `number2` 这个变量，因为找不到它的定义——事实上我们确实没定义它，我们只定义了 `number`。

但是前一个报错说的并不是“未定义”，而是“无法在初始化之前访问”。回顾以下代码：

```js
console.log(number)
// ReferenceError: Cannot access 'number' before initialization

let number = 10

console.log(number)

```

这意味着 JavaScript “认识” `number` 变量。怎么回事？这是因为 `number` 被提升到全局作用域的顶部了。

可是为什么又会报错呢？这就体现出 `var` 与 `let`/`const` 的提升行为之间的区别了。

由 `let` 或 `const` 定义的变量提升时**不会**默认初始化，所以在声明之前访问会报错：**ReferenceError: Cannot access 'variable' before initialization**。

然而由 `var` 定义的变量提升时**会**被初始化为默认值 `undefined`，所以在声明之前访问会得到 `undefined`。

## 暂时性死区

`let`/`const` 定义的变量被提升却无法正常访问，是因为存在**暂时性死区（Temporal Dead Zone）**。

再次回顾之前的代码：

```js
console.log(number)

let number = 10

console.log(number)

```

`number` 变量就处于暂时性死区中，JavaScript 知道它的存在（因为它的声明被提升了），却无法正常访问它（因为它没有被初始化）。

## 总结

如果你和我一样，以为只有 `var` 定义的变量会提升而 `let`/`const` 定义的变量则不然，希望本文能澄清这个错误的想法。

正如我在文中所说的，`let` 和 `const` 定义的变量是会提升的，只是它们提升的时候不会进行默认初始化，使得它们无法被访问（因为这些变量在暂时性死区里）。

另一方面，`var` 定义的变量在提升时会默认初始化为 `undefined`。

希望本文对你有所帮助 :)
