> -  原文地址：[How to Get Started with Node.js – Beginner's Guide to Node](https://www.freecodecamp.org/news/intoduction-to-nodejs/)
> -  原文作者：[Arash Arora](https://www.freecodecamp.org/news/author/arash/)
> -  译者：Papaya HUANG
> -  校对者：

![How to Get Started with Node.js – Beginner's Guide to Node](https://www.freecodecamp.org/news/content/images/size/w2000/2022/07/1200px-Node.js_logo.svg.png)

Node.js 是一个 JavaScript 运行时环境，将其能力扩展到服务器端。它是建立在 Chrome 的 V8 JavaScript 引擎上。

Node 是一个事件驱动的非阻塞 I/O 模型。这意味着它是异步的，并且因为一个请求而阻塞（而是立即移动到下一个请求），这使得 Node 异常快速和高效。

所谓事件驱动，是指一旦 Node 启动，它就会启动所有的变量和函数，并等待事件的发生。

![image-195](https://www.freecodecamp.org/news/content/images/2022/06/image-195.png)

NPM 即 Node 包管理工具（Node Package Manager），辅助你管理 Node 包。 NPX 即 Node 包执行（Node Package Execute），它可以执行任何 npm 包，甚至无需安装。

可以前往[https://nodejs.org/en/download/](https://nodejs.org/en/download/)下载 NPM。

## 编写你的第一个 Node.js 项目(Hello World)

在你的项目文件中创建一个名为 hello_world.js 的文件。

然后在如 VS Code 这样的代码编辑器中打开文件。在编辑器中输入`console.log(“Hello World”);`。

打开终端，并且导航到文件所在的位置。

输入`node hello_world.js`。

![image-196](https://www.freecodecamp.org/news/content/images/2022/06/image-196.png)

## 如何导入 Node 核心模块

让我们从基础包开始，即**fs (文件系统)**。我们使用它来创建、读取和修改文件。

导入 fs 模块，输入命令：`const fs = require(“fs”);`。

使用这个模块中的函数，可以参考[文档](https://nodejs.org/docs/latest-v17.x/api/fs.html#file-system)。

创建文件，可以使用`fs.writeFileSync(filename, content);`。

```js
const fs = require(“fs”);
fs.writeFileSync(“file.txt”, “Hi there..”);
```

![1*KzqmGo9SE7R3XPYOS-3LXg](https://miro.medium.com/max/446/1*KzqmGo9SE7R3XPYOS-3LXg.png)

在同一个文件中添加内容可以：

```js
fs.appendFileSync(filename, content);.
```

![1*dOqUqcuJ5a5vl_BQ_E0dSg](https://miro.medium.com/max/842/1*dOqUqcuJ5a5vl_BQ_E0dSg.png)

## 如何安装 NPM 包

我们将使用一个名为**superheroes（超级英雄）**的基础 NPM 包 (包含了一个随机的超级英雄清单)来帮助你理解 NPM 是如何运作的。

我们可以在 cmd 中使用这条命令来安装任意 npm 包：

```cmd
npm install superheroes
```

现在输入`const sh = require(“superheroes”);`导入这个安装好的包。

使用这条命令来随机展示超级英雄的名字：

```js
console.log(sh.random());.
```

![1*WfHNl2GDgyXBEwfV6oV0GQ](https://miro.medium.com/max/1400/1*WfHNl2GDgyXBEwfV6oV0GQ.png)

再来试一试另外一个包。让我们安装时下最流行的一个 npm 包——“chalk"，这个包可以改变终端字符串的样式。

使用以下命令安装 chalk(我们将安装版本 2.4.2，在这个版本中可以使用**require**方法)

```js
npm install chalk@2.4.2
```

现在我们可以通过命令改变文本字符串演示，使用这条命命来选择文本颜色：

```js
chalk.color(text)
```

![1*AQ5TX0vxzPn5N0lzrSBbJw](https://miro.medium.com/max/1400/1*AQ5TX0vxzPn5N0lzrSBbJw.png)

更多信息参考[chalk 包的文档](https://www.npmjs.com/package/chalk)。

## 如何在程序中初始化 NPM

我们可以使用以下命令来初始化 NPM：

```js
npm init
```

然后输入回车并且回答响应的问题：

![1*G_SVRqNdjuuWssQANvZgbw](https://miro.medium.com/max/1400/1*G_SVRqNdjuuWssQANvZgbw.png)

或者你可以直接通过`npm init -y`来完成初始化 (相当于所有问题的答案都是回车)。

![1*CafNbhzEhvGAayNHnpb29A](https://miro.medium.com/max/1400/1*CafNbhzEhvGAayNHnpb29A.png)

初始化完毕后会生成一个 **package.json** 文件：

![1*hYaMdTgcLdABQ1qqjQdpRQ](https://miro.medium.com/max/1400/1*hYaMdTgcLdABQ1qqjQdpRQ.png)

### 所以，package.json 是什么?

package.json 是 Nodejs 项目的一部分。它包含了所有依赖项（NPM 包）的记录和每一个项目的原数据。

如果其他人下载了这个项目，他们可以通过这个文件来安装所有运行程序需要的依赖项。

## 如何使用 Moment.js — 一个 NPM 包

这是使用最多的 NPM 包之一，可以使用这个包来解析和验证日期。

使用以下命令安装包：

```js
npm i moment
```

导入包：

```js
const moment = require(“moment”);
```

通过创建一个 Date 对象来获取当前日期和时间（JavaScript 方法），运行以下代码：

```js
const time = new Date();
```

使用包里的**moment**方法来解析或者格式化日期：

```js
const parsedTime = moment(time).format("h:mm:ss");
```

打印解析后的日期：

```js
console.log(parsedTime);
```

![1*V3hJ24cmTASx9k6Rv83gXg](https://miro.medium.com/max/1400/1*V3hJ24cmTASx9k6Rv83gXg.png)

该项目的 package.json 中包含的所有依赖项 — 这个例子中的依赖项就是**moment**。

![1*kKFpiaEOtsRbxN67do4HDw](https://miro.medium.com/max/1400/1*kKFpiaEOtsRbxN67do4HDw.png)

在项目文件夹中也有**node\_modules**文件夹。该文件夹包含了所有项目依赖的的依赖项，包含 moment，以及 moment 依赖的依赖包。

![1*-mxxdXnGzLxG98LE2ebMDQ](https://miro.medium.com/max/454/1*-mxxdXnGzLxG98LE2ebMDQ.png)

**package-lock.json**是项目文件夹中另一个文件，包含了项目名称、依赖项、依赖项版本和锁定版本等信息。

该文件描述了项目生成的树，使后续安装可以生成相同的树。

![1*b1VMBTQ3HtQtnaHUWGY8iQ](https://miro.medium.com/max/1400/1*b1VMBTQ3HtQtnaHUWGY8iQ.png)

# 如何使用 Express JS — 一个 NodeJS 框架

Express 是 Node.js 的一个 web 应用框架，该框架提供了全面的功能来支持 web 和移动应用的开发。

### 如何安装 Express

使用以下命令来创建 Express：

```js
npm install express
```

然后这样导入 Express：

```js
const express = require("express");
```

### 如何创建一个 Express 应用

使用以下命令来创建 Express 应用：

```js
const app = express()
```

### 如何在端口 3000 启动服务器

```js
app.listen(3000, () => { 
    console.log("Server running on port 3000");
}
```

![1*jD3FvRLcd_j2MuZ0U6_bXw](https://miro.medium.com/max/1400/1*jD3FvRLcd_j2MuZ0U6_bXw.png)

你可以打开[**http://localhost:3000**](http://localhost:3000/)登陆你创建的服务器。

![1*IMLmUArtV_ctmiAG18TnJg](https://miro.medium.com/max/844/1*IMLmUArtV_ctmiAG18TnJg.png)

这里的 “cannot get /” 意味着还没有定义路由 “/” 。

可以使用 `app.get()`函数定义 “/”路由。

**app.get (route, callback function)**函数被用于处理所有 GET 请求。

这个回调函数有两个参数，**req**和**res**，分别指代的是 HTTP 请求和期望的响应。参数名（req，res）并不是固定的，所有你可以重命名为其他值。

```js
app.get("/", (req,res) => { 
    // app.get处理GET请求
    // req - http请求, res - 期望响应
    res.send("Hello World"); // 给这个路由发送Hello World
}
```

## 如何使用 Express 来创建 Hello World 程序

在这个部分中我们将使用 Express 创建基本的 Hello World 程序：

```js
const express = require("express");
const app = express();
app.get("/", (req, res) => {  
    res.send("hello world");
});
app.listen(3000, () => {  
    console.log("Server running on 3000");
});
```

输出如下：

![1*uRqmENgESv8cdq-0oSaX8A](https://miro.medium.com/max/1060/1*uRqmENgESv8cdq-0oSaX8A.png)

## 如何在 Express 中渲染静态文件

这部分介绍如何使用 Express 来渲染静态文件的概念。

首先，创建一个新的项目文件夹，并且使用 `npm init -y`来初始化 npm。

使用 `npm i express`来安装 Express，并创建一个名为 app.js 的文件。

创建一个 app，并在端口 3000 监听：

```js
const express = require("express);
const app = express();
app.listen(3000, () => {  
    console.log("Server running on 3000");
}
```

在根目录创建一个名为 public 的文件夹，来渲染静态 web 页面，如：HTML、CSS 和 JS。

由于本教程重点在后端，所有我们不会花时间在前端部分，在 public 文件夹中，我们仅创建 HTML 文件。

![1*-OiGmKZaz7GKc3NdNVjZdg](https://miro.medium.com/max/1142/1*-OiGmKZaz7GKc3NdNVjZdg.png)

我们将导入 **path** 模块，并将特定路径合并到一起：

```js
const path = require(“path”);
```

并使用以下命令来渲染这些文件：

```js
app.use(express.static(path.join(__dirname, “/public”)));
```

**\_\_dirname →** 返回当前目录

```js
const express = require("express");
const path = require("path");
const app = new express();
app.use(express.static(path.join(__dirname, "/public")));
app.listen(3000, () => {  
    console.log("Server running on 3000");
});
```

输出如下：

![1*2U5Qi3XKOaNF0MjXSTo0tg](https://miro.medium.com/max/1034/1*2U5Qi3XKOaNF0MjXSTo0tg.png)

## 如何在 Express 中渲染动态文件

在这个部分我们将学习如何使用一个输入对象的值来渲染动态文件。

有一些，如：pug、handlebars、ejs 等模板用于动态页面的渲染。这些模板使得我们可以在运行时注入动态数据、if 条件和循环。

在这里我们将讨论 handlebars。

安装包 (express 和 hbs):

```js
npm i hbs express
```

创建文件名为 app.js 的文件，并且导入包：

```js
const express = require(“express”);
const hbs = require(“hbs”);
const path = require(“path”);
```

创建 Express，并在端口 3000 监听：

```js
const app = express();
app.listen(3000, (req,res) => {  
    console.log("Server running on 3000");
}
```

将视图引擎（view engine）设置为 hbs，使得 handlebars 生效：

```js
app.set(“view engine”, “hbs”);
```

视图引擎使得我们可以使用特定模板来渲染动态页面。

基本上，视图引擎会在根目录里寻找“视图（views）”文件夹。但为了避免报错，我们将“views”的路径包含在参数中：

```js
app.set(“views”, path.join(__dirname,“/views”);
```

然后在根目录中创建 **views** 文件夹。 并在文件夹中创建 index.hbs 文件(.hbs 是 handlebars 的扩展名)并插入以下 HTML 代码：

### index.hbs

```html
<html>  
    <head> 
        <title>Dynamic Rendering</title> 
    </head>
    <body>  
      <h1>Dynamic Rendering</h1>   
      <p>{{author}}</p> <!--由服务器接受到的动态数据-->
    </body>
</html>
```

**`{{author}}`** — 是插入动态数据的语法

我们再创建一个 app.get 函数来处理路由"/"上的 GET 请求，并且发送动态数据**author**。

```js
app.get("/", (req, res) => { 
    res.render("index", {    
        author: "Arash Arora", 
    });
});
```

**`res.render`**是一个渲染视图的函数，在这里我们传入了两个参数。第一个是去掉扩展名的文件名，第二个是本地变量对象，比方说 **author**。

### app.js 文件

```js
const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res) => {  
    res.render("index", {    
        author: "Arash Arora", 
    });
});
app.listen(3000, (req, res) => { 
    console.log("Server listening on 3000");
});
```

### 文件夹结构

![1*7xz9Fj17mTS5pZhxzf2dvw](https://miro.medium.com/max/502/1*7xz9Fj17mTS5pZhxzf2dvw.png)

输出如下：

![1*JQt1mgjLTU-LJJ0XS7UH3A](https://miro.medium.com/max/824/1*JQt1mgjLTU-LJJ0XS7UH3A.png)

# 如何使用 Handlebars 创建高级模板

在这一部分我们将学习可复用组件。在前面的章节我们给每一个页面的 header 和 footer 创建了相同的组件。

这里的重复性工作就可以通过高级模板来简化。也就是说我们创建一个组件，并在需要的地方反复使用。

### Handlebars 引入部分（Partials）的概念

Partials 是可被其他模板调用的 handlebar 文件。 Partials 是一个被广泛应用的模板类概念，所以不仅限于 Handlebars。

想要构建可以复用的模板，可以将它们单独放在同一个文件夹内（Partial），然后在不同的模板中使用。可以将 Partial 理解为模块化模板的一种简单技术。

可以通过以下步骤创建 partial：

-   初始化 npm → `npm init -y`
-   安装必要的包、Express 以及 hbs → `npm i express hbs`
-   创建文件夹模板
-   在文件夹模板内部创建另外两个文件夹： **partials 和 views**
-   创建文件 **app.js**

![1*98jLDll1IWq-vd8H0ieNCg](https://miro.medium.com/max/472/1*98jLDll1IWq-vd8H0ieNCg.png)

文件结构类似

让我们创建两个 partial 文件: header.hbs 和 footer.hbs。同时也创建两个视图：index.hbs 和 about.hbs。

![1*E32yq-EHCLFfUFzbgIbJJg](https://miro.medium.com/max/422/1*E32yq-EHCLFfUFzbgIbJJg.png)

### index.hbs

```html
<html lang="en">  
    <head>   
        <title>Advanced Templating</title>  
    </head>  
    <body>    
        {{>header}} <!--包含header组件-->
        <p>I'm a savior</p>    
        {{>footer}} <!-- 包含footer组件-->
    </body>
</html>
```

### about.hbs

```html
<html lang="en">  
    <head>    
        <title>Advanced Templating -- About</title> 
    </head>
    <body>   
        {{>header}}   
        <p>Handlebars</p>    
        {{>footer}} 
    </body>
</html>
```

### header.hbs

```html
<header>  
    <h1>Advanced Templating</h1> 
    <h3>{{title}}</h3><!--服务器传来的动态数据-->
    <a href="/">Home</a> 
    <a href="/about">About</a>
</header>
```

### footer.hbs

```html
<footer>  
    <p>Created by {{name}}</p> <!--name -> 动态数据 -->
</footer>
```

### app.js

```javascript
const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/templates/views"));
hbs.registerPartials(path.join(__dirname, "/templates/partials"));
app.get("/", (req, res) => {  
    res.render("index", {    
        title: "Home",    
        name: "Arash Arora",  
    });
});
app.get("/about", (req, res) => {  
    res.render("about", {    
        title: "About",    
        name: "Arash Arora",  
    });
});
app.listen(3000, () => {  
    console.log("Listening on port 3000");
});
```

这里基本和在 Express 中渲染动态数据章节类似，除了使用 partial 的时候我们需要 **注册 partials**。

### 如何注册 partials

```js
hbs.registerPartials(path_to_partials)
```

由于我们在模板文件夹中创建了 partials 目录，这里是 partials 的路径：

```js
hbs.registerPartials(path.join(__dirname, "/templates/partials"));
```

# 总结

在这本文章中，我们从理论到实践讲解了 Node.js。虽然我们不能从一篇简短的文章中习得 Node.js 所有内容，但是我已经尽我所能地在这篇文章中涵盖了重要的知识点，来辅助你开启 Node.js 之旅。

简言之，我们讨论了什么是 Node.js，即一个非阻塞、事件驱动的 JavaScript 运行时环境，它是异步的、可以使用单线程来执行操作。我们还讨论了使用最广泛的短小、灵活的 Node.js 的 web 应用框架——Express。

我们还讲解了 Node.js 的 NPM、 NPX 以及静态和动态渲染。

总而言之，Node.js 是一项令人惊叹的技术，而且由于其庞大的社区，其可能性是无穷无尽的。
