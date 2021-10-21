> -  原文地址：[Lexical Scope in JavaScript – What Exactly Is Scope in JS?](https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/)
> -  原文作者：[Oluwatobi Sofela](https://www.freecodecamp.org/news/author/oluwatobiss/)
> -  译者：byself
> -  校对者：

![Lexical Scope in JavaScript – What Exactly Is Scope in JS?](https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/kristina-tripkovic-EGmwwDzme6s-unsplash-javascript-lexical-scope-codesweetly.jpg)

The term “**lexical scope**” may seem tricky to grasp at first glance. But it's helpful to understand what each word means.

**词法作用域（ lexical scope ）** 这个概念不好理解，也很难掌握。但如果我们可以搞清楚每一个词的意思，对于理解这一概念将大有帮助。

So this article will explain lexical scope by first examining the meaning of “lexical” and “scope”.

因此本文将从“词法（lexical）”和“作用域（scope）”两个词语的意思出发解释词法作用域。

So, let’s get it started by understanding the term “scope”.

让我们从开始吧~~

## What exactly is Scope?

## 作用域到底是什么？

**Scope** refers to the _area_ where an item (such as a function or variable) is visible and accessible to other [code](https://www.codesweetly.com/document-vs-data-vs-code/).

**作用域** 表示一个范围，在这个范围内声明的所有内容（比如方法或变量）都可以被其他代码访问到。

**Note:**

**注意：**

-   **Scope** means area, space, or region.
-   **Global scope** means global space or a public space.
-   **Local scope** means a local region or a restricted region.

-   **作用域（Scope）** 指一个范围，区域或空间
-   **全局作用域（Global Scope）** 指全局空间或一个公共空间
-   **局部作用域（Local Scope）** 指一个局部空间或一个受限制的空间

**Here's an example:**

**举个例子：**

```js
// 定义一个全局变量:
const fullName = "Oluwatobi Sofela";

// 定义多层嵌套函数:
function profile() {
  function sayName() {
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

// 打印结果
console.log(profile()) // 'Oluwatobi Sofela'
```

[**点击查看源代码**](https://stackblitz.com/edit/web-platform-fqqxjl?file=script.js)

In the snippet above, we defined the `fullName` variable in the global scope. This means that it is visible and accessible globally to all code within the script.

在上面的代码示例中，我们定义了一个`fullName`全局变量，这就意味着在脚本内所有代码都可以访问`fullName`变量。

But we defined `writeName()` within the `sayName()` function, so it is locally scoped to `sayName()`.

我们在`sayName()`函数内定义了`writeName()`函数，所以`writeName()`被`sayName()`的局部作用域包裹着。

In other words, `writeName()` is locally visible and accessible only to code in the `sayName()` function.

换言之，`writeName()`只能被`sayName()`函数体内部的代码访问。

Keep in mind that whenever the `writeName()` function gets invoked, the computer will _not_ go straight to the global scope to call the `fullName` variable. Instead, it must sequentially go through the [scope chain](#what-is-a-scope-chain) to look for `fullName`.

请记住，无论`writeName()`函数何时被调用，编译器都不会直接访问到全局作用域下的`fullName`变量，而是通过[作用域链](#what-is-a-scope-chain)依次查找`fullName`变量，直到查找到在全局作用域结束。

## What is a Scope Chain?

## 什么是作用域链

A **scope chain** refers to the _unique_ spaces that exist from the scope where a variable got _called_ to the global scope.

作用域链是一个独特空间。当一个变量被调用，那么变量在 **被调用** 时所在的局部作用域和全局作用域之间，就形成了一个作用域链。

**Here's an example:**

** 示例**

```js
// 定义一个全局作用域变量:
const fullName = "Oluwatobi Sofela";

// 定义多层嵌套函数:
function profile() {
  function sayName() {
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

console.log(profile()) // 'Oluwatobi Sofela'
```

In the snippet above, observe that the `fullName` variable got called from the `writeName()` function's scope.

在上面的示例中，`fullName` 变量在 `writeName()` 函数作用域中被调用。

Therefore, the scope chain that exists from the variable’s call to the global scope is:

因此，在变量被调用和全局作用域之间存在的作用域链是：

**writeName() scope ---> sayName() scope ---> profile() scope ---> global scope**

In other words, there are four (4) spaces from `fullName`’s invocation scope to its lexical scope (the _global scope_ in this instance).

换言之，从`fullName`变量的执行作用域到他的词法作用域（此处指全局作用域）之间有4层作用域。

**Note:** The global scope is the last link in [JavaScript](https://www.codesweetly.com/html-css-javascript/)'s scope chain.

**注意：** 在[JavaScript](https://www.codesweetly.com/html-css-javascript/)作用域链中，全局作用域是整个作用域链的终点。

## How Does the Scope Chain Work?

## 作用域是如何工作的？

JavaScript's scope chain determines the hierarchy of places the computer must go through — one after the other — to find the lexical scope (origin) of the specific variable that got called.

Javascript的作用域链规定了编译器在查找 **被调用变量** 的词法作用域时的查找规则。

For instance, consider the code below:
考虑如下示例代码：

```js
// 定义一个全局作用域变量:
const fullName = "Oluwatobi Sofela";

// 定义多层嵌套函数:
function profile() {
  function sayName() {
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

console.log(profile()) // 'Oluwatobi Sofela'
```

In the snippet above, whenever the `profile()` function gets invoked, the computer will first invoke the `sayName()` function (which is the only code in the `profile()` function).

在上述示例中，无论何时调用`profile()`函数，编译器都会首先调用`sayName()`函数（这是`profile()`函数体内仅有的代码）。

Secondly, the computer will invoke the `writeName()` function (which is the only code in the `sayName()` function).

然后，编译器会调用`writeName()`函数（这是`sayName()`函数体内仅有的代码）。

At this point, since the code in `writeName()` instructs the computer to call and return the `fullName` variable's content, the computer will call `fullName`. But it will not go directly to the global scope to call `fullName`.

此时，因为`writeName()`函数体内部的代码期望编译器调用并返回`fullName`变量的值，所以编译器将返回`fullName`的值。但编译器不会直接从全局作用域中调用`fullName`。

Instead, the computer must go _step-by-step_ through the _scope chain_ to look for the _lexical scope_ of `fullName`.

相反的，编译器必须通过作用域链一步一步的查找`fullName`的词法作用域。

So, here are the sequential steps the computer must take to locate `fullName`'s lexical scope:
下面是编译器查找`fullName`变量词法作用域必须经历的步骤：


1.  Firstly, the computer will check if `fullName` got defined locally within the `writeName()` function. But it will find no `fullName` definition there, so it moves up to the next scope to continue its quest.
2.  Secondly, the computer will search for `fullName`'s definition in `sayName()` (the next space in the scope chain). Still, it doesn't find it there, so it climbs up the ladder to the next scope.
3.  Thirdly, the computer will search for `fullName`'s definition in the `profile()` function. Yet still, `fullName` is not found there. So the computer goes forward to seek `fullName`'s lexical scope in the next region of the scope chain.
4.  Fourthly, the computer goes to the _global scope_ (the following scope after `profile()`). Fortunately, it finds fullName's definition there! Therefore, it gets its content (`"Oluwatobi Sofela"`) and returns it.

1. 首先
2. 奥德赛f
3. 阿斯蒂芬
4. 阿斯蒂芬


## Time to Practice with Scope 🤸‍♂️🏋️‍♀️🏊‍♀️

Consider the script below. Which of the three `fullName` variables will the computer call?

```js
// First fullName variable defined in the global scope:
const fullName = "Oluwatobi Sofela";

// Nested functions containing two more fullName variables:
function profile() {
  const fullName = "Tobi Sho";
  function sayName() {
    const fullName = "Oluwa Sofe";
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}
```

Will the computer call the first, second, or third `fullName` variable?

**Note:** You will benefit much more from this tutorial if you attempt the exercise yourself.

If you get stuck, don’t be discouraged. Instead, review the lesson and give it another try.

Once you’ve given it your best shot (you’ll only cheat yourself if you don’t!), go ahead to see the correct answer below.

## Did you get it right?

Out of the three `fullName` _definitions_ present in the script above, the computer will call and return the one defined in the `sayName()` function.

`sayName()`’s `fullName` variable will get called because `sayName()` is the scope inside which the computer will first find a `fullName` definition.

Therefore, when `profile()` gets invoked, the returned value will be `"Oluwa Sofe"`.

[**Try it on StackBlitz**](https://stackblitz.com/edit/web-platform-9mpvfv?file=script.js)

**Some things to keep in mind:**

-   Suppose the computer did not find `fullName`'s definition in any of the scopes. In such a case, the computer will return `Uncaught ReferenceError: fullName is not defined`.
-   The global scope is always the last scope of any JavaScript scope chain. In other words, the global scope is where all searches will end.
-   An inner (child) scope has access to its parent (outer) scope, but an outer scope does not have access to its child scope.  
    For instance, in the snippet above, `writeName()` can access codes inside any of its parent scope (`sayName()`, `profile()`, or the _global scope_).  
    However, neither `sayName()`, `profile()`, nor the _global scope_ can access any of `writeName()`'s codes.

## Quick Review of Scope So Far

JavaScript scope is all about space.

So next time your partner calls you to their private scope, remember they are inviting you to their private space 😜!

When you get there, be sure to ask them about their best lexical game...

But what does lexical mean, I hear you ask? Let’s find out below.

## What Does Lexical Mean?

**Lexical** refers to the definition of things.

Anything related to creating words, expressions, or variables is termed _lexical_.

For instance, a [scrabble](https://en.wikipedia.org/wiki/Scrabble) game is a lexical activity because it relates to the creation of words.

Also, someone whose job relates to linguistics (the study of languages) has a lexical career.

**Note:** Another name for a dictionary is a _lexicon_. In other words, a lexicon is a dictionary where words are listed and defined.

So now that we know what scope and lexical mean, we can talk about lexical scope.

## What is Lexical Scope in JavaScript?

**Lexical scope** is the _definition_ area of an expression.

In other words, an item's lexical scope is the place in which the item got _created_.

**Note:**

-   Another name for lexical scope is _static scope_.
-   The place an item got invoked (or called) is not necessarily the item's lexical scope. Instead, an item's _definition space_ is its lexical scope.

### Example of Lexical Scope

Consider the code below:

```js
// Define a variable in the global scope:
const myName = "Oluwatobi";

// Call myName variable from a function:
function getName() {
  return myName;
}
```

In the snippet above, notice that we _defined_ the `myName` variable in the global scope and _called_ it in the `getName()` function.

**Question:** Which of the two spaces is `myName`’s lexical scope? Is it the _global scope_ or the `getName()` function’s local scope?

**Answer:** Remember that _lexical scope_ means _definition space_ — not _invocation space_. Therefore, `myName`’s lexical scope is the _global scope_ because we defined `myName` in the global environment.

### Another example of lexical scope

```js
function getName() {
  const myName = "Oluwatobi";
  return myName;
}
```

**Question:** Where is `myName`’s lexical scope?

**Answer:** Notice that we created and called `myName` within `getName()`. Therefore, `myName`’s lexical scope is `getName()`’s local environment because `getName()` is `myName`’s definition space.

## How Does Lexical Scope Work?

A JavaScript expression’s definition environment determines the [code](https://www.codesweetly.com/document-vs-data-vs-code/) permitted to access it.

In other words, only code within an item's lexical scope can access it.

For instance, consider the code below:

```js
// Define a function:
function showLastName() {
  const lastName = "Sofela";
  return lastName;
}

// Define another function:
function displayFullName() {
  const fullName = "Oluwatobi " + lastName;
  return fullName;
}

// Invoke displayFullName():
console.log(displayFullName());

// The invocation above will return:
Uncaught ReferenceError: lastName is not defined
```

Notice that the invocation of `displayFullName()` in the snippet above returned an `Uncaught ReferenceError`. The error returned because only code within an item's lexical scope can access the item.

Therefore, neither the `displayFullName()` function nor its internal code can access the `lastName` variable because `lastName` got defined in a different scope.

In other words, `lastName`’s lexical scope is different from that of `displayFullName()`.

`lastName`’s definition space is `showLastName()` while `displayFullName()`’s lexical scope is the global environment.

Now, consider this other code below:

```js
function showLastName() {
  const lastName = "Sofela";
  return lastName;
}

// Define another function:
function displayFullName() {
  const fullName = "Oluwatobi " + showLastName();
  return fullName;
}

// Invoke displayFullName():
console.log(displayFullName());

// The invocation above will return:
"Oluwatobi Sofela"
```

In the snippet above, `displayFullName()` successfully returned `"Oluwatobi Sofela"` because `displayFullName()` and `showLastName()` are in the same lexical scope.

In other words, `displayFullName()` could invoke `showLastName()` because the two functions are both defined in the global scope.

**Note:**

-   In example 2 above, `displayFullName()` did not gain access to `showLastName()`'s `lastName` variable.  
    Instead, `displayFullName()` invoked `showLastName()` — which then returned the content of its `lastName` variable.
-   An alternative to the lexical scope is the [dynamic scope](https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scope_vs._dynamic_scope_2) — but it rarely gets used in programming. Only a few languages, like bash, use dynamic scope.

## Wrapping it up

Any time you hear lexical, think definition.

So, the lexical scope of a car, variable, phone, function, or swimsuit refers to its definition region.

## Overview

This article discussed what lexical scope means in [JavaScript](https://www.codesweetly.com/html-css-javascript/). We also looked at why it is an important programming concept.

Thanks for reading!
