![freeCodeCamp.org Social Banner](https://s3.amazonaws.com/freecodecamp/wide-social-banner.png)
[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)][1]
[![first-timers-only Friendly](https://img.shields.io/badge/first--timers--only-friendly-blue.svg)][2]

# news-translation

This repository is used for collaborating on [Developer News][3] translation to different world languages.

Each language translation is available in their own directories at the root of the repository. As of now, we are working on supporting chinese language first and will eventually add translations for other languages in future.

[![NPM Dependency](https://david-dm.org/freeCodeCamp/news-translation.svg)][4]
[![CI & CD](https://github.com/freeCodeCamp/news-translation/workflows/CI%20&%20CD/badge.svg)][5]

## freeCodeCamp 文章翻译计划

freeCodeCamp 英文社区的成员发布了大量[优质文章][6]，分享前端、后端、 Android、iOS、产品、设计、区块链、人工智能等领域的内容，以及学习编程的经历和求职经验。我们一起把这些文章翻译成中文，分享给更多读者。

### 参与收获

-   持续提升你的英文水平和多人协作的经验
-   快速提高你的 Git 操作熟练度
-   收获 GitHub 认可的 contributions
-   受邀成为 freeCodeCamp 社区作者，文章发表在[官网][7]
-   有机会受邀参与 freeCodeCamp 城市社区举办的技术交流活动
-   在社区中结识优秀的小伙伴，拥抱更多技术成长与职业发展的可能性

### 参与翻译

请在认领翻译前阅读这两篇：

-   [图文详解如何参与翻译][8]
-   [翻译技巧][9]

在校对了好多篇文章之后，我们发现不少文章有一些类似的小问题，在这里特别提醒一下：

-   在翻译 you 这个单词的时候，不需要使用敬语”您“，使用”你“即可
-   中英文之间需要加一个空格（这点在翻译技巧中有写）
-   翻译好之后可以自己读一遍，看是否流畅，是否符合中文的表达习惯

### 参与校对

每一篇翻译好的文章，我们会有一位贡献者对其进行校对。如果你希望参与校对，请在 [Review-awaiting][10] 列表选取文章并留言“认领校对”，我们会邀请你成为 collaborator。

### 发布文章

我们会和译者一同确认校对意见，形成终稿，即校对完毕。翻译及校对完毕的文章将以翻译者的姓名（或昵称）发布在 [freeCodeCamp 官网][11]（我们会邀请译者在官网注册作者账号）；同时发布在 freeCodeCamp 微信公众号，在公众号发布时将在文章中同时注明翻译者和校对者的姓名（或昵称）。此外，我们还会在其他相关站点的 freeCodeCamp 专栏发布译文，链接到官网。

## 译者交流

### 开放周会

- 时间：
- 地点：https://meeting.tencent.com/p/3840877398

### 日常讨论

https://chat.freecodecamp.org/channel/tongyong

## Lint & Format rules

### Linter

#### Cloud

This repository has [a GitHub action][12] to lint **Markdown & Native Language syntax** on **Pull Request commits**, translaters should follow the **Lint Report** to fix **Syntax Warnings & Errors** of the own article.

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

[Prettier][13] has many **Formatter Plugins** to support popular **Editors & IDEs**.

[1]: http://makeapullrequest.com/
[2]: http://www.firsttimersonly.com/
[3]: https://www.freecodecamp.org/news
[4]: https://david-dm.org/freeCodeCamp/news-translation
[5]: https://github.com/freeCodeCamp/news-translation/actions
[6]: https://www.freecodecamp.org/news/
[7]: https://chinese.freecodecamp.org/news/
[8]: https://git-pager.leanapp.cn/Contributing.md
[9]: https://github.com/freeCodeCamp/news-translation/wiki/%E7%BF%BB%E8%AF%91%E6%8A%80%E5%B7%A7
[10]: https://github.com/freeCodeCamp/news-translation/issues?q=is%3Aissue+is%3Aopen+label%3AReview-awaiting
[11]: https://chinese.freecodecamp.org/news/
[12]: https://github.com/freeCodeCamp/news-translation/actions?query=workflow%3A%22CI+%26+CD%22
[13]: https://prettier.io/
