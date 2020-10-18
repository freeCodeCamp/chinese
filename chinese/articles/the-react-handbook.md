> * 原文地址：[The React Handbook](https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/)
> * 原文作者：[Flavio Copes](https://www.freecodecamp.org/news/author/flavio/)
> * 译者：XuQuan-nikkkki
> * 校对者：

![React 使用手册](https://cdn-media-1.freecodecamp.org/images/1*m5aPLXkrWJs7xKsfYViJEg.png)

这份 React 使用手册遵循了 80/20 法则：花 20% 的时间学习 80% 与主题相关的内容。 

在我看来，这种方法能够提供一份全面的概述。这份手册不会涵盖 React 相关的所有内容，但它提供了学习 React 和成为一名杰出的 React 开发者的必备基础。如果你认为这份手册还应该包含某些特定的内容，可以通过 Twitter [@flaviocopes](https://twitter.com/flaviocopes) 告诉我。

希望这份手册能够帮你达到目的：**学习 React 基础知识**。

你可以通过 [reacthandbook.com](https://reacthandbook.com/) 获得PDF、ePub 和 Mobi 格式的电子版手册。

### 手册索引

#### 目录

[React 简介][3]  
[如何使用 create-react-app][4]

****第 1 部分：****:  使用 React 必知的 JavaScript 核心概念

-   [变量][5]
-   [箭头函数][6]
-   [剩余运算符和扩展运算符][7]
-   [对象和数组的解构][8]
-   [模板字符串][9]
-   [类][10]
-   [Callbacks][11]
-   [Promises][12]
-   [Async/Await][13]
-   [ES Modules][14]

\***\*SECTION 2\*\***: REACT CONCEPTS

-   [Single Page Applications][15]
-   [Declarative][16]
-   [Immutability][17]
-   [Purity][18]
-   [Composition][19]
-   [The Virtual DOM][20]
-   [Unidirectional Data Flow][21]

\***\*SECTION 3\*\***: IN-DEPTH REACT

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

\***\*SECTION 4\*\***: PRACTICAL EXAMPLES

-   [Build a simple counter][40]
-   [Fetch and display GitHub users information via API][41]

\***\*SECTION 5\*\***: STYLING

-   [CSS in React][42]
-   [SASS in React][43]
-   [Styled Components][44]

\***\*SECTION 6\*\***: TOOLING

-   [Babel][45]
-   [Webpack][46]

\***\*SECTION 7\*\***: TESTING

-   [Jest][47]
-   [Testing React components][48]

\***\*SECTION 8\*\***: THE REACT ECOSYSTEM

-   [React Router][49]
-   [Redux][50]
-   [Next.js][51]
-   [Gatsby][52]

[Wrapping up][53]

### React 视图库简介

#### React 是什么?

React 是一个 JavaScript 库，旨在简化可视化界面的开发。

它由 Facebook 开发，于 2013 年发布，很多流行的应用程序，如Facebook, Instagram，都使用了 React。

它的主要目标是通过将 UI 划分为组件集合，从而能够在任意时间点推断出组件的界面及界面的状态。

#### React 为何如此风靡？

React 何以席卷了 web 前端开发领域呢？

#### 复杂性低于其他框架

React 发布时，Ember.js 和 Angular 1.x 是最主流的框架，但这两个框架都对代码施加了诸多约束，导致迁移现有应用并不容易。

React 则做到了易于迁移已有项目，因为这也是 Facebook 的需求——将已有的代码库迁移到新框架。此外，上面提到的两个框架还由于过于深入造成很多麻烦，相比之下， React 只专注于 View 层，而非整个 MVC 框架。

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

配置 React 有许多不同的方法，方便你在你的应用或网站上使用它。

#### 在网页中加载 React

最简单的方法是直接在网页中添加 React 的 JavaScript 文件。这种方法适用于应用只需要和单个页面上的元素互动，而不用管理导航问题。

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

例子中我们加载了 React 和 React DOM。为什么需要添加两个库呢？这是因为 React 是 100% 独立于浏览器的，它也可以在浏览器以外的环境里使用（比如搭配 React Native 在移动设备中使用）。因此，需要添加 React DOM 来操作浏览器。

在这些标签之后，你就可以加载其他使用 React 的 JavaScript 文件了，或者可以通过 `script` 标签添加内联 JavaScript 代码。

```html
<script src="app.js"></script>

<!-- or -->
```

使用 JSX 还需要额外的步骤：加载 Babel，

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

并且给 `script` 标签加上属性为 `text/babel` 的 MIME 类型：

```html
<script src="app.js" type="text/babel"><;/script>
```

现在你可以在 `app.js` 文件中添加 JSX 代码了：

```jsx
const Button = () => {
    return <button>Click me!</button>;
};
```

可以看看这个简单的 Glitch 示例： [https://glitch.com/edit/#!/react-example-inline-jsx?path=script.js](https://glitch.com/edit/#!/react-example-inline-jsx?path=script.js)

通过 `script` 标签的方式非常适合搭建原型，并且无需复杂的配置流程就可以快速进入开发。

### 如何使用 create-react-app

`create-react-app` 是一个旨在帮你快速上手 React 的项目，它能够满足多页面 React 应用的需求。

你可以从使用 `npx` 开始。`npx` 是一种无需安装即可下载和执行 Node.js 命令的方法。`npx` 自带 `npm` （从 5.2 版本开始），如果你还没有下载 `npm` ，可以去 [nodejs.org](https://nodejs.org) 下载（`npm` 会和 Node 一起安装）。

如果你不确定你的 npm 版本，可以通过执行 `npm -v` 来看看是否需要更新。

> _提示： 如果你还不能熟练地使用终端，可以看看我的[OSX 终端教程](https://flaviocopes.com/macos-terminal/)，它对于 Linux 同样适用。 - 很抱歉目前没有 Windows 教程，不过你可以向 Google 求助。_

当你执行 `npx create-react-app <app-name>` 命令时， `npx` 会下载最新版本的 `create-react-app` ，运行 `create-react-app` ，然后将它从你的系统中删除。这样做的好处是，你的系统上永远不会有过时的版本，因为每次运行时，你都会获得最新版本。

让我们开始吧：

```bash
npx create-react-app todolist
```

![](https://cdn-media-1.freecodecamp.org/images/bZgizsJA2eDZwRUPT9KmAuqaWq2z-i5JYO49)

这是当它运行完毕时的情形：

![](https://cdn-media-1.freecodecamp.org/images/yJPelCCT4muE3FcEci5CIDm4GEyy5rvdh6R5)

`create-react-app` 会在你指定的文件夹内创建一个文件结构（这个例子中是 `todolist`），同时初始化一个 Git 仓库。

此外，它还会在 `package.json` 文件中增加了一些命令，让你在进入文件夹后，能够通过运行 `npm start` 命令来立即启动应用。

![](https://cdn-media-1.freecodecamp.org/images/bIcUqq3FBoasmTjSSeYJ1LA4yMndxfNF12nu)

![](https://cdn-media-1.freecodecamp.org/images/bD33lX4Yp0WYlgDNGCwr3Otftsstxvx1HvTQ)

除了 `npm start`, `create-react-app` 还预先设置了其他的命令：

-   `npm run build`: 在 `build` 文件夹中构建 React 应用的文件，方便随时部署到服务器上
-   `npm test`: 通过 [Jest][60] 运行测试套件
-   `npm eject`: 弹出 `create-react-app` 配置

尽管 `create-react-app` 自动完成了很多操作，但如果你还想进一步调整项目，可以通过弹出项目配置来实现。

毕竟 `create-react-app` 提供的是主流配置方案，它只提供了有限的自定义选项，因此可能会出现无法满足你的项目的特殊需求的情况。

当你弹出配置后，就无法自动更新配置了，但是你可以更灵活地配置 [Babel][61] 和 [Webpack][62]。

弹出配置的操作是不可逆的。当你弹出设置后，应用目录中会出现两个新文件夹，分别是 `config` 和 `scripts`。它们包含了配置内容，你可以在里面修改配置。

> _如果你的 React 应用使用的是老版本的 React，可以通过在应用中添加 `console.log(React.version)` 来查看 React 的版本，接着运行 `yarn add [react@16.7][63]` 更新 React 的版本，yarn 会提醒你可更新的版本（选择最新的版本）。再运行 `yarn add [react-dom@16.7][64]` 更新 `react-dom`（将 16.7 替换成当前可用的最新版本号）_

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
const { useState } = React;
```

而不是：

```jsx
import { useState } from 'react';
```

### 第 1 部分： 使用 React 必知的 JavaScript 核心概念

#### 深入学习 React 前应该掌握的知识

想要学习 React，你必须提前掌握一些知识，尤其是在使用 React 的过程中会反复使用到的最新的 JavaScript 的特性。

有时候，人们认为 React 提供了某种特性，但实际上，这只是最新的 JavaScript 的语法。

尽管你不需要立马变成这方面的专家，但随着你深入学习 React，你需要更深入地掌握这些知识。

我会列举一系列帮助你快速入门的知识点。

### 变量

变量是指赋值给标识符的字面量，这样你就可以在程序中通过标识符来引用和使用字面量了。

JavaScript 中的变量没有指定数据类型。给变量赋值为某种特定的字面量类型后，即使重新指定这个变量为其他类型的字面量，也不会导致类型报错或其他问题。

这也是为什么 JavaScript 被认为是“无类型”语言。

变量必须先声明再使用。有 3 种声明变量的语法：`var` , `let` , `const` 。这 3 种语法的使用方式不尽相同。

#### 使用 `var` 声明变量

在 ES2015 之前，`var` 是唯一用于定义变量的语法。

```jsx
var a = 0;
```

如果你忘记使用 `var`，这样会给一个未声明的变量赋值，结果会有所不同。

如果是在严格模式下，这样的用法会报错。在早期的环境中（或禁用严格模式的情况下），这样会初始化一个全局变量，并给它赋值。

如果声明变量时不给它赋值，那么这个变量的值在赋值前一直是 `undefined`。

```jsx
var a; //typeof a === 'undefined'
```

你可以对一个变量重复声明，这样会将之前的声明覆盖掉：

```jsx
var a = 1;
var a = 2;
```

你也可以在一个语句中一次声明多个变量：

```jsx
var a = 1, b = 2
```

**作用域**是指可以访问到变量的代码部分。

在函数外使用 `var` 声明的变量会被赋值给全局对象，它拥有全局作用域，代码中的任何地方都可以访问到变量。在函数中使用 `var` 声明的变量被赋值给函数，它的作用域是函数内部，和函数的参数一样，只能在函数内部使用。

函数中定义的变量如果和全局变量重名了，函数中的变量在函数中会替代全局变量。

值得注意的是代码块（两个大括号之间）并不会定义新的作用域。只有定义函数的时候会创建新的作用域，因为 `var` 不会创建块作用域，只会创建函数作用域。

函数中定义的变量在函数内的任意位置都可以访问到，即使是在函数末尾定义的变量也可以在函数开头访问到，这是因为 JavaScript 在执行代码时会将 _所有变量移到顶部_ （这种现象叫做**变量提升**）。为了避免混淆，应该在函数开始时声明所有变量。

#### 使用 `let` 定义变量

`let` 是 ES2015 引入的新特性，本质上是 `var` 的块级作用域版本。它的作用域仅限于定义它的代码块、声明语句或表达式，以及包含在它内部的代码块。

现在的 JavaScript 开发者倾向于选择只使用 `let` ，完全摒弃 `var`。

> _如果 `let` 语法有些晦涩，那么把 `let color = 'red'` 理解成_ let the color be red（让颜色变成红的）_,这样会就好理解了_

不同于 `var`，在函数外使用 `let` 定义变量并不会创建全局变量。

#### 使用 `const` 定义变量

使用 `var` 或 `let` 声明的变量可以重复声明、重新赋值，但是使用 `const` 声明的变量一旦初始化，它的值就不可以再更改了，不能再次对变量赋值。

```jsx
const a = 'test';
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
const myFunction = function () {
    //...
};
```

变为：

```jsx
const myFunction = () => {
    //...
};
```

如果函数体只包含一条语句，你可以省略大括号，将所有内容写在一行里：

```jsx
const myFunction = () => doSomething();
```

参数通过括号传入：

```jsx
const myFunction = (param1, param2) => doSomething(param1, param2);
```

如果函数值只有一个参数，你可以把括号也省略掉：

```jsx
const myFunction = (param) => doSomething(param);
```

得益于这种简短的语法，箭头函数**鼓励使用小函数**。

### 隐式返回

箭头函数允许隐式返回：函数返回的值没有通过关键字 `return` 来返回。

当函数体只有一行语句时，值会隐式返回。

```jsx
const myFunction = () => 'test';
```

另一个例子是，当函数返回一个对象时，需要使用圆括号把返回的对象包起来，防止对象的大括号被认为是返回的函数体的大括号。

```jsx
const myFunction = () => ({ value: 'test' });
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
const link = document.querySelector('#link');
link.addEventListener('click', () => {
    // this === window
});
```

### 剩余运算符和扩展运算符

你可以通过扩展运算符 `...` 来扩展数组、对象或是字符串。

我们先以数组为例。如

```jsx
const a = [1, 2, 3];
```

你可以这样创建一个新的数组：

```jsx
const b = [...a, 4, 5, 6];
```

也可以这样复制一个数组：

```jsx
const c = [...a];
```

这一方法同样适用于对象。你可以这样复制一个对象：

```jsx
const newObj = { ...oldObj };
```

用于字符串时，扩展运算符会使用字符串的字符创建数组：

```jsx
const hey = 'hey';
const arrayized = [...hey]; // ['h', 'e', 'y']
```

该运算符在某些场景非常有用，其中的一个应用场景是可以将数组轻松转换成函数参数：

```jsx
const f = (foo, bar) => {};
const a = [1, 2];
f(...a);
```

（过去你需要通过 `f.apply(null, a)` 来实现，但是写起来既不优雅，可读性也不高）

**剩余运算符**与**数组解构**一起使用时非常方便：

```jsx
const numbers = [1, 2, 3, 4, 5]
[first, second, ...others] = numbers
```

还有**扩展运算符**：

```jsx
const numbers = [1, 2, 3, 4, 5];
const sum = (a, b, c, d, e) => a + b + c + d + e;
const sumOfNumbers = sum(...numbers);
```

ES2018 引入了剩余属性，用法和剩余运算符相同，不过适用于对象。

**剩余属性**：

```jsx
const { first, second, ...others } = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
};
```

**扩展属性**允许在创建新对象时，通过扩展运算符添加属性：

```jsx
const items = { first, second, ...others };
items; //{ first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }
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

const { firstName: name, age } = person //name: Tom, age: 54
```

可以提取 `name` 和 `age` 的值。

解构的语法同样适用于数组：

```jsx
const a = [1, 2, 3, 4, 5];
const [first, second] = a;
```

以下语句通过索引 0、1、4 从数组 `a` 中取值创建了 3 个新的变量。

```jsx
const [first, second, , , fifth] = a;
```

### 模板字符串

模板字符串是 ES2015 / ES6 引入的新特性，相较于 ES5 和之前的语法，它允许你通过更灵活的方式使用字符串。

新的语法乍看之下非常简单，不过是用倒引号取代了原先的单引号或双引号：

```jsx
const a_string = something;
```

但模板字符串提供了许多普通字符串不具备的特性，具体来说：

-   模板字符串的语法可以定义多行字符串
-   能够方便地在字符串中插入变量和表达式
-   可以在模板标签中创建 DSL（DSL指领域特定语言，比如在 React 的样式组件中使用 CSS）

让我们来逐个深入了解。

#### 多行字符串

在 ES6 之前，如果想要创建一个多于两行的字符串，你需要在一行代码的末尾加上 `\` 。

```jsx
const string =
  'first part \
  second part'
```

这样虽然是通过两行代码创建的字符串，但渲染的结果仍是一行：

`first part second part`

要创建多行显示的字符串，你需要在每行末尾加上 `\n`，像这样：

```jsx
const string =
  'first line\n second line'
```

或是：

```jsx
const string = 'first line\n' + 'second line'
```

模板字符串让创建多行字符串变得更容易。

一旦使用倒引号开始创建模板字符串，在需要新的一行时，你只需要敲回车就行，不需要添加其他特殊字符，字符串会按照原样渲染：

```jsx
const string = `Hey
this
string
is awesome!`
```

模板字符串中，空白符都会生效，因此这样输入字符串：

```jsx
const string = `First
                Second`
```

渲染的结果会如下：

```
First
                Second
```

想要避免这个问题有个简单的方法，在模板字符串的结束倒引号后面加上 `trim()` 方法，它会消除第一个字符前的空白符：

```jsx
const string = `
First
Second`.trim()
```

#### 插入表达式

模板字符串可以方便地在字符串中插入变量和表达式。

你可以通过 `${...}` 语法来实现：

```jsx
const myVariable = 'test'
const string = `something ${myVariable}` //something test
```

在 `${}` 中可以添加任何内容，包括表达式：

```jsx
const string = `something ${1 + 2 + 3}`
const string2 = `something ${foo() ? 'x' : 'y'}`
```

### 类

2015 年，ECMAScript 6 (ES6) 标准引入了类。

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

一个类可以扩展另一个类，并且使用这个类初始化的对象将继承两个类的全部方法。

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

```plain
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

```plain
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

```plain
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

```plain
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

```plain
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

```plain
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

### 第 3 部分：深入理解 React

### `JSX`

JSX 是 React 引入的一项技术。

尽管不使用 JSX 的情况下，React 也能正常运行。但是 JSX 是一种处理组件的理想技术，React 从 JSX 中收益颇多。

刚开始，你可能会觉得 JSX 就像是 HTML 和 JavaScript 混合在一起（就像你看到的 CSS 那样）。

但事实并非如此，因为使用 JSX 语法，你实际上在声明一个 UI 组件该是什么样子。

你并非通过字符串来描述 UI 组件，而是通过 JavaScript 来实现，这样可以优雅地实现很多功能。

#### 先来看看 JSX 

当你定义一个包含字符串的 h1 标签时，你会这么写：

```
const element = <h1>Hello, world!</h1>
```

它看起来像是混合了 JavaScript 和 HTML，但实际上是纯 JavaScript。

尽管看起来像 HTML，实际上是用于定义组件及其在标记内位置的语法糖。

JSX 表达式可以非常方便地插入属性：

```
const myId = 'test'
const element = <h1 id={myId}>Hello, world!</h1>
```

需要注意的是，当属性中包含横线(`-`)时，会被转换成驼峰语法，一下是两个特殊例子：

-   `class`  变成  `className`
-   `for`  变成  `htmlFor`

因为它们是 JavaScript 的保留词。

以下 JSX 代码段将两个组件放入到 `div` 标签中：

```plain
<div>
  <BlogPostsList />
  <Sidebar />
</div>
```

标签需要闭合，这种方式比起 HTML，更接近 XML（如果你还记得使用 XHTML 的日子，你就会对此很熟悉，只是后来 HTML5 的宽松语法占了上风）。在这个例子中使用了自动闭合的标签。

注意我将两个组件包装到 `div` 中。为什么需要这么做呢？因为 **`render()` 方法只能返回一个节点**，因此当你需要返回两个节点时，只用增加一个父元素。它可以是 `div`，也可以是任何其他标签。

#### 转译 JSX

浏览器无法执行包含 JSX 代码的 JavaScript 文件，因此需要先转换成普通 JS。

如何转换呢？通过一个叫作**转译**的流程。

前面提到过 JSX 并非必须，因为每一行 JSX 代码都有对应的普通 JavaScript 代码可以替代，这也是 JSX 被转译后的结果。

比如以下两种写法是一样的效果：

> _普通 JS_

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

> _JSX_

```
ReactDOM.render(
  <div id="test">
    <h1>A title</h1>
    <p>A paragraph</p>
  </div>,
  document.getElementById('myapp')
)
```

这只是非常基础的示例，但是你已经可以看到，相比 JSX，普通的 JS 语法要复杂得多。

在写代码时，最流行的**转译**方法就是使用 **Babel**，这是运行 `create-react-app` 时的默认配置，因此如果你在使用 `create-react-app`，你就不用担心转译的问题，一切都已为你配置完成。

如果你没有使用 `create-react-app`，你需要自己配置 Babel。

#### JSX 中的 JS

JSX 接受任何混合到其中的 JavaScript。

当你需要添加 JS 代码时，只用把代码放入大括号 `{}` 中即可。下面是使用在其他地方定义的常量的方法：

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

这是个非常基础的示例。大括号可以接受 _任何_ JS 代码：

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

如你所见，_我们在 JSX 代码中放入了 JavaScript 代码，又在 JavaScript 代码中定义了 JSX，又在这一层 JSX 中嵌套了 JavaScript 代码_。如有需要，你可以无限嵌套。

#### JSX 中的 HTML

JSX 看起来非常像 HTML，但实际上是 XML 语法。

最终你会渲染 HTML，因此你需要知道在 HTML 中定义内容与在 JSX 定义它们的区别。

#### 所有的标签都需要闭合

就像使用 XHTML 一样，你需要闭合所有的标签：不要使用 `<br>`，而是使用自闭和标签： `<br />`（对于其他标签也是一样）。

#### 驼峰是新标准

HTML 里的属性没有区分大小写（如 `onchange`)。JSX 中，这些属性被重命名为与原属性相同的驼峰写法：

-  `onchange`  =>  `onChange`
-  `onclick`  =>  `onClick`
-  `onsubmit`  =>  `onSubmit`

#### `class` 改为 `className`

由于 JSX 会转译成 JavaScript，并且 `class` 是保留字，你不能这么写：

```
<p class="description">
```

你需要这么写：

```
<p className="description">
```

同样的情况还包括 `for` 需要变成 `htmlFor`。

#### React 中的 CSS

JSX 提供了一种定义 CSS 的好方法。

如果你很少使用 HTML 内联样式，刚开始使用 React 写 CSS 时，你可能会觉得回到了 10 到 15 年前，内联 CSS 还很普遍的年代（如今内联样式已经被妖魔化了，且常被用来做快速修复的首选方案）。

JSX 样式与内联样式不一样：首先，不同于内联样式接受一个包含 CSS 属性的字符串，JSX 样式属性只接受对象。也就是说，你需要在对象中定义属性：

```
var divStyle = {
  color: 'white'
}
ReactDOM.render(<div style={divStyle}>Hello World!</div>, mountNode)
```

或者

```
ReactDOM.render(<div style={{ color: 'white' }}>Hello World!</div>, mountNode)
```

JSX 中的 CSS 与普通的 CSS 写法略有不同：

- 属性名使用驼峰写法
- 值只能是字符串
- 用逗号将每个元组分开

#### 为什么相比于普通 CSS / SASS / LESS ，它是首选?

CSS 是一个**没有解决的问题**。自出现之后，围绕它出现的数十种工具都蓬勃发展又没落了。主要原因是它没有作用域，很容易写出并没有被执行的 CSS 代码，且 “快速修复” 的代码很容易影响到本不该影响的元素。

JSX 允许组件（如 React 定义的组件）完全封装它的样式。

#### 这是首选方案吗？

JSX 中的内联样式已经很好，除非你需要：

1. 写媒介查询
2. 写样式动画
3. 标记伪类（如 `:hover'`）
4. 标记伪元素（如 `::first-letter`）

简而言之，JSX 中的内联样式已经覆盖了基本用途，但并不是最终解决方案。

#### JSX 中的表单

为了让开发者更轻松，JSX 对 HTML 表单的工作方式进行了一些调整。

#### `value` 和 `defaultValue`

`value` 属性总是保存该字段的当前值。

`defaultValue` 属性保存创建该字段时的默认值。

_这个调整解决了 DOM 的一些奇怪行为，比如 `input.value` 和 `input.getAttribute('value')` 一个返回当前值，一个返回原始的默认值。_

`textarea` 同样做了一些调整，如：

```
<textarea>Some text</textarea>
```

改为

```
<textarea defaultValue={'Some text'} />
```

对于 `select` 元素，从原来是使用方法：

```
<select>
  <option value="x" selected>
    ...
  </option>
</select>
```

改为

```
<select defaultValue="x">
  <option value="x">...</option>
</select>
```

#### 更一致的 onChange

将函数传给 `onChange` 属性时，你就订阅了表单的事件。

它对于不同类型的输入元素都一样有效，包括 `radio`, `select` 和 `checkbox` 输入框都会触发 `onChange` 事件。

在 `input` 或 `textarea` 输入框输入一个字符也会触发 `onChange` 事件。

#### JSX 自动转义

为了降低 XSS 漏洞的风险，JSX 对表达式进行强制转义。

这意味着在字符串中使用 HTML 实体时可能会遇到问题。

你以为下面的表达式会输出 `© 2017`：

```
<p>{'© 2017'}</p>
```

但实际上它输出 `© 2017` 是因为字符串被转义了。

为了解决这个问题，你可以将实体移到表达式之外：

```
<p>© 2017</p>
```

或者使用一个常量来输出的 HTML 实体对应的 Unicode 表达式：

```
<p>{'\u00A9 2017'}</p>
```

#### JSX 中的空格符

在 JSX 中增加空格符有两条规则：

**规则 1： 横向空格符会被缩减为一个空格**

如果你在一行中有多个空格符，他们会被缩减为一个空格。

```
<p>Something       becomes               this</p>
```

会变成

```
<p>Something becomes this</p>
```

**规则 2：纵向空格符会被清除**

```
<p>
  Something
  becomes
  this
</p>
```

会变成

```
<p>Somethingbecomesthis</p>
```

想要解决这一问题，你需要这样通过增加空格符表达式来显式地增加空白符：

```
<p>
  Something
  {' '}becomes
  {' '}this
</p>
```

或者将字符串嵌入到空格符表达式中：

```
<p>
  Something
  {' becomes '}
  this
</p>
```


#### 在 JSX 中增加注释

你可以在表达式中像使用 JavaScript 注释那样给 JSX 添加注释。

```
<p>
  {/* a comment */}
  {
    //another comment
  }
</p>
```

#### 扩展属性

JSX 中的常见操作是给属性赋值。

相较于手动添加：

```
<div>
  <BlogPost title={data.title} date={data.date} />
</div>
```

你可以这么传递值：

```
<div>
  <BlogPost {...data} />
</div>
```

多亏了 _ES6 的扩展运算符_，`data` 对象中的属性会被自动作为属性值使用。

#### JSX 中的循环

如果有一组元素需要循环生成 JSX，你可以创建一个循环，然后把 JSX 添加到数组中：

```
const elements = [] //..some array
const items = []
for (const [index, value] of elements.entries()) {
  items.push(<Element key={index} />)
}
```

在渲染 JSX 时，你可以使用大括号嵌入 `items` 数组：

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

也可以在 JSX 直接使用 `map` 取代 for-of 循环：

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


### 组件

组件是一个独立的接口。打个比方，在一个典型的博客主页里，你会看到边栏组件和播客的文章列表组件。它们也是由组件组成的，文章列表组件中的每篇文章也是一个组件，并且有自己的独有的属性。

React 非常简单：一切都是组件。

纯 HTML 标签自身也是组件，默认情况下会添加它们。

下面两行代码实现了一样的功能。两个都将 `<h1>Hello World!</h1>` 注入一个 id 是 `app` 的元素，一个使用了 **JSX**，另一个没有。

```
import React from 'react'
import ReactDOM from 'react-dom'
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('app'))
ReactDOM.render(
  React.DOM.h1(null, 'Hello World!'),
  document.getElementById('app')
)
```

看到了吗，`React.DOM` 暴露了 `h1` 组件。还可以使用哪些 HTML 标签呢？所有！你可以在浏览器的控制台输入 `React.DOM` 来看有哪些标签可用：

（列表很长）

内置组件非常有用，但是你很快就会忘了它们。React 擅长的是让我们构建自定义组件来实现 UI。

#### 自定义组件

React 提供了两种定义组件的方法：

函数式组件：

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

类组件：

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

直到最近，还只能通过类组件定义有自己的 state 的组件，而且你能够在类组件中通过生命周期方法在组件第一次渲染、更新或移除时实现一些功能。

React Hooks 改变了这一局面，现在函数式组件比以往的任何时候都要强大，我相信未来会越来越少看到类组件，尽管它依然是一种很有效的创建组件的方法。

第三种创建组件的方法是通过 `ES5` 语法，不用创建类：

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

但在现代 `> ES6` 的代码库中，这种写法很少见。

### 状态

#### 在组件中设置默认状态

在组件的构造器中初始化 `this.state`。比如 BlogPostExcerpt 组件会有 `clicked` 状态：

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

#### 获取状态

_clicked_ 状态可以通过 `this.state.clicked` 获取：

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

#### 修改状态

状态不能通过直接赋值的方式修改：

```
this.state.clicked = true
```

你需要给 `setState()` 方法传入对象值来修改：

```
this.setState({ clicked: true })
```

传入的对象可以是状态的子集，也可以是超集。但只有传入值的属性会被修改，没有传入值的属性会保持当前状态的值。

#### 为什么要使用 `setState()`

使用这个方式是为了让 React 知道状态发生了变化。这会引发一系列事件让组件重新渲染，从而更新 DOM。

#### 单向数据流

状态始终属于组件，状态引发的数据变更只会影响其下的组件：组件的子组件。

修改组件的状态不会影响组件的父组件或兄弟组件，或应用内的其他组件，只会影响组件的子组件。

这也是常在组件树中上移状态的原因。

#### 将状态上移

由于单项数据流规则，如果两个组件需要共享状态，这一状态需要向上移动到它们共同的祖先组件上。

通常最近的祖先组件是最好的管理状态的地方，但这并不是强制的规则。

状态会作为属性传递给需要的组件：

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

将修改状态的函数作为属性传递给子组件可以让子组件能够修改状态。

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

组件通过 Props 获取属性值。从顶部组件开始，每个子组件都从它的父组件获取属性值。函数式组件中，传给组件的所有值都是 props，在函数中可以将 `props` 作为参数使用来获取属性值：

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

类组件中，props 是默认的，传递属性值不需要额外的操作，它们可以在组件实例中通过 `this.props` 获取。

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

将属性值传递给子组件可以方便地在应用中传递值。组件可以有自己的数据（状态值），也可以通过 props 获取数据。

遇到下列情况会复杂一些：

- 当一个隔了好几个级别的子组件需要获取父组件的状态时（中间级别的所有组件都需要向下传递这一属性值，即使它们本身不需要这个值）
- 当需要获取一个完全无关联的组件的状态值时

#### props 的默认值

如果某个值不是必传的，我们需要指定一个默认值，否则组件初始化时会有缺失的值。

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

一些工具如 ESLint 会强制要求组件给 propTypes 中非必须的属性定义默认值，

#### props 如何传递

组件初始化时，props 像 HTML 的属性那样传递：

```
const desc = 'A description'
//...
<BlogPostExcerpt title="A blog post" description={desc} />
```

我们给 title 传了一个字符串（也 _只能_ 是字符串），并给 description 传了一个变量。

#### children

`children` 是一个特殊的属性，它可以用来传递任何需要给组件的 `body` 传递的值，比如：

```
<BlogPostExcerpt title="A blog post" description="{desc}">
  Something
</BlogPostExcerpt>
```

如这个例子， `BlogPostExcerpt` 里我们可以通过查找 `this.props.children` 来获取 `Something` 。

尽管 Props 允许组件从父组件获取属性值，如打印一些数据，但状态允许组件独立于环境，有自己的生命周期。

### 展示组件与容器组件

React 的组件被分为两类：**展示组件** 和 **容器组件**。

它们有自己的特性。

展示组件主要用来生成展示的内容。

除了与展示内容相关的状态，它们不用管理其他的状态。

容器组件主要用来管理“后端”的操作。

它们会管理许多子组件的状态，包含很多展示组件，需要和 Redux 交互。

简单来说两者的区别，**展示组件管理外观**，**容器组件保证运作**。

比如，这就是一个展示组件，它通过 props 获取数据，只关注如何展示元素：

```
const Users = props => (
  <ul>
    {props.users.map(user => (
      <li>{user}</li>
    ))}
  </ul>
)
```

这则是一个容器组件，它管理并存储自己的数据，通过展示组件来展示内容。

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

### State VS props

React 组件中，父组件通过 **props** 传递变量值。**state** 也是变量值，不过由组件自己生成及管理。

state 可以通过 props 来初始化。

比如，父组件可能包含如下子组件：

```
<ChildComponent />
```

父组件可以通过这样的语法来传递属性：

```
<ChildComponent color=green />
```

在 ChildComponent 的构造器内，可以获取属性值：

```
class ChildComponent extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.color)
  }
}
```

这个组件中的其他的方法也可以通过 `this.props` 来获取属性值。

组件的内部状态可以在构造器内通过 props 来设定值，像这样：

```plain
class ChildComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state.colorName = props.color
  }
}
```

当然，组件的状态也可以不根据 props，自行设定。

在这个例子中，这么做没有任何收益，但是想想当需要一个基于属性值的状态值时，这样设定状态值就是很好的方式了。

子组件中不能修改属性的值，因此如果需要修改这个变量的值，这个变量只能是组件的状态值。

父组件中的方法也可以通过 props 传递给子组件。这样可以在父组件中集中管理状态值，避免组件为此需要新增一个自己的状态。

大部分组件只需要展示属性值，保持 **stateless**。

### PropTypes

JavaScript 是一种动态类型预约，我们无法在编译时强制规定变量的类型。如果传了无效的类型，可能导致运行失败；如果传的数据类型并不是我们期望的，但是又和期望的类型兼容，可能会得到奇怪的结果。

Flow 和 TypeScript 都能规避这些问题，React 本身也有一种直接规定属性类型的方式，在运行代码之前，我们的工具（编辑器或 linter）就可以检查到传递了错误类型的值：

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

#### 有哪些可用的类型

以下是可以使用的基本类型：

-   PropTypes.array
-   PropTypes.bool
-   PropTypes.func
-   PropTypes.number
-   PropTypes.object
-   PropTypes.string
-   PropTypes.symbol

可以使用二选一的类型：

```
PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
]),
```

可以使用多个值的类型：

```
PropTypes.oneOf(['Test1', 'Test2']),
```

可以使用类的实例类型：

```plain
PropTypes.instanceOf(Something)
```

可以使用 React 节点类型：

```
PropTypes.node
```

也可以使用 any 类型：

```
PropTypes.any
```

数组有特殊的语法来接收某种特定类型的数组类型：

```
PropTypes.arrayOf(PropTypes.string)
```

还可以组成对象的熟悉：

```
PropTypes.shape({
  color: PropTypes.string,
  fontSize: PropTypes.number
})
```

#### 必有属性

给 PropTypes 的某一项加上 `isRequired` 后，如果这个属性缺失，React 会报错：

```
PropTypes.arrayOf(PropTypes.string).isRequired,
PropTypes.string.isRequired,
```


### React Fragment

注意我如何用 `div` 包裹返回值。这是因为组件只能返回一个元素，如果你需要返回多个，就需要用另一个容器标签把它们包裹起来。

然而，这样会导致输入的内容里增加了一个不需要的 `div`。使用 `React.Fragment` 能够避免这一情况：

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

最新的版本（和 Babel 7+)还支持还可以使用缩写的语法 `<></>`：

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

### 事件

React 提供了一种简单的管理事件的方法，可以和 `addEventListener` 说再见。

在前面关于状态的内容里，你见过这个示例：

```
const CurrencySwitcher = props => {
  return (
    <button onClick={props.handleChangeCurrency}>
      Current currency is {props.currency}. Change it!
    </button>
  )
}
```

如果你使用 JavaScript 有一阵子了，那这个示例就是关于 JavaScript 事件处理的老生常谈，只不过这次你是在 JavaScript 里来定义它们，而不是 HTML，此外传入的是一个函数，而不是字符串。

事件名也有一点不同，因为 React 里需要使用驼峰命名，因此 `onclick` 变成了 `onClick`，`onsubmit` 变成了 `onSubmit`。

作为对比，下面是一个传统的 HTML 代码，夹杂了 JavaScript 事件：

```
<button onclick="handleChangeCurrency()">...<;/button>
```

#### 事件处理器

类组件中，通常会将事件处理器定义成方法：

```plain
class Converter extends React.Component {
  handleChangeCurrency = event => {
    this.setState({ currency: this.state.currency === '€' ? '$' : '€' })
  }
}
```

所有的处理器都接受一个跨浏览器遵守 W3C UI 事件规范的事件对象。

#### 方法中绑定 `this` 

在类组件中，不要忘记绑定方法。ES6 的类默认不绑定方法，也就是说除非通过箭头函数定义方法，否则方法的 `this` 没有定义：

```plain
class Converter extends React.Component {
  handleClick = e => {
    /* ... */
  }
  //...
}
```

除非在使用 Babel 的属性初始化语法（`create-react-app` 默认开启），否则需要在构造器中手动绑定：

```
class Converter extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {}
}
```

### 事件参考

事件有非常多种，这里是摘要列表。

#### 剪切板事件

- `onCopy`
- `onCut`
- `onPaste`

#### 复合事件

- `onCompositionEnd`
- `onCompositionStart`
- `onCompositionUpdate`

#### 键盘事件

- `onKeyDown`
- `onKeyPress`
- `onKeyUp`

#### 焦点事件

- `onFocus`
- `onBlur`

#### 表单事件

- `onChange`
- `onInput`
- `onSubmit`

#### 鼠标事件

- `onClick`
- `onContextMenu`
- `onDoubleClick`
- `onDrag`
- `onDragEnd`
- `onDragEnter`
- `onDragExit`
- `onDragLeave`
- `onDragOver`
- `onDragStart`
- `onDrop`
- `onMouseDown`
- `onMouseEnter`
- `onMouseLeave`
- `onMouseMove`
- `onMouseOut`
- `onMouseOver`
- `onMouseUp`

#### 选择事件

- `onSelect`

#### 触摸事件

- `onTouchCancel`
- `onTouchEnd`
- `onTouchMove`
- `onTouchStart`

#### UI 事件

- `onScroll`

#### 鼠标滚轮事件

- `onWheel`

#### 媒体事件

- `onAbort`
- `onCanPlay`
- `onCanPlayThrough`
- `onDurationChange`
- `onEmptied`
- `onEncrypted`
- `onEnded`
- `onError`
- `onLoadedData`
- `onLoadedMetadata`
- `onLoadStart`
- `onPause`
- `onPlay`
- `onPlaying`
- `onProgress`
- `onRateChange`
- `onSeeked`
- `onSeeking`
- `onStalled`
- `onSuspend`
- `onTimeUpdate`
- `onVolumeChange`
- `onWaiting`

#### 图像事件

- `onLoad`
- `onError`

#### 动画事件

- `onAnimationStart`
- `onAnimationEnd`
- `onAnimationIteration`

#### Transition 事件

- `onTransitionEnd`

### 生命周期事件

React 类组件有很多处理生命周期事件的钩子。

> 函数组件也有处理生命周期事件的钩子，不过和类组件的处理方式不太一样。

在组件的生命中，相继触发了一系列事件，每一个事件都有对应的钩子，可以提供定制化的函数。

接下来我们看看不同的功能用什么钩子最合适。

首先，React 组件的生命周期有 3 个阶段：

-   Mounting 挂载
-   Updating 更新
-   Unmounting 卸载

我们来研究一下这 3 个阶段，以及它们对应使用的方法。

#### Mounting 挂载

挂载时，当组件在 DOM 中完成挂载之前，有 4 种生命周期方法，分别是：`constructor`、 `getDerivedStateFromProps`、 `render` 和 `componentDidMount`。

#### `Constructor`

constructor 是挂载组件时第一个被触发的方法。

constructor 通常用来配置初始的状态，使用方法是 `this.state = ...`。

#### `getDerivedStateFromProps()`

当状态依赖于属性时，`getDerivedStateFromProps` 可以用来基于属性值更新状态。

React 16.3 新增了这一方法，旨在替代过时的 `componentWillReceiveProps` 方法。

它是一个静态方法，因此在这个方法中，你无法访问 `this`。

此外，它还是个纯方法，因此使用时不会引发副作用，且在输入相同值时总是返回相同的值。

状态改变时，它会返回更新后的元素组成的对象（如果状态没有改变则会返回 null）。

#### `render()`

render() 方法会返回构建组件界面的 JSX。

它也是个纯方法，因此使用时不会引发副作用，且在输入相同值时总是返回相同的值。

#### `componentDidMount()`

这个方法用来执行 API 调用，或 DOM 操作。

#### Updating 更新

更新时，当组件在 DOM 中完成挂载之前，有 5 种生命周期方法，分别是：`getDerivedStateFromProps`、 `shouldComponentUpdate`、 `render`、 `getSnapshotBeforeUpdate` 和 `componentDidUpdate`。

#### `getDerivedStateFromProps()`

参见上一部分的描述。

#### `shouldComponentUpdate()`

这个方法返回一个布尔值，`true` 或者是 `false`。这个方法用于告诉 React 是否继续渲染，它的默认值是 `true`。当渲染成本过高，使用者希望控制渲染过程时，可以返回 `false`。

#### `render()`

参见上一部分的描述。

#### `getSnapshotBeforeUpdate()`

这个方法可以访问上一次渲染和当前渲染的属性和状态。

它的使用场景非常少，你可能很少会用到它。

#### `componentDidUpdate()`

当组件在 DOM 中更新时，这个方法会被触发。它可以用来执行任何第三方的 DOM API 或者调用任何需要在 DOM 变化时更新的 API。

它对应挂载阶段的 `componentDidMount()` 方法。

#### Unmounting 卸载

这一阶段只有一个方法，即 `componentWillUnmount`。

#### `componentWillUnmount()`

当组件从 DOM 中移除时，这个方法会被触发。你可以通过这个方法执行任何清理事务。

#### 遗留问题

如果你的应用还在用 `componentWillMount`、 `componentWiiReceiveProps` 或 `componentWillUpdate`这些 React 16.3 中废弃的方法，那就需要迁移到别的生命周期方法了。

### React 中的表单

表单是为数不多的默认即为交互式的 HTML 元素。

它们的设计目的就是让用户和页面交互。

表单的常见应用场景？

- 搜索
- 联络表格
- 购物车结算
- 登录和注册
- 还有更多！

React 能让表单更具交互性，减少静态性。

React 中处理表单有两种主要方式，它们的根本不同在于数据如何管理。

- 如果数据通过 DOM 处理，我们称其为 **非受控组件**
- 如果数据通过组件处理，我们称其为 **受控组件**

如你所想，我们大多数时候都会使用受控组件。组件状态是唯一的数据来源，而非 DOM。有些表单字段由于其行为无法受控，如 `<input type="file">`。

当组件中的某个表单字段发生变化时，我们通过 `onChange` 属性来跟踪数据的变化。

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

为了设置新的状态值，我们需要给 `handleChange` 方法绑定 `this`，否则方法内无法访问 `this`。

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

与之类似，我们在提交表单时通过 `onSubmit` 属性来调用 `handleSubmit` 方法。

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

可以在 `handleChange` 方法中处理表单验证：访问新的状态值和旧的状态值。你可以检查新的状态值，如果是无效值，则可以拒绝提交（并告知用户）。

HTML 表单由于历史原因表现不一致。React 则帮我们处理了这些不一致，让我们可以通过 `value` 属性来获取和更新表单字段的值。

这是 `textarea` 的例子：

```
<textarea value={this.state.address} onChange={this.handleChange} />
```

`select` 标签也可以这样操作：

```
<select value="{this.state.age}" onChange="{this.handleChange}">
  <option value="teen">Less than 18</option>
  <option value="adult">18+</option>
</select>
```

我们在前面提到过 `<input type="file">` 元素，它的实现方式略有不同。

在下面的例子中，需要在构造器中使用 `React.createRef()` 来创建引用，并将这个引用指定给表单的 `ref` 属性，这样才能在 submit 处理器中获取表单字段的值：

```plain
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

这是**非受控组件**的实现方式。字段值存在 DOM 中，而非组件状态中（注意我们通过 `this.curriculum` 来获取上传的文件，没有用到 `state`）。

我知道你肯定在想，基于以上这些，一定有一个能够简化表单处理，自动验证字段，自行处理错误的库，对吗？的确有，[Formik](89)。

### 引用 DOM 元素

在构建应用时，React 能够帮你非常方便地抽象 DOM。

但是如果你希望在 React 组件中访问 DOM 元素呢？

也许你会在应用中添加能够直接与 DOM 交互的代码库，或者调用一些 DOM API，或者给元素添加焦点。

> 无论是什么原因，好的做法是确保没有其他方法可以直接访问 DOM。

在组件的 JSX 代码中，可以通过组件的 `ref` 属性指定 DOM 元素的引用。

```
ref={el => this.someProperty = el}
```

我们通过实际例子来看，比如一个 `button` 元素：

```
<button ref={el => (this.button = el)} />
```

`button` 是组件的属性，通过使用 `button` 可以在组件的生命周期方法（或其他方法）中与 DOM 交互：

```
class SomeComponent extends Component {
  render() {
    return <button ref={el => (this.button = el)} />
  }
}
```

在函数式组件中也一样，只不过不需要使用 `this`(因为 `this` 不指向组件实例)，只使用属性即可：

```
function SomeComponent() {
  let button
  return <button ref={el => (button = el)} />
}
```

### 服务端渲染

**服务端渲染**，也成为 **SSR**，指 JavaScript 应用在服务端而非浏览器端渲染的功能。

我们为什么需要这个功能呢？

- 它能加快网站首页的加载时间，这是获得好的用户体验的关键
- 它对 SEO 至关重要：搜索引擎（目前？）还无法有效且准确地索引只通过客户端渲染的应用。尽管 Google 索引有了最新的改进，但无论是其他搜索引擎还是 Google 自身都没有做到完美。此外，Google 更偏向加载速度快的页面，而客户端加载在速度上并不占优
- 当人们在设计媒体上分享你的网站时，服务端渲染能够非常方便地收集分享链接所需的元数据（图片、标题、描述等）

如果不通过服务端渲染，你的服务器传输的只是一个没有 body 的 HTML 页面，只包含一些浏览器用来渲染应用的标签。

客户端渲染的应用非常适合进行首页加载完成之后的其他交互。服务端渲染使我们能够在客户端渲染应用和后端渲染应用中获得最佳位置：页面由服务端生成，但是一旦页面加载完成后，所有的交互都有客户端来处理。

不过服务端渲染也有其自身的问题：

- 简单应用的服务端渲染实现比较简单，但是随着应用的复杂性增加，服务端渲染的复杂性也随之增加
- 渲染大型应用程序会占用大量资源，并且在繁重的加载量下，当遭遇瓶颈时，它可能提供比客户端渲染更慢的体验

### 服务器渲染 React 应用的简单示例

SSR 配置可以变得非常非常复杂，并且大部分教程都会从一开始就集中讨论 Redux、 React Router 和其他概念。

为了了解 SSR 的原理，让我们从基础知识入手，来验证一下 SSR 的概念。

> _如果你希望通过提供 SSR 的库来实现 SSR，而不想了解基础知识的话，可以跳过这一段_

我们通过 Express 来实现基础的 SSR。

 _如果你不了解 Express，或者需要复习 express，可以看一看我的免费的 Express 手册：[https://flaviocopes.com/page/ebooks/][90]。_

注意：随着你的应用的复杂度的增加，SSR 的复杂度也会增加。例子中只是实现渲染基础 React 应用的最低要求。对于更复杂的需求，你需要做更多工作，也许还需要使用 React 专有的 SSR 库。

我猜你通过 `create-react-app` 来搭建 React 应用。如果你正在尝试，可以先通过 `npx create-react-app ssr` 下载。

进入应用的主文件夹，运行：

```
npm install express
```

应用的目录中会有很多文件夹。创建一个叫做 `server` 的新文件夹，接着进入这个文件夹，并创建一个名为 `server.js` 的文件。

按照 `create-react-app` 的惯例，应用位于 `src/App.js` 文件中。我们会加载组件，并通过 `react-dom` 的 `RaectDOMServer.renderToString()` 将组件渲染成字符串。

获取到的 `./build/index.html` 文件的内容，会将应用默认的 `div id="root"></div>` 标签替换成 `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`。

`build` 文件夹中的所有内容都会通过 Express 提供的数据呈现处理。

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

现在客户端应用不会像从前那样调用 `src/index.js` 文件中的 `ReactDOM.render()`方法：

```
ReactDOM.render(<App />, document.getElementById('root'))
```

而是调用 `[ReactDOM.hydrate()][92]` 方法。相较于 `ReactDOM.render()`，它还有一些额外的功能，会在 React 加载后立刻把事件监听器添加到现有的标记上。

```
ReactDOM.hydrate(<App />, document.getElementById('root'))
```

由于服务端的 Node.js 代码不了解任何关于 JSX，或者 ES 模块的知识，因此所有的 Node.js 的代码都需要通过 Babel 编译。

下载以下 3 个包：

```
npm install @babel/register @babel/preset-env @babel/preset-react ignore-styles express
```

`[ignore-styles][93]` 是一个 Babel 实用程序，用来告诉它忽略通过 `import` 语法导入的 CSS 文件。

让我们在 `server/index.js` 中创建一个入口：

```
require('ignore-styles')
require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react']
})
require('./server')
```

在 build 文件夹中构建 React 应用：

```
npm run build
```

并运行：

```
node server/index.js
```

正如我说的，这是一个简单的示例：

- 导入的图片没有正确地渲染，需要通过 Webpack 来解决（这会使整个过程变得复杂）
- 它没有处理页面头部的元数据，这对于 SEO 和社交分享来说是必须的（相较于其他功能）

这个示例可以很好地阐释如何使用 `ReactDOMServer.renderToString()` 和 `ReactDOM.hydrate` 来实现基础的服务端渲染，但对于现实中的使用远远不够。

#### 通过库实现服务端渲染

做好 SSR 并不容易，React 还没有推出实现服务端渲染的业界标准做法。

对于是否值得大费周章地实现服务端渲染，以及它带来的复杂性和收益和其他技术相比是否有优势，仍然具有争议性。[Reddit 上的相关讨论][94]有很多这方面的意见。

当必须实现服务端渲染时，我的建议是依赖从一开始就瞄准实现这一目标的预制库和工具。

具体来说，我意见使用 **Next.js** 和 **Gatsby**，我们将在后面讨论到这两个项目。

### Context API

使用 Context API 可以优雅地不通过属性在应用中传递状态。它允许你在整个应用中传递状态（和更新状态），而不用使用属性来传递。

React 团队建议如果只是跨少数层级地传递状态，最好还是使用属性值传递，因为这样远没有 Context API 复杂。

在很多情况下，它可以取代 Redux，极大程度上简化我们的应用，并且理解如何使用 React。

它是如何运作的呢？

通过 `React.createContext()` 方法创建上下文，这个方法会返回一个 Context 对象：

```
const { Provider, Consumer } = React.createContext()
```

接着通过 Context 对象返回的 **Provider** 创建一个容器组件，并将所有需要访问上下文的组件添加到容器组件中：

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

我把容器组件成为 Container 是因为它会作为全局提供者，你也可以创建较小的上下文。

在 Provider 内的组件里，你可以通过 **Consumer** 组件来使用上下文：

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

你也可以在 Provider 中传递方法，Consumer 可以通过使用这些方法来更新上下文状态：

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

你可以在 [这个 Glitch][95] 中试试。

你可以创建多个上下文，让状态分布在不同的组件中，但你可以让任何你希望的组件访问这些状态。

当使用多个文件时，你可以在一个文件中创建，然后在需要的地方引用：

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

### 高阶组件

你可能对 JavaScript 的高阶函数很熟悉，是指能够接受函数作为参数，并返回函数的函数。

`Array.map()` 和 `Array.filter()` 就是两个例子。

在 React 中，这一概念被扩展到组件上，**高阶组件（HOC）** 可以传入一个组件作为属性，并返回一个组件。

通常情况下，高阶组件让你的代码的可组装性和可复用性更强，并且封装性更好。

我们可以给高阶组件的状态添加方法或者属性，或者例如 Redux 的 store。

你可能希望通过使用高阶组件来加强已有组件的功能，操作已有组件的状态、属性或渲染标记。

高阶组件的命名惯例是在组件名前加上字符串 `with` （这是一个惯例，并非必须），如果有一个 `Button` 组件，且是一个高阶组件，它应该被命名为 `withButton`。

我们来创建一个高阶组件。

最简单的高阶组件示例就是一个返回原组件的组件：

```
const withElement = Element => () => <Element />
```

接下来让组件更有用一些，在所有的属性之外，我们给按钮增加颜色属性：

```
const withColor = Element => props => <Element {...props} color="red" />
```

我们在组件 JSX 中使用 HOC：

```
const Button = () => {
  return <button>test</button>
}
const ColoredButton = withColor(Button)
```

最我们的应用中能够渲染出 ColoredButton 组件：

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

这个示例非常简单，但是希望在将这些概念应用到更复杂的场景中之前，你能从示例中理解 HOC 的要点。

### Render Props

常见的在组件之间共享状态的方式是通过使用 `children` 属性。

在组件 JSX 中，你可以渲染 `this.props.children` ，它会自动将父组件传入的任意 JSX 注入为子元素。

```plain
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

然而，有一个问题：子组件无法访问父组件的状态。

为了能够共享状态，你需要使用 render prop 组件，这次不是将组件作为子元素传递给父组件，而是传递一个会在 `{this.props.children()}` 中执行的函数。这个函数可以接收参数：

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

相较于使用含义明确的 `children` 属性，你可以使用任意属性，此外，还可以在同一个组件中使用多次这种方式。

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

### Hooks

React 16.7 将会引入 Hooks 特性，它将在未来改变我们写 React 应用的方式。

在 Hooks 出现之前，一些组件中的关键功能只能通过类组件实现：获取组件的状态和使用生命周期事件。函数组件虽然更加轻盈灵活，但是受限于它的功能。

**Hooks 让函数组件也能够拥有状态，并响应生命周期事件**，使得类组件过时了。Hooks 还让函数组件能够更好地处理事件。

#### 访问状态

使用 `useState()` API 可以创建一个新的状态变量，和一个更新它的方法。`useState()` 接受状态的原始值作为参数，并返回一个包含状态变量和更新状态变量的方法的数组。我们使用 [数组解构][96] 来分别获取状态和方法，像这样：`const [count, setCount] = useState(0)`。

下面是一个示例：

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

你可以添加无数个 `useState()`。只是需要保证在组件的顶层调用他们（而不是在 `if` 中或者其他函数块中）。

[Codepen 示例][97]

#### 访问声明周期的 hooks

Hooks 的另一个非常重要的特性是让函数组件可以访问生命周期。

使用类函数时，你可以在 `componentDidMount`、 `componentWillUnmount`、 `componentDidUpdate` 中注册函数，并且可以在很多场景中使用，无论是初始化变量、API 调用 还是清理。

Hooks 提供了 `useEffect()` API。它接受一个函数作为参数。

这个函数会在组件第一次渲染的时候以及后续的每一次重新渲染或者更新的时候执行。React 会先更新 DOM，然后调用传递给 `useEffect()` 的任意函数。它们不会像旧式的 `componentDidMount` 和 `componentDidUpdate` 那样阻塞 UI 渲染或是代码运行，因此让应用感觉变快了。

看例子：

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

`componentWillUnmount` 的功能可以通过在 `useEffect()` 参数中**返回**一个函数来实现。

```
useEffect(() => {
  console.log(Hi ${name} you clicked ${count} times)
  return () => {
    console.log(Unmounted)
  }
})
```

`useEffect()` 可以调用多次，因此最好把不相关的逻辑分开写（这是类组件的声明周期事件中的痛点）。

由于 `useEffect()` 函数在每一次重新渲染/更新时都会执行，为了保证性能，我们可以可以通过传递第二个参数来告诉 React 跳过某次执行。第二个参数是一个包含所有需要监听的变量的数组。React 只会在数组中的某个值发生变化时执行。

```
useEffect(
  () => {
    console.log(Hi ${name} you clicked ${count} times)
  },
  [name, count]
)
```

你可以通过只传一个空数组来让 React 只在挂载时执行一次：

```
useEffect(() => {
  console.log(Component mounted)
}, [])
```

`useEffect()` 非常适用于添加日志、获取第三方 API 以及其他一些场景。

[Codepen 示例][98]

#### 在函数组件中处理事件

在有 hooks 之前，你只能使用类函数，或者通过属性传递一个事件处理器。

现在你可以用内置的 `useCallback()` API:

```
const Button = () => {
  const handleClick = useCallback(() => {
    //...do something
  })
  return <button onClick={handleClick} />
}
```

函数中使用到的参数都需要在一个数组中传给 `useCallback()` 的第二个参数。

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

#### 自定义 hooks 实现跨组件通信

能够自定义 hooks 将极大程度地改变你写 React 应用的方式。

自定义 hooks 是除了 render props 和高阶组件之外的另一个在组件之间共享状态的方法。尽管 render props 和高阶组件仍然是很好的方式，但在很多使用场景中被自定义 hooks 取代了。

要如何创建自定义 hook 呢?

hook 是一个开头以 `use` 命名的函数。它接受任意数量的参数，并且返回任意你希望的内容。

示例：

```plain
const useGetData() {
  //...
  return data
}
```

或是：

```
const useGetUser(username) {
  //...const user = fetch(...)
  //...const userData = ...
  return [user, userData]
}
```

在你的组件中，你可以这样使用 hook：

```
const MyComponent = () => {
  const data = useGetData()
  const [user, userData] = useGetUser('flavio')
  //...
}
```

何时使用 hooks 而不是常规函数需要视情况而定，因此只能靠经验积累。

### 代码分割

现代 JavaScript 应用的包大小可能会非常大。你不会希望用户加载第一个页面时需要下载 1MB 的 JavaScript 包（包括你的代码和你使用的库），对吧？但这正是你通过 Webpack 打包后，发布你的网页应用时默认发生的情况。

包里包含着一些可能永远不会被运行的代码，因为用户可能只停留在登录页面，没有使用应用的任何其他部分。

代码分割是只加载当前所需代码的一种实践。

它能够提升：

- 应用的性能
- 对内存的影响，以及移动端设备的电池使用时间
- 下载的大小

2018 年 10 月发布的 React 16.6.0 引入了一种实现代码分割的方式，它应该取代以前使用的工具或库：**React.lazy** 和 **Suspense**。

`React.lazy` 和 `Suspense` 提供了一种完美的延迟加载依赖和只加载所需的方式。

我们从 `React.lazy` 开始，你可以使用它来引入任意组件。

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

TodoList 组件会在需要的时候动态地显示。Webpack 会为它创建一个单独的包，并且只在需要的时候加载。

`Suspense` 组件可以用来包裹任意延迟加载的组件：

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

它负责在获取和渲染延迟加载的组件时处理输出。

使用 `fallback` 属性来输出一些 JSX 或组件内容：

```plain
...
      <React.Suspense fallback={<p>Please wait</p>}>
        <TodoList />
      </React.Suspense>
...
```

这些也能很好地配合 React Router 使用：

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

### 第 4 部分：实例

接下来通过两个简单的应用来阐释我们已经介绍过的概念。

### 用 React 搭建一个简单的计数器

在接下来的简短示例中，我们要用 React 搭建一个非常简单的计数器，来介绍前面提到过的概念和理论。

我们用 Codepen 来实现。我们从复制 [React template pen][99]开始。

> 使用 Codepen 可以不用引入 React 和 ReactDOM，因为它们已经添加到环境中了。

我们在一个 div 元素中展示计数器的数，并且给它添加几个按钮来增加计数。

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

我们给按钮加上 `onClickFunction` 属性，这样点击按钮就能改变计数了。

```plain
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

示例中的每个按钮都有 2 个属性：`increment` 和 `onClickFunction`。我们创建了 4 个不同的按钮，点击它们增加的值分别是：1、10、100、1000。

点 Button 组件中的 button 元素会调用 `incrementCount` 函数。

函数需要增加本地的计数值。我们通过 hooks 来实现：

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

`useState()` 将计数的初始值设置为 0，并让我们通过 `setCount()` 方法来更新计数值。

我们在 `incrementCount()` 方法中使用了这两个值，我们通过 `setCount()` 来更新 `count` 的当前值，更新的值为当前值加上每个 Button 组件的增加值。

在 这里[https://codepen.io/flaviocopes/pen/QzEQPR][100] 可以参考完整的代码。

### 通过 API 获取和展示 GitHub 用户的信息

在下面的简单示例中，表单可以接受一个 GitHub 用户名，当触发表单的 `submit` 事件时，会通过 GitHub API 询问用户信息，并打印出来。

这部分代码创建了一个可复用的 **Card** 组件。当你在 **Form** 组件下的 `input` 中输入名字时，这个名字就 _被绑定到状态_ 中。

点击 _Add card_ 会清空 **Form** 组件中的 `userName` 状态，从而清空输入栏。

这个示例除了 React，还是用了 [Axios][101] 库。Axios 是一个好用且轻量的用于处理网络请求的库。使用方式是将它添加到 Codepen 的设置中，或者在本地通过 `npm install axios` 下载。

我们从创建 `Card` 组件开始，它用于展示从 GitHub 获取的图像和信息。它通过属性获取这些信息：

- `props.avatar_url` 表示用户的头像
- `props.name` 表示用户名
- `props.blog` 表示用户的网站地址

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

我们通过 `CardList` 这个父组件来展示一系列的 Card 组件。我们给 `CardList` 传递 `cards` 属性，它通过 `map()` 方法遍历所有的 card 来输出组件：

```
const CardList = props => (
  <div>
    {props.cards.map(card => (
      <Card {...card} />
    ))}
  </div>
)
```

父组件是 App，它将 `cards` 数组保存在自己的状态中，并通过 `useState()` hook 来管理 cards:

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

我们需要有一种方法向 GitHub 来询问某个用户名的详细信息。我们通过一个 `Form` 组件，管理自己的 `username` 状态，并通过 Axios 来请求 GitHub 的公共 API 获取信息：

```
const Form = props => {
  const [username, setUsername] = useState('')
  handleSubmit = event => {
    event.preventDefault()

    axios.get(`https://api.github.com/users/${username}`).then(resp => {
      props.onSubmit(resp.data)
      setUsername('')
    }) 
  }
  
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

我们出发 `handleSubmit` 事件提交表单，在请求成功后，我们调用 `props.onSubmit` 方法，把从 GitHub 获取的数据传递给父组件 `App`。

我们给 `onSubmit` 属性添加 `addNewCard` 方法，添加新的 card。

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

最后渲染应用：

```plain
ReactDOM.render(<App />, document.getElementById('app'))
```

以下是这个 React 应用的完整源代码：

```plain
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
      .get(`https://api.github.com/users/${username}`)
      .then(resp => {
        props.onSubmit(resp.data)
        setUsername('')
      }) 
  }

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

这是最终成果：

![](https://cdn-media-1.freecodecamp.org/images/cZoqPqmbwvuUaIiWJ16fTj6VOhTIquXDECnP)

也可以在 Codepen 上查看[https://codepen.io/flaviocopes/pen/oJLyeY][102]

### 第 5 部分：样式

### React 中的 CSS

使用 React 时，你可以通过多种方法给组件添加样式。

#### 使用 classes 和 CSS 

最简单直接的方式就是使用 classes，并使用普通的 CSS 文件来定义 class 的样式：

```
const Button = () => {
  return <button className="button">A button</button>
}
.button {
  background-color: yellow;
}
```

你可以使用如下方式引入样式文件：

```
import './style.css'
```

[Webpack][103]会在打包时添加 CSS 属性。

#### 使用 style 属性

第二种方式是给 JSX 元素添加 `style` 属性，这样就不需要单独的 CSS 文件了。

```
const Button = () => {
  return <button style={{ backgroundColor: 'yellow' }}>A button</button>
}
```

CSS 的定义略有不同。首先，由于 `style` 属性接受的值为对象，因此需要使用双括号。我们也可以通过括号先定义一个 JavaScript 对象，再给 `style`，就像这样：

```
const buttonStyle = { backgroundColor: 'yellow' }
const Button = () => {
  return <button style={buttonStyle}>A button</button>
}
```

当使用 `create-react-app` 时，[Autoprefixer][104]会自动给样式加上前缀。

此外，样式属性需要使用驼峰命名，而不是破折号。当 CSS 属性中含有破折号时，需要去掉破折号，并将下一个单词的首字母替换成大写。

这样的优点是样式在组件本地，它们不会泄露到应用的其他组件中，这是使用 classes 和外部 CSS 文件无法提供的。

#### 使用 CSS 模块

**CSS 模块**似乎是一个中间的完美选择：你使用 classes，但是 CSS 仅限于组件内，也就是说，样式不会在你不允许的情况下应用到其他组件中。但样式是通过单独的 CSS 文件定义，比通过 JavaScript 维护更方便（你还可以使用 CSS 原来的属性名）。

创建 CSS 模块的方式是创建一个以 `.module.css` 命名结尾的 CSS 文件，如 `Button.module.css`。用即将应用这些样式的组件的名字命名 CSS 文件是比较好的方式。

在需要应用这些样式的组件内引入样式文件：

```
import style from './Button.module.css'
```

也可以在 JSX 中使用：

```
const Button = () => {
  return <button className={style.content}>A button</button>
}
```

在生成的标记中，React 会为每一个渲染的组件生成一个独一无二的 class，并将 CSS 分配给这个 class，以使 CSS 不会影响其他标记。

### 在 React 中使用 SASS

当你使用 `[create-react-app][105]` 搭建 React 应用时，在样式方面，你有很多选择。

> _当然，如果不使用 `create-react-app`，你将拥有所有的选择，但我们将讨论限制在 `create-react-app` 提供的选择上。_

你可以通过 style 属性或 CSS 模块，使用普通的 class 或 CSS 文件来定义样式。

SASS/SCSS 是非常流行且受开发者喜爱的选择。

使用 `create-react-app` 2，你可以不做任何配置就开始使用。

你只需要在组件中引入 `.sass` 或 `.scss` 文件：

```
import './styles.scss'
```

你可以在这里：[https://codesandbox.io/s/18qq31rp3][106] 查看一个例子。

### 样式化的组件

样式化的组件是现代 JavaScript 中使用 CSS 的新方法之一。它的目的是成为 CSS 模块的继任者，通过它写样式时，样式范围仅限于单个组件，而不会泄漏到页面的其他元素中。

#### 历史概要

从前，网络真的非常简单，CSS 甚至都不存在。我们通过**表格**和框架布置页面。真是好时光。

接着，**CSS**出现了，人们逐渐意识到，框架在搭建网格和布局方面能够起到很大的积极作用，Bootstrap 和 Foundation 在其中起到很大的作用。


诸如 **SASS** 等预处理器极大地减缓了框架应用的速度，并更好地组织代码，尤其在团队内部，形成了如 **BEM** 和 **SMACSS** 等约定。

约定并不是万能解药，它们过于复杂，难以记忆，因此在过去几年中，随着 [JavaScript][107] 的采用和前端项目的搭建流程的增加，CSS 逐渐找到自己在 JavaScript 中的位置（**CSS-in-JS**）。

新工具在探索实现 CSS-in-JS 的新方式，其中一些变得流行起来：

-   `React Style`
-   `jsxstyle`
-   `Radium`

还有其他方式。

#### 介绍样式化的组件

这些工具中最流行的就是 **样式化的组件**。

它的目的是成为 **CSS 模块** 的继任者，使用它写样式时，样式范围仅限于单个组件，而不会泄漏到页面的其他元素中。

可以通过 [这里][108] 和 [这里][109] 了解更多 CSS 模块的内容。

样式化的组件允许你在组件中写 CSS，不用担心类名冲突。

#### 安装

使用 [npm][110] 或 [yarn][111] 来安装 styled-components：

```plain
npm install styled-components
yarn add styled-components
```

这样就好了！现在你可以将它引入了：

```plain
import styled from 'styled-components'
```

#### 你的第一个样式化的组件

通过引入样式对象，你就可以开始创建样式化组件了。这是第一个例子：

```
const Button = styled.button`
  font-size: 1.5em;
  background-color: black;
  color: white;
`
```

`Button` 如今是一个 React 组件。

我们使用样式对象的函数，在这个例子中即 `button`来创建组件，并在[模板字符串][112]中传入 CSS 属性。

现在这个组件可以通过普通的 React 语法在容器中渲染：

```
render(<Button />)
```

不仅限于 `button`，样式化组件还提供了其他创建组件的方法，如 `section`、 `h1`、 `input` 等等。

刚开始使用反引号语法会有些奇怪，它们被称为 [标签模板 Tagged Templates][113]，是一种纯 JavaScript，是将参数传递给函数的一种方式。

#### 通过属性值自定义组件

当你给样式化组件传属性值时，这些属性值会传递给已挂载的[节点][114].

在下面的例子里，我们把 `placeholder` 和 `type` 属性传给 `input` 组件：

```
const Input = styled.input`
//...
`

render(
  <div>
    <Input placeholder="..." type="text" />
  </div>
)
```

你只用把属性值像 HTML 属性一样传进去。

除了将值直接传给 [DOM][115]，属性还可以基于属性的值来自定义组件。就像下面的例子：

```
const Button = styled.button`
  background: ${props => (props.primary ? 'black' : 'white')};
  color: ${props => (props.primary ? 'white' : 'black')};
`

render(
  <div>
    <Button>A normal button</Button>
    <Button>A normal button</Button>
    <Button primary>The primary button</Button>
  </div>
)
```

设置 `primary` 属性的值可以改变按钮的颜色。

#### 扩展现有的样式化组件

当你想基于现有组件创建一个只有些许变化的组件时，你可以通过 `extend` 来创建：

```
const Button = styled.button`
  color: black;
  //...
`

const WhiteButton = Button.extend`
  color: white;
`

render(
  <div>
    <Button>A black button, like all buttons</Button>
    <WhiteButton>A white button</WhiteButton>
  </div>
)
```

#### 常规 CSS

你可以用你熟悉的 CSS 方式定义样式化组件的样式，而不需要用伪 CSS 或者内联样式。

无论是媒体查询，[嵌套][116]还是任何其他样式，都可以在样式化组件中使用。

#### 浏览器引擎前缀

样式化组件会自动给样式添加浏览器引擎前缀，因此你不用担心样式在浏览器里是否生效的问题。

### 第 6 部分：工具

### Babel

Babel 是个非常棒的工具。它已经存在一段时间了，而现在几乎每个 JavaScript 开发者都依赖它。这种情况会继续下去，因为 Babel 已是必不可少的工具，它帮每个人都解决了大问题。

什么问题呢？

这是每个网页开发者都会面临的问题：最新版的浏览器支持的 JavaScript 特性在老版本的浏览器中不被支持；抑或是 Chrome 或 Firefox 支持的功能，Safari 或 Edge 并未支持。

比如，ES 6 引入了 **箭头函数**“

```
[1, 2, 3].map((n) => n + 1)
```

几乎所有的现代浏览器都支持这一特性，但 IE11 和 Opera Mini 并未支持（我如何知道的呢？可以查看 [ES6 兼容性表][117]）。

要怎么处理这个问题呢？是不理会老版本/不兼容版本浏览器，把问题留给用户，还是为了满足用户而写兼容老版本的 JavaScript 代码呢？

通过 Babel 解决。Babel 是一个 **编译器**：它接受以一种标准写的代码，并将它编译成另一种标准的代码。

你可以通过配置 Babel 来将现代的 ES2017 JavaScript 编译成 ES5 的语法：

```plain
[1, 2, 3].map(function(n) {
  return n + 1
})
```

这需要在构建时处理，因此你需要设置一个工作流程来替你完成。[Webpack][118]就是一个通用方式。

（P.S. 如果这些 _ES_ 标准让你感到疑惑，可以通过[ECMAScript 指南][119]了解更多 ES 版本)

#### 下载 Babel

Babel 可以方便地通过 [npm][120]下载到本地项目中：

```
npm install --save-dev @babel/core @babel/cli
```

由于npm现在带有 [npx] [121]，因此可以通过在项目文件夹中输入命令来运行本地安装的CLI软件包：

可以这样运行 Babel

```
npx babel script.js
```

#### Babel 配置的例子

初始的 Babel 并不会做任何有用的事情，你需要对它进行配置，并添加插件。

> [_这是一个 Babel 插件列表_][122]

要解决前面提到的问题（在所有浏览器中运行箭头函数），我们可以运行下面的命令

```
npm install --save-dev     @babel/plugin-transform-es2015-arrow-functions
```

将包下载到应用的 `node_modules` 文件夹中之后，我们需要添加插件到应用根目录下的 `.babelrc` 文件中。

```
{
  "plugins": ["transform-es2015-arrow-functions"]
}
```

如果文件夹中还没有这个文件，你可以创建一个空白文件，并添加内容到文件中。

> _提示：如果你从未见过命名以点开头的文件，一开始可能会觉得奇怪，因为这个文件是隐藏文件，它应该不会出现在你的文件管理器中。_

现在如果 `script.js` 文件中包含如下内容：

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

执行 `babel script.js` 会输出以下代码：

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
    
    this._friends.forEach(function (f) {
      return console.log(_this._name + " knows " + f);
    });
  }
};
console.log(bob.printFriends());
```

可以看到箭头函数全被转换成了 JavaScript ES5 标准的函数。

#### Babel 预设值

我们在前面学习了配置 Babel 编译 JavaScript 的功能。

你可以添加更多插件，但是不能一一添加到配置功能中，这是不实际的。

这是为什么 Babel 提供 **预设值**。

最广泛用到的预设值是 `env` 和 `react`。

> _提示： Babel 7 废弃（并删除）了以年为单位的预设值，如 `preset-es2017`，和针对处于标准提案阶段的功能所编写的预设。取而代之的是 `@babel/preset-env`。_

#### `env` 预设

`env` 预设非常方便：你告知 Babel 你希望支持哪些环境，它就会帮你处理，**支持所有现代的 JavaScript 功能**。

·例如，“支持所有浏览器的最新两个版本，以及支持 Safari 7 之后的所有 Safari 版本。

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

或是“我不需要浏览器支持，让我使用 Node.js 6.10 环境就行了”。

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

#### `react` 预设

写 React 应用时，`react` 预设非常方便：添加 `preset-flow`, `syntax-jsx`,  `transform-react-jsx`,  `transform-react-display-name`。

添加以上内容后，你在开发 React 应用时就支持 JSX 语法转换和 Flow 了。

#### 更多关于预审的信息

[https://babeljs.io/docs/plugins/][124]

#### 配合 webpack 使用 Babel

如果你想在浏览器运行现代 JavaScript，仅靠 Babel 是不够的，你还需要打包代码。Webpack 是完成这项任务的最佳工具。

现代 JS 包含两个不同的阶段：编译阶段和执行阶段。这是因为有些 ES6+ 的功能需要 polyfill 或者运行帮助。

执行以下命令下载 Babel polyfill 运行功能

```plain
npm install @babel/polyfill             @babel/runtime             @babel/plugin-transform-runtime
```

接下来在你的 `webpack.config.js` 文件中添加：

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

在 `webpack.config.js` 文件中维护预设和插件信息就可以避免使用 `.babelrc` 文件了。

### Webpack

Webpack 是编译 JavaScript 模块的工具，也被称为**模块打包器**。给它许多文件，它会生成一个（或几个文件）来运行你的应用。

它可以执行以下操作：

- 帮你打包资源
- 监听文件变动，并重新运行打包任务
- 运行 Babel 将代码编译到 ES5，让你可以不用顾虑浏览器支持，使用最新的 JavaScript 特性
- 可以将 CoffeeScript 编译成 JavaScript
- 可以将内联图片转换成数据 URI
- 允许你对 CSS 文件使用 require()
- 可以运行开发 web 服务器
- 可以处理热模块更换
- 可以将输出文件拆分成多个文件，防止首页加载时文件过大
- 可以执行 tree shaking

Webpack 不仅限于在前端使用，它在后端 Node.js 开发中也很有用。

仍被广泛使用的、在 webpack 之前出现的打包工具包括：

-  Grunt
-  Broccoli
-  Gulp

这些工具和 Webpack 的功能之间有很多相似性，但是最主要的区别时它们是**任务运行器**，而 webpack 是作为模块打包器诞生的。

它的功能更加集中：你指定应用的入口（它甚至可以是包含 script 标签的 HTML 文件），webpack 分析所有的文件，并将你需要的代码打包在一个 JavaScript 输出文件(或在多个拆分的文件)中。

#### 安装 webpack

Webpack 可以全局安装，也可以在项目本地安装。

#### 全局安装

以下命令通过 Yarn 全局安装 webpack：

```
yarn global add webpack webpack-cli
```

通过 npm 安装：

```
npm i -g webpack webpack-cli
```

安装完成后，你就可以运行了

```
webpack-cli
```

#### 本地安装

Webpack 也可以在本地安装。这是推荐的操作，因为 webpack 可以按项目进行更新，而且你可以更轻松地在小项目中使用最新的特性，而不需要更新所有项目的 webpack。

通过 Yarn 安装：

```
yarn add webpack webpack-cli -D
```

通过 npm 安装：

```
npm i webpack webpack-cli --save-dev
```

安装完成后，在你的 `package.json` 文件中添加以下代码：

```
{
  //...
  "scripts": {
    "build": "webpack"
  }
}
```

安装完成后，你可以在项目目录下输入以下命令运行 webpack

```
yarn build
```

#### Webpack 配置

默认情况下，如果你遵循以下约定，webpack（从版本 4 开始）就不用做任何配置：

- 你的应用**入口**是 `./src/index.js`
- 输入是 `./dist/main.js`
- Webpack 在生产环境使用

如果需要，你当然可以自定义 webpack 的每一个细节。webpack 配置保存在项目根文件夹的 `webpack.config.js` 文件中。

#### **The entry point

`` **By default the entry point is `./src/index.js` This simple example uses the `./index.js`file as a starting point:** ``

```
module.exports = {
  /.../
  entry: './index.js'
  /.../
}
```

#### 输出

输出默认生成在 `./dist/main.js`。以下例子将输出改为 `app.js`：

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

#### Loaders

使用 webpack 不仅可以在 JavaScript 代码中通过 `import` 或 `require` 引入 JavaScript，还有其他文件，如 CSS。

Webpack 旨在处理所有的依赖，而不仅是 JavaScript，loader 就是用来实现这一功能的。

例如，你可以在代码中使用：

```
import 'style.css'
```

通过使用如下 load 配置：

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

以上正则表达式表示任意 CSS 文件。

load 配置可以添加 options：

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

你可以针对每条规则添加多个 loader：

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

在这个例子中， `css-loader` 解释了 `import 'style.css'` 指令。`style-loader` 接着通过 `<style>` 标签将 CSS 注入到 DOM 中。

顺序对结果有影响，并且是倒序的（靠后的规则先执行）。

有多少 loader 呢？许多！你可以在[列表][131]中查看。

最常用的 loader 就是 Babel，用来将现代 JavaScript 编译成 ES5 代码：

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

下面的例子预处理了所有 React/JSX 文件：

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

[查看 `babel-loader` 的 options 配置][132]。

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

`` The `HTMLWebpackPlugin` plugin has the job of automatically creating an HTML file, adding the output JS bundle path, so the JavaScript is ready to be served. ``

`There are [lots of plugins available][133].`

`` One useful plugin, `CleanWebpackPlugin`, can be used to clear the `dist/` folder before creating any output, so you don't leave files around when you change the name of the output file: ``

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

`` This mode (introduced in webpack 4) sets the environment on which webpack works. It can be set to `development` or `production` (defaults to production, so you only set it when moving to development) ``

```plain
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

`I made a sample app that just prints a `console.log` statement.`

`Here’s the production bundle:`

`![](https://cdn-media-1.freecodecamp.org/images/kbXOiSFaO06VSDxcLC29Nh4a8ycSoaL9LDup)`

`Here’s the development bundle:`

`![](https://cdn-media-1.freecodecamp.org/images/W-1sAge4rvYL0aH00e7FuyJ5NLv7PJYpves0)`

#### `Running webpack`

`Webpack can be run from the command line manually if installed globally, but generally you write a script inside the `package.json` file, which is then run using `npm` or `yarn`.`

`` For example this `package.json` scripts definition we used before: ``

```
"scripts": {
  "build": "webpack"
}
```

`allows us to run `webpack`by running`

```plain
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

`One nice feature of the watch mode is that the bundle is only changed if the build has no errors. If there are errors, `watch`will keep listening for changes, and try to rebuild the bundle, but the current, working bundle is not affected by those problematic builds.`

#### `Handling images`

`` Webpack allows us to use images in a very convenient way, using the `[file-loader][134]`loader. ``

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

`(`img` is an HTMLImageElement. Check the [Image docs][135])`

`file-loader` can handle other asset types as well, like fonts, CSV files, xml, and more.`

`` Another nice tool to work with images is the `url-loader` loader. ``

`This example loads any PNG file smaller than 8KB as a [data URL][136].`

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

`Using`sass-loader`, `css-loader` and `style-loader`:`

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

`` You tell webpack to generate source maps using the `devtool` property of the configuration: ``

```plain
module.exports = {
  /.../
  devtool: 'inline-source-map',
  /.../
}
```

`` `devtool` has [many possible values][137], the most used probably are:``

-   `` `none`: adds no source maps``
-   `` `source-map`: ideal for production, provides a separate source map that can be minimized, and adds a reference into the bundle, so development tools know that the source map is available. Of course you should configure the server to avoid shipping this, and just use it for debugging purposes``
-   `` `inline-source-map`: ideal for development, inlines the source map as a Data URL``

### `SECTION 7: TESTING`

### `Jest`

`Jest is a library for testing JavaScript code.`

`It’s an open source project maintained by Facebook, and it’s especially well suited for React code testing, although not limited to that: it can test any JavaScript code. Its strengths are:`

-   `it’s fast`
-   `it can perform **snapshot testing**`
-   `it’s opinionated, and provides everything out of the box without requiring you to make choices`

`Jest is a tool very similar to Mocha, although they have differences:`

-   `Mocha is less opinionated, while Jest has a certain set of conventions`
-   `Mocha requires more configuration, while Jest works usually out of the box, thanks to being opinionated`
-   `Mocha is older and more established, with more tooling integrations`

`In my opinion the biggest feature of Jest is it’s an out of the box solution that works without having to interact with other testing libraries to perform its job.`

#### `Installation`

`` Jest is automatically installed in `create-react-app`, so if you use that, you don’t need to install Jest. ``

`Jest can be installed in any other project using [Yarn][138]:`

```
yarn add --dev jest
```

`or [npm][139]:`

```
npm install --save-dev jest
```

`notice how we instruct both to put Jest in the `devDependencies` part of the `package.json` file, so that it will only be installed in the development environment and not in production.`

`` Add this line to the scripts part of your `package.json` file: ``

```
{
  "scripts": {
    "test": "jest"
  }
}
```

`so that tests can be run using`yarn test` or `npm run test`.`

`Alternatively, you can install Jest globally:`

```
yarn global add jest
```

`` and run all your tests using the `jest` command line tool. ``

#### `Create the first Jest test`

`` Projects created with `create-react-app` have Jest installed and preconfigured out of the box, but adding Jest to any project is as easy as typing ``

```
yarn add --dev jest
```

`Add to your `package.json` this line:`

```
{
  "scripts": {
    "test": "jest"
  }
}
```

`` and run your tests by executing `yarn test` in your shell. ``

`Now, you don’t have any tests here, so nothing is going to be executed:`

`![](https://cdn-media-1.freecodecamp.org/images/QJ4lMCN6PhDyBBZ8mPyLmLciew9p9cUE9ug0)`

`` Let’s create the first test. Open a `math.js` file and type a couple functions that we’ll later test: ``

```plain
const sum = (a, b) => a + b
const mul = (a, b) => a * b
const sub = (a, b) => a - b
const div = (a, b) => a / b
export default { sum, mul, sub, div }
```

`Now create a `math.test.js` file, in the same folder, and there we’ll use Jest to test the functions defined in `math.js`:`

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

`Running `yarn test` results in Jest being run on all the test files it finds, and returning us the end result:`

`![](https://cdn-media-1.freecodecamp.org/images/vGSvRogM-QF8N3EP5j9vUYYrkWvRc89OhE98)`

#### `Run Jest with VS Code`

`Visual Studio Code is a great editor for JavaScript development. The [Jest extension][140]offers a top notch integration for our tests.`

`Once you install it, it will automatically detect if you have installed Jest in your devDependencies and run the tests. You can also invoke the tests manually by selecting the **Jest: Start Runner** command. It will run the tests and stay in watch mode to re-run them whenever you change one of the files that have a test (or a test file):`

`![](https://cdn-media-1.freecodecamp.org/images/WYyCsxacP34Fss8u9jT5lT0u3O--1Uwz9cKW)`

#### `Matchers`

`` In the previous article I used `toBe()` as the only **matcher**: ``

```
test('Adding 1 + 1 equals 2', () => {
  expect(sum(1, 1)).toBe(2)
})
```

`A matcher is a method that lets you test values.`

`` Most commonly used matchers, comparing the value of the result of `expect()` with the value passed in as argument, are: ``

-   `` `toBe` compares strict equality, using `===` ``
-   `` `toEqual` compares the values of two variables. If it’s an object or array, it checks the equality of all the properties or elements``
-   `` `toBeNull` is true when passing a null value``
-   `` `toBeDefined` is true when passing a defined value (opposite to the above)``
-   `` `toBeUndefined` is true when passing an undefined value``
-   `` `toBeCloseTo` is used to compare floating values, avoiding rounding errors``
-   `` `toBeTruthy` true if the value is considered true (like an `if` does)``
-   `toBeFalsy` true if the value is considered false (like an `if` does)`
-   `toBeGreaterThan` true if the result of expect() is higher than the argument`
-   `` `toBeGreaterThanOrEqual` true if the result of expect() is equal to the argument, or higher than the argument``
-   `` `toBeLessThan` true if the result of expect() is lower than the argument``
-   `toBeLessThanOrEqual` true if the result of expect() is equal to the argument, or lower than the argument`
-   `` `toMatch` is used to compare strings with [regular expression][141] pattern matching``
-   `` `toContain` is used in arrays, true if the expected array contains the argument in its elements set``
-   `` `toHaveLength(number)`: checks the length of an array``
-   `` `toHaveProperty(key, value)`: checks if an object has a property, and optionally checks its value``
-   `toThrow` checks if a function you pass throws an exception (in general) or a specific exception`
-   `toBeInstanceOf()`: checks if an object is an instance of a class`

`` All those matchers can be negated using `.not.` inside the statement, for example: ``

```
test('Adding 1 + 1 does not equal 3', () => {
  expect(sum(1, 1)).not.toBe(3)
})
```

`` For use with promises, you can use `.resolves` and `.rejects`: ``

```
expect(Promise.resolve('lemon')).resolves.toBe('lemon')
expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus')
```

#### `Setup`

`Before running your tests you will want to perform some initialization.`

`To do something once before all the tests run, use the `beforeAll()` function:`

```
beforeAll(() => {
  //do something
})
```

`` To perform something before each test runs, use `beforeEach()`: ``

```
beforeEach(() => {
  //do something
})
```

#### `Teardown`

`Just as you can do with setup, you can also perform something after each test runs:`

```plain
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

`You can’t have a test in a callback, because Jest won’t execute it — the execution of the test file ends before the callback is called. To fix this, pass a parameter to the test function, which you can conveniently call `done`. Jest will wait until you call `done()`before ending that test:`

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

`With functions that return promises, we simply **return a promise** from the test:`

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

`` Promises that are rejected can be tested using `.catch()`: ``

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

`In testing, **mocking** allows you to test functionality that depends on:`

-   `**Database**`
-   `**Network** requests`
-   `access to **Files**`
-   `any **External** system`

`so that:`

1.  `your tests run **faster**, giving a quick turnaround time during development`
2.  `your tests are **independent** of network conditions, or the state of the database`
3.  `your tests do not **pollute** any data storage because they do not touch the database`
4.  `any change done in a test does not change the state for subsequent tests, and re-running the test suite should start from a known and reproducible starting point`
5.  `you don’t have to worry about rate limiting on API calls and network requests`

`Mocking is useful when you want to avoid side effects (e.g. writing to a database) or you want to skip slow portions of code (like network access), and also avoids implications with running your tests multiple times (e.g. imagine a function that sends an email or calls a rate-limited API).`

`Even more important, if you are writing a **Unit Test**, you should test the functionality of a function in isolation, not with all its baggage of things it touches.`

`Using mocks, you can inspect if a module function has been called and which parameters were used, with:`

-   `expect().toHaveBeenCalled()`: check if a spied function has been called`
-   `` `expect().toHaveBeenCalledTimes()`: count how many times a spied function has been called``
-   `` `expect().toHaveBeenCalledWith()`: check if the function has been called with a specific set of parameters``
-   `expect().toHaveBeenLastCalledWith()`: check the parameters of the last time the function has been invoked`

#### `Spy packages without affecting the functions code`

`When you import a package, you can tell Jest to “spy” on the execution of a particular function, using `spyOn()`, without affecting how that method works.`

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

`` Jest provides a convenient way to mock an entire package. Create a `**mocks**`folder in the project root, and in this folder create one JavaScript file for each of your packages. ``

`` Say you import `mathjs`. Create a `**mocks**/mathjs.js` file in your project root, and add this content: ``

```plain
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

`More simply, you can mock a single function using `jest.fn()`:`

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

`You can also use `jest.fn().mockReturnValue('test')`to create a simple mock that does nothing except returning a value.`

#### `Pre-built mocks`

`` You can find pre-made mocks for popular libraries. For example this package [https://github.com/jefflau/jest-fetch-mock][142] allows you to mock `fetch()` calls, and provide sample return values without interacting with the actual server in your tests. ``

#### `Snapshot testing`

`Snapshot testing is a pretty cool feature offered by Jest. It can memorize how your UI components are rendered, and compare it to the current test, raising an error if there’s a mismatch.`

`` This is a simple test on the App component of a simple `create-react-app` application (make sure you install `react-test-renderer`): ``

```
import React from 'react'
import App from './App'
import renderer from 'react-test-renderer'
it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
```

`the first time you run this test, Jest saves the snapshot to the `**snapshots**`folder. Here’s what App.test.js.snap contains:`

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

`` The next time the test compares the output of `<App` /> to this. If App changes, you get an error: ``

`![](https://cdn-media-1.freecodecamp.org/images/imS-QSkC1rmVVRYLkLYSJrGk5b3DOjodEJkx)`

`When using`yarn test` in `create-react-app`you are in **watch mode**, and from there you can press`w`and show more options:`

```plain
Watch Usage
 › Press u to update failing snapshots.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

`` If your change is intended, pressing `u` will update the failing snapshots, and make the test pass. ``

`` You can also update the snapshot by running `jest -u` (or `jest --updateSnapshot`) outside of watch mode. ``

### `Testing React components`

`The easiest way to start with testing React components is doing snapshot testing, a testing technique that lets you test components in isolation.`

`If you are familiar with testing software, it’s just like unit testing you do for classes: you test each component functionality.`

`` I assume you created a React app with `create-react-app`, which already comes with **Jest** installed, the testing package we'll need. ``

`Let’s start with a simple test. CodeSandbox is a great environment to try this out. Start with a React sandbox, and create an `App.js`component in a`components` folder, and add an `App.test.js`file.`

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

`It’s just 2 components: App and Button. Create the `App.js`file:`

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

`and the `Button.js` file:`

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

`` We are going to use the `react-testing-library`, which is a great help as it allows us to inspect the output of every component and to apply events on them. You can read more about it on [https://github.com/kentcdodds/react-testing-library][144] or watch [this video][145]. ``

`Let’s test the Button component first.`

`` We start by importing `render` and `fireEvent` from `react-testing-library`, two helpers. The first lets us render JSX. The second lets us emit events on a component. ``

`Create a `Button.test.js`and put it in the same folder as`Button.js`.`

```plain
import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Button from './Button'
```

`` Buttons are used in the app to accept a click event and then they call a function passed to the `onClickFunction` prop. We add a `count` variable and we create a function that increments it: ``

```
let count
const incrementCount = increment => {
  count += increment
}
```

`Now off to the actual tests. We first initialize count to 0, and we render a `+1` `Button`component passing a`1`to`increment` and our `incrementCount` function to `onClickFunction`.`

`` Then we get the content of the first child of the component, and we check it outputs `+1`. ``

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

`Similarly we test a +100 button, this time checking the output is `+100` and the button click increments the count of 100.`

```plain
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

`Check the code working on this CodeSandbox: [https://codesandbox.io/s/pprl4y0wq][146]`

### `SECTION 8: THE REACT ECOSYSTEM`

`The ecosystem around React is huge. Here I introduce you to 4 of the most popular projects based upon React: React Router, Redux, Next.js, Gatsby.`

### `React Router`

`React Router is the de-facto React routing library, and it’s one of the most popular projects built on top of React.`

`React at its core is a very simple library, and it does not dictate anything about routing.`

`Routing in a Single Page Application is the way to introduce some features to navigating the app through links, which are **expected** in normal web applications:`

1.  `The browser should **change the URL** when you navigate to a different screen`
2.  `**Deep linking** should work: if you point the browser to a URL, the application should reconstruct the same view that was presented when the URL was generated.`
3.  `The **browser back (and forward) button** should work like expected.`

`**Routing links together your application navigation with the navigation features offered by the browser**: the **address bar** and the **navigation buttons**.`

`React Router offers a way to write your code so that **it will show certain components of your app only if the route matches what you define**.`

### `Installation`

`With [npm][147]:`

```
npm install react-router-dom
```

`With [Yarn][148]:`

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

`` Which one to use is mainly dictated by the browsers you need to support. `BrowserRouter` uses the [History API][151], which is relatively recent, and not supported in IE9 and below. If you don't have to worry about older browsers, it's the recommended choice. ``

### `Components`

`The 3 components you will interact the most when working with React Router are:`

-   `BrowserRouter`, usually aliased as `Router`
-   `` `Link` ``
-   `Route`

`BrowserRouter` wraps all your Route components.`

`` `Link` components are - as you can imagine - used to generate links to your routes``

`Route` components are responsible for showing - or hiding - the components they contain.`

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

`` A BrowserRouter component can only have one child element, so we wrap all we’re going to add in a `div` element. ``

### `Link`

`` The Link component is used to trigger new routes. You import it from `react-router-dom`, and you can add the Link components to point at different routes, with the `to`attribute: ``

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

`Check this example on Glitch: [https://flaviocopes-react-router-v4.glitch.me/][152]`

`When the route matches `/`, the application shows the **Dashboard** component.`

`When the route is changed by clicking the “About” link to `/about`, the Dashboard component is removed and the **About** component is inserted in the DOM.`

`Notice the `exact` attribute. Without this, `path="/"` would also match `/about`, since`/`is contained in the route.`

### `Match multiple paths`

`` You can have a route respond to multiple paths simply using a regex, because `path` can be a regular expressions string: ``

```
<Route path="/(about|who)/" component={Dashboard} />
```

### `Inline rendering`

`` Instead of specifying a `component` property on `Route`, you can set a `render` prop: ``

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

`In your Route component you can lookup the dynamic parameters in `match.params`.`

`` `match` is also available in inline rendered routes, and this is especially useful in this case, because we can use the `id` parameter to lookup the post data in our data source before rendering Post:``

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

`Redux is a way to manage an application state, and move it to an **external global store**.`

`There are a few concepts to grasp, but once you do, Redux is a very simple approach to the problem.`

`Redux is very popular with React applications, but it’s in no way unique to React: there are bindings for nearly any popular framework. That said, I’ll make some examples using React as it is its primary use case.`

#### `When should you use Redux?`

`Redux is ideal for medium to big apps, and you should only use it when you have trouble managing the state with the default state management of React, or the other library you use.`

`Simple apps should not need it at all (and there’s nothing wrong with simple apps).`

#### `Immutable State Tree`

`In Redux, the whole state of the application is represented by **one** [JavaScript][153] object, called **State** or **State Tree**.`

`We call it **Immutable State Tree** because it is read only: it can’t be changed directly.`

`It can only be changed by dispatching an **Action**.`

#### `Actions`

`An **Action** is **a JavaScript object that describes a change in a minimal way** (with just the information needed):`

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

`` The only requirement of an action object is having a `type` property, whose value is usually a string. ``

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

`**Actions Creators** are functions that create actions.`

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

`This is the job of **reducers**.`

`A **reducer** is a **pure function** that calculates the next State Tree based on the previous State Tree, and the action dispatched.`

```
;(currentState, action) => newState
```

`A pure function takes an input and returns an output without changing the input or anything else. Thus, a reducer returns a completely new state tree object that substitutes the previous one.`

#### `What a reducer should not do`

`A reducer should be a pure function, so it should:`

-   `never mutate its arguments`
-   `` never mutate the state, but instead create a new one with `Object.assign({}, ...)`  ``
-   `never generate side-effects (no API calls changing anything)`
-   `` never call non-pure functions, functions that change their output based on factors other than their input (e.g. `Date.now()` or `Math.random()`) ``

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

`The **Store** is an object that:`

-   `**holds the state** of the app`
-   `` **exposes the state** via `getState()`  ``
-   `` allows us to **update the state** via `dispatch()`  ``
-   `allows us to (un)register a **state change listener** using `subscribe()`

`A store is **unique** in the app.`

`Here is how a store for the listManager app is created:`

```
import { createStore } from 'redux'
import listManager from './reducers'
let store = createStore(listManager)
```

#### `Can I initialize the store with server-side data?`

`Sure, **just pass a starting state**:`

```plain
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

`Data flow in Redux is always **unidirectional**.`

`You call `dispatch()` on the Store, passing an Action.`

`The Store takes care of passing the Action to the Reducer, generating the next State.`

`The Store updates the State and alerts all the Listeners.`

### `Next.js`

`Working on a modern [JavaScript][154] application powered by [React][155] is awesome until you realize that there are a couple problems related to rendering all the content on the client-side.`

`First, the page takes longer to the become visible to the user, because before the content loads, all the JavaScript must load, and your application needs to run to determine what to show on the page.`

`Second, if you are building a publicly available website, you have a content SEO issue. Search engines are getting better at running and indexing JavaScript apps, but it’s much better if we can send them content instead of letting them figure it out.`

`The solution to both of those problems is **server rendering**, also called **static pre-rendering**.`

`Next.js is one React framework to do all of this in a very simple way, but it’s not limited to this. It’s advertised by its creators as a **zero-configuration, single-command toolchain for React apps**.`

`It provides a common structure that allows you to easily build a frontend React application, and transparently handle server-side rendering for you.`

`Here is a non-exhaustive list of the main Next.js features:`

-   `**Hot Code Reloading**: Next.js reloads the page when it detects any change saved to disk.`
-   `**Automatic Routing**: any URL is mapped to the filesystem, to files put in the `pages` folder, and you don’t need any configuration (you have customization options of course).`
-   `**Single File Components**: using [styled-jsx][156], completely integrated as built by the same team, it’s trivial to add styles scoped to the component.`
-   `**Server Rendering**: you can (optionally) render React components on the server side, before sending the HTML to the client.`
-   `**Ecosystem Compatibility**: Next.js plays well with the rest of the JavaScript, Node and React ecosystem.`
-   `**Automatic Code Splitting**: pages are rendered with just the libraries and JavaScript that they need, no more.`
-   `` **Prefetching**: the `Link` component, used to link together different pages, supports a `prefetch` prop which automatically prefetches page resources (including code missing due to code splitting) in the background. ``
-   `**Dynamic Components**: you can import JavaScript modules and React Components dynamically ([https://github.com/zeit/next.js#dynamic-import][157]).`
-   `**Static Exports**: using the `next export`command, Next.js allows you to export a fully static site from your app.`

#### `Installation`

`Next.js supports all the major platforms: Linux, macOS, Windows.`

`A Next.js project is started easily with npm:`

```
npm install next react react-dom
```

`or with [Yarn][158]:`

```
yarn add next react react-dom
```

#### `Getting started`

`` Create a `package.json` file with this content: ``

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

`` the script will raise an error complaining about not finding the `pages` folder. This is the only thing that Next.js requires to run. ``

`Create an empty`pages` folder, and run the command again, and Next.js will start up a server on `localhost:3000`.`

`If you go to that URL now, you’ll be greeted by a friendly 404 page, with a nice clean design.`

`![](https://cdn-media-1.freecodecamp.org/images/wBBqzsveZC9evvtqiPb6yrFav9V5UjExd0HE)`

`Next.js handles other error types as well, like 500 errors for example.`

#### `Create a page`

`` In the `pages` folder create an `index.js` file with a simple React functional component: ``

```
export default () => (
  <div>
    <p>Hello World!</p>
  </div>
)
```

`If you visit `localhost:3000`, this component will automatically be rendered.`

`Why is this so simple?`

`Next.js uses a declarative pages structure, which is based on the filesystem structure.`

`` Simply put, pages are inside a `pages` folder, and the page URL is determined by the page file name. The filesystem is the pages API. ``

#### `Server-side rendering`

`` Open the page source, `View -> Developer -> View` Source with Chrome. ``

`As you can see, the HTML generated by the component is sent directly in the page source. It’s not rendered client-side, but instead it’s rendered on the server.`

`The Next.js team wanted to create a developer experience for server rendered pages similar to the one you get when creating a basic PHP project, where you simply drop PHP files and you call them, and they show up as pages. Internally of course it’s all very different, but the apparent ease of use is clear.`

#### `Add a second page`

`` Let’s create another page, in `pages/contact.js`  ``

```
export default () => (
  <div>
    <p>
      <a href="mailto:my@email.com">Contact us!</a>
    </p>
  </div>
)
```

`` If you point your browser to `localhost:3000/contact` this page will be rendered. As you can see, also this page is server rendered. ``

#### `Hot reloading`

`Note how you did not have to restart the `npm` process to load the second page. Next.js does this for you under the hood.`

#### `Client rendering`

`Server rendering is very convenient in your first page load, for all the reasons we saw above, but when it comes to navigating inside the website, client-side rendering is key to speeding up the page load and improving the user experience.`

`Next.js provides a `Link` component you can use to build links. Try linking the two pages above.`

`Change `index.js`to this code:`

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

`This is client-side navigation working correctly, with complete support for the [**History API**][160], which means your users back button won’t break.`

`` If you now `cmd-click` the link, the same Contact page will open in a new tab, now server rendered. ``

#### `Dynamic pages`

`A good use case for Next.js is a blog, as it’s something that all developers know how it works, and it’s a good fit for a simple example of how to handle dynamic pages.`

`A dynamic page is a page that has no fixed content, but instead display some data based on some parameters.`

`` Change `index.js` to ``

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

`` Now create a `post.js` file in the `pages` folder, and add: ``

```
export default props => <h1>{props.url.query.title}</h1>
```

`` Now clicking a single post will render the post title in a `h1` tag: ``

`![](https://cdn-media-1.freecodecamp.org/images/urgIpOydqbjE4i9nyELblMonOjrK0Plrn3OJ)`

`You can use clean URLs without query parameters. The Next.js Link component helps us by accepting an `as` attribute, which you can use to pass a slug:`

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

`Next.js by default provides support for [styled-jsx][161], which is a CSS-in-JS solution provided by the same development team, but you can use whatever library you prefer, like Styled Components.`

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

`` Styles are scoped to the component, but you can also edit global styles adding `global` to the `style` element: ``

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

`A Next.js application can be easily exported as a static site, which can be deployed on one of the super fast static site hosts, like [Netlify][164] or [Firebase Hosting][165], without the need to set up a Node environment.`

`The process requires you to declare the URLs that compose the site, but it’s [a straightforward process][166].`

#### `Deploying`

`Creating a production-ready copy of the application, without source maps or other development tooling that aren’t needed in the final build, is easy.`

`` At the beginning of this tutorial you created a `package.json` file with this content: ``

```
{
  "scripts": {
    "dev": "next"
  }
}
```

`which was the way to start up a development server using `npm run dev`.`

`Now just add the following content to`package.json` instead:`

```
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

`` and prepare your app by running `npm run build` and `npm run start`. ``

#### `Now`

`The company behind Next.js provides an awesome hosting service for Node.js applications, called [**Now**][167].`

`Of course they integrate both their products so you can deploy Next.js apps seamlessly, [once you have Now installed][168], by running the `now` command in the application folder.`

`Behind the scenes Now sets up a server for you, and you don’t need to worry about anything, just wait for your application URL to be ready.`

#### `Zones`

`You can set up multiple Next.js instances to listen to different URLs, yet the application to an outside user will simply look like it’s being powered by a single server: [https://github.com/zeit/next.js/#multi-zones][169]`

#### `Plugins`

`Next.js has a list of plugins at [https://github.com/zeit/next-plugins][170]`

#### `Starter kit on Glitch`

`If you’re looking to experiment, I recommend Glitch. Check out my [Next.js Glitch Starter Kit][171].`

### `Gatsby`

`Gatsby is a platform for building apps and websites using React.`

`It is one of the tools that allow you to build on a set of technologies and practices collectively known as [JAMstack][172].`

`Gatsby is one of the cool kids in the Frontend Development space right now. Why? I think the reasons are:`

-   `the explosion of the JAMstack approach to building Web Apps and Web Sites`
-   `the rapid adoption of the [Progressive Web Apps][173] technology in the industry, which is one of the key features of Gatsby`
-   `it’s built in React and [GraphQL][174], which are two very popular and rising technologies`
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

`This installs the `gatsby` CLI utility.`

`(when a new version is out, update it by calling this command again)`

`You create a new “Hello World” site by running`

```
gatsby new mysite https://github.com/gatsbyjs/gatsby-starter-hello-world
```

`` This command creates a brand new Gatsby site in the `mysite` folder, using the _starter_available at [https://github.com/gatsbyjs/gatsby-starter-hello-world][176]. ``

`![](https://cdn-media-1.freecodecamp.org/images/rNWB5DuHCS526rLjNuhwMdYAErq4TTAJFqg5)`

`` A _starter_ is a sample site that you can build upon. Another common starter is `default`, available at [https://github.com/gatsbyjs/gatsby-starter-default][177]. ``

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

`If you open the site you created with your favorite code editor (I use [VS Code][179]), you’ll find there are 3 folders:`

-   `` `.cache`, a hidden folder that contains the Gatsby internals, nothing you should change right now``
-   `public`, which contains the resulting website once you build it`
-   `` `src` contains the React components, in this case just the `index` component``
-   `` `static` which will contain the static resources like CSS and images``

`![](https://cdn-media-1.freecodecamp.org/images/x5XH1s5uMEQdUfnZB6BM2-T9HXkDwv1xLhPd)`

`` Now, making a simple change to the default page is easy, just open `src/pages/index.js`and change “Hello world!” to something else, and save. The browser should instantly **hot reload** the component (which means the page does not actually refresh, but the content changes - a trick made possible by the underlying technology). ``

`` To add a second page, just create another .js file in this folder, with the same content of `index.js` (tweak the content) and save it. ``

`For example I created a `second.js` file with this content:`

```
import React from 'react'
export default () => <div>Second page!</div>
```

`and I opened the browser to [http://localhost:8000/second][180]:`

`![](https://cdn-media-1.freecodecamp.org/images/g4uWZNxitB4AAVbqOFmCKKPugS7yrxKYH-ld)`

#### `Linking pages`

`You can link those pages by importing a Gatsby-provided React component called`Link`:`

```
import { Link } from "gatsby"
```

`and using it in your component [JSX][181]:`

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

`Gatsby provides lots of things out of the box, but many other functionalities are provided by [plugins][182].`

`There are 3 kind of plugins:`

-   `**source plugins** fetch data from a source. Create nodes that can be then filtered by transformer plugins`
-   `**transformer plugins** transform the data provided by source plugins into something Gatsby can use`
-   `**functional plugins** implement some kind of functionality, like adding sitemap support or more`

`Some commonly used plugins are:`

-   `` [gatsby-plugin-react-helmet][183] which allows to edit the `head` tag content ``
-   `[gatsby-plugin-catch-links][184] which uses the [History API][185] to prevent the browser reloading the page when a link is clicked, loading the new content using AJAX instead`

`` A Gatsby plugin is installed in 2 steps. First you install it using `npm`, then you add it to the Gatsby configuration in `gatsby-config.js`. ``

`For example you can install the Catch Links plugin:`

```
npm install gatsby-plugin-catch-links
```

`` In `gatsby-config.js` (create it if you don’t have it, in the website root folder), add the plugin to the `plugins` exported array: ``

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

`Once you build the site using `gatsby build`, all you need to do is to deploy the result contained in the `public` folder.`

`Depending on the solution you choose, you’ll need different steps here, but generally you’ll push to a Git repository and let the Git post-commit hooks do the job of deploying. [Here are some great guides for some popular hosting platforms][186] where you can deploy Gatsby.`

### `Wrapping up`

`I hope this book has helped you get started with React, and maybe it gave you a head start in exploring some of the most advanced aspects of React programming. That’s my hope, at least.`

> `You can get this ebook in PDF, ePub and Mobi format at [reacthandbook.com][187]`

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
