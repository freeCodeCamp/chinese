---
title: How JavaScript Promises Work – Handbook for Beginners
author: Joe Attardi
authorURL: https://www.freecodecamp.org/news/author/joeattardi/
originalURL: https://www.freecodecamp.org/news/the-javascript-promises-handbook/
translator: "James Z. Zhang"
reviewer: ""
---

February 13, 2024 / [#JavaScript][1]

<!-- more -->

# How JavaScript Promises Work – Handbook for Beginners

![Joe Attardi](https://www.freecodecamp.org/news/content/images/size/w60/2023/10/5.png)

[Joe Attardi][2]

  ![How JavaScript Promises Work – Handbook for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2024/02/How-JavaScript-Promises-Work-Cover.png)

Many operations, such as network requests, are asynchronous in nature. One of the most useful and powerful tools for working with asynchronous code is the Promise. In this handbook, you'll learn all about JavaScript Promises and how to use them.

## Table of Contents

1.  [What is a Promise?][3]
2.  [Comparing Promises to Other Async Patterns][4]
3.  [How to Create a Promise][5]
4.  [How to Get the Result of a Promise][6]
5.  [How to Handle Errors with `then`][7]
6.  [Promise Chaining][8]
7.  [How to Create Immediately Fulfilled or Rejected Promises][9]
8.  [How to Use `async` and `await`][10]
9.  [Promise Anti-Patterns][11]
10.  [Summary][12]

## What is a Promise?

Let's begin by looking at what a Promise is.

In simple terms, a Promise is an object representing an asynchronous operation. This object can tell you when the operation succeeds, or when it fails.

When you call a Promise-based API, the function returns a Promise object that will eventually provide the result of the operation.

### Promise states

During its lifetime, a Promise can be in one of three states:

-   **Pending**: A Promise is pending while the operation is still in progress. It's in an idle state, waiting for the eventual result (or error).
-   **Fulfilled**: The asynchronous task that returned the Promise completed successfully. A Promise is fulfilled with a value, which is the result of the operation.
-   **Rejected**: If the asynchronous operation failed, the Promise is said to be rejected. A Promise is rejected with a _reason_. This typically is an `Error` object, but a Promise can be rejected with any value – even a simple number or string!

A Promise starts out in the pending state, then depending on the result, will transition to either the fulfilled or rejected state. A Promise is said to be _settled_ once it reaches either the fulfilled or rejected state.

Of course, there is no guarantee that the asynchronous task will ever complete. It's completely possible for a `Promise` to remain in the pending state forever, though this would be because of a bug in the asynchronous task's code.

## Comparing Promises to Other Async Patterns

Promises behave a little differently from other asynchronous patterns in JavaScript. Before diving deeper into Promises, let's briefly compare Promises to these other techniques.

### Callback functions

A callback function is a function that you pass to another function. When the function you call has finished its work, it will execute your callback function with the result.

Imagine a function called `getUsers` which will make a network request to get an array of users. You can pass a callback function to `getUsers`, which will be called with the array of users once the network request is complete:

```javascript
console.log('Preparing to get users');
getUsers(users => {
  console.log('Got users:', users);
});
console.log('Users request sent');
```

An example of a callback function

First, the above code will print "Preparing to get users". Then it calls `getUsers` which will initiate the network request. But JavaScript doesn't wait for the request to complete. Instead, it immediately executes the next `console.log` statement.

Later, once the users have been loaded, your callback will be executed and "Got users" will be printed.

Some callback-based APIs, such as many Node.js APIs, use _error-first callbacks_. These callback functions take two arguments. The first argument is an error, and the second is the result.

Typically, only one of these will have a value, depending on the outcome of the operation. This is similar to the fulfilled and rejected Promise states.

The trouble with callback APIs is that of nesting. If you need to make multiple asynchronous calls in sequence, you’ll end up with nested function calls and callbacks.

Imagine you want to read a file, process some data from that file, then write a new file. All three of these tasks are asynchronous and use an imaginary callback based API.

```javascript
readFile('sourceData.json', data => {
	processData(data, result => {
		writeFile(result, 'processedData.json', () => {
			console.log('Done processing');
		});
	});
});
```

A sequence of nested callbacks

It gets even more unwieldy with error handling. Imagine these functions used error-first callbacks:

```javascript
readFile('sourceData.json', (error, data) => {
	if (error) {
		console.error('Error reading file:', error);
		return;
	}
	
	processData(data, (error, result) => {
		if (error) {
			console.error('Error processing data:', error);
			return;
		}
		
		writeFile(result, 'processedData.json', error => {
			if (error) {
				console.error('Error writing file:', error);
				return;
			}
			
			console.log('Done processing');
		});
	});
});
```

A sequence of nested error-first callbacks

Callback functions aren't typically used directly as an asynchronous mechanism in modern APIs, but as you'll soon see, they are the foundation for other types of asynchronous tools such as Promises.

### Events

An event is something that you can listen for and respond to. Some objects in JavaScript are event _emitters_, which means you can register event listeners on them.

In the DOM, many elements implement the `EventTarget` interface which provides `addEventListener` and `removeEventListener` methods.

A given type of event can occur more than once. For example, you can listen for the click event on a button:

```javascript
myButton.addEventListener('click', () => {
   console.log('button was clicked!'); 
});
```

Listening for a click on a button

Every time the button is clicked, the text "button was clicked!" will be printed to the console.

`addEventListener` itself accepts a callback function. Whenever the event occurs, the callback is executed.

An object can emit multiple types of events. Consider an image object. If the image at the specified URL is loaded successfully, the `load` event is triggered. If there was an error, this event is not triggered and instead the `error` event is triggered.

```javascript
myImage.addEventListener('load', () => {
    console.log('Image was loaded');
});

myImage.addEventListener('error', error => {
   console.error('Image failed to load:', error); 
});
```

Listening for an image's load and error events

Suppose the image already completed loading before you added the event listener. What do you think would happen? Nothing! One drawback of event-based APIs is that if you add an event listener after an event, your callback won't be executed. This makes sense, after all – you wouldn't want to receive all past click events when you add a click listener to a button.

Now that we've explored callbacks and events, let's take a closer look at Promises.

## How to Create a Promise

You can create a Promise using the `new` keyword with the `Promise` constructor. The `Promise` constructor takes a callback function that takes two arguments, called `resolve` and `reject`. Each of these arguments is a function provided by the Promise, which are used to transition the Promise to either the fulfilled or rejected state.

Inside your callback, you perform your asynchronous work. If the task is successful, you call the `resolve` function with the final result. If there was an error, you call the `reject` function with the error.

Here's an example of creating a Promise that wraps the browser's `setTimeout` function:

```javascript
function wait(duration) {
	return new Promise(resolve => {
        setTimeout(resolve, duration);
    });
}
```

Wrapping setTimeout in a Promise

The `resolve` function is passed as the first argument to `setTimeout`. After the time specified by `duration` has passed, the browser calls the `resolve` function which fulfills the Promise.

Note: In this example, the delay before the `resolve` function is called may be longer than the duration passed to the function. This is because `setTimeout` does not guarantee execution at the specified time.

It's important to note that often times, you won't actually need to construct your own Promise by hand. You will typically be working with Promises returned by other APIs.

## How to Get the Result of a Promise

We've seen how to create a Promise, but how do you actually get the result of the asynchronous operation? To do this, you call `then` on the Promise object itself. `then` takes a callback function as its argument. When the Promise is fulfilled, the callback is executed with the result.

Let's see an example of this in action. Imagine a function called `getUsers` that asynchronously loads a list of user objects and returns a Promise. You can get the list of users by calling `then` on the Promise returned by `getUsers`.

```javascript
getUsers()
  .then(users => {
    console.log('Got users:', users);
  });
```

Calling `then` on a Promise

Just like with events or callback based APIs, your code will continue executing without waiting for the result. Some time later, when the users have been loaded, your callback is scheduled for execution.

```javascript
console.log('Loading users');
getUsers()
  .then(users => {
    console.log('Got users:', users);
  });
console.log('Continuing on');
```

In the above example, "Loading users" will be printed first. The next thing that is printed will be "Continuing on", because the `getUsers` call is still loading the users. Later, you'll see "Got users" printed.

## How to Handle Errors with `then`

We've seen how to use `then` to get the result provided to the Promise, but what about errors? What happens if we fail to load the user list?

The `then` function actually takes a second argument, another callback. This is the error handler. If the Promise is rejected, this callback is executed with the rejection value.

```javascript
getUsers()
  .then(users => {
    console.log('Got users:', users);
  }, error => {
    console.error('Failed to load users:', error);  
  });
```

Since a Promise can only ever be either fulfilled or rejected, but not both, only one of these callback functions will be executed.

It's important to always handle errors when working with Promises. If you have a Promise rejection that isn't handled by an error callback, you'll get an exception in your console about an unhandled rejection, which can cause issues for your users at runtime.

## Promise Chaining

What if you need to work with multiple Promises in series? Consider the earlier example where we loaded some data from a file, did some processing, and wrote the result to a new file. Suppose the `readFile`, `processData`, and `writeFile` functions used Promises instead of callbacks.

You might try something like this:

```javascript
readFile('sourceData.json')
  .then(data => {
    processData(data)
      .then(result => {
        writeFile(result, 'processedData.json')
          .then(() => {
            console.log('Done processing');
          });
      });
  });
```

Nested promises

This doesn't look great, and we still have the nesting issue that we had with the callback approach. Thankfully, there is a better way. You can chain Promises together in a flat sequence.

To see how this works, let's look deeper at how `then` works. The key idea is this: the `then` method returns _another Promise_. Whatever value you return from your `then` callback becomes the fulfilled value of this new Promise.

Consider a `getUsers` function that returns a Promise that gets fulfilled with an array of user objects. Suppose we call `then` on this Promise, and in the callback, return the first user in the array (`users[0]`):

```javascript
getUsers().then(users => users[0]);
```

This whole expression, then, results in a new Promise that will be fulfilled with the first user object!

```javascript
getUsers()
  .then(users => users[0])
  .then(firstUser => {
    console.log('First user:', firstUser.username);
  });
```

Returning a value from the `then` handler

This process of returning a Promise, calling `then`, and returning another value, resulting in another Promise, is called chaining.

Let's extend this idea. What if, instead of returning a value from the `then` handler, we returned another Promise? Consider again the file-processing example, where `readFile` and `processData` are both asynchronous functions that return Promises:

```javascript
readFile('sourceData.json')
  .then(data => processData(data));
```

Returning another Promise from `then`

The `then` handler calls `processData`, returning the resulting Promise. As before, this returns a new Promise. In this case, the new Promise will become fulfilled when the Promise returned by `processData` is fulfilled, giving you the same value. So the code in the above example would return a Promise that will be fulfilled with the processed data.

You can chain multiple Promises, one after the other, until you get to the final value you need:

```javascript
readFile('sourceData.json')
  .then(data => processData(data))
  .then(result => writeFile(result, 'processedData.json'))
  .then(() => console.log('Done processing'));
```

Chaining multiple promises

In the above example, the whole expression will result in a Promise that won't be fulfilled until after the processed data is written to a file. "Done processing!" will be printed to the console, and then the final Promise will become fulfilled.

### Error handling in Promise chains

In our file-processing example, an error can occur at any stage in the process. You can handle an error from any step in the Promise chain by using the Promise's `catch` method.

```javascript
readFile('sourceData.json')
  .then(data => processData(data))
  .then(result => writeFile(result, 'processedData.json'))
  .then(() => console.log('Done processing'))
  .catch(error => console.log('Error while processing:', error));
```

Handling errors with `catch`

If one of the Promises in the chain is rejected, the callback function passed to `catch` will execute and the rest of the chain is skipped.

### How to use `finally`

You might have some code you want to execute regardless of the Promise result. For example, maybe you want to close a database or a file.

```javascript
openDatabase()
  .then(data => processData(data))
  .catch(error => console.error('Error'))
  .finally(() => closeDatabase());
```

### How to use `Promise.all`

Promise chains let you run multiple tasks in sequence, but what if you want to run multiple tasks at the same time, and wait until they all complete? The `Promise.all` method lets you do just that.

`Promise.all` takes an array of Promises, and returns a new Promise. This Promise will be fulfilled once all of the other Promises are fulfilled. The fulfillment value is an array containing the fulfillment values of each Promise in the input array.

Suppose you have a function `loadUserProfile` that loads a user's profile data, and  another function `loadUserPosts` that loads a user's posts. They both take a user ID as the argument. There's a third function, `renderUserPage`, that needs both the profile and list of posts.

```javascript
const userId = 100;

const profilePromise = loadUserProfile(userId);
const postsPromise = loadUserPosts(userId);

Promise.all([profilePromise, postsPromise])
  .then(results => {
    const [profile, posts] = results;
    renderUserPage(profile, posts);
  });
```

Waiting for multiple promises with `Promise.all`

What about errors? If any of the Promises passed to `Promise.all` is rejected with an error, the resulting Promise is also rejected with that error. If any of the other Promises are fulfilled, those values are lost.

### How to use `Promise.allSettled`

The `Promise.allSettled` method works similarly to `Promise.all`. The main difference is that the Promise returned by `Promise.allSettled` will never be rejected.

Instead, it is fulfilled with an array of objects, whose order corresponds to the order of the Promises in the input array. Each object has a `status` property which is either "fulfilled" or "rejected", depending on the result.

If `status` is "fulfilled", the object will also have a `value` property indicating the Promise's fulfillment value. If `status` is "rejected", the object will instead have a `reason` property which is the error or other object the Promise was rejected with.

Consider again a `getUser` function that takes a user ID and returns a Promise that is fulfilled with the user having that ID. You can use `Promise.allSettled` to load these in parallel, making sure to get all users that were loaded successfully.

```javascript
Promise.allSettled([
  getUser(1),
  getUser(2),
  getUser(3)
]).then(results => {
   const users = results
     .filter(result => result.status === 'fulfilled')
     .map(result => result.value);
   console.log('Got users:', users);
});
```

Attempting to load three users, and showing the ones that were successfully loaded

You can make a general purpose `loadUsers` function that loads users, in parallel, given an array of user IDs. The function returns a Promise that is fulfilled with an array of all users that were successfully loaded.

```javascript
function getUsers(userIds) {
  return Promise.allSettled(userIds.map(id => getUser(id)))
    .then(results => {
      return results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value);
    });
}
```

A helper function to load multiple users in parallel, filtering out any requests that failed.

Then, you can just call `getUsers` with an array of user IDs:

```javascript
getUsers([1, 2, 3])
	.then(users => console.log('Got users:', users));
```

Using the `getUsers` helper function

## How to Create Immediately Fulfilled or Rejected Promises

Sometimes, you may want to wrap a value in a fulfilled Promise. For example, maybe you have an asynchronous function that returns a Promise, but there is a base case where you know the value ahead of time and you don't need to do any asynchronous work.

To do this, you can call `Promise.resolve` with a value. This returns a Promise that is immediately fulfilled with the value you specified:

```javascript
Promise.resolve('hello')
  .then(result => {
    console.log(result); // prints "hello"
  });
```

Using `Promise.resolve`

This is more or less equivalent to the following:

```javascript
new Promise(resolve => {
   resolve('hello'); 
}).then(result => {
    console.log(result); // also prints "hello"
});
```

To make your API more consistent, you can create an immediately fulfilled Promise and return that in such cases. This way, the code that calls your function knows to always expect a Promise, no matter what.

For example, consider the `getUsers` function defined earlier. If the array of user IDs is empty, you could simply return an empty array because no users will be loaded.

```javascript
function getUsers(userIds) {
  // immediately return the empty array
  if (userIds.length === 0) {
    return Promise.resolve([]);
  }
    
  return Promise.allSettled(userIds.map(id => getUser(id)))
    .then(results => {
      return results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value);
    });
}
```

Adding an early return to the `getUsers` helper function

Another use for `Promise.resolve` is to handle the case where you are given a value that may or may not be a Promise, but you want to always treat it as a Promise.

You can safely call `Promise.resolve` on any value. If it was already a Promise, you'll just get another Promise that will have the same fulfillment or rejection value. If it was not a Promise, it will be wrapped in an immediately fulfilled Promise.

The benefit of this approach is you don't have to do something like this:

```javascript
function getResult(result) {
  if (result.then) {
     result.then(value => {
         console.log('Result:', value);
     });
  } else {
      console.log('Result:', result);
  }
}
```

Conditionally calling `then` based on whether or not something is a Promise

Similarly, you can create an immediately rejected Promise with `Promise.reject`. Returning once again to the `getUsers` function, maybe we want to immediately reject if the user ID array is `null`, `undefined`, or not an array.

```javascript
function getUsers(userIds) {
  if (userIds == null || !Array.isArray(userIds)) {
    return Promise.reject(new Error('User IDs must be an array'));
  }
    
  // immediately return the empty array
  if (userIds.length === 0) {
    return Promise.resolve([]);
  }
    
  return Promise.allSettled(userIds.map(id => getUser(id)))
    .then(results => {
      return results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value);
    });
}
```

Returning an error if the argument is not a valid array

### How to use `Promise.race`

Just like `Promise.all` or `Promise.allSettled`, the `Promise.race` static method takes an array of Promises, and returns a new Promise. As the name implies, though, it works somewhat differently.

The Promise returned by `Promise.race` will wait until the first of the given Promises is fulfilled or rejected, and then that Promise will also be fulfilled or rejected, with the same value. When this happens, the fulfilled or rejected values of the other Promises are lost.

### How to use `Promise.any`

`Promise.any` works similarly to `Promise.race` with one key difference – where `Promise.race` will be done as soon as any Promise is fulfilled or rejected, `Promise.any` waits for the first _fulfilled_ Promise.

## How to Use `async` and `await`

`async` and `await` are special keywords that simplify working with Promises. They remove the need for callback functions and calls to `then` or `catch`. They work with try-catch blocks, as well.

Here's how it works. Instead of calling `then` on a Promise, you `await` it by putting the `await` keyword before it. This effectively "pauses" execution of the function until the Promise is fulfilled.

Here's an example using standard Promises:

```javascript
getUsers().then(users => {
    console.log('Got users:', users);
});
```

Awaiting a promise with `then`

Here's the equivalent code using the `await` keyword:

```javascript
const users = await getUsers();
console.log('Got users:', users);
```

Awaiting a promise with `await`

Promise chains are a little cleaner, too:

```javascript
const data = await readFile('sourceData.json');
const result = await processData(data);
await writeFile(result, 'processedData.json');
```

Chaining promises with `await`

Remember that each usage of `await` will pause execution of the rest of the function until the Promise you are awaiting becomes fulfilled. If you want to await several Promises that run in parallel, you can use `Promise.all`:

```javascript
const users = await Promise.all([getUser(1), getUser(2), getUser(3)]);
```

Using Promise.all with `await`

To use the `await` keyword, your function must be marked as an async function. You can do this by placing the `async` keyword before your function:

```javascript
async function processData(sourceFile, outputFile) {
  const data = await readFile(sourceFile);
  const result = await processData(data);
  writeFile(result, outputFile);
}
```

Marking a function as `async`

Adding the `async` keyword also has another important effect on the function. Async functions always implicitly return a Promise. If you return a value from an async function, the function will actually return a Promise that is fulfilled with that value.

```javascript
async function add(a, b) {
  return a + b;   
}

add(2, 3).then(sum => {
   console.log('Sum is:', sum); 
});
```

An `async` function to add two numbers

In the above example, the function is returning the sum of the two arguments `a` and `b`. But since it's an `async` function, it doesn't return the sum but rather a Promise that is fulfilled with the sum.

### Error handling with `async` and `await`

We use `await` to wait for Promise to be fulfilled, but what about handling errors? If you are awaiting a Promise, and it is rejected, an error will be thrown. This means to handle the error, you can put it in a try-catch block:

```javascript
try {
    const data = await readFile(sourceFile);
    const result = await processData(data);
    await writeFile(result, outputFile);
} catch (error) {
    console.error('Error occurred while processing:', error);
}
```

Error handling with a try-catch block

## Promise Anti-Patterns

### Unnecessarily creating a new Promise

Sometimes there's no getting around creating a new Promise. But if you are already working with Promises returned by an API, you usually shouldn't need to create your own Promise:

```javascript
function getUsers() {
  return new Promise(resolve => {
     fetch('https://example.com/api/users')
       .then(result => result.json())
       .then(data => resolve(data))
  });
}
```

An example of unnecessary Promise creation

In this example, we're creating a new Promise to wrap the Fetch API, which already returns Promises. This is unnecessary. Instead, just return the Promise chain from the Fetch API directly:

```javascript
function getUsers() {
  return fetch('https://example.com/api/users')
    .then(result => result.json());
}
```

Using the existing Fetch promise

In both cases, the code calling `getUsers` looks the same:

```javascript
getUsers()
  .then(users => console.log('Got users:', users))
  .catch(error => console.error('Error fetching users:', error));
   
```

Client code for either version of the `getUsers` function

### Swallowing errors

Consider this version of a `getUsers` function:

```javascript
function getUsers() {
    return fetch('https://example.com/api/users')
    	.then(result => result.json())
    	.catch(error => console.error('Error loading users:', error));
}
```

Swallowing the fetch error

Error handling is good, right? You might be surprised by the result if we call this `getUsers` function:

```javascript
getUsers()
  .then(users => console.log('Got users:', users))
  .catch(error => console.error('error:', error);)
```

Calling `getUsers`

You might expect this to print "error", but it will actually print "Got users: undefined". This is because the `catch` call "swallows" the error and returns a new Promise that is fulfilled with the return value of the `catch` callback, which is `undefined` (`console.error` returns `undefined`). You'll still see the "Error loading users" log message from `getUsers`, but the returned Promise will be fulfilled, not rejected.

If you want to catch the error inside the `getUsers` function and still reject the returned Promise, the `catch` handler needs to return a rejected Promise. You can do this by using `Promise.reject`.

```javascript
function getUsers() {
  return fetch('https://example.com/api/users')
    .then(result => result.json())
    .catch(error => {
      console.error('Error loading users:', error);
      return Promise.reject(error);
    });
}
```

Returning a rejected Promise after handling the error

Now you'll still get the "Error loading users" message, but the returned Promise will also be rejected with the error.

### Nesting Promises

Avoid nesting Promise code. Instead, try to use flattened Promise chains.

Instead of this:

```javascript
readFile(sourceFile)
  .then(data => {
    processData(data)
      .then(result => {
        writeFile(result, outputFile)
          .then(() => console.log('done');
      });
  });
```

Do this:

```javascript
readFile(sourceFile)
  .then(data => processData(data))
  .then(result => writeFile(result, outputFile))
  .then(() => console.log('done'));
```

## Summary

Here are the key points for working with Promises:

-   A Promise can be pending, fulfilled, or rejected
-   A Promise is settled if it is either fulfilled or rejected
-   Use `then` to get the fulfilled value of a Promise
-   Use `catch` to handle errors
-   Use `finally` to perform cleanup logic that you need in either the success or error case
-   Chain Promises together to perform asynchronous tasks in sequence
-   Use `Promise.all` to get a Promise that is fulfilled when all given Promises are fulfilled, or rejects when one of those Promises rejects
-   Use `Promise.allSettled` to get a Promise that is fulfilled when all given Promises are either fulfilled or rejected
-   Use `Promise.race` to get a Promise that is fulfilled or rejected when the first of the given Promises is either fulfilled or rejected
-   Use `Promise.any` to get a Promise that is fulfilled when the first of the given Promises is fulfilled
-   Use the `await` keyword to wait for the fulfillment value of a Promise
-   Use a try-catch block to handle errors when using the `await` keyword
-   A function that uses `await` inside of it must use the `async` keyword

Thank you for reading this deep dive on Promises. I hope you learned something new!

---

![Joe Attardi](https://www.freecodecamp.org/news/content/images/size/w60/2023/10/5.png)

[Joe Attardi][13]

Read [more posts][14].

---

If you read this far, thank the author to show them you care. Say Thanks

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started][15]

[1]: /news/tag/javascript/
[2]: /news/author/joeattardi/
[3]: #what-is-a-promise
[4]: #comparing-promises-to-other-async-patterns
[5]: #how-to-create-a-promise
[6]: #how-to-get-the-result-of-a-promise
[7]: #how-to-handle-errors-with-then
[8]: #promise-chaining
[9]: #how-to-create-immediately-fulfilled-or-rejected-promises
[10]: #how-to-use-async-and-await
[11]: #promise-anti-patterns
[12]: #summary
[13]: /news/author/joeattardi/
[14]: /news/author/joeattardi/
[15]: https://www.freecodecamp.org/learn/
