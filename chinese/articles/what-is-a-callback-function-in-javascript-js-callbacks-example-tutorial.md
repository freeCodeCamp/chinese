> -  原文地址：[What is a Callback Function in JavaScript? JS Callbacks Example Tutorial](https://www.freecodecamp.org/news/what-is-a-callback-function-in-javascript-js-callbacks-example-tutorial/)
> -  原文作者：[Ilenia Magoni](https://www.freecodecamp.org/news/author/ilenia/)
> -  译者：Papaya HUANG
> -  校对者：

![What is a Callback Function in JavaScript? JS Callbacks Example Tutorial](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/pexels-pixabay-39656.jpg)

JavaScript 高阶函数可以接受另一个函数作为参数。这些使用其他函数作为参数的函数被称为回调函数。

## 什么是 JavaScript 中的回调函数?

回调是将另一个函数作为参数传递的函数。

这意味着父函数可以是任意类型的函数，但是回调函数仅在父函数限定的场景中使用（或者是几个有限的情况）。

## 如何在 JavaScript 中创建回调函数?

你可以像创建其他函数那样在 JavaScript 中创建回调函数:

```javascript
function callbackFunction () {
    
}
```

回调函数与众不同的地方在于它是如何被使用的。

回调函数特指使用函数作为参数的函数。

```javascript
function anyFunction(fun) {
    // ...
    fun(a, b, c);
    //...
}

anyFunction(callbackFunction);
```

所以，想要创建`callbackFunction`，你需要知道父函数如何使用回调函数，传入了什么参数，参数的顺序是什么样的。

### 回调函数示例

现在让我们一起来编写回调函数，你会在编程生涯中频繁碰到它，让我们开始吧！

JavaScript 已经内置了一个高阶函数——`every`方法。

`every`方法是一个数组方法，该方法使用回调函数来检查数组中的每一个元素是不是都通过指定的测试。

查阅[`every`方法的文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)，你会发现回调函数传入了三个参数：数组的一个元素、这个元素的索引以及整个数组。

所以这个回调函数的语法如下：

```javascript
function callbackFunction(element, index, array) {
    // 运行某些代码
}
```

回调函数可以很简单，也可以非常复杂。我们需要一些上下文来创建一个示例。

### 如何在 JavaScript 中编写回调函数

假设我们要处理一个元素为字符串的数组。你需要检查这个数组是否有且仅有一个字符串，这个字符串的长度为三个字母；全部是大写字母，并且三个字母各不相同。

这个情况有些复杂，不过你在实际的编程中可能会遇到和这一样复杂的情况，所以现在的练习很有必要。

当你需要创建一个处理多项任务的函数的时候，你可以一次处理一个条件。

第一个条件是：这个元素必须是一个字符串，如下：

```javascript
function callbackFunction(element, index, array) {
    
    // 检查元素是不是字符串
	const isNotString = typeof element !== "string";
    // 如果不是，直接返回
    if (isNotString) {return;}
    
}
```

接下来，字符串必须是全大写，只包含英文字母，长度为三个字母。

你可以分别测试这三个条件，也可以使用正则表达式来一次行检查三个条件。

这个正则表达式是这样： `/^[A-Z]{3}$/`。

让我们一起来看看这个正则表达式包含了哪些信息：

-   开头是`^`符号，结尾是`$`锚点符号。表示字符串必须以这样的方式开头和结尾。如果你同时使用这两个符号，表示字符串必须满足这一种表达模式。
-   `[A-Z]`是一个字符类。表示包含从`A`到`Z`的所有字母，所以全部是大写字母。
-   `{3}`是一个计数器。表示前述条件必须满足三次。

上述的正则表达式和`/^[A-Z][A-Z][A-Z]$/`等价。

在第二个表达式中，我们没有使用`{3}`，而是将`[A-Z]`写了三次。

我们把这个部分添加到代码中：

```javascript
function callbackFunction(element, index, array) {
    
    // 检查元素是不是字符串
    const isNotString = typeof element !== "string";
    // 如果不是直接返回
    if (isNotString) {
        return;
    }
    
    // 检查字符串是不是三个字母，只有大写字母
    const isItThreeUpperCaseLetters = /^[A-Z]{3}$/.test(element);
    // 否则返回
    if (!isItThreeUpperCaseLetters) {
        return;
    }
    
}
```

如果你不喜欢使用正则表达式，你可以阅读[这个的章节](#and-if-we-didn-t-use-a-regular-expression)，了解如何在不使用正则表达式的情况下检查条件。

然后，我们需要检查三个字母是不是互不相同。

你可以这样表达：`element[0] !== element[1] && element[0] !== element[2] && element[1] !== element[2]`.

你也可以使用循环——实际上是一个双循环：

```javascript
// 在外部循环中，我们使用j，表达第一个需要比较的索引
for (let j = 0; j++; j < element.length) {
    // 在内部循环中，我们使用k，表达第二个需要比较的索引
    for (let k = j+1; k++; k < element.length) {
        // 比较索引j和索引k的元素
        if (element[j] === element[k]) {
            // 如果相同，则通过返回退出函数
            return;
        }
    }
}
```

这个循环可以应用于任何长度的字符串，所以遇到其他长度，你不需要重新编写新的函数。

循环是不是和对比的写法等效呢？让我们一步一步拆解：

第一次迭代的时候，`j=0`、`k=1`。所以，第一次对比的是`element[0] === element[1]`。然后 `k`增大，即`j=0`、`k=2`，也就是`element[0] === element[2]`。

此时，内部循环停止，然后外部循环(`j`循环)进入下一次迭代。 此时，`j=1`, 然后内部循环从`k=j+1`即`k=2`开始 – 此时的比较是`element[1] === element[2]`。

内部循环结束，此时外部循环从`j=1`变到`j=2`，内部循环从`k = j+1 = 3`开始，但是这不符合 `k < element.length`条件。

```javascript
function callbackFunction(element, index, array) {
    
    
    // 检查元素是不是字符串
    const isNotString = typeof element !== "string";
    // 如果不是，退出函数
    if (isNotString) {
        return;
    }
    
    
    // 检查字符串是不是三个字母，只有大写字母
    const isItThreeUpperCaseLetters = /^[A-Z]{3}$/.test(element);
    // 否则返回
    if (!isItThreeUpperCaseLetters) {
        return;
    }
    
    
    // 检查是否所有字母各不相同
    const allDifferentCharacters = element[0] !== element[1] && element[0] !== element[2] && element[1] !== element[2];
    // 如果不是，通过返回退出函数
    if (!allDifferentCharacters) {
        return;
    }
    
    
    
}
```

最后我们需要检查字符串是否在数组中是唯一的。

我们可以使用`indexOf`来检查当前元素是否是数组第一次出现的`element`（元素）。

执行时我们需要使用到数组，数组就在手边 —— 数组是回调中的一个参数，即`array`参数。

如果这是该元素出现的第一次，则`indexOf`和元素的`index`相等。

如果`array.indexOf(element) === index`的值`true`，则代表`element`在索引`index`上第一次出现，如果值为`false`，则意味着有一个完全一样的元素在之前出现过。

让我们把这个检查添加到函数中。如果字符串通过了所有测试，就会在结尾返回`true`。

```javascript
function callbackFunction(element, index, array) {
    
    
    // 检查元素是不是字符串
    const isNotString = typeof element !== "string";
    // 如果不是，退出函数
    if (isNotString) {
        return;
    }
    
    
    // 检查字符串是不是三个字母，只有大写字母
    const isItThreeUpperCaseLetters = /^[A-Z]{3}$/.test(element);
    // 否则返回
    if (!isItThreeUpperCaseLetters) {
        return;
    }
    
    
    // 检查是否所有字母各不相同
    const allDifferentCharacters = element[0] !== element[1] && element[0] !== element[2] && element[1] !== element[2];
    // 如果不是，通过返回退出函数
    if (!allDifferentCharacters) {
        return;
    }
    
    
    // 检查是不是第一次出现在数组中
    const isItFirstAppearence = array.indexOf(element) === index;
    // 如果不是，通过返回退出函数
    if (!isItFirstAppearence) {
        return;
    }
    
    
    return true;
}
```

<h4 id="and-if-we-didn-t-use-a-regular-expression">如果我们不使用正则表达式呢？</h4>

在上面的例子中，我们使用正则表达式来检查了三个条件：`/^[A-Z]{3}$/`。

如果不使用正则表达式，我们可以使用`length`属性，来检查字符串是不是特定长度。在这个例子中，`element.length === 3`是来检查字符串长度是不是三个字母。

另外，字符串必须全部为大写字母，并且都英文字母。

我们使用`charCodeAt`来实现。这个方法返回字母的 ASCII 编码，大写字母的 ASCII 编码是 65 到 90，可以通过这个方法来检查是否仅为大写英文字母。

有三个元素需要被检查： `element.charCodeAt(0)`、 `element.charCodeAt(1)`和 `element.charCodeAt(2)`，它们的值必须在 65 到 90 之间。虽然只有三个字母，但是我们可以使用循环。

如下代码：

```javascript
for (let i = 0; i++; i < element.length) {
    // 找到字母的ASCII编码
    const code = element.charCodeAt(i);
    // 检查是否在范围外
    if (code < 65 || code > 90) {
        // 如果是的，则返回退出循环
        return;
    }
}
```

将这个添加到代码中：

```javascript
function callbackFunction(element, index, array) {
    
    // 检查是否为字符串
    const isNotString = typeof element !== "string";
    // 如果不是，退出函数
    if (isNotString) {return;}
    
    // 检查元素字符串的长度
    const hasLengthThree = element.length === 3;
    // 如果长度不等，退出
    if (!hasLengthThree) {return;}
    
    // 循环字母
	for (let i = 0; i++; i < element.length) {
        // 找到字母对应的ASCII编码
        const code = element.charCodeAt(i);
        // 检查是否在范围外
        if (code < 65 || code > 90) {
            // 如果是，通过返回退出循环
            return;
        }
    } 
}
```

如果你是通过链接来到这个部分，你可以返回到上面的部分，继续阅读代码其他部分的实现。如果不是，请继续阅读本文。

### 如何使用回调函数示例

我们编写了一个回调函数，但是如何使用这个回调函数呢？

```javascript
anArray.every(callbackFunction);
```

我们可以在回调中使用`every`方法– 或者使用[`filter`方法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)。

程序变得更复杂，就越有必要使用回调函数。

## 为什么在 JavaScript 中使用回调函数?

回调函数是 JavaScript 的一个简洁特性。 这意味着我们可以使用一个普通函数处理一些事情(如`every`检查数组中的每一个元素是否通过某个测试， `filter`筛选掉一些不符合标准的元素 `replace`是一个字符串回调函数，可以在特定条件下替换掉字符串的一部分) 以及一个回调函数在特定情况下处理特定的行为。

-   `filter` 可以通过回调函数设定的条件筛掉一些元素
-   `every` 可以通过回调函数设定的条件来检查数组上的每一个元素
-   `replace` 使用回调函数设定的条件来替换字符串的一部分

高阶函数使得代码更加抽象。我们不知道（也不需要知道）`every`方法是如何检查数组上的每一个元素并且如何通过回调来检验条件的。我们只需要知道这个方法接受一个回调函数。

## 总结

回调是作为参数传入其他函数的函数。你已经看到我们如何创建一个回调函数，以及回调函数的作用。

感谢阅读！
