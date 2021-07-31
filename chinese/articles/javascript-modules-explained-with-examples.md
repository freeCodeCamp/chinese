> -  原文地址：[JavaScript Modules – Explained with Examples](https://www.freecodecamp.org/news/javascript-modules-explained-with-examples/)
> -  原文作者：[Kingsley Ubah](https://www.freecodecamp.org/news/author/ubahthebuilder/)
> -  译者：seanbei
> -  校对者：

![JavaScript 模块——用例子来阐述](https://www.freecodecamp.org/news/content/images/size/w2000/2021/07/what-is-a-module.png)

模块是一个函数或一组相似的函数。它们组合起来放在一个文件里，其代码被大型应用程序调到时，可以执行一项具体的任务。

创建模块可以更好地组织并结构化你的代码库。你可以使用模块来拆解大型程序，拆成更小、更好管理、更独立的代码块，这些代码块执行单一的任务，或者多个相关的任务。

模块应该是:

1.  **独立的/自我包含的：** 模块必须尽可能与其他依赖项分离。
2.  **具体的：** 模块要能执行单个或一组相关的任务。最初创建它们的核心本质是创建单独的功能块。一个模块，对应于一个（种）任务。
3.  **可重用的** 模块必须能很容易地集成到各种各样的程序来执行其任务。

为了更好地阐述，我给你打个比方：

假设我们想从头开始建造一座大房子。建造房子所需的所有工具都堆放在一个房间里。

在这种情况下，以正确的方式组织这些工具，以便我们开始建造，将会很困难。

不同于将独立的依赖项全部堆放在一个房间里，我们应该将每一系列相关的工具组合，分组放到不同的房间里。每个房间都是独立的，只包含其解决指定任务的工具。

我们可以贴上标签，如：“**这些工具用于建屋顶**”，“**这些工具用于砌砖**”，“**这些工具用于挖地基**”等。

每当我们想要一个工具来执行特定任务时，我们能准确知道应该去哪个房间找它。这样，一切都更有条理，更好定位。
另外，假设我们已经完成了房子的建造，然后决定建造一些不同的东西。我们仍然可以使用相同的工具集。这强化了**可重用性**的原则。模块可重用，因为它们是独立的。

## 一个模块的例子

目前在代码环境中，模块非常重要。

让我们来考虑一个电子商务应用程序的简化版例子，它用于个人和企业在线销售产品。这个程序非常典型地由两个或多个不相关的任务组成。例如，

-   创建帐户，
-   验证信息，
-   处理支付，
-   计算用户评分

等等。

![](https://www.freecodecamp.org/news/content/images/2021/07/main-task.png)

不同于把所有不相关的程序放到一个模块/文件中，为这些任务创建若干个文件或者模块才是更好的方式。在这种情况下，模块变成了依赖项。

然后在主应用或者主程序中，你可以简单地导入/载入依赖项（也就是你需要的模块），并相应地执行。由此，你的主应用变得更简洁更瘦小。

![](https://www.freecodecamp.org/news/content/images/2021/07/modules.png)

main.js 已被拆分为四个模块

例如，假设你需要在代码库的其他应用中处理支付功能，这就变得很容易去重用相同的功能。不需要复制粘贴，也不需要从头编写新功能。

## JavaScript 模块

JavaScript 中的模块就是一个包含相关代码的文件。

JavaScript 使用 `import` 和 `export` 关键字在不同模块之间进行分享和接受功能块。

-   关键字 `export` 使得其他模块可以访问变量、函数、类和对象。换句话说，它变成了公共代码。
-   关键字 `import` 用于从其他模块引入公共代码。

让我们来看一个简单的例子：

```js
function getPower(decimalPlaces) {
	return 10 ** decimalPlaces;
}

function capitalize(word) {
	return word[0].toUpperCase() + word.slice(1);
}

function roundToDecimalPlace(number, decimalPlaces = 2) {
	const round = getPower(decimalPlaces);
	return Math.round(number * round) / round;
}

export { capitalize, roundToDecimalPlace };
```

filepath/main.js

这个模块定义了三个函数：

-   `getPower`：此函数获取数字的幂
-   `capitalize`：此函数将单词中的第一个字母大写
-   `roundToDecimalPlace`：此函数将给定的数字四舍五入到指定的小数位数。

在文件的最后，可以看到三个函数中的两个被导出了。换句话说，它们变成了公共函数，可以被其他脚本使用了。

要从三个函数中导出两个，使用 `export` 关键字，并在后面加上一个对象，包含你想要访问的函数。一旦这样做，该代码库中需要这些函数的任何程序，都可以进行访问了。

让我们看看如何使用它们：

```js
import { capitalize, roundToDecimalPlace } from './main';

function displayTotal(name, total) {
	return `${capitalize(name)}, your total cost is: ${roundToDecimalPlace(total)}`;
}

displayTotal('kingsley', 20.4444444);
// "Kingsley, your total cost is: 20.44"

export { displayTotal };
```

filepath/displayTotal.js

`displayTotal.js` 模块没有 `capitalize()` 和 `roundToDecimalPlace()`，但是想使用首字母大写的功能和舍入小数位的功能。该怎么引入呢？使用 `import`！

要实现它，我们使用 `import` 关键字，并在后面加上我们要想从模块中导入的函数名，在这个例子中也就是 `capitalize` 和 `roundToDecimalPlace`。

如果你只是想导入 `capitalize` 函数到程序呢？

很简单——只导入 `capitalize()` 即可，像这样：

```js
import { capitalize } from './main';

function warn(name) {
	return `I am warning you, ${capitalize(name)}!`;
}

warn('kingsley');
// I am warning you, Kingsley!

export { warn };
```

> 注意：在处理模块时，理解文件结构的工作原理是非常重要的。在上面的例子中，我们只是简单地从同级目录下的文件中导入，因此我们用了符号 `'./import'`。

如果你想从另一个模块中导入所有公共函数，请使用星号 `*` 关键字:

```js
import * as mainfunctions from './main';

function warn(name) {
return `I am warning you, ${mainfunctions.capitalize(name)}!`;
}
warn('kingsley');
// I am warning you, Kingsley!

export { warn };
```

filepath/warn.js

> **提示**: 如果要导入一个模块的全部函数，你应该使用星号，而不是把所有函数逐个显式地写出来。

你可能注意到 `as` 关键字。我们用它来导入We use this to import the public functions into a new object, which in our case is the `mainfunctions` object. We then access and call the functions we want to use in our program.

So far, we have only considered examples where the export happens at the end of the file. But you can equally export a function, variable, or class by registering the `export` keyword just in front of its definition, like so:

```js
function getPower(decimalPlaces) {
	return 10 ** decimalPlaces;
}

export function capitalize(word) {
	return word[0].toUpperCase() + word.slice(1);
}

export function roundToDecimalPlace(number, decimalPlaces = 2) {
	const round = getPower(decimalPlaces);
	return Math.round(number * round) / round;
}
```

filepath/anothermain.js

If you compare this with the first example, you will notice this syntactic difference:

-   In the first example, the `export` keyword was used to export two functions at the end of the script. In the above example, the `export` keyword is attached to both functions when they are being defined.

However, they both deliver the same outcome: `capitalize` and `roundToDecimalPlace` will both get exported.

## Default Exports

If you want to export all three functions but intend to make one of them a default (perhaps because you are most likely to use that single function), you simply use the `default` keyword.

The default keyword makes importing a function easier. Let's consider the following example:

```js
export function getPower(decimalPlaces) {
	return 10 ** decimalPlaces;
	}

export default function capitalize(word) {
	return word[0].toUpperCase() + word.slice(1);
	}

export function roundToDecimalPlace(number, decimalPlaces = 2) {
	const round = getPower(decimalPlaces);
	return Math.round(number * round) / round;
	}
```

filepath/default.js

As you can see, we have made `capitalize` our default function. This essentially means we have given it some sort of privilege.

Say we want to import the `capitalize` function from the module into another program. The syntax for that will be very similar, except you don't have to import the function into curly braces:

```js
import capitalize from './main';

function warn(name) {
	return `I am warning you, ${capitalize(name)}!`;
}

warn('kingsley');
// I am warning you, Kingsley!

export { warn };
```

filepath/warndefault.js

If you want to import the default function along with any other functions, you mix the bare 'default' function with other functions in curly braces:

```js
import capitalize, { getPower } from './main';

function warn(name) {
	return `I am warning you, ${capitalize(name)}!`;
}

warn('kingsley');
// I am warning you, Kingsley!

export { warn };
```

filepath/mixed.js

## Wrapping Up

Modules are independent and self-contained chunks of code. You create them by splitting up a larger program into logical parts or dependencies.

Modules should be independent, specialized, and reusable.

You use the `import` and `export` keywords to interchange functionalities between modules in JavaScript.

You use the `default` keyword to specify a function, object, variable, or class that you want to be a first-choice import.

With this, we have covered the basics of modules in JavaScript.

I hope you got something valuable from this article. I write programming-related articles every week on my [personal blog](https://ubahthebuilder.tech)

Thank you for reading.

> **P/S**: If you are learning JavaScript, I created an eBook which teaches 50 topics in JavaScript with hand-drawn digital notes. [Check it out here](https://ubahthebuilder.gumroad.com/l/js-50).
