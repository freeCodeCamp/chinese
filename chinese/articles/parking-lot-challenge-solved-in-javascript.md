> -  原文地址：[How to Solve the Parking Lot Challenge in JavaScript](https://www.freecodecamp.org/news/parking-lot-challenge-solved-in-javascript/)
> -  原文作者：[Mihail Gaberov](https://www.freecodecamp.org/news/author/mihail/)
> -  译者：Irenia111
> -  校对者：

![How to Solve the Parking Lot Challenge in JavaScript](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/parking-loot.jpeg)

~~Have you heard about the Parking Lot challenge? If not, let me explain briefly.~~
你听说过停车场挑战吗？ 如果没有，那让我来简单解释一下吧。

~~The Parking Lot is challenge where you are asked to write a class that manages an imaginary parking lot.~~
停车场挑战要求编写一个管理停车场的class。

~~In this tutorial we will do that in JavaScript. And to make it a bit more interesting, we will create a small React app that will visualize the workings of our class.~~
在本教程中，我们选用 JavaScript 进行代码实现。为了让停车场更有趣一点，我们将创建一个小小的 React App，用以可视化我们的代码。

让我们开始吧。🎉

~~# Challenge Requirements~~
# 挑战要求

~~For this challenge, you have to implement a class in JavaScript. That class should consist of variables and methods that simulate how a parking lot works. Here are the details:~~
为实现挑战，你需要使用 JavaScript 实现一个类。 该类应包含以模拟停车场工作的变量和方法。 下面是详细要求：

-   ~~We should be able to create the parking lot with a given size (number of parking spots)~~
-   我们需要创建具有指定大小（停车位数量）的停车场
-   ~~We don’t differentiate between different vehicles – we consider them all the same~~
-   我们认为所有车辆都是相同的，所以我们不需要对车辆进行区分
-   ~~Our class provides a method for parking new cars in the parking lot
-   我们的类提供了一种在停车场停放新车的方法
-   ~~Our class provides a method for removing already parked cars, and
-   我们的类提供了一种移除已停放车辆的方法
-   ~~·Our class provides a method for getting the size of the parking lot (total count of slots)
-   我们的类提供了一种获取停车场大小（车位总数）的方法

~~# Parking Lot Challenge Solution~~
# 停车场挑战解决方案

~~First, let’s take a look at the class logic itself.~~
首先，让我们看一下停车场类的逻辑。

~~It’s pretty straightforward, so there probably won’t be any surprises for most of you – especially if you already have some programming experience in OOP and class-based languages.~~
停车场自身的逻辑很简单，所以可能对于你们大多数人来说没有任何难度————特别当你已具备一些 OOP 和基于类的编程经验时。

~~## **class ParkingLot**~~
## **使用class实现停车场挑战**

~~I will give you the code first and then I'll follow up with a short explanation on the implementation.~~
我将会先展示实现代码，再对于代码实现进行简短的解释。
```javascript
class ParkingLot {
  slots = [];

  constructor(parkingSize) {
    this.slots = new Array(parkingSize).fill(null);
  }

  park(carId) {
    console.log(`Parking car: ${carId}`);
    if (this.slots.every((slot) => slot !== null)) {
      return false;
    }

    for (let i = 0; i <= this.slots.length; i++) {
      const slot = this.slots[i];

      if (slot === null) {
        this.slots[i] = carId;
        return true;
      }
    }
  }

  remove(carId) {
    console.log(`Leaving car: ${carId}`);
    if (this.slots.every((slot) => slot !== carId)) {
      return false;
    }

    for (let i = 0; i <= this.slots.length; i++) {
      const slot = this.slots[i];

      if (slot === carId) {
        this.slots[i] = null;
        return true;
      }
    }
  }

  getSlots() {
    console.log(`Parking slots: ${this.slots}`);
    return this.slots;
  }

  getSize() {
    console.log(`Parking size is: ${this.slots.length}`);
    return this.slots.length;
  }

  getAvailable() {
    const availableSlots = this.slots.filter((s) => s === null).length;
    console.log(`Available parking slots: ${availableSlots}`);
    return availableSlots;
  }

  isFull() {
    return this.getAvailable() === 0;
  }
}

export default ParkingLot;
```

~~Starting from the beginning – our class has one property, `slots`, which is going to be an array that stores info about the parking slots (whether they're free or occupied).~~
让我们从头开始：首先，我们的停车场class有一个`slots`属性，这个属性是一个数组，用于存储有关停车位的信息（不考虑停车位被空闲状态还是已被占用）。

~~Then we have a `constructor` method that gets executed every time you create an instance of this class. Here is where we use an input number parameter, called `parkingSize`, to create an empty array with length equal to that number.~~
在`slots`属性之后，我们创建了`constructor`方法，`constructor`将在每次创建停车场类的实例时都会执行。在`constructor`中，我们使用`parkingSize`的输入数值参数来创建一个长度等于该数字的空数组。

~~Technically speaking, this array is not empty, as we initialize it with _null_ values. This means that after the code executes in the constructor, we will end up with an array filled with null values, depending on the number we passed in.~~
从技术上讲，这个数组并不是空数组，因为我们用为 _null_ 的值对它进行了初始化。这意味着在构造函数执行结束后，我们将会得到一个填充了 _null_ 值的数组，而数组的具体大小则取决于我们传入构造方法的值。

~~For example, if we execute this:~~
举个例子🌰，如果我们执行下面的代码：

```javascript
const parking = new ParkingLot(5);
```

~~It will result in this:~~
我们将会得到以下结果：

```javascript
[null, null, null, null, null] // lenght = 5

instead of [] // empty array, length 0
```

~~After going through the constructor, let’s take a look at the rest of the methods in the class.~~
看完了停车场类的构造函数，我们接下来再来看看剩下的方法。

~~`park()` – This is where we do the actual parking of a car. This method iterates over the `slots` array, checks if there are free spots (that is, slots that are still equal to null), and adds in the car in those empty spots.~~
`park()`—— 是实现停车功能的方法。该方法遍历了 `slots` 数组，检查是否有空闲位置（即数组内仍然等于 null 的位置），并在这些空闲位置中添加汽车。

~~Cars are given by `carId`. This is just an identifier we use to signify that we have a car in a certain spot. Note that this method returns false if there are no free slots or true if parking was successful.~~
`carId`代表汽车，我们以它为标识符，表示在某个地点有一辆车。请注意，如果 `slots` 中没有空闲位置，则停车失败，此方法返回 false ，如果停车成功，则返回 true。

~~`getSlots()` – Helper method that just returns the array we use to store the parking slots.~~
`getSlots()` - 是一个辅助方法，用于返回存储停车位的数组。

~~`remove()` – This is how we remove cars from the parking lot. This method also iterates over the slots array.~~
`remove()` – 这个方法实现了从停车场移除汽车的功能，它也可以重置 `slots` 数组。

~~💡As you may have noticed up until now, in almost every case when we need to manipulate data stored in a data structure like array, we have to iterate over this structure so that we can access its elements.~~
💡到目前为止，可能你已经注意到了，几乎在每种情况下，当我们需要操作 `slots` 数组时，我们都需要遍历整个数组，以便访问数组内的元素。

~~Different programming languages provide different data structures and methods to work with them, but the main idea is always the same: when you need to do something with this data, you need to iterate over it in some way.~~
不同的编程语言提供了不同的数据结构和方式，但它们的主要思想也总是相同的：当你需要对数据做一些操作时，你需要已某种方式遍历它们。

~~To remove a car from the parking lot, we use the aforementioned identifier. We look for such items in the slots array, and if we get a match, we have a car to ‘un-park’. We perform the actual removal by just setting that specific slot to _null_ again.~~
为了将汽车从停车场中移走，我们使用前文中的标识符。我们会在 `slots` 数组中寻找带有标识符的车辆，在找到对应车辆后。将它“移出”停车场。我们采用将 `slots` 数组内对应值置为 _null_ 的方式代表移除车辆。

~~Now you can guess why we decided to initialize our slots array with nulls in the first place.~~
现在你大概就会明白，为何我们使用 _null_ 来初始化停车场数组。

~~This method also returns a boolean result depending on whether there was a successful removal or not.~~
该方法也会根据是否成功移除车辆返回布尔值。

~~We should be able to use this feedback when building some kind of UI that is able to react to such changes. The same is valid when adding cars to the parking lot (look at the `park` method).~~
当建构一些 UI 界面以展示变化，我们需要使用这些方法的返回值。比如，将汽车添加到停车场时（`park` 方法），也会有相同的返回值机制。

~~`getSize()` – Another helper method that we use to check the parking lot size.~~
`getSize()` – 我们用来检查停车场大小的另一个辅助方法。

~~`getAvailable()` – This one shows us how many available slots we currently have.~~
`getAvailable()` - 这个方法可以显示我们目前有多少空闲的停车位。

~~`isFull()` – Tells us if the parking lot is full, that is that there are no more available slots.~~
`isFull()` – 这个方法告诉我们停车场是否已满，即没有更多可用的车位。

# 如何构建 React App

![image-92](https://www.freecodecamp.org/news/content/images/2022/06/image-92.png)

停车场应用程序 - 主页面

Here is where the fun starts. 🕺
这是乐趣开始的地方🕺。

We are going to create an interactive app, visualizing the tasks which we can perform with the help of our implementation above.
我们将创建一个交互式应用程序，可视化我们可以在上述实现的帮助下执行的任务。

Our app will provide basic UI controls allowing an (imaginary) operator to work with the parking lot software_._ And in order to make their work a bit more pleasing to the eye, we will try to animate the basic functions our software provides.
我们的应用程序将提供基本的 UI 控件，允许（假想的）操作员使用停车场软件_._ 为了使他们的工作更令人赏心悦目，我们将尝试为我们的软件提供的基本功能设置动画。

一起来看看，是如何实现的吧！📺

## Demo

Here is the live demo for those of you who doesn’t care about the details and just want to ‘taste’ it: 🥪
这是为那些不关心细节而只想“品尝”它的人提供的现场演示：🥪

[

Parking Lot Software Inc.

![favicon.4c2cf568](https://parking-lot-chi.vercel.app/assets/favicon.4c2cf568.svg)



](https://parking-lot-chi.vercel.app/)

Parking Lot Inc. app

## 项目源码

Here is the [repo](https://github.com/mihailgaberov/parking-lot) with the app's source code.
这是带有应用程序源代码的 [repo](https://github.com/mihailgaberov/parking-lot)。

Let me give you a brief summary on the _what_ and the _why_.
让我简要介绍一下_what_ 和_why_。

The app is built with [vite](https://vitejs.dev/). The reason for this is that I've been playing around recently with it and I am really happy with the speed and the performance it provides.
该应用程序是使用 [vite](https://vitejs.dev/) 构建的。 原因是我最近一直在玩它，我对它提供的速度和性能感到非常满意。

No matter that it’s still in the relatively early stages of development – if I am about to start a new project and am in a position to choose, I will go with **vite**.
不管它还处于相对早期的开发阶段——如果我要开始一个新项目并且有选择的余地，我会选择**vite**。

This is not to say I have anything against its big brother [CRA](https://create-react-app.dev/). On the contrary, I have built multiple apps with it and I am still using it in some of my projects. It’s just that **vite** is much faster and often gives me everything I currently need.
这并不是说我反对它的老大哥 [CRA](https://create-react-app.dev/)。 相反，我已经用它构建了多个应用程序，并且我仍在我的一些项目中使用它。 只是 **vite** 更快，并且经常给我目前需要的一切。

💡Just keep in mind that selecting a given technology always depends on your specific needs for a specific project. That is to say that there is no silver bullet. It’s always a matter of requirements and priorities.
💡请记住，选择给定的技术始终取决于您对特定项目的特定需求。 也就是说，没有银弹。 这始终是需求和优先级的问题。

## React App 项目结构

![image-93](https://www.freecodecamp.org/news/content/images/2022/06/image-93.png)

App 项目结构

The app's structure is straightforward. At the root level we have two folders – _assets_ and _src_. The first contains the assets used in the app (in this case it’s just a car image). The later contains all the files with the source code.
该应用程序的结构很简单。 在根级别，我们有两个文件夹 - _assets_ 和 _src_。 第一个包含应用程序中使用的资产（在本例中，它只是一张汽车图像）。 后者包含所有带有源代码的文件。

Let’s take a closer look inside the source folder.
让我们仔细看看源文件夹内部。

Here we have the following folders:
在这里，我们有以下文件夹：

-   [components](https://github.com/mihailgaberov/parking-lot/tree/main/src/components) – contains all React components used in the app
-   [组件](https://github.com/mihailgaberov/parking-lot/tree/main/src/components) - 包含应用程序中使用的所有 React 组件
-   [lib](https://github.com/mihailgaberov/parking-lot/tree/main/src/lib) – contains the parking lot class, responsible for the main logic of the app
-   [lib](https://github.com/mihailgaberov/parking-lot/tree/main/src/lib) - 包含停车场类，负责app的主要逻辑
-   [pages](https://github.com/mihailgaberov/parking-lot/tree/main/src/pages) – contains two sub-directories, for the two main screens in the app – Landing and Main, respectively
-   [pages](https://github.com/mihailgaberov/parking-lot/tree/main/src/pages) – 包含两个子目录，分别用于应用程序中的两个主屏幕 – Landing 和 Main
-   [utils](https://github.com/mihailgaberov/parking-lot/tree/main/src/utils) – contains a helper method for generating fictitious car license plates that we use later when representing a parking slot as _busy_
-   [utils](https://github.com/mihailgaberov/parking-lot/tree/main/src/utils) - 包含一个辅助方法，用于生成我们稍后将停车位表示为_busy_时使用的虚构汽车牌照
-   And several files, most of them are related to the entry point of the app, except the favicon ones – their role should be clear to you. If not, take a look at the tab of your browser 😉
-   - 还有几个文件，其中大部分都与应用程序的入口点有关，除了 favicon 文件——它们的作用你应该很清楚。 如果没有，请查看浏览器的选项卡😉

![image-94](https://www.freecodecamp.org/news/content/images/2022/06/image-94.png)

Browser tab with favicon
带有图标的浏览器选项卡

## App 页面

As mentioned earlier, the main pages (also called screens) in the app are called [Landing](https://github.com/mihailgaberov/parking-lot/tree/main/src/pages/Landing) and [Main](https://github.com/mihailgaberov/parking-lot/tree/main/src/pages/Main). These are React components themselves. They serve as skeletons for everything you see in the welcome page – where you land initially and where you can select how many parking slots you want to have in your parking lot.
如前所述，应用程序中的主页面（也称为屏幕）称为[Landing]（https://github.com/mihailgaberov/parking-lot/tree/main/src/pages/Landing）和[Main]（ https://github.com/mihailgaberov/parking-lot/tree/main/src/pages/Main）。 这些是 React 组件本身。 它们充当您在欢迎页面中看到的所有内容的骨架——您最初降落的位置以及您可以在哪里选择您希望在停车场拥有多少停车位。

![image-95](https://www.freecodecamp.org/news/content/images/2022/06/image-95.png)

欢迎页

And the page you go to after clicking the big, ping submit button - the main screen where your operator is able to manage the parking lot.
以及点击大的 ping 提交按钮后您转到的页面 - 您的操作员能够管理停车场的主屏幕。

![image-96](https://www.freecodecamp.org/news/content/images/2022/06/image-96.png)

主页

## **App 的功能性**

The app provides very basic functionality for managing an imaginary parking lot. When the user select how many slots they want (max 20), they'll be transitioned to the main screen. There, the user will be able to see all free parking slots.
该应用程序提供了用于管理虚拟停车场的非常基本的功能。 当用户选择他们想要的插槽数量（最多 20 个）时，它们将被转换到主屏幕。 在那里，用户将能够看到所有免费停车位。

When a car is parked, via the PARK! button, the relevant spot will be visualised as busy and will show the registration number of the car being parked there. The operator can un-park cars by clicking on a busy slot, that is on the car they want to “remove” from the parking lot.
当汽车停放时，通过公园！ 按钮，相关地点将显示为繁忙，并显示停在那里的汽车的登记号码。 操作员可以通过点击一个繁忙的插槽来取消停放汽车，即他们想要从停车场“移除”的汽车。

~~## 💡The simple animation of the moving red car is just for visual effect and doesn’t have any real influence on the way the parking lot works.~~
## 💡红色汽车移动的简单动画只是为了视觉效果，对停车场的运作方式没有任何实际影响。

I used [CSS modules](https://github.com/css-modules/css-modules) for styling the app. I also tried to make the app a bit mobile friendly, in case you decide to try it on your mobile device.
我使用 [CSS 模块](https://github.com/css-modules/css-modules) 为应用设置样式。 我还尝试使该应用程序对移动设备友好一点，以防您决定在移动设备上试用它。

~~Be my guest and [give a try](https://parking-lot-chi.vercel.app/) 🧪~~
行动起来，快 [试一试](https://parking-lot-chi.vercel.app/) 吧🧪

# 总结

~~My initial idea behind this post was to describe the parking lot class itself. You know, just for educational purposes. To show you how can you write such a class in JavaScript.~~
在写作这篇文章时，我一开始只打算描述停车场类本身————仅仅出于科普目的，展示如何通过 JavaScript 实现一个类。

~~But then I thought it’s kind of boring 🥱.  I wanted to create something funnier 💃🏻, something more gamified 🕹️  so to speak.~~
但后来我觉得，仅仅实现一个类有点无聊🥱。 因为我想创造一些更有趣💃🏻，更游戏化的东西🕹️。

~~And this is how I ended up with this mini game-like app 🎮.~~
这就是本文实现的停车场挑战类似迷你游戏🎮的原因。

~~While building it, my 5 year old daughter 🧒🏻 saw it and wanted to play with it. And she had a lot of fun actually!~~
在建造它时，我 5 岁的女儿 🧒🏻 一看到它就想玩玩看，并且玩得特别开心！

~~Yes, yes, of course! I am not saying that if it was something funny for a 5 year old, it will be for you too 😀.~~
或许这对于成年人来说过于幼稚，但是对于小朋友却刚刚好😀。

~~My only goal was to catch your attention through the game, so that the knowledge 📖 behind it stays longer with you.~~
我希望这个游戏一般的实现方案可以吸引你的注意力，以便你可以更好得记忆它背后的知识📖。

感谢阅读！🙏
