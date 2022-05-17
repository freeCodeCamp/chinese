> - 原文地址：[Let’s talk about semicolons in JavaScript](https://www.freecodecamp.org/news/lets-talk-about-semicolons-in-javascript-f1fe08ab4e53/)
> - 原文作者：[Flavio Copes](https://www.freecodecamp.org/news/author/flavio/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Let’s talk about semicolons in JavaScript](https://cdn-media-1.freecodecamp.org/images/1*xAFAiAxqZVrOVLBTo9tf6w.jpeg)

#### To use them, or not to use them……

JavaScript 中的分号（即 ;），在社区中存在分歧。有些人喜欢总是使用分号，不管在什么情况下。其他人则喜欢避免使用。

我在 Twitter 上做了一个投票来测试，我发现有很多分号的支持者:

在使用分号多年后，2017 年秋天，我决定尝试在可能的情况下避免使用分号。我设置了 [Prettier](https://flaviocopes.com/prettier/)，以自动从我的代码中删除分号，除非有特定的代码结构需要它们。

现在我发现避免分号是很自然的，而且我认为代码看起来更好，读起来也更干净。

这一切之所以可能，是因为 JavaScript 并不严格要求分号。当有地方需要分号时，它会在背后悄悄地添加分号。

这被称为 **自动分号插入（Automatic Semicolon Insertion）**。

了解分号的语法规则是很重要的。这将使你在写代码时避免产生不符合你的期望的行为，发生错误。

### The rules of JavaScript Automatic Semicolon Insertion

在解析源代码的过程中，当发现这些特殊情况时，JavaScript 解析器会自动添加一个分号:

1. 当下一行是别的代码开始，打断了当前的代码（代码可以在多行上）。
2. 当下一行以 `}` 开头，闭合当前块时。
3. 当到达源代码文件的结尾时。
4. 当有一个 `return` 语句在自己的行中出现时.
5. 当前行有一个 `break` 语句时
6. 当前行中有一个 `throw` 语句时
7. 当前行中有一个 `continue` 语句时

### Examples of code that does not do what you think

根据这些规则，这里有一些例子。

像这样:

```js
const hey = 'hey'
const you = 'hey'
const heyYou = hey + ' ' + you
['h', 'e', 'y'].forEach((letter) => console.log(letter))
```

你会得到一个错误 `Uncaught TypeError: Cannot read property 'forEach' of undefined`，因为根据规则 `1`，JavaScript 试图将代码解释为

```js
const hey = 'hey';
const you = 'hey';
const heyYou = hey + ' ' + you['h', 'e', 'y'].forEach((letter) => console.log(letter))
```

这段代码:

```js
(1 + 2).toString()
```

打印出 `3`.

```js
const a = 1
const b = 2
const c = a + b
(a + b).toString()
```

相反，它弹出了一个 `TypeError: b is not a function` 的异常，因为 JavaScript 试图把它解释为

```js
const a = 1
const b = 2
const c = a + b(a + b).toString()
```

基于规则 4 的另一个例子:

```js
(() => {
      return  
      {    
          color: 'white'  
      }
})()
```

你会期望这个立即调用的函数的返回值是一个包含 `color` 属性的对象，但它不是。相反，它是 `undefined`，因为 JavaScript 在 `return` 后面插入了一个分号。

相反，你应该在 `return` 后面加上括号:

```js
(() => {
      return {
        color: 'white'  
      }
})()
```

你会认为这段代码在警报中显示 `0`:

```js
1 + 1
-1 + 1 === 0 ? alert(0) : alert(2)
```

但它显示的是 2，因为 JavaScript（根据规则 1）将其解释为:

```js
1 + 1 -1 + 1 === 0 ? alert(0) : alert(2)
```

### 总结

小心——有些人对分号很有分歧。说实话，我并不关心。这个工具给了我们不使用它的选项，所以如果我们愿意，我们可以避免使用分号。

我没有建议任何一方或另一方的做法。只要根据对你有用的东西做出你自己的决定。

不管怎么说，我们只需要注意一下，即使大多数时候这些基本情况从未在你的代码中出现过。

选择一些规则:

- 对 `return` 语句要小心。如果你要返回什么，请在返回的同一行添加（对`break`、`throw`、`continue`也是如此）
- 不要用圆括号 (即 `(`  )开始一行，因为这些圆括号可能会与前一行串联起来，形成一个函数调用，或一个数组元素引用。

最后，一定要测试你的代码，确保它能达到你的要求。

> 我每天在 [flaviocopes.com](https://flaviocopes.com)上发布 1 个免费的编程教程，可以学习!

_原文发表于 [flaviocopes.com](https://flaviocopes.com/javascript-automatic-semicolon-insertion/)._
