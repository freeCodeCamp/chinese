> - 原文地址：[Learn TypeScript – The Ultimate Beginners Guide](https://www.freecodecamp.org/news/learn-typescript-beginners-guide/)
> - 原文作者：[Danny Adams](https://www.freecodecamp.org/news/author/danny-adams/)
> - 译者：luojiyin
> - 校对者：

![Learn TypeScript – The Ultimate Beginners Guide](https://www.freecodecamp.org/news/content/images/size/w2000/2022/01/Cheat-Sheet-Poster--1-.png)

在过去的几年里，TypeScript变得越来越流行，许多工作现在都要求开发人员了解TypeScript。

但不要惊慌--如果你已经了解JavaScript，你将能够迅速掌握TypeScript。

即使你不打算使用TypeScript，学习它也会让你对JavaScript有更好的理解--让你成为更好的开发者。

在本文中，您将了解到:

- 什么是TypeScript，为什么要学习它？
- 如何使用 TypeScript 设置项目
- TypeScript的所有主要概念（类型、接口、泛型、类型转换，以及更多...)
- 如何在React中使用TypeScript

我还制作了一个[PDF 格式TypeScript手册](https://doabledanny.gumroad.com/l/typescript-cheat-sheet-pdf)和[海报](https://doabledanny.gumroad.com/l/typescript-cheat-sheet-poster)，将这篇文章总结为一页。这使得它易于快速查找和修改概念/语法。

![TypeScript cheat sheet PDF](https://www.freecodecamp.org/news/content/images/2022/01/TypeScript-Cheat-Sheet--DARK-.png)

PDF 格式TypeScript手册

## 什么是TypeScript？

TypeScript是JavaScript的超集，意味着它能做JavaScript所做的一切，但有一些附加功能。

使用TypeScript的主要原因是为JavaScript添加静态类型。静态类型意味着变量的类型在程序中的任何时候都不能被改变。它可以防止大量的bug!

另一方面，JavaScript是一种动态类型的语言，意味着变量可以改变类型。这里有一个例子:

```ts
// JavaScript
let foo = "hello";
foo = 55; // foo has changed type from a string to a number - no problem

// TypeScript
let foo = "hello";
foo = 55; // ERROR - foo cannot change from string to number
```

TypeScript不能被浏览器理解，所以它必须由TypeScript编译器（TSC）编译成JavaScript,我们很快会讨论这个问题。

## TypeScript值得吗？

### 为什么要使用TypeScript

- 研究表明，TypeScript可以发现15%的常见错误。
- 可读性--更容易看到代码应该做什么。而在团队中工作时，更容易看到其他开发人员的意图。
- 它很受欢迎--了解TypeScript将使你能够申请到更多好工作。
- 学习TypeScript会让你对JavaScript有更好的理解，并有新的视角。

[下面是我写的一篇短文，展示了TypeScript如何防止烦人的Bug](https://www.doabledanny.com/why-typescript-over-javascript).

### TypeScript的缺点

- TypeScript的编写时间比JavaScript长，因为你必须指定类型，所以对于较小的单独项目，可能不值得使用它。
- TypeScript必须进行编译--这可能需要时间，特别是在大型项目中

但是，你必须花更多的时间来写更精确的代码和编译，这将使你的代码中的错误减少得更多。

对于许多项目--尤其是中大型项目--TypeScript将为你节省大量的时间和麻烦。

如果你已经知道JavaScript，TypeScript也不会太难学。它是你武库中的一个伟大工具。

## 如何设置TypeScript项目

### 安装Node和TypeScript编译器

首先，确保你的机器上全局安装了[Node](https://nodejs.org/en/download/)。

然后通过运行以下命令在你的机器上全局安装TypeScript编译器。

```bash
npm i -g typescript
```

检查安装是否成功（如果成功，它将返回版本号:

```bash
tsc -v
```

### 如何编译TypeScript

打开你的文本编辑器，创建一个TypeScript文件（例如，index.ts）。

编写一些JavaScript或TypeScript。

```ts
let sport = 'football';

let id = 5;
```

现在我们可以用以下命令将其编译成JavaScript:

```bash
tsc index
```

TSC将把代码编译成JavaScript，并在一个名为index.js的文件中输出。:

```js
var sport = 'football';
var id = 5;
```

如果你想指定输出文件的名称:

`tsc index.ts --outfile file-name.js`

如果你想让TSC自动编译你的代码，每当你做了一个改动，请添加 "watch "(缩写 w)标志:

`tsc index.ts -w`

TypeScript的一个有趣之处在于，当你在编码时，它会在文本编辑器中报告错误，但它总是会编译你的代码,无论是否有错误。

例如，下面的内容会使TypeScript立即报告错误:

```ts
var sport = 'football';
var id = 5;

id = '5'; // Error: Type 'string' is not assignable to 
type 'number'.
```

但如果我们尝试用`tsc index`来编译这段代码，尽管有错误，但代码仍然可以编译。

这是TypeScript的一个重要特性：它假定开发者知道的更多。即使有一个TypeScript错误，它也不会妨碍你编译代码。它告诉你有一个错误，但这取决于你是否对它做了什么。

### 如何设置ts配置文件

ts 配置文件应该在你项目的根目录下。在这个文件中，我们可以指定根文件，编译器选项，以及我们希望 TypeScript 在检查我们项目时有多严格。

首先，创建 ts 配置文件:

`tsc --init`

你现在应该在项目根部有一个`tsconfig.json`文件。

这里有一些需要注意的选项（如果使用带有TypeScript的前端框架，这些东西大部分都是为你准备的）。

```json
{
    "compilerOptions": {
        ...
        /* Modules */
        "target": "es2016", // Change to "ES2015" to compile to ES6
        "rootDir": "./src", // Where to compile from
        "outDir": "./public", // Where to compile to (usually the folder to be deployed to the web server)
        
        /* JavaScript Support */
        "allowJs": true, // Allow JavaScript files to be compiled
        "checkJs": true, // Type check JavaScript files and report errors
        
        /* Emit */
        "sourceMap": true, // Create source map files for emitted JavaScript files (good for debugging)
         "removeComments": true, // Don't emit comments
    },
    "include": ["src"] // Ensure only files in src are compiled
}
```

编译所有内容并观察变化:

`tsc -w`

>注意：当输入文件在命令行中被指定时（例如，`tsc index`），`tsconfig.json`文件被忽略。

## TypeScript中的类型

### 原始类型

在JavaScript中，原始值是指不属于对象且没有方法的数据。有7种原始数据类型。

- string
- number
- bigint
- boolean
- undefined
- null
- symbol

基元(Primitives)是不可变的(immutable)：它们不能被改变。重要的是，不要将基元本身与分配给基元值的变量相混淆。变量可以被重新分配一个新值，但现有值不能像对象、数组和函数那样被改变。

这是一个例子:

```js
let name = 'Danny';
name.toLowerCase();
console.log(name); // Danny - the string method didn't mutate the string

let arr = [1, 3, 5, 7];
arr.pop();
console.log(arr); // [1, 3, 5] - the array method mutated the array

name = 'Anna' // Assignment gives the primitive a new (not a mutated) value
```

在JavaScript中，所有的原始值（除了null和undefined）都有对应的对象，这些对象包裹着原始值。这些包装对象是String、Number、BigInt、Boolean和Symbol。这些包装对象提供了允许原始值被操纵的方法。

回到TypeScript，我们可以在声明一个变量后添加`: type`（称为 "类型注解 "或 "类型签名"）来设置我们希望变量的类型。例子。

```ts
let id: number = 5;
let firstname: string = 'danny';
let hasDog: boolean = true;

let unit: number; // Declare variable without assigning a value
unit = 5;
```

但通常最好不要明确说明类型，因为TypeScript会自动推断变量的类型(类型推理):

```js
let id = 5; // TS knows it's a number
let firstname = 'danny'; // TS knows it's a string
let hasDog = true; // TS knows it's a boolean

hasDog = 'yes'; // ERROR
```

我们也可以将一个变量设定为能够成为联合类型。**联合类型是一个可以被分配到多个类型的变量**:

```ts
let age: string | number;
age = 26;
age = '26';
```

### 引用类型

在JavaScript中，几乎 "所有东西 "都是一个对象。事实上（而且令人困惑的是），如果用`new`关键字定义的话，字符串、数字和布尔都可以成为对象:

```javascript
let firstname = new String('Danny');
console.log(firstname); // String {'Danny'}
```

但是，当我们谈论JavaScript中的引用类型时，我们指的是数组、对象和函数。

#### 注意事项：原始类型与引用类型

对于那些从未研究过原始类型与引用类型的人来说，让我们来讨论一下其根本区别。

如果一个基元类型被分配给一个变量，我们可以认为该变量是**包含**基元值的。每个基元值都存储在内存中的一个唯一位置。

如果我们有两个变量x和y，并且它们都包含原始数据，那么它们就完全相互独立。

![原始数据被存储在唯一的内存位置](https://www.freecodecamp.org/news/content/images/2022/01/image-66.png)

X和Y都包含唯一的独立原始数据

```js
let x = 2;
let y = 1;

x = y;
y = 100;
console.log(x); // 1 (even though y changed to 100, x is still 1)
```

而引用类型则不是这样。引用类型指向的是存储对象的一个内存位置。

![Reference types memory locations](https://www.freecodecamp.org/news/content/images/2022/01/image-67.png)

point1和point2包含一个对存储对象的地址的引用。

```js
let point1 = { x: 1, y: 1 };
let point2 = point1;

point1.y = 100;
console.log(point2.y); // 100 (point1和point2多指向的是存储点对象的同一个内存地址)
```

这是对主要类型与参考类型的一个快速概述。如果你需要更深入的解释，请看这篇文章。[原始类型与引用类型](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)。

#### Arrays in TypeScript

在TypeScript中，你可以定义一个数组可以包含哪些类型的数据:

```ts
let ids: number[] = [1, 2, 3, 4, 5]; // can only contain numbers
let names: string[] = ['Danny', 'Anna', 'Bazza']; // can only contain strings
let options: boolean[] = [true, false, false]; can only contain true or false
let books: object[] = [
  { name: 'Fooled by randomness', author: 'Nassim Taleb' },
  { name: 'Sapiens', author: 'Yuval Noah Harari' },
]; // can only contain objects
let arr: any[] = ['hello', 1, true]; // any basically reverts TypeScript back into JavaScript

ids.push(6);
ids.push('7'); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.
```

你可以使用联合类型来定义包含多种类型的数组:

```ts
let person: (string | number | boolean)[] = ['Danny', 1, true];
person[0] = 100;
person[1] = {name: 'Danny'} // Error - person array can't contain objects
```

如果你用一个值初始化一个变量，没有必要明确说明类型，因为TypeScript会推断出它的类型:

```ts
let person = ['Danny', 1, true]; // This is identical to above example
person[0] = 100;
person[1] = { name: 'Danny' }; // Error - person array can't contain objects
```

一种特殊类型的数组可以在TypeScript中定义。元组（Tuples）。**元组是一个具有固定大小和已知数据类型的数组，** 它们比普通数组更严格。

```js
let person: [string, number, boolean] = ['Danny', 1, true];
person[0] = 100; // Error - Value at index 0 can only be a string
```

#### TypeScript中的对象

TypeScript中的对象必须有所有正确的属性和值类型:

```ts
// Declare a variable called person with a specific object type annotation
let person: {
  name: string;
  location: string;
  isProgrammer: boolean;
};

// Assign person to an object with all the necessary properties and value types
person = {
  name: 'Danny',
  location: 'UK',
  isProgrammer: true,
};

person.isProgrammer = 'Yes'; // ERROR: should be a boolean


person = {
  name: 'John',
  location: 'US',
}; 
// ERROR: missing the isProgrammer property
```

当定义一个对象的签名时，你通常会使用一个 **接口(interface)**。如果我们需要检查多个对象是否具有相同的特定属性和价值类型，这一点很有用 **:**

```ts
interface Person {
  name: string;
  location: string;
  isProgrammer: boolean;
}

let person1: Person = {
  name: 'Danny',
  location: 'UK',
  isProgrammer: true,
};

let person2: Person = {
  name: 'Sarah',
  location: 'Germany',
  isProgrammer: false,
};
```

We can also declare function properties with function signatures. We can do this using old-school common JavaScript functions (`sayHi`), or ES6 arrow functions (`sayBye`):

```ts
interface Speech {
  sayHi(name: string): string;
  sayBye: (name: string) => string;
}

let sayStuff: Speech = {
  sayHi: function (name: string) {
    return `Hi ${name}`;
  },
  sayBye: (name: string) => `Bye ${name}`,
};

console.log(sayStuff.sayHi('Heisenberg')); // Hi Heisenberg
console.log(sayStuff.sayBye('Heisenberg')); // Bye Heisenberg
```

Note that in the `sayStuff` object, `sayHi` or `sayBye` could be given an arrow function or a common JavaScript function – TypeScript doesn't care.

#### Functions in TypeScript

We can define what the types the function arguments should be, as well as the return type of the function:

```ts
// Define a function called circle that takes a diam variable of type number, and returns a string
function circle(diam: number): string {
  return 'The circumference is ' + Math.PI * diam;
}

console.log(circle(10)); // The circumference is 31.41592653589793
```

The same function, but with an ES6 arrow function:

```ts
const circle = (diam: number): string => {
  return 'The circumference is ' + Math.PI * diam;
};

console.log(circle(10)); // The circumference is 31.41592653589793
```

Notice how it isn't necessary to explicitly state that `circle` is a function; TypeScript infers it. TypeScript also infers the return type of the function, so it doesn't need to be stated either. Although, if the function is large, some developers like to explicitly state the return type for clarity.

```ts
// Using explicit typing 
const circle: Function = (diam: number): string => {
  return 'The circumference is ' + Math.PI * diam;
};

// Inferred typing - TypeScript sees that circle is a function that always returns a string, so no need to explicitly state it
const circle = (diam: number) => {
  return 'The circumference is ' + Math.PI * diam;
};
```

We can add a question mark after a parameter to make it optional. Also notice below how `c` is a union type that can be a number or string:

```ts
const add = (a: number, b: number, c?: number | string) => {
  console.log(c);

  return a + b;
};

console.log(add(5, 4, 'I could pass a number, string, or nothing here!'));
// I could pass a number, string, or nothing here!
// 9
```

A function that returns nothing is said to return void – a complete lack of any value. Below, the return type of void has been explicitly stated. But again, this isn't necessary as TypeScript will infer it.

```ts
const logMessage = (msg: string): void => {
  console.log('This is the message: ' + msg);
};

logMessage('TypeScript is superb'); // This is the message: TypeScript is superb
```

If we want to declare a function variable, but not define it (say exactly what it does), **then use a function signature.** Below, the function `sayHello` must follow the signature after the colon:

```ts
// Declare the varible sayHello, and give it a function signature that takes a string and returns nothing.
let sayHello: (name: string) => void;

// Define the function, satisfying its signature
sayHello = (name) => {
  console.log('Hello ' + name);
};

sayHello('Danny'); // Hello Danny
```

### Dynamic (any) types

Using the `any` type, we can basically revert TypeScript back into JavaScript:

```ts
let age: any = '100';
age = 100;
age = {
  years: 100,
  months: 2,
};
```

It's recommended to avoid using the `any` type as much as you can, as it prevents TypeScript from doing its job – and can lead to bugs.

### Type Aliases

Type Aliases can reduce code duplication, keeping our code DRY. Below, we can see that the `PersonObject` type alias has prevented repetition, and acts as a single source of truth for what data a person object should contain.

```ts
type StringOrNumber = string | number;

type PersonObject = {
  name: string;
  id: StringOrNumber;
};

const person1: PersonObject = {
  name: 'John',
  id: 1,
};

const person2: PersonObject = {
  name: 'Delia',
  id: 2,
};

const sayHello = (person: PersonObject) => {
  return 'Hi ' + person.name;
};

const sayGoodbye = (person: PersonObject) => {
  return 'Seeya ' + person.name;
};
```

### The DOM and type casting

TypeScript doesn't have access to the DOM like JavaScript. This means that whenever we try to access DOM elements, TypeScript is never sure that they actually exist.

The below example shows the problem:

```ts
const link = document.querySelector('a');

console.log(link.href); // ERROR: Object is possibly 'null'. TypeScript can't be sure the anchor tag exists, as it can't access the DOM
```

With the non-null assertion operator (!) we can tell the compiler explicitly that an expression has value other than `null` or `undefined`. This is can be useful when the compiler cannot infer the type with certainty, but we have more information than the compiler.

```ts
// Here we are telling TypeScript that we are certain that this anchor tag exists
const link = document.querySelector('a')!;

console.log(link.href); // www.freeCodeCamp.org
```

Notice how we didn't have to state the type of the `link` variable. This is because TypeScript can clearly see (via Type Inference) that it is of type `HTMLAnchorElement`.

But what if we needed to select a DOM element by its class or id? TypeScript can't infer the type, as it could be anything.

```ts
const form = document.getElementById('signup-form');

console.log(form.method);
// ERROR: Object is possibly 'null'.
// ERROR: Property 'method' does not exist on type 'HTMLElement'.
```

Above, we get two errors. We need to tell TypeScript that we are certain `form` exists, and that we know it is of type `HTMLFormElement`. We do this with type casting:

```ts
const form = document.getElementById('signup-form') as HTMLFormElement;

console.log(form.method); // post
```

And TypeScript is happy!

TypeScript also has an Event object built in. So, if we add a submit event listener to our form, TypeScript will give us an error if we call any methods that aren't part of the Event object. Check out how cool TypeScript is – it can tell us when we've made a spelling mistake:

```ts
const form = document.getElementById('signup-form') as HTMLFormElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault(); // prevents the page from refreshing

  console.log(e.tarrget); // ERROR: Property 'tarrget' does not exist on type 'Event'. Did you mean 'target'?
});

```

## Classes in TypeScript

We can define the types that each piece of data should be in a class:

```ts
class Person {
  name: string;
  isCool: boolean;
  pets: number;

  constructor(n: string, c: boolean, p: number) {
    this.name = n;
    this.isCool = c;
    this.pets = p;
  }

  sayHello() {
    return `Hi, my name is ${this.name} and I have ${this.pets} pets`;
  }
}

const person1 = new Person('Danny', false, 1);
const person2 = new Person('Sarah', 'yes', 6); // ERROR: Argument of type 'string' is not assignable to parameter of type 'boolean'.

console.log(person1.sayHello()); // Hi, my name is Danny and I have 1 pets
```

We could then create a `people` array that only includes objects constructed from the `Person` class:

```ts
let People: Person[] = [person1, person2];
```

We can add access modifiers to the properties of a class. TypeScript also provides a new access modifier called `readonly`.

```ts
class Person {
  readonly name: string; // This property is immutable - it can only be read
  private isCool: boolean; // Can only access or modify from methods within this class
  protected email: string; // Can access or modify from this class and subclasses
  public pets: number; // Can access or modify from anywhere - including outside the class

  constructor(n: string, c: boolean, e: string, p: number) {
    this.name = n;
    this.isCool = c;
    this.email = e;
    this.pets = p;
  }

  sayMyName() {
    console.log(`Your not Heisenberg, you're ${this.name}`);
  }
}

const person1 = new Person('Danny', false, 'dan@e.com', 1);
console.log(person1.name); // Fine
person1.name = 'James'; // Error: read only
console.log(person1.isCool); // Error: private property - only accessible within Person class
console.log(person1.email); // Error: protected property - only accessible within Person class and its subclasses
console.log(person1.pets); // Public property - so no problem
```

We can make our code more concise by constructing class properties this way:

```ts
class Person {
  constructor(
    readonly name: string,
    private isCool: boolean,
    protected email: string,
    public pets: number
  ) {}

  sayMyName() {
    console.log(`Your not Heisenberg, you're ${this.name}`);
  }
}

const person1 = new Person('Danny', false, 'dan@e.com', 1);
console.log(person1.name); // Danny
```

Writing it the above way, the properties are automatically assigned in the constructor – saving us from having to write them all out.

Note that if we omit the access modifier, by default the property will be public.

Classes can also be extended, just like in regular JavaScript:

```ts
class Programmer extends Person {
  programmingLanguages: string[];

  constructor(
    name: string,
    isCool: boolean,
    email: string,
    pets: number,
    pL: string[]
  ) {
    // The super call must supply all parameters for base (Person) class, as the constructor is not inherited.
    super(name, isCool, email, pets);
    this.programmingLanguages = pL;
  }
}
```

[For more on classes, refer to the official TypeScript docs](https://www.typescriptlang.org/docs/handbook/2/classes.html).

## Modules in TypeScript

In JavaScript, a module is  just a file containing related code. Functionality can be imported and exported between modules, keeping the code well organized.

TypeScript also supports modules. The TypeScript files will compile down into multiple JavaScript files.

In the `tsconfig.json` file, change the following options to support modern importing and exporting:

```ts
 "target": "es2016",
 "module": "es2015"
```

(Although, for Node projects you very likely want `"module": "CommonJS"` – Node doesn't  yet support modern importing/exporting.)

Now, in your HTML file, change the script import to be of type module:

```html
<script type="module" src="/public/script.js"></script>
```

We can now import and export files using ES6:

```ts
// src/hello.ts
export function sayHi() {
  console.log('Hello there!');
}

// src/script.ts
import { sayHi } from './hello.js';

sayHi(); // Hello there!
```

Note: always import as a JavaScript file, even in TypeScript files.

## Interfaces in TypeScript

Interfaces define how an object should look:

```ts
interface Person {
  name: string;
  age: number;
}

function sayHi(person: Person) {
  console.log(`Hi ${person.name}`);
}

sayHi({
  name: 'John',
  age: 48,
}); // Hi John
```

You can also define an object type using a type alias:

```ts
type Person = {
  name: string;
  age: number;
};

function sayHi(person: Person) {
  console.log(`Hi ${person.name}`);
}

sayHi({
  name: 'John',
  age: 48,
}); // Hi John
```

Or an object type could be defined anonymously:

```ts
function sayHi(person: { name: string; age: number }) {
  console.log(`Hi ${person.name}`);
}

sayHi({
  name: 'John',
  age: 48,
}); // Hi John
```

Interfaces are very similar to type aliases, and in many cases you can use either. The key distinction is that type aliases cannot be reopened to add new properties, vs an interface which is always extendable.

The following examples are taken from the [TypeScript docs](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces).

Extending an interface:

```ts
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear: Bear = {
  name: "Winnie",
  honey: true,
}
```

Extending a type via intersections:

```ts
type Animal = {
  name: string
}

type Bear = Animal & {
  honey: boolean
}

const bear: Bear = {
  name: "Winnie",
  honey: true,
}
```

Adding new fields to an existing interface:

```ts
interface Animal {
  name: string
}

// Re-opening the Animal interface to add a new field
interface Animal {
  tail: boolean
}

const dog: Animal = {
  name: "Bruce",
  tail: true,
}
```

Here's the key difference: a type cannot be changed after being created:

```ts
type Animal = {
  name: string
}

type Animal = {
  tail: boolean
}
// ERROR: Duplicate identifier 'Animal'.
```

As a rule of thumb, the TypeScript docs recommend using interfaces to define objects, until you need to use the features of a type.

Interfaces can also define function signatures:

```ts
interface Person {
  name: string
  age: number
  speak(sentence: string): void
}

const person1: Person = {
  name: "John",
  age: 48,
  speak: sentence => console.log(sentence),
}
```

You may be wondering why we would use an interface over a class in the above example.  

One advantage of using an interface is that it is only used by TypeScript, not JavaScript. This means that it won't get compiled and add bloat to your JavaScript. Classes are features of JavaScript, so it would get compiled.

Also, a class is essentially an **object factory** (that is, a blueprint of what an object is supposed to look like and then implemented), whereas an interface is a structure used solely for **type-checking**.

While a class may have initialized properties and methods to help create objects, an interface essentially defines the properties and type an object can have.

### Interfaces with classes

We can tell a class that it must contain certain properties and methods by implementing an interface:

```ts
interface HasFormatter {
  format(): string;
}

class Person implements HasFormatter {
  constructor(public username: string, protected password: string) {}

  format() {
    return this.username.toLocaleLowerCase();
  }
}

// Must be objects that implement the HasFormatter interface
let person1: HasFormatter;
let person2: HasFormatter;

person1 = new Person('Danny', 'password123');
person2 = new Person('Jane', 'TypeScripter1990');

console.log(person1.format()); // danny
```

Ensure that `people` is an array of objects that implement `HasFormatter` (ensures that each person has the format method):

```ts
let people: HasFormatter[] = [];
people.push(person1);
people.push(person2);
```

## Literal types in TypeScript

In addition to the general types `string` and `number`, we can refer to specific strings and numbers in type positions:

```js
// Union type with a literal type in each position
let favouriteColor: 'red' | 'blue' | 'green' | 'yellow';

favouriteColor = 'blue';
favouriteColor = 'crimson'; // ERROR: Type '"crimson"' is not assignable to type '"red" | "blue" | "green" | "yellow"'.
```

## Generics

Generics allow you to create a component that can work over a variety of types, rather than a single one, **which helps to make the component more reusable.**

Let's go through an example to show you what that means...

The `addID` function accepts any object, and returns a new object with all the properties and values of the passed in object, plus an `id` property with random value between 0 and 1000. In short, it gives any object an ID.

```ts
 const addID = (obj: object) => {
  let id = Math.floor(Math.random() * 1000);

  return { ...obj, id };
};

let person1 = addID({ name: 'John', age: 40 });

console.log(person1.id); // 271
console.log(person1.name); // ERROR: Property 'name' does not exist on type '{ id: number; }'.
```

As you can see, TypeScript gives an error when we try to access the `name` property. This is because when we pass in an object to `addID`, we are not specifying what properties this object should have – so TypeScript has no idea what properties the object has (it hasn't "captured" them). So, the only property that TypeScript knows is on the returned object is `id`.

So, how can we pass in any object to `addID`, but still tell TypeScript what properties and values the object has? We can use a _generic_, `<T>` – where `T` is known as the _type parameter_:

```ts
// <T> is just the convention - e.g. we could use <X> or <A>
const addID = <T>(obj: T) => {
  let id = Math.floor(Math.random() * 1000);

  return { ...obj, id };
};
```

What does this do? Well, now when we pass an object into `addID`, we have told TypeScript to capture the type – so `T` becomes whatever type we pass in. `addID` will now know what properties are on the object we pass in.

But, we now have a problem: anything can be passed into `addID` and TypeScript will capture the type and report no problem:

```ts
let person1 = addID({ name: 'John', age: 40 });
let person2 = addID('Sally'); // Pass in a string - no problem

console.log(person1.id); // 271
console.log(person1.name); // John

console.log(person2.id);
console.log(person2.name); // ERROR: Property 'name' does not exist on type '"Sally" & { id: number; }'.
```

When we passed in a string, TypeScript saw no issue. It only reported an error when we tried to access the `name` property. So, we need a constraint: we need to tell TypeScript that only objects should be accepted, by making our generic type, `T`, an extension of `object`:

```ts
const addID = <T extends object>(obj: T) => {
  let id = Math.floor(Math.random() * 1000);

  return { ...obj, id };
};

let person1 = addID({ name: 'John', age: 40 });
let person2 = addID('Sally'); // ERROR: Argument of type 'string' is not assignable to parameter of type 'object'.
```

The error is caught straight away – perfect... well, not quite. In JavaScript, arrays are objects, so we can still get away with passing in an array:

```ts
let person2 = addID(['Sally', 26]); // Pass in an array - no problem

console.log(person2.id); // 824
console.log(person2.name); // Error: Property 'name' does not exist on type '(string | number)[] & { id: number; }'.
```

We could solve this by saying that the object argument should have a name property with string value:

```ts
const addID = <T extends { name: string }>(obj: T) => {
  let id = Math.floor(Math.random() * 1000);

  return { ...obj, id };
};

let person2 = addID(['Sally', 26]); // ERROR: argument should have a name property with string value
```

The type can also be passed in to `<T>`, as below – but this isn't necessary most of the time, as TypeScript will infer it.

```ts
// Below, we have explicitly stated what type the argument should be between the angle brackets.
let person1 = addID<{ name: string; age: number }>({ name: 'John', age: 40 });
```

**Generics allow you to have type-safety in components where the arguments and return types are unknown ahead of time.**

**In TypeScript, generics are used when we want to describe a correspondence between two values.** In the above example, the return type was related to the input type. We used a _generic_ to describe the correspondence.

Another example: If we need a function that accepts multiple types, it is better to use a generic than the `any` type. Below shows the issue with using `any`:

```ts
function logLength(a: any) {
  console.log(a.length); // No error
  return a;
}

let hello = 'Hello world';
logLength(hello); // 11

let howMany = 8;
logLength(howMany); // undefined (but no TypeScript error - surely we want TypeScript to tell us we've tried to access a length property on a number!)
```

We could try using a generic:

```ts
function logLength<T>(a: T) {
  console.log(a.length); // ERROR: TypeScript isn't certain that `a` is a value with a length property
  return a;
}
```

At least we are now getting some feedback that we can use to tighten up our code.

Solution: use a generic that extends an interface that ensures every argument passed in has a length property:

```ts
interface hasLength {
  length: number;
}

function logLength<T extends hasLength>(a: T) {
  console.log(a.length);
  return a;
}

let hello = 'Hello world';
logLength(hello); // 11

let howMany = 8;
logLength(howMany); // Error: numbers don't have length properties
```

We could also write a function where the argument is an array of elements that all have a length property:

```ts
interface hasLength {
  length: number;
}

function logLengths<T extends hasLength>(a: T[]) {
  a.forEach((element) => {
    console.log(element.length);
  });
}

let arr = [
  'This string has a length prop',
  ['This', 'arr', 'has', 'length'],
  { material: 'plastic', length: 30 },
];

logLengths(arr);
// 29
// 4
// 30
```

Generics are an awesome feature of TypeScript!

### Generics with interfaces

When we don't know what type a certain value in an object will be ahead of time, we can use a generic to pass in the type:

```ts
// The type, T, will be passed in
interface Person<T> {
  name: string;
  age: number;
  documents: T;
}

// We have to pass in the type of `documents` - an array of strings in this case
const person1: Person<string[]> = {
  name: 'John',
  age: 48,
  documents: ['passport', 'bank statement', 'visa'],
};

// Again, we implement the `Person` interface, and pass in the type for documents - in this case a string
const person2: Person<string> = {
  name: 'Delia',
  age: 46,
  documents: 'passport, P45',
};
```

## Enums in TypeScript

Enums are a special feature that TypeScript brings to JavaScript. Enums allow us to define or declare a collection of related values, that can be numbers or strings, as a set of named constants.

```ts
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

console.log(ResourceType.BOOK); // 0
console.log(ResourceType.AUTHOR); // 1

// To start from 1
enum ResourceType {
  BOOK = 1,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

console.log(ResourceType.BOOK); // 1
console.log(ResourceType.AUTHOR); // 2
```

By default, enums are number based – they store string values as numbers. But they can also be strings:

```ts
enum Direction {
  Up = 'Up',
  Right = 'Right',
  Down = 'Down',
  Left = 'Left',
}

console.log(Direction.Right); // Right
console.log(Direction.Down); // Down
```

Enums are useful when we have a set of related constants. For example, instead of using non-descriptive numbers throughout your code, enums make code more readable with descriptive constants.

Enums can also prevent bugs, as when you type the name of the enum, intellisense will pop up and give you the list of possible options that can be selected.

## TypeScript strict mode

It is recommended to have all strict type-checking operations enabled in the `tsconfig.json` file. This will cause TypeScript to report more errors, but will help prevent many bugs from creeping into your application.

```ts
 // tsconfig.json
 "strict": true
```

Let's discuss a couple of the things that strict mode does: no implicit any, and strict null checks.

### No implicit any

In the function below, TypeScript has inferred that the parameter `a` is of `any` type. As you can see, when we pass in a number to this function, and try to log a `name` property, no error is reported. Not good.

```ts
function logName(a) {
  // No error??
  console.log(a.name);
}

logName(97);
```

With the `noImplicitAny` option turned on, TypeScript will instantly flag an error if we don't explicitly state the type of `a`:

```ts
// ERROR: Parameter 'a' implicitly has an 'any' type.
function logName(a) {
  console.log(a.name);
}
```

### Strict null checks

When the `strictNullChecks` option is false, TypeScript effectively ignores `null` and `undefined`. This can lead to unexpected errors at runtime.

With `strictNullChecks` set to true, `null` and `undefined` have their own types, and you'll get a type error if you assign them to a variable that expects a concrete value (for example, `string`).

```ts
let whoSangThis: string = getSong();

const singles = [
  { song: 'touch of grey', artist: 'grateful dead' },
  { song: 'paint it black', artist: 'rolling stones' },
];

const single = singles.find((s) => s.song === whoSangThis);

console.log(single.artist);
```

Above, `singles.find` has no guarantee that it will find the song – but we have written the code as though it always will.

By setting `strictNullChecks` to true, TypeScript will raise an error because we haven't made a guarantee that `single` exists before trying to use it:

```ts
const getSong = () => {
  return 'song';
};

let whoSangThis: string = getSong();

const singles = [
  { song: 'touch of grey', artist: 'grateful dead' },
  { song: 'paint it black', artist: 'rolling stones' },
];

const single = singles.find((s) => s.song === whoSangThis);

console.log(single.artist); // ERROR: Object is possibly 'undefined'.
```

TypeScript is basically telling us to ensure `single` exists before using it. We need to check if it isn't `null` or `undefined` first:

```ts
if (single) {
  console.log(single.artist); // rolling stones
}
```

## Narrowing in TypeScript

In a TypeScript program, **a variable can move from a less precise type to a more precise type.** This process is called type narrowing.

Here's a simple example showing how TypeScript narrows down the less specific type of `string | number` to more specific types when we use if-statements with `typeof`:

```ts
function addAnother(val: string | number) {
  if (typeof val === 'string') {
    // TypeScript treats `val` as a string in this block, so we can use string methods on `val` and TypeScript won't shout at us
    return val.concat(' ' + val);
  }

  // TypeScript knows `val` is a number here
  return val + val;
}

console.log(addAnother('Woooo')); // Woooo Woooo
console.log(addAnother(20)); // 40
```

Another example: below, we have defined a union type called `allVehicles`, which can either be of type `Plane` or `Train`.

```ts
interface Vehicle {
  topSpeed: number;
}

interface Train extends Vehicle {
  carriages: number;
}

interface Plane extends Vehicle {
  wingSpan: number;
}

type PlaneOrTrain = Plane | Train;

function getSpeedRatio(v: PlaneOrTrain) {
  // In here, we want to return topSpeed/carriages, or topSpeed/wingSpan
  console.log(v.carriages); // ERROR: 'carriages' doesn't exist on type 'Plane'
}
```

Since the function `getSpeedRatio` is working with multiple types, we need a way of distinguishing whether `v` is a `Plane` or `Train`. We could do this by giving both types a common distinguishing property, with a literal string value:

```ts
// All trains must now have a type property equal to 'Train'
interface Train extends Vehicle {
  type: 'Train';
  carriages: number;
}

// All trains must now have a type property equal to 'Plane'
interface Plane extends Vehicle {
  type: 'Plane';
  wingSpan: number;
}

type PlaneOrTrain = Plane | Train;
```

Now we, and TypeScript, can narrow down the type of `v`:

```ts
function getSpeedRatio(v: PlaneOrTrain) {
  if (v.type === 'Train') {
    // TypeScript now knows that `v` is definitely a `Train`. It has narrowed down the type from the less specific `Plane | Train` type, into the more specific `Train` type
    return v.topSpeed / v.carriages;
  }

  // If it's not a Train, TypeScript narrows down that `v` must be a Plane - smart!
  return v.topSpeed / v.wingSpan;
}

let bigTrain: Train = {
  type: 'Train',
  topSpeed: 100,
  carriages: 20,
};

console.log(getSpeedRatio(bigTrain)); // 5
```

## Bonus: TypeScript with React

TypeScript has full support for React and JSX. This means we can use TypeScript with the three most common React frameworks:

- create-react-app ([TS setup](https://create-react-app.dev/docs/adding-typescript/))
- Gatsby ([TS setup](https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/))
- Next.js ([TS setup](https://nextjs.org/learn/excel/typescript))

If you require a more custom React-TypeScript configuration, you could setup [Webpack](https://webpack.js.org/) (a module bundler) and configure the `tsconfig.json` yourself. But most of the time, a framework will do the job.

To setup up create-react-app with TypeScript, for example, simply run:

```ts
npx create-react-app my-app --template typescript

# or

yarn create react-app my-app --template typescript
```

In the src folder, we can now create files with `.ts` (for regular TypeScript files) or `.tsx` (for TypeScript with React) extensions and write our components with TypeScript. This will then compile down into JavaScript in the public folder.

### React props with TypeScript

Below, we are saying that `Person` should be a React functional component that accepts a props object with the props `name`, which should be a string, and `age`, which should be a number.

```tsx
// src/components/Person.tsx
import React from 'react';

const Person: React.FC<{
  name: string;
  age: number;
}> = ({ name, age }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
    </div>
  );
};

export default Person;
```

But most developers prefer to use an interface to specify prop types:

```tsx
interface Props {
  name: string;
  age: number;
}

const Person: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
    </div>
  );
};
```

We can then import this component into `App.tsx`. If we don't provide the necessary props, TypeScript will give an error.

```tsx
import React from 'react';
import Person from './components/Person';

const App: React.FC = () => {
  return (
    <div>
      <Person name='John' age={48} />
    </div>
  );
};

export default App;
```

Here are a few examples for what we could have as prop types:

```tsx
interface PersonInfo {
  name: string;
  age: number;
}

interface Props {
  text: string;
  id: number;
  isVeryNice?: boolean;
  func: (name: string) => string;
  personInfo: PersonInfo;
}
```

### React hooks with TypeScript

#### useState()

We can declare what types a state variable should be by using angle brackets. Below, if we omitted the angle brackets, TypeScript would infer that `cash` is a number. So, if want to enable it to also be null, we have to specify:

```tsx
const Person: React.FC<Props> = ({ name, age }) => {
  const [cash, setCash] = useState<number | null>(1);

  setCash(null);

  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
    </div>
  );
};
```

#### useRef()

`useRef` returns a mutable object that persists for the lifetime of the component. We can tell TypeScript what the ref object should refer to – below we say the prop should be a `HTMLInputElement`:

```tsx
const Person: React.FC = () => {
  // Initialise .current property to null
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input type='text' ref={inputRef} />
    </div>
  );
};
```

For more information on React with TypeScript, checkout these [awesome React-TypeScript cheatsheets](https://react-typescript-cheatsheet.netlify.app/).

## Useful resources & further reading

- [The official TypeScript docs](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [The Net Ninja's TypeScript video series](https://www.youtube.com/watch?v=2pZmKW9-I_k&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&ab_channel=TheNetNinja) (awesome!)
- [Ben Awad's TypeScript with React video](https://www.youtube.com/watch?v=Z5iWr6Srsj8&ab_channel=BenAwad)
- [Narrowing in TypeScript](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) (a very interesting feature of TS that you should learn)
- [Function overloads](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)
- [Primitive values in JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
- [JavaScript objects](https://www.w3schools.com/js/js_object_definition.asp)

## Thanks for reading

Hope that was useful. If you made it to here, you now know the main fundamentals of TypeScript and can start using it in your projects.

Again, you can also download my [one-page TypeScript cheat sheet PDF](https://doabledanny.gumroad.com/l/typescript-cheat-sheet-pdf) or [order a physical poster](https://doabledanny.gumroad.com/l/typescript-cheat-sheet-poster).

For more from me, you can find me on [Twitter](https://mobile.twitter.com/doabledanny) and [YouTube](https://www.youtube.com/channel/UC0URylW_U4i26wN231yRqvA).

Cheers!
