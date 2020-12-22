> * 原文地址：[Here are the most popular ways to make an HTTP request in JavaScript](https://www.freecodecamp.org/news/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa/)
> * 原文作者：Said Hayani
> * 译者：arronKler
> * 校对者：

![Here are the most popular ways to make an HTTP request in JavaScript](https://cdn-media-1.freecodecamp.org/images/1*gqHgCNubMncv7EwWNdArGQ.png)

Javascript 拥有非常棒的建立 HTTP 请求并向服务端发送或者接收资源的模块和方法。本文会带着大家一起看看在 JavaScript 中常用的建立 HTTP 请求的方式有哪些。

### Ajax

Ajax 是最常规的建立异步 HTTP 请求的方式。你可以使用 HTTP POST 方法来发送数据，以及使用 HTTP GET 来接受数据。我们先来看看如何发起一个 `GET` 请求。这里我会用到一个免费在线的 REST API 工具 JSONPlaceholder，它可以用来给开发者返回随机的 JSON 格式数据。

要在 Ajax 中发起一个 HTTP 调用，你需要先用 `XMLHttpRequest()` 创建一个新的对象，准备好 URL 和 HTTP 方法（此处为 GET）。最后，使用 `open()` 方法将两者合并起来，并调用 `send()` 方法执行请求。

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

jQuery 的 ajax 是发起 HTTP 调用的方法之一
jQuery Ajax is one of the simplest methods to make an HTTP call.

![](https://cdn-media-1.freecodecamp.org/images/1*vZ4BqVQfsvtpJm_RCsCE2Q.png)

The $.ajax method takes many parameters, some of which are required and others optional. It contains two callback options  `success`  and  `error`  to handle the response received.

#### $.get method

The $.get method is used to execute GET requests. It takes two parameters: the endpoint and a callback function.

![](https://cdn-media-1.freecodecamp.org/images/1*2koN5FJuT68WIyRKTihe5w.png)

#### $.post

The  `**$.post**`  method is another way to post data to the server. It take three parameters: the  `url`, the data you want to post, and a callback function.

![](https://cdn-media-1.freecodecamp.org/images/1*ql6Yp1EJfD7850GXhErwyw.png)

#### $.getJSON

The  `$.getJSON`  method only retrieves data that is in JSON format. It takes two parameters: the  `url`  and a callback function.

![](https://cdn-media-1.freecodecamp.org/images/1*hdcFdVHiBiRAo1YOi_Kt0Q.png)

jQuery has all these methods to request for or post data to a remote server. But you can actually put all these methods into one: the  `$.ajax`  method, as seen in the example below:

![](https://cdn-media-1.freecodecamp.org/images/1*soPARjfQXMcZ5ccPK1QMmA.png)

### fetch

`fetch`  is a new powerful web API that lets you make asynchronous requests. In fact,  `fetch`  is one of the best and my favorite way to make an HTTP request. It returns a “Promise” which is one of the great features of ES6.  If you are not familiar with ES6, you can read about it in  [this][3]  article. Promises allow us to handle the asynchronous request in a smarter way. Let’s take a look at how  `fetch`  technically works.

![](https://cdn-media-1.freecodecamp.org/images/1*kz6k4VRs0RiVCasWR0pCow.png)

The  `fetch`  function takes one required parameter: the  `endpoint`  URL. It also has other optional parameters as in the example below:

![](https://cdn-media-1.freecodecamp.org/images/1*QasrBgYZcU4BBFHqD2bBdg.png)

As you can see,  `fetch`  has many advantages for making HTTP requests. You can learn more about it  [here][4]. Additionally, within fetch there are other modules and plugins that allow us to send and receive a request to and from the server side, such as  [axios][5].

### Axios

Axios is an open source library for making HTTP requests and provides many great features. Let’s have a look at how it works.

#### Usage:

First, you’d need to include Axios. There are two ways to include Axios in your project.

First, you can use npm:

```bash
npm install axios --save
```

Then you’d need to import it

```js
import axios from 'axios'
```

Second, you can include axios using a CDN.

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

#### Making a Request with axios:

With Axios you can use  `GET`  and  `POST`  to retrieve and post data from the server.

#### GET:

![](https://cdn-media-1.freecodecamp.org/images/1*4wmqiPsSN5mdgjJiRaKVZg.png)

`axios`  takes one required parameter, and can take a second optional parameter too. This takes some data as a simple query.

#### POST:

![](https://cdn-media-1.freecodecamp.org/images/1*ey6-vwsrm9RAhyoU15u6xQ.png)

[Axios][7]  returns a “Promise.” If you’re familiar with promises, you probably know that a promise can execute multiple requests. You can do the same thing with axios and run multiple requests at the same time.

![](https://cdn-media-1.freecodecamp.org/images/1*40Pji4utVKPpC7-dePfC6Q.png)

Axios supports many other methods and options. You can explore them  [here][8].

### Angular HttpClient

Angular has its own HTTP module that works with Angular apps. It uses the  [RxJS][9]  library to handle asynchronous requests and provides many options to perform the HTTP requests.

#### Making a call to the server using the Angular HttpClient

To make a request using the Angular HttpClient, we have to run our code inside an Angular app. So I created one. If you’re not familiar with Angular, check out my article,  [learn how to create your first Angular app in 20 minutes][10].

The first thing we need to do is to import  `HttpClientModule`  in  `app.module.ts`

![](https://cdn-media-1.freecodecamp.org/images/1*iFuW5Fbp91VR5gwQ6XNMEQ.png)

Then, we have to create a service to handle the requests. You can easily generate a service using  [Angular CLI][11].

```bash
ng g service  FetchdataService
```

Then, we need to import HttpClient in  `fetchdataService.ts`  service and inject it inside the constructor.

![](https://cdn-media-1.freecodecamp.org/images/1*kKwELAhSSpnN8DvIgdOfcQ.png)

And in  `app.component.ts`  import  `fetchdataService`

```ts
//import
import { FetchdataService } from './fetchdata.service';
```

Finally, call the service and run it.

`app.component.ts:`

![](https://cdn-media-1.freecodecamp.org/images/1*OrRe183Yaclt19n5ZQ194Q.png)

You can check out the demo example  [on Stackblitz][12].

### Wrapping Up

We’ve just covered the most popular ways to make an HTTP call request in JavaScript.

Thank you for your time. If you like it, clap up to 50, click follow, and reach out to me on  [Twitter][13].

_By the way, I’ve recently worked with a strong group of software engineers for one of my mobile applications. The organization was great, and the product was delivered very quickly, much faster than other firms and freelancers I’ve worked with, and I think I can honestly recommend them for other projects out there. Shoot me an email if you want to get in touch —_ [_said@devsdata.com_][14]_._

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
