> * 原文地址：[The Definitive TypeScript Handbook](https://www.freecodecamp.org/news/the-definitive-typescript-handbook/)
> * 作者：Gustavo Azevedo
> * 译者：Theoda
> * 校对者：

根据 Stack Overflow 对 90,000 名开发人员 [展开的一项调查][1]，TypeScript 是人们最想学习的工具之一。

在过去几年中，TypeScript 的热门程度、社区规模和使用率都在不断提高。如今，甚至 [Facebook 正将 Jest 项目转移至 TypeScript][2]。

# 什么是 TypeScript？

TypeScript 是具有静态类型特性的 JavaScript 的超集，旨在简化大型 JavaScript 应用程序的开发，也被称为 __JavaScript that scales__（__JavaScript 放大版__）。

## **为什么要用 TypeScript？**

过去几年中 JavaScript 产生了很大影响，成为了同时用于客户端和服务器端的最通用的跨平台语言。

但 JavaScript 本意并不用于大型应用开发。它是一种没有类型系统的动态语言，也就是说，一个变量的值可以是任何类型（例如字符串或布尔值）。

而类型系统能够提高代码质量和可读性，使代码库更易于维护或重构。更重要的是它可以在编译时就捕获错误，而不是在运行时才捕获。

JavaScript 并没有类型系统，致使同一项目下的大型开发团队很难构建复杂的应用程序。

TypeScript 能在编译时检查不同部分代码的正确性。大多数情况下，编译时就能确切地报出错误的位置和问题。如果运行时才发现错误，往往需要跟踪复杂的堆栈，花费大量时间在调试工作上。

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

`any` 与类型系统中的任何和所有类型都兼容。意味着可以将任何内容赋值给它，也可以将它赋值给任何类型。它让你能够逃离类型检查。

```typescript
let variable: any = 'a string';
variable = 5;
variable = false;
variable.someRandomMethod(); /* 行吧，someRandomMethod 也许在运行的时候是存在的。*/
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

`never` 类型表示的是那些永不存在的值的类型。 例如，`never` 类型是那些总是会抛出异常或者根本就不会有返回值的函数的返回值类型。

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

TypeScript 3.0 引入了 unknown (未知) 类型，它是与 `any` 类型对应的安全类型。任何东西都可以赋值给 `unknown`，但是 `unknown` 不能赋值给任何东西，除了它本身和 `any`。在没有先断言或指定到更具体类型的情况下，不允许对 `unknown` 进行任何操作。

```typescript
type I1 = unknown & null;    // null
type I2 = unknown & string;  // string
type U1 = unknown | null;    // unknown
type U2 = unknown | string;  // unknown
```

## **类型别名**

类型别名为现有类型提供替代的名称，以便在某些情况下使用。创建它的语法如下：

```typescript
type Login = string;
```

## **联合类型**

TypeScript 允许让一个属性具有多种数据类型，名为联合类型。

```typescript
type Password = string | number;
```

## **交叉类型**

交叉类型将多个成员的类型合并为一个类型。

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

接口如同你和编译器定义契约，由你指定一个类型，预期它的属性应该是些什么类型。

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

接口可以扩展成另一个接口，或者更多接口。这使得编写接口更具有灵活性和复用性。

```typescript
interface ICircleWithArea extends ICircle {
  getArea: () => number;
}

```

## 实现一个接口

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

默认情况下，枚举的本质就是数字。`enum` 的取值从 0 开始，以 1 递增。

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

`enum` 支持反向映射，也就是说，我们可以通过值来获得成员或成员名。 

回顾之前 CardSuit 的例子：

```typescript
const clubsAsNumber: number = CardSuit.Clubs; // 3
const clubsAsString: string = CardSuit[0];    // 'Clubs'
```

# **函数**

您可以为每个参数指定类型，然后为函数指定一个返回类型。

```typescript
function add(x: number, y: number): number {
return x + y;
}
```

## 函数重载

TypeScript 允许声明 __函数重载__。简单来说，你可以使用多个名称相同但参数类型和返回类型不同的函数。参考下面的例子：

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

参数的含义根据传递给函数的参数数量而变化。此外，该函数只接受一个、两个或四个参数。要创造函数重载，只需多次声明函数头就可以了。最后一个函数头才真正实现了函数体，但函数的外界并不能直接调用它。

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

 - “public”成员与纯JavaScript成员的工作方式相同，是默认修饰符。
 - 无法从包含类的外部访问`private`成员。
 - “protected”成员与私有成员不同，因为它也可以在派生类中访问。

-   `public` (公有) 成员和普通的 JavaScript 成员一样，是默认的修饰符。
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

__参数属性__  放我们在一个地方创建并初始化成员。它通过给构造函数参数添加一个访问限定符来声明。

```typescript
class Spider {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {
  }
}
```

## **抽象**

abstract (抽象) 这个关键字可以用在类上，也可以用作抽象类方法。

-   ****抽象类****  不会直接被实例化。抽象类主要用于继承，继承抽象类必须实现它所有的抽象方法。
-   ****抽象成员****  不包含具体实现，因此不能被直接访问。这些成员必须在派生类中实现。 __(类似接口)__

# **Type Assertion**

TypeScript allows you to override its inferred types in any way you want to. This is used when you have a better understanding of a variable type than the compiler on its own.

```typescript
const friend = {};
friend.name = 'John';  // Error! Property 'name' does not exist on type '{}'
interface Person {
  name: string;
  age: number;
}

```

Originally the syntax for type assertion was <type>

```typescript
let person = <Person> {};
```

But this created an ambiguity when used in JSX. Therefore it is recommended to use  `as`instead.

Type assertion are usually used when migrating code from JavaScript and you may know a more accurate type of the variable than what is currently assigned. But assertion can be  ****considered harmful.****

Let’s take a look at our Person interface from the previous example. Did you notice something wrong? If you noticed the missing property  ****age****, congratulations! The compiler might help you providing autocomplete for properties of Person but it will not complain if you miss any properties.

# **Type Inference**

TypeScript infers types of variables when there is no explicit information available in the form of type annotations.

```typescript
/**

Variable definitinon
/
let a = "some string";
let b = 1;
a = b;  // Error! Type 'number' is not assignable to type 'string'.

// In case of complex objects, TypeScript looks for the most common type
// to infer the type of the object.
const arr = [0, 1, false, true];  // (number | boolean)[]
/**

```

# **Type Compatibility**

Type compatibility is based on structural typing, which relates types based solely on their members.

The basic rule for structural type is that  `x`  is compatible with  `y`  if  `y`  has at least the same members as  `x`.

```typescript
interface Person {
name: string;
}

let x: Person;  // Okay, despite not being an implementation of the Person interface
let y = { name: 'John', age: 20 };  // type { name: string; age: number }
x = y;

```

As  `y`  has a member  `name: string`, it matched the required properties for the Person interface, meaning that  `x`  is a subtype of  `y`. Thus, the assignment is allowed.

## _Functions_

****Number of arguments****  
In a function call you need to pass in at least enough arguments, meaning that extra arguments will not cause any errors.

```typescript
function consoleName(person: Person) {
  console.log(person.name);
}
consoleName({ name: 'John' });           // Okay
consoleName({ name: 'John', age: 20 });  // Extra argument still Okay
```

****Return type****  
The return type must contain at least enough data.

```typescript
let x = () => ({name: 'John'});
let y = () => ({name: 'John', age: 20 });
x = y;  // OK
y = x;  /* Error! Property 'age' is missing in type '{ name: string; }'
but required in type '{ name: string; age: number; }' */
```

# **Type Guard**

Type Guards allow you to narrow down the type of an object within a conditional block.

## **typeof**

Using typeof in a conditional block, the compiler will know the type of a variable to be different. In the following example TypeScript understand that outside the conditional block,  `x`  might be a boolean and the function  `toFixed`  cannot be called on it.

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
    console.log(x.result);  // Okay
  } else {
    // TypeScript knows this must be MyError
<span class="token builtin" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">console</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">log</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>x<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>message<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">;</span> <span class="token comment" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(112, 128, 144);">// Okay</span>
<span class="token builtin" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(102, 153, 0);">console</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span><span class="token function" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(221, 74, 104);">log</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">(</span>x<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">.</span>result<span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">)</span><span class="token punctuation" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(153, 153, 153);">;</span>  <span class="token comment" style="box-sizing: inherit; margin: 0px; padding: 0px; border: 0px; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-family: inherit; font-size: 14px; vertical-align: baseline; color: rgb(112, 128, 144);">// Error! Property 'result' does not exist on type 'MyError'.</span>
```

## **in**

The  `in`  operator checks for the existence of a property on an object.

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

# **Literal Types**

Literals are  __exact__  values that are JavaScript primitives. They can be combined in a type union to create useful abstractions.

```typescript
type Orientation = 'landscape' | 'portrait';
function changeOrientation(x: Orientation) {
  // ...
}
changeOrientation('portrait'); // Okay
changeOrientation('vertical'); /* Error! Argument of type '"vertical"' is not 
assignable to parameter of type 'Orientation'. /
```

## _**Conditional Types**_

_A conditional type describes a type relationship test and selects one of two possible types, depending on the outcome of that test._

_`type X = A extends B ? C : D;`_

_This means that if type  `A`  is assignable to type  `B`, then  `X`  is the same type as  `C`. Otherwise  `X`  is the same as type  `D;`_

# _**Generic Types**_

_Generic type is a type that must include or reference another type in order to be complete. It enforce meaningful constraints between various variables.  
In the following example a function returns an array of whatever type you pass in._

_`function reverse<T>(items: T[]): T[] {
  return items.reverse();
}
reverse([1, 2, 3]); // number[]
reverse([0, true]); // (number | boolean)[]`_

## _**keyof**_

_The  `keyof`  operator queries the set of keys for a given type._

_`interface Person {
  name: string;
  age: number;
}
type PersonKeys = keyof Person; // 'name' | 'age'`_

## _**Mapped Types**_

_Mapped Types allow you to create new types from existing ones by mapping over property types. Each property of the existing type is transformed according to a rule that you specify._

## _**Partial**_

_`type Partial<T> = {
  [P in keyof T]?: T[P];
}`_

-   _The generic Partial type is defined with a single type parameter  `T`._
-   _`keyof T` represents the union of all property names of  `T`  as string literal types._
-   _`[P in keyof T]?: T[P]`  denotes that the type of each property  `P`  of type  `T`should be optional and transformed to  `T[P]`._
-   _`T[P]`  represents the type of the property  `P`  of the type  `T`._

## _**Readonly**_

_As we have covered in the Interface section, TypeScript allows you to create readonly properties. There is a  `Readonly`  type that takes a type  `T`  and sets all of its properties as readonly._

_`type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};`_

## _**Exclude**_

_`Exclude`  allows you to remove certain types from another type.  `Exclude`from  `T`anything that is assignable to  `T`._

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

`Pick`  allows you to pick certain types from another type.  `Pick`  from  `T`anything that is assignable to  `T`.

```typescript
/**

```

## _infer_

You can use the  `infer`  keyword to infer a type variable within the  `extends`clause of a conditional type. Such inferred type variable can only be used in the true branch of the conditional type.

## **ReturnType**

Gets the return type of a function.

```typescript
/**
Original TypeScript's ReturnType
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
/
type MyReturnType<T> = T extends (...args: any) => infer R ? R : any;


```

Let’s break down  `MyReturnType`:

-   The return type of  `T`  is …
-   First of all, is  `T`  a function?
-   If so, then the type resolves to the inferred return type  `R`.
-   Otherwise the type resolves to  `any`.

# References & Useful Links

[https://basarat.gitbooks.io/typescript/][3]

[https://www.typescriptlang.org/docs/home.html][4]

[https://www.tutorialsteacher.com/typescript][5]

[https://github.com/dzharii/awesome-typescript][6]

[https://github.com/typescript-cheatsheets/react-typescript-cheatsheet][7]

---

In order to study and give TypeScript a try I’ve build a simple CurrencyConverter app using TS and React-Native with hooks. You can check this project  [here][8].

Thanks and congratulations for reading up to this point! If you have any thoughts on this, feel free to leave a comment.

You can find me on  [Twitter][9].

[1]: https://insights.stackoverflow.com/survey/2019#most-loved-dreaded-and-wanted
[2]: https://github.com/facebook/jest/pull/7554#issuecomment-454358729
[3]: https://basarat.gitbooks.io/typescript/
[4]: https://www.typescriptlang.org/docs/home.html
[5]: https://www.tutorialsteacher.com/typescript
[6]: https://github.com/dzharii/awesome-typescript
[7]: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet
[8]: https://github.com/gustavoaz7/React-Native_Learning/tree/master/CurrencyConverter
[9]: https://twitter.com/intent/follow?screen_name=gustavoaz7_
