> * 原文地址：[How to create your portfolio website using React.js](https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/)
> * 原文作者：Dhruv Barochiya
> * 译者：pjwok
> * 校对者：

![How to create your portfolio website using React.js](https://cdn-media-1.freecodecamp.org/images/1*7snm7ve4mLm3kwrPl0r2ig.png)
![如何用React.js创建你的个人作品集网页](https://cdn-media-1.freecodecamp.org/images/1*7snm7ve4mLm3kwrPl0r2ig.png)

After my friends canceled our weekend plans ?, I was looking for something to kill time and finally ended up with a plan to create a portfolio website after going through my long pending list of ‘**W**ish-To-Do’ **t**hings.
我的朋友取消了我们的周末计划后，我在寻找可以打法时间的事情做做，最终从我的“想要做的事”的清单中选择了一个创建个人作品集网站的计划。

Many hours of searching for technologies and templates later,
在花费大量时间搜索技术和模板之后，
I ended up creating  [this][1]website using React.js and deploying it using Github pages. 
我打算用React.js创建[这个][1]网页，并把它部署到Github pages上。
You can find the code for the website  [here][2]  
你可以在[这里][2]找到网页的代码。
(It’s called a ‘**web-app**’ technically, but for this article, I will be referring to it as a ‘website’ … I hope that’s ok ?).
(这是一项被叫做web-app的技术，但是在本文中，我想用普通网页代替该说法，这样没问题吧？)

## What you will learn
## 你将学到什么

-   Some basic concepts of React.js
- 基础的React.js的概念
-   Create React-app from HTML website
- 从HTML页面创建React-app
-   Deploy your portfolio website using ‘Github pages’
- 通过Github pages部署你的个人作品集网页

## Some concepts you need to know before we start ..
## 在我们开始前你需要知道的一些概念

> _Note — feel free to skip this part if you are already familiar with basic concepts of React.js and React Components._  
> _提示1： 如果你对React.js和React组件的基础概念有一定了解可以跳过这部分。_
>   
> _Note — these points will provide a very basic idea of the React world. I highly recommend you to study more about React from the  [documentation][3]  and get hands-on with the help of  [freeCodeCamp][4]._
> _提示2：这些知识点能让你对React的世界有个基础的了解。我非常建议你通过[React官方文档][3]学习更多关于React的内容，同时在[freeCodeCamp][4]中寻求帮助。_

### What is React.js >
### 什么是React.js >

For now, it is enough to know that React.js is the JavaScript library used for building UI components. 
现在，你需要了解的是React.js是一个用来构建UI组件的JavaScript库。
It was created by the engineers of Facebook and nowadays, it is rocking the JavaScript world..
它是由Facebook的工程师创建的项目，现在正影响着JavaScript的世界...

### What is a React Component >
### 什么是React组件 >

React lets you define components as a class or a function. 
你可以通过class或者function方法来定义一个React组件。
You can provide optional inputs to the components called ‘**props**’.
你可以向组件传入叫 `props` 的参数。
Components let you split up the UI into  **independent**  sections like header, footer, and body. 
页面的UI可以通过组件的形式拆分成独立的部分，比如可以分成页头header，主体body，页尾footer。
Each component will work independently so any individual component can be rendered independently into the  [ReactDOM][5]without affecting the whole page.
每个组件都是独立运行的，因此[ReactDOM][5]可以单独渲染每个组件而不影响整个页面。每个组件都各自渲染到[ReactDOM][5]而不会影响整个页面。

It also comes with  **‘lifecycle methods**’ which let you define pieces of code you want to execute according to the state of the component like mounting, rendering, updating and un-mounting.
React组件提供的生命周期方法让你可以将想要执行代码放到组件的mounting(挂载),rendering(渲染)，updating(更新)和un-mounting(卸载)等各个阶段。

React components come with their own trade-offs. For example, we can reuse a component by exporting it to other components, but sometimes it gets confusing to handle multiple components talking and triggering renders for each other.
React组件的使用需要权衡利弊。比如，我们可以通过将组件导出到别的组件中来达到复用的效果，但有时候多个组件间的通信和触发渲染的问题会让人感到困惑。
this is how a component would look like!
这是React组件的样子。
```jsx
import React, { Component } from 'react'


```

### What is  [GitHub Pages][6]  \>
### 什么是[Github Pages][6] >

With GitHub Pages, you can easily deploy your site using GitHub for free and without the need to set up any infrastructure. They have provided modules so that you don’t have to worry about many things. If you stick around till the end you’ll see that it works like MAGIC!
通过Github Pages，你可以轻松的通过免费GitHub部署你的网页而无需担心配置问题。他们提供的模块使你无需担心很多事情。如果你坚持到最后，你会发现这项工作就像魔法一样神奇。

## Before you go ahead make sure to ..  
## 在我们开始前你需要确定...

### Decide what content you want to put up on your website
### 你需要决定哪些内容被放到你的网站上

Go through your latest resume once (if you don’t have one then  [create one now][7]  and postpone this project until next weekend ?). It will help you to have a clear idea about what kind of information you want to put on your portfolio website.
游览你最近的一份简历(如果没有就立马[创建一份][7] 或者还需要拖延项目到下星期？)。这会有助于你理清哪些信息需要被放到你的作品集网站上。

### Find inspiration
### 寻找设计灵感

Browse through the hundreds of free portfolio website templates on the web, see how and what you can use from them — take out a pen and paper and sketch out a rough diagram to get an idea of what your website will look like. I will be using  [this][8]  template to demonstrate.
通过网上搜寻游览免费的作品集网站，从中借鉴哪些内容适合自己的网站使用 —— 拿出纸和笔，将你对网站的想法通过草图展现出来。我会用[这个模板][8]来创作。

### Gather some amazing pictures of yourself
### 搜集一些你的美照

It’s obvious that you don’t want to look bad on your own portfolio website. So dig into your archives of photos to find the perfect photos for your website.
显然，你不想让自己邋遢的形象展示在你的作品集网站上。那就寻找你一张你最满意的个人照放在网站上吧。

### Tune into your favourite playlist
### 打开你的私人歌单

Legend has it that  **good things come only with good music…** _and_ you surely don’t want to miss out any great things.
俗话说的好 “好的作品总是伴随着好的音乐产生”，而且我确幸你也不想错过一些好的想法。

![](https://cdn-media-1.freecodecamp.org/images/1*7snm7ve4mLm3kwrPl0r2ig.png)

[a glimpse of my portfolio website][9]
[我的个人作品集网站][9]

## Let’s jump into the building part
## 让我们开始创建项目

In the following sections, I will describe steps to building the portfolio app but you don’t have to follow the same code I use. Focus on learning the concept and show some creativity! Further reading has been divided into three sections.
下面的内容，我会一步步展示如何去创建个人作品集网站，但是你不需要跟着我写同样的代码。专注于学习概念，并发挥你的创造力！接下来我会分三部分内容进行说明。

1.  Setting up the React-app
1. 设置React-app
2.  Breaking down the HTML page into React components
2. 将HTML页面分解成React组件
3.  Deploying your app onto Github pages
3. 在Github pages上部署你的应用

### Setting up React-app
### 创建React-app

We will be using  `[create-react-app][10]`  — a module provided by Facebook — which helps us to create React.js apps with ease and without worrying about build tools.
我们会使用 `[create-react-app][10]` —— Facebook提供的一个组件 —— 可以帮助我们轻松创建React应用而不需要担心构建工具。
-   Go to the console and run  `npm install create-react-app`  to install this module via npm (make sure that you have installed  `npm`before using it — follow  [this][11]  link for more info).
- 切换到控制台，通过npm 执行 `npm install create-react-app` 安装这个模块(确保在次之前安装了 `npm` —— [此处查看更多信息][11])
-   Now run  `npm create-react-app ${project-name}`  which will fetch build scripts and create a file-structure which will look like this.
- 接着运行 `npm create-react-app ${project-name}` 构建代码，创建出来的文件目录结构会像以下展示的这样
```
my-portfolio-app
├── README.md (description of the project for GitHUb)(Github的项目描述文件)
├── node_modules (stores all dependent modules for the project)(存储项目所需的模块)
├── package.json (stores all meta information of the prokect like dependencies,version,revisions etc.)(存储项目源信息，如依赖包，版本号等等)
├── .gitignore (files declared here will be ignored while uploading to GitHub like node_modules )(这里声明 的文件和目录在提交到GitHub是会被忽略，如node_modules)
├── public (here you will store all images,JS,CSS files) (存储图片，js，css文件)
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json 
└── src (our main code for app lies here)(应用的主要代码)
    ├── {create component folder here}(创建的组件的文件夹)
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

Create a  `components`  folder under the  `src`  directory. This is where we will store our components in the future.
在 `src` 目录下创建一个 `components` 目录。将来我们会在这里存放组件。

-   Copy all the images, fonts, HTML and CSS files from the HTML  `template`  you decided to work with into the  `public`  folder.
- 从HTML `template` 中拷贝所有的图片，字体，HTML和CSS到public目录

Now your project directory should look like this.
现在你的目录结构应该看起来像这样。

![](https://cdn-media-1.freecodecamp.org/images/1*IcnlLThnGN65xfgkFpnnBg.png)

file-structure
目录结构

-   Run the  `npm install`  command which will install dependent modules under  `node_module`  directory.
- 通过运行 `npm install` 安装所有的模块到 `node_module`目录中。
-   If you’ve got it right up until now, then running the  `npm start`  command will start the React app on the  `localhost`. Go to  `[https://localhost:3000][12]`and you should be able to see the starter page of the React-app.
- 如果你已经到了这一步了， 那么运行 `npm start`，Rect应用会被加载到 `localhost` 的3000端口，`[https://localhost:3000][12]`，现在你应该能够看到React-app的开始页面了。

### Breaking-down the HTML page into React components..
### 拆分HTML页面到你的React组件中

Remember the  `component`  folder which we created under  `src`  directory in the previous step, now we will break down the HTML template page into components and combine these components to make our React-app.
请回忆我们前面在 `src` 目录下创建的 `component` 文件夹，现在我们将要把HTML模板页面拆分成一个个组件，然后把这些组件拼接起来组成我们的React应用。

-   First, you need to identify which components you can create from the monolithic HTML file — like header, footer and contact me. You need to be a little creative here!!
- 首先，你需要确定可以从单个HTML文件中创建哪些组件 —— 就像header(头部), footer(尾部) 和 contact me(联系我)。你需要在这里发挥点创造力！！
-   Look for tags like  _section/div_ which aren’t nested into some other  _section/div_. These should contain code about that particular section of the page which is independent of other sections. Try looking into my  [_GitHub Repo_][13]  to get a better idea about this one.
- 寻找类似 _section/div_ 这类内部没有在嵌套别的 _section/div_ 的标签。这些应包含有关页面特定部分的代码，该代码应独立于其他部分。可以通过我的[_GitHub Repo_][13]来获取灵感。
    _Hint: Use the ‘**inspect element**’ tool to play around with the code and take notice of the effect of changes within the browser._
    _提示：使用“**inspect element(检查元素)**”工具来演示代码，并注意浏览器中对应的影响。_
-   These pieces of HTML code will be used in the  `render()`  method of the component. The  `render()`  method will return this code whenever a component gets rendered into the ReactDOM. Take a look at the code blocks given below for reference.
- 这些HTML代码片段会被应用到组件的 `render()` 方法中。无论组件是否渲染到ReactDOM中，`render()` 方法都会返回这些代码。下面展示的代码以供参考。

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

‘home’ section of the HTML file
“home” 部分的HTML文件

```jsx
import React, { Component } from 'react'

```

React component created from the ‘home’ HTML section
从“home” HTML部分创建的React组件

Hint: If things are getting confusing on the react side — try focusing on the concept of ‘how to identify wanna be components from the HTML codebase’. After getting comfortable with React, implementation will be a piece of cake.
提示：如果这些拆分的步骤让你对React感到困惑 —— 试着重点关注“如何从HTML代码库中辨别需要成为组件”的概念。当你渐渐的适应了React的使用，实现功能将会是小菜一碟。

Did you notice that there are some changes in the HTML code?  `class`  became  `className`. These changes are required because React doesn’t support HTML ? — they have come up with their own HTML-like JS syntax which is called  [JSX][18] . So, we need to change some parts of the HTML code to make it JSX.
HTML代码有些变动你发现了吗？ `class` 变成了 `className`。 由于React不支持HTML，所以这些变动就是必要的吗？—— 他们形成了自己的HTML —— 类似于JS语法，叫做[JSX][18]。所以，我们需要在HTML代码基础上做些改变，让它们变成JSX。

I bumped into this  [HTML to JSX converter][19]  during this project, which converts HTML code into JSX for you ?. I highly recommend using this rather than changing your code manually.
在这个项目中，我使用了[HTML to JSX转换器][19]，一个可以将HTML代码转换为JSX代码的工具。我非常建议使用这些工具而不是手动转换代码。

After some time, you should come up with some different components. Now the  `EndGame`  is near!! Combine these different components under one  `App.js`  component (YES!! You can render one component from another component!) and your portfolio app will be ready.
经过一些时间，你应该有了几个不同类型的组件。现在马上就要`游戏结束`了！在App.js组件中将这些不同类型的组件结合在一起(没错！你可以从一个组件中渲染另一个组件！)，你的个人作品集应用马上就要好了。

```jsx
import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Projects from './components/projects'
import Blog from './components/blog'
import Timeline from './components/timeline'
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

combined all components under app.js
在app.js中联合所有组件
Notice in the above code that we need to first  `import`  the components in order to use them in the  `render()`  section. 
注意前面的代码，为了能够在 `render()` 中使用代码，首先我们需要 `import` 组件。
And we can use the components just by adding  `<component-name></component-name>`or just  `<component-name/>`  tag in the render method.
然后我们可以将 `<component-name></component-name>` 或 `<component-name/>` 将标签添加到方法里。

-   Run  `npm start`  from your terminal and you should be able to see the changes reflected in the website. You don’t need to run this command again if you have made more changes in the code, it will be reflected automatically when you save those changes. You can do some lightning fast development thanks to the  `[hot reload][20]` [feature][21].
- 从你的终端运行 `npm start`，然后你应该能在网页上看到变化。当你需要对代码做出修改时，你不需要再次运行这条命令，React会自动响应这些变化更新内容。这丢多亏了`[hot reload(热加载)][20]` [优点][21] 可以让我们进行快速轻量级的部署。 
-   Play around with the HTML and CSS to change the content according to your resume and make your portfolio even cooler by changing the content, trying out different fonts, changing the colours and adding photos of your choice.
- 根据你简历的内容通过HTML和CSS去美化页面，使你的作品集看起来更加炫酷点，可以尝试使用添加不同的字体，颜色和图片。

## Deploy React-app to Github pages
## 将React-app部署到Github pages上

Okay, so you survived until this point… take a moment to appreciate your hard work. But you still need to complete your deployment so that you can share your cool work with your friends who ditched those weekend plans.
好了，恭喜你坚持到了这里... 奖励一下努力工作的自己，休息一下。但是你仍然需要完成你的部署，这样才能向你的朋友(那个周末爽约的人)炫耀一下你的劳动成果。

-   First, you need to install the npm library of Github pages. To install, run this command  `_npm install gh-pages_`  on your terminal.
- 首先，你需要下载Github pages的那npm包。通过在你的终端运行 `_npm install gh-pages_`
Now, you need to make the following changes in your  `_manifest.json_`  file:
现在，你需要修改一下 `_manifest.json_` 文件：

-   Add the  `_homepage_`  field — value will be in the following format —  `[https://{github_id}.github.io/{github_repo}][22]`
- 添加 `_homepage_` 属性 —— 值会以这样的格式呈现 —— `[https://{github_id}.github.io/{github_repo}][22]`
-   Add  `_predeploy_`  and  `_deploy_`  fields under  `_scripts_`
- 在 `_scripts_` 添加 `_predeploy_` 和 `_deploy_` 属性

Now your manifest.json should look like this:
现在你的 manifest.json应该长这样：
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
        "yarn": "^1.13.0"},
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "predeploy": "yarn run build",
        "deploy": "gh-pages -d build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"},
    "eslintConfig": {
        "extends": "react-app"},
    "browserslist": [
        ">0.2%",
        "not dead",
        "not ie <= 11",
        "not op_mini all"
    ]
}
```

manifest.json after adding gh-pages link
添加gh-pages链接的manifest.json

Now go to the terminal, run  `npm run deploy`  and wait for the magic!! Your app will be deployed after the deployment scripts execute successfully. Verify whether your app has deployed or not by visiting the link you provided in the  `homepage`  field.
现在转到终端界面，运行 `npm run deploy` 命令，然后等待神奇事情发生。你的应用会在脚本成功执行后部署。通过你在 `homepage` 中提供的地址，检擦你的应用是否被正确部署。

**_Caution:_**  Please be careful when deploying anything onto the web. Perform safety checks like removing internal links, passwords, or anything that you don’t want to be there in the hands of smart people out there.
**_警告：_** 将任何东西部署到网上是请务必认真仔细。进行安全检查，移除内部链接，密码或者任何你不想被出现在聪明人手中的东西。

## Homework for you ..
## 留给你的作业

Congratulations! You have finally created and deployed your portfolio app. If you are interested, then you can add these features to your website
厉害！你最终创建并部署了你的个人作品集应用。如果你有兴趣，可以将这些功能添加到你的网站中

-   **Blog feature:** create your own blog using Node.js and a NoSQL database like MongoDB and merge it into this portfolio website.
- **博客功能** 通过Node.js和非关系型数据库像MongoDB这样的创建你的个人博客并整合到你的网站中。
-   **Gallery:**  add a section to the page where you can show the screenplay of the recent photos from your social media websites.
- **橱窗展示** 在页面中添加一个可以展示来自你的自社交媒体网站最近发布照片的区域。
-   **Twitter Feed:**  add a section showing recent tweets by you.
- **来自Twitter的反馈** 在页面中添加一个展示你最近的推文的区域
-   **Random Quote:**  add a section showing some random motivational quotes.
- **随机的名人名言** 在页面中添加一个随机展示名人名言的区域。

If you implement any of these features, share your work with me. I would be more than happy to help ? ( if I can ?)
如果你实现了任一一个功能，请与我分享你的成果。同时我非常乐意帮助别人(如果我帮得上的话)
## Wrapping up ..
## 摘要

I would like to take a moment to acknowledge the work of the people who gave me the inspiration and knowledge to complete this article.
我想花一点时间来感谢那些给我灵感和知识以完成本文的人。

-   [**_Quincy_**][24] **_Larson,  [Sahat Yalkabov][25]  & community:_**  For creating  **_freeCodeCamp —_** the platform where you can learn and gain knowledge about almost everything related to web technologies; using hands-on tutorials  _and_  all without paying fees. ?
-   **_Colorlib:_**  for providing state of the art templates which were a huge inspiration for my portfolio website. ?
-   [**_Daniel Lo Nigro_**][26] **_& community:_**  for creating  [**_HTML to JSX_**][27] **_Compiler,_** which turned out to be handy while converting HTML blocks into JSX code. ?
-   **_My dearest friends:_**  who helped me in correcting my mistakes.
-   **YOU:**  for sticking around, I hope you had a productive time. Keep exploring and building amazing things!

- [**_Quincy Larson_**][24], [**_Sahat Yalkabov & community_**][25]: 创建**_freeCodeCamp_** ——一个学习和获取与Web技术相关的几乎所有知识的平台；使用自己动手代码的教学方式，并且全部无需付费。  
- **_Colorlib_**: 提供最好设计的模板，这对我的个人网站有巨大的启发。
- [**_Daniel Lo Nigro & community:_**][26]: 提供 [**_HTML to JSX_**][27] 的编译，事实证明，将HTML块转换为JSX代码时非常方便。
- **_我的挚友_**: 帮助我纠正错误。
- **_你_**:  坚持下去，我希望你度过了一个高产的时光。保持探索精神，创造更多神奇的事物。

![](https://cdn-media-1.freecodecamp.org/images/0*FgSZRsUOdqfFZJBY)

Photo by  [Ruediger Theiselmann][28]  on  [Unsplash][29]

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
