> -  原文地址：[JavaScript Prototypes and Inheritance – and Why They Say Everything in JS is an Object](https://www.freecodecamp.org/news/prototypes-and-inheritance-in-javascript/)
> -  原文作者：[Germán Cocca](https://www.freecodecamp.org/news/author/gercocca/)
> -  译者：Papaya HUANG
> -  校对者：

![JavaScript Prototypes and Inheritance – and Why They Say Everything in JS is an Object](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/pexels-maor-attias-5192478.jpg)

Hi everyone! In this short article we're going to talk about **prototypal inheritance** in JavaScript, and what are the implications of it.

## Table of Contents

-   [Intro](#intro)
-   [How to access a prototype’s properties and methods in JavaScript](#how-to-access-a-prototype-s-properties-and-methods-in-javascript)
-   [The prototype chain](#the-prototype-chain)
-   [A prototype-based language](#a-prototype-based-language)
-   [Javascript classes](#javascript-classes)
-   [Roundup](#roundup)

# Intro

Have you ever wondered how strings, arrays or objects “know” the methods each of them have? How does a string know it can `.toUpperCase()` or an array know that it can `.sort()`? We never defined these methods manually, right?

The answer is that these methods come built-in within each type of data structure thanks to something called **prototype inheritance**.

In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is called the prototype. In short, objects can inherit properties from other objects — the prototypes.

You’re probably wondering: why the need for inheritance in the first place? Well, inheritance solves the problem of data and logic duplication. By inheriting, objects can share properties and methods without the need of manually setting those properties and methods on each object.

## ****How to** A**ccess** a P**rototype’s** P**roperties and** M**ethods** in JavaScript**

When we try to access a property of an object, the property is not only searched in the object itself. It's also searched in the prototype of the object, in the prototype of the prototype, and so on – until a property is found that matches the name or the end of the **prototype chain** is reached.

If the property or method isn’t found anywhere in the prototype chain, only then will JavaScript return `undefined`.

Every object in JavaScript has an internal property called `[[Prototype]]`.

If we create an array and log it to the console like this:

```javascript
const arr = [1,2,3]
console.log(arr)
```

We will see this:

![image](https://www.freecodecamp.org/news/content/images/2022/05/image.png)

The double square brackets that enclose `[[Prototype]]` signify that it is an internal property, and cannot be accessed directly in code.

To find the `[[Prototype]]` of an object, we will use the `Object.getPrototypeOf()` method.

```javascript
const arr = [1,2,3]
console.log(Object.getPrototypeOf(arr))
```

The output will consist of several built-in properties and methods:

![image-1](https://www.freecodecamp.org/news/content/images/2022/05/image-1.png)

Keep in mind that prototypes can also be changed and modified through different methods.

## ****The** P**rototype** C**hain****

At the end of the prototype chain is `Object.prototype`. All objects inherit the properties and methods of `Object`. Any attempt to search beyond the end of the chain results in `null`.

If you look for the prototype of the prototype of an array, a function, or a string, you’ll see it’s an object. And that’s because in JavaScript all objects are descendants or instances of `Object.prototype`, which is an object that sets properties and methods to all other JavaScript data types.

```javascript
const arr = [1,2,3]
const arrProto = Object.getPrototypeOf(arr)
console.log(Object.getPrototypeOf(arrProto))
```

![image-2](https://www.freecodecamp.org/news/content/images/2022/05/image-2.png)

Each type of prototype (for example array prototype) defines its own methods and properties, and in some cases overrides the `Object.prototype` methods and properties (that’s why arrays have methods that objects don’t).

But under the hood and going up the ladder of the prototype chain, **everything in JavaScript is built upon the `Object.prototype`.**

If we try to look into the prototype of **`Object.prototype`** we get `null`.

```javascript
const arr = [1,2,3]
const arrProto = Object.getPrototypeOf(arr)
const objectProto = Object.getPrototypeOf(arrProto)
console.log(Object.getPrototypeOf(objectProto))
```

![image-3](https://www.freecodecamp.org/news/content/images/2022/05/image-3.png)

## **A Prototype-Based Language**

JavaScript is a **prototype-based language**, meaning object properties and methods can be shared through generalized objects that have the ability to be cloned and extended.

When it comes to inheritance, JavaScript has only one structure: objects.

Each object has a private property (referred to as its `[[Prototype]]`) that maintains a link to another object called its prototype. That prototype object has its own prototype, and so on until an object whose prototype is `null` is reached.

By definition, `null` has no prototype, and acts as the final link in this chain of prototypes.

This is known as prototypical inheritance and differs from class inheritance. Among popular object-oriented programming languages, JavaScript is relatively unique, as other prominent languages such as PHP, Python, and Java are class-based languages, which instead define classes as blueprints for objects.

At this point you may be thinking "But we CAN implement classes on JavaScript!". And yes, we can, but as syntactic sugar. 🤫🤔

## Javascript Classes

Classes are a way to set a blueprint to create objects with predefined properties and methods. By creating a class with specific properties and methods, you can later on instantiate objects from that class, that will inherit all the properties and methods that that class has.

In JavaScript, we can create classes in the following way:

```javascript
class Alien {
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    sayPhrase = () => console.log(this.phrase)
}
```

And then we can instantiate an object from that class like this:

```javascript
const alien1 = new Alien("Ali", "I'm Ali the alien!")
console.log(alien1.name) // output: "Ali"
```

Classes are used as a way to make code more modular, organized, and understandable and are heavily used in OOP programming.

But keep in mind that JavaScript doesn’t really support classes like other languages. The `class` keyword was introduced with ES6 as syntactic sugar that facilitates this way of organizing code.

To visualize this, see that the same thing we did by previously defining a `class`, we can do it by defining a function and editing the prototype in the following way:

```javascript
function Alien(name, phrase) {
    this.name = name
    this.phrase = phrase
    this.species = "alien"
}

Alien.prototype.fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
Alien.prototype.sayPhrase = () => console.log(this.phrase)

const alien1 = new Alien("Ali", "I'm Ali the alien!")

console.log(alien1.name) // output "Ali"
console.log(alien1.phrase) // output "I'm Ali the alien!"
alien1.fly() // output "Zzzzzziiiiiinnnnnggggg"
```

Any function can be invoked as a constructor with the keyword `new` and the prototype property of that function is used for the object to inherit methods from. In JavaScript, “class” is only used conceptually to describe the above practice – technically they’re just functions.😑

Although this doesn't necessarily make a lot of difference (we can still perfectly implement OOP and use classes like in most other programming languages), it's important to remember that JavaScript is built with prototype inheritance at its core.

# Roundup

That's it, everyone! As always, I hope you enjoyed the article and learned something new. If you want, you can also follow me on [LinkedIn](https://www.linkedin.com/in/germancocca/) or [Twitter](https://twitter.com/CoccaGerman).

Cheers and see you in the next one! =D

![AntiqueAthleticGuineapig-size_restricted](https://www.freecodecamp.org/news/content/images/2022/04/AntiqueAthleticGuineapig-size_restricted.gif)
