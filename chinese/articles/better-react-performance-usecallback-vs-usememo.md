> - 原文地址：[Better React Performance – When to Use the useCallback vs useMemo Hook](https://www.freecodecamp.org/news/better-react-performance-usecallback-vs-usememo/)
> - 原文作者：[Daniel Asta](https://www.freecodecamp.org/news/author/daniel-asta/)
> - 译者：Papaya HUANG
> - 校对者：

![Better React Performance – When to Use the useCallback vs useMemo Hook](https://www.freecodecamp.org/news/content/images/size/w2000/2022/12/useCallback-vs-useMemo.png)

我们都希望构建强大的应用，避免不必要的渲染。有一些钩子可以帮助你实现这个愿望，但你可能不确定钩子的选择和使用时机。

我们将通过本文学习 `useCallback` 和 `useMemo`的区别，以及如何衡量在代码中使用它们的收益。

在我们开始之前，请注意以下用于优化 React 的方法实际上是不得已的选择。代码本身可能有许多改进空间，在改进代码前，本文性能提升技巧可能还派不上用场。

但了解这些工具，以及知道如何使用它们很有必要。

## 帮助你理解文章的资料

- [useCallback](https://beta.reactjs.org/apis/react/useCallback) 和 [useMemo](https://beta.reactjs.org/apis/react/useMemo)的 Beta 版本官方文档
- [示例项目源码](https://github.com/dastasoft/optimizing-react)
- [示例项目 Demo](https://react-optimisation.dastasoft.com/)

与往常一样，我提供了一个示例项目，以便你在简化的环境中测试本文说明的所有内容。示例项目是对你将要学习要点的总结。

在开始比较这两个钩子之前，让我们回顾一些必要的背景概念。

## 什么是引用相等（Referential Equality）?

当 React 对比 `useEffect`、 `useCallback`的依赖数组的值，或者传入子组件的 props 值时，使用的是 [`Object.is()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is)。

详细介绍可以查看 [Object.is](http://Object.is)，简言之：

- 原始值是相等的(上文链接有少数例外）。
- 非原始值指向内存中相同的对象。

> 译者注：原始值指的是数据类型为基本数据类型（如：number、string、boolean 等）时，两个值相等的数据在严格模式下（`===`）也是相等的。非原始值值的数据类型是引用类型（如：object），由于引用类型存储的是对象的引用，所以只有当两个对象引用相同的底层对象，它们在严格模式下才是相等的。这种比较方式被称为“引用相等”。

简化示例如下：

```js
"string" === "string" // true
0 === 0 // true
true === true // true
{} === {} // false
[] === [] // false

const f = () => 'Hi'
const f1 = f
const f2 = f

f1 === f1 // true
f1 === f2 // true
```

## React.memo 的运行机制

我将简单说明一下`React.memo`的运行机制 (后文也会讲解)。你可以在合适的时候使用它来提升性能。

当想要避免子组件不必要的重新渲染（即便父组件发生了更改），你可以使用`React.memo`打包子组件 – 只要 props 不发生改变，就不会重复渲染。**请注意此处 是引用相等**（译者注：沿用了旧版本 React 的[“浅比较”](https://reactjs.org/docs/shallow-compare.html)） – 子组件不会被重新渲染。

```javascript
import { memo } from 'react';

const ChildComponent = (props) => {
  // ...
};

export default memo(ChildComponent);
```

现在你知道 `React.memo` 的运行机制，让我们开始应用吧。

## useCallback 的运行机制

`useCallback` 是 React 用来优化代码的内置钩子之一。但正如你将看到的那样，它并不是直接为性能提升设计的钩子。

简单来说， `useCallback` 允许你在组件渲染之间保存 _函数定义_ 。

```js
import { useCallback } from 'react';

const params = useCallback(() => {
  // ...
  return breed;
}, [breed]);
```

使用方法很简单：

- 从 React 引入`useCallback`，因为它是内置钩子
- 打包你想要保存定义的函数
- 像使用 `useEffect`一样，传入依赖数组，告诉 React 这些存储的值（在这里是函数定义）何时更新。

需要注意的是 _函数定义_ 部分。它存储定义，而不是执行本身，也不是结果——所以每次调用时都会执行该函数。因此，不要使用这个钩子避免冗长的计算。

那么保存函数定义的好处在哪儿呢？

### 回到引用相等

如果使用的是函数本身，而不是返回值，那么在：

- `useEffect` 等钩子的依赖数组
- 子组件的 prop、上下文等

要实现渲染之间真正的相等， `useCallback`就得保存 **内存中对同一个对象的的引用**。

如果不使用这个钩子，每一次渲染函数都会重新指向内存中的另一个引用。即便使用`React.memo`打包子组件，React 也会认为是不同的函数。

你可以通过示例项目测试这个行为。在没有优化的版本中，每一次在输入框填写内容都会引发子组件的副作用。

在示例中，没有优化的版本只会导致一个虚拟的渲染放缓和重新抓取图片。但假设在一个大型的项目中，会导致客户端执行大量计算，或者服务器的巨大开销。

![use-callback-referential-equality](https://www.freecodecamp.org/news/content/images/2022/12/use-callback-referential-equality.png)

## `useMemo`是如何运作的

这是今天第二个内置钩子。你可以把这个挂钩当作直接优化的手段，因为它存储函数的结果，除非依赖数组发生变化，函数不会再次执行。

由于它可以存储函数的结果，防止在组件渲染之间重复执行，因此你可以在两种情况下使用此挂钩。

### 引用相等

和 `useCallback` 一样，我们也可以通过`useMemo`来实现引用相等 – 但这次是结果的相等。

如果函数的返回值类型在渲染间会被当作不同的值对待，如对象或者数组，你可以使用 `useMemo` 来实现引用相等。

```js
import { useMemo } from 'react';

const params = useMemo(() => {
  // ...
  return { breed };
}, [breed]);
```

从上面例子我们可以得出这样使用 `useMemo`:

- 由 React 引入 `useMemo`，因为它是内置钩子。
- 打包你想要保存结果的函数。
- 像使用 `useEffect` 一样，传入依赖数组，告诉 React 这些存储的值（在这里是函数的返回值）何时更新。

在示例中，函数返回一个对象。 通过[Object.is](http://Object.is) 我们得知对象是不相等的，因为它们存储了不同的内存地址。但是`useMemo`可以保存相同的引用。

你可以像之前一样在示例项目中测试这个行为。在未优化版本中，每一次按下键盘，都会重新检索图片。 使用 `useMemo`后，相等的返回值被保持，子组件不在重新检索图片。

![use-memo-referential-equality](https://www.freecodecamp.org/news/content/images/2022/12/use-memo-referential-equality.png)

### 昂贵的计算

由于使用 `useMemo`保存了值，避免函数重复执行，所以我们可以使用它避免不必要的昂贵计算，提高网站的性能。

让我们查看示例项目：

![use-memo-expensive-calculation](https://www.freecodecamp.org/news/content/images/2022/12/use-memo-expensive-calculation.png)

有一个组件，给定一个数字 n，就会打印出第 n 个斐波那契数。但是算法采用的递归版本性能很差。

你会发现有一个常量不断被重复渲染。示例中的性能标尺（Performance Gauge）会改变 state (每秒添加或者删除方块 60 次)。由于 state 一直发生改变，所以计算斐波那契数的函数也在重复执行，即便给定的数字是一样的。

在这种情况下，当你在非优化版本中使用更大的数字，就会发现性能肉眼可见的下降。优化版本只会在你更改滑块中的数字（更改给定数字）时出现性能峰值，但其余渲染将跳过计算并直接提供结果。

这里的问题是，在我们的日常工作中，不会遇到可以称为“昂贵计算”的计算，使用 `useMemo` 的决定不一定是“总是”或“从不”。

## 何时优化

到目前为止，你已经了解了通过一些指标确定何时使用不同的钩子来避免不必要的渲染和/或副作用。现在让我们定义一些通用规则来决定在那些不太清楚的情况下到底是否使用这些钩子：

- 回顾你的代码，重新思考代码构建。你会发现最能提升性能的其实是你代码本身。更多信息可以查看[Dan Abramov 的这篇博文](https://overreacted.io/before-you-memo/)。
- 如果不能证明优化可以带来好处，就不要优化 – 优化也有成本。
- 如果你不希望做额外的工作来证明优化可以带来好处，那请诚实对待自己的内心：其实你也不想优化。

## 如何衡量性能影响/收益

最重要的优化规则（总是在检查代码之后再使用）是能够衡量更改是否生效以及增益百分比是多少。你这样做不仅是为了可以在下一次绩效评估提高相应的百分比。

当你怀疑存在性能问题或只是想检查代码可以改进部分时，有以下两种选择：

### 笨拙的方法

我把这个方法也纳入到文章中来，是因为让我们面对现实吧：你一直在到处使用 `console.log` 调试代码，不是吗？别担心，我和你一样。

![crappy-debugger-meme](https://www.freecodecamp.org/news/content/images/2022/12/crappy-debugger-meme.png)

尝试衡量性能问题的一种快速方法是找出执行某个动作需要多长时间以及该动作执行了多少次。因此，可以这么做：

```js
const t0 = performance.now();
expensiveCalculation(targetNumber);
const t1 = performance.now();
console.log(`Call to expensiveCalculation took ${t1 - t0} milliseconds.`);
console.count('Expensive Calculation');
```

但这种方法只能检测出一些你已经怀疑的非常明显的情况。

同时请小心 `StrictMode`，出于稳定性考虑，它可能会导致 `console.count` 重复渲染。

现在让我们查看正确的方法。

### 专业的方法

在这个方法中，你将使用官方的[React 开发者工具](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)来检查代码片段的性能。一旦你在浏览器添加了这个扩展程序，你就可以打开浏览器，搜索`Profiler`。

![profiler](https://www.freecodecamp.org/news/content/images/2022/12/profiler.png)

我将通过示例项目演示，你也可以在你自己的项目中测试。

当你点击`record`按钮，然后开始进行你认为需要关注性能的一些行为，profiler 就会保存并且打印出这个过程具体发生的细节和解释。

如在昂贵计算项目中，我们对比的没有优化和`useMemo`版本的结果：

![profiler-graph](https://www.freecodecamp.org/news/content/images/2022/12/profiler-graph.png)

![profiler-graph-detailed](https://www.freecodecamp.org/news/content/images/2022/12/profiler-graph-detailed.png)

在两个版本中，我分别点击 record 按钮，等待几秒钟，再次点击 record 按钮获取结果。如你所见，在我们准备的极端案例中，可以见到巨大的性能提升。

让我们仔细观察 profiler 中发生了什么：

- 灰色条目是在渲染间没有发生变化的组件，所以不用担心性能方面的问题。
- 绿色和黄色条目是发生变化的组件，你可以看到渲染需要多长时间。
- 如果你点击每一个条目，可以看到更多的解释信息和数据。

我之后会出一篇文章详细介绍 profiler，但是现在让我们看几个使用小技巧：

- 在 settings 图标 General 菜单下，勾选 `Highlight updates when components render.` 。这将显示渲染的内容，并可以检测在某些操作下不被渲染的子组件。
- 在 settings 图标 Profiler 菜单下，勾选 `Record why each component rendered while profiling.` 这将对正在渲染的组件内容的添加简要说明，或许能帮助你找到哪里需要提升。

## 总结

如你所见，这两个常被误解的钩子是完全不同的函数，使用的场景也不太相同。现在你可以检查你现在或者过去的项目，来看看是否误用了这些钩子。

在未来 React 或许能够自动完成又坏。但在撰写本文时，优化仍是一个应该谨慎对待并经过全面分析的过程。

我希望你觉得本教程有用，本文能帮助你使用 React 构建性能更好的应用程序。谢谢阅读！
