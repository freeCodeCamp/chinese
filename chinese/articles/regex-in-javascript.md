---
title: Regular Expressions (RegEx) in JavaScript – A Handbook for Beginners
author: Samyak Jain
authorURL: https://www.freecodecamp.org/news/author/samyak/
originalURL: https://www.freecodecamp.org/news/regex-in-javascript/
translator: "月落星河Tsukistar"
reviewer: ""
---

February 27, 2024 / [#Regex][1]

<!-- 部分专有名词的中文翻译参考自https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp 与 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions -->
<!-- more -->

# JavaScript 中的正则表达式（RegEx）- 初学者手册

![Samyak Jain](https://www.freecodecamp.org/news/content/images/size/w60/2024/02/profilepic.png)

[Samyak Jain][2]

  ![JavaScript 中的正则表达式（RegEx）- 初学者手册](https://www.freecodecamp.org/news/content/images/size/w2000/2024/02/Regular-Expressions-in-JavaScript-Cover-2.png)

正则表达式，也称为 regex，是用于模式匹配和文本处理的强大工具。无论是验证用户输入、从字符串中提取数据，还是进行高级的文本处理任务，理解正则表达式对开发人员来说都是必不可少的。

这份全面的指南将带领你了解 JavaScript 中正则表达式的基础知识，包括如何创建和使用正则表达式、正则表达式中的特殊字符、标志以及一些实际的示例。

### 预备知识:

虽然本教程旨在适合初学者，但具备基本的 JavaScript 基础知识将会有所帮助。熟悉 JavaScript 中的变量、数据类型、函数和字符串处理将有助于理解本教程涵盖的概念。

## 目录:

1.  [什么是正则表达式][3]?  
    – [如何编写一个正则表达式的模式][4] 
2.  [如何在JavaScript中使用正则表达式][5]  
    – JavaScript中的RegEx模式 
    – [Advanced Searching with Flags][6] 
3.  [Anchors in Regex][7]  
    – [Multiline Mode(m) of Anchors][8]  
    – [Word Boundaries (`\b`)][9]
4.  [Quantifiers in Regex][10]  
    – [Greedy Quantifiers][11]  
    – [Non Greedy Quantifiers (Lazy Mode)][12]
5.  [Sets and Ranges in Regex][13]  
    – [Sets][14]  
    – [Ranges][15]  
    – [Negating / Excluding Ranges][16]  
    – [Predefined Character Classes][17]
6.  [Special Characters and Escaping in Regex][18]  
    – [Metacharacters][19]  
    – [Escaping Special Characters][20]
7.  [Groupings in RegEx][21]  
    – [Capturing Groups][22]  
    – [Non-Capturing Groups][23]  
    – [Backreferences][24]  
    – [Regex Alternation][25]
8.  [Lookahead and Lookbehind Assertions in Regex][26]  
    – [Lookahead (?=)][27]  
    – [Negative Lookahead (?!)][28]  
    – [Lookbehind (?<=)][29]  
    – [Negative Lookbehind (?<!)][30]
9.  [Regex的实际例子和用例][31]  
    – [密码强度检查][32]  
    – [电子邮件地址校验][33]  
    – [电话号码格式化函数][34]
10.  [使用正则表达式的技巧和最佳实践方式][35]
11.  [总结][36]

<h2 id="what-are-regex">什么是Regex?</h2>

正则表达式是一种定义搜索模式的字符序列，通常缩写为“regex”。这种模式提供了一种强大的方式来搜索、替换和操作文本，它被用于在字符串中查找匹配项，帮助你识别特定的文本或字符模型。

在JavaScript中，你可以使用字面量或`RegExp`构造函数创建正则表达式：

-   **使用正则表达式字面量**: 模式由斜杠("/")包围。

```javascript
const re = /pattern/;

// 示例
const re = /ab+c/;
```

-   **使用构造函数: `RegExp`**构造函数。 这种方式允许对正则表达式进行运行时编译，并且在模式可能更改时非常有用。

```javascript
const re = new RegExp("pattern");

// 示例
const re = new RegExp("ab+c");
```

两种方法会产生相同的结果——选择哪一种取决于你的偏好。

<h3 id="how-to-write-regular-expression-patterns">如何编写一个正则表达式的模式</h3>

一个正则表达式模式是由简单的字符或者是简单和特殊字符的组合所构成的。

1.  **简单模式**: 它们匹配精确的字符序列。例如，模式 `/abc/` 匹配字符串中的序列"abc"。
2.  **特殊字符**: 它们通过重复或匹配特定类型的字符等功能增强了模式匹配，从而实现了更灵活、更强大的模式匹配。例如, `*` 匹配前一项出现0次或多次。 `/ab*c/` 匹配 "ac", "abc", "abbc", 等等诸如这类形式的字符串。

<h2 id="how-to-use-regular-expressions-in-javascript">如何在JavaScript中使用正则表达式</h2>

你可以使用JavaScript中适用于 `RegExp` 和 `String` 对象的多种方法来使用正则表达式，例如`test()`和 `exec()`方法，以及具有如下语法的方法：

```javascript
regex.methodname(string)

// 示例
string.test(string)
```

以及类似于 `match()` 和 `replace()` 方法,以及具有这种语法的方法：

```javascript
string.methodname(regex)

// 示例
string.replace(regex, replacement)
```

在这里， `string` 是字符串， `regex` 是一种正则表达式模式。

让我们来探讨一下这些方法在实践中是如何使用的。

**The `test()` Method**: checks whether a particular string matches a specified pattern or regular expression. It returns `true` if the pattern is found in the string, otherwise, it returns `false`.

```javascript
let pattern = /hello/;
let str = "hello world";

let result = pattern.test(str);
console.log(result); // 输出为：true
```

**The `exec()` Method**: searches for a match of a pattern within a string. It returns an array containing details like the matched text, index of the match within the string, and the input string itself. 例如：

```javascript
let pattern = /world/;
let str = "hello world";

let result = pattern.exec(str);
console.log(result); // Output: ["world", index: 6, input: "hello world"]
```

**The `match()` Method**: Searches for occurrences of a pattern within a string. It returns the first element matched. If has the global flag (`g`), it returns an array containing all matches found, or `null` if no matches are found.

```javascript
let str = "The quick brown fox jumps over the lazy dog.";
let matches = str.match(/the/gi);

console.log(matches); // 输出为： ["The", "the"]
```

`/the/gi` searches for all occurrences of the word "the" in the string, regardless of case. 

**The `matchAll()` Method**: Returns an iterator of all results matching a regular expression against a string. Each element of the iterator is an array containing details about the match, including captured groups.

```javascript
let str = "Hello world! This is a test string.";
let regex = /[a-zA-Z]+/g;

let matches = str.matchAll(regex);

for (let match of matches) {
    console.log(match);
}
```

This method is useful when you need detailed information about all matches found in a string.

**The `search()` Method**: Searches for a specified pattern within a string. It returns the index of the first occurrence of the pattern within the string, or `-1` if the pattern is not found.

```javascript
let str = "The quick brown fox jumps over the lazy dog";
let pattern = /brown/;

let result = str.search(pattern);
console.log(result); // 输出为： 10
```

**The `replace()` Method**: Replaces the first occurrence of a specified pattern in a string with another substring or value. To replace all occurrences, you can use the global flag (`g`) in the regular expression.

```javascript
let str = "Hello, World!";
let newStr = str.replace(/o/g, "0");

console.log(newStr); // Output: "Hell0, W0rld!"
```

**The `replaceAll()` Method**: Replaces all occurrences of a specified substring or pattern with a replacement string. It differs from `replace()` in that it replaces all occurrences by default, without the need for a global flag (`g`).

```javascript
let str = "apple,banana,apple,grape";
let newStr = str.replaceAll("apple", "orange");
console.log(newStr); // Output: "orange,banana,orange,grape"
```

This method simplifies the process of replacing all occurrences of a substring within a string.

**The `split()` Method**: Though not exclusively a RegEx method, `split()` can accept a RegEx pattern as its argument to split a string into an array of substrings based on the specified patterns or delimiters. For instance:

```javascript
let str = "apple,banana,grape";
let arr = str.split(/,/);
console.log(arr); // Output: ["apple", "banana", "grape"]
```

These methods offer different functionalities based on your needs. For example, if you only need to know whether a pattern is found in a string, `test()` or `search()` methods are efficient. If you require more information about matches, the `exec()` or `match()` methods are suitable.

<h2 id="advanced-searching-with-flags">使用标志进行高级搜索</h2>

In JavaScript, regular expressions support pattern flags, which are optional parameters that modify the behavior of the pattern matching.

Let's delve into two common flags: the ignore flag (`i`) and the global flag (`g`).

### The Ignore Flag (`i`):

The ignore flag (`i`) instructs the regular expression to ignore case sensitivity when searching for matches. For example:

```javascript
let re = /hello/i;
let testString = "Hello, World!";
let result = re.test(testString);

console.log(result); // Output: true
```

In this case, the regular expression `/hello/i` matches the string `"Hello"` despite differences in case because we used the ignore flag.

### The Global Flag (`g`):

The global flag (`g`) allows the regular expression to find all matches within a string, rather than stopping after the first match. For example:

```javascript
let re = /hi/g;
let testString = "hi there, hi again!";
let result = testString.match(re);

console.log(result); // Output: ["hi", "hi"]
```

In this example, the regular expression `/hi/g` finds both occurrences of `"hi"` in the string `"hi there, hi again!"`.

### Combining Flags

You can combine flags to achieve specific matching behavior. For instance, using both the ignore flag (`i`) and the global flag (`g`) together allows for case-insensitive matching while finding all occurrences of the pattern.

```javascript
let re = /hi/gi;
let testString = "Hi there, HI again!";
let result = testString.match(re);

console.log(result); // Output: ["Hi", "HI"]
```

Here, the regular expression `/hi/gi` matches both `"Hi"` and `"HI"` in the string `"Hi there, HI again!"`.

### The `u` Flag:

Though not commonly used, the `u` flag handles Unicode characters, especially surrogate pairs, correctly. Surrogate pairs are used to represent characters outside the Basic Multilingual Plane (BMP) in UTF-16 encoding.

**Example:** Let's consider a string containing emoji characters and try to match them using a regular expression without and with the `u` flag.

```javascript
// Without the u flag
let result1 = 'Smile Please 😊'.match(/[😒😊🙄]/);
console.log(result1); // Output: ["�"]

// With the u flag
let result2 = 'Smile Please 😊'.match(/[😒😊🙄]/u);
console.log(result2); // Output: ["😊"]
```

Without the `u` flag, the regex fails to match the emoji correctly because they are represented as surrogate pairs in UTF-16 encoding. However, with the `u` flag, it correctly matches the emoji `'😊'`.

## Anchors in Regex

Anchors are special characters in regex that do not represent actual characters but instead indicate positions within a string. There are two main anchors: `^` and `$`.

**The `^` Anchor**: The `^` anchor matches the beginning of the text. Basically, it checks if a string starts with a specific character or pattern.

```javascript
let str = 'Mountain';
console.log(/^S/.test(str)); // Output: false
```

**The `$` Anchor**: The `$` anchor matches the end of the text. It checks if a string ends with a specific character or pattern.

```javascript
let str = 'Ocean';
console.log(/n$/.test(str)); // Output: true
```

You may often use `^` and `$` together to check if a string fully matches a pattern.

```javascript
let isValid = /^\d\d:\d\d$/.test('10:01');
console.log(isValid); // Output: true
```

This example checks if the input string matches a time format like "10:01"

-   In the code above, `^\d\d:\d\d$` ensures that the string contains exactly two digits, followed by a colon, and then exactly two more digits.

### Multiline Mode of Anchors (`^` and `$`):

By default, the `^` and `$` anchors in regular expressions operate in single-line mode, meaning they match the beginning and end of the entire string. But in some cases, you might want to match the beginning and end of individual lines within a multiline string. This is where the multiline mode, indicated by the `m` flag, comes into play.

Since single-line mode is the default, it only matches the first digit "1" at the beginning of the string.

```javascript
let str = `1st line
2nd line
3rd line`;

let re = /^\d/g; // "^\d" matches the digit at the beginning of the string
let matches = str.match(re);

console.log(matches); // Output: ["1"]
```

-   **multiline mode(m)**: `/^\d/gm` is the regex pattern with the `m` flag enabled. By utilizing the `m` flag, you can ensure that `^` and `$` match the beginning and end of individual lines within a multiline string, rather than just the entire string itself.

As a result, it matches "1" from the first line, "2" from the second line, and "3" from the third line:

```javascript
let str = `1st line
2nd line
3rd line`;

let re = /^\d/gm;
let matches = str.match(re);

console.log(matches); // Output: ["1", "2", "3"]
```

This is particularly useful when working with text that contains multiple lines or line breaks.

### Word Boundaries (`\b`) :

The `\b` is a special character in regular expressions called an anchor, just like `^` and `$`. It's used to match a position in the string where a word character (such as a letter, digit, or underscore) is not followed or preceded by another word character. For instance:

-   `\bword\b` matches the word "word" in the string, but not substrings like "wording" or "swordfish".

```javascript
let pattern = /\bword\b/;
let pattern2 = /word/;
console.log(pattern.test("This is a word.")); // Output: true
console.log(pattern.test("This is wording.")); // Output: false (doesn't match "wording")
console.log(pattern2.test("This is wording")); // Output: True
```

`/word/` matches the substring "word" anywhere within the string. It matches "word" in "This is wording." because it doesn't include any word boundary assertions.

Other examples can be:

-   `\b\d+\b` matches whole numbers in the string, but doesn't include non-numeric characters adjacent to the numbers.
-   `^\bword\b$` matches a string that consists solely of the word "word".

## Quantifiers in Regex

In regex, quantifiers enable you to specify the quantity of characters or character classes you want to match within a string. They are symbols or characters that define how many instances of a character or group you're looking for.

### Exact Count `{n}`:

The simplest quantifier is `{n}`, which specifies an exact count of characters or character classes you want to match. Let's say we have a string "Year: 2022" and we want to extract the year from it:

```javascript
let str = 'Year: 2022';
let re = /\d{4}/; // Matches a four-digit number ; basically concise & better way to write \d\d\d\d

let result = str.match(re);

console.log(result); // Output: ["2022"]
```

### The Range `{n,m}`:

The range quantifier `{n,m}` matches a character or character class from n to m times, inclusively. Example:

```javascript
let str = "The meeting is scheduled for 10:30 AM and ends at 2 PM";
let re = /\d{2,4}/g; // Matches numbers with 2 to 4 digits

let result = str.match(re);
console.log(result); // Output: [ '10', '30' ]
```

/\\d{2,4}/g matches numbers with 2 to 4 consecutive digits i.e '10', '30'

### `{n,}` and Shorthands:

The `{n,}` quantifier matches a character or character class at least n times. Additionally, there are shorthand notations for common quantifiers. Example:

```javascript
let str = 'The price of the item is $2500';
let re = /\d{2,}/g; // Matches numbers with 2 or more digits

let result = str.match(re);
console.log(result); // Output: ["2500"]
```

### Shorthands: `+`, `?`, `*`:

The quantifiers `+`, `?`, and `*` are shorthand notations for common use cases. Let's use the shorthand `+` to match one or more digits in a phone number:

```javascript
let phone = "+1-(103)-777-0101";
let result = phone.match(/\d+/g); // Matches one or more digits

console.log(result); // Output: ["1", "103", "777", "0101"]
```

/\\d+/g matches one or more consecutive digits in the phone number.

### Quantifiers: Zero or One (`?`):

The quantifier `?` in regular expressions means zero or one occurrence of the preceding character or group. It's equivalent to {0,1}. Example:

```javascript
let str = 'The sky is blue in color, but the ocean is blue in colour';
let result = str.match(/colou?r/g); // Matches "color" and "colour"

console.log(result); // Output: ["color", "colour"]
```

In this example, the regular expression `/colou?r/g` matches both "color" and "colour" in the given string, allowing for zero or one occurrence of the letter "u".

### Quantifiers: Zero or More (`*`):

The quantifier `*` in regular expressions means zero or more occurrences of the preceding character or group. It's equivalent to {0,}. Example:

```javascript
let str = 'Computer science is fascinating, but computational engineering is equally interesting';
let re = /comput\w*/g; // Matches "computer" and "computational"

let results = str.match(re);

console.log(results); // Output: ["computer", "computational"]
```

### Greedy Quantifiers:

In regular expressions, quantifiers determine how many times a particular element can occur in a match.

By default, quantifiers operate in what's called a "greedy" mode. This means they try to match as much of the preceding element as possible. For instance:

```javascript
let regexp = /".+"/g;
let str = 'The "Boy" and his "Friends" were here';
console.log( str.match(regexp) ); // "Boy" and his "Friends"
```

Instead of finding two separate matches ("Boy" and "Friends"), it finds one match encompassing both ("Boy" and his "Friends").

#### Understanding Greedy Search

To understand why the initial attempt failed, let's delve into how the regular expression engine conducts its search.

1.  The engine starts from the beginning of the string and finds the opening quote.
2.  It proceeds to match characters following the opening quote. Since the pattern is `".+"`, where `.` matches any character and `+` quantifies it to match one or more times, the engine continues matching characters until it reaches the end of the string.
3.  The engine then backtracks to find the end quote `"` that would complete the match. It starts by assuming the maximum possible characters matched by `".+"` and gradually reduces the number of characters until it finds a valid match.
4.  Eventually, the engine finds a match encompassing the entire substring "Boy" and his "Friends".

This behavior of greedily matching as many characters as possible is the default mode of quantifiers in regular expressions and doesn't always yield the desired results. You can see this in the example where it results in a single match instead of multiple separate matches for quoted strings.

### Non Greedy Quantifiers (Lazy Mode):

To address the limitations of greedy mode, regular expressions also support a lazy mode for quantifiers. In lazy mode, quantified characters are repeated the minimal number of times necessary to satisfy the pattern.

We can enable the lazy mode by appending a question mark `?` after the quantifier. For example, `*?` or `+?` denotes lazy repetition.

```javascript
let regexp = /".+?"/g;
let str = 'The "Boy" and his "Friends" were here';
console.log( str.match(regexp) ); // "Boy" "Friends"
```

In this example, the lazy quantifier `".+?"` ensures that each quoted string is matched separately by minimizing the number of characters matched between the opening and closing quotes.

Let's trace the search process step by step to understand how the lazy quantifier works:

-   The engine starts from the beginning of string and finds the opening quote.
-   Instead of greedily matching all characters until the end of the string, the lazy quantifier `".+?"` matches only the characters necessary to satisfy the pattern. It stops as soon as it encounters the closing quote `"`.
-   The engine repeats this process for each quoted string in the text, resulting in separate matches for "Boy" and "Friends".

## Sets and Ranges in Regex

In regular expressions, you use sets and ranges to match specific characters or a range of characters within a given pattern.

### Sets:

A set is defined using square brackets `[...]`. It allows you to match any character within the set. For example, `[aeiou]` matches any of the vowels 'a', 'e', 'i', 'o', or 'u'.

**Example:** Suppose we have a string `'The quick brown fox jumps over the lazy dog.'`. To match all vowels in this string, we can use the regular expression `/[aeiou]/g`.

```javascript
let str = 'The quick brown fox jumps over the lazy dog.';
let re = /[aeiou]/g;
let results = str.match(re);

console.log(results); // Output: ['e', 'u', 'i', 'o', 'o', 'u', 'o', 'e', 'e', 'a', 'o']
```

This matches all occurrences of vowels in the string.

```javascript
let str = 'The cat chased the rats in the backyard';;
let re = /[cr]at/g;
let results = str.match(re);

console.log(results); // Output: ['cats', 'rats']
```

Here, the RegEx `[cr]at` matches words that start with either 'c', or 'r' and are followed by 'at'.

### Ranges:

Ranges allow you to specify a range of characters within a set. For example, `[a-z]` matches any lowercase letter from 'a' to 'z', and `[0-9]` matches any digit from '0' to '9'. Example:

```javascript
let str = 'Hello World!';
let re = /[a-z]/g;
let results = str.match(re);

console.log(results); // Output: ['e', 'l', 'l', 'o', 'o', 'r', 'l', 'd']
```

Here, regex `[a-z]` matches all lowercase letters in the string.

### Negating / Excluding Ranges:

To exclude certain characters from a set, you can use the `^` symbol inside the square brackets. Example:

```javascript
let str = 'The price is $19.99';
let re = /[^0-9]/g;
let results = str.match(re);

console.log(results); // Output: ['T', 'h', 'e', ' ', 'p', 'r', 'i', 'c', 'e', ' ', 'i', 's', ' ', '$', '.'] 
```

Here, `[^0-9]` matches any character that is not a digit in the string

Similarly `[^a-z]` will match any character that is not a lowercase letter:

```javascript
let str = 'The price is $19.99';
let results2 = str.match(/[^a-z]/g);

console.log(results2); // Output: ['T', ' ', ' ', ' ', '$', '1', '9', '.', '9', '9']
```

### Predefined Character Classes:

Some character classes have predefined shorthand notations for common ranges of characters.

**`\d` class**: It matches any digit character, equivalent to the range `[0-9]`. Example:

```javascript
let phone = '+1-(103)-777-0101';
let re = /\d/g;
let numbers = phone.match(re);
let phoneNo = numbers.join('');
console.log(phoneNo); // Output: 11037770101
```

We used the `match()` and `join()` methods to format the phone number. This approach simplifies the process of formatting and cleaning up data, making it suitable for various text processing applications.

Similarly, `**\s**` matches a single whitespace character, including spaces, tabs, and newline characters, and `**\w**` matches any word character (alphanumeric character or underscore), equivalent to the range `[a-zA-Z0-9_]`.

Combining these classes allows for more flexible and precise pattern matching, enabling a wide range of text processing tasks. Example:

```javascript
let str = 'O2 is oxygen';
let re = /\w\d/g;
console.log(str.match(re)); // Output: ["O2"]
```

These predefined character classes provide convenient shortcuts for commonly used character ranges.

**Inverse classes**, denoted by uppercase letters (for example, `\D`), match any character not included in the corresponding lowercase class. This provides a convenient way to match characters outside specific sets, such as non-digit characters, non-whitespace characters, or non-word characters. Example:

```javascript
let phone = '+1-(103)-777-0101';
let re = /\D/g;
console.log(phone.replace(re,'')); // Output: 11037770101
```

## Special Characters and Escaping in Regex

### Metacharacters:

Metacharacters are characters that have special meanings in Regular Expressions and are used to construct patterns for matching text.

Anchors (`^` and `$`), Alternation(`|`), quantifiers (`+`, `?`, `{}`), and predefined character classes ( `\d`, `\w`, `\s`) are all considered metacharacters, each serving distinct purposes in pattern definition. We also have a few more, which we'll cover now.

**Dot (`.`)** is a metacharacter with a special meaning. It's used to match any single character except newline characters (`\n`). It serves as a wildcard, allowing for flexible pattern matching when the exact character is unknown or irrelevant.

If you need the dot to match newline characters as well, you can use the `/s` flag in JavaScript, which enables the "single line" mode, making the dot match any character including newline characters. Example:

```javascript
const regex = /a.b/; 

console.log(regex.test('acb')); // true
console.log(regex.test('aXb')); // true
console.log(regex.test('a\nb')); // false (newline character not matched)
console.log(regex.test('a\nb', 's')); // true (with 's' flag, newline character matched)
console.log(regex.test('ab')); // false (missing character between 'a' and 'b')
```

`/a.b/` matches any string that starts with 'a', followed by any single character (except newline), and ends with 'b'

The dot (`.`) can be combined with other regex elements to form more complex patterns. For example, `/.at/` matches any three-character sequence ending with 'at', such as 'cat', 'bat', or 'hat'.

### Escape Special Characters:

Escaping special characters is essential when you want to search for or match these characters in input strings without invoking their special regex meanings.

To match a special character literally in a regex pattern, you need to escape it by preceding it with a backslash (). This tells the regex engine to treat the special character as a regular character. Example:

```javascript
let str = 'This ^ symbol is called Caret ';
let re = /[\^]/g;
let results = str.match(re);

console.log(results); // Output: ['^']
```

Without \\, ^ will be interpreted as a literal caret symbol.

Fun fact: the `/` we use to escape metacharacters is itself a metacharacter and can be escaped with another backslash as `//`.

## Groupings in RegEx

### Capturing Groups:

In JavaScript regular expressions, capturing groups are used to extract specific parts of a matched string. Imagine you have a path like "resource/id", for instance, "posts/123". To match this path, you can use a regular expression like `/\w+\/\d+/`.

-   `\w+` matches one or more word characters.
-   `\/` matches the forward slash `/`.
-   `\d+` matches one or more digits.

Let's say you have a path like "posts/123" and you want to capture the `id` part (123). We can use capturing groups for this.

To create a capturing group, you enclose the part of the regex pattern you want to capture in parentheses. For example, `(\d+)` captures one or more digits.

Here's how it works:

```javascript
const path = 'posts/123';
const pattern = /\w+\/(\d+)/;

const match = path.match(pattern);
console.log(match);
```

Output:

```bash
[ 'posts/123', '123', index: 0, input: 'posts/123', groups: undefined ]
```

Here, `'123'` is captured by the capturing group `(\d+)`.

**Using Multiple Capturing Groups**: You can have multiple capturing groups in a regex pattern. For example, to capture both the resource (like "posts") and the id (like "123") from the path "posts/123", you can use `/(\w+)\/(\d+)/`.

```javascript
const path = 'posts/123';
const pattern = /(\w+)\/(\d+)/;

const match = path.match(pattern);
console.log(match);
```

Output:

```bash
['posts/123', 'posts', '123', index: 0, input: 'posts/123', groups: undefined]
```

Here, `'posts'` and `'`123`'` are captured by the two capturing groups `(\w+)` and `(\d+)` respectively.

**Named Capturing Groups** allow you to assign names to capturing groups, which makes it easier to reference them later in your code.

The syntax for named capturing groups is `(?<name>rule)`, where:

-   `()` indicates a capturing group.
-   `?<name>` specifies the name of the capturing group.
-   `rule` is a rule in the pattern.

For example, suppose we want to capture the resource (like "posts") and the id (like "123") from the path "posts/123" using named capturing groups.

```javascript
const path = 'posts/123';
const pattern = /(?<resource>\w+)\/(?<id>\d+)/;

const match = path.match(pattern);
console.log(match);
```

Output:

```javascript
[
  'posts/123',
  'posts',
  '123',
  index: 0,
  input: 'posts/123',
  groups: [Object: null prototype] { resource: 'posts', id: '10' }
]
```

Here, `resource` and `id` are the names assigned to the capturing groups. We can access them using `match.groups`.

**另一个例子**: Let's say we have a path like "posts/2022/02/18" and we want to capture the resource (like "posts"), year (like "2022"), month (like "02"), and day (like "18") using named capturing groups.

The regex pattern for this would be:

```javascript
const path = 'posts/2024/02/22';
const pattern =
  /(?<resource>\w+)\/(?<year>\d{4})\/(?<month>\d{2})\/(?<day>\d{2})/;

const match = path.match(pattern);
console.log(match.groups);
```

Output:

```bash
{resource: 'posts', year: '2024', month: '02', day: '22'}
```

Here, each part of the path is captured using named capturing groups, making it easy to access them by their respective names.

### Non-capturing groups:

In regular expressions, non-capturing groups are used to group parts of a pattern together for applying quantifiers or alternation, without capturing the matched substring.

To create a non-capturing group, you add `?:` at the beginning of the parentheses. So, `/(?:\d)+/` is the non-capturing version of the previous example. The `?:` tells the regex engine not to capture the matched substring.

Let's see the difference between capturing and non-capturing groups with an example:

```javascript
// capturing group
const regexWithCapture = /(\d{2})\/(\d{2})\/(\d{4})/;
const matchWithCapture = regexWithCapture.exec('02/26/2024');

console.log(matchWithCapture); // ["02/26/2024", "02", "26", "2024"]
```

```javascript
// non-capturing group
const regexWithoutCapture = /(?:\d{2})\/(?:\d{2})\/(?:\d{4})/;
const matchWithoutCapture = regexWithoutCapture.exec('02/26/2024');

console.log(matchWithoutCapture); // ["02/26/2024"]
```

In summary, non-capturing groups `(?:pattern)` behave like regular capturing groups `()` in terms of matching patterns, but they don't store the matched text in memory for later retrieval. This makes them useful when you don't need to extract specific parts of the matched text.

### Backreferences:

Backreferences enable you to refer to previously captured groups within a regular expression. Think of them as variables that store matched patterns.

In JavaScript, the syntax for a backreference is `\N`, where `N` is an integer representing the capturing group number.

For instance, consider a string with a duplicate word "Lion" and we want to remove the duplicate word to get `'Lion is the King'`:

```javascript
const s = 'Lion Lion is the King';
```

-   First, we match a word using `\w+\s+`.
-   Then, we create a capturing group to capture the word using `(\w+)\s+`.
-   Next, we use a backreference (`\1`) to reference the first capturing group.
-   Finally, we replace the entire match with the first capturing group using `String.replace()`.

```javascript
const pattern = /(\w+)\s+\1/;
const result = s.replace(pattern, '$1');
console.log(result); // Output: 'Lion is the King'
```

### Regex Alternation:

Regex alternation is a feature that allows you to match different patterns within a single regular expression. It works similarly to the logical OR operator. In regex, you use the pipe symbol `|` to denote alternation, where you can match either A or B.

```
A | B // This means you can match either pattern A or pattern B.
```

Now, let's explore some practical applications of regex alternation:

**匹配格式为hh:mm的时间字符串**: Suppose we want to match time strings in the format hh:mm, where hh represents hours and mm represents minutes. A basic regular expression to match this format would be `/\d{2}:\d{2}/`.

However, this basic pattern matches invalid times like "99:99". To ensure we match valid times (hours ranging from 00 to 23 and minutes ranging from 00 to 59), we need to refine our regex using alternation.

To match valid hours (00 to 23), we can use the following pattern:

-   `[01]\d` matches numbers from 00 to 19.
-   `2[0-3]` matches numbers from 20 to 23.

So, the pattern for hours becomes `[01]\d|2[0-3]`.

To match valid minutes (00 to 59), we can use the pattern `[0-5]\d`.

Now, we can combine the hour and minute patterns using alternation to get the final regex pattern:

`/([01]\d|2[0-3]):[0-5]\d/g`

In this pattern:

-   `([01]\d|2[0-3])` matches valid hours.
-   `:` matches the colon.
-   `[0-5]\d` matches valid minutes.

This regex pattern ensures that we only match valid time strings in the `hh:mm` format. Example:

```javascript
const timeString = '07:23 33:71 21:17 25:81';
const pattern = /([01]\d|2[0-3]):[0-5]\d/g;
const matches = timeString.match(pattern);

console.log(matches);
```

**期望输出**:

```
['07:23', '21:17']
```

## Lookahead and Lookbehind in Regex

### Lookahead:

Lookahead in regular expressions allows matching a pattern (X) only if it's followed by another specific pattern (Y). The syntax is `X(?=Y)`, where:

-   **X** is the pattern you want to match.
-   **(?=Y)** is the lookahead assertion indicating that `X` should be followed by `Y`.

**Example**: Let's say we have a string describing various distances, and we want to identify numbers followed by the units "miles" but not "kilometers". We can use lookahead in a regex pattern:

```javascript
const dist = "He ran 5 miles, but not 10 kilometers.";

const regex = /\d+(?=\s*miles)/g;

console.log(dist.match(regex)); // Output: ["5"]
```

**Multiple Lookaheads**: It's possible to have multiple lookaheads in a regular expression using the syntax `X(?=Y)(?=Z)`. This allows us to impose multiple conditions for matching.

**例如:** Let's say we want to match strings that contain both "foo" and "bar", but in any order:

```javascript
const regex = /(?=.*foo)(?=.*bar)/;

console.log(regex.test("foobar")); // true
console.log(regex.test("barfoo")); // true
console.log(regex.test("foo"));    // false
console.log(regex.test("bar"));    // false
```

### Negative Lookaheads:

To negate a lookahead, use a negative lookahead with the syntax `(?!Y)`, where the regex engine matches X only if it is not followed by Y.

**例如**： Suppose we want to match numbers but not if they are followed by "miles":

```javascript
const text = "He ran 5 miles, but not 10 kilometers.";

const regex = /\d+(?!\s*miles)/g;

console.log(text.match(regex)); // Output: ["10"]
```

`(?!\s*miles)` is the negative lookahead that ensures the number is not followed by zero or more whitespaces and the word "miles"

### Lookbehind:

Lookbehinds provide a way to match patterns based on what precedes them, essentially matching an element if there is another specific element before it.

**例如**： Suppose we have a string containing prices, and we want to match numbers preceded by the currency symbol "$" but not preceded by "€". We can use a lookbehind in a regex pattern

```javascript
const priceString = "The price is $100, but €200.";

const regex = /(?<=\$)\d+/g;

console.log(priceString.match(regex)); // Output: ["100"]
```

**说明**： `(?<=\$)` matches an element if there is a literal string "$" before it. The backslash `\` is used to escape the special character "$", treating it as a literal character.

### 零宽负向后行断言（Negative lookbehind）:

Negative lookbehinds allow you to match a pattern only if it is not preceded by a specific pattern. This is useful for excluding certain patterns from matches based on what precedes them.

Example: Suppose we have a string containing various prices in different currencies, and we want to match the numbers not preceded by the currency symbol "$". We can use a negative lookbehind in a regex pattern:

```javascript
const priceString = "The price is $50, but not €100.";

const regex = /(?<!\$)\b\d+\b/g;

console.log(priceString.match(regex)); // Output: ["100"]
```

**说明**： `(?<!\$)` is the negative lookbehind syntax, which matches the following pattern only if it is not preceded by the literal string "$".

## Regex的实际例子和用例

现在，让我们探索一些在JavaScript应用程序中使用正则表达式来解决常见问题和执行文本操作任务的实际示例。

### 密码强度检验函数:

你可以使用正则表达式来强制执行密码强度要求，例如最小长度和特殊字符的存在。

```javascript
function checkPasswordStrength(password) {
    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return pattern.test(password);
}

console.log(checkPasswordStrength("Passw0rd!"));    // Output: true
console.log(checkPasswordStrength("weakpassword")); // Output: false
```

Here, the regex ensures that the password contains at least 1 digit, 1 lowercase letter, 1 uppercase letter, 1 special character, and is at least 8 characters long.

Here's what this pattern does:

-   `(?=.*\d)`: Requires at least one digit.
-   `(?=.*[a-z])`: Requires at least one lowercase letter.
-   `(?=.*[A-Z])`: Requires at least one uppercase letter.
-   `(?=.*[!@#$%^&*])`: Requires at least one special character.
-   `.{8,}`: Requires a minimum length of 8 characters.

### 电子邮箱地址校验函数:

Email validation is crucial for ensuring data integrity and security in web applications. With regex methods, we can easily implement robust email validation mechanisms.

```javascript
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

console.log(validateEmail("example@email.com")); // true
console.log(validateEmail("invalid-email"));      // false
```

Here's what this pattern does:

-   `^`: Asserts the start of the string.
-   `[^\s@]+`: Matches one or more characters that are not whitespace or '@'.
-   `@`: Matches the '@' symbol.
-   `[^\s@]+`: Matches one or more characters that are not whitespace or '@'.
-   `\.`: Matches the '.' symbol (escaped because '.' has a special meaning in RegEx).
-   `[^\s@]+`: Matches one or more characters that are not whitespace or '@'.
-   `$`: Asserts the end of the string.

### 电话号码格式化函数:

在涉及电话号码输入和显示的应用程序中，电话号码格式化增强了用户体验和可读性。

通过定义一个匹配电话号码组件的regex模式，我们可以使用 `replace()` 方法轻松地将电话号码格式化为所需的模式。

```javascript
function formatPhoneNumber(phoneNumber) {
    const phoneRegex = /(\d{3})(\d{3})(\d{4})/;
    return phoneNumber.replace(phoneRegex, "($1) $2-$3");
}

const formattedNumber = formatPhoneNumber("9876543210");
console.log(formattedNumber); // (987) 654-3210
```

这个函数接受一个电话号码字符串作为输入，并以标准的 `(XXX) XXX-XXXX` 格式返回。

在 `replace()` 方法中, `$1`, `$2`, 和 `$3` 表示以RegEx模式捕获的组，对应于电话号码中的三组数字。

## 使用正则表达式的技巧和最佳实践方式

#### 1\. 理解正则表达式语法:

了解正则表达式的语法和元字符，以便有效使用正则表达式。

#### 2\. 测试正则表达式:

由于复杂的模式或特殊字符，正则表达式有时会表现出意外的行为。经常使用不同的输入字符串测试你的正则表达式，以确保它们在不同的场景中表现得像预期的那样。

#### 3\. 优化性能:

考虑通过简化模式或尽可能使用更有效的替代方案来优化正则表达式的性能。

#### 4\. 使用内置方法:

JavaScript提供了例如 `String.prototype.match()`, `String.prototype.replace()`, 和 `String.prototype.split()`等用于常见的字符串操作任务的内置方法。评估这些方法是否可以在不需要正则表达式的情况下完成任务。

#### 5\. 为你的正则表达式添加注释:

使用 `(?#comment)` 语法为你的正则表达式添加注释来解释部分复杂的模式。 例如:

```javascript
const regex = /(\d{3})-(\d{3})-(\d{4})\s(?# Match a phone number in the format XXX-XXX-XXXX)/;
```

#### 6\. 分解复杂模式:

如果你的正则表达式太过复杂而难以理解或维护，请考虑将其分解为更小、更易于管理的部分。使用变量来存储正则表达式模式的各个组件，并根据需要组合它们。

#### 7\. 利用在线资源并坚持练习:

有许多在线资源和工具可以用来测试和学习正则表达式。 Websites like [Regex101][37] and [RegExr][38] provide interactive platforms to test and debug regular expressions. Also leverage online tutorials and documentation to learn regex concepts.

The MDN Web Docs have a helpful guide to [Regular Expressions here][39]. And here's a quick start guide to regular expressions in JavaScript: [RegExp Tutorial][40].

## 总结

正则表达式是JavaScript中用于模式匹配和操作的通用工具。

通过理解正则表达式的方法、高级特性和对标志的使用，利用在线资源和调试工具，你可以有效地学习它们，并将它们应用于各种场景，从简单的模式匹配到复杂的文本处理任务。

---

![Samyak Jain](https://www.freecodecamp.org/news/content/images/size/w60/2024/02/profilepic.png)

[Samyak Jain][41]

带上web开发者的工具箱，我是一名学无止境的求知者。我不断钻研新技术，着迷于不断发展的科学和人工智能世界。

---

如果你读到这里，说声“谢谢”向作者表示你的关心和感谢。说声谢谢

免费学习编程。freeCodeCamp的开源课程已经帮助超过4万人找到了开发人员的工作。 [开始学习][42]

[1]: /news/tag/regex/
[2]: /news/author/samyak/
[3]: #what-are-regex
[4]: #how-to-write-regular-expression-patterns
[5]: #how-to-use-regular-expressions-in-javascript
[6]: #advanced-searching-with-flags
[7]: #anchors-in-regex
[8]: #multiline-mode-of-anchors-and-
[9]: #word-boundaries-b-
[10]: #quantifiers-in-regex
[11]: #greedy-quantifiers-
[12]: #Non Greedy Quantifiers (Lazy Mode)
[13]: #sets-and-ranges-in-regex
[14]: #sets-
[15]: #ranges-
[16]: #negating-excluding-ranges-
[17]: #predefined-character-classes-
[18]: #special-characters-and-escaping-in-regex
[19]: #metacharacters-
[20]: #escape-special-characters-
[21]: #groupings-in-regex
[22]: #capturing-groups-
[23]: #non-capturing-groups-
[24]: #backreferences-
[25]: #regex-alternation-
[26]: #lookahead-and-lookbehind-in-regex
[27]: #lookahead-
[28]: #negative-lookaheads-
[29]: #lookbehind-
[30]: #negative-lookbehind-
[31]: #practical-examples-and-use-cases-of-regex
[32]: #password-strength-checking-
[33]: #email-validation-function-
[34]: #phone-number-formatting-function-
[35]: #tips-and-best-practices-for-using-regular-expressions
[36]: #conclusion
[37]: https://regex101.com/
[38]: https://regexr.com/
[39]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
[40]: https://www.freecodecamp.org/news/a-quick-and-simple-guide-to-javascript-regular-expressions-48b46a68df29/
[41]: /news/author/samyak/
[42]: https://www.freecodecamp.org/learn/
