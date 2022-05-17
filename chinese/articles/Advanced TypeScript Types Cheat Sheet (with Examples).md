> -   原文地址：[Advanced TypeScript Types Cheat Sheet (with Examples) TS 高级类型清单(附 demo)🛵](https://www.freecodecamp.org/news/react-typescript-how-to-set-up-types-on-hooks/)
> -   原文作者：Ibrahima Ndaw
> -   译者：@nsuedu
> -   校对者：

![Advanced TypeScript Types Cheat Sheet (with Examples)](https://www.freecodecamp.org/news/content/images/size/w2000/2020/06/cover.png)

TypeScript 是一种类型化的语言，允许你指定变量的类型，函数参数，返回的值和对象属性。

你可以把本文看做一个带有示例的 TypeScript 高级类型备忘单

让我们开始吧！

- [Intersection Types(交叉类型)](#intersection-types交叉类型)
- [Union Types(联合类型)](#union-types联合类型)
- [Generic Types(泛型)](#generic-types泛型)
  - [泛型函数](#泛型函数)
  - [泛型接口](#泛型接口)
  - [多参数的泛型类型](#多参数的泛型类型)
- [Utility Types](#utility-types)
  - [Partial](#partial)
  - [Required](#required)
  - [Readonly](#readonly)
  - [Pick](#pick)
  - [Omit](#omit)
  - [Extract](#extract)
  - [Exclude](#exclude)
  - [Record](#record)
  - [NonNullable](#nonnullable)
- [Mapped Types( 映射类型)](#mapped-types-映射类型)
- [Type Guards(类型保护)](#type-guards类型保护)
  - [typeof](#typeof)
  - [instanceof](#instanceof)
  - [in](#in)
- [Conditional Types(条件类型)](#conditional-types条件类型)

## Intersection Types(交叉类型)

交叉类型是一种将多种类型组合为一种类型的方法。 这意味着你可以将给定的类型 A 与类型 B 或更多类型合并，并获得具有所有属性的单个类型。

```typescript
type LeftType = {
    id: number;
    left: string;
};

type RightType = {
    id: number;
    right: string;
};

type IntersectionType = LeftType & RightType;

function showType(args: IntersectionType) {
    console.log(args);
}

showType({ id: 1, left: 'test', right: 'test' });
// Output: {id: 1, left: "test", right: "test"}
```

如你所见，`IntersectionType`组合了两种类型-`LeftType`和`RightType`，并使用`＆`符号形成了交叉类型。

## Union Types(联合类型)

联合类型使你可以赋予同一个变量不同的类型

```typescript
type UnionType = string | number;

function showType(arg: UnionType) {
    console.log(arg);
}

showType('test');
// Output: test

showType(7);
// Output: 7
```

函数`showType`是一个联合类型函数，它接受字符串或者数字作为参数。

## Generic Types(泛型)

泛型类型是复用给定类型的一部分的一种方式。 它有助于捕获作为参数传递的类型 T。

> 优点: 创建可重用的函数，一个函数可以支持多种类型的数据。 这样开发者就可以根据自己的数据类型来使用函数

### 泛型函数

```typescript
function showType<T>(args: T) {
    console.log(args);
}

showType('test');
// Output: "test"

showType(1);
// Output: 1
```

如何创建泛型类型:需要使用`<>`并将 `T`(名称可自定义)作为参数传递。
上面的 🌰 栗子中，
我们给 `showType` 添加了类型变量 `T`。`T`帮助我们捕获用户传入的参数的类型(比如：number/string)之后我们就可以使用这个类型

我们把 `showType` 函数叫做泛型函数，因为它可以适用于多个类型

### 泛型接口

```typescript
interface GenericType<T> {
    id: number;
    name: T;
}

function showType(args: GenericType<string>) {
    console.log(args);
}

showType({ id: 1, name: 'test' });
// Output: {id: 1, name: "test"}

function showTypeTwo(args: GenericType<number>) {
    console.log(args);
}

showTypeTwo({ id: 1, name: 4 });
// Output: {id: 1, name: 4}
```

在上面的栗子中，声明了一个 `GenericType` 接口，该接口接收泛型类型 `T`, 并通过类型 `T`来约束接口内 `name` 的类型

> 注:泛型变量约束了整个接口后，在实现的时候，必须指定一个类型

因此在使用时我们可以将`name`设置为任意类型的值，示例中为字符串或数字

### 多参数的泛型类型

```typescript
interface GenericType<T, U> {
    id: T;
    name: U;
}

function showType(args: GenericType<number, string>) {
    console.log(args);
}

showType({ id: 1, name: 'test' });
// Output: {id: 1, name: "test"}

function showTypeTwo(args: GenericType<string, string[]>) {
    console.log(args);
}

showTypeTwo({ id: '001', name: ['This', 'is', 'a', 'Test'] });
// Output: {id: "001", name: Array["This", "is", "a", "Test"]}
```

泛型类型可以接收多个参数。 在上面的代码中，我们传入两个参数：`T`和`U`，然后将它们用作`id`,`name`的类型。 也就是说，我们现在可以使用该接口并提供不同的类型作为参数。

## Utility Types

TypeScript 内部也提供了很多方便实用的工具，可帮助我们更轻松地操作类型。 如果要使用它们，你需要将类型传递给`<>`

### Partial

-   `Partial<T>`

Partial 允许你将`T`类型的所有属性设为可选。 它将在每一个字段后面添加一个`?`。

```typescript
interface PartialType {
    id: number;
    firstName: string;
    lastName: string;
}

/*
等效于
interface PartialType {
  id?: number
  firstName?: string
  lastName?: string
}
*/

function showType(args: Partial<PartialType>) {
    console.log(args);
}

showType({ id: 1 });
// Output: {id: 1}

showType({ firstName: 'John', lastName: 'Doe' });
// Output: {firstName: "John", lastName: "Doe"}
```

上面代码中声明了一个`PartialType`接口，它用作函数`showType()`的参数的类型。 为了使所有字段都变为可选，我们使用`Partial`关键字并将`PartialType`类型作为参数传递。

### Required

-   `Required<T>`

> 将某个类型里的属性全部变为必选项

```typescript
interface RequiredType {
    id: number;
    firstName?: string;
    lastName?: string;
}

function showType(args: Required<RequiredType>) {
    console.log(args);
}

showType({ id: 1, firstName: 'John', lastName: 'Doe' });
// Output: { id: 1, firstName: "John", lastName: "Doe" }

showType({ id: 1 });
// Error: Type '{ id: number: }' is missing the following properties from type 'Required<RequiredType>': firstName, lastName
```

上面的代码中，即使我们在使用接口之前先将某些属性设为可选，但`Required`被加入后也会使所有属性成为必选。 如果省略某些必选参数，TypeScript 将报错。

### Readonly

-   `Readonly<T>`

会转换<T>类型的所有属性，以使它们无法被修改

```typescript
interface ReadonlyType {
    id: number;
    name: string;
}

function showType(args: Readonly<ReadonlyType>) {
    args.id = 4;
    console.log(args);
}

showType({ id: 1, name: 'Doe' });
// Error: Cannot assign to 'id' because it is a read-only property.
```

我们使用`Readonly`来使`ReadonlyType`的属性不可被修改。 也就是说，如果你尝试为这些字段之一赋予新值，则会引发错误。

除此之外，你还可以在指定的属性前面使用关键字`readonly`使其无法被重新赋值

```typescript
interface ReadonlyType {
    readonly id: number;
    name: string;
}
```

### Pick

-   `Pick<T, K>`

此方法允许你从一个已存在的类型 `T`中选择一些属性作为`K`, 从而创建一个新类型

即 抽取一个类型/接口中的一些子集作为一个新的类型

`T`代表要抽取的对象
`K`有一个约束: 一定是来自`T`所有属性字面量的联合类型
新的类型/属性一定要从`K`中选取，

```typescript
/**
    源码实现
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
```

```typescript
interface PickType {
    id: number;
    firstName: string;
    lastName: string;
}

function showType(args: Pick<PickType, 'firstName' | 'lastName'>) {
    console.log(args);
}

showType({ firstName: 'John', lastName: 'Doe' });
// Output: {firstName: "John"}

showType({ id: 3 });
// Error: Object literal may only specify known properties, and 'id' does not exist in type 'Pick<PickType, "firstName" | "lastName">'
```

`Pick` 与我们前面讨论的工具有一些不同，它需要两个参数

-   `T`是要从中选择元素的类型
-   `K`是要选择的属性(可以使使用联合类型来选择多个字段)

### Omit

-   `Omit<T, K>`

`Omit`的作用与`Pick`类型正好相反。 不是选择元素，而是从类型`T`中删除`K`个属性。

```typescript
interface PickType {
    id: number;
    firstName: string;
    lastName: string;
}

function showType(args: Omit<PickType, 'firstName' | 'lastName'>) {
    console.log(args);
}

showType({ id: 7 });
// Output: {id: 7}

showType({ firstName: 'John' });
// Error: Object literal may only specify known properties, and 'firstName' does not exist in type 'Pick<PickType, "id">'
```

### Extract

-   `Extract<T, U>`

> 提取`T`中可以赋值给`U`的类型--取交集

`Extract`允许你通过选择两种不同类型中的共有属性来构造新的类型。 也就是从`T`中提取所有可分配给`U`的属性。

```typescript
interface FirstType {
    id: number;
    firstName: string;
    lastName: string;
}

interface SecondType {
    id: number;
    address: string;
    city: string;
}

type ExtractType = Extract<keyof FirstType, keyof SecondType>;
// Output: "id"
```

在上面的代码中，`FirstType`接口和`SecondType`接口，都存在 `id:number`属性。 因此，通过使用`Extract`，即提取出了新的类型 `{id:number}`。

### Exclude

> `Exclude<T, U>` --从 `T` 中剔除可以赋值给 `U` 的类型。

与`Extract`不同，`Exclude`通过排除两个不同类型中已经存在的共有属性来构造新的类型。 它会从`T`中排除所有可分配给`U`的字段。

```typescript
interface FirstType {
    id: number;
    firstName: string;
    lastName: string;
}

interface SecondType {
    id: number;
    address: string;
    city: string;
}

type ExcludeType = Exclude<keyof FirstType, keyof SecondType>;

// Output; "firstName" | "lastName"
```

上面的代码可以看到，属性`firstName`和`lastName` 在`SecondType`类型中不存在。 通过使用`Extract`关键字，我们可以获得`T`中存在而`U`中不存在的字段。

### Record

-   `Record<K,T>`

此工具可帮助你构造具有给定类型`T`的一组属性`K`的类型。将一个类型的属性映射到另一个类型的属性时，`Record`非常方便。

```typescript
interface EmployeeType {
    id: number;
    fullname: string;
    role: string;
}

let employees: Record<number, EmployeeType> = {
    0: { id: 1, fullname: 'John Doe', role: 'Designer' },
    1: { id: 2, fullname: 'Ibrahima Fall', role: 'Developer' },
    2: { id: 3, fullname: 'Sara Duckson', role: 'Developer' },
};

// 0: { id: 1, fullname: "John Doe", role: "Designer" },
// 1: { id: 2, fullname: "Ibrahima Fall", role: "Developer" },
// 2: { id: 3, fullname: "Sara Duckson", role: "Developer" }
```

`Record`的工作方式相对简单。 在代码中，它期望一个`number`作为类型，这就是为什么我们将 0、1 和 2 作为`employees`变量的键的原因。 如果你尝试使用字符串作为属性，则会引发错误,因为属性是由`EmployeeType`给出的具有 ID，fullName 和 role 字段的对象。

### NonNullable

-   `NonNullable<T>`

> -- 从 `T` 中剔除 `null` 和 `undefined`

```typescript
type NonNullableType = string | number | null | undefined;

function showType(args: NonNullable<NonNullableType>) {
    console.log(args);
}

showType('test');
// Output: "test"

showType(1);
// Output: 1

showType(null);
// Error: Argument of type 'null' is not assignable to parameter of type 'string | number'.

showType(undefined);
// Error: Argument of type 'undefined' is not assignable to parameter of type 'string | number'.
```

我们将类型`NonNullableType`作为参数传递给`NonNullable`，`NonNullable`通过排除`null`和`undefined`来构造新类型。 也就是说，如果你传递可为空的值，TypeScript 将引发错误。

顺便说一句，如果将`--strictNullChecks`标志添加到`tsconfig文件`，TypeScript 将应用非空性规则。

## Mapped Types( 映射类型)

映射类型允许你从一个旧的类型，生成一个新的类型。

请注意，前面介绍的某些高级类型也是映射类型。
如:

```ts
/*
Readonly， Partial和 Pick是同态的，但 Record不是。 因为 Record并不需要输入类型来拷贝属性，所以它不属于同态：
*/
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
type Partial<T> = {
    [P in keyof T]?: T[P];
};
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

Record;
```

```typescript
type StringMap<T> = {
    [P in keyof T]: string;
};

function showType(arg: StringMap<{ id: number; name: string }>) {
    console.log(arg);
}

showType({ id: 1, name: 'Test' });
// Error: Type 'number' is not assignable to type 'string'.

showType({ id: 'testId', name: 'This is a Test' });
// Output: {id: "testId", name: "This is a Test"}
```

`StringMap<>`会将传入的任何类型转换为字符串。 就是说，如果我们在函数`showType()`中使用它，则接收到的参数必须是字符串-否则，TypeScript 将引发错误。

## Type Guards(类型保护)

类型保护使你可以使用运算符检查变量或对象的类型。 这是一个条件块，它使用`typeof`，`instanceof`或`in`返回类型。

> typescript 能够在特定区块中保证变量属于某种确定类型。可以在此区块中放心地引用此类型的属性，或者调用此类型的方法

### typeof

```typescript
function showType(x: number | string) {
    if (typeof x === 'number') {
        return `The result is ${x + x}`;
    }
    throw new Error(`This operation can't be done on a ${typeof x}`);
}

showType("I'm not a number");
// Error: This operation can't be done on a string

showType(7);
// Output: The result is 14
```

什么代码中，有一个普通的 JavaScript 条件块，通过`typeof`检查接收到的参数的类型。

### instanceof

```typescript
class Foo {
    bar() {
        return 'Hello World';
    }
}

class Bar {
    baz = '123';
}

function showType(arg: Foo | Bar) {
    if (arg instanceof Foo) {
        console.log(arg.bar());
        return arg.bar();
    }

    throw new Error('The type is not supported');
}

showType(new Foo());
// Output: Hello World

showType(new Bar());
// Error: The type is not supported
```

像前面的示例一样，这也是一个类型保护，它检查接收到的参数是否是`Foo`类的一部分，并对其进行处理。

### in

```typescript
interface FirstType {
    x: number;
}
interface SecondType {
    y: string;
}

function showType(arg: FirstType | SecondType) {
    if ('x' in arg) {
        console.log(`The property ${arg.x} exists`);
        return `The property ${arg.x} exists`;
    }
    throw new Error('This type is not expected');
}

showType({ x: 7 });
// Output: The property 7 exists

showType({ y: 'ccc' });
// Error: This type is not expected
```

什么的栗子中，使用`in`检查参数对象上是否存在属性`x`。

## Conditional Types(条件类型)

条件类型测试两种类型，然后根据该测试的结果选择其中一种。

> 一种由条件表达式所决定的类型， 表现形式为 `T extends U ? X : Y` , 即如果类型`T`可以被赋值给类型`U`，那么结果类型就是`X`类型，否则为`Y`类型。
>
> 条件类型使类型具有了不唯一性，增加了语言的灵活性，

```typescript
// 源码实现
type NonNullable<T> = T extends null | undefined ? never : T;

// NotNull<T> 等价于 NoneNullable<T,U>

// 用法示例
type resType = NonNullable<string | number | null | undefined>; // string|number
```

上面的代码中， `NonNullable`检查类型是否为 `null`，并根据该类型进行处理。 正如你所看到的，它使用了 JavaScript 三元运算符。

感谢阅读。
