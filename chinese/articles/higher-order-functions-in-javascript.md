> -  原文地址：[Higher Order Functions in JavaScript – Beginner's Guide](https://www.freecodecamp.org/news/higher-order-functions-in-javascript/)
> -  原文作者：[Soham De Roy](https://www.freecodecamp.org/news/author/sohamderoy/)
> -  译者：Papaya HUANG
> -  校对者：

![Higher Order Functions in JavaScript – Beginner's Guide](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/Blog-8---Freecodecamp-Banner.png)

在JavaScript中函数是一等公民。函数可以作为值赋值给另一个变量，或者作为参数传入另一个函数，甚至从另一个函数返回。

这就赋予了JavaScript高阶函数的能力。

基本上如果一个函数可以将另外一个函数作为参数，或者返回另一个函数，则被称为高阶函数。

![Group-35](https://www.freecodecamp.org/news/content/images/2022/06/Group-35.png)

让我们深入了解两种高阶函数的实现：

-   将函数作为参数传入另一个函数
-   从函数中返回另一个函数

![63eec0636ec9b999bf8c5ee5340dd54a_w200](https://www.freecodecamp.org/news/content/images/2022/06/63eec0636ec9b999bf8c5ee5340dd54a_w200.gif)

## 如何将函数作为参数传入函数

在这个部分，我们将了解如何将函数作为参数，以及如何写出更加整洁的代码。

考虑下面的代码，我们想要创建一个函数，将数组作为参数。该函数过滤出所有的奇数并返回。

函数如下：

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function filterOdd(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
console.log(filterOdd(arr));

// 输出:
// [ 1, 3, 5, 7, 9, 11 ]
```

正如我们所期待的那样，上面的函数返回了由所有奇数组成的数组： `[ 1, 3, 5, 7, 9, 11 ]`。

现在假设我们想要创建一个过滤出所有偶数的函数，我们也可以创建一个函数来实现：

```javascript
function filterEven(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
console.log(filterEven(arr));

// 输出:
// [ 2, 4, 6, 8, 10 ]
```

同样的，我们也得到了我们期望的数组： `[ 2, 4, 6, 8, 10 ]`。

但需要注意的是，我们做了很多重复的工作。两个函数都接受一个普通数组作为参数、创建一个新数组来存储过滤后的数组、遍历了整个主数组以及最终返回过滤后的数组。

两个函数唯一的区别是判断如何过滤的逻辑。

在函数 `filterOdd`中使用的逻辑是 `arr[i] % 2 !== 0`，而在函数 `filterEven` 中使用的逻辑是 `arr[i] % 2 == 0`。

这时候高阶函数就可以派上用场了。使用高阶函数的主要目的是创建一个函数来处理所有相同的部分，然后将逻辑部分作为参数传入函数。我们一起来看看如何实现。

让我们来创建一个函数处理 `filterOdd`和`filterEven`相同的部分，如下：

```javascript
function filterFunction(arr, callback) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]) ? filteredArr.push(arr[i]) : null;
  }
  return filteredArr;
}
```

现在可以忽略掉 `callback`参数。 注意我们是如何在`filterFunction`中保持相同的部分：接受原数组作为参数、创建一个新的数组来保存过滤后的数组、遍历整个主数组以及最终返回和`filterOdd`和`filterEven`一样的结果。

`callback`参数将接受一个函数，这个函数包含过滤的逻辑。过滤奇数和偶数的逻辑分别如下：

```javascript
// 包含过滤奇数逻辑的函数

function isOdd(x) {
  return x % 2 != 0;
}

// 包含过滤偶数逻辑的函数

function isEven(x) {
  return x % 2 === 0;
}
```

这样就可以了，我们只需要向 `filterFunction`传入主数组和逻辑函数：

```javascript
// 过滤奇数

filterFunction(arr, isOdd)
// console.log(filterFunction(arr, isOdd))的输出:
// [ 1, 3, 5, 7, 9, 11 ]

// 过滤偶数

filterFunction(arr, isEven)
// console.log(filterFunction(arr, isEven))的输出:
// [ 2, 4, 6, 8, 10 ]
```

这时我们将逻辑函数 `isOdd` 或 `isEven` 作为参数传入另一个函数 `filterFunction`。

我们相当于将逻辑函数从主函数抽离出来，现在我们可以传入任意的过滤逻辑，并且不需要对 `filterFunction`做任何修改。

例如，如果我们想要过滤出所有大于5的数字，我们可以这样编写逻辑函数：

```javascript
function isGreaterThanFive(x) {
  return x > 5;
}
```

并作为参数传入 `filterFunction`:

```javascript
filterFunction(arr, isGreaterThanFive)

// console.log(filterFunction(arr, isGreaterThanFive))的输出:
// [ 6, 7, 8, 9, 10, 11 ]
```

我们也可以将逻辑函数修改为箭头函数，得到同样的结果 – 即用 `(x) => x > 5)`替代`isGreaterThanFive`。

```javascript
filterFunction(arr, (x) => x > 5)

// console.log(filterFunction(arr, (x) => x > 5))的输出:
// [ 6, 7, 8, 9, 10, 11 ]
```

### 如何创建[Polyfill](https://developer.mozilla.org/zh-CN/docs/Glossary/Polyfill)

我们知道JavaScript内置了一些高阶函数，如： `map()`、`filter()`、`reduce()`等， 我们可以自定义这些函数吗？让我们深入研究一下。

在上一个部分，我们创建了过滤函数。让我们为 `filterFunction`函数创建一个数组原型，这样我们就可以在任意数组使用这个函数，这个原型如下：

```javascript
Array.prototype.filterFunction = function (callback) {
  const filteredArr = [];
  for (let i = 0; i < this.length; i++) {
    callback(this[i]) ? filteredArr.push(this[i]) : null;
  }
  return filteredArr;
};
```

在上面的代码中， `this` 值的是调用原型的数组，所以如果我们编写这样的代码：

```javascript
const arr = [1, 2, 3, 4, 5]
arr.filterFunction(callbackFn)
```

那么 `this`就指代数组 `arr`。

现在我们就可以像使用JS内置的`filter()`函数一样使用`filterFunction`。 我们可以编写这样的代码：

```javascript
arr.filterFunction(isEven)
```

和直接调用 `filter()`函数类似：

```javascript
arr.filter(isEven)
```

上面两个函数调用 (即 `arr.filterFunction(isEven)`和`arr.filter(isEven)`) 会得到相同的输出， 如 `[ 2, 4, 6, 8, 10 ]`。

类似的，我们也可以向传入内置函数 `filter()`一样传入箭头函数。

```javascript
// I
arr.filterFunction((x) => x % 2 != 0)
arr.filter((x) => x % 2 != 0)
//两者都会打印出: [ 1, 3, 5, 7, 9, 11 ]

// II
arr.filterFunction((x) => x > 5)
arr.filter((x) => x > 5)
// 两者都会打印出: [ 6, 7, 8, 9, 10, 11 ]

```

这样，我们就给内置`filter()`函数写了一个polyfill。

### 函数链

我们也可以在`filter()`和我们自定义的原型方法中采取链式调用。让我们先筛选出所有大于5的数字，然后从结果中筛选出所有的偶数。代码如下：

```javascript
//使用我们自定义的filterFunction()
arr.filterFunction((x) => x > 5).filterFunction((x) => x % 2 === 0)

//使用内置的filter()
arr.filter((x) => x > 5).filter((x) => x % 2 === 0)

// 两者都会打印出: [ 6, 8, 10 ]
```

这就是我们如何在JS 中使用高阶函数来编写模式模块、以及编写更简洁、更易于维护的代码。

接下来，让我们看看如何从函数返回另一个函数

![lets-move-on-proceed](https://www.freecodecamp.org/news/content/images/2022/06/lets-move-on-proceed.gif)

## 如何在JavaScript中从函数返回另一个函数

我们可以从函数中返回函数，是因为函数被当作了值，请看以下例子

```javascript
function calculate(operation) {
  switch (operation) {
    case "ADD":
      return function (a, b) {
        console.log(`${a} + ${b} = ${a + b}`);
      };
    case "SUBTRACT":
      return function (a, b) {
        console.log(`${a} - ${b} = ${a - b}`);
      };
  }
}
```

在上述代码中，当我们传入参数触发`calculate` 时， 函数通过switch条件评估参数，最终返回一个匿名函数。 所以如果我们调用 `calculate()`并将结果存储到一个变量，并在控制台打印变量，会得到以下结果：

```javascript
const calculateAdd = calculate("ADD");
console.log(calculateAdd);

// 输出: 
// [Function (anonymous)]
```

你会发现 `calculateAdd`包含一个由 `calculate()`返回的匿名函数。

有两种方式来调用这个内部函数。

### 用变量调用返回函数

在这种方法中，如上面的示例这样，我们将返回的函数存储到变量中，然后通过调用这个变量来调用内部的函数。

请看代码：

```javascript
const calculateAdd = calculate("ADD");
calculateAdd(2, 3);
// 输出: 2 + 3 = 5


const calculateSubtract = calculate("SUBTRACT");
calculateSubtract(2, 3);
// 输出: 2 - 3 = -1
```

我们做了什么？

-   我们调用了 `calculate()` 函数，并传入`ADD`作为参数
-   我们将匿名函数存储在变量 `calculateAdd` 中
-   我们通过传入规定的参数调用 `calculateAdd()`从而调用了变量内部的函数

### 通过双括号来调用返回函数

这是一个较为复杂的调用内部函数的方法。在这个方法中我们使用双括号：`()()`。

请看代码：

```javascript
calculate("ADD")(2, 3);
// 输出: 2 + 3 = 5

calculate("SUBTRACT")(2, 3);
// 输出: 2 - 3 = -1
```

你可以用上面的函数链例子来类比这里的双括号。区别在于上面链接的是函数，而这里我们链接的参数。

第一个括号内部的参数隶属于外部函数，而第二个括号内部的参数隶属于内部函数。

`calculate()`如前文所述会返回一个函数， 第二个括号立马调用了这个被返回的函数。

我说过这是一个较为复杂的调用函数的方式，不过一旦适应了，你会觉得这一切都非常自然。

你可以在`redux`状态管理库的`connect`方法中遇到这样的双括号标记。 想要了解更多 `connect`相关的信息，可以[阅读这篇文章](https://react-redux.js.org/api/connect)。

## 总结

在这篇文章中，我们学习了：

-   在JS中为什么函数是一等公民
-   什么是高阶函数
-   如何将函数作为参数传入另一个函数
-   如何创建一个数组原型、函数链、以及为内置方法`filter()`编写自定义polyfill
-   如何在函数中返回函数，以及两种调用返回函数的方法

## 收尾

感谢阅读！希望这篇关于高阶函数的文章对你有帮助。想要阅读到更多精彩的文章，请保持关注。再见！🖖

## 社交账号

-   [LinkedIn](https://www.linkedin.com/feed/)
-   [个人网站](https://www.sohamderoy.dev/)
-   [个人博客](https://blog.sohamderoy.dev/)

![e2bd7ce3fc5f2783f1e210b015cc5fb1](https://www.freecodecamp.org/news/content/images/2022/06/e2bd7ce3fc5f2783f1e210b015cc5fb1.gif)
