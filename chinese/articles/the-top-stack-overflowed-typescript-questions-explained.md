> -  原文地址：[The Most Asked TypeScript Questions on StackOverflow – Answered for Beginners](https://www.freecodecamp.org/news/the-top-stack-overflowed-typescript-questions-explained/)
> -  原文作者：[Emmanuel Ohans](https://www.freecodecamp.org/news/author/emmanuel/)
> -  译者：
> -  校对者：

![The Most Asked TypeScript Questions on StackOverflow – Answered for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2022/07/combined-blog-cover-6.png)

_"_I hate stack overflow_"_ — said no developer ever.

While it’s helpful to have your answers a Google search away, what’s even more powerful is truly understanding the solutions you stumble upon.

In this article, I’ll explore the seven most __stackoverflowed__ TypeScript questions.

I spent hours researching these.

I hope you gain a deeper understanding of the common problems you may face with TypeScript.

This is also relevant if you’re just learning TypeScript — what better way than to get familiar with your future challenges!

Let’s get right into it.

## Table of Contents

1.  [What is the difference between Interfaces vs Types in TypeScript?](#1-what-is-the-difference-between-interfaces-vs-types-in-typescript)
2.  [In TypeScript, what is the ! (exclamation mark / bang) operator?](#2-in-typescript-what-is-the-exclamation-mark-bang-operator)
3.  [What is a “.d.ts” file in TypeScript?](#3-what-is-a-d-ts-file-in-typescript)
4.  [How Do You Explicitly Set a New Property on ‘window’ in TypeScript?](#4-how-do-you-explicitly-set-a-new-property-on-window-in-typescript)
5.  [Are Strongly Typed Functions as Parameters Possible in TypeScript?](#5-are-strongly-typed-functions-as-parameters-possible-in-typescript)
6.  [How to Fix Could Not Find Declaration File for Module …?](#6-how-to-fix-could-not-find-declaration-file-for-module-)
7.  [How Do I Dynamically Assign Properties to an Object in TypeScript?](#7-how-do-i-dynamically-assign-properties-to-an-object-in-typescript)

****Note:**** You can get a [PDF or ePub](https://www.ohansemmanuel.com/cheatsheet/top-7-stack-overflowed-typescript-questions) version of this cheatsheet for easier reference or for reading on your Kindle or tablet.

![image-51](https://www.freecodecamp.org/news/content/images/2022/07/image-51.png)

[PDF or Epub version of this cheatsheet available](https://www.ohansemmanuel.com/cheatsheet/top-7-stack-overflowed-typescript-questions)

# 1\. What is the difference between Interfaces vs Types in TypeScript?

![image-52](https://www.freecodecamp.org/news/content/images/2022/07/image-52.png)

Interfaces vs Types in Typescript

The interfaces vs types (technically, type alias) conversation is a well-contested one.

When beginning TypeScript, you may find it confusing to settle on a choice. This article clears up the confusion and helps you choose which is right for you.

## TL;DR

In numerous instances, you can use either an interface or type alias interchangeably.

Almost all features of an interface are available via type aliases, except you cannot add new properties to a type by re-declaring it. You must use an intersection type.

## Why the Confusion About Types vs Interfaces in the First Place?

Whenever we’re faced with multiple options, most people begin to suffer from the [paradox of choice](https://en.wikipedia.org/wiki/The_Paradox_of_Choice).

In this case, there are just two options.

What’s so confusing about this?

Well, the main confusion here stems from the fact that these two options are so ****evenly matched**** in most regards.

This makes it difficult to make an obvious choice — especially if you’re just starting out with Typescript.

## A Basic Example of Type Alias vs Interface

Let’s get on the same page with quick examples of an interface and a type alias.

Consider the representations of a `Human` type below:

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

These are both correct ways to denote the `Human` type – that is via a type alias or an interface.

## The Differences Between Type Alias and Interfaces

Below are the main differences between a type alias and an interface:

### Key difference: interfaces can only describe object shapes. Type aliases can be used for other types such as primitives, unions and tuples.

A type alias is quite flexible in the data types you can represent. From basic primitives to complex unions and tuples, as shown below:

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

Unlike type aliases, you may only represent object types with an interface.

### Key difference: an interface can be extended by declaring it multiple times

Consider the following example:

```ts
interface Human {
  name: string 
}

interface Human {
  legs: number 
}
```

The two declarations above will become:

```ts
interface Human {
  name: string 
  legs: number 
}
```

`Human` will be treated as a single interface: a combination of the members of both declarations.

![image-53](https://www.freecodecamp.org/news/content/images/2022/07/image-53.png)

_Property 'legs' is required in type 'Humans'_

See [TypeScript playground](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgBIFcC2cTIN4BQyxyIcmEAXMgM5hSgDmBAvgaJLIihtroSWQAbCIxrUQWAEbRWBAgHoFyMAAtgNZNCgB7KJp3owyGQjjoaKAOQixV5JgvGIADw3GCCHSDrJV1XhxkAF58IhIyCmorAHlVHE0AUUw+dAghK1YgA).

This is not the case with type aliases.

With a type alias, the following will lead to an error:

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

Duplicate identifier 'Human' error

See the [TypeScript playground](https://www.typescriptlang.org/play?#code/C4TwDgpgBAEgrgWwIYDsoF4oG8BQV9QpIIQBcUAzsAE4CWKA5lDgL57OiSyKob64EoAGwgMK5FIgBGEaszY4AxgHsUVKAAty8ZGkwD8REuQDkDBiYA07YaPFQArPPw5XroA).

With type aliases, you’ll have to resort to an intersection type:

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

See the [TypeScript playground](https://www.typescriptlang.org/play?#code/C4TwDgpgBAEgrgWwIYDsDqBLYALAckhaAXigG8AoKKqFAiALigGdgAnDFAcynIF9KeoSLESpMOADIROTKCTICqAG2lNGKRACMIrHv3JDo8ZCioljYrHjpQAZCJPjsUmeXIBjAPYoWUbIwtTEgpqWkJGAHJOTgiAGkUVGUYAVj0qNwygA).

### Minor difference: Both type aliases and interfaces can be extended, but with different syntaxes

With interfaces, you use the `extends` keyword. For types, you must use an intersection.

Consider the following examples:

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

As you can see, this is not particularly a reason to choose one over the other. However, the syntaxes differ.

### Minor difference: classes can only implement statically known members

A class can implement both interfaces or type aliases. However, a class cannot implement or extend a union type.

Consider the following example:

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

Both these work without any errors. However, the following fails:

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

A class can only implement an object type or intersection of object types with statically known members.

See the [TypeScript playground](https://www.typescriptlang.org/play?#code/C4TwDgpgBAEgrgWwIYDsoF4oG8BQV9QpIIQBcUAzsAE4CWKA5jgL5QA+2eBANhAxeRSIARhGpd8EEBAGERYljhwBjbkgoUoAMQD2cagBk+DCABN4yNLQRheJFME0XUnAoWLRMAcgDSdAF5wDEheElC8-BhQACxhUjJRAEwsQA).

## Summary of Type Aliases vs Interfaces

Your mileage may differ, but wherever possible, I stick to type aliases for their flexibility and simpler syntax. That is, I pick type aliases except I specifically need features from an interface.

For the most part, you can also decide based on your personal preference, but stay consistent with your choice — at least in a single given project.

For completeness, I must add that in performance critical types, interface comparison checks can be faster than type aliases. I’m yet to find this to be an issue.

# In TypeScript, What is the ! (Exclamation Mark / Bang) Operator?

![image-56](https://www.freecodecamp.org/news/content/images/2022/07/image-56.png)

What is the bang operator in TypeScript?

## TL;DR

This `!` is technically called the ****non-null assertion operator****. If the TypeScript compiler complains about a value being `null` or `undefined`, you can use the `!` operator to assert that the said value is not `null` or `undefined`.

Personal take: avoid doing this wherever possible.

## What is the Non-Null Assertion Operator?

`null` and `undefined` are valid JavaScript values.

The statement above holds true for all TypeScript applications as well.

However, TypeScript goes one step further.

`null` and `undefined` are equally valid types. For example, consider the following:

```ts
// explicit null
let a: null 

a = null
// the following assignments will yield errors
a= undefined 
a = {}


// explicit undefined
let b: undefined 
// the following assignments will yield errors
b = null 
b = {}
```

![image-57](https://www.freecodecamp.org/news/content/images/2022/07/image-57.png)

Error: values other than null and undefined not assignable

See the [TypeScript playground](https://www.typescriptlang.org/play?#code/DYUwLgBAhgXBB2BXYwICg1QgXgc4aA9IRGABYgQBmA9ijQO4CW8A5tAM4dOvwC2IeGA4RmKCAE8mIYABMIIAE6KaijplyJ4skFRYh5mHBADeAXwxpQkAEZwtOvfAPpipCtTrBGLdlC48-ILCokziUjLySipqaDbGSOJxxuZoQA).

In certain cases, the TypeScript compiler cannot tell whether a certain value is defined or not, that is not `null` or `undefined`.

For example, assume you had a value `Foo`.

`Foo!` produces a value of the type of `Foo` with `null` and `undefined` excluded.

![image-58](https://www.freecodecamp.org/news/content/images/2022/07/image-58.png)

Foo! excludes null and undefined from the type of Foo

You essentially say to the TypeScript compiler, __I am sure `Foo` will NOT be `null` or `undefined`_._

Let’s explore a naïve example.

In standard JavaScript, you may concatenate two strings with the `.concat` method:

```ts
const str1 = "Hello" 
const str2 = "World"

const greeting = str1.concat(' ', str2)
// Hello World
```

Write a simple duplicate string function that calls `.concat` with itself as an argument:

```ts
function duplicate(text: string | null) {
  return text.concat(text);
}
```

Note that the argument `text` is typed as `string | null`.

In strict mode, TypeScript will complain here, as calling `concat` with `null` can lead to unexpected results.

![image-59](https://www.freecodecamp.org/news/content/images/2022/07/image-59.png)

The result of calling concat with null

The TypeScript error will read: `Object is possibly 'null'.(2531)`.

![image-60](https://www.freecodecamp.org/news/content/images/2022/07/image-60.png)

Typescript error: Object is possibly null

On the flip side, a rather lazy way to silence the compiler error is to use the non-null assertion operator:

```ts
function duplicate(text: string | null) {
  return text!.concat(text!);
}
```

Note the exclamation mark after the `text` variable – `text!`.

The `text` type represents `string | null`.

`text!` represents just `string`, that is with `null` or `undefined` removed from the variable type.

The result? You’ve silenced the TypeScript error.

However, this is a silly fix.

`duplicate` can indeed be called with `null`, which may lead to unexpected results.

Note that the following example also holds true if `text` is an optional property:

```ts
// text could be "undefined"
function duplicate(text?: string) {
  return text!.concat(text!);
}
```

## Pitfalls of the `!` Operator (and What to Do Instead)

When working with TypeScript as a new user, you may feel like you’re fighting a losing battle.

The errors don’t make sense to you.

Your goal is to remove the error and move on with your life as swiftly as you can.

However, you should be careful with using the non-null assertion operator.

Silencing a TypeScript error doesn’t mean there may not still be an underlying issue—if unaddressed.

As you saw in the earlier example, you lose every relevant TypeScript safety against wrong usages where `null` and `undefined` could be unwanted.

So, what should you do?

If you write React, consider an example you’re likely familiar with:

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

In the example above (for those who do not write React), in the `React` mental model, `ref.current` will certainly be available at the time the button is clicked by the user.

The `ref` object is set soon after the UI elements are rendered.

TypeScript does not know this, and you may be forced to use the non-null assertion operator here.

Essentially, say to the TypeScript compiler, I know what I’m doing, you don’t.

```ts
const goToInput = () => ref.current!.scrollIntoView();
```

Note the exclamation mark `!`.

This “fixes” the error.

However, if in the future, someone removes the `ref` from the input, and there were no automated tests to catch this, you now have a bug.

```ts
// before
<input ref={ref}/>

// after
<input />
```

TypeScript will be unable to spot the error in the following line:

```ts
const goToInput = () => ref.current!.scrollIntoView();
```

By using the non-null assertion operator, the TypeScript compiler will act as if `null` and `undefined` are never possible for the value in question. In this case, `ref.current`.

### Solution 1: Find an Alternative Fix

The first line of action you should employ is to find an alternative fix.

For example, often you can explicitly check for `null` and `undefined` values like this:

```ts
// before 
const goToInput = () => ref.current!.scrollIntoView();

// now 
const goToInput = () => {
  if (ref.current) {
   //Typescript will understand that ref.current is certianly 
   //avaialble in this branch
     ref.current.scrollIntoView()
  }
};

// alternatively (use the logical AND operator)
const goToInput = () => ref.current && ref.current.scrollIntoView();
```

Numerous engineers will argue over the fact that this is more verbose.

That’s correct.

But you should choose verbose over possibly breaking code being pushed to production.

This is a personal preference. Your mileage may differ.

### Solution 2: Explicitly Throw an Error

In cases where an alternative fix doesn’t cut it and the non-null assertion operator seems like the only solution, I typically advise you throw an error before doing this.

Here’s an example (in pseudocode):

```ts
function doSomething (value) {
   // for some reason TS thinks the value could be  
   // null or undefined but you disagree
   
  if(!value) {
    // explicilty assert this is the case 
    // throw an error or log this somewhere you can trace
    throw new Error('uexpected error: value not present')
  } 

  // go ahead and use the non-null assertion operator
  console.log(value)
}
```

A practical case where I’ve found myself sometimes doing this is while using `Formik`.

Except things have changed, and I do think `Formik` is poorly typed in numerous instances.

The example may go similarly if you've done your Formik validation and are sure that your values exist.

Here’s some pseudocode:

```ts
<Formik 
  validationSchema={...} 
  onSubmit={(values) => {
   // you are sure values.name should exist because you had 
   // validated in validationSchema but TypeScript doesn't know this

   if(!values.name) {
    throw new Error('Invalid form, name is required')		
   } 
   console.log(values.name!)
}}>


</Formik>
```

In the pseudocode above, `values` could be typed as:

```ts
type Values = {
  name?: string
}
```

But before you hit `onSubmit`, you’ve added some validation to show a UI form error for the user to input a `name` before moving on to the form submission.

There are other ways to get around this. But if you’re sure a value exists but can’t quite communicate that to the TypeScript compiler, use the non-null assertion operator. But also add an assertion of your own by throwing an error you can trace.

## How About an Implicit Assertion?

Even though the name of the operator reads non-null assertion operator, no “assertion” is actually being made.

You’re mostly asserting (as the developer) that the value exists.

The TypeScript compiler does NOT assert that this value exists.

So, if you must, you may go ahead and add your assertion (for example as discussed in the earlier section).

Also, note that no more JavaScript code is emitted by using the non-null assertion operator.

As stated earlier, there’s no assertion done here by TypeScript.

Consequently, TypeScript will not emit some code that checks if this value exists or not.

The JavaScript code emitted will act as if this value always existed.

![image-62](https://www.freecodecamp.org/news/content/images/2022/07/image-62.png)

Emitted javascript code same as Javascript

## Conclusion

TypeScript 2.0 saw the release of the ****non-null assertion operator****. Yes, it’s been around for some time ([released in 2016](https://github.com/microsoft/TypeScript/releases/tag/v2.0.3)). At the time of writing, the latest version of TypeScript is `v4.7`.

If the TypeScript compiler complains about a value being `null` or `undefined`, you can use the `!` operator to assert that the said value is not null or undefined.

Only do this if you’re certain that is the case.

Even better, go ahead and add an assertion of your own, or try to find an alternative solution.

Some may argue that if you need to use the non-null assertion operator every time, it’s a sign you’re poorly representing the state of your application state via TypeScript.

I agree with this school of thought.

# What is a “.d.ts” File in TypeScript?

![image-63](https://www.freecodecamp.org/news/content/images/2022/07/image-63.png)

What is a d.ts file? 

## TL;DR

`.d.ts` files are called type declaration files. They exist for one purpose only: to describe the shape of an existing module and they only contain type information used for type checking.

## Introduction to `.d.ts` Files in TypeScript

Upon learning the basics of TypeScript, you unlock superpowers.

At least that’s how I felt.

You automagically get warnings on potential errors and you get auto-completion out of the box in your code editor.

While seemingly magical, nothing with computers really is.

So, what’s the trick here, TypeScript?

In clearer language, how does TypeScript know so much? How does it decide what API is correct or not? What methods are available on a certain object or class, and which aren’t?

The answer is less magical.

TypeScript relies on types.

Occasionally, you do not write these types, but they exist.

They exist in files called declaration files.

These are files with a `.d.ts` ending.

## A Simple Example of `.d.ts` Files

Consider the following TypeScript code:

```ts
// valid 
const amount = Math.ceil(14.99)

// error: Property 'ciil' does not exist on type 'Math'.(2339)
const otherAmount = Math.ciil(14.99)
```

See the [TypeScript playground](https://www.TypeScriptlang.org/play?#code/MYewdgzgLgBAhgWxAVzLAvDAsnKALAOmAFMBLAGwAoBGAFgIE4GBKAKFdElhH2ICcAgklQZsuQsFIUa9Jm1ZA).

The first line of code is perfectly valid, but the second, not quite.

And TypeScript is quick to spot the error: `Property 'ciil' does not exist on type 'Math'.(2339)`.

![image-64](https://www.freecodecamp.org/news/content/images/2022/07/image-64.png)

The Typescript error spotting the wrong property access "ciil"

How did TypeScript know `ciil` does not exist on the `Math` object?

The `Math` object isn’t a part of our implementation. It’s a standard built-in object.

So, how did TypeScript figure that out?

The answer is there are ****declaration files**** that describe these built-in objects.

Think of a declaration file as containing all type information relating to a certain module. It contains no actual implementation, just type information.

These files have a `.d.ts` ending.

Your implementation files will either have `.ts` or `.js` endings to represent TypeScript or JavaScript files.

These declaration files have no implementations. They only contain type information and have a `.d.ts` file ending.

## Built-in Type Definitions

A great way to understand this in practice is to set up a brand new TypeScript project and explore the type definition files for top-level objects like `Math`.

Let’s do this.

Create a new directory, and name it whatever’s appropriate.

I’ll call mine `dts`.

Change directories to this newly created folder:

```ts
cd dts
```

Now initialise a new project:

```ts
npm init --yes
```

Install TypeScript:

```ts
npm install TypeScript --save-dev
```

![image-65](https://www.freecodecamp.org/news/content/images/2022/07/image-65.png)

Installing TypeScript

This directory should contain 2 files and one subdirectory:

![image-66](https://www.freecodecamp.org/news/content/images/2022/07/image-66.png)

The files after installation

Open the folder in your favourite code editor.

If you investigate the `TypeScript` directory within `node_modules`, you’ll find a bunch of type declaration files out of the box.

![image-67](https://www.freecodecamp.org/news/content/images/2022/07/image-67.png)

Type declaration files in the TypeScript directory

These are present courtesy of installing TypeScript.

By default, TypeScript will include type definition for all DOM APIs, for example think `window` and `document`.

As you inspect these type declaration files, you’ll notice that the naming convention is straightforward.

It follows the pattern: `lib.[something].d.ts`.

Open up the `lib.dom.d.ts` declaration file to view all declarations related to the browser DOM API.

![image-68](https://www.freecodecamp.org/news/content/images/2022/07/image-68.png)

The dom declaration file

As you can see, this is quite a gigantic file.

But so are all the APIs available in the DOM.

Awesome!

Now, if you take a look at the `lib.es5.d.ts` file, you’ll see the declaration for the `Math` object, containing the `ceil` property.

![image-69](https://www.freecodecamp.org/news/content/images/2022/07/image-69.png)

The Math object in the declaration file

Next time you think, wow, TypeScript is wonderful. Remember, a big part of that awesomeness is due to the lesser-known heroes: type declaration files.

It’s not magic. Just type declaration files.

## External Type Definitions in TypeScript

What about APIs that aren’t built-in?

There’s a host of `npm` packages out there to do just about anything you want.

Is there a way for TypeScript to also understand the relevant type relationships for the said module?

Well, the answer is a resounding yes.

There are typically two ways a library author may do this.

### Bundled Types

In this case, the author of the library has already bundled the type declaration files as part of the package distribution.

You typically don’t need to do anything.

You just go ahead and install the library in your project, you import the required module from the library and see if TypeScript should automatically resolve the types for you.

Remember, this is not magic.

The library author has bundled the type declaration file in the package distribution.

### DefinitelyTyped (@types)

Imagine a central public repository that hosts declaration files for thousands of libraries?

Well, bring that image home.

This repository already exists.

The [DefinitelyTyped repository](https://github.com/DefinitelyTyped/DefinitelyTyped/) is a centralised repository that stores the declaration files for thousands of libraries.

In all honestly, the vast majority of commonly used libraries have declaration files available on ****DefinitelyTyped****.

These type definition files are automatically published to `npm` under the `@types` scope.

For example, if you wanted to install the types for the `react` npm package, you’d do this:

```ts
npm install --save-dev @types/react
```

If you find yourself using a module whose types TypeScript does not automatically resolve, attempt installing the types directly from DefinitelyTyped.

See if the types exist there. For example:

```ts
npm install --save-dev @types/your-library
```

Definition files that you add in this manner will be saved to `node_modules/@types`.

TypeScript will automatically find these. So, there’s no additional step for you to take.

## How to Write Your Own Declaration Files

In the uncommon event that a library didn’t bundle its types and does not have a type definition file on DefinitelyTyped, you can write your own declaration files.

Writing declaration files in-depth is beyond the scope of this article, but a use case you’ll likely come across is silencing errors about a particular module without a declaration file.

Declaration files all have a `.d.ts` ending.

So to create yours, create a file with a `.d.ts` ending.

For example, assume I have installed the library `untyped-module` in my project.

`untyped-module` has no referenced type definition files, so TypeScript complains about this in my project.

To silence this warning, I may create a new `untyped-module.d.ts` file in my project with the following content:

```ts
declare module "some-untyped-module";
```

This will declare the module as type `any`.

We won’t get any TypeScript support for that module, but you’d have silenced the TypeScript warning.

Ideal next steps would include opening an issue in the module’s public repository to include a TypeScript declaration file, or writing out a decent one yourself.

## Conclusion

Next time you think, wow, TypeScript is remarkable. Remember, a big part of that awesomeness is due to the lesser-known heroes: type declaration files.

Now you understand how they work!

# How Do You Explicitly Set a New Property on `window` in Typescript?

![image-70](https://www.freecodecamp.org/news/content/images/2022/07/image-70.png)

Set a new property on the window object?

## TL;DR

Extend the existing interface declaration for the `Window` object.

## Introduction to `window` in TypeScript

Knowledge builds upon knowledge.

Whoever said that was right.

In this section, we will build upon the knowledge from the last two sections:

-   [Interfaces vs Types in TypeScript](https://blog.ohansemmanuel.com/interfaces-vs-types-in-typescript/)
-   [What is a d.t.s file in TypeScript](https://blog.ohansemmanuel.com/what-is-a-dts-file-in-typescript/)?

Ready?

First, I must say, in my early days with TypeScript, this was a question I googled over and over again.

I never got it. And I didn’t bother, I just googled.

That’s never the right mentality to gaining mastery over a subject.

Let’s discuss the solutions to this.

## Understanding the Problem

The problem here is actually straightforward to reason about.

Consider the following TypeScript code:

```ts
window.__MY_APPLICATION_NAME__ = "freecodecamp"

console.log(window.__MY_APPLICATION_NAME__)
```

TypeScript is quick to let you know `__MY_APPLICATION_NAME__` does not exist on type ‘Window & typeof globalThis’.

![image-71](https://www.freecodecamp.org/news/content/images/2022/07/image-71.png)

The property does not exist on Window error

See the [TypeScript playground](https://www.freecodecamp.org/news/p/a31cc449-928c-4453-a83d-ce30ef79f986/%20https://www.typescriptlang.org/play?#code/O4SwdgJg9sB0D68CyBNeBBACpgMgSQGF0AVPAeQDl4L0kBRRAAgF5GAiAMwCcBTHgYygQBAQwC2ABzYAoaYLABnKABsesZVADmAClCQYCZGiy5CJclRr1EASln2gA).

Okay, TypeScript.

We get it.

On closer inspection, remember from the last section on [declaration files](https://blog.ohansemmanuel.com/what-is-a-dts-file-in-typescript/) that there’s a declaration file for all existing browser APIs. This includes built-in objects such as `window`.

![image-72](https://www.freecodecamp.org/news/content/images/2022/07/image-72.png)

The default Window interface declaration

If you look in the `lib.dom.d.ts` declaration file, you’ll find the `Window` interface described.

In layperson’s terms, the error here says the `Window` interface describes how I understand the `window` object and its usage. That interface does not specify a certain `__MY_APPLICATION_NAME__` property.

## How to Fix the Error

In the types vs interface section, I explained how to extend an interface.

Let’s apply that knowledge here.

We can extend the `Window` interface declaration to become aware of the `__MY_APPLICATION_NAME__` property.

Here’s how:

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

Yes, you were close … or perhaps right:

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

_And _Voilà.__

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

# How to Fix Could Not Find Declaration File for Module …?

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