> -   原文地址：[10 JavaScript Hacks Every Web Developer Should Know](https://www.freecodecamp.org/news/javascript-hacks/)
> -   原文作者：Gert Svaiko
> -   译者：
> -   校对者：

![10 JavaScript Hacks Every Web Developer Should Know](https://images.unsplash.com/photo-1562615202-0b3035d14b6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc3M3wwfDF8c2VhcmNofDl8fHNwYW5uZXJ8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=2000)

If you optimize your JavaScript code with these hacks, it can help you write cleaner code, save resources, and optimize your programming time.

According to  [RedMonk][1], JavaScript is the most popular programming language. Furthermore, SlashData estimates that around  [12.4 million developers][2]  use JavaScript, which also includes CoffeeScript and Microsoft’s TypeScript.

This means that millions of people use JavaScript to work as programmers, take freelance gigs through sites like  [UpWork][3]  and  [Freelancer][4], or even start their own  [web developing businesses][5].

freeCodeCamp has an excellent  [basics course][6]  on JavaScript. But, if you’re already familiar with the fundamentals and want to advance your proficiency in JavaScript, then here are ten hacks you should learn and integrate into your workflow.

## 1\. How to Use Shortcuts for Conditionals

JavaScript allows you to use certain shortcuts to make your code easier on the eyes. In some simple cases you can use logical operators  `&&`  and  `||`  instead of  `if`  and  `else`.

Let’s look at the  `&&`  operator in action.

Example snippet:

```js
// instead of
if (accessible) {
console.log(“It’s open!”);
}
// use
accessible && console.log(“It’s open!”);
```

The  `||`  operator functions as an “or” clause. Now, using this operator is a bit trickier since it can prevent the application from executing. However, we can add a condition to get around it.

Example snippet:

```js
// instead of
if (price.data) {
return price.data;
} else {
return 'Getting the price’';
}
// use
return (price.data || 'Getting the price');
```

## 2\. How to Convert to an Integral Using the ~~ Operator

Removing decimals to return an integral using  `math.floor`  or  `math.round`  takes up resources. A more efficient way is using the  `~~`  operator.

Example snippet:

```js
// instead of
math.round(math.random*50)
// use
~~(math.random*50)
You can also use the “~~” operator to convert anything into a number value.
Example snippet:
~~('whitedress') // returns 0
~~(NaN) // returns 0
```

## 3\. Resize or Empty an Array Using array.length

Sometimes you need to adjust the size of your array or empty it. The most efficient way to do this is using  `array.length`.

Example snippet:

```js
array.length = n
var array = [a, b, c, d, e, f, g, h, i , j];
console.log(array.length); // returns the length as 10
array.length = 4;
console.log(array.length); // returns the length as 4
console.log(array); // returns “a,b,c,d”
```

You can also use  `array.length`  to remove all the values from a specified array.

Example snippet:

```js
var array = [a, b, c, d, e, f, g, h, i , j];
array.length = 0;
console.log(array.length); // returns the length as 0
console.log(array);
```

## 4\. How to Merge Arrays Without Causing Server Overload

It could be a serious strain on the server when merging arrays, especially if you’re dealing with large data sets. To keep things simple and keep up performance levels, use the  `array.concat()`  and  `array.push.apply(arr1, arr2)`  functions.

Using either of these functions depends on the size of your arrays.

Let’s look at how to deal with smaller arrays.

Example snippet:

```js
var list1 = [a, b, c, d, e];
var list2 = [f, g, h, i, j];
console.log(list1.concat(list2)); // returns the merged values of both arrays (a, b, c, d, e,f, g, h, i, j)
```

When using the  `array.concat()`  function on larger data sets, it will consume a lot of memory while creating a new array. To get around the performance drop, use  `array.push.apply(arr1, arr2)`  which consolidates the second array into the first one without creating a new array.

Example snippet:

```js
var list1 = [a, b, c, d, e];
var list2 = [f, g, h, i, j];
console.log(list1.push.apply(list1, list2)); // returns the merged values of both arrays (a, b, c, d, e,f, g, h, i, j)
```

## 5\. How to Use Filters with Arrays

Filtering an array is useful when you’re working with multiple columns of corresponding data. In this case, you can include and exclude data based on any characteristic that describes a group in your array.

To filter an array, use the  `filter()`  function.

Example snippet:

```js
const cars = [
{ make: 'Opel', class: 'Regular' },
{ make: 'Bugatti', class: 'Supercar' },
{ make: 'Ferrari', class: 'Supercar' },
{ make: 'Ford', class: 'Regular' },
{ make: 'Honda', class: 'Regular' },
]
const supercar = cars.filter(h => h.class === 'Supercar');
console.table(supercar); // returns the supercar class data in a table format
```

You can also use  `filter()`  together with  `Boolean`  to return all null or undefined values from your array.

Example snippet:

```js
cars.filter(Boolean)
```

## 6\. How to Extract Unique Values

Suppose you have a data set of repeating values, and you need to produce unique values out of this set. You can do so with a combination of spread syntax  `...`  and object type  `Set`. This approach works with both words and numbers.

Example snippet:

```js
const cars = ['Opel', 'Bugatti', 'Opel', 'Ferrari', 'Ferrari', 'Opel'];
var unrepeated_cars = [...new Set(cars)];
console.log(unrepeated_cars); // returns the values Opel, Bugatti, Ferrari
```

## 7\. How to Use the Replace Function Shortcut

You should be familiar with the  `string.replace()`  function. However, it only replaces a string with a specified line once and stops from there. Suppose you have a larger data set, and you need to type this function multiple times. It gets frustrating after a while.

To make your life easier, you can add  `/g`  at the end of the regex, so the function runs and replaces all matching conditions without stopping at the first one.

Example snippet:

```js
var grammar = "synonym synonym";
console.log(grammar.replace(/syno/, "anto")); // this returns "antonym synonym"
console.log(grammar.replace(/syno/g, "anto")); // this returns "antonym antonym"
```

## 8\. How to Cache Variables

When you’re working with large arrays and need to request elements by ID using  `getElementById()`, or by class name using  `getElementsByClassName()`, then JavaScript runs through the array on a loop with each similar element request. This could take up a lot of resources.

However, you can increase the performance by caching a variable if you know you’re regularly using a specified selection.

Example snippet:

```js
var carSerial = serials.getElementById('serial1234');
carSerial.addClass('cached-serial1234');
```

## 9\. How to Check if an Object Has Values

When you’re working with multiple objects, it gets difficult to keep track of which ones contain actual values and which you can delete.

Here’s a quick hack on how to check if an object is empty or has a value with  `Object.keys()`  function.

Example snippet:

```js
Object.keys(objectName).length // if it returns 0 then the Object is empty, otherwise it displays the number of values
```

## 10\. How to Minify your JavaScript Files

Large JS files affect your page’s loading and response performance. While writing your code, you could be left with unnecessary lines, comments, and dead code. Depending on your file’s size, it can pile up and become a redundant bottleneck.

There are a couple of tools to help you clean up the code and make the JS files lighter - or minify them, in developers’ terms. Even though minifying the JS file isn’t a hack per se, it’s still beneficial for developers to know and implement.

One is  [Google Closure Compiler][7], which parses your JavaScript, analyzes it, removes dead code, and rewrites and minimizes what's left. The other is  [Microsoft Ajax Minifier][8], which enables you to improve your web application’s performance by reducing the size of your JavaScript files.

There you have it. Use these ten hacks to make your code cleaner, save server resources, and retain programming time.

### Thanks for reading!

I'm a writer who is passionate about digital marketing, web development, and cybersecurity. You can reach me on  [LinkedIn here][9].

You might also enjoy some other articles I have written:

-   [The Google page experience: What you need to know and five steps to prepare for 2021][10]
-   [Web Hosting Security Threats to Watch Out for During This Season][11]
-   [How to boost sales during the rest of 2020's unusual holiday season][12]

  

[1]: https://redmonk.com/sogrady/2020/07/27/language-rankings-6-20/
[2]: https://www.slashdata.co/free-resources/developer-economics-state-of-the-developer-nation-19th-edition?
[3]: https://www.upwork.com/freelance-jobs/javascript/
[4]: https://www.freelancer.com/jobs/javascript/
[5]: https://websitesetup.org/how-to-get-web-design-clients/
[6]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/
[7]: https://developers.google.com/closure/compiler
[8]: https://archive.codeplex.com/?p=ajaxmin
[9]: https://www.linkedin.com/in/gert-svaiko/
[10]: https://www.searchenginewatch.com/2020/12/01/the-google-page-experience-what-you-need-to-know-and-five-steps-for-2021/
[11]: https://www.infosecurity-magazine.com/next-gen-infosec/web-hosting-threats-season/
[12]: https://www.digitalcommerce360.com/2020/12/08/how-to-boost-sales-during-the-rest-of-2020s-unusual-holiday-season/
