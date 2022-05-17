> -  原文地址：[What Does 'this' Mean in JavaScript? The this Keyword Explained with Examples](https://www.freecodecamp.org/news/what-is-this-in-javascript/)
> -  原文作者：[Kingsley Ubah](https://www.freecodecamp.org/news/author/ubahthebuilder/)
> -  译者：
> -  校对者：

![What Does 'this' Mean in JavaScript? The this Keyword Explained with Examples](https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/0001-2550990419_20210608_114432_0000.png)

To understand what `this` truly means in JavaScript, let's take a look at a very similar concept in the English Language: **Polysemy.**

Let's consider the word "**run**". Run is a single word which could mean many different things depending on the **context**.

-   “I will run home” – means to move quickly on foot
-   “She ran the 1500m” – means to run in a race
-   “He is running for president” – means vying for an official position
-   “The app is running” – means the software application is still open and active
-   “Go for a run” – means running as a form of exercise

_and the list goes on._

A similar scenario plays out when you use the **`this`** keyword in your JavaScript code. When you do so, it automatically resolves to an object or scope depending on the context at which is was defined.

What are the possible contexts? And how can we use that information to deduce which object a **`this` call** will resolve to?

## `this` Context

When used in a function, the `this` keyword simply points to an object to which it is bound. It answers the question of **where it should get some value or data from:**

```js
function alert() { 
 console.log( this.name + 'is calling'); 
}
```

A function with a "this" reference

In the function above, the `this` keyword is referring to an object to which it is bound **so it gets the "name" property from there**.

But how do you know which object the function is bound to? How do you find out what `this` is referring to?

To do so, we need to take a detailed look at how functions are bound to objects.

## Types of Binding in JavaScript

There are generally four kinds of bindings:

-   Default Binding
-   Implicit Binding
-   Explicit Binding
-   Constructor Call Binding

### Default Binding in JavaScript

One of the first rules to remember is that if the function housing a `this` reference is a **standalone function**, then that function is bound to the **global object.**

```javascript
function alert() { 
 console.log( this.name + 'is calling'); 
} 

var name = "Kingsley"; 
alert(); // Kingsley
```

Standalone function

As you can see, `name()` is a standalone, unattached function, so it is bound to the **global scope**. As a result, the `this.name` reference resolves to the global variable **`var name = 'Kingsley'`**.

This rule, however, doesn't hold if `name()` were to be defined in strict mode:

```js
function alert() { 
"use strict"; 
 console.log( this.name + 'is calling' ); 
} 

var name = 'Kingsley'; 
alert(); // TypeError: `this` is `undefined`
```

undefined in strict mode

When set in strict mode, the `this` reference is set to undefined.

### Implicit Binding in JavaScript

Another scenario to look out for is whether the function is attached to an object (its context) **at call site.**

According to the binding rule in JavaScript, a function can use an object as its context only if that object is bound to it at the call site. This form of binding is known as implicit binding.

Here is what I mean by that:

```js
function alert() { 
 console.log( this.age + 'years old' ); 
}

var myObj {
  age: 22,
  alert: alert
 }

myObj.alert() // 22 years old
```

In this example, the first object has a reference of `alert` **explicitly** defined in it. You might be tempted to say that `alert` now owns the object or is now a method on the object. But this really isn't true.

Based on how JavaScript works, the function `alert()` only becomes bound to `myObj` (and hence, becomes a method) when it has the object **attached to it at call site**. So it doesn't matter if the `alert` function is defined as a property in the object or not.

In other words, the first example is no different from this:

```js
function alert() { 
 console.log( this.age + 'years old'); 
}

var myObj {
  age: 22
 }

myObj.alert() // 22 years old
```

alert() not defined in myObj

In this case, even without having `alert` defined as a field in the object, running `obj.alert()` will first insert `alert` as a method in the object before resolving it as its `this` context.

In both of these cases, we say that `alert` is **implicitly bound to its context**. We do that simply by examining the call site.

### Explicit binding in JavaScript

We saw that implicit binding had to do with having a reference in that object (whether pre-defined or inserted at call site).

But what if we want to **force** a function to use an object as its context without putting a property function reference on the object?

We have two utility methods to achieve this: `call()` and `apply()`.

Along with a couple other set of utility functions, these two utilities are available to all functions in JavaScript via the \[\[Prototype\]\] mechanism.

To explicitly bind a function call to a context, you simply have to invoke the `call()` on that function and pass in the context object as parameter:

```js
function alert() { 
 console.log( this.age + 'years old'!'); 
}

var myObj {
  age: 22
 }


alert.call(myObj); // 22 years old
```

Now here's the fun part. Even if you were to pass around that function multiple times to new variables (currying), every invocation will use the same context because it has been locked (explicitly bound) to that object. This is called **hard binding**.

```js
function alert() { 
 console.log( this.age ); 
} 

var obj = { 
 age: 22 
}; 

var bar = function() { 
 alert.call( myobj ); 
}; 

bar(); // 2 
setTimeout( bar, 100 ); // 22 
// a hard-bound `bar` can no longer have its `this` context overridden 
bar.call( window ); // still 22
```

Hard binding

Hard binding is a perfect way to lock a context into a function call and truly make that function into a method.

### Constructor Call Binding in JavaScript

The final and perhaps most interesting kind of binding is the new binding which also accentuates the unusual behavior of JavaScript in comparison to other class-based languages.

When a function is invoked with the `new` keyword in front of it, otherwise known as a **constructor call**, the following things occur:

1.  A brand new object is created (or constructed)
2.  The newly constructed object is \[\[Prototype\]\]-linked to the function that constructed it
3.  The newly constructed object is set as the `this` binding for that function call.

Let's see this in code to get a better understanding:

```js
function giveAge(age) { 
 this.age = age; 
} 
var bar = new giveAge( 22 ); 
console.log( bar.age ); // 22
```

By calling `giveAge(..)` with `new` in front of it, we’ve constructed a new object and set that new object as the `this` for the call of `foo(..)`. So `new` is the final way that you can bind a function call’s `this` .

## Wrapping Up

In summary,

-   The `this` keyword, when used in a function, binds that function to a context object
-   There are four kinds of bindings: _default binding, implicit binding, explicit binding and constructor call binding_ (_new_)
-   Knowing these four rules will help you easily discern the context for a `this` reference.

![An Image Explaining the 'this' keyword](https://www.freecodecamp.org/news/content/images/2021/06/12.png)

An Image Explaining the 'this' keyword

![An Image Explaining the 'this' keyword](https://www.freecodecamp.org/news/content/images/2021/06/13.png)

An Image Explaining the 'this' keyword

If you liked or benefitted from this article and would like to support me, you can buy me a coffee [here](https://buymeacoffee.com/ubahthebuilder).

You can also reach me on [Twitter](https://ubahthebuilder.tech). Be sure to check out my [blog](https://ubahthebuilder.tech) for  more JavaScript and programming related content.

Thanks and see you soon.