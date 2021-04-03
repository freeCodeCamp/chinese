> -   原文地址：[Functional Programming in JavaScript for Beginners](https://www.freecodecamp.org/news/functional-programming-in-javascript-for-beginners/)
> -   原文作者：Nahla Davies
> -   译者：
> -   校对者：

![Functional Programming in JavaScript for Beginners](https://images.unsplash.com/photo-1482745637430-91c0bbcea3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE1fHxqYXZhc2NyaXB0fGVufDB8fHx8MTYxNjY5MTE0MA&ixlib=rb-1.2.1&q=80&w=2000)

Functional programming is not a new approach to coding, but it has grown in popularity in recent years.

This is because, once programmers understand the basics behind the technique (and are able to write clean and reliable code using it), applications written using a functional approach are much easier to work with.

Because of this, it’s worth gaining an understanding of functional programming once you’ve worked through this [JavaScript beginners’ handbook](https://www.freecodecamp.org/news/the-complete-javascript-handbook-f26b2c71719c/).

If you are frequently working with JavaScript, using this approach can save you time, and can make your code easier to work with and potentially more secure.

In this article, we’ll look at the basic principles of functional programming, and then outline a few of the key tools for using this approach in JavaScript.

## Imperative vs. functional programming

The origins of functional programming go way back to the 1930’s with the invention of Lambda Calculus.

This was an approach to computation that [sought to define common tasks](https://en.wikipedia.org/wiki/Lambda_calculus) and functions not as the structural manipulation of data structures (such as arrays and lists), but rather as mathematical functions performed on them.

![](https://www.freecodecamp.org/news/content/images/2021/02/image-144.png)

[Image Source](https://android.jlelse.eu/how-to-wrap-your-imperative-brain-around-functional-reactive-programming-in-rxjava-91ac89a4eccf)

This may sound quite abstract, especially if you are new to programming. But in fact the difference between a functional and imperative approach can be expressed quite succinctly by using an example. Take a look at these:

### Imperative:

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getOdds(arr) {
  let odds = [];
  for (let i = 0; i < arr.length + 1; i++) {
    if (i % 2 !== 0) {
      odds.push(i);
    }
  }
  return odds;
}

console.log(getOdds(arr)); // logs [1, 3, 5, 7, 9]

```

### Functional:

```js
function getOdds2(arr){
return arr.filter(num => num % 2 !== 0)
}console.log(getOdds2(arr))
// logs [ 1, 3, 5, 7, 9 ]
const getOdds3 = arr => arr.filter(num => num % 2 !== 0)console.log(getOdds3(arr))
// logs [ 1, 3, 5, 7, 9 ]
```

As you can see, the way in which these programs work is quite different.

The imperative approach is to define a data structure, and then manipulate it in order to obtain the output we need. In a functional approach, we use filter functions to define a programmed function, and then invoke this as needed.

Of course, much of the complexity of [how functional programming works](https://www.freecodecamp.org/news/an-introduction-to-the-basic-principles-of-functional-programming-a2c2a15c84/) is hidden from the end user, and also from the programmer if they are using a front end development framework.

But the advantages of using a functional approach are clear even from this example – this paradigm results in shorter code that is more easily read, understood, and audited.

## Why use functional programming?

In addition to this basic advantage, there are a number of other advantages to using functional programming.

Many of these stem from the simple fact that functional code is easier to read than imperatively defined code. Because a human can easily see how a functional program works, rather than having to pull apart the code in order to understand it, many aspects of testing are simplified.

### Functional Programming ensures code integrity with penetration testing

Penetration testing becomes more effective where code is human readable. This makes it easier to assess the integrity of functional code.

According to software developer Barbara Ericson of [Cloud Defense](https://www.clouddefense.ai/blog/penetration-testing), penetration testing should always be carried out on JavaScript applications, and a functional approach can help to make this more rigorous.

This ease of reading also simplifies many of the other managerial processes that apply to the development of new code and applications.

In functional approaches, compliance processes are much easier, because programmers shouldn’t worry as much about the execution of their code. This means that the parts of a program that deal with sensitive data can be isolated and evaluated separately from the rest of a program.

### Functional Programming makes code easier to read

The advantages of functional approaches are not just limited to the assessment of code, though. They also extend to the process of developing it.

In fact, functional approaches build on and amplify the [advantages and disadvantages](https://www.freecodecamp.org/news/the-advantages-and-disadvantages-of-javascript/) of JavaScript itself.

![](https://www.freecodecamp.org/news/content/images/2021/02/image-145.png)

[Image Source](https://itnext.io/why-are-we-creating-a-javascript-only-world-wide-web-db8c3a340b9)

By making code easier to read, you can bring many more staff groups into the development process, even if they don't have an extensive understanding of JavaScript.

This is a key tenet of the DevOps approach, one that [can help mitigate vulnerabilities](https://privacycanada.net/how-to-fight-common-java-security-vulnerabilities-from-devops/) in your JavaScript code. It's also one that is facilitated by taking a functional approach to your coding.

## Key tools for functional programming

There are a number of key tools and concepts that you should be aware of when it comes to actually putting functional approaches into action. Let’s take a look at them.

### 1\. Pure and impure functions

At the most basic level, a functional approach [seeks to manipulate data](https://www.geeksforgeeks.org/functional-programming-paradigm/) without mutating them. This means that a “functional function” will take data, perform some calculations, and return a result (and all without re\-writing any part of the data structure itself).

Functions that work in this way are called “pure” functions, and those that do not are called “impure”.

```js

function getSquare(items) {
  var len = items.length;
  for (var i = 0; i < len; i++) {
    items[i] = items[i] * items[i];
  }
  return items;
}
```

The general idea here is to leave the data you are working with completely untouched.

If you want to merge two arrays, you should not utilize the `Array.prototype.push()` strategy (which will overwrite the original data). Instead, use the `Array.prototype.concat()` function, which will create a new, “working” array for you to work with.

### 2\. Anonymous functions

Anonymous functions [are also an important part](https://www.javascripttutorial.net/javascript-anonymous-functions/) of functional programming, and one that has its roots in Lambda Calculus.

Anonymous functions, as their name suggests, do not have an explicitly defined name. Instead, they are functions that are assigned to variables, and invoked via them.

```js
 alert((function(x) {
    return !(x > 1)
      ? 1
      : arguments.callee(x - 1) * x;
  })(20));
```

The advantage of doing this is that as long as you are able to keep track of which functions are assigned to which variables, they can be invoked very easily, and passed from one module to another with nothing more than a variable call. This gives you a powerful, flexible new way of working with functions.

### 3\. Recursive functions

The use of recursive functions is another mark of functional programming. Though the general idea of recursion will be familiar to even beginner programmers, functional programming takes the idea even further by defining functions that call themselves.

```js
function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(3);
```

This makes the implementation of recursion much simpler – largely because programmers don’t need to use loops to do this.

However, it also comes with dangers. Specifically, having a function call itself makes it much easier for infinite loops to be accidentally created, and so take care to underpin every recursive function with a rigorous way of stopping execution.

## Conclusion

Though these three concepts are typical of functional programming, in truth the range of ways in which the paradigm can be applied means that it is more of a philosophy than a set of well\-designed tools and processes.

Take a few steps into the exciting world of functional programming, and you’ll start to see its influence everywhere. In fact, it informs many of the [most common JavaScript practices](https://www.freecodecamp.org/news/what-is-javascript/) in use today.

In other words, although functional programming appears simple on the surface, it has profound consequences on the way that you code. This is why it’s worth learning, even if you don’t use it all the time.
