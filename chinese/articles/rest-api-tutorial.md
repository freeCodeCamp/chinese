> -   原文地址：[REST API Tutorial – REST Client, REST Service, and API Calls Explained With Code Examples](https://www.freecodecamp.org/news/rest-api-tutorial-rest-client-rest-service-and-api-calls-explained-with-code-examples/)
> -   原文作者：Vaibhav Kandwal
> -   译者：Humilitas
> -   校对者：

![REST API Tutorial – REST Client, REST Service, and API Calls Explained With Code Examples](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

有想过网站的注册/登录功能在后端是怎么实现的吗？你在 YouTube 上搜索“cute kitties”，得到一堆结果，然后观看视频的过程又是怎么回事？

这个入门教程会带着你一起构建一个 RESTful API，我会解释一些术语，并使用 NodeJS 来编码实现一个服务端程序。

## 术语解释

REST 是什么？维基百科：

> **表现层状态转换（Representational state transfer，REST）** 是一种软件架构风格，它定义了一组创建 Web 服务的约束。RESTful Web 服务允许请求系统通过使用统一和预定义的无状态操作集来访问和操作 Web 资源的文本表示。

揭开神秘面纱，看看 REST 究竟是什么意思。REST 基本上就是客户端和服务端通信的一组规则。REST 架构的限制条件：

1.  **客户端-服务器架构**：网站/应用的用户界面与数据请求/存储应当是分离的，两者可以独立扩展。
2.  **无状态**：通讯过程中服务端不会保存客户端的上下文信息，意味着每个请求都需要携带必要的数据、不能指望服务器会使用之前的请求中携带的数据。
3.  **分层系统**：客户端不应该了解它是与服务器直接通讯还是与一些中介服务进行通讯，中介服务（代理或负载均衡）为底层服务器的扩展性和安全性提供了保障。

理解了 RESTful 服务之后，再了解一下标题中提到的一些术语：

1. **REST 客户端**：访问 REST 服务的代码或应用。你现在正在用着它呢！浏览器可以看做是一个不受我们控制的 REST 客户端（我们访问的网站会处理浏览器的请求）。在很长一段时间内，浏览器都是使用内建的 XMLHttpRequest 函数来发起 REST 请求，不过现在它被现代的、基于 [promise][2] 的 [FetchAPI][1] 替代了。其他 REST 客户端还包括：[axios][3]、[superagent][4]、[got][5] 等代码库，[Postman][6]（或其在线版本 [postwoman][7]）等专用应用，以及 [cURL][8] 等命令行工具。
2. **REST 服务**：服务器。有许多流行的库能帮助我们轻松创建 REST 服务，如 NodeJS 环境下的 [ExpressJS][9] 和 Python 环境下的 [Django][10]。
3. **REST API**：定义了从服务器存取数据的端点和方法，稍后会详细介绍。其它替代方案包括：GraphQL、JSON-Pure 以及 oData。

## 现在告诉我，REST 是什么？

广义地说，就是客户端向服务端请求访问指定数据或者在服务端保存数据、服务端响应客户端请求的过程。

从编程角度来说，服务端提供了一个端点（URL）等待接收客户端的请求，客户端连接这个端点并发送数据（记住，REST 是无状态的，请求中携带的数据不会被存储）、服务端返回正确的响应。

文字是枯燥的，我们来看看示例。使用 Postman 来展示请求和响应：

![](https://www.freecodecamp.org/news/content/images/2020/04/image-162.png)

配置 postman 请求

返回的数据是 JSON（JavaScript Object Notation）格式的，可以直接访问。

这里的 `https://official-joke-api.appspot.com/random_joke` 被称为 API 端点，服务端会监听指向这个端点的请求。

## REST 剖析：

现在我们知道了客户端可以向服务端发送携带数据的请求、服务端会返回适当的响应，再来深入了解一下如何构造一个请求。

1.  **端点（Endpoint）**：前面已经介绍过了，这里再复习一下：它是 REST 服务器监听的 URL 地址。
2.  **请求方法（Method）**：之前有介绍到，你可以从服务器获取数据或者修改数据，那么服务器怎么知道客户端想要做什么操作呢？REST 为不同的请求类型实现了许多“方法”，以下是最常用的：

    \-  **GET**：从服务器获取资源。  
    
    \-  **POST**：在服务器上保存资源。
    
    \-  **PATCH** 或 **PUT**：更新服务器上的现有资源。
    
    \-  **DELETE**：删除服务器上现有的资源。
3.  **头部信息（Headers）**：用于客户端和服务端通讯的额外信息（记住，REST 是无状态的）。常见的头部信息如下：

    **请求头（Request）**：
    
    \-  _host_：客户端的 IP 地址（或请求的源地址）
    
    \-  _accept-language_：客户端接受的语言类型
    
    \-  _user-agent_：客户端的详细信息，如操作系统和浏览器类型
    
    **响应头（Response）**： 
    
    \-  _status_：请求的状态或 HTTP 状态码 
    
    \-  _content-type_：服务器返回的资源的类型
    
    \-  _set-cookie_：服务器设置的 cookies
    
4.  **请求数据（Data）**：（也称为请求体或消息）包含了将要发送给服务器的数据

## 跳出细节 - 开始编码

在 Node 环境中编写 REST 服务的代码，我们会实现上面学到的全部内容。在编码过程中会用到 ES6+ 的语法。 

要确保你已经安装了 Node.JS，并且 `node` 和 `npm` 命令是可用的，我自己使用的版本分别是 Node 12.16.2 和 NPM 6.14.4。
 
创建一个名为 `rest-service-node` 的文件夹，并使用 cd 命令进入：

```shell
mkdir rest-service-node
cd rest-service-node
```

初始化 node 项目：

```shell
npm init -y
```

参数 `-y` 表示跳过所有配置项。如果想要手动填写这些配置的话，执行 `npm init`。
 
安装一些依赖包，这里使用 ExpressJS 框架来开发 REST 服务。执行以下命令来安装：

```shell
npm install --save express body-parser
```

这里的 `body-parser` 是做什么用的？默认情况下，Express 是无法处理 POST 请求传入的 JSON 数据的，`body-parser` 为 Express 解决了这个问题。

创建 `server.js` 文件，写入以下代码：

```js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});
```

前两行代码引入了 Express 和 body-parser。

第三行代码初始化了一个 Express 服务器，并把它赋值给一个名为 `app` 的变量。

`app.use(bodyParser.json());` 初始化了 body-parser 插件。

最后，设置服务器监听 `5000` 端口的请求。

### 从 REST 服务器获取数据

使用 `GET` 请求来获取服务器的数据，在 `app.listen` 之前插入以下代码：

```js
const sayHi = (req, res) => {
  res.send("Hi!");
};

app.get("/", sayHi);
```

这里创建了一个 `sayHi` 函数，它接受 `req` 和 `res` 两个参数（稍后会解释）、返回字符串“Hi!”作为响应。

`app.get()` 方法接受两个参数：接口路径以及有客户端请求这个接口时执行的回调函数。所以最后一行代码可以理解为：服务器监听”/“路径（可能是主页）的请求，如果监听到这个路径上的请求就执行 `sayHi` 函数。

`app.get` 还为我们提供了一个包含了客户端发送的所有数据的 `request` 对象，以及一个包含了所有响应方法的 `response` 对象。虽然它们是作为函数参数来访问的（随意命名也不影响功能），但是一般命名约定建议将它们命名为 `res`（表示 `response`） 和 `req`（表示 `request`）。

闲言少叙，启动服务器！执行以下代码：

```shell
node server.js
```

如果一切顺利的话，应该能在控制台看到这个提示：_Server is running on port 5000._

_提示：可以将端口号改为任意合适的值。_

![](https://www.freecodecamp.org/news/content/images/2020/04/image-160.png)

打开浏览器，访问 `[http://localhost:5000/][11]`，将看到如下内容：

![](https://www.freecodecamp.org/news/content/images/2020/04/image-161.png)

第一个 `GET` 请求成功执行了！

### 向 REST 服务器发送数据

接下来构建一个 `POST` 请求，这个请求向服务器传入两个数字、服务器会计算并返回两数之和。在 `app.get` 之后加入以下代码：

```js
app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.send(`The sum is: ${a + b}`);
});
```

我们以 JSON 格式向服务器发送数据：

```json
{
    "a":5,
    "b":10
}
```

理解一下代码：

第一行调用了 ExpressJS 的 `.post()` 方法，使得服务器监听 `POST` 请求，它接受的参数与 `.get()` 方法相同。这里指定的接口路径是 `/add`，这样其他人可以通过你的 IP 地址和端口（`[http://your-ip-address:port/add][12]`）来访问这个接口，在本地也可以通过 `localhost:5000/add` 这个地址来访问。这里回调函数是以行内函数的形式来编写的。
 
第二行使用了 ES6 的对象解构语法来读取对象属性。通过请求发送的数据都被保存在了 `req` 对象的 `body` 属性中，实际上也可以用以下代码来读取这两个值：

```js
const num1 = req.body.a;
const num2 = req.body.b;
```

第三行使用 `res` 对象的 `send()` 方法来返回计算结果，这里使用了 ES6 的模板字符串语法。使用 Postman 测试一下：

![](https://www.freecodecamp.org/news/content/images/2020/04/image-163.png)

我们在请求体中设置 `a` 的值为 5、`b` 的值为 10，Postman 会在发送的请求中携带这些数据。服务器接收到这个请求时，会以上面的代码所示的方式解析 `req.body` 中的数据。返回结果展示在下方。

最终代码：

```js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const sayHi = (req, res) => {
  res.send("Hi!");
};

app.get("/", sayHi);

app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.send(`The sum is: ${a + b}`);
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});

```

## REST 客户端

我们已经创建了一个服务端程序，那么要如何在网站或者 web 程序中访问它呢？现在 REST 客户端库就派上用场了。

我们会构建一个 web 应用，它包含一个表格，可以在其中填入两个数字，从服务端获得它们的计算结果后会展示在页面上。

首先，修改 `server.js`：

```js
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.send({
    result: parseInt(a) + parseInt(b)
  });
});

```

我们引入了 Node 提供的 `path` 包，用来跨平台地操作路径。接着改变了”/“路径上的 `GET` 请求的回调函数，在其中使用了 `res` 对象提供的 `sendFile` 方法，这个方法允许我们在响应中返回任意格式的文件。所以，每当用户访问”/“路径的时候，他们会看到 `index.html` 页面的内容。
 
最后修改了 `app.post` 函数，现在它会将 `a` 和 `b` 转换为整数，并以 JSON 形式返回两者之和。

创建一个名为 `index.html` 的 html 页面，并在其中添加一些基本样式：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>REST Client</title>
  </head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .container {
      height: 100vh;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    form {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }
    label,
    input[type="submit"] {
      margin-top: 20px;
    }
  </style>
  <body>
    <div class="container">
      <h1>Simple POST Form</h1>
      </h1>
      <form>
        <label>Number 1:</label>
        <input id="num1" type="number" />
        <label>Number 2:</label>
        <input id="num2" type="number" />
        <input type="submit" value="Add"/>
      </form>
      <div class="result">Click Add!</div>
    </div>
  </body>
</html>
```

在闭合 body 标签之前插入一段 JavaScript 脚本，这样我们就不必维护一个独立的 `.js` 文件了。我们监听 document 的 `submit` 事件并为其指定一个回调函数：

```js
<script>
    document.addEventListener("submit", sendData);
</script>
```

首先要避免在点击“Add”按钮时刷新页面，可以使用 `preventDefault()` 方法来实现，同时要获取两个输入框的值：

```js
function sendData(e) {
    e.preventDefault();
    const a = document.querySelector("#num1").value;
    const b = document.querySelector("#num2").value;
}
```

使用 `a` 和 `b` 的值向服务端发送请求。这里我们使用浏览器内置的 [Fetch API][13] 来发送请求。

Fetch 接收两个参数：接口地址和 JSON 形式的请求参数对象，返回一个 [Promise][14]。相关知识超出了本文范围，请自行查阅。

在 `sendData()` 函数中加入以下代码：

```js
fetch("/add", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            a: parseInt(a),
            b: parseInt(b)
        })
    })
    .then(res => res.json())
    .then(data => {
        const {
            result
        } = data;
        document.querySelector(
            ".result"
        ).innerText = `The sum is: ${result}`;
    })
    .catch(err => console.log(err));
```

把接口地址的相对路径作为 `fetch` 函数的第一个参数传入，接着传入一个参数对象作为第二个参数，其中指定了请求方式为 `POST`。

参数对象中还包含了 `headers` 参数，其中指定了请求中发送的数据的格式（`content-type`）和预期响应的数据格式（`accept`）。

接着传入了请求体 `body`。还记得使用 Postman 时以 JSON 格式输入数据吗？这里也是类似的情况。由于 express 将请求体当做字符串来处理，并根据 content-type 来解析，所以我们需要使用 `JSON.stringify()` 方法来将请求体转换为字符串。我们格外谨慎地把输入值转换为了整数，以确保这个请求不会破坏服务器（因为我们没有做数据类型校验）。

最后，如果 fetch 返回的 promise 状态变为完成（fullfilled），我们就能获取到响应数据并将其转换为 JSON 格式，然后就可以在响应对象中获取计算结果并将结果展示在页面上。

如果这个 promise 的状态变为拒绝（rejected），则会在控制台打印错误信息。

`index.html` 的最终代码如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>REST Client</title>
  </head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .container {
      height: 100vh;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    form {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }
    label,
    input[type="submit"] {
      margin-top: 20px;
    }
  </style>
  <body>
    <div class="container">
      <h1>Simple POST Form</h1>
      </h1>
      <form>
        <label>Number 1:</label>
        <input id="num1" type="number" />
        <label>Number 2:</label>
        <input id="num2" type="number" />
        <input type="submit" value="Add"/>
      </form>
      <div class="result">Click Add!</div>
    </div>
    <script>
      document.addEventListener("submit", sendData);
      function sendData(e) {
        e.preventDefault();
        const a = document.querySelector("#num1").value;
        const b = document.querySelector("#num2").value;

        fetch("/add", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            a: parseInt(a),
            b: parseInt(b)
          })
        })
          .then(res => res.json())
          .then(data => {
            const { result } = data;
            document.querySelector(
              ".result"
            ).innerText = `The sum is: ${result}`;
          })
          .catch(err => console.log(err));
      }
    </script>
  </body>
</html>
```

我在 glitch 上部署了一个[小应用][15]供你测试。

## 总结：

通过本文，我们学习了 REST 架构和 REST 请求的相关知识，我们一起构建了一个简单的能够处理 `GET` 和 `POST` 请求的 REST 服务器，还构建了一个 web 应用作为 REST 客户端来计算两数之和。

你可以扩展这个项目来处理更多其它类型的请求，甚至将它扩展成一个完整的[后端应用][16]。

希望本文能对你有所帮助。如果有任何疑问，可以随时在 twitter 上联系我。Happy Coding!

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[3]: https://github.com/axios/axios
[4]: https://github.com/visionmedia/superagent
[5]: https://github.com/sindresorhus/got
[6]: https://www.postman.com/
[7]: https://postwoman.io/
[8]: https://curl.haxx.se/
[9]: https://expressjs.com/
[10]: https://www.djangoproject.com/
[11]: http://localhost:5000/
[12]: http://your-ip-address:port/add
[13]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[14]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[15]: https://habitual-serious-boater.glitch.me/
[16]: https://www.freecodecamp.org/news/building-a-simple-crud-application-with-express-and-mongodb-63f80f3eb1cd/
