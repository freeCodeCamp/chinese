> -  原文地址：[What is a Promise? JavaScript Promises for Beginners](https://www.freecodecamp.org/news/what-is-promise-in-javascript-for-beginners/)
> -  原文作者：[Kingsley Ubah](https://www.freecodecamp.org/news/author/ubahthebuilder/)
> -  译者：byself
> -  校对者：

![What is a Promise? JavaScript Promises for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/JS-Promises-Expl.png)

If you're a JavaScript beginner, you might be struggling to understand what a promise really is.

I recently published this as a thread on Twitter and was blown away by the responses. So I decided to expand this into an introductory tutorial on JavaScript promises.

I have read a lot of articles on promises and the problem is that many of these guides don't explain them in a relatable way. People don't understand what a promise is in JavaScript is because they don't really know what it is about and how it behaves in simple and relatable terms.

So in this article, I will be telling you a short story which explains what promises are and how exactly they work. I will also show you how to use promises in your JavaScript with some examples.

## What is a Promise in JavaScript?

Imagine that you are interviewing job seekers for a position at your company.

A young man frantically comes in for an interview. When his interview session is about to begin, he realizes that he has forgotten his résumé.

Bummer, right?

He's not daunted, though. Luckily for him, he has a roommate who was still at home at that time.

He quickly calls his roommate over the phone and asks him for help. He pleads with his roommate to help find his résumé. His roommate PROMISES to text back as soon as he has something to report.

Assuming the résumé is eventually found, he can text back:

> “Successful, I found your resume!”

But if he doesn't find it, he is supposed to text back a failure message with the reason why he couldn't find the résumé. For example, he may text this message over to his friend who's interviewing:

> “Sorry, I couldn’t find your résumé because the key to your safe is missing.”

In the meantime, the interview continues as planned, and the interviewer holds on to the promise of finding the résumé, and not the actual résumé. At that time, the interviewer sets the status of the résumé delivery to PENDING.

The interviewee answers all the questions he is asked. But ultimately, his employment still depends on the FINAL STATUS of his résumé.

His roommate finally texts back. As we discussed before, if he didn't find the résumé, he will share this failure with you along with the reason why he didn't find it.

When that happens, the interview will end and the interviewee will be rejected.

On the other hand, if the roommate finds the résumé, he will happily tell his friend that he was successful, and he will go ahead and FULFILL his hopes of getting a job.

## So How Does This Translate to JS Code?

The roommate promising to find the résumé and texting back is synonymous with how we define a promise in JavaScript. The code does not directly or immediately return a value. Instead, it returns a promise that it will eventually provide the value at a later time.

A promise in JavaScript is asynchronous, meaning it takes time to resolve or finish. Just as the search for the applicant's resume takes time to complete.

For that reason, the interviewer decides not to sit around doing nothing, so they begin interviewing the candidate based on the promise of a résumé delivery. We're using the promise of returning a résumé in place of an actual resume.

The JS engine also doesn’t wait around doing nothing – it starts executing other parts of the code, pending the returned value of the promise.

The message text contains the status message of the résumé search. With a JavaScript Promise, that is also called the return value.

If the message is a “success”, we will proceed to sign the candidate in and grant him the position. If it fails, we proceed to reject his application.

With JavaScript promises, we do this by [using a callback function](/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/) (promise handlers). These functions are defined in a nested `then()` method.

To specify what callbacks to call, you use the following two functions:

-   `resolve(value)`: This indicates that the asynchronous task was successful. This will call the fulfillment callback in the `then()` handler.
-   `reject(error)`: This indicates an error while trying to run the asynchronous task. This will call the rejection callback in the `then()` handler.

If the promise is successful, the fulfillment callback will be called. If the promise is rejected, the rejected call back will be called instead.

A promise is simply a placeholder for an asynchronous task which is yet to be completed. When you define a promise object in your script, instead of returning a value immediately, it returns a promise.

## How to Write a Promise in JavaScript

You can define a promise in your JavaScript by calling the `Promise` class and constructing an object like this:

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is the eventual value the promise will return');
  }, 300);
});

console.log(myPromise);
```

Code sample one

Running this in the console will return a `Promise` object:

![](https://www.freecodecamp.org/news/content/images/2021/08/promise-console-1.png)

Constructing an object is not the only way you can define a promise, though. You can also use the built-in `Promise` API to achieve the same thing:

```js
const anotherPromise = Promise.resolve("this is the eventual value the promise will return")

console.log(anotherPromise);
```

Code sample two

While the promise in the first code sample will wait for 3 seconds before fulfilling the promise with the `this is the eventual...` message, the promise in the second code sample will immediately fulfill it with the same message.

## Rejected Promises in JavaScript

A Promise can also be rejected. Most of the time, rejections occur because JS encountered some kind of error while running the Asynchronous code. In such a scenario, it calls the `reject()` function instead.

Here is simple and contrived example of how a promise can get rejected:

```js
const myPromise = new Promise((resolve, reject) => {
  let a = false;
  setTimeout(() => {
    return (a) ? resolve('a is found!'): reject('sorry, no a');
  }, 300);
}); 




```

Code example three

Can you think of the reason why this promise gets rejected? If you said "because `a` is not false", congratulations!

The promise in the third code sample will resolve to a rejection after a timeout of three seconds, because the `(a)?` statement resolves to false, which will trigger `reject`.

## How to Chain Promises with `then()`

When the promise finally returns a value, you will typically want to do something with that return value.

For example, if you were making a network request, you might want to access the value and display it on the page for the user.

You can define two callback functions which you want to get called when a promise is either fulfilled or rejected. These functions are defined inside a nested `then()` method:

```JS
const anotherPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is the eventual value the promise will return');
  }, 300);
});

// CONTINUATION
anotherPromise
.then(value => { console.log(value) }) 
```

Code example four

Running this code will display the fulfillment message after three seconds in the console:

![](https://www.freecodecamp.org/news/content/images/2021/08/EVENTAL-RETURN.png)

Note that you can nest as many promises as you want. Each step will execute after the previous step, taking in the return value of that previous step:

```js
const anotherPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is the eventual value the promise will return');
  }, 300);
});

anotherPromise
.then(fulfillFn, rejectFn)
.then(fulfilFn, rejectFn)
.then(value => { console.log(value) })
```

Code example five

But we have missed something important.

Always keep in mind that a `then()` method must take both the fulfillment hander and a rejection handler. This way, the first is called if the promise is fulfilled and the second is called if the promise is rejected with an error.

The promises in code samples four and five does not include a second handler. So, assuming that an error is encountered, there would be no rejection handler to handle the error.

If you are only going to define a single callback function (aka a fulfillment handler) in `then()`, then you will need to nest a `catch()` method at the bottom of the promise chain to catch any possible errors.

### How to Use the `catch()` Method in JS

The `catch()` method will always get called whenever an error is encountered at any point along the promise chain:

```js
const myPromise = new Promise((resolve, reject) => {
  let a = false;
  setTimeout(() => {
    return (a) ? resolve('a is found!'): reject('sorry, no a');
  }, 300);
}); 

myPromise
.then(value => { console.log(value) })
.catch(err => { console.log(err) });


```

Code example six

Since `myPromise` will eventually resolve to a rejection, the function defined in the nested `then()` will be ignored. Instead, the error handler in `catch()` will run, which should log the following error message to the console:

![](https://www.freecodecamp.org/news/content/images/2021/08/Catch.png)

## Wrapping Up

JavaScript promises are a very powerful feature that help you run asynchronous code in JavaScript. In most, if not all, interviews for roles which use JavaScript, your interviewer will probably ask a question about promises.

In this article, I have explained what a promise is in simple terms, and I've shown its basic practical usage with some code examples.

I hope you got something useful from this article. If you like programming-related tutorials like this, you should [check out my blog](https://ubahthebuilder.tech/user-authentication-vs-user-authorization-what-do-they-mean-in-back-end-web-development). I regularly publish articles on software development there.

Thank you for reading and see you soon.

********P/S********: If you are learning JavaScript, I created an eBook which teaches 50 topics in JavaScript with hand-drawn digital notes. [Check it out here](https://ubahthebuilder.gumroad.com/l/js-50).
