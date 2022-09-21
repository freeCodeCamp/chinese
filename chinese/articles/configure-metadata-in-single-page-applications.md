> -  原文地址：[How to Configure Metadata for a Single-Page Application](https://www.freecodecamp.org/news/configure-metadata-in-single-page-applications/)
> -  原文作者：[Scott Gary](https://www.freecodecamp.org/news/author/scott-gary/)
> -  译者：Papaya HUANG
> -  校对者：

![How to Configure Metadata for a Single-Page Application](https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/meta-data-for-spa-seo.jpg)

## Why Metadata Matters

Metadata is an integral part of any modern web app, because it's inherently tethered to search engine optimization (SEO).

Search engines and their respective results page (SERPS) rely on metadata to properly index and display relative information for each site.

Also, meta tags are relied upon to properly display content from your site on a given social media platform, such as articles or items for sale.

For this reason, it's crucial to understand how metadata is configured in a modern web app.

The single page application (SPA) is a modern web app implementation that is incredibly popular. Most frameworks today utilize it in some way. Configuring metadata in today’s most popular SPA frameworks will be the focus of this tutorial.

## The Single Page Application and Metadata

The nature of SPAs make configuring metadata a less straightforward process than classic multiple page applications. I'm going to try to clarify this topic by describing the following key concepts:

1.  The structure of an SPA.
2.  The problem with modifying metadata in an SPA.
3.  Available metadata solutions using what are probably the three most popular SPA frameworks: React, Svelte, and Vue.

You should have a basic understanding of HTML, metadata, and one of the three SPA frameworks to understand the concepts we’ll be going over. But, I’ll be keeping things beginner friendly, so don’t worry!

## How Single Page Applications Work

Before diving in, you need a firm grasp of what constitutes an SPA.

As the name implies, a single page application literally consists of a single HTML page sent down from the server. This page is just an empty HTML shell, and will look something like this:

```html
<!DOCTYPE html>
	<html>
		<head>
		<title>Home | Demystifying SPA Metadata</title>
		<meta name="description" content="How to configure popular SPA 			frameworks to maintain quality site metadata."/>
		<link rel="stylesheet" href="./stylesheet.css" type="text/css" 			/>
		</head>
		<body>
			<script src="/bundle.min.js" type="text/javascript">					</script>
		</body>
	</html>
```

You might be wondering how an entire website is derived from this empty HTML shell.

This is possible because along with the HTML page will be extensive client-side JavaScript code that generates the content for each page. This code is included in the page via the <script> tag, which you can see in the body of that HTML shell.

## Challenges With Configuring Metadata in an SPA

In the previous section, take a look at the HTML found within the head tag. The various tags that begin with 'meta' are our metadata, along with the title tag.

This isn't an exhaustive depiction of meta tags, as many more are commonly used. But the title and description will serve us well for this tutorial.

The title tag is a very important piece of metadata, and should reflect a relevant title for the current page in the browser. Right now, it is quite fitting for the home page. But what happens when a user navigates to a different page?

**The metadata needs to change accordingly, and SPA frameworks don't do this magically.**

You can't change the raw HTML, because each page uses the same shell and would therefore reflect the same metadata for each page. So you need a clever coding strategy.

## SPA Plugins for Metadata Maintenance

SPA frameworks are heavily focused on injecting HTML into the DOM in order to render content on the screen. This means that updating the body tag is the central focus of the framework. For this reason, updating the head tag tends to be a neglected feature.

For many SPA frameworks such as React, the developer community has picked up the slack, creating libraries that streamline the process of handling metadata.

This will be the focus of the remainder of this article – metadata libraries and their usage for the most popular SPA frameworks.

### Basic JavaScript Code that Modifies Metadata Tags

Before diving into these metadata libraries, it's crucial to understand that at the end of the day, it's just code. So let's look at a basic example of JavaScript code that can modify the title tag and the meta description:

```javascript
document.getElementsByTagName('meta')["description"].content = "New meta description!";

document.title = "New Title!";
```

The following libraries will be doing plenty of extra work besides this basic code example, but it's always good to peel back the curtain and see that what's really going on is usually pretty straightforward.

## React-Helmet – How to Configure Metadata in ReactJs

React is a component-based library for building scalable SPAs. It has all kinds of great features developers can leverage for building high performance apps. Metadata maintenance is not one of them.

Luckily, developers in the React community came out with react-helmet, a component library that greatly simplifies the process of modifying your metadata in the <head> tag.

React-helmet is now considered deprecated in favor of the more robust react-helmet-async. We won't get into the why of that, just know that when react-helmet is referred to these days, most teams and devs are actually using react-helmet-async.

Here's a basic example of react-helmet-async code:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const app = (
	<HelmetProvider>
	<App>
	<Helmet>
	<title>Home | Demystifying SPA Metadata</title>
	<meta name="description" content="How to configure popular SPA 			frameworks to maintain quality site metadata."/>
	</Helmet>
	<h1>Hello World</h1>
	</App>
	</HelmetProvider>
);
```

As you can see, the implementation is quite simple. The following steps are taken:

1.  Install react-helmet-async with npm or yarn.
2.  Import Helmet and HelmetProvider from react-helmet-async
3.  Wrap the entire app in the HelmetProvider component.
4.  Use standard HTML meta tags within the Helmet component.

After following these steps, you can now use the Helmet component within any component inside your React app.

Helmet was built to make things easy. According to the docs:

> "Helmet takes plain HTML tags and outputs plain HTML tags. It's dead simple, and React beginner friendly."

## Svelte-Meta-Tags – How to Configure Metadata in Svelte

Svelte is a new kid on the SPA block that's gaining tons of traction fast. Simply put, people who use it love it. Modifying metadata with Svelte is handled via the svelte-meta-tags component library.

With such an upward moving trajectory, it's important to be familiar with how metadata is handled in a Svelte SPA.

Svelte is another declarative framework that abstracts much of the heavy lifting by allowing you to write 'HTML like' code directly in the app.

Without getting into what sets Svelte apart and why it's an interesting prospect (it's worth taking a look!), let's dive into the relative code for our metadata maintenance:

```
<script>
import { MetaTags } from 'svelte-meta-tags';
</script>
<h1>
	Metadata in Svelte
</h1>
<MetaTags
	title='Home | Demystifying SPA Metadata'
	description='How to configure popular SPA frameworks to maintain 		quality site metadata.'
/>
```

The steps for using svelte-meta-tags are as follows:

1.  Install svelte-meta-tags with npm or yarn
2.  Import the MetaTags component.
3.  Set each needed metadata property to its respective value.

Similar in difficulty to react-helmet, the MetaTags component is very beginner friendly and easy to get started with. It supports all modern metadata tags (for a complete list, check out the docs).

## Vue-Meta – How to Configure Metadata in Vue.js

Vue has been around a little longer than Svelte, but is still about a year younger than React. Over the last few years, Vue has experienced a resurgence in popularity, which is why I've chosen it as one of the top 3 SPA frameworks to review.

Like the previous two frameworks, Vue is declarative and component-based. But implementing plugin libraries is slightly different. Let's take a look.

Vue utilizes a configuration file called **main.js** that initializes the Vue app. Since we're going to be using the vue-meta plugin across the entire application, this is where we'll want to import our plugin.

In Vue, you do this with the `Vue.use()`  method, and will look something like this:

```
Main.js
import Vue from 'vue';
import VueMeta from 'vue-meta';
import App from './App.vue';

Vue.use(VueMeta);
	new Vue({
	el: '#app',
	render: h => h(App)
});
```

Now that we've imported the VueMeta component, we can send it some data by exporting a property called **metaInfo** from any Vue component.

Here's an example of a Vue landing component that utilizes the view-meta plugin:

```
Landing.vue
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
		description: 'How to configure popular SPA frameworks to 				maintain quality site metadata.'
		}
		}
</script>
```

Each Vue component exports an object to be used by the Vue app, and since we imported the VueMeta plugin inside the **main.js** file, Vue will be looking for the metaInfo property we exported from our **landing** component.

All we have to do is feed it some data, and our meta tags are generated for us!

## SPA SEO and Metadata  – Wrapping it Up

For each of the three SPA frameworks, we saw some code examples that will result in the metadata tags found in the HTML markup at the beginning of this tutorial.

Modifying metadata in SPA apps isn't as straightforward as with multiple page applications, even ones that are dynamic in nature. Understanding this concept will make life easier while leveraging the myriad SPA frameworks available today.

Metadata is an integral part of any modern web app. Hopefully after reading this tutorial, you can feel confident applying this concept to your next SPA build.

Interested to learn more about Single Page application metadata and Search engine optimization? Read our full [SEO for SPA](https://www.ohmycrawl.com/spa-seo/) guide to level up and fully understand how it works.
