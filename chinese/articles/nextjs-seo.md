> - 原文地址：[Next.js SEO for Developers – How to Build Highly Performant Apps with Next](https://www.freecodecamp.org/news/nextjs-seo/)
> - 原文作者：[Scott Gary](https://www.freecodecamp.org/news/author/scott-gary/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Next.js SEO for Developers – How to Build Highly Performant Apps with Next](https://www.freecodecamp.org/news/content/images/size/w2000/2023/03/pexels-andrei-photo-2127783.jpg)

Next.js 是一个流行的基于 React 的网络框架，近年来获得了流行和不断增长的社区。它是一个强大的工具，用于构建快速和对 SEO 友好的网络应用，其动态页面在移动设备上运行良好。

由于同构系统设计的复杂性质，Next.js 的 SEO 可能是一个棘手的话题，让你头疼。特别是如果你来自传统的 React 应用程序，而且你只依赖文档。

凭借其对服务器端渲染、静态网站生成以及现在的 React 服务器组件的内置支持，Next.js 提供了一个强大的平台，可以在你的网络应用中实现高质量的 SEO 网络指标。它还可以帮助你在 Node 和 React 应用程序中的多个页面上提供卓越的用户体验，同时使它们对 SEO 友好。

## 为什么要学习 NextJS 用于前端开发？

简而言之，最新版本的 NextJS 是一个开源平台，解决了 React 目前存在的很多渲染问题。我写这篇文章是因为很多前端开发者对我很生气:-D。

他们花了 6-9 个月开发一个 React App，然后我不得不要求他们重构代码。

Next.js 避免了很多渲染问题。它让搜索引擎非常容易理解你的网站是怎么回事。

### 谁会从这篇文章中得到最大的收获？

如果你是一个营销人员或遇到 SEO 问题的更高级的开发人员，这将对你很有帮助。

然而，也欢迎新的开发者查看这些信息，因为它将对你有长期的帮助。

## 你应该如何渲染你的下一个 JS 网页应用程序？

我个人从我的咨询公司[OhMyCrawl](https://www.ohmycrawl.com/)查看了大量的这些网站，并制作了一个视频概述，以帮助了解使用 Next.js 等框架对 SEO 的好处：

## Next SEO 与其他框架有什么不同？

Next SEO 通过将如此多的功能和免费工具精简到一个组织良好的软件包中，使你可以轻松地消化和应用于你的单页应用，从而使自己与众不同。当涉及到搜索引擎优化、图像优化和最小化累积布局转移等任务时，Next 做得很好。

Next.js SEO 的好处还不止于此。我们将介绍 Next.js 带来的许多与搜索引擎有关的好东西，无论新旧。

## 搜索引擎、SSR 和 SSG 的概念在不断发展

大多数开发者和 SEO 专家已经对现有的页面创建策略和整个 SSR 与 SSG 范式感到相当满意。他们也对 Next.js 的第 12 版产生了高度的信任，该版本提供了一个清晰的方式来处理这两种形式的页面生成。

不过，像往常一样，另一个网络应用模式的转变正在进行中，这次是以 React 服务器组件（RSCs）的形式出现的，Next.js 第 13 版中默认包含了这些组件。

### SEO 的概念没有改变--只是方法改变了

Nextjs SEO 在概念上不会有太大变化。如果你想获得良好的搜索引擎结果和流量增长，关键仍然是快速载入页面、快速渲染、低累积布局变动等等。静态页面仍然扮演着重要角色。

但是，Next.js 提供了一些非常棒而独特的功能，可以帮助我们实现出色的搜索引擎指标，它不仅仅是 React Server Components。

我们将探讨一些最佳实践，以及使用 Next.js 实现出色的 SEO 优化网络指标的不同技术和策略。我们还将看到如何利用它独特的功能来提高网站的搜索引擎可见性(网页里优先显示)和用户参与度。

## Next.js 13 有哪些与 SEO 相关的新内容？

我们不会给你一个关于第 13 版技术变化的全面指南，而是主要关注 Next JS 的 SEO 相关优势。我们还将探讨如何利用最佳的 SEO 实践，在搜索引擎中取得尽可能好的结果，而且比通常所需的汗水少得多。

我们将在这里讨论的 Nextjs 13 变化如下：

- React 服务器组件
- UI 的 流动块 (Streaming UI chunks)
- 升级的 Next 图片组件
- Next 字体组件

除了 Next.js 默认的 SEO 属性外，这些特定的升级是 Next.js 版本 13 中 SEO 改进的基石。每个升级都有其自身的优点，我们将很快逐个介绍。

### React 服务器组件

RSCs 允许在客户端和服务器上采用更精细的渲染方式。

React 允许开发者选择组件是在服务器上还是在客户端渲染，而不是在用户请求时被迫决定在客户端还是服务器上渲染整个页面。这可以让你在搜索引擎结果页面中获得巨大优势。

如今，绝大多数的页面优化都是围绕着减少向客户端发送 JavaScript。毕竟，这是使用预渲染和服务器端渲染来创建网页和 HTML 页面的主要好处。

RSC 是帮助实现这一目的的另一个工具，并从你的网页或单页应用程序中获得尽可能多的 SEO 价值。这有助于通过刷新 React 组件中的动态数据，同时保持页面内容的静态部分不变，从而实现更好的 SEO。

### 流式 UI 块

Next.js SEO 在添加 RSC (React Server Components) 的同时，迈出了一大步，而流式 UI(Streaming UI) 代码块则是锦上添花。流式 UI 是一个类似的新兴设计模式，称为 `岛屿架构(the island architecture)`，旨在在首次加载时尽量向客户端发送最少的代码。

允许细粒度的控制非常好，但为什么不向客户端发送一个无需 JavaScript 的完全渲染的页面，然后再发送剩余的内容呢？这正是流式 UI 代码块所实现的目标。

当 Next.js 在服务器端渲染页面时，通常会将页面的所有 JavaScript 捆绑并与之一起发送。而流式 UI 代码块的引入消除了这种需要，允许向客户端发送一个非常小的静态页面，显著改善了诸如首次内容呈现时间和整体页面速度等网络指标。

### Next.js 13 App 目录

当你启动一个新的 Next.js 13 项目时，你会注意到一个名为\**app*的新目录。在 app 目录下的所有东西都是预先配置好的，以允许 RSCs 和流媒体 UI 块的出现。你只需要创建一个[loading.js](https://beta.nextjs.org/docs/routing/loading-ui)组件，它将完全包住页面组件和悬念边界内的任何子节点。

你可以通过自己手动创建悬念边界来实现更精细的加载模式，基本上可以无限地控制初始请求时加载的内容。

流式 UI 代码块的步骤大致如下：

用户发起初始请求。
渲染并发送基本的 HTML 页面给客户端。
服务器准备 JavaScript 捆绑文件。
在客户端浏览器中显示需要 JavaScript 的页面部分。
仅将该组件所需的 JavaScript 捆绑文件发送给客户端。
这种新的工具对于技术性 SEO 具有重要影响，它使得更具交互性的页面能够与静态页面竞争，提高页面载入速度和其他在搜索引擎中用作排名因素的网络指标。

### 升级的 Next Image 组件

Next.js SEO 领域的另一个重要升级是图片组件(Image component)。虽然它被低估了，但在我看来，最大的改进是利用了原生的懒加载。

浏览器对本地懒加载的支持已经有一段时间了，为这个功能添加额外的 JavaScript 只是浪费带宽而已。

其他一些对 SEO 有很大帮助的改进是：

- 默认需要 alt 标签。
- 更好的验证，以确定涉及无效属性的错误。
- 由于有了一个更像 HTML 的界面，更容易进行样式设计。

总的来说，新的图片组件被简化和精简了，而在编程领域，简单的东西几乎总是更好。

### Next Font 组件

字体组件(font component)对 Next.js 的 SEO 来说是一个巨大的胜利，它肯定会帮助减轻未来的许多头痛问题。任何有经验的开发者都知道，正确配置字体是多么繁琐的事情（在这种情况下，正确不是相对的！）。

由于加载缓慢而导致的累积布局转移是一个常见的困扰，像谷歌这样的搜索引擎已经[公开表示](https://developers.google.com/publisher-tag/guides/minimize-layout-shift)，CLS 是一个重要的网络指标。(CLS 是 Cumulative Layout Shift 的缩写，衡量在网页的整个生命周期内发生的所有意外布局偏移的得分总和。)

根据你所使用的框架（我想到的是 Gatsby），让你的字体有效地预加载可能是很棘手的。一段时间以来，向谷歌等字体库发出外部请求是一个避免不了的丑陋行为，在许多 SPA 应用程序中造成了一个难以管理的瓶颈。

Next Font Component 旨在解决这个问题，它在构建时获取所有的外部字体，并从你自己的域中自我托管它们。字体也被自动优化，并且通过自动利用 CSS **size-adjust(大小调整)** 属性实现了零累积的布局转移。

## 用 Next.js 完成与 SEO 相关的常见任务

为 Next.js 13 配置常见 SEO 任务时，有几个重要的议题需要考虑。

### Next.js 13 的 SEO

Nextjs 的 React Head 组件通常被用来给文档头部的(Head)元标签赋值，也可以用来注入结构化数据。

然而，Nextjs13 中，Head 组件就不复存在了。起初，Next 选择利用一个名为 **head.js** 的特殊文件，其工作方式与 Head 组件类似。在 13.2 版本之后，Next 实现了**Metadata**组件，这是一个更专有的实现，通过轻松填充元标签来解决元数据问题。

让我们仔细看看这两个常见的 SEO 任务，并检查它们过去是如何处理的，而不是新的 13 版的方式。

## 如何为搜索引擎优化配置头部标签(head tag)

在 13 版之前，我们会导入 **Next/Head** 组件，并在网页的 HTML 文件中设置任何必要的元数据值，如标题和描述或其他元标签。

12 版中 Head 组件的一个简单例子是这样的：

```js
import Head from 'next/head';
const structData = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Learning Next.js SEO',
  description: 'All about Next.js features and more',
  author: [
    {
      '@type': 'Person',
      name: 'Jane Doe'
    }
  ],
  datePublished: '2023-02-16T09:00:00.000Z'
};
function IndexPage() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>My page title</title>
        <script
          key="structured-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structData) }}
        />
      </Head>
      <p>Hello world!</p>
    </div>
  );
}
export default IndexPage;
```

在页面的元数据中添加结构化数据，如标题和描述或任何额外的元标签，这只是一个简单的问题，包括一个带有 **dangerouslySetInnerHTML** 属性的脚本标签，如例子中所示。

大多数开发人员编写一个利用 Head 组件的 SEO 组件，以实现更多的 DRY（不要重复自己）方法。在这里，你防止相同的数据或 HTML 文件被多次发送给用户。但在引擎盖下都是一样的，Head 是优化网页元标签方面的首选方法。

### Next 特殊的 head.js 文件

在第 13 版中，你可以完全忘记通常的 Head 组件。从 13 版的第一次迭代开始，Next 实现了**head.js（或.tsx）**文件。这个文件可以包含在应用程序目录内的任何文件夹中，以动态管理 SEO 元数据，并声明哪些标签，以及它们的值，将被用于特定的路线和特定的页面。

应用程序目录中的每个文件夹都是一个新的路径，这就是为什么你需要在每个文件夹中创建一个**head.js**文件来配置你的元数据值。下面是一个**head.js**文件的例子：

```js
export default function Head(params) {
  return (
    <>
      <title>head.js Example</title>
    </>
  );
}
```

注意，我们返回的是一个 React 片段，而不是一个实际的 head 标签，或任何其他元素。这是**head.js**组件的一个必要方面。

你只能从片段中返回以下元数据标签： <title>, <meta>, <link> (优先级属性) 或 <script> (带有 async 属性)。

Next 从来没有完全充实过这个组件，这就是为什么大多数开发者为添加结构化数据而开发了自定义实现。不过，后来 Next 确实开始建议将结构化数据添加到布局或页面组件中，我们稍后将对此进行讨论。

这个组件在 13.2 版本中被废弃，Vercel 团队转而使用**Metadata**组件。

### Next Metadata 组件

随着 Next 13.2 版本的发布，Next 决定完全不使用 head 组件，而是创建了**Metadata**组件。

在写这篇文章的时候，还没有大量的使用例子等材料。事实上，13.2 甚至还没有发布，而我们目前只到了 13.1.7-canaray。

尽管如此，Next 公司在他们的文档中还是有一个很好的写法，所以我们会去看一下用法，并给出一个基本的分析。如果你打算在 Next.js 的搜索引擎优化上有所作为，那么了解这方面的情况是很重要的，因为它即将到来。

Metadata 组件旨在成为一站式商店，以高效和易于使用的方式为 **head** 标签填充标题和描述以及其他动态元数据。使用方法其实很简单，包括从页面组件本身导出一个名为 **metadata** 的对象或一个名为 **generateMetadata** 的函数。

让我们来看看一个基本的使用例子:

### Next.js export metadata 例子

**examplePage.tsx**

```js
import type { Metadata } from 'next';
export const metadata: Metadata = {
title: 'Example component',
description: 'Learning Next.js SEO',
};
export default function Page() {
return (
<>
<div>Example page component…</div>
)  	</>
}
```

这将自动为 **examplePage.tsx** 组件填充适当的 HTML 元标签和给定值。

**metadata** 组件也提供了一组默认标签，它自动设置了以下 **charset** 和 **viewport** 元标签：

```js

<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

### Next.js export generateMetadata 例子

在许多应用程序中，特别是电子商务应用，你可能会遇到动态填充元标签的需求，以确保这些数据始终反映数据库或其他数据存储的更改。

对于这些情况，Next.js 提供了 generateMetadata 函数，可以从任何页面组件中导出，并与获取和注入所需数据的任何必要的 API 调用一起使用。

以下是一个利用该方法的示例页面组件：

**pageExample.tsx**

```js
import type { Metadata } from 'next';
async function getInfo(id) {
  const res = await fetch(`https://someapi/product/${id}`);
  return res.json();
}
export async function generateMetadata({ params }): Promise<Metadata> {
  const product = await getInfo(params.id);
  return { title: product.title };
}
export default async function Page() {
  return <div>Example page…</div>;
}
```

正如你所看到的，我们创建了一个方法，从 API 返回一些关于产品的信息，并在我们的 **generateMetadata** 函数中使用该方法，然后填充 **title** 属性。这又将在我们渲染的 HTML 页面中设置标题标签(title tag)。

值得注意的是，**generateMetadata** 函数只能在服务器组件中使用，这一点我们在前面讨论过。记住，在**app**目录下的所有组件都被自动配置为默认的服务器组件。

关于 **Metadata** 组件可用的属性和属性扩展的详尽列表，请看[docs](https://beta.nextjs.org/docs/api-reference/metadata)。几乎所有你能想到的东西都可以相对容易地完成。

## 如何用 Next 13 实现结构化数据

接下来建议将结构化的 JSON-LD 数据添加到布局或页面组件中。说实话，这一直是一个更简单的解决方案，因为谷歌从来没有说过要把结构化数据从页面本身排除出去。

事实上，这早已是一种常见的做法，至于为什么许多开发者都固定在将其放在头部标签(head tag)的想法上，这就有点神秘了。

### 如何向版面(Layout)或页面组件(Page Component)添加结构化数据

将结构化数据添加到一个组件中，无论是布局还是页面，看起来都是这样的(例子直接来自文档):

```js
export default async function Page({ params }) {
  const product = await getProduct(params.id);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    description: product.description
  };
  return (
    <section>
      {/* Add JSON-LD to your page */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      {/* ... */}
    </section>
  );
}
```

正如你所看到的，这是超级简单的，真的没有必要通过尝试将结构化数据注入头部标签(head tag)来使事情复杂化。

## Next.js SEO – 结束语

我们在这里对 [Nextjs SEO](https://www.ohmycrawl.com/next-js-seo/) 进行了相当多的讨论。从 Next 13 中包含的旨在解决许多 SEO 相关问题的新功能，到为获得更好的开发者体验而对旧功能进行改造和精简，Next 的情况看起来很好。

如果你打算使用 Next.js 作为你的首选框架，我强烈建议你尝试使用 Next 13。尽管诸如字体组件等功能仍处于测试阶段，而且整个系统仍处于金丝雀（测试阶段），但第 13 版的大部分内容已被认为是稳定的，并被许多开发者和世界领先的公司所使用。

主要的版本更新可能是令人生畏的，但请确保阅读完整的文档，并给它一个机会，以确保你保持在 Next.js SEO 的最前沿。
