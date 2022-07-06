> -  原文地址：[JavaScript String Comparison – How to Compare Strings in JS](https://www.freecodecamp.org/news/javascript-string-comparison-how-to-compare-strings-in-js/)
> -  原文作者：[Dillion Megida](https://www.freecodecamp.org/news/author/dillionmegida/)
> -  译者：
> -  校对者：

![JavaScript String Comparison – How to Compare Strings in JS](https://www.freecodecamp.org/news/content/images/size/w2000/2022/07/string-comparison.png)

You may want to compare two strings to know which is higher or lower alphabetically or to see if they are equal.

You can do this in many ways. I'll show you two of them in this article.

## 1\. How to Compare Strings Using localeCompare

You can use the `localeCompare` method to compare two strings in the current locale. Here's the syntax:

```js
string1.localeCompare(string2)
```

`locaelCompare` returns:

-   1 if `string1` is greater (higher in the alphabetical order) than `string2`
-   \-1 if `string1` is smaller (lower in the alphabetical order) than `string2`
-   0 if `string1` and `string2` are equal in the alphabetical order

Here are some examples comparing two strings:

```js
const string1 = "hello"
const string2 = "world"

const compareValue = string1.localeCompare(string2)
// -1
```

It gives `-1` because, in the English locale, **h** in hello comes before **w** in the world (w is further down in the alphabetical order than h)

Another example:

```js
const string1 = "banana"
const string2 = "back"

const compareValue = string1.localeCompare(string2)
// 1
```

The comparison above gives `1` because, in the English locale, ba**n** in banana comes after ba**c** in back.

One more example:

```js
const string1 = "fcc"
const string2 = "fcc"
const string3 = "Fcc"

const compareValue1 = string1.localeCompare(string2)
// 0

const compareValue2 = string1.localeCompare(string3)
// -1
```

Comparing "fcc" and "fcc" gives `0` because they are equal in order. "fcc" and "Fcc" gives `-1` because capital "F" is greater than small "f".

In some browsers, instead of **\-1**, it may return **\-2** or some other negative value. So, do not depend on **\-1** or **1**, instead on negative (less than 0) or positive (more than 0) values

## 2\. How to Compare Strings Using Mathematical Operators

You can also use mathematical operators like greater than (**\>**), less than (**<**), and equal to when comparing strings.

Mathematical operators work similarly to `localeCompare` – by returning results based on the order of the characters in the string.

Using the previous examples:

```js
const string1 = "hello"
const string2 = "world"

console.log(string1 > string2)
// false
```

`string1` is not greater than `string2`, because **h** comes before **w**, so it is less than.

For the other example:

```js
const string1 = "banana"
const string2 = "back"

console.log(string1 > string2)
// true
```

`string1` is greater than `string2` because ba**n** comes after ba**c**k.

And for the last example:

```js
const string1 = "fcc"
const string2 = "fcc"
const string3 = "Fcc"

console.log(string1 === string2)
// true

console.log(string1 < string3)
// false
```

`string1` is equal to (`===`) `string2`, but `string1` is not less than `string3`, which is in contrast to `localeCompare`.

With mathematical operators, "fcc" is greater than "Fcc", but with `localeCompare`, `"fcc".localeCompare("Fcc")"` returns `-1` to show that "fcc" is less than "Fcc".

This behavior is one reason why I don't recommend using mathematical operators for comparing strings, even though it has the potential to do so.

Another reason why I don't recommend using mathematical operators is because `"fcc" > "fcc"` and `"fcc" < "fcc"` is `false`. "fcc" is equal to "fcc". So if you're depending on mathematical operators, getting `false` may be for different reasons than you believe.

So, for comparing strings, amongst the many ways there may be, using `localCompare` is an effective approach because it can be used for different languages.

Now you know an easy way to compare strings. Happy coding!