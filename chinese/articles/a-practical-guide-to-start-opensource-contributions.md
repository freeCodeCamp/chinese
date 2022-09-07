> -  原文地址：[Open Source for Developers – A Beginner's Handbook to Help You Start Contributing](https://www.freecodecamp.org/news/a-practical-guide-to-start-opensource-contributions/)
> -  原文作者：[TAPAS ADHIKARY](https://www.freecodecamp.org/news/author/tapas/)
> -  译者：Papaya HUANG
> -  校对者：

![Open Source for Developers – A Beginner's Handbook to Help You Start Contributing](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/Book-PNG.png)

What comes to mind when you hear the term `Open Source`? In the programming world, open source is a generic term for Open Source Software (OSS). Open-source software is built on source code that's open to everyone to view, change, extend, and distribute.

In this article, we will get into many aspects of open source software and its ecosystem. We will discuss what it takes for you to start contributing to open source, the skills you need, how to maintain open-source projects, challenges, resources, and some exciting projects to get started.

Before we start, here are a few words about me and my interest in the open-source world.

I've been using open source projects, products, and services daily and contributing to some of them to improve how I can. I also maintain many open source projects to educate beginners about web programming.

You can check out the open-source projects I maintain on my [GitHub Profile](https://github.com/atapas).

This article is about sharing my experience with you to help you get started with open source, if you're not contributing already.

## How Does Open Source Work?

The open-source projects consist of the following people and elements:

`Project Maintainer(s)`: Maintainers are one or more people who start the open-source project, manage it, make decisions, brainstorm ideas, and work closely with contributors, users, and marketing platforms.

The project maintainers will have extra access rights and privileges to control various aspects of the project.

`Project Contributor(s)`: When the maintainer(s) start an open-source project, they are the early contributors. As the project grows and more people learn about it, the willingness grows to contribute to it.

As it grows, the project gets more contributors. Anyone can look into the project code, modify it, request a review, and get the changes into the project.

`Source Code and Documentation Repository`: The maintainer keeps the project source code in a centralized source code repository (for example, GitHub). It helps all the contributors have the required access to the code to contribute.

`Project License`: Every open source project must specify a distribution license to make it clear for its users/consumers.

Various license types exist, and the maintainer can pick one based on what suits the project. Some widespread distribution licenses are MIT, Apache License 2.0, GNU General Public License (GPL) 3.0 etc.

`Contributing Guide`: A maintainer of the OSS project creates a contributing guide to help the contributors understand the pull request process, standards, scope, and so on.

`Code of Conduct Guide`: The code of conduct guide discusses various guidelines, collaboration, behaviour expectations from the contributors, and how to escalate and resolve issues.

`Project Culture`: The project culture evolves with the project community. While the maintainers have a significant stake in it, the contributors are equally responsible for maintaining healthy learning, sharing, and growth culture.

`Community`: As the project grows, the community builds around it. Tools like GitHub Discussions and Discord are famous for organizing community-based interactions.

`Distribution`: The open-source project should have a way to reach its end-users and consumers. There should be a distribution model helping the code translate to the end product for delivery.

`Users/Customers`: The users or customers are the consumers of the product the open-source team builds using the source code.

Now let's take a look at the image below. Here we see an open-source project community including maintainers and contributors.

The source code is in the centralized repository. The contributors `fork` (A term that we will learn shortly) the `upstream repository` and contribute. Once the contribution is over, the project maintainer `merges` it with the main branch.

![opensource-model](https://www.freecodecamp.org/news/content/images/2022/07/opensource-model.png)

A High-Level View of Open Source Working Model

Don't worry if you are unfamiliar with terms like fork, branch, merge, etc. We will learn them soon in this article. Just keep reading.

Now let's understand how the open-source software get delivered to the users/customers.

The image below shows one of the many possibilities at a high level. The open-source project should have a build-package-deploy mechanism using the Continuous Integration and Continuous Deployment(CI/CD) process.

Whenever there are code changes in the `main branch`, the CI/CD workflow kicks off automatically. It builds the source code, packages it, and deploys it to be accessible to the end-users and target customers.

![deploy](https://www.freecodecamp.org/news/content/images/2022/07/deploy.png)

A High-Level View of the SOURCE CODE Gets Into the Hands of the USERS

Please note: The CI/CD or any other deploying mechanisms are not firmly part of the Open Source Software development. However, knowing it helps understand the OSS working model end to end.

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

## What Does Open Source Contribution Mean?

`Open Source` contribution means improving the open source project by any means. One of the misconceptions you may have about the contribution is that, you need to contribute to the source code alone. Well, that's not all there is to it.

Contributing to the source code of an open source project is just a type of contribution you can make. However, you can contribute to other areas like,

-   The documentation of the project. Improve it so that more contributors and users find it easy to deal with.
-   Test the application, find issues, and create them in the issue management system.
-   Take part in code reviews to help the project with better coding standards.
-   Write unit tests, end-to-end tests, and make the application quality better.
-   Create content like articles and videos to spread awareness of the project.
-   Help build the community of interested people.

All the above are crucial open source project contributions.

## Benefits of Open Source Contributions

Open Source contributions come with a number of benefits to the developers. Some key benefits are:

-   Get a chance to up skill yourself.
-   Make the software/application better with code and documentation.
-   Meet like-minded people, build networks and communities.
-   Understand the application development and maintenance cycles.
-   Learn from Pull Request feedback.
-   Learn how to manage your code as open source.

## Open Source Myths

So, we are now aware of the Open Source model and its benefits. The next thing we want to learn is how to start with Open Source contribution, both as a `maintainer` of the project and as a `contributor`.

Before we do that, let's clarify certain myths about Open Source.

❌ **Myth**: I don't know to code. Open Source is not my cup of tea.

✅ **Fact:** Open Source is not about the coding alone! You have plenty of opportunities to contribute to improving documentation, testing, creating media, creating content, and many more. So do not stay back thinking the lack of coding can stop you from contributing to the OSS.

❌ **Myth**: I know how to code but I'm not familiar with the technology used in this Open Source project. I cannot contribute.

✅ **Fact:** On the contrary, it is an excellent opportunity to learn something you do not know already! The Open Source ecosystem is patient enough to provide you that time so that you can learn and contribute.

❌ **Myth**: Open Source doesn't maintain an enterprise-level standard.

✅ **Fact:** Not true at all. In fact, a lot of enterprise software is powered by Open Source software today. It's incorrect to assume that Open Source projects are not concerned about quality and standards.

❌ **Myth**: Open Source projects are not easy to maintain.

✅ **Fact:** An Open Source project is backed by contributors. An essential aspect for a maintainer is setting the ground, creating a roadmap, building the community, and keeping the motivation higher.

For many Open Source projects, maintainers don't even have to code. Contributors can run the show provided the maintainer is putting in the necessary support.

❌ **Myth**: Open Source Software is always free.

✅ **Fact:** Most of them are, but not all OSS is free. It is driven by the type of license the project is using. Some licenses are restrictive to give free access to use and distribute the code in any manner. You need to pay special attention to the licensing information of a project to understand "how much" free the OSS will be.

❌ **Myth**: Open Source is for beginners.

✅ **Fact:** Many developers think that OSS is for beginners and students. The fact is, everyone is welcome to contribute. It makes sense for a subject matter expert to enhance an Open Source project with their knowledge and experience.

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

## What to Know to Get Started with Open Source

Developers need to know a few basic things to start with the Open Source projects quickly. These are optional prerequisites, but if you make yourself aware, you will enjoy contributing to Open Source even better.

### Know Git Basics

You have added mileage if you are already aware of the concept of Git and its primary usage. Git is omnipresent in the Open Source world, and you can not ignore it.

You need to know about these topics at a minimum,

-   What is Git, and how does it work?
-   What is a repository?
-   How to clone a repository?
-   How to stage/un-stage changes?
-   How to commit your changes?
-   How to write better commit messages?
-   How to resolve merge conflicts?
-   How to push your changes to a remote repository?
-   How to pull changes from the remote repository?

If you are new to Git, I recommend this video to help you learn Git concepts and all the usages mentioned above: [Demystifying Git for Beginners](https://www.youtube.com/watch?v=vWtu4mzUgQo).

### Become Familiar with GitHub

There are 128M+ public repositories on [GitHub](https://github.com/). A significant portion of these repositories are Open Source projects. The Open Source project you want to contribute to may also be on GitHub. So, you should learn how to handle things on GitHub.

As a contributor to an Open Source Project, you must know:

-   How to fork a repository?
-   How do you find the URL to clone the repository?
-   How to create a Pull Request?
-   How to review a Pull Request?

As a Project maintainer, you must know,

-   How to create a repository?
-   How to add License information to the project?
-   How to create a Contributing guide and a Code of Conduct guide?
-   How to set a standard for creating issues and pull requests?
-   How to merge pull requests?

You can follow the Twitter thread below. It explains everything in a step-by-step manner for you,

> Do you have public GitHub repositories?  
>   
> Here are 10 tips to help you with,  
>   
> 🤝 Gain more engagements  
> 💻 Code contributions  
> ⭐ Acknowledgment of work(like stars, maybe sponsors)  
> 🔥 Building followers on GitHub  
>   
> A Mega Thread  
>   
> 🧵 👇
> 
> — Tapas Adhikary (@tapasadhikary) [September 21, 2021](https://twitter.com/tapasadhikary/status/1440296182396309513?ref_src=twsrc%5Etfw)

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

### Learn to Fork a Repository

Forking is another crucial concept to understand. Most `Open Source` projects will not allow a contributor to create branches directly on a repository. Instead, the contribution workflow may go like this:

-   Fork the repository.
-   Clone the forked repository.
-   Perform changes.
-   Get changes from the UPSTREAM.
-   Create a pull request from the forked repo to the base repository.

In my experience of working with many contributors, most of them find the forking concept a bit challenging.

You can check out this video tutorial to learn [How to Fork a GitHub Repository](https://www.youtube.com/watch?v=h8suY-Osn8Q). Also, find this [GitHub repository](https://github.com/atapas/fork-me) to practice forking. It is for absolutely beginners to gain confidence on forking a repository.

### Learn to Resolve Merge Conflicts

Ask any developer how they feel about resolving merge conflicts. Well, it's not very straightforward to do, but the more you face it, the better you learn. Understand the process of resolving merge conflicts, how to think about it, and how to resolve a merge conflict.

Here is a [practical guide with examples to learn to resolve merge conflicts](https://www.freecodecamp.org/news/resolve-merge-conflicts-in-git-a-practical-guide/). Please take a look.

### Learn Markdown Syntax

Documentation is one of the primary needs of any Open Source project. A `Readme.md` file explains the project, how to set it up, run, deploy, and so on.

The `Contributing.md` file discusses how to contribute to the project.

The `CODE_OF_CONDUCT.md` file describes what to expect from a contributor's behaviour and engagement. Of course, you can write many other `.md` files based on your project needs.

The `md` stands for markdown. It is syntax used for documenting in GitHub. It is better to learn the basic syntax so that you can take part in documentation seamlessly.

Here is an Open Source project that provides the Mark Down Syntax to copy and use. You may want to take a look.

[

GitHub - atapas/markdown-cheatsheet: A single place for all the markdown syntaxes I have learned so far.

A single place for all the markdown syntaxes I have learned so far. - GitHub - atapas/markdown-cheatsheet: A single place for all the markdown syntaxes I have learned so far.

![favicon](https://github.githubassets.com/favicons/favicon.svg)atapasGitHub

![875262cc-d687-4a77-9967-57fbb5d07b7a](https://repository-images.githubusercontent.com/498971132/875262cc-d687-4a77-9967-57fbb5d07b7a)

](https://github.com/atapas/markdown-cheatsheet)

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

### Cultivate Your Soft Skills

`Open Source` is a green field for many developers to work, learn, and build together. As a contributor, your technical skills may not be enough to thoroughly enjoy the open source experience.

Let's discuss a few must-have soft skills for developers.

-   **Patience**: `Patience` is a must-have skill for developers. It is required when you are learning something new, debugging a complex problem, working with others, negotiating with someone, and getting/giving feedback. At times, things may not move at a pace you are expecting, so you need to have patience and assess the situation.
-   **Curiosity**: A `curious` mind goes a long way. When contributing to open source, the possibilities are immense. You need to be curious to figure things out. It is not only applicable to figuring out technical challenges but also while working with people.
-   **Be Responsive**: In the Open Source ecosystem, you may not meet and talk to people in the daily basis but the work must go on. You need to be `responsive` to the queries, tasks, requests, and anything that you are accountable to. Many great initiatives die down just because of a lack of responsiveness from people.
-   **Be Humble**: Being `humble` is key to success. Someone who is knowledgeable but not humble often fails to work as a team.

## How to Start Contributing to Open Source Projects

Let's now see how to get started with the open source contributions. The list below provides links and resources for you to get started with an open source contribution immediately.

### GitHub Explore

GitHub Explore shows you the repositories based on your interest. You can set the notifications to get informed about a project.

Also, you can search repositories by topics and trends. Use GitHub explore to find out the projects that are more relevant to your skill, need, and aspirations. You can find it here: [https://github.com/explore/](https://github.com/explore/)

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

### How to Contribute to Open Source by freeCodeCamp

This repository from freeCodeCamp is an absolute gem. It provides you with many resources, pointers to get started with open source. You can find it here: [https://github.com/freeCodeCamp/how-to-contribute-to-open-source](https://github.com/freeCodeCamp/how-to-contribute-to-open-source)

### Contributor Ninja

This website helps you with a list of programming languages to chose from – JavaScript, HTML, Rust, Go, and many more. You get the cards of repositories to select from. It's a simple place to get started. You can find it here: [https://contributor.ninja/](https://contributor.ninja/)

### First Contributions

This is a huge list of open source projects to search and filter from. They also have a well-guided documentation to get started. You can find it here: [https://firstcontributions.github.io/](https://firstcontributions.github.io/)

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

### CodeTriage

CodeTriage is a mammoth list of projects with open issues. It shows a separation of issues and docs to triage. The website is very useful. You can find it here: [https://www.codetriage.com/](https://www.codetriage.com/)

### Up For Grabs

This is a comprehensive list of Open Source projects to pick from based on your interest. You can find it here: [https://up-for-grabs.net/#/](https://up-for-grabs.net/#/)

### First Timers Only

If you have never contributed to an open source project before and you’re just getting started, consider reading this page.

You may see many of the sources we have already discussed but the page is full of motivations. You can find it here: [https://www.firsttimersonly.com/](https://www.firsttimersonly.com/)

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

### Open Source Friday

What are you doing this Friday, or the next one? How about investing a few hours contributing to the software you use and love. Please check this out and register. You can find it here: [https://opensourcefriday.com/](https://opensourcefriday.com/)

I hope you found the resources helpful. Additionally, feel free to check this Twitter threads and responses, you may find some more information about it.

> Looking forward to contributing to OPENSOURCE? Here are 8 RESOURCES to get you started immediately.  
>   
> A 🧵 👇
> 
> — Tapas Adhikary (@tapasadhikary) [September 8, 2021](https://twitter.com/tapasadhikary/status/1435590663035310086?ref_src=twsrc%5Etfw)

## Open Source Project Maintainers

So far, we have seen the side of open source contributors. This article would be incomplete if we didn't touch upon the side of open source project maintainers as well.

As a maintainer of the project, you must follow certain standards for others to know and contribute to your project repository.

-   Provide a clear name and description of the project. You should also add the topics that are related to your project.
-   Add a clear `Readme.md` file to explain the project objectives, how to use it, how to set it up, and so on. If source code is the heart of a repository, the README file is the face of it.
-   Build a community profile. It helps the open-source repository maintainers review the work and learn how to help it grow.
-   Establish a Code of Conduct.
-   Create a Contributing Guide.
-   Decide on the Issue Templates.
-   Create a Pull Request (PR) Template.
-   Activate GitHub Sponsors.

[You can go over this article to know](https://www.freecodecamp.org/news/increase-engagement-on-your-public-github-repositories/) about these standards in more detail.

## Before We End...

That's all! Here we've come to the end of this article. I hope you found it insightful and that it has given you enough motivation to get started contributing to open source.

Before we end, I would like to mention a few open source projects and repositories for you to look into.

-   [EddieHub](https://github.com/EddieHubCommunity)
-   [ReactPlay](https://github.com/reactplay)
-   [Hacktoberfest](https://github.com/topics/hacktoberfest)
-   [First Contributions](https://github.com/firstcontributions/first-contributions)
-   [The Hive](https://github.com/deleteman/the-hive)

This list can keep growing but let me stop here. If you enjoyed reading this article and/or have any questions, want to connect, you can find me in these spots:

-   [Follow on Twitter](https://twitter.com/tapasadhikary)
-   [Connect on LinkedIn](https://www.linkedin.com/in/tapasadhikary/)
-   [Know my Work on GitHub](https://github.com/atapas)
-   [Subscribe to My YouTube Channel](https://youtube.com/tapasadhikary)
