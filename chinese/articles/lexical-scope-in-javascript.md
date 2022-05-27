> -  原文地址：[Lexical Scope in JavaScript – Beginner's Guide](https://www.freecodecamp.org/news/lexical-scope-in-javascript/)
> -  原文作者：[Keyur Paralkar](https://www.freecodecamp.org/news/author/keyurparalkar/)
> -  译者：
> -  校对者：

![Lexical Scope in JavaScript – Beginner's Guide](https://www.freecodecamp.org/news/content/images/size/w2000/2022/05/spacex--p-KCm6xB9I-unsplash-1.jpg)

In this article, we are going to understand what lexical scope is by going through some helpful examples.

We will also have a brief discussion about how JavaScript compiles and executes programs.

Lastly, we will have a look at how you can use lexical scope to explain undeclared variable errors or reference errors.

Without further ado, let's get started.

## Table of Contents

-   [How does JavaScript execute programs?](#how-does-javascript-execute-programs)
-   [How JavaScript Parses/Compiles and Executes Code](#how-javascript-parses-compiles-and-executes-code)
-   [Understanding Syntax Error](#syntax-error)
-   [Understanding Variable/Function Hoisting](#variable-function-hoisting)
-   [What is lexical scope](#what-is-lexical-scope)?
-   [Understanding Lexical Scope](#understanding-lexical-scope)
-   [Summary](#summary)

## How Does Javascript Execute Programs?

Before understanding how JavaScript executes a code/program, we will first explore the different steps that are involved in any compilation process from a compiler theory perspective.

For any language, the compiler performs the following operations:

### Tokenizing/Lexing

In this process, the entire program is divided into keywords which are called tokens. For example, consider the following statement: `let temp = 10` – once the tokenization is applied it will divide this statement into keywords as follows: `let`, `temp`, `=`, `10`.

Lexing and tokenizing terms are used interchangeably, but there is a subtle difference between them. Lexing is a process of tokenization but it also checks if it needs to be considered as a distinct token. We can consider **Lexing** to be a smart version of tokenization.

### Parsing

This is a process of collecting all the tokens generated in the previous step and turning them into a nested tree structure that grammatically represents the code.

This tree structure is called an abstract syntax tree (AST).

### Code Generation

This process converts the AST into machine-readable code.

So this was a brief explanation of how the compiler works and generates a machine-readable code.

Of course there are more steps apart from the ones that are mentioned above. But explaining the other steps/phases of the compiler is out of scope for this article.

The most important observation that we can make about JS execution is that to execute code, it goes through two phases:

1.  Parsing
2.  Execution

Before we understand lexical scope, it is important to first understand how JavaScript executes a program. In the next sections, we will dive deeper into how these two phases work.

## How JavaScript Parses/Compiles and Executes Code

![Untitled](https://www.freecodecamp.org/news/content/images/2022/05/Untitled.png)

Parsing phase

Let's first talk about the parsing phase. In this phase, the JavaScript engine goes through the entire program, assigns variables to their respective scopes, and also checks for any errors. If it finds an error then the execution of the program is stopped.

In the next phase, the actual execution of the code takes place.

To understand this in more detail we will look into the following two scenarios:

-   Syntax Error
-   Variable hoisting

### Syntax Error

To show you how JS first parses the program and then executes it, the best and simplest way is to demonstrate the behavior of a syntax error.

Consider the following buggy code:

```Javascript
const token = "ABC";
console.log(token);

//Syntax error:
const newToken = %((token);
```

The above program will generate a syntax error at the last line. This is what the error will look like:

```Javascript
Uncaught SyntaxError: Unexpected token '%'
```

If you look at the error, the JavaScript engines did not execute the `console.log` statement. Instead, it went through the entire program in the following manner:

-   Line 1, found that there was a variable declaration and definition. So it stored the reference of the `token` variable in the current scope, that is global scope.
-   Line 2, JavaScript engine discovered that the `token` variable is being referenced. It first referred to the current scope to check if the `token` variable was present or not. If it’s present then it's referred to `token` variable’s declaration.
-   Line 3, the engine discovered that `newToken` variable was being declared and defined. It checked if any variable with the name `newToken` was present in the current scope or not. If yes, then throws a reference error. If no, then stores the reference of this variable in the current scope.
-   At the same line, the engine also discovered that it was trying to refer to a variable `%((token)`. But it found that it started with `%` and variable names cannot start with reserved keywords, so it threw a syntax error.

### Variable/Function Hoisting

Hoisting is a mechanism via which all the variables present in their respective scopes are hoisted, that is made available at the top.

Now let's take a look at the example below that will show you that hosting happens during the parsing phase and then execution happens:

```Javascript
doSomething();

function doSomething(){
	console.log("How you doing?");
}
```

In the above program, the engine goes through the program in the following manner:

-   Line 1, JavaScript engine encountered a function called `doSomething`. It searched to see if `doSomething` was available in the current scope. If yes then it refers to the function or else it throws a reference error.
-   It turned out that during the parsing phase, the engine found the `function doSomething` line to be present in the current scope. Therefore, it added this variable’s reference in the current scope and made it available throughout the entire program.
-   Finally, the `doSomething` function printed out the string `How you doing?`.

As we can see from the above explanation, the code was first parsed so as to generate some intermediary code that makes sure the variable/function (that is `doSomething`) referenced in the current scope is made available.

In the next phase, JavaScript knows about the function and so starts to execute.

From the above examples, we can safely conclude that the JavaScript engine does the following things before executing the code:

1.  Parses the code.
2.  Generates the intermediary code that gives a description of the variables/functions that are available.
3.  Using the above intermediary code, it then starts the execution of the program.

## What is Lexical Scope?

The process of determining the scopes of the variables/functions during runtime is called lexical scoping. The word _lexical_ comes from the _lexical/tokenization phase_ of the JS compiler steps.

During runtime, JavaScript does these two things: `parsing` and `execution`. As you learned in the last section, during the parsing phase the scopes of the variables/functions are defined. That is why it was important to first understand the parsing phase of the code execution since it lays down the foundation for understanding lexical scope.

In laymen's terms, the parsing phase of the JavaScript engine is where lexical scoping takes place.

Now that we know the basics of it, let's go through some of the main characteristics of lexical scope:

First of all, during the parsing phase, a scope is assigned/referenced to a variable where it is declared.

For example, consider a scenario where a variable is referenced in the inner function and its declaration is present in the global scope. In this case the inner variable is assigned with the outer scope, that is the global scope.

![ezgif.com-gif-maker--1---1-](https://www.freecodecamp.org/news/content/images/2022/05/ezgif.com-gif-maker--1---1-.gif)

Scope assigned illustration

Then, while assigning scope to a variable, the JavaScript engine checks its parent scopes for the availability of the variable.

If the variable is present then that parent scope is applied to the variable. If a variable is not found in any of the parent scopes then a reference error is thrown.  
  
Take a look at the below illustration that demonstrates how a variable’s scope is searched.

![ezgif.com-gif-maker--3---1-](https://www.freecodecamp.org/news/content/images/2022/05/ezgif.com-gif-maker--3---1-.gif)

JS engine successfully finding a variable by going through each scope

Here is an illustration that represents the JS engine trying to find a variable that does not exists in any scope:

![ezgif.com-gif-maker--6---1-](https://www.freecodecamp.org/news/content/images/2022/05/ezgif.com-gif-maker--6---1-.gif)

JS engine throwing reference error

## Understanding Lexical Scope

In the above section, we defined what lexical scope is. We also understood what characteristics it has.

In this section, we are going to understand lexical scope with the help of an example. As they say, it's always easier to understand difficult topics by looking at examples from real-life, day-to-day code. Let’s get started.

The example that we are going to use involves coloring areas of our code that have similar scopes. This may sound confusing, but let me demonstrate this with a simple illustration.

![Global-and-Functional-Scope--1---1-](https://www.freecodecamp.org/news/content/images/2022/05/Global-and-Functional-Scope--1---1-.gif)

Understanding lexical scope with a coloring example

Let's take a step back and understand what is going on in this illustration.

We have the following things in our program:

-   `empData`: Array of objects.
-   `allPositions`: Array of strings that consists of all the employee positions.
-   Lastly, we have a console statement that prints out `allPositions` variables.

Now let's take a look at what happens in the parsing phase of this program:

-   The engine starts with the first line, and it encounters a variable declaration `empData`.
-   The engine then checks if the `empData` is available in the current scope or not. Since there is no similar variable found, it checks the existence of this variable in its parent scope.
-   The engine will stop its search over here since there is no scope available and also the current scope is the global scope.
-   Next, the engine assigns an `undefined` value to the `empData` during the parsing phase so that once any nested scope tries to reference this variable, then it can be used.
-   The right-hand side of this assignment operator is evaluated during the execution phase of the program.
-   In a similar manner, the engine does the same for the `allPositions` variable and assigns it an `undefined` value.
-   But on the right-hand side, we are also referencing the `empData` variable. At this stage, the engine checks if this variable is available in the current scope. Since it is available, it refers to the same (that is, present in the global scope).
-   The engine is still on the right-hand side since it found out that there is an arrow function inside of the map function. Since the engine has encountered the function definition, it creates a new scope. In the gif, this is number 2.
-   Since this is a new scope, we are going to color code it black.
-   This arrow function has an argument of `data` and returns `data.position`. In the parsing phase, the engine hoists all the variables that are required by referencing the variables present in the current scope as well as in its parent scope.
-   Inside this function, the `data` variable is referenced so the engine checks if the current scope has this variable. Since the variable is present in the current scope, it refers to the same.
-   Once the engine encounters the `}` brace, it moves out of the functional scope.
-   Finally, at the end of the program, we have a console statement that displays `allPositions` variables. Since it is referencing the `allPositions` variable, it searches in the current scope (that is global scope). Since it is found, it refers to the same in the `console` statement.

## Summary

In this article, we learned about what lexical scope means, and learned how it works by looking at a simple coloring example.

Thank you for reading!

Follow me on [Twitter](https://twitter.com/keurplkar), [GitHub](https://github.com/keyurparalkar), and [LinkedIn](https://www.linkedin.com/in/keyur-paralkar-494415107/).