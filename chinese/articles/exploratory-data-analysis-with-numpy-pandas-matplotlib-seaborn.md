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

你已经准备好进入本教程的下一节了。

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

让我们查看此索引前后的几行，以验证值是否从 `NaN` 更改为实际数字。我们可以通过向`loc`传递一个范围来实现。

Notice that even though we have taken a random sample, each row's original index is preserved. This is a useful property of data frames.

Here's a summary of the functions and methods we looked at in this section:

-   `covid_df['new_cases']` – Retrieving columns as a `Series` using the column name
-   `new_cases[243]` – Retrieving values from a `Series` using an index
-   `covid_df.at[243, 'new_cases']` – Retrieving a single value from a data frame
-   `covid_df.copy()` – Creating a deep copy of a data frame
-   `covid_df.loc[243]` - Retrieving a row or range of rows of data from the data frame
-   `head`, `tail`, and `sample` – Retrieving multiple rows of data from the data frame
-   `covid_df.new_tests.first_valid_index` – Finding the first non-empty index in a series

### How to Analyze Data from Data Frames in Pandas

Let's try to answer some questions about our data.

****Q: What are the total number of reported cases and deaths related to Covid-19 in Italy?****

Similar to Numpy arrays, a Pandas series supports the `sum` method to answer these questions.

****Q: What is the overall death rate (ratio of reported deaths to reported cases)?****

****Q: What is the overall number of tests conducted? A total of 935**,**310 tests were conducted before daily test numbers were reported.****

****Q: What fraction of tests returned a positive result?****

Try asking and answering some more questions about the data.

### How to Query and Sort Rows in Pandas

Let's say we only want to look at the days which had more than 1,000 reported cases. We can use a boolean expression to check which rows satisfy this criterion.

The boolean expression returns a series containing `True` and `False` boolean values. You can use this series to select a subset of rows from the original dataframe, corresponding to the `True` values in the series.

The data frame contains 72 rows, but only the first and last five rows are displayed by default with Jupyter for brevity. We can change some display options to view all the rows.

We can also formulate more complex queries that involve multiple columns. As an example, let's try to determine the days when the ratio of cases reported to tests conducted is higher than the overall `positive_rate`.

However, keep in mind that sometimes it takes a few days to get the results for a test, so we can't compare the number of new cases with the number of tests conducted on the same day. Any inference based on this `positive_rate` column is likely to be incorrect.

It's essential to watch out for such subtle relationships that are often not conveyed within the CSV file and require some external context. It's always a good idea to read through the documentation provided with the dataset or ask for more information.

For now, let's remove the `positive_rate` column using the `drop` method.

Can you figure the purpose of the `inplace` argument?

#### **How to Sort Rows Using Column Values in Pandas**

You can also sort the rows by a specific column using `.sort_values`. Let's sort to identify the days with the highest number of cases, then chain it with the `head` method to list just the first ten results.

It looks like the last two weeks of March had the highest number of daily cases. Let's compare this to the days where the highest number of deaths were recorded.

It appears that daily deaths hit a peak just about a week after the peak in daily new cases.

Let's also look at the days with the smallest number of cases. We might expect to see the first few days of the year on this list.

It seems like the count of new cases on Jun 20, 2020, was `-148`, a negative number! Not something we might have expected, but that's the nature of real-world data. It could be a data entry error, or the government may have issued a correction to account for miscounting in the past.

Can you dig through news articles online and figure out why the number was negative?

Let's look at some days before and after Jun 20, 2020.

For now, let's assume this was indeed a data entry error. We can use one of the following approaches for dealing with the missing or faulty value:

1.  Replace it with `0`.
2.  Replace it with the average of the entire column
3.  Replace it with the average of the values on the previous and next date
4.  Discard the row entirely

Which approach you pick requires some context about the data and the problem. In this case, since we are dealing with data ordered by date, we can go ahead with the third approach.

You can use the `.at` method to modify a specific value within the dataframe.

Here's a summary of the functions and methods we looked at in this section:

-   `covid_df.new_cases.sum()` – Computing the sum of values in a column or series
-   `covid_df[covid_df.new_cases > 1000]` – Querying a subset of rows satisfying the chosen criteria using boolean expressions
-   `df['pos_rate'] = df.new_cases/df.new_tests` – Adding new columns by combining data from existing columns
-   `covid_df.drop('positive_rate')` – Removing one or more columns from the data frame
-   `sort_values` – Sorting the rows of a data frame using column values
-   `covid_df.at[172, 'new_cases'] = ...` – Replacing a value within the data frame

### How to Work with Dates in Pandas

While we've looked at overall numbers for the cases, tests, positive rate, and more, it would also be useful to study these numbers on a month-by-month basis.

The `date` column might come in handy here, as Pandas provides many utilities for working with dates.

The data type of date is currently `object`, so Pandas does not know that this column is a date. We can convert it into a `datetime` column using the `pd.to_datetime` method.

You can see that it now has the datatype `datetime64`. We can now extract different parts of the data into separate columns, using the `DatetimeIndex` class ([view docs](https://jovian.ai/outlink?url=https%3A%2F%2Fpandas.pydata.org%2Fpandas-docs%2Fversion%2F0.23.4%2Fgenerated%2Fpandas.DatetimeIndex.html)).

Let's check the overall metrics for May. We can query the rows for May, choose a subset of columns, and use the `sum` method to aggregate each selected column's values.

It seems like more cases were reported on Sundays compared to other days.

Try asking and answering some more date-related questions about the data.

### How to Group and Aggregate Data in Pandas

As a next step, we might want to summarize the day-wise data and create a new dataframe with month-wise data. We can use the `groupby` function to create a group for each month, select the columns we wish to aggregate, and aggregate them using the `sum` method.

The result is a new data frame that uses unique values from the column passed to `groupby` as the index. Grouping and aggregation is a powerful method for progressively summarizing data into smaller data frames.

Instead of aggregating by sum, you can also aggregate by other measures like mean. Let's compute the average number of daily new cases, deaths, and tests for each month.

Apart from grouping, another form of aggregation is the running or cumulative sum of cases, tests, or deaths up to each row's date. We can use the `cumsum` method to compute the cumulative sum of a column as a new series.

Let's add three new columns: `total_cases`, `total_deaths`, and `total_tests`.

Notice how the `NaN` values in the `total_tests` column remain unaffected.

### How to Merge Data from Multiple Sources in Pandas

To determine other metrics like test per million, cases per million, and so on, we require some more information about the country, namely its population.

Let's download another file `locations.csv` that contains health-related information for many countries, including Italy.

We can merge this data into our existing data frame by adding more columns. However, to merge two data frames, we need at least one common column. Let's insert a `location` column in the `covid_df` dataframe with all values set to `"Italy"`.

The location data for Italy is appended to each row within `covid_df`. If the `covid_df` data frame contained data for multiple locations, then the respective country's location data would be appended for each row.

We can now calculate metrics like cases per million, deaths per million, and tests per million.

### How to Write Data Back to Files in Pandas

After completing your analysis and adding new columns, you should write the results back to a file. Otherwise, the data will be lost when the Jupyter notebook shuts down.

Before writing to file, let's first create a data frame containing just the columns we wish to record.

### Bonus: Basic Plotting with Pandas

We generally use a library like `matplotlib` or `seaborn` to plot graphs within a Jupyter notebook. However, Pandas dataframes and series provide a handy `.plot` method for quick and easy plotting.

Let's plot a line graph showing how the number of daily cases varies over time.

While this plot shows the overall trend, it's hard to tell where the peak occurred, as there are no dates on the X-axis. We can use the `date` column as the index for the data frame to address this issue.

Notice that the index of a data frame doesn't have to be numeric. Using the date as the index also allows us to get the data for a specific data using `.loc`.

Let's plot the new cases and new deaths per day as line graphs.

We can also compare the total cases vs. total deaths.

Let's see how the death rate and positive testing rates vary over time.

Finally, let's plot some month-wise data using a bar chart to visualize the trend at a higher level.

### Pandas Exercises

Try the following exercises to become familiar with Pandas dataframes and practice your skills:

-   [Assignment on Pandas dataframes](https://jovian.ml/aakashns/pandas-practice-assignment)
-   [Additional exercises on Pandas](https://github.com/guipsamora/pandas_exercises)
-   [Try downloading and analyzing some data from Kaggle](https://www.kaggle.com/datasets)

### Summary and Further Reading

We've covered the following topics in this tutorial:

-   How to read a CSV file into a Pandas data frame
-   How to retrieve data from Pandas data frames
-   How to query, sort, and analyze data
-   How to merge, group, and aggregate data
-   How to extract useful information from dates
-   Basic plotting using line and bar charts
-   How to write data frames to CSV files

Check out the following resources to learn more about Pandas:

-   [User guide for Pandas](https://pandas.pydata.org/docs/user_guide/index.html)
-   [Python for Data Analysis (book by Wes McKinney - creator of Pandas)](https://www.oreilly.com/library/view/python-for-data/9781491957653/)

### Review Questions to Check Your Comprehension

Try answering the following questions to test your understanding of the topics covered in this notebook:

1.  What is Pandas? What makes it useful?
2.  How do you install the Pandas library?
3.  How do you import the `pandas` module?
4.  What is the common alias used while importing the `pandas` module?
5.  How do you read a CSV file using Pandas? Give an example.
6.  What are some other file formats you can read using Pandas? Illustrate with examples.
7.  What are Pandas dataframes?
8.  How are Pandas dataframes different from Numpy arrays?
9.  How do you find the number of rows and columns in a dataframe?
10.  How do you get the list of columns in a dataframe?
11.  What is the purpose of the `describe` method of a dataframe?
12.  How are the `info` and `describe` dataframe methods different?
13.  Is a Pandas dataframe conceptually similar to a list of dictionaries or a dictionary of lists? Explain with an example.
14.  What is a Pandas `Series`? How is it different from a Numpy array?
15.  How do you access a column from a dataframe?
16.  How do you access a row from a dataframe?
17.  How do you access an element at a specific row and column of a dataframe?
18.  How do you create a subset of a dataframe with a specific set of columns?
19.  How do you create a subset of a dataframe with a specific range of rows?
20.  Does changing a value within a dataframe affect other dataframes created using a subset of the rows or columns? Why is it so?
21.  How do you create a copy of a dataframe?
22.  Why should you avoid creating too many copies of a dataframe?
23.  How do you view the first few rows of a dataframe?
24.  How do you view the last few rows of a dataframe?
25.  How do you view a random selection of rows of a dataframe?
26.  What is the "index" in a dataframe? How is it useful?
27.  What does a `NaN` value in a Pandas dataframe represent?
28.  How is `Nan` different from `0`?
29.  How do you identify the first non-empty row in a Pandas series or column?
30.  What is the difference between `df.loc` and `df.at`?
31.  Where can you find a full list of methods supported by Pandas `DataFrame` and `Series` objects?
32.  How do you find the sum of numbers in a column of a dataframe?
33.  How do you find the mean of numbers in a column of a dataframe?
34.  How do you find the number of non-empty numbers in a column of a dataframe?
35.  What is the result obtained by using a Pandas column in a boolean expression? Illustrate with an example.
36.  How do you select a subset of rows where a specific column's value meets a given condition? Illustrate with an example.
37.  What is the result of the expression `df[df.new_cases > 100]` ?
38.  How do you display all the rows of a pandas dataframe in a Jupyter cell output?
39.  What is the result obtained when you perform an arithmetic operation between two columns of a dataframe? Illustrate with an example.
40.  How do you add a new column to a dataframe by combining values from two existing columns? Illustrate with an example.
41.  How do you remove a column from a dataframe? Illustrate with an example.
42.  What is the purpose of the `inplace` argument in dataframe methods?
43.  How do you sort the rows of a dataframe based on the values in a particular column?
44.  How do you sort a pandas dataframe using values from multiple columns?
45.  How do you specify whether to sort by ascending or descending order while sorting a Pandas dataframe?
46.  How do you change a specific value within a dataframe?
47.  How do you convert a dataframe column to the `datetime` data type?
48.  What are the benefits of using the `datetime` data type instead of `object`?
49.  How do you extract different parts of a date column like the month, year, month, weekday, and so on into separate columns? Illustrate with an example.
50.  How do you aggregate multiple columns of a dataframe together?
51.  What is the purpose of the `groupby` method of a dataframe? Illustrate with an example.
52.  What are the different ways in which you can aggregate the groups created by `groupby`?
53.  What do you mean by a running or cumulative sum?
54.  How do you create a new column containing the running or cumulative sum of another column?
55.  What are other cumulative measures supported by Pandas dataframes?
56.  What does it mean to merge two dataframes? Give an example.
57.  How do you specify the columns that should be used for merging two dataframes?
58.  How do you write data from a Pandas dataframe into a CSV file? Give an example.
59.  What are some other file formats you can write to from a Pandas dataframe? Illustrate with examples.
60.  How do you create a line plot showing the values within a column of a dataframe?
61.  How do you convert a column of a dataframe into its index?
62.  Can the index of a dataframe be non-numeric?
63.  What are the benefits of using a non-numeric dataframe? Illustrate with an example.
64.  How you create a bar plot showing the values within a column of a dataframe?
65.  What are some other types of plots supported by Pandas dataframes and series?

You are ready to move on to the next section of the tutorial.

## Data Visualization using Python, Matplotlib, and Seaborn

![](https://i.imgur.com/9i806Rh.png)

Notebook link: [https://jovian.ai/aakashns/python-matplotlib-data-visualization](https://jovian.ai/aakashns/python-matplotlib-data-visualization)

Data visualization is the graphic representation of data. It involves producing images that communicate relationships among the represented data to viewers.

Visualizing data is an essential part of data analysis and machine learning. We'll use Python libraries [Matplotlib](https://jovian.ai/outlink?url=https%3A%2F%2Fmatplotlib.org) and [Seaborn](https://jovian.ai/outlink?url=https%3A%2F%2Fseaborn.pydata.org) to learn and apply some popular data visualization techniques. We'll use the words __chart__, __plot__, and __graph__ interchangeably in this tutorial.

To begin, let's install and import the libraries. We'll use the `matplotlib.pyplot` module for basic plots like line and bar charts. It is often imported with the alias `plt`. We'll use the `seaborn` module for more advanced plots. It is commonly imported with the alias `sns`.

Notice this we also include the special command `%matplotlib inline` to ensure that our plots are shown and embedded within the Jupyter notebook itself. Without this command, sometimes plots may show up in pop-up windows.

### How to Create a Line Chart in Python

The line chart is one of the simplest and most widely used data visualization techniques. A line chart displays information as a series of data points or markers connected by straight lines.

You can customize the shape, size, color, and other aesthetic elements of the lines and markers for better visual clarity.

Here's a Python list showing the yield of apples (tons per hectare) over six years in an imaginary country called Kanto.

We can visualize how the yield of apples changes over time using a line chart. To draw a line chart, we can use the `plt.plot` function.

Calling the `plt.plot` function draws the line chart as expected. It also returns a list of plots drawn `[<matplotlib.lines.Line2D at 0x7ff70aa20760>]`, shown within the output. We can include a semicolon (`;`) at the end of the last statement in the cell to avoiding showing the output and display just the graph.

Let's enhance this plot step-by-step to make it more informative and beautiful.

#### **How to Customize the X-axis in MatPlotLib**

The X-axis of the plot currently shows list element indices 0 to 5. The plot would be more informative if we could display the year for which we're plotting the data. We can do this by two arguments `plt.plot`.

#### **Axis Labels in MatPlotLib**

We can add labels to the axes to show what each axis represents using the `plt.xlabel` and `plt.ylabel` methods.

#### **How to Plot Multiple Lines in MatPlotLib**

You can invoke the `plt.plot` function once for each line to plot multiple lines in the same graph. Let's compare the yields of apples vs. oranges in Kanto.

#### **Chart Title and Legend in MatPlotLib**

To differentiate between multiple lines, we can include a legend within the graph using the `plt.legend` function. We can also set a title for the chart using the `plt.title` function.

#### **How to Use Line Markers in MatPlotLib**

We can also show markers for the data points on each line using the `marker` argument of `plt.plot`.

Matplotlib provides many different markers like a circle, cross, square, diamond, and more. You can find the full list of marker types here: [https://matplotlib.org/3.1.1/api/markers\_api.html](https://jovian.ai/outlink?url=https%3A%2F%2Fmatplotlib.org%2F3.1.1%2Fapi%2Fmarkers_api.html) .

#### **How to Style Lines and Markers in MatPlotLib**

The `plt.plot` function supports many arguments for styling lines and markers:

-   `color` or `c` – Set the color of the line ([supported colors](https://jovian.ai/outlink?url=https%3A%2F%2Fmatplotlib.org%2F3.1.0%2Fgallery%2Fcolor%2Fnamed_colors.html))
-   `linestyle` or `ls` – Choose between a solid or dashed line
-   `linewidth` or `lw` – Set the width of a line
-   `markersize` or `ms` – Set the size of markers
-   `markeredgecolor` or `mec` – Set the edge color for markers
-   `markeredgewidth` or `mew` – Set the edge width for markers
-   `markerfacecolor` or `mfc` – Set the fill color for markers
-   `alpha` – Opacity of the plot

Check out the documentation for `plt.plot` to learn more: [https://matplotlib.org/api/\_as\_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot](https://jovian.ai/outlink?url=https%3A%2F%2Fmatplotlib.org%2Fapi%2F_as_gen%2Fmatplotlib.pyplot.plot.html%23matplotlib.pyplot.plot) .

The `fmt` argument provides a shorthand for specifying the marker shape, line style, and line color. You can provide it as the third argument to `plt.plot`.

```
fmt = '[marker][line][color]'
```

#### **How to Change the Figure Size in MatPlotLib**

You can use the `plt.figure` function to change the size of the figure.

#### **How to Improve Default Styles using Seaborn**

An easy way to make your charts look beautiful is to use some default styles from the Seaborn library. You can apply them globally using the `sns.set_style` function. You can see a full list of predefined styles here: [https://seaborn.pydata.org/generated/seaborn.set\_style.html](https://jovian.ai/outlink?url=https%3A%2F%2Fseaborn.pydata.org%2Fgenerated%2Fseaborn.set_style.html) .

### Scatter Plots **in MatPlotLib**

In a scatter plot, the values of 2 variables are plotted as points on a 2-dimensional grid. Additionally, you can also use a third variable to determine the size or color of the points. Let's try out an example.

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

1.  What is data visualization?
2.  What is Matplotlib?
3.  What is Seaborn?
4.  How do you install Matplotlib and Seaborn?
5.  How you import Matplotlib and Seaborn? What are the common aliases used while importing these modules?
6.  What is the purpose of the magic command `%matplotlib inline`?
7.  What is a line chart?
8.  How do you plot a line chart in Python? Illustrate with an example.
9.  How do you specify values for the X-axis of a line chart?
10.  How do you specify labels for the axes of a chart?
11.  How do you plot multiple line charts on the same axes?
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
