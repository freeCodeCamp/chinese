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

1. [介绍](./#introduction)
2. [Next.js 提供的主要功能](./#the-main-features-provided-by-next-js)
3. [Next.js vs Gatsby vs `create-react-app`](#next-js-vs-gatsby-vs-create-react-app)
4. [如何安装 Next.js](./#how-to-install-nextjs)
5. [查看来源以确认 SSR 的工作](./#view-source-to-confirm-ssr-is-working)
6. [The app bundles](#the-app-bundles)
7. [右下角的那个图标是什么？](./#what-s-that-icon-on-the-bottom-right)
8. [安装 React DevTools](./#install-the-react-developer-tools)
9. [你可以使用的其他调试技术](./#other-debugging-techniques-you-can-use)
10. [在网站上添加第二页](./#adding-a-second-page-to-the-site)
11. [链接这两个页面](./#linking-the-two-pages)
12. [路由与动态内容](./#dynamic-content-with-the-router)
13. [Prefetching(预取)](#prefetching-1)
14. [使用路由器来检测活动链接](./#using-the-router-to-detect-the-active-link)
15. [使用 next/router](./#using-next-router)
16. [使用 getInitialProps() 向组件提供数据](./#feed-data-to-the-components-using-getinitialprops)
17. [CSS](#css)
18. [用自定义标签填充 head 标签](./#populating-the-head-tag-with-custom-tags)
19. [添加一个封装组件](./#adding-a-wrapper-component)
20. [API routes](#api-routes)
21. [在服务器端，或在客户端运行代码](./#run-code-only-on-the-server-side-or-client-side)
22. [部署生产版本](./#deploying-the-production-version)
23. [部署在 Now](./#deploying-on-now)
24. [分析应用程序 bundles 的情况](./#analyzing-the-app-bundles)
25. [模块懒加载](./#lazy-loading-modules)
26. [今后的发展方向](./#where-to-go-from-here)

<h2 id="introduction">介绍</h2>

在一个由 React 驱动的现代 JavaScript 应用程序上工作是非常棒的，直到你意识到有几个与在客户端渲染所有内容有关的问题。

首先，页面加载需要更长的时间才能对用户可见，因为在内容加载之前，所有的 JavaScript 必须加载，你的应用程序需要运行以确定在页面上显示什么。

第二，如果你正在建立一个公开的网站，你有一个内容搜索引擎优化(SEO)的问题。搜索引擎在运行和索引 JavaScript 应用程序方面越来越好，但如果我们能把内容发给他们，而不是让他们自己想办法解决，那就好得多。

解决这两个问题的方法是**服务器渲染（server rendering）**，也叫**静态预渲染（static pre-rendering）**。

[Next.js](https://nextjs.org) 是一个 React 框架，以一种非常简单的方式完成所有这些工作，但它并不限于此。它的创造者把它宣传为一个**零配置（zero-configuration）、单指令（single-command）的 React 应用工具链**。

它提供了一个通用的结构，使你能够轻松地建立一个前端的 React 应用程序，并透明地为你处理服务器端的渲染。

<h2 id="the-main-features-provided-by-next-js">Next.js提供的主要功能</h2>

下面是一份 Next.js 不完全的主要功能的清单:

### Hot Code Reloading(代码热加载)

Next.js 在检测到保存到磁盘的任何变化时，会重新加载页面。

### Automatic Routing（自动路由）

任何 URL 都被映射到文件系统中，映射到放在 `pages` 文件夹中的文件，你不需要任何配置（当然你有自定义选项）。

### Single File Components（单文件组件）

使用`styled-jsx`，完全集成在同一个团队中，为组件添加样式的范围是很简单的。

### Server Rendering（服务器端渲染）

你可以在服务器端渲染 React 组件，然后再将 HTML 发送到客户端。

### Ecosystem Compatibility（生态系统的兼容性）

Next.js 与 JavaScript、Node 和 React 生态系统的其他部分配合良好。

### Automatic Code Splitting（自动代码拆分）

渲染页面时，只需使用它们需要的库和 JavaScript，而无需其他。Next.js 不会生成一个包含所有应用程序代码的单一 JavaScript 文件，而是将应用程序自动分解为几个不同的资源。

加载一个页面只加载该特定页面所需的 JavaScript。

Next.js 通过分析导入的资源来做到这一点。

例如，如果你只有一个页面导入了 Axios 库，那么这个特定的页面将在打包（bundle）的时候包含该库。

这可以确保你的第一个页面加载速度尽可能快，而且只有未来的页面加载（如果它们将被触发）才会向客户端发送所需的 JavaScript。

有一个值得注意的例外。如果经常使用的导入程序在网站页面中至少有一半被使用，它们就会被打包到主 JavaScript 中。

### Prefetching（预取）

用于连接不同页面的 `Link` 组件支持 `prefetch` prop ，在后台自动预取页面资源（包括因代码分割而丢失的代码）。

### Dynamic Components（动态组件）

你可以动态地导入 JavaScript 模块和 React 组件。

### Static Exports（静态导出）

使用`next export`命令，Next.js 允许你从你的应用程序导出一个完全静态的网站。

### TypeScript Support（支持 TypeScript）

Next.js 是用 TypeScript 编写的，因此，它具有出色的 TypeScript 支持。

## Next.js vs Gatsby vs `create-react-app`

Next.js、[Gatsby](https://flaviocopes.com/gatsby/) 和 [`create-react-app`](https://flaviocopes.com/react-create-react-app/) 是了不起的工具，我们可以用它们来驱动我们的应用程序。

让我们先说说它们的共同点。它们都有 React，为整个开发体验提供支持。它们还抽象了 [webpack](https://flaviocopes.com/webpack/) 和所有那些我们在过去的好日子里需要手动配置底层东西。

`create-react-app` 并不能帮助你轻松生成一个服务器端渲染的应用程序。任何与之相关的东西（SEO、速度...）都只能由 Next.js 和 Gatsby 等工具提供。

**Next.js 什么时候比 Gatsby 好？**

它们都可以帮助 **服务器端渲染(server-side rendering)**，但有两种不同的方式。

使用 Gatsby 的最终结果是一个静态网站生成器，没有服务器。你建立网站，然后将建立过程的结果静态地部署在 Netlify 或其他静态托管网站上。

Next.js 提供了一个可以在服务器端渲染响应请求的后端，允许你创建一个动态网站，这意味着你将把它部署在一个可以运行 Node.js 的平台上。

Next.js 也可以生成静态网站，但我不会说这是它的主要使用场景。

如果我的目标是建立一个静态网站，我将很难选择，Gatsby 可能有一个更好的插件生态系统，包括许多特别用于博客的插件。

Gatsby 在很大程度上也是基于 [GraphQL](https://flaviocopes.com/graphql/)，根据你的想法和需要，你可能真的喜欢或不喜欢。

<h2 id="how-to-install-nextjs">如何安装Next.js</h2>

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

### 使用 create-next-app

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

### 手动创建一个 Next.js 应用程序

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

<h2 id="view-source-to-confirm-ssr-is-working">查看来源以确认SSR的工作</h2>

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

<h2 id="what-s-that-icon-on-the-bottom-right">右下角的那个图标是什么？</h2>

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

<h2 id="install-the-react-developer-tools">安装React DevTools</h2>

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

<h2 id="other-debugging-techniques-you-can-use">你可以使用的其他调试技术</h2>

除了 React 开发者工具（这是构建 Next.js 应用程序所必需的）之外，我想强调调试 Next.js 应用程序的 2 种方法。

第一个显然是`console.log()`和所有[其他 Console API](https://flaviocopes.com/console-api/)工具。Next 应用程序的工作方式会使日志语句在浏览器控制台或在你使用`npm run dev`启动 Next 的终端中发挥作用。

特别是，如果页面从服务器上加载，当你把 URL 指向它，或者你点击刷新按钮/cmd/ctrl-R，任何控制台日志都会在终端发打印。

随后通过点击鼠标发生的页面转换将使所有的控制台记录发生在浏览器内。

如果你对缺失的日志记录感到惊讶，请记住。

另一个必不可少的工具是 `debugger` 语句。将此语句添加到一个组件中，将暂停浏览器渲染页面。:

![Screen-Shot-2019-11-04-at-15.10.32](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-15.10.32.png)

真的很厉害，因为现在你可以使用浏览器调试器来检查数值，并逐行运行你的应用程序。

你也可以使用 VS 代码调试器来调试服务器端的代码。我提到这个技术和[这个教程](https://github.com/Microsoft/vscode-recipes/tree/master/Next-js)来设置这个。

<h2 id="adding-a-second-page-to-the-site">在网站上添加第二页</h2>

现在我们已经很好地掌握了可以用来帮助我们开发 Next.js 应用程序的工具，让我们从我们的第一个应用程序的基础上继续前进吧:

![Screen-Shot-2019-11-04-at-13.21.42-1](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-13.21.42-1.png)

我想给这个网站添加第二个页面，一个博客。它将被送入`/blog`，目前它只包含一个简单的静态页面，就像我们的第一个`index.js`组件（组件）一样:

![Screen-Shot-2019-11-04-at-15.39.40](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-15.39.40.png)

保存新文件后，已经运行的`npm run dev`进程已经能够渲染页面，不需要再重新启动。

当我们点击 URL [http://localhost:3000/blog](http://localhost:3000/blog)，我们就有了新的页面:

![Screen-Shot-2019-11-04-at-15.41.39](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-15.41.39.png)

以下是终端告诉我们的情况:

![Screen-Shot-2019-11-04-at-15.41.03](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-15.41.03.png)

现在，URL 是`/blog`这一事实只取决于文件名，以及它在`pages`文件夹下的位置。

你可以创建一个`pages/hey/ho`页面，该页面将显示在 URL [http://localhost:3000/hey/ho](http://localhost:3000/hey/ho)上。

对于 URL 的目的来说，文件中的组件名称并不重要。

试着去查看页面的源代码，当从服务器加载时，它会列出`/_next/static/development/pages/blog.js`作为加载的包（bundle）之一，而不是像主页那样列出`/_next/static/development/pages/index.js`。这是因为由于自动代码拆分，我们不需要为主页服务的 bundle。只需要服务于博客页面的 bundle。

![Screen-Shot-2019-11-04-at-16.24.53](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-16.24.53.png)

我们也可以直接从`blog.js`导出一个匿名函数:

```js
export default () => (
  <div>
    <h1>Blog</h1>
  </div>
)
```

或者如果你喜欢非箭头的函数语法:

```js
export default function() {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  )
}
```

<h2 id="linking-the-two-pages">链接这两个页面</h2>

现在我们有两个页面，分别由`index.js`和`blog.js`定义，我们可以引入链接。

页面内的普通 HTML 链接使用 `a` 标签完成:

```html
<a href="/blog">Blog</a>
```

我们不能在 Next.js 中这样做。

为什么？当然，我们在技术上是 _可以的_，因为这是网络，而且在网络上，事情永远不会中断（这就是为什么我们仍然可以使用`<marquee>`标签。但是，使用 Next 的主要好处之一是，一旦一个页面被加载，由于客户端的渲染，过渡到其他页面的速度非常快。

如果你使用一个普通的`a`链接:

```js
const Index = () => (
  <div>
    <h1>Home page</h1>
    <a href='/blog'>Blog</a>
  </div>
)

export default Index
```

现在打开 **DevTools**，特别是 **Network panel**。第一次加载`http://localhost:3000/`时，我们得到了所有加载的页面 bundles:

![Screen-Shot-2019-11-04-at-16.26.00](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-16.26.00.png)

现在，如果你点击 "Preserve log" 按钮（以避免清除网络面板），并点击 "Blog" 链接，就会发生这种情况:

![Screen-Shot-2019-11-04-at-16.27.16](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-16.27.16.png)

我们又从服务器上得到了所有的 JavaScript! 但是...如果我们已经得到了所有的 JavaScript，我们就不需要这些了。我们只需要`blog.js`页面 bundle，这是唯一一个新的页面。

为了解决这个问题，我们使用 Next 提供的一个组件，叫做 `Link`。

我们导入它:

```js
import Link from 'next/link'
```

然后我们用它来包住（warp）我们的链接，像这样:

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

现在，如果你重试我们之前做的事情，你将能够看到，当我们移动到博客页面时，只有`blog.js` bundle 被加载。:

![Screen-Shot-2019-11-04-at-16.35.18](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-04-at-16.35.18.png)

而且页面的加载速度比以前快了很多，浏览器通常在标签上的旋转器甚至都没有出现。然而网址却变了，你可以看到。这是与浏览器[历史 API](https://flaviocopes.com/history-api/)的无缝工作。

这就是客户端渲染的作用。

如果你现在按下后退按钮呢？没有什么被加载，因为浏览器仍然有旧的`index.js` bundle，准备加载`/index`路由。这都是自动的!

<h2 id="dynamic-content-with-the-router">路由与动态内容</h2>

在上一章中，我们看到了如何将主页(index)链接到博客(blog)页面。

博客是 Next.js 的一个很好的用例，在本章中我们将通过添加 **博客文章** 来继续探索。

博客文章有一个动态的 URL。例如，一篇题为 "Hello World "的文章的 URL 是`/blog/hello-world`。一篇题为 "我的第二篇文章 "的文章的 URL 是`/blog/my-second-post`。

这些内容是动态的，可能取自数据库、markdown 文件或更多。

Next.js 可以根据一个**dynamic URL(动态 URL)**来提供动态内容。

我们通过使用`[]`语法创建一个动态页面来创建一个动态 URL。

如何创建？我们添加一个`pages/blog/[id].js`文件。这个文件将处理`/blog/`路径下的所有动态 URL，比如我们上面提到的那些。`/blog/hello-world`, `/blog/my-second-post`等等。

在文件名中，方括号内的`[id]`意味着任何动态的东西都将被放在 **路由的查询属性（query property）**的`id`参数中。

好吧，这一次的事情有点多了。

什么是**路由（router）**？

路由(router)是 Next.js 提供的一个库。

我们从 `next/router` 导入它:

```js
import { useRouter } from 'next/router'
```

而一旦我们有了`useRouter`，我们就用`useRouter`来实例化路由对象:

```js
const router = useRouter()
```

一旦我们有了这个路由对象，我们就可以从中提取信息。

特别是我们可以通过访问`router.query.id`来获得`[id].js`文件中 URL 的动态部分。

动态部分也可以只是 URL 的一部分，如`post-[id].js`。

所以让我们继续在实践中应用所有这些东西。

创建文件`pages/blog/[id].js`:

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

现在，如果你去`http://localhost:3000/blog/test`路由，你应该看到这个:

![Screen-Shot-2019-11-05-at-16.41.32](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-05-at-16.41.32.png)

我们可以使用这个 `id` 参数，从一个帖子列表中收集帖子。比如说，从一个数据库中。为了简单起见，我们将在项目根目录下添加一个`posts.json`文件:

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

现在我们可以导入它，并从`id`键中查找帖子:

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

重新加载页面应该会显示这个结果:

![Screen-Shot-2019-11-05-at-16.44.07](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-05-at-16.44.07.png)

但事实并非如此! 相反，我们在控制台得到一个错误，在浏览器中也得到一个错误:

![Screen-Shot-2019-11-05-at-18.18.17](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-05-at-18.18.17.png)

为什么？因为在渲染过程中，当组件被初始化时，数据还不在那里。我们将在下一课看到如何用 getInitialProps 向组件提供数据。

现在，在返回 JSX 之前添加一个小的`if (!post) return <p></p>`进行检查:

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

现在，事情应该工作了。最初，该组件的渲染没有动态的`router.query.id`信息。渲染后，Next.js 触发了查询值的更新，页面显示了正确的信息。

如果你查看源代码，在 HTML 中会有一个空的`<p>`标签:

![Screen-Shot-2019-11-05-at-18.20.58](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-05-at-18.20.58.png)

我们很快就会解决这个问题，它不能实现 SSR，这既损害了用户的加载时间，也损害了 SEO 和社交分享，我们已经讨论过了。

我们可以通过在`pages/blog.js`中列出这些帖子来完成博客的例子:

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

我们可以通过从`next/link`中导入`Link`并在帖子循环中使用它，将它们链接到各个帖子页面:

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

我之前提到过 Next.js `Link` 组件可以用来创建 2 个页面之间的链接，当你使用它时，Next.js 会**透明地为我们处理前端路由**，所以当用户点击一个链接时，前端会负责显示新的页面，而不会像通常网页那样触发新的客户/服务器请求和响应周期。

当你使用 `Link` 时，Next.js 还为你做了一件事。

只要被`<Link>`包裹的元素出现在视口（viewport）中（这意味着网站用户可以看到它），Next.js 就会预取(prefetch)它所指向的 URL，只要它是一个本地链接（在你的网站上），就会使应用程序对浏览者来说超级快速。

这种行为只在**生产模式（production mode）** 下被触发（我们稍后会深入讨论这个问题），这意味着如果你用`npm run dev`运行应用程序，你必须停止它，用`npm run build`编译你的生产包，用`npm run start`运行它。

使用 DevTools 中的 Network inspector，你会注意到在页面加载时，任何在折叠上方的链接都会在你的页面上触发`load`事件（当页面完全加载时触发，发生在`DOMContentLoaded`事件之后）时开始预取（prefetch）。

任何不在视口（viewport）中的其他`链接`标签将被预取（prefetch），当用户滚动时，它将被预取（prefetch）。

预取在高速连接（Wifi 和 3g 以上连接）上是自动的，除非浏览器发送 [`Save-Data` HTTP Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Save-Data)。

你可以通过设置 `prefetch` prop 为 `false`来选择不预取单个 `Link` 实例:

```jsx
<Link href="/a-link" prefetch={false}>
  <a>A link</a>
</Link>
```

<h2 id="using-the-router-to-detect-the-active-link">使用路由器来检测活动链接</h2>

在处理链接时，一个非常重要的功能是确定什么是当前的 URL，特别是给活动链接分配一个类别，这样我们就可以使它的样式与其他的不同。

例如，这在你的网站标题中特别有用。

Next.js 在`next/link`中提供的`Link`组件默认并不自动为我们做这些。

我们可以自己创建一个 Link 组件，并将其存储在 Components 文件夹下的`Link.js`文件中，然后导入该组件，而不是默认的`next/link`。

在这个组件中，我们首先从`react`导入 React，从`next/link`导入 Link，从`next/router`导入`useRouter` hook。

在组件内部，我们确定当前的路径名称是否与组件的`href` prop 相匹配，如果是，我们将 `selected` 类追加到子节点(children)上。

最后，我们使用`React.cloneElement()` 返回带有更新后的类的子节点(children):

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

<h2 id="using-next-router">使用 next/router</h2>
我们已经看到了如何使用 Link 组件来声明式地处理 Next.js 应用程序中的路由。

在 JSX 中管理路由真的很方便，但有时你需要以编程方式触发路由变化。

在这种情况下，你可以直接访问 Next.js Router，在`next/router`包中提供，并调用其`push()`方法。

下面是一个访问路由的例子:

```js
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  //...
}
```

一旦我们通过调用`useRouter()`得到路由对象，我们就可以使用它的方法。

这是客户端的路由，所以方法应该只在面向前端的代码中使用。确保这一点的最简单方法是在`useEffect()`React hook 中调用，或在`componentDidMount()`中调用 React 有状态组件。

你可能最常使用的是`push()`和`prefetch()`。

`push()`允许我们在前端以编程方式触发 URL 变化。:

```js
router.push('/login')
```

`prefetch()`允许我们以编程方式预取（prefetch）一个 URL，当我们没有自动处理预取的`Link`标签时很有用:

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

你也可以使用路由来监听 [路由变更事件](https://nextjs.org/docs#router-events)。

<h2 id="feed-data-to-the-components-using-getinitialprops">使用 getInitialProps() 向组件提供数据</h2>

在上一章中，我们在动态生成帖子页面时遇到了一个问题，因为该组件需要一些前期的数据，我们试图从 JSON 文件中获取数据时:

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

我们得到了这个错误:

![Screen-Shot-2019-11-05-at-18.18.17-1](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-05-at-18.18.17-1.png)

我们如何解决这个问题？我们又如何使 SSR 工作于动态路由？

我们必须为组件提供 props，使用一个名为 `getInitialProps()` 的特殊函数，它被附加到组件上

要做到这一点，首先我们要为该组件命名:

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

这个函数得到一个对象作为其参数，其中包含几个属性。特别是，我们现在感兴趣的是，我们得到`query`对象，也就是我们之前用来得到帖子 id 的对象。

所以我们可以用 _对象析构(object destructuring)_ 的语法来获得它。:

```js
Post.getInitialProps = ({ query }) => {
  //...
}
```

现在我们可以从这个函数中返回帖子(post):

```js
Post.getInitialProps = ({ query }) => {
  return {
    post: posts[query.id]
  }
}
```

我们也可以删除 `useRouter` 的导入，我们从传递给`Post` 组件的`props`属性中获得帖子(post):

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

现在不会有错误了，而且 SSR 会像预期的那样工作，你可以看到查看源代码:

![Screen-Shot-2019-11-05-at-18.53.02](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-05-at-18.53.02.png)

`getInitialProps`函数将在服务器端执行，但也会在客户端执行，当我们使用`Link`组件导航到一个新页面时，就像我们所做的那样。

值得注意的是，`getInitialProps` 在它收到的上下文对象(context object )中，除了`query`对象外，还得到了其他的属性:

- `pathname`: URL 的 `path` 部分
- `asPath` - 浏览器中显示的实际路径（包括查询 query）的字符串

在调用`http://localhost:3000/blog/test`的情况下，将分别导致:

- `/blog/[id]`
- `/blog/test`

而在服务器端渲染的情况下，它也将收到:

- `req`: HTTP request 对象
- `res`: HTTP response 对象
- `err`: error 对象

如果你做过任何 Node.js 编码，`req`和`res`将是你熟悉的。

## CSS

我们如何在 Next.js 中设计 React 组件的样式？

我们有很大的自由度，因为我们可以使用任何我们喜欢的库。

但 Next.js 内置了[`styled-jsx`](https://github.com/zeit/styled-jsx)，因为那是由维护 Next.js 的人建立的一个库。

这是一个很酷的库，它为我们提供了范围广泛的 CSS，这对可维护性非常好，因为 CSS 只影响它所应用的组件。

我认为这是一个写 CSS 的好方法，不需要应用额外的库或预处理器来增加复杂性。

要在 Next.js 中为 React 组件添加 CSS，我们要在 JSX 的一个片段中插入它，该片段以

```js
<style jsx>{`
```

并以以下内容结束

```js
`}</style>
```

在这个奇怪的块中，我们写了普通的 CSS，就像我们在`.css`文件中做的那样:

```js
<style jsx>{`
  h1 {
    font-size: 3rem;
  }
`}</style>
```

你把它写在 JSX 里面，像这样:

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

在块内，我们可以使用插值来动态地改变数值。例如，这里我们假设一个 `size` prop 由父组件传递，我们在 `styled-jsx` 块中使用它:

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

如果你想在全局范围内应用一些 CSS，而不是局限于某个组件，你可以在`style`标签上添加`global`关键字:

```jsx
<style jsx global>{`
body {
  margin: 0;
}
`}</style>
```

如果你想在 Next.js 组件中导入一个外部 CSS 文件，你必须先安装`@zeit/next-css`:

```bash
npm install @zeit/next-css
```

然后在项目的根部创建一个配置文件，名为`next.config.js`，内容如下:

```js
const withCSS = require('@zeit/next-css')
module.exports = withCSS()
```

重新启动 Next 应用程序后，你现在可以像通常使用 JavaScript 库或组件那样导入 CSS:

```js
import '../style.css'
```

你也可以直接导入一个 SASS 文件，用[`@zeit/next-sass`](https://github.com/zeit/next-plugins/tree/master/packages/next-sass)库。

<h2 id="populating-the-head-tag-with-custom-tags">用自定义标签填充head标签</h2>

从任何 Next.js 页面组件中，你都可以向页面标题添加信息。

这在以下情况下是很方便的:

- 你想定制页面的标题
- 你想改变一个元(meta)标签

你怎么能这样做呢？

在每个组件内，你可以从 `next/head` 导入 `Head` 组件，并将其包含在你的组件 JSX 输出中:

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

你可以在页面的`<head>`部分添加任何你想出现的 HTML 标签。

当安装该组件时，Next.js 将确保`Head`内的标签被添加到页面的标题中。当卸载组件时，Next.js 将负责删除这些标签。

<h2 id="adding-a-wrapper-component">添加一个封装组件</h2>

你网站上的所有页面看起来都差不多。有一个 chrome 窗口，一个共同的基础层，你只是想改变里面的内容。

有一个导航栏，一个侧边栏，然后是实际内容。

你如何在 Next.js 中建立这样的系统？

有 2 种方法。一种是使用 [高阶组件](https://flaviocopes.com/react-higher-order-components/)，通过创建一个`components/Layout.js`组件:

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

在那里，我们可以为标题和/或侧边栏导入单独的组件，我们还可以添加我们需要的所有 CSS。

你可以在每一个页面中像这样使用它:

```js
import withLayout from '../components/Layout.js'

const Page = () => <p>Here's a page!</p>

export default withLayout(Page)
```

但我发现这只适用于简单的情况，你不需要在一个页面上调用`getInitialProps()`。

为什么？

因为`getInitialProps()`只在页面组件上被调用。但是如果我们从一个页面导出高阶组件 withLayout()，`Page.getInitialProps()`就不会被调用。但 `withLayout.getInitialProps()`会。

为了避免不必要地使我们的代码库复杂化，另一种方法是使用 props:

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

而在我们的页面中，我们现在这样使用它:

```js
import Layout from '../components/Layout.js'

const Page = () => (
  <Layout content={(
    <p>Here's a page!</p>
  )} />
)
```

这种方法让我们在页面组件中使用`getInitialProps()`，唯一的缺点是必须在`content`prop 中写入组件的 JSX:

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

除了创建 **页面路由（page routes）**，也就是将页面作为网页提供给浏览器之外，Next.js 还可以创建 **API 路由（API routes）**。

这是一个非常有趣的功能，因为它意味着 Next.js 可以用来创建一个由 Next.js 本身存储和检索的数据的前端，通过 fetch 请求传输 JSON。

API 路由位于`/pages/api/`文件夹下，并被映射到`/api`端点（endpoint）。

这个功能在创建应用程序时非常有用。

在这些路由中，我们编写 Node.js 代码（而不是 React 代码）。这是一个范式的转变，你从前端移到后端，但非常无缝。

假设你有一个`/pages/api/comments.js`文件，其目标是以 JSON 格式返回一篇博客文章的评论。

假设你有一个存储在`comments.json`文件中的评论列表:

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

下面是一个示例代码，它向客户返回评论的列表:

```js
import comments from './comments.json'

export default (req, res) => {
  res.status(200).json(comments)
}
```

它将监听`/api/comments` URL 的 GET 请求，你可以尝试用浏览器调用它:

![Screen-Shot-2019-11-07-at-11.14.42](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-07-at-11.14.42.png)

API 路由也可以像页面一样使用 **动态路由**，使用`[]`语法来创建动态 API 路由，如`/pages/api/comments/[id].js`，它将检索特定于帖子 id 的评论。

在`[id].js`中，你可以通过在`req.query`对象中查找来检索`id`值:

```js
import comments from '../comments.json'

export default (req, res) => {
  res.status(200).json({ post: req.query.id, comments })
}
```

在这里你可以看到上述代码的运行情况:

![Screen-Shot-2019-11-07-at-11.59.53](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-07-at-11.59.53.png)

在动态页面中，你需要从`next/router`中导入`useRouter`，然后使用`const router = useRouter()`获得路由对象，然后我们就可以使用`router.query.id`获得`id`值。

在服务器端，这一切都很容易，因为查询是附在请求对象上的。

如果你做一个 POST 请求，所有的工作方式都是一样的——都是通过那个默认的出口。

要把 POST 从 GET 和其他 HTTP 方法（PUT、DELETE）中分离出来，可以查询`req.method`值:

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

除了我们已经看到的`req.query`和`req.method`之外，我们还可以通过引用`req.cookies`，即`req.body`中的请求体来访问 cookies。

 从更底层角度来讲，这一切都由[Micro](https://github.com/zeit/micro)提供动力，这是一个支持异步 HTTP 微服务的库，由 Next.js 团队开发维护。

你可以在我们的 API 路由中使用任何 Micro 中间件来增加更多的功能。

<h2 id="run-code-only-on-the-server-side-or-client-side">在服务器端，或在客户端运行代码</h2>

在你的页面组件中，你可以通过检查`window`属性，判断在服务器端或在客户端执行代码。

这个属性只存在于浏览器内部，所以你可以检查

```js
if (typeof window === 'undefined') {

}
```

并在该块中添加服务器端的代码。

同样地，你可以通过检查来是否可以执行客户端代码

```js
if (typeof window !== 'undefined') {

}
```

JS 提示。我们在这里使用`typeof`操作符，因为我们无法通过其他方式检测一个未定义的值。我们不能做`if (window == undefined)`，因为我们会得到一个 "window is not defined" 的运行时错误。

Next.js，作为构建时的优化，也从 bundles 中删除了使用这些检查的代码。客户端 bundle  将不包括包裹在`if (typeof window === 'undefined') {}`块中的内容。

<h2 id="deploying-the-production-version">部署生产版本</h2>

在教程中，部署应用程序总是被放在最后。

在这里，我想提前介绍一下，因为部署 Next.js 应用非常容易，我们现在就可以深入研究，然后再继续研究其他更复杂的话题。

记得在 "如何安装 Next.js "一章中，我告诉你要在`package.json`的`script`部分添加这 3 行:

```json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

到目前为止，我们使用`npm run dev`来调用安装在本地的`node_modules/next/dist/bin/next`中的`next`命令。这启动了开发服务器，它为我们提供了**source maps**和**hot code reloading**这两个在调试时非常有用的功能。

同样的命令可以通过运行 `npm run build`来建立网站，并加上 `build` 标志。然后，同样的命令可以用来启动生产应用程序，通过运行 `npm run start` 来传递 `start` 标志。

这两个命令是我们必须调用的，以成功地在本地部署我们网站的生产版本。生产版本是高度优化的，没有 `source maps`和其他诸如 `hot code reloading` 的东西，这对我们的终端用户没有好处。

所以，让我们创建一个生产版的应用程序。用以下方法建立它:

```bash
npm run build
```

![Screen-Shot-2019-11-06-at-13.46.31](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-13.46.31.png)

命令的输出告诉我们，一些路由（`/`和`/blog`现在被预设为静态 HTML，而`/blog/[id]`将由 Node.js 后端提供。

然后你可以运行`npm run start`来启动本地的生产服务器。

```bash
npm run start
```

![Screen-Shot-2019-11-06-at-13.47.01](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-13.47.01.png)

访问[http://localhost:3000](http://localhost:3000)将向我们展示应用程序的生产版本，在本地。

<h2 id="deploying-on-now">部署在 Now</h2>

在上一章中，我们在本地部署了 Next.js 应用程序。

我们如何将其部署到真正的网络服务器上，以便其他人能够访问它呢？

部署 Next 应用程序最简单的方法之一是通过[Zeit](https://zeit.co)创建的**Now**平台，该公司正是创建开源项目 Next.js 的公司。你可以使用 Now 来部署 Node.js 应用程序、静态网站等。

现在使应用程序的部署和分发步骤变得非常、非常简单和快速，除了 Node.js 应用程序外，他们还支持部署 Go、PHP、Python 和其他语言。

你可以把它看作是 "云"，因为你并不真正知道你的应用程序将被部署在哪里，但你知道你将有一个可以到达的 URL。

现在开始使用是免费的，有慷慨的免费计划，目前包括 100GB 的主机，每天 1000 次[无服务器](https://www.freecodecamp.org/news/serverless/)函数调用，每月 1000 次构建，每月 100GB 的带宽，以及一个[CDN](https://www.freecodecamp.org/news/cdn/)位置。如果你需要更多，[定价页](https://zeit.co/pricing)有助于了解成本。

开始使用 Now 的最好方法是使用官方 Now CLI:

```bash
npm install -g now
```

一旦有了这个命令，运行

```bash
now login
```

而应用程序将要求你提供你的电子邮件。

如果你还没有注册，请在继续之前在[https://zeit.co/signup](https://zeit.co/signup)上创建一个账户，然后将你的电子邮件添加到 CLI 客户端。

一旦完成这些，从 Next.js 项目根目录下运行

```bash
now
```

而该应用程序将被立即部署到 Now 云中，你将得到独特的应用程序 URL:

![Screen-Shot-2019-11-06-at-14.21.09](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-14.21.09.png)

一旦你运行`now`程序，应用程序就会被部署到`now.sh`域下的一个随机 URL。

我们可以在图片中给出的输出中看到 3 个不同的 URL

- [https://firstproject-2pv7khwwr.now.sh](https://firstproject-2pv7khwwr.now.sh)
- [https://firstproject-sepia-ten.now.sh](https://firstproject-sepia-ten.now.sh)
- [https://firstproject.flaviocopes.now.sh](https://firstproject.flaviocopes.now.sh)

为什么有这么多？

首先是识别部署的 URL。每次我们部署应用程序时，这个 URL 都会改变。

你可以通过改变项目代码中的某些内容，并再次运行 `now` 来立即测试:

![Screen-Shot-2019-11-06-at-15.08.11](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-15.08.11.png)

其他 2 个 URL 将不会改变。第一个是随机的，第二个是你的项目名称（默认为当前项目文件夹，你的账户名，然后是`now.sh`。

如果你访问这个 URL，你会看到应用被部署到生产中。

![Screen-Shot-2019-11-06-at-14.21.43](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-14.21.43.png)

你可以将 Now 配置为将网站提供给你自己的自定义域或子域，但我现在不会深入研究这个。

`now.sh`子域对于我们的测试目的已经足够了。

<h2 id="analyzing-the-app-bundles">分析应用程序bundles的情况</h2>

下一步为我们提供了一种分析生成的 bundles 的方法。

打开应用程序的 package.json 文件，在 scripts 部分添加这 3 个新命令:

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

然后安装这两个软件包:

```bash
npm install --dev cross-env @next/bundle-analyzer
```

在项目根部创建一个`next.config.js`文件，其内容如下:

```js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({})
```

现在运行命令

```bash
npm run analyze
```

![Screen-Shot-2019-11-06-at-16.12.40](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-16.12.40.png)

This should open 2 pages in the browser. One for the client bundles, and one for the server bundles:

![Screen-Shot-2019-11-06-at-16.11.14](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-16.11.14.png)

![Screen-Shot-2019-11-06-at-16.11.23](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-16.11.23.png)

This is incredibly useful. You can inspect what's taking the most space in the bundles, and you can also use the sidebar to exclude bundles, for an easier visualization of the smaller ones:

![Screen-Shot-2019-11-06-at-16.14.12](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-16.14.12.png)

<h2 id="lazy-loading-modules">模块懒加载</h2>

能够直观地分析一个 bundle 是非常好的，因为我们可以非常容易地优化我们的应用程序。

假设我们需要在我们的博客文章中加载 Moment 库。运行:

```bash
npm install moment
```

将其导入项目中。

现在让我们模拟一下，我们在两个不同的路由上需要它。`/blog`和`/blog/[id]`。

我们在`pages/blog/[id].js`中导入它。:

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

我只是加入今天的日期，作为一个例子。

这将包括 Moment.js 在博文页面的 bundle，你可以通过运行`npm run analyze`看到:

![Screen-Shot-2019-11-06-at-17.56.14](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-17.56.14.png)

看，我们现在在`/blog/[id]`里有一个红色的条目，就是我们添加 Moment.js 的那个路由!

它从 1kB 变成了 350kB，相当大的变化。而这是因为 Moment.js 库本身就是 349kB。

客户端 bundles 的可视化显示，更大的是页面 bundles，而之前是很少的。而它 99%的代码都是 Moment.js。

![Screen-Shot-2019-11-06-at-17.55.50](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-17.55.50.png)

每当我们加载一篇博客文章时，我们就会把所有这些代码转移到客户端。这并不理想。

一个解决方法是寻找一个体积更小的库，因为 Moment.js 并不以轻量级著称（尤其是开箱后包含了所有的地域性），但为了这个例子，我们假设我们必须使用它。

我们可以做的是将所有的 Moment 代码分离在一个**独立的 bundle 里**。

怎么做？我们在`getInitialProps`里面进行异步导入，而不是在组件层面上导入 Moment，我们计算出要发送给组件的值。

记住，我们不能在`getInitialProps()`返回的对象中返回复杂的对象，所以我们在里面计算出日期:

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

看到在 "await import "之后对".default() "的特殊调用吗？它需要在动态导入中引用默认导出（见[https://v8.dev/features/dynamic-import](https://v8.dev/features/dynamic-import)）。

现在，如果我们再次运行`npm run analyze`，我们可以看到这个:

![Screen-Shot-2019-11-06-at-18.00.22](https://www.freecodecamp.org/news/content/images/2019/11/Screen-Shot-2019-11-06-at-18.00.22.png)

我们的`/blog/[id]`捆绑文件又非常小了，因为 Moment 已经被移到它自己的捆绑文件中，由浏览器单独加载。

<h2 id="where-to-go-from-here">今后的发展方向</h2>

关于 Next.js，还有很多东西需要了解。我没有谈及用登录管理用户会话、无服务器、管理数据库等等。

本手册的目的不是要教你所有的东西，而是要逐步向你介绍 Next.js 的所有功能。

我建议的下一步是仔细阅读[Next.js 官方文档](https://nextjs.org/docs)，以了解我没有谈到的所有特性和功能，并看看[Next.js 插件](https://github.com/zeit/next-plugins)引入的所有额外功能，其中有些功能相当惊人。

你可以在 Twitter [@flaviocopes](https://twitter.com/flaviocopes)上找到我。

还可以查看我的网站，[flaviocopes.com](https://flaviocopes.com/)。

[注意：你可以下载本教程的 PDF/ePub/Mobi 版本，以便你可以脱机阅读](https://flaviocopes.com/page/nextjs-handbook/)!
