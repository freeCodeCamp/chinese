> * 原文地址：[The Definitive TypeScript Handbook](https://www.freecodecamp.org/news/the-definitive-typescript-handbook/)
> * 作者：Gustavo Azevedo
> * 译者：Theoda
> * 校对者：

根据 Stack Overflow 对 90,000 名开发人员 [展开的一项调查][1]，TypeScript 是人们最想学习的工具之一。

在过去几年中，TypeScript 的热门程度、社区规模和使用率都在不断提高。如今，甚至 [Facebook 正将 Jest 项目转移至 TypeScript][2]。

# 什么是 TypeScript？

TypeScript 是 JavaScript 的超集，具有静态类型特性，旨在简化大型 JavaScript 应用程序的开发，也被称为 __JavaScript that scales__（__放大的 JavaScript__）。

## **为什么要用 TypeScript？**

过去几年中 JavaScript 产生了很大影响，成为了同时用于客户端和服务器端的最通用的跨平台语言。

但 JavaScript 本意并不用于大型应用开发。它是一种没有类型系统的动态语言，也就是说，变量的值可以是任何类型（例如字符串或布尔值）。

而类型系统能够提高代码质量和可读性，使代码库更易于维护或重构。更重要的是它可以在编译时就捕获错误，而不是在运行时才捕获。

JavaScript 并没有类型系统，致使同一项目下的大型开发团队很难构建复杂的应用程序。

而 TypeScript 能在编译时检查不同部分代码的正确性。大多数情况下，编译时就能确切地报出错误的位置和问题。如果运行时才发现错误，往往需要跟踪复杂的堆栈，花费大量时间在调试工作上。

## **TypeScript 的优点**

1. 在开发周期中能更早地捕获潜在的错误。
2. 管理大型代码库。
3. 更易于重构。
4. 更易于团队合作：代码的耦合性越强，不同开发人员访问代码库时越不容易造成无意破坏。
5. 文档特性：类型本身就是一种文档信息，提供给未来的你和其他开发者阅读。

## TypeScript 的缺点

1. 需要额外的学习：__需要在短期放缓进度与长期提高效率间进行权衡。__
2. 类型错误可能多种多样。
3. 配置极大地影响运行。

# 类型

## **Boolean (布尔值)** 

```typescript
const isLoading: boolean = false;
```

## **Number (数字)**

```typescript
const decimal: number = 8;
const binary: number = 0b110;
```

## **String (字符串)**

```typescript
const fruit: string = "orange";
```

## **Array (数组)**

数组可以写成下面两种形式：

```typescript
// 最常见的方式
let firstFivePrimes: number[] = [2, 3, 5, 7, 11];
// 不太常见的方式：使用泛型 (稍后介绍)
let firstFivePrimes2: Array<number> = [2, 3, 5, 7, 11];
```

## **Tuple (元组)**

Tuple 类型表示一种组织好的数组，元素的类型预先知道，并且数量固定。这意味着你有可能得到错误提示：

```typescript
let contact: [string, number] = ['John', 954683];
contact = ['Ana', 842903, 'extra argument']  /* Error! 
Type '[string, number, string]' is not assignable to type '[string, number]'. */
```

## **Any (任意值)**

`any` 与类型系统中的任何类型都兼容。意味着可以将任何内容赋值给它，也可以将它赋值给任何类型。它能让你避开类型检查。

```typescript
let variable: any = 'a string';
variable = 5;
variable = false;
variable.someRandomMethod(); /* 行吧，也许运行的时候 someRandomMethod 是存在的 */
```

## **Void (空值)**

`void` 表示没有任何类型。它通常用作没有返回值的函数的返回类型。

```typescript
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName('Heisenberg');
```

## **Never**

`never` 类型表示的是那些永不存在的值的类型。 例如，`never` 类型是那些总是会抛出异常、或者根本就不会有返回值的函数的返回值类型。

```typescript
// 抛出异常
function error(message: string): never {
  throw new Error(message);
}
```

## **Null 和 Undefined**

`undefined` 和 `null` 两者各自有自己的类型分别叫做 `undefined` 和 `null`。和 `void` 相似，它们的本身的类型用处不是很大，但是在联合类型中非常有用 __（稍后介绍）__。 

```typescript
type someProp = string | null | undefined;
```

## **Unknown**

TypeScript 3.0 引入了 unknown (未知) 类型，它是与 `any` 类型对应的安全类型。任何东西都可以赋值给 `unknown`，但 `unknown` 不能赋值给除了它本身和 `any` 以外的任何东西。在没有先断言或指定到更具体类型的情况下，不允许对 `unknown` 进行任何操作。

```typescript
type I1 = unknown & null;    // null
type I2 = unknown & string;  // string
type U1 = unknown | null;    // unknown
type U2 = unknown | string;  // unknown
```

## **类型别名**

类型别名可以为现有类型提供替代名称，以便某些地方使用。构造它的语法如下：

```typescript
type Login = string;
```

## **联合类型**

TypeScript 允许让一个属性具有多种数据类型，名为 union (联合) 类型。

```typescript
type Password = string | number;
```

## **交叉类型**

交叉类型可以将多个成员的类型合并为一个类型。

```typescript
interface Person {
  name: string;
  age: number;
}
interface Worker {
  companyId: string;
}
type Employee = Person & Worker;

```

# Interface (接口)

接口好似你和编译器定义契约，由你指定一个类型，预期它的属性应该是些什么类型。

__边注：接口不受 JavaScript 运行时的特性影响，它只在类型检查中会用到。__

-   可以声明****可选属性****（带有 `?` 标记），意味着接口的对象可能会、也可能不会定义这些属性。
-   可以声明****只读属性****，意味着一旦为属性赋值，就无法更改。

```typescript
interface ICircle {
  readonly id: string;
  center: {
    x: number;
    y: number;
  },
  radius: number;
  color?: string;  // 可选属性
}
const circle1: ICircle = {
  id: '001',
  center: { x: 0 },
  radius: 8,
};  /* Error! Property 'y' is missing in type '{ x: number; }' 
but required in type '{ x: number; y: number; }'. */
const circle2: ICircle = {
  id: '002',
  center: { x: 0, y: 0 },
  radius: 8,
}  // 正确

```

## **扩展接口**

接口可以扩展成另一个接口，或者更多接口。这使得接口的编写更具有灵活性和复用性。

```typescript
interface ICircleWithArea extends ICircle {
  getArea: () => number;
}

```

## 实现接口

实现接口的类需要严格遵循接口的结构。

```typescript
interface IClock {
  currentTime: Date;
  setTime(d: Date): void;
}

```

# **枚举**

`enum` (枚举) 用来组织一组的相关值，这些值可以是数值，也可以是字符串值。

```typescript
enum CardSuit {
  Clubs,
  Diamonds,
  Hearts,
  Spades
}
let card = CardSuit.Clubs;

```

默认情况下，枚举的本质是数字。`enum` 的取值从 0 开始，以 1 递增。

上一个例子所生成的 JavaScript 代码如下：

```typescript
var CardSuit;
(function (CardSuit) {
  CardSuit[CardSuit["Clubs"] = 0] = "Clubs";
  CardSuit[CardSuit["Diamonds"] = 1] = "Diamonds";
  CardSuit[CardSuit["Hearts"] = 2] = "Hearts";
  CardSuit[CardSuit["Spades"] = 3] = "Spades";
})(CardSuit || (CardSuit = {}));
/**

```

或者，枚举可以用字符串值来初始化，这种方法更易读。

```typescript
enum SocialMedia {
Facebook = 'FACEBOOK',
Twitter = 'TWITTER',
Instagram = 'INSTAGRAM',
LinkedIn = 'LINKEDIN'
}
```

## 反向映射

`enum` 支持反向映射，也就是说，可以通过值来获得成员、成员名。 

回顾之前 CardSuit 的例子：

```typescript
const clubsAsNumber: number = CardSuit.Clubs; // 3
const clubsAsString: string = CardSuit[0];    // 'Clubs'
```

# **函数**

你可以为每个参数指定一个类型，再为函数指定一个返回类型。

```typescript
function add(x: number, y: number): number {
return x + y;
}
```

## 函数重载

TypeScript 允许声明 __函数重载__。简单来说，可以使用多个名称相同但参数类型和返回类型不同的函数。参考下面的例子：

```typescript
function padding(a: number, b?: number, c?: number, d?: any) {
if (b === undefined && c === undefined && d === undefined) {
  b = c = d = a;
}
else if (c === undefined && d === undefined) {
  c = a;
  d = b;
}
return {
  top: a,
  right: b,
  bottom: c,
  left: d
};
}
```

参数的含义根据传递给函数的参数数量而变化。此外，该函数只接受一个、两个或四个参数。要构造函数重载，只需多次声明函数头就可以了。最后一个函数头真正实现了函数体，但函数外部并不能直接调用最后一个函数头。

```typescript
function padding(all: number);
function padding(topAndBottom: number, leftAndRight: number);
function padding(top: number, right: number, bottom: number, left: number);
function padding(a: number, b?: number, c?: number, d?: number) {
if (b === undefined && c === undefined && d === undefined) {
  b = c = d = a;
}
else if (c === undefined && d === undefined) {
  c = a;
  d = b;
}
return {
  top: a,
  right: b,
  bottom: c,
  left: d
};
}


```

# **类**

你可以指定属性的类型和方法参数的类型。

```typescript
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet(name: string) {
    return Hi </span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span>name<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">, </span><span class="token interpolation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline;"><span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">${</span><span class="token keyword" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(0, 119, 170);">this</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>greeting<span class="token interpolation-punctuation punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">}</span></span><span class="token string" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">;
  }
}
```

## **访问修饰符**

Typescript 支持 `public` (公有),  `private` (私有),  `protected` (保护)  修饰符，它们决定了类成员的可访问性。

-   `public` (公有) 成员和纯 JavaScript 的成员一样，是默认的修饰符。
-   `private` (私有) 成员对外界来说不可访问。
-   `protected`(保护) 成员和私有成员的区别在于，它能够被继承类访问。

```markdown
| 具有访问权限     | public | protected | private |
| :------------- | :----: | :-------: | :-----: |
| 类本身          |   yes  |    yes    |   yes   |
| 派生类          |   yes  |    yes    |    no   |
| 类实例          |   yes  |     no    |    no   |
```

## **只读修饰符**

`readonly` (只读) 变量必须在它声明或构造时初始化。

```typescript
class Spider {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor (theName: string) {
    this.name = theName;
  }
}
```

## **参数属性**

__参数属性__  可以放在一个地方创建并初始化成员。它通过给构造函数参数添加一个访问限定符来声明。

```typescript
class Spider {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {
  }
}
```

## **抽象**

abstract (抽象) 这个关键字可以用在抽象类上，也可以用在抽象类方法上。

-   ****抽象类****  不会直接被实例化。抽象类主要用于继承，继承抽象类必须实现它所有的抽象方法。
-   ****抽象成员****  不包含具体实现，因此不能被直接访问。这些成员必须在派生类中实现。 __(类似接口)__

# **类型断言**

TypeScript 允许你以任何方式覆盖其推断的类型。当你比编译器本身能更好地理解变量类型时，可以使用它。

```typescript
const friend = {};
friend.name = 'John';  // Error! Property 'name' does not exist on type '{}'
interface Person {
  name: string;
  age: number;
}

```

最初，类型断言的语法是 `<type>`

```typescript
let person = <Person> {};
```

但这在 JSX 中使用时产生了歧义。因此建议使用 `as` 代替。

类型断言通常在从 JavaScript 迁移代码时使用，你对变量的类型了解可能比当前指派的更准确。

但断言也会 **被认为有害。**

我们来看看上一个示例中的 Person 接口，你注意到了什么问题吗？如果你注意到丢失了 ****age**** 属性，恭喜，你对了！编译器可能会帮助你自动完成 Person 的属性，但如果您遗漏了任何属性，它也不会报错。

# **类型推断**

当没有可用的显式的类型信息时，TypeScript 会推断变量类型。

```typescript
/**

变量声明
/
let a = "some string";
let b = 1;
a = b;  // Error! Type 'number' is not assignable to type 'string'.

// 如果是复杂的对象，TypeScript 会用最常见的类型
// 来推断对象类型。
const arr = [0, 1, false, true];  // (number | boolean)[]
/**

```

# **类型兼容性**

类型兼容性是基于结构类型的，结构类型只使用其成员来描述类型。

结构化类型系统的基本规则是：如果 `x` 要兼容 `y`，那么 `y` 至少具有与 `x` 相同的属性。

```typescript
interface Person {
name: string;
}

let x: Person;  // 正确，尽管不是Person接口的实现
let y = { name: 'John', age: 20 };  // type { name: string; age: number }
x = y;

```

由于 `y` 有一个成员 `name: string` 匹配 Person 接口所需的属性，这意味着 `x` 是 `y` 的子类型。因此这个赋值是合法的。

## _函数_

****参数数量****  
在函数调用中，至少需要传入足够的参数，多余的参数不会导致任何错误。

```typescript
function consoleName(person: Person) {
  console.log(person.name);
}
consoleName({ name: 'John' });           // 正确
consoleName({ name: 'John', age: 20 });  // 多余的参数也合法
```

****返回值类型****  
返回值类型必须至少包含足够的数据。

```typescript
let x = () => ({name: 'John'});
let y = () => ({name: 'John', age: 20 });
x = y;  // 正确
y = x;  /* Error! Property 'age' is missing in type '{ name: string; }'
but required in type '{ name: string; age: number; }' */
```

# **类型保护**

类型保护可以在条件块中缩小对象类型的范围。

## **typeof**

在条件里使用 typeof，编译器会知道变量的类型会不一致。在下面的示例中，TypeScript 会知道：在条件块之外，`x` 可能是布尔值，而布尔值上无法调用函数 `toFixed`。

```typescript
function example(x: number | boolean) {
  if (typeof x === 'number') {
    return x.toFixed(2);
  }
  return x.toFixed(2); // Error! Property 'toFixed' does not exist on type 'boolean'.
}
```

## **instanceof**

```typescript
class MyResponse {
  header = 'header example';
  result = 'result example';
  // ...
}
class MyError {
  header = 'header example';
  message = 'message example';
  // ...
}
function example(x: MyResponse | MyError) {
  if (x instanceof MyResponse) {
    console.log(x.message); // Error! Property 'message' does not exist on type 'MyResponse'.
    console.log(x.result);  // 正确
  } else {
    // TypeScript 知道这里一定是 MyError
<span class="token builtin" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">console</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">log</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>x<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>message<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">;</span> <span class="token comment" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(112, 128, 144);">// Okay</span>
<span class="token builtin" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">console</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">log</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>x<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>result<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">;</span>  <span class="token comment" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(112, 128, 144);">// Error! Property 'result' does not exist on type 'MyError'.</span>
```

## **in**

`in` 运算符会检查一个属性在某对象上是否存在。

```typescript
interface Person {
  name: string;
  age: number;
}
const person: Person = {
  name: 'John',
  age: 28,
};

```

# **Literal Types (字面量类型)**

字面量正是 JavaScript 原始数据类型具体的值，它们可以与 union (联合) 类型搭配使用，构造一些实用的概念。

```typescript
type Orientation = 'landscape' | 'portrait';
function changeOrientation(x: Orientation) {
  // ...
}
changeOrientation('portrait'); // 正确
changeOrientation('vertical'); /* Error! Argument of type '"vertical"' is not 
assignable to parameter of type 'Orientation'. /
```

## _**条件类型**_

_条件类型表示类型关系的测试，并根据测试的结果选择两种可能类型中的一种。_

_`type X = A extends B ? C : D;`_

_如果 `A` 类型可以赋值给 `B` 类型，那么 `X` 是 `C` 类型；否则 `X`  是 `D` 类型。_

# _**泛型**_

_泛型是必须包含或引用其他类型才能完成的类型。它加强了变量之间有意义的约束。
下面例子中的函数会返回所传入的任何类型的数组。_

_`function reverse<T>(items: T[]): T[] {
  return items.reverse();
}
reverse([1, 2, 3]); // number[]
reverse([0, true]); // (number | boolean)[]`_

## _**keyof**_

_`keyof` 运算符会查询给定类型的键集。_

_`interface Person {
  name: string;
  age: number;
}
type PersonKeys = keyof Person; // 'name' | 'age'`_

## _**映射类型**_

_映射类型，通过在属性类型上建立映射，从现有的类型创建新类型。具有已知类型的每个属性都会根据你指定的规则进行转换。_

## _**Partial**_

_`type Partial<T> = {
  [P in keyof T]?: T[P];
}`_

-   _泛型 Partial 类型被定义时只有一个类型参数 `T`。_
-   _`keyof T` 表示所有 `T` 类型属性的名字（字符串字面类型）的联合。_
-   _`[P in keyof T]?: T[P]` 表示所有 `T` 类型的属性 `P` 的类型都应该是可选的，并且都会被转换为 `T[P]`。_
-   _`T[P]`  表示 `T` 类型的属性 `P` 的类型。_

## _**Readonly (只读)**_

_正如在接口部分中所介绍的，TypeScript 中可以创建只读属性。 `Readonly` 类型接受一个类型 `T`，并将其所有属性设置为只读。_

_`type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};`_

## _**Exclude**_

_`Exclude` 可以从其他类型中排除某些类型。排除的是可以赋值给 `T` 的属性。_

_`/*`_

 `-   type Exclude<T, U> = T extends U ? never : T;
-   /
    type User = {
    _id: number;
    name: string;
    email: string;
    created: number;
    };` 

`type UserNoMeta = Exclude<keyof User, '_id' | 'created'>`

## **Pick**

`Pick` 可以从其他类型中选取某些类型。 挑选的是可以赋值给 `T` 的属性。

```typescript
/**

```

## _infer_

你可以使用 `infer` 关键字来推断条件类型的 `extends` 子句中的类型变量。这样的推断类型变量只能用于条件类型的 true 分支。

## **ReturnType**

获取函数的返回类型。

```typescript
/**
原版的 TypeScript's ReturnType
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
/
type MyReturnType<T> = T extends (...args: any) => infer R ? R : any;


```

我们来拆解 `MyReturnType`：

-   `T` 的返回类型是 ...
-   首先，`T` 是不是一个函数？
-   如果是，那么类型解析为推断出的返回类型 `R`；
-   如果不是，类型解析为 `any`。

# 参考资料与实用链接

[https://basarat.gitbooks.io/typescript/][3]

[https://www.typescriptlang.org/docs/home.html][4]

[https://www.tutorialsteacher.com/typescript][5]

[https://github.com/dzharii/awesome-typescript][6]

[https://github.com/typescript-cheatsheets/react-typescript-cheatsheet][7]

---

为了达到学习和实践 TypeScript 的目的，我用 TS 和 React-Native（用了 hooks）构建了一个简单的 CurrencyConverter (汇率转换) 程序。你可以在 [这里][8] 查看这个项目。

感谢、祝贺你阅读到这里！如果你对此有任何想法，请随时发表评论。

你可以在 [Twitter][9] 上找到我。

[1]: https://insights.stackoverflow.com/survey/2019#most-loved-dreaded-and-wanted
[2]: https://github.com/facebook/jest/pull/7554#issuecomment-454358729
[3]: https://basarat.gitbooks.io/typescript/
[4]: https://www.typescriptlang.org/docs/home.html
[5]: https://www.tutorialsteacher.com/typescript
[6]: https://github.com/dzharii/awesome-typescript
[7]: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet
[8]: https://github.com/gustavoaz7/React-Native_Learning/tree/master/CurrencyConverter
[9]: https://twitter.com/intent/follow?screen_name=gustavoaz7_
