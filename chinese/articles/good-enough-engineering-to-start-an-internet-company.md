---
title: 创建一家互联网公司的最佳工程实践
date: 2019-08-06 16:04:51
authors:
  - TechQuery
  - Wenbin Fang
categories:
  - chinese
  - articles
tags:
  - engineer
  - Internet
  - start-up
updated: 2019-08-06 16:10:35

---

I gave a guest lecture in an undergraduate software engineering class (CSCE431) at Texas A&M University in March 2019. Now I’ve turned this lecture into a blog post here, and hopefully some people on the Internet will find this useful.

If you arrived from a Google search, here are some contexts:

I’m running a small Internet company — Listen Notes, Inc. — with only one full-time employee (me), as of August 2, 2019. We built a podcast search engine website ListenNotes.com and a podcast API.

I’ll share with you my experience about starting an internet company. Building an internet product is not like building an iPhone or a pyramid. Your product doesn’t need to be perfect at the beginning. If you are building something useful, other people will tell you what to do next. And you’ll figure out what’s next. Generally, you should be comfortable dealing with uncertainty, if you want to start your own company.

The first version of Facebook was launched in early February 2004, which was an undergraduate student’s mere four weeks worth of work. It was a good enough product with good enough engineering. Every Computer Science college graduate nowadays should be able to build the first version of Facebook over a weekend, using a modern web programming framework (e.g., Rails, Django…).

Companies such as Google, Snapchat, Spotify, Amazon, Twitter, and others are all great internet companies in our generation.

However, I can’t tell you how to become a company as successful as them. I’m not there yet. These companies are so successful and so big. For example, Google has 100,000 employees, as of March 2019. But there was a moment in the history of time when Google had only two employees. You have to start from somewhere or nowhere. I can talk about how to get started.

Hopefully after this lesson, you’ll feel that starting an internet company is not hard at all. And you’ll learn about some tools and services that you can use in your future projects.

You’ll hear me saying “there’s a tool” a lot. This is what I mean by “good enough engineering.” It’s 2019 now. It’s unlikely that you are the first person to encounter a fundamentally new problem. There must be tools and services out there that can help you solve problems — oftentimes, for free!

Before we delve further, let me provide a brief introduction of Listen Notes.

Listen Notes is a podcast search engine website. You type in a keyword and you search the whole internet’s podcasts. It’s as simple as Google :) But simple doesn’t mean easy. We also built a lot of tools on top of the core search engine to help people discover & enjoy podcasts.

[https://www.listennotes.com/][1]

Let’s take a step back to talk about podcasts. A podcast is a type of media format. Some people call it “on-demand radio.” We consume tons of media content everyday. We watch YouTube videos, watch TVs, read books, listen to music, and listen to podcasts. We consume media content because we want to get information, gain knowledge, and be entertained. Nowadays you can literally learn any topics by listening to podcasts. You can listen to podcasts while your eyes & hands are busy (e.g., driving, working out, walking, doing housework…).

In early 2017, I found myself consuming more information from podcasts than from other media formats (e.g., TVs, books…). I needed a podcast search engine that I could use to search & find individual episodes to binge listen to. In hindsight, a podcast search engine should be a very straightforward thing to exist. But I couldn’t find a good one. So I spent less than one week building a prototype of Listen Notes, the podcast search engine birthed out of my own wishes and necessities.

Very first version of Listen Notes. Credits: Lifehacker I launched the prototype and used it a lot myself. But I didn’t touch the code for about nine months, until I decided to work on it full-time after I left my first failed startup. That was September 2017. Cut to 1.5 years later, I’m still having fun working on Listen Notes :)

Do you need to know where to find an office? Yes, there’s a service for that. I use WeWork. I’ve got a small office inside WeWork in San Francisco. The office is not cheap, but I think it’s a good investment for productivity.

I can choose to spend money being 200% more productive myself, or spend money hiring one more employee. I can choose to save money and waste more time, or to save time and make more money. If you were me, what would your choice be?

By starting an internet business, we need to have a formal company, a legal entity. There’s a service for that.

I used Stripe Atlas to incorporate Listen Notes, Inc. I paid $500, and I got a Delaware C Corp within 10 days. Stripe Atlas provides some nice perks, e.g., $5k AWS (Amazon Web Services) credits. But to keep the company around, I have to pay ~$2k/year for taxes, accounting, and other stuff. This gives you a basic idea of the minimum cost of running a company.

Because we are a company now, we have to deal with some legal stuff. There’s a service for that.

You can use Clerky to generate legal documents or use UpCounsel to get a lawyer. I’ve used both services. They aren’t perfect, but they worth the money. You can’t expect to get Ritz-Carlton-level services with a McDonald’s price, right? If you want to be happy, you’d better set the correct level of expectation.

To get started, you just need a good enough domain name — a $10/year .com domain. You can always buy a great domain name later.

For example, Dropbox used getdropbox.com for more than 2 years before they bought dropbox.com for $300k. How did I discover that kind of trivia? I listen to podcasts! There was a podcast interview of Drew Houston(Dropbox co-founder & CEO), where he talked about how they secured the dropbox.com domain name.

After you get a domain name, make sure you also create a bunch of company accounts on social networking sites such as Twitter, Facebook, Instagram, and (maybe) Snapchat.

And most companies just use G Suite for their company email, which is basically Gmail.

Internet companies build online services. Most software today is online services. If you can’t access the Internet, you can’t use most apps on your phone.

Online services typically follow the client/server model. The client side software sends requests to the server side and gets responses to render the UI or to perform certain tasks.

All websites are online services, obviously. We use web browsers to access websites. To some degree, mobile apps are specialized browsers.

On the server side, we run servers. You just need good enough servers to get started. By “servers” I mean VPS (Virtual Private Servers), which basically provides root access to an IP address. Once you ssh into an IP address (a VPS), you can do whatever you want, e.g., install software & put your code there. And you are now open for business.

For VPS, I recommend using something simple at the beginning, e.g., DigitalOcean or AWS Lightsail. At Listen Notes, we used DigitalOcean for about one year because it’s cheap & easy to set up, then we switched to AWS EC2 when our website got more traffic and we needed more flexibility & “production”-ish setup.

Such backend architecture is pretty common for running an online service.

The client side (e.g., browsers) sends requests. The load balancer distributes requests evenly to web servers. We typically run a lot of web servers, where the server side code is running (e.g., Rails, Django…). We need a datastore to store our data. Web servers interact with the datastore to read and write data.

On the left hand side, it’s synchronous processing. Here comes a request, and the web server processes it and returns a response right away. It’s synchronous.

We need asynchronous processing as well to handle non-urgent, long-running, or compute-intensive tasks. We don’t want to consume compute resources for such tasks on the web server. So we typically offload such tasks for the workers to process. Web servers place messages in the message queue, and workers pick up messages to process the tasks.

For example, we generate this kind of image for search results on Listen Notes (Example):

This type of image-generation task is kind of compute intensive and is not urgent. So we offload it for workers to process, instead of handling them on the web servers.

Finally, there must be a Scheduler for time-based scheduling jobs. Many companies just use cron jobs on Linux and they switch to something else when they become bigger (e.g., I built a Scheduler system for my former employer Nextdoor a few years ago to replace cron jobs). For Listen Notes, we have a lot of time-based scheduling jobs, e.g., sending Listen Alerts.

We use Nginx as a simple load balancer. The backend code is mostly in Python/Django. We use different datastores for different purposes. We use Postgres for the main datastore, which is our single source of truth. We are a search engine, so we use Elasticsearch. We use Redis for a lot of things, but mostly for caching & implementing some “fast” features like Listen Real-Time.

On the asynchronous processing land, we use Celery, Celery Beat, and RabbitMQ.

We have to keep the server-side processes up and running 24/7. We’d better use some kind of process manager to automatically restart processes if they crash. We use Supervisor a lot at Listen Notes.

Two recommendations here:

Learn tech stacks of real companies on stackshare.io Listen to Software Engineering Daily. They interview engineers from real companies, so you can learn how companies do engineering.

As end users, we get tons of notifications from online services via email, SMS, and push notifications. When an Uber driver is approaching, we get push notifications. When we shop on Amazon, we get email notifications (typically with receipts). When our bank accounts experience problems, we get SMS notifications.

Let’s turn the table. When we build online services, how do we send notifications to users? There’s a service or API for each notification channel, e.g., SendGrid or Amazon SES for email, Twilio for SMS…

Next, we need some kind of triggers to initiate notifications.

One type of trigger is from user actions. For example, a user can invite people to contribute to the same playlist on Listen Later. When he or she clicks the invite button, it triggers an email notification that is sent to the potential contributor. So the web server places a message in the message queue, and one of the workers picks up the message and sends the invite email later.

Another type of trigger is from time-based schedules, e.g., send emails to these 500 people at 7 a.m. every morning.

Each of the blocks in the architecture diagram represents a process or multiple processes on the operating systems. We can run those processes on one server or multiple servers.

We typically create a provision of multiple sets of servers for different audiences & for different purposes.

Each set of servers runs in a separate environment.

Servers in the production environment serve live traffic. The audience is made up of real users.

Servers in the staging environment are primarily for testing. The audience is comprised of employees in the company. We need the staging environment to manually test product features before releasing the whole shebang to production.

And we need a dev environment for development purposes, which is typically used by a single developer.

For Listen Notes, we use Vagrant & VirtualBox to set up a virtual machine. And we run everything inside this virtual machine.

Since the backend code of Listen Notes is primarily written in Python/Django, I use PyCharm to write code. I know, it’s not VS Code or whatever cool text editors others use. But I’m 1000x more productive using PyCharm than using other text editors - though, I was a Vim user for 5 years and an Emacs user for another 6 years :) It’s like some people like spicy food, while others don’t. We can’t blame people who don’t like spicy food, right? Don’t get involved in the religious war of IDEs, languages, technologies… GETTING THINGS DONE™ is more important.

In terms of front-end engineering, I have very little to share here. Listen Notes has only a website. We don’t have native apps (except for an experimental Just Listen app).

For the web front-end, I use the conventional Reactjs & Bootstrap. Pretty standard nowadays.

If you just get started with your projects, I would suggest focusing on a single platform first. Don’t go cross-platform too early. We typically have very limited resources at the very beginning. Look at Instagram: When they were an independent company, they had only an iOS app initially. And they got acquired for $1B.

If you are building a website, make sure you make it responsive from day 1. You can easily use modern browsers’ developer tools to test different screen sizes (e.g., on Chrome).

You also want to test on multiple operating systems & browsers. There’s a service for that: Use BrowserStack.

If you have more than one server, you’d better NOT install software & do configuration manually. Infrastructure as code is a common practice in internet companies nowadays. Basically, we codify the specification of servers and automate the server configuration.

For Listen Notes, we use Ansible. We need to write a bunch of yml configuration files to specify what software to install & where to put config files. When we run ansible-playbook in command line, it’ll automatically configure multiple servers for us.

Nowadays, servers are elastic or even ephemeral, with on-demand configurations to suit the necessary workload. Servers come and go. You may run more servers during the daytime, when there’s more traffic; and run fewer servers at night, when there’s less traffic. Infrastructure as code makes this type of thing easy.

Internet companies deploy code pretty frequently nowadays, at least once per week or even many times a day. Some companies do continuous deployment, shipping code whenever there’s a new git commit.

For Listen Notes, I’ve got a quick script to deploy code, where I can specify the deployment environment, server type, and git commit SHA as parameters. So I can push a button and deploy a specific version of code (e.g., HEAD, or any git commit) to specific servers (e.g., web, API, worker…) in a specific environment (e.g., production, staging…).

We deploy new code, but we don’t necessarily release new features. Nowadays we do feature toggles in the code, which is basically some if-else statements. We can hide new code behind an if statement, and we use the feature toggle variable to control whether or not to execute the new code. We typically store the feature toggle variable in some kind of datastore, e.g., Redis. We can go very fancy here. We can turn on the new feature to 10% of users first, then 20%, then 50%, then 100%.

Online services need to be up 24/7. So it’s important to have tools for monitoring & alerting.

There’s a service for that!

Many companies use Datadog. We use Datadog at Listen Notes as well. We can easily build monitoring graphs to provide great visibility for servers and applications. We can also set up alerts when some metrics are abnormal (e.g., higher than a certain threshold).

If you want to learn the best practices of building & operating online services, read The Twelve-Factor App.

When it comes to internal tools, I see this iceberg image. Internal tools are a big chunk of code like an iceberg lurking under the water, which is invisible to outsiders.

If you have never operated a popular online service before, you won’t be aware that you need to build a lot of tools to use internally (by yourself, by your employees).

Different companies build different internal tools for various purposes. So far, I’ve built some internal tools to help development (e.g., preview email notification without actually sending emails), to provide God’s view (e.g., see search queries, quickly pull info for a particular user…), and to fight bad actors (e.g., content moderation, detect spam…).

So by this point, we know how to start a company with $500 and we know how to build an online service with good enough engineering.

Profit!

Oh, wait….

How do people find the thing you have built? How do you make money?

Pinterest CEO says key to success was marketing, not engineering. Well, this is so true.

Engineering is deterministic. Marketing and business are non-deterministic.If you want to build an online service, you can build it. But we live in a noisy world now. Tons of things are competing for our attention. Marketing is super hard.

I’m not an expert of marketing. I’m still figuring out how to do better marketing myself…

There are multiple channels that you can use to get your messages out. Try them all. Find the most effective one. Double down on that one. A recommendation here: The 19 Channels You Can Use to Get Traction

If you want to do SEO, you can find some good tutorials on the Internet. But generally, you want to make your website as fast as possible. Google prefers fast websites nowadays.

The best SEO document is from Google itself.

And if you are curious about a website’s traffic, just use SimilarWeb’s chrome extension. The number is not 100% accurate, but should be in the same order of magnitude :)

An Internet company makes money by selling eyeballs to advertisers or selling goods/services directly to users.

At Listen Notes, we do both. We run ads with a combination of Carbon Ads& direct sales (managed via Google Ad Manager). We also sell API to developers.

You may ask me why I don’t use XYZ technologies. Well, I’m a practical person. The goal is to get things done, instead of doing tech for the sake of doing tech.

In particular, I prefer boring technologies, which typically have existed for many years or even decades. Check out this blog post for Listen Notes tech stack.

Software engineering nowadays is mostly Google and StackOverflow-driven :) If you need help, you can find more information for old & mature technologies from Google & StackOverflow — but like many things in our lives, this is not always true.

I need to tell you bad news: It’s impossible for you to come up with a 100% original startup ideas nowadays. If you think your idea is unique and original, then it’s more likely that you don’t read enough books or don’t listen to enough podcasts :)

When I mentioned “there’s a tool/service for that,” it’s a startup itself. You can borrow their ideas, and build a better version. Or you can tackle similar problems from a different angle.

Oh, and here’s a video about Facebook’s tech in 2005: [https://www.youtube.com/watch?v=xFFs9UgOAlE][2]

Okay. You can start a company TODAY!

Eighty Percent of Success Is Showing Up

You can find the deck here: [http://bit.ly/good-enough-tech][3]

And you can always talk to me asynchronously via email :)

If you like podcasts, try Listen Notes.

If you want to build a podcast app, try Listen API.

![Good enough engineering to start an Internet company](https://www.freecodecamp.org/news/content/images/size/w2000/2019/08/0_LwPXGTcWzWROtCb2-1.jpeg)

I gave a guest lecture in an undergraduate software engineering class ([CSCE431][4]) at  [Texas A&M University][5]  in March 2019. Now I’ve turned this lecture into a blog post here, and hopefully some people on the Internet will find this useful.

If you arrived from a Google search, here are some contexts:

I’m running a small Internet company — Listen Notes, Inc. — with only one full-time employee (me), as of August 2, 2019. We built a podcast search engine website  [ListenNotes.com][6]  and a  [podcast API][7].

---

I’ll share with you my experience about starting an internet company. Building an internet product is not like building an iPhone or a pyramid. Your product doesn’t need to be perfect at the beginning. If you are building something useful, other people will tell you what to do next. And you’ll figure out what’s next. Generally, you should be comfortable dealing with uncertainty, if you want to start your own company.

The first version of Facebook was launched in early February 2004, which was an undergraduate student’s mere four weeks worth of work. It was a good enough product with good enough engineering. Every Computer Science college graduate nowadays should be able to build the first version of Facebook over a weekend, using a modern web programming framework (e.g., Rails, Django…).

![](https://www.freecodecamp.org/news/content/images/2019/08/0_eUI1qz9hToUB2j8J.jpeg)

Companies such as Google, Snapchat, Spotify, Amazon, Twitter, and others are all great internet companies in our generation.

However, I can’t tell you how to become a company as successful as them. I’m not there yet. These companies are so successful and so big. For example, Google has 100,000 employees, as of March 2019. But there was a moment in the history of time when Google had only two employees. You have to start from somewhere or nowhere. I can talk about how to get started.

![](https://www.freecodecamp.org/news/content/images/2019/08/0_I4_WGAoGLblwwqyS.jpeg)

Hopefully after this lesson, you’ll feel that starting an internet company is not hard at all. And you’ll learn about some tools and services that you can use in your future projects.

You’ll hear me saying “there’s a tool” a lot. This is what I mean by “good enough engineering.” It’s 2019 now. It’s unlikely that you are the first person to encounter a fundamentally new problem. There must be tools and services out there that can help you solve problems — oftentimes, for free!

![](https://www.freecodecamp.org/news/content/images/2019/08/0_ViBYy46VqNACtgNA.jpeg)

Before we delve further, let me provide a brief introduction of Listen Notes.

Listen Notes is a podcast search engine website. You type in a keyword and you search the whole internet’s podcasts. It’s as simple as Google :) But simple doesn’t mean easy. We also built a lot of tools on top of the core search engine to help people discover & enjoy podcasts.

[https://www.listennotes.com/][8]

Let’s take a step back to talk about podcasts. A podcast is a type of media format. Some people call it “on-demand radio.” We consume tons of media content everyday. We watch YouTube videos, watch TVs, read books, listen to music, and listen to podcasts. We consume media content because we want to get information, gain knowledge, and be entertained. Nowadays you can literally learn any topics by listening to podcasts. You can listen to podcasts while your eyes & hands are busy (e.g., driving, working out, walking, doing housework…).

In early 2017, I found myself consuming more information from podcasts than from other media formats (e.g., TVs, books…). I needed a podcast search engine that I could use to search & find individual episodes to binge listen to. In hindsight, a podcast search engine should be a very straightforward thing to exist. But I couldn’t find a good one. So I spent less than one week building a prototype of Listen Notes, the podcast search engine birthed out of my own wishes and necessities.

![](https://www.freecodecamp.org/news/content/images/2019/08/0_pXGHwh1sY_r0Hdk0.png)

Very first version of Listen Notes. Credits:  [Lifehacker][9]

I launched the prototype and used it a lot myself. But I didn’t touch the code for about nine months, until I decided to work on it full-time after I left my first failed startup. That was September 2017. Cut to 1.5 years later, I’m still having fun working on Listen Notes :)

![](https://www.freecodecamp.org/news/content/images/2019/08/0_3s9fAs-S58WF7YpI.jpeg)

Do you need to know where to find an office? Yes, there’s a service for that. I use  [WeWork][10]. I’ve got a small office inside  [WeWork][11]  in San Francisco. The office is not cheap, but I think it’s a good investment for productivity.

I can choose to spend money being 200% more productive myself, or spend money hiring one more employee. I can choose to save money and waste more time, or to save time and make more money. If you were me, what would your choice be?

![](https://www.freecodecamp.org/news/content/images/2019/08/0_nw-ySjF-T_--JiT2.jpeg)

By starting an internet business, we need to have a formal company, a legal entity. There’s a service for that.

I used  [Stripe Atlas][12]  to incorporate Listen Notes, Inc. I paid $500, and I got a Delaware C Corp within 10 days. Stripe Atlas provides some nice perks, e.g., $5k AWS (Amazon Web Services) credits. But to keep the company around, I have to pay ~$2k/year for taxes, accounting, and other stuff. This gives you a basic idea of the minimum cost of running a company.

![](https://www.freecodecamp.org/news/content/images/2019/08/0_l-l4WwCXLziPLLHm.jpeg)

Because we are a company now, we have to deal with some legal stuff. There’s a service for that.

You can use  [Clerky][13]  to generate legal documents or use  [UpCounsel][14]  to get a lawyer. I’ve used both services. They aren’t perfect, but they worth the money. You can’t expect to get Ritz-Carlton-level services with a McDonald’s price, right? If you want to be happy, you’d better set the correct level of expectation.

![](https://www.freecodecamp.org/news/content/images/2019/08/0_0bVKZbAgNClaVQ85.jpeg)

To get started, you just need a good enough domain name — a $10/year .com domain. You can always buy a great domain name later.

For example, Dropbox used getdropbox.com for more than 2 years before they bought dropbox.com for $300k. How did I discover that kind of trivia? I listen to podcasts! There was  [a podcast interview of Drew Houston][15](Dropbox co-founder & CEO), where he talked about how they secured the dropbox.com domain name.

![](https://www.freecodecamp.org/news/content/images/2019/08/0_ADgueIJbGpwHov-7.jpeg)

After you get a domain name, make sure you also create a bunch of company accounts on social networking sites such as Twitter, Facebook, Instagram, and (maybe) Snapchat.

And most companies just use  [G Suite][16]  for their company email, which is basically Gmail.

![](https://www.freecodecamp.org/news/content/images/2019/08/0_aJpa4rgV5Hj12KNg.jpeg)

Internet companies build online services. Most software today is online services. If you can’t access the Internet, you can’t use most apps on your phone.

Online services typically follow the client/server model. The client side software sends requests to the server side and gets responses to render the UI or to perform certain tasks.

All websites are online services, obviously. We use web browsers to access websites. To some degree, mobile apps are specialized browsers.

![](https://www.freecodecamp.org/news/content/images/2019/08/0_afLXTGIgvm3BU7Hj.jpeg)

On the server side, we run servers. You just need good enough servers to get started. By “servers” I mean VPS (Virtual Private Servers), which basically provides root access to an IP address. Once you ssh into an IP address (a VPS), you can do whatever you want, e.g., install software & put your code there. And you are now open for business.

For VPS, I recommend using something simple at the beginning, e.g.,  [DigitalOcean][17]  or  [AWS Lightsail][18]. At Listen Notes, we used  [DigitalOcean][19]  for about one year because it’s cheap & easy to set up, then we switched to AWS EC2 when our website got more traffic and we needed more flexibility & “production”-ish setup.

![](https://www.freecodecamp.org/news/content/images/2019/08/0_LxybEVeLPU7uck2_.jpeg)

Such backend architecture is pretty common for running an online service.

The client side (e.g., browsers) sends requests. The load balancer distributes requests evenly to web servers. We typically run a lot of web servers, where the server side code is running (e.g., Rails, Django…). We need a datastore to store our data. Web servers interact with the datastore to read and write data.

On the left hand side, it’s synchronous processing. Here comes a request, and the web server processes it and returns a response right away. It’s synchronous.

We need asynchronous processing as well to handle non-urgent, long-running, or compute-intensive tasks. We don’t want to consume compute resources for such tasks on the web server. So we typically offload such tasks for the workers to process. Web servers place messages in the message queue, and workers pick up messages to process the tasks.

For example, we generate this kind of image for search results on Listen Notes ([Example][20]):

![](https://www.freecodecamp.org/news/content/images/2019/08/0_G6ulti1avYqc2hqd.png)

This type of image-generation task is kind of compute intensive and is not urgent. So we offload it for workers to process, instead of handling them on the web servers.

Finally, there must be a Scheduler for time-based scheduling jobs. Many companies just use cron jobs on Linux and they switch to something else when they become bigger (e.g.,  [I built a Scheduler system for my former employer Nextdoor a few years ago to replace cron jobs][21]). For Listen Notes, we have a lot of time-based scheduling jobs, e.g., sending  [Listen Alerts][22].

![](https://www.freecodecamp.org/news/content/images/2019/08/0_N2yqsvWuyxZtT6CC.jpeg)

We use Nginx as a simple load balancer. The backend code is mostly in Python/Django. We use different datastores for different purposes. We use Postgres for the main datastore, which is our single source of truth. We are a search engine, so we use Elasticsearch. We use Redis for a lot of things, but mostly for caching & implementing some “fast” features like  [Listen Real-Time][23].

On the asynchronous processing land, we use  [Celery][24],  [Celery Beat][25], and  [RabbitMQ][26].

![](https://www.freecodecamp.org/news/content/images/2019/08/0_C2dVWNEIv_f_pQHA.jpeg)

We have to keep the server-side processes up and running 24/7. We’d better use some kind of process manager to automatically restart processes if they crash. We use  [Supervisor][27]  a lot at Listen Notes.

Two recommendations here:

-   Learn tech stacks of real companies on  [stackshare.io][28]
-   Listen to  [Software Engineering Daily][29]. They interview engineers from real companies, so you can learn how companies do engineering.

![](https://www.freecodecamp.org/news/content/images/2019/08/0_EeishiFBoh3ISQWh.jpeg)

As end users, we get tons of notifications from online services via email, SMS, and push notifications. When an Uber driver is approaching, we get push notifications. When we shop on Amazon, we get email notifications (typically with receipts). When our bank accounts experience problems, we get SMS notifications.

Let’s turn the table. When we build online services, how do we send notifications to users? There’s a service or API for each notification channel, e.g.,  [SendGrid][30]  or  [Amazon SES][31]  for email,  [Twilio][32]  for SMS…

![](https://www.freecodecamp.org/news/content/images/2019/08/0_SrGLHpymGagenKzF.jpeg)

Next, we need some kind of triggers to initiate notifications.

One type of trigger is from user actions. For example, a user can invite people to contribute to the same playlist on  [Listen Later][33]. When he or she clicks the invite button, it triggers an email notification that is sent to the potential contributor. So the web server places a message in the message queue, and one of the workers picks up the message and sends the invite email later.

Another type of trigger is from time-based schedules, e.g., send emails to these 500 people at 7 a.m. every morning.

![](https://www.freecodecamp.org/news/content/images/2019/08/0_Kvjr0cWa0iTIZnyH.jpeg)

Each of the blocks in the architecture diagram represents a process or multiple processes on the operating systems. We can run those processes on one server or multiple servers.

We typically create a provision of multiple sets of servers for different audiences & for different purposes.

Each set of servers runs in a separate environment.

Servers in the production environment serve live traffic. The audience is made up of real users.

Servers in the staging environment are primarily for testing. The audience is comprised of employees in the company. We need the staging environment to manually test product features before releasing the whole shebang to production.

And we need a dev environment for development purposes, which is typically used by a single developer.

![](https://www.freecodecamp.org/news/content/images/2019/08/0_eiriAOpM2vrtUpSJ.jpeg)

For Listen Notes, we use  [Vagrant][34]  &  [VirtualBox][35]  to set up a virtual machine. And we run everything inside this virtual machine.

Since the backend code of Listen Notes is primarily written in Python/Django, I use PyCharm to write code. I know, it’s not  [VS Code][36]  or whatever cool text editors others use. But I’m 1000x more productive using PyCharm than using other text editors - though, I was a Vim user for 5 years and an Emacs user for another 6 years :) It’s like some people like spicy food, while others don’t. We can’t blame people who don’t like spicy food, right? Don’t get involved in the religious war of IDEs, languages, technologies… GETTING THINGS DONE™ is more important.

![](https://www.freecodecamp.org/news/content/images/2019/08/0_En1rYW0gxYbkH0FA.jpeg)

In terms of front-end engineering, I have very little to share here. Listen Notes has only a website. We don’t have native apps (except for  [an experimental Just Listen][37]  app).

For the web front-end, I use the conventional Reactjs &  [Bootstrap][38]. Pretty standard nowadays.

![](https://www.freecodecamp.org/news/content/images/2019/08/0_NWGlzjmYMHId1cl-.jpeg)

If you just get started with your projects, I would suggest focusing on a single platform first. Don’t go cross-platform too early. We typically have very limited resources at the very beginning. Look at Instagram: When they were an independent company, they had only an iOS app initially. And they got acquired for $1B.

If you are building a website, make sure you make it responsive from day 1. You can easily use modern browsers’ developer tools to test different screen sizes (e.g.,  [on Chrome][39]).

You also want to test on multiple operating systems & browsers. There’s a service for that: Use  [BrowserStack][40].

![](https://www.freecodecamp.org/news/content/images/2019/08/0_tIQlkg6S1V_gTR3S.jpeg)

If you have more than one server, you’d better NOT install software & do configuration manually. Infrastructure as code is a common practice in internet companies nowadays. Basically, we codify the specification of servers and automate the server configuration.

For Listen Notes, we use  [Ansible][41]. We need to write a bunch of yml configuration files to specify what software to install & where to put config files. When we run ansible-playbook in command line, it’ll automatically configure multiple servers for us.

Nowadays, servers are elastic or even ephemeral, with on-demand configurations to suit the necessary workload. Servers come and go. You may run more servers during the daytime, when there’s more traffic; and run fewer servers at night, when there’s less traffic. Infrastructure as code makes this type of thing easy.

![](https://www.freecodecamp.org/news/content/images/2019/08/0_-sbGXk-jXJ2PNmuB.jpeg)

Internet companies deploy code pretty frequently nowadays, at least once per week or even many times a day. Some companies do continuous deployment, shipping code whenever there’s a new git commit.

For Listen Notes, I’ve got a quick script to deploy code, where I can specify the deployment environment, server type, and git commit SHA as parameters. So I can push a button and deploy a specific version of code (e.g., HEAD, or any git commit) to specific servers (e.g., web, API, worker…) in a specific environment (e.g., production, staging…).

We deploy new code, but we don’t necessarily release new features. Nowadays we do  [feature toggles][42]  in the code, which is basically some if-else statements. We can hide new code behind an if statement, and we use the feature toggle variable to control whether or not to execute the new code. We typically store the feature toggle variable in some kind of datastore, e.g., Redis. We can go very fancy here. We can turn on the new feature to 10% of users first, then 20%, then 50%, then 100%.

![](https://www.freecodecamp.org/news/content/images/2019/08/0_DtYd8dMFgOhu0yB2.jpeg)

Online services need to be up 24/7. So it’s important to have tools for monitoring & alerting.

There’s a service for that!

Many companies use  [Datadog][43]. We use Datadog at Listen Notes as well. We can easily build monitoring graphs to provide great visibility for servers and applications. We can also set up alerts when some metrics are abnormal (e.g., higher than a certain threshold).

![](https://www.freecodecamp.org/news/content/images/2019/08/0_MN8jF4VJZncXH3jS.jpeg)

If you want to learn the best practices of building & operating online services, read  [The Twelve-Factor App][44].

![](https://www.freecodecamp.org/news/content/images/2019/08/0_3c2lMu1346EFUJWr.jpeg)

When it comes to internal tools, I see this iceberg image. Internal tools are a big chunk of code like an iceberg lurking under the water, which is invisible to outsiders.

If you have never operated a popular online service before, you won’t be aware that you need to build a lot of tools to use internally (by yourself, by your employees).

Different companies build different internal tools for various purposes. So far, I’ve built some internal tools to help development (e.g., preview email notification without actually sending emails), to provide God’s view (e.g., see search queries, quickly pull info for a particular user…), and to fight bad actors (e.g., content moderation, detect spam…).

![](https://www.freecodecamp.org/news/content/images/2019/08/0_1i-QbtebgVN1Lqxe.jpeg)

So by this point, we know how to start a company with $500 and we know how to build an online service with good enough engineering.

Profit!

Oh, wait….

![](https://www.freecodecamp.org/news/content/images/2019/08/0_ws52_8ACRqslINf7.jpeg)

How do people find the thing you have built? How do you make money?

[Pinterest CEO says key to success was marketing, not engineering.][45]  Well, this is so true.

Engineering is deterministic. Marketing and business are non-deterministic.If you want to build an online service, you can build it. But we live in a noisy world now. Tons of things are competing for our attention. Marketing is super hard.

![](https://www.freecodecamp.org/news/content/images/2019/08/0_bDYZs0OyffawGACf.jpeg)

I’m not an expert of marketing. I’m still figuring out how to do better marketing myself…

There are multiple channels that you can use to get your messages out. Try them all. Find the most effective one. Double down on that one. A recommendation here:  [The 19 Channels You Can Use to Get Traction][46]

If you want to do SEO, you can find some good tutorials on the Internet. But generally, you want to make your website as fast as possible. Google prefers fast websites nowadays.

![](https://www.freecodecamp.org/news/content/images/2019/08/0_U6_Pa-7K1NiY2yhE.jpeg)

The best SEO document is  [from Google][47]  itself.

And if you are curious about a website’s traffic, just use  [SimilarWeb’s chrome extension][48]. The number is not 100% accurate, but should be in the same order of magnitude :)

![](https://www.freecodecamp.org/news/content/images/2019/08/0_luegMv5EuB6OA3_U.jpeg)

An Internet company makes money by selling eyeballs to advertisers or selling goods/services directly to users.

At Listen Notes, we do both. We run ads with a combination of  [Carbon Ads][49]& direct sales (managed via  [Google Ad Manager][50]). We also sell API to developers.

![](https://www.freecodecamp.org/news/content/images/2019/08/0_-GXgPMkqZ1WJnvn9.jpeg)

You may ask me why I don’t use XYZ technologies. Well, I’m a practical person. The goal is to get things done, instead of doing tech for the sake of doing tech.

![](https://www.freecodecamp.org/news/content/images/2019/08/0_PQhWAP2aaAXa9USS.jpeg)

In particular, I prefer boring technologies, which typically have existed for many years or even decades. Check out  [this blog post for Listen Notes tech stack][51].

Software engineering nowadays is mostly Google and StackOverflow-driven :) If you need help, you can find more information for old & mature technologies from Google & StackOverflow — but like many things in our lives, this is not always true.

![](https://www.freecodecamp.org/news/content/images/2019/08/0_2EC6RMZx08CthnRL.jpeg)

I need to tell you bad news: It’s impossible for you to come up with a 100% original startup ideas nowadays. If you think your idea is unique and original, then it’s more likely that you don’t read enough books or don’t listen to enough podcasts :)

When I mentioned “there’s a tool/service for that,” it’s a startup itself. You can borrow their ideas, and build a better version. Or you can tackle similar problems from a different angle.

Oh, and here’s a video about Facebook’s tech in 2005:  [https://www.youtube.com/watch?v=xFFs9UgOAlE][52]

![](https://www.freecodecamp.org/news/content/images/2019/08/0_cD-AyO5meslYf6y2.jpeg)

Okay. You can start a company TODAY!

_Eighty Percent of Success Is Showing Up_

![](https://www.freecodecamp.org/news/content/images/2019/08/0_WEQS02kCfZ-YsXHl.jpeg)

You can find the deck here:  [http://bit.ly/good-enough-tech][53]

And you can always talk to me asynchronously via email :)

---

If you like podcasts, try  [Listen Notes][54].

If you want to build a podcast app, try  [Listen API][55].

[1]: https://www.listennotes.com/
[2]: https://www.youtube.com/watch?v=xFFs9UgOAlE
[3]: http://bit.ly/good-enough-tech
[4]: https://parasol.tamu.edu/~jeff/course/431/syllabus.html
[5]: https://www.tamu.edu/
[6]: https://www.listennotes.com/
[7]: https://www.listennotes.com/api/
[8]: https://www.listennotes.com/
[9]: https://lifehacker.com/the-best-podcast-search-engine-1818560337
[10]: https://refer.wework.com/i/WenbinFang
[11]: https://refer.wework.com/i/WenbinFang
[12]: https://atlas.stripe.com/invite/wxg9m9er
[13]: https://www.clerky.com/
[14]: https://www.upcounsel.com/rf/CvryzEze
[15]: https://www.listennotes.com/clips/334-drew-houston-the-billionaire-founder-of-RUThbQcPekK/
[16]: https://gsuite.google.com/
[17]: https://m.do.co/c/2288c0b7e091
[18]: https://aws.amazon.com/lightsail/
[19]: https://m.do.co/c/2288c0b7e091
[20]: https://lnns.co/uzSXWqJbg9Y
[21]: https://engblog.nextdoor.com/we-don-t-run-cron-jobs-at-nextdoor-6f7f9cc62040
[22]: https://www.listennotes.com/alerts/
[23]: https://www.listennotes.com/realtime/
[24]: http://www.celeryproject.org/
[25]: http://docs.celeryproject.org/en/latest/userguide/periodic-tasks.html
[26]: https://www.rabbitmq.com/
[27]: http://supervisord.org/
[28]: https://stackshare.io/stacks/trending
[29]: https://www.listennotes.com/podcasts/software-engineering-daily-software-Gw1zYJbjPF-/
[30]: https://sendgrid.com/
[31]: https://aws.amazon.com/ses/
[32]: https://www.twilio.com/
[33]: http://listennotes.com/listen
[34]: https://www.vagrantup.com/
[35]: https://www.virtualbox.org/
[36]: https://code.visualstudio.com/
[37]: https://www.listennotes.com/labs/
[38]: https://getbootstrap.com/
[39]: https://developers.google.com/web/tools/chrome-devtools/device-mode/
[40]: https://www.browserstack.com/
[41]: https://docs.ansible.com/ansible/latest/index.html
[42]: https://martinfowler.com/articles/feature-toggles.html
[43]: https://www.datadoghq.com/
[44]: https://12factor.net/
[45]: https://www.cbsnews.com/news/pinterest-ceo-says-key-to-success-was-marketing-not-engineering/
[46]: https://medium.com/@yegg/the-19-channels-you-can-use-to-get-traction-93c762d19339
[47]: https://static.googleusercontent.com/media/www.google.co.uk/en/uk/insidesearch/howsearchworks/assets/searchqualityevaluatorguidelines.pdf
[48]: https://chrome.google.com/webstore/detail/similarweb-traffic-rank-w/hoklmmgfnpapgjgcpechhaamimifchmp?utm_source=chrome-ntp-icon
[49]: https://www.carbonads.net/
[50]: https://admanager.google.com/home/
[51]: https://broadcast.listennotes.com/the-boring-technology-behind-listen-notes-56697c2e347b
[52]: https://www.youtube.com/watch?v=xFFs9UgOAlE
[53]: http://bit.ly/good-enough-tech
[54]: https://www.listennotes.com/
[55]: https://www.listennotes.com/api/