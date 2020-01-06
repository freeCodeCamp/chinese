> * 原文地址：[The Vue Handbook: a thorough introduction to Vue.js](https://www.freecodecamp.org/news/the-vue-handbook-a-thorough-introduction-to-vue-js-1e86835d8446/)
> * 原文作者：[Flavio Copes](https://www.freecodecamp.org/news/author/flavio/)
> * 译者：blackcai
> * 校对者：

[The Vue Handbook: a thorough introduction to Vue.js](https://cdn-media-1.freecodecamp.org/images/1*Nzc4LiAlVXl8ic9T6v31zw.jpeg)

> Get this post in PDF/ePub/MOBI format at  [vuehandbook.com][1]

Vue is a very popular JavaScript front-end framework, one that’s experiencing a huge amount of growth.

Vue 是一款非常受欢迎的前端框架，它正在快速的成长。

It is simple, tiny (~24KB), and very performant. It feels different from all the other JavaScript front-end frameworks and view libraries. Let’s find out why.

它简单、小巧（~24kb）且有着很优秀的性能。它与其它的 JavaScript 前端框架和视图库有着不同的感觉。让我们来找出（它们）不同的原因吧。

This post is pretty big!  [Get it in PDF or ePub format here!][2]

这篇文章很长！[在这里以 PDF 或者 ePub 的格式获取它][2]

### First, what is a JavaScript front-end framework?

### 首先，什么是 JavaScript 前端框架？

If you’re unsure what a JavaScript framework is, Vue is the perfect first encounter with one.

如果你不确定什么是 JavaScript 框架，Vue 将是你最好的选择。

A JavaScript framework helps us to create modern applications. Modern JavaScript applications are mostly used on the Web, but also power a lot of Desktop and Mobile applications.

一个 JavaScript 框架可以帮助我们创建现代应用程序。现代 JavaScript 应用程序主要用在 Web 上，但是也为许多的桌面和移动应用程序提供支持。

Until the early 2000s, browsers didn’t have the capabilities they have now. They were a lot less powerful, and building complex applications inside them was not feasible performance-wise. The tooling was not even something that people thought about.

直到21世纪初，浏览器才具备现在的功能。它们的性能要弱得多，并且在里面构建复杂的应用程序是不可行的。这个工具甚至不是人们所想要的东西。

Everything changed when Google unveiled  [Google Maps][3]  and  [GMail][4], two applications that ran inside the browser.  [Ajax][5]  made asynchronous network requests possible. Over time, developers started building on top of the Web platform, while engineers worked on the platform itself — browsers, the Web standards, the browser APIs, and the JavaScript language.

当谷歌发布了 [Google Maps][3] 和 [GMail][4] 这两款运行在浏览器里面的应用之后，一切都变了。 [Ajax][5] 使异步网络请求成为可能。慢慢的，开发者们开始 =========

Libraries like  [jQuery][6]  and  [Mootools][7]  were the first big projects that built upon JavaScript and were hugely popular for a while. They basically provided a nicer API to interact with the browser and provided workarounds for bugs and inconsistencies among the various browsers.

像 [jQuery][6] 和 [Mootools][7] 这样的库是第一批基于 JavaScript 的大型项目，并且在一段时间内非常的受欢迎。它们基本上提供了更好的 API 来与浏览器交互，并为不同的浏览器之间的错误和不一致提供了解决方案。

Frameworks like  [Backbone][8],  [Ember][9],  [Knockout][10], and  [AngularJS][11]  were the first wave of modern JavaScript frameworks.

像 [Backbone][8]、[Ember][9]、[Knockout][10] 和 [AngularJS][11] 这样的框架是现代 JavaScript 框架的第一波浪潮。

The second wave, which is the current one, has  [React][12],  [Angular][13], and  [Vue][14]  as its main actors.

第二波浪潮则是目前的一波， 以 [React][12]、 [Angular][13]、和 [Vue][14] 作为主要的行动者。

Note that jQuery, Ember and the other projects I mentioned are still being heavily used, actively maintained, and millions of websites rely on them.

值得注意的是，Jquery、 Ember 和我提到的其它项目仍被大量使用、积极维护，数百万网站依赖他们。

That said, techniques and tools evolve, and as a JavaScript developer, you’re now likely to be required to know React, Angular or Vue rather than those older frameworks.

也就是说，技术和工具在不断发展，而作为 JavaScript 开发人员，你现在需要知道 React、Angular 或者Vue，而不是那些旧的框架。

Frameworks abstract the interaction with the browser and the DOM. Instead of manipulating elements by referencing them in the DOM, we  [declaratively][15]  define and interact with them, at a higher level.

框架抽象了与浏览器和 DOM 的交互。我们不是通过在 DOM 中引用元素来操作元素，而是在更高的层次 [声明性][15] 定义并与他们交互。

Using a framework is like using the  [C programming language][16]  instead of using the  [Assembly language][17]  to write system programs. It’s like using a computer to write a document instead of using a typewriter. It’s like having a self-driving car instead of driving the car yourself.

使用框架就像使用 [C 语言编程][16] 而不是 [汇编语言][17] 编写系统程序。这就像使用电脑写文档而不是打字机。这就像有一辆自动驾驶汽车而不是自己开车。

Well, not that far, but you get the idea. Instead of using low-level APIs offered by the browser to manipulate elements, and building hugely complex systems to write an application, you use tools built by very smart people that make our life easier.

好了，不说太远了，但是你知道。不要使用浏览器提供的低级 API 来操作元素，而是使用非常聪明的人构建的工具是我们的生活更轻松，这些工具可以构建非常复杂的系统。

### The popularity of Vue

### 受欢迎的 Vue

How popular is Vue.js?

Vue.js 有多受欢迎。

Vue had:

-   7,600 stars on GitHub in 2016
-   36,700 stars on GitHub in 2017

and it has more than 100,000+ stars on GitHub, as of June 2018.

Vue 有：

-   7,600 2016年在 GitHub 上的 stars 数
-   36,700 2017年在 GitHub 上的 stars 数
-   82,400 2018年在 GitHub 上的 stars 数
-   154,833 2019年在 GitHub 上的 stars 数

Its  [npm][18]  download count is growing every day, and now it’s at ~350,000 downloads per week.

它在 [npm][18] 的下载数量每天都在增长，现在它的下载量大约每周 790,000次

I would say Vue is very popular, given those numbers.

考虑到这些数据，我想说 Vue 很受欢迎。

In relative terms, it has approximately the same numbers of GitHub stars as React, which was born years before.

相对而言，它在 GitHub 上的 stars 数量与几年前诞生的 React 大致相同。

Numbers are not everything, of course. The impression I have of Vue is that developers  **love**  it.

当然，数字不是一切。我对 Vue 的印象是开发人员们**爱**它。

A key point in time of the rise of Vue has been the adoption in the Laravel ecosystem, a hugely popular PHP web application framework. But since then it has become widespread among many other development communities.

Vue 崛起的一个关键点就是 Laravel 生态系统的采用，这是一个非常流行的 PHPWeb 应用程序框架，但是从那以后，它在许多其他的开发社区中普遍存在。

#### Why developers love Vue

#### 为什么开发者们喜欢 Vue

First, Vue is called a progressive framework.
首先，Vue 被称为渐进式框架。

This means that it adapts to the needs of the developer. Other frameworks require a complete buy-in from a developer or team and often want you to rewrite an existing application because they require some specific set of conventions. Vue happily lands inside your app with a simple  `script`  tag to start with, and it can grow along with your needs, spreading from 3 lines to managing your entire view layer.

这意味着它可以适应开发人员的需要。其他框架需要开发人员或团队的全面支持，并且常常想要你重写现有的应用程序，因为他们有一些特别的约定。Vue 以一个简单的 `script` 标签开始愉快的进入你的应用程序，并且它可以随着你的需求而增长，从3行扩展到你的整个视图层。

You don’t need to know about  [webpack][19],  [Babel][20], npm or anything to get started with Vue. But when you’re ready, Vue makes it simple for you to rely on them.

你不需要知道 [webpack][19]、 [Babel][20]、 npm 或者任何与 Vue 有关的东西。但是当你准备好了，Vue会让你更容易的依赖它们。

This is one great selling point, especially in the current ecosystem of JavaScript front-end frameworks and libraries that tend to alienate newcomers and also experienced developers that feel lost in the ocean of possibilities and choices.

这是一个非常好的卖点，特别是在当前的 JavaScript 前端框架和库的生态系统中，它们往往会疏远新人，并且让有经验的开发者在各种可能性和选择的海洋中感到迷茫。

Vue.js is probably the most approachable front-end framework around. Some people call Vue the  **new jQuery**, because it easily gets in the application via a script tag, and gradually gains space from there. Think of it as a compliment, since jQuery dominated the Web in the past few years, and it still does its job on a huge number of sites.

Vue.js 可能是最容易理解的前端框架。有些人将 Vue 称为 **new Jquery（新一代的 Jquery）**，因为它可以通过应用程序中的一个 script 标记而引用，并通过它逐渐地获得空间。可以把它看做一种恭维，因为 jQuery 在过去几年中主导了 Web，而且它仍然在大量的站点上发挥作用。

Vue was built by picking the best ideas of frameworks like Angular, React and Knockout, and by cherry-picking the best choices those frameworks made. And by excluding some less brilliant ones, it kind of started as a “best-of” set and grew from there.

Vue 借鉴了 Angular、React 和 Knockout 等框架的核心理念，并筛选出了最佳的选择构建而成的。并且通过排除一些不太出色的（选择），它开始成为一个“最好的”集合，并从那里开始发展。

#### Where does Vue.js position itself in the frameworks landscape?

#### Vue.js 在框架领域的定位是什么？

The two elephants in the room, when talking about web development, are React and Angular. How does Vue position itself relative to those two big and popular frameworks?

在讨论 web 开发时，房间里就像有两头名为 React 和 Angular 的大象。相遇与这两个大而流行的框架，Vue 是如何给自己定位的呢？

Vue was created by Evan You when he was working at Google on AngularJS (Angular 1.0) apps. It was born out of a need to create more performant applications. Vue picked some of the Angular templating syntax, but removed the opinionated, complex stack that Angular required, and made it very performant.

Vue 是尤雨溪在谷歌开发 AngularJS（Angular 1.0）应用时创建的。它是出于创建性能更高的应用程序的需要而诞生的。Vue 选择了 Angular 的一些模板语法，但去掉了 Angular 必要的固执的负责堆栈，使它变的非常高效。

The new Angular (Angular 2.0) also solved many of the AngularJS issues, but in very different ways. It also requires a buy-in to  [TypeScript][21]  which not all developers enjoy using (or want to learn).

新的 Angular(Angular 2.0) 也解决了很多 AngularJS 的问题，但是方式截然不同。它还需要一个对 [TypeScript][21] 的支持，不是所有的开发人员都喜欢使用（或者想要学习）。

What about React? Vue took many good ideas from React, most importantly the Virtual DOM. But Vue implements it with some sort of automatic dependency management. This tracks which components are affected by a change of the state so that only those components are re-rendered when that state property changes.

那么关于 React 呢？ Vue 从 React中获得了很多好理念，最重要的是 Virtual DOM（虚拟 DOM）。但是 Vue 通过某种自动的依赖关系来实现它。它跟踪哪些组件受到状态更改的影响，以便在状态属性更改的时候重新渲染那些组件。

In React, on the other hand, when a part of the state that affects a component changes, the component will be re-rendered. By default all its children will be re-rendered as well. To avoid this you need to use the  `shouldComponentUpdate`  method of each component and determine if that component should be re-rendered. This gives Vue a bit of an advantage in terms of ease of use, and out of the box performance gains.

另一方面，在 React 中，当影响组件的一部分状态发生变化的时候，它将被重新渲染。默认情况下，它的所有子元素都将被重新渲染。为了避免这种情况，你需要使用每个组件的 `shouleComponentUpdate` 方法，并确定是否应该重新渲染该组件。这使 Vue 在易用性和开箱即用的性能方面具有一定的优势。

One big difference with React is  [JSX][22]. While you can technically use JSX in Vue, it’s not a popular approach and instead the  [templating system][23]  is used. Any HTML file is a valid Vue template. JSX is very different than HTML, and has a learning curve for people on the team that might only need to work with the HTML part of the app, like designers.

与 React 最大的区别是 [JSX][22]。尽管在技术上你可以在 Vue 中使用 JSX，但它不是一种流行的写法，而是使用 [templating system][23]（[模板系统][23]）。任何 HTML 文件都是有效的 Vue 模板。JSX 与 HTML 非常的不同，对于团队中可能只需要使用应用程序的 HTML 部分的人员（比如设计人员）来说，它有一个学习曲线。

Vue templates are very similar to  [Mustache][24]  and  [Handlebars][25]  (although they differ in terms of flexibility). As such, they are more familiar to developers that already used frameworks like Angular and Ember.

Vue 模板与 [Mustache][24] 和 [Handlebars][25] 非常的类似（尽管他们在灵活性方便有所不同）。因此，对于已经使用过 Angular 或者 Ember 等框架的开发人员来说更加亲近友好。

The official state management library,  [Vuex][26], follows the Flux architecture and is somewhat similar to  [Redux][27]  in its concepts. Again, this is part of the positive things about Vue, which saw this good pattern in React and borrowed it for its ecosystem. And while you can use Redux with Vue, Vuex is specifically tailored for Vue and its inner workings.

官方的状态管理库，[Vuex][26]，遵循 Fulx 价格，在概念上有点类似 [Redux][27]。同样，这也是 Vue 中值得肯定的一面，它在 React 中看到了这种优良的模式，并借鉴了它的生态系统，虽然你可以在 Vue 中使用 Redux，但是 Vuex 是专门为 Vue 及其内部工作而特别定制的。

Vue is flexible, but the fact that the core team maintains two packages that are very important for any web app (like routing and state management) makes it a lot less fragmented than React. For example:  `vue-router`  and  `vuex`  are key to the success of Vue.

Vue 是灵活的，但是实际上核心团队维护两个队任何 web 应用程序（如路由和状态管理）都非常重要的包，这使得它比 React 更加分散。例如：`Vue-router` 和 `vuex` 是 Vue 成功的关键。

You don't need to choose or worry if that library you chose is going to be maintained in the future and will keep up with framework updates. Since they are official, they are the canonical go-to libraries for their niche (but you can choose to use what you like, of course).

你不需要选择或者担心你选择的库将来是否会被维护并且和官方保持同步更新。因为他们是官方的，它们是各自的领域内的标准的首选库（当然，你也可以选择自己喜欢的库）。

One thing that puts Vue in a different bucket compared to React and Angular is that Vue is an  **indie**  project: it’s not backed by a huge corporation like Facebook or Google.

Vue 与 React 和 Angular 相比有一点与众不同，那就是 Vue 是一个 `独立` 的项目：它没有像 Facebook 或者 Google 这样的大公司支持。

Instead, it’s completely backed by the community, which fosters development through donations and sponsors. This makes sure the roadmap of Vue is not driven by a single company’s agenda.

相反，它完全通过社区的支持，社区通过捐款和赞助来促进发展。这确保了 Vue 的技术路线不是由单个公司的议程驱动的。

### Your first Vue App

### 你的第一个 Vue 应用程序

If you’ve never created a Vue.js application, I am going to guide you through the task of creating one so that you understand how it works.

如果你从来没有创建过一个 Vue.js 应用程序。我将指引你完成创建一个应用程序的任务，以便你了解它是如何工作的。

#### First example

#### 第一个示例

First I’ll go through the most basic example of using Vue.

首先，我将介绍 Vue 最基本的使用示例。

You create an HTML file which contains:

你创建一个 HTML 文件，其中包含：

```
<html>  <body>    <div id="example">      <p>{{ hello }}</p>    </div>    <script src="https://unpkg.com/vue"></script>    <script>        new Vue({            el: '#example',            data: { hello: 'Hello World!' }        })    </script>  </body></html>
```

and you open it in the browser. That’s your first Vue app! The page should show a “Hello World!” message.

并且在浏览器中打开它。这就是你的第一个 Vue 应用！页面应该显示一个 “Hello World!” 的消息。

I put the script tags at the end of the body so that they are executed in order after the DOM is loaded.

我将脚本标记放在 body 的末尾，以便在DOM 加载完成之后按顺序执行它们。

What this code does is instantiate a new Vue app, linked to the  `#example`  element as its template. It's defined using a CSS selector usually, but you can also pass in an  `HTMLElement`.

这段代码所做的是实例化一个新的 Vue 应用程序，链接 “#example” 元素作为它的模板。它通常使用 CSS 选择器定义，但你也可以传入一个 `HTMLElement`。

Then, it associates that template to the  `data`  object. That is a special object that hosts the data we want Vue to render.

然后，它将该模板与 `data` 对象关联起来。这是一个特殊的对象，它承载我们希望 Vue 渲染的数据。

In the template, the special  `{{ }}`  tag indicates that this is some part of the template that's dynamic, and its content should be looked up in the Vue app data.

在模板当中，特殊的 `{{}}` 标记表明这是模板的某个动态部分，其内容应该在 Vue 应用程序的数据中查找。

You can see this example on  [CodePen][28].

你可以在 [CodePen][28] 查看这个案例。

CodePen is a little different from using a plain HTML file, and you need to configure it to point to the Vue library location in the Pen settings:

CodePen 有点不同于使用普通的 HTML 文件，并且你需要配置它指向 Pen 设置中的 Vue 库的位置：

[](https://cdn-media-1.freecodecamp.org/images/Qa8s2ayB3DhhE3dRKv4SFowGd8xHDvEeSlL4)

#### Second example: the Vue CLI default app

#### 第二个示例：Vue Cli 的默认应用程序

Let’s level up the game a little bit. The next app we’re going to build is already done, and it’s the Vue CLI default application.

让我们把游戏升级升级一点。我们要构建的下一个应用程序已经完成了，它是 Vue CLI 默认应用程序。

What is the Vue CLI? It’s a command line utility that helps to speed up development by scaffolding an application skeleton for you, with a sample app in place.

什么是 Vue Cli？他是一个命令行实用程序，通过为你搭建一个应用程序框架，并在适当的地方提供一个示例应用程序，帮助你加速开发。

There are two ways you can get this application:

那里有两种方法可以得到这个应用程序：

**Use the Vue CLI locally**

**在本地是用 Vue CLI **

The first is to install the Vue CLI on your computer and run the command:

首先要在你的电脑上安装 Vue CLI 并运行以下命令：

```
vue create <enter the app name>
```

在一般情况下，你只需要按照提示按回车即可完成安装。

**Use CodeSandbox**

**使用 CodeSandbox**

A simpler way, without having to install anything, is to go to  [CodeSandbox][29]. The link opens the Vue CLI default application.

一个更简单的方法，不需要安装任何东西，就是去 [CodeSandbox][29]。该链接打开 Vue CLI 默认应用程序。

CodeSandbox is a cool code editor that allows you build apps in the cloud. You can use any npm package, and can easily integrate with  [Zeit Now][30]  for an easy deployment and with  [GitHub][31]  to manage versioning.

CodeSandbox 是一个很酷的代码编辑器，它允许你在云服务中构建应用程序。你可以使用任何的 npm 包，并且可以轻松的与 [Zeit Now][30]集成，以便轻松的部署，也可以和 [GitHub][31] 集成来管理版本。

Whether you chose to use the Vue CLI locally, or go through CodeSandbox, let’s inspect that Vue app in detail.

无论你是选择在本地使用 Vue CLI，还是通过 CodeSandbox，让我们详细的检查一下这个 Vue 应用程序。

### The files structure

### 文件结构

Beside  `package.json`, which contains the configuration, these are the files contained in the initial project structure:

除了 `package.json` 这个包含配置的文件以外，这些文件是包含在出事项目中的文件。

-   `public/index.html`
-   `src/App.vue`
-   `src/main.js`
-   `src/assets/logo.png`
-   `src/components/HelloWorld.vue`

#### `index.html`

The  `public/index.html`  file is the main app file.

`public/index.html` 文件是主要的应用文件。

In the body it includes just one simple element:  `<div id="app">`</div>. This is the element the Vue application we’ll use to attach to the DOM.

在 body 中，它只包含一个简单的元素：'<div id="app"></div>'。这是我们将用于附加到 DOM 的 Vue 应用程序的元素。

```
<!DOCTYPE html><html>
```

```
<head>  <meta charset="utf-8">  <meta name="viewport" content="width=device-width,initial-scale=1.0">  <title>CodeSandbox Vue</title></head>
```

```
<body>  <div id="app"></div>  <!-- built files will be auto injected --></body>
```

```
</html>
```

#### `src/main.js`

This is the main JavaScript file that drives our app.

这是驱动应用程序的主要 JavaScript 文件。

We first import the Vue library and the App component from  `App.vue`.

我们首先要从 `App.vue` 引入 Vue 库和 App 组件。

We set  `productionTip`  to  `false`, to avoid Vue outputting a “you’re in development mode” tip in the console.

我们将 `productionTip` 设置为 `false`，以避免 Vue 在控制台中输出 “you’re in development mode” 的提示。

Next, we create the Vue instance, by assigning it to the DOM element identified by  `#app`, which we defined in  `index.html`, and we tell it to use the App component.

接下来，我们通过将 Vue 实例分配给在 `index.html` 中定义的 `#app` 标识的 DOM 元素来创建 Vue 实例，并告诉它使用 App 组件。

```
// The Vue build version to load with the `import` command// (runtime-only or standalone) has been set in webpack.base.conf with an alias.import Vue from 'vue'import App from './App'
```

```
// 使用 `import` 命令加载 Vue 构建版本
// 别名设置在 vue.config.js 中，具体参数请[参考][https://github.com/neutrinojs/webpack-chain#config-resolve-alias]
// import Vue from 'vue'
// import App from './App'
```

```
Vue.config.productionTip = false
```

```
/* eslint-disable no-new */new Vue({  el: '#app',  components: { App },  template: '<App/>'})
```

译者著：请注意区分 别名设置是在根目录下的 [vue.config.js][64] 中，这个文件默认应用程序并没有建立文件，需要自行新建。而 [Vue.config.productionTip][65] 则是写在 src/main.js 中的内容。

#### `src/App.vue`

`App.vue`  is a Single File Component. It contains three chunks of code: HTML, CSS, and JavaScript.

`App.vue` 是一个单独的文件组件。它包含三个代码模块： HTML、 CSS、 JavaScript。

This might seem weird at first, but Single File Components are a great way to create self-contained components that have all they need in a single file.

这第一眼看起来可能很奇怪，但是单个文件组件是创建自包含组件的好方法，这些组件的单个文件包含了它们所需要的所有内容。

We have the markup, the JavaScript that is going to interact with it, and style that’s applied to it, which can be scoped or not. In this case, it’s not scoped, and it’s just outputting that CSS which is applied like regular CSS to the page.

我们有标记，和它进行交互的 JavaScript，以及应用于它的样式，这些可以限定做用户，也可以不限定做用户。在这种情况下，它没有作用域，它只是像常规的 CSS 一样输出并应用到页面上。

The interesting part lies in the  `script`  tag.

有趣的部分在 `script` 标签上面。

We import a component from the  `components/HelloWorld.vue`  file, which we'll describe later.

我们从 `components/HelloWorld.vue` 文件 引入一个组件，稍后我们会介绍。

This component is going to be referenced in our component. It’s a dependency. We are going to output this code

这个组件将在我们的组件中被引用。这是一个依赖项。我们将从这个组件输出以下代码

```
<div id="app">  <img width="25%" src="./assets/logo.png">  <HelloWorld/></div>
```

from this component, which you see references the  `HelloWorld`  component. Vue will automatically insert that component inside this placeholder.
你可以看到它引用了 `Helloworld` 组件。Vue 将自动将该组件插入这个占位符中。


```
<template>  <div id="app">    <img width="25%" src="./assets/logo.png">    <HelloWorld/>  </div></template>
```

```
<script>import HelloWorld from './components/HelloWorld'
```

```
export default {  name: 'App',  components: {    HelloWorld  }}</script>
```

```
<style>#app {  font-family: 'Avenir', Helvetica, Arial, sans-serif;  -webkit-font-smoothing: antialiased;  -moz-osx-font-smoothing: grayscale;  text-align: center;  color: #2c3e50;  margin-top: 60px;}</style>
```

#### `src/components/HelloWorld.vue`

Here’s the  `HelloWorld`  component, which is included by the App component.

这是 `HelloWorld` 组件，它包含在 App 组件中。

This component outputs a set of links, along with a message.

该组件输出一组链接以及一条信息。

Remember above we talked about CSS in App.vue, which was not scoped? The  `HelloWorld`  component has scoped CSS.

还记得上面我们在 App.vue 中讨论的 CSS 吗？ `HelloWorld` 组件已经限定了 CSS 的作用域。

You can easily determine it by looking at the  `style`  tag. If it has the  `scoped`  attribute, then it's scoped:  `<style scoped>`

你可以通过查看 `style` 标签轻松的确定它。如果它有 `scoped` 属性，那么它的作用域是：`<style scoped>`

This means that the generated CSS will be targeting the component uniquely, via a class that’s applied by Vue transparently. You don’t need to worry about this, and you know the CSS won’t  **leak**  to other parts of the page.

这意味着生成的 CSS 将把这个组件作为唯一的目标，凭借一个 class 透过 Vue 应用（到组件上）。

The message the component outputs is stored in the  `data`  property of the Vue instance, and outputted in the template as  `{{ msg }}`.

组件输出的消息存储在 Vue 实例的 `data` 属性中，并在模板中作为 `{{ msg }}`输出

Anything that’s stored in  `data`  is reachable directly in the template via its own name. We didn't need to say  `data.msg`, just  `msg`.

任何存储在 `data` 中的内容都可以在模板中通过名称直接访问。我们不需要说 `data.msg`，而仅仅是 `msg`。

```
<template>  <div class="hello">    <h1>{{ msg }}</h1>    <h2>Essential Links</h2>    <ul>      <li>        <a          href="https://vuejs.org"          target="_blank"        >          Core Docs        </a>      </li>      <li>        <a          href="https://forum.vuejs.org"          target="_blank"        >          Forum        </a>      </li>      <li>        <a          href="https://chat.vuejs.org"          target="_blank"        >          Community Chat        </a>      </li>      <li>        <a          href="https://twitter.com/vuejs"          target="_blank"        >          Twitter        </a>      </li>      <br>      <li>        <a          href="http://vuejs-templates.github.io/webpack/"          target="_blank"        >          Docs for This Template        </a>      </li>    </ul>    <h2>Ecosystem</h2>    <ul>      <li>        <a          href="http://router.vuejs.org/"          target="_blank"        >          vue-router        </a>      </li>      <li>        <a          href="http://vuex.vuejs.org/"          target="_blank"        >          vuex        </a>      </li>      <li>        <a          href="http://vue-loader.vuejs.org/"          target="_blank"        >          vue-loader        </a>      </li>      <li>        <a          href="https://github.com/vuejs/awesome-vue"          target="_blank"        >          awesome-vue        </a>      </li>    </ul>  </div></template>
```

```
<script>export default {  name: 'HelloWorld',  data() {    return {      msg: 'Welcome to Your Vue.js App'    }  }}</script>
```

```
<!-- Add "scoped" attribute to limit CSS to this component only --><style scoped>h1,h2 {  font-weight: normal;}ul {  list-style-type: none;  padding: 0;}li {  display: inline-block;  margin: 0 10px;}a {  color: #42b983;}</style>
```

```
<!-- 添加 "scoped" 属性使 CSS 仅在组件内生效 --><style scoped>h1,h2 {  font-weight: normal;}ul {  list-style-type: none;  padding: 0;}li {  display: inline-block;  margin: 0 10px;}a {  color: #42b983;}</style>
```

#### Run the app

#### 运行应用程序

CodeSandbox has a cool preview functionality. You can run the app and edit anything in the source to have it immediately reflected in the preview.

CodeSandbox 有一个非常酷的预览功能。你可以运行应用程序，编辑源代码中的任何内容，让它立刻显示在预览中。

![](https://cdn-media-1.freecodecamp.org/images/ZWfaVoQWEm4HzD0RNcS2osp8NpIPz-G5Vq5P)

### The Vue CLI

### The Vue CLI

CodeSandbox is very cool for online coding and working without having to setup Vue locally. A great way to work locally is by setting up the Vue CLI (command line interface). Let’s find out more about it.

CodeSandbox 是一个非常酷的在线编码和工作（的网站），而不必在本地安装 Vue。本地工作的一个好方法是设置 Vue CLI （命令行接口）。让我们了解更多关于它（的信息）。

In the previous example, I introduced an example project based on the Vue CLI. What’s the Vue CLI exactly, and how does it fit in the Vue ecosystem? Also, how do we setup a Vue CLI-based project locally? Let’s find out!

在前一个案例中，我介绍了一个基于 Vue CLI 的示例项目，Vue Cli 到底是什么，他如何适应 Vue 生态系统？另外，我们如何在本地安装一个基于 Vue CLI 的项目？让我们来揭开它吧。

**Note:**  There is a huge rework of the CLI going on right now, going from version 2 to 3. While not yet stable, I will describe version 3, because it’s a huge improvement over version 2, and quite different.

**注：** CLI 现在在进行庞大的重构，从版本 2 到 3。虽然还不稳定，但我将描述版本 3，因为它相比版本 2 有很大的改进，而且非常的不同。

#### Installation

#### 安装

The Vue CLI is a command line utility, and you install it globally using npm:

Vue CLI 是一个命令行实用工具，你可以使用 npm 全局安装它：

```
npm install -g @vue/cli
```

or using Yarn:

或者使用 Yarn：

```
yarn global add @vue/cli
```

Once you do so, you can invoke the  `vue`  command.

你运行一次之后，就可以调用 `vue` 命令。

![](https://cdn-media-1.freecodecamp.org/images/F1uuQW81iw1WZNOiUn0xnLOagFi637vPDUfd)

#### What does the Vue CLI provide?

#### Vue CLI 提供了什么？

The CLI is essential for rapid Vue.js development.

CLI 对于 Vue.js 的快速开发是必不可少的。

Its main goal is to make sure all the tools you need are working along, to perform what you need, and abstracts away all the nitty-gritty configuration details that using each tool in isolation would require.

它的主要目标是确保你需要的所有工具都正常的工作，执行你需要的操作，并抽象出每个工具单独使用所需的所有具体配置细节。

It can perform an initial project setup and scaffolding.

它可以执行初始的项目设置和搭建。

It’s a flexible tool. Once you create a project with the CLI, you can go and tweak the configuration, without having to  **eject** your application (like you’d do with  `create-react-app`).

这是一个灵活的工具。一旦你使用 CLI 创建了项目，你就可以去调整配置，而不需要 **退出** 你的应用程序（就像你用 `create-react-app`所做的那样）。

When you eject from  `create-react-app`  you can update and tweak what you want, but you can’t rely on the cool features that  `create-react-app`  provides.

当你从 `create-react-app` 退出时，你可以更新并调整你想要的（配置），但是你不能依赖 `create-react-app` 提供的酷的功能。

You can configure anything and still be able to upgrade with ease.

你可以配置任何东西并且仍然能够轻松的升级。

After you create and configure the app, it acts as a runtime dependency tool, built on top of Webpack.

当你创建和配置完应用程序之后，它作为一个运行时依赖的工具，构建在了Webpack之上。

The first encounter with the CLI is when creating a new Vue project.

与 CLI 的第一次接触是在创建一个 Vue 项目的时候。

#### How to use the CLI to create a new Vue project

The first thing you’re going to do with the CLI is to create a Vue app:

你要做的第一件事是用 CLI 创建一个 Vue 应用程序。

```
vue create example
```

The cool thing is that it’s an interactive process. You need to pick a preset. By default, there is one preset that provides Babel and  [ESLint][32]  integration:

很酷的是，这是一个互动的过程。你需要选择预设配置。默认情况下，这里有一个预设提供 Babel 和 [ESLint][32] 的集成：

![](https://cdn-media-1.freecodecamp.org/images/FL4mTLZqzhKkAYL2FB507Tx1Hkdtnl0y5cgu)

I’m going to press the down arrow ⬇️ and manually choose the features I want:

我要按向下箭头 ⬇️ 和手动选择我想要的功能：

![](https://cdn-media-1.freecodecamp.org/images/mkF3jMMCGluqmQ3hX3bGbCxhfXcwvWVNjWLi)

Press  `space`  to enable one of the things you need, and then press  `enter`  to go on. Since I chose  `Linter / Formatter`, Vue CLI prompts me for the configuration. I chose  `ESLint + Prettier`  since that's my favorite setup:

按 `空格` 键可以打开你需要的东西，然后按 `enter` 键继续。因为我选择了 `Linter / Formatter`，所以 Vue CLI 提示我进行配置。我选择了 `ESLint + Prettier`，因为这是我最喜欢的设置：

![](https://cdn-media-1.freecodecamp.org/images/bYwN2mfgTuJNxiiHBSNjnJQADZQvFR0TErhK)

Next thing is choosing how to apply linting. I choose  `Lint on save`.

下一件事就是选择怎样应用 linting。我选择了 `Lint on save`

![](https://cdn-media-1.freecodecamp.org/images/dcQmjoykCaJG7pevG5Yc-6A43eVYUkCbTxn7)

Next up: testing. Vue CLI lets me choose between the two most popular unit testing solutions:  [Mocha + Chai][33]  and  [Jest][34].

接下来：testing。Vue CLI 让我在两个最流行的单元测试解决方案之间进行选择：[Mocha + Chai][33] 和 [Jest][34]。

![](https://cdn-media-1.freecodecamp.org/images/lIdwYkOgcllnAJRVZOoKIxZ49ikNFoQjYtSV)

Vue CLI asks me where to put all the configuration: in the  `package.json`  file, or in dedicated configuration files, one for each tool. I chose the latter.

Vue ClI 询问我把所有的配置放在哪里：放在 `package.json` 文件中，或专用的配置文件，每个工具一个。我选择了后者。

![](https://cdn-media-1.freecodecamp.org/images/dN4W4ZALKh7Xz1D8ac7ebXpGdTPVGpzdujcc)

Next, Vue CLI asks me if I want to save these presets, and allows me to pick them as a choice the next time I use Vue CLI to create a new app. It’s a very convenient feature, as having a quick setup with all my preferences is a complexity reliever:

接下来，Vue CLI 问我如果我想保存这些预设，并允许我在下次使用 Vue CLI 创建一个新的应用程序的选择它们。

![](https://cdn-media-1.freecodecamp.org/images/X6rbmBloyRnQbdwrFQwtYeChdqxzQRpOJYfl)

Vue CLI then asks me if I prefer using  [Yarn][35]  or NPM:

Vue CLI 接下来会问我是否更喜欢用 [Yarn][35] 还是 NPM：

![](https://cdn-media-1.freecodecamp.org/images/vbEmq0oYaGFjDtjL9D2QaUZ6t5omf0fjZTJM)

This is the last thing it asks me, and then it goes on to download the dependencies and create the Vue app:

这是它问我的最后一件事，然后它继续下载依赖并创建 Vue 应用程序：

![](https://cdn-media-1.freecodecamp.org/images/Q52LD-RGQm9dHXMyWikiI5fMyESB7vRJqe1h)

#### How to start the newly created Vue CLI application

#### 如何启动新创建的 Vue CLI 应用程序

Vue CLI has created the app for us, and we can go in the  `example`  folder and run  `yarn serve`  to start up our first app in development mode:

Vue CLI 为我们创建了应用程序，并且我们可以进入 `example` 文件夹和运行 `yarn serve` 在开发者模式下启动我们的第一个应用程序：

![](https://cdn-media-1.freecodecamp.org/images/iegqNiWWJaunJi-KFTV93EKuODc4njdfLRuf)

The starter example application source contains a few files, including  `package.json`:

启动的示例应用程序源码包含几个文件，包括 `package.json`：

![](https://cdn-media-1.freecodecamp.org/images/FuI7nmJ2NAtesloTZrh3eJL-aa0ceCCr68wQ)

This is where all the CLI commands are defined, including  `yarn serve`, which we used a minute ago. The other commands are

这里定义了所有的 CLI 命令，包括几分钟前我们使用的 `yarn serve`，其它的几个命令是

-   `yarn build`, to start a production build
-   `yarn lint`, to run the linter
-   `yarn test:unit`, to run the unit tests

I will describe the sample application generated by Vue CLI in a separate tutorial.

我将在单独的教程中描述 Vue CLI 生成的示例应用程序。

#### Git repository

#### Git 仓库
Notice the  `master`  word in the lower-left corner of VS Code? That's because Vue CLI automatically creates a repository, and makes the first commit. So we can jump right in, change things, and we know what we changed:

注意到 VS Code 左下角的 `master`一词了吗？这是因为 Vue CLI 自动创建了一个仓库，并进行第一次提交。所以我们可以跳进去，改变内容，我们知道我们改变了什么：

![](https://cdn-media-1.freecodecamp.org/images/4IHrGo6U-xkz4aeVXf3S06AYzIk0lAZJ6t6y)

This is pretty cool. How many times do you dive in and change things, only to realize, when you want to commit the result, that you didn’t commit the initial state?

这很酷，有多少次，你一头扎进去，改变内容，结果发现，当你想提交的时候，你并没有提交初始状态。

#### Use a preset from the command line

#### 从命令行中是用预设

You can skip the interactive panel and instruct Vue CLI to use a particular preset:

你可以跳过互动面板，并指示 Vue CLI 使用特定的预设：

```
vue create -p favourite example-2
```

#### Where presets are stored
#### 预设存储在哪里

Presets are stored in the  `.vuejs`  file in your home directory. Here's mine after creating the first "favorite" preset:

预设存储在根目录下的 `.vuejs` 文件中。这是我在创建第一个 “favorite” 预设后的状态：

```
{  "useTaobaoRegistry": false,  "packageManager": "yarn",  "presets": {    "favourite": {      "useConfigFiles": true,      "plugins": {        "@vue/cli-plugin-babel": {},        "@vue/cli-plugin-eslint": {          "config": "prettier",          "lintOn": [            "save"          ]        },        "@vue/cli-plugin-unit-jest": {}      },      "router": true,      "vuex": true    }  }}
```

#### Plugins

#### 插件

As you can see from reading the configuration, a preset is basically a collection of plugins, with some optional configuration.

你可以通过阅读配置看到，预设基本上是插件的集合，有一些可选的配置。

Once a project is created, you can add more plugins by using  `vue add`:

当项目创建以后，你可以使用 `vue add` 添加更多的插件：

```
vue add @vue/cli-plugin-babel
```

All those plugins are used in the latest version available. You can force Vue CLI to use a specific version by passing the version property:

所有的这些插件都使用的最新版本。你可以通过版本属性强制 Vue CLI 使用指定的版本：

```
"@vue/cli-plugin-eslint": {  "version": "^3.0.0"}
```

This is useful if a new version has a breaking change or a bug, and you need to wait a little bit before using it.

当一个新的版本有大的更改或者是 bug，并且你需要稍等一段时间才使用它，这是非常有用的。

#### Remotely store presets

#### 远程存储预设

A preset can be stored in GitHub (or on other services) by creating a repository that contains a  `preset.json`  file, which contains a single preset configuration.

预设可以通过创建包含一个预设配置的 `preset.json` 文件的仓库存储在 GitHub （或其他服务）中。

Extracted from the above, I made a sample  [preset][36]  which contains this configuration:

从上面提取，我做了一个包含如下配置的样本 [预设][36]：

```
{  "useConfigFiles": true,  "plugins": {    "@vue/cli-plugin-babel": {},    "@vue/cli-plugin-eslint": {      "config": "prettier",      "lintOn": [        "save"      ]    },    "@vue/cli-plugin-unit-jest": {}  },  "router": true,  "vuex": true}
```

It can be used to bootstrap a new application using:

它可以用来引导一个新的应用程序使用：

```
vue create --preset flaviocopes/vue-cli-preset example3
```

### Another use of the Vue CLI: rapid prototyping

另一个的 Vue CLI 用途是：快速原型设计

Up until now, I’ve explained how to use the Vue CLI to create a new project from scratch, with all the bells and whistles. But for really quick prototyping, you can create a really simple Vue application (even one that’s self-contained in a single .vue file) and serve that, without having to download all the dependencies in the  `node_modules`  folder.

到目前为止，我已经解释了如何使用 Vue CLI 从头创建一个新项目，其中包含了所有的细节。但是对于真正的快速原型开发，你可以创建一个非常简单的 Vue 应用程序（甚至是一个自身包含在其中的单个 .vue 文件的应用程序）并提供服务，而不必下载 ’node_modules‘ 文件夹中的所有依赖项。

How? First install the  `cli-service-global`  global package:

怎么做？首先安装全局安装 `cli-service-global` 包：

```
npm install -g @vue/cli-service-global
```

```
//or
```

```
yarn global add @vue/cli-service-global
```

Create an app.vue file:

创建一个 app.vue 文件：

```
<template>    <div>        <h2>Hello world!</h2>        <marquee>Heyyy</marquee>    </div></template>
```

and then run

然后运行

```
vue serve app.vue
```

![](https://cdn-media-1.freecodecamp.org/images/pp3QTRAMwLtOnkhazBRgRrjYKnMEbnm1CbWL)

The standalone app

独立的应用程序

You can serve more organized projects, composed by JavaScript and HTML files as well. Vue CLI by default uses  `main.js / index.js` as its entry point, and you can have a  `package.json`  and any tool configuration set up.  `vue serve`  will pick it up.

你可以服务更多有组织的项目，这些项目由 JavaScript 和 HTML 文件组成。Vue CLI 默认使用 `main.js / index.js` 作为它的入口点，并且你可以设置 `package.json` 和任何工具配置。`vue serve` 将会启动它。

Since this uses global dependencies, it’s not an optimal approach for anything more than a demonstration or quick testing.

由于它使用全局依赖关系，因此除了用于演示或快速测试外，她不是最佳的方法。

Running  `vue build`  will prepare the project for deployment in  `dist/`, and will generate all the corresponding code (also for vendor dependencies).

运行 `vue build` 将为在 `dist/` 中部署项目做好准备，并将生成所有相应的代码（也针对供应商依赖关系）。

#### Webpack

Internally, Vue CLI uses Webpack, but the configuration is abstracted and we don’t even see the config file in our folder. You can still have access to it by calling  `vue inspect`:

Vue CLI 可以在内部是用 Webpack，但是配置是抽象的，并且我们在文件夹中甚至看不到配置文件。你仍然可以通过调用 `vue inspect` 来访问它。

![](https://cdn-media-1.freecodecamp.org/images/dGT6I8Uq75505tD1Xj8wR-h7rO9ZvRby80cH)

### The Vue DevTools

When you’re first experimenting with Vue, if you open the Browser Developer Tools, you will find this message: “Download the Vue Devtools extension for a better development experience:  [https://github.com/vuejs/vue-devtools][37]"

当你第一次尝试使用 Vue 的时候，如果你打开浏览器开发者工具，你将发现以下信息：“Download the Vue Devtools extension for a better development experience:  [https://github.com/vuejs/vue-devtools][37]” 。

![](https://cdn-media-1.freecodecamp.org/images/J-LJE-u3DphYF8pOpMnkCX9KoNz3fGp4OPea)

Hint to install the Vue devtools

提示安装 Vue 开发工具

This is a friendly reminder to install the Vue Devtools Extension. What’s that? Any popular framework has its own devtools extension, which generally adds a new panel to the browser developer tools that is much more specialized than the ones that the browser ships by default. In this case, the panel will let us inspect our Vue application and interact with it.

这是一个友好的安装 Vue Devtools 扩展提示。那是什么？任何流行的框架都有自己的 devtools 扩展，它通常会为浏览器开发人员工具添加一个新的面板，这个面板比浏览器默认提供的面板更专业。在这种情况下，面板将允许我们检查 Vue 应用程序并与之交互。

This tool will be an amazing help when building Vue apps. The developer tools can only inspect a Vue application when it’s in development mode. This makes sure no one can use them to interact with your production app — and will make Vue more performant, because it does not have to care about the Dev Tools.

在搭建 Vue 应用程序的时候，这个工具将提供令人惊讶的帮助。开发者工具只能在 Vue 应用程序处于开发模式时检查它。这将确保没有人可以使用它们来与你的应用程序产品进行交互，并将使 Vue 具有更高的性能，因为它不必关心开发者工具。

Let’s install it!

让我们安装它！

There are 3 ways to install the Vue Dev Tools:

这里有三个方法安装 Vue Dev Tools：

-   on Chrome
-   on Firefox
-   as a standalone application

Safari, Edge and other browsers are not supported with a custom extension, but using the standalone application you can debug a Vue.js app running in any browser.

自定义扩展不支持 Safari，Edge 和 其它浏览器，但是使用独立的应用程序，你可以在任何浏览器里面运行调试。

#### Install on Chrome

#### 安装在 Chrome 中

Go to this page on the Google Chrome  [Store][38]  and click  `**Add to Chrome**`.

转到 Google Chrome [Store][38] 页面并点击 ``**Add to Chrome**``。

![](https://cdn-media-1.freecodecamp.org/images/uh0CFZPRsdnKFOY-OWWvQCN3UVcnh-0KXpfh)

Go through the installation process:

完成安装过程：

![](https://cdn-media-1.freecodecamp.org/images/hAQZpBESrlkCeLeLJpzeiPdJs12mmFHLRq9s)

The Vue.js devtools icon shows up in the toolbar. If the page does not have a Vue.js instance running, it’s grayed out.

Vue.js devtools 图标出现在工具栏中，如果页面没有运行 Vue.js 实例它就会变成灰色。

![](https://cdn-media-1.freecodecamp.org/images/TaZntVatyBmsqqKsMjbGKn5nIuJikKLOJJyt)

If Vue.js is detected, the icon has the Vue logo’s colors.

如果 Vue.js 被检测到，这个图标会显示 Vue 的 logo 的颜色。

![](https://cdn-media-1.freecodecamp.org/images/xPbOBNuLCdCE28QiFevAcqFb06Oqk8tB31Zy)

The icon does nothing except show us that there  **is**  a Vue.js instance. To use the devtools, we must open the Developer Tools panel, using “View → Developer → Developer Tools”, or  `Cmd-Alt-i`

这个图标只是告诉我们这 **是** 一个 Vue.js 实例。要用 devtools，我们必须打开 Developer Tools 面板，使用 “View → Developer → Developer Tools”，或者 `Cmd-Alt-i`。

![](https://cdn-media-1.freecodecamp.org/images/td1gw01JZxVxAkHLGg9FKzIHz8UFhMhvr3gG)

#### Install on Firefox

#### 安装在 Firefox 中

You can find the Firefox dev tools extension in the Mozilla Add-ons  [store][39].

你可以在 Mozilla Add-ons [store][39] 中找到 Firefox 的开发工具扩展。

![](https://cdn-media-1.freecodecamp.org/images/y-G2Zcw62ZrkjMOe6ottwLy-z6onBxnZzOXm)

Click “Add to Firefox” and the extension will be installed. As with Chrome, a grayed icon shows up in the toolbar

点击 “Add to Firefox”，扩展将被安装，和 Chrome 一样，工具栏上也会显示一个灰色的图标。

![](https://cdn-media-1.freecodecamp.org/images/LQCCB8c2g0OsUmJZ20fYJBPbampJudlIPocv)

And when you visit a site that has a Vue instance running, it will become green, and when we open the Dev Tools we will see a “Vue” panel:

并且当你访问一个运行 Vue 实例的站点，它将变成绿色并且当你打开 Dev Tools 我们将看到一个 “Vue” 面板：

![](https://cdn-media-1.freecodecamp.org/images/jFYMTGNEhrkxzzC6Grdb7zgXrnHrwuR-0AiI)

#### Install the standalone app
#### 安装独立的应用程序

Alternatively, you can use the DevTools standalone app.

或者，你可以使用独立的 DevTools 应用程序。

Simply install it using:

简单的安装它：

```
npm install -g @vue/devtools
```

```
//or
```

```
yarn global add @vue/devtools
```

and run it by calling:

通过调用运行它：

```
vue-devtools
```

This will open the standalone Electron-based application.

这将打开基于 Electron 的独立的应用程序。

Now, paste the script tag it shows you

现在，粘贴显示给你的 script 标签

```
<script src="http://localhost:8098"></script>
```

inside the project  `index.html`  file, and wait for the app to be reloaded. It will automatically connect to the app.

在项目的 `index.html` 文件中，然后等待应用程序重启，它将自动连接到应用程序。

![](https://cdn-media-1.freecodecamp.org/images/ANnfWmlscUkP0RN9Pn-hSABLCOxzMJYvtuqw)

#### How to use the Developer Tools

#### 如何使用 Developer Tools

As mentioned, the Vue DevTools can be activated by opening the Developer Tools in the browser and moving to the Vue panel.

如前所述，可以通过在浏览器打开开发者工具并移动到 Vue 面板来激活 Vue DevTools。

Another option is to right-click on any element in the page, and choose “Inspect Vue component”:

另一个选项是右键单击页面中的任何元素，然后选择 “Inspect Vue component”：

![](https://cdn-media-1.freecodecamp.org/images/r4URIzj-Mm92WTnnl9iXMK18f8cIwmyICQ0m)

When the Vue DevTools panel is open, we can navigate the components tree. When we choose a component from the list on the left, the right panel shows the props and data it holds:

当打开 Vue DevTools 面板后，我们可以浏览组件树。当我们从左侧的列表中选择一个组件时，右侧面板将显示其特有的属性和数据。

![](https://cdn-media-1.freecodecamp.org/images/h55RK1azzd7gjON36Da9HdY-tpu8cuVMBs-3)

On the top there are fourbuttons:

在顶部有四个按钮：

-   **Components**  (the current panel), which lists all the component instances running in the current page. Vue can have multiple instances running at the same time. For example, it might manage your shopping cart widget and the slideshow, with separate, lightweight apps.
-   **Vuex**  is where you can inspect the state managed through Vuex.
-   **Events**  shows all the events emitted.
-   **Refresh**  reloads the devtools panel.

- **Components** (当前面板)，其中列出了当前页面中运行的实例的所有组件。Vue 可以同时运行多个实例。例如，它可以使用单独轻量级应用程序管理购物车的小部件和幻灯片。
- **Vuex** 你可以在这里检查通过 Vuex 管理的状态
- **Events** 显示所有发生的事件
- **Refresh** 重新加载 devtools 面板

Notice the small  `= $vm0`  text beside a component? It's a handy way to inspect a component using the Console. Pressing the "esc" key shows up the console in the bottom of the devtools, and you can type  `$vm0`  to access the Vue component:

注意到组件旁边的小文本 `= $vm0`了吗？这是使用 Console 检查组件的便捷方法。按下 “esc” 键将在 devtools 底部显示控制台，你可以键入 `$vm0` 来访问 Vue 组件：

![](https://cdn-media-1.freecodecamp.org/images/9fi396qPj8ajABDLnAoB77AkjDtLEJu-2okG)

It’s very cool to inspect and interact with components without having to assign them to a global variable in the code.

检查和与组件交互而不必将他们分配到代码中的全局变量，这非常的酷。

#### Filter components
#### 过滤组件

Start typing a component name, and the components tree will filter out the ones that don’t match.

开始键入组件名称，并且组件树将过滤掉不匹配的组件。

![](https://cdn-media-1.freecodecamp.org/images/IdqSWwFMpvHVN125f7uIxue0Xp0ic-HJmBzX)

#### Select a component in the page
#### 在页面上选择一个组件

Click the  `**Select component in the page**`  button.

点击 `**Select component in the page**` 按钮

![](https://cdn-media-1.freecodecamp.org/images/RE969Y8eHdDn1rqHvj2OGfnEqthwHMVy37A-)

Select component in the page

在页面上选择组件

You can hover over any component in the page with the mouse, click it, and it will be opened in the devtools.

你可以用鼠标悬停在页面中的任何组件上，单机它，它将在 devtools 中打开。

#### Format components names

#### 格式化组件名称

You can choose to show components in camelCase or use dashes.

你可以选择驼峰或者破折号写法显示组件。

#### Filter inspected data

#### 检查过滤数据

On the right panel, you can type any word to filter the properties that don’t match it.

在右边的面板上，你可以输入任何单词来过滤不匹配的属性。

#### Inspect DOM
#### Inspect DOM

Click the Inspect DOM button to be brought to the DevTools Elements inspector, with the DOM element generated by the component:

点击 Inspect DOM 按钮，跳转到 DevTools 元素检查器，该 DOM 元素由组件生成。

![](https://cdn-media-1.freecodecamp.org/images/YKTlyULN-MDOAg3R1KPA3tI27IqX5Q9ckIH4)

Inspect the DOM

检查 DOM

#### Open in editor

#### 在编辑器中打开

Any user component (not framework-level components) has a button that opens it in your default editor. Very handy.

任何用户组件（不是框架级组件）都有一个按钮，可以在你的默认编辑器中将它打开。非常有用。

### Setup VS Code to work with Vue

### 设置 VS Code 与 Vue 一起工作

[Visual Studio Code][40]  is one of the most used code editors in the world right now. Editors have, like many software products, a cycle. Once  [TextMate][41]  was the favorite among developers, then it was  [Sublime Text][42], now it’s VS Code.

[Visual Studio Code][40] 是目前世界上最常用的的代码编辑器之一，想很多软件产品一样，编辑器有一个循环。曾经 [TextMate][41] 在开发人员中很受欢迎，然后是 [Sublime Text][42]，现在是 VS Code。

The cool thing about being popular is that people dedicate a lot of time to building plugins for everything they can imagine.

受欢迎的有趣之处在于，人们花了很多时间来为他们可以想象的一切构建插件。

One such plugin is an awesome tool that can help us Vue.js developers.

一个这样的插件是很棒的工具，可以帮助我们 Vue.js 开发人员。

#### Vetur
#### Vetur

It’s called Vetur, it’s hugely popular (more than 3 million downloads), and you can find it  [on the Visual Studio Marketplace][43].

它叫做 Vetur，它非常受欢迎（下载量超过300万），你可以在 [Visual Studio 市场][43] 上找到它。

![](https://cdn-media-1.freecodecamp.org/images/OOfHNunbiMBxokJsrmdrvWixSoDmaDdPRzxK)

#### Installing Vetur
#### 安装 Vetur

Clicking the Install button will trigger the installation panel in VS Code:

单击 Install 按钮将在 VS Code 中触发安装面板：

![](https://cdn-media-1.freecodecamp.org/images/hskNZD-byUAunDSOjCdPXPMIb9v3rBPSlOvf)

You can also simply open the Extensions in VS Code and search for “vetur”:

你也可以简单的在 VS Code 中打开扩展，然后搜索 “vetur”：

![](https://cdn-media-1.freecodecamp.org/images/xbOVISLaIuAgHHvD4gKVFb0Lg9R1f5R5Jowk)

What does this extension provide?

这个扩展提供了什么？

#### Syntax highlighting

#### 语法高亮显示

Vetur provides syntax highlighting for all your Vue source code files.

Vetur 为所有 Vue 源代码文件提供语法高亮显示。

Without Vetur, a  `.vue`  file will be displayed in this way by VS Code:

如果没有 Vetur，VS Code 将以这种方式显示 `.vue` 文件：

![](https://cdn-media-1.freecodecamp.org/images/JTZ9KScP0WTtr-4cCvjvQJKkGwlA4EW9KIf3)

with Vetur installed:

安装了 Vetur 后：

![](https://cdn-media-1.freecodecamp.org/images/c5wC-aTwknyXUSjqq9gbr-EqFbSDXSewix-N)

VS Code is able to recognize the type of code contained in a file from its extension.

VS Code 能够从其扩展名识别文件中包含的代码类型。

Using Single File Components, you can mix different types of code inside the same file, from CSS to JavaScript to HTML.

使用单文件组件，你可以在同一个文件中混合不同类型的代码，从 CSS 到 JavaScript 在到 HTML。

VS Code by default cannot recognize this kind of situation, and Vetur provides syntax highlighting for each kind of code you use.

默认情况下，VS Code 无法识别这种情况，而 Vetur 为你使用的每种代码提供语法高亮显示。

Vetur enables support, among other things, for:

Vetur 能够支持一下功能。

-   HTML
-   CSS
-   JavaScript
-   Pug
-   Haml
-   SCSS
-   PostCSS
-   Sass
-   Stylus
-   TypeScript

#### Snippets

#### 片段

As with syntax highlighting, since VS Code cannot determine the kind of code contained in a part of a  `.vue`  file, it cannot provide the snippets we all love. Snippets are pieces of code we can add to the file, provided by specialized plugins.

与语法突出显示一样，由于 VS Code 无法确定 .vue 文件的一部分包含的代码类型，因此它无法提供我们都喜欢的代码段。代码片段是我们可以添加到文件中的代码片段，由专业插件提供。

Vetur gives VS Code the ability to use your favorite snippets in Single File Components.

Vetur 使 VS Code 能够在单文件组件中使用你喜欢的代码片段。

#### IntelliSense

#### IntelliSense（智能提示）

[IntelliSense][44]  is also enabled by Vetur, for each different language, with autocomplete:

Vetur 还为每种不同的语言启用了 [IntelliSense][44]，并具有自动完成功能：

![](https://cdn-media-1.freecodecamp.org/images/3KtNeQR4W8HVg-JVT0kmu33sL79xlWIT0KtY)

#### Scaffolding

#### 脚手架

In addition to enabling custom snippets, Vetur provides its own set of snippets. Each one creates a specific tag (template, script, or style) with its own language:

除了启动自定义片段外，Vetur 还提供了自己的片段集。每个(插件)都是用自己的语言创建一个特定的标签（template，script 和 style）：

-   `scaffold`
-   `template with html`
-   `template with pug`
-   `script with JavaScript`
-   `script with TypeScript`
-   `style with CSS`
-   `style with CSS (scoped)`
-   `style with scss`
-   `style with scss (scoped)`
-   `style with less`
-   `style with less (scoped)`
-   `style with sass`
-   `style with sass (scoped)`
-   `style with postcss`
-   `style with postcss (scoped)`
-   `style with stylus`
-   `style with stylus (scoped)`

If you type  `scaffold`, you'll get a starter pack for a single-file component:

如果输入 `scaffold`，你将会获得单文件组件的初始包：

```
<template>
```

```
</template>
```

```
<script>export default {
```

```
}</script>
```

```
<style>
```

```
</style>
```

The others are specific and create a single block of code.

其它都是特定的，并创建单个代码块。

**Note:**  (scoped) in the above list means that it applies to the current component only.

**注意：** （scoped）在上面的列表中表示它仅适用于当前组件。

#### Emmet

#### Emmet

[Emmet][45], the popular HTML/CSS abbreviations engine, is supported by default. You can type one of the Emmet abbreviations, and by pressing  `tab`  VS Code will automatically expand it to the HTML equivalent:

[Emmet][45], 默认支持流行的 HTML/CSS 缩写引擎。你可以输入 Emmet 的缩写之一，然后按 `tab`、 VS Code 将自动将其扩展为相同的 HTML：

![](https://cdn-media-1.freecodecamp.org/images/R7Q4k9hsI0yzBe-xaVIMxdBMukjQWzzIw-FG)

#### Linting and error checking

#### Linting 和 错误检查

Vetur integrates with ESLint through the  [VS Code ESLint plugin][46].

Vetur 通过 [VS Code ESLint plugin][46] 与 ESLint 集成。

![](https://cdn-media-1.freecodecamp.org/images/j1mnYvPYhNPWM00V0lDdxCwb5ZidBzG0Djtn)

![](https://cdn-media-1.freecodecamp.org/images/5Z2hR9l8ARVe3uucCT4iPzTsDZRuEh0gZSs8)

#### Code Formatting

Vetur provides automatic support for code formatting to format the whole file upon save — in combination with the  `"editor.formatOnSave"`  VS Code setting.

Vetur 为代码格式化提供自动支持，以在保存时整个文件进行格式化 - 和 VS Code 设置里的 `"editor.formatOnSave"` 相结合。

You can choose to disable automatic formatting for some specific languages by setting the  `vetur.format.defaultFormatter.XXXXX`  to  `none`  in the VS Code settings. To change one of those settings, just start searching for the string, and override what you want in the user settings on the right panel.

你可以通过在 VS Code 设置中将 `vetur.format.defaultFormatter.XXXXX` 设置为 `none` 来禁用某些特定语言的自动格式化设置。要更改其中的设置，只需要开始搜索字符串，然后在右侧面板的用户设置中覆盖所需的内容即可。

Most of the languages supported use  [Prettier][47]  for automatic formatting, a tool that’s becoming an industry standard. It uses your Prettier configuration to determine your preferences.

大多数人语言支持使用 [Prettier][47] 实现自动格式化，这是一个正在成为行业标准的工具。它使用 Prettier 的配置来确定你的首选项。

### Introducing Vue Components

### 引入 Vue 组件

Components are single, independent units of an interface. They can have their own state, markup, and style.

组件是接口的单个独立单元。他们可以有自己的状态、标记和样式。

#### How to use components

#### 如何使用组件

Vue components can be defined in four main ways. Let’s talk in code.

Vue 组件可以通过四种主要方式进行定义。让我们谈谈代码。

The first is:

第一个是：

```
new Vue({  /* options */})
```

The second is:

第二个是：

```
Vue.component('component-name', {  /* options */})
```

The third is by using local components. These are components that are only accessible by a specific component, and not available elsewhere (great for encapsulation).

第三个是通过使用本地组件。这些是只能由特定组成访问的组件，而在其它地方则不可用（非常适合封装）。

The fourth is in  `.vue`  files, also called Single File Components.

第四个是在 `.vue` 文件中，也称为单文件组件。

Let’s dive into the first 3 ways in detail.

让我们详细介绍前三种方式。

Using  `new Vue()`  or  `Vue.component()`  is the standard way to use Vue when you're building an application that is not a Single Page Application (SPA). You use this method, rather, when you’re just using Vue.js in some pages, like in a contact form or in the shopping cart. Or maybe Vue is used in all pages, but the server is rendering the layout, and you serve the HTML to the client, which then loads the Vue application you build.

在构建非单页应用程序（SPA）时，使用 `new Vue()` 和 `Vue.component()` 是使用 Vue 的标准方法。你可以使用这些方法，更准确的说，当你仅仅在一些页面使用 Vue.js，如联系表单或购物车中的时候。或者是在所有的页面中都是用了 Vue，但是服务器正在渲染布局，然后你将 HTML 提供给客户端，然后客户端将加载你构建的 Vue 应用程序。

In an SPA, where it’s Vue that builds the HTML, it’s more common to use Single File Components as they are more convenient.

由 Vue 构建 HTML 的 SPA 中，使用单文件组件更为方便，因此更为常见。

You instantiate Vue by mounting it on a DOM element. If you have a  `<div id="app">`</div> tag, you will use:

你可以通过在挂载 Vue 在 DOM 元素上来实例化它。如果你有一个 `<div id="app"></div>` 标签，你将要使用：

```
new Vue({ el: '#app' })
```

A component initialized with  `new Vue`  has no corresponding tag name, so it's usually the main container component.

用 `new Vue` 初始化的组件没有对应的标记名，因此它通常是主要的容器组件。

Other components used in the application are initialized using  `Vue.component()`. Such a component allows you to define a tag — with which you can embed the component multiple times in the application — and specify the output of the component in the  `template`  property:

应用程序中使用的其他组件使用 `Vue.component()` 进行初始化。这样的组件允许你定义一个标签 - 你可以使用该标签将组件嵌入应用程序中 - 并在 `template` 属性中指定该组件的输出：

```
<div id="app">  <user-name name="Flavio"></user-name></div>
```

```
Vue.component('user-name', {  props: ['name'],  template: '<p>Hi {{ name }}</p>'})
```

```
new Vue({  el: '#app'})
```

[See on JSFiddle][48]

[在 JSFiddle 查看][48]

What are we doing? We are initializing a Vue root component on  `#app`, and inside that, we use the Vue component  `user-name`, which abstracts our greeting to the user.

我们在做什么？我们在 `#app` 上初始化 Vue 根组件，在这里面，我们使用 Vue 组件 `user-name`，它抽象了我们对用户的问候。

The component accepts a prop, which is an attribute we use to pass data down to child components.

这个组件接受一个 prop，它是我们用来将数据传递给子组件的属性。

In the  `Vue.component()`  call we passed  `user-name`  as the first parameter. This gives the component a name. You can write the name in 2 ways here. The first is the one we used, called kebab-case. The second is called PascalCase, which is like camelCase, but with the first letter capitalized:

在 `Vue.component()` 调用中，我们传递了 `user-name` 作为第一个参数。这将为组件提供一个名称，你可以把名字写成两种形式。第一个是我们用过的，叫做 kebab-case。第二个叫做 PascalCase，和 camelCase 类似，但是第一个字母是大写：

```
Vue.component('UserName', {  /* ... */})
```

Vue automatically creates an alias internally from  `user-name`  to  `UserName`, and vice versa, so you can use whatever you like. It's generally best to use  `UserName`  in the JavaScript, and  `user-name`  in the template.

Vue 会在内部自从创建一个 `user-name` 到 `UserName` 的别名，反之亦然，因此你可以随意使用。通常最好在 JavaScript 中使用 `UserName`，在模板中使用 `user-name`。

#### Local components
#### 本地组件

Any component created using  `Vue.component()`  is globally registered. You don't need to assign it to a variable or pass it around to reuse it in your templates.

任何使用 `Vue.component()` 创建的组件都是全局注册的。你无需将其分配给变量或将其传递以在模板中重复使用。

You can encapsulate components locally by assigning an object that defines the component object to a variable:

你可以通过将自定义组件对象为变量赋值给一个对象在本地封装组件：

```
const Sidebar = {  template: '<aside>Sidebar</aside>'}
```

and then make it available inside another component by using the  `components`  property:

然后使用 `components` 属性使其在另一个组件内部使用：

```
new Vue({  el: '#app',  components: {    Sidebar  }})
```

You can write the component in the same file, but a great way to do this is to use JavaScript modules:

你可以在同一个文件中编写文件，但是有一个很好的方法是使用 JavaScript 模块：

```
import Sidebar from './Sidebar'
```

```
export default {  el: '#app',  components: {    Sidebar  }}
```

#### Reusing a component

#### 复用组件

A child component can be added multiple times. Each separate instance is independent of the others:

子组件可以添加多次。每个单独的示例都独立于其它实例。

```
<div id="app">  <user-name name="Flavio"></user-name>  <user-name name="Roger"></user-name>  <user-name name="Syd"></user-name></div>
```

```
Vue.component('user-name', {  props: ['name'],  template: '<p>Hi {{ name }}</p>'})
```

```
new Vue({  el: '#app'})
```

[See on JSFiddle][49]
[在 JSFiddle 查看][49]

#### The building blocks of a component
#### 组件的组成部分

So far we’ve seen how a component can accept the  `el`,  `props`  and  `template`  properties.

到目前为止，我们已经看到了组件如何接受 `el`、 `props` 和 `template` 属性。

-   `el`  is only used in root components initialized using  `new Vue({})`, and identifies the DOM element the component will mount on.
-   `props`  lists all the properties that we can pass down to a child component
-   `template`  is where we can set up the component template, which will be responsible for defining the output the component generates.

- `el` 仅在使用 `new Vue({})` 初始化的根组件中使用，并标识组件将挂载的 DOM 元素。
- `props` 列出了我们可以传递给子组件的所有属性
- `template` 是我们可以设置组件模板的地方，它负责定义输出生成的组件。

A component accepts other properties:

组件接受其它属性：

-   `data`  the component local state
-   `methods`: the component methods
-   `computed`: the computed properties associated with the component
-   `watch`: the component watchers

- `data` 组件本地的状态
- `methods` ： 组件方法
- `computed`：与组件关联的计算属性
- `watch`：组件观察者

### Single File Components

### 单文件组件

A Vue component can be declared in a JavaScript file (`.js`) like this:

可以在 JavaScript 文件（ `.js` ）中声明 Vue 组件，如下所示：

```
Vue.component('component-name', {  /* options */})
```

or also:
或者：

```
new Vue({  /* options */})
```

or it can be specified in a  `.vue`  file.

或者可以在 .vue 文件中指定。

The  `.vue`  file is pretty cool because it allows you to define:

`.vue` 文件非常酷，因为它允许你定义：

-   JavaScript logic
-   HTML code template
-   CSS styling

- JavaScript 逻辑
- HTML 代码模板
- CSS 样式

all in just a single file. As such it got the name of Single File Component.

全部都在一个文件中，因此，它的名称为单文件组件。

Here’s an example:

这里是一个示例：

```
<template>  <p>{{ hello }}</p></template>
```

```
<script>export default {  data() {    return {      hello: 'Hello World!'    }  }}</script>
```

```
<style scoped>  p {    color: blue;  }</style>
```

All of this is possible thanks to the use of Webpack. The Vue CLI makes this very easy and supported out of the box.  `.vue`files cannot be used without a Webpack setup, and as such, they are not very suited to apps that just use Vue on a page without being a full-blown single-page app (SPA).

由于使用了 Webpack，所以这些都是可能的。Vue CLI 使得这个操作非常容易，并且支持开箱即用。如果没有设置 Webpack ，将无法使用 `.vue` 文件，因此，它们不太适合仅在页面上使用 Vue 而又不是完整的单页面应用程序（SPA）的应用程序。

Since Single File Components rely on Webpack, we get for free the ability to use modern Web features.

由于单文件组件依赖于 Webpack,所以我们可以免费使用现代 Web 特性。

Your CSS can be defined using SCSS or Stylus, the template can be built using Pug, and all you need to do to make this happen is to declare to Vue which language preprocessor you are going to use.

你可以使用 SCSS 或 Stylus 定义 CSS，可以使用 Pug 构建模板，要做的就是向 Vue 声明要使用哪种语言预处理器。

The list of supported preprocessors include

支持的预处理器列表包括

-   TypeScript
-   SCSS
-   Sass
-   Less
-   PostCSS
-   Pug

We can use modern JavaScript (ES6–7–8) regardless of the target browser using the Babel integration, and ES Modules too, so we can use  `import/export`  statements.

我们可以使用现代的 JavaScript（ES6-7-8），而不用考虑使用 Babel 集成的目标浏览器和 ES 模块,因此我们可以使用 `import/export` 语句。

We can use CSS Modules to scope our CSS.

我们可以使用 CSS 模块来定义 CSS 的范围。

Speaking of scoping CSS, Single File Components make it absolutely easy to write CSS that won’t  **leak**  to other components, by using  `<style scop`ed> tags.

说到 CSS 的作用域，通过使用 `<style scoped>` 标记，Single File Components（单文件组件）使得编写不会 **泄露** 给其他组件的 CSS 变的非常容易。

If you omit  `scoped`, the CSS you define will be global. But adding the  `scoped`  tag, Vue automatically adds a specific class to the component, unique to your app, so the CSS is guaranteed to not leak out to other components.

如果你省略了 `scoped`，你定义的 CSS 将是全局的。但是在添加了 `scoped` 标签后，Vue 会自动向组件添加一个特定的类，这个类对于你的应用程序是唯一的，因此可以保证 CSS不会泄露给其他组件。

Maybe your JavaScript is huge because of some logic you need to take care of. What if you want to use a separate file for your JavaScript?

也许你的 JavaScript 太大了，因为你需要处理一些逻辑。如果你想为你的 JavaScript 使用一个单独的文件怎么办呢？

You can use the  `src`  attribute to externalize it:

你可以使用 `src` 属性将其外部化：

```
<template>  <p>{{ hello }}</p></template><script src="./hello.js"></script>
```

This also works for your CSS:

这也适用于你的 CSS：

```
<template>  <p>{{ hello }}</p></template><script src="./hello.js"></script><style src="./hello.css"></style>
```

Notice how I used

注意我是怎么使用的

```
export default {  data() {    return {      hello: 'Hello World!'    }  }}
```

in the component’s JavaScript to set up the data.

在组件的 JavaScript 中设置数据。

Other common ways you will see are:

你将看到的其它常见方式是：

```
export default {  data: function() {    return {      name: 'Flavio'    }  }}
```

The above is equivalent to what we did before.

以上等同于我们之前所做的工作

Or:

或者

```
export default {  data: () => {    return {      name: 'Flavio'    }  }}
```

This is different, because it uses an arrow function. Arrow functions are fine until we need to access a component method. This is an issue if we need to make use of  `this`, and such property is not bound to the component using arrow functions. So it's mandatory to use  **regular**  functions rather than arrow functions.

这是不同的，因为它使用箭头功能，箭头函数很好，直到我们需要访问组件方法位置。如果我们需要使用 `this`，并且使用箭头函数未将此类属性绑定到组件，则这是一个问题。因此，必须使用 **常规** 函数而不是箭头函数。

You might also see:

你可能还会看到：

```
module.exports = {  data: () => {    return {      name: 'Flavio'    }  }}
```

This is using the  [CommonJS][50]  syntax and it works as well. But I recommend using the ES Modules syntax, as that is a JavaScript standard.

这是使用 [CommonJS][50] 语法，它工作的很好。但是我建议使用 ES 模块语法，因为这是一个Javascript 标准。

### Vue Templates
### Vue Templates

Vue.js uses a templating language that’s a superset of HTML.

Vue.js 使用的模板语言是 HTML 的超集。

Any HTML is a valid Vue.js template. In addition to that, Vue.js provides two powerful things: interpolation and directives.

任何 HTML 都是有效的 Vue.js 模板。除此之外，Vue.js 还提供了两个强大的功能：插值和指令。

This is a valid Vue.js template:

这是一个有效的 Vue.js 模板：

```
<span>Hello!</span>
```

This template can be put inside a Vue component declared explicitly:
这可以将该模板放入显式声明的 Vue 组件中：

```
new Vue({  template: '<span>Hello!</span>'})
```

or it can be put into a Single File Component:

或者可以将其放入 Single File Component（单文件组件） 中:

```
<template>  <span>Hello!</span></template>
```

This first example is very basic. The next step is making it output a piece of the component state, for example, a name.

第一个示例非常基础。下一步是使其输出部分组件状态，例如，名称。

This can be done using interpolation. First, we add some data to our component:

这可以使用插值来完成。首先，我们向组件添加一些数据：

```
new Vue({  data: {    name: 'Flavio'  },  template: '<span>Hello!</span>'})
```

and then we can add it to our template using the double brackets syntax:

然后我们可以使用双括号语法将其添加到模板中：

```
new Vue({  data: {    name: 'Flavio'  },  template: '<span>Hello {{name}}!</span>'})
```

One interesting thing here. See how we just used  `name`  instead of  `this.data.name`?

这是一件有趣的是。看看我们是怎么使用 `name` 代替 `this.data.name` 的？

This is because Vue.js does some internal binding and lets the template use the property as if it was local. Pretty handy.

这是因为 Vue.js 进行了一些内部的绑定，并让模板对象像使用本地属性一样使用该属性。很方便。

In a single file component, that would be:

在一个单文件组件中，这将是：

```
<template>  <span>Hello {{name}}!</span></template>
```

```
<script>export default {  data() {    return {      name: 'Flavio'    }  }}</script>
```

I used a regular function in my export. Why not an arrow function?

我在导出中使用了一个常规函数。为什么不是一个箭头函数？

This is because in  `data`  we might need to access a method in our component instance, and we can't do that if  `this`  is not bound to the component, so we can’t use an arrow function.

这是因为在 `data` 中，我们可能需要访问组件实例中的一个方法，如果 `this` 没有绑定到组件，我们就不能这样做，所以我们不能使用箭头函数。

Do note that we could use an arrow function, but then I would need to remember to switch to a regular function in case I use  `this`. Better play it safe, I think.

请注意，我们可以使用箭头函数，但是如果我们使用 `this`，那么我需要记住切换到常规功能。我想还是小心为好。

Now, back to the interpolation.

现在，回到差值表达式。

`{{ name }}`  should remind you of Mustache / Handlebars template interpolation, but it's just a visual reminder.

`{{ name }}` 应该会提醒你的 stache / Handlebars 模板插值，但它只是一个视觉提醒。

While in those templating engines they are “dumb”, in Vue, you can do much more, and it’s more flexible.

虽然在这些模板引擎中他们是 “愚蠢的”，但是在 Vue 中，你可以做更多的事情，而且它更灵活。

You can use any JavaScript expression inside your interpolations, but you’re limited to just one expression:

你可以在插值表达式中使用任何 JavaScript 表达式，但是你只能使用一个表达式：

```
{{ name.reverse() }}
```

```
{{ name === 'Flavio' ? 'Flavio' : 'stranger' }}
```

Vue provides access to some global objects inside templates, including Math and Date, so you can use them:

Vue 提供了对模板中一些全局对象的访问，包括 Math 和 Date，所以你可以使用它们：

```
{{ Math.sqrt(16) * Math.random() }}
```

It’s best to avoid adding complex logic to templates, but the fact that Vue allows it gives us more flexibility, especially when trying things out.

最好避免向模板中添加复杂逻辑，但事实上 Vue 允许这样做为我们提供了更多的灵活性，特别是在尝试时。

We can first try to put an expression in the template, and then move it to a computed property or method later on.

我们可以首先尝试将表达式放入模板中，稍后将其移动到计算属性或方法中。

The value included in any interpolation will be updated upon a change of any of the data properties it relies on.

任何插值表达式中包含的值将在其所依赖的任何数据属性发生更改时进行更新。

You can avoid this reactivity by using the  `v-once`  directive.

你可以通过使用 `v-once` 指令来避免这种反应。

The result is always escaped, so you can’t have HTML in the output.

结果总是转义的，所以输出中不能有 HTML。

If you need to have an HTML snippet, you need to use the  `v-html`  directive instead.

如果你需要一个 HTML 片段，你需要使用 `v-html` 指令代替。

### Styling components using CSS

### 使用 CSS 样式化组件

The simplest option to add CSS to a Vue.js component is to use the  `style`  tag, just like in HTML:

将 CSS 添加到 Vue.js 组件的最简单选择是使用 `style` 标签，就像在 HTML 中一样：

```
<template>  <p style="text-decoration: underline">Hi!</p></template>
```

```
<script>export default {  data() {    return {      decoration: 'underline'    }  }}</script>
```

This is as static as you can get. What if you want  `underline`  to be defined in the component data? Here's how you can do it:

这是你能得到的最静态的。如果希望在组件数据中定义 `下划线`，该怎么办？你可以这样做：

```
<template>  <p :style="{'text-decoration': decoration}">Hi!</p></template>
```

```
<script>export default {  data() {    return {      decoration: 'underline'    }  }}</script>
```

`:style`  is a shorthand for  `v-bind:style`. I'll use this shorthand throughout this tutorial.

`:style` 是 `v-bind:style` 的缩写。在本教程中，我将使用这个缩写。

Notice how we had to wrap  `text-decoration`  in quotes. This is because of the dash, which is not part of a valid JavaScript identifier.

注意我们是如何在引号中包装 `text-deciration` 的。这是因为破折号不是有效的 JavaScript 标志符的一部分。

You can avoid the quotes by using a special camelCase syntax that Vue.js enables, and rewriting it to  `textDecoration`:

你可以通过使用 Vue.js 支持的特殊 camelCase 语法来避免引号，并将其重写为 `textDecoration`：

```
<template>  <p :style="{textDecoration: decoration}">Hi!</p></template>
```

Instead of binding an object to  `style`, you can reference a computed property:

不需要将对象绑定到 `style`，你可以引用一个计算属性：

```
<template>  <p :style="styling">Hi!</p></template>
```

```
<script>export default {  data() {    return {      textDecoration: 'underline',      textWeight: 'bold'    }  },  computed: {    styling: function() {      return {        textDecoration: this.textDecoration,        textWeight: this.textWeight      }    }  }}</script>
```

Vue components generate plain HTML, so you can choose to add a class to each element, and add a corresponding CSS selector with properties that style it:

Vue 组件生成纯 HTML，因此你可以选择向每个元素添加一个 class，并添加具有样式属性设置其属性的相应 CSS 选择器：

```
<template>  <p class="underline">Hi!</p></template>
```

```
<style>.underline { text-decoration: underline; }</style>
```

You can use SCSS like this:

你可以像这样使用 SCSS：

```
<template>  <p class="underline">Hi!</p></template>
```

```
<style lang="scss">body {  .underline { text-decoration: underline; }}</style>
```

You can hard code the class like in the above example. Or you can bind the class to a component property, to make it dynamic, and only apply to that class if the data property is true:

你可以想上面的示例那样对 class 进行硬编码。或者你可以将 class 绑定到组件属性，使其成为动态的，并且仅在数据属性为真时才应用于该类：

```
<template>  <p :class="{underline: isUnderlined}">Hi!</p></template>
```

```
<script>export default {  data() {    return {      isUnderlined: true    }  }}</script>
```

```
<style>.underline { text-decoration: underline; }</style>
```

Instead of binding an object to class, like we did with  `<p :class="{text: isText}">H`i!</p>, you can directly bind a string, and that will reference a data property:

而不是绑定一个对象到 class，就像我们做的 `<p :class="{text: isText}">Hi!</p>`，你可以直接绑定一个字符串，这将引用一个数据属性：

```
<template>  <p :class="paragraphClass">Hi!</p></template>
```

```
<script>export default {  data() {    return {      paragraphClass: 'underline'    }  }}</script>
```

```
<style>.underline { text-decoration: underline; }</style>
```

You can assign multiple classes, either by adding two classes to  `paragraphClass`  in this case or by using an array:

你可以分配多个 class，在这种情况下，你可以通过在 `paragraphClass` 中添加两个 class，或者使用数组：

```
<template>  <p :class="[decoration, weight]">Hi!</p></template>
```

```
<script>export default {  data() {    return {      decoration: 'underline',      weight: 'weight',    }  }}</script>
```

```
<style>.underline { text-decoration: underline; }.weight { font-weight: bold; }</style>
```

The same can be done using an object inlined in the class binding:

使用 class 绑定内联的对象可以完成相同的操作：

```
<template>  <p :class="{underline: isUnderlined, weight: isBold}">Hi!</p></template>
```

```
<script>export default {  data() {    return {      isUnderlined: true,      isBold: true    }  }}</script>
```

```
<style>.underline { text-decoration: underline; }.weight { font-weight: bold; }</style>
```

And you can combine the two statements:

并且你可以合并一下两个语句：

```
<template>  <p :class="[decoration, {weight: isBold}]">Hi!</p></template>
```

```
<script>export default {  data() {    return {      decoration: 'underline',      isBold: true    }  }}</script>
```

```
<style>.underline { text-decoration: underline; }.weight { font-weight: bold; }</style>
```

You can also use a computed property that returns an object, which works best when you have many CSS classes to add to the same element:

你还可以使用返回对象的计算属性，当你将多个 CSS 的 class 添加到同一元素时，该属性最有效：

```
<template>  <p :class="paragraphClasses">Hi!</p></template>
```

```
<script>export default {  data() {    return {      isUnderlined: true,      isBold: true    }  },  computed: {    paragraphClasses: function() {      return {        underlined: this.isUnderlined,        bold: this.isBold      }    }  }}</script>
```

```
<style>.underlined { text-decoration: underline; }.bold { font-weight: bold; }</style>
```

Notice that in the computed property you need to reference the component data using  `this.[propertyName]`, while in the template data, properties are conveniently put as first-level properties.

注意，在计算属性中，你需要使用 `this.[propertyName]` 来引用组件数据，而在模板数据中，属性可以方便的放置为第一级属性。

Any CSS that’s not hard coded like in the first example is going to be processed by Vue, and Vue does the nice job of automatically prefixing the CSS for us. This allows us to write clean CSS while still targeting older browsers (which still means browsers that Vue supports, so IE9+).

Vue 将处理任何未像第一个示例中那样进行硬编码的 CSS，Vue 可以很好的为我们自动为 CSS 加上前缀。
这使得我们可以编写干净的 CSS，同时仍可以针对较旧的浏览器（这意味着 Vue 支持的浏览器，比如 IE9+）。

### Directives

### 指令

We saw in Vue.js templates and interpolations how you can embed data in Vue templates.

我们在 Vue.js 模板和插值中看到了如何在 Vue 模板中嵌入数据。

This section explains the other technique offered by Vue.js in templates: directives.

本节解释 Vue.js 在模板：指令中提供的其他技巧。

Directives are basically like HTML attributes which are added inside templates. They all start with  `v-`, to indicate that's a Vue special attribute.

指令基本上类似于在模板中添加的 HTML 属性。它们都是以 `v-` 开头，表示这是一个 Vue 特殊属性。

Let’s see each of the Vue directives in detail.

让我们详细查看每个 Vue 指令。

#### `v-text`

#### `v-text`

Instead of using interpolation, you can use the  `v-text`  directive. It performs the same job:

你可以使用 `v-text` 指令代替插值表达式。它执行想通的工作：

```
<span v-text="name"></span>
```

#### `v-once`
#### `v-once`
You know how  `{{ name }}`  binds to the  `name`  property of the component data.

你知道 `{{ name }}` 如何绑定到组件数据的 `name` 属性。

Any time  `name`  changes in your component data, Vue is going to update the value represented in the browser.

每当组件数据中的 `name` 发生改变时，Vue 将更新浏览器中表示的值。

Unless you use the  `v-once`  directive, which is basically like an HTML attribute:

除非你使用 `v-once` 指令，它基本上就像一个 HTML 属性：

```
<span v-once>{{ name }}</span>
```

#### `v-html`

#### `v-html`

When you use interpolation to print a data property, the HTML is escaped. This is a great way that Vue uses to automatically protect from XSS attacks.

当使用插值表达式打印数据属性时，HTML 将被转义。这是 Vue 用来自动防御 XSS 攻击的一个很好的方法。

There are cases, however, where you want to output HTML and make the browser interpret it. You can use the  `v-html`directive:

但是，在某些情况下，你希望输出 HTML 并让浏览器解释他，你可以使用 `v-html` 指令：

```
<span v-html="someHtml"></span>
```

#### `v-bind`

#### `v-bind`

Interpolation only works in the tag content. You can’t use it on attributes.

插值表达式只适用于标记内容。不能对属性使用它。

Attributes must use  `v-bind`:

属性必须使用 `v-bind`：

```
<a v-bind:href="url">{{ linkText }}</a>
```

`v-bind`  is so common that there is a shorthand syntax for it:

`v-bind` 非常的常见，它有一个简单的语法：

```
<a v-bind:href="url">{{ linkText }}</a><a :href="url">{{ linkText }}</a>
```

#### Two-way binding using  `v-model`

`v-model`  lets us bind a form input element for example, and makes it change the Vue data property when the user changes the content of the field:

例如，`v-model` 让我们绑定一个表单输入元素，并让它在用户更该字段内容时更改 Vue 数据属性。

```
<input v-model="message" placeholder="Enter a message"><p>Message is: {{ message }}</p>
```

```
<select v-model="selected">  <option disabled value="">Choose a fruit</option>  <option>Apple</option>  <option>Banana</option>  <option>Strawberry</option></select><span>Fruit chosen: {{ selected }}</span>
```

#### Using expressions

#### 使用表达式

You can use any JavaScript expression inside a directive:

你可以在指令里面使用任何 JavaScript 表达式。

```
<span v-text="'Hi, ' + name + '!'"></span>
```

```
<a v-bind:href="'https://' + domain + path">{{ linkText }}</a>
```

Any variable used in a directive references the corresponding data property.

指令中使用任何变量都引用相应的数据属性。

#### Conditionals
#### 条件

Inside a directive you can use the ternary operator to perform a conditional check, since that’s an expression:

在指令中，你可以使用三元运算符来执行条件检查，因为这是一个表达式：

```
<span v-text="name == Flavio ? 'Hi Flavio!' : 'Hi' + name + '!'"></span>
```

There are dedicated directives that allow you to perform more organized conditionals:  `v-if`,  `v-else`  and  `v-else-if`.

有一些专用指令允许你执行更有组织的条件语句： `v-if`，`v-else` 和 `v-else-if`

```
<p v-if="shouldShowThis">Hey!</p>
```

`shouldShowThis`  is a boolean value contained in the component's data.

`shouldShowThis` 是一个包含在组件数据中的布尔值。

#### Loops
#### 循环

`v-for`  allows you to render a list of items. Use it in combination with  `v-bind`  to set the properties of each item in the list.

`v-for` 允许你渲染一个项目列表。将它与 `v-bind` 结合使用来设置列表中每个项目的属性。

You can iterate on a simple array of values:

你可以迭代一个简单的数组的值：

```
<template>  <ul>    <li v-for="item in items">{{ item }}</li>  </ul></template>
```

```
<script>export default {  data() {    return {      items: ['car', 'bike', 'dog']    }  }}</script>
```

Or on an array of objects:
或对象数组：

```
<template>  <div>    <!-- using interpolation -->    <ul>      <li v-for="todo in todos">{{ todo.title }}</li>    </ul>    <!-- using v-text -->    <ul>      <li v-for="todo in todos" v-text="todo.title"></li>    </ul>  </div></template>
```

```
<script>export default {  data() {    return {      todos: [        { id: 1, title: 'Do something' },        { id: 2, title: 'Do something else' }      ]    }  }}</script>
```

`v-for`  can give you the index using:

`v-for` 可以给你的索引使用：

```
<li v-for="(todo, index) in todos"></li>
```

#### Events

#### 事件

`v-on`  allows you to listen to DOM events, and trigger a method when the event happens. Here we listen for a click event:

`v-on` 允许监听 DOM 事件，并在事件发生时触发一个方法。下面我们来监听一个点击事件：

```
<template>  <a v-on:click="handleClick">Click me!</a></template>
```

```
<script>export default {  methods: {    handleClick: function() {      alert('test')    }  }}</script>
```

You can pass parameters to any event:

你可以传递参数给任何事件：

```
<template>  <a v-on:click="handleClick('test')">Click me!</a></template>
```

```
<script>export default {  methods: {    handleClick: function(value) {      alert(value)    }  }}</script>
```

Small bits of JavaScript (a single expression) can be put directly into the template:

一小段 JavaScript（单个表达式）可以直接放入模板：

```
<template>  <a v-on:click="counter = counter + 1">{{counter}}</a></template>
```

```
<script>export default {  data: function() {    return {      counter: 0    }  }}</script>
```

`click`  is just one kind of event. A common event is  `submit`, which you can bind using  `v-on:submit`.

`点击` 只是一种事件。一个常见的事件是 `提交`，你可以使用 `v-on:submit` 绑定它。

`v-on`  is so common that there is a shorthand syntax for it,  `@`:

`v-on` 非常常见，它有一个简写语法 `@`：

```
<a v-on:click="handleClick">Click me!</a><a @click="handleClick">Click me!</a>
```

#### Show or hide

#### 显示或者隐藏

You can choose to only show an element in the DOM if a particular property of the Vue instance evaluates to true, using  `v-show`:

如果 Vue 实例的某个属性值为 true，可以使用 `v-show` 选择只显示 DOM 中的一个元素：

```
<p v-show="isTrue">Something</p>
```

The element is still inserted in the DOM, but set to  `display: none`  if the condition is not satisfied.

元素任然可以插入到 DOM 中，但如果条件不满足，则设置为 `display:none`。

#### Event directive modifiers
#### 事件指示修饰符

Vue offers some optional event modifiers you can use in association with  `v-on`, which automatically make the event do something without you explicitly coding it in your event handler.

Vue 提供了一些可选的事件修饰符，你可以将它们与 `v-on` 一起使用，这些修饰符可以自动执行某些操作，而无需在事件处理程序中显式的对其进行编码。

One good example is  `.prevent`, which automatically calls  `preventDefault()`  on the event.

一个很好的例子就是 `.prevent`，它会在事件中自动调用 `preventDefault`。

In this case, the form does not cause the page to be reloaded, which is the default behavior:

在这种情况下，该表单不会导致页面被重新加载，这是默认行为：

```
<form v-on:submit.prevent="formSubmitted"></form>
```

Other modifiers include  `.stop`,  `.capture`,  `.self`,  `.once`,  `.passive`  and they are  [described in detail in the official docs][51].

其它的修饰符包括 `.stop`， `.capture`， `.self`， `.once`， `.passive` 并且它们 [在官方文档中有详细说明][51]。

#### Custom directives

#### 自定义指令

The Vue default directives already let you do a lot of work, but you can always add new, custom directives if you want.

Vue 默认指令已经可以完成很多工作，但如果需要，你可以随时添加新的自定义指令。

Read  [here][52]  if you’re interested in learning more.

如果你有兴趣了解更多，请在[这里][52]阅读。

### Methods

### 方法

#### What are Vue.js methods?

#### 什么是 Vue.js 方法？

A Vue method is a function associated with the Vue instance.

Vue 方法是与 Vue 实例关联的函数。

Methods are defined inside the  `methods`  property:

方法在 `methods` 中定义：

```
new Vue({  methods: {    handleClick: function() {      alert('test')    }  }})
```

or in the case of Single File Components:

或者在 Single File Components（单文件组件）的情况下：

```
<script>export default {  methods: {    handleClick: function() {      alert('test')    }  }}</script>
```

Methods are especially useful when you need to perform an action and you attach a  `v-on`  directive on an element to handle events. Like this one, which calls  `handleClick`  when the element is clicked:

方法在需要执行某个操作并在元素上附加 `v-on` 指令以处理事件时特别有用。比如这个，当元素被点击时，它会调用 `handleClick`。

```
<template>  <a @click="handleClick">Click me!</a></template>
```

#### Pass parameters to Vue.js methods

#### 将参数传递给 Vue.js 方法

Methods can accept parameters.

方法可以接受参数。

In this case, you just pass the parameter in the template:

在这个示例中，你只需在模板中传递参数：

```
<template>  <a @click="handleClick('something')">Click me!</a></template>
```

```
new Vue({  methods: {    handleClick: function(text) {      alert(text)    }  }})
```

or in the case of Single File Components:

或对于 Single File Components（单文件组件）：

```
<script>export default {  methods: {    handleClick: function(text) {      alert(text)    }  }}</script>
```

#### How to access data from a method

#### 如何从方法访问数据

You can access any of the data properties of the Vue component by using  `this.propertyName`:

你可以通过使用 `this.propertyName` 来访问 Vue 组件的任何数据属性。

```
<template>  <a @click="handleClick()">Click me!</a></template>
```

```
<script>export default {  data() {    return {      name: 'Flavio'    }  },  methods: {    handleClick: function() {      console.log(this.name)    }  }}</script>
```

We don’t have to use  `this.data.name`, just  `this.name`. Vue does provide a transparent binding for us. Using  `this.data.name`  will raise an error.

我们不需要使用 `this.data.name`，而只需使用 `this.name`。Vue 确实为我们提供了一个透明的绑定。使用 `this.data.name` 将引发错误。

As you saw before in the  **events**  description, methods are closely interlinked to events, because they are used as event handlers. Every time an event occurs, that method is called.

正如你在前面的 **事件** 描述中看到的，方法与事件密切相关，因为它们被用作事件处理程序。每次发生事件时，都会调用该方法。

### Watchers
### 观察值

A watcher is a special Vue.js feature that allows you to spy on one property of the component state, and run a function when that property value changes.

监控程序是一个特殊的 Vue.js 特性，它允许你监视组件状态的一个属性，并在属性值改变时运行一个函数。

Here’s an example. We have a component that shows a name, and allows you to change it by clicking a button:

这里是一个例子。我们有一个组件，显示一个名称，并允许你通过点击按钮改变它。

```
<template>  <p>My name is {{name}}</p>  <button @click="changeName()">Change my name!</button></template>
```

```
<script>export default {  data() {    return {      name: 'Flavio'    }  },  methods: {    changeName: function() {      this.name = 'Flavius'    }  }}</script>
```

When the name changes we want to do something, like print a console log.

当名称发生变化时，我们需要做一些事情，比如打印控制台日志。

We can do so by adding to the  `watch`  object a property named as the data property we want to watch over:

为此，我们可以向 `watch` 对象添加一个属性，该属性名为我们想要监视的 data 属性：

```
<script>export default {  data() {    return {      name: 'Flavio'    }  },  methods: {    changeName: function() {      this.name = 'Flavius'    }  },  watch: {    name: function() {      console.log(this.name)    }  }}</script>
```

The function assigned to  `watch.name`  can optionally accept 2 parameters. The first is the new property value. The second is the old property value:

分配给 `watch.name` 的函数可以选择接受两个参数。第一个是新的属性值。第二个是旧的属性值：

```
<script>export default {  /* ... */  watch: {    name: function(newValue, oldValue) {      console.log(newValue, oldValue)    }  }}</script>
```

Watchers cannot be looked up from a template as you can with computed properties.

不能像使用计算属性那样从模板中查找观察者。

### Computed Properties
### 计算属性

#### What is a Computed Property

#### 什么是计算属性

In Vue.js you can output any data value using parentheses:

在 Vue.js 中，你可以使用括号输出任何数据的值:

```
<template>  <p>{{ count }}</p></template>
```

```
<script>export default {  data() {    return {      count: 1    }  }}</script>
```

This property can host some small computations. For example:

这个属性可以承载一些小型计算。例如：

```
<template>  {{ count * 10 }}</template>
```

But you’re limited to a single JavaScript  **expression**.

但是你只能使用一个 Javascript **表达式**。

In addition to this technical limitation, you also need to consider that templates should only be concerned with displaying data to the user, not perform logic computations.

除了这个技术限制外，你还需要考虑模板应该只关注向用户显示数据，而不是执行逻辑计算。

To do something more than a single expression, and to have more declarative templates, you use a computed property.

要执行比单个表达式更多的操作，并拥有更多的声明性模板，可以使用 computed 属性。

Computed properties are defined in the  `computed`  property of the Vue component:

计算属性在 Vue 组件的 `computed` 属性中的定义。

```
<script>export default {  computed: {
```

```
  }}</script>
```

#### An example of a computed property

#### 计算属性的一个示例

Here’s an example that uses a computed property  `count`  to calculate the output.

下面是一个使用 computed 属性 `count` 来计算输出的示例。

Notice:
声明：

1.  I didn’t have to call  `{{ count() }}`. Vue.js automatically invokes the function
2.  I used a regular function (not an arrow function) to define the  `count`  computed property, because I need to be able to access the component instance through  `this`.

1.我不必调用 `{{ count() }}`。Vue.js 自动调用该函数。
2.我是用了一个常规函数（不是箭头函数）来定义 `count` 计算属性，因为我需要能够通过 `this` 访问组件实例。

```
<template>  <p>{{ count }}</p></template>
```

```
<script>export default {  data() {    return {      items: [1, 2, 3]    }  },  computed: {    count: function() {      return 'The count is ' + this.items.length * 10    }  }}</script>
```

#### Computed properties vs. methods
#### 计算属性与方法

If you already know about Vue methods, you may wonder what’s the difference.

如果你已经了解了 Vue 方法，你可能想知道他们之间的区别。

First, methods must be called, not just referenced, so you’d need to do:

首先，方法必须被调用，而不只是引用，所以你需要做：

```
<template>  <p>{{ count() }}</p></template>
```

```
<script>export default {  data() {    return {      items: [1, 2, 3]    }  },  methods: {    count: function() {      return 'The count is ' + this.items.length * 10    }  }}</script>
```

But the main difference is that computed properties are cached.

但是主要的区别是计算属性被缓存。

The result of the  `count`  computed property is internally cached until the  `items`  data property changes.

`count` 计算属性的结果在内部缓存，直到 `items` 数据属性被更改。

**Important:**  Computed properties are only updated when a reactive source updates. Regular JavaScript methods are not reactive, so a common example is to use  `Date.now()`:

**重要：** 计算属性仅在响应源更新的时候更新。常规的 JavaScript 方法不是被动的，所以一个常见的例子是使用 `Date.now()` ：

```
<template>  <p>{{ now }}</p></template>
```

```
<script>export default {  computed: {    now: function () {      return Date.now()    }  }}</script>
```

It will render once, and then it will not be updated even when the component re-renders. It’s just updated on a page refresh, when the Vue component is quit and reinitialized.

它将渲染一次，然后即使在组件重新渲染时也不会更新。当 Vue 组件退出并重新初始化时，它只是在页面刷新时更新。

In this case, a method is better suited for your needs.

在这种情况下，方法更适合你的需要。

### Methods vs. Watchers vs. Computed Properties
### Methods、Watchers、和 Computed Properties
Now that you know about methods, watchers and computed properties, you might be wondering when should you use one vs the others.

现在你已经了解了方法、观察者和计算属性，你可能想知道什么时候应该使用一种方法，什么时候应该使用另一种方法。

Here’s a breakdown of this question.

这是该问题的细分。

#### When to use methods
#### 什么时候使用 methods

-   To react to some event happening in the DOM
-   To call a function when something happens in your component.  
    You can call a method from computed properties or watchers.

- 对 DOM 中发生的某些事件作出反应
- 当组件中发生某些事情时调用函数
  你可以从计算的属性或观察程序中调用方法
#### When to use computed properties
#### 什么时候使用计算属性
-   You need to compose new data from existing data sources
-   You have a variable you use in your template that’s built from one or more data properties
-   You want to reduce a complicated, nested property name to a more readable and easy to use one (but update it when the original property changes)
-   You need to reference a value from the template. In this case, creating a computed property is the best thing, because it’s cached.
-   You need to listen to changes of more than one data property

- 你需要从现有数据源组合新数据
- 你在模板中使用了一个由一个货多个数据属性构建的变量
- 你希望将复杂的、嵌套的属性名简化为更易阅读和使用的名称（但在原始属性更改时更新）
- 你需要从模板引用一个值。在这种情况下，最好创建一个 computed 属性，因为它是缓存的
- 你需要监听多个数据属性的更改
#### When to use watchers
#### 什么时候使用观察者
-   You want to listen when a data property changes, and perform some action
-   You want to listen to a prop value change
-   You only need to listen to one specific property (you can’t watch multiple properties at the same time)
-   You want to watch a data property until it reaches some specific value and then do something

- 你希望在数据属性更改时监听，并执行一些操作
- 你想要监听 prop 值的改变
- 你只需要监听一个特定的属性（你不能同时监听多个属性）
- 你希望监听一个数据属性，直到它达到某个特定值，然后再做一些事情

### Props: pass data to child components

### Props： 将数据传递给子组件

Props are the way components can accept data from components that include them (parent components).

Props 是组件从包含它们的组件（父组件）接受数据的方式。

When a component expects one or more prop, it must define them in its  `props`property:

当一个组件需要一个或多个 prop 时，它必须在 `props` 属性中定义它们：

```
Vue.component('user-name', {  props: ['name'],  template: '<p>Hi {{ name }}</p>'})
```

or, in a Vue Single File Component:

或者，在一个 Vue Single File Component(单文件组件)中：

```
<template>  <p>{{ name }}</p></template>
```

```
<script>export default {  props: ['name']}</script>
```

#### Accept multiple props
#### 允许多个 props
You can have multiple props by simply appending them to the array:

你可以拥有多个 props，只需要把他们添加到数组：

```
Vue.component('user-name', {  props: ['firstName', 'lastName'],  template: '<p>Hi {{ firstName }} {{ lastName }}</p>'})
```

#### Set the prop type
#### 设置 prop 类型

You can specify the type of a prop very simply by using an object instead of an array, using the name of the property as the key of each property, and the type as the value:

你可以很简单的指定一个 prop 的类型，使用一个对象而不是数组，使用属性的名称作为每个属性的键，类型作为值：

```
Vue.component('user-name', {  props: {    firstName: String,    lastName: String  },  template: '<p>Hi {{ firstName }} {{ lastName }}</p>'})
```

The valid types you can use are:

你可以使用有效的类型是：

-   String
-   Number
-   Boolean
-   Array
-   Object
-   Date
-   Function
-   Symbol

When a type mismatches, Vue alerts you (in development mode) in the console with a warning.

当类型不匹配时，Vue 会在控制台中警告你（在开发模式下）。

Prop types can be more articulated.

Prop 类型可以更加明确。

You can allow multiple different value types:

你可以允许多种不同类型的值：

```
props: {  firstName: [String, Number]}
```

#### Set a prop to be mandatory
#### 设置一个 prop 为强制性的
You can require a prop to be mandatory:

你可以要求一个 prop 是强制性的：

```
props: {  firstName: {    type: String,    required: true  }}
```

#### Set the default value of a prop
#### 设置 prop 的默认值
You can specify a default value:

你可以指定一个默认值

```
props: {  firstName: {    type: String,    default: 'Unknown person'  }}
```

For objects:
对象

```
props: {  name: {    type: Object,    default: {      firstName: 'Unknown',      lastName: ''    }  }}
```

`default`  can also be a function that returns an appropriate value, rather than being the actual value.

`default` 也可以是一个返回适当值的函数，而不是实际值。

You can even build a custom validator, which is cool for complex data:

你甚至可以建立一个自定义验证，该验证器对复杂数据很酷：

```
props: {  name: {    validator: name => {      return name === 'Flavio' //only allow "Flavios"    }  }}
```

#### Passing props to the component
#### 将 props 传递到组件
You pass a prop to a component using the syntax
你使用语法将一个 prop 传递给组件。
```
<ComponentName color="white" />
```

if what you pass is a static value.

如果传递的是一个静态值。

If it’s a data property, you use

如果是数据属性，则使用

```
<template>  <ComponentName :color=color /></template>
```

```
<script>...export default {  //...  data: function() {    return {      color: 'white'    }  },  //...}</script>
```

You can use a ternary operator inside the prop value to check a truthy condition and pass a value that depends on it:

你可以在 prop 的值中使用三元运算符来检查一个真实的条件，并传递一个依赖于它的值：

```
<template>  <ComponentName :colored="color == 'white' ? true : false" /></template>
```

```
<script>...export default {  //...  data: function() {    return {      color: 'white'    }  },  //...}</script>
```

### Handling Events in Vue
### 在 Vue 中处理事件

#### What are Vue.js events?
#### 什么是 Vue.js 事件？

Vue.js allows us to intercept any DOM event by using the  `v-on`  directive on an element.

Vue.js 允许我们通过在一个元素上使用 `v-on` 指令来拦截任何 DOM 事件。

If we want to do something when a click event happens in this element:

如果我们想做某事时，点击事件发生在这个元素：

```
<template>  <a>Click me!</a></template>
```

we add a  `v-on`  directive:

我们添加一个 `v-on` 指令：

```
<template>  <a v-on:click="handleClick">Click me!</a></template>
```

Vue also offers a very convenient alternative syntax for this:

Vue 还提供了一个非常方便的替代语法：

```
<template>  <a @click="handleClick">Click me!</a></template>
```

You can choose to use the parentheses or not.  `@click="handleClick"`  is equivalent to  `@click="handleClick()"`.

你可以选择是否使用圆括号。  `@click="handleClick"` 相当于 `@click="handleClick()"`。

`handleClick`  is a method attached to the component:

`handleClick` 是一个附加在组件上的方法

```
<script>export default {  methods: {    handleClick: function(event) {      console.log(event)    }  }}</script>
```

What you need to know here is that you can pass parameters from events:  `@click="handleClick(param)"`  and they will be received inside the method.

这里需要知道的是，可以从事件传递参数  `@click="handleClick(param)"`， 并且它们将在这个方法里面呗接收。

#### Access the original event object
#### 访问原始事件对象

In many cases, you will want to perform an action on the event object or look up some property in it. How can you access it?

在许多情况下，你将希望对事件对象执行操作或在其中查找某些属性。如何访问它？

Use the special  `$event`  directive:

使用特殊的 `$event` 指令：

```
<template>  <a @click="handleClick($event)">Click me!</a></template>
```

```
<script>export default {  methods: {    handleClick: function(event) {      console.log(event)    }  }}</script>
```

and if you already pass a variable:

或者你已经传递了一个变量：

```
<template>  <a @click="handleClick('something', $event)">Click me!</a></template>
```

```
<script>export default {  methods: {    handleClick: function(text, event) {      console.log(text)      console.log(event)    }  }}</script>
```

From there you could call  `event.preventDefault()`, but there's a better way: event modifiers.

从这里你可以调用 `event.preventDefault()`,但是有一个更好的方法：事件修饰符。

#### Event modifiers
#### 事件修改器

Instead of messing with DOM “things” in your methods, tell Vue to handle things for you:

不要在你的方法中使用 DOM "事务"，而是告诉 Vue 为你处理事情

-   `@click.prevent`  call  `event.preventDefault()`
-   `@click.stop`  call  `event.stopPropagation()`
-   `@click.passive`  makes use of the  [passive option of addEventListener][53]
-   `@click.capture`  uses event capturing instead of event bubbling
-   `@click.self`  make sure the click event was not bubbled from a child event, but directly happened on that element
-   `@click.once`  the event will only be triggered exactly once

-   `@click.prevent`  调用  `event.preventDefault()`
-   `@click.stop`  调用  `event.stopPropagation()`
-   `@click.passive` 使用 [addEventListener 的被动选项][53]
-   `@click.capture` 使用事件捕获而不是事件冒泡
-   `@click.self`  确保单击事件不是从子事件冒泡，而是直接发生在该元素上
-   `@click.once`  事件只会被触发一次

All those options can be combined by appending one modifier after the other.

所有的这些选项都可以通过添加一个修饰符来组合。

For more on propagation, bubbling and capturing, see my  [JavaScript events guide][54].

有关 传播、冒泡和捕获的更多信息，请参见我的 [JavaScript 事件指南][54]

### Inject content using slots

### 使用插槽注入内容

A component can choose to define its content entirely, like in this case:

组件可以选择完全定义其内容，就像在这种情况下：

```
Vue.component('user-name', {  props: ['name'],  template: '<p>Hi {{ name }}</p>'})
```

Or it can also let the parent component inject any kind of content into it, by using slots.

或者，它还可以让父组件使用插槽将其任何类型的内容诸如其中。

What’s a slot?
什么是插槽？

You define it by putting  `<slot>&`lt;/slot> in a component template:

通过在组件模板中放入 `<slot></slot>` 来定义它：

```
Vue.component('user-information', {  template: '<div class="user-information"><slot></slot></div>'})
```

When using this component, any content added between the opening and closing tag will be added inside the slot placeholder:

使用该组件时，在开始和结束标签之间添加的任何内容都将添加到插槽占位符中：

```
<user-information>  <h2>Hi!</h2>  <user-name name="Flavio"></user-information>
```

If you put any content side the  `<slot>&`lt;/slot> tags, that serves as the default content in case nothing is passed in.

如果你将任何内容放在 `<slot></slot>` 标记中，这将作为默认内容，以防没有任何内容传入。

A complicated component layout might require a better way to organize content.

一个复杂的组件布局可能需要更好的方式来组织内容。

Enter  **named slots**.

输入 **命名插槽**

With a named slot, you can assign parts of a slot to a specific position in your component template layout, and you use a  `slot`  attribute to any tag, to assign content to that slot.

使用命名插槽，你可以将插槽的部分分配到模板布局中的特定位置，并且可以对任何标记使用 `插槽` 属性来将内容分配到该插槽。

Anything outside any template tag is added to the main  `slot`.

任何模板标签之外的任何东西都会被添加到主 `插槽` 中。

For convenience, I use a  `page`  single file component in this example:

为了方便，我在这个例子中使用了一个 `页面` 的单文件组件。

```
<template>  <div>    <main>      <slot></slot>    </main>    <sidebar>      <slot name="sidebar"></slot>    </sidebar>  </div></template>
```

```
<page>  <ul slot="sidebar">    <li>Home</li>    <li>Contact</li>  </ul>
```

```
  <h2>Page title</h2>  <p>Page content</p></page>
```

### Filters, helpers for templates

### 过滤器，模板的帮助程序

Filters are a functionality provided by Vue components that let you apply formatting and transformations to any part of your template dynamic data.

过滤器是 Vue 组件提供的一种功能，它允许你对模板动态数据的任何部分应用格式化和转换。

They don’t change a component’s data or anything, but they only affect the output.

他们不会改变组件的数据或任何东西，但他们只影响输出。

Say you are printing a name:

假设你正在打印一个名字：

```
<template>  <p>Hi {{ name }}!</p></template>
```

```
<script>export default {  data() {    return {      name: 'Flavio'    }  }}</script>
```

What if you want to check that  `name`  is actually containing a value, and if not print 'there', so that our template will print "Hi there!"?

如果你想要检查 `name` 是否实际包含一个值，如果没有则打印 ’there‘，那么我们的模板将打印 “Hi there！”？

Enter filters:

输入过滤器：

```
<template>  <p>Hi {{ name | fallback }}!</p></template>
```

```
<script>export default {  data() {    return {      name: 'Flavio'    }  },  filters: {    fallback: function(name) {      return name ? name : 'there'    }  }}</script>
```

Notice the syntax to apply a filter, which is  `| filterName`. If you're familiar with Unix, that's the Unix pipe operator, which is used to pass the output of an operation as an input to the next one.

注意应用过滤器的语法，它是 `| filterName`。如果你熟悉 Unix，那就是 Unix 管理操作符，它用于将操作的输出做为输入传递给下一个操作。

The  `filters`  property of the component is an object. A single filter is a function that accepts a value and returns another value.

组件的 `过滤器` 属性是一个对象。单个过滤器是接受一个值并返回另一个值的函数。

The returned value is the one that’s actually printed in the Vue.js template.

返回的值实际上是在 Vue.js 模板中打印的值。

The filter, of course, has access to the component data and methods.

当然，过滤器可以访问组件数据的方法。

What’s a good use case for filters?

过滤器的良好用例是什么？

-   transforming a string, for example, capitalizing or making it lowercase
-   formatting a price

- 转换字符串，例如，大写或将其小写
- 格式化金额
Above you saw a simple example of a filter:  `{{ name | fallback }}`.

上面你看到了一个简单的过滤器示例：`{{ name | fallback }}`

Filters can be chained, by repeating the pipe syntax:

过滤器通过重复的管道语法链接：

```
{{ name | fallback | capitalize }}
```

This first applies the  `fallback`  filter, then the  `capitalize`  filter (which we didn't define, but try making one!).

这首先应用 `fallback` 过滤器，然后应用 `capitalize` 过滤器（我们没有定义它，但试着做一个）。

Advanced filters can also accept parameters, using the normal function parameters syntax:

高级过滤器也可以接受参数，使用正常的函数参数语法：

```
<template>  <p>Hello {{ name | prepend('Dr.') }}</p></template>
```

```
<script>export default {  data() {    return {      name: 'House'    }  },  filters: {    prepend: (name, prefix) => {      return `${prefix} ${name}`    }  }}</script>
```

If you pass parameters to a filter, the first one passed to the filter function is always the item in the template interpolation (`name`  in this case), followed by the explicit parameters you passed.

如果将参数传递给过滤器，则传递给过滤器函数的第一个参数总是模板插值表达式中的项（在本例中为 `name`），然后传递显式的参数。

You can use multiple parameters by separating them using a comma.

你可以使用逗号分隔多个参数。

Notice I used an arrow function. We avoid arrow functions in methods and computed properties, generally, because they almost always reference  `this`  to access the component data. But in this case, the filter does not need to access  `this`  but receives all the data it needs through the parameters, and we can safely use the simpler arrow function syntax.

注意我用了一个箭头函数。通常，我们在方法和计算属性中避免使用箭头函数，因为他们几乎总是引用 `this` 来访问组件数据。但是在这种情况下，过滤器不需要访问 `this`，而是通过参数接收它需要的所有数据，我们可以安全的使用更简单的箭头函数语法。

[This package][55]  has a lot of pre-made filters for you to use directly in templates, which include  `capitalize`,  `uppercase`,  `lowercase`,  `placeholder`,  `truncate`,  `currency`,  `pluralize`  and more.

[这个包][55]有很多预先设置的过滤器，你可以直接在模板中使用，包括  `capitalize`,  `uppercase`,  `lowercase`,  `placeholder`,  `truncate`,  `currency`,  `pluralize` 等等。

### Communication among components

### 组件之间的通信

Components in Vue can communicate in various ways.

Vue 中的组件可以以各种方式进行通信

#### Using Props

#### 使用 Props
The first way is by using props.

第一个方法是使用 props

Parents “pass down” data by adding arguments to the component declaration:

父类通过向组件声明中添加参数来 “传递” 数据：

```
<template>  <div>    <Car color="green" />  </div></template>
```

```
<script>import Car from './components/Car'
```

```
export default {  name: 'App',  components: {    Car  }}</script>
```

Props are one-way: from parent to child. Any time the parent changes the prop, the new value is sent to the child and re-rendered.

Props 是单向的：从父母到孩子。每当父元素更改了这个 prop，新的值就会被发送给子元素并重新渲染。

The reverse is not true, and you should never mutate a prop inside the child component.

反之则不正确，并且你不应该在子组件中更改 prop。

#### Using Events to communicate from children to parent

#### 使用事件从子对象到父对象进行通信

Events allow you to communicate from the children up to the parent:

事件允许你从子到父的沟通：

```
<script>export default {  name: 'Car',  methods: {    handleClick: function() {      this.$emit('clickedSomething')    }  }}</script>
```

The parent can intercept this using the  `v-on`  directive when including the component in its template:

当模板中包含组件时，父级可以使用 `v-on` 指令来拦截：

```
<template>  <div>    <Car v-on:clickedSomething="handleClickInParent" />    <!-- or -->    <Car @clickedSomething="handleClickInParent" />  </div></template>
```

```
<script>export default {  name: 'App',  methods: {    handleClickInParent: function() {      //...    }  }}</script>
```

You can pass parameters of course:

当然你可以传递参数：

```
<script>export default {  name: 'Car',  methods: {    handleClick: function() {      this.$emit('clickedSomething', param1, param2)    }  }}</script>
```

and retrieve them from the parent:
并在父级取得：

```
<template>  <div>    <Car v-on:clickedSomething="handleClickInParent" />    <!-- or -->    <Car @clickedSomething="handleClickInParent" />  </div></template>
```

```
<script>export default {  name: 'App',  methods: {    handleClickInParent: function(param1, param2) {      //...    }  }}</script>
```

#### Using an Event Bus to communicate between any components

#### 使用 Event Bus 在任何组件之间通信

Using events you’re not limited to child-parent relationships. You can use the so-called Event Bus.

使用事件，你不局限于子-父关系。你可以使用所谓的 Event Bus。

Above we used  `this.$emit`  to emit an event on the component instance.

上面我们使用 `this.$emit` 来广播组件实例上的事件。

What we can do instead is to emit the event on a more generally accessible component.

我们可以做的是在一个更容易访问的组件上广播事件。

`this.$root`, the root component, is commonly used for this.

`this.$root`，即根组件，通常用于此目的。

You can also create a Vue component dedicated to this job, and import it where you need.

你还可以创建专用于此工作的 Vue 组件，并在需要的地方导入它。

```
<script>export default {  name: 'Car',  methods: {    handleClick: function() {      this.$root.$emit('clickedSomething')    }  }}</script>
```

Any other component can listen for this event. You can do so in the  `mounted`  callback:

任何其它组件都可以监听此事件。你可以 `mounted` 中这样做：

```
<script>export default {  name: 'App',  mounted() {    this.$root.$on('clickedSomething', () => {      //...    })  }}</script>
```

This is what Vue provides out of the box.

这就是 Vue 提供的开箱即用的功能。

When you outgrow this, you can look into Vuex or other 3rd part libraries.

当你（的需求）超出这个范围时，你可以看看 Vuex 或其他第三方的库。

### Manage state using Vuex

### 使用 Vuex 管理状态

Vuex is the official state management library for Vue.js.

Its job is to share data across the components of your application.

Components in Vue.js out of the box can communicate using

-   props, to pass state down to child components from a parent
-   events, to change the state of a parent component from a child, or using the root component as an event bus

Sometimes things get more complex than what these simple options allow.

In this case, a good option is to centralize the state in a single store. This is what Vuex does.

#### Why should you use Vuex?

Vuex is not the only state management option you can use in Vue (you can use  [Redux][56]too), but its main advantage is that it’s official, and its integration with Vue.js is what makes it shine.

With React you have the trouble of having to choose one of the many libraries available, as the ecosystem is huge and has no actual standard. Lately Redux was the most popular choice, with  [MobX][57]  following up in terms of popularity. With Vue I’d go as far as to say that you won’t need to look around for anything other than Vuex, especially when starting out.

Vuex borrowed many of its ideas from the React ecosystem, as this is the Flux pattern popularized by Redux.

If you know Flux or Redux already, Vuex will be very familiar. If you don’t, no problem — I’ll explain every concept from the ground up.

Components in a Vue application can have their own state. For example, an input box will store the data entered into it locally. This is perfectly fine, and components can have local state even when using Vuex.

You know that you need something like Vuex when you start doing a lot of work to pass a piece of state around.

In this case, Vuex provides a central repository store for the state, and you mutate the state by asking the store to do that.

Every component that depends on a particular piece of the state will access it using a getter on the store, which makes sure it’s updated as soon as that thing changes.

Using Vuex will introduce some complexity into the application, as things need to be set up in a certain way to work correctly. But if this helps solve the unorganized props passing and event system that might grow into a spaghetti mess if too complicated, then it’s a good choice.

#### Let’s start

In this example, I’m starting from a Vue CLI application. Vuex can be used also by directly loading it into a script tag. But, since Vuex is more in tune with bigger applications, it’s much more likely you will use it on a more structured application, like the ones you can start up quickly with the Vue CLI.

The examples I use will be put CodeSandbox, which is a great service that has a Vue CLI  [sample][58]  ready to go. I recommend using it to play around.

![](https://cdn-media-1.freecodecamp.org/images/hoB1Mu8Q1Py50t5Es5EKze26BsJOApMhEWVh)

Once you’re there, click the Add dependency button, enter “vuex” and click it.

Now Vuex will be listed in the project dependencies.

To install Vuex locally you can simply run  `npm install vuex`  or  `yarn add vuex`  inside the project folder.

#### Create the Vuex store

Now we are ready to create our Vuex store.

This file can be put anywhere. It’s generally suggested to put it in the  `src/store/store.js`  file, so we'll do that.

In this file we initialize Vuex and tell Vue to use it:

```
import Vue from 'vue'import Vuex from 'vuex'
```

```
Vue.use(Vuex)
```

```
export const store = new Vuex.Store({})
```

![](https://cdn-media-1.freecodecamp.org/images/p2kPCCKdhaHsHfXd4Nti975YVgvKMnbHbMRd)

We export a Vuex store object, which we create using the  `Vuex.Store()`  API.

#### A use case for the store

Now that we have a skeleton in place, let’s come up with an idea for a good use case for Vuex, so I can introduce its concepts.

For example, I have two sibling components, one with an input field, and one that prints that input field content.

When the input field is changed, I want to also change the content in that second component. Very simple, but this will do the job for us.

#### Introducing the new components we need

I delete the HelloWorld component and add a Form component, and a Display component.

```
<template>  <div>    <label for="flavor">Favorite ice cream flavor?</label>    <input name="flavor">  </div></template>
```

```
<template>  <div>    <p>You chose ???</p>  </div></template>
```

#### Adding those components to the app

We add them to the  `App.vue`  code instead of the HelloWorld component:

```
<template>  <div id="app">    <Form/>    <Display/>  </div></template>
```

```
<script>import Form from './components/Form'import Display from './components/Display'
```

```
export default {  name: 'App',  components: {    Form,    Display  }}</script>
```

#### Add the state to the store

So with this in place, we go back to the store.js file. We add a property to the store called  `state`, which is an object, that contains the  `flavor`  property. That's an empty string initially.

```
import Vue from 'vue'import Vuex from 'vuex'
```

```
Vue.use(Vuex)
```

```
export const store = new Vuex.Store({  state: {    flavor: ''  }})
```

We’ll update it when the user types into the input field.

#### Add a mutation

The state cannot be manipulated except by using mutations. We set up one mutation which will be used inside the  `Form`  component to notify the store that the state should change.

```
import Vue from 'vue'import Vuex from 'vuex'
```

```
Vue.use(Vuex)
```

```
export const store = new Vuex.Store({  state: {    flavor: ''  },  mutations: {    change(state, flavor) {      state.flavor = flavor    }  }})
```

#### Add a getter to reference a state property

With that set, we need to add a way to look at the state. We do so using getters. We set up a getter for the  `flavor`property:

```
import Vue from 'vue'import Vuex from 'vuex'
```

```
Vue.use(Vuex)
```

```
export const store = new Vuex.Store({  state: {    flavor: ''  },  mutations: {    change(state, flavor) {      state.flavor = flavor    }  },  getters: {    flavor: state => state.flavor  }})
```

Notice how  `getters`  is an object.  `flavor`  is a property of this object, which accepts the state as the parameter, and returns the  `flavor`  property of the state.

#### Adding the Vuex store to the app

Now the store is ready to be used. We go back to our application code, and in the main.js file, we need to import the state and make it available in our Vue app.

We add

```
import { store } from './store/store'
```

and we add it to the Vue application:

```
new Vue({  el: '#app',  store,  components: { App },  template: '<App/>'})
```

Once we add this, since this is the main Vue component, the  `store`  variable inside every Vue component will point to the Vuex store.

#### Update the state on a user action using commit

Let’s update the state when the user types something.

We do so by using the  `store.commit()`  API.

But first, let’s create a method that is invoked when the input content changes. We use  `@input`  rather than  `@change`because the latter is only triggered when the focus is moved away from the input box, while  `@input`  is called on every keypress.

```
<template>  <div>    <label for="flavor">Favorite ice cream flavor?</label>    <input @input="changed" name="flavor">  </div></template>
```

```
<script>export default {  methods: {    changed: function(event) {      alert(event.target.value)    }  }}</script>
```

Now that we have the value of the flavor, we use the Vuex API:

```
<script>export default {  methods: {    changed: function(event) {      this.$store.commit('change', event.target.value)    }  }}</script>
```

See how we reference the store using  `this.$store`? This is thanks to the inclusion of the  `store`  object in the main Vue component initialization.

The  `commit()`  method accepts a mutation name (we used  `change`  in the Vuex store) and a payload, which will be passed to the mutation as the second parameter of its callback function.

#### Use the getter to print the state value

Now we need to reference the getter of this value in the Display template, by using  `$store.getters.flavor`.  `this`  can be removed because we're in the template, and  `this`  is implicit.

```
<template>  <div>    <p>You chose {{ $store.getters.flavor }}</p>  </div></template>
```

The full, working source code is available  [here][59].

There are still many concepts missing in this puzzle:

-   actions
-   modules
-   helpers
-   plugins

But now you have the basics to go and read about them in the official docs.

### Handle URLs using Vue Router

In a JavaScript web application, a router is the part that syncs the currently displayed view with the browser address bar content.

In other words, it’s the part that makes the URL change when you click something in the page, and helps to show the correct view when you hit a specific URL.

Traditionally, the Web is built around URLs. When you hit a certain URL, a specific page is displayed.

With the introduction of applications that run inside the browser and change what the user sees, many applications broke this interaction, and you had to manually update the URL with the browser’s History API.

You need a router when you need to sync URLs to views in your app. It’s a very common need, and all the major modern frameworks now allow you to manage routing.

The Vue Router library is the way to go for Vue.js applications. Vue does not enforce the use of this library. You can use whatever generic routing library you want, or also create your own History API integration, but the benefit of using Vue Router is that it’s official.

This means it’s maintained by the same people who maintain Vue, so you get a more consistent integration in the framework, and the guarantee that it’s always going to be compatible in the future, no matter what.

#### Installation

Vue Router is available via npm with the package named  `vue-router`.

If you use Vue via a script tag, you can include Vue Router using

```
<script src="https://unpkg.com/vue-router"></script>
```

[UNPKG][60]  is a very handy tool that makes every npm package available in the browser with a simple link.

If you use the Vue CLI, install it using:

```
npm install vue-router
```

Once you install  `vue-router`  and make it available either using a script tag or via Vue CLI, you can now import it in your app.

You import it after  `vue`, and you call  `Vue.use(VueRouter)`  to  **install**  it inside the app:

```
import Vue from 'vue'import VueRouter from 'vue-router'
```

```
Vue.use(VueRouter)
```

After you call  `Vue.use()`  passing the router object, in any component of the app you have access to these objects:

-   `this.$router`  is the router object
-   `this.$route`  is the current route object

#### The router object

The router object, accessed using  `this.$router`  from any component when the Vue Router is installed in the root Vue component, offers many nice features.

We can make the app navigate to a new route using

-   `this.$router.push()`
-   `this.$router.replace()`
-   `this.$router.go()`

which resemble the  `pushState`,  `replaceState`  and  `go`  methods of the History API.

-   `push()`  is used to go to a new route, adding a new item to the browser history
-   `replace()`  is the same, except it does not push a new state to the history

Usage samples:

```
this.$router.push('about') //named route, see laterthis.$router.push({ path: 'about' })this.$router.push({ path: 'post', query: { post_slug: 'hello-world' } }) //using query parameters (post?post_slug=hello-world)this.$router.replace({ path: 'about' })
```

`go()`  goes back and forth, accepting a number that can be positive or negative to go back in the history:

```
this.$router.go(-1) //go back 1 stepthis.$router.go(1) //go forward 1 step
```

#### Defining the routes

I’m using a Vue Single File Component in this example.

In the template I use a  `nav`  tag that has three  `router-link`  components, which have the labels Home, Login, and About. A URL is assigned through the  `to`  attribute.

The  `router-view`  component is where the Vue Router will put the content that matches the current URL.

```
<template>  <div id="app">    <nav>      <router-link to="/">Home</router-link>      <router-link to="/login">Login</router-link>      <router-link to="/about">About</router-link>    </nav>    <router-view></router-view>  </div></template>
```

A  `router-link`  component renders an  `a`  tag by default (you can change that). Every time the route changes, either by clicking a link or by changing the URL, a  `router-link-active`  class is added to the element that refers to the active route, allowing you to style it.

In the JavaScript part, we first include and install the router, then we define three route components.

We pass them to the initialization of the  `router`  object, and we pass this object to the Vue root instance.

Here’s the code:

```
<script>import Vue from 'vue'import VueRouter from 'vue-router'
```

```
Vue.use(Router)
```

```
const Home  = {  template: '<div>Home</div>'}
```

```
const Login = {  template: '<div>Login</div>'}
```

```
const About = {  template: '<div>About</div>'}
```

```
const router = new VueRouter({  routes: [    { path: '/', component: Home },    { path: '/login', component: Login },    { path: '/about', component: About }  ]})
```

```
new Vue({  router}).$mount('#app')</script>
```

Usually, in a Vue app, you instantiate and mount the root app using:

```
new Vue({  render: h => h(App)}).$mount('#app')
```

When using the Vue Router, you don’t pass a  `render`  property but instead, you use  `router`.

The syntax used in the above example:

```
new Vue({  router}).$mount('#app')
```

is shorthand for:

```
new Vue({  router: router}).$mount('#app')
```

See in the example, we pass a  `routes`  array to the  `VueRouter`  constructor. Each route in this array has a  `path`  and  `component`  params.

If you pass a  `name`  param too, you have a named route.

#### Using named routes to pass parameters to the router push and replace methods

Remember how we used the Router object to push a new state before?

```
this.$router.push({ path: 'about' })
```

With a named route we can pass parameters to the new route:

```
this.$router.push({ name: 'post', params: { post_slug: 'hello-world' } })
```

The same goes for  `replace()`:

```
this.$router.replace({ name: 'post', params: { post_slug: 'hello-world' } })
```

#### What happens when a user clicks a  `router-link?`

The application will render the route component that matches the URL passed to the link.

The new route component that handles the URL is instantiated and its guards called, and the old route component will be destroyed.

#### Route guards

Since we mentioned guards, let’s introduce them.

You can think of them as life cycle hooks or middleware. Those are functions called at specific times during the execution of the application. You can jump in and alter the execution of a route, redirecting or simply canceling the request.

You can have global guards by adding a callback to the  `beforeEach()`  and  `afterEach()`property of the router.

-   `beforeEach()`  is called before the navigation is confirmed
-   `beforeResolve()`  is called when  `beforeEach()`  is executed and all the components  `beforeRouterEnter`  and  `beforeRouteUpdate`  guards are called, but before the navigation is confirmed. The final check.
-   `afterEach()`  is called after the navigation is confirmed

What does “the navigation is confirmed” mean? We’ll see it in a second. In the meantime think of it as “the app can go to that route”.

The usage is:

```
this.$router.beforeEach((to, from, next) => {  // ...})
```

```
this.$router.afterEach((to, from) => {  // ...})
```

`to`  and  `from`  represent the route objects that we go to and from.

`beforeEach`  has an additional parameter  `next`  which if we call with  `false`  as the parameter, will block the navigation and cause it to be unconfirmed.

Like in Node middleware, if you're familiar,  `next()`  should always be called, otherwise execution will get stuck.

Single route components also have guards:

-   `beforeRouteEnter(from, to, next)`  is called before the current route is confirmed
-   `beforeRouteUpdate(from, to, next)`  is called when the route changes but the component that manages it is still the same (with dynamic routing, see  `next`)
-   `beforeRouteLeave(from, to, next)`  is called when we move away from here

We mentioned navigation. To determine if the navigation to a route is confirmed, Vue Router performs some checks:

-   it calls  `beforeRouteLeave`  guard in the current component(s)
-   it calls the router  `beforeEach()`  guard
-   it calls the  `beforeRouteUpdate()`  in any component that needs to be reused, if any exist
-   it calls the  `beforeEnter()`  guard on the route object (I didn't mention it but you can look  [here][61])
-   it calls the  `beforeRouterEnter()`  in the component that we should enter into
-   it calls the router  `beforeResolve()`  guard
-   if all was fine, the navigation is confirmed!
-   it calls the router  `afterEach()`  guard

You can use the route-specific guards (`beforeRouteEnter`  and  `beforeRouteUpdate`  in case of dynamic routing) as life cycle hooks, so you can start data fetching requests for example.

#### Dynamic routing

The example above shows a different view based on the URL, handling the  `/`,  `/login`and  `/about`  routes.

A very common need is to handle dynamic routes, like having all posts under  `/post/`, each with the slug name:

-   `/post/first`
-   `/post/another-post`
-   `/post/hello-world`

You can achieve this using a dynamic segment.

Those were static segments:

```
const router = new VueRouter({  routes: [    { path: '/', component: Home },    { path: '/login', component: Login },    { path: '/about', component: About }  ]})
```

We add in a dynamic segment to handle blog posts:

```
const router = new VueRouter({  routes: [    { path: '/', component: Home },    { path: '/post/:post_slug', component: Post },    { path: '/login', component: Login },    { path: '/about', component: About }  ]})
```

Notice the  `:post_slug`  syntax. This means that you can use any string, and that will be mapped to the  `post_slug`placeholder.

You’re not limited to this kind of syntax. Vue relies on  [this library][62]  to parse dynamic routes, and you can go wild with Regular Expressions.

Now inside the Post route component we can reference the route using  `$route`, and the post slug using  `$route.params.post_slug`:

```
const Post = {  template: '<div>Post: {{ $route.params.post_slug }}</div>'}
```

We can use this parameter to load the contents from the back-end.

You can have as many dynamic segments as you want, in the same URL:

`/post/:author/:post_slug`

Remember before when we talked about what happens when a user navigates to a new route?

In the case of dynamic routes, what happens is a little different.

For Vue to be more efficient, instead of destroying the current route component and re-instantiating it, it reuses the current instance.

When this happens, Vue calls the  `beforeRouteUpdate`  life cycle event.

There you can perform any operation you need:

```
const Post = {  template: '<div>Post: {{ $route.params.post_slug }}</div>'  beforeRouteUpdate(to, from, next) {    console.log(`Updating slug from ${from} to ${to}`)    next() //make sure you always call next()  }}
```

#### Using props

In the examples, I used  `$route.params.*`  to access the route data. A component should not be so tightly coupled with the router, and instead, we can use props:

```
const Post = {  props: ['post_slug'],  template: '<div>Post: {{ post_slug }}</div>'}
```

```
const router = new VueRouter({  routes: [    { path: '/post/:post_slug', component: Post, props: true }  ]})
```

Notice the  `props: true`  passed to the route object to enable this functionality.

#### Nested routes

Before I mentioned that you can have as many dynamic segments as you want, in the same URL, like:

`/post/:author/:post_slug`

So, say we have an Author component taking care of the first dynamic segment:

```
<template>  <div id="app">    <router-view></router-view>  </div></template>
```

```
<script>import Vue from 'vue'import VueRouter from 'vue-router'
```

```
Vue.use(Router)
```

```
const Author  = {  template: '<div>Author: {{ $route.params.author}}</div>'}
```

```
const router = new VueRouter({  routes: [    { path: '/post/:author', component: Author }  ]})
```

```
new Vue({  router}).$mount('#app')</script>
```

We can insert a second  `router-view`  component instance inside the Author template:

```
const Author  = {  template: '<div>Author: {{ $route.params.author}}<router-view></router-view></div>'}
```

We add the Post component:

```
const Post = {  template: '<div>Post: {{ $route.params.post_slug }}</div>'}
```

Then we’ll inject the inner dynamic route in the  `VueRouter`  configuration:

```
const router = new VueRouter({  routes: [{    path: '/post/:author',    component: Author,    children: [      path: ':post_slug',      component: Post    ]  }]})
```

Thank you for reading!

> Get this post PDF/ePub/Kindle ebook at  [vuehandbook.com][63]

[1]: https://vuehandbook.com/
[2]: https://vuehandbook.com/?ref=medium
[3]: https://www.google.com/maps
[4]: https://www.google.com/gmail
[5]: https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started
[6]: https://jquery.com/
[7]: https://mootools.net/
[8]: http://backbonejs.org/
[9]: https://www.emberjs.com/
[10]: http://knockoutjs.com/
[11]: https://angularjs.org/
[12]: https://reactjs.org/
[13]: https://angular.io/
[14]: https://vuejs.org/
[15]: https://en.wikipedia.org/wiki/Declarative_programming
[16]: https://en.wikipedia.org/wiki/C_(programming_language)
[17]: https://en.wikipedia.org/wiki/Assembly_language
[18]: https://www.npmjs.com/
[19]: https://webpack.js.org/
[20]: https://babeljs.io/
[21]: https://www.typescriptlang.org/
[22]: https://reactjs.org/docs/introducing-jsx.html
[23]: https://vuejs.org/v2/guide/syntax.html
[24]: http://mustache.github.io/
[25]: https://handlebarsjs.com/
[26]: https://vuex.vuejs.org/
[27]: https://redux.js.org/
[28]: https://codepen.io/flaviocopes/pen/YLoLOp
[29]: https://codesandbox.io/s/vue
[30]: https://zeit.co/now
[31]: https://github.com/
[32]: https://eslint.org/
[33]: https://mochajs.org/
[34]: https://jestjs.io/
[35]: https://yarnpkg.com/lang/en/
[36]: https://github.com/flaviocopes/vue-cli-preset/blob/master/preset.json
[37]: https://github.com/vuejs/vue-devtools
[38]: https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd
[39]: https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/
[40]: https://code.visualstudio.com/
[41]: https://macromates.com/
[42]: https://www.sublimetext.com/
[43]: https://marketplace.visualstudio.com/items?itemName=octref.vetur
[44]: https://code.visualstudio.com/docs/editor/intellisense
[45]: https://emmet.io/
[46]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[47]: https://prettier.io/
[48]: https://jsfiddle.net/flaviocopes/nvgedhq4/
[49]: https://jsfiddle.net/flaviocopes/3kebv908/
[50]: http://requirejs.org/docs/commonjs.html
[51]: https://vuejs.org/v2/guide/events.html#Event-Modifiers
[52]: https://vuejs.org/v2/guide/custom-directive.html
[53]: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
[54]: https://flaviocopes.com/javascript-events
[55]: https://www.npmjs.com/package/vue2-filters
[56]: https://medium.com/@quincylarson/17a99705b8e1
[57]: https://mobx.js.org/getting-started.html
[58]: https://codesandbox.io/s/vue
[59]: https://codesandbox.io/s/zq7k7nkzkm
[60]: https://unpkg.com/#/
[61]: https://router.vuejs.org/guide/advanced/navigation-guards.html#per-route-guard
[62]: https://github.com/pillarjs/path-to-regexp
[63]: https://vuehandbook.com/

##### 译者补充说明

[64]: https://cli.vuejs.org/zh/config/#vue-config-js
[65]: https://vuejs.org/v2/api/#Global-Config