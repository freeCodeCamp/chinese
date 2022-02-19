> -  原文地址：[Event Loops in NodeJS – Beginner's Guide to Synchronous and Asynchronous Code](https://www.freecodecamp.org/news/nodejs-eventloop-tutorial/)
> -  原文作者：[
                    
                        Tejan Singh
                    
                ](https://www.freecodecamp.org/news/author/tejan/)
> -  译者：
> -  校对者：

![Event Loops in NodeJS – Beginner's Guide to Synchronous and Asynchronous Code](https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/oliver-hale-2cYueJxEDz8-unsplash.jpg)

NodeJS is an asynchronous event-driven JavaScript runtime environment designed to build scalable network applications.

Asynchronous here refers to all those functions in JavaScript that are processed in the background without blocking any other request.

In this article, you will learn and understand how NodeJS works and handles all functions or requests sent to a server either _synchronously_ or _asynchronously_.

## What is an Event Loop?

You might have guessed it right – Node handles requests using an **Event loop** inside the NodeJS environment. But first, let's understand some basic terms which will help us understand the whole mechanism.

An event loop is an **event-listener** which functions inside the NodeJS environment and is always ready to listen, process, and output for an _event_.

An event can be anything from a mouse click to a keypress or a timeout.

## What are Synchronous and Asynchronous programming?

**Synchronous programming** means that the code runs in the sequence it is defined. In a synchronous program, when a function is called and has returned some value, only then will the next line be executed.

Let's understand with this an example:

```js
const listItems = function(items) {
  items.forEach(function(item) {
    console.log(item)
  })
}

const items = ["Buy milk", "Buy coffee"]

listItems(items)
```

```
The output will look like this:

"Buy milk"
"Buy coffee"

```

In this example, when the `listItems(items)` function is called, it will loop through the array of items. The `console.log(item)` function gets called first for the first item of the array and it prints `"Buy milk"`. Then again `console.log(item)` gets executed and this time it passes the second item of the array and prints `"Buy coffee"`.

So you can say that the function was executed in the **sequence** it was defined.

**Asynchronous programming**, on the other hand, refers code that doesn't execute in sequence. These functions are performed not according to the sequence they are defined inside a program but only when certain conditions are met.

For example, `setTimeOut()` performs a task after a delay of a certain predefined number of miliseconds.

```js
setTimeOut(function(){
    return( console.log("Hello World!") )
}, 3000)
```

These functions do not run line by line but only when they are required to run, irrespective of the function's declaration. In this case, the function runs automatically after 3 seconds when all synchronous functions have been executed.

_Note: Asynchronous functions will run and execute only after all the synchronous functions have been executed. Until then, they will be processed in the background._

If you want to learn more about NodeJS and asynchronous programming, you can refer to this [article](https://www.freecodecamp.org/news/node-js-what-when-where-why-how-ab8424886e2/)

But, how does NodeJS handle asynchronous functions in the background and run all synchronous functions first? All these mechanisms can be easily explained with the NodeJS event loop.

## How Does an Event Loop Work?

Now let's see how NodeJS event loops can execute a simple synchronous program using a Nodejs event loop diagram. Then we'll examine how Node executes the program line by line.

As we go through this section you'll start to understand what you are seeing here:  
![1](https://www.freecodecamp.org/news/content/images/2021/08/1.PNG)

In the top-left corner, you have a Node file that is going to get executed. At the bottom left, you have an output terminal for the program. Then you have _Call stack, Node APIs and Callback queue._ All these together constitute the NodeJS environment.

For synchronous programming, you only need to focus on the call stack. This is the only part of the NodeJS environment that will be working in this case.

A callback stack is a data structure that you use to keep track of the execution of all functions that will run inside the program. This data structure has only one open end to add or remove top items.

When the program starts executing, it first gets wrapped inside an anonymous `main()` function. This is automatically defined by NodeJS. So `main()` gets pushed first to the callback stack.

![2](https://www.freecodecamp.org/news/content/images/2021/08/2.PNG)

Next, the variables `a` and `b` are created and their sum is stored in a variable `sum`. All these values are stored in memory.

Now, the `console.log()` is a function that is called and pushed inside the callback stack. It gets executed and you can see the output on the terminal screen.

![3](https://www.freecodecamp.org/news/content/images/2021/08/3.PNG)

After this function gets executed, it is removed from the callback stack. Then the `main()` is also removed as nothing is left to be called from the program. This is how a synchronous program gets executed.

![4](https://www.freecodecamp.org/news/content/images/2021/08/4.PNG)  
![5](https://www.freecodecamp.org/news/content/images/2021/08/5.PNG)

Now, let's see how asynchronous functions or programs get executed inside NodeJS. We need the callback stack, Node APIs and callback queue all together to process an asynchronous function.

Let's start by looking at this example:

![1-1](https://www.freecodecamp.org/news/content/images/2021/08/1-1.PNG)

As usual, when the program starts executing, first the `main()` function gets added to the callback stack. Then `console.log("Start")` is called and added to the callback stack. After processing, the output is visible on the terminal and then it gets removed from the callback stack.

![2-1](https://www.freecodecamp.org/news/content/images/2021/08/2-1.PNG)  
![3-1](https://www.freecodecamp.org/news/content/images/2021/08/3-1.PNG)

Now the next is the `setTimeOut(...Zero...)` function which gets added to the callback stack.

As this is an asynchronous function, it will **not** get processed in the callback stack. It is then added from the callback stack to the Node APIs where an event is registered and a callback function is set to get processed in the background.

![4-1](https://www.freecodecamp.org/news/content/images/2021/08/4-1.PNG)  
![5-1](https://www.freecodecamp.org/news/content/images/2021/08/5-1.PNG)

Next is the `setTimeOut(...Two..)` which also gets added to the Node API from the callback stack as it is an asynchronous function. Then another callback function gets set to be processed after a 2 second timeout in the background. Up until this point other functions can be performed.

This is called **non-blocking** behaviour where all the synchronous functions are processed and executed first and asynchronous functions are processed in the background while waiting their turn to get executed.

![6](https://www.freecodecamp.org/news/content/images/2021/08/6.PNG)  
![7](https://www.freecodecamp.org/news/content/images/2021/08/7.PNG)

Next, the `console.log("End")` function is called at last in the callback stack and gets processed here. You can see the output on the terminal. Now, all the synchronous functions are processed, and `main()` is removed from the callback stack.

In the background, all the asynchronous functions get processed and their callbacks are stored in the callback queue. The one which is processed first will be added first in the queue for execution in the callback stack.

![8](https://www.freecodecamp.org/news/content/images/2021/08/8.PNG)  
![9](https://www.freecodecamp.org/news/content/images/2021/08/9.PNG)  
![10](https://www.freecodecamp.org/news/content/images/2021/08/10.PNG)

_Note: Asynchronous functions cannot run inside a callback stack until it gets emptied. That means that after `main()` is removed from call stack, only then can all asynchronous functions start executing._

Now, one by one they are pushed to the callback stack using the **event loop** and finally get executed. Each of the callback functions will print the value with the `console.log()` function getting called each time.

![11](https://www.freecodecamp.org/news/content/images/2021/08/11.PNG)

At last, these are also removed after being executed and now the callback stack is empty.

![12](https://www.freecodecamp.org/news/content/images/2021/08/12.PNG)

This is how NodeJS will execute synchronous and asynchronous funtions inside the environment and how the event loop manages to call asynchronous functions.

## Conclusion

In this article, you learned the internal working of NodeJS and saw how asynchronous programs get executed.

Now you should understand why the two second time delay function does not block the rest of the program from executing. You also know why the zero second delay function prints the value at last after "End" prints.

That’s all! I hope you enjoyed reading this article and learned something new. Do share this article if you find it useful.