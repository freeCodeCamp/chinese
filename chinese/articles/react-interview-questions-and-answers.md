> -  原文地址：[React Interview Questions – Interview Prep with Answers and Examples](https://www.freecodecamp.org/news/react-interview-questions-and-answers/)
> -  原文作者：[Joel Olawanle](https://www.freecodecamp.org/news/author/joel-olawanle/)
> -  译者：Papaya HUANG
> -  校对者：

![React Interview Questions – Interview Prep with Answers and Examples](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/cover-template.jpg)

React是一个用于创建用户界面的JavaScript库。它被用于超过3万个实时网站，并拥有超过7万个GitHub星。

根据[2021年Stack Overflow开发者调查报告](https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-web-frameworks)的数据显示：React已经超越jQuery成为最流行的 Web框架，占据了大约40.14%的市场份额。除此之外，React也是最受欢迎的库，每四个开发人员中就有一个在使用它。

包括 LinkedIn、Twitter和AirBnB在内的8千多个行业领导者使用React。

React开发者在美国的平均年薪是12万美元，许多企业和公司都使用React，所有它们在不断寻找新的React人才。

在这篇文章中，我们将介绍一些React基础知识，看一看相关面试问题及其正确答案，以帮助你在React面试中取得成功。

## React是什么？

React是一个用于创建用户界面的开源前端JavaScript库。其声明性的、高效的、灵活的特点，以及坚持基于组件的方法，使得我们可以使用它创建可复用的UI组件。

开发人员主要使用React来创建单页应用程序，该库只专注于[MVC](https://zh.m.wikipedia.org/zh-hans/MVC)的视图层。它的速度也非常快。

## React的特点

React的许多特性使其与众不同，这里有几个亮点：

-   React采用了虚拟DOM，而不是真实/浏览器DOM。
-   React采用单向数据绑定。
-   React即可用于开发web应用程序，也可以使用[React Native](https://reactnative.dev/)来开发移动端应用，所以可以使用React创建跨平台应用。

## 如何使用React开发一个新项目

我们可以通过初始化一个项目并安装所有依赖项来从头创建一个React应用。 但最简单的办法是通过以下命令——[create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)来创建：

```bash
npx create-react-app my-app
```

**注意：** my-app是我们创建的应用的名称，你可以根据自己的喜好修改。

更多相关信息可以查阅[这篇文章](https://www.freecodecamp.org/news/get-started-with-react-for-beginners/)。

## DOM代表什么？

术语“DOM”代表了文档对象模型（**D**ocument **O**bject **M**odel），指的是将web应用的整个用户界面表示为一个树状数据结构。

### DOM的种类

DOM的种类有两种：虚拟DOM和真实DOM。

## React的优缺点

以下是React的优缺点:

### React的优点

1.  对于JavaScript 开发人员来说，React的学习曲线更短，并且由于社区活跃，有大量的手册、教程和培训材料。
2.  React易使用搜索引擎搜索。
3.  React降低了创建丰富的 UI 和自定义组件的难度。
4.  React渲染速度快。
5.  使用 JSX 可以让我们编写更简单、更吸引人且更易于理解的代码。

### React的缺点

1.  React只是一个前端库，所以需要搭配其他语言和库来构建一个完整的应用程序。
2.  JSX对于没有经验的程序员来说可能很难上手。
3.  由于开发周期短，现有文档很快就会过时。

## 什么是JSX？

JavaScript XML被缩写为JSX。JSX使得在React创建HTML更加容易，标记可读性更强，更容易被理解。

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

想了解更多关于React中的JSX的信息，[可以阅读这篇文章](https://www.freecodecamp.org/news/jsx-in-react-introduction/)。

## 为什么浏览器不能读取JSX？

JSX并不是有效的JavaScript代码，浏览器没有内置读取和理解JSX的功能。我们需要将JSX编译成浏览器可以理解的JavaScript代码。所以我们使用[Babel](https://babeljs.io/)，一个JavaScript的编译器/转译器来实现这个功能。

注意： [create-react-app](https://github.com/facebook/create-react-app)的内部使用Babel进行JSX到JavaScript的转换，但你也可以使用Webpack设置自己的babel配置。

想了解更多React中的JSX的信息，[可以阅读这篇文章](https://www.freecodecamp.org/news/jsx-in-react-introduction/)。

## 组件是什么？

组件是一个独立的、可复用的代码块，它将用户界面分成更小的部分，而不是在单个文件中构建整个UI。

React 中有两种组件：函数式组件和class组件。

### 什么是class组件？

class组件是返回JSX的ES6类，必须从React继承。因为在React的早期版本（16.8）中不能在函数组件内使用状态，所以函数组件只用于渲染UI。

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

你可以阅读[这篇文章](https://www.freecodecamp.org/news/react-components-jsx-props-for-beginners/)了解更多React组件和组件类型。

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

你可以阅读[这篇文章](https://www.freecodecamp.org/news/react-components-jsx-props-for-beginners/)了解更多React组件和组件类型。

### 函数组件和class组件之间的区别

<table style="width: 100%;border-spacing: 0;border: 1px solid #c1c7cd;word-break: break-word;"><tbody><tr><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 0;border-bottom-width: 0;border-right-width: 0;border-left-width: 0;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4"><strong> &nbsp;函数组件 &nbsp; &nbsp; </strong></span><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></div></td><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 0;border-bottom-width: 0;border-right-width: 0;border-left-width: 1px;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4"><strong>&nbsp;class组件 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong></span></div></td></tr><tr><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 0;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">函数式组件是一个JavaScript/ES6函数，它接受一个参数、props并返回JSX。</span></div></td><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 1px;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">要创建一个一个class组件，必须从React中继承。创建一个组件和一个返回React元素的渲染函数。</span></div></td></tr><tr><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 0;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">函数组件中没有渲染方法</span></div></td><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 1px;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">必须使用render()方法返回JSX</span></div></td></tr><tr><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 0;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">函数组件从上至下运行，一旦返回就无法保持活动状态。</span></div></td><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 1px;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">class组件被实例化，各种生命周期方法根据类组件的阶段保持活跃运行并且被调用。</span></div></td></tr><tr><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 0;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">它们也被称为无状态组件，因为它们只接受数据并以某种形式显示，它们主要负责UI渲染。</span></div></td><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 1px;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">它们也被称为有状态组件，因为它们实现了逻辑和状态。</span></div></td></tr><tr><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 0;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">不能在函数组件中使用React生命周期方法。</span></div></td><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 1px;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">可以在class组件中使用React生命周期方法。</span></div></td></tr><tr><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 0;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">Hooks如</span><span class="inline-code author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4"><span style="font-family: monospace; background-color: #f7f9fa; color: #1b2733; border: 1px solid rgba(208,212,217,0.5); margin: 0 0 0 -1px;">useState()</span></span><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">被采用以使得函数组件有状态。</span></div></td><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 1px;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">在class组件中要使用另外的语法来实现hook。</span></div></td></tr><tr><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 0;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">不使用构造函数（constructor）。</span></div></td><td style="border-color: #c1c7cd;border-style: solid;border-top-width: 1px;border-bottom-width: 0;border-right-width: 0;border-left-width: 1px;min-width: 50px;min-height: 20px;padding: 5px 8px;word-break: normal;vertical-align: top;"><div dir="auto" style="" class="ace-line gutter-author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4 ace-ltr"><span class=" author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz82zpihz77zcerkden8iz78zz86zz75zz66zz71z0z85zz87zz69zqrz72zz85z0z77zz81z4">用构造函数（constructor）来存储状态&nbsp;</span></div></td></tr></tbody></table>

## 如何在React中使用CSS

使用CSS设置React应用程序样式的方法有3种：

-   内联样式
-   外部样式
-   JS中的CSS

更多信息，可以阅读[这篇关于设置React样式的文章](https://www.freecodecamp.org/news/how-to-style-react-apps-with-css/)。

## React中的render()的用途是什么？

在class组件中使用`Render()`，来返回在组件中显示的HTML。 它被用作读取props和state并将JSX代码返回到应用的根组件。

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

向更多信息，可以阅读[这篇讲解React Props是如何运作的文章](https://www.freecodecamp.org/news/how-to-use-props-in-react/)。

## React中的State是什么？

State是一个React的内置对象，用于在组件中创建和管理数据。它与props的不同之处在于它用于存储数据而不是传递数据。

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

如果需要重新渲染，我们要使用 `setState()`方法，它会更新组件的state对象并重新渲染组件。

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

props用于将数据从父组件传输到子组件，而state是对本地数据的存储，仅对当前组件可用，不能与其他组件共享。

## React中的事件是什么？

在React中，事件是一个可以由用户行为或系统生成的事件触发的动作。鼠标点击、网页加载、按键、窗口大小调整、滚动和其他交互都是事件。

例子：

```javascript
// class组件
<button type="button" onClick={this.changeName} >Change Name</button>

// 函数组件
<button type="button" onClick={changeName} >Change Name</button>
```

## 如何在React中处理事件

React中的事件处理方式与DOM元素类似。但值得注意的是对事件的命名，在React中事件是用小驼峰式（camelCase）而不是纯小写。

例子：

### class组件

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

## 如何给事件处理程序传递参数

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

在class组件中，我们可以这样做：

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

Redux是一个流行的开源JavaScript库，用于集中管理应用程序的状态。它通常与React或其他视图库一起使用。

想了解更多[redux信息可以阅读这篇文章](https://www.freecodecamp.org/news/redux-tutorial-for-beginners/#:~:text=Redux%20is%20a%20popular%20open,you%20how%20to%20use%20Redux.)。

## 什么是React Hooks（钩子）？

React Hooks在16.8版中被加入，使我们能够在不编写class组件的情况下，使用state和其他React功能。

它们不在class组件中运行，而是辅助函数组件和React状态和生命周期特性相勾连。

### 我们从什么时候开始在React中使用hooks？

React团队在2018年10月下旬的React Conf(React年度大会）期间首次向全世界介绍了React Hooks，然后在 2019 年 2 月上旬 React v16.8.0中开始使用hooks。

## 解释useState() 

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

## 解释useEffect()

useEffect Hook允许你在组件中执行副作用，例如数据获取、直接更新DOM、使用setTimeout()之类的计时器等等。

这个hook接受两个参数：回调函数和依赖项，它们允许您控制何时执行副作用。

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

## useMemo() hook的用途是什么？

 `useMemo()` hook在函数组件中使用来记忆昂贵的函数，以便它们仅在设定的输入更改时调用，而不是每次渲染都调用。

例子：

```javascript
const result = useMemo(() => expensivesunction(input), [input]);
```

它类似于useCallback hook，用于优化React函数组件的渲染行为。 useMemo用于记忆昂贵的函数，以便不必在每次渲染时调用它们。

## useRef hook是什么？

`useRef()`hook，也被称为References hook，用于存储在更新时不需要重新渲染的可变值。也被用来存储特定React元素或组件的引用，当我们需要测量DOM或直接向组件添加方法时能派上用场。

useRefs的使用场景：

-   调整焦点，在文本和媒体播放之间进行选择。
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

## 什么是自定义hook？

自定义hook式你自己编写的JavaScript函数，来在不同的组件之间共享某种逻辑，以前的React组件并不支持这个功能。

如果你对它是如何运作的感兴趣，可以参考这篇文章——[分步骤指导你构建自己的自定义hook](https://www.freecodecamp.org/news/how-to-create-react-hooks/)。

## React的context（上下文）是什么？

上下文的目的是为React组件树共享 "全局 "数据，允许数据向下传递，并在不使用props的情况下，让React应用中任何需要该数据的组件中使用（消费）。它使得组件之间分享数据（状态）更容易。

你可以在这篇[React上下文指南](https://www.freecodecamp.org/news/react-context-for-beginners/)中获取更多信息。

## 什么是React Router？

React Router是React应用程序中使用的标准库，用于处理路由并在各种组件的视图之间导航。

将此库安装到你的React项目中就像在终端中输入以下命令一样简单：

```bash
npm install – -save react-router-dom
```

## 总结

在这个教程中，我们回顾了一些React面试问题，以帮助你准备面试。FreeCodeCamp的所有工作人员都祝愿你在面试中取得好成绩。

与其同时对各种各样的课程浅尝则止，不如找一个教程并且完成它，这样你将收获得更多，并且掌握React，在面试环节披荆斩棘。如果有兴趣的话，可以尝试freeCodeCamp的[2022年免费React课程](https://www.freecodecamp.org/news/free-react-course-2022/)或者[学习React - 初学者完全课程](https://www.freecodecamp.org/news/learn-react-course/)。 
