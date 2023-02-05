> - 原文地址：[JavaScript Performance – How to Improve Page Speed with async and defer](https://www.freecodecamp.org/news/javascript-performance-async-defer/)
> - 原文作者：[TAPAS ADHIKARY](https://www.freecodecamp.org/news/author/tapas/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![JavaScript Performance – How to Improve Page Speed with async and defer](https://www.freecodecamp.org/news/content/images/size/w2000/2023/01/freeCodeCamp-Cover.png)

在 web 开发中, JavaScript 给你的网页带来了交互性和动态效果。虽然 HTML 和 CSS 负责网页的结构和美学，但如果没有 JavaScript 在背后工作，它们将只是可用的。

你可以通过几种方式在 HTML 文件中引入 JavaScript 代码。最标准的方法是将 JavaScript 代码放在一个以`.js`为扩展名的单独文件中，然后将该文件加载到 HTML 文件中，下载并执行 Javascript 代码。

在这篇文章中，你将学习将 JavaScript 文件加载到 HTML 中的最有效方法，以提高应用程序的页面加载速度。我们将深入浅出地了解两个特殊的 HTML 属性`async`和`defer`，以及它们如何提高页面加载速度。

如果你也喜欢从视频内容中学习，这篇文章也提供 [视频教程](https://www.youtube.com/embed/4sBfx3ISBdM?feature=oembed): 🙂

## How Do We Load Scripts into HTML?

让我们先了解一下从外部文件加载 JavaScript 代码的基本原理。假设我们有一个叫 `some-script.js` 的文件（注意文件扩展名，是 `.js`，JavaScript 的缩写），里面全是 JavaScript 代码。

你需要使用`<script>`标签来加载和执行这些代码。`<script>`标签中的 `src` 属性写上你要加载的 JavaScript 文件。

```html
<script src="some-script.js"></script>
```

最后，你需要确保将 `<script>` 标签放在 HTML 文件的 `<head>` 标签内或 `<body>` 标签的后面。

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Some Title</title>
    <link rel="stylesheet" href="./styles/main.css" />

    <script src="some-script.js"></script>
  </head>
  <body></body>
</html>
```

在 `<head>` 或 `<body>` 标签内指定 `<script>` 标签有不同的结果。我们将很快了解它们。

## Why Care about Script Loading?

如果你的应用程序是一个很小的应用程序，处理几 KB 的脚本文件，你只需要关心一下页面速度和脚本加载。

但你可能会处理由第三方库或你在现实生活中编写的较大的脚本。你必须确保页面的加载速度不会因此而降低。

但是，请等一下! 较大的脚本文件是如何降低页面加载速度的？让我们通过一个名为 `秘密圣诞老人(The Secret Santa Game)` 的简单应用的演示来了解。

### The Secret Santa Game – Page Speed Demo

`圣诞老人的秘密(The Secret Santa Game)` 是一个简单的游戏，可以选择一个圣诞老人，一个孩子，以及圣诞老人要送给孩子的礼物。每当你点击 "播放 "按钮，就会选择一个新的圣诞老人、孩子和礼物。

![Screen-Recording-2023-01-05-at-5.14.51-PM](https://www.freecodecamp.org/news/content/images/2023/01/Screen-Recording-2023-01-05-at-5.14.51-PM.gif)

圣诞老人的秘密

在网页上显示礼物的图像以及圣诞老人和孩子的名字。它有一个带有文字 `play` 的按钮和一个显示版权文本的页脚。

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Secret Santa - V1</title>
    <link rel="stylesheet" href="./styles/main.css" />

    <script src="./js/script-1.js"></script>
    <script src="./js/script-2.js"></script>
    <script src="./js/script-3.js"></script>
  </head>
  <body>
    <div class="container">
      <header>
        <h1>Secret Santa Game</h1>
      </header>
      <div class="content">
        <p id="gift-id" class="gift"></p>
        <p style="font-size: 3rem;">
          🎅 <strong>Santa</strong>: <span id="santa-id"></span>
        </p>
        <p style="font-size: 3rem;">
          👶 <strong>Child</strong>: <span id="child-id"></span>
        </p>
        <button class="play-btn" onclick="init()">Play</button>
      </div>
      <footer id="footer-id"></footer>
    </div>
  </body>
</html>
```

看一下 HTML 文件的 `<head>` 标签。我们在这里加载三个脚本。

**script-1.js**: 这个文件包含负责 DOM 更新的 JavaScript 代码。`init()`方法提取随机的参与者和礼物值，在 DOM 节点上呈现。当点击 `play` 按钮时，同样的 init 方法被调用。

```js
const gifts = ['hoodie', 'moon-light', 'perfumes', 'watch', 'studio-light'];

const participants = ['Alex', 'Bob', 'Carl', 'Dell', 'Emle'];

const getRandomElem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const init = () => {
  const giftElem = document.getElementById('gift-id');
  const childElem = document.getElementById('child-id');
  const santaElem = document.getElementById('santa-id');

  const child = getRandomElem(participants);
  const santa = getRandomElem(participants.filter((elem) => elem !== child));
  const gift = getRandomElem(gifts);

  console.log(`${santa} to give ${gift} to ${child}`);

  childElem.innerText = '';
  childElem.innerText = child;
  santaElem.innerText = '';
  santaElem.innerText = santa;

  giftElem.innerHTML = '';
  const img = document.createElement('img');
  img.src = `./gift-images/${gift}.png`;
  img.alt = gift;
  img.width = '300';
  img.height = '300';
  giftElem.appendChild(img);
};

init();
```

**script-2.js**: 这个 JavaScript 文件包含一个较小的代码，用于将版权文本设置到页脚标签(footer element)中。

```js
const addToFooter = () => {
  const footerElem = document.getElementById('footer-id');
  footerElem.innerText = `CopyRight ${new Date().getFullYear()} @tapasadhikary`;
};

addToFooter();
```

**script-3.js**: 最后的 JavaScript 文件不包含操作 DOM 的代码，但为应用程序带来额外的功能，如 AD 、分析、聊天工具等。

前面的两个脚本控制 DOM 的脚本，其中一个是很小的一个。第三个不控制 DOM，并给应用程序带来一些独立的功能。

### The issue with loading a JavaScript file in the <head>

那么，当我们在 HTML 文件的 `<head>` 标签里加载这些脚本时，会发生什么？正如我们在上面看到的那样？不幸的是，我们不会看到任何设置在 DOM 中的值，使页面看起来不完整。

看看下面的图片，它清楚地显示了从`script-1.js`和`script.js`中发现 DOM 标签为`null`的错误（脚本文件先于想控制的 DOM 标签加载，并运行，自然就找不到）。另外，我们没有看到礼物图片和参与者的名字（圣诞老人和孩子）

![image-18](https://www.freecodecamp.org/news/content/images/2023/01/image-18.png)

渲染时出错

发生这种情况是因为在下载和执行脚本的时候，DOM 还没有准备好。

浏览器会从上到下解析 HTML 文档。当它遇到`<head>`部分的脚本时，其余的 DOM 标签的创建将暂停，以便脚本的下载和执行。一旦完成，剩余的 HTML 将被处理以创建 DOM 标签。

### The dirty fix – move it to the body

那么，我们该如何解决这个问题呢？一个显而易见但不太妙的解决方法是把下载和执行脚本的工作移到`<body>`标签的后面。这将确保在我们下载和运行脚本之前，所有的 DOM 标签都已构建并准备就绪。

你猜怎么着？这次应用程序可以正常工作，没有任何错误。

![image-19](https://www.freecodecamp.org/news/content/images/2023/01/image-19.png)

肮脏的补救措施奏效了

但为什么说这是一个肮脏的修复？交互性和数据渲染等待的时间更长，甚至在 DOM 构造之后。我们的许多用户可能没有使用高速的 4G/5G 网络。一个大的脚本将需要很长的时间来下载和执行。下载时间可能会变得如此之长，以至于终端用户可能会感到沮丧并决定放弃使用该应用程序。

下面的图片显示，当我们在网络节流（3G 网络模拟）和禁用缓存的情况下运行同一个应用程序时，加载时间较长。正如你所看到的，DOM 内容在最终加载发生之前已经加载了很多。

![image-20](https://www.freecodecamp.org/news/content/images/2023/01/image-20.png)

这里有一个开发技巧。你可以使用浏览器的 DevTools 来模拟你的应用程序在较慢的网络上的加载情况。我们所有的用户可能没有 4G/5G 的网络。请查看此推文以了解更多细节。

> 使用浏览器开发工具，你可以模拟你的应用程序在一个较慢的网络中如何加载（我们所有的用户可能没有 4G/5G）。
>
> \- 你可以设置一个网络节流（3G，自定义）
> \- 禁用浏览器缓存
> \- 检查加载时间
>
> 值得进一步探索。 [pic.twitter.com/KgvKL6fcUE](https://t.co/KgvKL6fcUE)
>
> — Tapas Adhikary (@tapasadhikary) [December 23, 2022](https://twitter.com/tapasadhikary/status/1606205278969630720?ref_src=twsrc%5Etfw)

[在 Twitter 上关注我](https://twitter.com/tapasadhikary)，每日获取新知识。

### Let's understand the problem visually

好吧，让我们现在直观地了解这两种情况。毕竟，一张图片胜过千言万语。下面的图片显示了在`<header>` 标签和`<body>` 标签末尾加载脚本文件的两种情况。

在第一种情况下，我们看到 DOM 的构建被暂停了，因为脚本正在被下载和执行。一旦完成，DOM 的构建就恢复并完成了。因此，很明显，当浏览器执行脚本时，有相当一部分 DOM 标签没有被创建，没有对它们进行控制。

在另一种情况下，我们在`<body>`标签的结尾处加载脚本，DOM 内容已经完全准备好。最后，浏览器下载并执行了这些脚本。

这次一切正常，因为当脚本执行时，DOM 已经准备好更新内容。页面完全运行所需的总时间是由脚本下载和运行最后完成的时间。

在这两种情况下，指定脚本的顺序很重要。脚本将按照 HTML 文档中指定的相同顺序下载和执行。

![flow-1](https://www.freecodecamp.org/news/content/images/2023/01/flow-1.png)

Script 放在 Head，Body 的对比 

## What's the `async` Attribute and How Does it Help with Page Loading?

`<script>`标签的`async`属性确保其他脚本下载不会等待该脚本的下载。浏览器在遇到该脚本时也不会阻止 DOM 内容的创建。该脚本在后台被下载，一旦完成就会执行。

该脚本以 `先加载(load-first)` 的顺序执行。即使一个较小的 async 脚本在 HTML 文件中被指定为较低的顺序(在 html 文件中，放在后面的位置)，它也可能在所有其他脚本之前执行。

当你为一个执行任何 DOM 操作的脚本添加 `async` 属性时，你必须小心。让我们用我们的 `圣诞老人的秘密(The Secret Santa Game)` 来体验一个棘手的场景吧

让我们为所有的脚本添加`async`属性，而不改变它们在 HTML 文档的`<head>`中的位置顺序。记住，`script-1.js`和`script-2.js`都是对 DOM 内容进行操作的，`script-2.js`的大小较小。`script-3`是另一个小脚本，不进行任何 DOM 操作。

```js
<script async src="./js/script-1.js"></script>
<script async src="./js/script-2.js"></script>
<script async src="./js/script-3.js"></script>
```

现在，当你在一个慢速网络上运行该应用程序时，你可以看到脚本的加载顺序发生了变化。大小较小的 `script-2`,首先被下载并执行，然后是 `script-3`，最后是 `script-1`。所以，它们在 HTML 文档中的顺序在这里并不重要。

![image-21](https://www.freecodecamp.org/news/content/images/2023/01/image-21.png)

这正是我们的应用程序所发生的情况。在 "播放 "按钮下面的版权声明没有呈现。我们从错误中得知，DOM 中的`footer`元素无法让脚本添加所需的文本。

![image-22](https://www.freecodecamp.org/news/content/images/2023/01/image-22.png)

现在我们来看看使用`async`属性的脚本的下载和执行情况。

正如你所看到的，当脚本被下载时，浏览器不会停顿。脚本在被下载后就开始执行了。当一个 `异步（async）`脚本执行时，并不能保证相关的 DOM 已经加载到浏览器中。

![flow-3](https://www.freecodecamp.org/news/content/images/2023/01/flow-3.png)

Async 属性的介绍

原则是不要在操作 DOM 的脚本中使用`async`属性。在应用程序外部不操作 DOM 的脚本中使用`async`。像库、聊天机器人、分析工具等脚本是必须考虑使用`async`属性的合适情况。

## What's the `defer` Attribute and How Does it Help with Page Loading?

最后一种也是最有效的加载脚本的方法是使用`defer`属性。`defer`属性的工作原理与`async`属性基本相同，但有几个关键的区别。

```js
<script defer src="./js/script-1.js"></script>
<script defer src="./js/script-2.js"></script>
<script defer src="./js/script-3.js"></script>
```

和`async`一样，`defer`在后台下载脚本，但它在执行时绝不会中断页面的渲染。

请看下面的图片，我们在这里添加了`defer`属性的下载和执行流程。

![flow](https://www.freecodecamp.org/news/content/images/2023/01/flow.png)

介绍 defer 属性

正如你所看到的，带有`defer`属性的脚本是与页面文档同时下载的。尽管如此，它仍然只在文档加载完毕后执行。如果有多个带有`defer`属性的脚本，它们都会在`DOMContentLoaded`事件之前按顺序执行。

这是与 `async` 最显著的区别，在 `async` 中，脚本在加载时立即执行，不遵循任何顺序。

原则是对操作 DOM 的脚本使用`defer`属性。它将通过在后台下载脚本并在 DOM 准备好后执行来改善页面加载。

## Here is a Quick Recap

让我们快速回顾一下我们在本文中学到的东西:

- 在 HTML 文档中，`<script>`标签的最佳位置是在`<head>...</head>`标签内。然而，你可能会在设置 DOM 内容时遇到问题。
- 将`<script>`标签放在`<body>`标签的后面，是处理脚本的理想方式。
- HTML 提供了`async`和`defer`属性，通过在后台下载，可以更快地加载页面，并将较大的脚本加载带来的延迟降到最低
- 对于不执行 DOM 操作的外部脚本，使用`async`。`async`不能保证脚本执行时页面渲染的中断。
- 对所有执行 DOM 操作的脚本使用`defer`。带有`defer`属性的脚本会在页面加载结束时依次执行。

## Before We End...

现在就说到这里。我希望你能发现这篇文章的信息量和洞察力。本文使用的所有源代码都可以在 [这个 GitHub 仓库](https://github.com/atapas/youtube/tree/main/javascript/load-async-defer)上找到。

交流方式。

- [订阅](https://www.youtube.com/tapasadhikary?sub_confirmation=1)到我的 YouTube 频道，如果你想以实用的方式学习 JavaScript、ReactJS、Node.js、Git 和所有关于 Web 开发的知识。
- 如果你不想错过每天的 Web 开发和编程技巧，请关注我的 [Twitter](https://twitter.com/tapasadhikary)或[LinkedIn]
- 可以在[GitHub](https://github.com/atapas)上查看我的开源代码。
- 在[Showwcase](https://www.showwcase.com/atapas398)上关注基于社区的学习。

我的下一篇文章很快就会与你见面。希望你保持快乐，身体健康。
