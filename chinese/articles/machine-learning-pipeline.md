> -  原文地址：[How to Improve Machine Learning Code Quality with Scikit-learn Pipeline and ColumnTransformer](https://www.freecodecamp.org/news/machine-learning-pipeline/)
> -  原文作者：[Yannawut Kimnaruk](https://www.freecodecamp.org/news/author/yannawut/)
> -  译者：toudatouda
> -  校对者：

![如何通过Scikit-learn Pipeline和ColumnTransformer提升机器学习代码质量](https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/Python-Power-BI-1.png)

当你在推进机器学习项目时，最麻烦的步骤通常是数据清洗和数据预处理。尤其是当你使用Jupyter Notebook时，运行大量代码块常常令人迷失。

Scikit-learn库中的管道（Pipeline）和列变形（ColumnTransformer）工具可以大幅减轻你的工作量。管道工具可以将多个数据变形步骤结合，使相关的数据变形操作不再需要一步一步运行。你可以用更少的代码获得相同的结果。管道工具还可以使数据工作流程更易于理解也更易于复用。

这篇文章将从一个简单的案例开始逐步增加难度，一步一步的展示如何使用机器学习管道。

如果你已经熟悉了Scikit-learn管道和列变形工具，你可以略过简单的案例直接阅读你感兴趣的部分。

## 目录

-   [什么是Scikit learn管道工具](#什么是Scikit-learn管道工具)
-   [什么是Scikit learn列变形工具](#什么是Scikit-learn列变形工具)
-   [管道和列变形工具的区别是什么？](#管道和列变形工具的区别是什么？)
-   [如何创建一个管道](#如何创建一个管道)
-   [如何发现最佳的超维特征（Hyperparameter）和数据预处理方法](#如何发现最佳的超维特征（Hyperparameter）和数据预处理方法)
-   [如何添加自定义数据变形](#如何添加自定义数据变形并找到最佳机器学习模型)
-   [选择最佳的机器学习模型](#如何添加自定义数据变形并找到最佳机器学习模型)

## 什么是Scikit learn管道工具

在训练模型之前，你应该将数据集分成训练集和验证集。两个数据集在灌入机器学习模型之前必须被清理及预处理。

对训练集和验证集编写重复的数据处理代码效率不高。这时就需要借助scikit-learn管道工具了。

Scikit-learn管道工具是一种创建机器学习模型工作流的优雅方式。它的工作逻辑类似于下图：

![1*3cbyBR99wFWklU6Sy85NEA](https://miro.medium.com/max/1308/1*3cbyBR99wFWklU6Sy85NEA.png)

管道概念图

首先，假设你能且智能创建一个管道用于所有数据。这些数据在灌入模型训练和预测之前将被修整成合适的结构。

Scikit-learn管道工具可以将所有的数据处理步骤结合成一条管道。它可以缩短你的代码令其更易于理解和调整。（你甚至能可视化管道工具用以检查其中的步骤。）同时，它也能避免数据泄露影响到GridSearchCV的效能。

## 什么是Scikit learn列变形工具

Scikit-learn网站中对列变形工具的描述如下：

> "列变形工具是一种估计器（estimator），它的输入为列或数据框架（dataframe）中的列子集；输入的列将会被对应的变形器（Transformer）独立处理；处理后的结果会被顺序纵向拼接形成一个独立的以数据框架（dataframe）形式存储的特征集。
>   
> 这个工具在处理混合数据或列存储型数据时非常实用，它可以将多个特征抽取或变形步骤融合成一个单一的数据变形器。"

简而言之，列变形工具的工作过程是独立处理数据框架中的每一列然后才将他们融合在一起。这个工具在数据处理过程中相当实用。

![image-207](https://www.freecodecamp.org/news/content/images/2022/09/image-207.png)

列变形概念图

## 管道和列变形工具的区别是什么？

必须注意的是，管道工具和列变形工具之间有很大的区别。

![1*I0F-ALOL8J8f6V33CDKyrA](https://miro.medium.com/max/1190/1*I0F-ALOL8J8f6V33CDKyrA.png)

管道 VS 列变形

当你需要对单一列进行多个数据处理过程时**应选用管道工具**。

相对的，当你需要对每一列进行处理然后再结合起来是**应选用列变形工具**。

好了，在理清楚概念后让我们开始码起来吧！！

## 如何创建一个管道

### 获取数据集

你可以使用我在这篇文章中所使用的数据集[kaggle数据集](https://www.kaggle.com/datasets/arashnic/hr-analytics-job-change-of-data-scientists?datasetId=1019790&sortBy=voteCount&select=aug_train.csv)。以下是数据集中一段样本：

![image-210](https://www.freecodecamp.org/news/content/images/2022/09/image-210.png)

数据集样本

我还写了一篇针对这个数据集进行探索性分析的文章，如果你感兴趣这是[文章链接](https://medium.com/mlearning-ai/data-analysis-job-change-of-data-scientist-685f3de0a983)

简单来说，这个数据集中包含求职者的信息以及他们是否决定更换工作。数据集同时包含了分类型数据和数值型数据列。

我们的目标是基于求职者信息预测他们是否最终决定更换工作。这个目标是分类型预测。

## 数据预处理计划

![1*ZT7S2SuhMd4Zazb2lVWmcw](https://miro.medium.com/max/1400/1*ZT7S2SuhMd4Zazb2lVWmcw.png)

注意，本文为了突出重点我省略了对分类特征的编码步骤。

### 以下是我们将进行的步骤分解:


1.  导入数据并编码
2.  框定并基于变形的不同对需要变形的列进行分类
3.  为数值和分类特征创建不同的管道
4.  对数值和分类型特征创建对应的列变形工具
5.  对每种管道创建对应的列变形工具
6.  向最终管道添加模型
7.  检视管道
8.  用管道处理相关数据
9.  (可选) 保存相关管道

### 第一步：导入数据并编码

下载数据后，你需要将数据导入。代码如下：

```Python
import pandas as pd # 导入pandas包

df = pd.read_csv("aug_train.csv") # 导入csv数据
```

接着，利用将分类特征映射（mapping）成数值特征的功能对序数特征进行编码（encoding）（模型仅支持数值特征作为输入）

```Python
# 对序数特征建立字典（dictionary）

relevent_experience_map = {
    'Has relevent experience':  1,
    'No relevent experience':    0
}

experience_map = {
    '<1'      :    0,
    '1'       :    1, 
    '2'       :    2, 
    '3'       :    3, 
    '4'       :    4, 
    '5'       :    5,
    '6'       :    6,
    '7'       :    7,
    '8'       :    8, 
    '9'       :    9, 
    '10'      :    10, 
    '11'      :    11,
    '12'      :    12,
    '13'      :    13, 
    '14'      :    14, 
    '15'      :    15, 
    '16'      :    16,
    '17'      :    17,
    '18'      :    18,
    '19'      :    19, 
    '20'      :    20, 
    '>20'     :    21
} 
    
last_new_job_map = {
    'never'        :    0,
    '1'            :    1, 
    '2'            :    2, 
    '3'            :    3, 
    '4'            :    4, 
    '>4'           :    5
}

# 将分类型特征变形为数值型特征

def encode(df_pre):
    df_pre.loc[:,'relevent_experience'] = df_pre['relevent_experience'].map(relevent_experience_map)
    df_pre.loc[:,'last_new_job'] = df_pre['last_new_job'].map(last_new_job_map)
    df_pre.loc[:,'experience'] = df_pre['experience'].map(experience_map)
  
    return df_pre

df = encode(df)
```

### 步骤2：将数值和分类型特征分类为不同的数据变形做准备

数值型数据和分类型数据的变形方法是不同的。所以我定义了两个列表`num_col`和`cat_cols`来储存数值型特征和分类型特征。

```python
num_cols = ['city_development_index','relevent_experience', 'experience','last_new_job', 'training_hours']

cat_cols = ['gender', 'enrolled_university', 'education_level', 'major_discipline', 'company_size', 'company_type']
```

### 步骤3：为数值和分类特征创建不同的管道

管道工具的语法如下：

```Python
Pipeline(steps = [(‘step name’, transform function), …])
```

针对**数值型特征**，以下步骤将被执行：

1.  利用均值对缺失值进行填充。
2.  通过缩放将特征最小值和最大值缩放至0和1（这个步骤会影响回归模型的表现）。

针对**分类型特征**，以下步骤将被执行：

1.  利用众数对缺失值进行填充。
2.  通过独热编码对数值特征进行拆分以便进行模型训练。（为了防止出现未知类目而无法处理，定义handle\_unknown=’ignore’用以处理这类情况）

```Python
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import OneHotEncoder, MinMaxScaler
from sklearn.pipeline import Pipeline

num_pipeline = Pipeline(steps=[
    ('impute', SimpleImputer(strategy='mean')),
    ('scale',MinMaxScaler())
])
cat_pipeline = Pipeline(steps=[
    ('impute', SimpleImputer(strategy='most_frequent')),
    ('one-hot',OneHotEncoder(handle_unknown='ignore', sparse=False))
])
```

### 步骤4：对数值和分类型特征创建对应的列变形工具

列变形工具的语法如下：

```Python
ColumnTransformer(transformers=[(‘step name’, transform function,cols), …])
```
在步骤3中创建模型后令数值型特征通过数值变形管道，令分类型特征通过分类变形管道。

为了跳过不同类型的特征我创建了remainder=’drop’标签。

n\_job = -1 标签可以令处理器并行处理

```Python
from sklearn.compose import ColumnTransformer

col_trans = ColumnTransformer(transformers=[
    ('num_pipeline',num_pipeline,num_cols),
    ('cat_pipeline',cat_pipeline,cat_cols)
    ],
    remainder='drop',
    n_jobs=-1)
```

### 步骤5：向最终管道添加模型

I'm using the logistic regression model in this example.

Create a new pipeline to commingle the ColumnTransformer in step 4 with the logistic regression model. I use a pipeline in this case because the entire dataframe must pass the ColumnTransformer step and modeling step, respectively.

```Python
from sklearn.linear_model import LogisticRegression

clf = LogisticRegression(random_state=0)
clf_pipeline = Pipeline(steps=[
    ('col_trans', col_trans),
    ('model', clf)
])
```

### Step 6: Display the Pipeline

The syntax for this is `display(pipeline name)`:

```Python
from sklearn import set_config

set_config(display='diagram')
display(clf_pipeline)
```

![1*ZAQ6T65iADOmFx1eCJsjDQ](https://miro.medium.com/max/560/1*ZAQ6T65iADOmFx1eCJsjDQ.png)

Displayed pipeline

You can click on the displayed image to see the details of each step.  
How convenient!

![1*gahdAdZlFSICnQmiqbQYvg](https://miro.medium.com/max/1400/1*gahdAdZlFSICnQmiqbQYvg.png)

Expanded displayed pipeline

### Step 7: Split the Data into Train and Test Sets

Split 20% of the data into a test set like this:

```Python
from sklearn.model_selection import train_test_split

X = df[num_cols+cat_cols]
y = df['target']
# train test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y)
```

I will fit the pipeline for the train set and use that fitted pipeline for the test set to prevent data leakage from the test set to the model.

### Step 8: Pass Data through the Pipeline

Here's the syntax for this:

```Python
pipeline_name.fit, pipeline_name.predict, pipeline_name.score
```

`pipeline.fit` passes data through a pipeline. It also fits the model.

`pipeline.predict` uses the model trained when `pipeline.fit`s to predict new data.

`pipeline.score` gets a score of the model in the pipeline (accuracy of logistic regression in this example).

```Python
clf_pipeline.fit(X_train, y_train)
# preds = clf_pipeline.predict(X_test)
score = clf_pipeline.score(X_test, y_test)
print(f"Model score: {score}") # model accuracy
```

![1*Y5liijw_WH1kRMnO4S3ung](https://miro.medium.com/max/1400/1*Y5liijw_WH1kRMnO4S3ung.png)

### (Optional) Step 9: Save the Pipeline

The syntax for this is `joblib.dumb`.

Use the joblib library to save the pipeline for later use, so you don’t need to create and fit the pipeline again. When you want to use a saved pipeline, just load the file using joblib.load like this:

```Python
import joblib

# Save pipeline to file "pipe.joblib"
joblib.dump(clf_pipeline,"pipe.joblib")

# Load pipeline when you want to use
same_pipe = joblib.load("pipe.joblib")
```

## 如何发现最佳的超维特征（Hyperparameter）和数据预处理方法

A pipeline does not only make your code tidier, it can also help you optimize hyperparameters and data preparation methods.

### Here's what we'll cover in this section:

-   How to find the changeable pipeline parameters
-   How to find the best hyperparameter sets: Add a pipeline to Grid Search
-   How to find the best data preparation method: Skip a step in a pipeline
-   How to Find the best hyperparameter sets and the best data preparation method

### How to Find the Changeable Pipeline Parameters

First, let’s see the list of parameters that can be adjusted.

```Python
clf_pipeline.get_params()
```

The result can be very long. Take a deep breath and continue reading.

The first part is just about the steps of the pipeline.

![1*JWw_1l68o9z_D9ptmvIIMA](https://miro.medium.com/max/1400/1*JWw_1l68o9z_D9ptmvIIMA.png)

Below the first part you'll find what we are interested in: a list of parameters that we can adjust.

![1*NCkmLiyit676K3M-HfEbnw](https://miro.medium.com/max/926/1*NCkmLiyit676K3M-HfEbnw.png)

The format is ****step1\_step2\_…\_parameter****.

For example ****col\_trans****\_****cat\_pipeline****\_****one-hot****\_****sparse**** means parameter sparse of the one-hot step.

![1*ZITc6M2sB8Qxzr5BCnBMHQ](https://miro.medium.com/max/876/1*ZITc6M2sB8Qxzr5BCnBMHQ.png)

You can change parameters directly using set\_param.

```Python
clf_pipeline.set_params(model_C = 10)
```

### How to Find the Best Hyperparameter Sets: Add a Pipeline to Grid Search

Grid Search is a method you can use to perform hyperparameter tuning. It helps you find the optimum parameter sets that yield the highest model accuracy.

#### Set the tuning parameters and their range.

Create a dictionary of tuning parameters (hyperparameters)

```Python
{ ‘tuning parameter’ : ‘possible value’, … }
```

In this example, I want to find the best penalty type and C of a logistic regression model.

```Python
grid_params = {'model__penalty' : ['none', 'l2'],
               'model__C' : np.logspace(-4, 4, 20)}
```

#### Add the pipeline to Grid Search

```Python
GridSearchCV(model, tuning parameter, …)
```

Our pipeline has a model step as the final step, so we can input the pipeline directly to the GridSearchCV function.

```Python
from sklearn.model_selection import GridSearchCV

gs = GridSearchCV(clf_pipeline, grid_params, cv=5, scoring='accuracy')
gs.fit(X_train, y_train)

print("Best Score of train set: "+str(gs.best_score_))
print("Best parameter set: "+str(gs.best_params_))
print("Test Score: "+str(gs.score(X_test,y_test)))
```

![1*JP64DvryL62BV2Z8ctyVXw](https://miro.medium.com/max/1252/1*JP64DvryL62BV2Z8ctyVXw.png)

Result of Grid Search

After setting Grid Search, you can fit Grid Search with the data and see the results. Let's see what the code is doing:

-   `.fit`: fits the model and tries all sets of parameters in the tuning parameter dictionary
-   `.best_score_`: the highest accuracy across all sets of parameters
-   `.best_params_`: The set of parameters that yield the best score
-   `.score(X_test,y_test)`: The score when trying the best model with the test set.

You can read more about GridSearchCV in the documentation [here](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html).

### How to Find the Best Data Preparation Method: Skip a Step in a Pipeline

Finding the best data preparation method can be difficult without a pipeline since you have to create so many variables for many data transformation cases.

With the pipeline, we can create data transformation steps in the pipeline and perform a grid search to find the best step. A grid search will select which step to skip and compare the result of each case.

#### How to adjust the current pipeline a little

I want to know which scaling method will work best for my data between MinMaxScaler and StandardScaler.

I add a step StandardScaler in the num\_pipeline. The rest doesn't change.

```Python
from sklearn.preprocessing import StandardScaler

num_pipeline2 = Pipeline(steps=[
    ('impute', SimpleImputer(strategy='mean')),
    ('minmax_scale', MinMaxScaler()),
    ('std_scale', StandardScaler()),
])

col_trans2 = ColumnTransformer(transformers=[
    ('num_pipeline',num_pipeline2,num_cols),
    ('cat_pipeline',cat_pipeline,cat_cols)
    ],
    remainder='drop',
    n_jobs=-1)
    
clf_pipeline2 = Pipeline(steps=[
    ('col_trans', col_trans2),
    ('model', clf)
])
```

![1*K1pdg8EFtGLIhNSEUQ0DsA](https://miro.medium.com/max/526/1*K1pdg8EFtGLIhNSEUQ0DsA.png)

Adjusted pipeline

### How to Perform Grid Search

In grid search parameters, specify the steps you want to skip and set their value to ****passthrough****.

Since MinMaxScaler and StandardScaler should not perform at the same time, I will use ****a list of dictionaries**** for the grid search parameters.

```Python
[{case 1},{case 2}]
```

If using a list of dictionaries, grid search will perform a combination of every parameter in case 1 until complete. Then, it will perform a combination of every parameter in case 2. So there is no case where MinMaxScaler and StandardScaler are used together.

```Python
grid_step_params = [{'col_trans__num_pipeline__minmax_scale': ['passthrough']},
                    {'col_trans__num_pipeline__std_scale': ['passthrough']}]
```

Perform Grid Search and print the results (like a normal grid search).

```Python
gs2 = GridSearchCV(clf_pipeline2, grid_step_params, scoring='accuracy')
gs2.fit(X_train, y_train)

print("Best Score of train set: "+str(gs2.best_score_))
print("Best parameter set: "+str(gs2.best_params_))
print("Test Score: "+str(gs2.score(X_test,y_test)))
```

![1*u-TK9RhHn0eSIRbtEUdWsQ](https://miro.medium.com/max/1354/1*u-TK9RhHn0eSIRbtEUdWsQ.png)

The best case is minmax\_scale : ‘passthrough’, so StandardScaler is the best scaling method for this data.

### How to Find the Best Hyperparameter Sets and the Best Data Preparation Method

You can find the best hyperparameter sets and the best data preparation method by adding tuning parameters to the dictionary of each case of the data preparation method.

```Python
grid_params = {'model__penalty' : ['none', 'l2'],
               'model__C' : np.logspace(-4, 4, 20)}
               
grid_step_params = [{**{'col_trans__num_pipeline__minmax_scale': ['passthrough']}, **grid_params},
                    {**{'col_trans__num_pipeline__std_scale': ['passthrough']}, **grid_params}]
```

grid\_params will be added to both case 1 (skip MinMaxScaler) and case 2 (skip StandardScalerand).

```Python
# You can merge dictionary using the syntax below.

merge_dict = {**dict_1,**dict_2}
```

Perform Grid Search and print the results (like a normal grid search).

```Python
gs3 = GridSearchCV(clf_pipeline2, grid_step_params2, scoring='accuracy')
gs3.fit(X_train, y_train)

print("Best Score of train set: "+str(gs3.best_score_))
print("Best parameter set: "+str(gs3.best_params_))
print("Test Score: "+str(gs3.score(X_test,y_test)))
```

![1*fLcVD6j9m2QcdkkYpoJOjA](https://miro.medium.com/max/1400/1*fLcVD6j9m2QcdkkYpoJOjA.png)

You can find the best parameter set using .best\_params\_. As minmax\_scale : ‘passthrough’, so StandardScaler is the best scaling method for this data.

You can show all grid search cases using .cv\_results\_:

```Python
pd.DataFrame(gs3.cv_results_)
```

![1*Ddwx3CZ1k3kfEXYG2pGkMw](https://miro.medium.com/max/1400/1*Ddwx3CZ1k3kfEXYG2pGkMw.png)

GridSearch result

There are 80 cases for this example. There's running time and accuracy of each case for you to consider, since sometimes we may select the fastest model with acceptable accuracy instead of the highest accuracy one.

## 如何添加自定义数据变形并找到最佳机器学习模型

Searching for the best machine learning model can be a time-consuming task. The pipeline can make this task much more convenient so that you can shorten the model training and evaluation loop.

### Here's what we'll cover in this part:

-   Add a custom transformation
-   Find the best machine learning model

### How to Add a Custom Transformation

Apart from standard data transformation functions such as MinMaxScaler from sklearn, you can also create your own transformation for your data.

In this example, I will create a class method to encode ordinal features using mapping to transform categorical features into numerical ones. In simple words, we'll change data from text to numbers.

First we'll do the required data processing before regression model training.

```Python
from sklearn.base import TransformerMixin

class Encode(TransformerMixin):
    
    def __init__(self):
        # Making Dictionaries of ordinal features
        self.rel_exp_map = {
            'Has relevent experience': 1,
            'No relevent experience': 0}
            
    def fit(self, df, y = None):
    	return self
        
    def transform(self, df, y = None):
        df_pre = df.copy()
        df_pre.loc[:,'rel_exp'] = df_pre['rel_exp']\
                               .map(self.rel_exp_map)
        return df_pre
```

Here's an explanation of what's going on in this code:

-   Create a class named Encode which inherits the base class called TransformerMixin from sklearn.
-   Inside the class, there are 3 necessary methods: `__init__`, `fit`, and `transform`
-   ****`__init__`**** will be called when a pipeline is created. It is where we define variables inside the class. I created a variable ‘rel\_exp\_map’ which is a dictionary that maps categories to numbers.
-   ****`fit`**** will be called when fitting the pipeline. I left it blank for this case.
-   ****`transform`**** will be called when a pipeline transform is used. This method requires a dataframe (df) as an input while y is set to be None by default (It is forced to have y argument but I will not use it anyway).
-   In ****transform****, the dataframe column ‘rel\_exp’ will be mapped with the rel\_exp\_map.

Note that the `\` is only to continue the code to a new line.

Next, add this Encode class as a pipeline step.

```Python
pipeline = Pipeline(steps=[
    ('Encode', Encode()),
    ('col_trans', col_trans),
    ('model', LogisticRegression())
])
```

Then you can fit, transform, or grid search the pipeline like a normal pipeline.

### How to Find the Best Machine Learning Model

The first solution that came to my mind was adding many model steps in a pipeline and skipping a step by changing the step value to ‘passthrough’ in the grid search. This is like what we did when finding the best data preparation method.

```Python
temp_pipeline = Pipeline(steps=[
    ('model1', LogisticRegression()),
    ('model2',SVC(gamma='auto'))
])
```

But I saw an error like this:

![1*2CGj8aBvcPbxDw_p9tpijg](https://miro.medium.com/max/700/1*2CGj8aBvcPbxDw_p9tpijg.png)

Error when there are 2 classifiers in 1 pipeline

Ah ha – you can’t have two classification models in a pipeline!

The solution to this problem is to create a custom transformation that receives a model as an input and performs grid search to find the best model.

### Here are the steps we'll follow:

1.  Create a class that receives a model as an input
2.  Add the class in step 1 to a pipeline
3.  Perform grid search
4.  Print grid search results as a table

### Step 1: Create a class that receives a model as an input

```Python
from sklearn.base import BaseEstimator
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC

class ClfSwitcher(BaseEstimator):

def __init__(self, estimator = LogisticRegression()):
        self.estimator = estimator
        
def fit(self, X, y=None, **kwargs):
        self.estimator.fit(X, y)
        return self
        
def predict(self, X, y=None):
        return self.estimator.predict(X)
        
def predict_proba(self, X):
        return self.estimator.predict_proba(X)
        
def score(self, X, y):
        return self.estimator.score(X, y)
```

****Code explanation:****

-   Create a class named `ClfSwitcher` which inherits the base class called BaseEstimator from sklearn.
-   Inside the class, there are five necessary methods like `classification model: __init__`, `fit`, `predict`, `predict_proba` and `score`
-   ****`__init__`**** receives an estimator (model) as an input. I stated LogisticRegression() as a default model.
-   ****`fit`**** is for model fitting. There's no return value.
-   The other methods are to simulate the model. It will return the result as if it's the model itself.

### Step 2: Add the class in step 1 to a pipeline

```Python
clf_pipeline = Pipeline(steps=[
    ('Encode', Encode()),
    ('col_trans', col_trans),
    ('model', ClfSwitcher())
])
```

### Step 3: Perform Grid search

There are 2 cases using different classification models in grid search parameters, including logistic regression and support vector machine.

```Python
from sklearn.model_selection import GridSearchCV

grid_params = [
    {'model__estimator': [LogisticRegression()]},
    {'model__estimator': [SVC(gamma='auto')]}
]

gs = GridSearchCV(clf_pipeline, grid_params, scoring='accuracy')
gs.fit(X_train, y_train)

print("Best Score of train set: "+str(gs.best_score_))
print("Best parameter set: "+str(gs.best_params_))
print("Test Score: "+str(gs.score(X_test,y_test)))
```

![1*4rxzC3Wv0y9QOw0G4iHxog](https://miro.medium.com/max/700/1*4rxzC3Wv0y9QOw0G4iHxog.png)

Grid Search Result

The result shows that logistic regression yields the best result.

### Step 4: Print grid search results as a table

```Python
pd.DataFrame(gs.cv_results_)
```

![1*bzCWW5AJ3Jb2c5fdIR78LA](https://miro.medium.com/max/700/1*bzCWW5AJ3Jb2c5fdIR78LA.png)

Grid Search Result Table

Logistic regression has a little higher accuracy than SVC but is much faster (less fit time).

Remember that you can apply different data preparation methods for each model as well.

## Conclusion

You can implement the Scikit-learn pipeline and ColumnTransformer from the data cleaning to the data modeling steps to make your code neater.

You can also find the best hyperparameter, data preparation method, and machine learning model with grid search and the passthrough keyword.

You can find my code in this [GitHub](https://github.com/Yannawut/ML_Pipeline)
