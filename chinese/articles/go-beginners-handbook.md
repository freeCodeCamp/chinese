> -  原文地址：[The Go Handbook – Learn Golang for Beginners](https://www.freecodecamp.org/news/go-beginners-handbook/)
> -  原文作者：[Flavio Copes](https://www.freecodecamp.org/news/author/flavio/)
> -  译者：herosql
> -  校对者：

![Go语言手册-面对go语言的初学者](https://www.freecodecamp.org/news/content/images/size/w2000/2022/10/pexels-christina-morillo-1181290.jpg)

Go语言是一门非常棒的,简单的,现代化的,性能特别高的编程语言.

它是编译类型,开源的,强类型语言.

Golang – 也可以称为 Go – 谷歌工程师创造这门语言的主要目标:

-   让他们的项目编译(和运行)快
-   是简单的,这样人们可以很短的时间就能用起来
-   足够低的水平,但也要避免一些水平过低的陷阱
-   具有可移植(经过编译的GO程序不需要其他文件的支持,就可以跨平台运行,因此它们很容易分发)
-   具有简单,稳定的,可以预测性,从而减少犯错的机会
-   使得利用多处理器系统变得容易

Go是基于C和C++.它做一些东西特别简单像并发和内存的管理,和垃圾回收.

当然,它是基于C和C++构建的,它具有很多C语言的特性.

你可以用GO做很多不一样的任务,它既可以解决简单的问题也可以解决复杂的问题.

你可以用Go做命令行的工具和网络服务器,它还可以跨多个不同的学科使用.

举个例子,Docker和K8s是用Go编写的.

我最喜欢的静态网站生成工具Hugo是用Go编写的.

Caddy,一个非常流行的web服务器是用GO编写的.

这些形色各异,广泛使用的工具都是用这门编程语言作为基础创建.

这本手册将向你介绍Go编程语言,使得你开始使用Go编写程序.

[你可以点击链接获得pdf版本和ePub版本的GO初学者手册](https://thevalleyofcode.com/download/go/).

## 目录内容

1.  [怎么获得Go](#how-to-get-started-with-go)
2.  [怎么安装Go语言环境](#how-to-install-go)
3.  [怎么选择你的编辑器](#how-to-setup-your-editor)
4.  [怎么用Go编写Hello,World!](#how-to-write-hello-world-in-go)
5.  [怎么编译和运行Go程序](#how-to-compile-and-run-a-go-program)
6.  [Go的工作空间](#the-go-workspace)
7.  [分离Go语言](#diving-into-the-go-language)
8.  [Go中的变量](#variables-in-go)
9.  [Go的基础类型](#basic-types-in-go)
10.  [Go中的字符串](#strings-in-go)
11.  [Go中的数组](#arrays-in-go)
12.  [Go中的切片](#slices-in-go)
13.  [Go中的哈希表](#maps-in-go)
14.  [Go中的循环](#loops-in-go)
15.  [Go中的条件运算符](#conditionals-in-go)
16.  [Go中的运算符](#operators-in-go)
17.  [Go中的结构体](#structs-in-go)
18.  [Go中的函数](#functions-in-go)
19.  [Go中的指针](#pointers-in-go)
20.  [Go中的方法](#methods-in-go)
21.  [Go中的接口](#interfaces-in-go)
22.  [以后的路](#where-to-go-from-here)

## 怎样开始获得Go

在我们深入语言特性之前,我们首先得知道一些东西

首先, [https://go.dev](https://go.dev/) 这是语言的官网. 在官网你可以获得的资料:

-   下载Go的二进制包 (是 `go` 命令和发行的工具)  [https://go.dev/doc/install](https://go.dev/doc/install)
-   Go的官方文档 [https://go.dev/doc/](https://go.dev/doc/)
-   看到Go的所有第三方库 [https://pkg.go.dev/](https://pkg.go.dev/)
-   Go的在线游乐园 [https://go.dev/play/](https://go.dev/play/)

…待续.

## 怎么安装Go语言环境

到 [https://go.dev/doc/install](https://go.dev/doc/install) 下载你电脑使用的操作系统的Go程序包.

运行并安装,在最后一个步骤你需要在命令行设置`go`命令:

![Screen Shot 2022-07-28 at 10.19.21.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_10.19.21.png)

欢迎进行Go的安装

![Screen Shot 2022-07-28 at 10.20.54.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_10.20.54.png)

安装成功

打开命令行并运行 `go version` 你会看到以下内容:

![Screen Shot 2022-07-28 at 10.21.32.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_10.21.32.png)

展示你当前的Go版本

说明: 你如果在你允许Go的安装程序之前打开的命令行窗口,你可能看不到以上效果.

执行本地的Go安装文件会依赖于你的操作系统.

在mac系统中,它在`/usr/local/go`, 运行文件在`/usr/local/go/bin`.

在Windows系统中,它在`C:\Program Files\go`.

在Windows和Mac安装中Go执行文件路径都是自动设定的.

在Mac你可以在Homebrew中使用`brew install golang`命令安装. 这样方式更容易升级最新版本.

在Linux上你在运行`go`命令之前需要配置环境变量,配置Linux环境变量的路径`/usr/local/go`的命令:

```bash
echo 'export PATH=$PATH:/usr/local/go/bin' >> $HOME/.profile
source $HOME/.profile
```

## 怎么选择你的编辑器

我推荐使用 [**Visual Studio Code**](https://code.visualstudio.com/) (也叫 VS Code) 作为你的编辑器.

阅读 [在 Visual Studio Code 编写Go](https://code.visualstudio.com/docs/languages/go) 查看 “up and running” 安装. 在最小版,  安装[Go的扩展](https://marketplace.visualstudio.com/items?itemName=golang.go).

![Screen Shot 2022-07-28 at 10.54.06.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_10.54.06.png)

在VSCode中的Go扩展

这个扩展可以让你的生活更加轻松.在生产产品(符号高亮,自动编译,动态信息提示,高亮...)和其他的功能如自动格式化,可以选择性的安装其他包,测试,还有更多.

## 怎么用Go编写Hello,World!

现在我们准备创建我们第一个Go程序!

它是一个程序员创建第一个程序,它会在运行的时候在命令行输入“Hello, World!” 字符串.在我们做第一个程序的同时,我们解释一下我们为什么这样做.

或许你可以在你的目录下创建一个文件夹保存你所有编写的项目和测试.

在这,创建一个新的文件夹,比如取名叫`hello`.

在这,创建一个叫`hello.go` 的文件 (你可以用任何想要用的名字).

文件内容如下:

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello, World!")
}
```

![Screen Shot 2022-07-28 at 12.17.14.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_12.17.14.png)

Go "Hello, World!" 代码

这是你编写的第一个Go程序!

开始一行行的解析.

```go
package main
```

我们通过包的形式组织Go程序.

每一个`.go` 文件首先声明包的部分.

一个包可以放多个文件,或者一个文件.

一个程序可以由多个包组成.

这个 `main` 是程序识别可执行程序用的.

```go
import "fmt"
```

我们可以使用 `import` 关键字导入一个包.

`fmt` 是Go提供的输入/输出工具函数包.

我们有[第三方包仓库](https://pkg.go.dev/std) 可以通过网络使用我们想要用的任何包,如数据计算库,加密库,图片处理库,文件系统操作库等更多.

你可以阅读关于`fmt` 包提供的全部功能 [在介绍文档中](https://pkg.go.dev/fmt).

```go
func main() {
	
}
```

这里我们声明名为 `main()` 的函数.

什么是函数?我们待会再看,但是在实际含义中一个函数是一段代码块,包括名字,内部的一些结构.

这个`main`函数是特殊的因为这也是程序启动的地方. 

在这个简单的案例中我们只是有一个函数-这个程序启动和结束在一起.

```go
fmt.Println("Hello, World!")
```

这是我们在函数中的定义.

我们调用了我们引入的`fmt`包中`Println()` 函数,会输出一个字符串.

这个函数的描述在[文档中](https://pkg.go.dev/fmt#Printf) "_formats according to a format specifier and writes to standard output_”.

看一下他们伟大的源码,他们有提供示例,你可以试着运行:

![Screen Shot 2022-07-28 at 14.18.46.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_14.18.46.png)

Go基础的函数模板

我们可以用 “dot” 符号 `fmt.Println()` 获得包中提供的函数的特性.

在执行代码`main`函数之后,它没有做其他的事就结束了执行.

## 怎么编译和运行Go程序

Now open the terminal in the `hello` folder and run the program using:

```bash
go run hello.go
```

![Screen Shot 2022-07-28 at 12.18.23.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_12.18.23.png)

Hello world output in Go

Our program ran successfully, and it printed “Hello, World!” to the terminal.

The `go run` tool first compiles and then runs the program specified.

You can create a **binary** using `go build`:

```bash
go build hello.go
```

This will create a `hello` file that’s a binary you can execute:

![Screen Shot 2022-07-28 at 12.19.50.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_12.19.50.png)

Executable binary in Go

In the introduction I mentioned that Go is portable.

Now you can distribute this binary and everyone can run the program as-is, because the binary is already packaged for execution.

The program will run on the same architecture we built it on.

We can create a different binary for a different architecture using the `GOOS` and `GOARCH` environment variables, like this:

```go
GOOS=windows GOARCH=amd64 go build hello.go
```

This will create a `hello.exe` executable for 64-bit Windows machines:

![Screen Shot 2022-07-28 at 15.36.55.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_15.36.55.png)

Hello.exe executable

Setup for 64-bit macOS (Intel or Apple Silicon) is `GOOS=darwin GOARCH=amd64` and Linux is `GOOS=linux GOARCH=amd64`.

This is one of the best features of Go.

## The Go Workspace

One special thing about Go is what we call the **workspace**.

The workspace is the “home base” for Go.

By default Go picks the `$HOME/go` path, so you will see a `go` folder in your home.

It’s first created when you install a package (as we’ll see later) but also to store some tooling.

For example the moment I loaded the `hello.go` file in VS Code, it prompted me to install the `[gopls](https://pkg.go.dev/golang.org/x/tools/gopls)` command, the Delve debugger (`dlv`), and the [`staticcheck` linter](https://staticcheck.io/).

They were automatically installed under `$HOME/go`:

![Screen Shot 2022-07-28 at 12.27.27.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_12.27.27.png)

`$HOME/go`

When you install packages using `go install`, they will be stored here.

This is what we call **GOPATH**.

You can change the `GOPATH` environment variable to change where Go should install packages.

This is useful when working on different projects at the same time and you want to isolate the libraries you use.

## Diving into the Go Language

Now that we've got the first notions in place, and we ran our first Hello, World! program, we can dive into the language.

The language has no semantically significant whitespace. This is like C, C++, Rust, Java, JavaScript, but unlike Python, where whitespace is meaningful and is used to create blocks instead of curly brackets.

Semicolons are optional, like in JavaScript (unlike in C, C++, Rust or Java).

Go takes indentation and visual order very seriously.

When we install Go we also get access to the `gofmt` command line tool which we can use to format Go programs. VS Code uses that under the hood to format Go source files.

This is very interesting and innovative because formatting and issues like tabs vs spaces or “should I put the curly brackets on the same line of the loop definition or in the next line” are a huge waste of time.

The language creators defined the rules, and everyone uses those rules.

This is great for projects with large teams.

I recommend you enable in the VS Code Settings “**Format on Save**” and “**Format on Paste**”:

![Screen Shot 2022-07-28 at 14.39.42.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_14.39.42.png)

VS Code settings for Go - Format on Paste and Format on Save

You can write comments in Go using the usual C / C++ / JavaScript / Java syntax:

```go
// this is a line comment

/*
multi
line
comment
*/
```

## Variables in Go

One of the first things you do in a programming language is defining a variable.

In Go we define variables using `var`:

```go
var age = 20
```

You can define variables at the package level:

```go
package main

import "fmt"

var age = 20

func main() {
	fmt.Println("Hello, World!")
}
```

or inside a function:

```go
package main

import "fmt"

func main() {
	var age = 20

	fmt.Println("Hello, World!")
}
```

Defined at the package level, a variable is visible across all the files that compose the package. A package can be composed of multiple files, you just need to create another file and use the same package name at the top.

Defined at the function level, a variable is visible only within that function. It’s initialized when the function is called, and destroyed when the function ends the execution.

In the example we used:

```go
var age = 20
```

we assign the value `20` to `age`.

This makes Go determine that the **type** of the variable `age` is `int`.

We’ll see more about types later, but you should know there are many different ones, starting with `int`, `string`, and `bool`.

We can also declare a variable without an existing value, but in this case we must set the type like this:

```go
var age int
var name string
var done bool
```

When you know the value, you typically use the short variable declaration with the `:=` operator:

```go
age := 10
name := "Roger"
```

For the name of the variable you can use letters, digits, and the underscore `_` as long as the name starts with a character or `_`.

Names are **case sensitive**.

If the name is long, it’s common to use camelCase. So to indicate the name of the car we use `carName`.

You can assign a new value to a variable with the assignment operator `=`

```go
var age int
age = 10
age = 11
```

If you have a variable that never changes during the program you can declare it as a constant using `const`:

```go
const age = 10
```

You can declare multiple variables on a single line:

```go
var age, name
```

and initialize them too:

```go
var age, name = 10, "Roger"

//or

age, name := 10, "Roger"
```

Declared variables that are not used in the program raise an error and the program does not compile.

You will see a warning in VS Code:

![Screen Shot 2022-07-28 at 15.45.31.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_15.45.31.png)

Warning for unused declared variables

and the error from the compiler:

![Screen Shot 2022-07-28 at 15.45.44.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_15.45.44.png)

Error in compiler for unused declared variables

If you declare a variable without initializing it to a value, it is assigned a value automatically that depends on the type – for example an integer is `0` and a string is an empty string.

## Basic Types in Go

Go is a typed language.

We saw how you can declare a variable, specifying its type:

```go
var age int
```

Or you can let Go infer the type from the initial value assigned:

```go
var age = 10
```

The basic types in Go are:

-   Integers (`int`, `int8`, `int16`, `int32`, `rune`, `int64`, `uint`, `uintptr`, `uint8`, `uint16`, `uint64`)
-   Floats (`float32`, `float64`), useful to represent decimals
-   Complex types (`complex64`, `complex128`), useful in math
-   Byte (`byte`), represents a single ASCII character
-   Strings (`string`), a set of `byte`s
-   Booleans (`bool`), either true or false

We have a lot of different types to represent integers. You will use `int` most of the time, and you might choose a more specialized one for optimization (not something you need to think about when you are just learning).

An `int` type will default to be 64 bits when used on a 64 bit system, 32 bits on a 32 bit system, and so on.

`uint` is an `int` that’s unsigned, and you can use this to double the amount of values you can store if you know the number is not going to be negative.

All the above basic types are **value types**, which means they are **passed by value** to functions when passed as parameters, or when returned from functions.

## Strings in Go

A string in Go is a sequence of `byte` values.

As we saw above, you can define a string using this syntax:

```go
var name = "test"
```

It’s important to note that unlike other languages, strings are defined only using double quotes, not single quotes.

To get the length of a string, use the built-in `len()` function:

```go
len(name) //4
```

You can access individual characters using square brackets, passing the index of the character you want to get:

```go
name[0] //"t" (indexes start at 0)
name[1] //"e"
```

You can get a portion of the string using this syntax:

```go
name[0:2] //"te"
name[:2]  //"te"
name[2:]  //"st"
```

Using this you can create a copy of the string using:

```go
var newstring = name[:]
```

You can assign a string to a new variable like this:

```go
var first = "test"
var second = first
```

Strings are **immutable**, so you cannot update the value of a string.

Even if you assign a new value to `first` using an assignment operator, the value `second` is still going to be `"test"`:

```go
var first = "test"
var second = first

first = "another test"

first  //"another test"
second //"test"
```

Strings are reference types, which means if you pass a string to a function, the **reference** to the string will be copied, not its value. But since strings are immutable, in this case it’s not a big difference in practice with passing an `int`, for example.

You can concatenate two strings using the `+` operator:

```go
var first = "first"
var second = "second"

var word = first + " " + second  //"first second"
```

Go provides several string utilities in the the `strings` package.

We already saw how to import a package in the “Hello, World!” example.

Here’s how you can import `strings`:

```go
package main

import (
    "strings"
)
```

And then you can use it.

For example we can use the `HasPrefix()` function to see if a string starts with a specific substring:

```go
package main

import (
    "strings"
)

func main() {
    strings.HasPrefix("test", "te") // true
}
```

You can find the full list of methods here: [https://pkg.go.dev/strings](https://pkg.go.dev/strings).

Here’s a list of methods you might use frequently:

-   `strings.ToUpper()` returns a new string, uppercase
-   `strings.ToLower()` returns a new string, lowercase
-   `strings.HasSuffix()` checks if a string ends with a substring
-   `strings.HasPrefix()` checks if a string starts with a substring
-   `strings.Contains()` checks if a string contains a substring
-   `strings.Count()` counts how many times a substring appears in a string
-   `strings.Join()` used to join multiple strings and create a new one
-   `strings.Split()` used to create an array of strings from a string, dividing the original one on a specific character, like a comma or a space
-   `strings.ReplaceAll()` used to replace a portion in a string and replace it with a new one

## Arrays in Go

Arrays are a sequence of items of a single type.

We define an array in this way:

```go
var myArray [3]string //an array of 3 strings
```

and you can initialize the array with values using:

```go
var myArray = [3]string{"First", "Second", "Third"}
```

In this case you can also let Go do some work and count the items for you:

```go
var myArray = [...]string{"First", "Second", "Third"}
```

An array can only contain values of the same type.

The array cannot be resized – you have to explicitly define the length of an array in Go. That’s part of the _type_ of an array. Also, you cannot use a variable to set the length of the array.

Due to this limitation, arrays are rarely used directly in Go. Instead we use **slices** (more on them later). Slices use arrays under the hood, so it’s still necessary to know how they work.

You can access an item in the array with the square brackets notation we already used in strings to access a single character:

```go
myArray[0] //indexes start at 0
myArray[1]
```

You can set a new value for a specific position in the array:

```go
myArray[2] = "Another"
```

And you can get the length of an array using the `len()` function:

```go
len(myArray)
```

Arrays are **value types**. This means copying an array:

```go
anotherArray := myArray
```

or passing an array to a function, or returning it from a function, creates a copy of the original array.

This is different from other programming languages out there.

Let’s make a simple example where we assign a new value to an array item after copying it. See, the copy doesn't change:

```go
var myArray = [3]string{"First", "Second", "Third"}
myArrayCopy := myArray
myArray[2] = "Another"

myArray[2]     //"Another"
myArrayCopy[2] //"Third"
```

Remember you can only add a single type of items in an array, so setting the `myArray[2] = 2` for example will raise an error.

Low-level elements are stored continuously in memory.

## Slices in Go

A slice is a data structure similar to an array, but it can change in size.

Under the hood, slices use an array and they are an abstraction built on top of them that makes them more flexible and useful (think about arrays as lower level).

You will use slices in a way that’s very similar to how you use arrays in higher level languages.

You define a slice similarly to an array, omitting the length:

```go
var mySlice []string //a slice of strings
```

You can initialize the slice with values:

```go
var mySlice = []string{"First", "Second", "Third"}

//or

mySlice := []string{"First", "Second", "Third"}
```

You can create an empty slice of a specific length using the `make()` function:

```go
mySlice := make([]string, 3) //a slice of 3 empty strings
```

You can create a new slice from an existing slice, appending one or more items to it:

```go
mySlice := []string{"First", "Second", "Third"}

newSlice := append(mySlice, "Fourth", "Fifth")
```

Note that we need to assign the result of `append()` to a new slice, otherwise we’ll get a compiler error. The original slice is not modified – we’ll get a brand new one.

You can also use the `copy()` function to duplicate a slice so it does not share the same memory of the other one and is independent:

```go
mySlice := []string{"First", "Second", "Third"}

newSlice := make([]string, 3)

copy(newSlice, mySlice)
```

If the slice you’re copying to does not have enough space (is shorter than the original) only the first items (until there’s space) will be copied.

You can initialize a slice from an array:

```go
myArray := [3]string{"First", "Second", "Third"}

mySlice = myArray[:]
```

Multiple slices can use the same array as the underlying array:

```go
myArray := [3]string{"First", "Second", "Third"}

mySlice := myArray[:]
mySlice2 := myArray[:]

mySlice[0] = "test"

fmt.Println(mySlice2[0]) //"test"
```

Those 2 slices now share the same memory. Modifying one slice modifies the underlying array and causes the other slice generated from the array to be modified, too.

As with arrays, each item in a slice is stored in memory in consecutive memory locations.

If you know you need to perform operations on the slice, you can request it to have more capacity than initially needed. This way, when you need more space, the space will be readily available (instead of finding and moving the slice to a new memory location with more space to grow and dispose via garbage collection of the old location).

We can specify the **capacity** by adding a third parameter to `make()`:

```go
newSlice := make([]string, 0, 10)
//an empty slice with capacity 10
```

As with strings, you can get a portion of a slice using this syntax:

```go
mySlice := []string{"First", "Second", "Third"}

newSlice := mySlice[:2] //get the first 2 items
newSlice2 := mySlice[2:] //ignore the first 2 items
newSlice3 := mySlice[1:3] //new slice with items in position 1-2
```

## Maps in Go

A map is a very useful data type in Go.

In other language it’s also called a _dictionary_ or _hash map_ or _associative array_.

Here’s how you create a map:

```go
agesMap := make(map[string]int)
```

You don’t need to set how many items the map will hold.

You can add a new item to the map in this way:

```go
agesMap["flavio"] = 39
```

You can also initialize the map with values directly using this syntax:

```go
agesMap := map[string]int{"flavio": 39}
```

You can get the value associated with a key using:

```go
age := agesMap["flavio"]
```

You can delete an item from the map using the `delete()` function in this way:

```go
delete(agesMap, "flavio")
```

## Loops in Go

One of Go’s best features is to give you fewer choices.

We have one loop statement: `for`.

You can use it like this:

```go
for i := 0; i < 10; i++ {
	fmt.Println(i)
}
```

We first initialize a loop variable, then we set the _condition_ we check for with each iteration to decide if the loop should end. Finally we have the _post statement_, executed at the end of each iteration, which in this case increments `i`.

`i++` increments the `i` variable.

The `<` _operator_ is used to compare `i` to the number `10` and returns `true` or `false`, determining if the loop body should be executed or not.

We don’t need parentheses around this block, unlike other languages like C or JavaScript.

Other languages offer different kind of loop structures, but Go only has this one. We can simulate a `while` loop, if you’re familiar with a language that has it, like this:

```go
i := 0

for i < 10 {
	fmt.Println(i)
  i++
}
```

We can also completely omit the condition and use `break` to end the loop when we want:

```go
i := 0

for {
	fmt.Println(i)

	if i < 10 {
		break
	}

  i++
}
```

I used a `if` statement inside the loop body, but we haven’t seen _conditionals_ yet! We’ll do that next.

One thing I want to introduce now is `range`.

We can use `for` to iterate through an array using this syntax:

```go
numbers := []int{1, 2, 3}

for i, num := range numbers {
	fmt.Printf("%d: %d\n", i, num)
}

//0: 1
//1: 2
//2: 3
```

Note: I used `fmt.Printf()` which allows us to print any value to the terminal using the _verbs_ `%d` which mean _decimal integer_ and `\n` means add a line terminator.

It’s common to use this syntax when you don’t need to use the index:

```go
for _, num := range numbers {
  //...
}
```

We're using the special `_` character that means “ignore this” to avoid the Go compiler raising an error saying “you’re not using the `i` variable!”.

## Conditionals in Go

We use the `if` statement to execute different instructions depending on a condition:

```go
if age < 18 {
	//underage
}
```

The `else` part is optional:

```go
if age < 18 {
	//underage
} else {
  //adult
}
```

and can be combined with other `if`s:

```go
if age < 12 {
	//child
} else if age < 18  {
  //teen
} else {
	//adult
}
```

If you define any variable inside the `if`, that’s only visible inside the `if` (same applies to `else` and anywhere you open a new block with `{}`).

If you’re going to have many different if statements to check a single condition, it’s probably better to use `switch`:

```go
switch age {
case 0: fmt.Println("Zero years old")
case 1: fmt.Println("One year old")
case 2: fmt.Println("Two years old")
case 3: fmt.Println("Three years old")
case 4: fmt.Println("Four years old")
default: fmt.Println(i + " years old")
}
```

Compared to C, JavaScript, and other languages, you don’t need to have a `break` after each `case`.

## Operators in Go

We've used some operators so far in our code examples, like `=`, `:=` and `<`.

Let’s talk a bit more about them.

We have assignment operators `=` and `:=` we use to declare and initialize variables:

```go
var a = 1

b := 1
```

We have comparison operators `==` and `!=` that take 2 arguments and return a boolean:

```go
var num = 1
num == 1 //true
num != 1 //false
```

and `<`, `<=`, `>`, `>=`:

```go
var num = 1
num > 1 //false
num >= 1 //true
num < 1 //false
num <= 1 //true
```

We have binary (require two arguments) arithmetic operators, like `+`, `-`, `*`, `/`, `%`.

```go
1 + 1 //2
1 - 1 //0
1 * 2 //2
2 / 2 //1
2 % 2 //0
```

`+` can also join strings:

```go
"a" + "b" //"ab"
```

We have unary operators `++` and `--` to increment or decrement a number:

```go
var num = 1
num++ // num == 2
num-- // num == 1
```

Note that unlike C or JavaScript we can’t prepend them to a number like `++num`. Also, the operation does not return any value.

We have boolean operators that help us with making decisions based on `true` and `false` values: `&&`, `||` and `!`:

```go
true && true  //true
true && false //false
true || false //true
false || false //false
!true  //false
!false //true
```

Those are the main ones.

## Structs in Go

A **struct** is a _type_ that contains one or more variables. It’s like a collection of variables. We call them _fields_. And they can have different types.

Here’s an example of a struct definition:

```go
type Person struct {
	Name string
	Age int
}
```

Note that I used uppercase names for the fields, otherwise those will be _private_ to the package. And when you pass the struct to a function provided by another package, like the ones we use to work with JSON or database, those fields cannot be accessed.

Once we define a struct we can initialize a variable with that type:

```go
flavio := Person{"Flavio", 39}
```

and we can access the individual fields using the dot syntax:

```go
flavio.Age //39
flavio.Name //"Flavio"
```

You can also initialize a new variable from a struct in this way:

```go
flavio := Person{Age: 39, Name: "Flavio"}
```

This lets you initialize only one field, too:

```go
flavio := Person{Age: 39}
```

or even initialize it without any value:

```go
flavio := Person{}

//or

var flavio Person
```

and set the values later:

```go
flavio.Name = "Flavio"
flavio.Age = 39
```

Structs are useful because you can group unrelated data and pass it around to/from functions, store in a slice, and more.

Once defined, a struct is a type like `int` or `string` and this means you can use it inside other structs, too:

```go
type FullName struct {
	FirstName string
	LastName string
}

type Person struct {
	Name FullName
	Age int
}
```

## Functions in Go

A function is a block of code that’s assigned a name, and contains some instructions.

In the “Hello, World!” example we created a `main` function, which is the entry point of the program.

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello, World!")
}
```

That’s a special function.

Usually we define functions with a custom name:

```go
func doSomething() {

}
```

and then you can call them, like this:

```go
doSomething()
```

A function can accept parameters, and we have to set the type of the parameters like this:

```go
func doSomething(a int, b int) {

}

doSomething(1, 2)
```

`a` and `b` are the names we associate to the parameters internally to the function.

A function can return a value, like this:

```go
func sumTwoNumbers(a int, b int) int {
	return a + b
}

result := sumTwoNumbers(1, 2)
```

Note that we specified the return value _type_.

A function in Go can return more than one value:

```go
func performOperations(a int, b int) (int, int) {
	return a + b, a - b
}

sum, diff := performOperations(1, 2)
```

It’s interesting because many languages only allow one return value.

Any variable defined inside the function is local to the function.

A function can also accept an unlimited number of parameters, and in this case we call it a _variadic function_:

```go
func sumNumbers(numbers ...int) int {
	sum := 0
	for _, number := range numbers {
		sum += number
	}
	return sum
}

total := sumNumbers(1, 2, 3, 4)
```

## Pointers in Go

Go supports pointers.

Suppose you have a variable:

```go
age := 20
```

Using `&age` you get the pointer to the variable, its memory address.

When you have the pointer to the variable, you can get the value it points to by using the `*` operator:

```go
age := 20
ageptr = &age
agevalue = *ageptr
```

This is useful when you want to call a function and pass the variable as a parameter. Go by default copies the value of the variable inside the function, so this will not change the value of `age`:

```go
func increment(a int) {
	a = a + 1
}

func main() {
	age := 20
	increment(age)

	//age is still 20
}
```

You can use pointers for this:

```go
func increment(a *int) {
	*a = *a + 1
}

func main() {
	age := 20
	increment(&age)

	//age is now 21
}
```

## Methods in Go

You can assign a function to a struct, and in this case we call it a _method_.

Example:

```go
type Person struct {
	Name string
	Age int
}

func (p Person) Speak() {
	fmt.Println("Hello from " + p.Name)
}

func main() {
	flavio := Person{Age: 39, Name: "Flavio"}
	flavio.Speak()
}
```

You can declare methods to be pointer receiver or value receiver.

The above example shows a value receiver. It receives a copy of the struct instance.

This would be a pointer receiver that receives the pointer to the struct instance:

```go
func (p *Person) Speak() {
	fmt.Println("Hello from " + p.Name)
}
```

## Interfaces in Go

An interface is a _type_ that defines one or more _method signatures_.

Methods are not implemented, just their signature: the name, parameter types and return value type.

Something like this:

```go
type Speaker interface {
	Speak()
}
```

Now you could have a function accept any type that implements all the methods defined by the interface:

```go
func SaySomething(s Speaker) {
	s.Speak()
}
```

And we can pass it any struct that implements those methods:

```go
type Speaker interface {
	Speak()
}

type Person struct {
	Name string
	Age int
}

func (p Person) Speak() {
	fmt.Println("Hello from " + p.Name)
}

func SaySomething(s Speaker) {
	s.Speak()
}

func main() {
	flavio := Person{Age: 39, Name: "Flavio"}
	SaySomething(flavio)
}
```

## Where to Go from Here

This handbook is an introduction to the Go programming language.

Beside these basics, there are many things to learn now.

Garbage collection, error handling, concurrency and networking, the filesystem APIs, and much more.

The sky is the limit.

My suggestion is to pick a program you want to build and just start, learning the things you need along the way.

It will be fun and rewarding.

Note: [you can get a PDF and ePub version of this Go Beginner's Handbook here](https://thevalleyofcode.com/download/go/).
