> -   原文地址：[What is npm? A Node Package Manager Tutorial for Beginners 写给初学者的编程教程：什么是 npm？](https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)
> -   原文作者：Stanley Nguyen
> -   译者：@nsuedu
> -   校对者：

![What is npm? A Node Package Manager Tutorial for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2020/06/cover-4.png)

本篇文章是 Node.js 最喜欢的伙伴:npm，的一个基本指南。

自 2009 年以来，Node.js 一直席卷全球。数十万个系统被 Node.js 构建出来，促使开发人员在社区宣称“JavaScript 正在吞噬软件”。

Node 成功的主要因素之一是它受欢迎的软件包管理器-npm，因为 npm 使 JavaScript 开发人员可以快速方便地共享有用的软件包，
例如 [lodash][1] 和 [moment][2]。

在我撰写这篇文章时，npm 已帮助发布了 130 万个软件包，每周下载量超过 160 亿个！ 这些数字对于任何软件工具都非常有用。 因此，现在让我们讨论一下 npm 到底是什么。

## What is NPM

NPM（“Node 包管理器”）是 JavaScript 运行时 Node.js 的默认程序包管理器。

它也被称为“Ninja Pumpkin Mutants”，“Nonprofit Pizza Makers”，以及许多其他随机名称，你可以在 [npm-expansions][3] 上探索它们。

NPM 由两个主要部分组成:

-   用于发布和下载程序包的 CLI（命令行界面）工具
-   托管 JavaScript 程序包的 [在线存储库][4]

为了获得更直观的解释，我们可以将存储库 [npmjs.com][5] 视为一个物流集散中心，该中心从卖方（npm 包裹的作者）那里接收货物的包裹，并将这些货物分发给买方（npm 包裹的用户）。

为了促进此过程，[npmjs.com][6] 物流集散中心雇用了一群勤劳的袋熊（npm CLI），他们将被分配为每个 [npmjs.com][7] 客户的私人助理。 因此，dependencies(依赖项)会如下传递给 JavaScript 开发人员：

![](https://www.freecodecamp.org/news/content/images/2020/06/wombat-install.png)

发布 JS 软件包的过程如下：

![](https://www.freecodecamp.org/news/content/images/2020/06/wombat-publish.png)

让我们看看这只袋熊如何协助想要在项目中使用 JavaScript 包的开发人员。 我们还将看到它们如何帮助开源向导将其出色的库推向世界。

## package.json

Every project in JavaScript – whether it's Node.js or a browser application – can be scoped as an npm package with its own package information and its `package.json` job to describe the project.

We can think of `package.json` as stamped labels on those npm good boxes that our army of Wombats delivers around.

`package.json` will be generated when `npm init` is run to initialise a JavaScript/Node.js project, with these basic metadata provided by developers:

-   `name`: the name of your JavaScript library/project
-   `version`: the version of your project. Often times, for application development, this field is often neglected as there's no apparent need for versioning opensource libraies. But still, it can come handy as a source of the deployment's version.
-   `description`: the project's description
-   `license`: the project's license

### npm scripts

`package.json` also supports a `scripts` property that can be defined to run command-line tools that are installed in the project's local context. For example, the `scripts` portion of an npm project can look something like this:

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

with `eslint`, `prettier`, `ncc`, `jest` not necessarily installed as global executables but rather as local to your project inside `node_modules/.bin/`.

The recent introduction of [npx][8] allows us to run these `node_modules` project-scoped commands just like a globally installed program by prefixing `npx ...` (i.e. `npx prettier --write **/*.ts`).

### dependencies vs devDependencies

These two come in form of key-value objects with npm libraries' names as the key and their [semantic-formatted][9] versions as the value. This is an example from [Github's TypeScript Action template][10]:

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

These dependencies are installed via the `npm install` command with `--save` and `--save-dev` flags. They're meant to be used for production and development/test environments respectively. We will drill deeper into the installation of these packages in the next section.

Meanwhile, it's important to understand the possible signs that come before the semantic versions (assuming you have read up on `major.minor.patch` model of [semver][11]):

-   `^`: latest minor release. For example, a `^1.0.4` specification might install version `1.3.0` if that's the latest minor version in the `1` major series.
-   `~`: latest patch release. In the same way as `^` for minor releases, `~1.0.4` specification might install version `1.0.7` if that's the latest minor version in the `1.0` minor series.

All of these exact package versions will be documented in a generated `package-lock.json` file.

### package-lock.json

This file describes the exact versions of the dependencies used in an npm JavaScript project. If `package.json` is a generic descriptive label, `package-lock.json` is an ingredient table.

And just like how we don't usually read the ingredient table of a product (unless you are too bored or need to know), `package-lock.json` is not meant to be read line-by-line by developers (unless we're desperate to resolve "works in my machine" issues).

`package-lock.json` is usually generated by the `npm install` command, and is also read by our NPM CLI tool to ensure reproduction of build environments for the project with `npm ci`.

## How to effectively command NPM Wombats as a "buyer"

As inferred from the 1.3 million published packages vs 16 billion downloads mentioned earlier, the majority of npm users use npm in this direction. So it's good to know how to wield this powerful tool.

### npm install

This is the most commonly used command as we develop JavaScript/Node.js applications nowadays.

By default, `npm install <package-name>` will install the latest version of a package with the `^` version sign. An `npm install` within the context of an npm project will download packages into the project's `node_modules` folder according to `package.json` specifications, upgrading the package version (and in turn regenerating `package-lock.json`) wherever it can based on `^` and `~` version matching.

You can specify a global flag `-g` if you want to install a package in the global context which you can use anywhere across your machine (this is common for command-line tooling packages like [live-server][12]).

npm has made installing JavaScript packages so easy that this command is often used incorrectly. This results in npm being the butt of a lot of programmers' jokes like these:

![](https://www.freecodecamp.org/news/content/images/2020/06/npm-jokes.png)

This is where the `--production` flag comes to the rescue! In the previous section, we discussed `dependencies` and `devDependencies` meant for usage in production and development/test environment respectively. This `--production` flag is how the differences in `node_modules` are made.

By attaching this flag to the `npm install` command, we will only install packages from `dependencies`, thus drastically reducing the size of our `node_modules` to whatever is absolutely necessary for our applications to be up and running.

Just like how as boy and girl scouts we didn't bring lemon squeezers to our lemonade booth, we shouldn't bring `devDependencies` to production!

### npm ci

So if `npm install --production` is optimal for a production environment, must there be a command that's optimal for my local development, testing setup?

The answer is `npm ci`.

Just like how if `package-lock.json` doesn't already exist in the project it's generated whenever `npm install` is called, `npm ci` consumes this file to download the exact version of each individual package that the project depends on.

This is how we can make sure that the our project's context stays exactly the same across different machines, whether it's our laptops used for development or CI (Continuous Integration) build environments like Github Actions.

### npm audit

With the humongous number of packages that have been published and can easily be installed, npm packages are susceptible to bad authors with malicious intentions like [these][13].

Realising that there was an issue in the ecosystem, the npm.js organisation came up with the [idea][14] of `npm audit`. They maintain a list of security loopholes that developers can audit their dependencies against using the `npm audit` command.

`npm audit` gives developers information about the vulnerabilities and whether there're versions with remediations to upgrade to. For example,

![](https://www.freecodecamp.org/news/content/images/2020/06/npm-audit-result.png)

If the remediations are available in the next non-breaking version upgrades, `npm audit fix` can be used to upgrade the affected dependencies' versions automatically.

## How to effectively command NPM wombats as "seller"

We have gone through how to wield the NPM CLI tool as a consumer, but what about effectively using it as an author (and potentially becoming a JavaScript open source wizard 🥳)?

### npm publish

Sending a package to our [npmjs.com][15] fulfillment centre is super easy as we only need to run `npm publish`. The tricky part, which is **not** specific to npm package authors, is determining the version of the package.

The rule of thumb according to [semver.org][16]:

1.  MAJOR version when you make incompatible API changes,
2.  MINOR version when you add functionality in a backwards compatible manner, and
3.  PATCH version when you make backwards compatible bug fixes.

It's even more important to follow the above rule when publishing your packages to ensure that you're not breaking anyone's code as the default version matching in npm is `^` (aka the next minor version).

## ❤️ npm ❤️ JavaScript ❤️ Node.js ❤️

That's all we need to know to start wielding npm effectively and command our lovely army of wombats!

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
