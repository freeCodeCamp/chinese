> -  原文地址：[How the JavaScript reduce and reduceRight Methods Work](https://www.freecodecamp.org/news/how-reduce-reduceright-works-javascript/)
> -  原文作者：[Ashutosh Biswas](https://www.freecodecamp.org/news/author/ashutosh-biswas/)
> -  译者：Papaya HUANG
> -  校对者：

![How the JavaScript reduce and reduceRight Methods Work](https://www.freecodecamp.org/news/content/images/size/w2000/2022/05/reduce-cover-with-title-3.jpg)

`reduce`和`reduceRight`是JavaScript内置的两个数组方法，这两个方法的学习曲线略微陡峭。

其实这两个方法的本质就像下面的算术题一样简单。

假设我们有一个数字数组：

```js
[1, 2, 3, 4]
```

我们需要对这个数组求和。

使用`reduce`求和的方法类似于：

((((1) + 2) + 3) + 4)

而使用`reduceRight`求和的方法类似于：

((((4) + 3) + 2) + 1)

使用`reduce`和`reduceRight`时，你可以定义你自己的“+”。数组中的元素也可以替换成任意值。挺激动人心的，不是吗？

不用把`reduce`和`reduceRight`看得太复杂，其实它们就相当于上面算术题的概括。在这篇文章我们会讲解这两个方法的重要信息。

本文将列举易于理解的算法例子来演示JavaScript中的归约（reduction）。

就这个话题我还制作了视频，如果你喜欢通过视频学习新知识的话，可以点击观看。

## 目录

-   1[归约是什么](#what-is-reduced-to-what)
-   2[`reduce`/`reduceRight`的参数](#parameters-of-reduce-reduceright)
-   3[通过图表理解`reduce`/`reduceRight`](#understanding-reduce-reduceright-with-diagram)
-   4[`reduce`/`reduceRight`的演算规则](#the-algorithm-of-reduce-reduceright)
-   5[练习](#excercises)
    -   5.1[扁平化嵌套数组](#flat-nested-array)
    -   5.2[数组去重](#remove-duplicate-items-from-an-array)
    -   5.3[在不改变原数组的情况下反转数组](#reverse-an-array-without-mutating-it)
-   6[总结](#conclusion)

## 1 归约是什么？[§](#what-is-reduced-to-what)

你可能会好奇：“当我们使用`reduce`和`reduceRight`的时候，我们使用了那种[归约](https://zh.wikipedia.org/wiki/%E6%AD%B8%E7%B4%84)？”

这里归约指的是一种把数组里的元素转化（后文会有更详细的介绍）成单一值的特定方法，就如同上面的算术题一样。

但需要注意的是，输出值可以为任意值。也就是说当在数组上使用归约之后，输出值可能比原始值要大。

在 _函数式编程_ 语言中， 归约有 [各种个样的别名](https://en.wikipedia.org/wiki/Fold_(higher-order_function)) 如： **折叠（fold）**、**积累（accumulate）**、 **聚集（aggregate）**、**压缩（compress）** 甚至 **注入（inject）**。

## 2 `reduce`/`reduceRight`的参数 [§](#parameters-of-reduce-reduceright)

这两个方法的调用规则相同，可以放在一起学。让我们看看它们是怎么被调用的：

```js
let myArray      = [/* 一个数组 */];
let callbackfn   = /* 一个函数值 */ ;
let initialvalue = /* 任意值 */ ;

myArray.reduce(callbackfn)
myArray.reduce(callbackfn, initialValue)

myArray.reduceRight(callbackfn)
myArray.reduceRight(callbackfn, initialValue)
```

`reduce`/`reduceRight` 的参数有：

**`callbackfn`**: 必须是一个函数。 `reduce`/`reduceRight`在遍历数组的时候，会在每一个元素上调用 `callbackfn`。这函数有四个参数，我们假设变量 `previousValue`、`currentElement`、 `index`和`array`为这四个参数。 所以`callbackfn`的内部调用情况如下：

```js
callbackfn(previousValue, currentElement, index, array)
```

让我们看看这四个值的含义：

1.  `previousValue`: 也被称作 _累加器（accumulator）_。简单讲就是这个值代表了方法返回值的“当前状态”。这个值是由什么组成的，等你学完后面的演算规则就会完全明白。
2.  `currentElement`: 当下的元素。
3.  `index`: 当下元素的索引。
4.  `array`: 一开始声明的`myArray`.

**返回值**: 当最后一次调用`callbackfn`时，返回值就会成为`reduce`/`reduceRight`的返回值。 其他情况下， 返回值会赋值给 `previousValue`以便下次调用`callbackfn`。

 **`initialValue`（初始值）**: 这是 `previousValue` (累加器)的一个可选值。 如果存在，且 `myArray`中包含元素， 首次调用 `callbackfn`时会将它视为 `previousValue`传入。

**注意**:`callbackfn`通常被称为 **reducer函数**(或简写为**reducer**)。

## 3 通过图表理解`reduce`/`reduceRight`[§](#understanding-reduce-reduceright-with-diagram)

`reduce`和`reduceRight`的唯一区别是遍历的顺序。`reduce`从左到右遍历，`reduceRight`从右到左遍历。

让我们看看如何使用 `reduce`/`reduceRight`将数组元素连接成字符串。注意是怎么一步一步分别从两个方向连接元素实现最终输出值的。

![reduce-diagram1-1](https://www.freecodecamp.org/news/content/images/2022/05/reduce-diagram1-1.png)

展示reduce和reduceRight区别的图表

注意：

-   `acc`用来访问`previousValue`。
-   `curVal` 用来访问 `currentElement`。
-   指向 _**`r`**_ 的圆圈输入代表`curVal`。
-   指向 _**`r`**_ 的长方形输入代表`acc`或者累加器。
-   长方形中是初始值，因为它们作为`acc`传入`**_r_**`。

## 4 `reduce`/`reduceRight`的演算规则 [§](#the-algorithm-of-reduce-reduceright)

下面的29行算法代码乍一看可能让人生畏。但你会发现理解他们比理解上述解释性的句子要容易得多。

所以放轻松，享受这些步骤，别忘了可以在控制台实践这些步骤：

-   1
    
    If `initialValue`存在
    -   2
        
        If `myArray`没有元素
        -   3
            
            Return `initialValue`
    -   4
        
        Else
        -   5
            
            将`initialValue`赋值给`accumulator`
        -   6
            
            If  方法是`reduce`,
            -   7
                
                `startIndex`即为`myArray`最左端元素的索引
        -   8
            
            If 方法是`reduceRight`,
            -   9
                
                `startIndex`即为 `myArray`最右端元素的索引
-   10
    
    Else
    -   11
        
        If `myArray`没有元素
        -   12
            
            抛出`TypeError`
    -   13
        
        Else if `myArray`只有一个元素
        -   14
            
            Return 这个元素
    -   15
        
        Else
        -   16
            
            If 方法是 `reduce`,
            -   17
                
                `accumulator`即为`myArray`最左端的元素
            -   18
                
                `startIndex`即为`myArray`最左端元素后一位元素的索引
        -   19
            
            If  方法是`reduceRight`,
            -   20
                
                `accumulator`即为`myArray`最右端的元素
            -   21
                
                `startIndex`即为`myArray`最右端元素后一位元素的索引
-   22
    
     
-   23
    
    If 方法是`reduce`,
    -   24
        
        从左到右遍历`myArray`， 每一个元素的索引 `i` ≥ `startIndex`
        -   25
            
            将 `accumulator`带入 `callbackfn(accumulator, myArray[i], i, myArray)`求值
-   26
    
    If 方法是 `reduceRight`,
    -   27
        
        从右到左遍历`myArray`， 每一个元素的索引 `i` ≤ `startIndex`
        -   28
            
            将 `accumulator`带入`callbackfn(accumulator, myArray[i], i, myArray)`求值
-   29
    
    Return `accumulator`
    

**注意**: 数组的长度大于 `0`但是没有元素。数组的这些空的部分通常被称作*空位（hole）*。举个例子：

```js
let arr = [,,,,];
console.log(arr.length);
// 4

// 注意尾部的逗号不会增加数组长度；
// 这个特征可以帮助我们更快添加新元素
```

reduce和reduceRight仅对 `myArray`中真实存在的元素调用`callbackfn`。 例如，你的数组是 `[1,,3,,5]`回调函数不会考虑没有元素的索引`1`和`3`。猜一猜下面的代码会打印什么内容：

```js
[,,,3,,,4].reduce((_, cv, i) => {
  console.log(i);
});
```

如果你的答案是`6`，你是对的！

⚠️ **注意**: 不建议使用`callbackfn`来修改 `myArray`，因为这样会复杂化代码，容易产生bug。

如果你到目前为止都理解的话，那么恭喜你已经了解 `reduce`/`reduceRight`的运作了。

现在就是用 `reduce`/`reduceRight`解决问题最好的时候。 在看答案之前，最好花点时间自己做一下或者尝试思考一下。

## 5 练习 [§](#excercises)

### 5.1 扁平化嵌套数组 [§](#flat-nested-array)

编写一个`flatten`函数，扁平化嵌套数组：

```js
let arr = [1, [2, [3], [[4], 5], 6]];
console.log(flatten(arr));
// [1, 2, 3, 4, 5, 6]
```

**答案**

const flatten = (arr) => 
  arr.reduce((acc, curVal) =>
    acc.concat(Array.isArray(curVal) ? flatten(curVal) : curVal), \[\]);

### 5.2 数组去重 [§](#remove-duplicate-items-from-an-array)

编写函数 `rmDuplicates`删除下列数组中重复的元素：

```js
console.log(rmDuplicates([1, 2, 2, 3, 4, 4, 4]));
// [1, 2, 3, 4]
```

**答案**

const rmDuplicates = arr => 
  arr.reduce((p, c) => p.includes(c) ? p : p.concat(c), \[\]);

### 5.3 在不改变原数组的情况下反转数组 [§](#reverse-an-array-without-mutating-it)

虽然数组有内置方法`reverse`来反转数组，但会改变原数组。使用`reduceRight`在不改变数组的情况下，实现反转：

**答案**

let arr = \[1, 2, 3\];

let reversedArr = arr.reduceRight((acc, curVal) => \[...acc, curVal\], \[\]);

console.log(arr);
// \[1, 2, 3\]

console.log(reversedArr);
// \[3, 2, 1\]

注意这样改变数组会丢失数组中所有的空位。

## 6 总结 [§](#conclusion)

在 `reduce`/`reduceRight` 内部调用 `callbackfn`时，我们将这种行为称作“常规行为”，其他行为就是边界案例。 可以概括如下表：

| 初始值 | 元素数量 | 输出 |
| --- | --- | --- |
| 存在 | 0 | **边界案例**: 初始值|
| 存在 | 大于 0 | **常规行为** |
| 不存在 | 0 | **边界案例**: TypeError |
| 不存在 | 1 | **边界案例**: 该元素 |
| 不存在 | 大于 1 | **常规行为** |

学习 `reduce`/`reduceRight`会比其他高阶数组方法更花时间，但值得花时间学习。

感谢阅读，希望这篇文章对你有帮助！你可以访问我的[网站](https://www.ashutoshbiswas.dev/)或者在 [Twitter](https://twitter.com/ashutoshbw)和[LinkedIn](https://www.linkedin.com/in/ashutosh-biswas/)关注我！

归约愉快！😃
