> -  原文地址：[JavaScript String Comparison – How to Compare Strings in JS](https://www.freecodecamp.org/news/javascript-string-comparison-how-to-compare-strings-in-js/)
> -  原文作者：[Dillion Megida](https://www.freecodecamp.org/news/author/dillionmegida/)
> -  译者：Gradonlee
> -  校对者：

![JavaScript String Comparison – How to Compare Strings in JS](https://www.freecodecamp.org/news/content/images/size/w2000/2022/07/string-comparison.png)

你可能想通过比较两个字符串从而知道在字母排列顺序上谁高谁低，或者仅仅想知道他们是否相等。

你可以用很多方式来解决这个问题，我将在本文中向你展示两种方法。

## 1. 如何使用 localeCompare 来比较字符串

你可以使用 `localeCompare` 的方法来比较当前环境（locale）下的两个字符串，以下是他们的语法：

```js
string1.localeCompare(string2)
```

`localeCompare` 返回：

-   1 如果 `string1` 比 `string2` 大
-   -1 如果 `string1` 比 `string2` 小
-   0 如果 `string1` 和 `string2` 在字母顺序上相等

下面是一些比较两个字符串的例子：

```js
const string1 = "hello"
const string2 = "world"

const compareValue = string1.localeCompare(string2)
// -1
```

它返回了 `-1` 是因为在英语环境中， hello 中的 **h** 排在 world 中的 **w** 之前（ w 在字母顺序中比 h 更靠后）

另一个例子：

```js
const string1 = "banana"
const string2 = "back"

const compareValue = string1.localeCompare(string2)
// 1
```

上面的比较给出了 `1`，因为在英语环境中，banana 的 ba**n** 在 back 的 ba**c** 之后。

再来一个例子：

```js
const string1 = "fcc"
const string2 = "fcc"
const string3 = "Fcc"

const compareValue1 = string1.localeCompare(string2)
// 0

const compareValue2 = string1.localeCompare(string3)
// -1
```

比较 "fcc" 和 "fcc" 可以得到 `0`，因为它们在顺序上是相等的。 "fcc" 和 "Fcc" 的结果是 `-1`，因为大写 "F" 大于小写 "f"。

在某些浏览器中，它可能会返回 **-2/** 或其他一些负值，而不是 **-1/**。因此，不要依赖 **-1** 或 **1**，而是依赖负值（小于 0）或正值（大于 0）。

## 2. 如何使用数学运算符来比较字符串

在比较字符串时，你也可以使用数学运算符如大于（**>**），小于（**<**）以及等于。

数学运算符的工作原理与 `localeCompare` 类似——根据字符串中字符的顺序返回结果。

使用之前的例子：

```js
const string1 = "hello"
const string2 = "world"

console.log(string1 > string2)
// false
```

`string1` 不大于 `string2`，因为 **h** 在 **w** 之前，所以是小于。

对于另一个例子而言：

```js
const string1 = "banana"
const string2 = "back"

console.log(string1 > string2)
// true
```

`string1` 比 `string2` 大，因为 ba**n** 在 ba**c**k 之后。

而对于最后一个例子：

```js
const string1 = "fcc"
const string2 = "fcc"
const string3 = "Fcc"

console.log(string1 === string2)
// true

console.log(string1 < string3)
// false
```

`string1` 等于（`===`）`string2`，但是 `string1` 不小于 `string3` ，这与`localeCompare`相反。

用数学运算符，"fcc "大于 "Fcc"，但是用 `localeCompare`，`"fcc".localeCompare("Fcc")"` 返回 `-1`，表明 "fcc" 小于 "Fcc"。

这种处理是我不建议使用数学运算符来比较字符串的原因之一，尽管它有做到这一点的潜力。

我不推荐使用数学运算符的另一个原因是，`"fcc" > "fcc"` 和 `"fcc" < "fcc"` 是 `false`,但 "fcc" 等于 "fcc"。所以如果你依赖于数学运算符，得到 `false` 的原因可能与你相信的不同。

所以，对于比较字符串，在可能存在的许多方法中，使用 `localCompare` 是一个有效的方法，因为它可以用于不同的语言。

现在你知道了一个简单的比较字符串的方法。编码愉快：）
