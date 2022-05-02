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

要安装 Node，请到 [nodejs.org](/news/p/61840bb6-377c-4565-aed6-c0efc682e112/nodejs.org) 并安装标有 LTS 的最新稳定版本。如果你不确定你是否已经有 Node，你也可以到你的终端运行 **node -v** 来检查。如果你得到一个版本号，你就有了 Node。

因此，为了回答这个问题，为什么人们将 Node 与后端开发联系起来？因为如果后端代码是用 JavaScript 写的，服务器需要一种方法来运行它们而不需要浏览器。所以，是的，如果你是一个使用 JavaScript 的后端开发人员，你就要使用 Node。但 Node 的意义远不止于此。

## How to Run Your Project

现在我们已经安装了 Node，我们可以安装一个 bundler。什么是 bundler？bundler 是一种工具，它将你所有的文件变成一个整洁的包，你将能够在浏览器中运行。

![](https://www.freecodecamp.org/news/content/images/2021/05/Set-up-a-frontend-project.005.jpeg)

为什么你不能在浏览器中运行你的文件？如果你使用普通的 HTML、CSS 和 JavaScript 文件，那么你是对的。你甚至可能不需要 bundler。

但网络开发工具已经发展起来了，一旦你使用更高级的东西，你的浏览器就无法读懂你的文件。

你在使用 React 吗？React 的 JSX 语法看起来像 HTML，但它不是 JavaScript 语法的一部分。你需要一个工具来把它变成普通的 JavaScript。否则，它不会在浏览器中运行。

你是否使用 SCSS 或其他 CSS 方言？那么，你也必须把它变成普通的 CSS，这样浏览器才能理解它。

你想使用 bundler 的另一个原因是，它可以在你编码时生成一个网站的实时预览。任何时候你保存一个文件，你就可以在浏览器中看到结果。

那么，如何挑选一个 bundler？有几种选择。目前，最常用的 bundler 是[**webpack**](https://webpack.js.org/) Webpack 是一个非常强大的工具，有很多的配置选项。但这些众多的选项也是它的弱点。如果你是新手，设置它并不是一件容易的事情。

另一个最近得到普及的好选择是 **[Parcel](https://parceljs.org/)**。Parcel 具有与 Webpack 类似的功能。在某些方面，它甚至更好。

它的伟大之处在于，一旦你安装了它，它需要零配置。Parcel 会自动计算出你使用的是什么，并解释你的文件。

你在使用 React 吗？没问题，Parcel 能识别并解释 JSX。你在使用 SCSS 吗？没问题。Parcel 知道该怎么做。

要安装 Parcel，你需要在终端运行一个命令。我们将使用 npm，即 Node 包管理器来安装它。npm 是 Node 的一个工具。如果你安装了 Node，你也有 npm。

通过 npm，你可以在你的电脑上全局性安装的或专门在某个项目里安装 JavaScript 库。

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-30-at-14.32.40.png)

进入你的终端，运行以下命令。这里的 `-g` 标签意味着全局安装。当你在你的电脑上安装了 Parcel，你就可以用它来运行任何项目了。你不必为你创建的每个项目都安装一次 Parcel，你只需做一次。

```shell
npm install -g parcel-bundler
```

> 注意：上面的命令将安装 Parcel 1。在撰写本文时，Parcel 2 正在测试中，你也可以用 **npm install -g parcel** 来安装它。

在全局安装了 Parcel 之后，让我们看看如何使用它来运行一个项目。

假设我们有一个带有 HTML、CSS 和 JavaScript 文件的网站。我们可以用 Parcel 来为我们创建一个实时预览。

打开终端，确保你在你的项目所在的文件夹中。如果你使用的是 VS Code，你可以使用内置终端，它将自动在正确的文件夹中启动。

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-30-at-18.35.20.png)

用 VS Code 的内置终端运行  Parcel

当我们确定我们在正确的文件夹中，我们就可以用下面的命令运行 `Parcel`。这将给你一个可以看到结果的 URL。而且，无论何时我们改变一个文件，我们都可以在浏览器中看到保存后的结果。

```shell
parcel index.html
```

当你启动这个脚本，它就会运行并生成你网站的实时预览，直到你停止它或关闭终端窗口。一般来说，你可以在开发你的网站时保持它的运行。一旦你完成了，你可以按 **Ctrl+C** 来停止它。

如果它出现了不同步，或者你出错了，那么你也可以按 Ctrl+C 停止它，然后再运行同样的脚本，重新启动它。

当然，Parcel 的功能远不止于此。现在，你也可以使用 SCSS 来代替普通的 CSS，例如。这让你可以使用许多很酷的功能，如嵌套声明、使用混合元素或调用函数等等。这就像一个具有超能力的 CSS。或者你甚至可以取代 HTML，用 Pug 来代替。

## How to Add Libraries to Your JavaScript Project

现在我们已经安装了 Node，并且已经初步了解了 npm，让我们看看如何在我们的项目添加库。

在过去，开发人员使用 CDN 来添加库。你可以通过在你的 HTML 中设置一个指向 URL 的脚本标签来导入一个库。

这很好，而且仍然很好用，但现在许多开发者使用 npm，或 Node 包管理器来添加库到他们的项目。那么，它是如何工作的呢？

首先，你必须在终端用以下命令初始化项目。同样，你需要在你项目的根目录下运行这个命令（提示：使用 VS Code 的内置终端在正确的文件夹中启动）。

```shell
npm init —yes
```

这个命令在你的项目根目录下初始化了一个带有一些元数据的 package.json 文件。它有诸如项目名称、描述、版本号等内容。当你添加 yes 标志时，所有这些值都会有一个默认值。

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-31-at-18.36.56.png)

初始化项目并安装 Three.js

现在我们可以用 `npm install` 命令将库添加到我们的包中。在我的 [上一篇文章](https://www.freecodecamp.org/news/render-3d-objects-in-browser-drawing-a-box-with-threejs/)中，我们使用 Three.js 在浏览器中渲染 3D 盒子。

因此，作为一个例子，让我们来安装 Three.js。再次进入你的终端，确保你在正确的文件夹中，并运行以下命令:

```shell
npm install three
```

这将安装 Three.js。你怎么知道这里的关键词是 three 而不是 threejs？

当你不知道包的名字时，你可以直接用谷歌搜索 npm 和你需要的库的名字。或者在你甚至不知道库名的情况下，你也可以直接搜索 `npm 3D library`，看看谷歌会出现什么。

我们可以逐一查看这些包，并根据它们的功能和其他信息来挑选。这些包大多带有描述和快速的例子，让你了解这个库能为你做什么。

你可能想注意的另一个指标是每周的下载量和最后一次更新的时间，以确保你选择一个人们仍在使用的积极维护的库。

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
