> - 原文地址：[The JavaScript Modules Handbook – Complete Guide to ES Modules and Module Bundlers](https://www.freecodecamp.org/news/javascript-es-modules-and-module-bundlers/)
> - 原文作者：[Oluwatobi Sofela](https://www.freecodecamp.org/news/author/oluwatobiss/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![The JavaScript Modules Handbook – Complete Guide to ES Modules and Module Bundlers](https://www.freecodecamp.org/news/content/images/size/w2000/2022/05/javascript-es-modules-and-module-bundlers-container-4203677_1920.jpg)

**Modules** 和 **Module Bundlers** 是现代 Web 开发的重要组成部分。但了解它们的工作方式很快就会让人不知所措。

本文将以通俗的方式向你展示所有你需要了解的 ES Modules 和 Module Bundlers。

## Table of Contents

1. [What Exactly Is a JavaScript Module?](#what-exactly-is-a-javascript-module)
2. [Why Use Modules?](#why-use-modules)
3. [Common Types of Module Systems in JavaScript](#common-types-of-module-systems-in-javascript)
4. [How to Convert a JavaScript File into a Module](#how-to-convert-a-javascript-file-into-a-module)
5. [How to Use an ES Module](#how-to-use-an-es-module)
6. [How to Export a Module's Code](#how-to-export-a-module-s-code)
7. [How to Import Exported Code](#how-to-import-exported-code)
8. [How to Use a Module's Imported Code](#how-to-use-a-module-s-imported-code)
9. [How to Rename Exports and Imports in ES Modules](#how-to-rename-exports-and-imports-in-es-modules)
10. [Why Rename a Module's Code?](#why-rename-a-module-s-code)
11. [How to Rename Multiple Exports in an ES Module](#how-to-rename-multiple-exports-in-an-es-module)
12. [How to Rename Multiple Imports in an ES Module](#how-to-rename-multiple-imports-in-an-es-module)
13. [How to Import All Exportable Items from an ES Module in One Go](#how-to-import-all-exportable-items-from-an-es-module-in-one-go)
14. [How to Export Anonymously to an ES Module](#how-to-export-anonymously-to-an-es-module)
15. [What Exactly Is an Aggregator File?](#what-exactly-is-an-aggregator-file)
16. [Project: How to Use an Aggregator File](#project-how-to-use-an-aggregator-file)
17. [How to Use the `import()` Syntax to Load a Module Dynamically](#how-to-use-the-import-syntax-to-load-a-module-dynamically)
18. [What Exactly Is `import.meta` in ES Modules?](#what-exactly-is-import-meta-in-es-modules)
19. [Quick Review of Modules So Far](#quick-review-of-modules-so-far)
20. [What Is a Module Bundler?](#what-is-a-module-bundler)
21. [Why Do You Need a Module Bundler?](#why-do-you-need-a-module-bundler)
22. [How Does a Module Bundler Work?](#how-does-a-module-bundler-work)
23. [How to Use Webpack](#how-to-use-webpack)
24. [How to Make Webpack Auto-Generate Your App's HTML File](#how-to-make-webpack-auto-generate-your-app-s-html-file)
25. [How to Make `HtmlWebpackPlugin` Use Your Source File as a Template to Auto-Generate a New HTML Page](#how-to-make-htmlwebpackplugin-use-your-source-file-as-a-template-to-auto-generate-a-new-html-page)
26. [Important Stuff to Know about Updating Your App](#important-stuff-to-know-about-updating-your-app)
27. [How to Rerun Webpack Automatically](#how-to-rerun-webpack-automatically)
28. [How to Reload the Browser Automatically](#how-to-reload-the-browser-automatically)
29. [What Exactly Is Webpack's Configuration File?](#what-exactly-is-webpack-s-configuration-file)
30. [Common Webpack Configuration Options](#common-webpack-configuration-options)
31. [Overview](#overview)

So, without any further ado, let's get started with modules.

## What Exactly Is a JavaScript Module?

一个 JavaScript **Module** 是一个允许你导出其代码的文件。这允许其他 JavaScript 文件导入并使用导出的代码作为它们的依赖项。

具体来说，模块是一个简单的 JavaScript 文件，它允许你与你项目中的其他文件（或通过 Yarn 和 NPM 等[包管理器](https://www.codesweetly.com/package-manager-explained)与世界分享其代码）。

## Why Use Modules?

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

### Step 1: Create a project directory

创建一个项目文件夹——本项目的 HTML 和 JavaScript 文件将存放在这里。

### Step 2: Create your code files

在你的项目文件夹中创建以下文件:

1. `index.html`
2. `index.js`

### Step 3: Add your JavaScript file to your HTML document

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

在上面的 HTML 片段中，我们使用了`<script>`的`type="module"`属性，将`index.js`的 JavaScript 文件转换为 ES 模块。

所以，现在我们知道了如何将一个 JavaScript 文件转换成一个模块，让我们看看如何使用一个模块。

## How to Use an ES Module

按照以下步骤学习如何使用 ES 模块。

### Step 1: Create a project directory

创建一个项目文件夹——本项目的 HTML 和模块文件将存放在这里。

### Step 2: Create your code files

在你的项目文件夹中创建以下文件:

1. `index.html`
2. `module-1.js`
3. `module-2.js`

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

### Step 4: View your app

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

#### How to run an HTML file through a local server

下面的步骤将告诉你如何使用 [VS Code](https://code.visualstudio.com/) 本地服务器扩展来运行你的 HTML 文件。

**注意：** 假设你的代码编辑器是 Atom 或 Sublime Text。在这种情况下，请按照下面的链接来学习如何安装本地服务器插件。

- [Atom Live Server](https://atom.io/packages/atom-live-server)
- [Sublime Text Live Server](https://youtu.be/5CinAgQylao)

##### 1\. Add your project folder to VSCode's workspace

![Add your project's folder to VSCode's workspace](https://www.freecodecamp.org/news/content/images/2022/05/module-tutorial-add-proj-folder-to-vscode-workspace-codesweetly.gif)

将项目文件夹添加到 VSCode 的 workspace

##### 2\. Install a local server (Live Server by Ritwick Dey)

![Install the Live Server by Ritwick Dey](https://www.freecodecamp.org/news/content/images/2022/05/module-tutorial-install-live-server-codesweetly.png)

安装 VSCode Live Server（它的作者是：Ritwick Dey）

##### 3\. Open your HTML file in the code editor

![Open your HTML file in your code editor](https://www.freecodecamp.org/news/content/images/2022/05/module-tutorial-open-html-file-in-code-editor-codesweetly.png)

在 VSCode 编辑器中打开 HTML 文件

##### 4\. Use Live Server to run the HTML file in your default browser

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

### How to share a module's code by placing an `export` keyword before the code

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

### How to share a module's code by creating an export statement

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

## Why Rename a Module's Code?

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

### What Exactly Is a Default Export in ES Modules?

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

## What Exactly Is an Aggregator File?

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

## What Exactly Is `import.meta` in ES Modules?

The `import.meta` code is an object containing information about your current module.

**Here's an example:**

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

[**Try it on StackBlitz**](https://stackblitz.com/edit/web-platform-8ky5vd?devtoolsheight=33&file=index.html)

The `import.meta` code in the snippet above will return some information about the module in which it got used.

## Quick Review of Modules So Far

We've learned that a JavaScript module is simply a file with an add-on capability to share its code with other modules within a project—or [with the world](https://www.codesweetly.com/package-manager-explained/#how-to-publish-your-project-to-the-npm-registry) through package managers like Yarn and NPM.

We also used a local server to load our HTML documents via an `http://` scheme—which made browsers load our apps without throwing any CORS error.

However, live servers are limited to local developments and testing purposes.

In other words, you cannot use a live server in production to serve your HTML document via an `http://` scheme. Instead, it would be best if you used a _module bundler_.

But what exactly is a module bundler, I hear you ask? Let's find out below.

## What Is a Module Bundler?

A **module bundler** is a tool developers use to bundle an app's [modules](#what-exactly-is-a-javascript-module) and dependencies into a single browser-compatible JavaScript file.

## Why Do You Need a Module Bundler?

Module bundlers allow browsers to access the file you specified in a `require()` or `import` statement.

In other words, suppose a browser runs a JavaScript file with a `require("./node_module/test/sample/app.js")` statement. In such a case, the browser will throw an error that says `Uncaught ReferenceError: require is not defined`.

The computer will throw such an error because browsers cannot access files specified in a JavaScript program.

However, you can use a module bundler to create a new JavaScript file containing code browsers can read.

## How Does a Module Bundler Work?

A module bundler does its bundling work as follows:

### First, it creates an output script file

The module bundler will first create an "output script file" in your project's `dist` folder.

**Note:**

- The bundler uses the _output script file_ to save the bundled code.
- An **output file** is the compiled version of an entry file. In other words, an output script file refers to the JavaScript file a bundler generates automatically for your project.
- An **entry point** is a file that a bundler uses to start building a [dependency graph](https://webpack.js.org/concepts/dependency-graph/) of all the project's modules it needs to combine into a single browser-compatible module.
- An entry point is the most critical file of a build step that links (directly or indirectly) to every other module in a project.

### Next, the module bundler compiles your code

Secondly, the bundler will check the build step's entry point for any occurrence of some `require()` or `import` statements.

Suppose the module bundler finds a `require()` or `import` statement. In such a case, the bundler will compile (combine) the content of each dependency specified in the statements with the entry point's content.

**Note:**

- A **build step** is a process through which a module bundler builds a new browser compatible JavaScript file.
- A build step's output file is sometimes called a **distribution code**. In other words, distribution code is the minified and optimized source code version.
- A **dependency** is a file your script requires to work as intended. So, in `import { variable } from "./path/to/module.js"`, `module.js` is the dependency file because it is a script our app depends on to function as designed.

Let's now discuss the last thing a module bundler does.

### Finally, it saves the compiled code

A module bundler's last step is to save the compiled code into [step 1](#first-it-creates-an-output-script-file)'s output script file.

As a result, step 1's script file (the build step's output) will contain the content of the entry point and its dependencies—but no `require()` or `import` statements.

**Note:** Typical examples of module bundlers are [webpack](https://webpack.js.org), [browserify](http://browserify.org/), [rollup](https://rollupjs.org/guide/en/), and [parcel](https://parceljs.org/).

So, now that we know how a module bundler works, let's discuss how to use a popular one—_Webpack_.

## How to Use Webpack

Follow the steps below to learn how to use Webpack to bundle your project's JavaScript file and its dependencies into a single output script file.

### Step 1: Create a project directory

Create a project folder—where this project's files will reside.

### Step 2: Go to the project's root folder

Using the command line, navigate to the root directory of your project like so:

```bash
cd path/to/project/root-directory
```

**Note:** A **root directory** is a folder containing all other files and sub-folders of a specific project.

In other words, the folder you created in step 1 is your root folder because it will house everything concerning this particular project.

### Step 3: Create a `package.json` file

Create a [package.json](https://www.codesweetly.com/package-json-file-explained) file in your project's root directory like so:

```bash
npm init -y
```

Alternatively, you can use Yarn like this:

```bash
yarn init -y
```

**Note:**

- The `-y` flag instructs NPM (or Yarn) to [create a default `package.json` file](https://www.codesweetly.com/package-json-file-explained/#how-to-create-a-default-packagejson-file).
- You must have Node and NPM installed on your system for the initialization code above to work. You can get both by installing the latest LTS version from the [Node.js](https://nodejs.org/en/) website.

### Step 4: Install the Webpack module bundler

Install `webpack` and `webpack-cli` locally into your project as [development dependency](https://www.codesweetly.com/package-manager-explained/#npm-installation-command) libraries:

```bash
npm install webpack webpack-cli --save-dev
```

Or, if your package manager is Yarn, run:

```bash
yarn add webpack webpack-cli --dev
```

**Note:** The `webpack-cli` package makes running webpack on the command line possible.

### Step 5: Create your project's directories

Create a "source" code folder (`./src`) and a "distribution" code folder (`./dist`).

```bash
mkdir src dist
```

**Note:** Although `src` and `dist` are the names typically given to the source and distribution code's folders, you are free to choose any other name you prefer.

### Step 6: Create your source code files

Create the following files inside the newly created source code directory:

1. `index.html`
2. `index.js`

**Note:**

- Webpack recommends saving [source code](https://www.codesweetly.com/web-tech-glossary#source-code) in a `./src` directory and [distribution code](https://www.codesweetly.com/web-tech-glossary#distribution-code) in a `./dist` directory.
- Webpack does not alter any other code apart from the `require()`, `import`, and `export` statements.

### Step 7: Add the JavaScript file to your HTML document

Open your `index.html` file and replicate the code below:

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

Here are the main things we did in the HTML snippet above:

1. We created a `<h1>` and `<button>` element.
2. We added step 6's JavaScript file to our HTML document.

**Note:** When using a bundler, you do not need to add the `type="module"` attribute to your project's `<script>` element. Instead, the bundler will automatically treat all scripts containing `import` and `export` statements as modules.

### Step 8: Install some dependencies

Using your text editor, [install your project's dependencies locally](https://www.codesweetly.com/package-manager-explained/#local-package-installation).

For instance, here's how you can install the [randomColor](https://www.npmjs.com/package/randomcolor) package as a local dependency:

```bash
npm install randomcolor --save
```

**Note:**

- Use the `npm install package-name --save` command for dependencies your app needs in production.
- Use the `npm install package-name --save-dev` command for dependencies your app only needs for its local development and testing purposes.

Alternatively, you can use Yarn like so:

```bash
yarn add randomcolor
```

**Note:** Use the `yarn add package-name --dev` command for dependencies your app only needs for its local development and testing purposes.

### Step 9: Import your dependencies

Import your dependencies into your JavaScript source code with the `require()` method or the `import` statement.

For instance, here's how to use the `import` statement to bring in step 8's `randomColor` dependency into your `index.js` script file:

```js
// index.js

import randomColor from "randomcolor";
```

The `require()` method equivalence of the snippet above is like so:

```js
// index.js

const randomColor = require("randomcolor");
```

**Note:**

- The `import` statement is JavaScript's native way of importing modules.
- The `require()` function is the CommonJS syntax for importing modules into a script.
- An alternative way to import your project's dependencies is to implicitly load them with your HTML document's `<script>` tag. However, such a technique pollutes the global scope. So, using the `import` or `require()` syntax is better.

### Step 10: Use the dependencies

Use the dependencies you imported in step 9 to do as you desire.

For instance, here's how you may use the `randomColor` dependency:

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

In the snippet above, we told the computer that whenever a user clicks the `buttonElement`, it should:

1. Invoke the `changeBodyColor` function.
2. Initialize the function's `color` variable with `randomColor`'s [invocation](https://www.codesweetly.com/declaration-initialization-invocation-in-programming/#what-does-invocation-mean-in-programming) output.
3. Use the `color` variable's value to style the `bodyElement`'s background color.

Let's now bundle up our entry point (the `index.js` file) and the `randomColor` dependency into a single JavaScript file.

### Step 11: Start the build step

Using your terminal, create your bundle by running webpack like so:

```bash
npx webpack
```

After running the command above, webpack will do the following:

1. It will use your `index.js` as its entry point.
2. It will create a bundle (the output file) in your project's `dist` folder containing the content of the entry point and its dependencies.

**Note:**

- By default, Webpack generates its bundle as a `main.js` file—which it will save in the distribution folder you created in step 5. However, you can change the default setting by creating a configuration file—which Webpack will use automatically. We will discuss creating and using a configuration file [later](#what-exactly-is-webpack-s-configuration-file) in this guide.
- [NPX](https://nodejs.dev/learn/the-npx-nodejs-package-runner) is Node's package runner that will automatically find and execute Webpack.

Our next step is to tell browsers to use the newly created bundle. Let's do that below.

### Step 12: Refer browsers to the newly created bundle

So, now that you have created a browser-compatible bundle file, you need to tell browsers to use it instead of the `index.js` source code file.

Therefore, go to your HTML file and substitute the reference to your JavaScript source code with Webpack's distribution bundle.

For instance, instead of using `"./index.js"` in the `<script>` tag of your HTML file, you would use `"../dist/main.js"` like so:

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

Let's now see our app!

### Step 13: Check your app in the browser

Open your HTML file in the browser to confirm that the browser can successfully read your app and its dependencies.

Remember that you created your HTML file manually in [step 6](#step-6-create-your-source-code-files). However, Webpack can also auto-generate one for you. Let's find out how.

## How to Make Webpack Auto-Generate Your App's HTML File

Suppose your app is now outputting multiple bundles, or you've started [using hashes](https://www.codesweetly.com/javascript-module-bundler#substitutions-technique-3-content-hash) to create unique filenames. In that case, you may find it increasingly difficult to manage your HTML file manually.

Therefore, Webpack allows you to use the [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) to auto-generate and manage your project's `index.html` file.

Follow the steps below to learn how to use `HtmlWebpackPlugin` to auto-generate and manage your project's HTML file.

### Step 1: Install `HtmlWebpackPlugin`

Install the `HtmlWebpackPlugin` like so:

```bash
npm install html-webpack-plugin --save-dev
```

Or, if your package manager is Yarn, use:

```bash
yarn add html-webpack-plugin --dev
```

### Step 2: Create a configuration file

Create a Webpack configuration file in your project's [root folder](https://www.codesweetly.com/web-tech-glossary#root-directory) like so:

```bash
touch webpack.config.js
```

### Step 3: Add the plugin to webpack's configuration

Open your `webpack.config.js` file and add the `HtmlWebpackPlugin` plugin to it like so:

```js
// webpack.config.js

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = { 
  plugins: [new HtmlWebpackPlugin()] 
}
```

**Note:** We will discuss how to use a configuration file [later](#what-exactly-is-webpack-s-configuration-file) in this guide.

### Step 4: Run the build step

Once you've installed and added `HtmlWebpackPlug` into your project, recompile your modules like so:

```bash
npx webpack
```

After running the build step, `HtmlWebpackPlugin` will do the following:

1. It will auto-generate a new `index.html` file.
2. The plugin will automatically insert the bundles that Webpack generated into the newly created HTML document.
3. It will auto-save the new HTML file inside your project's distribution folder.

In other words, after running a build, the `new HtmlWebpackPlugin()`'s invocation (in the configuration file) will auto-generate a `dist/index.html` file with the following content:

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

Notice that the HTML document generated by `HtmlWebpackPlugin` does not contain [your source file](#step-7-add-the-javascript-file-to-your-html-document)'s `<h1>` and `<button>` elements.

In other words, suppose you open the `dist/index.html` file in the browser. In that case, the browser will open an empty HTML page.

The `HtmlWebpackPlugin` omitted the content of the source code's `<body>` element because it did not create the new file from the original document. Instead, it automatically created a brand-new HTML page that includes only the bundles Webpack generated.

However, you can also tell `HtmlWebpackPlugin` to use your source file as a template. Let's see how below.

## How to Make `HtmlWebpackPlugin` Use Your Source File as a Template to Auto-Generate a New HTML Page

To make `HtmlWebpackPlugin` use your HTML source file as a template, do the following:

### 1\. Update your HTML file

Open your `index.html` _source code_ file and delete the `<script>` tag you [previously used](#step-12-refer-browsers-to-the-newly-created-bundle) to reference Webpack's distribution bundle.

So, your HTML source code should look like this:

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

We deleted the distribution bundle's script because `HtmlWebpackPlugin` will automatically insert one while it auto-generates the new HTML file.

**Remember:** The plugin will use your source code as a template to create the new file. Therefore, deleting the hand-coded bundle's reference helps avoid conflicting scripts.

Now, let's configure the plugin to use your source code as a template.

### 2\.  Update your configuration file

Open your project's `webpack.config.js` file and update `HtmlWebpackPlugin`'s settings like so:

```js
// webpack.config.js

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = { 
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html"
  })] 
}
```

In the configuration snippet above, we did the following:

1. We passed an object argument containing a `template` property to the `HtmlWebpackPlugin` function.
2. We initialized the `template` property with the path to our HTML source code.

So, if you now run the `npx webpack` command, `HtmlWebpackPlugin` will use `./src/index.html` as a template to generate the new `dist/index.html` file.

Therefore, the newly created HTML distribution file will look like so:

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

Suppose an `index.html` file already exists in your output (`dist`) directory. In that case, the new one generated by `HtmlWebpackPlugin` will replace the existing HTML file.

### 3\. Check your app in the browser

Open the newly generated `dist/index.html` file in the browser to confirm that the browser can successfully read your app and its dependencies.

**Note:**

- `HtmlWebpackPlugin` allows you to specify how and where you want it to generate your HTML file by providing specific [configuration options](https://github.com/jantimon/html-webpack-plugin#options). For instance, `new HtmlWebpackPlugin({ title: "A CodeSweetly Project" })` tells the plugin to use `"A CodeSweetly Project"` as the title of the generated HTML file.
- Suppose you get an error message (for instance, `ReferenceError: __webpack_base_uri__ is not defined`). In that case, you likely need to update your Webpack dependency. You can do so by running `npm update webpack webpack-cli` on your terminal.

## Important Stuff to Know about Updating Your App

Whenever you make changes to your source code, make sure you do the following for your updates to reflect in the browser:

1. Rerun the build step.
2. Refresh your browser.

Repeating the manual process of running the build step and refreshing your browser can be burdensome. Luckily, Webpack provides a way to automate the two tasks. Let's find out how.

## How to Rerun Webpack Automatically

Suppose you wish to automate the process of rerunning the build step. In that case, you can add a `watch` property to your [package.json](https://www.codesweetly.com/package-json-file-explained/)'s `scripts` field.

For instance, do the following:

### 1\. Add `watch` to the `scripts` fields

Open your project's `package.json` file and add a `watch` property to its `scripts` field like so:

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

The snippet above added a `"watch"` property—with the value `"webpack --progress --watch"`—to the `"scripts"` field of our `package.json` file.

### 2\. Run the `watch` script

Using your terminal, invoke your `package.json`'s `watch` script like so:

```bash
npm run watch
```

Alternatively, you can use Yarn like this:

```bash
yarn run watch
```

Once you've invoked the `watch` script, NPM will execute `"webpack --progress --watch"`.

### What is `"webpack --progress --watch"`?

The `"webpack --progress --watch"` command instructs NPM to:

1. Run Webpack.
2. Pass the `--progress` and `--watch` options to Webpack's configuration.

The `--progress` option will make NPM show the percentage progress of Webpack's compilation.

The `--watch` option activates Webpack's watch mode.

In other words, `--watch` instructs Webpack to watch and automatically recompile your modules each time you save changes to files within your dependency graph.

As an example, go to your `index.js` file and add a `console.log` statement to the `changeBodyColor()` function like so:

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

Afterward, save your changes. Then refresh your browser.

After the refresh, do the following:

1. Open your browser's console.
2. Click your app's `"Click Me to Change Color!"` button.

You can see that the `--watch` flag automatically recompiled your modules when you saved your source code's changes.

Therefore, you no longer need to run the `npx webpack` command manually again. Instead, the `--watch` flag will watch and automatically recompile your modules whenever you save changes.

**Note:**

- After running `npm run watch`, your currently opened terminal will continue to process the `watch` command's activities. So, you won't be able to input any command on that terminal until you stop `watch`'s execution. However, you can open a new terminal window to use simultaneously with the one processing `watch`. In other words, use one terminal to run `watch` and another to input commands.
- To stop `watch`'s execution, use `ctrl + c` on windows or `cmd + c` on mac.
- You can rename the `"watch"` key (or any other [scripts' key](https://www.codesweetly.com/package-json-file-explained/#scripts)) to any other name you prefer.
- You can ignore watching huge folders like `node_modules` by adding them to the [watchOptions.ignored](https://webpack.js.org/configuration/watch/#watchoptionsignored) field of your project's [configuration file](https://www.codesweetly.com/javascript-module-bundler#what-exactly-is-webpacks-configuration-file).

So, now that we know how to automate Webpack's execution, let's discuss how to reload the browser automatically.

## How to Reload the Browser Automatically

Suppose you wish to automate the process of reloading your browser. In that case, you can use Webpack's [dev server](https://github.com/webpack/webpack-dev-server) package.

The following steps will show you how to configure and use the package.

### Step 1: Install webpack's web server

Using your terminal, install the `webpack-dev-server` package like so:

```bash
npm install webpack-dev-server --save-dev
```

Or, if your package manager is Yarn, run:

```bash
yarn add webpack-dev-server --dev
```

**Note:** The `webpack-dev-server` package enables watch mode by default. Therefore, you do not need to enable a `watch` script manually whenever you use the dev server.

In other words, once you've decided to use Webpack's dev server, do the following:

1. Use `ctrl + c` on windows or `cmd + c` on mac to stop `watch`'s execution (if the script is still running).
2. Delete the `watch` property you [previously added](#how-to-rerun-webpack-automatically) to your `package.json` file.

### Step 2: Specify your files' location

Tell the web server where it should get the files that Webpack did not generate by adding a `devServer` option to the configuration file you [created previously](#step-2-create-a-configuration-file):

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

The configuration snippet above tells the dev server to serve contents Webpack did not build from the project's `dist` folder.

Note that the dev server serves files on `localhost:8080` by default. However, you can specify the port you wish to use by adding a `port` property to the `devServer` option like so:

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

**Note:**

- `webpack-dev-server` uses [output.path](https://www.codesweetly.com/javascript-module-bundler#outputpath)'s directory to serve bundled files.  
    In other words, the dev server will use `http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename]` to generate the bundled file's URL.
- We will discuss how to use a configuration file [later](#what-exactly-is-webpack-s-configuration-file) in this guide.

Let's now see how to run the dev server.

### Step 3: Run the dev server

There are two ways to run the dev server.

- Use NPX on your CLI
- Use `package.json`'s scripts field

Let's discuss both ways below.

#### How to run Webpack's dev server by using NPX on your CLI

Using the terminal, navigate to your project's root directory—where the `webpack.config.js` file is—then use NPX to run the dev server like this:

```bash
npx webpack serve --mode development --open
```

The snippet above uses NPX to do the following:

1. Run the build step by executing Webpack.
2. Serve the build step's output file from memory, not your hard disk.

**Note:**

- The dev server requires an HTML document (usually an `index.html` file) to serve the build step's output.
- The `--mode development` flag tells Webpack to run the build step in development mode.
- The `--open` flag tells the dev server to open your default browser.

Keep in mind that the dev server does not save the build step's output file to any of your project's directories. Instead, it does the following:

1. It keeps the build step's output files [in memory](https://en.wikipedia.org/wiki/In-memory_processing) (your system's RAM).
2. It serves the output files from memory, not your system's [hard drive](https://www.computerhope.com/jargon/m/memory.htm#storage).

Using your system's memory to build and serve the output file makes the dev server fast at serving your bundle.

However, when your app is ready for production, remember to run the `npx webpack` compilation command to save your bundle in your project's distribution folder—rather than in memory.

Let's now discuss the second way to run the dev server.

#### How to run Webpack's dev server by using `package.json`'s scripts field

An alternate way to run the dev server is to add the `"webpack serve --mode development --open"` command to your `package.json`'s `scripts` field like so:

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

Afterward, you can use `npm run start` on your terminal to execute the `webpack serve --mode development --open` command.

Once you've started the dev server—via either option 1 or 2, your default browser will automatically open with your project's HTML page.

Then, anytime you save changes to your source code, the dev server will automatically reload your browser to reflect the recent updates.

**Note:**

- After running `npm run start`, your currently opened terminal will continue to process the dev server's activities. So, you won't be able to input any command on that terminal until you stop the server. However, you can open a new terminal window while using the current one to process the server. In other words, use one terminal to run the dev server and another to input commands.
- To stop the dev server's execution, use `ctrl + c` on windows or `cmd + c` on mac.
- You can rename the `"start"` key (or any other [scripts' key](https://www.codesweetly.com/package-json-file-explained/#scripts)) to any other name you prefer.
- Check out [Webpack's documentation](https://webpack.js.org/configuration/dev-server) for more ways to configure the dev server.

Remember that we used a configuration file in [step 2](#step-2-specify-your-files-location). Let's talk more about what the file does.

## What Exactly Is Webpack's Configuration File?

Webpack's **configuration file** is a JavaScript file that allows you to modify or extend Webpack's default settings.

For instance, Webpack's default setting assumes your project's entry point is `src/index.js`.

Also, by default, Webpack will minimize, optimize, and output the result of its build step into a `dist/main.js` file.

However, suppose you wish to change those default settings (or add more configurations). In such a case, you would need to create a configuration file—which Webpack will use automatically.

The following steps will show you how to create and use a Webpack configuration file.

**Note:** You can skip steps 1 and 2 if your project already has a configuration file.

### Step 1: Go to the project's root folder

Navigate to your project's root directory like so:

```bash
cd path/to/project/root-directory
```

### Step 2: Create your project's configuration file

Create a configuration file in your project's root folder like so:

```bash
touch webpack.config.js
```

### Step 3: Specify your configurations

Open your project's `webpack.config.js` file and specify the [configuration options](https://webpack.js.org/configuration/#options) you wish to change (or add).

**Here's an example:**

```js
// webpack.config.js

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = { 
  plugins: [new HtmlWebpackPlugin()] 
};
```

Here's what we did in the configuration file above:

1. We initialized the `HtmlWebpackPlugin` variable with the `"html-webpack-plugin"` package.
2. We exported an object containing the `plugins` configuration we want Webpack to use.

So, whenever you run the build step, Webpack will automatically use the settings you've specified in the configuration file—rather than its default settings.

Let's now run the build step.

### Step 4: Run the module bundler

Using your terminal, create your bundle by running Webpack like so:

```bash
npx webpack --config webpack.config.js
```

The `--config webpack.config.js` code used in the snippet above is optional. We used it above to illustrate that it is possible to pass a configuration of [any name](https://webpack.js.org/configuration/#use-a-different-configuration-file)—which you may need for complex configurations that requires a split into multiple files.

However, Webpack will use the `webpack.config.js` file by default if it is present in your project's root directory.

Keep in mind that [plugins](https://webpack.js.org/concepts/plugins/) is only one of the numerous options you can use in a configuration file.

Let's discuss other configuration options developers use.

## Common Webpack Configuration Options

Below are popular configuration options you can use to alter (or extend) Webpack's default settings.

### entry

The `entry` field specifies the file or files you want Webpack to use to begin the application's bundling process.

**Here's an example:**

```js
// webpack.config.js

module.exports = {
  entry: "./src/index.js",
};
```

The snippet above instructs Webpack to start its bundling process from `"./src/index.js"`.

Suppose you used an array (or an object) as the `entry` field's value. In that case, Webpack will process all the array's (or object's) items as the application's entry points.

**Here's an example:**

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

The code above instructs Webpack to start its bundling process from the three files specified in the `entry` array (that is, `"./src/index.js"`, `"./src/index-two.js"`, and `"./src/index-three.js"`).

**Here's another example:**

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

The code above instructs Webpack to start its bundling process from the three files specified in the `entry` object (that is, `"./src/index.js"`, `"./src/index-two.js"`, and `"./src/index-three.js"`).

**Note:**

- If `entry`'s value is a string or an array, Webpack will create a chunk (bundle)—which it will name `main` by default.
- If `entry`'s value is an object, Webpack will create one or more chunks. The specific number of chucks created will depend on the total properties of the object.
- Supposing `entry`'s value is an object. In that case, Webpack will use each key to name each chunk. For instance, in `entry: { home: './home-module.js' }`, Webpack will create a chunk (bundle) named `home`.

### context

The `context` field points Webpack to the directory containing your entry files.

**Here's an example:**

```js
// webpack.config.js

const path = require("path");

module.exports = {
  entry: "index.js",
  context: path.resolve(__dirname, "src")
}
```

The snippet above tells Webpack to locate the `index.js` entry file in the project's `src` directory.

### output

The `output` field specifies how and where Webpack should output the bundles and assets it processed.

The three options commonly used with the `output` field are `path`, `filename`, and `clean`.

#### output.path

The `output.path` option specifies the output directory you want Webpack to place the bundled file.

**Here's an example:**

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

The snippet above used the `output.path` option to tell Webpack to use the project's `"./dist"` folder as the output directory.

#### output.filename

The `output.filename` option specifies how Webpack should name each bundle it creates.

Suppose you are creating only a single bundle via one entry point. In that case, you can specify a static name as the bundle's filename.

**Here's an example:**

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

The `output.filename` option tells Webpack to use `"codesweetly.js"` as the filename of the bundle created after processing `"./src/index.js"`.

Suppose you wish to create multiple bundles through two or more entry points, code splitting, or various plugins. In such a case, it is better to dynamically generate each bundle's filename via any of Webpack's substitutions techniques.

**Note:** Substitutions—in Webpack—refer to using bracketed strings to create [templates](https://webpack.js.org/configuration/output/#template-strings) for filenames.

Let's now discuss the three commonly used substitution techniques.

##### Substitutions technique 1: Entry name

The **"entry name"** substitutions naming technique makes Webpack create each bundle's name by [concatenating](https://www.codesweetly.com/web-tech-glossary#concatenation) a bundle's entry point's name with a given string.

**Here's an example:**

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

The `output.filename` option tells Webpack to create each bundle's filename by concatenating each entry point's name with the `".bundle.js"` string value.

So, for instance, suppose Webpack has finished processing the `promo` entry point (that is, `"./src/promo-module.js"`). In that case, the final bundle's name will be `"promo.bundle.js"`.

Let's now discuss the second substitutions technique.

##### Substitutions technique 2: Internal chunk id

The **"internal chunk id"** substitutions naming technique makes Webpack create each bundle's name by concatenating a bundle's entry point's id with a given string.

**Here's an example:**

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

The `output.filename` option tells Webpack to create each bundle's filename by concatenating each entry point's internal chuck id with the `".bundle.js"` string value.

Let's now discuss the third substitutions technique.

##### Substitutions technique 3: Content hash

The **"content hash"** substitutions naming technique makes Webpack create each bundle's name by concatenating the generated content's hashes with a given string.

**Here's an example:**

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

The `output.filename` option tells Webpack to create each bundle's filename by concatenating each chunk's content hash with the `".bundle.js"` string value.

Keep in mind that Webpack allows you to combine different substitutions—for instance, `filename: "[name].[contenthash].bundle.js"`.

You can also use a function to return a filename like so:

```js
filename: (pathData) => {
  return pathData.chunk.name === "main" ? "[name].js" : "[name].bundle.js";
}
```

Webpack also permits you to initialize the filename property with a folder structure like so:

```js
filename: "codesweetly/[name]/bundle.js"
```

Now, let's discuss the third property developers commonly use within the `output` field.

#### output.clean

As Webpack increasingly generates and saves files into your output directory, it is common to clutter a project's `/dist` folder with unused files.

So, a good practice is to clean your output directory before each build step. By so doing, your `/dist` folder will contain used files only.

Let's see how to do the cleanup below:

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

The `clean` option in the snippet above tells Webpack to clean the project's output directory before each build step.

In other words, Webpack will empty the output directory before it begins each build step.

Therefore, the output directory will contain only the files generated from the compilation process—not any of the old files that Webpack previously saved there.

Let's now discuss another popular configuration option that you can use to alter (or extend) Webpack's default settings.

### module

The `module` field makes Webpack process assets—like CSS files and fonts—as [modules](#what-exactly-is-a-javascript-module) in the dependency graph.

So, suppose you want Webpack to bundle non-JavaScript assets such as images, CSS files, fonts, and so on. In such a case, you can use the `module` option to specify how Webpack should manage those assets before adding them to the dependency graph.

Below are some common ways to use the `module` option.

#### How to use Webpack's `module` option to load CSS stylesheets

Here's how you can use Webpack's module option to load CSS stylesheets:

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

The configuration snippet above used the `module` property to tell Webpack to use `"style-loader"` and `"css-loader"` to load CSS files.

Keep in mind that the loaders' order matters.

In other words, Webpack reads the loaders from right to left. Therefore, it will first execute the `"css-loader"` before the `"style-loader"`.

So, ["css-loader"](https://github.com/webpack-contrib/css-loader) will pass its result (that is, the processed resource) to the `"style-loader"`. Then, ["style-loader"](https://github.com/webpack-contrib/style-loader) will insert the final CSS resource into the `<head>` element of your HTML page.

It is necessary to install the loaders you want Webpack to use in loading your CSS assets.

So, for instance, before Webpack can use the previous configuration file to load ".css" assets, you need to install `"style-loader"` and the `"css-loader"`.

Here's how to install the two loaders:

```bash
npm install style-loader css-loader --save-dev
```

Alternatively, if your package manager is Yarn, run:

```bash
yarn add style-loader css-loader --dev
```

**Note:**

- `"css-loader"` helps to interpret and resolve `@import` and `url()` items such as `import`, `require()`, and `url('./my-image.png')`.
- `"style-loader"` helps to inject a `<style>` tag and the styles derived from `"css-loader"` to your project's HTML file.

Let's now see how to use the `module` option to load images.

#### How to use Webpack's `module` option to load images

Here's how you can use Webpack's `module` option to load images:

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

The configuration snippet above used the module property to tell webpack to load `".png"`, `".svg"`, `".jpg"`, `".jpeg"`, and `".gif"` files as [resource asset modules](https://webpack.js.org/guides/asset-modules/#resource-assets).

So, suppose the following `import` statement is in your script file:

```js
import anyImage from "./your-image.png";
```

In such a case, here's how Webpack will load the image:

1. Webpack will process `your-image.png`.
2. It will add the processed image to your _output_ directory.
3. Webpack will initialize the `anyImage` variable with the processed image's URL.

**Note:** While processing and adding `your-image.png` to the output folder, Webpack will change the image's filename to something like `150b55a1bf7461efb720.png`.

Let's now see how to use the `module` option to load fonts.

#### How to use Webpack's `module` option to load fonts

Here's how you can use Webpack's `module` option to load fonts:

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

The configuration snippet above used the `module` property to tell Webpack to load `".woff"`, `".woff2"`, `".eot"`, `".ttf"`, and `".otf"` files as [resource asset modules](https://webpack.js.org/guides/asset-modules/#resource-assets).

Once you've configured the loader, you can incorporate your fonts via the [@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) CSS declaration.

**Here's an example:**

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

Whenever `css-loader` loads the stylesheet above, it will process the specified fonts and add the processed copies to your project's output directory.

**Note:**

- Webpack will change the processed fonts' filename to something similar to `93911ab167c943140756.ttf`.
- See [Webpack's documentation](https://webpack.js.org/guides/asset-management/#loading-data) to learn how to load JSON, CSV, TSV, and XML files.

Let's now discuss another popular configuration option that you can use to alter (or extend) Webpack's default settings.

### devtool

The `devtool` field tells Webpack to convert a compiled file to the source code format. Therefore, making it easier for you to debug the exact file (and line) where an error occurred in your source code.

**Here's an example:**

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

At compilation time, if Webpack sees a `devtool` property in your configuration script, it will generate a `.js.map` file that the browser will use instead of the `.js` file.

**Note:** There are different [devtool options](https://webpack.js.org/configuration/devtool/) for specifying if and how Webpack should generate the source maps.

Let's now discuss another popular configuration option that you can use to alter (or extend) Webpack's default settings.

### mode

The `mode` field tells Webpack the specific built-in optimization configuration you want it to use to build your output file.

You can specify whether Webpack should use `production`, `development`, or no (`none`) configuration to optimize your bundle. Let's discuss each of the three optimization settings below.

#### Development mode

A `mode: "development"` setting tells Webpack to build an output file for use in the development environment.

**Here's an example:**

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

Setting a `mode: "development"` configuration will make Webpack create a bundle that:

- is fast to build
- is less optimized
- includes comments
- is not minified
- produces helpful error messages
- is easy to debug

Here's an example of a `mode: "development"` bundle:

![A development mode bundle](https://www.freecodecamp.org/news/content/images/2022/05/bundle-development-mode-webpack-codesweetly.png)

Image of a development mode bundle compiled with webpack

To make a non-minified output file readable, ensure Webpack's [devtool](#devtool) field is not `eval`.

Whenever you set the `mode` to `development`, Webpack may default `devtool`'s value to `eval`. So, ensure to select a different `devtool`—like [source-map](https://webpack.js.org/configuration/devtool/#devtool) or disable it by setting its value to `"false"`—whenever you wish to make your output file readable.

Suppose you choose to run Webpack in development mode. In that case, remember to change your configuration to production mode when you are ready to deploy your app.

Now, let's discuss configuring Webpack to build your output file in production mode.

#### Production mode

A `mode: "production"` setting tells Webpack to build an output file for use in the production environment.

**Here's an example:**

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

Setting a `mode: "production"` configuration will make Webpack create a bundle that:

- is slow to build
- is more optimized
- excludes comments
- is minified
- does not produce detailed error messages
- is difficult to debug

Here's an example of a `mode: "production"` bundle:

![A production mode bundle](https://www.freecodecamp.org/news/content/images/2022/05/bundle-production-mode-webpack-codesweetly.png)

Image of a production mode bundle compiled with webpack

**Note:** Webpack [recommends](https://webpack.js.org/guides/production/#source-mapping) having source maps—like `source-map`—enabled in production.

Now, let's discuss configuring Webpack to build your output file without any optimization settings.

#### None mode

A `mode: "none"` setting tells Webpack to build an output file without optimizing it for development or production.

**Here's an example:**

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

Here's an example of a `mode: "none"` bundle:

![A none mode bundle](https://www.freecodecamp.org/news/content/images/2022/05/bundle-none-mode-webpack-codesweetly.png)

Image of a none mode bundle compiled with webpack

#### Important stuff to know about the `mode` option

To make switching between development and production mode easy, you can store the `mode` configurations in the `"scripts"` field of your `package.json` file.

**Here's an example:**

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

The snippet above initialized the scripts' `"dev"` property with Webpack's `development` mode command.

Likewise, we initialized the scripts' `"build"` property with Webpack's `production` mode command.

Therefore, suppose you execute `npm run dev` on your terminal. In that case, Webpack will execute the build step in development mode.

## Overview

This article discussed what a JavaScript module is and how it works. We also discussed how to use a popular module bundler (Webpack) to bundle a project's JavaScript file and its dependencies into a single output file.

And there we have it. I hope you have found this article helpful.

Thanks for reading!

### **And here's a useful ReactJS resource:**

I wrote a book about React!

- It's beginners friendly ✔
- It has live code snippets ✔
- It contains scalable projects ✔
- It has plenty of easy-to-grasp examples ✔

The [React Explained Clearly](https://www.amazon.com/dp/B09KYGDQYW) book is all you need to understand ReactJS.

[![React Explained Clearly Book Now Available at Amazon](https://www.freecodecamp.org/news/content/images/2022/01/Twitter-React_Explained_Clearly-CodeSweetly-Oluwatobi_Sofela.jpg)](https://www.amazon.com/dp/B09KYGDQYW)
