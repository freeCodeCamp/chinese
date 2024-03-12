> - 原文地址：[Interaction Design – How to Evaluate Interaction Costs and Improve User Experience](https://www.freecodecamp.org/news/interaction-design-evaluate-interaction-costs-improve-ux/)
> - 原文作者：[Richard Yang](https://www.freecodecamp.org/news/author/richardux/)
> - 译者：Assone
> - 校对者：

![交互式设计 – 如何评估交互成本并改善用户体验](https://www.freecodecamp.org/news/content/images/size/w2000/2021/02/1_WzkvMd3sZRb6BCwKEsoHjA.png)

有三个核心技能是每个现代产品设计师必须掌握的：产品思维、视觉设计和交互设计。

![图中显示了产品设计的三个核心技能: 产品思维、视觉设计 (UI) 和交互设计 (IxD).](https://www.freecodecamp.org/news/content/images/2021/02/image-146.png)

所有现代产品设计师的“赌桌”。

一般来说，你应该在这三个方面都很擅长，但你应该真正擅长其中两个方面。大多数设计师可以通过在线资源、实践和交付真实产品来自学视觉设计和产品思维。

作为一家 FAANG 公司的产品设计负责人，我已经指导了数百名有抱负的设计师，我发现交互设计往往是设计师自学的最具有挑战性的核心技能。

在本文中，我提供了一个学习和提高交互设计技能的基础和框架。

![图中显示了UX 和 IxD 之间的相同部分和不同部分。 IxD 是 UX 的子集。](https://www.freecodecamp.org/news/content/images/2021/02/image-148.png)

UX (用户体验) 和 IxD (交互设计) 之间的区别.

## 什么是交互成本？

交互设计背后的基础概念是“交互成本”，它经常被用来衡量一个产品的可用性。Nielsen Norman 将“交互成本”定义为用户为达到其目标而必须付出的[精神和体力的总和](https://www.nngroup.com/articles/interaction-cost-definition/)。

一般来说，我们希望尽可能降低交互成本。但是，这很困难。因为随着你的产品覆盖的用例越多，这将变得困难。

支持更多的用例和功能会增加产品信息架构（IA）和导航的复杂度。一个用例是一连串的步骤，从用户的目标开始，到实现目标后的结果。

更复杂的 IA 本质上会增加完成用户目标所需的点击次数。例如 iOS 时钟应用具有以下闹钟用例目标：开启或关闭闹钟，创建一个新的闹钟和编辑闹钟。

![信息架构 (IA) 图示。](https://www.freecodecamp.org/news/content/images/2021/02/image-149.png)

IA 越是复杂，用户需要点击的东西就越多，才能到达他们想要的界面。[鸣谢: Topta](https://dribbble.com/shots/4406909-The-Comprehensive-Guide-to-Information-Architecture)

经验法则的重点是减少目标用户的主要用例的交互成本。每当一个产品容纳了太多的用例（例如，有一百万个下拉菜单和功能的企业产品），它就变得更难使用。

为了避免这种过度复杂化，在建立一个全新的产品时，应该选择一个特定的用户和用例来关注。

### 物理和心理的交互成本

许多初级设计师都有一种误区，认为交互成本等于用户完成一项任务所需的点击次数。

![一个PIC和MIC的图表](https://www.freecodecamp.org/news/content/images/2021/02/image-150.png)

然而，它比这更要更深入。交互成本分为心理交互成本 (MIC) 和物理交互成本 (PIC) ，我将在下面解释。

## 如何评估交互成本 - 首先找到关键的用户流程

最佳实践是确定主要用例（即核心任务），并在必要时以牺牲二级和三级用例为代价降低其交互成本。

你可以使用[核心任务分析（RRA）](https://medium.muz.li/red-routes-critical-design-paths-that-make-or-break-your-app-a642ebe0940a)评估哪些用例交互流对你对主要用户最重要。

核心任务往往很重要，包括多个步骤的端对端任务、经常使用、为大量使用而构建、提供最大价值，具有明确的成功标准，并与产品指标挂钩。

![一个RRA的例子。](https://www.freecodecamp.org/news/content/images/2021/02/image-151.png)

如果产品已经上线，你可以根据用户访谈或数据来创建一个 RRA。

比如说，在 Uber 应用中，乘客的关键路线是叫车，而他们的正常路线是添加支付方式。

## 特斯勒定律怎么帮助你降低交互成本

根据[特斯勒定律](https://lawsofux.com/laws/teslers-law/)的复杂性守恒定律，所有系统都具有无法消除或隐藏的内在复杂性。

好的设计可以确保尽可能多的复杂性负担在系统上，而不是在用户身上。

![一个说明特斯勒定律的图表，其中的复杂性负担在用户与产品之间转移。](https://www.freecodecamp.org/news/content/images/2021/02/image-152.png)

你应该首先减低主要用例中的交互成本，并将复杂性负担转移到最不重要的用例上。

Tesler 认为，设计师和工程师应该多花一周时间来降低应用的复杂度，而不是让数百万用户多花一分钟时间。

但是，请注意不要将接口简化到抽象的地步。常见的陷阱是牺牲 MIC 为代价来减少 PIC（就是你，苹果）。

当系统已经尽可能多地处理了固有的复杂性，你应该将其余的复杂性从主要用例转移到第二和第三用例。

大多数的数字产品都有复杂的设置，原因就在于此。在大多数情况下，设置通常是第三级用例，很少使用。

想象一下，如果你总是看到设置屏幕而不是主屏幕，并且需要点击几下才能到达你需要的屏幕。你可能会对这种不合理的交互成本感到沮丧。

## 心理交互成本（MIC）

[心理交互成本（MICs）](https://www.researchgate.net/publication/23456170_A_Framework_of_Interaction_Costs_in_Information_Visualization)经常被新的设计师而忽略，他们只关注物理交互成本（PIC）。

你可能已经注意到，在可用性差的产品中，常见的 MIC 包括复杂的导航、密集的指示、非常规的心智模型和交互模式等。

### 注意力和记忆力

MIC 的两个最重要的组成部分是注意力和记忆力。

当一个任务需要过多的注意力或记忆力完成时，它的 MIC 就会成比例地高 - 降低了可用性。

一些增长注意力成本或转移注意力的常见元素包括弹出式横幅、模型、吸引注意力的视觉效果，以及用户当前任务无关的动作。

用户是容易分心的，确保在他们试图完成一项任务时，你不会把他们的注意力分散到其他地方。

### 评估注意力

如果你想要评估你的界面有多少注意力，可以考虑做一个[眼动追踪研究（ETS）](https://uxplanet.org/uxers-quick-guide-to-eye-tracking-edf70bffd03d)。你不仅可以用 ETS 来推断用户观察的地方，还有推断他们在想些什么。

![ETS的一个例子。](https://www.freecodecamp.org/news/content/images/2021/02/image-153.png)

ETS 的一个例子。

ETS 特别研究了两个相关的眼球运动：“注视” 和 “扫视”。

当用户的瞳孔在界面元素上停留足够长的时间以处理它，就会发生注视。当眼睛处于运动状态 - 在界面中的不同区域之间游走时，就会发生扫视。

如果你的 ETS 显示许多与任务无关的扫视移动，这可能是由于一个分散注意力的界面。你的 ETS 结果能帮助你了解用户是否遗漏了界面中的关键元素，哪些是分散注意力的，哪些是不必要的。

### 工作记忆

所有不同类型的记忆，都有一个广泛的分类。

对于设计师而言，工作记忆（短期记忆的一部分）是最相关的。最短的记忆类型被称为工作类型，这在一个任务中通常只持续几秒钟的时间。

换句话说，我们的工作记忆负责在我们参与其他认知过程时，我们可以在脑海中保存信息。

[米勒定律](https://lawsofux.com/laws/millers-law/) 指出，一般人在工作记忆中一次只能保留 5-11 个项目。在你的产品中完成一项任务所需的工作记忆与你强加给用户的 MIC 负担成正比。

![米勒定律的海报插图。](https://www.freecodecamp.org/news/content/images/2021/02/image-154.png)

反过来说，在任何时候，你的任务都不应该要求用户在工作记忆中保留七个以上的项目。

在极少数情况下，如果你要求用户在他们的记忆中持有超过 11 个项目，可以使用 "分块 "来减少他们的心理负担。分块是指将一个信息集的单个片段分解，然后归纳为一个有意义的整体。

例如，我们记住电话号码是 XXX-XXXX，而不是 XXXXXX。把数字分成两块，而不是一系列的七个独立单位，这样更容易记住。

另一个需要考虑的因素是注意力和记忆相关的是[特斯勒定律](https://lawsofux.com/laws/hicks-law/)。该定律指出，随着决策的时间随着选择的数量和复杂性增加。

![特斯勒定律与时间x选项数量的关系图](https://www.freecodecamp.org/news/content/images/2021/02/image-155.png)。

选择越多，用户做出决策的时间就越长。

避免过多的选择压倒用户，尽可能突出最适合他们的选项。将复杂的任务分解成较小的步骤，也就是在适当的时候使用渐进式披露。

## 物理交互成本（PIC）

我不会详细介绍 PIC，因为多数的设计师都非常了解它们。

常见的 PIC 因素包含到达距离和目标宽度（[费茨法则](https://lawsofux.com/laws/fittss-law/)），完成一项任务所需要的用户输入和操作的数量等等。

[费茨法则](https://lawsofux.com/laws/fittss-law/)指出，击中目标（即点击按钮）的时间是与你的输入设备的距离和目标的击中框宽度的函数

![](https://www.freecodecamp.org/news/content/images/2021/02/image-156.png)

费茨法则的图示。

例如，如果你的鼠标光标离得很远，而按钮又很小，那么点击桌面上的一个按钮就需要更长的时间。

评估 PIC 的一个很好的方法就是[任务分析](https://www.nngroup.com/articles/task-analysis/)和检查[可用性指标](https://usabilitygeek.com/usability-metrics-a-guide-to-quantify-system-usability/)，如“任务时间（TT）”。

TA 的根源是查看完成用户目标所需要的任务数量、频率、物理要求以及任务时间。

TA 和可用性指标是进阶话题，完全可以另起炉灶，所以我把它留到下次再讲。

## 避免常见的陷阱

根据 Nielsen Norman Group 的调查，产品中最常见的导致交互成本增加的一些方面包括以下内容：

- 过度的阅读和滚动
- 四处寻找相关信息的用户
- 理解呈现给用户的信息
- 用户的物理输入
- 页面加载和等待时间
- 注意力切换
- 记忆负荷

### 情景交互成本

根据用户的不同，上述陷阱可能或多或少是严重的。例如，有阅读障碍的用户认为阅读比普通用户更有挑战性（建议：使用对阅读障碍者友好的字体，如[“Dyslexie”](https://www.dyslexiefont.com/en/typeface/)）。

![Dyslexie字体的3D动画。](https://www.freecodecamp.org/news/content/images/2021/02/image-157.png)

[来源](https://www.dyslexiefont.com/)

有运动障碍的用户可能会发现点击比阅读难得多，甚至用户的设备也可能发挥重要作用。例如，如果手机的网速很慢，在移动设备上加载页面可能需要很长时间。

![一个标准的加载旋钮。](https://www.freecodecamp.org/news/content/images/2021/02/image-158.png)

### 交互路径与动机

在某些情况下，用户可以采取多种可能的路径来完成他们的目标。用户根据“预期效用”的概念来决定采取哪条路径，其定义为：预期效用 = 预期收益 - 预期互动成本。

换句话说，用户会权衡每个动作的收益和成本，并选择收益与成本最平衡的路径。

用户会倾向于具有最低预期交互成本的路径。即使有一个成本较低的路径，如果这个路径不直观或不熟悉，他们最终会选择他们更熟悉的路径，因为 MIC 较低。

具有高动机的用户（例如，由于您的营销或品牌推广）更有可能为完成他们的目标付出高昂的互动成本。 例如，如果苹果公司的网站有很高的交互成本，但用户可能仍然有足够的动力来完成他们的任务。

![](https://www.freecodecamp.org/news/content/images/2021/02/image-159.png)

苹果是世界上最有价值的品牌是有原因的。

但是，如果用户想购买一个普通产品，并且结账过程有很高的交互成本，他们就会改从竞争对手那里购买。

有关更多详细信息，请查看 Nielsen Norman Group 的[如何评估用例的交互成本的示例](https://www.nngroup.com/articles/interaction-cost-definition/)，"找出'仪式'一词的来源"。

## 总结

了解交互成本是任何现代产品设计师的一项重要技能。我们鼓励你超越表面的交互设计考虑，深入研究众多的 PIC 和 MIC 因素。

当然，我们应该努力尽可能地减少交互成本。但在必不得已的情况下，我们应该做出权衡，以确保主要用例的摩擦最小。

一个很好的第一步是建立一个法律、框架和测试的心理模型，以评估你的设计的交互成本。

如果你喜欢这篇文章，[\***\*加入我的免费新闻通讯\*\***](https://theambitiousdesigner.substack.com/)"雄心勃勃的设计师"，以获得更多职业和设计方面的见解。

我还在 Facebook 上运营一个[私人指导小组](https://www.facebook.com/groups/richarduxmentorship)和一个设计[Instagram](https://www.instagram.com/richard.ux/)账户。
