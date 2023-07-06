> - 原文地址：[Next.js SEO for Developers – How to Build Highly Performant Apps with Next](https://www.freecodecamp.org/news/nextjs-seo/)
> - 原文作者：[Scott Gary](https://www.freecodecamp.org/news/author/scott-gary/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Next.js SEO for Developers – How to Build Highly Performant Apps with Next](https://www.freecodecamp.org/news/content/images/size/w2000/2023/03/pexels-andrei-photo-2127783.jpg)

Next.js is a popular React-based web framework that has gained popularity and a growing community in recent years. It's a powerful tool for building fast and SEO-friendly web applications with dynamic pages that work great on mobile devices.

Due to the complex nature of isomorphic system design, Next.js SEO can be a tricky topic to get your head around. Especially if you're coming from traditional React apps and you're relying solely on documentation.

With its built-in support for server-side rendering, static site generation, and now React server components, Next.js provides a robust platform for achieving quality SEO web metrics in your web application. It also helps you deliver exceptional user experiences across multiple pages in Node and React apps while making them SEO friendly.

## Why Should You Learn NextJS for Front End Development?

In short, the newest version of NextJS is an open source platform that addresses a lot of rendering issues that React currently has. I wrote this article because a lot of front end developers get mad at me :-D.

They spend 6-9 months developing a React App, and then I have to ask them to refactor their code.

Next.js avoids a lot of rending issues – it makes it very easy for search engines to understand what your website is all about.

### Who Will get the most out of this article?

This will be very helpful to you if you're a marketer or more advanced developer who's experiencing SEO issues.

However newer developers are welcome to review this info as well, as it will help you in the long term.

## How Should You Render Your Next JS Web Page Application?

I've personally reviewed a ton of theses websites from my consultancy [OhMyCrawl](https://www.ohmycrawl.com/) and made a video overview to help understand the benefits of using frameworks such as Next.js for SEO:

## How is Next SEO Different from Other Frameworks?

Next SEO sets itself apart by streamlining so many features and free tools into a well-organized package that you can easily digest and apply in your single page applications. Next does a great job when it comes to tasks such as search engine optimization, image optimization, and minimizing cumulative layout shift.

The benefits of Next.js SEO don't stop there. We’ll be covering many of the goodies that Next.js brings to the table related to search engines, old and new.

## Search Engines, SSR, and SSG Concepts Are Evolving

Most developers and SEO experts have become pretty comfortable with the existing page creation strategies and the whole SSR vs SSG paradigm. They've also developed a high level of trust in version 12 of Next.js, which provides a clear cut way to handle these two forms of page generation.

As usual, though, yet another web app paradigm shift is underway, this time in the form of React Server Components (RSCs), which are included by default in Next.js version 13.

### SEO Concepts Haven’t Changed – Just the Approach

Next JS SEO won’t change much conceptually. If you’re looking for good search engine results and organic traffic, the game still revolves around the notion of fast page loads, quick paints, low cumulative layout shifts, and all the rest. Static pages still play a large role as well.

But Next.js gives us some pretty cool and novel features that help facilitate excellent search engine metrics, and it’s more than just React Server Components.

We'll explore some best practices along with a few different techniques and strategies for achieving great SEO optimization web metrics with Next.js. We'll also see how to take advantage of its unique features to improve your website's search engine visibility and user engagement.

## What’s New With Next.js 13 that Relates to SEO?

Rather than give you a comprehensive guide to the technical changes found in version 13, we’re going to focus mainly on Next JS SEO related advantages. We'll also look at how you can leverage the best SEO practices to achieve the best possible results in search engines with much less sweat off your back than is typically needed.

The version 13 changes we’ll discuss here are as follows:

- React server components
- Streaming UI chunks
- Updated Next Image component
- Next Font component

On top of the existing default SEO properties of Next, these particular upgrades are the cornerstone of Next.js SEO improvements in version 13. Each one is awesome for its own reasons, which we’ll be going over shortly.

### React Server Components

RSCs allow for a more fine-grained approach to rendering on both the client and the server.

Rather than being forced to decide whether to render an entire page on the client or server upon user requests, React allows developers to choose whether components should be rendered on the server or the client. This can give you a huge advantage in search engine results pages.

A huge majority of page optimization these days revolves around sending less JavaScript to the client. After all, this is the primary benefit of using pre-rendering and Server Side Rendering to create web pages and HTML pages.

RSCs are another tool to help achieve this end and gain as much SEO value from your web pages or single page applications as you can. This helps achieve better SEO by refreshing dynamic data in a React component while leaving the static parts of the page’s content intact.

### Streaming UI Chunks

Next.js SEO made a huge leap adding RSC to the mix, and streaming UI chunks is the cherry on top. Streaming UI is a similar spin-off of a new and growing design pattern called “the island architecture,” which strives to send as little code to the client as possible at first load.

Allowing fine-grained control is great, but why not send a JavaScript-free, fully rendered page to the client, and send the rest later? That’s exactly what streaming UI chunks accomplish.

When Next.js renders a page on the server, the page typically comes with all the JavaScript bundled up and sent along with it. The ability to stream chunks of data eliminates this need, and allows an extremely tiny static page to be sent to the client, significantly improving web metrics such as first contentful paint and overall page speed.

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
