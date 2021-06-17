> -  原文地址：[The Model View Controller Pattern – MVC Architecture and Frameworks Explained](https://www.freecodecamp.org/news/the-model-view-controller-pattern-mvc-architecture-and-frameworks-explained/)
> -  原文作者：[Rafael D. HernandezRafael D. Hernandez](https://www.freecodecamp.org/news/author/rafaeldavish/)
> -  译者：Humilitas
> -  校对者：

![The Model View Controller Pattern – MVC Architecture and Frameworks Explained](https://www.freecodecamp.org/news/content/images/size/w2000/2021/04/BG.png)

MVC 架构让复杂应用的开发过程变得更易于管理，它允许多个开发者协同开发。

第一次了解 MVC 模式时，我被这些术语吓到了，当我实际运用这些概念时更是如此。

回过头去，理解了 MVC 的含义以及作用，就能更轻松地将它运用于 web 应用的开发。

## 什么是 MVC

MVC，即 model-view-controller，其中每个组件的含义如下：

-   **模型（Model）**：后端，包含了所有数据逻辑
-   **视图（View）**：前端界面或 GUI
-   **控制器（Controller）**：应用的大脑，控制数据如何展示

![](https://www.freecodecamp.org/news/content/images/2021/04/MVC3.png)

MVC 的概念最早由 Trygve Reenskaug 提出，他提出将其作为一种开发桌面应用 GUI 的方式。

如今 MVC 被用于现代 web 应用该开发，因为它增强了应用的灵活性、可维护性和可扩展性。

## 为什么要用 MVC？

五个字：**关注点分离（separation of concerns，缩写为 SoC）**。

MVC 模式有助于将前端和后端代码拆分为独立的组件，这样更便于管理，而且能够更方便的改动其中的某一部分而不会互相影响。

不过说起来容易做起来难，尤其是多个开发者同时更新、修改或调试一个成熟应用时。

## 如何使用 MVC

为了更好地说明 MVC 模式，我引入了一个 web 应用，它展示了这些概念是如何工作的。

我的 Car Clicker 应用是著名的 Cat Clicker 应用的变体。

我的应用主要有以下区别：

1.  没有猫咪，**只有**性能车的图片（对不住了，爱猫人士！）
2.  列出了多种车型
3.  有多个点击计数器
4.  只展示选中的车

![](https://www.freecodecamp.org/news/content/images/2021/04/Screen-Recording-2021-04-11-at-11.31.27.07-PM.gif)

让我们深入了解一下构成 MVC 架构模式的三个组件。

### 模型（数据）

模型的任务是管理数据。不论数据是来自数据库、API 还是 JSON 对象，模型都要负责管理它们。

在 Car Clicker 应用中，模型对象包含一个由 car 对象组成的数组，其中含有这个应用所需的所有信息（数据）。

它还通过一个初始值为 `null` 的变量 `currentCar` 控制当前展示哪个汽车。

```javaScript
const model = {
    currentCar: null,
    cars: [
        {
            clickCount: 0,
            name: 'Coupe Maserati',
            imgSrc: 'img/black-convertible-coupe.jpg',
        },
        {
            clickCount: 0,
            name: 'Camaro SS 1LE',
            imgSrc: 'img/chevrolet-camaro.jpg',
        },
        {
            clickCount: 0,
            name: 'Dodger Charger 1970',
            imgSrc: 'img/dodge-charger.jpg',
        },
        {
            clickCount: 0,
            name: 'Ford Mustang 1966',
            imgSrc: 'img/ford-mustang.jpg',
        },
        {
            clickCount: 0,
            name: '190 SL Roadster 1962',
            imgSrc: 'img/mercedes-benz.jpg',
        },
    ],
};
```

### 视图（UI）

视图决定了用户看到的内容以及交互方式。

Car Clicker 应用有两个视图：`carListView` 和 `CarView`。

每个视图都有两个关键函数，定义其如何初始化及如何渲染。

这些函数决定了用户将会看到的内容以及交互方式。

#### carListView

```js
const carListView = {
    init() {
        // 保存 DOM 元素，方便后续访问
        this.carListElem = document.getElementById('car-list');

        // 渲染视图（使用正确的数据更新 DOM 元素）
        this.render();
    },

    render() {
        let car;
        let elem;
        let i;
        // 从控制器中获取待展示的汽车
        const cars = controller.getCars();

        // 确保渲染前列表是空的
        this.carListElem.innerHTML = '';

        // 遍历 cars 数组
        for(let i = 0; i < cars.length; i++) {
            // 当前遍历到的车
            car = cars[i];

            // 创建一个汽车列表项（<li>）并设置其文本
            elem = document.createElement('li');
            elem.className = 'list-group-item d-flex justify-content-between lh-condensed';
            elem.style.cursor = 'pointer';
            elem.textContent = car.name;
            elem.addEventListener(
                'click',
                (function(carCopy) {
                    return function() {
                        controller.setCurrentCar(carCopy);
                        carView.render();
                    };
                })(car)
            );
            // 最后将其加入列表
            this.carListElem.appendChild(elem);
        }
    },
};
```

#### CarView

```js
const carView = {
    init() {
        // 保存 DOM 元素指针，方便后续访问
        this.carElem = document.getElementById('car');
        this.carNameElem = document.getElementById('car-name');
        this.carImageElem = document.getElementById('car-img');
        this.countElem = document.getElementById('car-count');
        this.elCount = document.getElementById('elCount');


        // 点击时增加当前汽车的计数
        this.carImageElem.addEventListener('click', this.handleClick);

        // 渲染视图（使用正确的数据更新 DOM 元素）
        this.render();
    },

    handleClick() {
    	return controller.incrementCounter();
    },

    render() {
        // 使用当前汽车的数据更新 DOM 元素
        const currentCar = controller.getCurrentCar();
        this.countElem.textContent = currentCar.clickCount;
        this.carNameElem.textContent = currentCar.name;
        this.carImageElem.src = currentCar.imgSrc;
        this.carImageElem.style.cursor = 'pointer';
    },
};
```

### 控制器（大脑）

控制器负责获取数据、修改数据，并为用户提供数据。本质上，控制器就是视图和模型之间的链接。

通过 getter 和 setter 函数，控制器从模型拉取数据并初始化视图。

如果视图要更新后台数据，它会通过 setter 函数来修改数据。

```js
const controller = {
    init() {
        // 将当前展示的车设为列表中的第一辆车
        model.currentCar = model.cars[0];

        // 初始化视图
        carListView.init();
        carView.init();
    },

    getCurrentCar() {
    	return model.currentCar;
    },

    getCars() {
    	return model.cars;
    },

    // 把“当前选中汽车”设为传入的对象
    setCurrentCar(car) {
    	model.currentCar = car;
    },

    // 增加当前选中汽车的计数
    incrementCounter() {
        model.currentCar.clickCount++;
        carView.render();
    },
};

// Let's goooo!
controller.init();
```

## MVC 框架

JavaScript 越来越受欢迎，近年来还接管了后端。越来越多成熟的 JavaScript 应用选择了 MVC 架构模式。

框架来来去去，但是 MVC 架构模式的概念是不变的。

运用了这些概念的早期框架包括：**KnockoutJS**、**Django**、**Ruby on Rails**。

## 总结

MVC 模式最吸引人的概念是关注点分离。

现代 web 应用非常复杂，有时做一些修改会令人很头疼。

将前端和后端作为独立的小组件来管理，可以使应用更灵活、更易于维护和扩展。

_\*\*如果你想了解这个 Car Clicker 应用，可以查看[源码](https://github.com/RafaelDavisH/car-clicker/blob/main/README.md)或体验[在线版本](https://rafaeldavish.github.io/car-clicker/)。\*\*_

🌟感谢你的阅读！🌟