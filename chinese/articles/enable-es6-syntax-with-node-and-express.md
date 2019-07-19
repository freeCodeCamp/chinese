> * 原文地址：[How to enable ES6 (and beyond) syntax with Node and Express](https://www.freecodecamp.org/news/how-to-enable-es6-and-beyond-syntax-with-node-and-express-68d3e11fe1ab/)
> * 原文作者：[Jonathan Albert M. Cunanan](https://github.com/jcunanan05)
> * 译者：[Zou Li](https://github.com/zlv2s)
> * 校对者：


也许你已经在前端开发中使用过 ES6 语法了，但是当你转向后端开发，开始使用 Node.js 和 Express 时， 你会发现 ES6（以及上） 语法新特性不能完全被支持，如果确实是这样，那这篇文章值得你好好读一下。你会学习怎么一步步在开发和生产环境中对相关脚本进行配置，还会学到怎么监视 node.js 应用程序中的任何更改并自动重启服务。

### 目录内容

- [预备知识](#prerequisites)
- [安装 Express](#installing-express)
- [脚本配置](#setting-up-scripts)
- [小技巧](#bonus)
- [TL;DR](#tl-dr)

<h3 id="prerequisites">预备知识</h3>

在开始之前，我们需要做些准备工作。
1. 确保你的当你安装了 Node.js 和 npm。可以通过 [ Node.js Source](https://nodejs.org/en/download/) 或者 [NVM (Node Version Manager)](https://github.com/creationix/nvm) 来安装，我推荐安装最新版或者目前稳定版。
2. 接下来，我们需要安装 Express Generator cli，它可以快速帮我们生成 Express 应用骨架，在命令行工具中输入：

```bash
npm i -g express-generator
```

3. 了解常用的终端命令，在本教程中会涉及到大多数命令，所以即使不会也不用担心。
4. 安装好编辑器，打开命令行终端

<h3 id="installing-express">安装 Express</h3>

我们使用 Express generator 来创建一个新项目，它会自动帮我们生成一些代码。并将其中一些语法转换为 ES6 语法，在这个阶段我们就可以验证 ES6 语法是否能正常使用。

#### 项目设置

在命令行工具中输入下面的命令，你可以自定义你喜欢的项目名 `your-project-name`，`--no-view` 指定我们不需要在项目骨架中使用模板引擎，例如 handlebars，ejs，pug 等。

```bash
express your-project-name --no-view
```

创建项目后，我们进入项目根目录。如果你使用的是 Windows Powershell 和 Linux 终端，输入下面的命令：

```bash
cd your-project-name
```

接下来打开代码编辑器，我使用的是 VSCode，你可以使用任何你喜欢的编辑器

#### 安装包，移动和删除部分文件

使用下面的命令为我们的项目安装依赖，并将其中某些文件夹移动位置

```bash
npm install
```

在等待安装的过程中，你可以做如下几步操作：

- 创建 `src/` 目录
- 将 `bin/`，`app.js` 和 `routes/` 移动到 `src` 目录
- 将 `bin` 目录中的 `www` 文件重命名为 `www.js`
- 将 `public/` 移动到项目根目录
- 删除 `routes/users.js`，我们暂时不需要

整个项目结构如下：

![](https://user-gold-cdn.xitu.io/2019/7/18/16c03a0b83b0c55d?w=800&h=515&f=png&s=55851)

因为修改了文件结构，我们的服务器启动脚本现在就失效了，待会儿我们再解决这个问题。

#### ES6 语法转换

将 Express 应用生成器生成的代码转换为 ES6 语法的过程有点枯燥，所以我直接将代码贴在下面，你可以复制粘贴。

- `bin/www.js` 文件：

```
// bin/www.js
```

```
/** * Module dependencies. */
```

```js
import app from '../app';
import debugLib from 'debug';
import http from 'http';
```

```js
const debug = debugLib('your-project-name:server');
```

```
// generated code below.
```

我们几乎只需要在文件的顶部和底部进行修改，其他的代码不需要。

- `routes/index.js` 文件：

```
// routes/index.js
```

```js
import express from 'express';
var router = express.Router();
```

```js
/* GET home page. */
router.get('/', function(req, res, next) {  
    res.render('index', { title: 'Express' });
});
```

```js
export default router;
```

- `app.js` 文件：

```
// app.js
```

```js
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
```

```js
import indexRouter from './routes/index';
```

```js
const app = express();
```

```js
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
```

```js
app.use('/', indexRouter);
```

```js
export default app;
```

因为 `public/` 被移动到了项目根目录，所以我们需要在 `app.js` 中修改 Express 静态资源路径，注意，在这里我们将 `'public'` 改为 `'../public'`。

```js
app.use(express.static(path.join(__dirname, '../public')));
```

其次，我们删除了 `routes/users.js` 文件，所以还需要在 `app.js`中移除以下代码

```
// remove these lines
```

```js
var usersRouter = require('./routes/users');
app.use('/users', usersRouter);
```

现在代码语法转换已经完成了，我们接下来开始配置脚本。

<h3 id="setting-up-scripts">脚本配置</h3>

在这个阶段，我们会一步步来配置，开发环境的生产环境的配置有点区别。我们会组合部门脚本方便重用。

#### 安装 `npm-run-all`

由于某些终端命令不能在 Windows cmd 上运行，我们需要安装 `npm-run-all` 包，这样我们的脚本就可以在任何环境下运行。 在终端中输入以下命令：

```bash
npm install --save npm-run-all
```

#### 安装 babel 和其他包

Babel 是一个 Javascript 编译器，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中，比如 Node.js。在项目根目录打开终端命令行，输入下面命令，我们会安装最新版的 babel(Babel 7))

```bash
npm install -D @babel/core @babel/cli @babel/preset-env @babel/node
```

也许你已经注意到了，在上面的那些命令中，我有时候使用 -D，有时使用 --save，这两种标志是在告诉 npm 我们的包是是作为 `devDependency` 还是 `dependency`，即开发依赖和生产依赖。当安装完成后，我们就可以添加 dev 脚本了。

#### 添加 dev 脚本

我前面说过，`package.json` 中的脚本命令现在无法运行，因为我们修改了部分文件。现在它也运行不了，因为我们使用了 ES6 import 语法。这时候我们需要利用之前安装的包，babel 配置文件，和 `babel-node` 来让 node server 运行起来。

在项目根目录创建 `.babelrc` 文件，写入以下代码：

```josn
{ "presets": ["@babel/preset-env"] }
```

因为我们使用 Babel 来转换不同类型的 js 语法，所以需要在 `.babelrc` 中配置 `preset-env` 预设（之前安装的），它会告诉 Babel 去转换哪种类型。

在这些都设置好后，我们就可以测试 node server能否在 ES6 语法环境下运行，首先，在 `package.json` 中添加 dev 脚本：

```json
"scripts": { 
    "start": "node ./bin/www",    
    "server": "babel-node ./src/bin/www",    
    "dev": "NODE_ENV=development npm-run-all server"
}
```
在上面的代码中我们添加了 server 和 dev 两个脚本，使用代码分隔将他们组合起来，再通过 `npm-run-all` 来运行所有命令。

现在输入以下命令来测试服务器能否正常启动：

```bash
npm run dev
```

可以正常工作！

目前，`start` 脚本命令还不能运行，我们会在后面添加 `prod` 脚本时来修复。

#### 添加 prod 脚本

prod 脚本 和 dev 脚本有点区别，我们需要将 `src` 目录中的所有 js 文件代码转换为 nodejs 能够识别的语法形式。运行 prod 脚本会生成一个和 `src/` 目录结构类似的 `dist/` 文件夹，但是每次在运行该脚本之前，我们需要将旧的 `dist/` 文件夹删除，确保我们运行的是最新生成的代码。下面是具体步骤：

- 创建 build 脚本，它会转换 `src/` 中的文件代码并生成新的 `dist/` 文件夹。
- 安装 rimraf 包，并新建 clean 脚本，用来删除 `dist/` 文件夹。
- 新建 prod 脚本，将 clean，build，start server 脚本组合起来。 

#### Clean 脚本

在创建 build 脚本之前，我们先要安装 rimraf 包，用来删除某个文件夹

```bash
npm install rimraf --save
```

安装好后，在 `package.json` 的 scripts 字段中加入 clean 脚本，我们会在 build 脚本中使用到它，现在整个 scripts 字段结构如下：

```json
"scripts": { 
    "start": "node ./bin/www", 
    "server": "babel-node ./src/bin/www", 
    "dev": "NODE_ENV=development npm-run-all server",  
    "clean": "rimraf dist"
},
```

#### Build 脚本

现在我们来添加 build 脚本，会用到 babel-cli（之前安装过的），如下：

```json
"scripts": {   
    "start": "node ./bin/www",
    "server": "babel-node ./src/bin/www", 
    "dev": "NODE_ENV=development npm-run-all server",  
    "clean": "rimraf dist",  
    "build": "babel ./src --out-dir dist"  
},
```

#### Prod 脚本

prod 脚本组合了 build，clean，和 start 脚本，现在我们来修改下 start 脚本：

```json
"scripts": {   
    "start": "npm run prod", 
    "server": "babel-node ./src/bin/www", 
    "server:prod": "node ./dist/bin/www", 
    "dev": "NODE_ENV=development npm-run-all server", 
    "clean": "rimraf dist", 
    "build": "babel ./src --out-dir dist",   
    "prod": "NODE_ENV=production npm-run-all clean build server:prod"
},
```

注意我们在 scripts 字段中还添加了一个 server:prod 脚本，它的作用是在生成的 `dist/` 文件夹中运行 node server。我们还将 start 脚本指向了 prod 脚本，因为托管平台(如 Heroku 或 AWS)一般都是使用 npm start 命令来启动服务。

到目前为止，我们的所有配置完成了，现在就可以在 Node 中使用最新的 js 语法。

<h3 id="bonus">小技巧：监视文件变化并自动重启服务</h3>

使用 nodemon 我们可以在 nodejs 上自动重启服务。同样先安装 nodemon 包，并新建配置文件 `nodemon.json`，在项目根目录下的终端中运行此命令：

```bash
npm i -D nodemon
```

`nodemon.json` 配置文件：

```json
{ 
    "exec": "npm run dev", 
    "watch": ["src/*", "public/*"], 
    "ext": "js, html, css, json"
}
```

现在，只要 `src/` 和 `public/` 文件夹中的文件有变化，服务器就会自动重启。

我们将其添加到 `package.json` 的 scripts 字段中：

```json
"scripts": {  
    "start": "npm run prod",   
    "server": "babel-node ./src/bin/www",  
    "server:prod": "node ./dist/bin/www",   
    "dev": "NODE_ENV=development npm-run-all server", 
    "clean": "rimraf dist",   
    "build": "babel ./src --out-dir dist",  
    "prod": "NODE_ENV=production npm-run-all clean build server:prod",  
    "watch": "nodemon" 
},
```

运行 watch 脚本：

```bash
npm run watch
```

<h3 id="tl-dr">TL;DR</h3>

上面的教程简化为以下几个步骤，我会附上仓库地址，你可以参考学习：

- 在命令行终端中使用 `express your-project-name` 新建项目。
- 新建 `src/` 目录，将 `bin/`，`routes/` 和 `app` 移动到该目录；将部分代码转换为 ES6 语法；重命名 `bin/www` 为 `www.js`。
- 安装开发依赖和生产依赖

```bash
npm i -D @babel/cli @babel/core @babel/node @babel/preset-env nodemon
```

```bash
npm i --save rimraf npm-run-all
```
- package.json 中添加脚本

```json
"scripts": {   
    "start": "npm run prod", 
    "server": "babel-node ./src/bin/www",  
    "server:prod": "node ./dist/bin/www",   
    "dev": "NODE_ENV=development npm-run-all server", 
    "clean": "rimraf dist",  
    "build": "babel ./src --out-dir dist", 
    "prod": "NODE_ENV=production npm-run-all clean build server:prod", 
    "watch": "nodemon" 
},
```

- 新建 `nodemon.json` 和 `.babelrc`，并配置


```json
// nodemon.json

{  
    "exec": "npm run dev", 
    "watch": ["src/*", "public/*"], 
    "ext": "js, html, css, json"
}
```


```json
// .babelrc

{  
"presets": ["@babel/preset-env"]
}
```

- 运行 `npm run dev`，`npm run prod`，`npm run watch` 测试脚本
- 完整的[仓库代码](https://github.com/jcunanan05/express-es6-sample/tree/for-article)

### 总结

最后，希望你在本教程中能学到东西，感谢你的阅读!

happy coding!

