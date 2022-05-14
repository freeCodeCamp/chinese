> -  原文地址：[How the JavaScript reduce and reduceRight Methods Work](https://www.freecodecamp.org/news/how-reduce-reduceright-works-javascript/)
> -  原文作者：[Ashutosh Biswas](https://www.freecodecamp.org/news/author/ashutosh-biswas/)
> -  译者：Papaya HUANG
> -  校对者：

![How the JavaScript reduce and reduceRight Methods Work](https://www.freecodecamp.org/news/content/images/size/w2000/2022/05/reduce-cover-with-title-3.jpg)

`reduce` and `reduceRight` are two built-in JavaScript array methods that have a bit of a steep learning curve.

But the very essence of these methods are as simple as the following arithmetic computations.

Suppose we have an array of numbers:

```js
[1, 2, 3, 4]
```

And we want to get the sum of them.

The `reduce` way to get the sum is similar to:

((((1) + 2) + 3) + 4)

Whereas the `reduceRight` way to get the sum is similar to:

((((4) + 3) + 2) + 1)

With `reduce` and `reduceRight`, you can define your own +. Array elements can be anything too. Sounds exciting, right?

Think of `reduce` and `reduceRight` as nothing but a generalization of the above arithmetic patterns. In this article we will cover all the important details.

This article takes an easy-to-digest algorithmic approach to show you how reducing works in JavaScript.

I've also created a video to show you how these methods work. Check it out if want to learn the concepts from a more visual angle:

## Table of Contents:

-   1[What is reduced to what?](#what-is-reduced-to-what)
-   2[Parameters of `reduce`/`reduceRight`](#parameters-of-reduce-reduceright)
-   3[Understanding `reduce`/`reduceRight` with diagram](#understanding-reduce-reduceright-with-diagram)
-   4[The algorithm of `reduce`/`reduceRight`](#the-algorithm-of-reduce-reduceright)
-   5[Excercises](#excercises)
    -   5.1[Flat nested array](#flat-nested-array)
    -   5.2[Remove duplicate items from an array](#remove-duplicate-items-from-an-array)
    -   5.3[Reverse an array without mutating it](#reverse-an-array-without-mutating-it)
-   6[Conclusion](#conclusion)

## 1What is reduced to what? [§](#what-is-reduced-to-what)

You might be wondering "what kind of reduction happens when using `reduce` or `reduceRight`?"

Here, reduction reflects a particular way of transforming (which we will see in detail) the elements in an array to a single value similar to the arithmetic computations we have seen above.

But note that the output value can be anything. So it can be a value that looks bigger than the original array on which the method is called.

In _functional programming_ languages, the idea of reducing has many [other names](https://en.wikipedia.org/wiki/Fold_(higher-order_function)) such as **fold**, **accumulate**, **aggregate**, **compress** and even **inject**.

## 2Parameters of `reduce`/`reduceRight` [§](#parameters-of-reduce-reduceright)

These methods both have the same rules for calling them. So it's easy to learn them together. Let's see how they can be called:

```js
let myArray      = [/* an array */];
let callbackfn   = /* A function value */ ;
let initialvalue = /* any value */ ;

myArray.reduce(callbackfn)
myArray.reduce(callbackfn, initialValue)

myArray.reduceRight(callbackfn)
myArray.reduceRight(callbackfn, initialValue)
```

Here the parameters of `reduce`/`reduceRight` are:

**`callbackfn`**: It must be a function. While iterating over the array, for each element, `reduce`/`reduceRight` calls `callbackfn` with 4 arguments. Let's assume the variables `previousValue`, `currentElement`, `index` and `array` hold the values of those arguments, respectively. So the internal call to `callbackfn` looks like this:

```js
callbackfn(previousValue, currentElement, index, array)
```

Now let's see the meaning of those values:

1.  `previousValue`: this is also known as the _accumulator_. Long story short, this value represents the "work in progress" of the return value of the method. What this value is made up of will become completely clear when you study the algorithm presented later in this article.
2.  `currentElement`: The current element.
3.  `index`: The index of the current element.
4.  `array`: `myArray`.

**Return value**: For the last call to `callbackfn`, its return value becomes the return value of `reduce`/`reduceRight`. Otherwise, its return value will be given as `previousValue` for the next call to `callbackfn`.

And finally, **`initialValue`**: This is an optional initial value for `previousValue` (the accumulator). If it's given, and `myArray` has some elements in it, the first call to `callbackfn` will receive this value as its `previousValue`.

**Note**: The `callbackfn` is usually called a **reducer function**(or just **reducer** for short).

## 3Understanding `reduce`/`reduceRight` with diagram [§](#understanding-reduce-reduceright-with-diagram)

The only difference between `reduce` and `reduceRight` is the direction of the iteration. `reduce` iterates over the array elements left to right. And `reduceRight` iterates over the elements right to left.

Let's see how you can use `reduce`/`reduceRight` to to join an array of strings. Note how the final output is reached by joining the array elements step by step in both directions:

![reduce-diagram1-1](https://www.freecodecamp.org/news/content/images/2022/05/reduce-diagram1-1.png)

Diagram showing the differences between reduce and reduceRight

Here note that:

-   `acc` is used to access `previousValue` .
-   `curVal` is used to access `currentElement`.
-   The circular shaped input to _**`r`**_ represents `curVal`.
-   The rectangular shaped input to _**`r`**_ represents `acc` or the accumulator.
-   Initial values are in rectangular shapes, because they are received by `**_r_**` as `acc`s.

## 4The algorithm of `reduce`/`reduceRight` [§](#the-algorithm-of-reduce-reduceright)

The 29 lines of algorithm code below might look intimidating at first glance. But you'll likely find it much easier to understand it than digesting globs of long sentences explaining the intricate details of these methods.

So relax, enjoy the steps, and don't forget to experiment in the console:

-   1
    
    If `initialValue` is present,
    -   2
        
        If `myArray` has no elements,
        -   3
            
            Return `initialValue`.
    -   4
        
        Else
        -   5
            
            Let `accumulator` be `initialValue`.
        -   6
            
            If the method is `reduce`,
            -   7
                
                Let `startIndex` be the index of the leftmost element of `myArray`.
        -   8
            
            If the method is `reduceRight`,
            -   9
                
                Let `startIndex` be the index of the rightmost element of `myArray`.
-   10
    
    Else
    -   11
        
        If `myArray` has no elements,
        -   12
            
            Throw `TypeError`.
    -   13
        
        Else if `myArray` has just only one element,
        -   14
            
            Return that element.
    -   15
        
        Else
        -   16
            
            If the method is `reduce`,
            -   17
                
                Let `accumulator` be the leftmost element of `myArray`.
            -   18
                
                Let `startIndex` be the index of the element that comes right after the leftmost element of `myArray`.
        -   19
            
            If the method is `reduceRight`,
            -   20
                
                Let `accumulator` be the rightmost element of `myArray`.
            -   21
                
                Let `startIndex` be the index of the element that comes right before the rightmost element of `myArray`.
-   22
    
     
-   23
    
    If the method is `reduce`,
    -   24
        
        In left to right order, for each element of `myArray` such that its index `i` ≥ `startingIndex`,
        -   25
            
            Set `accumulator` to `callbackfn(accumulator, myArray[i], i, myArray)`.
-   26
    
    If the method is `reduceRight`,
    -   27
        
        In right to left order, for each element of `myArray` such that its index `i` ≤ `startingIndex`,
        -   28
            
            Set `accumulator` to `callbackfn(accumulator, myArray[i], i, myArray)`.
-   29
    
    Return `accumulator`.
    

**Note**: An array can have a length greater than `0` but no elements. Such empty places in the array are usually called _holes_ in the array. For example:

```js
let arr = [,,,,];
console.log(arr.length);
// 4

// note that trailing comma doesn't increase the length.
// This feature enables us to add a new element quickly.
```

These methods only call `callbackfn` for elements of `myArray` which actually exist. For example if you have an array like `[1,,3,,5]`, they will not consider the non-existing elements at indices `1` and `3`. Try to guess what will be logged after running the following:

```js
[,,,3,,,4].reduce((_, cv, i) => {
  console.log(i);
});
```

If you said `6`, you are right!

⚠️ **Warning**: It is not recommended to modify `myArray` inside of `callbackfn` because it complicates the logic of your code and thus increases the possibility of bugs.

If you've read and understood this far, congratulations! Now you should have a solid understanding of how `reduce`/`reduceRight` works.

It's a great time to solve some problems to get used to `reduce`/`reduceRight`. Before seeing the solutions, solve them yourself or at least spend some time thinking about it.

## 5Excercises [§](#excercises)

### 5.1Flat nested array [§](#flat-nested-array)

Write a function `flatten` that can flat a nested array.

```js
let arr = [1, [2, [3], [[4], 5], 6]];
console.log(flatten(arr));
// [1, 2, 3, 4, 5, 6]
```

**Solution**

const flatten = (arr) => 
  arr.reduce((acc, curVal) =>
    acc.concat(Array.isArray(curVal) ? flatten(curVal) : curVal), \[\]);

### 5.2Remove duplicate items from an array [§](#remove-duplicate-items-from-an-array)

Write a function `rmDuplicates` that remove the duplicate items like below:

```js
console.log(rmDuplicates([1, 2, 2, 3, 4, 4, 4]));
// [1, 2, 3, 4]
```

**Solution**

const rmDuplicates = arr => 
  arr.reduce((p, c) => p.includes(c) ? p : p.concat(c), \[\]);

### 5.3Reverse an array without mutating it [§](#reverse-an-array-without-mutating-it)

There is a built-in `reverse` array method to reverse arrays. But it mutates the original array. Use `reduceRight` to reverse an array without mutating it.

**Solution**

let arr = \[1, 2, 3\];

let reversedArr = arr.reduceRight((acc, curVal) => \[...acc, curVal\], \[\]);

console.log(arr);
// \[1, 2, 3\]

console.log(reversedArr);
// \[3, 2, 1\]

Note that by reversing array this way you will lose all the holes in the array.

## 6Conclusion [§](#conclusion)

When `reduce`/`reduceRight` calls `callbackfn` internally we can call those patterns of calling it "normal behaviors" and we can treat other scenarios as edge cases. These can be summarized in the table below:

| Initial value | Number of elements | Output |
| --- | --- | --- |
| Present | 0 | **Edge case**: Initial value |
| Present | Greater than 0 | **Normal behavior** |
| Absent | 0 | **Edge case**: TypeError |
| Absent | 1 | **Edge case**: That element |
| Absent | Greater than 1 | **Normal behavior** |

Learning `reduce`/`reduceRight` is a little bit more involved than other higher order array methods. But it's worth your time to learn it well.

Thank your for reading! I hope this article was helpful. If you want you can checkout my [website](https://www.ashutoshbiswas.dev/) and follow me on [Twitter](https://twitter.com/ashutoshbw) and [LinkedIn](https://www.linkedin.com/in/ashutosh-biswas/).

Happy reducing 😃
