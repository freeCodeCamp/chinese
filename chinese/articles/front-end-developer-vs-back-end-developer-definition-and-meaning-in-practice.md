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

无论你是使用网站或者是ios应用程式，所有的开发环境都使用相同的模式 - 那就是前端开发和后端开发。


这界线是模糊的，尤其是当 Javascript 和[“去伺服器”][8]世界的兴起。当开发工具开始结合在一起时，我们会开始怀疑自己算不算是[全栈开发者][9]。


## 但我们不是全栈程序员


虽然我们[都想被][10]称为全栈开发者，但我们并不是。以我个人来说，我发现自己在后端的开发比较有效率，但这并不是我的强项，我更喜欢建立使用者页面（ UI ）。


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
=======


它的运作方式是这些模板可以在运行时直接从伺服器获取资料。当浏览器从伺服器请求网页资料时，模板所需的资料和应用的逻辑都会在那个时候获取。

一些传统的前端工具包括：


-   软件包如 [jQuery][16] 或 [MooTools][17]
-   网页框架 [Wordpress][18]
-   [CSS][19]
-   充分地使用 [Table][20] 元素


但时间久了之后， 当 Javascript 变得越来越成熟和浏览器的强化，我们就能够建立更多，更快，互动性更强的使用者体验。


### 目前的前端开发是什么样的？

目前使用 Javascript 的网页和应用程式建立 UI 的框架如 [React][21]，[Vue][22]，和 [Angular][23] 越来越常见。这些工具提供了开发者能够重复使用的复杂　UI　元件的功能。


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


后端是程式逻辑发生的地方。这可以是非常复杂比如管理电子商务公司的收入或者只是简单的用户资料。


### 传统的后端开发是什么样的？

传统的应用程式后端通常使用伺服器编程语言如  [PHP][30] 或 [Ruby][31]。这个方法是需要一个伺服器来运行复杂的运动算的，所以才会使用伺服器能够明白的语言。


所以对伺服器的请求，后端会执行所有的程式，当然也包括前端的渲染。通过使用框架或者自行定义的结构，后端能够接受请求，通过请求执行相对应的逻辑，然后提供前端所需要显示的资料。

![](https://www.freecodecamp.org/news/content/images/2020/06/front-end-back-end-500-error.jpg)

后端给前端的 500 Internal Server Error

一些传统的后端开发工具包括：


-   本地或远程控制的伺服器如 [Rackspace][32]
-   HTTP 伺服器如  [Apache][33]
-   数据库如  [MySQL][34]
-   伺服器程式语言如  [PHP][35] 或 [Perl][36]
-   应用程式框架如 [Ruby on Rails][37]

### 目前的后端开发是什么样的？


目前后端的开发和之前并没有太大的变化，除了有新的编码格式，就是我们经长能够看见的后端透过 HTTP 请求提供资料给 API 而不是直接透过前端工程师所建立的模板。

因为基础并没有太大的变化，当我们开放存有敏感资料的 API 给大众时会带来复杂且难处理的安全隐患。


但伺服器的运行也有了不同。之前，我们需要在我们自己的伺服器运行 Python 代码（当然现在也可以），但现在我们可以使用如 [AWS Lambda][38] 的工具来简化我们的代码。
=======


可是 “[去伺服器][39]” 并不是真正不需要伺服器的意思，而是转化成为了一种服务，开发者能够不需要担心伺服器维护的情况下进行开发工作，只需要专注在编码本身的运行就行了。
一些常用和广受欢迎的后端开发工具包括：

-   云伺服器如 [AWS EC2][40]
-   去伺服器服务如 [AWS Lambda][41]
-   NoSQL 数据库如 [MongoDB][42]
-   程式语言如 [Python][43] 或透过 [NodeJS][44] 的 Javascript
-   网页程式框架如 [Serverless Framework][45]


## 模糊地带

透过 [Node.js][46] 的 Javascript 开发者能够使用自己喜欢的浏览器语言执行与伺服器语言相同的任务。


![](https://www.freecodecamp.org/news/content/images/2020/06/nodejs-never-stopped-to-think-if-should.jpg)

不停止地想像能够在伺服器写 JS 代码

虽然并不是所有人都是以 Javascript 作为伺服器语言，当它的确能够简化整个程式只使用同一种语言。这重写了前端和后端的游戏规则。


但它他也开始进入一个完整的生态圈，就是现在我们会看到系统的 API 就建立在 [前端的隔壁][47] 这跟传统的格式一样。


## 前端 vs 后端

无论前端或后端，总是会有区分的界限。所有互动的 UI 不论是在伺服器或浏览器运行的，都属于前端。而那些使前端的逻辑发生和资料来源，不论是某公司提供的服务或者是自定义的结构，都是后端。

不论你喜欢搭建使用者界面或者建立后台逻辑，都有不少的资源让你开始。

## 学习资源

### 前端

-   [freecodecamp.org Responsive Web Design Certification][48] (freecodecamp.org)
-   [Beginner Javascript][49] (beginnerjavascript.com - Wes Bos)
-   [React Tutorial for Beginners][50] (youtube.com - Programming with Mosh)
-   [Front End Masters][51] (frontendmasters.com)

### 后端

-   [freecodecamp.org APIs and Microservices Certification][52] (freecodecamp.org)
-   [Super simple start to serverless][53] (kentcdodds.com)
-   [AWS Certified Cloud Practitioner Training 2019 - A Free 4-hour Video Course][54] (freecodecamp.org)
-   [CS50's Introduction to Computer Science][55] (edx.org)

### 以上皆是

-   [How to Become a Full Stack Web Developer in 2020][56] (colbyfayock.com)
-   [Egghead.io][57] (egghead.io)
-   [100 Days of Code][58] (100daysofcode.com)
-   [The Web Developer Bootcamp][59] (udemy.com - Colt Steele)

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
