> - 原文地址：[Intro to Deno – Guide for Beginners](https://www.freecodecamp.org/news/intro-to-deno/)
> - 原文作者：[Brian Barrow](https://www.freecodecamp.org/news/author/brian/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Intro to Deno – Guide for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/Screen-Shot-2022-09-07-at-4.09.00-PM.png)

## 什么是 Deno?

Deno 是一个新的 JavaScript 运行时。它是由 Node.js 的创建者 Ryan Dahl 建立的。

Dahl 对 Node 的一些做法感到遗憾，他想建立一个能够解决这些问题的运行时。Deno 和 Node 一样，建立在 V8 JavaScript 引擎上，但使用 Rust 而不是 C++构建。

Deno 的主要目标之一是使服务器端的 JavaScript 更接近浏览器的 JavaScript。

如果你在 Node 和浏览器的 JavaScript 中都写过，那么你肯定遇到过各自空间中使用的 API 的差异。Deno 旨在使服务器上的 API 与你在浏览器中使用的 API 相同。我们将在后面深入研究这方面的具体例子。

## Deno 的主要功能

### Deno 使用 TypeScript

Deno 最吸引人的特点之一是，它把 TypeScript 当作开箱即用的第一类语言。这意味着你可以运行或使用 TypeScript 而无需安装任何其他外部或第三方软件包。它只是工作。

TypeScript 在 JavaScript 世界里越来越受欢迎，很多工具和公司都在推动使用它。看到像 TypeScript 这样的新的进步技术得到更多的关注是非常酷的，在 Deno 这样的大项目中获得一流的地位是一个巨大的进步。

### Deno 默认是安全的

Deno 默认是安全的。这意味着，除非脚本被特别允许，否则它不能访问系统文件、环境（如环境变量）或网络。

为了允许访问这些功能，你需要在 CLI 命令中传递相应的标志。以下是一些你最常使用的功能。:

- **网络访问**: `--allow-net`, 你还可以指定代码允许访问哪些 URL。比如说: `--allow-net=https://api.deepgram.com`
- **文件访问**: `--allow-read`
- **环境变量访问**: `--allow-env`

### Deno 的浏览器兼容性

就像我上面提到的，Deno 努力使其拥有与浏览器相同的 API。在我看来，其中最大的是对 [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)的支持。

这些天，在我写的大多数 JavaScript 中，我都使用了 `fetch` API。能够在我的服务器端代码中使用相同的语法，使我的工作效率提高了很多，而且使上下文切换的负荷大大降低。

## 包管理

Deno 没有一个软件包管理工具。Node 使用 `npm` 来加载第三方软件包到你的项目中，但 Deno 通过 URL 来加载模块。

老实说，我一开始对此感到很困惑。在 Node 和 npm 中长大的我对没有某种包管理器或 `package.json` 文件感到奇怪。

Deno 允许软件包开发者将他们的代码托管在他们想要的地方，而不是这种集中式的注册表。如果代码托管在 GitHub 上，你可以在他们的 [托管服务](https://deno.land/x) 上注册你的模块，在那里它被缓存。这使得开发人员更容易找到和使用该模块。

## ES 模块

Deno 也使用 ES 模块，不支持 `require()` 语法。同样，我现在写的大部分 JavaScript 都使用了这样的现代功能，所以不用担心我是否使用了正确的语法，这很好，这取决于我为哪个环境编码。

## 标准库

Deno 带有一个 [标准库](https://deno.land/std@0.138.0)，其中包含 Deno 团队审核过的功能。这使得开始使用 Deno 变得非常容易。

没有必要去寻找第三方软件包来做服务器端代码中需要的相当基本的事情。作为一个开发者，知道我使用的代码是由 Deno 团队正式支持和批准的，这让我很欣慰。

### 测试模块

包含在标准库中的一个模块是 [测试模块](https://deno.land/std@0.109.0/testing)。这个模块使得在 Deno 中编写测试更加容易，并且会使它们在不同的项目中更加一致。

这可能不是每个人都喜欢的，特别是如果有些人对测试库有强烈的意见。但我真的很喜欢它。随着 Deno 的不断发展，各项目间的一致性将使维护代码和切换项目更加容易。

## Deno 与 Node 的对比

围绕 Deno 的最大问题是它与 Node 的比较。

与 Node 相比，Deno 显然具有一些优势。默认情况下是安全的，这无疑是一个有吸引力的功能，而开发者会把对 TypeScript 的开箱即用的支持视为一个巨大的胜利。

另一方面，Node 有一个非常丰富的社区，有一个成熟的生态系统和第三方软件包，使它更容易启动和运行。随着[Deno 宣布将支持大多数 npm 包](https://deno.com/blog/v1.25#experimental-npm-support)，我可以看到人们很快就会转向 Deno。

Deno 最近还发布了 [Deno Deploy](https://deno.com/deploy) 公测版。 这将允许用户在边缘快速部署 JavaScript 代码。 随着时间的推移，这项服务可能会给 Deno 公司带来优势并扩大用户群。

## 总结

在过去的几个月中，我与 Deno 的合作经历非常有趣。我很喜欢和它一起工作，也很高兴看到它的未来。

在接下来的几周里，我将写几篇文章，深入探讨 Deno 的世界。
