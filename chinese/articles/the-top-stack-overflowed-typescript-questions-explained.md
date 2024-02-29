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

## 目录

1. [TypeScript 中的接口(interfaces)与类型(Types)之间有什么区别？](./#1-what-is-the-difference-between-interfaces-vs-types-in-typescript)
2. [在 TypeScript 中，什么是 ! 操作符？](./#2-in-typescript-what-is-the-exclamation-mark-bang-operator)
3. [TypeScript 中的".d.ts "文件是什么？](./#3-what-is-a-d-ts-file-in-typescript)
4. [如何在 TypeScript 中明确设置 window 的新属性？](./#4-how-do-you-explicitly-set-a-new-property-on-window-in-typescript)
5. [强类型函数作为参数在 TypeScript 中是否可行？](./#5-are-strongly-typed-functions-as-parameters-possible-in-typescript)
6. [如何修复无法找到模块的声明文件...？](./#6-how-to-fix-could-not-find-declaration-file-for-module-)
7. [如何在 TypeScript 中为对象动态分配属性？](./#7-how-do-i-dynamically-assign-properties-to-an-object-in-typescript)

****注意:**** 你可以得到这份手册的 [PDF 或 ePub](https://www.ohansemmanuel.com/cheatsheet/top-7-stack-overflowed-typescript-questions) 版本，以方便参考或在你的 Kindle 或平板电脑上阅读。

![image-51](https://www.freecodecamp.org/news/content/images/2022/07/image-51.png)

[PDF 或 Epub 版本的手册下载地址](https://www.ohansemmanuel.com/cheatsheet/top-7-stack-overflowed-typescript-questions)

<h2 id="1-what-is-the-difference-between-interfaces-vs-types-in-typescript">TypeScript中的接口(interfaces)与类型(Types)之间有什么区别？</h2>

![image-52](https://www.freecodecamp.org/news/content/images/2022/07/image-52.png)

Typescript 中的 Interfaces（接口） 与 Types（类型） 的对比  

interfaces vs types (技术上来说，是 type alias) 是一个充满争议的问题。

在开始使用 TypeScript 时，你可能会发现有选择上很困惑。这篇文章消除这种困惑，并帮助你选择适合你的方式。

## TL;DR

在许多情况下，你可以交替使用 interface 或者 type alias。

interface 的大部分功能可以通过 type aliases 来实现, 只是你不能通过重新声明类型（re-declaring）来给它增加新的属性（properties）。你必须使用一个交叉类型（intersection type）。

## 为什么一开始就对类型(Types)与接口(Interfaces)产生了混淆？

每当我们面临多种选择时，大多数人都会开始面对 [选择悖论（paradox of choice）](https://en.wikipedia.org/wiki/The_Paradox_of_Choice)。

在这种情况下，只有两个选项。

这有什么好困惑的？

好吧，这里的主要混淆源于这两个选项在大多数方面是如此 ****势均力敌****。

这使得你很难做出一个明确的选择，尤其是当你刚刚开始使用 Typescript 的时候。

## 类型别名(Type Alias)与接口(Interface)的一个基本例子

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

## 类型别名(Type Alias)和接口(Interfaces)之间的区别

以下是 type alias 和 interface 的主要区别:

### 关键区别：接口(Interfaces)只能描述 object shapes。类型别名(Type aliases)可用于其他类型(other types)，如 primitives, unions 和 tuples

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

### 关键区别：一个接口可以通过多次声明来进行扩展

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


### 小小的区别：类型别名和接口都可以被扩展，但语法不同
对于 interfaces，你使用`extends`关键字。对于 types, 你必须使用一个交叉（intersection）.

思考一下下面的例子:

#### 类型别名扩展了一个类型别名

```ts

type HumanWithName = {
  name: string 
}

type Human = HumanWithName & {
   legs: number 
   eyes: number 
}
```

#### 类型别名扩展了一个接口
```ts
interface HumanWithName {
  name: string 
}

type Human = HumanWithName & {
   legs: number 
   eyes: number 
} 
```

#### 接口扩展了一个接口

```ts
interface HumanWithName {
  name: string 
}

interface Human extends HumanWithName {
  legs: number 
  eyes: number 
}
```

#### 接口扩展了一个类型别名

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

### 小区别：类只能实现静态已知的成员

 class 可以同时实现 interfaces 或者 type aliases。然而，不能实现（implement）或扩展（extend）一个联合类型（union type）。

请看下面的例子:

#### 类实现了一个接口

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

#### 类实现了一个类型别名

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

#### 类实现了一个联合类型

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

## 类型别名与接口的总结

你的想法可能不同，但只要有可能，我都坚持使用 type aliases，因为它们的灵活性和语法更简单。也就是说，除非我特别需要一个接口（interface）的功能，否则我选择 type aliases。

在大多数情况下，你也可以根据你的个人偏好来决定，但要与你的选择保持一致，至少在一个特定的项目中。

我必须补充一点，在需要考虑性能的情况下，interface 比较检查可能比 type aliases 更快。但我还没有发现使用 type aliases ，导致性能问题。

<h2 id="2-in-typescript-what-is-the-exclamation-mark-bang-operator">在 TypeScript 中，什么是 ! 操作符？</h2>

![image-56](https://www.freecodecamp.org/news/content/images/2022/07/image-56.png)

TypeScript 中的 bang 运算符是什么？

## TL;DR

这个`！` 在技术上被称为 ****非空的断言操作符(non-null assertion operator)****。如果 TypeScript 编译器警告一个值是 `null`或 `undefined`，你可以使用`！`操作符来断言该值不是 `null` 或 `undefined`。

个人观点：尽可能避免这样做。

## 什么是非空断言操作符（Non-Null Assertion Operator）？

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

## `！`运算符的陷阱（以及如何不使用它）

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

### 解决方案 1：寻找替代修复方法

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

### 解决方案 2：明确地抛出一个错误

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

## 隐性断言（Implicit Assertion）是什么

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

## 总结

TypeScript 2.0 发布了 **_non-null assertion operator (非空断言操作符)_**。 是的，它已经存在了一段时间（[发布于 2016 年](https://github.com/microsoft/TypeScript/releases/tag/v2.0.3)）。在撰写本文时，TypeScript 的最新版本是 `v4.7`。

如果 TypeScript 编译器警告一个值是 `null` 或 `undefined` ，你可以使用 `！` 操作符来断言上述值不是 `null` 或 `undefined`。

只有在你确定是这样的情况下才这样做。

甚至更好的是，继续添加你自己的断言，或尝试找到一个替代的解决方案。

有些人可能会说，如果你每次都需要使用 **_non-null assertion operator (非空断言操作符)_**，那就说明你通过 TypeScript 控制你的应用程序状态的能力很差。

我同意这个观点。

<h2 id="3-what-is-a-d-ts-file-in-typescript">TypeScript中的".d.ts "文件是什么？</h2> 

![image-63](https://www.freecodecamp.org/news/content/images/2022/07/image-63.png)

What is a d.ts file?

## TL;DR

`.d.ts`文件被称为类型声明文件。它们的存在只有一个目的：描述一个现有模块（module）的类型特征(shape)，它们只包含用于类型检查的类型信息。

## TypeScript 中的`.d.ts`文件介绍

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

## 一个关于".d.ts "文件的简单例子

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

## 内置类型定义

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

## TypeScript 的外部类型定义

那些没有内置的 API 怎么办？

有许多`npm`包可以做任何你想做的事情。

有没有办法让 TypeScript 也能理解上述模块的相关类型关系？

嗯，答案是肯定的。

通常有两种方式，一个库的作者可以做到这一点。

### 类型打包

在这种情况下，库的作者已经将类型声明文件作为包的一部分打包（Bundled）在一起。

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

## 如何编写你自己的声明文件

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

这将声明该模块为`any`类型。

我们不会得到任何 TypeScript 对该模块的支持，但你已经消除了 TypeScript 的警告。

理想的下一步包括在模块的公共资源库中打开一个问题，包括一个 TypeScript 声明文件，或者自己写一个合适的文件。

## 总结

下次你想，哇，TypeScript 真了不起。请记住，这种了不起的成就有很大一部分是由于幕后的英雄：类型声明文件（type declaration files）。

现在你明白它们是如何工作的了吧！

<h2 id="4-how-do-you-explicitly-set-a-new-property-on-window-in-typescript">如何在TypeScript中明确设置 window 的新属性？</h2>

![image-70](https://www.freecodecamp.org/news/content/images/2022/07/image-70.png)

在 window 对象上设置一个新属性（new property）？

## TL;DR

为`Window`对象扩展（extend）现有的接口声明。

## TypeScript 中的 "window "简介

知识建立在知识之上。

这是对的。

在本节中，我们将建立在前两节的知识基础上:

- [TypeScript 中的接口与类型对比](https://blog.ohansemmanuel.com/interfaces-vs-types-in-typescript/)
- [什么是 TypeScript 中的 d.t.s 文件？](https://blog.ohansemmanuel.com/what-is-a-dts-file-in-typescript/)?

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

## 如何修复该错误

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

没有错误了!

![image-74](https://www.freecodecamp.org/news/content/images/2022/07/image-74.png)

解决问题的方案

查看 [TypeScript playground](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgOqgCYHsDuyDeAUMsgPqkCyAmqQIIAK9AMgJIDCtAKiwPIBypPrQoBRcgC5kAZzBRQAc0IBfQoRyZcAOnLU6jVh279BwsaWQBeZACIYUCBARYMjuAFsADtdVOQUrAA2EJoBWPIAFOog2DjalDQMzOxcvAJCouQAlEA).

记住，类型（types）和接口（interfaces）的一个关键区别是，接口可以通过多次声明来扩展(extended)。

我们在这里所做的是再一次声明了 `Window`接口，因此扩展了(extending)接口声明。

### 一个现实世界的解决方案

我在 TypeScript playground 解决了这个问题，向你展示了最简单的解决方案，这就是关键所在。

不过，在现实世界中，你不会在你的代码中扩展接口。

那么，你应该怎么做呢？

也许，给它一个猜测？

是的，你很接近……，也可能是正确的。

创建一个类型定义文件!

例如，创建一个`window.d.ts`文件，内容如下:

```ts
interface Window {
  __MY_APPLICATION_NAME__: string
}
```

然后就可以了。

你已经成功地扩展了`Window`接口并解决了问题。

如果你继续给`__MY_APPLICATION_NAME__属性分配了错误的值类型，你现在已经启用了强类型检查。

![image-75](https://www.freecodecamp.org/news/content/images/2022/07/image-75.png)

对新定义的属性进行错误的赋值，将会有警告。

查看 [TypeScript playground](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgOqgCYHsDuyDeAUMsgPqkCyAmqQIIAK9AMgJIDCtAKiwPIBypPrQoBRcgC5kAZzBRQAc0IBfQoRyZcAOnLU6jVh279BwsaWQBeAsWQg4AWwiSARDCgQICLBk8OADs7Kql4gUlgANhCa4VjyABTqINg42pQ0DMzsXLwCQqLkAJSqxUA).

## 总结

在 [旧的 stack overflow 帖子](https://stackoverflow.com/questions/12709074/how-do-you-explicitly-set-a-new-property-on-window-in-typescript),你会发现基于旧的 TypeScript 版本会方案更复杂。

在新版 TypeScript 中，该解决方案更容易。

现在你知道了。 😉

<h2 id="5-are-strongly-typed-functions-as-parameters-possible-in-typescript">强类型函数作为参数在TypeScript中是否可行？</h2>

## TL;DR

这个问题不需要过多的解释。简短的回答是肯定的。

函数可以被强类型化--甚至作为其他函数的参数。

## 简介

我必须说，与本文的其他部分不同，在我早期的 TypeScript 时代，我从未真正发现自己在寻找这个。

然而，这并不是最重要的。

这是一个经过精心研究的问题，所以让我们来回答它吧!

## 如何在 TypeScript 中使用强类型的函数参数

这个[stack overflow post](https://stackoverflow.com/questions/14638990/are-strongly-typed-functions-as-parameters-possible-in-typescript)上的公认答案是正确的，在一定程度上。

假设你有一个函数: `speak`:

```ts
function speak(callback) {
  const sentence = "Hello world"
  alert(callback(sentence))
}
```

它接收一个 `callback`，在内部用一个 `string` 来调用。

为了打这个字，继续用一个函数类型的别名来表示 `callback`。:

```ts
type Callback = (value: string) => void
```

并敲下 `speak` 函数，如下所示:

```ts
function speak(callback: Callback) {
  const sentence = "Hello world"
  alert(callback(sentence))
}
```

另外，你也可以将该保持类型内联（type inline）:

```ts
function speak(callback: (value: string) => void) {
  const sentence = "Hello world"

  alert(callback(sentence))
}
```

查看 [TypeScript playground](https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABAZwA4FMCGBrAFBTAG0ICNMJsAuRXANyJHWuSgCcYwBzASkQF4AfIlpwYAE14BvAFCJEEBCxTowUFRHT9EAIgAS6YnEQB3OK0Jjt02YiLpWUfEVLk8yFWsjpu3aQF9rQOkgA).

这就是了!

你使用了一个强类型的函数作为参数。

## 如何处理没有返回值的函数

例如，参考的堆栈溢出帖子中接受的答案说  _回调参数的类型必须是_ "function that accepts a number and returns type any. (接收数字并返回任何类型的函数)"

这部分是正确的，但是返回类型不一定是`any`。

事实上，不要使用 `any`。

如果你的函数返回一个值，请继续并适当地输入它:

```ts
// 回调返回一个对象
type Callback = (value: string) => { result: string }
```

If your callback returns nothing, use `void` not `any`:

```ts
// 回调不返回一个对象
type Callback = (value: string) => void
```

注意，你的函数类型的签名（signature of your function type）应该是:

```ts
(arg1: Arg1type, arg2: Arg2type) => ReturnType
```

其中`Arg1type`是参数`arg1`的类型，`Arg2type`是参数`arg2`的类型，而`ReturnType`是你的函数的返回类型。

## 总结

JavaScript 中传递数据的主要手段是函数。

TypeScript 不仅允许你指定函数的输入和输出，而且你还可以将函数作为其他函数的参数。

去吧，放心地使用它们。

<h2 id="6-how-to-fix-could-not-find-declaration-file-for-module-">如何修复无法找到模块的声明文件...？</h2>

对于 TypeScript 初学者来说，这是一个常见的挫折来源。

然而，你知道如何解决这个问题吗？

是的，你知道!

我们在 `what is  d.ts` 一节中看到了这个问题的解决方案。

## TL;DR

创建一个声明文件，例如 `untyped-module.d.ts`，其内容如下：`declare module "ste-untyped-module";` 注意，这将明确地将模块类型为`any`。

## 解释解决方案

如果你不记得如何解决这个问题，你可以重新阅读写声明文件一节。

根本原因，你有这个错误是因为相关的库没有它的类型，并且在 [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/) 上没有一个类型定义文件。

这就给你留下了一个解决方案：编写你自己的声明文件。

例如，如果你在项目中安装了库`untyped-module`，`untyped-module`没有引用的类型定义文件，所以 TypeScript 会警告。

为了消除这个警告，在你的项目中创建一个新的`untyped-module.d.ts`文件，内容如下:

```ts
declare module "some-untyped-module";
```

这将声明该模块为 `any` 类型。

你不会得到任何 TypeScript 对该模块的支持，但你已经消除了 TypeScript 的警告。

下一步包括在模块的公共仓库中开一个 issue，以包括一个 TypeScript 声明文件，或者自己写一个像样的文件（超出本文的范围）。

<h2 id="7-how-do-i-dynamically-assign-properties-to-an-object-in-typescript">如何在TypeScript中为对象动态分配属性？</h2>

![image-76](https://www.freecodecamp.org/news/content/images/2022/07/image-76.png)

在 Typescript 中动态地给对象分配属性

## TL;DR

如果你不能在声明时定义变量类型，请使用 `Record` utility 类型或对象索引签名。

## 简介

请思考以下例子:

```ts
const organization = {}

organization.name = "Freecodecamp"
                                                                                                            
```

这段看似无害的代码在动态分配`name`给`organization`对象时抛出一个 TypeScript 错误。

![image-80](https://www.freecodecamp.org/news/content/images/2022/07/image-80.png)

动态添加新属性时出现的 Typescript 错误

查看 [Typescript playground](https://www.typescriptlang.org/play?#code/MYewdgzgLgBCBOBzAhmAlgL2VN4YF4YBvAXwCgyEV0sdwA6MZAWwFMCYAiAMXlddAATASwAOnCjCnSZsufIWKlylarXqZFIA)

如果你是 TypeScript 的初学者，会感到困惑，也许是有道理的，那就是看似简单的东西在 TypeScript 中怎么会成为问题？

## 理解问题

一般来说，TypeScript 在声明变量时确定其类型，并且这个确定的类型不会改变，也就是在你的应用程序中应该保持不变。

在考虑类型缩小或使用 any 类型时，此规则有例外，但这是要记住的一般规则。

在前面的示例中，`organization` 对象声明如下:

```ts
const organization = {}
```

没有为 `organization` 变量指定明确的类型，所以 TypeScript 根据声明推断 `organization` 的类型为 `{}`，即字面的空对象（iteral empty object）。

例如，如果你添加一个类型别名（type alias），你可以在 `organization` 的类型上进行尝试:

```ts
type Org = typeof organization
```

![image-81](https://www.freecodecamp.org/news/content/images/2022/07/image-81.png)

探索字面对象类型

查看 [TypeScript playground](https://www.typescriptlang.org/play?#code/MYewdgzgLgBCBOBzAhmAlgL2VN4YF4YBvAXwCgyoBPABwFMYB5JAma+kAMziVU21xgKCFOiw5wAOjDIAtg0IAiAGLw6dUABMNcmoooxDR4ydNnzFy1es3bd4xSA).

当你试图在这个空对象的字面意义上引用`name` prop 时:

```ts
organization.name = ...
```

TypeScript 大喊。

> `{}`类型上不存在 `name` 属性。

当你理解了这个问题后，这个错误确实该发生。

让我们来解决这个问题。

## 如何解决该错误

有许多方法可以解决这里的 TypeScript 错误。让我们考虑一下这些:

### 1\. 在声明时明确地输入对象

这是最容易推理的解决方案。

在你声明对象的时候，去输入它。此外，给它分配所有相关的值。

```ts
type Org = {
    name: string
}

const organization: Org = {
    name: "Freecodecamp"
}
```

查看 [TypeScript playground](https://www.typescriptlang.org/play?#code/C4TwDgpgBA8gTgcygXigbwFBW1AdgQwFsIAuKAZ2DgEtcEMBfDDAYwHtdKo3F9dqAXvmDUOZeElSYceIqSgAiAGJwIEdgBN1RMAsbMDQA).

这就消除了所有的警告。

有时，对象的属性确实需要在声明时之后添加。

然而，如果必须动态地添加对象的属性，这并不总是可行的。

### 2\. 使用一个对象索引签名

偶尔，对象的属性确实需要在比声明时更晚的时间被添加。

在这种情况下，你可以利用对象索引签名，如下所示:

```ts
type Org = {[key: string] : string}

const organization: Org = {}

organization.name = "Freecodecamp"
```

查看 [TypeScript playground](https://www.typescriptlang.org/play?#code/C4TwDgpgBA8gTgcygXigbwNoGsIgFxQDOwcAlgHYIC6UBxZlAvgFDMDGA9ucVB4gIblSAL37BSXAvCSo0LZnwSCRYieQB05fgFtoqAEQAxOBAicAJmZ1h9rO0A).

在声明 `organization` 变量时，您继续并将其显式键入到以下 `{[key: string] : string}`。

为了进一步解释语法，您可能习惯于具有固定属性类型的对象类型:

```ts
type obj = {
  name: string
}
```

但你也可以用 `name` 代替 `variable type(变量类型)`。

例如，如果你想在 `obj` 上定义任何字符串属性：:

```ts
type obj = {
 [key: string]: string
}
```

请注意，语法类似于您在标准 JavaScript 中使用变量对象属性的方式:

```ts
const variable = "name" 

const obj = {
   [variable]: "Freecodecamp"
}
```

TypeScript 等效项 (equivalent)称为对象索引签名。

另外，请注意，您可以使用其他原语(other primitives)键入 `key`：:

```ts
// number 
type Org = {[key: number] : string}

// string 
type Org = {[key: string] : string}

//boolean
type Org = {[key: boolean] : string}
```

### 3\. Use the Record utility type

这里的解决方案非常简洁:

```ts
type Org = Record<string, string>

const organization: Org = {}


organization.name = "Freecodecamp"
```

除了使用类型别名(type alias)，您还可以内联类型(inline the type)

```ts
const organization: Record<string, string> = {}
```

![image-82](https://www.freecodecamp.org/news/content/images/2022/07/image-82.png)

使用 Record utility type

查看 [TypeScript playground](https://www.typescriptlang.org/play?#code/C4TwDgpgBA8gTgcygXigJQgYwPZwCYA8AzsHAJYB2CANFCeVQHwBQzOFJUuCAhhWQC8ewMtgoAuWIhRQA3gF9Wzbn0HDRFAHQUeAW2ioARADE4ELNjxY9YQ0tZA).

 `Record` utility type 有以下签名: `Record<Keys, Type>`.

它允许你约束一个对象类型，其属性是`Keys`，属性值是`Type`。

在我们的例子中，`Keys` 代表 `string`，`Type` 也代表`string`。

## 总结

除了原语(primitives)之外，您必须处理的最常见的类型可能是对象类型。

如果您需要动态构建对象，请利用 Record utility type 或使用对象索引签名来定义对象上允许的属性。

请注意，您可以获得 [PDF 或 ePub](https://www.ohansemmanuel.com/cheatsheet/top-7-stack-overflowed-typescript-questions)，该手册的版本以便于参考，或在您的 Kindle 或平板电脑上阅读。

谢谢你的阅读!

## 想要一本免费的 TypeScript 书籍吗？

![image-78](https://www.freecodecamp.org/news/content/images/2022/07/image-78.png)

构建强类型多态的 React 组件书。

[免费获取这本书](https://www.ohansemmanuel.com/books/how-to-build-strongly-typed-polymorphic-react-components).
