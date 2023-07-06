> - 原文地址：[Next.js SEO for Developers – How to Build Highly Performant Apps with Next](https://www.freecodecamp.org/news/nextjs-seo/)
> - 原文作者：[Scott Gary](https://www.freecodecamp.org/news/author/scott-gary/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Next.js SEO for Developers – How to Build Highly Performant Apps with Next](https://www.freecodecamp.org/news/content/images/size/w2000/2023/03/pexels-andrei-photo-2127783.jpg)

Next.js 是一个流行的基于 React 的网络框架，近年来获得了流行和不断增长的社区。它是一个强大的工具，用于构建快速和对 SEO 友好的网络应用，其动态页面在移动设备上运行良好。

由于同构系统设计的复杂性质，Next.js 的 SEO 可能是一个棘手的话题，让你头疼。特别是如果你来自传统的 React 应用程序，而且你只依赖文档。

凭借其对服务器端渲染、静态网站生成以及现在的 React 服务器组件的内置支持，Next.js 提供了一个强大的平台，可以在你的网络应用中实现高质量的 SEO 网络指标。它还可以帮助你在 Node 和 React 应用程序中的多个页面上提供卓越的用户体验，同时使它们对 SEO 友好。

## Why Should You Learn NextJS for Front End Development?

简而言之，最新版本的 NextJS 是一个开源平台，解决了 React 目前存在的很多渲染问题。我写这篇文章是因为很多前端开发者对我很生气:-D。

他们花了 6-9 个月开发一个 React App，然后我不得不要求他们重构代码。

Next.js 避免了很多渲染问题。它让搜索引擎非常容易理解你的网站是怎么回事。

### Who Will get the most out of this article?

如果你是一个营销人员或遇到 SEO 问题的更高级的开发人员，这将对你很有帮助。

然而，也欢迎新的开发者查看这些信息，因为它将对你有长期的帮助。

## How Should You Render Your Next JS Web Page Application?

我个人从我的咨询公司[OhMyCrawl](https://www.ohmycrawl.com/)查看了大量的这些网站，并制作了一个视频概述，以帮助了解使用 Next.js 等框架对 SEO 的好处：

## How is Next SEO Different from Other Frameworks?

Next SEO 通过将如此多的功能和免费工具精简到一个组织良好的软件包中，使你可以轻松地消化和应用于你的单页应用，从而使自己与众不同。当涉及到搜索引擎优化、图像优化和最小化累积布局转移等任务时，Next 做得很好。

Next.js SEO 的好处还不止于此。我们将介绍 Next.js 带来的许多与搜索引擎有关的好东西，无论新旧。

## Search Engines, SSR, and SSG Concepts Are Evolving

大多数开发者和 SEO 专家已经对现有的页面创建策略和整个 SSR 与 SSG 范式感到相当满意。他们也对 Next.js 的第 12 版产生了高度的信任，该版本提供了一个清晰的方式来处理这两种形式的页面生成。

不过，像往常一样，另一个网络应用模式的转变正在进行中，这次是以 React 服务器组件（RSCs）的形式出现的，Next.js 第 13 版中默认包含了这些组件。

### SEO Concepts Haven’t Changed – Just the Approach

Nextjs SEO 在概念上不会有太大变化。如果你想获得良好的搜索引擎结果和流量增长，关键仍然是快速载入页面、快速渲染、低累积布局变动等等。静态页面仍然扮演着重要角色。

但是，Next.js 提供了一些非常棒而独特的功能，可以帮助我们实现出色的搜索引擎指标，它不仅仅是 React Server Components。

我们将探讨一些最佳实践，以及使用 Next.js 实现出色的 SEO 优化网络指标的不同技术和策略。我们还将看到如何利用它独特的功能来提高网站的搜索引擎可见性(网页里优先显示)和用户参与度。

## What’s New With Next.js 13 that Relates to SEO?

我们不会给你一个关于第 13 版技术变化的全面指南，而是主要关注 Next JS 的 SEO 相关优势。我们还将探讨如何利用最佳的 SEO 实践，在搜索引擎中取得尽可能好的结果，而且比通常所需的汗水少得多。

我们将在这里讨论的 Nextjs 13 变化如下：

- React 服务器组件
- UI 的 流动块 (Streaming UI chunks)
- 升级的 Next 图片组件
- Next 字体组件

除了 Next.js 默认的 SEO 属性外，这些特定的升级是 Next.js 版本 13 中 SEO 改进的基石。每个升级都有其自身的优点，我们将很快逐个介绍。

### React Server Components

RSCs 允许在客户端和服务器上采用更精细的渲染方式。

React 允许开发者选择组件是在服务器上还是在客户端渲染，而不是在用户请求时被迫决定在客户端还是服务器上渲染整个页面。这可以让你在搜索引擎结果页面中获得巨大优势。

如今，绝大多数的页面优化都是围绕着减少向客户端发送 JavaScript。毕竟，这是使用预渲染和服务器端渲染来创建网页和 HTML 页面的主要好处。

RSC 是帮助实现这一目的的另一个工具，并从你的网页或单页应用程序中获得尽可能多的 SEO 价值。这有助于通过刷新 React 组件中的动态数据，同时保持页面内容的静态部分不变，从而实现更好的 SEO。

### Streaming UI Chunks

Next.js SEO 在添加 RSC (React Server Components) 的同时，迈出了一大步，而流式 UI(Streaming UI) 代码块则是锦上添花。流式 UI 是一个类似的新兴设计模式，称为 `岛屿架构(the island architecture)`，旨在在首次加载时尽量向客户端发送最少的代码。

允许细粒度的控制非常好，但为什么不向客户端发送一个无需 JavaScript 的完全渲染的页面，然后再发送剩余的内容呢？这正是流式 UI 代码块所实现的目标。

当 Next.js 在服务器端渲染页面时，通常会将页面的所有 JavaScript 捆绑并与之一起发送。而流式 UI 代码块的引入消除了这种需要，允许向客户端发送一个非常小的静态页面，显著改善了诸如首次内容呈现时间和整体页面速度等网络指标。

### Next.js 13 App Directory

When you start a new Next.js 13 project, you’ll notice a new directory called **app**. Everything within the app directory is preconfigured to allow for RSCs and streaming UI chunks. You need only create a [loading.js](https://beta.nextjs.org/docs/routing/loading-ui) component, which will wrap the page component entirely and any children within a suspense boundary.

You can achieve an _even more_ granular loading pattern by manually creating the suspense boundaries yourself, essentially allowing for unlimited control over what gets loaded upon the initial request.

The steps for streaming UI chunks go something like this:

1.  User makes initial request.
2.  Barebones HTML page is rendered and sent to the client.
3.  JavaScript bundles are being prepared on the server.
4.  A page section requiring JavaScript becomes visible in the client browser.
5.  JavaScript bundle for only that component is sent to the client.

This new tooling has important implications for technical SEO by allowing more interactive pages to compete with static pages in regards to page load speed and other web metrics that are used as ranking factors in search results by search engines.

### Updated Next Image Component

Another important upgrade to the Next.js SEO sphere is the Image component. Although it’s been somewhat understated, the biggest improvement in my opinion is the utilization of native lazy loading.

Browsers have had great support for native lazy loading for some time now, and including extra JavaScript for this feature is simply a waste of bandwidth.

A few other great improvement for SEO are:

- Required alt tag by default.
- Better validation to pinpoint errors involving invalid properties.
- More easily styled due to a more HTML-like interface.

Overall, the new Image component is simplified and slimmed down, and in the programming world simpler is almost always better.

### The Next Font Component

The font component is a huge win for Next.js SEO, and it will certainly help alleviate many headaches in the future. Any experienced developer knows how tedious it can be configuring fonts properly (proper is not relative in this case!).

Cumulative layout shifts due to slow loading is a common nuisance, and search engines like Google have [openly stated](https://developers.google.com/publisher-tag/guides/minimize-layout-shift) that CLS is an important web metric.

Depending on the framework you’re working with (Gatsby comes to mind), it can be tricky getting your fonts to preload effectively. Making external requests to font repositories such as Google have been a necessary evil for some time, creating a hard to manage bottleneck in many SPA applications.

The Next Font Component aims to solve this problem by fetching all external fonts at build time, and self-hosting them from your own domain. Fonts are also optimized automatically, and zero cumulative layout shift is accomplished by automatic utilization of the CSS **size-adjust** property.

## Common SEO-Related Tasks with Next.js

There are a few important topics to consider when configuring common Next.js SEO tasks for version 13.

### Next.js SEO With Version 13

The Next version of the React Head component has typically been used to assign values to meta tags within the document head and also to inject structured data.

With version 13, however, the Head component goes out the window. At first, Next opted to utilize a special file called **head.js** that works in a similar fashion as the Head component. After version 13.2, Next implemented the **Metadata** component, which is a more proprietary implementation to solving the metadata problem by easily populating meta tags.

Let’s take a closer look at these two common SEO tasks, and examine how they used to be handled as opposed to the new version 13 way.

## How to Configure the Head Tag for Search Engine Optimization

Prior to version 13, we would import the **Next/Head** component, and set any necessary metadata values such as title and description or other meta tags within the html file of the web page.

A simple example of the Head component in version 12 looks like this:

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

Adding structured data such as title and description or any additional meta tags in a page’s metadata is a simple matter of including a script tag with the **dangerouslySetInnerHTML** attribute, as seen in the example.

Most developers code an SEO component that utilizes the Head component in order to achieve a more DRY (don’t repeat yourself) approach. Here, you prevent the same data or HTML files from being sent multiple times to the user. But under the hood it’s all the same, and Head was the go-to approach for optimizing a web page in regards to meta tags.

### The Next Special head.js File

With version 13, you can forget all about the usual Head component. Starting with the first iteration of version 13, Next implemented the **head.js (or .tsx)** file. This file can be included within any folder inside the app directory to dynamically manage SEO metadata and declare which tags, along with their values, will be utilized for a particular route and particular page.

Every folder in the app directory accounts for a new route, which is why you’ll need to create a **head.js** file within each folder to configure your metadata values. Here’s an example **head.js** file:

```js
export default function Head(params) {
  return (
    <>
      <title>head.js Example</title>
    </>
  );
}
```

Notice that we return a React fragment rather than an actual head tag, or any other element. This is a required aspect of the **head.js** component.

You can only return the following metadata tags from within the fragment: <title>, <meta>, <link> (with the precedence attribute) or <script> (with the async attribute).

Next never fully fleshed out this component, which is why most developers baked up custom implementations for adding structured data to the mix. Although, a bit later on Next did start recommending that structured data be added into the layout or page component instead, which we’ll go over a bit later.

This component became deprecated in version 13.2, and the Vercel team moved on to the **Metadata** component.

### The Next Metadata Component

With the release of Next version 13.2, Next decided to opt out of a head component altogether, and instead created the **Metadata** component.

At the time of writing, there isn’t a whole lot of material out there for usage examples and such. In fact, 13.2 hasn’t even been released, and we’re only up to 13.1.7-canaray at the moment.

Nonetheless, Next has a decent write-up in their documentation, so we’ll go over the usage and give a basic analysis. It’s important to be informed on this if you plan on being on top of Next.js SEO, because it’s coming down the pipe.

The Metadata component aims to be the one-stop shop for populating the **head** tag with title and description and other dynamic metadata in an efficient and easy to use manner. The usage is really quite simple, and involves exporting either an object called **metadata** or a function called **generateMetadata** from the page component itself.

Let’s take a look at a basic usage example:

### Next.js export metadata Example

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

This will automatically populate the **examplePage.tsx** component with the proper HTML meta tags and given values.

The **metadata** component offers a set of default tags as well, which automatically sets the following **charset** and **viewport** meta tags:

```js

<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

### Next.js export generateMetadata Example

In many applications, especially ecommerce, you’ll run across the need to dynamically populate meta tags, and ensure that this data always reflects changes to a database or some other store of data.

For cases such as these, Next offers the **generateMetadata** function, which can be exported from any page component along with any necessary API calls to fetch and inject the desired data.

Here’s an example page component that utilizes this method:

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

As you can see, we created a method that returns some information about a product from an API, and used that method in our **generateMetadata** function to then populate the **title** property. This in turn will set the title tag in our rendered HTML page.

It’s important to note that the **generateMetadata** function can only be used within server components, which we discussed earlier. Remember, all components within the **app** directory are automatically configured as server components by default.

For an exhaustive list of properties and property extensions available with the **Metadata** component, take a look at the [docs](https://beta.nextjs.org/docs/api-reference/metadata). Pretty much anything you can think of can be accomplished with relative ease.

## How to Implement Structured Data With Next 13

Next recommends adding structured JSON-LD data to the layout or page component. In all honesty, this has always been a much simpler solution because Google has never said anything about excluding structured data from the page itself.

In fact, this has long been a common practice, and it’s a bit of a mystery as to why many developers have become fixed on the idea of placing it in the head tag.

### How to Add Structured Data to the Layout or Page Component

Adding structured data to a component, whether the layout or page, looks something like this (example pulled straight from the docs):

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

As you can see, this is super simple, and there’s really no need to complicate things by attempting to inject structured data into the head tag.

## Next.js SEO – Wrapping Things Up

We went over quite a bit here for [Nextjs SEO](https://www.ohmycrawl.com/next-js-seo/). From the new features included with Next 13 that aim to solve many SEO related problems, to old features being revamped and streamlined for a better developer experience, things are looking great for Next.

If you plan on using Next.js as your framework of choice, I highly recommend experimenting with Next 13. Although features such as the Font component are still in beta, and the whole thing is still in canary (testing phase), much of version 13 is already considered stable and being used by many developers and the world's leading companies.

Major version updates can be daunting, but make sure to read the full documentation and give it a spin in order to ensure you’re staying at the cutting edge of Next.js SEO.
