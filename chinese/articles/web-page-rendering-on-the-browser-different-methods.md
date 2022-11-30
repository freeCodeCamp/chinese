> -  原文地址：[How Web Pages Get Rendered on the Browser – Different Methods Explained](https://www.freecodecamp.org/news/web-page-rendering-on-the-browser-different-methods/)
> -  原文作者：[Favour C. Felix](https://www.freecodecamp.org/news/author/favour/)
> -  译者：
> -  校对者：

![How Web Pages Get Rendered on the Browser – Different Methods Explained](https://www.freecodecamp.org/news/content/images/size/w2000/2022/10/fav-poster.jpg)

Today, all over the world, computers and networks are getting faster. This is good for web development and user experience in general. And the possibilities of what people can achieve have taken a massive leap forward.

But although growth is evident in many places, others are left behind in this sprint. The big question is how do we level the web experience given this digital divide and make the web more accessible to people with less efficient computers and networks?

In many cases, an answer to this question lies in understanding how we render webpages on the browser.

## Terms Used in this Article

Before you go on, I want to make sure you're familiar with the terms used in this article. Some of them might be particularly difficult to grasp for new developers. Feel free to skip to the next section if you are familiar with these already.

-   **Server**: A server is a computer that resides in a remote location (mostly the internet). Its job is to handle requests from the client and process a response.
-   **Client**: A client is any device communicating with a server to access resources. A client, in many cases, is any device that can access the internet. In this article, your web browser plays the role of the client.
-   **CDN**: Acronym for Content Delivery Network. A CDN is "a network of interconnected servers that speeds up webpage loading for data-heavy applications" (from [AWS](https://aws.amazon.com/what-is/cdn/)).
-   **Build-time**: During build-time, your application code is prepared for another environment. Most times — a hosted environment on the internet.

Now let's learn about the different ways websites can be rendered.

## What is Client-Side Rendering (CSR)?

![csr](https://www.freecodecamp.org/news/content/images/2022/10/csr.jpg)

Client-Side Rendering generates webpages in the browser, fully relying on your JavaScript Code. The browser fully processes your JS code before your web page's content is visible to the user.

Your JavaScript code helps to dynamically define the website's **architecture** as soon as it is downloaded. Architecture in this context means data fetching from an [API](https://aws.amazon.com/what-is/restful-api/), website navigation, and simple business logic on your website.

### Client-Side Rendering  and JavaScript Frameworks

Client-Side Rendering gained popularity with the release of JavaScript frameworks and libraries like React, Vue and Angular. These frameworks are only functional by including a CDN at the head of an HTML page —  and these CDNs typically contain JS code that is large in size.

It's no secret that large files result in increased download time, but there is a catch here: downloading large files at the initial load of the application means significantly less loading time in accessing other pages on that website.

The website primarily fetches data from an API. This data is then used to populate pages rendered on the client.

You can find common examples of a real-life application that use CSR in many of the Progressive Web Applications (PWA) we use today, like Spotify, Figma, and Google Drive.

## What is Server-Side Rendering (SSR)?

![ssr](https://www.freecodecamp.org/news/content/images/2022/10/ssr.jpg)

Client-Side Rendering was a game-changer and still is — in many cases. Although, a closer look at performance in CSR showed that the more features a website had, the more JS code it had. Recall that more JS code means more download time.

Heavy downloads during the initial load to ensure faster access to all web pages did not seem like a trade-off some people were willing to make. This gave rise to Server-Side rendering.

SSR doesn't solve all the problems of rendering on the web. But it solved many of the issues faced by CSR like faster load times on initial visit and a few others highlighted in the Benefits and Trade-offs section of this article.

Server-Side Rendering helps generate a webpage on the server just after receiving a request from the browser. With SSR, the server renders the full HTML, CSS, and JavaScript required for the requested resource and sends it back to the browser.

This means you can always be sure that the website content contains the most recent information from the server. You can think of it as an integration of a [REST API](https://aws.amazon.com/what-is/restful-api/) — content from the backend is always updated.

Like all other methods of rendering on the web, SSR has its fair share of drawbacks. For one, having to make network requests to the server to load a webpage could impact users with less internet bandwidth. SSR also requires a relatively higher volume of computing power to be active.

## What is Static Site Generation (SSG)?

![ssg](https://www.freecodecamp.org/news/content/images/2022/10/ssg.jpg)

Static Site Generation is a very common approach to rendering on the web. This is because most websites, if not all before JavaScript frameworks, were statically generated.

Static sites are still very popular, but there are better ways to generate them. This goes to show how important they are in terms of performance on the web.

### But, What is a Static Site?

A static site is rendered on a browser exactly how it was generated. The content of a static site is typically unaffected by the user viewing, unlike a web app rendered in CSR, or SSR, where each user can see content based on authentication or authorization.

Static sites are ideal for showing content that never changes or is updated once in a while.

### Static Site Generation Explained

Static Site Generation largely involves automating the process of building webpages. JavaScript frameworks today (like Nuxt.js, Next.js, and so on), provide template engines for building multiple static webpages with one template. As you can imagine, this saves time.

Static Site Generation is different from SSR and CSR in the sense that your HTML webpages are rendered and generated during build-time — before the user attempts to access your webpage. This is why SSG is commonly referred to as pre-rendering. It does the hard work beforehand.

Though SSG seems all bliss, there are tradeoffs. A major drawback of rendering with SSG is that a page must be generated for every accessible URL on your website. This could get even more tedious when you have [dynamic pages](https://nuxtjs.org/docs/directory-structure/pages#dynamic-pages).

Recall that static sites are ideal for showing content that rarely gets updated, so this rendering method doesn't work for all use cases.

## Benefits and Trade-offs of Different Rendering Methods

Now that you understand how all these rendering methods generate pages for the browser, we should consolidate all of this information and do some comparisons.

We'll look at the three major metrics — Performance, SEO, and Cost.

### Performance

To build websites that are accessible regardless of the user’s internet or computer speed, we need to consider performance. Performance in this context could be how fast a website loads or fetches data from an API.

The subsequent paragraphs shows how CSR, SSR and SSG translate in terms of performance.

#### Client-side rendering performance

A client-side-rendered website can be relatively slow to load. This is because JS code is first downloaded and used to generate actual content that users see.

Oftentimes, JS downloads are heavy, especially with JS frameworks. Client-side rendered webpages might also need to make API calls to fetch data from the backend. This increases load time for the user.

#### Server-side rendering performance

SSR Rendered webpages can be very fast. This is majorly dependent on the server's speed and the user's speed. If both conditions are met, SSR could take an easy win in terms of performance.

#### Static site rendering performance

Webpages generated with SSG are relatively fast as actual rendering does not take place on the browser.

SSG feeds the browser with content that it requires without extra work. SSG-rendered webpages, like CSR, might also need to make API calls to fetch data from the backend. This also increases load time for the user.

Ultimately, the amount of JavaScript used in a webpage can determine its performance.

### Search Engine Optimization (SEO)

Every website that needs visibility should value Search Engine Optimization. SEO determines how accessible your content is on search engines like Google. It also determines how high you rank in the Search Engine Result Pages (SERPs).

Let's see how all three rendering methods perform when they are indexed by search engines.

#### CSR Search Engine Optimization

Webpages rendered with CSR typically have no meaningful content and depend on JS to generate content. The downside is not all web crawlers support JS, so your website might not be indexed properly on search engines.

#### SSR Search Engine Optimization

SSR renders complete webpages with updated content from the server. Webpages rendered with SSR can be crawled and indexed by search engines.

#### SSG Search Engine Optimization

A web crawler very easily crawls webpages generated with SSG. They do not rely on JS to render fully.

### Cost

It’s important that users have the best experience when they visit a website, but the bills don’t pay themselves, so the cumulative cost of this experience has to be as lean as possible.

The three rendering methods do not share the same financial implications. The paragraphs beneath takes a closer look into the cost of using each.

#### CSR Cost

Client-Side Rendering runs 100% on the browser. This means no additional cost is incurred.

#### SSR Cost

Server-Side Rendering generates a fully functional webpage remotely on the server. This means extra computing resources and extra costs.

#### SSG Cost

No Cost. Static Website Generation is during build-time. Hence, generated webpages are hosted, and no extra rendering is done on the server.

## Conclusion

When selecting a rendering method, consider your use case and what works best for it based on what you have learned from this article. Different rendering methods are suitable for different kinds of websites.

An e-commerce website developer might choose to go the SSR route or feel more secure using static sites. A web application developer, on the other hand, might not mind a lengthy initial load as long as it means a better experience for the user in the long run.

Whichever rendering method you select, ensure your website is as accessible as possible — beyond conditions you would not necessarily experience. Finally, never forget to stay on a healthy JS diet.