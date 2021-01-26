> -   原文地址：[The Nine Most Common Mistakes Developers Make in JavaScript (and How to Fix Them) JavaScript 编程中最常见的 9 个错误](https://www.freecodecamp.org/news/nine-most-common-mistakes-developers-make-in-javascript/)
> -   原文作者：Dipto Karmakar
> -   译者：
> -   校对者：

JavaScript is a [scripting language][1] used in webpages to add functionality and interactivity. For a beginner coming from a different programming language, JavaScript is quite easy to understand. With a few tutorials, you should be able to get started with it right away.

However, there are a few common mistakes that many beginner programmers make. In this article, we’ll address nine common mistakes (or bad practices) and their solutions to help you become a better JS developer.

## Confusing the assignment (=) and equality (==, ===) operators

Like its name implies, the [assignment operator][2](=) is used to assign values to variables. Developers often confuse it with the equality operator.

Here's an example:

```javascript
const name = 'javascript';
if ((name = 'nodejs')) {
    console.log(name);
}
// output - nodejs
```

The name variable and ‘nodejs' string are not compared in this case. Instead, 'nodejs' is assigned to name and 'nodejs' is printed to the console.

In JavaScript, the double equal sign(==) and triple equal sign(===) are called comparison operators.

For the code above, this is the appropriate way of comparing values:

```javascript
const name = 'javascript';
if (name == 'nodejs') {
    console.log(name);
}
// no output
// OR
if (name === 'nodejs') {
    console.log(name);
}
// no output
```

The difference between these comparison operators is that the double equals performs a **loose** comparison while triple equals performs a **strict** comparison.

In a loose comparison, only the values are compared. But in a strict comparison, the values and datatype are compared.

The following code explains it better:

```javascript
const number = '1';
console.log(number == 1);
// true
console.log(number === 1);
// false
```

The variable number was assigned a string value of 1. When compared with 1 (of number type) using double equals, it returns true because both values are 1.

But when compared using triple equals, it returns false because each value has a different data type.

## Expecting callbacks to be synchronous

Callbacks are one way that JavaScript handles asynchronous operations. Promises and async/await, however, are preferable methods for handling asynchronous operations because multiple callbacks lead to [callback hell][3].

Callbacks are not \***\*synchronous\*\***. They are used as a function to be called after an operation when a delayed execution completes.

An example is the global `setTimeout​` function which receives a callback function as its first argument and a duration (in ms) as a second argument like so:

```javascript
function callback() {
​​    console.log("I am the first");
​​}
​​setTimeout(callback, 300);
​​console.log("I am the last");
​​// output
​​// I am the last
​​// I am the first
```

After 300 milliseconds, the callback function is called. But before it completes, the rest of the code runs. This is the reason why the last console.log was run first.​​

A common mistake developers make is to misinterpret callbacks as synchronous. For example, a callback which returns a value that would be used for other operations.

​​Here's that mistake:

```javascript
function addTwoNumbers() {
​​    let firstNumber = 5;
​​    let secondNumber;
​​    setTimeout(function () {
​​        secondNumber = 10;
​​    }, 200);
​​    console.log(firstNumber + secondNumber);
​​}
​​addTwoNumbers();
​​// NaN
```

`NaN`​ is the output because `secondNumber​` is undefined​. At the time of running `firstNumber + secondNumber`, `secondNumber` is still undefined because the `setTimeout` function would execute the callback after `200ms`.

The best way to approach this is to execute the rest of the code in the callback function:

```javascript
function addTwoNumbers() {
​​    let firstNumber = 5;
​​    let secondNumber;
​​    setTimeout(function () {
​​        secondNumber = 10;
​​        console.log(firstNumber + secondNumber);
​​    }, 200);
​​}
​​addTwoNumbers();
​​// 15
```

## Wrong references to `this​`

`this​` is a commonly [misunderstood concept][4] in JavaScript. To use `this`​ in JavaScript, you really need to understand how it works because it operates a bit differently compared to other languages.

Here's an example of a common mistake when using `this​`:

```javascript
const obj = {
​​    name: "JavaScript",
​​    printName: function () {
​​        console.log(this.name);
​​    },
​​    printNameIn2Secs: function () {
​​        setTimeout(function () {
​​            console.log(this.name);
​​        }, 2000);
​​    },
​​};
​​obj.printName();
​​// JavaScript
​​obj.printNameIn2Secs();
​​// undefined
```

​​The first result is **`JavaScript`** because `this.name`​ correctly points to the object's name property. The second result is `**undefined**​` because `this​` has lost reference to the object's properties (including name).

This is because `this​` depends on the object calling the function which it lives in. There is a `this`​ variable in every function but the object it points to is determined by the object calling it.

The `this​` in `obj.printName()`​ points directly to `obj`​. The `this`​ in `obj.printNameIn2Secs​` points directly to `obj​`. But the `this​` in the callback function of `setTimeout​` does not point to any object because no object called it.

For an object to have called `setTimeout​`, something like `obj.setTimeout...​` would be executed. Since there is no object calling that function, the default object (which is `window`​) is used.

​​ `name`​ does not exist on window​, resulting in `undefined`​.

The best ways to go about retaining the reference to `this`​ in `setTimeout` is to use `bind​`, `call​`, `apply`​ or arrow functions (introduced in ES6). Unlike normal functions, arrow functions do not create their own `this`​.

​​So, the following will retain its reference to `this​`:​​

```javascript
​​const obj = {
​​    name: "JavaScript",
​​    printName: function () {
​​        console.log(this.name);
​​    },
​​    printNameIn2Secs: function () {
​​        setTimeout(() => {
​​            console.log(this.name);
​​        }, 2000);
​​    },
​​};
​​obj.printName();
​​// JavaScript
​​obj.printNameIn2Secs();
​​// JavaScript
```

## Disregarding object mutability

Unlike primitive data types like string, number and so on, in JavaScript objects are reference data types. For example, in key-value objects:

```javascript
const obj1 = {
​​    name: "JavaScript",
​​};
​​const obj2 = obj1;
​​obj2.name = "programming";
​​console.log(obj1.name);
​​// programming
```

`obj1​` and `obj2`​ possess the same reference to the location in memory where the object is stored.

In arrays:

```javascript
const arr1 = [2, 3, 4];
​​const arr2 = arr1;
​​arr2[0] = "javascript";
​​console.log(arr1);
​​// ['javascript', 3, 4]
```

A common mistake developers make is they disregard this nature of JavaScript and this results in unexpected errors. For instance, if 5 objects have the same reference to the same object, one of the object may interfere with the properties in a large-scale code base.

When this happens, any attempt to access the original properties would return undefined​ or possibly throw an error.

The best practice for this is to always create new references for new objects when you want to duplicate an object. To do this, the rest operator ( `...​` introduced in ES6) is a perfect solution.

​​For example, in key-value objects:

```javascript
​​const obj1 = {
​​    name: "JavaScript",
​​};
​​const obj2 = { ...obj1 };
​​console.log(obj2);
​​// {name: 'JavaScript' }
​​obj2.name = "programming";
​​console.log(obj.name);
​​// 'JavaScript'
```

​​In arrays:

```javascript
const arr1 = [2, 3, 4];
​​const arr2 = [...arr1];
​​console.log(arr2);
​​// [2,3,4]
​​arr2[0] = "javascript";
​​console.log(arr1);
​​// [2, 3, 4]
```

## Saving arrays and objects to browser storage

Sometimes, while working with JavaScript, developers may want to take advantage of the `localStorage` for saving values. But a common mistake is trying to save [arrays and objects][5] as-is in the `localStorage`. `localStorage` only accepts strings.

In an attempt to save objects, JavaScript converts the object to a string. The result is `[Object Object]` for objects and a comma-separated string for array elements.

For example:

```javascript
​​const obj = { name: "JavaScript" };
​​window.localStorage.setItem("test-object", obj);
​​console.log(window.localStorage.getItem("test-object"));
​​// [Object Object]
​​const arr = ["JavaScript", "programming", 45];
​​window.localStorage.setItem("test-array", arr);
​​console.log(window.localStorage.getItem("test-array"));
​​// JavaScript, programming, 45
```

When objects are saved like this, it becomes difficult to access them. For the object example, accessing the object like `.name​` would result in an error. This is because `[Object Object]` is a string now, without a `​name` property.

A better way to save objects and arrays in local storage is by using `JSON.stringify​`(for converting objects to strings) and `JSON.parse​` (for converting strings to objects). This way, accessing the objects becomes easy.

The correct version of the code above would be:

```javascript
​​const obj = { name: "JavaScript" };
​​window.localStorage.setItem("test-object", JSON.stringify(obj));
​​const objInStorage = window.localStorage.getItem("test-object");
​​console.log(JSON.parse(objInStorage));
​​// {name: 'JavaScript'}
​​const arr = ["JavaScript", "programming", 45];
​​window.localStorage.setItem("test-array", JSON.stringify(arr));
​​const arrInStorage = window.localStorage.getItem("test-array");
​​console.log(JSON.parse(arrInStorage));
​​// JavaScript, programming, 45
```

## Not using default values

Setting [default values][6] in dynamic variables is a very good practice for preventing unexpected errors. Here's an example of a common mistake:​​

```javascript
function addTwoNumbers(a, b) {
​​    console.log(a + b);
​​}
​​addTwoNumbers();
​​// NaN
```

The result is `NaN​` because `a`​ is `undefined`​ and `b`​ is `undefined​`. By using default values, errors like this can be prevented. For example:

```javascript
function addTwoNumbers(a, b) {
​​    if (!a) a = 0;
​​    if (!b) b = 0;
​​    console.log(a + b);
​​}
​​addTwoNumbers();
​​// 0
```

Alternatively, the default value feature introduced in ES6 can be used like so:

```javascript
​​function addTwoNumbers(a = 0, b = 0) {
​​    console.log(a + b);
​​}
​​addTwoNumbers();
​​// 0
```

This example, though minimal, emphasizes the importance of default values. Additionally, developers can provide errors or warning messages when expected values are not provided.

## Improper naming of variables

Yes, developers still make this mistake. Naming is hard, but developers really have no choice. Comments are good practice in programming, and so is naming [variables][7].

For example:

```javascript
function total(discount, p) {
​​    return p * discount
​​}
```

The variable `discount`​ is okay, but what about `p`​ or `total​`? Total of what? A better practice for above would be:

```javascript
function totalPrice(discount, price) {
​​    return discount * price
​​}
```

​​Properly naming variables is important because a developer may never be the only developer on a codebase at a particular time or in the future.

Naming variables properly will allow contributors easily understand how a project works.

## Check-up for boolean values

```javascript
const isRaining = false
​​if(isRaining) {
​​    console.log('It is raining')
​​} else {
​​    console.log('It is not raining')
​​}
​​// It is not raining
```

It is common practice to check [boolean values][8] as seen in the above code. While this is okay, errors set in when testing some values.

​​In JavaScript, a loose comparison of `0`​ and `false`​ returns `true` and `1`​ and `true​` returns `true`. This means that if `isRaining`​ was `1`​, `isRaining`​ would be `true`.

This is also a mistake often made in objects. For example:

```javascript
const obj = {
​​    name: 'JavaScript',
​​    number: 0
​​}
​​if(obj.number) {
​​    console.log('number property exists')
​​} else {
​​    console.log('number property does not exist')
​​}
​​// number property does not exist
```

Although the `number`​ property exists, `obj.number`​ returns `0`, which is a `falsy` value, therefore the `else​` block is executed.

So unless you're sure of the range of values that would be used, boolean values and properties in objects should be tested like this:

```javascript
if(a === false)...
if(object.hasOwnProperty(property))...
```

## Confusing Addition and Concatenation

The plus sign `(+)` has two functions in JavaScript: addition and concatenation. Addition is for numbers and Concatenation is for strings. Some developers often misuse this operator.

For example:

```javascript
const num1 = 30;
​​const num2 = "20";
​​const num3 = 30;
​​const word1 = "Java"
​​const word2 = "Script"
​​console.log(num1 + num2);
​​// 3020
​​console.log(num1 + num3);
​​// 60
​​console.log(word1 + word2);
​​// JavaScript
​​
```

​​When adding strings and numbers, JavaScript converts the numbers to strings, and concatenates all values. For addition of numbers, a mathematical operation is performed.​​

## Conclusion

There are, of course, more mistakes (some trivial, some serious) than the ones listed above. So just make sure you stay up to date with developments in the language.

Studying and avoiding these mistakes will help you build better and more reliable web applications and tools.

[1]: https://en.wikipedia.org/wiki/Scripting_language
[2]: https://www.w3resource.com/javascript/operators/assignment-operator.php#:~:text=Assignment%20Operators,value%20of%20its%20right%20operand.&text=That%20is%2C%20a%20%3D%20b%20assigns,shown%20in%20the%20following%20table.
[3]: http://callbackhell.com/
[4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
[5]: https://www.tutorialspoint.com/javascript/javascript_arrays_object.htm
[6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
[7]: https://en.wikipedia.org/wiki/Variable_(computer_science)
[8]: https://www.w3schools.com/js/js_booleans.asp
