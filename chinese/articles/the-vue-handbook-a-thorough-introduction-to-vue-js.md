> -   原文地址：[The Vue Handbook: a thorough introduction to Vue.js](https://www.freecodecamp.org/news/the-vue-handbook-a-thorough-introduction-to-vue-js-1e86835d8446/)
> -   原文作者：[Flavio Copes](https://www.freecodecamp.org/news/author/flavio/)
> -   译者：@blackcai
> -   校对者：@TechQuery

![The Vue Handbook: a thorough introduction to Vue.js](https://cdn-media-1.freecodecamp.org/images/1*Nzc4LiAlVXl8ic9T6v31zw.jpeg)

> 在 [vuehandbook.com][1] 上获取 PDF/ePub/MOBI 的帖子。

Vue 是一款非常受欢迎的前端框架，它正在快速的成长。

它简单、小巧（大约 24kb）且有着很优秀的性能。它与其它的 JavaScript 前端框架和视图库有着不同的感觉。让我们来找出（它们）不同的原因吧。

这篇文章很长！[在这里以 PDF 或者 ePub 的格式获取它][2]（英文版）。

### <span id="a1">首先，什么是 JavaScript 前端框架？</span>

如果你不确定什么是 JavaScript 框架，Vue 将是你最好的选择。  
一个 JavaScript 框架可以帮助我们创建现代应用程序。现代 JavaScript 应用程序主要用在 Web 上，但是也为许多的桌面和移动应用程序提供支持。  
直到 21 世纪初，浏览器才具备现在的功能。它们的性能要弱得多，并且在里面构建复杂的应用程序是不可行的。这个工具甚至不是人们所想要的东西。  
当谷歌发布了 [Google Maps][3] 和 [GMail][4] 这两款运行在浏览器里面的应用程序之后，一切都变了。 [AJAX][5] 使异步网络请求成为可能。慢慢的，开发人员开始在 Web 平台上进行构建，而工程师则平台上工作 —— 浏览器、Web 标准、浏览器 API 和 JavaScript 语言。

像 [jQuery][6] 和 [Mootools][7] 这样的库是第一批基于 JavaScript 的大型项目，并且在一段时间内非常的受欢迎。它们主要提供了更好的 API 来与浏览器交互，并为不同的浏览器之间的错误和不一致提供了解决方案。

像 [Backbone][8]、[Ember][9]、[Knockout][10] 和 [AngularJS][11] 这样的框架是现代 JavaScript 框架的第一波浪潮。

第二波浪潮则是目前的一波， 以 [React][12]、[Angular][13] 和 [Vue][14] 作为主要的参与者。

值得注意的是，jQuery、Ember 和我提到的其它项目仍被大量使用、积极维护，数百万网站依赖他们。

也就是说，技术和工具在不断发展，而作为 JavaScript 开发人员，你现在需要知道 React、Angular 或者 Vue，而不是那些旧的框架。

框架抽象了与浏览器和 DOM 的交互。我们不是通过在 DOM 中定位元素来操作元素，而是在更高的层次 [声明性][15] 定义并与他们交互。

使用框架就像使用 [C programming language（C 语言编程）][16] 而不是 [Assembly language（汇编语言)][17] 编写系统程序。这就像使用电脑写文档而不是打字机。这就像有一辆自动驾驶汽车而不是自己开车。

好了，不说太远了，但是你知道。不要使用浏览器提供的低级 API 来操作元素，而是使用非常聪明的人构建的工具使我们的生活更轻松，这些工具可以构建非常复杂的系统。

### 受欢迎的 Vue

Vue.js 有多受欢迎？

Vue 有：

-   7,600 2016 年在 GitHub 上的 stars 数
-   36,700 2017 年在 GitHub 上的 stars 数
-   82,400 2018 年在 GitHub 上的 stars 数
-   154,833 2019 年在 GitHub 上的 stars 数

它在 [NPM][18] 的下载数量每天都在增长，现在它的下载量大约每周 790,000 次

考虑到这些数据，我想说 Vue 很受欢迎。

相对而言，它在 GitHub 上的 stars 数量与几年前诞生的 React 大致相同。

当然，数字不是一切。我对 Vue 的印象是开发人员们 **爱** 它。

Vue 崛起的一个关键点就是 Laravel 生态系统的采用，这是一个非常流行的 PHP Web 应用程序框架，但是从那以后，它在许多其他的开发社区中普遍存在。

#### 为什么开发者们喜欢 Vue

首先，Vue 被称为渐进式框架。

这意味着它可以适应开发人员的需要。其他框架需要开发人员或团队的全面支持，并且常常想要你重写现有的应用程序，因为他们有一些特别的约定。Vue 以一个简单的 `script` 标签开始愉快的进入你的应用程序，并且它可以随着你的需求而增长，从 3 行扩展到你的整个视图层。

你不需要知道 [webpack][19]、 [Babel][20]、 NPM 或者任何与 Vue 有关的东西。但是当你准备好了，Vue 会让你更容易的依赖它们。

这是一个非常好的卖点，特别是在当前的 JavaScript 前端框架和库的生态系统中，它们往往会疏远新人，并且让有经验的开发者在各种可能性和选择的海洋中感到迷茫。

Vue.js 可能是最容易理解的前端框架。有些人将 Vue 称为 **new jQuery（新一代的 jQuery）**，因为它可以通过应用程序中的一个 script 标记而引用，并通过它逐渐地获得空间。可以把它看做一种称赞，因为 jQuery 在过去几年中主导了 Web，而且它仍然在大量的站点上发挥作用。

Vue 借鉴了 Angular、React 和 Knockout 等框架的核心理念，并筛选出了最佳的选择构建而成的。并且通过排除一些不太出色的（选择），它开始成为一个“最好的”集合，并从那里开始发展。

#### Vue.js 在框架领域的定位是什么？

在讨论 web 开发时，房间里就像有两头名为 React 和 Angular 的大象。相对于这两个大而流行的框架，Vue 是如何给自己定位的呢？

Vue 是尤雨溪在谷歌开发 AngularJS (Angular 1.0) 应用时创建的。它是出于创建性能更高的应用程序的需要而诞生的。Vue 选择了 Angular 的一些模板语法，但去掉了 Angular 必要而固执的复杂堆栈，使它变的非常高效。

新的 Angular (Angular 2.0) 也解决了很多 AngularJS 的问题，但是方式截然不同。它还需要一个对 [TypeScript][21] 的支持，不是所有的开发人员都喜欢使用（或者想要学习）。

那么关于 React 呢？ Vue 从 React 中获得了很多好理念，最重要的是 Virtual DOM（虚拟 DOM）。但是 Vue 通过某种自动的依赖关系来实现它。它跟踪哪些组件受到状态更改的影响，以便在状态属性更改的时候重新渲染那些组件。

另一方面，在 React 中，当影响组件的一部分状态发生变化的时候，它将被重新渲染。默认情况下，它的所有子元素都将被重新渲染。为了避免这种情况，你需要使用每个组件的 `shouleComponentUpdate` 方法，并确定是否应该重新渲染该组件。这使 Vue 在易用性和开箱即用的性能方面具有一定的优势。

与 React 最大的区别是 [JSX][22]。尽管在技术上你可以在 Vue 中使用 JSX，但它不是一种流行的写法，而是使用 [templating system （模板系统）][23]。任何 HTML 文件都是有效的 Vue 模板。JSX 与 HTML 非常的不同，对于团队中可能只需要使用应用程序的 HTML 部分的人员（比如设计人员）来说，它有一个学习曲线。

Vue 模板与 [Mustache][24] 和 [Handlebars][25] 非常的类似（尽管他们在灵活性方便有所不同）。因此，对于已经使用过 Angular 或者 Ember 等框架的开发人员来说更加亲近友好。

官方的状态管理库，[Vuex][26]，遵循 Fulx 架构，在概念上有点类似 [Redux][27]。同样，这也是 Vue 中值得肯定的一面，它在 React 中看到了这种优良的模式，并借鉴了它的生态系统，虽然你可以在 Vue 中使用 Redux，但是 Vuex 是专门为 Vue 及其内部工作而特别定制的。

Vue 是灵活的，但是实际上核心团队维护两个对任何 web 应用程序（如路由和状态管理）都非常重要的包，这使得它比 React 更加碎片化。例如：`vue-router` 和 `vuex` 是 Vue 成功的关键。

你不需要选择或者担心你选择的库将来是否会被维护并且和官方保持同步更新。因为他们是官方的，它们是各自的领域内的标准的首选库（当然，你也可以选择自己喜欢的库）。

Vue 与 React 和 Angular 相比有一点与众不同，那就是 Vue 是一个 `独立` 的项目：它没有像 Facebook 或者 Google 这样的大公司支持。

相反，它完全通过社区的支持，社区通过捐款和赞助来促进发展。这确保了 Vue 的技术路线不是由单个公司的议程驱动的。

### 你的第一个 Vue 应用程序

如果你从来没有创建过一个 Vue.js 应用程序。我将指引你完成创建一个应用程序的任务，以便你了解它是如何工作的。

#### 第一个示例

首先，我将介绍 Vue 最基本的使用示例。

你创建一个 HTML 文件，其中包含：

```HTML
<html>
  <body>
    <div id="example">
      <p>{{ hello }}</p>
    </div>
    <script src="https://unpkg.com/vue"></script>
    <script>
        new Vue({
            el: '#example',
            data: { hello: 'Hello World!' }
        })
    </script>
  </body>
</html>
```

并且在浏览器中打开它。这就是你的第一个 Vue 应用！页面应该显示一条 “Hello World!” 的信息。

我将 script 标签放在 body 的末尾，以便在 DOM 加载完成之后按顺序执行它们。

这段代码所做的是实例化一个新的 Vue 应用程序，链接 `#example` 元素作为它的模板。它通常使用 CSS 选择器定义，但你也可以传入一个 `HTMLElement`。

然后，它将该模板与 `data` 对象关联起来。这是一个特殊的对象，它承载我们希望 Vue 渲染的数据。

在模板当中，特殊的 `{{}}` 标签表明这是模板的某个动态部分，其内容应该在 Vue 应用程序的数据中查找。

你可以在 [CodePen][28] 查看这个案例。

<iframe 
    style="width: 100%; height: 90vh" scrolling="no" frameborder="no" 
    loading="lazy" allowtransparency="true" allowfullscreen="true"
    title="A Vue.js Hello World" 
    src="https://codepen.io/flaviocopes/embed/YLoLOp?height=265&theme-id=light&default-tab=js,result"
>
  See the Pen 
  <a href='https://codepen.io/flaviocopes/pen/YLoLOp'>A Vue.js Hello World</a> 
  by Flavio Copes
  (<a href='https://codepen.io/flaviocopes'>@flaviocopes</a>) on 
  <a href='https://codepen.io'>CodePen</a>.
</iframe>

CodePen 有点不同于使用普通的 HTML 文件，并且你需要配置它指向 Pen 设置中的 Vue 库的位置：

![](https://cdn-media-1.freecodecamp.org/images/Qa8s2ayB3DhhE3dRKv4SFowGd8xHDvEeSlL4)

#### 第二个示例：Vue CLI 的默认应用程序

让我们把游戏升级升级一点。我们要构建的下一个应用程序已经完成了，它是 Vue CLI 默认应用程序。

什么是 Vue CLI？他是一个命令行实用程序，通过为你搭建一个应用程序框架，并在适当的地方提供一个示例应用程序，帮助你加速开发。

那里有两种方法可以得到这个应用程序：

##### 在本地使用 Vue CLI

首先要在你的电脑上安装 Vue CLI 并运行以下命令：

```Shell
vue create <enter the app name>
```

在一般情况下，你只需要按照提示按回车即可完成安装。

##### 使用 CodeSandbox

一个更简单的方法，不需要安装任何东西，就是去 [CodeSandbox][29]。该链接打开 Vue CLI 默认应用程序。

<iframe 
  src="https://codesandbox.io/embed/vue-vue?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:90vh; border:0; border-radius: 4px; overflow:hidden;"
  title="Vue"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

CodeSandbox 是一个很酷的代码编辑器，它允许你在云服务中构建应用程序。你可以使用任何的 NPM 包，并且可以轻松的与 [Zeit Now][30]集成，以便轻松的部署，也可以和 [GitHub][31] 集成来管理版本。

无论你是选择在本地使用 Vue CLI，还是通过 CodeSandbox，让我们详细的检查一下这个 Vue 应用程序。

### 文件结构

除了 `package.json` 这个包含配置的文件以外，这些文件是包含在初始项目结构中的文件。

-   `public/index.html`
-   `src/App.vue`
-   `src/main.js`
-   `src/assets/logo.png`
-   `src/components/HelloWorld.vue`

#### `public 文件夹`

静态资源放置在 public 目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过 webpack 的处理。建议从[这里][67]查看官方的详细说明。

#### `public/index.html`

`public/index.html` 文件是主要的应用程序文件。

在 body 中，它只包含一个简单的元素：`<div id="app"></div>`。这是我们将用于附加到 DOM 的 Vue 应用程序的元素。

```HTML
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>CodeSandbox Vue</title>
</head>

<body>
  <div id="app"></div>
  <!-- built files will be auto injected -->
</body>

</html>
```

#### `src/main.js`

这是驱动应用程序的主要 JavaScript 文件。

我们首先要从 `App.vue` 引入 Vue 库和 App 组件。

我们将 `productionTip` 设置为 `false`，以避免 Vue 在控制台中输出 “you’re in development mode” 的提示。

接下来，我们通过将 Vue 实例分配给在 `index.html` 中定义的 `#app` 标识的 DOM 元素来创建 Vue 实例，并告诉它使用 App 组件。

```JavaScript
// 使用 `import` 命令加载 Vue 构建版本
// 别名设置在 vue.config.js 中，具体参数请[参考][https://github.com/neutrinojs/webpack-chain#config-resolve-alias]
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```

译者著：请注意阅读两个文档并区分，别名设置是在根目录下的 [vue.config.js][64] 中，这个文件默认应用程序并没有建立文件，需要自行新建。而 [Vue.config.productionTip][65] 则是写在 `src/main.js` 中的配置信息，它们是不同的服务的配置。

#### `src/App.vue`

`App.vue` 是一个 Single File Component （单文件组件）。它包含三个代码模块： HTML、 CSS、 JavaScript。

这第一眼看起来可能很奇怪，但是 Single File Components （单文件组件）是创建自包含组件的好方法，这些单个文件包含了组件所需要的所有内容。

我们有标记，和它进行交互的 JavaScript，以及应用于它的样式，这样可以限定作用域，也可以不限定作用域。在这种情况下，它没有作用域，它只是像常规的 CSS 一样输出并应用到页面上。

有趣的部分在 `script` 标签上面。

我们从 `components/HelloWorld.vue` 文件引入一个组件，稍后我们会介绍。

这个组件将在我们的组件中被引用。这是一个依赖项。我们将从这个组件输出以下代码：

```HTML
<div id="app">
  <img width="25%" src="./assets/logo.png">
  <HelloWorld />
</div>
```

你可以看到它引用了 `Helloworld` 组件。Vue 将自动将该组件插入这个占位符中。

```HTML
<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

#### `src/components/HelloWorld.vue`

这是 `HelloWorld` 组件，它包含在 App 组件中。

该组件输出一组链接以及一条信息。

还记得上面我们在 App.vue 中讨论的 CSS 吗？ `HelloWorld` 组件已经限定了 CSS 的作用域。

你可以通过查看 `style` 标签轻松的确定它。如果它有 `scoped` 属性，那么它的作用域是：`<style scoped>`

这意味着生成的 CSS 将通过一个由 Vue 透明应用的 class 唯一地针对组件。你不需要担心这个， CSS 不会 **泄露** 到页面的其它部分。

组件输出的消息存储在 Vue 实例的 `data` 属性中，并在模板中以 `{{ msg }}`输出

任何存储在 `data` 中的内容都可以在模板中通过名称直接访问。我们不需要指明 `data.msg`，而仅仅是 `msg`。

```HTML
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
```

#### 运行应用程序

CodeSandbox 有一个非常酷的预览功能。你可以运行应用程序，编辑源代码中的任何内容，让它立刻显示在预览中。

![](https://cdn-media-1.freecodecamp.org/images/ZWfaVoQWEm4HzD0RNcS2osp8NpIPz-G5Vq5P)

### The Vue CLI

CodeSandbox 是一个非常酷的在线编码和工作（的网站），而不必在本地安装 Vue。本地工作的一个好方法是设置 Vue CLI （命令行界面）。让我们了解更多关于它（的信息）。

在前一个案例中，我介绍了一个基于 Vue CLI 的示例项目，Vue CLI 到底是什么，它如何适应 Vue 生态系统？另外，我们如何在本地安装一个基于 Vue CLI 的项目？让我们来揭开它吧。

#### 安装

Vue CLI 是一个命令行实用工具，你可以使用 NPM 全局安装它：

```Shell
npm install -g @vue/cli
```

或者使用 Yarn：

```Shell
yarn global add @vue/cli
```

你运行一次之后，就可以调用 `vue` 命令。

![](https://cdn-media-1.freecodecamp.org/images/F1uuQW81iw1WZNOiUn0xnLOagFi637vPDUfd)

#### Vue CLI 提供了什么？

CLI 对于 Vue.js 的快速开发是必不可少的。

它的主要目标是确保你需要的所有工具都正常的工作，执行你需要的操作，并抽象出每个工具单独使用所需的所有具体配置细节。

它可以执行初始的项目设置和脚手架。

这是一个灵活的工具。一旦你使用 CLI 创建了项目，你就可以去调整配置，而不需要 **退出** 你的应用程序（就像你用 `create-react-app`所做的那样）。

当你从 `create-react-app` 退出时，你可以更新并调整你想要的（配置），但是你不能依赖 `create-react-app` 提供的酷的功能。

你可以配置任何东西并且仍然能够轻松的升级。

当你创建和配置完应用程序之后，它作为一个运行时依赖的工具，构建在了 webpack 之上。

与 CLI 的第一次接触是在创建一个 Vue 项目的时候。

#### 如何使用 CLI 创建一个新的 Vue 项目

你要做的第一件事是用 CLI 创建一个 Vue 应用程序。

```Shell
vue create example
```

很酷的是，这是一个互动的过程。你需要选择预设配置。默认情况下，这里有一个预设提供 Babel 和 [ESLint][32] 的集成：

![](https://cdn-media-1.freecodecamp.org/images/FL4mTLZqzhKkAYL2FB507Tx1Hkdtnl0y5cgu)

我要按向下箭头 ⬇️ 并且手动选择我想要的功能：

![](https://cdn-media-1.freecodecamp.org/images/mkF3jMMCGluqmQ3hX3bGbCxhfXcwvWVNjWLi)

按 `空格` 键可以打开你需要的东西，然后按 `enter` 键继续。因为我选择了 `Linter / Formatter`，所以 Vue CLI 提示我进行配置。我选择了 `ESLint + Prettier`，因为这是我最喜欢的设置：

![](https://cdn-media-1.freecodecamp.org/images/bYwN2mfgTuJNxiiHBSNjnJQADZQvFR0TErhK)

下一件事就是选择怎样应用 linting。我选择了 `Lint on save`

![](https://cdn-media-1.freecodecamp.org/images/dcQmjoykCaJG7pevG5Yc-6A43eVYUkCbTxn7)

接下来：testing。Vue CLI 让我在两个最流行的单元测试解决方案之间进行选择：[Mocha + Chai][33] 和 [Jest][34]。

![](https://cdn-media-1.freecodecamp.org/images/lIdwYkOgcllnAJRVZOoKIxZ49ikNFoQjYtSV)

Vue CLI 询问我把所有的配置放在哪里：放在 `package.json` 文件中，或专用的配置文件，每个工具一个。我选择了后者。

![](https://cdn-media-1.freecodecamp.org/images/dN4W4ZALKh7Xz1D8ac7ebXpGdTPVGpzdujcc)

接下来，Vue CLI 问我如果我想保存这些预设，并允许我在下次使用 Vue CLI 创建一个新的应用程序的选择它们。这是一个非常方便的特性，具有快速设置我所有偏好设置可以减轻复杂性：

![](https://cdn-media-1.freecodecamp.org/images/X6rbmBloyRnQbdwrFQwtYeChdqxzQRpOJYfl)

Vue CLI 接下来会问我是否更喜欢用 [Yarn][35] 还是 NPM：

![](https://cdn-media-1.freecodecamp.org/images/vbEmq0oYaGFjDtjL9D2QaUZ6t5omf0fjZTJM)

这是它问我的最后一件事，然后它继续下载依赖并创建 Vue 应用程序：

![](https://cdn-media-1.freecodecamp.org/images/Q52LD-RGQm9dHXMyWikiI5fMyESB7vRJqe1h)

#### 如何启动新创建的 Vue CLI 应用程序

Vue CLI 为我们创建了应用程序，并且我们可以进入 `example` 文件夹和运行 `yarn serve` 在开发模式下启动我们的第一个应用程序：

![](https://cdn-media-1.freecodecamp.org/images/iegqNiWWJaunJi-KFTV93EKuODc4njdfLRuf)

启动的示例应用程序源码包含几个文件，包括 `package.json`：

![](https://cdn-media-1.freecodecamp.org/images/FuI7nmJ2NAtesloTZrh3eJL-aa0ceCCr68wQ)

这里定义了所有的 CLI 命令，包括几分钟前我们使用的 `yarn serve`，其它的几个命令是

-   `yarn build`, 开始生产
-   `yarn lint`, 运行 linter
-   `yarn test:unit`, 运行单元测试

我将在单独的示例中描述 Vue CLI 生成的示例应用程序。

#### Git 仓库

注意到 VS Code 左下角的 `master`一词了吗？这是因为 Vue CLI 自动创建了一个仓库，并进行第一次提交。所以我们可以跳进去，改变内容，我们知道我们改变了什么：

![](https://cdn-media-1.freecodecamp.org/images/4IHrGo6U-xkz4aeVXf3S06AYzIk0lAZJ6t6y)

这很酷，有很多次，你一头扎进去，改变内容，结果发现，当你想提交的时候，你并没有提交初始状态。

#### 从命令行中是用预设

你可以跳过互动面板，并指示 Vue CLI 使用特定的预设：

```Shell
vue create -p favourite example-2
```

#### 预设存储在哪里

预设存储在根目录下的 `.vuejs` 文件中。这是我在创建第一个 “favorite” 预设后的状态：

```JSON
{
  "useTaobaoRegistry": false,
  "packageManager": "yarn",
  "presets": {
    "favourite": {
      "useConfigFiles": true,
      "plugins": {
        "@vue/cli-plugin-babel": {},
        "@vue/cli-plugin-eslint": {
          "config": "prettier",
          "lintOn": [
            "save"
          ]
        },
        "@vue/cli-plugin-unit-jest": {}
      },
      "router": true,
      "vuex": true
    }
  }
}
```

#### 插件

你可以通过阅读配置看到，预设基本上是插件的集合，有一些可选的配置。

当项目创建以后，你可以使用 `vue add` 添加更多的插件：

```Shell
vue add @vue/cli-plugin-babel
```

所有的这些插件都使用的最新版本。你可以通过版本属性强制 Vue CLI 使用指定的版本：

```JSON
"@vue/cli-plugin-eslint": {"version": "^3.0.0"}
```

当一个新的版本有大的更改或者是 bug，并且你需要稍等一段时间才使用它，这是非常有用的。

#### 远程存储预设

预设可以通过创建包含一个预设配置的 `preset.json` 文件的仓库存储在 GitHub （或其他服务）中。

从上面提取，我做了一个包含如下配置的样本 [预设][36]：

```JSON
{
    "useConfigFiles": true,
    "plugins": {
        "@vue/cli-plugin-babel": {},
        "@vue/cli-plugin-eslint": {
            "config": "prettier",
            "lintOn": ["save"]
        },
        "@vue/cli-plugin-unit-jest": {}
    },
    "router": true,  "vuex": true
}
```

它可以用来引导一个新的应用程序可以使用：

```Shell
vue create --preset flaviocopes/vue-cli-preset example3
```

### 另一个的 Vue CLI 用途是：快速原型设计

到目前为止，我已经解释了如何使用 Vue CLI 从头创建一个新项目，其中包含了所有的细节。但是对于真正的快速原型开发，你可以创建一个非常简单的 Vue 应用程序（甚至是一个自身包含在其中的单个 .vue 文件的应用程序）并提供服务，而不必下载 `node_modules` 文件夹中的所有依赖项。

怎么做？首先安装全局安装 `cli-service-global` 包：

```Shell
npm install -g @vue/cli-service-global
# or
yarn global add @vue/cli-service-global
```

创建一个 app.vue 文件：

```HTML
<template>
    <div>
        <h2>Hello world!</h2>
        <marquee>Heyyy</marquee>
    </div>
</template>
```

然后运行

```Shell
vue serve app.vue
```

<figure>
  <img src="https://cdn-media-1.freecodecamp.org/images/pp3QTRAMwLtOnkhazBRgRrjYKnMEbnm1CbWL">
  <figcaption>独立的应用程序</figcaption>
</figure>

你可以服务更多有组织的项目，这些项目由 JavaScript 和 HTML 文件组成。Vue CLI 默认使用 `main.js / index.js` 作为它的入口点，并且你可以设置 `package.json` 和任何工具配置。`vue serve` 将会启动它。

由于它使用全局依赖关系，因此除了用于演示或快速测试外，她不是最佳的方法。

运行 `vue build` 将为在 `dist/` 中部署项目做好准备，并将生成所有相应的代码（也针对供应商依赖关系）。

#### webpack

Vue CLI 可以在内部是用 webpack，但是配置是抽象的，并且我们在文件夹中甚至看不到配置文件。你仍然可以通过调用 `vue inspect` 来访问它。

![](https://cdn-media-1.freecodecamp.org/images/dGT6I8Uq75505tD1Xj8wR-h7rO9ZvRby80cH)

### Vue 开发者工具

当你第一次尝试使用 Vue 的时候，如果你打开浏览器开发者工具，你将发现以下信息：“Download the Vue DevTools extension for a better development experience: [https://github.com/vuejs/vue-devtools][37]” 。

<figure>
  <img src="https://cdn-media-1.freecodecamp.org/images/J-LJE-u3DphYF8pOpMnkCX9KoNz3fGp4OPea">
  <figcaption>提示安装 Vue 开发工具</figcaption>
</figure>

这是一个友好的安装 Vue 开发者工具扩展提示。那是什么？任何流行的框架都有自己的 DevTools 扩展，它通常会为浏览器开发人员工具添加一个新的面板，这个面板比浏览器默认提供的面板更专业。在这种情况下，面板将允许我们检查 Vue 应用程序并与之交互。

在搭建 Vue 应用程序的时候，这个工具将提供令人吃惊的帮助。开发者工具只能在 Vue 应用程序处于开发模式时检查它。这将确保没有人可以使用它们来与你的应用程序产品进行交互，并将使 Vue 具有更高的性能，因为它不必关心开发者工具。

让我们安装它！

这里有三个方法安装 Vue 开发者工具：

-   在 Chrome 上
-   在 Firefox 上
-   作为一个独立的应用程序

自定义扩展不支持 Safari、Edge 和 其它浏览器，但是使用独立的应用程序，你可以在任何浏览器里面运行调试 Vue.js 应用程序。

#### 安装在 Chrome 中

转到 Google Chrome [Store][38] 页面并点击 **Add to Chrome**。

![](https://cdn-media-1.freecodecamp.org/images/uh0CFZPRsdnKFOY-OWWvQCN3UVcnh-0KXpfh)

完成安装过程：

![](https://cdn-media-1.freecodecamp.org/images/hAQZpBESrlkCeLeLJpzeiPdJs12mmFHLRq9s)

Vue.js 开发者工具图标出现在工具栏中，如果页面没有运行 Vue.js 实例它就会变成灰色。

![](https://cdn-media-1.freecodecamp.org/images/TaZntVatyBmsqqKsMjbGKn5nIuJikKLOJJyt)

如果 Vue.js 被检测到，这个图标会显示 Vue 的 logo 的颜色。

![](https://cdn-media-1.freecodecamp.org/images/xPbOBNuLCdCE28QiFevAcqFb06Oqk8tB31Zy)

这个图标只是告诉我们这 **是** 一个 Vue.js 实例。要用开发者工具，我们必须打开 Developer Tools 面板，使用 “View → Developer → Developer Tools”，或者 Windows 下用 `F12`，或者 Mac 下用 `option + command + i`。

![](https://cdn-media-1.freecodecamp.org/images/td1gw01JZxVxAkHLGg9FKzIHz8UFhMhvr3gG)

#### 安装在 Firefox 中

你可以在 Mozilla Add-ons [store][39] 中找到 Firefox 的开发工具扩展。

![](https://cdn-media-1.freecodecamp.org/images/y-G2Zcw62ZrkjMOe6ottwLy-z6onBxnZzOXm)

点击 “Add to Firefox”，扩展将被安装，和 Chrome 一样，工具栏上也会显示一个灰色的图标。

![](https://cdn-media-1.freecodecamp.org/images/LQCCB8c2g0OsUmJZ20fYJBPbampJudlIPocv)

并且当你访问一个运行 Vue 实例的站点，它将变成绿色并且当你打开开发者工具我们将看到一个 “Vue” 面板：

![](https://cdn-media-1.freecodecamp.org/images/jFYMTGNEhrkxzzC6Grdb7zgXrnHrwuR-0AiI)

#### 安装独立的应用程序

或者，你可以使用独立的开发者工具应用程序。

简单的安装它：

```Shell
npm install -g @vue/devtools
# or
yarn global add @vue/devtools
```

通过调用运行它：

```Shell
vue-devtools
```

这将打开基于 Electron 的独立的应用程序。

现在，粘贴显示给你的 script 标签

```HTML
<script src="http://localhost:8098"></script>
```

在项目的 `index.html` 文件中，然后等待应用程序重启，它将自动连接到应用程序。

![](https://cdn-media-1.freecodecamp.org/images/ANnfWmlscUkP0RN9Pn-hSABLCOxzMJYvtuqw)

#### 如何使用 Developer Tools

如前所述，可以通过在浏览器打开开发者工具并移动到 Vue 面板来激活 Vue 开发者工具。

另一个选项是右键单击页面中的任何元素，然后选择 “Inspect Vue component”：

![](https://cdn-media-1.freecodecamp.org/images/r4URIzj-Mm92WTnnl9iXMK18f8cIwmyICQ0m)

当打开 Vue 开发者工具面板后，我们可以浏览组件树。当我们从左侧的列表中选择一个组件时，右侧面板将显示其特有的属性和数据。

![](https://cdn-media-1.freecodecamp.org/images/h55RK1azzd7gjON36Da9HdY-tpu8cuVMBs-3)

在顶部有四个按钮：

-   **Components** (当前面板)，其中列出了当前页面中运行的实例的所有组件。Vue 可以同时运行多个实例。例如，它可以使用单独轻量级应用程序管理购物车的小部件和幻灯片。
-   **Vuex** 你可以在这里检查通过 Vuex 管理的状态
-   **Events** 显示所有发生的事件
-   **Refresh** 重新加载 DevTools 面板

注意到组件旁边的小文本 `= $vm0`了吗？这是使用 Console 检查组件的便捷方法。按下 “esc” 键将在开发者工具底部显示控制台，你可以键入 `$vm0` 来访问 Vue 组件：

![](https://cdn-media-1.freecodecamp.org/images/9fi396qPj8ajABDLnAoB77AkjDtLEJu-2okG)

检查和与组件交互而不必将他们分配到代码中的全局变量，这非常的酷。

#### 过滤组件

开始键入组件名称，并且组件树将过滤掉不匹配的组件。

![](https://cdn-media-1.freecodecamp.org/images/IdqSWwFMpvHVN125f7uIxue0Xp0ic-HJmBzX)

#### 在页面上选择一个组件

点击 **在页面上选择组件** 按钮

<figure>
  <img src="https://cdn-media-1.freecodecamp.org/images/RE969Y8eHdDn1rqHvj2OGfnEqthwHMVy37A-">
  <figcaption>在页面上选择组件</figcaption>
</figure>

你可以用鼠标悬停在页面中的任何组件上，单击它，它将在开发者工具中打开。

#### 格式化组件名称

你可以选择 camelCased （驼峰命名法）或者 dashes （破折号命名法）显示组件。

#### 检查过滤数据

在右边的面板上，你可以输入任何单词来过滤不匹配的属性。

#### 检查 DOM

点击检查 DOM 按钮，跳转到开发者工具元素检查器，该 DOM 元素由组件生成。

<figure>
  <img src="https://cdn-media-1.freecodecamp.org/images/YKTlyULN-MDOAg3R1KPA3tI27IqX5Q9ckIH4">
  <figcaption>检查 DOM</figcaption>
</figure>

#### 在编辑器中打开

任何用户组件（不是框架级组件）都有一个按钮，可以在你的默认编辑器中将它打开。非常有用。

### 设置 VS Code 与 Vue 一起工作

[Visual Studio Code][40] 是目前世界上最常用的的代码编辑器之一，想很多软件产品一样，编辑器有一个循环。曾经 [TextMate][41] 在开发人员中很受欢迎，然后是 [Sublime Text][42]，现在是 VS Code。

受欢迎的有趣之处在于，人们花了很多时间来为他们可以想象的一切构建插件。

一个这样的插件是很棒的工具，可以帮助我们 Vue.js 开发人员。

#### Vetur

它叫做 Vetur，它非常受欢迎（下载量超过 350 万），你可以在 [Visual Studio 市场][43] 上找到它。

![](https://cdn-media-1.freecodecamp.org/images/OOfHNunbiMBxokJsrmdrvWixSoDmaDdPRzxK)

#### 安装 Vetur

单击 Install 按钮将在 VS Code 中触发安装面板：

![](https://cdn-media-1.freecodecamp.org/images/hskNZD-byUAunDSOjCdPXPMIb9v3rBPSlOvf)

你也可以简单的在 VS Code 中打开扩展，然后搜索 “vetur”：

![](https://cdn-media-1.freecodecamp.org/images/xbOVISLaIuAgHHvD4gKVFb0Lg9R1f5R5Jowk)

这个扩展提供了什么？

#### 语法高亮显示

Vetur 为所有 Vue 源代码文件提供语法高亮显示。

如果没有 Vetur，VS Code 将以这种方式显示 `.vue` 文件：

![](https://cdn-media-1.freecodecamp.org/images/JTZ9KScP0WTtr-4cCvjvQJKkGwlA4EW9KIf3)

安装了 Vetur 后：

![](https://cdn-media-1.freecodecamp.org/images/c5wC-aTwknyXUSjqq9gbr-EqFbSDXSewix-N)

VS Code 能够从其扩展名识别文件中包含的代码类型。

使用 Single File Components （单文件组件），你可以在同一个文件中混合不同类型的代码，从 CSS 到 JavaScript 在到 HTML。

默认情况下，VS Code 无法识别这种情况，而 Vetur 为你使用的每种代码提供语法高亮显示。

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

#### 片段

与语法突出显示一样，由于 VS Code 无法确定 .vue 文件的一部分包含的代码类型，因此它无法提供我们都喜欢的代码段。代码片段是我们可以添加到文件中的代码片段，由专业插件提供。

Vetur 使 VS Code 能够在 Single File Components （单文件组件）中使用你喜欢的代码片段。

#### 智能提示

Vetur 还为每种不同的语言启用了 [IntelliSense][44]，并具有自动完成功能：

![](https://cdn-media-1.freecodecamp.org/images/3KtNeQR4W8HVg-JVT0kmu33sL79xlWIT0KtY)

#### 脚手架

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

如果输入 `scaffold`，你将会获得单文件组件的初始包：

```HTML
<template>

</template>
```

```HTML
<script>
    export default {
    }
</script>
```

```HTML
<style>

</style>
```

其它都是特定的，并创建单个代码块。

**注意：** （scoped）在上面的列表中表示它仅适用于当前组件。

#### Emmet

[Emmet][45], 默认支持流行的 HTML/CSS 缩写引擎。你可以输入 Emmet 的缩写之一，然后按 <kbd>tab</kbd>、 VS Code 将自动将其扩展为相同的 HTML：

![](https://cdn-media-1.freecodecamp.org/images/R7Q4k9hsI0yzBe-xaVIMxdBMukjQWzzIw-FG)

#### Linting 和 错误检查

Vetur 通过 [VS Code ESLint plugin][46] 与 ESLint 集成。

![](https://cdn-media-1.freecodecamp.org/images/j1mnYvPYhNPWM00V0lDdxCwb5ZidBzG0Djtn)

![](https://cdn-media-1.freecodecamp.org/images/5Z2hR9l8ARVe3uucCT4iPzTsDZRuEh0gZSs8)

#### 代码格式化

Vetur 为代码格式化提供自动支持，以在保存时对整个文件进行格式化 - 和 VS Code 设置里的 `"editor.formatOnSave"` 相结合。

你可以通过在 VS Code 设置中将 `vetur.format.defaultFormatter.XXXXX` 设置为 `none` 来禁用某些特定语言的自动格式化设置。要更改其中的设置，只需要开始搜索字符串，然后在右侧面板的用户设置中覆盖所需的内容即可。

大多数人语言支持使用 [Prettier][47] 实现自动格式化，这是一个正在成为行业标准的工具。它使用 Prettier 的配置来确定你的首选项。

### 引入 Vue 组件

组件是接口的单个独立单元。他们可以有自己的状态、标记和样式。

#### 如何使用组件

Vue 组件可以通过四种主要方式进行定义。让我们用代码来讨论。

第一个是：

```JavaScript
new Vue({/* options */})
```

第二个是：

```JavaScript
Vue.component('component-name', {/* options */})
```

第三个是通过使用本地组件。这些是只能由特定组成访问的组件，而在其它地方则不可用（非常适合封装）。

第四个是在 `.vue` 文件中，也称为 Single File Components （单文件组件）。

让我们详细介绍前三种方式。

在构建非单页应用程序（SPA）时，使用 `new Vue()` 或 `Vue.component()` 时使用 Vue 的标准方法。你可以使用这些方法，更准确的说，当你仅仅在一些页面使用 Vue.js，如联系表单或购物车中的时候。或者是在所有的页面中都是用了 Vue，但是服务器正在渲染布局，然后你将 HTML 提供给客户端，然后客户端将加载你构建的 Vue 应用程序。

由 Vue 构建 HTML 的 SPA 中，使用 Single File Components （单文件组件）更为方便，因此更为常见。

你可以通过在挂载 Vue 在 DOM 元素上来实例化它。如果你有一个 `<div id="app"></div>` 标签，你将要使用：

```JavaScript
new Vue({ el: '#app' })
```

用 `new Vue` 初始化的组件没有对应的标记名，因此它通常是主要的容器组件。

应用程序中使用的其他组件使用 `Vue.component()` 进行初始化。这样的组件允许你定义一个标签 - 你可以使用该标签将组件嵌入应用程序中 - 并在 `template` 属性中指定该组件的输出：

```HTML
<div id="app">
    <user-name name="Flavio"></user-name>
</div>
```

```JavaScript
Vue.component('user-name', {
    props: ['name'],
    template: '<p>Hi {{ name }}</p>'
})
```

```JavaScript
new Vue({ el: '#app' })
```

<iframe 
  style="width: 100%; height: 90vh" frameborder="0" 
  allowfullscreen allowpaymentrequest 
  src="//jsfiddle.net/flaviocopes/nvgedhq4/embedded/"
>
  在 JSFiddle 查看
</iframe>

我们在做什么？我们在 `#app` 上初始化 Vue 根组件，在这里面，我们使用 Vue 组件 `user-name`，它抽象了我们对用户的问候。

这个组件接受一个 prop，它是我们用来将数据传递给子组件的属性。

在 `Vue.component()` 调用中，我们传递了 `user-name` 作为第一个参数。这将为组件提供一个名称，你可以把名字写成两种形式。第一个是我们用过的，叫做 kebab-case （短横线命名法）。第二个叫做 PascalCase （帕斯卡命名法），和 camelCase （驼峰命名法） 类似，但是第一个字母是大写：

```JavaScript
Vue.component('UserName', {/* ... */})
```

Vue 会在内部自从创建一个 `user-name` 到 `UserName` 的别名，反之亦然，因此你可以随意使用。通常最好在 JavaScript 中使用 `UserName`，在模板中使用 `user-name`。

#### 本地组件

任何使用 `Vue.component()` 创建的组件都是全局注册的。你无需将其分配给变量或将其传递以在模板中重复使用。

你可以通过将自定义组件对象为变量赋值给一个对象在本地封装组件：

```JavaScript
const Sidebar = {
    template: '<aside>Sidebar</aside>'
}
```

然后使用 `components` 属性使其在另一个组件内部使用：

```JavaScript
new Vue({
    el: '#app',
    components: { Sidebar }
})
```

你可以在同一个文件中编写文件，但是有一个很好的方法是使用 JavaScript 模块：

```JavaScript
import Sidebar from './Sidebar'

export default {
    el: '#app',
    components: { Sidebar }
}
```

#### 复用组件

子组件可以添加多次。每个单独的示例都独立于其它实例。

```HTML
<div id="app">
    <user-name name="Flavio"></user-name>
    <user-name name="Roger"></user-name>
    <user-name name="Syd"></user-name>
</div>
```

```JavaScript
Vue.component('user-name', {
    props: ['name'],
    template: '<p>Hi {{ name }}</p>'
})
```

```JavaScript
new Vue({ el: '#app' })
```

<iframe 
  style="width: 100%; height: 90vh" frameborder="0" 
  allowfullscreen allowpaymentrequest 
  src="//jsfiddle.net/flaviocopes/3kebv908/embedded/"
>
  在 JSFiddle 查看
</iframe>

#### 组件的组成部分

到目前为止，我们已经看到了组件如何接受 `el`、 `props` 和 `template` 属性。

-   `el` 仅在使用 `new Vue({})` 初始化的根组件中使用，并标识组件将挂载的 DOM 元素。
-   `props` 列出了我们可以传递给子组件的所有属性
-   `template` 是我们可以设置组件模板的地方，它负责定义输出生成的组件。

组件接受其它属性：

-   `data` 组件本地的状态
-   `methods` ： 组件方法
-   `computed`：与组件关联的计算属性
-   `watch`：组件观察者

### 单文件组件

可以在 JavaScript 文件（ `.js` ）中声明 Vue 组件，如下所示：

```JavaScript
Vue.component('component-name', {/* options */})
```

或者：

```JavaScript
new Vue({/* options */})
```

或者可以在 .vue 文件中指定。

`.vue` 文件非常酷，因为它允许你定义：

-   JavaScript 逻辑
-   HTML 代码模板
-   CSS 样式

全部都在一个文件中，因此，称它为 Single File Component （单文件组件）。

这里是一个示例：

```HTML
<template>
    <p>{{ hello }}</p>
</template>
```

```HTML
<script>
    export default {
        data() {
            return {
                hello: 'Hello World!'
            }
        }
    }
</script>
```

```HTML
<style scoped>
    p { color: blue; }
</style>
```

由于使用了 webpack，所以这些都是可能的。Vue CLI 使得这个操作非常容易，并且支持开箱即用。如果没有设置 webpack ，将无法使用 `.vue` 文件，因此，它们不太适合仅在页面上使用 Vue 而又不是完整的单页面应用程序（SPA）的应用程序。

由于 Single File Components （单文件组件）依赖于 webpack,所以我们可以免费使用现代 Web 特性。

你可以使用 SCSS 或 Stylus 定义 CSS，可以使用 Pug 构建模板，要做的就是向 Vue 声明要使用哪种语言预处理器。

支持的预处理器列表包括

-   TypeScript
-   SCSS
-   Sass
-   Less
-   PostCSS
-   Pug

我们可以使用现代的 JavaScript（ES6-7-8），而不用考虑使用 Babel 集成的目标浏览器和 ES 模块,因此我们可以使用 `import/export` 语句。

我们可以使用 CSS 模块来定义 CSS 的范围。

说到 CSS 的作用域，通过使用 `<style scoped>` 标记，Single File Components（单文件组件）使得编写不会 **泄露** 给其他组件的 CSS 变的非常容易。

如果你省略了 `scoped`，你定义的 CSS 将是全局的。但是在添加了 `scoped` 标签后，Vue 会自动向组件添加一个特定的类，这个类对于你的应用程序是唯一的，因此可以保证 CSS 不会泄露给其他组件。

也许你的 JavaScript 太大了，因为你需要处理一些逻辑。如果你想为你的 JavaScript 使用一个单独的文件怎么办呢？

你可以使用 `src` 属性将其外部化：

```HTML
<template>
    <p>{{ hello }}</p>
</template>

<script src="./hello.js"></script>
```

这也适用于你的 CSS：

```HTML
<template>
    <p>{{ hello }}</p>
</template>

<script src="./hello.js"></script>

<style src="./hello.css"></style>
```

注意我是怎么使用的

```JavaScript
export default {
    data() {
        return {
            hello: 'Hello World!'
        }
    }
}
```

在组件的 JavaScript 中设置数据。

你将看到的其它常见方式是：

```JavaScript
export default {
    data: function() {
        return {
            name: 'Flavio'
        }
    }
}
```

以上等同于我们之前所做的工作

或者

```JavaScript
export default {
    data: () => {
        return {
            name: 'Flavio'
        }
    }
}
```

这是不同的，因为它使用箭头功能，箭头函数很好，直到我们需要访问组件方法位置。如果我们需要使用 `this`，并且使用箭头函数未将此类属性绑定到组件，则这是一个问题。因此，必须使用 **常规** 函数而不是箭头函数。

你可能还会看到：

```JavaScript
module.exports = {
    data: () => {
        return {
            name: 'Flavio'
        }
    }
}
```

这是使用 [CommonJS][50] 语法，它工作的很好。但是我建议使用 the ES Modules syntax （ ES 模块语法)，因为这是一个 Javascript 标准。

### Vue 模板

Vue.js 使用的模板语言是 HTML 的超集。

任何 HTML 都是有效的 Vue.js 模板。除此之外，Vue.js 还提供了两个强大的功能：插值和指令。

这是一个有效的 Vue.js 模板：

```HTML
<span>Hello!</span>
```

这可以将该模板放入显式声明的 Vue 组件中：

```JavaScript
new Vue({
    template: '<span>Hello!</span>'
})
```

或者可以将其放入 Single File Component（单文件组件） 中:

```HTML
<template>
    <span>Hello!</span>
</template>
```

第一个示例非常基础。下一步是使其输出部分组件状态，例如，名称。

这可以使用插值来完成。首先，我们向组件添加一些数据：

```JavaScript
new Vue({
    data: {
        name: 'Flavio'
    },
    template: '<span>Hello!</span>'
})
```

然后我们可以使用双括号语法将其添加到模板中：

```JavaScript
new Vue({
    data: {
        name: 'Flavio'
    },
    template: '<span>Hello {{name}}!</span>'
})
```

这是一件有趣的事。看看我们是怎么使用 `name` 代替 `this.data.name` 的？

这是因为 Vue.js 进行了一些内部的绑定，并让模板对象像使用本地属性一样使用该属性。很方便。

在一个单文件组件中，这将是：

```HTML
<template>
    <span>Hello {{name}}!</span>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Flavio'
            }
        }
    }
</script>
```

我在导出中使用了一个常规函数。为什么不是一个箭头函数？

这是因为在 `data` 中，我们可能需要访问组件实例中的一个方法，如果 `this` 没有绑定到组件，我们就不能这样做，所以我们不能使用箭头函数。

请注意，我们可以使用箭头函数，但是如果我使用 `this`，那么我需要记住切换到常规功能。我想还是小心为好。

现在，回到插值表达式。

`{{ name }}` 应该会提醒你的 Mustache / Handlebars 模板插值，但它只是一个视觉提醒。

虽然在这些模板引擎中他们是 “愚蠢的”，但是在 Vue 中，你可以做更多的事情，而且它更灵活。

你可以在插值表达式中使用任何 JavaScript 表达式，但是你只能使用一个表达式：

```Handlebars
{{ name.reverse() }}
```

```Handlebars
{{ name === 'Flavio' ? 'Flavio' : 'stranger' }}
```

Vue 提供了对模板中一些全局对象的访问，包括 Math 和 Date，所以你可以使用它们：

```Handlebars
{{ Math.sqrt(16) * Math.random() }}
```

最好避免向模板中添加复杂逻辑，但事实上 Vue 允许这样做为我们提供了更多的灵活性，特别是在尝试时。

我们可以首先尝试将表达式放入模板中，稍后将其移动到计算属性或方法中。

任何插值表达式中包含的值将在其所依赖的任何数据属性发生更改时进行更新。

你可以通过使用 `v-once` 指令来避免这种反应。

结果总是转义的，所以输出中不能有 HTML。

如果你需要一个 HTML 片段，你需要使用 `v-html` 指令代替。

### 使用 CSS 样式化组件

将 CSS 添加到 Vue.js 组件的最简单选择是使用 `style` 标签，就像在 HTML 中一样：

```HTML
<template>
    <p style="text-decoration: underline">Hi!</p>
</template>

<script>
    export default {
        data() {
            return {
                decoration: 'underline'
            }
        }
    }
</script>
```

这是你能得到的最静态的。如果希望在组件数据中定义 `下划线`，该怎么办？你可以这样做：

```HTML
<template>
    <p :style="{'text-decoration': decoration}">Hi!</p>
</template>

<script>
    export default {
        data() {
            return {
                decoration: 'underline'
            }
        }
    }
</script>
```

`:style` 是 `v-bind:style` 的缩写。在本教程中，我将使用这个缩写。

注意我们是如何在引号中包装 `text-deciration` 的。这是因为破折号不是有效的 JavaScript 标志符的一部分。

你可以通过使用 Vue.js 支持的特殊 camelCase （驼峰式命名法）语法来避免引号，并将其重写为 `textDecoration`：

```HTML
<template>
    <p :style="{textDecoration: decoration}">Hi!</p>
</template>
```

不需要将对象绑定到 `style`，你可以引用一个计算属性：

```HTML
<template>
    <p :style="styling">Hi!</p>
</template>

<script>
    export default {
        data() {
            return {
                textDecoration: 'underline',
                textWeight: 'bold'
            }
        },
        computed: {
            styling: function() {
                return {
                    textDecoration: this.textDecoration,
                    textWeight: this.textWeight
                }
            }
        }
    }
</script>
```

Vue 组件生成纯 HTML，因此你可以选择向每个元素添加一个 class，并添加具有样式属性设置其属性的相应 CSS 选择器：

```HTML
<template>
    <p class="underline">Hi!</p>
</template>

<style>
    .underline { text-decoration: underline; }
</style>
```

你可以像这样使用 SCSS：

```HTML
<template>
    <p class="underline">Hi!</p>
</template>

<style lang="scss">
    body {
        .underline { text-decoration: underline; }
    }
</style>
```

你可以想上面的示例那样对 class 进行硬编码。或者你可以将 class 绑定到组件属性，使其成为动态的，并且仅在数据属性为真时才应用于该类：

```HTML
<template>
    <p :class="{underline: isUnderlined}">Hi!</p>
</template>

<script>
    export default {
        data() {
            return {
                isUnderlined: true
            }
        }
    }
</script>

<style>
    .underline { text-decoration: underline; }
</style>
```

而不是绑定一个对象到 class，就像我们做的 `<p :class="{text: isText}">Hi!</p>`，你可以直接绑定一个字符串，这将引用一个数据属性：

```HTML
<template>
    <p :class="paragraphClass">Hi!</p>
</template>

<script>
    export default {
        data() {
            return {
                paragraphClass: 'underline'
            }
        }
    }
</script>

<style>
    .underline { text-decoration: underline; }
</style>
```

你可以分配多个 class，在这种情况下，你可以通过在 `paragraphClass` 中添加两个 class，或者使用数组：

```HTML
<template>
    <p :class="[decoration, weight]">Hi!</p>
</template>

<script>
    export default {
        data() {
            return {
                decoration: 'underline',
                weight: 'weight'
            }
        }
    }
</script>

<style>
    .underline { text-decoration: underline; }
    .weight { font-weight: bold; }
</style>
```

使用 class 绑定内联的对象可以完成相同的操作：

```HTML
<template>
    <p :class="{underline: isUnderlined, weight: isBold}">Hi!</p>
</template>

<script>
    export default {
        data() {
            return {
                isUnderlined: true,
                isBold: true
            }
        }
    }
</script>

<style>
    .underline { text-decoration: underline; }
    .weight { font-weight: bold; }
</style>
```

并且你可以合并一下两个语句：

```HTML
<template>
    <p :class="[decoration, {weight: isBold}]">Hi!</p>
</template>

<script>
    export default {
        data() {
            return {
                decoration: 'underline',
                isBold: true
            }
        }
    }
</script>

<style>
    .underline { text-decoration: underline; }
    .weight { font-weight: bold; }
</style>
```

你还可以使用返回对象的计算属性，当你将多个 CSS 的 class 添加到同一元素时，该属性最有效：

```HTML
<template>
    <p :class="paragraphClasses">Hi!</p>
</template>

<script>
    export default {
        data() {
            return {
                isUnderlined: true,
                isBold: true
            }
        },
        computed: {
            paragraphClasses: function() {
                return {
                    underlined: this.isUnderlined,
                    bold: this.isBold
                }
            }
        }
    }
</script>

<style>
    .underlined { text-decoration: underline; }
    .bold { font-weight: bold; }
</style>
```

注意，在计算属性中，你需要使用 `this.[propertyName]` 来引用组件数据，而在模板数据中，属性可以方便的放置为第一级属性。

Vue 将处理任何未像第一个示例中那样进行硬编码的 CSS，Vue 可以很好的为我们自动为 CSS 加上前缀。这使得我们可以编写干净的 CSS，同时仍可以针对较旧的浏览器（这意味着 Vue 支持的浏览器，比如 IE9+）。

### 指令

我们在 Vue.js 模板和插值中看到了如何在 Vue 模板中嵌入数据。

本节解释 Vue.js 在模板：指令中提供的其他技巧。

指令基本上类似于在模板中添加的 HTML 属性。它们都是以 `v-` 开头，表示这是一个 Vue 特殊属性。

让我们详细查看每个 Vue 指令。

#### `v-text`

你可以使用 `v-text` 指令代替插值表达式。它执行相同的工作：

```HTML
<span v-text="name"></span>
```

#### `v-once`

你知道 `{{ name }}` 如何绑定到组件数据的 `name` 属性。

每当组件数据中的 `name` 发生改变时，Vue 将更新浏览器中表示的值。

除非你使用 `v-once` 指令，它基本上就像一个 HTML 属性：

```HTML
<span v-once>{{ name }}</span>
```

#### `v-html`

当使用插值表达式打印数据属性时，HTML 将被转义。这是 Vue 用来自动防御 XSS 攻击的一个很好的方法。

但是，在某些情况下，你希望输出 HTML 并让浏览器解释他，你可以使用 `v-html` 指令：

```HTML
<span v-html="someHtml"></span>
```

#### `v-bind`

插值表达式只适用于标记内容。不能对属性使用它。

属性必须使用 `v-bind`：

```HTML
<a v-bind:href="url">{{ linkText }}</a>
```

`v-bind` 非常的常见，它有一个简单的语法：

```HTML
<a v-bind:href="url">{{ linkText }}</a>
<a :href="url">{{ linkText }}</a>
```

#### 有两种方法使用 `v-model`

例如，`v-model` 让我们绑定一个表单输入元素，并让它在用户更该字段内容时更改 Vue 数据属性。

```HTML
<input v-model="message" placeholder="Enter a message">
<p>Message is: {{ message }}</p>
```

```HTML
<select v-model="selected">
    <option disabled value="">Choose a fruit</option>
    <option>Apple</option>
    <option>Banana</option>
    <option>Strawberry</option>
</select>
<span>Fruit chosen: {{ selected }}</span>
```

#### 使用表达式

你可以在指令里面使用任何 JavaScript 表达式。

```HTML
<span v-text="'Hi, ' + name + '!'"></span>
```

```HTML
<a v-bind:href="'https://' + domain + path">{{ linkText }}</a>
```

指令中使用任何变量都引用相应的数据属性。

#### 条件

在指令中，你可以使用三元运算符来执行条件检查，因为这是一个表达式：

```HTML
<span v-text="name == Flavio ? 'Hi Flavio!' : 'Hi' + name + '!'"></span>
```

有一些专用指令允许你执行更有组织的条件语句： `v-if`，`v-else` 和 `v-else-if`

```HTML
<p v-if="shouldShowThis">Hey!</p>
```

`shouldShowThis` 是一个包含在组件数据中的布尔值。

#### 循环

`v-for` 允许你渲染一个项目列表。将它与 `v-bind` 结合使用来设置列表中每个项目的属性。

你可以迭代一个简单的数组的值：

```HTML
<template>
    <ul>
        <li v-for="item in items">{{ item }}</li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                items: ['car', 'bike', 'dog']
            }
        }
    }
</script>
```

或对象数组：

```HTML
<template>
    <div>
        <!-- using interpolation -->
        <ul>
            <li v-for="todo in todos">{{ todo.title }}</li>
        </ul>
        <!-- using v-text -->
        <ul>
            <li v-for="todo in todos" v-text="todo.title"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                todos: [
                    { id: 1, title: 'Do something' },
                    { id: 2, title: 'Do something else' }
                ]
            }
        }
    }
</script>
```

`v-for` 可以给你索引使用：

```HTML
<li v-for="(todo, index) in todos"></li>
```

#### 事件

`v-on` 允许监听 DOM 事件，并在事件发生时触发一个方法。下面我们来监听一个点击事件：

```HTML
<template>
    <a v-on:click="handleClick">Click me!</a>
</template>

<script>
    export default {
        methods: {
            handleClick: function() {
                alert('test')
            }
        }
    }
</script>
```

你可以传递参数给任何事件：

```HTML
<template>
    <a v-on:click="handleClick('test')">Click me!</a>
</template>

<script>
    export default {
        methods: {
            handleClick: function(value) {
                alert(value)
            }
        }
    }
</script>
```

一小段 JavaScript（单个表达式）可以直接放入模板：

```HTML
<template>
    <a v-on:click="counter = counter + 1">{{counter}}</a>
</template>

<script>
    export default {
        data: function() {
            return {
                counter: 0
            }
        }
    }
</script>
```

`点击` 只是一种事件。一个常见的事件是 `提交`，你可以使用 `v-on:submit` 绑定它。

`v-on` 非常常见，它有一个简写语法 `@`：

```HTML
<a v-on:click="handleClick">Click me!</a>
<a @click="handleClick">Click me!</a>
```

#### 显示或者隐藏

如果 Vue 实例的某个属性值为 true，可以使用 `v-show` 选择只显示 DOM 中的一个元素：

```HTML
<p v-show="isTrue">Something</p>
```

元素仍然可以插入到 DOM 中，但如果条件不满足，则设置为 `display:none`。

#### `v-cloak`

这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。

```HTML
<template>
  <div v-cloak>
    {{ message }}
  </div>
</template>

<style>
[v-cloak] {
  display: none;
}
</style>
```

使用 v-cloak 指令设置样式，这些样式会在 Vue 实例编译结束时，从绑定的 HTML 元素上被移除。

#### `v-pre`

跳过指定元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。
如下代码：

```HTML
<span v-pre>{{ this will not be compiled }}</span>
```

你将会在页面上看到显示的文字信息为：“{{ this will not be compiled }}”

#### 事件指令修饰符

Vue 提供了一些可选的事件修饰符，你可以将它们与 `v-on` 一起使用，这些修饰符可以自动执行某些操作，而无需在事件处理程序中显式的对其进行编码。

一个很好的例子就是 `.prevent`，它会在事件中自动调用 `preventDefault`。

在这种情况下，该表单不会导致页面被重新加载，这是默认行为：

```HTML
<form v-on:submit.prevent="formSubmitted"></form>
```

其它的修饰符包括 `.stop`， `.capture`， `.self`， `.once`， `.passive` 并且它们 [在官方文档中有详细说明][51]。

#### 自定义指令

Vue 默认指令已经可以完成很多工作，但如果需要，你可以随时添加新的自定义指令。

如果你有兴趣了解更多，请在[这里][52]阅读。

### 方法

#### 什么是 Vue.js 方法？

Vue 方法是与 Vue 实例关联的函数。

方法在 `methods` 属性中定义：

```JavaScript
new Vue({
    methods: {
        handleClick: function() {
            alert('test')
        }
    }
})
```

或者在 Single File Components（单文件组件）的情况下：

```HTML
<script>
    export default {
        methods: {
            handleClick: function() {
                alert('test')
            }
        }
    }
</script>
```

方法在需要执行某个操作并在元素上附加 `v-on` 指令以处理事件时特别有用。比如这个，当元素被点击时，它会调用 `handleClick`。

```HTML
<template>
    <a @click="handleClick">Click me!</a>
</template>
```

#### 将参数传递给 Vue.js 方法

方法可以接受参数。

在这个示例中，你只需在模板中传递参数：

```HTML
<template>
    <a @click="handleClick('something')">Click me!</a>
</template>
```

```JavaScript
new Vue({
    methods: {
        handleClick: function(text) {
            alert(text)
        }
    }
})
```

或对于 Single File Components（单文件组件）：

```HTML
<script>
    export default {
        methods: {
            handleClick: function(text) {
                alert(text)
            }
        }
    }
</script>
```

#### 如何从方法访问数据

你可以通过使用 `this.propertyName` 来访问 Vue 组件的任何数据属性。

```HTML
<template>
    <a @click="handleClick()">Click me!</a>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Flavio'
            }
        },
        methods: {
            handleClick: function() {
                console.log(this.name)
            }
        }
    }
</script>
```

我们不需要使用 `this.data.name`，而只需使用 `this.name`。Vue 确实为我们提供了一个透明的绑定。使用 `this.data.name` 将引发错误。

正如你在前面的 **事件** 描述中看到的，方法与事件密切相关，因为它们被用作事件处理程序。每次事件发生时，都会调用该方法。

### 观察者

观察者是一个特殊的 Vue.js 特性，它允许你监视组件状态的一个属性，并在属性值改变时运行一个函数。

这里是一个例子。我们有一个组件，显示一个名称，并允许你通过点击按钮改变它。

```HTML
<template>
    <p>My name is {{name}}</p>
    <button @click="changeName()">Change my name!</button>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Flavio'
            }
        },
        methods: {
            changeName: function() {
                this.name = 'Flavius'
            }
        }
    }
</script>
```

当名称发生变化时，我们需要做一些事情，比如打印控制台日志。

为此，我们可以向 `watch` 对象添加一个属性，该属性名为我们想要监视的 data 属性：

```HTML
<script>
    export default {
        data() {
            return {
                name: 'Flavio'
            }
        },
        methods: {
            changeName: function() {
                this.name = 'Flavius'
            }
        },
        watch: {
            name: function() {
                console.log(this.name)
            }
        }
    }
</script>
```

分配给 `watch.name` 的函数可以选择接受两个参数。第一个是新的属性值。第二个是旧的属性值：

```HTML
<script>
    export default {
    /* ... */
        watch: {
            name: function(newValue, oldValue) {
                console.log(newValue, oldValue)
            }
        }
    }
</script>
```

不能像使用计算属性那样从模板中查找观察者。

### 计算属性

#### 什么是计算属性

在 Vue.js 中，你可以使用括号输出任何数据的值:

```HTML
<template>
    <p>{{ count }}</p>
</template>

<script>
    export default {
        data() {
            return {
                count: 1
            }
        }
    }
</script>
```

这个属性可以承载一些小型计算。例如：

```HTML
<template>
    {{ count * 10 }}
</template>
```

但是你只能使用一个 Javascript **表达式**。

除了这个技术限制外，你还需要考虑模板应该只关注向用户显示数据，而不是执行逻辑计算。

要执行比单个表达式更多的操作，并拥有更多的声明性模板，可以使用 computed 属性。

计算属性在 Vue 组件的 `computed` 属性中的定义。

```HTML
<script>
    export default {
        computed: {}
    }
</script>
```

#### 计算属性的一个示例

下面是一个使用 computed 属性 `count` 来计算输出的示例。

声明：

1.我不必调用 `{{ count() }}`。Vue.js 自动调用该函数。 2.我是用了一个常规函数（不是箭头函数）来定义 `count` 计算属性，因为我需要能够通过 `this` 访问组件实例。

```HTML
<template>
    <p>{{ count }}</p>
</template>

<script>
    export default {
        data() {
            return {
                items: [1, 2, 3]
            }
        },
        computed: {
            count: function() {
                return 'The count is ' + this.items.length * 10
            }
        }
    }
</script>
```

#### 计算属性与方法

如果你已经了解了 Vue 方法，你可能想知道他们之间的区别。

首先，方法必须被调用，而不只是引用，所以你需要做：

```HTML
<template>
    <p>{{ count() }}</p>
</template>

<script>
    export default {
        data() {
            return {
                items: [1, 2, 3]
            }
        },
        methods: {
            count: function() {
                return 'The count is ' + this.items.length * 10
            }
        }
    }
</script>
```

但是主要的区别是计算属性被缓存。

`count` 计算属性的结果在内部缓存，直到 `items` 数据属性被更改。

**重要：** 计算属性仅在响应源更新的时候更新。常规的 JavaScript 方法不是被动的，所以一个常见的例子是使用 `Date.now()` ：

```HTML
<template>
    <p>{{ now }}</p>
</template>

<script>
    export default {
        computed: {
            now: function () {
                return Date.now()
            }
        }
    }
</script>
```

它将渲染一次，然后即使在组件重新渲染时也不会更新。当 Vue 组件退出并重新初始化时，它只是在页面刷新时更新。

在这种情况下，方法更适合你的需要。

### Methods、Watchers、和 Computed Properties

现在你已经了解了方法、观察者和计算属性，你可能想知道什么时候应该使用一种方法，什么时候应该使用另一种方法。

这是该问题的细分。

#### 什么时候使用 methods

-   对 DOM 中发生的某些事件作出反应
-   当组件中发生某些事情时调用函数
    你可以从计算的属性或观察者调用方法

#### 什么时候使用计算属性

-   你需要从现有数据源组合新数据
-   你在模板中使用了一个由一个或多个数据属性构建的变量
-   你希望将复杂的、嵌套的属性名简化为更易阅读和使用的名称（但在原始属性更改时更新）
-   你需要从模板引用一个值。在这种情况下，最好创建一个 computed 属性，因为它是缓存的
-   你需要监听多个数据属性的更改

#### 什么时候使用观察者

-   你希望在数据属性更改时监听，并执行一些操作
-   你想要监听 prop 值的改变
-   你只需要监听一个特定的属性（你不能同时监听多个属性）
-   你希望监听一个数据属性，直到它达到某个特定值，然后再做一些事情

### Props： 将数据传递给子组件

Props 是组件从包含它们的组件（父组件）接受数据的方式。

当一个组件需要一个或多个 prop 时，它必须在 `props` 属性中定义它们：

```JavaScript
Vue.component('user-name', {
    props: ['name'],
    template: '<p>Hi {{ name }}</p>'
})
```

或者，在一个 Vue Single File Component(单文件组件)中：

```HTML
<template>
    <p>{{ name }}</p>
</template>

<script>
    export default {
        props: ['name']
    }
</script>
```

#### 允许多个 props

你可以拥有多个 props，只需要把他们添加到数组：

```JavaScript
Vue.component('user-name', {
    props: ['firstName', 'lastName'],
    template: '<p>Hi {{ firstName }} {{ lastName }}</p>'
})
```

#### 设置 prop 类型

你可以很简单的指定一个 prop 的类型，使用一个对象而不是数组，使用属性的名称作为每个属性的键，类型作为值：

```JavaScript
Vue.component('user-name', {
    props: {
        firstName: String,
        lastName: String
    },
    template: '<p>Hi {{ firstName }} {{ lastName }}</p>'
})
```

你可以使用有效的类型是：

-   String
-   Number
-   Boolean
-   Array
-   Object
-   Date
-   Function
-   Symbol

当类型不匹配时，Vue 会在控制台中警告你（在开发模式下）。

Prop 类型可以更加明确。

你可以允许多种不同类型的值：

```JavaScript
props: {
    firstName: [String, Number]
}
```

#### 设置一个 prop 为强制性的

你可以要求一个 prop 是强制性的：

```JavaScript
props: {
    firstName: {
        type: String,
        required: true
    }
}
```

#### 设置 prop 的默认值

你可以指定一个默认值

```JavaScript
props: {
    firstName: {
        type: String,
        default: 'Unknown person'
    }
}
```

对象：

```JavaScript
props: {
    name: {
        type: Object,
        default: {
            firstName: 'Unknown',
            lastName: ''
        }
    }
}
```

`default` 也可以是一个返回适当值的函数，而不是实际值。

你甚至可以创建一个自定义验证，该验证器对复杂数据很酷：

```JavaScript
props: {
    name: {
        validator: name => {
            return name === 'Flavio' //only allow "Flavios"
        }
    }
}
```

#### 将 props 传递到组件

你使用语法将一个 prop 传递给组件。

```JSX
<ComponentName color="white" />
```

如果传递的是一个静态值。

如果是数据属性，则使用

```HTML
<template>
    <ComponentName :color=color />
</template>

<script>
export default {
    data: function() {
        return {
            color: 'white'
        }
    }
}
</script>
```

你可以在 prop 的值中使用三元运算符来检查一个真实的条件，并传递一个依赖于它的值：

```HTML
<template>
    <ComponentName :colored="color == 'white' ? true : false" />
</template>
```

```HTML
<script>
export default {
    data: function() {
        return {
            color: 'white'
        }
    }
}
</script>
```

### 在 Vue 中处理事件

#### 什么是 Vue.js 事件？

Vue.js 允许我们通过在一个元素上使用 `v-on` 指令来拦截任何 DOM 事件。

如果我们想做某事时，点击事件发生在这个元素：

```HTML
<template>
    <a>Click me!</a>
</template>
```

我们添加一个 `v-on` 指令：

```HTML
<template>
    <a v-on:click="handleClick">Click me!</a>
</template>
```

Vue 还提供了一个非常方便的替代语法：

```HTML
<template>
    <a @click="handleClick">Click me!</a>
</template>
```

你可以选择是否使用圆括号。 `@click="handleClick"` 相当于 `@click="handleClick()"`。

`handleClick` 是一个附加在组件上的方法

```HTML
<script>
    export default {
        methods: {
            handleClick: function(event) {
                console.log(event)
            }
        }
    }
</script>
```

这里需要知道的是，可以从事件传递参数 `@click="handleClick(param)"`， 并且它们将在这个方法里面被接收。

#### 访问原始事件对象

在许多情况下，你将希望对事件对象执行操作或在其中查找某些属性。如何访问它？

使用特殊的 `$event` 指令：

```HTML
<template>
    <a @click="handleClick($event)">Click me!</a>
</template>

<script>
    export default {
        methods: {
            handleClick: function(event) {
                console.log(event)
            }
        }
    }
</script>
```

或者你已经传递了一个变量：

```HTML
<template>
    <a @click="handleClick('something', $event)">Click me!</a>
</template>

<script>
    export default {
        methods: {
            handleClick: function(text, event) {
                console.log(text)
                console.log(event)
            }
        }
    }
</script>
```

从这里你可以调用 `event.preventDefault()`,但是有一个更好的方法：事件修饰符。

#### 事件修饰符

不要在你的方法中使用 DOM "事务"，而是告诉 Vue 为你处理事情

-   `@click.prevent` 调用 `event.preventDefault()`
-   `@click.stop` 调用 `event.stopPropagation()`
-   `@click.passive` 使用 [addEventListener 的被动选项][53]
-   `@click.capture` 使用事件捕获而不是事件冒泡，即内部元素触发的事件先在此处理，然后才交由内部元素进行处理
-   `@click.self` 确保单击事件不是从子事件冒泡，而是直接发生在该元素上
-   `@click.once` 事件只会被触发一次

所有的这些选项都可以通过添加一个修饰符来组合。

有关传播、冒泡和捕获的更多信息，请参见我的 [JavaScript 事件指南][54]

补充说明：相关修饰符的官方文档在[这里][66]查看

### 使用插槽注入内容

组件可以选择完全定义其内容，就像在这种情况下：

```JavaScript
Vue.component('user-name', {
    props: ['name'],
    template: '<p>Hi {{ name }}</p>'
})
```

或者，它还可以让父组件使用插槽将其任何类型的内容注入其中。

什么是插槽？

通过在组件模板中放入 `<slot></slot>` 来定义它：

```JavaScript
Vue.component('user-information', {
    template: '<div class="user-information"><slot></slot></div>'
})
```

使用该组件时，在开始和结束标签之间添加的任何内容都将添加到插槽占位符中：

```HTML
<user-information>
    <h2>Hi!</h2>
    <user-name name="Flavio">
</user-information>
```

如果你将任何内容放在 `<slot></slot>` 标记中，这将作为默认内容，以防没有任何内容传入。

一个复杂的组件布局可能需要更好的方式来组织内容。

输入**命名插槽**

使用命名插槽，你可以将插槽的部分分配到模板布局中的特定位置，并且可以对任何标记使用 `插槽` 属性来将内容分配到该插槽。

任何模板标签之外的任何东西都会被添加到主 `插槽` 中。

为了方便，我在这个例子中使用了一个 `页面` 的单文件组件。

```HTML
<template>
    <div>
        <main>
            <slot></slot>
        </main>
        <sidebar>
            <slot name="sidebar"></slot>
        </sidebar>
    </div>
</template>

<page>
    <ul slot="sidebar">
        <li>Home</li>
        <li>Contact</li>
    </ul>

    <h2>Page title</h2>
    <p>Page content</p>
</page>
```

### 过滤器，模板的帮助程序

过滤器是 Vue 组件提供的一种功能，它允许你对模板动态数据的任何部分应用格式化和转换。

他们不会改变组件的数据或任何东西，但他们只影响输出。

假设你正在打印一个名字：

```HTML
<template>
    <p>Hi {{ name }}!</p>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Flavio'
            }
        }
    }
</script>
```

如果你想要检查 `name` 是否实际包含一个值，如果没有则打印 ’there‘，那么我们的模板将打印 “Hi there！”？

输入过滤器：

```HTML
<template>
    <p>Hi {{ name | fallback }}!</p>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Flavio'
            }
        },
        filters: {
            fallback: function(name) {
                return name ? name : 'there'
            }
        }
    }
</script>
```

注意应用过滤器的语法，它是 `| filterName`。如果你熟悉 Unix，那就是 Unix 管理操作符，它用于将操作的输出做为输入传递给下一个操作。

组件的 `过滤器` 属性是一个对象。单个过滤器是接受一个值并返回另一个值的函数。

返回的值实际上是在 Vue.js 模板中打印的值。

当然，过滤器可以访问组件数据的方法。

过滤器的良好用例是什么？

-   转换字符串，例如，大写或将其小写
-   格式化金额

上面你看到了一个简单的过滤器示例：`{{ name | fallback }}`

过滤器通过重复的管道语法链接：

```Handlebars
{{ name | fallback | capitalize }}
```

这首先应用 `fallback` 过滤器，然后应用 `capitalize` 过滤器（我们没有定义它，但试着做一个）。

高级过滤器也可以接受参数，使用正常的函数参数语法：

```HTML
<template>
    <p>Hello {{ name | prepend('Dr.') }}</p>
</template>

<script>
    export default {
        data() {
            return {
                name: 'House'
            }
        },
        filters: {
            prepend: (name, prefix) => {
                return `${prefix} ${name}`
            }
        }
    }
</script>
```

如果将参数传递给过滤器，则传递给过滤器函数的第一个参数总是模板插值表达式中的项（在本例中为 `name`），然后传递显式的参数。

你可以使用逗号分隔多个参数。

注意我用了一个箭头函数。通常，我们在方法和计算属性中避免使用箭头函数，因为他们几乎总是引用 `this` 来访问组件数据。但是在这种情况下，过滤器不需要访问 `this`，而是通过参数接收它需要的所有数据，我们可以安全的使用更简单的箭头函数语法。

[这个包][55]有很多预先设置的过滤器，你可以直接在模板中使用，包括 `capitalize`, `uppercase`, `lowercase`, `placeholder`, `truncate`, `currency`, `pluralize` 等等。

### 组件之间的通信

Vue 中的组件可以以各种方式进行通信

#### 使用 Props

第一个方法是使用 props

父类通过向组件声明中添加参数来 “传递” 数据：

```HTML
<template>
    <div>
        <Car color="green" />
    </div>
</template>

<script>
    import Car from './components/Car'

    export default {
        name: 'App',
        components: { Car }
    }
</script>
```

Props 是单向的：从父级到子级。每当父元素更改了这个 prop，新的值就会被发送给子元素并重新渲染。

反之则不正确，并且你不应该在子组件中更改 prop。

#### 使用事件从子对象到父对象进行通信

事件允许你从子对象到父对象的通信：

```HTML
<script>
    export default {
        name: 'Car',
        methods: {
            handleClick: function() {
                this.$emit('clickedSomething')
            }
        }
    }
</script>
```

当模板中包含组件时，父级可以使用 `v-on` 指令来拦截：

```HTML
<template>
    <div>
        <Car v-on:clickedSomething="handleClickInParent" />
        <!-- or -->
        <Car @clickedSomething="handleClickInParent" />
    </div>
</template>

<script>
    export default {
        name: 'App',
        methods: {
            handleClickInParent: function() {
            //...
            }
        }
    }
</script>
```

当然你可以传递参数：

```HTML
<script>
    export default {
        name: 'Car',
        methods: {
            handleClick: function() {
                this.$emit('clickedSomething', param1, param2)
            }
        }
    }
</script>
```

并在父级取得：

```HTML
<template>
    <div>
        <Car v-on:clickedSomething="handleClickInParent" />
        <!-- or -->
        <Car @clickedSomething="handleClickInParent" />
    </div>
</template>

<script>
    export default {
        name: 'App',
        methods: {
            handleClickInParent: function(param1, param2) {
                //...
            }
        }
    }
</script>
```

#### 使用 Event Bus 在任何组件之间通信

使用事件，你不局限于子-父关系。你可以使用所谓的 Event Bus。

上面我们使用 `this.$emit` 来广播组件实例上的事件。

我们可以做的是在一个更容易访问的组件上广播事件。

`this.$root`，即根组件，通常用于此目的。

你还可以创建专用于此工作的 Vue 组件，并在需要的地方导入它。

```HTML
<script>
    export default {
        name: 'Car',
        methods: {
            handleClick: function() {
                this.$root.$emit('clickedSomething')
            }
        }
    }
</script>
```

任何其它组件都可以监听此事件。你可以 `mounted` 中这样做：

```HTML
<script>
    export default {
        name: 'App',
        mounted() {
            this.$root.$on('clickedSomething', () => {
                //...
            })
        }
    }
</script>
```

这就是 Vue 提供的开箱即用的功能。

当你（的需求）超出这个范围时，你可以看看 Vuex 或其他第三方的库。

### 使用 Vuex 管理状态

Vuex 是 Vue.js 的官方状态管理库。

它的工作是在应用程序的各个组件之间共享数据。

开箱即用的 Vue.js 的组件可以进行通信。

-   props，将状态从父组件传递到子组件
-   events，用于从子组件更改父组件的状态，或将根组件用做事件的总线

有时事情会比这些简单的选项所允许的更复杂。

在这种情况下，一个好的选择是将状态集中在一个单元存储中。这就是 Vuex 所做的。

#### 为什么你应该用 Vuex？

Vuex 并不是你可以在 Vue 中使用的唯一的状态管理器选项（你也可以使用 [Redux][56]），但是它主要的优势在于它是官方的，它与 Vue.js 的集成使它脱颖而出。

使用 React 的时候，你不得不从众多可用的库中选择一个，因为它的生态系统非常庞大，而且没有实际的标准。最近 Redux 是最受欢迎的选择， [MobX][57] 紧随其后。对于 Vue，我想说的是，除了 Vuex，你不需要寻找其它任何的东西，尤其是在开始的时候。

Vuex 从 React 的生态系统借鉴了很多想法，因为这是 Redux 流行的 Flux 模式。

如果你已经知道 Flex 或者 Redux，Vuex 将变得非常亲切。如果你没有，没关系 - 我将从头到尾解释每一个概念。

Vue 应用程序中的组件可以有自己的状态。例如，输入框将在局部存储输入的数据。这是完美的，组件可以有局部状态，即使使用 Vuex。

当你开始做很多工作来传递一个状态时，你知道你需要像 Vuex 这样的东西。

在这个情况下，Vuex 为状态提供了了一个集中式存储仓库，你可以通过请求 store 来对状态进行更改。

依赖于特定状态的每个组件都将使用 store 上的 getter 来访问它，以确保一旦该状态发生变化时立即对其进行更新。

使用 Vuex 会给应用程序带来一些复杂性，因为需要以某种方式进行设置才能正确工作。但是，如果这有助于解决复杂的 props 传递和事件方法，如果太复杂可能会变的杂乱无章，那么这是一个不错的选择。

#### 让我们开始吧

在本例中，我从一个 Vue CLI 应用程序开始。Vuex 也可以直接加载到 script 标签中。但是，由于 Vuex 更适合大型应用程序，所以你更有可能在结构化的应用程序中使用它，比如可以使用 Vue CLI 快速启动应用程序。

我使用的示例将放在 CodeSandbox 中，它是一项很棒的服务，有准备就绪的 Vue CLI [案例][58]。我建议使用它来玩耍。

![](https://cdn-media-1.freecodecamp.org/images/hoB1Mu8Q1Py50t5Es5EKze26BsJOApMhEWVh)

进入后，点击添加依赖项按钮，输入 “vuex” ，然后点击它。

现在，Vuex 将列在项目的依赖项中。

要在本地安装 Vuex，你只需要在项目文件夹中运行 `npm install vuex` 或者 `yarn add vuex`

#### 创建 Vuex store

现在我们准备创建 Vuex 商店。

这个文件可以放在任何地方。通常建议将它放在 `src/store/store.js` 中。所以我们会这样做。

在这个文件中，我们初始化 Vuex，并告诉 Vue 使用它：

```JavaScript
import Vue from 'vue'import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({})
```

![](https://cdn-media-1.freecodecamp.org/images/p2kPCCKdhaHsHfXd4Nti975YVgvKMnbHbMRd)

我们导出一个 Vuex.Store 对象，我们使用 `Vuex.Store()` API 创建它。

#### store 的一个用例

我们已经有了一个框架，让我们为 Vuex 想出一个好用的用例，这样我们就可以介绍它的概念。

例如，我有两个兄弟组件，一个带有输入字段，另一个打印输出字段的内容。

当输入字段更改的时候，我希望更改第二个组件的内容。很简单，但是这个就可以了。

#### 介绍我们需要的新组件

我删除了 HelloWorld 组件，并添加一个表单组件和一个显示组件。

```HTML
<template>
    <div>
        <label for="flavor">Favorite ice cream flavor?</label>
        <input name="flavor">
    </div>
</template>

<template>
    <div>
        <p>You chose ???</p>
    </div>
</template>
```

#### 添加这些组件到应用程序

我们将它们添加到 `App.vue` 中而不是 HelloWorld 组件：

```HTML
<template>
    <div id="app">
        <Form />
        <Display />
    </div>
</template>

<script>
    import Form from './components/Form'
    import Display from './components/Display'

    export default {
        name: 'App',
        components: {
            Form,
            Display
        }
    }
</script>
```

#### 添加 state 到 store

有了这个，我们回到 store.js 文件。我们添加一个名为 `state` 的属性到 store 中，它是一个包含 `flavor` 属性的对象。一开始就是一个空字符串。

```JavaScript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: { flavor: '' }
})
```

我们将在用户输入字段时更新它。

#### 添加一个 mutation

state 除了通过 mutations 以外不能被控制。我们设置了一个将在 `Form` 组件内部使用的 mutation，以通知 store 应该更改 state。

```JavaScript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: { flavor: '' },
    mutations: {
        change(state, flavor) {
            state.flavor = flavor
        }
    }
})
```

#### 添加一个 getter 来引用一个 state 属性

有了这个集合，我们需要添加一种查看 state 的方法。我们是用 getters 来实现。我们为 `glavor` 属性设置了一个 getter：

```JavaScript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: { flavor: '' },
    mutations: {
        change(state, flavor) {
            state.flavor = flavor
        }
    },
    getters: {
        flavor: state => state.flavor
    }
})
```

注意 `getters` 是一个对象。`flavor` 是这个对象的一个属性，它接受 state 作为参数，并返回 state 的 `flavor` 属性。

#### 添加 Vuex store 到 应用程序

现在 store 可以使用了。我们回到我们的应用程序代码，在 main.js 文件中，我们需要导入 state 并使其在我们的 Vue 应用程序中可用。

我们添加

```JavaScript
import { store } from './store/store'
```

并且在 Vue 应用程序中添加它：

```JavaScript
new Vue({
    el: '#app',
    store,
    components: { App },
    template: '<App/>'
})
```

一旦我们添加了这个，因为这个是主要的 Vue 组件，每个 Vue 组件中的 `store` 变量将指向 Vuex 的 store。

#### 使用 commit 更新用户操作的 state

让我们在用户输入内容时更新 state。

我们通过使用 `store.commit()` API 来实现。

但首先，让我们创建一个在输入内容更改时调用的方法。我们使用 `@input` 而不是 `@change`，因为后者只在焦点从输入框移开时触发，而 `@input` 则在每次按键响应时调用。

```HTML
<template>
    <div>
        <label for="flavor">Favorite ice cream flavor?</label>
        <input @input="changed" name="flavor">
    </div>
</template>

<script>
    export default {
        methods: {
            changed: function(event) {
                alert(event.target.value)
            }
        }
    }
</script>
```

现在我们有了 flavor 的值，我们使用 Vuex API：

```HTML
<script>
    export default {
        methods: {
            changed: function(event) {
                this.$store.commit('change', event.target.value)
            }
        }
    }
</script>
```

看到我们如何使用 `this.$store` 引用 store 了吗？这要感谢主 Vue 组件初始化中包含的 `store` 对象。

`commit()` 方法接受一个 mutation 名（我们在 Vuex store 中使用 `change`）和一个 payload，它将作为回调函数的第二个参数传递给 mutation。

#### 使用 getter 打印 state 的值

现在我们需要使用 `$store.getters.flavor` 在 Display 模板中引用这个值的 getter，可以删除 `this`，因为我们在模板中， `this` 是隐式的。

```HTML
<template>
    <div>
        <p>You chose {{ $store.getters.flavor }}</p>
    </div>
</template>
```

完整的工作的源代码在[这里][59]是可用的

在这个难题中仍然有许多概念缺失：

-   actions
-   modules
-   helpers
-   plugins

但是你现在有了基本的知识，可以在官方文档阅读它们。

### 使用 Vue Router 处理 URLs

在 JavaScript web 应用程序中，router 是将当前显示的视图和浏览器地址栏内容同步的部分。

换句话说，它是你在单击页面中某个内容是进行 URL 更改的部分，并帮助你在单击特定 URL 的时候显示正确的视图。

传统上，web 是围绕 URLs 构建的。当你点击某个 URL 的时候，将显示一个特定的页面。

随着浏览器中运行的应用程序的引入和用户所看到内容的改变，许多应用程序破坏了这种交互，你必须使用浏览器的 History API 手动更新 URL。

当你需要将 URLS 同步到你的应用程序中的视图时，你需要一个 router。这是非常普遍的需求，现在所有主流的现代框架都允许你管理路由。

Vue Router 库是 Vue.js 应用程序的发展方向。Vue 不强制使用这个库。你可以使用任何通用的路由库，也可以创建自己的 History API 集成，但是使用 Vue Router 的好处是它是官方的。

这意味着它是维护 Vue 的相同人员维护的，因此你可以在框架中获得更一致的集成，并保证将来无论如何它都是兼容的。

#### 安装

Vue Router 可以通过 NPM 获得，包名为 `vue-router`。

如果你通过一个 script 标签使用 Vue，你可以通过使用引入使用 Vue Router

```HTML
<script src="https://unpkg.com/vue-router"></script>
```

[UNPKG][60] 是一个非常方便的工具，它使浏览器中的每个 NPM 包都可以通过一个简单的链接获得。

如果你使用 Vue CLI，安装它使用：

```Shell
npm install vue-router
```

一旦你安装了 `vue-router`，并使用 script 标签或通过 Vue CLI 让它可用，你现在就可以将它导入你的应用程序。

你在 `vue` 的后面引入它，然后你调用 `Vue.use(VueRouter)` 在应用程序中 **安装** 它：

```JavaScript
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```

调用 `Vue.use()` 传递 router 对象后，在应用程序的任何组件中你都可以访问以下对象：

-   `this.$router` 是一个 router 对象
-   `this.$route` 是当前 router 对象

#### router 对象

当 Vue Router 安装在 根 Vue 组件中时，可以从任何组件使用 `this.$router` 访问该 router 对象，它具有很多不错的功能。

我们可以使用应用程序导航到一个新的路 route

-   `this.$router.push()`
-   `this.$router.replace()`
-   `this.$router.go()`

类似于 History API 的 `pushState`、`replaceState` 和 `go` 方法。

-   `push()` 是用来跳转到一个新的路由，添加一个新的项到历史浏览器
-   `replace()` 是一样的，它不会将新的状态推送到历史记录

用法样本：

```JavaScript
this.$router.push('about') // named route, see later
this.$router.push({ path: 'about' })
this.$router.push({ path: 'post', query: { post_slug: 'hello-world' } }) // using query parameters (post?post_slug=hello-world)
this.$router.replace({ path: 'about' })
```

`go()` 返回或前进，接受一个可以为正数或负数的数字返回历史记录：

```JavaScript
this.$router.go(-1) // go back 1 step
this.$router.go(1) // go forward 1 step
```

#### 定义路由

在本例中，我是用了一个 Vue Single File Component（Vue 单文件组件）。

在模板中，我使用了一个 `nav` 标签，它有三个 `router-link` 组件，分别是 Home，Login 和 About 标签。URL 是通过 `to` 属性分配的。

`router-view` 组件是 Vue Router 放置与当前 URL 匹配的内容的地方。

```HTML
<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/about">About</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>
```

一个 `router-link` 组件在默认情况下会呈现一个 `a` 标签（你可以更改它）。每当路由发生变化时，无论是通过单击链接还是更改 URL，都会将 `router-link-active` class 添加到活动的路由的元素中，从而可以设置其样式。

在 JavaScript 部分，我们首先包含和安装 router，然后定义三个路由组件。

我们将他们传递给 `router` 对象的初始化，然后将底对象传递给 Vue 根实例。

这里是代码：

```JavaScript
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(Router)

const Home  = {  template: '<div>Home</div>'}
const Login = {  template: '<div>Login</div>'}
const About = {  template: '<div>About</div>'}

const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '/about', component: About }
    ]
})

new Vue({ router }).$mount('#app')
```

通常，在 Vue 应用程序中，你实例化并且挂载根应用程序使用：

```JavaScript
new Vue({ render: h => h(App) }).$mount('#app')
```

当你使用 Vue Router 时，你不会传递 `render` 属性，而是使用 `router`。

上面的例子中使用的语法：

```JavaScript
new Vue({ router: router }).$mount('#app')
```

缩写：

```JavaScript
new Vue({ router }).$mount('#app')
```

在本例中，我们将一个 `routers` 数组传递给 `VueRouter` 构造函数。该数组中的每个路由都有一个 `path` 和 `component` 参数。

如果你也传递一个 `name` 参数，你就有了一个命名路由。

#### 使用命名路由将参数传递给 router 的 push 和 replace 方法

还记得我们之前是如何使用 Router 对象来推送新的状态的吗？

```JavaScript
this.$router.push({ path: 'about' })
```

使用指定的路由，我们可以将参数传递给新路由：

```JavaScript
this.$router.push({
    name: 'post',
    params: { post_slug: 'hello-world' }
})
```

`replace()` 也一样：

```JavaScript
this.$router.replace({
    name: 'post',
    params: { post_slug: 'hello-world' }
})
```

#### 当用户点击 `router-link` 时会发生什么？

应用程序将渲染与传递给链接的 URL 匹配的路由组件。

处理 URL 的新路由组件将被实例化并调用其守卫，旧的路由组件将被销毁。

#### 导航守卫

既然我们提到了守卫，让我们来介绍一下。

你可以将他们看作生命周期钩子或中间件。这些函数是在引用程序执行期间的特定时间调用的。你可以插入并更改路由执行，重定向或简单的取消请求。

你可以通过给 router 的 `beforEach()` 和 `afterEach()` 属性添加回调来实现全局守卫。

-   `beforeEach()` 是在导航确认之前调用
-   `beforeResolve()` 是当执行 `beforEach()` 并调用 `beforeRouterEnter` 和 `beforeRouteUpdate` 守卫时，但在导航被确认前调用。最后检查。
-   `afterEach()` 在导航被确认后调用

“导航已确认”的意思是什么？我们马上就会看到。与此同时，把它想成 `应用程序可以去的路由`。

用法是：

```JavaScript
this.$router.beforeEach((to, from, next) => {  // ...})
```

```JavaScript
this.$router.afterEach((to, from) => {  // ...})
```

`to` 和 `from` 表示我们要去和来的路由对象

`beforeEach` 有一个额外的参数 `next`，如果我们使用 `false` 作为参数调用它，它将阻塞导航并导致未经确认。

就像在 Node 的中间件一样，如果你熟悉，用该总是调用 `next()`，否则执行就会陷入卡住。

单独的路由组件也有保护：

-   `beforeRouteEnter(from, to, next)` 在当前路由被确认之前调用
-   `beforeRouteUpdate(from, to, next)` 当路由改变但管理它的组件仍然相同时调用（对于动态路由，参见 `next`）
-   `beforeRouteLeave(from, to, next)` 当我们离开这里的时候

我们提到的导航。为了确定一个路由的导航是否被确认，Vue Router 执行了一些检查：

-   当前组件中调用 `beforeRouteLeave` 守卫
-   调用 router 的 `beforeEach()` 守卫
-   在任何需要复用的组件（如果存在的话）中调用 `beforeRouteUpdate（）`
-   在 route 对象上调用了 `beforeEnter()` 守卫（我没有提到它，但是你可以在[此处][61]查看）
-   在我们应该进入的组件中调用 `beforeRouterEnter()`
-   调用 router 的 `beforeResolve()` 守卫
-   如果一切正常，导航确认！
-   调用 router 的 `afterEach()` 守卫

你可以使用特定于路由的守卫（ `beforeRouteEnter` 和 `beforeRouteUpdate` 在动态路由的情况下）作为生命周期钩子，以便例如你可以启动数据获取请求。

#### 动态路由

上面的示例显示了一个基于 URL 的不同视图，用于处理 `/`， `/login` 和 `/about` 路由。

一个非常常见的需求是处理动态路由，比如在 `/post` 下面有所有的帖子，每个都以段命名：

-   `/post/first`
-   `/post/another-post`
-   `/post/hello-world`

可以使用动态段来实现这一点。

这些是静态段：

```JavaScript
const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '/about', component: About }
    ]
})
```

我们添加了一个动态段来处理博客文章：

```JavaScript
const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/post/:post_slug', component: Post },
        { path: '/login', component: Login },
        { path: '/about', component: About }
    ]
})
```

注意 `:post_slug` 语法。这意味着你可以使用任何字符串，并将其映射到 `post_slug` 占位符。

你不受这种语法的限制。Vue 以来 [这个库][62] 来解析动态路由，你可以随意使用正则表达式。

现在在 Post 路由组件中，我们可以使用 `$route` 引用路由，而帖子别名使用 `$route.params.post_slug`:

```JavaScript
const Post = {
    template: '<div>Post: {{ $route.params.post_slug }}</div>'
}
```

我们可以使用这个参数从后端加载内容。

你可以有许多你想要的动态段，在同一个网址：

`/post/:author/:post_slug`

还记得我们之前讨论过用户导航到新路由时会发生什么吗？

对于动态路由，情况略有不同。

为了使 Vue 更有效，它不是销毁当前路由组件并重新实例化它，而是重用当前实例。

当这种情况发生时，Vue 调用 `beforeRouteUpdate` 生命周期事件。

在那里你可以执行任何你需要的操作

```JavaScript
const Post = {
    template: '<div>Post: {{ $route.params.post_slug }}</div>',
    beforeRouteUpdate(to, from, next) {
        console.log(`Updating slug from ${from} to ${to}`)
        next() //make sure you always call next()
    }
}
```

#### 使用 props

在示例中，我使用了 `$route.params.*` 以取得路由数据。一个组件不应该与 router 紧密耦合，相反，我们可以使用 props：

```JavaScript
const Post = {
    props: ['post_slug'],
    template: '<div>Post: {{ post_slug }}</div>'
}

const router = new VueRouter({
    routes: [
        { path: '/post/:post_slug', component: Post, props: true }
    ]
})
```

注意 `props:true` 传递给 route 对象以启用此功能。

#### 嵌套路由

之前我提到过，你可以有很多你想要的动态段，在同一个 URL，像：

`/post/:author/:post_slug`

加入我们有一个负责第一个动态段的 Author 组件：

```HTML
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueRouter from 'vue-router'

    Vue.use(Router)

    const Author  = {
        template: '<div>Author: {{ $route.params.author}}</div>'
    }

    const router = new VueRouter({
        routes: [
            { path: '/post/:author', component: Author }
        ]
    })

    new Vue({router}).$mount('#app')
</script>
```

我们可以插入第二个 `router-view` 组件实例内的 Author 模板：

```JavaScript
const Author  = {
    template: '<div>Author: {{ $route.params.author}}<router-view></router-view></div>'
}
```

我们添加了 Post 组件：

```JavaScript
const Post = {
    template: '<div>Post: {{ $route.params.post_slug }}</div>'
}
```

然后我们将注入内部的动态路由在 `VueRouter` 配置：

```JavaScript
const router = new VueRouter({
    routes: [
        { path: '/post/:author', component: Author, children: [ path: ':post_slug', component: Post ] }
    ]
})
```

感谢你的阅读！

> 在 [vuehandbook.com][63] 获得本文的 PDF/ePub/Kindle 电子书（英文版）。

[1]: https://vuehandbook.com/
[2]: https://vuehandbook.com/?ref=medium
[3]: https://www.google.com/maps
[4]: https://www.google.com/gmail
[5]: https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started
[6]: https://jQuery.com/
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
[23]: https://cn.vuejs.org/v2/guide/syntax.html
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
[50]: http://requirejs.org/docs/commonjs.html
[51]: https://cn.vuejs.org/v2/guide/events.html#Event-Modifiers
[52]: https://cn.vuejs.org/v2/guide/custom-directive.html
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
[64]: https://cli.vuejs.org/zh/config/#vue-config-js
[65]: https://vuejs.org/v2/api/#Global-Config
[66]: https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6
[67]: https://cli.vuejs.org/zh/guide/html-and-static-assets.html#%E5%A4%84%E7%90%86%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90
