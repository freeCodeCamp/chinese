> * 原文地址：[How to create a web performance culture inside your team](https://www.freecodecamp.org/news/creating-a-web-performance-culture-inside-your-team-f00c0d79765f/)
> * 原文作者：Alex Moldovan
> * 译者：waylen94
> * 校对者：


![How to create a web performance culture inside your team](https://cdn-media-1.freecodecamp.org/images/1*f-Ey0tW6O_vFHz_RPZWh_A.jpeg)

和我合作的大部分人都了解，我是个追求性能优化的极客。 渲染引擎，代码打包优化，每秒帧数提升这些关键词是工作中的家常便饭。一切为了性能！

性能永远是软件工程领域的“一等公民”。

Having a strong  **performance culture**  in your team can ensure that you mitigate — ahead of time — any risks associated with bad performance.

But why is it so important? And what are those risks?

## 为什么性能优化如此重要

Remember that as web developers, our goal is to create the best possible experience for our users.

### 性能代表了可用性

有很多研究 ([\[1\]][1],  [\[2\]][2],  [\[3\]][3]) 展示了商业目标与网站可用性之间的关联。

快速响应，优化完善是网站在满足客户需求时成败的关键。

如果网页呈现缓慢，先进的前端框架与架构必将失去光泽。更不用说我们挑剔的用户在面对白屏时会放弃浏览我们的网页。

[53% 的用户预计在3秒内关闭页面][4] 如果网页内容得不到有效的呈现

另外，网页性能在手机端也是搜索排序的一大因素 [谷歌搜索][5].

### Performance is about accessibility.

Let’s talk about the global market. Performance budgets are also important when it comes to the cost of data. How much does a user pay to visit your website?


You can find out using  [this website][6]. Then you can ask yourself: “Am I willing to pay x cents to visit my website?” You might be surprised by your own answer.

Furthermore, there are countries where the vast majority of  [internet time is spent via mobile][7]. So you have to take a mobile-first approach in optimizing performance.

By omitting this, you are rendering your product inaccessible for a lot of people!

### Performance is about empathy

We have the tendency to see our work strictly through our own eyes. This is dangerous, as it leads to a superficial understanding of our users’ needs.

Not to mention our constant need to work on the cool stuff (new technology, state of the art frameworks, and so on) and ignore boring and tedious jobs.

Performance matters, and you have to work on optimizing it with  **empathy** and  **selflessness** in mind. But these qualities, unfortunately, don’t come by default in all working environments.

## Plan for the worst

A colleague showed me an interesting scenario a few weeks ago. There’s a home decor website which is using some CMS system behind the scenes to manage data. Someone uploaded this image:

![](https://cdn-media-1.freecodecamp.org/images/4u0XBu8dfPbS9KEEuq0Uc1ad5g9cMbqoJb3g)

screenshot from Chrome Dev Tools

It’s  **9.3 MegaBytes**  of data which takes roughly  **7 seconds**  to load on an ultra fast Wi-Fi connection and on a MacBook Pro. Can you image how much time this would take on a mobile device? The answer is  **infinity**! Because the mobile browser becomes unresponsive when you open the website.

[Here’s the website][8]  if you’re curious, but please proceed with care as it will potentially block your browser!

We shouldn’t blame the user. They wanted to display a very detailed image of an assembly.

Coming back to the idea of  **understanding**  our users, we should always prepare for the worst scenarios when it comes to user created content.

As a developer, you are  **completely responsible**  for the way in which your users interact with your software.

## When to optimize

There are two approaches to performance optimizations.  [Ben Schwarz][9]  summarizes the two approaches in his deck,  [The Critical Request][10].

![](https://cdn-media-1.freecodecamp.org/images/LQhLZLaEKGlTWi5btGkboK0W2JOjNv6QRxKF)

![](https://cdn-media-1.freecodecamp.org/images/fulD0TWIdNZHkuxffOBGWBmxvWBZftfMwpZc)

**Reactive**  (top) vs  **Proactive**  (bottom) approach to optimizing performance

On one end, we have the traditional: “Houston we have a problem!” approach. This is a highly  **reactive**  way of treating performance issues. I also like to call it the: “Oh shoot! Call in the consultant!” problem.

Not only is this costly for your business, but it can also be a great demotivator for the team. It can even lead to conflict when people are not connected with the goals of performance optimization.

On the other end, we have the  **proactive**  approach. You bake performance optimization into your software development process.

If you need to convince the business side to try the proactive approach, check out  [WPO stats][11]. This is great resource with case studies that show the benefits of performance optimizations.

Once the approach is in place, it’s the team and the culture that solve the problems ahead of time, rather than the consultant who comes in to save the day. And done right, this can be a great motivator for the team.

But performance awareness doesn’t happen over night. You have to create the right context for people to be aware of the impact of what they do.

## Measure and Act

Do you know how many users are landing on your site from mobile devices? How often are you testing in bad network conditions? How often do you take out a mid-range device, like a  [Moto G4][12], and start playing with your application?

These are all relevant scenarios that your users might encounter every day!

Know your user base, and know your device and browser usages. Good and relevant  **metrics**  are everything if you want to implement a performance culture.

Once you have the metrics, it’s time to establish the  **performance budgets**.

Finally, time to act! Here are some tools and practices you can introduce into your regular work environment:

### Step 1: Measure performance indicators

-   [Lighthouse][13]  is an amazing project and is available in Chrome Dev Tools. It will give you great insights into potential performance improvements. It will also give you some nice suggestions for SEO, Accessibility, and Best Practices.
-   [Webpagetest][14]  is great for keeping track of metrics and comparing waterfall charts before and after deploys. I can also recommend  [gtmetrix][15], a less known tool, with a very easy to use interface.

### Step 2: Automate

-   Add performance related build steps into your CI.  [bundlesize][16]  is a great package if you want to define some hard limits for your bundles.
-   Build automated tests that will fail if loading times or other relevant metrics exceed certain thresholds.  [Puppeteer][17]  has direct access to the Chrome API so you can leverage that in your tests.

### Step 3: Make it visual

-   Everyone in the team should be aware of the impact of the code they write.  [Webpack bundle analyzer][18]  is a great way of visualizing what goes inside the output bundles. People might think twice before using a library which increases the overall size by 10%.
-   [import cost][19]  for VSCode will show you how much code you are adding to the project by using certain dependencies. Again, it’s all about making sure everyone is fully aware of the impact of what they do.

### Step 4: Enforce and Empower

-   You have to be ready to enforce strict rules within the organization. In our case, we created a  [performance checklist][20]  to be followed on each project.
-   Make sure  **everyone**  in the team gets to work on the performance optimization tasks. You don’t want to have a single person that does that, because you get into the consultant scenario again. By splitting the tasks, everyone gets familiar with the context and with the different ways of preventing problems.

Building a performance oriented  **culture**  is a step by step process. And it’s a process of  **understanding**  the problems and  **acting**  on them.

One constant in the entire process is the need to  **educate**  people.

Performance optimization techniques are not complicated. But they need some technical background and a good understanding of how the web works.

Building on top of a solid foundation can help your team grasp even the most advanced techniques for speeding up your application.

In our case, we make sure web performance is part of the learning path for all engineers. We don’t just enforce a checklist. We make sure people have a good environment to learn the reasons behind the techniques.

![](https://cdn-media-1.freecodecamp.org/images/hkpZovJ1oITO9WFs3xjZzrDaUKIPzwyZ2Ig6)

[Performance cheatsheet poster][21]  in our office at Fortech

## Performance as part of software quality

In the end, working on performance is the same as working on UX, security, or accessibility. It is part of the  **software**  **quality**  that you offer.

At times, it might seem like extra effort for something that is not requested of you. Performance might not be part of your non-functional requirements, after all.

But coming back to the idea of responsibility, it is our duty to provide the best possible quality. And performance is one of the pillars of software quality.

If I were to sum up the path towards a performance culture, these are the key takeaways:

-   Raise awareness, and build with empathy for the user
-   Favour the proactive approach and deal with issues ahead of time
-   Measure and act in a continuous loop
-   Spread the knowledge and involve the entire team in the process
-   Make it part of your software quality as an end goal

## References

许多人追问我有什么网络性能优化的参考材料，以下列出：

-   [Google Developers portal][22]  这儿有许多性能优化技术文章
-   [perf-tooling.today][23]  网络性能相关资源
-   [The Chrome DevTeam’s publication][24] 发现站点性能提升创意以及学习案例
-   关于我们的  [performance checklist on github][25]  提出你的想法！
-   也可以看看 Smashing Magazine’s 2018  [front-end performance checklist][26],他的文章令我很有感慨！ 

I’m super curious to hear your thoughts on this. Is your team embracing a performance culture? What works for you? What doesn’t? Leave a comment and share if you enjoyed this article!


  

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

