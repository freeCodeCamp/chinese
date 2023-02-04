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

你需要使用`<script>`元素来加载和执行这些代码。`<script>`元素中的 `src` 属性写上你要加载的 JavaScript 文件。

```html
<script src="some-script.js"></script>
```

最后，你需要确保将 `<script>` 元素放在 HTML 文件的 `<head>` 元素内或 `<body>` 元素的后面。

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

在 `<head>` 或 `<body>` 元素内指定 `<script>` 元素有不同的结果。我们将很快了解它们。

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

Look at the `<head>` section of the HTML file. We load three scripts here.

**script-1.js**: This file contains the JavaScript code responsible for the DOM updates. The `init()` method picks up random participant and gift values to render on the DOM nodes. The same init method is called when clicking the `Play` button.

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

**script-2.js**: This JavaScript file contains a smaller amount of code to set a copyright text into the footer element.

```js
const addToFooter = () => {
  const footerElem = document.getElementById('footer-id');
  footerElem.innerText = `CopyRight ${new Date().getFullYear()} @tapasadhikary`;
};

addToFooter();
```

**script-3.js**: The final JavaScript file contains code that doesn't manipulate the DOM but brings additional functionality to the app, like AD blocks, Analytics, Chatbot, and so on.

The bottom line is that we have two scripts that manipulate the DOM, and one is a tiny small one. The third one doesn't manipulate the DOM and brings some independent functionality to the app.

### The issue with loading a JavaScript file in the <head>

So what happens when we load these scripts in the `<head>` section of the HTML file, as we have seen above? Unfortunately, we will not see any values set to the DOM, making the page look incomplete.

Look at the image below that clearly shows the errors of finding the DOM elements as `null` from the `script-1.js` and `script.js`. Also, we do not see the gift image and the names of the participants (Santa and the child).

![image-18](https://www.freecodecamp.org/news/content/images/2023/01/image-18.png)

Error in Rendering

This happens because the DOM was not ready when the scripts were downloaded and executed.

The browser will parse the HTML document from top to bottom. As it encounters the scripts in the `<head>` section, the rest of the DOM element creations will be paused for the scripts to download and execute. Once done, the remaining HTML will be processed to create the DOM elements.

### The dirty fix – move it to the body

So how do we fix this problem? One obvious but not-so-good fix is to move the download and execution of the script to the end of the `<body>` tag. It will ensure that all the DOM elements are constructed and ready before we download and execute the scripts.

Guess what? The app works this time without any errors.

![image-19](https://www.freecodecamp.org/news/content/images/2023/01/image-19.png)

The Dirty Fix Worked

But why is it a dirty fix? The interactiveness and data rendering wait much longer, even after the DOM constructions. Many of our users may not use a high-speed 4G/5G network. A large script will take a long time to download and execute. The downloading time may get so long that the end users may get frustrated and decide to quit using the app.

The below image shows a higher load time when we run the same app with network throttling (3G network simulation) and disabling cache. As you can see, the DOM content was loaded much before the final loading occurred.

![image-20](https://www.freecodecamp.org/news/content/images/2023/01/image-20.png)

Here is a knowledge byte for you. You can use the browser DevTools to simulate how your app may load on a slower network. All our users may not have the 4G/5G network. Please check this tweet for more details.

> With browser Devtools, you can simulate how your app may load in a slower network(All our users may not have 4G/5G)
>
> \- You can set a Network Throttling(3G, Custom)  
> \- Disable Browser Case  
> \- Inspect Load time
>
> Worth exploring further. [pic.twitter.com/KgvKL6fcUE](https://t.co/KgvKL6fcUE)
>
> — Tapas Adhikary (@tapasadhikary) [December 23, 2022](https://twitter.com/tapasadhikary/status/1606205278969630720?ref_src=twsrc%5Etfw)

[Follow me on Twitter](https://twitter.com/tapasadhikary) for the daily knowledge bytes like this.

### Let's understand the problem visually

Alright, let's understand these two situations visually now. A picture is worth a thousand words, after all. The image below shows both situations of loading the script files in the `<header>` tag and at the end of the `<body>` tag.

In the first case, we see the building DOM is paused because the scripts were getting downloaded and executed. Once done, the DOM building resumes and completes. So it is evident that, when the browser was executing the scripts, a good portion of DOM elements were not created to set values to them.

In the other case, where we load the scripts at the end of the `<body>` tag, the DOM elements are fully ready. In the end, the browser downloads and executes the scripts.

Everything worked this time because when the script was executed, the DOM was ready to update the content. The total time required for the page to become fully operational is driven by when the scripts download and execution completes at the end.

In both cases, the sequence of the scripts specified matters. The scripts will be downloaded and executed in the same sequence specified in the HTML document.

![flow-1](https://www.freecodecamp.org/news/content/images/2023/01/flow-1.png)

Script in Head vs Body

## What's the `async` Attribute and How Does it Help with Page Loading?

The `async` attribute of the `<script>` tag ensures that other script downloads don't wait for an async script to download and vice versa. The browser also doesn't block the DOM content creation when it encounters the async script. The async scripts gets downloaded in the background and execute once done.

The async scripts execute in the `load-first` order. Even if a smaller async script is specified lower in order in the HTML file, it may execute before all other scripts.

You must be careful when you specify the `async` attribute to a script that performs any DOM manipulation. Let's experience a tricky scenario using our `Secret Santa Game`!

Let's add the `async` attribute to all our scripts without changing their placement order in the `<head>` of the HTML document. Remember, the `script-1.js` and `script-2.js` both manipulate the DOM content, and the `script-2.js` is smaller in size. The `script-3` is another small script which doesn't perform any DOM manipulation.

```js
<script async src="./js/script-1.js"></script>
<script async src="./js/script-2.js"></script>
<script async src="./js/script-3.js"></script>
```

Now when you run the application on a slow network, you can see that the loading sequence of the scripts changed. The `script-2`, which is small in size, gets downloaded first and executes, then the `script-3`, and at last the `script-1`. So, their order in the HTML document doesn't matter here.

![image-21](https://www.freecodecamp.org/news/content/images/2023/01/image-21.png)

That's precisely what happened with our application. The copyright notice below the `Play` button doesn't render. We learn from the error that the `footer` element was not available in DOM for the script to add the desired texts.

![image-22](https://www.freecodecamp.org/news/content/images/2023/01/image-22.png)

Now let's look into the download and execution of the script with the `async` attribute.

As you can see, the browser will not pause while the script gets downloaded. The script starts executing right after it gets downloaded. There is no guarantee that the relevant DOM is loaded into the browser when an async script executes.

![flow-3](https://www.freecodecamp.org/news/content/images/2023/01/flow-3.png)

Introducing the async attribute

The bottom line is not to use the `async` attribute with scripts that manipulate the DOM. Use `async` with scripts external to the application which do not manipulate the DOM. Scripts like libraries, chatbots, analytics tools, and so on are suitable cases where you must consider using the `async` attribute.

## What's the `defer` Attribute and How Does it Help with Page Loading?

The last and most effective way of loading a script is by using the `defer` attribute. The `defer` attribute works mostly like the `async` attribute but has a few key differences.

```js
<script defer src="./js/script-1.js"></script>
<script defer src="./js/script-2.js"></script>
<script defer src="./js/script-3.js"></script>
```

Like `async`, `defer` downloads the script in the background, but it will never interrupt the page rendering while it executes.

Look at the image below, where we have added the download and execution flow of the `defer` attribute.

![flow](https://www.freecodecamp.org/news/content/images/2023/01/flow.png)

Introducing the defer attribute

As you can see, the script with the `defer` attribute downloads parallel to the page document. Still, it executes only after the document is loaded. If there are multiple scripts with the `defer` attributes, they all execute in the sequence before the `DOMContentLoaded` event.

This is the most significant difference with the `async`, where the scripts execute as soon as they load without following any order.

The bottom line is to use the `defer` attribute with scripts that manipulate the DOM. It will improve page loading by downloading the scripts in the background and execute after the DOM is ready.

## Here is a Quick Recap

Let's do a quick recap of things we learned in this article:

- The best place for the `<script>` tag in an HTML document is inside the `<head>...</head>` tags. However, you may encounter issues in setting DOM content.
- Placing the `<script>` tag at the end of the `<body>` tag is an ideal way of handling scripts.
- HTML provides the `async` and `defer` attributes to load the page faster and minimize the larger script loading lag by downloading them in the background.
- Use `async` for the external scripts that don't perform DOM manipulations. The `async` doesn't guarantee the page rendering interruption when the script executes.
- Use `defer` for all the scripts that perform DOM manipulations. The scripts with the `defer` attribute execute in sequence at the end of the page load.

## Before We End...

That's all for now. I hope you found this article informative and insightful. All the source code used in this article can be found on [this GitHub repository](https://github.com/atapas/youtube/tree/main/javascript/load-async-defer).

Let's connect.

- [SUBSCRIBE](https://www.youtube.com/tapasadhikary?sub_confirmation=1) to my YouTube channel if you want to learn JavaScript, ReactJS, Node.js, Git, and all about Web Development in a practical way.
- [Follow on Twitter](https://twitter.com/tapasadhikary) or [LinkedIn](https://www.linkedin.com/in/tapasadhikary/) if you don't want to miss the daily dose of Web Development and Programming Tips.
- Check out my Open Source work on [GitHub](https://github.com/atapas).
- Follow on [Showwcase](https://www.showwcase.com/atapas398) for community-based learning.

See you soon with my next article. Until then, please take care of yourself, and stay happy.
