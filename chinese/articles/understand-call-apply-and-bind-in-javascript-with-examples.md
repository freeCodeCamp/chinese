> -  原文地址：[How to Use the Call, Apply, and Bind Functions in JavaScript – with Code Examples](https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/)
> -  原文作者：[Keyur Paralkar](https://www.freecodecamp.org/news/author/keyurparalkar/)
> -  译者：Papaya HUANG
> -  校对者：

![How to Use the Call, Apply, and Bind Functions in JavaScript – with Code Examples](https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/Screenshot-2022-06-14-at-8.53.33-PM-1.png)

在本文中，我将通过简单的示例来解释如何在 JavaScript 中使用 call、apply 和 bind。

我们还将使用 apply 函数创建自己的 map 函数。

话不多说，让我们开始吧！

## 目录

-   [前提](#prerequisites)
-   [定义](#definitions)
-   [如何在 JavaScript 中使用 call 函数](#how-to-use-the-call-function-in-javascript)
-   [如何在 JavaScript 中使用 apply 函数](#how-to-use-the-apply-function-in-javascript)
-   [如何在 JavaScript 中使用 bind 函数](#how-to-use-the-bind-function-in-javascript)
-   [如何自定义 map 函数](#how-to-create-your-own-map-function)
-   [总结](#summary)

<h2 id="prerequisites">前提</h2>

想要充分理解本文，你需要先了解以下概念：

-   [函数](https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/)
-   [函数原型](https://www.freecodecamp.org/news/all-you-need-to-know-to-understand-javascripts-prototype-a2bff2d28f03/)
-   [this 关键字](https://chinese.freecodecamp.org/news/what-is-this-in-javascript/)

<h2 id="definitions">定义</h2>

让我们仔细地研究一下这几个函数的作用：

**Call** 函数可以改变函数调用的上下文。直白讲，就是将函数内部`this`值改变成任意你想要的值。

**Apply** 函数和`call`函数类似，唯一的区别在于`apply`允许将数组作为函数参数列表。

**Bind** 函数创建一个稍后执行的函数，这个新函数的执行上下文由 `this` 提供。

让我们先来看看 call、apply 和 bind 函数的例子，然后我们将来创建一个类似 map 的函数。

<h2 id="how-to-use-the-call-function-in-javascript">如何在JavaScript中使用call函数</h2>

`call`函数更改一个函数内部`this`的值，并且将传入的参数作为这个函数的执行参数。

`call`函数的语法如下：

```Javascript

func.call(thisObj, args1, args2, ...)

```

其中：

-   **func** 是通过不同`this`对象调用的函数
-   **thisObj** 是用来替换函数`func`内部 `this`关键字的对象或者值 
-   **args1, args2** args1, args2 是参数，与改变后的`this`对象一起传递给调用的函数。

注意如果在不传入`thisObj`参数的情况下调用函数，JavaScript 默认 this 值为全局对象。

现在我们已经了解了`call`函数的背景，让我们通过一些示例来进一步了解它。

### JS 中如何在不同的上下文调用函数

考虑下面的例子。这个例子中有三个类 – `Car`、`Brand1`和`Brand2`：

```Javascript
function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
	Car.call(this, "convertible", "petrol");
	this.brand = brand;
	console.log(`Car details = `, this);
}

function definePrice(price){
	Car.call(this, "convertible", "diesel");
	this.price = price;
	console.log(`Car details = `, this);
}

const newBrand = new setBrand('Brand1');
const newCarPrice = new definePrice(100000);
```

[](https://www.canva.com/design/DAFD4b369JM/watch?utm_content=DAFD4b369JM&utm_campaign=designshare&utm_medium=embeds&utm_source=link)

仔细看，你会发现我们在两个场景下通过`call`函数调用`Car`函数：一次是在`setBrand`函数调用；一次是在在 `definePrice`函数调用。

在这两个函数中， 我们都在`this`对象内调用`Car`函数，`this`对象分别代表了这两个函数。 例如在`setBrand`函数中，我们在代表函数上下文的`this`对象调用了`Car`函数，`definePrice`一样。

### 在 JS 中如何在不传入参数的情况下调用 call 函数

考虑下面的例子：

```Javascript
const newEntity = (obj) => console.log(obj);

function mountEntity(){
	this.entity = newEntity;
	console.log(`Entity ${this.entity} is mounted on ${this}`);
}

mountEntity.call(); //输出： Entity (obj) => console.log(obj) is mounted on [object Window]
```

在这个例子中，调用`mountEntity`时，`thisObj`参数为空。 这时，JavaScript 会指向全局对象。

<h2 id="how-to-use-the-apply-function-in-javascript">如何在JavaScript中使用apply函数</h2>

`Apply`和`Call`函数类似。`call`和`apply`函数唯一的不同是传入的参数。

在`apply`中，参数可以是一个数组的字面量或者一个新的数组对象。

`apply`函数的语法如下：

```Javascript
func.apply(thisObj, argumentsArray);
```

其中：

-   **func** 是通过不同`this`对象调用的函数
-   **thisObj** 是用来替换函数`func`内部 `this`关键字的对象或者值 
-   **argumentsArray** 可以是参数数组、数组对象或者[arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)关键字本身

如你所见，`apply`函数有不同的语法。

第一种语法很简单，你可以传入一个参数数组：

```Javascript
func.apply(thisObj, [args1, args2, ...]);
```

第二种语法可以传入一个新的数组对象：

```Javascript
func.apply(thisObj, new Array(args1, args2));
```

第三种语法可以传入 arguments 关键字：

```Javascript
func.apply(thisObj, arguments); 
```

[arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)是函数中的一个特殊对象，包含传入函数的参数的值。你可以将这个关键字与`apply`函数一起使用，以接受任何数量的任意参数。

`apply`最棒的地方在于我们不需要关心传递给调用函数的参数的数量。由于动态性和多功能的特点，`apply`可以被应用到复杂情况。

我们用`apply`函数改写上文的例子：

```Javascript
function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
	Car.apply(this, ["convertible", "petrol"]); //使用数组字面量的语法
	this.brand = brand;
	console.log(`Car details = `, this);
}

function definePrice(price){
	Car.apply(this, new Array("convertible", "diesel")); //使用数组构建函数的语法
	this.price = price;
	console.log(`Car details = `, this);
}

const newBrand = new setBrand('Brand1');
const newCarPrice = new definePrice(100000);
```

下面是使用`arguments`关键字的例子：

```Javascript
function addUp(){
		//使用参数捕获任意数量的输入
    const args = Array.from(arguments); 
    this.x = args.reduce((prev, curr) => prev + curr, 0);
    console.log("this.x = ", this.x);
}

function driverFunc(){
    const obj = {
        inps: [1,2,3,4,5,6]
    }
    addUp.apply(obj, obj.inps);
}

driverFunc(); //输出： this.x =  21
```

<h2 id="how-to-use-the-bind-function-in-javascript">如何在JavaScript中使用bind函数</h2>

`bind`函数创建一个函数副本，并改变调用函数内部`this`的值。

`bind`函数的语法如下:

```Javascript
func.bind(thisObj, arg1, arg2, ..., argN);
```

其中：

-   **func** 是通过不同`this`对象调用的函数
-   **thisObj** 是用来替换函数`func`内部`this`关键字的对象或者值 
-   **arg1, arg2……argN** – 和`call`函数类似，你可以传入一个或多个参数

`bind`函数返回一个一个新的函数，在这个函数中包含新的被调用函数内部`this`的值：

```Javascript
func(arg1, arg2);
```

然后函数`func`根据参数被执行

让我们一起来看一看如何在 React 类组件中使用`bind`函数：

```JSX
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
  }
  handleCode() {
    console.log("HANDLE CODE THIS = ", this.state);
  }
  render() {
    return <button onClick={this.handleCode}>Click Me</button>;
  }
}
```

考虑上述 App 组件，有以下几个组成部分：

-   `constructor` 调用类的函数，通过`new`关键字实例化
-   `render` 是执行或渲染 JSX 的函数
-   `handleCode` 是打印组件的类方法

如果我们点击`Click Me`按钮，会得到报错`Cannot read properties of undefined (reading 'state')`。

这为什么会发生？ 🤔🤔

因为`handleCode`是类的方法，所以你可能认为我们可以访问类的状态（state），但是这里存在的问题是：

-   `handleCode`中的`this`并不等同于类中的`this`
-   在类中`this`是一个普通的对象，并且有非静态类方法作为属性， 但是`handleCode`中的`this`指代另一个上下文
-   在这里`this`的值取决于函数被调用的位置，`handleCode`是在`onClick`事件中被调用
-   调用时`handleCode`函数内部的`this`被设置为`undefined` 
-   我们尝试调用 undefined 的`state`属性，就导致了上文的报错

我们可以通过给`handleCode`方法的`this`指定上下文来解决这个问题，`bind`方法就派上用场了：

```JSX
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
   this.handleCode = this.handleCode.bind(this); //绑定this函数
  }
  handleCode() {
    console.log("HANDLE CODE THIS = ", this.state);
  }
  render() {
    return <button onClick={this.handleCode}>Click Me</button>;
  }
}
```

`bind`会创建一个新函数，并且存储`this`在对象中，这个函数包含`handleCode`这个新属性。`Bind`确保类的`this`上下文被应用到 `handleCode`函数的`this`。

<h2 id="how-to-create-your-own-map-function">如何自定义map函数</h2>

在了解所有必要知识之后，让我们来自己创建一个 map 函数，我们先来看看自定义 map 函数需要了解什么：

`map`函数的语法如下：

```Javascript
arr.map(func)
```

其中：

-   **arr**是 map 调用的数组
-   **func** 是数组上每一个元素需要执行的函数

`map`函数的基本功能很简单：

`map`函数遍历数组的每一个元素，并在每一个元素上调用传入的参数。返回值的类型是一个数组，数组的每一个元素都是应用`func`后的结果。

我们已经知道这个函数的要求了，就可以着手创建自己的`map`函数了，以下是新的`map`函数：

```Javascript
function newMap(func){
  let destArr = [];
  const srcArrLen = this.length;
  for(let i = 0; i < srcArrLen; i++){
    destArr.push(func.call(this, this[i]));
  }

  return destArr;
} 
```

让我们来一点一点解释上面的例子：

-   函数接受名为`func`的参数。 这个参数就是需要在数组的每一个元素上调用的函数。
-   代码的其他部分不言自明。我们主要聚焦在 `destArr.push(func.call(this, this[i]));`
-   这行代码做了两件事：
    1\. 将变化推入`destArr`  
    2\. 通过`call`方法执行`func`，`call`方法(如上文解释的那样)会执行`func`方法，并使用`func`方法内部`this`对象的新值。

让我们来看看`newMap`函数是如何执行的。不推荐下面这种给原始数据类型添加新方法的做法，我们这么做仅处于教学目的。

**注:** 不要在你的代码中使用下面的方法，不然会对你的工作造成影响。

```Javascript
Object.defineProperty(Array.prototype, 'newMap', {
  value: newMap
}); 
```

`defineProperty`在`Array.prototype`创建了新的方法。

设定完毕后，我们就可以使用自己的函数了：

```Javascript
const arr = [1,2,3];
const newArr = arr.newMap(item => item + 1);
console.log(newArr); //输出：[2, 3, 4]
```

<h2 id="summary">总结</h2>

本文通过示例展示了 call、apply 和 bind 的用法。

简单概括一下：

-   Call、 apply 和 bind 可以改变调用函数内部`this`关键字的上下文
-   每个例子的调用方式不同 –  `apply`通过一组数组执行，`call`执行结果类似但是参数由逗号隔开
-   在 react 的类组件中，这些方法十分管用

感谢阅读！

你可以在[Twitter](https://twitter.com/keurplkar)、 [GitHub](https://github.com/keyurparalkar)和[LinkedIn](https://www.linkedin.com/in/keyur-paralkar-494415107/)上关注我。
