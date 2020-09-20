> * 原文：[Front End Developer vs Back End Developer – Definition and Meaning In Practice 前端和后端的区别到底是什么？非程序员也能读懂！](https://www.freecodecamp.org/news/front-end-developer-vs-back-end-developer-definition-and-meaning-in-practice/)
> * 作者：Colby Fayock
> * 译者：lihkai01
> * 校对者：

![Front End Developer vs Back End Developer – Definition and Meaning In Practice](https://www.freecodecamp.org/news/content/images/size/w2000/2020/06/front-end-back-end.jpg)

网页和应用程式是复杂的！按钮和图片只不过是冰山一角。按照这样的复杂程度，我们需要人工来处理，但前端程序员和后端程序员的职务分别是什么？

-   [开发的多层次][1]
-   [但我们不是全栈程序员][2]
-   [所以前端和后端的区别到底是什么？][3]
-   [什么是前端开发？][4]
-   [什么是后端开发？][5]
-   [模糊地带][6]
-   [学习资源][7]

## 开发的多层次

无论你是使用网站或者是ios应用程式，所有的开发环境都使用共同的模式 - 那就是前端开发和后端开发。

这界限是模糊的，尤其是当 javascript 和[“去伺服器”][8]世界的兴起。当开发工具开始结合在一起时，我们开始怀疑自己算不算是[全栈开发者][9]。

## 但我们不是全栈程序员

虽然我们[都想被][10]称为全栈开发者，但我们并不是。以我个人来说，我发现自己在后端的开发比较有效率，但这并不是我的强项，我更喜欢建立使用者页面。

当然也有些人跟我相反，他们的强项是在应用的后端构建 API 同时也能建立使用者页面，但可能是比较像原型设计以展示应用设计地那种。

## 所以前端和后端的区别到底是什么？

就算你是个全栈开发者，但这并不代表没有职责的分支。

![](https://www.freecodecamp.org/news/content/images/2020/06/front-end-vs-back-end-engineer-2.jpg)

前端工程师 vs 后端工程师

他们是什么样的？

## 什么是前端开发？

应用程式的前端通常是指显示使用者界面的图层。当中包括所有的静态网页如 HTML 和 CSS 到 [React][11] 所构建的使用者界面。

### 传统的前端开发是什么样的？

目前统治前端网页的程式语言是 Javascript ，但并不完全只依赖一个程式语言就可以的。若需要在网页内增加一些互动，就需要使用如 [PHP][12]  和  [Template Toolkit][13]  ([Perl][14]) 的伺服器模板的程式语言渲染网页前端页面。

这种方式广泛的应用在用户自行建立的框架或如 [Wordpress][15] 这样使用 PHP 来驱使广大的开发者社群使用这个工具来开发网站。

它的运作方式是这些模板可以在运行时直接从伺服器获取资料。当浏览器从伺服器请求网页资料时，模板所需的资料和应用的逻辑都会在那个时候获取。

一些传统的前端工具包括：

-   软件包如 [jQuery][16] 或 [MooTools][17]
-   网页框架 [Wordpress][18]
-   纯 [CSS][19]
-   充分地使用 [Table][20] 元素

但时间久了之后， 当 Javascript 变得越来越成熟和浏览器的强化，我们就能够建立更多，更快，互动性更强的使用者体验。

### 目前的前端开发是什么样的？

目前使用 Javascript 的网页和应用程式建立 UI　的框架如　[React][21]，　[Vue][22]，　和  [Angular][23]　越来越常见。这些工具提供了开发者能够重复使用的复杂　UI　元件的功能。

当浏览器缓冲页面时，该页面会先接受一个起始的　HTML　文件当中包括　script　标签里所包含的　Javascript　文档（就跟之前的一样）。不同的是当　Javascript　运行时，它会自动从浏览器与外部的　API　连接，更新页面之后就像一个普通的静态网页从起始的　HTML　文件中获取这样。

![](https://www.freecodecamp.org/news/content/images/2020/06/building-website-with-more-steps.jpg)

它就像是使用更多的步骤建立一个网页...

虽然看起来步骤变多了，但通常能够提供更快速的缓存和渲染，因此提供了更优质的开发体验。因为在初始请求页面时的资料减少和缓冲优先的排序，所以能够提供更好的使用者体验。

一些常用和广受欢迎的前端开发工具包括：

-   UI 框架如  [React][24]  或  [Vue][25]
-   Web 框架如  [Gatsby][26]
-   编译器如  [Babel][27]
-   集合器如  [Webpack][28]
-   CSS 工具如  [Sass][29]

但是这些 API，无论是我们付费或者是自行建立的都需要建立在 _某些地方_。这就是所谓的后端。

## 什么是后端开发？

The back end layer is usually where the business logic occurs. This can be super complex like the rules that determine revenue for an e-commerce company or something more common like a user profile.

### 传统的后端开发是什么样的？

The back ends of applications were historically built using server-side languages like  [PHP][30]  or  [Ruby][31]. The idea is that you have a server that you need to perform complex operations on, so the way to do that is with a language that server would understand.

On each request to the server, the backend would perform the full stack of the operations, including rendering out the front end. By using frameworks or DIY architectures, the back end would accept the request, figure out what it should do with that request, run any business logic needed with the request, and provide the front end any data that it would need to display a response to that request.

![](https://www.freecodecamp.org/news/content/images/2020/06/front-end-back-end-500-error.jpg)

Back end giving the front end a 500 Internal Server Error

Some of the more traditional back end tools include:

-   On-premise or remotely managed servers like  [Rackspace][32]
-   HTTP servers using  [Apache][33]
-   Databases like  [MySQL][34]
-   Server side languages like  [PHP][35]  or  [Perl][36]
-   Application frameworks like  [Ruby on Rails][37]

### 目前的后端开发是什么样的？

Back end stacks look somewhat similar to the way they did before, aside from newer code patterns, except more often you’ll see the back ends provide data through APIs via HTTP requests instead of directly to the templates the front end team are working on.

While the foundation isn’t super different, it actually be comes increasingly complex as you have to deal with different security implications that could compromise your system if not properly configured such as leaving an API open to the public that returns sensitive user data.

But also how the server operates can be completely different. While previously, we might run our python on our own managed server (we still can), we can now make use of serverless functions with tools like  [AWS Lambda][38]  that simplify how we manage code.

While “[serverless][39]” doesn’t necessarily mean there are literally no servers, it means that as a service, the developer doesn’t have to worry about maintaining that server and can instead just focus on the code they need to run.

Some of the back end tools that are more common and growing in popularity include:

-   Cloud servers like  [AWS EC2][40]
-   Serverless services like  [AWS Lambda][41]
-   NoSQL databases like  [MongoDB][42]
-   Languages like  [Python][43]  or javascript via  [NodeJS][44]
-   Web application frameworks like  [Serverless Framework][45]

## 模糊地带

Part of the twist with back ends is now you can write your back end with javascript. With the inception of  [Node.js][46], developers were given the ability to use their favorite browser language to do most of the same things they were used to and familiar with but now on a server.

![](https://www.freecodecamp.org/news/content/images/2020/06/nodejs-never-stopped-to-think-if-should.jpg)

Never stopped to think if we should write JS on a server

While not everyone is fond of running javascript as a server side language, it became a little easier to use the same language to write the full stack of an application. This changed the game a bit as far as front ends and back ends were concerned.

But it’s also started to come full circle where you now see systems that build APIs right  [next to the front end][47]  similar to what you might see in a traditional stack.

## 前端 vs 后端

Regardless of the stack, there will always be the separation of concerns. The UI and all of the interaction, whether rendered on the server or in the browser, is what makes the front end the front end and the data and business logic, whether coming from the server in your company’s closet or a managed function, is what makes the back end the back end.

Whether you prefer to work on the user facing features or build the logic that lets them do things, there are plenty of resources to get started.

## 学习资源

### 前端

-   [freecodecamp.org Responsive Web Design Certification][48]  (freecodecamp.org)
-   [Beginner Javascript][49]  (beginnerjavascript.com - Wes Bos)
-   [React Tutorial for Beginners][50]  (youtube.com - Programming with Mosh)
-   [Front End Masters][51]  (frontendmasters.com)

### 后端

-   [freecodecamp.org APIs and Microservices Certification][52]  (freecodecamp.org)
-   [Super simple start to serverless][53]  (kentcdodds.com)
-   [AWS Certified Cloud Practitioner Training 2019 - A Free 4-hour Video Course][54]  (freecodecamp.org)
-   [CS50's Introduction to Computer Science][55]  (edx.org)

### 以上皆是

-   [How to Become a Full Stack Web Developer in 2020][56]  (colbyfayock.com)
-   [Egghead.io][57]  (egghead.io)
-   [100 Days of Code][58]  (100daysofcode.com)
-   [The Web Developer Bootcamp][59]  (udemy.com - Colt Steele)

[1]: https://www.freecodecamp.org/news/front-end-developer-vs-back-end-developer-definition-and-meaning-in-practice/#The%20many%20layers%20of%20development
[2]: https://www.freecodecamp.org/news/front-end-developer-vs-back-end-developer-definition-and-meaning-in-practice/#but-we-re-not-all-full-stack
[3]: https://www.freecodecamp.org/news/front-end-developer-vs-back-end-developer-definition-and-meaning-in-practice/#so-what-is-the-difference-between-front-end-development-and-back-end-development
[4]: https://www.freecodecamp.org/news/front-end-developer-vs-back-end-developer-definition-and-meaning-in-practice/#what-is-front-end-development
[5]: https://www.freecodecamp.org/news/front-end-developer-vs-back-end-developer-definition-and-meaning-in-practice/#what-is-back-end-development
[6]: https://www.freecodecamp.org/news/front-end-developer-vs-back-end-developer-definition-and-meaning-in-practice/#where-things-get-fuzzy
[7]: https://www.freecodecamp.org/news/front-end-developer-vs-back-end-developer-definition-and-meaning-in-practice/#resources-to-learn
[8]: https://en.wikipedia.org/wiki/Serverless_computing
[9]: https://www.colbyfayock.com/2020/02/how-to-become-a-full-stack-web-developer-in-2020/
[10]: https://full-stack.netlify.app/
[11]: https://reactjs.org/
[12]: https://www.php.net/
[13]: http://www.template-toolkit.org/
[14]: https://www.perl.org/
[15]: https://wordpress.org/
[16]: https://jquery.com/
[17]: https://mootools.net/
[18]: https://wordpress.com/
[19]: https://developer.mozilla.org/en-US/docs/Web/CSS
[20]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
[21]: https://reactjs.org/
[22]: https://vuejs.org/
[23]: https://angular.io/
[24]: https://reactjs.org/
[25]: https://vuejs.org/
[26]: https://www.gatsbyjs.org/
[27]: https://babeljs.io/
[28]: https://webpack.js.org/
[29]: https://sass-lang.com/
[30]: https://www.php.net/
[31]: https://www.ruby-lang.org/en/
[32]: https://www.rackspace.com/
[33]: https://httpd.apache.org/
[34]: https://www.mysql.com/
[35]: https://www.php.net/
[36]: https://www.perl.org/
[37]: https://rubyonrails.org/
[38]: https://aws.amazon.com/lambda/
[39]: https://en.wikipedia.org/wiki/Serverless_computing
[40]: https://aws.amazon.com/ec2/
[41]: https://aws.amazon.com/lambda/
[42]: https://www.mongodb.com/
[43]: https://www.python.org/
[44]: https://nodejs.org/
[45]: https://www.serverless.com/
[46]: https://nodejs.org/en/
[47]: https://redwoodjs.com/tutorial/redwood-file-structure
[48]: https://www.freecodecamp.org/learn/
[49]: https://beginnerjavascript.com/
[50]: https://www.youtube.com/watch?v=Ke90Tje7VS0
[51]: https://frontendmasters.com/
[52]: https://www.freecodecamp.org/learn
[53]: https://kentcdodds.com/blog/super-simple-start-to-serverless/
[54]: https://www.freecodecamp.org/news/aws-certified-cloud-practitioner-training-2019-free-video-course/
[55]: https://www.edx.org/course/cs50s-introduction-to-computer-science
[56]: https://www.colbyfayock.com/2020/02/how-to-become-a-full-stack-web-developer-in-2020/
[57]: https://egghead.io/?af=atzgap
[58]: https://www.100daysofcode.com/
[59]: https://www.udemy.com/course/the-web-developer-bootcamp/
