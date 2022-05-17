> -  原文地址：[Node.js Async Await Tutorial – With Asynchronous JavaScript Examples](https://www.freecodecamp.org/news/node-js-async-await-tutorial-with-asynchronous-javascript-examples/)
> -  原文作者：[
                    
                        Stanley Nguyen
                    
                ](https://www.freecodecamp.org/news/author/stanley/)
> -  译者：
> -  校对者：

![Node.js Async Await Tutorial – With Asynchronous JavaScript Examples](https://www.freecodecamp.org/news/content/images/size/w2000/2021/05/yoda.jpeg)

One of the hardest concepts to wrap your head around when you're first learning JavaScript is the asynchronous processing model of the language. For the majority of us, learning asynchronous programming looks pretty much like this

![async](https://www.freecodecamp.org/news/content/images/2021/05/async.png)

If your first time working with async wasn't like this, please consider yourself a genius

As hard as it is to pick up, async programming is critical to learn if you want to use JavaScript and Node.js to build web applications and servers – because JS code is **asynchronous by default**.

## Asynchronous Programming Fundamentals

So what exactly is the asynchronous processing model, or the `non-blocking I/O` model (which you've likely heard of if you're a Node.js user)?

Here's a TL;DR description: in an async processing model, when your application engine interacts with external parties (like a file system or network), it doesn't wait until getting a result from those parties. Instead, it continues on to subsequent tasks and only comes back to those previous external parties once it's gotten a signal of a result.

To understand the default async processing model of Node.js, let's have a look at a hypothetical Santa's workshop. Before any work can begin, Santa will have to read each of the lovely letters from kids around the world.

![Santa reading letter for workshop](https://www.freecodecamp.org/news/content/images/2021/05/santa-01.png)

He will then figure out the requested gift, translate the item name into [the Elvish language](https://en.wikipedia.org/wiki/Elvish_languages), and then pass the instruction to each of our hard working elves who have different specialisations: wooden toys for Red, stuffed toys for Blue, and robotic toys for Green.

![Santa passing instruction to Red](https://www.freecodecamp.org/news/content/images/2021/05/santa-02.png)

This year, due to [the COVID-19 pandemic](https://en.wikipedia.org/wiki/COVID-19_pandemic), only half Santa's elves can come to his workshop to help. Still, because he's wise, Santa decides that instead of waiting for each elf to finish preparing a gift (that is, working synchronously), he will continue translating and passing out instructions from his pile of letters.

![Santa passing instruction to Blue](https://www.freecodecamp.org/news/content/images/2021/05/santa-03.png)

So on and so forth...

![Santa continue passing out instructions](https://www.freecodecamp.org/news/content/images/2021/05/santa-04.png)

As he is just about to read another letter, Red informs Santa that he has completed  
preparing the first gift. Santa then receives the present from Red, and puts it to one side.

![Santa receiving Red's present](https://www.freecodecamp.org/news/content/images/2021/05/santa-05.png)

And then he continues translating and passing instructions from the next letter.

![Santa passing instruction to Green](https://www.freecodecamp.org/news/content/images/2021/05/santa-06.png)

As he only needs to wrap a pre-made flying robot, Green can quickly finish preparation and pass the present to Santa.

![Santa receiving Green's present](https://www.freecodecamp.org/news/content/images/2021/05/santa-07.png)

After a whole day of hard and asynchronous work, Santa and the elves manage to complete all present preparation. With his improved asynchronous model of working, Santa's workshop is finished in record time despite being hard-hit by the pandemic.

![Santa's gotten all the presents](https://www.freecodecamp.org/news/content/images/2021/05/santa-08.png)

So that's the basic idea of an asynchronous or non-blocking I/O processing model. Now let's see how it's done in Node.js specifically.

## The Node.js Event Loop

You might have heard that Node.js is single-threaded. However, to be exact, only the event loop in Node.js, which interacts with a pool of background C++ worker threads, is single-threaded. There are four important components to the Node.js processing model:

-   Event Queue: Tasks that are declared in a program, or returned from the processing thread pool via [callbacks](https://nodejs.org/en/knowledge/getting-started/control-flow/what-are-callbacks/). (The equivalent of this in our Santa's workshop is the pile of letters for Santa.)
-   Event Loop: The main Node.js thread that facilitates event queues and worker thread pools to carry out operations – both async and synchronous. (This is Santa. 🎅)
-   Background thread pool: These threads do the actual processing of tasks, which  
    might be I/O blocking (for example calling and waiting for a response from an external API). (These are the hardworking elves 🧝🧝‍♀️🧝‍♂️ from our workshop.)

You can visualize this processing model as below:

![processing-model](https://www.freecodecamp.org/news/content/images/2021/05/processing-model.png)

Diagram courtesy of c-sharpcorner.com

Let's look at an actual snippet of code to see these in action:

```js
console.log("Hello");
https.get("https://httpstat.us/200", (res) => {
  console.log(`API returned status: ${res.statusCode}`);
});
console.log("from the other side");
```

If we execute the above piece of code, we would get this in our standard output:

```bash
Hello
from the other side
API returned status: 200
```

So how does the Node.js engine carry out the above snippet of code? It starts with three functions in the call stack:

![Processing starts with 3 functions in the call stack](https://www.freecodecamp.org/news/content/images/2021/05/execution-01-1.png)

"Hello" is then printed to the console with the corresponding function call removed from the stack.

![Hello console log removed from stack](https://www.freecodecamp.org/news/content/images/2021/05/execution-02-1.png)

The function call to `https.get` (that is, making a get request to the corresponding URL) is then executed and delegated to the worker thread pool with a callback attached.

![https.get delegated to worker pool](https://www.freecodecamp.org/news/content/images/2021/05/execution-03.png)

The next function call to `console.log` gets executed, and "from the other side" is printed to the console.

![Next console.log get executed](https://www.freecodecamp.org/news/content/images/2021/05/execution-04.png)

Now that the network call has returned a response, the callback function call will then get queued inside the callback queue. Note that this step could happen before the immediate previous step (that is, "from the other side" getting printed), though normally that's not the case.

![Network call completes and callback queued](https://www.freecodecamp.org/news/content/images/2021/05/execution-05.png)

The callback then gets put inside our call stack:

![Callback put inside call stack](https://www.freecodecamp.org/news/content/images/2021/05/execution-06.png)

and then we will see "API returned status: 200" in our console, like this:

![Status code printed out](https://www.freecodecamp.org/news/content/images/2021/05/execution-07.png)

By facilitating the callback queue and call stack, the event loop in Node.js efficiently executes our JavaScript code in an asynchronous way.

## A synchronous history of JavaScript & Node.js async/await

Now that you have good understanding of asynchronous execution and the inner-workings of the Node.js event loop, let's dive into async/await in JavaScript. We'll look at how it's worked through time, from the original callback-driven implementation to the latest shiny async/await keywords.

### Callbacks in JavaScript

The OG way of handling the asynchronous nature of JavaScript engines was through callbacks. Callbacks are basically functions which will be executed, **usually**, at the end of synchronous or I/O blocking operations.

A straightforward example of this pattern is the built-in `setTimeout` function that will wait for a certain number of milliseconds before executing the callback.

```js
setTimeout(2000, () => {
  console.log("Hello");
});
```

While it's convenient to just attach callbacks to blocking operations, this pattern also introduces a couple of problems:

-   Callback hell
-   Inversion of control (not the good kind!)

#### What is callback hell?

Let's look at an example with Santa and his elves again. To prepare a present, Santa's workshop would have to carry out a few different steps (with each taking different amounts of time simulated using `setTimeout`):

```js
function translateLetter(letter, callback) {
  return setTimeout(2000, () => {
    callback(letter.split("").reverse().join(""));
  });
}
function assembleToy(instruction, callback) {
  return setTimeout(3000, () => {
    const toy = instruction.split("").reverse().join("");
    if (toy.includes("wooden")) {
      return callback(`polished ${toy}`);
    } else if (toy.includes("stuffed")) {
      return callback(`colorful ${toy}`);
    } else if (toy.includes("robotic")) {
      return callback(`flying ${toy}`);
    }
    callback(toy);
  });
}
function wrapPresent(toy, callback) {
  return setTimeout(1000, () => {
    callback(`wrapped ${toy}`);
  });
}
```

These steps need to be carried out in a specific order:

```js
translateLetter("wooden truck", (instruction) => {
  assembleToy(instruction, (toy) => {
    wrapPresent(toy, console.log);
  });
});
// This will produced a "wrapped polished wooden truck" as the final result
```

As we do things this way, adding more steps to the process would mean pushing the inner callbacks to the right and ending up in callback hell like this:

![Callback Hell](https://www.freecodecamp.org/news/content/images/2021/05/callback-hell.jpeg)

Callbacks look sequential, but at times the execution order doesn't follow what is shown on your screen. With multiple layers of nested callbacks, you can easily lose track of the big picture of the whole program flow and produce more bugs or just become slower when writing your code.

So how do you solve this problem? Simply modularise the nested callbacks into named functions and you will have a nicely left-aligned program that's easy to read.

```js
function assembleCb(toy) {
  wrapPresent(toy, console.log);
}
function translateCb(instruction) {
  assembleToy(instruction, assembleCb);
}
translateLetter("wooden truck", translateCb);
```

#### Inversion of Control

Another problem with the callback pattern is that you don't decide how the higher-order functions will execute your callbacks. They might execute it at the end of the function, which is conventional, but they could also execute it at the start of the function or execute it multiple times.

Basically, you are at the mercy of your dependency owners, and you might never know when they will break your code.

To solve this problem, as a dependency user, there's not much you can do about it. However, if you're ever a dependency owner yourself, please always:

-   Stick to the conventional callback signature with error as the first argument
-   Execute a callback only once at the end of your higher-order function
-   Document anything out-of-convention that is absolutely required and always aim for backward compatibility

### Promises in JavaScript

[Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) were created to solve these above mentioned problems with callbacks. Promises make sure that JavaScript users:

-   Stick to a specific convention with their signature `resolve` and `reject` functions.
-   Chain the callback functions to a well-aligned and top-down flow.

Our previous example with Santa's workshop preparing presents can be rewritten with promises like so:

```js
function translateLetter(letter) {
  return new Promise((resolve, reject) => {
    setTimeout(2000, () => {
      resolve(letter.split("").reverse().join(""));
    });
  });
}
function assembleToy(instruction) {
  return new Promise((resolve, reject) => {
    setTimeout(3000, () => {
      const toy = instruction.split("").reverse().join("");
      if (toy.includes("wooden")) {
        return resolve(`polished ${toy}`);
      } else if (toy.includes("stuffed")) {
        return resolve(`colorful ${toy}`);
      } else if (toy.includes("robotic")) {
        return resolve(`flying ${toy}`);
      }
      resolve(toy);
    });
  });
}
function wrapPresent(toy) {
  return new Promise((resolve, reject) => {
    setTimeout(1000, () => {
      resolve(`wrapped ${toy}`);
    });
  });
}
```

with the steps being carried out nicely in a chain:

```js
translateLetter("wooden truck")
  .then((instruction) => {
    return assembleToy(instruction);
  })
  .then((toy) => {
    return wrapPresent(toy);
  })
  .then(console.log);
// This would produce the exact same present: wrapped polished wooden truck
```

However, promises are not without problems either. Data in each eye of our chain have a different scope and only have access data passed from the immediate previous step or parent scope.

For example, our gift-wrapping step might want to use data from the translation step:

```js
function wrapPresent(toy, instruction) {
  return Promise((resolve, reject) => {
    setTimeout(1000, () => {
      resolve(`wrapped ${toy} with instruction: "${instruction}`);
    });
  });
}
```

This is rather [a classic "memory sharing" problem with threading](https://livebook.manning.com/book/c-plus-plus-concurrency-in-action/chapter-3/1). To solve this, instead of using variables in the parent's scope, we should use `Promise.all` and ["share data by communicating, rather than communicate by sharing data"](https://blog.golang.org/codelab-share).

```js
translateLetter("wooden truck")
  .then((instruction) => {
    return Promise.all([assembleToy(instruction), instruction]);
  })
  .then((toy, instruction) => {
    return wrapPresent(toy, instruction);
  })
  .then(console.log);
// This would produce the present: wrapped polished wooden truck with instruction: "kcurt nedoow"
```

### Async/Await in JavaScript

Last but definitely not least, the shiniest kid around the block is async/await. It is very easy to use but it also has some risks.

Async/await solves the memory sharing problems of promises by having everything under the same scope. Our previous example can be rewritten easily like so:

```js
(async function main() {
  const instruction = await translateLetter("wooden truck");
  const toy = await assembleToy(instruction);
  const present = await wrapPresent(toy, instruction);
  console.log(present);
})();
// This would produce the present: wrapped polished wooden truck with instruction: "kcurt nedoow"
```

However, as much as it's easy to write asynchronous code with async/await, it's also easy to make mistakes that create performance loopholes.

Let's now localise our example Santa's workshop scenario to wrapping presents and loading them on the sleigh.

```js
function wrapPresent(toy) {
  return Promise((resolve, reject) => {
    setTimeout(5000 * Math.random(), () => {
      resolve(`wrapped ${toy}`);
    });
  });
}
function loadPresents(presents) {
  return Promise((resolve, reject) => {
    setTimeout(5000, () => {
      let itemList = "";
      for (let i = 0; i < presents.length; i++) {
        itemList += `${i}. ${presents[i]}\n`;
      }
    });
  });
}
```

A common mistake you might make is carrying out the steps this way:

```js
(async function main() {
  const presents = [];
  presents.push(await wrapPresent("wooden truck"));
  presents.push(await wrapPresent("flying robot"));
  presents.push(await wrapPresent("stuffed elephant"));
  const itemList = await loadPresents(presents);
  console.log(itemList);
})();
```

But does Santa need to `await` for each of the presents to be wrapped one by one before loading? Definitely not! The presents should be wrapped concurrently. You might make this mistake often as it's so easy to write `await` without thinking about the blocking nature of the keyword.

To solve this problem, we should bundle the gift wrapping steps together and execute them all at once:

```js
(async function main() {
  const presents = await Promise.all([
    wrapPresent("wooden truck"),
    wrapPresent("flying robot"),
    wrapPresent("stuffed elephant"),
  ]);
  const itemList = await loadPresents(presents);
  console.log(itemList);
})();
```

Here are some recommended steps to tackle concurrency performance issue in your Node.js code:

-   Identify hotspots with multiple consecutive awaits in your code
-   Check if they are dependent on each other (that is one function uses data returned from another)
-   Make independent function calls concurrent with `Promise.all`

## Wrapping up (the article, not Christmas presents 😂)

Congratulations on reaching the end of this article, I tried my best to make  
this post shorter, but the async topic in JavaScript is just so broad.

Here are some key takeaways:

-   Modularise your JavaScript callbacks to avoid callback hell
-   Stick to [the convention for JS callbacks](https://gist.github.com/sunnycmf/b2ad4f80a3b627f04ff2)
-   Share data by communicating through `Promise.all` when using promises
-   Be careful about the performance implication of async/await code

We ❤️ JavaScript :)

## Thank you for reading!

Last but not least, if you like my writings, please head over to [my blog](https://blog.stanleynguyen.me/) for similar commentaries and follow [me on Twitter](https://twitter.com/stanley_ngn). 🎉