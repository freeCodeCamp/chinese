> -  原文地址：[JavaScript Modules – Explained with Examples](https://www.freecodecamp.org/news/javascript-modules-explained-with-examples/)
> -  原文作者：[Kingsley Ubah](https://www.freecodecamp.org/news/author/ubahthebuilder/)
> -  译者：
> -  校对者：

![JavaScript Modules – Explained with Examples](https://www.freecodecamp.org/news/content/images/size/w2000/2021/07/what-is-a-module.png)

A module is a function or group of similar functions. They are grouped together within a file and contain the code to execute a specific task when called into a larger application.

You create modules to better organize and structure your codebase. You can use them to break down large programs into smaller, more manageable, and more independent chunks of code which carry out a single or a couple of related tasks.

Modules should be:

1.  **Independent/Self-contained:** A module has to be as detached from other dependencies as possible.
2.  **Specific:** A module needs to be able to perform a single or a related group of tasks. The core essence of creating them in the first place is to create separate functionalities. One module, one (kind of) task.
3.  **Reusable:** A module has to be easy to integrate into various kinds of programs to perform its task.

To better explain, let me give you an analogy:

Suppose we want to build a huge house from the ground up. All the tools we need to set up the building are all pilled up within just one room.

In such a situation, organizing the tools in the right way so we can start building would be difficult.

Instead of having the separate dependencies pilled up in just one room, we should instead organize each set of related tools and group them into different rooms. Each room is independent and self-contained with its tools solving specific tasks.

We could put up labels like: **"these tools are for roofing",** "**these tools are for brick laying**", "**these tools are for foundation digging**" and so on.

Whenever we want a tool to carry out a particular task, we know in which room exactly to find it. That way, everything is much more organized and locatable.

Also, say we are done building the house and then decide to build something different. We will still have at our disposal the same set of tools. This enforces the principle of **reusability**. Modules are reusable because they are self-contained.

## Example of a Module

Now in the context of code, modules are very important.

Let's consider a simplified illustration of this with an e-commerce application which allows people and businesses to sell products online. This program will typically be composed of two or more unrelated tasks. For example,

-   a program for creating an account,
-   a program to validate the information,
-   another program to process payments
-   another program to calculate the user ratings

and so on.

![](https://www.freecodecamp.org/news/content/images/2021/07/main-task.png)

Instead of having all of those unrelated programs together in one module/file, it is a better practice to create several files, or modules, for each of those tasks. In such a case, the modules become dependencies.

Then from the main app or program, you simply import/load the dependencies (i.e the modules you need) and execute them accordingly. As a result, your main app becomes cleaner and more minimal.

![](https://www.freecodecamp.org/news/content/images/2021/07/modules.png)

main.js has been broken down into four modules

Assuming you need to process payments in some other application in the codebase, for example, it becomes very easy to reuse the same functionality. No need to copy and paste or code a new function from scratch.

## JavaScript Modules

A module in JavaScript is just a file containing related code.

In JavaScript, we use the `import` and `export` keywords to share and receive functionalities respectively across different modules.

-   The `export` keyword is used to make a variable, function, class or object  accessible to other modules. In other words, it becomes a public code.
-   The `import` keyword is used to bring in public code from another module.

Let's look at a simple example of this:

```js
function getPower(decimalPlaces) {
	return 10 ** decimalPlaces;
}

function capitalize(word) {
	return word[0].toUpperCase() + word.slice(1);
}

function roundToDecimalPlace(number, decimalPlaces = 2) {
	const round = getPower(decimalPlaces);
	return Math.round(number * round) / round;
}

export { capitalize, roundToDecimalPlace };
```

filepath/main.js

This module has three functions defined in it:

-   `getPower`: This function gets the power of a number
-   `capitalize`: This function capitalizes the first letter in a word
-   `roundToDecimalPlace`: This function rounds a given number to a specified number of decimal places.

At the end of the file, you can see that two of the three functions were exported. In other words, they became public functions which could be used by any other script.

To export two functions out of the three, you use the `export` keyword, followed by an object containing the functions you want to make accessible. Once you do this, the functions can be accessed by any program within that codebase which require them.

Let's take a look at how we can use them:

```js
import { capitalize, roundToDecimalPlace } from './main';

function displayTotal(name, total) {
	return `${capitalize(name)}, your total cost is: ${roundToDecimalPlace(total)}`;
}

displayTotal('kingsley', 20.4444444);
// "Kingsley, your total cost is: 20.44"

export { displayTotal };
```

filepath/displayTotal.js

The `displayTotal.js` module does not have `capitalize()` and `roundToDecimalPlace()` but wants to use the capitalize and round-to-decimal-place functionality. So how did we bring it in? With `import`!

We did this by using the `import` keyword followed by the name of the functions we want to import from the module, which in our case are `capitalize` and `roundToDecimalPlace`.

What if you only wanted to import the `capitalize` function into your program?

Simple – import only `capitalize()`, like so:

```js
import { capitalize } from './main';

function warn(name) {
	return `I am warning you, ${capitalize(name)}!`;
}

warn('kingsley');
// I am warning you, Kingsley!

export { warn };
```

> N/B: Understanding how file structuring works is very important when working with modules. In the above example, we are simply importing from a file which exists in the same directory, which is why we use the notation `'./import'`.

If you want to import every public function from another module, use the asterisk `*` keyword:

```js
import * as mainfunctions from './main';

function warn(name) {
return `I am warning you, ${mainfunctions.capitalize(name)}!`;
}
warn('kingsley');
// I am warning you, Kingsley!

export { warn };
```

filepath/warn.js

> **TIP**: If you're importing everything from a module, you should use the asterisk instead of explicitly spelling out all the functions one-by-one.

You may have noticed the `as` keyword. We use this to import the public functions into a new object, which in our case is the `mainfunctions` object. We then access and call the functions we want to use in our program.

So far, we have only considered examples where the export happens at the end of the file. But you can equally export a function, variable, or class by registering the `export` keyword just in front of its definition, like so:

```js
function getPower(decimalPlaces) {
	return 10 ** decimalPlaces;
}

export function capitalize(word) {
	return word[0].toUpperCase() + word.slice(1);
}

export function roundToDecimalPlace(number, decimalPlaces = 2) {
	const round = getPower(decimalPlaces);
	return Math.round(number * round) / round;
}
```

filepath/anothermain.js

If you compare this with the first example, you will notice this syntactic difference:

-   In the first example, the `export` keyword was used to export two functions at the end of the script. In the above example, the `export` keyword is attached to both functions when they are being defined.

However, they both deliver the same outcome: `capitalize` and `roundToDecimalPlace` will both get exported.

## Default Exports

If you want to export all three functions but intend to make one of them a default (perhaps because you are most likely to use that single function), you simply use the `default` keyword.

The default keyword makes importing a function easier. Let's consider the following example:

```js
export function getPower(decimalPlaces) {
	return 10 ** decimalPlaces;
	}

export default function capitalize(word) {
	return word[0].toUpperCase() + word.slice(1);
	}

export function roundToDecimalPlace(number, decimalPlaces = 2) {
	const round = getPower(decimalPlaces);
	return Math.round(number * round) / round;
	}
```

filepath/default.js

As you can see, we have made `capitalize` our default function. This essentially means we have given it some sort of privilege.

Say we want to import the `capitalize` function from the module into another program. The syntax for that will be very similar, except you don't have to import the function into curly braces:

```js
import capitalize from './main';

function warn(name) {
	return `I am warning you, ${capitalize(name)}!`;
}

warn('kingsley');
// I am warning you, Kingsley!

export { warn };
```

filepath/warndefault.js

If you want to import the default function along with any other functions, you mix the bare 'default' function with other functions in curly braces:

```js
import capitalize, { getPower } from './main';

function warn(name) {
	return `I am warning you, ${capitalize(name)}!`;
}

warn('kingsley');
// I am warning you, Kingsley!

export { warn };
```

filepath/mixed.js

## Wrapping Up

Modules are independent and self-contained chunks of code. You create them by splitting up a larger program into logical parts or dependencies.

Modules should be independent, specialized, and reusable.

You use the `import` and `export` keywords to interchange functionalities between modules in JavaScript.

You use the `default` keyword to specify a function, object, variable, or class that you want to be a first-choice import.

With this, we have covered the basics of modules in JavaScript.

I hope you got something valuable from this article. I write programming-related articles every week on my [personal blog](https://ubahthebuilder.tech)

Thank you for reading.

> **P/S**: If you are learning JavaScript, I created an eBook which teaches 50 topics in JavaScript with hand-drawn digital notes. [Check it out here](https://ubahthebuilder.gumroad.com/l/js-50).