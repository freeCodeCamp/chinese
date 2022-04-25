> -  原文地址：[JavaScript Execution Context – How JS Works Behind The Scenes](https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/)
> -  原文作者：[Victor Ikechukwu](https://www.freecodecamp.org/news/author/victor-ikechukwu/)
> -  译者：Papaya HUANG
> -  校对者：

![JavaScript Execution Context – How JS Works Behind The Scenes](https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/header.png)

All JavaScript code needs to be hosted and run in some kind of environment. In most cases, that environment would be a web browser.

For any piece of JavaScript code to be executed in a web browser, a lot of processes take place behind the scenes. In this article, we'll take a look at everything that happens behind the scenes for JavaScript code to run in a web browser.

Before we dive in, here are some prerequisites to familiarize yourself with, because we'll use them often in this article.

-   ****Parser****: A Parser or Syntax Parser is a program that reads your code line-by-line. It understands how the code fits the syntax defined by the Programming Language and what it (the code) is expected to do.
-   ****JavaScript Engine****: A JavaScript engine is simply a computer program that receives JavaScript source code and compiles it to the binary instructions (machine code) that a CPU can understand. JavaScript engines are typically developed by web browser vendors, and each major browser has one. Examples include the [V8 engine](https://v8.dev/) for Google chrome, [SpiderMonkey](https://firefox-source-docs.mozilla.org/js/index.html) for Firefox, and [Chakra](https://en.wikipedia.org/wiki/Chakra_(JScript_engine)) for Internet Explorer.
-   ****Function Declarations****: These are functions that are assigned a name.

```javascript
function doSomething() { //here "doSomething" is the function's name
statements; 
} 
```

-   ****Function Expressions****: These are anonymous functions, that is functions without a function name like `js function () { statements }`. They are usually used in statements, like assigning a function to a variable. `let someValue = function () { statements }`.

Now, that we've gotten those out of the way, let's dive in.

## **How JavaScript Code Gets Executed**

For does who don't know, the browser doesn't natively understand the high-level JavaScript code that we write in our applications. It needs to be converted into a format that the browser and our computers can understand – machine code.

While reading through HTML, if the browser encounters JavaScript code to run via a `<script>` tag or an attribute that contains JavaScript code like `onClick`, it sends it to its JavaScript engine.

The browser's JavaScript engine then creates a special environment to handle the transformation and execution of this JavaScript code. This environment is known as the ****`Execution Context`****.

The Execution Context contains the code that's currently running, and everything that aids in its execution.

During the Execution Context run-time, the specific code gets parsed by a parser, the variables and functions are stored in memory, executable byte-code gets generated, and the code gets executed.

There are two kinds of Execution Context in JavaScript:

-   Global Execution Context (GEC)
-   Function Execution Context (FEC)

Let's take a detailed look at both.

### **Global Execution Context (GEC)**

Whenever the JavaScript engine receives a script file, it first creates a default Execution Context known as the ****`Global Execution Context (GEC)`****.

The GEC is the base/default Execution Context where all JavaScript code that is ****not inside of a function**** gets executed.

> For every JavaScript file, there can only be one GEC.

### **Function Execution Context (FEC)**

Whenever a function is called, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the GEC to evaluate and execute the code within that function.

Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script.

## **How are Execution Contexts Created?**

Now that we are aware of what Execution Contexts are, and the different types available, let's look at how the are created.

The creation of an Execution Context (GEC or FEC) happens in two phases:

1.  Creation Phase
2.  Execution Phase

### Creation Phase

In the creation phase, the Execution Context is first associated with an Execution Context Object (ECO). The Execution Context Object stores a lot of important data which the code in the Execution Context uses during its run-time.

The creation phase occurs in 3 stages, during which the properties of the Execution Context Object are defined and set. These stages are:

1.  Creation of the Variable Object (VO)
2.  Creation of the Scope Chain
3.  Setting the value of the `this` keyword

Let us go over each phase in detail.

### **Creation Phase: Creation Of The Variable Object (VO)**

The Variable Object (VO) is an object-like container created within an Execution Context. It stores the variables and function declarations defined within that Execution Context.

In the GEC, for each variable declared with the `var` keyword, a property is added to VO that points to that variable and is set to 'undefined'.

Also, for every function declaration, a property is added to the VO, pointing to that function, and that property is stored in memory. This means that all the function declarations will be stored and made accessible inside the VO, even before the code starts running.

The FEC, on the other hand, does not construct a VO. Rather, it generates an array-like object called the 'argument' object, which includes all of the arguments supplied to the function. Learn more about the argument object [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).

This process of storing variables and function declaration in memory prior to the execution of the code is known as ****Hoisting****. Since this is an important concept, we'll talk about it briefly before moving on to the next stage.

### **Hoisting in JavaScript**

Function and variable declarations are hoisted in JavaScript. This means that they are stored in memory of the current Execution Context's VO and made available within the Execution Context even before the execution of the code begins.

#### **Function Hoisting**

In most scenarios when building an application, developers can choose to define functions at the top of a script, and only later call them down the code, like so:

![Defining function before calling it](https://draftin.com/images/79494?token=YN6tf3hHdryoQ_-X21KVPtEXGRBz_Dw9OUxqdrAVt_pWiFUsGRMMBx6D_h1K0HfC3qRXzO-26ehoAggF_3iI2zI)

However, due to hoisting, the opposite will still work. Where we can call functions first then define them later down the script.

![calling function before defining it](https://draftin.com/images/79495?token=cnn01YgRW9kx9QJJexa7sI5TfUlszgBJ_lWdA6pVGx5ycLBimXDDTbehVxQJk4yXyIMRljImSJr3Qb7k4JjTrMo)

In the code above, the `getAge` function declaration will be stored in the memory of the VO, making it available for use even before it is defined.

#### **Variable Hoisting**

Variables initialized with the `var` keyword are stored in the memory of the current Execution Context's VO as a property, and initialized with the value `undefined`. This means, unlike functions, trying to access the value of the variable before it is defined will result in `undefined`.

![ Accessing variables  before defining them](https://draftin.com/images/79496?token=SQT13ymrPtfOLR-kvvjLVwSEyN9Fq7G-4iy88QROSjz-YOYgphDdKCRYZkpvt8mfJ-eHWLU3igHOZnv9sYcffIE)

#### **Ground Rules of Hoisting**

Hoisting only works for function declarations, not expressions. Here is an example of a function expression where the code execution will break.

```javascript
getAge(1990); 
var getAge = function (yearOfBirth) {
console.log(new Date().getFullYear - yearOfBirth) 
};
```

The code execution breaks, because with function expressions, `getAge` will be hoisted as a variable not as a function. And with variable hoisting, its value will be set to `undefined`. That's why we get the error:

![getAge error](https://draftin.com/images/79503?token=R_gK6Xb3UAcAOlqSdk2-nn8wH6DhoDlBv-HW5ZujAhResANORl1BvYoauNh_HTOcD3VFaGTM09uEUUVXeW6y9pk)

Also, variable hoisting does not work for variables initialized with the `let` or `const` keyword. Trying to access a variable ahead of declaration and use the `let` and `const` keywords to declare it later will result in a `ReferenceError`.

In this case, they will be hoisted but not assigned with the default value of `undefined`. `js console.log(name); let name = "Victor";` will throw the error:

![name not defined error](https://draftin.com/images/79502?token=lgEf4T8VWKK6Tw7BS7s0TU86ZcnqfkOr7rIloCV2uxj0K4OsnFphlFWgMqm98LBmt88uE_CpjXn-D4TFnwdZdcY)

### **Creation Phase: Creation of The Scope Chain**

After the creation of the Variable Object (VO) comes the creation of the Scope Chain as the next stage in the creation phase of an Execution Context.

Scope in JavaScript is a mechanism that determines how accessible a piece of code is to other parts of the codebase. Scope answers the questions: from where can a piece of code be accessed? From where can't it be accessed? What can access it, and what can't?

Each Function Execution Context creates its scope: the space/environment where the variables and functions it defined can be accessed via a process called Scoping.

This means the position of something within a codebase, that is, where a piece of code is located.

When a function is defined in another function, the inner function has access to the code defined in that of the outer function, and that of its parents. This behavior is called ****lexical scoping****.

However, the outer function does not have access to the code within the inner function.

This concept of scope brings up an associate phenomenon in JavaScript called closures. These are when inner functions that always get access to the code associated with the outer functions, even after the execution of the outer functions is complete. You can learn more closures [here](https://www.freecodecamp.org/news/scope-and-closures-in-javascript/).

Let's look at some examples to get a better understanding:

![first-scope.png](https://www.freecodecamp.org/news/content/images/2022/02/first-scope.png)

-   On the right is the Global Scope. It is the default scope created when a `.js` script is loaded and is accessible from all functions throughout the code.
-   The red box is the scope of the `first` function, which defines the variable `b = 'Hello!'` and the `second` function.

![second-scope](https://www.freecodecamp.org/news/content/images/2022/02/second-scope.png)

-   In green is the scope of the `second` function. There is a `console.log` statement which is to print the variables `a`, `b` and `c`.

Now the variables `a` and `b` aren't defined in the `second` function, only `c`. However, due to lexical scoping, it has access to the scope of the function it sits in and that of its parent.

In running the code, the JS engine will not find the variable `b` in the scope of the `second` function. So, it looks up into the scope of its parents, starting with the `first` function. There it finds the variable `b = 'Hello'`. It goes back to the `second` function and resolves the `b` variable there with it.

Same process for the `a` variable. The JS engine looks up through the scope of all its parents all the way to the scope of the GEC, resolving its value in the `second` function.

This idea of the JavaScript engine traversing up the scopes of the execution contexts that a function is defined in in order to resolve variables and functions invoked in them is called the ****scope chain****.

![Scope chain](https://www.freecodecamp.org/news/content/images/2022/02/scope-chain.png)

Only when the JS engine can't resolve a variable within the scope chain does it stop executing and throws an error.

However, this doesn't work backward. That is, the global scope will never have access to the inner function’s variables unless they are `returned` from the function.

The scope chain works as a one-way glass. You can see the outside, but people from the outside cannot see you.

And that is why the red arrow in the image above is pointing upwards because that is the only direction the scope chains goes.

### Creation Phase: Setting The Value of The "this" Keyword

The next and final stage after scoping in the creation phase of an Execution Context is setting the value of the `this` keyword.

The JavaScript `this` keyword refers to the scope where an Execution Context belongs.

Once the scope chain is created, the value of `'this'` is initialized by the JS engine.

##### **`"this"` in The Global Context**

In the GEC (outside of any function and object), `this` refers to the global object — which is the `window` object.

Thus, function declarations and variables initialized with the `var` keyword get assigned as properties and methods to the global object – `window` object.

This means that declaring variables and functions outside of any function, like this:

```javascript
var occupation = "Frontend Developer"; 

function addOne(x) { 
    console.log(x + 1) 
}
```

Is exactly the same as:

```javascript
window.occupation = "Frontend Developer"; 
window.addOne = (x) => { 
console.log(x + 1)
};
```

Functions and variables in the GEC get attached as methods and properties to the window object. That's why the snippet below will return true.

![Prove that variables are attached as properties to the global object](https://draftin.com/images/79543?token=ck__e2qKafuzGqTisEhH0ocoJ6NI-CbQZK_gcjDeCBbCSG2ILtYtoL8aalLkryglnMlXo0Ie7HUv0qdymARfpfk)

##### **`"this"` in Functions**

In the case of the FEC, it doesn't create the `this` object. Rather, it get's access to that of the environment it is defined in.

Here that'll be the `window` object, as the function is defined in the GEC:

```Javascript
var msg = "I will rule the world!"; 

function printMsg() { 
    console.log(this.msg); 
} 

printMsg(); // logs "I will rule the world!" to the console.
```

In objects, the `this` keyword doesn't point to the GEC, but to the object itself. Referencing `this` within an object will be the same as:

`theObject.thePropertyOrMethodDefinedInIt;`

Consider the code example below:

```js
var msg = "I will rule the world!"; 
const Victor = {
    msg: "Victor will rule the world!", 
    printMsg() { console.log(this.msg) }, 
}; 

Victor.printMsg(); // logs "Victor will rule the world!" to the console.
```

The code logs `"Victor will rule the world!"` to the console, and not `"I will rule the world!"` because in this case, the value of the `this` keyword the function has access to is that of the object it is defined in, not the global object.

With the value of the `this` keyword set, all the properties of the Execution Context Object have been defined. Leading to the end of the creation phase, now the JS engine moves on to the execution phase.

### **The Execution Phase**

Finally, right after the creation phase of an Execution Context comes the execution phase. This is the stage where the actual code execution begins.

Up until this point, the VO contained variables with the values of `undefined`. If the code is run at this point it is bound to return errors, as we can't work with undefined values.

At this stage, the JavaScript engine reads the code in the current Execution Context once more, then updates the VO with the actual values of these variables. Then the code is parsed by a parser, gets transpired to executable byte code, and finally gets executed.

## **JavaScript Execution Stack**

The Execution Stack, also known as the ****Call Stack****, keeps track of all the Execution Contexts created during the life cycle of a script.

JavaScript is a single-threaded language, which means that it is capable of only executing a single task at a time. Thus, when other actions, functions, and events occur, an Execution Context is created for each of these events. Due to the single-threaded nature of JavaScript, a stack of piled-up execution contexts to be executed is created, known as the `Execution Stack`.

When scripts load in the browser, the Global context is created as the default context where the JS engine starts executing code and is placed at the bottom of the execution stack.

The JS engine then searches for function calls in the code. For each function call, a new FEC is created for that function and is placed on top of the currently executing Execution Context.

The Execution Context at the top of the Execution stack becomes the active Execution Context, and will always get executed first by the JS engine.

As soon as the execution of all the code within the active Execution Context is done, the JS engine pops out that particular function's Execution Context of the execution stack, moves towards the next below it, and so on.

To understand the working process of the execution stack, consider the code example below:

```javascript
var name = "Victor";

function first() {
  var a = "Hi!";
  second();
  console.log(`${a} ${name}`);
}

function second() {
  var b = "Hey!";
  third();
  console.log(`${b} ${name}`);
}

function third() {
  var c = "Hello!";
  console.log(`${c} ${name}`);
}

first();
```

First, the script is loaded into the JS engine.

After it, the JS engine creates the GEC and places it at the base of the execution stack.

![Global Context](https://draftin.com/images/79466?token=aeIwtXG5K8Jo2fFYn2kF-DFfHG42sGgVbk0oXjMoTKGsM5JMUIWRxwmyTT1rPWGfEawiy4AuWFTXGo0z88EeKpI)

The `name` variable is defined outside of any function, so it is in the GEC and stored in it's VO.

The same process occurs for the `first`, `second`, and `third` functions.

Don't get confused as to why they functions are still in the GEC. Remember, the GEC is only for JavaScript code (variables and functions) that are ****not inside of any function****. Because they were not defined within any function, the function declarations are in the GEC. Make sense now 😃?

When the JS engine encounters the `first` function call, a new FEC is created for it. This new context is placed on top of the current context, forming the so-called `Execution Stack`.

![Execution Context 1](https://draftin.com/images/79467?token=xQ-BHEbdDUELy8Fdc-1EEtTCotEz9XUa97k2kd30mqkkaUi3FpTcZCldH5LonsEICY2SO0OajgQ_4S97GgPlo-A)

For the duration of the `first` function call, its Execution Context becomes the active context where JavaScript code is first executed.

In the `first` function the variable `a = 'Hi!'` gets stored in its FEC, not in the GEC.

Next, the `second` function is called within the `first` function.

The execution of the `first` function will be paused due to the single-threaded nature of JavaScript. It has to wait until its execution, that is the `second` function, is complete.

Again the JS engine sets up a new FEC for the `second` function and places it at the top of the stack, making it the active context.

![Execution Context 2](https://draftin.com/images/79468?token=IcUBwl6WR9ylJlmuVT2DzLt9OgBG1ipHTb7zepJ_kH7Y7HG4mIBCLEtZYvrqphzokDVFGMC5hiVxwcSQhbEeIpk)

The `second` function becomes the active context, the variable `b = 'Hey!';` gets store in its FEC, and the `third` function is invoked within the `second` function. Its FEC is created and put on top of the execution stack.

![Execution Context 3](https://www.freecodecamp.org/news/content/images/2022/02/Execution-Context-3.png)

Inside of the `third` function the variable `c = 'Hello!'` gets stored in its FEC and the message `Hello! Victor` gets logged to the console.

Hence the function has performed all its tasks and we say it `returns`. Its FEC gets removed from the top of the stack and the FEC of the `second` function which called the `third` function gets back to being the active context.

![Execution Context 2](https://draftin.com/images/79468?token=IcUBwl6WR9ylJlmuVT2DzLt9OgBG1ipHTb7zepJ_kH7Y7HG4mIBCLEtZYvrqphzokDVFGMC5hiVxwcSQhbEeIpk)

Back in the `second` function, the message `Hey! Victor` gets logged to the console. The function completes its task, `returns`, and its Execution Context gets popped off the call stack.

![Execution Context 1](https://draftin.com/images/79467?token=xQ-BHEbdDUELy8Fdc-1EEtTCotEz9XUa97k2kd30mqkkaUi3FpTcZCldH5LonsEICY2SO0OajgQ_4S97GgPlo-A)

When the first function gets executed completely, the execution stack of the first function popped out from the stack. Hence, the control reaches back to the GEC of the code.

![Global Context](https://draftin.com/images/79466?token=aeIwtXG5K8Jo2fFYn2kF-DFfHG42sGgVbk0oXjMoTKGsM5JMUIWRxwmyTT1rPWGfEawiy4AuWFTXGo0z88EeKpI)

And lastly, when the execution of the entire code gets completed, the JS engine removes the GEC from the current stack.

## **Global Execution Context VS. Function Execution Context in JavaScript**

Since you've read all the way until this section, let's summarize the key points between the GEC and the FEC with the table below.

| GLOBAL EXECUTION CONTEXT | Function Execution Context |
| --- | --- |
| Creates a Global Variable object that stores function and variables declarations. | Doesn't create a Global Variable object. Rather, it creates an argument object that stores all the arguments passed to the function. |
| Creates the \`this\` object that stores all the variables and functions in the Global scope as methods and properties. | Doesn't create the \`this\` object, but has access to that of the environment in which it is defined. Usually the \`window\` object. |
| Can't access the code of the Function contexts defined in it | Due to scoping, has access to the code(variables and functions) in the context it is defined and that of its parents |
| Sets up memory space for variables and functions defined globally | Sets up memory space only for variables and functions defined within the function. |

## **Conclusion**

JavaScript's Execution Context is the basis for understanding many other fundamental concepts correctly.

The Execution Context (GEC and FEC), and the call stack are the processes carried out under the hood by the JS engine that let our code run.

Hope now you have a better understanding in which order your functions/code run and how JavaScript Engine treats them.

As a developer, having a good understanding of these concepts helps you:

-   Get a decent understanding of the ins and outs of the language.
-   Get a good grasp of a language’s underlying/core concepts.
-   Write clean, maintainable, and well-structured code, introducing fewer bugs into production.

All this will make you a better developer overall.

Hope you found this article helpful. Do share it with your friends and network, and feel free to connect with me on [Twitter](https://twitter.com/Victor_codejs) and my [blog](https://vickyikechukwu.hashnode.dev/) where I share a wide range of free educational articles and resources. This really motivates me to publish more.

Thanks for reading, and happy coding!
