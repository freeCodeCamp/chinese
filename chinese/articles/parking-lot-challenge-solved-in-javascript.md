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

~~Here is where the fun starts. 🕺~~
有趣的部分快开始啦🕺。

~~We are going to create an interactive app, visualizing the tasks which we can perform with the help of our implementation above.~~
我们将创建一个可交互的 app，将我们已实现的代码停车场可视化。

~~Our app will provide basic UI controls allowing an (imaginary) operator to work with the parking lot software_._ And in order to make their work a bit more pleasing to the eye, we will try to animate the basic functions our software provides.~~
我们的 app 将提供基本的 UI 控件，允许（假想的）操作员使用停车场软件。为了使视觉效果更令人赏心悦目，我们将尝试为 app 的基本功能设置动画。

一起来看看，是如何实现的吧！📺

## Demo

~~Here is the live demo for those of you who doesn’t care about the details and just want to ‘taste’ it: 🥪~~
点击下方的在线 demo 链接，提前尝鲜体验吧：🥪

[

Parking Lot Software Inc.

![favicon.4c2cf568](https://parking-lot-chi.vercel.app/assets/favicon.4c2cf568.svg)



](https://parking-lot-chi.vercel.app/)

Parking Lot Inc. app

## 项目源码

~~Here is the [repo](https://github.com/mihailgaberov/parking-lot) with the app's source code.~~
这里是停车场 app 的[代码仓库](https://github.com/mihailgaberov/parking-lot)。

~~Let me give you a brief summary on the _what_ and the _why_.~~
让我来简要介绍一下技术选项的 _what_ 和 _why_。

~~The app is built with [vite](https://vitejs.dev/). The reason for this is that I've been playing around recently with it and I am really happy with the speed and the performance it provides.~~
这个 app 是使用 [vite](https://vitejs.dev/) 构建的，因为我最近一直在体验它，并且对于它的速度和性能都十分满意。 

~~No matter that it’s still in the relatively early stages of development – if I am about to start a new project and am in a position to choose, I will go with **vite**.~~
尽管 **vite** 还处于开发阶段，但如果我要开始开发一个新项目，并且可以选择构建工具的话，我会选择**vite**。

~~This is not to say I have anything against its big brother [CRA](https://create-react-app.dev/). On the contrary, I have built multiple apps with it and I am still using it in some of my projects. It’s just that **vite** is much faster and often gives me everything I currently need.~~
这并不是说我反对它的老大哥 [CRA](https://create-react-app.dev/)。 相反，我已经用 creact react app 搭建了很多 app，并且我仍在我的一些项目中使用它。 这是因为 **vite** 更快，更符合我当前的诉求。

~~💡Just keep in mind that selecting a given technology always depends on your specific needs for a specific project. That is to say that there is no silver bullet. It’s always a matter of requirements and priorities.~~
💡请记住，对于项目的技术选型应该取决于特定项目的特定需求。毕竟，软件开发不存在银弹，优先级和需求对于技术选型更为重要。

## React App 项目结构

![image-93](https://www.freecodecamp.org/news/content/images/2022/06/image-93.png)

App 项目结构

~~The app's structure is straightforward. At the root level we have two folders – _assets_ and _src_. The first contains the assets used in the app (in this case it’s just a car image). The later contains all the files with the source code.~~
停车场 app 的代码结构十分简洁。可以看到，在根目录，我们有两个文件夹 - _assets_ 和 _src_。  _assets_ 文件夹包含了 app 使用的静态资源（在本例中，它是一张汽车图像）。 _src_ 则包含了 app 的源码文件。

~~Let’s take a closer look inside the source folder.~~
让我们更深入地看看 _src_ 文件夹吧。

~~Here we have the following folders:~~
在 _src_ 内部，有下列文件夹：

-   ~~[components](https://github.com/mihailgaberov/parking-lot/tree/main/src/components) – contains all React components used in the app~~
-   [components](https://github.com/mihailgaberov/parking-lot/tree/main/src/components) - 包含 app 中使用的所有 React 组件源码
-   ~~[lib](https://github.com/mihailgaberov/parking-lot/tree/main/src/lib) – contains the parking lot class, responsible for the main logic of the app~·
-   [lib](https://github.com/mihailgaberov/parking-lot/tree/main/src/lib) - 包含停车场类，负责 app 的主要逻辑
-   ~~[pages](https://github.com/mihailgaberov/parking-lot/tree/main/src/pages) – contains two sub-directories, for the two main screens in the app – Landing and Main, respectively~~
-   [pages](https://github.com/mihailgaberov/parking-lot/tree/main/src/pages) – 包含两个子目录，分别用于 app 的两个页面 – Landing 页面和 Main 页面
-   ~~[utils](https://github.com/mihailgaberov/parking-lot/tree/main/src/utils) – contains a helper method for generating fictitious car license plates that we use later when representing a parking slot as _busy_~~
-   [utils](https://github.com/mihailgaberov/parking-lot/tree/main/src/utils) - 包含一个辅助方法，用于生成将停车位表示为 _busy_ 时使用的虚构汽车牌照
-   ~~And several files, most of them are related to the entry point of the app, except the favicon ones – their role should be clear to you. If not, take a look at the tab of your browser 😉~~
-   还有几个文件，其中大部分都与应用程序的入口程序有关。favicon 文件除外，它的作用你应该有所接触，如果之前没有接触过，那么你可以在浏览器的选项卡上看到它😉

![image-94](https://www.freecodecamp.org/news/content/images/2022/06/image-94.png)

带有 favicon 的浏览器选项卡

## App 页面

As mentioned earlier, the main pages (also called screens) in the app are called [Landing](https://github.com/mihailgaberov/parking-lot/tree/main/src/pages/Landing) and [Main](https://github.com/mihailgaberov/parking-lot/tree/main/src/pages/Main). These are React components themselves. They serve as skeletons for everything you see in the welcome page – where you land initially and where you can select how many parking slots you want to have in your parking lot.
如前所述，app 的主页面（main pages，也称为 mian screens）称为[Landing页面]（https://github.com/mihailgaberov/parking-lot/tree/main/src/pages/Landing）和[Main页面]（ https://github.com/mihailgaberov/parking-lot/tree/main/src/pages/Main）。 这些页面由 React 组件构成，它们是欢迎页面所有内容的骨架。在欢迎页中，你可以选择选择最初的登录位置，并且选择停车场的车位数量。

![image-95](https://www.freecodecamp.org/news/content/images/2022/06/image-95.png)

欢迎页

~~And the page you go to after clicking the big, ping submit button - the main screen where your operator is able to manage the parking lot.~~
再点击欢迎页的 submit 按钮后，你会跳转到主页面。在主页面，你可以作为操作者对停车场进行管理。

![image-96](https://www.freecodecamp.org/news/content/images/2022/06/image-96.png)

主页

## **App 的功能性**

~~The app provides very basic functionality for managing an imaginary parking lot. When the user select how many slots they want (max 20), they'll be transitioned to the main screen. There, the user will be able to see all free parking slots.~~
停车场 app 提供了最基础的停车场管理功能。当用户选择了他们想要的车位数量（最多可选择 20 个车位）后，用户将回到主页面，并可以看到所有的空闲停车位。

~~When a car is parked, via the PARK! button, the relevant spot will be visualised as busy and will show the registration number of the car being parked there. The operator can un-park cars by clicking on a busy slot, that is on the car they want to “remove” from the parking lot.~~
用户可以通过 PARK! 按钮停放车辆，对应车位将在车辆停泊后显示为繁忙状态并且展示对应车辆的登记号码。操作者可以通过点击繁忙状态的车位来取消车位的停放车辆，即移除停放车辆。

~~## 💡The simple animation of the moving red car is just for visual effect and doesn’t have any real influence on the way the parking lot works.~~
## 💡红色汽车移动的简单动画只是为了视觉效果，对停车场的运作方式没有任何实际影响。

~~I used [CSS modules](https://github.com/css-modules/css-modules) for styling the app. I also tried to make the app a bit mobile friendly, in case you decide to try it on your mobile device.~~
我使用 [CSS modules](https://github.com/css-modules/css-modules) 为 app 设置样式。 为了让移动设备的体验更好，我还优化了移动端的样式。

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
