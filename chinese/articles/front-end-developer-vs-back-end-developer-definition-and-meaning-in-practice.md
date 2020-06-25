> * 原文：[Front End Developer vs Back End Developer – Definition and Meaning In Practice 前端和后端的区别到底是什么？非程序员也能读懂！](https://www.freecodecamp.org/news/front-end-developer-vs-back-end-developer-definition-and-meaning-in-practice/)
> * 作者：Colby Fayock
> * 译者：
> * 校对者：

Websites and applications are complex! Buttons and images are just the tip of the iceberg. With this kind of complexity, you need people to manage it, but which parts are the front end developers and back end developers responsible for?

The many layers of development
But we’re not all full stack
So what is the difference between Front End Development and Back End Development?
What is Front End Development?
What is Back End Development?
Where things get fuzzy
Resources to learn
The many layers of development
Whether you’re working on a website or a native iOS app, all development environments share a common theme — there’s a front end to an application and a back end.

This line can get blurry, especially given the rise of javascript and the serverless world. With the tooling somewhat merging together, we might sometimes wonder if we’re a full stack developer.


But we’re not all full stack
As much as we might all want to be, we’re not all full stack developers. Personally, I find myself able to be productive in the back end of an application, but it’s not my strength and I much prefer to be heads down building UIs.

And some people are the opposite, where they are strongest dealing with building APIs in the back end of an application and while they can build out a UI, it might be more of a prototype-like experience than a fleshed out application.

So what is the difference between Front End Development and Back End Development?
Even if you are a full stack developer, that doesn’t mean there’s not a division of responsibilities.


Front End Engineer vs Back End Engineer
So what do those look like?

What is Front End Development?
The front end of an application typically refers to the layer that represents the UI (user interface). This can include anything from a static site with HTML and CSS to a full React app that powers the UI.

What did Front End Development traditionally look like?
Javascript currently rules the front end web, but that wasn’t always the case. While it could have been used to add little bits of interaction to a site, typically front ends were rendered using server-side templating languages like framework-driven PHP and Template Toolkit (Perl).

This grew to be super popular in practice with home grown frameworks or tools like Wordpress that used PHP to drive a massive community of developers who built their websites with those tools.

The way it worked was the templating language was able to get its data straight from the server as it was rendered. When a browser requested the page directly from the origin (the server itself), whatever data the template would need, the application logic would provide at that time.

Some of the more traditional front end tools include:

Libraries like jQuery or MooTools
Website frameworks like Wordpress
Plain CSS
Abundant use of Table elements
But as time went on, javascript kept getting more mature as a language and browsers kept getting more powerful, which led to the idea that we could move more of that work to the browser to build faster and more interactive experiences.

What does Front End Development look like now?
Now it’s common to see javascript-heavy websites and apps built using UI frameworks like React, Vue, and Angular. These tools provide abstractions that allow developers to build complex UIs with reusable patterns like components.

When the browser loads the page, the page receives an initial HTML document that also includes the script tag to the javascript (same as always). But once that javascript loads, it reaches out to APIs using browser requests that when completed, update the page to fill in any kind of dynamic data that you’d typically get along with that first HTML document.


It's like building a website... with more steps
While it sounds like more steps, it commonly provides a faster initial page load and render, not to mention it has a great developer experience. By delivering less on that first request and prioritizing what loads after that, it usually ends up as a better user experience.

Some of the front end tools that are more common and growing in popularity include:

UI frameworks like React or Vue
Web frameworks like Gatsby
Compilers like Babel
Bundlers like Webpack
CSS tools like Sass
But those APIs, whether ones we pay for or create ourselves, need to be built somewhere. That’s where the back end comes in.

What is Back End Development?
The back end layer is usually where the business logic occurs. This can be super complex like the rules that determine revenue for an e-commerce company or something more common like a user profile.

What did Back End Development traditionally look like?
The back ends of applications were historically built using server-side languages like PHP or Ruby. The idea is that you have a server that you need to perform complex operations on, so the way to do that is with a language that server would understand.

On each request to the server, the backend would perform the full stack of the operations, including rendering out the front end. By using frameworks or DIY architectures, the back end would accept the request, figure out what it should do with that request, run any business logic needed with the request, and provide the front end any data that it would need to display a response to that request.


Back end giving the front end a 500 Internal Server Error
Some of the more traditional back end tools include:

On-premise or remotely managed servers like Rackspace
HTTP servers using Apache
Databases like MySQL
Server side languages like PHP or Perl
Application frameworks like Ruby on Rails
What does Back End Development look like now?
Back end stacks look somewhat similar to the way they did before, aside from newer code patterns, except more often you’ll see the back ends provide data through APIs via HTTP requests instead of directly to the templates the front end team are working on.

While the foundation isn’t super different, it actually be comes increasingly complex as you have to deal with different security implications that could compromise your system if not properly configured such as leaving an API open to the public that returns sensitive user data.

But also how the server operates can be completely different. While previously, we might run our python on our own managed server (we still can), we can now make use of serverless functions with tools like AWS Lambda that simplify how we manage code.

While “serverless” doesn’t necessarily mean there are literally no servers, it means that as a service, the developer doesn’t have to worry about maintaining that server and can instead just focus on the code they need to run.

Some of the back end tools that are more common and growing in popularity include:

Cloud servers like AWS EC2
Serverless services like AWS Lambda
NoSQL databases like MongoDB
Languages like Python or javascript via NodeJS
Web application frameworks like Serverless Framework
Where things get fuzzy
Part of the twist with back ends is now you can write your back end with javascript. With the inception of Node.js, developers were given the ability to use their favorite browser language to do most of the same things they were used to and familiar with but now on a server.


Never stopped to think if we should write JS on a server
While not everyone is fond of running javascript as a server side language, it became a little easier to use the same language to write the full stack of an application. This changed the game a bit as far as front ends and back ends were concerned.

But it’s also started to come full circle where you now see systems that build APIs right next to the front end similar to what you might see in a traditional stack.

Front End vs Back End
Regardless of the stack, there will always be the separation of concerns. The UI and all of the interaction, whether rendered on the server or in the browser, is what makes the front end the front end and the data and business logic, whether coming from the server in your company’s closet or a managed function, is what makes the back end the back end.

Whether you prefer to work on the user facing features or build the logic that lets them do things, there are plenty of resources to get started.

Resources to learn
Front End
freecodecamp.org Responsive Web Design Certification (freecodecamp.org)
Beginner Javascript (beginnerjavascript.com - Wes Bos)
React Tutorial for Beginners (youtube.com - Programming with Mosh)
Front End Masters (frontendmasters.com)
Back End
freecodecamp.org APIs and Microservices Certification (freecodecamp.org)
Super simple start to serverless (kentcdodds.com)
AWS Certified Cloud Practitioner Training 2019 - A Free 4-hour Video Course (freecodecamp.org)
CS50's Introduction to Computer Science (edx.org)
All the above
How to Become a Full Stack Web Developer in 2020 (colbyfayock.com)
Egghead.io (egghead.io)
100 Days of Code (100daysofcode.com)
The Web Developer Bootcamp (udemy.com - Colt Steele)

