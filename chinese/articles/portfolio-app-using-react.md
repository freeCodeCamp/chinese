> -   原文地址：[How to create your portfolio website using React.js](https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/)
> -   原文作者：Dhruv Barochiya
> -   译者：pjwok
> -   校对者：

![如何用React.js创建你的个人作品集网页](https://cdn-media-1.freecodecamp.org/images/1*7snm7ve4mLm3kwrPl0r2ig.png)

我的朋友取消了我们的周末计划后，我在寻找可以打法时间的事情做做，最终从我的“想要做的事”的清单中选择了一个创建个人作品集网站的计划。

在花费大量时间搜索技术和模板之后，我打算用 React.js 创建[这个][1]网页，并把它部署到 Github pages 上。你可以在[这里][2]找到网页的代码。(这是一项被叫做 web-app 的技术，但是在本文中，我想用普通网页代替该说法，这样没问题吧？)

## 你将学到什么

-   基础的 React.js 的概念
-   从 HTML 页面创建 React-app
-   通过 Github pages 部署你的个人作品集网页

## 在我们开始前你需要知道的一些概念

> _提示 1： 如果你对 React.js 和 React 组件的基础概念有一定了解可以跳过这部分。_
>
> _提示 2：这些知识点能让你对 React 的世界有个基础的了解。我非常建议你通过[React 官方文档][3]学习更多关于 React 的内容，同时在[freeCodeCamp][4]中寻求帮助。_

### 什么是 React.js >

现在，你需要了解的是 React.js 是一个用来构建 UI 组件的 JavaScript 库它是由 Facebook 的工程师创建的项目，现在正影响着 JavaScript 的世界...

### 什么是 React 组件 >

你可以通过 class 或者 function 方法来定义一个 React 组件。

你可以向组件传入叫 `props` 的参数。

页面的 UI 可以通过组件的形式拆分成独立的部分，比如可以分成页头 header，主体 body，页尾 footer。

每个组件都是独立运行的，因此[ReactDOM][5]可以单独渲染每个组件而不影响整个页面。每个组件都各自渲染到[ReactDOM][5]而不会影响整个页面。

React 组件提供的生命周期方法让你可以将想要执行代码放到组件的 mounting(挂载),rendering(渲染)，updating(更新)和 un-mounting(卸载)等各个阶段。

React 组件的使用需要权衡利弊。比如，我们可以通过将组件导出到别的组件中来达到复用的效果，但有时候多个组件间的通信和触发渲染的问题会让人感到困惑。

这是 React 组件的样子。

```jsx
import React, { Component } from 'react';
```

### 什么是[Github Pages][6] >

通过 Github Pages，你可以轻松的通过免费 GitHub 部署你的网页而无需担心配置问题。他们提供的模块使你无需担心很多事情。如果你坚持到最后，你会发现这项工作就像魔法一样神奇。

## 在我们开始前你需要确定

### 你需要决定哪些内容被放到你的网站上

游览你最近的一份简历(如果没有就立马[创建一份][7] 或者还需要拖延项目到下星期？)。这会有助于你理清哪些信息需要被放到你的作品集网站上。

### 寻找设计灵感

通过网上搜寻游览免费的作品集网站，从中借鉴哪些内容适合自己的网站使用 —— 拿出纸和笔，将你对网站的想法通过草图展现出来。我会用[这个模板][8]来创作。

### 搜集一些你的美照

显然，你不想让自己邋遢的形象展示在你的作品集网站上。那就寻找你一张你最满意的个人照放在网站上吧。

### 打开你的私人歌单

俗话说的好 “好的作品总是伴随着好的音乐产生”，而且我确幸你也不想错过一些好的想法。

![](https://cdn-media-1.freecodecamp.org/images/1*7snm7ve4mLm3kwrPl0r2ig.png)

[我的个人作品集网站][9]

## 让我们开始创建项目

下面的内容，我会一步步展示如何去创建个人作品集网站，但是你不需要跟着我写同样的代码。专注于学习概念，并发挥你的创造力！接下来我会分三部分内容进行说明。

1. 设置 React-app
2. 将 HTML 页面分解成 React 组件
3. 在 Github pages 上部署你的应用

### 创建 React-app

我们会使用 `[create-react-app][10]` —— Facebook 提供的一个组件 —— 可以帮助我们轻松创建 React 应用而不需要担心构建工具。

-   切换到控制台，通过 npm 执行 `npm install create-react-app` 安装这个模块(确保在次之前安装了 `npm` —— [此处查看更多信息][11])
-   接着运行 `npm create-react-app ${project-name}` 构建代码，创建出来的文件目录结构会像以下展示的这样

```plain
my-portfolio-app
├── README.md (Github的项目描述文件)
├── node_modules (存储项目所需的模块)
├── package.json (存储项目源信息，如依赖包，版本号等等)
├── .gitignore (这里声明 的文件和目录在提交到GitHub是会被忽略，如node_modules)
├── public (存储图片，js，css文件)
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src (应用的主要代码)
    ├── {在这里创建Components组件文件}
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

在 `src` 目录下创建一个 `components` 目录。将来我们会在这里存放组件。

-   从 HTML `template` 中拷贝所有的图片，字体，HTML 和 CSS 到 public 目录

现在你的目录结构应该看起来像这样。

![](https://cdn-media-1.freecodecamp.org/images/1*IcnlLThnGN65xfgkFpnnBg.png)

目录结构

-   通过运行 `npm install` 安装所有的模块到 `node_module`目录中。
-   如果你已经到了这一步了， 那么运行 `npm start`，Rect 应用会被加载到 `localhost` 的 3000 端口，`[https://localhost:3000][12]`，现在你应该能够看到 React-app 的开始页面了。

### 拆分 HTML 页面到你的 React 组件中

请回忆我们前面在 `src` 目录下创建的 `component` 文件夹，现在我们将要把 HTML 模板页面拆分成一个个组件，然后把这些组件拼接起来组成我们的 React 应用。

-   首先，你需要确定可以从单个 HTML 文件中创建哪些组件 —— 就像 header(头部), footer(尾部) 和 contact me(联系我)。你需要在这里发挥点创造力！！
-   寻找类似 _section/div_ 这类内部没有在嵌套别的 _section/div_ 的标签。这些应包含有关页面特定部分的代码，该代码应独立于其他部分。可以通过我的[_GitHub Repo_][13]来获取灵感。

    _提示：使用“**inspect element(检查元素)**”工具来演示代码，并注意浏览器中对应的影响。_

-   这些 HTML 代码片段会被应用到组件的 `render()` 方法中。无论组件是否渲染到 ReactDOM 中，`render()` 方法都会返回这些代码。下面展示的代码以供参考。

```jsx
<section id="colorlib-hero" class="js-fullheight" data-section="home">
    <div class="flexslider js-fullheight">
        <ul class="slides">
        <li style="background-image: url(images/img_bg_1.jpg);">
            <div class="overlay"></div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div class="slider-text-inner js-fullheight">
                            <div class="desc">
                                <h1>Hi! <br>I'm Jackson</h1>
                                <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2>
                                    <p><a class="btn btn-primary btn-learn">Download CV <em class="icon-download4"></em></a></p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li style="background-image: url(images/img_bg_2.jpg);">
            <div class="overlay"></div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div class="slider-text-inner">
                            <div class="desc">
                                <h1>I am <br>a Designer</h1>
                                    <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2>
                                    <p><a class="btn btn-primary btn-learn">View Portfolio <em class="icon-briefcase3"></em></a></p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        </ul>
    </div>
</section>
```

“home” 部分的 HTML 文件

```jsx
import React, { Component } from 'react';
```

从“home” HTML 部分创建的 React 组件

提示：如果这些拆分的步骤让你对 React 感到困惑 —— 试着重点关注“如何从 HTML 代码库中辨别需要成为组件”的概念。当你渐渐的适应了 React 的使用，实现功能将会是小菜一碟。

HTML 代码有些变动你发现了吗？ `class` 变成了 `className`。 由于 React 不支持 HTML，所以这些变动就是必要的吗？—— 他们形成了自己的 HTML —— 类似于 JS 语法，叫做[JSX][18]。所以，我们需要在 HTML 代码基础上做些改变，让它们变成 JSX。

在这个项目中，我使用了[HTML to JSX 转换器][19]，一个可以将 HTML 代码转换为 JSX 代码的工具。我非常建议使用这些工具而不是手动转换代码。

经过一些时间，你应该有了几个不同类型的组件。现在马上就要`游戏结束`了！在 App.js 组件中将这些不同类型的组件结合在一起(没错！你可以从一个组件中渲染另一个组件！)，你的个人作品集应用马上就要好了。

```jsx
import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Projects from './components/projects';
import Blog from './components/blog';
import Timeline from './components/timeline';
class App extends Component {
    render() {
        return (
            <div id="colorlib-page">
                <div id="container-wrap">
                    <Sidebar></Sidebar>
                    <div id="colorlib-main">
                        <Introduction></Introduction>
                        <About></About>
                        <Projects></Projects>
                        <Blog></Blog>
                        <Timeline></Timeline>
                    </div>
                </div>
            </div>
        );
    }
}
```

在 app.js 中联合所有组件

注意前面的代码，为了能够在 `render()` 中使用代码，首先我们需要 `import` 组件。

然后我们可以将 `<component-name></component-name>` 或 `<component-name/>` 将标签添加到方法里。

-   从你的终端运行 `npm start`，然后你应该能在网页上看到变化。当你需要对代码做出修改时，你不需要再次运行这条命令，React 会自动响应这些变化更新内容。这丢多亏了`[hot reload(热加载)][20]` [优点][21] 可以让我们进行快速轻量级的部署。
-   根据你简历的内容通过 HTML 和 CSS 去美化页面，使你的作品集看起来更加炫酷点，可以尝试使用添加不同的字体，颜色和图片。

## 将 React-app 部署到 Github pages 上

好了，恭喜你坚持到了这里... 奖励一下努力工作的自己，休息一下。但是你仍然需要完成你的部署，这样才能向你的朋友(那个周末爽约的人)炫耀一下你的劳动成果。

-   首先，你需要下载 Github pages 的那 npm 包。通过在你的终端运行 `_npm install gh-pages_`

现在，你需要修改一下 `_manifest.json_` 文件：

-   添加 `_homepage_` 属性，它的值会以这样的格式呈现 —— `[https://{github_id}.github.io/{github_repo}][22]`
-   在 `_scripts_` 添加 `_predeploy_` 和 `_deploy_` 属性

现在你的 manifest.json 应该长这样：

```json
{
    "name": "portfolio-app",
    "version": "0.1.0",
    "private": true,
    "homepage": "https://Dhruv34788.github.io/me",
    "dependencies": {
        "gh-pages": "^2.0.1",
        "react": "^16.8.3",
        "react-dom": "^16.8.3",
        "react-scripts": "2.1.5",
        "yarn": "^1.13.0"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "predeploy": "yarn run build",
        "deploy": "gh-pages -d build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    "eslintConfig": {
        "extends": "react-app"
    },
    "browserslist": [">0.2%", "not dead", "not ie <= 11", "not op_mini all"]
}
```

添加 gh-pages 链接的 manifest.json

现在转到终端界面，运行 `npm run deploy` 命令，然后等待神奇事情发生。你的应用会在脚本成功执行后部署。通过你在 `homepage` 中提供的地址，检擦你的应用是否被正确部署。

**_警告：_** 将任何东西部署到网上是请务必认真仔细。进行安全检查，移除内部链接，密码或者任何你不想被出现在聪明人手中的东西。

## 留给你的作业

厉害！你最终创建并部署了你的个人作品集应用。如果你有兴趣，可以将这些功能添加到你的网站中

-   **博客功能** 通过 Node.js 和非关系型数据库像 MongoDB 这样的创建你的个人博客并整合到你的网站中。
-   **橱窗展示** 在页面中添加一个可以展示来自你的自社交媒体网站最近发布照片的区域。
-   **来自 Twitter 的反馈** 在页面中添加一个展示你最近的推文的区域
-   **随机的名人名言** 在页面中添加一个随机展示名人名言的区域。

如果你实现了任何一个功能，请与我分享你的成果。同时我非常乐意帮助别人(如果我帮得上的话)

## 摘要

我想花一点时间来感谢那些给我灵感和知识以完成本文的人。

-   [**_Quincy Larson_**][24], [**_Sahat Yalkabov & community_**][25]: 创建**_freeCodeCamp_** ——一个学习和获取与 Web 技术相关的几乎所有知识的平台；使用自己动手代码的教学方式，并且全部无需付费。
-   **_Colorlib_**: 提供最好设计的模板，这对我的个人网站有巨大的启发。
-   [**_Daniel Lo Nigro & community:_**][26]: 提供 [**_HTML to JSX_**][27] 的编译，事实证明，将 HTML 块转换为 JSX 代码时非常方便。
-   **_我的挚友_**: 帮助我纠正错误。
-   **_你_**: 坚持下去，我希望你度过了一个高产的时光。保持探索精神，创造更多神奇的事物。

![](https://cdn-media-1.freecodecamp.org/images/0*FgSZRsUOdqfFZJBY)

来自 [Ruediger Theiselmann][28] 平台 [Unsplash][29]

[1]: https://dbarochiya.github.io/me/
[2]: https://github.com/Dhruv34788/me
[3]: https://reactjs.org/docs/getting-started.html
[4]: https://www.freecodecamp.org/
[5]: https://reactjs.org/docs/react-dom.html
[6]: https://pages.github.com/
[7]: https://resumegenius.com/resume-templates
[8]: https://colorlib.com/preview/#jackson
[9]: https://dbarochiya.github.io/me/
[10]: https://facebook.github.io/create-react-app/docs/getting-started
[11]: https://www.rosehosting.com/blog/install-npm-on-ubuntu-16-04/
[12]: https://localhost:3000/
[13]: https://github.com/Dhruv34788/me
[14]: https://colorlib.com/
[15]: https://colorlib.com/
[16]: https://colorlib.com/
[17]: https://colorlib.com/
[18]: https://reactjs.org/docs/introducing-jsx.html
[19]: https://magic.reactjs.net/htmltojsx.htm
[20]: https://facebook.github.io/react-native/blog/2016/03/24/introducing-hot-reloading
[21]: https://facebook.github.io/react-native/blog/2016/03/24/introducing-hot-reloading
[22]: https://%7Bgithub_id%7D.github.io/%7Bgithub_repo%7D
[23]: https://dhruv34788.github.io/me%22
[24]: https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/undefined
[25]: https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/undefined
[26]: https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/undefined
[27]: https://magic.reactjs.net/htmltojsx.htm
[28]: https://unsplash.com/@docrowdee?utm_source=medium&utm_medium=referral
[29]: https://unsplash.com/?utm_source=medium&utm_medium=referral
