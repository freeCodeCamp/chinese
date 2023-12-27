> -  原文地址：[How to Deploy Your Node.js Application for Free with Render](https://www.freecodecamp.org/news/how-to-deploy-nodejs-application-with-render/)
> -  原文作者：[Yogesh Chavan](https://www.freecodecamp.org/news/author/yogesh/)
> -  译者：Papaya HUANG
> -  校对者：

![How to Deploy Your Node.js Application for Free with Render](https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/pexels-pixabay-163235--1-.jpg)

长久以来，Heroku 都是托管全栈应用的优秀平台。freeCodeCamp 早期大量使用 Heroku，其他各式各样的开源项目也是如此。

但由于 Heroku 决定停止免费提供服务，这一现象可能会发生改变。

你可能已经收到了 Heroku 的邮件，通知你从 2022 年 11 月 28 日开始，在该平台托管应用不再免费，你可以购买付费计划。

![no_free_heroku](https://www.freecodecamp.org/news/content/images/2022/08/no_free_heroku.png)

如果你想免费托管静态页面或者 web 应用可以使用[Netlify](https://www.netlify.com/)，具体操作可以[查看这篇文章](https://www.freecodecamp.org/news/how-to-deploy-react-router-based-app-to-netlify/)，但对于后端应用来说，并不存在太多如 Heroku 一样部署体验比较好的免费网站。

在这篇文章中，我们将学习如何使用[Render](https://render.com/)来部署搭配 Express 服务器的 Node.js 应用。 它的部署过程和 Hero 一样简单，并且免费。

让我们开始吧。

## 在部署应用之前需要做什么？

根据使用 Heroku 的经验来看，每一个应用都部署在一个由 Hero 随机分配的端点，可以使用`process.env.PORT`变量访问。

使用 Render 平台也是一样的。

所以你必须确保自己不是通过硬编码端点值来开启 Express 服务器，而是使用`process.env.PORT`变量:

```js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

// 你的代码

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
```

## **如果使用 Render 部署一个 Github 仓库**

改好端点之后，就可以开始部署你的应用了。

我准备好了[这个 GitHub 仓库](https://github.com/myogeshchavan97/github-repos-nodejs-api)来使用 Render 部署。这个 Github 仓库展示了一个排名前几位的仓库清单，以及每一个仓库获得的星星数量（以 JSON 的格式）。

让我们开始吧！

[Render](https://render.com/)提供如下图各种注册方式：

![sign_up_render](https://www.freecodecamp.org/news/content/images/2022/08/sign_up_render.png)

一旦注册并登陆账号之后，你会看到控制面板：

![dashboard](https://www.freecodecamp.org/news/content/images/2022/08/dashboard.png)

点击`Web Services`选项卡下的 `New Web Service`按钮来部署 Node.js 应用。

你也可以通过点击网页头部你头像旁边的 `New +` 按钮来选择 `Web Service`选择卡。

点击之后，会看到以下画面：

![new_web_service](https://www.freecodecamp.org/news/content/images/2022/08/new_web_service.png)

点击 Github 菜单下方的`Connect account`按钮，会看到以下画面： 

![install_render](https://www.freecodecamp.org/news/content/images/2022/08/install_render.png)

点击`Configure`链接，就可以允许 Render 选取你所有或者选择的 Github 仓库。

我希望只访问选择的仓库，也就是我需要部署的。所以我选择`Only select repositories`选项。

然后，点击在选择卡下方的`Select repositories`按钮，选择你想要部署的仓库。

![connect_github](https://www.freecodecamp.org/news/content/images/2022/08/connect_github.png)

选择完毕后，你会看到如下画面：

![selected_repository](https://www.freecodecamp.org/news/content/images/2022/08/selected_repository.png)

点击绿色按钮`Install`，使得 Render 有权访问你选择的仓库。

点击完毕后，你会被重定向到控制台，看到如下画面：

![connected_repository](https://www.freecodecamp.org/news/content/images/2022/08/connected_repository.png)

现在，点击`Connect`按钮，看到如下画面：

![deploy_details](https://www.freecodecamp.org/news/content/images/2022/08/deploy_details.png)

在`Name`框中，输入一个简短的名字来标识你的网站。

**注意:** 请保持`Name`值的简单，因为部署完毕后，它将成为应用的 URL。 所以如果我将`github-repos`设置为`Name`的值，我的应用 URL 会成为[`https://github-repos.onrender.com`](https://github-repos.onrender.com)。

所以请填写一个简单有意义的`Name`值。

如图填写剩下的部分：

![details](https://www.freecodecamp.org/news/content/images/2022/08/details.png)

在`Build Command`中填写`yarn`就等同于`yarn install`命令。Yarn 是一个类似于 npm 的包管理工具，但是比 npm 要快。

如果你的入口文件是 `index.js`，在`Start Command`中填写`node index.js`。

填写完所有细节之后，向下滚动页面，会看到`Plans`区域，自动勾选的是免费计划。如果没有被勾选，请勾选好，因为我们的目的是免费部署应用。

再向下滑动页面会看到`Advanced`按钮。

![advanced_options](https://www.freecodecamp.org/news/content/images/2022/08/advanced_options.png)

如果你的应用使用了环境变量，你可以在`Advanced`设置中输入。也可以在这里添加 `.env`文件，这样就不用你手动一个一个地添加。

![env_vars-1](https://www.freecodecamp.org/news/content/images/2022/08/env_vars-1.png)

注意`Auto-Deploy`的默认值是`Yes` – 所以一旦你向 Github 仓库推送了更新，它们就会被自动部署到 Render。

如果你并不想每次更改仓库的时候都自动部署，你可以在 `Auto-Deploy`下拉菜单中选择`No`。

现在，点击`Create Web Service`按钮来开始部署过程。

![10-1](https://www.freecodecamp.org/news/content/images/2022/08/10-1.png)

部署可能需要等待一段时间，有时候如果页面卡在了"in progress"阶段，可以尝试刷新一下页面。

一旦部署完成，你可以看到如图，应用被部署，有一个`Live` 小标：

![11](https://www.freecodecamp.org/news/content/images/2022/08/11.png)

你可以点击在顶部的应用 URL，在我的例子中，这个 URL 是[https://github-repos.onrender.com/](https://github-repos.onrender.com/)。

如果是首次部署应用，可能在访问网站的时候会遇到`Page is not working`报错。

等待一段时间，并且使用`Ctrl + R`或`Cmd + R(Mac)`来刷新页面。因为免费服务的硬件有限，所以 Render 平台需要一些时间来启动一个项目。

部署成功后，可以如下图一样看到你的应用：

![deployed_live](https://www.freecodecamp.org/news/content/images/2022/08/deployed_live.png)

**提示:** 想要 JSON 有格式地显示，你需要安装 Chrome 插件：[JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en)。

你或许知道，在使用 Heroku 的免费账户的时候，没如果没有新的请求进来，你的应用会在 30 分钟后进入到休眠模式。也就是如果再次请求需要花上一点时间。
  
同样的，使用 Render 的话，如果没有新的请求，应用会在 15 分钟后进入休眠模式。


### **感谢阅读!**

你可以在[这个仓库中](https://github.com/myogeshchavan97/github-repos-nodejs-api)找到完整的源代码。

****你可以在[这里](https://github-repos.onrender.com/)查看实时 demo****。

如果你想从零开始学 Redux，并且完成三个应用，以及[一个完整的食物点单应用](https://www.youtube.com/watch?v=2zaPDfCKAvM)，可以查看我的[Mastering Redux](https://master-redux.yogeshchavan.dev/)课程。

在这篇课程中，你将学习：

-   基础和高阶的 Redux
-   如何管理复杂的数据和对象状态
-   如何使用多个 reducer 来管理复杂的 redux 状态
-   如果排除 Redux 应用的错误
-   如果通过使用 react-redux 库来在 React 中使用 Redux 并使得你的应用是响应式的
-   如何使用 redux-thunk 库来处理异步 API 调用
-   使用 Redux 编写三个不同的 app

以及更多。

最后我们将从零开始搭建一个[食物点单应用](https://www.youtube.com/watch?v=2zaPDfCKAvM) ，包括付费模块和应用的部署。

****想要了解 JavaScript、React 或者 Node.js 最新的消息吗？ 请在[LinkedIn 上关注我](https://www.linkedin.com/in/yogesh-chavan97/)。****
