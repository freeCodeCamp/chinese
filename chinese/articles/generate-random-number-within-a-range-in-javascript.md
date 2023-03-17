> -  原文地址：[How to Generate a Random Number within Certain a Range in JavaScript](https://www.freecodecamp.org/news/generate-random-number-within-a-range-in-javascript/)
> -  原文作者：[Dillion Megida](https://www.freecodecamp.org/news/author/dillionmegida/)
> -  译者：
> -  校对者：

![How to Generate a Random Number within Certain a Range in JavaScript](https://www.freecodecamp.org/news/content/images/size/w2000/2022/12/9.-random-number.png)

Let's say you want to generate a random number between 10 and 15 – how do you do that in JavaScript? I'll show you how with examples in this article.

In JavaScript, there's the `random` method of the `Math` object which returns random numbers. But this has a range limitation. So let's see how we can take advantage of this method to solve for different ranges.

I've created a video version of this article that you can [use to supplement your learning here](https://www.youtube.com/watch?v=oUZVKzXVJaE).

## How to Use `Math.random` in JavaScript

The `random` method returns a random floating number between `0` and `1`. Here's a code example:

```js
Math.random()
// 0.26636355538480383

Math.random()
// 0.6272624945940997

Math.random()
// 0.05992852707853347
```

From the results, you can see three random numbers between 0 and 1. Now let's solve for other ranges.

## How to Get Random Numbers within a Range in JavaScript

We will have a function that we can use for different ranges:

```js
function getRandom(min, max) {
  // code here
}
```

This function takes the `min` (lowest parameter of the range) and `max` (highest parameter of the range) arguments. Now let's use this range and `Math.random` to get a random number:

```js
function getRandom(min, max) {
  const floatRandom = Math.random()

  const difference = max - min

  // random between 0 and the difference
  const random = Math.round(difference * floatRandom)

  const randomWithinRange = random + min

  return randomWithinRange
}
```

Here's what's happening in the function:

-   first, we get a random floating number using `Math.random()`
-   next, we find the difference between the highest and lowest range
-   next, we evaluate a random number between 0 and the difference between the ranges

To get this random number, we multiply the difference by the random number we got from `Math.random` and we apply `Math.round` on the result to round the number to the nearest integer.

So if, for example, `Math.random` returns **0.3** and the difference between the ranges is **5**, multiplying them together gives **1.5**. Then using `Math.round` makes it **2** which is between 0 and 5 (the difference).

Another example: if `Math.random` returns **0.9** and the difference between the specified ranges is **8**, multiplying them together gives **7.2**. Then using `Math.round` makes it **7** which is between 0 and 8 (the difference).

Now that we have a random number between 0 and the difference, we can add that random number to the minimum range. Doing this gives us a result that is within the minimum and maximum range.

We assign this result to `randomWithinRange` and return it from the function. Now let's see the function in use:

```js
console.log(getRandom(10, 15))
// 14

console.log(getRandom(10, 15))
// 11

console.log(getRandom(10, 15))
// 12

console.log(getRandom(10, 15))
// 15
```

Here, we use a `min` of **10** and a `max` of **15**. The four times we call the function with these arguments, you can see the results which are random numbers between the range provided.

Let's look at another example of the function in use:

```js
console.log(getRandom(180, 450))
// 215

console.log(getRandom(180, 450))
// 386

console.log(getRandom(180, 450))
// 333

console.log(getRandom(180, 450))
// 442
```

Here, we use a `min` of **180** and a `max` of **450**. Again, you can see how the random number results from our function.

## Wrapping Up

If you ever need to generate a random number within a specific range, I hope this article has shown you how.

In this article, I explained the range limitation of `Math.random` which returns a random number between 0 and 1. And I also showed you how to take advantage of this math method to create a reusable function for generating random numbers within any range of your choice.

Kindly share this article if you find it helpful.