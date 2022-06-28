> -  原文地址：[Asynchronous JavaScript – Callbacks, Promises, and Async/Await Explained](https://www.freecodecamp.org/news/asynchronous-javascript-explained/)
> -  原文作者：[Njong Emy](https://www.freecodecamp.org/news/author/afumbom_bingeh/)
> -  译者：Utopia-xxl
> -  校对者：

![Asynchronous JavaScript – Callbacks, Promises, and Async/Await Explained](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/Purple-Minimal-We-Are-Hiring-Twitter-Post--1--1.gif)

If you've been learning JavaScript for a while now, then you've probably heard the term "asynchronous" before.

This is because JavaScript is an asynchronous language...but what does that really mean? In this article, I hope to show you that the concept is not as difficult as it sounds.

# Synchronous vs Asynchronous

Before we hop into the real deal, let's look at these two words – synchronous and asynchronous.

By default, JavaScript is a synchronous, single threaded programming language. This means that instructions can only run one after another, and not in parallel. Consider the little code snippet below:

```javascript
let a = 1;
let b = 2;
let sum = a + b;
console.log(sum);
```

The above code is pretty simple – it sums two numbers and then logs the sum to the browser console. The interpreter executes these instructions one after another in that order until it is done.

But this method comes along with disadvantages. Say we wanted to fetch some large amount of data from a database and then display it on our interface. When the interpreter reaches the instruction that fetches this data, the rest of the code is blocked from executing until the data has been fetched and returned.

Now you might say that the data to be fetched isn't that large and it won't take any noticeable time. Imagine that you have to fetch data at multiple different points. This delay compounded doesn't sound like something users would want to come across.

Luckily for us, the problems with synchronous JavaScript were addressed by introducing asynchronous JavaScript.

Think of asynchronous code as code that can start now, and finish its execution later. When JavaScript is running asynchronously, the instructions are not necessarily executed one after the other as we saw before.

In order to properly implement this asynchronous behavior, there are a few different solutions developers has used over the years. Each solution improves upon the previous one, which makes the code more optimized and easier to understand in case it gets complex.

To further understand the asynchronous nature of JavaScript, we will go through callback functions, promises, and async and await.

# What are Callbacks in JavaScript?

A callback is a function that is passed inside another function, and then called in that function to perform a task.

Confusing? Let's break it down by practically implementing it.

```Javascript
console.log('fired first');
console.log('fired second');

setTimeout(()=>{
    console.log('fired third');
},2000);

console.log('fired last');
```

The snippet above is a small program that logs stuff to the console. But there is something new here. The interpreter will execute the first instruction, then the second, but it will skip over the third and execute the last.

The `setTimeout` is a JavaScript function that takes two parameters. The first parameter is another function, and the second is the time after which that function should be executed in milliseconds. Now you see the definition of callbacks coming into play.

The function inside `setTimeout` in this case is required to run after two seconds (2000 milliseconds). Imagine it being carried off to be executed in some separate part of the browser, while the other instructions continue executing. After two seconds, the results of the function are then returned.

That is why if we run the above snippet in our program, we will get this:

```javascript
fired first
fired second
fired last
fired third
```

You see that the last instruction is logged before the function in the `setTimeout` returns its result. Say we used this method to fetch data from a database. While the user is waiting for the database call to return results, the flow in execution will not be interrupted.

This method was very efficient, but only to a certain point. Sometimes, developers have to make multiple calls to different sources in their code. In order to make these calls, callbacks are being nested until they become very hard to read or maintain. This is referred to as **Callback Hell**

To fix this problem, promises were introduced.

# What are Promises in JavaScript?

We hear people make promises all the time. That cousin of yours who promised to send you free money, a kid promising to not touch the cookie jar again without permission...but promises in JavaScript are slightly different.

A promise, in our context, is something which will take some time to do. There are two possible outcomes of a promise:

-   We either run and resolve the promise, or
-   Some error occurs along the line and the promise is rejected

Promises came along to solve the problems of callback functions. A promise takes in two functions as parameters. That is, `resolve` and `reject`. Remember that resolve is success, and reject is for when an error occurs.

Let's take a look at promises at work:

```JavaScript
const getData = (dataEndpoint) => {
   return new Promise ((resolve, reject) => {
     //some request to the endpoint;
     
     if(request is successful){
       //do something;
       resolve();
     }
     else if(there is an error){
       reject();
     }
   
   });
};
```

The code above is a promise, enclosed by a request to some endpoint. The promise takes in `resolve` and `reject` like I mentioned before.

After making a call to the endpoint for example, if the request is successful, we would resolve the promise and go on to do whatever we want with the response. But if there is an error, the promise will get rejected.

Promises are a neat way to fix problems brought about by callback hell, in a method known as **promise chaining**. You can use this method to sequentially get data from multiple endpoints, but with less code and easier methods.

But there is an even better way! You might be familiar with the following method, as it's a preferred way of handling data and API calls in JavaScript.

# What is Async and Await in JavaScript?

The thing is, chaining promises together just like callbacks can get pretty bulky and confusing. That's why Async and Await was brought about.

To define an async function, you do this:

```JavaScript
const asyncFunc = async() => {

}
```

Note that calling an async function will always return a Promise. Take a look at this:

```JavaScript
const test = asyncFunc();
console.log(test);
```

Running the above in the browser console, we see that the `asyncFunc` returns a promise.

Let's really break down some code now. Consider the little snippet below:

```JavaScript
const asyncFunc = async () => {
	const response = await fetch(resource);
   	const data = await response.json();
}
```

The `async` keyword is what we use to define async functions as I mentioned above. But how about `await` ? Well, it stalls JavaScript from assigning `fetch` to the response variable until the promise has been resolved. Once the promise has been resolved, the results from the fetch method can now be assigned to the response variable.

The same thing happens on line 3. The `.json` method returns a promise, and we can use `await` still to delay the assigning until the promise is resolved.

# To Block Code or Not to Block Code

When I say 'stalling', you must think that implementing Async and Await somehow blocks code execution. Because what if our request takes too long, right?

Fact is, it doesn't. Code that is inside the async function is blocking, but that doesn't affect program execution in any way. The execution of our code is just as asynchronous as ever. To show this,

```
const asyncFunc = async () => {
	const response = await fetch(resource);
   	const data = await response.json();
}

console.log(1);
cosole.log(2);

asyncFunc().then(data => console.log(data));

console.log(3);
console.log(4);
```

In our browser console, the output of the above would look something like this:

```
1
2
3
4
data returned by asyncFunc
```

You see that as we called `asyncFunc`, our code continued running until it was time for the function to return results.

# Conclusion

This article does not treat these concepts in great depth, but I hope it shows you what asynchronous JavaScript entails and a few things to look out for.

It is a very essential part of JavaScript, and this article only scratches the surface. Nonetheless, I hope this article helped to break down these concepts.
