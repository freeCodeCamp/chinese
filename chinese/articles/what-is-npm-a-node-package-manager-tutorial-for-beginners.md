> -   原文地址：[What is npm? A Node Package Manager Tutorial for Beginners 写给初学者的编程教程：什么是 npm？](https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)
> -   原文作者：Stanley Nguyen
> -   译者：@nsuedu
> -   校对者：

![What is npm? A Node Package Manager Tutorial for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2020/06/cover-4.png)

本篇文章可以作为 npm ( Node.js 最喜欢的伙伴)的一个基本指南。

自 2009 年以来，Node.js 一直席卷全球。数十万个系统被 Node.js 构建出来，促使开发人员在社区宣称“JavaScript 正在吞噬软件”。

Node 成功的主要因素之一是它受欢迎的软件包管理器-npm，因为 npm 使 JavaScript 开发人员可以快速方便地共享有用的软件包，
例如 [lodash][1] 和 [moment][2]。

在我撰写这篇文章时，npm 已帮助发布了 130 万个软件包，每周下载量超过 160 亿个！ 这些数字对于任何软件工具都非常有用。 因此，现在让我们讨论一下 npm 到底是什么。

## What is NPM

NPM（“Node 包管理器”）是 JavaScript 运行时 Node.js 的默认程序包管理器。

它也被称为“Ninja Pumpkin Mutants”，“Nonprofit Pizza Makers”，以及许多其他随机名称，你可以在 [npm-expansions][3] 上探索这些名称。

NPM 由两个主要部分组成:

-   用于发布和下载程序包的 CLI（命令行界面）工具
-   托管 JavaScript 程序包的 [在线存储库][4]

为了获得更直观的解释，我们可以将存储库 [npmjs.com][5] 视为一个物流集散中心，该中心从卖方（npm 包裹的作者）那里接收货物的包裹，并将这些货物分发给买方（npm 包裹的用户）。

为了促进此过程，[npmjs.com][6] 物流集散中心雇用了一群勤劳的袋熊（npm CLI），他们将被分配给每个 [npmjs.com][7] 用户作为私人助理。 因此，dependencies(依赖项)会如下传递给 JavaScript 开发人员：

![](https://www.freecodecamp.org/news/content/images/2020/06/wombat-install.png)

发布 JS 软件包的过程如下：

![](https://www.freecodecamp.org/news/content/images/2020/06/wombat-publish.png)

让我们看看这只袋熊如何协助想要在项目中使用 JavaScript 包的开发人员。 下面我们还将看到它们(npm CLI)如何帮助开源向导将其出色的库推向世界。

## package.json

每个 JavaScript 项目（无论是 Node.js 还是浏览器应用程序）都可以被当做 npm 软件包，并且通过 `package.json` 来描述项目和软件包信息。

我们可以将 `package.json` 视为快递盒子上的运输信息。

当运行 `npm init` 初始化 JavaScript/Node.js 项目时，将生成 `package.json` 文件，文件内的内容(基本元数据)由开发人员提供：

-   `name`: JavaScript 项目或库的名称
-   `version`: 项目的版本.项目的版本。 通常，在应用程序开发中，由于显然没有必要对开源库进行版本控制，因此经常忽略该领域。 但是，它仍然可以作为部署版本的来源方便使用。
-   `description`: 项目的描述
-   `license`: 项目的许可证

### npm scripts

`package.json` 还支持一个 `scripts` 属性，可以把它当做在项目本地运行的命令行工具。 例如，一个 npm 项目的 `scripts`部分可能看起来像这样：

```json
{
    "scripts": {
        "build": "tsc",
        "format": "prettier --write **/*.ts",
        "format-check": "prettier --check **/*.ts",
        "lint": "eslint src/**/*.ts",
        "pack": "ncc build",
        "test": "jest",
        "all": "npm run build && npm run format && npm run lint && npm run pack && npm test"
    }
}
```

使用 `eslint`，`prettier`，`ncc`，`jest` 不一定安装为全局可执行文件，还可以安装在项目本地的 node_modules/.bin/ 中。

最新引入的 [npx][8] 使我们可以像在全局安装程序一样运行这些 `node_modules` 项目作用域命令，方法是在其前面加上 `npx ...`（即`npx prettier --write ** / *。ts`）。

### dependencies vs devDependencies

这两个以键值对象的形式出现，其中 npm 库的名称为键，其[语义格式][9]版本为值。 大家可以看看[Github 的 TypeScript 操作模板][10]中的示例：

```json
{
    "dependencies": {
        "@actions/core": "^1.2.3",
        "@actions/github": "^2.1.1"
    },
    "devDependencies": {
        "@types/jest": "^25.1.4",
        "@types/node": "^13.9.0",
        "@typescript-eslint/parser": "^2.22.0",
        "@zeit/ncc": "^0.21.1",
        "eslint": "^6.8.0",
        "eslint-plugin-github": "^3.4.1",
        "eslint-plugin-jest": "^23.8.2",
        "jest": "^25.1.0",
        "jest-circus": "^25.1.0",
        "js-yaml": "^3.13.1",
        "prettier": "^1.19.1",
        "ts-jest": "^25.2.1",
        "typescript": "^3.8.3"
    }
}
```

这些依赖通过带有 `--save` 或 `--save-dev` 标志的 `npm install` 命令安装。 它们分别用于生产和开发/测试环境。 在下一节中，我们将更深入地研究这些软件包的安装。

同时，理解语义版本前面的符号非常重要（假设你已经阅读[semver][11]的 `major.minor.patch` 模型）：

-   `^`：最新的次要版本。例如，如果 `^1.0.4` 规范是版本 `1` 系列的最新次要版本，则可能会安装版本 `1.3.0`。
-   `〜`：最新的补丁程序版本。与次要版本中的 `^` 相同，如果 `〜1.0.4` 规范是 `1.0` 系列中的最新次要版本，则可能会安装版本`1.0.7`。

所有这些确切的软件包版本都将记录在 `package-lock.json` 文件中。

### package-lock.json

该文件描述了 npm JavaScript 项目中使用的依赖项的确切版本。 如果 `package.json` 是通用的描述性标签，则 `package-lock.json` 是成分表。

就像我们通常不会读取食品包装袋上的成分表（除非您太无聊或需要知道）一样，`package-lock.json` 并不意味着会被开发人员一行一行进行读取（除非 我们迫切希望解决“在我的机器上工作”的问题）。

`package-lock.json` 通常是由 `npm install` 命令生成的，也可以由我们的 NPM CLI 工具读取，以确保使用 `npm ci` 重现项目的构建环境。

## 作为用户，如何有效得使用 NPM

从前面提到的 130 万个发布的软件包中，有 160 亿次下载，可以推断出，大多数 npm 用户都朝这个方向使用 npm 。

### npm install

这是当今我们开发 JavaScript/Node.js 应用程序时最常用的命令。

默认情况下，`npm install <package-name>` 将安装带有 `^` 版本号的软件包的最新版本。 npm 项目上下文中的 `npm install` 将根据 `package.json` 规范将软件包下载到项目的 `node_modules` 文件夹中，从而升级软件包的版本（并重新生成 `package-lock.json` ）。 `npm install <package-name>` 可以基于 `^` 和 `〜` 版本匹配。

如果要在全局上下文中安装程序包，可以在机器的任何地方使用它，则可以指定全局标志 `-g`（例如 [live-server][12]）。

npm 使安装 JavaScript 软件包非常容易，以至于经常错误地使用此命令。 导致一些程序员对 NPM 开这样的玩笑：

![](https://www.freecodecamp.org/news/content/images/2020/06/npm-jokes.png)

但是，NPM 包太大，太深这样的问题可以通过 `--production` 标志来拯救！在上一节中，我们讨论了分别用于生产和开发/测试环境的 `dependencies` 和 `devDependencies` 。 这个 `--production` 标志是如何在 `node_modules` 中进行区别的。

通过将此标志附加到 `npm install` 命令，我们将仅从 `dependencies` 安装软件包，从而将 `node_modules` 的大小大大减小到应用程序正常运行所必需的大小。--不应该将 `devDependencies` 引入生产环境！

### npm ci

因此，如果 `npm install --production` 对于生产环境是最佳选项，那么是否必须有一个对本地环境，测试环境最合适的选项？

答案是 `npm ci`。

就像如果 `package_lock.json` 尚不存在于项目中一样，无论何时调用 `npm install` 都会生成它，`npm ci` 会消耗该文件来下载项目所依赖的每个软件包的确切版本。 。

这样，无论是用于本地开发的笔记本电脑还是 Github Actions 等 CI（持续集成）构建环境，我们都可以确保项目上下文在不同机器上保持完全相同。

### npm audit

随着越来越多的软件包发布，并且易于安装，因此 npm 软件包容易受到恶意作者的恶意攻击，例如[这些][13]。

意识到生态系统存在问题，npm.js 组织提出了 `npm audit` 的[idea][14]。 他们维护了一个安全漏洞列表，开发人员可以使用 `npm audit` 命令来审核项目中的依赖项。

`npm audit` 为开发人员提供了有关漏洞以及是否有要修复的版本的信息。 例如，

![](https://www.freecodecamp.org/news/content/images/2020/06/npm-audit-result.png)

如果补救措施在下一个不间断的版本升级中可用，则可以使用 `npm audit fix` 来自动升级受影响的依赖项的版本。

## 作为作者，如何有效得使用 NPM

我们已经了解了作为用户，如何通过 NPM CLI 有效得使用 NPM，但是作为作者又如何使用 🥳 呢？

### npm publish

将软件包发送到 [npmjs.com][15] 非常容易，因为我们只需要运行 `npm publish` 。 棘手的部分（并非专门针对 npm 软件包作者）是确定软件包的版本。

根据 [semver.org][16] 的经验法则：

1. 当你进行不兼容的 API 更改时的 MAJOR 版本，
2. 以向后兼容的方式添加功能时的 MINOR 版本，并且
3. 进行向后兼容的 bug 修复时的 PATCH 版本。

在发布软件包时，遵循上述规则尤为重要，以确保您不会破坏任何人的代码，因为 npm 中匹配的默认版本是`^`（又称下一个次要版本）。

## ❤️ npm ❤️ JavaScript ❤️ Node.js ❤️

以上就是我们开始有效地使用 npm 并指挥我们可爱的袋熊大军所需要的一切！

![](https://www.freecodecamp.org/news/content/images/2020/06/wombats.png)

[1]: https://www.npmjs.com/package/lodash
[2]: https://www.npmjs.com/package/moment
[3]: https://github.com/npm/npm-expansions
[4]: https://www.npmjs.com/
[5]: https://npmjs.com/
[6]: https://npmjs.com/
[7]: https://npmjs.com/
[8]: https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/
[9]: https://semver.org/
[10]: https://github.com/actions/typescript-action
[11]: https://semver.org/
[12]: https://github.com/tapio/live-server
[13]: https://medium.com/@jsoverson/how-two-malicious-npm-packages-targeted-sabotaged-one-other-fed7199099c8
[14]: https://blog.npmjs.org/post/173719309445/npm-audit-identify-and-fix-insecure
[15]: https://npmjs.com/
[16]: https://semver.org/
