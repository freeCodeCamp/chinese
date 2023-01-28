> - 原文地址：[The Express + Node.js Handbook – Learn the Express JavaScript Framework for Beginners [2022 Edition]](ø)
> - 原文作者：[Flavio Copes](https://www.freecodecamp.org/news/author/flavio/)
> - 译者：Papaya HUANG
> - 校对者：

![The Express +  Node.js Handbook – Learn the Express JavaScript Framework for Beginners [2022 Edition]](https://www.freecodecamp.org/news/content/images/size/w2000/2022/11/pexels-paul-ijsendoorn-1181202.jpg)

## 什么是 Express?

Express 是一个基于 Node.js 的 Web 框架。

Node.js 是一种搭建网络服务和应用的实用工具。

Express 搭建在 Node.js 之上，提供易于使用的功能来满足 Web 服务器的用例需求。它开源、免费、易于扩展并且非常高效。

可以使用各种各样的预构建的包来处理应用中的各项内容。

[点击获取 Express 手册的 PDF 和 ePub 版本](https://thevalleyofcode.com/download/express/)

## 目录

- [如何安装 Express](#how-to-install-express)
- [第一个 "Hello, World"](#the-first-hello-world-example)
- [请求参数](#request-parameters)
- [如何向客户端发送响应](#how-to-send-a-response-to-the-client)
- [如何发送一个 JSON 响应](#how-to-send-a-json-response)
- [如何管理 Cookies](#how-to-manage-cookies)
- [如何处理 HTTP 标头](#how-to-work-with-http-headers)
- [如何处理重定向](#how-to-handle-redirects)
- [Express 中的路由](#routing-in-express)
- [Express 中的模版](#templates-in-express)
- [Express 中间件](#express-middleware)
- [如何使用 Express 提供静态资源](#how-to-serve-static-assets-with-express)
- [如何向客户端发送文件](#how-to-send-files-to-the-client)
- [Express 中的会话](#sessions-in-express)
- [如何在 Express 中验证输入](#how-to-validate-input-in-express)
- [如何在 Express 中清理输入](#how-to-sanitize-input-in-express)
- [如何在 Express 中处理表单](#how-to-handle-forms-in-express)
- [如何在 Express 中处理表单中的文件上传](#how-to-handle-file-uploads-in-forms-in-express)

<h2 id="how-to-install-express">如何安装Express</h2>

你可以使用 npm 在任何项目中安装 Express。

如果是一个空文件夹，首先使用命令创建一个新的 Node.js 项目：

```
npm init -y
```

然后执行：

```
npm install express
```

在项目中安装 Express。

<h2 id="the-first-hello-world-example">第一个"Hello World"</h2>

我们要创建的第一个示例是一个简单的 Express Web 服务器：

请复制以下代码：

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(3000, () => console.log('Server ready'));
```

并将其保存在项目根文件夹的 `index.js` 文件中，然后通过以下命令启动服务器：

```
node index.js
```

你可以打开浏览器并通过 localhost 导航到 port 3000，就会看到 `Hello World!` 信息。

上面四行代码在幕后做了很多工作：

首先我们通过 `express` 变量引用 `express` 包。

通过调用 `express()` 方法来实例化一个应用。

一旦创建了应用对象，就使用 `get()` 方法监听来自 `/` 路径的 GET 请求。

每一种 HTTP 方法都有一个对应的 **动词**: `get()`, `post()`, `put()`, `delete()`和 `patch()`:

```js
app.get('/', (req, res) => {
  /* */
});
app.post('/', (req, res) => {
  /* */
});
app.put('/', (req, res) => {
  /* */
});
app.delete('/', (req, res) => {
  /* */
});
app.patch('/', (req, res) => {
  /* */
});
```

这些方法接受一个回调函数（当请求开始时调用），我们需要处理回调函数。

可以在回调中传入一个箭头函数：

```js
(req, res) => res.send('Hello World!');
```

Express 在回调中发送两个对象：`req` 和`res`，分别代表了请求（Request）和响应(Response)对象。

更多标准可以参考[这里](https://developer.mozilla.org/en-US/docs/Web/API/Request)和[这里](https://developer.mozilla.org/en-US/docs/Web/API/Response)。

请求是一个 HTTP 请求，它包含了所有请求信息：包括请求参数、标头、请求体等。

响应是 HTTP 响应对象，会返回给客户端。

在这个回调示例中，我们通过`Response.send()`方法发送"Hello World!"字符串给客户端。

这个方法将字符串作为请求体，传输完毕后关闭连接。

Hello World 示例中最后一行代码启动服务器，并且告诉它在 port`3000`监听。我们传入一个回调，当服务器准备好接受新请求时调用该回调。

<h2 id="request-parameters">请求参数</h2>

我介绍了 Request 对象是如何持有 HTTP 请求信息的。

以下是主要的属性：

| 属性           | 介绍                                                                                            |
| -------------- | ----------------------------------------------------------------------------------------------- |
| .app           | 持有对 Express app 对象的引用                                                                   |
| .baseUrl       | app 响应的基本路径                                                                              |
| .body          | 包含在请求体提交的数据（必须手动解析和填充后才能访问）                                          |
| .cookies       | 包含由请求发送的 cookies(需要 `cookie-parser`中间件)                                            |
| .hostname      | [Host HTTP 标头](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host) 值定义的主机名 |
| .ip            | 客户端 IP                                                                                       |
| .method        | 使用的 HTTP 方法                                                                                |
| .params        | 路由命名参数                                                                                    |
| .path          | URL 路径                                                                                        |
| .protocol      | 请求协议                                                                                        |
| .query         | 包含请求中使用的所有查询字符串的对象                                                            |
| .secure        | 请求是安全时(使用 HTTPS)为 true                                                                 |
| .signedCookies | 包含由请求发送的签名 cookies (需要 `cookie-parser` 中间件)                                      |
| .xhr           | 请求为 [XMLHttpRequest](https://www.freecodecamp.org/news/xhr/)时为 true                        |

<h2 id="how-to-send-a-response-to-the-client">如何向客户端发送响应</h2>

在 Hello World 示例中， 我们使用响应对象的`send()`方法来将一个简单的字符串作为响应，之后关闭连接。

```js
(req, res) => res.send('Hello World!');
```

如果你传入一个字符串，它将`Content-Type`标头设置为`text/html`。

如果你传入的是对象或者数组，它将`Content-Type`标头设置为`application/json`，并将传入的对象或数组解析为[JSON](https://www.freecodecamp.org/news/json/)。

之后`send()`关闭连接。

`send()`自动设置 `Content-Length` HTTP 响应标头，不像 `end()` 需要你手动设置。

### 如何使用 end()发送空响应

另一个发送响应的方式，是使用`Response.end()`方法，这种方法不发送任何响应体：

```js
res.end();
```

### 如何设置 HTTP 响应状态

在响应对象使用 `status()` 方法：

```js
res.status(404).end();
```

或者

```js
res.status(404).send('File not found');
```

`sendStatus()` 是快捷方式。

```js
res.sendStatus(200);
// === res.status(200).send('OK')

res.sendStatus(403);
// === res.status(403).send('Forbidden')

res.sendStatus(404);
// === res.status(404).send('Not Found')

res.sendStatus(500);
// === res.status(500).send('Internal Server Error')
```

<h2 id="how-to-send-a-json-response">如何发送一个JSON响应</h2>

当你在 Express 中监听路由上的连接时，回调函数将在每次网络调用时被调用，并带有一个 Request 对象实例和一个 Response 对象实例。

示例：

```js
app.get('/', (req, res) => res.send('Hello World!'));
```

我们在这里使用 `Response.send()` 方法，接受任意字符串。

你可以使用[JSON](https://www.freecodecamp.org/news/json/)，即使用 `Response.json()`发送到客户端。

它接受一个对象或者数组，并在发送前将其转换为 JSON 格式：

```js
res.json({ username: 'Flavio' });
```

<h2 id="how-to-manage-cookies">如何管理cookies</h2>

使用`Response.cookie()`方法来控制 cookies。

示例：

```js
res.cookie('username', 'Flavio');
```

这个方法还接受第三个参数，这个参数包含各种选项：

```js
res.cookie('username', 'Flavio', {
  domain: '.flaviocopes.com',
  path: '/administrator',
  secure: true
});

res.cookie('username', 'Flavio', {
  expires: new Date(Date.now() + 900000),
  httpOnly: true
});
```

一些你可以设置的有用的参数包括：

| 值         | 描述                                                                                                                                                 |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `domain`   | [cookie 的域名](https://www.freecodecamp.org/news/cookies/#set-a-cookie-domain)                                                                      |
| `expires`  | 设置[cookie 过期日期](https://www.freecodecamp.org/news/cookies/#set-a-cookie-expiration-date)。 如果未设置或者为 0，这个 cookie 将作为会话 cookie。 |
| `httpOnly` | 设置 cookie 仅被 web 服务器访问。 具体可查看[HttpOnly](https://www.freecodecamp.org/news/cookies/#httponly)                                          |
| `maxAge`   | 设置相对于当前时间的过期时间，以毫秒为单位                                                                                                           |
| `path`     | [cookie 路径](https://www.freecodecamp.org/news/cookies/#set-a-cookie-path)。默认值为 '/'                                                            |
| `secure`   | 标记为[cookie HTTPS only](https://www.freecodecamp.org/news/cookies/#secure)                                                                         |
| `signed`   | 设置需要签名的 cookie                                                                                                                                |
| `sameSite` | [`SameSite`](https://www.freecodecamp.org/news/cookies/#samesite)的值                                                                                |

清除 cookie 可以使用：

```js
res.clearCookie('username');
```

<h2 id="how-to-work-with-http-headers">如何处理HTTP标头</h2>

### 如何通过请求获取 HTTP 标头值

可以使用 `Request.headers` 属性访问所有 HTTP 标头的值：

```js
app.get('/', (req, res) => {
  console.log(req.headers);
});
```

使用`Request.header()` 方法获取单个请求标头的值：

```js
app.get('/', (req, res) => {
  req.header('User-Agent');
});
```

### 如何为响应改变 HTTP 标头

可以使用 `Response.set()`改变 HTTP 标头值：

```js
res.set('Content-Type', 'text/html');
```

Content-Type 标头的便捷方式是：

```js
res.type('html');
// => 'text/html'

res.type('json');
// => 'application/json'

res.type('application/json');
// => 'application/json'

res.type('png');
// => image/png:
```

<h2 id="how-to-handle-redirects">如何处理重定向</h2>

在 Web 开发中重定向很常见，可以使用 `Response.redirect()`实现：

```js
res.redirect('/go-there');
```

这样就创建了一个 302 重定向。

可以使用以下方法创建一个 301 重定向：

```js
res.redirect(301, '/go-there');
```

你可以指定绝对路径 (`/go-there`)、绝对 URL (`https://anothersite.com`)、相对路径(`go-there`) 或者 `..` 返回上一层：

```js
res.redirect('../go-there');
res.redirect('..');
```

你还可以重定向回 Referrer HTTP 标头值 (如果未设置默认值为 `/`)：

```js
res.redirect('back');
```

<h2 id="routing-in-express">Express中的路由</h2>

路由是确定调用 URL 时应该发生什么的过程，或者应用程序的哪些部分应该处理特定的传入请求。

在 Hello World 示例中，我们使用了这段代码：

```js
app.get('/', (req, res) => {
  /* */
});
```

这里创建一个路由，访问根域 URL`/`， 并使用 HTTP GET 方法映射到我们需要的响应。

### 命名参数

如果想监听自定义请求怎么办？也许我们想创建一个接受字符串并将其作为大写字母返回的服务——我们不希望参数作为查询字符串发送，而是作为 URL 的一部分发送。在这种情况下，我们使用命名参数：

```js
app.get('/uppercase/:theValue', (req, res) =>
  res.send(req.params.theValue.toUpperCase())
);
```

如果发送请求到 `/uppercase/test`，我们会在响应体中得到 `TEST`。

你可以在同一个 URL 中使用多个命名参数，它们都将存储在 `req.params`.

### 如何使用正则表达式匹配路径

可以通过一条[正则表达式](https://flaviocopes.com/javascript-regular-expressions/) 来匹配多个路径：

```js
app.get(/post/, (req, res) => {
  /* */
});
```

以上代码将匹配 `/post`, `/post/first`, `/thepost`, `/posting/something`等路径。

<h2 id="templates-in-express">Express中的模版</h2>

Express 能够处理服务器端模板引擎。

模板引擎允许我们向视图添加数据，并动态生成 HTML。

Express 默认使用 Jade。 Jade 是 Pug 的旧版本，特指 Pug 1.0。

请注意，由于商标问题，该项目在 2016 年发布第二版时，名称从 Jade 改为 Pug。你仍然可以使用 Jade，又称 Pug 1.0，但往后最好使用 Pug 2.0。

尽管 Jade 的最后一个版本已经陈旧了，但出于向后兼容的原因，它仍然是 Express 中的默认版本。

你可以在任何新项目中使用 Pug 或你选择的引擎。Pug 的官方网站是[https://pugjs.org/](https://pugjs.org/)。

可以使用许多不同的模板引擎，包括 Pug、Handlebars、Mustache、EJS 等。

要使用 Pug，我们必须先安装它：

```bash
npm install pug
```

在初始化 Express 应用程序时，我们需要设置它：

```js
const express = require('express');
const app = express();
app.set('view engine', 'pug');
```

然后就可以在 `.pug` 文件中编写模板。

创建一个 about 视图：

```js
app.get('/about', (req, res) => {
  res.render('about');
});
```

模板路径为`views/about.pug`:

```
p Hello from Flavio
```

该模板创建一个 `p` 标签，内容为 `Hello from Flavio`。

你也可以使用以下代码插入变量：

```js
app.get('/about', (req, res) => {
  res.render('about', { name: 'Flavio' });
});
```

```
p Hello from #{name}
```

更多使用 Pug 的信息，可以查看[Pug 指南](https://flaviocopes.com/pug)。

推荐你使用这个在线 HTML 到 Pug 转换器 [https://html-to-pug.com/](https://html-to-pug.com/)。

<h2 id="express-middleware">Express中间件</h2>

中间件是一个挂钩到路由过程中的函数，在链中的某个点执行任意操作（取决于我们想要它做什么）。

它通常用于编辑请求或响应对象，或者在请求到达路由处理程序代码之前终止请求。

可以通过如下方法将中间件添加到执行栈：

```js
app.use((req, res, next) => {
  /* */
});
```

这和定义路由类似，但是在 Request 和 Response 实例之后，我们还引用了 _next_ 中间件函数，并分配给了`next`变量。

我们总是在中间件函数末尾调用`next()`以便将执行传递给下一个处理程序。除非我们想提前结束响应并将其发送回客户端。

通常我们通过 `npm` 包来使用预制的中间件。你可以在 [这里](https://expressjs.com/en/resources/middleware.html)找到中间件列表。

其中一个预制中间件示例就是 `cookie-parser`，它可以将 cookie 解析为 `req.cookies`对象。 你可以使用 `npm install cookie-parser` 命令安装并使用：

```js
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.get('/', (req, res) => res.send('Hello World!'));

app.use(cookieParser());
app.listen(3000, () => console.log('Server ready'));
```

我们还可以将中间件函数设置为仅针对特定路由运行（而不是针对所有路由），方法是将其作为路由定义的第二个参数：

```js
const myMiddleware = (req, res, next) => {
  /* ... */
  next();
};

app.get('/', myMiddleware, (req, res) => res.send('Hello World!'));
```

如果需要存储中间件生成的数据，并传递给后续中间件函数或请求处理程序，你可以使用`Request.locals`对象。它将该数据附加到当前请求：

```js
req.locals.name = 'Flavio';
```

<h2 id="how-to-serve-static-assets-with-express">如何使用Express提供静态资源</h2>

通常图片、CSS 被存储在 `public`子文件夹，并暴露给根目录：

```js
const express = require('express');
const app = express();

app.use(express.static('public'));

/* ... */

app.listen(3000, () => console.log('Server ready'));
```

如果在 `public/`有一个`index.html`文件，当你访问根域 URL(`http://localhost:3000`)时，就会提供静态资源。

<h2 id="how-to-send-files-to-the-client">如何向客户端发送文件</h2>

Express 提供了一个简便的方法将文件转换为附件传输： `Response.download()`。

一旦用户点击使用此方法发送文件的路由，浏览器将提示用户下载。

`Response.download()` 方法允许发送附加到请求的文件，浏览器不会在页面中显示它，而是将其保存到磁盘。

```js
app.get('/', (req, res) => res.download('./file.pdf'));
```

在应用上下文中的示例：

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => res.download('./file.pdf'));
app.listen(3000, () => console.log('Server ready'));
```

你可以将文件设置为使用自定义文件名发送：

```js
res.download('./file.pdf', 'user-facing-filename.pdf');
```

此方法提供了一个回调函数，你可以使用它在文件发送后执行代码：

```js
res.download('./file.pdf', 'user-facing-filename.pdf', (err) => {
  if (err) {
    //handle error
    return;
  } else {
    //do something
  }
});
```

<h2 id="sessions-in-express">Express中的会话</h2>

默认情况下，Express 请求是有顺序的，但请求之间没有相互链接，所以没有办法知道这个请求是否来自之前已经执行过请求的客户端。

除非使用某种识别机制，否则用户无法识别请求。

会话就应运而生。

使用会话后，你的 API 或网站的每个用户都将被分配一个唯一的会话，就可以存储用户的状态。

我们将使用 `express-session` 模块来演示，它由 Express 团队维护。

可以使用以下命令安装：

```bash
npm install express-session
```

安装完毕后，可以通过以下代码实例化：

```js
const session = require('express-session');
```

它是一个中间件，所以你使用以下代码在 Express 中 _安装_ 它:

```js
const express = require('express');
const session = require('express-session');

const app = express();
app.use(
  session({
    secret: '343ji43j4n3jn4jk3n'
  })
);
```

编写完毕后，所有应用路由都使用会话。

`secret`是唯一的必填参数，还有许多可选参数。`secret`必须为一个唯一的随机字符串。

会话被添加到请求，所以可以通过 `req.session`访问：

```js
app.get('/', (req, res, next) => {
  // req.session
}
```

该对象可用于从会话中获取数据，也可用于设置数据：

```js
req.session.name = 'Flavio';
console.log(req.session.name); // 'Flavio'
```

此数据在存储时被序列化为[JSON](https://www.freecodecamp.org/news/json/) ，所以可以安全使用嵌套对象。

你可以使用会话将数据传递给稍后执行的中间件，或者稍后根据后续请求检索数据。

会话数据存储在哪里？这取决于你如何设置`express-session`模块。

会话数据可被存储在：

- **内存**，不适用于生产
- **数据库**，如 MySQL 或者 Mongo
- **内存缓存**，如 Redis 或者 Memcached

在[https://github.com/expressjs/session](https://github.com/expressjs/session)中有一个巨大的第三方包列表，可以实现不同兼容性的缓存存储。

所有解决方案都将会话 ID 存储在 cookie 中，并将数据保存在服务器端。客户端将在 cookie 中接收会话 ID，并将它与每个 HTTP 请求一起发送。

我们将引用该服务器端以将会话 ID 与本地存储的数据相关联。

内存是默认设置，不需要你进行特殊操作。这样很便捷，但它仅用于开发目的。

最好是选择 Redis 之类的内存缓存，需要为其设置自己的基础架构。

另一个常用管理会话的包是`cookie-session`，与 Redis 巨大的不同是将数据存储在客户端的 cookie。

我不建议这样做，因为将数据存储在 cookie 中意味着它存储在客户端，并在用户发出的每个请求中来回发送。它的大小也有限制，因为它只能存储 4 KB 的数据。

Cookie 也需要受到保护，但默认情况它不受保护，安全 Cookie 可以在 HTTPS 站点上使用，如果你使用代理上网，则需要配置它。

<h2 id="how-to-validate-input-in-express">如何在Express中验证输入</h2>

让我们看看如何验证作为输入进入 Express 端点的任何数据。

假设你有一个接受 name、email 和 age 参数的 POST 端点：

```js
const express = require('express');
const app = express();

app.use(express.json());

app.post('/form', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const age = req.body.age;
});
```

如何对这些结果执行服务器端验证以确保：

- name 是包含至少 3 个字符的字符串?
- email 是真正的邮箱地址?
- age 为 0 到 110 之间的数字?

在 Express 中处理来自外部的任何输入的验证的最佳方法是使用[`express-validator` 包](https://express-validator.github.io):

```bash
npm install express-validator
```

引用包中的`check`和`validationResult`对象：

```js
const { check, validationResult } = require('express-validator');
```

在`post()`调用中，我们将包含`check()`调用的数组作为第二个参数传入。 每一个 `check()` 都接受参数名作为实参。最后调用`validationResult()`来验证是否有验证报错，如果有就告知客户端：

```js
app.post(
  '/form',
  [
    check('name').isLength({ min: 3 }),
    check('email').isEmail(),
    check('age').isNumeric()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;
  }
);
```

注意我使用了：

- `isLength()`
- `isEmail()`
- `isNumeric()`

还有更多方法，都来自[validator.js](https://github.com/chriso/validator.js#validators)，包括：

- `contains()`, 检查是否包含指定值
- `equals()`, 检查是否与指定值相等
- `isAlpha()`
- `isAlphanumeric()`
- `isAscii()`
- `isBase64()`
- `isBoolean()`
- `isCurrency()`
- `isDecimal()`
- `isEmpty()`
- `isFQDN()`, 检查是否为完全合格的域名
- `isFloat()`
- `isHash()`
- `isHexColor()`
- `isIP()`
- `isIn()`, 检查值是否属于允许值数组
- `isInt()`
- `isJSON()`
- `isLatLong()`
- `isLength()`
- `isLowercase()`
- `isMobilePhone()`
- `isNumeric()`
- `isPostalCode()`
- `isURL()`
- `isUppercase()`
- `isWhitelisted()`, 检查输入是否在白名单内

你也可以使用`matches()`来进行正则表达式验证。

日期可以通过以下方式验证：

- `isAfter()`, 检查输入的日期是否在你传入的日期之后
- `isBefore()`, 检查输入的日期是否在你传入的日期之前
- `isISO8601()`
- `isRFC3339()`

更多如何使用验证器的方法，[可以参考这份文档](https://github.com/chriso/validator.js#validators)。

所有上述验证都可以串联起来：

```js
check('name').isAlpha().isLength({ min: 10 });
```

如果有任何错误，服务器会自动发送一个响应来传达错误。例如，如果电子邮件无效，将返回以下内容：

```js
{
  "errors": [{
    "location": "body",
    "msg": "Invalid value",
    "param": "email"
  }]
}
```

可以使用 `withMessage()`覆盖默认报错：

```js
check('name')
  .isAlpha()
  .withMessage('Must be only alphabetical chars')
  .isLength({ min: 10 })
  .withMessage('Must be at least 10 chars long');
```

如果你想要编写自定义验证器，可以使用 `custom` 验证器。

在回调函数中，你可以通过抛出异常或返回被拒绝的 promise 来拒绝验证：

```js
app.post(
  '/form',
  [
    check('name').isLength({ min: 3 }),
    check('email').custom((email) => {
      if (alreadyHaveEmail(email)) {
        throw new Error('Email already registered');
      }
    }),
    check('age').isNumeric()
  ],
  (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;
  }
);
```

自定义验证器：

```js
check('email').custom((email) => {
  if (alreadyHaveEmail(email)) {
    throw new Error('Email already registered');
  }
});
```

也可改写为：

```js
check('email').custom((email) => {
  if (alreadyHaveEmail(email)) {
    return Promise.reject('Email already registered');
  }
});
```

<h2 id="how-to-sanitize-input-in-express">如何在Express清理输入</h2>

你已经了解了如何验证从外部世界到 Express 应用程序的输入。

当运行面向公众的服务器时，你很快就会学到一件事：永远不要相信输入。

即使在客户端你已经预做了一遍清理，确保任命不会输入奇怪的内容，您仍然会受到人们使用工具（甚至只是浏览器开发工具）直接 POST 到端点的影响。

或者机器人尝试人类已知的每一种可能的攻击组合。

需要做的是在服务器端清理输入。

[`express-validator` 包](https://express-validator.github.io)除了可以验证输入以外也可以清理输入。

假设你有一个接受 name、email 和 age 参数的 POST 端点：

```js
const express = require('express');
const app = express();

app.use(express.json());

app.post('/form', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const age = req.body.age;
});
```

你可以这样验证输入：

```js
const express = require('express');
const app = express();

app.use(express.json());

app.post(
  '/form',
  [
    check('name').isLength({ min: 3 }),
    check('email').isEmail(),
    check('age').isNumeric()
  ],
  (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;
  }
);
```

你可以通过在验证方法之后串联清理方法来添加清理：

```js
app.post(
  '/form',
  [
    check('name').isLength({ min: 3 }).trim().escape(),
    check('email').isEmail().normalizeEmail(),
    check('age').isNumeric().trim().escape()
  ],
  (req, res) => {
    //...
  }
);
```

在代码中我使用的清理方法包括：

- `trim()`修剪字符串开头和结尾的字符（默认为空格）
- `escape()`将 `<`, `>`, `&`, `'`, `"`和 `/`替换成它们对应的 HTML 实体
- `normalizeEmail()`规范化电子邮件地址，它接受小写邮件地址或者子地址的选项。(如 `flavio+newsletters@gmail.com`)

其他的清理方法包括：

- `blacklist()` 删除出现在黑名单中的字符
- `whitelist()` 删除未出现在白名单中的字符
- `unescape()` 将 HTML 编码的实体替换为`<`, `>`, `&`, `'`, `"` 和 `/`
- `ltrim()` 类似于 trim()，但只修剪字符串开头的字符
- `rtrim()` 类似于 trim()， 但只修剪字符串末尾的字符
- `stripLow()`删除通常不可见的 ASCII 控制字符

强制转换格式：

- `toBoolean()` 将输入字符串转换为布尔值。除了 '0'、'false' 和 '' 之外的所有内容都返回 true。在严格模式下，只有 '1' 和 'true' 返回 true。
- `toDate()` 将输入字符串转换为日期，如果输入不是日期，则为 null
- `toFloat()` 将输入字符串转换为浮点数，如果输入不是浮点数，则转换为 NaN
- `toInt()`将输入字符串转换为整数，如果输入不是整数，则转换为 NaN

与自定义验证器一样，你可以创建自定义清理器。

在回调函数中，你只需返回清理后的值：

```js
const sanitizeValue = (value) => {
  //sanitize...
};

app.post(
  '/form',
  [
    check('value').customSanitizer((value) => {
      return sanitizeValue(value);
    })
  ],
  (req, res) => {
    const value = req.body.value;
  }
);
```

<h2 id="how-to-handle-forms-in-express">如何在Express中处理表单</h2>

以下是一个 HTML 表单示例：

```html
<form method="POST" action="/submit-form">
  <input type="text" name="username" />
  <input type="submit" />
</form>
```

当用户按下提交按钮时，浏览器会自动向页面同源的`/submit-form` URL 发出 `POST`请求。浏览器发送表单包含的数据，编码为 `application/x-www-form-urlencoded`。在此特定示例中，表单数据包含`username`输入字段值。

表单也可以通过 `GET` 方法发送数据，但是大多数情况为`POST`。

表单数据将在 POST 请求体中发送。

可以使用`express.urlencoded()`中间件提取：

```js
const express = require('express');
const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
);
```

现在，需要在`/submit-form` 路由上创建一个 `POST` 端点，任何数据都可以在 `Request.body` 访问：

```js
app.post('/submit-form', (req, res) => {
  const username = req.body.username;
  //...
  res.end();
});
```

别忘记提前使用`express-validator`验证数据。

<h2 id='how-to-handle-file-uploads-in-forms-in-express'>如何在 Express 中处理表单中的文件上传</h2>

以下代码是允许用户上传文件的 HTML 表单示例：

```html
<form method="POST" action="/submit-form" enctype="multipart/form-data">
  <input type="file" name="document" />
  <input type="submit" />
</form>
```

别忘记在表单添加`enctype="multipart/form-data"`，否则表单不会被上传。

当用户按下提交按钮时，浏览器会自动向页面同源的`/submit-form` URL 发出 `POST` 请求。浏览器发送表单包含的数据，但表单未编码为普通表单 `application/x-www-form-urlencoded`，而是 `multipart/form-data`。

在服务器端，处理多部分数据可能很棘手且容易出错，因此我们将使用一个名为 **formidable** 的库。 [这里是它的 GitHub 仓库](https://github.com/felixge/node-formidable) – 拥有超过 4000 颗星，并且维护良好。

可以通过以下命令安装：

```bash
npm install formidable
```

然后引用到 Node.js 文件：

```js
const express = require('express');
const app = express();
const formidable = require('formidable');
```

现在，在 `/submit-form` 路由的 `POST` 端点中，我们使用 `formidable.IncomingForm()` 实例化一个新的 Formidable 表单：

```js
app.post('/submit-form', (req, res) => {
  new formidable.IncomingForm();
});
```

这样做之后，我们需要解析表单。我们可以通过回调来同步执行此操作，这意味着所有文件都已处理。一旦 formidable 完成，文件就可以被访问：

```js
app.post('/submit-form', (req, res) => {
  new formidable.IncomingForm().parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error', err);
      throw err;
    }
    console.log('Fields', fields);
    console.log('Files', files);
    for (const file of Object.entries(files)) {
      console.log(file);
    }
  });
});
```

或者可以使用事件而不是回调。例如，当每个文件被解析时，或其他事件（例如文件处理完成、接收非文件字段或发生错误）时，都会收到通知：

```js
app.post('/submit-form', (req, res) => {
  new formidable.IncomingForm()
    .parse(req)
    .on('field', (name, field) => {
      console.log('Field', name, field);
    })
    .on('file', (name, file) => {
      console.log('Uploaded file', name, file);
    })
    .on('aborted', () => {
      console.error('Request aborted by the user');
    })
    .on('error', (err) => {
      console.error('Error', err);
      throw err;
    })
    .on('end', () => {
      res.end();
    });
});
```

无论选择哪种方式，你都将获得一个或多个 Formidable.File 对象，这些对象为你提供有关已上传文件的信息。这些是可以调用的一些方法：

- `file.size`, 以字节为单位的文件大小
- `file.path`, 文件写入的路径
- `file.name`, 文件名
- `file.type`, 文件的 MIME 类型

路径默认为临时文件夹，如果监听 `fileBegin` 事件可以修改：

```js
app.post('/submit-form', (req, res) => {
  new formidable.IncomingForm()
    .parse(req)
    .on('fileBegin', (name, file) => {
      file.path = __dirname + '/uploads/' + file.name;
    })
    .on('file', (name, file) => {
      console.log('Uploaded file', name, file);
    });
  //...
});
```

## 感谢阅读!

这就是手册的全部内容。别忘了，如果需要的话，[你可以下载该手册的 PDF 或者 ePub 版本](https://thevalleyofcode.com/download/express/)。
