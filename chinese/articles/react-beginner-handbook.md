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
我向你展示的第一个示例，来自于我们前面学习过的 `App` 组件。

We import the  `logo`  SVG file using
我们可以使用下面的方法导入 `logo` SVG 文件：

```js
import logo from './logo.svg'

```

and then in the JSX we assign this SVG file to the  `src`  attribute of an  `img`  tag:
然后在 JSX 中我们将这个 SVG 文件赋值给 `img` 标签的 `src` 属性。

```js
<img src={logo} class="App-logo" alt="logo" />

```

Let's do another example. Suppose the  `App`  component has a variable called  `message`:
我们来展示另一个示例。假设 `App` 组件有一个变量，名为 `message`：

```js
function App() {
  const message = 'Hello!'
  //...
}

```

We can print this value in the JSX by adding  `{message}`  anywhere in the JSX.
我们可以通过在 JSX 的任意位置添加 `{message}`，来在 JSX 中显示这个变量的值。

Inside the curly brackets  `{ }`  we can add any JavaScript statement, but  _just one_  statement for every curly bracket block.
我们可以在 `{ }` 中添加任何 Javscript 语句，但是每对大括号中只能有 _一个_ 语句，并且这个语句必须是可求值的。

And the statement must return something.

For example this is a common statement you will find in JSX. We have a ternary operator where we define a condition (`message === 'Hello!'`), and we print one value if the condition is true, or another value (the content of  `message`  in this case) if the condition is false:
如下所示，这是一个在 JSX 中非常常见的语句。我们有一个三元运算符，并在其中定义了一个条件语句（`message === 'Hello!'`），当条件为真时，我们输出一个值（`The message was "Hello!"`）；条件为假时，输出另一个值（当前示例中为变量 `message` 的值）：

```js
{
  message === 'Hello!' ? 'The message was "Hello!"' : message
}

```

## 在 React 中管理 state

每一个 React 组件都可以有它自己的 **state**。

那么什么是 _state_ ？state 就是 **由组件管理的数据的集合**。

Think about a form, for example. Each individual input element of the form is responsible for managing its state: what is written inside it.
例如，对于表单来说，它的每一个独立的 input 元素都管理着它自己的 state：它的输入值。

A button is responsible for knowing if it's being clicked, or not. If it's on focus.
当一个按钮获得焦点时，它负责管理自己是否被点击。

A link is responsible for knowing if the mouse is hovering over it.
一个链接负责管理鼠标是否悬停在它上面。

在 React 或者其他组件化的框架、库中，我们所有的应用都是以大量使用 state 的组件为基础的。

我们使用由 React 提供的高效管理工具 `useState` 来管理 state。从技术上来说，它是个 **钩子** （这是事实，但是现在我们不需要知道钩子的详细信息）。

你可以使用下面的方法来从 React 中导入 `useState`：

```js
import React, { useState } from 'react'

```

通过调用 `useState()`，我们将会得到一个 state，以及一个供我们调用以修改 state 值的函数。

`useState()` 可以传入一个参数，用来初始化 state。它会返回一个数组，这个数组包含一个 state 和一个修改 state 的函数。

如下所示:

```js
const [count, setCount] = useState(0)

```

这一点非常重要。我们不能直接修改 state，只能通过调用修改函数来修改它，否则，React 组件无法及时将数据的变化反映在用户界面中。

调用修改函数是一种将组件 state 的变化告知 React 的方法。

这个语法是不是看起来有点奇怪？这是因为 `useState()` 返回的是数组，所以我们使用了数组解构的方法来获取每个数组成员，就像这样：`const [count, setCount] = useState(0)`

下面是一个实例：

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

我们也可以调用多次调用 `useState()`，来创建多个 state：

```js
const [count, setCount] = useState(0)
const [anotherCounter, setAnotherCounter] = useState(0)

```

## React 组件中的 Props

We call  `props`  the initial values passed to a component.
我们称传入组件的初始值为 props。
We previously created a  `WelcomeMessage`  component
我们之前创建了一个 `WelcomeMessage` 组件。

```js
function WelcomeMessage() {
  return <p>Welcome!</p>
}

```

我们这样使用它：

```js
<WelcomeMessage />

```

This component does not have any initial value. It does not have props.
这个组件没有初始值，所以它没有 props。

Props can be passed as attributes to the component in the JSX:
在 JSX 中，props 可以作为属性传给组件。

```js
<WelcomeMessage myprop={'somevalue'} />

```

and inside the component we receive the props as arguments:
在组件中，我们以参数的形式接收 props：

```js
function WelcomeMessage(props) {
  return <p>Welcome!</p>
}

```

It's common to use object destructuring to get the props by name:
通常以对象解构的形式获取 props 的名称：

```js
function WelcomeMessage({ myprop }) {
  return <p>Welcome!</p>
}

```

Now that we have the prop, we can use it inside the component. For example we can print its value in the JSX:
我们现在取得了 props，我们可以在组件中使用它了。例如，我们可以在 JSX 中输出它的值：

```js
function WelcomeMessage({ myprop }) {
  return <p>{myprop}</p>
}

```

这里的大括号有很多种含义。对于函数参数来说，大括号是对象解构语法的一部分。我们也可以用它来定义函数代码块。最后，在 JSX 中，我们还用它来输出 JavaScript 值。

将 props 传递给组件是一种在你的应用中传递值的好方法。

一个组件既可以有自己的数据（state），也可以通过 props 来接收数据。

当将函数作为 props 时，子组件就可以调用父组件中定义的函数。

有一种被称为 `children` 的特殊 props，它代表了包含在组件的开始标签和结束标签之间的所有东西的值，例如：

```html
<WelcomeMessage> Here is some message </WelcomeMessage>

```

这种情况下，在 `WelcomeMessage` 中，我们可以通过使用名为 `children` 的 props 来获取 `Here is some message`。

```js
function WelcomeMessage({ children }) {
  return <p>{children}</p>
}

```

## React 应用中的数据流

在一个 React 应用中，数据通常以 props 的方式从父组件流向子组件，就像我们在上一节看到的那样：

```js
<WelcomeMessage myprop={'somevalue'} />

```

如果给子组件传递一个函数，你就可以在子组件中修改父组件的 state：

```js
const [count, setCount] = useState(0)

```

Inside the Counter component we can now grab the  `setCount`  prop and call it to update the  `count`  state in the parent component, when something happens:
现在，在 Counter 组件内部，我们捕获了 `setCount`，然后在某些情况发生时，调用它来修改父组件中的 `count`：

```js
function Counter({ setCount }) {
  //...
  setCount(1)

```

You need to know that there are more advanced ways to manage data, which include the Context API and libraries like Redux. But those introduce more complexity, and 90% of the times using those 2 ways I just explained are the perfect solution.
其实还有很多更高级的方法来管理数据，比如 Context API 和 Redux 之类的库。但是这些方法会增加复杂性，而在大约 90% 的时间里，我刚刚介绍的两种方法都是完美的解决方案。

## 在 React 中处理用户事件

React provides an easy way to manage events fired from DOM events like clicks, form events, and more.
React 提供了一种简单的方法来管理从 DOM 触发的形如点击、表单事件等事件。

这里我们以最容易理解单击事件为例来进行说明。

You can use the  `onClick`  attribute on any JSX element:
你可以在任意的 JSX 元素上使用 `onClick` 属性。

```js
<button
  onClick={(event) => {
    /* handle the event /
  }}
>
  Click here
</button>

```
_每元素被点击的时候，传递给 `onClick` 属性的函数就会被触发。_

_你也可以在 JSX 的外部定义这些函数：_

_`const handleClickEvent = (event) => {
  /`_ `handle the event */
}` 

`function App() {
  return <button onClick={handleClickEvent}>Click here</button>
}` 

当点击 button 时，就会触发 `click` 事件，此时，React 就会调用 `click` 事件的处理函数。

React 支持非常多的事件类型，如：`onKeyUp`，`onFocus`，`onChange`，`onMouseDown`，`onSubmit` 等等等等.

## React 组件的生命周期事件

到目前为止，我们已经学习了怎么使用 `useState` 勾子来管理 state。

在本节中，我想介绍另外一个勾子：`userEffect`。

`useEffect` 勾子允许组件访问它的生命周期事件。

当你调用这个勾子时，你需要传入一个函数。在组件第一次被渲染的时候，以及在随后的每次重新渲染/更新时，React 都会调用这个函数。

React 首先更新 DOM，然后调用任何传递给 `useEffect()` 的函数。

All without blocking the UI rendering, even on blocking code.
所有这些都不会阻塞 UI 的渲染，即使是阻塞代码。

这里是一个示例：

```js
const { useEffect, useState } = React
const CounterWithNameAndSideEffect = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(You clicked ${count} times)
  })

```

因为在随后的每次重新渲染/更新时，传递给 useEffect() 的函数都会被执行，所以出于性能上的考虑，我们可以告诉 React 在某些时候不要执行这个函数。为了实现这个目的，我们可以为 useEffect() 传入第二个参数，这个参数是一个数组，它的成员是需要监视的 state 变量。只有在这些 state 发生变化的时候，React 才会执行这个函数。

```js
useEffect(() => {
  console.log(Hi ${name} you clicked ${count} times)
}, [name, count])

```

类似的，你可以传入一个空数组，这会使 React 只在组件挂载的时候才执行这个函数。

```js
useEffect(() => {
  console.log(Component mounted)
}, [])

```

你可能会发现自己经常使用这个技巧。

useEffect() 非常适合添加日志，访问第三方 API 等。

## 接下来做什么？

熟练掌握在这篇文章中提到主题是朝着学习 React 目标迈出的重要一步。

在这里我想给出一些指导，防止你在有关 React 教程和课程的海洋中迷失方法。

接下来改学习什么呢？

了解有关 [虚拟 DOM][31]，[编写声明式代码][32]，[单向数据流][33]，[不变性][34]，[组合][35]的更多理论。

构建一些简单的 React 应用。例如：[一个简单的计数器][36] 或者 [与公共 API 交互][37]

学习如何使用 [条件渲染][38]，如何在 [JSX 中使用循环][39]，如何使用 [React 开发者工具][40]

通过 [plain CSS][41] 或者 [Styled Components][42] 学习如何在 React 应用中使用 CSS。

Learn how to manage state using the  [Context API][43], useContext and  [Redux][44].

Learn how to interact with  [forms][45].

学习如何使用 [React 路由][46]。

学习 [如何测试 React 应用][47]。

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
