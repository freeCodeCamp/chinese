> * 原文地址：[Here are the most popular ways to make an HTTP request in JavaScript](https://www.freecodecamp.org/news/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa/)
> * 原文作者：Said Hayani
> * 译者：arronKler
> * 校对者：

![Here are the most popular ways to make an HTTP request in JavaScript](https://cdn-media-1.freecodecamp.org/images/1*gqHgCNubMncv7EwWNdArGQ.png)

JavaScript 具有非常棒的模块和方法来建立可从服务器端资源发送或接收数据的 HTTP 请求。本文会带着大家一起看看在 JavaScript 中常用的建立 HTTP 请求的方式有哪些。

### Ajax

Ajax 是最常规的建立异步 HTTP 请求的方式。你可以使用 HTTP POST 方法来发送数据，以及使用 HTTP GET 来接收数据。我们先来看看如何发起一个 `GET` 请求。这里我会用到一个免费在线的 REST API 工具 JSONPlaceholder，它可以用来给开发者返回随机的 JSON 格式数据。

要在 Ajax 中发起一个 HTTP 调用，你需要初始化一个新的 XMLHttpRequest() 方法，指定 URL 端点和 HTTP 方法（在本例中为 GET）。最后，使用 `open()` 方法将两者结合起来，并调用 `send()` 方法执行请求。

我们可以在 `XMLHTTPRequest.onreadystatechange` 的事件监听器中输出 HTTP 请求结果日志到控制台中，这个事件监听器会在 `readystatechanged` 事件发生的时候触发。

![](https://cdn-media-1.freecodecamp.org/images/1*zXtlRe4yRF3tZkFFvBhZeA.png)

```js
const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/posts';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}
```

如果你查看浏览器的控制台，上面的代码会返回一组 JSON 格式的数组数据。但是我们怎么知道请求已经完成了呢？换句话说，我们应该怎样处理 Ajax 的响应数据呢？


`onreadystatechange` 有两个方式可以让我们可以检测到当前请求的状态， `readyState` 和 `status`。


![](https://cdn-media-1.freecodecamp.org/images/1*UfZf6qaZwNh5Mptft4WIZA.png)

如果 `readyState` 等于 4，意味着请求已经完成了。`readyState` 这个属性可以有 5 种状态值。你可以点击这里[了解更多][1]。

除了直接通过 JavaScript 创建 Ajax 调用，还有其他的非常有效的创建 HTTP 调用的方法，比如 jQuery 中的方法 `$.Ajax`。现在我们就来讨论这些方法。

### jQuery 方法

jQuery 有很多可以轻松处理 HTTP 请求的方法。为了能使用到这些方法，你需要在你的项目中引入 jQuery 库。

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```

#### $.ajax

jQuery 的 ajax 是发起 HTTP 调用最简单的方法之一。

![](https://cdn-media-1.freecodecamp.org/images/1*vZ4BqVQfsvtpJm_RCsCE2Q.png)

$.ajax 方法拥有很多参数，有的是必要的，有的是可选的。它有两个回调选项 `success`  和 `error` ，可以用来处理接收到的响应数据。

#### $.get 方法

$.get 方法用来执行 GET 请求，它接收两个参数：端点和回调函数

![](https://cdn-media-1.freecodecamp.org/images/1*2koN5FJuT68WIyRKTihe5w.png)

#### $.post

`**$.post**` 方法是另一种向服务端发送数据的方法，它接收三个参数：`url`，你想要发送的数据，和一个回调函数

![](https://cdn-media-1.freecodecamp.org/images/1*ql6Yp1EJfD7850GXhErwyw.png)

#### $.getJSON

`$.getJSON` 方法仅用于获取 JSON 格式的数据。它接收两个参数：`url` 和一个回调函数。

![](https://cdn-media-1.freecodecamp.org/images/1*hdcFdVHiBiRAo1YOi_Kt0Q.png)

jQuery 有以上这些方法用来给远端服务器发起请求或者传递数据。不过你最终可以将所有的这些方法都用一个方法来实现: `$.ajax` , 正如下面示例中所看到的那样。

![](https://cdn-media-1.freecodecamp.org/images/1*soPARjfQXMcZ5ccPK1QMmA.png)

### fetch

`fetch` 是一个功能强大的新的 web API，它能够让你发起异步的请求。实际上， `fetch` 是最好的也是我最喜欢用的发起 HTTP 请求的方式之一。它会返回一个 “Promise”，这也是 ES6 中最强大的特性之一，如果你不是很熟悉 ES6，可以看看[这篇文章][3]了解一下。Promise 可以让我们用一种更聪明的方式处理异步请求。让我们来看一下 `fetch` 从技术上来说是如何工作的。

![](https://cdn-media-1.freecodecamp.org/images/1*kz6k4VRs0RiVCasWR0pCow.png)

`fetch` 函数接收一个必要参数：`端点` URL。在下面的示例中它也有其它的可选参数：

![](https://cdn-media-1.freecodecamp.org/images/1*QasrBgYZcU4BBFHqD2bBdg.png)

如你所见，`fetch` 在创建 HTTP 请求方面有很多优势。你可以从[这里][4]了解更多。另外，在 fetch 之上也有一些其他的模块和插件可以让我们给服务端发送请求或者从服务端接收请求，比如[axios][5]

### Axios

Axios 是一个开源的创建 HTTP 请求的库，它提供了许多好用的特性，让我们来看一看它是如何用的吧。

#### Usage

首先，你需要引入 Axios。这里有两种方式将 Axios 引入你的项目。

第一种，你可以使用 npm 进行安装:

```bash
npm install axios --save
```

然后你需要引入它:

```js
import axios from 'axios'
```

第二种，你可以使用 CDN 来引入 axios：

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

#### 使用 axios 创建请求

基于 Axios，你可以使用 `GET` 和 `POST` 来向服务端请求数据和发送数据。

#### GET

![](https://cdn-media-1.freecodecamp.org/images/1*4wmqiPsSN5mdgjJiRaKVZg.png)

`axios` 需要一个必填参数，当然你也可以提供第二个可选参数。这个示例调用一些数据作简单的查询。

#### POST

![](https://cdn-media-1.freecodecamp.org/images/1*ey6-vwsrm9RAhyoU15u6xQ.png)

[Axios][7]  返回一个 “Promise”。如果你对 Promise 比较熟悉的话，你应该知道用 Promise 可以用来执行并行请求。这里你就可以用 axios 在同一时间运行多个并行请求。

![](https://cdn-media-1.freecodecamp.org/images/1*40Pji4utVKPpC7-dePfC6Q.png)

Axios 还提供了一些其他的方法和选项，你可以在[这里][8]具体看看。

### Angular HttpClient

Angular 有它自己的和 Angular 应用一起运行的 HTTP 模块。它使用到了 [RxJS][9] 库来处理异步请求，同时还提供了许多用来执行 HTTP 请求的选择。

#### 使用 Angular HttpClient 来发起一个服务端调用
为了能使用 Angular HttpClient 来发起一个请求，我们需要将代码运行在一个 Angular 应用中。所以我这里就创建了一个。如果你对 Angular 不是很熟悉的话，可以看一下我的文章 [20 分钟内学会如何创建你的第一个 Angular 应用][10] 。

我们需要做的第一件事儿是在 `app.module.ts` 中引入 `HttpClientModule` 模块。

![](https://cdn-media-1.freecodecamp.org/images/1*iFuW5Fbp91VR5gwQ6XNMEQ.png)

然后，我们需要创建一个服务来处理请求。你可以使用 [Angular CLI][11] 很容易的创建一个服务。

```bash
ng g service  FetchdataService
```

再然后，我们需要在 `fetchdataService.ts` 服务中的引入 HttpClient 并且将其注入到构造器中。

![](https://cdn-media-1.freecodecamp.org/images/1*kKwELAhSSpnN8DvIgdOfcQ.png)

在 `app.component.ts` 文件中引入 `fetchdataService`。

```ts
//import
import { FetchdataService } from './fetchdata.service';
```

最后，调用这个服务并运行。

`app.component.ts:`

![](https://cdn-media-1.freecodecamp.org/images/1*OrRe183Yaclt19n5ZQ194Q.png)

你可以在 [Stackblitz][12] 上看到这整个示例。

### 总结

我们刚刚了解了在 JavaScript 中最常用的创建 HTTP 请求的几种方式。

感谢你的阅读。如果你喜欢的话，点击 "关注"，然后可以在 [Twitter][13] 上找到我。

顺便说一下，我最近与一群强大的软件工程师一起为我的一个移动应用程序工作。该组织非常出色，产品交付速度非常快，比我所合作的其他公司和自由职业者要快得多，我认为我可以诚实地推荐他们用于其他项目。如果您想与我联系，请给我发送电子邮件 —— [_said@devsdata.com_][14]

[1]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
[2]: https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
[3]: https://medium.freecodecamp.org/write-less-do-more-with-javascript-es6-5fd4a8e50ee2
[4]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
[5]: https://github.com/axios/axios
[6]: https://unpkg.com/axios/dist/axios.min.js
[7]: https://github.com/axios/axios
[8]: https://github.com/axios/axios
[9]: http://reactivex.io/rxjs/
[10]: https://medium.freecodecamp.org/learn-how-to-create-your-first-angular-app-in-20-min-146201d9b5a7
[11]: https://cli.angular.io/
[12]: https://stackblitz.com/edit/angular-httpclinent
[13]: https://twitter.com/SaidHYN
[14]: mailto:said@devsdata.com
