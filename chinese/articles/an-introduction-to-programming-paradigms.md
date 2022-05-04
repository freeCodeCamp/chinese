> -  原文地址：[Programming Paradigms – Paradigm Examples for Beginners](https://www.freecodecamp.org/news/an-introduction-to-programming-paradigms/)
> -  原文作者：[Germán Cocca](https://www.freecodecamp.org/news/author/gercocca/)
> -  译者：Papaya HUANG
> -  校对者：

![Programming Paradigms – Paradigm Examples for Beginners](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/anne-nygard-OJzEnupZWGM-unsplash.jpg)

大家好！这篇文章将讲解不同的编程范式，编程范式是对一些流行的组织编程方式的“花哨”称呼。

我把话题拆分，并且每个范式补充一个例子。通过这篇文章，你就可以了解当人们在说“面向对象”、“函数式”以及“声明式”时，他们在说什么。

虽然我会提供一些伪代码和代码示例，但是这篇文章的讨论仅停留在范式表层和理论层面。

我计划将在之后用JavaScript示例来深入讲解每一个范式，如果你感兴趣的话可以关注我（关注方式见文章结尾）。

让我们开始吧！

## 文章目录

-   [编程范式是什么](#what-is-a-programming-paradigm)
-   [编程范式不是什么](#what-a-programming-paradigm-is-not)
-   [我为什么了解编程范式？](#why-should-i-care)
-   [常见的编程范式](#popular-programming-paradigms)
    -   [命令式编程](#imperative-programming)
    -   [过程式编程](#procedural-programming)
    -   [函数式编程](#functional-programming)
    -   [声明式编程](#declarative-programming)
    -   [面向对象的编程](#object-oriented-programming)
-   [总结](#roundup)

<h1 id="what-is-a-programming-paradigm">编程范式是什么</h1>

编程范式指的是一种程序或者程序语言的组织风格、方式。每一种程序范式都包含了代码结构、特征以及处理常见编程问题的方式。

存在各种各样编程范式的原因和存在各种编程语言一样。特定范式适合解决特定问题，所以针对不同项目采取不同的编程范式。

随着时间的推移，不同的范式实践也层出不穷。归功于软件和硬件的发展，新的方式也不断涌现。

我认为是人类的创造力推动了范式的发展。我们热衷于创造新的东西，提高旧的东西，调整生产工具以符合现代需求，提高效率。

所以当现在我们想要写一个程序时，我们有非常多的选择来编写、构建这个程序。🥸

<h1 id="what-a-programming-paradigm-is-not">编程范式不是</h1>

编程范式不是语言或者工具，不能使用范式来“构建”任何东西。它们更像是一套约定俗成的理想和准则，开发者遵循并且扩展这套范式。

编程语言并不总是和一个特定范式相关联。有些语言在创建的时候就考虑到了某种范式，并且具有比其他语言更利于这种范式的特性。（[Haskel](https://www.haskell.org/) 和函数式编程就是很好的例子）。

但也存在“多范式”语言，意味着你可以以这样或那样的范式来调整代码（JavaScript和Python就是非常好的例子）。

同时，编程和范式并不是相互排斥的，也就是说你可以在同一个项目中同时使用不同的范式。

<h1 id="why-should-i-care">我为什么要了解编程范式？</h1>

![whatever-yeah-1](https://www.freecodecamp.org/news/content/images/2022/04/whatever-yeah-1.gif)

一句话回答：这是常识！

详细回答：我觉得了解不同的编程实践方式很有趣，探索相关话题可以帮助你打开思路，跳出既定框架和工具。

另外，这些术语在编程实践被广泛应用，所以对它们有一个基本概念，对你了解其他编程话题也有帮助。

<h1 id="popular-programming-paradigms">常见的编程范式</h1>

在介绍完编程范式是什么，不是之什么后，让我们来看看一些常见范式，它们的特征和它们之间的比较。

需要注意这篇文章的范式清单并不完整，还有其他一些流行的范式我并没有提到。这里我会提到最常见和使用最广泛的一些范式。

<h2 id="imperative-programming">命令式编程</h2>

命令式编程由一组详细的指令组成，让计算机以一定的顺序执行。之所以被称作“命令式”是因为开发者以非常具体的方式，准确地规定计算机必须做什么。

命令式编程强调描述程序*怎么样*一步一步地运行。

假如你想烤一个蛋糕，命令式编程的制作方式如下：（我不是专业烘焙师，别嫌弃我的步骤 😒)

```
1- Pour flour in a bowl //将面粉倒入碗中
2- Pour a couple eggs in the same bowl //在碗中打入两个鸡蛋
3- Pour some milk in the same bowl //倒入一些牛奶
4- Mix the ingredients //将它们混合
5- Pour the mix in a mold //将混合物倒入模具
6- Cook for 35 minutes //烤35分钟
7- Let chill //冷却
```

若使用真实的代码，假设我们想要从一个数组中过滤出大于5的所有元素，命令式编程如下：

```javascript
const nums = [1,4,3,6,7,8,9,2]
const result = []

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 5) result.push(nums[i])
}

console.log(result) // 输出: [ 6, 7, 8, 9 ]
```

我们告诉程序要遍历整个数组的每一个元素，并且和5来比较，如果这个元素的值大于5，就将它推入另一个数组。

我们的指令非常的具体详尽，这就是命令式编程的特点。

 <h2 id="procedural-programming">过程式编程</h2>

过程式编程是命令式编程的派生，在其基础上添加了函数特性（也被称作“过程”(procedures)或者“子程序“（subroutines））。

在过程式编程中，开发者被鼓励将程序的执行拆分成不同的函数，以此来提高程序的模块化和组织性。

改写刚才做蛋糕的例子：

```
function pourIngredients() {
    - Pour flour in a bowl
    - Pour a couple eggs in the same bowl
    - Pour some milk in the same bowl
}

function mixAndTransferToMold() {
    - Mix the ingredients
    - Pour the mix in a mold
}

function cookAndLetChill() {
    - Cook for 35 minutes
    - Let chill
}

pourIngredients()
mixAndTransferToMold()
cookAndLetChill()
```

可以发现因为使用了函数，我们只需要阅读结尾三个函数的调用就知道这个程序到底要做什么。

这种简化和抽象化就是过程式编程的一个优势。但是在函数中，我们还是使用了原来命令式编程的模式。

<h2 id="functional-programming">函数式编程</h2>

函数式编程将函数的概念往前再推进了一步。

在函数式编程中，函数被认为是 **一等公民**，意味着可以将它们赋值给变量，作为参数传入其他函数，或者由函数返回。

另一个核心观点是**纯函数**。 **纯** 函数指的是输出仅取决于输入的函数。如果输入相同，输出的结果始终保持不变，另外纯函数没有副作用（对函数外部环境的改变）。

基于这些概念，函数式编程鼓励使用函数编程(惊不惊喜，意不意外😲)。同时，函数式编程也坚持将代码模块化、取消副作用，这样可以在代码库内更清晰的分离各个部分代码的责任。提高代码的可维护性。

回看之前过滤数组的例子，可以发现使用命令式范式需要在外部使用一个变量来存储函数结果，这就是一种副作用。

```javascript
const nums = [1,4,3,6,7,8,9,2]
const result = [] // 外部变量

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 5) result.push(nums[i])
}

console.log(result) // 输出: [ 6, 7, 8, 9 ]
```

改写成函数式编程如下：

```javascript
const nums = [1,4,3,6,7,8,9,2]

function filterNums() {
    const result = [] // 内部变量

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 5) result.push(nums[i])
    }

    return result
}

console.log(filterNums()) // 输出: [ 6, 7, 8, 9 ]
```

用两种方式编写的代码几乎一样，但在这里我们将遍历和结果数组都打包在函数内部。这样我们就可以确保函数不会更改任何作用域以外的东西。我们只创造了一个处理自己信息的变量，一旦执行结束，变量也就被回收。

<h2 id="declarative-programming">声明式编程</h2>

声明式编程隐藏了复杂性，使编程语言更接近人类的语言和思维，这和命令式编程正好相反。命令式编程给指令告诉计算机 _怎么样_ 执行任务，但是声明式编程告诉计算机需要 _什么_ 样的结果。

使用例子理解会更清晰，同样的过滤数组改写成声明式：

```javascript
const nums = [1,4,3,6,7,8,9,2]

console.log(nums.filter(num => num > 5)) // 输出: [ 6, 7, 8, 9 ]
```

使用过滤函数，我们不再告诉计算机具体的操作是需要遍历数组并且将结果存储到另一个数组中，我们只需要告诉计算机我们需要过滤("filter")，过滤的条件是("num > 5")。

这样做的好处是代码更易读易理解，并且更简洁。JavaScript的`filter`、 `map`、 `reduce`和`sort` 函数都是声明式编程的例子。

另一个例子是JS框架/库——React，如下面的代码：

```javascript
<button onClick={() => console.log('You clicked me!')}>Click me</button>
```

这里有一个按钮元素，绑定了一个事件监听器，一旦点击按钮就会触发console.log函数。

React使用的JSX语法结合了HTML和JS，这样编写应用就更加简单快捷。但是JSX并不是浏览器读取和执行代码的方式。React的代码之后会被编译成正常的HTML和JS代码，这才是浏览器实际执行的代码。

JSX就是声明式的，目的是为了使得开发者有一个更加友好、高效的工作接口。

需要注意即便我们书写的是声明式代码，但是计算机还是以命令式来执行信息。

在上述数组的例子里，计算机实际上还是循环遍历了整个数组，但是不需要开发人员直接写出这个指令。声明式编程实际上做的是在开发者面前 **隐藏** 代码的复杂性。

这里有一篇[比较命令式和声明式编程的文章](https://www.youtube.com/watch?v=E7Fbf7R3x6I)，推荐你阅读。

<h2 id="object-oriented-programming">面向对象的编程</h2>

最受欢迎的编程范式之一莫过于面向对象的编程(OOP).

OOP的核心概念是将关注点分离成对象实体，每一个实体包含一组信息（属性）和行为（方法），可以由实体来执行。

OOP大量使用类（是由程序员设定的从蓝图或者模板创建新对象的方法），由类创建的对象叫做实例。

改写之前的伪代码烤蛋糕例子，假设我们蛋糕房有一个主厨（叫Frank），和一个厨师助理（叫Anthony），他俩分别有各自的烘培任务。如果使用OOP，代码如下：

```
// 给每一个实体创建一个类
class Cook {
	constructor constructor (name) {
        this.name = name
    }

    mixAndBake() {
        - Mix the ingredients
    	- Pour the mix in a mold
        - Cook for 35 minutes
    }
}

class AssistantCook {
    constructor (name) {
        this.name = name
    }

    pourIngredients() {
        - Pour flour in a bowl
        - Pour a couple eggs in the same bowl
        - Pour some milk in the same bowl
    }
    
    chillTheCake() {
    	- Let chill
    }
}

// 将每一个类实例化
const Frank = new Cook('Frank')
const Anthony = new AssistantCook('Anthony')

// 调用实例的方法
Anthony.pourIngredients()
Frank.mixAndBake()
Anthony.chillTheCake()
```

OOP的优势在于，通过清晰的关注点和责任分离，编程更加易于理解。

在这个例子中我只介绍了OOP的表面，如果你感兴趣的话，推荐观看下面两个视频：

-   [OOP 视频 1](https://www.youtube.com/watch?v=cg1xvFy1JQQ)
-   [OOP 视频 2](https://www.youtube.com/watch?v=pTB0EiLXUC8)

以及阅读这篇[对比命令式、函数式和面向对象编程的文章](https://www.youtube.com/watch?v=08CWw_VD45w)。

<h1 id="roundup">总结</h1>

如你所见，编程范式式是不同的处理编程问题和组织代码的方法。

命令式、过程式、函数式、声明式以及面向对象的编程范式是目前最受欢迎，使用最广泛的范式。了解这些基础，有助于你更好地理解编程世界。

希望你喜欢这篇文章，并且有所收获。你可以在[linkedin](https://www.linkedin.com/in/germancocca/)或[twitter](https://twitter.com/CoccaGerman)上关注我。

干杯！下篇文章见! =D

![200](https://www.freecodecamp.org/news/content/images/2022/04/200.gif)
