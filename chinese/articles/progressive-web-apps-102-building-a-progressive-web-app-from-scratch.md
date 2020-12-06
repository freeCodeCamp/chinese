> -   原文地址：[Progressive Web Apps 102: Building a Progressive Web App from scratch](https://www.freecodecamp.org/news/progressive-web-apps-102-building-a-progressive-web-app-from-scratch-397b72168040/)
> -   原文作者：Shruti Kapoor
> -   译者：azzinoths0905
> -   校对者：

![Progressive Web Apps 102: Building a Progressive Web App from scratch](https://cdn-media-1.freecodecamp.org/images/0*q57QiIkbThi9Mqvl)

我们在第 1 部分已经知道了[什么是 PWA][1]，在这一部分，我们将不用任何框架，只用 DOM 操作自己动手构建一个 PWA 应用。

我们先来迅速回顾一下我们已经学了的东西。一个 Web 应用要变成 PWA，它至少得需要以下 4 个东西：

1. 一个`manifest`文件——`manifest.json`
2. 至少带有一个`fetch`事件的`service worker`——`serviceworker.js`
3. 一个图标——`icon.jpeg`
4. 通过 HTTPS 通信——`https://www.myawesomesite.com`

在这篇教程中，我将介绍一下第 1 和第 2 项——创建一个`manifest`文件并挂载一个`service worker`

### 目标

在这次的例子中，我们将创建一个简单的 PWA 应用。我把复杂度故意降到最低来让我把注意力集中在 PWA 的概念上。在完成之后，你可以试着把这些 PWA 的概念给应用到你的 Angualr/React/Vue 或者 Vanilla JS 应用里。

我们这次要做一个表情包应用，从`giphy.com`上获取最新的流行表情包，然后展示在我们的 APP 上。这是一个可以离线使用的 APP，在完成后，用户将可以在没有网的时候浏览这些 GIF。

很好！现在我们开始学习重要的部分。

![](https://cdn-media-1.freecodecamp.org/images/1*6EJH5wIYnR3sHy6yI4bm7w.gif)

### 前期准备：构建 APP

我们从一个写好的 HTML 开始：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>All the memes!</title>
        <link rel="stylesheet" href="/styles.css" />
    </head>
    <body>
        <header>
            <h1 class="center">Top trending memes today</h1>
        </header>
        <main>
            <div class="container"></div>
        </main>
        <script src="app.js"></script>
    </body>
</html>
```

如上，这是一个简单的`index.html`，它只会显示`Top trending memes today`，没什么特别的。

Next, let’s add an ability to fetch trending memes from `giphy.com`. Here is what the fetch function looks like:

接下来，我们添加一个可以获取`giphy.com`上的表情包的功能，这是获取表情包的函数：

```js
async function fetchTrending() {
    const res = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25`
    );
    const json = await res.json();

    main.innerHTML = json.data.map(createMeme).join('\n');
}
```

### 我们来把它变成 PWA 应用吧

#### 第 1 步：manifest 文件

如果你看过第 1 部分的话，你应该知道`manifest`是个`json`文件。它存储着 APP 的一些元信息，比如图标名称、背景颜色、APP 的名称等等。这是一个拥有上述信息的`manifest.json`文件：

```json
{
    "name": "Meme",
    "short_name": "Meme",
    "icons": [
        {
            "src": "images/icons/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png"
        },
        {
            "src": "images/icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
        },
        {
            "src": "images/icons/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
        },
        {
            "src": "images/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "images/icons/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
        }
    ],
    "start_url": "/index.html",
    "display": "standalone",
    "background_color": "#3E4EB8",
    "theme_color": "#2F3BA2"
}
```

你还可以用一个工具来生成一个`manifest`文件。[这是][2]我发现的一个很有用的工具：

![](https://cdn-media-1.freecodecamp.org/images/1*EeVAMTLF9yowvPPJuOHpqw.png)

<center><div style="color:orange; border-bottom: 1px solid #d9d9d9;    display: inline-block;    color: #999;    padding: 2px;">Web App manifest generator</div> </center>

把这添加到我们的 APP 里非常简单，只要在`index.html`里添加这样一行：

```html
<link rel="manifest" href="/manifest.json" />
```

#### **第 2 步：Service Worker**

我们来创建一个`serviceworker.js`文件。首先，我们要让 service worker 在安装完成后马上被挂载。然后，我们再缓存一些静态资源，比如`style.css`和`app.js`。接下来，我们再通过`fetch`来让 APP 拥有离线使用的能力：

```js
const staticAssets = ['./', './styles.css', './app.js'];

self.addEventListener('install', async (event) => {
    const cache = await caches.open('static-meme');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);
    if (url.origin === location.origin) {
        event.respondWith(cacheData(request));
    } else {
        event.respondWith(networkFirst(request));
    }
});

async function cacheData(request) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || fetch(request);
}

async function networkFirst(request) {
    const cache = await caches.open('dynamic-meme');

    try {
        const response = await fetch(request);
        cache.put(request, response.clone());
        return response;
    } catch (error) {
        return await cache.match(request);
    }
}
```

我们把代码拆开来看。一个 service worker 可以帮我们缓存数据并获取资源。如果我们的缓存里有数据，我们就从缓存里获取，如果没有，就通过网络获取。对于你自己的 APP 来说，你要好好想想，你有什么功能是需要能够离线使用的，然后你再去缓存相关的那些数据。在我们的这个例子里，在没有网络的时候，APP 会展示之前缓存过的图片。

我们要把 service worker 加进我们的`index.html`，为此，我们需要借助浏览器的`navigator`库来挂在 service worker：

```js
window.addEventListener('load', async (e) => {
    await fetchTrending();

    if ('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register('serviceWorker.js');
            console.log('SW registered');
        } catch (error) {
            console.log('SW failed');
        }
    }
});
```

我们来验证一下有没有成功挂在。进入浏览器的开发者工具里的 Application 标签，这是个在我们开发 PWA 应用时非常常用的标签。刷新一下，你应该就可以在这里发现一个 service worker：

![](https://cdn-media-1.freecodecamp.org/images/1*ayDNoz8Aw59BlVTfhrSU-w.png)

<center><div style="color:orange; border-bottom: 1px solid #d9d9d9;    display: inline-block;    color: #999;    padding: 2px;">Service Worker成功挂载了</div> </center>

现在我们再刷新一下。在第一次载入时，数据应该已经被 service worker 成功缓存了。试试断开网络，离线状态我们还是可以看到这些图片。

我们的 APP 现在已经可以离线使用啦！如果你有开启 HTTPS 并上传了一个图标，那恭喜你，你已经有一个 PWA 应用了！

### 下一步

如果你有兴趣自己做一个 PWA 应用，我强烈推荐你看看这个 Google Developers 做的[codelabs][3]。

[1]: https://medium.freecodecamp.org/progressive-web-apps-101-the-what-why-and-how-4aa5e9065ac2
[2]: https://app-manifest.firebaseapp.com/
[3]: https://codelabs.developers.google.com/codelabs/your-first-pwapp/
