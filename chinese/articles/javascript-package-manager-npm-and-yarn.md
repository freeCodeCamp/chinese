> - 原文地址：[JavaScript Package Manager – Complete Guide to NPM and Yarn](https://www.freecodecamp.org/news/javascript-package-manager-npm-and-yarn/)
> - 原文作者：[Oluwatobi Sofela](https://www.freecodecamp.org/news/author/oluwatobiss/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![JavaScript Package Manager – Complete Guide to NPM and Yarn](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/package-manager-npm-and-yarn-explained-curology-pDsmoI5j3B8-unsplash.jpg)

一个 **包管理器** 是开发人员用来自动寻找、下载、安装、配置、升级和删除系统包的工具。

本文将向你展示所有你需要的东西，以开始使用NPM和Yarn等软件包管理器。

但是，究竟为什么我们在开发工作流程中需要一个软件包管理器呢？让我们来了解一下。

## Why Do You Need a Package Manager?

假设没有软件包管理器。在这种情况下，你将不得不手动完成以下工作:

- 为你的项目找到所有正确的软件包
- 验证这些包是否有任何已知的漏洞
- 下载软件包
- 在适当的位置安装它们
- 跟踪所有软件包的最新更新
- 当有新的版本时，升级每个软件包
- 删除你不再需要的软件包

手动管理几十或几百个包是一项令人厌烦和耗时的工作。

因此，软件包管理器--如 [NPM](https://www.npmjs.com/)、[pNPM](https://pnpm.io/)、[Bower](https://bower.io/)和 [Yarn](https://yarnpkg.com/)--有助于自动化并消除手动管理所有软件包的繁琐过程。

请记住，软件包管理器和软件包 registry 是不一样的。因此，让我们找出主要的区别。

## Package Manager vs. Package Registry – What's the Difference?

一个 **包管理器** 是开发人员用来自动查找、下载、安装、配置、升级和卸载计算机包的工具。

NPM（Node Package Manager）和Yarn（Yet Another Resource Negotiator）是两个常用的软件包管理器。

一个 **package registry** 是一个数据库（存储），用于存储成千上万的包（库、插件、框架或工具）。

换句话说,**package registry** 是包被发布到和安装的地方。

[NPM registry](https://www.npmjs.com/)和[GitHub Packages](https://github.com/features/packages)是两个普遍使用的 package registries。

所以，现在我们知道了什么是包管理器以及为什么需要它，我们可以讨论如何使用两个流行的包管理器 NPM 和 Yarn。

请注意，外面有许多关于NPM和Yarn的争论--所以我们在这里会避免这些争论，因为最好的软件包管理器是最适合你的。

因此，本文将向你展示NPM和Yarn是如何工作的，而不是告诉你哪个软件包管理器是最好的。然后由你来决定你喜欢哪一个。

另外，你可以选择在一个特定的项目中使用NPM，在另一个项目中使用Yarn,这取决于你认为哪个管理器最适合这项工作。

因此，不再多说，让我们开始学习如何安装这两个管理器。

## How to Install Node Package Manager (NPM)

NPM会在安装Node时自动安装。

因此，要在你的系统上安装NPM，请到 [NodeJS](https://nodejs.org/en/) 网站上获取Node的 [最新LTS或当前版本](https://tamalweb.com/which-nodejs-version)。

## How to Install Yarn

最好是通过NPM来安装Yarn。因此，首先，从 [Node.js](https://nodejs.org/en/)网站上安装NPM。

一旦你安装了NPM，就像这样继续安装Yarn:

```bash
npm install -g yarn
```

## How to Check the Installed Node Version

要检查你系统上安装的Node.js版本，请运行:

```bash
node -v
```

上面片段中的`-v`标志是 `--version` 的缩写.

## How to Check the Installed NPM Version

要检查你系统上安装的NPM版本，请运行:

```bash
npm -v
```

## How to Check the Installed Yarn Version

要检查你系统上安装的Yarn版本，请运行:

```bash
yarn -v
```

## How to Upgrade Node Package Manager

通过运行以下程序更新到最新的NPM版本:

```bash
npm install npm@latest -g
```

## How to Upgrade NodeJS

假设你希望升级你的Node.js安装。在这种情况下，你有两个选择:

### Option 1: Upgrade via the NodeJS website

升级你的NodeJS安装的一种方法是手动从 [Node.js 官网](https://nodejs.org/en/)下载并安装最新版本。

### Option 2: Upgrade via a version management tool

另一种升级NodeJS安装的方法是使用 [版本管理器](https://nodejs.org/en/download/package-manager/)，如 [NVM](https://github.com/nvm-sh/nvm)、[n](https://github.com/tj/n)，或 [nvs](https://github.com/jasongin/nvs)。

## How to Upgrade Yarn

通过运行以下程序更新到最新的Yarn版本:

```bash
yarn set version latest
```

所以，现在我们的电脑上有了NPM（或Yarn），我们可以开始使用安装管理器来寻找、安装、配置和删除我们项目的包。

但究竟什么是包？让我们来了解一下。

## What Exactly Is a Package?

一个 **包** 是一个[目录](https://www.codesweetly.com/git-basic-introduction/#h-working-directory)（或项目），它有一个 `package.json` 文件用来记录它的信息。

**注意：** 你只能将包（由`package.json`文件描述的项目）发布到[NPM registry](https://docs.npmjs.com/cli/v6/using-npm/registry)。

## How to Install Packages

有两种方法来安装软件包：本地或全局。

### Local package installation

一个本地安装的软件包是你只能在你安装它的项目中使用的。

要在本地安装一个软件包，请执行以下步骤:

1. 从命令行进入到你项目的 [根目录](https://www.codesweetly.com/web-tech-glossary/#h-root-directory)。

2. 使用下面的 NPM 或 Yarn 安装命令安装你的包（取决于你选择的项目使用的包管理器）。

**注意：** 你的系统必须安装Node和NPM，下面的NPM（和Yarn）安装命令才能工作。你可以通过安装最新的LTS或Node.js网站的当前版本来获得这两者。

#### NPM installation command

```bash
npm install package-name --save
```

注意，上面的`--save` 命令指示NPM将 `package.json` 文件中的 `package-name` 保存为项目所依赖的包之一。

假设你希望安装一个精确版本的软件包。在这种情况下，在软件包的名称后面添加 `@[版本号]`，像这样:

```bash
npm install package-name@4.14.1 --save
```

或者，如果你要安装的软件包是用于开发和测试目的，则使用:

```bash
npm install package-name --save-dev
```

上面的命令将使NPM下载三个项目到你的项目根目录：一个 `node_modules` 文件夹，一个 `package.json` 文件，和一个 `package-lock.json` 文件。我们将在本文后面详细讨论这些项目。

#### Yarn installation command

```bash
yarn add package-name
```

假设你希望安装一个软件包的确切版本。在这种情况下，请在软件包的名称后面添加一个`@[版本号]`，像这样:

```bash
yarn add package-name@4.14.1
```

或者，如果你要安装的软件包是用于开发和测试目的，则使用:

```bash
yarn add package-name --dev
```

上面的命令将使Yarn下载三个项目到你的项目根目录：一个 `node_modules` 文件夹，一个`package.json` 文件，和一个 `yarn.lock` 文件。我们将在本文后面详细讨论这些项目。

所以，现在我们知道了如何在本地安装一个包，我们可以讨论全局包的安装。

### Global package installation

全局安装的软件包是一个你可以在系统的任何地方使用的软件包。

要在全局范围内安装一个软件包，在你的终端上运行下面的代码:

```bash
npm install package-name -g
```

或者，你可以像这样使用Yarn:

```bash
yarn global add package-name
```

注意，你可以从你系统的任何位置运行上述命令。

### Local vs. global package installation

一般来说，最好是在本地安装一个软件包。下面是本地安装和全局安装之间的一些区别。

#### Difference 1: Installation location

一个本地安装的包会被安装在你执行`npm install package-name`（或`yarn add package-name`）命令的目录下。

具体来说，你可以在一个项目的 `node_module` 目录下找到本地安装的软件包。

相比之下，全局安装的包会被安装在你系统中的一个位置。具体位置取决于你系统的配置。

#### Difference 2: Package versions

假设你在本地安装了你的包。那么，你可以使用同一个包的不同版本来开发多个应用程序(译者注：你可以在不同的目录安装)。

然而，当你在全球范围内安装时，你被迫为你的所有应用程序使用相同的软件包版本。

#### Difference 3: Updates

本地安装允许你选择你想升级到最新版本的项目包。这使你更容易管理那些破坏与其他软件包兼容性的升级。

然而，升级一个全局安装的包会更新所有项目的包--如果升级破坏了与其他包的兼容性，这可能会导致维护的噩梦。

#### Difference 4: Usage recommendation

全局安装最适合你打算只在你的命令行上使用的软件包--特别是当它们提供了可在不同项目中重复使用的可执行命令。

然而，本地安装最适合于你打算在程序中使用的软件包--通过`import`语句或`require()`函数。

#### Difference 5: Examples

[NPM](https://www.npmjs.com/), [React Native CLI](https://reactnative.dev/docs/environment-setup), [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/), [Grunt CLI](https://gruntjs.com/getting-started), 和 [Vue CLI](https://cli.vuejs.org/) 是著名的需要全局软件包的例子。

本地包的常见例子有 [Webpack](https://webpack.js.org/), [Lodash](https://lodash.com/), [Jest](https://jestjs.io/), and [MomentJS](https://momentjs.com/).

**注意:**

- 你可以对你打算在命令行和项目中使用的软件包[进行本地和全局安装](https://nodejs.org/en/blog/npm/npm-1-0-global-vs-local-installation/#when-you-can-t-choose)。这种包的典型例子是[ExpressJS](https://expressjs.com/)和[CoffeeScript](https://coffeescript.org/)。
- 你的包管理器不会执行已安装的包。NPM（和Yarn）只将包安装到`node_modules`目录。而如果你指定了`--save`命令，你的管理器会把软件包的细节添加到`package.json`文件中。
- 要执行（运行）任何[可执行](https://helpdeskgeek.com/how-to/what-is-an-executable-file-how-to-create-one/)包，你必须自己明确地这样做。我们将在本文后面的章节中讨论如何做。

但究竟什么是 `node_modules` 文件夹、`package.json` 文件、`package-lock.json` 文件和 `yarn.lock` 文件？让我们来了解一下。

## What Is a `node_modules` Folder?

**node/modules**目录是NPM放置所有为你的项目下载的本地软件包的文件夹。

## What Is a `package.json` File?

**package.json**文件是一个JSON文件，包管理器（如NPM和Yarn）使用它来存储特定项目的信息。

换句话说，`package.json`文件是一个项目的元数据文件。

### Advantages of a `package.json` File

 `package.json` 文件:

- 使得将你的项目发布到NPM registry 成为可能
- 使得其他人能够轻松地管理和安装你的软件包
- 帮助NPM轻松管理 [模块](https://www.codesweetly.com/javascript-modules-tutorial/) 的依赖关系
- 使得你的软件包可以重现并与其他开发者共享

### How to Create a `package.json` File

进入你的项目根目录，通过运行来初始化创建一个`package.json`文件:

```bash
npm init
```

或者，如果你的软件包管理器是Yarn，运行:

```bash
yarn init
```

一旦你执行了上面的初始化命令，你的软件包管理器将通过询问一些关于你的项目的问题来指导你创建`package.json`文件。

如果你希望跳过问卷调查，你可以创建一个默认的`package.json`文件。让我们来看看如何。

### How to Create a Default `package.json` File

假设你喜欢跳过`npm init`（或`yarn init`）命令所提示。在这种情况下，进入你的项目的[根目录](https://www.codesweetly.com/web-tech-glossary/#h-root-directory)并运行。:

```bash
npm init -y
```

或者，如果你的软件包管理器是Yarn，运行:

```bash
yarn init -y
```

上面的命令将使用[从当前目录获得默认值](https://docs.npmjs.com/creating-a-package-json-file#default-values-extracted-from-the-current-directory)来创建你的项目的`package.json`文件。

**注意：** `-y`标志是 `--yes` 的简写。

一旦你的软件包管理器完成了它的初始化过程，你的项目的`package.json`文件将包含一个具有一系列属性的对象。

**下面是一个例子:**

```json
{
  "name": "codesweetly-project",
  "version": "1.0.0",
  "main": "index.js"
}
```

你可以看到上面的`package.json`文件包含`name`、`version`和`main`字段。下面我们来了解一下这些属性。

### The `package.json`'s Fields

`package.json`的属性使你的项目可以被包管理器和终端用户使用。

假设你想把你的包发布到NPM registry。在这种情况下，你的 `package.json` 文件必须有 `"name"` 和`"version"` 字段。

然而，如果你不打算发布你的包，在这种情况下，所有字段--包括 `"name"` 和 `"version"` 属性--都是可选的。

让我们了解更多关于 `package.json` 文件中常用的字段。

#### name

`"name"` 字段是一个用于记录项目名称的属性。

`"name"` 属性的值必须是。

- 一个单字
- 小写字母
- 并且小于或等于214个字符

请注意，你可以用连字符和下划线将单词连接起来。

**这是一个例子:**

```json
{
  "name": "code_sweetly-project"
}
```

#### version

`"version"` 字段表示一个项目的当前版本号。

`"version"` 属性必须是 "major.minor.patch "的形式。它还必须遵循[语义版本指南](https://docs.npmjs.com/about-semantic-versioning)。

**这是一个例子:**

```json
{
  "version": "1.0.0"
}
```

#### description

`"description"` 字段是一个包含项目目的简要描述的属性。

NPM建议有一个`"description"`属性，使你的包在NPM网站上更容易找到。

当人们运行`npm search`命令时，你的描述将被显示出来。

**Here's an example:**

```json
{
  "description": "A brief description about this package (project)"
}
```

#### main

`"main"` 字段表示一个项目的 [入口点](https://www.codesweetly.com/web-tech-glossary/#entry-point).

换句话说，当有人运行 `require()` 函数时，Node将把调用解析为 `require(<package.json:main>)`。

**这是一个例子:**

```json
{
  "main": "./src/index.js"
}
```

#### private

`"private"`字段让软件包管理员知道他们是否应该将你的项目发布到 NPM registry。

**这是一个例子:**

```json
{
  "private": true
}
```

如果你把package.json的 `"private"` 属性设置为 `true`，包管理器将不会发布你的项目。

因此，设置该属性是防止意外发布你的包的一个好办法。

#### scripts

"scripts"`字段定义了你想在项目生命周期的不同时期运行的脚本命令。

**这是一个例子:**

```json
{
  "scripts": {
    "test": "jest",
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build" 
  }
}
```

上面的 "scripts "字段包含五个属性，其值是我们希望包管理器在调用该属性的键时运行的命令。

因此，例如，运行`npm run dev`将执行`"webpack --mode development"`命令。

#### keywords

`"keywords"`字段指定了几个关键词，可以帮助人们通过搜索发现你的包。

**Here's an example:**

```json
{
  "keywords": [
    "drag",
    "drop",
    "drag and drop",
    "dragndrop",
    "draggable" 
  ]
}
```

`"keywords"`属性是人们运行`npm search`命令时显示的部分信息。

#### author

`"author"` 字段列出了一个项目的作者的详细资料。

**这是一个例子:**

```json
{
  "author": "Oluwatobi Sofela <oluwatobiss@codesweetly.com> (https://www.codesweetly.com)"
}
```

你也可以把上面的片段写成:

```json
{
  "author": {
    "name": "Oluwatobi Sofela",
    "email": "oluwatobiss@codesweetly.com",
    "url": "https://www.codesweetly.com"
  }
}
```

注意，`"email"` 和 `"url"` 属性是可选的。

#### dependencies

 `"dependencies"` 字段列出了一个项目在生产中依赖的所有软件包。

**这是一个例子:**

```json
{
  "dependencies": {
    "first-package": "^1.0.4",
    "second-package": "~2.1.3"
  }
}
```

因此，每当用户从NPM registry 安装你的项目时，依赖项属性就会确保包管理器能够自动找到并安装列出的包。

请注意，你可以通过以下两种方式将一个包添加到 `"dependencies"`字段中:

- 手动添加你的项目在生产中依赖的每个软件包的名称和 [语义版本](https://docs.npmjs.com/about-semantic-versioning)。
- 在你的终端上运行 `npm install package-name --save-prod` 命令。如果Yarn是你的软件包管理器，则可以使用 `yarn add package-name`。

#### devDependencies

`"devDependencies"` 字段列出了一个项目在生产中不需要的所有软件包，但在本地开发和测试时需要。

**这是一个例子:**

```json
{
  "devDependencies": {
    "first-dev-package": "^5.8.1",
    "second-dev-package": "3.2.2—4.0.0"
  }
}
```

请注意，在 `"devDependencies"` 字段中列出的包将在项目的开发环境中可用，但在生产服务器上则没有。

假设一个用户通过 "npm install"（或 "yarn add"）命令安装项目。在这种情况下，软件包管理器将找到并下载所有列出的`devDependencies`到项目的`node_modules`目录。

请记住，你可以通过以下两种方式将包添加到 `"devDependencies"` 字段中:

- 手动添加你的项目在开发和测试中所依赖的每个软件包的名称和语义版本。
- 在你的终端上运行`npm install package-name --save-dev`命令。如果Yarn是你的软件包管理器，则可以使用`yarn add package-name --dev`。

#### homepage

`"homepage"` 字段指定了你的项目主页的URL。

**这是一个例子:**

```json
{
  "homepage": "https://codesweetly.com/package-json-file-explained"
}
```

所以，现在我们知道什么是`package.json`文件，我们可以讨论`package-lock.json`。

## What Is a `package-lock.json` File?

**package-lock.json** 文件是 NPM 用来记录你在本地安装到项目 `node_modules` 目录下的所有软件包的准确版本的 [文件](https://www.codesweetly.com/document-vs-data-vs-code/#h-what-is-a-document)。

`package-lock.json` 文件使应用程序以您发布到 NPM registry 后以确切方式100% 复现。

因此，假设一个用户克隆了你的应用程序并运行了`npm install`命令。在这种情况下，`package-lock.json`确保用户下载的是你用来开发应用程序的确切版本的软件包。

例如，假设一个用户克隆了你的应用程序，其中没有`package-lock.json`文件，而该应用程序中使用的一个依赖项有一个较新的版本。

假设`package.json`文件中的依赖关系的版本号有一个圆点符号（例如，`^2.6.2`）。在这种情况下，NPM将安装该依赖的最新次要版本--这可能导致应用程序产生错误的结果。

然而，假设用户克隆了你的应用程序，其中包含一个`package-lock.json`文件。在这种情况下，NPM将安装`package-lock.json`文件中记录的依赖关系的确切版本--不管是否存在更新的版本。

因此，用户将始终以你发布到NPM注册表的精确方式获得你的应用程序。

换句话说，NPM使用`package-lock.json`文件将你的软件包的依赖关系锁定在你用于项目开发的特定版本号上。

**注意：** 只要你运行 `npm update` 命令，NPM就会更新 `package-lock.json` 文件中记录的软件包。

## What Is a `yarn.lock` File?

`yarn.lock`文件是Yarn用来记录你在项目的`node_modules`目录下安装的所有软件包的确切版本。

`yarn.lock`文件与NPM的 [package-lock.json](#what-is-a-package-lock-json-file) 锁文件相当。

我们之前提到，你的软件包管理器不会执行已安装的软件包--除非你自己明确地这样做。让我们来讨论一下如何做。

## How to Run an Executable Package

有几种方法来运行一个可执行包。以下是标准的技术。

### Manually locate and execute the package

运行可执行包的一种方法是在你的命令行中输入其本地路径，如图所示:

```bash
./node_modules/.bin/package-name
```

### Add the package to the package.json's `scripts` field

另一种执行软件包的方法是，首先将其添加到你的项目package.json文件的`"scripts"`字段中，像这样:

```json
{
  "name": "your_package",
  "version": "1.0.0",
  "scripts": {
    "desired-name": "name-of-package-to-execute"
  }
}
```

之后，你可以像这样运行软件包:

```bash
npm run desired-name
```

注意，上面的命令是 `npm run-script desired-name` 的简写。

另外，你也可以像这样用Yarn来执行这个包:

```bash
yarn run desired-name
```

**Here's an example:**

```json
{
  "name": "codesweetly-app",
  "version": "1.0.0",
  "scripts": {
    "build": "webpack",
  }
}
```

上面的片段将[webpack](https://www.codesweetly.com/javascript-module-bundler/)添加到你的 `package.json` 的 `"scripts"` 字段。因此，我们现在可以像这样在命令行中执行 `webpack`:

```bash
npm run build
```

或者，如果你的软件包管理器是Yarn，你可以像这样运行webpack:

```bash
yarn run build
```

### Use NPX

运行可执行包的一个更快的方法是像这样使用NPX:

```bash
npx package-name
```

With NPX, you no longer need to add your package to the `"scripts"` field of your project's `package.json` file.

NPX (Node Package Execute) is a [Node package runner](https://nodejs.dev/learn/the-npx-nodejs-package-runner) that automatically finds and executes a specified package.

**Here's an example:**

```bash
npx webpack
```

The command above will automatically find and execute [webpack](https://www.codesweetly.com/javascript-module-bundler/). So, we do not need to add the `"build": "webpack"` property to the `"scripts"` field of our `package.json` file.

**Note:** NPX automatically gets installed when you install Node 8.2/NPM 5.2.0 or higher.

You can also run some code using your preferred Node.js version. Let's find out how.

## How to Run Code Using Your Preferred Node.js Version

You can use the `@` character and the [node npm package](https://www.npmjs.com/package/node) to specify the Node.js version you wish to use to execute your code.

**Here's an example:**

```bash
npx node@7 index.js
```

The snippet above tells NPX to run `index.js` with the latest version of Node from version 7 major.

Using the `node@` command is a helpful way to avoid using Node.js version management tools like [nvm](https://github.com/nvm-sh/nvm) to switch between Node versions.

Suppose you wish to confirm the Node version NPX will use to run your code. In that case, run:

```bash
npx node@7 -v
```

The snippet above will display the latest Node version from version 7 major that NPX will use to run your code—for example, `v7.10.1`.

## How to Check for Outdated Local Packages

To determine if any of your project's packages are outdated, run:

```bash
npm outdated
```

If the command outputs nothing, it means all your project's packages are up to date.

Otherwise, see this [npm-outdated article](https://docs.npmjs.com/cli/v6/commands/npm-outdated) for a detailed explanation of the command's output.

Alternatively, you can use Yarn like so:

```bash
yarn outdated
```

**Note:** To check a specific package's outdated status, add the package's name after the `outdated` keyword—for example, `npm outdated lodash`.

## How to Check for Outdated Global Packages

To confirm which global package is outdated, run:

```bash
npm outdated -g --depth=0
```

## How to Check for Locally Installed Packages

Here are three ways to check for locally installed packages:

### Locally installed packages and their dependencies

```bash
npm list
```

Or use Yarn like so:

```bash
yarn list
```

### Locally installed packages—without their dependencies

```bash
npm list --depth=0
```

Or,

```bash
yarn list --depth=0
```

### Check if a specific package got installed locally

```bash
npm list package-name
```

## How to Check for Globally Installed Packages

Here are three ways to check for globally installed packages:

### Globally installed packages and their dependencies

```bash
npm list -g
```

Or use Yarn like so:

```bash
yarn list -g
```

### Globally installed packages—without their dependencies

```bash
npm list -g --depth=0
```

Or,

```bash
yarn list -g --depth=0
```

### Check if a specific package got installed globally

```bash
npm list -g package-name
```

## How to Update Packages

Here's how to update packages with NPM and Yarn:

### How to update a specific package to its latest version

```bash
npm update package-name
```

Or, for projects managed with Yarn, run:

```bash
yarn upgrade package-name
```

### How to update all of a project's locally installed packages

```bash
npm update
```

Or,

```bash
yarn upgrade
```

### How to update a specific globally installed package

You can update a globally installed package like this:

```bash
npm update package-name -g
```

### How to update all your system's globally installed packages

```bash
npm update -g
```

## How to Uninstall Packages

Here's how to uninstall packages with NPM and Yarn:

### How to uninstall a package from a specific project

First, navigate to the project's [root directory](https://www.codesweetly.com/web-tech-glossary/#h-root-directory) from the command line and run:

```bash
npm uninstall package-name
```

**Note:**

- Add the `-S` (or `--save`) flag to remove references to the package in the `dependencies` field of the project's `package.json` file.
- Add the `-D` (or `--save-dev`) flag to remove references to the package in the `devDependencies` field of the project's `package.json` file.

For projects managed with Yarn, run:

```bash
yarn remove package-name
```

**Note:** The `yarn remove` command will automatically update the project's `package.json` and `yarn.lock` files.

### How to uninstall a global package

```bash
npm uninstall package-name -g
```

Note that it is best practice not to remove packages manually from the `node_modules` folder as such action can affect other _modules_ depending on it.

But what exactly is a module in NodeJS? Let's find out below.

## What Exactly Is a Module in NodeJS?

A **module** in NodeJS is any file in the `node_modules` folder that the computer can load through Node's `require()` function.

**Here's an example:**

```js
const myModule = require("./codesweetly.js");
```

Suppose the computer successfully used the `require()` function to load the `codesweetly.js` file. In such a case, it means `codesweetly.js` is a module—assigned to the `myModule` variable.

Keep in mind that a module may also be a package—but not always.

A module is _not_ a package if it does _not_ have a `package.json` file used to record information about it.

Also, note that for a module to be loadable by the `require()` function, the module must be one of the following:

- A package—whose `package.json` file contains a `"main"` field.
- A JavaScript file.

## How to Publish Your Project to the NPM Registry

NPM is a free registry for [public package authors](https://www.npmjs.com/products).

So, you can use it to publish any project (folder) from your computer that has a `package.json` file.

Below are the steps required to share your package with the world.

### Step 1: Sign in or sign up

Go to the [NPM website](https://www.npmjs.com/) and sign in (or sign up if you do not yet have an account).

**Note:** make sure that you verify your email after creating a new account. Otherwise, you will get a `403 Forbidden` error while publishing your package.

### Step 2: Log in

Login to your NPM account from the command line like so:

```bash
npm login
```

**Note:** You can use the `npm whoami` command to check if you are currently logged in.

### Step 3: Publish your package

Go to your project's root directory and publish it like so:

```bash
npm publish
```

Make sure that your package's name does not currently exist on NPM. Otherwise, you will get an error while publishing.

You can use the `npm search` command (or the [NPM website](https://www.npmjs.com/)'s search bar) to search if the name you wish to use already exists on NPM.

Suppose all the suitable names for your package are already taken. In that case, NPM allows you to publish your project as a scope.

In other words, you can publish your package as a sub-section of your username. Let's see how below.

### How to publish your package as a scope of your username

Open your `package.json` file and prefix your package's name with your username.

**Here's an example:**

```json
{
  "name": "@username/package-name",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
```

NPM's default setting assumes that a scoped name package is a private project. So, you will get an error if you use the `npm publish` command to share a scoped name package.

Therefore, to publish your package as a scope of your username, add the `--access=public` flag to the `npm publish` command:

```bash
npm publish --access=public
```

**Note:** You can make your project a scoped package during the initialization process by using the `npm init --scope=username` command instead of `npm init`.

## Overview

This article discussed what a package manager is. We also looked at how two popular package managers (NPM and Yarn) work.

Thanks for reading!

### **And here's a useful ReactJS resource:**

I wrote a book about React!

- It's beginners friendly ✔
- It has live code snippets ✔
- It contains scalable projects ✔
- It has plenty of easy-to-grasp examples ✔

The [React Explained Clearly](https://amzn.to/30iVPIG) book is all you need to understand ReactJS.

[![React Explained Clearly Book Now Available at Amazon](https://www.freecodecamp.org/news/content/images/2022/01/Twitter-React_Explained_Clearly-CodeSweetly-Oluwatobi_Sofela.jpg)](https://amzn.to/30iVPIG)
