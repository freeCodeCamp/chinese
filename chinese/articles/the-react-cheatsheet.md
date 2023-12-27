> - 原文地址：[The React Cheatsheet for 2022](https://www.freecodecamp.org/news/the-react-cheatsheet/)
> - 原文作者：[Reed Barger](https://www.freecodecamp.org/news/author/reed/)
> - 译者：luojiyin
> - 校对者：

![The React Cheatsheet for 2022](https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/mugshotbot.com_customize_theme-two_up-mode-light-color-pink-pattern-bubbles-image-9129875b-url-https___freecodecamp.org.png)

你想尽快掌握React吗？

我整理了一份超级有用的手册，让你在2022年对所有你需要知道的React概念有一个完整的概述。

让我们开始吧!

## 目录

- [React Elements](#react-elements)
- [React Element Attributes](#react-element-attributes)
- [React Element Styles](#react-element-styles)
- [React Fragments](#react-fragments)
- [React Components](#react-components)
- [React Props](#react-props)
- [React Children Props](#react-children-props)
- [React Conditionals](#react-conditionals)
- [React Lists](#react-lists)
- [React Context](#react-context)
- [React Hooks](#react-hooks)
- [React useState Hook](#react-usestate-hook)
- [React useEffect Hook](#react-useeffect-hook)
- [React useRef Hook](#react-useref)
- [React useContext Hook](#react-usecontext)
- [React useCallback Hook](#react-usecallback)
- [React useMemo Hook](#react-usememo)

## React Elements

React elements 的编写就像普通的HTML元素一样。你可以在React中编写任何有效的HTML elements。

```jsx
<h1>My Header</h1>
<p>My paragraph>
<button>My button</button>
```

我们使用一种叫做 _JSX_ 的功能来编写React elements。

然而，由于JSX实际上只是JavaScript函数（而不是HTML），其语法有点不同。

与HTML不同，单标签元素（如img元素），必须是自闭的。它们必须以正斜杠`/`结尾。

```jsx
<img src="my-image.png" />
<br />
<hr />
```

## React Element Attributes

此外，JSX要求其属性使用不同的语法。

因为JSX实际上是JavaScript，而JavaScript使用骆峰的命名惯例（即 "camelCase"），属性的写法与HTML不同。

最常见的例子是`class`属性，我们写成`className`。

```js
<div className="container"></div>
```

## React Element Styles

为了应用内联样式，我们不使用双引号（""），而使用两组大括号。

内联样式不是写成普通字符串，而是写成对象的属性:

```js
<h1 style={{ fontSize: 24, margin: '0 auto', textAlign: 'center' }}>My header</h1>
```

## React Fragments

RReact还为我们提供了一个叫做 _fragment_ 的元素。

React要求所有返回的元素都要在一个 "父（parent）"组件中返回。

例如，我们不能从一个组件中返回两个同级别的元素，比如一个h1和一个段落（paragraph）:

```ts
// this syntax is invalid
function MyComponent() {
  return (
    <h1>My header</h1>
    </p>My paragraph</p>
  );
} 
```

如果我们不想把我们的元素包裹在像div这样的容器元素中，我们可以使用一个片段:

```ts
// valid syntax
function MyComponent() {
  return (
    <>
      <h1>My header</h1>
      </p>My paragraph</p>
    </>
  );
} 
```

我们可以用常规或速记的语法来写片段: <React.Fragment></React.Fragment> 或者 <></>.

## React Components

我们可以将各组元素（elements）组织成React组件。

一个基本的函数组件的写法与普通的JavaScript函数类似，但有一些区别。

1. 组件名称必须以大写字母开头（即MyComponent，而不是myComponent）。
2. 组件，与JavaScript函数不同，必须返回JSX。

下面是一个React函数组件的基本语法:

```ts
function App() {
  return (
     <div>Hello world!</div>
  );
} 
```

## React Props

React组件可以接受传递给它们的数据，称为_props_。

Props从父组件传递给子组件。

在这里，我们从App向User组件传递一个道具`name`。

```ts
function App() {
  return <User name="John Doe" />
}

function User(props) {
  return <h1>Hello, {props.name}</h1>; // Hello, John Doe!
}
```

Props是一个对象，所以我们可以选择`User`中的`name` prop 来获得其值。

> 要在JSX中嵌入任何动态值（即一个变量或表达式），你必须用大括号把它包起来。

由于我们只使用props对象上的`name`属性，我们可以通过对象重构使我们的代码更加简单:

```ts
function App() {
  return <User name="John Doe" />
}

function User({ name }) {
  return <h1>Hello, {name}!</h1>; // Hello, John Doe!
}
```

任何JavaScript值都可以作为一个prop传递，包括其他元素和组件。

## React Children Props

props也可以通过在组件的开端（opening）和结束（closing）标记之间放置数据来传递。

props以这种方式传递被放置在 `子（children）`属性上。

```ts
function App() {
  return (
   <User>
     <h1>Hello, John Doe!</h1>
   </User>
  );
}

function User({ children }) {
  return children; // Hello, John Doe!
}
```

## React Conditionals

React组件和元素可以有条件地（conditionally）显示。

一种方法是用if语句创建一个单独的返回。

```ts
function App() {
 const isAuthUser = useAuth();

  if (isAuthUser) {
    // if our user is authenticated, let them use the app
    return <AuthApp />;
  }

  // if user is not authenticated, show a different screen
  return <UnAuthApp />;
}
```

然而，如果你想在返回语句中写条件，你必须判断值的条件。

要使用三元操作符，请将整个条件包在大括号内。

```ts
function App() {
 const isAuthUser = useAuth();

  return (
    <>
      <h1>My App</h1>
      {isAuthUser ? <AuthApp /> : <UnAuthApp />}
    </>
  ) 
}
```

## React Lists

React组件的列表可以使用`.map()`函数来输出。

`.map()`允许我们在数据的数组上循环并输出JSX。

这里我们使用SoccerPlayer组件输出一个足球运动员的列表。

```ts
function SoccerPlayers() {
  const players = ["Messi", "Ronaldo", "Laspada"];

  return (
    <div>
      {players.map((playerName) => (
        <SoccerPlayer key={playerName} name={playerName} />
      ))}
    </div>
  );
}
```

每当你在一个数据数组上循环时，你必须在你要循环的元素或组件上包含 _key_ prop。

此外，这个键（key）prop必须被赋予一个唯一的值，而不仅仅是一个元素索引（element index）。

在上面的例子中，我们使用了一个我们知道是唯一的值，也就是`playerName`。

## React Context

React context 允许我们在不使用props的情况下向我们的组件树传递数据。

使用props的问题是，有时我们会通过那些不需要接收props的组件来传递他们（中间层组件并不需要这些props，再下级组件需要这些props，只是做向下转发）。这个问题被称为 _props drilling_。

下面是一个最简单的例子，通过一个不需要props的`Body`组件传递prop:

```ts
function App() {
  return (
    <Body name="John Doe" />
  );
} 

function Body({ name }) {
  return (
    <Greeting name={name} />
  );
} 

function Greeting({ name }) {
  return <h1>Welcome, {name}</h1>;
}
```

> 在使用Context之前，最好先看看我们的组件是否可以更好地组织起来，以避免向不需要props的组件传递props。

为了使用Context，我们使用React的`createContext`函数。

我们可以用一个初始值来调用它，放在context上。

创建的context包括一个`Provider`和一个`Consumer`属性,它们都是组件。

我们将提供者（Provider）包裹在我们想要向下传值的组件树上。接下来，我们把消费者（Consumer）放在我们想要消费的组件中。

```js
import { createContext } from 'react';

const NameContext = createContext('');

function App() {
  return (
    <NameContext.Provider value="John Doe">
      <Body />
    <NameContext.Provider>
  );
} 

function Body() {
  return <Greeting />;
} 

function Greeting() {
  return (
    <NameContext.Consumer>
      {name => <h1>Welcome, {name}</h1>}
    </NameContext.Consumer>
  );
}
```

## React Hooks

React Hooks是在React 16.8版本中引入的，作为一种向React功能组件轻松添加可重用的、有状态的逻辑的方式。

Hook让我们使用所有以前只在类组件中可用的功能。

此外，我们还可以创建自己的自定义Hook，赋予我们的应用程序自定义功能。

许多React Hook也被添加到核心React库中。我们将介绍你绝对需要知道的6个基本钩子:

- useState
- useEffect
- useRef
- useContext
- useCallback
- useMemo

## React useState Hook

`useState`的作用正如它所说的--它允许我们在函数组件中使用有状态的值（stateful values）。

useState被用来代替一个简单的变量，因为当状态被更新时，我们的组件会重新渲染，通常是为了显示更新的值。

像所有的Hook一样，我们在组件的顶部调用`useState'，并可以传递一个初始值给它的状态变量（state variable）。

我们在`useState`返回的值上使用数组析构，以访问（1）存储的状态（stored state）和（2）更新该状态的函数。

```ts
import { useState } from 'react';

function MyComponent() {
  const [stateValue, setStateValue] = useState(initialValue);
}
```

一个使用`useState'的基本例子是让一个计数器自增。

我们可以从`count`变量中看到当前的计数，并可以通过向`setCount`函数传递`count + 1`来增加状态。

```ts
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);
  }

  return <button onClick={updateCount}>Count is: {count}</button>;
}
```

## React useEffect Hook

如果我们想与 "外部世界 "互动，例如使用API，我们使用`useEffect Hook`。

useEffect用于执行一个副作用（side effect），这意味着执行一个存在于我们的应用程序之外的操作，没有一个可预测的结果。

useEffect的基本语法需要一个函数作为第一个参数，一个数组作为第二个参数。

```ts
import { useEffect } from 'react';

function MyComponent() {
   useEffect(() => {
     // perform side effect here
   }, []);
}
```

如果我们想获取数据，我们会使用`useEffect`，例如在获取和显示帖子列表时:

```ts
import { useEffect } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);

   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then(posts => setPosts(posts));
   }, []);

   return posts.map(post => <Post key={post.id} post={post} />
}
```

如果我们需要使用一个来自 effect function之外的值，它必须被包含在依赖关系数组中。

如果该值发生变化，效果函数将被重新执行。

例如，这里有一段代码，每当移动菜单被打开或关闭时，都会在body元素上添加或删除 "overflow-hidden "类。

```ts
function Mobile({ open }) {
  useEffect(() => {
    const body = document.querySelector("#__next");

    if (open) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [open]);
 
  // ...
}
```

## React useRef

`useRef`允许我们直接访问一个JSX元素。

要使用`useRef`，调用它，得到返回的值，并把它放在给定React元素的`ref` prop上。

> Refs在组件上没有内置道具，只有React元素。

下面是`useRef`的基本语法:

```ts
import { useRef } from 'react';

function MyComponent() {
  const ref = useRef();

  return <div ref={ref} />
}
```

当ref被附加到一个给定的元素，我们可以使用存储在`ref.current`上的值来访问元素本身。

例如，如果我们想写一些代码，当用户使用组合键Control + K时，集中搜索输入。

```ts
import { useWindowEvent } from "@mantine/hooks";
import { useRef } from "react";

function Header() {
 const inputRef = useRef();

  useWindowEvent("keydown", (event) => {
    if (event.code === "KeyK" && event.ctrlKey) {
      event.preventDefault();
      inputRef.current.focus();
    }
  });
  
  return <input ref={inputRef} />
}
```

## React useContext

`useContext`提供了一种比使用标准的Context.Consumer组件更简单的消费上下文（consuming context）的方法。

其语法包括将我们想要消费的整个Context对象传入`useContext`。返回的值是传给Context的值。

```ts
import { useContext } from 'react';

function MyComponent() {
  const value = useContext(Context);

  // ...
}
```

重写我们前面的例子，使用`useContext` Hook:

```js
import { createContext, useContext } from 'react';

const NameContext = createContext('');

function App() {
  return (
    <NameContext.Provider value="John Doe">
      <Body />
    <NameContext.Provider>
  );
} 

function Body() {
  return <Greeting />;
} 

function Greeting() {
 const name = useContext(NameContext);

  return (
    <h1>Welcome, {name}</h1>
  );
}
```

## React useCallback

`useCallback`是一个hook，我们用它来帮助我们的应用程序的性能。

具体来说，它可以防止我们的组件重新渲染时都要重新创建函数，减少损害我们应用程序的性能的可能性。

如果我们回到前面的`PlayerList`的例子，并增加向我们的数组添加球员的能力，当我们通过props传递一个函数来删除他们（`handleRemovePlayer`）时，这个函数将每次都被重新创建。

解决这个问题的方法是将我们的回调函数包裹在`useCallback`中，并将其一个参数`player`纳入依赖数组:

```ts
function App() {
  const [player, setPlayer] = React.useState("");
  const [players, setPlayers] = React.useState(["Messi", "Ronaldo", "Laspada"]);

  function handleChangeInput(event) {
    setPlayer(event.target.value);
  }
  function handleAddPlayer() {
    setPlayers(players.concat(player));
  }
  const handleRemovePlayer = useCallback(player => {
    setPlayers(players.filter((p) => p !== player));
  }, [players])

  return (
    <>
      <input onChange={handleChangeInput} />
      <button onClick={handleAddPlayer}>Add Player</button>
      <PlayerList players={players} handleRemovePlayer={handleRemovePlayer} />
    </>
  );
}

function PlayerList({ players, handleRemovePlayer }) {
  return (
    <ul>
      {players.map((player) => (
        <li key={player} onClick={() => handleRemovePlayer(player)}>
          {player}
        </li>
      ))}
    </ul>
  );
}
```

## React useMemo

`useMemo`是另一个性能 hook，它允许我们 "记忆"一个特定的操作。

记忆使我们有可能记住已经进行的昂贵的计算结果，这样我们就不必再进行计算了。

像`useEffect`和`useCallback`一样，`useMemo`接受一个回调函数和一个依赖性数组。

然而，与这两个函数不同的是，`useMemo'的目的是返回一个值。

> 你必须用`return`关键字显式地返回数值，或者隐式地使用箭头函数速记（shorthand）（见下文）。

`useMemo`的一个来自mdx-bundler文档的真实例子。`mdx-bundler`是一个将.mdx文件转换为React组件的库。

这里它使用`useMemo`将一个原始的代码字符串转换为React组件。

```js
import * as React from 'react'
import {getMDXComponent} from 'mdx-bundler/client'

function Post({code, frontmatter}) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <header>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
      </header>
      <main>
        <Component />
      </main>
    </>
  )
}
```

这样做的原因是为了防止在组件重新渲染时不必要地重新创建`Component`值。

因此，`useMemo`只会在`代码`依赖关系改变时执行其回调函数。

## 想更进一步？

如果你喜欢这个手册，并且正在寻找学习React的终极资源，请查看 **[React Bootcamp](https://reactbootcamp.com)**。

它将为你提供所有你需要的培训:

- 每天只需30分钟，从纯新手变成React专家
- 构建4个全栈的React项目，从零开始到部署
- 学习强大的技术堆栈来构建你喜欢的任何应用程序

[![点击加入React训练营](https://reedbarger.nyc3.digitaloceanspaces.com/react-bootcamp-banner.png)](https://reactbootcamp.com)  
_Click to join the React Bootcamp_
