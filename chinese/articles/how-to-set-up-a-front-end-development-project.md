> - 原文地址：[JavaScript Tutorial – How to Set Up a Front End Development Project](https://www.freecodecamp.org/news/how-to-set-up-a-front-end-development-project/)
> - 原文作者：[Hunor Márton BorbélyHunor Márton Borbély](https://www.freecodecamp.org/news/author/hunor/)
> - 译者：[luojiyin](how-to-set-up-a-front-end-development-project)
> - 校对者：

![JavaScript Tutorial – How to Set Up a Front End Development Project](https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/Set-up-a-frontend-project.001.jpeg)

比方说，你计划建立一个网站。在你开始之前，你想设置一些工具，使你的生活更容易。但你应该使用哪些工具呢？

JavaScript 生态系统的变化如此之快，以至于要挑选最好的工具来使用，可能会让人不知所措。为了解决这个问题，在这篇文章中我将指导你如何从头开始设置一个前端项目。

我们将涵盖一些内容，如必备的编辑器扩展，如何将 JavaScript 库添加到你的项目中，为什么即使你想做前端开发也要使用 Node.js，以及如何设置一个应用程序捆绑器，在你在浏览器中编码时生成一个实时预览。

因此，让我们深入了解一下。

## 如何选择一个代码编辑器

让我们从基础开始。作为一个 Web 开发者，你主要是编辑文本，所以你需要一个好的编辑器。那么，你应该使用哪一个呢？

挑选一个编辑器在很大程度上是基于个人的偏好，因为大多数编辑器的功能都非常相似。

如果你没有个人偏好，我强烈推荐 [VS Code](https://code.visualstudio.com/)。最近，VS Code 已经成为网络开发的事实上的标准编辑器。

下面是最新一期的 [JS 现状调查](https://stateofjs.com/) 的图表。在这项调查中，超过 23000 名开发者被问及他们对网络开发的偏好。绝大多数人选择了 VS Code。

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-26-at-11.23.50.png)

如果你以前没有查看过 [JS 现状](https://stateofjs.com/) 的调查，我强烈建议你查看。它可以让你对 JavaScript 的最新趋势有一个很好的概述。你可以了解到哪些工具和库是人们喜欢使用的，哪些是他们即将放弃的。

所有主流编辑器的最大特点之一是你可以为它们添加扩展。让我们走过两个扩展，它们是必须的。

## 如何在 VS 代码中自动格式化你的代码

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

## 为什么你的前端项目需要 Node？

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

## 如何运行你的项目

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

## 如何在你的 JavaScript 项目中添加库

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

一旦你找到了你要找的软件包，你可以在右上角看到安装它的命令。**npm i three**。这里的 `i` 只是安装的简写。

当我们运行这个命令时，会发生三件事。

首先，它将把 Three.js 的最新版本添加到你的 package.json 文件中，作为项目依赖。

然后，它还会创建一个 `package-lock` 文件。这两件事，`package.json` 文件的依赖部分和 `package-lock` 文件，都是你永远不应该手动编辑的东西。对于添加、删除或更新软件包，你总是使用诸如 `npm install`、`npm uninstall` 等命令。

当你运行 `npm install` 命令，第三件事就是创建一个 `node_modules` 文件夹。这是 Three.js 的实际源代码所在的文件夹。

因此，当你在项目中导入 `Three.js` 时，它会在这个文件夹中查找它。这个文件夹也是你永远都不想手动更改的东西。

所以，现在我们安装了 Three.js，我们可以创建一个非常简单的网站，显示一个 3D 盒子。这是一个简单的 HTML 文件和一个包含 3D 盒子代码的 JavaScript 文件。

这里的关键是，在你的 JavaScript 文件中，你要用 import 语句导入 Three.js。而这将使用你刚刚安装的软件包。

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-31-at-18.47.00.png)

然后我们就可以用 Parcel 运行这个项目了。使用 `imports` 意味着我们现在使用 `module` 系统。用 `module` 语法运行项目可能有点麻烦，但由于我们是用 Parcel 来运行我们的项目，所以它可以无缝运行，没有任何问题。这就是我们使用 Parcel 的原因之一。

如果你想了解更多关于用 Three.js 构建 3D 游戏的信息，请查看我的 [早期文章](https://www.freecodecamp.org/news/three-js-tutorial/)，关于如何在浏览器中构建一个简单的汽车。

## 如何在编码时获得编码的提示

VS Code 的第二个必备扩展是 ESLint。当 Prettier 在对代码进行格式化时，ESLint 可以给你提供编码提示。

在 JavaScript 中，有几种模式会导致一个 bug，或者在你试图理解代码时可能会产生误解。

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-06-01-at-01.49.24.png)

错别字会导致恼人的 bug。

在这个例子中，我们声明了一个变量，但是我们有一个错字，我们试图使用另一个不存在的变量。

ESLint 将为你强调这一点。它将在变量声明处给你一个警告，说你创建了一个你不使用的变量。在使用它时会说你试图使用一个没有声明的变量。

这些警告，让你很容易发现你犯了一个错误。当然，ESLint 要比仅仅捕捉这种简单的错误复杂得多。还有一些不太明显的，你可能首先不明白它为什么要抱怨。

这时，你也可以点击链接，看看更详细的解释，为什么这种模式被认为是有害的，你能做什么来避免它。

那么你如何在你的项目中使用 ESLint 呢？设置它需要比安装一个扩展多几个步骤。幸运的是这些步骤中的大多数你只需要做一次。

![](https://www.freecodecamp.org/news/content/images/2021/05/Set-up-a-frontend-project.002-1.jpeg)

首先，正如你对 Prettier 所做的，你必须安装 ESLint 扩展。进入扩展，搜索 ESLint 并安装它。

然后你还需要生成一个 ESLint 配置。不过在这之前，你首先需要确保你的项目是用 npm init 初始化的。

如果你还没有 package.json 文件，那么首先你必须运行 `npm init -yes` 来初始化你的项目。
然后你可以用下面的命令生成一个 ESLint 配置。

```shell
npx eslint —init
```

npx 是 Node 自带的另一个工具。它可以运行甚至不在你电脑上的脚本。

在这个例子中，我们运行了 ESlint 脚本，但我们实际上从未安装过 ESlint。我们安装了 ESLint 扩展，但这并不是我们在这里执行的脚本。

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-31-at-23.07.47.png)

从终端初始化 ESLint 配置，添加一个 .eslintignore 文件

这个脚本会问你几个问题。除了第一个问题外，大部分都是显而易见的。

- **How would you like to use ESLint?**

你希望 ESLint 只检查语法问题，还是希望它也能发现可能的问题，或者你甚至希望它检查文体问题？

如果你也使用 Prettier，你需要选择第二个选项。因为如果 Prettier 和 ESLint 都试图为你推荐一个文体，它们很可能最终会产生冲突。

所以，如果你使用 Prettier，你不希望 ESLint 检查风格，只检查语法和可能的问题。

- **What type of modules does your project use?**

在一个前端项目中，你可能使用导入和导出，所以你选择第一个选项。

- **Which framework does your project use?**

如果你使用 React 或 Vue.js，根据实际选择，否则选择无。  

- **Does your project use Typescript?**

如果你使用 Typescript，请选择是，否则就按回车键继续。

- **Where does your project run?**

你的项目是要在浏览器中运行还是用 Node？这里我们设置了一个前端项目，所以我们选择浏览器。

- **What format do you want your config file to be in?**

这其实并不重要，但如果你以后想自定义配置，你可能想选择 JavaScript 或 JSON。

脚本最后询问是否应该将 ESlint 作为开发依赖来安装。这里你应该选择是。这将安装 ESlint，所以它将在你的 node_modules 文件夹中可用。
 
这一步之后，你将得到你的配置，你可以在 package.json 文件中找到 ESlint，作为开发依赖。

开发依赖意味着 ESlint 不是你网站源代码的一部分，但工具需要它。在这种情况下，ESLint 扩展需要将 ESlint 包安装到你的项目中。

现在我们已经安装了 ESLint 扩展，有了 ESLint 配置，并且安装了 ESlint 包，我们还需要授予扩展对这个包的访问权。

这是一个安全要求，你只需要做一次。在编辑器的底部，一旦你安装了扩展，你会发现 ESLint 按钮，它前面有一个交叉的圆圈。点击它并选择 **Allow Everywhere**。这使得 ESLint 扩展在未来的任何项目中也能正常工作。

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-31-at-23.17.14.png)

![](https://www.freecodecamp.org/news/content/images/2021/05/Screenshot-2021-05-31-at-23.16.59.png)

在所有这些步骤之后，ESLint 终于应该工作了。如果我们进入一个 JavaScript 文件，并试图使用一个未声明的变量，那么在保存时它会突出显示这个问题。

ESLint 也可能在实际情况良好的地方给你错误。具有讽刺意味的是，如果你选择了 ESLint 的配置应该在一个 JavaScript 文件中，那么它将在配置本身给你一个错误。

这是因为我们设定我们项目的环境是浏览器，而这个配置依赖于一个在浏览器中不存在的全局变量。

不过，这个文件并不完全是我们网站的一部分。它是一个配置文件，不会成为最终源代码的一部分，其自然环境不是浏览器，而是 Node.js。而在 Node 中，这个全局变量确实存在。所以这个文件实际上是正确的，这里不应该有错误。

ESLint 也是高度可定制的。更多细节请查看 [ESLint 的文档](https://eslint.org/docs/user-guide/configuring/)。

## 如何建立一个 React 或 Vue 项目

你打算用 React 或 Vue.js 建立一个网站吗？你基本上需要做同样的步骤。

用 npm init 初始化一个项目，安装依赖项，设置 ESLint，然后用 Parcel 运行你的项目。

请看我在 YouTube 上的视频，我们通过之前的步骤和一个快速的 React 和 Vue.js 的例子项目。

## 接下来

这些是你在做前端 JS 项目时可以使用的基本工具。用 npm 添加库，用 Prettier 保持你的代码整洁，用 ESLint 避免不必要的麻烦，用 Parcel 运行你的项目。

现在我们已经建立了一个前端项目，你已经准备好开始建立你的网站。

一旦你完成它，会发生什么？你需要把它 bundle 成一个最终的生产构建，你可以上传到网络上。如果你使用 parcel，你可以用以下命令创建一个最终的 bundle:

```shell
parcel build index.html —public-url '.'
```

这将在 dist 文件夹中创建一个 bundle 文件，你可以在浏览器中运行。你可以在浏览器中简单地运行 dist 文件夹中的新 index.html 文件，以看到你的最终结果。

就这样吧! 谢谢您的阅读  :)

### **订阅更多关于网站开发的教程:**

Hunor Márton Borbély

[推特](https://twitter.com/HunorBorbely)

[codepen](https://codepen.io/HunorMarton)

[YouTube](https://www.youtube.com/channel/UCxhgW0Q5XLvIoXHAfQXg9oQ)
