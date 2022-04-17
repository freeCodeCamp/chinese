> -  原文地址：[Closure in JavaScript – Explained with Examples](https://www.freecodecamp.org/news/javascript-closures-explained-with-example/)
> -  原文作者：[Keyur Paralkar](https://www.freecodecamp.org/news/author/keyurparalkar/)
> -  译者：
> -  校对者：

![Closure in JavaScript – Explained with Examples](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/safar-safarov-LKsHwgzyk7c-unsplash-2.jpg)

In this article, we are going to talk about closures in JavaScript. I'll walk you through the definition of a closure, a simple day-to-day fetch utility closure example, and some of the advantages and disadvantages of using closures.

## Table of Contents

-   [Prerequisites](#prerequisites)
-   [What are closures](#what-are-closures)?
-   [Use case of closures](#use-case-of-closure-creating-a-fetch-utility-with-closures)
-   [Advantages of closures](#advantages-of-closures)
-   [Disadvantages of closures](#disadvantages-of-closures)
-   [Summary](#summary)

Without further ado, let's get started.

## Prerequisites

You should have a good understanding of the following topics to understand this article:

-   How JavaScript's [execution context](https://www.freecodecamp.org/news/javascript-execution-context-and-hoisting/) works
-   What the [Fetch API](https://www.freecodecamp.org/news/javascript-fetch-api-tutorial-with-js-fetch-post-and-header-examples/) is and how to use it

## What are closures?

Closures are functions that have access to the variables that are present in their scope chain even if the outer function ceases to exist.

To understand this in more detail, let's understand what a scope chain is. Scope chain refers to the fact that parent scope does not have access to the variables inside its children's scope, but the children's scope does have access to the variables present in its parent scopes.

Let's make this clearer by taking a look at an example below:

```Javascript
let buttonProps = (borderRadius) => {
	const createVariantButtonProps = (variant, color) => {
		const newProps = {
			borderRadius,
			variant,
			color
		};
		return newProps;
	}
	return createVariantButtonProps;
}
```

As you can see, we have a function called `buttonProps`. This function accepts `borderRadius` as an argument. Let's consider the `buttonProps` function as our parent function.

We have another function that has been defined inside the parent function, that is `createVariantButtonProps`. This function will accept `variant` and `color` as an argument and return an object that constitutes a variable `borderRadius` that is present outside its scope.

But a question arises as to how the inner function resolves the variables that are present in the parent scope.

Well, this is possible via lexical scoping. Using lexical scoping, the JS parser knows how to resolve variables present in its current scope or in fact knows how to resolve variables present in the nested functions.

So based on the above explanation, `createVariantButtonProps` will have access to the variables present in its outer function `buttonProps`.

In the above example, the inner function `createVariantButtonProps` is a closure. To understand closures in detail we will first go through the characteristics of closures which are as follows:

-   Even if the outer function ceases to exist, a closure still has access to its parent variables.
-   Closures do not have access to their outer function’s `args` parameter.

Let's get into more detail on each of these points.

### Even if the outer function ceases to exist, it still has access to its parent variables.

This is the basic functionality of any closure. This is their main life motto aka their working principle.

To see this in action we will now execute the above `buttonProps` function.

```JS
let primaryButton = buttonProps("1rem"); 
```

Calling the `buttonProps` function will return us another function that is our closure.

Now let's execute this closure:

```JS
const primaryButtonProps = primaryButton("primary", "red");
```

Once the closure is executed, it returns the following object:

```JS
{
   "borderRadius":"1rem",
   "variant":"primary",
   "color":"red"
}
```

Here again a question arises: How does the `primaryButton` function have access to the variable `borderRadius` that was not present inside it?

If we go through the definition of closures, and scope chaining that we discussed earlier, it perfectly fits into that instance.

Let's dig deeper into why closures still have access to the variables that are defined outside their scope, even if the outer function ceases to exists – for example, `borderRadius`?  

The answer is simple: closures do not store static values. Instead, they store references to the variables present inside the scope chain. In this way, even if the outer function dies, the inner function, that is a closure, still has access to its parent variables.

## Use case of closure: Creating a fetch utility with closures

Now that we've learned what closures are, we will create a nice general purpose utility function. It will handle different request methods such as GET and POST with REST APIs.

For this use case,

-   We will be using [JSON placeholder APIs](https://jsonplaceholder.typicode.com/). This provides us with some fake data which we can edit using REST APIs.
-   We will be using JavaScript's [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) API.

Let's first discuss why we even need to design such a utility. There are couple of reasons:

-   For every fetch call, we don’t want to define the base URL (or other common parameters) all the time. So we will create a mechanism that will store the base URL/parameters as a state.
-   To remove redundant code.
-   To provide modularity in the codebase.

Let's dive into the details of this utility. Our fetch utility will look like below:

```Javascript
const fetchUtility = (baseURL, headers) => {
  const createFetchInstance = (route, requestMethod, data) => {
    const tempReq = new Request(`${baseURL}${route}`, {
      method: requestMethod,
      headers,
      data: data || null
    });
    return [fetch, tempReq];
  };

  return createFetchInstance;
};
```

-   `fetchUtility` accepts two parameters that are `baseURL` and `headers`. These will be used later in the closure to construct the base URL along with the headers.
-   Then we have `createFetchInstance`, which accepts `route` `requestMethod` and `data` as parameters.
-   Next, this function creates a new request object that will construct our URL using the code: `${baseURL}${route}`. We also pass in an object which consists of the request method type, headers, and data if available.
-   Then we return the instance of a fetch API along with the request object.
-   Lastly, we return the `createFetchInstance` function.

Now let's see this function in action. Call our `fetchUtility` function to initialize the `baseURL`:

```Javascript
const fetchInstance = fetchUtility("https://jsonplaceholder.typicode.com");
```

Initializing the baseURL 

-   If we observe, the `fetchInstance` now has the value of the closure of the function `fetchUtility`.
-   Next, we pass the route and the type of the request to the closure `fetchInstance`:

```Javascript
const [getFunc, getReq] = fetchInstance("/todos/1", "GET");
```

Executing the closure

As you can see this returns us an array of fetch API instance and the request body that we configured.

Finally, we can make use of the `getFunc` fetch API to call the request `getReq` like below:

```Javascript
getFunc(getReq)
  .then((resp) => resp.json())
  .then((data) => console.log(data));
```

We can also create a POST request similar to the above GET request. We just need to call the `fetchInstance` again as below:

```Javascript
const [postFunc, postReq] = fetchInstance(
  "/posts",
  "POST",
  JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1
  })
);
```

And to execute this post request we can do the similar operation that we did for the GET request:

```Javascript
postFunc(postReq)
  .then((resp) => resp.json())
  .then((data) => console.log(data));
```

If we closely look at the above example, we can see that the inner function `createFetchInstance` has access to the variables present in its scope chain. With the help of lexical scoping, during its definition of `createFetchInstance` it resolves the variable names.

In this way the closure references the variables `baseURL` and `headers` during its definition even after the outer function `fetchUtility` has ceased to exist.

If we think of closures from a different perspective, then closures help us to maintain a state like `baseURL` and `headers` that we can use across function calls.

## Advantages of closures

Here are some advantages of closures:

-   They allow you to attach variables to an execution context.
-   Variables in closures can help you maintain a state that you can use later.
-   They provide data encapsulation.
-   They help remove redundant code.
-   They help maintain modular code.

## Disadvantages of closures

There are two main disadvantages of overusing closures:

-   The variables declared inside a closure are not garbage collected.
-   Too many closures can slow down your application. This is actually caused by duplication of code in the memory.

## Summary

So in this way closures can be really useful if you want to deal with or implement certain design patterns. They also help you write neat and modular code.

If you liked the idea of closures, then I would recommend reading further on the following topics:

-   [Design patterns](https://www.patterns.dev/posts/classic-design-patterns/)
-   [Anonymous closures](https://stackoverflow.com/questions/16032840/javascript-anonymous-closure)

Thank you for reading!

Follow me on [Twitter](https://twitter.com/keurplkar), [GitHub](https://github.com/keyurparalkar), and [LinkedIn](https://www.linkedin.com/in/keyur-paralkar-494415107/).