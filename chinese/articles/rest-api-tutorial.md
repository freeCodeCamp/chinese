> -   原文地址：[REST API Tutorial – REST Client, REST Service, and API Calls Explained With Code Examples](https://www.freecodecamp.org/news/rest-api-tutorial-rest-client-rest-service-and-api-calls-explained-with-code-examples/)
> -   原文作者：Vaibhav Kandwal
> -   译者：
> -   校对者：

![REST API Tutorial – REST Client, REST Service, and API Calls Explained With Code Examples](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

Ever wondered how login/signup on a website works on the back-end? Or how when you search for "cute kitties" on YouTube, you get a bunch of results and are able to stream off of a remote machine?
有想过网站的注册/登录功能在后端是怎么实现的吗？你在 YouTube 上搜索“cute kitties”，得到一堆结果，然后观看视频的过程又是怎么回事？

In this beginner friendly guide, I will walk you through the process of setting up a RESTful API. We'll declassify some of the jargon and have a look at how we can code a server in NodeJS. Let's dive a bit deeper into JavaScript!
这个入门教程会带着你们一起构建一个 RESTful API，我会解释一些术语，并使用 NodeJS 来编码实现一个服务端程序。//todo

## Get that jargon away
## 术语解释

So, what is REST? According to Wikipedia:
REST 是什么？维基百科：

> **Representational state transfer**  (**REST**) is a software architectural style that defines a set of constraints to be used for creating Web services. RESTful Web services allow the requesting systems to access and manipulate textual representations of Web resources by using a uniform and predefined set of stateless operations
> **表现层状态转换（Representational state transfer）**  (**REST**) 是一种软件架构风格，它定义了一组创建 Web 服务的约束。RESTful Web 服务允许请求系统通过使用统一和预定义的无状态操作集来访问和操作 Web 资源的文本表示。

Let's demystify what that means (hopefully you got the full form). REST is basically a set of rules for communication between a client and server. There are a few constraints on the definition of REST:
揭开神秘面纱，看看 REST 究竟是什么意思。REST 基本上就是客户端和服务端通信的一组规则。REST 架构的限制条件：

1.  **Client-Server Architecture**: the user interface of the website/app should be separated from the data request/storage, so each part can be scaled individually.
2.  **Statelessness**: the communication should have no client context stored on server. This means each request to the server should be made with all the required data and no assumptions should be made if the server has any data from previous requests.
3.  **Layered system**: client should not be able to tell if it is communicating directly with the server or some intermediary. These intermediary servers (be it proxy or load balancers) allow for scalability and security of the underlying server.


Okay, so now that you know what RESTful services are, here are some of the terms used in the heading:

1.  **REST Client**: code or an app that can access these REST services. You are using one right now! Yes, the browser can act as an uncontrolled REST client (the website handles the browser requests). The browser, for a long time, used an in-built function called XMLHttpRequest for all REST requests. But, this was succeeded by  [FetchAPI][1], a modern,  [promise][2] based approach to requests. Others examples are code libraries like  [axios][3],  [superagent][4]  and  [got][5]  or some dedicated apps like  [Postman][6]  (or an online version,  [postwoman][7]!), or a command line tool like  [cURL][8]!.
2.  **REST Service**: the server. There are many popular libraries that make creation of these servers a breeze, like  [ExpressJS][9] for NodeJS and  [Django][10] for Python.
3.  **REST API**: this defines the endpoint and methods allowed to access/submit data to the server. We will talk about this in great detail below. Other alternatives to this are: GraphQL, JSON-Pure and oData.

## So tell me now, how does REST look?
## 现在告诉我，REST 是什么？

In very broad terms, you ask the server for a certain data or ask it to save some data, and the server responds to the requests.
广义地说，就是客户端向服务端请求访问指定数据或者在服务端保存数据、服务端响应客户端请求的过程。

In programming terms, there is an endpoint (a URL) that the server is waiting to get a request. We connect to that endpoint and send in some data about us (remember, REST is stateless, no data about the request is stored) and the server responds with the correct response.
从编程角度来说，服务端提供了一个端点（URL）等待接收客户端的请求，客户端连接这个端点并发送数据（记住，REST 是无状态的，请求中携带的数据不会被存储）、服务端返回正确的响应。

Words are boring, let me give you a demonstration. I will be using Postman to show you the request and response:
文字是枯燥的，我们来看看示例。使用 Postman 来展示请求和响应：

![](https://www.freecodecamp.org/news/content/images/2020/04/image-162.png)

postman: setting up request
配置 postman 请求

The returned data is in JSON (JavaScript Object Notation) and can be accessed directly.
返回的数据是 JSON（JavaScript Object Notation）格式的，可以直接访问。

Here,  `https://official-joke-api.appspot.com/random_joke`  is called an endpoint of an API. There will be a server listening on that endpoint for requests like the one we made.
这里的 `https://official-joke-api.appspot.com/random_joke` 被称为 API 端点，服务端会监听指向这个端点的请求。

## Anatomy of REST:
## REST 剖析：

Alright, so now we know that data can be requested by the client and the server will respond appropriately. Let's look deeper into how a request is formed.
现在我们知道了客户端可以向服务端发送携带数据的请求、服务端会返回适当的响应，再来深入了解一下如何构造一个请求。

1.  **Endpoint**: I have already told you about this. For a refresher, it is the URL where the REST Server is listening.
2.  **Method**: Earlier, I wrote that you can either request data or modify it, but how will the server know what kind of operation the client wants to perform? REST implements multiple 'methods' for different types of request, the following are most popular:  
    \-  **GET**: Get resource from the server.  
    \-  **POST**: Create resource to the server.  
    \-  **PATCH** or  **PUT**: Update existing resource on the server.  
    \-  **DELETE**: Delete existing resource from the server.  
    
3.  **Headers**: The additional details provided for communication between client and server (remember, REST is stateless). Some of the common headers are:  
    **Request:**  
    \-  _host_: the IP of client (or from where request originated)  
    \-  _accept-language_: language understandable by the client  
    \-  _user-agent_: data about client, operating system and vendor  
    **Response**:  
    \-  _status_: the status of request or HTTP code.  
    \-  _content-type_: type of resource sent by server.  
    \-  _set-cookie_: sets cookies by server
4.  **Data**: (also called body or message) contains info you want to send to the server.

## Enough with the details – show me the code.
## 跳出细节 - 开始编码

Let's begin coding a REST Service in Node. We will be implementing all the things we learnt above. We will also be using ES6+ to write our service in.
在 Node 环境中编写 REST 服务的代码，我们会实现上面学到的全部内容。在编码过程中会用到 ES6+ 的语法。 

Make sure you have Node.JS installed and  `node`  and  `npm`  are available in your path. I will be using Node 12.16.2 and NPM 6.14.4.
要确保你已经安装了 Node.JS，并且 `node` 和 `npm` 命令是可用的，我自己使用的版本分别是 Node 12.16.2 和 NPM 6.14.4。
 
Create a directory  `rest-service-node`  and cd into it:
创建一个名为 `rest-service-node` 的文件夹，并使用 cd 命令进入：

```shell
mkdir rest-service-node
cd rest-service-node
```

Initialize the node project:
初始化 node 项目：

```shell
npm init -y
```

The  `-y`  flag skips all the questions. If you want to fill in the whole questionnaire, just run  `npm init`.
参数 `-y` 表示跳过所有配置项。如果想要手动填写这些配置的话，执行 `npm init`。
 
Let's install some packages. We will be using the ExpressJS framework for developing the REST Server. Run the following command to install it:
安装一些依赖包，这里使用 ExpressJS 框架来开发 REST 服务。执行以下命令来安装：

```shell
npm install --save express body-parser
```

What's  `body-parser`  there for? Express, by default, is incapable of handling data sent via POST request as JSON.  `body-parser`  allows Express to overcome this.

Create a file called  `server.js`  and add the following code:

```js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

```

The first two lines are importing Express and body-parser.

Third line initializes the Express server and sets it to a variable called  `app`.

The line,  `app.use(bodyParser.json());`  initializes the body-parser plugin.

Finally, we are setting our server to listen on port  `5000`  for requests.

### Getting data from the REST Server:

To get data from a server, we need a  `GET`  request. Add the following code before  `app.listen`:

```js
const sayHi = (req, res) => {
  res.send("Hi!");
};

```

We have created a function  `sayHi`  which takes two parameters  `req`  and  `res`  (I will explain later) and sends a 'Hi!' as response.

`app.get()`  takes two parameters, the route path and function to call when the path is requested by the client. So, the last line translates to: Hey server, listen for requests on the '/' (think homepage) and call the  `sayHi`  function if a request is made.

`app.get`  also gives us a  `request`  object containing all the data sent by the client and a  `response`  object which contains all the methods with which we can respond to the client. Though these are accessible as function parameters, the general naming convention suggests we name them  `res`  for  `response`  and  `req`  for  `request`.

Enough chatter. Let's fire up the server! Run the following server:

```shell
node server.js
```

If everything is successful, you should see a message on console saying:  _Server is running on port 5000._

_Note: You can change the port to whatever number you want._

![](https://www.freecodecamp.org/news/content/images/2020/04/image-160.png)

Open up your browser and navigate to  `[http://localhost:5000/][11]`  and you should see something like this:

![](https://www.freecodecamp.org/news/content/images/2020/04/image-161.png)

There you go! Your first  `GET`  request was successful!

### Sending data to REST Server:

As we have discussed earlier, let's setup how we can implement a  `POST`  request into our server. We will be sending in two numbers and the server will return the sum of the numbers. Add this new method below the  `app.get`  :

```js
app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.send(The sum is: </span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>a <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">+</span> b<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">);
});
```

Here, we will be sending the data in JSON format, like this:

```json
{
    "a":5,
    "b":10
}
```

Let's get over the code:

On line 1, we are invoking the .`post()`  method of ExpressJS, which allows the server to listen for  `POST`  requests. This function takes in the same parameters as the  `.get()`  method. The route that we are passing is  `/add`, so one can access the endpoint as  `[http://your-ip-address:port/add][12]`  or in our case  `localhost:5000/add`. We are inlining our function instead of writing a function elsewhere.

On line 2, we have used a bit of ES6 syntax, namely, object destructuring. Whatever data we send via the request gets stored and is available in the  `body`  of the  `req`  object. So essentially, we could've replaced line 2 with something like:

```js
const num1 = req.body.a;
const num2 = req.body.b;
```

On line 3, we are using the  `send()`  function of the  `res`  object to send the result of the sum. Again, we are using template literals from ES6. Now to test it (using Postman):

![](https://www.freecodecamp.org/news/content/images/2020/04/image-163.png)

So we have sent the data 5 and 10 as  `a`  and  `b`  using them as the body. Postman attaches this data to the request and sends it. When the server receives the request, it can parse the data from  `req.body`  , as we did in the code above. The result is shown below.

Alright, the final code:

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
  res.send(The sum is: </span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>a <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">+</span> b<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">);
});

```

## REST Client:

Okay, we have created a server, but how do we access it from our website or webapp? Here the REST client libraries will come in handy.

We will be building a webpage which will contain a form, where you can enter two numbers and we will display the result. Let's start.

First, let's change the  `server.js`  a bit:

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

We imported a new package  `path`, which is provided by Node, to manipulate path cross-platform. Next we changed the  `GET`  request on '/' and use another function available in  `res`, ie.  `sendFile`, which allows us to send any type of file as response. So, whenever a person tries to navigate to '/', they will get our  `index.html`  page.

Finally, we changed our  `app.post`  function to return the sum as JSON and convert both  `a`  and  `b`  to integers.

Let's create an html page, I will call it  `index.html`, with some basic styling:

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

Let's add a  `script`  tag just before the closing body tag, so we don't need to maintain a  `.js`  file. We will begin by listening for the  `submit`  event and call a function accordingly:

```js
<script>
    document.addEventListener("submit", sendData);
</script>
```

First we need to prevent page refresh when the 'Add' button is clicked. This can be done using the  `preventDefault()`  function. Then, we will get the value of the inputs at that instant:

```js
function sendData(e) {
    e.preventDefault();
    const a = document.querySelector("#num1").value;
    const b = document.querySelector("#num2").value;
}
```

Now we will make the call to the server with both these values  `a`  and  `b`. We will be using the  [Fetch API][13], built-in to every browser for this.

Fetch takes in two inputs, the URL endpoint and a JSON request object and returns a  [Promise][14]. Explaining them here will be out-of-bounds here, so I'll leave that for you.

Continue inside the  `sendData()`  function:

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
        ).innerText = The sum is: </span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>result<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">;
    })
    .catch(err => console.log(err));
```

First we are passing the relative URL of the endpoint as the first parameter to  `fetch`. Next, we are passing an object which contains the method we want Fetch to use for the request, which is  `POST`  in this case.

We are also passing  `headers`, which will provide information about the type of data we are sending (`content-type`) and the type of data we accept as response (`accept`).

Next we pass  `body`. Remember we typed the data as JSON while using Postman? We're doing kind of a similar thing here. Since express deals with string as input and processes it according to content-type provided, we need to convert our JSON payload into string. We do that with  `JSON.stringify()`. We're being a little extra cautious and parsing the input into integers, so it doesn't mess up our server (since we haven't implemented any data-type checking).

Finally, if the promise (returned by fetch) resolves, we will get that response and convert it into JSON. After that, we will get the result from the  `data`  key returned by the response. Then we are simply displaying the result on the screen.

At the end, if the promise is rejected, we will display the error message on the console.

Here's the final code for  `index.html`:

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
      .then(res =&gt; res.json())
      .then(data =&gt; {
        const { result } = data;
        document.querySelector(
          ".result"
        ).innerText = `The sum is: ${result}`;
      })
      .catch(err =&gt; console.log(err));
  }
<span class="token tag" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 0, 85);"><span class="token tag" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 0, 85);"><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">&lt;/</span>script</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">&gt;</span></span>
```

I have spun up a  [little app on glitch][15]  for you to test.

## Conclusion:

So in this post, we learnt about REST architecture and the anatomy of REST requests. We worked our way through by creating a simple REST Server that serves  `GET`  and  `POST`  requests and built a simple webpage that uses a REST Client to display the sum of two numbers.

You can extend this for the remaining types of requests and even implement a full featured  [back-end CRUD app][16].

I hope you have learned something from this. If you have any questions, feel free to reach out to me over twitter! Happy Coding!

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
