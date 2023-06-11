> - 原文地址：[Next.js vs React – What are the Differences?](https://www.freecodecamp.org/news/next-vs-react/)
> - 原文作者：[Nishant Kumar](https://www.freecodecamp.org/news/author/nishant-kumar/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Next.js vs React – What are the Differences?](https://www.freecodecamp.org/news/content/images/size/w2000/2023/04/What--7-.png)

大家好! 最近，Next.js 13 正在流行，这是一个学习它的好时机。但 Next.js 到底是什么？Next.js 中的预渲染是什么，我们为什么要使用它？

嗯，让我解释一下。

## Next.js 是什么?

Next.js 是一个基于 React 的后端框架。

我们在 React 中能做的一切，在 Next.js 中也能做,还有一些额外的功能，如路由、API 调用、认证等等。我们在 React 中没有这些功能。相反，我们必须安装一些外部库和依赖项。例如，React Router 用于单页 React 应用程序的路由。

但在 Next.js 中，情况就不同了。我们不需要依赖外部库来完成这些事情。当我们创建一个 Next.js 应用程序时，它们就被内置在软件包中。

这就是 Next.js 应用与传统 React 应用不同的主要原因。

## 客户端渲染 VS 服务器端渲染

Next.js 也使用了一种叫做服务器端渲染的东西。而为了理解它的工作原理，我们也需要谈谈客户端渲染。

基本上，客户端就是我们在屏幕上看到的东西(用户界面)。这就是客户端，我们能看到的东西。换句话说，它是代码的前端部分。

另一方面，服务器是我们看不到的东西。它是代码的后端，或服务器代码。

现在，在客户端渲染中，应用程序加载并在浏览器上动态地生成输出。换句话说，浏览器使用 JavaScript 渲染页面。

但在服务器端渲染中，我们在屏幕上看到的用户界面不是由浏览器生成的，而是在服务器上生成的。当一个应用程序加载时，它不需要解析浏览器上的用户界面。相反，它来自于服务器端，是在服务器上预先生成的。

## React 和 CSR 如何工作

因此，当我们加载一个 React 应用程序时，或者当它被安装后，我们在浏览器中检查源代码，我们会得到这样的东西:

![Screenshot-2023-03-18-at-7.41.25-PM-1](https://www.freecodecamp.org/news/content/images/2023/03/Screenshot-2023-03-18-at-7.41.25-PM-1.png)

React 源代码

![1*2_1elhifmL3-xdbGTRiEuw](https://cdn-images-1.medium.com/max/1600/1*2_1elhifmL3-xdbGTRiEuw.png)

如果你简化它，我们得到以下结果:

```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Blogs by Cybernatico" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />
    <title>Blogs by Cybernatico</title>
    <link href="/static/css/2.877ae64e.chunk.css" rel="stylesheet" />
    <link href="/static/css/main.4d9c354c.chunk.css" rel="stylesheet" />
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>

    <script src="/static/js/2.48c493c5.chunk.js"></script>
    <script src="/static/js/main.f9b5cf72.chunk.js"></script>
  </body>
</html>
```

如果你看一下用户界面中的输出，它将是这样的:

![Screenshot-2023-03-18-at-7.46.23-PM](https://www.freecodecamp.org/news/content/images/2023/03/Screenshot-2023-03-18-at-7.46.23-PM.png)

React 应用

在这个页面的源代码中，我们只得到几行代码，其中包括标题、 meta 标签和链接参考(link references)。

但在 body 中，我们只有以下内容:

```html
<div id="root"></div>
```

那么，其余的代码在哪里呢？当页面加载时，我们在浏览器中看不到它。这是因为 React 使用客户端渲染（CSR）。React 应用程序在客户端处理 DOM，也就是在浏览器中。

每当我们加载一个 React 应用程序，所有的 UI 组件都会在浏览器上动态生成。

## Next.js 和 SSR 如何工作

如果你做了我们之前做的同样的事情，但用 Next.js 应用程序，你会得到不同的东西:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Next.js Tutorial</title>
    <meta name="description" content="This is a Next.js Tutorial" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="next-head-count" content="5" />
    <noscript data-n-css=""></noscript>
  </head>
  <body>
    <div id="__next">
      <div>
        <h2>This is the Home Page!</h2>
        <a href="/profile/1"><p>Go to the Profile Page of 1!</p></a>
      </div>
    </div>
  </body>
</html>
```

现在，这是一个简单的 Next.js 应用程序的源代码。我们看到整个内容，如 HTML、CSS 和 JavaScript。

这意味着，当 Next.js 应用程序加载时，我们在用户界面上看到的网络上的内容已经生成。而这是在服务器上发生的。这是因为 Next.js 利用了服务器端渲染（或 SSR），也被称为预渲染。

## 什么是 Pre-Rendering(预渲染)?

预渲染是服务器端渲染的一个例子，在浏览器上加载应用程序或网站之前，内容已经生成。

### 为什么使用 Pre-Rendering(预渲染)?

服务器端渲染（或预渲染）使应用程序的加载速度加快。这是因为我们将要看到的输出已经在服务器端生成。它不需要在浏览器上生成。这使得应用更快。

## 感谢你的阅读!

现在你应该知道 Next.js 和 React 的主要区别了。React 使用 CSR 或客户端渲染，其中 UI 元素是在浏览器上生成的。在 Next.js 中，用户界面来自服务器，提前生成。

如果你想开发电子商务、营销网站或简单的登陆页面等应用，你可以使用 Next.js。如果你想开发社交媒体应用程序或流媒体工具，如 Netflix 或 Youtube，你可以使用 React。

如果你想观看本博客的视频版本，你可以在这里找到它: [Next.js 框架课程--Next.js 的预渲染(Pre-Rendering)](https://youtu.be/3oV9SgC8ufI).

如果你想进一步了解 Next.js，我正在建立一个关于它的课程。这是一个播放列表，你将在其中学习所有这些 Next.js 的东西。它仍在进行中。请看这里: [https://youtube.com/playlist?list=PLWgH1O_994O_8Hg0-Q1xaD8ewXMx-fsBb](https://youtube.com/playlist?list=PLWgH1O_994O_8Hg0-Q1xaD8ewXMx-fsBb)
