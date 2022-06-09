> -  原文地址：[React Interview Questions – Interview Prep with Answers and Examples](https://www.freecodecamp.org/news/react-interview-questions-and-answers/)
> -  原文作者：[Joel Olawanle](https://www.freecodecamp.org/news/author/joel-olawanle/)
> -  译者：Papaya HUANG
> -  校对者：

![React Interview Questions – Interview Prep with Answers and Examples](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/cover-template.jpg)

React是一个用于创建用户界面的JavaScript库。它被用于超过30,000个实时网站，并拥有超过 70,000个GitHub星。

根据[2021年Stack Overflow开发者调查报告](https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-web-frameworks)的数据显示：React已经超越jQuery成为最流行的 Web框架，占据了大约40.14%的市场份额。除此之外，React也是最受欢迎的，每四个开发人员中就有一个在使用它。

包括 LinkedIn、Twitter和AirBnB在内的 8,000 多个行业领导者使用React。

React开发者在美国的平均年薪是12万美元，许多企业和公司使用React，这迫使他们不断寻找新人才。

在这篇文章中，我们将介绍一些React基础知识，看一看相关面试问题及其正确答案，以帮助您在React面试中取得成功

## React是什么？

React是一个用于创建用户界面的开源前端JavaScript库。其声明性的、高效的、灵活的特点，以及坚持基于组件的方法，使得我们可以使用它创建可复用的UI组件。

开发人员主要使用React来创建单页应用程序，该库只关注MVC的视图层。它的速度也非常快。

## React的特点

React有许多特性使其与众不同，但这里有几个亮点：

-   React采用了虚拟DOM，而不是真实/浏览器DOM。
-   React采用单向数据绑定。
-   React即可用开发web应用程序，也可以使用[React Native](https://reactnative.dev/)来开发移动端应用，可以使用React创建跨平台应用。

## 如何使用React开发一个新项目

我们可以通过启动一个项目并安装所有依赖项来从头创建一个React应用。 但最简单的办法是通过以下命令[create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)来创建：

```bash
npx create-react-app my-app
```

**注意：** my-app是我们创建的应用的名称，你可以根据自己的选择修改。

更多相关信息可以查阅[这篇文章](https://www.freecodecamp.org/news/get-started-with-react-for-beginners/).

## DOM代表什么？

术语“DOM”代表了文档对象模型（**D**ocument **O**bject **M**odel），指的是将网络应用的整个用户界面表示为一个树状数据结构。

### DOM的种类

DOM的种类有两种：虚拟DOM和真实DOM。

## React的优缺点

以下是React的优缺点:

### React的优点

1.  它为 JavaScript 开发人员提供了更短的学习曲线，并且由于其活跃的社区，它提供了大量的手册、教程和培训材料。
2.  React易搜索。
3.  它使创建丰富的 UI 和自定义组件变得更加容易。
4.  React渲染速度快。
5.  使用 JSX 可以让我们编写更简单、更吸引人且更易于理解的代码。

### React的缺点

1.  因为 React 是一个前端库，所以需要其他语言和库来构建一个完整的应用程序。
2.  因为采用了JSX，所以对于没有经验的程序员来说可能很难理解。
3.  由于开发周期短，现有文档很快就会过时。

## 什么是JSX？

JavaScript XML被缩写为JSX。JSX能够简化React中HTML的创建，从而产生更多的可读和可理解的标记。

例如：

```javascript
const App = () => {
  return (
    <div>
       <h1>Hello World</h1>
    </div>
  )
}
```

更多React中的JSX，[可以阅读这篇文章](https://www.freecodecamp.org/news/jsx-in-react-introduction/).

## 为什么浏览器不能读取JSX？

JSX并不是有效的JavaScript代码，浏览器没有内置读取和理解JSX的功能。我们需要将JSX编译成浏览器可以理解的JavaScript代码。所以我们使用[Babel](https://babeljs.io/)，一个JavaScript的编译器/转译器来实现这个功能。

注意： [create-react-app](https://github.com/facebook/create-react-app)在内部使用Babel进行JSX到JavaScript的转换，但你也可以使用Webpack设置自己的babel配置。

更多React中的JSX，[可以阅读这篇文章](https://www.freecodecamp.org/news/jsx-in-react-introduction/).

## 组件是什么？

组件是一个独立的、可复用的代码块，它将用户界面分成更小的部分，而不是在单个文件中构建整个UI。

React 中有两种组件：函数式组件和类组件。

### 什么是类组件？

类组件是返回JSX的ES6类，必须使用React扩展。因为在React的早期版本（16.8）中不能在函数组件内使用状态，所以函数组件只用于渲染UI。

例如：

```javascript
import React, { Component } from 'react'
export default class App extends Component {
  render() {
    return (
      <div>
         <h1>Hello World</h1>
      </div>
    )
  }
}
```

阅读[这篇文章](https://www.freecodecamp.org/news/react-components-jsx-props-for-beginners/)了解更多React组件和组件类型。

### 什么是函数组件？

一个返回React元素的JavaScript/ES6函数被称为函数组件（JSX）。

自从引入React Hooks以来，我们已经能够在函数式组件中使用状态，因为语法更简洁，很多人都采用这个方法。

例如：

```javascript
import React from 'react'
const App = () => {
  return (
    <div>
       <h1>Hello World</h1>
    </div>
  )
}
export default App;
```

阅读[这篇文章](https://www.freecodecamp.org/news/react-components-jsx-props-for-beginners/)了解更多React组件和组件类型。

### 函数组件和类组件之间的区别

<table style="width: 100%;border-spacing: 0;border: 1px solid #c1c7cd;word-break: break-word;"><tbody><tr><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 0;border-bottom-width: 0;border-right-width: 0;border-left-width: 0;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4"><strong> &nbsp;函数组件 &nbsp; &nbsp; </strong></span><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></div></td><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 0;border-bottom-width: 0;border-right-width: 0;border-left-width: 1px;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4"><strong>&nbsp;类组件 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong></span></div></td></tr><tr><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 0;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">函数式组件是一个 JavaScript/ES6 函数，它接受一个参数、props 并返回 JSX。</span></div></td><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 1px;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">要创建一个一个类组件，必须从React中继承。创建一个组件和一个返回React元素的渲染函数。</span></div></td></tr><tr><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 0;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">函数组件中没有渲染方法</span></div></td><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 1px;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">必须使用render()方法返回JSX</span></div></td></tr><tr><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 0;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">函数组件从上至下运行，一旦返回就无法保持活动状态。</span></div></td><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 1px;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">类组件被实例化，各种生命周期方法根据类组件的阶段保持活跃并运行和调用。</span></div></td></tr><tr><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 0;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">它们也被称为无状态组件，因为它们只接受数据并以某种形式显示，它们主要负责UI渲染。</span></div></td><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 1px;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">它们也被称为有状态组件，因为它们实现了逻辑和状态。</span></div></td></tr><tr><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 0;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">不能在函数组件中使用React生命周期方法。</span></div></td><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 1px;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">可以在类组件中使用React生命周期方法。</span></div></td></tr><tr><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 0;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">Hooks如</span><span class="inline-code author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4"><span style="font-family: monospace; background-color: #f7f9fa; color: #1b2733; border: 1px solid rgba(208,212,217,0.5); margin: 0 0 0 -1px;">useState()</span></span><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">被采用以使得函数组件有状态。</span></div></td><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 1px;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">在类组件中要使用不同的语法来实现hook。</span></div></td></tr><tr><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 0;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">不使用构造函数。</span></div></td><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 1px;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">用构造函数来存储状态&nbsp;</span></div></td></tr></tbody></table>

## 如何在React中使用CSS

使用CSS设置React应用程序样式的方法有3种：

-   内联样式
-   外部样式
-   JS中的CSS

更多信息，可以阅读[这篇关于设置React样式的文章](https://www.freecodecamp.org/news/how-to-style-react-apps-with-css/)。

## React中的render()的用途是什么？

在类组件中使用`Render()`，来返回在组件中显示的HTML。 它被用作读取props和state并将JSX代码返回到应用的根组件。

## 什么是Props？

Props也被称作属性。它们将数据从一个组件传递到另一个组件（从父组件到子组件）。它们通常被用来呈现动态数据。

注意：子组件永远不能将props发送到父组件，因为此流程是单向的（父到子）。

例如：

```javascript
function App({name, hobby}) {
    return (
      <div>
        <h1>My name is {name}.</h1>
        <p>My hobby is {hobby}.</p>
      </div>
    );
}

export default App;
```

更多信息，可以阅读[这篇讲解React Props是如何运作的文章](https://www.freecodecamp.org/news/how-to-use-props-in-react/)。

## React中的State是什么？

State 是一个内置的 React 对象，用于在我们的组件中创建和管理数据。它与 props 的不同之处在于它用于存储数据而不是传递数据。

State是可变的（数据可以更改）并且可以通过`this.state()`访问。

例如：

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe"
    };
  }

  render() {
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
      </div>
    );
  }
}
```

## 如何更新一个React组件的State

需要知道一个重要的信息是，当我们直接更新state时，它不会重新渲染组件——这意味着我们看不到更新。

如果需要重新渲染，我们要使用 `setState()`方法，它会更新组件的状态对象并重新渲染组件。

例如：

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe"
    };
  }
  changeName = () => {
    this.setState({name: "Jane Doe"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <button
          type="button"
          onClick={this.changeName}
        >Change Name</button>
      </div>
    );
  }
}
```

更多信息可以参考[这里](https://www.freecodecamp.org/news/react-js-for-beginners-props-state-explained/)。

## 如何区分State和Props

State和props是具有不同功能的JavaScript对象。

props 用于将数据从父组件传输到子组件，而 state 是本地数据存储，仅对组件可用，不能与其他组件共享。

## React中的事件是什么？

在React中，事件是一个可以由用户行为或系统生成的事件触发的动作。鼠标点击、网页加载、按键、窗口大小调整、滚动和其他交互都是事件的例子。

例子：

```javascript
// 类组件
<button type="button" onClick={this.changeName} >Change Name</button>

// 函数组件
<button type="button" onClick={changeName} >Change Name</button>
```

## 如何在React中处理事件

React中的事件处理方式与DOM元素类似。我们必须考虑的一个区别是事件的命名，事件是用camelCase而不是小写命名的。

例子：

### 类组件

```javascript
class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('This button was Clicked');
  }
  render() {
    return (
      <div>
         <button onClick={handleClick}>Click Me</button>
      </div>
   );
  }
}
```

### 函数组件

```javascript
const App = () => {
   const handleClick = () => {
      console.log('Click happened');
   };
   return (
      <div>
         <button onClick={handleClick}>Click Me</button>
      </div>
   );
};
export default App;
```

## 如何给事件处理器穿参

在函数组件中， 我们可以这样做：

```javascript
const App = () => {
   const handleClick = (name) => {
      console.log(`My name is ${name}`);
   };
   return (
      <div>
         <button onClick={() => handleClick('John Doe')}>Click Me</button>
      </div>
   );
};
export default App;
```

在类组件中，我们可以这样做：

```javascript
class App extends React.Component {
  call(name) {
    console.log(`My name is ${name}`);
  }
  render() {
    return (
      <button onClick= {this.call.bind(this,"John Doe")}>
        Click the button!
      </button>
    );
  }
}
export default App;
```

## 什么是Redux？

Redux 是一个流行的开源JavaScript库，用于管理和集中应用程序状态。它通常与React或任何其他视图库一起使用。

更多[redux信息可以阅读这篇文章](https://www.freecodecamp.org/news/redux-tutorial-for-beginners/#:~:text=Redux%20is%20a%20popular%20open,you%20how%20to%20use%20Redux.)。

## 什么是React Hooks？

React钩子在16.8版中被加入，使我们能够使用状态和其他React功能，而不必写一个类。

它们不在类中运行，而是帮助我们从函数组件中挂钩到 React 状态和生命周期特性。

### 我们从什么时候开始在React中使用hooks？

React团队在2018年10月下旬的React Conf(React大会）期间首次向全世界介绍了React Hooks，然后在 2019 年 2 月上旬使用 React v16.8.0。

## 解释useState()钩子

useState Hook是一个可以在函数组件中使用状态变量的存储。你可以把初始状态传给这个函数，它将返回一个包含当前状态值（不一定是初始状态）的变量和另一个更新这个值的函数。

例子：

```javascript
import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      // ...
    </div>
  );
}
```

## 解释useEffect()钩子

useEffect Hook 允许您在组件中执行副作用，例如数据获取、直接 DOM 更新、setTimeout() 之类的计时器等等。

这个钩子接受两个参数：回调和依赖项，它们允许您控制何时执行副作用。

注意：第二个参数是可选的。

例子：

```Javascript
import React, {useState, useEffect} from 'react';

const App = () => {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  
  return(
    <div>
      // ...
    </div>
  )
}

export default App;
```

## useMemo()钩子的用途是什么？

 `useMemo()` 钩子在函数组件中使用来记忆昂贵的函数，以便它们仅在设置输入更改时调用，而不是每次渲染时调用。

例子：

```javascript
const result = useMemo(() => expensivesunction(input), [input]);
```

这类似于useCallback钩子，用于优化Reac 函数组件的渲染行为。 useMemo用于记忆昂贵的函数，以便不必在每次渲染时调用它们。

## useRefs钩子是什么？

`useRefs()`钩子，也被称为References钩子，用于存储可变的值，当它们被更新时不需要重新渲染。它也被用来存储对特定React元素或组件的引用，当我们需要DOM测量或直接向组件添加方法时，这很有用。

useRefs的使用场景：

-   调整焦点，并在文本和媒体播放之间进行选择。
-   使用第三方DOM库。
-   启动命令式动画。

例子：

```javascript
import React, {useEffect, useRef} from 'react';

const App = () => {
  const inputRef = useRef(null)
  
  useEffect(()=>{
    inputElRef.current.focus()
  }, [])
  
  return(
    <div>
      <input type="text" ref={inputRef} />
    </div>
  )
}

export default App;
```

## 什么是自定义钩子？

自定义钩子是你编写的一个JavaScript函数，允许你在多个组件之间共享逻辑，这在以前的React组件中是不可能的。

如果你对它是如何运作的感兴趣，这里有一个篇文章[分步骤指导你构建自己的自定义钩子](https://www.freecodecamp.org/news/how-to-create-react-hooks/)。

## React的上下文是什么？

上下文的目的是为React组件树共享 "全局 "数据，允许数据向下传递并在我们的React应用中需要的任何组件中使用（消费），而不需要使用props。它允许我们在我们的组件之间更容易地分享数据（状态）。

你可以在这篇[React上下文指南](https://www.freecodecamp.org/news/react-context-for-beginners/)中获取更多信息。

## 什么是React Router？

React 路由器是 React 应用程序中使用的标准库，用于处理路由并允许在各种组件的视图之间导航。

将此库安装到您的 React 项目中就像在终端中输入以下命令一样简单：

```bash
npm install – -save react-router-dom
```

## 总结

在这个教程中，我们回顾了一些React面试问题，以帮助你准备面试。我们FreeCodeCamp的所有人都祝愿你在面试中取得好成绩。

如果你想学习更多的知识并掌握React，以便在实际的面试环节有好的表现，而不是试图同时学习几门课程，找到一个有用的教程并完成它。 可以尝试freeCodeCamp的[2022年免费React课程](https://www.freecodecamp.org/news/free-react-course-2022/)或者[学习React - 初学者完全课程](https://www.freecodecamp.org/news/learn-react-course/)。
