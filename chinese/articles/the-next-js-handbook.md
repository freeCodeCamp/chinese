> - 原文地址：[The Next.js Handbook](https://www.freecodecamp.org/news/the-next-js-handbook/)
> - 原文作者：[Flavio Copes](https://www.freecodecamp.org/news/author/flavio/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![The Next.js Handbook](https://www.freecodecamp.org/news/content/images/size/w2000/2019/11/Group-1.png)

我写这个教程是为了帮助你快速学习 Next.js 并熟悉它的工作原理。

如果你对 Next.js 没有什么了解，过去使用过 React，并且希望更深入地了解 React 生态系统，特别是服务器端的渲染，那么这篇教程就非常适合你。

我发现 Next.js 是创建 Web 应用的一个很棒的工具，在这篇文章的最后，我希望你会像我一样对它感到兴奋。我也希望它能帮助你学习 Next.js!

[注意：你可以下载本教程的 PDF/ePub/Mobi 版本，以便你可以离线阅读。](https://flaviocopes.com/page/nextjs-handbook/)!

## Index

1. [Introduction](#introduction)
2. [The main features provided by Next.js](#the-main-features-provided-by-next-js)
3. [Next.js vs Gatsby vs `create-react-app`](#next-js-vs-gatsby-vs-create-react-app)
4. How to install Next.js
5. [View source to confirm SSR is working](#view-source-to-confirm-ssr-is-working)
6. [The app bundles](#the-app-bundles)
7. [What's that icon in the bottom right?](#what-s-that-icon-on-the-bottom-right)
8. [Install the React DevTools](#install-the-react-developer-tools)
9. [Other debugging techniques you can use](#other-debugging-techniques-you-can-use)
10. [Adding a second page to the site](#adding-a-second-page-to-the-site)
11. [Linking the two pages](#linking-the-two-pages)
12. [Dynamic content with the router](#dynamic-content-with-the-router)
13. [Prefetching](#prefetching-1)
14. [Using the router to detect the active link](#using-the-router-to-detect-the-active-link)
15. [Using `next/router`](#using-next-router)
16. [Feed data to the components using `getInitialProps()`](#feed-data-to-the-components-using-getinitialprops)
17. [CSS](#css)
18. [Populating the head tag with custom tags](#populating-the-head-tag-with-custom-tags)
19. [Adding a wrapper component](#adding-a-wrapper-component)
20. [API routes](#api-routes)
21. [Run code on the server side, or on the client side](#run-code-only-on-the-server-side-or-client-side)
22. [Deploying the production version](#deploying-the-production-version)
23. [Deploying on Now](#deploying-on-now)
24. [Analyzing the app bundles](#analyzing-the-app-bundles)
25. [Lazy loading modules](#lazy-loading-modules)
26. [Where to go from here](#where-to-go-from-here)

## Introduction

在一个由 React 驱动的现代 JavaScript 应用程序上工作是非常棒的，直到你意识到有几个与在客户端渲染所有内容有关的问题。

首先，页面加载需要更长的时间才能对用户可见，因为在内容加载之前，所有的 JavaScript 必须加载，你的应用程序需要运行以确定在页面上显示什么。

第二，如果你正在建立一个公开的网站，你有一个内容搜索引擎优化(SEO)的问题。搜索引擎在运行和索引 JavaScript 应用程序方面越来越好，但如果我们能把内容发给他们，而不是让他们自己想办法解决，那就好得多。

解决这两个问题的方法是**服务器渲染（server rendering）**，也叫**静态预渲染（static pre-rendering）**。

[Next.js](https://nextjs.org) 是一个 React 框架，以一种非常简单的方式完成所有这些工作，但它并不限于此。它的创造者把它宣传为一个**零配置（zero-configuration）、单指令（single-command）的 React 应用工具链**。

它提供了一个通用的结构，使你能够轻松地建立一个前端的 React 应用程序，并透明地为你处理服务器端的渲染。

## The main features provided by Next.js

下面是一份 Next.js 不完全的主要功能的清单:

### Hot Code Reloading

Next.js 在检测到保存到磁盘的任何变化时，会重新加载页面。

### Automatic Routing

任何 URL 都被映射到文件系统中，映射到放在 `pages` 文件夹中的文件，你不需要任何配置（当然你有自定义选项）。

### Single File Components

使用`styled-jsx`，完全集成在同一个团队中，为组件添加样式的范围是很简单的。

### Server Rendering

你可以在服务器端渲染 React 组件，然后再将 HTML 发送到客户端。

### Ecosystem Compatibility

Next.js 与 JavaScript、Node 和 React 生态系统的其他部分配合良好。

### Automatic Code Splitting

渲染页面时，只需使用它们需要的库和 JavaScript，而无需其他。Next.js 不会生成一个包含所有应用程序代码的单一 JavaScript 文件，而是将应用程序自动分解为几个不同的资源。

加载一个页面只加载该特定页面所需的 JavaScript。

Next.js 通过分析导入的资源来做到这一点。

例如，如果你只有一个页面导入了 Axios 库，那么这个特定的页面将在打包（bundle）的时候包含该库。

这可以确保你的第一个页面加载速度尽可能快，而且只有未来的页面加载（如果它们将被触发）才会向客户端发送所需的 JavaScript。

有一个值得注意的例外。如果经常使用的导入程序在网站页面中至少有一半被使用，它们就会被打包到主 JavaScript 中。

### Prefetching

用于连接不同页面的 `Link` 组件支持 `prefetch` prop ，在后台自动预取页面资源（包括因代码分割而丢失的代码）。

### Dynamic Components

你可以动态地导入 JavaScript 模块和 React 组件。

### Static Exports

使用`next export`命令，Next.js 允许你从你的应用程序导出一个完全静态的网站。

### TypeScript Support

Next.js 是用 TypeScript 编写的，因此，它具有出色的 TypeScript 支持。

## Next.js vs Gatsby vs `create-react-app`

Next.js、[Gatsby](https://flaviocopes.com/gatsby/) 和 [`create-react-app`](https://flaviocopes.com/react-create-react-app/) 是了不起的工具，我们可以用它们来驱动我们的应用程序。

让我们先说说它们的共同点。它们都有 React，为整个开发体验提供支持。它们还抽象了 [webpack](https://flaviocopes.com/webpack/) 和所有那些我们在过去的好日子里需要手动配置底层东西。

`create-react-app` 并不能帮助你轻松生成一个服务器端渲染的应用程序。任何与之相关的东西（SEO、速度...）都只能由 Next.js 和 Gatsby 等工具提供。

**When is Next.js better than Gatsby?**

它们都可以帮助 **服务器端渲染(server-side rendering)**，但有两种不同的方式。

使用 Gatsby 的最终结果是一个静态网站生成器，没有服务器。你建立网站，然后将建立过程的结果静态地部署在 Netlify 或其他静态托管网站上。

Next.js 提供了一个可以在服务器端渲染响应请求的后端，允许你创建一个动态网站，这意味着你将把它部署在一个可以运行 Node.js 的平台上。

Next.js 也可以生成静态网站，但我不会说这是它的主要使用场景。

如果我的目标是建立一个静态网站，我将很难选择，Gatsby 可能有一个更好的插件生态系统，包括许多特别用于博客的插件。

Gatsby 在很大程度上也是基于 [GraphQL](https://flaviocopes.com/graphql/)，根据你的想法和需要，你可能真的喜欢或不喜欢。

## How to install Next.js?

要安装 Next.js，你需要安装 Node.js。

确保你有最新版本的 Node。在终端运行 `node -v` 进行检查，并与 [https://nodejs.org/](https://nodejs.org/) 上列出的最新 LTS 版本进行比较。

在你安装 Node.js 之后，你的命令行中就会有`npm`命令。

如果你在这个阶段有任何困难，我推荐你看我为你写的以下教程:

- [怎样安装 Node.js](https://flaviocopes.com/node-installation/)
- [怎样升级 Node.js](https://flaviocopes.com/how-to-update-node/)
- [npm 软件包管理器的介绍](https://flaviocopes.com/npm/)
- [Unix Shells 入门](https://flaviocopes.com/shells/)
- [如何使用 macOS 终端](https://flaviocopes.com/macos-terminal/)
- [The Bash Shell](https://flaviocopes.com/bash/)

现在你有了 Node，更新到了最新版本，还有`npm`，我们已经准备好了!

我们现在可以选择两条路线：使用 `create-next-app` 或传统的方法，即手动安装和设置 Next 应用程序。

### Using create-next-app

如果你熟悉 [`create-react-app`](https://flaviocopes.com/react-create-react-app/)，`create-next-app` 也是一样的，只不过它创建的是一个 Next 应用，而不是 React 应用，正如其名字所暗示的。

我假设你已经安装了 Node.js，从 5.2 版本开始（写这篇文章的时候已经是 2 年多以前了），Node.js 捆绑了 [`npx`命令](https://flaviocopes.com/npx/)。这个方便的工具可以让我们下载并执行一个 JavaScript 命令，我们将这样使用它:

```bash
npx create-next-app
```

该命令询问应用程序的名称（并以该名称为你创建一个新的文件夹），然后下载所有它需要的包（`react`，`react-dom`，`next`），将 `package.json` 设置为:

![Screen-Shot-2019-11-14-at-16.46.47](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-14-at-16.46.47.png)

你可以通过运行 `npm run dev` 立即运行示例应用程序:

![Screen-Shot-2019-11-14-at-16.46.32](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-14-at-16.46.32.png)

在下面看到 [http://localhost:3000](http://localhost:3000):

![Screen-Shot-2019-11-14-at-16.47.17](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-14-at-16.47.17.png)

这是启动 Next.js 应用程序的推荐方法，因为它为你提供了结构和示例代码。 不仅仅是默认的示例应用程序。 您可以使用存储在 [https://github.com/zeit/next.js/tree/canary/examples](https://github.com/zeit/next.js/tree/canary/examples) 中的任何示例 ) 使用 `--example` 选项。 例如尝试:

```bash
npx create-next-app --example blog-starter
```

这给你提供了一个开箱即用的博客实例，而且还带有语法高亮:

![Screen-Shot-2019-11-14-at-17.13.29](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-14-at-17.13.29.png)

### Manually create a Next.js app

如果你想从头开始创建一个 Next 应用程序，你可以避免 `create-next-app`。方法是：在你喜欢的任何地方创建一个空文件夹，例如在你的主文件夹中，然后进入该文件夹:

```sh
mkdir nextjs
cd nextjs
```

并创建你的第一个 Next 项目目录:

```sh
mkdir firstproject
cd firstproject
```

现在使用`npm`命令将其初始化为一个 Node 项目:

```sh
npm init -y
```

`-y`选项告诉`npm`使用项目的默认设置，生成一个模板文件——`package.json`。

![Screen-Shot-2019-11-04-at-16.59.21](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-16.59.21.png)

现在安装 Next 和 React:

```sh
npm install next react react-dom
```

你的项目文件夹现在应该有两个文件:

- `package.json` ([see my tutorial on it](https://flaviocopes.com/package-json/))
- `package-lock.json` ([see my tutorial on package-lock](https://flaviocopes.com/package-lock-json/))

和 `node_modules` 文件夹。

用你喜欢的编辑器打开项目文件夹。我最喜欢的编辑器是 [VS Code](https://flaviocopes.com/vscode/)。如果你安装了该软件，你可以在终端运行 `code`，在编辑器中打开当前文件夹（如果该命令对你不起作用，请参见 [this](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line))

打开`package.json` 文件，它现在有这样的内容:

```json
{
  "name": "firstproject",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies":  {
    "next": "^9.1.2",
    "react": "^16.11.0",
    "react-dom": "^16.11.0"
  }
}
```

并将 `scripts` 部分改为:

```json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

来添加 Next.js 的构建命令，我们很快就会用到它。

提示：使用 `"dev": "next -p 3001",` 来改变端口，在本例中，运行在 3001 端口。

![Screen-Shot-2019-11-04-at-17.01.03](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-17.01.03.png)

现在创建一个`pages`文件夹，并添加一个`index.js`文件。

在这个文件中，让我们创建我们的第一个 React 组件。

我们将使用它作为默认输出:

```js
const Index = () => (
  <div>
    <h1>Home page</h1>
  </div>
)

export default Index
```

现在使用终端，运行 `npm run dev` 来启动 Next 开发服务器。

这将使应用程序在本地主机上的 3000 端口可用。

![Screen-Shot-2019-11-04-at-11.24.02](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-11.24.02.png)

Open [http://localhost:3000](http://localhost:3000) in your browser to see it.

![Screen-Shot-2019-11-04-at-11.24.23](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-11.24.23.png)

## View source to confirm SSR is working

现在让我们检查一下这个应用程序是否按照我们期望的那样工作。这是一个 Next.js 应用程序，所以它应该是 **服务器端渲染的(server side rendered)**。

这是 Next.js 的主要卖点之一：如果我们使用 Next.js 创建一个网站，网站页面会在服务器上渲染，而服务器会将 HTML 传递给浏览器。

这有 3 个主要好处:

- 客户端不需要实例化 React 来渲染，这使得网站对你的用户来说更快。
- 搜索引擎会对页面进行索引，而不需要运行客户端的 JavaScript。谷歌开始解决这个问题（客户端渲染），但公开承认是一个较慢的过程（如果你想获得好的排名，你应该尽可能地帮助谷歌）。
- 你可以有社交媒体元标签，对添加预览图片，为你在 Facebook、Twitter 上分享的任何页面定制标题和描述都很有用。

让我们查看一下应用程序的源代码。
使用 Chrome 浏览器，你可以在页面的任何地方点击右键，然后按 **查看网页源代源（View Page Source）**。

![Screen-Shot-2019-11-04-at-11.33.10](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-11.33.10.png)

如果你查看页面的源代码，你会看到 HTML`body`中的`<div><h1>Home page</h1></div>`片段，以及一堆 JavaScript 文件——程序打包出的。

我们不需要设置什么，SSR（服务器端渲染）已经在为我们工作了。

React 应用程序将在客户端启动，并将是一个使用客户端渲染来支持点击链接等交互的应用程序。但重新加载一个页面将从服务器上重新加载。而使用 Next.js，在浏览器中的结果应该是没有区别的——服务器渲染的页面看起来应该和客户端渲染的页面一模一样。

## The app bundles

当我们查看页面源代码时，我们看到一堆 JavaScript 文件正在被加载:

![Screen-Shot-2019-11-04-at-11.34.41](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-11.34.41.png)

让我们先把代码放在 [HTML formatter](https://htmlformatter.com/) 中，使代码格式化得更好，这样我们更好地理解它:

```html
<!DOCTYPE html>
<html>

<head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
    <meta name="next-head-count" content="2" />
    <link rel="preload" href="/_next/static/development/pages/index.js?ts=1572863116051" as="script" />
    <link rel="preload" href="/_next/static/development/pages/_app.js?ts=1572863116051" as="script" />
    <link rel="preload" href="/_next/static/runtime/webpack.js?ts=1572863116051" as="script" />
    <link rel="preload" href="/_next/static/runtime/main.js?ts=1572863116051" as="script" />
</head>

<body>
    <div id="__next">
        <div>
            <h1>Home page</h1></div>
    </div>
    <script src="/_next/static/development/dll/dll_01ec57fc9b90d43b98a8.js?ts=1572863116051"></script>
    <script id="__NEXT_DATA__" type="application/json">{"dataManager":"[]","props":{"pageProps":{}},"page":"/","query":{},"buildId":"development","nextExport":true,"autoExport":true}</script>
    <script async="" data-next-page="/" src="/_next/static/development/pages/index.js?ts=1572863116051"></script>
    <script async="" data-next-page="/_app" src="/_next/static/development/pages/_app.js?ts=1572863116051"></script>
    <script src="/_next/static/runtime/webpack.js?ts=1572863116051" async=""></script>
    <script src="/_next/static/runtime/main.js?ts=1572863116051" async=""></script>
</body>

</html>
```

我们有 4 个 JavaScript 文件被声明要在 `head` 中预加载，使用
`rel="preload" as="script"`:

- `/_next/static/development/pages/index.js` (96 LOC)
- `/_next/static/development/pages/_app.js` (5900 LOC)
- `/_next/static/runtime/webpack.js` (939 LOC)
- `/_next/static/runtime/main.js` (12k LOC)

这告诉浏览器在正常的渲染流程开始之前，尽快开始加载这些文件。如果没有这些，脚本的加载会有额外的延迟，这就提高了页面的加载性能。

然后这 4 个文件被加载到 `body` 的末尾，还有`/_next/static/development/dll/dll_01ec57fc9b90d43b98a8.js`（31k LOC），以及一个为页面数据设置一些默认值的 JSON 片段:

```html
<script id="__NEXT_DATA__" type="application/json">
{
  "dataManager": "[]",
  "props": {
    "pageProps":  {}
  },
  "page": "/",
  "query": {},
  "buildId": "development",
  "nextExport": true,
  "autoExport": true
}
</script>
```

所加载的 4 个 bundle 文件已经实现了一个叫做代码分割(code splitting)的功能。`index.js` 文件提供了 `index` 组件所需的代码，它为`/`路由提供服务，如果我们有更多的页面，我们将为每个页面提供更多的 bundle，然后只有在需要时才会被加载——为页面提供一个更高性能的加载时间。

## What's that icon on the bottom right?

你看到页面右下方那个像闪电的小图标了吗？

![Screen-Shot-2019-11-04-at-13.21.42](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-13.21.42.png)

如果你把它悬停，它就会显示 "Prerendered Page"（预渲染的页面）:

![Screen-Shot-2019-11-04-at-13.21.46](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-13.21.46.png)

这个图标当然只在 _开发模式下可见_，它告诉你这个页面符合自动静态优化的条件，这基本上意味着它不依赖于需要在调用时获取的数据，它可以在构建时（当我们运行`npm run build`时）预先渲染并构建为静态 HTML 文件。

下一步可以通过页面组件上没有 `getInitialProps()`方法来确定。

在这种情况下，我们的页面可以更快，因为它将被静态化的一个 HTML 文件提供，而不是通过 Node.js 服务器生成 HTML 输出。

另一个有用的图标可能会出现在它旁边，或者在非预渲染页面上代替它，是一个小的动画三角形:

![Screen-Shot-2019-11-14-at-14.56.21](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-14-at-14.56.21.png)

这是一个编译指示器，当你保存一个页面，Next.js 正在编译应用程序，然后热代码重载启动，自动重新加载应用程序中的代码时，它就会出现。

这是一个非常好的方法，可以立即确定应用程序是否已经被编译，你可以测试你正在做的一部分。

## Install the React Developer Tools

Next.js 是基于 React 的，所以我们绝对需要安装一个非常有用的工具（如果你还没有），那就是 React 开发者工具（React Developer Tools）。

React 开发者工具同时适用于 [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) 和 [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)，它是你用来检查 React 应用程序的一个重要工具。

现在，React 开发者工具并不是专门针对 Next.js 的，但我想介绍一下，因为你可能对 React 提供的所有工具还不是 100%熟悉。与其假设你已经知道它们，不如去了解一下调试工具的情况。

他们提供了一个检查器，揭示了构建你的页面的 React 组件树，对于每个组件，你可以去检查 props、state、hooks，还有很多。

一旦你安装了 React 开发者工具，你可以打开常规的浏览器 devtools（在 Chrome 中，在页面上点击右键，然后点击`Inspect`），你会发现两个新的面板。**Components** 和 **Profiler**。

![Screen-Shot-2019-11-04-at-14.26.12](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-14.26.12.png)

如果你把鼠标移到组件(components)上，你会看到，在页面中，浏览器会选择由该组件渲染的部分。

如果你选择树中的任何一个组件(components)，右边的面板就会显示对的**父组件(parent component)**的引用，以及传递给它的 props:

![Screen-Shot-2019-11-04-at-14.27.05](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-14.27.05.png)

你可以通过点击组件(components)名称来轻松查找。

你可以点击开发工具工具栏中的 **眼睛图标** 来检查 DOM 元素，另外，如果你使用第一个图标，即带有鼠标图标的图标（它方便地位于类似的常规 DevTools 图标下），你可以在浏览器 UI 中悬停一个元素，直接选择渲染它的 React 组件。

你可以使用 `bug` 图标来记录一个组件的数据到控制台。

![Screen-Shot-2019-11-04-at-14.31.25](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-14.31.25.png)

这非常棒，因为一旦你把数据打印出来，你可以右击任何元素，然后按 "Store as a global variable"(存储为全局变量)。例如，在这里我对`url` prop 做了这个操作，我能够使用分配给它的临时变量 `temp1` 在控制台中检查它。:

![Screen-Shot-2019-11-04-at-14.40.22](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-14.40.22.png)

使用 Next.js 在开发模式下自动加载的 **Source Maps**，，我们可以在组件面板上点击`<>`代码，DevTools 将切换到 `Source panel`，向我们展示组件的源代码:

![Screen-Shot-2019-11-04-at-14.41.33](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-14.41.33.png)

如果可能的话，**Profiler** 标签甚至更棒。它允许我们在应用程序中**record an interaction(记录一个交互)**，并看看会发生什么。我还不能展示一个例子，因为它需要至少 2 个组件来创建一个交互，而我们现在只有一个。我以后再谈这个问题。

![Screen-Shot-2019-11-04-at-14.42.24](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-14.42.24.png)

我使用 Chrome 浏览器展示了所有的截图，但 React 开发工具在 Firefox 中的工作方式是一样的:

![Screen-Shot-2019-11-04-at-14.45.20](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-14.45.20.png)

## Other debugging techniques you can use

除了 React 开发者工具（这是构建 Next.js 应用程序所必需的）之外，我想强调调试 Next.js 应用程序的 2 种方法。

第一个显然是`console.log()`和所有[其他 Console API](https://flaviocopes.com/console-api/)工具。Next 应用程序的工作方式会使日志语句在浏览器控制台或在你使用`npm run dev`启动 Next 的终端中发挥作用。

特别是，如果页面从服务器上加载，当你把 URL 指向它，或者你点击刷新按钮/cmd/ctrl-R，任何控制台日志都会在终端发打印。

随后通过点击鼠标发生的页面转换将使所有的控制台记录发生在浏览器内。

如果你对缺失的日志记录感到惊讶，请记住。

另一个必不可少的工具是 `debugger` 语句。将此语句添加到一个组件中，将暂停浏览器渲染页面。:

![Screen-Shot-2019-11-04-at-15.10.32](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-15.10.32.png)

真的很厉害，因为现在你可以使用浏览器调试器来检查数值，并逐行运行你的应用程序。

你也可以使用 VS 代码调试器来调试服务器端的代码。我提到这个技术和[这个教程](https://github.com/Microsoft/vscode-recipes/tree/master/Next-js)来设置这个。

## Adding a second page to the site

Now that we have a good grasp of the tools we can use to help us develop Next.js apps, let's continue from where we left our first app:

![Screen-Shot-2019-11-04-at-13.21.42-1](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-13.21.42-1.png)

I want to add a second page to this website, a blog. It's going to be served into `/blog`, and for the time being it will just contain a simple static page, just like our first `index.js` component:

![Screen-Shot-2019-11-04-at-15.39.40](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-15.39.40.png)

After saving the new file, the `npm run dev` process already running is already capable of rendering the page, without the need to restart it.

When we hit the URL [http://localhost:3000/blog](http://localhost:3000/blog) we have the new page:

![Screen-Shot-2019-11-04-at-15.41.39](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-15.41.39.png)

and here's what the terminal told us:

![Screen-Shot-2019-11-04-at-15.41.03](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-15.41.03.png)

Now the fact that the URL is `/blog` depends on just the filename, and its position under the `pages` folder.

You can create a `pages/hey/ho` page, and that page will show up on the URL [http://localhost:3000/hey/ho](http://localhost:3000/hey/ho).

What does not matter, for the URL purposes, is the component name inside the file.

Try going and viewing the source of the page, when loaded from the server it will list `/_next/static/development/pages/blog.js` as one of the bundles loaded, and not `/_next/static/development/pages/index.js` like in the home page. This is because thanks to automatic code splitting we don't need the bundle that serves the home page. Just the bundle that serves the blog page.

![Screen-Shot-2019-11-04-at-16.24.53](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-16.24.53.png)

We can also just export an anonymous function from `blog.js`:

```js
export default () => (
  <div>
    <h1>Blog</h1>
  </div>
)
```

or if you prefer the non-arrow function syntax:

```js
export default function() {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  )
}
```

## Linking the two pages

Now that we have 2 pages, defined by `index.js` and `blog.js`, we can introduce links.

Normal HTML links within pages are done using the `a` tag:

```html
<a href="/blog">Blog</a>
```

We can't do do that in Next.js.

Why? We technically _can_, of course, because this is the Web and _on the Web things never break_ (that's why we can still use the `<marquee>` tag. But one of the main benefits of using Next is that once a page is loaded, transitions to other page are very fast thanks to client-side rendering.

If you use a plain `a` link:

```js
const Index = () => (
  <div>
    <h1>Home page</h1>
    <a href='/blog'>Blog</a>
  </div>
)

export default Index
```

Now open the **DevTools**, and the **Network panel** in particular. The first time we load `http://localhost:3000/` we get all the page bundles loaded:

![Screen-Shot-2019-11-04-at-16.26.00](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-16.26.00.png)

Now if you click the "Preserve log" button (to avoid clearing the Network panel), and click the "Blog" link, this is what happens:

![Screen-Shot-2019-11-04-at-16.27.16](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-16.27.16.png)

We got all that JavaScript from the server, again! But.. we don't need all that JavaScript if we already got it. We'd just need the `blog.js` page bundle, the only one that's new to the page.

To fix this problem, we use a component provided by Next, called Link.

We import it:

```js
import Link from 'next/link'
```

and then we use it to wrap our link, like this:

```js
import Link from 'next/link'

const Index = () => (
  <div>
    <h1>Home page</h1>
    <Link href='/blog'>
      <a>Blog</a>
    </Link>
  </div>
)

export default Index
```

Now if you retry the thing we did previously, you'll be able to see that only the `blog.js` bundle is loaded when we move to the blog page:

![Screen-Shot-2019-11-04-at-16.35.18](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-16.35.18.png)

and the page loaded so faster than before, the browser usual spinner on the tab didn't even appear. Yet the URL changed, as you can see. This is working seamlessly with the browser [History API](https://flaviocopes.com/history-api/).

This is client-side rendering in action.

What if you now press the back button? Nothing is being loaded, because the browser still has the old `index.js` bundle in place, ready to load the `/index` route. It's all automatic!

## Dynamic content with the router

In the previous chapter we saw how to link the home to the blog page.

A blog is a great use case for Next.js, one we'll continue to explore in this chapter by adding **blog posts**.

Blog posts have a dynamic URL. For example a post titled "Hello World" might have the URL `/blog/hello-world`. A post titled "My second post" might have the URL `/blog/my-second-post`.

This content is dynamic, and might be taken from a database, markdown files or more.

Next.js can serve dynamic content based on a **dynamic URL**.

We create a dynamic URL by creating a dynamic page with the `[]` syntax.

How? We add a `pages/blog/[id].js` file. This file will handle all the dynamic URLs under the `/blog/` route, like the ones we mentioned above: `/blog/hello-world`, `/blog/my-second-post` and more.

In the file name, `[id]` inside the square brackets means that anything that's dynamic will be put inside the `id` parameter of the **query property** of the **router**.

Ok, that's a bit too many things at once.

What's the **router**?

The router is a library provided by Next.js.

We import it from `next/router`:

```js
import { useRouter } from 'next/router'
```

and once we have `useRouter`, we instantiate the router object using:

```js
const router = useRouter()
```

Once we have this router object, we can extract information from it.

In particular we can get the dynamic part of the URL in the `[id].js` file by accessing `router.query.id`.

The dynamic part can also just be a portion of the URL, like `post-[id].js`.

So let's go on and apply all those things in practice.

Create the file `pages/blog/[id].js`:

```js
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()

  return (
    <>
      <h1>Blog post</h1>
      <p>Post id: {router.query.id}</p>
    </>
  )
}
```

Now if you go to the `http://localhost:3000/blog/test` router, you should see this:

![Screen-Shot-2019-11-05-at-16.41.32](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-05-at-16.41.32.png)

We can use this `id` parameter to gather the post from a list of posts. From a database, for example. To keep things simple we'll add a `posts.json` file in the project root folder:

```js
{
  "test": {
    "title": "test post",
    "content": "Hey some post content"
  },
  "second": {
    "title": "second post",
    "content": "Hey this is the second post content"
  }
}
```

Now we can import it and lookup the post from the `id` key:

```js
import { useRouter } from 'next/router'
import posts from '../../posts.json'

export default () => {
  const router = useRouter()

  const post = posts[router.query.id]

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}
```

Reloading the page should show us this result:

![Screen-Shot-2019-11-05-at-16.44.07](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-05-at-16.44.07.png)

But it's not! Instead, we get an error in the console, and an error in the browser, too:

![Screen-Shot-2019-11-05-at-18.18.17](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-05-at-18.18.17.png)

Why? Because.. during rendering, when the component is initialized, the data is not there yet. We'll see how to provide the data to the component with getInitialProps in the next lesson.

For now, add a little `if (!post) return <p></p>` check before returning the JSX:

```js
import { useRouter } from 'next/router'
import posts from '../../posts.json'

export default () => {
  const router = useRouter()

  const post = posts[router.query.id]
  if (!post) return <p></p>

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}
```

Now things should work. Initially the component is rendered without the dynamic `router.query.id` information. After rendering, Next.js triggers an update with the query value and the page displays the correct information.

And if you view source, there is that empty `<p>` tag in the HTML:

![Screen-Shot-2019-11-05-at-18.20.58](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-05-at-18.20.58.png)

We'll soon fix this issue that fails to implement SSR and this harms both loading times for our users, SEO and social sharing as we already discussed.

We can complete the blog example by listing those posts in `pages/blog.js`:

```js
import posts from '../posts.json'

const Blog = () => (
  <div>
    <h1>Blog</h1>

    <ul>
      {Object.entries(posts).map((value, index) => {
        return <li key={index}>{value[1].title}</li>
      })}
    </ul>
  </div>
)

export default Blog
```

And we can link them to the individual post pages, by importing `Link` from `next/link` and using it inside the posts loop:

```js
import Link from 'next/link'
import posts from '../posts.json'

const Blog = () => (
  <div>
    <h1>Blog</h1>

    <ul>
      {Object.entries(posts).map((value, index) => {
        return (
          <li key={index}>
            <Link href='/blog/[id]' as={'/blog/' + value[0]}>
              <a>{value[1].title}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  </div>
)

export default Blog
```

## Prefetching

I mentioned previously how the `Link` Next.js component can be used to create links between 2 pages, and when you use it, Next.js **transparently handles frontend routing** for us, so when a user clicks a link, frontend takes care of showing the new page without triggering a new client/server request and response cycle, as it normally happens with web pages.

There's another thing that Next.js does for you when you use `Link`.

As soon as an element wrapped within `<Link>` appears in the viewport (which means it's visible to the website user), Next.js prefetches the URL it points to, as long as it's a local link (on your website), making the application super fast to the viewer.

This behavior is only being triggered in **production mode** (we'll talk about this in-depth later), which means you have to stop the application if you are running it with `npm run dev`, compile your production bundle with `npm run build` and run it with  `npm run start` instead.

Using the Network inspector in the DevTools you'll notice that any links above the fold, at page load, start the prefetching as soon as the `load` event has been fired on your page (triggered when the page is fully loaded, and happens after the `DOMContentLoaded` event).

Any other `Link` tag not in the viewport will be prefetched when the user scrolls and it

Prefetching is automatic on high speed connections (Wifi and 3g+ connections, unless the browser sends the [`Save-Data` HTTP Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Save-Data).

You can opt out from prefetching individual `Link` instances by setting the `prefetch` prop to `false`:

```jsx
<Link href="/a-link" prefetch={false}>
  <a>A link</a>
</Link>
```

## Using the router to detect the active link

One very important feature when working with links is determining what is the current URL, and in particular assigning a class to the active link, so we can style it differently from the other ones.

This is especially useful in your site header, for example.

The Next.js default `Link` component offered in `next/link` does not do this automatically for us.

We can create a Link component ourselves, and we store it in a file `Link.js` in the Components folder, and import that instead of the default `next/link`.

In this component, we'll first import React from `react`, Link from `next/link` and the `useRouter` hook from `next/router`.

Inside the component we determine if the current path name matches the `href` prop of the component, and if so we append the `selected` class to the children.

We finally return this children with the updated class, using `React.cloneElement()`:

```js
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ href, children }) => {
  const router = useRouter()

  let className = children.props.className || ''
  if (router.pathname === href) {
    className = `${className} selected`
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}
```

## Using `next/router`

We already saw how to use the Link component to declaratively handle routing in Next.js apps.

It's really handy to manage routing in JSX, but sometimes you need to trigger a routing change programmatically.

In this case, you can access the Next.js Router directly, provided in the `next/router` package, and call its `push()` method.

Here's an example of accessing the router:

```js
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  //...
}
```

Once we get the router object by invoking `useRouter()`, we can use its methods.

This is the client side router, so methods should only be used in frontend facing code. The easiest way to ensure this is to wrap calls in the `useEffect()` React hook, or inside `componentDidMount()` in React stateful components.

The ones you'll likely use the most are `push()` and `prefetch()`.

`push()` allows us to programmatically trigger a URL change, in the frontend:

```js
router.push('/login')
```

`prefetch()` allows us to programmatically prefetch a URL, useful when we don't have a `Link` tag which automatically handles prefetching for us:

```js
router.prefetch('/login')
```

Full example:

```js
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/login')
  })
}
```

You can also use the router to listen for [route change events](https://nextjs.org/docs#router-events).

## Feed data to the components using getInitialProps

In the previous chapter we had an issue with dynamically generating the post page, because the component required some data up front, and when we tried to get the data from the JSON file:

```js
import { useRouter } from 'next/router'
import posts from '../../posts.json'

export default () => {
  const router = useRouter()

  const post = posts[router.query.id]

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}
```

we got this error:

![Screen-Shot-2019-11-05-at-18.18.17-1](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-05-at-18.18.17-1.png)

How do we solve this? And how do we make SSR work for dynamic routes?

We must provide the component with props, using a special function called `getInitialProps()` which is attached to the component.

To do so, first we name the component:

```js
const Post = () => {
  //...
}

export default Post
```

then we add the function to it:

```js
const Post = () => {
  //...
}

Post.getInitialProps = () => {
  //...
}

export default Post
```

This function gets an object as its argument, which contains several properties. In particular, the thing we are interested into now is that we get the `query` object, the one we used previously to get the post id.

So we can get it using the _object destructuring_ syntax:

```js
Post.getInitialProps = ({ query }) => {
  //...
}
```

Now we can return the post from this function:

```js
Post.getInitialProps = ({ query }) => {
  return {
    post: posts[query.id]
  }
}
```

And we can also remove the import of `useRouter`, and we get the post from the `props` property passed to the `Post` component:

```js
import posts from '../../posts.json'

const Post = props => {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
    </div>
  )
}

Post.getInitialProps = ({ query }) => {
  return {
    post: posts[query.id]
  }
}

export default Post
```

Now there will be no error, and SSR will be working as expected, as you can see checking view source:

![Screen-Shot-2019-11-05-at-18.53.02](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-05-at-18.53.02.png)

The `getInitialProps` function will be executed on the server side, but also on the client side, when we navigate to a new page using the `Link` component as we did.

It's important to note that `getInitialProps` gets, in the context object it receives, in addition to the `query` object these other properties:

- `pathname`: the `path` section of URL
- `asPath` - String of the actual path (including the query) shows in the browser

which in the case of calling `http://localhost:3000/blog/test` will respectively result to:

- `/blog/[id]`
- `/blog/test`

And in the case of server side rendering, it will also receive:

- `req`: the HTTP request object
- `res`: the HTTP response object
- `err`: an error object

`req` and `res` will be familiar to you if you've done any Node.js coding.

## CSS

How do we style React components in Next.js?

We have a lot of freedom, because we can use whatever library we prefer.

But Next.js comes with [`styled-jsx`](https://github.com/zeit/styled-jsx) built-in, because that's a library built by the same people working on Next.js.

And it's a pretty cool library that provides us scoped CSS, which is great for maintainability because the CSS is only affecting the component it's applied to.

I think this is a great approach at writing CSS, without the need to apply additional libraries or preprocessors that add complexity.

To add CSS to a React component in Next.js we insert it inside a snippet in the JSX, which start with

```js
<style jsx>{`
```

and ends with

```js
`}</style>
```

Inside this weird blocks we write plain CSS, as we'd do in a `.css` file:

```js
<style jsx>{`
  h1 {
    font-size: 3rem;
  }
`}</style>
```

You write it inside the JSX, like this:

```js
const Index = () => (
  <div>
  <h1>Home page</h1>

  <style jsx>{`
    h1 {
      font-size: 3rem;
    }
  `}</style>
  </div>
)

export default Index
```

Inside the block we can use interpolation to dynamically change the values. For example here we assume a `size` prop is being passed by the parent component, and we use it in the `styled-jsx` block:

```js
const Index = props => (
  <div>
  <h1>Home page</h1>

  <style jsx>{`
    h1 {
      font-size: ${props.size}rem;
    }
  `}</style>
  </div>
)
```

If you want to apply some CSS globally, not scoped to a component, you add the `global` keyword to the `style` tag:

```jsx
<style jsx global>{`
body {
  margin: 0;
}
`}</style>
```

If you want to import an external CSS file in a Next.js component, you have to first install `@zeit/next-css`:

```bash
npm install @zeit/next-css
```

and then create a configuration file in the root of the project, called `next.config.js`, with this content:

```js
const withCSS = require('@zeit/next-css')
module.exports = withCSS()
```

After restarting the Next app, you can now import CSS like you normally do with JavaScript libraries or components:

```js
import '../style.css'
```

You can also import a SASS file directly, using the [`@zeit/next-sass`](https://github.com/zeit/next-plugins/tree/master/packages/next-sass) library instead.

## Populating the head tag with custom tags

From any Next.js page component, you can add information to the page header.

This is handy when:

- you want to customize the page title
- you want to change a meta tag

How can you do so?

Inside every component you can import the `Head` component from `next/head` and include it in your component JSX output:

```js
import Head from 'next/head'

const House = props => (
  <div>
    <Head>
      <title>The page title</title>
    </Head>
    {/* the rest of the JSX */}
  </div>
)

export default House
```

You can add any HTML tag you'd like to appear in the `<head>` section of the page.

When mounting the component, Next.js will make sure the tags inside `Head` are added to the heading of the page. Same when unmounting the component, Next.js will take care of removing those tags.

## Adding a wrapper component

All the pages on your site look more or less the same. There's a chrome window, a common base layer, and you just want to change what's inside.

There's a nav bar, a sidebar, and then the actual content.

How do you build such system in Next.js?

There are 2 ways. One is using a [Higher Order Component](https://flaviocopes.com/react-higher-order-components/), by creating a `components/Layout.js` component:

```js
export default Page => {
  return () => (
    <div>
      <nav>
        <ul>....</ul>
      </hav>
      <main>
        <Page />
      </main>
    </div>
  )
}
```

In there we can import separate components for heading and/or sidebar, and we can also add all the CSS we need.

And you use it in every page like this:

```js
import withLayout from '../components/Layout.js'

const Page = () => <p>Here's a page!</p>

export default withLayout(Page)
```

But I found this works only for simple cases, where you don't need to call `getInitialProps()` on a page.

Why?

Because `getInitialProps()` gets only called on the page component. But if we export the Higher Order Component withLayout() from a page, `Page.getInitialProps()` is not called. `withLayout.getInitialProps()` would.

To avoid unnecessarily complicating our codebase, the alternative approach is to use props:

```js
export default props => (
  <div>
    <nav>
      <ul>....</ul>
    </hav>
    <main>
      {props.content}
    </main>
  </div>
)
```

and in our pages now we use it like this:

```js
import Layout from '../components/Layout.js'

const Page = () => (
  <Layout content={(
    <p>Here's a page!</p>
  )} />
)
```

This approach lets us use `getInitialProps()` from within our page component, with the only downside of having to write the component JSX inside the `content` prop:

```js
import Layout from '../components/Layout.js'

const Page = () => (
  <Layout content={(
    <p>Here's a page!</p>
  )} />
)

Page.getInitialProps = ({ query }) => {
  //...
}
```

## API Routes

In addition to creating **page routes**, which means pages are served to the browser as Web pages, Next.js can create **API routes**.

This is a very interesting feature because it means that Next.js can be used to create a frontend for data that is stored and retrieved by Next.js itself, transferring JSON via fetch requests.

API routes live under the `/pages/api/` folder and are mapped to the `/api` endpoint.

This feature is _very_ useful when creating applications.

In those routes, we write Node.js code (rather than React code). It's a paradigm shift, you move from the frontend to the backend, but very seamlessly.

Say you have a `/pages/api/comments.js` file, whose goal is to return the comments of a blog post as JSON.

Say you have a list of comments stored in a `comments.json` file:

```json
[
  {
    "comment": "First"
  },
  {
    "comment": "Nice post"
  }
]
```

Here's a sample code, which returns to the client the list of comments:

```js
import comments from './comments.json'

export default (req, res) => {
  res.status(200).json(comments)
}
```

It will listen on the `/api/comments` URL for GET requests, and you can try calling it using your browser:

![Screen-Shot-2019-11-07-at-11.14.42](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-07-at-11.14.42.png)

API routes can also use **dynamic routing** like pages, use the `[]` syntax to create a dynamic API route, like `/pages/api/comments/[id].js` which will retrieve the comments specific to a post id.

Inside the `[id].js` you can retrieve the `id` value by looking it up inside the `req.query` object:

```js
import comments from '../comments.json'

export default (req, res) => {
  res.status(200).json({ post: req.query.id, comments })
}
```

Heres you can see the above code in action:

![Screen-Shot-2019-11-07-at-11.59.53](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-07-at-11.59.53.png)

In dynamic pages, you'd need to import `useRouter` from `next/router`, then get the router object using `const router = useRouter()`, and then we'd be able to get the `id` value using `router.query.id`.

In the server-side it's all easier, as the query is attached to the request object.

If you do a POST request, all works in the same way - it all goes through that default export.

To separate POST from GET and other HTTP methods (PUT, DELETE), lookup the `req.method` value:

```js
export default (req, res) => {
  switch (req.method) {
    case 'GET':
      //...
      break
    case 'POST':
      //...
      break
    default:
      res.status(405).end() //Method Not Allowed
      break
  }
}
```

In addition to `req.query` and `req.method` we already saw, we have access to cookies by referencing `req.cookies`, the request body in `req.body`.

Under the hoods, this is all powered by [Micro](https://github.com/zeit/micro), a library that powers asynchronous HTTP microservices, made by the same team that built Next.js.

You can make use of any Micro middleware in our API routes to add more functionality.

## Run code only on the server side or client side

In your page components, you can execute code only in the server-side or on the client-side, by checking the `window` property.

This property is only existing inside the browser, so you can check

```js
if (typeof window === 'undefined') {

}
```

and add the server-side code in that block.

Similarly, you can execute client-side code only by checking

```js
if (typeof window !== 'undefined') {

}
```

JS Tip: We use the `typeof` operator here because we can't detect a value to be undefined in other ways. We can't do `if (window === undefined)` because we'd get a "window is not defined" runtime error

Next.js, as a build-time optimization, also removes the code that uses those checks from bundles. A client-side bundle will not include the content wrapped into a `if (typeof window === 'undefined') {}` block.

## Deploying the production version

Deploying an app is always left last in tutorials.

Here I want to introduce it early, just because it's so easy to deploy a Next.js app that we can dive into it now, and then move on to other more complex topics later on.

Remember in the "How to install Next.js" chapter I told you to add those 3 lines to the `package.json` `script` section:

```json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

We used `npm run dev` up to now, to call the `next` command installed locally in `node_modules/next/dist/bin/next`. This started the development server, which provided us **source maps** and **hot code reloading**, two very useful features while debugging.

The same command can be invoked to build the website passing the `build` flag, by running `npm run build`. Then, the same command can be used to start the production app passing the `start` flag, by running `npm run start`.

Those 2 commands are the ones we must invoke to successfully deploy the production version of our site locally. The production version is highly optimized and does not come with source maps and other things like hot code reloading that would not be beneficial to our end users.

So, let's create a production deploy of our app. Build it using:

```bash
npm run build
```

![Screen-Shot-2019-11-06-at-13.46.31](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-13.46.31.png)

The output of the command tells us that some routes (`/` and `/blog` are now prerendered as static HTML, while `/blog/[id]` will be served by the Node.js backend.

Then you can run `npm run start` to start the production server locally:

```bash
npm run start
```

![Screen-Shot-2019-11-06-at-13.47.01](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-13.47.01.png)

Visiting [http://localhost:3000](http://localhost:3000) will show us the production version of the app, locally.

## Deploying on Now

In the previous chapter we deployed the Next.js application locally.

How do we deploy it to a real web server, so other people can access it?

One of the most simple ways to deploy a Next application is through the **Now** platform created by [Zeit](https://zeit.co),  the same company that created the Open Source project Next.js. You can use Now to deploy Node.js apps, Static Websites, and much more.

Now makes the deployment and distribution step of an app very, very simple and fast, and in addition to Node.js apps, they also support deploying Go, PHP, Python and other languages.

You can think of it as the "cloud", as you don't really know where your app will be deployed, but you know that you will have a URL where you can reach it.

Now is free to start using, with generous free plan that currently includes 100GB of hosting, 1000 [serverless](https://www.freecodecamp.org/news/serverless/) functions invocations per day, 1000 builds per month, 100GB of bandwidth per month, and one [CDN](https://www.freecodecamp.org/news/cdn/) location. The [pricing page](https://zeit.co/pricing) helps get an idea of the costs if you need more.

The best way to start using Now is by using the official Now CLI:

```bash
npm install -g now
```

Once the command is available, run

```bash
now login
```

and the app will ask you for your email.

If you haven't registered already, create an account on [https://zeit.co/signup](https://zeit.co/signup) before continuing, then add your email to the CLI client.

Once this is done, from the Next.js project root folder run

```bash
now
```

and the app will be instantly deployed to the Now cloud, and you'll be given the unique app URL:

![Screen-Shot-2019-11-06-at-14.21.09](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-14.21.09.png)

Once you run the `now` program, the app is deployed to a random URL under the `now.sh` domain.

We can see 3 different URLs in the output given in the image:

- [https://firstproject-2pv7khwwr.now.sh](https://firstproject-2pv7khwwr.now.sh)
- [https://firstproject-sepia-ten.now.sh](https://firstproject-sepia-ten.now.sh)
- [https://firstproject.flaviocopes.now.sh](https://firstproject.flaviocopes.now.sh)

Why so many?

The first is the URL identifying the deploy. Every time we deploy the app, this URL will change.

You can test immediately by changing something in the project code, and running `now` again:

![Screen-Shot-2019-11-06-at-15.08.11](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-15.08.11.png)

The other 2 URLs will not change. The first is a random one, the second is your project name (which defaults to the current project folder, your account name and then `now.sh`.

If you visit the URL, you will see the app deployed to production.

![Screen-Shot-2019-11-06-at-14.21.43](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-14.21.43.png)

You can configure Now to serve the site to your own custom domain or subdomain, but I will not dive into that right now.

The `now.sh` subdomain is enough for our testing purposes.

## Analyzing the app bundles

Next provides us a way to analyze the code bundles that are generated.

Open the package.json file of the app and in the scripts section add those 3 new commands:

```json
"analyze": "cross-env ANALYZE=true next build",
"analyze:server": "cross-env BUNDLE_ANALYZE=server next build",
"analyze:browser": "cross-env BUNDLE_ANALYZE=browser next build"
```

Like this:

```json
{
  "name": "firstproject",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start",
    "analyze": "cross-env ANALYZE=true next build",
    "analyze:server": "cross-env BUNDLE_ANALYZE=server next build",
    "analyze:browser": "cross-env BUNDLE_ANALYZE=browser next build"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "next": "^9.1.2",
    "react": "^16.11.0",
    "react-dom": "^16.11.0"
  }
}
```

then install those 2 packages:

```bash
npm install --dev cross-env @next/bundle-analyzer
```

Create a `next.config.js` file in the project root, with this content:

```js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({})
```

Now run the command

```bash
npm run analyze
```

![Screen-Shot-2019-11-06-at-16.12.40](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-16.12.40.png)

This should open 2 pages in the browser. One for the client bundles, and one for the server bundles:

![Screen-Shot-2019-11-06-at-16.11.14](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-16.11.14.png)

![Screen-Shot-2019-11-06-at-16.11.23](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-16.11.23.png)

This is incredibly useful. You can inspect what's taking the most space in the bundles, and you can also use the sidebar to exclude bundles, for an easier visualization of the smaller ones:

![Screen-Shot-2019-11-06-at-16.14.12](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-16.14.12.png)

## Lazy loading modules

Being able to visually analyze a bundle is great because we can optimize our application very easily.

Say we need to load the Moment library in our blog posts. Run:

```bash
npm install moment
```

to include it in the project.

Now let's simulate the fact we need it on two different routes: `/blog` and `/blog/[id]`.

We import it in `pages/blog/[id].js`:

```jsx
import moment from 'moment'

...

const Post = props => {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>Published on {moment().format('dddd D MMMM YYYY')}</p>
      <p>{props.post.content}</p>
    </div>
  )
}
```

I'm just adding today's date, as an example.

This will include Moment.js in the blog post page bundle, as you can see by running `npm run analyze`:

![Screen-Shot-2019-11-06-at-17.56.14](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-17.56.14.png)

See that we now have a red entry in `/blog/[id]`, the route that we added Moment.js to!

It went from ~1kB to 350kB, quite a big deal. And this is because the Moment.js library itself is 349kB.

The client bundles visualization now shows us that the bigger bundle is the page one, which before was very little. And 99% of its code is Moment.js.

![Screen-Shot-2019-11-06-at-17.55.50](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-17.55.50.png)

Every time we load a blog post we are going to have all this code transferred to the client. Which is not ideal.

One fix would be to look for a library with a smaller size, as Moment.js is not known for being lightweight (especially out of the box with all the locales included), but let's assume for the sake of the example that we must use it.

What we can do instead is separating all the Moment code in a **separate bundle**.

How? Instead of importing Moment at the component level, we perform an async import inside `getInitialProps`, and we calculate the value to send to the component.  
Remember that we can't return complex objects inside the `getInitialProps()` returned object, so we calculate the date inside it:

```js
import posts from '../../posts.json'

const Post = props => {
  return (
    <div>
      <h1>{props.post.title}</h1>
      <p>Published on {props.date}</p>
      <p>{props.post.content}</p>
    </div>
  )
}

Post.getInitialProps = async ({ query }) => {
  const moment = (await import('moment')).default()
  return {
    date: moment.format('dddd D MMMM YYYY'),
    post: posts[query.id]
  }
}

export default Post
```

See that special call to `.default()` after `await import`? It's needed to reference the default export in a dynamic import (see [https://v8.dev/features/dynamic-import](https://v8.dev/features/dynamic-import))

Now if we run `npm run analyze` again, we can see this:

![Screen-Shot-2019-11-06-at-18.00.22](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-18.00.22.png)

Our `/blog/[id]` bundle is again very small, as Moment has been moved to its own bundle file, loaded separately by the browser.

## Where to go from here

There is a lot more to know about Next.js. I didn't talk about managing user sessions with login, serverless, managing databases, and so on.

The goal of this Handbook is not to teach you everything, but instead it aims to introduce you, gradually, to all the power of Next.js.

The next step I recommend is to take a good read at the [Next.js official documentation](https://nextjs.org/docs) to find out more about all the features and functionality I didn't talk about, and take a look at all the additional functionalities introduced by [Next.js plugins](https://github.com/zeit/next-plugins), some of which are pretty amazing.

You can reach me on Twitter [@flaviocopes](https://twitter.com/flaviocopes).

Also check out my website, [flaviocopes.com](https://flaviocopes.com/).

[Note: you can download a PDF / ePub / Mobi version of this tutorial so you can read it offline](https://flaviocopes.com/page/nextjs-handbook/)!
