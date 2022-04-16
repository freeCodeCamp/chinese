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
    -   [ESmodules](#esmodules)
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

Now let's repeat the exact same example. In our `main.js` file we'll have the following code:

```
// main.js
import { mod1Function } from './mod1.js'

const testFunction = () => {
    console.log('Im the main function')
    mod1Function()
}

testFunction()
```

And on `mod1.js` we'll have this:

```
// mod1.js
const mod1Function = () => console.log('Mod1 is alive!')
export { mod1Function }
```

Notice instead of `require` we're using `import` and instead of `module.exports` we're using `export`. The syntaxt is a bit different but the behaviour is very similar.

Again if we wanted to export more than one thing from the same file we could do it like this:

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

Another feature available in ESmodules is import renaming, which can be done like this:

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

Notice we use the `as` keyword after each function, and then rename it however we want. Later in our code, we can use that new name instead of the original name the import has. ;)

Another thing you could do is import all exports together and put them together in an object, like this:

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

This may be useful in cases when, throughout our code, we want to be explicit about where each import is coming from. See that functions are now being called like `mod1.mod1Function()`.

The last thing worth mentioning is the `default` keyword. With it we can set a default export for a given module. Like this:

```
// mod1.js
const mod1Function = () => console.log('Mod1 is alive!')
const mod1Function2 = () => console.log('Mod1 is rolling, baby!')

export default mod1Function
export { mod1Function2 }
```

And what does it mean to have a default export? Well, it means we don't have to destructure it when we import it. We can use it just like this:

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

We can even rename the import whatever we want without the `as` keyword, since JavaScript "knows" that if we're not destructuring we'll be referring to the default import.

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

And that pretty much sums it up about ESmodules too. Straightforward I hope. =)

# Using modules

Ok now that we're clear about the different types of modules available and how they work, let's see how we can implement modules in a website using HMTL and Vanilla JS.

Let's create a simple HTML file with a heading, two buttons, and a script tag linking to our `main.js` file.

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

Pay attention to the fact that I'm declaring `type="module"` on the script tag. We need to do this in order to use the JS module feature. If we don't, we'll get an error like this:

```
Uncaught SyntaxError: Cannot use import statement outside a module
```

If we open our HTML file we should get something like this:  
![screenshot-2](https://www.freecodecamp.org/news/content/images/2022/04/screenshot-2.png)

Our `main.js` file will have this code:

```
// main.js
import { mod1Function, mod1Function2 } from './mod1.js'

const testFunction = () => console.log('Im the main function')

document.getElementById('isAlive').addEventListener('click', () => mod1Function())
document.getElementById('isRolling').addEventListener('click', () => mod1Function2())

testFunction()
```

We're just adding a click event listener to each button so the functions that come from the `mod1.js` file get executed.

Ok so now we can serve our HTML file and see if this works. We need to serve the file, we can't just open the HTML in the browser because we would get a CORS error like this:

```
Access to script at ... from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, brave, chrome-untrusted, https.
```

To serve it quickly you can use the **Live server** VS code extension, or create a Node app by running `npm init -y` and then running `npx serve`.

Anyway, once the file is served we can click on each button and test that our functions execute correctly. Our console should look like this:  
![screenshot_1-1](https://www.freecodecamp.org/news/content/images/2022/04/screenshot_1-1.png)

But there's one more thing about this. If we go to the network tab of the browser's developer tools, and filter by JS files, we can see that the website is loading two files, `main.js` and `mod1.js`:  
![screenshot_3](https://www.freecodecamp.org/news/content/images/2022/04/screenshot_3.png)

Of course if we're going to use the code inside each file, both need to be loaded – but this is not the best thing to do. That's because the browser needs to perform two different requests to load all the JS necessary.

We should always try to reduce the requests to the minimun to increase the performance of our projects. So let's see how we can do this with the help of a module bundler.

Side comment: if you'd like a video explanation, [Kent C Dodds has a great one](https://egghead.io/lessons/javascript-use-javascript-modules-in-the-browser). I really recommend that you follow him, he's one of the best JS teachers out there. And [here's another cool video](https://www.youtube.com/watch?v=qgRUr-YUk1Q) by Fireship. ;)

# Bundling modules

As previously mentioned, dividing our code into modules is nice because our codebase will be more organized and it will be easier to reuse our code.

But these are advantages only for the development phase of a project. When in production, modules are not the best thing, as forcing the browser to make a request for each JS file might hurt the site's performance.

This problem can be easily solved with the use of a module bundler. Simply put, module bundlers are programs that take JS modules as input and combine them into a single file (many module bundlers have many more features but that's their core concept).

Thanks to this, as developers we can code our project dividing it into nicely organized pieces, and then run a module bundler to obtain the final code that will be used in production.

This step of converting "development code" to "production code" is normally recognized as "build".

There're many options to use for this (like [Browserify](https://browserify.org/), [Parcel](https://parceljs.org/), [Rollup.js](https://rollupjs.org/guide/en/), [Snowpack](https://www.snowpack.dev/)...) but the most widely used is [Webpack](https://webpack.js.org/). So let's see an example using Webpack.

-   Side comment 1: If you want to dig deeper into module bundlers and how they work, [this awesome video by Fireship](https://www.youtube.com/watch?v=5IG4UmULyoA&t=382s) might be a good place to start.
-   Side comment 2: Webpack is a very robust and sophisticated tool that can do many things besides bundling JS files. Check out [their docs](https://webpack.js.org/) if you want to learn more.

Great, so now we can start off by creating a Node app (if you haven't already) by running `npm init -y`. Then we'll need to install Webpack and the Webpack CLI by running `npm i --save-dev webpack webpack-cli`.

Next we'll create a `webpack.config.js` file and put this code inside it:

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

This file will be responsible for the configuration of Webpack and how it will work in our app.

What we're doing here first is setting the entry file (`entry: './main.js'`). Webpack will start by reading that file and then analyzing all the dependencies (modules imported from that file). In other words, the entry file is our main JS file where all other modules are imported.

Then we're declaring the output – first declaring the path where it will be stored and then declaring the name of the bundled file.

```
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
},
```

Super! Now let's go to our `package.json` file and add a `build` script, like this:

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

Then we can go back to our terminal and run `npm run build`. That should create a `dist` directory within our project, and inside it a `bundle.js` file.

If you check that file out, you'll see this code within it:

```
(()=>{"use strict";document.getElementById("isAlive").addEventListener("click",(()=>console.log("Mod1 is alive!"))),document.getElementById("isRolling").addEventListener("click",(()=>console.log("Mod1 is rolling, baby!"))),console.log("Im the main function")})();
```

You'll see that it's practically the same code we had distributed in our files, but all bundled in a single file and minified.

The only thing left is to change the script tag in our `index.html` file so it consumes the bundled JS now, like this:

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

Now we can serve it again, check that the JS still works perfectly, and if we open the network tab again we should see just a single file being loaded! =D  
![screenshot_2-1](https://www.freecodecamp.org/news/content/images/2022/04/screenshot_2-1.png)

I hope this simple example helped you understand the relevance of module bundlers and how they help us combine the great development experience of modular architecture with good site performance.

# Roundup

Well, we're done for today. In this article we've seen what modules are, why are they cool, the different ways you can implement modules in JavaScript, and a practical example of bundling our code with Webpack.

For a complete guide on JS modules, you can take a look [at this article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

As always, I hope you enjoyed the article and learned something new. If you want, you can also follow me on [linkedin](https://www.linkedin.com/in/germancocca/) or [twitter](https://twitter.com/CoccaGerman).

Cheers and see you in the next one! =D

![giphy](https://www.freecodecamp.org/news/content/images/2022/04/giphy.gif)
