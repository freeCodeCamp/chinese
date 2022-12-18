> -  原文地址：[Object-Oriented Programming in JavaScript for Beginners](https://www.freecodecamp.org/news/object-oriented-javascript-for-beginners/)
> -  原文作者：[Germán Cocca](https://www.freecodecamp.org/news/author/gercocca/)
> -  译者：Papaya HUANG
> -  校对者：

![Object-Oriented Programming in JavaScript for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/pexels-lukas-317377.jpg)

大家好，这篇文章将使用JavaScript示例来讲解面向对象的编程（OOP）的主要特征。

我将讲解OOP的主要概念，OOP为什么有用以及在什么时候有用，全文展示大量JS示例。

如果你尚不熟悉编程范式，在深入这篇文章之前，推荐你阅读[我之前写过的范式简介](https://chinese.freecodecamp.org/news/an-introduction-to-programming-paradigms/)。

让我们开始吧！

![160cf1a4201c53b015bfcccb9398e9ab](https://www.freecodecamp.org/news/content/images/2022/04/160cf1a4201c53b015bfcccb9398e9ab.gif)

## 目录

-   [面向对象的编程简介](#intro-to-object-oriented-programming)
-   [如何创建对象——类](#how-to-create-objects-classes)
    -   [类相关注意事项](#some-things-to-keep-in-mind-about-classes-)
-   [OOP的四大原则](#the-four-principles-of-oop)
    -   [继承](#inheritance)
        -   [继承相关注意事项](#some-things-to-keep-in-mind-about-inheritance-)
    -   [封装](#encapsulation)
    -   [抽象](#abstraction)
    -   [多态](#polymorphism)
-   [对象组合](#object-composition)
-   [总结](#roundup)

<h1 id="intro-to-object-oriented-programming">面向对象的编程简介</h1>

正如我之前关于编程范式的[文章](https://chinese.freecodecamp.org/news/an-introduction-to-programming-paradigms/)所述，OOP的核心是 **将关注点和责任**分离到不同**实体**。

实体被编码成 **对象**，每一个实体由一组信息 (**属性**) 和行为 (**方法**)组成，并且为实体所用。

OOP在大规模项目中非常有用，因为它方便代码的模块化和组织。

把实体的抽象化后，我们就可以把程序看作现实世界，不同的演员出演不同的演出并且相互互动。

为了更好的理解OOP的应用，我们来编写一个小游戏作为示例。我们将专注于游戏中角色的创建，以此来观察OOP在这个过程中是怎么起作用的。👽 👾 🤖

<h1 id="how-to-create-objects-classes">如何创建对象——类</h1>

所有电子游戏都有游戏角色，对不对？而所有的角色都具备特定的**特征** (属性) 如：肤色、身高、名字等，所有的角色还具备**能力** (方法)如：跳跃、跑步、出拳等。 对象便是一个绝佳的数据结构，来储存这些信息。👌

假设我们有3种不同的角色“种类”，我们想要创造6个不同的角色，每一个种类两个角色。

一种创建角色的方式是手动创建对象，像这样[对象初始化](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer):

```javascript
const alien1 = {
    name: "Ali",
    species: "alien",
    phrase: () => console.log("I'm Ali the alien!"),
    fly: () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}
const alien2 = {
    name: "Lien",
    species: "alien",
    sayPhrase: () => console.log("Run for your lives!"),
    fly: () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}
const bug1 = {
    name: "Buggy",
    species: "bug",
    sayPhrase: () => console.log("Your debugger doesn't work with me!"),
    hide: () => console.log("You can't catch me now!")
}
const bug2 = {
    name: "Erik",
    species: "bug",
    sayPhrase: () => console.log("I drink decaf!"),
    hide: () => console.log("You can't catch me now!")
}
const Robot1 = {
    name: "Tito",
    species: "robot",
    sayPhrase: () => console.log("I can cook, swim and dance!"),
    transform: () => console.log("Optimus prime!")
}
const Robot2 = {
    name: "Terminator",
    species: "robot",
    sayPhrase: () => console.log("Hasta la vista, baby!"),
    transform: () => console.log("Optimus prime!")
}
```

所有的角色都拥有 `name`和`species`属性以及 `sayPhrase`方法。此外，每一个种类（species）都有一个专属的方法(如alien的`fly`方法)。

可以观察到，一些数据被所有角色共享，另一些数据被同一种类共享，还有一些数据是每个角色专属的。

这样创建角色的方法是奏效的，我们可以访问到这些属性和方法：

```javascript
console.log(alien1.name) // 输出: "Ali"
console.log(bug2.species) // 输出: "bug"
Robot1.sayPhrase() // 输出: "I can cook, swim and dance!"
Robot2.transform() // 输出: "Optimus prime!"
```

问题是这样操作很难扩展，也特别容易出错。假设我们的游戏有成百上千个角色，我们必须手动地设定每一个角色的属性和方法！

为了解决这个问题，我们需要一种编程方法来创建对象，并在给定一组条件的情况下设置不同属性和方法。**类**正好擅长这些。 😉

类使用预设的属性和方法来创建对象的蓝图。创建完毕类之后，可以通过**实例化** (创建)对象。 对象会继承类的所有属性和方法。

改写上面的代码，我们可以给每一个角色种类创建一个类：

```javascript
class Alien { // 类的名称
    // constructor方法会传入一些参数，并将这些参数分配给对象的属性
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }
    // 这部分将作为对象的方法
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    sayPhrase = () => console.log(this.phrase)
}

class Bug {
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "bug"
    }
    hide = () => console.log("You can't catch me now!")
    sayPhrase = () => console.log(this.phrase)
}

class Robot {
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "robot"
    }
    transform = () => console.log("Optimus prime!")
    sayPhrase = () => console.log(this.phrase)
}
```

然后我们通过类实例化我们的角色：

```javascript
const alien1 = new Alien("Ali", "I'm Ali the alien!")
//我们使用“new”关键字和对应的类名称
//然后根据类中构造函数（constructor function）声明的形参传入对应的实参

const alien2 = new Alien("Lien", "Run for your lives!")
const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!")
const bug2 = new Bug("Erik", "I drink decaf!")
const Robot1 = new Robot("Tito", "I can cook, swim and dance!")
const Robot2 = new Robot("Terminator", "Hasta la vista, baby!")
```

我们还是可以访问对象的属性和方法：

```javascript
console.log(alien1.name) // 输出: "Ali"
console.log(bug2.species) // 输出: "bug"
Robot1.sayPhrase() // 输出: "I can cook, swim and dance!"
Robot2.transform() // 输出: "Optimus prime!"
```

使用类的好处是，这种使用“蓝图”来创建新的对象的方式比手动创建更加快速，也更不容易出错。

同时，这样编写代码的结构性更好，我们可以识别出每一个对象的属性和方法是在那里定义的（类）。这样就更容易修改和调整。

<h3 id="some-things-to-keep-in-mind-about-classes-">类相关注意事项：</h3>

根据[这段定义](https://www.bookstack.cn/read/You-Dont-Know-JS-Get-Started-2nd/spilt.6.833b11649d196dea.md?wd=JS)并用更专业的术语改写：

> _“程序中类被定义为一种自定义数据结构“类型”，包含了数据运行所需的数据和行为。类定义了数据结构如何运行，但是类本身不是具体的值。若要在程序中使用具体的值，必须一次或者多次实例化（使用"new"关键字）类。“_

-   请记住类并不是具体的实体或者对象。类是我们用来创建具体对象的蓝图或者模具。
-   通常类的命名首字母大写并使用驼峰式，class关键字创建常量，所以之后不能更改命名。
-   类必须拥有一个constructor方法，之后被用来实例化类。JavaScript中的constructor只是一个普通的返回对象的函数。唯一特殊的地方在于，使用“new”关键字调用这个函数，会讲其原型分配为被返回的原型。
-   “this”关键字指向类本身，并在constructor方法内定义类的属性。
-   添加方法只需要定义函数名和函数内部需要执行的代码。
-   JavaScript是一门基于原型的语言，JavaScript中的类只是一种语法糖。虽然了解这个概念不会对你的使用造成巨大的影响，但是还是有必要知道这一点，相关话题你可以阅读[这篇文章](https://chinese.freecodecamp.org/news/prototypes-and-inheritance-in-javascript/).  （ppy：换成了咱自己的链接）
    

<h1 id="the-four-principles-of-oop">OOP的四大原则</h1>

通常OOP有四个关键原则，这四个关键原则决定了OOP程序如何运作。他们是 **继承、封装、抽象和多态**。让我们分别看看这四个特征。

<h2 id="inheritance">继承</h2>

继承是 **基于类创建其他类**的能力。通过继承，我们可以先定义**父类** (包含一些属性和方法)， 然后再定义**子类**，子类继承父类的所有属性和方法。

让我们来看具体的例子。假设所有我们之前定义的角色都是主角的敌人。这些敌人都拥有“power”（力量）属性和“attack（攻击）方法。

一种方法是给所有现有类都添加同样的属性和方法，如下：

```javascript
...

class Bug {
    constructor (name, phrase, power) {
        this.name = name
        this.phrase = phrase
        this.power = power
        this.species = "bug"
    }
    hide = () => console.log("You can't catch me now!")
    sayPhrase = () => console.log(this.phrase)
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}

class Robot {
    constructor (name, phrase, power) {
        this.name = name
        this.phrase = phrase
        this.power = power
        this.species = "robot"
    }
    transform = () => console.log("Optimus prime!")
    sayPhrase = () => console.log(this.phrase)
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}

const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 10)
const Robot1 = new Robot("Tito", "I can cook, swim and dance!", 15)

console.log(bug1.power) //输出: 10
Robot1.attack() // 输出: "I'm attacking with a power of 15!"
```

但是你也发现了我们在重复代码，所以这并不是最优的写法。更好的办法是声明一个父类“Enemy”，然后其他所有敌人种类都继承这个父类，如下：

```javascript
class Enemy {
    constructor(power) {
        this.power = power
    }

    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}


class Alien extends Enemy {
    constructor (name, phrase, power) {
        super(power)
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    sayPhrase = () => console.log(this.phrase)
}

...
```

在上面的例子中，enemy类和其他所有类一样，我们使用constructor方法来接受参数，并且将它们分配给属性，方法用普通函数声明。

在子类中，我们使用 `extends` 关键字来声明我们需要继承父类。在constructor方法中，我们必须声明“power”参数并且使用`super`函数，来表示属性是在父元素中声明的。

当我们实例化新的对象的时候，其实我们传入了声明在constructor函数里的参数。 _哒哒！_ 我们就可以在实例中访问在父类中声明的属性和方法了。😎

```javascript
const alien1 = new Alien("Ali", "I'm Ali the alien!", 10)
const alien2 = new Alien("Lien", "Run for your lives!", 15)

alien1.attack() // 输出: I'm attacking with a power of 10!
console.log(alien2.power) // 输出: 15
```

现在假设我们想要添加一个新的父类，包含所有的角色（不论是不是敌人），我们给这个类设定“speed”（速度）属性和“move”（移动）方法，我们可以这样编写代码：

```javascript
class Character {
    constructor (speed) {
        this.speed = speed
    }

    move = () => console.log(`I'm moving at the speed of ${this.speed}!`)
}

class Enemy extends Character {
    constructor(power, speed) {
        super(speed)
        this.power = power
    }

    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}


class Alien extends Enemy {
    constructor (name, phrase, power, speed) {
        super(power, speed)
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    sayPhrase = () => console.log(this.phrase)
}
```

我们首先声明新的“Character”父类，然后让Enemy类继承它。最后我们在Alien类中使用 `constructor` 和 `super` 函数来传入新的"speed"参数。

我们同样在实例化的同时传入参数， _哒哒！_ 我们又可以在实例中访问"祖父“类的属性和方法了。👴

```javascript
const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)
const alien2 = new Alien("Lien", "Run for your lives!", 15, 60)

alien1.move() // 输出: "I'm moving at the speed of 50!"
console.log(alien2.speed) // 输出: 60
```

在了解继承之后，我们重新编写代码来避免重复：

```javascript
class Character {
    constructor (speed) {
        this.speed = speed
    }
    move = () => console.log(`I'm moving at the speed of ${this.speed}!`)
}

class Enemy extends Character {
    constructor(name, phrase, power, speed) {
        super(speed)
        this.name = name
        this.phrase = phrase
        this.power = power
    }
    sayPhrase = () => console.log(this.phrase)
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}


class Alien extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}

class Bug extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "bug"
    }
    hide = () => console.log("You can't catch me now!")
}

class Robot extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "robot"
    }
    transform = () => console.log("Optimus prime!")
}


const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)
const alien2 = new Alien("Lien", "Run for your lives!", 15, 60)
const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100)
const bug2 = new Bug("Erik", "I drink decaf!", 5, 120)
const Robot1 = new Robot("Tito", "I can cook, swim and dance!", 125, 30)
const Robot2 = new Robot("Terminator", "Hasta la vista, baby!", 155, 40)
```

现在我们的种类（species）类的代码就少多了，这主要归功于我们把共享的属性和方法都放在了同样的父类里。这就是继承的便捷性。😉

<h3 id="some-things-to-keep-in-mind-about-inheritance-"> 继承相关注意事项 </h3>

-   一个子类只能继承一个父类，不可以继承多个父类。虽然确实有相应的技巧来解决这个问题。
-   你可以根据需求扩展继承链，设置父类、祖父类、太祖父类等。
-   如果子类从父类继承一些属性，必须首先使用`super()`函数并将父类属性传参，然后再设定子类自己的属性。

例子：

```javascript
// 正确写法:
class Alien extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}

// 错误写法:
class Alien extends Enemy {
    constructor (name, phrase, power, speed) {
        this.species = "alien" // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super(name, phrase, power, speed)
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}
```

-   在继承的时候，所有父类的方法和属性都会被子类继承，我们并不能决定继承哪些，不继承哪些。（就像我们不能决定从我们的父母那里继承哪些美德和缺点一样。😅 在讲组合的时候我们会重新提到这个点)。
-   子类可以覆盖掉父类的属性和方法。

举一个例子，在之前的代码中，Alien类继承了Enemy类的`attack` 方法，并打印 `I'm attacking with a power of ${this.power}!`:

```javascript
class Enemy extends Character {
    constructor(name, phrase, power, speed) {
        super(speed)
        this.name = name
        this.phrase = phrase
        this.power = power
    }
    sayPhrase = () => console.log(this.phrase)
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}


class Alien extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}

const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)
alien1.attack() // 输出: I'm attacking with a power of 10!
```

假设我们希望Alien的 `attack` 方法表现不同，我们可以覆盖这个方法：

```javascript
class Enemy extends Character {
    constructor(name, phrase, power, speed) {
        super(speed)
        this.name = name
        this.phrase = phrase
        this.power = power
    }
    sayPhrase = () => console.log(this.phrase)
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}


class Alien extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    attack = () => console.log("Now I'm doing a different thing, HA!") // 覆盖父类的方法
}

const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)
alien1.attack() // 输出: "Now I'm doing a different thing, HA!"
```

<h2 id="encapsulation">封装</h2>

封装是OOP另一个关键概念。封装代表对象有“决定”将什么信息暴露在“外部”的能力。封装通过**公共和私有属性/方法**来实现。

在JavaScript中，所有对象的属性和方法默认为公共的。“公共”意味着我们可以在函数体外部获取对象的属性和方法。

```javascript
// 类
class Alien extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}

// 对象
const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)

// 获取公共属性和方法
console.log(alien1.name) // output: Ali
alien1.sayPhrase() // output: "I'm Ali the alien!"
```

为了让你更清晰地理解，让我们来看看私有属性和方法是什么样的：

假设我们希望我们的Alien类有一个`birthYear`属性， 这个属性可以执行`howOld`方法，但我们不希望这个属性被除了对象以外的任何地方访问到， 我们可以这样做：

```javascript
class Alien extends Enemy {
    #birthYear // 首先我们要声明一个私有属性，通常是用"#"打头

    constructor (name, phrase, power, speed, birthYear) {
        super(name, phrase, power, speed)
        this.species = "alien"
        this.#birthYear = birthYear // 然后将它赋值到constructor函数
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    howOld = () => console.log(`I was born in ${this.#birthYear}`) // 在对应的方法中使用
}
    
// 实例化的方法不变
const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50, 10000)
```

我们可以访问 `howOld` 方法，如下：

```javascript
alien1.howOld() // 输出: "I was born in 10000"
```

但如果我们想要直接访问这个属性，会得到报错。当我们打印这个对象的时候，会看不到私有属性。

```javascript
console.log(alien1.#birthYear) // 报错
console.log(alien1) 
// 输出：
// Alien {
//     move: [Function: move],
//     speed: 50,
//     sayPhrase: [Function: sayPhrase],
//     attack: [Function: attack],
//     name: 'Ali',
//     phrase: "I'm Ali the alien!",
//     power: 10,
//     fly: [Function: fly],
//     howOld: [Function: howOld],
//     species: 'alien'
//   }
```

当我们需要某个特定的属性或者方法只在对象的内部运作，并且不暴露在外部时，封装就能够发挥作用。使用封装可以避免“暴露”我们不想暴露的信息。

<h2 id="abstraction">抽象</h2>

抽象是一个原则，规定了一个类只能代表和问题上下文相关的信息。简言之，只暴露需要在外部使用的属性和方法，如果不需要使用，就不要暴露。

这个原则和封装紧密相关，因为在封装中，我们使用公共和私有属性/方法来决定应该暴露哪些信息。

<h2 id="polymorphism">多态</h2>

最后就是多态这个概念(听上去挺复杂的，不是吗？OOP的命名赛高！ 🙃)。 多态意味着“多种形态”，实际上这是一个简单的概念，表示的在不同的特定条件下使用一种方法返回不同的值。

举个例子，我们发现Enemy类拥有 `sayPhrase`方法。 那么所有继承Enemy类的子种类都拥有 `sayPhrase`方法。

但是我们在不同种类（species）调用这个方法的时候，得到不同的结果：

```javascript
const alien2 = new Alien("Lien", "Run for your lives!", 15, 60)
const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100)

alien2.sayPhrase() // 输出: "Run for your lives!"
bug1.sayPhrase() // 输出: "Your debugger doesn't work with me!"
```

这是因为我们在每一个子类实例化的时候，传入了不一样的参数。这是一种形式的多态—— **基于参数的**多态。 👌

另一种多态是 **基于继承的**多态， 指的是子类覆盖了父类的属性和方法。上文的例子在这里也可以使用：

```javascript
class Enemy extends Character {
    constructor(name, phrase, power, speed) {
        super(speed)
        this.name = name
        this.phrase = phrase
        this.power = power
    }
    sayPhrase = () => console.log(this.phrase)
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}


class Alien extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    attack = () => console.log("Now I'm doing a different thing, HA!") // 覆盖父类的方法
}

const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)
alien1.attack() // 输出: "Now I'm doing a different thing, HA!"
```

这里也是多态，是因为如果我们取消ALien类中的 `attack` 方法，我们仍可以在实例中调用这个方法：
```javascript
alien1.attack() // 输出: "I'm attacking with a power of 10!"
```

同一个方法打印不同的结果，这取决于我们是否覆盖了父类的方法。这就是多态！👌👌

<h2 id="object-composition">对象组合</h2>

[对象组合](https://en.wikipedia.org/wiki/Composition_over_inheritance)是替换继承的一种方法。

子类在继承的时候，会继承父类的所有方法和属性。如果使用组合，我们可以更加灵活地将方法和属性分配给对象，这样对象就只获得了需要的信息，不会有额外的信息。

应用的方法很简单，只需使用接受对象作为参数的函数，并且分配其需要的属性/方法。请看下面的例子：

假设我们想要给bug角色添加飞行的能力，在我们的代码中，只有外星人有 `fly` 方法。一种方式是让`Bug`类继承：

```javascript
class Alien extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}

class Bug extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "bug"
    }
    hide = () => console.log("You can't catch me now!")
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!") //我们重复了代码 =(
}
```

另一种方法是我们可以将 `fly`方法迁移到 `Enemy`里，这样 `Alien` 和 `Bug` 类都继承了这个方法。 但这样同样使得不需要这个方法的类也继承了，如 `Robot`。

```javascript
class Enemy extends Character {
    constructor(name, phrase, power, speed) {
        super(speed)
        this.name = name
        this.phrase = phrase
        this.power = power
    }
    sayPhrase = () => console.log(this.phrase)
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}


class Alien extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "alien"
    }
}

class Bug extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "bug"
    }
    hide = () => console.log("You can't catch me now!")
}

class Robot extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "robot"
    }
    transform = () => console.log("Optimus prime!")
	// 我并不需要飞行的方法 =(
}
```

可见如果改变了一开始计划，继承会带来问题（在实际编码中经常会遇到）。对象组合就提供了一个方法使对象只获得他们需要的属性和方法。

在我们的例子中，我们可以创建一个函数，这个函数唯一的使命就是给需要的对象添加飞行方法，对象被作为参数传入函数。

```javascript
const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100)

const addFlyingAbility = obj => {
    obj.fly = () => console.log(`Now ${obj.name} can fly!`)
}

addFlyingAbility(bug1)
bug1.fly() // 输出: "Now Buggy can fly!"
```

我们可以使用类似的方法，给我们的怪物添加不同的能力。

你肯定发现了这种方式比继承父类固定的属性和方法要灵活得多。当任意一个对象需要方法的时候，我们可以调用相应的函数来实现。👌

这里有一个[对比继承和组合的视频](https://www.youtube.com/watch?v=wfMtDGfHWpA&t=3s)，推荐观看！

<h1 id="roundup">总结</h1>

OOP是一个强大的编程范式，可以帮助我们通过创建实体抽象来执行庞大的项目。每一个实体负责特定的信息和行为，实体之间也可以相互作用，就像现实生活这样。

在这篇文章中我们学习了类、继承、封装、抽象、多态和组合。这些都是OOP世界中的关键概念。我们同样浏览了各种通过JavaScript实现OOP的例子。

希望你喜欢这篇文章，并从中受益。你可以在[LinkedIn](https://www.linkedin.com/in/germancocca/)或[Twitter](https://twitter.com/CoccaGerman)上关注我。

干杯！下篇文章见！ ✌️

![98OvjJ](https://www.freecodecamp.org/news/content/images/2022/04/98OvjJ.gif)
