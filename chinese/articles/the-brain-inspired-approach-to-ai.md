> -  原文地址：[The Brain-Inspired Approach to AI – Explained for Developers](https://www.freecodecamp.org/news/the-brain-inspired-approach-to-ai/)
> -  原文作者：wangjia3
> -  译者：
> -  校对者：

![The Brain-Inspired Approach to AI – Explained for Developers](https://www.freecodecamp.org/news/content/images/size/w2000/2023/05/pexels-tara-winstead-8386365.jpg)

> "我们的智慧是使我们成为人类的原因，而人工智能是这种品质的延伸。" – 杨立昆(Yann LeCun)
> 

自从神经网络（也被称为人工神经网络）出现以来，人工智能行业取得了无与伦比的成功。神经网络是现代人工智能系统背后的驱动力并且它们是以人脑为模型的。


现代人工智能研究涉及创建和实施旨在模仿人脑神经过程的算法。他们的目标是创造出与人类相似的学习和行动方式的系统。


在这篇文章中，我们将试图了解构建人工智能系统的大脑启发方法。

下面是我们要讲的内容：

1.  [How we'll approach this](#how-we-ll-approach-this)
2.  [The history of the brain-inspired approach to AI](#the-history-of-the-brain-inspired-approach-to-ai)
3.  [How the human brain works and how it's related to AI systems](#how-the-human-brain-works-and-how-it-s-related-to-ai-systems)
4.  [Core principles behind the brain-inspired approach to AI](#core-principles-behind-the-brain-inspired-approach-to-ai)
5.  [Challenges in building brain-inspired AI systems](#challenges-in-building-brain-inspired-ai-systems)
6.  [Summary](#summary)

1.  [我们将如何处理这个问题](#How-we-ll-approach-this)

2.  [大脑启发式人工智能方法的历史](#The-history-of-the-brain-inspired-approach toai)

3.  [人脑如何工作以及它与人工智能系统的关系](#How-the-human-brain-works and how-it-s related toai-systems)

4.  [大脑启发式人工智能方法背后的核心原则](#core-principles-behind-the-brain-inspired-approach toai)

5.  [构建大脑启发式人工智能系统的挑战](#challenges-in-building-brain-inspired-ai-systems)

6.  [总结](#summary)


## 我们将如何处理这个问题


本文将首先介绍研究人员如何开始模拟人工智能以模仿人脑的背景历史，最后讨论研究人员目前在试图模仿人脑时面临的挑战。下面是对每一节内容的深入描述。


值得注意的是，虽然这个话题本身是一个广泛的话题，但我将尽量简短扼要，以保持其吸引力。我计划将那些有更多复杂的子分支的子课题作为独立的文章来处理。我还会在文章末尾留下参考文献。


以下是我们将涵盖的内容的一个简要概要：


**大脑启发的人工智能方法的历史：**这里我们将讨论科学家诺曼-韦纳和沃伦-麦库洛赫（Norman Weiner and Warren McCulloch）是如何实现神经科学和计算机科学的融合的。我们还将讨论弗兰克-罗森布拉特（Frank Rosenblatt）的感知器（Perceptron）是如何首次真正尝试模仿人类智能的。我们将了解它的失败如何带来了开创性的工作，这些工作将成为神经网络的平台。


**人脑是如何工作的，以及它与人工智能系统的关系：**在这一节中，我们将深入探讨人工智能的大脑启发方法的生物学基础。我们将讨论人脑的基本结构和功能，了解其核心构件--神经元，以及它们如何共同处理信息并实现复杂的行动。


**大脑启发式人工智能方法背后的核心原则：**这里我们将讨论大脑启发式人工智能方法背后的基本概念。我们将解释诸如神经网络、分层处理和可塑性等概念。我们还将学习并行处理、分布式表征和递归反馈等技术如何帮助人工智能模仿大脑的运作。


**以人脑为模型构建人工智能系统的挑战：**在此我们将谈论试图构建模仿人脑的系统所固有的挑战和限制。诸如大脑的复杂性，以及缺乏统一的认知理论等挑战，我们将探讨这些挑战和限制的解决方式。


让我们开始吧!


## 大脑启发的人工智能方法的历史


建造能够进行智能行为的机器的动力要归功于麻省理工学院教授[诺伯特-韦纳]（Norbert Weiner）(https://en.wikipedia.org/wiki/Norbert_Wiener)的启发。诺伯特-韦纳是个神童，三岁就能阅读。他在数学、神经生理学、医学和物理学等各个领域都有广泛的知识。


诺伯特-韦纳认为，科学的主要机会在于探索他所称的_边界区域_。这些研究领域并不明显属于某个学科，而是各种学科的混合体，比如医学和工程学的研究走到一起，形成了医学工程领域。引用他的话说就是：


> "如果一个生理学问题的难度是数学性质的，那么十个不懂数学的生理学家与一个不懂数学的生理学家走得恰好一样远。"


1934 年，韦纳和其他几位学者每月聚会，讨论涉及边界区域科学的论文。


![https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0fc008a7-d0e0-4d6f-83ed-ab2a320263e0_2048x1251](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0fc008a7-d0e0-4d6f-83ed-ab2a320263e0_2048x1251.jpeg)


_Norman Weiner_


他将其描述为 "对半生不熟的想法、不充分的自我批评、夸大的自信和浮夸的完美宣泄"。


从这些会议和他自己的个人研究中，韦纳了解到关于生物神经系统的新研究，以及关于电子计算机的先驱工作。


他的自然倾向是融合这两个领域，因此形成了神经科学和计算机科学之间的关系。这种关系成为创造我们所知道的人工智能的基石。


二战后，维纳开始形成关于人类和机器智能的理论，这个新领域被命名为[_Cybernetics_]（https://en.wikipedia.org/wiki/Cybernetics）。维纳对控制论的探索成功地让科学家们讨论了生物学与工程学融合的可能性。


其中一位科学家是一位名叫[Warren McCulloch]（https://en.wikipedia.org/wiki/Warren_Sturgis_McCulloch）的神经生理学家。他从哈弗福德大学退学，去耶鲁大学学习哲学和心理学。在纽约参加一个科学会议时，他发现了同事写的关于生物反馈机制的论文。


其中一位科学家是一位名叫[Warren McCulloch]（https://en.wikipedia.org/wiki/Warren_Sturgis_McCulloch）的神经生理学家。他从哈弗福德大学退学，去耶鲁大学学习哲学和心理学。在纽约参加一个科学会议时，他发现了同事写的关于生物反馈机制的论文。


第二年，麦考洛克与他 18 岁的天才门生沃尔特-皮茨(Walter Pitts)合作，提出了一个关于大脑如何工作的理论。这一理论将有助于培养一种广泛的观念，即计算机和大脑的运作方式基本相同。


他们的结论是基于麦库洛赫对神经元处理二进制数的可能性的研究（计算机通过二进制数进行通信）。这一理论成为第一个人工神经网络模型的基础，该模型被命名为 McCulloch-Pitts 神经元（MCP）。


MCP 成为创建第一个神经网络的基础，被称为[感知器]（https://edemgold.substack.com/p/the-history-of-ai）。感知器是由心理学家[弗兰克-罗森布拉特]（https://en.wikipedia.org/wiki/Frank_Rosenblatt）创造的。受大脑中突触的启发，他决定，既然人脑可以通过突触（神经元之间的交流）来处理和分类信息，那么数字计算机或许也可以通过神经网络做同样的事情。


感知器本质上将 MCP 神经元从一个人工神经元扩展为一个神经元网络。但不幸的是，感知器有一些技术挑战，限制了它的实际应用。这些限制中最明显的是它不能进行复杂的操作（比如在一个以上的项目之间进行分类--例如，感知器不能在猫、狗和鸟之间进行分类）。


1969 年，[Marvin Minsky](https://en.wikipedia.org/wiki/Marvin_Minsky)和[Seymour Papert](https://en.wikipedia.org/wiki/Seymour_Papert)出版了一本名为_Perceptron_的书，详细阐述了 Perceptron 的缺陷。正因为如此，人工神经网络的研究停滞不前，直到[Paul Werbos](https://en.wikipedia.org/wiki/Paul_Werbos)提出了反向传播法。


逆向传播希望能够解决当时阻碍神经网络工业应用的复杂数据分类问题。它的灵感来自于突触可塑性--大脑修改神经元之间连接强度的方式，从而提高性能。


反向传播的设计是为了模仿大脑中通过一个称为权重调整的过程加强神经元之间的连接。


尽管 Paul Werbos 提出了早期的建议，但反向传播的概念只是在[David Rumelheart](https://en.wikipedia.org/wiki/David_Rumelhart)、[Geoffrey Hinton](https://en.wikipedia.org/wiki/Geoffrey_Hinton)和[Ronald Williams](https://en.wikipedia.org/wiki/Ronald_J._Williams)等研究人员发表论文证明其对训练神经网络的有效性后才得到广泛的采纳。


反向传播的实施导致了深度学习的产生，它为世界上大多数的人工智能系统提供了动力。


> "人比今天的计算机更聪明，因为大脑采用了一种基本的计算架构，更适合处理人们擅长的自然信息处理任务的核心方面"。- 并行分布式处理


## 人脑如何工作以及它与人工智能系统的关系


![https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8360703d-bbe7-4637-ba4a-5e898d5e3110_602x376](https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8360703d-bbe7-4637-ba4a-5e898d5e3110_602x376.png)


大脑细胞如何处理信息的图解


我们已经讨论了研究人员如何开始对人工智能进行建模以模仿人脑。现在让我们来看看大脑是如何工作的，并定义大脑和人工智能系统之间的关系。


###大脑如何工作--简化描述


人类的大脑基本上是通过使用神经元来处理思想。一个神经元由 3 个核心部分组成：树突、轴突和躯干。


树突负责接收来自其他神经元的信号。躯干负责处理从树突收到的信息，而轴突负责将处理过的信息传递给下一个树突。


为了掌握大脑如何处理思维，想象一下你看到一辆汽车向你驶来。你的眼睛立即通过光神经向你的大脑发送电信号。然后大脑形成一个神经元链，对传入的信号进行理解。


因此，链条上的第一个神经元通过它的**树突收集信号，并将其发送到**体细胞来处理信号。体细胞完成任务后，它将信号发送到**轴突，然后将其发送到链中下一个神经元的树突。


轴突和树突在传递信息时的连接被称为突触。因此，整个过程一直持续到大脑找到一个**的突触输入（这是科学术语，指大脑继续处理，直到它找到对发送到它的信号的最佳反应）。然后它向必要的效应器发送信号，例如你的腿，然后大脑向你的腿发送信号，让你从迎面而来的汽车中跑开。


###大脑和人工智能系统之间的关系


大脑和人工智能之间的关系在很大程度上是互利的。大脑是人工智能系统设计和人工智能进展背后的主要灵感来源，使人们更好地了解大脑和它的工作方式。


当涉及到大脑和人工智能时，存在着知识和想法的互惠交流。有几个例子可以证明这种关系的积极共生性质：


- 神经网络：**可以说，人脑对人工智能领域产生的最重大影响是神经网络的产生。从本质上讲，神经网络是模仿生物神经元功能和结构的计算模型。神经网络的架构及其学习算法在很大程度上受到大脑中神经元互动和适应方式的启发。

- **大脑模拟：**人工智能系统已被用于[模拟](https://www.frontiersin.org/articles/10.3389/fncom.2020.00016/full)人脑，研究其与物理世界的互动。例如，研究人员利用机器学习技术来模拟参与视觉处理的生物神经元的活动。其结果使人们对大脑如何处理视觉信息有了深入了解。

- 对大脑的见解：**研究人员已经开始使用机器学习算法来分析和获得对大脑数据和 fMRI 扫描的见解。这些洞察力有助于识别模式和关系，否则这些模式和关系将被隐藏起来。这些见解可以帮助我们了解内部认知功能、记忆和决策。它们还有助于治疗大脑原生疾病，如阿尔茨海默氏症。


## ＃＃＃大脑启发的人工智能方法背后的核心原则


在这里，我们将讨论帮助人工智能模仿人脑运作方式的几个概念。这些概念帮助人工智能研究人员创造了更强大的智能系统，能够执行复杂的任务。


###神经网络


如前所述，神经网络可以说是从人脑中获得了最重要的灵感，并对人工智能领域产生了最大的影响。


从本质上讲，神经网络是模仿生物神经元功能和结构的计算模型。这些网络是由各层相互连接的节点组成的，这些节点被称为人工神经元，有助于信息的处理和传输。这类似于生物神经网络中的树突、体节和轴突所做的事情。


神经网络的架构是为了从过去的经验中学习，与大脑的方式相同。


###分布式表征


分布式表征只是将神经网络中的概念或想法作为一种模式，沿着网络中的几个节点进行编码，以便形成一种模式。


例如，吸烟的概念可以用神经网络中的某一组节点来表示（编码）。因此，如果一个网络遇到一个人吸烟的图像，它就会使用这些选定的节点来理解这个图像（它比这复杂得多，但为了简单起见，我们就不说了）。


这种技术有助于人工智能系统记住复杂的概念或概念之间的关系，与大脑识别和记住复杂刺激的方式相同。


### 循环反馈


这是一种用于训练人工智能模型的技术，神经网络的输出被作为输入返回，以允许网络在训练中整合其输出作为额外的数据输入。这类似于大脑如何利用反馈环路，以便根据以前的经验调整其模型。


###并行处理


并行处理包括将复杂的计算任务分解成更小的比特，以便在另一个处理器上处理这些更小的比特，从而提高速度。这种方法使人工智能系统能够更快地处理更多的输入数据，类似于大脑能够在同一时间执行不同的任务（多任务）。


###注意机制


这是一种用于使人工智能模型专注于输入数据的特定部分的技术。它通常被用于自然语言处理等部门，其中包含复杂和繁琐的数据。


它的灵感来自于大脑的能力，即只关注大部分分散注意力的环境中的特定部分--就像你在嘈杂的对话中调整到一个对话并进行互动的能力。


### 强化学习


强化学习是一种用于训练人工智能系统的技术。它的灵感来自于人类如何通过试验和错误学习技能。它涉及到一个人工智能代理根据其行动接受奖励或惩罚。这使代理人能够从其错误中学习，并在其未来的行动中更有效率（这种技术通常用于创建游戏）。




###无监督学习


大脑不断接收新的数据流，其形式包括声音、视觉内容、皮肤的感觉等等。它必须对这一切进行理解，并试图对所有这些看似不相干的事件如何影响其物理状态形成一个连贯的、符合逻辑的理解。


以这个比喻为例：你感觉到水滴在你的皮肤上，你听到水滴在屋顶上迅速下降的声音，你感觉到你的衣服越来越重，在那一瞬间，你知道雨正在下降。


然后你搜索你的记忆库，确定你是否带了一把伞。如果你带了，你就没事，否则你就检查一下从你现在的位置到你的家的距离。如果很近，你就没事，否则你就试着估量一下雨势会有多大。如果是小雨，你可以尝试继续回你的家，但如果雨势越来越大，那么你就必须找到避难所。


对看似不同的数据点（水、声音、感觉、距离）进行理解的能力在人工智能中以一种叫做无监督学习的技术形式实现。这是一种人工智能训练技术，在这种技术中，人工智能系统被教导对原始的、非结构化的数据进行理解，而没有明确的标签（没有人告诉你雨在落下，对吗？）


## 构建大脑启发的人工智能系统所面临的挑战


到目前为止，你已经了解了研究人员是如何利用大脑作为人工智能系统的灵感的。我们还讨论了大脑与人工智能的关系，以及大脑启发的人工智能背后的核心原则。


在这一节中，我们将讨论在建立以人脑为模型的人工智能系统中所固有的一些技术和概念挑战。


###复杂度


这是一个相当艰巨的挑战。大脑启发式人工智能的方法是基于对大脑的建模，并根据该模型构建人工智能系统。但人脑是一个固有的复杂系统，有 1000 亿个神经元和大约 600 万亿个突触连接（每个神经元平均有 10000 个与其他神经元的突触连接）。这些突触不断地以动态和不可预知的方式进行互动。


建立旨在模仿甚至超越这种复杂性的人工智能系统本身就是一个挑战，需要同样复杂的统计模型。

###训练大型模型的数据要求


Open AI 的 GPT 4，目前是基于文本的 AI 模型的最前沿，需要 47G 字节的数据。相比之下，其前身 GPT3 是在 17 千兆字节的数据上训练的，大约低了 3 个数量级。想象一下，GPT5 将在多少数据上进行训练。


为了获得可接受的结果，大脑启发的人工智能系统需要大量的任务数据，特别是听觉和视觉任务。这就对数据收集管道的建立给予了很大的重视。例如，特斯拉有 7.8 亿英里的驾驶数据，其数据收集管道每 10 小时就会增加一百万英里。


###能源效率


建立模仿大脑能效的大脑启发式人工智能系统是一个巨大的挑战。人类的大脑大约消耗 20 瓦特的能量。相比之下，特斯拉的自动驾驶仪，在专门的芯片上，每秒消耗约 2500 瓦，[它需要大约](https://ts2.space/en/exploring-the-environmental-footprint-of-gpt-4-energy-consumption-and-sustainability/#:~:text=The%20paper%20found%20the,hours%20(MWh)%20%20energy。) 7.5 兆瓦时（MWh）来训练一个 ChatGPT 大小的人工智能模型。


###可解释性问题


开发可以被用户信任的大脑启发的人工智能系统，对于人工智能的发展和采用至关重要--但问题就在这里。


人工智能系统所要模仿的大脑，本质上是一个黑盒子。大脑的内部运作并不容易理解，部分原因是缺乏围绕大脑如何处理思维的信息。


对人脑的生物结构并不缺乏研究，但对大脑的功能特质--即思维是如何形成的，似曾相识是如何发生的，等等--缺乏一定的经验信息。这导致了构建大脑启发式人工智能系统的问题。


###跨学科的要求


构建大脑启发式人工智能系统的行为需要不同领域的专家的知识，如神经科学、计算机科学、工程、哲学和心理学。


但这也带来了挑战，包括后勤和基础方面的挑战：从不同领域找专家在经济上很昂贵。此外，还有知识冲突的问题--让工程师关心他们正在建造的东西的心理影响真的很困难，更不用说碰撞自我的问题了。


##总结


虽然大脑启发的方法似乎是构建人工智能系统的明显途径，但它也有其挑战。但我们可以着眼于未来，希望正在努力解决这些问题。


如果你喜欢这篇文章，请考虑订阅我的[通讯](https://www.freecodecamp.org/news/p/863dd550-5476-4d67-b6cd-93c316dd804a/edemgold.substack.com)，以获得更多类似的文章。


## 参考文献

-   [freeCode Camp Machine Learning certification](https://www.freecodecamp.org/learn/machine-learning-with-python)
-   [Tesla's Vehicle Safety Report](https://www.tesla.com/VehicleSafetyReport#:~:text=Because%20every%20Tesla%20is%20connected,the%20different%20ways%20accidents%20happen.)
-   [Basic Neural Units of the Brain: Neurons, Synapses and Action Potential](https://arxiv.org/abs/1906.01703)
-   [When Brain-inspired AI meets AGI](https://arxiv.org/pdf/2303.15935.pdf)
-   [Perceptron: The artificial Neuron (An Essential Upgrade To The McCulloch-Pitts Neuron)](https://towardsdatascience.com/perceptron-the-artificial-neuron-4d8c70d5cc8d)
-   [McCulloch-Pitts Neuron — Mankind’s First Mathematical Model Of A Biological Neuron](https://medium.com/towards-data-science/mcculloch-pitts-model-5fdf65ac5dd1)
-   [BackPropagation through Time: What it does and How to do it](https://axon.cs.byu.edu/Dan/678/papers/Recurrent/Werbos.pdf)
-   [The History of AI](https://edemgold.substack.com/p/the-history-of-ai)
-   [BrainOS: A Novel Artificial Brain-Alike Automatic Machine Learning Framework](https://www.frontiersin.org/articles/10.3389/fncom.2020.00016/full)
