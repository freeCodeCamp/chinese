> -  原文地址：[Regular Expression Metacharacters - What Does \d Mean in RegEx?](https://www.freecodecamp.org/news/what-does-d-mean-in-regex/)
> -  原文作者：[Kolade Chris](https://www.freecodecamp.org/news/author/kolade/)
> -  译者：songyp0505
> -  校对者：

<figure class="kg-card kg-card-image kg-card-hascaption"><img src="https://www.freecodecamp.org/news/content/images/size/w2000/2023/03/start-graph--2-.png" alt="正则表达式元字符 - \d 在正则表达式中代表什么意思？）" class="kg-image"><figcaption></figcaption></figure>

正则表达式，也称为 RegEx 或 RegExp，是用于匹配字符串或特定部分的定义模式，该字符串包括所有字符，无论是字母、符号还是数字都行。

在这篇文章中，我们将会讲解正则符号`\d` ，这个符号可以匹配数字。

## 我们将讨论什么内容

-   [正则表达式中的 `\d` 是什么？](#whatisdinregex)
-   [如何使用 `\d` 元字符](#howtousethedmetacharacter)
-   [数字字符集 `[0-9]` 和元字符 `\d` 之间的区别是什么？](#whatisthedifferencebetweenthedigitcharacterset09anddmetacharacter)
-   [结论](#conclusion)

<h2 id="whatisdinregex">正则表达式中的 `\d` 是什么？</h2>

`\d` 在正则表达式中不只是一个“字符”，它是用于匹配字符串的“元字符”之一。

按照定义，元字符是在定义匹配字符串模式时具有特殊含义的字符。

所以，**`\d` 是一个可以匹配 0 到 9 中的任何数字的元字符**。你可以使用它来匹配数字或数字集，例如电话号码、编号等。

除了`\d`，正则表达式中还有很多元字符，比如下面的：

-   `\w` 匹配所有单词字符（小写字母a到z、大写字母A到Z、数字0到9和下划线_）
-   `\D` 匹配所有非数字字符。它是 `\d` 的补集
-   `\W` 匹配所有非单词字符
-   `\s` 匹配所有空格字符，包括空格、制表符和回车符等。

<h2 id="howtousethedmetacharacter">如何使用 `\d` 元字符</h2>

下面我们一起看看怎样用`\d`元字符匹配数字。

第一个例子是匹配`7253289593`这个数字ID。

这是一个十位数，要想匹配它，你可以重复写十次`\d`元字符：

<figure class="kg-card kg-card-image kg-card-hascaption"><img src="https://www.freecodecamp.org/news/content/images/2023/03/Screenshot-2023-03-02-at-12.10.33.png" alt="Screenshot-2023-03-02-at-12.10.33" class="kg-image"><figcaption></figcaption></figure>

或者也可以写一次`\d`，然后让它自己重复十次：

<figure class="kg-card kg-card-image kg-card-hascaption"><img src="https://www.freecodecamp.org/news/content/images/2023/03/Screenshot-2023-03-02-at-12.11.39.png" alt="Screenshot-2023-03-02-at-12.11.39" class="kg-image"><figcaption></figcaption></figure>

你也可以匹配手机号，以美国手机号为例：

<figure class="kg-card kg-card-image kg-card-hascaption"><img src="https://www.freecodecamp.org/news/content/images/2023/03/Screenshot-2023-03-02-at-12.16.25.png" alt="Screenshot-2023-03-02-at-12.16.25" class="kg-image"><figcaption></figcaption></figure>

或者这样匹配尼日利亚手机号码：

<figure class="kg-card kg-card-image kg-card-hascaption"><img src="https://www.freecodecamp.org/news/content/images/2023/03/Screenshot-2023-03-02-at-12.17.33.png" alt="Screenshot-2023-03-02-at-12.17.33" class="kg-image"><figcaption></figcaption></figure>

`\d`元字符同样可以在Javascript中使用：

```js
// 测试一个数字ID
let id = '7253289593';
let regex1 = /\d{10}/g;

console.log(regex1.test(id)); // true

// 测试美国手机号码
let UsPhoneNum = '(123) 456-7890';
let regex2 = /\(\d{3}\)\s\d{3}-\d{4}/g;

console.log(regex2.test(UsPhoneNum)); // true

// 测试尼日利亚手机号码
let naijaPhoneNum = '08133333333';
let regex3 = /\d{11}/g;

console.log(regex3.test(naijaPhoneNum)); // true
```

<h2 id="whatisthedifferencebetweenthedigitcharacterset09anddmetacharacter">数字字符集 `[0-9]` 和元字符 `\d` 之间的区别是什么？</h2>

 `[0-9]` 字符集和 `\d` 元字符之间没有什么很大的区别

一个可能存在的区别，就是某些正则表达式的语法不支持 `\d` 元字符，但支持 `[0-9]` 字符集。例如，grep 的正则表达式不支持 `\d` 元字符。

所以如果你在正则表达式中使用 `[0-9]` 代替 `\d`，你仍然能够进行字符的匹配。

例如，我们可以使用 `[0-9]` 而不是 `\d` 来匹配前面例子中的数字ID：

<figure class="kg-card kg-card-image kg-card-hascaption"><img src="https://www.freecodecamp.org/news/content/images/2023/03/Screenshot-2023-03-02-at-12.28.17.png" alt="Screenshot-2023-03-02-at-12.28.17" class="kg-image"><figcaption></figcaption></figure>

可以看到这样依然可以匹配成功，因此，`[0-9]` 字符集和 `\d` 元字符之间没有任何差别。

<h2 id="conclusion">结论</h2>

这篇文章介绍了 `\d` 正则表达式元字符是什么，以及如何使用它。我们还看了一些例子，并将`\d` 与数字字符集 `[0-9]` 进行了比较，以便了解它们的工作原理和区别。

感谢阅读。
