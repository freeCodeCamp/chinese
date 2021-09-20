> - 原文地址：[Interaction Design – How to Evaluate Interaction Costs and Improve User Experience](https://www.freecodecamp.org/news/interaction-design-evaluate-interaction-costs-improve-ux/)
> - 原文作者：[Richard Yang](https://www.freecodecamp.org/news/author/richardux/)
> - 译者：Assone
> - 校对者：

![交互式设计 – 如何评估交互成本并改善用户体验](https://www.freecodecamp.org/news/content/images/size/w2000/2021/02/1_WzkvMd3sZRb6BCwKEsoHjA.png)

有三个核心技能是每个现代产品设计师必须掌握的：产品思维、视觉设计和交互设计。

![图中显示了产品设计的三个核心技能: 产品思维、视觉设计 (UI) 和交互设计 (IxD).](https://www.freecodecamp.org/news/content/images/2021/02/image-146.png)

所有现代产品设计师的“赌桌”。

一般来说，你应该在这三个方面都很擅长，但你应该真正擅长其中两个方面。大多数设计师可以通过在线资源、实践和交付真实产品来自学视觉设计和产品思维。

作为一家 FAANG 公司的产品设计负责人，我已经指导了数百名有抱负的设计师，我发现交互设计往往是设计师自我学习的最具有挑战性的核心技能。

在本文中，我提供了学习和提高交互设计技能的基础和框架。

![图表显示了UX 和 IxD 之间的相同部分和不同部分。 IxD 是 UX 的子集。](https://www.freecodecamp.org/news/content/images/2021/02/image-148.png)

UX (用户体验) 和 IxD (交互设计) 之间的区别.

## What is Interaction Cost?

## 什么是交互成本？

交互设计背后的基础概念是“交互成本”，它经常被用来衡量一个产品的可行性。Nielsen Norman 将“交互成本”定义为用户为达到目标而必须付出的[脑力和体力的总和](https://www.nngroup.com/articles/interaction-cost-definition/)。

一般来说，我们希望尽可能降低交互成本。但是，这很困难。因为随着你的产品覆盖的用例越多，这将变得困难。

支持更多的用例和功能会增加产品信息架构（IA）和导航的复杂度。一个用例是一连串的步骤，从用户的目标和实现目标后的结果开始。

更复杂的 IA 本质上会增加完成用户目标所需的点击次数。例如 iOS 时钟应用具有以下闹钟用例目标：开启或关闭闹钟，创建一个新的闹钟和编辑闹钟。

![信息架构 (IA) 图示。](https://www.freecodecamp.org/news/content/images/2021/02/image-149.png)

IA 越是复杂，用户就越需要点击才能进入他们想要的屏幕。[鸣谢: Topta](https://dribbble.com/shots/4406909-The-Comprehensive-Guide-to-Information-Architecture)

经验法则的重点是减少用户的主要用例的交互成本。每当一个产品容纳了太多的用例（例如，有一百万个下拉菜单和功能的企业产品），它就变得更难使用。

为了避免这种过度复杂化，在建立一个全新的产品时，应该选择一个特定的用户和用例来关注。

### Physical and Mental Interaction Costs

### 身体和精神的交互成本

Many junior designers have the misconception that interaction cost equals the number of clicks required for a user to complete a task.
许多初级设计师都有一种误区，认为交互成本等于用户完成一项任务所需的点击次数。

![A diagram showing PIC and MIC.](https://www.freecodecamp.org/news/content/images/2021/02/image-150.png)
![显示PIC和MIC的图表](https://www.freecodecamp.org/news/content/images/2021/02/image-150.png)

However, it goes much deeper than that. Interaction cost can be classified as mental interaction costs (MIC) and physical interaction costs (PIC), which I’ll explain below.
然而，它比这要深得多。交互成本分为精神交互成本 (MIC) 和物理交互成本 (PIC) ，我将在下面解释。

## How to Evaluate Interaction Cost – Find the Critical User Flows First

## 如何评估交互成本 - 首先找到关键的用户流程

A best practice is to identify the primary use cases (that is, the red routes) and reduce their interaction costs at the expense of secondary and tertiary use cases if necessary.
最佳实践是确定主要用例（即核心任务），并在必要时以牺牲二级和三级用例为代价降低其交互成本。

You can use a [Red Route Analysis (RRA)](https://medium.muz.li/red-routes-critical-design-paths-that-make-or-break-your-app-a642ebe0940a) to assess which use case interaction flows are most important to your primary users.
你可以使用[核心任务分析（RRA）](https://medium.muz.li/red-routes-critical-design-paths-that-make-or-break-your-app-a642ebe0940a)评估哪些用例交互流对你对主要用户最重要。

Red routes tend to be critical, encompass end-to-end tasks with multiple steps, are often used, are built for high volume usage, provide the most value, have clear success criteria, and tie to product metrics.
核心任务往往很重要，包括多个步骤的端对端任务、经常使用、为大量使用而构建、提供最大价值，具有明确的成功标准，并与产品指标挂钩。

![An example of a RRA.](https://www.freecodecamp.org/news/content/images/2021/02/image-151.png)
![RRA的一个例子。](https://www.freecodecamp.org/news/content/images/2021/02/image-151.png)

You can create an RRA from user interviews or with data if the product is live.
如果产品已经上线，你可以根据用户访谈或数据来创建一个 RRA。

For instance, in the Uber app, the rider’s red route would be requesting a ride, while their normal route would be adding a payment method.
比如说，在 Uber 应用中，乘客的关键路线是叫车，而他们的正常路线是添加支付方式。

## How Tesler’s Law Helps Reduce Interaction Costs

## 特斯勒定律怎么帮助你降低交互成本

Accorditrng to [Tesler’s Law](https://lawsofux.com/laws/teslers-law/) of Conservation of Complexity, all systems have an inherent complexity that cannot be removed or hidden.
根据[特斯勒定律](https://lawsofux.com/laws/teslers-law/)的复杂性守恒定律，所有系统都具有无法消除或隐藏的内在复杂性。

Good design ensures that as much of the complexity burden is on the system as possible, rather than on the user.
好的设计可以确保尽可能多的复杂性负担在系统上，而不是在用户身上。

![A diagram illustrating Tesler's law, where the burden of complexity is shifted between the user and the product.](https://www.freecodecamp.org/news/content/images/2021/02/image-152.png)
![说明特斯勒定律的图表，其中的复杂性负担在用户与产品之间转移。](https://www.freecodecamp.org/news/content/images/2021/02/image-152.png)

You should begin by reducing the interaction costs within the primary use cases and shift the complexity burden towards the least important use cases.
你应该首先减低主要用例中的交互成本，并将复杂性负担转移到最不重要的用例上。

Tesler argued that a designer and engineer should spend an extra week reducing an application’s complexity rather than making millions of users spend an additional minute.
特斯勒认为，设计师和工程师应该多花一周时间来降低应用的复杂度，而不是让数百万用户多花一分钟时间。

Be careful not to simplify interfaces to the point of abstraction, though. A common pitfall is reducing the PIC at the expense of the MIC (I’m looking at you, Apple).
但是，请注意不要将接口简化到抽象的地步。常见的陷阱是牺牲 MIC 为代价来减少 PIC（就是你，苹果）。

When the system has handled as much of the inherent complexity as possible, you should shift the rest of the complexity away from the primary use cases to the secondary and tertiary use cases.
当系统已经尽可能多地处理了固有的复杂性，你应该将其其余的复杂性从主要用例转移到第二和第三用例。

Most digital products have complicated settings for this reason. In most cases, settings are usually a tertiary use case and are very rarely used.
多数的数字产品都有复杂的设置，原因就在于此。在大多数情况下，设置通常是第三级用例，很少使用。

Imagine if you always saw the settings screen instead of the home screen and needed to click several times to get to the screen you needed instead. You’d probably be frustrated at the unreasonable interaction costs.
想象一下，如果你总是看到设置屏幕而不是主屏幕，并且需要点击几下才能到达你需要的屏幕。你可能会对这种不合理的交互成本感到沮丧。

## Mental Interaction Costs (MIC)

## 心理交互成本（MIC）

[Mental interaction costs (MICs)](https://www.researchgate.net/publication/23456170_A_Framework_of_Interaction_Costs_in_Information_Visualization) are often overlooked by new designers who only pay attention to physical interaction costs (PIC).
[心理交互成本（MICs）](https://www.researchgate.net/publication/23456170_A_Framework_of_Interaction_Costs_in_Information_Visualization)经常被新的设计师而忽略，他们只关注物理交互成本（PIC）。

Common MICs that you may have noticed in products with poor usability include complex navigation, dense instructions, unconventional mental models and interaction patterns, and so on.
你可能已经注意到，在可用性差的产品中，常见的 MIC 包括复杂的导航、密集的指示、非常规的心智模型和交互模式等。

### Attention and Memory

### 注意力和记忆力

The two most important components of MIC are attention and memory.
MIC 的两个最重要的组成部分是注意力和记忆力。

When a task requires excessive attention or memory to complete, it will have a proportionally high MIC — decreasing usability.
当一个任务需要过多的注意力或记忆力完成时，它的 MIC 就会成比例地高 - 降低了实用性。

Some common elements that increase attention costs or divert attention include pop-up banners, models, attention-grabbing visuals, and motion unrelated to the user’s current task.
一些增长注意力成本或转移注意力的常见元素包括弹出式横幅、模型、吸引注意力的视觉效果，以及用户当前任务无关的运动。

Users are easily distracted. Make sure you’re not pulling their attention elsewhere when they are trying to complete a task.
用户是容易分心的，确保在他们试图完成一项任务时，你不会把他们的注意力分散到其他地方。

### Evaluating Attention

### 评估注意力

If you want to evaluate how much attention MIC your interface has, consider doing an [eye-tracking study (ETS)](https://uxplanet.org/uxers-quick-guide-to-eye-tracking-edf70bffd03d). You can use an ETS to infer not only where users look but what they’re thinking.
如果你想要评估你的界面有多少注意力，可以考虑做一个[眼动追踪研究（ETS）](https://uxplanet.org/uxers-quick-guide-to-eye-tracking-edf70bffd03d)。你不仅可以用 ETS 来推断用户观察的地方，还有推断他们在想些什么。

![An example of an ETS.](https://www.freecodecamp.org/news/content/images/2021/02/image-153.png)
![ETS的一个例子。](https://www.freecodecamp.org/news/content/images/2021/02/image-153.png)

ETS 的一个例子。

The ETS examines two relevant eye movements in particular: “fixation” and “saccade.”
ETS 特别研究了两个相关的眼球运动：“注视” 和 “扫视”。

Fixation occurs when a user’s pupils linger over an interface element long enough to process it. A Saccade occurs when the eye is in motion — darting between various areas within your interface.
当用户的瞳孔在界面元素上停留足够长的时间以处理它，就会发生注视。当眼睛处于运动状态 - 在界面中的不同区域之间游走时，就会发生扫视。

If your ETS reveals many task-irrelevant saccadic movements, it’s likely due to a distracting interface. Your ETS results can help you understand if users are missing critical elements within the interface, what’s distracting, and what’s unnecessary.
如果你的 ETS 显示许多与任务无关的扫视移动，这可能是由于一个分散注意力的界面。你的 ETS 结果能帮助你了解用户是否遗漏了界面中的关键元素，哪些是分散注意力的，哪些是不必要的。

### Working memory
### 工作记忆

There is an extensive classification for all the different types of memory.
所有不同类型的记忆，都有一个广泛的分类。

For our purposes as designers, working memory (part of short-term memory) is the most relevant. The shortest type of memory is known as working memory, which typically only lasts a couple of seconds during a task.
对于设计师而言，工作记忆（短期记忆的一部分）是最相关的。最短的记忆类型被称为工作类型，这在一个任务中通常只持续几秒钟的时间。

In other words, our working memory is responsible for the information we can hold in our heads while we engage with other cognitive processes.
换句话说，我们的工作记忆负责在我们参与其他认知过程时，我们可以在脑海中保存信息。

[Miller’s Law](https://lawsofux.com/laws/millers-law/) states that the average person can only keep 5–11 items in their working memory at a time. The working memory required to complete a task within your product is proportional to the MIC burden you impose on your users.
[米勒定律](https://lawsofux.com/laws/millers-law/) 指出，一般人在工作记忆中一次只能保留 5-11 个项目。在你的产品中完成一项任务所需的工作记忆与你强加给用户的MIC负担成正比。

![A poster illustration of Miller's Law.](https://www.freecodecamp.org/news/content/images/2021/02/image-154.png)
![米勒定律的海报插图。](https://www.freecodecamp.org/news/content/images/2021/02/image-154.png)

Conversely, at no point should your task require the user to hold more than seven items in their working memory at any moment.
反过来说，在任何时候，你的任务都不应该要求用户在工作记忆中保留七个以上的项目。

In rare scenarios where you require the user to hold more than 11 items in their memory, use “chunking” to reduce their mental burden. Chunking is when individual pieces of an information set are broken down and then grouped in a meaningful whole.
在极少数情况下，如果你要求用户在他们的记忆中持有超过11个项目，可以使用 "分块 "来减少他们的心理负担。分块是指将一个信息集的单个片段分解，然后归纳为一个有意义的整体。

For example, we remember phone numbers as XXX-XXXX rather than XXXXXXX. It’s easier to remember the number in two chunks rather than a series of seven individual units.
例如，我们记住电话号码是XXX-XXXX，而不是XXXXXX。把数字分成两块，而不是一系列的七个独立单位，这样更容易记住。

Another factor to consider related to attention and memory is [“Hick’s Law.”](https://lawsofux.com/laws/hicks-law/) The law states, “the time it takes to make a decision increases with the number and complexity of choices.

![A graph of Hick's Law with time x number of options.](https://www.freecodecamp.org/news/content/images/2021/02/image-155.png)

The more choices there are, the longer it takes the user to make a decision.

Avoid overwhelming users with excessive choices, highlight the best option for them whenever possible. Break complex tasks into smaller steps, that is using progressive disclosure when appropriate.

## Physical Interaction Costs (PIC)

I won’t go into too much detail on PICs because most designers understand them well.

Common PIC factors include reaching distance and target width ([Fitt’s Law](https://lawsofux.com/laws/fittss-law/)), number of user inputs and actions required to complete a task, and so on.

[Fitt’s Law](https://lawsofux.com/laws/fittss-law/) states that the time to hit a target (that is, clicking on a button) is a function of the distance from your input device and the target’s hit-box width.

![](https://www.freecodecamp.org/news/content/images/2021/02/image-156.png)

A diagram for Fitt's Law.

For example, clicking on a button on the desktop would take much longer if your mouse cursor was far away and the button was tiny.

An excellent method to assess PIC is [“task analysis”](https://www.nngroup.com/articles/task-analysis/) and examining [usability metrics](https://usabilitygeek.com/usability-metrics-a-guide-to-quantify-system-usability/) such as “task time (TT).”

The root of TA is looking at the number of tasks required to complete the user’s goal, the frequency of those tasks, the physical requirements, and the task time.

TA and usability metrics are advanced topics that warrant an entirely separate note, so I’ll save it for next time.

## Common Pitfalls to Avoid

According to Nielsen Norman Group, some of the most common aspects of a product that result in increased interaction costs include the following:

- Excessive reading and scrolling
- Looking around to find relevant information user
- Comprehending information presented to the user
- Physical user inputs
- Page loads and waiting times
- Attention switches
- Memory load

### Situational Interaction Costs

The pitfalls mentioned above may be more or less critical depending on the user. For example, dyslexic users find reading more challenging than the average user (pro-tip: use a dyslexic friendly font like [“Dyslexie”](https://www.dyslexiefont.com/en/typeface/)).

![A 3D animation of the Dyslexie font.](https://www.freecodecamp.org/news/content/images/2021/02/image-157.png)

[Source](https://www.dyslexiefont.com/)

Users with motor impairments might find clicking much harder than reading. Even the user’s device can play an important role. For instance, a page load on a mobile device may take forever if the cellular coverage is slow.

![A standard loading spinner.](https://www.freecodecamp.org/news/content/images/2021/02/image-158.png)

### Interaction Paths and Motivation

In some situations, there are multiple possible paths a user can take to accomplish their goal. Users decide which path to take based on the concept of “expected utility,” defined as expected utility = expected benefits — expected interaction costs.

In other words, users weigh the benefits and costs of each action and choose the path that has the best balance of benefits versus cost.

Users will gravitate towards the path that has the lowest estimated interaction cost. Even if there’s a lower-cost path, if that path is unintuitive or unfamiliar, they will end up choosing the path they are more familiar with due to lower MIC.

Users with a high motivation (for example, due to your marketing or branding efforts) are more likely to put up high interaction costs to complete their goal. For example, if Apple’s website had high interaction costs, users may still be motivated enough to complete their task.

![](https://www.freecodecamp.org/news/content/images/2021/02/image-159.png)

Apple is the world’s most valuable brand for a reason.

However, if users wanted to purchase a generic product, and the checkout process had a high interaction cost, they will buy it from a competitor instead.

For more details, take a look at Nielsen Norman Group’s [example of how to assess the interaction cost of a use case](https://www.nngroup.com/articles/interaction-cost-definition/), “finding out where the word ‘ceremony’ comes from.”

## Conclusion

Understanding interaction cost is a vital skill for any modern product designer. I encourage you to go beyond the superficial interaction design considerations and delve deeper into the numerous PIC and MIC factors.

Of course, we should strive to reduce the interaction costs as much as possible. But when push comes to shove, we should make trade-offs to ensure the primary use cases have the least friction.

An excellent first step is to create a mental model of laws, frameworks, and tests to evaluate your design’s interaction costs.

If you liked this article, [\***\*join my free newsletter\*\***](https://theambitiousdesigner.substack.com/) “The Ambitious Designer” for more career & design insights.

I also run a [private mentorship group](https://www.facebook.com/groups/richarduxmentorship) on Facebook and a design [Instagram](https://www.instagram.com/richard.ux/) account.
