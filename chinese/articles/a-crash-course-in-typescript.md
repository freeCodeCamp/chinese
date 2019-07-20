> - 原文地址：[A crash course in TypeScript](https://www.freecodecamp.org/news/a-crash-course-in-typescript-e6bf9c10946/)
> - 原文作者：Gabriel Tanner
> - 译者：[Tommy-White](https://github.com/Tommy-White)
> - 校对者：

# TypeScript 速成课

Typescript 是 javascript 的类型超集，旨在简化大型 JavaScript 应用程序的开发。Typescript 加入了常见的概率例如 类（classes），范型（generics），接口（interfaces）和静态类型（static types）并允许开发人员使用静态检查和代码重构等工具。

## 为什么在意 Typescript：

现在问题仍然是为什么你应该  优选使用 Typescript。这有一些关于为什么 javascript 开发者应该考虑学习 Typescript 的原因。

### 静态类型：

Javascript 是动态类型的，这意味着它不知道变量的类型，直到它在运行时实例化它，这可能导致项目中的问题和错误。Typescript 加入了对 Javascript 静态类型支持如果你正确的使用它处理  由变量类型的错误设定  引起的错误。您仍然可以完全控制输入代码的严格程度，或者甚至根本不使用类型。

### 更好的 IDE 支持：

Typescript 相比 Javascript 一个更大的优势是更好的 IED 支持包括了来自 Typescript 编译器  智能，实时的提示，调试以及更多功能。这里还有一大堆扩展进一步  提升你的 Typescript 开发体验。

### 应用新的 ECMAScript 特性：

Typescript 使您可以使用最新的 ECMAScript 功能，并将它们转换到您选择的 ECMAScript 目标。这意味着您可以使用最新的工具开发应用程序，而无需担心浏览器支持。

## 什么时候你该使用它：

到目前为止，我们应该知道为什么 Typescript 是有用的以及如何改善我们的开发经验。但它并不是解决所有问题的方法，当然也不能阻止你自己编写可怕的代码。那么让我们来看看你应该在哪里使用 Typescript。

### 当你拥有一个很大的代码库时：

Typescript 是大型代码库的一个很好的补充，因为它可以帮助您防止许多常见错误。这尤其适用于多个开发人员工作在同一项目之中。

### 当你项目成员早已知道静态类型语言时：

另一个明显使用 Typescript 的场景是当你和你的团队已经知道静态类型的语言像 Java 和 C# 不想改为编写 Javascript。

## 设置/建立：

要设置 typescript，我们只需要使用 npm 包管理器安装它并创建一个新的 Typescript 文件。

```
npm install -g typescript
```

安装完成之后我们可以继续探寻 Typescript 提供给我们的语法和功能特性。

## 类型：

现在让我们来看看 Typescript 所提供的类型：

### 数值（Number）：

Typescript 所有的值类型都是浮点数。所有这些都得到包括二进制和十六进制值的数字类型。

```typescript
let num: number = 0.222;
let hex: number = 0xbeef;
let bin: number = 0b0010;
```

### 字符串（String）：

与其他语言一样，Typescript 使用 String 数据类型来保存文本数据。

```typescript
let str: string = 'Hello World!';
```

你可以使用多行字符串并嵌入表达式通过使用反引号``

```typescript
let multiStr: string = `A simplemultiline string!`

let expression = 'A new expression'let expressionStr: string = `Expression str: ${ expression }`
```

### 布尔类型（Boolean）

Typescript 支持所有的基本数据类型，布尔类型，值必须为 true 或者 false。

```typescript
let boolFalse: boolean = false;
let boolTrue: boolean = true;
```

## 指定类型

现在我们已经有了基本的数据类型，我们可以看看你如何在 Typescript 中指定类型。基本上，您只需要在名称和冒号后面写出变量的类型。

### 单一类型：

这里例子为我们如何为变量指定字符串数据类型

```typescript
let str: string = 'Hello World';
```

所有其他数据类型也是这样使用。

### 多类型：

你仍然可以通过`|`操作符为你的变量指定多个数据类型：

```typescript
let multitypeVar: string | number = 'String';
multitypeVar = 20;
```

这里我们使用|为变量分配两种类型。现在我们可以在其中存储字符串和数值。

## 类型检测：

现在让我们看看我们如何检查我们的变量是否具有正确的类型。我们有多种选择，但在这里我只展示了两个最常用的选项。

### Typeof：

`typeof`仅仅知道基本类型。这意味着它只能检查变量是否是我们上面定义的数据类型之一。

```typescript
let str: string = 'Hello World!';
```

```typescript
if (typeof str === number) {
  console.log('Str is a number');
} else {
  console.log('Str is not a number');
}
```

在此示例中，我们创建一个字符串类型变量并使用 typeof 命令检查 str 是否为 Number 类型（始终为 false）。然后我们打印是否是数值。

### Instanceof：

instanceof 运算符与 typeof 几乎相同，只是它还可以检查 javascript 尚未定义的自定义类型。

```typescript
class Human {
  name: string;

  constructor(data: string) {
    this.name = data;
  }
}

let human = new Human('Gabriel');

if (human instanceof Human) {
  console.log(`${human.name} is a human`);
}
```

在这里，我们创建一个自定义类型，我们稍后将在本文中讨论，然后创建它的实例。之后，我们检查它是否真的是 Human 类型的变量，如果是，则在控制台中打印。

## 类型断言：

有时我们还需要将变量转换为特定的数据类型。这经常发生在你已经指定了一个范型类型像 any 并且你想使用它具体的类型。

有很多选择可以解决这个问题，但在这里我只分享其中两个。

### As 关键字

我们可以转换我们的变量通过使用 `as` 关键字在变量名之后并跟随具体数据类型。

```typescript
let str: any = 'I am a String';
let strLength = (str as string).length;
```

这里我们将 str 变量转换为字符串，以便我们可以使用 length 属性（如果您的 TSLINT 设置允许，甚至可以在没有转换的情况下工作）。

### <> 操作符：

我们也可以使用`<>`运算符，它与 `as` 关键字具有完全相同的效果，只有语法差异。

```typescript
let str: any = 'I am a String';
let strLength = (<string>str).length;
```

此代码块与上面的代码块具有完全相同的功能。它只是语法不同。

## 数组：

Typescript 中的数组是相同对象的集合，可以用两种不同的方式创建。

### Creating Arrays

#### 使用 []：

我们可以通过指定类型后跟`[]`来定义数组对象，以表示它是一个数组。

```typescript
let strings: string[] = ['Hello', 'World', '!'];
```

在这个例子中，我们创建一个字符串数组，它包含三个不同的字符串值。

#### 使用范型数组:

我们还可用指定 Array<Type> 定义范型数组

```typescript
let numbers: Array<number> = [1, 2, 3, 4, 5];
```

这里我们创建一个数值数组，它包含 5 个不同的数字。

### 多（混合）类型数组

此外，我们还可以使用`|`操作符将多个类型分配给单个数组。

```typescript
let stringsAndNumbers: (string | number)[] = ['Age', 20];
```

此例中我们创建了一个数值可以包含字符串和数值。

### 多维数组：

Typescript 还允许我们定义多维数组，这意味着我们可以将数组保存在另一个数组中。我们可以通过使用多个[]运算符来创建一个多维数组。

```typescript
let numbersArray: number[][] = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]];
```

这里我们创建一个包含另一个数字数组的数组。

## 元组（Tupels）

元组基本类似数组但有一点不同。我们可以定义每个位子上储存数据的类型。这意味着我们可以通过在方括号内枚举它们来强制执行索引类型。

```typescript
let exampleTuple: [number, string] = [20, 'https://google.com'];
```

在此列中，我们定义了一个简单的元组，在索引 0 位置上指定为数值类型，在索引为 1 位置上指定为字符串类型。这意味着如果我们尝试在此索引上放置另一种数据类型，则会抛出错误。

以下是非法元组的示例：

```typescript
const exampleTuple: [string, number] = [20, 'https://google.com'];
```

## 枚举（Enums）：

与大多数其他面向对象编程语言一样，Typescript 中的枚举允许我们定义一组命名常量。 Typescript 还提供基于数值和基于字符串的枚举。使用 enum 关键字定义 Typescript 中的枚举。

### 数值枚举：

首先，我们将查看数值枚举，其中我们将键值与索引匹配。

```typescript
enum State {
  Playing = 0,
  Paused = 1,
  Stopped = 2,
}
```

上面，我们定义了数值枚举将 Playing 初始化为 0，Paused 为 1 等等。

```typescript
enum State {
  Playing,
  Paused,
  Stopped,
}
```

我们也可以将初始化器留空，而 Typescript 会从零开始自动索引它。

### 字符串枚举

定义字符串枚举也十分简单，我们只需要在定义的每个枚举值后初始化字符串值。

```typescript
enum State {
  Playing = 'PLAYING',
  Paused = 'PAUSED',
  Stopped = 'STOPPED',
}
```

这里我们通过使用字符串初始化我们的状态来定义字符串枚举。

## 对象（Objects）：

Typescript 中的对象是包含一组键值对的实例。这些值可以是变量，数组甚至函数。它也被视为表示非基本类型的数据类型。

我们可以使用打括号创建一个对象：

```typescript
const human = { firstName: 'Frank', age: 32, height: 185 };
```

这里我们创建了一个 human 对象包含三个不同的键值对。

我们可以为对象加入方法：

```typescript
const human = {
  firstName: 'Frank',
  age: 32,
  height: 185,
  greet: function() {
    console.log('Greetings stranger!');
  },
};
```

## 自定义类型

Typescript 并允许我们自定义类型，以便于我们后续重用。要创建自定义类型，我们只需要使用`type`关键字并定义我们的类型。

```typescript
type Human = {
  firstName: string;
  age: number;
  height: number;
};
```

在此示例中，我们定义了一个名为 Human 和三个属性的自定义类型。现在让我们看看如何创建这种类型的对象。

```typescript
const human: Human = {
  firstName: ‘Franz’,
  age: 32,
  height: 185
}
```

在这里，我们创建自定义类型的实例并设置所需的属性。

## 方法参数和返回类型：

Typescript 允许我们为方法参数和返回值指定数据类型。现在让我们看一下使用 Typescript 定义函数的语法。

```typescript
function printState(state: State): void {
  console.log(`The song state is ${state}`);
}

function add(num1: number, num2: number): number {
  return num1 + num2;
}
```

这里我们有两个示例函数，它们都具有定义类型的参数。我们还看到在结束括号后定义返回类型。

现在我们可以像普通的 javascript 一样调用我们的函数，但编译器会检查我们是否为函数提供了正确的参数。

```
add(2, '5')
// 错误第二个参数类型为数值
```

## 可选属性：

Typescript 允许我们为方法(注：接口等同样可以定义可选属性)定义可选属性。我们通过 `？` 操作符定义。

```typescript
function printName(firstName: string, lastName?: string) {
  if (lastName) console.log(`Firstname: ${firstName}, Lastname: ${lastName}`);
  else console.log(`Firstname: ${firstName}`);
}
```

在这个例子中，lastName 是一个可选参数，这意味着当我们不提供调用函数时，我们不会从编译器中获得错误。

```typescript
printName('Gabriel', 'Tanner');
printName('Gabriel');
```

这表示 2 个示例都被视为正确的。

## 默认值：

我们使用可选属性的第二种方法是为它指定一个默认值。我们可以通过直接在函数头部赋值来实现。

```typescript
function printName(firstName: string, lastName: string = 'Tanner') {
  console.log(`Firstname: ${firstName}, Lastname: ${lastName}`);
}
```

在此例我中我们 lastName 赋予了默认值这意味着我们不必每次调用方法是提供它。

## 接口（Interfaces）：

Typescript 中的接口用于定义与我们的代码以及项目之外的代码的契约。接口只包含我们的方法和属性的声明，但不实现它们。实现方法和属性是实现接口的类的责任。

让我们看个例子让定义更加清晰：

```typescript
interface Person {
  name: string;
}

const person: Person = {
  name: 'Gabriel',
};

// 不能指定为Person接口
const person2: Person = {
  names: 'Gabriel',
};
```

这里我们声明了一个接口包含一个 name 属性，它需要在实现接口时实现。这就是为什么 person2 变量会抛出异常

## 可选属性

在 Typescript 中，并不需要所有接口属性。也可以使用`?` 运算符在属性吗后将其设置为可选。

```typescript
interface Person {
  name: string;
  age?: number;
}

const person: Person = {
  name: 'Frank',
  age: 28,
};

const person2: Person = {
  name: 'Gabriel',
};
```

在这里，我们创建一个具有一个普通和一个可选属性的接口，该属性是使用?运算符。这就是我们两个人初始化都有效的原因。

## 只读属性

我们的接口中一些属性也应该只在首次创建对象时~~修改~~赋值。我们可以通过将 readonly 关键字放在我们的属性名称之前来指定此功能。

```typescript
interface Person {
  name: string;
  readonly id: number;
  age?: number;
}

const person: Person = {
  name: 'Gabriel',
  id: 3127831827,
};

person.id = 200; // 不可为id赋值因为它是只读的
```

在此示例中，id 属性是只读的，在创建对象后无法更改。

## 模块（~~Barrels~~ Modules）：

Barrels 允许我们在一个更方便的模块中汇总多个导出模块。

我们仅需要创建一个新文件，这将到处我们项目中的多个模块。

```typescript
export * from './person';
export * from './animal';
export * from './human';
```

之后我们可以引入这些模块通过这个便利的单一导入语句。

```typescript
import { Person, Animal, Human } from 'index';
```

## 范型（Generics）：

泛型允许我们创建兼容广泛类型而不是单一类型的组件。这使得我们的组件“ 开放”和复用。

现在您可能想知道为什么我们不只是使用任何（`any`）类型来使组件接受多种类型而不是单一类型。让我们看一个例子更好地了解。

我们想要一个简单的假函数（dummy function），它返回传入的参数：

```typescript
function dummyFun(arg: any): any {
  return arg;
}
```

然而 any 是范型，某种程度它  能接受所有类型参数但有一个很大的区别。我们丢失了我们传入的参数是什么类型以及返回值是什么类型。
(译者注：应为定义为 any 类型表示能接受所有类型，在参数传入时为特定类型但静态类型的定义还是 any，所以返回值类型依然为 any)

所以让我们来看看，我们如何接受所有类型并知道它返回值的类型。

```typescript
function dummyFun<T>(arg: T): T {
  return arg;
}
```

这里我们使用泛型参数 T，因此我们可以捕获变量类型并在以后使用它。我们还使用它作为返回参数类型，它允许我们在检查代码时看到相应的类型。

更多详细接受你可以查看[Charly Poly]()关于[Generics and overloads](https://medium.com/@wittydeveloper/typescript-generics-and-overloads-999679d121cf)的文章

## 访问修饰符（Access Modifiers）：

访问修饰符控制我们类成员的可访问性。 Typescript 支持三种访问修饰符 - 公共的（public），私有的（private）和受保护的（protected）。

### 公共的：

公共成员可以在任何地方访问，没有任何限制 这也是标准修饰符，这意味着您不需要使用 public 关键字为变量添加前缀。

### 私有的：

私有成员只能在其定义的类中能访问。

### 受保护的：

 保护成员只能在其定义的类和每一个定义的  超/子类中能访问。

## TSLINT：

TSLINT 是 Typescript 的标准 linter，可以帮助我们编写干净，可维护和可读的代码。它可以使用我们自己的 lint 规则，配置和格式化程序进行自定义。

### 设置：

首先我们需要安装 Typescript 和 tslint，我们可以全局安装和局部安装：

```bash
npm install tslint typescript --save-dev
npm install tslint typescript -g
```

之后，我们可以使用 TSLINT CLI 在我们的项目中初始化 TSLINT。

```bash
tslint --init
```

现在我们有了 tslint.json 文件，我们可以开始配置我们的规则了。

### 配置：

TSLINT 允许使用配置我们自己的规则并自定义代码的外观。默认情况下，tslint.json 文件看起来像这样，只使用默认规则。

```json
{
  "defaultSeverity": "error",
  "extends": ["tslint:recommended"],
  "jsRules": {},
  "rules": {},
  "rulesDirectory": []
}
```

我们可以通过将它们放在 rules 对象中来添加其他规则。

```json
"rules": { "no-unnecessary-type-assertion": true, "array-type": [true, "array"], "no-double-space": true, "no-var-keyword": true, "semicolon": [true, "always", "ignore-bound-class-methods"]},
```

有关所有可用规则的 ​​ 概述，您可以查看[官方文档](https://palantir.github.io/tslint/rules/)。

## 推荐阅读：

[An introduction to the JavaScript DOM](https://medium.freecodecamp.org/an-introduction-to-the-javascript-dom-512463dd62ec)
[The Javascript DOM (Document Object Model) is an interface that allows developers to manipulate the content, structure…medium.freecodecamp.org]((https://medium.freecodecamp.org/an-introduction-to-the-javascript-dom-512463dd62ec)

## 结论

你一路走到最后！希望此篇文章你帮助你理解 Typescript 的基础以及如何在项目中使用。

如果您发现这个有用，请考虑推荐并与其他开发人员共享。

如果你有任何问题和反馈，在以下评论中让我知道。
