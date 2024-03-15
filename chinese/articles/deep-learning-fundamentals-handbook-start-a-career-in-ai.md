---
title: Deep Learning Fundamentals Handbook – What You Need to Know to Start Your
  Career in AI
author: Tatev Aslanyan
authorURL: https://www.freecodecamp.org/news/author/tatevkaren/
originalURL: https://www.freecodecamp.org/news/deep-learning-fundamentals-handbook-start-a-career-in-ai/
translator: ZhijieXiong
reviewer: ""
---

February 16, 2024 / [#Deep Learning][1]

<!-- more -->

# 深度学习基础手册 – 开启人工智能职业生涯所需了解的内容

![Tatev Aslanyan](https://www.freecodecamp.org/news/content/images/size/w60/2023/08/Airbrush-AIGC--11-.png)

[Tatev Aslanyan][2]

  ![Deep Learning Fundamentals Handbook – What You Need to Know to Start Your Career in AI](https://www.freecodecamp.org/news/content/images/size/w2000/2024/02/The-Deep-Learning-Fundamentals-Handbook-Cover-Version-3--1-.png)

如果你想进入人工智能（AI，Artificial Intelligence）领域——当下最热门的职业道路之一——那么你来对地方了。

学习深度学习基础是你了解计算机视觉（CV，Computer Vision）、自然语言处理（NLP，Natural Language Processing）、大语言模型（LLM，Large Language Models）和生成式人工智能（AGI，Artificial General Intelligence）的创意宇宙等内容的第一步。

如果你渴望成为数据科学家、AI研究员、AI工程师或机器学习研究员，这份指南就是为你准备的。

当下AI的各个领域都正以极快的速度进行迭代和创新。无论你是初学者，还是已经从事机器学习相关领域工作，都应该继续巩固和学习深度学习的基础知识。

请把这本手册当作你在AI领域探索的个人路线图。无论你是对AI如何改变我们的世界这件事满怀好奇的新手爱好者，还是希望在科技领域有所建树的学生，亦或是希望转入这个令人心潮澎湃的领域的专业人士，它都会对你有所帮助。

本指南可以帮助你做如下事情：

-   从零开始学习深度学习的所有基础知识
-   刷新你对深度学习的所有基础知识的认知
-   为即将到来的人工智能面试做好准备

## 内容目录

1.  [第1章: 什么是深度学习？](#第1章: 什么是深度学习？)
2.  [第2章: 神经网络基础](#第2章: 神经网络基础) 
    – 神经网络架构 
    – 激活函数
3.  [Chapter 3: How to Train Neural Networks][5]  
    – Forward Pass - math derivation  
    – Backward Pass - math derivation
4.  [Chapter 4: Optimization Algorithms in AI][6]  
    – Gradient Descent - with Python    
    – SGD - with Python    
    – SGD Momentum - with Python    
    – RMSProp - with Python    
    – Adam - with Python    
    – AdamW - with Python
5.  [Chapter 5: Regularization and Generalization][7]  
    – Dropout  
    – Ridge Regularization (L2 Regularization)  
    – Lasso Regularization (L1 Regularization)  
    – Batch Normalization
6.  [Chapter 6: Vanishing Gradient Problem][8]  
    – Use appropriate activation functions  
    – Use Xavier or He Initialization  
    – Perform Batch Normalization  
    – Adding Residual Connections
7.  [Chapter 7: Exploding Gradient Problem][9]
8.  [Chapter 8: Sequence Modeling with RNNs & LSTMs][10]  
    – Recurrent Neural Networks (RNN) Architecture  
    – Recurrent Neural Network Pseudocode  
    – Limitations of Recurrent Neural Network  
    – Long Short-Term Memory (LSTM) Architecture
9.  [Chapter 9: Deep Learning Interview Preparation][11]  
    – Part 1: Deep Learning Interview Course \[50 Q&A\]  
    – Part 2: Deep Learning Interview Course \[100 Q&A\]

![DALL-E-2024-01-19-22.49.45---A-hyper-stylized-artistic-representation-of-artificial-intelligence-and-programming--featuring-a-striking-yellow-and-black-color-scheme.-The-scene-is-](https://www.freecodecamp.org/news/content/images/2024/01/DALL-E-2024-01-19-22.49.45---A-hyper-stylized-artistic-representation-of-artificial-intelligence-and-programming--featuring-a-striking-yellow-and-black-color-scheme.-The-scene-is-.png)

图片来源: [LunarTech.ai][12]

## 先修知识

深度学习是人工智能和机器学习的高级研究领域。 要完全掌握本手册所讨论的概念，必须在以下方面有一定基础。

### 1. 机器学习基础

理解机器学习的核心原理至关重要。 如果你还不熟悉这些，建议查阅我的[机器学习基础手册][13]，其中包含了所有必要的基础知识。 此外，我的[机器学习基础知识][14] 课程也提供了有关这些原理的全面教学。

### 2. 统计学基础

统计学在理解机器学习数据模式和推理方面发挥着至关重要的作用。 对于需要温习这一点的人，我的[统计学基础][15] 课程是另一个资源，其中涵盖了深度学习所需的统计学基本概念。

### 3. 线性代数和微分理论

[对线性代数的高级理解][16]和[微分理论][17]也很重要。 我将在本手册中介绍一些这方面的内容，例如微分法则。 我们会回顾矩阵乘法、矩阵和向量运算、归一化概念以及微分理论的基础知识。

但我鼓励你去加深对这些领域知识的理解。 有关此内容的更多信息，可以在 freeCodeCamp 上搜索“Linear Algebra”找到，例如该课程“[线性代数完整课程][18]”。

请注意，如果你对统计学基础、机器学习和数学等内容并不了解，那么查阅本手册将是一个相当大的挑战。 我们将使用这些领域的概念，包括均值、方差、链式规则、矩阵乘法、导数等。 因此请确保您理解这些概念，以便充分利用本手册。

### 参考示例 – 预测房价

在本书中，我们将使用一个实际示例来说明和阐明正在学习的概念。 我们将探讨如何根据房屋特征来预测房屋价格。 这个例子将作为一个参考，使抽象或复杂的概念变得具体和容易理解。

## 第1章: 什么是深度学习？

深度学习是一系列受大脑结构和功能所启发的算法。深度学习可以用多个处理层组成的量化模型来研究具有多层抽象级别的数据表示。（译者：这句话不好理解，我是直译的，个人理解就是：“多个处理层”——模块化；“量化模型”——模型输出是数值；“数据表示”——用数值表示任何内容，如用向量表征文本或图像甚至视频；“多层抽象级别”——信息被压缩在数据中，如用向量表示文本，那么两个语义上相近的单词所对应的向量在空间上也比较接近，如这两个向量余弦相似度比较大，或者用向量表示图像，两幅相似图像对应的向量也是在空间上相近）

![0-Q3PICBlib-932hhH](https://www.freecodecamp.org/news/content/images/2024/01/0-Q3PICBlib-932hhH.png)

探索人工智能的各个层面：从人工智能到深度学习。 （图片来源：[LunarTech.ai][19]）

深度学习是机器学习的一个分支，它试图模仿人脑的工作方式，并根据一类基于神经网络的模型来做出决策。

简单来说，深度学习是传统机器学习更高级、复杂的版本。 深度学习模型基于[神经网络][20]，试图模仿人类思考和决策的方式。（译者：这应该只是深度学习研究的起源，后续发展中，模仿人类大脑运作的神经网络只是深度学习的部分内容，而不是全部）

传统统计或机器学习方法的问题在于它们基于特定的规则和指令。 因此，只要不满足模型假设，模型就很难解决问题并执行预测。 此外还有一些类型的问题，例如图像识别和其它更高级的任务，使用传统的统计或机器学习模型没办法很好地解决。

这个时候深度学习就可以发挥用武之地了。

![1-hx3DLumiQYwPGY1Ax_sGMA-copy](https://www.freecodecamp.org/news/content/images/2024/01/1-hx3DLumiQYwPGY1Ax_sGMA-copy.png)

人工智能的层次结构：从广泛的人工智能概念到专业的语言模型（图片来源：[Medium][21]）

（译者：我认为上面这幅图有一处不足之处，Generative AI中没有标出多模态大语言模型，即Multimodal Large Language Models，缩写是MLLM，模态指的就是文本、图像、语音，多模态指这些单模态能够跨模态理解，也就是对齐不同模态的语义）

### 深度学习的应用

以下是深度学习应用于各行各业的一些示例：

#### 医疗

- **疾病诊断和预后**：深度学习算法有助于分析 X 射线、MRI 和 CT 扫描等医学图像，并结合计算机视觉模型，可以更精确地诊断癌症等疾病。 深度学习方法比传统方法响应要快。 还可以通过分析患者数据的模式来预测患者的结果。

- **药物发现和开发**：深度学习模型有助于识别潜在的候选药物并加快药物开发过程，从而显著减少耗时和成本。

#### 金融

- **算法交易**：深度学习模型可以快速处理大量金融数据，被用于预测股市趋势并自动化交易决策。

- **欺诈检测**：银行和金融机构利用深度学习来检测那些指示欺诈活动的异常模式，从而增强安全性和客户信任。

#### 汽车和交通

- **自动驾驶汽车**：自动驾驶汽车也大量使用深度学习来解释传感器数据，这使它们能够通过计算机视觉以及其它方法在复杂的环境中安全行驶。

- **交通管理**：人工智能模型通过分析交通模式来优化交通流量并减少城市拥堵。

#### 零售和电子商务

- **个性化购物体验**：深度学习算法有助于零售和电子商务分析客户数据并提供个性化产品推荐。 这不仅增强了用户体验，也促进了销售。

- **供应链优化**：使用人工智能模型预测需求，优化库存，增强物流运营，提高供应链效率。

#### 娱乐和媒体

- **内容推荐**：Netflix 和 Spotify 等平台使用深度学习来分析用户偏好和观看历史记录，以推荐个性化内容。

- **视频游戏开发**：使用人工智能创建更加真实和互动性更强的游戏环境，增强玩家体验。

#### 技术与通信

- **虚拟助手**：Siri、Alexa 和其它虚拟助手使用深度学习实现自然语言处理和语音识别，响应更快且对用户更友好。

- **语言翻译服务**：谷歌翻译等服务利用深度学习进行实时、准确的语言翻译，打破语言障碍。

#### 制造和生产

- **预测性维护**：深度学习模型可以预测机器何时需要维护，从而减少停机时间并节省成本。

- **质量控制**：使用人工智能算法可以高速检查和检测产品缺陷，其准确性比人工检查更高。

#### 农业

- **作物监测和分析**：人工智能模型通过分析无人机和卫星图像，以监测作物健康状况、优化耕作方式并预测产量。

#### 安全和监控

- **面部识别**：深度学习模型可以增强安全系统，即使在拥挤的环境中也能准确识别个人。

- **异常检测**：人工智能算法监控安全录像以检测异常活动或行为，有助于预防犯罪。

#### 研究和学术

- **科学发现**：深度学习可以帮助研究人员分析复杂数据，从而在天文学、物理学和生物学等领域取得发现。

- **教育工具**：人工智能驱动的导学系统提供个性化的学习体验，能够适应不同学生的需求。

深度学习极大地完善了语音识别、物体识别、语音理解、自动翻译、图像识别以及药物发现和基因组学等学科中最先进的方法。

![DALL-E-2024-01-19-23.02.30---A-hyper-stylized-artistic-representation-with-a-dominant-yellow-color-theme--blending-abstract-art-and-futuristic-concepts.-The-image-is-filled-with-e](https://www.freecodecamp.org/news/content/images/2024/01/DALL-E-2024-01-19-23.02.30---A-hyper-stylized-artistic-representation-with-a-dominant-yellow-color-theme--blending-abstract-art-and-futuristic-concepts.-The-image-is-filled-with-e.png)

图片来源: [LunarTech.ai][22]

## 第2章: 神经网络基础

现在我们来谈谈神经网络的一些关键特性和特点：

-   **分层结构:** 深度学习模型的核心由多层组成，每一层将输入数据转换为更抽象和复合的表示。
-   **特征层次:** 简单特征（如图像识别中的边缘）从一层重新组合到下一层，形成更复杂的特征（对象或形状）。
-   **端到端学习:** 深度学习模型执行从原始数据到最终类别或决策的任务，通常性能会随着数据量增加而提升。 因此，大数据对于深度学习起着重要作用。

以下是深度学习模型的核心组件：

### 神经元

神经元是神经网络的基本构建块，它们接收输入将其通过激活函数然后再传递到下一层（后续章节将详细介绍这一部分）。

### 权重和偏置

神经网络通过优化算法来学习并调整参数（译者注：即权重和偏置）的值，以帮助模型做出准确的预测。 优化算法应该快速连续地朝着理想方向优化这些参数，使其达到最优，以得到准确的模型（例如，通常用 $w_{ij}$ 和 $b_{j} $ 表示权重和偏置）。

**偏置项**：实际应用中，在通过激活函数之前，通常将偏置项 ( b ) 添加到输入权重乘积和（译者注：即输入x和权重矩阵w的乘积，也就是$Wx$）中。 偏置项使神经元能够将激活函数的值向左或向右移动，这对于学习复杂模式来说至关重要。

**学习过程**：权重在网络的训练阶段进行调整。 通过这个过程（通常涉及梯度下降），网络迭代更新权重以最小化其输出与目标值（译者注：这里目标值一般就是标签，也就是常说的ground truth）之间的差值。

**这一段没懂，后续去问问作者**：该神经元可能是由多层组成的更大网络的一部分。 神经网络用于解决从图像和语音识别到预测股市趋势的大量问题。

**数学符号更正**：文本中提供的方程使用符号（ \\phi ），这在本文中是非常规的。 通常，简单求和 ( \\sum ) 用于表示加权输入的聚合，之后通过激活函数 ( f )，如下所示

$$ f\\left(\\sum\_{i=1}^{n} W\_ix\_i + b\\right) $$

### 激活函数

向网络中引入非线性的函数，能够使其学习复杂的数据模式。由于激活函数的作用——激活函数不是作为和所有输入信号或隐藏单元同等重要的作用，而是帮助转化这些值——这使得模型不再是线性类型，而是变成更加灵活的非线性模型。

隐藏层中的每个神经元和输入加权求和后，再经过非线性激活函数，以此转换来自前一层的输入（这就是非线性灵活神经网络与常见线性回归的区别）。 这一层的输出然后被传递到下一层，依此类推，直到达到最后一层。

因为激活函数是非常重要的一个概念，也是神经网络学习过程中的关键部分，所以我们将在本手册中详细讨论激活函数，并通过 4 个最流行的激活函数示例来清楚地说明这一点。

（输入）通过隐藏层并随后经过激活函数，然后产生输出的过程称为前向传播。

### 神经网络架构

神经网络的每一层通常分为三种类型：输入层、隐藏层和输出层。 现在让我们进一步了解每种类型的网络层。

我们将使用房价预测案例来学习有关这些网络层的更多知识。 下面你可以看到一个简单的神经网络架构图，我们将逐层解释。

![image-106](https://www.freecodecamp.org/news/content/images/2023/12/image-106.png)

简单的神经网络架构：输入、权重和输出解释（图片来源：[LunarTech.ai][23]）

### 输入层

输入层是数据所在的初始层，包括那些输入到你的模型，然后用于训练模型的特征。

这是神经网络接收输入数据的地方。 神经网络输入层中的每个神经元代表输入数据的一个特征， 如果你的输入有两个特征，输入层将有两个神经元。（译者注：这里原文有误，输入数据为2维，输入层的神经元有2个，而不是两个输入层）

下面是一个输入特征为N维（即N个输入信号）的简单神经网络架构可视化，因此在输入层看到N个神经元。除此之外，还可以看到一个具有h1、h2和h3这3个隐藏单元（译者注：即隐藏层的神经元，这里原文用隐藏单元表示） 的隐藏层，以及最后的输出层。

让我们从输入层开始了解特征Z1、Z2、...、Zn是什么。

![Screenshot-2024-01-31-at-10.57.32-AM](https://www.freecodecamp.org/news/content/images/2024/01/Screenshot-2024-01-31-at-10.57.32-AM.png)

突出显示输入层的简单神经网络架构（图片来源：[LunarTech.ai][24]）

在我们使用神经网络预测房屋价格的示例中，输入层使用的是房屋特征，例如卧室数量、房屋年限、是否靠近海洋或是否有游泳池，（通过这些特征）可以唯一地表示每间房屋。这些就是提供给神经网络输入层的内容，每一个特征都作为一个输入神经元，为模型提供必要的数据。

但随之而来的问题是，这些特征对模型的学习过程贡献有多大？它们是否都同等重要？或者是否有些特征更重要，应该对价格估算做出更大的贡献？

这个问题的答案在于我们之前定义的“权重”和“偏置”。

在上图中，每个神经元的权重为 $w_{ij}$，其中 i 是输入神经元索引，j 表示第 i 个输入神经元对隐藏层中第j个神经元的贡献，所以 $w_{11}$、$w_{12}$、$w_{13}$ 分别描述了特征 1 对于学习隐藏单元 h1、h2 和 h3 的房子有多重要。

请理解并记住这些权重参数的含义，因为它们是神经网络最重要的组成部分之一。 这些重要的参数将在神经网络在训练过程中被更新，以优化学习过程（译者注：也就是减少损失函数的值，即通过更新网络参数降低损失函数的值，不同的任务有不同的损失函数，这个具体情况具体讨论）。

### 隐藏层

隐藏层是模型的中间部分，并且紧接在输入层之后。你的模型可以有一个到多个隐藏层（译者注：如果将输出层也当作一种隐藏层的话可以这么讲，但是如果严格区分隐藏层和输出层的话，隐藏层的层数可以为0，即输入直接接到输出）。

让我们通过预测房价这个简单的神经网络来了解隐藏层。

下面重点介绍我们前面看到的简单神经网络架构中的隐藏层。你可以认为这是神经网络中最重要的部分之一，它的作用是从数据中提取第一视图（译者注：简单理解为原始数据，比如输入是图片，那么这里的第一视图就是图片的像素数据，或者是通过归一化后的像素数据）下并不显式的模式和关系。

![Screenshot-2024-01-31-at-11.01.01-AM](https://www.freecodecamp.org/news/content/images/2024/01/Screenshot-2024-01-31-at-11.01.01-AM.png)

突出隐藏层的简单神经网络架构（图片来源：[LunarTech.ai][25]）

在我们使用神经网络预估房屋价格的示例中，隐藏层在处理和解释来自输入层的信息方面发挥着至关重要的作用，就像我们上面提到的房屋特征一样。

这些隐藏层由神经元组成，它们将权重和偏置作用在输入特征（如房屋年龄、卧室数量、与海洋的距离以及是否福袋游泳池，译者注：输入都需要转换为数值，例如有无游泳池可以用0｜1表示）上，以提取（从原始数据来看）并不显式的模式和关系。

在这种情况下，隐藏层可能学习到房屋价格和房屋特征之间复杂的依赖关系，例如黄金地段、房屋年龄和现代设施的结合如何显着提高房屋的价格。

隐藏层充当神经网络的计算引擎，通过“洞察”原始数据中的信息来准确估计房屋的市场价值。 通过训练可以调整隐藏层的权重和偏差（即网络参数参数），从而尽量减少模型的预测误差，逐步提高模型估算房价的准确率。

这些层通过互连的神经元执行大部分计算。在这个简单的示例中，我们只有 1 个隐藏层和 3 个隐藏单元（隐藏层的数量和每一个隐藏层的神经元个数都是在学习过程中可以使用 [随机搜索 CV][26] 或其它技术进行优化的超参数）。

但是解决现实世界问题的神经网络要比这深和大得多，也就是有很多隐藏层，并且权重和偏置的参数量可能超过10亿。

### 输出层

输出层是神经网络的最后一层——为特定任务的所有转化进入输出层之后提供神经网络的输出，该输出可以是单个值（例如回归任务）或向量（就像在大型语言模型中我们生成概率向量或嵌入）。

输出层可以是分类模型的类标签、回归模型的连续数值，甚至是数值向量，这取决于具体任务。

神经网络中的隐藏层是实际学习发生的地方，在这里深度网络通过提取和转换输入所提供的特征来从数据中学习。

随着数据深入网络，每一层（输入）都建立在前一层的输出/值之上，（所提取的）特征也变得更加抽象和复合。 隐藏层的深度和宽度（神经元数量）是网络学习复杂模式能力的关键因素。下面是我们前面所看到的展示简单神经网络架构的框图。

![Screenshot-2024-01-31-at-11.27.39-AM](https://www.freecodecamp.org/news/content/images/2024/01/Screenshot-2024-01-31-at-11.27.39-AM.png)

突出显示“输出层”的简单神经网络架构（图片来源：[LunarTech.ai][27]）

在我们的房价预测示例中，学习的结果由输出层表示，它代表我们的最终目标：房价的预测值。

一旦特征（例如卧室数量、房子的年限制、距海洋的距离以及是否有游泳池）被输入到神经网络中，它们就会穿过神经网络的一个或多个隐藏层。 神经网络正是在这些隐藏层中发现数据特征间的复杂模式和互连关系。

最后，经过处理的信息到达输出层，模型在此整合所有数据（译者注：也就是前面隐藏层生成的抽象特征）并生成最终预测结果，本例中也就是房价的预测值。

因此，输出层整合了获得的所有信息，即隐藏层所有的变换都是为了产生单个值：房屋的预测价格（通常用$\hat_{Y}$表示，发音为“Y hat”）。

该预测是神经网络基于（它从数据中学到的）不同房屋特征对房价的影响，对房屋市场价值的一个估计。 它展示了网络将复杂数据合成为可行见解的能力，在这种情况下，通过其优化的模型产生准确的价格预测。

### Activation functions

[Activation functions][28] introduce non-linear properties to the neural network model, which enables the model to learn more complex patterns.

Without non-linearity, your deep network would behave just like a single-layer [perceptron][29], which can only learn [linear separable functions][30]. Activation functions define how the neurons should be activated – hence the name activation function.

Activation functions serve as the bridge between the input signals received by the network and the output it generates. These functions determine how the weighted sum of input neurons – each representing a specific feature like the number of bedrooms, house age, proximity to the ocean, and presence of a swimming pool – should be transformed or "activated" to contribute to the network's learning process.

Activation functions are an extremely important part of training Neural Nets. When the net consists of Hidden Layers and Output Layers, you need to pick an activation function for both of them (different activation functions may be used in different parts of the model). The choice of activation function has a huge impact on the neural networks’ performance and capability.

Each of the incoming signals or connections are dynamically strengthened or weakened based on how often they are used (this is how we learn new ideas and concepts). It is the strength of each connection that determines the contribution of the input to the neurons’ output.

After being weighted by the strength of their respective signals, the inputs are summed together in the **cell body**. This is then transformed into a new signal that’s transmitted or propagated along the cells’ _axon_ and sent off to other neurons. This functional work of activation function can mathematically be represented as follows:

![image-107](https://www.freecodecamp.org/news/content/images/2023/12/image-107.png)

Neuron Activation: Transforming Weighted Inputs into Outputs (Image Source: [LunarTech.ai][31])

Here we have inputs x1, x2, ...xn and their corresponding weights w1, w2, ... wn, and we aggregate them into single value of Y by using activation function f.

This figure is a simplified version of a neuron within an artificial neural network. Each input ( X\_i ) is associated with a corresponding weight ( W\_i ), and these products are aggregated to compute the output ( Y ) of the neuron. The X\_i is the input value of signal i (like the number of bedrooms of the house, as a feature describing the house). Its importance weight by w\_i corresponds to each X\_i, so the sum of all these weighted input values can be expressed as follows:

$$ \\phi\\left(\\sum\_{i=1}^{m} w\_i x\_i\\right) $$

In this equation, phi represents the function we use to join signals from different input neurons into one value. This function is called the Activation Function.

Each synapse gets assigned a weight, an importance value. These weights and biases form the cornerstone of how Neural Networks learn. These weights and biases determine whether the signals get passed along or not, or to what extent each signal gets passed along.

In the context of predicting house prices, after the input features are weighted according to their relevance learned through training, the activation function comes into play. It takes this weighted sum of inputs and applies a specific mathematical operation to produce an activation score.

This score is a single value that efficiently represents the aggregated input information. It enables the network to make complex decisions or predictions based on the input data it receives.

Essentially, activation functions are the mechanism through which neural networks convert an input's weighted sum into an output that makes sense in the context of the specific problem being solved (like estimating a house's price here). They allow the network to learn non-linear relationships between features and outcomes, enabling the accurate prediction of a house's market value from its characteristics.

The modern default or most popular activation function for hidden layers is the Rectifier Linear Unit (ReLU) or Softmax function, mainly for accuracy and performance reasons. For the output layer, the activation function is mainly chosen based on the format of the predictions (probability, scaler, and so on).

Whenever you are considering any activation function, be aware of the **Vanishing Gradient Problem** (we will revisit this topic later). This happens when gradients are too small or too large, they can make the learning process difficult.

Some activation functions like sigmoid or tanh can cause vanishing gradients in deep networks while some of them can help mitigate this issue.

Let's look at a few other kinds of activation functions now, and when/how they're useful.

#### **Linear Activation Function**

A Linear Activation Function can be expressed as follows:

$$ f(z) = z $$

![image-109](https://www.freecodecamp.org/news/content/images/2023/12/image-109.png)

Linear Activation Function (Image Source: [LunarTech.ai][32])

This grapgh shows a linear activation function for a neural network, defined by _f_(_z_)=_z_.  Where z is the input (called Z-scores as we mentioned before) for the activation function f( ). This means the output is directly proportional to the input.

Linear Activation Functions are the simplest activation functions, and they're relatively easy to compute. But they have an important limitation: NNs with only linear neurons can be expressed as a network with no hidden layers – but the hidden layers in NNs are what enables them to learn important features from input signals.

So, in order to learn complex patterns from complex problems, we need more advanced Activation Functions rather than Linear Functions.

You can use a linear function, for instance, in the last output layer when the plain outcome is good enough for you and you don’t want any transformation. But 99% of the time this activation function is useless in Deep Learning.

#### **Sigmoid Activation Function**

One of the most popular activation functions is the Sigmoid Activation Function, which can be expressed as follows:

$$ f(z) = \\frac{1}{1 + e^{-z}} $$

![image-111](https://www.freecodecamp.org/news/content/images/2023/12/image-111.png)

Sigmoid Activation Function (Image Source: [LunarTech.ai][33])

In this figure the  sigmoid activation function is visualised, which is a smooth, S-shaped curve commonly used in neural networks. If you are familiar with Logistic Regression, then this function will seem familiar to you as well. This function transforms all input values to values in the range of (0,1) which is very convenient when you want the model to provide output in the form of probabilities or a %.

Basically, when the logit is very small, the output of a logistic neuron is very close to 0. When the logit is very large, the output of the logistic neuron is closer to 1. In-between these two extreme values, the neuron assumes an S-shape.  This S-shape of the curve also helps to differentiate between outputs that are close to 0 or close to 1, providing a clear decision boundary.

You'll often use the Sigmoid Activation Function in the output layer, as it’s ideal for the cases when the goal is to get a value from the model as output between 0 and 1 (a probability for instance). So, if you have a classification problem, definitely consider this activation function.

But keep in mind that this activation is very intensive and a large amount of neurons will be activated. This is also why, for the hidden units, the Sigmoid activation is not the best option, as it sets large values to the bounds of 0 and 1, causing quickly parameters stay constant → no gradients (used to update the weights and bias factors).

This is the infamous **Vanishing Gradient Problem** (more on this in the upcoming chapters). This results in the model being unable to accurately learn from the data and produce accurate predictions.

#### **ReLU (Rectifier Linear Unit)**

A different type of nonlinear relationship is uncovered when using the **Restricted Linear Unit (ReLU)** _._ This activation function is less strict and works great when your focus is on positive values.

The ReLU activation function activates the neurons that have positive values but deactivates the negative values, unlike the Sigmoid function which activates almost all neurons. This activation function can be expressed as follows:

$$ f(z) = \\begin{cases} 0 & \\text{if } z < 0 \\\\ z & \\text{if } z \\geq 0 \\end{cases} $$

![image-114](https://www.freecodecamp.org/news/content/images/2023/12/image-114.png)

ReLU Activation Function (Image Source: [LunarTech.ai][34])

As you can see above from this visualization, the ReLU activation function doesn’t activate at all the input neurons with negative values (you can see that for the x's which are negative, corresponding Y-axis value is 0). While for positiove inputs x, the activation function returns the exact value x (Y=X linear line as you see from the figure). But it is still a good default choice for hidden layers. It is computationally efficient and reduces the likelihood of vanishing gradients during training, especially for deep networks.

#### Leaky ReLU Activation Function

While ReLU doesn’t activate input neurons with negative values, the Leaky ReLU does account for these negative input values. It learns from it though with a lower rate equal to 0.01.

This activation function can be expressed as follows:

$$ f(z) = \\begin{cases} 0.01z & \\text{if } z < 0 \\\\ z & \\text{if } z \\geq 0 \\end{cases} $$

So, the Leaky ReLU allows for a small or non-zero gradient when the input value is saturated and not active.

![image-116](https://www.freecodecamp.org/news/content/images/2023/12/image-116.png)

Leaky ReLU Activation Function (Image Source: [LunarTech.ai][35])

This visualization shows the Leaky ReLU activation function commonly used neural networks especially for the hidden layers and where negative activations is acceptable. Unlike the standard ReLU, which gives an output of zero for any negative input, Leaky ReLU allows a small, non-zero output for negative inputs.

Like ReLU, Leaky ReLU is also a good default choice for hidden layers. It is computationally efficient and reduces the likelihood of vanishing gradients during training, especially for deep networks with multiple hidden layers.We will talk more on these and previous activations functions when discussing the Vanishing Gradient Problem, and if you want bit more details and the concept to be explained in tutorial - check out the resources below.

### Hyperbolic Tangent (Tanh) Activation Function

Hyperbolic Tangent activation function is often referred to simply as the **Tanh** function. It's very similar to the Sigmoid activation function. It even has the same S-shape representation.

This function takes any real value as input value and outputs a value in the range -1 to 1. This activation function can be expressed as follows:

$$ f(z) = \\tanh(z) = \\frac{e^z - e^{-z}}{e^z + e^{-z}} $$

![image-118](https://www.freecodecamp.org/news/content/images/2023/12/image-118.png)

Tanh Activation Function (Image Source: [LunarTech.ai][36])

The figure shows the tanh (hyperbolic tangent) activation function. So, this function outputs values ranging from -1 to 1, providing a normalized output that can help with the convergence of neural networks during training. It's similar to the sigmoid function but it is adjusted to allow for negative outputs, which can be beneficial for certain types of neural networks where the mean of the outputs needs to be centered around zero.

Note - if you want to get more details about these activation functions, check out this tutorial where I cover this concept in further detail at ["What is an Activation Function"][37] and ["How to Solve the Vanishing Gradient Problem"][38].

Again, the current default or most popular activation function for hidden layers is the Rectifier Linear Unit (ReLU) or Softmax function, mainly for accuracy/performance reasons. For the output layer, the activation function is mainly chosen based on the format of the predictions (probability, scaler, and so on).

![DALL-E-2024-01-19-23.03.15---A-series-of-hyper-stylized-artistic-representations--each-featuring-a-dominant-yellow-color-theme-and-blending-abstract-art-with-futuristic-concepts.-](https://www.freecodecamp.org/news/content/images/2024/01/DALL-E-2024-01-19-23.03.15---A-series-of-hyper-stylized-artistic-representations--each-featuring-a-dominant-yellow-color-theme-and-blending-abstract-art-with-futuristic-concepts.-.png)

Image Source: [LunarTech.ai][39]

## Chapter 3: How to Train Neural Networks

Training neural networks is a systematic process that involves two main processes, done repeatedly, named forward and backward passes.

First the data goes through the Forward Pass until the output. Then it is followed by a backward pass. The idea behind this process is to go through the network on multiple occasions to adjust the weights and minimize the loss or cost functions.

To get a better understanding, we will look into a simple Neural Network where we have 3 input signals, and just a single hidden layer that has 4 hidden units. This can be visualized as follows:

![image-125](https://www.freecodecamp.org/news/content/images/2023/12/image-125.png)

From Input Layer through Hidden Layers to Prediction (Image Source: [LunarTech.ai][40])

Here you can see that we have 3 input signals in our input layer, 1 hidden layer with 4 hidden units, and 1 output layer. This is a computational graph visualizing this basic neural network and how the information flows from the left, initial inputs to the right, all the way down to the predicted Y^ (Y hat), after going through multiple transformations.  

![image-126](https://www.freecodecamp.org/news/content/images/2023/12/image-126.png)

Forward and Backward Propagation in Neural Networks (Image Source: [LunarTech.ai][41])

Now, let's look into this figure that showcases the high level idea of flow of information.

-   We go from input X (which we define by A\[0\] as the initial activations)
-   Then per step (indexed by \[1\]) we take the weights matrix (W\[1\] and bias vector b\[1\]) and compute the Z scores (Z\[1\])
-   Then we apply the activation function to get activation scores (A\[1\]) at level \[1\]. This happens at time step 1, which is in our example hidden layer 1.

As we get a single layer, the next step is the output layer, where the information from the previous layer (A\[1\]) is used to compute the new Z\[2\] scores by combining the input A\[1\] from the previous layer and with W\[2\] / b\[2\] from this layer. We then apply another activation layer (our output layer activation function) on the just computed Z\[2\] to compute the A\[2\].

As the A\[2\] is in the output layer, this gives us our prediction, Y\_hat. This is the Forward Pass or Forward Propagation.

Next you can see in the second part of the figure, we go from Y\_hat to all these terms that are kind of the same as in forward pass but with one crucial difference: they all have **"d"** in front of them, which refers to the "derivative".

So, after the Y\_hat is produced, we get our predictions, and the network is able to compare the Y\_hat (predicted values of response variable y, in our example house price) to the true house prices Y and obtain the Loss function.

If you want to learn more about Loss Functions, check out [here][42] or this [tutorial][43].

Then, the network computes the derivative of loss function with regard to activations A and Z score (dA and dZ). Then it uses these to compute the gradients/derivatives with regard to the weights W and biases b (dW and db).

This also happens per layer and in a sequential way, but as you can see from the arrow in the figure above, this time it happens backwards from right to left unlike in forward propagation.

This is also why we refer this process as backpropagation. The gradients of layer 2 contribute to the calculation of the gradients in layer 1, as you can also see from the graph.

### Forward Pass

Forward propagation is the process of feeding input data through a neural network to generate an output. We will define the input data by X which contains 3 features X1, X2, X3 which can be described mathematically as follows:

$$ z^i = \\omega^T x^i + b $$ $$ \\Downarrow $$ $$ \\hat{y}^i = a^i = \\sigma(z^i) $$ $$ \\Downarrow $$ $$ l(a^i, y^i) $$

Where in these equations we are moving from input x\_i in our simple neural network, to the calculation of loss.

Let's unpack them:

**Step 1:** Each neuron in subsequent layers calculates a weighted sum of its inputs (x^i) plus a bias term b. We call this a score z^i. The inputs are the outputs from the previous layer’s neurons, and the weights as well as the bias are the parameters that neural network is aiming to learn and estimate.

**Step 2:** Then using an activation function, which we denote by the Greek letter delta, the network transforms the Z scores to a new value which we define by a^i. Note that the activation value at the initial pass when we are at the initial layer in the network (layer 0) is equal to x^i. This is then the predicted value in that specific pass.

To be more accurate, let’s make our notation a bit more complicated. We'll define each score in the first hidden layer, layer \[1\], per unit (as we have 4 units in this hidden unit) and generalize this per hidden unit _i_:

$$ z^{\[1\]}\_i = (\\omega^{\[1\]}\_i)^T x + (b^{\[1\]}\_i)^T \\quad \\text{for } i = \\{1, 2, 3, 4\\} $$ $$ a^{\[1\]}\_i = \\sigma \\left( z^{\[1\]}\_i \\right) $$

Let’s now rewrite this using Linear Algebra and specifically matrix and vector operations:

![image-132](https://www.freecodecamp.org/news/content/images/2023/12/image-132.png)

Matrix Operations in Neural Network Computations (Image Source: [LunarTech.ai][44])

$$ Z^{\[1\]} = W^{\[1\]T} X^{\[1\]} + b^{\[1\]} $$

This image presents a way to represent the computations in a neural network layer using matrix operations from Linear Algebra. It shows how individual computations for each neuron in a layer can be compactly expressed and performed simultaneously through using matrix multiplication and summation.

The matrix labeled  W^\[1\] contains the weights applied to the inputs for each neuron in the first hidden layer. The vector X\[1\] is the input to the layer. By multiplying the weight matrix with the input vector and then adding the bias vector b\[1\], we get the vector Z\[1\], which we refered as Z-score previously too and represents the weighted sum of inputs plus the bias for each neuron.

This compact form allows us to use efficient linear algebra routines to compute the outputs of all neurons in the layer at once.

This approach is fundamental in neural networks as it enables the processing of inputs through multiple layers efficiently, allowing neural networks to scale to large numbers of neurons and complex architectures.

So, here we go from unit level to representing the transformations in our simple neural networks by using Matrix multiplication and summations from Linear Algebra.  

#### First Layer Activation

$$ Z^{\[1\]} = W^{\[1\]T} X^{\[1\]} + b^{\[1\]} \\quad X^{\[1\]} = A^{\[0\]} A^{\[1\]} = g^{\[1\]}(Z^{\[1\]}) $$

Now, let's look into this equation that showcases the high level idea of flow of information when we go from input X\[1\] (which we define by A\[0\] as the initial activations) then per step (indexed by \[1\]) we take the weights matrix (W\[1\] and bias vector b\[1\]) and compute the Z scores (Z\[1\]). Then we apply activation function of layer 1, g\[1\] to get activation scores (A\[1\]) at level \[1\]. This happens at time step 1, which is in our example hidden layer 1.

#### Second (Output) Layer Activation

$$ Z^{\[2\]} = W^{\[2\]T} A^{\[1\]} + b^{\[2\]}\\\\ A^{\[2\]} = g^{\[2\]}(Z^{\[2\]}) $$

As we get a single layer, next step is the output layer, where the information from the previous layer (A\[1\]) is used to compute the new Z\[2\] scores by combining the input A\[1\] from previous layer and with W\[2\] / b\[2\] from this layer. We then apply another activation function g\[2\] (our output layer activation function) on just computed Z\[2\] to compute the A\[2\].

After the activation function has been applied, it can then be fed into the next layer of the network if there is one, or directly to the output layer if this is a single hidden layer network. As in our case, layer 2 is our output layer, we are ready to go to Y\_hat, our predictions.

![image-137](https://www.freecodecamp.org/news/content/images/2023/12/image-137.png)

Sequential Data Flow Through Neural Network Layers (Image Source: [LunarTech.ai][45])

This image shows a way to represent the computations in a neural network layer using matrix operations. It shows how individual computations for each neuron in a layer of neural network can be compactly expressed, performed simultaneously through matrix multiplication and addition.

Here, the matrix labeled W\[1\]  contains the weights applied to the inputs for each neuron in the first hidden layer. The vector _X_\[1\] is the input to this layer. By multiplying the weight matrix by the input vector and then adding the bias vector b\[1\], we get  vector Z\[1\], which represents the weighted sum of inputs plus the bias for each neuron.

This compact form allows us to use efficient linear algebra routines to compute the outputs of all neurons in the layer at once. The resulting vector Z\[1\] is then passed through an activation function (not shown in this part of the image), which performs a non-linear transformation on each element, resulting in the final output of the layer.

This approach is fundamental in neural networks as it enables the processing of inputs through multiple layers efficiently, allowing neural networks to scale to large numbers of neurons and complex architectures.

#### Computing the Loss Function

As the A\[2\] is in the output layer, this gives us our prediction, Y\_hat. After the Y\_hat is produced, we got our predictions, and the network is able to compare the Y\_hat (predicted values of response variable y, in our example house price) to the true house prices Y, and obtain the Loss function _J._ The total loss can be calculated as follows:

$$J = - (Y \\log(A^{\[2\]}) + (1 - Y) \\log(1 - A^{\[2\]}))$$

where log() is the logarithm used to compute this loss function.

### Backward Pass

Backpropagation is a crucial part of the training process of a neural network. Combined with optimization algorithms like Gradient Descent (GD), Stochastic Gradient Descent (SGD), or Adam, they perform the Backward Pass.

Backpropogation is an efficient algorithm for computing the gradient of the cost (loss) function (J) with respect to each parameter (weight & bias) in the network.

So, to be clear, backpropagation is the actual process of calculating the gradients in the model, and then Gradient Descent is the algorithm that takes the gradients as input and updates the parameters.

When we compute the gradients and use them to update the parameters in the model, this helps us update the parameters and direct them towards more correct direction towards finding the global optimum to minimize. This helps further minimize the loss function  and  improve prediction accuracy of the model.

In each pass, after forward propagation is completed, the gradients should be obtained. Then we use them to obtain the model parameters, such as the weight and the bias parameters.

Let’s look at an example of the gradient calculations for backpropagation in a neural network that we saw in Forward Propagation with a single hidden layer and 4 hidden units.

Backpropagation always starts from the end, so let’s visualize it to help you understand this process better:

![image-139](https://www.freecodecamp.org/news/content/images/2023/12/image-139.png)

Backpropagation Process in Neural Networks: Calculating Gradients (Image Source: [LunarTech.ai][46])

In this figure, the network computes the derivative of the loss function with regard to activations A and Z score (dA and dZ). It then uses these to compute the gradients/derivatives with regard to weights W and biases b (dW and db). This also happens per layer and in sequential way, but as you can see from the arrow in the figure, this time it happens backwards from right to left unlike in forward propagation.

This is also why we refer this process as backpropagation. The gradients of layer 2 contribute to the calculation of the gradients in layer 1 as you can also see from the graph.

So, the idea is that we calculate the gradients with respect to the activation (dA\[2\]), then with respect to the pre-activation (dZ\[2\]), and with respect the weights (dW\[2\]) and bias (db\[2\]) of the output layer, assuming we have a cost function J after we have computed the Y^. Make sure to always cache the Z\[i\] as they are needed in this process.

Mathematically, the gradients can be calculated using the common differentiation rules including obtaining the derivative of the logarithm, and using **Sum Rule** and **Chain Rules.** The first gradient dA\[2\] can be expressed as follows:

$$ \\begin{align\*} \\frac{d\\mathcal{L}}{dA^{\[2\]}} &= \\frac{d\\mathcal{J}}{dA^{\[2\]}} \\\\ \\downarrow \\\\ dA^{\[2\]} &= \\left( -\\frac{d(Y\\log(A^{\[2\]}))}{dA^{\[2\]}} - \\frac{d((1 - Y)\\log(1 - A^{\[2\]}))}{dA^{\[2\]}} \\right) \\\\ \\downarrow \\\\ dA^{\[2\]} &= -\\frac{Y}{A^{\[2\]}} + \\frac{(1 - Y)}{(1 - A^{\[2\]})} \\end{align\*} $$

The next gradient we need to compute is the gradient of the cost function with respect to Z\[2\], that is dZ\[2\].

We know the following:

$$ A^{\[2\]} = \\sigma(Z^{\[2\]})\\\\ $$ $$ \\frac{dJ}{dA^{\[2\]}} = \\frac{dA^{\[2\]}}{dZ^{\[2\]}}\\\\ $$ $$ \\frac{dA^{\[2\]}}{dZ^{\[2\]}} = \\sigma'(Z^{\[2\]}) $$

So, A\[2\] = σ(Z\[2\]), we can then use these derivatives of the sigmoid function σ'(Z\[2\]) = σ(Z\[2\]) \* (1 - σ(Z\[2\])). This can be derived mathematically as follows:

$$ \\begin{align\*} \\frac{dZ^{\[2\]}}{dJ} &= \\frac{dJ}{dZ^{\[2\]}} \\\\\\\\ \\downarrow \\\\ \\frac{dZ^{\[2\]}}{dJ} &= \\frac{dJ}{dA^{\[2\]}} \\cdot \\frac{dA^{\[2\]}}{dZ^{\[2\]}} \\quad \\text{using chain rule} \\\\\\\\ \\downarrow \\\\ \\frac{dZ^{\[2\]}}{dJ} &= dA^{\[2\]} \\cdot \\sigma'(Z^{\[2\]}) \\\\\\\\ \\downarrow \\\\ \\frac{dZ^{\[2\]}}{dJ} &= dA^{\[2\]} \\cdot A^{\[2\]} \\cdot (1 - A^{\[2\]}) \\end{align\*} $$ $$ \\begin{align\*} \\sigma(Z^{\[2\]}) &= \\frac{1}{1 - e^{Z^{\[2\]}}} = (1 - e^{-Z^{\[2\]}})^{-1} \\\\ \\downarrow \\\\ \\sigma'(Z^{\[2\]}) &= \\frac{d\\sigma(Z^{\[2\]})}{dZ^{\[2\]}} \\\\ \\downarrow \\\\ \\sigma'(Z^{\[2\]}) &= -\\frac{-1}{(1 - e^{Z^{\[2\]}})^2} \\cdot (-1) \\cdot e^{Z^{\[2\]}} \\\\ \\downarrow \\\\ \\sigma'(Z^{\[2\]}) &= \\frac{1}{1 - e^{Z^{\[2\]}}} \\cdot \\frac{e^{Z^{\[2\]}}}{1 - e^{Z^{\[2\]}}} \\\\ \\downarrow \\\\ \\sigma'(Z^{\[2\]}) &= \\sigma(Z^{\[2\]}) \\cdot (1 - \\sigma(Z^{\[2\]})) = A^{\[2\]} \\cdot (1 - A^{\[2\]}) \\end{align\*} $$

Now when we know the how and the why behind the calculation of the gradient with regard to the Z score, we can calculate the gradient with regard to the weight W. This is very important for updating the weight parameter value (for example, direction).

$$ \\begin{align\*} Z^{\[2\]} &= W^{\[2\]T} \\cdot A^{\[1\]} + b^{\[2\]} \\\\ \\downarrow \\\\ \\frac{db^{\[2\]}}{dZ^{\[2\]}} &= \\frac{dJ}{dZ^{\[2\]}} \\cdot \\frac{dZ^{\[2\]}}{db^{\[2\]}} \\quad \\text{using chain rule} \\\\ \\downarrow \\\\ db^{\[2\]} &= dZ^{\[2\]} \\cdot 1 + 0 \\quad \\text{using constant rule} \\\\ \\downarrow \\\\ db^{\[2\]} &= dZ^{\[2\]} \\end{align\*} $$

Now in this step, the only thing remaining is to calculate the gradient with regard to the bias, our second parameter b, in the hidden layer, layer 2.

$$ Z^{\[2\]} = W^{\[2\]T} \\cdot A^{\[1\]} + b^{\[2\]}\\\\ \\frac{db^{\[2\]}}{dJ} = \\frac{dJ}{dZ^{\[2\]}} \\cdot \\frac{dZ^{\[2\]}}{db^{\[2\]}} \\quad \\text{using chain rule}\\\\ db^{\[2\]} = dZ^{\[2\]} \\cdot 1 + 0 \\quad \\text{using constant rule}\\\\ db^{\[2\]} = dZ^{\[2\]} $$

Since b\[2\] is a bias term, its derivative is simply the sum of the gradients dZ\[2\] across all the training examples (which, in a vectorized implementation, is often done by summing dZ\[2\] across the m observations).

Once backpropogation is done, next step is to use these gradients as input for optimization algorithm like GD, SGD, or others to find out how the parameters should be updated.

So, we are finally ready to update the Weight and Bias parameters of the model in this pass.

Here is an example using the GD algorithm:

$$ W^{\[2\]} = W^{\[2\]} - \\eta \\cdot dW^{\[2\]} $$ $$ b^{\[2\]} = b^{\[2\]} - \\eta \\cdot db^{\[2\]} $$

Here the η represents the learning parameter assuming the simple GD optimization's algorithm (more on the optimization algorithms in later chapters).

In the next section, we will go into more detail about how you can use various optimization algorithms to train Deep Learning models.

![DALL-E-2024-01-19-23.07.43---A-hyper-stylized-artistic-representation-with-a-dominant-yellow-color-theme--blending-abstract-art-and-futuristic-concepts.-The-image-is-filled-with-e](https://www.freecodecamp.org/news/content/images/2024/01/DALL-E-2024-01-19-23.07.43---A-hyper-stylized-artistic-representation-with-a-dominant-yellow-color-theme--blending-abstract-art-and-futuristic-concepts.-The-image-is-filled-with-e.png)

Image Source: [LunarTech.ai][47]

## Chapter 4: Optimization Algorithms in AI

Once the gradient is computed via backpropagation, the next step is to use an optimization algorithm to adjust the weights to minimize the cost function.

To be clear, the optimization algorithm takes as input the calculated gradients and uses this to update model parameters.

These are the most popular optimization algorithms used when training Neural Networks:

-   Gradient Descent (GD)
-   Stochastic Gradient Descent (SGD)
-   SGD with Momentum
-   RMSProp
-   Adam Optimizer

Knowing the fundamentals of the Deep Learning models and learning how to train those models is definitely a big part of Deep Learning. If you have read so far and the math hasn’t made you tired, congratulations! You have grasped some challenging topics. But that’s only part of the job.

In order to use your Deep Learning model to solve actual problems, you'll need to optimize it after you have established its baseline. That is, you need to optimize the set of parameters in your Machine Learning model to find the set of optimal parameters that result in the best performing model (all things being equal).

So, to optimize or to tune your Machine Learning model, you need to perform hyperparameter optimization. By finding the optimal combination of hyperparameter values, we can decrease the errors the model produces and build the most accurate neural network.

A model's hyperparameter is a constant in the model. It’s external to the model, and its value cannot be estimated from data (but rather should be specified in advance before the model is trained). For instance, weights and bias parameters in neural network are parameters we want to optimize.

NOTE: As optimization algorithms are used across all neural networks, I thought it will be useful to provide you the Python code which you can implement to perform neural network optimization manually.

Just keep in mind that this is not what you will do in practice, as there are libraries for this purpose. Still, seeing the Python code will help you to understand the actual workings of these algorithms like GD, SGD, SGD with Momentum, Adam, AdamW much better.

I will provide you the formulas, explanations, as well as the Python code so you can see that is the Python code behind the actual functions of the libraries that implement these optimization algorithms.

### Gradient Descent (GD)

The Batch Gradient Descent algorithm (often just referred to as Gradient Descent or GD), computes the gradient of the Loss Function **J(θ)** with respect to the target parameter using the entire training data.

We do this by first predicting the values for all observations in each iteration, and comparing them to the given value in the training data.

These two values are used to calculate the prediction error term per observation which is then used to update the model parameters. This process continues until the model converges.

The gradient or the first order derivative of the loss function can be expressed as follows:

$$\\nabla\_{\\theta} J(\\theta)$$

Then, this gradient is used to update the previous iterations’ value of the target parameter. That is:

$$ \\theta = \\theta - \\eta \\cdot \\nabla\_{\\theta} J(\\theta) $$

In this equation:

-   _θ_ represents the parameter(s) or weight(s) of a model that you are trying to optimize. In many contexts, especially in neural networks, _θ_ can be a vector containing many individual weights.
-   _η_ is the learning rate. It’s a hyperparameter that dictates the step size at each iteration while moving towards a minimum of the cost function. A smaller learning rate might make the optimization more precise, but could also slow down the convergence process. A larger learning rate might speed up convergence, but risks overshooting the minimum. This can be \[0,1\] but is is usually a number between (0.001 and 0.04)
-   ∇_J_(_θ_) is the gradient of the cost function _J_ with respect to the parameter θ. It indicates the direction and magnitude of the steepest increase of _J_. By subtracting this from the current parameter value (multiplied by the learning rate), we adjust _θ_ in the direction of the steepest decrease of _J_.

In terms of Neural Networks, in the previous section we saw the usage of this simple optimisation technique.

There are two major disadvantages to GD which make this optimization technique not so popular, especially when dealing with large and complex datasets.

Since in each iteration the entire training data should be used and stored, the computation time can be very large resulting in incredibly slow process. On top of that, storing that large amount of data results in memory issues, making GD computationally heavy and slow.

You can learn more in this [Gradient Descent Interview Tutorial][48].

#### Gradient Descent in Python

Let's look at an example of how to use Gradient Descent in Python:

```
def update_parameters_with_gd(parameters, grads, learning_rate):
    """
    Update parameters using a simple gradient descent update rule.
    
    Arguments:
    parameters -- python dictionary containing your parameters 
                  (e.g., {"W1": W1, "b1": b1, "W2": W2, "b2": b2, ..., "WL": WL, "bL": bL})
    grads -- python dictionary containing your gradients to update each parameters 
             (e.g., {"dW1": dW1, "db1": db1, "dW2": dW2, "db2": db2, ..., "dWL": dWL, "dbL": dbL})
    learning_rate -- the learning rate, scalar.
    
    Returns:
    parameters -- python dictionary containing your updated parameters 
    """

    L = len(parameters) // 2 # number of layers in the neural networks

    # Update rule for each parameter
    for l in range(L):
        parameters["W" + str(l+1)] -= learning_rate * grads["dW" + str(l+1)]
        parameters["b" + str(l+1)] -= learning_rate * grads["db" + str(l+1)]
        
    return parameters
```

This is a Python code snippet implementing gradient descent (GD) algorithm for updating parameters in a neural network which take these three arguments:

1.  **parameters**: dictionary containing current parameters of the neural network (for example, weights and biases for each layer of neural network)
2.  **grads**: dictionary containing gradients of the parameters, calculated during backpropagation
3.  **learning\_rate**: scalar value representing the learning rate, which controls the step size of the parameter updates.

This code iterates through the layers of the neural network and updates the weights (W) and biases (b) for each layer using the following update rule for each parameter:

After looping through all the layers in neural network, it returns the updated parameters. This process helps the neural network to learn and adjust its parameters to minimize the loss during training, ultimately improving its performance and resulting in highly accurate predictions.

### Stochastic Gradient Descent (SGD)

The Stochastic Gradient Descent (SGD) method, also known as Incremental Gradient Descent, is an iterative approach for solving optimisation problems with a differential objective function, exactly like GD.

But unlike GD, SGD doesn’t use the entire batch of training data to update the parameter value in each iteration. The SGD method is often referred to as the stochastic approximation of the gradient descent. It aims to find the extreme or zero points of the stochastic model containing parameters that cannot be directly estimated.

SGD minimises this cost function by sweeping through data in the training dataset and updating the values of the parameters in every iteration.

In SGD, all model parameters are improved in each iteration step with only one training sample or a mini-batch. So, instead of going through all training samples at once to modify model parameters, the SGD algorithm improves parameters by looking at a single and **randomly** sampled training set (hence the name **[Stochastic][49]**, which means "involoving chance or probability").

It adjusts the parameters in the opposite direction of the gradient by a step proportional to the learning rate. The update at time step `t` can be given by the following formula:

$$ \\theta\_{t+1} = \\theta\_t - \\eta \\nabla\_{\\theta} J(\\theta\_t) $$

In this equation:

-   _θ_ represents the parameter(s) or weight(s) of a model that you are trying to optimize. In many contexts, especially in neural networks, _θ_ can be a vector containing many individual weights.
-   _η_ is the learning rate. It’s a hyperparameter that dictates the step size at each iteration while moving towards a minimum of the cost function. A smaller learning rate might make the optimization more precise but could also slow down the convergence process. A larger learning rate might speed up convergence but risks overshooting the minimum.
-   ∇_J_(_θt_) is the gradient of the cost function _J_ with respect to the parameter θ for a given input _x_(_i_) and its corresponding target output _y_(_i_) at step t. It indicates the direction and magnitude of the steepest increase of _J_. By subtracting this from the current parameter value (multiplied by the learning rate), we adjust _θ_ in the direction of the steepest decrease of _J_.
-   _x_(_i_) represents the _ith_ input data sample from your dataset.
-   _y_(_i_) is the true target output for the _ith_input data sample.

In the context of Stochastic Gradient Descent (SGD), the update rule applies to individual data samples _x_(_i_) and _y_(_i_) rather than the entire dataset, which would be the case for batch Gradient Descent.

This single step improves the speed of the process of finding the global minima of the optimization problem and this is what differentiates SGD from GD. So, SGD consistently adjusts the parameters with an attempt to move in the direction of the global minimum of the objective function.

In SGD, all model parameters are improved in each iteration step with only one training sample. So, instead of going through all training samples at once to modify model parameters, SGD improves parameters by looking at a single training sample.

Though SGD addresses the slow computation time issue of GD, because it scales well with both big data and with a size of the model, it is known as a “bad optimizer” because it’s prone to finding a local optimum instead of a global optimum.

SGD can be noisy due to this stochastic nature of it, as it is using gradients calculated from only a subset of the data (a mini-batch or single point). This can lead to variance in the parameter updates.

For more details on SGD, you can check out this [tutorial][50].

### Example of SGD in Python

Now let's see how to implement it in Python:

```python
def update_parameters_with_sgd(parameters, grads, learning_rate):
    """
    Update parameters using SGD
    
    Input Arguments:
    parameters -- dictionary containing your parameters (e.g., weights, biases)
    grads -- dictionary containing gradients to update each parameters
    learning_rate -- the learning rate, scalar.
    
    Output:
    parameters -- dictionary containing your updated parameters
    """
    
    for key in parameters:
        # Update rule for each parameter
        parameters[key] = parameters[key] - learning_rate * grads['d' + key]
        
    return parameters
```

Here's what's going on in this code:

-   `parameters` is a dictionary that holds the weights and biases of your network (for example, `parameters['W1']`, `parameters['b1']`, and so on)
-   `grads` holds the gradients of the weights and biases (for example, `grads['dW1']`, `grads['db1']`, and so on).
-   The function `initialize_velocity()` is used to create the velocity dictionary before you start training the network with momentum.
-   The `update_parameters_with_momentum()` function then uses this velocity in conjunction with the gradients to update the parameters.

### **SGD with Momentum**

When the error function is complex and non-convex, instead of finding the global optimum, the SGD algorithm mistakenly moves in the direction of numerous local minima.

In order to address this issue and further improve the SGD algorithm, various methods have been introduced. One popular way of escaping a local minimum and moving in the right direction of a global minimum is **SGD with Momentum**.

The goal of the SGD method with momentum is to accelerate gradient vectors in the direction of the global minimum, resulting in faster convergence.

The idea behind the momentum is that the model parameters are learned by using the directions and values of previous parameter adjustments. Also, the adjustment values are calculated in such a way that more recent adjustments are weighted heavier (they get larger weights) compared to the very early adjustments (they get smaller weights).

Basically, SGD with momentum is designed to accelerate the convergence of SGD and to reduce its oscillations. So, it introduces a velocity term, which is a fraction of the previous update. This exact step helps the optimizer build up speed in directions with persistent, consistent gradients, and dampens updates in fluctuating directions.

The update rules for momentum are as follows, where you first must compute the gradient (as with plain SGD) and then update velocity and the parameter theta.

$$ v\_{t+1} = \\gamma v\_t + \\eta \\nabla\_{\\theta} J(\\theta\_t) $$ $$ \\theta\_{t+1} = \\theta\_t - v\_{t+1} $$

The momentum _γ_ which is typically a value between 0.5 & 0.9, determines how much of past gradients will be retained and used in the update.

The reason for this difference is that with the SGD method we do not determine the exact derivative of the loss function, but we estimate it on a small batch. Since the gradient is noisy, it is likely that it will not always move in the optimal direction.

The momentum helps then to estimate those derivatives more accurately, resulting in better direction choices when moving towards the global minimum.

Another reason for the difference in the performance of classical SGD and SGD with momentum lies in the area referred as Pathological Curvature, also called the **ravine area**.

Pathological Curvature or Ravine Area can be represented by the following graph. The orange line represents the path taken by the method based on the gradient while the dark blue line represents the ideal path in towards the direction of ending the global optimum.

![image-151](https://www.freecodecamp.org/news/content/images/2023/12/image-151.png)

Optimization Paths: Gradient Descent vs. Ideal Trajectory to Global Optimum

To visualise the difference between the SGD and SGD Momentum, let’s look at the following figure:

![image-152](https://www.freecodecamp.org/news/content/images/2023/12/image-152.png)

Comparing Gradient Descent Paths in Different Optimization Landscapes

On the left hand-side is the SGD method without Momentum. On the right hand-side is the SGD with Momentum. The orange pattern represents the path of the gradient in a search of the global minimum. As you can see, in the left figure we have more of these occiliations compared to the right one, and that's the impact of Momentum, where we accelerate the training and the algorithm then make less of this movements.

The idea behind the momentum is that the model parameters are learned by using the directions and values of previous parameter adjustments. Also, the adjustment values are calculated in such a way that more recent adjustments are weighted heavier (they get larger weights) compared to the very early adjustments (they get smaller weights).

#### Example of SGD with Momentum in Python

Let's see what this looks like in code:

```python
def initialize_velocity(parameters):
    """
    Initializes the velocity as a python dictionary with:
                - keys: "dW1", "db1", ..., "dWL", "dbL"
                - values: numpy arrays of zeros of the same shape as the corresponding gradients/parameters.
    """
    L = len(parameters) // 2 # number of layers in the neural networks
    v = {}
    
    for l in range(L):
        v["dW" + str(l+1)] = np.zeros_like(parameters["W" + str(l+1)])
        v["db" + str(l+1)] = np.zeros_like(parameters["b" + str(l+1)])
        
    return v

def update_parameters_with_momentum(parameters, grads, v, beta, learning_rate):
    """
    Update parameters using Momentum
    
    Arguments:
    parameters -- python dictionary containing your parameters
    grads -- python dictionary containing your gradients for each parameters
    v -- python dictionary containing the current velocity
    beta -- the momentum hyperparameter, scalar
    learning_rate -- the learning rate, scalar
    
    Returns:
    parameters -- python dictionary containing your updated parameters 
    v -- python dictionary containing your updated velocities
    """
    
    L = len(parameters) // 2 # number of layers in the neural networks
    
    # Momentum update for each parameter
    for l in range(L):
        # compute velocities
        v["dW" + str(l+1)] = beta * v["dW" + str(l+1)] + (1 - beta) * grads["dW" + str(l+1)]
        v["db" + str(l+1)] = beta * v["db" + str(l+1)] + (1 - beta) * grads["db" + str(l+1)]
        # update parameters
        parameters["W" + str(l+1)] = parameters["W" + str(l+1)] - learning_rate * v["dW" + str(l+1)]
        parameters["b" + str(l+1)] = parameters["b" + str(l+1)] - learning_rate * v["db" + str(l+1)]
        
    return parameters, v
```

In this code we have two functions for implementing the momentum-based gradient descent algorithm (SGD with momentum):

1.  **initialize\_velocity(parameters)**: This function initializes the velocity for each parameter in the neural network. It takes the current parameters as input and returns a dictionary (v) with keys for gradients ("dW1", "db1", ..., "dWL", "dbL") and initializes the corresponding values as numpy arrays filled with zeros.
2.  **update\_parameters\_with\_momentum(parameters, grads, v, beta, learning\_rate)**: This function updates the parameters using Momentum optimization technique. It takes the following arguments:
3.  parameters: dictionary containing  current parameters of the neural network.
4.  **grads**: dictionary containing the gradients of the parameters.
5.  **v:** dictionary containing the current velocities of the parameters (initialized using the **initialize\_velocity** (function).
6.  **beta**: momentum hyperparameter, a scalar that controls the influence of past gradients on the updates.
7.  **learning\_rate**: learning rate, a scalar controlling the step size of the parameter updates.

Inside the function, it iterates through the layers of the neural network and performs the following steps for each parameter:

-   Computes new velocity using the momentum formula.
-   Updates parameter using new velocity and learning rate.
-   Finally, it returns the updated parameters and velocities.

### RMSProp

Root Mean Square Propagation, commonly called RMSprop, is an optimization method with an adaptive learning rate. It was proposed by Geoff Hinton in his Coursera class.

RMSprop adjusts learning rate for each parameter by dividing the learning rate for a weight by a running average of magnitudes of recent gradients for that weight.

RMSprop can be defined mathematically as follows:

$$ v\_t = \\beta v\_{t-1} + (1 - \\beta) g\_t^2 $$ $$ \\theta\_{t+1} = \\theta\_t - \\frac{\\eta}{\\sqrt{v\_t + \\epsilon}} \\cdot g\_t $$

-   _vt_​ is the running average of the squared gradients.
-   _β_ is the decay rate that controls the moving average (usually set to 0.9).
-   _η_ is the learning rate.
-   _ϵ_ is a small scalar used to prevent division by zero (usually around 10^-8).
-   _gt_​ is the gradient at time step _t_, and _θt_​ is parameter vector at time step _t_.

The algorithm first calculates the running average of the squared gradients (the hessian) for each parameter: v\_t at step t.

Then it divides the learning rate eta by the square root of this average velocity (element-wise division if the parameters are vectors or matrices). Then it uses this in the same step to update the parameters.

### Example of RMSProp in Python

Here's an example of how it works in Python:

```python
def update_parameters_with_rmsprop(parameters, grads, s, learning_rate, beta, epsilon):
    """
    Update parameters using RMSprop.
    
    Arguments:
    parameters -- python dictionary containing your parameters 
                    (e.g., {"W1": W1, "b1": b1, "W2": W2, "b2": b2})
    grads -- python dictionary containing your gradients to update each parameters 
                    (e.g., {"dW1": dW1, "db1": db1, "dW2": dW2, "db2": db2})
    s -- python dictionary containing the running average of the squared gradients 
                    (e.g., {"dW1": s_dW1, "db1": s_db1, "dW2": s_dW2, "db2": s_db2})
    learning_rate -- the learning rate, scalar.
    beta -- the momentum hyperparameter, scalar.
    epsilon -- small number to avoid division by zero, scalar.
    
    Returns:
    parameters -- python dictionary containing your updated parameters 
    s -- python dictionary containing the updated running average of the squared gradients
    """
    
    L = len(parameters) // 2 # number of layers in the neural networks

    # Update rule for each parameter
    for l in range(L):
        # Compute moving average of the squared gradients
        s["dW" + str(l+1)] = beta * s["dW" + str(l+1)] + (1 - beta) * np.square(grads["dW" + str(l+1)])
        s["db" + str(l+1)] = beta * s["db" + str(l+1)] + (1 - beta) * np.square(grads["db" + str(l+1)])
        
        # Update parameters
        parameters["W" + str(l+1)] -= learning_rate * grads["dW" + str(l+1)] / (np.sqrt(s["dW" + str(l+1)]) + epsilon)
        parameters["b" + str(l+1)] -= learning_rate * grads["db" + str(l+1)] / (np.sqrt(s["db" + str(l+1)]) + epsilon)

    return parameters, s
```

This code defines a function for updating neural network parameters using the RMSprop optimization technique. Here's a summary of the function:

-   **update\_parameters\_with\_rmsprop(parameters, grads, s, learning\_rate, beta, epsilon)**:  function updates parameters of a neural network using RMSprop.

It takes the following arguments:

-   **parameters**: dictionary containing current parameters of the neural network.
-   **grads**: dictionary containing gradients of the parameters.
-   **s:** dictionary containing running average of squared gradients for each parameter.
-   **learning\_rate**: learning rate, a scalar.
-   **beta**: momentum hyperparameter, a scalar.
-   **epsilon**: A small number added to prevent division by zero, a scalar.

Inside this function, the code iterates through the layers of the neural network and performs the following steps for each parameter:

-   Computes the moving average of the squared gradients for both weights (W) and biases (b) using the RMSprop formula.
-   Updates the parameters using the computed moving averages and the learning rate, with an additional epsilon term in the denominator to avoid division by zero.

Finally, the code returns updated parameters and updated running average of the squared gradients (s).

RMSprop is an optimization technique that adapts the learning rate for each parameter based on the history of squared gradients. It helps stabilize and accelerate training, particularly when dealing with sparse or noisy gradients.

### Adam Optimizer

Another popular technique for enhancing the SGD optimization procedure is the **Adaptive Moment Estimation (Adam)** introduced by Kingma and Ba (2015). Adam basically combines SGD momentum with RMSProp.

The main difference compared to the SGD with momentum, which uses a single learning rate for all parameter updates, is that the Adam algorithm defines different learning rates for different parameters.

The algorithm calculates the individual adaptive learning rates for each parameter based on the estimates of the first two moments of the gradients (first and the second order derivative of the Loss function).

So, each parameter has a unique learning rate, which is being updated using the exponential decaying average of the first moments (the mean) and second moments (the variance) of the gradients.

Basically, Adam, computes individual adaptive learning rates for different parameters from estimates of 1st and 2nd moments of gradients.

The update rules for the Adam optimizer can be expressed as follows:

1.  Calculate running averages of both the gradients and squared gradients
2.  Adjust these running averages for a bias factor
3.  Use these running averages to update the learning rate for each parameter individually

Mathematically, these steps are represented as follows:

$$ m\_t = \\beta\_1 m\_{t-1} + (1 - \\beta\_1) g\_t $$ $$ v\_t = \\beta\_2 v\_{t-1} + (1 - \\beta\_2) g\_t^2 $$ $$ \\hat{m}\_t = \\frac{m\_t}{1 - \\beta\_1^t} $$ $$ \\hat{v}\_t = \\frac{v\_t}{1 - \\beta\_2^t} $$ $$ \\theta\_{t+1} = \\theta\_t - \\alpha \\cdot \\frac{\\hat{m}\_t}{\\sqrt{\\hat{v}\_t} + \\epsilon} $$

-   _mt_​ and _vt_ are estimates of the first moment (the mean) and the second moment (the uncentered variance) of the gradients, respectively.
-   _m\_hat_ and v\_hat are bias-corrected versions of these estimates.
-   _β_1​ and _β_2​ are the exponential decay rates for these moment estimates (usually set to 0.9 & 0.999, respectively).
-   _α_ is the learning rate.
-   _ϵ_ is a small scalar used to prevent division by zero (usually around 10^(–8)).

### Example of Adam in Python

Here's an example of using Adam in Python:

```python
def initialize_adam(parameters) :
    """
    Initializes v and s as two python dictionaries with:
                - keys: "dW1", "db1", ..., "dWL", "dbL"
                - values: numpy arrays of zeros of the same shape as the corresponding gradients/parameters.
    """
    
    L = len(parameters) // 2 # number of layers in the neural networks
    v = {}
    s = {}
    
    for l in range(L):
        v["dW" + str(l+1)] = np.zeros_like(parameters["W" + str(l+1)])
        v["db" + str(l+1)] = np.zeros_like(parameters["b" + str(l+1)])
        s["dW" + str(l+1)] = np.zeros_like(parameters["W" + str(l+1)])
        s["db" + str(l+1)] = np.zeros_like(parameters["b" + str(l+1)])
    
    return v, s

def update_parameters_with_adam(parameters, grads, v, s, t, learning_rate=0.01,
                                beta1=0.9, beta2=0.999, epsilon=1e-8):
    """
    Update parameters using Adam
    
    Arguments:
    parameters -- python dictionary containing your parameters:
                    parameters['W' + str(l)] = Wl
                    parameters['b' + str(l)] = bl
    grads -- python dictionary containing your gradients for each parameters:
                    grads['dW' + str(l)] = dWl
                    grads['db' + str(l)] = dbl
    v -- Adam variable, moving average of the first gradient, python dictionary
    s -- Adam variable, moving average of the squared gradient, python dictionary
    learning_rate -- the learning rate, scalar.
    beta1 -- Exponential decay hyperparameter for the first moment estimates 
    beta2 -- Exponential decay hyperparameter for the second moment estimates 
    epsilon -- hyperparameter preventing division by zero in Adam updates

    Returns:
    parameters -- python dictionary containing your updated parameters 
    v -- Adam variable, moving average of the first gradient, python dictionary
    s -- Adam variable, moving average of the squared gradient, python dictionary
    """
    
    L = len(parameters) // 2                 # number of layers in the neural networks
    v_corrected = {}                         # Initializing first moment estimate, python dictionary
    s_corrected = {}                         # Initializing second moment estimate, python dictionary
    
    # Perform Adam update on all parameters
    for l in range(L):
        # Moving average of the gradients.
        v["dW" + str(l+1)] = beta1 * v["dW" + str(l+1)] + (1 - beta1) * grads["dW
```

In this code we implement Adam algorithm, consisting of two functions:

1.  **initialize\_adam**(parameters): This function initializes the Adam optimizer variables `v` and `s` as two Python dictionaries. It takes the current parameters as input and returns `v` and `s`, both of which are dictionaries with keys for gradients ("dW1", "db1", ..., "dWL", "dbL"). The values are numpy arrays filled with zeros and have the same shape as the corresponding gradients/parameters.
2.  **update\_parameters\_with\_adam(parameters, grads, v, s, t, learning\_rate=0.01, beta1=0.9, beta2=0.999, epsilon=1e-8)**: This function updates the parameters of a neural network using the Adam optimization technique. It takes the following arguments:
3.  **parameters**: A dictionary containing the current parameters of the neural network.
4.  **grads**: A dictionary containing the gradients of the parameters.
5.  **v**: A dictionary representing the moving average of the first gradient moments.
6.  **s:** A dictionary representing the moving average of the squared gradient moments.
7.  **t:** A scalar representing the current time step (used for bias correction).
8.  **learning\_rate**: The learning rate, a scalar.
9.  **beta1**: The exponential decay hyperparameter for the first moment estimates.
10.  **beta2**: The exponential decay hyperparameter for the second moment estimates.
11.  **epsilon**: A small number added to prevent division by zero in Adam updates.

Inside this function, code iterates through layers of the neural network and performs Adam updates for each parameter. This includes computing moving averages of gradients and squared gradients, and using these values to update the parameters. It also performs bias correction to adjust the moving averages.

Finally, code returns the updated parameters, `v` (first moment estimates), and `s` (second moment estimates).

### AdamW

AdamW (the 'W' stands for 'Weight Decay') is a optimization algorithm which modifies the way weight decay is integrated into the original Adam algorithm. This seemingly small change has significant implications for the training process, particularly in how it manages regularization to prevent overfitting.

This step has a crucial impact in making deep learning model more generalizable, for building models that generalize well to new, unseen data.

In traditional optimizers like SGD, the weight decay directly regularizes the model's weight parameters. But, in Adam, this process is somewhat conflated with the optimizer's adaptive learning rates.

AdamW decouples weight decay from the learning rates, reinstating the direct regularization effect seen in SGD. This results in more effective regularization and, often, better performance in training deep neural networks.

If you want to see the actual mathematical representation where I am comparing Adam and AdamW, you can check out this [**Tutorial on YouTube**][51].

By choosing AdamW, you can enjoy the benefits of adaptive learning rates while maintaining a more robust regularization mechanism.

This optimization algorithm has quickly gained popularity in the machine learning community, particularly among those working on large-scale models and complex datasets where every bit of optimization efficiency counts.

### AdamW in Python

```
import numpy as np

def initialize_adamw(parameters):
    """
    Initializes v, s, and w as three python dictionaries with:
                - keys: "dW1", "db1", ..., "dWL", "dbL"
                - values: numpy arrays of zeros of the same shape as the corresponding gradients/parameters.
    """
    
    L = len(parameters) // 2  # number of layers in the neural network
    v = {}
    s = {}
    w = {}
    
    for l in range(L):
        v["dW" + str(l+1)] = np.zeros_like(parameters["W" + str(l+1)])
        v["db" + str(l+1)] = np.zeros_like(parameters["b" + str(l+1)])
        s["dW" + str(l+1)] = np.zeros_like(parameters["W" + str(l+1)])
        s["db" + str(l+1)] = np.zeros_like(parameters["b" + str(l+1)])
        w["W" + str(l+1)] = np.copy(parameters["W" + str(l+1)])
    
    return v, s, w

def update_parameters_with_adamw(parameters, grads, v, s, w, t, learning_rate=0.01,
                                beta1=0.9, beta2=0.999, epsilon=1e-8, weight_decay=0.01):
    """
    Update parameters using AdamW (Adam with weight decay)
    
    Arguments:
    parameters -- python dictionary containing your parameters:
                    parameters['W' + str(l)] = Wl
                    parameters['b' + str(l)] = bl
    grads -- python dictionary containing your gradients for each parameter:
                    grads['dW' + str(l)] = dWl
                    grads['db' + str(l)] = dbl
    v -- Adam variable, moving average of the first gradient, python dictionary
    s -- Adam variable, moving average of the squared gradient, python dictionary
    w -- Weight parameters for weight decay, python dictionary
    t -- Current time step (used for bias correction), scalar
    learning_rate -- The learning rate, scalar
    beta1 -- Exponential decay hyperparameter for the first moment estimates 
    beta2 -- Exponential decay hyperparameter for the second moment estimates 
    epsilon -- Hyperparameter preventing division by zero in Adam updates
    weight_decay -- Weight decay hyperparameter, scalar

    Returns:
    parameters -- python dictionary containing your updated parameters 
    v -- Adam variable, moving average of the first gradient, python dictionary
    s -- Adam variable, moving average of the squared gradient, python dictionary
    """
    
    L = len(parameters) // 2  # number of layers in the neural network
    v_corrected = {}          # Initializing first moment estimate, python dictionary
    s_corrected = {}          # Initializing second moment estimate, python dictionary
    
    # Perform AdamW update on all parameters
    for l in range(L):
        # Moving average of the gradients
        v["dW" + str(l+1)] = beta1 * v["dW" + str(l+1)] + (1 - beta1) * grads["dW" + str(l+1)]
        v["db" + str(l+1)] = beta1 * v["db" + str(l+1)] + (1 - beta1) * grads["db" + str(l+1)]
        
        # Moving average of the squared gradients
        s["dW" + str(l+1)] = beta2 * s["dW" + str(l+1)] + (1 - beta2) * np.square(grads["dW" + str(l+1)])
        s["db" + str(l+1)] = beta2 * s["db" + str(l+1)] + (1 - beta2) * np.square(grads["db" + str(l+1)])
        
        # Bias correction for moving averages
        v_corrected["dW" + str(l+1)] = v["dW" + str(l+1)] / (1 - np.power(beta1, t))
        v_corrected["db" + str(l+1)] = v["db" + str(l+1)] / (1 - np.power(beta1, t))
        s_corrected["dW" + str(l+1)] = s["dW" + str(l+1)] / (1 - np.power(beta2, t))
        s_corrected["db" + str(l+1)] = s["db" + str(l+1)] / (1 - np.power(beta2, t))
        
        # Update parameters with weight decay
        parameters["W" + str(l+1)] -= learning_rate * (v_corrected["dW" + str(l+1)] / (np.sqrt(s_corrected["dW" + str(l+1)]) + epsilon) + weight_decay * w["W" + str(l+1)])
        parameters["b" + str(l+1)] -= learning_rate * (v_corrected["db" + str(l+1)] / (np.sqrt(s_corrected["db" + str(l+1)]) + epsilon) + weight_decay * w["W" + str(l+1)])
    
    return parameters, v, s
```

In this  code  we implement AdamW optimization algorithm, which is an extension of the Adam optimizer with added weight decay regularization. Let's go through each part of the code:

-   **initialize\_adamw(parameters)**: This function initializes AdamW optimizer variables. It takes all the current parameters of a neural network as input and returns three dictionaries: `v`, `s`, and `w`.

Here's what each of these dictionaries represents:

-   **v:** A dictionary for the moving average of the first gradient moments. It has keys like "dW1", "db1", ..., "dWL", "dbL", and the values are initialized as numpy arrays filled with zeros of the same shape as the corresponding gradients/parameters.
-   **s:** A dictionary for the moving average of the squared gradient moments, similar to `v`.
-   **w**: A dictionary for weight parameters used for weight decay. It is initialized with a copy of the current weight parameters.

**update\_parameters\_with\_adamw(parameters, grads, v, s, w, t, learning\_rate=0.01, beta1=0.9, beta2=0.999, epsilon=1e-8, weight\_decay=0.01)**: This function performs AdamW as we saw in the equations, to update on the neural network parameters. It takes several arguments:

-   **parameters**: A dictionary containing the current parameters of the neural network.
-   **grads**: A dictionary containing the gradients of the parameters, calculated during backpropagation.
-   **v**: dictionary representing the moving average of the first gradient moments.
-   **s**: dictionary representing the moving average of the squared gradient moments.
-   **w**: dictionary containing weight parameters for weight decay.
-   **t**: scalar representing the current time step (used for bias correction).
-   **learning\_rate**: The learning rate, a scalar.
-   **beta1**:  exponential decay hyperparameter for the first moment estimates (typically close to 1).
-   **beta2**: exponential decay hyperparameter for the second moment estimates (typically close to 1).
-   **epsilon**: small number added to prevent division by zero in Adam updates.
-   **weight\_decay**: weight decay hyperparameter, which controls the strength of L2 regularization.

Inside the function, the following steps are performed for each parameter:

1.  Update `v` and `s` using the gradients, similar to the standard Adam update.
2.  Perform bias correction on `v` and `s` to account for the fact that they are initialized with zeros and may be biased towards zero.
3.  Update parameters with weight decay regularization. Weight decay encourages smaller parameter values by subtracting a fraction of the current weight from the update.
4.  Return the updated parameters, `v`, and `s`.

![DALL-E-2024-01-19-23.13.52---A-hyper-stylized-artistic-representation-with-a-dominant-yellow-color-theme--blending-abstract-art-and-futuristic-concepts--with-slight-variations.-Th](https://www.freecodecamp.org/news/content/images/2024/01/DALL-E-2024-01-19-23.13.52---A-hyper-stylized-artistic-representation-with-a-dominant-yellow-color-theme--blending-abstract-art-and-futuristic-concepts--with-slight-variations.-Th.png)

Image Source: [LunarTech.ai][52]

## Chapter 5: Regularization and Generalization

In this chapter, we'll dive into some important concepts in Deep Learning, like:

-   Overfitting & underfitting in neural networks
-   Regularization techniques: Dropout, L1/L2 regularization, batch normalization
-   Data augmentation & its role in improving model robustness

Let's get started.

### The Dropout Regularization Technique

Dropout is one of the most popular regularization techniques used to prevent overfitting in neural networks. The way the algorithm works is that it randomly “drops out” (that is, it sets to zero) a number of output features of the layer during training.

During the training process, after calculating the activations, the algorithm randomly sets fraction _p_ (the dropout rate) of the activations to zero. These features are then not being used during the training process in that pass. This dropout rate p is a hyperparameter typically set between 0.2 and 0.5. **Note that this drop-out rate is only used during training.**

For each layer _l_, for each training example _i_, and for each neuron/unit _j_, the dropout can be mathematically represented as follows:  

![image-156](https://www.freecodecamp.org/news/content/images/2023/12/image-156.png)

Where:

-   _rj_(_l_)​ is a random variable that follows Bernoulli distribution, where the probability of not being dropped out (success: 1) is 1−_p_.
-   _aj_(_l_)​ is the activation of neuron _j_ in layer _l_.
-   _a_~_j_(_l_)​ is the activation of neuron _j_ after applying dropout.

During backpropagation in the training process, the gradients are only passed through the neurons that were not dropped out (when there was a success in Bernoulli trial). Remember that this drop-out rate is only used during training.

**Testing Adjustment:** During testing process, the dropout is not applied. Instead, the activations are scaled down by a factor of _p_ to account for the effect of dropout during training process. This is necessary because during training, on average, each unit is only active with probability 1−_p_.

![image-157](https://www.freecodecamp.org/news/content/images/2023/12/image-157.png)

This ensures that the expected sum of the activations is the same during training and test time.

Dropout effectively creates a “thinned” network with a different architecture for each training step. Because the network architecture is different for each training sample as we randomly turn off some of the neurons, this can be seen as of training a collection of networks with shared weights.

During testing, you get the benefit of averaging the effects of these different networks, which tends to reduce overfitting. This is because it introduces beat bias, but more importantly, it significantly reduces variance when the model is used for prediction. Here’s why:

#### Introducing Bias

By dropping out different subsets of neurons with rate p, the network is then forced to learn more robust features that are useful in conjunction with many different random subsets of the other neurons.

This adjustment might lead to a slightly higher bias during training because the network is less likely to learn patterns that are highly specific to the training data (which can be thought of as noise).

#### Decreasing Variance

Dropout reduces the variance by preventing the network from becoming too fitted to the training data. It reduces the risk that the network relies on any one feature, thereby ensuring that the model generalizes better to unseen data.

This is common to ensemble methods in machine learning like Boosting, Random Forest, where averaging of different models’ predictions leads to a reduction in variance.

### **Ridge Regularization (L2 Regularization)**

Lasso and Ridge regularization are techniques originally developed for linear models, but they can also be applied to deep learning. In deep learning, these regularization methods work similarly by adding a penalty to the loss function, but they have to be adapted to the context of neural networks. Here’s how they function in deep learning:

Ridge regularization, also referred as L2 regularization adds a penalty equal to the square of the magnitude of coefficients as shown below. This L\_L2 shows the penalization term that is added to the loss function of the nerual network For neural networks, this means the penalty is the sum of the squares of all the weights in the network.

$$ L2 = \\lambda \\sum w\_i^2 $$

where lambda is the penalization parameter, w\_i are the weights of the neural network.

The effect of this is that it encourages the weights to be small but doesn’t force them to zero.

This is useful for deep learning models where we don’t necessarily want to perform feature selection (reduce dimension of the model) but just want to prevent overfitting by discouraging overly complex models that memorizes the training data and not generalizable.

This regularization term is controlled by a hyperparameter, often denoted by the Greek letter λ, which determines the strength of this penalty. As λ increases, penalty for larger weights increases, and the model is pushing towards smaller weights.

### **Lasso Regularization (L1 Regularization)**

Lasso stands for Least Absolute Shrinkage and Selection Operator Regularization, also known as L1 regularization based on L1 norm.

L1 regularization adds a penalty equal to the absolute value of the magnitude of coefficients (the sum of them). The formula below shows the L\_L1 penalization term added to the loss function of the neural network. The notions, are the same as in case of the Ridge Regularization. This translates to neural networks in deep learning as the sum of the absolute values of all the weights.

$$ L1 = \\lambda \\sum |w\_i| $$

L1 regularization drives some weights to be exactly zero, thus achieving sparse models. In deep learning, this can lead to sparsity within the weights, effectively performing a form of feature selection by allowing the model to ignore certain inputs.

Similar to L2 regularization, the strength of L1 regularization is controlled by a hyperparameter, which when increased, can lead to more weights being set to zero.

L1 and L2 regularization can be used individually or combined in what’s known as Elastic Net regularization as a way to regularize the network.

Using these regularization techniques can improve the generalization of deep learning models. But it’s also important to consider other techniques more common in deep learning, such as dropout and batch normalization – or use all of them together (which can sometimes be more effective in preventing overfitting in large and deep neural networks).

If you want to learn more details about L1/L2 regularisation make sure to check this [video][53] and this [tutorial][54] to see how these regularization techniques penalize the weights in neural network which are part of my free [Deep Learning Interview Preparation Course][55].

### **Batch Normalization**

Batch Normalization is another important technique used in Deep Learning that, while not a regularization method in the traditional sense, has an indirect regularization effect.

This technique normalizes the inputs of each layer in such a way that they have a mean output activation of zero, and s standard deviation of one. Basically like Gaussian Distribution – which is the reason why it’s called Normalization, as we are normalizing a batch.

![Screenshot-2024-01-31-at-12.44.50-PM](https://www.freecodecamp.org/news/content/images/2024/01/Screenshot-2024-01-31-at-12.44.50-PM.png)

Batch Normalization: [Image Source][56]

Figure above, visualizes the idea behind Batch Normalization, which shows that normalization is done for each batch, where all N observations are in 1 batch, and C represents the number of Channels or features in your data. Basically, this figure shows that batch normalization is normalizing the data per 1 feature (across single channel) and for all N observations in 1 batch.

This is achieved by adjusting and scaling the activations during training. Batch normalization allows each layer of a network to learn by itself a little more independently of other layers. Let's see how it works in more detail.

#### Step 1: Mini-batch Mean & Variance:

Compute the mean of the activations for a mini-batch using the following equation:

$$ \\mu\_B = \\frac{1}{m} \\sum\_{i=1}^{m} x\_i $$

  
In this equation,

-   _μ\_beta_​ is the mean of the mini-batch
-   _m_ is the number of training examples in mini-batch, and
-   _xi_​ is the activation of the current layer before batch normalization.

Now, you'll need to compute the variance of the activations for a mini-batch. You can do that using the following equation:

$$ \\sigma\_B^2 = \\frac{1}{m} \\sum\_{i=1}^{m} (x\_i - \\mu\_B)^2 $$

#### Step 2: Normalize activations of the mini-batch

Then the normalization happens:

$$ \\hat{x}\_i = \\frac{x\_i - \\mu\_B}{\\sqrt{\\sigma\_B^2 + \\epsilon}} $$

In this equation,

-   _x_^_i_​ is the normalized activation
-   _ϵ_ is a small constant added for numerical stability (to avoid division by zero).

#### Step 3: Apply the learnable parameters for scale and shift

$$ y\_i = \\gamma \\hat{x}\_i + \\beta $$

While the primary goal of batch normalization is to stabilize and accelerate deep neural networks’ training process by reducing internal covariate shift, it also has a regularization effect which is the way of reducing overfitting.

By adding some level of noise to the activations (since the mean and variance are estimated from the data), it can make the model less sensitive to the specific weights of neurons, which has a similar effect to dropout as it can prevent overfitting.

Batch normalization can be particularly beneficial in deep neural networks, where it can enable the use of higher learning rates, make the network less sensitive to the initialization, and can reduce need for other regularization techniques such as dropout.

In practice, batch normalization is applied before the activation function of a layer, and it requires maintaining a running average of the mean and variance to be used during inference for the normalization process.

## Chapter 6: Vanishing Gradient Problem

As the gradient of the loss is propagated backward through time and layers, it can shrink towards 0 (becoming very small). This leads to very small updates to the weights.

This makes it hard for neural network to learn long-range dependencies, resulting in potentially no updates in the earlier layers of the network in the parameters as the gradients vanishes (become very small, close to zero).

So, when gradients vanish, early layers in the network train very slowly or not at all, leading to suboptimal performance.

### **Use appropriate activation functions**

One way of solving the vanishing gradient problem is by using an appropriate activation function that doesn't suffer from saturation.

Saturation happens when, for the input value x that is a large positive number or a small negative number, the gradient of the function is close to 0 as the function value is in the neighbourhood of the static extreme values of it. This slows down the parameter update. This phenomenon is called the saturation problem.

The ReLU (Rectified Linear Unit) and Leaky ReLU activation functions do not **saturate** in the positive direction, unlike the Sigmoid or tanh functions. This can help mitigate the vanishing gradient problem.

Leaky ReLU can help further by allowing a small, non-zero gradient when the unit is not active. This is important for cases when the negative inputs should also be taking into account and potentially getting negative value in the output is acceptable.

You can find more details on this activation function in the section on Activation Functions in Chapter 2.

### **Use Xavier or He Initialization**

Initializing weights carefully is important. A good initialization as such the Xavier initialization can help to prevent gradients from becoming too small early in training.

Xavier initialization, which is also known as Glorot initialization, is a an initialization technique for the weight parameters in a neural network. It is designed to solve the problem of vanishing or exploding gradients in deep neural networks when **Sigmoid** and **tanh** activation functions are being used.

It is named after Xavier Glorot who formulated this strategy based on the understanding of the flow of variances through a neural network to maintain the gradients at a reasonable scale and prevent them from becoming too small to vanish or too large to explode.

Here’s the main idea behind Xavier Initialization:

-   For a given layer, the weights are initialized randomly from a distribution with mean 0 and a specific variance (can also be 1 like in Gaussian distribution) that depends on the number of input neurons and the number of output neurons.
-   The goal of Xavier Initialization is to have the variance of the outputs of each layer to be equal to the variance of its inputs, and the gradients to have equal variance before and after going through a layer in the backward propagation.

If it's a **Uniform Distribution**, the weights are usually initialized with values drawn from this calculation:

$$ W \\sim \\text{Uniform}\\left(-\\sqrt{\\frac{6}{n\_{\\text{in}} + n\_{\\text{out}}}}, \\sqrt{\\frac{6}{n\_{\\text{in}} + n\_{\\text{out}}}}\\right)\\\\ $$ $$ \\text{Var}(W) = \\frac{2}{\\sqrt{n\_{\\text{in}} + n\_{\\text{out}}}} $$

This variance for initializing the weights in Neural Network is typically set to this value above referred by Var(W) - as in Variance of Weights matrix W, where:

-   _n\__in​ is the number of neurons feeding into the layer
-   _n\__out​ is the number of neurons the results are fed into (that is, number of neurons in the next layer)

If a **Normal Distribution** is used instead, then the weights are drawn from this one:

$$ W \\sim \\text{Normal}\\left(0, \\sqrt{\\frac{2}{n\_{\\text{in}} + n\_{\\text{out}}}}\\right)\\\\ $$ $$ \\text{Var}(W) = \\frac{2}{\\sqrt{n\_{\\text{in}} + n\_{\\text{out}}}} $$

### **Perform Batch Normalization**

Performing batch normalization on the input layer can help maintain a mean output close to 0 and a standard deviation close to 1 like Standard Normal Distribution. This prevents the gradients from becoming too small.

By Normalizing the activations, you directly stabilize the network but indirectly also control the weights change of your network. This means that the gradients stay more constant, and as an indirect result, BatchNorm gradients will not vanish nor explode.

### **Add Residual Connections (especially to RNNs or LSTMs)**

Residual connections offer innovative optimization results for training deep neural networks, especially when it comes to combating the vanishing gradients problem.

This is particularly a problem when dealing with recurrent neural networks (RNNs) or Long Short-Term Memory networks (LSTMs), which are inherently deep due to their sequential nature. Incorporating residual connections into RNNs or LSTMs can significantly improve their learning capabilities.

RNNs and LSTMs are specialized for handling sequences of data, making them ideal for tasks like language modeling and time series analysis. But as the sequence length increases, these networks tend to suffer from the vanishing gradient problem.

To address this, often residual connections are used for RNNs and LSTMs. By adding a shortcut that bypasses one or more layers, a residual connection allows the gradient to flow through the network more directly. In the context of RNNs and LSTMs. This means connecting the output of one timestep not only to the next timestep but also to one or several subsequent timesteps.

#### How to Implement Residual Connections in RNNs and LSTMs

The implementation strategy for residual connections in RNNs and LSTMs is straightforward. For each timestep, we modify the network such that the output is not only a function of the current input and the previous hidden state, but so that it also includes the input directly.

This process can be described as follows where we add x to output F(x). You can also see the direct path for the gradient to flow into the network and the mathematical derivation based on this process of adding input to output:

![Screenshot-2023-12-28-at-1.49.39-PM](https://www.freecodecamp.org/news/content/images/2024/02/Screenshot-2023-12-28-at-1.49.39-PM.png)

Gradient Clipping (Image Source: [LunarTech.ai][57])

$$ y = x + F(x)\\\\ $$ $$ \\frac{\\partial E}{\\partial x} = \\frac{\\partial E}{\\partial y} \\cdot \\frac{\\partial y}{\\partial x}\\\\ $$ $$ \\frac{\\partial E}{\\partial x} = \\frac{\\partial E}{\\partial y} \\cdot (1 + F'(x))\\\\ $$ $$ \\frac{\\partial E}{\\partial x} = \\frac{\\partial E}{\\partial y} \\cdot F'(x) $$

Here you can see the mathematics behind Residual Connections and how the gradient gets the short-cut. When we add x on F(x) to get y, instead of just y=F(x), you can see that when we take the derivative of some function E (let's say our loss function) with regard to x. Then we use the chain rule from differential mathematics.

After these transformations, you can see that we end up having sum of two values:

-   Gradient of loss function with regard to y
-   Gradient of loss function with regard to y multiplied by partial derivative of F(x) with regard to x

So, you can see here, that in case when residual connection is done, and we add extra x the plain y = F(x) , then this end up adding extra Gradient of loss function with regard to y without any other multiplication factor to be added to the final gradient.

For intuitive and detailed explanation, check out this tutorial-interview answer on [Residual Connections][58].

**Direct Gradient Flow**: By providing a shortcut for the gradient to flow, it is less likely to vanish as it is propagated back through time. This ensures that even the earliest layers in the sequence can be effectively trained.

**Learning Identity Mappings:** If the optimal function for a timestep is to copy its input to the output, the network can learn this identity mapping more easily with residual connections. The network can thus focus on fine-tuning deviations from the identity rather than learning it from scratch.

**Facilitating Deeper Architectures:** With the integration of residual connections, it becomes feasible to construct deeper RNNs or LSTMs. This depth allows the network to learn more complex patterns and relationships within the data.

![DALL-E-2024-01-19-23.14.57---A-hyper-stylized-artistic-representation-with-a-dominant-yellow-color-theme--blending-abstract-art-and-futuristic-concepts.-The-image-is-filled-with-e](https://www.freecodecamp.org/news/content/images/2024/01/DALL-E-2024-01-19-23.14.57---A-hyper-stylized-artistic-representation-with-a-dominant-yellow-color-theme--blending-abstract-art-and-futuristic-concepts.-The-image-is-filled-with-e.png)

Image Source: [LunarTech.ai][59]

## Chapter 7: Combatting Exploding Gradients

Exploding gradients is the opposite problem of Vansihing Gradients. Exploding Gradients occur when in the training of deep learning models, particularly those involving neural networks during the backpropagation phase, the gradients become too large and they basically explode.

But in deep networks with many layers, these gradients can accumulate and grow exponentially large through each layer. This exponential increase is due to the repetitive multiplication of gradients through the network's depth, especially when the gradients are too large in their magnitude.

This hinders the learning process and makes the neural network less effective in learning the important information in the layers.

Let's look at how we can solve this problem.

### Gradient Clipping

One way of solving the exploding gradients problem is by using Gradient Clipping. Gradient clipping is a practical technique that is used to prevent gradients from exploding during the training of neural networks.

When the computed gradients are too large, gradient clipping scales them back to a predefined threshold. This ensures stable and consistent updates to the model's parameters.

This process involves:

-   **Step 1: Calculating gradient (_g_)**: Obtain the gradient of the loss function with respect to the model's parameters.
-   **Step 2: Scaling gradient**: If the norm of this gradient ∥_g_∥ is larger than a specified threshold _c_, we scale down gradient _g_ to have the norm _c_, maintaining its direction. This is done by setting _g_ to  _c_⋅_g_/∥_g_∥
-   **Step 3: Update parameters**: We use the clipped gradient for a controlled and more moderate update.

Gradient clipping ensures that the model's learning process does not derail due to these large updates as a result of exploding gradients, which can happen in the presence of steep slopes in the loss landscape when optimization should happen after backpropagation.

By keeping these updates of the weight and bias parameters within a 'safe' size, this method helps in navigating the loss landscape more smoothly, contributing to better training convergence. The threshold c_c_ is a hyperparameter that requires tuning to balance between adequate learning speed and stability.

![DALL-E-2024-01-19-23.16.43---A-hyper-stylized-artistic-representation-with-a-dominant-yellow-color-theme--blending-abstract-art-and-futuristic-concepts.-The-image-is-filled-with-e](https://www.freecodecamp.org/news/content/images/2024/01/DALL-E-2024-01-19-23.16.43---A-hyper-stylized-artistic-representation-with-a-dominant-yellow-color-theme--blending-abstract-art-and-futuristic-concepts.-The-image-is-filled-with-e.png)

Image Source: [LunarTech.ai][60]

## Chapter 8: Sequence Modeling with RNNs & LSTMs

In this chapter, you'll learn about one of the most popular type of Neural Network models, Recurrent Neural Networks (RNNs).

Sequence modeling is a cornerstone of deep learning for sequential data such as time-series, speech, and text. We’ll look into the mechanics of RNNs, their inherent limits, and the evolution of advanced architectures such as Long Short-Term Memory (LSTM).

### **Recurrent Neural Networks (RNN) Architecture**

RNNs stand out for their unique ability to form a directed graph along a sequence, allowing them to exhibit **temporal dynamic behavior**. Unlike feedforward, in usual neural networks, RNNs can use their internal state (memory) to process **sequences** of inputs.

At the core of RNN is the concept of a cell, which is the repeating unit that forms the base of the RNN’s ability to maintain a memory across input sequences (the tine and sequence element). At high level, RNN can be visualized as follows:

![image-164](https://www.freecodecamp.org/news/content/images/2023/12/image-164.png)

RNN architecture (Image Source: [LunarTech.ai][61])

This visualization makes understanding this more complex architecture easier. As you can see in the image, the hidden layer used on a specific observation of a data set is not only used to generate an output for that observation (output y using h\_t), but it is also used to train the hidden layer of the next observation (h\_t is used with x\_(t+1) to get the h\_(t+1)).

Unlike basic Neural Networks that have a single input, multiple independent hidden layers, and then single output Y, RNNs have a different architecture.

Besides having a different structure for input and output (that is, multiple inputs and outputs), the most important thing to notice here is that in an RNN's hidden layers, the hidden states are interconnected.

This “dependent” property of one observation helping to predict the next observation is why recurrent neural networks are so handy when it comes to problems with time or sequence elements (such as time series analysis problems or next-word prediction problems form NLP).

### **Recurrent Neural Network Pseudocode**

For the start, let’s look for instance at the first time step. The hidden state at time step 1 is calculated as follows:

$$ h\_1 = f(W\_{xh} \\cdot X\_1 + W\_{hh} \\cdot h\_0 + b\_h) $$

where:

-   _f_ is an activation function (like ReLU or Tanh)
-   _W\_xh_ is the input-to-hidden weight matrix
-   _W\_hh_ is the hidden-to-hidden weight matrix
-   _h\_0_ is the initial hidden state (previous)
-   _b\_h_ is the hidden layer bias

_W\_hh_ is often referred to as the **recurrent weight matrix**. This is the matrix that defines how much each of those previous hidden states will contribute to the computation of the present hidden state.

Then the output in this first time-step is the following:

$$ Y\_1 = W\_{hy} \\cdot h\_1 + b\_y $$

where:

-   _W\_hy_​ is the weight matrix from hidden to output layer
-   _b\_y_​ is the bias for the output layer

The RNN algorithm for all time-steps 1 till T can be described with the following pseudocode:

```python
Algorithm 1 Recurrent Neural Network Time Steps
1: for each time step t = 1 to T do
2:     Input: Xt
3:     Initialize: h0 to a vector of zeros
4:     Parameters:
5:         Wxh: Weight matrix from input to hidden layer
6:         Whh: Recurrent weight matrix for hidden layer
7:         Why: Weight matrix from hidden to output layer
8:         bh: Bias for hidden layer
9:         by: Bias for output layer
10:     Activation function: f (e.g., tanh, ReLU)
11:     Hidden State Update:
12:         ht = f(Wxh . Xt + Whh . ht−1 + bh)
13:     Output:
14:         Yt = Why . ht + by
15: end for
```

### **Limitations of Recurrent Neural Networks**

Now let’s discuss the limitations of RNNs and why LSTMs came into play as well as later on the Transformers! Following are the limitations of the Recurrent Neural Network:

-   Vanishing Gradient Problem
-   Exploding Gradient Problem
-   Serial Computation
-   Difficulty Handling Long Sequences
-   Limited Contextual Information

Since we've already discussed the Vanishing and Exploding Gradient problems and how to solve them, we will move on to the remaining limitations of RNN before discussing variations of RNNs that addresses these challenges.

But first, just to note: especially in case of RNNs, Vanishing Gradient can result in the early layers of the network learning very slowly, if at all, which makes RNNs poorly suited to learning long-range dependencies within a sequence. And in the case ofExploding Gradients, they can lead to large updates to network parameters and consequently to an unstable Recurrent Neural Network.

#### Serial Computation Limitation

The sequential nature of RNNs doesn’t allow for parallelization during training because the computation of the next step depends on the previous step. This can result in much slower training processes compared to neural networks that do allow full parallelization.

#### Difficulty Handling Long Sequences

RNNs can have difficulty when dealing with long sequences because information from early in the sequence can be lost by the time it reaches the end in case Vanishing Gradient is an issue.

#### Limited Contextual Information Limitation

This is one of the most important limitations that RNN has that motivated the invention of Transformers. Standard RNNs do not have a mechanism to selectively remember or forget information, which can be a limitation when processing sequences where only certain parts are relevant for the prediction.

### **Long Short-Term Memory (LSTM) Architecture**

Long Short-Term Memory Networks or LSTMs are a special kind of RNN designed to mitigate most of the limitations of traditional RNNs. They incorporate mechanisms that we call **Cells** that allow the network to regulate the information that flows through it.

These gates are:

-   **Forget Gate:** Gate that determines what information should be discarded from the cell state
-   **Input Gate:** Gate that updates the cell state with new information
-   **Output Gate:** Gate that determines what next hidden state should be

![image-43](https://www.freecodecamp.org/news/content/images/2024/01/image-43.png)

LSTM Architecture (Image Source: [LunarTech.ai][62])

This diagram represents the architecture of an LSTM (Long Short-Term Memory) network, visualizing the flow of data through its components at different time steps, let's dive deeper into each of this sates and the process behind them:

**Cell States:** At the top row, we have rectangles in yellow labeled C\_(_t−1)_, _C\_(t)​_, … _C\_(t+1)_​. These represent the cell states of LSTM at consecutive time steps.

These cell states are a key component of the LSTM as they carry relevant information throughout processing of the sequence. They hold the information of what information to use, what to forget and what to output.

Arrows indicate the flow and transformations of the cell state from one time step to the next one.

**Gates**: In the middle you can see the 3 gates, coloured blocks representing the LSTM’s gates:

-   **Forget Gate (Pink):** Determines which parts of cell state _C\_(t−1)_​ needs to be forgotten and which need to be remembered, to produce the subsequent cell state _C\_(t)_​.
-   **Input Gate (Green):** Decides which values will be updated in the cell state based on the input at the current time step.
-   **Output Gate (Purple):** Determines what part of the cell state will be used to generate the output hidden state _h\_t_​.

These 3 gates control the flow of information and their amount, with lines connecting the previous hidden state _h\_(t−1) ​_and the cell state to each of these gates, illustrating how each of them contribute to the current state.

**Difference between Cell and Gates:** Note, that cells and gates are different concepts, where as you can see from the diagram cell is at higher leven than the gates, and for each time step there is single cell state but 3 gates. Cell state is basically using 3 gates to regulate the flow of information. It's like function that uses 3 input values to generate output to put it simply.

Common to the RNN original architecture, the hidden state at each time step is influenced by the previous hidden state and current input, and also the internal gates’ operations common for LSTMs.

These gates within LSTM allow it to learn which information to keep or discard over time, making it possible to capture long-term dependencies in the data.

#### How LSTMs address RNN limitations

-   **Solving Vanishing and Exploding Gradients:** LSTMs are designed to have a more constant weight changes which means that the gradients are more constant. This allows them to learn over many time steps, thereby solving the vanishing/exploding gradients through their gating mechanism and by maintaining a **separate cell state.**
-   **Long-range Dependencies:** By learning what to store in and what to delete/forget from the cell state, LSTMs can maintain long-range dependencies or relationships in the data. This makes them more effective for tasks involving long sequences such as those in language models.
-   **Selective Memory:** LSTMs can learn to keep only relevant information to make predictions by using the, forget gate. Forgetting non-relevant data, which makes them better at modeling complex sequences where the relevance of the information varies with time helps to do exactly this.

#### Limitations of LSTMs

While LSTMs represent a significant improvement over the original RNNs, they still have some major disadvantages, such as being more computationally intensive due to their complex architecture. LSTM’s have a higher number of parameters, which can lead to longer training times and require more data to generalize effectively.

Also, similar to RNNs, LSTMs also process data sequentially, which means they cannot be fully **parallelized.**

So, parallelization and longer training time due to higher number of parameters remain two major disadvantages for RNNs and LSTMs.

## **Chapter 9: Deep Learning Interview Preparation**

As we reach the culmination of this comprehensive handbook, it’s time to focus on translating your newfound knowledge into real-world success.

Whether you're aiming for getting into AI industry or eyeing a coveted position for AI Researcher or AI Engineer at FAANG companies, the final hurdle is often the most challenging yet rewarding: the job interview.

You will need to know details and be able to answer tricky questions that go beyond the surface level theory information.

You'll need to know about:

-   Convolutional Neural Networks (pooling, padding, kernels)
-   Recurrent Neural Networks (RNN), LSTMs, GRUs
-   Batch/Layer Normalization
-   Generative Adverserial Networks (GANs)
-   AutoEncoders (Encoder-Decoder Architectures)
-   Variational AutoEncoders (KL Divergence, ELBO)
-   Embeddings
-   Multi-Head Attention Mechanism
-   Transformers

And those are just few topics that you can expect for your more advanced/FAANG interviews. Check out the full list of 100 Questions from this curriculum of **[here][63]**.

Understanding the importance of this critical step, I'm excited to introduce my specially designed Deep Learning Interview Course sponsored by LunarTech that's available on LunarTech.ai and Udemy. This course is meticulously tailored to ensure you are not just interview-ready but poised to excel in the highly competitive AI job market.

Here's what the course covers:

1.  [Part 1 – The Essentials (Free 4-Hour Course)][64]: I believe in empowering every Data Science AI enthusiast. So I'm offering the first part of my interview course absolutely free. This section includes first set of 50 interview questions that cover the breadth of deep learning fundamentals.
2.  **[Complete Course][65] - [\[Full Deep Learning Interview Prep Course - 100 Q&A 7.5 hours \]][66]:** For those who are determined to leave no stone unturned, our full course on LunarTech.ai is the ultimate preparation tool for easy but also complex Deep Learning interviews. Expanding to 100 in-depth interview questions, this comprehensive course delves into the nuances of deep learning, ensuring that you stand out in even the most demanding interviews, including companies like FAANG.

It's your opportunity to go beyond being a candidate – to becoming a standout in the field of AI.

## About the Author

I am Tatev Aslanyan, Senior Machine Learning and AI Researcher. I have had the privilege of working in Data Science across numerous countries, including the US, UK, Canada, and the Netherlands. I am Co-founder of **[LunarTech][67]** where make Data Science and AI more accessible to everyone!

With an MSc and BSc in Econometrics under my belt, my journey in Machine and AI has been nothing short of incredible. Drawing from my technical studies during my Bachelors & Masters, along with over 5 years of hands-on experience in the Data Science, Machine Learning and AI industry.

## Connect with Me and LunarTech

![Screenshot-2023-10-23-at-6.59.27-PM](https://www.freecodecamp.org/news/content/images/2024/01/image-5-1.png)

Image Source: [LunarTech][68]

-   Follow me on [LinkedIn][69] and [X][70]
-   Visit my [Personal Website for Free Resources][71]
-   Subscribe to [The Data Science and AI Newsletter][72]

If you want to start a career in Data Science or AI, download my free [Data Science and AI Handbook][73] or [Fundamentals to Machine Learning Handbook][74]

Best wishes in all your future endeavors!  
  

---

![Tatev Aslanyan](https://www.freecodecamp.org/news/content/images/size/w60/2023/08/Airbrush-AIGC--11-.png)

[Tatev Aslanyan][75]

Co-founder of LunarTech, I harness power of Statistics, Machine Learning, Artificial Intelligence to deliver transformative solutions. Applied Data Scientist, MSc/BSc Econometrics

---

If you read this far, thank the author to show them you care. Say Thanks

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started][76]

[1]: /news/tag/deep-learning/
[2]: /news/author/tatevkaren/
[3]: #chapter-1-what-is-deep-learning
[4]: #chapter-2-foundations-of-neural-networks
[5]: #chapter-4-how-to-train-neural-networks
[6]: #chapter-5-optimization-algorithms-in-ai
[7]: #chapter-6-regularization-and-generalization
[8]: #chapter-7-vanishing-gradient-problem
[9]: #chapter-8-combatting-exploding-gradients
[10]: #chapter-8-sequence-modeling-with-rnns-lstms
[11]: #chapter-9-deep-learning-interview-preparation
[12]: https://lunartech.ai
[13]: https://www.freecodecamp.org/news/machine-learning-handbook/
[14]: https://lunartech.ai/course-overview/
[15]: https://lunartech.ai/course-overview/
[16]: https://www.freecodecamp.org/news/linear-algebra-full-course/
[17]: https://en.wikipedia.org/wiki/Differential_(mathematics)
[18]: https://youtu.be/LwCRRUa8yTU?si=DEeXlC9_d1Ct9eAF
[19]: https://lunartech.ai
[20]: https://www.freecodecamp.org/news/learn-machine-learning-and-neural-networks-without-frameworks/
[21]: https://medium.com/womenintechnology/ai-c3412c5aa0ac
[22]: https://lunartech.ai
[23]: https://lunartech.ai/course-overview/
[24]: https://lunartech.ai/course-overview/
[25]: https://lunartech.ai/course-overview/
[26]: https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RandomizedSearchCV.html
[27]: https://lunartech.ai/course-overview/
[28]: https://en.wikipedia.org/wiki/Activation_function
[29]: https://www.freecodecamp.org/news/the-history-of-ai/#the-perceptron
[30]: https://en.wikipedia.org/wiki/Linear_separability
[31]: https://lunartech.ai/course-overview/
[32]: https://lunartech.ai/course-overview/
[33]: https://lunartech.ai/course-overview/
[34]: https://lunartech.ai/course-overview/
[35]: https://lunartech.ai/course-overview/
[36]: https://lunartech.ai/course-overview/
[37]: https://www.youtube.com/watch?v=03-0UdyzWg4
[38]: https://www.youtube.com/watch?v=HEeOBaFNXV4
[39]: https://lunartech.ai/course-overview/
[40]: https://lunartech.ai/course-overview/
[41]: https://lunartech.ai/course-overview/
[42]: https://en.wikipedia.org/wiki/Loss_function
[43]: https://www.youtube.com/watch?v=1I-3Tdk2-Hg
[44]: https://lunartech.ai/course-overview/
[45]: https://lunartech.ai/course-overview/
[46]: https://lunartech.ai/course-overview/
[47]: https://lunartech.ai/course-overview/
[48]: https://youtu.be/rOI2GuwjJSY
[49]: https://www.merriam-webster.com/dictionary/stochastic
[50]: https://youtu.be/hqrI5OPtGOI
[51]: https://youtu.be/0HJ4iUQWHVI
[52]: https://lunartech.ai/course-overview/
[53]: https://youtu.be/NAfOLSOsyJI
[54]: https://www.youtube.com/watch?v=TDwpx-9M2IE
[55]: https://youtu.be/Lf8XNN3-8nI
[56]: https://images.app.goo.gl/TTG1B2reRZszz5c16
[57]: https://lunartech.ai/course-overview/
[58]: https://www.youtube.com/watch?v=bF7dUSepiLg
[59]: https://lunartech.ai/course-overview/
[60]: https://lunartech.ai/course-overview/
[61]: https://lunartech.ai/course-overview/
[62]: https://lunartech.ai/course-overview/
[63]: https://www.freecodecamp.org/news/ghost/#/editor/post/6548108b21405e03f5049361
[64]: https://courses.lunartech.ai/courses/deep-learning-interview-preparation-course-100-q-a-s
[65]: https://courses.lunartech.ai/courses/deep-learning-interview-preparation-course-100-q-a-s
[66]: https://courses.lunartech.ai/courses/deep-learning-interview-preparation-course-100-q-a-s
[67]: https://lunartech.ai
[68]: https://lunartech.ai
[69]: https://www.linkedin.com/in/tatev-karen-aslanyan/
[70]: https://twitter.com/tatevkaren7
[71]: https://tatevaslanyan.com/free-resources/
[72]: https://substack.com/@lunartech
[73]: https://downloads.tatevaslanyan.com/six-figure-data-science-bootcamp--5a571
[74]: https://join.lunartech.ai/machine-learning-fundamentals
[75]: /news/author/tatevkaren/
[76]: https://www.freecodecamp.org/learn/
