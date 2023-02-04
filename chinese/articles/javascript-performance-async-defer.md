> - 原文地址：[JavaScript Performance – How to Improve Page Speed with async and defer](https://www.freecodecamp.org/news/javascript-performance-async-defer/)
> - 原文作者：[TAPAS ADHIKARY](https://www.freecodecamp.org/news/author/tapas/)
> - 译者：
> - 校对者：

![JavaScript Performance – How to Improve Page Speed with async and defer](https://www.freecodecamp.org/news/content/images/size/w2000/2023/01/freeCodeCamp-Cover.png)

In web programming, JavaScript brings interactiveness and dynamic behaviour to your web pages. While HTML and CSS take care of the structure and aesthetics of the pages, they will be merely usable without JavaScript doing its job in the background.

You can include JavaScript code in the HTML file in several ways. The most standard approach is to keep the JavaScript code in a separate file with the `.js` extension and then load that file into the HTML file for the script to download and execute.

In this article, you will learn the most efficient way of loading a JavaScript file into HTML to improve the application's page loading speed. We will deep dive into visually understanding two special HTML attributes, `async` and `defer`, and how they help improve page loading.

If you like to learn from video content as well, this article is also available as a video tutorial here: 🙂

## How Do We Load Scripts into HTML?

Let's first understand the basics of loading JavaScript code from an external file. Assume we have a file called `some-script.js` (note the file extension. It's .js which stands for JavaScript) with all the JavaScript code.

You need to use the `<script>` tag to load and execute this code. The `src` attribute of the <script> tag points to the JavaScript file you want to load.

```html
<script src="some-script.js"></script>
```

Finally, you need to make sure you place the <script> tag either inside the `<head>` tag or at the end of the `<body>` tag of the HTML file.

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

Specifying the `<script>` tag inside the `<head>` or `<body>` tags has its own consequences. We will learn about them shortly.

## Why Care about Script Loading?

If your app is a tiny one dealing with script files of a few KBs, you will only care a little about the page speed and script loading.

But you may deal with larger scripts written by a 3rd party library or by you in real life. You have to make sure the page loading speed is not degraded because of this.

But hold on! How does the larger script file degrade the page loading speed? Let's understand with the demonstration of a simple app called `The Secret Santa Game`.

### The Secret Santa Game – Page Speed Demo

The `Secret Santa Game` is a simple game that selects a Santa, a Child, and the gift that Santa to give to the child. Every time you click the `Play` button, a new Santa, child, and gift are selected.

![Screen-Recording-2023-01-05-at-5.14.51-PM](https://www.freecodecamp.org/news/content/images/2023/01/Screen-Recording-2023-01-05-at-5.14.51-PM.gif)

The Secret Santa Game

The entry point HTML file creates the structure to show the image of the gift and the names of Santa and the child. It has a button with the text `Play` and a footer where we show a copyright text.

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
