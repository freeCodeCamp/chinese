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
- [Type Guards(typeof 类型保护)](#type-guardstypeof-类型保护)
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

联合类型使你可以在给定变量中使用不同的类型

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

函数`showType`是一个联合类型，它接受字符串或者数字作为参数。

## Generic Types(泛型)

```typescript
function showType<T>(args: T) {
    console.log(args);
}

showType('test');
// Output: "test"

showType(1);
// Output: 1
```

## Utility Types



### Partial



### Required



### Readonly



### Pick



### Omit



### Extract



### Exclude



### Record



### NonNullable

> NonNullable<T> -- 从 T 中剔除 null 和 undefined



## Mapped Types( 映射类型)



## Type Guards(typeof 类型保护)



## Conditional Types(条件类型)


