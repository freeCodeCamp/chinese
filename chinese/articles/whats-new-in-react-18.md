> -  原文地址：[What's New in React 18? Concurrency, Batching, the Transition API and More](https://www.freecodecamp.org/news/whats-new-in-react-18/)
> -  原文作者：[Akash Joshi](https://www.freecodecamp.org/news/author/akash/)
> -  译者：luojiyin
> -  校对者：

![React 18 有什么新特性？? 并发、批处理、过渡API等](https://www.freecodecamp.org/news/content/images/size/w2000/2021/07/SUSPENSE-BATCHING-TRANSITION.png)

大家好！在这篇文章中，我将在8分钟内向你展示React的最新版本--React 18。在这篇文章中，我将在8分钟内向你展示React的最新版本--React 18的新内容。

首先，你可能想知道最新的变化是否会破坏你目前的代码，或者你是否必须学习完全不相关的新概念。

好吧，不用担心--你可以继续你现在的工作，或者继续学习你目前的React课程，因为React 18不会破坏任何东西。

如果你想看一个视频来补充你的阅读，请在这里查看。

对于那些真正想了解发生了什么的人，这里有详细的介绍。

## 什么是React的并发性？

这个版本的主要主题是**并发**。首先，让我们看看什么是并发性。

并发是指同时执行多个任务的能力。以一个标准的React应用为例，让我们考虑在一个组件中播放一个动画，同时用户能够在其他React组件中点击或输入。

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f5a65bda-b76b-466f-abe3-3d8fbb232655/firefox_PJSGkv5qWX.png](https://www.freecodecamp.org/news/content/images/2021/07/firefox_juLm49pOIQ.png)

当用户在打字和点击按钮的时候，在React的上下文中，一个动画也在那里渲染。

React必须管理所有的函数调用、Hook调用和事件回调，其中几个甚至可能同时发生。如果React把所有时间都花在渲染动画帧上，用户就会觉得应用程序被 "卡住 "了，因为它不会对他们的输入做出反应。

现在，在单线程进程上运行的React必须对这些事件和功能进行组合、重新排序和优先处理，以便给用户一个最佳的、高性能的体验。

为了做到这一点，React在内部使用了一个 "调度器"，负责对这些回调进行优先排序和调用。

在React 18之前，用户没有办法控制这些函数的调用顺序。但现在，React通过Transition API将这个事件循环的一些控制权交给了用户。

你可以在Dan Abramov的这篇文章中读到更多关于这方面的内容。: [An ELI5 of concurrency](https://github.com/reactwg/react-18/discussions/46#discussioncomment-846786).

## 过渡API

React的开发者已经公开了一些API，允许React用户对并发性进行一些控制。

其中一个API是 `startTransition`，它允许开发者向React指出哪些动作可能会阻塞线程并导致屏幕上的滞后。

通常情况下，这些动作是你以前可能使用过的去抖(debounce)，比如通过搜索API的网络调用，或者像搜索1000个字符串的数组这样的重渲染过程。

被`startTransition`装饰器(wrapped)的更新被标记为非紧急的，如果有更紧急的更新，如点击或按键，则会被打断。

如果一个过渡被用户打断（例如，在搜索字段中输入多个字母），React会扔掉未完成的陈旧的渲染工作，只渲染最新的更新。

### 过渡API例子

为了更详细地理解这一点，让我们考虑一个带有搜索字段的组件。假设它有两个函数来控制状态:

```jsx
// Update input value
setInputValue(input)

// Update the searched value and search results
setSearchQuery(input);
```

`setInputValue`负责响应更新输入字段，而`setSearchQuery`负责根据当前输入值进行搜索。现在，如果这些函数调用在用户每次开始输入时都同步发生，就会发生2种情况:

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

过渡让你保持大多数互动的流畅性，即使它们引起了重大的UI变化。它们还可以让你避免浪费时间来渲染不再相关的内容。

React还提供了一个新的Hook，叫做`useTransition`，所以你可以在过渡期内显示一个加载器。这有助于向用户表明，应用程序正在处理他们的输入，并将很快显示结果。

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

作为一条经验法则，只要有网络调用或渲染阻塞进程存在，你就可以使用过渡API。

你可以在这篇文章中阅读更多关于API的信息, [对startTransition的解释](https://github.com/reactwg/react-18/discussions/41)，由React核心团队的Ricky负责维护。

### 过渡API的演示

在应用程序中使用 "useTransition "和Suspense: [https://codesandbox.io/s/sad-banach-tcnim?file=/src/App.js:664-676](https://codesandbox.io/s/sad-banach-tcnim?file=/src/App.js:664-676)

复杂渲染算法下的 "startTransition "演示: [https://react-fractals-git-react-18-swizec.vercel.app/](https://react-fractals-git-react-18-swizec.vercel.app/)

## Batching in React

Next up is batching. Batching is something that the developer generally doesn't have to care about, but it's good to know what's happening behind the scenes.

Whenever you are using setState to change a variable inside any function, instead of making a render at each setState, React instead collects all setStates and then executes them together. This is known as batching.

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

This is great for performance because it avoids unnecessary re-renders. It also prevents your component from rendering “half-finished” states where only one state variable was updated, which may cause UI glitches and bugs within your code.

However, React didn't used to be consistent about when it performed batching. This was because React used to only batch updates _during_ browser events (like a click), but here we’re updating the state _after_ the event has already been handled (in a fetch callback):

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

Starting in React 18 with `[createRoot](<https://github.com/reactwg/react-18/discussions/5>)`, all state updates will be automatically batched, no matter where they originate from.

This means that updates inside of timeouts, promises, native event handlers or any other event will batch the same way as updates inside of React events. This will result in less rendering work by React, and therefore better performance in applications.

You can read more about batching here in [An explanation of Batching](https://github.com/reactwg/react-18/discussions/21) by Dan Abramov.

### Demos of batching

Before React 18: [https://codesandbox.io/s/hopeful-fire-ge4t2?file=/src/App.tsx](https://codesandbox.io/s/hopeful-fire-ge4t2?file=/src/App.tsx)

After React 18: [https://codesandbox.io/s/morning-sun-lgz88?file=/src/index.js](https://codesandbox.io/s/morning-sun-lgz88?file=/src/index.js)

## The Suspense API

React 18 includes a lot of changes to improve React performance in a [Server-Side Rendered](/news/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e/) context. Server-side rendering is a way of rendering the JS data to HTML on the server to save computation on the frontend. This results in a faster initial page load in most cases.

React performs Server Side Rendering in 4 sequential steps:

-   On the server, data is fetched for each component.
-   On the server, the entire app is rendered to HTML and sent to the client.
-   On the client, the JavaScript code for the entire app is fetched.
-   On the client, the JavaScript connects React to the server-generated HTML, which is known as Hydration.

React 18 introduces the `Suspense` API, which allows you to break down your app into **smaller independent units**, which will go through these steps independently and won’t block the rest of the app. As a result, your app’s users will see the content sooner and be able to start interacting with it much faster.

### How does the Suspense API work?

#### Streaming HTML

With today’s SSR, rendering HTML and hydration are “all or nothing”. The client has to fetch and hydrate all of the app at once.

But React 18 gives you a new possibility. You can wrap a part of the page with `<Suspense>`.

```jsx
<Suspense fallback={<Spinner />}>
  {children}
</Suspense>
```

By wrapping the component in `<Suspense>`, we tell React that it doesn’t need to wait for comments to start streaming the HTML for the rest of the page. Instead, React will send the placeholder (a spinner) instead.

When the data for the comments is ready on the server, React will send additional HTML into the same stream, as well as a minimal inline `<script>` tag to put that HTML in the “right place”.

#### Selective Hydration

Before React 18, hydration couldn't start if the complete JavaScript code for the app hadn't loaded in. For larger apps, this process can take a while.

But in React 18, `<Suspense>` lets you hydrate the app before the child components have loaded in.

By wrapping components in `<Suspense>`, you can tell React that they shouldn’t block the rest of the page from streaming—and even hydration. This means that you no longer have to wait for all the code to load in order to start hydrating. React can hydrate parts as they’re being loaded.

These 2 features of `Suspense` and several other changes introduced in React 18 speed up initial page loads tremendously.

You can read more in this article [An explanation of Suspense SSR](https://github.com/reactwg/react-18/discussions/37) and related changes by Dan Abramov

### Demo of Suspense

[https://codesandbox.io/s/recursing-mclaren-1ireo?file=/src/index.js:458-466](https://codesandbox.io/s/recursing-mclaren-1ireo?file=/src/index.js:458-466)

## Summary

So to summarize, the features that React 18 brings are:

-   Concurrency control with the Transition API,
-   Automatic Batching of function calls and events to improve in-app performance, and
-   Much faster page loads for SSR with Suspense.

Although not a very large departure from the previous version of React, all of these changes are making React a trend-setter for all the frameworks out there.

Thanks for reading this! You can check out my previous posts and tutorials on React here on freeCodeCamp. You can also follow me on Twitter [@thewritingdev](https://twitter.com/thewritingdev), where I post daily content on React and web development.