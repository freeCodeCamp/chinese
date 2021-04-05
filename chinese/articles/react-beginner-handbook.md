> * 原文地址：[React for Beginners – A React.js Handbook for Front End Developers React.js 入门教程](https://www.freecodecamp.org/news/react-beginner-handbook/#howmuchjavascriptyouneedtoknowtousereact)
> * 原文作者：Flavio Copes
> * 译者：xinlei_ye@163.com
> * 校对者：

![React for Beginners – A React.js Handbook for Front End Developers](https://www.freecodecamp.org/news/content/images/size/w2000/2020/11/book-2.jpg)

React 是有史以来最受欢迎的 JavaScript 框架之一，我认为它也是目前最好用的开发工具之一。

希望这篇文章可以为 React 初学者提供一些帮助。

在学习完这篇文章后，你就可以对 React 有初步的了解：

-   什么是 React 以及为什么 React 这么受欢迎
-   怎么安装 React
-   React 组件
-   React State
-   React Props
-   处理 React 中的用户事件
-   Lifecycle events in a React component

这些主题将是你构建其他高级 React 教程的基础。

这篇文章专门为刚接触 React 的 JavaScript 程序员而写的。现在，让我们开始吧。

## 什么是 React？

React 是一个 JavaScript 库，旨在简化可视界面（visual interfaces）的开发。

React 诞生在 Facebook，于 2013 年发布，并为 Facebook 和 Instagram 提供了大量的应用程序，其中的一些 app 有着最广泛的使用。

它的主要目的是在任何时间点都可以轻松的推断接口及其状态。它通过将 UI 划分为组件的集合来实现这个目的。

在学习 React 的时候，你可能遇到一些小问题。但是只要你解决了它们，我保证这将会是你最好的经历。React 使很多事情变的更加简单，而且它的生态里有很多好用的库和工具。

React 自身有一套非常简单的 API，当你开始学习的时候，只需要明白 4 个基本概念：

-   组件
-   JSX
-   State
-   Props

我们将在这篇文章中学习这几个基本概念，那些高级的概念我们会留给其他的教程。我将会在文章的末尾给出深入学习 React 的资料。

你可以[免费下载 PDF / ePub / Mobi 格式的手册][1]

## 手册目录

-   [学习 React 需要知道多少 JavaScript][2]
-   [为什么要学习 React][3]
-   [如何安装 React][4]
-   [React 组件][5]
-   [JSX 简介][6]
-   [使用 JSX 实现 UI][7]
-   [JSX 与 HTML 的区别][8]
-   [Embedding JavaScript in JSX][9]
-   [React 中的状态管理][10]
-   [React 组件中的 Props][11]
-   [Data flow in a React application][12]
-   [在 React 中处理用户事件][13]
-   [Lifecycle events in a React component][14]
-   [Where to go from here][15]

## 学习 React 需要知道多少 JavaScript

在真正开始学习 React 之前，你需要对 JavaScript 的核心概念有很好的理解

你不需要成为 JavaScript 专家，但是我希望你对以下内容有很好的了解：

-   [变量][16]
-   [箭头函数][17]
-   [使用扩展运算符处理对象和数组][18]
-   [对象和数组的解构][19]
-   [模板字符串][20]
-   [回调函数][21]
-   [ES 模块化][22]

如果你对这些概念不熟悉，我为你提供了一些学习这些概念的链接。

## 为什么要学习 React?

我强烈建议每一位 Web 开发者至少对 React 有基本的了解。

那是因为以下几个原因：

1. React 十分受欢迎。作为一名开发者，你很可能在将来参与 React 项目。可能是目前正在进行的项目，也可能是你的团队希望你使用 React 开发一个全新的 App。
2. 现在很多工具都是基于 React 开发的。诸如 Next.js，Gatsby 等流行框架与工具都在后台使用了 React。
3. 作为一名前端工程师，很可能会在面试时遇到 React。

这些都是很好的理由，但是我希望你学习 React 的主要原因之一是它非常棒。

React 促成了包括代码复用、组件化开发在内的几种很好的开发实践。它高效、轻量，并且它使你关注应用中数据流的开发方法非常适合很多常见的场景。

## 如何安装 React

有几种不同的方式安装 React。

在开始时，我强烈建议一种方法，那就是使用官方推荐的工具：`create-react-app`。

`create-react-app` 是一个命令行工具，旨在让你快速了解 React。

你可以从使用 `npx` 开始，这是一种不需要安装就能下载和执行 Node.js 命令的便捷方法。

> 在这里查看我的 npx 指南：[https://flaviocopes.com/npx/][23]

从 5.2 版 `npm` 开始，增加了 `npx` 命令。如果你现在还没安装 npm，那么点击这里 [https://nodejs.org][24] 安装吧（npm 是随 Node 安装的）。

如果你不能确定你的 npm 版本号，那么执行 `npm -v` 命令来检查你是否需要更新 npm。

> 注意：如果你不熟悉终端的使用方法，请访问 [https://flaviocopes.com/macos-terminal/][25]，查看我的 OSX 终端教程。这份教程适用于 Mac 和 Linux。

当你执行 `npx create-react-app <app-name>` 命令时，`npx` 首先会 _下载_ 最新版的 `create-react-app`，然后再运行它，运行结束后会把它从你的系统中删除。

这点很不错，因为你的系统上永远不会有旧的版本，并且每次运行的时候，你都会获得最新、最全的代码。

让我们开始吧：

```sh
npx create-react-app todolist
```

![cra-start](https://www.freecodecamp.org/news/content/images/2020/11/cra-start.png)

运行成功后你会看到：

![create-react-app-finished](https://www.freecodecamp.org/news/content/images/2020/11/create-react-app-finished.png)

`create-react-app`  created a file structure in the folder you told it to (`todolist`  in this case), and initialized a  [Git][26]  repository.
`create-react-app` 会在你指定的文件夹下创建文件结构（本示例中为 `todolist`），并且初始化为一个 [Git][26] 仓库。

它也会在 `package.json` 文件中添加几个命令：

![cra-packagejson](https://www.freecodecamp.org/news/content/images/2020/11/cra-packagejson.png)

所以你可以即刻进入到新创建的应用目录下，运行 `npm start` 命令来启动 app。

![cra-running](https://www.freecodecamp.org/news/content/images/2020/11/cra-running.png)

默认情况下，这个命令会你本地的 3000 端口启动 app，并打开浏览器，为你展示欢迎界面：

![cra-browser](https://www.freecodecamp.org/news/content/images/2020/11/cra-browser.png)

现在你就可以开始开发这个应用程序了！

## React 组件

在上一节课程里，你学习了怎么创建你的第一个 React 应用。

这个应用里包含了一系列执行各种操作的文件，大部分都与配置有关，但是有一个文件十分的不同：`App.js`。

`App.js` 是你遇到的 **第一个 React 组件**。

文件中含有如下代码：

```js
import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

```

一个使用 React 或者其他的主流前端框架，如：Vue、Svelte，创建的应用，都是由很多的组件构成的。

不过，我们还是先分析这个组件吧。我计划像这样分割代码：

```js
import React from 'react'
import logo from './logo.svg'
import './App.css'
function App() {
  return /* something */
}

```

You can see a few things here. We  _import_  some things, and we  _export_  a function called  `App`.
在这段代码中，你可以学习到几个事情。我们使用 _import_ 导入了一些东西，并且用 _export_ 导出了一个名为 `App` 的函数。

The things we import in this case are a JavaScript library (the  `react`  npm package), an SVG image, and a CSS file.
在这段示例代码中，我们导入了一个 JavaScript 库(`react` npm 包)，一个 SVG 图片，和一个 CSS 文件。

> `create-react-app`  设置了一种方法，它允许我们导入图片和 CSS 并在 JavaScript 中使用它们。但这不是我们现在需要关心的内容，我们现在关心的是 **组件** 的概念。

`App` 是一个官方示例中的函数, 返回了一些初看之下很奇怪的东西。

它看起来很像 **HTML**，但是内嵌了一些 JavaScript。

这就是 **JSX**，一种我们用来构建组件输出的特殊语言。我们将会在下一节讨论 JSX。

除了可以返回 JSX，组件还具有一些其他特征。

一个组件可以有它自己的 **state（状态）**，这就是说它可以封装一些其他组件无法访问的属性，除非它把这些 **state** 暴露给应用中的其他组件。

一个组件也可以接收来自其他组件的数据，我们称这些数据为 **props**。

不必担心，我们很快就会详细学习所有的这些概念（JSX，State 和 Props）了。

## JSX 简介

要想学习 React 就必须首先了解 JSX。

In the last section you met your first React component, the  `App`  component defined in the default application built by  `create-react-app`.
在上一节中，你见到了第一个 React 组件，即 `App`，它是由 `create-react-app` 构建的默认应用程序中定义的。

它的代码如下：

```js
import React from 'react'
import logo from './logo.svg'
import './App.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

```

之前我们忽略了 `return` 语句中的所有内容，但是我们将会在本节中讨论它们。

我们将包含在组件返回语句后的括号内的所有内容称为 JSX：

```jsx
<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>

```

这些内容 _看起来_ 很像 HTML，但是却又不是真正的 HTML。它们之间有一些不同点。

而且将这样的代码包含在 JavaScript 文件中有点奇怪。它们看起来一点都不像 JavaScript！

在后台，React 将会处理 JSX，它们会被转换为浏览器可以识别的 JavaScript。

因此，虽然我们编写了 JSX，但是最终会有一个转换的步骤，使它可以被 JavaScript 解析器所识别。

React 为我们提供这个接口的一个原因：**使用 JSX 能更加轻松的开发 UI 界面**。

当然了，前提是你必须非常熟悉它。

在下一节中，我们将会讨论 JSX 是怎么使你能够很容易的开发 UI 的。再然后我们将会讨论它与“标准 HTML”的区别，这些差异是你必须知道的。

## 使用 JSX 构建 UI

就像上一节中介绍的那样，JSX 的一个主要作用就是借助它可以非常容易的编写 UI。
As introduced in the last section, one of the main benefits of JSX is that it makes it very easy to build a UI.

特别的，在 React 组件中，你可以导入其他 React 组件，
In particular, in a React component you can import other React components, and you can embed them and display them.

一个 React 组件通常在它自己的的文件中，这就是我们可以非常容易的在其他组件中复用（通过导入的方式）它们。
A React component is usually created in its own file, because that's how we can easily reuse it (by importing it) in other components.

但是一个 React 组件
But a React component can also be created in the same file of another component, if you plan to only use it in that component. There's no "rule" here, you can do what feels best to you.

当一个文件中的代码行数过多时，我通常会把代码分开，放到单独的文件中。
I generally use separate files when the number of lines in a file grows too much.

为了方便起见，我们
To keep things simple let's create a component in the same  `App.js`  file.

我们计划创建一个 `WelcomeMessage` 组件：
We're going to create a  `WelcomeMessage`  component:

```js
function WelcomeMessage() {
  return <p>Welcome!</p>
}

```
看到了吗？ 这是一个简单的函数，它返回了一行 JSX，表示一个 `p` 标签。
See? It's a simple function that returns a line of JSX that represents a  `p`  HTML element.

我们打算把这个函数添加到 `App.js` 文件中。
We're going to add it to the  `App.js`  file.

现在，我们可以通过将 `<WelcomeMessage />` 添加到 `App` 组件的 JSX 代码中，以在用户界面中展示这个组件。
Now inside the  `App`  component JSX we can add  `<WelcomeMessage />`  to show this component in the user interface:

```js
import React from 'react'
import logo from './logo.svg'
import './App.css'
function WelcomeMessage() {
  return <p>Welcome!</p>
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <WelcomeMessage />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

```

下面是运行结果。你应该可以在屏幕中看到“Welcome!”信息。
And here's the result. Can you see the "Welcome!" message in the screen?

![new-component](https://www.freecodecamp.org/news/content/images/2020/11/new-component.png)

我们称 `WelcomeMessage` 为 `App` 的子组件，`App` 是父组件。
We say that  `WelcomeMessage`  is a  **child component**  of App, and  `App`  is its parent componnet.

我们像使用 HTML 语言一样，添加了 `<WelcomeMessage />` 组件。
We're adding the  `<WelcomeMessage />`  component as if it was part of the HTML language.

这就是 React 组件和 JSX 厉害的地方：我们可以构建应用程序界面，并且像写 HTML 一样使用它们。
That's the beauty of React components and JSX: we can compose an application interface and use it like we're writing HTML.

在下一节中，我们会学习 JSX 与 THML 的区别。
With some differences, as we'll see in the next section.

## JSX 与 HTML 的区别

JSX kind of looks like HTML, but it's not.
JSX 看起来像 HTML，但事实并不是这样。

In this section I want to introduce you to some of the most important things you need to keep in mind when using JSX.
在这节课程里，我会介绍一些在使用 JSX 时，你必须要知道的东西。

One of the differences might be quite obvious if you looked at the  `App`  component JSX: there's a strange attribute called  `className`.
如果你查看过 `App` 组件的 JSX 代码，会发现一个很明显的不同点：组件中有一个名为 `className` 的属性。

In HTML we use the  `class`  attribute. It's probably the most widely used attribute, for various reasons. One of those reasons is CSS. The  `class`  attribute allows us to style HTML elements easily, and CSS frameworks like Tailwind put this attribute to the center of the CSS user interface design process.
在 HTML 中，我们使用的是 `class` 属性。由于各种原因，这是一个使用最广泛的属性。其中一个原因是 CSS。`class` 属性使我们可以轻松的设置 HTML 样式，并且 Tailwind 之类的 CSS 框架将这个属性放在 CSS 用户界面设计过程的核心。 

But there's a problem. We are writing this UI code in a JavaScript file, and  `class`  in the JavaScript programming language is a reserved word. This means we can't use this reserved word as we want. It serves a specific purpose (defining JavaScript classes) and the React creators had to choose a different name for it.
但是这里有个问题。我们正在 JavaScript 文件中编写 UI 代码，而 `class` 是 JavaScript 语言的保留字。这意味着我们不能使用这个保留字。它有特殊的作用（定义 JavaScript 类），由于这个原因 React 的作者们不得不选择一个其他的名称。

That's how we ended up with  `className`  instead of  `class`.
这就是我们为什么用 `className` 替代了 `class`。

You need to remember this especially when you're copy/pasting some existing HTML.
当你将一些现有的 HTML 代码改为 JSX 时，需要牢记这点。

React will try its best to make sure things don't break, but it will raise a lot of warnings in the Developer Tools:
React 会

![className](https://www.freecodecamp.org/news/content/images/2020/11/className.png)

This is not the only HTML feature that suffers from this problem, but it's the most common one.


Another big difference between JSX and HTML is that HTML is very  _relaxed_, we can say. Even if you have an error in the syntax, or you close the wrong tag, or you have a mismatch, the browser will try its best to interpret the HTML without breaking.
JSX 与 HTML 的另一个非常大的不同点是 HTML 是很 _relaxed_ 。当你有语法错误，或者标签没有正确闭合或者没有匹配，浏览器不会中断，而是尽可能的解析 HTML。

It's one of the core features of the Web. It is very forgiving.
这是 Web 的一个核心特点。它非常宽松。

JSX is not forgiving. If you forget to close a tag, you will have a clear error message:
JSX 并不宽松。如果你忘记将一个标签闭合，你将会得到一条错误信息：

![jsx-error](https://www.freecodecamp.org/news/content/images/2020/11/jsx-error.png)

> React usually gives very good and informative error messages that point you in the right direction to fix the problem.
> React 会给出非常友好的错误信息，提示你解决问题的正确方向。

Another big difference between JSX and HTML is that in JSX we can embed JavaScript.
第三个 JSX 与 HTML 的不同点在于：在 JSX 中，我们可以内嵌 JavaScript。

Let's talk about this in the next section.
我们会在下节讨论这点。

## 在 JSX 嵌入 JavaScript

One of the best features of React is that we can easily embed JavaScript into JSX.
React 的一个最好特点就是我们可以非常容易的在 JSX 中嵌入 JavaScript。

Other frontend frameworks, for example Angular and Vue, have their own specific ways to print JavaScript values in the template, or perform things like loops.
其他的前端框架，如 Angular 和 Vue，有自己的特殊方法来在模板中显示 JavaScript 值，或者执行类似循环的操作。

React doesn't add new things. Instead, it lets us use JavaScript in the JSX, by using curly brackets.
React 并没有添加类似的新特性。相反的，通过使用大括号，React 容许我们在 JSX 中使用 JavaScript。

The first example of this that I will show you comes directly from the  `App`  component we've studied so far.

We import the  `logo`  SVG file using

```js
import logo from './logo.svg'

```

and then in the JSX we assign this SVG file to the  `src`  attribute of an  `img`  tag:

```js
<img src={logo} class="App-logo" alt="logo" />

```

Let's do another example. Suppose the  `App`  component has a variable called  `message`:

```js
function App() {
  const message = 'Hello!'
  //...
}

```

We can print this value in the JSX by adding  `{message}`  anywhere in the JSX.

Inside the curly brackets  `{ }`  we can add any JavaScript statement, but  _just one_  statement for every curly bracket block.

And the statement must return something.

For example this is a common statement you will find in JSX. We have a ternary operator where we define a condition (`message === 'Hello!'`), and we print one value if the condition is true, or another value (the content of  `message`  in this case) if the condition is false:

```js
{
  message === 'Hello!' ? 'The message was "Hello!"' : message
}

```

## Managing state in React

Every React component can have its own  **state**.

What do we mean by  _state_? The state is the  **set of data that is managed by the component**.

Think about a form, for example. Each individual input element of the form is responsible for managing its state: what is written inside it.

A button is responsible for knowing if it's being clicked, or not. If it's on focus.

A link is responsible for knowing if the mouse is hovering over it.

In React, or in any other components-based framework/library, all our applications are based on and make heavy use of components' state.

We manage state using the  `useState`  utility provided by React. It's technically a  **hook**  (you don't need to know the details of hooks right now, but that's what it is).

You import  `useState`  from React in this way:

```js
import React, { useState } from 'react'

```

Calling  `useState()`, you will get back a new state variable, and a function that we can call to alter its value.

`useState()`  accepts the initial value of the state item and returns an array containing the state variable, and the function you call to alter the state.

Example:

```js
const [count, setCount] = useState(0)

```

This is important. We can't just alter the value of a state variable directly. We must call its modifier function. Otherwise the React component will not update its UI to reflect the changes of the data.

Calling the modifier is the way we can tell React that the component state has changed.

The syntax is a bit weird, right? Since  `useState()`  returns an array we use array destructuring to access each individual item, like this:  `const [count, setCount] = useState(0)`

Here's a practical example:

```js
import { useState } from 'react'
const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

```

You can add as many  `useState()`  calls as you want, to create as many state variables as you want:

```js
const [count, setCount] = useState(0)
const [anotherCounter, setAnotherCounter] = useState(0)

```

## Component Props in React

We call  `props`  the initial values passed to a component.

We previously created a  `WelcomeMessage`  component

```js
function WelcomeMessage() {
  return <p>Welcome!</p>
}

```

and we used it like this:

```js
<WelcomeMessage />

```

This component does not have any initial value. It does not have props.

Props can be passed as attributes to the component in the JSX:

```js
<WelcomeMessage myprop={'somevalue'} />

```

and inside the component we receive the props as arguments:

```js
function WelcomeMessage(props) {
  return <p>Welcome!</p>
}

```

It's common to use object destructuring to get the props by name:

```js
function WelcomeMessage({ myprop }) {
  return <p>Welcome!</p>
}

```

Now that we have the prop, we can use it inside the component. For example we can print its value in the JSX:

```js
function WelcomeMessage({ myprop }) {
  return <p>{myprop}</p>
}

```

Curly brackets here have various meanings. In the case of the function argument, curly brackets are used as part of the object destructuring syntax.

Then we use them to define the function code block, and finally in the JSX to print the JavaScript value.

Passing props to components is a great way to pass values around in your application.

A component either holds data (has state) or receives data through its props.

We can also send functions as props, so a child component can call a function in the parent component.

A special prop is called  `children`. That contains the value of anything that is passed between the opening and closing tags of the component, for example:

```html
<WelcomeMessage> Here is some message </WelcomeMessage>

```

In this case, inside  `WelcomeMessage`  we could access the value  `Here is some message`  by using the  `children`  prop:

```js
function WelcomeMessage({ children }) {
  return <p>{children}</p>
}

```

## Data flow in a React application

In a React application, data typically flows from a parent component to a child component, using props as we saw in the previous section:

```js
<WelcomeMessage myprop={'somevalue'} />

```

If you pass a function to the child component, you can however change the state of the parent component from a child component:

```js
const [count, setCount] = useState(0)

```

Inside the Counter component we can now grab the  `setCount`  prop and call it to update the  `count`  state in the parent component, when something happens:

```js
function Counter({ setCount }) {
  //...
  setCount(1)

```

You need to know that there are more advanced ways to manage data, which include the Context API and libraries like Redux. But those introduce more complexity, and 90% of the times using those 2 ways I just explained are the perfect solution.

## Handling user events in React

React provides an easy way to manage events fired from DOM events like clicks, form events, and more.

Let's talk about click events, which are pretty simple to digest.

You can use the  `onClick`  attribute on any JSX element:

```js
<button
  onClick={(event) => {
    /* handle the event /
  }}
>
  Click here
</button>

```

_When the element is clicked, the function passed to the  `onClick`  attribute is fired._

_You can define this function outside of the JSX:_

_`const handleClickEvent = (event) => {
  /`_ `handle the event */
}` 

`function App() {
  return <button onClick={handleClickEvent}>Click here</button>
}` 

When the  `click`  event is fired on the button, React calls the event handler function.

React supports a vast amount of types of events, like  `onKeyUp`,  `onFocus`,`onChange`,  `onMouseDown`,  `onSubmit`  and many more.

## Lifecycle events in a React component

So far we've seen how to manage state with the  `useState`  hook.

There's another hook I want to introduce in this book:  `useEffect`.

The  `useEffect`  hook allows components to have access to the lifecycle events of a component.

When you call the hook, you pass it a function. The function will be run by React when the component is first rendered, and on every subsequent re-render/update.

React first updates the DOM, then calls any function passed to  `useEffect()`.

All without blocking the UI rendering, even on blocking code.

Here is an example:

```js
const { useEffect, useState } = React
const CounterWithNameAndSideEffect = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(You clicked ${count} times)
  })

```

Since the useEffect() function is run on every subsequent re-render/update of the component, we can tell React to skip it, for performance purposes. We do this by adding a second parameter which is an array that contains a list of state variables to watch for.

React will only re-run the side effect if one of the items in this array changes.

```js
useEffect(() => {
  console.log(Hi ${name} you clicked ${count} times)
}, [name, count])

```

Similarly, you can tell React to only execute the side effect once (at mount time), by passing an empty array:

```js
useEffect(() => {
  console.log(Component mounted)
}, [])

```

You migth find yourself using this option a lot.

useEffect() is great for adding logs, accessing 3rd party APIs, and much more.

## Where to go from here

Mastering the topics explained in this article is a great step towards your goal of learning React.

I want to give you some pointers now, because it's easy to get lost in the sea of tutorials and courses about React.

What should you learn next?

Learn more theory about the  [Virtual DOM][31],  [writing declarative code][32],  [unidirectional data flow][33],  [immutability][34],  [composition][35].

Start building some simple React applications. For example  [build a simple counter][36]  or a  [interact with a public API][37].

Learn how to perform  [conditional rendering][38], how to perform  [loops in JSX][39], how to use the  [React Developer Tools][40].

Learn how to apply CSS in a React application, with  [plain CSS][41]  or  [Styled Components][42].

Learn how to manage state using the  [Context API][43], useContext and  [Redux][44].

Learn how to interact with  [forms][45].

Learn how to use  [React Router][46].

Learn  [how to test React applications][47].

Learn an application framework built on top of React, like  [Gatsby][48]  or  [Next.js][49].

Most of all, make sure you practice by building sample applications to apply everything you've learned.

## Conclusion

Thanks a lot for reading this handbook.

I hope it will inspire you to learn more about React and everything you can do with it!

Remember that you can  [download this handbook in PDF / ePub / Mobi format for free][50]  if you want.

I publish programming tutorials every day on my website  [flaviocopes.com][51]  if you want to check out more great content like this.

You can reach me on Twitter  [@flaviocopes][52].

[1]: https://flaviocopes.com/page/react-handbook/
[2]: https://www.freecodecamp.org/news/react-beginner-handbook/#howmuchjavascriptyouneedtoknowtousereact
[3]: https://www.freecodecamp.org/news/react-beginner-handbook/#whyshouldyoulearnreact
[4]: https://www.freecodecamp.org/news/react-beginner-handbook/#howtoinstallreact
[5]: https://www.freecodecamp.org/news/react-beginner-handbook/#reactcomponents
[6]: https://www.freecodecamp.org/news/react-beginner-handbook/#introductiontojsx
[7]: https://www.freecodecamp.org/news/react-beginner-handbook/#usingjsxtocomposeaui
[8]: https://www.freecodecamp.org/news/react-beginner-handbook/#thedifferencebetweenjsxandhtml
[9]: https://www.freecodecamp.org/news/react-beginner-handbook/#embeddingjavascriptinjsx
[10]: https://www.freecodecamp.org/news/react-beginner-handbook/#managingstateinreact
[11]: https://www.freecodecamp.org/news/react-beginner-handbook/#componentpropsinreact
[12]: https://www.freecodecamp.org/news/react-beginner-handbook/#dataflowinareactapplication
[13]: https://www.freecodecamp.org/news/react-beginner-handbook/#handlingusereventsinreact
[14]: https://www.freecodecamp.org/news/react-beginner-handbook/#lifecycleeventsinareactcomponent
[15]: https://www.freecodecamp.org/news/react-beginner-handbook/#wheretogofromhere
[16]: https://flaviocopes.com/javascript-variables/
[17]: https://flaviocopes.com/javascript-arrow-functions/
[18]: https://flaviocopes.com/javascript-rest-spread/
[19]: https://flaviocopes.com/javascript-destructuring/
[20]: https://flaviocopes.com/javascript-template-literals/
[21]: https://flaviocopes.com/javascript-callbacks/
[22]: https://flaviocopes.com/es-modules/
[23]: https://flaviocopes.com/npx/
[24]: https://nodejs.org/
[25]: https://flaviocopes.com/macos-terminal/
[26]: https://flaviocopes.com/git/
[27]: https://reactjs.org%22/
[28]: https://reactjs.org%22/
[29]: https://reactjs.org%22/
[30]: https://reactjs.org%22/
[31]: https://flaviocopes.com/react-virtual-dom/
[32]: https://flaviocopes.com/react-declarative/
[33]: https://flaviocopes.com/react-unidirectional-data-flow/
[34]: https://flaviocopes.com/react-immutability/
[35]: https://flaviocopes.com/react-composition/
[36]: https://flaviocopes.com/react-example-counter/
[37]: https://flaviocopes.com/react-example-githubusers/
[38]: https://flaviocopes.com/react-conditional-rendering/
[39]: https://flaviocopes.com/react-how-to-loop/
[40]: https://flaviocopes.com/react-developer-tools/
[41]: https://flaviocopes.com/react-css/
[42]: https://flaviocopes.com/styled-components/
[43]: https://flaviocopes.com/react-context-api/
[44]: https://flaviocopes.com/redux/
[45]: https://flaviocopes.com/react-forms/
[46]: https://flaviocopes.com/react-router/
[47]: https://flaviocopes.com/react-testing-components/
[48]: https://flaviocopes.com/gatsby/
[49]: https://flaviocopes.com/nextjs/
[50]: https://flaviocopes.com/page/react-handbook/
[51]: https://flaviocopes.com/
[52]: https://twitter.com/flaviocopes
