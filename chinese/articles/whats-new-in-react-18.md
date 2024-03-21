> -  原文地址：[What's New in React 18? Concurrency, Batching, the Transition API and More](https://www.freecodecamp.org/news/whats-new-in-react-18/)
> -  原文作者：[Akash Joshi](https://www.freecodecamp.org/news/author/akash/)
> -  译者：luojiyin
> -  校对者：

![React 18 有什么新特性？? 并发、批处理、过渡API等](https://www.freecodecamp.org/news/content/images/size/w2000/2021/07/SUSPENSE-BATCHING-TRANSITION.png)

大家好！在这篇文章中，我将在 8 分钟内向你展示 React 的最新版本--React 18。在这篇文章中，我将在 8 分钟内向你展示 React 的最新版本--React 18 的新内容。

首先，你可能想知道最新的变化是否会破坏你目前的代码，或者你是否必须学习完全不相关的新概念。

好吧，不用担心--你可以继续你现在的工作，或者继续学习你目前的 React 课程，因为 React 18 不会破坏任何东西。

如果你想看一个视频来补充你的阅读，请在这里查看。

对于那些真正想了解发生了什么的人，这里有详细的介绍。

## 什么是 React 的并发性？

这个版本的主要主题是**并发**。首先，让我们看看什么是并发性。

并发是指同时执行多个任务的能力。以一个标准的 React 应用为例，让我们考虑在一个组件中播放一个动画，同时用户能够在其他 React 组件中点击或输入。

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f5a65bda-b76b-466f-abe3-3d8fbb232655/firefox_PJSGkv5qWX.png](https://www.freecodecamp.org/news/content/images/2021/07/firefox_juLm49pOIQ.png)

当用户在打字和点击按钮的时候，在 React 的上下文中，一个动画也在那里渲染。

React 必须管理所有的函数调用、Hook 调用和事件回调，其中几个甚至可能同时发生。如果 React 把所有时间都花在渲染动画帧上，用户就会觉得应用程序被 "卡住 "了，因为它不会对他们的输入做出反应。

现在，在单线程进程上运行的 React 必须对这些事件和功能进行组合、重新排序和优先处理，以便给用户一个最佳的、高性能的体验。

为了做到这一点，React 在内部使用了一个 "调度器"，负责对这些回调进行优先排序和调用。

在 React 18 之前，用户没有办法控制这些函数的调用顺序。但现在，React 通过 Transition API 将这个事件循环的一些控制权交给了用户。

你可以在 Dan Abramov 的这篇文章中读到更多关于这方面的内容。: [An ELI5 of concurrency](https://github.com/reactwg/react-18/discussions/46#discussioncomment-846786).

## 过渡 API

React 的开发者已经公开了一些 API，允许 React 用户对并发性进行一些控制。

其中一个 API 是 `startTransition`，它允许开发者向 React 指出哪些动作可能会阻塞线程并导致屏幕上的滞后。

通常情况下，这些动作是你以前可能使用过的去抖(debounce)，比如通过搜索 API 的网络调用，或者像搜索 1000 个字符串的数组这样的重渲染过程。

被`startTransition`装饰器(wrapped)的更新被标记为非紧急的，如果有更紧急的更新，如点击或按键，则会被打断。

如果一个过渡被用户打断（例如，在搜索字段中输入多个字母），React 会扔掉未完成的陈旧的渲染工作，只渲染最新的更新。

### 过渡 API 例子

为了更详细地理解这一点，让我们考虑一个带有搜索字段的组件。假设它有两个函数来控制状态:

```jsx
// Update input value
setInputValue(input)

// Update the searched value and search results
setSearchQuery(input);
```

`setInputValue`负责响应更新输入字段，而`setSearchQuery`负责根据当前输入值进行搜索。现在，如果这些函数调用在用户每次开始输入时都同步发生，就会发生 2 种情况:

1.  几个搜索调用将被进行，这将延迟或减慢其他网络调用。
2.  或者，更有可能的是，搜索操作会变得非常繁重，并且会在每次按键时锁定屏幕。

解决这个问题的一个方法是使用去抖(debounce)，这将使网络调用或搜索操作的时间间隔缩短。但是，去抖的问题是，我们必须经常折腾和优化去抖的计时器。

所以在这种情况下，我们可以把 setSearchQuery 包(wrap)在 `startTransition` 中，让它作为非紧急事件处理，只要用户在打字，它就会被延迟。

```jsx
import { startTransition } from 'react';

// Urgent: Show what was typed
setInputValue(input);

// Mark any state updates inside as transitions
startTransition(() => {
  // Transition: Show the results
  setSearchQuery(input);
});
```

过渡让你保持大多数互动的流畅性，即使它们引起了重大的 UI 变化。它们还可以让你避免浪费时间来渲染不再相关的内容。

React 还提供了一个新的 Hook，叫做`useTransition`，所以你可以在过渡期内显示一个加载器。这有助于向用户表明，应用程序正在处理他们的输入，并将很快显示结果。

```jsx
import { useTransition } from'react';

const [isPending, startTransition] = useTransition();

const callback = () => {
  // Urgent: Show what was typed
  setInputValue(input);

  // Mark any state updates inside as transitions
  startTransition(() => {
    // Transition: Show the results
    setSearchQuery(input);
  });
}

{isPending && <Spinner />}
```

作为一条经验法则，只要有网络调用或渲染阻塞进程存在，你就可以使用过渡 API。

你可以在这篇文章中阅读更多关于 API 的信息, [对 startTransition 的解释](https://github.com/reactwg/react-18/discussions/41)，由 React 核心团队的 Ricky 负责维护。

### 过渡 API 的演示

在应用程序中使用 "useTransition "和 Suspense: [https://codesandbox.io/s/sad-banach-tcnim?file=/src/App.js:664-676](https://codesandbox.io/s/sad-banach-tcnim?file=/src/App.js:664-676)

复杂渲染算法下的 "startTransition "演示: [https://react-fractals-git-react-18-swizec.vercel.app/](https://react-fractals-git-react-18-swizec.vercel.app/)

## 在 React 中进行批处理

接下来是批处理。批处理是开发者一般不需要关心的事情，但知道幕后发生的事情是很好的。

每当你使用`setState`来改变任何函数中的变量时，React 不是在每个`setState`上进行渲染，而是收集所有的`setStates`，然后一起执行它们。这就是所谓的批处理。

```jsx
function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    setCount(c => c + 1); // Does not re-render yet
    setFlag(f => !f); // Does not re-render yet
    // React will only re-render once at the end (that's batching!)
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
    </div>
  );
}
```

这对性能来说是很好的，因为它避免了不必要的重新渲染。它还可以防止你的组件呈现 `半成品`状态，即只有一个状态变量被更新，这可能导致你的代码中出现 UI 故障和错误。

然而，React 过去在执行批处理的时间上并不一致。这是因为 React 过去只在浏览器事件中（如点击）进行批处理更新，但在这里，我们是在事件`处理后`（在一个获取回调中）更新状态。:

```jsx
function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    fetchSomething().then(() => {
      // React 17 and earlier does NOT batch these because
      // they run *after* the event in a callback, not *during* it
      setCount(c => c + 1); // Causes a re-render
      setFlag(f => !f); // Causes a re-render
    });
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
    </div>
  );
}
```

在 React 18 中开始使用 `[createRoot](<https://github.com/reactwg/react-18/discussions/5>)`, 所有的状态更新将被自动批处理，无论它们来自哪里。

这意味着在超时、promises、本地事件处理程序或任何其他事件中的更新将以与 React 事件中的更新相同的方式进行批处理。这将导致 React 的渲染工作减少，从而提高应用程序的性能。

你可以在 Dan Abramov 的 [批处理的解释](https://github.com/reactwg/react-18/discussions/21)，
阅读更多关于批处理的信息。
### 批处理演示

在 React 18 之前: [https://codesandbox.io/s/hopeful-fire-ge4t2?file=/src/App.tsx](https://codesandbox.io/s/hopeful-fire-ge4t2?file=/src/App.tsx)

在 React 18 之后: [https://codesandbox.io/s/morning-sun-lgz88?file=/src/index.js](https://codesandbox.io/s/morning-sun-lgz88?file=/src/index.js)

## The Suspense API

React 18 包含了很多变化，以改善 React 在服务端渲染(SSR)下的性能[Server-Side Rendered](/news/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e/)。 服务器端渲染是一种在服务器上将 JS 数据渲染成 HTML 的方式，以节省前端的计算。在大多数情况下，获得更快的初始页面加载。

React 以 4 个连续的步骤执行服务器端渲染。

-   在服务器上，为每个组件获取数据。
-   在服务器上，整个应用程序被渲染成 HTML 并发送给客户端。
-   在客户端，整个应用程序的 JavaScript 代码被提取出来
-   在客户端，JavaScript 将 React 连接到服务器生成的 HTML，这就是所谓的 Hydration。

React 18 引入了`Suspense`API，它允许你将你的应用程序分解成**小的独立单元**，这些单元将独立完成这些步骤，并且不会阻碍应用程序的其他部分。因此，你的应用程序的用户将更快地看到内容，并能更快地开始与它互动。

### Suspense API 是如何工作的

#### 流式 HTML

在今天的 SSR 中，渲染 HTML 和 hydration 是 "全有或全无"。客户端必须一次性地获取和 hydration 所有的应用程序。

但是 React 18 给了你一个新的可能性。你可以用`<Suspense>`来包装(wrap)页面的一部分。

```jsx
<Suspense fallback={<Spinner />}>
  {children}
</Suspense>
```

通过用`<Suspense>`包装(warp)组件，我们告诉 React，它不需要等待评论来开始为页面的其他部分传输 HTML。相反，React 将发送占位符（一个旋转器 spinner）。

当服务器上的评论数据准备好了，React 将发送额外的 HTML 到同一个流中，以及一个最小的内联`<script>`标签来把 HTML 放在 "正确的地方"。

#### 选择 Hydration

在 React 18 之前，如果应用程序的完整 JavaScript 代码没有加载进来，hydration 就无法启动。对于较大的应用程序，这个过程可能需要一段时间。

但在 React 18 中，`<Suspense>`可以让你在子组件加载之前就对应用进行 hydration。

通过用`<Suspense>`包装(warp)组件，你可以告诉 React，它们不应该阻止页面的其他部分，甚至是 hydration。这意味着你不再需要等待所有的代码加载，以便开始 hydration。React 可以在加载部分时进行 hydration。

这 2 个`Suspense`的功能和 React 18 中引入的其他几个变化极大地加快了初始页面的加载。

你可以在这篇文章中阅读更多内容  [Suspense SSR 的解释](https://github.com/reactwg/react-18/discussions/37) 和 Dan Abramov 做的相关修改。

### Suspense 的演示

[https://codesandbox.io/s/recursing-mclaren-1ireo?file=/src/index.js:458-466](https://codesandbox.io/s/recursing-mclaren-1ireo?file=/src/index.js:458-466)

## 总结

因此，总结起来，React 18 所带来的功能是:

-   用 Transition API 进行并发控制,
-   函数调用和事件的自动批处理，以提高应用内的性能，以及
-   用 Suspense 为 SSR 提供更快的页面加载。

虽然与上一版本的 React 没有很大的区别，但所有这些变化都使 React 成为所有框架的潮流引领者。

谢谢你阅读这篇文章! 你可以在 freeCodeCamp 这里查看我以前关于 React 的帖子和教程。你也可以在 Twitter 上关注我[@thewritingdev](https://twitter.com/thewritingdev),在那里我每天发布关于 React 和 Web 开发的内容。