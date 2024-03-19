---
title: Regular Expressions (RegEx) in JavaScript – A Handbook for Beginners
author: Samyak Jain
authorURL: https://www.freecodecamp.org/news/author/samyak/
originalURL: https://www.freecodecamp.org/news/regex-in-javascript/
translator: "Tsukistar"
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
    – JavaScript中的正则表达式模式 
    – [通过标志进行高级搜索][6] 
3.  [正则表达式中的锚点][7]  
    – [锚点的多行模式][8]  
    – [单词边界 (`\b`)][9]
4.  [正则表达式中的量词][10]  
    – [Greedy Quantifiers][11]  
    – [Non Greedy Quantifiers (Lazy Mode)][12]
5.  [Sets and Ranges in Regex][13]  
    – [Sets][14]  
    – [Ranges][15]  
    – [Negating / Excluding Ranges][16]  
    – [预定义的字符类][17]
6.  [Special Characters and Escaping in Regex][18]  
    – [Metacharacters][19]  
    – [Escaping Special Characters][20]
7.  [正则表达式中的分组][21]  
    – [捕获组][22]  
    – [Non-Capturing Groups][23]  
    – [Backreferences][24]  
    – [正则表达式选择符号][25]
8.  [正则表达式中的前瞻断言和后顾断言][26]  
    – [前瞻断言 (?=)][27]  
    – [否定前瞻断言 (?!)][28]  
    – [后顾断言 (?<=)][29]  
    – [否定后顾断言 (?<!)][30]
9.  [正则表达式的实际应用示例][31]  
    – [密码强度检查][32]  
    – [电子邮件地址校验][33]  
    – [电话号码格式化函数][34]
10.  [使用正则表达式的技巧和最佳实践方式][35]
11.  [总结][36]

<h2 id="what-are-regex">什么是正则表达式?</h2>

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

**`test()` 方法**：检查特定字符串是否与指定模式或正则表达式匹配。如果字符串中找到了该模式，则返回 `true`；否则返回 `false`。

```javascript
let pattern = /hello/;
let str = "hello world";

let result = pattern.test(str);
console.log(result); // 输出为：true
```

**`exec()` 方法**: 根据正则表达式模式的内容搜索字符串中的匹配项。它返回一个数组，其中包含匹配文本、匹配项在字符串中的索引以及输入字符串本身的详细信息。例如：

```javascript
let pattern = /world/;
let str = "hello world";

let result = pattern.exec(str);
console.log(result); // 输出为：["world", index: 6, input: "hello world"]
```

**`match()`方法**: 根据正则表达式模式的内容，在字符串中搜索它的出现次数。它返回匹配的第一个元素。如果具有全局标志（`g`），则返回一个包含所有找到的匹配项的数组，如果没有找到匹配项，则返回 `null`。

```javascript
let str = "The quick brown fox jumps over the lazy dog.";
let matches = str.match(/the/gi);

console.log(matches); // 输出为： ["The", "the"]
```

`/the/gi` 在字符串中搜索所有出现的单词 "the"，不区分大小写。

**`matchAll()`方法**: 返回一个用于匹配字符串中正则表达式的所有结果的迭代器。迭代器的每个元素都是一个数组，包含有关匹配的详细信息，包括捕获的分组。

```javascript
let str = "Hello world! This is a test string.";
let regex = /[a-zA-Z]+/g;

let matches = str.matchAll(regex);

for (let match of matches) {
    console.log(match);
}
```

当你需要获取字符串中所有匹配项的详细信息时，此方法非常有用。

**`search()`方法**: 在字符串中搜索指定的模式。它返回字符串中模式的第一个出现的索引，如果未找到模式，则返回 `-1`。
```javascript
let str = "The quick brown fox jumps over the lazy dog";
let pattern = /brown/;

let result = str.search(pattern);
console.log(result); // 输出为： 10
```

**`replace()`方法**: 用另一个子字符串或值替换字符串中指定模式的第一个出现。要替换所有出现，可以在正则表达式中使用全局标志 (`g`)。

```javascript
let str = "Hello, World!";
let newStr = str.replace(/o/g, "0");

console.log(newStr); // 输出为： "Hell0, W0rld!"
```

**`replaceAll()`方法**: 替换所有指定子字符串或模式的出现为一个替换字符串。它与 `replace()` 不同之处在于，默认情况下替换所有出现，无需使用全局标志 (`g`)。

```javascript
let str = "apple,banana,apple,grape";
let newStr = str.replaceAll("apple", "orange");
console.log(newStr); // 输出为： "orange,banana,orange,grape"
```

这种方法简化了在字符串中替换所有子字符串出现的过程。

**`split()`方法**: 虽然 `split()` 并不是专属于正则表达式的方法，但它可以接受一个正则表达式模式作为其参数，根据指定的模式或分隔符将字符串拆分为子字符串数组。例如：

```javascript
let str = "apple,banana,grape";
let arr = str.split(/,/);
console.log(arr); // 输出为：["apple", "banana", "grape"]
```

这些方法根据你的需求提供不同的功能。例如，如果你只需要知道字符串中是否找到了模式，则 `test()` 或 `search()` 方法是有效的。如果你需要更多关于匹配的信息，则 `exec()` 或 `match()` 方法是合适的。

<h2 id="advanced-searching-with-flags">通过标志进行高级搜索</h2>

在JavaScript中，正则表达式支持模式标志，这些是可选参数，修改了模式匹配的行为。

让我们深入了解两个常见的标志：忽略标志（`i`）和全局标志（`g`）。

### 忽略标志(`i`):

忽略标志（`i`）可以使正则表达式在搜索匹配项时忽略大小写敏感性。例如：

```javascript
let re = /hello/i;
let testString = "Hello, World!";
let result = re.test(testString);

console.log(result); // 输出为：true
```

在这种情况下，正则表达式 `/hello/i` 会匹配字符串 `"Hello"`（即使大小写不同），因为我们使用了忽略标志。

### 全局标志(`g`)：

全局标志（`g`）允许正则表达式在字符串中找到所有匹配项，而不是在找到第一个匹配项后停止。例如：

```javascript
let re = /hi/g;
let testString = "hi there, hi again!";
let result = testString.match(re);

console.log(result); // 输出为：["hi", "hi"]
```

在这个例子中，正则表达式 `/hi/g` 找到了字符串 `"hi there, hi again!"` 中的两个 `"hi"` 出现。

### 组合标志

你可以将标志进行组合以实现特定的匹配行为。例如，同时使用忽略标志（`i`）和全局标志（`g`）允许进行不区分大小写的匹配，直到找到模式的所有匹配项。

```javascript
let re = /hi/gi;
let testString = "Hi there, HI again!";
let result = testString.match(re);

console.log(result); // 输出为：["Hi", "HI"]
```

在这个例子中，正则表达式 `/hi/gi` 匹配字符串 `"Hi there, HI again!"` 中的 `"Hi"` 和 `"HI"`。

### `u`标志:

虽然不常用，但 `u` 标志可以正确处理 Unicode 字符，特别是代理项对。代理项对用于表示 UTF-16 编码中基本多文种平面（BMP）之外的字符。

**示例：** 让我们考虑一个包含表情符号字符的字符串，并尝试分别使用包含`u`标志和不包含`u`标志的正则表达式来匹配它们。
```javascript
// 不使用u标志
let result1 = 'Smile Please 😊'.match(/[😒😊🙄]/);
console.log(result1); // 输出为：["�"]

// 使用u标志
let result2 = 'Smile Please 😊'.match(/[😒😊🙄]/u);
console.log(result2); // 输出为：["😊"]
```

没有使用 `u` 标志时，正则表达式无法正确匹配表情符号，因为它们在 UTF-16 编码中表示为代理项对。但是，使用 `u` 标志时，它可以正确匹配表情符号 `'😊'`。

<h2 id="anchors-in-regex">正则表达式中的锚点</h2>

锚点是正则表达式中的特殊字符，它们不表示实际字符，而是用于检查字符在字符串中是否处于特定的位置。本文讲解两个主要的锚点：`^` 和 `$`。

**锚点 `^`**: 锚点 `^` 匹配文本的开头。一般情况下，它检查字符串是否以特定字符或模式开头。

```javascript
let str = 'Mountain';
console.log(/^S/.test(str)); // 输出为：false
```

**锚点 `$`**: 锚点 `$` 匹配文本的结尾。它检查字符串是否以特定字符或模式结尾。

```javascript
let str = 'Ocean';
console.log(/n$/.test(str)); // 输出为：true
```

你经常会一起使用 `^` 和 `$` 来检查字符串是否完全匹配某个模式。

```javascript
let isValid = /^\d\d:\d\d$/.test('10:01');
console.log(isValid); // 输出为：true
```

这个示例检查输入字符串是否匹配时间格式，例如 "10:01"。

在上面的代码中，`^\d\d:\d\d$` 确保字符串包含两个数字，后跟一个冒号，然后是两个数字。

<h3 id="multiline-mode-of-anchors-and-">锚点的多行模式（`^` 和 `$`）：</h3>

默认情况下，正则表达式中的 `^` 和 `$` 锚点以单行模式操作，意味着它们匹配整个字符串的开头和结尾。但在某些情况下，你可能希望匹配多行字符串中各行的开头和结尾，这就是多行模式的作用，可以通过 `m` 标志来指示。

由于单行模式是默认的，因此它只匹配字符串开头的第一个数字 "1"。

```javascript
let str = `1st line
2nd line
3rd line`;

let re = /^\d/g; // "^\d" matches the digit at the beginning of the string
let matches = str.match(re);

console.log(matches); // 输出为：["1"]
```

- **多行模式（m）**：`/^\d/gm` 是启用了 `m` 标志的正则表达式模式。通过利用 `m` 标志，您可以确保 `^` 和 `$` 匹配多行字符串中各行的开头和结尾，而不仅仅是整个字符串本身。

因此，它从第一行匹配到 "1"，从第二行匹配到 "2"，从第三行匹配到 "3"：

```javascript
let str = `1st line
2nd line
3rd line`;

let re = /^\d/gm;
let matches = str.match(re);

console.log(matches); // 输出为：["1", "2", "3"]
```

这在处理包含多行或换行符的文本时特别有用。

<h3 id="word-boundaries-b-">单词边界 (`\b`)： </h3>

`\b` 是正则表达式中的一个特殊字符，称为锚点，就像 `^` 和 `$` 一样。它用于匹配字符串中的位置，其中一个单词字符（如字母、数字或下划线）之前或之后不是另一个单词字符。例如：

- `\bword\b` 匹配字符串中的单词 "word"，但不匹配子串如 "wording" 或 "swordfish"。

```javascript
let pattern = /\bword\b/;
let pattern2 = /word/;
console.log(pattern.test("This is a word.")); // 输出为：true
console.log(pattern.test("This is wording.")); // 输出为：false (没有匹配"wording")
console.log(pattern2.test("This is wording")); // 输出为：True
```

`/word/` 在字符串中的任何位置匹配子串 "word"。它在 "This is wording." 中匹配 "word"，因为它不包括任何单词边界断言。

其他示例包括：

- `\b\d+\b` 匹配字符串中的整数，但不包括数字字符相邻的非数字字符。
- `^\bword\b$` 匹配字符串仅由单词 "word" 组成。

<h2 id="quantifiers-in-regex">正则表达式中的量词</h2>

在正则表达式中，量词允许你指定你想要在字符串中匹配的字符或字符类的数量。它们是定义你要查找的字符或组的实例数量的符号或字符。

### Exact Count `{n}`:

The simplest quantifier is `{n}`, which specifies an exact count of characters or character classes you want to match. Let's say we have a string "Year: 2022" and we want to extract the year from it:

```javascript
let str = 'Year: 2022';
let re = /\d{4}/; // Matches a four-digit number ; basically concise & better way to write \d\d\d\d

let result = str.match(re);

console.log(result); // 输出为：["2022"]
```

### The Range `{n,m}`:

The range quantifier `{n,m}` matches a character or character class from n to m times, inclusively. Example:

```javascript
let str = "The meeting is scheduled for 10:30 AM and ends at 2 PM";
let re = /\d{2,4}/g; // Matches numbers with 2 to 4 digits

let result = str.match(re);
console.log(result); // 输出为：[ '10', '30' ]
```

/\\d{2,4}/g matches numbers with 2 to 4 consecutive digits i.e '10', '30'

### `{n,}` and Shorthands:

The `{n,}` quantifier matches a character or character class at least n times. Additionally, there are shorthand notations for common quantifiers. Example:

```javascript
let str = 'The price of the item is $2500';
let re = /\d{2,}/g; // Matches numbers with 2 or more digits

let result = str.match(re);
console.log(result); // 输出为：["2500"]
```

### Shorthands: `+`, `?`, `*`:

The quantifiers `+`, `?`, and `*` are shorthand notations for common use cases. Let's use the shorthand `+` to match one or more digits in a phone number:

```javascript
let phone = "+1-(103)-777-0101";
let result = phone.match(/\d+/g); // Matches one or more digits

console.log(result); // 输出为：["1", "103", "777", "0101"]
```

/\\d+/g matches one or more consecutive digits in the phone number.

### Quantifiers: Zero or One (`?`):

The quantifier `?` in regular expressions means zero or one occurrence of the preceding character or group. It's equivalent to {0,1}. Example:

```javascript
let str = 'The sky is blue in color, but the ocean is blue in colour';
let result = str.match(/colou?r/g); // Matches "color" and "colour"

console.log(result); // 输出为：["color", "colour"]
```

In this example, the regular expression `/colou?r/g` matches both "color" and "colour" in the given string, allowing for zero or one occurrence of the letter "u".

### Quantifiers: Zero or More (`*`):

The quantifier `*` in regular expressions means zero or more occurrences of the preceding character or group. It's equivalent to {0,}. Example:

```javascript
let str = 'Computer science is fascinating, but computational engineering is equally interesting';
let re = /comput\w*/g; // Matches "computer" and "computational"

let results = str.match(re);

console.log(results); // 输出为：["computer", "computational"]
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

<h3 id="non-greedy-quantifiers">Non Greedy Quantifiers (Lazy Mode)</h3>:

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

**示例：** Suppose we have a string `'The quick brown fox jumps over the lazy dog.'`. To match all vowels in this string, we can use the regular expression `/[aeiou]/g`.

```javascript
let str = 'The quick brown fox jumps over the lazy dog.';
let re = /[aeiou]/g;
let results = str.match(re);

console.log(results); // 输出为：['e', 'u', 'i', 'o', 'o', 'u', 'o', 'e', 'e', 'a', 'o']
```

This matches all occurrences of vowels in the string.

```javascript
let str = 'The cat chased the rats in the backyard';;
let re = /[cr]at/g;
let results = str.match(re);

console.log(results); // 输出为：['cats', 'rats']
```

Here, the RegEx `[cr]at` matches words that start with either 'c', or 'r' and are followed by 'at'.

### Ranges:

Ranges allow you to specify a range of characters within a set. For example, `[a-z]` matches any lowercase letter from 'a' to 'z', and `[0-9]` matches any digit from '0' to '9'. Example:

```javascript
let str = 'Hello World!';
let re = /[a-z]/g;
let results = str.match(re);

console.log(results); // 输出为：['e', 'l', 'l', 'o', 'o', 'r', 'l', 'd']
```

Here, regex `[a-z]` matches all lowercase letters in the string.

### Negating / Excluding Ranges:

要从集合中排除某些字符，你可以在方括号内使用 `^` 符号。例如：

```javascript
let str = 'The price is $19.99';
let re = /[^0-9]/g;
let results = str.match(re);

console.log(results); // 输出为：['T', 'h', 'e', ' ', 'p', 'r', 'i', 'c', 'e', ' ', 'i', 's', ' ', '$', '.'] 
```

在这里，`[^0-9]` 匹配字符串中不是数字的任何字符。同样地，`[^a-z]` 将匹配任何不是小写字母的字符：

```javascript
let str = 'The price is $19.99';
let results2 = str.match(/[^a-z]/g);

console.log(results2); // 输出为：['T', ' ', ' ', ' ', '$', '1', '9', '.', '9', '9']
```

<h3 id="predefined-character-classes-">预定义的字符类：</h3>

某些字符类具有预定义的简写符号，用于常见字符范围的匹配。

**`\d`类**：`\d`匹配任何数字字符，等价于范围 `[0-9]`。例如：

```javascript
let phone = '+1-(103)-777-0101';
let re = /\d/g;
let numbers = phone.match(re);
let phoneNo = numbers.join('');
console.log(phoneNo); // 输出为：11037770101
```

我们使用 `match()` 和 `join()` 方法来格式化电话号码。这种方法简化了数据的处理和清理过程，使其适用于各种文本处理应用程序。

类似地，`\s` 匹配单个空白字符，包括空格、制表符和换行符，而 `\w` 匹配任何单词字符（字母数字字符或下划线），等价于范围 `[a-zA-Z0-9_]`。

结合这些类可以实现更灵活、更精确的模式匹配，从而实现各种文本处理任务。示例：

```javascript
let str = 'O2 is oxygen';
let re = /\w\d/g;
console.log(str.match(re)); // 输出为：["O2"]
```

这些预定义的字符类为常用的字符范围提供了便捷途径。

**反向类**，用大写字母表示（例如，`\D`），匹配任何不包含在相应小写类中的字符。这提供了一种方便的方式来匹配特定集合之外的字符，例如非数字字符、非空白字符或非单词字符。示例：

```javascript
let phone = '+1-(103)-777-0101';
let re = /\D/g;
console.log(phone.replace(re,'')); // 输出为：11037770101
```

<h2 id="special-characters-and-escaping-in-regex">正则表达式中的特殊字符与转义</h2>

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

<h3 id="escape-special-characters-">转义特殊字符:</h3>

在正则表达式模式中，当您想要搜索或匹配这些字符时，转义特殊字符是至关重要的，而不会触发它们的特殊正则表达式含义。

要在正则表达式模式中字面匹配一个特殊字符，您需要通过在其前面加上反斜杠（\）来转义它。这告诉正则表达式引擎将特殊字符视为普通字符。例如：

```javascript
let str = 'This ^ symbol is called Caret ';
let re = /[\^]/g;
let results = str.match(re);

console.log(results); // 输出为：['^']
```

如果没有`\`，`^` 将被解释为字面插入符号。

有趣的事实是，我们用来转义元字符的 `/` 本身也是一个元字符，可以用另一个反斜杠来转义成 `//`。

<h2 id="groupings-in-regex">正则表达式中的分组</h2>

<h3 id="capturing-groups-">捕获组:</h3>

在JavaScript正则表达式中，捕获组用于提取匹配字符串的特定部分。试想你有一个类似于"resource/id"的路径，例如 "posts/123"。为了匹配这个路径，你可以使用正则表达式 `/\w+\/\d+/`。

- `\w+` 匹配一个或多个单词字符。
- `\/` 匹配斜杠 `/`。
- `\d+` 匹配一个或多个数字。

假设你有一个路径像 "posts/123"，你想捕获 `id` 部分（123）。我们可以使用捕获组来实现这一点。

要创建一个捕获组，你将想要捕获的正则表达式模式的部分放在括号中。例如，`(\d+)` 捕获一个或多个数字。

这是它的运行步骤：

```javascript
const path = 'posts/123';
const pattern = /\w+\/(\d+)/;

const match = path.match(pattern);
console.log(match);
```

输出为：

```bash
[ 'posts/123', '123', index: 0, input: 'posts/123', groups: undefined ]
```

在这里，`'123'` 被捕获组 `(\d+)` 捕获。

**Using Multiple Capturing Groups**: You can have multiple capturing groups in a regex pattern. For example, to capture both the resource (like "posts") and the id (like "123") from the path "posts/123", you can use `/(\w+)\/(\d+)/`.

```javascript
const path = 'posts/123';
const pattern = /(\w+)\/(\d+)/;

const match = path.match(pattern);
console.log(match);
```

输出为：

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

输出为：

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

该例子对应的正则表达式的模式为：

```javascript
const path = 'posts/2024/02/22';
const pattern =
  /(?<resource>\w+)\/(?<year>\d{4})\/(?<month>\d{2})\/(?<day>\d{2})/;

const match = path.match(pattern);
console.log(match.groups);
```

输出为：

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

### 后向引用:

后向引用允许你在正则表达式中引用先前捕获的组，将它们视为存储匹配模式的变量。

在JavaScript中，后向引用的语法是 `\N`，其中 `N` 是表示捕获组编号的整数。

例如，考虑一个包含重复单词 "Lion" 的字符串，我们希望删除重复的单词以得到 `'Lion is the King'`：

```javascript
const s = 'Lion Lion is the King';
```

- 首先，我们使用 `\w+\s+` 匹配一个单词。
- 然后，我们创建一个捕获组来捕获这个单词，使用 `(\w+)\s+`。
- 接下来，我们使用反向引用 (`\1`) 来引用第一个捕获组。
- 最后，我们使用 `String.replace()` 将整个匹配替换为第一个捕获组。

```javascript
const pattern = /(\w+)\s+\1/;
const result = s.replace(pattern, '$1');
console.log(result); // 输出为：'Lion is the King'
```

<h3 id="regex-alternation">正则表达式选择符号:</h3>

正则表达式的选择符号是一种允许你在单个正则表达式中匹配不同的模式的功能。它的工作方式类似于逻辑运算符`OR`。正则表达式使用竖线符号 `|` 表示选择符号，你可以使用它来匹配 A 或 B。

```
A | B // 这意味着你可以匹配模式A或模式B
```

现在，让我们探讨一些正则表达式选择符号的实际应用：

**匹配格式为hh:mm的时间字符串**：假设我们想要匹配格式为 hh:mm 的时间字符串，其中 hh 表示小时，mm 表示分钟。一个基本的正则表达式来匹配这种格式就是 `/\d{2}:\d{2}/`。

然而，这个基本模式匹配了无效的时间，比如 "99:99"。为了确保我们匹配有效的时间（小时范围从00到23，分钟范围从00到59），我们需要使用选择符号来完善我们的正则表达式。

为了匹配有效的小时（00到23），我们可以使用以下模式：

- `[01]\d` 匹配00到19的数字。
- `2[0-3]` 匹配20到23的数字。

因此，小时的模式变为 `[01]\d|2[0-3]`。

我们可以使用模式 `[0-5]\d` 来匹配有效的分钟数(00 to 59)。

现在，我们可以使用选择符号将小时和分钟模式结合起来，得到最终的正则表达式模式：

`/([01]\d|2[0-3]):[0-5]\d/g`

在这个模式中:

-   `([01]\d|2[0-3])` 匹配有效的小时数。
-   `:` 匹配冒号。
-   `[0-5]\d` 匹配有效的分钟数。

该正则表达式模式确保我们只匹配 `hh:mm` 格式的有效时间字符串。例如：

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

<h2 id="lookahead-and-lookbehind-in-regex">正则表达式中的前瞻断言和后顾断言</h2>

<h3 id="lookahead-">前瞻断言：</h3>

正则表达式中的前瞻允许仅当某个模式（X）后面紧跟着另一个特定模式（Y）时进行匹配。语法是 `X(?=Y)`，其中：

- **X** 是你要匹配的模式。
- **(?=Y)** 是前瞻断言，指示 `X` 应该紧跟着 `Y`。

**例如：**: 假设我们有一个描述各种距离的字符串，我们想要识别字符串中包含的单位为 "miles" 而不是 "kilometers" 的数字。我们可以在正则表达式模式中使用前瞻断言：

```javascript
const dist = "He ran 5 miles, but not 10 kilometers.";

const regex = /\d+(?=\s*miles)/g;

console.log(dist.match(regex)); // 输出为：["5"]
```

**多重前瞻断言**: 在正则表达式中可以使用语法 `X(?=Y)(?=Z)` 来使用多个前瞻断言，这能够让我们对匹配施加多个条件。

**例如:** 假设我们想要匹配同时包含 "foo" 和 "bar" 的字符串，但它们可以以任意的顺序排列：

```javascript
const regex = /(?=.*foo)(?=.*bar)/;

console.log(regex.test("foobar")); // true
console.log(regex.test("barfoo")); // true
console.log(regex.test("foo"));    // false
console.log(regex.test("bar"));    // false
```

<h3 id="negative-lookaheads-">否定前瞻断言：</h3>

为了否定一个前瞻断言，可以使用否定前瞻断言，其语法为 `(?!Y)`。在这种情况下，正则表达式引擎只有在 X 后面不跟着 Y 的情况下才会匹配 X。

**例如**： 假设我们想要匹配数字，但不希望它们后面跟着 "miles"：

```javascript
const text = "He ran 5 miles, but not 10 kilometers.";

const regex = /\d+(?!\s*miles)/g;

console.log(text.match(regex)); // 输出为：["10"]
```

`(?!\s*miles)` 是一个否定前瞻断言，它确保数字后面不是零个或多个空格加上单词 "miles"。

<h3 id="lookbehind-">后顾断言：</h3>

后顾断言提供了一种根据其前面的内容来匹配模式的方式，如果某个特定元素在其前面，则匹配该元素。

**例如**：假设我们有一个包含价格的字符串，并且我们想要匹配在货币符号 "$" 前面的数字，但不匹配在 "€" 前面的数字。我们可以在正则表达式模式中使用后顾断言。

```javascript
const priceString = "The price is $100, but €200.";

const regex = /(?<=\$)\d+/g;

console.log(priceString.match(regex)); // 输出为：["100"]
```

**说明**：如果在当前位置之前有一个文字字符串 "$"，`(?<=\$)` 就会匹配该元素。反斜杠 `\` 用于转义特殊字符 "$"，将其视为字面字符。

<h3 id="negative-lookbehind-">否定后顾断言：</h3

否定后顾断言允许你仅在模式之前不是特定模式的情况下匹配该模式。这对于根据前面的内容排除某些模式的匹配非常有用。

示例：假设我们有一个包含不同货币的各种价格的字符串，并且我们想要匹配不是以货币符号 "$" 开头的数字。我们可以在正则表达式模式中使用否定后顾断言：

```javascript
const priceString = "The price is $50, but not €100.";

const regex = /(?<!\$)\b\d+\b/g;

console.log(priceString.match(regex)); // 输出为： ["100"]
```

**说明**： `(?<!\$)` 是否定后顾断言语法，它只在当前位置之前不是字面字符串"$"时匹配后面的模式。

<h2 id="practical-examples-and-use-cases-of-regexpractical-examples-and-use-cases-of-regex">正则表达式的实际应用示例</h2>

现在，让我们探索一些在JavaScript应用程序中使用正则表达式来解决常见问题和执行文本操作任务的实际示例。

<h3 id="password-strength-checking-">密码强度检验函数:</h3>

你可以使用正则表达式来强制执行密码强度要求，例如最小长度和特殊字符的存在。

```javascript
function checkPasswordStrength(password) {
    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return pattern.test(password);
}

console.log(checkPasswordStrength("Passw0rd!"));    // 输出为：true
console.log(checkPasswordStrength("weakpassword")); // 输出为：false
```

这里的正则表达式确保密码包含至少1个数字、1个小写字母、1个大写字母、1个特殊字符，并且密码长度至少为8个字符。

这个模式进行了如下操作:

-   `(?=.*\d)`: 要求至少一个数字。
-   `(?=.*[a-z])`: 要求至少一个小写字母。
-   `(?=.*[A-Z])`: 要求至少一个大写字母。
-   `(?=.*[!@#$%^&*])`: 要求至少一个特殊符号。
-   `.{8,}`: 要求密码长度至少为8个字符。

<h3 id="email-validation-function-">电子邮箱地址校验函数:</h3>

电子邮件验证对于确保网络应用程序中的数据完整性和安全性至关重要。通过使用正则表达式，我们可以轻松实现强大的电子邮件验证机制。

```javascript
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

console.log(validateEmail("example@email.com")); // true
console.log(validateEmail("invalid-email"));      // false
```

这个模式进行了如下操作:

-   `^`: 断言字符串的起始位置。
-   `[^\s@]+`: 匹配一个或多个非空白字符或'@'字符。
-   `@`: 匹配'@'符号。
-   `[^\s@]+`: 匹配一个或多个非空白字符或'@'字符。
-   `\.`: 匹配'.'符号 (因为'.'在正则表达式中具有特殊意义，所以需要转义。)。
-   `[^\s@]+`: 匹配一个或多个非空白字符或'@'字符。
-   `$`: 断言字符串的结束位置。

<h3 id="phone-number-formatting-function-">电话号码格式化函数:</h3>

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

<h2 id="tips-and-best-practices-for-using-regular-expressions">使用正则表达式的技巧和最佳实践方式</h2>

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

<h2 id="conclusion">总结</h2>

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
[12]: #non-greedy-quantifiers
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
[25]: #regex-alternation
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
