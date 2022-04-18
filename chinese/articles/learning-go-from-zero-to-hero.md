> - 原文地址：[Learning Go — from zero to hero](https://www.freecodecamp.org/news/learning-go-from-zero-to-hero-d2a3223b3d86/)
> - 原文作者：[Milap Neupane](https://www.freecodecamp.org/news/author/milapneupane/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Learning Go — from zero to hero](https://cdn-media-1.freecodecamp.org/images/1*30aoNxlSnaYrLhBT0O1lzw.png)

让我们先对 Go（或称 Golang ）做一个小小的介绍。Go 是由谷歌工程师 Robert Griesemer、Rob Pike 和 Ken Thompson 设计的。它是一种静态类型的、编译的语言。第一个版本于2012年3月作为开源版本发布。

> "Go是一种开源的编程语言，它使人们能够轻松地构建简单、可靠和高效的软件"。- GoLang

在许多编程语言中，有许多方法来解决一个特定的问题。程序员要花很多时间去思考解决它的最佳方法。

Go 却相信用较少的功能--只有一种正确的方式来解决问题。

这为开发人员节省了时间，并使大型代码库易于维护。 Go中没有像 `maps` 和 `filters` 这样的 "表达性 "功能。

> "当你有增加表现力的功能时，通常会增加系统开销。"--Rob Pike

![1*AUiSG5Gqz8MzaGCvGpckGA](https://cdn-media-1.freecodecamp.org/images/1*AUiSG5Gqz8MzaGCvGpckGA.png)

最近发表的新的 golang 标志: [https://blog.golang.org/go-brand](https://blog.golang.org/go-brand)

### Getting Started

Go是由 packages(包) 组成的。package main 告诉Go编译器，该程序被编译为可执行文件，而不是共享库。它是一个应用程序的入口点。package main 的定义如下:

```go
package main
```

让我们继续前进，在 Go workspace 创建一个 `main.go` 文件，编写一个简单的 hello world 例子。

#### **Workspace**

Go中的 workspace 是由环境变量 `GOPATH` 定义的。

你写的任何代码都要写在 workspace 里面。Go将搜索 `GOPATH` 目录内的任何软件包，或者 `GOROOT` 目录，该目录在安装 Go时 默认设置。`GOROOT` 是安装 Go 的路径。

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

在上面的例子中，`fmt`是Go中的一个内置包，它实现了用于格式化 I/O 输出的函数。

我们通过使用 `import` 关键字在Go中导入一个包。`func main` 是代码被执行的主入口点。`Println` 是包 `fmt` 中的一个函数，它为我们打印出 "hello world"。

让我们通过运行这个文件来看看。我们有两种方法可以运行Go命令。正如我们所知，Go是一种编译语言，所以我们首先需要在执行之前编译它。

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

### Variables

Go 中的变量是明确声明的。Go 是一种静态类型的语言。这意味着在声明变量的时候会检查变量的类型。一个变量可以被声明:

```go
var a int
```

在这种情况下，值将被设置为0。 使用下面的语法来声明和初始化一个具有不同值的变量:

```go
var a = 1
```

这里的变量被自动分配为int。 我们可以对变量的声明使用一个简短定义，即:

```go
message := "hello world"
```

我们也可以在同一行中声明多个变量:

```go
var b, c int = 2, 3
```

### Data types

像其他编程语言一样，Go支持各种不同的数据结构。让我们来探索其中:

#### **Number, String, and Boolean**

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

#### **Arrays, Slices, and Maps**

数组是由相同数据类型的元素组成的一个序列。数组在声明时有一个固定的长度，所以它不能被扩大到超过这个长度。一个数组声明:

```go
var a [5]int
```

数组也可以是多维的。我们可以简单地用以下方式创建它们:

```go
var multiD [2][3]int
```

数组会限制数组的值发生变化，当代码运行时。数组也没有提供获取子数组的能力。 为此，Go有一种数据类型，叫做切片（slices）。

切片存储了一连串的元素，并且可以在任何时候扩展。切片声明与数组声明类似--但没有定义容量:

```go
var b []int
```

这将创建一个容量为 0、长度为 0 的切片。

也可以用容量和长度来定义切片。我们可以用下面的语法来定义它:

```go
numbers := make([]int,5,10)
```

这里，切片的初始长度为5，容量为10。

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

Maps 是 Go中的一种数据类型，它将键映射到值。我们可以使用以下命令来定义一个 map:

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

### **Typecasting**

一种类型的数据类型可以通过类型转换转换为另一种类型。让我们看看一个简单的类型转换:

```go
a := 1.1
b := int(a)
fmt.Println(b)
//-> 1
```

不是所有类型的数据类型都可以转换为另一种类型。请确保数据类型与转换的内容相匹配。

### Conditional Statements

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

### Looping

Go 有一个循环的关键词 `for`。for循环命令用于实现不同种类的循环:

```go
i := 0
sum := 0
for i < 10 {
 sum += 1
  i++
}
fmt.Println(sum)
```

上面的例子类似于C语言中的while循环。

Go 中的 for 语句也可以用于普通的for循环:

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

### Pointers

Go提供了指针。指针是用来保存一个值的地址的地方。指针是由 \* 定义的。指针是根据数据的类型来定义的。 例如:

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

注意：当你在尝试博客中的示例代码时，不要忘记用 `package main` 包含它，并在需要时导入 fmt 或其他包，如上面第一个 main.go 例子中所示。

### Functions

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

这里c被定义为返回变量。所以定义的变量c会自动返回，而不需要在最后的返回语句中定义。

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

### Method, Structs, and Interfaces

Go并不是一种完全面向对象的语言，但通过结构体（Struct）、接口（Interface）和方法（Method），它有很多面向对象的支持和感觉。

#### Struct

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

#### Methods

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

正如我们在上面的例子中看到的，现在可以使用点运算符来调用该方法，如 `pp.describe`。请注意，_receiver_ 是一个指针。使用指针，我们传递的是一个值的引用，所以如果我们在方法中做任何改变，都会反映在  _receiver_ pp中。它也不会创建一个新的对象的副本，这就节省了内存。

请注意，在上面的例子中，年龄的值被改变了，而名字的值没有改变，因为setName方法是 _receiver_ 类型的  ，而 setAge 是指针类型的。

#### Interfaces

Go interfaces are a collection of methods. Interfaces help group together the properties of a type. Let’s take the example of an interface animal:

```go
type animal interface {
  description() string
}
```

Here animal is an interface type. Now let’s create 2 different type of animals which implement the animal interface type:

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

In the main function, we create a variable `a` of type animal. We assign a snake and a cat type to the animal and use Println to print a.description. Since we have implemented the method describe in both of the types (cat and snake) in a different way we get the description of the animal printed.

### Packages

We write all code in Go in a package. The **main** package is the entry point for the program execution. There are lots of built-in packages in Go. The most famous one we have been using is the **fmt** package.

> “Go packages in the main mechanism for programming in the large that go provides and they make possible to divvy up a large project into smaller pieces.”

> — Robert Griesemer

#### Installing a package

```
go get <package-url-github>
// example
go get github.com/satori/go.uuid
```

The packages we installed are saved inside the GOPATH env which is our work directory. You can see the packages by going inside the pkg folder inside our work directory `cd $GOPATH/pkg`.

#### Creating a custom package

Let’s start by creating a folder custom\_package:

```
> mkdir custom_package
> cd custom_package
```

To create a custom package we need to first create a folder with the package name we need. Let’s say we are building a package `person`. For that let’s create a folder named `person` inside `custom_package` folder:

```
> mkdir person
> cd person
```

Now let’s create a file person.go inside this folder.

```go
package person
func Description(name string) string {
  return "The person name is: " + name
}
func secretName(name string) string {
  return "Do not share"
}
```

We now need to install the package so that it can be imported and used. So let’s install it:

```
> go install
```

Now let’s go back to the custom\_package folder and create a main.go file

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

Here we can now import the package `person` we created and use the function Description. Note that the function `secretName` we created in the package will not be accessible. In Go, the method name starting without a capital letter will be private.

#### **Packages Documentation**

Go has built-in support for documentation for packages. Run the following command to generate documentation:

```
godoc person Description
```

This will generate documentation for the Description function inside our package person. To see the documentation run a web server using the following command:

```
godoc -http=":8080"
```

Now go to the URL [http://localhost:8080/pkg/](http://localhost:6060/pkg/) and see the documentation of the package we just created.

#### Some built-in packages in Go

**fmt**

The package implements formatted I/O functions. We have already used the package for printing out to stdout.

**json**

Another useful package in Go is the json package. This helps to encode/decode the JSON. Let’s take an example to encode/decode some json:

Encode

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

Decode

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

While decoding the json byte using unmarshal, the first argument is the json byte and the second argument is the address of the response type struct where we want the json to be mapped to. Note that the `json:”page”` maps page key to PageNumber key in the struct.

### Error Handling

Errors are the undesired and unexpected result of a program. Let’s say we are making an API call to an external service. This API call may be successful or could fail. An error in a Go program can be recognized when an error type is present. Let’s see the example:

```go
resp, err := http.Get("http://example.com/")
```

Here the API call to the error object may pass or could fail. We can check if the error is nil or present and handle the response accordingly:

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

#### Returning custom error from a function

When we are writing a function of our own, there are cases when we have errors. These errors can be returned with the help of the error object:

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

Most of the packages that are built in Go, or external packages we use, have a mechanism for error handling. So any function we call could have possible errors. These errors should never be ignored and always handled gracefully in the place we call these functions, as we have done in the above example.

#### Panic

Panic is something that is unhandled and is suddenly encountered during a program execution. In Go, panic is not the ideal way to handle exceptions in a program. It is recommended to use an error object instead. When a panic occurs, the program execution get’s halted. The thing that gets executed after a panic is the defer.

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

Defer is something that will always get executed at the end of a function.

In the above example, we panic the execution of the program using panic(). As you notice, there is a defer statement which will make the program execute the line at the end of the execution of the program. Defer can also be used when we need something to be executed at the end of the function, for example closing a file.

### Concurrency

Go is built with concurrency in mind. Concurrency in Go can be achieved by Go routines which are lightweight threads.

**Go routine**

Go routines are the function which can run in parallel or concurrently with another function. Creating a Go routine is very simple. Simply by adding a keyword Go in front of a function, we can make it execute in parallel. Go routines are very lightweight, so we can create thousands of them. Let’s look into a simple example:

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

As you can see in the above example, the function c is a Go routine which executes in parallel with the main Go thread. There are times we want to share resources between multiple threads. Go prefers not sharing the variables of one thread with another because this adds a chance of deadlock and resource waiting. There is another way to share resources between Go routines: via go channels.

**Channels**

We can pass data between two Go routines using channels. While creating a channel it is necessary to specify what kind of data the channel receives. Let’s create a simple channel with string type as follows:

```go
c := make(chan string)
```

With this channel, we can send string type data. We can both send and receive data in this channel:

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

The receiver Channels wait until the sender sends data to the channel.

**One way channel**

There are cases where we want a Go routine to receive data via the channel but not send data, and also vice versa. For this, we can also create a **one-way channel**. Let’s look into a simple example:

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

In the above example, `sc` is a Go routine which can only send messages to the channel but cannot receive messages.

### Organizing multiple channels for a Go routine using select

There may be multiple channels that a function is waiting on. For this, we can use a select statement. Let us take a look at an example for more clarity:

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

In the above example, the main is waiting on two channels, c1 and c2. With select case statement the main function prints, the message sends from the channel whichever it receives first.

**Buffered channel**

You can create a buffered channel in go. With a buffered channel, the messages send to the channel will be blocked if the buffer is full. Let’s take a look at the example:

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

# => fatal error: all goroutines are asleep - deadlock!
```

As we see in above no more than 2 messages are accepted by a channel.

#### Why is Golang Successful?

> Simplicity… — Rob-pike

### Great

We learned some of the major components and features of Go.

1. Variables, Datatypes
2. Array slices and maps
3. Functions
4. Looping and conditional statements
5. Pointers
6. Packages
7. Method, Structs, and Interfaces
8. Error Handling
9. Concurrency — Go routines and channels

Congratulations, you now have a decent understanding of Go.

> One of my most productive days was throwing away 1,000 lines of code.

> — Ken Thompson

Do not stop here. Keep moving forward. Think about a small application and start building.

[LinkedIn](https://www.linkedin.com/in/milap-neupane-99a4b565/), [Github](http://github.com/milap-neupane), [Twitter](https://twitter.com/_milap)

Also Posted on Milap Neupane Blog: [Learning Go-from zero to hero](https://milapneupane.com.np/2019/07/06/learning-golang-from-zero-to-hero/)
