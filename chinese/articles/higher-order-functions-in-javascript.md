> -  原文地址：[Higher Order Functions in JavaScript – Beginner's Guide](https://www.freecodecamp.org/news/higher-order-functions-in-javascript/)
> -  原文作者：[Soham De Roy](https://www.freecodecamp.org/news/author/sohamderoy/)
> -  译者：Papaya HUANG
> -  校对者：

![Higher Order Functions in JavaScript – Beginner's Guide](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/Blog-8---Freecodecamp-Banner.png)

In JavaScript, functions are treated as first-class citizens. We can treat functions as values and assign them to another variable, pass them as arguments to another function, or even return them from another function.

This ability of functions to act as first-class functions is what powers higher order functions in JavaScript.

Basically, a function which takes another function as an argument or returns a function is known as a higher order function.

![Group-35](https://www.freecodecamp.org/news/content/images/2022/06/Group-35.png)

Let's deep dive a bit to see both types of implementation, that is:

-   Passing a function as an argument to another function
-   Returning a function from another function

![63eec0636ec9b999bf8c5ee5340dd54a_w200](https://www.freecodecamp.org/news/content/images/2022/06/63eec0636ec9b999bf8c5ee5340dd54a_w200.gif)

## How to Pass a Function as an Argument to Another Function

In this section, we will see how we can send a function as an argument and ultimately how it helps us write cleaner code.

Consider the following code in which we want to create a function which accepts an array as an argument. It filters out all the odd numbers from it and returns all the filtered numbers.

The function will look something like this:

```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function filterOdd(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
console.log(filterOdd(arr));

// Output:
// [ 1, 3, 5, 7, 9, 11 ]
```

The above function returns the filtered array `[ 1, 3, 5, 7, 9, 11 ]` where we have all the odd numbers, as expected.

Now let's say we also want to make a function that filters out and returns all the even numbers. We can very well go ahead and create the following function to achieve this:

```
function filterEven(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
console.log(filterEven(arr));

// Output:
// [ 2, 4, 6, 8, 10 ]
```

Again, as expected, we will get the desired output of an array with all even numbers in it – `[ 2, 4, 6, 8, 10 ]`.

But notice that we are writing a lot of duplicate code in this approach. Both the above functions do a lot of common things, like accepting the original array, creating a new array to store the filtered array, looping through the whole main array, and finally returning the filtered array.

The only difference between both functions is the logic they use to filter out the original array.

For the function `filterOdd` we use the logic of `arr[i] % 2 !== 0` whereas in the `filterEven` function we use the logic `arr[i] % 2 == 0` to filter out the original array.

This is where we can benefit from using higher order functions. The main intention is to create a function to do all the common stuff we did in the above two functions and pass the logic part separately as an argument to this function. Let's see how we can implement this.

Let's make the function which does all the common stuff we performed in the `filterOdd` and `filterEven` functions. This will go something like this:

```
function filterFunction(arr, callback) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]) ? filteredArr.push(arr[i]) : null;
  }
  return filteredArr;
}
```

Ignore the `callback` parameter for now. Notice how in the new `filterFuntion` we kept all the common steps, that is accepting the original array, creating a new array to store the filtered array, looping through the whole main array, and finally returning the filtered array that we were performing in the `filterOdd` and `filterEven` functions.

Now the `callback` parameter basically accepts the logic which will be nothing but another function containing the filtering logic. For filtering the odd and even numbers, respectively, here are the logic functions we need to write:

```
// Function containing logic for filtering out odd numbers

function isOdd(x) {
  return x % 2 != 0;
}

// Function containing logic for filtering out even numbers

function isEven(x) {
  return x % 2 === 0;
}
```

That's it! We now just need to pass the main array, along with the logic function to our `filterFunction` like this:

```
// For filtering out odd numbers

filterFunction(arr, isOdd)
// Output of console.log(filterFunction(arr, isOdd)):
// [ 1, 3, 5, 7, 9, 11 ]

// For filtering out even numbers

filterFunction(arr, isEven)
// Output of console.log(filterFunction(arr, isEven)):
// [ 2, 4, 6, 8, 10 ]
```

This way we are passing logic functions like `isOdd` or `isEven` as arguments to another function `filterFunction`.

We are basically abstracting out the main filtering logic from the main function. We can now pass any other filtering logic as we like to `filterFunction` without needing to change it.

For example, if we want to filter out a number greater than 5 then we just need to write the following filtering logic:

```
function isGreaterThanFive(x) {
  return x > 5;
}
```

and pass it as an argument to `filterFunction`:

```
filterFunction(arr, isGreaterThanFive)

// Output of console.log(filterFunction(arr, isGreaterThanFive)):
// [ 6, 7, 8, 9, 10, 11 ]
```

We can also pass the logic function as an arrow function and get the same result – that is, passing `(x) => x > 5)` in place of `isGreaterThanFive` will give us the same result.

```
filterFunction(arr, (x) => x > 5)

// Output of console.log(filterFunction(arr, (x) => x > 5)):
// [ 6, 7, 8, 9, 10, 11 ]
```

### How to Create Polyfills

We know that JavaScript provides us with some inbuilt higher order functions like `map()`, `filter()`, `reduce()` and so on. Can we recreate our own implementation of these functions? Let's deep dive a little bit more.

We already created our filtering function in the above section. Let's create an array prototype of our `filterFunction` function so that we can use it with any array. This will look something like this:

```
Array.prototype.filterFunction = function (callback) {
  const filteredArr = [];
  for (let i = 0; i < this.length; i++) {
    callback(this[i]) ? filteredArr.push(this[i]) : null;
  }
  return filteredArr;
};
```

In the above code, `this` refers to the array the prototype is called upon. So if we write something like:

```
const arr = [1, 2, 3, 4, 5]
arr.filterFunction(callbackFn)
```

then `this` would refer to the array `arr`.

Now we can use the `filterFunction` just like we use the inbuilt `filter()` function in JS. We can write something like this:

```
arr.filterFunction(isEven)
```

which is similar to calling the inbuilt `filter()` function:

```
arr.filter(isEven)
```

Both the above function calls (that is `arr.filterFunction(isEven)` and `arr.filter(isEven)`) will give us same output, like `[ 2, 4, 6, 8, 10 ]`.

Similarly, we can also pass an arrow function in our prototype implementation as we can pass in the inbuilt `filter()` function.

```
// I
arr.filterFunction((x) => x % 2 != 0)
arr.filter((x) => x % 2 != 0)
// both give the same output on console.log: [ 1, 3, 5, 7, 9, 11 ]

// II
arr.filterFunction((x) => x > 5)
arr.filter((x) => x > 5)
// both give the same output on console.log: [ 6, 7, 8, 9, 10, 11 ]

```

In a way, we have written a polyfill for the inbuilt `filter()` function.

### Function Chaining

We can also implement function chaining with our prototype implementation like we can with the inbuilt `filter()` function. Let's first filter out all the numbers greater than 5. Then from the result, we'll filter out all the even numbers. It will look something like this:

```
// Using our own filterFunction() prototype implementation
arr.filterFunction((x) => x > 5).filterFunction((x) => x % 2 === 0)

//Using the inbuilt filter() implementation
arr.filter((x) => x > 5).filter((x) => x % 2 === 0)

// both give the same output on console.log: [ 6, 8, 10 ]
```

This is how we can use higher order functions in JS to write mode modular, cleaner and, more maintainable code.

Next, let's look at how we can return a function from another function.

![lets-move-on-proceed](https://www.freecodecamp.org/news/content/images/2022/06/lets-move-on-proceed.gif)

## How to Return a Function from Another Function in JavaScript

We can return a function from another function because we treat functions in JavaScript as values. Let's see this through an example:

```
function calculate(operation) {
  switch (operation) {
    case "ADD":
      return function (a, b) {
        console.log(`${a} + ${b} = ${a + b}`);
      };
    case "SUBTRACT":
      return function (a, b) {
        console.log(`${a} - ${b} = ${a - b}`);
      };
  }
}
```

In the above code, when we invoke the function `calculate` with an argument, it switches on that argument and then finally returns an anonymous function. So if we call the function `calculate()` and store its result in a variable and console log it, we will get the following output:

```
const calculateAdd = calculate("ADD");
console.log(calculateAdd);

// Output: 
// [Function (anonymous)]
```

You can see that `calculateAdd` contains an anonymous function that the `calculate()` function returned.

There are two ways to call this inner function which we'll explore now.

### Call the returned function using a variable

In this method, we stored the return function in a variable as shown above and then invoked the variable to in turn invoke the inner function.

Let's see it in code:

```
const calculateAdd = calculate("ADD");
calculateAdd(2, 3);
// Output: 2 + 3 = 5


const calculateSubtract = calculate("SUBTRACT");
calculateSubtract(2, 3);
// Output: 2 - 3 = -1
```

So what'd we do here?

-   We called the `calculate()` function and passed `ADD` as the argument
-   We stored the returned anonymous function in the `calculateAdd` variable, and
-   We invoked the inner returned function by calling `calculateAdd()` with the required arguments.

### Call the returned function using double parentheses

This is a very sophisticated way of calling the inner returned function. We use double parentheses `()()` in this method.

Let's see it in code:

```
calculate("ADD")(2, 3);
// Output: 2 + 3 = 5

calculate("SUBTRACT")(2, 3);
// Output: 2 - 3 = -1
```

You can thinks about this in a similar way to our chaining example above. It's just that instead of chaining functions, we chain the arguments.

The arguments in the first parentheses belong to the outer function, while the arguments in the second parentheses belong to the inner returned function.

The `calculate()` method returns a function as explained earlier, and it is that returned function which is immediately called using the second parentheses.

As I mentioned above, it's a very sophisticated way of calling a function. But once you get the hang of it, it becomes...well quite natural.

One place where we can see this kind of double parentheses notation is in the `connect` method in the `redux` state management library. You can read more about `connect` [here](https://react-redux.js.org/api/connect).

## Summary

In this article, we learned:

-   Why functions are called first class citizens in JS
-   What are higher order functions
-   How to pass a function as an argument to another function
-   How to create an array prototype, function chaining, writing our own polyfill for the inbuilt filter() method
-   How to return a function from another function and different ways to call the returned function

## Wrapup

Thanks for reading! I really hope you found this article on higher order functions useful. Stay tuned for more amazing content. Peace out! 🖖

## Social Links

-   [LinkedIn](https://www.linkedin.com/feed/)
-   [Website](https://www.sohamderoy.dev/)
-   [Blog site](https://blog.sohamderoy.dev/)

![e2bd7ce3fc5f2783f1e210b015cc5fb1](https://www.freecodecamp.org/news/content/images/2022/06/e2bd7ce3fc5f2783f1e210b015cc5fb1.gif)
