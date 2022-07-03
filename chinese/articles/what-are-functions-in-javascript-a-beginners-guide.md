> -  原文地址：[What are Functions in JavaScript? A Beginner's Guide](https://www.freecodecamp.org/news/what-are-functions-in-javascript-a-beginners-guide/)
> -  原文作者：[Chinwendu Enyinna](https://www.freecodecamp.org/news/author/chinwendu/)
> -  译者：Gradonlee
> -  校对者：

![What are Functions in JavaScript? A Beginner's Guide](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/banner-image-for-functions-1.png)

Functions are one of the fundamental concepts in programming. They let us write concise, modular, reusable, and maintainable code. They also help us obey the DRY principle when writing code.

In this article, you will learn what functions are in JavaScript, how to write your own custom functions, and how to implement them.

As a prerequisite, you should be familiar with some fundamental JavaScript concepts such as variables, expressions, and conditional statements to follow along with this article.

## What is a Function in JavaScript?

A function is a block of reusable code written to perform a specific task.

You can think of a function as a sub-program within the main program. A function consists of a set of statements but executes as a single unit.

In JavaScript, we have some browser built-in functions like alert(), prompt(), and confirm(). You have probably used these in your project before, right? But you can still create your own custom functions.

There are several ways to define a function. Most commonly, we have function declaration and function expression.

## How to Define a Function using Function Declaration

You write a function declaration like this:

```javascript
function nameOfFunction() {
	//some code here....
}
```

Basically, it consists of the following:

-   Function keyword
-   The name of the function
-   Parentheses (which can take in parameters, or also be empty)
-   The body of the function (wrapped in curly braces).

Here's an example:

```JavaScript
function sayHello() {
	console.log("Hello world"); 
}
```

This function won't do a thing – in this case, output _Hello world_ – unless you call it. The term for this is _invoking the function._

Here’s how to call the function:

```javascript
sayHello();

//output: Hello world
```

Here’s another example:

```javascript
function sum(num1, num2){
	return num1 + num2;
}
```

To invoke this function, we call it like this:

```javascript
sum(1, 2);

//output: 3
```

You can see a slight difference between our first function example and the second.

If you guessed that it's the content within the parenthesis of the second function, then you’re right!

The function `sum()` took in two parameters when we defined it – `num1`, and `num2`. And when we call it, we passed in two values – the arguments, `1` and `2`. Let me explain what these two terms (parameters and arguments) mean.

A **parameter** is a variable you pass to a function when you declare it.

Suppose you want your function to be dynamic, so that it applies the function’s logic to different sets of data at different times. That’s where parameters come in handy. This way, your function doesn’t just output the same result repeatedly. Instead, its result is dependent on the data you pass in.

An **argument**, on the other hand, is the value equivalent to the parameter that you pass to the function when you call it.

So the syntax for declaring a function with parameters will look like this:

```javascipt
function nameOfFunction(parameters){
	//function body.....
}
```

And to invoke it:

```javascript
nameOfFunction(arguments)
```

## How to Define a Function using a Function Expression

A function expression is another notation for defining a function. In terms of syntax, it is similar to the function declaration. But function expressions allow you to define a named function or omit the function name to create an anonymous function.

Let’s see what a function expression looks like:

```javascript
let namedFunction = function myFunction(){
	//some code here...
}
```

Notice that in this example, the function has a name, `myFunction`. This is not the case with the anonymous function. When defining an anonymous function, you omit the function name just like in this example below:

```javascript
let anonymousFunction = function(){
	//some code here...
}
```

You can see that both function examples are assigned to a variable, right?

**A function keyword creates a function value that can be assigned to a variable when it is used as an expression**.

So, to invoke this function, we call it using the variable name which serves as the new function name.

One major difference between the function declaration and function expression is that, with function declaration, you can invoke the function even before defining it. This is not possible with function expressions.  

For example:

```javascript
console.log(greeting());

function greeting(){
  console.log("Hope you're are good?");

}
//output: Hope you're good?
```

This won’t work if the function is defined as a function expression because the function expression follows a top-to-bottom control flow sequence.

## How to Use Arrow Functions in JavaScript

Arrow functions are yet another notation of a function expression but they have a shorter syntax. They were introduced in ES6 and help us write cleaner code.

Here, the function keyword is excluded and we use an arrow symbol (=>) instead. The syntax looks like this:

```javascript
let nameOfFunction = (parameters) => {
	//function body
}
```

If the function body within the curly braces contains only a single statement, then the braces can be omitted. An arrow function with curly braces must include the return keyword.

## **What are Immediately Invoked Function Expressions (IIFEs)?**

IIFE is another function expression notation (explicitly an anonymous function) that works in isolation and is independent of any other code. It gets invoked immediately where it is defined.

The syntax is as follows:

```javascript
(function (){
	//function body
})();
```

A use case of IIFE would be to enclose a variable that you may likely not use again inside your code. So, as soon as the function is executed, the variable ceases to exist.

## **How to Use the Return Keyword in a Function**

To create a function that will resolve to a value after the function is invoked, you use the return keyword. You write this within the body of the function.

**`return`** is a directive that returns a value to the function after the code within it has been executed.

Here’s an example of a function that returns a value, in this case, the sum of two numbers:

```javascript
function sum(a, b){
	return  a + b;
}

sum(10, 20);

//output will be 30
```

Using `return` inside a function makes it easy to manipulate the data the function returns, by either passing it as a value to, say, another function, or performing additional operations on it.

## **How Do **Function** S**cope and Closures** Work in JavaScript?**

A scope is a nested namespace that localizes the names created within it such that these names don’t interfere with similar names created outside of that scope. There are certain scope rules that apply within a function.

Each new function you define creates a new scope known as the **function scope**. Variables created within the function scope are not visible or accessible outside of that scope.

Nevertheless, variables created outside the function scope but within the scope in which the function is defined can be accessed inside the function. Therefore, if you define a function in global scope, it can access all variables declared in that global scope.

Also, suppose you have a child function (that is, an inner function) nested inside a parent function (which is the outer function). The child function can access all variables and functions declared in its parent function as well as all variables and functions the parent function has access to – even when its parent function has finished executing and its variables are no longer accessible outside that function. This concept is known as closures in JavaScript.

However, the parent function cannot access the variables created inside the child function. In this way, the variables and functions inside the child function are confined to their own scope.

Let’s see a code example of this:

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

Suppose I nest an inner function inside the parent function, like this:

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

Now, if I create a variable inside a function and try to access it from the global scope, we will get a reference error. This is because that variable is local to the function scope and is not visible to the global scope.

```javascript
console.log(c);

function parentFunc(){
	let c = 30
} 

//output: reference error - c is not defined
```

Let’s try to access a variable created inside a nested function in the parent function:

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

## How Do Default Parameters Work in JavaScript?

Originally, function parameters are assigned _undefined_ when no value is explicitly passed to them. Default parameters let you assign a default value to a parameter when you define a function. For example:

```javascript
function greeting(name, message = ”Hello”){
	console. log(`${messgae}  ${name}`)
}

greeting(‘John’); //output: Hello John

//you can also assign a new value to the default parameter 
//when you call the function

greeting(‘Doe’, ‘Hi’); //output: Hi Doe
```

It is important to note that in declaring a default parameter, it must come after the regular parameter.

## **How Do Rest Parameters Work in JavaScript?**

With rest parameters, you can define a function to store multiple arguments in a single array. This is particularly useful when you're invoking your function with multiple arguments. Here's an example:

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

The `...` is what makes `names` a rest parameter.

Just like default parameters, rest parameters should appear after any regular parameter in your function.

## Conclusion

In this article, you learned what functions in JavaScript are all about and how you can write your own functions.

With functions, you can organize your code by grouping everything into separate blocks that perform different tasks.

I hope you enjoyed reading this article. To learn more about functions, here are some resources you can check out:

-   [JavaScript Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
-   [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

That's all for this piece. Happy coding :)
