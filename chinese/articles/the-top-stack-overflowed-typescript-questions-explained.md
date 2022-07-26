> - 原文地址：[The Most Asked TypeScript Questions on StackOverflow – Answered for Beginners](https://www.freecodecamp.org/news/the-top-stack-overflowed-typescript-questions-explained/)
> - 原文作者：[Emmanuel Ohans](https://www.freecodecamp.org/news/author/emmanuel/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![The Most Asked TypeScript Questions on StackOverflow – Answered for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2022/07/combined-blog-cover-6.png)

_"_我讨厌 stack overflow 网站_"_  ——从未有开发者说过。

虽然在谷歌上搜索答案很有帮助，但更需要的是真正理解你遇到的偶发问题的解决方案。

在这篇文章中，我将探讨七个 _stackoverflowed_  最常见的 TypeScript 问题。

我花了几个小时来研究这些问题。

我希望你对 TypeScript 可能面临的常见问题有更深入的了解。

如果你刚刚学习 TypeScript，这也是有意义的——有什么比熟悉你未来遇到的问题更好的方法呢？

让我们马上进入正题。

## Table of Contents

1. [What is the difference between Interfaces vs Types in TypeScript?](#1-what-is-the-difference-between-interfaces-vs-types-in-typescript)
2. [In TypeScript, what is the ! (exclamation mark / bang) operator?](#2-in-typescript-what-is-the-exclamation-mark-bang-operator)
3. [What is a “.d.ts” file in TypeScript?](#3-what-is-a-d-ts-file-in-typescript)
4. [How Do You Explicitly Set a New Property on ‘window’ in TypeScript?](#4-how-do-you-explicitly-set-a-new-property-on-window-in-typescript)
5. [Are Strongly Typed Functions as Parameters Possible in TypeScript?](#5-are-strongly-typed-functions-as-parameters-possible-in-typescript)
6. [How to Fix Could Not Find Declaration File for Module ……?](#6-how-to-fix-could-not-find-declaration-file-for-module-)
7. [How Do I Dynamically Assign Properties to an Object in TypeScript?](#7-how-do-i-dynamically-assign-properties-to-an-object-in-typescript)

**__注意:__** 你可以得到这份手册的 [PDF 或 ePub](https://www.ohansemmanuel.com/cheatsheet/top-7-stack-overflowed-typescript-questions) 版本，以方便参考或在你的 Kindle 或平板电脑上阅读。

![image-51](https://www.freecodecamp.org/news/content/images/2022/07/image-51.png)

[PDF 或 Epub 版本的手册下载地址](https://www.ohansemmanuel.com/cheatsheet/top-7-stack-overflowed-typescript-questions)

# 1\. What is the difference between Interfaces vs Types in TypeScript?

![image-52](https://www.freecodecamp.org/news/content/images/2022/07/image-52.png)

Typescript 中的 Interfaces（接口） 与 Types（类型） 的对比  

interfaces vs types (技术上来说，是 type alias) 是一个充满争议的问题。

在开始使用 TypeScript 时，你可能会发现有选择上很困惑。这篇文章消除这种困惑，并帮助你选择适合你的方式。

## TL;DR

在许多情况下，你可以交替使用 interface 或者 type alias。

interface 的大部分功能可以通过 type aliases 来实现, 只是你不能通过重新声明类型（re-declaring）来给它增加新的属性（properties）。你必须使用一个交叉类型（intersection type）。

## Why the Confusion About Types vs Interfaces in the First Place?

每当我们面临多种选择时，大多数人都会开始面对 [选择悖论（paradox of choice）](https://en.wikipedia.org/wiki/The_Paradox_of_Choice)。

在这种情况下，只有两个选项。

这有什么好困惑的？

好吧，这里的主要混淆源于这两个选项在大多数方面是如此 **__势均力敌__**。

这使得你很难做出一个明确的选择，尤其是当你刚刚开始使用 Typescript 的时候。

## A Basic Example of Type Alias vs Interface

让我们通过 interface 和 type alias 的例子快速了解一下。

考虑下面的 `Human` type 的写法:

```ts
// type 
type Human = {
  name: string 
  legs: number 
  head: number
}

// interface 
interface Human {
  name: string 
  legs: number 
  head: number
}
```

这些都是表示 `Human` type，通过 type alias 或者 interface.

## The Differences Between Type Alias and Interfaces

以下是 type alias 和 interface 的主要区别:

### Key difference: interfaces can only describe object shapes. Type aliases can be used for other types such as primitives, unions and tuples

type alias 可以表示的数据类型中是相当灵活的。从 basic primitives（基本的基元）到 复杂的 unions（联合）和 tuples（元组）, 如下所示:

```ts
// primitives 
type Name = string 

// object 
type Male = {
  name: string
}

type Female = {
  name: string 
}

// union
type HumanSex = Male | Female

// tuple
type Children = [Female, Male, Female]
```

不像 type aliases，你只能用一个 interface 来表示 object types（对象类型）。

### Key difference: an interface can be extended by declaring it multiple times

请思考以下例子:

```ts
interface Human {
  name: string 
}

interface Human {
  legs: number 
}
```

上面的两个声明将变成:

```ts
interface Human {
  name: string 
  legs: number 
}
```

`Human`将被视为一个单一的 interface：两个声明的成员的组合。

![image-53](https://www.freecodecamp.org/news/content/images/2022/07/image-53.png)

_type 'Humans' 中需要 `legs`这个属性（Property）_

看 [这个 TypeScript 演示代码](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgBIFcC2cTIN4BQyxyIcmEAXMgM5hSgDmBAvgaJLIihtroSWQAbCIxrUQWAEbRWBAgHoFyMAAtgNZNCgB7KJp3owyGQjjoaKAOQixV5JgvGIADw3GCCHSDrJV1XhxkAF58IhIyCmorAHlVHE0AUUw+dAghK1YgA).

这种情况不适合使用 type aliases.

使用 type aliases，以下将导致错误：

```ts
type Human = {
    name: string 
}
  
type Human =  {
    legs: number 
}

const h: Human = {
   name: 'gg',
   legs: 5 
}  
```

![image-54](https://www.freecodecamp.org/news/content/images/2022/07/image-54.png)

重复标识符(Duplicate identifier) `Human` 错误

看这个 [TypeScript 演示代码](https://www.typescriptlang.org/play?#code/C4TwDgpgBAEgrgWwIYDsoF4oG8BQV9QpIIQBcUAzsAE4CWKA5lDgL57OiSyKob64EoAGwgMK5FIgBGEaszY4AxgHsUVKAAty8ZGkwD8REuQDkDBiYA07YaPFQArPPw5XroA).

使用 type aliases 的话, 你就不得不使用一个交叉类型（intersection type）:

```ts
type HumanWithName = {
    name: string 
}
  
type HumanWithLegs =  {
    legs: number 
}

type Human  = HumanWithName & HumanWithLegs

const h: Human = {
   name: 'gg',
   legs: 5 
}  
```

看这个 [TypeScript 演示代码](https://www.typescriptlang.org/play?#code/C4TwDgpgBAEgrgWwIYDsDqBLYALAckhaAXigG8AoKKqFAiALigGdgAnDFAcynIF9KeoSLESpMOADIROTKCTICqAG2lNGKRACMIrHv3JDo8ZCioljYrHjpQAZCJPjsUmeXIBjAPYoWUbIwtTEgpqWkJGAHJOTgiAGkUVGUYAVj0qNwygA).

### Minor difference: Both type aliases and interfaces can be extended, but with different syntaxes

对于 interfaces，你使用`extends`关键字。对于 types, 你必须使用一个交叉（intersection）.

思考一下下面的例子:

#### Type alias extends a type alias

```ts

type HumanWithName = {
  name: string 
}

type Human = HumanWithName & {
   legs: number 
   eyes: number 
}
```

#### Type alias extends an interface

```ts
interface HumanWithName {
  name: string 
}

type Human = HumanWithName & {
   legs: number 
   eyes: number 
} 
```

#### Interface extends an interface

```ts
interface HumanWithName {
  name: string 
}

interface Human extends HumanWithName {
  legs: number 
  eyes: number 
}
```

#### Interface extends a type alias

```ts
type HumanWithName = {
  name: string
}

interface Human extends HumanWithName {
  legs: number 
  eyes: number 
}
```

正如你所看到的，这并不是选择一个而不是另一个的特别理由。然而，语法是不同的。

### Minor difference: classes can only implement statically known members

 class 可以同时实现 interfaces 或者 type aliases。然而，不能实现（implement）或扩展（extend）一个联合类型（union type）。

请看下面的例子:

#### Class implements an interface

```ts
interface Human {
  name: string
  legs: number 
  eyes: number 
}

class FourLeggedHuman implements Human {
  name = 'Krizuga'
  legs = 4
  eyes = 2
}
```

#### Class implements a type alias

```ts
type Human = {
  name: string
  legs: number 
  eyes: number 
}

class FourLeggedHuman implements Human {
  name = 'Krizuga'
  legs = 4
  eyes = 2
}
```

这两段代码作都没有任何错误。然而，下面的情况却失败了:

#### Class implements a union type

```ts
type Human = {
    name: string
} | {
    legs: number
    eyes: number
}

class FourLeggedHuman implements Human {
    name = 'Krizuga'
    legs = 4
    eyes = 2
}
```

![image-55](https://www.freecodecamp.org/news/content/images/2022/07/image-55.png)

class 只能实现（implement）一个对象类型（object type）或具有静态已知成员的对象类型（intersection of object types with statically known members）的交叉（intersection）。

See the [TypeScript playground](https://www.typescriptlang.org/play?#code/C4TwDgpgBAEgrgWwIYDsoF4oG8BQV9QpIIQBcUAzsAE4CWKA5jgL5QA+2eBANhAxeRSIARhGpd8EEBAGERYljhwBjbkgoUoAMQD2cagBk+DCABN4yNLQRheJFME0XUnAoWLRMAcgDSdAF5wDEheElC8-BhQACxhUjJRAEwsQA).

## Summary of Type Aliases vs Interfaces

你的想法可能不同，但只要有可能，我都坚持使用 type aliases，因为它们的灵活性和语法更简单。也就是说，除非我特别需要一个接口（interface）的功能，否则我选择 type aliases。

在大多数情况下，你也可以根据你的个人偏好来决定，但要与你的选择保持一致，至少在一个特定的项目中。

我必须补充一点，在需要考虑性能的情况下，interface 比较检查可能比 type aliases 更快。但我还没有发现使用 type aliases ，导致性能问题。

# In TypeScript, What is the ! (Exclamation Mark / Bang) Operator?

![image-56](https://www.freecodecamp.org/news/content/images/2022/07/image-56.png)

TypeScript 中的 bang 运算符是什么？

## TL;DR

这个`！` 在技术上被称为 **__非空的断言操作符(non-null assertion operator)__**。如果 TypeScript 编译器警告一个值是 `null`或 `undefined`，你可以使用`！`操作符来断言该值不是 `null` 或 `undefined`。

个人观点：尽可能避免这样做。

## What is the Non-Null Assertion Operator?

`null` 和 `undefined` 是有效的 JavaScript 值。

上面的声明对所有 TypeScript 应用程序也是如此。

然而，TypeScript 更进一步。

`null` 和 `undefined` 是同样有效的类型。例如，考虑下面的情况:

```ts
// 明确为 null
let a: null 

a = null
// 以下代码将产生错误
a= undefined 
a = {}


// 明确为 undefined
let b: undefined 
// 以下代码将产生错误
b = null 
b = {}
```

![image-57](https://www.freecodecamp.org/news/content/images/2022/07/image-57.png)

Error: 除了 null 和 undefined 之外，其他的值不能被分配

See the [TypeScript playground](https://www.typescriptlang.org/play?#code/DYUwLgBAhgXBB2BXYwICg1QgXgc4aA9IRGABYgQBmA9ijQO4CW8A5tAM4dOvwC2IeGA4RmKCAE8mIYABMIIAE6KaijplyJ4skFRYh5mHBADeAXwxpQkAEZwtOvfAPpipCtTrBGLdlC48-ILCokziUjLySipqaDbGSOJxxuZoQA).

在某些情况下，TypeScript 编译器无法判断某个值是否被定义，即不是 `null`或 `undefined`。

例如，假设你有一个值`Foo`。

`Foo!`产生一个类型为`Foo`的值， 不能为 `null` 和 `undefined`。

![image-58](https://www.freecodecamp.org/news/content/images/2022/07/image-58.png)

Foo! 从 Foo 的类型中排除了 `null`和 `undefined`。

你基本上是在对 TypeScript 编译器说：_我确信 `Foo`不会是 `null` 或 `undefined`_。

让我们来探讨一个简单的例子。

在标准的 JavaScript 中，你可以用 `.concat` 方法将两个字符串连接起来:

```ts
const str1 = "Hello" 
const str2 = "World"

const greeting = str1.concat(' ', str2)
// Hello World
```

编写一个简单的产生重复字符串函数，以自己为参数调用 `.concat`:

```ts
function duplicate(text: string | null) {
  return text.concat(text);
}
```

注意，参数 `text` 被打成了 `string | null`.

在严格模式下，TypeScript 会在这里警告，因为用 `null` 调用 `concat` 会导致意外的结果。

![image-59](https://www.freecodecamp.org/news/content/images/2022/07/image-59.png)

用 `null` 调用 `concat` 的结果是

TypeScript 将报错 : `Object is possibly 'null'.(2531)`.

![image-60](https://www.freecodecamp.org/news/content/images/2022/07/image-60.png)

Typescript error: Object is possibly null（对象可能为空）

反过来说，一个相当懒的方法是，使用非空的断言操作符来消除编译器的错误:

```ts
function duplicate(text: string | null) {
  return text!.concat(text!);
}
```

注意`text`变量后面的感叹号——`text!`。

`text`类型代表`string | null`。

`text!` 只代表`string`，也就是把``null``或 `undefined` 从变量类型中删除。

结果是什么？你已经消除了 TypeScript 的错误。

然而，这是一个愚蠢的修复。

`duplicate`确实可以在 `null` 的情况下被调用，这可能会导致意外的结果。

请注意，如果`text`是一个可选的属性，下面的例子也是成立的：


```ts
// text could be "undefined"
function duplicate(text?: string) {
  return text!.concat(text!);
}
```

## Pitfalls of the `!` Operator (and What to Do Instead)

当作为一个新用户使用 TypeScript 时，你可能觉得自己在打一场会失败的仗。

这些错误对你来说毫无意义。

你的目标是消除错误，尽可能迅速地继续你的生活。

然而，你应该小心使用非空断言操作符（！）。

消除一个 TypeScript 错误并不意味着消除一个潜在的问题。

正如您在前面的示例中看到的那样，您会失去所有相关的 TypeScript 安全性，以防止 `null` 和 `undefined` 的错误用法。

那么，你应该怎么做？

如果你写 React，考虑一个你可能熟悉的例子:

```ts
const MyComponent = () => {
   const ref = React.createRef<HTMLInputElement>();
 
   //compilation error: ref.current is possibly null
   const goToInput = () => ref.current.scrollIntoView(); 

    return (
       <div>
           <input ref={ref}/>
           <button onClick={goToInput}>Go to Input</button>
       </div>
   );
};
```

在上面的示例中（对于那些不编写 React 的人），在 `React` 心智模型（mental mode）中，`ref.current` 在用户单击按钮时肯定会可用。

`ref` 对象在 UI 元素被渲染后不久就会被设置。

TypeScript 不知道这一点，所以你可能被迫在这里使用非空断言操作符。

实际上，开发者对 TypeScript 编译器说，我知道我在做什么，你（TypeScript 编译器）不知道。

```ts
const goToInput = () => ref.current!.scrollIntoView();
```

注意惊叹号`！`。

这 "修复" 了这个错误。

但是，如果将来有人从输入中删除了 `ref`，而又没有自动测试来捕捉这一点，你现在就有一个错误。

```ts
// before
<input ref={ref}/>

// after
<input />
```

TypeScript 将无法发现以下一行的错误:

```ts
const goToInput = () => ref.current!.scrollIntoView();
```

通过使用 非空（non-null）断言操作符，TypeScript 编译器将认为 `null`和`undefined`对于相关的值来说是不可能的。在这种情况下，`ref.current`。

### Solution 1: Find an Alternative Fix

你应该对第一行找到一个替代的修复方法。

例如，通常你可以像这样明确地检查 `null` 和 `undefined` 值。:

```ts
// before 
const goToInput = () => ref.current!.scrollIntoView();

// now 
const goToInput = () => {
  if (ref.current) {
   //Typescript会认为 ref.current肯定是 
   //可以在这个条件下中使用
     ref.current.scrollIntoView()
  }
};

//  或者（使用逻辑与运算符）
const goToInput = () => ref.current && ref.current.scrollIntoView();
```

众多工程师会争论这个事实，即使代码更啰嗦。

这是对的。

但是你应该选择详细而不是可能破坏代码，并将代码推送到生产环境。

这是个人喜好。 您选择的道路可能会有所不同。

### Solution 2: Explicitly Throw an Error

在其他修复方法不能解决问题的情况下，非空断言运算符似乎是唯一的解决方案，我通常建议你在这样做之前抛出一个错误。

下面是一个例子（用伪代码）:

```ts
function doSomething (value) {
   // 出于某种原因，TS认为该值可能是  
   // null 或者 undefined ， 但你不同意
   
  if(!value) {
    // 明确地断言这就是情况 
    // 抛出一个错误或在某个地方记录这个错误，你可以追踪
    throw new Error('uexpected error: value not present')
  } 

  // 继续使用非空的断言运算符
  console.log(value)
}
```

我发现自己有时会这样做的一个实际案例是在使用`Formik`时。

除了事情发生了变化，我确实认为`Formik`在许多情况下是不好的类型。

如果你已经完成了 Formik 的验证，并确定你的值存在，那么这个例子可能会有类似的效果。

这里有一些伪代码:

```ts
<Formik 
  validationSchema={...} 
  onSubmit={(values) => {
   // 你确定 values.name 应该存在，因为你有验证了
   // 但TypeScript不知道这一点

   if(!values.name) {
    throw new Error('Invalid form, name is required')  
   } 
   console.log(values.name!)
}}>


</Formik>
```

在上面的伪代码中，`values` 可以这样定义:

```ts
type Values = {
  name?: string
}
```

但是在你点击`onSubmit`之前，你已经添加了一些验证，显示一个 UI 表单错误，让用户在继续提交表单之前输入一个`name`。

还有其他方法可以解决这个问题。但如果你确定一个值存在，但又不能完全传达给 TypeScript 编译器，可以使用非空断言操作符。
但也通过可以添加你自己的断言来抛出一个你可以追踪的错误。

## How About an Implicit Assertion?

尽管运算符的名字是非空断言运算符，但实际上没有断言(assertion)。

你主要是在断言（作为开发者）这个值存在。

TypeScript 编译器并没有断言这个值存在。

所以，如果你必须这样做，你可以继续添加你的断言（例如，在前面的章节中讨论的）。

另外，请注意，使用非空断言运算符不需要更多的 JavaScript 代码来发出（emitted）事件。

如前所述，TypeScript 在这里没有做断言。

因此，TypeScript 不会通过一些代码来检查这个值是否存在。

如果这个值存在，JavaScript 代码会发出（emitted）一个事件。

![image-62](https://www.freecodecamp.org/news/content/images/2022/07/image-62.png)

Emitted javascript code same as Javascript（我看不懂）

## Conclusion

TypeScript 2.0 发布了 **_non-null assertion operator (非空断言操作符)_**。 是的，它已经存在了一段时间（[发布于 2016 年](https://github.com/microsoft/TypeScript/releases/tag/v2.0.3)）。在撰写本文时，TypeScript 的最新版本是 `v4.7`。

如果 TypeScript 编译器警告一个值是 `null` 或 `undefined` ，你可以使用 `！` 操作符来断言上述值不是 `null` 或 `undefined`。

只有在你确定是这样的情况下才这样做。

甚至更好的是，继续添加你自己的断言，或尝试找到一个替代的解决方案。

有些人可能会说，如果你每次都需要使用 **_non-null assertion operator (非空断言操作符)_**，那就说明你通过 TypeScript 控制你的应用程序状态的能力很差。

我同意这个观点。

# What is a “.d.ts” File in TypeScript?

![image-63](https://www.freecodecamp.org/news/content/images/2022/07/image-63.png)

What is a d.ts file?

## TL;DR

`.d.ts`文件被称为类型声明文件。它们的存在只有一个目的：描述一个现有模块（module）的类型特征(shape)，它们只包含用于类型检查的类型信息。

## Introduction to `.d.ts` Files in TypeScript

学习了 TypeScript 的基础知识后，你就可以获得超能力。

至少我是这么认为的。

你会自动得到潜在错误的警告，并在你的代码编辑器中得到自动完成的功能。

虽然看起来很神奇，但计算机没有使用魔法。

那么，TypeScript 的诀窍是什么呢？

用更清晰的语言，TypeScript 怎么知道这么多？ 它如何判断哪个 API 正确与否？ 在某个对象或类上哪些方法可用，哪些不可用？

答案不是魔法。

TypeScript 靠的是类型（type）。

有时，您不编写这些类型（types），但它们存在。

它们存在于称为声明文件的文件中。

这些是以 `.d.ts` 结尾的文件。

## A Simple Example of `.d.ts` Files

想一下下面的 TypeScript 代码:

```ts
// valid 
const amount = Math.ceil(14.99)

// error: Property 'ceil' does not exist on type 'Math'.(2339)
const otherAmount = Math.ciil(14.99)
```

参考 [TypeScript playground（训练场）](https://www.TypeScriptlang.org/play?#code/MYewdgzgLgBAhgWxAVzLAvDAsnKALAOmAFMBLAGwAoBGAFgIE4GBKAKFdElhH2ICcAgklQZsuQsFIUa9Jm1ZA).

第一行代码是完全有效的，但第二行则不尽然。

TypeScript 很快就发现了这个错误: `Property 'ciil' does not exist on type 'Math'.(2339)`.

![image-64](https://www.freecodecamp.org/news/content/images/2022/07/image-64.png)

Typescript 发现访问属性 `ciil` 的错误。

TypeScript 是如何知道 `Math` 对象上不存在 `ciil` 的？

`Math` 对象不是我们实现的一部分。 这是一个标准的内置对象。

那么，TypeScript 是如何解决这个问题的呢？

答案是有 **_declaration files_** 来描述这些内置对象。

将声明文件视为包含与某个模块相关的所有类型信息。 它不包含具体实现，仅包含类型信息。

这些文件有一个 `.d.ts` 结尾。

你的实现文件将有`.ts`或`.js`结尾，代表 TypeScript 或 JavaScript 文件。

这些声明文件没有实现。他们只包含类型信息，并且有一个`.d.ts`文件结尾。

## Built-in Type Definitions

在实践中理解这一点的一个好方法是建立一个全新的 TypeScript 项目，并探索顶级对象的类型定义文件，如 `Math`。

让我们这样做。

创建一个新的目录，并将其命名为任何合适的名字。

我创建一个新文件夹 `dts`:

```ts
cd dts
```

现在初始化一个新的项目:

```ts
npm init --yes
```

初始化 TypeScript:

```ts
npm install TypeScript --save-dev
```

![image-65](https://www.freecodecamp.org/news/content/images/2022/07/image-65.png)

安装 TypeScript

这个目录应该包含 2 个文件和一个子目录:

![image-66](https://www.freecodecamp.org/news/content/images/2022/07/image-66.png)

安装后的文件

在你喜欢的代码编辑器中打开该文件夹。

如果你去查看 `node_modules`中的`TypeScript`目录，你会发现一堆开箱即用的类型声明文件。

![image-67](https://www.freecodecamp.org/news/content/images/2022/07/image-67.png)

TypeScript 目录中的类型声明文件，是在安装 TypeScript 后出现的。

默认情况下，TypeScript 将包括所有 DOM API 的类型定义，例如认为`window`和`document`。

当你检查这些类型声明文件时，你会注意到命名惯例是很简单的。

它是这样的：`lib.[something].d.ts`。

打开`lib.dom.d.ts`声明文件，查看所有与浏览器 DOM API 相关的声明。

![image-68](https://www.freecodecamp.org/news/content/images/2022/07/image-68.png)

DOM 声明文件，正如你所看到的，这是个相当巨大的文件。

DOM 中的所有 API 也是如此。

真棒啊!

现在，如果你看一下`lib.es5.d.ts`文件，你会看到`Math`对象的声明，包含`ceil`属性。

![image-69](https://www.freecodecamp.org/news/content/images/2022/07/image-69.png)

声明文件中的 Math 对象

下次你想，哇，TypeScript 真了不起。请记住，这种美妙的很大一部分是由于鲜为人知的英雄：类型声明文件。

这不是魔术,是类型声明文件。

## External Type Definitions in TypeScript

那些没有内置的 API 怎么办？

有许多`npm`包可以做任何你想做的事情。

有没有办法让 TypeScript 也能理解上述模块的相关类型关系？

嗯，答案是肯定的。

通常有两种方式，一个库的作者可以做到这一点。

### Bundled Types

在这种情况下，库的作者已经将类型声明文件作为包的一部分捆绑在一起。

你通常不需要做任何事情。

你只需继续在你的项目中安装库，从库中导入所需的模块，看看 TypeScript 是否会自动为你解析类型

记住，这不是魔术。

库的作者已经将类型声明文件包含在包的分发中。

### DefinitelyTyped (@types)

想象一下，一个公共资源库(central public repository)为成千上万的库托管声明文件？

好吧，把这个画面。

这个资源库已经存在了。

[DefinitelyTyped repository](https://github.com/DefinitelyTyped/DefinitelyTyped/)是一个集中式的仓库，存储了成千上万个库的声明文件。

说实话，绝大多数常用的库都在 **_DefinitelyTyped_** 上有声明文件。

这些类型定义文件会自动发布到`npm`下的`@types`范围。

例如，如果你想安装`react`npm 包的类型文件，你可以这样做:

```ts
npm install --save-dev @types/react
```

如果你发现自己使用的模块的类型不是 TypeScript 自动解析的，可以尝试直接从 DefinitelyTyped 安装类型。

看看那里是否存在这些类型。比如说:

```ts
npm install --save-dev @types/your-library
```

你以这种方式添加的定义文件将被保存到 `node_modules/@types` 目录下。

TypeScript 会自动找到这些。所以，你不需要采取额外的步骤。

## How to Write Your Own Declaration Files

在不常见的情况下，如果一个库没有捆绑它的类型，并且在 DefinitelyTyped 上没有类型定义文件，你可以编写你自己的声明文件。

深入了解编写声明文件超出了本文的范围，但你可能会遇到的一个情况是在没有声明文件（declaration file）的情况下，如何消除关于某个特定模块（particular module）的错误。

声明文件（Declaration files）都有一个`.d.ts`结尾。

所以要创建你的声明文件，就要创建一个以`.d.ts`结尾的文件。

例如，假设我在项目中安装了库`untyped-module`。

`untyped-module`没有引用的类型定义文件，所以 TypeScript 在我的项目中对此进行警告。

为了消除这个警告，我可以在我的项目中创建一个新的`untyped-module.d.ts`文件，内容如下:

```ts
declare module "some-untyped-module";
```

This will declare the module as type `any`.

We won’t get any TypeScript support for that module, but you’d have silenced the TypeScript warning.

Ideal next steps would include opening an issue in the module’s public repository to include a TypeScript declaration file, or writing out a decent one yourself.

## Conclusion

下次你想，哇，TypeScript 真了不起。请记住，这种了不起的成就有很大一部分是由于幕后的英雄：类型声明文件（type declaration files）。

现在你明白它们是如何工作的了吧！

# How Do You Explicitly Set a New Property on `window` in Typescript?

![image-70](https://www.freecodecamp.org/news/content/images/2022/07/image-70.png)

在 window 对象上设置一个新属性（new property）？

## TL;DR

为`Window`对象扩展（extend）现有的接口声明。

## Introduction to `window` in TypeScript

知识建立在知识之上。

这是对的。

在本节中，我们将建立在前两节的知识基础上:

- [Interfaces vs Types in TypeScript](https://blog.ohansemmanuel.com/interfaces-vs-types-in-typescript/)
- [What is a d.t.s file in TypeScript](https://blog.ohansemmanuel.com/what-is-a-dts-file-in-typescript/)?

准备好了吗？

首先，我必须说，在我使用 TypeScript 的早期，这是一个我在谷歌上一遍又一遍搜索的问题。

我从来没有理解它。我也懒得理会，我只是在网上搜索。

这绝不是掌握一门学问的正确心态。

让我们来讨论一下这个问题的解决方案。

## Understanding the Problem

这里的问题实际上很容易推理。

思考以下 TypeScript 代码:

```ts
window.__MY_APPLICATION_NAME__ = "freecodecamp"

console.log(window.__MY_APPLICATION_NAME__)
```

TypeScript 会很快让你知道`__MY_APPLICATION_NAME__`不存在于 `Window & typeof globalThis` 类型。

![image-71](https://www.freecodecamp.org/news/content/images/2022/07/image-71.png)

该属性不存在于 Window 上的报错

查看 [TypeScript playground](https://www.freecodecamp.org/news/p/a31cc449-928c-4453-a83d-ce30ef79f986/%20https://www.typescriptlang.org/play?#code/O4SwdgJg9sB0D68CyBNeBBACpgMgSQGF0AVPAeQDl4L0kBRRAAgF5GAiAMwCcBTHgYygQBAQwC2ABzYAoaYLABnKABsesZVADmAClCQYCZGiy5CJclRr1EASln2gA).

好吧，TypeScript。

我们明白了。

仔细观察，记得上一节关于[声明文件（declaration files）](https://blog.ohansemmanuel.com/what-is-a-dts-file-in-typescript/)，所有现有的浏览器 API 都有一个声明文件。这包括内置对象，如`window`。

![image-72](https://www.freecodecamp.org/news/content/images/2022/07/image-72.png)

默认的 Window 接口声明。

如果你看看`lib.dom.d.ts`声明文件，你会发现`Window`接口的描述。

用通俗的话说，这里的错误是：`Window`接口描述了我对`window`对象及其用法的理解。该接口没有指定某个`__MY_APPLICATION_NAME__`属性。

## How to Fix the Error

在类型（types）与接口（interface）部分，我解释了如何扩展一个接口。

让我们在这里应用这些知识。

我们可以扩展（extend）`Window` 接口声明 (interface declaration)，使其知道`__MY_APPLICATION_NAME__`属性。

下面是方法:

```ts
// before
window.__MY_APPLICATION_NAME__ = "freecodecamp"

console.log(window.__MY_APPLICATION_NAME__)

// now 
interface Window {
  __MY_APPLICATION_NAME__: string
}

window.__MY_APPLICATION_NAME__ = "freecodecamp"

console.log(window.__MY_APPLICATION_NAME__)
```

Errors banished!

![image-74](https://www.freecodecamp.org/news/content/images/2022/07/image-74.png)

The resolved solution

See the [TypeScript playground](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgOqgCYHsDuyDeAUMsgPqkCyAmqQIIAK9AMgJIDCtAKiwPIBypPrQoBRcgC5kAZzBRQAc0IBfQoRyZcAOnLU6jVh279BwsaWQBeZACIYUCBARYMjuAFsADtdVOQUrAA2EJoBWPIAFOog2DjalDQMzOxcvAJCouQAlEA).

Remember that a key difference between types and interfaces is that interfaces can be extended by declaring it multiple times.

What we’ve done here is declared the `Window` interface one more time, hence extending the interface declaration.

### A Real-World Solution

I’ve solved this problem within the TypeScript playground to show you the solution in its simplest form, that is the crux.

In the real world, though, you wouldn’t extend the interface within your code.

So, what should you do instead?

Give it a guess, perhaps?

Yes, you were close …… or perhaps right:

Create a type definition file!

For example, create a `window.d.ts` file with the following content:

```ts
interface Window {
  __MY_APPLICATION_NAME__: string
}
```

And there you go.

You’ve successfully extended the `Window` interface and solved the problem.

If you went ahead to assign the wrong value type to the `__MY_APPLICATION_NAME__` property, you now have strong type checking enabled.

![image-75](https://www.freecodecamp.org/news/content/images/2022/07/image-75.png)

A wrong assignment to the newly defined property caught

See the [TypeScript playground](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgOqgCYHsDuyDeAUMsgPqkCyAmqQIIAK9AMgJIDCtAKiwPIBypPrQoBRcgC5kAZzBRQAc0IBfQoRyZcAOnLU6jVh279BwsaWQBeAsWQg4AWwiSARDCgQICLBk8OADs7Kql4gUlgANhCa4VjyABTqINg42pQ0DMzsXLwCQqLkAJSqxUA).

_And_Voilà.__

## Conclusion

In [older stack overflow posts](https://stackoverflow.com/questions/12709074/how-do-you-explicitly-set-a-new-property-on-window-in-typescript), you’ll find more complicated answers based on older TypeScript versions.

The solution is easier to reason about in modern TypeScript.

Now you know. 😉

# Are Strongly Typed Functions as Parameters Possible in TypeScript?

## TL;DR

This question does not need to be overly explained. The short answer is yes.

Functions can be strongly typed — even as parameters to other functions.

## Introduction

I must say, unlike other sections of this article, I never really found myself searching for this in my early TypeScript days.

However, that’s not what’s most important.

It is a well-searched question, so let’s answer it!

## How to Use Strongly Typed Function Parameters in TypeScript

The accepted answer on this [stack overflow post](https://stackoverflow.com/questions/14638990/are-strongly-typed-functions-as-parameters-possible-in-typescript) is correct — to a degree.

Assuming you had a function: `speak`:

```ts
function speak(callback) {
  const sentence = "Hello world"
  alert(callback(sentence))
}
```

It receives a `callback` that’s internally invoked with a `string`.

To type this, go ahead and represent the `callback` with a function type alias:

```ts
type Callback = (value: string) => void
```

And type the `speak` function as follows:

```ts
function speak(callback: Callback) {
  const sentence = "Hello world"
  alert(callback(sentence))
}
```

Alternatively, you could also keep the type inline:

```ts
function speak(callback: (value: string) => void) {
  const sentence = "Hello world"

  alert(callback(sentence))
}
```

See the [TypeScript playground](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAZwA4FMCGBrAFBTAG0ICNMJsAuRXANyJHWuSgCcYwBzASkQF4AfIlpwYAE14BvAFCJEEBCxTowUFRHT9EAIgAS6YnEQB3OK0Jjt02YiLpWUfEVLk8yFWsjpu3aQF9rQOkgA).

And there it is!

You’ve used a strongly typed function as a parameter.

## How to Handle Functions with No Return Value

The accepted answer in the referenced stack overflow post for example says __the callback parameter's type must be_ a _"function that accepts a number and returns type any_._"__

That’s partly true, but the return type does NOT have to be `any`.

In fact, do NOT use `any`.

If your function returns a value, go ahead and type it appropriately:

```ts
// Callback returns an object
type Callback = (value: string) => { result: string }
```

If your callback returns nothing, use `void` not `any`:

```ts
// Callback returns nothing
type Callback = (value: string) => void
```

Note that the signature of your function type should be:

```ts
(arg1: Arg1type, arg2: Arg2type) => ReturnType
```

Where `Arg1type` represents the type of the argument `arg1`, `Arg2type` the type of the `arg2` argument, and `ReturnType` the return type of your function.

## Conclusion

Functions are the primary means of passing data around in JavaScript.

TypeScript not only allows you to specify the input and output of functions, but you can also type functions as arguments to other functions.

Go ahead and use them with confidence.

# How to Fix Could Not Find Declaration File for Module ……?

This is a common source of frustration for TypeScript beginners.

However, do you know how to fix this?

Yes, you do!

We saw the solution to this in the __what is `d.ts`__ section__.__

## TL;DR

Create a declaration file, for example `untyped-module.d.ts`, with the following content: `declare module "some-untyped-module";`. Note that this will explicitly type the module as `any`.

## The Solution Explained

You can give the writing your declaration files section a fresh read if you don’t remember how to fix this.

Essentially, you have this error because the library in question didn’t bundle its types and does not have a type definition file on [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/).

This leaves you with one solution: write your own declaration file.

For example, if you have installed the library `untyped-module` in your project, `untyped-module` has no referenced type definition files, so TypeScript complains.

To silence this warning, create a new `untyped-module.d.ts` file in your project with the following content:

```ts
declare module "some-untyped-module";
```

This will declare the module as type `any`.

You won’t get any TypeScript support for that module, but you’ll have silenced the TypeScript warning.

The ideal next steps would include opening an issue in the module’s public repository to include a TypeScript declaration file or writing out a decent one yourself (beyond the scope of this article).

# How Do I Dynamically Assign Properties to an Object in Typescript?

![image-76](https://www.freecodecamp.org/news/content/images/2022/07/image-76.png)

Dynamically assigning properties to objects in Typescript

## TL;DR

If you cannot define the variable type at declaration time, use the `Record` utility type or an object index signature.

## Introduction

Consider the following example:

```ts
const organization = {}

organization.name = "Freecodecamp"
                                                                                                                 
```

This seemingly harmless piece of code throws a TypeScript error on dynamically assigning `name` to the `organization` object.

![image-80](https://www.freecodecamp.org/news/content/images/2022/07/image-80.png)

Typescript error when adding a new property dynamically

See the [Typescript playground](https://www.typescriptlang.org/play?#code/MYewdgzgLgBCBOBzAhmAlgL2VN4YF4YBvAXwCgyEV0sdwA6MZAWwFMCYAiAMXlddAATASwAOnCjCnSZsufIWKlylarXqZFIA)

The source of confusion, and perhaps rightly justified if you’re a TypeScript beginner, is how is something seemingly so simple a problem in TypeScript?

## Understanding the Problem

Generally speaking, TypeScript determines the type of a variable when it is declared, and this determined type doesn’t change – that is it stays the same all through your application.

There are exceptions to this rule when considering type narrowing or working with the any type, but this is a general rule to remember otherwise.

In the earlier example, the `organization` object is declared as follows:

```ts
const organization = {}
```

There is no explicit type assigned to the `organization` variable, so TypeScript infers the type of `organization` based on the declaration to be `{}`, that is the literal empty object.

For example, if you add a type alias, you can explore the type of `organization`:

```ts
type Org = typeof organization
```

![image-81](https://www.freecodecamp.org/news/content/images/2022/07/image-81.png)

Exploring the literal object type

See the [TypeScript playground](https://www.typescriptlang.org/play?#code/MYewdgzgLgBCBOBzAhmAlgL2VN4YF4YBvAXwCgyoBPABwFMYB5JAma+kAMziVU21xgKCFOiw5wAOjDIAtg0IAiAGLw6dUABMNcmoooxDR4ydNnzFy1es3bd4xSA).

When you then try to reference the `name` prop on this empty object literal:

```ts
organization.name = ...
```

TypeScript yells.

> Property 'name' does not exist on type ‘ `{}`‘.

When you understand the issue, the error does seem appropriate.

Let’s fix this.

## How to Resolve the Error

There are numerous ways you can resolve the TypeScript error here. Let’s consider these:

### 1\. Explicitly type the object at declaration time

This is the easiest solution to reason about.

At the time you declare the object, go ahead and type it. Furthermore, assign it all the relevant values.

```ts
type Org = {
    name: string
}

const organization: Org = {
    name: "Freecodecamp"
}
```

See the [TypeScript playground](https://www.typescriptlang.org/play?#code/C4TwDgpgBA8gTgcygXigbwFBW1AdgQwFsIAuKAZ2DgEtcEMBfDDAYwHtdKo3F9dqAXvmDUOZeElSYceIqSgAiAGJwIEdgBN1RMAsbMDQA).

This removes every surprise.

You’re clearly stating what this object type is and rightly declaring all relevant properties when you create the object.

However, this is not always feasible if the object properties must be added dynamically.

### 2\. Use an object index signature

Occasionally, the properties of the object truly need to be added at a later time than when declared.

In this case, you can leverage the object index signature as follows:

```ts
type Org = {[key: string] : string}

const organization: Org = {}

organization.name = "Freecodecamp"
```

See the [TypeScript playground](https://www.typescriptlang.org/play?#code/C4TwDgpgBA8gTgcygXigbwNoGsIgFxQDOwcAlgHYIC6UBxZlAvgFDMDGA9ucVB4gIblSAL37BSXAvCSo0LZnwSCRYieQB05fgFtoqAEQAxOBAicAJmZ1h9rO0A).

At the time the `organization` variable is declared, you go ahead and explicitly type it to the following `{[key: string] : string}`.

To explain the syntax further, you might be used to object types having fixed property types:

```ts
type obj = {
  name: string
}
```

But you can also substitute `name` for a “variable type”.

For example, if you want to define any string property on `obj`:

```ts
type obj = {
 [key: string]: string
}
```

Note that the syntax is similar to how you’d use a variable object property in standard JavaScript:

```ts
const variable = "name" 

const obj = {
   [variable]: "Freecodecamp"
}
```

The TypeScript equivalent is called an object index signature.

Also, note that you could type `key` with other primitives:

```ts
// number 
type Org = {[key: number] : string}

// string 
type Org = {[key: string] : string}

//boolean
type Org = {[key: boolean] : string}
```

### 3\. Use the Record utility type

The solution here is quite concise:

```ts
type Org = Record<string, string>

const organization: Org = {}


organization.name = "Freecodecamp"
```

Instead of using a type alias, you can also inline the type:

```ts
const organization: Record<string, string> = {}
```

![image-82](https://www.freecodecamp.org/news/content/images/2022/07/image-82.png)

Using the Record utility type

See the [TypeScript playground](https://www.typescriptlang.org/play?#code/C4TwDgpgBA8gTgcygXigJQgYwPZwCYA8AzsHAJYB2CANFCeVQHwBQzOFJUuCAhhWQC8ewMtgoAuWIhRQA3gF9Wzbn0HDRFAHQUeAW2ioARADE4ELNjxY9YQ0tZA).

The `Record` utility type has the following signature: `Record<Keys, Type>`.

It allows you to constrict an object type whose properties are `Keys` and property values are `Type`.

In our example, `Keys` represents `string` and `Type`, `string` as well.

## Conclusion

Apart from primitives, the most common types you’ll have to deal with are likely object types.

In cases where you need to build an object dynamically, take advantage of the Record utility type or use the object index signature to define the allowed properties on the object.

Note that you can get a [PDF or ePub](https://www.ohansemmanuel.com/cheatsheet/top-7-stack-overflowed-typescript-questions), version of this cheatsheet for easier reference, or for reading on your Kindle or tablet.

Thank you for reading!

## Fancy a Free TypeScript Book?

![image-78](https://www.freecodecamp.org/news/content/images/2022/07/image-78.png)

Build strongly typed Polymorphic React components book

[Get this book for free](https://www.ohansemmanuel.com/books/how-to-build-strongly-typed-polymorphic-react-components).
