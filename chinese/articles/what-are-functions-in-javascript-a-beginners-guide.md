> -  原文地址：[What are Functions in JavaScript? A Beginner's Guide](https://www.freecodecamp.org/news/what-are-functions-in-javascript-a-beginners-guide/)
> -  原文作者：[Chinwendu Enyinna](https://www.freecodecamp.org/news/author/chinwendu/)
> -  译者：Gradonlee
> -  校对者：

![什么是 JavaScript 中的函数（function）初学者的指南](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/banner-image-for-functions-1.png)


函数（function）是编程的基本概念之一。函数能让我们编写简洁的、模块化的、可多次使用的和可维护的代码，它还能帮助我们在编写代码时遵守DRY原则。

在本文中，你将了解 JavaScript 中有哪些函数，如何编写自己的自定义函数以及如何执行它。

作为先决条件，你应该熟悉一些基本的 JavaScript 概念，如变量（variable）、表达式（expression）和条件语句（conditional statement），以便理解本文。

## **什么是 JavaScript 中的函数？**

函数是为了执行特定任务而编写的——可重复使用的代码块。

你可以将函数视为主程序（program）中的子程序。函数由一组语句组成，但作为单个单元执行。

在 JavaScript 中，我们有一些浏览器内置功能，如 alert()、 promp() 和 confirm()。你以前可能在你的项目中使用过这些吧？但你仍然可以创建你自己的自定义函数。

有几种方法可以定义函数。最常见的是函数声明（declaration）和函数表达式。


## **如何使用函数声明来定义函数？**

你可以编写像这样的函数声明：

```javascript
function nameOfFunction() {
	//some code here....
}
```

基本上，函数声明由以下内容组成：

-   函数关键字（keyword）
-   函数的名称
-   小括号（Parentheses）（可以包含参数，也可以为空）
-   函数主体（用大括号（curly braces）括起来）

这里有一个例子：

```JavaScript
function sayHello() {
	console.log("Hello world"); 
}
```

该函数不会做任何事情——也就是输出（output） _Hello world_ ，除非你调用（invoking）了这个函数。

调用该函数的方法如下：

```javascript
sayHello();

//output: Hello world
```

以下是另一个例子：

```javascript
function sum(num1, num2){
	return num1 + num2;
}
```

要调用此函数，我们需要这样：

```javascript
sum(1, 2);

//output: 3
```

你可以看到我们的第一个函数示例和第二个函数示例之间略有区别。

如果你猜到这是因为第二个函数小括号中的内容，恭喜你答对了！

当我们定义函数 `sum()` 时，它包含了两个形式参数（parameter） —— `num1` 和 `num2`。当我们调用这个函数时，我们传递了两个值（value）——实际参数（argument）`1` 和 `2`。

**形式参数**是你在声明函数时传递给函数的变量。

假设你希望你的函数是动态（dynamic）的，形式参数它就可以在不同的时间将函数的逻辑应用于不同的数据集。

这就是形式参数派上用场的地方，这样一来，你的函数就不会重复输出相同的结果。反过来说，它的结果是取决于你传入的数据。

另一方面，**实际参数**是相当于你调用函数时，传递给形式参数的值。

因此，声明一个带有形式参数的函数的语法将看起来像这样：

```javascipt
function nameOfFunction(parameters){
	//function body.....
}
```

然后再调用该函数：

```javascript
nameOfFunction(arguments)
```

## **如何使用函数表达式来定义一个函数？**

函数表达式是定义一个函数的另一种记法。就语法而言，它与函数声明类似。但是函数表达式允许你定义一个命名的函数，或者省略函数名来创建一个匿名（anonymous）函数。


让我们看看一个函数表达式是什么样子的：

```javascript
let namedFunction = function myFunction(){
	//some code here...
}
```

注意，在这个例子中，函数有一个名字，`myFunction`。而匿名函数则不是这样的。当定义一个匿名函数时，你要省略函数名，就像下面这个例子：

```javascript
let anonymousFunction = function(){
	//some code here...
}
```

你可以看到，这两个函数的例子都是分配给了一个变量的，没错吧？

**一个函数关键字创建了一个函数值，当它被用作表达式时，可以分配给一个变量**。

因此，为了调用这个函数，我们使用作为新函数名的变量名来调用它。

函数声明和函数表达式之间的一个主要区别是，对于函数声明，你甚至可以在定义函数之前就调用它。这在函数表达式中是不可能的。 

比如说：

```javascript
console.log(greeting());

function greeting(){
  console.log("Hope you're are good?");

}
//output: Hope you're good?
```

如果函数被定义为一个函数表达式，这就不灵了，因为函数表达式遵循的是从上到下的控制流序列。

## **如何在JavaScript中使用箭头（arrow）函数？**

箭头函数是函数表达式的另一种记法，但它们的语法更短。它是在ES6中引入的，可以帮助我们编写更简洁的代码。

在这里，函数关键字被排除在外，我们使用一个箭头符号（=>）来代替。语法看起来像这样：

```javascript
let nameOfFunction = (parameters) => {
	//function body
}
```

如果大括号内的函数主体只包含一条语句，那么大括号可以省略。带有大括号的箭头函数必须包括 `return` 这一个关键字。

## **什么是立即调用的函数表达式 (IIFEs)?**

IIFE是另一个函数表达式记法（显式的匿名函数），它在隔离状态下工作，独立于任何其他代码。它在被定义的地方被立即调用。


其语法如下：

```javascript
(function (){
	//function body
})();
```

IIFE的一个用例是包围一个你可能不会在代码中再次使用的变量。因此，一旦函数被执行，这个变量就不存在了。

## **如何在一个函数中使用关键字 `return`？**

要创建一个在函数被调用后会解析为一个值的函数，你要在函数的正文中使用关键字 `return`。

`return`是一个指令，在函数中的代码被执行后，向函数返回一个值。


下面是一个函数的例子，该函数返回一个值，这个值在这个例子中是两个数字的总和：


```javascript
function sum(a, b){
	return  a + b;
}

sum(10, 20);

//output will be 30
```

在一个函数中使用 `return` 可以很容易地处理函数返回的数据，可以把它作为一个值传递给另一个函数，或者对它进行额外的操作。

## **JavaScript中的函数作用域（Scope）和闭包（Closures）是如何工作的？**

一个作用域是一个嵌套的名字空间，它将在其中创建的名字本地化，这样这些名字就不会与在该作用域之外创建的类似名字发生冲突。在一个函数中，有一些作用域规则是适用的。

你定义的每个新函数都会创建一个新的作用域，称为**函数作用域**。在函数作用域内创建的变量在该作用域外是不可见的或不可访问的。

然而，在函数作用域之外但在定义函数的作用域内创建的变量可以在函数内被访问。因此，如果你在全局作用域内定义一个函数，它可以访问在该全局作用域内声明的所有变量。

此外，假设你有一个子函数（也就是内部函数）嵌套在父函数（也就是外部函数）里面。子函数可以访问其父函数中声明的所有变量和函数，以及父函数可以访问的所有变量和函数——即使其父函数已经执行完毕，并且其变量在该函数之外不再可以访问的情况下也可以。这个概念在 JavaScript 中被称为**闭包**。

然而，父函数不能访问在子函数内部创建的变量。这样一来，子函数内部的变量和函数就被限制在自己的作用域内。


让我们看一个这方面的代码例子：

```javascript
//variables defined in the global scope

let  a = 40;
let b = 20;

//this function is also defined in the global scope

function parentFunc(){
	//access variables a and b inside this function

	console.log(a + b); 
}

//output: 60
```

假设我在父函数中嵌套了一个内部函数，像这样：

```javascript
//variables defined in the global scope

let a = 40;
let b = 20;

//this function is also defined in the global scope

function parentFunc(){
	let  name = “Doe”;
    
    //this inner function is defined inside the parent function scope
    
	function childFunc(){
		console.log(`${name} is ${a - b} years old`); 
      }
    return childFunc();
}

parentFunc(); //ouput: Doe is 20 years old
```

现在，如果我在一个函数内创建一个变量，并试图从全局作用域访问它，我们会得到一个引用错误。这是因为该变量是函数作用域的局部变量，在全局作用域中是不可见的。

```javascript
console.log(c);

function parentFunc(){
	let c = 30
} 

//output: reference error - c is not defined
```

让我们试着访问一个在父函数中的嵌套函数内创建的变量：


```javascript
function parentFunc(){
	console.log(age);
	function childFunc(){
		let  age = 20;
	} 
    return childFunc();
}

parentFunc(); //output: reference error - age is not defined.
```

## **默认形式参数如何在 JavaScript 中工作？**

最初，当没有明确的值传给函数形式参数时，函数形式参数被分配为 _undefined_ 。默认状态下形式参数让你在定义函数时为形式参数指定一个默认值，例如：

```javascript
function greeting(name, message = ”Hello”){
	console. log(`${messgae}  ${name}`)
}

greeting(‘John’); //output: Hello John

//you can also assign a new value to the default parameter 
//when you call the function

greeting(‘Doe’, ‘Hi’); //output: Hi Doe
```

需要注意的是，在声明默认形式参数时，它必须在常规的形式参数之后。


## **剩余参数（rest parameter）如何在 JavaScript 中工作？**

通过剩余参数，你可以定义一个函数，将多个实际参数存储在一个数组中。当你用多个实际参数来调用你的函数时这么做会特别有用，下面是一个例子：

```javascript
function sayHello(message, ...names){
  names.forEach(name => console.log(`${message} ${name}`));
}

sayHello('Hello', "John", "Smith", "Doe");

/*
output:

Hello John

Hello Smith

Hello Doe 

*/


```

`...`是使 `names` 成为剩余参数的原因。

就像默认形式参数一样, 剩余参数应该出现在你的函数中任何常规形式参数之后.


## **总结**

在这篇文章中，你了解了 JavaScript 中的函数是怎么回事，以及如何编写你自己的函数。

有了函数，你就可以通过将所有的东西归入独立块，来执行不同的任务，从而组织你的代码。

我希望你喜欢这篇文章。要想了解更多关于函数的知识，你可以查看以下这些资源。


-   [JavaScript Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
-   [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

文章就到这里， Happy coding :)
