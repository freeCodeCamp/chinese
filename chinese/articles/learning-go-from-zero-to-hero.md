> -  原文地址：[Learning Go — from zero to hero](https://www.freecodecamp.org/news/learning-go-from-zero-to-hero-d2a3223b3d86/)
> -  原文作者：[Milap Neupane](https://www.freecodecamp.org/news/author/milapneupane/)
> -  译者：
> -  校对者：

![Learning Go — from zero to hero](https://cdn-media-1.freecodecamp.org/images/1*30aoNxlSnaYrLhBT0O1lzw.png)

Let’s start with a small introduction to Go (or Golang). Go was designed by Google engineers Robert Griesemer, Rob Pike, and Ken Thompson. It is a statically typed, compiled language. The first version was released as open source in March 2012.

> “Go is an open source programming language that makes it easy to build simple, reliable, and efficient software”. — GoLang

In many languages, there are many ways to solve a given problem. Programmers can spend a lot of time thinking about the best way to solve it.

Go, on the other hand, believes in fewer features — with only one right way to solve the problem.

This saves developers time and makes the large codebase easy to maintain. There are no “expressive” features like maps and filters in Go.

> “When you have features that add expressiveness it typically adds expense” — Rob Pike

![1*AUiSG5Gqz8MzaGCvGpckGA](https://cdn-media-1.freecodecamp.org/images/1*AUiSG5Gqz8MzaGCvGpckGA.png)

Recently published new logo of go lang: [https://blog.golang.org/go-brand](https://blog.golang.org/go-brand)

### Getting Started

Go is made of packages. The package main tells the Go compiler that the program is compiled as an executable, rather than a shared library. It is the entry point for an application. The main package is defined as:

```go
package main
```

Let’s move ahead by writing a simple hello world example by creating a file `main.go` in the Go workspace.

#### **Workspace**

A workspace in Go is defined by the environment variable `GOPATH`.

Any code you write is to be written inside the workspace. Go will search for any packages inside the `GOPATH` directory, or the `GOROOT` directory, which is set by default when installing Go. `GOROOT` is the path where the go is installed.

Set `GOPATH` to your desired directory. For now, let’s add it inside a folder `~/workspace`.

```
# export env
export GOPATH=~/workspace
# go inside the workspace directory
cd ~/workspace
```

Create the file `main.go` with the following code inside the workspace folder we just created.

#### Hello World!

```go
package main

import (
 "fmt"
)

func main(){
  fmt.Println("Hello World!")
}
```

In the above example, `fmt` is a built-in package in Go which implements functions for formatting I/O.

We import a package in Go by using the `import` keyword. `func main` is the main entry point where the code gets executed. `Println` is a function inside the package `fmt` which prints “hello world” for us.

Let’s see by running this file. There are two ways we can run a Go command. As we know, Go is a compiled language, so we first need to compile it before executing.

```
> go build main.go
```

This creates a binary executable file `main` which now we can run:

```
> ./main 
# Hello World!
```

There is another, simpler, way to run the program. The `go run` command helps abstract the compilation step. You can simply run the following command to execute the program.

```
go run main.go
# Hello World!
```

**_Note_**_: To try out the code that is mentioned in this blog you can use [https://play.golang.org](https://play.golang.org/)_

### Variables

Variables in Go are declared explicitly. Go is a statically typed language. This means that the variable type is checked at the time of variable declaration. A variable can be declared as:

```go
var a int
```

In this case, the value will be set as 0. Use the following syntax to declare and initialize a variable with a different value:

```go
var a = 1
```

Here the variable is automatically assigned as an int. We can use a shorthand definition for the variable declaration as:

```go
message := "hello world"
```

We can also declare multiple variables in the same line:

```go
var b, c int = 2, 3
```

### Data types

Like any other programming language, Go supports various different data structures. Let’s explore some of them:

#### **Number, String, and Boolean**

Some of the supported number store types are int, int8, int16, int32, int64,  
uint, uint8, uint16, uint32, uint64, uintptr…

The string type stores a sequence of bytes. It is represented and declared with keyword `string`.

A boolean value is stored using the keyword `bool`.

Go also supports complex number type data types, which can be declared with `complex64` and `complex128`.

```go
var a bool = true
var b int = 1
var c string = 'hello world'
var d float32 = 1.222
var x complex128 = cmplx.Sqrt(-5 + 12i)
```

#### **Arrays, Slices, and Maps**

An array is a sequence of elements of the same data type. Arrays have a fixed length defined at declaration, so it cannot be expanded more than that. An array is declared as:

```go
var a [5]int
```

Arrays can also be multidimensional. We can simply create them with the following format:

```go
var multiD [2][3]int
```

Arrays are limiting for cases when the values of array changes in runtime. Arrays also do not provide the ability to get a subarray. For this, Go has a data type called slices.

Slices store a sequence of elements and can be expanded at any time. Slice declaration is similar to array declaration — without the capacity defined:

```go
var b []int
```

This creates a slice with zero capacity and zero length. Slices can also be defined with capacity and length. We can use the following syntax for it:

```go
numbers := make([]int,5,10)
```

Here, the slice has an initial length of 5 and has a capacity of 10.

Slices are an abstraction to an array. Slices use an array as an underlying structure. A slice contains three components: capacity, length, and a pointer to the underlying array as shown in the diagram below:

![1*P0lNCO0sQwIYHLEX_mfSOQ](https://cdn-media-1.freecodecamp.org/images/1*P0lNCO0sQwIYHLEX_mfSOQ.png)

image src: [https://blog.golang.org/go-slices-usage-and-internals](https://blog.golang.org/go-slices-usage-and-internals)

The capacity of a slice can be increased by using the append or a copy function. An append function adds value to the end of the array and also increases the capacity if needed.

```go
numbers = append(numbers, 1, 2, 3, 4)
```

Another way to increase the capacity of a slice is to use the copy function. Simply create another slice with a larger capacity and copy the original slice to the newly created slice:

```go
// create a new slice
number2 := make([]int, 15)
// copy the original slice to new slice
copy(number2, number)
```

We can create a sub-slice of a slice. This can be done simply using the following command:

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

Maps are a data type in Go, which maps keys to values. We can define a map using the following command:

```go
var m map[string]int
```

Here `m` is the new map variable, which has its keys as `string` and values are `integers`. We can add keys and values easily to a map:

```go
// adding key/value
m['clearity'] = 2
m['simplicity'] = 3
// printing the values
fmt.Println(m['clearity']) // -> 2
fmt.Println(m['simplicity']) // -> 3
```

### **Typecasting**

One type of data type can be converted into another using type casting. Let’s see a simple type conversion:

```go
a := 1.1
b := int(a)
fmt.Println(b)
//-> 1
```

Not all types of data type can be converted to another type. Make sure that the data type is compatible with the conversion.

### Conditional Statements

#### if else

For conditional statements, we can use if-else statements as shown in the example below. Make sure that the curly braces are in the same line as the condition is.

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

Switch cases helps organize multiple condition statements. The following example shows a simple switch case statement:

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

Go has a single keyword for the loop. A sngle for loop command help achieve different kinds of loops:

```go
i := 0
sum := 0
for i < 10 {
 sum += 1
  i++
}
fmt.Println(sum)
```

The above example is similar to a while loop in C. The same for statement can be used for a normal for loop:

```go
sum := 0
for i := 0; i < 10; i++ {
  sum += i
}
fmt.Println(sum)
```

Infinite loop in Go:

```go
for {
}
```

### Pointers

Go provides pointers. Pointers are the place to hold the address of a value. A pointer is defined by \*. A pointer is defined according to the type of data. Example:

```go
var ap *int
```

Here `ap` is the pointer to an integer type. The `&` operator can be used to get the address of a variable.

```go
a := 12
ap = &a
```

The value pointed by the pointer can be accessed using the `*` operator:

```go
fmt.Println(*ap)
// => 12
```

Pointers are usually preferred while passing a struct as an argument or while declaring a method for a defined type.

1.  While passing value the value is actually copied which means more memory
2.  With the pointer passed, the value changed by the function is reflected back in the method/function caller.

Example:

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

Note: While you are trying out the example code in the blog, do not forget to include it with package main and import fmt or other packages when needed as shown in the first main.go example above.

### Functions

The main function defined in the main package is the entry point for a go program to execute. More functions can be defined and used. Let’s look into a simple example:

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

As we can see in the above example, a Go function is defined using the **func** keyword followed by the function name. The **arguments** a function takes needs to be defined according to its data type, and finally the data type of the return.

The return of a function can be predefined in function as well:

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

Here c is defined as the return variable. So the variable c defined would be automatically returned without needing to be defined at the return statement at the end.

You can also return multiple return values from a single function separating return values with a comma.

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

Go is not a completely object-oriented language, but with structs, interfaces, and methods it has a lot of object-oriented support and feel.

#### Struct

A struct is a typed, collection of different fields. A struct is used to group data together. For example, if we want to group data of a Person type, we define a person’s attribute which could include name, age, gender. A struct can be defined using the following syntax:

```go
type person struct {
  name string
  age int
  gender string
}
```

With a person type struct defined, now let’s create a person:

```go
//way 1: specifying attribute and value
p = person{name: "Bob", age: 42, gender: "Male"}
//way 2: specifying only value
person{"Bob", 42, "Male"}
```

We can easily access these data with a dot(.)

```go
p.name
//=> Bob
p.age
//=> 42
p.gender
//=> Male
```

You can also access attributes of a struct directly with its pointer:

```go
pp = &person{name: "Bob", age: 42, gender: "Male"}
pp.name
//=> Bob
```

#### Methods

Methods are a special type of function with a _receiver._ A receiver can be both a value or a pointer. Let’s create a method called describe which has a receiver type person we created in the above example:

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

As we can see in the above example, the method now can be called using a dot operator as `pp.describe`. Note that the receiver is a pointer. With the pointer we are passing a reference to the value, so if we make any changes in the method it will be reflected in the receiver pp. It also does not create a new copy of the object, which saves memory.

Note that in the above example the value of age is changed, whereas the value of name is not changed because the method setName is of the receiver type whereas setAge is of type pointer.

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

### Great!

We learned some of the major components and features of Go.

1.  Variables, Datatypes
2.  Array slices and maps
3.  Functions
4.  Looping and conditional statements
5.  Pointers
6.  Packages
7.  Method, Structs, and Interfaces
8.  Error Handling
9.  Concurrency — Go routines and channels

Congratulations, you now have a decent understanding of Go.

> One of my most productive days was throwing away 1,000 lines of code.

> — Ken Thompson

Do not stop here. Keep moving forward. Think about a small application and start building.

[LinkedIn](https://www.linkedin.com/in/milap-neupane-99a4b565/), [Github](http://github.com/milap-neupane), [Twitter](https://twitter.com/_milap)

Also Posted on Milap Neupane Blog: [Learning Go-from zero to hero](https://milapneupane.com.np/2019/07/06/learning-golang-from-zero-to-hero/)