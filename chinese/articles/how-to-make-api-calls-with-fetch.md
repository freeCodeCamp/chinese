> -  原文地址：[Fetch API – How to Make a GET Request and POST Request in JavaScript](https://www.freecodecamp.org/news/how-to-make-api-calls-with-fetch/)
> -  原文作者：[Kingsley Ubah](https://www.freecodecamp.org/news/author/ubahthebuilder/)
> -  译者：Humilitas
> -  校对者：

![Fetch API – How to Make a GET Request and POST Request in JavaScript](https://www.freecodecamp.org/news/content/images/size/w2000/2021/05/Fetch-API.png)

你的系统经常会通过与其它服务器通信来获取信息。

比如说，一个新用户想要在你的网站注册一个账号，比起手动地填写个人信息表单，他们更希望使用其它服务或平台（即**第三方认证**）上已经保存的信息来注册。

这样，你的系统需要和第三方系统通信来获取用户信息。这将通过 **API** 调用来完成。

> API（Application Programming Interface，应用程序接口），就是一组定义软件或系统之间如何通信的规则。

![](https://www.freecodecamp.org/news/content/images/2021/05/IMG_20210530_115853.jpg)

<div style="text-align:center">我手绘的 API 示意图</div>

在异步编程语言（如 Javascript）编写的单页应用中，有一个很有用的工具可以实现这个功能：`fetch()`。

## 什么是 Fetch API？

`fetch()` 是一种可以发起 AJAX（异步 JavaScript 和 XML）请求的机制。

**异步**意味着你可以使用 fetch 调用外部 API 而不会阻塞其它指令的执行。这样，即使 API 调用还没有完成，其它函数也可以继续执行。

API 返回响应（数据）的时候，会接着执行异步任务（fetch）。如果还是难以理解的话，可以查看我的[这篇文章](https://ubahthebuilder.tech/introduction-to-asynchronous-programming-with-javascript)，其中详细介绍了异步代码的概念。

然而，需要注意的是，fetch 并不是 JavaScript 规范的一部分，所以不能在 Node.js 环境中使用它（除非安装了相应模块）。

## 如何在 JavaScript 中使用 `fetch()`

谈到 API，就需要谈到**端点（endpoint）**，端点是一个唯一的 URL，可以通过调用它来与其它系统交互。

假设我们要请求一个外部 API 来获取一些数据（如博客）。这里我们使用 GET 请求。

以端点 URL 作为参数，调用 `fetch()`：

```js
fetch('https://ubahthebuilder.tech/posts/1');
```

<div style="text-align:center">从外部 API 获取博客内容</div>

这个端点的响应体是一篇博客的信息：

```js
{
userId: 1,
id: 1,
title: 'A post by Kingsley',
body: 'Brilliant post on fetch...',
};
```

我们的最终目的是要获取响应体，但是除了响应体之外，响应对象还包含很多其它信息，包括状态码、响应头等。

> 注意，fetch API 返回一个 promise。因此，需要使用 then() 函数来处理决议（resolution）。[点击此处](https://ubahthebuilder.tech/introduction-to-asynchronous-programming-with-javascript)了解更多关于 promise 的内容。

fetch API 返回的数据通常不是可用的格式，所以需要把它转换为 JavaScript 代码方便操作的格式。幸好，可以使用 `json()` 方法来做：

```js
fetch('https://ubahthebuilder.tech/posts/1')
.then(data => {
return data.json();
})
.then(post => {
console.log(post.title);
});
```

<div style="text-align:center">从 API 获取博客信息，取出博客标题</div>


如上方代码所示，可以在后续的 `then()` 方法中解析数据（例中我只取出了标题）。

这个示例中，我们只是从 API 中获取了一篇博客，如果我们想要发布一篇博客呢？

## 如何发起 POST 请求

跳出 GET 请求，要发起 POST 请求还需要设置一些选项参数。到目前为止，只为 `fetch()` 提供了一个参数——URL 端点。

对于 post 请求，需要传入一个选项配置对象作为第二个参数。这个对象中可以包含许多参数，示例中只包含了一些必要信息。

由于要发送 POST 请求，所以需要声明请求方法是 POST。

还需要传入一些博客信息来创建一个新博客。因为发送的是 JSON 格式的数据，所以需要在请求头中将 _Content-Type_ set 设置为 _application/json_。最后，设置请求体，它是一个 JSON 字符串。

```js
const update = {
title: 'A blog post by Kingsley',
body: 'Brilliant post on fetch API',
userId: 1,
};

const options = {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(update),
};
```

调用 API：

```js
fetch('https://jsonplaceholder.typicode.com/posts', options)
  .then(data => {
      if (!data.ok) {
        throw Error(data.status);
       }
       return data.json();
      }).then(update => {
      console.log(update);
      // {
      //
      // title: 'A blog post by Kingsley',
      //
      // body: 'Brilliant post on fetch API',
      //
      // userId: 1,
      //
      // id: 101
      // };
      }).catch(e => {
      console.log(e);
      });
```

如果请求成功，会得到一个响应，其中包含了刚刚创建的博客信息。响应的具体内容取决于 API 的实现方式。

最后要注意的是，随着时间的推移，端点可能会改变、API 也可能会重构，所以应该把所有 fetch 调用放在一起以便于后续调整。

## 总结

本文要点如下：

-   计算机系统、软件通过 API 来互相通信。
-   API 包含了系统之间交互的规则集和协议。例如，Facebook 可能会调用 Google 的 API 来获取用户信息。
-   在前端 JavaScript 代码中，可以使用 `fetch` 来调用 API。
-   使用 fetch 发起 GET 请求，只需要传入一个 URL 端点作为参数。
-   要发起 POST 请求，还需传入配置对象作为参数。

如果你喜欢我的文章，可以[为我买一杯咖啡](https://buymeacoffee.com/ubahthebuilder)以示支持。

谢谢，再见。
