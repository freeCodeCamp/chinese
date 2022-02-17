> - 原文地址：[The React Cheatsheet for 2022](https://www.freecodecamp.org/news/the-react-cheatsheet/)
> - 原文作者：[Reed Barger](https://www.freecodecamp.org/news/author/reed/)
> - 译者：
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

Props is an object, so we can select the `name` prop within `User` to get its value.

> To embed any dynamic value (that is, a variable or expression) within JSX, you must wrap it in curly braces.

Since we are only using the `name` property on the props object, we can make our code simpler with object destructuring:

```ts
function App() {
  return <User name="John Doe" />
}

function User({ name }) {
  return <h1>Hello, {name}!</h1>; // Hello, John Doe!
}
```

Any JavaScript value can be passed as a prop, including other elements and components.

## React Children Props

Props can also be passed by placing data between the opening and closing tags of a component.

Props that are passed this way are placed on the `children` property.

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

React components and elements can be conditionally displayed.

One approach is to create a separate return with an if-statement.

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

If you want to write a conditional within a return statement, however, you must use a conditional that resolves to a value.

To use the ternary operator, wrap the entire conditional in curly braces.

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

Lists of React components can be output using the `.map()` function.

`.map()` allows us to loop over arrays of data and output JSX.

Here we are outputting a list of soccer players using the SoccerPlayer component.

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

Whenever you are looping over an array of data, you must include the _key_ prop on the element or component over which you are looping.

Additionally, this key prop must be given a unique value, not just an element index.

In the example above, we are using a value which we know to be unique, which is the `playerName`.

## React Context

React context allows us to pass data to our component tree without using props.

The problem with props is that sometimes we pass them through components that don’t need to receive them. This problem is called _props drilling_.

Here is a oversimplified example of passing props through a `Body` component that doesn’t need it:

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

> Before using Context, its best to see if our components can be better organized to avoid passing props through components that don’t need it.

To use Context, we use the `createContext` function from React.

We can call it with an initial value to be put on context.

The created context includes a `Provider` and a `Consumer` property, which are each components.

We wrap the Provider around the component tree that we want to pass the given value down. Next, we place the Consumer in the component we want to consume the value.

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

React hooks were introduced in React version 16.8 as a way to easily add reusable, stateful logic to React function components.

Hooks let us use all the features that were previously only available in class components.

Additionally, we can create our own custom hooks that give our app custom functionality.

Many React hooks were added to the core React library as well. We are going to cover the 6 essential hooks you absolutely need to know:

- useState
- useEffect
- useRef
- useContext
- useCallback
- useMemo

## React useState Hook

`useState` does exactly what it says—it allows us to use stateful values in function components.

useState is used instead of a simple variable because when state is updated, our component re-renders, usually to display that updated value.

Like all hooks, we call `useState` at the top of our component and can pass it an initial value to put on its state variable.

We use array destructuring on the value returned from `useState` to access (1) the stored state and (2) a function to update that state.

```ts
import { useState } from 'react';

function MyComponent() {
  const [stateValue, setStateValue] = useState(initialValue);
}
```

A basic example of using `useState` is to increment a counter.

We can see the current count from the `count` variable and can increment the state by passing `count + 1` to the `setCount` function.

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

If we want to interact with the “outside world”, such as using an API, we use the `useEffect` hook.

useEffect is used to perform a side effect, which means to perform an operation that exists outside of our app that doesn’t have a predictable result.

The basic syntax of useEffect requires a function as a first argument and an array as the second argument.

```ts
import { useEffect } from 'react';

function MyComponent() {
   useEffect(() => {
     // perform side effect here
   }, []);
}
```

If we want to fetch data, we would use `useEffect`, such as in fetching and displaying a list of posts:

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

If we need to use a value that comes from outside the effect function, it must be included in the dependencies array.

If that value changes, the effect function will be re-executed.

For example, here is a bit of code that adds or removes the class “overflow-hidden” to the body element whenever the mobile menu is opened or closed.

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

`useRef` allows us to get direct access to a JSX element.

To use `useRef`, call it, get the returned value, and put it on the `ref` prop for a given React element.

> Refs do not have a built-in prop on components, only React elements.

Here is the basic syntax for `useRef`:

```ts
import { useRef } from 'react';

function MyComponent() {
  const ref = useRef();

  return <div ref={ref} />
}
```

Once a ref is attached to a given element, we can use the value stored on `ref.current` to access the element itself.

For example, if we wanted to write some code that focuses a search input when the users use the key combination Control + K.

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

`useContext` provides an easier way of consuming context than using the standard Context.Consumer component.

The syntax involves passing the entire Context object that we want to consume into `useContext`. The returned value is the value passed down to Context.

```ts
import { useContext } from 'react';

function MyComponent() {
  const value = useContext(Context);

  // ...
}
```

To rewrite our example from earlier, using the `useContext` hook:

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

`useCallback` is a hook that we use to help with our app's performance.

Specifically, it prevents functions from being recreated every time our component re-renders, which can hurt the performance of our app.

If we go back to our `PlayerList` example from earlier and add the ability to add players to our array, when we pass down a function to remove them (`handleRemovePlayer`) via props, the function will be recreated every time.

The way to fix this is to wrap our callback function in `useCallback` and to include its one argument `player` in the dependencies array:

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

`useMemo` is another performance hook that allows us to ‘memoize’ a given operation.

Memoization makes it possible to remember the result of expensive calculations when they have already been made so we don’t have to make them again.

Like `useEffect` and `useCallback`, `useMemo` accepts a callback function and a dependencies array.

Unlike both of these functions, however, `useMemo` is intended to return a value.

> You must return the value either explicitly with the `return` keyword or implicitly but using the arrow function shorthand (seen below).

A real-world example of `useMemo` comes from the mdx-bundler documentation. `mdx-bundler` is a library for converting .mdx files into React components.

Here it uses `useMemo` to convert a raw string of code into a React component.

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

The reason for doing so is to prevent the `Component` value from being recreated unnecessarily when the component re-renders.

`useMemo` therefore will only execute its callback function if the `code` dependency changes.

## Want To Take The Next Step?

If you enjoyed this cheatsheet and are looking for the ultimate resource to learn React, check out the **[React Bootcamp](https://reactbootcamp.com)**.

It will give you all the training you need to:

- Go from absolute beginner to React professional in just 30 minutes a day
- Build 4 full-stack React projects from scratch to deployment
- Learn a powerful stack of technologies to build any app you like

[![Click to join the React Bootcamp](https://reedbarger.nyc3.digitaloceanspaces.com/react-bootcamp-banner.png)](https://reactbootcamp.com)  
_Click to join the React Bootcamp_
