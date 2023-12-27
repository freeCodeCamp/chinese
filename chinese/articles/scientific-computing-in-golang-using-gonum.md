> -  原文地址：[Scientific Computing in Golang with the Gonum Package](https://www.freecodecamp.org/news/scientific-computing-in-golang-using-gonum/)
> -  原文作者：[UkejeChukwuemeriwoGoodness](https://www.freecodecamp.org/news/author/goodnessuc/)
> -  译者：
> -  校对者：

![Scientific Computing in Golang with the Gonum Package](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/freecode_ccexpress.jpeg)

In this article, I'll introduce you to Gonum, a package you can use to perform scientific computations in the Go programming language.

### Here's what we'll cover in this intermediate tutorial

-   What is Gonum?
-   Why use Gonum
-   How to install and set up Gonum
-   How to perform statistical operations using Gonum
-   How to perform matrix operations using Gonum
-   Other scientific computations supported by Gonum.

### Prerequisites

-   Knowledge of functional programming in Golang.
-   A Golang IDE with Go installed (I use Goland and Go 1.17.6, but you can use any other)

## What is Gonum?

![Screenshot-from-2022-03-14-05-30-53-1](https://www.freecodecamp.org/news/content/images/2022/03/Screenshot-from-2022-03-14-05-30-53-1.png)

[Gonum](https://github.com/gonum/gonum), short for Go Numerical, is a Golang package built and designed by [gonum.org](http://gonum.org) to make scientific computations easier in the Go programming language.

The Gonum package is similar to [Numpy](https://numpy.org/) in the [Python](http://python.org) programming language. Numpy currently has more to offer with more functionalities than Gonum, but Gonum's features are improving consistently.

The Gonum package supports functionalities for various scientific computations like Linear Algebra, Calculus, Statistics, graphs, and many others.

In this article, we'll go over various functions and use-cases of Gonum.

## Why Use Gonum?

-   The speed and concurrency Golang offers.
-   Golang programs are easier to maintain.
-   Gonum contains more mathematical operations than the Go standard library.
-   Gonum is optimized for scientific calculations across various fields.

## How to Get Started With Gonum

To get started with Gonum, you'll need to install the package from [Github](https://github.com/gonum/gonum) on your terminal using the command:

```go
go get -u gonum.org/v1/gonum/
```

This command should output a successful installation message. If it doesn’t, update your Go to a more recent version and try again.

## Statistical Operations Using Gonum

The Gonum package provides a library for statistical calculations. This library contains a lot of functions which you can view [here](https://pkg.go.dev/gonum.org/v1/gonum@v0.9.3/stat).

In this tutorial, I will be going over the rudimentary functions of the library, specifically for measures of central tendency (mean, median, mode).

Import the stats library in the `gonum` package like this:

```go
import “gonum.org/v1/gonum/stat”
```

![carbon--1-](https://www.freecodecamp.org/news/content/images/2022/03/carbon--1-.png)

-   **Mean**: `stat.Mean` returns the mean value of a slice of the `float64` type. It takes in a slice and a [weight](https://en.wikipedia.org/wiki/Weighted_arithmetic_mean) which could be nil or a corresponding slice for which the slice gets weighed.

```go
func mean() {
   values := []float64{1, 2, 3, 4, 5, 6}
   weights := []float64{1, 1, 1, 1, 1, 1} //has the same effects as nil
   fmt.Println(stat.Mean(values, weights))
}
```

**Output: 3.5**

-   **Median**: `stat.Quantile`, there is no explicit function for the median in gonums/stat. But we can use `stat.Quantile` by passing in a sorted slice by importing the `sort` module.

`stat.Quantile` takes a position, the slice, a [cummulant kind](https://github.com/gonum/gonum/blob/v0.9.3/stat/stat.go#L1039) and weight. The position argument `p` is a float ranging from 0 to 1, and the cumulant kind is `stat.Empirical` or `stat.LinInterp`.

In this case, we use `stat.Empirical`, which returns the value at the specified position `p`.

````
```go
import (
	"gonum.org/v1/gonum/stat"
	"sort"
)

func median() {
	values := []float64{10, 20, 25, 30, 45, 70, 30}
	sort.Float64s(values) //sorts the float
	fmt.Println(stat.Quantile(0.5, stat.Empirical, values, nil))
}
```
````

**Output: 30**

-   **Mode**: `stat.Mode`. Just like `stat.Mean`, it takes in a slice of values and a weight slice, and returns the most occurring element alongside the number of occurrences of the element.

```go
func mode() {
   values := []float64{10, 20, 25, 30, 45, 70, 30}
   fmt.Println(stat.Mode(values, nil))
}
```

**Output: 30 2**

## Matrix Operations Using Gonum

Gonum supports matrix operations in the [`mat` package](https://pkg.go.dev/gonum.org/v1/gonum/mat).

```go
import “gonum.org/v1/gonum/mat”
```

### How to Create a Matrix

`mat.NewDense` is the method for creating a matrix. It takes in the dimensions of the matrix and the data to be passed in, which could be nil (a matrix with all entities equal to zero).

`mat.NewDense` returns a pointer to the matrix object which can be dereferenced.

The null matrix serves as the matrix for the examples in this tutorial.

```go
func null(){
  matrix := mat.NewDense(3, 3, nil)
  fmt.Println(*matrix)
}
```

**output:**

```markdown
{{3 3 [0 0 0 0 0 0 0 0 0] 3} 3 3}
```

### How to Format the Matrix Output

Printing a Gonum matrix without formatting returns a pointer to the matrix in this format `{{3 3 [0 0 0 0 0 0 0 0 0] 3} 3 3}`.

To output a two-dimensional table, we use `mat.Formatted` which takes in the matrix object, a prefix, and a format option which in this case, we use `mat.Squeeze`.

```go
func format(matrix mat.Matrix) {
	formatted := mat.Formatted(matrix, mat.Prefix(""), mat.Squeeze())
	fmt.Println(formatted)
}
```

**Output**:

```markdown
⎡0  0  0⎤
⎢0  0  0⎥
⎣0  0  0⎦
```

### How to Set Matrix Values

To input a value into a position in the matrix, we use `.Set` on the matrix object. `matrix.Set` takes in three or more arguments as thus:

`matrix.Set(rowNumber, columnNumber, element)`.

```go
func input(){
	matrix.Set(1, 2, 3.0)
}
```

**Output**:

```markdown
⎡0  0  0⎤
⎢0  0  3⎥
⎣0  0  0⎦
```

### How to Get the Matrix Values

Retrieving values in the matrix is done using `.At` on the matrix object, which takes in the row and column numbers, respectively.

Here, we retrieve the element we set in the above example:

```go
func retriever(){
	getElement := matrix.At(1, 2)
	fmt.Println(getElement)
}
```

**Output: 3**

### How to Transpose a Matrix

Transposing a matrix involves the interchange of rows and columns in a matrix such that the rows are set to columns and vice-versa.

The `.T` method on the matrix object transposes the matrix.

```go
func transposer(){
	format(null.T())
}
```

Here, we transpose the matrix output from the set example.

**Output:**

```markdown
⎡0  0  0⎤
⎢0  0  0⎥
⎣0  3  0⎦
```

### Determinant of a Matrix

You can evaluate the determinant of a matrix using the method `mat.Det` which takes in the matrix and returns its determinant.

```go
func determinant(){
	determinant := mat.Det(matrix)
	fmt.Println(determinant)
}
```

**Output**: 0

### How to Add Rows and Columns to Matrices

You can add a new row or column using `.SetRow` and `.SetCol`. These methods take in a row number, and a slice of values of similar dimension.

This updates the rows and columns of the matrix:

```go
values := []float64{1, 2, 3}
matrix.SetCol(0, values)
matrix.SetRow(1, values)
```

**Output:**

```markdown
⎡1  0  0⎤
⎢1  2  3⎥
⎣3  0  0⎦
```

## Other Gonum Packages

Gonum has more packages for scientific computing:

-   [blas](https://pkg.go.dev/gonum.org/v1/gonum@v0.11.0/blas) → provides interfaces for the BLAS (**Basic Linear Algebra Subprograms)** linear algebra standard
-   [diff](https://pkg.go.dev/gonum.org/v1/gonum@v0.11.0/diff/fd) → Functions for differential calculus
-   [graph](https://pkg.go.dev/gonum.org/v1/gonum@v0.11.0/graph) → interfaces for graphs
-   [integrate](https://pkg.go.dev/gonum.org/v1/gonum@v0.11.0/integrate) → Functions for integral calculus
-   [lapack](https://pkg.go.dev/gonum.org/v1/gonum@v0.11.0/lapack) → provides interfaces for the LAPACK (Linear Algebra Package) linear algebra standard
-   [mathext](https://pkg.go.dev/gonum.org/v1/gonum@v0.11.0/mathext) → Special mathematics functions that are not included in the Go standard library
-   [unit](https://pkg.go.dev/gonum.org/v1/gonum@v0.11.0/unit) → Types and constants for easy use of SI Units

## Wrapping Up

In this article, you learned about scientific computations in Golang using the Gonum package.

We discussed statistical and matrix computations in Gonum and went through other scientific computation modules in the Gonum package.

Working with other modules in the Gonum package is pretty straightforward and similar to the ones we discussed here.