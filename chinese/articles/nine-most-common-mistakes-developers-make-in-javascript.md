> -   原文地址：[The Nine Most Common Mistakes Developers Make in JavaScript (and How to Fix Them) JavaScript 编程中最常见的 9 个错误](https://www.freecodecamp.org/news/nine-most-common-mistakes-developers-make-in-javascript/)
> -   原文作者：Dipto Karmakar
> -   译者：AlexWong258
> -   校对者：

JavaScript 是一种在网页中使用的[脚本语言][1]，它可以增加网页的功能和交互性。对熟悉其他编程语言的编程者来说，JavaScript 很容易理解。跟着一些教程，你应该立刻就能够开始使用它。

然而，很多初学者还是会犯一些常见的错误。为了帮助你成为一个更好的 JS 编程者，在本文中，我们将展示九种常见的错误（或不好的实践）及相应的解决办法。

## 混淆赋值运算符（=）和相等比较运算符（==, ===）

从名字可以看出来，[赋值运算符][2]是用来给变量赋值的。开发者经常会把它和相等比较运算符混淆。

来看一个例子：

```javascript
const name = 'javascript';
if ((name = 'nodejs')) {
    console.log(name);
}
// output - nodejs
```

在这个例子里，它其实并没有比较变量 name 和字符串 'nodejs' ，而是把 'nodejs' 分配给了 name，因此最后打印出来的是 'nodejs'。

在 JavaScript 里，双等号（==）和三个等号（===）都叫作比较运算符。

对上面的代码来说，下面才是比较两个值正确的做法：

```javascript
const name = 'javascript';
if (name == 'nodejs') {
    console.log(name);
}
// no output
// OR
if (name === 'nodejs') {
    console.log(name);
}
// no output
```

这两个比较运算符的区别是：两个等号是**宽松**的比较，三个等号是**严格**的比较。

宽松的比较只比较值，严格比较会同时比较值和数据类型。

下面的代码能解释得更清楚：

```javascript
const number = '1';
console.log(number == 1);
// true
console.log(number === 1);
// false
```

给变量 number 分配一个字符串类型的值 1。如果用双等号去比较它和一个数值类型的 1 的话，会返回 true，因为两个值都是 1。但是如果用三个等号去比较，就会返回 false，因为两个值是不同的数据类型。

## 以为回调函数是同步的

回调函数可以用来处理 JavaScript 的异步操作，但是选用 Promise、async/await 更好，因为多重回调函数会导致[回调地狱][3]。

回调函数不是\***\*同步的\*\***，它是延时操作执行完毕后会被调用的一个函数。

比如全局方法 "setTimeout" ，它第一个参数就是一个回调函数，第二个参数是等待的时间（以毫秒为单位），如下：

```javascript
function callback() {
​​    console.log("I am the first");
​​}
​​setTimeout(callback, 300);
​​console.log("I am the last");
​​// output
​​// I am the last
​​// I am the first
```

300 毫秒之后，回调函数 callback 会被调用。但是在它完成前，剩下的代码会继续往下运行，所以 "I am the last" 会被先打印出来。

开发者常犯的一个错误是误以为回调函数是同步的。比如，他们会把回调函数的返回值用在其他操作上。

例如下面这个错误：

```javascript
function addTwoNumbers() {
​​    let firstNumber = 5;
​​    let secondNumber;
​​    setTimeout(function () {
​​        secondNumber = 10;
​​    }, 200);
​​    console.log(firstNumber + secondNumber);
​​}
​​addTwoNumbers();
​​// NaN
```

会输出 "NaN" ，因为 "secondNumber" 还未被赋值。在 "firstNumber + secondNumber" 被执行的时候，"secondNumber" 还没有被赋值，因为 "setTimeout" 函数要在 "200 毫秒" 后才调用回调函数。

最好的解决办法是把剩下的代码放在回调函数里去执行：

```javascript
function addTwoNumbers() {
​​    let firstNumber = 5;
​​    let secondNumber;
​​    setTimeout(function () {
​​        secondNumber = 10;
​​        console.log(firstNumber + secondNumber);
​​    }, 200);
​​}
​​addTwoNumbers();
​​// 15
```

## 对 "this" 错误的引用

"this" 是 JavaScript 中经常[被误解的一个概念][4]。在 JavaScript 里使用 "this"，你得真正理解它的运行原理，因为它跟在别的语言中的表现稍微有些不同。

下面是一个使用 "this" 时常犯的错误：

```javascript
const obj = {
​​    name: "JavaScript",
​​    printName: function () {
​​        console.log(this.name);
​​    },
​​    printNameIn2Secs: function () {
​​        setTimeout(function () {
​​            console.log(this.name);
​​        }, 2000);
​​    },
​​};
​​obj.printName();
​​// JavaScript
​​obj.printNameIn2Secs();
​​// undefined
```

第一个输出结果是**"JavaScript"**，因为 "this.name" 正确地指向了对象的 name 属性。第二个输出结果是 "**undefined**​"，因为 "this" 已经失去了对对象的属性的引用（包括 name）。

这是因为 "this" 取决于调用了它所在函数的那个对象。每个函数都有一个 "this"，但是它指向哪个对象取决于哪个对象调用了该函数。

"obj.printName()" 里的 "this" 直接指向 "obj"；"obj.printNameIn2Secs​" 里的 "this" 直接指向 "obj"；但是回调函数 "setTimeout" 里的 "this" 不指向任何对象，因为它没被任何对象调用。

如果有对象调用了 "setTimeout"，会执行类似 "obj.setTimeout..." 这样的语句。既然没有任何对象调用那个函数，就会使用默认对象（也就是 "window" ）。

window 里没有 "name"，所以就会导致 "undefined"。

如果想在 setTimeout 函数里把引用保留在 "this" 里，最好的办法是使用 "bind"、"call"、"apply" 或者箭头函数（ES6 中引入）。跟普通的函数不一样，箭头函数不创造它们自己的 "this"。

所以，下面的代码就可以把引用保留在 "this" 里：

```javascript
​​const obj = {
​​    name: "JavaScript",
​​    printName: function () {
​​        console.log(this.name);
​​    },
​​    printNameIn2Secs: function () {
​​        setTimeout(() => {
​​            console.log(this.name);
​​        }, 2000);
​​    },
​​};
​​obj.printName();
​​// JavaScript
​​obj.printNameIn2Secs();
​​// JavaScript
```

## 忽视对象的易变性

跟字符串类型、数值类型等这类简单类型不一样，JavaScript 的对象是引用数据类型。比如，在 key-value 型对象中：

```javascript
const obj1 = {
​​    name: "JavaScript",
​​};
​​const obj2 = obj1;
​​obj2.name = "programming";
​​console.log(obj1.name);
​​// programming
```

"obj1" 和 "obj2" 持有相同的引用，都指向该对象在内存中的存储位置。

在数组中：

```javascript
const arr1 = [2, 3, 4];
​​const arr2 = arr1;
​​arr2[0] = "javascript";
​​console.log(arr1);
​​// ['javascript', 3, 4]
```

开发者常犯的一个错误是他们会忽略 JavaScript 的本质，然后就会导致一些意想不到的错误。比如，如果五个对象持有同一个对象的引用，那么某个对象就可能会在大范围的代码库里干扰到一些属性。

当这种情况发生的时候，任何试图去访问原始属性的操作都会返回 undefined 或者可能会抛出异常。

最好的实践是，当你想要复制对象的时候，永远给新的对象创建新的引用。剩余操作符（"..." ES6 中引入）可以很好地做到这一点。

比如，在 key-value 型对象中：

```javascript
​​const obj1 = {
​​    name: "JavaScript",
​​};
​​const obj2 = { ...obj1 };
​​console.log(obj2);
​​// {name: 'JavaScript' }
​​obj2.name = "programming";
​​console.log(obj.name);
​​// 'JavaScript'
```

在数组中：

```javascript
const arr1 = [2, 3, 4];
​​const arr2 = [...arr1];
​​console.log(arr2);
​​// [2,3,4]
​​arr2[0] = "javascript";
​​console.log(arr1);
​​// [2, 3, 4]
```

## 在浏览器中存储数组和对象

有时候在使用 JavaScript 的时候，开发者可能会想使用 "localStorage" 来方便地存储数据。但一个常见的错误是试图按原样把[数组和对象][5]存到 "localStorage" 里。"localStorage" 只接受字符串。

为了存储对象，JavaScript 会把对象转成字符串。结果就是 object 会变成 "[Object Object]"，数组元素会变成用逗号分隔的字符串。

例如：

```javascript
​​const obj = { name: "JavaScript" };
​​window.localStorage.setItem("test-object", obj);
​​console.log(window.localStorage.getItem("test-object"));
​​// [Object Object]
​​const arr = ["JavaScript", "programming", 45];
​​window.localStorage.setItem("test-array", arr);
​​console.log(window.localStorage.getItem("test-array"));
​​// JavaScript, programming, 45
```

对象被这样存储起来的话，就会很难访问它们。以 object 为例，用 ".name" 的方式去访问 object 就会导致异常。这是因为 "[Object Object]" 已经是一个字符串了，它并没有 "name" 属性。

想要在 localStorage 里存储对象和数组，更好的方式是使用 "JSON.stringify"（用于把对象转换成字符串）和 "JSON.parse"（用于把字符串转换成对象）。这样就可以很容易地访问对象了。

上面的代码正确的版本应该是：

```javascript
​​const obj = { name: "JavaScript" };
​​window.localStorage.setItem("test-object", JSON.stringify(obj));
​​const objInStorage = window.localStorage.getItem("test-object");
​​console.log(JSON.parse(objInStorage));
​​// {name: 'JavaScript'}
​​const arr = ["JavaScript", "programming", 45];
​​window.localStorage.setItem("test-array", JSON.stringify(arr));
​​const arrInStorage = window.localStorage.getItem("test-array");
​​console.log(JSON.parse(arrInStorage));
​​// JavaScript, programming, 45
```

## 不设默认值

给动态变量设置[默认值][6]是一个非常好的实践，可以预防发生意想不到的错误。下面是一个常见错误的例子：

```javascript
function addTwoNumbers(a, b) {
​​    console.log(a + b);
​​}
​​addTwoNumbers();
​​// NaN
```

结果是 "NaN"，因为 a 是未赋值 "undefined"，b 也是未赋值 "undefined"。如果设置了默认值，就可以避免这样的错误。比如：

```javascript
function addTwoNumbers(a, b) {
​​    if (!a) a = 0;
​​    if (!b) b = 0;
​​    console.log(a + b);
​​}
​​addTwoNumbers();
​​// 0
```

或者，可以像下面这样，使用 ES6 中引入的默认值特性：

```javascript
​​function addTwoNumbers(a = 0, b = 0) {
​​    console.log(a + b);
​​}
​​addTwoNumbers();
​​// 0
```

这个例子虽然很小，但是强调了默认值的重要性。另外，当预期的值没有出现时，开发者可以提供错误信息或警告信息。

## 变量命名不够恰当

是的，开发者们还是会犯这种错误。命名很难，但开发者别无选择。恰当的[变量][7]命名和注释一样，都是编程中很好的实践。

例如：

```javascript
function total(discount, p) {
​​    return p * discount
​​}
```

变量 "discount" 可以，但是 "p" 和 "total" 呢？什么的 total（总和）？更好的实践应该是这样的：

```javascript
function totalPrice(discount, price) {
​​    return discount * price
​​}
```

恰当的变量命名很重要，因为这个代码库可能不会只有一个开发者。

恰当的命名变量就可以让其他开发者很容易地理解这个项目的工作原理。

## 检查 boolean 类型的值

```javascript
const isRaining = false
​​if(isRaining) {
​​    console.log('It is raining')
​​} else {
​​    console.log('It is not raining')
​​}
​​// It is not raining
```

像上面的代码这样检查[boolean 类型的值][8]是一种常见的编程习惯。虽然这样是可以的，但是在测试某些值的时候就会出现错误。

在 JavaScript 里，宽松地比较 "0" 和 "false" 的话，会返回 "true"；宽松地比较 "1" 和 "true" 的话，也返回 "true"。也就是说，如果 "isRaining" 是 "1"，"isRaining" 就会是 "true"。

这也是在对象里经常犯的错误。比如：

```javascript
const obj = {
​​    name: 'JavaScript',
​​    number: 0
​​}
​​if(obj.number) {
​​    console.log('number property exists')
​​} else {
​​    console.log('number property does not exist')
​​}
​​// number property does not exist
```

虽然 "number" 属性存在，但 "obj.number" 返回 "0"，也就是返回 "false"，因此 else 代码块会被执行。

所以，除非你很确定会出现的值的范围，不然 boolean 类型的值和对象属性应该这样来检查：

```javascript
if(a === false)...
if(object.hasOwnProperty(property))...
```

## 混淆相加和拼接

JavaScript 中的加号 "(+)" 有两个功能：相加和拼接。也就是数字的相加和字符串的拼接。一些开发者经常会误用这个操作符。

比如：

```javascript
const num1 = 30;
​​const num2 = "20";
​​const num3 = 30;
​​const word1 = "Java"
​​const word2 = "Script"
​​console.log(num1 + num2);
​​// 3020
​​console.log(num1 + num3);
​​// 60
​​console.log(word1 + word2);
​​// JavaScript
​​
```

把字符串和数值相加时，JavaScript 会把数值转换成字符串，然后把值拼接在一起。数值和数值相加时，会进行数学的相加操作。

## 总结

当然，除了上面列出来的这些，还有更多的错误（有些琐碎细微，有些严重）。所以确保你自己跟紧语言最新的发展。

学习和避免这些错误可以帮助你开发出更好的、更可靠的 web 应用和工具。

[1]: https://en.wikipedia.org/wiki/Scripting_language
[2]: https://www.w3resource.com/javascript/operators/assignment-operator.php#:~:text=Assignment%20Operators,value%20of%20its%20right%20operand.&text=That%20is%2C%20a%20%3D%20b%20assigns,shown%20in%20the%20following%20table.
[3]: http://callbackhell.com/
[4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
[5]: https://www.tutorialspoint.com/javascript/javascript_arrays_object.htm
[6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
[7]: https://en.wikipedia.org/wiki/Variable_(computer_science)
[8]: https://www.w3schools.com/js/js_booleans.asp
