> -  原文地址：[Regular Expression Metacharacters - What Does \d Mean in RegEx?](https://www.freecodecamp.org/news/what-does-d-mean-in-regex/)
> -  原文作者：[Kolade Chris](https://www.freecodecamp.org/news/author/kolade/)
> -  译者：
> -  校对者：

![Regular Expression Metacharacters - What Does \d Mean in RegEx?](https://www.freecodecamp.org/news/content/images/size/w2000/2023/03/start-graph--2-.png)

Regular expressions, otherwise known as RegEx or RegExp for short, are a defined pattern for matching a string or specific part(s) of a string. This string includes any character out there, be it letters, symbols, or digits.

In this article, we’ll look at the RegEx character `\d`, which you can use to match a digit.

## What We'll Cover

-   [What is `\d` in RegEx?](#whatisdinregex)
-   [How to Use the `\d` Metacharacter](#howtousethedmetacharacter)
-   [What is the Difference between the Digit Character set `[0-9]` and `\d` Metacharacter?](#whatisthedifferencebetweenthedigitcharacterset09anddmetacharacter)
-   [Conclusion](#conclusion)

## What is `\d` in RegEx?

`\d` is not just a “character” in RegEx, it is one of the “metacharacters” for matching strings.

By definition, metacharacters are characters that have special meaning while defining a pattern to match a string.

So, **`\d` is a metacharacter that matches any digit from 0 to 9**. You can use it to match a digit or a set of digits such as phone numbers, number ids, and more.

Apart from `\d`, there are other metacharacters such as:

-   `\w` which matches all word characters (a-z, A-Z, 0-9, and \_)
-   `\D` which matches all non-digit characters. It is the opposite of `\d`
-   `\W` which matches all non-word characters
-   `\s` which matches all white spaces including the spacebar, tab, and return

## How to Use the `\d` Metacharacter

Let’s look at how to match numbers with the `\d` metacharacter.

The first example we’ll look at is matching a number id, say `7253289593`.

That’s a 10-digit number. To match it, you can repeat the `\d` metacharacter 10 times:

![Screenshot-2023-03-02-at-12.10.33](https://www.freecodecamp.org/news/content/images/2023/03/Screenshot-2023-03-02-at-12.10.33.png)

Or you can write just one `\d` and repeat it 10 times:

![Screenshot-2023-03-02-at-12.11.39](https://www.freecodecamp.org/news/content/images/2023/03/Screenshot-2023-03-02-at-12.11.39.png)

You can also match phone numbers, for example US phone numbers:

![Screenshot-2023-03-02-at-12.16.25](https://www.freecodecamp.org/news/content/images/2023/03/Screenshot-2023-03-02-at-12.16.25.png)

Or Nigerian phone numbers this way:

![Screenshot-2023-03-02-at-12.17.33](https://www.freecodecamp.org/news/content/images/2023/03/Screenshot-2023-03-02-at-12.17.33.png)

This `\d` metacharacters also work fine with JavaScript:

```js
// Test a number ID
let id = '7253289593';
let regex1 = /\d{10}/g;

console.log(regex1.test(id)); // true

// Test US phone number
let UsPhoneNum = '(123) 456-7890';
let regex2 = /\(\d{3}\)\s\d{3}-\d{4}/g;

console.log(regex2.test(UsPhoneNum)); // true

// Test Nigerian phone number
let naijaPhoneNum = '08133333333';
let regex3 = /\d{11}/g;

console.log(regex3.test(naijaPhoneNum)); // true
```

## What is the Difference between the Digit Character set `[0-9]` and `\d` Metacharacter?

There’s no big difference between the `[0-9]` character set and the `\d` metacharacter.

The only difference you might see is some flavor of RegEx not supporting `\d` but supporting `[0 - 9]`. For example, grep’s RegEx doesn’t support the `\d` metacharacter.

So, if you use `[0 - 9]` in place of `\d`, you’ll still get a match.

For example, let’s match the number id from the previous example with `[0 - 9]` instead of `\d`:

![Screenshot-2023-03-02-at-12.28.17](https://www.freecodecamp.org/news/content/images/2023/03/Screenshot-2023-03-02-at-12.28.17.png)

You can see that’s still a match. So, there’s no difference between the `[0-9]` character set and `\d` metacharacter.

## Conclusion

This article showed you what the `\d` RegEx metacharacter is and how to use it. We looked at some examples and also compared it with the digit character set, `[0-9]`, so you can know how they both work.

Thank you for reading.