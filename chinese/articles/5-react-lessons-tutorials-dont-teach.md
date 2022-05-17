> -  原文地址：[5 Key React Lessons the Tutorials Don't Teach You](https://www.freecodecamp.org/news/5-react-lessons-tutorials-dont-teach/)
> -  原文作者：[Reed BargerReed Barger](https://www.freecodecamp.org/news/author/reed/)
> -  译者：Humilitas
> -  校对者：

![5 Key React Lessons the Tutorials Don't Teach You](https://www.freecodecamp.org/news/content/images/size/w2000/2021/04/5-key-lessons-react-tutorials-dont-teach.png)

有些概念和知识是每个 React 开发者都需要知道的，然而大多数教程都没有涉及到。

我为你们挑选了几个我认为最重要的、很少文章会详细介绍的主题。

一起来看一下这五个关键的 React 知识点，你在别处可能看不到这些内容。

> 想要成为高薪 React 开发者吗？请查看 [**React Bootcamp**](https://reactbootcamp.com)。

## 1\. React state 是如何更新的

作为 React 开发者，你知道可以通过 `useState` 和 `useReducer` 钩子来创建和更新 state。

当你使用这两个钩子更新组件 state 时到底发生了什么呢？state 是立即更新还是在一段时间之后才会更新呢？

一起来看下面的代码，它是一个简单的计数器应用。正如你所想，点击其中的按钮，计数器就会加 1。

```js
import React from 'react';

export default function App() {
  const [count, setCount] = React.useState(0)

  function addOne() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1> {/* 1 (as we expect) */}

      <button onClick={addOne}>+ 1</button>
    </div>
  );
}
```

如果再加一行代码，它同样尝试让计数器加 1——会发生什么？

点击按钮的时候，计数会增加 1 还是增加 2 呢？

```js
import React from 'react';

export default function App() {
  const [count, setCount] = React.useState(0)

  function addOne() {
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1> {/* 1?! */}

      <button onClick={addOne}>+ 1</button>
    </div>
  );
}
```

运行这个代码会发现，它只增加了 1！尽管执行了两次 state 更新操作。

_尽管明确执行了两次加 1 的操作，为什么计数器显示为 1？_

原因在于我们第一次执行更新操作的时候 React 只是计划了一次 state 更新。因为它只是做计划而不是立即执行（它是异步的），所以我们第二次尝试更新时 `count` 变量还是原来的值（两次 `setCount()` 中 `count` 的值是相同的）。

换句话说，由于 state 更新是计划性的而不是立即执行的，第二次调用 `setCount` 时，`count` 还是 `0`，而不是 `1`。

尽管 state 更新是异步的，我们可以在 `useState` 的 setter 函数中使用内部函数来更可靠地更新 state。

这个内部函数允许我们获取前一个 state 的值，使用这种方式，我们可以看到计数器如我们期望的那样增加了 2：

```js
import React from 'react';

export default function App() {
  const [count, setCount] = React.useState(0)

  function addOne() {
    setCount(prevCount => prevCount + 1); // 1
    setCount(prevCount => prevCount + 1); // 2
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+ 1</button>
    </div>
  );
}
```

## 2\. 最好使用多个 effect 而不是使用单个

在执行副作用（side effect）时，很多 React 开发者会试图在单次 `useEffect` 调用中执行多个副作用。

那看起来像什么样呢？可以看到，下面的代码在一个 useEffect 钩子里同时获取了帖子和评论，并分别更新了对应的 state 变量：

```js
import React from "react";

export default function App() {
  const [posts, setPosts] = React.useState([]);
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    // 获取帖子数据
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));

    // 获取评论数据
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      <PostsList posts={posts} />
      <CommentsList comments={comments} />
    </div>
  );
}
```

与其把所有副作用都挤在一个 effect 钩子里，不如通过多次调用把它们放在独立的钩子里。

这种做法允许我们把不同的操作分离到不同的 effect 中，更好地做到关注点分离。

比起类组件中的生命周期函数，React hooks 的一个主要优势就是更好的关注点分离。

类组件中每个生命周期函数只能调用一次，所以无法将副作用分离到多个函数里。例如，只能把组件挂载后要执行的所有操作都包含在一个 `componentDidMount` 函数里。

React hooks 的主要优势就是能够让我们根据功能来组织代码。我们不仅能够将组件渲染之后要执行的操作分离到多个 effect，还可以移动 state 相关代码的位置。

```js
import React from "react";

export default function App() {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const [comments, setComments] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      <PostsList posts={posts} />
      <CommentsList comments={comments} />
    </div>
  );
}
```

这意味着我们可以把 state 钩子和相关的 effect 钩子放在一起，使得代码结构清晰、功能一目了然。

## 3\. 不要优化更新 state 的函数（useState, useReducer）

从父组件向子组件传递一个回调函数时有一个常见问题要处理，即避免它被重新创建，除非它的参数发生了变化。

我们可以借助于 `useCallback` 钩子来完成这个优化。

useCallback 钩子是专门为传递给子组件的回调函数设计的，可以避免不必要地重新创建这些函数，重新创建这些函数的过程会在每次重渲染时引起性能问题。

因为每次父组件重渲染时，会引起它所有子组件也重新渲染，这就导致了回调函数在每次重渲染时都被重新创建。

然而，如果我们使用 setter 函数来更新由 useState 或 useReducer 钩子创建的 state，则不需要用到 useCallback。

换句话说，下面这种做法是不必要的：

```js
import React from "react";

export default function App() {
  const [text, setText] = React.useState("")

  // 不要使用 useCallback 包裹 setText（因为 setText 是不会变化的）
  const handleSetText = React.useCallback((event) => {
    setText(event.target.value);
  }, [])

  return (
    <form>
      <Input text={text} handleSetText={handleSetText} />
      <button type="submit">Submit</button>
    </form>
  );
}

function Input({ text, handleSetText }) {
  return(
    <input type="text" value={text} onChange={handleSetText}  />
  )
}
```

React 文档中说明了其原因：

> React 保证了 setState 函数标识是稳定的，并且不会在重渲染时改变，因此在 useEffect 和 useCallback 的依赖列表中忽略它是安全的。

所以说，不仅不需要用 useCallBack 优化它们，也不需要在 useEffect 的依赖列表中包含它们，因为它们是稳定不变的。

这一点很重要，因为在许多情况下，它能精简代码。最重要的是，这种优化是徒劳的，因为它自身就有可能导致性能问题。

## 4\. useRef 钩子能够在重渲染过程中保存 state

作为 React 开发者，利用 ref 来获取指定 React 元素的引用有时是非常有用的。我们使用 `useRef` 钩子来创建 ref。

记住，`useRef` 的用处并不仅限于引用某个 DOM 元素。React 文档中说明了这一点：

> useRef 创建的 ref 对象是一个带有 current 属性的通用容器，current 属性可以保存任意类型的值，并且它的值是可变的。

使用 `useRef` 保存和更新一些数据是有一定好处的，它可以不通过内存来保存数据，使得这些数据在重渲染时不会被清除掉。

如果我们想利用普通的变量在重渲染过程中追踪数据变化是不可行的，因为每次组件渲染时它都会被重新初始化。然而，如果使用 ref 的话，其中的数据能在每次组件渲染时保持不变。

_useRef 的这种用法的使用场景是什么？_

如果只想在初始渲染时执行某些副作用，它就派上用场了：

```js
import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef({ hasRendered: false });

  React.useEffect(() => {
    if (!ref.current.hasRendered) {
      ref.current.hasRendered = true;
      console.log("perform action only once!");
    }
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}
```

你可以自己尝试运行一下这段代码。

如你所见，不管点击按钮多少次、state 如何更新、重新渲染多少次，我们想要执行的操作（`console.log`）只会执行一次。

## 5\. 如何防止 React 应用崩溃

React 开发者需要知道的最重要的一点——尤其是在还没把应用发布出去的时候——就是如何处理未捕获的错误。

下面的例子中，我们尝试在应用中展示一个 Header 组件，同时执行了一个将会抛出错误的操作，即试图从 null 值中读取属性：

```js
import React from "react";

export default function App() {
  return (
    <>
      <Header />
    </>
  );
}

function Header() {
  const user = null;

  return <h1>Hello {user.name}</h1>; // error!
}
```

如果我们把这些代码推送到生产中，就会看到如下空白内容：

![](https://www.freecodecamp.org/news/content/images/2021/04/5-key-lessons-1.png)

_为什么我们什么也看不到？_

我们依然能够在 React 文档中找到答案：

> 在 React 16 中，未被任何错误边界捕获的错误将会导致整个 React 组件树的卸载。

在开发过程中，你会看到一大片红色的包含栈追踪信息的错误消息，告诉你哪里产生了错误。然而，当线上应用出错时，你只会看到一片空白。

这并不是你期望的行为。

有一个办法可以修复这个问题，即应用意外崩溃时向用户展示一些内容，告诉他们应用出错了。可以把组件树包含在一个错误边界中。

错误边界是一种能够捕获错误并展示后备内容的组件，后备内容中可以展示消除错误的步骤（如刷新页面）。

可以借助于 `react-error-boundary` 包来使用错误边界。可以将那些易于出错的组件包含在错误边界中，也可以把整个组件树都包含在错误边界中：

```js
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Header />
    </ErrorBoundary>
  );
}

function Header() {
  const user = null;

  return <h1>Hello {user.name}</h1>;
}

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Oops, there was an error:</p>
      <p style={{ color: "red" }}>{error.message}</p>
    </div>
  );
}
```

可以以任意形式来展示这些错误信息，就像编写普通组件那样。

现在，发生错误时展现的结果好多了：

![](https://www.freecodecamp.org/news/content/images/2021/04/5-key-lessons-2.png)

## 喜欢这篇文章吗？欢迎加入 React Bootcamp

**[The React Bootcamp](http://bit.ly/join-react-bootcamp)** 打包了学习 React 所需的所有资料，包括视频、速查表，还有特别奖励。

获取帮助过许多人掌握 React、找到理想工作、掌控未来的内部资料：

[![The React Bootcamp](https://reedbarger.nyc3.digitaloceanspaces.com/react-bootcamp-banner.png)](http://bit.ly/join-react-bootcamp)  
_单击此处以在其开放时收到通知_