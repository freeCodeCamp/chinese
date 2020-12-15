![freeCodeCamp.org Social Banner](https://s3.amazonaws.com/freecodecamp/wide-social-banner.png)
[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)][1]
[![first-timers-only Friendly](https://img.shields.io/badge/first--timers--only-friendly-blue.svg)][2]

# news-translation

This repository is used for collaborating on [Developer News][3] translation to different world languages.

Each language translation is available in their own directories at the root of the repository. As of now, we are working on supporting chinese language first and will eventually add translations for other languages in future.

[![NPM Dependency](https://david-dm.org/freeCodeCamp/news-translation.svg)][4]
[![CI & CD](https://github.com/freeCodeCamp/news-translation/workflows/CI%20&%20CD/badge.svg)][5]

## freeCodeCamp 文章翻译计划

freeCodeCamp 英文专栏发布了大量[优质文章][6]，分享前端、后端、 Android、iOS、产品、设计、区块链、人工智能等领域的深度教程，以及学习编程的经历和求职经验。我们一起把这些文章翻译成中文，分享给更多读者。

### 参与收获

-   持续提升你的英文水平和多人协作的经验
-   快速提高你的 Git 操作熟练度
-   收获 GitHub 认可的 contributions
-   受邀成为 freeCodeCamp 社区作者，文章发表在[官网][7]
-   有机会受邀参与 freeCodeCamp 城市社区举办的技术交流活动
-   在社区中结识优秀的小伙伴，拥抱更多技术成长与职业发展的可能性


### 如何参与翻译

如果你此前没有在 GitHub 协作翻译的经验，**请在认领翻译前阅读以下指南：**

-   [图文详解如何参与翻译][8]

相信你可以根据这份清晰、简洁的指南提交你的你一篇译文！

如果你对这份指南有疑问，请在 [freeCodeCamp Chat 聊天室](https://chat.freecodecamp.org/channel/tongyong)提问，我们随时在线和你交流:)

在翻译过程中，你可能会需要参考以下资料（强烈建议你花十分钟浏览这些资料后，再开始翻译，当然你也可以在翻译过程中随时回来查看）：

-   [翻译技巧][9]
-   [常用词汇翻译对照表][10]（待添加）

在校对了数篇文章之后，我们发现不少文章有一些类似的小问题，在这里特别提醒一下：

-   在翻译 you 这个单词的时候，不需要使用敬语”您“，使用”你“即可
-   中英文之间需要加一个空格
-   翻译好之后，自己读一遍，看是否流畅，是否符合中文的表达习惯


### 如何参与校对

每一篇翻译好的文章，我们会有一位贡献者对其进行校对。如果你希望参与校对，请在 [Review-awaiting][13] 列表选取文章并留言“认领校对”。


### 发布译文

- 我们会和翻译者一同确认校对意见，形成终稿，即校对完毕。翻译及校对完毕的文章将以翻译者的姓名（或昵称）署名发布在 [freeCodeCamp 中文专栏][14]（我们会邀请译者在官网注册作者账号）。

- 我们会选择合适的文章发布在 freeCodeCamp 微信公众号，在公众号发布时将在文章中同时注明翻译者和校对者的姓名（或昵称）。此外，我们还可能在其他相关站点的 freeCodeCamp 账号下发布译文，链接到中文专栏。

- 网页发布：协作完成的译文应首发在 freeCodeCamp 中文专栏。翻译者如需在其他网站发布译文，应注明 freeCodeCamp 中文专栏的原文链接。

- 微信公众号发布：翻译者如有自己的公众号，可在自己的公众号首发译文，可给 freeCodeCamp 公众号设置白名单转载权限。

## 译者交流

### 开放周会

- 时间：每周六晚上 19:30 - 21:30
- 地点：会议室链接 https://meeting.tencent.com/p/3840877398

参与者无需提前报名，在以上时间内直接进入会议室。请所有参与者务必遵守 [freeCodeCamp 社区行为规范](https://chinese.freecodecamp.org/news/code-of-conduct/)。

**周会流程：**
- 自我介绍（10min）
- 介绍 freeCodeCamp 社区概况和翻译计划概况（5min）
- 反馈在翻译过程中遇到的问题，提出建议（20min）
- 分享校对建议（20min）
- 自由翻译&讨论（60min）
- 总结（5min）

### 日常讨论

欢迎大家加入 [freeCodeCamp Chat 聊天室](https://chat.freecodecamp.org/channel/tongyong)，可随时讨论翻译、编程等话题。

关于聊天室的详细介绍，请阅读[《freeCodeCamp Chat 上线了！欢迎加入中文开发者社区聊天室！》](https://chinese.freecodecamp.org/news/freecodecamp-chat/)。

## Lint & Format rules

### Linter

#### Cloud

This repository has [a GitHub action][15] to lint **Markdown & Native Language syntax** on **Pull Request commits**, translaters should follow the **Lint Report** to fix **Syntax Warnings & Errors** of the own article.

#### Local

To use Linters locally by running these commands shown below:

```Shell
# First time
cd ~/Desktop
git clone https://github.com/freeCodeCamp/news-translation.git
cd news-translation
npm install
# Every time
npm test
```

### Formatter

[Prettier][16] has many **Formatter Plugins** to support popular **Editors & IDEs**.

[1]: http://makeapullrequest.com/
[2]: http://www.firsttimersonly.com/
[3]: https://www.freecodecamp.org/news
[4]: https://david-dm.org/freeCodeCamp/news-translation
[5]: https://github.com/freeCodeCamp/news-translation/actions
[6]: https://www.freecodecamp.org/news/
[7]: https://chinese.freecodecamp.org/news/
[8]: https://github.com/freeCodeCamp/news-translation/blob/master/Contributing.md
[9]: https://github.com/freeCodeCamp/news-translation/wiki/%E7%BF%BB%E8%AF%91%E6%8A%80%E5%B7%A7
[10]: https://github.com/freeCodeCamp/news-translation/wiki/%E7%96%91%E9%9A%BE%E8%AF%8D%E6%B1%87%E8%A1%A8
[11]: https://github.com/freeCodeCamp/news-translation/issues/46
[12]: https://github.com/freeCodeCamp/news-translation/wiki/%E5%8D%8F%E4%BD%9C%E6%B5%81%E7%A8%8B
[13]: https://github.com/freeCodeCamp/news-translation/issues?q=is%3Aissue+is%3Aopen+label%3AReview-awaiting
[14]: https://chinese.freecodecamp.org/news/
[15]: https://github.com/freeCodeCamp/news-translation/actions?query=workflow%3A%22CI+%26+CD%22
[16]: https://prettier.io/
