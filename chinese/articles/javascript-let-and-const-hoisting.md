> -  原文地址：[Hoisting in JavaScript with let and const – and How it Differs from var](https://www.freecodecamp.org/news/javascript-let-and-const-hoisting/)
> -  原文作者：[Dillion Megida](https://www.freecodecamp.org/news/author/dillionmegida/)
> -  译者：
> -  校对者：

![Hoisting in JavaScript with let and const – and How it Differs from var](https://www.freecodecamp.org/news/content/images/size/w2000/2022/11/5.-let-const-hoisting.png)

I used to think that hoisting only happened to variables declared with `var`. But recently, I learned that it also happens to variables declared with `let` and `const`.

I'll explain what I mean in this article.

I also have a [video version of this article](https://www.youtube.com/watch?v=VbHaL_J8Ex0) you can check out if you're interested.

## How Hoisting Works with `var` in JavaScript

Here's how hoisting works on variables declared with `var`:

```js
console.log(number)
// undefined

var number = 10

console.log(number)
// 10
```

The `number` variable is hoisted to the top of the global scope. This makes it possible to access the variable before the line it was declared, without errors.

But what you'll notice here is that only the variable declaration (`var number`) is hoisted – the initialization (`= 10`) isn't. So when you try to access `number` before it is declared, you get the **default initialization that happens with var** which is `undefined`.

Then, the declaration and initialization line is executed, so accessing `number` after that returns the initialized value, **10**.

## How Hoisting Works with let/const in JavaScript

If you try to do the same thing as above with `let` or `const`, here's what happens:

```js
console.log(number)

let number = 10
// or const number = 10

console.log(number)
```

You get an error that says: **ReferenceError: Cannot access 'number' before initialization**.

So you can access a variable declared with var before declaration without errors, but you cannot do the same with `let` or `const`.

This why I had always thought that hoisting only happens with var, it doesn't happen with let or const.

But as I said, I learned recently that variables declared with `let` or `const` are also hoisted. Let me explain.

Take a look at this example:

```js
console.log(number2)

let number = 10
```

I log a variable called `number2` to the console, and I declare and initialize a variable called `number`.

Running this code produces this error: **ReferenceError: number2 is not defined**

What do you notice between the previous error and this error? The previous error says **ReferenceError: Cannot access 'number' before initialization** while this new error says **ReferenceError: number2 is not defined**.

Here's the difference. The former says "cannot access before initialization" while the latter says "is not defined".

What the latter means is that JavaScript has no idea what the `number2` variable is because it is not defined – and indeed we didn't define it. We only defined `number`.

But the former doesn't say "is not defined", instead it says, "cannot access before initialization". Here's the code again:

```js
console.log(number)
// ReferenceError: Cannot access 'number' before initialization

let number = 10

console.log(number)
```

This means that JavaScript "knows" about the `number` variable. How does it know? Because `number` is hoisted to the top of the global scope.

But why does an error occur? Well, this clarifies the difference between the hoisting behavior with `var` and `let`/`const`.

Variables declared with `let` or `const` are **hoisted WITHOUT a default initialization**. So accessing them before the line they were declared throws **ReferenceError: Cannot access 'variable' before initialization**.

But variables declared with `var` are **hoisted WITH a default initialization of undefined**. So accessing them before the line they were declared returns `undefined`.

## Temporal Dead Zone

There's a name for the period during execution where `let`/`const` variables are hoisted but not accessible: it's called the **Temporal Dead Zone**.

Again, the code from above:

```js
console.log(number)

let number = 10

console.log(number)
```

The `number` variable is in a temporal dead zone where JavaScript knows of its existence (because its declaration is hoisted) but it's not accessible (as it doesn't have an initialization).

## Wrapping Up

If you were like me, and you thought that hoisting only applies with `var` and not `let`/`const`, I hope this article clears up that false assumption.

As I've explained in this article, `let` and `const` variables are hoisted, only they are hoisted without a default initialization. This makes them inaccessible (as such variables are in a temporal dead zone).

Variables declared with `var`, on the other hand, are hoisted with a default initialization of `undefined`.

I hope you learned something from this article :)