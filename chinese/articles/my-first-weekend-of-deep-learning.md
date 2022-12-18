> -   原文地址：[My First Weekend of Deep Learning](https://blog.floydhub.com/my-first-weekend-of-deep-learning/)
> -   原文作者：[Emil Wallner](https://blog.floydhub.com/author/emil-wallner/)
> -   译者：Lola Wei
> -   校对者：

**五年前开始兴起深度学习。** 计算机的计算能力呈指数级增长，随后成功案例频出，进而出现了深度学习热潮。科技可以驱动汽车，在 Atari 游戏中击败人类，还可以诊断癌症。
![playground.tensorflow.org](https://blog.floydhub.com/content/images/2018/06/playground.gif)

我刚开始学习深度学习时，花了两周时间去研究这一领域。我选择了工具，比较了云服务，并研究了在线课程。回想起来，我希望自己从第一天起就能构建起神经网络。而这也正是我写作本文的目的。看懂本文不需要太多的基础知识，只需要了解 [Python][1]、[命令行][2] 和 [Jupyter notebook][3] 就可以了。

深度学习是机器学习的一个分支。实践证明，这是一种对 [原始数据][4]（如图像或声音等数据）构建模型的有效方法。

假设你要对猫和狗的图像进行分类。如果不使用特定编程语言，则需要首先检测图像边缘，构建模型，识别鼻子、尾巴、爪子，然后神经网络才能实现最终分类。

另一方面，有更好的机器学习算法可以处理结构化数据。例如，如果你有一张 excel 工作表，上面有序记录了消费者订单，而你想预测他们的下一订单，那么就可以使用 [传统方法][5] 和 [简单的机器学习算法][6]。

## 核心逻辑

想象有这么一台机器，它的齿轮 = ✱ 随意啮合重叠在一起且相互影响。这时，机器突然停止了工作，因为它的齿轮是随机调整的，所以需要检查每一个齿轮从而使机器恢复正常工作。

这时工程师会来检查所有的齿轮，并找出其中的错误。他会从最后一层齿轮开始检查，找到错误后便会逐层回溯。这样，他就可以计算出每一层齿轮造成的误差。此过程即为 _单向传播_。

工程师会根据错误逐层修正齿轮，然后运行机器进行检测。他不停地重复这一过程，直到机器正常运转。

![predict](https://blog.floydhub.com/content/images/2018/06/predict.svg)

神经网络也以相同的方式处理数据。它知道输入和输出，并逐层调整齿轮以找到两者之间的关系。给定输入后，它便会调整齿轮以预测输出，然后比较预测值与实际值。

为了使误差（预测值与实际值之间的差异）最小，神经网络会调整齿轮，使得两者之前的差值尽可能的最小。

找到最佳的方式，使误差最小化的方法叫做 _梯度下降_ 。计算误差的函数叫做 _误差函数函数/代价函数_ 。

## 浅层神经网络

许多人认为人工神经网络模仿了大脑皮层的结构，但其实不然，因为我们尚不了解自己的大脑，所以不能妄下定论。不过大脑皮层确实是神经网络发明者弗兰克·罗森布拉特的灵感来源。

去 [the neural network simulator][7] 玩上一两个小时吧，这样你便会有更加直观的感受。

![A neural network without a hidden layer.](https://blog.floydhub.com/content/images/2018/06/nn.svg)

我们将从实现一个简单的神经网络开始，以了解 TFlearn 中的语法。首先我们要使用 [逻辑或 运算符][8] 解决最经典的 101 问题。尽管本案例并不是最适宜使用神经网络的例子，但是通过这个案例，我们能够了解神经网络的实现方式。

| 输入 (或) |     | **输出 (Y\_真)** |
| --------- | --- | ---------------- |
| 0         | 0 = | **0**            |
| 0         | 1 = | **1**            |
| 1         | 0 = | **1**            |
| 1         | 1 = | **1**            |

所有深度学习程序都遵循相同的核心逻辑：

-   首先调包，然后导入并清洗数据。所有输入（图像、音频、感知数据等）都会被 [翻译成二进制数据][9]。这些长长的数字列表即为神经网络的输入。
-   自己设计神经网络，如选择神经网络中要包含的层的类型和数量。
-   神经网络开始学习。它已知输入和输出值，会搜索它们之间的相关性。
-   通过训练，得到预测值。

以下是代码部分：

```python
# 1. Import library of functions
import tflearn

2. Logical OR operator / the data
OR = [[0., 0.], [0., 1.], [1., 0.], [1., 1.]]
Y_truth = [[0.], [1.], [1.], [1.]]
3. Building our neural network/layers of functions
neural_net = tflearn.input_data(shape=[None, 2])
neural_net = tflearn.fully_connected(neural_net, 1, activation='sigmoid')
neural_net = tflearn.regression(neural_net, optimizer='sgd', learning_rate=2, loss='mean_square')
4. Train the neural network / Epochs
model = tflearn.DNN(neural_net)
model.fit(OR, Y_truth, n_epoch=2000, snapshot_epoch=False)
5. Testing final prediction

```

**输出**

```plain
Training Step: 2000  | total loss: 0.00072 | time: 0.002s
| SGD | epoch: 2000 | loss: 0.00072 -- iter: 4/4
Testing OR operator
0 or 0: [[ 0.04013482]]
0 or 1: [[ 0.97487926]]
1 or 0: [[ 0.97542077]]
1 or 1: [[ 0.99997282]]

```

**第 1 行:** 以＃开头的行是注释，用于解释代码。

**第 2 行:** 导入 TFlearn 包。这样我们就可以使用谷歌 Tensorflow 中的函数了。

\*\*\*\***第 5 - 6 行:** 这段代码表示以列表存储的数据，数字末尾的点号将该数字映射为浮点数。它存储十进制的数字，从而使计算更加精确。

**第 9 行：** 这段代码用于初始化神经网络，并指定输入数据的维度/形状。因为 “或” 运算需要两个数据，所以数据形状为 2。[\[文档\]][10]

**第 10 行：** 这段代码表示输出层。激活函数将输出映射到某个区间。在这个例子中，我们使用 Sigmoid 函数来把值映射到 0-1。
\[[文档][11]\]

**第 11 行：**
该函数应用回归模型。[优化器][12] 会选择最佳算法以最小化损失函数。学习率决定了神经网络的修正速度，损失变量决定了如何计算误差。[[文档][13] \]

**第 14 行：**  
选择要使用的神经网络，指定训练记录的存储位置。\[[文档][14] \]

**第 15 行**
训练神经网络/模型。选择输入值（“或”运算）和真标签（Y \ \_真）。Epochs 决定了神经网络运行所有数据的次数。如果设置 snapshot = True，那么它将在每次训练后都验证模型。 \[[文档][15] \]

**第 18-20 行：** 用训练出的模型做预测。在此例中，它返回返回值为真/1 的概率。 [[文档][16] \]

**输出标签：** 第一个结果表示， \[0.\] & \[0.\] 的组合为真的概率为 4％，以此类推。训练步长表明你的训练次数。由于数据与批量大小吻合，因此数据训练一次即可完成。如果数据对于内存而言太大，则需先分割数据再进行训练。损失函数会衡量每次训练的错误总和。SGD 表示随机梯度下降和最小化损失函数的方法。Iter 会显示当前数据索引与输入项总数。

你几乎可以在任意 TFlearn 神经网络中都能发现以上逻辑和语法。学习代码最好的方法就是修改它并不断试错。

![Screenshot from tensorboard](https://blog.floydhub.com/content/images/2018/06/tb.png)

Tensorboard 可以对实验进行可视化操作，并直观观察到每个参数将如何改变训练结果。 你可以查看之前的视频，以了解如何使用 Tensorboard。损失曲线会展示每个训练步骤的错误量。

建议你先玩几个小时以适应运行环境和 TFlearn 参数。而下面我会给出一些学习建议。

**实验环节**

-   增加训练次数
-   尝试添加/更改函数的参数

    原代码：E.g. g = tflearn.fully_connected(g, 1, activation='sigmoid')

    修改后代码： tflearn.fully*connected(g, 1, activation='sigmoid', \_bias=False*)

-   输入整数
-   更改输入层形状
-   更改输出层的激活函数
-   更改梯度下降算法
-   更改神经网络计算损失的方式
-   尝试 “与” “非” 操作
-   尝试 “异或” 操作，比如把输出改为 \[0.\]，这样的话需要多加一层。
-   提高学习率
-   找方法将每次的学习时长提高到 0.1 秒以上

**开始实验**

深度学习中最常见的堆栈是将 Python 与 Tensorflow 结合在一起。TFlearn 是一个运行在 Tensorflow 之上的高级框架。另一个常见的框架是 Keras。它的功能更加强大，但是我发现 TFlearn 的语法更加简洁，也更易于理解，不过它们都是运行在 Tensorflow 上的高级框架。

你可以在计算机的 CPU 上运行简单的神经网络。 但是大多数实验都需要几个小时甚至几周才能完成。大多数人都会选择云服务使用现代的 GPU 来搭建神经网络。

针对 GPU 云服务器的最简单的解决方案是[FloydHub] [17]。 如果你会使用命令行，那么不用 5 分钟即可部署好 FloydHub。[参考 FloydHub 文档][18]

安装 `floyd-cli` 命令行工具。如果你在操作中遇到困难，可前往 FloydHub 官网咨询。

现在使用 TFlearn，Jupyter Notebook 和 Tensorboard 在 FloydHub 上训练第一个神经网络。安装并登录 FloydHub 后，在终端输入以下命令，下载所需文件。

```bash
git clone https://github.com/emilwallner/Deep-Learning-101.git

```

打开文件夹，初始化 FloydHub。

```bash
cd Deep-Learning-101
floyd init 101

```

FloydHub 网页面板会在浏览器中自动打开，并提示创建一个名为 `101` 的新项目。完成后，返回终端并输入相同的 `init` 命令。

```bash
floyd init 101

```

部署好云主机后，在命令行中：

-   输入 `--data emilwallner/datasets/cifar-10/1:data` 在 FloydHub 上上传一个公共数据集 (我已经上传完成了) 到 `data` 文件夹下，你可以在 [FloydHub][20] 上查看该数据集（及许多其他的公共数据集）

-   输入 `--gpu` 使用 GPU 云服务器
-   输入 `--tensorboard` 启用 Tensorboard
-   输入 `--mode jupyter` 在 Jupyter Notebook 中运行程序

代码段如下：

```bash
floyd run --data emilwallner/datasets/cifar-10/1:data --gpu --tensorboard --mode jupyter

```

在浏览器中启动 Jupyter，点击 start-here.ipnyb 文件。 Start-here.ipnyb 文件是一个简单的神经网络，通过它你可以学习 TFlearn 的语法。它会学习 “或” 运算的逻辑，我会在稍后详细说明。

在菜单中，点击 **Kernel > Restart & Run All**。 如果你看到有消息弹出，说明配置成功，即可继续工作。然后转到 FloydHub 项目，找到 Tensorboard 的链接。

## 深层神经网络

深度学习指具有多个隐藏层的神经网络。目前已经有很多关于卷积神经网络的详细教程：[教程一][21]、[教程二][22]、[教程三][23]。然而，我们将重点介绍适用于大多数神经网络的相关概念。

如果你想训练神经网络对未训练的数据做出预测，那么就需要把握好学习与遗忘的平衡。你希望神经网络分清信号与噪声，但是也要忘记那些在训练数据中学习到的信号。

如果神经网络学习不足，则会欠拟合。如果过度训练，则会过度拟合。

_正则化_ 指通过忘记某些信号来减少过拟合。（待定）

![fit](https://blog.floydhub.com/content/images/2018/06/fit.svg)

To get an intuition for these concepts, we’ll be working with the [CIFAR-10 dataset][24]. It’s a dataset with 60k images in ten different categories, such as cars, trucks, and birds. The goal is to predict which of the ten categories a new image belongs to.

为了对这些概念有一个直观的了解，我们使用[CIFAR-10 数据集][24]。该数据集包含包含 10 个类别的 6 万张图像，如汽车，卡车和鸟类。我们的目的是预测图像的类别。

![Sample images with labels](https://blog.floydhub.com/content/images/2018/06/sample.png)

通常，我们首先抓取数据、清洗数据、过滤图像数据。但是为了缩小范围，我们仅关注神经网络。你可以在 Jupyter notebook 运行所有示例[刚刚下载过了。][25]

输入层获取已映射为数字的图像，输出层将图像归为 10 类。隐藏层混合了卷积层、池化层、全连接层。

我们来比较一下单层神经网络与三层神经网络。 每个神经网络都包括卷积层、池化层、全连接层。

此案例涵盖了所有的实验。两个实验分别名为 [experiment-0-few-layers.ipynb][26] 和 [experiment-0-三层 sets.ipynb][27]。

```python
# Convolutional network building
network = input_data(shape=[None, 32, 32, 3],
                     data_preprocessing=img_prep,
                     data_augmentation=img_aug)
One set of layers

```

如果你运行这些代码（点击菜单栏 **Kernel > Restart & Run All** ），然后看一下 Tensorboard 中的训练记录，你会发现三层神经网络的准确率比单层神经网络的准确率高 15%。因为单层神经网络学习不够会导致欠拟合。

你可以在之前下载的文件夹中运行代码。

![experiment_0 in the repo](https://blog.floydhub.com/content/images/2018/06/experiment.png)

看一下训练准确度和验证准确度。在深度学习中，把数据集一分为二是最佳的做法。一部分用于训练神经网络，另一个用于验证神经网络。通过这种方式，你可以判断神经网络对新数据的预测能力或泛化能力。

从 Tensorboard 中可以看出，训练数据的准确性高于验证数据集的准确性。该神经网络包含了背景噪声和一些阻碍项。

为解决过拟合问题，可以添加惩罚项并引入噪音。正则化是应对过拟合的常用手段，一般采用丢弃法和添加惩罚项。

丢弃正则化方法可以与类比于我们的民主制。他们没有强大的神经元来决定最终输出，而是分散了权重。神经网络被迫学习不同的模型，并结合不同的模型做出最终预测。

以下代码表示加入了丢弃层后的神经网络例子：

```python
network = input_data(shape=[None, 32, 32, 3],
                        data_preprocessing=img_prep,
                        data_augmentation=img_aug)
network = conv_2d(network, 32, 3, activation='relu')
network = max_pool_2d(network, 2)
network = conv_2d(network, 64, 3, activation='relu')
network = conv_2d(network, 64, 3, activation='relu')
network = max_pool_2d(network, 2)
network = fully_connected(network, 512, activation='relu')
#The dropout layer
network = dropout(network, 0.5)
network = fully_connected(network, 10, activation='softmax')
network = regression(network, optimizer='adam',
                        loss='categorical_crossentropy',
                        learning_rate=0.001)

```

可以发现，两者之间唯一的不同就是一个有丢弃层，一个没有丢弃层。
![experiment_1.ipynb in the repo](https://blog.floydhub.com/content/images/2018/06/exp1.png)

在神经网络的每一层中，神经元彼此依赖。有的神经元权重大，有的神经元权重小。丢弃层随机丢弃一部分神经元。这样，每个神经元对最终结果做出的贡献各不相同。

第二种防止过度拟合的方法是在每一层上应用 L1 或 L2 正则化函数。

假设你要描述一匹马。如果描述得太详细，那么会排除调很多匹马。相反，如果描述的过于泛化，那么可能会囊括了其他动物的特征。L1 和 L2 正则化有助于神经网络区分不同特征。

```python
network = input_data(shape=[None, 32, 32, 3],
                        data_preprocessing=img_prep,
                        data_augmentation=img_aug)
network = conv_2d(network, 32, 3, activation='relu', regularizer='L2')
network = max_pool_2d(network, 2)
network = conv_2d(network, 64, 3, activation='relu', regularizer='L2')
network = conv_2d(network, 64, 3, activation='relu', regularizer='L2')
network = max_pool_2d(network, 2)
network = fully_connected(network, 512, activation='relu', regularizer='L2')
network = fully_connected(network, 10, activation='softmax')
network = regression(network, optimizer='adam',
                        loss='categorical_crossentropy',
                        learning_rate=0.001)

```

如果我们比较之前的实验的话，会发现结果类似。
![experiment_2 in the repo](https://blog.floydhub.com/content/images/2018/06/exp2.png)

添加正则化函数的神经网络优于没有正则化函数的神经网络。

L2 正则化惩罚过于复杂的函数。它测试每个函数对最终输出有多大贡献，并惩罚那些系数较大的函数。

另一个核心参数是批大小，即每个训练步骤的数据量。下面是批大小的比较。

```python
#Large batch size
model.fit(X, Y, n_epoch=50, shuffle=True, validation_set=(X_test, Y_test), show_metric=True, batch_size=2000, run_id='cifar_large_batch_size')

```

![experiment_3 in the repo](https://blog.floydhub.com/content/images/2018/06/exp3.png)

正如我们在结果中看到的那样，批大小越大，迭代次数越少，下降方向越准。相反，批大小越小，随机性越大，迭代次数越多。尽管批大小越大迭代次数越少，但是却需要更多的内存和时间来进行计算。

最终实验分别比较了低学习率、中等学习率、高学习率。

```python
#Large learning rate
network = regression(network, optimizer='adam',
                        loss='categorical_crossentropy',
                        learning_rate=0.01)

```

![experiment_4 in the repo](https://blog.floydhub.com/content/images/2018/06/exp4.png)

由于对神经网络的影响较大，学习率通常被认为是最重要的参数之一。它规定了如何在每一步上调整预测的变化。如果学习率太高或太低，则可能会无法收敛。

没有固定的设计神经网络的方法。我们必须通过实验来验证自己的模型。学习其他人的项目，添加层并调整超参数。如果你可以实现大批量计算能力，那么就可以创建程序来设计和调整超参数。

工作完成后，你还需要点击 FloydHub 面板中的 “取消”。

### **下一步**

在 TFlearn 的[官方演示仓库][28]中，你可以了解到一些效果最好的卷积神经网络模型。你可以尝试复制代码，并改善对 CIFAR-10 数据集的验证。迄今为止，最好的验证结果是 96.53％（格雷厄姆，2014 年）。

你还要学习 Python 语法和命令行。这会减少不必要的认知负担，这样你就可以专注学习深度学习的相关概念。先学习 Codecademy 的[Python 课程][29]，然后学习[命令行][30]。如果你全天学习的话，三天以内就能学完。

**致谢**

感谢 Ignacio Tonoli、
Per Harald Borgen、
Jean-Luc Wingert、
Sai Soundararaj 和
Charlie Harrington 阅读本文初稿。感谢 [TFlearn community][31] 提供文档和代码样本。

---

### 关于 Emil Wallner

这是 Emil 学习深度学习的多篇博客系列的文章之一。

你可以在 [Twitter][32] 或他的 [网站][33] 上关注 Emil。

我们一直在寻找更多技术人员来撰写有关深度学习的有趣的博客文章。如果你有兴趣，请在 [Twitter][34] 上联系我们。

[1]: https://www.codecademy.com/tracks/python
[2]: https://www.codecademy.com/learn/learn-the-command-line
[3]: https://www.youtube.com/watch?v=HW29067qVWk
[4]: https://ml4a.github.io/images/figures/mnist-input.png
[5]: http://www.r2d3.us/visual-intro-to-machine-learning-part-1/
[6]: http://1.bp.blogspot.com/-ME24ePzpzIM/UQLWTwurfXI/AAAAAAAAANw/W3EETIroA80/s1600/drop_shadows_background.png
[7]: https://www.mladdict.com/neural-network-simulator
[8]: https://msdn.microsoft.com/en-us/library/f355wky8.aspx
[9]: https://ml4a.github.io/images/figures/mnist-input.png
[10]: http://tflearn.org/layers/core/
[11]: http://tflearn.org/layers/core/
[12]: http://tflearn.org/optimizers/
[13]: http://tflearn.org/layers/estimator/
[14]: http://tflearn.org/models/dnn/
[15]: http://tflearn.org/models/dnn/
[16]: http://tflearn.org/models/dnn/
[17]: https://www.floydhub.com/
[18]: http://docs.floydhub.com/getstarted/quick_start/
[19]: https://github.com/emilwallner/Deep-Learning-101.git
[20]: https://www.floydhub.com/emilwallner/datasets/cifar-10/1
[21]: https://www.youtube.com/watch?v=FmpDIaiMIeA&t=1202s
[22]: http://cs231n.github.io/convolutional-networks/
[23]: https://www.youtube.com/watch?v=LxfUGhug-iQ
[24]: https://pgaleone.eu/images/autoencoders/tf/cifar10_io_l2.png
[25]: https://github.com/emilwallner/Deep-Learning-101
[26]: https://github.com/emilwallner/Deep-Learning-101/blob/master/experiment_0_few_layers.ipynb
[27]: https://github.com/emilwallner/Deep-Learning-101/blob/master/experiment_0_three_layer_sets.ipynb
[28]: https://github.com/tflearn/tflearn/tree/master/examples/images
[29]: https://www.codecademy.com/tracks/python
[30]: https://www.codecademy.com/learn/learn-the-command-line
[31]: https://github.com/tflearn/tflearn/blob/master/examples/basics/linear_regression.py
[32]: https://twitter.com/emilwallner?lang=en
[33]: http://emilwallner.com/
[34]: https://twitter.com/floydhub_
