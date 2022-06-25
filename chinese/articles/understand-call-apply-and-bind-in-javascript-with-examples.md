> -  原文地址：[How to Use the Call, Apply, and Bind Functions in JavaScript – with Code Examples](https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/)
> -  原文作者：[Keyur Paralkar](https://www.freecodecamp.org/news/author/keyurparalkar/)
> -  译者：Irenia111
> -  校对者：

![How to Use the Call, Apply, and Bind Functions in JavaScript – with Code Examples](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/Screenshot-2022-06-14-at-8.53.33-PM-1.png)

In this article, I am going to explain how to use call, apply, and bind in JavaScript with simple examples.

We will also implement an example that showcases how you can create your own map function with the apply function.

Without further ado, let's get started.

## Table of Contents

-   [Prerequisites](#prerequisites)
-   [Definitions](#definitions)
-   [How to use the call function in JavaScript](#how-to-use-the-call-function-in-javascript)
-   [How to use the apply function in JavaScript](#how-to-use-the-apply-function-in-javascript)
-   [How to use the bind function in JavaScript](#how-to-use-the-bind-function-in-javascript)
-   [How to create your own map function](#how-to-create-your-own-map-function)
-   [Summary](#summary)

## Prerequisites

Here are some of the things you should understand to get the most out of this article:

-   [Functions](https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/)
-   [Function Prototypes](https://www.freecodecamp.org/news/all-you-need-to-know-to-understand-javascripts-prototype-a2bff2d28f03/)
-   [This keyword](https://www.freecodecamp.org/news/what-is-this-in-javascript/)

## Definitions

Let's look at the functions we'll be studying here a bit more closely to understand what they do.

**Call** is a function that helps you change the context of the invoking function. In layperson's terms, it helps you replace the value of `this` inside a function with whatever value you want.

**Apply** is very similar to the `call` function. The only difference is that in `apply` you can pass an array as an argument list.

**Bind** is a function that helps you create another function that you can execute later with the new context of `this` that is provided.

Now we will look at some basic examples of the call, apply, and bind functions. Then we will look at an example were we will be constructing our own function similar to the map function.

## How to Use the Call Function in JavaScript

`call` is a function that you use to change the value of `this` inside a function and execute it with the arguments provided.

Here is the syntax of the `call` function:

```Javascript

func.call(thisObj, args1, args2, ...)

```

Where,

-   **func** is a function that needs to be invoked with a different `this` object
-   **thisObj** is an object or a value that needs to be replaced with the `this` keyword present inside the function `func`
-   **args1, args2** are arguments that are passed to the invoking function with the changed `this` object.

Note that if you invoke a function without any `thisObj` argument, then JavaScript considers this property to be a global object.

Now that we have some context around what the `call` function is, let's start off by understanding it in more detail with some examples.

### How to call a function with different contexts in JS

Consider the below example. It consists of 3 classes – `Car`, `Brand1`, and `Brand2`.

```Javascript
function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
	Car.call(this, "convertible", "petrol");
	this.brand = brand;
	console.log(`Car details = `, this);
}

function definePrice(price){
	Car.call(this, "convertible", "diesel");
	this.price = price;
	console.log(`Car details = `, this);
}

const newBrand = new setBrand('Brand1');
const newCarPrice = new definePrice(100000);
```

[](https://www.canva.com/design/DAFD4b369JM/watch?utm_content=DAFD4b369JM&utm_campaign=designshare&utm_medium=embeds&utm_source=link)

If you look carefully, you can see that we use the `call` function to invoke the `Car` function on two occasions. Firstly, in the `setBrand` and then in the `definePrice` functions.

In both of these functions, we invoke the `Car` function with `this` object representing to the respective functions themselves. For example, inside `setBrand`, we call the `Car` function with the `this` object belonging to its context. The case is similar for `definePrice`.

### How to call a function with no arguments in JS

Consider the below example:

```Javascript
const newEntity = (obj) => console.log(obj);

function mountEntity(){
	this.entity = newEntity;
	console.log(`Entity ${this.entity} is mounted on ${this}`);
}

mountEntity.call();
```

In this example, we invoked the function `mountEntity` with no `thisObj` argument. In such cases, JavaScript refers to the global object.

## How to Use the Apply Function in JavaScript

The `Apply` function is very similar to the `Call` function. The only difference between `call` and `apply` is the difference in how arguments are passed.

In `apply`, arguments you can pass an argument as an array literal or a new array object.

Here is the syntax for the `apply` function:

```Javascript
func.apply(thisObj, argumentsArray);
```

Where,

-   **func** is a function that needs to be invoked with a different `this` object
-   **thisObj** is an object or a value that needs to be replaced with the `this` keyword present inside the function `func`
-   **argumentsArray** can be an array of arguments, array object, or the [arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) keyword itself.

As you can see above, the `apply` function has different types of syntaxes.

The first syntax is a simple one. You can pass in an array of arguments like below:

```Javascript
func.apply(thisObj, [args1, args2, ...]);
```

The second syntax is where we can pass in the new array object to it:

```Javascript
func.apply(thisObj, new Array(args1, args2));
```

The third syntax is where we can pass in the arguments keyword:

```Javascript
func.apply(thisObj, arguments); 
```

[arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) is a special object available inside a function. It contains values of the arguments that are passed to a function. You can use this keyword with the `apply` function to take any number of arbitrary arguments.

The best part about `apply` is we don’t need to take care of the number of arguments that are passed to the invoking function. Because of its dynamic and versatile nature, you can use it in complicated situations.

Let’s look at the same example as above, but this time we'll use the `apply` function.

```Javascript
function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
	Car.apply(this, ["convertible", "petrol"]); //Syntax with array literal
	this.brand = brand;
	console.log(`Car details = `, this);
}

function definePrice(price){
	Car.apply(this, new Array("convertible", "diesel")); //Syntax with array object construction
	this.price = price;
	console.log(`Car details = `, this);
}

const newBrand = new setBrand('Brand1');
const newCarPrice = new definePrice(100000);
```

And here is an example that showcases how you'd use the `arguments` keyword:

```Javascript
function addUp(){
		//Using arguments to capture the arbitrary number of inputs
    const args = Array.from(arguments); 
    this.x = args.reduce((prev, curr) => prev + curr, 0);
    console.log("this.x = ", this.x);
}

function driverFunc(){
    const obj = {
        inps: [1,2,3,4,5,6]
    }
    addUp.apply(obj, obj.inps);
}

driverFunc();
```

## How to Use the Bind Function in JavaScript

The `bind` function creates a copy of a function with a new value to the `this` present inside the calling function.

Here is the syntax for the `bind` function:

```Javascript
func.bind(thisObj, arg1, arg2, ..., argN);
```

Where,

-   **func** is a function that needs to be invoked with a different `this` object
-   **thisObj** is an object or a value that needs to be replaced with the `this` keyword present inside the function `func`
-   **arg1, arg2…argN** – you can pass 1 argument to the calling function or more than that, similar to the `call` function.

The `bind` function then returns a new function that consists of a new context to the `this` variable present inside the calling function:

```Javascript
func(arg1, arg2);
```

Now this function `func` can be executed later with the arguments.

Let's look at a classic example of how to use a `bind` function with the help of a class-based React component:

```JSX
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
  }
  handleCode() {
    console.log("HANDLE CODE THIS = ", this.state);
  }
  render() {
    return <button onClick={this.handleCode}>Click Me</button>;
  }
}
```

Consider the above App component. It constitutes the following things:

-   `constructor` is a function that gets called a class and is instantiated with a `new` keyword.
-   `render` is a function that executes/renders the JSX code.
-   `handleCode` is a class method that logs the state of the component.

If we click on the `Click Me` button then we will receive an error stating: `Cannot read properties of undefined (reading 'state')`.

Have you ever wondered why this issue occurs? 🤔🤔

You might be expecting that we should be able to access the state of the class since `handleCode` is a class method. But here is the catch:

-   `this` inside the `handleCode` is not same as that of the class’s `this`.
-   Inside a class, `this` is a regular object that has non-static class methods as its properties. But `this` inside the `handleCode` will refer to a different context.
-   To be honest, the value of `this` in this scenario depends on from where the functions is being called. If you see, the `handleCode` is being called on `onClick` event.
-   But at this stage, we will get `undefined` for the context of `this` present inside the `handleCode` function.
-   We're trying to call the `state` property of an undefined value. Therefore, this leads to the above error.

We can fix this by providing the right context of `this` inside the `handleCode` method. You can do this with the `bind` method.

```JSX
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
   this.handleCode = this.handleCode.bind(this); //bind this function
  }
  handleCode() {
    console.log("HANDLE CODE THIS = ", this.state);
  }
  render() {
    return <button onClick={this.handleCode}>Click Me</button>;
  }
}
```

The `bind` will create a new function and store it inside the `this` object with a new property as `handleCode`. `Bind` will make sure that the class’s `this` context gets applied to the `this` present inside the `handleCode` function.

## How to Create Your Own `map` Function

Now that we have all the necessary things, let's start off by creating our `own` map function. Let's first understand the things that we will need to build our `own` map function.

Here is the syntax of the `map` function:

```Javascript
arr.map(func)
```

Where,

-   **arr** is an array on which the map is called.
-   **func** is the function that needs to run on each element of an array.

The basic functionality of a `map` function is simple:

It is a function that walks through each element of an array and applies the function that is passed as an argument. The return type of a map is again an array with `func` being applied on each element.

Now we understand the requirements, so we can move on to create our own `map` function. Here is the code of our new `map` function:

```Javascript
function newMap(func){
  let destArr = [];
  const srcArrLen = this.length;
  for(let i = 0; i < srcArrLen; i++){
    destArr.push(func.call(this, this[i]));
  }

  return destArr;
} 
```

Let's understand the above function bit-by-bit:

-   This function accepts an argument called `func`. It's nothing but a function that needs to be called on each element of an array.
-   The other parts of the code are pretty self explanatory. We will focus on the following line: `destArr.push(func.call(this, this[i]));`
-   This line does two things:  
    1\. Pushes the changes into the `destArr`  
    2\. Executes the `func` with the help of `call` method. Here the `call` method (as explained in the previous sections) will execute the `func` method with a new value to the `this` object present inside the `func` method.

Now let's take a look at how we are going to execute our `newMap` function. The below approach of adding a new method to the existing primitive data type is not recommended but still we will do it for the sake of this article.

**NOTE:** do not follow the below approach in your production code. This can cause damage to the existing code.

```Javascript
Object.defineProperty(Array.prototype, 'newMap', {
  value: newMap
}); 
```

`defineProperty` we create a new property inside the `Array.prototype`.

Once this is done, we are good to go with executing our new map function on an array.

```Javascript
const arr = [1,2,3];
const newArr = arr.newMap(item => item + 1);
console.log(newArr);
```

## Summary

This article showed you what the call, apply, and bind functions can do via examples.

So to talk about these functions in brief:

-   Call, apply, and bind are the functions that help you change the context of the `this` keyword present inside the invoking function.
-   We saw how each function can be called in different ways – for example, with `apply` you can execute a function with an array of arguments, and with the `call` function you can execute the same but the arguments are spread via commas.
-   These functions are really useful in class-based components of React.

Thank you for reading!

Follow me on [Twitter](https://twitter.com/keurplkar), [GitHub](https://github.com/keyurparalkar), and [LinkedIn](https://www.linkedin.com/in/keyur-paralkar-494415107/).
