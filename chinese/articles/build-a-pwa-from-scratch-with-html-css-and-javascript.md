> -   原文地址：[How to build a PWA from scratch with HTML, CSS, and JavaScript](https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/)
> -   原文作者：Ibrahima Ndaw
> -   译者：Assone
> -   校对者：

![How to build a PWA from scratch with HTML, CSS, and JavaScript](https://www.freecodecamp.org/news/content/images/size/w2000/2020/01/Group-1.png)

渐进式 Web 应用是一种能给传统 Web 应用带来原生应用体验的方式。使用 PWA ，我们能够使用移动应用的特性来增强我们的网站，从而提高可用性并提供良好的用户体验。

在这篇文章中，我们将使用 HTML、CSS 和 JavaScript 从零开始构建 PWA。我们要讨论的主题有：

-   [什么是渐进式 Web App ?][1]
-   [标记][2]
-   [样式][3]
-   [用 JavaScript 显示数据][4]
-   [Web 应用 Manifest][5]
-   [什么是 Service Worker?][6]
-   [缓存资源][7]
-   [获取资源][8]
-   [注册 Service Worker][9]
-   [最后的想法][10]
-   [下一步][11]

那么，让我们从一个重要的问题开始：PWA 到底是什么？

## 什么是渐进式 Web App ?

渐进式 Web 应用是一种通过使用现代 Web 能力向用户提供类似于应用程序的体验的 Web 应用程序。总而言之，它只是一个运行在浏览器上且使用了一些增强特性的普通网站。它赋予你以下的能力：

-   安装到你的手机桌面上
-   离线访问
-   使用摄像头
-   通知推送
-   后台同步

还有更多等等。

但是，为了将传统的 Web 应用转换成 PWA，我们必须对其做出一些小调整，添加一个 manifest 文件和 service worker。

别担心这些新术语，我们将会在下面介绍它们。

首先，我们必须要构建传统的 Web 应用，所以让我们从编写结构开始吧。

## 标记

这个 HTML 文件十分简单，我们只需要将所有内容放置在 `main` 标签内即可

-   在 `index.html`

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="css/style.css" />
        <title>Dev'Coffee PWA</title>
    </head>
    <body>
        <main>
            <nav>
                <h1>Dev'Coffee</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                </ul>
            </nav>
            <div class="container"></div>
        </main>
        <script src="js/app.js"></script>
    </body>
</html>
```

然后用 `nav` 标签来创建一个导航栏。用 `div` 标签来创建一个 class 为 `container` 的元素来放置剩下的卡片，稍后我们将使用 Javascript 来添加它们。

现在我们把这些都弄好了，让我们用 CSS 来给它加点样式。

## 样式

向往常一样，我们需要先引入一些字体。然后我们再重置某些默认样式。

-   在 `css/style.css`

```css
@import url('https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background: #fdfdfd;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
}
main {
    max-width: 900px;
    margin: auto;
    padding: 0.5rem;
    text-align: center;
}
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
ul {
    list-style: none;
    display: flex;
}
```

然后我们限制 `main` 元素的最大宽度为 `900px`让它在大屏幕上看起来有更好的呈现方式。

对于导航栏 ，我希望 logo 在左边，链接在右边。所以对于 `nav` 标签，将其设为 flex 容器后，我们使用 `justify-content: space-between;` 将其对齐。

-   在 `css/style.css`

```css
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 1rem 0;
}
.card {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 15rem auto;
    height: 15rem;
    background: #fff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 10px;
    margin: auto;
    overflow: hidden;
}
.card--avatar {
    width: 100%;
    height: 10rem;
    object-fit: cover;
}
.card--title {
    color: #222;
    font-weight: 700;
    text-transform: capitalize;
    font-size: 1.1rem;
    margin-top: 0.5rem;
}
.card--link {
    text-decoration: none;
    background: #db4938;
    color: #fff;
    padding: 0.3rem 1rem;
    border-radius: 20px;
}
```

我们有几个卡片，所以 container 元素将使用 grid 布局来显示。然后添加属性 `grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr))`，我们现在能够使卡片具有响应式。这样的话如果有足够空间它们将最少具有 `15rem` 的宽度（如果没有则足够的空间则使用 `1fr`）。

然后为了使它们更加好看，我们在 `.card` 类上添加了双倍的阴影效果，并在 `.card--avatar` 上使用 `object-fit: cover` 属性为了防止图像的拉伸

现在它看起来更好看了，但是我们仍然没有数据显示。

让我们在下一节来解决这个问题。

## 使用 JavaScript 显示数据

请注意，我使用了较大的图片，加载它会需要一些时间。这将以最好的方式向你展示 service workers 的能力。

正如我之前说过用 Class 名为 `.container` 的元素保存我们的卡片，因此我们需要选择它。

-   在 `js/app.js`

```javascript
const container = document.querySelector('.container');
const coffees = [
    { name: 'Perspiciatis', image: 'images/coffee1.jpg' },
    { name: 'Voluptatem', image: 'images/coffee2.jpg' },
    { name: 'Explicabo', image: 'images/coffee3.jpg' },
    { name: 'Rchitecto', image: 'images/coffee4.jpg' },
    { name: ' Beatae', image: 'images/coffee5.jpg' },
    { name: ' Vitae', image: 'images/coffee6.jpg' },
    { name: 'Inventore', image: 'images/coffee7.jpg' },
    { name: 'Veritatis', image: 'images/coffee8.jpg' },
    { name: 'Accusantium', image: 'images/coffee9.jpg' },
];
```

然后，我们创建一个包含名字和图片的卡片数组。

-   在 `js/app.js`

```javascript
const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += &lt;div class="card"&gt;
                &lt;img class="card--avatar" src=</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>image<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);"> /&gt;
                &lt;h1 class="card--title"&gt;</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>name<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">&lt;/h1&gt;
                &lt;a class="card--link" href="#"&gt;Taste&lt;/a&gt;
              &lt;/div&gt;)
  )
  container.innerHTML = output
}

```

有了上面的代码，我们现在能够通过遍历数组并将其显示在 HTML 上。为了保证工作正常，我们等待 DOM （文档对象模型）内容加载完成再执行 `showCoffees` 方法。

我们已经做了很多了，但现在我们只有一个传统的 Web 应用。所以，让我们在下一节通过引入一些 PWA 的特性来改变这种情况。

![super-excited](https://media.giphy.com/media/l3V0dy1zzyjbYTQQM/source.gif)

## Web 应用 Manifest

web 应用 manifest 是一个简单的 JSON 文件，它向浏览器告知你的 web 应用。它告诉浏览器在移动设备或桌面安装时该如何表现。而要显示”添加到主屏幕“的提示，则需要 web 应用 manifest。

现在我们知道 web manifest 是什么了，让我们在根目录创建一个名为 `manifest.json` 的新文件（你得这样命名）。然后在里面添加这些代码。

-   在 `manifest.json`

```javascript
{
  "name": "Dev'Coffee",
  "short_name": "DevCoffee",
  "start_url": "index.html",
  "display": "standalone",
  "background_color": "#fdfdfd",
  "theme_color": "#db4938",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/images/icons/icon-72x72.png",
      "type": "image/png", "sizes": "72x72"
    },
    {
      "src": "/images/icons/icon-96x96.png",
      "type": "image/png", "sizes": "96x96"
    },
    {
      "src": "/images/icons/icon-128x128.png",
      "type": "image/png","sizes": "128x128"
    },
    {
      "src": "/images/icons/icon-144x144.png",
      "type": "image/png", "sizes": "144x144"
    },
    {
      "src": "/images/icons/icon-152x152.png",
      "type": "image/png", "sizes": "152x152"
    },
    {
      "src": "/images/icons/icon-192x192.png",
      "type": "image/png", "sizes": "192x192"
    },
    {
      "src": "/images/icons/icon-384x384.png",
      "type": "image/png", "sizes": "384x384"
    },
    {
      "src": "/images/icons/icon-512x512.png",
      "type": "image/png", "sizes": "512x512"
    }
  ]
}

```

最后，这个 JSON 文件具有一些可填和必填的属性。

name: 当浏览器显示启动画面时，在屏幕上显示的名称。

short_name: 你的 app 在主屏幕上显示的快捷方式的名称。

start_url: 当你的 app 打开时，所要显示的页面。

display: 告诉浏览器如何显示你的 app。有几种模式可以选择，如`minimal-ui`、`fullscreen`、`browser`等等。这里我们使用`standalone`模式来隐藏与浏览器有关的任何内容。

background_color: 当浏览器显示启动画面时，指定屏幕的背景颜色。

theme_color: 当我们打开 app 的时候指定状态栏的背景颜色。

orientation: 告诉浏览器显示 app 时的方向。

icons： 当浏览器显示启动画面时，在屏幕上显示的图标。我们在这里使用了所有尺寸以及任何设备的首选图标，但是你只能选择一到两个，由你决定。

现在我们有了一个 web 应用的 manifest，让我们来将它添加到 html 文件中。

-   在 `index.html` (head 标签中)

```html
<link rel="manifest" href="manifest.json" />
<!-- ios support -->
<link rel="apple-touch-icon" href="images/icons/icon-72x72.png" />
<link rel="apple-touch-icon" href="images/icons/icon-96x96.png" />
<link rel="apple-touch-icon" href="images/icons/icon-128x128.png" />
<link rel="apple-touch-icon" href="images/icons/icon-144x144.png" />
<link rel="apple-touch-icon" href="images/icons/icon-152x152.png" />
<link rel="apple-touch-icon" href="images/icons/icon-192x192.png" />
<link rel="apple-touch-icon" href="images/icons/icon-384x384.png" />
<link rel="apple-touch-icon" href="images/icons/icon-512x512.png" />
<meta name="apple-mobile-web-app-status-bar" content="#db4938" />
<meta name="theme-color" content="#db4938" />
```

如你所看到的，我们在 head 标签里引入了`manifest.json`文件。并且还引入了一些其他文件来处理 IOS 上的图标显示、状态栏颜色和主题色。

现在我们可以深入探讨最后一步并介绍 service worker。

## 什么是 Service Worker?

需要注意的是，由于 service worker 能够访问并处理请求，所以 PWA 仅在 https 上运行。因此安全是必须的。

service worker 是浏览器在后台的独立线程中运行的脚本。这意味着它将在不同的地方运行，并且与你的页面完全隔离，这就是为什么它不能操纵你的 DOM 元素的原因。

不过，它的功能超级强大。service worker 能拦截并处理网络请求，管理缓存以实现离线访问或者向你的用户推送通知。

![wow](https://media.giphy.com/media/5VKbvrjxpVJCM/source.gif)

所以让我们在根目录下创建第一个 service worker，并命名为`serviceWorker.js`(名称由你决定)。但是你必须将它放在根目录上，这样你就不会把它的范围限制在一个文件夹里。

### 资源缓存

-   在 `serviceWorker.js`

```javascript
const staticDevCoffee = 'dev-coffee-site-v1';
const assets = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/app.js',
    '/images/coffee1.jpg',
    '/images/coffee2.jpg',
    '/images/coffee3.jpg',
    '/images/coffee4.jpg',
    '/images/coffee5.jpg',
    '/images/coffee6.jpg',
    '/images/coffee7.jpg',
    '/images/coffee8.jpg',
    '/images/coffee9.jpg',
];
```

这段代码看起来有点吓人，但它只是 JavaScript 而已（所以别担心）。

我们声明了缓存的名称`staticDevCoffee`和要储存在缓存中的资源。为了执行这些操作，我们需要给`self`添加一个监听器。

`self`就是 service worker 本身。它能够让我们监听生命周期中的事件并做一些对应的事情。

service worker 有几个生命周期，其中之一是 `install` 事件。当 service worker 被安装时，它就会运行。它在 worker 执行后立即触发，而且每个 service worker 只调用一次。

当`install`事件触发时，回调函数将被调用，通过这个回调函数我们可以访问`event`对象。

在浏览器上缓存某些内容的时候可能需要一些时间才能完成，因为它是异步的。

为了处理这个问题，我们需要使用`waitUntil()`。正如你所猜的这样，它会等待操作完成。

一旦 cache API 准备就绪，我们可以执行`open()`方法，并通过将缓存名称当作参数传递给`caches.open(staticDevCoffee)`来创建我们的缓存。

它会返回一个 promise，将帮助我们使用`cache.addAll(assets)`将我们的资源储存在缓存中。

![image-cache](https://drive.google.com/uc?id=1ynBQRQ00wHo5J6CnjfLCX3b3UNiSrGqZ)

希望你还能听懂我的话。

![desesperate](https://media.giphy.com/media/OQEcw90jACeU8/source.gif)

现在，我们已经顺利的把资源缓存到浏览器中。而下次我们加载页面时，如果我们处于离线状态， service worker 将会处理该请求并获取缓存。

所以，让我们取回我们的缓存吧。

### 获取资源

-   在 `serviceWorker.js`

```javascript
self.addEventListener('fetch', (fetchEvent) => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {
            return res || fetch(fetchEvent.request);
        })
    );
});
```

Here, we use the `fetch` event to, well, get back our data. The callback gives us access to `fetchEvent`. Then we attach `respondWith()` to prevent the browser's default response. Instead it returns a promise because the fetch action can take time to finish.

这里，我们使用`fetch`事件来获取我们的数据，通过回调函数我们可以访问`fetchEvent`。我们添加`respondWith()` 来阻止浏览器的默认响应。然后返回一个 promise，因为 fetch 操作可能需要一些时间才能完成。

当一个缓存准备就绪时，我们将使用 `caches.match(fetchEvent.request)`。它将检查缓存中是否有与`fetchEvent.request`匹配的内容。顺便一提，`fetchEvent.request`只是我们的 assets 数组。

然后，它会返回一个 promise。如果缓存存在，我们可以直接返回它，否则则返回最初的 fetch。

现在， 我们的资源可以被 service worker 缓存并获取，这将大大的优化了我们的图片的加载时间。

最重要的是，它使我们的应用可以在离线模式下使用。

但现在 service worker 还不能工作，我们还需要在我们的项目中注册它。

![let-s-do-it](https://media.giphy.com/media/Z9EvIRmLEOS3JNFeVb/source.gif)

## 注册 Service Worker

-   在 `js/app.js`

```javascript
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker
            .register('/serviceWorker.js')
            .then((res) => console.log('service worker registered'))
            .catch((err) => console.log('service worker not registered', err));
    });
}
```

在这里，我们先检查当前浏览器是否支持`serviceWorker`（因为并未所有的浏览器都支持它）。

然后，我们将监听页面的 load 事件来注册我们的 service worker。通过传递文件名`serviceWorker.js`作为参数给`navigator.serviceWorker.register()`来作为注册 service worker 的参数。

通过上述步骤，我们现在已经将传统的 web 应用转换成为 PWA。

![we-did-it](https://media.giphy.com/media/3o6ZtlGkjeschymLNm/source.gif)

## 最后的想法

在本文中，我们已经看到了 PWA 的神奇之处。通过添加一个 web 应用 manifest 和一个 service worker，确实提高了我们传统 web 应用的用户体验。这是因为 PWA 快速、安全、可靠，更重要的是它支持离线模式。

现在很多的框架都已经为我们设置了好了 service worker 文件。但是知道如何用 Vanilla JavaScript 来实现它可以帮你理解 PWA。

而且你还可通过动态缓存资源或者限制缓存大小等方法更进一步的使用 service worker。

感谢你阅读本文。

你可以在线上[浏览][12]，源代码在[这里][13]。

在我的博客上阅读我的更多文章。

## 下一步

[Web Manifest 文档][15]

[Service Worker 文档][16]

[Web Manifest 生成器][17]

[浏览器支持][18]

[1]: https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/#what-is-a-progressive-web-app
[2]: https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/#markup
[3]: https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/#styling
[4]: https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/#show-data-with-javascript
[5]: https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/#web-app-manifest
[6]: https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/#what-is-a-service-worker
[7]: https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/#cache-the-assets
[8]: https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/#fetch-the-assets
[9]: https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/#register-the-service-worker
[10]: https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/#final-thoughts
[11]: https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/#next-steps
[12]: https://devcoffee-pwa.netlify.com/
[13]: https://github.com/ibrahima92/pwa-with-vanilla-js
[14]: https://www.ibrahima-ndaw.com/blog/how-to-build-pwa-with-javascript/
[15]: https://developers.google.com/web/fundamentals/web-app-manifest
[16]: https://developers.google.com/web/fundamentals/primers/service-workers
[17]: https://app-manifest.firebaseapp.com/
[18]: https://caniuse.com/#search=service%20worker
