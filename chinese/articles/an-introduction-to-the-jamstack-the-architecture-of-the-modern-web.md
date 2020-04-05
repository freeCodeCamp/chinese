> * 原文地址：[An introduction to the JAMstack: the architecture of the modern web](https://www.freecodecamp.org/news/an-introduction-to-the-jamstack-the-architecture-of-the-modern-web-c4a0d128d9ca/)
> * 原文作者：Bolaji Ayodeji
> * 译者：sheenalu
> * 校对者：

![An introduction to the JAMstack: the architecture of the modern web](https://cdn-media-1.freecodecamp.org/images/1*xYSNCnp6eh2ZDpwQtYL6qg.jpeg)

I’m sure you’ve come across the word JAMstack before but you might not have understood what it really meant. I’ve seen this word before also but didn’t care to check it out until  [Egwuenu Gift][1]  organized  [JAMstack Lagos][2]. I then realized that I’ve been building JAMstack applications already.

JAMstack is a modern web development architecture. It is not a programming language or any form of tool. It is more of a web development practice aimed towards enforcing better performance, higher security, lower cost of scaling, and better developer experience.

In this article, I’ll introduce you to what JAMstack means, why you should care, best practices, and how to get started. ?

### Introduction

![](https://cdn-media-1.freecodecamp.org/images/oE3wYE3Ygr1SlH2dTXkM5lXW-DyHPlmMrQww)

According to the official  [JAMstack documentation][3],

> JAMstack is a Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.

> When we talk about “The Stack,” we no longer talk about operating systems, specific web servers, backend programming languages, or databases.

> The JAMstack is not about specific technologies. It’s a new way of building websites and apps that delivers better performance, higher security, lower cost of scaling, and a better developer experience.

**JAMstack**  is a major trend in web development coined by  [Mathias Biilman][4], the CEO and co-founder of Netlify.

### Okay, chill! What is JAMstack?

You might have come across specific terms like  **MEAN stack**  and  **MERN stack.**  These are just terms used to classify or group some certain technologies with the aim of achieving a particular goal.

JAMstack here stands for

**J**avaScript

**A**PI

**M**arkup

> Stacks generally are just a combination of several technologies used to create a web or mobile application. So JAMstack is the combination of JavaScript, APIs and Markup. Pretty interesting right?

JAMstack projects don’t rely on server-side code — they can be distributed instead of relying on a server. Served directly from a CDN, JAMstack apps unlock speed, performance and better the user experience.

![](https://cdn-media-1.freecodecamp.org/images/x0eO1iqvIRKPNsEtSkFvRuLu6CbSmo7OhcFH)

### Useful Terms

I’ll be using these terms in this article frequently and I thought you should know their meanings (if you don’t already):

-   **API** is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other.
-   **CDN**  (content delivery network) is a system of distributed servers (network) that deliver pages and other Web content to a user, based on the geographic locations of the user, the origin of the webpage and the content delivery server.
-   A  **Server** is a computer designed to process requests and deliver data to another computer over the internet or a local network.
-   A  **Database** is a collection of information that is organized so that it can be easily accessed, managed, and updated

### Why JAMstack?

![](https://cdn-media-1.freecodecamp.org/images/uHGkEXe8lXJsmj6cZNQmIW3bpsEzn0mU9Eun)

Traditional websites or CMS sites (e.g WordPress, Drupal, etc.) rely heavily on servers, plugins and databases. But the JAMstack can load some JavaScript that receives data from an API, serving files from a CDN and markup generated using a static site generator during deploy time.

Sounds cool right?!

#### JAMstack is fast

When it comes to minimizing the time of load, nothing beats pre-built files served over a CDN. JAMstack sites are super fast because the HTML is already generated during deploy time and just served via  [CDN][5]  without any interference or backend delays.

#### JAMstack is highly secured

Everything works via an API and hence there are no database or security breaches. With server-side processes abstracted into micro service APIs, surface areas for attacks are reduced and so your site becomes highly secured.

#### JAMstack is cheaper and easier to scale

JAMstack sites only contain just a few files with minimal sizes that can be served anywhere. Scaling is a matter of serving those files somewhere else or via CDNs.

### JAMstack Best Practices

-   Use CDN to distribute your files rather than servers
-   Installing and contributing to your project should be easy and less complex. Use tools like npm and Git to ensure standard and faster setup.
-   Use build tools and make your project compatible for all browsers (e.g Babel, Browserify, Webpack, etc.)
-   Ensure your project is up to web standards and highly accessible
-   Ensure your build process is automated to reduce stress.
-   Make your deployment process automatic, you can use platforms like  [Netlify][6]  to do this

### How do I Get Started?

You can use some already built technologies to build JAMstack applications in a few minutes. Here are a few:

-   [**Gatsby**][7]**:** Gatsby is a free and open source framework based on React that helps developers build blazing fast  **websites and**  **apps**
-   [**NuxtJS**][8]**:** NuxtJS is the Vue.js Framework for Universal applications, static generated applications, single page applications, progressive web apps and desktop apps
-   [**Hugo**][9]**:** Hugo is the world’s fastest framework for building websites. It is one of the most popular open-source static site generators. With its amazing speed and flexibility, Hugo makes building websites fun again.
-   [**Netlify CMS**][10]**:** Netlify CMS is an open source content management for your Git workflow which can be used with any static site generator for a faster and more flexible web project
-   [**Contentful**][11]**:** Contentful is a smarter and seamless content management system which provides editors and developers with a unified content thereby enhancing collaboration and ensuring digital products ship to the market faster.
-   [**Svelte**][12]**:** Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the  _browser_, Svelte shifts that work into a  _compile step_  that happens when you build your app.

[**_and many more. . ._**][13]

### Useful Resources

-   [**JAMstack WTF**][14]
-   [**How to Build a JAMstack Website**][15]
-   [**What is JAMstack and why you should try it**][16]
-   [**A JAMstack-ready CMS**][17]
-   [**JAMstack for Clients: On Benefits & Static Site CMS**][18]
-   [**Go static: 5 reasons to try JAMstack on your next project**][19]
-   [**Static Websites + JAMstack = ❤**][20]

Find more resources  [here][21]

### Conclusion

JAMstack was invented as a way to put a nomenclature to the new way of building websites and apps that delivers better performance, higher security, lower cost of scaling, and a better developer experience.

JAMstack is not about specific technologies, it is a modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.

Join the  [JAMstack community][22]  to learn more and get more updates.

![](https://cdn-media-1.freecodecamp.org/images/BoR0w2G9fjZDSJDFTlZoGE4gK810ODcs8vz3)

> PS: This article was first published on my blog  [here][23]

[1]: https://www.freecodecamp.org/news/an-introduction-to-the-jamstack-the-architecture-of-the-modern-web-c4a0d128d9ca/undefined
[2]: https://twitter.com/jamstacklagos
[3]: https://jamstack.org/
[4]: https://twitter.com/biilmann
[5]: https://flaviocopes.com/cdn/
[6]: https://netlify.com/
[7]: https://www.gatsbyjs.org/
[8]: https://nuxtjs.org/
[9]: http://gohugo.io/
[10]: https://www.netlifycms.org/
[11]: https://www.contentful.com/
[12]: https://svelte.dev/
[13]: https://www.staticgen.com/
[14]: https://jamstack.wtf/
[15]: https://cosmicjs.com/blog/how-to-build-a-jamstack-website
[16]: https://www.giftegwuenu.com/what-is-ja-mstack-and-why-you-should-try-it
[17]: https://www.contentful.com/r/knowledgebase/jamstack-cms/
[18]: https://snipcart.com/blog/jamstack-clients-static-site-cms
[19]: https://builtvisible.com/go-static-try-jamstack/
[20]: https://julian.is/article/static-websites-and-jamstack/
[21]: https://jamstack.org/resources/
[22]: https://jamstack.org/community/
[23]: https://www.bolajiayodeji.com/introducing-jamstack-the-modern-web-architecture/
