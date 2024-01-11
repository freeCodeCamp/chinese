> -  原文地址：[How to Generate a Random Number within Certain a Range in JavaScript](https://www.freecodecamp.org/news/generate-random-number-within-a-range-in-javascript/)
> -  原文作者：[Dillion Megida](https://www.freecodecamp.org/news/author/dillionmegida/)
> -  译者：Jiajun-Jiao
> -  校对者：

![How to Generate a Random Number within Certain a Range in JavaScript](https://www.freecodecamp.org/news/content/images/size/w2000/2022/12/9.-random-number.png)

如果想在 `10` 和 `15` 之间生成一个随机数，如何通过 JavaScript 实现呢？在这篇文章里，我将通过实例向您介绍。

JavaScript 中，`Math` 对象的 `random` 方法可以实现返回随机数，然而它有着取值范围的局限性。接下来，让我们看看如何对这个方法进行延伸。

我为这个文章创建了一个[视频版本]((https://www.youtube.com/watch?v=oUZVKzXVJaE))，您可以作为补充资料进行学习。

## 如何在 JavaScript 中使用`Math.random`

已知`random` 方法返回一个 `0` 和 `1` 之间的随机浮点数。

示例：

```js
Math.random()
// 0.26636355538480383

Math.random()
// 0.6272624945940997

Math.random()
// 0.05992852707853347
```

可以注意到，运行结果返回了 `0` 和 `1` 之间的随机数。现在我们尝试将此方法延伸到其他取值范围。

## 如何在 JavaScript 中获取给定范围中的随机数

接下来我们为此构建一个函数：

```js
function getRandom(min, max) {
  // code here
}
```

此函数接收 `min`（范围中的最小值）和 `max`（范围中的最大值）作为参数。基于此范围和 `Math.random` ，我们想实现获取随机数：

```js
function getRandom(min, max) {
  const floatRandom = Math.random()

  const difference = max - min

  // random between 0 and the difference
  const random = Math.round(difference * floatRandom)

  const randomWithinRange = random + min

  return randomWithinRange
}
```

以下是函数的基本逻辑：

-   首先，我们通过 `Math.random()` 获取一个随机浮点数。
-   接下来，我们求出最大值和最小值的差。
-   随后，我们可以获得`0`和大小差值之间的一个随机数。

为了获得上述随机数，我们只需将（从`Math.random`中）获取的随机数与大小差值相乘，随后对结果使用 `Math.round` 四舍五入取整即可。

例：
- `Math.random` 返回 **0.3** 并且大小差值为 **5**, 其乘积为 **1.5**. 使用 `Math.round` 将其四舍五入到 **2**（在 `0` 和大小差值 `5` 之间）。
- `Math.random` 返回 **0.9** 并且大小差值为 **8**, 其乘积为 **7.2**. 使用 `Math.round` 将其四舍五入到 **7**（在 `0` 和大小差值 `8` 之间）。

现在已经获得了 `0` 和大小差值之间的一个随机整数，我们可以将其与最小值相加。这样就得到了在最小值和最大值之间的随机整数。最后将此结果作为 `randomWithinRange` 函数的返回值。

接下来让我们看看此函数的应用实例：

```js
console.log(getRandom(10, 15))
// 14

console.log(getRandom(10, 15))
// 11

console.log(getRandom(10, 15))
// 12

console.log(getRandom(10, 15))
// 15
```

以上例子中，我们使用 **10** 作为 `min` ，**15** 作为 `max`. 通过这两个参数调用四次函数，可以注意到结果都是在所提供范围内的随机数。

让我们看看另一个应用实例：

```js
console.log(getRandom(180, 450))
// 215

console.log(getRandom(180, 450))
// 386

console.log(getRandom(180, 450))
// 333

console.log(getRandom(180, 450))
// 442
```

以上例子中，我们使用 **180** 作为 `min` ，**450** 作为 `max`. 同样的，结果也在预料之内。

## 总结

如果您需要在给定范围内生成随机数，我希望这篇文章能提供有用的思路。

在这篇文章里，我解释了 `Math.random` 的取值范围限制：它只能返回一个 `0` 和 `1` 之间的随机数。我接着向您展示了如何应用此数学函数自创一个可重复使用的函数，以生成任何您选择的范围内的随机数。

如果您觉得这篇文章有帮助，不妨分享给他人。