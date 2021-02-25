> -   原文地址：[What is Data Analytics? A 30,000-Foot Intro to Key Data Analysis Concepts 关于数据分析核心概念的详细介绍](https://www.freecodecamp.org/news/a-30-000-foot-introduction-to-data-analytics-and-its-foundational-components/)
> -   作者：Adam Naor
> -   译者：wjr0102
> -   校对者：

![What is Data Analytics? A 30,000-Foot Intro to Key Data Analysis Concepts](https://images.unsplash.com/photo-1423189871551-9b8513198c81?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ)

数据分析是一个包含了数据检查、清洗、变换和建模的过程，借助数据分析我们可以从数据中发掘有用的信息。

在现代生活中，数据分析无处不在：它有助于我们使用的技术，软件应该如何构建以及产品如何发展。
Data analytics is everywhere in the modern world: it helps inform the technology we use, how software is built, and the ways in which products are developed.

本篇博文将讲述一下三方面内容：
- 数据分析的核心原则及其应用
- 一些例子？
- 从你的数据中获得有用的信息
In this post I will cover core data analytics principles and how to apply them, providing examples that you can deploy to capture and obtain meaningful insights from your data.

同时，我也会分享几个大家所熟悉的，诸如网页优化、健康和饮食软件，农业和保险等产品中的数据分析应用。

如果你也认同“数据会引导你的决定“，那么就往下继续学习吧。
If you share my belief that data is a guide that can inform your decisions, it is worthy of further study.

## 例题

首先，看看你是否可以回答以下这些问题，

即使现在不能轻易地回答出这些问题，也没有关系。

通过本文的学习，你一定可以轻松地给出问题的答案。

一家只售卖一件商品的互联网零售业务经理发现，大约有26%的网页访问者会购买商品。他同时也发现这些消费者的行为是独立的。

现在假设有8位潜在的消费者每天都会访问网站。这位经理参加了一个激励计划：如果一天之内有超过三位（包含三位）消费者在该网站上进行了消费，那么经理将得到$300的日薪，否则他只能得到$100的日薪。

a. 这位经理得到$300日薪的概率是多少呢？

答案：~35%

b. 这位经理的期望日薪是多少呢？

答案：\$170
Answer: \$170

c. 现在，这位经理一共有三个可选择的激励计划：(a) 没有基础工资，但是每卖出一件商品，就可以获得$75的奖励；(b) 每天固定工资$165；(c) 保持原激励计划不变

如果这位经理想要最大化自己的期望收益，他该选择哪一个激励计划呢？

答案：原来的激励计划

## 数据分析的基本概念

我们需要先对数据本身有一定的了解，才能在此基础学习更多，从而解决上述问题。

关于数据分析首先要知道的是，数据有不同的类型。这个概念就和听上去的一样简单易懂。

按照不同的数据分类规则，数据可以被分为不同类型。

数据可以是分类数据（性别、地点等）；也可以是数值型数据（客户数量、活跃用户数等）。

数据可以是离散的，比如说一份工作的应聘人数就是离散的；也可以是连续的，比如说一些无限可能的结果。

在开始数据分析前，首先了解你的数据类型是非常有必要的。

你所拥有的数据是离散的还是连续？你的数据是分类数据还是数值型数据？

在回答了这些问题之后，你才可以对数据进行进一步的挖掘。

除了上述两种分法外，数据还可以根据其和时间的关系，分为下面三大类：

1. 截面数据类型：这种数据描述了某个时间点上，事物的模式或者趋势。像人口普查这种民意调查的结果就是截面数据的一种。
2. 时间序列数据类型：这种数据与一段时间相关，比如我的测试成绩、一段时间内的[工资][1]、 公司一年的[折扣][2]情况等都属于时间序列数据。
3. 面板数据：像公司存在客户关系管理(CRM)系统中的数据就是面板数据的一种。面板数据包含了多个事物在多个时间点上的信息。随着存储设备日趋便宜，这种数据类型也变得更加普遍。

## 离散程度：数据是如何组织的

通过观察数据的形状，你可以大致地了解到它们的离散程度。

我们也可以使用集中趋势这一方法对数据进行组织。

首先我们需要让数据从小到大排序。

当数据有序地排列时，你就可以直观地看到他们的离散程度。

你可以通过最大数据值减去最小数据值的方式得到数据的取值范围，这是衡量数据离散程度一种方式。

如果数据的取值范围很大，我们就可以称这样的数据具有较高的离散程度。

最后，你可以在现有可获得的数据或是数据集中，尝试计算出他们的平均值，中位数和众数。

现在试想一下这个实验：假设你在装满M&M巧克力豆的不透明罐子里取出了一颗红色的巧克力豆，你对这罐巧克力豆会有什么样的想法呢？

显然，仅仅一次的实验结果并不能让我们得出什么有用的推断。下面我们就用置信区间这一概念进行解释。

## 置信区间

置信区间就是当前样本数据可能的取值范围，这个可能性的大小我们用置信度来描述。

置信区间以置信上限和置信下限做区间的上下限，整个数据的均值往往也是这个区间的均值，置信度则用百分数来表示。

回到M&M巧克力豆的问题。

假设你做了无数次的实验，每次都从这个罐子里取出了红色的巧克力豆。也句是说，你只能取出红色的巧克力豆。那么此时你对这罐巧克力豆有什么样的猜测呢？

你会觉得 _很有可能_ 这个罐子里只有红色的巧克力豆。这是一个有效的结论。

需要注意的是，我们并不是说“这个罐子里没有其他颜色的巧克力豆”。而是说有很大的可能性，这个罐子里只有一种颜色的巧克力豆，那就是红色。

你每取出一颗红色巧克力豆，这个推论的置信度就会相应增加。

## 抽样 vs 整体测量

在收集数据的时候，你既可以关注整体所有的数据，也可以关注整体数据的抽样样本

为了说明世界上的M&M巧克力豆只有一种颜色，你是否需要看遍每一颗巧克力豆？还是只需要关注抽样后的巧克力豆？

这就是抽样存在的意义。

抽样总体是总体数据中一个子集。通过对这个子集的分析我们可以推测出总体数据的某些特性。

我们的最终目标就是为了说明在某一个分布中，某一件事发生了多少事或者某一种类型的结果出现了多少次。


## Bringing It All Together: Sampling and Expected Value

观察是数据分析的关键，因为观察可以帮助你回答一些特定的问题：
1. 事情发生的可能性有多大？
2. 如果某件事的概率已知，那么当这件事发生的时候，你可以获得多少收益？

某件事发生的期望次数就是这件事情发生的概率乘上总共有多少次事件发生。

如果当前的期望收益远低于数据的中点，那么未来的期望收益就会增加。想象一下创立一家成功的公司的概率。大多数公司不会发起首次公开募股(IPO)。

但是那么发起IPO的公司就会获得巨大的收益。当我成立一个[帮助人们远程办公]的网站时，我认为成功的概率最多只有10%。

Jeff Bezos曾说他认为亚马逊(Amazon)成功的概率有30%。

一个经常用来描述离散度的方法是标准差。标准差是方差的算术平方根。

方差是每个数据与该数据集的平均值的差的平方的总和。

## 例题和答案

这篇文章概括性地介绍了统计和数据分析中的核心概念。

现在尝试回答下面两个问题。

如果你能成功解决它们，说明你学习得不错！解决这两个问题，需要用到前文提到的期望概念。

网站的设计者和程序员John Bell想要知道创立一家网页设计公司是否可以盈利。

根据需求的不同，John认为他可以提供四种不同的服务：

- 极低需求 - 只有1%的公司会使用这种服务，John因此会损失\$100,000
- 低需求 - 只有5%的公司会使用这种服务，John因此可以盈利\$10,000
- 中等需求 - 有10%的公司会使用这种服务，John因此可以盈利\$25,000
- 高需求 - 有29%的公司会使用这种服务，John因此可以盈利\$75,000

根据过往的设计网站的经验，John认为每种需求的占比如下：

```plain
P(极低需求) = 0.20
P(低需求) = 0.50
P(中等需求) = 0.20
P(高需求) = 0.10
```

(a) 建立决策树并计算提供服务的期望收益

```plain
.2 * (-100,000) + .5 * (10,000) + .2 * (25,000) + .1 * (75,000)
= $ -2,500
```

(b) 计算期望收益

```plain
.5*100,000 + .2*25,000 + .1*75,000 = $17,500
```


(b) Compute the expected value with perfect information for John’s payoff.


换言之，John相信如果开设公司，他将会赚$17,500。

有了前瞻性指导，John可以决定是继续开公司还是寻找另一种展现才华的方式。


## Final Thoughts on Data Analytics

This article is a primer and should help whet your appetite to dive deeper.

Learning data analytics will help you better understand software and how to build products. Like the scenario with John above, you can leverage data analytics to make better informed and forward looking decisions.

You can take risks and understand the odds of success and failure. You can use the principle of counting to determine your current actions.

Data analytics will also help you better understand how technology is transforming offline environments and therefore make you a more thoughtful consumer.

The range of uses for data analytics is incredibly large. Pause for a moment and ask yourself what areas of science, technology, business, software, or product design you find most interesting.

Now conceptualize how data analytics is profoundly influencing all of these fields.

Think about the human body.

[Health products][4], [wellness marketing][5] programs, and exercise apps all use data analytics to optimize exercises for the human body based on data that we emit (think: heart rates, blood oxygen levels, sleep patterns).

These tools are using data analytics to assess real-time customizations (sampling), biometric authentication, and sentiment analysis.

Think about software.

[Low code workflow automation][6] tools use data analytics for predictive experiences and enable developers of varied experience levels to create applications model-driven logic. Data modules are predefined.

Much like with software, education is being transformed by data analytics. Online learning for schools and [coding apps for kids][7] rely on data analytics for risk management (when students fall behind) and content retention.

Think about how risk is priced.

Sampling is being used to change how insurance companies like [True Blue][8] are pricing insurance policies. More financial institutions and insurance firms are using data analytics to assess credit quality, to price and market insurance contracts, and to automate client interaction.

Think about website design.

Whether or not you want to apply data analytics to build the next [call tracking software][9] or [fact aggregation site][10], data analytics will help you measure what matters and turn data into actionable insights.

Think about agriculture.

High-tech plant growers such as [JoyOrganics][11] and [TakeSpruce][12] are using seed-to-sale cycle tracking to follow plants through stages from cultivation to harvest to extraction.

Farmers are using data analytics to find signals for higher and uncorrelated returns and optimize growing.

Think about [indoor air quality][13] and [natural language processing][14].

Or the way in which [CRM software][15] is built, or how people [communicate in real time][16].

In short, think about the modern world.

All of these products leverage data analytics to calculate sampling errors, standard deviations, and regressions to ensure product quality and customer satisfaction.

But before calculating these more complicated statistics, each business or domain starts with foundational components. Each domain measures frequency, dispersion, averages, and standard deviations.

Upon these building blocks, data analytics can turn data into actionable insights.

Most importantly, all of these industries leverage data analytics to make go/no trade-offs and to more deeply understand how users are leveraging the tools and products they are building.

By exploring these topics in more depth you can undoubtedly embrace a more holistic and relentless builder’s mindset.

If for nothing else, the study of data analytics makes that outcome worthwhile.

[1]: http://www.humaverse.com/
[2]: https://www.couponupto.com/information/couponupto-data-analytics-department-report-for-the-last-6-months-of-2019?fbclid=IwAR3Uq1kfTh4vQ3cjzmR0Rj0LPv9eT4DOuxJ84rE_1nA2XVfeCN5vQBXEJm0
[3]: http://wfhadviser.com/
[4]: https://www.gilisports.com/
[5]: https://commonthreadco.com/blogs/coachs-corner/health-wellness-marketing-ecommerce
[6]: https://www.frevvo.com/low-code-development-platforms
[7]: https://alldigitalschool.com/top-10-best-coding-apps-for-your-kids/
[8]: https://www.truebluelifeinsurance.com/
[9]: https://getvoip.com/call-tracking-software/
[10]: https://www.factinate.com/
[11]: https://joyorganics.com/cbd-manufacturers/
[12]: https://takespruce.com/
[13]: https://wfhadviser.com/guides/health-and-well-being/keeping-your-indoor-air-quality-clean/
[14]: https://brooksmanley.com/entity-seo/
[15]: https://nethunt.com/
[16]: https://coastapp.com/
