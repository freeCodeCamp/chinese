> -  原文地址：[How to Configure Metadata for a Single-Page Application](https://www.freecodecamp.org/news/configure-metadata-in-single-page-applications/)
> -  原文作者：[Scott Gary](https://www.freecodecamp.org/news/author/scott-gary/)
> -  译者：Papaya HUANG
> -  校对者：

![How to Configure Metadata for a Single-Page Application](https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/meta-data-for-spa-seo.jpg)

## Why Metadata Matters

元数据是任何现代 Web 应用程序不可或缺的一部分，它与搜索引擎优化(SEO)有着不可分割的联系。

通过元数据，搜索引擎及其各自的结果页面 (SERPS) 才能正确索引和显示每个站点的相关信息。

此外，社交媒体平台展示的内容也是依赖元标记的，例如文章或者待售的商品。

因此，了解现代 web 应用是如何配置元数据尤为重要。

单页应用程序(SPA)是一种非常流行的现代 Web 应用程序实现。今天的大多数框架使用这种实现形式。在当今最流行的 SPA 框架中配置元数据将是本教程的重点。

## 单页应用和元数据

SPA 的天然属性导致与传统多页应用相比，配置元数据变得不那么直观。我将通过以下几个关键点带你来理清这部分内容：

1.  SPA 的结构
2.  在 SPA 中修改元数据面临的问题
3.  针对当前最流行的 SPA 框架：React、Svelte 和 Vue 的元数据解决方案

你必须对 HTML、元数据以及上述一个 SPA 框架有基本的了解，才能理解接下来的内容。但是我会讲解得通俗易懂，所以不必担心。

## 单页应用是如何运作的？

在深入话题之前，让我们分析一下 SPA 是由什么组成的。

顾名思义，单页应用程序是由从服务器发送的单个 HTML 页面组成。这个页面只是一个 HTML 外壳，看起来像这样：

```html
<!DOCTYPE html>
	<html>
		<head>
		<title>Home | Demystifying SPA Metadata</title>
		<meta name="description" content="How to configure popular SPA frameworks to maintain quality site metadata."/>
		<link rel="stylesheet" href="./stylesheet.css" type="text/css"/>
		</head>
		<body>
			<script src="/bundle.min.js" type="text/javascript">	</script>
		</body>
	</html>
```

你可能会好奇一整个网站是如何从一个 HTML 外壳而来的。

这主要归功于客户端的 JavaScript 代码，为每一个页面生成内容，HTML 页面是这些代码的延伸。这些代码包含在`<script>`标签内，该标签位于 HTML 外壳的`body`部分。

## 配置 SPA 元数据面临的挑战

在上一章，我们展示了 HTML 的`head`标签里的内容，这些由`meta`打头的标签就是元数据，包括`title`（标题）标签。

上述代码示例并没有穷举所有元标签，真正使用的更多。但是`title`和描述已经足够我们来理解本教程的内容。

`title`标签是非常重要的元数据，应反映当前页面的相关标题。现在，它和主页是匹配的，但是当用户导航到不同的页面时会发生什么？

**元数据需要相应地改变，而 SPA 框架不会神奇地做到这一点。**

你无法更改原始 HTML，因为每个页面都使用相同的外壳，一旦改变原始 HTML，所有页面的元数据都会发生改变。所以你需要一个聪明的编码策略。

## 用于元数据维护的 SPA 插件

SPA 框架主要专注于将 HTML 注入 DOM 以在屏幕上呈现。这意味着更新 body 标签是框架的核心焦点。因此更新 head 标签往往被忽视。

在 React 等许多 SPA 框架的开发人员社区，人们已经行动起来弥补了这一不足，创建了简化处理元数据过程的库。

这将是本文其余部分的重点——元数据库及其在最流行的 SPA 框架中的使用。

### 修改元数据标签的基本 JavaScript 代码

在深入研究这些元数据库之前，必须要认识到归根结底修改的内容只是代码。因此，让我们看一个修改标题标签和元描述的 JavaScript 代码的基本示例：

```javascript
document.getElementsByTagName('meta')["description"].content = "New meta description!";

document.title = "New Title!";
```

除了这个基本的代码示例之外，以下库将做大量额外的工作。揭开帷幕对事情背后的逻辑一探究竟总不会错。

## React-Helmet – 如何在 ReactJs 中配置 Metadata

React 是一个基于组件的库，用于构建可扩展的 SPA。它具有用来构建高性能应用程序的各种强大功能，但元数据维护不是其中之一。

幸运的是，React 社区的开发人员推出了 react-helmet，这是一个组件库，它极大地简化了在`<head>`标签中修改元数据的过程。

React-helmet 现在已被弃用，取而代之的是更强大的 react-helmet-async。在这里我们不探究弃用背后的原因，但是请注意当大多数团队和开发者谈论 react-helmet，实际上指的是 react-helmet-async。

下面是 react-helmet-async 的基础代码：

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const app = (
	<HelmetProvider>
	<App>
	<Helmet>
	<title>Home | Demystifying SPA Metadata</title>
	<meta name="description" content="How to configure popular SPA 	frameworks to maintain quality site metadata."/>
	</Helmet>
	<h1>Hello World</h1>
	</App>
	</HelmetProvider>
);
```

可以看出，实现过程非常简单：

1.  使用 npm 或者 yarn 安装 react-helmet-async；
2.  由`react-helmet-async`导入 Helmet 和 HelmetProvider；
3.  将整个应用包裹在 HelmetProvider 组件内部；
4.  在 Helmet 组件内部使用标准的 HTML 元标签。

完成上述步骤之后，你就可以在 React 应用中的任何组件中使用 Helmet 组件。

Helmet 旨在让编码更简单。根据文档所述：

> "Helmet 接受并输出纯 HTML 标签。这件事再容易不过了，对 React 新手也十分友好。"

## Svelte-Meta-Tags – 如何在 Svelte 中配置元数据

Svelte 是 SPA 社区的一个可闪耀的新星，并且越来越受到关注。简而言之，使用它的人喜欢它。在 Svelte 修改元数据是通过 svelte-meta-tags 组件库实现的。

在这样的趋势下，熟悉在 Svelte SPA 中如何处理元数据非常重要。

Svelte 也是一种声明性框架，允许直接在应用程序中编写“类 HTML”的代码来抽象大部分繁重的工作。

无需深入了解 Svelte 的与众不同之处以及它的前景被看好（虽然值得一看！），让我们直接进入元数据维护的相关代码：

```html
<script>
import { MetaTags } from 'svelte-meta-tags';
</script>
<h1>
	Metadata in Svelte
</h1>
<MetaTags
	title='Home | Demystifying SPA Metadata'
	description='How to configure popular SPA frameworks to maintain quality site metadata.'
/>
```

使用 svelte-meta-tags 的步骤如下：

1.  使用 npm 或者 yarn 安装 svelte-meta-tags；
2.  导入 MetaTags 组件；
3.  设置每个元数据对应的值。

与 react-helmet 的难度相似，MetaTags 组件对初学者非常友好、易于上手。它支持所有现代元数据标签（有关完整列表，请查看文档）。

## Vue-Meta – 如何在 Vue.js 中配置元数据

Vue 的存在时间比 Svelte 稍长，但仍比 React 年轻差不多一岁。在过去的几年里，Vue 重新流行起来，这就是为什么我选择它作为本文的三大框架之一。

与前两个框架​​一样，Vue 是声明式的和基于组件的。但实现插件库略有不同。让我们来看看。

Vue 使用配置文件**main.js**来初始化应用。由于我们将在整个应用程序中使用 vue-meta 插件，因此我们要在此处导入。

在 Vue 中我们使用`Vue.use()`方法，并且编写如下代码：

```js
//Main.js
import Vue from 'vue';
import VueMeta from 'vue-meta';
import App from './App.vue';

Vue.use(VueMeta);
	new Vue({
	el: '#app',
	render: h => h(App)
});
```

现在我们已经导入了 VueMeta 组件，我们可以通过在任意 Vue 组件中导出**metaInfo**来传送数据。

下面是一个使用 view-meta 插件的 Vue 登陆组件示例：

```html
//Landing.vue
<template>
	<div>SPA Metadata</div>
</template>
<script>
	export default {
		name: 'landing',
		data () {
			return {}
			},
		metaInfo: {
			title: 'Home | Demystifying SPA Metadata',
			description: 'How to configure popular SPA frameworks to maintain quality site metadata.'
			}
		}
</script>
```

每个 Vue 组件都会导出一个供 Vue 应用程序使用的对象，并且由于我们在**main.js**文件中导入了 VueMeta 插件，因此 Vue 将寻找我们从**登陆**组件中导出的`metaInfo`属性。

我们只需要提供一些数据，原标签就会自动生成。

## 总结——SPA、SEO 和元数据

我们分别展示了三大框架的代码示例，每一个都能够得到本教程一开始 HTML 标记语言示例的结果。

在 SPA 应用程序中修改元数据并不像多页应用程序那样简单，即使这些 SPA 框架是动态的。理解这个概念帮助你使用当今层出不穷的 SPA 框架。

元数据是任何现代 Web 应用程序不可或缺的一部分。希望在阅读本教程后，你可以自信地在下一个 SPA 项目中使用它。

对单页应用程序元数据和搜索引擎优化的更多信息感兴趣吗？阅读[SEO for SPA](https://www.ohmycrawl.com/spa-seo/) 完整指南，可以提升你对这个概念的认知水平。
