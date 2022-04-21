> -  原文地址：[Modules in JavaScript – CommonJS and ESmodules Explained](https://www.freecodecamp.org/news/modules-in-javascript/)
> -  原文作者：[Germán Cocca](https://www.freecodecamp.org/news/author/gercocca/)
> -  译者：Papaya HUANG
> -  校对者：

![Modules in JavaScript – CommonJS and ESmodules Explained](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/carson-arias-7Z03R1wOdmI-unsplash.jpg)
大家好！这篇文章将讲解JavaScript模块。

当代软件设计和工程中大量使用模块技术。

首先我们将学习什么是模块，有哪些不同的模块；然后我们将探讨为什么模块有用以及常用模块的基本语法和例子；最后我们会讨论打包，打包的重要性以及如何打包。

话不多说，让我们直入主题！

## 目录

-   [什么是模块，模块为什么重要](#whataremodulesandwhyaretheyuseful)
-   [模块的种类](#typesofmodules)
    -   [CommonJS](#commonjsmodules)
    -   [ES模块](#esmodules)
-   [使用模块](#usingmodules)
-   [打包模块](#bundlingmodules)
-   [总结](#roundup)

# 什么是模块，模块为什么重要

模块是一段你可以在其他文件中回调或者使用的代码。模块设计与把整个项目的代码存放在一个文件中的操作截然不同。

在开发大型项目的时候，把代码分成不同的模块奏效的原因是：

-  把顾虑和功能拆分到不同的文件可以帮助视觉化代码，理顺代码的框架。
-  组织后的代码更容易维护，更不易出现错误和bug。
-  可以在不同的文件或者项目的不同部分复用模块，这样就避免了重复书写同样的代码。

与其把程序的所有组件都放在一个文件中，我们不如把它分成不同的部分和模块，每一个部分和模块代表一个功能或者顾虑。

如果你认为上述对概念的讲解不够清晰，不要担心，马上我们就进入例子环节。

# 模块的种类

在JavaScript中有很多方法来实施模块。

JavaScript被创造出来的时候只是用于处理网站的小型脚本语言，所以最开始JavaScript并不支持模块。

但随着JavaScript这门语言以及相应生态圈的成长，开发者们开始需要模块功能，所以当时涌现出来了不同的方式和库来实现模块功能。

我们将讨论最近并且是运用最广泛的两种模块——CommonJS和ES模块。

顺便提一句：你知道[Javascript是只花十天就创建出来的吗](https://thenewstack.io/brendan-eich-on-creating-javascript-in-10-days-and-what-hed-do-differently-today/)？

我认为在分析JavaScript的复杂性以及这门语言是如何演化的时候，必须记住这门语言诞生之初的设计并不是为了实现现在的功能的。是JavaScript生态圈推动了这门语言的改变。

## CommonJS模块

[CommonJS](https://en.wikipedia.org/wiki/CommonJS)是在JavaScript中使用模块的一组标准，是在2009年由Mozilla的工程师Kevin Dangoor提出的。
CommonJS主要被用做使用Node的服务端JS，浏览器不支持CommonJS。

顺便提一句，Node之前支持用CommonJS来使用模块，但现在ES模块这个更新的手段也被采用。

让我们现在在实际代码中看看CommonJS。

使用模块之前我们需要先在电脑上安装node，可以使用命令行 `npm init -y`.

首先，我们创建一个 `main.js` 文件，并在里面写入一个简单的函数。

```
const testFunction = () => {
    console.log('Im the main function')
}

testFunction()
```

然后，假设我们希望在主文件里调用另一个函数，但是我们不希望这个函数在主文件内，因为它不属于核心功能。我们创建一个`mod1.js` 文件，并写入代码：

```
const mod1Function = () => console.log('Mod1 is alive!')
module.exports = mod1Function
```

`module.exports` 这个关键字声明了我们想从该文件中导出的所有内容。

在`main.js` 文件中使用这个函数，我们可以这样做：

```
mod1Function = require('./mod1.js')

const testFunction = () => {
    console.log('Im the main function')
    mod1Function()
}

testFunction()
```

我们先声明任意一个变量，然后使用 `require` 引入想要引用的内容。 十分容易;)

如果想要在同一个模块中输出不止一个内容，我们可以这样做：

```
const mod1Function = () => console.log('Mod1 is alive!')
const mod1Function2 = () => console.log('Mod1 is rolling, baby!')

module.exports = { mod1Function, mod1Function2 }
```

然后在`main.js`文件中，可以这样使用两个函数：

```
({ mod1Function, mod1Function2 } = require('./mod1.js'))

const testFunction = () => {
    console.log('Im the main function')
    mod1Function()
    mod1Function2()
}

testFunction()
```

很容易，不是吗！虽然容易，但确实非常有用的工具。

## ES模块

现在回顾一下ES模块。ES模块是ES6（2015年）年引入的标准。创建的目的是为了标准化JS模块运作，和在浏览器中使用模块的方法（在此之前并不支持模块）。

相较而言，ES模块更新，刚支持浏览器和采用Node的服务端模块。

我们来看下面的代码片段，同样我们必须先安装Node应用 `npm init -y`.

然后点击`package.json` 并且加上 `"type": "module"` ，如下：

```
{
  "name": "modulestestapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module"
}
```
如果不按照上述步骤，并且想在Node中使用ES模块，我们会得到报错：

```
(node:29568) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
...
SyntaxError: Cannot use import statement outside a module
```

让我们重复上面的例子。在 `main.js` 文件中编写代码:

```
// main.js
import { mod1Function } from './mod1.js'

const testFunction = () => {
    console.log('Im the main function')
    mod1Function()
}

testFunction()
```

在`mod1.js`文件中编写:

```
// mod1.js
const mod1Function = () => console.log('Mod1 is alive!')
export { mod1Function }
```

需要注意的是，我们在这里没有使用 `require`而是使用`import`；没有使用 `module.exports`而是使用 `export`。虽然在语法上有所不同，但是两者之间行为类似。

同样，如果希望在同一个文件下导出不止一个内容，可以这样做：

```
// main.js
import { mod1Function, mod1Function2 } from './mod1.js'

const testFunction = () => {
    console.log('Im the main function')
    mod1Function()
    mod1Function2()
}

testFunction()
```

```
// mod1.js
const mod1Function = () => console.log('Mod1 is alive!')
const mod1Function2 = () => console.log('Mod1 is rolling, baby!')

export { mod1Function, mod1Function2 }
```

在ES模块中另一个重要的功能是重命名，如下面的例子：

```
// main.js
import { mod1Function as funct1, mod1Function2 as funct2 } from './mod1.js'

const testFunction = () => {
    console.log('Im the main function')
    funct1()
    funct2()
}

testFunction()
```

注意到在每个函数后面使用了`as`关键字，然后可以命名为任意名字，并在之后的代码中替换掉引入的原始命名，使用自己的命名;)

还可以一次性导入所有导出，并把他们放入一个对象内，如下：

```
// main.js
import * as mod1 from './mod1.js' 

const testFunction = () => {
    console.log('Im the main function')
    mod1.mod1Function()
    mod1.mod1Function2()
}

testFunction()
```
这个功能通常在你需要在代码内明确说明每一个导入是从哪里来的时候采用，如上面的例子，所有的函数被称作如 `mod1.mod1Function()`。

最后值得一提的是 `default`关键字，我们可以通过这个关键字设置模块的默认导出，如下：

```
// mod1.js
const mod1Function = () => console.log('Mod1 is alive!')
const mod1Function2 = () => console.log('Mod1 is rolling, baby!')

export default mod1Function
export { mod1Function2 }
```

使用默认导出的用处是什么？可以在我们导入时省去解构，如下：

```
// main.js
import mod1Function, { mod1Function2 } from './mod1.js' 

const testFunction = () => {
    console.log('Im the main function')
    mod1Function()
    mod1Function2()
}

testFunction()
```

甚至可以省去 `as` 关键字实现重命名， 因为JavaScript“知道”当我们不解构的时候，我们指的是默认导入。

```
// main.js
import lalala, { mod1Function2 } from './mod1.js' 

const testFunction = () => {
    console.log('Im the main function')
    lalala()
    mod1Function2()
}

testFunction()
```

这差不多就是ES模块的所有内容，希望对你来说是简单明了的。 =)

# 使用模块

现在我们已经清楚了不同种类的模块以及他们是如何运行的，现在我们来看看如何在使用HTML和原生JavaScript的网站运用模块。

我们来创建一个简单的HTML文件，包含一个头部，两个按钮，和一个script标签链接到 `main.js`文件。

```
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>I'm just a test...</h1>
    <button id="isAlive">Is mod1 alive?</button>
    <button id="isRolling">Is mod1 rolling?</button>
    <script src="./main.js" type="module"></script>
</body>
</html>
```

注意到我在script标签中声明了`type="module"`。要使用JS模块功能必须得这么做，不然会报错：

```
Uncaught SyntaxError: Cannot use import statement outside a module
```

打开HTML文件，我们会看到以下界面 
![screenshot-2](https://www.freecodecamp.org/news/content/images/2022/04/screenshot-2.png)

`main.js`文件中的代码包括：

```
// main.js
import { mod1Function, mod1Function2 } from './mod1.js'

const testFunction = () => console.log('Im the main function')

document.getElementById('isAlive').addEventListener('click', () => mod1Function())
document.getElementById('isRolling').addEventListener('click', () => mod1Function2())

testFunction()
```

我们分别在两个按钮上注册了时间监听器，这样来自 `mod1.js`中的函数才能被执行。

现在可以预览和测试HTML文件了，我们必须得先配置好文件，不然直接在浏览器中打开HTML，会得到CORS（跨域）报错：

```
Access to script at ... from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, brave, chrome-untrusted, https.
```

我们可以使用VS的拓展**Live server**，或者通过 `npm init -y`创建一个Node程序，并执行`npx serve`。

设置到服务后，控制台会显示如下： 
![screenshot_1-1](https://www.freecodecamp.org/news/content/images/2022/04/screenshot_1-1.png)

另一件需要注意的是，如果我们点击浏览器开发者工具的网络栏，并且筛选出JS文件，会看到我们的网站在执行两个文件： `main.js` 和 `mod1.js`:  
![screenshot_3](https://www.freecodecamp.org/news/content/images/2022/04/screenshot_3.png)

当然如果要使用两个文件中的代码，我们必须加载两个文件，但这并不是最好的办法。因为如果这样做，浏览器需要执行两次请求来加载所有必须的JS。

为了提高项目表现，我们应该尽最大可能减少请求。这个时候，模块打包就派上用场。

稍微提一句，如果你喜欢使用视频来学，[Kent C Dodds的视频很棒](https://egghead.io/lessons/javascript-use-javascript-modules-in-the-browser)。我特别推荐你去关注他，他是最好的JS老师之一，[这里还推荐另一个视频](https://www.youtube.com/watch?v=qgRUr-YUk1Q) by Fireship. ;)

# 模块打包

如上文所述，把代码拆分成模块更利于代码库的整洁和复用。

但这些优点仅针对开发阶段，在生产阶段，模块并不是最佳操作，因为这使得浏览器为每一个JS文件添加请求，从而损害了网站表现。

模块打包可以很好地解决这个问题。简言之，模块打包是一个可以将JS模块组合成单个文件的程序（这只是核心功能，许多模块打包器有更多其他的功能）。

模块打包器使得开发者们在开发阶段可以讲代码拆分，然后在生产阶段再把代码合并。

将“开发代码”转化成“生产代码”的步骤通常被称作“build”。

这样的构建工具有很多(如[Browserify](https://browserify.org/), [Parcel](https://parceljs.org/), [Rollup.js](https://rollupjs.org/guide/en/), [Snowpack](https://www.snowpack.dev/)...) 但使用最广泛的是[Webpack](https://webpack.js.org/)，然我们来看看一个Webpack的例子。

-   注1: 如果你想更加深入地了解模块打包，[Fireship制作的视频](https://www.youtube.com/watch?v=5IG4UmULyoA&t=382s)或许是个不错的选择。
-   注 2:Webpack是一个非常健壮且复杂的工具，除了打包JS文件之外，它还可以做其他的工作，想要了解更多，可以查阅[官方文档](https://webpack.js.org/)。

如果还没安装Node，我们可以先通过 `npm init -y`安装，然后执行 `npm i --save-dev webpack webpack-cli`来安装webpack和webpack-cli。

接着创建`webpack.config.js`文件并写入代码：

```
/* webpack.config.js */
const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
```

这个文件将负责Webpack的设置，以及我们的应用如何工作。

在上面的代码中，我们设定了入门文件 (`entry: './main.js'`)。Webpack会从这个文件开始读取，然后分析所有依赖项(文件中所有模块）， 换句话说，入门文件——main JS引入了所有其他模块。

然后我们声明输出 —— 首先声明存储的路径，然后声明打包文件的名字。

```
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
},
```

非常棒！然后我们打开 `package.json` 文件，添加 `build`，如下：

```
{
  "name": "testappv2",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.72.0",
    "webpack-cli": "^4.9.2"
  }
}
```

回到终端，执行`npm run build`。我们的项目中会创建一个`dist`目录， 这个目录中有一个`bundle.js`文件。

点开这个文件，你会看到以下代码：

```
(()=>{"use strict";document.getElementById("isAlive").addEventListener("click",(()=>console.log("Mod1 is alive!"))),document.getElementById("isRolling").addEventListener("click",(()=>console.log("Mod1 is rolling, baby!"))),console.log("Im the main function")})();
```

这行代码正式我们之前分散在各个文件中的代码，但是被打包成单个文件，并且简化了。

最后就是在 `index.html` 中更改script标签，这样我们就可以消费bundle JS了，如下：

```
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>I'm just a test...</h1>
    <button id="isAlive">Is mod1 alive?</button>
    <button id="isRolling">Is mod1 rolling?</button>
    <script src="./dist/bundle.js" type="module"></script>
</body>
</html>
```

我们可以重新浏览测试代码了，JS完美运行。如果你打开网络栏，会看到只有一个文件被加载！ =D  
![screenshot_2-1](https://www.freecodecamp.org/news/content/images/2022/04/screenshot_2-1.png)

希望这个简单的例子能够帮助你理解模块打包是如何将模块结构的良好的开发体验和网站表现结合的。

# 总结

今天的介绍就到告一段落了。在这篇文章中我们学习了什么是模块，为什么他们好用，在JavaScript中使用模块的不同方法，以及使用Webpack打包代码的一个实际例子。

JS模块的完整手册可以查阅[这篇文章](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

希望你喜欢这篇文章，并且从中收益，你可以在[linkedin](https://www.linkedin.com/in/germancocca/)或[twitter](https://twitter.com/CoccaGerman)上关注我。

干杯！下篇文章见！

![giphy](https://www.freecodecamp.org/news/content/images/2022/04/giphy.gif)
