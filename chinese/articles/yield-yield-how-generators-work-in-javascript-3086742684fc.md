> -  原文地址：[Yield! Yield! How Generators work in JavaScript.](https://www.freecodecamp.org/news/yield-yield-how-generators-work-in-javascript-3086742684fc/)
> -  原文作者：[Anonymous](https://www.freecodecamp.orgAnonymous)
> -  译者：
> -  校对者：

![Yield! Yield! How Generators work in JavaScript.](https://cdn-media-1.freecodecamp.org/images/0*Ts8-usYa-T4lL8yc)

by Ashay Mandwarya ?️??

# Yield! Yield! How Generators work in JavaScript

![js0jIJmWBpkS7FqofAi1h-JFSyq6FXE1cyC5](https://cdn-media-1.freecodecamp.org/images/js0jIJmWBpkS7FqofAi1h-JFSyq6FXE1cyC5)

Photo by [Frederik Trovatten.com](https://unsplash.com/@trovatten?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

If the title doesn’t already give a hint, we will be discussing generators in this piece.

Before going into generators let’s revise some basics about functions.

-   In JavaScript, functions are a set of statements that perform a task and return some value ending the function.
-   If you call a function, again and again, it will execute all the statements again and again.
-   Arrows once left from the bow cannot be stopped — they only either hit or miss. The same way a function once called cannot be stopped, it will run, return a value, throw an error and then will stop after executing all the statements.

We only need to keep in mind these 3 points to understand generators.

### Generators

A generator is a special type of function which can stop its execution midway and then start from the same point after some time. Generators are a combination of functions and iterators. This is a bit of a confusing statement but I will make sure by the end of the article this line will be clear.

For clarity, consider playing a game and suddenly mom calls for some work. You pause the game, help her, then resume playing again. It is the same with generators.

> An **iterator** is an object which defines a sequence and potentially a return value upon its termination. — MDN.

_Iterators in themselves are a huge topic and are not the aim of this article._

#### Basic Syntax

Generators are defined as a function with an asterisk(\*) beside the function.

```
function* name(arguments) {   statements}
```

**name —** The function name.

**arguments —** Arguments for the function.

**statements —** The body of the function.

#### Return

A function can return almost anything ranging from a value, object or another function itself. A generator function returns a special object called the generator object (_not entirely true_). The object looks like the snippet below

```
{   value: value,  done: true|false}
```

The object has two properties `value` and `done` . The value contains the value to be **yielded.** Done consists of a **Boolean (true|false)** which tells the generator if **.next()** will yield a value or **undefined.**

The above statement will be difficult to digest. Let's change that with an example.

![2GKCXYgOAdydbo5qaKeXPayVwUXMpDPPzY1p](https://cdn-media-1.freecodecamp.org/images/2GKCXYgOAdydbo5qaKeXPayVwUXMpDPPzY1p)

```
function* generator(e) {  yield e + 10;  yield e + 25;  yield e + 33;}var generate = generator(27);
```

```
console.log(generate.next().value); // 37console.log(generate.next().value); // 52console.log(generate.next().value); // 60console.log(generate.next().value); // undefined
```

Let’s understand the mechanics of the above code line by line.

**_lines 1–5:_** Lines 1–5 define the generator having the same name with an argument e. Inside the body of the function, it contains a bunch of statements with the keyword yield and some operation is done after that.

**_line 6:_** Line 6 assigns the generator to a variable called generate.

**_lines 8–11:_** These lines call a bunch of `console.log` each calling the generator chained to a `next` method which calls for the `value` property of the generator object.

![cafqdPSIaj55dp6A5GaErDFtrS0LueYhf87K](https://cdn-media-1.freecodecamp.org/images/cafqdPSIaj55dp6A5GaErDFtrS0LueYhf87K)

Whenever a generator function is called upon, unlike normal functions it does not start execution right away. Instead, an iterator is returned (_the actual reason \* is used by a generator. It tells JS that an iterator object is to be returned_). When the `next()`method of the iterator is called, the execution of the generator starts and executes until it finds the first `yield` statement. At this yield point the generator object is returned, the specifications of which are already explained. Calling the `next()` function again will resume the generator function until it finds another `yield` statement and the cycle returns till all `yields` are exhausted.

![b8YEAKz8FN0BiZTL-9nWtahqnChK1A0dcnIa](https://cdn-media-1.freecodecamp.org/images/b8YEAKz8FN0BiZTL-9nWtahqnChK1A0dcnIa)

After this point if `next` is called it returns the generator object with value undefined.

Now let’s try yielding another generator function from the original generator and also a return statement.

![cwoYBqzWffwSM5RCEJAUzpsPs-U39zfe6EV1](https://cdn-media-1.freecodecamp.org/images/cwoYBqzWffwSM5RCEJAUzpsPs-U39zfe6EV1)

A `return` statement in a generator will make the generator finish its execution like every other function. The `done property` of the generator object will be set to `true` and the `value` returned will be set to the `value` property of the generator object. All other `yields` will return `undefined`.

If an error is thrown then also the execution of the generator will stop, yielding a generator itself.

![VtjqhfNkczhAnzaY7BmLV1Y7fLs0Du3cVzQP](https://cdn-media-1.freecodecamp.org/images/VtjqhfNkczhAnzaY7BmLV1Y7fLs0Du3cVzQP)

For `yielding` a generator we need to specify an \* against the `yield` so as to tell JS that a generator is yielded. The `[yield*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*)` delegates to another generator function — that is the reason we can `yield` all the values of the `generator2` function using the `generate.next()` of the original generator function. The first value `yielded` is from the first generator function and the last two `yielded` values are generated by the generator function but `yielded` by the original generator.

#### Advantages

**Lazy loading**

Lazy loading is essentially value evaluation only when there is a need for it. As we will see in a coming example, we can actually do it with generators. We might only yield the values when needed and not all at the same time.

The below example is from another example in this article and it generates infinite random numbers. Here we can see we can call as many `next()` as we want and not get all the values it is producing. Only the needed ones.

![0uRO5-e1uAChjJR9-m21IhjV46cZ7tzH10Xl](https://cdn-media-1.freecodecamp.org/images/0uRO5-e1uAChjJR9-m21IhjV46cZ7tzH10Xl)

```
function * randomize() {  while (true) {let random = Math.floor(Math.random()*1000);    yield random;  }}
```

```
var random= randomize();
```

```
console.log(random.next().value)
```

**Memory Efficient**

As we can deduce from the above example, generators are extremely memory efficient. As we want the values only according to need, we need very less storage for storing those values.

#### Pitfalls

Generators are extremely useful but also have their own pitfalls too.

-   **Generators don’t provide random access** like arrays and other data structures. As the values are yielded one by one on call we cannot access random elements.
-   **Generators provide one-time access.** Generators don’t allow you to iterate the values again and again. Once all the values are exhausted we have to make a new Generator instance to iterate all the values again.

#### Why do we need Generators?

Generators provide a wide variety of uses in JavaScript. Let’s try to recreate some ourselves.

**Implementing Iterators**

> **An iterator** is an object that enables a programmer to traverse a container -Wikipedia

We will print all the words present in a string using iterators. Strings are iterators too.

**Iterators**

![jxlJeu0eRnrbnVoQQiUnQWuW6WRqy6lewlui](https://cdn-media-1.freecodecamp.org/images/jxlJeu0eRnrbnVoQQiUnQWuW6WRqy6lewlui)

```
const string = 'abcde';const iterator = string[Symbol.iterator]();console.log(iterator.next().value)console.log(iterator.next().value)console.log(iterator.next().value)console.log(iterator.next().value)console.log(iterator.next().value)
```

Here’s the same thing using generators

![BLoMgkxRn2Um8XnncvONthkIzSnwnDtLZxtd](https://cdn-media-1.freecodecamp.org/images/BLoMgkxRn2Um8XnncvONthkIzSnwnDtLZxtd)

```
function * iterator() {yield 'a';yield 'b';yield 'c';yield 'd';yield 'e';}for (let x of iterator()) {console.log(x);}
```

Comparing both the methods, it is easy to see that with the help of generators we can do it with less clutter. I know it is not a very good example but enough to prove the following points:

-   No implementation of `next()`
-   No `[Symbol.iterator]()` invocation
-   In some cases, we even need to set the `object.done` property return value to true/false using iterators.

#### Async-Await ~ Promises+Generators

You can read my [previous](https://medium.com/@ashaymurceilago/async-await-javascript-5038668ec6eb) article about Async/Await if you want to learn about them, and check out [this](https://medium.com/javascript-in-plain-english/truly-understanding-promises-in-javascript-cb31ee487860) for Promises.

Crudely, Async/Await is just an implementation of Generators used with Promises.

Async-Await

```
async function async-await(){let a=await(task1);console.log(a);
```

```
let b=await(task2);console.log(b);
```

```
let c=await(task3);console.log(c);
```

```
}
```

Promises+Generators

```
function * generator-promise(){let a=yield Promise1();console.log(a);let b=yield Promise1();console.log(b);let c=yield Promise1();console.log(c);
```

```
}
```

As we can see, both produce the same result and almost in a similar fashion too. It’s because the Async/Await mechanism is loosely based on a combination of generators and promise. There is a lot more to Async/Await than shown above, but just for showing the use of a generator, we can consider this.

#### Infinite Data Structure

The heading might be a little misleading, but it is true. We can create generators, with the use of a while loop that will never end and will always yield a value.

![ximCs8aJ4EUtQfo8AAPza6eRK9IAUd70QLCN](https://cdn-media-1.freecodecamp.org/images/ximCs8aJ4EUtQfo8AAPza6eRK9IAUd70QLCN)

```
function * randomize() {  while (true) {let random = Math.floor(Math.random()*1000);    yield random;  }}var random= randomize();while(true)console.log(random.next().value)
```

In the above snippet, we create an infinite generator, which will yield a random number on every `next()` invocation. It can be called as an infinite stream of random numbers. This is a very basic example.

### Conclusion

There is yet a lot to be covered about generators, and this was just an introduction to the topic. Hope you learned something new and the article was easy to understand.

Follow me and applaud!

![dagqbne49wWylj3wlhZWGKij2pXISMlkKyn6](https://cdn-media-1.freecodecamp.org/images/dagqbne49wWylj3wlhZWGKij2pXISMlkKyn6)