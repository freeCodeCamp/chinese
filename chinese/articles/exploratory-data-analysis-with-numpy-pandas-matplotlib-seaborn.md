> -  原文地址：[What is Data Analysis? How to Visualize Data with Python, Numpy, Pandas, Matplotlib & Seaborn Tutorial](https://www.freecodecamp.org/news/exploratory-data-analysis-with-numpy-pandas-matplotlib-seaborn/)
> -  原文作者：[Aakash NS](https://www.freecodecamp.org/news/author/aakash-n-s/)
> -  译者：seanbei
> -  校对者：

![什么是数据分析？如何用 Python，Numpy，Pandas，Matplotlib 和 Seaborn 教程可视化数据](https://www.freecodecamp.org/news/content/images/size/w2000/2021/05/blog-cover-4.png)

数据分析是一个通过统计测量和可视化，从数据中探索、研究和收集洞见的过程。

数据分析的目标是通过揭示趋势、关系和模式来开发一种对数据的理解。

数据分析既是一门科学，也是一门艺术。一方面，它需要你了解统计、可视化技术和数据分析工具，如 Numpy、Pandas 和 Seaborn。

另一方面，它需要你提出有趣的问题来指导研究，然后解释数字和图表以产生有用的见解。

本数据分析教程涵盖以下主题：

1.  [什么是数值计算？Python 和 Numpy 入门](#what-is-numerical-computation-python-and-numpy-for-beginners)
2.  [如何使用 Python 和 Pandas 分析表格数据](#how-to-analyze-tabular-data-using-python-and-pandas)
3.  [使用 Python、Matplotlib 和 Seaborn 进行数据可视化](#data-visualization-using-python-matplotlib-and-seaborn)

## 什么是数值计算？Python 和 Numpy 入门

![](https://i.imgur.com/mg8O3kd.png)

源自: [Elegant Scipy](https://github.com/elegant-scipy/elegant-scipy/blob/master/figures/NumPy_ndarrays_v2.png)

你可以跟随教程操作并在此处运行代码：[https://jovian.ai/aakashns/python-numerical-computing-with-nump](https://jovian.ai/aakashns/python-numerical-computing-with-numpy)y

本节涵盖以下主题：

-   如何在 Python 中处理数值数据
-   如何将 Python 列表转换为 Numpy 数组
-   多维 Numpy 数组及其优点
-   数组操作、广播、索引和切片
-   如何使用 Numpy 处理 CSV 数据文件

### 如何在 Python 中处理数值数据

__数据分析__ 中的“数据”通常是指数值数据，如股票价格、销售数据、传感器测量值、体育得分、数据库表等。

[Numpy](https://jovian.ai/outlink?url=https%3A%2F%2Fnumpy.org) 库为 Python 中的数值计算提供专门的数据结构、函数和其他工具。让我们通过一个例子来看看为何以及如何使用 Numpy 处理数值数据。

假设我们想使用温度、降雨量和湿度这些气象数据来考察一个区域是否适合种苹果。

一个简单的方法是制定苹果的年产量（每公顷吨）与气候条件之间的线性关系，如平均温度（以华氏度为单位）、降雨量（以毫米为单位）和平均相对湿度（以百分比为单位）。

`苹果产量 = w1 * 温度 + w2 * 降雨量 + w3 * 湿度`

我们将苹果的产量表示为温度、降雨量和湿度的加权和。

这个方程是一个近似值，因为实际关系不一定是线性的，可能还涉及其他因素。但像这样的简单线性模型用在练习中效果较好。

基于一些历史数据的统计分析，我们大致可以为权重`w1`，`w2` 和 `w3` 提供合理的值。下面例举了一组值：

给定一个地区的一些气候数据，我们就可以预测苹果的产量了。以下是一些示例数据：

![](https://i.imgur.com/TXPBiqv.png)

首先，我们定义一些变量来记录一个地区的气候数据。

然后，我们就可以将这些变量代入线性方程来预测苹果的产量了。

为了能更容易地对多个区域执行上述的计算，我们可以将每个区域的气候数据表示为向量，即数字列表。

每个向量中的三个数字分别代表温度、降雨量和湿度数据。

我们还可以将公式中使用的权重集表示为一个向量。

现在我们就可以编写一个函数 `crop_yield`，通过给定的气候数据和相应权重，来计算苹果（或任何其他作物）的产量了。

### 如何将 Python 列表转换为 Numpy 数组

`crop_yield` 执行的计算（两个向量的元素相乘并对结果求和）也称为 __点积__。从 [这里](https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/dot-cross-products/v/vector-dot-product-and-vector-length ) 了解更多点积的信息。

Numpy 库提供了一个内置函数来计算两个向量的点积。但是，我们必须先将列表转换为 Numpy 数组才行。

我们使用 `pip` 包管理器安装 Numpy 库。

### 如何操作 Numpy 数组

我们可以使用 `np.dot` 函数来计算两个向量的点积。

### 使用 Numpy 数组有什么好处？

与 Python 的列表相比，Numpy 数组在操作数值数据方面具有以下优势：

-   **它们很容易 **使用****：你可以编写像 `(kanto * weights).sum()` 这样的小型、简洁和直观的数学表达式，而不是使用循环和自定义函数（如 `crop_yield`）。
-   ****性能****：Numpy 的操作和函数由 C++ 内部实现，这使得它们比使用 Python 的语句和循环快得多，因为后者是在运行时解释的。

以下是对 Python 循环和 Numpy 数组执行的点积的比较，使用两个向量，每个都有一百万个元素。

如你所见，使用 `np.dot` 比使用 `for` 循环快 100 倍。这使得 Numpy 处理非常大的数据集时非常有用，特别是那些具有数万或数百万个数据点时。

### 多维 Numpy 数组

现在让我们更进一步，使用单个二维 Numpy 数组来表示所有地区的气候数据。

如果你在高中时学过线性代数课，你会把上面的二维数组看作是一个五行三列的矩阵。每一行代表一个区域，列分别代表温度、降雨量和湿度。

Numpy 数组可以有任意数量的维度，每个维度可以有不同的长度。可以通过数组的 `.shape` 属性来检查每个维度的长度。

![](https://fgnt.github.io/python_crashkurs_doc/_images/numpy_array_t.png)

来源：[Elegant Scipy](https://github.com/elegant-scipy/elegant-scipy/blob/master/figures/NumPy_ndarrays_v2.png)

通过 `climate_data` （一个 5x3 的矩阵）和 `weights` （一个长度为 3 的向量）之间的单一矩阵乘法，我们就可以计算出所预测的苹果产量了。看起来就像下面这样：

![](https://i.imgur.com/LJ2WKSI.png)

通过观看[这个 YouTube 播放列表](https://www.youtube.com/watch?v=xyAuNHPsq-g&list=PLFD0EB975BA0CC1E0&index=1)的前 3-4 个视频，你可以学到矩阵及矩阵乘法。

我们可以使用 `np.matmul` 函数或者 `@` 操作符来执行矩阵乘法。

### 如何处理 CSV 数据文件

Numpy 同样提供辅助函数来对文件进行读写。我们来下载一个文件 `climate.txt`，它包含了 10,000 个气候测量结果（温度、降雨量和湿度），格式如下：

```
temperature,rainfall,humidity
25.00,76.00,99.00
39.00,65.00,70.00
59.00,45.00,77.00
84.00,63.00,38.00
66.00,50.00,52.00
41.00,94.00,77.00
91.00,57.00,96.00
49.00,96.00,99.00
67.00,20.00,28.00
...
```

这种存储数据的格式称为 __comma-separated values__ 或者 CSV。

> ****CSVs****：逗号分隔值（CSV）文件是使用逗号分隔值的分隔文本文件。文件的每一行就是一条数据记录。每条记录包括一个或多个字段，以逗号隔开。CSV 文件通常以纯文本形式存储表格数据（数字和文本），因此每行都有相同数量的字段。（维基百科）

我们使用 `genfromtxt` 函数来把这个文件读入一个到 numpy 数组中。

这里有几个微妙之处：

-   由于我们希望添加新列，我们把参数 `axis=1` 传给 `np.concatenate`。`axis` 参数指定了串联的维度。
-   数组必须有相同数量的维度，每个维度长度要相同，除了用于串联的维度。我们使用 [`np.reshape`](https://jovian.ai/outlink?url=https%3A%2F%2Fnumpy.org%2Fdoc%2Fstable%2Freference%2Fgenerated%2Fnumpy.reshape.html) 函数来将 `yields` 的形状从 `(10000,)` 改到 `(10000,1)`。

以下是在 `axis=1` 时 `np.concatenate` 的一个直观解释（你能猜出 `axis=0` 的结果是什么吗？）：

![](https://www.w3resource.com/w3r_images/python-numpy-image-exercise-58.png)

来源：[w3resource.com](w3resource.com)

理解 Numpy 函数的最好方式是是对其进行试验并阅读文档以了解其参数和返回值。使用下面的单元格来试验 `np.concatenate` 和 `np.reshape`。

让我们使用 `np.savetxt` 函数来将上面计算的最终结果写回到文件中。

Numpy 提供了数百个用于对数组执行操作的函数。以下是一些常用的函数：

-   数学：`np.sum`、`np.exp`、`np.round`，以及算术运算符
-   数组操作：`np.reshape`、`np.stack`、`np.concatenate`、`np.split`
-   线性代数：`np.matmul`、`np.dot`、`np.transpose`、`np.eigvals`
-   统计：`np.mean`、`np.median`、`np.std`、`np.max`

**那么如何 **找到你需要的函数呢？**** 要找到特定操作或用例的正确函数，最简单的方法就是网络搜索。例如，搜索“如何连接 numpy 数组”，就会找到[数组连接教程](https://jovian.ai/outlink?url=https%3A%2F%2Fcmdlinetips.com%2F2018%2F04%2Fhow-to-concatenate-arrays-in-numpy%2F)。

你可以在这里找到[数组函数的完整列表](https://numpy.org/doc/stable/reference/routines.html).

### Numpy 算术运算、广播和比较

Numpy 数组支持像 `+`，`-`，`*` 等的算术运算。你可以对一个单一的数字（也称为标量）或者具有同样形状的数组进行算术运算。

运算符让编写具有多维数组的数学表达式变得很容易。

#### **Numpy 数组广播**

Numpy 数组也支持 __广播__，允许在具有不同维数但形状兼容的两个数组之间进行算术运算。让我们通过一个例子来看看它是如何工作的。

当计算表达式 `arr2 + arr4` 时，`arr4` (形状为 `(4,)`）被复制了三次以匹配 `arr2` 的形状 `(3, 4)`。Numpy 执行复制时，并不真实地去创建较小维度数组的三个副本，这样就提高了性能，并使用更少的内存。

![](https://jakevdp.github.io/PythonDataScienceHandbook/figures/02.05-broadcasting.png)

来源：[Python 数学科学手册](https://jakevdp.github.io/PythonDataScienceHandbook/02.05-computation-on-arrays-broadcasting.html)

只有当一个数组可以复制以匹配另一个数组的形状时，广播才有效。

在上面的例子中，即使 `arr5` 被复制三次，它并不能匹配 `arr2` 的形状。所以无法成功计算 `arr2 + arr5`。[在此处学习有关广播的更多信息](https://numpy.org/doc/stable/user/basics.broadcasting.html).

#### **Numpy 数组比较**

Numpy 数组也支持像 `==`、`!=`、`>` 等这样的比较操作符。比较结果是一个布尔值数组。

数组比较经常使用 `sum` 方法来计算两个数组中相等元素的数量。请记住，在算术运算中使用布尔值时，`True` 被视为 `1`，而`False` 被视为 `0`。

### Numpy 数组索引和切片

Numpy 以一种直观的方式，将 Python 的列表索引符号 `[]` 扩展到多个维度。你可以提供一个以逗号分隔的索引或范围列表，来从 Numpy 数组中选择一个指定的元素或者一个子数组（也称为切片）。

符号及其结果起初看起来会有点困惑，因此请花点时间进行实验并适应它。

请用下面的单元格，使用不同的索引和范围组合，尝试进行数组索引和切片的一些示例。以下是一些直观演示的示例：

![](https://scipy-lectures.org/_images/numpy_indexing.png)

来源：[Scipy 讲座](https://scipy-lectures.org/intro/numpy/array_object.html)

### 如何用其他方法创建 Numpy 数组

Numpy 还提供了一些简便的函数来创建具有固定或随机形状的数组。查阅[官方文档](https://jovian.ai/outlink?url=https%3A%2F%2Fnumpy.org%2Fdoc%2Fstable%2Freference%2Froutines.array-creation.html)或者使用 `help` 函数来了解更多。

### 练习

尝试以下练习来熟悉 Numpy 数组，锻炼你的技能：

-   Numpy 数组函数的赋值：[https://jovian.ml/aakashns/numpy-array-operations](https://jovian.ai/outlink?url=https%3A%2F%2Fjovian.ml%2Faakashns%2Fnumpy-array-operations)
-   （选做）100个 Numpy 小练习：[https://jovian.ml/aakashns/100-numpy-exercises](https://jovian.ai/outlink?url=https%3A%2F%2Fjovian.ml%2Faakashns%2F100-numpy-exercises)

### 总结和进一步阅读

到此，我们完成了用 Numpy 进行数值计算的讨论。本教程的这一部分，我们介绍了以下主题：

-   如何从 Python 列表转到 Numpy 数组
-   如何操作 Numpy 数组
-   相对列表而言，使用 Numpy 数组的优势
-   多维 Numpy 数组
-   如何处理 CSV 数据文件
-   算术运算与广播
-   数组索引和切片
-   创建 Numpy 的其他方法

查阅以下资源以学习更多 Numpy 知识:

-   [官方文档](https://numpy.org/devdocs/user/quickstart.html)
-   [freeCodeCamp 上的 Numpy 教程](/news/the-ultimate-guide-to-the-numpy-scientific-computing-library-for-python/)
-   [高级 Numpy（探索内部结构）](http://scipy-lectures.org/advanced/advanced_numpy/index.html)

### 回顾问题以检验你的掌握程度

尝试回答以下问题来测试你对本文前面话题的掌握程度：

1.  什么是向量？
2.  如何用 Python 列表来表示向量？请举例。
3.  什么是两个向量的点积？
4.  写一个函数来计算两个向量的点积。
5.  什么是 Numpy？
6.  如何安装 Numpy？
7.  如何导入 `numpy` 模块？
8.  用别名导入一个模块意味着什么？请举例。
9.  通常使用的 `numpy` 别名是什么？
10.  什么是 Numpy 数组？
11.  如何创建 Numpy 数组？请举例。
12.  什么是 Numpy 数组的类型？
13.  如何访问 Numpy 数组的元素？
14.  如何使用 Numpy 计算两个向量的点积？
15.  如果尝试计算具有不同大小的两个向量的点积，会怎么样？
16.  如何计算两个 Numpy 数组的元素乘积？
17.  如何计算 Numpy 数组中所有元素的总和？
18.  相对 Python 列表，使用 Numpy 数组处理数值数据的优势是什么？
19.  为什么 Numpy 数组操作比 Python 函数和循环具有更好的性能？
20.  举例说明 Numpy 数组操作和 Python 循环之间的性能差异。
21.  什么是多维 Numpy 数组？
22.  举例说明如何创建 2、3 和 4 维的 Numpy 数组。
23.  如何查看 Numpy 数组的维度数量以及每个维度的长度？
24.  Numpy 数组中的元素可以有不同的数据类型吗？
25.  如何查看 Numpy 数组中元素的数据类型？
26.  Numpy 数组的数据类型是什么？
27.  矩阵和二维 Numpy 数组的区别是什么？
28.  如何用 Numpy 执行矩阵乘法？
29.  Numpy 中的 `@` 操作符用于做什么？
30.  什么是 CSV 文件格式？
31.  如何使用 Numpy 从 CSV 文件中读取数据？
32.  如何连接两个 Numpy 数组？
33.  `np.concatenate` 的 `axis` 参数的作用是什么？
34.  什么时候两个 Numpy 数组可以兼容连接？
35.  给出一个能进行连接的两个 Numpy 数组的例子。
36.  给出一个不能进行连接的两个 Numpy 数组的例子。
37.  `np.reshape` 函数的作用是什么？
38.  “reshape”一个 Numpy 数组是什么意思？
39.  如何将 numpy 数组写入 CSV 文件？
40.  给出一些用于执行数学运算的 Numpy 函数示例。
41.  给出一些用于执行数组操作的 Numpy 函数示例。
42.  给出一些用于执行线性代数的 Numpy 函数示例。
43.  给出一些用于执行统计运算的 Numpy 函数示例。
44.  如何为特定操作或用例找到正确的 Numpy 函数？
45.  在哪里可以看到所有 Numpy 数组函数和操作的列表？
46.  Numpy 数组支持哪些算术运算符？举例说明。
47.  什么是数组广播？它如何有用？举例说明。
48.  给出一些兼容广播的数组的例子。
49.  给出一些不兼容广播的数组的例子。
50.  Numpy 数组支持哪些比较运算符？举例说明。
51.  如何从 Numpy 数组访问特定的子数组或切片？
52.  通过一些示例说明多维 Numpy 数组中的数组索引和切片。
53.  如何创建一个全为0的给定形状的 Numpy 数组？
54.  如何创建一个全为1的给定形状的 Numpy 数组？
55.  如何创建给定形状的单位矩阵？
56.  如何创建一个给定长度的随机向量？
57.  如何创建给定形状且每个元素具有固定值的Numpy数组？
58.  如何创建给定形状且每个元素具有随机初始值的Numpy数组？
59.  `np.random.rand` 与 `np.random.randn` 的区别是什么？举例说明。
60.  `np.arange` 与 `np.linspace` 的区别是什么？举例说明。

现在，你已经准备好进入本教程的下一节了。

## 如何用 Python 和 Pandas 分析表格数据

![](https://i.imgur.com/zfxLzEv.png)

按照下面的步骤运行代码：[https://jovian.ai/aakashns/python-pandas-data-analysis](https://jovian.ai/aakashns/python-pandas-data-analysis).

本节包含以下主题：

-   如何将 CSV 文件读入到 Pandas 数据帧
-   如何从 Pandas 数据帧中获得数据
-   如何查询、排序和分析数据
-   如何合并、分组和汇总数据
-   如何从日期中提取有用信息
-   使用直线图和条形图进行基本绘图
-   如何将数据帧写到 CSV 文件中

### 如何用 Pandas 读取 CSV 文件

[Pandas](https://jovian.ai/outlink?url=https%3A%2F%2Fpandas.pydata.org%2F) 是一个非常流行的 Python 库，用于处理表格数据（类似于存在电子表格中的数据）。 它提供了辅助函数，用以从各种文件格式（如CSV、Excel电子表格、HTML表格、JSON、SQL等）中读取数据。

我们下载一个文件 `italy-covid-daywise.txt`，里面包含了意大利每日的 Covid-19 数据，格式如下：

```
date,new_cases,new_deaths,new_tests
2020-04-21,2256.0,454.0,28095.0
2020-04-22,2729.0,534.0,44248.0
2020-04-23,3370.0,437.0,37083.0
2020-04-24,2646.0,464.0,95273.0
2020-04-25,3021.0,420.0,38676.0
2020-04-26,2357.0,415.0,24113.0
2020-04-27,2324.0,260.0,26678.0
2020-04-28,1739.0,333.0,37554.0
...
```

这种存储数据的格式被称为 __comma-separated values__ 或者 CSV。如果你需要 CSV 格式的定义，可以参考以下：

> ****CSVs****: 逗号分隔值（CSV）文件是一种用逗号分隔数值的分隔文本文件。文件中的每一行都是一条数据记录。每一条记录包含一个或多个字段，以逗号隔开。CSV 文件通常以纯文本形式存储表格数据（数字和文本），每一行拥有相同数量的字段。（维基百科）

我们使用 `urlretrieve` 函数从 `urllib.request` 模块中下载这个文件。

文件中的数据被读取并存到 `DataFrame` 对象——它是 Pandas 中的一个核心数据结构，用于存储和处理表格数据。通常我们在数据帧的变量名称中使用 `_df` 后缀。

以下是我们通过查看数据帧可以得知的信息：

-   该文件提供了意大利新冠肺炎的四项每日计数
-   报告的指标是确诊病例、死亡人数和测试人数
-   提供了248天的数据：从2019年12月12日到2020年9月3日

请记住，这些是官方报告的数字。实际病例和死亡人数可能更高，因为并非所有病例都被诊断出来。

我们可以通过 `.info` 方法来查看数据帧的一些基本信息。

看起来每一列都包含了一种特定数据类型的值。你可以通过 `.describe` 方法来查看数值列的统计信息（平均值、标准偏差、最小值/最大值和非空值的数量）。

下面是我们到目前为止所研究的函数和方法的总结：

-   `pd.read_csv` – 将数据从 CSV 文件中读入到 Pandas 的 `DataFrame` 对象中
-   `.info()` – 查看关于行、列和数据类型的基本信息
-   `.describe()` – 查看数值列的统计信息
-   `.columns` – 获取一个包含列名的列表
-   `.shape` – 获取行数和列数作为一个数组

### 如何从 Pandas 数据帧中检索数据

你想做的首件事可能是从这个数据帧中检索数据，如一个指定日的计数，或者一个特定列的值列表。

为此，你应该了解数据帧中数据的内部表示方法。从概念上讲，你可以将数据帧视为一个字典列表：键是列名，值是包含相应列数据的列表或数组。

用上面的格式来表示数据具有以下几个好处：

-   列中的所有值通常具有相同类型的值，因此将它们存储在单个数组中更有效。
-   检索特定行的值只需要从每个列数组中提取给定索引处的元素。
-   与其他格式相比，如对每行数据使用字典，这种表示形式更加紧凑（列名只记录一次）（参见下面的示例）。

与字典列表进行类比，你大概可以猜到如何从数据帧中检索数据。例如，我们可以使用 `[]` 索引符号来从一个指定列中获取值列表。

每一列都用名为 `Series` 的数据结构来表示，它本质上是一个包含额外方法和属性的 numpy 数组。

除了使用索引符号 `[]`, Pandas 也允许使用 `.` 符号来将列作为数据帧的属性进行访问。但是，这个方法仅限于那些不包含空字符或者特殊字符的列。

更进一步，你可以传递一个列的列表到索引符号 `[]` 中，用来访问这些列的数据帧的子集。

新的数据帧 `cases_df` 只是原始数据帧 `covid_df` 的“视图”。两者都指向计算机内存中相同的数据。在其中一个更改值，另一个相应的值也会被更改。

在数据帧之间共享数据使得 Pandas 中的数据操作速度非常快。每次想要操作现有数据帧来创建新数据帧时，你都不必担心复制数千或数百万行导致的性能开销。

有些时候你需要数据帧的完整副本，这时你可以使用 `copy` 方法。

`covid_df_copy` 中的数据与 `covid_df` 的是完全分开的，改变其中一个的值并不会影响另一个。

要访问特定的数据行，Pandas 提供了`.loc` 方法。

要注意的是，在 `new_cases` 和 `new_deaths` 列中，刚开始的一些值是 `0`，但是在 `new_tests` 列中对应的值是 `NaN`。那是因为这个 CSV 文件本身并没有特定日期的 `new_tests` 列的数据（你可以通过查看文件来验证这一点）。这些值可能缺失或未知。

`0` 和 `NaN` 之间的区别很微妙但很重要。在此数据集中，它表示在指定日期没有报告每日测试数量。意大利从 2020 年 4 月 19 日开始报告每日测试数据。在 4 月 19 日之前，他们已经进行了 935,310 次测试。

我们可以使用列的 `first_valid_index` 方法找到不包含 `NaN` 值的第一个索引。

让我们查看此索引前后的几行，以验证值是否从 `NaN` 更改为实际数字。我们可以向`loc`传递一个范围来实现查看。

注意，尽管我们采取了随机样品，每一行的原始索引都被保留了。这是数据帧非常有用的一个属性。

下面是本节我们看到的函数和方法的总结：

-   `covid_df['new_cases']` – 使用列名将列当作 `Series` 来检索 
-   `new_cases[243]` – 使用索引从 `Series` 中检索值
-   `covid_df.at[243, 'new_cases']` – 从数据帧中检索单个值
-   `covid_df.copy()` – 创建数据帧的深度副本
-   `covid_df.loc[243]` - 从数据帧中检索数据行或数据行范围
-   `head`、`tail` 和 `sample` – 从数据帧中检索多行数据
-   `covid_df.new_tests.first_valid_index` – 查找序列中的第一个非空索引

### 如何分析 Pandas 数据帧中的数据

让我们尝试回答这些数据的一些问题。

****问：关于意大利新冠肺炎，总的确诊病例和死亡人数是多少？****

与 Numpy 数组类似，Pandas 序列支持 `sum` 方法，这个问题也就回答了。

****问：总的死亡率是多少（报告的死亡数除以确诊病例）？****

****问：进行测试的总人数是多少？在报告每日测试数量之前，共进行了 935**，**310 次测试。****

****问：哪些部分测试结果为阳性？****

尝试提问回答关于这些数据更多的问题。

### 如何在 Pandas 中对行进行查询和排序

假设我们只想查看确诊病例大于 1，000 的日子。那么可以使用布尔表达式来检查哪些行满足此条件。

布尔表达式返回一个包含 `True` 和 `False` 布尔值的序列。你可以使用这个序列从原始数据帧中选择行的子集，对应于这个序列中的 `True` 值。

这个数据帧包含 72 行，但是为了简洁起见，默认情况下 Jupyter 只显示前五行和后五行。我们可以更改一些显示选项，来查看所有行。

我们还可以制定涉及多个列的更复杂的查询。例如，尝试确定确诊病例除以测试数量的比例高于总的 `positive_rate` 的日子。

但是，请记住，有时需要一些日子才能获得测试结果，因此，我们不能对同一天的新增病例数和测试数量进行比较。基于 `positive_rate` 列的任何推断都可能是不正确的。

注意这些微妙的联系是非常重要的，通常 CSV 文件中不会传达这些关系，而需要外部的上下文环境。通读数据集附带的文档或询问更多的信息，不失为一个好主意。

现在，让我们使用 `drop` 方法来移除 `positive_rate` 列。

你能指出 `inplace` 参数的目的吗？

#### **如何在 Pandas 中使用列值对行进行排序**

你可以使用 `.sort_values` 通过一个指定的列来对行进行排序。让我们排序以确定病例数最多的天数，然后使用 `head` 方法将其链接起来，只列出前十个结果。

看起来 3 月最后两周的每日病例数最多。让我们来对比所记录的死亡人数最多的日子。

可以发现，每日死亡人数的顶峰出现在每日病例达到顶峰之后的一周。

我们也来看看病例数最少的日子。我们也许会想到一年中最开始的几天会出现在列表上。

2020 年 6 月 20 日的新病例数似乎是 `-148`，一个负数！这跟我们预想的不一样，但这就是现实世界数据的本质。这可能是一个数据输入的错误，或者政府可能为了解决过去的计算错误而作的一个更正。

你能在网上挖掘新闻文章并找出这个数字为什么是负数吗？

让我们再来看看 2020 年 6 月 20 日前后的几天。

现在，我们假设这实际上是一个数据输入错误。我们可以使用以下的其中一个方法来处理缺失值或错误值：

1.  将其替换为 `0`
2.  将其替换为整列的平均值
3.  将其替换为前后两个日期的平均值
4.  删除该行

选择哪种方法需要有关数据和问题的一些背景信息。在本例中，由于我们正在处理按日期排序的数据，我们可以继续使用第三种方法。

你可以使用 `.at` 方法来修改数据帧中指定的值。

以下是我们在本节中看到的函数和方法的汇总：

-   `covid_df.new_cases.sum()` – 计算列或系列中值的总和
-   `covid_df[covid_df.new_cases > 1000]` – 使用布尔表达式查询满足所选条件的行子集
-   `df['pos_rate'] = df.new_cases/df.new_tests` – 通过合并现有列中的数据来添加新列
-   `covid_df.drop('positive_rate')` – 从数据帧中删除一列或多列
-   `sort_values` – 使用列值对数据帧的行进行排序
-   `covid_df.at[172, 'new_cases'] = ...` – 替换数据帧中的值

### 如何处理 Pandas 中的日期

虽然我们已经查看了病例、测试、阳性率等这些总体的数字，但按月研究这些数字也很有用。

`date` 列在这里可能会派上用场，因为 Pandas 提供了许多用于处理日期的实用程序。

当前日期的数据类型是 `object`，因此 Pandas 不知道这一列是日期。我们用 `pd.to_datetime` 方法将它转成 `datetime` 列。

现在你可以看到它的数据类型是 `datetime64`。我们用 `DatetimeIndex` 类将数据的不同部分提取到单独的列中。([查看文档](https://jovian.ai/outlink?url=https%3A%2F%2Fpandas.pydata.org%2Fpandas-docs%2Fversion%2F0.23.4%2Fgenerated%2Fpandas.DatetimeIndex.html)).

我们来看一下 5 月份的整体指标。通过查询五月的行，选择其列的子集，并使用 `sum` 方法来合计每个选定列的值。

与其他日子相比，星期天所报告的病例看起来更多。

尝试提问回答更多的数据中有关日期的问题。

### 如何在 Pandas 中分组和聚合数据

下一步，如果我们想要汇总逐日的数据，还要创建一个包含逐月数据的新数据帧。我们可以用 `groupby` 函数来为每一个月创建一个组，然后选择我们想要聚合的列，并用 `sum` 方法来聚合。

结果是一个新的数据帧，它使用传递给 `groupby` 的列中的唯一值作为索引。分组与聚合是非常有用的方法，用于逐步将数据汇总为更小的数据帧。

除了按总和聚合之外，还可以按平均值等其他方式进行聚合。让我们分别来计算每个月每日新增病例、死亡人数和检测数的平均值。

除了分组之外，另一种聚合形式是计算截止到每行日期的病例、测试或死亡的累积总和。我们可以使用 `cumsum` 方法计算某一列的累积总和并作为一个新的系列。

我们来添加新的三列：`total_cases`，`total_deaths` 和 `total_tests`。

注意 `total_tests` 列中的 `NaN` 值是如何保持不被影响的。

### 如何在 Pandas 中合并来自多个来源的数据

要确定其他指标，例如每百万人口的测试人数、每百万人口的确诊病例数等，我们需要该国家/地区的更多信息，即其人口。

让我们来下载另一个文件 `locations.csv`，它包含了包括意大利在内的许多国家的健康相关信息。

通过添加更多的列，我们可以将这些数据合并到先前的数据中。但是，要合并两个数据帧，我们至少需要一个共同的列。因此，我们在 `covid_df` 数据帧中插入 `location` 列，并将该列的所有值设为 `“Italy”`。

在 `covid_df` 中，每一行都附加上了意大利的位置信息。如果 `covid_df` 数据帧中包含了多个地区的数据，那么每一行应该附加上相应国家的位置信息。

现在，我们就可以计算每百万人口的病例数、死亡人数以及测试人数这些指标了。

### 如何用 Pandas 将数据写回到文件中

在完成分析，添加新列之后，你需要将结果写回到文件中。否则，一旦 Jupter notebook 关闭后，数据就会丢失。

在写入文件之前，让我们先创建一个只包含我们希望记录的列的数据帧。

### 奖励：使用 Pandas 进行基本绘图

通常在 Jupyter notebook 中，我们使用像 `matplotlib` 或 `seaborn` 这样的库来绘图。但是，Pandas 数据帧和序列提供了便利的 `.plot` 方法来进行快速简单地绘图。

我们来绘制一个折线图，显示每日病例数如何随时间变化。

虽然此图显示了整体趋势，但很难判断峰值发生的位置，因为 X 轴上没有日期。我们可以使用 `date` 列作为数据帧的索引来解决这个问题。

注意数据帧的索引并非必须是数值，使用日期作为索引，同样可以通过 `.loc` 获取指定日期的数据。

下面我们将每天的新病例和新死亡人数绘制为折线图。

我们还可以比较总病例数和总死亡人数。

让我们看看死亡率和阳性检测率如何随时间变化的。

最后，我们来绘制逐月数据的条形图，以在更高的层次上查看趋势。

### Pandas 练习

尝试以下练习，以熟悉 Pandas 数据帧，并锻炼你的技术：

-   [Pandas 数据帧任务](https://jovian.ml/aakashns/pandas-practice-assignment)
-   [Pandas 附加练习](https://github.com/guipsamora/pandas_exercises)
-   [尝试从 Kaggle 下载并分析数据](https://www.kaggle.com/datasets)

### 总结及延展阅读

在本教程中，我们涵盖了以下主题：

-   如何将 CSV 文件读入到 Pandas 数据帧中
-   如何从 Pandas 数据帧中检索数据
-   如何查询、排序和分析数据
-   如何合并、分组和聚合数据
-   如何从日期中提取有用的信息
-   使用折线图和条形图进行基本绘图
-   如何将数据帧写入到 CSV 文件中

查看以下资源以了解 Pandas 的更多信息：

-   [Pandas 用户指南](https://pandas.pydata.org/docs/user_guide/index.html)
-   [Python 数据分析（Wes McKinney 的书 —— 他是 Pandas 的创建者）](https://www.oreilly.com/library/view/python-for-data/9781491957653/)

### 查看问题以检验你对 Pandas 的理解

尝试回答以下问题，来测验你对本章所涵盖的主题的理解：

1.  Pandas 是什么？有用在哪里？
2.  如何安装 Pandas 库？
3.  如何导入 `pandas` 模块？
4.  导入 `pandas` 模块后，它的常用别名是什么？
5.  如果用 Pandas 读入 CSV 文件？请举例。
6.  用 Pandas 还可以读入哪些文件格式？举例说明。
7.  Pandas 数据帧是什么？
8.  Pandas 数据帧与 Numpy 数组的区别是什么？
9.  在数据帧中如何找到行数和列数？
10.  如何在数据帧中获取列的列表？
11.  数据帧中`describe` 方法的作用是什么？
12.  `info` 和 `describe` 这两个数据帧方法的区别是什么？
13.  Pandas 数据帧在概念上与字典列表或列表字典相似吗？举例解释。
14.  Pandas 中的 `Series` 是什么？它跟 Numpy 数组的区别是什么？
15.  如何访问数据帧中的列？
16.  如何访问数据帧中的行？
17.  如何访问数据帧中指定的行和列中的元素？
18.  如何创建具有特定列集的数据帧子集？
19.  如何创建具有特定行范围的数据帧子集？
20.  更改数据帧内的值，是否会影响使用行或列的子集所创建的其他数据帧？为什么？
21.  如何创建数据帧的副本？
22.  为什么要避免创建太多的数据帧副本？
23.  如何查看数据帧中的开头几行？
24.  如何查看数据帧中的末尾几行？
25.  如何在数据帧中选择随机行？
26.  数据帧中的“索引”是什么？如何有用？
27.  Pandas 数据帧中的 `NaN` 值代表什么意思？
28.  `Nan` 和 `0` 的区别是什么？
29.  在 Pandas 序列或列中，如何识别第一个非空行？
30.  `df.loc` and `df.at` 的区别是什么？
31.  在哪里可以找到 Pandas 中 `DataFrame` 和 `Series` 对象所支持的全部方法列表？
32.  如何在数据帧的列中找到数字的总和？
33.  如何找到数据帧列中数字的平均值？
34.  如何找到数据帧列中非空数字的数量？
35.  在布尔表达式中使用 Pandas 列可以得到什么结果？举例说明。
36.  如何选择行子集，使得其指定的列值满足给定的条件？举例说明。
37.  表达式 `df[df.new_cases > 100]` 的结果是什么？
38.  如何在 Jupyter 单元格输出中显示 pandas 数据帧的所有行？
39.  对数据帧中的两列执行算术运算，会得到什么结果？举例说明。
40.  如何通过组合两个现有列的值，在数据帧中添加新列？举例说明。
41.  如何删除数据帧中的列？举例说明。
42.  在数据帧方法中 `inplace` 参数的作用是什么？
43.  如何基于一个特定列中的值来对数据帧的行进行排序？
44.  如果利用多个列中的值来对 pandas 数据帧进行排序？
45.  在对 Pandas 数据帧排序时，如何指定是按升序还是降序来排序？
46.  如何修改数据帧中指定的值？
47.  如何将数据帧的列转换成 `datetime` 数据类型？
48.  使用 `datetime` 数据类型而不用 `object` 的好处是什么？
49.  如何将日期列的不同部分（如月、年、月、工作日等）提取到单独的列中？举例说明。
50.  如何聚合数据帧的多个列？
51.  数据帧的 `groupby` 方法的作用是什么？举例说明。
52.  聚合用 `groupby` 创建的组有哪些不同的方式？
53.  运行或累积总和是什么意思？
54.  如何创建一个新列，包含另一列的运行或累积总和？
55.  Pandas 数据帧还支持哪些其他的累积方法？
56.  合并两个数据帧是什么意思？举例说明。
57.  如何指定用于合并两个数据帧的列？
58.  如何将 Pandas 数据帧的数据写入到 CSV 文件中？请举个例子。
59.  还可以将 Pandas 数据帧写入到哪些文件格式中？举例说明。
60.  如何创建折线图，用于显示数据帧中列的值？
61.  如何将数据帧的列转换为其索引？
62.  数据帧的索引可以是非数字吗？
63.  使用非数字数据帧的好处是什么？举例说明。
64.  如何创建条形图，用于显示数据帧中列的值？
65.  Pandas 数据帧和系列还支持哪些其他类型的绘图方法？

你已经准备好进入本教程的下一部分了。

## 使用 Python、Matplotlib 和 Seaborn 进行数据可视化

![](https://i.imgur.com/9i806Rh.png)

Notebook 链接：[https://jovian.ai/aakashns/python-matplotlib-data-visualization](https://jovian.ai/aakashns/python-matplotlib-data-visualization)

数据可视化是对数据的图形化呈现。它生成图片，将要呈现的数据之间的关系传递给读者。

可视化数据是数据分析和机器学习的重要部分。我们将使用 Python 库 [Matplotlib](https://jovian.ai/outlink?url=https%3A%2F%2Fmatplotlib.org) 和 [Seaborn](https://jovian.ai/outlink?url=https%3A%2F%2Fseaborn.pydata.org) 来学习和应用一些常用的数据可视化技术。在本教程中，我们会交替使用 __chart__，__plot__ 和 __graph__ 这三个词。

开始前，我们需要先安装并导入这些库。`matplotlib.pyplot` 模块用于基本的绘图，如折线图和条形图，导入后通常使用别名 `plt` 。`seaborn` 模块用于更高级的绘图，导入后通常使用别名 `sns`。

注意我们还包含了特殊命令 `%matplotlib inline`，确保所绘的图内嵌在 Jupyter notebook 中显示。如果不使用这条命令，有时图形会以弹窗显示。

### 如何在 Python 中创建折线图

折线图是最简单、应用最广泛的数据可视化技术之一。折线图将信息显示为由直线连接的一系列数据点或标记。

你可以自定义线条和标记的形状、大小、颜色和其他美学元素，以获得更好的视觉清晰度。

下面是一个 Python 列表，显示了一个名为 Kanto 的虚构国家在六年内的苹果产量（吨/公顷）。

我们可以使用折线图来可视化苹果的产量如何随时间变化。我们使用 `plt.plot` 函数来绘制折线图。

调用 `plt.plot` 函数就能绘制预期的折线图，同时它还返回了绘制的绘图列表 `[<matplotlib.lines.Line2D at 0x7ff70aa20760>]`，会显示在输出区域。我们可以在单元格中最后一条语句的末尾添加分号（`;`），使得只显示图形而不显示输出内容。

让我们一步一步来增强这个图形，使它更具信息性和美感。

#### **如何在 MatPlotLib 中自定义 X 轴**

当前图形的 X 轴显示了列表元素的索引 0 到 5。如果我们可以显示数据中的年份，这个图形将更具信息性。通过 `plt.plot` 中的两个参数即可实现。

#### **MatPlotLib 中的坐标标签**

通过 `plt.xlabel` 和 `plt.ylabel` 这两个函数，我们可以为坐标添加标签，来显示坐标代表的意义。

#### **如何在 MatPlotLib 中绘制多条折线**

你可以为每条线调用一次 `plt.plot` 函数，这样就可以在同一个图形中绘制多条折线。让我们来比较 Kanto 苹果与橘子的产量。

#### **MatPlotLib 中的图表标题和图例**

为了区分不同的线条，我们可以使用 `plt.legend` 函数在图形中添加一个图例。我们还可以使用 `plt.title` 函数来设置图表的标题。

#### **如何在 MatPlotLib 中使用线条标记**

通过使用 `plt.plot` 的`marker` 参数，我们还可以为每条线上的数据点增添标记。

Matplotlib 提供许多不同的标记，如圆圈、叉号、方块和菱形等。你可以从这个链接找到所有标记类型的列表：[https://matplotlib.org/3.1.1/api/markers\_api.html](https://jovian.ai/outlink?url=https%3A%2F%2Fmatplotlib.org%2F3.1.1%2Fapi%2Fmarkers_api.html) .

#### **如何在 MatPlotLib 中设置线条和标记的样式**

`plt.plot` 函数提供很多参数用于设置线条和标记的样式：

-   `color` 或 `c` – 设置线条颜色 ([支持的颜色](https://jovian.ai/outlink?url=https%3A%2F%2Fmatplotlib.org%2F3.1.0%2Fgallery%2Fcolor%2Fnamed_colors.html))
-   `linestyle` 或 `ls` – 选择是实线还是虚线
-   `linewidth` 或 `lw` – 设置线条宽度
-   `markersize` 或 `ms` – 设置标记尺寸
-   `markeredgecolor` 或 `mec` – 设置标记的边缘颜色
-   `markeredgewidth` 或 `mew` – 设置标记的边缘宽度
-   `markerfacecolor` 或 `mfc` – 设置标记的填充颜色
-   `alpha` – 图形的不透明度

查阅 `plt.plot` 的文档以学习更多内容：[https://matplotlib.org/api/\_as\_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot](https://jovian.ai/outlink?url=https%3A%2F%2Fmatplotlib.org%2Fapi%2F_as_gen%2Fmatplotlib.pyplot.plot.html%23matplotlib.pyplot.plot) .

`fmt` 参数提供了便捷的方法来设置标记的颜色、线条样式和颜色。你可以将它作为 `plt.plot` 的第三参数。

```
fmt = '[marker][line][color]'
```

#### **H如何在 MatPlotLib 中更改图形的尺寸**

你可以使用 `plt.figure` 函数来更改图形的尺寸。

#### **如何使用 Seaborn 改进默认样式**

使用 Seaborn 库中的一些默认样式，很容易让你的图表看起来更加漂亮。你可以全局使用 `sns.set_style` 函数。以下是预定义样式的完整列表：[https://seaborn.pydata.org/generated/seaborn.set\_style.html](https://jovian.ai/outlink?url=https%3A%2F%2Fseaborn.pydata.org%2Fgenerated%2Fseaborn.set_style.html) .

### **MatPlotLib** 中的散点图

在散点图中，两个变量的值被绘成二维网格上的一个点。此外，你还可以使用第三个变量来确定这些点的大小和颜色。让我们来试一个例子。

The [Iris flower dataset](https://jovian.ai/outlink?url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FIris_flower_data_set) provides sample measurements of sepals and petals for three species of flowers. The Iris dataset is included with the Seaborn library and you can load it as a Pandas data frame.

The output is not very informative as there are too many combinations of the two properties within the dataset. There doesn't seem to be simple relationship between them.

We can use a scatter plot to visualize how sepal length and sepal width vary using the `scatterplot` function from the `seaborn` module (imported as `sns`).

#### **How to Add Hues in MatPlotLib**

Notice how the points in the above plot seem to form distinct clusters with some outliers. We can color the dots using the flower species as a `hue`. We can also make the points larger using the `s` argument.

Adding hues makes the plot more informative. We can immediately tell that Setosa irises have a smaller sepal length but higher sepal widths. In contrast, the opposite is true for Virginica irises.

#### **How to **Customiz**e **Seaborn Figures****

Since Seaborn uses Matplotlib's plotting functions internally, we can use functions like `plt.figure` and `plt.title` to modify the figure.

#### **How to Plot Data using Pandas Data Frames with Seaborn**

Seaborn has built-in support for Pandas data frames. Instead of passing each column as a series, you can provide column names and use the `data` argument to specify a data frame.

### Histograms **in MatPlotLib**

A histogram represents the distribution of a variable by creating bins (intervals) along the range of values and showing vertical bars to indicate the number of observations in each bin.

For example, let's visualize the distribution of values of sepal width in the Iris dataset. We can use the `plt.hist` function to create a histogram.

We can immediately see that the sepal widths lie in the range 2.0 - 4.5, and around 35 values are in the range 2.9 - 3.1, which seems to be the most populous bin.

#### **How to C**ontrol the** S**ize and** N**umber of** B**ins****

We can control the number of bins or the size of each one using the bins argument.

#### **How to Manage Multiple Histograms in MatPlotLib**

Similar to line charts, we can draw multiple histograms in a single chart. We can reduce each histogram's opacity so that one histogram's bars don't hide the others'.

Let's draw separate histograms for each species of flowers.

### Bar Charts **in MatPlotLib**

Bar charts are quite similar to line charts, that is they show a sequence of values. However, a bar is shown for each value, rather than points connected by lines. We can use the `plt.bar` function to draw a bar chart.

#### **Bar Plots with Averages in Seaborn**

Let's look at another sample dataset included with Seaborn called `tips`. The dataset contains information about the sex, time of day, total bill, and tip amount for customers visiting a restaurant over a week.

We might want to draw a bar chart to visualize how the average bill amount varies across different days of the week. One way to do this would be to compute the day-wise averages and then use `plt.bar` (try it as an exercise).

However, since this is a very common use case, the Seaborn library provides a `barplot` function which can automatically compute averages.

The lines cutting each bar represent the amount of variation in the values. For instance, it seems like the variation in the total bill is relatively high on Fridays and low on Saturdays.

We can also specify a `hue` argument to compare bar plots side-by-side based on a third feature, for example sex.

### Heatmaps in Seaborn

A heatmap is used to visualize 2-dimensional data like a matrix or a table using colors. The best way to understand it is by looking at an example.

We'll use another sample dataset from Seaborn, called `flights`, to visualize monthly passenger footfall at an airport over 12 years.

`flights_df` is a matrix with one row for each month and one column for each year. The values show the number of passengers (in thousands) that visited the airport in a specific month of a year. We can use the `sns.heatmap` function to visualize the footfall at the airport.

The brighter colors indicate a higher footfall at the airport. By looking at the graph, we can infer two things:

-   The footfall at the airport in any given year tends to be the highest around July and August.
-   The footfall at the airport in any given month tends to grow year by year.

We can also display the actual values in each block by specifying `annot=True` and using the `cmap` argument to change the color palette.

### Images **in MatPlotLib**

We can also use Matplotlib to display images. Let's download an image from the internet.

### How to Plot Multiple Charts in a Grid **in MatPlotLib and Seaborn**

Matplotlib and Seaborn also support plotting multiple charts in a grid, using `plt.subplots`, which returns a set of axes for plotting.

Here's a single grid showing the different types of charts we've covered in this tutorial.

See this page for a full list of supported functions: [https://matplotlib.org/3.3.1/api/axes\_api.html#the-axes-class](https://jovian.ai/outlink?url=https%3A%2F%2Fmatplotlib.org%2F3.3.1%2Fapi%2Faxes_api.html%23the-axes-class) .

#### ****Pair** P**lots with Seaborn****

Seaborn also provides a helper function `sns.pairplot` to automatically plot several different charts for pairs of features within a dataframe.

### Summary and Further Reading

We have covered the following topics in this tutorial:

-   How to create and customize line charts using Matplotlib
-   How to visualize relationships between two or more variables using scatter plots
-   How to study distributions of variables using histograms and bar charts
-   How to visualize two-dimensional data using heatmaps
-   How to display images using Matplotlib's `plt.imshow`
-   How to plot multiple Matplotlib and Seaborn charts in a grid

In this tutorial we've covered some of the fundamental concepts and popular techniques for data visualization using Matplotlib and Seaborn. Data visualization is a vast field and we've barely scratched the surface here. Check out these references to learn and discover more:

-   Data Visualization cheat sheet: [https://jovian.ml/aakashns/dataviz-cheatsheet](https://jovian.ai/outlink?url=https%3A%2F%2Fjovian.ml%2Faakashns%2Fdataviz-cheatsheet)
-   Seaborn gallery: [https://seaborn.pydata.org/examples/index.html](https://jovian.ai/outlink?url=https%3A%2F%2Fseaborn.pydata.org%2Fexamples%2Findex.html)
-   Matplotlib gallery: [https://matplotlib.org/3.1.1/gallery/index.html](https://jovian.ai/outlink?url=https%3A%2F%2Fmatplotlib.org%2F3.1.1%2Fgallery%2Findex.html)
-   Matplotlib tutorial: [https://github.com/rougier/matplotlib-tutorial](https://jovian.ai/outlink?url=https%3A%2F%2Fgithub.com%2Frougier%2Fmatplotlib-tutorial)

### Review Questions to Check Your Comprehension

Try answering the following questions to test your understanding of the topics covered in this notebook:

1.  数据可视化是什么？
2.  Matplotlib是什么？
3.  Seaborn是什么？
4.  如何安装 Matplotlib 和 Seaborn？
5.  如何导入 Matplotlib 和 Seaborn？导入这两个模块时常用的别名是什么？
6.  神奇命令 `%matplotlib inline` 的作用是什么？
7.  什么是折线图？
8.  如何在 Python 中绘制折线图？举例说明。
9.  如何指定折线图 X 轴的值？
10.  如何为图表的轴指定标签？
11.  如何在同一轴上绘制多个折线图？
12.  How do you show a legend for a line chart with multiple lines?
13.  How you set a title for a chart?
14.  How do you show markers on a line chart?
15.  What are the different options for styling lines and markers in line charts? Illustrate with examples.
16.  What is the purpose of the `fmt` argument to `plt.plot`?
17.  Where can you see a list of all the arguments accepted by `plt.plot`?
18.  How do you change the size of the figure using Matplotlib?
19.  How do you apply the default styles from Seaborn globally for all charts?
20.  What are the predefined styles available in Seaborn? Illustrate with examples.
21.  What is a scatter plot?
22.  How is a scatter plot different from a line chart?
23.  How do you draw a scatter plot using Seaborn? Illustrate with an example.
24.  How do you decide when to use a scatter plot vs a line chart?
25.  How do you specify the colors for dots on a scatter plot using a categorical variable?
26.  How do you customize the title, figure size, legend, and son on for Seaborn plots?
27.  How do you use a Pandas dataframe with `sns.scatterplot`?
28.  What is a histogram?
29.  When should you use a histogram vs a line chart?
30.  How do you draw a histogram using Matplotlib? Illustrate with an example.
31.  What are "bins" in a histogram?
32.  How do you change the sizes of bins in a histogram?
33.  How do you change the number of bins in a histogram?
34.  How do you show multiple histograms on the same axes?
35.  How do you stack multiple histograms on top of one another?
36.  What is a bar chart?
37.  How do you draw a bar chart using Matplotlib? Illustrate with an example.
38.  What is the difference between a bar chart and a histogram?
39.  What is the difference between a bar chart and a line chart?
40.  How do you stack bars on top of one another?
41.  What is the difference between `plt.bar` and `sns.barplot`?
42.  What do the lines cutting the bars in a Seaborn bar plot represent?
43.  How do you show bar plots side-by-side?
44.  How do you draw a horizontal bar plot?
45.  What is a heat map?
46.  What type of data is best visualized with a heat map?
47.  What does the `pivot` method of a Pandas dataframe do?
48.  How do you draw a heat map using Seaborn? Illustrate with an example.
49.  How do you change the color scheme of a heat map?
50.  How do you show the original values from the dataset on a heat map?
51.  How do you download images from a URL in Python?
52.  How do you open an image for processing in Python?
53.  What is the purpose of the `PIL` module in Python?
54.  How do you convert an image loaded using PIL into a Numpy array?
55.  How many dimensions does a Numpy array for an image have? What does each dimension represent?
56.  What are "color channels" in an image?
57.  What is RGB?
58.  How do you display an image using Matplotlib?
59.  How do you turn off the axes and gridlines in a chart?
60.  How do you display a portion of an image using Matplotlib?
61.  How do you plot multiple charts in a grid using Matplotlib and Seaborn? Illustrate with examples.
62.  What is the purpose of the `plt.subplots` function?
63.  What are pair plots in Seaborn? Illustrate with an example.
64.  How do you export a plot into a PNG image file using Matplotlib?
65.  Where can you learn about the different types of charts you can create using Matplotlib and Seaborn?

Congratulations on making it to the end of this tutorial! You can now apply these skills to analyze real world datasets from sources like [Kaggle](https://kaggle.com/datasets).

If you're pursuing a career in data science and machine learning, consider joining the [Zero to Data Science Bootcamp by Jovian](https://zerotodatascience.com). It's a 20-week part-time program where you'll complete 7 courses, 12 coding assignments and 4-real world projects. You will also receive 6 months of career support to help you find your first data science job.

[

Part-Time Data Science Bootcamp - Money Back Guarantee - Jovian

Learn industry-relevant skills from Silicon Valley engineers, build real-world projects, and start your data science career. Get hired or get your money back.

![](https://uploads-ssl.webflow.com/5f853acc1d8f7c5cbc3cda0d/5f8cf00b4cdcc3434cfa71d5_jovian_logo_256_square.png)Jovian

![](https://uploads-ssl.webflow.com/5f853acc1d8f7c5cbc3cda0d/60920cd3dcd3ce02eb03101f_bootcamp-1200x628.png)

](https://www.jovian.ai/zero-to-data-science-bootcamp)
