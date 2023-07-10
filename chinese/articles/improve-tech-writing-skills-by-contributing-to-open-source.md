> -  原文地址：[How to Improve Your Technical Writing Skills by Contributing to Open Source Projects](https://www.freecodecamp.org/news/improve-tech-writing-skills-by-contributing-to-open-source/)
> -  原文作者：[CHRISTINE T. BELZIE](https://www.freecodecamp.org/news/author/christine/)
> -  译者：Rhea-xiao
> -  校对者：

![How to Improve Your Technical Writing Skills by Contributing to Open Source Projects](https://www.freecodecamp.org/news/content/images/size/w2000/2023/06/Blog-post-cover-for-FCC---3.png)

你是否在 [Hashnode](https://hashnode.com/about) 或者 [Dev.to](http://dev.to/) 上写过技术帖子，又是否总想尝试新东西呢？如果是这样的话，有一件事情能帮你一解心头之痒：为开源项目做贡献。

我知道，我知道你肯定已经无数次在 Discord 群组里或在技术相关的社交媒体帖子中听到过“为开源做贡献！” 的呼吁声。但是相信我，身为一名技术写作者，这真的是一个你积累经验的好方式。

一方面，你能参与一些公开展示的项目，这能帮助你向技术写作专业人士展现你的能力。

另一方面，和大家的普遍认识不同，实际上编写代码并不是为开源项目做贡献的唯一方式，你也可以利用自己的写作技能帮助项目维护者进行项目文档的优化。

除此之外，为开源项目做贡献能够帮助你学习新的技术语言和软件，而这被美国劳工统计局描述为 [技术写作者的重要技能之一](https://www.bls.gov/ooh/media-and-communication/technical-writers.htm#tab-4)。

还是无法说服你？没关系，在此指南中，我会探讨如何寻找需要技术写作者的开源项目，也会介绍技术写作能为开源项目做什么贡献，并且就如何公开展示这些贡献提出建议。

## 如何寻找需要技术写作贡献的开源项目

许多开源项目在文档方面都需要帮助，而你需要根据自己的兴趣、技术写作水平以及贡献机会才选择你将进行文档贡献的项目。

在寻找需要贡献的开源项目时，我强烈建议你向同事询问他们参与的项目。与朋友合作+参与开源项目，这难道不是一举两得吗！:) 在选择了项目之后，我建议你做这些事情：

1. 前往项目仓库的 **Issues** 选项卡。

![黄色箭头指向 "issues" 选项卡](https://www.freecodecamp.org/news/content/images/2023/06/picking-an-issue--part-1-.png)

黄色箭头指向 Issues 选项卡

2. 单击 **Label** 选项

![Orange arrow pointing to the Label section](https://www.freecodecamp.org/news/content/images/2023/06/Picking-a-issue--part-2--1.png)

橙色箭头指向 Label 选项

3\. Type "documentation" in the textbox and voilà!

![The word "documentation" appears in the textbox ](https://www.freecodecamp.org/news/content/images/2023/06/picking-an-issue--part-3-.png)

"documentation" appearing in the textbox

Now if you are looking for something more specific, here is my list of open source projects with a focus on documentation:

### The Good Docs Project

If you’re looking to start gaining experience in working with documentation, I highly recommend joining [this group](https://thegooddocsproject.dev/). :) They have diverse working groups that focus on different types of writing whether it’s creating documentation templates that other developers can use in their own open source projects, improving the content on the organization's website, and doing QA (Quality Assurance) for the templates that community members have created.

### Codecademy

If you’re knowledgeable about a particular programming language and want to share that knowledge with the world, then I highly recommend contributing to Codecademy's [docs](https://github.com/Codecademy/docs) and [article](https://github.com/Codecademy/ugc) repositories. They provide templates based on different needs such as providing a new entry for a certain chapter and updating/editing an existing entry.

### Astro

If you’re an avid user of Astro, then you can share your tips on using this software on their [docs repo](https://github.com/withastro/docs). Their documentation team is very open to working with members with different levels of experience.

Now picking a project is just one step. Let's look at some different ways you can contribute to open source projects as a technical writer.

## Ways to Contribute to Open Source as a Technical Writer

Congrats! You've picked your project. Now, you just have to decide how you will use your tech writing skills to contribute.

I know this part can be difficult but don’t fret – now we're going to discuss some different types of contributions you can make.

### Revise typos and other grammar errors on the README file

This file is crucial to the foundation of an open source project. It's where they describe the project’s purpose and the steps to contribute to it, so it should be as clearly written as possible.

If you're reading through the README file and you see a comma missing or an unclear sentence, raise an issue about it to maintainers and make those edits (if they approve, of course).

I made this contribution to EddieHub when I first joined their community. It was not only a great way to introduce myself, but it also taught me how to tailor documentation to a specific audience. Now this not the only text-based contribution, let's look at another one! :)

### Create an internal docs style guide

This entails creating a guide that defines the standards for writing and formatting the documentation for an open source project. It helps instruct contributors on how to effectively write for open source.

In this document, you'll see information such as how punctuation marks should and should not be written, specific ways to format code blocks, and the tone and voice that contributors should use when writing about the product.

A great example of this would be [the Contractions section in Google's Developer Documentation style](https://developers.google.com/style/contractions).

Also, I decided to make [a doc style guide for EddieHub's Linkfree project](https://linkfree.io/docs/docs-style-guide) after watching a video by Portia from [Document Write's YouTube channel](https://www.youtube.com/live/t-Tz6QzH8YA?feature=share). She talked about how open source contributors, especially those who want to pursue tech writing as a career, can benefit from having these sorts of style guides.

Through creating this guide, I've learned the following:

1.  **Writing in a new style or language:** Since Linkfree's main demographic is in the U.K., the maintainers wanted the guide to be written in British English. I've never used this version of English before, so it was interesting to learn how words are spelled, capitalized, and what punctuation marks are used.
2.  **Using new tech tools or frameworks:** [MDX (Markdown X)](https://mdxjs.com/) is the technical language contributors use to maintain Linkfree's documentation. Simply put, it's Markdown that allows to you to put [JSX](https://facebook.github.io/jsx/) (syntax that let's you put HTML code in JavaScript). I've briefly worked with Markdown, so it was a bit easier to implement this language in creating the docs guide.

Now, a style guide is only one of the many docs-based contributions you can do for an open source project. Let's look at another one! :)

### Add to a tutorial for a product

If you're good at teaching or find yourself reading an open source software's tutorial that is missing key information, consider doing this as your contribution.

A great example of this would be [the tutorial section](https://support.audacityteam.org/community/contributing/tutorials) on Audacity's website. It's a free open source audio recording and editing software.  

As a person who's newer to the open source community, I noticed that most beginner-level content never really provided tips or advice on how contributors can implement their open source contribution experiences when looking for jobs or during interviews. So I was scrolling through OpenSauced's repository on GitHub and noticed that this kind of content would be helpful in their free "Intro to Open Source" course.

I presented my idea to [Bekah](https://twitter.com/BekahHW), the company's User Experience Lead, created a pull request, and violà, [it got merged](https://github.com/open-sauced/intro/pull/5)!  

I highly recommend making this kind of contribution because a great way to gain practice is by simplifying technical content for a global audience of all skill levels. It also develops your detail-oriented skills.

Now, before you go, there’s just one more thing to consider when gaining tech writing experience through contributing to open source projects.

## Show Your Work

When it comes to the importance of displaying your creations, Austin Kielon said it best: “Show your work”.  

I mean, we’re writers for crying out loud! It’s in our DNA to display content through words, so why not do it with our own stuff?  

You can write about your projects via your blog, social media posts, or record a podcast episode about it.

If you’re looking for something more structured, I recommend using [OpenSauced](https://opensauced.pizza/#features)'s free Chrome extension. It’s a tool that allows you to keep track of the GitHub open source repositories you currently contribute to and those you plan to contribute to.

They also have this feature called “Highlights” where you can pick certain contributions to post to your profile and share on LinkedIn and Twitter. To learn how, check out their [tutorial](https://github.com/open-sauced/intro/blob/main/06-the-secret-sauce.md#develop-your-open-source-resume).

This would be a great thing to reference during your job interviews and it can be an inspiration for other open source contributors. When I showcased the docs style guide I created for Linkfree on Twitter, one of my colleagues liked it so much that she thought it'd be good to have one for her project. So per her request, [I created one](https://github.com/AccessibleForAll/AccessibleWebDev/blob/main/docs-style-guide.md)! :) Never underestimate the power of displaying your work.

There you have it folks, your guide to gaining writing experience through contributing to open source projects. I know it can be intimidating to do – especially at first – but with these tips and a positive attitude, I know you’ll succeed.

## Credits

Open Source Symbol from [UXwing](https://uxwing.com/opensource-icon)

Tech Writing Icon by Ylivdesign from [Dreamstime](https://www.dreamstime.com/technical-writing-icon-outline-style-technical-writing-icon-outline-technical-writing-vector-icon-web-design-isolated-white-image214934937)
