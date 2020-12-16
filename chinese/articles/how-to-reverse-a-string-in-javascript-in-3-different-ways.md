> -   原文地址：[Three Ways to Reverse a String in JavaScript JavaScript 字符串反转的三种方式](https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/)
> -   原文作者：Sonya Moisset
> -   译者：@nsuedu
> -   校对者：

![JavaScript 字符串反转的三种方式](https://cdn-media-1.freecodecamp.org/images/1*aFrHLdCeSRv4z-hsfCA6hw.jpeg)

**反转字符串** 是技术面试中最常问到的 JavaScript 问题之一。 面试官可能会要求你使用不同的编码方式来反转字符串，或者他们可能会要求你不使用内置方法来反转字符串，甚至会要求你使用递归来反转字符串。

可能有数十种不同的方法可以执行此操作，但内置**reverse**方法除外，因为 JavaScript 的 String 对象上没有此方法

以下是我解决 JavaScript 反转字符串问题的三种最有趣的方法。

#### 算法要求

> 反转提供的字符串.  
> _你可能需要将字符串转换为数组，然后才能将其反转._  
> _你的结果必须是字符串._

```js
function reverseString(str) {
    return str;
}
reverseString('hello');
```

#### 提供测试用例

-   **_reverseString(“hello”)_** 应该返回 “olleh”
-   **_reverseString(“Howdy”)_** 应该返回 “ydwoH”
-   **_reverseString(“Greetings from Earth”)_** 应该返回 ”htraE morf sgniteerG”

### 1\. 使用内置方法反转字符串

对于此解决方案，我们将使用三种方法：String.prototype.split() 方法，Array.prototype.reverse() 方法和 Array.prototype.join() 方法。

-   split() 方法使用指定的分隔符字符串将一个 String 对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置
-   reverse() 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组
-   join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符

```js
function reverseString(str) {
    // Step 1. 使用 split()方法返回一个新数组
    var splitString = str.split(''); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2.使用 reverse()方法 翻转数组
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3.使用 join()方法 组合所有的数组元素，从而变成一个新字符串
    var joinArray = reverseArray.join(''); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. 返回翻转后的字符串
    return joinArray; // "olleh"
}

reverseString('hello');
```

#### 三个方法组合形成链式调用:

```js
function reverseString(str) {
    return str.split('').reverse().join('');
}
reverseString('hello');
```

### 2\. 用递减的 for 循环反转字符串

```js
function reverseString(str) {
    // Step 1. 创建一个空字符串，用来存储后面新创建的字符串
    var newString = '';

    // Step 2.创建for循环
    /* 循环的起点是（str.length-1），它对应于
        字符串的最后一个字符“o”
        只要i大于或等于0，循环就会继续
        每次迭代后递减i */
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i]; // or newString = newString + str[i];
    }
    /* "hello"的length等于 5
        每次循环的公式: i = str.length - 1 and newString = newString + str[i]
        第一次循环:   i = 5 - 1 = 4,         newString = "" + "o" = "o"
        第二次循环:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        第三次循环:   i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        第四次循环:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        第五次循环:   i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    结束for循环*/

    // Step 3. 返回已翻转的字符串
    return newString; // "olleh"
}

reverseString('hello');
```

#### 删除注释:

```js
function reverseString(str) {
    var newString = '';
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');
```

### 3\. 用递归反转字符串

对于此解决方案，我们将使用两种方法：String.prototype.substr() 方法和 String.prototype.charAt() 方法

-   substr() 方法返回一个字符串中从指定位置开始到指定字符数的字符.

译者注:

> 尽管 String.prototype.substr(……) 没有严格被废弃 (as in "removed from the Web standards"), 但它被认作是遗留的函数并且可以的话应该避免使用。它并非 JavaScript 核心语言的一部分，未来将可能会被移除掉。如果可以的话，使用 substring() 替代它.

```js
'hello'.substr(1); // "ello"
```

-   charAt() 方法从一个字符串中返回指定的字符.

```js
'hello'.charAt(0); // "h"
```

递归的深度等于 String 的长度。 当 String 很长且堆栈大小是主要问题的时候，代码运行非常慢。所以此方案不是最佳解决方案

```js
function reverseString(str) {
  if (str === "") // 如果传入空字符串，则直接返回它
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
/*
递归方法的第一部分
你需要记住不会只有一次回调，会存在多次嵌套回调
每次回调的公式: str === "?" reverseString(str.subst(1)) + str.charAt(0)
第一次调用 – reverseString("Hello")  将会返回  reverseString("ello") + "h"
第二次调用 – reverseString("ello")   将会返回  reverseString("llo")  + "e"
第三次调用 – reverseString("llo")    将会返回  reverseString("lo")   + "l"
第四次调用 – reverseString("lo")     将会返回  reverseString("o")    + "l"
第五次调用 – reverseString("o")      将会返回  reverseString("")     + "o"

递归方法的第二部分
该方法达一旦到if条件，嵌套最深的调用会立即返回

```

#### 删除注释:

```js
function reverseString(str) {
    if (str === '') return '';
    else return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString('hello');
```

#### 使用三元表达式:

```js
function reverseString(str) {
    return str === '' ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString('hello');
```

**JavaScript 字符串反转** 是一种小型且简单的算法，在电话技术筛查或技术面试中都可能被问到。 你可以采用最简单的方式解决此问题，也可以采用递归或更复杂的解决方案来解决。

希望本篇文章对你有所帮助。 这是我的“如何解决 FCC 算法”系列文章的一部分，下面几篇文章是其他算法的了一些解决方案。

[**在 JavaScript 中实现重复字符串的三种方法**  
_在本文中，我将说明如何解决 freeCodeCamp 的“重复字符串”挑战._][2]

[**在 JavaScript 中判断字符串是否结束的两种方法**  
_在本文中，我将说明如何解决 freeCodeCamp 的“确定结束”挑战._][3]

[**在 JavaScript 中实现数字阶乘的三种方法**  
_在本文中，我将说明如何解决 freeCodeCamp 的“数字阶乘”挑战”_][4]

[**在 JavaScript 中判断回文字符串的两种方法**  
_在本文中，我将说明如何解决 freeCodeCamp 的“检查回文字符串”挑战”._][5]

[**在 JavaScript 中查找字符串中最长单词的三种方法**  
_在本文中，我将说明如何解决 freeCodeCamp 的“检查字符串中的最长单词”挑战”._][6]

[**用 JavaScript 对句子加标题的三种方法**  
_在本文中，我将说明如何解决 freeCodeCamp 的“字符串中每个单词首字母转为大写”挑战”._][7]

如果你有自己的解决方案或任何建议，欢迎在评论中留言.

或者，您也可以在 Medium[8]，Twitter[9]，Github[10]和 LinkedIn[11]上关注我；-)

＃保持好奇，＃持续前进和＃实现目标！

### 资源

-   [split() 方法 — MDN][12]
-   [reverse() 方法 — MDN][13]
-   [join() 方法 — MDN][14]
-   [String.length — MDN][15]
-   [substr() 方法 — MDN][16]
-   [charAt() 方法 — MDN][17]

[2]: https://www.freecodecamp.org/news/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d/
[3]: https://www.freecodecamp.org/news/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac/
[4]: https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/
[5]: https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/
[6]: https://www.freecodecamp.org/news/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c/
[7]: https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/
[8]: https://medium.com/@sonya.moisset
[9]: https://twitter.com/SonyaMoisset
[10]: https://github.com/SonyaMoisset
[11]: https://www.linkedin.com/in/sonyamoisset
[12]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
[13]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
[14]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
[15]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
[16]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
[17]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
