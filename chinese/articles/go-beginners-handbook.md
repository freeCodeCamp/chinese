> -  原文地址：[The Go Handbook – Learn Golang for Beginners](https://www.freecodecamp.org/news/go-beginners-handbook/)
> -  原文作者：[Flavio Copes](https://www.freecodecamp.org/news/author/flavio/)
> -  译者：herosql
> -  校对者：

![Go 语言手册-面对 go 语言的初学者](https://www.freecodecamp.org/news/content/images/size/w2000/2022/10/pexels-christina-morillo-1181290.jpg)

Golang 是一门非常棒，简单，现代化，快速的编程语言。

它是编译的，开源的，强类型的。

Golang – 也可以称为 Go – 由谷歌工程师创建,主要目标如下：

-   让他们的项目编译(和运行)更快
-   要简单，这样人们可以在短时间内学会
-   要足够低，但也要避免太低的陷阱
-   可移植(经过编译的 Go 程序不需要其他文件的支持，就可以跨平台运行，因此它们很轻易分发)
-   具有简单，稳定的，可以预测性，从而减少犯错的机会
-   易于利用多处理器系统

Go 是为了取代 C 和 C++ 代码库。它旨在通过垃圾收集使并发和内存管理等事情变得更简单。

此外，由于其与 C 有互用性特性，它被构建为与 C 和 C++ 代码库一起工作。

你可以用 Go 做很多不一样的任务，它既可以解决简单的问题也可以解决复杂的问题。

你可以用 Go 做命令行的工具和网络服务器，它广泛用于许多不同的场景。

举个例子，Docker 和 K8s 是用 Go 编写的。

我最喜欢的静态网站生成工具 Hugo 是用 Go 编写的。

Caddy，一个非常流行的 web 服务器是用 GO 编写的。

这些形色各异，广泛使用的工具都是用这门编程语言作为基础创建的。

本手册将向你介绍 Go 编程语言，以便你开始使用 Go 编程。

[你可以点击链接获得 GO 初学者手册的 pdf 版本和 ePub 版本](https://thevalleyofcode.com/download/go/).

## 目录

1.  [如何开始使用 Go](#how-to-get-started-with-go)
2.  [如何安装 Go](#how-to-install-go)
3.  [如何设置编辑器](#how-to-setup-your-editor)
4.  [如何用 Go 编写 Hello，World!](#how-to-write-hello-world-in-go)
5.  [如何编译和运行 Go 程序](#how-to-compile-and-run-a-go-program)
6.  [Go 的工作空间](#the-go-workspace)
7.  [深入 Go 语言](#diving-into-the-go-language)
8.  [Go 中的变量](#variables-in-go)
9.  [Go 的基础类型](#basic-types-in-go)
10.  [Go 中的字符串](#strings-in-go)
11.  [Go 中的数组](#arrays-in-go)
12.  [Go 中的切片](#slices-in-go)
13.  [Go 中的 map](#maps-in-go)
14.  [Go 中的循环](#loops-in-go)
15.  [Go 中的条件语句](#conditionals-in-go)
16.  [Go 中的运算符](#operators-in-go)
17.  [Go 中的结构体](#structs-in-go)
18.  [Go 中的函数](#functions-in-go)
19.  [Go 中的指针](#pointers-in-go)
20.  [Go 中的方法](#methods-in-go)
21.  [Go 中的接口](#interfaces-in-go)
22.  [以后的路](#where-to-go-from-here)

## <div id="how-to-get-started-with-go">如何开始使用 Go</div>

在我们深入了解语言的细节之前，你应该了解以下几点。

首先， [https://go.dev](https://go.dev/) 是语言的官网。 在官网你可以获得以下资源：

-   下载 Go 的二进制文件 ( `go` 命令和其他相关工具)  [https://go.dev/doc/install](https://go.dev/doc/install)
-   参考 Go 的官方文档 [https://go.dev/doc/](https://go.dev/doc/)
-   查看 Go 的所有第三方库 [https://pkg.go.dev/](https://pkg.go.dev/)
-   进入 Go 游乐园 [https://go.dev/play/](https://go.dev/play/)

……等等.

## <div id="how-to-install-go">如何安装 Go</div>

去 [https://go.dev/doc/install](https://go.dev/doc/install) 下载适用于你电脑操作系统的软件包。

运行并安装，在最后一个步骤你需要在命令行设置 `go` 命令：

![Screen Shot 2022-07-28 at 10.19.21.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_10.19.21.png)

欢迎进行 Go 的安装

![Screen Shot 2022-07-28 at 10.20.54.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_10.20.54.png)

安装成功

打开命令行并运行 `go version` 你会看到以下内容：

![Screen Shot 2022-07-28 at 10.21.32.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_10.21.32.png)

展示你当前的 Go 版本

注意： 在运行程序之前，您可能需要打开一个新的命令行，因为安装程序将 Go 二进制文件文件夹添加到了路径中。

Go 安装文件的确切位置取决于你的操作系统。

在 Mac 系统中，它在 `/usr/local/go` ， 运行文件在 `/usr/local/go/bin` 。

在 Windows 系统中，它在 `C:\Program Files\go`。

在 Windows 和 Mac 安装中 Go 执行文件路径都是自动设定的。

在 Mac 你可以在 Homebrew 中使用 `brew install golang` 命令安装。 这样方式更容易升级到最新版本。

在 Linux 上，你必须将 Go 二进制文件文件夹添加到你的环境变量中，然后才能在使用以下命令将 Linux 包解压缩到 `/usr/local/go`之后运行 `go` 命令：

```bash
echo 'export PATH=$PATH:/usr/local/go/bin' >> $HOME/.profile
source $HOME/.profile
```

## <div id="how-to-setup-your-editor">如何设置编辑器</div>

我推荐使用 [**Visual Studio Code**](https://code.visualstudio.com/) (也叫 VS Code) 作为你的编辑器。

请阅读 [在 Visual Studio Code 的 Go](https://code.visualstudio.com/docs/languages/go) 了解快速 “up and running” 设置。 安装[Go 的扩展](https://marketplace.visualstudio.com/items?itemName=golang.go)。

![Screen Shot 2022-07-28 at 10.54.06.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_10.54.06.png)

VSCode 中的 Go 扩展

这个扩展将让你的生活更加轻松。因为它提供智能感知（语法高亮显示、自动补全、悬停信息、错误高亮显示……）和其他功能，如自动格式化、安装软件包的菜单选项、测试等。

## <div id="how-to-write-hello-world-in-go">如何用 Go 编写 Hello，World!</div>

现在我们准备创建我们第一个 Go 程序!

程序员的传统是让第一个程序打印 “Hello,World!” 字符串到命令行。所以我们先做这个，然后解释我们是如何做到的。

或许你可以在你主目录下创建一个文件夹,保存你所有编写的项目和测试。

在这，创建一个新的文件夹，比如取名叫 `hello`。

在这，创建一个叫 `hello.go` 的文件 (你可以用任何想要用的名字)。

文件内容如下：

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello,World!")
}
```

![Screen Shot 2022-07-28 at 12.17.14.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_12.17.14.png)

Go "Hello， World!" 代码

这是你编写的第一个 Go 程序!

让我们逐行分析一下。

```go
package main
```

我们以包的形式组织 Go 程序。

每个`.go` 文件首先要声明它是哪个包的一部分。

一个包可以由多个文件组成，也可以仅由一个文件组成。

一个程序可以由多个包组成。

这个 `main` 是程序识别可执行程序的入口。

```go
import "fmt"
```

我们使用 `import` 关键字导入包。

`fmt` 是 Go 提供的内置包,提供输入/输出的工具函数。

我们有一个[大的标准库](https://pkg.go.dev/std)，可以随时使用，从网络连接到数学、加密、图像处理、文件系统访问等等。

你可以在[官方文档](https://pkg.go.dev/fmt)阅读 `fmt` 包提供的所有功能 .

```go
func main() {
	
}
```

这里我们声明 `main()` 函数。

什么是函数?稍后我们将看到更多关于它们的信息，但同时让我们假设一个函数是一个分配了名称的代码块，包含一些指令。

`main` 函数是特殊的，因为这也是程序启动的地方。 

在这个简单的例子中，我们只是有一个函数——程序从这个函数开始，然后结束。

```go
fmt.Println("Hello， World!")
```

这是我们定义的函数的内容。

我们调用了我们之前导入的 `fmt` 包中 `Println()` 函数，将字符串作为参数传递。

根据[文档](https://pkg.go.dev/fmt#Printf) "_formats according to a format specifier and writes to standard output_”。

看看这些文档，因为它们很棒。他们甚至有你可以运行的示例：

![Screen Shot 2022-07-28 at 14.18.46.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_14.18.46.png)

Go 基础的函数模板

我们可以用 “dot” 语法 `fmt.Println()` 指定该函数由该包提供。

在执行代码 `main` 函数之后，它没有做其他的事就结束了执行。

## <div id="how-to-compile-and-run-a-go-program">如何编译和运行 Go 程序</div>

现在在 `hello` 文件夹下打开命令行，用以下命令运行程序：

```bash
go run hello.go
```

![Screen Shot 2022-07-28 at 12.18.23.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_12.18.23.png)

Go 输出 Hello world 

我们的程序运行成功，它会在命令行输出 “Hello,World!” 。

`go run` 会先编译并运行程序。

你可以用 `go build` 创建一个**可执行文件**：

```bash
go build hello.go
```

这里会创建一个名为 `hello` 的可执行文件，你可以执行：

![Screen Shot 2022-07-28 at 12.19.50.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_12.19.50.png)

执行 Go 的可执行文件

在引言部分我提到过 Go 是可移植的。

现在你可以分发这个二进制文件，每个人都可以按原样运行程序，因为二进制文件已经打包好了，可以执行了。

该程序将在我们构建它的相同架构上运行。

我们可以使用 `GOOS` 和 `GOARCH` 环境变量为不同的架构创建不同的二进制文件，如下所示：

```go
GOOS=windows GOARCH=amd64 go build hello.go
```

这将会创建 `hello.exe` 文件，可以在 64 位的 Windows 机器上运行：

![Screen Shot 2022-07-28 at 15.36.55.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_15.36.55.png)

Hello.exe 执行

设置 64 位的 Mac 的环境变量为 `GOOS=darwin GOARCH=amd64` ，Linux 的环境变量是`GOOS=linux GOARCH=amd64`。

这个 Go 最好的特性之一。

## <div id="the-go-workspace">Go 的工作空间</div>

关于 Go 中的一个特殊的点，我们称为 **工作区**。

这个工作区是 Go 中的 “家目录”。

Go 默认的路径在 `$HOME/go` 下，所以你可以在你的家目录中看到 `go` 文件夹。

它会在你安装包(待会我们看一下)进行创建。

例如我在 VS Code 中加载 `hello.go` 文件那一刻 ， 它提示我安装`[ gopls ](https://pkg.go.dev/golang.org/x/tools/gopls)` 命令， 开发调试工具(`dlv`)， 和[`静态检查`行](https://staticcheck.io/)。

它们在 `$HOME/go` 下自动安装：

![Screen Shot 2022-07-28 at 12.27.27.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_12.27.27.png)

`$HOME/go`

当你使用 `go install` 安装库时，它们会保存在这里。

这就是我们所说的 **GOPATH**。

你可以修改环境变量 `GOPATH` 以更改 Go 安装包的位置。

这在同时处理不同的项目并且希望隔离所使用的库时非常有用。

## <div id="diving-into-the-go-language">深入 Go 语言</div>

现在我们已经理解了第一部分，我们运行了第一个 Hello， World! 程序， 我们可以深入 Go 语言了。

该语言没有语义上有意义的空格。它像 C， C++， Rust， Java， JavaScript， 但是不像 Python，其中空格是有意义的，用于创建块，而不是花括号。

分号是可选的，就像在 JavaScript 中一样（不同于 C、C++、Rust 或 Java）。

Go 非常重视缩进和视觉顺序。

在我们安装 Go 程序的时候自带了 `gofmt` 命令，我们可以用它对 Go 程序进行格式化。 VSCode 中在底层使用它对 Go 源码文件进行格式化。 

这是非常有趣和创新的，因为格式和问题，如制表符与空格或“我应该把花括号放在循环定义的同一行还是下一行”，都是浪费时间。

语言创造者定义了规则，每个人都使用这些规则。

这对于拥有大型团队的项目非常有用。

我推荐你在 VS Code 中设置 “**保存时格式化**” 和 “**粘贴时格式化**”：

![Screen Shot 2022-07-28 at 14.39.42.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_14.39.42.png)

在 VS Code 中设置 Go 的粘贴时格式化和保存时格式化

你可以使用常用的 C / C++ / JavaScript / Java 语法在 Go 中写注释：

```go
// this is a line comment

/*
multi
line
comment
*/
```

## <div id="variables-in-go">Go 中的变量</div>

在编程语言中，首先要做的事情之一是定义变量。

在 Go 中我们用 `var` 关键字声明变量：

```go
var age = 20
```

您可以在包级别定义变量：

```go
package main

import "fmt"

var age = 20

func main() {
	fmt.Println("Hello， World!")
}
```

或是在函数中：

```go
package main

import "fmt"

func main() {
	var age = 20

	fmt.Println("Hello， World!")
}
```

在包级别定义，变量在组成包的所有文件中都可见。一个包可以由多个文件组成，您只需要创建另一个文件并在顶部使用相同的包名。

在函数级别定义，变量仅在该函数中可见。它在调用函数时初始化，在函数结束执行时销毁。

我们使用以下示例：

```go
var age = 20
```

我们设置变量 `age` 的值为 `20`。

这使得 Go 确定变量 `age` 的**类型**是 `int`。

稍后我们将看到更多关于类型的信息，但您应该知道有很多不同的类型，从 `int`， `string`， 和 `bool` 开始。

我们可以不给变量设置值，但是必须设置它们的类型如下：

```go
var age int
var name string
var done bool
```

当你知道值时，你可以直接用短的变量声明如 `:=` 运算符：

```go
age := 10
name := "Roger"
```

变量名你可以使用小写字母，数字和 `_` 或者可以使用类似于 `_` 的其他字符。

名字是 **区分大小写** 的。

如果名字太长，通常可使用驼峰命名法，例如我们想表现车的名字就用 `carName`。

你可以使用赋值运算符 `=` 给一个变量赋予新的值。

```go
var age int
age = 10
age = 11
```

如果你有一个变量在编程过程中永远都不会变，你可以使用 `const` 关键字来声明这个变量：

```go
const age = 10
```

你可以一行代码中声明多个变量：

```go
var age， name
```

将它们全部都初始化：

```go
var age， name = 10， "Roger"

//or

age， name := 10， "Roger"
```

在程序中使用未声明的变量，程序会报错，而且无法通过编译。

在 VS Code 中你可以看到警告如下：

![Screen Shot 2022-07-28 at 15.45.31.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_15.45.31.png)

使用未声明变量的警告

以下是编译的报错：

![Screen Shot 2022-07-28 at 15.45.44.png](https://www.freecodecamp.org/news/content/images/2022/10/Screen_Shot_2022-07-28_at_15.45.44.png)

使用未声明变量的编译期报错

如果你声明了一个变量且没有给这个变量一个初始值，它会自动初始化一个对应类型的初始值，例如 integer 类型的值为 `0` 而字符串的值是一个空的字符串。

## <div id="basic-types-in-go">Go 的基础类型</div>

Go 是一门强类型语言。

我们可以看到你怎么定义一个变量，指定它的类型：

```go
var age int
```

或者你可以直接给变量赋予初始值，让 Go 来推断它的类型：

```go
var age = 10
```

这些是 Go 中的基础类型：

-   整型 (`int`， `int8`， `int16`， `int32`， `rune`， `int64`， `uint`， `uintptr`， `uint8`， `uint16`， `uint64`)
-   浮点型 (`float32`， `float64`)， 用于表示带小数点的数
-   复数类型 (`complex64`， `complex128`)，常用于科学计算中
-   字符型 (`byte`)， 表示一个 ASCII 字符
-   字符串 (`string`)， 一个`byte`的集合
-   布尔型 (`bool`)表示 true 或 false

我们有很多不同类型的整数类型，在大多数情况下你只会用到 `int`，并且您可能会选择一个更专业的方法进行优化(而不是在学习时需要考虑的事情)

在你使用 64 位系统的时候 `int` 类型默认为 64 位， 使用 32 位系统的时候 `int` 类型默认为 32 位，其他的与此类似。

`uint` 类型是无符号的 `int` 类型，如果你知道这个数字不是负数，你可以用这个类型存储比现在大两倍的数字。

所有的基础类型都是 **值类型**， 这意味着当它们作为参数传递或从函数返回时，它们通过 **值传递** 给函数。

## <div id="strings-in-go">Go 中的字符串</div>

Go 中的字符串是 `byte` 序列。

像我们所看到的一样，你可以定义字符串如下：

```go
var name = "test"
```

其中很重要一点是不像其他语言，字符串定义只能使用双引号表示，而不是单引号。

获得字符串的长度，可以使用内置函数 `len()`：

```go
len(name) //4
```

你可以用方括号访问单独字符，使用索引来取得你想要的字符：

```go
name[0] //"t" (indexes start at 0)
name[1] //"e"
```

你可以使用切片获取到字符串：

```go
name[0:2] //"te"
name[:2]  //"te"
name[2:]  //"st"
```

你可以创建一个字符串的副本：

```go
var newstring = name[:]
```

你可以将字符串赋值给一个新的变量，如下：

```go
var first = "test"
var second = first
```

字符串是 **不可变** 的， 所以你无法修改字符串的值。

如果你给 `first` 赋予一个新值，`second` 的值依然是 `"test"`：

```go
var first = "test"
var second = first

first = "another test"

first  //"another test"
second //"test"
```

字符串是引用类型，意味着如果你将一个字符串传递给一个方法，字符串 **引用** 会被复制，而不是它的值，但是字符串是不可变的，所在在使用过程中它和 `int` 类型并没有很大的区别，例如。

你可以通过 `+` 运算符连接两个字符串：

```go
var first = "first"
var second = "second"

var word = first + " " + second  //"first second"
```

Go 提供了 `strings` 库来进行字符串的操作。

我们已经知道怎么在 “Hello， World!” 的案例中导入一个包。

这里你可以导入 `strings`：

```go
package main

import (
    "strings"
)
```

你可以使用它了。

在例子中我们使用 `HasPrefix()` 函数来判断一个字符串的开头是否是以另一个子串开头的：

```go
package main

import (
    "strings"
)

func main() {
    strings.HasPrefix("test"， "te") // true
}
```

你可以在这找到所有的函数列表： [https://pkg.go.dev/strings](https://pkg.go.dev/strings)。

以下是你经常会用到的函数列表：

-   `strings.ToUpper()` 返回一个新的字符串， 大写
-   `strings.ToLower()` 返回一个新的字符串， 小写
-   `strings.HasSuffix()` 检查是否以某子串结尾
-   `strings.HasPrefix()` 检查是否以某子串开头
-   `strings.Contains()` 检查是否包含某字串
-   `strings.Count()` 计算一个某子串在当前字符串出现的次数
-   `strings.Join()` 创建一个新的字符串并连接多个字符串
-   `strings.Split()` 创建一个数组来保存通过特殊字符串对字符串进行分割的结果，例如通常使用空格
-   `strings.ReplaceAll()` 使用替换，可以使用一个新的字符串替换掉原字符中的字符串

## <div id="arrays-in-go">Go 中的数组</div>

数组是单个类型的序列。

我们可以这种方式定义数组：

```go
var myArray [3]string //an array of 3 strings
```

或者你也可以给数组赋予初始值：

```go
var myArray = [3]string{"First"， "Second"， "Third"}
```

在这个例子中，你可以让 Go 来帮你进行数组长度的推断：

```go
var myArray = [...]string{"First"， "Second"， "Third"}
```

数组只能包含同一种类型的数据。

数组不能动态扩容-在 Go 中你必须声明数组的长度。这和类型一样是数组的一部分。当然，你不能使用一个没有声明长度的数组。

由于这个限制，数组在 Go 中很少使用，我们经常用到 **切片** (稍后我们会讲到更多)。切片的底层是数组。所以我们需要知道它的工作原理。

你可以通过中括号获得数组中的每一个值正如我们之前获取字符串中单个字符一样：

```go
myArray[0] //indexes start at 0
myArray[1]
```

你可以给数组中的成员设置新的值：

```go
myArray[2] = "Another"
```

你可以通过 `len()` 函数来获取数组的长度：

```go
len(myArray)
```

数组是 **值类型**。 这意味着复制一个数组：

```go
anotherArray := myArray
```

传递一个数组给一个函数，或者一个函数返回数组，创建的都是原数组的副本。

这也是和其他编程语言的不同之处。

这里创建一个简单的示例，我们将一个新的值赋值给副本的一个元素，这个过程中不会修改原数组的元素：

```go
var myArray = [3]string{"First"， "Second"， "Third"}
myArrayCopy := myArray
myArray[2] = "Another"

myArray[2]     //"Another"
myArrayCopy[2] //"Third"
```

记住你只能在数组中加入同一类型的数据，所以在例子中设置 `myArray[2] = 2` 会报错。

底层的元素存储在连续的内存当中。

## <div id="slices-in-go">Go 中的切片</div>

切片是一种很像数组的数据结构，但它的大小是可以改变的。

底层，切片使用了数组且它是建立在数组之上的抽象概念使得本身变得更加灵活和方便使用(可以把数组想象为底层结构)

你可以把切片作为高级语言中使用数组的一种使用方式。

你可以类似于数组定义切片，省略长度：

```go
var mySlice []string //a slice of strings
```

你可以初始化切片的值：

```go
var mySlice = []string{"First"， "Second"， "Third"}

//or

mySlice := []string{"First"， "Second"， "Third"}
```

你可以用 `make()` 函数创建一个有明确长度的空切片：

```go
mySlice := make([]string， 3) //a slice of 3 empty strings
```

你可以用已经存在的切片创建一个新的切片，添加一个或多个元素进去：

```go
mySlice := []string{"First"， "Second"， "Third"}

newSlice := append(mySlice， "Fourth"， "Fifth")
```

注意我们需要给 `append()` 的结果赋给一个新的切片，否则我们将得到一个编译器错误。原来的切片没有改变，我们将得到一个全新的切片。

你也可以使用 `copy()` 函数来创建一个重复的切片，这样它就不会共享另一个切片的内存，而是独立的：

```go
mySlice := []string{"First"， "Second"， "Third"}

newSlice := make([]string， 3)

copy(newSlice， mySlice)
```

如果你复制的切片没有足够的空间(比原来的短)，则只复制第一个元素(只到有空间为止)。

你可以从数组中初始化一个切片：

```go
myArray := [3]string{"First"， "Second"， "Third"}

mySlice = myArray[:]
```

多个切片可以使用与底层数组相同的数组：

```go
myArray := [3]string{"First"， "Second"， "Third"}

mySlice := myArray[:]
mySlice2 := myArray[:]

mySlice[0] = "test"

fmt.Println(mySlice2[0]) //"test"
```

这两个切片现在共享同一块内存。修改一个切片底层数组也会跟着改变，并导致从该数组生成的另一个切片也会被修改。

与数组一样，每一个切片中的元素同样存储在内存的连续内存之中。

如果你知道你必须用到切片，你可以在初始化的时候设置所需的容量。这种方式，在你需要更多空间的时候，这些空间已经准备好了(替代了选择和移动切片到从老的内存空间到新的内存的方式，并减少了垃圾回收)。

我们可以通过 `make()` 函数的第三个参数来指定 **容量**：

```go
newSlice := make([]string， 0， 10)
//an empty slice with capacity 10
```

例如字符串，你可以以下语法获得切片中的一部分：

```go
mySlice := []string{"First"， "Second"， "Third"}

newSlice := mySlice[:2] //get the first 2 items
newSlice2 := mySlice[2:] //ignore the first 2 items
newSlice3 := mySlice[1:3] //new slice with items in position 1-2
```

## <div id="maps-in-go">Go 中的 map</div>

map 是 Go 中一种常见的数据类型。

在其他语言被称为_字典_ 或 _哈系表_ 或 _关联数组_。

下面是创建一个 map 的方式：

```go
agesMap := make(map[string]int)
```

你不需要对 map 设置容纳多少项。

你可以通过这种方式添加新的元素到 map 中：

```go
agesMap["flavio"] = 39
```

你可以用以下语法初始化 map 并赋值：

```go
agesMap := map[string]int{"flavio": 39}
```

你可以通过键来获取对应的值：

```go
age := agesMap["flavio"]
```

你可以通过 `delete()` 函数来删除 map 中的元素：

```go
delete(agesMap， "flavio")
```

## <div id="loops-in-go">Go 中的循环</div>

Go 中最好的特性是它只提供最少的选择。

我们只有一个循环关键字： `for`。

你可以像这样使用它：

```go
for i := 0; i < 10; i++ {
	fmt.Println(i)
}
```

我们首先初始化一个循环的变量， 我们设置一个 _条件_ 用于检查我们的循环是否应该结束。最后我们设置 _post 语句_， 在每一次循环后执行， 这里例子中是增长 `i`。

`i++` 增长 `i` 变量.

`<` _运算符_ 用于比较 `i` 和 `10` 的值,会返回 `true` 或 `false`， 决定循环体是否执行。

我们不需要用圆括号来包围代码块，与 C 和 JavaScript 不太一样。

其他语言有各种不同的循环结构，当时 Go 中只有这一个，我们可以有像 `while` 一样的循环，如果你熟悉一门有它的语言，像这样：

```go
i := 0

for i < 10 {
	fmt.Println(i)
  i++
}
```

我们完全可以忽略条件，在我们想要中止可以使用 `break`：

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

我在循环体中使用了一个 `if` 声明，但是在我们没有看到 _条件_ 语句! 我们下一步看。

我现在想要介绍一种东西 `range`。

我们可以使用以下语法通过 `for` 来迭代数组：

```go
numbers := []int{1， 2， 3}

for i， num := range numbers {
	fmt.Printf("%d: %d\n"， i， num)
}

//0: 1
//1: 2
//2: 3
```

注意：我使用 `fmt.Printf()` 它允许我们使用 _占位符_ `%d` 意思是 _整数_ 而 `\n` 意思是加入一个换行符。

在你不需要索引时，一般可以使用以下语法：

```go
for _， num := range numbers {
  //...
}
```

我们可以使用 `_` 语法，它表示 “忽略 这个”，以避免 Go 编译器产生一个错误：“你没有使用 `i` 变量！”。

## <div id="conditionals-in-go">Go 中的条件语句</div>

我们使用 `if` 声明一个条件从而执行不同的代码：

```go
if age < 18 {
	//underage
}
```

`else` 部分是可选的：

```go
if age < 18 {
	//underage
} else {
  //adult
}
```

或者可以使用多个 `if`：

```go
if age < 12 {
	//child
} else if age < 18  {
  //teen
} else {
	//adult
}
```

如果你在 `if` 中定义了任何的变量，那么只能在 `if` 中使用 ( `else` 中也一样且你需要在 `{}` 中写新的代码块)。

如果你有很多不同的 if 声明来检查同一个条件，使用 `switch` 是更好的选择：

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

与 C， JavaScript 和其他语言相比，你不需要在每一个 `case` 中写 `break`。

## <div id="operators-in-go">Go 中的运算符</div>

到目前为止，我们已经在代码示例中使用了一些运算符， 如 `=`， `:=` and `<`。

让我们了解更多。

我们有赋值运算符 `=` 和 `:=` 我们用来定义和初始化变量：

```go
var a = 1

b := 1
```

我们有比较运算符 `==` 和 `!=` 用来比较两个参数并会返回一个布尔值：

```go
var num = 1
num == 1 //true
num != 1 //false
```

还有 `<`， `<=`， `>`， `>=`：

```go
var num = 1
num > 1 //false
num >= 1 //true
num < 1 //false
num <= 1 //true
```

我们有双元(要求有两个参数) 算术运算符， 像 `+`， `-`， `*`， `/`， `%`.

```go
1 + 1 //2
1 - 1 //0
1 * 2 //2
2 / 2 //1
2 % 2 //0
```

`+` 可以用来连接字符串：

```go
"a" + "b" //"ab"
```

我们有单元运算符 `++` 和 `--` 用来对一个数字进行自增或自减：

```go
var num = 1
num++ // num == 2
num-- // num == 1
```

注意:不像 C 和 JavaScript 像这样 `++num` 让一个数字预先操作。当然，运算符不会返回任何值。

我们有逻辑运算符来帮我们进行基本的 `true` 和 `false` 的判断，使用： `&&`， `||` 和 `!`：

```go
true && true  //true
true && false //false
true || false //true
false || false //false
!true  //false
!false //true
```

这三个是最主要.

## <div id="structs-in-go">Go 中的结构体</div>

**结构体** 是一种 _类型_，它包括一个或多个变量。它像是一个变量的集合。 我们将它们称为 _字段_。 它们可以有不同的类型。

这是一个结构体定义的示例：

```go
type Person struct {
	Name string
	Age int
}
```

注意这里我们使用大写的名字作为字段名，不然它们在包内将会是_私有_的。 且当你想让结构体作为参数传递给另一个库的函数时， 像我们使用 JSON 及数据库时，这些字段都将无法访问。

一旦我们定义了一个结构体，我们就可以用这个类型初始化一个变量：

```go
flavio := Person{"Flavio"， 39}
```

且我们可以用以下语法修改字段的值：

```go
flavio.Age //39
flavio.Name //"Flavio"
```

你也可以使用这种方式将一个结构体初始化赋给一个变量：

```go
flavio := Person{Age: 39， Name: "Flavio"}
```

你也可以只初始化一个字段：

```go
flavio := Person{Age: 39}
```

或者不初始化任何值:

```go
flavio := Person{}

//or

var flavio Person
```

或者在之后设值：

```go
flavio.Name = "Flavio"
flavio.Age = 39
```

结构体很常用，因为您可以对不相关的数据进行分组，并将其传递给函数或从函数传递给函数，保存在切片中，等等。

一旦定义，结构体就是像 `int` 或 `string` 这样的类型，这意味着你也可以在其他结构中使用它：

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

## <div id="functions-in-go">Go 中的函数</div>

一个函数是一块代码，它被赋予了一个名字且包含了一些指令。

在 “Hello,World!” 示例中我们创建了一个 `main` 函数， 那是程序的入口。

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello,World!")
}
```

这是一个特殊的函数。

通常我们使用自定义的名字来定义函数：

```go
func doSomething() {

}
```

你可以像这样调用它：

```go
doSomething()
```

一个函数可以设置入参，我们需要给参数设置类型，如下：

```go
func doSomething(a int， b int) {

}

doSomething(1， 2)
```

`a` 和 `b` 是函数内部参数的名字。

一个函数可以返回一个值，像这样：

```go
func sumTwoNumbers(a int， b int) int {
	return a + b
}

result := sumTwoNumbers(1， 2)
```

注意这里我们指定的返回的值的 _类型_。

一个函数可以返回多个或一个值：

```go
func performOperations(a int， b int) (int， int) {
	return a + b， a - b
}

sum， diff := performOperations(1， 2)
```

有趣的是很多语言只能返回一个值。

函数内部定义的任何变量都是函数的本地变量。

一个函数也可以不限制参数的个数，且这样的函数我们称它为 _可变函数_：

```go
func sumNumbers(numbers ...int) int {
	sum := 0
	for _， number := range numbers {
		sum += number
	}
	return sum
}

total := sumNumbers(1， 2， 3， 4)
```

## <div id="pointers-in-go">Go 中的指针</div>

Go 支持使用指针。

假设你有一个变量：

```go
age := 20
```

使用 `&age` 你获得这个变量的指针，它是内存地址。

当你拥有一个变量的指针时，你可以使用 `*` 运算符获取它的值：

```go
age := 20
ageptr = &age
agevalue = *ageptr
```

通常当你想要传递一个参数给你调用的函数时。 Go 默认会在函数内部复制这个变量的值，所以这不会改变 `age` 的值：

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

你可以像这样使用指针：

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

## <div id="methods-in-go">Go 中的方法</div>

你可以给一个结构赋值一个函数，在这种情况下我们称它为 _方法_。

示例：

```go
type Person struct {
	Name string
	Age int
}

func (p Person) Speak() {
	fmt.Println("Hello from " + p.Name)
}

func main() {
	flavio := Person{Age: 39， Name: "Flavio"}
	flavio.Speak()
}
```

你可以定义一个方法为指针接收或值接收。

上述例子中我们展示的是值接收，这个接收器会复制结构体的结构。

这里将会有一个指针接收，接收结构实例的指针：

```go
func (p *Person) Speak() {
	fmt.Println("Hello from " + p.Name)
}
```

## <div id="interfaces-in-go">Go 中的接口</div>

接口是一个 _类型_ 可以定义一个或多个 _方法声明_。

方法没有被实现，只有它们的签名： 名字，参数类型和返回值类型。

像这样：

```go
type Speaker interface {
	Speak()
}
```

现在你有一个函数，可以接纳任何类型来实现接口定义所有方法：

```go
func SaySomething(s Speaker) {
	s.Speak()
}
```

我们可以让任何一个结构体来实现这些方法：

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
	flavio := Person{Age: 39， Name: "Flavio"}
	SaySomething(flavio)
}
```

## <div id="where-to-go-from-here">以后的路</div>

手册只是介绍了 Go 编程语言。

基于这里的基础，现在可以学更多东西。

垃圾回收，错误处理，并发和网络，文件系统接口，等等。

海阔任鱼跃，天高任鸟飞。

我的建议是选择一个你想要创建的程序，然后开始学习你需要的东西。

它是有趣且值得做的。

注意：[你可以点击链接获得 GO 初学者手册的 pdf 版本和 ePub 版本](https://thevalleyofcode.com/download/go/)。
