> * 原文地址：[How to create a web performance culture inside your team](https://www.freecodecamp.org/news/creating-a-web-performance-culture-inside-your-team-f00c0d79765f/)
> * 原文作者：Alex Moldovan
> * 译者：waylen94
> * 校对者：


![如何营造性能至上的团队文化](https://cdn-media-1.freecodecamp.org/images/1*f-Ey0tW6O_vFHz_RPZWh_A.jpeg)

和我合作的大部分人都了解，我是个追求性能优化的极客。 渲染引擎，代码打包优化，每秒帧数提升这些关键词是工作中的家常便饭。一切为了性能！

性能永远是软件工程领域的“一等公民”。

在团队中营造**性能至上文化**能帮助你预先降低性能相关的风险。

为什么性能至上如此重要？风险立于何处？

## 为什么性能优化如此重要

作为合格的 Web 开发者，我们的目标是提供最佳的用户体验。

### 性能关乎可用性

有很多研究 ([\[1\]][1],  [\[2\]][2],  [\[3\]][3]) 展示了商业目标与网站可用性之间的关联。

网站的用户体验是否快速、简洁往往能决定网站的成败。

如果你的网站速度太慢，那么再优秀的 UI 框架与架构也不能留住用户。白屏或者加载的时候他们可能受不了等待就关掉网页了。

[如果网站不显示任何内容，53% 的用户在 3 秒内就会关闭页面。][4]

[另外，根据 Google 站长工具显示，性能也会影响网页在移动端的搜索排序。][5].

### 性能关乎可访问性

让我们看看全球市场，考虑到数据成本的时候性能亦是重要因素。想一想，用户浏览你的网站需要花多少钱？

你可以发现从  [这个网站][6] 查看世界各地的人们为一个月 500M 手机流量支付的费用。问问自己“我愿意花 X 元浏览我的网站么”，或许你会被自己的答案惊到。

此外，在一些国家，人们大部分是通过手机上网。   [移动端上网时间][7]。 所以，在优化性能的时候，我们得首先考虑移动端优化。
忽略这一点，你的产品可能被许多人拒绝！

### 性能关乎同理心

拿着锤子的木匠眼中只有钉子，我们不应该仅仅关注钉子，它仅仅只带给我们对房子肤浅的理解。

不要只顾自我沉浸在一些很炫的事物中（比如新技术、尖端框架），眼界放开，关注住在房子里的人，关注他们的需求，运用新技术和尖端框架去满足他们。

性能至上，时刻保持  **同理心** 与 **无我** 状态。然而，不幸的是，这些品质并不是存在于所有工作环境中。


## 为最坏做打算

几周前，同事向我展示了个有趣的场景。某装修网站用内容管理系统（类似WordPress）在后台管理数据。一天，有人上传了一张图片：

![](https://cdn-media-1.freecodecamp.org/images/4u0XBu8dfPbS9KEEuq0Uc1ad5g9cMbqoJb3g)

截图来自 Chrome Dev Tools

这张图片有  **9.3 MB** 在 MacBook Pro 上，Wi-Fi 连接超好的情况下，加载了 **7 秒钟** 才显示。. 你能想象多长时间如果这个照片需要在移动端展示么？答案是

 **无穷**! 因为一旦移动浏览器打开这个网页，直接未响应！
 
[就是这个网站][8] 如果你是好奇宝宝，尝试一下，但是请注意你的浏览器很可能卡住

我们不应该抱怨上传照片的用户，他们只是想展示家具的细节。

回到刚才的观点——了解我们的用户，在用户产生内容的情况下，我们应该总是为最糟糕的情况做准备。

作为开发者，当用户与你开发的软件交互时，你应该有考虑到**所有状况**的觉悟。


## 何时优化

通常，性能优化有两种途径.  [Ben Schwarz][9]  总结了这两种方式, 在讨论 [关键性请求] 的文章中[10].

![](https://cdn-media-1.freecodecamp.org/images/LQhLZLaEKGlTWi5btGkboK0W2JOjNv6QRxKF)

![](https://cdn-media-1.freecodecamp.org/images/fulD0TWIdNZHkuxffOBGWBmxvWBZftfMwpZc)

**被动**  (上图) vs  **主动**  (下图) 的方式以优化性能

其一，让我们看看传统的被动方式，“David， 这有个问题”。 当问题出现，再考虑解决之法，谓之**被动**。 我也常常看见看到这种情景“问题来了，快，快请砖家”。

这种开发运作方式不仅产生高昂的成本，而且伤害团员协作热情。甚至可能造成各个组员在解决性能优化目标时诿过于人以造成摩擦。

另一方面，积极拥抱**主动**。以主动地眼光把性能优化的决策纳入开发的点点滴滴。

如果你想要了解具体的性能优化所带来的利处，以说服你的上司采用“主动”提高的方式，你可以看看 [网络性能优化演示报告][11]。

一旦开启“主动”模式，它提高开发效率带给团队“早发现，早解决”的团队文化，而不是“出现问题，找顾问”。

但性能“这座罗马皇城，不会一夜建成”。只有在适当的情景下逐一了解领悟它所带来的影响以及适当的解决方案。

## 优化的艺术 - 具体措施

你了解有多少用户通过移动端登录一的站点么？你进行站点压力测试的频率如何？你有在中档设备[例如Moto G4][12]中测试运行你的设备么？

这就是我们维护的站点日常所要面对的情景。

了解你的目标用户，了解你的目标场景。选择对的针对性的**指标**是实现团队性能至上文化的重中之重。

一旦你选择了所关注的指标，你就可以着手**性能提升计划**

终于，动手时间！ 这里分享一些方法与实践，你可以引入你的日常工作：

###  第一步： 性能评测

-   [Lighthouse][13]  这是一个很棒的项目，你可以在 Chrome 开发者工具中使用它。它能够帮助你了解潜在的性能优化点。也可以在 SEO、可访问性和最佳实践这些方面给你提供参考。
-   通过 [Webpagetest][14]  进行指标跟踪调查以及比较性能优化策略部署前后的变化. 同样推荐[gtmetrix][15], 小众软件，有亲和力的交互界面。

### Step 2: 性能流程自动化

-   在产品迭代过程中考虑性能相关的问题。[bundlesize][16] 是一个非常好的工具包，在迭代过程中定义参数的范围。

-   创建自动测试，如果加载次数或其他指标超出一定的阈值，则测试失败。 [Puppeteer][17] 它有直接接入谷歌浏览器的应用接口，直接观测相关指标。

### Step 3: 性能可视化 

-   团队成员应当明白自己所写代码对团队的影响。   [页面打包分析器][18]  这儿是个页面打包可视化的工具，如果应用某个库会使代码总量增加 10%，那么开发者在选择之前应该多考虑一下。

-   [import cost][19] 用于 VSCode，可以告诉你所加载的依赖包的代码量。同样的，这个工具也是帮助每位成员了解自己的代码对项目的影响。

### Step 4: 督促和授权

-   有序的组织离不开强有力的规范，对成员的持续教育应该贯穿整个过程。我们使用 [performance checklist][20] 规范每一个项目的性能模块。

-   确保**所有人**融入到性能优化团队文化。如果只有一人参与，你又陷入了“被动”优化的怪圈。使团队各司其职，共同确保项目各方面品质。

构建性能至上的**团队文化**非朝夕之功。 它是一个团队**觉知**问题，**行动**改善，以及**成长**蜕变的过程。

性能优化其实并不复杂。实现它需要技术背景以及相应网络知识。

扎实的基本功能够帮助你利用最先进的技术提升你的产品。

在我工作的地方，性能优化已成为日常学习工作的一部分。我们不是单一的做到优化性能，我们探讨体会性能优化背后的缘由。

![](https://cdn-media-1.freecodecamp.org/images/hkpZovJ1oITO9WFs3xjZzrDaUKIPzwyZ2Ig6)

[Performance cheatsheet poster][21]  展示在我们Fortech的办公室中

## 性能是产品质量的一部分

最后，产品性能优化与前端交互体验，安全和可访问性提升一样重要。它是**软件品质**的一部分。

有时，你也许认为关注性能提升是一件画蛇添足的举动。它也许并不是你客户需求的关键。

但作为一名合格的开发人员，提供高品质应用本是我们的天职。而应用性能则是软件质量的要素之一。

这里总结几点营造性能至上文化的几点须知：

-   提升你的认知，了解你的用户
-   主动拥抱问题，解决问题
-   保持“测评”与“行动”的习惯， 测评，行动，如此循环
-   统一团队，知行合一
-   牢记把关产品质量

## 参考文献

许多人追问我有什么网络性能优化的参考材料，以下列出：

-   [Google Developers portal][22]  这儿有许多性能优化技术文章
-   [perf-tooling.today][23]  网络性能相关资源
-   [The Chrome DevTeam’s publication][24] 发现站点性能提升创意以及学习案例
-   关于我们的  [performance checklist on github][25]  提出你的想法！
-   也可以看看 Smashing Magazine’s 2018  [front-end performance checklist][26],他的文章令我很有感慨！ 

同时，我很希望你能分享你的想法。例如，你的团队拥抱性能至上么？你认为哪一部分最有用？如果你认为文章对你有启发，真诚的希望你留言与我分享！
  

[1]: https://www.doubleclickbygoogle.com/articles/mobile-speed-matters/
[2]: https://wp-rocket.me/blog/speed-up-your-website-make-the-first-few-seconds-count/
[3]: https://www.fastcompany.com/1825005/how-one-second-could-cost-amazon-16-billion-sales
[4]: https://developer.akamai.com/blog/2016/09/14/mobile-load-time-user-abandonment
[5]: https://webmasters.googleblog.com/2018/01/using-page-speed-in-mobile-search.html
[6]: https://whatdoesmysitecost.com/#usdCost
[7]: https://www.smartinsights.com/mobile-marketing/mobile-marketing-analytics/mobile-marketing-statistics/
[8]: http://www.homemade-modern.com/ep106-media-console/
[9]: https://twitter.com/benschwarz?s=17
[10]: https://speakerdeck.com/benschwarz/the-critical-request
[11]: https://wpostats.com/
[12]: https://www.gsmarena.com/motorola_moto_g4-8103.php
[13]: https://developers.google.com/web/tools/lighthouse/
[14]: https://webpagetest.org/
[15]: https://gtmetrix.com/
[16]: https://github.com/siddharthkp/bundlesize
[17]: https://github.com/GoogleChrome/puppeteer
[18]: https://github.com/webpack-contrib/webpack-bundle-analyzer
[19]: https://github.com/wix/import-cost
[20]: https://github.com/FortechRomania/js-team-showcase/blob/master/how-we-work/performance/checklist.md
[21]: https://github.com/FortechRomania/js-team-showcase/blob/master/how-we-work/performance/performance-cheatsheet.png
[22]: https://developers.google.com/web/fundamentals/performance/why-performance-matters/
[23]: https://www.perf-tooling.today/
[24]: https://medium.com/dev-channel
[25]: https://github.com/FortechRomania/js-team-showcase/blob/master/how-we-work/performance/checklist.md
[26]: https://www.smashingmagazine.com/2018/01/front-end-performance-checklist-2018-pdf-pages/

