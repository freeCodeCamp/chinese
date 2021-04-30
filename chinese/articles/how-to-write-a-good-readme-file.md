> -  原文地址：[How to Write a Good README File for Your GitHub Project](https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/)
> -  原文作者：[Hillary NyakundiHillary Nyakundi](https://www.freecodecamp.org/news/author/larymak/)
> -  译者：sevvse
> -  校对者：

![How to Write a Good README File for Your GitHub Project](https://www.freecodecamp.org/news/content/images/size/w2000/2021/04/uide-to-writting-a-good-readme-file--1-.png)

If you are reading this article, it probably means that you are already pushing repositories to GitHub and maybe even contributing to open source.

如果你正在阅读这篇文章，那可能说明你正在准备将代码仓库上传到GitHub上，甚至对开源做出贡献。

And if you're using GitHub, it means that you will need to write good documentation for your projects to help others understand them.

还有如果你在用GitHub，这意味着你需要编写一个好的文档来帮助他人了解你的项目。

If you are just getting started using version control, don't feel left out – this guide is also for you. It'll help you learn how to get started writing helpful documentation.

如果你刚开始使用版本控制，不要失落——这篇指南也是为你准备的。会帮助你学会如何开始写有用的文档。

When I started to pushing my projects on [Github](https://github.com/larymak), honestly I had no idea what a README file was (even though I could see it in other people's projects).

当我刚开始在[Github](https://github.com/larymak)里上传我的项目时，老实说我还没有意识到到底什么是readme文件（即使我经常在他人的项目里看到）。

As time went by I started following other developers. They all had cool projects and had contributed to open source, and they all had one thing in common: their projects had detailed **README files**.

随着时间的推移我开始关注其他的开发者。他们都拥有很酷的项目并且对开源有所贡献，同时他们有一件事很统一，就是他们的项目都有详尽的 **README 文件** 。

So my interest in what a README was grew, and I decided to try and add one in my projects, too.

所以我对一个readme文档怎么发展产生了好奇心，同时我决定尝试并且在我自己的项目中也添加一个。

In this article, we'll learn more about what a README file is and how to write one.

在这篇文章当中，我们将学习很多关于什么是readme文件以及如何动手编写。

## First, Why Do I need a Good README File?

## 首先，为什么我需要一个好的readme文件？

A README file is a guide that gives users a detailed description of a project that you have pushed to your repository.

README文件是给使用者一个对于你上传到仓库的项目做详细描述的说明。

Perhaps you are wondering why you should spend time writing a good README. Well are some reasons to help convince you that it's a good idea:

你大概会疑惑为什么你要花时间写一个好的README。这里有一些理由来帮助说服你这是个好主意

1.  A good README helps your projects stand out from a bunch of other projects. It should be as good as the project itself.
2.  It is the first file a person will see when they encounter your project, so it should be fairly brief but detailed.
3.  It will help you focus on what your project needs to deliver and how.

1.  一个好的README可以帮助你的项目从同类型的其他项目中脱颖而出。它应该像项目本身一样优秀。
2.  当别人访问你的项目时它将会是第一个被看到的文件，所以它应该是简短精炼的。
3.  它会帮助你专注在你的项目需要实现什么以及怎样实现。

> Just as Friedrich Nietzsche said:  
> A good writer possesses not only his own spirit but also the spirit of his friends.

> 就像弗里德里希.尼采所说：
> 一个好的作者不仅要拥有自己的精神还要有他朋友们的精神

When writing a README, always keep in mind that you will need your friends, or in this case other developers, to understand your code.

当编写一个README时，要一直记得你需要让你的朋友或者在这个实例中其他的开发者能理解你的代码。

For instance have a look at this [project](https://github.com/larymak/GitIntro). As you can see it does not have a detailed README, a description, or any guidance.

譬如拿这个来说[project](https://github.com/larymak/GitIntro)。正如你所见，它没有一个详细的README文件，一个说明，或者一个导航。

With a project like this on GitHub no one will be able to understand what it does no matter how much time you took creating it, right?

在github里一个像这样的项目，不管花费多少时间去引用它，都不会有人能理解它的功能，对吗

Now have a look at this [project](https://github.com/larymak/Html-Css-Recap). Here, you are able to understand what the project does, what it entails, and how to get started if you need to use or want to contribute to the project.

现在看一眼这个实例[project](https://github.com/larymak/Html-Css-Recap)。这样，你大概能理解这个项目的功能，它的依赖，以及如果你需要使用如何去开始或者对项目改进作出贡献。

You see, that's the power of writing a good README.

看，这就是写好一个README 文件的力量。

#### So let's get started

#### 让我们开始吧

There's not one right way to structure a good README. But there is one very wrong way, and that is to not include a README at all.

正确编写一个好的README 文件的方式不止一种。但是只有一种非常错误的方法就是项目中完全没有包含一个README文件。

These steps are among the best practices I've found. As you progress in your career, you will develop your own ideas about what makes a good README and how to improve on it.

这些步骤是我发现的最佳实践之一。随着你职业生涯的进步，你将形成自己的想法，了解什么是好的自述以及如何改进自述。

A README needs to answer the following what, why, and how:

readme 需要回答以下问题：

-   What was your motivation?
-   Why did you build this project?
-   What problem does it solve?
-   What did you learn?
-   What makes your project stand out? If your project has a lot of features, consider adding a "Features" section and listing them here.

-  你的动机是什么？
-  为什么你要建立这个项目？
-  它解决了什么问题？
-  通过项目经验你学到了什么？
-  什么让你的项目脱颖而出？如果你的项目有很多特性，可以考虑添加一个“特性”部分并在这里列出它们。

## How to Writing a Good README file

## 怎样编写一个好的readme文件

Here are the steps you should take to write your README.

下面是编写readme文件的步骤。

### Include Your Project's Title

### 包含你项目的标题

This is the name of the project. It describes the whole project in one sentence, and helps people understand **what** the main goal and aim of the project is.

这是项目的名称。它用一句话描述了整个项目，帮助人们理解项目的主要目标和目的是 **什么** 。

### Write a Description

### 写一个简单的描述

Your description is an extremely important aspect of your project. A well-crafted description allows you to show off your work to other developers as well as potential employers.



This is an important component of your project that many new developers often overlook.

The quality of a README desccription often differentiates a good project from a bad project. A good one takes advantage of the opportunity to explain and showcase:

-   What your application does,
-   Why you used the technologies you used,
-   Some of the challenges you faced and features you hope to implement in the future.

A good README helps you stand out among the large crowd of developers who put their work on GitHub.

### Add a Table of Contents (Optional)

If your README is very long, you might want to add a table of contents to make it easy for users to find what they need. It helps them navigate to different parts of the file.

### How to Install Your Project

If your project is software or an app that needs installation, you should include the steps required to install your project. Provide a step-by-step description of how to get the development environment running.

### How to Use Your Project

Provide instructions and examples so users/contributors can use the project. This will make it easy for them in case they encounter a problem – they will always have a place of reference.

You can also include screenshots to show examples of the running project.

### Include Credits

If you worked on the project as a team or an organization, list your collaborators/team members. You should also include links to their GitHub profiles.

Also, if you followed tutorials to build that particular project, include links to those here as well. This is just a way to show your appreciation and also to help others get a first hand copy of the project.

### List the License

This is the last section of most README. It lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)

🏆 The sections listed above are the minimum for a good README. But you might also want to consider adding the following sections.

### Badges

![LaryMak's Blog](https://img.shields.io/badge/LaryMak's%20Blog-Follow%20Me-blue)

Badges aren't _necessary_. But using badges it just a simple way of letting other developers know that you know what you're doing.

Don't know where to get them from? Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

### How to Contribute to the Project

If you created an application or package and would like other developers to contribute to it (an open source project), you will want to add guidelines to let them know on how they can contribute to your project.

The [Contributor Covenant](https://www.contributor-covenant.org/) and [The Contributing guide](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors) will give you the help you need when setting up the rules.

### Include Tests

Go the extra mile and write tests for your application. Then provide code examples and how to run them.

## Conclusion

Those are the main steps you need to write your first README!

Now that we have gone through the steps, I believe you are ready to add READMEs to your projects to help make them stand out.

If still need a bit more guidance, you might also check out these examples:

-   [Make README](https://www.makeareadme.com/)
-   [README Generator](https://rahuldkjain.github.io/gh-profile-readme-generator/)
-   [README](https://github.com/kefranabg/readme-md-generator)

Also check out this guide by [navendu-pottekkat](https://github.com/navendu-pottekkat/awesome-readme/blob/master/README-template.md)

If you have read this far I really appreciate it.  
Connect With me at [Twitter](https://twitter.com/larymak1) | [Insta](https://www.instagram.com/nextgencoders/) | [YouTube](https://www.youtube.com/channel/UCrT1ARRZfLOuf6nc_97eXEg) | [LinkedIn](https://www.linkedin.com/in/hillary-nyakundi-3a64b11ab/) | [GitHub](https://github.com/larymak)

Do share your valuable opinion, I appreciate your honest feedback!

Enjoy Coding ❤
