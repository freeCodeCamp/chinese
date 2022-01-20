> -  原文地址：[How to Create a React App with a Node Backend: The Complete Guide](https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/)
> -  原文作者：[Reed Barger](https://www.freecodecamp.org/news/author/reed/)
> -  译者：luojiyin
> -  校对者：

![如何使用 Node 后端创建 React 应用程序：完整指南](https://www.freecodecamp.org/news/content/images/size/w2000/2021/02/how-to-build-a-react-app-with-a-node-backend-alt.png)

React前端与Node后端相配合，对于你想建立的任何应用程序来说都是一个坚如磐石的组合。

本指南旨在帮助你尽可能容易地用React创建全栈项目。

让我们看看如何使用React和Node从头开始建立一个完整的项目，并将其部署到网络上。

> 想建立和部署你自己的React和Node应用程序吗？ [查看我的课程系列](http://bit.ly/12-react-projects)，它告诉你如何建立你自己的全栈React项目，比如这个项目。

## 你需要的工具

1. 确保Node和NPM已经安装在你的电脑上。你可以在以下网站下载这两样东西[nodejs.org](https://nodejs.org) (NPM包含在你安装的Node中，不需要另外安装)。
2. 使用你选择的代码编辑器。我正在使用并且个人推荐使用VSCode。你可以在以下网址下载VSCode [code.visualstudio.com](https://code.visualstudio.com).
3.  确保你的电脑上安装了Git。这对于用Heroku部署我们的应用程序是必要的。你可以在以下网站上得到它 [git-scm.com](https://git-scm.com)
4.  一个在[heroku.com](https://heroku.com)的账号。我们将使用Heroku将我们的应用程序完全免费地发布到网上。

## 第1步：创建你的Node（Express）后端

首先为你的项目创建一个文件夹，命名为`react-node-app`（例如）。

然后，将该文件夹拖入你的代码编辑器。

为了创建我们的Node项目，在你的终端运行以下命令。

```bash
npm init -y
```

这将创建一个package.json文件，这将使我们能够跟踪我们所有的应用程序脚本，并管理我们的Node应用程序需要的任何依赖。

我们的服务器代码将放在一个同名的文件夹中：`server`。让我们来创建这个文件夹。

在这个文件夹中，我们将放置一个文件，我们将从这个文件中运行我们的服务。`index.js`。

我们将使用Express为我们创建一个简单的Web服务器，如果环境变量`PORT`没有给定值，则运行在3001端口（Heroku将在我们部署应用程序时设置这个值）。

```js
// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
```

然后在我们的终端，我们将安装Express作为一个依赖项来使用它。

```bash
npm i express
```

之后，我们将在package.json中创建一个脚本，当我们用`npm start`运行它时，将启动我们的web服务。

```json
// server/package.json

...
"scripts": {
  "start": "node server/index.js"
},
...
```

最后，我们可以通过在终端运行npm start来运行我们的应用程序，我们应该看到它正在3001端口上运行。

```bash
npm start

> node server/index.js

Server listening on 3001
```

![代码片段  1](https://reedbarger.nyc3.digitaloceanspaces.com/how-to-create-a-react-app-with-a-node-backend/clip-1.gif)

## 第2步：创建一个API

我们想把我们的Node和Express服务器提供一个API，这样它就可以给我们的React应用提供数据，改变这些数据，或者做一些其他只有服务才能做的操作。

在我们的案例中，我们将简单地给我们的React应用发送一个JSON对象中的 "Hello from server!"消息。

下面的代码为路由`/api`创建了一个endpoint。

如果我们的React应用向该路由发出一个GET请求，我们就会用我们的JSON数据进行响应（使用`res`，代表响应）。

```js
// server/index.js
...

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
```

_注意：请确保将其放在`app.listen`函数之前。_

由于我们已经对Node代码进行了修改，我们需要重新启动我们的服务器。

要做到这一点，在终端按Command/Ctrl+C结束你的启动脚本，然后再次运行`npm start`重新启动它。

为了测试这一点，我们可以简单地在浏览器中访问`http://localhost:3001/api`，看看我们获得的信息。

![代码片段 2](https://reedbarger.nyc3.digitaloceanspaces.com/how-to-create-a-react-app-with-a-node-backend/clip-2.gif)

## 第3步：创建你的React前端

在创建了我们的后端之后，让我们转到前端。

打开另一个终端标签，使用create-react-app创建一个新的React项目，名称为`client`。

```bash
npx create-react-app client
```

之后，我们将拥有一个安装了所有依赖项的React应用。

我们要做的唯一改变是在package.json文件中添加一个名为`proxy`的属性(`client`文件夹下的package.json文件)。

这将允许我们向我们的Node服务器发出请求，而不必在每次向它发出网络请求时提供它所运行的原点（http://localhost:3001）。

```bash
// client/package.json

...
"proxy": "http://localhost:3001",
...
```

然后我们可以通过运行它的启动脚本来启动我们的React应用，这和我们的Node服务器一样。首先确保`cd`进入新创建的`client`文件夹。

之后，将在`localhost:3000`上启动(其实启动两个Node的进程，一个是React开发使用，一个是Express开发使用)。

```bash
cd client
npm start

Compiled successfully!

You can now view client in the browser.

Local:            http://localhost:3000
```

![代码片段 3](https://reedbarger.nyc3.digitaloceanspaces.com/how-to-create-a-react-app-with-a-node-backend/clip-3.gif)

## 第4步：从React向Node发出HTTP请求

现在我们有了一个工作的React应用，我们想用它来与我们的API进行交互。

让我们看看如何从我们之前创建的`/api`endpoint获取数据。

要做到这一点，我们可以前往`src`文件夹中的`App.js`组件，使用`useEffect`进行HTTP请求。

我们将使用Fetch API向我们的后端发出一个简单的GET请求，然后将我们的数据以JSON格式返回。

一旦我们得到了返回的数据，我们将得到消息属性（抓取我们从服务器发送的问候语），然后把它放在一个叫做`data`的状态变量中。

这将使我们能够在我们的页面中显示该消息，如果我们有的话。我们在JSX中使用一个条件，说如果我们的数据还没有，就显示文本 `Loading...`。

```js
// client/src/App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
```

![代码片段 5](https://reedbarger.nyc3.digitaloceanspaces.com/how-to-create-a-react-app-with-a-node-backend/clip-4.gif)

## 用Heroku将你的应用程序部署到网上

最后，让我们把我们的应用程序部署到网络上。

首先，在我们的`client`文件夹中，确保删除由create-react-app自动初始化的Git repo(rm -rf .git, `.git` 是隐藏文件夹，不能直接看到)。

这对部署我们的应用程序至关重要，因为我们要在我们项目的根文件夹（`react-node-app`）中建立Git repo，而不是在`client`中。

```bash
cd client
rm -rf .git
```

当我们部署时，我们的Node后端和React前端都将在同一个域名（即mycoolapp.herokuapp.com）提供服务。

我们看到我们的请求是如何被我们的Node API处理的，所以我们需要写一些代码，当我们的React应用被用户请求时（例如，当我们进入我们的应用的主页时）显示我们的React应用。

我们可以在`server/index.js`中加入以下代码来完成这个工作。

```js
// server/index.js
const path = require('path');
const express = require('express');

...

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
```

这段代码将首先允许Node使用`express.static`函数来访问我们建立的React项目的静态文件。

如果有一个GET请求进来，而这个请求没有被我们的`/api`路由处理后，我们的服务器将用我们的React应用来响应。

**这段代码允许我们的React和Node应用一起部署在同一个域名。**

然后我们可以告诉我们的Node App如何做，在我们的服务器package.json文件中添加一个`build`脚本，为生产构建我们的React应用。

```json
// server/package.json

...
"scripts": {
    "start": "node server/index.js",
    "build": "cd client && npm install && npm run build"
  },
...
```

我还建议提供一个名为`engines`的字段，在这里你要指定你用来构建项目的Node版本。这将被用于部署。

你可以通过运行`node -v`来获得你的Node版本，你可以把结果放在`engines`中（例如14.15.4）。

```json
// server/package.json

"engines": {
  "node": "your-node-version"
}
```

在这之后，我们准备使用Heroku进行部署，所以请确保你在[Heroku.com](https://heroku.com)有一个账户。

当你登录并查看你的仪表板(dashboard)，你将选择新建(New)>创建新的应用程序(Create New App)，并提供一个唯一的应用程序名称。

```bash
sudo npm i -g heroku
```

当安装完毕，你将通过CLI使用`heroku login`命令登录到Heroku。

```bash
heroku login

Press any key to login to Heroku
```

登录后，只需在 "Deploy "选项卡中为我们创建的应用程序遵循部署说明。

以下四个命令将为我们的项目初始化一个新的Git repo，将我们的文件添加到其中，提交它们，并为Heroku添加一个Git远程。

```
git init
heroku git:remote -a insert-your-app-name-here
git add .
git commit -am "Deploy app to Heroku"
```

然后，最后一步是通过推送我们刚刚添加的Heroku Git远程地址(heroku git:remote -a insert-your-app-name-here) ，来发布我们的应用程序。

```bash
git push heroku master
```

 恭喜！我们的全栈式React和Node应用已经上线。🎉

![代码片段 5](https://reedbarger.nyc3.digitaloceanspaces.com/how-to-create-a-react-app-with-a-node-backend/clip-5.gif)

当你想对你的应用程序进行修改时（并进行部署），你只需要用Git来添加你的文件(git add)，提交它们(git commit)，然后推送到我们的Heroku远程(git push)。

```bash
git add .
git commit -m "my commit message"
git push heroku master
```

## 想用React建立像YouTube、Instagram和Twitter这样的真实世界的应用程序吗？这就是怎么做。

在每个月的月底，我将发布一个独家课程，准确地告诉你如何复现从头到尾用React建立一个完整的应用程序。

 想在下一个课程出现时得到通知吗？**[在这里加入等候名单](http://bit.ly/12-react-projects).**