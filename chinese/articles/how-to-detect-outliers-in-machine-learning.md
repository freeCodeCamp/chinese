> -  原文地址：[How to Detect Outliers in Machine Learning – 4 Methods for Outlier Detection](https://www.freecodecamp.org/news/how-to-detect-outliers-in-machine-learning/)
> -  原文作者：[Bala Priya C](https://www.freecodecamp.org/news/author/bala-priya/)
> -  译者：TouDa
> -  校对者：

![如何在机器学习中发现异常点 - 4种发现异常点的方法](https://www.freecodecamp.org/news/content/images/size/w2000/2022/07/Outlier-Detection.png)

你是否使用过现实数据来对机器学习模型进行过训练？如果答案是肯定的，你很可能遇到过_异常点_。

异常点通常_明显_的不同区数据集中其他数据。异常点的存在会扭曲数据集的数据分布，提高数据的不连贯性或使观测产生错误。

为了使训练模型在进行测试时有更好的泛用性，发现并删除异常点非常重要。

在本文中，我们将介绍几个常用来发现并去除异常点的统计学工具。

## 为什么需要发现异常点？

在机器学习流程中_数据清洗_和_数据预处理_是两个关键步骤，它们能帮助你更好地理解你所面对的数据。这些步骤中包括处理丢失值，发现异常值等操作。

过高或过低的异常值常常会扭曲数据集的统计分析结果。这会使得训练出来的模型低效甚至完全无效。

处理异常值需要一定的专业性，在_不清楚_所面对的数据和消除异常值工具适用环境的情况下不应冒然使用。

举例来说，如果你在房价数据集中发现_少量_房价处于150万美金并显著高于所有房价中位数时，这些150万美金的房价很可能是异常值。但是，当数据集包含有大量100万美金以上的房价时，房价呈现上涨趋势。此时将150万美金的房价将视为异常值是_不合适_的。在此情境下，数据分析者需要一定的房地产知识以便正确处理异常值。

发现异常值的目的是为了去除_真正的异常值_以便构建一个泛用的，即使面对未知数据依旧能表现良好的模型。我们将几个有助于发现异常值的统计工具。

## 如何通过标准差发现异常值

如果一组数据，或数据集中某些特征符合[正态分布]时(https://mathworld.wolfram.com/NormalDistribution.html)，可以考虑使用正态分布及等效的Z-分数（z-score）来发现异常值。

在统计学中，标准差（standard deviation）反映了_数据点和均值（mean）之间的关系+，一言以蔽之，标准差衡量的是数据点离数据的算数平均有多远。

对于正态分布的数据来说，约68.2%的数据在均值的一倍标准差之内。约有95.4%和99.7%的数据点在均值的两倍和三倍标准差以内。

我们约定标准差为σ，算术平均为μ。

一个发现异常值的方法是将_阈值下限_设为均值减去三倍标准差 (μ - 3\*σ) ，_阈值上限_设为均值加上三倍标准差 (μ + 3\*σ) 。所有在阈值之外的数据点都被视为异常值。

因为99.7%的数据点会在均值的±三倍标准差以内，此方法将会发现并标记0.3%的数据点为异常值。

### 使用标准差检测异常点的代码

我们通过构造一个正态分布的学生分数数据集，用以解释发现异常点的过程。

第一步，载入必须的python库。

```Python
import numpy as np
import pandas as pd
import seaborn as sns
```

第二步，定义名为`generate_scores()`的方程，这个方程会生成一个有包含有200个数据的正态分布的分数数据集。我们会使用这个方程生成数据集并存储到变量`scores_data`中。


```Python
def generate_scores(mean=60,std_dev=12,num_samples=200):
	np.random.seed(27)
	scores = np.random.normal(loc=mean,scale=std_dev,size=num_samples)
	scores = np.round(scores, decimals=0)
	return scores
scores_data = generate_scores()
```

你可以使用Seaborn的`displot()`方程来生成数据集分布图像。通过下图可以看出，这个数据集服从正态分布。

```Python
sns.set_theme()
sns.displot(data=scores_data).set(title="Distribution of Scores", xlabel="Scores")
```

![EqfsNr10SYnFcCpdC_5Bdt9Z3jWIsaTI1yCcATGbf10BXTwwqKuJHUMuZT9n6M3bGuU8k4QOA8Vb87BStDzxQRRdQ-MzMwLT2EZZJL4ieB0_u0LnvsUXCkYBTllcll15mF1oGziS1QqZrfYR5A](https://lh6.googleusercontent.com/EqfsNr10SYnFcCpdC_5Bdt9Z3jWIsaTI1yCcATGbf10BXTwwqKuJHUMuZT9n6M3bGuU8k4QOA8Vb87BStDzxQRRdQ-MzMwLT2EZZJL4ieB0_u0LnvsUXCkYBTllcll15mF1oGziS1QqZrfYR5A)

图表1：正态分布

接下来，我们可以把该数据集导入[Pandas dataframe](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html) for further analysis.

```python
df_scores = pd.DataFrame(scores_data,columns=['score'])
```

你可以使用`.mean()`和`.std()`函数来获取数据集`df_scores`的均值和标准差。

```Python
df_scores.mean()
# Output
score    61.005
dtype: float64
df_scores.std()
# Output
score    11.854434
dtype: float64
```

像之前说的一样，阈值下限(`lower_limit`)设为算数平均减去三倍标准差，阈值上限(`upper_limit`)设为算术平均加上三倍标准差。

```Python
lower_limit = df_scores.mean() - 3*df_scores.std()
upper_limit = df_scores.mean() + 3*df_scores.std()
print(lower_limit)
print(upper_limit)
# Output
25.530716709142666
96.47928329085734
```

通过上一步我们定义了阈值的上下限，我们可以使用这个阈值`[lower_limit, upper_limit]`来筛选数据集`df_score`中处于这个阈值的数据点，代码如下。

```Python
df_scores_filtered=df_scores[(df_scores['score']>lower_limit)&(df_scores['score']<upper_limit)]
print(df_scores_filtered)
# Output
score
0     75.0
1     56.0
2     67.0
3     65.0
4     63.0
..     ...
194   42.0
195   76.0
196   67.0
197   74.0
199   53.0
[198 rows x 1 columns]
```

通过上面的输出，我们发现这个方法移除了两个数据点，数据集`df_scores_filtered`包含有198个数据点。

## 如何用过z-score检测异常值

接下来我们尝试使用z-score检测异常值的方法。对于均值为μ标准差为σ的正态分数来说，数据点x的z-score可以这么计算：

**z = (x - μ)/σ**

通过上述公式，我们可以推导出以下条件：

-   当 x = μ 时, z-score 为 0.
-   当 x = μ ± 1, μ ± 2, 或 μ ± 3 时, z-score 为 ± 1, ± 2, 或 ± 3.

我们可以发现，通过z-score检测异常值的方法其实等价于我们之前尝试过的通过标准差检测异常值的方法。通过对数据点进行标准化(z = (x - μ)/σ)，所有低于标准差方法中低阈值(μ - 3\*σ)的数据点将等价于z-score小于-3的数据点。

类似的，通过标准化，大于上阈值(μ + 3\*σ)的数据点等价于z-score大于3的数据点。所以上下阈值`[lower_limit, upper_limit]`可以理解为\[-3, 3\]。

接下来我们将使用z-score方法来检测数据集`df_scores`中的异常点。

### 使用z-score检测异常点方法的代码

第一步，我们计算所有数据点的z-score，并把z\_score作为新的一列添加进数据集`df_scores`中。

```Python
df_scores['z_score']=(df_scores['score'] - df_scores['score'].mean())/df_scores['score'].std()
df_scores.head()
# Output
score	z_score
0	75.0	1.180571
1	56.0	-0.422205
2	67.0	0.505718
3	65.0	0.337005
4	63.0	0.168291
```

You can filter the dataframe `df_scores` to retain points whose z-scores are in the range \[-3, 3\], as shown below. The filtered dataframe contains 198 records, as expected.

The methods involving standard deviation and z-scores can be used only when the data set, or the feature that you are examining, follows a normal distribution.

Next, we’ll discuss two outlier detection techniques that can be used _independently_ of the data distribution.

## How to Detect Outliers Using the Interquartile Range (IQR)

In statistics, interquartile range or IQR is a quantity that measures the difference between the first and the third quartiles in a given dataset.

-   The first quartile is also called the one-fourth quartile, or the 25% quartile.
-   If `q25` is the first quartile, it means 25% of the points in the dataset have values less than `q25`.
-   The third quartile is also called the three-fourth, or the 75% quartile.
-   If `q75` is the three-fourth quartile, 75% of the points have values less than `q75`.
-   Using the above notations, `IQR = q75 - q25`.

### Code for Outlier Detection Using Interquartile Range (IQR)

You can use the box plot, or the box and whisker plot, to explore the dataset and visualize the presence of outliers. The points that lie beyond the whiskers are detected as outliers.

You can generate box plots in Seaborn using the `boxplot` function.

```Python
sns.boxplot(data=scores_data).set(title="Box Plot of Scores")
```

![PwEktzeOWRSXfPHTG1WBtFkLA536gNo56REH-5_MYnIpO2r01EeI-QGrTuznsticijoik534i-4ylgP0PDUMUmSm3EaOfl7gXQjOUCVw5XQqPWt9AkY_vpbqODMGSpW7CJ8ST2duYamvREoICA](https://lh6.googleusercontent.com/PwEktzeOWRSXfPHTG1WBtFkLA536gNo56REH-5_MYnIpO2r01EeI-QGrTuznsticijoik534i-4ylgP0PDUMUmSm3EaOfl7gXQjOUCVw5XQqPWt9AkY_vpbqODMGSpW7CJ8ST2duYamvREoICA)

Figure 2: Box Plot of Scores

Now, call the describe method on the dataframe `df_scores`.

```Python
df_scores.describe()
# Output
score
count	200.000000
mean	61.005000
std	    11.854434
min	    20.000000
25%	    54.000000
50%	    62.000000
75%	    67.000000
max	    98.000000
```

We use the 25% and 75% quartile values from the above result to compute IQR, and subsequently set the lower and upper limits to filter `df_scores`.

```Python
IQR = 67-54
lower_limit = 54 - 1.5*IQR
upper_limit = 67 + 1.5*IQR
print(upper_limit)
print(lower_limit)
# Output
86.5
34.5
```

As a next step, filter the dataframe `df_scores` to retain records that lie in the permissible range.

```Python
df_scores_filtered = df_scores[(df_scores['score']>lower_limit) & (df_scores['score']<upper_limit)]
print(df_scores_filtered)
# Output
score
0     75.0
1     56.0
2     67.0
3     65.0
4     63.0
..     ...
194   42.0
195   76.0
196   67.0
197   74.0
199   53.0
[192 rows x 1 columns]
```

As seen in the output, this method labels eight points as outliers, and the filtered dataframe is 192 records long.

You don't always have to call the describe method to identify the quartiles. You may instead use the `percentile()` function in [NumPy](https://numpy.org/doc/stable/user/index.html#user). It takes in two arguments, `a`: an array or a dataframe and `q`: a list of quartiles.

The code cell below shows how you can calculate the first and the third quartiles using the percentile function.

```Python
q25,q75 = np.percentile(a = df_scores,q=[25,75])
IQR = q75 - q25
print(IQR)
# Output
13.0
```

## How to Detect Outliers Using Percentile

In the previous section, we explored the concept of interquartile range, and its application to outlier detection. You can think of percentile as an extension to the interquartile range.

As discussed earlier, the interquartile range works by dropping all points that are outside the range `[q25 - 1.5*IQR, q75 + 1.5*IQR]` as outliers. But removing outliers this way may not be the most optimal choice when your observations have a _wide_ distribution. And you may be discarding more points—than you _actually_ should—as outliers.

Depending on the domain, you may want to widen the range of permissible values to estimate the outliers better. Next, let’s revisit the scores dataset, and use percentile to detect outliers.

### Code for Outlier Detection Using Percentile

Let’s define a custom range that accommodates all data points that lie anywhere between 0.5 and 99.5 percentile of the dataset. To do this, set `q = [0.5, 99.5]` in the percentile function, as shown below.

```Python
lower_limit, upper_limit = np.percentile(a=df_scores,q=[0.5,99.5])
print(upper_limit)
print(lower_limit)

# Output
91.035
28.955
```

Next, you may filter the dataframe using the lower and upper limits obtained from the previous step.

```Python
df_scores_filtered = df_scores[(df_scores['score']>lower_limit) & (df_scores['score']<upper_limit)]
print(df_scores_filtered)

# Output
score
0     75.0
1     56.0
2     67.0
3     65.0
4     63.0
..     ...
194   42.0
195   76.0
196   67.0
197   74.0
199   53.0
[198 rows x 1 columns]
```

From the code cell above, you can see that there are two outliers, and the filtered dataframe has 198 data records.

## Conclusion

In this guide, we covered what outliers are, and why we need to detect them. We then went over the most common techniques for outlier detection.

Here’s a summary:

-   If the data, or feature of interest is normally distributed, you may use standard deviation and z-score to label points that are farther than three standard deviations away from the mean as outliers.
-   If the data is not normally distributed, you can use the interquartile range or percentage methods to detect outliers.

In addition, we discussed the best practices in outlier detection. When a large fraction of data is being labeled as outliers, they are not really outliers but can be attributed to a wider data distribution.

In applying all of the above techniques, it's also important to be aware of the current trend to identify how certain values are evolving, and check for permissible lower and upper limits using domain knowledge.
