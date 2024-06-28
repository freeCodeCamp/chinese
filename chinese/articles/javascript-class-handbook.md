---
title: The JavaScript Class Handbook – Complete Guide to Class Fields and the
  Super Keyword
date: 2024-05-20T20:05:18.000Z
author: Oluwatobi Sofela
authorURL: https://www.freecodecamp.org/news/author/oluwatobiss/
originalURL: https://www.freecodecamp.org/news/javascript-class-handbook/
translator: ""
reviewer: ""
---

/ [#JavaScript][1]

<!-- more -->

# The JavaScript Class Handbook – Complete Guide to Class Fields and the Super Keyword

![Oluwatobi Sofela](https://www.freecodecamp.org/news/content/images/size/w60/2023/09/oss.jpg)

[Oluwatobi Sofela][2]

  ![The JavaScript Class Handbook – Complete Guide to Class Fields and the Super Keyword](https://www.freecodecamp.org/news/content/images/size/w2000/2024/05/JavaScript-Class-Handbook-Cover.png)

Classes let you privatize your data while providing users indirect access to it. It is an excellent way to prevent direct access to your constructor’s data.

This handbook aims to show you exactly how classes work in JavaScript. We will also discuss class fields and the `super` keyword.

## Table of Contents

1.  [What is a JavaScript Class?][3]
2.  [Why Classes in JavaScript?][4]
3.  [Syntax of a JavaScript Class][5]
    -   [What is a `class` Keyword?][6]
    -   [What is a Class Name?][7]
    -   [What is a Code Block?][8]
    -   [What is a Class Body?][9]
4.  [What is a JavaScript Class Field?][10]
    -   [How to Create Class Fields in JavaScript][11]
    -   [How to Create Class Fields with Computed Names][12]
    -   [How to Create Regular Class Field Methods][13]
    -   [How to Create Shorthand Class Field Methods][14]
    -   [Regular vs. Shorthand Class Field Methods: What’s the Difference?][15]
    -   [What is a User-defined Prototypal Method in JavaScript Classes?][16]
    -   [What is a `constructor` Method in JavaScript Classes?][17]
    -   [Types of Class Fields][18]
    -   [What is a Public Class Field in JavaScript Classes?][19]
    -   [What is a Private Class Field in JavaScript Classes?][20]
    -   [What is a Static Class Field in JavaScript Classes?][21]
5.  [Types of JavaScript Classes][22]
    -   [What is a JavaScript Class Declaration?][23]
    -   [What is a JavaScript Class Expression?][24]
    -   [What is a Derived Class in JavaScript?][25]
6.  [What is the `super` Keyword in JavaScript?][26]
    -   [How to Use the `super` Keyword as a Function Caller][27]
    -   [How to Use the `super` Keyword as a Property Accessor][28]
    -   [`super` vs. `this` Keyword: What’s the Difference?][29]
7.  [Components of a JavaScript Class][30]
8.  [How Does a JavaScript Class Help with Encapsulation?][31]
9.  [Important Things to Know about JavaScript Classes][32]
    -   [1\. Declare Your Class Before You Access It][33]
    -   [2\. Classes are Functions][34]
    -   [3\. Classes are Strict][35]
    -   [4\. Avoid the `return` Keyword in Your Class’s `constructor` Method][36]
    -   [5\. A Class’s Evaluation starts from the `extends` clause to its values][37]
10.  [Overview][38]

So, let’s get started from the basics.

## What is a JavaScript Class?

A JavaScript class is an [object constructor][39] that the [`new` keyword][40] uses to create a new object instance.

Here’s an example:

```js
// Define a JavaScript class:
class Name {}

// Create an object instance from the Name class:
const yourName = new Name();

// Check yourName's content:
yourName;

// The invocation above will return an empty object:
{ }
```

[**Try Editing It**][41]

The snippet above used the `new` keyword to create a new object instance from the `class` constructor.

**Note:** Calling a JavaScript class requires the `new` keyword. Otherwise, browsers will throw a `TypeError`.

## Why Classes in JavaScript?

Classes provide a way to create a template for creating objects that have access to private data through public methods.

In other words, classes help you [encapsulate][42] your data while providing users indirect access to an instance’s internal workings. This lets you provide users with a clean and friendly interface that is independent of an object’s internal implementations.

For instance, [`Date`][43] is a JavaScript class that allows you to access its date data through its public methods, such as `getDate()`, `setDate()`, and `getFullYear()`.

## Syntax of a JavaScript Class

```js
class NameOfClass {
  // class's body
}
```

A class is composed of four components:

1.  A `class` keyword
2.  The name of the class
3.  A code block (`{...}`)
4.  The body of the class

Let’s discuss each component.

### What is a `class` Keyword?

We use the `class` keyword to declare to browsers that a specific piece of code is a JavaScript class—not a mathematical or other generic class.

### What is a Class Name?

A class name allows you to create an identifier for your class, which you can use to reference it.

**Note:** Developers typically use uppercase to begin a class's name. This convention helps to differentiate a constructor from other functions.

### What is a Code Block?

A block is a pair of braces (`{...}`) used to group multiple statements together.

Here’s an example:

```js
{
  var bestColor = "White";
}
```

The block in the snippet above encased one [JavaScript statement][44].

Here’s another example:

```js
if (new Date().getHours() < 18) {
  const hourNow = new Date().getHours();
  const minutesNow = new Date().getMinutes();
  const secondsNow = new Date().getSeconds();
  console.log(`Check your plans now. The time is ${hourNow}:${minutesNow}:${secondsNow}.`);
}
```

The `if` condition’s code block grouped four JavaScript statements together.

Now, consider this snippet:

```js
class Time {
  hourNow = new Date().getHours();
  minutesNow = new Date().getMinutes();
  secondsNow = new Date().getSeconds();
}

if (new Date().getHours() < 18) {
   const currentTime = new Time();
   console.log(`Check your plans now. The time is ${currentTime.hourNow}:${currentTime.minutesNow}:${currentTime.secondsNow}.`);
}
```

The `Time` class’s code block grouped three JavaScript statements, while the `if` condition’s code block grouped two.

Note the following:

-   `hourNow`, `minutesNow`, and `secondsNow` are the class fields (properties).
-   The snippet above used the `new` keyword to construct a new object from the `Time` class. Therefore, the `currentTime` object is an instance of the `Time` constructor class.

### What is a Class Body?

A class body is where you place a sequence of statements.

Here’s the syntax:

```js
class NameOfClass {
  // class' body
}
```

**Note:** A class’s body houses only class fields. But what exactly is a class field? Let’s find out.

## What is a JavaScript Class Field?

A class field is a property defined directly in a class’s body—not inside any of the class’s [methods][45].

### How to Create Class Fields in JavaScript

You can create a class field by using an equal sign (`=`)—not a colon (`:`)—to assign a value to a property.

Here’s an example:

```js
// Define a JavaScript class:
class Name {
  // Create two class fields:
  firstName = "Oluwatobi";
  lastName = "Sofela";
}

// Create a new object instance:
const fullName = new Name();

console.log(fullName.firstName + " " + fullName.lastName);
```

[**Try Editing It**][46]

The `Name` class in the snippet above has two class fields (`firstName` and `lastName`).

Note the following:

-   JavaScript class fields default to `undefined` if you do not provide any value.
-   Class fields are like the regular object [properties][47] whose names you can [compute][48]. Let’s discuss how.

### How to Create Class Fields with Computed Names

You can compute (evaluate) a class field’s name by putting an expression in a square bracket like so:

```js
// Initialize a num variable with a number:
let num = 0;

// Assign a string value to an enSuites variable:
const enSuites = "East";

// Define a Room class and compute each of its class fields' names:
class Room {
  [enSuites + ++num] = num;
  [enSuites + ++num] = num;
  [enSuites + ++num] = num;
}

// Create an ensuiteRooms object instance:
const ensuiteRooms = new Room();

// Check the ensuiteRooms's content:
console.log(ensuiteRooms);

// The invocation above will return:
{East1: 1, East2: 2, East3: 3}
```

[**Try Editing It**][49]

We used the `[enSuites + ++num]` syntax in the snippet above to compute the class fields’ names.

In other words, JavaScript evaluated the `enSuites + ++num` expression and used the result as each class field’s name.

**Note:** You can also define class fields as regular JavaScript methods. Let’s talk more about this now.

### How to Create Regular Class Field Methods

You can create a regular class field method by using an equal sign (`=`) to assign a function to a property.

Here’s an example:

```js
// Define a JavaScript class:
class Time {
  // Create two regular class field methods:
  hourNow = function() {
    return new Date().getHours();
  }
  minutesNow = function() {
    return new Date().getMinutes();
  }
}

// Create a new object instance:
const currentTime = new Time();

console.log(`The time is ${currentTime.hourNow()}:${currentTime.minutesNow()}.`);
```

[**Try Editing It**][50]

The `hourNow` and `minutesNow` methods in the snippet above are class field methods because they are properties containing regular JavaScript functions.

JavaScript allows you to use shorthand syntax to shorten your class’s methods. Let’s see how.

### How to Create Shorthand Class Field Methods

The shorthand class field method is a concise way of defining JavaScript methods in the body of your classes.

Here’s an example:

```js
// Define a JavaScript class:
class Time {
  // Create two shorthand class field methods: 
  hourNow() {
    return new Date().getHours();
  }
  minutesNow() {
    return new Date().getMinutes();
  }
}

// Create a new object instance:
const currentTime = new Time();

console.log(`The time is ${currentTime.hourNow()}:${currentTime.minutesNow()}.`);
```

[**Try Editing It**][51]

Although you can use the regular and shorthand methods interchangeably in your class’s body, you should know a significant difference between the two syntaxes. Let’s discuss it now.

### Regular vs. Shorthand Class Field Methods: What’s the Difference?

The main difference between regular and shorthand class field methods is this:

-   Regular methods are [instance properties][52], while shorthand methods are [prototypal properties][53].

In other words, JavaScript treats regular and shorthand methods differently as follows:

-   **Regular method:** JavaScript adds the method to the [object instance][54] you construct with the `new` keyword. Therefore, regular methods are properties of the object instance.
-   **Shorthand method:** JavaScript adds the method to the class’s [`prototype` property][55]. Therefore, shorthand methods are prototypal properties of an object instance.

Here’s an example:

```js
// Define a JavaScript class:
class Time {
  // Create a regular method:
  hourNow = function() {
    return new Date().getHours();
  }
  // Create a shorthand method:
  minutesNow() {
    return new Date().getMinutes();
  }
}

// Create a new object instance:
const currentTime = new Time();

// Check currentTime's content:
console.log(currentTime);

// The invocation above will return:
{ hourNow: hourNow() }
```

[**Try Editing It**][56]

The `currentTime` object instance contains only the `hourNow` property because regular methods are instance properties the `new` keyword assigned to the object it constructs from its constructor class.

On the other hand, shorthand methods are prototypal methods that JavaScript adds to the `prototype` property of the class you’ve defined.

Therefore, you can access the `minuteNow` method through its class’s [prototypal inheritance][57] like so:

```js
// Define a JavaScript class:
class Time {
  // Create a regular method:
  hourNow = function() {
    return new Date().getHours();
  }
  // Create a shorthand method:
  minutesNow() {
    return new Date().getMinutes();
  }
}

// Check Time's prototype content:
console.log(Time.prototype);

// The invocation above will return:
{...}:
  constructor: class Time {}
  minutesNow: function minutesNow()
  [[Prototype]]: Object {...}
```

[**Try Editing It**][58]

You can see that `Time`’s `prototype` property contains the `minutesNow` method, which all object instances will inherit automatically.

Here’s an example:

```js
// Define a JavaScript class:
class Time {
  // Create a shorthand method:
  minutesNow() {
    return new Date().getMinutes();
  }
}

// Create an object instance from the Time class:
const currentTime = new Time();

// Check currentTime's content:
console.log(currentTime);

// The invocation above will return an empty object:
{ }

// Invoke currentTime's minutesNow method:
console.log(currentTime.minutesNow());
```

[**Try Editing It**][59]

The `currentTime.minutesNow()` code returned a valid value because `currentTime` inherited the `minuteNow()` method from its constructor’s `prototype` property.

**Note:** A JavaScript class has two types of prototypal methods:

-   User-defined methods
-   Constructor methods

Let’s discuss the two types now.

### What is a User-defined Prototypal Method in JavaScript Classes?

A user-defined prototypal method is the shorthand method you create yourself in the body of your JavaScript class.

Here’s an example:

```js
// Define a JavaScript class:
class Name {
  // Create a shorthand method:
  firstName(name) {
    return name;
  }
}

// Create an object instance from the Name class:
const myName = new Name().firstName("Oluwatobi");

// Log myName's content to the console:
console.log(myName);

// The invocation above will return:
"Oluwatobi"
```

[**Try Editing It**][60]

The `firstName()` method is a user-defined method because we created it ourselves in the body of the `Name` class.

## What is a Constructor Method in JavaScript Classes?

A `constructor()` is the default prototypal method that comes built-in with every JavaScript class.

Creating a `constructor` method is optional. However, if you do not create one, JavaScript will automatically add an empty one.

The `constructor` method automatically receives the [arguments][61] you pass to the class. Therefore, it is the ideal place to define the class fields that depend on the [class invocator][62]’s arguments.

Here’s an example:

```js
// Define a JavaScript class:
class Name {
  // Use the built-in constructor method:
  constructor(name) {
    this.name = name;
  }
}

// Create an object instance from the Name class:
const myName = new Name("Oluwatobi");

// Log myName's content to the console:
console.log(myName);

// The invocation above will return:
{ name: "Oluwatobi" }
```

[**Try Editing It**][63]

The `Name` class above has a `constructor` method with one [instance property][64] in its code block.

**Tip:** A `constructor()` method’s `this` keyword refers to the class’s object instance.

JavaScript executes the `constructor` method before any other user-defined methods. Therefore, it is the best place to define any code you want to run before other methods in the class’s body. For instance, consider the code below:

```js
// Define a JavaScript class:
class CarColor {
  // Use the built-in constructor method:
  constructor(color) {
    this.carColor = `${color} car`;
  }
  // Create a shorthand method:
  revealColor() {
    console.log(`I have a ${this.carColor}`);
  }
}

// Create an object instance from the CarColor class:
const myCarColor = new CarColor("white");

// Invoke myCarColor's revealColor prototypal method:
myCarColor.revealColor();

// The invocation above will return:
"I have a white car"
```

[**Try Editing It**][65]

The snippet above automatically invoked the `constructor` method while creating `myCarColor`’s object instance.

Therefore, the computer processed the `constructor`’s statements before executing the `myCarColor.revealColor()` code.

Note the following:

-   You can only use the [JavaScript method shorthand][66] technique to define a `constructor`. Otherwise, browsers will throw an `Uncaught SyntaxError`.
-   A class can have only one `constructor` method. Otherwise, browsers will throw an `Uncaught SyntaxError`.

Now that we know how to create class fields, we can discuss the available types.

## Types of Class Fields

The three types of class fields are:

-   Public class fields
-   Private class fields
-   Static class fields

Let’s discuss each type.

### What is a Public Class Field in JavaScript Classes?

A public class field is a property an object instance has access to.

**Tip:** Although you can define multiple public class fields with the same name, the last field will overwrite the previous ones.

#### Example: How to create public class fields

```js
// Define a JavaScript class:
class Name {
  // Create two public class fields:
  myName = "Oluwatobi";
  updateMyName(name) {
    this.myName = name;
  }
}

// Create a new object instance:
const author = new Name();

// Check myName's current value:
author.myName;

// The invocation above will return:
"Oluwatobi"

// Use the author variable's property to modify myName's value:
author.myName = "Sofela";

// Check myName's current value:
author.myName;

// The invocation above will return:
"Sofela"

// Use the author variable's method to update myName's value:
author.updateMyName("CodeSweetly");

// Check myName's current value:
author.myName;

// The invocation above will return:
"CodeSweetly"
```

[**Try Editing It**][67]

The `Name` class in the snippet above contains public class fields because you can use the class’s object instances to access and modify the two properties.

Suppose you define multiple public class fields with the same name. In that case, the last property will overwrite the previous ones.

#### Example: The last public class field overwrites the previous ones with the same name

```js
// Define a JavaScript class:
class Name {
  // Create three public class fields:
  myName = "Oluwatobi";
  myName = "Sofela";
  myName = "CodeSweetly";
}

// Create a new object instance:
const author = new Name();

// Check myName's current value:
author.myName;

// The invocation above will return:
"CodeSweetly"
```

[**Try Editing It**][68]

The snippet above returned `"CodeSweetly"` because the last `myName` public class field overwrites the previously declared ones.

### What is a Private Class Field in JavaScript Classes?

A private class field is a property you can only access and modify within the class’s body.

You can prefix a class field with the hash (`#`) symbol to make it a private property.

**Tip:** Private class field names must be unique. You cannot redeclare a private field in the same class. Otherwise, the browser will throw an `Uncaught SyntaxError`.

#### Example: How to create private class fields

```js
// Define a JavaScript class:
class Name {
  // Create a private class field:
  #myName = "Oluwatobi";
}

// Create a new object instance:
const author = new Name();

// Check myName's current value:
author.myName;

// The invocation above will return:
undefined
```

[**Try Editing It**][69]

The snippet above returned `undefined` because `myName` is a private class field that can only be read and modified from within the class’s body.

Therefore, you need to use an internal code to access `myName`.

#### Example: How to access private class fields

```js
// Define a JavaScript class:
class Name {
  // Create a private class field:
  #myName = "Oluwatobi";

  // Create a public class field:
  fullName = `${this.#myName} Sofela`;

  // Create another public class field:
  showMyName() {
    return this.#myName;
  }
}

// Create a new object instance:
const author = new Name();

// Check fullName's current value:
author.fullName;

// The invocation above will return:
"Oluwatobi Sofela"

// Check myName's current value:
author.showMyName();

// The invocation above will return:
"Oluwatobi"
```

[**Try Editing It**][70]

**Note:**

-   A `constructor()` method can only be public. Browsers will throw an `Uncaught SyntaxError` if you define it as a private class field.
-   You cannot create private class fields later (outside the class’s body). For instance, writing `author.#wifeName = "Sarah"` will throw an `Uncaught SyntaxError`.
-   Private class fields make data encapsulation possible in JavaScript classes.

### What is a Static Class Field in JavaScript Classes?

A static class field is a property you can only access and modify directly from the class itself.

In other words, JavaScript interprets static fields as a class’s own properties—not [instance][71] or [prototypal][72] properties.

Therefore, a class’s instance or `prototype` object cannot access static class fields.

**Tip:**

-   Although you can define multiple static class fields with the same name, the last field will overwrite the previous ones.
-   JavaScript does not add static fields to the `prototype` property. They remain in the class’s body as its own properties. So, they are ideal for properties you wish to avoid replicating across the class’s instance objects.

We prefix a class field with the `static` keyword to make it a static property.

#### Example: How to create static class fields

```js
// Define a JavaScript class:
class Name {
  // Create a static class field:
  static myName = "Oluwatobi";
}

// Create a new object instance:
const author = new Name();

// Check myName's current value:
author.myName;

// The invocation above will return:
undefined
```

[**Try Editing It**][73]

The snippet above returned `undefined` because `myName` is a static class field that can only be read and modified from the class itself, not through its instance.

In other words, you need to call `myName` on the class itself to read or modify it.

#### Example: How to access static class fields

```js
// Define a JavaScript class:
class Name {
  // Create a static class field:
  static myName = "Oluwatobi";
}

// Check myName's current value:
Name.myName;

// The invocation above will return:
"Oluwatobi"
```

[**Try Editing It**][74]

Suppose you define multiple static class fields with the same name. In that case, the last property will overwrite the previous ones.

#### Example: The last static class field overwrites the previous ones with the same name

```js
// Define a JavaScript class:
class Name {
  // Create static class fields:
  static myName = "Oluwatobi";
  static myName = "Sofela";
  static myName = "CodeSweetly";
}

// Check myName's current value:
Name.myName;

// The invocation above will return:
"CodeSweetly"
```

[**Try Editing It**][75]

The snippet above returned `"CodeSweetly"` because the last `myName` static class field overwrites the previously declared ones.

Now that we know the components of a JavaScript class, we can discuss its types.

## Types of JavaScript Classes

The three types of JavaScript classes are:

-   Class declaration
-   Class expression
-   Derived class

Let’s discuss each type.

### What is a JavaScript Class Declaration?

A class declaration is a class created without assigning it to a [variable][76].

We sometimes call class declaration a “class definition” or “class statement.”

Here’s an example:

```js
class Numbers {}
```

The class above is a class declaration because we defined it without storing it in a variable.

### What is a JavaScript Class Expression?

A class expression is a class you create and assign to a variable.

Here’s an example:

```js
const myClassExpr = class Numbers {};
```

The class above is a named class expression that we assigned to the `myClassExpr` variable.

**Note:** You can only use a class expression’s name within the class’s body. In other words, JavaScript allows you to use `myClassExpr` and `Numbers` interchangeably within the class’s body. However, only `myClassExpr` is callable outside the class. Otherwise, browsers will throw a `ReferenceError`.

You can also write the snippet above as an anonymous class expression like so:

```js
const myClassExpr = class {};
```

The class above is an anonymous function expression assigned to the `myClassExpr` variable.

**Tip:**

-   An anonymous class is a class with no name.
-   A named class is a class with a name.

Let’s now discuss derived classes.

### What is a Derived Class in JavaScript?

A derived class is a class that extends the [public][77] and [static][78] features of an existing class.

In other words, a derived class is the child of a parent class.

**Important:** A derived class _cannot_ access its parent class’s [private features][79].

#### Syntax of a derived class

We use the `extends` keyword to create a derived class.

**Tip:** The `extends` keyword in JavaScript makes one class the child of another constructor. In other words, the `extends` keyword assigns a constructor (class or function) as a specified class’s [dunder proto][80].

Here’s the syntax:

```js
class DerivedClass extends BaseClass {
  // derived class's body
}
```

-   A derived class is sometimes called a child class.
-   A base class is sometimes called a parent class.
-   You can extend any constructor (class or function) that meets the following criteria:
    -   You can use the `new` keyword to create an object instance from it.
    -   It has a [`prototype`][81] property.
    -   Its `prototype` property’s value is an [object][82] or `null`.

Once you extend a child class to a parent class, the derived class will inherit all its base class’s public and static class fields.

#### Example: How to use a base class’s features in a derived class

```js
// Create a new class:
class Name {
  // Create a public class field:
  myName = "Oluwatobi";
}

// Create a derived class:
class Bio extends Name { }

// Create a new object instance:
const myBio = new Bio();

// Check myBio's current value:
myBio;

// The invocation above will return:
{ myName: "Oluwatobi" }
```

[**Try Editing It**][83]

The `Bio` class inherited its parent’s property because we used the `extends` keyword to assign the `Name` class as the derived class’s dunder proto.

**Note:** A derived class’s class field will override its parent class’s property with the same name. For example, consider the following code:

```js
// Create a new class:
class Name {
  myName = "Oluwatobi";
}

// Create a derived class:
class Bio extends Name {
  myName = "Sofela";
}

// Create a new object instance:
const myBio = new Bio();

// Check myBio's current value:
myBio;

// The invocation above will return:
{ myName: "Sofela" }
```

[**Try Editing It**][84]

JavaScript also allows you to use the `super` keyword to access a parent class’s static or prototypal class fields from derived classes. Let’s discuss more on this now.

## What is the `super` Keyword in JavaScript?

The `super` keyword searches a parent class or object literal for a specified static or prototypal property.

For instance, consider the following snippet:

```js
// Create a new class:
class Name {
  constructor() {
    console.log("Oluwatobi is my Name");
  }
}

// Create a child class:
class Bio extends Name {
  constructor() {
    // Use super to access the parent class's constructor:
    super();
  }
}

// Invoke the Bio constructor class:
new Bio();

// The invocation above will return:
"Oluwatobi is my Name."
{}
```

[**Try Editing It**][85]

The `super()` function call in the snippet above tells the computer to find a `constructor` in the parent class’s prototype chain.

You can use the `super` keyword as a “function caller” or “property accessor.” Let’s discuss how.

### How to Use the `super` Keyword as a Function Caller

The `super()` function caller finds and invokes the parent class’s `constructor()` method.

In other words, `super()` allows you to access a parent class’s `constructor` from the `constructor` of a derived class.

#### Syntax of the `super` keyword as a function caller

```js
super(argument1, …, argumentN);
```

**Note:** A `super()` function caller is valid only in a derived class’s `constructor()` method.

#### Example: How to use the `super()` function caller

```js
// Create a new class:
class Name {
  constructor(name) {
    this.name = name;
  }
}

// Create a derived class:
class Bio extends Name {
  constructor(firstName) {
    // Use super to access the parent class's constructor:
    super(firstName);
  }
}

// Create a new object instance:
const myBio = new Bio("Oluwatobi");

// Check myBio's current value:
myBio;

// The invocation above will return:
{ name: "Oluwatobi" }
```

[**Try Editing It**][86]

The `super()` function call in the snippet above tells the computer to find and invoke the parent class’s `constructor()`.

In other words, the `super()` function call searches for a `constructor` in `Name`’s prototype chain.

**Note the following:**

-   Calling `super()` allows JavaScript to use the parent class’s `constructor` to initialize `this`. So, a `super()` function call is similar to writing `this = new ParentClass()`.
-   JavaScript requires you to call `super()` before using the [keyword][87] `this`. Otherwise, the browser will throw a `ReferenceError`. In other words, a derived class’s `constructor` cannot access an uninitialized keyword `this`.

#### Example: What happens if you access `this` before `super` in a derived class’s `constructor`?

```js
// Create a new class:
class Name {
  constructor(name) {
    this.name = name;
  }
}

// Create a derived class:
class Bio extends Name {
  constructor(firstName) {
    this.lastName = "Sofela"; // Using the keyword this before super will cause the browser to throw a ReferenceError:
    super(firstName);
  }
}

// Create a new object instance:
const myBio = new Bio("Oluwatobi");
```

[**Try Editing It**][88]

The snippet above throws an `Uncaught ReferenceError` because a derived class’s `constructor` cannot access the keyword `this` before the `super()` function caller.

#### Example: What happens if you use only `this` keyword in a derived class’s `constructor`?

```js
// Create a new class:
class Name {
  createName() {
    return "Sofela";
  }
}

// Create a derived class:
class Bio extends Name {
  constructor() {
    this.firstName = "Oluwatobi"; // Using the keyword this before super will cause the browser to throw a ReferenceError:
  }
}

// Create a new object instance:
const myBio = new Bio();
```

[**Try Editing It**][89]

The snippet above throws an `Uncaught ReferenceError` because a derived class’s `constructor` cannot access the keyword `this` before the `super()` function caller.

Now that we know how to use the `super` keyword as a function caller, we can discuss using it as a property accessor.

### How to Use the `super` Keyword as a Property Accessor

You can use the `super` keyword as a property accessor in your JavaScript classes and object literals.

-   **Class Usage:** The `super` keyword searches a class’s parent for a specified static or prototypal class field. In other words, `super` allows you to access a parent class’s static or prototypal properties from a child class.
-   **Object Literal Usage:** The `super` keyword searches an object’s parent for a specified prototypal property. In other words, `super` allows you to access the parent object’s prototypal properties from a child object.

#### Syntax of the `super` keyword as a dot notation property accessor

```js
super.parentClassOrObjectProperty;
```

#### Example: Use the `super` keyword’s dot notation to access the parent class’s static field

```js
// Create a new class:
class Name {
  // Create a static class field:
  static myName = "Oluwatobi";
}

// Create a derived class:
class Bio extends Name {
  // Create a static property from the parent class's static class field:
  static firstName = super.myName;
}

// Check firstName's current value:
Bio.firstName;

// The invocation above will return:
"Oluwatobi"
```

[**Try Editing It**][90]

We used the `super` keyword in the snippet above to access the parent class’s static class field.

**Note:** Prefixing the `firstName` statement with a `static` keyword makes `super` find a `myName` [static property][91] in the parent class.

Suppose you omit the `static` keyword. In that case, `super` will search for a `myName` [prototypal property][92] in the parent class.

#### Example: Use the `super` keyword’s dot notation to access the parent class’s prototypal field

```js
// Create a new class:
class Time {
  // Create a prototypal method:
  hourNow() {
    return new Date().getHours();
  }

  // Create a second prototypal method:
  minutesNow() {
    return new Date().getMinutes();
  }
}

// Create a derived class:
class Moment extends Time {
  // Create an instance property using the parent class's prototypal methods:
  currentMoment = `The time is ${super.hourNow()}:${super.minutesNow()}.`
}

// Create a new object instance:
const momentNow = new Moment();

// Check momentNow's current value:
console.log(momentNow);
```

[**Try Editing It**][93]

We used the `super` keyword in the snippet above to access the parent class’s prototypal class fields.

#### Example: Use the `super` keyword’s dot notation to access a parent object’s prototypal property

```js
// Create a new object:
const website = {
  // Create a method:
  showName() {
    return "CodeSweetly";
  }
}

// Create another object:
const company = {
  // Create a method:
  showCompany() {
    return super.showName();
  }
}

// Change company's dunder proto to the website object:
Object.setPrototypeOf(company, website);

// Invoke the showCompany method:
company.showCompany()

// The invocation above will return:
"CodeSweetly"
```

[**Try Editing It**][94]

We used the `super` keyword in the snippet above to access the parent object’s `showName()` method.

**Note:** The `Object.setPrototypeOf()` code changes the company’s [`[[Prototype]]` property][95] to the website object. Therefore, the `company` object’s [prototype chain][96] will look like this:

```txt
{ showCompany: showCompany() } ---> { showName: showName() } ---> Object.prototype ---> null
```

You can also use the `super` keyword as a bracket notation property accessor to search a parent class or object literal for a specified static or prototypal property.

#### Syntax of the `super` keyword as a bracket notation property accessor

```js
super[expresssion];
```

#### Example: Use the `super` keyword’s bracket notation to access a parent class’s static field

```js
// Create a new class:
class Name {
  // Create a static class field:
  static myName = "Oluwatobi";
}

// Create a derived class:
class Bio extends Name {
  // Create a static property from the parent class's static class field:
  static firstName = super["myName"];
}

// Check firstName's current value:
Bio.firstName;

// The invocation above will return:
"Oluwatobi"
```

[**Try Editing It**][97]

We used the `super` keyword in the snippet above to access the parent class’s static class field.

**Note:** `super` cannot access a parent class’s instance class field because JavaScript sets an instance property on the object instance, not the class itself or its prototype chain. (`super` searches only for a parent’s static or prototypal properties.)

#### Example: Use the `super` keyword to access the parent class’s instance field

```js
// Create a new class:
class Name {
  // Create an instance class field:
  myName = "Oluwatobi";
}

// Create a derived class:
class Bio extends Name {
  // Create an instance property from the parent class's instance class field:
  firstName = super.myName;
}

// Create a new object instance:
const myBio = new Bio();

// Check myBio's current value:
myBio;

// The invocation above will return:
{ myName: "Oluwatobi", firstName: undefined }
```

[**Try Editing It**][98]

The `firstName` property’s value is `undefined` because `super` could not find a prototypal `myName` field on the parent class.

**Note:** The keywords `super` and `[this][99]` allow you to search for a specified property in an object’s prototype chain. But they work in different ways. Let’s discuss their differences now.

### `super` vs. `this` keyword: What’s the Difference?

The difference between the `super` and `this` keyword is as follows:

-   `super` searches for a specified prototypal property in a parent class’s prototype chain.
-   `this` searches for a specified prototypal property from a class’s object instance’s own properties to its prototype chain.

In other words, `super` starts its search from the parent class’s `prototype` property. But `this` searches from an object instance’s local scope to its prototype chain.

For instance, consider the following code:

```js
// Create a new class:
class ParentClass {
  // Create a prototypal method:
  showId() {
    return "I am a parent.";
  }
}

// Create a derived class:
class ChildClass extends ParentClass {
  // Create a prototypal method:
  showId() {
    return "I am a child.";
  }
  // Create another prototypal method:
  getId() {
    console.log(super.showId());
    console.log(this.showId());
  }
}

// Create a new object instance:
const instanceObject = new ChildClass();

// Invoke the instanceObject's getId() method:
instanceObject.getId();

// The invocation above will return:
"I am a parent."
"I am a child."
```

[**Try Editing It**][100]

Here’s how `super` and `this` performed their searches:

|  | super | this |
| --- | --- | --- |
| 1. | Find `showId()` in `ParentClass`’s prototype chain, starting from `ParentClass.prototype`. _Found it._ | Find `showId()` in `instanceObject`’s own properties. _Found none._ |
| 2. | (Suppose `showId()` is not in `ParentClass.prototype`. In that case, `super` will continue its search in `Object.prototype`.) | Find `showId()` in `instanceObject`’s prototype chain, starting from `ChildClass.prototype`. _Found it._ |
| 3. |  | (Suppose `showId()` is not in `ChildClass.prototype`. In that case, `this` will continue its search in `ParentClass.prototype`.) |
| 4. |  | (Suppose `showId()` is not in `ChildClass.prototype` and `ParentClass.prototype`. In that case, `this` will continue its search in `Object.prototype`.) |

You can see that `super` shortens the steps required to find a prototypal method.

Now that we know how to use the three types of JavaScript classes, let’s look at the main components in one piece.

## Components of a JavaScript Class

The main features of a JavaScript class are as follows:

1.  A `class` keyword
2.  The class’s name
3.  The `extends` clause
4.  A code block (`{...}`)
5.  The class’s body
6.  A `constructor` method
7.  `super()` function caller
8.  `super` property accessor
9.  Instance class fields
10.  Prototypal class fields
11.  Private class fields
12.  Static class fields
13.  Static initialization blocks

Let’s look at these features in a class declaration.

```js
class ChildClass extends ParentClass {
  constructor(parameter) {
    super(parameter);
  }
  instanceClassField = "Value can be any valid JavaScript data type";
  prototypalClassField() {
    // prototypalClassField's body
  }
  #privateClassField = "Value can be any valid JavaScript data type";
  static classField = "Value can be any valid JavaScript data type";
  static classFieldWithSuperValue = super.parentProperty;
  static #privateClassField = "Value can be any valid JavaScript data type";
  static {
    // Static initialization block's body
  }
}
```

The constructor function equivalence of the snippet above looks like this:

```js
function ChildClass() {
  this.instanceClassField = "Value can be any valid JavaScript data type";
}

Object.setPrototypeOf(ChildClass, ParentClass);

ChildClass.prototype.prototypalClassField = function () {
  // prototypalClassField's body
}

ChildClass.staticClassField = "Value can be any valid JavaScript data type";

ChildClass.staticClassFieldWithSuperValue = Object.getPrototypeOf(ChildClass).parentProperty;

(function () {
  // Static initialization block's body
})();
```

**Note:** You currently cannot create private fields in constructor functions. They are one of the latest features JavaScript introduced in classes.

## How Does a JavaScript Class Help with Encapsulation?

Classes let you prevent external code from interacting with internal class fields. Instead, external code would use public methods to operate on the class’s internal implementations.

For instance, consider the following code:

```js
// Create a new class:
class Name {
  // Create a private class field data:
  #myName = "Oluwatobi";

  // Create a publicly available method:
  showMyName() {
    return this.#myName;
  }

  // Create another publicly available method:
  updateMyName(value) {
    this.#myName = value;
  }
}

// Create a new object instance:
const bio = new Name();

// Check the instance's data value:
bio.myName;

// The invocation above will return:
undefined
```

[**Try Editing It**][101]

The snippet above [encapsulated][102] `Name`’s data because it defined `myName` as a private feature and provided two public methods for users to read and update the class’s internal implementation.

Consequently, the `bio` instance object knows nothing about the class’s internal data and cannot interact with it directly.

Whenever users need to access the encapsulated data, they would use the publicly available methods like so:

```js
// Check the instance's data value:
bio.showMyName();

// The invocation above will return:
"Oluwatobi"

// Update the instance's data value:
bio.updateMyName("Sofela");

// Check the instance's data value:
bio.showMyName();

// The invocation above will return:
"Sofela"
```

[**Try Editing It**][103]

Encapsulating your data is an excellent way to keep your class clean. It prevents minor internal refactoring from breaking users’ code.

For instance, consider the following code:

```js
// Create a new class:
class Name {
  // Create a public class field data:
  myName = "Oluwatobi";
}

// Create a new object instance:
const bio = new Name();

// Check the instance's data value:
bio.myName;

// The invocation above will return:
"Oluwatobi"

// Update the instance's data value:
bio.myName = "Sofela";

// Check the instance's data value:
bio.myName;

// The invocation above will return:
"Sofela"
```

Since the snippet above did not encapsulate the class’s data, refactoring the class field’s name would break users’ code.

Here’s an example:

```js
class Name {
  // Update the data's name from myName to myFirstName:
  myFirstName = "Oluwatobi";
}

// Create a new object instance:
const bio = new Name();

// Check the instance's data value:
bio.myName;

// The invocation above will return:
undefined
```

The snippet above returned `undefined` because refactoring the class’s internal implementation broke the user’s `bio.myName` code. For the application to work appropriately, the user must update every instance of the code (which can be burdensome for large projects).

However, encapsulation prevents such refactoring from breaking the user’s code.

Here’s an example:

```js
class Name {
  // Update the data's name from myName to myFirstName:
  #myFirstName = "Oluwatobi";

  // Create a publicly available method:
  showMyName() {
    return this.#myFirstName;
  }

  // Create another publicly available method:
  updateMyName(value) {
    this.#myFirstName = value;
  }
}

// Create a new object instance:
const bio = new Name();

// Check the instance's data value:
bio.showMyName();

// The invocation above will return:
"Oluwatobi"

// Update the instance's data value:
bio.updateMyName("Sofela");

// Check the instance's data value:
bio.showMyName();

// The invocation above will return:
"Sofela"
```

You can see that refactoring the class’s internal implementation did not break the user’s code. That’s the beauty of encapsulation!

Encapsulation allows you to provide users with an interface independent of the class’s underlying data. Therefore, you minimize the likelihood of users’ code breaking when you alter internal implementations.

## Important Things to Know about JavaScript Classes

Here are five essential facts to remember when using JavaScript classes.

### 1\. Declare your class before you access it

Classes are like constructor functions but have the same [temporal dead zone][104] behavior as `const` and `let` variables.

In other words, JavaScript does not [hoist][105] class declarations. Therefore, you must first declare your class before you can access it. Otherwise, the computer will throw an `Uncaught ReferenceError`.

Here’s an example:

```js
// Create an object instance from the Name class:
const name = new Name();

// Define the Name class:
class Name {}
```

[**Try Editing It**][106]

The snippet above throws an `Uncaught ReferenceError` because JavaScript does not hoist classes. So, invoking `Name()` before its definition is invalid.

### 2\. Classes are functions

The `typeof` a class is a function because, under the hood, the `class` keyword creates a new [function][107].

For instance, consider the following code:

```js
// Define a JavaScript class:
class Bio {
  // Define two instance class fields:
  firstName = "Oluwatobi";
  lastName = "Sofela";
  // Create a prototypal method:
  showBio() {
    return `${ firstName } ${ lastName } runs CodeSweetly.`;
  }
}

// Create a new object instance:
const aboutMe = new Bio();

// Check what data type the Bio class is:
typeof Bio;

// The invocation above will return:
"function"
```

[**Try Editing It**][108]

The computer processes the snippet above as follows:

1.  Create a new function named `Bio`.
2.  Add the class’s instance properties to the newly created function’s `this` keyword.
3.  Add the class’s prototypal properties to the newly created function’s `prototype` property.

### 3\. Classes are strict

JavaScript executes classes in strict mode. So, follow the strict syntax rules when you use classes. Otherwise, your code will throw errors—some of which will be silent errors that are difficult to debug.

### 4\. Avoid the `return` keyword in your class’s `constructor` method

Suppose your class’s `constructor` returns a [non-primitive value][109]. In that case, JavaScript will ignore the values of all the `this` keywords and assign the non-primitive to the `new` keyword expression.

In other words, a `constructor`’s [`return` object overrides][110] its `this` keyword.

For instance, consider the following code:

```js
// Create a new class:
class Name {
  constructor() {
    this.firstName = "Oluwatobi";
    this.lastName = "Sofela";
    return { companyName: "CodeSweetly" };
  }
}

// Create a new object instance:
const myName = new Name();

// Check myName's current value:
myName;

// The invocation above will return:
{ companyName: "CodeSweetly" }

// Check firstName's current value:
myName.firstName;

// The invocation above will return:
undefined

// Check lastName's current value:
myName.lastName;

// The invocation above will return:
undefined
```

[**Try Editing It**][111]

The `new` keyword expression returned only `{ companyName: "CodeSweetly" }` because JavaScript ignores the `constructor` method’s `this` keywords whenever you use a `return` operator to produce an object.

### 5\. A class’s evaluation starts from the `extends` clause to its values

JavaScript evaluates your class according to the following order:

#### 1\. `extends` clause

If you declare an `extends` clause, the computer will first evaluate it.

**Note:** Browsers will throw a `TypeError` if the `extends` clause does not evaluate to a constructor function or `null`.

#### 2\. Extract the class’s `constructor`

JavaScript extracts the class’s `constructor`.

**Note:** Suppose you did not define a `constructor` method. In that case, the computer will use the default one.

#### 3\. Parse the class’s property names

The computer analyzes the class’s class field names (not their values) according to their order of declaration.

#### 4\. Parse the class’s methods and property accessors

JavaScript analyzes the class’s methods and property accessors according to their order of declaration by doing the following:

-   Add the prototypal methods and property accessors to the class’s `prototype` property.
-   Analyze the static methods and property accessors as the class’s own properties, which you can call on the class itself.
-   Analyze the private instance methods and property accessors as private properties of the class’s instance object.

#### 5\. Parse the class’s property values

The computer analyzes the class field values according to their order of declaration by doing the following:

-   Save each instance field’s initializer expression for later evaluations. JavaScript will evaluate the initializer expression during the following periods:
    -   When the `new` keyword is creating an instance object.
    -   While processing the parent class’s `constructor`.
    -   Before the `super()` function call returns.
-   Set each static field’s keyword `this` to the class itself and create the static property on the class.
-   Evaluate the class’s [static initialization blocks][112] and set their keyword `this` to the class itself.

**Note:**

-   Only after JavaScript parses a class’s property values is the class fully initialized and available as a constructor function.
-   Any attempt to access the child class before its complete initialization would return a `ReferenceError`.

## Overview

In this article, we discussed what a JavaScript class object is. We also used examples to discuss class fields, the `super` keyword, and data encapsulation.

Thanks for reading!

### And here’s a useful React.JS resource:

I wrote a book about [Creating NPM Packages][113]!

It is a beginner-friendly guidebook for mastering the art of creating, testing, and publishing NPM libraries in the React and JavaScript ecosystem.

It uses a scalable project to explain the fundamentals of building and managing NPM packages from scratch.

[![Creating NPM Package ReactJS book is now available at Amazon](https://www.freecodecamp.org/news/content/images/2024/01/creating-npm-package-reactjs-book-codesweetly.png)][114]

---

![Oluwatobi Sofela](https://www.freecodecamp.org/news/content/images/size/w60/2023/09/oss.jpg)

[Oluwatobi Sofela][115]

O-sweet-programming, my interest is to make you sweeter for all.

---

If you read this far, thank the author to show them you care. Say Thanks

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started][116]

[1]: /news/tag/javascript/
[2]: /news/author/oluwatobiss/
[3]: #what-is-a-javascript-class
[4]: #why-classes-in-javascript
[5]: #syntax-of-a-javascript-class
[6]: #what-is-a-class-keyword
[7]: #what-is-a-class-name
[8]: #what-is-a-code-block
[9]: #what-is-a-class-body
[10]: #what-is-a-javascript-class-field
[11]: #how-to-create-class-fields-in-javascript
[12]: #how-to-create-class-fields-with-computed-names
[13]: #how-to-create-regular-class-field-methods
[14]: #how-to-create-shorthand-class-field-methods
[15]: #regular-vs-shorthand-class-field-methods-what-s-the-difference
[16]: #what-is-a-user-defined-prototypal-method-in-javascript-classes
[17]: #what-is-a-constructor-method-in-javascript-classes
[18]: #types-of-class-fields
[19]: #what-is-a-public-class-field-in-javascript-classes
[20]: #what-is-a-private-class-field-in-javascript-classes
[21]: #what-is-a-static-class-field-in-javascript-classes
[22]: #types-of-javascript-classes
[23]: #what-is-a-javascript-class-declaration
[24]: #what-is-a-javascript-class-expression
[25]: #what-is-a-derived-class-in-javascript
[26]: #what-is-the-super-keyword-in-javascript
[27]: #how-to-use-the-super-keyword-as-a-function-caller
[28]: #how-to-use-the-super-keyword-as-a-property-accessor
[29]: #super-vs-this-keyword-what-s-the-difference
[30]: #components-of-a-javascript-class
[31]: #how-does-a-javascript-class-help-with-encapsulation
[32]: #important-things-to-know-about-javascript-classes
[33]: #1-declare-your-class-before-you-access-it
[34]: #2-classes-are-functions
[35]: #3-classes-are-strict
[36]: #4-avoid-the-return-keyword-in-your-class-s-constructor-method
[37]: #5-a-class-s-evaluation-starts-from-the-extends-clause-to-its-values
[38]: #overview
[39]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object
[40]: https://codesweetly.com/javascript-new-keyword
[41]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-explained/js-gtfmeb
[42]: https://codesweetly.com/encapsulation-in-javascript
[43]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[44]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements
[45]: https://codesweetly.com/method-in-javascript
[46]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-bxe9or
[47]: https://developer.mozilla.org/en-US/docs/Glossary/Property/JavaScript
[48]: https://codesweetly.com/javascript-properties-object#computed-property-names-in-javascript
[49]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-b9jwfx
[50]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-fro6pz
[51]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-j6kpwy
[52]: https://codesweetly.com/web-tech-terms-i#instance-property-in-javascript
[53]: https://codesweetly.com/web-tech-terms-p#prototypal-property-in-javascript
[54]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[55]: https://codesweetly.com/default-function-properties-in-javascript#what-is-the-default-prototype-property-in-javascript-functions
[56]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-xgekwn
[57]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
[58]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-tfz2hb
[59]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-gzhxdi
[60]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-pqgqew
[61]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
[62]: https://codesweetly.com/declaration-initialization-invocation-in-programming#what-does-invocation-mean
[63]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-stxiye
[64]: https://codesweetly.com/web-tech-terms-i#instance-property-in-javascript
[65]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-vkvnuv
[66]: https://codesweetly.com/method-in-javascript#shorthand-for-javascript-methods
[67]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-88zwpt
[68]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-4gefar
[69]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-mkabvf
[70]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-7acrhs
[71]: https://codesweetly.com/web-tech-terms-i#instance-property-in-javascript
[72]: https://codesweetly.com/web-tech-terms-p#prototypal-property-in-javascript
[73]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-dcx7ck
[74]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-cvbm6x
[75]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-wtvny3
[76]: https://codesweetly.com/javascript-variable
[77]: #what-is-a-public-class-field-in-javascript-classes
[78]: #what-is-a-static-class-field-in-javascript-classes
[79]: #what-is-a-private-class-field-in-javascript-classes
[80]: https://codesweetly.com/default-function-properties-in-javascript#what-is-the-default-prototype-property-in-javascript-functions-1
[81]: https://codesweetly.com/default-function-properties-in-javascript#what-is-the-default-prototype-property-in-javascript-functions
[82]: https://codesweetly.com/javascript-properties-object
[83]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-explained/js-jivp9r
[84]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-explained/js-kxiztt
[85]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-qcdu2a
[86]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-cdc4ks
[87]: https://www.freecodecamp.org/news/the-this-keyword-in-javascript/
[88]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-zyd4dm
[89]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-sgc2tx
[90]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-cr3jfd
[91]: https://codesweetly.com/web-tech-terms-s#static-class-field-in-javascript
[92]: https://codesweetly.com/web-tech-terms-p#prototypal-property-in-javascript
[93]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-fr9bvs
[94]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-mxdvkm
[95]: https://codesweetly.com/default-function-properties-in-javascript#what-is-the-default-prototype-property-in-javascript-functions-1
[96]: https://codesweetly.com/default-function-properties-in-javascript#the-javascript-prototype-chain-diagram
[97]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-vpw14s
[98]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-kqsqqe
[99]: https://codesweetly.com/javascript-this-keyword
[100]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-v2st2a
[101]: https://codesweetly.com/try-it-sdk/javascript/encapsulation/js-q7uqv4
[102]: https://codesweetly.com/web-tech-terms-e#encapsulation
[103]: https://codesweetly.com/try-it-sdk/javascript/encapsulation/js-3vq4es
[104]: https://codesweetly.com/javascript-temporal-dead-zone#how-does-vars-tdz-differ-from-let-and-const-variables
[105]: https://www.freecodecamp.org/news/what-is-hoisting-in-javascript-3/
[106]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-explained/js-74u2wt
[107]: https://codesweetly.com/javascript-function-object
[108]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-explained/js-spwwdy
[109]: https://codesweetly.com/javascript-non-primitive-data-type
[110]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties#returning_overriding_object
[111]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-explained/js-vgwrmg
[112]: https://codesweetly.com/web-tech-terms-s#static-initialization-blocks
[113]: https://amzn.to/48NjBdY
[114]: https://amzn.to/48NjBdY
[115]: /news/author/oluwatobiss/
[116]: https://www.freecodecamp.org/learn/