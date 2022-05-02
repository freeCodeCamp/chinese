> - 原文地址：[JavaScript Tutorial – How to Set Up a Front End Development Project](https://www.freecodecamp.org/news/how-to-set-up-a-front-end-development-project/)
> - 原文作者：[Hunor Márton BorbélyHunor Márton Borbély](https://www.freecodecamp.org/news/author/hunor/)
> - 译者：[luojiyin](how-to-set-up-a-front-end-development-project)
> - 校对者：

![JavaScript Tutorial – How to Set Up a Front End Development Project](https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/Set-up-a-frontend-project.001.jpeg)

比方说，你计划建立一个网站。在你开始之前，你想设置一些工具，使你的生活更容易。但你应该使用哪些工具呢？

JavaScript 生态系统的变化如此之快，以至于要挑选最好的工具来使用，可能会让人不知所措。为了解决这个问题，在这篇文章中我将指导你如何从头开始设置一个前端项目。

我们将涵盖一些内容，如必备的编辑器扩展，如何将 JavaScript 库添加到你的项目中，为什么即使你想做前端开发也要使用 Node.js，以及如何设置一个应用程序捆绑器，在你在浏览器中编码时生成一个实时预览。

因此，让我们深入了解一下。

## How to Choose a Code Editor

让我们从基础开始。作为一个 Web 开发者，你主要是编辑文本，所以你需要一个好的编辑器。那么，你应该使用哪一个呢？

挑选一个编辑器在很大程度上是基于个人的偏好，因为大多数编辑器的功能都非常相似。

如果你没有个人偏好，我强烈推荐 [VS Code](https://code.visualstudio.com/)。最近，VS Code 已经成为网络开发的事实上的标准编辑器。

下面是最新一期的 [JS 现状调查](https://stateofjs.com/) 的图表。在这项调查中，超过 23000 名开发者被问及他们对网络开发的偏好。绝大多数人选择了 VS Code。

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-26-at-11.23.50.png)

如果你以前没有查看过 [JS 现状](https://stateofjs.com/) 的调查，我强烈建议你查看。它可以让你对 JavaScript 的最新趋势有一个很好的概述。你可以了解到哪些工具和库是人们喜欢使用的，哪些是他们即将放弃的。

所有主流编辑器的最大特点之一是你可以为它们添加扩展。让我们走过两个扩展，它们是必须的。

## How to Auto-format Your Code in VS Code

Prettier 是一个扩展，它使你的代码更可读，更一致。

比方说，你从 Stack Overflow 上复制了一些东西，它很难读。表格不对，某一行太长，等等。然后，你只要保存文件，神奇的是，一切都看起来像它应该的那样。

![](https://www.freecodecamp.org/news/content/images/2021/05/Set-up-a-frontend-project.001.jpeg)

这就是 Prettier 所做的。它根据最佳实践来格式化代码。它不只是固定制表和包行。它还添加小括号以提高代码的可读性，确保你与引号保持一致，以及更多。

要使它发挥作用，首先，你必须安装 Prettier 扩展。在 VS Code 中进入扩展面板，搜索 Prettier，然后安装它。

![](https://www.freecodecamp.org/news/content/images/2021/05/Set-up-a-frontend-project.001-5.jpeg)

安装扩展后，默认情况下不会在保存时自动格式化你的文件。默认的行为是，一旦你安装了扩展，你可以在文件中右键单击，然后选择 **Format Document**。或者选择一个文件的一部分，然后选择 **Format Selection**。

第一次这样做的时候，你需要选择默认的格式化。VS Code 已经有一个格式化器，只是它没有 Prettier 那么强大。所以现在我们有了两个格式化器，我们必须让 VS Code 知道，下次格式化时，我们想使用 Prettier。

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-29-at-13.37.54-2.png)

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-29-at-13.38.03-2.png)

设置 Prettier 为默认格式化器

如果你想在保存时自动格式化你的文件，你需要改变一个设置。

在你的 VS 代码首选项中进入设置，搜索 **Format On Save** 选项。默认情况下，这个选项是 `false`（失效）的，所以请确保你勾选这个复选框。此后，每次你保存文件时，自动格式化。

![](https://www.freecodecamp.org/news/content/images/2021/05/Set-up-a-frontend-project.001-2.jpeg)

不过，格式化可能是有争议的，不满意结果。在大多数情况下，特别是对于初学者，我强烈建议使用默认设置。但如果你喜欢不同的风格，你可以定制一些东西。

你可以用注释表明 [忽略特定行](https://prettier.io/docs/en/ignore.html)，你可以创建一个 rc 文件，在那里你可以列出你的偏好。

在你项目的根目录下，你可以创建一个名为 **.prettierrc** 的文件并添加一些选项。一个典型的选项是，如果你喜欢在你的文件中使用单引号而不是双引号。或者如果你不想在你的行的末尾有分号。

有了这个配置，一旦你保存你的文件，你应该看到一个不同的结果。

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-30-at-11.58.50.png)

There are many more options of course. If you want to dig deeper check out [Prettier's documentation](https://prettier.io/docs/en/configuration.html).

## Why Do You Need Node for a Front End Project?

在我们讨论第二个必须的扩展之前，我们需要设置一些其他的东西。首先，我们需要谈一谈 Node.js。什么是 Node，为什么你需要它，即使你作为一个前端开发者工作？

Node 通常与后端开发有关，但这并不完全正确。 
如果你看到一份工作描述，他们正在寻找一个 Node 开发者，那么可能他们确实在寻找一个后端开发者。

然而，即使你做前端开发，你也要使用 Node。

那么，什么是 Node，为什么人们认为它是用于后端开发的，以及为什么你作为一个前端开发者也需要它？

Node 是一个 JavaScript 运行时。它在浏览器之外运行 JavaScript 文件。有两种运行 JavaScript 代码的方式。你要么把它作为网站的一部分，在浏览器中运行整个网站，要么你只用 Node 运行 JavaScript 文件。

在这个例子中，我们有一个非常简单的 JavaScript 文件，将 Hello World 打印到控制台。

如果我们安装了 Node，我们可以使用终端，进入这个文件所在的文件夹，然后像这样用 Node 运行它。你可以看到该文件被执行了，结果在控制台中。

这就是 Node 的真正含义，它是一个独立运行 JavaScript 文件的工具。

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-30-at-12.01.08.png)

在这两种情况下，JavaScript 的行为大多是一样的。但是，JavaScript 在浏览器中能做的事情和它在 Node 中运行时也有区别。

例如，当在浏览器中运行时，JavaScript 可以访问 HTML 元素，它可以修改它们。这就是拥有 JavaScript 的主要意义所在。

在 Node 中，没有任何周围的 HTML 文件可以让 JavaScript 访问。JavaScript 是独立运行的。

另一方面，在 Node 中，JavaScript 可以访问你的文件系统，读取和写入你的文件。

例如，你可以在你的机器上运行脚本，为你生成一个项目的骨架。你可以在你的文件上运行检查，自动纠正错误。或者你可以运行你的测试文件。

总之，Node 可以让你运行一些脚本，使你的生活更轻松。

![](https://www.freecodecamp.org/news/content/images/2021/06/Set-up-a-frontend-project.001-1.jpeg)

To install node go to [nodejs.org](/news/p/61840bb6-377c-4565-aed6-c0efc682e112/nodejs.org) and install the latest stable version labeled as LTS. If you are unsure if you already have Node or not, you can also go to your terminal and run **node -v** to check it. If you get a version number, you have Node.

So to answer the question, why do people associate Node with backend development? Because if the back end code is written in JavaScript, the servers need a way to run them without a browser. So yes, if you are a back end developer using JavaScript, you are going to use Node. But Node is so much more than that.

## How to Run Your Project

Now that we have Node installed we can install a bundler. What is a bundler? A bundler is a tool that takes all your files and turns them into a neat package that you will be able to run in the browser.

![](https://www.freecodecamp.org/news/content/images/2021/05/Set-up-a-frontend-project.005.jpeg)

Why wouldn’t you be able to run your files in the browser? If you use plain HTML, CSS, and JavaScript files then you are right. You might not even need a bundler.

But the web development tools have evolved, and the moment you are using anything more advanced your browser won’t understand your files.

Are you using React? React's JSX syntax that looks like HTML is not part of the JavaScript syntax. You need a tool to turn that into plain JavaScript. Otherwise, it won’t run in the browser.

Are you using SCSS or some other CSS dialect? Then again, you have to turn it into plain CSS so the browser can understand it.

Another reason you want to use a bundler is that it can generate a live preview of your website as you are coding. Anytime you save a file you see the result right away in your browser.

So how to pick a bundler? There are several options. Currently, the most used bundler is [**webpack**](https://webpack.js.org/). Webpack is a very powerful tool with plenty of configuration options. But these many options are also its weakness. Setting it up is not an easy thing if you are new to it.

Another great option that recently gained popularity is **[Parcel](https://parceljs.org/)**. Parcel has similar features as webpack. In some ways, it's even better.

The great thing about it is once you installed it, it needs zero configuration. Parcel automatically figures out what are you using and interprets your files.

Are you using React? No problem, Parcel recognizes that and interprets JSX. Are you using SCSS? No problem. Parcel knows what to do.

To install Parcel you need to run a command in your terminal. We are going to use npm, node package manager, to install it. npm is a tool that comes with Node. If you installed Node you have npm as well.

With npm you can install JavaScript libraries on your computer globally or specifically for a project.

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-30-at-14.32.40.png)

Go to your terminal and run the following command. The -g tag here means global. Once you installed Parcel on your computer you will be able to use it to run any project with it. You don’t have to install Parcel for each project you create, you just do it once.

```shell
npm install -g parcel-bundler
```

> Note: The command above will install Parcel 1. At the time of writing Parcel 2 is in beta and you can also install it with **npm install -g parcel**.

After installing Parcel globally, let's see how can we use it to run a project.

Let's say we have a website with HTML, CSS, and JavaScript files. We can use Parcel to create a live preview for us.

Open the terminal and make sure you are in the folder where your project is. If you are using VS Code you can use the built-in terminal that will automatically start in the right folder.

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-30-at-18.35.20.png)

Running Parcel with VS Code's built in terminal

Once we make sure we are in the correct folder we can run parcel with the following command. This will give you a URL where you can see the results. And anytime we change a file we can see the result on save live in the browser.

```shell
parcel index.html
```

Once you start this script it will run and generate a live preview of your site until you stop it or close the terminal window. In general, you can keep it running while you are developing your site. Then once you finished you can press **Ctrl+C** to stop it.

If it gets desynchronized or you break it with an error, then you can also restart it by pressing Ctrl+C to stop it, then run the same script again.

Of course, Parcel is much more than this. Now instead of plain CSS, you can also use SCSS for instance. This allows you to use many cool features like nesting declarations, using mixins or calling functions, and more. It's like a CSS with superpowers. Or you can even replace HTML and use Pug instead.

## How to Add Libraries to Your JavaScript Project

Now that we have Node installed, and we had a sneak preview of npm, let's see how can we add libraries to our project.

In the past developers were using a CDN to add libraries. You might import a library by having a script tag in your HTML pointing to a URL.

That is fine and it still works well, but many developers nowadays use npm, or node package manager to add libraries to their projects. So how does it work?

First, you have to initialize the project with the following command in your terminal. Again, you need to run this command in the root directory of your project (hint: use VS Code’s built-in terminal to start in the right folder).

```shell
npm init —yes
```

This command initialized a package.json file in your root with some metadata. It has things like project name, description, version number, and so on. When you add the yes flag, all these values will have a default value.

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-31-at-18.36.56.png)

Initializing a project and installing Three.js

Now we can add libraries to our package with the npm install command. In my [previous article](/news/render-3d-objects-in-browser-drawing-a-box-with-threejs/), we used Three.js to render 3D boxes in the browser.

So as an example let's install Three.js. Go to your terminal again, make sure you are in the correct folder, and run the following command:

```shell
npm install three
```

This will install Three.js. How do you know the keyword is three here and not threejs?

When you don’t know the package name you can just google npm and the name of the library you need. Or in case you don't even know the library name you can also just search for npm 3D library and see what Google comes up with.

We can go through these packages one by one and pick one based on their capabilities and other info. These packages mostly come with descriptions and quick examples to give you an idea of what the library can do for you.

Another indicator you might want to look out for is the weekly downloads and the time of the last update to make sure you select an actively maintained library that people still use.

![](https://www.freecodecamp.org/news/content/images/2021/06/Set-up-a-frontend-project.001-2.jpeg)

Once you found the package you are looking for you, you can see the command to install it at the top right corner: **npm i three**. The i here is just a shorthand for install.

When we run this command, three things happen.

First, it will add the latest version of Three.js to your package.json file as a project dependency.

Then it also creates a package-lock file. Both of these things, the dependency section of your package.json file and the package-lock file, are things that you should never ever edit manually. For adding, removing, or updating packages you always use commands like npm install, npm uninstall, and so on.

The third thing that’s going to happen once you run the npm install command is that a node\_modules folder gets created. This is the folder where the actual source code of Three.js will be.

So when you import Three.js in your project, it will look it up in this folder. This folder is again something that you never ever want to change manually.

So now that we installed Three.js we can create a very simple website that displays a 3D box. It’s a simple HTML file and a JavaScript file with the code for the 3D box.

The key here is that in your JavaScript file you import Three.js with the import statement. And that will use the package that you just installed.

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-31-at-18.47.00.png)

Then we can run the project with Parcel. Using imports means that we use the module system now. Running a project with the module syntax can be a bit tricky, but as we are using Parcel to run our project, it works seamlessly without any questions. That’s one of the reasons we use Parcel.

If you want to learn more about building 3D games with Three.js check out my [earlier article](/news/three-js-tutorial/) on how to build a minimalistic car in the browser.

## How to Get Coding Tips While You Code

The second must-have extension for VS Code is ESLint. While Prettier was formatting the code, ESLint can give you coding tips.

There are several patterns in JavaScript that can cause a bug or can be misleading when you try to understand the code.

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-06-01-at-01.49.24.png)

A typo can lead to annoying bugs

In this example, we declare a variable, but then we have a typo and we try to use another variable that does not exist.

ESLint will highlight this for you. It will give you a warning both at the variable declaration saying that you created a variable that you don’t use, and at the usage where it will say that you try to use a variable that is not declared.

After these warnings, it’s easy to spot that you made a typo. ESLint is of course much more complex than just catching this simple error. There are also less obvious ones where you might not understand first why does it complain.

At that point, you can also click the link to see a more detailed explanation of why this pattern is considered harmful and what can you do to avoid it.

So how can you use ESLint in your project? Setting it up requires a few more steps than installing an extension. Luckily most of these steps you only have to do once.

![](https://www.freecodecamp.org/news/content/images/2021/05/Set-up-a-frontend-project.002-1.jpeg)

First, as you did with Prettier, you have to install the ESLint extension. Go to Extensions, search for ESLint and install it.

Then you also need to generate an ESLint configuration. Before you do that though, first you need to make sure that your project is initialized with npm init.

If you don’t already have a package.json file then first you have to run npm init —yes to initialize your project.

Then you can generate an ESLint config with the following command.

```shell
npx eslint —init
```

npx is another tool that comes with Node. It can run scripts that are not even on your computer.

In this case, we run the ESlint script but we never actually installed ESlint. We installed the ESLint extension, but that’s not the script we are executing here.

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-31-at-23.07.47.png)

Initializing ESLint config from the terminal, adding an .eslintignore file

This script will ask you a few questions. Most of these are obvious except the first one.

- **How would you like to use ESLint?**

Do you want ESLint to only check for syntax issues, or you want it to find possible problems as well, or you even want it to check for stylistic issues?

If you use Prettier as well, you need to select the second option. Because if both Prettier and ESLint try to recommend a styling for you, they likely end up in a conflict.

So if you use Prettier you don’t want ESLint to check for style, only for syntax and possible problems.  

- **What type of modules does your project use?**

In a frontend project you probably use imports and exports so you select the first option.  

- **Which framework does your project use?**

If you use React or Vue.js the select the appropriate option, otherwise select none.  

- **Does your project use Typescript?**

If you use Typescript select yes, otherwise just press enter to continue.  

- **Where does your project run?**

Is your project supposed to run in a browser or with Node? Here we set up a front end project so we select Browser.  

- **What format do you want your config file to be in?**

This doesn’t really matter, but if you later want to customize the config you probably want to pick either JavaScript or JSON.

The script finally asks if it should install ESlint as a development dependency. Here you should select yes. This will install ESlint so it will be available in your node\_modules folder.

After this step, you will have your config and you can find ESlint in your package.json file as a development dependency.

Development dependency means ESlint is not part of your website’s source code, but the tooling requires it. In this case, the ESLint extension requires that the ESlint package is installed to your project.

Now that we have the ESLint extension installed, have an ESLint configuration, and we have the ESlint package installed, we also need to grant the extension access to this package.

This is a security requirement you only have to do once. At the bottom of the editor, once you've installed the extension you’ll find the ESLint button with a crossed circle in front of it. Click that and select **Allow Everywhere**. This allows the ESLint extension to work properly for any future projects as well.

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-31-at-23.17.14.png)

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-31-at-23.16.59.png)

After all these steps, ESLint finally should work. If we go to a JavaScript file and try to use an undeclared variable, then on save it will highlight the issue.

ESLint might also give you errors at places where things are actually all right. Ironically if you selected that the ESlint config should be in a JavaScript file, then it will give you an error in the config itself.

This is because we set that the environment for our project is the browser and this config relies on a global variable that does not exist in browsers.

This file is not exactly part of our website, though. It’s a configuration file that won’t be part of the final source code and its natural environment is not the browser but rather Node.js. And in Node this global variable does exist. So this file is actually correct and there shouldn’t be an error here.

One way to fix this is to set a list of files that ESLint should ignore. In the root folder of the application, you can create a file called **.eslintignore** and add **.eslintrc.js** to it. Once we save this ESLint won’t run any checks on the config file anymore.

ESLint is also highly customizable. For more details check out the [documentation of ESLint](https://eslint.org/docs/user-guide/configuring/).

## How to Set Up a React or Vue Project

Do you plan to build a website with React or Vue.js? You essentially need to do the same steps.

Initialize a project with npm init, install the dependencies, set up ESLint then run your project with Parcel.

Check out my video on YouTube where we go through the steps we did before and a quick example project with React and Vue.js.

## Next steps

Those are the basic tools you can use when working on a front end JS project. Add libraries with npm, keep your code tidy with Prettier, avoid unnecessary headaches with ESLint, and run your project with Parcel.

Now that we've set up a front end project you are ready to start building your website.

What happens once you finish it? You need to bundle it to a final production build that you can upload to the web. If you use parcel you can create a final bundle with the following command:

```shell
parcel build index.html —public-url '.'
```

This will create a bundle in the dist folder that you can run in the browser. You can simple run the new index.html file from the dist folder in the browser to see your final result.

And that's it! Thank you for reading :)

### **Subscribe for more tutorials on Web Development:**

[

Hunor Márton Borbély

Game development with JavaScript, creative coding tutorials, HTML canvas, SVG, Three.js, and some React and Vue <https://twitter.com/HunorBorbelyhttps://codepen.io/HunorMarton>……

![](https://www.youtube.com/s/desktop/a2ac178f/img/favicon_144x144.png)YouTube

![](https://yt3.ggpht.com/ytc/AAUvwngQ7khZMu7fnitunQnU-P6UB7VXPRwz_9jZm-WwxA=s900-c-k-c0x00ffffff-no-rj)

](<https://www.youtube.com/channel/UCxhgW0Q5XLvIoXHAfQXg9oQ>)
