> - 原文地址：[The JavaScript Modules Handbook – Complete Guide to ES Modules and Module Bundlers](https://www.freecodecamp.org/news/javascript-es-modules-and-module-bundlers/)
> - 原文作者：[Oluwatobi Sofela](https://www.freecodecamp.org/news/author/oluwatobiss/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![The JavaScript Modules Handbook – Complete Guide to ES Modules and Module Bundlers](https://www.freecodecamp.org/news/content/images/size/w2000/2022/05/javascript-es-modules-and-module-bundlers-container-4203677_1920.jpg)

**Modules** 和 **Module Bundlers** 是现代 Web 开发的重要组成部分。但了解它们的工作方式很快就会让人不知所措。

本文将以通俗的方式向你展示所有你需要了解的 ES Modules 和 Module Bundlers。

## Table of Contents

1. [确切地说，什么是 JavaScript 模块？](#what-exactly-is-a-javascript-module)
2. [为什么使用模块？](#why-use-modules)
3. [JavaScript 中常见的模块系统类型](#common-types-of-module-systems-in-javascript)
4. [如何将 JavaScript 文件转换为一个模块](#how-to-convert-a-javascript-file-into-a-module)
5. [如何使用 ES 模块](#how-to-use-an-es-module)
6. [如何导出一个模块的代码](#how-to-export-a-module-s-code)
7. [如何导入已经导出的代码](#how-to-import-exported-code)
8. [如何从一个模块导入代码](#how-to-use-a-module-s-imported-code)
9. [如何重命名 ES 模块的导入和导出](#how-to-rename-exports-and-imports-in-es-modules)
10. [为什么要重命名一个模块的代码？](#why-rename-a-module-s-code)
11. [如何在一个 ES 模块中重命名多个导出](#how-to-rename-multiple-exports-in-an-es-module)
12. [如何重命名 ES 模块中的多个导入](#how-to-rename-multiple-imports-in-an-es-module)
13. [如何一次性从 ES 模块导入所有可导出的 items](#how-to-import-all-exportable-items-from-an-es-module-in-one-go)
14. [如何匿名导出到 ES 模块](#how-to-export-anonymously-to-an-es-module)
15. [究竟什么是聚合器文件？](#what-exactly-is-an-aggregator-file)
16. [项目：如何使用聚合器文件](#project-how-to-use-an-aggregator-file)
17. [如何使用`import()`语法来动态加载一个模块](#how-to-use-the-import-syntax-to-load-a-module-dynamically)
18. [ES 模块中的`import.meta`到底是什么？](#what-exactly-is-import-meta-in-es-modules)
19. [迄今为止的模块知识回顾](#quick-review-of-modules-so-far)
20. [什么是模块 Bundler？](#what-is-a-module-bundler)
21. [为什么你需要一个模块 Bundler？](#why-do-you-need-a-module-bundler)
22. [模块 Bundler 是如何工作的？](#how-does-a-module-bundler-work)
23. [如何使用 Webpack](#how-to-use-webpack)
24. [如何让 Webpack 自动生成你的应用程序的 HTML 文件](#how-to-make-webpack-auto-generate-your-app-s-html-file)
25. [如何让`HtmlWebpackPlugin`使用你的源文件作为模板来自动生成一个新的 HTML 页面](#how-to-make-htmlwebpackplugin-use-your-source-file-as-a-template-to-auto-generate-a-new-html-page)
26. [关于更新你的应用程序需要知道的重要事情](#important-stuff-to-know-about-updating-your-app)
27. [如何自动运行 Webpack](#how-to-rerun-webpack-automatically)
28. [如何自动刷新浏览器](#how-to-reload-the-browser-automatically)
29. [究竟什么是 Webpack 的配置文件？](#what-exactly-is-webpack-s-configuration-file)
30. [常见的 Webpack 配置选项](#common-webpack-configuration-options)
31. [概述](#overview)

因此，让我们开始讨论模块。

## What Exactly Is a JavaScript Module

一个 JavaScript **Module** 是一个允许你导出其代码的文件。这允许其他 JavaScript 文件导入并使用导出的代码作为它们的依赖项。

具体来说，模块是一个简单的 JavaScript 文件，它允许你与你项目中的其他文件（或通过 Yarn 和 NPM 等[包管理器](https://www.codesweetly.com/package-manager-explained)与世界分享其代码）。

## Why Use Modules

在早期，人们主要将 JavaScript 用于琐碎的脚本任务，如在需要时为网页提供零碎的互动性。换句话说，开发人员主要使用 JavaScript 来编写小型脚本，而不是大型脚本。

然而，今天，JavaScript 已经成长为一个庞大的脚本工具，能够做的事情远不止使网页具有交互性。

现在，大型的 JavaScript 代码被用于不同的功能，如服务器端网站开发、游戏开发和移动应用开发，这已成为常态。

由于 JavaScript 几乎可以用于任何编程任务，因此出现了在项目的文件和世界之间共享脚本的需求。

因此，JavaScript 社区开发了 module 系统，允许开发者按需分享他们的脚本。

## Common Types of Module Systems in JavaScript

下面是 JavaScript 中一些流行的模块系统:

- [Asynchronous Module Definition (AMD)](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)
- [CommonJS Modules](https://en.wikipedia.org/wiki/CommonJS)
- [Universal Module Definition (UMD)](https://github.com/umdjs/umd)
- [ES Modules](https://tc39.es/ecma262/#sec-modules)

**Note:** ES 模块 有时被称为 "JS 模块 "或 "ECMAScript 模块"。

在上面列出的模块系统中，ES 模块系统是 JavaScript 的官方标准。

其余三个（AMD、CommonJS 和 UMD）是在 JavaScript 没有一个标准化的模块系统时，由不同的开发者创建。

然而，自从 ES 模块在 2015 年 ECMAScript 标准中出现后，之前的模块系统已经逐渐成为 JavaScript 历史的一部分。

因此，本文将重点向你展示 ES 模块的工作原理。

不过，首先必须知道如何将一个 JavaScript 文件转换为一个模块。所以，下面我们就来讨论这个问题。

## How to Convert a JavaScript File into a Module

要将一个 JavaScript 文件转换为 ES 模块，请执行以下操作:

### 步骤 1: 创建一个项目目录

创建一个项目文件夹——本项目的 HTML 和 JavaScript 文件将存放在这里。

### 步骤 2: 创建你的代码文件

在你的项目文件夹中创建以下文件:

1. `index.html`
2. `index.js`

### 步骤 3: 将你的 JavaScript 文件添加到你的 HTML 文档中

打开你的`index.html`文件并复制以下代码:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES Module - CodeSweetly</title>
  </head>
  <body>
    <h1>ES Module Tutorial</h1>

    <!-- Add the "index.js" JavaScript file to this HTML document -->
    <script type="module" src="index.js"></script>
  </body>
</html>
```

在上面的 HTML 片段中，我们使用了 `<script>` 的 `type="module"` 属性，将 `index.js` 的 JavaScript 文件转换为 ES 模块。

所以，现在我们知道了如何将一个 JavaScript 文件转换成一个模块，让我们看看如何使用一个模块。

## How to Use an ES Module

按照以下步骤学习如何使用 ES 模块。

### 步骤 1:  创建一个项目目录

创建一个项目文件夹——本项目的 HTML 和模块文件将存放在这里。

### 步骤 2:  创建你的代码文件

在你的项目文件夹中创建以下文件:

1. `index.html`
2. `module-1.js`
3. `module-2.js`

### 步骤 3: 将模块添加到你的 HTML 文档中

打开你的`index.html`文件并复制以下代码:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES Module - CodeSweetly</title>
  </head>
  <body>
    <h1>ES Module Tutorial</h1>
    <h2>Check the console</h2>

    <script type="module" src="module-1.js"></script>
    <script type="module" src="module-2.js"></script>
  </body>
</html>
```

以下是我们在上面的 HTML 片段中所做的主要事情:

1. 我们将两个 JavaScript 文件添加到我们的 HTML 文档中。
2. 我们使用`type="module"`属性将普通的 JavaScript 文件转换成 ES 模块文件。

**注意**，JavaScript 会自动延迟 ES 模块。所以，你不需要在你的模块的`<script>`元素中使用`defer`属性。

另外，计算机将只执行一个模块一次——不管你用多少个`<script>`标签来引用它。

### 步骤 4: 查看你的应用程序

在任何浏览器中打开你的`index.html`文件，可以看到你的应用程序的当前状态。

![Open your HTML file in your browser - Modules Tutorial](https://www.freecodecamp.org/news/content/images/2022/05/module-tutorial-open-html-file-in-chrome-browser-codesweetly.png)

在 Chrome 浏览器中打开一个 index.html 文件

一旦打开，如果你检查浏览器的控制台，你会看到一些错误信息。

![CORS policy error in the browser's console - Modules Tutorial](https://www.freecodecamp.org/news/content/images/2022/05/module-tutorial-cors-policy-error-codesweetly.png)

检查 Chrome 浏览器的控制台

浏览器抛出了一个 CORS 策略错误，因为 ES 模块只能通过 `http://` 和 `https://` URL 工作，而不是通过 `file://` URL 在本地工作。

换句话说，由于我们的 HTML 文件包含两个 ES 模块，我们需要通过`http://`方案加载文档。

通过`http://`方案加载 HTML 文件的两种典型方法是:

- 通过使用一个本地服务器，或
- 通过使用模块 Bundler

我们将在本文的后面详细讨论模块 Bundler。不过现在，让我们看看如何使用本地服务器，通过`http://` 方案加载`index.html`文件。

#### 如何通过本地服务器运行一个 HTML 文件

下面的步骤将告诉你如何使用 [VS Code](https://code.visualstudio.com/) 本地服务器扩展来运行你的 HTML 文件。

**注意：** 假设你的代码编辑器是 Atom 或 Sublime Text。在这种情况下，请按照下面的链接来学习如何安装本地服务器插件。

- [Atom Live Server](https://atom.io/packages/atom-live-server)
- [Sublime Text Live Server](https://youtu.be/5CinAgQylao)

##### 1\. 将你的项目文件夹添加到 VSCode 的工作区（workspace）

![Add your project's folder to VSCode's workspace](https://www.freecodecamp.org/news/content/images/2022/05/module-tutorial-add-proj-folder-to-vscode-workspace-codesweetly.gif)

将项目文件夹添加到 VSCode 的 workspace

##### 2\. 安装一个本地服务器（Ritwick Dey 的 Live Server）

![Install the Live Server by Ritwick Dey](https://www.freecodecamp.org/news/content/images/2022/05/module-tutorial-install-live-server-codesweetly.png)

安装 VSCode Live Server（它的作者是：Ritwick Dey）

##### 3\. 在代码编辑器中打开你的 HTML 文件

![Open your HTML file in your code editor](https://www.freecodecamp.org/news/content/images/2022/05/module-tutorial-open-html-file-in-code-editor-codesweetly.png)

在 VSCode 编辑器中打开 HTML 文件

##### 4\. 使用 Live Server 在你的默认浏览器中运行 HTML 文件

![Run your HTML File with Live Server - Modules Tutorial](https://www.freecodecamp.org/news/content/images/2022/05/module-tutorial-run-html-file-with-live-server-codesweetly.png)

用 Live Server 打开项目的 HTML 文件

你的应用程序现在应该以 `http://` 方案加载--在浏览器的控制台中没有任何 CORS 错误。

**一些要注意的事情:**

- 假设你没有将你的项目文件夹添加到 VSCode 的工作区（步骤 1）。在这种情况下，Live Server 可能无法正确加载你的文件。
- 每当你对你的 HTML 文件进行任何修改，Live Server 都会自动重新加载你的浏览器。
- 假设你希望停止 Live Server。在这种情况下，在 HTML 编辑页面上点击右键，然后点击 "停止 Live Server"。
- JavaScript 模块默认在严格模式下运行。因此，你必须遵守 JavaScript 的严格语法规则。否则，你的程序可能会出现故障。

所以，现在你已经把你的 JavaScript 文件转换为 ES 模块，你可以开始使用`export`和`import`关键字来分享你的模块的代码。下面我们来讨论一下如何使用。

## How to Export a Module's Code

有两种等效的方法来导出一个模块的项目。

1. 在你的代码前放置一个`export`关键字
2. 创建一个导出语句

让我们在下面讨论这两种方式。

### 如何通过在代码前放置 "export "关键字来共享一个模块的代码

导出一个项目的方法是在你希望与其他模块共享的代码前放置一个`export`关键字。

例如，打开你的`module-1.js`文件，复制下面的代码:

```js
// module-1.js

// Export the "bestClub" variable:
export const bestClub = "Your Club";
```

你可以看到在上面的片段中，我们是如何将`export`关键字放在`const`变量语句之前的。

我们在`const`变量前加上`export`关键字，以告诉计算机与其他请求它的模块共享`bestClub`变量。

**注意：** `export`关键字强调了你希望与其他模块共享的代码。

**另一个例子:**

```js
// Export the "multiply" function:
export function multiply(x, y) {
  return x * y;
}
```

上面的语句指示计算机将`multiply()`导出到需要它的模块中。

现在我们来看看导出模块代码的第二种方式。

### 如何通过创建导出语句来共享一个模块的代码

另一种分享模块代码的方法是使用`export`关键字作为独立的语句。你可以这样做，在你希望共享的代码块(`{...}`)前加上一个单一的`export`关键字，以逗号分隔的名称。

**一个例子:**

```js
// Create a variable named "bestClub":
const bestClub = "Your Club";

// Create a function named "multiply":
function multiply(x, y) {
  return x * y;
}

// Create an array named "fruits":
const fruits = ["Mango", "Apple", "Orange", "Lemon"];

// Export the three statements above:
export { bestClub, multiply, fruits };
```

上面的片段使用了一个`export`语句来表示计算机可以与其他请求任何模块的模块共享`bestClub`、`multiply`和`fruits`。

请记住，`export`只作为一个顶层项目工作。因此，它不会在一个函数中工作，例如。

因此，下面的片段会出现错误，因为我们在函数中使用了`export`关键字。

```js
function wrong() {
  export let bestClub = "Your Club";
  return bestClub;
}
```

**注意:**

- `export`关键字只在模块中起作用，而不是在普通的 JavaScript 程序中。
- JavaScript [hoists](https://www.codesweetly.com/javascript-hoisting) `export`语句。因此，你可以在你的模块中的任何地方定义它们。
- 导出的模块默认以严格模式运行——不管你是否指定了`strict`语句。

现在我们来看看如何导入导出的代码。

## How to Import Exported Code

要导入代码，使用 ES 模块的`import`语句。

例如，打开你的`module-2.js`文件，复制下面的代码:

```js
// module-2.js

import { bestClub } from "./module-1.js";
```

在上面的片段中，我们用`import`语句从`module-1.js`文件中带入`bestClub`变量。

所以，`module-2.js`是一个顶层模块，因为它包含了另一个脚本。

另一方面，`module-1.js`是一个子模块，因为它是一个用于另一个文件的脚本。

**注意:**

- 我们使用`import`语句从其他模块导入项目。
- 在导入时，必须用大括号包住你命名的导出。

请记住，`import` 语句只有在使用 `export` 关键字导出时才能获得另一个模块的代码。

例如，下面的`import`语句将导入`bestClub`、`multiply`和`fruits`，如果它们在`module-1.js`文件中被标记为导出。

```js
// Import three items from the module-1.js file:
import { bestClub, multiply, fruits } from "./module-1.js";
```

假设你没有使用`export`关键字来标记这三个项目为可导出特征。在这种情况下，`import` 语句将抛出一个 `Uncaught SyntaxError`。

**注意:**

- "Module specifier"和 "import specifier"是人们对上述片段中 `"./module-1.js"` 文件路径字符串的其他称呼。
- `"./module-1.js"`模块指定符中的点（`.`）标志意味着 _"同一目录"_ 。换句话说，点标记告诉计算机在当前模块所在的同一文件夹中找到`module-1.js`文件。
- 上面的片段中提到的当前模块就是定义了`import`语句的文件。

导出指定符的点（`.`）语法的一个替代方法是写出整个[相对路径](https://docs.oracle.com/javase/tutorial/essential/io/path.html)到模块的位置。

**Here's an example:**

```js
// Import three items from the module-1.js file:
import { bestClub, multiply, fruits } from "/codesweetly/blog/notes/modular-javascript/es-modules/module-1.js";
```

你可以看到上面的`import`语句有多长。我们经常使用点语法，因为它的长度短且简便。

假设你选择使用点状语法。在这种情况下，请记住，一些模块系统（如 Node.js 和模块 bundlers）允许你省略点号和文件扩展名，像这样:

```js
// Import three items from the module-1.js file:
import { bestClub, multiply, fruits } from "module-1";
```

然而，其他模块系统，如 ES 模块，不允许省略点号和文件扩展名。

**注意:**

- 一个没有点标记和文件扩展名的模块指定器被称为 "裸（bare）" 模块指定器。
- 一个模块的导入项是导出功能的只读视图。因此，你只能在导出它的模块内修改代码，而不是在导入它的模块内。
- JavaScript 导入一个模块的代码是实时绑定的。所以，假设你在导出模块中更新了导入代码的值。在这种情况下，你的变化也会反映在导入模块中。

现在我们来讨论如何使用导入的代码。

## How to Use a Module's Imported Code

一旦你导入了你的代码，你就可以像在你所导入的模块中定义的那样使用它。

**这是一个例子:**

```js
// module-2.js

import { bestClub } from "./module-1.js";

const myBestClub = bestClub + " " + "is my best club.";

console.log(myBestClub);
```

[**Try it on StackBlitz**](https://stackblitz.com/edit/web-platform-ka4gdj?devtoolsheight=33&file=module-2.js)

**注意:**

- `import`关键字只在模块中起作用，而不是在普通的 JavaScript 程序中。
- 一个导入的模块的功能在全局[范围](https://www.codesweetly.com/javascript-scope)中是不可用的。因此，你只能在你导入的脚本中访问导入的项目——而不是在其他地方，如 JavaScript 控制台。
- JavaScript [hoists](https://www.codesweetly.com/javascript-hoisting) `import`语句。所以，你可以在你的模块中的任何地方定义它们。
- 导入的模块默认以严格模式运行--不管你是否指定了`strict`语句。

所以，现在我们知道了如何使用 ES 模块，让我们来讨论如何重命名你想导出（或导入）的代码。

## How to Rename Exports and Imports in ES Modules

假设你希望重命名你正在导出（或导入）的代码。在这种情况下，使用`as`关键字。

**一个例子:**

```js
// module-1.js

// Create a variable named "bestClub":
const bestClub = "Your Club";

// Export the bestClub variable as "favoriteTeam":
export { bestClub as favoriteTeam };
```

在上面的片段中，我们告诉计算机将 `bestClub` 变量导出为 `favoriteTeam`。

因此，当导入该变量时，你将使用`favoriteTeam`的名称，而不是`bestClub`。

**下面的例子:**

```js
// module-2.js

import { favoriteTeam } from "./module-1.js";

const myBestClub = favoriteTeam + " " + "is my best club.";

console.log(myBestClub);
```

[**在 StackBlitz 上尝试**](https://stackblitz.com/edit/web-platform-dltrvv?devtoolsheight=33&file=module-2.js)

在上面的例子中，我们在导出时重命名了`bestClub`这个变量。然而，你也可以在导入时重命名它。

**一个例子:**

```js
// module-1.js

// Create a variable named "bestClub":
const bestClub = "Your Club";

// Export the bestClub variable:
export { bestClub };
```

```js
// module-2.js

import { bestClub as favoriteTeam } from "./module-1.js";

const myBestClub = favoriteTeam + " " + "is my best club.";

console.log(myBestClub);
```

[**在 StackBlitz 上尝试**](https://stackblitz.com/edit/web-platform-qrnt6y?devtoolsheight=33&file=module-2.js)

是在导出还是导入时重命名你的代码，这完全取决于你的选择。

然而，许多开发者倾向于在导入时重命名，因为你并不总是能控制代码的源文件，尤其是从第三方模块导入时。

## Why Rename a Module's Code

重命名可以帮助防止浏览器因名称冲突而出现错误。例如，考虑这些片段:

```js
// module-1.js

// Create a variable named "bestClub":
const bestClub = "Your Club";

// Export the bestClub variable:
export { bestClub };
```

```js
// module-2.js

import { bestClub } from "./module-1.js";

const bestClub = bestClub + " " + "is my best club.";

console.log(bestClub);
```

[**在 StackBlitz 上尝试**](https://stackblitz.com/edit/web-platform-vvcy2d?devtoolsheight=33&file=module-2.js)

当你运行上面的片段时，浏览器会抛出一个类似以下的错误:

```js
"SyntaxError: Identifier 'bestClub' has already been declared"
```

浏览器出现了错误，因为导入的代码名称与`module-2.js`的`bestClub`变量冲突。

然而，你可以通过简单地重命名导入的代码来纠正这个错误，就像这样:

```js
// module-2.js

import { bestClub as favoriteTeam } from "./module-1.js";

const bestClub = favoriteTeam + " " + "is my best club.";

console.log(bestClub);
```

请记住，你也可以重命名多个导出。让我们看看下面的方法。

## How to Rename Multiple Exports in an ES Module

你可以通过用逗号分隔每个`as`语句来重命名多个出口。

**Here's an example:**

```js
// module-1.js

const bestClub = "Your Club";
const fruits = ["Grape", "Apple", "Pineapple", "Lemon"];

function multiply(x, y) {
  return x * y;
}

// Export the three statements above:
export { 
  bestClub as favoriteTeam, 
  fruits as crops, 
  multiply as product 
};
```

```js
// module-2.js

import { favoriteTeam, crops, product } from "./module-1.js";

const bestClub = `I bought ${product(2, 11)} ${crops[2]}s at ${favoriteTeam}.`;

console.log(bestClub);
```

**[在 StackBlitz 上尝试](https://stackblitz.com/edit/web-platform-ir5f1h?devtoolsheight=33&file=module-1.js)**

你也可以重命名多个导出。让我们来看看如何。

## How to Rename Multiple Imports in an ES Module

你可以通过用逗号分隔每个`as`语句来重命名多个导入。

**这是一个例子:**

```js
// module-1.js

const bestClub = "Your Club";
const fruits = ["Grape", "Apple", "Pineapple", "Lemon"];
function multiply(x, y) {
  return x * y;
}

// Export the three statements above:
export { bestClub, fruits, multiply };
```

```js
// module-2.js

import { 
  bestClub as favoriteTeam, 
  fruits as crops, 
  multiply as product 
} from "./module-1.js";

const bestClub = `I bought ${product(2, 11)} ${crops[2]}s at ${favoriteTeam}.`;

console.log(bestClub);
```

[**在 StackBlitz 上尝试**](https://stackblitz.com/edit/web-platform-yinyru?devtoolsheight=33&file=module-2.js)

假设你希望从`module-1.js`中导入所有可导出的内容，而不指定每个导入的名称。你怎样才能做到这一点呢？让我们来了解一下。

## How to Import All Exportable Items from an ES Module in One Go

假设你希望从一个特定的模块导入所有可导出的项目，而不需要指定每个导入的名称。在这种情况下，使用 `import * as` 语法，通过一个模块对象导入这些项目。

**一个例子:**

```js
// Import all exportable features from the "countries.js" module:
import * as allCountries from "./countries.js";
```

上面的语句指示计算机导入`./countries.js`模块的所有可导出内容，并将导入的内容封装在一个名为`allCountries`的模块对象中。

导入后，你可以像以前一样使用导入的项目。然而，你现在需要通过模块对象的名称来访问它们。

**一个例子:**

```js
// module-1.js

const bestClub = "Your Club";
const fruits = ["Grape", "Apple", "Pineapple", "Lemon"];
function multiply(x, y) {
  return x * y;
}

// Export the three statements above:
export { bestClub, fruits, multiply };
```

```js
// module-2.js

import * as firstModule from "./module-1.js";

const bestClub = `I bought ${firstModule.multiply(2, 11)} ${firstModule.fruits[2]}s at ${firstModule.bestClub}.`;

console.log(bestClub);
```

[**在 StackBlitz 上尝试**](https://stackblitz.com/edit/web-platform-s5bug2?devtoolsheight=33&file=module-2.js)

那么，如果你喜欢匿名导出一个模块的内容怎么办？让我们来讨论一下你可以使用的技术。

## How to Export Anonymously to an ES Module

到目前为止，我们通过明确指出我们希望分享的特定代码的名称来导出项目——例如，`export  { bestClub }`。

这种导出技术被称为 **named export（命名的导出）**。

你也可以通过使用 **default export（默认导出）** 技术进行匿名导出。但究竟什么是默认导出？让我们来了解一下。

### What Exactly Is a Default Export in ES Modules

**默认导出** 是开发人员用来匿名（无名）导出代码的一种技术。

你可以通过在你希望导出的代码前加上关键字`default`来实现默认导出。通过这样做，计算机将共享该代码作为默认导出。

换句话说，代码将以特殊的名字`default`导出，而不是它原来的名字（如果它有一个名字）。

因此，在代码的导入过程中，你可以选择以`default`的名字、一个自定义的名字或没有任何名字来导入它。

**这是一个例子:**

```js
// module-1.js

const bestClub = "Your Club";

// Export the bestClub variable as a default export:
export default bestClub;
```

我们在上面的默认导出语句中没有使用大括号，因为一个模块中只能有一个默认导出。

另外，你也可以这样改写上面的代码:

```js
// module-1.js

// Export the string value as a default export:
export default "Your Club";
```

请记住，你可以使用默认导出技术来共享一个函数、变量、字符串、类或对象字面。

但是，你不能在 `var`、`let` 或 `const` 关键字前加上 `export default` 关键字。

换句话说，下面的片段将抛出一个 `SyntaxError`。

```js
export default const bestClub = "Your Club";
```

现在我们来讨论如何导入一个默认导出（export default）。

### How to Import a Default Export into an ES Module

有两种等效的方法来导入一个默认导出（export default）:

- 使用`default as`语法
- 只指定导入代码的名称

让我们来讨论这两种导入技术。

#### How to use the `default as` syntax to import a default export

导入默认出口的一种方法是使用`default as`语法，像这样:

```js
import { default as newName } from "./module-relative-path.js";
```

**这是一个例子:**

```js
// module-1.js

// Export the string value as a default export:
export default "Your Club";
```

```js
// module-2.js

import { default as favoriteTeam } from "./module-1.js";

const bestClub = favoriteTeam + " " + "is my best club.";

console.log(bestClub);
```

[**在 StackBlitz 上尝试**](https://stackblitz.com/edit/web-platform-zcyvst?devtoolsheight=33&file=module-2.js)

注意，我们不需要指定我们从`module-1.js`文件中导入的代码的名称。相反，我们使用`default`关键字来匿名导入代码。

之后，我们将导入的代码重命名为`favoriteTeam`。

现在让我们看看导入默认导出的第二种方式。

#### How to import a default export by specifying the imported code's name only

另一种导入默认导出的方法是忽略大括号（`{...}`）、`default`关键字和`as`关键字。

取而代之的是，简单地指定你希望用来引用导入的代码的名称，像这样:

```js
import newName from "./module-relative-path.js";
```

**一个例子:**

```js
// module-1.js

// Export the string value as a default export:
export default "Your Club";
```

```js
// module-2.js

import favoriteTeam from "./module-1.js";

const bestClub = favoriteTeam + " " + "is my best club.";

console.log(bestClub);
```

[**在 StackBlitz 上尝试**](https://stackblitz.com/edit/web-platform-rgrlh7?devtoolsheight=33&file=module-2.js)

你可以看到，上述缩短的导入技术比之前的方案更整洁。

**注意:**

- `export default`语句使一个 JavaScript 模块有可能与现有的 CommonJS 和 AMD 模块系统进行插接（可靠的工作）。
- 请参阅 [默认导出](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)  _ES6 In Depth Modules_  部分。来了解更多关于插接的信息。

在我们结束对 ES 模块的讨论之前，你应该知道你可以使用一个聚合器文件来整理你的项目的`import`语句。

但究竟什么是聚合器文件，我听到你问？让我们在下面找出答案。

## What Exactly Is an Aggregator File

**聚合器文件(aggregator file)**是一个专门用来导入和重新导出你从其他模块导出的项目的脚本。

换句话说，与其让你的[顶级模块](https://www.codesweetly.com/web-tech-glossary#top-level-module-javascript)充斥着来自不同文件的多个导入语句，你可以创建一个单一的父脚本（聚合器文件 aggregator file）。

这个父脚本的唯一目的是导入和重新导出其他模块的项目。

然后，在你的顶层模块中，你可以简单地从聚合器文件中导入任何需要的代码，而不是从许多其他脚本中导入。

通过这样做，你将使你的顶层模块更加整洁。

那么，这些到底是什么意思呢？让我们通过一个小项目来看看。

## Project: How to Use an Aggregator File

按照下面的步骤来学习如何使用聚合器文件(aggregator file)。

### Step 1: Create a project directory

创建一个项目文件夹——本项目的 HTML 和模块文件将存放在这里。

### Step 2: Create your code files

在你的项目文件夹中创建以下文件:

1. `index.html`
2. `index.js`
3. `preferences.js`
4. `calculation.js`
5. `bio.js`

### Step 3: Add the modules to your HTML document

打开你的`index.html`文件并复制以下代码:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES Module - CodeSweetly</title>
  </head>
  <body>
    <h1>How to use an aggregator file - ES Module Tutorial</h1>
    <h2>Check the console</h2>

    <script type="module" src="index.js"></script>
    <script type="module" src="preferences.js"></script>
    <script type="module" src="calculation.js"></script>
    <script type="module" src="bio.js"></script>
  </body>
</html>
```

以下是我们在上面的 HTML 片段中做的主要事情:

1. 我们把这四个 JavaScript 文件添加到我们的 HTML 文档中。
2. 我们使用`type="module"`属性将普通的 JavaScript 文件转换为 ES 模块文件。

### Step 4: Export items from your `preference` module

打开你的`preferences.js`模块，从里面导出一些项目，像这样:

```js
const bestFruits = ["Grape", "Apple", "Pineapple", "Lemon"];
const bestColor = "White";
const bestNumber = 111;
const bestClub = "Your Club";
const bestTime = "Now";

export { bestClub, bestFruits };
```

### Step 5: Export items from your `calculation` module

打开你的`calculation.js`模块，从里面导出一些项目，像这样:

```js
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

export function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}
```

### Step 6: Export items from your `bio` module

打开你的`bio.js`模块，从里面导出一些项目，像这样:

```js
const aboutMe = {
  firstName: "Oluwatobi",
  lastName: "Sofela", 
  companyName: "CodeSweetly",
  profession: "Web Developer",
  gender: "Male",
};

export default aboutMe;
```

### Step 7: Import the exported features

要把导出的项目导入你的顶层模块，你有两个选择:

1. 直接从导出的模块导入到你的顶层脚本。
2. 从聚合器文件中导入到你的顶层模块。

让我们来看看这两个选项的区别。

#### Import directly from the exporting modules to your top-level script

导入代码的一种方法是直接从导出的脚本中导入你的顶层模块。

例如，打开你的`index.js`文件，导入`preferences.js`、`calculation.js`和`bio.js`模块的导出内容，像这样:

```js
// index.js

import { bestFruits } from "./preferences.js";
import { multiply } from "./calculation.js";
import aboutMe from "./bio.js";

const news = `All ${aboutMe.companyName}'s staff gave Tom ${multiply(7, 129)} ${bestFruits[2]}s.`;

console.log(news);
```

[**在 StackBlitz 上尝试**](https://stackblitz.com/edit/web-platform-dqmd1u?devtoolsheight=33&file=index.js)

你可以看到，我们直接从三个导出的脚本中导入项目到`index.js`模块。

上面的导入技术效果不错。然而，一个更干净的选择是使用一个聚合器文件。让我们来看看如何。

#### Import from an aggregator file to your top-level module

另一种引入代码的方法是将其从聚合器文件导入你的顶级模块。

按照下面的步骤，看看你如何创建和使用一个聚合器文件。

##### 1\. Create the aggregator file

你可以将该文件命名为`aggregator.js`或任何你喜欢的其他名称。

![Create an aggregator file - Modules Tutorial](https://www.freecodecamp.org/news/content/images/2022/05/module-tutorial-aggregator-file-highlight-codesweetly.png)

该项目汇总文件的一个亮点

##### 2\. Add the aggregator script to your HTML file

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES Module - CodeSweetly</title>
  </head>
  <body>
    <h1>How to use an aggregator file - ES Module Tutorial</h1>
    <h2>Check the console</h2>

    <script type="module" src="index.js"></script>
    <script type="module" src="preferences.js"></script>
    <script type="module" src="calculation.js"></script>
    <script type="module" src="bio.js"></script>
    <script type="module" src="aggregator.js"></script>
  </body>
</html>
```

注意以下几点:

1. `index.js`是[顶级模块](https://www.codesweetly.com/web-tech-glossary#top-level-module-javascript)，因为它是我们导入和使用`preferences.js`、`calculation.js`和`bio.js`的文件。
2. `preferences.js`, `calculation.js`, 和`bio.js`是[子模块](https://www.codesweetly.com/web-tech-glossary#submodule-javascript)，因为它们是我们导入顶级模块的文件。
3. `aggregator.js`是[父模块](https://www.codesweetly.com/web-tech-glossary#parent-module-es-module)，因为它是聚合和重新输出三个子模块的脚本。

从技术上讲，你可以在你的项目的 HTML 文件中只表示顶级模块，像这样:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES Module - CodeSweetly</title>
  </head>
  <body>
    <h1>How to use an aggregator file - ES Module Tutorial</h1>
    <h2>Check the console</h2>

    <script type="module" src="index.js"></script>
  </body>
</html>
```

这样做，你可以避免用子模块和父模块使你的 HTML 页面杂乱无章。

现在让我们看看如何使用聚合器模块。

##### 3\. Use the aggregator module to aggregate the submodules

下面是如何使用聚合器模块来导入和重新导出你的项目里面的导出项目:

```js
// aggregator.js

import { bestFruits } from "./preferences.js";
import { multiply } from "./calculation.js";
import aboutMe from "./bio.js";

export { bestFruits, multiply, aboutMe };
```

你可以看到，我们只用聚合器文件来导入和重新导出我们项目的导出功能。

上面的`import`/`export`语句的简短方法是这样的:

```js
// aggregator.js

export { bestFruits } from "./preferences.js";
export { multiply } from "./calculation.js";
export { default as aboutMe } from "./bio.js";
```

请记住，以下语法是无效的:

```js
export aboutMe from "./bio.js";
```

换句话说，每当你使用 "export...from "语法来重新导出一个默认的导出，确保你重新命名重新导出，像这样:

```js
export { default as aboutMe } from "./bio.js";
```

现在让我们看看如何从一个聚合器文件中导入重新输出的功能。

##### 4\. Import your exports from the aggregator file

一旦你把所有的子模块聚合到聚合器模块中，去你的顶层脚本（本例中为`index.js`），导入导出的项目。

**这是一个例子:**

```js
// index.js

import { bestFruits, multiply, aboutMe } from "./aggregator.js";

const news = `All ${aboutMe.companyName}'s staff gave Tom ${multiply(7, 129)} ${bestFruits[2]}s.`;

console.log(news);
```

[**在 StackBlitz 上尝试**](https://stackblitz.com/edit/web-platform-fttqqb?devtoolsheight=33&file=index.js)

你看，就像变魔术一样，我们用一句话代替了三个 `import` 语句,我们的代码简洁了!

使用一个聚合器文件来整理你的项目的导出，有助于分离关注点，使你的顶层模块更加整洁。

到目前为止，我们一直使用静态的`import`语法来指示计算机在加载时评估我们导入的模块的代码。

但假设你喜欢有条件地或按需地加载你的模块。在这种情况下，你可以使用动态`import()`语法。让我们看看它到底是如何工作的，如下。

## How to Use the `import()` Syntax to Load a Module Dynamically

要想有条件地或按需地加载你的模块，可以使用`import()`语法，比如说:

```js
import("./module/relative-path.js").then(function (module) { });
```

`import()`语法主要做两件事:

1. 它加载它的模块指定参数（本例中为"./module/relative-path.js"）。
2. 它返回一个 promise 对象，该 promise 对象解析一个包含 import 指定的导出的模块对象。

因此，由于`import()`语法返回一个 promise，你也可以用 `await`关键字。

**这是一个例子:**

```js
const module = await import("./module/relative-path.js");
```

**注意：** 尽管`import()`类似于一个函数调用，但它不是。相反，`import()`代码是一种特殊的 ES 模块语法，使用括号（类似于[`super()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)语法）。

因此，你不能[call](https://www.codesweetly.com/call-apply-bind-javascript/#what-is-the-call-method)、[apply](https://www.codesweetly.com/call-apply-bind-javascript/#what-is-the-apply-method)或[bind](https://www.codesweetly.com/call-apply-bind-javascript/#what-is-the-bind-method)`import()`语法，因为它没有继承`Function.prototype`的属性。

为了准确了解`import()`在实践中的作用，让我们按照下面的步骤来更新我们之前的项目。

### 1\. Update your HTML file

打开你的`index.html`文件，做如下操作:

1. 将你的 `<h1>`内容更新为 "The Latest News".
2. 用一个空的`<p>`元素代替`<h2>`元素。
3. 创建一个`<button>`元素。

换句话说，你的`index.html`文件应该看起来像这样:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES Module - CodeSweetly</title>
  </head>
  <body>
    <h1>The Latest News</h1>
    <p id="news-paragraph"></p>
    <button id="news-button">Get the News</button>

    <script type="module" src="index.js"></script>
  </body>
</html>
```

### 2\. Update your `index.js` module

打开你的`index.js`文件并复制以下代码:

```js
// index.js

const paragraphElement = document.getElementById("news-paragraph");
const buttonElement = document.getElementById("news-button");

async function displayNews() {
  let news = null;
  // highlight-next-line
  const aggregatorModule = await import("./aggregator.js");
 
  news = `All ${aggregatorModule.aboutMe.companyName}'s staff gave Tom ${aggregatorModule.multiply(7, 129)} ${aggregatorModule.bestFruits[2]}s.`;

  paragraphElement.innerText = news;
}

buttonElement.addEventListener("click", displayNews);
```

[**在 StackBlitz 上尝试**](https://stackblitz.com/edit/web-platform-pw3xpq?file=index.js)

你可以看到我们是如何使用`import()`方法来按需加载聚合器模块的（当用户点击按钮时）——而不是在前期。

尽管动态导入可以提高你的程序的初始加载性能，但最好只在需要时使用。

**注意:** `import()`方法不要求它的[参数](https://www.codesweetly.com/javascript-arguments)有`type="module"` 的`<script>`。因此，你可以在一个普通的 JavaScript 文件中使用它。

现在，假设你想获得当前模块的[metadata](https://en.wikipedia.org/wiki/Metadata)。在这种情况下，你可以使用`import.meta`语法。

## What Exactly Is `import.meta` in ES Modules

`import.meta`代码是一个包含你当前模块信息的对象。

**这是一个例子:**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES Module - CodeSweetly</title>
  </head>
  <body>
    <h1>About import.meta</h1>
    <h2>Check the console ⬇⬇⬇</h2>

    <script type="module">
      console.log(import.meta);
      console.log(import.meta.url);
    </script>
  </body>
</html>
```

[**在 StackBlitz 上尝试**](https://stackblitz.com/edit/web-platform-8ky5vd?devtoolsheight=33&file=index.html)

上面片段中的`import.meta`代码将返回一些关于它被使用的模块的信息。

## Quick Review of Modules So Far

我们已经了解到，JavaScript 模块只是一个具有附加功能的文件，可以通过 Yarn 和 NPM 等包管理器与项目中的其他模块——或者[与世界](https://www.codesweetly.com/package-manager-explained/#how-to-publish-your-project-to-the-npm-registry)分享其代码。

我们还使用了一个本地服务器，通过`http://`方案加载我们的 HTML 文档——这使得浏览器加载我们的应用程序时不会抛出任何 CORS 错误。

然而，live servers 只限于本地开发和测试目的

换句话说，你不能在生产中使用 live servers 通过 `http://` 方案提供你的 HTML 文档。相反，你最好使用一个 _module bundler_。

但是，我听到你问，_module bundler_ 到底是什么？ 下面就一起来了解一下吧。

## What Is a Module Bundler

**module bundler** 是开发人员用来将应用的 [modules](#what-exactly-is-a-javascript-module) 和依赖项打包到一个与浏览器兼容的 JavaScript 文件中的工具。

## Why Do You Need a Module Bundler

Module bundlers 允许浏览器访问您在 `require()` 或 `import` 语句中指定的文件。

换句话说，假设一个浏览器运行一个 JavaScript 文件，里面有`require("./node_module/test/sample/app.js")`语句。在这种情况下，浏览器会抛出一个错误，说`Uncaught ReferenceError: require is not defined`.

计算机会抛出这样的错误，因为浏览器不能访问 JavaScript 程序中指定的文件。

然而，你可以使用 module bundler 来创建一个新的 JavaScript 文件，其中包含浏览器可以阅读的代码。

## How Does a Module Bundler Work

一个 module bundler 的打包工作是这样的:

### First, it creates an output script file

module bundler 将首先在你的项目的`dist`文件夹中创建一个 "output script file"。

**注意:**

- bundler 使用  _output script file_ 来保存打包好的文件。
- **output file** 是一个条目文件的编译版本。换句话说，一个输出脚本文件（output file）是指 bundler 为你的项目自动生成的 JavaScript 文件。
- **entry point** 是一个文件，bundler 用它来开始建立一个[依赖图](https://webpack.js.org/concepts/dependency-graph/)，它需要将项目的所有模块合并成一个与浏览器兼容的模块。
- 入口点（entry point）是构建步骤中最关键的文件，它（直接或间接）链接到项目中的其他所有模块。

### Next, the module bundler compiles your code

其次，bundler 将检查构建步骤的入口点是否出现了一些`require()`或`import`语句。

假设 module bundler 发现一个`require()`或`import`语句。在这种情况下，捆绑器将把语句中指定的每个依赖关系的内容与入口点的内容进行编译（合并）。

**注意:**

- **构建步骤** 是一个过程，通过这个过程，module bundler 构建了一个新的浏览器兼容的 JavaScript 文件。
- 构建步骤的输出文件有时被称为**发布代码**。换句话说，发布代码是经过压缩和优化的源代码版本。
- **dependency**是你的脚本需要的一个文件，以便按计划工作。因此，在`import { variable } from "./path/to/module.js"`中，`module.js`是依赖文件，因为它是我们的应用程序所依赖的一个脚本，可以按照设计的方式运行。

现在让我们来讨论 module bundler 做的最后一件事。

### Finally, it saves the compiled code

模块捆绑器的最后一步是将编译后的代码保存到 [step 1](#first-it-creates-an-output-script-file) 的输出脚本文件（output）中。

因此，步骤 1 的脚本文件（构建步骤的输出）将包含入口点（entry point）及其依赖的内容，但没有`require()`或`import`语句。

**注意：**模块捆绑器的典型例子是[webpack](https://webpack.js.org)、[browserify](http://browserify.org/)、[rollup](https://rollupjs.org/guide/en/) 和[parcel](https://parceljs.org/)。

所以，现在我们知道了模块捆绑器的工作原理，让我们来讨论如何使用一个流行的模块 _Webpack_。

## How to Use Webpack

按照下面的步骤来学习如何使用 Webpack 将你的项目的 JavaScript 文件和它的依赖关系打包到一个的输出脚本文件（output script file）。

### Step 1: Create a project directory

创建一个项目文件夹——这个项目的文件将存放在这里。

### Step 2: Go to the project's root folder

使用命令行，进入到你项目的根目录，像这样:

```bash
cd path/to/project/root-directory
```

**注意：** **根目录** 是一个包含项目的所有其他文件和子文件夹的文件夹。

换句话说，你在第 1 步中创建的文件夹是你的根目录，因为它将容纳有关这个项目的一切。

### Step 3: Create a `package.json` file

在你项目的根目录下创建一个[package.json](https://www.codesweetly.com/package-json-file-explained)文件，像这样:

```bash
npm init -y
```

或者，你可以像这样使用 Yarn:

```bash
yarn init -y
```

**注意:**

- `-y`标志指示 NPM（或 Yarn）[创建一个默认的`package.json`文件](https://www.codesweetly.com/package-json-file-explained/#how-to-create-a-default-packagejson-file)。
- 你必须在你的系统上安装 Node 和 NPM，这样上面的初始化代码才能发挥作用。你可以从[Node.js](https://nodejs.org/en/)网站上安装最新的 LTS 版本来获得这两者。

### Step 4: Install the Webpack module bundler

将`webpack`和`webpack-cli`作为[开发依赖](https://www.codesweetly.com/package-manager-explained/#npm-installation-command)库安装在你的项目中:

```bash
npm install webpack webpack-cli --save-dev
```

或者，如果你的软件包管理器是 Yarn，运行:

```bash
yarn add webpack webpack-cli --dev
```

**注意:** 安装 `webpack-cli`包后，可以在命令行上运行 webpack。

### Step 5: Create your project's directories

创建一个 "source"文件夹（`./src`）和一个 "distribution" 代码文件夹（`./dist`）。

```bash
mkdir src dist
```

**注意:** 虽然 `src`和 `dist` 是源码和发行码文件夹的典型名称，但你可以自由选择任何你喜欢的其他名称。

### Step 6: Create your source code files

在新创建的源代码目录(即 src)中创建以下文件:

1. `index.html`
2. `index.js`

**注意:**

- Webpack 推荐将[源代码](https://www.codesweetly.com/web-tech-glossary#source-code)保存在`./src`目录下，将[发布代码](https://www.codesweetly.com/web-tech-glossary#distribution-code)保存在`./dist`目录下。
- 除了 `require()`、`import` 和 `export` 语句外，Webpack 不会改变任何其他代码。

### Step 7: Add the JavaScript file to your HTML document

打开你的`index.html`文件，复制下面的代码:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES Module - CodeSweetly</title>
  </head>
  <body id="body">
    <h1>Module Bundler Tutorial</h1>
    <button id="button">Click Me to Change Color!</button>

    <script src="./index.js"></script>
  </body>
</html>
```

以下是我们在上面的 HTML 片段中做的主要事情:

1. 我们创建 一个`<h1>` 和一个 `<button>` 元素。
2. 我们将第 6 步的 JavaScript 文件添加到我们的 HTML 文档中。

**注意：** 当使用 bundler 时，你不需要在你的项目的`<script>`元素中添加`type="module"`属性。相反，捆绑器将自动把所有包含`import`和`export`语句的脚本视为模块（modules）。

### Step 8: Install some dependencies

使用你的文本编辑器，[在本地安装你项目的依赖项](https://www.codesweetly.com/package-manager-explained/#local-package-installation)。

例如，你可以这样安装 [randomColor](https://www.npmjs.com/package/randomcolor)包作为本地依赖。:

```bash
npm install randomcolor --save
```

**注意:**

- 使用 `npm install package-name --save` 命令来处理你的应用程序在生产环境中需要的依赖。
- 使用`npm install package-name --save-dev`命令来获取你的应用程序只在本地开发需要的依赖项。

另外，你也可以像这样使用 Yarn:

```bash
yarn add randomcolor
```

**注意:**  使用`yarn add package-name --dev`命令来获取你的应用程序只在本地开发和测试中需要的依赖。

### Step 9: Import your dependencies

用`require()`方法或`import`语句将你的依赖关系导入你的 JavaScript 源代码。

例如，这里是如何使用`import`语句将第 8 步的`randomColor`依赖关系导入你的`index.js`脚本文件:

```js
// index.js

import randomColor from "randomcolor";
```

与上面的片段的`require()`方法等价性是这样的:

```js
// index.js

const randomColor = require("randomcolor");
```

**注意:**

- `import`语句是 JavaScript 导入模块的原生方式。
- `require()`函数是在脚本中导入模块的 CommonJS 语法。
- 另一种导入项目依赖项的方法是用 HTML 文档的`<script>`标签隐含地加载它们。然而，这种技术会污染全局范围。因此，使用`import`或`require()`语法会更好。

### Step 10: Use the dependencies

使用你在第 9 步中导入的依赖项来做你想做的事。

例如，你可以这样使用`randomColor`依赖关系:

```js
// index.js

import randomColor from "randomcolor";

const bodyElement = document.getElementById("body");
const buttonElement = document.getElementById("button");

function changeBodyColor() {
  const color = randomColor();
  bodyElement.style.backgroundColor = color;
}

buttonElement.addEventListener("click", changeBodyColor);
```

在上面的片段中，我们告诉计算机，每当用户点击 `buttonElement` 时，它应该:

1. 调用 `changeBodyColor` 函数。
2. 用`randomColor`的[invocation](https://www.codesweetly.com/declaration-initialization-invocation-in-programming/#what-does-invocation-mean-in-programming)输出来初始化该函数的`color`变量。
3. 使用`color`变量的值来改变 `bodyElement`的背景颜色。

现在让我们把我们的入口点（`index.js`文件）和`randomColor`依赖关系打包在一个 JavaScript 文件中。

### Step 11: Start the build step

使用你的终端，通过运行 webpack 来创建你的 bundle，像这样:

```bash
npx webpack
```

运行上述命令后，webpack 将做以下工作:

1. 它将使用你的`index.js`作为其入口点。
2. 它将在你的项目的`dist`文件夹中创建一个 bundle（输出文件），包含入口点的内容和它的依赖关系。

**Note:**

- 默认情况下，Webpack 将生成一个`main.js`文件——它将保存在你在步骤 5 中创建的分发文件夹（dist）中。然而，你可以通过创建一个配置文件来改变默认设置，Webpack 将自动使用该文件。我们将[稍后](#what-exactly-is-webpack-s-configuration-file)在本指南中讨论创建和使用一个配置文件。
- [NPX](https://nodejs.dev/learn/the-npx-nodejs-package-runner)是 Node 的包运行器，它将自动找到并执行 Webpack。

我们的下一步是告诉浏览器使用新创建的 bundle。让我们在下面做这件事。

### Step 12: Refer browsers to the newly created bundle

所以，现在你已经创建了一个与浏览器兼容的 bundle 文件，你需要告诉浏览器使用它而不是`index.js`源代码文件。

因此，到你的 HTML 文件中，用 Webpack 的分发 bundle 文件替代对你的 JavaScript 源代码的引用。

例如，不要在你的 HTML 文件的`<script>`标签中使用`"./index.js"`，而应该使用`"./dist/main.js"`，像这样:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES Module - CodeSweetly</title>
  </head>
  <body id="body">
    <h1>Module Bundler Tutorial</h1>
    <button id="button">Click Me to Change Color!</button>

    <script src="../dist/main.js"></script>
  </body>
</html>
```

现在让我们看看我们的应用程序！

### Step 13: Check your app in the browser

在浏览器中打开你的 HTML 文件，确认浏览器可以成功读取你的应用程序和它的依赖关系。

记住，你在[步骤 6](#step-6-create-your-source-code-files)中手动创建了你的 HTML 文件。不过，Webpack 也可以为你自动生成一个。让我们来看看怎么做。

## How to Make Webpack Auto-Generate Your App's HTML File

假设你的应用程序现在输出多个 bundles，或者你已经开始[使用哈希值](https://www.codesweetly.com/javascript-module-bundler#substitutions-technique-3-content-hash)创建唯一的文件名。在这种情况下，你可能会发现手动管理你的 HTML 文件越来越困难。

因此，Webpack 允许你使用[HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) 插件来自动生成和管理你项目的`index.html`文件。

按照下面的步骤来学习如何使用`HtmlWebpackPlugin`来自动生成和管理你项目的 HTML 文件。

### Step 1: Install `HtmlWebpackPlugin`

像这样安装 `HtmlWebpackPlugin`:

```bash
npm install html-webpack-plugin --save-dev
```

或者，如果你的软件包管理器是 Yarn，使用:

```bash
yarn add html-webpack-plugin --dev
```

### Step 2: Create a configuration file

在你项目的[根文件夹](https://www.codesweetly.com/web-tech-glossary#root-directory)中创建一个 Webpack 配置文件，像这样:

```bash
touch webpack.config.js
```

### Step 3: Add the plugin to webpack's configuration

打开你的`webpack.config.js`文件，添加`HtmlWebpackPlugin`插件，像这样:

```js
// webpack.config.js

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = { 
  plugins: [new HtmlWebpackPlugin()] 
}
```

**注意：** 我们将在本指南中讨论如何使用配置文件[稍后](#what-exactly-is-webpack-s-configuration-file)。

### Step 4: Run the build step

当你安装并添加`HtmlWebpackPlug`到你的项目中，重新编译你的模块，像这样:

```bash
npx webpack
```

运行构建步骤后，`HtmlWebpackPlugin`将做以下工作:

1. 它将自动生成一个新的`index.html`文件。
2. 该插件将自动插入 Webpack 生成的 bundles 文件到新创建的 HTML 文件中。
3. 它将自动将新的 HTML 文件保存在你的项目的分发文件夹中。

换句话说，在运行构建后，`new HtmlWebpackPlugin()`的调用（在配置文件中）将自动生成一个`dist/index.html`文件，内容如下:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Webpack App</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <script defer src="main.js"></script>
  </head>
  <body>
  </body>
</html>
```

注意 由`HtmlWebpackPlugin`生成的 HTML 文档不包含[你的源文件](#step-7-add-thejavascript-file-your-html-document)的`<h1>`和`<button>`元素。

换句话说，假设你在浏览器中打开`dist/index.html`文件。在这种情况下，浏览器会打开一个空的 HTML 页面。

`HtmlWebpackPlugin`省略了源代码的`<body>`元素的内容，因为它没有从原文件中创建新文件。相反，它自动创建了一个全新的 HTML 页面，只包括 Webpack 生成的 bundles 文件。

然而，你也可以让 `HtmlWebpackPlugin`使用你的源文件作为模板。让我们看看下面的方法

## How to Make `HtmlWebpackPlugin` Use Your Source File as a Template to Auto-Generate a New HTML Page

要使`HtmlWebpackPlugin`使用你的 HTML 源文件作为模板，请执行以下操作:

### 1\. Update your HTML file

打开你的`index.html` _源代码_ 文件，删除你[之前使用的](#step-12-refer-browsers-to-the newly-created-bundle)的`<script>`标签，以引用 Webpack 的分发 bundle 。

因此，你的 HTML 源代码应该看起来像这样:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES Module - CodeSweetly</title>
  </head>
  <body id="body">
    <h1>Module Bundler Tutorial</h1>
    <button id="button">Click Me to Change Color!</button>
  </body>
</html>
```

我们删除了分发 bundle 的脚本，因为`HtmlWebpackPlugin`会在自动生成新的 HTML 文件时自动插入一个。

**记住：**该插件将使用你的源代码作为模板来创建新文件。因此，删除手工编码的 bundle 的引用有助于避免脚本的冲突。

现在，让我们来配置该插件，以使用你的源代码作为模板。

### 2\.  Update your configuration file

打开你的项目的`webpack.config.js`文件，更新`HtmlWebpackPlugin`的设置，像这样:

```js
// webpack.config.js

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = { 
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html"
  })] 
}
```

在上面的配置片段中，我们做了以下工作:

1. 我们向`HtmlWebpackPlugin`函数传递了一个包含`template`属性的对象参数。
2. 我们用 HTML 源代码的路径初始化了`template`属性。

因此，如果你现在运行`npx webpack`命令，`HtmlWebpackPlugin`将使用`./src/index.html`作为模板来生成新的`dist/index.html`文件。

因此，新创建的 HTML 分发文件将看起来像这样:

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES Module - CodeSweetly</title>
    <script defer="defer" src="main.js"></script>
  </head>
  <body id="body">
    <h1>Module Bundler Tutorial</h1>
    <button id="button">Click Me to Change Color!</button>
  </body>
</html>
```

假设在你的输出(`dist`)目录中已经有一个`index.html`文件。在这种情况下，由`HtmlWebpackPlugin`生成的新文件将取代现有的 HTML 文件。

### 3\. Check your app in the browser

在浏览器中打开新生成的`dist/index.html`文件，确认浏览器可以成功读取你的应用程序及其依赖关系。

**注意:**

- `HtmlWebpackPlugin`允许你通过提供特定的[配置选项](https://github.com/jantimon/html-webpack-plugin#options)来指定你希望它如何和在哪里生成你的 HTML 文件。例如，`new HtmlWebpackPlugin({ title: "A CodeSweetly Project" })`告诉插件使用`"A CodeSweetly Project"`作为生成 HTML 文件的标题。
- 假设你得到一个错误信息（例如，`ReferenceError: __webpack_base_uri__ is not defined`）。在这种情况下，你可能需要更新你的 Webpack 依赖性。你可以通过在终端上运行`npm update webpack webpack-cli`来实现。

## Important Stuff to Know about Updating Your App

每当你对你的源代码进行修改时，请确保你做以下工作，以使你的更新反映在浏览器中:

1. 重新运行构建步骤。
2. 刷新你的浏览器。

重复运行构建步骤和刷新浏览器的手动过程可能是很麻烦的。幸运的是，Webpack 提供了一种方法来自动完成这两项任务。让我们来看看怎么做。

## How to Rerun Webpack Automatically

假设你希望自动执行重新运行构建步骤的过程。在这种情况下，你可以在你的[package.json](https://www.codesweetly.com/package-json-file-explained/)的`scripts`字段中添加一个`watch`属性。

例如，做如下工作:

### 1\. Add `watch` to the `scripts` fields

打开你的项目的`package.json`文件，在其`scripts`字段中添加一个`watch`属性，像这样:

```json
{
  "name": "your_package",
  "version": "1.0.0",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --progress --watch"
  }
}
```

上面的片段在我们的 `package.json` 文件的 `"scripts"` 字段中添加了一个 `"watch"` 属性，其值为 `"webpack --progress -- watch"`。

### 2\. Run the `watch` script

使用你的终端，像这样调用你的`package.json`的`watch`脚本:

```bash
npm run watch
```

或者，你可以像这样使用 Yarn:

```bash
yarn run watch
```

一旦你调用了`watch`脚本，NPM 将执行`"webpack --progress -- watch"`。

### What is `"webpack --progress --watch"`

`"webpack --progress --watch"`命令让 NPM 执行以下:

1. 运行 Webpack.
2. 向 Webpack 的配置传递`--progress`和`--watch`选项。

`--progress`选项将使 NPM 显示 Webpack 编译的百分比进度。

`--watch`选项激活了 Webpack 的观察模式。

换句话说，`--watch` 让 Webpack 观察你每次保存依赖关系图中的文件变化时，并自动重新编译你的模块。

举个例子，在你的`index.js`文件中，给`changeBodyColor()`函数添加一个`console.log`语句，像这样:

```js
// index.js

import randomColor from "randomcolor";

const bodyElement = document.getElementById("body");
const buttonElement = document.getElementById("button");

function changeBodyColor() {
  const color = randomColor();
  bodyElement.style.backgroundColor = color;
  console.log(color);
}

buttonElement.addEventListener("click", changeBodyColor);
```

之后，保存你的更改。然后刷新你的浏览器。

刷新后，执行以下操作:

1. 打开你的浏览器的控制台（console）。
2. 点击你的应用程序的`"Click Me to Change Color!"`按钮

你可以看到，当你保存源代码的修改时，`--watch`标志自动重新编译了你的模块。

因此，你不再需要再次手动运行`npx webpack`命令。取而代之的是，`--watch`标志将观察你保存修改，并自动重新编译你的模块。

**注意:**

- 运行`npm run watch`后，你当前打开的终端将继续处理`watch`命令的活动。因此，在你停止`watch`的执行之前，你将不能在该终端上输入任何命令。然而，你可以打开一个新的终端窗口，与处理`watch`的窗口同时使用。换句话说，用一个终端来运行`watch`，另一个终端来输入命令。
- 要停止`watch`的执行，在 windows 下使用`ctrl + c`，在 mac 下使用`cmd + c`。
- 你可以把`"watch"`键（或任何其他[scripts'键](https://www.codesweetly.com/package-json-file-explained/#scripts)）重命名为你喜欢的任何其他名称。
- 你可以通过在项目的[配置文件](https://www.codesweetly.com/javascript-module-bundler#what-exactly-is-webpacks-configuration-file)中的[watchOptions.ignored](https://webpack.js.org/configuration/watch/#watchoptionsignored)字段中加入像`node_modules`,来忽略观察它们这样的巨大文件夹。

所以，现在我们知道了如何自动执行 Webpack，让我们来讨论如何自动刷新（reload）浏览器。

## How to Reload the Browser Automatically

假设你希望将重新加载浏览器的过程自动化。在这种情况下，你可以使用 Webpack 的 [dev server](https://github.com/webpack/webpack-dev-server) 包。

下面的步骤将告诉你如何配置和使用该包。

### Step 1: Install webpack's web server

使用你的终端，像这样安装`webpack-dev-server`包:

```bash
npm install webpack-dev-server --save-dev
```

或者，如果你的软件包管理器是 Yarn，运行:

```bash
yarn add webpack-dev-server --dev
```

**注意：** `webpack-dev-server`包默认启用了监视模式。因此，每当你使用开发服务器时，你不需要手动启用一个`watch`脚本。

换句话说，一旦你决定使用 Webpack 的开发服务器，请做以下工作:

1. 在 windows 下使用`ctrl + c`或在 mac 下使用`cmd + c`来停止`watch`的执行（如果该脚本仍在运行）。
2. 删除你[先前添加的](#how-to-rerun-webpack-automatically)在`package.json`文件中的`watch`属性。

### Step 2: Specify your files' location

通过在你[先前创建的]配置文件中添加`devServer`选项，告诉 Web 服务器应该从哪里获得 Webpack[生成的文件](#step-2-create-a-configuration-file):

```js
// webpack.config.js

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = { 
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html"
  })],
  devServer: {
    static: "./dist"
  }
}
```

上面的配置片段告诉开发服务器提供 Webpack 不是从项目的 `dist` 文件夹构建的内容。

请注意，默认情况下，开发服务器在 `localhost:8080` 上提供文件。 但是，您可以通过向 `devServer` 选项添加 `port` 属性来指定要使用的端口，如下所示：:

```js
// webpack.config.js

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = { 
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html"
  })],
  devServer: {
    static: "./dist",
    port: 5001
  }
}
```

**注意:**

- `webpack-dev-server` 使用 [output.path](https://www.codesweetly.com/javascript-module-bundler#outputpath) 的目录来提供 bundled 文件。 换句话说，开发服务器将使用 `http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename]` 来生成 bundled 文件的 URL。
- 我们将在本指南[稍后](#what-exactly-is-webpack-s-configuration-file)讨论如何使用配置文件 。

现在让我们看看如何运行开发服务器。

### Step 3: Run the dev server

有两种方法来运行开发服务器。

- 在你的 CLI 上使用 `NPX`命令
- 使用`package.json`的 scripts 字段

下面我们来讨论这两种方式。

#### How to run Webpack's dev server by using NPX on your CLI

使用终端，进入到你项目的根目录——`webpack.config.js`文件所在的位置，然后使用 NPX 来运行开发服务器，像这样:

```bash
npx webpack serve --mode development --open
```

上面的终端名使用 NPX 来做以下事情:

1. 通过执行 Webpack 来运行构建步骤。
2. 从内存而不是硬盘中提供构建步骤的输出文件。

**注意:**

- 开发服务器需要一个 HTML 文件（通常是 `index.html` 文件）来作为构建步骤的输出文件。
- `--mode development` 标志告诉 Webpack 在开发模式下运行构建步骤。
- `--open` 标志告诉开发服务器打开你的默认浏览器。

请记住，开发服务器不会把构建步骤的输出文件保存到你项目的任何目录中。相反，它做了以下工作:

1. 它把构建步骤的输出文件[保存在内存中](https://en.wikipedia.org/wiki/In-memory_processing)（即你系统的 RAM）。
2. 它从内存中提供输出文件，而不是你的系统的 [硬盘](https://www.computerhope.com/jargon/m/memory.htm#storage)。

使用你的系统内存来构建和提供输出文件，使得开发服务器能够快速提供你的 bundle。

然而，当你的应用程序准备投入生产时，记得运行`npx webpack`编译命令，将你的捆绑包保存在项目的分发（dist）文件夹中,而不是内存中。

现在让我们来讨论运行开发服务器的第二种方式。

#### How to run Webpack's dev server by using `package.json`'s scripts field

另一种运行开发服务器的方法是在你的`package.json`的`scripts`字段中添加`"webpack serve --mode development --open"`命令，像这:

```json
{
  "name": "your_package",
  "version": "1.0.0",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack serve --mode development --open"
  }
}
```

之后，你可以在终端使用`npm run start`来执行`webpack serve --mode development --open`命令。

当你通过方法 1 或 2，启动了开发服务器，你的默认浏览器将自动打开你的项目的 HTML 页面。

然后，在你保存对源代码的修改时，开发服务器会自动刷新你的浏览器来获得最近的更新。

**注意:**

- 运行`npm run start`后，你当前打开的终端将继续处理开发服务器的活动。所以，你将无法在该终端上输入任何命令，直到你停止服务器。然而，你可以打开一个新的终端窗口，同时使用当前的终端来处理服务器。换句话说，用一个终端来运行开发服务器，用另一个终端来输入命令。
- 要停止开发服务器的执行，在 windows 下使用`ctrl + c`，在 mac 下使用`cmd + c`。
- 你可以把`"start"`键（或任何其他[scripts'键](https://www.codesweetly.com/package-json-file-explained/#scripts)）重命名为任何你喜欢的其他名字。
- 查看[Webpack 的文档](https://webpack.js.org/configuration/dev-server)了解更多配置开发服务器的方法。

记住，我们在[步骤 2](#step-2-specify-your-files-location)中使用了一个配置文件。让我们进一步谈谈这个文件的作用。

## What Exactly Is Webpack's Configuration File

Webpack 的 **配置文件** 是一个 JavaScript 文件，允许你修改或扩展 Webpack 的默认设置。

例如，Webpack 的默认设置假定你的项目的入口点是`src/index.js`。

另外，默认情况下，Webpack 将其构建步骤的结果压缩到最小化、优化并输出到`dist/main.js`文件中。

然而，假设你希望改变这些默认设置（或添加更多配置）。在这种情况下，你需要创建一个配置文件，Webpack 会自动使用该文件。

下面的步骤将告诉你如何创建和使用 Webpack 的配置文件。

**注意:** 如果你的项目已经有一个配置文件，你可以跳过下面的步骤 1 和 2。

### Step 1: Go to the project's root folder

像这样进入到你项目的根目录:

```bash
cd path/to/project/root-directory
```

### Step 2: Create your project's configuration file

在你项目的根目录下创建一个配置文件，像这样:

```bash
touch webpack.config.js
```

### Step 3: Specify your configurations

打开你的项目的`webpack.config.js`文件，指定你想改变（或添加）的 [配置选项](https://webpack.js.org/configuration/#options)。

**Here's an example:**

```js
// webpack.config.js

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = { 
  plugins: [new HtmlWebpackPlugin()] 
};
```

下面是我们在上面的配置文件中所做的配置:

1. 我们用`"html-webpack-plugin "` 包初始化了 `HtmlWebpackPlugin` 变量。
2. 我们导出了一个包含我们希望 Webpack 使用的`plugins`配置的对象。

因此，每当你运行构建步骤时，Webpack 就会自动使用你在配置文件中指定的设置，而不是其默认设置。

现在让我们来运行构建步骤。

### Step 4: Run the module bundler

使用你的终端，像这样通过运行 Webpack 来创建你的 bundle:

```bash
npx webpack --config webpack.config.js
```

上面的片段中使用的`--config webpack.config.js`代码是可选的。我们在上面使用它是为了说明可以传递一个[配置](https://webpack.js.org/configuration/#use-a-different-configuration-file), 对于需要分割成多个文件的复杂配置，你可能需要这样做。

然而，如果`webpack.config.js`文件存在于你项目的根目录中，Webpack 将默认使用该文件。

请记住，[plugins](https://webpack.js.org/concepts/plugins/)只是你可以在配置文件中使用的众多选项之一。

让我们来讨论一下开发人员使用的其他配置选项。

## Common Webpack Configuration Options

以下是常用的配置选项，你可以用来改变（或扩展）Webpack 的默认设置。

### entry

 `entry` 字段指定你希望 Webpack 使用的配置文件，以开始开始程序的 bundle（打包）过程。

**这是一个例子:**

```js
// webpack.config.js

module.exports = {
  entry: "./src/index.js",
};
```

上面的片段让 Webpack 从`"./src/index.js"`开始它的捆绑过程。

假设你用一个数组（或一个对象）作为`entry`字段的值。在这种情况下，Webpack 将处理所有数组（或对象）的项目作为应用程序的入口点。

**这是一个例子:**

```js
// webpack.config.js

module.exports = {
  entry: [
    "./src/index.js",
    "./src/index-two.js",
    "./src/index-three.js"
  ]
}
```

上面的代码指示 Webpack 从`entry`数组中指定的三个文件（即`"./src/index.js"`、`"./src/index-two.js"` 和 `"./src/index-three.js"`）开始其 bundle(打包)过程。

**另一个例子:**

```js
// webpack.config.js

module.exports = {
  entry: {
    index: "./src/index.js",
    indexTwo: "./src/index-two.js",
    indexThree: "./src/index-three.js"
  }
}
```

上面的代码指示 Webpack 从`entry`对象中指定的三个文件（即`"./src/index.js"`、`"./src/index-two.js"` 和 `"./src/index-three.js"`）开始其 bundle(打包) 过程。

**注意:**

- 如果`entry`的值是一个字符串或一个数组，Webpack 将创建一个块（bundle），它默认命名为`main`。
- 如果`entry`的值是一个对象，Webpack 将创建一个或多个 chunks(块)。创建的具体数量将取决于该对象的总属性。
- 假设`entry`的值是一个对象。在这种情况下，Webpack 将使用每个键来命名每个 chunk（块）。例如，在 `entry: { home: './home-module.js' }`，Webpack 将创建一个名为`home`的块（bundle）。

### context

`context`字段将 Webpack 指向包含你的条目文件的目录。

**Here's an example:**

```js
// webpack.config.js

const path = require("path");

module.exports = {
  entry: "index.js",
  context: path.resolve(__dirname, "src")
}
```

上面的代码片段告诉 Webpack 在项目的`src`目录下找到`index.js`条目文件。

### output

`output`字段指定了 Webpack 应该如何以及在哪里输出它所处理的 bundles 和 assets。

`output`字段常用的三个选项是`path`、`filename`和`clean`。

#### output.path

`output.path`选项指定了你希望 Webpack 存放 bundled 的输出目录。

**这是一个例子:**

```js
// webpack.config.js

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist")
  }
}
```

上面的代码片段使用 `output.path` 选项来告诉 Webpack 使用项目的 `./dist'` 文件夹作为输出目录（output）。

#### output.filename

`output.filename`选项指定了 Webpack 应该如何命名它所创建的每个 bundle。

假设你只通过一个入口点创建一个 bundle。在这种情况下，你可以指定 bundle 的固定文件名。

**这是一个例子:**

```js
// webpack.config.js

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "codesweetly.js",
    path: path.resolve(__dirname, "dist")
  }
}
```

`output.filename`选项告诉 Webpack 使用`"codesweetly.js"` 作为处理 `"./src/index.js"`后创建的包的文件名。

假设你希望通过两个或多个入口点、代码拆分或各种插件来创建多个 bundles。在这种情况下，最好是通过 Webpack 一类任何技术来动态地生成每个 bundle 的文件名。

**注意:** Webpack 中的替换是指使用括号括起来的字符串来为文件名创建 [模板](https://webpack.js.org/configuration/output/#template-strings)。

现在让我们讨论三种常用的替换技术。

##### Substitutions technique 1: Entry name

The **"entry name"** 替换命名技术使 Webpack 通过[连接 concatenating](https://www.codesweetly.com/web-tech-glossary#concatenation)一个 bundle 的入口点（entry point）的名称与一个给定的字符串来创建每个 bundle 的名称。

**这是一个例子:**

```js
// webpack.config.js

const path = require("path");

module.exports = {
  entry: {
    home: "./src/home-module.js",
    promo: "./src/promo-module.js",
    music: "./src/music-module.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
}
```

`output.filename`选项告诉 Webpack 通过拼接每个入口点的名称（[name]）和`".bundle.js"`字符串值来创建每个 bundle 的文件名。

因此，例如，假设 Webpack 已经完成了对`promo`入口点的处理（即`"./src/promo-module.js"`）。在这种情况下，最终 bundle 的名字将是`"promo.bundle.js"`。

现在我们来讨论第二个替换技术。

##### Substitutions technique 2: Internal chunk id

**"internal chunk id"** 替换命名技术使 Webpack 通过将一个 bundle 的入口点的 ID 与一个给定的字符串相连接来创建每个捆绑包的名称。

**这是一个例子:**

```js
// webpack.config.js

const path = require("path");

module.exports = {
  entry: {
    home: "./src/home-module.js",
    promo: "./src/promo-module.js",
    music: "./src/music-module.js"
  },
  output: {
    filename: "[id].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
}
```

`output.filename`选项告诉 Webpack 通过连接每个入口点的 `internal chuck id` 和 `".bundle.js"` 字符串值来创建每个 bundle 的文件名。

现在我们来讨论第三个替换技术。

##### Substitutions technique 3: Content hash

**"content hash"** 替换命名技术使 Webpack 通过将生成的内容的哈希值与一个给定的字符串相连接来创建每个 bundle 的名称。

**这是一个例子:**

```js
// webpack.config.js

const path = require("path");

module.exports = {
  entry: {
    home: "./src/home-module.js",
    promo: "./src/promo-module.js",
    music: "./src/music-module.js"
  },
  output: {
    filename: "[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
}
```

`output.filename`选项告诉 Webpack 通过连接每个块的内容哈希和`".bundle.js"`字符串值来创建每个包的文件名。

请记住，Webpack 允许你结合不同的替换。例如，`filename: "[name]. [contenthash].bundle.js"`。

你也可以使用一个函数来返回一个文件名，像这样:

```js
filename: (pathData) => {
  return pathData.chunk.name === "main" ? "[name].js" : "[name].bundle.js";
}
```

Webpack 还允许你用文件夹结构来初始化文件名属性，比如说:

```js
filename: "codesweetly/[name]/bundle.js"
```

现在，让我们来讨论开发人员在 `output` 字段内常用的第三个属性。

#### output.clean

随着 Webpack 越来越多地生成和保存文件到你的输出目录中，项目的`/dist`文件夹中经常会有一些未使用的文件。

因此，一个好的做法是在每个构建步骤之前清理你的输出目录。通过这样做，你的`/dist`文件夹将只包含要使用的文件。

让我们看看如何做下面的清理工作:

```js
// webpack.config.js

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "codesweetly.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  }
}
```

上面片段中的`clean`选项告诉 Webpack 在每个构建步骤之前清理项目的输出目录。

换句话说，Webpack 会在开始每个构建步骤之前清空输出目录。

因此，输出目录将只包含编译过程中产生的文件，而不是 Webpack 之前保存在那里的任何旧文件。

现在我们来讨论另一个流行的配置选项，你可以用它来改变（或扩展）Webpack 的默认设置。

### module

`module`字段使 Webpack 在依赖关系图中的 CSS 文件和字体等 assets， 作为[modules](#what-exactly-is-javascript-module)处理。

所以，假设你想让 Webpack bundle（打包）非 JavaScript  assets，如图片、CSS 文件、字体等等。在这种情况下，你可以使用`module`选项来指定 Webpack 在将这些 assets 添加到依赖图(dependency graph)中,管理它们。

下面是一些使用`module`选项的常见方法。

#### How to use Webpack's `module` option to load CSS stylesheets

下面是如何使用 Webpack 的模块选项来加载 CSS 样式表:

```js
// webpack.config.js

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rule: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}
```

上面的配置片段使用`module`属性来告诉 Webpack 使用`"style-loader"` 和 `"css-loader"` 来加载 CSS 文件。

请记住，加载器的顺序很重要。

换句话说，Webpack 是从右到左读取加载器的。因此，它将首先执行`"css-loader"`，然后才是`"style-loader"`。

所以，["css-loader"](https://github.com/webpack-contrib/css-loader)将把它的结果（也就是处理过的资源）传递给`"style-loader"`。然后，["style-loader"](https://github.com/webpack-contrib/style-loader)将把最终的 CSS 资源插入你的 HTML 页面的`<head>`元素中。

安装 Webpack 在加载你的 CSS assets 时使用的加载器,是有必要的。

因此，例如，在 Webpack 使用之前的配置文件加载".css " assets 之前，你需要安装`"style-loader"`和`"css-loader"`。

下面是如何安装这两个加载器:

```bash
npm install style-loader css-loader --save-dev
```

或者，如果你的软件包管理器是 Yarn，运行:

```bash
yarn add style-loader css-loader --dev
```

**注意:**

- `"css-loader"`帮助解释和解决`@import`和`url()` 语句，如`import`、`require()`和`url('./my-image.png')`。
- `"style-loader"` 有助于向你的项目的 HTML 文件插入`<style>`标签和从`"css-loader"`导出的样式。

现在让我们看看如何使用`module`选项来加载图片。

#### How to use Webpack's `module` option to load images

下面是你如何使用 Webpack 的`module`选项来加载图片:

```js
// webpack.config.js

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rule: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      }
    ]
  }
}
```

上面的配置片段使用模块属性告诉 webpack 将`".png"`、`".svg"`、`".jpg"`、`".jpeg"`和`".gif"`文件作为[resource asset modules](https://webpack.js.org/guides/asset-modules/#resource-assets)加载。

所以，假设在你的脚本文件中，有以下的`import`语句:

```js
import anyImage from "./your-image.png";
```

在这种情况下，以下是 Webpack 将如何加载图片:

1. Webpack 将处理`your-image.png`。
2. 它将把处理后的图片添加到你的 _output_ 目录。
3. Webpack 将用处理后的图片的 URL 初始化`anyImage`变量。

**注意:** *在处理和添加`your-image.png`到输出文件夹时，Webpack 将改变图像的文件名，如`150b55a1bf7461efb720.png`。

现在我们来看看如何使用`module`选项来加载字体。

#### How to use Webpack's `module` option to load fonts

下面是你如何使用 Webpack 的`module`选项来加载字体的方法:

```js
// webpack.config.js

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rule: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource"
      }
    ]
  }
}
```

上面的配置片段使用`module`属性来告诉 Webpack 将`".woff"`、`.woff2"、`".eot"、`".ttf "和`".otf "文件作为[resource asset modules](https://webpack.js.org/guides/asset-modules/#resource-assets)加载。

当你配置了加载器，你就可以通过[@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)CSS 声明加入你的字体。

**这是一个例子:**

```css
/* styles.css */

@font-face {
  font-family: "Digital7";
  src: url("./digital-7.regular.woff") format("woff"),
       url("./digital-7.regular.ttf") format("truetype");
  font-weight: 600;
  font-style: italic;
}

div {
  color: red;
  font-family: "Digital7";
}
```

每当`css-loader`加载上述样式表时，它将处理指定的字体，并将处理后的副本添加到你项目的输出目录。

**注意:**

- Webpack 会将处理后的字体文件名改为类似于`93911ab167c943140756.ttf`的内容。
- 查看[Webpack 的文档](https://webpack.js.org/guides/asset-management/#loading-data)以了解如何加载 JSON、CSV、TSV 和 XML 文件。

现在我们来讨论另一个流行的配置选项，你可以用它来改变（或扩展）Webpack 的默认设置。

### devtool

`devtool`字段告诉 Webpack 将编译后的文件转换为源代码格式。因此，使你更容易调试，找到源代码中发生错误的具体文件（和行）。

**这是一个例子:**

```js
// webpack.config.js

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map"
}
```

在编译时，如果 Webpack 在你的配置脚本中看到`devtool`属性，它将生成一个`.js.map`文件，浏览器将使用该文件而不是别的 `.js`文件。

**注意:** 有不同的[devtool 选项](https://webpack.js.org/configuration/devtool/)来指定 Webpack 是否应该生成源码地图（source maps）以及如何生成。

现在我们来讨论另一个流行的配置选项，你可以用它来改变（或扩展）Webpack 的默认设置。

### mode

`mode`字段告诉 Webpack 你希望它使用特定的内置优化配置来构建你的输出文件。

你可以指定 Webpack 是否应该使用`production`、`development`或无（`none`）配置来优化你的包。让我们在下面分别讨论这三种优化设置。

#### Development mode

`mode: "development"`设置告诉 Webpack 建立一个输出文件，以便在开发环境中使用。

**这是一个例子:**

```js
// webpack.config.js

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map",
  mode: "development"
}
```

设置一个`mode: "development"`的配置将使 Webpack 创建一个 bundle:

- 构建速度快
- 优化程度较低
- 包括注释
- 文件没有被压缩到最小化
- 产生有用的错误信息
- 易于调试

下面是 `mode: "development"` 的例子:

![A development mode bundle](https://www.freecodecamp.org/news/content/images/2022/05/bundle-development-mode-webpack-codesweetly.png)

用 webpack 编译的开发模式 bundle 的截图

为了使非最小化的输出文件可读，确保 Webpack 的[devtool](#devtool)字段不是`eval`。

每当你把`mode`设置为`development`时，Webpack 可能会默认`devtool`的值为`eval`。因此，确保选择一个不同的`devtool`,可以选 [source-map](https://webpack.js.org/configuration/devtool/#devtool) 和 `"false"` 两个值。 如果你希望使你的输出文件可读，将 `devtool` 的值设置为 `false`。

假设你选择在开发模式（development mode）下运行 Webpack。在这种情况下，当你准备部署你的应用程序时，请记得将你的配置改为生产模式（production mode）。

现在，让我们来讨论如何配置 Webpack 以在生产模式下构建你的输出文件（production mode）。

#### Production mode

`mode: "production"`设置告诉 Webpack 建立一个输出文件，以便在生产环境中使用。

**这是一个例子:**

```js
// webpack.config.js

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map",
  mode: "production"
}
```

设置一个`mode: "production"`配置将使 Webpack 创建 bundle:

- 构建速度慢
- 更加优化
- 不包括注释
- 压缩文件最小化
- 不产生详细的错误信息
- 难以调试

 `mode: "production"`例子:

![A production mode bundle](https://www.freecodecamp.org/news/content/images/2022/05/bundle-production-mode-webpack-codesweetly.png)

用 webpack 编译的生产模式 bundle 的截图

**注意:**  Webpack[推荐](https://webpack.js.org/guides/production/#source-mapping) 在生产中启用了类似于源码地图的`source-map`。

现在，让我们讨论一下配置 Webpack 来构建你的输出文件，而不进行任何优化设置。

#### None mode

`mode: "none"`设置告诉 Webpack 构建一个输出文件，而不对其进行优化。

**这是一个例子:**

```js
// webpack.config.js

const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "none"
}
```

这是一个 `mode: "none"` bundle 的例子:

![A none mode bundle](https://www.freecodecamp.org/news/content/images/2022/05/bundle-none-mode-webpack-codesweetly.png)

用 webpack 编译的 `mode: "none"` 模式的截图。

#### Important stuff to know about the `mode` option

为了方便在开发和生产模式之间的切换，你可以将 `mode` 配置存储在你的`package.json`文件的`"scripts"`字段中。

**这是一个例子:**

```json
{
  "name": "your-app-name",
  "version": "1.0.0",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack --mode development",
    "build": "webpack --mode production"
  }
}
```

上面的片段用 Webpack 的`development`模式命令初始化了脚本的`"dev"`属性。

同样地，我们用 Webpack 的 `build`属性运行 Webpack 的生产模式（`production`）。

因此，假设你在终端执行`npm run dev`。在这种情况下，Webpack 将在开发模式(development mode)下执行构建步骤。

## Overview

这篇文章讨论了什么是 JavaScript 模块以及它是如何工作的。我们还讨论了如何使用一个流行的模块 bundle（Webpack）将一个项目的 JavaScript 文件及其依赖关系打包到一个单一的输出文件。

我们就讲到这里。我希望你觉得这篇文章对你有帮助。

谢谢你的阅读!

### **一个有用的 ReactJS 资源**

我写了一本关于 React!

- 它对初学者友好 ✔
- 它可以实际运行的代码片断 ✔
- 它包含可扩展的项目 ✔
- 它有大量容易掌握的例子 ✔

[React Explained Clearly](https://www.amazon.com/dp/B09KYGDQYW)，有你想了解 ReactJS 所需要的全部内容。

[![React Explained Clearly Book Now Available at Amazon](https://www.freecodecamp.org/news/content/images/2022/01/Twitter-React_Explained_Clearly-CodeSweetly-Oluwatobi_Sofela.jpg)](https://www.amazon.com/dp/B09KYGDQYW)
