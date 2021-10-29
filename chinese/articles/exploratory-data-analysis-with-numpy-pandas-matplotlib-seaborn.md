> -  原文地址：[What is Data Analysis? How to Visualize Data with Python, Numpy, Pandas, Matplotlib & Seaborn Tutorial](https://www.freecodecamp.org/news/exploratory-data-analysis-with-numpy-pandas-matplotlib-seaborn/)
> -  原文作者：[Aakash NS](https://www.freecodecamp.org/news/author/aakash-n-s/)
> -  译者：
> -  校对者：

![What is Data Analysis? How to Visualize Data with Python, Numpy, Pandas, Matplotlib & Seaborn Tutorial](https://www.freecodecamp.org/news/content/images/size/w2000/2021/05/blog-cover-4.png)

Data Analysis is the process of exploring, investigating, and gathering insights from data using statistical measures and visualizations.

The objective of data analysis is to develop an understanding of data by uncovering trends, relationships, and patterns.

Data analysis is both a science and an art. On the one hand it requires that you know statistics, visualization techniques, and data analysis tools like Numpy, Pandas, and Seaborn.

On the other hand, it requires that you ask interesting questions to guide the investigation, and then interpret the numbers and figures to generate useful insights.

This tutorial on data analysis covers the following topics:

1.  [What is Numerical Computation? Python and Numpy for Beginners](#what-is-numerical-computation-python-and-numpy-for-beginners)
2.  [How to Analyze Tabular Data using Python and Pandas](#how-to-analyze-tabular-data-using-python-and-pandas)
3.  [Data Visualization using Python, Matplotlib, and Seaborn](#data-visualization-using-python-matplotlib-and-seaborn)

## What is Numerical Computation? Python and Numpy for Beginners

![](https://i.imgur.com/mg8O3kd.png)

Source: [Elegant Scipy](https://github.com/elegant-scipy/elegant-scipy/blob/master/figures/NumPy_ndarrays_v2.png)

You can follow along with the tutorial and run the code here: [https://jovian.ai/aakashns/python-numerical-computing-with-nump](https://jovian.ai/aakashns/python-numerical-computing-with-numpy)y

This section covers the following topics:

-   How to work with numerical data in Python
-   How to turn Python lists into Numpy arrays
-   Multi-dimensional Numpy arrays and their benefits
-   Array operations, broadcasting, indexing, and slicing
-   How to work with CSV data files using Numpy

### How to Work with Numerical Data in Python

The "data" in __Data Analysis__ typically refers to numerical data, like stock prices, sales figures, sensor measurements, sports scores, database tables, and so on.

The [Numpy](https://jovian.ai/outlink?url=https%3A%2F%2Fnumpy.org) library provides specialized data structures, functions, and other tools for numerical computing in Python. Let's work through an example to see why and how to use Numpy to work with numerical data.

Suppose we want to use climate data like the temperature, rainfall, and humidity to determine if a region is well suited for growing apples.

A simple approach to do this would be to formulate the relationship between the annual yield of apples (tons per hectare) and the climatic conditions like the average temperature (in degrees Fahrenheit), rainfall (in millimeters), and average relative humidity (in percentage) as a linear equation.

`yield_of_apples = w1 * temperature + w2 * rainfall + w3 * humidity`

We're expressing the yield of apples as a weighted sum of the temperature, rainfall, and humidity.

This equation is an approximation, since the actual relationship may not necessarily be linear, and there may be other factors involved. But a simple linear model like this often works well in practice.

Based on some statistical analysis of historical data, we might come up with reasonable values for the weights `w1`, `w2`, and `w3`. Here's an example set of values:

```py
w1, w2, w3 = 0.3, 0.2, 0.5
```

Given some climate data for a region, we can now predict the yield of apples. Here's some sample data:

![](https://i.imgur.com/TXPBiqv.png)

To begin, we can define some variables to record climate data for a region.

```py
kanto_temp = 73
kanto_rainfall = 67
kanto_humidity = 43
```

We can now substitute these variables into the linear equation to predict the yield of apples.
```py
kanto_yield_apples = kanto_temp * w1 + kanto_rainfall * w2 + kanto_humidity * w3
kanto_yield_apples
# 56.8


```

To make it slightly easier to perform the above computation for multiple regions, we can represent the climate data for each region as a vector, that is a list of numbers.

```py
kanto = [73, 67, 43]
johto = [91, 88, 64]
hoenn = [87, 134, 58]
sinnoh = [102, 43, 37]
unova = [69, 96, 70]
```

The three numbers in each vector represent the temperature, rainfall, and humidity data, respectively.

We can also represent the set of weights used in the formula as a vector.
```py
weights = [w1, w2, w3]
```

We can now write a function `crop_yield` to calculate the yield of apples (or any other crop) given the climate data and the respective weights.
```py
def crop_yield(region, weights):
    result = 0
    for x, w in zip(region, weights):
        result += x * w
    return result

crop_yield(kanto, weights)
# 56.8
crop_yield(johto, weights)
# 76.9

```

### How to Turn Python Lists into Numpy Arrays

The calculation performed by the `crop_yield` (element-wise multiplication of two vectors and taking a sum of the results) is also called the __dot product__. Learn more about dot products [here](https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/dot-cross-products/v/vector-dot-product-and-vector-length ).

The Numpy library provides a built-in function to compute the dot product of two vectors. However, we must first convert the lists into Numpy arrays.

Let's install the Numpy library using the `pip` package manager.
```py
!pip install numpy --upgrade --quiet
```

### How to Operate on Numpy arrays

We can now compute the dot product of the two vectors using the `np.dot` function.

### What are the Benefits of Using Numpy Arrays?

Numpy arrays offer the following benefits over Python lists for operating on numerical data:

-   **They're easy to **use****: You can write small, concise, and intuitive mathematical expressions like `(kanto * weights).sum()` rather than using loops and custom functions like `crop_yield`.
-   ****Performance****: Numpy operations and functions are implemented internally in C++, which makes them much faster than using Python statements and loops that are interpreted at runtime

Here's a comparison of dot products performed using Python loops vs. Numpy arrays on two vectors with a million elements each.

As you can see, using `np.dot` is 100 times faster than using a `for` loop. This makes Numpy especially useful while working with really large datasets with tens of thousands or millions of data points.

### Multi-Dimensional Numpy Arrays

We can now go one step further and represent the climate data for all the regions using a single 2-dimensional Numpy array.

If you've taken a linear algebra class in high school, you may recognize the above 2-d array as a matrix with five rows and three columns. Each row represents one region, and the columns represent temperature, rainfall, and humidity, respectively.

Numpy arrays can have any number of dimensions and different lengths along each dimension. We can inspect the length along each dimension using the `.shape` property of an array.

![](https://fgnt.github.io/python_crashkurs_doc/_images/numpy_array_t.png)

Source: [Elegant Scipy](https://github.com/elegant-scipy/elegant-scipy/blob/master/figures/NumPy_ndarrays_v2.png)

We can now compute the predicted yields of apples in all the regions, using a single matrix multiplication between `climate_data` (a 5x3 matrix) and `weights` (a vector of length 3). Here's what it looks like visually:

![](https://i.imgur.com/LJ2WKSI.png)

You can learn about matrices and matrix multiplication by watching the first 3-4 videos of [this YouTube playlist](https://www.youtube.com/watch?v=xyAuNHPsq-g&list=PLFD0EB975BA0CC1E0&index=1).

We can use the `np.matmul` function or the `@` operator to perform matrix multiplication.

### How to Work with CSV Data Files

Numpy also provides helper functions reading from and writing to files. Let's download a file `climate.txt`, which contains 10,000 climate measurements (temperature, rainfall, and humidity) in the following format:

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

This format of storing data is known as __comma-separated values__ or CSV.

> ****CSVs****: A comma-separated values (CSV) file is a delimited text file that uses a comma to separate values. Each line of the file is a data record. Each record consists of one or more fields, separated by commas. A CSV file typically stores tabular data (numbers and text) in plain text, in which case each line will have the same number of fields. (Wikipedia)

To read this file into a numpy array, we can use the `genfromtxt` function.

There are a couple of subtleties here:

-   Since we wish to add new columns, we pass the argument `axis=1` to `np.concatenate`. The `axis` argument specifies the dimension for concatenation.
-   The arrays should have the same number of dimensions, and the same length along each except the dimension used for concatenation. We use the [`np.reshape`](https://jovian.ai/outlink?url=https%3A%2F%2Fnumpy.org%2Fdoc%2Fstable%2Freference%2Fgenerated%2Fnumpy.reshape.html) function to change the shape of `yields` from `(10000,)` to `(10000,1)`.

Here's a visual explanation of `np.concatenate` along `axis=1` (can you guess what `axis=0` results in?):

![](https://www.w3resource.com/w3r_images/python-numpy-image-exercise-58.png)

Source: [w3resource.com](w3resource.com)

The best way to understand what a Numpy function does is to experiment with it and read the documentation to learn about its arguments and return values. Use the cells below to experiment with `np.concatenate` and `np.reshape`.

Let's write the final results from our computation above back to a file using the `np.savetxt` function.

Numpy provides hundreds of functions for performing operations on arrays. Here are some commonly used functions:

-   Mathematics: `np.sum`, `np.exp`, `np.round`, arithmetic operators
-   Array manipulation: `np.reshape`, `np.stack`, `np.concatenate`, `np.split`
-   Linear Algebra: `np.matmul`, `np.dot`, `np.transpose`, `np.eigvals`
-   Statistics: `np.mean`, `np.median`, `np.std`, `np.max`

**So how do you **find the function you need?**** The easiest way to find the right function for a specific operation or use-case is to do a web search. For instance, searching for "How to join numpy arrays" leads to [this tutorial on array concatenation](https://jovian.ai/outlink?url=https%3A%2F%2Fcmdlinetips.com%2F2018%2F04%2Fhow-to-concatenate-arrays-in-numpy%2F).

You can find a [full list of array functions here](https://numpy.org/doc/stable/reference/routines.html).

### Numpy Arithmetic Operations, Broadcasting, and Comparison

Numpy arrays support arithmetic operators like `+`, `-`, `*`, etc. You can perform an arithmetic operation with a single number (also called a scalar) or with another array of the same shape.

Operators make it easy to write mathematical expressions with multi-dimensional arrays.

#### **Numpy Array Broadcasting**

Numpy arrays also support __broadcasting__, allowing arithmetic operations between two arrays with different numbers of dimensions but compatible shapes. Let's look at an example to see how it works.

When the expression `arr2 + arr4` is evaluated, `arr4` (which has the shape `(4,)`) is replicated three times to match the shape `(3, 4)` of `arr2`. Numpy performs the replication without actually creating three copies of the smaller dimension array, thus improving performance and using lower memory.

![](https://jakevdp.github.io/PythonDataScienceHandbook/figures/02.05-broadcasting.png)

Source: [Python Data Science Handbook](https://jakevdp.github.io/PythonDataScienceHandbook/02.05-computation-on-arrays-broadcasting.html)

Broadcasting only works if one of the arrays can be replicated to match the other array's shape.

In the above example, even if `arr5` is replicated three times, it will not match the shape of `arr2`. So `arr2 + arr5` cannot be evaluated successfully. [Learn more about broadcasting here](https://numpy.org/doc/stable/user/basics.broadcasting.html).

#### **Numpy Array Comparison**

Numpy arrays also support comparison operations like `==`, `!=`, `>` and so on. The result is an array of booleans.

Array comparison is frequently used to count the number of equal elements in two arrays using the `sum` method. Remember that `True` evaluates to `1` and `False` evaluates to `0` when you use booleans in arithmetic operations.

### Numpy Array Indexing and Slicing

Numpy extends Python's list indexing notation using `[]` to multiple dimensions in an intuitive fashion. You can provide a comma-separated list of indices or ranges to select a specific element or a subarray (also called a slice) from a Numpy array.

The notation and its results can seem confusing at first, so take your time to experiment and become comfortable with it.

Use the cells below to try out some examples of array indexing and slicing, with different combinations of indices and ranges. Here are some more examples demonstrated visually:

![](https://scipy-lectures.org/_images/numpy_indexing.png)

Source: [Scipy Lectures](https://scipy-lectures.org/intro/numpy/array_object.html)

### How to Create Numpy Arrays – Other Methods

Numpy also provides some handy functions to create arrays of desired shapes with fixed or random values. Check out the [official documentation](https://jovian.ai/outlink?url=https%3A%2F%2Fnumpy.org%2Fdoc%2Fstable%2Freference%2Froutines.array-creation.html) or use the `help` function to learn more.

### Exercises

Try the following exercises to become familiar with Numpy arrays and practice your skills:

-   Assignment on Numpy array functions: [https://jovian.ml/aakashns/numpy-array-operations](https://jovian.ai/outlink?url=https%3A%2F%2Fjovian.ml%2Faakashns%2Fnumpy-array-operations)
-   (Optional) 100 numpy exercises: [https://jovian.ml/aakashns/100-numpy-exercises](https://jovian.ai/outlink?url=https%3A%2F%2Fjovian.ml%2Faakashns%2F100-numpy-exercises)

### Summary and Further Reading

With this, we complete our discussion of numerical computing with Numpy. We've covered the following topics in this part of the tutorial:

-   How to go from Python lists to Numpy arrays
-   How to operate on Numpy arrays
-   The benefits of using Numpy arrays over lists
-   Multi-dimensional Numpy arrays
-   How to work with CSV data files
-   Arithmetic operations and broadcasting
-   Array indexing and slicing
-   Other ways of creating Numpy arrays

Check out the following resources for learning more about Numpy:

-   [Official tutorial](https://numpy.org/devdocs/user/quickstart.html)
-   [Numpy course on freeCodeCamp](/news/the-ultimate-guide-to-the-numpy-scientific-computing-library-for-python/)
-   [Advanced Numpy (exploring the internals)](http://scipy-lectures.org/advanced/advanced_numpy/index.html)

### Review Questions to Check Your Comprehension

Try answering the following questions to test your understanding of the topics covered in this notebook:

1.  What is a vector?
2.  How do you represent vectors using a Python list? Give an example.
3.  What is a dot product of two vectors?
4.  Write a function to compute the dot product of two vectors.
5.  What is Numpy?
6.  How do you install Numpy?
7.  How do you import the `numpy` module?
8.  What does it mean to import a module with an alias? Give an example.
9.  What is the commonly used alias for `numpy`?
10.  What is a Numpy array?
11.  How do you create a Numpy array? Give an example.
12.  What is the type of Numpy arrays?
13.  How do you access the elements of a Numpy array?
14.  How do you compute the dot product of two vectors using Numpy?
15.  What happens if you try to compute the dot product of two vectors which have different sizes?
16.  How do you compute the element-wise product of two Numpy arrays?
17.  How do you compute the sum of all the elements in a Numpy array?
18.  What are the benefits of using Numpy arrays over Python lists for operating on numerical data?
19.  Why do Numpy array operations have better performance compared to Python functions and loops?
20.  Illustrate the performance difference between Numpy array operations and Python loops using an example.
21.  What are multi-dimensional Numpy arrays?
22.  Illustrate how you'd create Numpy arrays with 2, 3, and 4 dimensions.
23.  How do you inspect the number of dimensions and the length along each dimension in a Numpy array?
24.  Can the elements of a Numpy array have different data types?
25.  How do you check the data types of the elements of a Numpy array?
26.  What is the data type of a Numpy array?
27.  What is the difference between a matrix and a 2D Numpy array?
28.  How do you perform matrix multiplication using Numpy?
29.  What is the `@` operator used for in Numpy?
30.  What is the CSV file format?
31.  How do you read data from a CSV file using Numpy?
32.  How do you concatenate two Numpy arrays?
33.  What is the purpose of the `axis` argument of `np.concatenate`?
34.  When are two Numpy arrays compatible for concatenation?
35.  Give an example of two Numpy arrays that can be concatenated.
36.  Give an example of two Numpy arrays that cannot be concatenated.
37.  What is the purpose of the `np.reshape` function?
38.  What does it mean to “reshape” a Numpy array?
39.  How do you write a numpy array into a CSV file?
40.  Give some examples of Numpy functions for performing mathematical operations.
41.  Give some examples of Numpy functions for performing array manipulation.
42.  Give some examples of Numpy functions for performing linear algebra.
43.  Give some examples of Numpy functions for performing statistical operations.
44.  How do you find the right Numpy function for a specific operation or use case?
45.  Where can you see a list of all the Numpy array functions and operations?
46.  What are the arithmetic operators supported by Numpy arrays? Illustrate with examples.
47.  What is array broadcasting? How is it useful? Illustrate with an example.
48.  Give some examples of arrays that are compatible for broadcasting.
49.  Give some examples of arrays that are not compatible for broadcasting.
50.  What are the comparison operators supported by Numpy arrays? Illustrate with examples.
51.  How do you access a specific subarray or slice from a Numpy array?
52.  Illustrate array indexing and slicing in multi-dimensional Numpy arrays with some examples.
53.  How do you create a Numpy array with a given shape containing all zeros?
54.  How do you create a Numpy array with a given shape containing all ones?
55.  How do you create an identity matrix of a given shape?
56.  How do you create a random vector of a given length?
57.  How do you create a Numpy array with a given shape with a fixed value for each element?
58.  How do you create a Numpy array with a given shape containing randomly initialized elements?
59.  What is the difference between `np.random.rand` and `np.random.randn`? Illustrate with examples.
60.  What is the difference between `np.arange` and `np.linspace`? Illustrate with examples.

You are ready to move on to the next section of this tutorial.

## How to Analyze Tabular Data using Python and Pandas

![](https://i.imgur.com/zfxLzEv.png)

Follow along and run the code here: [https://jovian.ai/aakashns/python-pandas-data-analysis](https://jovian.ai/aakashns/python-pandas-data-analysis).

This section covers the following topics:

-   How to read a CSV file into a Pandas data frame
-   How to retrieve data from Pandas data frames
-   How to query, sort, and analyze data
-   How to merge, group, and aggregate data
-   How to extract useful information from dates
-   Basic plotting using line and bar charts
-   How to write data frames to CSV files

### How to Read a CSV File Using Pandas

[Pandas](https://jovian.ai/outlink?url=https%3A%2F%2Fpandas.pydata.org%2F) is a popular Python library used for working in tabular data (similar to the data stored in a spreadsheet). It provides helper functions to read data from various file formats like CSV, Excel spreadsheets, HTML tables, JSON, SQL, and more.

Let's download a file `italy-covid-daywise.txt` which contains day-wise Covid-19 data for Italy in the following format:

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

This format of storing data is known as __comma-separated values__ or CSV. Here's a reminder in case you need a definition of what the CSV format is:

> ****CSVs****: A comma-separated values (CSV) file is a delimited text file that uses a comma to separate values. Each line of the file is a data record. Each record consists of one or more fields, separated by commas. A CSV file typically stores tabular data (numbers and text) in plain text, in which case each line will have the same number of fields. (Wikipedia)

We'll download this file using the `urlretrieve` function from the `urllib.request` module.

Data from the file is read and stored in a `DataFrame` object – one of the core data structures in Pandas for storing and working with tabular data. We typically use the `_df` suffix in the variable names for dataframes.

Here's what we can tell by looking at the dataframe:

-   The file provides four day-wise counts for COVID-19 in Italy
-   The metrics reported are new cases, deaths, and tests
-   Data is provided for 248 days: from Dec 12, 2019, to Sep 3, 2020

Keep in mind that these are officially reported numbers. The actual number of cases and deaths may be higher, as not all cases are diagnosed.

We can view some basic information about the data frame using the `.info` method.

It appears that each column contains values of a specific data type. You can view statistical information for numerical columns (mean, standard deviation, minimum/maximum values, and the number of non-empty values) using the `.describe` method.

Here's a summary of the functions and methods we've looked at so far:

-   `pd.read_csv` – Read data from a CSV file into a Pandas `DataFrame` object
-   `.info()` – View basic information about rows, columns, and data types
-   `.describe()` – View statistical information about numeric columns
-   `.columns` – Get the list of column names
-   `.shape` – Get the number of rows and columns as a tuple

### How to Retrieve Data from a Data Frame in Pandas

The first thing you might want to do is retrieve data from this data frame, like the counts of a specific day or the list of values in a particular column.

To do this, you should understand the internal representation of data in a data frame. Conceptually, you can think of a dataframe as a dictionary of lists: keys are column names, and values are lists/arrays containing data for the respective columns.

Representing data in the above format has a few benefits:

-   All values in a column typically have the same type of value, so it's more efficient to store them in a single array.
-   Retrieving the values for a particular row simply requires extracting the elements at a given index from each column array.
-   The representation is more compact (column names are recorded only once) compared to other formats that use a dictionary for each row of data (see the example below).

With the dictionary of lists analogy in mind, you can now guess how to retrieve data from a data frame. For example, we can get a list of values from a specific column using the `[]` indexing notation.

Each column is represented using a data structure called `Series`, which is essentially a numpy array with some extra methods and properties.

Instead of using the indexing notation `[]`, Pandas also allows accessing columns as properties of the dataframe using the `.` notation. However, this method only works for columns whose names do not contain spaces or special characters.

Further, you can also pass a list of columns within the indexing notation `[]` to access a subset of the data frame with just the given columns.

The new data frame `cases_df` is simply a "view" of the original data frame `covid_df`. Both point to the same data in the computer's memory. Changing any values inside one of them will also change the respective values in the other.

Sharing data between data frames makes data manipulation in Pandas blazing fast. You needn't worry about the overhead of copying thousands or millions of rows every time you want to create a new data frame by operating on an existing one.

Sometimes you might need a full copy of the data frame, in which case you can use the `copy` method.

The data within `covid_df_copy` is completely separate from `covid_df`, and changing values inside one of them will not affect the other.

To access a specific row of data, Pandas provides the `.loc` method.

Notice above that while the first few values in the `new_cases` and `new_deaths` columns are `0`, the corresponding values within the `new_tests` column are `NaN`. That is because the CSV file does not contain any data for the `new_tests` column for specific dates (you can verify this by looking into the file). These values may be missing or unknown.

The distinction between `0` and `NaN` is subtle but important. In this dataset, it represents that daily test numbers were not reported on specific dates. Italy started reporting daily tests on Apr 19, 2020. They'd already conducted 935,310 tests before Apr 19.

We can find the first index that doesn't contain a `NaN` value using a column's `first_valid_index` method.

Let's look at a few rows before and after this index to verify that the values change from `NaN` to actual numbers. We can do this by passing a range to `loc`.

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
