> - 原文地址：[Learn the basics of the JavaScript module system and build your own library](https://www.freecodecamp.org/news/anatomy-of-js-module-systems-and-building-libraries-fadcd8dbd0e/)
> - 原文作者：Kamlesh Chandnani
> - 译者：nsuedu
> - 校对者：

# 了解 JavaScript 模块系统的基础知识，并建立自己的库(译)🍜

![](https://cdn.nlark.com/yuque/0/2020/jpeg/382504/1598578644749-8ce35e9b-db18-4583-be2d-ea52de81e21b.jpeg#align=left&display=inline&height=450&margin=%5Bobject%20Object%5D&originHeight=450&originWidth=800&size=0&status=done&style=none&width=800)

身为“前端工程师“，我想很多人都听过说过“JavaScript 模块”。那你们每个人都知道如何处理它，以及它在日常工作中如何发挥作用吗？

## JS 模块系统到底是什么呢？

随着 JavaScript 开发越来越广泛，命名空间和依赖项变得越来越难以处理。极客们早已经开发出不同的 `模块系统` 解决方案来解决该问题。

![image.png](https://cdn.nlark.com/yuque/0/2020/png/382504/1601263351329-2d46a3b3-c8d2-4d8c-9fd3-a918dcf65325.png#align=left&display=inline&height=360&margin=%5Bobject%20Object%5D&name=image.png&originHeight=360&originWidth=792&size=331394&status=done&style=none&width=792)

## 为什么理解 JS 模块系统很重要？

我的日常工作是设计和项目架构，并且我很快意识到跨项目需要许多通用功能。 我总是一次又一次地将这些功能复制粘贴到新项目中。

问题是，每当更改一部分代码时，我都需要在所有项目中手动同步这些更改。 为了避免所有这些繁琐的手动任务，我决定 `提取通用功能并从中组成一个NPM软件包` 。 这样，团队中的其他人将能够将它们重新用作依赖项，并在每次推出新版本时都可以对其进行更新。  
 这种方法具有一些优点：

- 如果核心库中有一些更改，则只需在一个地方进行更改，而无需为同一件事重构所有应用程序的代码。
- 所有应用程序保持同步。无论何时进行更改，所有应用程序仅需要运行 `npm update` 命令。

![image.png](https://cdn.nlark.com/yuque/0/2020/png/382504/1601263710161-bb1c81cb-3fa3-4f0a-b652-2e891a801c48.png#align=left&display=inline&height=441&margin=%5Bobject%20Object%5D&name=image.png&originHeight=441&originWidth=315&size=26560&status=done&style=none&width=315) Source code of library 因此，下一步是发布**library**。

这是最困难的部分，因为我脑海中突然跳出一堆东西，例如：

1. 如何使用 tree shakeable？
2. 应该针对哪些 JS 模块系统（CommonJS, AMD, ES modules）。
3. Should I transpile the source?-应该编译源码吗？
4. Should I bundle the source?-应该打包源码吗？
5. 应该发布哪些文件？

在发布第三方库(组件库，工具库)时，我们每个人的脑海中都应该冒出这些问题。

来， 我们一步步解决以上的问题。

## 不同类型的 JS 模块系统

### 1. CommonJS

- 由 `Node.js` 实现。
- 在安装模块时用于 `服务器端`
- 没有 runtime/async 模块
- 通过 `require` 导入模块
- 通过 `module.exports` 导出模块
- When you import you get back an object(导入时，您将获得一个对象)
- No tree shaking, because when you import you get an object(无法使用 `tree shaking` ，因为在导入时会得到一个对象)
- No static analyzing, as you get an object, so property lookup is at runtime(当您获得对象时，无需进行静态分析，因此属性查找在运行时进行)
- You always get a copy of an object, so `no live changes` in the module itself(您总是会得到一个对象的副本，因此模块本身不会实时更改)
- 循环依赖管理不优雅
- 语法简单

### 2. AMD: Async Module Definition 异步模块定义

- 由 `RequireJS` 实现
- 当你在 `客户端（浏览器）环境` 中，异步加载模块时使用
- 通过 `require` 实现导入
- 语法复杂

### 3. UMD: Universal Module Definition 通用模块定义

- `CommonJS + AMD` 的组合（即 CommonJS 的语法+ AMD 的异步加载）
- 可以用于 `AMD/CommonJS` 环境
- UMD 还支持全局变量定义。因此，UMD 模块能够在 `客户端和服务器` 上工作。

### 4. ES modules（ES6）

- 用于 `服务器/客户端`
- 支持模块的 `Runtime/static loading`
- When you `import`, you get back `bindings value` (actual value)--import 时，获得是绑定值（实际值）
- 通过 `import` 导入，通过 `export` 导出
- `Static analyzing` 静态分析

  > You can determine imports and exports at compile time (statically) — you only have to look at the source code, you don’t have to execute it

- `Tree shakeable`, because of `static analyzing` supported by ES6(由于 ES6 支持静态分析，因此 Tree Shaking 是可行的)
- Always get an `actual value` so `live changes` in the module itself(始终获取实际值，以便实时更改模块本身)
- 比 CommonJS 有更好的循环依赖管理

  现在，我们了解了不同类型的 JS 模块系统以及它们如何演变。  
  尽管所有工具和现代浏览器都支持 `ES modules`，但我们在发布库时不知道用户如何利用我们的库。 因此，我们必须确保我们的库在所有环境中都能正常工作。  
  让我们深入研究并设计一个示例库，以适当方式来回答，与 publishing a library(发布库)有关的所有问题。  
  我已经建立了一个小型的 UI 库（您可以在[GitHub](https://github.com/kamleshchandnani/js-module-system)上找到源代码），并且我将分享我在编译，打包和发布中的所有经验和探索。 ![image.png](https://cdn.nlark.com/yuque/0/2020/png/382504/1601287937609-fcb4d742-e266-42c3-b5bc-f327c7f0bb0b.png#align=left&display=inline&height=343&margin=%5Bobject%20Object%5D&name=image.png&originHeight=343&originWidth=269&size=21567&status=done&style=none&width=269) Directory Structure

在这里，我们有一个小的 UI 库，其中包含 3 个组件：Button，Card 和 NavBar。 让我们一步步进行编译并发布。

## 发布前的最佳实践

### 1. Tree Shaking

[webpack 官方文档有说明](https://www.webpackjs.com/guides/tree-shaking/)

> _tree shaking_ 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块系统中的[静态结构特性](http://exploringjs.com/es6/ch_modules.html#static-module-structure)，例如 [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) 和 [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)。这个术语和概念实际上是兴起于 ES2015 模块打包工具 [rollup](https://github.com/rollup/rollup)。
> 新的 webpack 4 正式版本，扩展了这个检测能力，通过 `package.json` 的 `"sideEffects"` 属性作为标记，向 compiler 提供提示，表明项目中的哪些文件是 "pure(纯的 ES2015 模块)"，由此可以安全地删除文件中未使用的部分。

webpack 和 Rollup 都支持 Tree Shaking，这意味着我们需要牢记某些事情，以便我们的代码可被 Tree Shaking。

### 2.Publish all module variants(发布所有模块形态)

- 我们应该发布所有模块形态，例如 `UMD` 和 `ES`，因为我们永远不知道我们的使用者在哪个浏览器/ webpack 版本中使用此库/包。
- 即使所有打包程序（如 `webpack` 和 `Rollup` ）都能解析 ES 模块，但如果我们的使用者使用的是 webpack 1.x，则它无法解析 ES 模块。

```json
// package.json
{

  "name": "js-module-system",
  "version": "0.0.1",

  "main": "dist/index.js",
  "module": "dist/index.es.js",

  ......

}
```

- `package.json`文件的 `**mian**`\*\* **字段通常用于指向`**UMD\*\*`版本的 library/package(库/包)。
- `package.jso`**n**文件的 `**module**`\*\* **字段用于指向`**ES\*\*`版本的 library/package。

> **鲜为人知的事实**：webpack 使用[resolve.mainfields](https://webpack.docschina.org/configuration/resolve/#resolvemainfields)确定检查`package.json`中的哪些字段。

> **性能提示**：由于所有现代浏览器现在都支持`**ES**`**模块**，因此也请务必发布`**ES**`**版本**的 library/package。 这样一来，可以减少编译次数，最终可以减少向用户交付的代码。 这将提高应用程序的性能。

那么，下一步是什么？ 编译还是打包？ 我们应该使用什么工具？ 啊，这是最棘手的部分！ 让我们深入研究研究。

## webpack vs Rollup vs Babel

webpack, Rollup, Babel。 这些我们在日常工作中使用的工具，用于承载我们的应用程序/库/软件包。 没有它们，我无法想象现代的 Web 开发有多么糟糕。 因此，我们无法将它们进行比较 ❌  
 每种工具都有其自身的优势，并根据使用者的需求达到不同的目的。  
 现在让我们看一下这些工具：

### webpack

[webpack](https://webpack.docschina.org/concepts/)是一个很棒的模块打包工具， 它被广泛接受并且主要用于构建 SPA。 它提供了开箱即用的所有功能，例如  [code splitting](https://webpack.docschina.org/guides/code-splitting/), [async loading of bundles](https://webpack.docschina.org/guides/code-splitting/#dynamic-imports),[ tree shaking](https://webpack.docschina.org/guides/tree-shaking/)等等。 并且它本身使用的是**CommonJS**模块系统。  
 PS：[webpack-4.0.0 Alpha](https://github.com/webpack/webpack/issues/6064)已经淘汰了。 希望随着稳定版的发布，它将成为所有类型模块系统的通用打包工具。

### RollupJS

[RollupJS](https://rollupjs.org/guide/en/)还是类似于 webpack 的模块打包器。 但是，RollupJS 的主要优点是它遵循 ES6 修订版中包含的代码模块的新标准化格式，因此您可以使用它来打包 **ES module variant**的 library/package。 但它不支持[async loading of bundles](https://webpack.docschina.org/guides/code-splitting/#dynamic-imports)。

### Babel

[Babel](https://babeljs.io/docs/en/)是 JavaScript 的编译器，以将 ES6 代码转换为可在您的浏览器（或服务器）中运行的代码而闻名。 请记住，它只是编译而不会打包您的代码。

**我的建议：对库使用 Rollup.js，对应用程序使用 webpack。**

## 编译（Babel-ify）源代码还是直接打包源代码?

在构建我的 NPM 库时，我花费了大量时间来试图找出该问题(如何编译?如何打包)的答案。 我开始挖掘自己的 node_modules，查找所有优秀的库并检查它们的构建系统。 ![](https://cdn.nlark.com/yuque/0/2020/jpeg/382504/1601307983717-4b8d6813-e140-4082-b9de-cd3b150e1056.jpeg#align=left&display=inline&height=400&margin=%5Bobject%20Object%5D&originHeight=400&originWidth=800&size=0&status=done&style=none&width=800) Libraries vs Packages build output comparision

在查看了不同 libraries/packages 的构建输出之后，我清楚地了解了这些库的作者在发布之前可能会想到的不同策略。 以下是我的观察。  
 如您在上图中所看到的，我已根据它们的特性将这些库/软件包分为两组：

- UI Libraries-UI 库（`styled-components`, `material-ui`）
- Core Packages-核心包（`react`，`react-dom`）

  如果您是一个好观察者？ 您可能已经弄清楚了这两组之间的区别。  
  **UI Libraries**

- 有一个`**dist**`文件夹，该文件夹是针对\*\* **`**ES 和 UMD/CJS**`**模块系统 \*\*的打包和压缩版本。
- 有一个`**lib**`文件夹，用来存放被编译后的代码。

  **Core Packages**

- 只有一个文件夹，其中包含针对`**CJS或UMD**`**模块系统**的打包和压缩版本。

  但是，为什么 UI Libraries 和 Core Packages 的构建输出有所不同？？

## UI Libraries

想象一下，如果我们只是发布库的 bundled version  将其托管在 CDN 上。 我们的用户将直接在`<script />`标记中使用它。 现在，如果使用者只想使用`<Button />`组件，则他们必须加载整个库。 另外，在浏览器中，没有可以解决 tree shaking 的打包工具，最终我们会将整个库代码发送给我们的使用者。 因此，我们不能像如下代码引入整个库文件\*\*

```html
<script type="module">
  import { Button } from "https://unpkg.com/uilibrary/index.js";
</script>
```

现在，如果我们只是简单地将 src 转换为 lib 并将该 lib 托管在 CDN 上，那么我们的使用者实际上可以得到他们想要的任何东西而没有任何开销。 “代码更少，加载更快”。 ✅

```html
<script type="module">
  import { Button } from "https://unpkg.com/uilibrary/lib/button.js";
</script>
```

## Core Packages

Core Packages(核心软件包)永远不会通过 `<script />` 标记使用，因为它们必须是主应用程序的一部分。 因此，我们可以安全地发布这些软件包的 bundled version（**UMD，ES**），并将构建系统交给用户使用。  
 例如，他们可以使用 **UMD** 形态而不使用 tree shaking，或者如果打包器能够识别并获得 tree shaking 的好处，则可以使用**ES**形态。

```JavaScript
// CJS require
const Button = require("uilibrary/button");

// ES import
import { Button } from "uilibrary";
```

但是……关于我们的问题是什么：should we **transpile (Babelify) the source or bundle it**？？  
 **对于 UI 库**

- 当我们针对 `es` 模块系统构建时，需要**Babel**编译源代码，并将编译后的代码放置在 `lib` 文件夹中。 我们甚至可以将 lib 托管在 CDN 上。
- 当我们针对 `cjs/umd` 模块系统和 `es` 模块系统 等多个模块系统构建时，需要**rollup** 📦 打包和压缩代码。

  下面我们修改 `package.json` 以指向对应的模块系统。

```json
// package.json
{
  "name": "js-module-system",
  "version": "0.0.1",

  // for umd/cjs builds
  "main": "dist/index.js",

  // for es build
  "module": "dist/index.es.js"
}
```

对于**core packages** 我们不需要`lib`版本。我们只需要针对 `cjs / umd`模块系统和`es`模块系统，使用**rollup ** 进行 📦 打包和压缩源代码即可。  
 提示：对于愿意通过`<script />`标记下载整个库/软件包的用户，我们也可以在 CDN 上托管`dist`文件夹。

## 我们怎么进行打包?

我们应在在 `package.json ` 中为了不同的目的编写不同的脚本. 你能在 GitHub 上面找到 Rollup 的一些配置- [rollup config](https://github.com/kamleshchandnani/js-module-system/blob/master/rollup.config.js)

```json
// package.json
{
  "scripts": {
    "clean": "rimraf dist",
    "build": "run-s clean && run-p build:es build:cjs build:lib:es",
    "build:es": "NODE_ENV=es rollup -c",
    "build:cjs": "NODE_ENV=cjs rollup -c",
    "build:lib:es": "BABEL_ENV=es babel src -d lib"
  }
}
```

## 我们应该发布哪些东西?

- License
- README
- Changelog
- Metadata(`main` , `module`, `bin`) — **package.json**
- Control through **package.json** `files` property

  在 `package.json` 中, the `"files"` 字段是一个数组类型 ，用来指示 软件包被当做第三方依赖安装时，都有哪些文件或文件夹需要下载到业务项目中。 如果你在数组中加入了一个文件夹，那么在你 `npm install` 时, 文件夹及下面的文件都会被下载。  
  在我的案例项目中， 我在 `"files"` 中加入了 `lib` and `dist ` 文件夹

```json
// package.json

{
  "files": ["dist", "lib"]
}
```

最后，终于可以准备发布了。 只需在终端中键入`npm run build`命令，您将看到以下输出。 仔细查看`dist`和`lib`文件夹都有哪些东西  
 ![](https://cdn.nlark.com/yuque/0/2020/png/382504/1601310388715-9064e947-3a46-44cf-8ce4-728b4d521287.png#align=left&display=inline&height=215&margin=%5Bobject%20Object%5D&originHeight=215&originWidth=240&size=0&status=done&style=none&width=240) Ready to publish ?

## 总结

至此，我们已经了解了 JavaScript 模块系统以及如何创建自己的库并发布它。 下面是一些注意事项：

1. 是否可以启用 Tree Shaking？
1. 至少需要构建 **ES modules** and **CJS** 两种模块系统
1. Use** Babel **and **Bundlers** for libraries.
1. Use** Bundlers** for Core packages.
1. 在 `package.json` 中使用 `module 字段` 来构建 es 版本的模块 (PS: 这有助于使用 tree shaking).
1. 发布已编译的文件夹以及模块的**bundled** versions
