> -  原文地址：[Lexical Scope in JavaScript – What Exactly Is Scope in JS?](https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/)
> -  原文作者：[Oluwatobi Sofela](https://www.freecodecamp.org/news/author/oluwatobiss/)
> -  译者：byself
> -  校对者：

![Lexical Scope in JavaScript – What Exactly Is Scope in JS?](https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/kristina-tripkovic-EGmwwDzme6s-unsplash-javascript-lexical-scope-codesweetly.jpg)

**词法作用域（ lexical scope ）** 的概念不好理解，也很难掌握。但如果我们可以搞清楚概念里每一个词的意思，对于理解词法作用域将大有帮助。

因此本文将分别解释“词法（lexical）”和“作用域（scope）”这两个概念，然后在解释什么是词法作用域。

让我们开始吧~~

## 什么是作用域？

**作用域** 表示一个区间，在这个区间内声明的所有内容（比如方法或变量）都可以被该区间内的代码访问到。

**注意：**

-   **作用域（Scope）** 指一个范围，区域或空间
-   **全局作用域（Global Scope）** 指全局空间或一个公共空间
-   **局部作用域（Local Scope）** 指一个局部空间或一个受限制的空间

**举个例子：**

```js
// 定义一个全局变量:
const fullName = "Oluwatobi Sofela";

// 定义多层嵌套函数:
function profile() {
  function sayName() {
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

// 打印结果:
console.log(profile()) // 'Oluwatobi Sofela'
```

[**点击查看源代码**](https://stackblitz.com/edit/web-platform-fqqxjl?file=script.js)

在上述示例中，我们定义了一个`fullName`全局变量，这就意味着在脚本内所有代码都可以访问`fullName`变量。

我们在`sayName()`函数内定义了`writeName()`函数，所以`writeName()`被`sayName()`的局部作用域包裹着。

换言之，`writeName()`只能被`sayName()`函数内部的代码访问。

请记住，无论`writeName()`函数何时被调用，编译器都不会直接访问全局作用域下的`fullName`变量，而是通过[作用域链](#what-is-a-scope-chain)依次查找。

## 什么是作用域链

作用域链是一个独特空间。当一个变量被调用，那么变量在 **被调用** 时所在的局部作用域和全局作用域之间，就形成了一个作用域链。

**示例**

```js
// 定义一个全局作用域变量:
const fullName = "Oluwatobi Sofela";

// 定义多层嵌套函数:
function profile() {
  function sayName() {
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

console.log(profile()) // 'Oluwatobi Sofela'
```

在上述示例中，`fullName` 变量在 `writeName()` 函数作用域中被调用。

因此，从变量的执行作用域到全局作用域之间存在如下作用域链：

**writeName() scope ---> sayName() scope ---> profile() scope ---> global scope**

换言之，从`fullName`变量的执行作用域到它的词法作用域（此处指全局作用域）之间有4层作用域。

**注意：** 在[JavaScript](https://www.codesweetly.com/html-css-javascript/)作用域链中，全局作用域是整个作用域链的终点。

## 作用域链是如何工作的？

Javascript的作用域链规定了编译器在查找 **被调用变量** 的词法作用域时所遵循的查找规则。

考虑如下示例代码：

```js
// 定义一个全局作用域变量:
const fullName = "Oluwatobi Sofela";

// 定义多层嵌套函数:
function profile() {
  function sayName() {
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

console.log(profile()) // 'Oluwatobi Sofela'
```

在上述示例中，无论何时调用`profile()`函数，编译器都会首先调用`sayName()`函数（`profile()`函数体内只有一个`sayName()`函数）。

然后，编译器会调用`writeName()`函数（`sayName()`函数体内只有一个`writeName()`函数）。

最终，`writeName()`函数会调用并返回`fullName`变量的值，所以编译器将返回`fullName`的值。但编译器不会直接从全局作用域中调用`fullName`。

相反的，编译器必须通过作用域链一步一步的查找`fullName`的词法作用域。

下面是编译器查找`fullName`词法作用域的步骤：

1. 首先，编译器会检查`writeName()`的函数作用域是否定义了`fullName`变量。未找到，继续向上查找下一个作用域，即`sayName()`作用域。
2. 第二步，编译器在`sayName()`的函数作用域中查找，依然没找到，继续向上查找下一个作用域，即`profile()`作用域。
3. 第三步，编译器在`profile()`的函数作用域中查找，依然没找到，继续向上查找下一个作用域，即全局作用域。
4. 第四步，编译器查找到了全局作用域。幸运的是，在全局作用域下找到了`fullName`变量，然后将其值（`"Oluwatobi Sofela"`）作为返回值返回。

## 实践一下🤸‍♂️🏋️‍♀️🏊‍

考虑以下代码，并思考：编译器会调用哪一个`fullName`？

```js
// 在全局作用域中定义fullName:
const fullName = "Oluwatobi Sofela";

// 嵌套函数包含2个fullName变量
function profile() {
  const fullName = "Tobi Sho";
  function sayName() {
    const fullName = "Oluwa Sofe";
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

console.log(profile())
```

编译器将调用第一个，第二个，还是第三个`fullName`呢？

**注意：** 如果你多多练习，就能从这个教程中收获多多。

如果你卡住了，不要气馁。重新温习以上知识，然后在试一次。

如果你已经用尽了全力（不要自欺欺人）但还是不会，那就继续往下看正确答案吧。

## 你做对了吗？

在上面脚本中定义的三个`fullName`中，编译器将调用并返回定义在`sayName()`函数中的`fullName`变量。

`sayName()`中定义的`fullName`之所以会被调用，是因为编译器查找作用域链时最先在`sayName()`的作用域中找到`fullName`。

因此，当`profile()`被调用时，返回值是`"Oluwa Sofe"`。

[**点击查看源代码**](https://stackblitz.com/edit/web-platform-9mpvfv?file=script.js)

**特别强调3点：**

-   假如编译器没有在任何作用域中找到`fullName`，那么编译器将返回一个引用错误`Uncaught ReferenceError: fullName is not defined`。
-   全局作用域是Javascript作用域链的最后一个作用域，即全局作用域是查找的终点。
-   一个内部作用域（子作用域）可以访问它的外部作用域（父作用域），但是外部作用域不能访问它的子作用域。
    举个例子，在上面代码中，`writeName()`可以访问它的任何父级作用域（比如`sayName()`的局部作用域，`profile()`的局部作用域，或者全局作用域）。
    但是，无论是`sayName()`和`profile()`的局部作用域，还是全局作用域都不能访问`writeName()`的作用域。

## 作用域小结

Javascript中所有的作用域都是一个可被访问的区间。

因此，如果你女（男）朋友打电话让你去他的私人作用域时，切记他们是在邀请你去他们的私人空间 😜!

你一旦去了，就要问他们最好的词法游戏是什么...

但是词法（lexical）究竟是什么意思，让我们一起往下看。

## 什么是词法（Lexical）?

**词法（Lexical）** 指的是定义某个事物。

任何创建文字，表达式，或变量的声明都叫词法。

比如，拼字游戏就是一种词法活动，因为这个游戏在创造文字。

语言学家的工作也是一种词法事业。

**注意：** 字典（dictionary）又叫词典（lexicon），也就是说，词典（lexicon）就是一部罗列并定义文字的字典（dictionary）。

现在我们知道了作用域和词法的意思，那就可以讨论 **词法作用域** 了。

## 什么是词法作用域（Lexical Scope）？

**词法作用域（Lexical Scope）** 是定义表达式并能被访问的区间。

换言之，一个声明（定义变量，函数等）的词法作用域就是它被定义时所在的作用域。

**注意：**

-   词法作用域又叫静态作用域。
-   一个声明 **被调用时的作用域** 不一定是它的词法作用域。相反的，**定义时的作用域** 才是词法作用域

### 一个词法作用域的小示例

考虑如下代码：

```js
// 定义一个全局作用域变量:
const myName = "Oluwatobi";

// 在函数体内调用myName变量
function getName() {
  return myName;
}

console.log(getName()) // 'Oluwatobi'
```

在上述示例中，我们在全局作用域定义了`myName`变量，并在`getName()`函数作用域内调用了该变量。

**问题：** `myName`变量的词法作用域是什么？ 全局作用域还是 `getName()`的局部作用域？

**答案：** 切记 **词法作用域** 意味着 **定义时的作用域**，并不是**调用时的作用域** 。因此`myName`变量的词法作用域是全局作用域，因为我们在全局环境下定义了`myName`变量。

### 再来一个小例子

```js
function getName() {
  const myName = "Oluwatobi";
  return myName;
}

console.log(getName())  // 'Oluwatobi'
```

**问题：** `myName`变量的词法作用域是什么？

**答案：** 我们在`getName()`函数内定义并调用了`myName`变量。因此，`myName`的词法作用域是`getName()`的局部作用域，因为`getName()`是`myName`定义时所在的作用域。

## 词法作用域如何工作？

Javascript表达式定义时的环境决定哪些代码可以访问它。

换言之，只有词法作用域内的代码才可以访问该作用域内部的代码。

考虑如下代码:

```js
// 定义一个函数:
function showLastName() {
  const lastName = "Sofela";
  return lastName;
}

// 再定义一个函数:
function displayFullName() {
  const fullName = "Oluwatobi " + lastName;
  return fullName;
}

// 调用 displayFullName():
console.log(displayFullName());

// 返回值:
Uncaught ReferenceError: lastName is not defined
```

上述代码中，调用`displayFullName()`时报错`Uncaught ReferenceError`。这是因为只有词法作用域内的代码才能访问该作用域的代码。

因此，不管是`displayFullName()`函数，还是它内部的代码都不能访问`lastName`变量，因为`lastName`定义在不同的作用域中。

换言之，`lastName`的词法作用域和`displayFullName()`不相同。

`lastName`的词法作用域是`showLastName()`函数作用域， 而`displayFullName()`的词法作用域是全局作用域。

现在，考虑另一段代码：

```js
// 定义一个函数:
function showLastName() {
  const lastName = "Sofela";
  return lastName;
}

// 再定义一个函数:
function displayFullName() {
  const fullName = "Oluwatobi " + showLastName();
  return fullName;
}

// 调用 displayFullName():
console.log(displayFullName());

// 返回值:
"Oluwatobi Sofela"
```

在上述代码中，`displayFullName()`成功返回`"Oluwatobi Sofela"`，因为`displayFullName()`和`showLastName()`在相同的词法作用域中。

换言之，`displayFullName()`可以调用`showLastName()`，因为这两个函数都定义在全局作用域中。

**注意：**

-   上述2个示例中，`displayFullName()`不能访问`showLastName()`中`lastName`变量。
    但`displayFullName()`可以调用`showLastName()`，而`showLastName()`返回了`lastName`变量的值。
-   词法作用域的替换方案是[动态作用域](https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scope_vs._dynamic_scope_2)，但是除了在极少的开发语言（比如bash脚本）中使用外，很少使用它。

## 总结

只要你一听到词法，就要联想到是定义某个事物。

因此，一辆车，一个变量，一部手机，一个函数，一件泳衣等，这些事物的词法作用域指的就是定义他们时所在的区间。

## 写在最后

这篇文章不仅讨论了在Javascript中什么是词法作用域，还探讨了为什么它是一个很重要的编程概念。 感谢你的阅读！
