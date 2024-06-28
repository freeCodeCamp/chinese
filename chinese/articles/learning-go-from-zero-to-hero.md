> - 原文地址：[Learning Go — from zero to hero](https://www.freecodecamp.org/news/learning-go-from-zero-to-hero-d2a3223b3d86/)
> - 原文作者：[Milap Neupane](https://www.freecodecamp.org/news/author/milapneupane/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Learning Go — from zero to hero](https://cdn-media-1.freecodecamp.org/images/1*30aoNxlSnaYrLhBT0O1lzw.png)

让我们先对 Go（或称 Golang ）做一个小小的介绍。Go 是由谷歌工程师 Robert Griesemer、Rob Pike 和 Ken Thompson 设计的。它是一种静态类型的、编译的语言。第一个版本于 2012 年 3 月作为开源版本发布。

> "Go 是一种开源的编程语言，它使人们能够轻松地构建简单、可靠和高效的软件"。- GoLang

在许多编程语言中，有许多方法来解决一个特定的问题。程序员要花很多时间去思考解决它的最佳方法。

Go 却相信用较少的功能--只有一种正确的方式来解决问题。

这为开发人员节省了时间，并使大型代码库易于维护。 Go 中没有像 `maps` 和 `filters` 这样的 "表达性 "功能。

> "当你有增加表现力的功能时，通常会增加系统开销。"--Rob Pike

![1*AUiSG5Gqz8MzaGCvGpckGA](https://cdn-media-1.freecodecamp.org/images/1*AUiSG5Gqz8MzaGCvGpckGA.png)

最近发表的新的 golang 标志: [https://blog.golang.org/go-brand](https://blog.golang.org/go-brand)

### 入门

Go 是由 packages(包) 组成的。package main 告诉 Go 编译器，该程序被编译为可执行文件，而不是共享库。它是一个应用程序的入口点。package main 的定义如下:

```go
package main
```

让我们继续前进，在 Go workspace 创建一个 `main.go` 文件，编写一个简单的 hello world 例子。

#### **Workspace**

Go 中的 workspace 是由环境变量 `GOPATH` 定义的。

你写的任何代码都要写在 workspace 里面。Go 将搜索 `GOPATH` 目录内的任何软件包，或者 `GOROOT` 目录，该目录在安装 Go 时默认设置。`GOROOT` 是安装 Go 的路径。

设置 `GOPATH` 到你想要的目录。现在，让我们把它添加到 `~/workspace` 文件夹内。

```shell
# export env
export GOPATH=~/workspace
# go inside the workspace directory
cd ~/workspace
```

在我们刚刚创建的 workspace 文件夹中创建 `main.go` 文件，其中包含以下代码。

#### Hello World

```go
package main

import (
 "fmt"
)

func main(){
  fmt.Println("Hello World!")
}
```

在上面的例子中，`fmt`是 Go 中的一个内置包，它实现了用于格式化 I/O 输出的函数。

我们通过使用 `import` 关键字在 Go 中导入一个包。`func main` 是代码被执行的主入口点。`Println` 是包 `fmt` 中的一个函数，它为我们打印出 "hello world"。

让我们通过运行这个文件来看看。我们有两种方法可以运行 Go 命令。正如我们所知，Go 是一种编译语言，所以我们首先需要在执行之前编译它。

```shell
> go build main.go
```

这将创建一个二进制可执行文件`main`，现在我们可以运行:

```shell
> ./main 
# Hello World!
```

还有一种更简单的方法来运行程序。`go run` 命令会编译源代码，并直接执行源码中的 main() 函数，不会在当前目录留下可执行文件。你可以简单地运行以下命令来执行该程序。

```shell
go run main.go
# Hello World!
```

**_注意_** :  _要尝试本博客中提到的代码，你可以使用 [https://play.golang.org](https://play.golang.org/)_

### Variables(变量)

Go 中的变量是明确声明的。Go 是一种静态类型的语言。这意味着在声明变量的时候会检查变量的类型。一个变量:

```go
var a int
```

在这种情况下，值将被设置为 0。 使用下面的语法来声明和初始化一个具有不同值的变量:

```go
var a = 1
```

这里的变量被自动分配为`int`。 我们可以对变量的声明使用一个简短定义，即:

```go
message := "hello world"
```

我们也可以在同一行中声明多个变量:

```go
var b, c int = 2, 3
```

### Data types（数据类型）

像其他编程语言一样，Go 支持各种不同的数据结构。让我们来探索其中:

#### **Number, String, and Boolean (整型 字符串和布尔值)**

支持的整型包括 int, int8, int16, int32, int64,  
uint, uint8, uint16, uint32, uint64, uintptr(无符号整型，长度跟平台相关，它的长度可以用来保存一个指针地址) 等

字符串类型存储一个字节序列。它用关键字 `string` 来表示和声明。

布尔值使用关键字 `bool` 来存储。

Go 也支持复数类型，可以用 `complex64` 和 `complex128` 来声明。

```go
var a bool = true
var b int = 1
var c string = 'hello world'
var d float32 = 1.222
var x complex128 = cmplx.Sqrt(-5 + 12i)
```

#### **Arrays, Slices, and Maps( 数组、切片和映射)**

数组是由相同数据类型的元素组成的一个序列。数组在声明时有一个固定的长度，所以它不能被扩大到超过这个长度。声明一个数组:

```go
var a [5]int
```

数组也可以是多维的。我们可以简单地用以下方式创建它们:

```go
var multiD [2][3]int
```

在运行时更改数组是受限的。数组也没有提供获取子数组的能力。 为此，Go 有一种数据类型，叫做切片（slices）。

切片存储了一连串的元素，并且可以在任何时候扩展。切片声明与数组声明类似--但没有定义容量:

```go
var b []int
```

这将创建一个容量为 0、长度为 0 的切片。

也可以用容量和长度来定义切片。我们可以用下面的语法来定义它:

```go
numbers := make([]int,5,10)
```

这里，切片的初始长度为 5，容量为 10。

分片是对数组的一种抽象。切片使用一个数组作为底层结构。一个片断包含三个部分：容量、长度和一个指向底层数组的指针，如下图所示:

![1*P0lNCO0sQwIYHLEX_mfSOQ](https://cdn-media-1.freecodecamp.org/images/1*P0lNCO0sQwIYHLEX_mfSOQ.png)

图片源自: [https://blog.golang.org/go-slices-usage-and-internals](https://blog.golang.org/go-slices-usage-and-internals)

一个切片的容量可以通过使用 append 或 copy 函数来增加。append 函数将值添加到数组的末端，如果需要的话也可以增加容量。

```go
numbers = append(numbers, 1, 2, 3, 4)
```

另一种增加切片容量的方法是使用 copy 函数。简单地创建另一个容量更大的片断，并将原来的切片复制到新创建的切片上:

```go
// create a new slice
number2 := make([]int, 15)
// copy the original slice to new slice
copy(number2, number)
```

我们可以创建一个切片的子切片。这可以通过以下命令简单地完成:

```go
// initialize a slice with 4 len and values
number2 = []int{1,2,3,4}
fmt.Println(numbers) // -> [1 2 3 4]
// create sub slices
slice1 := number2[2:]
fmt.Println(slice1) // -> [3 4]
slice2 := number2[:3]
fmt.Println(slice2) // -> [1 2 3]
slice3 := number2[1:4]
fmt.Println(slice3) // -> [2 3 4]
```

Maps 是 Go 中的一种数据类型，它将键映射到值。我们可以使用以下命令来定义一个 map:

```go
var m map[string]int
```

`m` 是新的 map 变量, 它的键是 `string` 类型， 值是 `integers` 类型。我们很容易在 map 上添加键值对:

```go
// adding key/value
m['clearity'] = 2
m['simplicity'] = 3
// printing the values
fmt.Println(m['clearity']) // -> 2
fmt.Println(m['simplicity']) // -> 3
```

### **Typecasting （类型转换）**

一种类型的数据类型可以通过类型转换转换为另一种类型。让我们看看一个简单的类型转换:

```go
a := 1.1
b := int(a)
fmt.Println(b)
//-> 1
```

不是所有类型的数据类型都可以转换为另一种类型。请确保数据类型与转换的内容相匹配。

### Conditional Statements （条件语句）

#### if else

对于条件性语句，我们可以使用 if-else 语句，如下例所示。请确保大括号与条件语句在同一行。

```go
if num := 9; num < 0 {
 fmt.Println(num, "is negative")
} else if num < 10 {
 fmt.Println(num, "has 1 digit")
} else {
 fmt.Println(num, "has multiple digits")
}
```

#### switch case

Switch cases 有助于组织多个条件语句。下面的例子显示了一个简单的 siwtch 语句:

```go
i := 2
switch i {
case 1:
 fmt.Println("one")
case 2:
 fmt.Println("two")
default:
 fmt.Println("none")
}
```

### Looping （循环）

Go 有一个循环的关键词 `for`。for 循环命令用于实现不同种类的循环:

```go
i := 0
sum := 0
for i < 10 {
 sum += 1
  i++
}
fmt.Println(sum)
```

上面的例子类似于 C 语言中的 while 循环。

Go 中的 for 语句也可以用于普通的 for 循环:

```go
sum := 0
for i := 0; i < 10; i++ {
  sum += i
}
fmt.Println(sum)
```

Go 中的死循环:

```go
for {
}
```

### Pointers （指针）

Go 提供了指针。指针是用来保存一个变量的地址的地方。指针是由 \* 定义的。指针是根据数据的类型来定义的。 例如:

```go
var ap *int
```

`ap` 是指向一个整数类型的指针。 `&` 操作符可以用来获取一个变量的地址。

```go
a := 12
ap = &a
```

指针所指向的值可以使用 `*` 操作符来访问:

```go
fmt.Println(*ap)
// => 12
```

在传递结构体作为参数时，或者在为定义的类型声明方法时，通常倾向于使用指针。

1. 传递值时，实际上是在复制值，这意味着更多的内存。
2. 通过指针，函数改变的值会反映在 方法/函数 调用者身上

例如:

```go
func increment(i *int) {
  *i++
}
func main() {
  i := 10
  increment(&i)
  fmt.Println(i)
}
//=> 11
```

注意：当你在尝试博客中的示例代码时，不要忘记包含 `package main`，并在需要时导入 `fmt` 或其他包，如上面第一个 main.go 例子中所示。

### Functions （函数）

在 main package 中定义的 main 函数是 go 程序执行的入口。更多的函数可以被定义和使用。让我们来看看一个简单的例子。:

```go
func add(a int, b int) int {
  c := a + b
  return c
}
func main() {
  fmt.Println(add(2, 1))
}
//=> 3
```

在上面的例子中我们可以看到，Go 函数是用 **func** 关键字来定义的，后面是函数名称。一个函数的 **参数** 需要根据其数据类型来定义，最后是返回的数据类型。

一个函数的返回值也可以在函数中预先定义:

```go
func add(a int, b int) (c int) {
  c = a + b
  return
}
func main() {
  fmt.Println(add(2, 1))
}
//=> 3
```

这里 c 被定义为返回变量。所以定义的变量 c 会自动返回，而不需要在最后的返回语句中定义。

你也可以从一个函数中返回多个返回值，用逗号来分隔返回值。

```go
func add(a int, b int) (int, string) {
  c := a + b
  return c, "successfully added"
}
func main() {
  sum, message := add(2, 1)
  fmt.Println(message)
  fmt.Println(sum)
}
```

### Method, Structs, and Interfaces （方法，结构体，接口）

Go 并不是一种完全面向对象的语言，但通过结构体（Struct）、接口（Interface）和方法（Method），它有很多面向对象的支持和感觉。

#### Struct （结构体）

结构体是一种类型化的、不同字段的集合。结构体用于将数据分组。例如，如果我们想对 Person 类型的数据进行分组，我们可以定义一个人的属性，其中可能包括姓名、年龄、性别。可以使用以下语法来定义一个结构体:

```go
type person struct {
  name string
  age int
  gender string
}
```

在定义了一个人的类型结构后，现在让我们来创建一个 person:

```go
//way 1: specifying attribute and value
p = person{name: "Bob", age: 42, gender: "Male"}
//way 2: specifying only value
person{"Bob", 42, "Male"}
```

我们可以很容易地用一个点(.)来访问这些数据。

```go
p.name
//=> Bob
p.age
//=> 42
p.gender
//=> Male
```

你也可以用结构的指针直接访问其属性:

```go
pp = &person{name: "Bob", age: 42, gender: "Male"}
pp.name
//=> Bob
```

#### Methods （方法）

方法(Method)是一种特殊的函数类型，它有一个 _receiver_ 。 _receiver_ 可以是一个值或一个指针。让我们创建一个名为 describe 的方法(Method)，它有一个我们在上面的例子中创建的接收器类型的 person:

```go
package main
import "fmt"

// struct defination
type person struct {
  name   string
  age    int
  gender string
}

// method defination
func (p *person) describe() {
  fmt.Printf("%v is %v years old.", p.name, p.age)
}
func (p *person) setAge(age int) {
  p.age = age
}

func (p person) setName(name string) {
  p.name = name
}

func main() {
  pp := &person{name: "Bob", age: 42, gender: "Male"}
  pp.describe()
  // => Bob is 42 years old
  pp.setAge(45)
  fmt.Println(pp.age)
  //=> 45
  pp.setName("Hari")
  fmt.Println(pp.name)
  //=> Bob
}
```

正如我们在上面的例子中看到的，现在可以使用点运算符来调用该方法，如 `pp.describe`。请注意，_receiver_ 是一个指针。使用指针，我们传递的是一个值的引用，所以如果我们在方法中做任何改变，都会反映在  _receiver_ pp 中。它也不会创建一个新的对象的副本，这就节省了内存。

请注意，在上面的例子中，年龄的值被改变了，而名字的值没有改变，因为 setName 方法是 _receiver_ 类型是值类型，而 setAge 是指针类型的。

#### Interfaces (接口)

Go 接口（interfaces）是一个方法（methods）的集合。接口有助于将一个类型的属性组合在一起。让我们以一个接口 animal 为例:

```go
type animal interface {
  description() string
}
```

animal 是一个接口（interface）类型。现在让我们创建两个不同类型的 animal，它们都实现了 animal 接口类型:

```go
package main

import (
  "fmt"
)

type animal interface {
  description() string
}

type cat struct {
  Type  string
  Sound string
}

type snake struct {
  Type      string
  Poisonous bool
}

func (s snake) description() string {
  return fmt.Sprintf("Poisonous: %v", s.Poisonous)
}

func (c cat) description() string {
  return fmt.Sprintf("Sound: %v", c.Sound)
}

func main() {
  var a animal
  a = snake{Poisonous: true}
  fmt.Println(a.description())
  a = cat{Sound: "Meow!!!"}
  fmt.Println(a.description())
}

//=> Poisonous: true
//=> Sound: Meow!!!
```

type cat struct {
在主函数中，我们创建一个动物类型的变量 `a`。我们给动物分配一个 snake 和一个 cat 的类型，并使用 Println 来打印 a.description。由于我们在两种类型（cat 和 snake）中都以不同的方式实现了 describe 方法，我们得到了打印的动物描述。

### Packages (包)

我们把 Go 的所有代码都写在一个包里。**main** package 是程序执行的入口点。Go 中有很多内置包。我们一直在使用的最著名的是**fmt**包。

> "Go 软件包是 Go 提供的大型编程的主要机制，它们使得将一个大型项目分割成小块成为可能。"
> — Robert Griesemer

#### Installing a package (安装一个包)

```shell
go get <package-url-github>
// example
go get github.com/satori/go.uuid
```

我们安装的软件包被保存在 GOPATH 环境变量设置的工作目录。你可以通过进入我们工作目录下的 pkg 文件夹 `cd $GOPATH/pkg` 来查看这些软件包。

#### Creating a custom package (创建自定义包)

让我们先创建一个文件夹 custom_package:

```shell
> mkdir custom_package
> cd custom_package
```

要创建一个自定义包，我们需要首先创建一个文件夹，并加上我们需要的包名。比方说，我们要建立一个 `person` 包。为此，让我们在 `custom_package` 文件夹中创建一个名为 `person` 的文件夹。:

```shell
> mkdir person
> cd person
```

现在让我们在这个文件夹中创建一个文件 person.go。

```go
package person
func Description(name string) string {
  return "The person name is: " + name
}
func secretName(name string) string {
  return "Do not share"
}
```

我们现在需要安装这个包，以便它可以被导入和使用。因此，让我们来安装它:

```shell
> go install
```

现在让我们回到 custom_package 文件夹，创建一个 main.go 文件

```go
package main
import(
  "custom_package/person"
  "fmt"
)
func main(){ 
  p := person.Description("Milap")
  fmt.Println(p)
}
// => The person name is: Milap
```

在这里，我们现在可以导入我们创建的包 `person` 并使用函数 Description。注意，我们在包中创建的函数 `secretName` 将不能被访问。在 Go 中，没有大写字母开头的方法名称将是私有的。

#### **Packages Documentation (包文档）**

Go 内置了对包的文档支持。运行以下命令来生成文档:

```shell
godoc person Description
```

这将为我们的包 person 里面的描述函数生成文档。要看到这些文档，请使用以下命令运行一个网络服务器:

```shell
godoc -http=":8080"
```

现在去 URL [http://localhost:8080/pkg/](http://localhost:6060/pkg/)，看看我们刚刚创建的包的文档。

#### Some built-in packages in Go (Go 内置包)

**fmt**

该包实现了格式化的 I/O 函数。我们已经用这个包实现了向 stdout 打印的功能。

**json**

Go 中另一个有用的包是 json 包。这有助于对 JSON 进行编码/解码。让我们举个例子，对一些 JSON 进行编码/解码:

编码

```go
package main

import (
  "fmt"
  "encoding/json"
)

func main(){
  mapA := map[string]int{"apple": 5, "lettuce": 7}
  mapB, _ := json.Marshal(mapA)
  fmt.Println(string(mapB))
}
```

解码

```go
package main

import (
  "fmt"
  "encoding/json"
)

type response struct {
  PageNumber int `json:"page"`
  Fruits []string `json:"fruits"`
}

func main(){
  str := `{"page": 1, "fruits": ["apple", "peach"]}`
  res := response{}
  json.Unmarshal([]byte(str), &res)
  fmt.Println(res.PageNumber)
}
//=> 1
```

当使用 unmarshal 解码 json 字节时，第一个参数是 json 字节，第二个参数是我们希望 json 被映射到的响应类型结构的地址。注意，`json: "page"`将页面键映射到结构中的 PageNumber 键。

### Error Handling (错误处理)

错误是指程序中不想要的和意外的结果。比方说，我们正在对一个外部服务进行 API 调用。这个 API 调用可能是成功的，也可能是失败的。当错误类型出现时，Go 程序中的错误可以被识别。让我们看看这个例子:

```go
resp, err := http.Get("http://example.com/")
```

在这里，API 调用可能通过也可能失败。我们可以检查错误是否为 `nil`或存在，并相应地处理响应:

```go
package main

import (
  "fmt"
  "net/http"
)

func main(){
  resp, err := http.Get("http://example.com/")
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(resp)
}
```

#### Returning custom error from a function (从函数返回自定义错误)

当我们在编写自己的函数时，有些情况下会出现错误。这些错误可以在错误对象的帮助下返回:

```go
func Increment(n int) (int, error) {
  if n < 0 {
    // return error object
    return nil, errors.New("math: cannot process negative number")
  }
  return (n + 1), nil
}
func main() {
  num := 5
 
  if inc, err := Increment(num); err != nil {
    fmt.Printf("Failed Number: %v, error message: %v", num, err)
  }else {
    fmt.Printf("Incremented Number: %v", inc)
  }
}
```

大多数 Go 中内置的包，或者我们使用的外部包，都有一个错误处理的机制。所以我们调用的任何函数都有可能出现错误。这些错误绝不应该被忽视，总是在我们调用这些函数的地方优雅地处理，正如我们在上面的例子中所做的那样。

#### Panic

Panic 是指在程序执行过程中突然遇到的未被处理的东西。在 Go 中，Panic 不是处理程序中异常的理想方式。建议使用一个错误对象来代替。当 Panic 发生时，程序的执行会被停止。Panic 发生后被执行的东西是 defer。

```go
//Go
package main

import "fmt"

func main() {
    f()
    fmt.Println("Returned normally from f.")
}

func f() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered in f", r)
        }
    }()
    fmt.Println("Calling g.")
    g(0)
    fmt.Println("Returned normally from g.")
}

func g(i int) {
    if i > 3 {
        fmt.Println("Panicking!")
        panic(fmt.Sprintf("%v", i))
    }
    defer fmt.Println("Defer in g", i)
    fmt.Println("Printing in g", i)
    g(i + 1)
}
```

#### Defer

Defer 是指总是在函数的末尾被执行的东西。

在上面的例子中，我们用 panic() 使程序的执行陷入 panic。正如你所注意到的，这里有一个 defer 语句，它将使程序在最后执行这一行。当我们需要在函数结束时执行一些东西时也可以使用 defer，例如关闭一个文件。

### Concurrency (并发)

Go 是在考虑到并发性的情况下建立的。Go 中的并发性可以通过 Go 协程实现，它是轻量级的线程。

**Go routine (Go 协程)**

Go 协程是可以与另一个函数并行或同时运行的函数。创建一个 Go 协程非常简单。只需在一个函数前面加上关键字 Go，我们就可以让它并行执行。Go 协程是非常轻量级的，所以我们可以创建成千上万的协程。让我们来看看一个简单的例子:

```go
package main
import (
  "fmt"
  "time"
)
func main() {
  go c()
  fmt.Println("I am main")
  time.Sleep(time.Second * 2)
}
func c() {
  time.Sleep(time.Second * 2)
  fmt.Println("I am concurrent")
}
//=> I am main
//=> I am concurrent
```

正如你在上面的例子中所看到的，函数 c 是一个 Go 例程，与 Go 主线程并行执行。有些时候，我们希望在多个线程之间共享资源。Go 倾向于不将一个线程的变量与另一个线程共享，因为这样会增加死锁和资源等待的可能性。还有一种方法可以在 Go 协程之间共享资源：通过 Go channels。

**Channels (通道)** 

我们可以使用通道在两个 Go 协程之间传递数据。在创建 channel 时，有必要指定该 channel 接收什么样的数据。让我们创建一个简单的字符串类型的 channel，如下所示:

```go
c := make(chan string)
```

通过这个 channel，我们可以发送字符串类型的数据。我们可以在这个 channel 中发送和接收数据:

```go
package main

import "fmt"

func main(){
  c := make(chan string)
  go func(){ c <- "hello" }()
  msg := <-c
  fmt.Println(msg)
}
//=>"hello"
```

接收方 channel 等待，直到发送方发送数据到 channel。

**One way channel (单向通道)**

有些情况下，我们希望 Go 程序通过 channel 接收数据，但不发送数据，反之亦然。为此，我们也可以创建一个**单向 channel**。让我们来看看一个简单的例子:

```go
package main

import (
 "fmt"
)

func main() {
 ch := make(chan string)
 
 go sc(ch)
 fmt.Println(<-ch)
}

func sc(ch chan<- string) {
 ch <- "hello"
}
```

在上面的例子中，`sc` 是一个只用于发送消息到通道但不能接受消息的 go 协程。

### Organizing multiple channels for a Go routine using select (使用 select 为 Go 例程组织多个通道)

一个函数可能有多个 channel 在等待。为此，我们可以使用一个选择（select）语句。让我们看一个例子，以了解更清楚的情况:

```go
package main

import (
 "fmt"
 "time"
)

func main() {
 c1 := make(chan string)
 c2 := make(chan string)
 go speed1(c1)
 go speed2(c2)
 fmt.Println("The first to arrive is:")
 select {
 case s1 := <-c1:
  fmt.Println(s1)
 case s2 := <-c2:
  fmt.Println(s2)
 }
}

func speed1(ch chan string) {
 time.Sleep(2 * time.Second)
 ch <- "speed 1"
}

func speed2(ch chan string) {
 time.Sleep(1 * time.Second)
 ch <- "speed 2"
}
```

在上面的例子中，main 正在等待两个 channel，c1 和 c2。通过 select case 语句，main 函数打印出，信息从它先收到的 channel 中发送出来。

**Buffered channel(带缓冲的通道)**

你可以在 go 中创建一个缓冲 channel。有了缓冲 channel，如果缓冲区满了，发送到该 channel 的消息就会被阻断。让我们看一下这个例子:

```go
package main

import "fmt"

func main(){
  ch := make(chan string, 2)
  ch <- "hello"
  ch <- "world"
  ch <- "!" # extra message in buffer
  fmt.Println(<-ch)
}

// => fatal error: all goroutines are asleep - deadlock!
```

正如我们在上面看到的，一个 channel 接受的信息不超过 2 条。

#### 为什么 Golang 会成功？

> 简洁性…… — Rob-pike

### Great

我们学习了 Go 的一些主要组成部分和特点。

1. 变量、数据类型
2. 数组 切片 和 maps
3. 函数
4. 循环和条件语句
5. 指针
6. 软件包
7. 方法、结构体和接口
8. 错误处理
9. 并发 - Go 协程和通道

恭喜你，你现在对 Go 有了相当的了解。

> 我最有成效的一天是减少了 1000 行代码。
> — Ken Thompson

不要停在这里。继续向前推进。思考一个小的应用并开始创建。

[LinkedIn](https://www.linkedin.com/in/milap-neupane-99a4b565/), [Github](http://github.com/milap-neupane), [Twitter](https://twitter.com/_milap)

也发布在 Milap Neupane 博客: [学习 Go，从 0 到 1](https://milapneupane.com.np/2019/07/06/learning-golang-from-zero-to-hero/)
