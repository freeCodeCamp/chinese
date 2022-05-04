> -  原文地址：[JavaScript Prototypes and Inheritance – and Why They Say Everything in JS is an Object](https://www.freecodecamp.org/news/prototypes-and-inheritance-in-javascript/)
> -  原文作者：[Germán Cocca](https://www.freecodecamp.org/news/author/gercocca/)
> -  译者：Papaya HUANG
> -  校对者：

![JavaScript Prototypes and Inheritance – and Why They Say Everything in JS is an Object](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/pexels-maor-attias-5192478.jpg)

大家好！在这篇短文中，我将聊一聊JavaScript中的**原型继承**及它的意义。

## 目录

-   [前言](#intro)
-   [如何访问JavaScript中的属性和方法](#how-to-access-a-prototype-s-properties-and-methods-in-javascript)
-   [原型链](#the-prototype-chain)
-   [基于原型的语言](#a-prototype-based-language)
-   [JavaScript类](#javascript-classes)
-   [总结](#roundup)

<h1 id="intro">前言</h1>

你是否好奇过，字符串或者对象是如何“知道”它们有哪些方法的？字符串是怎么知道 `.toUpperCase()`，数组是怎么知道`.sort()`？我们从来没有手动定义这些方法，对不对？

其实这些方法属于特定数据结构的内置方法，这些方法之所以存在的原因是**原型继承**。

在JavaScript中，一个对象可以继承另一个对象的属性。被继承的这个对象被称作原型。简言之，对象可以从其他对象（原型）继承属性。

你可能在好奇：为什么要设计继承机制呢？继承解决了数据和逻辑的复制。通过继承，对象之间可以共享属性和方法，而不需要手动在每一个对象上添加属性和方法。

<h2 id="how-to-access-a-prototype-s-properties-and-methods-in-javascript">如何访问JavaScript中的属性和方法</h2>

当我们试图访问对象的属性时，不仅在该对象内部搜索属性，还在对象的原型以及原型的原型中搜索，直到找到匹配名字的属性，或者达到**原型链**终点。

只有当在原型链中未找到属性和方法时，JavaScript返回`undefined`。

JavaScript中的每一个对象都有一个内置属性`[[Prototype]]`。

如果我们创建一个数组，并且在控制台打印出来：

```javascript
const arr = [1,2,3]
console.log(arr)
```

我们会看到：

![image](https://www.freecodecamp.org/news/content/images/2022/05/image.png)

双方括号括起来的`[[Prototype]]`表示内置属性，不可以通过代码直接访问。

想要访问对象的 `[[Prototype]]`，可以使用`Object.getPrototypeOf()`方法。

```javascript
const arr = [1,2,3]
console.log(Object.getPrototypeOf(arr))
```

输出是一系列内置属性和方法：

![image-1](https://www.freecodecamp.org/news/content/images/2022/05/image-1.png)

请记住可以通过不同的方法来改变或修改属性。

<h2 id="the-prototype-chain">原型链</h2>

原型链的终点是`Object.prototype`。所有对象都继承`Object`的属性和方法。任何超出原型链终点的搜索都会返回`null`。

如果查看数组、函数或者字符串原型的原型，你会发现是对象。这是因为在JavaScript中，所有对象都是`Object.prototype`的子孙后代（实例），`Object.prototype`是设置其他JavaScript数据类型属性和方法的对象。

```javascript
const arr = [1,2,3]
const arrProto = Object.getPrototypeOf(arr)
console.log(Object.getPrototypeOf(arrProto))
```

![image-2](https://www.freecodecamp.org/news/content/images/2022/05/image-2.png)

每一种原型类型（比如说数组原型）定义了它自己的方法和属性，并且在有些时候会覆盖掉`Object.prototype`的方法和属性(这就是为什么数组的一些方法对象没有)。

但是顺藤摸瓜，沿着原型链探索，会发现**JavaScript中的所有内容都是基于`Object.prototype`创建的**。

如果我们试图获取 **`Object.prototype`**的原型，我们会得到`null`。

```javascript
const arr = [1,2,3]
const arrProto = Object.getPrototypeOf(arr)
const objectProto = Object.getPrototypeOf(arrProto)
console.log(Object.getPrototypeOf(objectProto))
```

![image-3](https://www.freecodecamp.org/news/content/images/2022/05/image-3.png)

<h2 id="a-prototype-based-language">基于原型的语言</h2>

JavaScript是**基于原型的语言**，意味着对象的属性和方法可以通过广义对象复制和继承的能力在对象之间共享。

说到继承，JavaScript只有一种结构：对象。

每一个对象有一个私有属性(`[[Prototype]]`)连接到另一个对象也就是它的原型。 这个原型对象也有自己的原型， 以此类推，直到一个对象的原型是 `null`为止。

根据定义，`null`没有原型，是原型链的最后一环。

原型继承与类继承并不相同。在常用的面向对象的编程语言中，JavaScript相对特殊，其他一些知名的语言，如：PHP、Python和Java都是基于类的语言，它们将类作为对象的蓝图。

这时你可能会想：“但是可以在JavaScript中使用类！”是的，确实可以，但是这只是一个语法糖。 🤫🤔

<h2 id="javascript-classes">JavaScript类</h2>

类是通过预设蓝图的属性和方法，来创建对象的一种方法。创建了特定属性和方法的类后，可以实例化这个类，继承这个类的所有属性和方法。

在JavaScript中可以使用如下方法创建类：

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

并且可以创建实例对象：

```javascript
const alien1 = new Alien("Ali", "I'm Ali the alien!")
console.log(alien1.name) // output: "Ali"
```

类使得代码更加模块化、组织化并更易于理解，创建类使用了是OOP编程范式。

但需要注意的是JavaScript并不像其他语言一样支持类， `class`关键字只是ES6引入的一个语法糖，帮助你更好地组织代码。

为了让你的感受更直观，我们改写刚才用`class`编写的代码，我们可以定义一个函数，并且修改它的原型：

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

通过`new`关键字可以将任何函数调用成构造函数，函数的原型属性会被用作对象的继承方法。在JavaScript中“class”仅在概念上描述上述行为——但实际上它们还是函数。😑

当然了解这些对你的的代码编写没有太大影响（我们还是可以像使用其他语言一样使用类来执行OOP）， 但需要记住JavaScript的核心是原型继承。

<h1 id="roundup">总结</h1>

就讲这么多，希望你喜欢这篇文章并且有所收获。你可以在[LinkedIn](https://www.linkedin.com/in/germancocca/)或[Twitter](https://twitter.com/CoccaGerman)上关注我。

干杯！下篇文章见！ =D

![AntiqueAthleticGuineapig-size_restricted](https://www.freecodecamp.org/news/content/images/2022/04/AntiqueAthleticGuineapig-size_restricted.gif)
