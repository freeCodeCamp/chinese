> -   原文地址：[The definitive Node.js handbook](https://www.freecodecamp.org/news/the-definitive-node-js-handbook-6912378afc6e/)
> -   原文作者：[Flavio Copes](https://www.freecodecamp.org/news/author/flavio/)
> -   译者：blackcai
> -   校对者：

![Node.js 权威手册](https://cdn-media-1.freecodecamp.org/images/1*7F50Qc-ysFgy6tCjUyruTA.jpeg)

Note: you can get a [PDF, ePub, or Mobi][1] version of this handbook for easier reference, or for reading on your Kindle or tablet.

注意：你可以获取本手册的 [PDF, ePub, or Mobi][1] 版本以方便在你的 Kindle 或者平板电脑上阅读。

### Introduction to Node.js

### Node.js 简介

This handbook is a getting started guide to Node.js, the server-side JavaScript runtime environment.

本手册是服务端 JavaScript 运行时环境 Node.js 的入门指南。

#### Overview

#### 概述

Node.js is a **runtime environment for JavaScript** that runs on the **server**.

Node.js 是一种运行在服务端的 JavaScript 运行时环境。

Node.js is open source, cross-platform, and since its introduction in 2009, it got hugely popular and now plays a significant role in the web development scene. If GitHub stars are one popularity indication factor, having 58000+ stars means being very popular.

Node.js 是开源、跨平台的，自2009年问世以来，已广受欢迎，并且在 Web 开发领域中扮演着重要的角色。如果 GitHub 星标是一个受欢迎程度指标，那么拥有 75800+ 星标意味着非常受欢迎。

Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. Node.js is able to leverage the work of the engineers that made (and will continue to make) the Chrome JavaScript runtime blazing fast, and this allows Node.js to benefit from the huge performance improvements and the Just-In-Time compilation that V8 performs. Thanks to this, JavaScript code running in Node.js can become very performant.

Node.js 运行在 Google Chrome 核心 V8 JavaScript 引擎上且位于浏览器之外。Node.js 能够利用工程师的工作，使 Chrome JavaScript 运行时变得（并且持续）非常快速，这允许 Node.js 从 V8 执行的巨大性能改进和实时编译中获益，多亏了这点，在 Node.js 中运行的 JavaScript 代码可以变的非常高效。

A Node.js app is run by a single process, without creating a new thread for every request. Node provides a set of asynchronous I/O primitives in its standard library that will prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making a blocking behavior an exception rather than the normal.

Node.js 应用程序通过单进程运行，而不是为每个请求创建一个新的线程。Node 在它的标准库中提供一套异步的 I/O 原语，这些原语将防止 JavaScript 代码阻塞，在通常情况下，Node.js 的库是使用非阻塞范式编写，使阻塞行为成为异常而不是正常的行为。

When Node.js needs to perform an I/O operation, like reading from the network, access a database or the filesystem, instead of blocking the thread Node.js will resume the operations when the response comes back, instead of wasting CPU cycles waiting.

当 Node.js 需要执行 I/O 操作时，比如从网络读取、访问数据库或文件系统，而不是阻塞线程，当响应返回的时候 Node.js 将会恢复操作，而不是浪费 CPU 周期等待。

This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing threads concurrency, which would be a major source of bugs.

这使得 Node.js 可以在一台服务器上处理成千上万的并发连接，而不会带来管理线程并发性的负担，这将是一个主要的 bug 来源。

Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to run the server-side code and frontend-side code without the need to learn a completely different language.

Node.js 有一个独特的优势，因为数百万的为浏览器编写 JavaScript 的前端开发人员现在能够运行服务端代码和前端代码而无需学习完全不同的语言。

In Node.js the new ECMAScript standards can be used without problems, as you don’t have to wait for all your users to update their browsers — you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node with flags.

新的 ECMAScript 标准在 Node.js 中使用毫无问题，因为你不必等待所有用户更新浏览器--你负责通过修改 Node.js 版本来决定使用哪个 ECMAScript 版本，还可以通过运行带有标志的节点来启用特定的实验功能。

#### It has a huge number of libraries
#### 它有大量的库

With its simple structure, the node package manager ([npm][2]) helped the ecosystem of Node.js proliferate. Now the [npm registry][3] hosts almost 500,000 open source packages you can freely use.

Node 包管理器[npm][2] 通过其简单的结构使得 Node.js 生态系统激增。现在 [npm registry][3] 主机托管了近 500000 个开源包，并且你可以自由使用。

### A sample Node.js application

### Node.js 应用程序示例

The most common example Hello World of Node.js is a web server:

最常见的 Node.js 的 Hello World 示例是 Web 服务器：

```
const http = require('http')
```

```plain
const hostname = '127.0.0.1'
const port = 3000
```

```
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
})
```

```
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
```

To run this snippet, save it as a `server.js` file and run `node server.js` in your terminal.

若要运行此代码片段，需要将这个文件另存为 'server.js' 并且在你的终端运行 'node server.js'。

This code first includes the Node.js `http` [module][4].

这段代码首先包含了 Node.js 的 'http' [模块][4]。

Node.js has an amazing [standard library][5], including a first-class support for networking.

Node.js 有一个惊人的 [标准库][5]，包括一流的网络支持。

The `createServer()` method of `http` creates a new HTTP server and returns it.

'http' 的 'createServer' 方法创建了一个新的 HTTP 服务并且返回了它。

The server is set to listen on the specified port and hostname. When the server is ready, the callback function is called, in this case informing us that the server is running.

服务器在指定的端口和主机名上设置监听。当服务器准备就绪时，将调用回调函数，在本例中通知我们服务器正在运行。

Whenever a new request is received, the `request` [event][6] is called, providing two objects: a request (an `[http.IncomingMessage][7]`object) and a response (an `[http.ServerResponse][8]`object).

每当接收到新的请求时，都会调用 `request` [event][6]，（这个方法）提供两个对象：一个请求（一个 `[http.IncomingMessage][7]` 对象）和一个响应（一个 `[http.ServerResponse][8]` 对象）

These 2 objects are essential to handle the HTTP call.

这两个对象是处理 HTTP 调用必需的。

The first provides the request details. In this simple example, this is not used, but you could access the request headers and request data.

第一个提供了请求的详细信息。在这个简单的示例中，不使用此选项，但你可以访问请求头和请求数据。

The second is used to return data to the caller.

第二个用于向访客返回数据。

In this case with:

在这种情况下：


```
res.statusCode = 200
```

We set the `statusCode` property to `200`, to indicate a successful response.

我们设置 `statusCode` 的属性为 `200` 来表明这是一个成功的请求。

We set the Content-Type header:

我们设置 Content-Type 头：

```
res.setHeader('Content-Type', 'text/plain')
```

……and we end close the response, adding the content as an argument to `end()`:

……并且我们可以关闭请求，将内容作为参数添加到 `end()`

```
res.end('Hello World\n')
```

### Node.js frameworks and tools

### Node.js 框架和工具

Node.js is a low-level platform. To make things easier and more interesting for developers, thousands of libraries were built upon Node.js.

Node.js 是一个底层平台。为了让开发人员做事情更简单和更有趣，数以千计的库被建立在 Node.js 上。

Many of those established over time as popular options. Here is a non-comprehensive list to the ones I consider very relevant and worth learning:

随着时间的流逝，其中许多已经变成受欢迎的选择。以下是我认为非常有意义且值得学习的非全面的列表：

-   [**Express**][9]  
    One of the most simple yet powerful ways to create a web server. Its minimalist approach and unopinionated focus on the core features of a server is key to its success.
    
    创建 web 服务器最简单但功能最强大的方法之一。它极简的方法和对服务器核心特性的专注是其成功的关键。
    
-   [**Meteor**][10]  
    An incredibly powerful full-stack framework, empowering you with an isomorphic approach to building apps with JavaScript and sharing code on the client and the server. Once an off-the-shelf tool that provided everything, it now integrates with front-end libraries such as [React][11], [Vue][12] and [Angular][13]. Meteor can be used to create mobile apps as well.
    
    一个功能强大的难以置信的全站框架，让你能够用一种同构的方法来使用 JavaScript 构建应用程序，并在客户端和服务器上共用代码。它曾经是一个现成的提供一切的工具，现在它集成了前端库，如[React][11]、[Vue][12]、[Angular][13]。Meteor 也可以用来创建移动应用程序。
    
-   [**Koa**][14]  
    Built by the same team behind Express, Koa aims to be even simpler and smaller, building on top of years of knowledge. The new project was born out of the need to create incompatible changes without disrupting the existing community.
    
    Koa 由 Express 原班人马打造，目标是在多年的经验积累上，变的更简单，更小的。这个新项目的诞生是出于在不破坏现有社区的情况下创建不兼容的更改。
    
-   [**Next.js**][15]  
    This is a framework to render server-side rendered [React][16] applications.
    
    这是一个用于渲染服务端渲染的 [React][16] 应用程序的框架。
    
-   [**Micro**][17]  
    This is a very lightweight server to create asynchronous HTTP microservices.
    
    这是一个非常轻量的服务器，用于创建 HTTP 微服务。
    
-   [**Socket.io**][18]  
    This is a real-time communication engine to build network applications.
    
    这是一个构建网络应用程序的实时通信引擎。

### A brief history of Node.js

### Node.js 简史

#### A look back on the history of Node.js from 2009 to today

#### Node.js 2009年至今的发展历程回顾。

Believe it or not, Node.js is just 9 years old.

信不信由你，Node.js 才九岁。

In comparison, JavaScript is 23 years old and the web as we know it (after the introduction of Mosaic) is 25 years old.

相比之下，JavaScript 有23年的历史，而我们知道的 web（在引入 Mosaic 之后）有25那年的历史

9 years is such a little amount of time for a technology, but Node.js seems to have been around forever.

对于一项技术来讲，9年是如此的短暂，但是 Node.js 似乎一直都存在。

I’ve had the pleasure to work with Node.js since the early days when it was just 2 years old, and despite the little information available, you could already feel it was a huge thing.

我很高兴在早期的早期的时候就用 Node.js 工作，那时候它才两岁，尽管可获得的信息很少，但依然可以感觉它是一个庞大的事物。

In this section, I want to draw the big picture of Node.js in its history, to put things in perspective.

在本节中，我想勾勒出 Node.js 历史的全貌，以正确的看待它。

#### A little bit of history

#### 一点历史

JavaScript is a programming language that was created at Netscape as a scripting tool to manipulate web pages inside their browser, [Netscape Navigator][19].

JavaScript 是 Netscape 创建的一种编程语言，它是一种脚本工具，用于在他们的浏览器 [Netscape Navigator][19] 中操作网页。

Part of the business model of Netscape was to sell Web Servers, which included an environment called “Netscape LiveWire”, which could create dynamic pages using server-side JavaScript. So the idea of server-side JavaScript was not introduced by Node.js, it’s old just like JavaScript — but at the time it was not successful.

Netscape 的部分业务是销售 Web 服务器，其包括名为 "Netscape LiveWire" 的环境，该环境可以使用服务器端 JavaScript 创建动态页面。因此服务器端 JavaScript 的概念并不是由 JS 引入的，它和 JavaScript 一样古老，但当时并不成功。

One key factor that led to the rise of Node.js was timing. A few years ago, JavaScript was starting to be considered a serious language, thanks for the “Web 2.0” applications that showed the world what a modern experience on the web could be like (think Google Maps or GMail).

导致 Node.js 崛起的一个关键因素是时机。几年前，JavaScript 开始被认为是一种严肃的语言，这要感谢 ”Web2.0“ 应用程序向世界展示了现在网络体验（比如 Google 地图或 GMail）。

The JavaScript engines performance bar raised considerably thanks to the browser competition battle, which is still going strong. Development teams behind each major browser work hard every day to give us better performance, which is a huge win for JavaScript as a platform. Chrome V8, the engine that Node.js uses under the hood, is one of those and in particular it’s the Chrome JavaScript engine.

由于浏览器激烈的竞争，JavaScript 引擎的性能有了很大的提高，这种竞争仍然在持续。每个主要浏览器的开发团队都在努力的工作，以给我们提供更好的性能，这对于 JavaScript 做为一个平台来讲是巨大的胜利。Node.js 在后台使用 Chrome V8 引擎就是其中之一，尤其是 Chrome JavaScript 引擎。

But of course, Node.js is not popular just because of pure luck or timing. It introduced much innovative thinking on how to program in JavaScript on the server.

当然，Node.js 单纯的因为运气或时机所以不受欢迎。它引入了许多关于如何在服务器上运行 JavaScript 编程的创新思想。

#### 2009

Node.js is born

Node.js 诞生了。

The first form of [npm][20] is created

第一种形式的 [npm][20] 被创建。

#### 2010

[Express][21] is born

[Express][21] 诞生了。

[Socket.io][22] is born

[Socket.io][22] 诞生了。

#### 2011

npm hits 1.0

npm 发布 1.0。

Big companies start adopting Node: [LinkedIn][23], [Uber][24]

大公司开始采用 Node：[LinkedIn][23], [Uber][24]。

[Hapi][25] is born

[Hapi][25] 诞生了。

#### 2012

Adoption continues very rapidly

采纳仍在持续的进行。

#### 2013

First big blogging platform using Node.js: [Ghost][26]
第一个使用 Node.js 的大型博客平台：[Ghost][26]。

[Koa][27] is born

[Koa][27] 诞生了。

#### 2014

Big drama: [IO.js][28] is a major fork of Node.js, with the goal of introducing ES6 support and move faster

重头戏：[IO.js][28] 是 Node.js 的一个重要分支，其目标是引入 ES6 的支持并加快运行速度。

#### 2015

The [Node.js Foundation][29] is born

[Node.js 基金会][29] 诞生了。

IO.js is merged back into Node.js

IO.js 被合并到 Node.js。

npm introduces private modules

npm 引入了私有模块。

[Node 4][30] (no 1, 2, 3 versions were previously released)

[Node 4][30] （之前没有发布1，2，3版本）

#### 2016

The [leftpad incident][31]

[leftpad 事件][31]。

[Yarn][32] is born: Node 6

[Yarn][32] 诞生: Node 6。

#### 2017

npm focuses more on security: Node 8

npm 更关注安全性： Node 8。

[HTTP/2][33]

[V8][34] introduces Node in its testing suite, officially making Node a target for the JavaScript engine, in addition to Chrome

[V8][34] 在其测试套件中引入 Node，正式使 Node 成为除了 Chrome 之外的 JavaScript 引擎的目标。

3 billion npm downloads every week

每周有 30亿 npm 下载量。

#### 2018

Node 10

[ES modules][35].

[mjs][36] experimental support

[mjs][36] 实验支持。

### How to install Node.js

### 如何安装 Node.js

#### How you can install Node.js on your system: a package manager, the official website installer or nvm
#### 如何在系统上安装 Node.js：包管理器、官方网站安装程序或 nvm。

Node.js can be installed in different ways. This post highlights the most common and convenient ones.

Node.js 可以用不同的方式安装。这篇文章重点介绍最常见和最方便的。

Official packages for all the major platforms are available [here][37].

所有主要平台的官方软件包都可以在[这里][37]获得。

One very convenient way to install Node.js is through a package manager. In this case, every operating system has its own.

安装 Node.js 的一种非常方便的方法是通过包管理器。在这种情况下，每种操作系统都有自己的操作命令。

On macOS, [Homebrew][38] is the de-facto standard, and — once installed — allows to install Node.js very easily, by running this command in the CLI:

在 macOS 上，[Homebrew][38] 是事实上的标准，一旦安装，通过在 CLI 中运行一下命令，可以非常轻松的安装 Node.js：

```
brew install node
```

Other package managers for Linux and Windows are listed [here][39].

其它的用于 Linux 和 Windows 的包管理器列表在 [这里][39]。

[nvm][40] is a popular way to run Node.js. It allows you to easily switch the Node.js version, and install new versions to try and easily rollback if something breaks, for example.

[nvm][40] 是运行 Node.js 流行的方法。它允许你轻松的切换 Node.js 版本，并且在安装新版本出现故障时尝试轻松回滚。

It is also very useful to test your code with old Node.js versions.

例如，它在永久版本测试您的代码的时候也非常有用。

My suggestion is to use the official installer if you are just starting out and you don’t use Homebrew already. Otherwise, Homebrew is my favorite solution.

我的建议是使用官方的安装程序，如果你刚开始并且没有使用 Homebrew。否则，Homebrew 是我最喜欢的解决方案。

### How much JavaScript do you need to know to use Node.js?

你需要了解多少 JavaScript 才能使用 Node.js？

If you are just starting out with JavaScript, how deeply do you need to know the language?

如果你才开始使用 JavaScript，你需要对语言有多深的了解？

As a beginner, it’s hard to get to a point where you are confident enough in your programming abilities.

作为一个初学者，很难对自己的编程能力有足够的信心。

While learning to code, you might also be confused at where does JavaScript end, and where Node.js begins, and vice versa.

在学习编程时，你可能还不清楚 JavaScript 在哪里结束，Node.js 在哪里开始，反之亦然。

I would recommend you to have a good grasp of the main JavaScript concepts before diving into Node.js:

在深入研究 Node.js 之前，我建议你充分掌握主要的 JavaScript 概念：

-   Lexical Structure
-   Expressions
-   Types
-   Variables
-   Functions
-   this
-   Arrow Functions
-   Loops
-   Loops and Scope
-   Arrays
-   Template Literals
-   Semicolons
-   Strict Mode
-   ECMAScript 6, 2016, 2017

-   词法结构
-   表达式
-   类型
-   变量
-   函数
-   this
-   箭头函数
-   循环
-   循环和作用域
-   数组
-   模板标签
-   分号
-   严格模式
-   ECMAScript 6, 2016, 2017

With those concepts in mind, you are well on your road to become a proficient JavaScript developer, in both the browser and in Node.js.

记住这些概念，无论在浏览器还是在 Node.js 中，你将成为一名精通 JavaScript 的开发人员。

The following concepts are also key to understand asynchronous programming, which is one fundamental part of Node.js:

以下概念也是理解异步编程的关键，异步编程是 Node.js 的一个基础部分：

-   Asynchronous programming and callbacks
-   Timers
-   Promises
-   Async and Await
-   Closures
-   The Event Loop

-   异步编程和回调
-   定时器
-   Promises
-   Async and Await
-   闭包
-   事件循环

Luckily I wrote a free ebook that explains all those topics, and it’s called [JavaScript Fundamentals][41]. It’s the most compact resource you’ll find to learn all of this.

幸运的是，我写了一本免费的电子书用来解释所有的主题，它叫 [JavaScript 基础][41]。这是你能找到的学习这些内容最紧凑的资源。。

### Differences between Node.js and the Browser

### Node.js 和浏览器的区别

How writing JavaScript application in Node.js differs from programming for the Web inside the browser.

在 Node.js 中编写 JavaScript 应用程序和在浏览器中为 Web 编程有何不同。

Both the browser and Node use JavaScript as their programming language.

浏览器和 Node 都用 JavaScript 作为它们的编程语言。

Building apps that run in the browser is a completely different thing than building a Node.js application.

构建在浏览器中运行的应用程序和构建 Node.js 应用程序完全不同。

Despite the fact that it’s always JavaScript, there are some key differences that make the experience radically different.

尽管事实上它始终是 JavaScript，但是有一些关键的差异使得体验完全不同。

A front-end developer that writes Node.js apps has a huge advantage — the language is still the same.

前端开发者编写 Node.js 应用程序有一个巨大的优势 - 语言仍然是一样的。

You have a huge opportunity because we know how hard it is to fully, deeply learn a programming language. By using the same language to perform all your work on the web — both on the client and on the server — you’re in a unique position of advantage.

你有一个巨大的契机，因为我们知道全面、深入的学习一门编程语言是多么的困难。通过使用同一种语言在 Web 上完成你的工作， 无论是在浏览器还是服务器上，你都处于独特的优势地位。

What changes is the ecosystem.

改变的是生态系统。

In the browser, most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies. Those do not exist in Node.js, of course. You don’t have the `document`, `window` and all the other objects that are provided by the browser.

在浏览器中，你大部分时间所做的是与 DOM 或者其它 Web 平台 API（如 Cookies）进行交互。当然，这些在 Node.js 中并不存在。你没有 `document`、`window` 和浏览器提供的其它所有的对象。

And in the browser, we don’t have all the nice APIs that Node.js provides through its modules, like the file system access functionality.

在浏览器中，我们并没有 Node.js 通过其模块提供的不错的 API，比如文件系统访问功能。

Another big difference is that in Node.js you control the environment. Unless you are building an open source application that anyone can deploy anywhere, you know which version of Node.js you will run the application on. Compared to the browser environment, where you don’t get the luxury to choose what browser your visitors will use, this is very convenient.

另一个很大的区别是，在 Node.js 中，你可以控制环境。除非你正在搭建一个任何人都可以在任何地方部署的开源应用程序，你知道在哪些版本的 Node.js 上运行该程序。与浏览器的环境相比，你不能选择访问者使用的浏览器，这是非常方便的。

This means that you can write all the modern ES6–7–8–9 JavaScript that your Node version supports.

这意味着你可以编写 Node 版本支持的所有现代 ES6-7-8-9 Javascript。

Since JavaScript moves so fast, but browsers can be a bit slow and users a bit slow to upgrade — sometimes on the web, you are stuck using older JavaScript/ECMAScript releases.

由于 Javascript 的变化速度很快，但是浏览器可能有点慢，并且用户升级也会有点慢 - 有时候在 web 上，你只能使用比较老的 JavaScript/ECMAScript 版本。

You can use Babel to transform your code to be ES5-compatible before shipping it to the browser, but in Node.js, you won’t need that.

在将代码发布到浏览器之前，你可以使用 Babel 将其转换为兼容 ES5-compatible 的代码，但是在 Node.js 中，你不需要这么做。

Another difference is that Node.js uses the [CommonJS][42] module system, while in the browser we are starting to see the ES Modules standard being implemented.

另一个不同点是 Node.js 使用 [CommonJS][42] 模块系统，在浏览器中，我们开始看到 ES Modules 标准开始实施。

In practice, this means that for the time being you use `require()` in Node.js and `import`in the browser.

实际上，这意味着目前你可以在 Node.js 中使用 `require()` 和在浏览器中使用 `import`。

### The V8 JavaScript Engine

### Javascript V8 引擎

V8 is the name of the JavaScript engine that powers Google Chrome. It’s the thing that takes our JavaScript and executes it while browsing with Chrome.

V8 是 Google Chrome 的 Javascript 引擎的名字。它是一种在使用 Chrome 浏览时获取 JavaScript 并执行的事物。

V8 provides the runtime environment in which JavaScript executes. The DOM, and the other Web Platform APIs are provided by the browser.

V8 为 JavaScript 的执行提供了运行环境。DOM 和其它 Web 平台 api 由浏览器提供。

The cool thing is that the JavaScript engine is independent by the browser in which it’s hosted. This key feature enabled the rise of Node.js. V8 was chosen for being the engine chosen by Node.js back in 2009, and as the popularity of Node.js exploded, V8 became the engine that now powers an incredible amount of server-side code written in JavaScript.

最酷的事情是 JavaScript 引擎独立于它所在的浏览器。这个关键特征使得 Node.js 兴起。V8 早在 2009 年就被选为 Node.js 的引擎，并且伴随着 Node.js 的爆发性发展，V8 变成了现在可以驱动大量用 JavaScript 编写的服务器端代码的引擎。

The Node.js ecosystem is huge and thanks to it V8 also powers desktop apps, with projects like [Electron][43].

Node.js 的生态系统是非常庞大的，并且 V8 还为桌面应用程序提供了支持，比如 [Electron][43]。

#### Other JS engines

#### 其它的 JS 引擎
Other browsers have their own JavaScript engine:

其它的浏览器有它们自己的 JavaScript 引擎：

-   Firefox has [Spidermonkey][44]
-   Safari has [JavaScriptCore][45] (also called Nitro)
-   Edge has [Chakra][46]

-   Firefox 有 [Spidermonkey][44]
-   Safari 有 [JavaScriptCore][45] (也可以叫 Nitro)
-   Edge 有 [Chakra][46]

and many others exist as well.

并且还有其它的也存在。

All those engines implement the ECMA ES-262 standard, also called ECMAScript, the standard used by JavaScript.

所有的这些引擎都实现了 ECMA ES-262 标准，也叫 ECMAScript，JavaScript 使用的标准。

#### The quest for performance

#### 性能的探索

V8 is written in C++, and it’s continuously improved. It is portable and runs on Mac, Windows, Linux and several other systems.

V8 是用 C++ 编写的，并且持续的改进。它是便携式的，可以在 Mac, Windows, Linux 和其它一些操作系统上。

In this V8 introduction, I will ignore the implementation details of V8. They can be found on more authoritative sites, including the [V8 official site][47], and they change over time, often radically.

在 V8 的简介中，我将忽略 V8 的实现细节。它们可以在更权威的网站上找到，包括 [V8 官网][47]，并且它们会随着时间的推移变化，通常会发生根本性的变化。

V8 is always evolving, just like the other JavaScript engines around, to speed up the Web and the Node.js ecosystem.

就像其他的 JavaScript 引擎一样，V8 在持续不断的发展以加速 Web 和 Node.js 生态系统。

On the web, there is a race for performance that’s been going on for years, and we (as users and developers) benefit a lot from this competition because we get faster and more optimized machines year after year.

在网络上，对性能的竞争已经持续很多年了，我们（做为用户和开发者）从这场竞争中获益匪浅，因为我们可以获得一年比一年更快、优化更好的机器。

#### Compilation

#### 编译

JavaScript is generally considered an interpreted language, but modern JavaScript engines no longer just interpret JavaScript, they compile it.

JavaScript 通常被认为是一种解释型语言，但是现在 JavaScript 引擎已不再仅仅是解释 JavaScript，而是一种编译语言。

This happens since 2009 when the SpiderMonkey JavaScript compiler was added to Firefox 3.5, and everyone followed this idea.

自 2009年 SpiderMonkey JavaScript 编译器被添加到 Firefox 3.5 后，所有人都遵循这个想法。

JavScript is internally compiled by V8 with just-in-time (JIT) compilation to speed up the execution.

JavaScript 是由 V8 内部编译的，它使用即时(JIT) 编译（原文：just-in-time (JIT) compilation）来加速执行。

This might seem counter-intuitive. But since the introduction of Google Maps in 2004, JavaScript has evolved from a language that was generally executing a few dozens of lines of code to complete applications with thousands to hundreds of thousands of lines running in the browser.

这看起来有违常理。但是自从2004年引入 Google 地图以来，JavaScript 已经从一种通常执行几十行代码的语言演变为在浏览器中运行数千到数十万行代码的应用程序。

Our applications now can run for hours inside a browser, rather than being just a few form validation rules or simple scripts.

我们的应用程序可以在浏览器中运行数小时，而不仅仅是一些表单验证规则或简单的脚本。

In this **new world**, compiling JavaScript makes perfect sense because while it might take a little bit more to have the JavaScript **ready**, once done it’s going to be much more performant that purely interpreted code.

在这个 **新世界**，编译 JavaScript 非常有意义，因为尽管 **尽管** 准备 JavaScript 可能需要更多的时间，但是一旦完成，纯解释性代码的性能会更好。

### How to exit from a Node.js program

### 如何退出 Node.js 程序

There are various ways to terminate a Node.js application.

有多种方法可以结束 Node.js 应用程序。

When running a program in the console you can close it with `ctrl-C`, but what I want to discuss here is programmatically exiting.

在控制台运行程序的时候，你可以通过 `ctrl-C` 关闭它，但是这里我要讨论的是如何以编程的方式退出。

Let’s start with the most drastic one, and see why you’re better off **not** using it.

让我们从最极端的一个开始，并且看看为什么你最好**不要**使用它。

The `process` core module is provides a handy method that allows you to programmatically exit from a Node.js program: `process.exit()`.

`process` 核心模块提供了一个简便的方法允许你以编程的方式退出 Node.js 程序 `process.exit()`

When Node.js runs this line, the process is immediately forced to terminate.

当 Node.js 运行这行的时候，进程会立即强制结束。

This means that any callback that’s pending, any network request still being sent, any file system access, or processes writing to `stdout` or `stderr` — all is going to be ungracefully terminated right away.

这意味着任何正挂起的回调、正在发送的网络请求、任何文件系统访问、或者正在写入 `stdout` 或 `stderr` 的进程 - 都将立即被恶意终止。

If this is fine for you, you can pass an integer that signals the operating system the exit code:

如果对你是合适的，你可以传递一个整数，向操作系统发送退出代码：

```
process.exit(1)
```

By default the exit code is `0`, which means success. Different exit codes have different meaning, which you might want to use in your own system to have the program communicate to other programs.

默认情况下，退出代码为 `0`，表示成功。不同的退出代码具有不懂的涵义，你可可能希望在自己的系统中使用这些代码，一边程序与其他程序通信。

You can read more on exit codes [here][48].

你可以在 [这里][48] 阅读更多关于退出代码的信息。

You can also set the `process.exitCode` property:

你还可以设置 `process.exitCode` 属性：

```
process.exitCode = 1
```

and when the program will later end, Node.js will return that exit code.

当程序将要结束时，Node.js 将返回退出代码。

A program will gracefully exit when all the processing is done.

所有的处理完成后，程序将正常退出。

Many times with Node.js we start servers, like this HTTP server:

很多时候，我们用 Node.js 启动服务器，比如这个 HTTP 服务器：

```
const express = require('express')const app = express()
```

```plain
app.get('/', (req, res) => {  res.send('Hi!')})
```

```
app.listen(3000, () => console.log('Server ready'))
```

This program is never going to end. If you call `process.exit()`, any currently pending or running request is going to be aborted. This is **not nice**.

这个程序永远不会结束。如果你调用 `process.exit()`，任何当前挂起或者正在运行的请求都将被终止。这 **不太好**。

In this case you need to send the command a `SIGTERM` signal, and handle that with the process signal handler:

在这种情况下，你需要向终端发送一个 `SIGTERM` 命令，并使用进程命令处理程序处理该命令。

**Note:** `process` does not require a `require`, it's automatically available.

**注意**：`process` 不需要 `require`，它是自带可用的。

```plain
const express = require('express')
```

```plain
const app = express()
```

```
app.get('/', (req, res) => {  res.send('Hi!')})
```

```plain
app.listen(3000, () => console.log('Server ready'))
```

```plain
process.on('SIGTERM', () => {  app.close(() => {    console.log('Process terminated')  })})
```

What are signals? Signals are a Portable Operating System Interface (POSIX) intercommunication system: a notification sent to a process in order to notify it of an event that occurred.

什么是信号？信号是可移植操作系统接口（POSIX）内部通信系统：一种发给进程的通知，以通知它所发生的事情。

`SIGKILL` is the signals that tells a process to immediately terminate, and would ideally act like `process.exit()`.

`SIGKILL` 是通知进程立即终止的信号，理想情况下，它的行为类似于 `process.exit()`。

`SIGTERM` is the signals that tells a process to gracefully terminate. It is the signal that's sent from process managers like `upstart` or `supervisord` and many others.

`SIGTERM` 是通知进程正常终止的信号。这是进程管理器发出的信号，如 `upstart` 或 `supervisord` 等。

You can send this signal from inside the program, in another function:

你可以通过另一个功能从程序内部发送此信号：

```
process.kill(process.pid, 'SIGTERM')
```

Or from another Node.js running program, or any other app running in your system that knows the PID of the process you want to terminate.

或者从另外一个正在运行的 Node.js 程序、或者系统中运行的任何其它应用程序知道要终止的进程的 PID。

### How to read environment variables from Node.js
### 如何从 Node.js 读取环境变量

The `process` core module of Node provides the `env`property which hosts all the environment variables that were set at the moment the process was started.

Node 的 `process` 核心模块提供 `env` 属性，该属性设置在进程启动时设置的所有环境变量中。

Here is an example that accesses the `NODE_ENV` environment variable, which is set to `development` by default.

下面是一个访问环境变量 `NODE_ENV` 的例子，该变量默认设置为 `development`。

```plain
process.env.NODE_ENV // "development"
```

Setting it to `production` before the script runs will tell Node.js that this is a production environment.

在脚本运行之前将其设置为 `production`，将告诉 Node.js 这是一个生产环境。

In the same way you can access any custom environment variable you set.

以同样的方式，你可以访问你设置的任何自定义环境变量。

### Where to host a Node.js app

### Node.js 应用程序托管在哪里

A Node.js application can be hosted in a lot of places, depending on your needs.

Node.js 应用程序可以托管在很多地方，取决于你的需求。

Here is a non-exhaustive list of the options you can explore when you want to deploy your app and make it publicly accessible.

以下是一个非详细的选项列表，当你想要部署应用程序并让它可以公开访问时，你可以探索这些选项。

I will list the options from simplest and constrained to more complex and powerful.

我将列出从最简单和受约束的到更复杂和强大的选项。

#### Simplest option ever: local tunnel

#### 最简单的选择：本地隧道

Even if you have a dynamic IP, or you’re under a NAT, you can deploy your app and serve the requests right from your computer using a local tunnel.

即使你有一个动态 IP，或者你在 NAT 下，你也可以部署你的应用程序，并使用本地隧道来服务你的计算机的请求。

This option is suited for some quick testing, demo a product or sharing of an app with a very small group of people.

这个选项适用于一些快速测试、演示产品或与极少数人共享应用程序。

A very nice tool for this, available on all platforms, is [ngrok][49].

[ngrok][49] 是一个非常好的工具，在所有的平台都可以使用。

Using it, you can just type `ngrok PORT` and the PORT you want is exposed to the internet. You will get a ngrok.io domain, but with a paid subscription you can get a custom URL as well as more security options (remember that you are opening your machine to the public Internet).

使用它，你只需要键入 `ngrok PORT`，你想要的端口就会暴露在互联网上。你将会得到一个 ngrok.io 的域名，但是通过付费订阅，你可以获得自定义 URL 以及更多安全选项（请记住，你正在向公共 Internet 打开你的计算机）。

Another service you can use is [localtunnel][50].

你可以使用的另一个服务是 [localtunnel][50]。

#### Zero configuration deployments

#### 零配置部署

#### Glitch

[Glitch][51] is a playground and a way to build your apps faster than ever, and see them live on their own glitch.com subdomain. You cannot currently have a a custom domain, and there are a few [restrictions][52] in place, but it’s really great to prototype. It looks fun (and this is a plus), and it’s not a dumbed down environment — you get all the power of Node.js, a CDN, secure storage for credentials, GitHub import/export and much more.

[Glitch][51] 是一个广场，是一种比以往任何时候都更快的构建应用程序的方法，并可以看到它们在 glitch.com 子域名运行。你现在不能拥有一个自定义域名，并且在一些地方有一些[限制][52]，但它真的是非常棒的典型。它看起来很有趣（这是一个优点），它不是一个简单的环境 - 你得到了 Node.js 所有的能力，CDN 用于凭据的安全存储。GitHub 的 import/export 等等。

Provided by the company behind FogBugz and Trello (and co-creators of Stack Overflow).

由 FogBugz 和 Trello 背后的公司（以及 Stack Overflow 的共同创建者）提供。

I use it a lot for demo purposes.

我经常用它来演示。

#### Codepen

[Codepen][53] is an amazing platform and community. You can create a project with multiple files, and deploy it with a custom domain.

[Codepen][53] 是一个令人惊叹的平台和社区。你可以创建一个包含多个文件的项目，并使用自定义域名进行部署。

#### Serverless

A way to publish your apps, and have no server at all to manage, is Serverless. Serverless is a paradigm where you publish your apps as **functions**, and they respond on a network endpoint (also called FAAS — Functions As A Service).

Serverless 是发布应用程序的一种方式，且无需管理任何服务器。Serverless 是一种规范，在这个规范中你可以将应用程序发布为 **functions**，他们在网络终端（也称为 FAAS — Functions As A Service）上响应。

To very popular solutions are:

非常受欢迎的解决方案：

-   [Serverless Framework][54]
-   [Standard Library][55]

They both provide an abstraction layer to publishing on AWS Lambda and other FAAS solutions based on Azure or the Google Cloud offering.

它们都为在 AWS Lambda 和其他基于 Azure 或者 Google Cloud 的 FAAS 解决方案上发布提供了一个抽象层。

#### PAAS

PAAS stands for Platform As A Service. These platforms take away a lot of things you should otherwise worry about when deploying your application.

PAAS 表示 Platform As A Service（平台即服务）。这些平台带走了许多在部署应用程序时应该担心的事情。

#### Zeit Now

[Zeit][56] is an interesting option. You just type `now` in your terminal, and it takes care of deploying your application. There is a free version with limitations, and the paid version is more powerful. You simply forget that there’s a server, you just deploy the app.

[Zeit][56] 是一个有趣的选择。你只需要在终端键入 `now`，它就会负责部署应用程序。有一个有限制的免费版本，付费版本更强大。你简单的忘了有一个服务器，你只是部署应用程序。

#### Nanobox

[Nanobox][57]

#### Heroku

[Heroku][58] is an amazing platform.

[Heroku][58] 是一个令人惊异的平台。

This is a great article on [getting started with Node.js on Heroku][59].

[getting started with Node.js on Heroku][59] 这篇文章非常棒。

#### Microsoft Azure

[Azure][60] is the Microsoft Cloud offering.

[Azure][60] 由 Microsoft Cloud 提供。

Check out how to [create a Node.js web app in Azure][61].

检查怎样[在 Azure 上创建 Node.js 网络应用程序][61]。

#### Google Cloud Platform

#### Google Cloud 平台

[Google Cloud][62] is an amazing structure for your apps.

[Google Cloud][62] 在你的应用程序中是一个神奇的构造。

They have a good [Node.js Documentation Section][63].

他们有一个好的 [Node.js Documentation Section][63]。

#### Virtual Private Server

In this section you find the usual suspects, ordered from more user friendly to less user friendly:

在本节中，你可以找到常见 suspects ？？？，从更方便用户使用到不方便使用：

-   [Digital Ocean][64]
-   [Linode][65]
-   [Amazon Web Services][66], in particular I mention Amazon Elastic Beanstalk as it abstracts away a little bit the complexity of AWS.
-   [Amazon Web Services][66], 我特别提到了 Amazon Elastic Beanstalk，因为它稍微抽象了 AWS 的复杂性。

Since they provide an empty Linux machine on which you can work, there is no specific tutorial for these.

因为他们提供了一个空的 Linux 机器，你可以在上面工作，所以没有具体的教程来介绍这些。

There are lots more options in the VPS category, those are just the ones I used and I would recommend.

VBS 类别中有更多的选项，这些正是我使用的，我会推荐的。

#### Bare metal

Another solution is to get a [bare metal server][67], install a Linux distribution, connect it to the internet (or rent one monthly, like you can do using the [Vultr Bare Metal][68] service)

另一个解决方案是获得一个 [bare metal server][67]，安装一个 Linux 发行版，将其连接到互联网（或者每月租用一个，就像使用 [Vultr bare metal][68] 服务一样）。

### How to use the Node.js REPL

### 如何使用 Node.js REPL

REPL stands for Read-Evaluate-Print-Loop, and it’s a great way to explore the Node.js features in a quick way.

REPL 代表 Read-Evaluate-Print-Loop，它是一种快速探索 JS 特性的好方法。

The `node` command is the one we use to run our Node.js scripts:

`node` 命令是我们用来运行 Node.js 的脚本：

```plain
node script.js
```

If we omit the filename, we use it in REPL mode:

如果省略文件名，则在 REPL 模式下使用：


```plain
node
```

If you try it now in your terminal, this is what happens:

如果你在终端中尝试，会发生以下情况：

```
>
```

the command stays in idle mode and waits for us to enter something.

命令保持在空闲模式，等待我们输入一些内容。

**Tip**: if you are unsure how to open your terminal, Google “How to open terminal on <your operating system>”.

**提示**：如果你不确定如何打开终端，请使用谷歌 “如何在 <你的操作系统> 上打开终端”。

The REPL is waiting for us to enter some JavaScript code.

REPL 正在等待我们输入一些 JavaScript 代码。

Start simple and enter:

简单启动并输入：

```plain
> console.log('test')
test
undefined
>
```

The first value, `test`, is the output we told the console to print, then we get undefined which is the return value of running `console.log()`.

第一个值 `test` 是我们告诉控制到打印的输出，然后我们得到 undefined，这是运行 `console.log()` 的返回值。

We can now enter a new line of JavaScript.

我们现在可以输入一行新的 JavaScript。

#### Use the tab to autocomplete

#### 使用 tab 自动完成

The cool thing about the REPL is that it’s interactive.

REPL 非常酷的是它是交互式的。

As you write your code, if you press the `tab` key the REPL will try to autocomplete what you wrote to match a variable you already defined or a predefined one.

在编写代码时，如果按 `tab` 键，REPL 将尝试自动完成所编写的内容，以匹配已定义的变量或预定义的变量。

#### Exploring JavaScript objects

#### 探索 JavaScript 对象

Try entering the name of a JavaScript class, like `Number`, add a dot and press `tab`.

尝试输入 JavaScript 类的名称，如 `Number`，添加一个点，然后按 `tab` 键。

The REPL will print all the properties and methods you can access on that class:

REPL 将打印你可以在该类上访问的所有属性和方法：

![](https://cdn-media-1.freecodecamp.org/images/MgYHCtgjD1rom1yKM43E-qBh7ansJuyglRWr)

#### Explore global objects

#### 探索全局对象

You can inspect the globals you have access to by typing `global.` and pressing `tab`:

你可以通过输入 `global` 并按 `tab` 来检查有权访问的全局变量：

![](https://cdn-media-1.freecodecamp.org/images/e2qWLuyjYC4DFZjEs2jYWK-NL9AXbpDiSdA7)

#### The \_ special variable

#### 特别的变量 \_
If after some code you type `_`, that is going to print the result of the last operation.

如果在某些代码之后输入 `_`，则将打印最后一次操作的结果。

#### Dot commands

#### dot 命令

The REPL has some special commands, all starting with a dot `.`. They are

REPL 有一些特殊的命令，都以一个点 `.` 开头。他们是

-   `.help`: shows the dot commands help
-   `.editor`: enables editor more, to write multiline JavaScript code with ease. Once you are in this mode, enter ctrl-D to run the code you wrote.
-   `.break`: when inputting a multi-line expression, entering the .break command will abort further input. Same as pressing ctrl-C.
-   `.clear`: resets the REPL context to an empty object and clears any multi-line expression currently being input.
-   `.load`: loads a JavaScript file, relative to the current working directory
-   `.save`: saves all you entered in the REPL session to a file (specify the filename)
-   `.exit`: exists the repl (same as pressing ctrl-C two times)

- `.help`：显示 dot 命令帮助
- `.editor`：使编辑器更易于编写多行 JavaScript 代码。进入此模式后，输入 ctrl-D 以运行编写的代码。
- `.break`：输入多行表达式时，输入 .break 命令将终止进一步的输入。与按 ctrl-C 相同。
- `.clear`：将 REPL 上下文重置为空对象，并清除当前正在输入的多行表达式。
- `.load`：相对于当前工作目录加载 JavaScript 文件。
- `.save`：将在 REPL 会话中输入的所有内容保存到一个文件（指定文件名）
- `.exit`：退出 repl（与按两次 ctrl-C 相同）

The REPL knows when you are typing a multi-line statement without the need to invoke `.editor`.

REPL 知道何时键入多行语句而不需要调用 `.editor`。

For example if you start typing an iteration like this:

例如，如果你开始键入如下迭代：

```
[1, 2, 3].forEach(num =>; {
```

and you press `enter`, the REPL will go to a new line that starts with 3 dots, indicating you can now continue to work on that block.

按 `回车` 键，REPL 将转到一个以3个点开始的新行，表示你现在可以继续处理该块。

```
... console.log(num)... })
```

If you type `.break` at the end of a line, the multiline mode will stop and the statement will not be executed.

如果在行位键入 `.break`，多行模式将停止，语句将不会执行。

### Node.js, accept arguments from the command line

### Node.js，从命令行接收参数

How to accept arguments in a Node.js program passed from the command line

如何在从命令行传递的 Node.js 程序中接收参数。

You can pass any number of arguments when invoking a Node.js application using:

调用 Node.js 应用程序时，可以使用一下方法传递任意数量的参数：

```plain
node app.js
```

Arguments can be standalone or have a key and a value.

参数可以是独立的，也可以有 key 和 value。

For example:

例如：

```plain
node app.js flavio
```

or

或者

```plain
node app.js name=flavio
```

This changes how you will retrieve this value in the Node.js code.

这将改变在 Node.js 代码中检索该值的方式。

The way you retrieve it is using the `process` object built into Node.js.

检索它的方法是使用 Node.js 中内置的 `process` 对象。

It exposes an `argv` property, which is an array that contains all the command line invocation arguments.

它公开了一个 `argv` 属性，该属性是一个包含所有命令行调用参数的数组。

The first argument is the full path of the `node` command.

第一个参数是 `node` 命令的完整路径。

The second element is the full path of the file being executed.

第二个元素是正在执行的文件的完整路径。

All the additional arguments are present from the third position going forward.

所有额外的参数都是从第三个位置开始的。

You can iterate over all the arguments (including the node path and the file path) using a loop:

可以使用循环迭代所有参数（包括节点路径和文件路径）：

```
process.argv.forEach((val, index) => {  console.log(`${index}: ${val}`)})
```

You can get only the additional arguments by creating a new array that excludes the first 2 params:

通过创建排除前两个参数的新数组，只能获取附加参数：

```plain
const args = process.argv.slice(2)
```

If you have one argument without an index name, like this:

如果有一个参数没有索引名，如下所示：

```
node app.js flavio
```

you can access it using

你可以使用

```
const args = process.argv.slice(2)args[0]
```

In this case:

在这种情况下：

```plain
node app.js name=flavio
```

`args[0]` is `name=flavio`, and you need to parse it. The best way to do so is by using the `minimist` [library][69], which helps dealing with arguments:

`args[0]` 是 `name=flavio`，需要对其进行解析。最好的方法是使用 `minimist` [库][69]，这有助于处理参数：

```
const args = require('minimist')(process.argv.slice(2))args['name'] //flavio
```

### Output to the command line using Node.js

### 使用 Node.js 输出到命令行

How to print to the command line console using Node.js, from the basic console.log to more complex scenarios

如何使用 Node.js 打印到命令行控制台，从基本的 console.log 到更复杂的场景。

#### Basic output using the console module

#### 使用控制台模块的基本输出

Node.js provides a `console` [module][70] which provides tons of very useful ways to interact with the command line.

Node.js 提供一个 `console` [模块][70]，它提供了大量与命令行交互非常有用的方法。

It is basically the same as the `console` object you find in the browser.

它与你在浏览器中找到的 `console` 对象基本相同。

The most basic and most used method is `console.log()`, which prints the string you pass to it to the console.

最基本和最常用的方法是 `console.log()`，将传递给它的字符串打印到控制台。

If you pass an object, it will render it as a string.

如果你传递了一个对象，它将把它呈现为一个字符串。

You can pass multiple variables to `console.log`, for example:

你可以将多个变量传递给  `console.log`，例如：

```plain
const x = 'x'const y = 'y'console.log(x, y)
```

and Node.js will print both.

Node.js 将把两个都打印出来。

We can also format pretty phrases by passing variables and a format specifier.

我们还可以通过传递变量和格式说明符来格式化漂亮的短语。

For example:

例如：

```
console.log('My %s has %d years', 'cat', 2)
```

-   `%s` format a variable as a string
-   `%d` or `%i` format a variable as an integer
-   `%f` format a variable as a floating point number
-   `%O` used to print an object representation

-   `%s` 将变量格式化为字符串
-   `%d` 或 `%i` 将变量格式化为整数
-   `%f` 将变量格式化为浮点数
-   `%O` 用于打印对象表示

Example:

例如：

```plain
console.log('%O', Number)
```

#### Clear the console

#### 清理控制台

`console.clear()` clears the console (the behavior might depend on the console used)

`console.clear()` 清理控制台（行为可能取决于使用的控制台）

#### Counting elements

#### 计数元素

`console.count()` is a handy method.

`console.count()` 是一个灵活的方法。

Take this code:

使用以下代码：

```
const x = 1
const y = 2
const z = 3
console.count(  'The value of x is ' + x + ' and has been checked .. how many times?')
console.count(  'The value of x is ' + x + ' and has been checked .. how many times?')
console.count(  'The value of y is ' + y + ' and has been checked .. how many times?')
```

What happens is that `count` will count the number of times a string is printed, and print the count next to it.

所要发生的是 `count` 将计算字符串打印次数，并打印旁边的计数。

You can just count apples and oranges:

你可以数苹果和橘子：

```
const oranges = ['orange', 'orange']
const apples = ['just one apple']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})
```

#### Print the stack trace
#### 打印堆栈跟踪

There might be cases where it’s useful to print the call stack trace of a function, maybe to answer the question: “How did you reach that part of the code?”

在某些情况下，打印函数的调用堆栈跟踪可能很有用，也许可以回答这样一个问题：“你是如何到达代码的那一部分的？”

You can do so using `console.trace()`:

你可以这样使用 `console.trace()`:

```
const function2 = () => console.trace()
const function1 = () => function2()
function1()
```

This will print the stack trace. This is what’s printed if I try this in the Node REPL:

这将要打印堆栈跟踪，如果我在 Node REPL 中尝试，就会打印这个。

```plain
Trace
    at function2 (repl:1:33)    
    at function1 (repl:1:25)    
    at repl:1:1    
    at ContextifyScript.Script.runInThisContext (vm.js:44:33)    
    at REPLServer.defaultEval (repl.js:239:29)    
    at bound (domain.js:301:14)    
    at REPLServer.runBound [as eval] (domain.js:314:12)    
    at REPLServer.onLine (repl.js:440:10)    
    at emitOne (events.js:120:20)    
    at REPLServer.emit (events.js:210:7)
```

#### Calculate the time spent

#### 计算花费的时间

You can easily calculate how much time a function takes to run, using `time()` and `timeEnd()`
你可以使用 `time()` 和 `timeEnd()` 轻松计算函数运行所需时间。
```
const doSomething = () => console.log('test')
const measureDoingSomething = () => {
    console.time('doSomething()')  //do something, and measure the time it takes
    doSomething()
    console.timeEnd('doSomething()')
}
measureDoingSomething()
```

#### stdout and stderr

As we saw console.log is great for printing messages in the Console. This is what’s called the standard output, or `stdout`.

如我们所见 console.log 非常适合在控制台中打印消息。这就是所谓的标准输出，或 `stdout`。

`console.error` prints to the `stderr` stream.

`console.error` 打印 `stderr` 流。

It will not appear in the console, but it will appear in the error log.

它不会出现在控制台中，但会出现在错误日志中。

#### Color the output

#### 为输出着色

You can color the output of your text in the console by using escape sequences. An escape sequence is a set of characters that identifies a color.

你可以使用转义符在控制台中为文本的输出着色。转义符是标识颜色的一组字符。

Example:

例如：

```
console.log('\x1b[33m%s\x1b[0m', 'hi!')
```

You can try that in the Node REPL, and it will print `hi!` in yellow.

你可以在 Node REPL 中尝试，他将打印黄色的 `hi!`。

However, this is the low-level way to do this. The simplest way to go about coloring the console output is by using a library. [Chalk][71] is such a library, and in addition to coloring it also helps with other styling facilities, like making text bold, italic or underlined.

然而，这是一种低级的方法。为控制台输出着色最简单的方法是使用库。[Chalk][71] 就是这样一个库，除了着色之外，它还可以帮助其他样式设置，比如使文本加粗、斜体或下划线。

You install it with `npm install chalk`, then you can use it:

你可以使用 `npm install chalk` 安装它，然后可以使用它：

```plain
const chalk = require('chalk')
console.log(chalk.yellow('hi!'))
```

Using `chalk.yellow` is much more convenient than trying to remember the escape codes, and the code is much more readable.

使用 `chal.yellow` 比试图记住转移码方便得多，而且代码的可读性更高。

Check the project link I posted above for more usage examples.

查看我在上面发布的项目链接以获取更多的用法示例。

#### Create a progress bar

#### 创建进度条

[Progress][72] is an awesome package to create a progress bar in the console. Install it using `npm install progress`.

[Progress][72] 是一个很棒的包，可以在控制台中创建进度条。使用 `npm install progress` 安装它。

This snippet creates a 10-step progress bar, and every 100 ms one step is  completed. When the bar completes we clear the interval:

这个片段创建了一个 10步的进度条，每 100 毫秒完成一步。当进度完成时，我们清除 interval：

```
const ProgressBar = require('progress')
```

```
const bar = new ProgressBar(':bar', {
    total: 10
  })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)
```

### Accept input from the command line in Node.js

### 在 Node.js 中接受来自命令行的输入

How to make a Node.js CLI program interactive?

如何使 Node.js CLI 程序具有交互性？

Node since version 7 provides the `readline` [module][73] to perform exactly this: get input from a readable stream such as the `process.stdin` stream, which during the execution of a Node program is the terminal input, one line at a time.

自从 7 版本以来的 Node 提供了 `readline` [模块][73]

```plain
const readline = require('readline').createInterface({  input: process.stdin,  output: process.stdout})
```

```
readline.question(`What's your name?`, (name) => {  console.log(`Hi ${name}!`)  readline.close()})
```

This piece of code asks the username, and once the text is entered and the user presses enter, we send a greeting.

The `question()` method shows the first parameter (a question) and waits for the user input. It calls the callback function once enter is pressed.

In this callback function, we close the readline interface.

`readline` offers several other methods, and I’ll let you check them out on the package documentation I linked above.

If you need to require a password, it’s best to now echo it back, but instead showing a `*`symbol.

The simplest way is to use the readline-sync [package][74] which is very similar in terms of the API and handles this out of the box.

A more complete and abstract solution is provided by the [Inquirer.js package][75].

You can install it using `npm install inquirer`, and then you can replicate the above code like this:

```plain
const inquirer = require('inquirer')
```

```
var questions = [{  type: 'input',  name: 'name',  message: "What's your name?",}]
```

```
inquirer.prompt(questions).then(answers => {  console.log(`Hi ${answers['name']}!`)})
```

Inquirer.js lets you do many things like asking multiple choices, having radio buttons, confirmations, and more.

It’s worth knowing all the alternatives, especially the built-in ones provided by Node.js, but if you plan to take CLI input to the next level, Inquirer.js is an optimal choice.

### Expose functionality from a Node.js file using exports

How to use the `module.exports` API to expose data to other files in your application, or to other applications as well

Node.js has a built-in module system.

A Node.js file can import functionality exposed by other Node.js files.

When you want to import something you use:

```
const library = require('./library')
```

to import the functionality exposed in the `library.js` file that resides in the current file folder.

In this file, functionality must be exposed before it can be imported by other files.

Any other object or variable defined in the file by default is private and not exposed to the outer world.

This is what the `module.exports` API offered by the `module` [system][76] allows us to do.

When you assign an object or a function as a new `exports` property, that is the thing that’s being exposed. As such, it can be imported in other parts of your app, or in other apps as well.

You can do so in 2 ways.

The first is to assign an object to `module.exports`, which is an object provided out of the box by the module system, and this will make your file export **just that object**:

```
const car = {  brand: 'Ford',  model: 'Fiesta'}
```

```
module.exports = car
```

```
//..in the other file
```

```
const car = require('./car')
```

The second way is to add the exported object as a property of `exports`. This way allows you to export **multiple** objects, functions or data:

```
const car = {  brand: 'Ford',  model: 'Fiesta'}
```

```
exports.car = car
```

or directly

```
exports.car = {  brand: 'Ford',  model: 'Fiesta'}
```

And in the other file, you’ll use it by referencing a property of your import:

```
const items = require('./items')items.car
```

or

```
const car = require('./items').car
```

What’s the difference between `module.exports` and `exports`?

The first exposes **the object** it points to. The latter exposes **the properties** of the object it points to.

### Introduction to npm

`npm` means **node package manager**.

In January 2017 over 350,000 packages were reported as being listed in the npm registry, making it the biggest single language code repository on Earth, and you can be sure there is a package for (almost!) everything.

It started as a way to download and manage dependencies of Node.js packages, but it has since become a tool used also in front-end JavaScript.

There are many things that `npm` does.

#### Downloads

`npm` manages downloads of dependencies of your project.

#### Installing all dependencies

If a project has a `packages.json` file, by running

```
npm install
```

it will install everything the project needs, in the `node_modules` folder, creating it if it’s not existing already.

#### Installing a single package

You can also install a specific package by running

```
npm install <package-name>
```

Often you’ll see more flags added to this command:

-   `--save` installs and adds the entry to the `package.json` file `dependencies`
-   `--save-dev` installs and adds the entry to the `package.json` file `devDependencies`

The difference is mainly that `devDependencies` are usually development tools, like a testing library, while `dependencies` are bundled with the app in production.

#### Updating packages

Updating is also made easy, by running

```
npm update
```

`npm` will check all packages for a newer version that satisfies your versioning constraints.

You can specify a single package to update as well:

```plain
npm update <package-name>
```

#### Versioning

In addition to plain downloads, `npm` also manages **versioning**, so you can specify any specific version of a package, or require a version higher or lower than what you need.

Many times you’ll find that a library is only compatible with a major release of another library.

Or a bug in the latest release of a lib, still unfixed, is causing an issue.

Specifying an explicit version of a library also helps to keep everyone on the same exact version of a package, so that the whole team runs the same version until the `package.json` file is updated.

In all those cases, versioning helps a lot, and `npm` follows the semantic versioning (semver) standard.

#### Running Tasks

The package.json file supports a format for specifying command line tasks that can be run by using

```plain
npm <task-name>
```

For example:

```plain
{  "scripts": {    "start-dev": "node lib/server-development",    "start": "node lib/server-production"  }}
```

It’s very common to use this feature to run Webpack:

```
{  "scripts": {    "watch": "webpack --watch --progress --colors --config webpack.conf.js",    "dev": "webpack --progress --colors --config webpack.conf.js",    "prod": "NODE_ENV=production webpack -p --config webpack.conf.js",  }}
```

So instead of typing those long commands, which are easy to forget or mistype, you can run

```
$ npm watch$ npm dev$ npm prod
```

### Where does npm install the packages?

When you install a package using `npm` (or [yarn][77]), you can perform 2 types of installation:

-   a local install
-   a global install

By default, when you type an `npm install` command, like:

```
npm install lodash
```

the package is installed in the current file tree, under the `node_modules` subfolder.

As this happens, `npm` also adds the `lodash` entry in the `dependencies` property of the `package.json` file present in the current folder.

A global installation is performed using the `-g` flag:

```
npm install -g lodash
```

When this happens, npm won’t install the package under the local folder, but instead, it will use a global location.

Where, exactly?

The `npm root -g` command will tell you where that exact location is on your machine.

On macOS or Linux this location could be `/usr/local/lib/node_modules`. On Windows it could be `C:\Users\YOU\AppData\Roaming\npm\node_modules`

If you use `nvm` to manage Node.js versions, however, that location would differ.

I for example use `nvm` and my packages location was shown as`/Users/flavio/.nvm/versions/node/v8.9.0/lib/node_modules`.

### How to use or execute a package installed using npm

#### How to include and use in your code a package installed in your node_modules folder

When you install using `npm` a package into your `node_modules` folder, or also globally, how do you use it in your Node code?

Say you install `lodash`, the popular JavaScript utility library, using

```
npm install lodash
```

This is going to install the package in the local `node_modules` folder.

To use it in your code, you just need to import it into your program using `require`:

```
const _ = require('lodash)
```

What if your package is an executable?

In this case, it will put the executable file under the `node_modules/.bin/` folder.

One easy way to demonstrate this is [cowsay][78].

The cowsay package provides a command line program that can be executed to make a cow say something (and other animals as well).

When you install the package using `npm install cowsay`, it will install itself and a few dependencies in the node_modules folder:

There is a hidden .bin folder, which contains symbolic links to the cowsay binaries.

How do you execute those?

You can of course type `./node_modules/.bin/cowsay` to run it, and it works, but [npx][79], included in the recent versions of npm (since 5.2), is a much better option. You just run:

```
npx cowsay
```

and npx will find the package location.

### The package.json guide

The package.json file is a key element in lots of app codebases based on the Node.js ecosystem.

If you work with JavaScript, or you’ve ever interacted with a JavaScript project, Node.js or a front-end project, you surely met the `package.json` file.

What’s that for? What should you know about it, and what are some of the cool things you can do with it?

The `package.json` file is kind of a manifest for your project. It can do a lot of things, completely unrelated. It’s a central repository of configuration for tools, for example. It’s also where `[npm][80]`and `[yarn][81]`store the names and versions of the package it installed.

#### The file structure

Here’s an example package.json file:

```
{
```

```
}
```

It’s empty! There are no fixed requirements of what should be in a `package.json` file, for an application. The only requirement is that it respects the JSON format, otherwise it cannot be read by programs that try to access its properties programmatically.

If you’re building a Node.js package that you want to distribute over `npm` things change radically, and you must have a set of properties that will help other people use it. We’ll see more about this later on.

This is another package.json:

```
{  "name": "test-project"}
```

It defines a `name` property, which tells the name of the app, or package, that’s contained in the same folder where this file lives.

Here’s a much more complex example, which I extracted this from a sample Vue.js application:

```
{  "name": "test-project",  "version": "1.0.0",  "description": "A Vue.js project",  "main": "src/main.js",  "private": true,  "scripts": {    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",    "start": "npm run dev",    "unit": "jest --config test/unit/jest.conf.js --coverage",    "test": "npm run unit",    "lint": "eslint --ext .js,.vue src test/unit",    "build": "node build/build.js"  },  "dependencies": {    "vue": "^2.5.2"  },  "devDependencies": {    "autoprefixer": "^7.1.2",    "babel-core": "^6.22.1",    "babel-eslint": "^8.2.1",    "babel-helper-vue-jsx-merge-props": "^2.0.3",    "babel-jest": "^21.0.2",    "babel-loader": "^7.1.1",    "babel-plugin-dynamic-import-node": "^1.2.0",    "babel-plugin-syntax-jsx": "^6.18.0",    "babel-plugin-transform-es2015-modules-commonjs": "^6.26.0",    "babel-plugin-transform-runtime": "^6.22.0",    "babel-plugin-transform-vue-jsx": "^3.5.0",    "babel-preset-env": "^1.3.2",    "babel-preset-stage-2": "^6.22.0",    "chalk": "^2.0.1",    "copy-webpack-plugin": "^4.0.1",    "css-loader": "^0.28.0",    "eslint": "^4.15.0",    "eslint-config-airbnb-base": "^11.3.0",    "eslint-friendly-formatter": "^3.0.0",    "eslint-import-resolver-webpack": "^0.8.3",    "eslint-loader": "^1.7.1",    "eslint-plugin-import": "^2.7.0",    "eslint-plugin-vue": "^4.0.0",    "extract-text-webpack-plugin": "^3.0.0",    "file-loader": "^1.1.4",    "friendly-errors-webpack-plugin": "^1.6.1",    "html-webpack-plugin": "^2.30.1",    "jest": "^22.0.4",    "jest-serializer-vue": "^0.3.0",    "node-notifier": "^5.1.2",    "optimize-css-assets-webpack-plugin": "^3.2.0",    "ora": "^1.2.0",    "portfinder": "^1.0.13",    "postcss-import": "^11.0.0",    "postcss-loader": "^2.0.8",    "postcss-url": "^7.2.1",    "rimraf": "^2.6.0",    "semver": "^5.3.0",    "shelljs": "^0.7.6",    "uglifyjs-webpack-plugin": "^1.1.1",    "url-loader": "^0.5.8",    "vue-jest": "^1.0.2",    "vue-loader": "^13.3.0",    "vue-style-loader": "^3.0.1",    "vue-template-compiler": "^2.5.2",    "webpack": "^3.6.0",    "webpack-bundle-analyzer": "^2.9.0",    "webpack-dev-server": "^2.9.1",    "webpack-merge": "^4.1.0"  },  "engines": {    "node": ">= 6.0.0",    "npm": ">= 3.0.0"  },  "browserslist": [    "> 1%",    "last 2 versions",    "not ie &lt;= 8"  ]}
```

there are **lots** of things going on here:

-   `name` sets the application/package name
-   `version` indicates the current version
-   `description` is a brief description of the app/package
-   `main` set the entry point for the application
-   `private` if set to `true` prevents the app/package to be accidentally published on `npm`
-   `scripts` defines a set of node scripts you can run
-   `dependencies` sets a list of `npm` packages installed as dependencies
-   `devDependencies` sets a list of `npm` packages installed as development dependencies
-   `engines` sets which versions of Node this package/app works on
-   `browserslist` is used to tell which browsers (and their versions) you want to support

All those properties are used by either `npm` or other tools that we can use.

#### Properties breakdown

This section describes the properties you can use in detail. I refer to “package” but the same thing applies to local applications which you do not use as packages.

Most of those properties are only used on the npm [website][82], other by scripts that interact with your code, like `npm` or others.

#### `name`

Sets the package name.

Example:

```
"name": "test-project"
```

The name must be less than 214 characters, must not have spaces, it can only contain lowercase letters, hyphens (`-`) or underscores (`_`).

This is because when a package is published on `npm`, it gets its own URL based on this property.

If you published this package publicly on GitHub, a good value for this property is the GitHub repository name.

#### `author`

Lists the package author name

Example:

```plain
{  "author": "Flavio Copes <flavio@flaviocopes.com> (https://flaviocopes.com)"}
```

Can also be used with this format:

```
{  "author": {    "name": "Flavio Copes",    "email": "flavio@flaviocopes.com",    "url": "https://flaviocopes.com"  }}
```

#### `contributors`

As well as the author, the project can have one or more contributors. This property is an array that lists them.

Example:

```
{  "contributors": [    "Flavio Copes <flavio@flaviocopes.com> (https://flaviocopes.com)"  ]}
```

Can also be used with this format:

```
{  "contributors": [    {      "name": "Flavio Copes",      "email": "flavio@flaviocopes.com",      "url": "https://flaviocopes.com"    }  ]}
```

#### `bugs`

Links to the package issue tracker, most likely a GitHub issues page

Example:

```plain
{  "bugs": "https://github.com/flaviocopes/package/issues"}
```

#### `homepage`

Sets the package homepage

Example:

```
{  "homepage": "https://flaviocopes.com/package"}
```

#### `version`

Indicates the current version of the package.

Example:

```plain
"version": "1.0.0"
```

This property follows the semantic versioning (semver) notation for versions, which means the version is always expressed with 3 numbers: `x.x.x`.

The first number is the major version, the second the minor version and the third is the patch version.

There is a meaning in these numbers: a release that only fixes bugs is a patch release, a release that introduces backward-compatible changes is a minor release, a major release can have breaking changes.

#### `license`

Indicates the license of the package.

Example:

```
"license": "MIT"
```

#### `keywords`

This property contains an array of keywords that associate with what your package does.

Example:

```plain
"keywords": [  "email",  "machine learning",  "ai"]
```

This helps people find your package when navigating similar packages, or when browsing the npm website.

#### `description`

This property contains a brief description of the package.

Example:

```plain
"description": "A package to work with strings"
```

This is especially useful if you decide to publish your package to `npm` so that people can find out what the package is about.

#### `repository`

This property specifies where this package repository is located.

Example:

```plain
"repository": "github:flaviocopes/testing",
```

Notice the `github` prefix. There are other popular services baked in:

```plain
"repository": "gitlab:flaviocopes/testing",
```

```
"repository": "bitbucket:flaviocopes/testing",
```

You can explicitly set the version control system:

```plain
"repository": {  "type": "git",  "url": "https://github.com/flaviocopes/testing.git"}
```

You can use different version control systems:

```
"repository": {  "type": "svn",  "url": "..."}
```

#### `main`

Sets the entry point for the package.

When you import this package in an application, that’s where the application will search for the module exports.

Example:

```
"main": "src/main.js"
```

#### `private`

if set to `true` prevents the app/package to be accidentally published on `npm`

Example:

```
"private": true
```

#### `scripts`

Defines a set of node scripts you can run

Example:

```
"scripts": {  "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",  "start": "npm run dev",  "unit": "jest --config test/unit/jest.conf.js --coverage",  "test": "npm run unit",  "lint": "eslint --ext .js,.vue src test/unit",  "build": "node build/build.js"}
```

These scripts are command line applications. You can run them by calling `npm run XXXX`or `yarn XXXX`, where `XXXX` is the command name.

Example:  
`npm run dev`

You can use any name you want for a command, and scripts can do literally anything you want.

#### `dependencies`

Sets a list of `npm` packages installed as dependencies.

When you install a package using npm or yarn:

```
npm install <PACKAGENAME>yarn add <PACKAGENAME>
```

that package is automatically inserted in this list.

Example:

```
"dependencies": {  "vue": "^2.5.2"}
```

#### `devDependencies`

Sets a list of `npm` packages installed as development dependencies.

They differ from `dependencies` because they are meant to be installed only on a development machine, not needed to run the code in production.

When you install a package using `npm` or `yarn`:

```
npm install --dev <PACKAGENAME>yarn add --dev <PACKAGENAME>
```

that package is automatically inserted in this list.

Example:

```plain
"devDependencies": {  "autoprefixer": "^7.1.2",  "babel-core": "^6.22.1"}
```

#### `engines`

Sets which versions of Node.js and other commands this package/app works on.

Example:

```plain
"engines": {  "node": ">= 6.0.0",  "npm": ">= 3.0.0",  "yarn": "^0.13.0"}
```

#### `browserslist`

Is used to tell which browsers (and their versions) you want to support. It’s referenced by Babel, Autoprefixer, and other tools, to only add the polyfills and fallbacks needed to the browsers you target.

Example:

```
"browserslist": [  "> 1%",  "last 2 versions",  "not ie <= 8"]
```

This configuration means you want to support the last 2 major versions of all browsers with at least 1% of usage (from the [CanIUse.com][83] stats), except IE8 and lower ([see more][84]on browserslist).

#### Command-specific properties

The `package.json` file can also host command-specific configuration, for example for Babel, ESLint, and more.

Each has a specific property, like `eslintConfig`, `babel` and others. Those are command-specific, and you can find how to use those in the respective command/project documentation.

#### Package versions

You have seen in the description above version numbers like these: `~3.0.0` or `^0.13.0`. What do they mean, and which other version specifiers can you use?

That symbol specifies which updates you package accepts, from that dependency.

Given that using semver (semantic versioning) all versions have 3 digits, the first being the major release, the second the minor release and the third is the patch release, you have these rules:

-   `~`: if you write `~0.13.0`, you want to only update patch releases: `0.13.1` is ok, but `0.14.0` is not.
-   `^`: if you write `^0.13.0`, you want to update patch and minor releases: `0.13.1`, `0.14.0`and so on.
-   `*`: if you write `*`, that means you accept all updates, including major version upgrades.
-   `&`gt;: you accept any version higher than the one you specify
-   `&g`t;=: you accept any version equal to or higher than the one you specify
-   `&l`t;=: you accept any version equal or lower to the one you specify
-   `&`lt;: you accept any version lower to the one you specify

There are other rules, too:

-   no symbol: you accept only that specific version you specify
-   `latest`: you want to use the latest version available

and you can combine most of the above in ranges, like this: `1.0.0 || >=1.1.0 <`;1.2.0, to either use 1.0.0 or one release from 1.1.0 up, but lower than 1.2.0.

### The package-lock.json file

The package-lock.json file is automatically generated when installing node packages.

In version 5, npm introduced the `package-lock.json` file.

What’s that? You probably know about the `package.json` file, which is much more common and has been around for much longer.

The goal of the file is to keep track of the exact version of every package that is installed so that a product is 100% reproducible in the same way even if packages are updated by their maintainers.

This solves a very specific problem that `package.json` left unsolved. In package.json you can set which versions you want to upgrade to (patch or minor), using the **semver**notation, for example:

-   if you write `~0.13.0`, you want to only update patch releases: `0.13.1` is ok, but `0.14.0`is not.
-   if you write `^0.13.0`, you want to update patch and minor releases: `0.13.1`, `0.14.0`and so on.
-   if you write `0.13.0`, that is the exact version that will be used, always

You don’t commit to Git your node_modules folder, which is generally huge, and when you try to replicate the project on another machine by using the `npm install` command, if you specified the `~` syntax and a patch release of a package has been released, that one is going to be installed. Same for `^` and minor releases.

If you specify exact versions, like `0.13.0` in the example, you are not affected by this problem.

It could be you, or another person trying to initialize the project on the other side of the world by running `npm install`.

So your original project and the newly initialized project are actually different. Even if a patch or minor release should not introduce breaking changes, we all know bugs can (and so, they will) slide in.

The `package-lock.json` sets your currently installed version of each package **in stone**, and `npm` will use those exact versions when running `npm install`.

This concept is not new, and other programming languages package managers (like Composer in PHP) use a similar system for years.

The `package-lock.json` file needs to be committed to your Git repository, so it can be fetched by other people, if the project is public or you have collaborators, or if you use Git as a source for deployments.

The dependencies versions will be updated in the `package-lock.json` file when you run `npm update`.

#### An example

This is an example structure of a `package-lock.json` file we get when we run `npm install cowsay` in an empty folder:

```
{  "requires": true,  "lockfileVersion": 1,  "dependencies": {    "ansi-regex": {      "version": "3.0.0",      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",      "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg="    },    "cowsay": {      "version": "1.3.1",      "resolved": "https://registry.npmjs.org/cowsay/-/cowsay-1.3.1.tgz",      "integrity": "sha512-3PVFe6FePVtPj1HTeLin9v8WyLl+VmM1l1H/5P+BTTDkMAjufp+0F9eLjzRnOHzVAYeIYFF5po5NjRrgefnRMQ==",      "requires": {        "get-stdin": "^5.0.1",        "optimist": "~0.6.1",        "string-width": "~2.1.1",        "strip-eof": "^1.0.0"      }    },    "get-stdin": {      "version": "5.0.1",      "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-5.0.1.tgz",      "integrity": "sha1-Ei4WFZHiH/TFJTAwVpPyDmOTo5g="    },    "is-fullwidth-code-point": {      "version": "2.0.0",      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",      "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="    },    "minimist": {      "version": "0.0.10",      "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.10.tgz",      "integrity": "sha1-3j+YVD2/lggr5IrRoMfNqDYwHc8="    },    "optimist": {      "version": "0.6.1",      "resolved": "https://registry.npmjs.org/optimist/-/optimist-0.6.1.tgz",      "integrity": "sha1-2j6nRob6IaGaERwybpDrFaAZZoY=",
```

```
      "requires": {        "minimist": "~0.0.1",        "wordwrap": "~0.0.2"      }    },    "string-width": {      "version": "2.1.1",      "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",      "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",      "requires": {        "is-fullwidth-code-point": "^2.0.0",        "strip-ansi": "^4.0.0"      }    },    "strip-ansi": {      "version": "4.0.0",      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",      "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",      "requires": {        "ansi-regex": "^3.0.0"      }    },    "strip-eof": {      "version": "1.0.0",      "resolved": "https://registry.npmjs.org/strip-eof/-/strip-eof-1.0.0.tgz",      "integrity": "sha1-u0P/VZim6wXYm1n80SnJgzE2Br8="    },    "wordwrap": {      "version": "0.0.3",      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-0.0.3.tgz",      "integrity": "sha1-o9XabNXAvAAI03I0u68b7WMFkQc="    }  }}
```

We installed `cowsay`, which depends on:

-   `get-stdin`
-   `optimist`
-   `string-width`
-   `strip-eof`

In turn, those packages require other packages, as we can see from the `requires`property that some have:

-   `ansi-regex`
-   `is-fullwidth-code-point`
-   `minimist`
-   `wordwrap`
-   `strip-eof`

They are added in alphabetical order into the file, and each one has a `version` field, a `resolved` field that points to the package location, and an `integrity` string that we can use to verify the package.

### Find the installed version of an npm package

To see the latest version of all the npm package installed, including their dependencies:

```
npm list
```

Example:

```plain
❯ npm list/Users/flavio/dev/node/cowsay└─┬ cowsay@1.3.1  ├── get-stdin@5.0.1  ├─┬ optimist@0.6.1  │ ├── minimist@0.0.10  │ └── wordwrap@0.0.3  ├─┬ string-width@2.1.1  │ ├── is-fullwidth-code-point@2.0.0  │ └─┬ strip-ansi@4.0.0  │   └── ansi-regex@3.0.0  └── strip-eof@1.0.0
```

You can also just open the `package-lock.json` file, but this involves some visual scanning.

`npm list -g` is the same, but for globally installed packages.

To get only your top-level packages (basically, the ones you told npm to install and you listed in the `package.json`), run `npm list --depth=0`:

```
❯ npm list --depth=0/Users/flavio/dev/node/cowsay└── cowsay@1.3.1
```

You can get the version of a specific package by specifying the name:

```plain
❯ npm list cowsay/Users/flavio/dev/node/cowsay└── cowsay@1.3.1
```

This also works for dependencies of packages you installed:

```
❯ npm list minimist/Users/flavio/dev/node/cowsay└─┬ cowsay@1.3.1  └─┬ optimist@0.6.1    └── minimist@0.0.10
```

If you want to see what’s the latest available version of the package on the npm repository, run `npm view [package_name] version`:

```plain
❯ npm view cowsay version
```

```
1.3.1
```

### Install an older version of an npm package

Installing an older version of an npm package might be useful to solve a compatibility problem.

You can install an old version of an npm package using the `@` syntax:

```plain
npm install <package>@<;version>
```

Example:

```plain
npm install cowsay
```

installs version 1.3.1 (at the time of writing).

Install version 1.2.0 with:

```
npm install cowsay@1.2.0
```

The same can be done with global packages:

```
npm install -g webpack@4.16.4
```

You might also be interested in listing all the previous version of a package. You can do it with `npm view <package> ve`rsions:

```
❯ npm view cowsay versions
```

```
[ '1.0.0',  '1.0.1',  '1.0.2',  '1.0.3',  '1.1.0',  '1.1.1',  '1.1.2',  '1.1.3',  '1.1.4',  '1.1.5',  '1.1.6',  '1.1.7',  '1.1.8',  '1.1.9',  '1.2.0',  '1.2.1',  '1.3.0',  '1.3.1' ]
```

### Update all the Node dependencies to their latest version

When you install a package using `npm install <packagena`me>, the latest available version of the package is downloaded and put i`n the node_m`odules folder, and a corresponding entry is added t`o the packag`e.jso`n and package-loc`k.json files that are present in your current folder.

npm calculates the dependencies and installs the latest available version of those as well.

Let’s say you install `[cowsay][85]`, a cool command line tool that lets you make a cow say **things**.

When you `npm install cowsay`, this entry is added to the `package.json` file:

```
{  "dependencies": {    "cowsay": "^1.3.1"  }}
```

and this is an extract of `package-lock.json`, where I removed the nested dependencies for clarity:

```
{  "requires": true,  "lockfileVersion": 1,  "dependencies": {    "cowsay": {      "version": "1.3.1",      "resolved": "https://registry.npmjs.org/cowsay/-/cowsay-1.3.1.tgz",      "integrity": "sha512-3PVFe6FePVtPj1HTeLin9v8WyLl+VmM1l1H/5P+BTTDkMAjufp+0F9eLjzRnOHzVAYeIYFF5po5NjRrgefnRMQ==",      "requires": {        "get-stdin": "^5.0.1",        "optimist": "~0.6.1",        "string-width": "~2.1.1",        "strip-eof": "^1.0.0"      }    }  }}
```

Now those 2 files tell us that we installed version `1.3.1` of cowsay, and our rule for updates is `^1.3.1`, which for the npm versioning rules (explained later on) means that npm can update to patch and minor releases: `0.13.1`, `0.14.0` and so on.

If there is a new minor or patch release and we type `npm update`, the installed version is updated, and the `package-lock.json` file diligently filled with the new version.

`package.json` remains unchanged.

To discover new releases of the packages, you run `npm outdated`.

Here’s the list of a few outdated packages in one repository I didn’t update for quite a while:

![](https://cdn-media-1.freecodecamp.org/images/dQXY78UwUHW2iHblpRRLd8YdM4Zvdyf-3ctc)

Some of those updates are major releases. Running `npm update` won’t update the version of those. Major releases are never updated in this way because they (by definition) introduce breaking changes, and `npm` want to save you trouble.

To update to a new major version all the packages, install the `npm-check-updates`package globally:

```
npm install -g npm-check-updates
```

then run it:

```plain
ncu -u
```

This will upgrade all the version hints in the `package.json` file, to `dependencies` and `devDependencies`, so npm can install the new major version.

You are now ready to run the update:

```
npm update
```

If you just downloaded the project without the `node_modules` dependencies and you want to install the shiny new versions first, just run

```plain
npm install
```

### Semantic Versioning using npm

Semantic Versioning is a convention used to provide a meaning to versions.

If there’s one great thing in Node.js packages, is that all agreed on using Semantic Versioning for their version numbering.

The Semantic Versioning concept is simple: all versions have 3 digits: `x.y.z`.

-   the first digit is the major version
-   the second digit is the minor version
-   the third digit is the patch version

When you make a new release, you don’t just up a number as you please, but you have rules:

-   you up the major version when you make incompatible API changes
-   you up the minor version when you add functionality in a backward-compatible manner
-   you up the patch version when you make backward-compatible bug fixes

The convention is adopted all across programming languages, and it is very important that every `npm` package adheres to it, because the whole system depends on that.

Why is that so important?

Because `npm` set some rules we can use in the `[package.json][86]` [file][87]to choose which versions it can update our packages to, when we run `npm update`.

The rules use those symbols:

-   `^`
-   `~`
-   `&`gt;
-   `&g`t;=
-   `&`lt;
-   `&l`t;=
-   `=`
-   `-`
-   `||`

Let’s see those rules in detail:

-   `^`: if you write `^0.13.0` when running `npm update` it can update to patch and minor releases: `0.13.1`, `0.14.0` and so on.
-   `~`: if you write `~0.13.0`, when running `npm update` it can update to patch releases: `0.13.1` is ok, but `0.14.0` is not.
-   `&`gt;: you accept any version higher than the one you specify
-   `&g`t;=: you accept any version equal to or higher than the one you specify
-   `&l`t;=: you accept any version equal or lower to the one you specify
-   `&`lt;: you accept any version lower to the one you specify
-   `=`: you accept that exact version
-   `-`: you accept a range of versions. Example: `2.1.0 - 2.6.2`
-   `||`: you combine sets. Example: `< 2.1 || &g`t; 2.6

You can combine some of those notations, for example use `1.0.0 || >=1.1.0 <`;1.2.0 to either use 1.0.0 or one release from 1.1.0 up, but lower than 1.2.0.

There are other rules, too:

-   no symbol: you accept only that specific version you specify (`1.2.1`)
-   `latest`: you want to use the latest version available

### Uninstalling npm packages locally or globally

To uninstall a package you have previously installed **locally** (using `npm install <package-na`me> i`n the node_m`odules folder), run:

```plain
npm uninstall <package-name>
```

Using the `-S` flag, or `--save`, this operation will also remove the reference in the `[package.json][88]` [file][89].

If the package was a development dependency, listed in the devDependencies of the `package.json` file, you must use the `-D` / `--save-dev` flag to remove it from the file:

```
npm uninstall -S <package-name>npm uninstall -D <package-name>
```

If the package is installed **globally**, you need to add the `-g` / `--global` flag:

```plain
npm uninstall -g <package-name>
```

Example:

```plain
npm uninstall -g webpack
```

and you can run this command from anywhere you want on your system because the folder where you currently are does not matter.

### npm global or local packages

When is a package best installed globally? And why?

The main difference between local and global packages is this:

-   **local packages** are installed in the directory where you run `npm install <package-na`me>, and they are put i`n the node_m`odules folder under this directory
-   **global packages** are all put in a single place in your system (exactly where depends on your setup), regardless of where you run `npm install -g <package-na`me>

In your code, they are both required in the same way:

```
require('package-name')
```

So when should you install in one way or another?

In general, all packages should be installed **locally**.

This makes sure you can have dozens of applications in your computer, all running a different version of each package if needed.

Updating a global package would make all your projects use the new release, and as you can imagine this might cause nightmares in terms of maintenance, as some packages might break compatibility with further dependencies, and so on.

All projects have their own local version of a package, even if this might appear like a waste of resources, it’s minimal compared to the possible negative consequences.

A package should be installed **globally** when it provides an executable command that you run from the shell (CLI), and it’s reused across projects.

You can also install executable commands locally and run them using [npx][90], but some packages are just better installed globally.

Great examples of popular global packages which you might know are:

-   `npm`
-   `create-react-app`
-   `vue-cli`
-   `grunt-cli`
-   `mocha`
-   `react-native-cli`
-   `gatsby-cli`
-   `forever`
-   `nodemon`

You probably have some packages installed globally already on your system. You can see them by running:

```plain
npm list -g --depth 0
```

on your command line.

### npm dependencies and devDependencies

When is a package a dependency, and when is it a development dependency?

When you install an npm package using `npm install <package-na`me>, you are installing it **as a depe**ndency.

The package is automatically listed in the package.json file, under the `dependencies` list (as of npm 5: before you had to manually specify `--save`).

When you add the `-D` flag, or `--save-dev`, you are installing it as a development dependency, which adds it to the `devDependencies` list.

**Development dependencies** are intended as development-only packages, that are unneeded in production. For example testing packages, webpack or Babel.

When you go **in production**, if you type `npm install` and the folder contains a `package.json` file, they are installed, as npm assumes this is a development deploy.

You need to set the `--production` flag (`npm install --production`) to avoid installing those development dependencies.

### The npx Node Package Runner

`npx` is a very cool way to run the Node.js codes, and provides many useful features.

In this section, I want to introduce a very powerful command that’s been available in **npm** starting version 5.2, released in July 2017: **npx**.

If you don’t want to install npm, you can install npx as a [standalone package][91].

`npx` lets you run code built with Node.js and published through the npm registry.

#### Easily run local commands

Node.js developers used to publish most of the executable commands as global packages, in order for them to be in the path and executable immediately.

This was a pain because you could not really install different versions of the same command.

Running `npx commandname` automatically finds the correct reference of the command inside the `node_modules` folder of a project, without needing to know the exact path, and without requiring the package to be installed globally and in the user’s path.

#### Installation-less command execution

There is another great feature of `npm`, which is allowing to run commands without first installing them.

This is pretty useful, mostly because:

1.  you don’t need to install anything
2.  you can run different versions of the same command, using the syntax `@version`

A typical demonstration of using `npx` is through the `cowsay` command. `cowsay` will print a cow saying what you wrote in the command. For example:

`cowsay "Hello"` will print

```
_______< Hello > -------        \   ^__^         \  (oo)\_______            (__)\       )\/\                ||----w |                ||     ||
```

Now, this if you have the `cowsay` command globally installed from npm previously, otherwise you’ll get an error when you try to run the command.

`npx` allows you to run that npm command without having it installed locally:

```
npx cowsay "Hello"
```

Now, this is a funny useless command. Other scenarios include:

-   running the `vue` CLI tool to create new applications and run them: `npx vue create my-vue-app`
-   creating a new React app using `create-react-app`: `npx create-react-app my-react-app`

and many more.

Once downloaded, the downloaded code will be wiped.

#### Run some code using a different Node.js version

Use the `@` to specify the version, and combine that with the `node` npm package:

```plain
npx node@6 -v #v6.14.3npx node@8 -v #v8.11.3
```

This helps to avoid tools like `nvm` or the other Node version management tools.

#### Run arbitrary code snippets directly from a URL

`npx` does not limit you to the packages published on the npm registry.

You can run code that sits in a [GitHub][92] gist, for example:

```
npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32
```

Of course, you need to be careful when running code that you do not control, as with great power comes great responsibility.

### The Event Loop

The Event Loop is one of the most important aspects to understand about JavaScript. This section explains the inner details of how JavaScript works with a single thread, and how it handles asynchronous functions.

I’ve programmed for years with JavaScript, yet I’ve never **fully** understood how things work under the hoods. It’s completely fine to not know this concept in detail. But as usual, it’s helpful to know how it works, and also you might just be a little curious at this point.

Your JavaScript code runs single threaded. There is just one thing happening at a time.

This is a limitation that’s actually very helpful, as it simplifies a lot of how you program without worrying about concurrency issues.

You just need to pay attention to how you write your code and avoid anything that could block the thread, like synchronous network calls or infinite [loops][93].

Generally, in most browsers there is an event loop for every browser tab, to make every process isolated and avoid a web page with infinite loops or heavy processing to block your entire browser.

The environment manages multiple concurrent event loops, to handle API calls for example. [Web Workers][94] run in their own event loop as well.

You mainly need to be concerned that **your code** will run on a single event loop, and write code with this thing in mind to avoid blocking it.

#### Blocking the event loop

Any JavaScript code that takes too long to return back control to the event loop will block the execution of any JavaScript code in the page — even block the UI thread — and the user cannot click around, scroll the page, and so on.

Almost all the I/O primitives in JavaScript are non-blocking. Network requests, Node.js file system operations, and so on. Being blocking is the exception, and this is why JavaScript is based so much on callbacks, and more recently on promises and async/await.

#### The call stack

The call stack is a LIFO queue (Last In, First Out).

The event loop continuously checks the **call stack** to see if there’s any function that needs to run.

While doing so, it adds any function call it finds to the call stack and executes each one in order.

You know the error stack trace you might be familiar with, in the debugger or in the browser console?

The browser looks up the function names in the call stack to inform you which function originates the current call:

![](https://cdn-media-1.freecodecamp.org/images/SFxrWa7lVtAfUsjnjoMqgCGdG4bK0jDvi-11)

#### A simple event loop explanation

Let’s pick an example:

```
const bar = () => console.log('bar')
```

```
const baz = () => console.log('baz')
```

```
const foo = () => {  console.log('foo')  bar()  baz()}
```

```
foo()
```

This code prints:

```
foobarbaz
```

as expected.

When this code runs, first `foo()` is called. Inside `foo()` we first call `bar()`, then we call `baz()`.

At this point the call stack looks like this:

![](https://cdn-media-1.freecodecamp.org/images/bFPM-QZwRcB6APbq6sSJpyQMZHWRACvJzAly)

The event loop on every iteration looks if there’s something in the call stack, and executes it:

![](https://cdn-media-1.freecodecamp.org/images/T3jPPIkLHGvy0QXBrUz8cb3VM0bVVez-joQ4)

until the call stack is empty.

#### Queuing function execution

The above example looks normal, there’s nothing special about it: JavaScript finds things to execute, runs them in order.

Let’s see how to defer a function until the stack is clear.

The use case of `setTimeout(() => {}),` 0) is to call a function, but execute it once every other function in the code has executed.

Take this example:

```
const bar = () => console.log('bar')
```

```
const baz = () => console.log('baz')
```

```
const foo = () => {  console.log('foo')  setTimeout(bar, 0)  baz()}
```

```
foo()
```

This code prints, maybe surprisingly:

```
foobazbar
```

When this code runs, first `foo()` is called. Inside `foo()` we first call `setTimeout`, passing `bar` as an argument, and we instruct it to run immediately as fast as it can, passing `0` as the timer. Then we call `baz()`.

At this point the call stack looks like this:

![](https://cdn-media-1.freecodecamp.org/images/iUnlUVBLW8ozpE2ewbJswyp9tOP5OzPUXn0-)

Here is the execution order for all the functions in our program:

![](https://cdn-media-1.freecodecamp.org/images/MsT6C2UAZJaEEm6SmU266PO-V4b-DY0wlMqb)

Why is this happening?

#### The Message Queue

When `setTimeout()` is called, the Browser or Node.js starts the timer. Once the timer expires, in this case immediately as we put `0` as the timeout, the callback function is put in the **Message Queue**.

The Message Queue is also where user-initiated events like click and keyboard events or fetch responses are queued before your code has the opportunity to react to them. Or also DOM events like `onLoad`.

The loop gives priority to the call stack. It first processes everything it finds in the call stack, and once there’s nothing in there, it goes to pick up things in the message queue.

We don’t have to wait for functions like `setTimeout`, fetch or other things to do their own work, because they are provided by the browser, and they live on their own threads. For example, if you set the `setTimeout` timeout to 2 seconds, you don’t have to wait 2 seconds - the wait happens elsewhere.

#### ES6 Job Queue

ECMAScript 2015 introduced the concept of the Job Queue, which is used by Promises (also introduced in ES6/ES2015). It’s a way to execute the result of an async function as soon as possible, rather than being put at the end of the call stack.

Promises that resolve before the current function ends will be executed right after the current function.

I find nice the analogy of a rollercoaster ride at an amusement park: the message queue puts you back in queue with after all the other people in the queue, while the job queue is the fastpass ticket that lets you take another ride right after you finished the previous one.

Example:

```
const bar = () => console.log('bar')
```

```plain
const baz = () => console.log('baz')
```

```plain
const foo = () => {  console.log('foo')  setTimeout(bar, 0)  new Promise((resolve, reject) =>    resolve('should be right after baz, before bar')  ).then(resolve => console.log(resolve))  baz()}
```

```
foo()
```

This prints:

```plain
foobazshould be right after foo, before barbar
```

That’s a big difference between Promises (and `async/await`, which is built on promises) and plain old asynchronous functions through `setTimeout()` or other platform APIs.

### Understanding process.nextTick()

As you try to understand the Node.js event loop, one important part of it is `process.nextTick()`. It interacts with the event loop in a special way.

Every time the event loop takes a full trip, we call it a tick.

When we pass a function to `process.nextTick()`, we instruct the engine to invoke this function at the end of the current operation, before the next event loop tick starts:

```plain
process.nextTick(() => {  //do something})
```

The event loop is busy processing the current function code.

When this operation ends, the JavaScript engine runs all the functions passed to `nextTick` calls during that operation.

It’s the way we can tell the JavaScript engine to process a function asynchronously (after the current function), but as soon as possible, not queue it.

Calling `setTimeout(() => {},` 0) will execute the function in the next tick, much later than when usi`ng nextTic`k().

Use `nextTick()` when you want to make sure that in the next event loop iteration that code is already executed.

### Understanding setImmediate()

When you want to execute some piece of code asynchronously, but as soon as possible, one option is to use the `setImmediate()` function provided by Node.js:

```
setImmediate(() => {  //run something})
```

Any function passed as the `setImmediate()` argument is a callback that’s executed in the next iteration of the event loop.

How is `setImmediate()` different from `setTimeout(() => {},` 0) (passing a 0ms timeout), and fr`om process.nextTic`k()?

A function passed to `process.nextTick()` is going to be executed on the current iteration of the event loop, after the current operation ends. This means it will always execute before `setTimeout()` and `setImmediate()`.

A `setTimeout()` callback with a 0ms delay is very similar to `setImmediate()`. The execution order will depend on various factors, but they will be both run in the next iteration of the event loop.

### Timers

When writing JavaScript code, you might want to delay the execution of a function. Learn how to use `setTimeout()`and `setInterval()` to schedule functions in the future.

#### `setTimeout()`

When writing JavaScript code, you might want to delay the execution of a function. This is the job of `setTimeout`.

You can specify a callback function to execute later, and a value expressing how much later you want it to run, in milliseconds:

```
setTimeout(() => {  // runs after 2 seconds}, 2000)
```

```
setTimeout(() => {  // runs after 50 milliseconds}, 50)
```

This syntax defines a new function. You can call whatever other function you want in there, or you can pass an existing function name, and a set of parameters:

```
const myFunction = (firstParam, secondParam) => {  // do something}
```

```
// runs after 2 secondssetTimeout(myFunction, 2000, firstParam, secondParam)
```

`setTimeout()` returns the timer id. This is generally not used, but you can store this id, and clear it if you want to delete this scheduled function execution:

```
const id = setTimeout(() => {  // should run after 2 seconds}, 2000)
```

```plain
// I changed my mindclearTimeout(id)
```

#### Zero delay

If you specify the timeout delay to `0`, the callback function will be executed as soon as possible, but after the current function execution:

```
setTimeout(() => {  console.log('after ')}, 0)
```

```plain
console.log(' before ')
```

will print `before after`.

This is especially useful to avoid blocking the CPU on intensive tasks and let other functions be executed while performing a heavy calculation, by queuing functions in the scheduler.

Some browsers (IE and Edge) implement a `setImmediate()` method that does this same exact functionality, but it’s not standard and [unavailable on other browsers][95]. But it’s a standard function in Node.js.

#### `setInterval()`

`setInterval()` is a function similar to `setTimeout()` with a difference. Instead of running the callback function once, it will run it forever, at the specific time interval you specify (in milliseconds):

```plain
setInterval(() => {  // runs every 2 seconds}, 2000)
```

The function above runs every 2 seconds unless you tell it to stop, using `clearInterval`, passing it the interval id that `setInterval` returned:

```
const id = setInterval(() => {  // runs every 2 seconds}, 2000)
```

```
clearInterval(id)
```

It’s common to call `clearInterval` inside the `setInterval` callback function, to let it auto-determine if it should run again or stop. For example this code runs something unless `App.somethingIWait` has the value `arrived`:

```
const interval = setInterval(function() {  if (App.somethingIWait === 'arrived') {    clearInterval(interval)
```

```plain
    // otherwise do things  }}, 100)
```

#### Recursive setTimeout

`setInterval` starts a function every `n` milliseconds, without any consideration about when a function finished its execution.

If a function takes always the same amount of time, it’s all fine:

![](https://cdn-media-1.freecodecamp.org/images/eyf875I-cxYqAgNDSeh7CeLg4RXdJIgJphEw)

Maybe the function takes different execution times, depending on network conditions for example:

![](https://cdn-media-1.freecodecamp.org/images/ge2DPdTuZwHnJIyUH9VSLok1J5WHPOlc1DML)

And maybe one long execution overlaps the next one:

![](https://cdn-media-1.freecodecamp.org/images/I9kJc6l-BIT850OGlNDJre80RcsLp7N4amvy)

To avoid this, you can schedule a recursive setTimeout to be called when the callback function finishes:

```
const myFunction = () => {  // do something
```

```
  setTimeout(myFunction, 1000)}
```

```
setTimeout(  myFunction()}, 1000)
```

to achieve this scenario:

![](https://cdn-media-1.freecodecamp.org/images/B2kod2dFuR5U1uwaaW9SGiC1zX5gIUEaiJ8A)

`setTimeout` and `setInterval` are also available in Node.js, through the [Timers module][96].

Node.js also provides `setImmediate()`, which is equivalent to using `setTimeout(() => {},` 0), mostly used to work with the Node.js Event Loop.

### Asynchronous Programming and Callbacks

JavaScript is synchronous by default, and is single threaded. This means that code cannot create new threads and run in parallel.

#### Asynchronicity in Programming Languages

Computers are asynchronous by design.

Asynchronous means that things can happen independently of the main program flow.

In the current consumer computers, every program runs for a specific time slot, and then it stops its execution to let another program continue its execution. This thing runs in a cycle so fast that’s impossible to notice, and we think our computers run many programs simultaneously, but this is an illusion (except on multiprocessor machines).

Programs internally use **interrupts**, a signal that’s emitted to the processor to gain the attention of the system.

I won’t go into the internals of this, but just keep in mind that it’s normal for programs to be asynchronous, and halt their execution until they need attention, and the computer can execute other things in the meantime. When a program is waiting for a response from the network, it cannot halt the processor until the request finishes.

Normally, programming languages are synchronous, and some provide a way to manage asynchronicity, in the language or through libraries. C, Java, C#, PHP, Go, Ruby, Swift, Python, they are all synchronous by default. Some of them handle asynchronicity by using threads, spawning a new process.

#### JavaScript

JavaScript is **synchronous** by default and is single threaded. This means that code cannot create new threads and run in parallel.

Lines of code are executed in series, one after another.

For example:

```
const a = 1const b = 2const c = a * bconsole.log(c)doSomething()
```

But JavaScript was born inside the browser. Its main job, in the beginning, was to respond to user actions like `onClick`, `onMouseOver`, `onChange`, `onSubmit` and so on. How could it do this with a synchronous programming model?

The answer was in its environment. The **browser** provides a way to do it by providing a set of APIs that can handle this kind of functionality.

More recently, Node.js introduced a non-blocking I/O environment to extend this concept to file access, network calls and so on.

#### Callbacks

You can’t know when a user is going to click a button, so what you do is **define an event handler for the click event**.

This event handler accepts a function, which will be called when the event is triggered:

```plain
document.getElementById('button').addEventListener('click', () => {  //item clicked})
```

This is the so-called **callback**.

A callback is a simple function that’s passed as a value to another function, and will only be executed when the event happens. We can do this because JavaScript has first-class functions, which can be assigned to variables and passed around to other functions (called **higher-order functions**)

It’s common to wrap all your client code in a `load` event listener on the `window` object, which runs the callback function only when the page is ready:

```
window.addEventListener('load', () => {  //window loaded  //do what you want})
```

Callbacks are used everywhere, not just in DOM events.

One common example is by using timers:

```
setTimeout(() => {  // runs after 2 seconds}, 2000)
```

[XHR requests][97] also accept a callback, in this example by assigning a function to a property that will be called when a particular event occurs (in this case, the state of the request changes):

```
const xhr = new XMLHttpRequest()xhr.onreadystatechange = () => {  if (xhr.readyState === 4) {    xhr.status === 200 ? console.log(xhr.responseText) : console.error('error')  }}xhr.open('GET', 'https://yoursite.com')xhr.send()
```

#### Handling errors in callbacks

How do you handle errors with callbacks? One very common strategy is to use what Node.js adopted: the first parameter in any callback function is the error object — error-first callbacks.

If there is no error, the object is `null`. If there is an error, it contains some description of the error and other information.

```plain
fs.readFile('/file.json', (err, data) => {  if (err !== null) {    //handle error    console.log(err)    return  }
```

```plain
  //no errors, process data  console.log(data)})
```

#### The problem with callbacks

Callbacks are great for simple cases!

However, every callback adds a level of nesting. When you have lots of callbacks, the code starts to be complicated very quickly:

```plain
window.addEventListener('load', () => {  document.getElementById('button').addEventListener('click', () => {    setTimeout(() => {      items.forEach(item => {        //your code here      })    }, 2000)  })})
```

This is just a simple 4-levels code, but I’ve seen much more levels of nesting and it’s not fun.

How do we solve this?

#### Alternatives to callbacks

Starting with ES6, JavaScript introduced several features that help us with asynchronous code that do not involve using callbacks:

-   Promises (ES6)
-   Async/Await (ES8)

### Promises

Promises are one way to deal with asynchronous code in JavaScript, without writing too many callbacks in your code.

#### Introduction to promises

A promise is commonly defined as **a proxy for a value that will eventually become available**.

Although being around for years, they have been standardized and introduced in ES2015, and now they have been superseded in ES2017 by async functions.

**Async functions** use the promises API as their building block, so understanding them is fundamental even if in newer code you’ll likely use async functions instead of promises.

#### How promises work, in brief

Once a promise has been called, it will start in **pending state**. This means that the caller function continues the execution, while it waits for the promise to do its own processing, and give the caller function some feedback.

At this point, the caller function waits for it to either return the promise in a **resolved state**, or in a **rejected state**, but as you know JavaScript is asynchronous — so the function continues its execution while the promise does it work.

#### Which JS API use promises?

In addition to your own code and libraries code, promises are used by standard modern Web APIs such as:

-   **_the Battery API_**
-   the [Fetch API][98]
-   [Service Workers][99]

It’s unlikely that in modern JavaScript you’ll find yourself **not** using promises, so let’s start diving right into them.

#### Creating a promise

The Promise API exposes a Promise constructor, which you initialize using `new Promise()`:

```
let done = true
```

```plain
const isItDoneYet = new Promise(  (resolve, reject) => {    if (done) {      const workDone = 'Here is the thing I built'      resolve(workDone)    } else {      const why = 'Still working on something else'      reject(why)    }  })
```

As you can see the promise checks the `done` global constant, and if that’s true, we return a resolved promise, otherwise a rejected promise.

Using `resolve` and `reject` we can communicate back a value, in the above case we just return a string, but it could be an object as well.

#### Consuming a promise

In the last section, we introduced how a promise is created.

Now let’s see how the promise can be **consumed** or used:

```plain
const isItDoneYet = new Promise(  //...)
```

```
const checkIfItsDone = () => {  isItDoneYet    .then((ok) => {      console.log(ok)    })    .catch((err) => {      console.error(err)    })}
```

Running `checkIfItsDone()` will execute the `isItDoneYet()` promise and will wait for it to resolve, using the `then` callback, and if there is an error, it will handle it in the `catch`callback.

#### Chaining promises

A promise can be returned to another promise, creating a chain of promises.

A great example of chaining promises is given by the [Fetch API][100], a layer on top of the `XMLHttpRequest` API, which we can use to get a resource and queue a chain of promises to execute when the resource is fetched.

The Fetch API is a promise-based mechanism, and calling `fetch()` is equivalent to defining our own promise using `new Promise()`.

#### Example of chaining promises

```plain
const status = (response) => {  if (response.status >= 200 && response.status < 300) {    return Promise.resolve(response)  }  return Promise.reject(new Error(response.statusText))}
```

```plain
const json = (response) => response.json()
```

```plain
fetch('/todos.json')  .then(status)  .then(json)  .then((data) => { console.log('Request succeeded with JSON response', data) })  .catch((error) => { console.log('Request failed', error) })
```

In this example, we call `fetch()` to get a list of TODO items from the `todos.json` file found in the domain root, and we create a chain of promises.

Running `fetch()` returns a [response][101], which has many properties, and within those we reference:

-   `status`, a numeric value representing the HTTP status code
-   `statusText`, a status message, which is `OK` if the request succeeded

`response` also has a `json()` method, which returns a promise that will resolve with the content of the body processed and transformed into JSON.

So given those premises, this is what happens: the first promise in the chain is a function that we defined, called `status()`, that checks the response status and if it’s not a success response (between 200 and 299), it rejects the promise.

This operation will cause the promise chain to skip all the chained promises listed and will skip directly to the `catch()` statement at the bottom, logging the `Request failed`text along with the error message.

If that succeeds instead, it calls the json() function we defined. Since the previous promise, when successful, returned the `response` object, we get it as an input to the second promise.

In this case, we return the data JSON processed, so the third promise receives the JSON directly:

```plain
.then((data) => {  console.log('Request succeeded with JSON response', data)})
```

and we simply log it to the console.

#### Handling errors

In the example, in the previous section, we had a `catch` that was appended to the chain of promises.

When anything in the chain of promises fails and raises an error or rejects the promise, the control goes to the nearest `catch()` statement down the chain.

```
new Promise((resolve, reject) => {  throw new Error('Error')})  .catch((err) => { console.error(err) })
```

```
// or
```

```
new Promise((resolve, reject) => {  reject('Error')})  .catch((err) => { console.error(err) })
```

#### Cascading errors

If inside the `catch()` you raise an error, you can append a second `catch()` to handle it, and so on.

```plain
new Promise((resolve, reject) => {  throw new Error('Error')})  .catch((err) => { throw new Error('Error') })  .catch((err) => { console.error(err) })
```

### Orchestrating promises

#### `Promise.all()`

If you need to synchronize different promises, `Promise.all()` helps you define a list of promises, and execute something when they are all resolved.

Example:

```
const f1 = fetch('/something.json')const f2 = fetch('/something2.json')
```

```plain
Promise.all([f1, f2]).then((res) => {    console.log('Array of results', res)}).catch((err) => {  console.error(err)})
```

The [ES2015 destructuring assignment][102] syntax allows you to also do:

```
Promise.all([f1, f2]).then(([res1, res2]) => {    console.log('Results', res1, res2)})
```

You are not limited to using `fetch` of course, **any promise is good to go**.

#### `Promise.race()`

`Promise.race()` runs when the first of the promises you pass to it resolves, and it runs the attached callback just once, with the result of the first promise resolved.

Example:

```plain
const first = new Promise((resolve, reject) => {    setTimeout(resolve, 500, 'first')})const second = new Promise((resolve, reject) => {    setTimeout(resolve, 100, 'second')})
```

```
Promise.race([first, second]).then((result) => {  console.log(result) // second})
```

#### Common error, Uncaught TypeError: undefined is not a promise

If you get the `Uncaught TypeError: undefined is not a promise` error in the console, make sure you use `new Promise()` instead of just `Promise()`.

### Async and Await

Discover the modern approach to asynchronous functions in JavaScript.

JavaScript evolved in a very short time from callbacks to promises (ES2015), and since ES2017 asynchronous JavaScript is even simpler with the async/await syntax.

Async functions are a combination of promises and generators, and basically, they are a higher level abstraction over promises. Let me repeat: `async/await` is built on promises.

#### Why were async/await introduced?

They reduce the boilerplate around promises, and the “don’t break the chain” limitation of chaining promises.

When Promises were introduced in ES2015, they were meant to solve a problem with asynchronous code, and they did, but over the 2 years that separated ES2015 and ES2017, it was clear that promises could not be the final solution.

Promises were introduced to solve the famous callback hell problem, but they introduced complexity on their own, and syntax complexity.

They were good primitives around which a better syntax could be exposed to the developers, so when the time was right we got **async functions**.

They make the code look like it’s synchronous, but it’s asynchronous and non-blocking behind the scenes.

#### How it works

An `async` function returns a promise, like in this example:

```
const doSomethingAsync = () => {    return new Promise((resolve) => {        setTimeout(() => resolve('I did something'), 3000)    })}
```

When you want to call this function you prepend `await`, and the calling code will stop**until the promise is resolved or rejected**. One caveat: the client function must be defined as `async`.

Here’s an example:

```plain
const doSomething = async () => {    console.log(await doSomethingAsync())}
```

#### A quick example

This is a simple example of `async/await` used to run a function asynchronously:

```plain
const doSomethingAsync = () => {    return new Promise((resolve) => {        setTimeout(() => resolve('I did something'), 3000)    })}
```

```plain
const doSomething = async () => {    console.log(await doSomethingAsync())}
```

```plain
console.log('Before')doSomething()console.log('After')
```

The above code will print the following to the browser console:

```
BeforeAfterI did something //after 3s
```

#### Promise all the things

Prepending the `async` keyword to any function means that the function will return a promise.

Even if it’s not doing so explicitly, it will internally make it return a promise.

This is why this code is valid:

```
const aFunction = async () => {  return 'test'}
```

```plain
aFunction().then(alert) // This will alert 'test'
```

and it’s the same as:

```
const aFunction = async () => {  return Promise.resolve('test')}
```

```
aFunction().then(alert) // This will alert 'test'
```

#### The code is much simpler to read

As you can see in the example above, our code looks very simple. Compare it to code using plain promises, with chaining and callback functions.

And this is a very simple example, the major benefits will arise when the code is much more complex.

For example, here’s how you would get a JSON resource and parse it, using promises:

```
const getFirstUserData = () => {  return fetch('/users.json') // get users list    .then(response => response.json()) // parse JSON    .then(users => users[0]) // pick first user    .then(user => fetch(`/users/${user.name}`)) // get user data    .then(userResponse => response.json()) // parse JSON}
```

```
getFirstUserData()
```

And here is the same functionality provided using `await/async`:

```
const getFirstUserData = async () => {  const response = await fetch('/users.json') // get users list  const users = await response.json() // parse JSON  const user = users[0] // pick first user  const userResponse = await fetch(`/users/${user.name}`) // get user data  const userData = await user.json() // parse JSON  return userData}
```

```plain
getFirstUserData()
```

#### Multiple async functions in series

`async` functions can be chained very easily, and the syntax is much more readable than with plain promises:

```
const promiseToDoSomething = () => {    return new Promise(resolve => {        setTimeout(() => resolve('I did something'), 10000)    })}
```

```plain
const watchOverSomeoneDoingSomething = async () => {    const something = await promiseToDoSomething()    return something + ' and I watched'}
```

```plain
const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {    const something = await watchOverSomeoneDoingSomething()    return something + ' and I watched as well'}
```

```
watchOverSomeoneWatchingSomeoneDoingSomething().then((res) => {    console.log(res)})
```

Will print:

```
I did something and I watched and I watched as well
```

#### Easier debugging

Debugging promises is hard because the debugger will not step over asynchronous code.

`async/await` makes this very easy because to the compiler it’s just like synchronous code.

### The Node.js Event Emitter

You can work with custom events in Node.js.

If you worked with JavaScript in the browser, you know how much of the interaction of the user is handled through events: mouse clicks, keyboard button presses, reacting to mouse movements, and so on.

On the back-end side, Node.js offers us the option to build a similar system using the `events`[module][103].

This module, in particular, offers the `EventEmitter` class, which we’ll use to handle our events.

You initialize that using:

```
const eventEmitter = require('events').EventEmitter()
```

This object exposes, among many others, the `on` and `emit` methods.

-   `emit` is used to trigger an event
-   `on` is used to add a callback function that’s going to be executed when the event is triggered

For example, let’s create a `start` event, and as a matter of providing a sample, we react to that by just logging to the console:

```
eventEmitter.on('start', () => {  console.log('started')})
```

When we run:

```
eventEmitter.emit('start')
```

The event handler function is triggered, and we get the console log.

You can pass arguments to the event handler by passing them as additional arguments to `emit()`:

```
eventEmitter.on('start', (number) => {  console.log(`started ${number}`)})
```

```
eventEmitter.emit('start', 23)
```

Multiple arguments:

```
eventEmitter.on('start', (start, end) => {  console.log(`started from ${start} to ${end}`)})
```

```
eventEmitter.emit('start', 1, 100)
```

The EventEmitter object also exposes several other methods to interact with events, like:

-   `once()`: add a one-time listener
-   `removeListener()` / `off()`: remove an event listener from an event
-   `removeAllListeners()`: remove all listeners for an event

### How HTTP requests work

What happens when you type an URL in the browser, from start to finish?

This section describes how browsers perform page requests using the HTTP/1.1 protocol.

If you ever did an interview, you might have been asked: “What happens when you type something into the Google search box and press enter?”.

It’s one of the most popular questions you get asked. People just want to see if you can explain some rather basic concepts and if you have any clue how the internet actually works.

In this section, I’ll analyze what happens when you type an URL in the address bar of your browser and press enter.

It’s a very interesting topic to dissect in this handbook, as it touches many technologies I can dive into in separate articles.

This is tech that is very rarely changed, and powers one the most complex and wide ecosystems ever built by humans.

### The HTTP protocol

I analyze URL requests only.

Modern browsers have the capability of knowing if the thing you wrote in the address bar is an actual URL or a search term, and they will use the default search engine if it’s not a valid URL.

I assume you type an actual URL.

When you enter the URL and press enter, the browser first builds the full URL.

If you just entered a domain, like `flaviocopes.com`, the browser by default will prepend `HTTP://` to it, defaulting to the HTTP protocol.

#### Things relate to macOS / Linux

Just FYI. Windows might do some things slightly differently.

#### DNS Lookup phase

The browser starts the DNS lookup to get the server IP address.

The domain name is a handy shortcut for us humans, but the internet is organized in such a way that computers can look up the exact location of a server through its IP address, which is a set of numbers like `222.324.3.1` (IPv4).

First, it checks the DNS local cache, to see if the domain has already been resolved recently.

**_Chrome has a handy DNS cache visualizer you can see at this URL: chrome://net-internals/#dns (copy and paste it in the Chrome browser address bar)_**

If nothing is found there, the browser uses the DNS resolver, using the `gethostbyname`POSIX system call to retrieve the host information.

#### gethostbyname

`gethostbyname` first looks in the local hosts file, which on macOS or Linux is located in `/etc/hosts`, to see if the system provides the information locally.

If this does not give any information about the domain, the system makes a request to the DNS server.

The address of the DNS server is stored in the system preferences.

Those are 2 popular DNS servers:

-   `8.8.8.8`: the Google public DNS server
-   `1.1.1.1`: the CloudFlare DNS server

Most people use the DNS server provided by their internet provider.

The browser performs the DNS request using the UDP protocol.

TCP and UDP are two of the foundational protocols of computer networking. They sit at the same conceptual level, but TCP is connection-oriented, while UDP is a connectionless protocol, more lightweight, used to send messages with little overhead.

How the UDP request is performed is not in the scope of this handbook.

The DNS server might have the domain IP in the cache. It not, it will ask the **root DNS server**. That’s a system (composed of 13 actual servers, distributed across the planet) that drives the entire internet.

The DNS server does **not** know the address of each and every domain name on the planet.

What it knows is where the **top-level DNS resolvers** are.

A top-level domain is the domain extension: `.com`, `.it`, `.pizza` and so on.

Once the root DNS server receives the request, it forwards the request to that top-level domain (TLD) DNS server.

Say you are looking for `flaviocopes.com`. The root domain DNS server returns the IP of the .com TLD server.

Now our DNS resolver will cache the IP of that TLD server, so it does not have to ask the root DNS server again for it.

The TLD DNS server will have the IP addresses of the authoritative Name Servers for the domain we are looking for.

How? When you buy a domain, the domain registrar sends the appropriate TDL the name servers. When you update the name servers (for example, when you change the hosting provider), this information will be automatically updated by your domain registrar.

Those are the DNS servers of the hosting provider. They are usually more than 1, to serve as backup.

For example:

-   `ns1.dreamhost.com`
-   `ns2.dreamhost.com`
-   `ns3.dreamhost.com`

The DNS resolver starts with the first, and tries to ask the IP of the domain (with the subdomain, too) you are looking for.

That is the ultimate source of truth for the IP address.

Now that we have the IP address, we can go on in our journey.

#### TCP request handshaking

With the server IP address available, now the browser can initiate a TCP connection to that.

A TCP connection requires a bit of handshaking before it can be fully initialized and you can start sending data.

Once the connection is established, we can send the request

#### Sending the request

The request is a plain text document structured in a precise way determined by the communication protocol.

It’s composed of 3 parts:

-   the request line
-   the request header
-   the request body

#### The request line

The request line sets, on a single line:

-   the HTTP method
-   the resource location
-   the protocol version

Example:

```
GET / HTTP/1.1
```

#### The request header

The request header is a set of `field: value` pairs that set certain values.

There are 2 mandatory fields, one of which is `Host`, and the other is `Connection`, while all the other fields are optional:

```plain
Host: flaviocopes.comConnection: close
```

`Host` indicates the domain name which we want to target, while `Connection` is always set to `close` unless the connection must be kept open.

Some of the most used header fields are:

-   `Origin`
-   `Accept`
-   `Accept-Encoding`
-   `Cookie`
-   `Cache-Control`
-   `Dnt`

but many more exist.

The header part is terminated by a blank line.

#### The request body

The request body is optional, not used in GET requests but very much used in POST requests and sometimes in other verbs too, and it can contain data in JSON format.

Since we’re now analyzing a GET request, the body is blank and we’ll not look more into it.

#### The response

Once the request is sent, the server processes it and sends back a response.

The response starts with the status code and the status message. If the request is successful and returns a 200, it will start with:

```
200 OK
```

The request might return a different status code and message, like one of these:

```plain
404 Not Found403 Forbidden301 Moved Permanently500 Internal Server Error304 Not Modified401 Unauthorized
```

The response then contains a list of HTTP headers and the response body (which, since we’re making the request in the browser, is going to be HTML).

#### Parse the HTML

The browser now has received the HTML and starts to parse it, and will repeat the exact same process we did not for all the resources required by the page:

-   CSS files
-   images
-   the favicon
-   JavaScript files
-   ……

How browsers render the page then is out of the scope, but it’s important to understand that the process I described is not just for the HTML pages, but for any item that’s served over HTTP.

### Build an HTTP Server with Node.js

Here is the HTTP web server we used as the Node.js Hello World application in the introduction:

```plain
const http = require('http')
```

```
const port = 3000
```

```plain
const server = http.createServer((req, res) => {  res.statusCode = 200  res.setHeader('Content-Type', 'text/plain')  res.end('Hello World\n')})
```

```
server.listen(port, () => {  console.log(`Server running at http://${hostname}:${port}/`)})
```

Let’s analyze it briefly. We include the `http` [module][104].

We use the module to create an HTTP server.

The server is set to listen on the specified port, `3000`. When the server is ready, the `listen`callback function is called.

The callback function we pass is the one that’s going to be executed upon every request that comes in. Whenever a new request is received, the `request` [event][105] is called, providing two objects: a request (an `[http.IncomingMessage][106]`object) and a response (an `[http.ServerResponse][107]`object).

`request` provides the request details. Through it, we access the request headers and request data.

`response` is used to populate the data we’re going to return to the client.

In this case with:

```
res.statusCode = 200
```

We set the `statusCode` property to `200`, to indicate a successful response.

We also set the `Content-Type` header:

```
res.setHeader('Content-Type', 'text/plain')
```

and we end close the response, adding the content as an argument to `end()`:

```
res.end('Hello World\n')
```

### Making HTTP requests with Node.js

How to perform HTTP requests with Node.js using GET, POST, PUT and DELETE.

I use the term HTTP, but HTTPS is what should be used everywhere, therefore these examples use HTTPS instead of HTTP.

#### Perform a GET Request

```plain
const https = require('https')const options = {  hostname: 'flaviocopes.com',  port: 443,  path: '/todos',  method: 'GET'}
```

```
const req = https.request(options, (res) => {  console.log(`statusCode: ${res.statusCode}`)
```

```plain
  res.on('data', (d) => {    process.stdout.write(d)  })})
```

```plain
req.on('error', (error) => {  console.error(error)})
```

```plain
req.end()
```

#### Perform a POST Request

```
const https = require('https')
```

```plain
const data = JSON.stringify({  todo: 'Buy the milk'})
```

```
const options = {  hostname: 'flaviocopes.com',  port: 443,  path: '/todos',  method: 'POST',  headers: {    'Content-Type': 'application/json',    'Content-Length': data.length  }}
```

```
const req = https.request(options, (res) => {  console.log(`statusCode: ${res.statusCode}`)
```

```
  res.on('data', (d) => {    process.stdout.write(d)  })})
```

```plain
req.on('error', (error) => {  console.error(error)})
```

```
req.write(data)req.end()
```

#### PUT and DELETE

PUT and DELETE requests use the same POST request format, and just change the `options.method` value.

### HTTP requests in Node.js using Axios

Axios is a very popular JavaScript library you can use to perform HTTP requests, that works in both Browser and Node.js platforms.

It supports all modern browsers, including support for IE8 and higher.

It is promise-based, and this lets us write async/await code to perform [XHR][108] requests very easily.

Using Axios has quite a few advantages over the native Fetch API:

-   supports older browsers (Fetch needs a polyfill)
-   has a way to abort a request
-   has a way to set a response timeout
-   has built-in CSRF protection
-   supports upload progress
-   performs automatic JSON data transformation
-   works in Node.js

#### Installation

Axios can be installed using npm:

```plain
npm install axios
```

or yarn:

```
yarn add axios
```

or simply include it in your page using unpkg.com:

```plain
<script src="https://unpkg.com/axios/dist/axios.min.js"><;/script>
```

#### The Axios API

You can start an HTTP request from the `axios` object:

```plain
axios({  url: 'https://dog.ceo/api/breeds/list/all',  method: 'get',  data: {    foo: 'bar'  }})
```

but for convenience, you will generally use:

-   `axios.get()`
-   `axios.post()`

(like in jQuery you would use `$.get()` and `$.post()` instead of `$.ajax()`)

Axios offers methods for all the HTTP verbs, which are less popular but still used:

-   `axios.delete()`
-   `axios.put()`
-   `axios.patch()`
-   `axios.options()`

and a method to get the HTTP headers of a request, discarding the body:

-   `axios.head()`

#### GET requests

One convenient way to use Axios is to use the modern (ES2017) `async/await` syntax.

This Node.js example queries the [Dog API][109] to retrieve a list of all the dog breeds, using `axios.get()`, and it counts them:

```plain
const axios = require('axios')
```

```
const getBreeds = async () => {  try {    return await axios.get('https://dog.ceo/api/breeds/list/all')  } catch (error) {    console.error(error)  }}
```

```
const countBreeds = async () => {  const breeds = await getBreeds()
```

```
  if (breeds.data.message) {    console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)  }}
```

```
countBreeds()
```

If you don’t want to use `async/await` you can use the [Promises][110] syntax:

```
const axios = require('axios')
```

```
const getBreeds = () => {  try {    return axios.get('https://dog.ceo/api/breeds/list/all')  } catch (error) {    console.error(error)  }}
```

```
const countBreeds = async () => {  const breeds = getBreeds()    .then(response => {      if (response.data.message) {        console.log(          `Got ${Object.entries(response.data.message).length} breeds`        )      }    })    .catch(error => {      console.log(error)    })}
```

```
countBreeds()
```

#### Add parameters to GET requests

A GET response can contain parameters in the URL, like this: `[https://site.com/?foo=bar][111]`

With Axios you can perform this by simply using that URL:

```plain
axios.get('https://site.com/?foo=bar')
```

or you can use a `params` property in the options:

```plain
axios.get('https://site.com/', {  params: {    foo: 'bar'  }})
```

#### POST Requests

Performing a POST request is just like doing a GET request, but instead of `axios.get`, you use `axios.post`:

```
axios.post('https://site.com/')
```

An object containing the POST parameters is the second argument:

```
axios.post('https://site.com/', {  foo: 'bar'})
```

### Using WebSockets in Node.js

WebSockets are an alternative to HTTP communication in Web Applications.

They offer a long lived, bidirectional communication channel between client and server.

Once established, the channel is kept open, offering a very fast connection with low latency and overhead.

### Browser support for WebSockets

WebSockets are supported by all modern browsers.

### How WebSockets differ from HTTP

HTTP is a very different protocol, and has a different way of communicating.

HTTP is a request/response protocol: the server returns some data when the client requests it.

With WebSockets:

-   the **server can send a message to the client** without the client explicitly requesting something
-   the client and the server can **talk to each other simultaneously**
-   very little data overhead needs to be exchanged to send messages. This means a **low latency communication**.

WebSockets are great for real-time and long-lived communications.

HTTP is great for occasional data exchange and interactions initiated by the client.

HTTP is much simpler to implement, while WebSockets require a bit more overhead.

### Secured WebSockets

Always use the secure, encrypted protocol for WebSockets, `wss://`.

`ws://` refers to the unsafe WebSockets version (the `http://` of WebSockets), and should be avoided for obvious reasons.

### Create a new WebSockets connection

```
const url = 'wss://myserver.com/something'const connection = new WebSocket(url)
```

`connection` is a [WebSocket][112] object.

When the connection is successfully established, the `open`event is fired.

Listen for it by assigning a callback function to the `onopen`property of the `connection`object:

```
connection.onopen = () => {  //...}
```

If there’s any error, the `onerror` function callback is fired:

```plain
connection.onerror = error => {  console.log(`WebSocket error: ${error}`)}
```

### Sending data to the server using WebSockets

Once the connection is open, you can send data to the server.

You can do so conveniently inside the `onopen` callback function:

```plain
connection.onopen = () => {  connection.send('hey')}
```

### Receiving data from the server using WebSockets

Listen with a callback function on `onmessage`, which is called when the `message` event is received:

```
connection.onmessage = e => {  console.log(e.data)}
```

### Implement a WebSockets server in Node.js

[ws][113] is a popular WebSockets library for Node.js.

We’ll use it to build a WebSockets server. It can also be used to implement a client, and use WebSockets to communicate between two backend services.

Easily install it using:

```
yarn inityarn add ws
```

The code you need to write is very little:

```
const WebSocket = require('ws')
```

```
const wss = new WebSocket.Server({ port: 8080 })
```

```
wss.on('connection', ws => {  ws.on('message', message => {    console.log(`Received message => ${message}`)  })  ws.send('ho!')})
```

This code creates a new server on port 8080 (the default port for WebSockets), and adds a callback function when a connection is established, sending `ho!` to the client, and logging the messages it receives.

### See a live example on Glitch

[Here][114] is a live example of a WebSockets server.

[Here][115] is a WebSockets client that interacts with the server.

### Working with file descriptors in Node.js

Before you’re able to interact with a file that sits in your file system, you must get a file descriptor.

A file descriptor is what’s returned by opening the file using the `open()` method offered by the `fs` module:

```
const fs = require('fs')
```

```
fs.open('/Users/flavio/test.txt', 'r', (err, fd) => {  //fd is our file descriptor})
```

Notice the `r` we used as the second parameter to the `fs.open()` call.

That flag means we open the file for reading.

Other flags you’ll commonly use are

-   `r+` open the file for reading and writing
-   `w+` open the file for reading and writing, positioning the stream at the beginning of the file. The file is created if not existing
-   `a` open the file for writing, positioning the stream at the end of the file. The file is created if not existing
-   `a+` open the file for reading and writing, positioning the stream at the end of the file. The file is created if not existing

You can also open the file by using the `fs.openSync` method, which instead of providing the file descriptor object in a callback, it returns it:

```
const fs = require('fs')
```

```
try {  const fd = fs.openSync('/Users/flavio/test.txt', 'r')} catch (err) {  console.error(err)}
```

Once you get the file descriptor, in whatever way you choose, you can perform all the operations that require it, like calling `fs.open()` and many other operations that interact with the file system.

### Node.js file stats

Every file comes with a set of details that we can inspect using Node.js.

In particular, using the `stat()` method provided by the `fs` module.

You call it passing a file path, and once Node.js gets the file details it will call the callback function you pass with 2 parameters: an error message, and the file stats:

```
const fs = require('fs')fs.stat('/Users/flavio/test.txt', (err, stats) => {  if (err) {    console.error(err)    return  }  //we have access to the file stats in `stats`})
```

Node.js provides also a sync method, which blocks the thread until the file stats are ready:

```
const fs = require('fs')try {  const stats = fs.stat('/Users/flavio/test.txt')} catch (err) {  console.error(err)}
```

The file information is included in the stats variable. What kind of information can we extract using the stats?

A lot, including:

-   if the file is a directory or a file, using `stats.isFile()` and `stats.isDirectory()`
-   if the file is a symbolic link using `stats.isSymbolicLink()`
-   the file size in bytes using `stats.size`.

There are other advanced methods, but the bulk of what you’ll use in your day-to-day programming is this:

```
const fs = require('fs')fs.stat('/Users/flavio/test.txt', (err, stats) => {  if (err) {    console.error(err)    return  }
```

```plain
  stats.isFile() //true  stats.isDirectory() //false  stats.isSymbolicLink() //false  stats.size //1024000 //= 1MB})
```

### Node.js File Paths

Every file in the system has a path.

On Linux and macOS, a path might look like:

`/users/flavio/file.txt`

While Windows computers are different, and have a structure such as:

`C:\users\flavio\file.txt`

You need to pay attention when using paths in your applications, as this difference must be taken into account.

You include this module in your files using:

```plain
const path = require('path')
```

and you can start using its methods.

#### Getting information out of a path

Given a path, you can extract information out of it using those methods:

-   `dirname`: get the parent folder of a file
-   `basename`: get the filename part
-   `extname`: get the file extension

Example:

```
const notes = '/users/flavio/notes.txt'
```

```plain
path.dirname(notes) // /users/flaviopath.basename(notes) // notes.txtpath.extname(notes) // .txt
```

You can get the file name without the extension by specifying a second argument to `basename`:

```
path.basename(notes, path.extname(notes)) //notes
```

#### Working with paths

You can join two or more parts of a path by using `path.join()`:

```plain
const name = 'flavio'path.join('/', 'users', name, 'notes.txt') //'/users/flavio/notes.txt'
```

You can get the absolute path calculation of a relative path using `path.resolve()`:

```
path.resolve('flavio.txt') //'/Users/flavio/flavio.txt' if run from my home folder
```

In this case Node.js will simply append `/flavio.txt` to the current working directory. If you specify a second parameter folder, `resolve` will use the first as a base for the second:

```plain
path.resolve('tmp', 'flavio.txt')// '/Users/flavio/tmp/flavio.txt' if run from my home folder
```

If the first parameter starts with a slash, that means it’s an absolute path:

```plain
path.resolve('/etc', 'flavio.txt')// '/etc/flavio.txt'
```

`path.normalize()` is another useful function, that will try and calculate the actual path, when it contains relative specifiers like `.` or `..`, or double slashes:

```
path.normalize('/users/flavio/..//test.txt') // /users/test.txt
```

But `resolve` and `normalize` will **not** check if the path exists. They just calculate a path based on the information they got.

### Reading files with Node.js

The simplest way to read a file in Node.js is to use the `fs.readFile()` method, passing it the file path and a callback function that will be called with the file data (and the error):

```
const fs = require('fs')
```

```
fs.readFile('/Users/flavio/test.txt', (err, data) => {  if (err) {    console.error(err)    return  }  console.log(data)})
```

Alternatively, you can use the synchronous version `fs.readFileSync()`:

```
const fs = require('fs')
```

```
try {  const data = fs.readFileSync('/Users/flavio/test.txt')  console.log(data)} catch (err) {  console.error(err)}
```

The default encoding is u`tf8`, but you can specify a custom encoding using a a second parameter.

Both `fs.readFile()` and `fs.readFileSync()` read the full content of the file in memory before returning the data.

This means that big files are going to have a major impact on your memory consumption and speed of execution of the program.

In this case, a better option is to read the file content using streams.

### Writing files with Node.js

The easiest way to write to files in Node.js is to use the `fs.writeFile()` API.

Example:

```
const fs = require('fs')
```

```plain
const content = 'Some content!'
```

```
fs.writeFile('/Users/flavio/test.txt', content, (err) => {  if (err) {    console.error(err)    return  }  //file written successfully})
```

Alternatively, you can use the synchronous version `fs.writeFileSync()`:

```plain
const fs = require('fs')
```

```
const content = 'Some content!'
```

```
try {  const data = fs.writeFileSync('/Users/flavio/test.txt', content)  //file written successfully} catch (err) {  console.error(err)}
```

By default, this API will **replace the contents of the file** if it does already exist.

You can modify the default by specifying a flag:

```
fs.writeFile('/Users/flavio/test.txt', content, { flag: 'a+' }, (err) => {})
```

The flags you’ll likely use are:

-   `r+` open the file for reading and writing
-   `w+` open the file for reading and writing, positioning the stream at the beginning of the file. The file is created if not existing
-   `a` open the file for writing, positioning the stream at the end of the file. The file is created if not existing
-   `a+` open the file for reading and writing, positioning the stream at the end of the file. The file is created if not existing

You can find more about [flags][116].

#### Append to a file

A handy method to append content to the end of a file is `fs.appendFile()` (and its `fs.appendFileSync()` counterpart):

```plain
const content = 'Some content!'
```

```
fs.appendFile('file.log', content, (err) => {  if (err) {    console.error(err)    return  }  //done!})
```

#### Using streams

All those methods write the full content to the file before returning the control back to your program (in the async version, this means executing the callback)

In this case, a better option is to write the file content using streams.

### Working with folders in Node.js

The Node.js `fs` core module provides many handy methods you can use to work with folders.

#### Check if a folder exists

Use `fs.access()` to check if the folder exists and Node.js can access it with its permissions.

#### Create a new folder

Use `fs.mkdir()` or `fs.mkdirSync()` to create a new folder:

```
const fs = require('fs')
```

```
const folderName = '/Users/flavio/test'
```

```plain
try {  if (!fs.existsSync(dir)){    fs.mkdirSync(dir)  }} catch (err) {  console.error(err)}
```

#### Read the content of a directory

Use `fs.readdir()` or `fs.readdirSync` to read the contents of a directory.

This piece of code reads the content of a folder, both files and subfolders, and returns their relative path:

```
const fs = require('fs')const path = require('path')
```

```plain
const folderPath = '/Users/flavio'
```

```
fs.readdirSync(folderPath)
```

You can get the full path:

```plain
fs.readdirSync(folderPath).map(fileName => {  return path.join(folderPath, fileName)}
```

You can also filter the results to only return the files, and exclude the folders:

```
const isFile = fileName => {  return fs.lstatSync(fileName).isFile()}
```

```plain
fs.readdirSync(folderPath).map(fileName => {  return path.join(folderPath, fileName)).filter(isFile)}
```

#### Rename a folder

Use `fs.rename()` or `fs.renameSync()` to rename folder.

The first parameter is the current path, the second the new path:

```plain
const fs = require('fs')
```

```plain
fs.rename('/Users/flavio', '/Users/roger', (err) => {  if (err) {    console.error(err)    return  }  //done})
```

`fs.renameSync()` is the synchronous version:

```
const fs = require('fs')
```

```
try {  fs.renameSync('/Users/flavio', '/Users/roger')} catch (err) {  console.error(err)}
```

#### Remove a folder

Use `fs.rmdir()` or `fs.rmdirSync()` to remove a folder.

Removing a folder that has content can be more complicated than you need.

In this case I recommend installing the `fs-extra` module, which is very popular and well maintained, and it’s a drop-in replacement of the `fs` module, providing more features on top of it.

In this case the `remove()` method is what you want.

Install it using:

`npm install fs-extra`

and use it like this:

```
const fs = require('fs-extra')
```

```
const folder = '/Users/flavio'
```

```
fs.remove(folder, err => {  console.error(err)})
```

It can also be used with promises:

```plain
fs.remove(folder).then(() => {  //done}).catch(err => {  console.error(err)})
```

or with `async/await`:

```
async function removeFolder(folder) {  try {    await fs.remove(folder)    //done  } catch (err) {    console.error(err)  }}
```

```
const folder = '/Users/flavio'removeFolder(folder)
```

### The Node.js fs module

The `fs` module provides a lot of very useful functionality to access and interact with the file system.

There is no need to install it. Being part of the Node.js core, it can be used by simply requiring it:

```plain
const fs = require('fs')
```

Once you do so, you have access to all its methods, which include:

-   `fs.access()`: check if the file exists and Node can access it with its permissions
-   `fs.appendFile()`: append data to a file. If the file does not exist, it’s created
-   `fs.chmod()`: change the permissions of a file specified by the filename passed. Related: `fs.lchmod()`, `fs.fchmod()`
-   `fs.chown()`: change the owner and group of a file specified by the filename passed. Related: `fs.fchown()`, `fs.lchown()`
-   `fs.close()`: close a file descriptor
-   `fs.copyFile()`: copies a file
-   `fs.createReadStream()`: create a readable file stream
-   `fs.createWriteStream()`: create a writable file stream
-   `fs.link()`: create a new hard link to a file
-   `fs.mkdir()`: create a new folder
-   `fs.mkdtemp()`: create a temporary directory
-   `fs.open()`: set the file mode
-   `fs.readdir()`: read the contents of a directory
-   `fs.readFile()`: read the content of a file. Related: `fs.read()`
-   `fs.readlink()`: read the value of a symbolic link
-   `fs.realpath()`: resolve relative file path pointers (`.`, `..`) to the full path
-   `fs.rename()`: rename a file or folder
-   `fs.rmdir()`: remove a folder
-   `fs.stat()`: returns the status of the file identified by the filename passed. Related: `fs.fstat()`, `fs.lstat()`
-   `fs.symlink()`: create a new symbolic link to a file
-   `fs.truncate()`: truncate to the specified length the file identified by the filename passed. Related: `fs.ftruncate()`
-   `fs.unlink()`: remove a file or a symbolic link
-   `fs.unwatchFile()`: stop watching for changes on a file
-   `fs.utimes()`: change the timestamp of the file identified by the filename passed. Related: `fs.futimes()`
-   `fs.watchFile()`: start watching for changes on a file. Related: `fs.watch()`
-   `fs.writeFile()`: write data to a file. Related: `fs.write()`

One peculiar thing about the `fs` module is that all the methods are asynchronous by default, but they can also work synchronously by appending `Sync`.

For example:

-   `fs.rename()`
-   `fs.renameSync()`
-   `fs.write()`
-   `fs.writeSync()`

This makes a huge difference in your application flow.

Node 10 includes [experimental support][117] for a promise based API.

For example let’s examine the `fs.rename()` method. The asynchronous API is used with a callback:

```
const fs = require('fs')
```

```plain
fs.rename('before.json', 'after.json', (err) => {  if (err) {    return console.error(err)  }
```

```
  //done})
```

A synchronous API can be used like this, with a `try/catch` block to handle errors:

```plain
const fs = require('fs')
```

```
try {  fs.renameSync('before.json', 'after.json')  //done} catch (err) {  console.error(err)}
```

The key difference here is that the execution of your script will block in the second example, until the file operation succeeded.

### The Node.js path module

The `path` module provides a lot of very useful functionality to access and interact with the file system.

There is no need to install it. Being part of the Node.js core, it can be used by simply requiring it:

```
const path = require('path')
```

This module provides `path.sep` which provides the path segment separator (`\` on Windows, and `/` on Linux / macOS), and `path.delimiter` which provides the path delimiter (`;` on Windows, and `:` on Linux / macOS).

These are the `path` methods.

#### `path.basename()`

Return the last portion of a path. A second parameter can filter out the file extension:

```
require('path').basename('/test/something') //somethingrequire('path').basename('/test/something.txt') //something.txtrequire('path').basename('/test/something.txt', '.txt') //something
```

#### `path.dirname()`

Return the directory part of a path:

```
require('path').dirname('/test/something') // /testrequire('path').dirname('/test/something/file.txt') // /test/something
```

#### `path.extname()`

Return the extension part of a path:

```
require('path').dirname('/test/something') // ''require('path').dirname('/test/something/file.txt') // '.txt'
```

#### `path.isAbsolute()`

Returns true if it’s an absolute path:

```
require('path').isAbsolute('/test/something') // truerequire('path').isAbsolute('./test/something') // false
```

#### `path.join()`

Joins two or more parts of a path:

```
const name = 'flavio'require('path').join('/', 'users', name, 'notes.txt') //'/users/flavio/notes.txt'
```

#### `path.normalize()`

Tries to calculate the actual path when it contains relative specifiers like `.` or `..`, or double slashes:

```
require('path').normalize('/users/flavio/..//test.txt') ///users/test.txt
```

#### `path.parse()`

Parses a path to an object with the segments that compose it:

-   `root`: the root
-   `dir`: the folder path starting from the root
-   `base`: the file name + extension
-   `name`: the file name
-   `ext`: the file extension

Example:

```
require('path').parse('/users/test.txt')
```

results in:

```
{  root: '/',  dir: '/users',  base: 'test.txt',  ext: '.txt',  name: 'test'}
```

#### `path.relative()`

Accepts 2 paths as arguments. Returns the the relative path from the first path to the second, based on the current working directory.

Example:

```
require('path').relative('/Users/flavio', '/Users/flavio/test.txt') //'test.txt'require('path').relative('/Users/flavio', '/Users/flavio/something/test.txt') //'something/test.txt'
```

#### `path.resolve()`

You can get the absolute path calculation of a relative path using `path.resolve()`:

```
path.resolve('flavio.txt') //'/Users/flavio/flavio.txt' if run from my home folder
```

By specifying a second parameter, `resolve` will use the first as a base for the second:

```
path.resolve('tmp', 'flavio.txt')//'/Users/flavio/tmp/flavio.txt' if run from my home folder
```

If the first parameter starts with a slash, that means it’s an absolute path:

```
path.resolve('/etc', 'flavio.txt')//'/etc/flavio.txt'
```

### The Node.js os module

This module provides many functions that you can use to retrieve information from the underlying **operating system** and the computer the program runs on, and interact with it.

```
const os = require('os')
```

There are a few useful properties that tell us some key things related to handling files:

`os.EOL` gives the line delimiter sequence. It's `\n` on Linux and macOS, and `\r\n` on Windows.

When I say Linux and macOS I mean POSIX platforms. For simplicity I exclude other less popular operating systems Node can run on.

`os.constants.signals` tells us all the constants related to handling process signals, like SIGHUP, SIGKILL and so on.

`os.constants.errno` sets the constants for error reporting, like EADDRINUSE, EOVERFLOW and more.

You can read them all [here][118].

Let’s now see the main methods that `os` provides:

-   `os.arch()`
-   `os.cpus()`
-   `os.endianness()`
-   `os.freemem()`
-   `os.homedir()`
-   `os.hostname()`
-   `os.loadavg()`
-   `os.networkInterfaces()`
-   `os.platform()`
-   `os.release()`
-   `os.tmpdir()`
-   `os.totalmem()`
-   `os.type()`
-   `os.uptime()`
-   `os.userInfo()`

#### `os.arch()`

Return the string that identifies the underlying architecture, like `arm`, `x64`, `arm64`.

#### `os.cpus()`

Return information on the CPUs available on your system.

Example:

```
[ { model: 'Intel(R) Core(TM)2 Duo CPU     P8600  @ 2.40GHz',    speed: 2400,    times:     { user: 281685380,       nice: 0,       sys: 187986530,       idle: 685833750,       irq: 0 } },  { model: 'Intel(R) Core(TM)2 Duo CPU     P8600  @ 2.40GHz',    speed: 2400,    times:     { user: 282348700,       nice: 0,       sys: 161800480,       idle: 703509470,       irq: 0 } } ]
```

#### `os.endianness()`

Return `BE` or `LE` depending if Node.js was compiled with [Big Endian or Little Endian][119].

#### `os.freemem()`

Return the number of bytes that represent the free memory in the system.

#### `os.homedir()`

Return the path to the home directory of the current user.

Example:

```
'/Users/flavio'
```

#### `os.hostname()`

Return the hostname.

#### `os.loadavg()`

Return the calculation made by the operating system on the load average.

It only returns a meaningful value on Linux and macOS.

Example:

```plain
[ 3.68798828125, 4.00244140625, 11.1181640625 ]
```

#### `os.networkInterfaces()`

Returns the details of the network interfaces available on your system.

Example:

```
{ lo0:   [ { address: '127.0.0.1',       netmask: '255.0.0.0',       family: 'IPv4',       mac: 'fe:82:00:00:00:00',       internal: true },     { address: '::1',       netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',       family: 'IPv6',       mac: 'fe:82:00:00:00:00',       scopeid: 0,       internal: true },     { address: 'fe80::1',       netmask: 'ffff:ffff:ffff:ffff::',       family: 'IPv6',       mac: 'fe:82:00:00:00:00',       scopeid: 1,       internal: true } ],  en1:   [ { address: 'fe82::9b:8282:d7e6:496e',       netmask: 'ffff:ffff:ffff:ffff::',       family: 'IPv6',       mac: '06:00:00:02:0e:00',       scopeid: 5,       internal: false },     { address: '192.168.1.38',       netmask: '255.255.255.0',       family: 'IPv4',       mac: '06:00:00:02:0e:00',       internal: false } ],  utun0:   [ { address: 'fe80::2513:72bc:f405:61d0',       netmask: 'ffff:ffff:ffff:ffff::',       family: 'IPv6',       mac: 'fe:80:00:20:00:00',       scopeid: 8,       internal: false } ] }
```

#### `os.platform()`

Return the platform that Node.js was compiled for:

-   `darwin`
-   `freebsd`
-   `linux`
-   `openbsd`
-   `win32`
-   ……more

#### `os.release()`

Returns a string that identifies the operating system release number.

#### `os.tmpdir()`

Returns the path to the assigned temp folder.

#### `os.totalmem()`

Returns the number of bytes that represent the total memory available in the system.

#### `os.type()`

Identifies the operating system:

-   `Linux`
-   `Darwin` on macOS
-   `Windows_NT` on Windows

#### `os.uptime()`

Returns the number of seconds the computer has been running since it was last rebooted.

### The Node.js events module

The `events` module provides us the `EventEmitter` class, which is key to working with events in Node.js.

I published a full [article][120] on that, so here I will just describe the API without further examples on how to use it.

```
const EventEmitter = require('events')const door = new EventEmitter()
```

The event listener eats its own dog food and uses these events:

-   `newListener` when a listener is added
-   `removeListener` when a listener is removed

Here’s a detailed description of the most useful methods:

-   `emitter.addListener()`
-   `emitter.emit()`
-   `emitter.eventNames()`
-   `emitter.getMaxListeners()`
-   `emitter.listenerCount()`
-   `emitter.listeners()`
-   `emitter.off()`
-   `emitter.on()`
-   `emitter.once()`
-   `emitter.prependListener()`
-   `emitter.prependOnceListener()`
-   `emitter.removeAllListeners()`
-   `emitter.removeListener()`
-   `emitter.setMaxListeners()`

#### `emitter.addListener()`

Alias for `emitter.on()`.

#### `emitter.emit()`

Emits an event. It synchronously calls every event listener in the order they were registered.

#### `emitter.eventNames()`

Return an array of strings that represent the events registered on the current EventListener:

```
door.eventNames()
```

#### `emitter.getMaxListeners()`

Get the maximum amount of listeners one can add to an EventListener object, which defaults to 10 but can be increased or lowered by using `setMaxListeners()`:

```plain
door.getMaxListeners()
```

#### `emitter.listenerCount()`

Get the count of listeners of the event passed as parameter:

```plain
door.listenerCount('open')
```

#### `emitter.listeners()`

Gets an array of listeners of the event passed as parameter:

```plain
door.listeners('open')
```

#### `emitter.off()`

Alias for `emitter.removeListener()` added in Node 10.

#### `emitter.on()`

Adds a callback function that’s called when an event is emitted.

Usage:

```plain
door.on('open', () => {  console.log('Door was opened')})
```

#### `emitter.once()`

Adds a callback function that’s called when an event is emitted for the first time after registering this. This callback is only going to be called once, never again.

```
const EventEmitter = require('events')const ee = new EventEmitter()
```

```
ee.once('my-event', () => {  //call callback function once})
```

#### `emitter.prependListener()`

When you add a listener using `on` or `addListener`, it's added last in the queue of listeners, and called last. Using `prependListener` it's added, and called, before other listeners.

#### `emitter.prependOnceListener()`

When you add a listener using `once`, it's added last in the queue of listeners, and called last. Using `prependOnceListener` it's added, and called, before other listeners.

#### `emitter.removeAllListeners()`

Removes all listeners of an event emitter object listening to a specific event:

```
door.removeAllListeners('open')
```

#### `emitter.removeListener()`

Remove a specific listener. You can do this by saving the callback function to a variable, when added, so you can reference it later:

```
const doSomething = () => {}door.on('open', doSomething)door.removeListener('open', doSomething)
```

#### `emitter.setMaxListeners()`

Sets the maximum amount of listeners one can add to an EventListener object, which defaults to 10 but can be increased or lowered:

```
door.setMaxListeners(50)
```

### The Node.js http module

The `http` module of Node.js provides useful functions and classes to build an HTTP server. It is a key module to Node.js networking.

It can be included using:

```
const http = require('http')
```

The module provides some properties and methods, and some classes.

#### Properties

#### `http.METHODS`

This property lists all the HTTP methods supported:

```
> require('http').METHODS[ 'ACL',  'BIND',  'CHECKOUT',  'CONNECT',  'COPY',  'DELETE',  'GET',  'HEAD',  'LINK',  'LOCK',  'M-SEARCH',  'MERGE',  'MKACTIVITY',  'MKCALENDAR',  'MKCOL',  'MOVE',  'NOTIFY',  'OPTIONS',  'PATCH',  'POST',  'PROPFIND',  'PROPPATCH',  'PURGE',  'PUT',  'REBIND',  'REPORT',  'SEARCH',  'SUBSCRIBE',  'TRACE',  'UNBIND',  'UNLINK',  'UNLOCK',  'UNSUBSCRIBE' ]
```

#### `http.STATUS_CODES`

This property lists all the HTTP status codes and their description:

```plain
> require('http').STATUS_CODES{ '100': 'Continue',  '101': 'Switching Protocols',  '102': 'Processing',  '200': 'OK',  '201': 'Created',  '202': 'Accepted',  '203': 'Non-Authoritative Information',  '204': 'No Content',  '205': 'Reset Content',  '206': 'Partial Content',  '207': 'Multi-Status',  '208': 'Already Reported',  '226': 'IM Used',  '300': 'Multiple Choices',  '301': 'Moved Permanently',  '302': 'Found',  '303': 'See Other',  '304': 'Not Modified',  '305': 'Use Proxy',  '307': 'Temporary Redirect',  '308': 'Permanent Redirect',  '400': 'Bad Request',  '401': 'Unauthorized',  '402': 'Payment Required',  '403': 'Forbidden',  '404': 'Not Found',  '405': 'Method Not Allowed',  '406': 'Not Acceptable',  '407': 'Proxy Authentication Required',  '408': 'Request Timeout',  '409': 'Conflict',  '410': 'Gone',  '411': 'Length Required',  '412': 'Precondition Failed',  '413': 'Payload Too Large',  '414': 'URI Too Long',  '415': 'Unsupported Media Type',  '416': 'Range Not Satisfiable',  '417': 'Expectation Failed',  '418': 'I\'m a teapot',  '421': 'Misdirected Request',  '422': 'Unprocessable Entity',  '423': 'Locked',  '424': 'Failed Dependency',  '425': 'Unordered Collection',  '426': 'Upgrade Required',  '428': 'Precondition Required',  '429': 'Too Many Requests',  '431': 'Request Header Fields Too Large',  '451': 'Unavailable For Legal Reasons',  '500': 'Internal Server Error',  '501': 'Not Implemented',  '502': 'Bad Gateway',  '503': 'Service Unavailable',  '504': 'Gateway Timeout',  '505': 'HTTP Version Not Supported',  '506': 'Variant Also Negotiates',  '507': 'Insufficient Storage',  '508': 'Loop Detected',  '509': 'Bandwidth Limit Exceeded',  '510': 'Not Extended',  '511': 'Network Authentication Required' }
```

#### `http.globalAgent`

Points to the global instance of the Agent object, which is an instance of the `http.Agent`class.

It’s used to manage connections persistence and reuse for HTTP clients, and it’s a key component of Node.js HTTP networking.

More in the `http.Agent` class description later on.

#### Methods

#### `http.createServer()`

Return a new instance of the `http.Server` class.

Usage:

```
const server = http.createServer((req, res) => {  //handle every single request with this callback})
```

#### `http.request()`

Makes an HTTP request to a server, creating an instance of the `http.ClientRequest`class.

#### `http.get()`

Similar to `http.request()`, but automatically sets the HTTP method to GET, and calls `req.end()` automatically.

#### Classes

The HTTP module provides 5 classes:

-   `http.Agent`
-   `http.ClientRequest`
-   `http.Server`
-   `http.ServerResponse`
-   `http.IncomingMessage`

#### `http.Agent`

Node creates a global instance of the `http.Agent` class to manage connections persistance and reuse for HTTP clients, a key component of Node HTTP networking.

This object makes sure that every request made to a server is queued and a single socket is reused.

It also maintains a pool of sockets. This is key for performance reasons.

#### `http.ClientRequest`

An `http.ClientRequest` object is created when `http.request()` or `http.get()` is called.

When a response is received, the `response` event is called with the response, with an `http.IncomingMessage` instance as argument.

The returned data of a response can be read in 2 ways:

-   you can call the `response.read()` method
-   in the `response` event handler you can setup an event listener for the `data`event, so you can listen for the data streamed into.

#### `http.Server`

This class is commonly instantiated and returned when creating a new server using `http.createServer()`.

Once you have a server object, you have access to its methods:

-   `close()` stops the server from accepting new connections
-   `listen()` starts the HTTP server and listens for connections

#### `http.ServerResponse`

Created by an `http.Server` and passed as the second parameter to the `request` event it fires.

Commonly known and used in code as `res`:

```plain
const server = http.createServer((req, res) => {  //res is an http.ServerResponse object})
```

The method you’ll always call in the handler is `end()`, which closes the response, the message is complete and the server can send it to the client. It must be called on each response.

These methods are used to interact with HTTP headers:

-   `getHeaderNames()` get the list of the names of the HTTP headers already set
-   `getHeaders()` get a copy of the HTTP headers already set
-   `setHeader('headername', value)` sets an HTTP header value
-   `getHeader('headername')` gets an HTTP header already set
-   `removeHeader('headername')` removes an HTTP header already set
-   `hasHeader('headername')` return true if the response has that header set
-   `headersSent()` return true if the headers have already been sent to the client

After processing the headers you can send them to the client by calling `response.writeHead()`, which accepts the statusCode as the first parameter, the optional status message, and the headers object.

To send data to the client in the response body, you use `write()`. It will send buffered data to the HTTP response stream.

If the headers were not sent yet using `response.writeHead()`, it will send the headers first, with the status code and message that’s set in the request, which you can edit by setting the `statusCode` and `statusMessage` properties values:

```plain
response.statusCode = 500response.statusMessage = 'Internal Server Error'
```

#### `http.IncomingMessage`

An `http.IncomingMessage` object is created by:

-   `http.Server` when listening to the `request` event
-   `http.ClientRequest` when listening to the `response` event

It can be used to access the response:

-   status using its `statusCode` and `statusMessage` methods
-   headers using its `headers` method or `rawHeaders`
-   HTTP method using its `method` method
-   HTTP version using the `httpVersion` method
-   URL using the `url` method
-   underlying socket using the `socket` method

The data is accessed using streams, since `http.IncomingMessage` implements the Readable Stream interface.

### Node.js Streams

Streams are one of the fundamental concepts that power Node.js applications.

They are a way to handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way.

Streams are not a concept unique to Node.js. They were introduced in the Unix operating system decades ago, and programs can interact with each other passing streams through the pipe operator (`|`).

For example, in the traditional way, when you tell the program to read a file, the file is read into memory, from start to finish, and then you process it.

Using streams you read it piece by piece, processing its content without keeping it all in memory.

The Node.js `stream` [module][121] provides the foundation upon which all streaming APIs are build.

#### Why streams?

Streams basically provide two major advantages using other data handling methods:

-   **Memory efficiency**: you don’t need to load large amounts of data in memory before you are able to process it
-   **Time efficiency**: it takes way less time to start processing data as soon as you have it, rather than waiting till the whole data payload is available to start

#### An example of a stream

A typical example is the one of reading files from a disk.

Using the Node.js `fs` module you can read a file, and serve it over HTTP when a new connection is established to your `http` server:

```
const http = require('http')const fs = require('fs')
```

```
const server = http.createServer(function (req, res) {  fs.readFile(__dirname + '/data.txt', (err, data) => {    res.end(data)  })})server.listen(3000)
```

`readFile()` reads the full contents of the file, and invokes the callback function when it’s done.

`res.end(data)` in the callback will return the file contents to the HTTP client.

If the file is big, the operation will take quite a bit of time. Here is the same thing written using streams:

```
const http = require('http')const fs = require('fs')
```

```
const server = http.createServer((req, res) => {  const stream = fs.createReadStream(__dirname + '/data.txt')  stream.pipe(res)})server.listen(3000)
```

Instead of waiting until the file is fully read, we start streaming it to the HTTP client as soon as we have a chunk of data ready to be sent.

#### pipe()

The above example uses the line `stream.pipe(res)`: the `pipe()` method is called on the file stream.

What does this code do? It takes the source, and pipes it into a destination.

You call it on the source stream, so in this case, the file stream is piped to the HTTP response.

The return value of the `pipe()` method is the destination stream, which is a very convenient thing that lets us chain multiple `pipe()` calls, like this:

```
src.pipe(dest1).pipe(dest2)
```

This construct is the same as doing:

```
src.pipe(dest1)dest1.pipe(dest2)
```

#### Streams-powered Node.js APIs

Due to their advantages, many Node.js core modules provide native stream handling capabilities, most notably:

-   `process.stdin` returns a stream connected to stdin
-   `process.stdout` returns a stream connected to stdout
-   `process.stderr` returns a stream connected to stderr
-   `fs.createReadStream()` creates a readable stream to a file
-   `fs.createWriteStream()` creates a writable stream to a file
-   `net.connect()` initiates a stream-based connection
-   `http.request()` returns an instance of the http.ClientRequest class, which is a writable stream
-   `zlib.createGzip()` compress data using gzip (a compression algorithm) into a stream
-   `zlib.createGunzip()` decompress a gzip stream.
-   `zlib.createDeflate()` compress data using deflate (a compression algorithm) into a stream
-   `zlib.createInflate()` decompress a deflate stream

#### Different types of streams

There are four classes of streams:

-   `Readable`: a stream you can pipe from, but not pipe into (you can receive data, but not send data to it). When you push data into a readable stream, it is buffered, until a consumer starts to read the data.
-   `Writable`: a stream you can pipe into, but not pipe from (you can send data, but not receive from it)
-   `Duplex`: a stream you can both pipe into and pipe from, basically a combination of a Readable and Writable stream
-   `Transform`: a Transform stream is similar to a Duplex, but the output is a transform of its input

#### How to create a readable stream

We get the `Readable` stream from the `stream` module, and we initialize it:

```
const Stream = require('stream')const readableStream = new Stream.Readable()
```

Now that the stream is initialized, we can send data to it:

```
readableStream.push('hi!')readableStream.push('ho!')
```

#### How to create a writable stream

To create a writable stream we extend the base `Writable` object, and we implement its `_write()` method.

First create a stream object:

```plain
const Stream = require('stream')const writableStream = new Stream.Writable()
```

then implement `_write`:

```
writableStream._write = (chunk, encoding, next) => {    console.log(chunk.toString())    next()}
```

You can now pipe a readable stream in:

```plain
process.stdin.pipe(writableStream)
```

#### How to get data from a readable stream

How do we read data from a readable stream? Using a writable stream:

```plain
const Stream = require('stream')
```

```plain
const readableStream = new Stream.Readable()const writableStream = new Stream.Writable()
```

```plain
writableStream._write = (chunk, encoding, next) => {    console.log(chunk.toString())    next()}
```

```
readableStream.pipe(writableStream)
```

```plain
readableStream.push('hi!')readableStream.push('ho!')
```

You can also consume a readable stream directly, using the `readable` event:

```plain
readableStream.on('readable', () => {  console.log(readableStream.read())})
```

#### How to send data to a writable stream

Using the stream `write()` method:

```
writableStream.write('hey!\n')
```

#### Signaling a writable stream that you ended writing

Use the `end()` method:

```plain
const Stream = require('stream')
```

```
const readableStream = new Stream.Readable()const writableStream = new Stream.Writable()
```

```
writableStream._write = (chunk, encoding, next) => {    console.log(chunk.toString())    next()}
```

```
readableStream.pipe(writableStream)
```

```
readableStream.push('hi!')readableStream.push('ho!')
```

```
writableStream.end()
```

### The basics of working with MySQL and Node.js

MySQL is one of the most popular relational databases in the world.

The Node.js ecosystem has several different packages that allow you to interface with MySQL, store data, retrieve data, and so on.

We’ll use `[mysqljs/mysql][122]`, a package that has over 12,000 GitHub stars and has been around for years.

#### Installing the Node.js MySql package

You install it using:

```plain
npm install mysql
```

#### Initializing the connection to the database

You first include the package:

```
const mysql = require('mysql')
```

and you create a connection:

```plain
const options = {  user: 'the_mysql_user_name',  password: 'the_mysql_user_password',  database: 'the_mysql_database_name'}const connection = mysql.createConnection(options)
```

You initiate a new connection by calling:

```
connection.connect(err => {  if (err) {    console.error('An error occurred while connecting to the DB')    throw err  }})
```

#### The connection options

In the above example, the `options` object contained 3 options:

```
const options = {  user: 'the_mysql_user_name',  password: 'the_mysql_user_password',  database: 'the_mysql_database_name'}
```

There are many more you can use, including:

-   `host`, the database hostname, defaults to `localhost`
-   `port`, the MySQL server port number, defaults to 3306
-   `socketPath`, used to specify a unix socket instead of host and port
-   `debug`, by default disabled, can be used for debugging
-   `trace`, by default enabled, prints stack traces when errors occur
-   `ssl`, used to setup an SSL connection to the server (out of the scope of this tutorial)

#### Perform a SELECT query

Now you are ready to perform an SQL query on the database. The query once executed will invoke a callback function which contains an eventual error, the results and the fields:

```
connection.query('SELECT * FROM todos', (error, todos, fields) => {  if (error) {    console.error('An error occurred while executing the query')    throw error  }  console.log(todos)})
```

You can pass in values which will be automatically escaped:

```
const id = 223connection.query('SELECT * FROM todos WHERE id = ?', [id], (error, todos, fields) => {  if (error) {    console.error('An error occurred while executing the query')    throw error  }  console.log(todos)})
```

To pass multiple values, just put more elements in the array you pass as the second parameter:

```plain
const id = 223const author = 'Flavio'connection.query('SELECT * FROM todos WHERE id = ? AND author = ?', [id, author], (error, todos, fields) => {  if (error) {    console.error('An error occurred while executing the query')    throw error  }  console.log(todos)})
```

#### Perform an INSERT query

You can pass an object:

```
const todo = {  thing: 'Buy the milk'  author: 'Flavio'}connection.query('INSERT INTO todos SET ?', todo, (error, results, fields) => {  if (error) {    console.error('An error occurred while executing the query')    throw error  }})
```

If the table has a primary key with `auto_increment`, the value of that will be returned in the `results.insertId`value:

```plain
const todo = {  thing: 'Buy the milk'  author: 'Flavio'}connection.query('INSERT INTO todos SET ?', todo, (error, results, fields) => {  if (error) {    console.error('An error occurred while executing the query')    throw error  }}  const id = results.resultId  console.log(id))
```

#### Close the connection

When you need to terminate the connection to the database you can call the `end()`method:

```
connection.end()
```

This makes sure any pending query gets sent, and the connection is gracefully terminated.

### The difference between development and production

You can have different configurations for production and development environments.

Node.js assumes it’s always running in a development environment. You can signal Node.js that you are running in production by setting the `NODE_ENV=production`environment variable.

This is usually done by executing the command:

```
export NODE_ENV=production
```

in the shell, but it’s better to put it in your shell configuration file (like `.bash_profile`with the Bash shell) because otherwise the setting does not persist in case of a system restart.

You can also apply the environment variable by prepending it to your application initialization command:

```
NODE_ENV=production node app.js
```

This environment variable is a convention that is widely used in external libraries as well.

Setting the environment to `production` generally ensures that:

-   logging is kept to a minimum, essential level
-   more caching levels take place to optimize performance

For example [Pug][123], the templating library used by Express, compiles in debug mode if `NODE_ENV` is not set to `production`. Express views are compiled in every request in development mode, while in production they are cached. There are many more examples.

Express provides configuration hooks specific to the environment, which are automatically called based on the `NODE_ENV` variable value:

```
app.configure('development', () => {  //...})app.configure('production', () => {  //...})app.configure('production', 'staging', () => {  //...})
```

For example you can use this to set different error handlers for different modes:

```
app.configure('development', () => {  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));})
```

```
app.configure('production', () => {  app.use(express.errorHandler())})
```

### Closing words

I hope this introduction to Node.js will help you get started using it, or help you grasp some of its concepts. And hopefully now you’ll know enough to start building some great things!

[1]: https://pages.convertkit.com/5fdd03a386/1b1a570eeb
[2]: https://flaviocopes.com/npm/
[3]: https://www.npmjs.com/
[4]: https://nodejs.org/api/http.html
[5]: https://nodejs.org/api/
[6]: https://nodejs.org/api/http.html#http_event_request
[7]: https://nodejs.org/api/http.html#http_class_http_incomingmessage
[8]: https://nodejs.org/api/http.html#http_class_http_serverresponse
[9]: https://expressjs.com/
[10]: https://flaviocopes.com/meteor/
[11]: https://flaviocopes.com/react/
[12]: https://flaviocopes.com/vue-introduction/
[13]: https://angularjs.org/
[14]: http://koajs.com/
[15]: https://flaviocopes.com/nextjs/
[16]: https://reactjs.org/
[17]: https://github.com/zeit/micro
[18]: https://socket.io/
[19]: https://en.wikipedia.org/wiki/Netscape_Navigator
[20]: https://flaviocopes.com/npm/
[21]: https://flaviocopes.com/express/
[22]: https://socket.io/
[23]: https://www.linkedin.com/
[24]: https://www.uber.com/
[25]: https://hapijs.com/
[26]: https://ghost.org/
[27]: https://koajs.com/
[28]: https://iojs.org/
[29]: https://foundation.nodejs.org/
[30]: https://nodejs.org/en/blog/release/v4.0.0/
[31]: https://blog.npmjs.org/post/141577284765/kik-left-pad-and-npm
[32]: https://flaviocopes.com/yarn/
[33]: https://nodejs.org/api/http2.html
[34]: https://flaviocopes.com/v8/
[35]: https://flaviocopes.com/es-modules/
[36]: https://nodejs.org/api/esm.html
[37]: https://nodejs.org/en/download/
[38]: https://brew.sh/
[39]: https://nodejs.org/en/download/package-manager/
[40]: https://github.com/creationix/nvm/blob/master/README.md
[41]: https://flaviocopes.com/javascript/
[42]: https://flaviocopes.com/commonjs/
[43]: https://electronjs.org/
[44]: https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey
[45]: https://developer.apple.com/documentation/javascriptcore
[46]: https://github.com/Microsoft/ChakraCore
[47]: https://developers.google.com/v8/
[48]: https://nodejs.org/api/process.html#process_exit_codes
[49]: https://ngrok.com/
[50]: https://github.com/localtunnel/localtunnel
[51]: https://glitch.com/
[52]: https://glitch.com/faq#restrictions
[53]: https://codepen.io/
[54]: https://serverless.com/framework/
[55]: https://stdlib.com/
[56]: https://zeit.co/now
[57]: https://nanobox.io/
[58]: https://www.heroku.com/
[59]: https://devcenter.heroku.com/articles/getting-started-with-node
[60]: https://azure.microsoft.com/en-us/
[61]: https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-node
[62]: https://cloud.google.com/
[63]: https://cloud.google.com/node/
[64]: https://www.digitalocean.com/
[65]: https://www.linode.com/
[66]: https://aws.amazon.com/
[67]: https://en.wikipedia.org/wiki/Bare-metal_server
[68]: https://www.vultr.com/pricing/baremetal/
[69]: https://www.npmjs.com/package/minimist
[70]: https://nodejs.org/api/console.html
[71]: https://github.com/chalk/chalk
[72]: https://www.npmjs.com/package/progress
[73]: https://nodejs.org/api/readline.html
[74]: https://www.npmjs.com/package/readline-sync
[75]: https://github.com/SBoudrias/Inquirer.js
[76]: https://nodejs.org/api/modules.html
[77]: https://flaviocopes.com/yarn/
[78]: https://www.npmjs.com/package/cowsay
[79]: https://flaviocopes.com/npx/
[80]: https://flaviocopes.com/npm/
[81]: https://flaviocopes.com/yarn/
[82]: https://www.npmjs.com/
[83]: https://caniuse.com/
[84]: https://www.npmjs.com/package/browserslist
[85]: https://www.npmjs.com/package/cowsay
[86]: https://flaviocopes.com/package-json/
[87]: https://flaviocopes.com/package-json/
[88]: https://flaviocopes.com/package-json/
[89]: https://flaviocopes.com/package-json/
[90]: https://flaviocopes.com/npx/
[91]: https://www.npmjs.com/package/npx
[92]: https://flaviocopes.com/github/
[93]: https://flaviocopes.com/javascript-loops/
[94]: https://flaviocopes.com/web-workers/
[95]: https://caniuse.com/#feat=setimmediate
[96]: https://nodejs.org/api/timers.html
[97]: https://en.wikipedia.org/wiki/XMLHttpRequest
[98]: https://flaviocopes.com/fetch-api/
[99]: https://flaviocopes.com/service-workers/
[100]: https://flaviocopes.com/fetch-api
[101]: https://fetch.spec.whatwg.org/#concept-response
[102]: https://flaviocopes.com/ecmascript/#destructuring-assignments
[103]: https://nodejs.org/api/events.html
[104]: https://nodejs.org/api/http.html
[105]: https://nodejs.org/api/http.html#http_event_request
[106]: https://nodejs.org/api/http.html#http_class_http_incomingmessage
[107]: https://nodejs.org/api/http.html#http_class_http_serverresponse
[108]: https://flaviocopes.com/xhr/
[109]: https://dog.ceo/
[110]: https://flaviocopes.com/javascript-promises/
[111]: https://site.com/?foo=bar.
[112]: https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
[113]: https://github.com/websockets/ws
[114]: https://glitch.com/edit/#!/flavio-websockets-server-example
[115]: https://glitch.com/edit/#!/flavio-websockets-client-example
[116]: https://nodejs.org/api/fs.html#fs_file_system_flags
[117]: https://nodejs.org/api/fs.html#fs_fs_promises_api
[118]: https://nodejs.org/api/os.html#os_signal_constants
[119]: https://en.wikipedia.org/wiki/Endianness
[120]: https://flaviocopes.com/node-event-emitter/
[121]: https://nodejs.org/api/stream.html
[122]: https://github.com/mysqljs/mysql
[123]: https://pugjs.org/api/express.html


