> -   原文：[Front End Developer vs Back End Developer – Definition and Meaning In Practice 前端和后端的区别到底是什么？非程序员也能读懂！](https://www.freecodecamp.org/news/front-end-developer-vs-back-end-developer-definition-and-meaning-in-practice/)
> -   作者：Colby Fayock
> -   译者：
> -   校对者：

![Front End Developer vs Back End Developer – Definition and Meaning In Practice](https://www.freecodecamp.org/news/content/images/size/w2000/2020/06/front-end-back-end.jpg)

Websites and applications are complex! Buttons and images are just the tip of the iceberg. With this kind of complexity, you need people to manage it, but which parts are the front end developers and back end developers responsible for?

-   [The many layers of development][1]
-   [But we’re not all full stack][2]
-   [So what is the difference between Front End Development and Back End Development?][3]
-   [What is Front End Development?][4]
-   [What is Back End Development?][5]
-   [Where things get fuzzy][6]
-   [Resources to learn][7]

## The many layers of development

Whether you’re working on a website or a native iOS app, all development environments share a common theme — there’s a front end to an application and a back end.

This line can get blurry, especially given the rise of javascript and the [serverless][8] world. With the tooling somewhat merging together, we might sometimes wonder if we’re a [full stack developer][9].

## But we’re not all full stack

As much as we might all [want to be][10], we’re not all full stack developers. Personally, I find myself able to be productive in the back end of an application, but it’s not my strength and I much prefer to be heads down building UIs.

And some people are the opposite, where they are strongest dealing with building APIs in the back end of an application and while they can build out a UI, it might be more of a prototype-like experience than a fleshed out application.

## So what is the difference between Front End Development and Back End Development?

Even if you are a full stack developer, that doesn’t mean there’s not a division of responsibilities.

![](https://www.freecodecamp.org/news/content/images/2020/06/front-end-vs-back-end-engineer-2.jpg)

Front End Engineer vs Back End Engineer

So what do those look like?

## What is Front End Development?

The front end of an application typically refers to the layer that represents the UI (user interface). This can include anything from a static site with HTML and CSS to a full [React][11] app that powers the UI.

### What did Front End Development traditionally look like?

Javascript currently rules the front end web, but that wasn’t always the case. While it could have been used to add little bits of interaction to a site, typically front ends were rendered using server-side templating languages like framework-driven [PHP][12] and [Template Toolkit][13] ([Perl][14]).

This grew to be super popular in practice with home grown frameworks or tools like [Wordpress][15] that used PHP to drive a massive community of developers who built their websites with those tools.

The way it worked was the templating language was able to get its data straight from the server as it was rendered. When a browser requested the page directly from the origin (the server itself), whatever data the template would need, the application logic would provide at that time.

Some of the more traditional front end tools include:

-   Libraries like [jQuery][16] or [MooTools][17]
-   Website frameworks like [Wordpress][18]
-   Plain [CSS][19]
-   Abundant use of [Table][20] elements

But as time went on, javascript kept getting more mature as a language and browsers kept getting more powerful, which led to the idea that we could move more of that work to the browser to build faster and more interactive experiences.

### What does Front End Development look like now?

Now it’s common to see javascript-heavy websites and apps built using UI frameworks like [React][21], [Vue][22], and [Angular][23]. These tools provide abstractions that allow developers to build complex UIs with reusable patterns like components.

When the browser loads the page, the page receives an initial HTML document that also includes the script tag to the javascript (same as always). But once that javascript loads, it reaches out to APIs using browser requests that when completed, update the page to fill in any kind of dynamic data that you’d typically get along with that first HTML document.

![](https://www.freecodecamp.org/news/content/images/2020/06/building-website-with-more-steps.jpg)

It's like building a website... with more steps

While it sounds like more steps, it commonly provides a faster initial page load and render, not to mention it has a great developer experience. By delivering less on that first request and prioritizing what loads after that, it usually ends up as a better user experience.

Some of the front end tools that are more common and growing in popularity include:

-   UI frameworks like [React][24] or [Vue][25]
-   Web frameworks like [Gatsby][26]
-   Compilers like [Babel][27]
-   Bundlers like [Webpack][28]
-   CSS tools like [Sass][29]

But those APIs, whether ones we pay for or create ourselves, need to be built _somewhere_. That’s where the back end comes in.

## What is Back End Development?

The back end layer is usually where the business logic occurs. This can be super complex like the rules that determine revenue for an e-commerce company or something more common like a user profile.

### What did Back End Development traditionally look like?

The back ends of applications were historically built using server-side languages like [PHP][30] or [Ruby][31]. The idea is that you have a server that you need to perform complex operations on, so the way to do that is with a language that server would understand.

On each request to the server, the backend would perform the full stack of the operations, including rendering out the front end. By using frameworks or DIY architectures, the back end would accept the request, figure out what it should do with that request, run any business logic needed with the request, and provide the front end any data that it would need to display a response to that request.

![](https://www.freecodecamp.org/news/content/images/2020/06/front-end-back-end-500-error.jpg)

Back end giving the front end a 500 Internal Server Error

Some of the more traditional back end tools include:

-   On-premise or remotely managed servers like [Rackspace][32]
-   HTTP servers using [Apache][33]
-   Databases like [MySQL][34]
-   Server side languages like [PHP][35] or [Perl][36]
-   Application frameworks like [Ruby on Rails][37]

### What does Back End Development look like now?

Back end stacks look somewhat similar to the way they did before, aside from newer code patterns, except more often you’ll see the back ends provide data through APIs via HTTP requests instead of directly to the templates the front end team are working on.

While the foundation isn’t super different, it actually be comes increasingly complex as you have to deal with different security implications that could compromise your system if not properly configured such as leaving an API open to the public that returns sensitive user data.

But also how the server operates can be completely different. While previously, we might run our python on our own managed server (we still can), we can now make use of serverless functions with tools like [AWS Lambda][38] that simplify how we manage code.

While “[serverless][39]” doesn’t necessarily mean there are literally no servers, it means that as a service, the developer doesn’t have to worry about maintaining that server and can instead just focus on the code they need to run.

Some of the back end tools that are more common and growing in popularity include:

-   Cloud servers like [AWS EC2][40]
-   Serverless services like [AWS Lambda][41]
-   NoSQL databases like [MongoDB][42]
-   Languages like [Python][43] or javascript via [NodeJS][44]
-   Web application frameworks like [Serverless Framework][45]

## Where things get fuzzy

Part of the twist with back ends is now you can write your back end with javascript. With the inception of [Node.js][46], developers were given the ability to use their favorite browser language to do most of the same things they were used to and familiar with but now on a server.

![](https://www.freecodecamp.org/news/content/images/2020/06/nodejs-never-stopped-to-think-if-should.jpg)

Never stopped to think if we should write JS on a server

While not everyone is fond of running javascript as a server side language, it became a little easier to use the same language to write the full stack of an application. This changed the game a bit as far as front ends and back ends were concerned.

But it’s also started to come full circle where you now see systems that build APIs right [next to the front end][47] similar to what you might see in a traditional stack.

## Front End vs Back End

Regardless of the stack, there will always be the separation of concerns. The UI and all of the interaction, whether rendered on the server or in the browser, is what makes the front end the front end and the data and business logic, whether coming from the server in your company’s closet or a managed function, is what makes the back end the back end.

Whether you prefer to work on the user facing features or build the logic that lets them do things, there are plenty of resources to get started.

## Resources to learn

### Front End

-   [freecodecamp.org Responsive Web Design Certification][48] (freecodecamp.org)
-   [Beginner Javascript][49] (beginnerjavascript.com - Wes Bos)
-   [React Tutorial for Beginners][50] (youtube.com - Programming with Mosh)
-   [Front End Masters][51] (frontendmasters.com)

### Back End

-   [freecodecamp.org APIs and Microservices Certification][52] (freecodecamp.org)
-   [Super simple start to serverless][53] (kentcdodds.com)
-   [AWS Certified Cloud Practitioner Training 2019 - A Free 4-hour Video Course][54] (freecodecamp.org)
-   [CS50's Introduction to Computer Science][55] (edx.org)

### All the above

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
