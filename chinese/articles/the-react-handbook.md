> * 原文地址：[The React Handbook](https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/)
> * 原文作者：[Flavio Copes](https://www.freecodecamp.org/news/author/flavio/)
> * 译者：XuQuan-nikkkki
> * 校对者：

![React 使用手册](https://cdn-media-1.freecodecamp.org/images/1*m5aPLXkrWJs7xKsfYViJEg.png)

这份 React 使用手册遵循了 80/20 法则：花 20% 的时间学习 80% 主题相关的内容。 

在我看来，这种方法能够提供一份全面的概述。这部手册不会涵盖 React 相关的所有内容，但它会为你提供学习 React 和成为一名杰出的 React 开发者的必备基础。如果你认为这部手册还应该包含某些特定的内容，可以通过 Twitter [@flaviocopes](https://twitter.com/flaviocopes) 告诉我。

希望这本书能够帮你达到目的：**学习 React 基础知识**。

你可以通过 [reacthandbook.com](https://reacthandbook.com/) 获得PDF、ePub 和 Mobi 格式的电子书。

### 手册索引

#### 目录

[React 简介][3]  
[如何使用 create-react-app][4]

****SECTION 1****: MODERN JAVASCRIPT CORE CONCEPTS YOU NEED TO KNOW TO USE REACT

-   [Variables][5]
-   [Arrow functions][6]
-   [Rest and spread][7]
-   [Object and array destructuring][8]
-   [Template literals][9]
-   [Classes][10]
-   [Callbacks][11]
-   [Promises][12]
-   [Async/Await][13]
-   [ES Modules][14]

****SECTION 2****: REACT CONCEPTS

-   [Single Page Applications][15]
-   [Declarative][16]
-   [Immutability][17]
-   [Purity][18]
-   [Composition][19]
-   [The Virtual DOM][20]
-   [Unidirectional Data Flow][21]

****SECTION 3****: IN-DEPTH REACT

-   [JSX][22]
-   [Components][23]
-   [State][24]
-   [Props][25]
-   [Presentational vs container components][26]
-   [State vs props][27]
-   [PropTypes][28]
-   [React Fragment][29]
-   [Events][30]
-   [Lifecycle Events][31]
-   [Forms in React][32]
-   [Reference a DOM element][33]
-   [Server side rendering][34]
-   [The Context API][35]
-   [Higher order components][36]
-   [Render Props][37]
-   [Hooks][38]
-   [Code splitting][39]

****SECTION 4****: PRACTICAL EXAMPLES

-   [Build a simple counter][40]
-   [Fetch and display GitHub users information via API][41]

****SECTION 5****: STYLING

-   [CSS in React][42]
-   [SASS in React][43]
-   [Styled Components][44]

****SECTION 6****: TOOLING

-   [Babel][45]
-   [Webpack][46]

****SECTION 7****: TESTING

-   [Jest][47]
-   [Testing React components][48]

****SECTION 8****: THE REACT ECOSYSTEM

-   [React Router][49]
-   [Redux][50]
-   [Next.js][51]
-   [Gatsby][52]

[Wrapping up][53]

### React 视图库简介

#### React 是什么?

React 是一个 JavaScript 库，旨在简化可视化界面的开发。

它由 Facebook 开发，于 2013 年发布，包括 Facebook, Instagram 在内的很多被广泛使用的应用程序都使用了 React。

它的主要目标是通过将 UI 划分为组件集合，从而能够在任意时间点推断出组件界面和界面的状态。

#### React 为何如此风靡？

React 何以席卷了 web 前端开发领域呢？

#### 复杂性低于其他框架

React 发布时，Ember.js 和 Angular 1.x 是最主流的框架，但这两个框架都对代码施加了诸多约束，导致迁移现有应用并不容易。

React 则做到了易于已有项目的迁移，因为这也是 Facebook 的需求——将已有的代码库迁移到新框架。此外，这两个框架还由于过于深入造成很多麻烦，相比之下， React 只专注于 View 层，而非整个 MVC 框架。

#### 完美的时机

React 发布时，正值 Google 发布 Angular 2.x 之际，由于随之而来的向后不兼容和巨大的功能变化，使项目从 Angular 1 升级到 Angular 2 如同迁移到另一个框架一般困难，同时，React 承诺会带来代码执行速度上的优化，导致许多开发者乐于尝试 React。

#### Facebook 的支持

当然，如果最终成功的话，得到 Facebook 的支持将对使用 React 的项目大有裨益。

Facebook 目前对 React 展示出了极大的兴趣，并且看到了它作为开源项目的价值，这对于所有的使用 React 的开发者来说都是一大利好消息。

#### React 容易学吗？

尽管我说过 React 比其他框架要简单，但是深入学习 React 仍然很复杂，难度主要来自于与 React 集成的技术，像是 Redux 或 GraphQL。

React 本身是个非常小的 API，你基本上只用学习 4 个概念就能入门：

-   Components 组件
-   JSX
-   State 状态
-   Props 属性

这些内容都会在手册中展开。

#### 如何下载 React

你要如何下载 React 呢？

React 是一个库，说 _下载_ 听起来可能会有点奇怪，也许 _配置_ 这个词会更贴切一些，关键是你能理解这是要做什么。

配置 React 有许多不同的方法，以便在你的应用或网站上使用它。

#### 在网页中直接加载 React

最简单的方法是直接在网页中添加 React 的 JavaScript 文件。当你的 React 应用只需要和单个页面上的元素进行互动，而不用管理导航问题时，这种方法比较适用。

在这个例子中，只需在 `body` 底部添加两个 `script` 标签。

```html
<html>
  ...
  <body>
    ...
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/react/16.8.3/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.3/umd/react-dom.production.min.js"
      crossorigin
    ></script>
  </body>
</html>
```

> _请将版本号改为最新可用的 React 版本。_

例子中我们加载了 React 和 React DOM。为什么需要添加两个库呢？这是因为 React 是 100% 独立于浏览器的，它可以在浏览器以外的环境里使用（比如搭配 React Native 在移动设备中使用）。因此，这里需要添加 React DOM 来操作浏览器。

在这些标签之后，你就可以加载其他使用 React 的 JavaScript 文件了，甚至可以通过 `script` 标签内联 JavaScript 代码。

```html
<script src="app.js"></script>

<!-- or -->

```

使用 JSX 还需要额外的步骤：加载 Babel

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

并且给 `script` 加上属性为 `text/babel` 的 MIME 类型：

```html
<script src="app.js" type="text/babel"><;/script>
```

现在你就可以在 `app.js` 文件中添加 JSX 代码了：

```jsx
const Button = () => {
  return <button>Click me!</button>
}

```

可以看看这个简单的 Glitch 示例： [https://glitch.com/edit/#!/react-example-inline-jsx?path=script.js](https://glitch.com/edit/#!/react-example-inline-jsx?path=script.js)

通过 `script` 标签的方式非常适合搭建原型，并且无需复杂的配置流程就可以快速进入开发。

### 如何使用 create-react-app

`create-react-app` 是一个旨在帮你快速上手 React 的项目，它能够方便地实现多个页面的 React 应用。

你可以从使用 `npx` 开始。`npx` 是一种无需安装即可下载和执行 Node.js 命令的方法。`npx` 自带 `npm` （从 5.2 版本开始），如果你还没有下载 `npm` ，可以去 [nodejs.org](https://nodejs.org) 下载（`npm` 会和 Node 一起安装）。

如果你不确定你的 npm 版本，可以通过执行 `npm -v` 来看看是否需要更新。

> _提示： 如果你还不能熟练使用终端，可以看看我的[OSX 终端教程](https://flaviocopes.com/macos-terminal/)，它对于 Linux 同样适用。 - 很抱歉目前没有 Windows 教程，不过你可以向 Google 求助。_

当你执行 `npx create-react-app <app-name>` 命令时， `npx` 会下载最新版本的 `create-react-app` ，运行 `create-react-app` ，然后将它从你的系统中删除。这样做的好处是，你的系统上永远不会有过时的版本，因为每次运行时，你都会获得最新版本。

让我们开始吧：

```bash
npx create-react-app todolist
```

![](https://cdn-media-1.freecodecamp.org/images/bZgizsJA2eDZwRUPT9KmAuqaWq2z-i5JYO49)

这是当它运行完毕时的情形：

![](https://cdn-media-1.freecodecamp.org/images/yJPelCCT4muE3FcEci5CIDm4GEyy5rvdh6R5)

`create-react-app` 会在你指定的文件夹内创建一个文件结构（这个例子中是 `todolist`），同时初始化一个 Git 仓库。

此外，它还会在 `package.json` 文件中增加了一些命令，让你能够进入文件夹后，立马通过运行 `npm start` 命令来启动应用。

![](https://cdn-media-1.freecodecamp.org/images/bIcUqq3FBoasmTjSSeYJ1LA4yMndxfNF12nu)

![](https://cdn-media-1.freecodecamp.org/images/bD33lX4Yp0WYlgDNGCwr3Otftsstxvx1HvTQ)

除了 `npm start`, `create-react-app` 还预先设置了其他的命令：

-   `npm run build`: 在 `build` 文件夹中构建 React 应用的文件，方便随时部署到服务器上
-   `npm test`: 通过 [Jest][60] 运行测试套件
-   `npm eject`: 弹出 `create-react-app` 配置

尽管 `create-react-app` 自动完成了很多操作，但如果你还想对项目有进一步的调整，可以通过弹出项目配置来实现。

毕竟 `create-react-app` 提供的是主流配置方案，只提供了有限的自定义选项，因此可能会出现无法满足你的项目的特有需求的情况。

当你弹出配置后，就无法自动更新配置了，但是你可以更灵活地配置 [Babel][61] 和 [Webpack][62]。

弹出配置的操作是不可逆的。当你弹出设置后，应用目录中会出现 2 个新文件夹，分别是 `config` 和 `scripts`。它们包含了配置内容，你可以在里面修改配置。

> _如果你的 React 应用使用的是老版本的 React，可以通过在应用中添加 `console.log(React.version)` 来查看 React 的版本，接着运行 `yarn add [react@16.7][63]` 更新 React 的版本，yarn 会提醒你可更新的版本（选择最新的版本）。再运行 `yarn add [react-dom@16.7][64]` 更新 `react-dom`（将 16.7 替换成当前可用的最新版本号_

#### CodeSandbox

在 [https://codesandbox.io/s](https://codesandbox.io/s) 上选择 "React" ，无需安装就可以使用 `create-react-app` 。

![](https://cdn-media-1.freecodecamp.org/images/DQRfUlIow3Z-icJy6XcMwTWh7gd8ZCwac02l)

CodeSandbox 是个无需在本地安装就能启动 React 项目的好方法。

#### Codepen

另一个法法是使用 [Codepen][66]。

你可以使用已经预先配置了 React 且支持 Hooks 的 Codepen 入门项目：[https://codepen.io/flaviocopes/pen/VqeaxB][67]

Codepen 里的 "pens" 适合只包含一个 JavaScript 文件的快速项目，而 "projects" 则适合包含多个文件的项目。我们在搭建 React 应用时使用的大多是 "projects"。

使用 Codepen 时需要注意的是，由于 Codepen 的内部机制，在引入 ES 模块时不会使用 `import` 语法，以 `useState` 举例，引入时应这样使用：

```jsx
const { useState } = React
```

而不是：

```jsx
import { useState } from 'react'
```

### 第 1 部分： 使用 React 必知的 JavaScript 核心概念

#### 深入学习 React 前应该掌握的知识

想要学习 React，你必须提前掌握一些知识，尤其是在使用 React 的过程中会反复使用到的最新的 JavaScript 的特性。

有时候，人们认为 React 提供了某种特性，但实际上，这只是最新的 JavaScript 的语法。

尽管你不需要立马变成这方面的专家，但随着你深入学习 React，你需要更深入地掌握这些知识。

我会列举一系列帮助你快速入门的知识点。

### 变量

变量是指赋值给标识符的字面量，这样你就可以在程序中通过标识符来引用和使用字面量了。

JavaScript 中的变量没有指定数据类型。给变量赋值为某种特定的字面量类型后，即使再重新指定这个变量为其他类型的字面量，也不会导致类型报错或其他问题。

这也是为什么 JavaScript 被认为是“无类型”语言。

变量必须在使用前先声明。声明变量有 3 种方式：`var` , `let` , `const` 。这 3 种语法的使用方式也不尽相同。

#### 使用 `var` 声明变量

在 ES2015 之前，`var` 是唯一用于定义变量的语法。

```jsx
var a = 0
```

如果你忘记使用 `var`，则会给一个未声明的变量赋值，结果会有所不同。

如果是在严格模式下，这样的用法会报错。在早期的环境中（或禁用严格模式的情况下），这样做会初始化一个全局变量，并给它赋值。

如果声明变量时不给它赋值，那么这个变量的值会一直是 `undefined`，直到给它赋值。

```jsx
var a //typeof a === 'undefined'
```

你可以多次声明变量，并将之前的声明覆盖掉：

```jsx
var a = 1
var a = 2
```

你也可以在一个语句中一次声明多个变量：

```js
var a = 1, b = 2jsx
```

**作用域**是指代码中可以访问到变量的部分。

在函数外使用 `var` 声明的变量被赋值给全局对象，它拥有全局作用域，代码中的任何地方都可以访问到变量。在函数中使用 `var` 声明的变量被赋值给函数，它的作用域是函数内部，和函数的参数一样，只能在函数内部使用。

函数中定义的变量如果和全局变量重名了，函数中的变量在函数中会替代全局变量。

值得注意的是代码块（两个大括号之间）并不会定义新的作用域。只有定义函数的时候会创建新的作用域，因为 `var` 不会创建块作用域，只会创建函数作用域。

函数中定义的变量在函数的任意位置都可以访问到，即使是在函数末尾定义的变量也可以在函数开头访问到，这是因为 JavaScript 在执行代码时会将 _所有变量移到顶部_ （这种现象叫做**变量提升**）。为了避免混淆，应该在函数开始时声明所有变量。

#### 使用 `let` 定义变量

`let` 是 ES2015 引入的新特性，本质上是 `var` 的块级作用域版本。它的作用域仅限于定义它的代码块、声明语句或表达式，以及包含在它内部的代码块。

现在的 JavaScript 开发者倾向于选择只使用 `let` ，完全摒弃 `var`。

> _如果 `let` 语法有些晦涩，那么就把 `let color = 'red'` 理解成_ let the color be red（让颜色变成红的）_,这样会就好理解了_

不同于 `var`，在函数外使用 `let` 定义变量并不会创建全局变量。

#### 使用 `const` 定义变量

使用 `var` 或 `let` 声明的变量可以再次声明，重新赋值，但是 `const` 声明的变量一旦初始化，它的值就不可以再更改了，不能再次赋值。

```jsx
const a = 'test'
```

我们无法将另一个字面量赋值给常量 `a`。但如果 `a` 是一个提供了改变内部值的方法的对象，我们可以通过这个方法来修改 `a` 的值。

`const` 并不保证变量的值不变，它只能保证变量的引用不会被修改。

`const` 和 `let` 一样，有块级作用域。

现在的 JavaScript 开发者倾向于使用 `const` 来定义所有不会被重新赋值的变量。

为什么要这么做呢？因为我们应该使用最简单的方式来避免代码错误。

### 箭头函数

箭头函数是 ES6 / ECMAScript 2015 引入的新特性，这一特性的引入彻底改变了 JavaScript 代码的写法（和用法）。

在我看来，这一改变深得人心，你现在已经很少在代码库中看到 `function` 这一关键词的使用了。

从写法上来看，这一变化简单又受欢迎，因为它使你可以通过更简短的语法写函数，从原来的写法：

```jsx
const myFunction = function() {
  //...
}
```

变为：

```jsx
const myFunction = () => {
  //...
}
```

如果函数体只包含一条语句，你可以省略大括号，将所有内容写在一行里：

```jsx
const myFunction = () => doSomething()
```

参数通过括号传入：

```jsx
const myFunction = (param1, param2) => doSomething(param1, param2)
```

如果函数值只有一个参数，你可以把括号也省略掉：

```jsx
const myFunction = param => doSomething(param)
```

得益于这种简短的语法，箭头函数**鼓励使用小函数**。

### 隐式返回

箭头函数允许隐式返回：函数返回的值没有通过关键字 `return` 来返回。

当函数体只有一行语句时，值会隐式返回。

```jsx
const myFunction = () => 'test'

```

另一个例子是，当函数返回一个对象时，需要使用圆括号把返回的对象包起来，防止对象的大括号被认为是返回的函数体的大括号。

```jsx
const myFunction = () => ({ value: 'test' })

```

### 箭头函数中的 this

`this` 这个概念很难理解，因为它在不同的上下文中指向不同，在不同的 JavaScript 模式中（严格模式和非严格模式）也会有所不同。

弄清这个概念非常重要，因为箭头函数和普通函数在 `this` 的处理上大有不同。

通常定义一个对象的某个方法时，普通函数中的 `this` 指向对象本身，因此你可以这样操作：

```jsx
const car = {
  model: 'Fiesta',
  manufacturer: 'Ford',
  fullName: function() {
    return `${this.manufacturer} ${this.model}`
  }
}
```

调用 `car.fullName()` 会返回 `"Ford Fiesta"`。

箭头函数的 `this` 则会“继承”执行函数的上下文。箭头函数不会绑定 `this` ，因此它会顺着调用栈向上查询，因此这里的 `car.fullName()` 没有查找到 `this` ，会返回字符串 `"undefined undefined"`。

```jsx
const car = {
  model: 'Fiesta',
  manufacturer: 'Ford',
  fullName: () => {
    return `${this.manufacturer} ${this.model}`
  }
}
```
由于这一原因，箭头函数并不适用于对象的方法。

箭头函数也无法用于构造器，通过箭头函数来实例化一个对象会引发 `TypeError`。

**当不需要使用动态上下文时**，应该使用普通函数。

处理事件时也会有这一问题，DOM 事件监听器让 `this` 指向目标元素，如果事件处理器依赖 `this` ，那么使用普通函数更加合适：

```jsx
const link = document.querySelector('#link')
link.addEventListener('click', () => {
  // this === window
})

```

### 剩余运算符和扩展运算符

你可以通过扩展运算符 `...` 来扩展数组、对象或是字符串。

我们先以数组为例。如

```jsx
const a = [1, 2, 3]
```

你可以这样创建一个新的数组：

```jsx
const b = [...a, 4, 5, 6]
```

也可以这样复制一个数组：

```jsx
const c = [...a]
```

这一方法同样适用于对象。你可以这样复制一个对象：

```jsx
const newObj = { ...oldObj }
```

用于字符串时，扩展运算符会使用字符串的字符创建数组：

```jsx
const hey = 'hey'
const arrayized = [...hey] // ['h', 'e', 'y']
```

扩展运算符有非常方便的应用。其中的一个应用场景是可以将数组轻松转换成函数参数：

```jsx
const f = (foo, bar) => {}
const a = [1, 2]
f(...a)
```

（过去你需要通过 `f.apply(null, a)` 来实现，但是写起来既不优雅，可读性也不高）

**剩余运算符**与**数组解构**一起使用时非常方便：

```jsx
const numbers = [1, 2, 3, 4, 5]
[first, second, ...others] = numbers
```

还有**扩展运算符**：

```jsx
const numbers = [1, 2, 3, 4, 5]
const sum = (a, b, c, d, e) => a + b + c + d + e
const sumOfNumbers = sum(...numbers)
```

ES2018 引入了剩余属性，用法和剩余运算符相同，不过适用于对象。

**剩余属性**：

```jsx
const { first, second, ...others } = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5
}

```

**扩展属性**允许通过组合在扩展运算符之后的对象属性来创建新的对象：

```jsx
const items = { first, second, ...others }
items //{ first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }
```

### 对象和数组的解构

通过解构的语法，你可以只提取给定对象的特定值，并赋值给对应的变量。

```jsx
const person = {
  firstName: 'Tom',
  lastName: 'Cruise',
  actor: true,
  age: 54 //made up
}

```

可以提取 `name` 和 `age` 的值。

解构的语法同样适用于数组：

```jsx
const a = [1, 2, 3, 4, 5]
const [first, second] = a
```

以下语句通过索引 0、1、4 从数组 `a` 中取值创建了 3 个新的变量。

```jsx
const [first, second, , , fifth] = a
```

### 模板字符串

模板字符串是 ES2015 / ES6 引入的新特性，相较于 ES5 和之前的语法，它允许你通过更灵活的方式使用字符串。

新的语法乍看之下非常简单，不过是用倒引号取代了原先的单引号或双引号：

```jsx
const a_string = something
```

但模板字符串提供了许多普通字符串不具备的特性，具体来说：

-   模板字符串的语法可以定义多行字符串
-   能够方便地在字符串中插入变量和表达式
-   可以在模板标签中创建 DSL（DSL指领域特定语言，比如在 React 的样式组件中使用 CSS）

让我们来逐个深入了解。

#### 多行字符串

在 ES6 之前，如果想要创建一个多于两行的字符串，你需要在一行代码的末尾加上 `\` 。

```
const string =
  'first part \
  second part'
```

这样虽然是通过两行代码创建的字符串，但渲染的结果仍是一行：

`` `first part second part` ``

要创建多行显示的字符串，你需要在每行末尾加上 `\n`，像这样：

```
const string =
  'first line\n second line'
```

或是：

```
const string = 'first line\n' + 'second line'
```

模板字符串让创建多行字符串变得更容易。

一旦使用倒引号开始创建模板字符串，在需要新的一行时，你只需要敲回车就行，不需要添加其他特殊字符，字符串会按照原样渲染：

```
const string = Hey
this
string
is awesome!
```

模板字符串中，空白符都会生效，因此这样输入字符串：

```
const string = First
                Second
```

渲染的结果会如下：

```
First
                Second
```

想要避免这个问题有个简单的方法，在模板字符串的结束倒引号后面加上 `trim()` 方法，它会消除第一个字符前的空白符：

```
const string = First
Second.trim()
```

#### 插入表达式

模板字符串可以方便地在字符串中插入变量和表达式。

你可以通过 `${...}` 语法来实现：

```
const myVariable = 'test'
const string = `something ${myVariable}` //something test
```

在 `${}` 中可以添加任何内容，包括表达式：

```
const string = `something ${1 + 2 + 3}`
const string2 = `something ${foo() ? 'x' : 'y'}`
```

### 类

2015 年， ECMAScript 6 (ES6) 标准引入了类。

JavaScript 通过一种不常见的方式来实现继承：原型继承。在我看来，[原型继承][68]是很好的方法，但是和其他流行的基于类的编程语言实现继承的方式不太一样。

学习 Java 或 Python 或其他语言的人很难理解 JavaScript 原型继承的复杂性，因此 ECMAScript 委员会决定通过给原型继承加上语法糖，使其实现方式更接近其他基于类的编程语言实现原型继承的方式。

这点非常重要：本质上 JavaScript 实现继承的方式没有变，但你可以通过常见的方式来获取对象的原型了。

#### 类的定义

这是类的写法：

```
class Person {
  constructor(name) {
    this.name = name
  }
  hello() {
    return 'Hello, I am ' + this.name + '.'
  }
}
```

类有一个标识符，我们可以利用这个标识符，通过 `new ClassIdentifier()` 的方法来创建一个新的对象。

初始化对象将调用 `constructor` 方法，调用时会传入所有创建对象时传入的参数。

类还能拥有它所需的各种方法。在这个例子中， `hello` 就是其中一个方法，它可以被所有通过这个类创建的对象调用：

```
const flavio = new Person('Flavio')
flavio.hello()
```

#### 类的继承

一个类可以扩展另一个类，并且使用这个类初始化的对象将继承两个类的所有方法。

如果继承的类与继承结构中更高级别的类拥有相同名字的方法，则级别上更接近这个类的方法生效：

```
class Programmer extends Person {
  hello() {
    return super.hello() + ' I am a programmer.'
  }
}
const flavio = new Programmer('Flavio')
flavio.hello()
```

（上面例子输出的结果是 `"_Hello, I am Flavio. I am a programmer._"`)

类没有显式的类变量声明，你必须通过构造器来初始化类变量。

在类内部，可以通过调用 `super()` 方法引用父类。

#### 静态方法

通常，方法定义在实例上，而非类上。

静态方法直接在类上执行：

```
class Person {
  static genericHello() {
    return 'Hello'
  }
}
Person.genericHello() //Hello
```

#### 私有方法

JavaScript 没有内置的方法定义私有方法或受保护方法。

尽管有替代方案，但我不打算在这里讨论。

#### Getters 和 setters

你可以通过给方法添加 `get` 或 `set` 作为前缀来创建 getter 和 setter ，这两种方法基于你要执行的操作有所不同：获取变量值或修改变量值。

```
class Person {
  constructor(name) {
    this.name = name
  }
  set name(value) {
    this.name = value
  }
  get name() {
    return this.name
  }
}
```

如果只有 getter，变量值无法修改，任何尝试修改变量值的操作都会被忽略：

```
class Person {
  constructor(name) {
    this.name = name
  }
  get name() {
    return this.name
  }
}
```

如果只有 setter，你可以修改变量值，但是无法在外部获取变量值：

```
class Person {
  constructor(name) {
    this.name = name
  }
  set name(value) {
    this.name = value
  }
}
```

### 回调函数

计算机被设计成异步的。

异步意味着事务可以独立于主程序流程发生。

在当前的消费计算机中，每个程序都运行特定的时间段，然后停止执行，以让另一个程序继续执行。由于程序与程序之间切换的速度太快，以至于我们根本无法察觉，使得我们认为我们的电脑是在同时处理多个程序，但这只是一种幻觉（除了多处理器电脑）

程序内部发送 `_interrupts_` 信号到主处理器来获取系统的注意。

我不会深入探讨过多，但是需要记住异步程序是很正常的，程序在不需要的时候会暂停执行，计算机在这段时间会执行其他事务。当计算机在等待一个网络请求的返回结果时，它在请求结束之前都不能暂停处理器。

通常，编程语言都是同步的，其中一些会在语言内部或通过其他库提供处理异步的方法。C、Java、C#、PHP、Go、Ruby、Swift、Python 都默认是同步的。其中一些会通过线程来处理异步，从而产生一个新的进程。

JavaScript 也默认是 **同步** 的，且是单线程。这意味着代码不能创建新的线程，并行执行。

各行代码是逐行执行的，如：

```
const a = 1
const b = 2
const c = a * b
console.log(c)
doSomething()
```

但 JavaScript 是为浏览器而生的语言，在最开始时，它的主要功能是回应用户的行为，如 `onClick`，`onMouseOver`，`onChange`，`onSubmit` 等。如何使用同步编程模板实现这些呢？

答案是在运行环境里。**浏览器**提供了一系列 API 来实现这些功能。

最近，Node.js 引入了非阻塞 I/O 环境，以将这一概念扩展到文件访问、网络调用等方面。

你无法知道用户何时会点击按钮，所以你要做的是**给点击事件定义一个事件处理器**，这个事件处理器接受一个函数，当事件被触发时，函数会被调用：

```
document.getElementById('button').addEventListener('click', () => {
  //item clicked
})
```

这就是所谓的**回调函数**。

回调函数作为一个值传给另一个函数，它只有在事件发生时被执行。我们之所以可以这样做，是因为 JavaScript 中函数是一等公民（头等函数），函数可以被赋值给变量，也可以传给其他函数（被称为**高阶函数**）。

常见做法是将客户端的代码包在 `window` 对象的 `load` 事件监听器中，当页面加载完成后执行回调函数。

```
window.addEventListener('load', () => {
  //window loaded
  //do what you want
})
```

回调函数除了用在 DOM 事件中，还被用在其他各处。

其中一个常见的场景是用在定时器中：

```
setTimeout(() => {
  // runs after 2 seconds
}, 2000)
```

XHR 请求也接受回调函数，在下面的例子中，回调函数被赋值给一个属性，当特定事件发生时，回调函数会被执行（在这个例子中，请求状态会改变）：

```
const xhr = new XMLHttpRequest()
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    xhr.status === 200 ? console.log(xhr.responseText) : console.error('error')
  }
}
xhr.open('GET', 'https://yoursite.com')
xhr.send()
```

#### 处理回调函数的错误

如何处理回调函数的错误呢？常见的策略是使用 Node.js 所采用的方法：回调函数中的第一个参数是错误对象：**错误优先回调函数**

如果没有错误产生，这个对象就是 `null`。如果有错误，那么这个对象就包含错误的一些描述和其他信息。

```
fs.readFile('/file.json', (err, data) => {
  if (err !== null) {
    //handle error
    console.log(err)
    return
  }
  //no errors, process data
  console.log(data)
})
```

#### 回调函数的问题

回调函数非常适用于简单的情况。

但是每个回调函数都会增加一层逻辑嵌套，当你有很多回调函数时，代码就会很快变得复杂起来：

```
window.addEventListener('load', () => {
  document.getElementById('button').addEventListener('click', () => {
    setTimeout(() => {
      items.forEach(item => {
        //your code here
      })
    }, 2000)
  })
})
```

这段代码只有简单的 4 层逻辑嵌套，我见过嵌套层级远超它的代码，看起来一点都不好玩。

我们要如何解决这个问题呢？

### 回调函数的替代方案

从 ES6 开始，JavaScript 引入了一些新的特性，能够让我们不通过回调函数来实现异步操作：

-   Promises (ES6)
-   Async/Await (ES8)

### Promises

Promise 是一种不需要在代码中加入太多回调函数就能处理异步代码的方法。

尽管 Promises 已经存在很多年了，在 ES2015 中才标准化并引入，并在 ES2017 中被异步函数取代。

**异步函数**以 Promise API 作为基础，因此，即使你在新代码中更倾向于使用异步函数而非 Promise，理解 Promise 也非常必要。

#### 概述 Promise 的工作原理

调用 Promise 时，它的初始状态是 **pending**。也就是说，调用者函数会继续执行，同时 Promise 也会自己执行，并给调用者函数一些反馈。

此时，调用者函数会等待 Promise 以**resolved**状态或**rejected**状态返回。由于 JavaScript 是异步的，因此，_当 Promise 执行时，调用者函数也在继续执行_。

#### 哪些 JS API 使用 Promise?

除了你写的代码和代码库中的代码，一些标准的现代 Web API 也使用 Promise 来实现，如 [Fetch][70] 和 [Service Workers][71]。

现在写 JavaScript 代码很难不用到 Promise，所以让我们来还好研究一下它。

#### 创建一个 Promise

Promise API 暴露了一个构造器，你可以通过 `new Promise()` 来初始化一个 Promise。

```
let done = true
const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})
```

如你看到的，Promise 会查看全局变量 `done`，如果 `done` 是 `true`，就会返回一个成功解决的 Promise，否则返回一个被拒绝的 Promise。

通过 `resolve` 和 `reject` ，我们可以返回一个值。在上面的例子中，我们返回了一个字符串，但也可以返回对象。

#### 使用 Promise

在上一部分，我们介绍了如何创建 Promise。

接下来我们看看如何使用 Promise。

```
const isItDoneYet = new Promise()
//...
const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(err)
    })
}
```

调用 `checkIfItsDone()` 会执行 `isItDoneYet()` Promise，并等待它返回结果，如果执行成功，则执行 `then` 函数，如果 Promise 执行过程中抛错，则会在 `catch` 回调函数中处理错误。

#### 链式调用 Promise

Promise 可以返回另一个 Promise，串成一个 Promise 链。

[Fetch API][72]是一个很好的链式调用 Promise 的例子，它是 XMLHttpRequest API 的顶层 API，我们可以通过它获取资源，并在资源获取成功后执行一系列链式 Promise。

Fetch API 的实现是基于 Promise 的机制，调用 `fetch()` 相当于通过 `new Promise()` 定义自己的 Promise 。

示例：

```
const status = response => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  }
  return Promise.reject(new Error(response.statusText))
}
const json = response => response.json()
fetch('/todos.json')
  .then(status)
  .then(json)
  .then(data => {
    console.log('Request succeeded with JSON response', data)
  })
  .catch(error => {
    console.log('Request failed', error)
  })
```

在这个例子中，我们调用 `fetch()` 方法，从域根目录下的 `todos.json` 文件中获取待办事项，并创建了一个 Promise 链。

运行 `fetch()` 返回一个[response][73]，它有很多属性，从中我们可以获知：

-   `status`, 一个代表 HTTP 请求的状态码
-   `statusText`, 状态信息，如果请求成功，会返回 `OK`

`response` 也有 `json()` 方法，它会返回一个将 response 成功返回的内容处理转换成 JSON 格式的 Promise。

基于上述前提，会发生以下情形：链中的第一个 Promise 是我们定义的函数名为 `status()` 的函数，它会检查 response 的状态，如果返回结果不是成功（状态码不是 200 ~ 299 之间的数字），就会拒绝这个 Promise。

这样会跳过 Promise 链中接下来的所有 Promise，直接跳到底部的 `catch()` 语句，输出日志“Request failed`text along with the error message`”。

如果请求成功了，会执行我们定义的 `json()` 函数。由于前一个 Promise 成功后返回 `response` 对象，这个对象会传入到第二个 Promise 中。

`json` 方法会返回处理过的 JSON 数据，并直接传入第三个 Promise。

```
.then((data) => {
  console.log('Request succeeded with JSON response', data)
})
```

接着输出了传入的数据。

#### 处理错误

在上面的例子中，在 Promise 链的最后加入了 `catch` 方法。

当 Promise 链的任何一处请求失败，并抛错或拒绝了 Promise 时，就会进入 Promise 链中最近的 `catch()` 分支中。

```
new Promise((resolve, reject) => {
  throw new Error('Error')
}).catch(err => {
  console.error(err)
})
// or
new Promise((resolve, reject) => {
  reject('Error')
}).catch(err => {
  console.error(err)
})
```

#### 级联错误

如果在 `catch()` 方法中抛错，你也可以用另一个 `catch()` 方法来处理报错，并一直这么级联下去。

```
new Promise((resolve, reject) => {
  throw new Error('Error')
})
  .catch(err => {
    throw new Error('Error')
  })
  .catch(err => {
    console.error(err)
  })
```

#### 用 `Promise.all()` 处理多个 Promise

如果你需要同时处理多个 Promise ,`Promise.all()` 可以让你定义一系列 Promise ,并在它们全部成功后执行其他内容。

示例:

```
const f1 = fetch('/something.json')
const f2 = fetch('/something2.json')
Promise.all([f1, f2])
  .then(res => {
    console.log('Array of results', res)
  })
  .catch(err => {
    console.error(err)
  })
```

ES2015 的解构赋值语法还可以这么做：

```
Promise.all([f1, f2]).then(([res1, res2]) => {
  console.log('Results', res1, res2)
})
```

不仅是使用 `fetch` 时可以这么做，**任何 Promise 都可以使用 `Promise.all()`**。

#### 用 `Promise.race()` 处理多个 Promise

`Promise.race()` 在传入的多个 Promise 中有一个成功时立即运行，它只会在第一个 Promise 请求成功时运行一次回调函数。

示例:

```
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one')
})
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two')
})
Promise.race([promiseOne, promiseTwo]).then(result => {
  console.log(result) // 'two'
})
```

### Async/Await

JavaScript 用很短的时间从回调函数发展到 Promise (ES2015)，并在 ES2017 中引入 async/await 语法让异步变得更为简单。

Async 函数是 Promise 和 generator 的结合，基本上，它是对 Promise 的更高层次的抽象。我再强调一次：**async/await 以 Promise 为基础**。

#### 为什么引入 async/await ?

async/await 减少了 Promise 的模板代码，消除了 Promise 链的“不可中断 Promise 链”的限制。

当 ES2015 引入 Promise 时，它旨在解决异步代码的问题，它也确实做到了。但是两年后拆分 ES2015 和 ES2017 时，很显然_它不是最终解决方案_。

引入 Promise 是为了解决臭名昭著的_回调地狱_问题，但是它本身却增加了语法上的复杂性。

基于为开发者提供更好的语法的目的，之后推出了**异步函数**。

它让异步代码看起来像是同步的，且不会阻碍后台。

#### 运行机制

异步函数会返回一个 Promise，如下面的例子：

```
const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000)
  })
}
```

当你想要**调用** `await` 后面的函数时，**调用的函数会暂停运行，直到 Promise 成功或被拒绝**。注意：调用函数必须用 `async` 定义。示例：

```
const doSomething = async () => {
  console.log(await doSomethingAsync())
}
```

#### 一个简单示例

这是一个用 async/await 运行异步函数的简单示例：

```
const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000)
  })
}
const doSomething = async () => {
  console.log(await doSomethingAsync())
}
console.log('Before')
doSomething()
console.log('After')
```

示例中的代码会在浏览器的控制台中输出：

```
Before
After
I did something //after 3s
```

#### 让所有的代码都变成 Promise

给任意函数加上 `async` 关键词意味着这个函数会返回一个 Promise。

尽管函数不一定是异步的，但它内部也会返回一个 Promise。

这也是为什么下面的代码是有效的：

```
const aFunction = async () => {
  return 'test'
}
aFunction().then(alert) // This will alert 'test'
```

它和下面的代码是一样的：

```
const aFunction = async () => {
  return Promise.resolve('test')
}
aFunction().then(alert) // This will alert 'test'
```

#### 代码可读性更好

如你在上面的例子中所见，和使用 Promise 链和回调函数比起来，现在代码看起来更简洁。

这是一个简单的例子，当代码变得复杂时，收益会更明显。

下面是通过 Promise 获取 JSON 资源，解析数据的示例：

```
const getFirstUserData = () => {
  return fetch('/users.json') // get users list
    .then(response => response.json()) // parse JSON
    .then(users => users[0]) // pick first user
    .then(user => fetch(/users/${user.name})) // get user data
    .then(userResponse => userResponse.json()) // parse JSON
}
getFirstUserData()
```

这是用 await/async 实现相同功能的示例：

```
const getFirstUserData = async () => {
  const response = await fetch('/users.json') // get users list
  const users = await response.json() // parse JSON
  const user = users[0] // pick first user
  const userResponse = await fetch(/users/${user.name}) // get user data
  const userData = await userResponse.json() // parse JSON
  return userData
}
getFirstUserData()
```

#### 处理多个异步函数

异步函数可以很容易地链接起来，与直接使用 Promise 相比，它的语法可读性更高。

```
const promiseToDoSomething = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 10000)
  })
}
const watchOverSomeoneDoingSomething = async () => {
  const something = await promiseToDoSomething()
  return something + ' and I watched'
}
const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
  const something = await watchOverSomeoneDoingSomething()
  return something + ' and I watched as well'
}
watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
  console.log(res)
})
```

以上代码会输出：

```
I did something and I watched and I watched as well
```

#### 更易调试

调试 Promise 并不容易，因为调试时会跳过异步代码。

async/await 让调试更加容易，因为对于解析器来说，它就像是同步代码一样。

### ES 模块

ES 模块是用于处理模块的 ECMAScript 标准。

尽管 Node.js 使用 CommonJS 标准多年，浏览器一直没有模块系统，因此每个主要决策（如模块系统）都要先由 ECMAScript 标准化，再由浏览器实现。

这个标准化过程随着 ES6 一同实现，浏览器已经开始实施该标准，并试图让所有内容保持一致，以相同的方式实现，目前 Chrome，Sarafi，Edge和Firefox（版本60以上）都已支持 ES 模块。

模块非常有用，因为它允许你封装各种功能，并将这些功能像库一样暴露给其他 JavaScript 文件。

#### ES 模块语法

引入模块的语法如下：

```
import package from 'module-name'
```

CommonJS 的语法如下：

```
const package = require('module-name')
```

模块就是一个 JavaScript 文件，它通过 `export` 关键词**输出**一个或多个值（对象、方法或变量）。比如，下面的模块就输出一个将字符串转换成大写的方法：

> `_uppercase.js_`

```
export default str => str.toUpperCase()
```

在这个例子中，模块只定义了一个方法，通过默认输出的方法输出**default export**，因此这个函数可以是匿名函数。否则，函数需要有名字来区分输出的值。

现在，**任何 JavaScript 模块**都可以引入 uppercase.js 提供的功能。

HTML 页面可以通过给 `<script>` 标签加上类型属性 `type="module"` 来引入模块：

```
<script type="module" src="index.js"><;/script>
```

> 注意：引入这个模块和 `defer` 加载脚本的方式一样。见[用延迟、异步的方法高效加载 JavaScript][74]

需要注意的是，任何通过 `type="module"` 加载的脚本都是在[严格模式][75]下加载的。

在例子中，`uppercase.js` 模块被定义为**默认输出**，因此当我们引入它时，我们可以给他指定一个我们希望的名字：

```
import toUpperCase from './uppercase.js'
```

并这样使用它：

```
toUpperCase('test') //'TEST'
```

你也可以通过绝对路径来引入另一个域上的模块：

```
import toUpperCase from 'https://flavio-es-modules-example.glitch.me/uppercase.js'
```

下面的语法也同样有效：

```
import { foo } from '/uppercase.js'
import { foo } from '../uppercase.js'
```

下面的语法则无效：

```
import { foo } from 'uppercase.js'
import { foo } from 'utils/uppercase.js'
```

引入时，要么使用绝对路径，或者在文件名前增加 `./` 或 `/`。

### 其他 import/export 配置

我们在前面看到这个示例：

```
export default str => str.toUpperCase()
```

这个例子中只有一个默认输出的内容。实际上，在文件中可以输出多个内容，语法如下：

```
const a = 1
const b = 2
const c = 3
export { a, b, c }
```

另一个模块可以这样引入所有内容：

```
import * from 'module'
```

你可以通过解构赋值引入模块中的部分内容：

```
import { a } from 'module'
import { a, b } from 'module'
```

引入时，可以用 `as` 给引入内容重新命名：

```
import { a, b as two } from 'module'
```

你可以引入默认输出的内容，也可以通过名字引入非默认输出的内容，如在 React 组件中常见的那样：

```
import React, { Component } from 'react'
```

你可以看看这个 ES 模块示例：[https://glitch.com/edit/#!/flavio-es-modules-example?path=index.html][77]

#### CORS

模块通过 [CORS][78] 加载。这意味着当你从其他域加载模块时，它们必须拥有有效的 CORS 头（如 `Access-Control-Allow-Origin: *`）才能跨域加载。

#### 不支持模块的浏览器呢？

结合使用 `type="module"` 和 `nomodule`：

```
<script type="module" src="module.js"></script>
<script nomodule src="fallback.js"></script>
```

ES 模块是现代浏览器引入的最大特性。它们是 ES6 的一部分，但是完善它们还有很长的路要走。

我们现在可以使用它们，但是也需要记住，引入太多模块会引发页面的性能问题，因为浏览器在运行时需要执行额外的步骤。

尽管浏览器引入了 ES 模块，但 Webpack 仍将扮演重要角色，因为尽管在语言中加入了这一特性，在客户端运行模块和 Node.js 运行模块仍然有巨大差异。

### 第二部分：React 概念

### 单页面应用

React 应用也被称为单页面应用。这是什么意思呢？

在浏览器远没有如今功能强大的时期，JavaScript 的性能也较差，每个页面都从服务器获取。每次点击页面都会向服务器发起一次新的请求，随后浏览器会加载新的页面。

只有极具创新性的产品才会使用不同的实现方式，并且尝试新的方法。

如今，随着诸如 React 之类的现代前端 JavaScript 框架的普及，应用通常被构建为单页面应用：你只用加载一次应用的代码（HTML、[CSS][79]、[JavaScript][80])，当你与应用程序交互时，浏览器不会向服务器发送新的请求，并从服务器返回新的页面文件，取而代之的是浏览器拦截事件，客户端会请求 JSON 文件，或是在服务器上执行操作，但用户看见的页面不会完全消失，这种行为方式更像是桌面应用。

单页面应用程序用 JavaScript 构建（或者至少被编译成 JavaScript），且在浏览器中工作。

技术并没有什么差异，但应用程序的工作原理和一些关键组成部分是不同的。

#### 单页面应用案例

一些著名的例子：

- Gmail
- Google 地图
- Facebook
- Twitter
- Google Drive

#### 单页面应用的优缺点

用户体验上，单页面应用要快得多，因为你能立即得到反馈，而不是等待客户端与服务器直接的通信完成，浏览器重新渲染页面。这是应用程序制造者的责任，但你可以通过过渡或加载以及任何可以提升用户体验的方式来让页面优于传统的流程。

除了给用户提供更快捷的体验，服务器也将消耗更少的资源，因为你可以专注于提供高效的 API，而不是在服务器端构建页面。

如果你还基于 API 构建移动端应用，那么这将是理想的选择，因为你可以完全复用服务器端已有的代码。

单页面应用非常易于转变成渐进式 Web 应用，从而能够提供本地缓存，并提供脱机服务（如果需要用户在线，则可以提供更好的错误信息）。

当不需要使用 SEO （搜索引擎优化）时，最好使用单页面应用。比如必须登录使用的应用程序。

尽管搜索引擎一直在优化，但仍然难以为为采用 SPA 技术而非传统的服务器渲染方式的页面建立索引。拿博客为例，如果你需要依赖搜索引擎，就不要考虑构建没有服务端渲染的单页面应用。

为单页面应用编码时，你需要写大量的 JavaScript 代码。由于应用会长时间运行，你更加需要当心可能造成内存泄漏的地方——过去你的页面的生命周期只有几分钟，现在一个单页面应用可能一次使用数个小时，如果应用存在内存泄漏问题，那么它会导致浏览器内存占用大幅升高，如果得不到处理，会给应用带来非常缓慢的用户体验。

单页面应用非常适合团队协作。后端工程师只用专注于 API，前端工程师则专注于在后端的 API 的基础上打造最好的用户体验。

单页面应用的缺点是重度依赖 JavaScript。这可能会导致应用在低配置设备上运行缓慢。此外，有些使用者可能会禁用 JavaScript，你需要考虑应用的可访问性。

#### 覆盖导航

由于摆脱了默认的导航栏，你需要手动管理 URL。

应用的这部分叫做路由。有些框架已经为你解决了这个问题（比如 Ember），还有一些则需要其他库来做这项工作（如 [React Router][81]）。

这有什么问题呢？早期，单页面应用的开发者们没有考虑到这个问题，从而导致了常见的“后退键失效”问题：在应用中切换页面时，URL没有变化（浏览器的默认导航被拦截了），当用户习惯性地点击后退键，企图退回到之前的页面时，应用退回到了很久之前访问的网站。

这个问题现在可以通过浏览器提供的 [History API][82] 来解决，但大多数情况下，你会使用内部使用了该 API 的库，比如 **React Router**。

### 声明式

React 是声明式的是什么意思呢？你读到的很多文章都会提到 React 是一个**声明式的构建 UI 的方法**。

React 使其“声明式方法”非常流行和超前，这一方法随着 React 渗透了前端世界。

它并不是一个新的概念，但相较于 HTML 模板，React 更加声明式地构建 UI：

- 你可以在不直接操纵 DOM 的情况下构建 Web 接口
- 你可以在不与真实的 DOM 事件交互的情况下构建事件系统

和声明式相反的是**命令式**。一个常见的例子是使用 jQuery 或 DOM 事件时查找元素，你会告诉浏览器确切的操作，而不是你需要什么。

React 声明式方法为我们抽象了这一点。我们只需要告诉 React 我们希望组件以什么方式渲染，之后引用组件时不必与 DOM 交互。

### 不可变性

在 React 编程中会遇到的一个概念是不可变性（与之相对的是可变性）。

这是个富有争议的话题，但无论你如何看待不可变性，React 和它的生态圈都强制如此，因此你至少需要知道为什么不可变性如此重要，以及它究竟是什么。

编程时，如果一个变量在创建后，它的值不可以更改的，那它就是不可变的。

尽管你可能没有意识到，但实际上，字符串就是不可变变量。字符串默认是不可变的，当你改变它的值时，实际上你创建了一个新的字符串，并赋予它与原来的字符串相同的变量名。

不可变变量的值无法更改，想要修改它的值，只能创建一个新的变量。

这一原理同样适用于对象和数组。

当你给数组新增一个元素时，不会直接修改数组，而是通过拼接原数组和新的元素来创建一个新数组。

对象不会被更新，而是在修改它前创建副本。

这一原理在 React 的很多地方都有体现。

比如，任何时候都不应直接修改一个组件的 `state` 属性，只能通过 `setState()` 方法来修改。

在 Redux 中，也无法直接修改 state，而是只能通过 reducers ，也就是方法来修改。

问题是为什么要这样呢？

原因有很多，但是最重要的原因是：

- 可以集中处理修改，比如在 Redux 的例子中，这样可以提高调试能力，并减少导致错误源。
- 代码会更简洁，且容易理解。你永远不会希望某个函数在你不知道的情况下修改某些值，因此不可变性能带来**可预测性**。当函数不修改已有对象，而是返回新对象时，这类函数被称为纯函数。
- 代码库会帮你优化代码。比如在 JavaScript 中，用新的对象取代旧的对象比修改已有对象更迅速，这会为你提升**性能**。

### 纯净性

在 JavaScript 中，当函数不修改已有对象，仅返回新对象时，被称为纯函数。

一个_纯_函数或方法不能有副作用，且在传入的数据不变的情况下，调用多次也返回相同的结果。

纯函数接收参数后，返回结果时不应修改传入的参数或其他任何值。

返回的结果仅受参数影响。在传入相同参数的情况下，即使调用 1 万次，它也始终返回同样的结果。

React 将这一概念应用在了组件上。React 组件是纯组件，且仅依赖传入的属性。

所有的函数组件都是纯组件：

```
const Button = props => {
  return <button>{props.message}</button>
}
```

如果 class 组件的输入仅依赖属性，那么也是纯组件：

```
class Button extends React.Component {
  render() {
    return <button>{this.props.message}</button>
  }
}
```

### 组合

编程时，你可以通过组合小的、集中的功能函数来构建更复杂的功能。

例如，通过使用 `map()` 从初始集合创建新的数组，再通过使用 `filter()` 来过滤结果：

```
const list = ['Apple', 'Orange', 'Egg']
list.map(item => item[0]).filter(item => item === 'A') //'A'
```

在 React 中，组合让你能够拥有很多很棒的优势。

你可以创建小的、精简的函数，基于它们来_组合_更多功能。那么如何做到呢？

#### 创建组件的专用版本

使用外部组件来扩展和专用化更通用的组件：

```
const Button = props => {
  return <button>{props.text}</button>
}
const SubmitButton = () => {
  return <Button text="Submit" />
}
const LoginButton = () => {
  return <Button text="Login" />
}
```

#### 以属性的方式传入方法

例如，一个组件可以专注于跟踪点击事件，当点击事件发生时，组件如何响应取决于容器组件：

```
const Button = props => {
  return <button onClick={props.onClickHandler}>{props.text}</button>
}
const LoginButton = props => {
  return <Button text="Login" onClickHandler={props.onClickHandler} />
}
const Container = () => {
  const onClickHandler = () => {
    alert('clicked')
  }
  return <LoginButton onClickHandler={onClickHandler} />
}
```

#### 使用 children

`props.children` 属性让你可以在其他组件内注入组件。

组件需要在 JSX 代码中输出 `props.children`:

```
const Sidebar = props => {
  return <aside>{props.children}</aside>
}
```

你可以用一种清晰的方式在组件中嵌入更多组件：

```
<Sidebar>
  <Link title="First link" />
  <Link title="Second link" />
</Sidebar>
```

#### 高阶组件

当组件接收一个组件属性，并返回一个组件时，它被称为高阶组件。

我们在后面会提到。

### 虚拟 DOM

在 React 出现之前，许多现有框架会在每次更改时直接操纵 DOM 节点。

第一个问题，什么是 DOM？

DOM (_Document Object Model 文档对象模型_)是页面的树形表示，从 `<html>` 标签开始，一直延伸到每一个被称为节点的子节点中。

它被保存在浏览器内存里，并且直接链接到你在页面中看到的内容。你可以通过 DOM 的 API 来遍历它，获取每一个节点，过滤节点或者修改节点。

如果你不使用如 jQuery 及其他库提供的抽象 API ，那么 DOM 的 API 就是你经常看到的熟悉语法：

```
document.getElementById(id)
document.getElementsByTagName(name)
document.createElement(name)
parentNode.appendChild(node)
element.innerHTML
element.style.left
element.setAttribute()
element.getAttribute()
element.addEventListener()
window.content
window.onload
window.dump()
window.scrollTo()
```

React 保存了一份 DOM 的副本，出于某些考虑，React 渲染的是虚拟 DOM。

#### 虚拟 DOM 详解

每当 DOM 发生变化时，浏览器需要做两项操作：重绘（在不影响页面布局和元素与其他元素的相对位置关系情况下，元素在视觉和内容上的变化）和回流（重新计算页面某一部分或整个页面的布局）。

当页面发生变化时，React 使用虚拟 DOM 帮助浏览器使用更少的资源完成调整。

当你在组件中调用 `setState()` ，指定一个不同于原先状态的 state 时，React 标记这个组件为 **dirty**。核心是：React 只在显式修改 state 时更新组件。

接下来会发生：

- React 会（通过额外的检查，如触发 `shouldComponentUpdate()`）更新与标记了 dirty 的组件相关的虚拟 DOM
- 运行 Diff 算法来聚合变更
- 更新真实的 DOM 

#### 为什么虚拟 DOM 有用：批处理

关键点在于 React 一次性处理所有需要修改的元素，让浏览器只处理一次重绘和回流，从而只对真实的 DOM 进行一次更新。

### 单向数据流

使用 React 时会遇到单向数据流的概念。它是什么意思呢？单向数据流并不是 React 独有的概念，但是作为 JavaScript 开发者，这可能是你第一次听到这个术语。

一般来说，这个概念表示数据只有唯一一种方式传输到应用程序的其他部分。

在 React 中它表示：

- 状态传递给视图和子组件
- 视图触发操作
- 操作能更新状态 state
- 状态的变化传递给视图和子组件

视图是应用程序状态的结果。状态只在操作发生时变化，当操作发生时，状态被更新。

多亏了单向绑定，数据不能通过相反的方式传输（像双向绑定那样），因此有如下优势：

- 能更好地控制数据，从而更少出错  
- 能知道_什么数据_从_哪里_来，因此更易于调试
- 能够明确系统每部分的边界，从而更有效率

状态只被一个组件拥有。任何被状态影响的数据都只能影响组件的子组件。

修改组件的状态绝不会影响组件的父组件，或兄弟组件，或应用程序中的任何其他组件，只会影响组件的子组件。

这也是状态经常在组件树中上移的原因，以便在需要访问它的组件之间共享状态。

### `SECTION 3: IN-DEPTH REACT`

### `JSX`

`JSX is a technology that was introduced by React.`

`Although React can work completely fine without using JSX, it’s an ideal technology to work with components, so React benefits a lot from JSX.`

`At first, you might think that using JSX is like mixing HTML and  [JavaScript][83]  (and as you’ll see CSS).`

`But this is not true, because what you are really doing when using JSX syntax is writing a declarative syntax of what a component UI should be.`

`And you’re describing that UI not using strings, but instead using JavaScript, which allows you to do many nice things.`

#### `A JSX primer`

`Here is how you define a h1 tag containing a string:`

```
const element = <h1>Hello, world!</h1>
```

`It looks like a strange mix of JavaScript and HTML, but in reality it’s all JavaScript.`

`What looks like HTML, is actually syntactic sugar for defining components and their positioning inside the markup.`

`Inside a JSX expression, attributes can be inserted very easily:`

```
const myId = 'test'
const element = <h1 id={myId}>Hello, world!</h1>
```

``You just need to pay attention when an attribute has a dash (`-`) which is converted to camelCase syntax instead, and these 2 special cases:``

-   `` `class`  becomes  `className` ``
-   `` `for`  becomes  `htmlFor` ``

`because they are reserved words in JavaScript.`

``Here’s a JSX snippet that wraps two components into a  `div`  tag:``

```
<div>
  <BlogPostsList />
  <Sidebar />
</div>
```

`A tag always needs to be closed, because this is more XML than HTML (if you remember the XHTML days, this will be familiar, but since then the HTML5 loose syntax won). In this case a self-closing tag is used.`

``Notice how I wrapped the 2 components into a  `div`. Why? Because  **the render() function can only return a single node**, so in case you want to return 2 siblings, just add a parent. It can be any tag, not just  `div`.``

#### `Transpiling JSX`

`A browser cannot execute JavaScript files containing JSX code. They must be first transformed to regular JS.`

`How? By doing a process called  **transpiling**.`

`We already said that JSX is optional, because to every JSX line, a corresponding plain JavaScript alternative is available, and that’s what JSX is transpiled to.`

`For example the following two constructs are equivalent:`

> `_Plain JS_`

```
ReactDOM.render(
  React.DOM.div(
    { id: 'test' },
    React.DOM.h1(null, 'A title'),
    React.DOM.p(null, 'A paragraph')
  ),
  document.getElementById('myapp')
)
```

> `_JSX_`

```
ReactDOM.render(
  <div id="test">
    <h1>A title</h1>
    <p>A paragraph</p>
  </div>,
  document.getElementById('myapp')
)
```

`This very basic example is just the starting point, but you can already see how more complicated the plain JS syntax is compared to using JSX.`

``At the time of writing the most popular way to perform the  **transpilation**  is to use  **Babel**, which is the default option when running  `create-react-app`, so if you use it you don't have to worry, everything happens under the hood for you.``

``If you don’t use  `create-react-app`  you need to setup Babel yourself.``

#### `JS in JSX`

`JSX accepts any kind of JavaScript mixed into it.`

``Whenever you need to add some JS, just put it inside curly braces  `{}`. For example here's how to use a constant value defined elsewhere:``

```
const paragraph = 'A paragraph'
ReactDOM.render(
  <div id="test">
    <h1>A title</h1>
    <p>{paragraph}</p>
  </div>,
  document.getElementById('myapp')
)
```

`This is a basic example. Curly braces accept  _any_  JS code:`

```
const paragraph = 'A paragraph'
ReactDOM.render(
  <table>
    {rows.map((row, i) => {
      return <tr>{row.text}</tr>
    })}
  </table>,
  document.getElementById('myapp')
)
```

`As you can see  _we nested JavaScript inside JSX defined inside JavaScript nested in JSX_. You can go as deep as you need.`

#### `HTML in JSX`

`JSX resembles HTML a lot, but it’s actually XML syntax.`

`In the end you render HTML, so you need to know a few differences between how you would define some things in HTML, and how you define them in JSX.`

#### `You need to close all tags`

``Just like in XHTML, if you have ever used it, you need to close all tags: no more  `<br>`  but instead use the self-closing tag:  `<br />`  (the same goes for other tags)``

#### `camelCase is the new standard`

``In HTML you’ll find attributes without any case (e.g.  `onchange`). In JSX, they are renamed to their camelCase equivalent:``

-   `` `onchange`  =>  `onChange` ``
-   `` `onclick`  =>  `onClick` ``
-   `` `onsubmit`  =>  `onSubmit` ``

#### `` `class`  becomes  `className` ``

``Due to the fact that JSX is JavaScript, and  `class`  is a reserved word, you can't write``

```
<p class="description">
```

`but you need to use`

```
<p className="description">
```

``**The same applies to  `for`**  which is translated to  `htmlFor`.``

#### `CSS in React`

`JSX provides a cool way to define CSS.`

`If you have a little experience with HTML inline styles, at first glance you’ll find yourself pushed back 10 or 15 years, to a world where inline CSS was completely normal (nowadays it’s demonized and usually just a “quick fix” go-to solution).`

``JSX style is not the same thing: first of all, instead of accepting a string containing CSS properties, the JSX  `style`  attribute only accepts an object. This means you define properties in an object:``

```
var divStyle = {
  color: 'white'
}
ReactDOM.render(<div style={divStyle}>Hello World!</div>, mountNode)
```

`or`

```
ReactDOM.render(<div style={{ color: 'white' }}>Hello World!</div>, mountNode)
```

`The CSS values you write in JSX are slightly different from plain CSS:`

-   `the keys property names are camelCased`
-   `values are just strings`
-   `you separate each tuple with a comma`

#### `Why is this preferred over plain CSS / SASS / LESS?`

`CSS is an  **unsolved problem**. Since its inception, dozens of tools around it rose and then fell. The main problem with JS is that there is no scoping and it’s easy to write CSS that is not enforced in any way, thus a “quick fix” can impact elements that should not be touched.`

`JSX allows components (defined in React for example) to completely encapsulate their style.`

#### `Is this the go-to solution?`

`Inline styles in JSX are good until you need to`

1.  `write media queries`
2.  `style animations`
3.  ``reference pseudo classes (e.g.  `:hover`)``
4.  ``reference pseudo elements (e.g.  `::first-letter`)``

`In short, they cover the basics, but it’s not the final solution.`

#### `Forms in JSX`

`JSX adds some changes to how HTML forms work, with the goal of making things easier for the developer.`

#### `` `value`  and  `defaultValue` ``

``The  `value`  attribute always holds the current value of the field.``

``The  `defaultValue`  attribute holds the default value that was set when the field was created.``

``_This helps solve some weird behavior of regular  [DOM][84]  interaction when inspecting  `input.value`  and  `input.getAttribute('value')`  returning one the current value and one the original default value._``

``This also applies to the  `textarea`  field, e.g.``

```
<textarea>Some text</textarea>
```

`but instead`

```
<textarea defaultValue={'Some text'} />
```

``For  `select`  fields, instead of using``

```
<select>
  <option value="x" selected>
    ...
  </option>
</select>
```

`use`

```
<select defaultValue="x">
  <option value="x">...</option>
</select>
```

#### `A more consistent onChange`

``Passing a function to the  `onChange`  attribute you can subscribe to events on form fields.``

``It works consistently across fields, even  `radio`,  `select`  and  `checkbox`  input fields fire a  `onChange`  event.``

`` `onChange`  also fires when typing a character into an  `input`  or  `textarea`  field.``

#### `JSX auto escapes`

`To mitigate the ever present risk of XSS exploits, JSX forces automatic escaping in expressions.`

`This means that you might run into issues when using an HTML entity in a string expression.`

``You expect the following to print  `© 2017`:``

```
<p>{'© 2017'}</p>
```

``But it’s not, it’s printing  `© 2017`  because the string is escaped.``

`To fix this you can either move the entities outside the expression:`

```
<p>© 2017</p>
```

`or by using a constant that prints the Unicode representation corresponding to the HTML entity you need to print:`

```
<p>{'\u00A9 2017'}</p>
```

#### `White space in JSX`

`To add white space in JSX there are 2 rules:`

`**Rule 1: Horizontal white space is trimmed to 1**`

`If you have white space between elements in the same line, it’s all trimmed to 1 white space.`

```
<p>Something       becomes               this</p>
```

`becomes`

```
<p>Something becomes this</p>
```

`**Rule 2: Vertical white space is eliminated**`

```
<p>
  Something
  becomes
  this
</p>
```

`becomes`

```
<p>Somethingbecomesthis</p>
```

`To fix this problem you need to explicitly add white space, by adding a space expression like this:`

```
<p>
  Something
  {' '}becomes
  {' '}this
</p>
```

`or by embedding the string in a space expression:`

```
<p>
  Something
  {' becomes '}
  this
</p>
```

#### `Adding comments in JSX`

`You can add comments to JSX by using the normal JavaScript comments inside an expression:`

```
<p>
  {/* a comment */}
  {
    //another comment
  }
</p>
```

#### `Spread attributes`

`In JSX a common operation is assigning values to attributes.`

`Instead of doing it manually, e.g.`

```
<div>
  <BlogPost title={data.title} date={data.date} />
</div>
```

`you can pass`

```
<div>
  <BlogPost {...data} />
</div>
```

``and the properties of the  `data`  object will be used as attributes automatically, thanks to the  _ES6 spread operator_.``

#### `How to loop in JSX`

`If you have a set of elements you need to loop upon to generate a JSX partial, you can create a loop, and then add JSX to an array:`

```
const elements = [] //..some array
const items = []
for (const [index, value] of elements.entries()) {
  items.push(<Element key={index} />)
}
```

``Now when rendering the JSX you can embed the  `items`  array simply by wrapping it in curly braces:``

```
const elements = ['one', 'two', 'three'];
const items = []
for (const [index, value] of elements.entries()) {
  items.push(<li key={index}>{value}</li>)
}
return (
  <div>
    {items}
  </div>
)
```

``You can do the same directly in the JSX, using  `map`  instead of a for-of loop:``

```
const elements = ['one', 'two', 'three'];
return (
  <ul>
    {elements.map((value, index) => {
      return <li key={index}>{value}</li>
    })}
  </ul>
)
```

### `Components`

`A component is one isolated piece of interface. For example in a typical blog homepage you might find the Sidebar component, and the Blog Posts List component. They are in turn composed of components themselves, so you could have a list of Blog post components, each for every blog post, and each with its own peculiar properties.`

`React makes it very simple: everything is a component.`

`Even plain HTML tags are component on their own, and they are added by default.`

``The next 2 lines are equivalent, they do the same thing. One with  ****JSX****, one without, by injecting  `<h1>Hello World!</h1>`  into an element with id  `app`.``

```
import React from 'react'
import ReactDOM from 'react-dom'
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('app'))
ReactDOM.render(
  React.DOM.h1(null, 'Hello World!'),
  document.getElementById('app')
)
```

``See,  `React.DOM`  exposed us an  `h1`  component. Which other HTML tags are available? All of them! You can inspect what  `React.DOM`  offers by typing it in the Browser Console:``

`(the list is longer)`

`The built-in components are nice, but you’ll quickly outgrow them. What React excels in is letting us compose a UI by composing custom components.`

#### `Custom components`

`There are 2 ways to define a component in React.`

`A function component:`

```
const BlogPostExcerpt = () => {
  return (
    <div>
      <h1>Title</h1>
      <p>Description</p>
    </div>
  )
}
```

`A class component:`

```
import React, { Component } from 'react'
class BlogPostExcerpt extends Component {
  render() {
    return (
      <div>
        <h1>Title</h1>
        <p>Description</p>
      </div>
    )
  }
}
```

`Up until recently, class components were the only way to define a component that had its own state, and could access the lifecycle methods so you could do things when the component was first rendered, updated or removed.`

`React Hooks changed this, so our function components are now much more powerful than ever and I believe we’ll see fewer and fewer class components in the future, although it will still be perfectly valid way to create components.`

``There is also a third syntax which uses the  `ES5`  syntax, without the classes:``

```
import React from 'react'
React.createClass({
  render() {
    return (
      <div>
        <h1>Title</h1>
        <p>Description</p>
      </div>
    )
  }
})
```

``You’ll rarely see this in modern,  `> ES6`  codebases.``

### `State`

#### `Setting the default state of a component`

``In the Component constructor, initialize  `this.state`. For example the BlogPostExcerpt component might have a  `clicked`  state:``

```
class BlogPostExcerpt extends Component {
  constructor(props) {
    super(props)
    this.state = { clicked: false }
  }
  render() {
    return (
      <div>
        <h1>Title</h1>
        <p>Description</p>
      </div>
    )
  }
}
```

#### `Accessing the state`

``The  _clicked_  state can be accessed by referencing  `this.state.clicked`:``

```
class BlogPostExcerpt extends Component {
  constructor(props) {
    super(props)
    this.state = { clicked: false }
  }
  render() {
    return (
      <div>
        <h1>Title</h1>
        <p>Description</p>
        <p>Clicked: {this.state.clicked}</p>
      </div>
    )
  }
}
```

#### `Mutating the state`

`A state should never be mutated by using`

```
this.state.clicked = true
```

``Instead, you should always use  `setState()`  instead, passing it an object:``

```
this.setState({ clicked: true })
```

`The object can contain a subset, or a superset, of the state. Only the properties you pass will be mutated, the ones omitted will be left in their current state.`

#### ``Why you should always use  `setState()` ``

`The reason is that using this method, React knows that the state has changed. It will then start the series of events that will lead to the Component being re-rendered, along with any  [DOM][85]  update.`

#### `Unidirectional Data Flow`

`A state is always owned by one Component. Any data that’s affected by this state can only affect Components below it: its children.`

`Changing the state on a Component will never affect its parent, or its siblings, or any other Component in the application: just its children.`

`This is the reason the state is often moved up in the Component tree.`

#### `Moving the State Up in the Tree`

`Because of the Unidirectional Data Flow rule, if two components need to share state, the state needs to be moved up to a common ancestor.`

`Many times the closest ancestor is the best place to manage the state, but it’s not a mandatory rule.`

`The state is passed down to the components that need that value via props:`

```
class Converter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currency: '€' }
  }
  render() {
    return (
      <div>
        <Display currency={this.state.currency} />
        <CurrencySwitcher currency={this.state.currency} />
      </div>
    )
  }
}
```

`The state can be mutated by a child component by passing a mutating function down as a prop:`

```
class Converter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currency: '€' }
  }
  handleChangeCurrency = event => {
    this.setState({ currency: this.state.currency === '€' ? '$' : '€' })
  }
  render() {
    return (
      <div>
        <Display currency={this.state.currency} />
        <CurrencySwitcher
          currency={this.state.currency}
          handleChangeCurrency={this.handleChangeCurrency}
        />
      </div>
    )
  }
}
const CurrencySwitcher = props => {
  return (
    <button onClick={props.handleChangeCurrency}>
      Current currency is {props.currency}. Change it!
    </button>
  )
}
const Display = props => {
  return <p>Current currency is {props.currency}.</p>
}
```

### `Props`

``Props is how Components get their properties. Starting from the top component, every child component gets its props from the parent. In a function component, props is all it gets passed, and they are available by adding  `props`  as the function argument:``

```
const BlogPostExcerpt = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}
```

``In a class component, props are passed by default. There is no need to add anything special, and they are accessible as  `this.props`  in a Component instance.``

```
import React, { Component } from 'react'
class BlogPostExcerpt extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    )
  }
}
```

`Passing props down to child components is a great way to pass values around in your application. A component either holds data (has state) or receives data through its props.`

`It gets complicated when:`

-   `you need to access the state of a component from a child that’s several levels down (all the previous children need to act as a pass-through, even if they do not need to know the state, complicating things)`
-   `you need to access the state of a component from a completely unrelated component.`

#### `Default values for props`

`If any value is not required we need to specify a default value for it if it’s missing when the Component is initialized.`

```
BlogPostExcerpt.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}
BlogPostExcerpt.defaultProps = {
  title: '',
  description: ''
}
```

`Some tooling like  [ESLint][86]  have the ability to enforce defining the defaultProps for a Component with some propTypes not explicitly required.`

#### `How props are passed`

`When initializing a component, pass the props in a way similar to HTML attributes:`

```
const desc = 'A description'
//...
<BlogPostExcerpt title="A blog post" description={desc} />
```

`We passed the title as a plain string (something we can  _only_  do with strings!), and description as a variable.`

#### `Children`

``A special prop is  `children`. That contains the value of anything that is passed in the  `body`  of the component, for example:``

```
<BlogPostExcerpt title="A blog post" description="{desc}">
  Something
</BlogPostExcerpt>
```

``In this case, inside  `BlogPostExcerpt`  we could access "Something" by looking up  `this.props.children`.``

`While Props allow a Component to receive properties from its parent, to be “instructed” to print some data for example, state allows a component to take on life itself, and be independent of the surrounding environment.`

### `Presentational vs container components`

`In React, components are often divided into 2 big buckets:  **presentational components**and  **container components**.`

`Each of those have their unique characteristics.`

`Presentational components are mostly concerned with generating some markup to be outputted.`

`They don’t manage any kind of state, except for state related the the presentation`

`Container components are mostly concerned with the “backend” operations.`

`They might handle the state of various sub-components. They might wrap several presentational components. They might interface with Redux.`

`As a way to simplify the distinction, we can say  **presentational components are concerned with the look**,  **container components are concerned with making things work**.`

`For example, this is a presentational component. It gets data from its props, and just focuses on showing an element:`

```
const Users = props => (
  <ul>
    {props.users.map(user => (
      <li>{user}</li>
    ))}
  </ul>
)
```

`On the other hand this is a container component. It manages and stores its own data, and uses the presentational component to display it.`

```
class UsersContainer extends React.Component {
  constructor() {
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    axios.get('/users').then(users =>
      this.setState({ users: users }))
    )
  }
  render() {
    return <Users users={this.state.users} />
  }
}
```

### `State vs props`

`In a React component,  **props**  are variables passed to it by its parent component.  **State**  on the other hand is still variables, but directly initialized and managed by the component.`

`The state can be initialized by props.`

`For example, a parent component might include a child component by calling`

```
<ChildComponent />
```

`The parent can pass a prop by using this syntax:`

```
<ChildComponent color=green />
```

`Inside the ChildComponent constructor we could access the prop:`

```
class ChildComponent extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.color)
  }
}
```

``and any other method in this class can reference the props using  `this.props`.``

`Props can be used to set the internal state based on a prop value in the constructor, like this:`

```
class ChildComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state.colorName = props.color
  }
}
```

`Of course a component can also initialize the state without looking at props.`

`In this case there’s nothing useful going on, but imagine doing something different based on the prop value, probably setting a state value is best.`

`Props should never be changed in a child component, so if there’s something going on that alters some variable, that variable should belong to the component state.`

`Props are also used to allow child components to access methods defined in the parent component. This is a good way to centralize managing the state in the parent component, and avoid children having the need to have their own state.`

`Most of your components will just display some kind of information based on the props they received, and stay  **stateless**.`

### `PropTypes`

`Since JavaScript is a dynamically typed language, we don’t really have a way to enforce the type of a variable at compile time, and if we pass invalid types, they will fail at runtime or give weird results if the types are compatible but not what we expect.`

`Flow and TypeScript help a lot, but React has a way to directly help with props types, and even before running the code, our tools (editors, linters) can detect when we are passing the wrong values:`

```
import PropTypes from 'prop-types'
import React from 'react'
class BlogPostExcerpt extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    )
  }
}
BlogPostExcerpt.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}
export default BlogPostExcerpt
```

#### `Which types can we use`

`These are the fundamental types we can accept:`

-   `PropTypes.array`
-   `PropTypes.bool`
-   `PropTypes.func`
-   `PropTypes.number`
-   `PropTypes.object`
-   `PropTypes.string`
-   `PropTypes.symbol`

`We can accept one of two types:`

```
PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
]),
```

`We can accept one of many values:`

```
PropTypes.oneOf(['Test1', 'Test2']),
```

`We can accept an instance of a class:`

```
PropTypes.instanceOf(Something)
```

`We can accept any React node:`

```
PropTypes.node
```

`or even any type at all:`

```
PropTypes.any
```

`Arrays have a special syntax that we can use to accept an array of a particular type:`

```
PropTypes.arrayOf(PropTypes.string)
```

`We can compose object properties by using`

```
PropTypes.shape({
  color: PropTypes.string,
  fontSize: PropTypes.number
})
```

#### `Requiring properties`

``Appending  `isRequired`  to any PropTypes option will cause React to return an error if that property is missing:``

```
PropTypes.arrayOf(PropTypes.string).isRequired,
PropTypes.string.isRequired,
```

### `React Fragment`

``Notice how I wrap return values in a  `div`. This is because a component can only return one single element, and if you want more than one, you need to wrap it with another container tag.``

``This, however, causes an unnecessary  `div`  in the output. You can avoid this by using  `React.Fragment`:``

```
import React, { Component } from 'react'
class BlogPostExcerpt extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </React.Fragment>
    )
  }
}
```

``which also has a very nice shorthand syntax  `<></>`  that is supported only in recent releases (and Babel 7+):``

```
import React, { Component } from 'react'
class BlogPostExcerpt extends Component {
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </>
    )
  }
}
```

### `Events`

``React provides an easy way to manage events. Prepare to say goodbye to  `addEventListener`.``

`In the previous article about the State you saw this example:`

```
const CurrencySwitcher = props => {
  return (
    <button onClick={props.handleChangeCurrency}>
      Current currency is {props.currency}. Change it!
    </button>
  )
}
```

`If you’ve been using JavaScript for a while, this is just like plain old  [JavaScript event handlers][87], except that this time you’re defining everything in JavaScript, not in your HTML, and you’re passing a function, not a string.`

``The actual event names are a little bit different because in React you use camelCase for everything, so  `onclick`  becomes  `onClick`,  `onsubmit`  becomes  `onSubmit`.``

`For reference, this is old school HTML with JavaScript events mixed in:`

```
<button onclick="handleChangeCurrency()">...<;/button>
```

#### `Event handlers`

`It’s a convention to have event handlers defined as methods on the Component class:`

```
class Converter extends React.Component {
  handleChangeCurrency = event => {
    this.setState({ currency: this.state.currency === '€' ? '$' : '€' })
  }
}
```

`All handlers receive an event object that adheres, cross-browser, to the  [W3C UI Events spec][88].`

#### ``Bind  `this`  in methods``

``If you use class components, don’t forget to bind methods. The methods of ES6 classes by default are not bound. What this means is that  `this`  is not defined unless you define methods as arrow functions:``

```
class Converter extends React.Component {
  handleClick = e => {
    /* ... */
  }
  //...
}
```

``when using the the property initializer syntax with Babel (enabled by default in  `create-react-app`), otherwise you need to bind it manually in the constructor:``

```
class Converter extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {}
}
```

### `The events reference`

`There are lots of events supported, here’s a summary list.`

#### `Clipboard`

-   `onCopy`
-   `onCut`
-   `onPaste`

#### `Composition`

-   `onCompositionEnd`
-   `onCompositionStart`
-   `onCompositionUpdate`

#### `Keyboard`

-   `onKeyDown`
-   `onKeyPress`
-   `onKeyUp`

#### `Focus`

-   `onFocus`
-   `onBlur`

#### `Form`

-   `onChange`
-   `onInput`
-   `onSubmit`

#### `Mouse`

-   `onClick`
-   `onContextMenu`
-   `onDoubleClick`
-   `onDrag`
-   `onDragEnd`
-   `onDragEnter`
-   `onDragExit`
-   `onDragLeave`
-   `onDragOver`
-   `onDragStart`
-   `onDrop`
-   `onMouseDown`
-   `onMouseEnter`
-   `onMouseLeave`
-   `onMouseMove`
-   `onMouseOut`
-   `onMouseOver`
-   `onMouseUp`

#### `Selection`

-   `onSelect`

#### `Touch`

-   `onTouchCancel`
-   `onTouchEnd`
-   `onTouchMove`
-   `onTouchStart`

#### `UI`

-   `onScroll`

#### `Mouse Wheel`

-   `onWheel`

#### `Media`

-   `onAbort`
-   `onCanPlay`
-   `onCanPlayThrough`
-   `onDurationChange`
-   `onEmptied`
-   `onEncrypted`
-   `onEnded`
-   `onError`
-   `onLoadedData`
-   `onLoadedMetadata`
-   `onLoadStart`
-   `onPause`
-   `onPlay`
-   `onPlaying`
-   `onProgress`
-   `onRateChange`
-   `onSeeked`
-   `onSeeking`
-   `onStalled`
-   `onSuspend`
-   `onTimeUpdate`
-   `onVolumeChange`
-   `onWaiting`

#### `Image`

-   `onLoad`
-   `onError`

#### `Animation`

-   `onAnimationStart`
-   `onAnimationEnd`
-   `onAnimationIteration`

#### `Transition`

-   `onTransitionEnd`

### `Lifecycle Events`

`React class components can have hooks for several lifecycle events.`

> `_Hooks allow function components to access them too, in a different way._`

`During the lifetime of a component, there’s a series of events that gets called, and to each event you can hook and provide custom functionality.`

`What hook is best for what functionality is something we’re going to see here.`

`First, there are 3 phases in a React component lifecycle:`

-   `Mounting`
-   `Updating`
-   `Unmounting`

`Let’s see those 3 phases in detail and the methods that get called for each.`

#### `Mounting`

``When mounting you have 4 lifecycle methods before the component is mounted in the DOM: the  `constructor`,  `getDerivedStateFromProps`,  `render`  and  `componentDidMount`.``

#### `Constructor`

`The constructor is the first method that is called when mounting a component.`

``You usually use the constructor to set up the initial state using  `this.state = ...`.``

#### `getDerivedStateFromProps()`

``When the state depends on props,  `getDerivedStateFromProps`  can be used to update the state based on the props value.``

``It was added in React 16.3, aiming to replace the  `componentWillReceiveProps`deprecated method.``

``In this method you haven’t access to  `this`  as it's a static method.``

`It’s a pure method, so it should not cause side effects and should return the same output when called multiple times with the same input.`

`Returns an object with the updated elements of the state (or null if the state does not change)`

#### `render()`

`From the render() method you return the JSX that builds the component interface.`

`It’s a pure method, so it should not cause side effects and should return the same output when called multiple times with the same input.`

#### `componentDidMount()`

`This method is the one that you will use to perform API calls, or process operations on the DOM.`

#### `Updating`

``When updating you have 5 lifecycle methods before the component is mounted in the DOM: the  `getDerivedStateFromProps`,  `shouldComponentUpdate`,  `render`,  `getSnapshotBeforeUpdate`  and  `componentDidUpdate`.``

#### `getDerivedStateFromProps()`

`See the above description for this method.`

#### `shouldComponentUpdate()`

``This method returns a boolean,  `true`  or  `false`. You use this method to tell React if it should go on with the rerendering, and defaults to  `true`. You will return  `false`  when rerendering is expensive and you want to have more control on when this happens.``

#### `render()`

`See the above description for this method.`

#### `getSnapshotBeforeUpdate()`

`In this method you have access to the props and state of the previous render, and of the current render.`

`Its use cases are very niche, and it’s probably the one that you will use less.`

#### `componentDidUpdate()`

`This method is called when the component has been updated in the DOM. Use this to run any 3rd party DOM API or call APIs that must be updated when the DOM changes.`

``It corresponds to the  `componentDidMount()`  method from the mounting phase.``

#### `Unmounting`

``In this phase we only have one method,  `componentWillUnmount`.``

#### `componentWillUnmount()`

`The method is called when the component is removed from the DOM. Use this to do any sort of cleanup you need to perform.`

#### `Legacy`

``If you are working on an app that uses  `componentWillMount`,  `componentWillReceiveProps`  or  `componentWillUpdate`, those were deprecated in React 16.3 and you should migrate to other lifecycle methods.``

### `Forms in React`

`Forms are one of the few HTML elements that are interactive by default.`

`They were designed to allow the user to interact with a page.`

`Common uses of forms?`

-   `Search`
-   `Contact forms`
-   `Shopping carts checkout`
-   `Login and registration`
-   `and more!`

`Using React we can make our forms much more interactive and less static.`

`There are two main ways of handling forms in React, which differ on a fundamental level: how data is managed.`

-   `if the data is handled by the DOM, we call them  **uncontrolled components**`
-   `if the data is handled by the components we call them  **controlled components**`

``As you can imagine, controlled components is what you will use most of the time. The component state is the single source of truth, rather than the DOM. Some form fields are inherently uncontrolled because of their behavior, like the  `<input type="file">`field.``

``When an element state changes in a form field managed by a component, we track it using the  `onChange`  attribute.``

```
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: '' }
  }
  handleChange(event) {}
  render() {
    return (
      <form>
        Username:
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}
```

``In order to set the new state, we must bind  `this`  to the  `handleChange`  method, otherwise  `this`  is not accessible from within that method:``

```
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: '' }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}
```

``Similarly, we use the  `onSubmit`  attribute on the form to call the  `handleSubmit`  method when the form is submitted:``

```
class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  handleSubmit(event) {
    alert(this.state.username)
    event.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
```

``Validation in a form can be handled in the  `handleChange`  method: you have access to the old value of the state, and the new one. You can check the new value and if not valid reject the updated value (and communicate it in some way to the user).``

``HTML Forms are inconsistent. They have a long history, and it shows. React however makes things more consistent for us, and you can get (and update) fields using its  `value`attribute.``

``Here’s a  `textarea`, for example:``

```
<textarea value={this.state.address} onChange={this.handleChange} />
```

``The same goes for the  `select`  tag:``

```
<select value="{this.state.age}" onChange="{this.handleChange}">
  <option value="teen">Less than 18</option>
  <option value="adult">18+</option>
</select>
```

``Previously we mentioned the  `<input type="file">`  field. That works a bit differently.``

``In this case you need to get a reference to the field by assigning the  `ref`  attribute to a property defined in the constructor with  `React.createRef()`, and use that to get the value of it in the submit handler:``

```
class FileInput extends React.Component {
  constructor(props) {
    super(props)
    this.curriculum = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    alert(this.curriculum.current.files[0].name)
    event.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="file" ref={this.curriculum} />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
```

``This is the  **uncontrolled components**  way. The state is stored in the DOM rather than in the component state (notice we used  `this.curriculum`  to access the uploaded file, and have not touched the  `state`.``

`I know what you’re thinking — beyond those basics, there must be a library that simplifies all this form handling stuff and automates validation, error handling and more, right? There is a great one,  [Formik][89].`

### `Reference a DOM element`

`React is great at abstracting away the DOM from you when building apps.`

`But what if you want to access the DOM element that a React component represents?`

`Maybe you have to add a library that interacts directly with the DOM like a chart library, maybe you need to call some DOM API, or add focus on an element.`

> `_Whatever the reason is, a good practice is making sure there’s no other way of doing so without accessing the DOM directly._`

`In the JSX of your component, you can assign the reference of the DOM element to a component property using this attribute:`

```
ref={el => this.someProperty = el}
```

``Put this into context, for example with a  `button`  element:``

```
<button ref={el => (this.button = el)} />
```

`` `button`  refers to a property of the component, which can then be used by the component's lifecycle methods (or other methods) to interact with the DOM:``

```
class SomeComponent extends Component {
  render() {
    return <button ref={el => (this.button = el)} />
  }
}
```

``In a function component the mechanism is the same, you just avoid using  `this`  (since it does not point to the component instance) and use a property instead:``

```
function SomeComponent() {
  let button
  return <button ref={el => (button = el)} />
}
```

### `Server side rendering`

`**Server Side Rendering**, also called  **SSR**, is the ability of a JavaScript application to render on the server rather than in the browser.`

`Why would we ever want to do so?`

-   `it allows your site to have a faster first page load time, which is the key to a good user experience`
-   `it is essential for SEO: search engines cannot (yet?) efficiently and correctly index applications that exclusively render client-side. Despite the latest improvements to indexing in Google, there are other search engines too, and Google is not perfect at it in any case. Also, Google favors sites with fast load times, and having to load client-side is not good for speed`
-   `it’s great when people share a page of your site on social media, as they can easily gather the metadata needed to nicely share the link (images, title, description..)`

`Without Server Side Rendering, all your server ships is an HTML page with no body, just some script tags that are then used by the browser to render the application.`

`Client-rendered apps are great at any subsequent user interaction after the first page load. Server Side Rendering allows us to get the sweet spot in the middle of client-rendered apps and backend-rendered apps: the page is generated server-side, but all interactions with the page once it’s been loaded are handled client-side.`

`However Server Side Rendering has its drawback too:`

-   `it’s fair to say that a simple SSR proof of concept is simple, but the complexity of SSR can grow with the complexity of your application`
-   `rendering a big application server-side can be quite resource-intensive, and under heavy load it could even provide a slower experience than client-side rendering, since you have a single bottleneck`

### `A very simplistic example of what it takes to Server-Side render a React app`

`SSR setups can grow very, very complex and most tutorials will bake in Redux, React Router and many other concepts from the start.`

`To understand how SSR works, let’s start from the basics to implement a proof of concept.`

> `_Feel free to skip this paragraph if you just want to look into the libraries that provide SSR and not bother with the ground work_`

`To implement basic SSR we’re going to use Express.`

> `_If you are new to Express, or need some catch-up, check out my free Express Handbook here:  [https://flaviocopes.com/page/ebooks/][90]._`

`Warning: the complexity of SSR can grow with the complexity of your application. This is the bare minimum setup to render a basic React app. For more complex needs you might need to do a bit more work or also check out SSR libraries for React.`

``I assume you started a React app with  `create-react-app`. If you are just trying, install one now using  `npx create-react-app ssr`.``

`Go to the main app folder with the terminal, then run:`

```
npm install express
```

``You have a set of folders in your app directory. Create a new folder called  `server`, then go into it and create a file named  `server.js`.``

``Following the  `create-react-app`  conventions, the app lives in the  `src/App.js`  file. We're going to load that component, and render it to a string using  [ReactDOMServer.renderToString()][91], which is provided by  `react-dom`.``

```You get the contents of the  `./build/index.html`  file, and replace the  `<div id="root"></div>`placeholder, which is the tag where the application hooks by default, with  `` `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>``.```

``All the content inside the  `build`  folder is going to be served as-is, statically by Express.``

```
import path from 'path'
import fs from 'fs'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../src/App'
const PORT = 8080
const app = express()
const router = express.Router()
const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        &lt;div id="root"&gt;${ReactDOMServer.renderToString(&lt;App /&gt;)}&lt;/div&gt;
      )
    )
  })
}
router.use('^/$', serverRenderer)
router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
)
// tell the app to use the above rules
app.use(router)
// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(SSR running on port ${PORT})
})
```

``Now, in the client application, in your  `src/index.js`, instead of calling  `ReactDOM.render()`:``

```
ReactDOM.render(<App />, document.getElementById('root'))
```

``call  `[ReactDOM.hydrate()][92]`, which is the same but has the additional ability to attach event listeners to existing markup once React loads:``

```
ReactDOM.hydrate(<App />, document.getElementById('root'))
```

``All the Node.js code needs to be transpiled by Babel, as server-side Node.js code does not know anything about JSX, nor ES Modules (which we use for the  `include`statements).``

`Install these 3 packages:`

```
npm install @babel/register @babel/preset-env @babel/preset-react ignore-styles express
```

`` `[ignore-styles][93]`  is a Babel utility that will tell it to ignore CSS files imported using the  `import`  syntax.``

``Let’s create an entry point in  `server/index.js`:``

```
require('ignore-styles')
require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react']
})
require('./server')
```

`Build the React application, so that the build/ folder is populated:`

```
npm run build
```

`and let’s run this:`

```
node server/index.js
```

`I said this is a simplistic approach, and it is:`

-   `it does not handle rendering images correctly when using imports, which need Webpack in order to work (and which complicates the process a lot)`
-   `it does not handle page header metadata, which is essential for SEO and social sharing purposes (among other things)`

``So while this is a good example of using  `ReactDOMServer.renderToString()`  and  `ReactDOM.hydrate`  to get this basic server-side rendering, it's not enough for real world usage.``

#### `Server Side Rendering using libraries`

`SSR is hard to do right, and React has no de-facto way to implement it.`

`It’s still very much debatable if it’s worth the trouble, complication and overhead to get the benefits, rather than using a different technology to serve those pages.  [This discussion on Reddit][94]  has lots of opinions in that regard.`

`When Server Side Rendering is an important matter, my suggestion is to rely on pre-made libraries and tools that have had this goal in mind since the beginning.`

`In particular, I suggest  **Next.js**  and  **Gatsby**, two projects we’ll see later on.`

### `The Context API`

`The Context API is a neat way to pass state across the app without having to use props. It was introduced to allow you to pass state (and enable the state to update) across the app, without having to use props for it.`

`The React team suggests to stick to props if you have just a few levels of children to pass, because it’s still a much less complicated API than the Context API.`

`In many cases, it enables us to avoid using Redux, simplifying our apps a lot, and also learning how to use React.`

`How does it work?`

``You create a context using  `React.createContext()`, which returns a Context object:``

```
const { Provider, Consumer } = React.createContext()
```

`Then you create a wrapper component that returns a  **Provider**  component, and you add as children all the components from which you want to access the context:`

```
class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      something: 'hey'
    }
  }
  render() {
    return (
      <Provider value={{ state: this.state }}>{this.props.children}</Provider>
    )
  }
}
class HelloWorld extends React.Component {
  render() {
    return (
      <Container>
        <Button />
      </Container>
    )
  }
}
```

`I used Container as the name of this component because this will be a global provider. You can also create smaller contexts.`

`Inside a component that’s wrapped in a Provider, you use a  **Consumer**  component to make use of the context:`

```
class Button extends React.Component {
  render() {
    return (
      <Consumer>
        {context => <button>{context.state.something}</button>}
      </Consumer>
    )
  }
}
```

`You can also pass functions into a Provider value, and those functions will be used by the Consumer to update the context state:`

```
<Provider value={{
  state: this.state,
  updateSomething: () => this.setState({something: 'ho!'})
  {this.props.children}
</Provider>
/* ... */
<Consumer>
  {(context) => (
    <button onClick={context.updateSomething}>{context.state.something}</button>
  )}
</Consumer>
```

`You can see this in action  [in this Glitch][95].`

`You can create multiple contexts, to make your state distributed across components, yet expose it and make it reachable by any component you want.`

`When using multiple files, you create the content in one file, and import it in all the places you use it:`

```
//context.js
import React from 'react'
export default React.createContext()
//component1.js
import Context from './context'
//... use Context.Provider
//component2.js
import Context from './context'
//... use Context.Consumer
```

### `Higher order components`

`You might be familiar with Higher Order Functions in JavaScript. Those are functions that accept functions as arguments, and/or return functions.`

``Two examples of those functions are  `Array.map()`  or  `Array.filter()`.``

`In React, we extend this concept to components, and so we have a  **Higher Order Component (HOC)**when the component accepts a component as input and returns a component as its output.`

`In general, higher order components allow you to create code that’s composable and reusable, and also more encapsulated.`

`We can use a HOC to add methods or properties to the state of a component, or a Redux store for example.`

`You might want to use Higher Order Components when you want to enhance an existing component, operate on the state or props, or its rendered markup.`

``There is a convention of prepending a Higher Order Component with the  `with`  string (it's a convention, so it's not mandatory), so if you have a  `Button`  component, its HOC counterpart should be called  `withButton`.``

`Let’s create one.`

`The simplest example ever of a HOC is one that simply returns the component unaltered:`

```
const withElement = Element => () => &lt;Element />
```

`Let’s make this a little bit more useful and add a property to that button, in addition to all the props it already came with, the color:`

```
const withColor = Element => props => <Element {...props} color="red" />
```

`We use this HOC in a component JSX:`

```
const Button = () => {
  return <button>test</button>
}
const ColoredButton = withColor(Button)
```

`and we can finally render the ColoredButton component in our app JSX:`

```
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <ColoredButton />
    </div>
  )
}
```

`This is a very simple example but hopefully you can get the gist of HOCs before applying those concepts to more complex scenarios.`

### `Render Props`

``A common pattern used to share state between components is to use the  `children`prop.``

``Inside a component JSX you can render  `{this.props.children}`  which automatically injects any JSX passed in the parent component as a children:``

```
class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      /.../
    }
  }
  render() {
    return <div>{this.props.children}</div>
  }
}
const Children1 = () => {}
const Children2 = () => {}
const App = () => (
  <Parent>
    <Children1 />
    <Children2 />
  </Parent>
)
```

`However, there is a problem here: the state of the parent component cannot be accessed from the children.`

``To be able to share the state, you need to use a render prop component, and instead of passing components as children of the parent component, you pass a function which you then execute in  `{this.props.children()}`. The function can accept arguments:``

```
class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: 'Flavio' }
  }
  render() {
    return <div>{this.props.children(this.state.name)}</div>
  }
}
const Children1 = props => {
  return <p>{props.name}</p>
}
const App = () => <Parent>{name => <Children1 name={name} />}</Parent>
```

``Instead of using the  `children`  prop, which has a very specific meaning, you can use any prop, and so you can use this pattern multiple times on the same component:``

```
class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: 'Flavio', age: 35 }
  }
  render() {
    return (
      <div>
        <p>Test</p>
        {this.props.someprop1(this.state.name)}
        {this.props.someprop2(this.state.age)}
      </div>
    )
  }
}
const Children1 = props => {
  return <p>{props.name}</p>
}
const Children2 = props => {
  return <p>{props.age}</p>
}
const App = () => (
  <Parent
    someprop1={name => <Children1 name={name} />}
    someprop2={age => <Children2 age={age} />}
  />
)
ReactDOM.render(<App />, document.getElementById('app'))
```

### `Hooks`

`Hooks is a feature that will be introduced in React 16.7, and is going to change how we write React apps in the future.`

`Before Hooks appeared, some key things in components were only possible using class components: having their own state, and using lifecycle events. Function components, lighter and more flexible, were limited in functionality.`

`**Hooks allow function components to have state and to respond to lifecycle events**  too, and kind of make class components obsolete. They also allow function components to have a good way to handle events.`

#### `Access state`

``Using the  `useState()`  API, you can create a new state variable, and have a way to alter it.  `useState()`  accepts the initial value of the state item and returns an array containing the state variable, and the function you call to alter the state. Since it returns an array we use  [array destructuring][96]  to access each individual item, like this:  `const [count, setCount] = useState(0)` ``

`Here’s a practical example:`

```
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
ReactDOM.render(<Counter />, document.getElementById('app'))
```

``You can add as many  `useState()`  calls you want, to create as many state variables as you want. Just make sure you call it in the top level of a component (not in an  `if`  or in any other block).``

`[Example on Codepen][97]`

#### `Access lifecycle hooks`

`Another very important feature of Hooks is allowing function components to have access to the lifecycle hooks.`

``Using class components you can register a function on the  `componentDidMount`,  `componentWillUnmount`  and  `componentDidUpdate`  events, and those will serve many use cases, from variables initialization to API calls to cleanup.``

``Hooks provide the  `useEffect()`  API. The call accepts a function as argument.``

``The function runs when the component is first rendered, and on every subsequent re-render/update. React first updates the DOM, then calls any function passed to  `useEffect()`. All without blocking the UI rendering even on blocking code, unlike the old  `componentDidMount`  and  `componentDidUpdate`, which makes our apps feel faster.``

`Example:`

```
const { useEffect, useState } = React
const CounterWithNameAndSideEffect = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Flavio')
  useEffect(() => {
    console.log(Hi ${name} you clicked ${count} times)
  })
  return (
    <div>
      <p>
        Hi {name} you clicked {count} times
      </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setName(name === 'Flavio' ? 'Roger' : 'Flavio')}>
        Change name
      </button>
    </div>
  )
}
ReactDOM.render(
  <CounterWithNameAndSideEffect />,
  document.getElementById('app')
)
```

``The same  `componentWillUnmount`  job can be achieved by optionally  **returning**  a function from our  `useEffect()`  parameter:``

```
useEffect(() => {
  console.log(Hi ${name} you clicked ${count} times)
  return () => {
    console.log(Unmounted)
  }
})
```

`` `useEffect()`  can be called multiple times, which is nice to separate unrelated logic (something that plagues the class component lifecycle events).``

``Since the  `useEffect()`  functions are run on every subsequent re-render/update, we can tell React to skip a run, for performance purposes, by adding a second parameter which is an array that contains a list of state variables to watch for. React will only re-run the side effect if one of the items in this array changes.``

```
useEffect(
  () => {
    console.log(Hi ${name} you clicked ${count} times)
  },
  [name, count]
)
```

`Similarly you can tell React to only execute the side effect once (at mount time), by passing an empty array:`

```
useEffect(() => {
  console.log(Component mounted)
}, [])
```

`` `useEffect()`  is great for adding logs, accessing 3rd party APIs and much more.``

`[Example on Codepen][98]`

#### `Handle events in function components`

`Before hooks, you either used class components, or you passed an event handler using props.`

``Now we can use the  `useCallback()`  built-in API:``

```
const Button = () => {
  const handleClick = useCallback(() => {
    //...do something
  })
  return <button onClick={handleClick} />
}
```

``Any parameter used inside the function must be passed through a second parameter to  `useCallback()`, in an array:``

```
const Button = () => {
  let name = '' //... add logic
  const handleClick = useCallback(
    () => {
      //...do something
    },
    [name]
  )
  return <button onClick={handleClick} />
}
```

#### `Enable cross-component communication using custom hooks`

`The ability to write your own hooks is the feature that is going to significantly alter how you write React apps in the future.`

`Using custom hooks you have one more way to share state and logic between components, adding a significant improvement to the patterns of render props and higher order components. Which are still great, but now with custom hooks have less relevance in many use cases.`

`How do you create a custom hook?`

``A hook is just a function that conventionally starts with  `use`. It can accept an arbitrary number of arguments, and return anything it wants.``

`Examples:`

```
const useGetData() {
  //...
  return data
}
```

`or`

```
const useGetUser(username) {
  //...const user = fetch(...)
  //...const userData = ...
  return [user, userData]
}
```

`In your own components, you can use the hook like this:`

```
const MyComponent = () => {
  const data = useGetData()
  const [user, userData] = useGetUser('flavio')
  //...
}
```

`When exactly to add hooks instead of regular functions should be determined on a use case basis, and only experience will tell.`

### `Code splitting`

`Modern JavaScript applications can be quite huge in terms of bundle size. You don’t want your users to have to download a 1MB package of JavaScript (your code and the libraries you use) just to load the first page, right? But this is what happens by default when you ship a modern Web App built with Webpack bundling.`

`That bundle will contain code that might never run because the user only stops on the login page and never sees the rest of your app.`

`Code splitting is the practice of only loading the JavaScript you need the moment when you need it.`

`This improves:`

-   `the performance of your app`
-   `the impact on memory, and so battery usage on mobile devices`
-   `the downloaded KiloBytes (or MegaBytes) size`

`React 16.6.0, released in October 2018, introduced a way of performing code splitting that should take the place of every previously used tool or library:  **React.lazy**  and  **Suspense**.`

`` `React.lazy`  and  `Suspense`  form the perfect way to lazily load a dependency and only load it when needed.``

``Let’s start with  `React.lazy`. You use it to import any component:``

```
import React from 'react'
const TodoList = React.lazy(() => import('./TodoList'))
export default () => {
  return (
    <div>
      <TodoList />
    </div>
  )
}
```

`the TodoList component will be dynamically added to the output as soon as it’s available. Webpack will create a separate bundle for it, and will take care of loading it when necessary.`

`` `Suspense`  is a component that you can use to wrap any lazily loaded component:``

```
import React from 'react'
const TodoList = React.lazy(() => import('./TodoList'))
export default () => {
  return (
    <div>
      <React.Suspense>
        <TodoList />
      </React.Suspense>
    </div>
  )
}
```

`It takes care of handling the output while the lazy loaded component is fetched and rendered.`

``Use its  `fallback`  prop to output some JSX or a component output:``

```
...
      <React.Suspense fallback={<p>Please wait</p>}>
        <TodoList />
      </React.Suspense>
...
```

`All this plays well with React Router:`

```
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const TodoList = React.lazy(() => import('./routes/TodoList'))
const NewTodo = React.lazy(() => import('./routes/NewTodo'))
const App = () => (
  <Router>
    <React.Suspense fallback={<p>Please wait</p>}>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route path="/new" component={NewTodo} />
      </Switch>
    </React.Suspense>
  </Router>
)
```

### `SECTION 4: PRACTICAL EXAMPLES`

`2 very simple applications to explain some of the concepts introduced so far.`

### `A very simple example of building a counter in React`

`In this short example we’ll build a very simple example of a counter in React, applying many of the concepts and theory outlined before.`

`Let’s use Codepen for this. We start by forking the  [React template pen][99].`

> `_In Codepen we don’t need to import React and ReactDOM as they are already added in the scope._`

`We show the count in a div, and we add a few buttons to increment this count:`

```
const Button = ({ increment }) => {
  return <button>+{increment}</button>
}
const App = () => {
  let count = 0
  return (
    <div>
      <Button increment={1} />
      <Button increment={10} />
      <Button increment={100} />
      <Button increment={1000} />
      <span>{count}</span>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('app'))
```

``Let’s add the functionality that lets us change the count by clicking the buttons, by adding a  `onClickFunction`  prop:``

```
const Button = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment)
  }
  return <button onClick={handleClick}>+{increment}</button>
}
const App = () => {
  let count = 0
  const incrementCount = increment => {
    //TODO
  }
  return (
    <div>
      <Button increment={1} onClickFunction={incrementCount} />
      <Button increment={10} onClickFunction={incrementCount} />
      <Button increment={100} onClickFunction={incrementCount} />
      <Button increment={1000} onClickFunction={incrementCount} />
      <span>{count}</span>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('app'))
```

``Here, every Button element has 2 props:  `increment`  and  `onClickFunction`. We create 4 different buttons, with 4 increment values: 1, 10, 100, 1000.``

``When the button in the Button component is clicked, the  `incrementCount`  function is called.``

`This function must increment the local count. How can we do so? We can use hooks:`

```
const { useState } = React
const Button = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment)
  }
  return <button onClick={handleClick}>+{increment}</button>
}
const App = () => {
  const [count, setCount] = useState(0)
  const incrementCount = increment => {
    setCount(count + increment)
  }
  return (
    <div>
      <Button increment={1} onClickFunction={incrementCount} />
      <Button increment={10} onClickFunction={incrementCount} />
      <Button increment={100} onClickFunction={incrementCount} />
      <Button increment={1000} onClickFunction={incrementCount} />
      <span>{count}</span>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('app'))
```

`` `useState()`  initializes the count variable at 0 and provides us the  `setCount()`  method to update its value.``

``We use both in the  `incrementCount()`  method implementation, which calls  `setCount()`updating the value to the existing value of  `count`, plus the increment passed by each Button component.``

`The complete example code can be seen at  [https://codepen.io/flaviocopes/pen/QzEQPR][100]`

### `Fetch and display GitHub users information via API`

``Very simple example of a form that accepts a GitHub username and once it receives a  `submit`  event, it asks the GitHub API for the user information, and prints them.``

``This code creates a reusable  **Card**  component. When you enter a name in the  `input`field managed by the  **Form**  component, this name is  _bound to its state_.``

``When  _Add card_  is pressed, the input form is cleared by clearing the  `userName`  state of the  **Form** component.``

``The example uses, in addition to React, the  [Axios][101]  library. It’s a nice useful and lightweight library to handle network requests. Add it to the Pen settings in Codepen, or install it locally using  `npm install axios`.``

``We start by creating the  `Card`  component, the one that will display our image and details as gathered from GitHub. It gets its data via props, using``

-   `` `props.avatar_url`  the user avatar``
-   `` `props.name`  the user name``
-   `` `props.blog`  the user website URL``

```
const Card = props => {
  return (
    <div style={{ margin: '1em' }}>
      <img alt="avatar" style={{ width: '70px' }} src={props.avatar_url} />
      <div>
        <div style={{ fontWeight: 'bold' }}>{props.name}</div>
        <div>{props.blog}</div>
      </div>
    </div>
  )
}
```

``We create a list of those components, which will be passed by a parent component in the  `cards`  prop to  `CardList`, which simply iterates on it using  `map()`  and outputs a list of cards:``

```
const CardList = props => (
  <div>
    {props.cards.map(card => (
      <Card {...card} />
    ))}
  </div>
)
```

``The parent component is App, which stores the  `cards`  array in its own state, managed using the  `useState()`  Hook:``

```
const App = () => {
  const [cards, setCards] = useState([])
  return (
    <div>
      <CardList cards={cards} />
    </div>
  )
}
```

``Cool! We must have a way now to ask GitHub for the details of a single username. We’ll do so using a  `Form`  component, where we manage our own state (`username`), and we ask GitHub for information about a user using their public APIs, via Axios:``

```
const Form = props => {
  const [username, setUsername] = useState('')
  handleSubmit = event => {
    event.preventDefault()
axios<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(221, 74, 104);">get</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token template-string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;"><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(102, 153, 0);">`https://api.github.com/users/</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>username<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(102, 153, 0);">`</span></span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(221, 74, 104);">then</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token parameter" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;">resp</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(154, 110, 58);">=&gt;</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>
  props<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(221, 74, 104);">onSubmit</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>resp<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>data<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
  <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(221, 74, 104);">setUsername</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(102, 153, 0);">''</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder="GitHub username"
        required
      />
      <button type="submit">Add card</button>
    </form>
  )
}
```

``When the form is submitted we call the  `handleSubmit`  event, and after the network call we call  `props.onSubmit`  passing the parent (`App`) the data we got from GitHub.``

``We add it to  `App`, passing a method to add a new card to the list of cards,  `addNewCard`, as its  `onSubmit`  prop:``

```
const App = () => {
  const [cards, setCards] = useState([])
  addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }
  return (
    <div>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  )
}
```

`Finally we render the app:`

```
ReactDOM.render(<App />, document.getElementById('app'))
```

`Here is the full source code of our little React app:`

```
const { useState } = React
const Card = props => {
  return (
    <div style={{ margin: '1em' }}>
      <img alt="avatar" style={{ width: '70px' }} src={props.avatar_url} />
      <div>
        <div style={{ fontWeight: 'bold' }}>{props.name}</div>
        <div>{props.blog}</div>
      </div>
    </div>
  )
}
const CardList = props => <div>{props.cards.map(card => <Card {...card} />)}</div>
const Form = props => {
  const [username, setUsername] = useState('')
  handleSubmit = event => {
    event.preventDefault()
axios
  <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(221, 74, 104);">get</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token template-string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;"><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(102, 153, 0);">`https://api.github.com/users/</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>username<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(102, 153, 0);">`</span></span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
  <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(221, 74, 104);">then</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token parameter" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;">resp</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(154, 110, 58);">=&gt;</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>
    props<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(221, 74, 104);">onSubmit</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>resp<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>data<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
    <span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(221, 74, 104);">setUsername</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(102, 153, 0);">''</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>
  <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span>  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder="GitHub username"
        required
      />
      <button type="submit">Add card</button>
    </form>
  )
}
const App = () => {
  const [cards, setCards] = useState([])
  addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }
  return (
    <div>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('app'))
```

`This is the final result:`

`![](https://cdn-media-1.freecodecamp.org/images/cZoqPqmbwvuUaIiWJ16fTj6VOhTIquXDECnP)`

`Check it out on Codepen at  [https://codepen.io/flaviocopes/pen/oJLyeY][102]`

### `SECTION 5: STYLING`

### `CSS in React`

`Using React you have various ways to add styling to your components.`

#### `Using classes and CSS`

`The first and most simple is to use classes, and use a normal CSS file to target those classes:`

```
const Button = () => {
  return <button className="button">A button</button>
}
.button {
  background-color: yellow;
}
```

`You can import the stylesheet using an import statement, like this:`

```
import './style.css'
```

`and  [Webpack][103]  will take care of adding the CSS property to the bundle.`

#### `Using the style attribute`

``A second method is to use the  `style`  attribute attached to a JSX element. Using this approach you don't need a separate CSS file.``

```
const Button = () => {
  return <button style={{ backgroundColor: 'yellow' }}>A button</button>
}
```

``CSS is defined in a slightly different way now. First, notice the double curly brackets: it’s because  `style`  accepts an object. We pass in a JavaScript object, which is defined in curly braces. We could also do this:``

```
const buttonStyle = { backgroundColor: 'yellow' }
const Button = () => {
  return <button style={buttonStyle}>A button</button>
}
```

``When using  `create-react-app`, those styles are autoprefixed by default thanks to its use of  [Autoprefixer][104].``

`Also, the style now is camelCased instead of using dashes. Every time a CSS property has a dash, remove it and start the next word capitalized.`

`Styles have the benefit of being local to the component, and they cannot leak to other components in other parts of the app, something that using classes and an external CSS file can’t provide.`

#### `Using CSS Modules`

`**CSS Modules**  seem to be a perfect spot in the middle: you use classes, but CSS is scoped to the component, which means that any styling you add cannot be applied to other components without your permission. And yet your styles are defined in a separate CSS file, which is easier to maintain than CSS in JavaScript (and you can use your good old CSS property names).`

``Start by creating a CSS file that ends with  `.module.css`, for example  `Button.module.css`. A great choice is to give it the same name as the component you are going to style``

`Add your CSS here, then import it inside the component file you want to style:`

```
import style from './Button.module.css'
```

`now you can use it in your JSX:`

```
const Button = () => {
  return <button className={style.content}>A button</button>
}
```

`That’s it! In the resulting markup, React will generate a specific, unique class for each rendered component, and assign the CSS to that class, so that the CSS is not affecting other markup.`

### `SASS in React`

``When you build a React application using  `[create-react-app][105]`, you have many options at your disposal when it comes to styling.``

> ``_Of course, if not using  `create-react-app`, you have all the choices in the world, but we limit the discussion to the  `create-react-app`-provided options._``

`You can style using plain classes and CSS files, using the style attribute or CSS Modules, to start with.`

`SASS/SCSS is a very popular option, a much loved one by many developers.`

``You can use it without any configuration at all, starting with  `create-react-app`  2.``

``All you need is a  `.sass`  or  `.scss`  file, and you just import it in a component:``

```
import './styles.scss'
```

`You can see an example of it working at  [https://codesandbox.io/s/18qq31rp3][106].`

### `Styled Components`

`Styled Components are one of the new ways to use CSS in modern JavaScript. It is the meant to be a successor of CSS Modules, a way to write CSS that’s scoped to a single component, and not leak to any other element in the page`

#### `A brief history`

`Once upon a time, the Web was really simple and CSS didn’t even exist. We laid out pages using  **tables** and frames. Good times.`

`Then  **CSS**  came to life, and after some time it became clear that frameworks could greatly help especially in building grids and layouts, Bootstrap and Foundation playing a big part in this.`

`Preprocessors like  **SASS**  and others helped a lot to slow down the adoption of frameworks, and to better organize the code, conventions like  **BEM**  and  **SMACSS**  grew in use, especially within teams.`

`Conventions are not a solution to everything, and they are complex to remember, so in the last few years with the increasing adoption of  [JavaScript][107]  and build processes in every frontend project, CSS found its way into JavaScript (**CSS-in-JS**).`

`New tools explored new ways of doing CSS-in-JS and a few succeeded with increasing popularity:`

-   `React Style`
-   `jsxstyle`
-   `Radium`

`and more.`

#### `Introducing Styled Components`

`One of the most popular of these tools is  **Styled Components**.`

`It is the meant to be a successor to  **CSS Modules**, a way to write CSS that’s scoped to a single component, and not leak to any other element in the page.`

`(more on CSS modules  [here][108]  and  [here][109])`

`Styled Components allow you to write plain CSS in your components without worrying about class name collisions.`

#### `Installation`

`Simply install styled-components using  [npm][110]  or  [yarn][111]:`

```
npm install styled-components
yarn add styled-components
```

`That’s it! Now all you have to do is to add this import:`

```
import styled from 'styled-components'
```

#### `Your first styled component`

``With the  `styled`  object imported, you can now start creating Styled Components. Here's the first one:``

```
const Button = styled.buttonfont-size: 1.5em;
  background-color: black;
  color: white;
```

`` `Button`  is now a React Component in all its greatness.``

``We created it using a function of the styled object, called  `button`  in this case, and passing some CSS properties in a  [template literal][112].``

`Now this component can be rendered in our container using the normal React syntax:`

```
render(<Button />)
```

``Styled Components offer other functions you can use to create other components, not just  `button`, like  `section`,  `h1`,  `input`  and many others.``

`The syntax used, with the backtick, might be weird at first, but it’s called  [Tagged Templates][113], it’s plain JavaScript and it’s a way to pass an argument to the function.`

#### `Using props to customize components`

`When you pass some props to a Styled Component, it will pass them down to the  [DOM][114]node mounted.`

``For example here’s how we pass the  `placeholder`  and  `type`  props to an  `input`component:``

```
const Input = styled.input//...
render(
  <div>
    <Input placeholder="..." type="text" />
  </div>
)
```

`This will do just what you think, inserting those props as HTML attributes.`

`Props instead of just being blindly passed down to the  [DOM][115]  can also be used to customize a component based on the prop value. Here’s an example:`

```
const Button = styled.buttonbackground: ${props =&gt; (props.primary ? 'black' : 'white')};
  color: ${props =&gt; (props.primary ? 'white' : 'black')};
render(
  <div>
    <Button>A normal button</Button>
    <Button>A normal button</Button>
    <Button primary>The primary button</Button>
  </div>
)
```

``Setting the  `primary`  prop changes the color of the button.``

#### `Extending an existing Styled Component`

``If you have one component and you want to create a similar one, just styled slightly differently, you can use  `extend`:``

```
const Button = styled.buttoncolor: black;
  //...
const WhiteButton = Button.extendcolor: white;
render(
  <div>
    <Button>A black button, like all buttons</Button>
    <WhiteButton>A white button</WhiteButton>
  </div>
)
```

#### `It’s Regular CSS`

`In Styled Components, you can use the CSS you already know and love. It’s just plain CSS. It is not pseudo CSS nor inline CSS with its limitations.`

`You can use media queries,  [nesting][116]  and anything else you might need.`

#### `Using Vendor Prefixes`

`Styled Components automatically add all the vendor prefixes needed, so you don’t need to worry about this problem.`

### `SECTION 6: TOOLING`

### `Babel`

`Babel is an awesome tool, and it’s been around for quite some time, but nowadays almost every JavaScript developer relies on it. This will continue, because Babel is now indispensable and has solved a big problem for everyone.`

`Which problem?`

`The problem that every Web Developer has surely had: a feature of JavaScript is available in the latest release of a browser, but not in the older versions. Or maybe Chrome or Firefox implement it, but Safari iOS and Edge do not.`

`For example, ES6 introduced the  **arrow function**:`

```
[1, 2, 3].map((n) => n + 1)
```

`Which is now supported by all modern browsers. IE11 does not support it, nor Opera Mini (How do I know? By checking the  [ES6 Compatibility Table][117]).`

`So how should you deal with this problem? Should you move on and leave those customers with older/incompatible browsers behind, or should you write older JavaScript code to make all your users happy?`

`Enter Babel. Babel is a  **compiler**: it takes code written in one standard, and it transpiles it to code written into another standard.`

`You can configure Babel to transpile modern ES2017 JavaScript into JavaScript ES5 syntax:`

```
[1, 2, 3].map(function(n) {
  return n + 1
})
```

`This must happen at build time, so you must setup a workflow that handles this for you.  [Webpack][118]  is a common solution.`

`(P.S. if all this  _ES_  thing sounds confusing to you, see more about ES versions  [in the ECMAScript guide][119])`

#### `Installing Babel`

`Babel is easily installed using  [npm][120], locally in a project:`

```
npm install --save-dev @babel/core @babel/cli
```

``Since npm now comes with  `[npx][121]`, locally installed CLI packages can run by typing the command in the project folder:``

`So we can run Babel by just running`

```
npx babel script.js
```

#### `An example Babel configuration`

`Babel out of the box does not do anything useful, you need to configure it and add plugins.`

> `[_Here is a list of Babel plugins_][122]`

`To solve the problem we talked about in the introduction (using arrow functions in every browser), we can run`

```
npm install --save-dev     @babel/plugin-transform-es2015-arrow-functions
```

``to download the package in the  `node_modules`  folder of our app, then we need to add``

```
{
  "plugins": ["transform-es2015-arrow-functions"]
}
```

``to the  `.babelrc`  file present in the application root folder. If you don't have that file already, you just create a blank file, and put that content into it.``

> `_TIP: If you have never seen a dot file (a file starting with a dot) it might be odd at first because that file might not appear in your file manager, as it’s a hidden file._`

``Now if we have a  `script.js`  file with this content:``

```
var a = () => {};
var a = (b) => b;
const double = [1,2,3].map((num) => num * 2);
console.log(double); // [2,4,6]
var bob = {
  _name: "Bob",
  _friends: ["Sally", "Tom"],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};
console.log(bob.printFriends());
```

``running  `babel script.js`  will output the following code:``

```
var a = function () {};var a = function (b) {
  return b;
};
const double = [1, 2, 3].map(function (num) {
  return num * 2;
});
console.log(double); // [2,4,6]
var bob = {
  _name: "Bob",
  _friends: ["Sally", "Tom"],
  printFriends() {
    var _this = this;
<span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(0, 119, 170);">this</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>_friends<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(221, 74, 104);">forEach</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(0, 119, 170);">function</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span><span class="token parameter" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;">f</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>
  <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> console<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(221, 74, 104);">log</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>_this<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>_name <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(154, 110, 58);">+</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(102, 153, 0);">" knows "</span> <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(154, 110, 58);">+</span> f<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">;</span>
<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">;</span>  }
};
console.log(bob.printFriends());
```

`As you can see arrow functions have all been converted to JavaScript ES5 functions.`

#### `Babel presets`

`We just saw in the previous article how Babel can be configured to transpile specific JavaScript features.`

`You can add much more plugins, but you can’t add to the configuration features one by one, it’s not practical.`

`This is why Babel offers  **presets**.`

``The most popular presets are  `env`  and  `react`.``

> ``_Tip: Babel 7 deprecated (and removed) yearly presets like  `preset-es2017`, and stage presets. Use  `@babel/preset-env`  instead._``

#### `` `env`  preset``

``The  `env`  preset is very nice: you tell it which environments you want to support, and it does everything for you,  **supporting all modern JavaScript features**.``

`E.g. “support the last 2 versions of every browser, but for Safari let’s support all versions since Safari 7”`

```
{
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["last 2 versions", "safari >= 7"]
      }
    }]
  ]
}
```

`or “I don’t need browser support, just let me work with  [Node.js][123]  6.10”`

```
{
  "presets": [
    ["env", {
      "targets": {
        "node": "6.10"
      }
    }]
  ]
}
```

#### `` `react`  preset``

``The  `react`  preset is very convenient when writing React apps: adding  `preset-flow`,  `syntax-jsx`,  `transform-react-jsx`,  `transform-react-display-name`.``

`By including it, you are all ready to go developing React apps, with JSX transforms and Flow support.`

#### `More info on presets`

`[https://babeljs.io/docs/plugins/][124]`

#### `Using Babel with webpack`

`If you want to run modern JavaScript in the browser, Babel on its own is not enough, you also need to bundle the code. Webpack is the perfect tool for this.`

`Modern JS needs two different stages: a compile stage, and a runtime stage. This is because some ES6+ features need a polyfill or a runtime helper.`

`To install the Babel polyfill runtime functionality, run`

```
npm install @babel/polyfill             @babel/runtime             @babel/plugin-transform-runtime
```

``Now in your  `webpack.config.js`  file add:``

```
entry: [
  'babel-polyfill',
  // your app scripts should be here
],
module: {
  loaders: [
    // Babel loader compiles ES2015 into ES5 for
    // complete cross-browser support
    {
      loader: 'babel-loader',
      test: /.js$/,
      // only include files present in the src subdirectory
      include: [path.resolve(dirname, "src")],
      // exclude node_modules, equivalent to the above line
      exclude: /node_modules/,
      query: {
        // Use the default ES2015 preset
        // to include all ES2015 features
        presets: ['es2015'],
        plugins: ['transform-runtime']
      }
    }
  ]
}
```

``**By keeping the presets and plugins information inside the  `webpack.config.js`  file, we can avoid having a  `.babelrc`  file.**``

### `**Webpack**`

`**Webpack is a tool that lets you compile JavaScript modules, also known as  **module bundler**. Given a large number of files, it generates a single file (or a few files) that run your app.**`

`**It can perform many operations:**`

-   `**helps you bundle your resources.**`
-   `**watches for changes and re-runs the tasks.**`
-   `**can run Babel transpilation to ES5, allowing you to use the latest JavaScript features without worrying about browser support.**`
-   `**can transpile CoffeeScript to JavaScript**`
-   `**can convert inline images to data URIs.**`
-   `**allows you to use require() for CSS files.**`
-   `**can run a development webserver.**`
-   `**can handle hot module replacement.**`
-   `**can split the output files into multiple files, to avoid having a huge js file to load in the first page hit.**`
-   `**can perform  [tree shaking][125].**`

`**Webpack is not limited to be use on the frontend, it’s also useful in backend Node.js development as well.**`

`**Predecessors of webpack, and still widely used tools, include:**`

-   `**Grunt**`
-   `**Broccoli**`
-   `**Gulp**`

`**There are lots of similarities in what those and Webpack can do, but the main difference is that those are known as  **task runners**, while webpack was born as a module bundler.**`

`**It’s a more focused tool: you specify an entry point to your app (it could even be an HTML file with script tags) and webpack analyzes the files and bundles all you need to run the app in a single JavaScript output file (or in more files if you use code splitting).**`

#### `**Installing webpack**`

`**Webpack can be installed globally or locally for each project.**`

#### `**Global install**`

`**Here’s how to install it globally with  [Yarn][126]:**`

```
yarn global add webpack webpack-cli
```

`**with  [npm][127]:**`

```
npm i -g webpack webpack-cli
```

`**once this is done, you should be able to run**`

```
webpack-cli
```

#### `**Local install**`

`**Webpack can be installed locally as well. It’s the recommended setup, because webpack can be updated per-project, and you have less resistance to using the latest features just for a small project rather than updating all the projects you have that use webpack.**`

`**With  [Yarn][128]:**`

```
yarn add webpack webpack-cli -D
```

`**with  [npm][129]:**`

```
npm i webpack webpack-cli --save-dev
```

``**Once this is done, add this to your  `package.json`  file:**``

```
{
  //...
  "scripts": {
    "build": "webpack"
  }
}
```

`**once this is done, you can run webpack by typing**`

```
yarn build
```

`**in the project root.**`

#### `**Webpack configuration**`

`**By default, webpack (starting from version 4) does not require any config if you respect these conventions:**`

-   ``**the  **entry point**  of your app is  `./src/index.js`**``
-   ``**the output is put in  `./dist/main.js`.**``
-   `**Webpack works in production mode**`

``**You can customize every little bit of webpack of course, when you need. The webpack configuration is stored in the  `webpack.config.js`  file, in the project root folder.**``

#### `**The entry point**`

``**By default the entry point is  `./src/index.js`  This simple example uses the  `./index.js`file as a starting point:**``

```
module.exports = {
  /.../
  entry: './index.js'
  /.../
}
```

#### `**The output**`

``**By default the output is generated in  `./dist/main.js`. This example puts the output bundle into  `app.js`:**``

```
module.exports = {
  /.../
  output: {
    path: path.resolve(dirname, 'dist'),
    filename: 'app.js'
  }
  /.../
}
```

#### `Loaders`

``Using webpack allows you to use  `import`  or  `require`  statements in your JavaScript code to not just include other JavaScript, but any kind of file, for example CSS.``

`Webpack aims to handle all our dependencies, not just JavaScript, and loaders are one way to do that.`

`For example, in your code you can use:`

```
import 'style.css'
```

`by using this loader configuration:`

```
module.exports = {
  /.../
  module: {
    rules: [
      { test: /.css$/, use: 'css-loader' },
    }]
  }
  /.../
}
```

`The  [regular expression][130]  targets any CSS file.`

`A loader can have options:`

```
module.exports = {
  /.../
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
  /.../
}
```

`You can require multiple loaders for each rule:`

```
module.exports = {
  /.../
  module: {
    rules: [
      {
        test: /.css$/,
        use:
          [
            'style-loader',
            'css-loader',
          ]
      }
    ]
  }
  /.../
}
```

``In this example,  `css-loader`  interprets the  `import 'style.css'`  directive in the CSS.  `style-loader`  is then responsible for injecting that CSS in the DOM, using a  `<style>`  tag.``

`The order matters, and it’s reversed (the last is executed first).`

`What kind of loaders are there? Many!  [You can find the full list here][131].`

`A commonly used loader is Babel, which is used to transpile modern JavaScript to ES5 code:`

```
module.exports = {
  /.../
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
  /.../
}
```

`This example makes Babel preprocess all our React/JSX files:`

```
module.exports = {
  /.../
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  }
  /.../
}
```

``[See the  `babel-loader`  options here][132].``

#### `Plugins`

`Plugins are like loaders, but on steroids. They can do things that loaders can’t do, and they are the main building block of webpack.`

`Take this example:`

```
module.exports = {
  /.../
  plugins: [
    new HTMLWebpackPlugin()
  ]
  /.../
}
```

``The  `HTMLWebpackPlugin`  plugin has the job of automatically creating an HTML file, adding the output JS bundle path, so the JavaScript is ready to be served.``

`There are  [lots of plugins available][133].`

``One useful plugin,  `CleanWebpackPlugin`, can be used to clear the  `dist/`  folder before creating any output, so you don't leave files around when you change the name of the output file:``

```
module.exports = {
  /.../
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ]
  /.../
}
```

#### `The webpack mode`

``This mode (introduced in webpack 4) sets the environment on which webpack works. It can be set to  `development`  or  `production`  (defaults to production, so you only set it when moving to development)``

```
module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  }
}
```

`Development mode:`

-   `builds very fast`
-   `is less optimized than production`
-   `does not remove comments`
-   `provides more detailed error messages and suggestions`
-   `provides a better debugging experience`

`Production mode is slower to build, since it needs to generate a more optimized bundle. The resulting JavaScript file is smaller in size, as it removes many things that are not needed in production.`

``I made a sample app that just prints a  `console.log`  statement.``

`Here’s the production bundle:`

`![](https://cdn-media-1.freecodecamp.org/images/kbXOiSFaO06VSDxcLC29Nh4a8ycSoaL9LDup)`

`Here’s the development bundle:`

`![](https://cdn-media-1.freecodecamp.org/images/W-1sAge4rvYL0aH00e7FuyJ5NLv7PJYpves0)`

#### `Running webpack`

``Webpack can be run from the command line manually if installed globally, but generally you write a script inside the  `package.json`  file, which is then run using  `npm`  or  `yarn`.``

``For example this  `package.json`  scripts definition we used before:``

```
"scripts": {
  "build": "webpack"
}
```

``allows us to run  `webpack`  by running``

```
npm run build
```

`or`

```
yarn run build
```

`or simply`

```
yarn build
```

#### `Watching changes`

`Webpack can automatically rebuild the bundle when a change in your app happens, and keep listening for the next change.`

`Just add this script:`

```
"scripts": {
  "watch": "webpack --watch"
}
```

`and run`

```
npm run watch
```

`or`

```
yarn run watch
```

`or simply`

```
yarn watch
```

``One nice feature of the watch mode is that the bundle is only changed if the build has no errors. If there are errors,  `watch`  will keep listening for changes, and try to rebuild the bundle, but the current, working bundle is not affected by those problematic builds.``

#### `Handling images`

``Webpack allows us to use images in a very convenient way, using the  `[file-loader][134]`loader.``

`This simple configuration:`

```
module.exports = {
  /.../
  module: {
    rules: [
      {
        test: /.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
  /.../
}
```

`Allows you to import images in your JavaScript:`

```
import Icon from './icon.png'
const img = new Image()
img.src = Icon
element.appendChild(img)
```

``(`img`  is an HTMLImageElement. Check the  [Image docs][135])``

`` `file-loader`  can handle other asset types as well, like fonts, CSV files, xml, and more.``

``Another nice tool to work with images is the  `url-loader`  loader.``

`This example loads any PNG file smaller than 8KB as a  [data URL][136].`

```
module.exports = {
  /.../
  module: {
    rules: [
      {
        test: /.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
  /.../
}
```

#### `Process your SASS code and transform it to CSS`

``Using  `sass-loader`,  `css-loader`  and  `style-loader`:``

```
module.exports = {
  /.../
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
  /.../
}
```

#### `Generate Source Maps`

`Since webpack bundles the code, Source Maps are mandatory to get a reference to the original file that raised an error, for example.`

``You tell webpack to generate source maps using the  `devtool`  property of the configuration:``

```
module.exports = {
  /.../
  devtool: 'inline-source-map',
  /.../
}
```

`` `devtool`  has  [many possible values][137], the most used probably are:``

-   `` `none`: adds no source maps``
-   `` `source-map`: ideal for production, provides a separate source map that can be minimized, and adds a reference into the bundle, so development tools know that the source map is available. Of course you should configure the server to avoid shipping this, and just use it for debugging purposes``
-   `` `inline-source-map`: ideal for development, inlines the source map as a Data URL``

### `SECTION 7: TESTING`

### `Jest`

`Jest is a library for testing JavaScript code.`

`It’s an open source project maintained by Facebook, and it’s especially well suited for React code testing, although not limited to that: it can test any JavaScript code. Its strengths are:`

-   `it’s fast`
-   `it can perform  **snapshot testing**`
-   `it’s opinionated, and provides everything out of the box without requiring you to make choices`

`Jest is a tool very similar to Mocha, although they have differences:`

-   `Mocha is less opinionated, while Jest has a certain set of conventions`
-   `Mocha requires more configuration, while Jest works usually out of the box, thanks to being opinionated`
-   `Mocha is older and more established, with more tooling integrations`

`In my opinion the biggest feature of Jest is it’s an out of the box solution that works without having to interact with other testing libraries to perform its job.`

#### `Installation`

``Jest is automatically installed in  `create-react-app`, so if you use that, you don’t need to install Jest.``

`Jest can be installed in any other project using  [Yarn][138]:`

```
yarn add --dev jest
```

`or  [npm][139]:`

```
npm install --save-dev jest
```

``notice how we instruct both to put Jest in the  `devDependencies`  part of the  `package.json`  file, so that it will only be installed in the development environment and not in production.``

``Add this line to the scripts part of your  `package.json`  file:``

```
{
  "scripts": {
    "test": "jest"
  }
}
```

``so that tests can be run using  `yarn test`  or  `npm run test`.``

`Alternatively, you can install Jest globally:`

```
yarn global add jest
```

``and run all your tests using the  `jest`  command line tool.``

#### `Create the first Jest test`

``Projects created with  `create-react-app`  have Jest installed and preconfigured out of the box, but adding Jest to any project is as easy as typing``

```
yarn add --dev jest
```

``Add to your  `package.json`  this line:``

```
{
  "scripts": {
    "test": "jest"
  }
}
```

``and run your tests by executing  `yarn test`  in your shell.``

`Now, you don’t have any tests here, so nothing is going to be executed:`

`![](https://cdn-media-1.freecodecamp.org/images/QJ4lMCN6PhDyBBZ8mPyLmLciew9p9cUE9ug0)`

``Let’s create the first test. Open a  `math.js`  file and type a couple functions that we’ll later test:``

```
const sum = (a, b) => a + b
const mul = (a, b) => a * b
const sub = (a, b) => a - b
const div = (a, b) => a / b
export default { sum, mul, sub, div }
```

``Now create a  `math.test.js`  file, in the same folder, and there we’ll use Jest to test the functions defined in  `math.js`:``

```
const { sum, mul, sub, div } = require('./math')
test('Adding 1 + 1 equals 2', () => {
  expect(sum(1, 1)).toBe(2)
})
test('Multiplying 1 * 1 equals 1', () => {
  expect(mul(1, 1)).toBe(1)
})
test('Subtracting 1 - 1 equals 0', () => {
  expect(sub(1, 1)).toBe(0)
})
test('Dividing 1 / 1 equals 1', () => {
  expect(div(1, 1)).toBe(1)
})
```

``Running  `yarn test`  results in Jest being run on all the test files it finds, and returning us the end result:``

`![](https://cdn-media-1.freecodecamp.org/images/vGSvRogM-QF8N3EP5j9vUYYrkWvRc89OhE98)`

#### `Run Jest with VS Code`

`Visual Studio Code is a great editor for JavaScript development. The  [Jest extension][140]offers a top notch integration for our tests.`

`Once you install it, it will automatically detect if you have installed Jest in your devDependencies and run the tests. You can also invoke the tests manually by selecting the  **Jest: Start Runner**  command. It will run the tests and stay in watch mode to re-run them whenever you change one of the files that have a test (or a test file):`

`![](https://cdn-media-1.freecodecamp.org/images/WYyCsxacP34Fss8u9jT5lT0u3O--1Uwz9cKW)`

#### `Matchers`

``In the previous article I used  `toBe()`  as the only  **matcher**:``

```
test('Adding 1 + 1 equals 2', () => {
  expect(sum(1, 1)).toBe(2)
})
```

`A matcher is a method that lets you test values.`

``Most commonly used matchers, comparing the value of the result of  `expect()`  with the value passed in as argument, are:``

-   `` `toBe`  compares strict equality, using  `===` ``
-   `` `toEqual`  compares the values of two variables. If it’s an object or array, it checks the equality of all the properties or elements``
-   `` `toBeNull`  is true when passing a null value``
-   `` `toBeDefined`  is true when passing a defined value (opposite to the above)``
-   `` `toBeUndefined`  is true when passing an undefined value``
-   `` `toBeCloseTo`  is used to compare floating values, avoiding rounding errors``
-   `` `toBeTruthy`  true if the value is considered true (like an  `if`  does)``
-   `` `toBeFalsy`  true if the value is considered false (like an  `if`  does)``
-   `` `toBeGreaterThan`  true if the result of expect() is higher than the argument``
-   `` `toBeGreaterThanOrEqual`  true if the result of expect() is equal to the argument, or higher than the argument``
-   `` `toBeLessThan`  true if the result of expect() is lower than the argument``
-   `` `toBeLessThanOrEqual`  true if the result of expect() is equal to the argument, or lower than the argument``
-   `` `toMatch`  is used to compare strings with  [regular expression][141]  pattern matching``
-   `` `toContain`  is used in arrays, true if the expected array contains the argument in its elements set``
-   `` `toHaveLength(number)`: checks the length of an array``
-   `` `toHaveProperty(key, value)`: checks if an object has a property, and optionally checks its value``
-   `` `toThrow`  checks if a function you pass throws an exception (in general) or a specific exception``
-   `` `toBeInstanceOf()`: checks if an object is an instance of a class``

``All those matchers can be negated using  `.not.`  inside the statement, for example:``

```
test('Adding 1 + 1 does not equal 3', () => {
  expect(sum(1, 1)).not.toBe(3)
})
```

``For use with promises, you can use  `.resolves`  and  `.rejects`:``

```
expect(Promise.resolve('lemon')).resolves.toBe('lemon')
expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus')
```

#### `Setup`

`Before running your tests you will want to perform some initialization.`

``To do something once before all the tests run, use the  `beforeAll()`  function:``

```
beforeAll(() => {
  //do something
})
```

``To perform something before each test runs, use  `beforeEach()`:``

```
beforeEach(() => {
  //do something
})
```

#### `Teardown`

`Just as you can do with setup, you can also perform something after each test runs:`

```
afterEach(() => {
  //do something
})
```

`and after all tests end:`

```
afterAll(() => {
  //do something
})
```

#### `Group tests using describe()`

`You can create groups of tests, in a single file, that isolate the setup and teardown functions:`

```
describe('first set', () => {
  beforeEach(() => {
    //do something
  })
  afterAll(() => {
    //do something
  })
  test(/.../)
  test(/.../)
})
describe('second set', () => {
  beforeEach(() => {
    //do something
  })
  beforeAll(() => {
    //do something
  })
  test(/.../)
  test(/.../)
}) 
```

#### `Testing asynchronous code`

`Asynchronous code in modern JavaScript can have basically 2 forms: callbacks and promises. On top of promises we can use async/await.`

#### `Callbacks`

``You can’t have a test in a callback, because Jest won’t execute it — the execution of the test file ends before the callback is called. To fix this, pass a parameter to the test function, which you can conveniently call  `done`. Jest will wait until you call  `done()`before ending that test:``

```
//uppercase.js
function uppercase(str, callback) {
  callback(str.toUpperCase())
}
module.exports = uppercase
//uppercase.test.js
const uppercase = require('./src/uppercase')
test(uppercase 'test' to equal 'TEST', (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST')
    done()
  }
})
```

`![](https://cdn-media-1.freecodecamp.org/images/wsyP30ZeaXYM6LTu4UOiTIg4cFjUOo4GtutV)`

#### `Promises`

`With functions that return promises, we simply  **return a promise**  from the test:`

```
//uppercase.js
const uppercase = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject('Empty string')
      return
    }
    resolve(str.toUpperCase())
  })
}
module.exports = uppercase
//uppercase.test.js
const uppercase = require('./uppercase')
test(uppercase 'test' to equal 'TEST', () => {
  return uppercase('test').then(str => {
    expect(str).toBe('TEST')
  })
})
```

`![](https://cdn-media-1.freecodecamp.org/images/8j7LKC8uKE5Tw0X4WN4Gm0rD3NziyPxNwyCn)`

``Promises that are rejected can be tested using  `.catch()`:``

```
//uppercase.js
const uppercase = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject('Empty string')
      return
    }
    resolve(str.toUpperCase())
  })
}
module.exports = uppercase
//uppercase.test.js
const uppercase = require('./uppercase')
test(uppercase 'test' to equal 'TEST', () => {
  return uppercase('').catch(e => {
    expect(e).toMatch('Empty string')
  })
})
```

`![](https://cdn-media-1.freecodecamp.org/images/F9HWCuZKWwG1RMZdNkDAaGMRsC0zaIsMokia)`

#### `Async/await`

`To test functions that return promises we can also use async/await, which makes the syntax very straightforward and simple:`

```
//uppercase.test.js
const uppercase = require('./uppercase')
test(uppercase 'test' to equal 'TEST', async () => {
  const str = await uppercase('test')
  expect(str).toBe('TEST')
})
```

`![](https://cdn-media-1.freecodecamp.org/images/7xWQMgM0PC9AGUBewAzcCgNWvHIjjxerfRxR)`

#### `Mocking`

`In testing,  **mocking**  allows you to test functionality that depends on:`

-   `**Database**`
-   `**Network**  requests`
-   `access to  **Files**`
-   `any  **External**  system`

`so that:`

1.  `your tests run  **faster**, giving a quick turnaround time during development`
2.  `your tests are  **independent**  of network conditions, or the state of the database`
3.  `your tests do not  **pollute**  any data storage because they do not touch the database`
4.  `any change done in a test does not change the state for subsequent tests, and re-running the test suite should start from a known and reproducible starting point`
5.  `you don’t have to worry about rate limiting on API calls and network requests`

`Mocking is useful when you want to avoid side effects (e.g. writing to a database) or you want to skip slow portions of code (like network access), and also avoids implications with running your tests multiple times (e.g. imagine a function that sends an email or calls a rate-limited API).`

`Even more important, if you are writing a  **Unit Test**, you should test the functionality of a function in isolation, not with all its baggage of things it touches.`

`Using mocks, you can inspect if a module function has been called and which parameters were used, with:`

-   `` `expect().toHaveBeenCalled()`: check if a spied function has been called``
-   `` `expect().toHaveBeenCalledTimes()`: count how many times a spied function has been called``
-   `` `expect().toHaveBeenCalledWith()`: check if the function has been called with a specific set of parameters``
-   `` `expect().toHaveBeenLastCalledWith()`: check the parameters of the last time the function has been invoked``

#### `Spy packages without affecting the functions code`

``When you import a package, you can tell Jest to “spy” on the execution of a particular function, using  `spyOn()`, without affecting how that method works.``

`Example:`

```
const mathjs = require('mathjs')
test(The mathjs log function, () => {
  const spy = jest.spyOn(mathjs, 'log')
  const result = mathjs.log(10000, 10)
  expect(mathjs.log).toHaveBeenCalled()
  expect(mathjs.log).toHaveBeenCalledWith(10000, 10)
})
```

#### `Mock an entire package`

``Jest provides a convenient way to mock an entire package. Create a  `**mocks**`folder in the project root, and in this folder create one JavaScript file for each of your packages.``

``Say you import  `mathjs`. Create a  `**mocks**/mathjs.js`  file in your project root, and add this content:``

```
module.exports = {
  log: jest.fn(() => 'test')
}
```

`This will mock the log() function of the package. Add as many functions as you want to mock:`

```
const mathjs = require('mathjs')
test(The mathjs log function, () => {
  const result = mathjs.log(10000, 10)
  expect(result).toBe('test')
  expect(mathjs.log).toHaveBeenCalled()
  expect(mathjs.log).toHaveBeenCalledWith(10000, 10)
})
```

#### `Mock a single function`

``More simply, you can mock a single function using  `jest.fn()`:``

```
const mathjs = require('mathjs')
mathjs.log = jest.fn(() => 'test')
test(The mathjs log function, () => {
  const result = mathjs.log(10000, 10)
  expect(result).toBe('test')
  expect(mathjs.log).toHaveBeenCalled()
  expect(mathjs.log).toHaveBeenCalledWith(10000, 10)
})
```

``You can also use  `jest.fn().mockReturnValue('test')`  to create a simple mock that does nothing except returning a value.``

#### `Pre-built mocks`

``You can find pre-made mocks for popular libraries. For example this package  [https://github.com/jefflau/jest-fetch-mock][142]  allows you to mock  `fetch()`  calls, and provide sample return values without interacting with the actual server in your tests.``

#### `Snapshot testing`

`Snapshot testing is a pretty cool feature offered by Jest. It can memorize how your UI components are rendered, and compare it to the current test, raising an error if there’s a mismatch.`

``This is a simple test on the App component of a simple  `create-react-app`  application (make sure you install  `react-test-renderer`):``

```
import React from 'react'
import App from './App'
import renderer from 'react-test-renderer'
it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
```

``the first time you run this test, Jest saves the snapshot to the  `**snapshots**`folder. Here’s what App.test.js.snap contains:``

```
// Jest Snapshot v1, https://goo.gl/fbAQLP
exports[renders correctly 1] = &lt;div
  className="App"
&gt;
  &lt;header
    className="App-header"
  &gt;
    &lt;img
      alt="logo"
      className="App-logo"
      src="logo.svg"
    /&gt;
    &lt;h1
      className="App-title"
    &gt;
      Welcome to React
    &lt;/h1&gt;
  &lt;/header&gt;
  &lt;p
    className="App-intro"
  &gt;
    To get started, edit
    &lt;code&gt;
      src/App.js
    &lt;/code&gt;
     and save to reload.
  &lt;/p&gt;
&lt;/div&gt;
```

`As you see it’s the code that the App component renders, nothing more.`

``The next time the test compares the output of  `<App`  /> to this. If App changes, you get an error:``

`![](https://cdn-media-1.freecodecamp.org/images/imS-QSkC1rmVVRYLkLYSJrGk5b3DOjodEJkx)`

``When using  `yarn test`  in  `create-react-app`  you are in  **watch mode**, and from there you can press  `w`  and show more options:``

```
Watch Usage
 › Press u to update failing snapshots.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

``If your change is intended, pressing  `u`  will update the failing snapshots, and make the test pass.``

``You can also update the snapshot by running  `jest -u`  (or  `jest --updateSnapshot`) outside of watch mode.``

### `Testing React components`

`The easiest way to start with testing React components is doing snapshot testing, a testing technique that lets you test components in isolation.`

`If you are familiar with testing software, it’s just like unit testing you do for classes: you test each component functionality.`

``I assume you created a React app with  `create-react-app`, which already comes with  **Jest**  installed, the testing package we'll need.``

``Let’s start with a simple test. CodeSandbox is a great environment to try this out. Start with a React sandbox, and create an  `App.js`  component in a  `components`  folder, and add an  `App.test.js`  file.``

```
import React from 'react'
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  )
}
```

`Our first test is dumb:`

```
test('First test', () => {
  expect(true).toBeTruthy()
})
```

`When CodeSandbox detects test files, it automatically runs them for you, and you can click the Tests button in the bottom of the view to show your test results:`

`![](https://cdn-media-1.freecodecamp.org/images/DKFPyZSWF0O2ldKLAMyz7i0Di9NLqMs-ChQ4)`

`A test file can contain multiple tests:`

`![](https://cdn-media-1.freecodecamp.org/images/iWZgjKzyxhyAtvjpsyTTEpzs4pKot938aVjk)`

`Let’s do something a bit more useful now, to actually test a React component. We only have App now, which is not doing anything really useful, so let’s first set up the environment with a little application with more functionality: the counter app we built previously. If you skipped it, you can go back and read how we built it, but for easier reference I add it here again.`

``It’s just 2 components: App and Button. Create the  `App.js`  file:``

```
import React, { useState } from 'react'
import Button from './Button'
const App = () => {
  const [count, setCount] = useState(0)
  const incrementCount = increment => {
    setCount(count + increment)
  }
  return (
    <div>
      <Button increment={1} onClickFunction={incrementCount} />
      <Button increment={10} onClickFunction={incrementCount} />
      <Button increment={100} onClickFunction={incrementCount} />
      <Button increment={1000} onClickFunction={incrementCount} />
      <span>{count}</span>
    </div>
  )
}
export default App
```

``and the  `Button.js`  file:``

```
import React from 'react'
const Button = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment)
  }
  return <button onClick={handleClick}>+{increment}</button>
}
export default Button
```

``We are going to use the  `react-testing-library`, which is a great help as it allows us to inspect the output of every component and to apply events on them. You can read more about it on  [https://github.com/kentcdodds/react-testing-library][144]  or watch  [this video][145].``

`Let’s test the Button component first.`

``We start by importing  `render`  and  `fireEvent`  from  `react-testing-library`, two helpers. The first lets us render JSX. The second lets us emit events on a component.``

``Create a  `Button.test.js`  and put it in the same folder as  `Button.js`.``

```
import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Button from './Button'
```

``Buttons are used in the app to accept a click event and then they call a function passed to the  `onClickFunction`  prop. We add a  `count`  variable and we create a function that increments it:``

```
let count
const incrementCount = increment => {
  count += increment
}
```

``Now off to the actual tests. We first initialize count to 0, and we render a  `+1`  `Button`component passing a  `1`  to  `increment`  and our  `incrementCount`  function to  `onClickFunction`.``

``Then we get the content of the first child of the component, and we check it outputs  `+1`.``

`We then proceed to clicking the button, and we check that the count got from 0 to 1:`

```
test('+1 Button works', () => {
  count = 0
  const { container } = render(
    <Button increment={1} onClickFunction={incrementCount} />
  )
  const button = container.firstChild
  expect(button.textContent).toBe('+1')
  expect(count).toBe(0)
  fireEvent.click(button)
  expect(count).toBe(1)
})
```

``Similarly we test a +100 button, this time checking the output is  `+100`  and the button click increments the count of 100.``

```
test('+100 Button works', () => {
  count = 0
  const { container } = render(
    <Button increment={100} onClickFunction={incrementCount} />
  )
  const button = container.firstChild
  expect(button.textContent).toBe('+100')
  expect(count).toBe(0)
  fireEvent.click(button)
  expect(count).toBe(100)
})
```

`Let’s test the App component now. It shows 4 buttons and the result in the page. We can inspect each button and see if the result increases when we click them, clicking multiple times as well:`

```
import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import App from './App'
test('App works', () => {
  const { container } = render(<App />)
  console.log(container)
  const buttons = container.querySelectorAll('button')
  expect(buttons[0].textContent).toBe('+1')
  expect(buttons[1].textContent).toBe('+10')
  expect(buttons[2].textContent).toBe('+100')
  expect(buttons[3].textContent).toBe('+1000')
  const result = container.querySelector('span')
  expect(result.textContent).toBe('0')
  fireEvent.click(buttons[0])
  expect(result.textContent).toBe('1')
  fireEvent.click(buttons[1])
  expect(result.textContent).toBe('11')
  fireEvent.click(buttons[2])
  expect(result.textContent).toBe('111')
  fireEvent.click(buttons[3])
  expect(result.textContent).toBe('1111')
  fireEvent.click(buttons[2])
  expect(result.textContent).toBe('1211')
  fireEvent.click(buttons[1])
  expect(result.textContent).toBe('1221')
  fireEvent.click(buttons[0])
  expect(result.textContent).toBe('1222')
})
```

`Check the code working on this CodeSandbox:  [https://codesandbox.io/s/pprl4y0wq][146]`

### `SECTION 8: THE REACT ECOSYSTEM`

`The ecosystem around React is huge. Here I introduce you to 4 of the most popular projects based upon React: React Router, Redux, Next.js, Gatsby.`

### `React Router`

`React Router is the de-facto React routing library, and it’s one of the most popular projects built on top of React.`

`React at its core is a very simple library, and it does not dictate anything about routing.`

`Routing in a Single Page Application is the way to introduce some features to navigating the app through links, which are  **expected**  in normal web applications:`

1.  `The browser should  **change the URL**  when you navigate to a different screen`
2.  `**Deep linking**  should work: if you point the browser to a URL, the application should reconstruct the same view that was presented when the URL was generated.`
3.  `The  **browser back (and forward) button**  should work like expected.`

`**Routing links together your application navigation with the navigation features offered by the browser**: the  **address bar**  and the  **navigation buttons**.`

`React Router offers a way to write your code so that  **it will show certain components of your app only if the route matches what you define**.`

### `Installation`

`With  [npm][147]:`

```
npm install react-router-dom
```

`With  [Yarn][148]:`

```
yarn add react-router-dom
```

### `Types of routes`

`React Router provides two different kind of routes:`

-   `` `BrowserRouter` ``
-   `` `HashRouter` ``

`One builds classic URLs, the other builds URLs with the hash:`

```
https://application.com/dashboard   /* BrowserRouter /
https://application.com/#/dashboard / HashRouter    */
```

``Which one to use is mainly dictated by the browsers you need to support.  `BrowserRouter`  uses the  [History API][151], which is relatively recent, and not supported in IE9 and below. If you don't have to worry about older browsers, it's the recommended choice.``

### `Components`

`The 3 components you will interact the most when working with React Router are:`

-   `` `BrowserRouter`, usually aliased as  `Router` ``
-   `` `Link` ``
-   `` `Route` ``

`` `BrowserRouter`  wraps all your Route components.``

`` `Link`  components are - as you can imagine - used to generate links to your routes``

`` `Route`  components are responsible for showing - or hiding - the components they contain.``

### `BrowserRouter`

`Here’s a simple example of the BrowserRouter component. You import it from react-router-dom, and you use it to wrap all your app:`

```
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.render(
  <Router>
      <div>
        <!-- -->
      </div>
  </Router>,
  document.getElementById('app')
)
```

``A BrowserRouter component can only have one child element, so we wrap all we’re going to add in a  `div`  element.``

### `Link`

``The Link component is used to trigger new routes. You import it from  `react-router-dom`, and you can add the Link components to point at different routes, with the  `to`attribute:``

```
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link } from 'react-router-dom'
ReactDOM.render(
  <Router>
      <div>
        <aside>
          <Link to={/dashboard}>Dashboard</Link>
          <Link to={/about}>About</Link>
        </aside>
        <!-- -->
      </div>
  </Router>,
  document.getElementById('app')
)
```

### `Route`

`Now let’s add the Route component in the above snippet to make things actually work as we want:`

```
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    ...
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
    ...
  </div>
)
ReactDOM.render(
  <Router>
    <div>
      <aside>
        <Link to={/}>Dashboard</Link>
        <Link to={/about}>About</Link>
      </aside>
  &lt;main&gt;
    &lt;Route exact path="/" component={Dashboard} /&gt;
    &lt;Route path="/about" component={About} /&gt;
  &lt;/main&gt;
&lt;/div&gt;  </Router>,
  document.getElementById('app')
)
```

`Check this example on Glitch:  [https://flaviocopes-react-router-v4.glitch.me/][152]`

``When the route matches  `/`, the application shows the  **Dashboard**  component.``

``When the route is changed by clicking the “About” link to  `/about`, the Dashboard component is removed and the  **About**  component is inserted in the DOM.``

``Notice the  `exact`  attribute. Without this,  `path="/"`  would also match  `/about`, since  `/`is contained in the route.``

### `Match multiple paths`

``You can have a route respond to multiple paths simply using a regex, because  `path`  can be a regular expressions string:``

```
<Route path="/(about|who)/" component={Dashboard} />
```

### `Inline rendering`

``Instead of specifying a  `component`  property on  `Route`, you can set a  `render`  prop:``

```
<Route
  path="/(about|who)/"
  render={() => (
    <div>
      <h2>About</h2>
      ...
    </div>
  )}
/>
```

### `Match dynamic route parameter`

`You already saw how to use static routes like`

```
const Posts = () => (
  <div>
    <h2>Posts</h2>
    ...
  </div>
)
//...
<Route exact path="/posts" component={Posts} />
```

`Here’s how to handle dynamic routes:`

```
const Post = ({match}) => (
  <div>
    <h2>Post #{match.params.id}</h2>
    ...
  </div>
)
//...
<Route exact path="/post/:id" component={Post} />
```

``In your Route component you can lookup the dynamic parameters in  `match.params`.``

`` `match`  is also available in inline rendered routes, and this is especially useful in this case, because we can use the  `id`  parameter to lookup the post data in our data source before rendering Post:``

```
const posts = [
  { id: 1, title: 'First', content: 'Hello world!' },
  { id: 2, title: 'Second', content: 'Hello again!' }
]
const Post = ({post}) => (
  <div>
    <h2>{post.title}</h2>
    {post.content}
  </div>
)
//...
<Route exact path="/post/:id" render={({match}) => (
  <Post post={posts.find(p => p.id === match.params.id)} />
)} />
```

### `Redux`

`Redux is a state manager that’s usually used along with React, but it’s not tied to that library — it can be used with other technologies as well, but we’ll stick to React for the sake of the explanation..`

`Redux is a way to manage an application state, and move it to an  **external global store**.`

`There are a few concepts to grasp, but once you do, Redux is a very simple approach to the problem.`

`Redux is very popular with React applications, but it’s in no way unique to React: there are bindings for nearly any popular framework. That said, I’ll make some examples using React as it is its primary use case.`

#### `When should you use Redux?`

`Redux is ideal for medium to big apps, and you should only use it when you have trouble managing the state with the default state management of React, or the other library you use.`

`Simple apps should not need it at all (and there’s nothing wrong with simple apps).`

#### `Immutable State Tree`

`In Redux, the whole state of the application is represented by  **one**  [JavaScript][153]  object, called  **State**  or  **State Tree**.`

`We call it  **Immutable State Tree**  because it is read only: it can’t be changed directly.`

`It can only be changed by dispatching an  **Action**.`

#### `Actions`

`An  **Action**  is  **a JavaScript object that describes a change in a minimal way**  (with just the information needed):`

```
{
  type: 'CLICKED_SIDEBAR'
}
// e.g. with more data
{
  type: 'SELECTED_USER',
  userId: 232
}
```

``The only requirement of an action object is having a  `type`  property, whose value is usually a string.``

#### `Actions types should be constants`

`In a simple app an action type can be defined as a string, as I did in the example in the previous lesson.`

`When the app grows is best to use constants:`

```
const ADD_ITEM = 'ADD_ITEM'
const action = { type: ADD_ITEM, title: 'Third item' }
```

`and to separate actions in their own files, and import them`

```
import { ADD_ITEM, REMOVE_ITEM } from './actions'
```

#### `Action creators`

`**Actions Creators**  are functions that create actions.`

```
function addItem(t) {
  return {
    type: ADD_ITEM,
    title: t
  }
}
```

`You usually run action creators in combination with triggering the dispatcher:`

```
dispatch(addItem('Milk'))
```

`or by defining an action dispatcher function:`

```
const dispatchAddItem = i => dispatch(addItem(i))
dispatchAddItem('Milk')
```

#### `Reducers`

`When an action is fired, something must happen, the state of the application must change.`

`This is the job of  **reducers**.`

`A  **reducer**  is a  **pure function**  that calculates the next State Tree based on the previous State Tree, and the action dispatched.`

```
;(currentState, action) => newState
```

`A pure function takes an input and returns an output without changing the input or anything else. Thus, a reducer returns a completely new state tree object that substitutes the previous one.`

#### `What a reducer should not do`

`A reducer should be a pure function, so it should:`

-   `never mutate its arguments`
-   ``never mutate the state, but instead create a new one with  `Object.assign({}, ...)` ``
-   `never generate side-effects (no API calls changing anything)`
-   ``never call non-pure functions, functions that change their output based on factors other than their input (e.g.  `Date.now()`  or  `Math.random()`)``

`There is no reinforcement, but you should stick to the rules.`

#### `Multiple reducers`

`Since the state of a complex app could be really wide, there is not a single reducer, but many reducers for any kind of action.`

#### `A simulation of a reducer`

`At its core, Redux can be simplified with this simple model:`

#### `The state`

```
{
  list: [
    { title: "First item" },
    { title: "Second item" },
  ],
  title: 'Groceries list'
}
```

#### `A list of actions`

```
{ type: 'ADD_ITEM', title: 'Third item' }
{ type: 'REMOVE_ITEM', index: 1 }
{ type: 'CHANGE_LIST_TITLE', title: 'Road trip list' }
```

#### `A reducer for every part of the state`

```
const title = (state = '', action) => {
    if (action.type === 'CHANGE_LIST_TITLE') {
      return action.title
    } else {
      return state
    }
}
const list = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.concat([{ title: action.title }])
    case 'REMOVE_ITEM':
      return state.map((item, index) =>
        action.index === index
          ? { title: item.title }
          : item
    default:
      return state
  }
}
```

#### `A reducer for the whole state`

```
const listManager = (state = {}, action) => {
  return {
    title: title(state.title, action),
    list: list(state.list, action)
  }
}
```

#### `The Store`

`The  **Store**  is an object that:`

-   `**holds the state**  of the app`
-   ``**exposes the state**  via  `getState()` ``
-   ``allows us to  **update the state**  via  `dispatch()` ``
-   ``allows us to (un)register a  **state change listener**  using  `subscribe()` ``

`A store is  **unique**  in the app.`

`Here is how a store for the listManager app is created:`

```
import { createStore } from 'redux'
import listManager from './reducers'
let store = createStore(listManager)
```

#### `Can I initialize the store with server-side data?`

`Sure,  **just pass a starting state**:`

```
let store = createStore(listManager, preexistingState)
```

#### `Getting the state`

```
store.getState()
```

#### `Update the state`

```
store.dispatch(addItem('Something'))
```

#### `Listen to state changes`

```
const unsubscribe = store.subscribe(() =>
  const newState = store.getState()
)
unsubscribe()
```

#### `Data Flow`

`Data flow in Redux is always  **unidirectional**.`

``You call  `dispatch()`  on the Store, passing an Action.``

`The Store takes care of passing the Action to the Reducer, generating the next State.`

`The Store updates the State and alerts all the Listeners.`

### `Next.js`

`Working on a modern  [JavaScript][154]  application powered by  [React][155]  is awesome until you realize that there are a couple problems related to rendering all the content on the client-side.`

`First, the page takes longer to the become visible to the user, because before the content loads, all the JavaScript must load, and your application needs to run to determine what to show on the page.`

`Second, if you are building a publicly available website, you have a content SEO issue. Search engines are getting better at running and indexing JavaScript apps, but it’s much better if we can send them content instead of letting them figure it out.`

`The solution to both of those problems is  **server rendering**, also called  **static pre-rendering**.`

`Next.js is one React framework to do all of this in a very simple way, but it’s not limited to this. It’s advertised by its creators as a  **zero-configuration, single-command toolchain for React apps**.`

`It provides a common structure that allows you to easily build a frontend React application, and transparently handle server-side rendering for you.`

`Here is a non-exhaustive list of the main Next.js features:`

-   `**Hot Code Reloading**: Next.js reloads the page when it detects any change saved to disk.`
-   ``**Automatic Routing**: any URL is mapped to the filesystem, to files put in the  `pages`  folder, and you don’t need any configuration (you have customization options of course).``
-   `**Single File Components**: using  [styled-jsx][156], completely integrated as built by the same team, it’s trivial to add styles scoped to the component.`
-   `**Server Rendering**: you can (optionally) render React components on the server side, before sending the HTML to the client.`
-   `**Ecosystem Compatibility**: Next.js plays well with the rest of the JavaScript, Node and React ecosystem.`
-   `**Automatic Code Splitting**: pages are rendered with just the libraries and JavaScript that they need, no more.`
-   ``**Prefetching**: the  `Link`  component, used to link together different pages, supports a  `prefetch`  prop which automatically prefetches page resources (including code missing due to code splitting) in the background.``
-   `**Dynamic Components**: you can import JavaScript modules and React Components dynamically ([https://github.com/zeit/next.js#dynamic-import][157]).`
-   ``**Static Exports**: using the  `next export`  command, Next.js allows you to export a fully static site from your app.``

#### `Installation`

`Next.js supports all the major platforms: Linux, macOS, Windows.`

`A Next.js project is started easily with npm:`

```
npm install next react react-dom
```

`or with  [Yarn][158]:`

```
yarn add next react react-dom
```

#### `Getting started`

``Create a  `package.json`  file with this content:``

```
{
  "scripts": {
    "dev": "next"
  }
}
```

`If you run this command now:`

```
npm run dev
```

``the script will raise an error complaining about not finding the  `pages`  folder. This is the only thing that Next.js requires to run.``

``Create an empty  `pages`  folder, and run the command again, and Next.js will start up a server on  `localhost:3000`.``

`If you go to that URL now, you’ll be greeted by a friendly 404 page, with a nice clean design.`

`![](https://cdn-media-1.freecodecamp.org/images/wBBqzsveZC9evvtqiPb6yrFav9V5UjExd0HE)`

`Next.js handles other error types as well, like 500 errors for example.`

#### `Create a page`

``In the  `pages`  folder create an  `index.js`  file with a simple React functional component:``

```
export default () => (
  <div>
    <p>Hello World!</p>
  </div>
)
```

``If you visit  `localhost:3000`, this component will automatically be rendered.``

`Why is this so simple?`

`Next.js uses a declarative pages structure, which is based on the filesystem structure.`

``Simply put, pages are inside a  `pages`  folder, and the page URL is determined by the page file name. The filesystem is the pages API.``

#### `Server-side rendering`

``Open the page source,  `View -> Developer -> View` Source with Chrome.``

`As you can see, the HTML generated by the component is sent directly in the page source. It’s not rendered client-side, but instead it’s rendered on the server.`

`The Next.js team wanted to create a developer experience for server rendered pages similar to the one you get when creating a basic PHP project, where you simply drop PHP files and you call them, and they show up as pages. Internally of course it’s all very different, but the apparent ease of use is clear.`

#### `Add a second page`

``Let’s create another page, in  `pages/contact.js` ``

```
export default () => (
  <div>
    <p>
      <a href="mailto:my@email.com">Contact us!</a>
    </p>
  </div>
)
```

``If you point your browser to  `localhost:3000/contact`  this page will be rendered. As you can see, also this page is server rendered.``

#### `Hot reloading`

``Note how you did not have to restart the  `npm`  process to load the second page. Next.js does this for you under the hood.``

#### `Client rendering`

`Server rendering is very convenient in your first page load, for all the reasons we saw above, but when it comes to navigating inside the website, client-side rendering is key to speeding up the page load and improving the user experience.`

``Next.js provides a  `Link`  component you can use to build links. Try linking the two pages above.``

``Change  `index.js`  to this code:``

```
import Link from 'next/link'
export default () => (
  <div>
    <p>Hello World!</p>
    <Link href="/contact">
      <a>Contact me!</a>
    </Link>
  </div>
)
```

`Now go back to the browser and try this link. As you can see, the Contact page loads immediately, without a page refresh.`

`This is client-side navigation working correctly, with complete support for the  [**History API**][160], which means your users back button won’t break.`

``If you now  `cmd-click`  the link, the same Contact page will open in a new tab, now server rendered.``

#### `Dynamic pages`

`A good use case for Next.js is a blog, as it’s something that all developers know how it works, and it’s a good fit for a simple example of how to handle dynamic pages.`

`A dynamic page is a page that has no fixed content, but instead display some data based on some parameters.`

``Change  `index.js`  to``

```
import Link from 'next/link'
const Post = props => (
  <li>
    <Link href={/post?title=</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>props<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>title<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(102, 153, 0);">}>
      <a>{props.title}</a>
    </Link>
  </li>
)
export default () => (
  <div>
    <h2>My blog</h2>
    <ul>
      <li>
        <Post title="Yet another post" />
        <Post title="Second post" />
        <Post title="Hello, world!" />
      </li>
    </ul>
  </div>
)
```

`This will create a series of posts and will fill the title query parameter with the post title:`

`![](https://cdn-media-1.freecodecamp.org/images/nEBXVSebNz6KzUWgNg62w-clo2vL7tnLIYpl)`

``Now create a  `post.js`  file in the  `pages`  folder, and add:``

```
export default props => <h1>{props.url.query.title}</h1>
```

``Now clicking a single post will render the post title in a  `h1`  tag:``

`![](https://cdn-media-1.freecodecamp.org/images/urgIpOydqbjE4i9nyELblMonOjrK0Plrn3OJ)`

``You can use clean URLs without query parameters. The Next.js Link component helps us by accepting an  `as`  attribute, which you can use to pass a slug:``

```
import Link from 'next/link'
const Post = props => (
  <li>
    <Link as={/</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>props<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>slug<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(102, 153, 0);">} href={/post?title=</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>props<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>title<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 16px; vertical-align: baseline; color: rgb(102, 153, 0);">}>
      <a>{props.title}</a>
    </Link>
  </li>
)
export default () => (
  <div>
    <h2>My blog</h2>
    <ul>
      <li>
        <Post slug="yet-another-post" title="Yet another post" />
        <Post slug="second-post" title="Second post" />
        <Post slug="hello-world" title="Hello, world!" />
      </li>
    </ul>
  </div>
)
```

#### `CSS-in-JS`

`Next.js by default provides support for  [styled-jsx][161], which is a CSS-in-JS solution provided by the same development team, but you can use whatever library you prefer, like Styled Components.`

`Example:`

```
export default () => (
  <div>
    <p>
      <a href="mailto:my@email.com">Contact us!</a>
    </p>
    <style jsx>{p {
        font-family: 'Courier New';
      }
      a {
        text-decoration: none;
        color: black;
      }
      a:hover {
        opacity: 0.8;
      }}</style>
  </div>
)
```

``Styles are scoped to the component, but you can also edit global styles adding  `global`  to the  `style`  element:``

```
export default () => (
  <div>
    <p>
      <a href="mailto:my@email.com">Contact us!</a>
    </p>
    <style jsx global>{body {
        font-family: 'Benton Sans', 'Helvetica Neue';
        margin: 2em;
      }
      h2 {
        font-style: italic;
        color: #373fff;
      }}</style>
  </div>
)
```

#### `Exporting a static site`

`A Next.js application can be easily exported as a static site, which can be deployed on one of the super fast static site hosts, like  [Netlify][164]  or  [Firebase Hosting][165], without the need to set up a Node environment.`

`The process requires you to declare the URLs that compose the site, but it’s  [a straightforward process][166].`

#### `Deploying`

`Creating a production-ready copy of the application, without source maps or other development tooling that aren’t needed in the final build, is easy.`

``At the beginning of this tutorial you created a  `package.json`  file with this content:``

```
{
  "scripts": {
    "dev": "next"
  }
}
```

``which was the way to start up a development server using  `npm run dev`.``

``Now just add the following content to  `package.json`  instead:``

```
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

``and prepare your app by running  `npm run build`  and  `npm run start`.``

#### `Now`

`The company behind Next.js provides an awesome hosting service for Node.js applications, called  [**Now**][167].`

``Of course they integrate both their products so you can deploy Next.js apps seamlessly,  [once you have Now installed][168], by running the  `now`  command in the application folder.``

`Behind the scenes Now sets up a server for you, and you don’t need to worry about anything, just wait for your application URL to be ready.`

#### `Zones`

`You can set up multiple Next.js instances to listen to different URLs, yet the application to an outside user will simply look like it’s being powered by a single server:  [https://github.com/zeit/next.js/#multi-zones][169]`

#### `Plugins`

`Next.js has a list of plugins at  [https://github.com/zeit/next-plugins][170]`

#### `Starter kit on Glitch`

`If you’re looking to experiment, I recommend Glitch. Check out my  [Next.js Glitch Starter Kit][171].`

### `Gatsby`

`Gatsby is a platform for building apps and websites using React.`

`It is one of the tools that allow you to build on a set of technologies and practices collectively known as  [JAMstack][172].`

`Gatsby is one of the cool kids in the Frontend Development space right now. Why? I think the reasons are:`

-   `the explosion of the JAMstack approach to building Web Apps and Web Sites`
-   `the rapid adoption of the  [Progressive Web Apps][173]  technology in the industry, which is one of the key features of Gatsby`
-   `it’s built in React and  [GraphQL][174], which are two very popular and rising technologies`
-   `it’s really powerful`
-   `it’s fast`
-   `the documentation is great`
-   `the network effect (people use it, create sites, make tutorials, people know more about it, creating a cycle)`
-   `everything is JavaScript (no need to learn a new templating language)`
-   `it hides the complexity, in the beginning, but allows us access into every step to customize`

`All those are great points, and Gatsby is definitely worth a look.`

#### `How does it work?`

`With Gatsby, your applications are built using React components.`

`The content you’ll render in a site is generally written using Markdown, but you can use any kind of data source, like a headless CMS or a web service like Contentful.`

`Gatsby builds the site, and it’s compiled to static HTML which can be deployed on any Web Server you want, like Netlify, AWS S3, GitHub Pages, regular hosting providers, PAAS and more. All you need is a place that serves plain HTTP pages and your assets to the client.`

`I mentioned Progressive Web Apps in the list. Gatsby automatically generates your site as a PWA, with a service worker that speeds up page loading and resource caching.`

`You can enhance the functionality of Gatsby via plugins.`

#### `Installation`

`You can install Gatsby by simply running this in your terminal:`

```
npm install -g gatsby-cli
```

``This installs the  `gatsby`  CLI utility.``

`(when a new version is out, update it by calling this command again)`

`You create a new “Hello World” site by running`

```
gatsby new mysite https://github.com/gatsbyjs/gatsby-starter-hello-world
```

``This command creates a brand new Gatsby site in the  `mysite`  folder, using the  _starter_available at  [https://github.com/gatsbyjs/gatsby-starter-hello-world][176].``

`![](https://cdn-media-1.freecodecamp.org/images/rNWB5DuHCS526rLjNuhwMdYAErq4TTAJFqg5)`

``A  _starter_  is a sample site that you can build upon. Another common starter is  `default`, available at  [https://github.com/gatsbyjs/gatsby-starter-default][177].``

> `[_Here you can find a list of all the starters you can use_][178]_._`

#### `Running the Gatsby site`

`After the terminal has finished installing the starter, you can run the website by calling`

```
cd mysite
gatsby develop
```

`which will start up a new Web Server and serve the site on port 8000 on localhost.`

`![](https://cdn-media-1.freecodecamp.org/images/tThFtYg35ax6YBnuLS9z4y92JYUhdxJZaBaj)`

`And here is our Hello World starter in action:`

`![](https://cdn-media-1.freecodecamp.org/images/i-aQLpALPcniL3pkUylOWeoqYCKvnzDHX8Sx)`

### `Inspecting the site`

`If you open the site you created with your favorite code editor (I use  [VS Code][179]), you’ll find there are 3 folders:`

-   `` `.cache`, a hidden folder that contains the Gatsby internals, nothing you should change right now``
-   `` `public`, which contains the resulting website once you build it``
-   `` `src`  contains the React components, in this case just the  `index`  component``
-   `` `static`  which will contain the static resources like CSS and images``

`![](https://cdn-media-1.freecodecamp.org/images/x5XH1s5uMEQdUfnZB6BM2-T9HXkDwv1xLhPd)`

``Now, making a simple change to the default page is easy, just open  `src/pages/index.js`and change “Hello world!” to something else, and save. The browser should instantly  **hot reload**  the component (which means the page does not actually refresh, but the content changes - a trick made possible by the underlying technology).``

``To add a second page, just create another .js file in this folder, with the same content of  `index.js`  (tweak the content) and save it.``

``For example I created a  `second.js`  file with this content:``

```
import React from 'react'
export default () => <div>Second page!</div>
```

`and I opened the browser to  [http://localhost:8000/second][180]:`

`![](https://cdn-media-1.freecodecamp.org/images/g4uWZNxitB4AAVbqOFmCKKPugS7yrxKYH-ld)`

#### `Linking pages`

``You can link those pages by importing a Gatsby-provided React component called  `Link`:``

```
import { Link } from "gatsby"
```

`and using it in your component  [JSX][181]:`

```
<Link to="/second/">Second&lt;/Link>
```

#### `Adding CSS`

`You can import any CSS file using a JavaScript import:`

```
import './index.css'
```

`You can use React styling:`

```
<p style={{
    margin: '0 auto',
    padding: '20px'
  }}>Hello world</p>
```

#### `Using plugins`

`Gatsby provides lots of things out of the box, but many other functionalities are provided by  [plugins][182].`

`There are 3 kind of plugins:`

-   `**source plugins**  fetch data from a source. Create nodes that can be then filtered by transformer plugins`
-   `**transformer plugins**  transform the data provided by source plugins into something Gatsby can use`
-   `**functional plugins**  implement some kind of functionality, like adding sitemap support or more`

`Some commonly used plugins are:`

-   ``[gatsby-plugin-react-helmet][183]  which allows to edit the  `head`  tag content``
-   `[gatsby-plugin-catch-links][184]  which uses the  [History API][185]  to prevent the browser reloading the page when a link is clicked, loading the new content using AJAX instead`

``A Gatsby plugin is installed in 2 steps. First you install it using  `npm`, then you add it to the Gatsby configuration in  `gatsby-config.js`.``

`For example you can install the Catch Links plugin:`

```
npm install gatsby-plugin-catch-links
```

``In  `gatsby-config.js`  (create it if you don’t have it, in the website root folder), add the plugin to the  `plugins`  exported array:``

```
module.exports = {
  plugins: ['gatsby-plugin-catch-links']
}
```

`That’s it, the plugin will now do its job.`

#### `Building the static website`

`Once you are done tweaking the site and you want to generate the production static site, you will call`

```
gatsby build
```

`At this point you can check that it all works as you expect by starting a local Web Server using`

```
gatsby serve
```

`which will render the site as close as possible to how you will see it in production.`

#### `Deployment`

``Once you build the site using  `gatsby build`, all you need to do is to deploy the result contained in the  `public`  folder.``

`Depending on the solution you choose, you’ll need different steps here, but generally you’ll push to a Git repository and let the Git post-commit hooks do the job of deploying.  [Here are some great guides for some popular hosting platforms][186]  where you can deploy Gatsby.`

### `Wrapping up`

`I hope this book has helped you get started with React, and maybe it gave you a head start in exploring some of the most advanced aspects of React programming. That’s my hope, at least.`

> `You can get this ebook in PDF, ePub and Mobi format at  [reacthandbook.com][187]`

[1]: https://twitter.com/flaviocopes
[2]: https://reacthandbook.com/
[3]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#an-introduction-to-the-react-view-library
[4]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#how-to-use-create-react-app
[5]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#variables
[6]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#arrow-functions
[7]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#rest-and-spread
[8]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#object-and-array-destructuring
[9]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#template-literals
[10]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#classes
[11]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#callbacks
[12]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#promises
[13]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#async-await
[14]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#es-modules
[15]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#single-page-applications
[16]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#declarative
[17]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#immutability
[18]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#purity
[19]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#composition
[20]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#the-virtual-dom
[21]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#unidirectional-data-flow
[22]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#jsx
[23]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#components
[24]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#state
[25]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#props
[26]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#presentational-vs-container-components
[27]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#state-vs-props
[28]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#proptypes
[29]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#react-fragment
[30]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#events
[31]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#lifecycle-events
[32]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#forms-in-react
[33]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#reference-a-dom-element
[34]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#server-side-rendering
[35]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#the-context-api
[36]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#higher-order-components
[37]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#render-props
[38]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#hooks
[39]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#code-splitting
[40]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#build-a-simple-counter
[41]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#fetch-and-display-github-users-information-via-api
[42]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#css-in-react
[43]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#sass-in-react
[44]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#styled-components
[45]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#babel
[46]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#webpack
[47]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#jest
[48]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#testing-react-components
[49]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#react-router
[50]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#redux
[51]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#next-js
[52]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#gatsby
[53]: https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#wrapping-up
[54]: https://unpkg.com/babel-standalone@6/babel.min.js
[55]: https://glitch.com/edit/#!/react-example-inline-jsx?path=script.js
[56]: https://flaviocopes.com/npx/
[57]: https://nodejs.org/
[58]: https://flaviocopes.com/macos-terminal/
[59]: https://flaviocopes.com/git/
[60]: https://flaviocopes.com/jest/
[61]: https://flaviocopes.com/babel/
[62]: https://flaviocopes.com/webpack/
[63]: mailto:react@16.7
[64]: mailto:react-dom@16.7
[65]: https://codesandbox.io/s
[66]: https://codepen.io/
[67]: https://codepen.io/flaviocopes/pen/VqeaxB
[68]: https://flaviocopes.com/javascript-prototypal-inheritance/
[69]: https://yoursite.com%27/
[70]: https://flaviocopes.com/fetch-api/
[71]: https://flaviocopes.com/service-workers/
[72]: https://flaviocopes.com/fetch-api/
[73]: https://fetch.spec.whatwg.org/#concept-response
[74]: https://flaviocopes.com/javascript-async-defer/
[75]: https://flaviocopes.com/javascript-strict-mode/
[76]: https://flavio-es-modules-example.glitch.me/uppercase.js'
[77]: https://glitch.com/edit/#!/flavio-es-modules-example?path=index.html
[78]: https://flaviocopes.com/cors/
[79]: https://flaviocopes.com/css/
[80]: https://flaviocopes.com/javascript/
[81]: https://flaviocopes.com/react-router/
[82]: https://flaviocopes.com/history-api/
[83]: https://flaviocopes.com/javascript/
[84]: https://flaviocopes.com/dom/
[85]: https://flaviocopes.com/dom/
[86]: https://flaviocopes.com/eslint/
[87]: https://flaviocopes.com/javascript-events/
[88]: https://www.w3.org/TR/DOM-Level-3-Events/
[89]: https://github.com/jaredpalmer/formik
[90]: https://flaviocopes.com/page/ebooks/
[91]: https://reactjs.org/docs/react-dom-server.html
[92]: https://reactjs.org/docs/react-dom.html#hydrate
[93]: https://www.npmjs.com/package/ignore-styles
[94]: https://www.reddit.com/r/reactjs/comments/7o6oj6/serverside_rendering_not_worth_it/
[95]: https://glitch.com/edit/#!/flavio-react-context-api-example?path=app/components/HelloWorld.jsx
[96]: https://flaviocopes.com/es6/#destructuring-assignments
[97]: https://codepen.io/flaviocopes/pen/maVPKa
[98]: https://codepen.io/flaviocopes/pen/WLrxXp
[99]: https://codepen.io/flaviocopes/pen/VqeaxB
[100]: https://codepen.io/flaviocopes/pen/QzEQPR
[101]: https://flaviocopes.com/axios/
[102]: https://codepen.io/flaviocopes/pen/oJLyeY
[103]: https://flaviocopes.com/webpack/
[104]: https://github.com/postcss/autoprefixer
[105]: https://flaviocopes.com/react-create-react-app/
[106]: https://codesandbox.io/s/18qq31rp3
[107]: https://flaviocopes.com/javascript/
[108]: https://css-tricks.com/css-modules-part-1-need/
[109]: https://glenmaddern.com/articles/css-modules
[110]: https://flaviocopes.com/npm/
[111]: https://flaviocopes.com/yarn/
[112]: https://flaviocopes.com/ecmascript/#template-literals
[113]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
[114]: https://flaviocopes.com/dom/
[115]: https://flaviocopes.com/dom/
[116]: https://tabatkins.github.io/specs/css-nesting/
[117]: http://kangax.github.io/compat-table/es6/#test-arrow_functions
[118]: https://flaviocopes.com/webpack/
[119]: https://flaviocopes.com/ecmascript/
[120]: https://flaviocopes.com/npm/
[121]: https://flaviocopes.com/node/npx/
[122]: https://babeljs.io/docs/en/plugins
[123]: https://flaviocopes.com/node/
[124]: https://babeljs.io/docs/plugins/
[125]: https://flaviocopes.com/javascript-glossary/#tree-shaking
[126]: https://flaviocopes.com/yarn/
[127]: https://flaviocopes.com/npm/
[128]: https://flaviocopes.com/yarn/
[129]: https://flaviocopes.com/npm/
[130]: https://flaviocopes.com/javascript-regular-expressions/
[131]: https://webpack.js.org/loaders/
[132]: https://webpack.js.org/loaders/babel-loader/
[133]: https://webpack.js.org/plugins/
[134]: https://webpack.js.org/loaders/file-loader/
[135]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image
[136]: https://flaviocopes.com/data-urls/
[137]: https://webpack.js.org/configuration/devtool/
[138]: https://flaviocopes.com/yarn/
[139]: https://flaviocopes.com/npm/
[140]: https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest
[141]: https://flaviocopes.com/javascript-regular-expressions/
[142]: https://github.com/jefflau/jest-fetch-mock
[143]: https://goo.gl/fbAQLP
[144]: https://github.com/kentcdodds/react-testing-library
[145]: https://www.youtube.com/watch?v=JKOwJUM4_RM
[146]: https://codesandbox.io/s/pprl4y0wq
[147]: https://flaviocopes.com/npm/
[148]: https://flaviocopes.com/yarn/
[149]: https://application.com/dashboard
[150]: https://application.com/#/dashboard
[151]: https://flaviocopes.com/history-api/
[152]: https://flaviocopes-react-router-v4.glitch.me/
[153]: https://flaviocopes.com/javascript/
[154]: https://flaviocopes.com/javascript/
[155]: https://flaviocopes.com/react/
[156]: https://github.com/zeit/styled-jsx
[157]: https://github.com/zeit/next.js#dynamic-import
[158]: https://flaviocopes.com/yarn/
[159]: mailto:my@email.com
[160]: https://flaviocopes.com/history-api/
[161]: https://github.com/zeit/styled-jsx
[162]: mailto:my@email.com
[163]: mailto:my@email.com
[164]: https://flaviocopes.com/netlify/
[165]: https://flaviocopes.com/firebase-hosting/
[166]: https://github.com/zeit/next.js/#static-html-export
[167]: https://zeit.co/now
[168]: https://zeit.co/download
[169]: https://github.com/zeit/next.js/#multi-zones
[170]: https://github.com/zeit/next-plugins
[171]: https://glitch.com/edit/#!/flavio-starter-nextjs
[172]: https://flaviocopes.com/jamstack/
[173]: https://flaviocopes.com/progressive-web-apps/
[174]: https://flaviocopes.com/graphql/
[175]: https://github.com/gatsbyjs/gatsby-starter-hello-world
[176]: https://github.com/gatsbyjs/gatsby-starter-hello-world
[177]: https://github.com/gatsbyjs/gatsby-starter-default
[178]: https://www.gatsbyjs.org/docs/gatsby-starters/
[179]: https://flaviocopes.com/vscode/
[180]: http://localhost:8000/second
[181]: https://flaviocopes.com/jsx/
[182]: https://www.gatsbyjs.org/plugins/
[183]: https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/
[184]: https://www.gatsbyjs.org/packages/gatsby-plugin-catch-links/
[185]: https://flaviocopes.com/history-api/
[186]: https://www.gatsbyjs.org/docs/deploying-and-hosting/
[187]: https://reacthandbook.com/
