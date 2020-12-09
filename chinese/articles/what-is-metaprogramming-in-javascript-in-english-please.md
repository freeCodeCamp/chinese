> * 原文地址：[What is Metaprogramming in JavaScript? In English, please. 什么是 JavaScript 元编程](https://www.freecodecamp.org/news/what-is-metaprogramming-in-javascript-in-english-please/)
> * 原文作者：TAPAS ADHIKARY
> * 译者：
> * 校对者：

![What is Metaprogramming in JavaScript? In English, please.](https://www.freecodecamp.org/news/content/images/size/w2000/2020/11/cover_freeCodeCamp.png)

JavaScript has many useful features that most developers know about. At the same time, there are some hidden gems that can solve really challenging problems if you're aware of them.

Metaprogramming in JavaScript is one such concept that many of us may not be familiar with. In this article, we will learn about Metaprogramming and how it's useful to us.

With ES6 (ECMAScript 2015), we have support for the  `Reflect`  and  `Proxy`  objects that allow us to do Metaprogramming with ease. In this article, we'll learn how to use them with examples.

# What is Metaprogramming?

`Metaprogramming`  is nothing less than the  _magic in programming_! How about writing a program that reads, modifies, analyzes, and even generates a program? Doesn't that sound wizardly and powerful?

![](https://lh5.googleusercontent.com/elwIjsjlSeV2c9VBF07ZDHmurJ5_NdeIJ0bDOSNpNai644OhE90gDbGlyOnL4xea5D7S6s9M17V3w4h3zgpr8Q9sn3Ke8BuzPJySs4JI6J0v0jvgX6eSdalnFdULzTWh85IjQMFGjYX-ymmAOA)

Metaprogramming is magic

Here's how I would describe Metaprogramming as a developer who uses it all the time:

> `Metaprogramming`  is a programming technique in which computer programs have the ability to treat other programs as their data. This means that a program can be designed to read, generate, analyze, or transform other programs, and even modify itself while running.

Simply put, Metaprogramming involves writing code that can

-   Generate code
-   Manipulate language constructs at the run time. This phenomenon is known as  `Reflective Metaprogramming`  or  `Reflection`.

## What is Reflection in Metaprogramming?

`Reflection`  is a branch of Metaprogramming. Reflection has three sub-branches:

1.  **Introspection**: Code is able to inspect itself. It is used to discover very low-level information about the code.
2.  **Self-Modification**: As the name suggests, code is able to modify itself.
3.  **Intercession**: Acting on behalf of somebody else. This can be achieved by wrapping, trapping, intercepting.

ES6 gives us the  `Reflect`  object (aka, Reflect API) to achieve  `Introspection`. The  `Proxy`  object of ES6 helps us with  `Intercession`. We won't talk too much about `Self-Modification`  as we want to stay away from it as much as possible.

Hang on a second! Just to be clear, Metaprogramming wasn't introduced in ES6. Rather, it has been available in the language from its inception. ES6 just made it a lot easier to use.

## Pre-ES6 era of Metaprogramming

Do you remember  `eval`? Let's have a look at how it was used:

```js
const blog = {
    name: 'freeCodeCamp'
}
console.log('Before eval:', blog);

const key = 'author';
const value = 'Tapas';
testEval = () => eval(blog.</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>key<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);"> = '</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>value<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">');
// Call the function
testEval();

```

As you may notice, the  `eval`  helped with additional code generation. In this case, the object  `blog`  has been modified with an additional property at execution time.

```shell
Before eval: {name: freeCodeCamp}
After eval magic: {name: "freeCodeCamp", author: "Tapas"}

```

### Introspection

Before the inclusion of the  `Reflect object`  in ES6, we could still do introspection. Here is an example of reading the structure of the program:

```js
var users = {
    'Tom': 32,
    'Bill': 50,
    'Sam': 65
};

```

Here we are reading the  `users`  object structure and logging the key-value in a sentence.

```shell
User Tom is 32 years old!
User Bill is 50 years old!
User Sam is 65 years old!

```

### Self Modification

Let's take a blog object that has a method to modify itself:

```js
var blog = {
    name: 'freeCodeCamp',
    modifySelf: function(key, value) {blog[key] = value}
}

```

The  `blog`  object can modify itself by doing this:

```js
blog.modifySelf('author', 'Tapas');

```

### Intercession

`Intercession`  is about acting on behalf of something else by changing the language's semantics. The `Object.defineProperty()`  method can change an object's semantics:

```js
var sun = {};
Object.defineProperty(sun, 'rises', {
    value: true,
    configurable: false,
    writable: false,
    enumerable: false
});

```

Output,

```shell
sun rises true
sun rises true

```

As you see, the  `sun`  object was created as a normal object and then the semantic has been changed so that it is not writable.

Now let's jump into understanding the  `Reflect`  and  `Proxy`  objects with their respective usages.

# The Reflect API

In ES6, Reflect is a new  `Global Object`  (like math) that provides a number of utility functions, many of which appear to overlap with ES5 methods defined on the global  `Object`.

All these functions are Introspection functions where you could query some internal details about the program at the run time.

Here is the list of available methods from the  `Reflect`  object. Please  [visit this page][1]  to see more details of each of these methods.

```js
// Reflect object methods

```

But wait, here's a question: Why do we need a new API object when these could just exist already or could be added to  `Object`  or  `Function`?

Confused? Let's try to figure this out.

### All in one namespace

JavaScript already had support for object reflection. But these APIs were not organized under one namespace. Since ES6 they're now under  `Reflect`.

Unlike most global objects, Reflect is not a constructor. You cannot use it with a new operator or invoke the Reflect object as a function. All properties and methods of  `Reflect`  are  `static`  like the math object.

### Simple to use

The  `introspection`  methods of  `Object`  throw an exception when they fail to complete the operation. This is an added burden to the consumer (programmer) to handle that exception in the code.

You may prefer to handle it as a  `boolean(true | false)`  instead of using exception handling. The Reflect object helps you do that.

Here's an example with Object.defineProperty:

```js
 try {
        Object.defineProperty(obj, name, desc);
        // property defined successfully
    } catch (e) {
        // possible failure and need to do something about it
    }
```

And with the Reflect API:

```js
if (Reflect.defineProperty(obj, name, desc)) {
  // success
} else {
 // failure (and far better)
}

```

### The impression of the First-Class operation

We can find the existence of a property for an object as  `(prop in obj)`. If we need to use it multiple times in our code, we must explicitly wrap this operation in a function and pass the operation around as a first-class value.

In ES6, we already had those as part of the  `Reflect API`  as the first-class function. For example, Reflect.has(obj, prop) is the functional equivalent of (prop in obj).

Let's look at another example: Delete an object property.

```js
const obj = { bar: true, baz: false};

```

With the Reflect API:

```js
// With Reflect API
Reflect.deleteProperty(obj, 'bar');

```

### A more reliable way of using the apply() method

In ES5, we can use the  `apply()`  method to call a function with a given  `this`  value and passing an array as an argument.

```js
Function.prototype.apply.call(func, obj, arr);
// or
func.apply(obj, arr);

```

This is less reliable because  `func`  could be an object that would have defined its own  `apply`  method.

In ES6 we have a more reliable and elegant way of solving this:

```js
Reflect.apply(func, obj, arr);

```

In this case, we will get a  [`TypeError`][2]  if  `func`  is not callable. Also,  `Reflect.apply()`  is less verbose and easier to understand.

### Helping other kinds of reflection

We  will see what this means in a bit when we learn about the  `Proxy`  object. The Reflect API methods can be used with Proxy in many use cases.

# The Proxy Object

ES6's  `Proxy`  object helps in  `intercession`.

The  `proxy`  object defines custom behaviors for fundamental operations (for example, property lookup, assignment, enumeration, function invocation, and so on).

Here are a few useful terms you need to remember and use:

-   The  `target`: An object which the proxy virtualizes.
-   The  `handler`: A placeholder object which contains traps.
-   The  `trap`: Methods that provide property access to the target object.

It is perfectly fine if you don't quite understand yet from the description above. We will get a grasp of it through code and examples in a minute.

The syntax to create a Proxy object is as follows:

```js
let proxy = new Proxy(target, handler);

```

There are many proxy traps (handler functions) available to access and customize a target object. Here is the list of them. You can read a more detailed description of  [traps here][3].

```js
handler.apply()
handler.construct()
handler.get()
handler.has()
handler.ownKeys()
handler.set()
handler.setPrototypeOf()
handler.getPrototypeOf()
handler.defineProperty()
handler.deleteProperty()
handler.getOwnPropertyDescriptor()
handler.preventExtensions()
handler.isExtensible()

```

Note that each of the traps has a mapping with the  `Reflect`  object's methods. This means that you can use  `Reflect`  and  `Proxy`  together in many use cases.

## How to get unavailable object property values

Let's look at an example of an  `employee`  object and try to print some of its properties:

```js
const employee = {
    firstName: 'Tapas',
    lastName: 'Adhikary'
};

```

The expected output is the following:

```shell
Tapas
Adhikary
undefined
undefined

```

Now let's use the Proxy object to add some custom behavior to the  `employee`  object.

### Step 1: Create a Handler that uses a get trap

We will use a trap called  `get`  which lets us get a property value. Here is our handler:

```js
let handler = {
    get: function(target, fieldName) {        
    <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">if</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>fieldName <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">===</span> <span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'fullName'</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">{</span>
        <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> <span class="token template-string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline;"><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">`</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>target<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>firstName<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);"> </span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>target<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>lastName<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">`</span></span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">;</span>
    <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>

    <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> fieldName <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">in</span> target <span class="token operator" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(154, 110, 58);">?</span>
        target<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">[</span>fieldName<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">]</span> <span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">:</span>
            <span class="token template-string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline;"><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">`No such property as, '</span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>fieldName<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">'!`</span></span>

<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>
```

The above handler helps to create the value for the  `fullName`  property. It also adds a better error message when an object property is missing.

### Step 2: Create a Proxy Object

As we have the target  `employee`  object and the handler, we will be able to create a Proxy object like this:

```js
let proxy = new Proxy(employee, handler);

```

### Step 3: Access the properties on the Proxy object

Now we can access the employee object properties using the proxy object, like this:

```js
console.log(proxy.firstName);
console.log(proxy.lastName);
console.log(proxy.org);
console.log(proxy.fullName);

```

The output will be:

```shell
Tapas
Adhikary
No such property as, 'org'!
Tapas Adhikary

```

Notice how we have magically changed things for the  `employee`  object!

## Proxy for Validation of Values

Let's create a proxy object to validate an integer value.

### Step 1: Create a handler that uses a set trap

The handler looks like this:

```js
const validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if(!Number.isInteger(value)) {
                throw new TypeError('Age is always an Integer, Please Correct it!');
            }
            if(value < 0) {
                throw new TypeError('This is insane, a negative age?');
            }
        }
    }
};

```

### Step 2: Create a Proxy Object

Create a proxy object like this:

```js
let proxy = new Proxy(employee, validator);

```

### Step 3: Assign a non-integer value to a property, say, age

Try doing this:

```js
proxy.age = 'I am testing a blunder'; // string value

```

The output will be like this:

```shell
TypeError: Age is always an Integer, Please Correct it!
    at Object.set (E:\Projects\KOSS\metaprogramming\js-mtprog\proxy\userSetProxy.js:28:23)
    at Object.<anonymous> (E:\Projects\KOSS\metaprogramming\js-mtprog\proxy\userSetProxy.js:40:7)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:188:16)
    at bootstrap_node.js:609:3

```

Similarly, try doing this:

```js
p.age = -1; // will result in error

```

## How to use Proxy and Reflect together

Here is an example of a handler where we use methods from the Reflect API:

```js
const employee = {
    firstName: 'Tapas',
    lastName: 'Adhikary'
};
let logHandler = {
    get: function(target, fieldName) {        console.log("Log: ", target[fieldName]);
    <span class="token comment" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(112, 128, 144);">// Use the get method of the Reflect object</span>
    <span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">return</span> Reflect<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">get</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>target<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">,</span> fieldName<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">;</span>
<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span>};
let func = () => {
    let p = new Proxy(employee, logHandler);
    p.firstName;
    p.lastName;
};

```

## A few more Proxy use cases

There are several other use-cases where this concept can be used.

-   To protect the  _ID_  field of an object from deletion (trap: deleteProperty)
-   To trace Property Accesses (trap: get, set)
-   For Data Binding (trap: set)
-   With revocable references
-   To manipulate the  `in`  operator behavior

... and many more.

# Metaprogramming Pitfalls

While the concept of  `Metaprogramming`  gives us lots of power, the magic of it can go the wrong way sometimes.

![](https://www.freecodecamp.org/news/content/images/2020/11/black_magic.gif)

Be careful of the other side of the magic

Be careful of:

-   Too much  `magic`! Make sure you understand it before you apply it.
-   Possible performance hits when you're making the impossible possible
-   Could be seen as counter-debugging.

# In Summary

To summarize,

-   `Reflect`  and  `Proxy`  are great inclusions in JavaScript to help with Metaprogramming.
-   Lots of complex situations can be handled with their help.
-   Be aware of the downsides as well.
-   [ES6 Symbols][4]  also can be used with your existing classes and objects to change their behavior.

I hope you found this article insightful. All the source code used in this article can be found in my  [GitHub repository][5].

Please share the article so others can read it as well. You can @ me on Twitter ([@tapasadhikary][6]) with comments, or feel free to follow me.

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
[4]: https://blog.greenroots.info/explain-me-like-i-am-five-what-are-es6-symbols-ckeuz5sb8001qafs14of305dw
[5]: https://github.com/atapas/js-mtprog
[6]: https://twitter.com/tapasadhikary
