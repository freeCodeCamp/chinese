> -  原文地址：[What is a Callback Function in JavaScript? JS Callbacks Example Tutorial](https://www.freecodecamp.org/news/what-is-a-callback-function-in-javascript-js-callbacks-example-tutorial/)
> -  原文作者：[Ilenia Magoni](https://www.freecodecamp.org/news/author/ilenia/)
> -  译者：
> -  校对者：

![What is a Callback Function in JavaScript? JS Callbacks Example Tutorial](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/pexels-pixabay-39656.jpg)

In JavaScript there are higher order methods and functions that accept a function as an argument. These functions used as arguments for other functions are called callback functions.

## What is a callback in JavaScript?

A callback is a function passed as an argument of another function.

This means that the parent function is usually built to use any kind of function. But the callback function, on the other hand, is meant to be used in a specific case (or a restricted number of cases) in which the parent function is used.

## How do you create a callback function in JavaScript?

You create a callback function just like any other function in JavaScript:

```javascript
function callbackFunction () {
    
}
```

The difference between a callback function and any other function is how it's used.

A callback function is specifically built to be used as argument of another function.

```javascript
function anyFunction(fun) {
    // ...
    fun(a, b, c);
    //...
}

anyFunction(callbackFunction);
```

So, to create a `callbackFunction` you need to know how the parent function uses the callback function, what arguments it passes in, and what order it passes them in.

### What is an example of a callback function?

We'll now write our own callback function, as it's something you'll have to do many times. So, let's start!

A higher order function that's already integrated in the JavaScript language is the `every` method.

The `every` method is an array method, and uses a callback to check that all the elements in the array pass a certain test.

Looking at the [documentation on the `every` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every), you can see that the callback is passed three arguments: an element of the array, the index of that element, and the whole array.

So the callback function signature would be something like this:

```javascript
function callbackFunction(element, index, array) {
    // do something
}
```

Callback functions can be as simple or as complex as you need them to be. To create an example, we need some context.

### How to write a callback function in JavaScript

So, let's say you are working with arrays of strings. You need to check if the array contains only strings that are exactly three characters long, are uppercase, contain all different letters, and that they don't repeat inside the array.

This is a pretty complex case, but maybe you will eventually need to do something like this or of equal complexity, so it's all good practice.

You can tackle one condition at a time when you build a function with so many things to check.

The first condition is that the element is a string, so, let's add it:

```javascript
function callbackFunction(element, index, array) {
    
    // check that element is a string
	const isNotString = typeof element !== "string";
    // if it's not, end function
    if (isNotString) {return;}
    
}
```

Next, the strings must be all uppercase, contain only letters, and be 3 characters long.

You could check these three conditions separately, or you can check them together with a regular expression that checks for exactly those three things.

Such a regular expression would look like this: `/^[A-Z]{3}$/`.

Let's see what the parts of this regular expression are:

-   The characters `^` at the beginning and `$` at the end are anchors. These say that the string must start and end in exactly that way. And if you use both, they restrict a string to contain only and exactly the pattern in the regular expression.
-   `[A-Z]` is a character class that matches any character from `A` to `Z`, so all uppercase letters.
-   `{3}` is a counter. This says that the previous thing must be matched exactly three consecutive times.

The regular expression explained above is the equivalent of this regular expression: `/^[A-Z][A-Z][A-Z]$/`.

In this case instead of the counter `{3}` we have written the class `[A-Z]` three times.

Let's add this to the code.

```javascript
function callbackFunction(element, index, array) {
    
    // check that element is a string
    const isNotString = typeof element !== "string";
    // if it's not, end function
    if (isNotString) {
        return;
    }
    
    // check that string is 3 characters long and only uppercase letters
    const isItThreeUpperCaseLetters = /^[A-Z]{3}$/.test(element);
    // otherwise, end function
    if (!isItThreeUpperCaseLetters) {
        return;
    }
    
}
```

If you don't like regular expressions, you can read [below](#and-if-we-didn-t-use-a-regular-expression) how to do the same checks without using a regular expression.

Then, next, we need to check if the characters are all different.

There are three characters you can use: `element[0] !== element[1] && element[0] !== element[2] && element[1] !== element[2]`.

But, you can also do this with a loop – a double loop actually.

```javascript
// with the outer loop, you get j, the first index to compare
for (let j = 0; j++; j < element.length) {
    // with the inner loop you get k, the second index to compare
    for (let k = j+1; k++; k < element.length) {
        // you compare the element at index j with the element at index k
        if (element[j] === element[k]) {
            // if they are equal return to stop the function
            return;
        }
    }
}
```

The loop will work with any length, and you don't need to rewrite it for different situations.

Is it the exact same as writing the three comparisons? Let's follow the loop to check.

At first iteration we have that `j=0`, and `k=1`, so the first comparison is `element[0] === element[1]`. Then `k` increases, so it's `j=0` and `k=2`, so that is `element[0] === element[2]`.

At this point the inner loop stops, and the outer loop (the one with `j`) goes to the next iteration. This time `j=1`, and the inner loop starts at `k=j+1` so at `k=2` – the comparison here is `element[1] === element[2]`.

The inner loop has finished looping, the outer loop goes from `j=1` to `j=2`, the inner loop doesn't start as `k = j+1 = 3` doesn't pass the `k < element.length` condition of the loop.

```javascript
function callbackFunction(element, index, array) {
    
    
    // check that element is a string
    const isNotString = typeof element !== "string";
    // if it's not, end function
    if (isNotString) {
        return;
    }
    
    
    // check that string is 3 characters long and only uppercase letters
    const isItThreeUpperCaseLetters = /^[A-Z]{3}$/.test(element);
    // otherwise, end function
    if (!isItThreeUpperCaseLetters) {
        return;
    }
    
    
    // check if all characters are different
    const allDifferentCharacters = element[0] !== element[1] && element[0] !== element[2] && element[1] !== element[2];
    // if not, return to stop the function
    if (!allDifferentCharacters) {
        return;
    }
    
    
    
}
```

Then, the last thing we need to check is that the strings are not repeated inside the array.

We can use `indexOf` to check that the current one is the first appearance of `element` inside the array.

We would need to reference the array for this. And we have it – it's one of the arguments passed in to the callback, the `array` parameter.

If this is the first appearance of the string in the array, the output of `indexOf` will be the same as `index`.

If  `array.indexOf(element) === index` is `true`, that means that `element` is present in the array for the first time at `index`. If it's `false`, an identical string is present earlier in the array.

Let's add this check to the function. And if the string has survived through all the checks, then the function can return `true` at the end.

```javascript
function callbackFunction(element, index, array) {
    
    
    // check that element is a string
    const isNotString = typeof element !== "string";
    // if it's not, end function
    if (isNotString) {
        return;
    }
    
    
    // check that string is 3 characters long and only uppercase letters
    const isItThreeUpperCaseLetters = /^[A-Z]{3}$/.test(element);
    // otherwise, end function
    if (!isItThreeUpperCaseLetters) {
        return;
    }
    
    
    // check if all characters are different
    const allDifferentCharacters = element[0] !== element[1] && element[0] !== element[2] && element[1] !== element[2];
    // if not, return to stop the function
    if (!allDifferentCharacters) {
        return;
    }
    
    
    // check if it's the first appearence of element inside the array
    const isItFirstAppearence = array.indexOf(element) === index;
    // if not, return to stop the function
    if (!isItFirstAppearence) {
        return;
    }
    
    
    return true;
}
```

#### And if we didn't use a regular expression?

In the code above, to check three different things, we used a regular expression: `/^[A-Z]{3}$/`.

But if you don't want to work with regex, you can use the `length` property to check if a string is of exactly a certain length. In this case `element.length === 3` to check that the string is exactly three characters long.

Next, the string must be all uppercase and contain only letters.

You can use `charCodeAt` for this. This method returns the ASCII code of a character, and knowing that uppercase letters have ASCII codes from 65 to 90, you can check that there are only uppercase letters.

There are three numbers to check: `element.charCodeAt(0)`, `element.charCodeAt(1)`, and `element.charCodeAt(2)`. They all need to be between 65 and 90. It's only three characters, but we can still use a loop.

So, that would be as below:

```javascript
for (let i = 0; i++; i < element.length) {
    // find the ASCII code of the character
    const code = element.charCodeAt(i);
    // check if it's outside of the range
    if (code < 65 || code > 90) {
        // if it is, return to stop the function
        return;
    }
}
```

Let's add this to the function:

```javascript
function callbackFunction(element, index, array) {
    
    // check that element is a string
    const isNotString = typeof element !== "string";
    // if it's not, end function
    if (isNotString) {return;}
    
    // check that element has length string
    const hasLengthThree = element.length === 3;
    // if it has a different length, end function
    if (!hasLengthThree) {return;}
    
    // loop over the characters
	for (let i = 0; i++; i < element.length) {
        // find the ASCII code of the character
        const code = element.charCodeAt(i);
        // check if it's outside of the range
        if (code < 65 || code > 90) {
            // if it's outside the range, return and stop the function
            return;
        }
    } 
}
```

If you have come here from the link above, you can return there to continue reading how to finish the function, otherwise, please continue to the end.

### How to use the example callback function

We have written the callback function. So how do you use it?

```javascript
anArray.every(callbackFunction);
```

You can also use the `every` method inside a callback – maybe the callback to a [`filter` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

As a program becomes more complex, it's probably going to use proportionally more callback functions.

## Why do we use callback functions in JavaScript?

Callback functions are a neat feature of JavaScript. It means we can have a general function that does something (like `every` that checks if every element in an array match a certain condition, `filter`, that removes the elements that don't match a certain condition, `replace`, a string method that accepts a callback to describe how to replace parts of a string, and so on) and a callback function to add specifics of that behaviour for the specific situation.

-   `filter` in that situation will remove the elements specified by the callback.
-   `every` will check that all the elements in that situation are as specified by the callback function.
-   `replace` will replace parts of the string in the situation in which it is used as specified by the callback.

Higher order functions add a level of abstraction to the code. We don't know (and don't need to know), how `every` checks every element of the array and verifies that they all pass the tests specified by the callback. We only need to know that the method accepts a callback function for that.

## Conclusion

Callbacks are functions that are passed as arguments of other functions. You have seen an example of how to create one, and some considerations on why they are useful.

Thank you for reading!