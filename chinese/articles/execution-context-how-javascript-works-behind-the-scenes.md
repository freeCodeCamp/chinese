> -  原文地址：[JavaScript Execution Context – How JS Works Behind The Scenes](https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/)
> -  原文作者：[Victor Ikechukwu](https://www.freecodecamp.org/news/author/victor-ikechukwu/)
> -  译者：Papaya HUANG
> -  校对者：

![JavaScript Execution Context – How JS Works Behind The Scenes](https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/header.png)

所有 JavaScript 代码都需要在某种环境中托管运行。在大多数情况下，网络浏览器就是这个环境。

当一段 JavaScript 代码在网络浏览器中执行时，幕后发生很多事情。 在这篇文章中，我们将对运行在浏览器的 JavaScript 代码的幕后一探究竟。

在深入研究前，需要先了解一些概念，因为这些概念会在后文反复提及。

-   ****编译器****： 编译器或语法编译器是一个能够逐行读取代码的程序。它了解代码如何匹配编程语言所定义的语法，以及代码应该做什么。
-   ****JavaScript 引擎****: JavaScript 引擎是一个计算机程序，它接收 JavaScript 源代码并将其编译成 CPU 可以理解的二进制指令（机器码）。JavaScript 引擎通常是由浏览器供应商开发的，每一个主流浏览器都有一个自己开发的引擎。如：谷歌 Chrome 浏览器的 [V8 引擎](https://v8.dev/)，Firefox 的[SpiderMonkey](https://firefox-source-docs.mozilla.org/js/index.html)和 IE 的[Chakra](https://en.wikipedia.org/wiki/Chakra_(JScript_engine))。
-   ****函数声明****: 指的是被命名的函数。

```javascript
function doSomething() { //"doSomething" 为函数名
statements; 
} 
```

-   ****函数表达式****: 指的是匿名函数，即没有函数名称的函数，如： `js function () { statements }`。 通常在表达式中使用，如把变量赋值为一个函数。`let someValue = function () { statements }`.

概念解释完毕，让我们开始深入研究吧！

## **JavaScript 是如何被执行的**

你或许不知道，浏览器并不理解我们在应用中编写的高级 JavaScript 代码。代码需要被转换成浏览器和计算机能够理解的格式——机器码。

浏览器在读取 HTML 时，如果遇到了`<script>` 标签或包含 JavaScript 代码的属性如`onClick`，会发送给 JavaScript 引擎。

浏览器的 JavaScript 引擎会创造一个特殊的环境来处理这些 JavaScript 代码的转换和执行。这个特殊的环境被称为****`执行上下文`****。

执行上下文包含当前正在运行的代码和有助于其执行的所有内容。

在执行上下文运行期间，编译器解析代码，内存存储变量和函数，可执行的字节码生成后，代码执行。

JavaScript 中有两种执行上下文：

-  全局执行上下文(GEC)
-  函数执行上下文(FEC)

让我分别一探究竟。

### **全局执行上下文(GEC)**

每当 JavaScript 引擎接收到脚本文件时，它首先会创建一个默认的执行上下文，称为 ****`全局执行上下文 (GEC)`****。

GEC 是基础/默认的执行上下文，所有 ****不在函数内部的 JavaScript 代码****都在这里执行。

> 每一个 JavaScript 文件只能有一个 GEC。

### **函数执行上下文(FEC)**

每当函数被调用时，JavaScript 引擎就会在 GEC 内部创建另一种执行上下文，称为函数执行上下文（FEC），并在 FEC 中评估和执行函数中的代码。

因为每个函数调用都创建自己的 FEC，所以在脚本运行期间会有多个 FEC。

## **执行上下文是如何被创建的？**

我们已经了解了什么是执行上下文以及不同种类的执行上下文，现在让我们来看看执行上下文是如何被创建的。

执行上下文（GEC 或 FEC）的创建分为两个阶段：

1.  创建阶段
2.  执行阶段

### 创建阶段

在创建阶段，执行上下文首先与执行上下文对象（ECO）相关联。执行上下文对象存储了许多重要的数据，执行上下文中的代码在运行时会使用这些数据。

创建阶段分三个步骤来定义和设置执行上下文对象的属性：

1.  创建变量对象(VO)
2.  创建作用域链
3.  设置 `this`关键字的值

我们来具体聊聊每一个步骤。

### **创建阶段：创建变量对象(VO)**

变量对象（VO）是一个在执行上下文中创建的类似于对象的容器，存储执行上下文中变量和函数声明。

在 GEC 中，每当使用`var`关键字声明变量，VO 就会添加一个指向该变量的属性，并将值设置为"undefined"。

同时，每当函数声明时，VO 就会添加一个指向该函数的属性，并将这个属性存储在内存中。这就意味着在开始运行代码之前，所有函数声明就已经存储在 VO 中，并可以在 VO 中访问。

但在 FEC 中并不创建 VO，而是生成一个类数组对象，称为 arguments 对象，包含传入函数的所有参数。想要进一步了解 arguments 对象，可以[参见此处](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)。

这种将变量和函数声明存储在内存中优先于执行代码的过程被称为 ****提升****。因为这个概念特别重要，所以我先简单介绍一下这个概念。

### **JavaScript 中的提升**

函数和变量在 JavaScript 中被提升，指的是它们被存储在当前执行上下文 VO 的内存中，并且在代码开始执行之前就可以在执行上下文中访问。

#### **函数提升**

在构建应用的大多数情况下，开发者选择在脚本顶部定义函数，之后再调用，如下图：

![Defining function before calling it](https://draftin.com/images/79494?token=YN6tf3hHdryoQ_-X21KVPtEXGRBz_Dw9OUxqdrAVt_pWiFUsGRMMBx6D_h1K0HfC3qRXzO-26ehoAggF_3iI2zI)

归功于提升，反过来操作也奏效。可以先调用函数，再定义这个被调用的函数。

![calling function before defining it](https://draftin.com/images/79495?token=cnn01YgRW9kx9QJJexa7sI5TfUlszgBJ_lWdA6pVGx5ycLBimXDDTbehVxQJk4yXyIMRljImSJr3Qb7k4JjTrMo)

在上述代码中， `getAge` 函数将被存储在 VO 的内存中，所以可以在定义前被访问。

#### **变量提升**

由`var`关键字声明的变量会作为属性存储在当前执行上下文 VO 中，值被设置为`undefined`。也就是说和函数不同，想要在变量声明访问变量值会得到`undefined`。

![ Accessing variables  before defining them](https://draftin.com/images/79496?token=SQT13ymrPtfOLR-kvvjLVwSEyN9Fq7G-4iy88QROSjz-YOYgphDdKCRYZkpvt8mfJ-eHWLU3igHOZnv9sYcffIE)

#### **提升的基本原则**

提升只对函数声明有效，函数表达式并不能被提升。下面是一个函数表达式的例子，代码执行会中断：

```javascript
getAge(1990); 
var getAge = function (yearOfBirth) {
console.log(new Date().getFullYear - yearOfBirth) 
};
```

代码执行被中断的原因是，如果使用函数表达式，`getAge`会被当作变量而非函数。由于变量提升，变量的值被设置为`undefined`。所以我们会得到以下报错：

![getAge error](https://draftin.com/images/79503?token=R_gK6Xb3UAcAOlqSdk2-nn8wH6DhoDlBv-HW5ZujAhResANORl1BvYoauNh_HTOcD3VFaGTM09uEUUVXeW6y9pk)

 同样的，变量提升也不适用于由`let`或者`const`关键字声明的变量。尝试在声明前访问`let`和`const`关键字声明的变量，会得到`ReferenceError`报错。

这种情况下变量会被提升，但是没有被设置为默认值 `undefined`。 `js console.log(name); let name = "Victor";` 会报错:

![name not defined error](https://draftin.com/images/79502?token=lgEf4T8VWKK6Tw7BS7s0TU86ZcnqfkOr7rIloCV2uxj0K4OsnFphlFWgMqm98LBmt88uE_CpjXn-D4TFnwdZdcY)

### **创建阶段：创建作用域链**

创建完变量对象（VO），紧接着就是执行上下文的创建阶段的下一步——创建作用域链。

JavaScript 中的作用域链是一个机制，决定了一段代码对于代码库中其他一些代码来说的可访问性。作用域回答这样一些问题：一段代码可以在哪里访问？哪里不能访问？代码哪些部分可以被访问，哪些部分不能？

每一个函数执行上下文都会创建一个作用域：作用域相当于是一个空间/环境，变量和函数定义在这个空间里，并且可以通过一个叫做作用域查找的过程访问。

也就是说代码被写入代码库的位置，就是这段代码被读取的位置。

如果函数被定义在另一个函数内部，处在内部的函数可以访问自己内部的代码以及外部函数（父函数）的代码。这种行为被称作****词法作用域查找****。

但外部函数并不能访问内部函数的代码。

作用域的概念就引出了 JavaScript 另一个相关的现象——闭包。闭包指的是内部函数永远可以访问外部函数中的代码，即便外部函数已经执行完毕。想要了解更多闭包相关的信息，你可以点击[这里](https://www.freecodecamp.org/news/scope-and-closures-in-javascript/)。

我们来看几个例子加深理解：

![first-scope.png](https://www.freecodecamp.org/news/content/images/2022/02/first-scope.png)

-   右边是全局作用域，一旦`.js`文件加载就会创建这个默认作用域，整个代码中所有函数都可以访问。
-   红色方框里的是`first`函数的作用域，在这里定义了变量`b='Hello!'`和`second`函数。

![second-scope](https://www.freecodecamp.org/news/content/images/2022/02/second-scope.png)

-   绿色方框里的是`second`函数的作用域，这里有一个`console.log`语句，用于打印`a`,`b`和`c`。

除了变量`c`，变量`a`和`b`并不是在`second`函数中定义的。但因为词法作用域查找，`second`函数可以访问父作用域中的变量。

在执行这段代码的时候，JS 引擎在`second`函数作用域中找不到变量`b`，所以它会向上查找其父作用域，从`first`函数开始，在这里它找到变量`b ='Hello!'`，于是就回到`second`函数并解析变量`b`。

变量`a`的处理也是一样。JS 引擎一直向上查找父作用域直至 GEC 作用域，并在`second`函数中解析`a`的值。

JavaScript 引擎一路向上遍历执行上下文直至解析处在函数内部触发的变量和函数的概念就叫做 ****作用域链****。

![Scope chain](https://www.freecodecamp.org/news/content/images/2022/02/scope-chain.png)

仅当 JS 引擎无法在作用域链中解析变量，才会停止并报错。

但反向查找并不奏效，也就是说全局作用域永远无法访问函数内部的变量，除非这些变量被函数`返回`。

作用域链就好像一个单向玻璃，你可以从内部看到外面，但是外面的人却看不见你。

这也就是为什么在图片中大红色的箭头是指向上方的，作用域链是单向度的。

### 创建阶段：设置 this 关键字的值

作用域查找之后就是创建阶段的最后一步是设置`this`关键字的值。

JavaScript 中`this`关键字指的是执行上下文所属的作用域。

一旦作用域链被创建，JS 引擎就会初始化`this`关键字的值。

##### **全局上下文中的`"this"`值**

在 GEC（所有函数和对象之外）中，`this`指向全局对象——`window`对象。

同时，由`var`关键字初始化的函数声明和变量会被作为全局对象（`window`对象）的方法或者属性。

这就意味着，在任何函数外声明的变量和函数，如下：

```javascript
var occupation = "Frontend Developer"; 

function addOne(x) { 
    console.log(x + 1) 
}
```

都可以写作：

```javascript
window.occupation = "Frontend Developer"; 
window.addOne = (x) => { 
console.log(x + 1)
};
```

在 GEC 中的函数和变量会被当作 window 对象的方法和属性，所以下面的代码片段的返回值为真：

![Prove that variables are attached as properties to the global object](https://draftin.com/images/79543?token=ck__e2qKafuzGqTisEhH0ocoJ6NI-CbQZK_gcjDeCBbCSG2ILtYtoL8aalLkryglnMlXo0Ie7HUv0qdymARfpfk)

##### **函数中的`"this"`**

在 FEC 中，并没有创建`this`对象，而是能够访问`this`被定义的环境。

下面的例子中，定义环境为`window`对象，因为函数被定义在 GEC 中：

```Javascript
var msg = "I will rule the world!"; 

function printMsg() { 
    console.log(this.msg); 
} 

printMsg(); // logs "I will rule the world!" to the console.
```

在对象中，`this`关键字并不指向 GEC，而是指向对象本身。引用对象中的`this`如同引用：

`对象.定义在对象内部的属性或方法;`

考虑下面的代码：

```js
var msg = "I will rule the world!"; 
const Victor = {
    msg: "Victor will rule the world!", 
    printMsg() { console.log(this.msg) }, 
}; 

Victor.printMsg(); // logs "Victor will rule the world!" to the console.
```

控制台打印出`"Victor will rule the world!"`而非`"I will rule the world!"`。因为在这个例子中，函数可以访问的`this`关键字的值是定义其的对象，而不是全局对象。

`this`关键字的值设置后，执行上下文对象的所有属性就定义完成，创建阶段结束，JS 引擎就进入到执行阶段。

### **执行阶段**

执行上下文创建阶段之后就是执行阶段了，在这一阶段代码执行真正开始。

到目前为止，VO 包含的变量值为`undefined`，如果这时就运行代码，肯定会报错，我们无法执行未定义的变量。

在执行阶段，JavaScript 引擎会再次读取执行上下文，并用变量的实际值更新 VO。编译器再把代码编译为计算机可执行的字节码后执行。

## **JavaScript 执行栈**

执行栈又称 ****调用栈****，记录了脚本整个生命周期中生成的执行上下文。

JavaScript 是单线程语言，也就是说它只能在同一时间执行一项任务。因此，其他的操作、函数和事件发生时，执行上下文也会被创建。由于单线程的特性，一个堆叠了执行上下文的栈就会被创建，称为`执行栈`。

当浏览器加载脚本，JS 引擎从全局上下文也就是默认上下文开始执行代码，所以全局上下文被放在执行栈的最底部。

然后 JS 引擎再搜索代码中被调用的函数。每一次函数被调用，一个新的 FEC 就会被创建，并被放置在当前执行上下文的上方。

执行栈最顶部的执行上下文会成为活跃执行上下文，并且始终是 JS 引擎优先执行。

一旦活跃执行上下文中的代码被执行完毕，JS 引擎就会从执行栈中弹出这个执行上下文，紧接着执行下一个执行上下文，以此类推。

为了了解执行栈的工作流，请考虑下面的代码：

```javascript
var name = "Victor";

function first() {
  var a = "Hi!";
  second();
  console.log(`${a} ${name}`);
}

function second() {
  var b = "Hey!";
  third();
  console.log(`${b} ${name}`);
}

function third() {
  var c = "Hello!";
  console.log(`${c} ${name}`);
}

first();
```

首先，JS 引擎加载脚本。

然后，JS 引擎创建 GEC，并把其放置在执行栈的最底部。

![Global Context](https://draftin.com/images/79466?token=aeIwtXG5K8Jo2fFYn2kF-DFfHG42sGgVbk0oXjMoTKGsM5JMUIWRxwmyTT1rPWGfEawiy4AuWFTXGo0z88EeKpI)

`name`变量在所有函数外部定义，所以位于 GEC，并且被 VO 存储。

同样的步骤也发生在`first`、`second`和`third`函数。

别被 GEC 中的函数迷惑了。记住，GEC 只适用于 ****不在任何函数内部****的 JavaScript 代码（变量和函数）。因为它们没有被定义在任何函数内部，而是定义在 GEC 中。是不是清晰很多😃?

当 JS 引擎遇到`first`函数调用时，一个新的 FEC 被创建。新的执行上下文被放置在当前上下文上方，形成`执行栈`。

![Execution Context 1](https://draftin.com/images/79467?token=xQ-BHEbdDUELy8Fdc-1EEtTCotEz9XUa97k2kd30mqkkaUi3FpTcZCldH5LonsEICY2SO0OajgQ_4S97GgPlo-A)

在`first`函数调用时，其执行上下文变成活跃执行上下文，JavaScript 首先执行。

在`first`函数中的变量`a ='Hi!'`被存储在其 FEC 中，而非 GEC 中。

接着，`second`函数在`first`函数中被调用。

由于 JavaScript 单线程的特性，`first`函数的执行会被暂停，直到`second`函数执行完闭，才会继续执行。

同样的，JS 引擎会给`second`函数设置一个新的 FEC，并把它放置在栈顶端，并激活。

![Execution Context 2](https://draftin.com/images/79468?token=IcUBwl6WR9ylJlmuVT2DzLt9OgBG1ipHTb7zepJ_kH7Y7HG4mIBCLEtZYvrqphzokDVFGMC5hiVxwcSQhbEeIpk)

`second`函数成为活跃执行上下文，变量`b = 'Hey!'`被存储在其 FEC 中，之后在`second`函数中的`third`函数被调用，其 FEC 被创建并放置在执行栈的顶部。

![Execution Context 3](https://www.freecodecamp.org/news/content/images/2022/02/Execution-Context-3.png)

在`third`函数中的变量`c = 'Hello!'`被存储在其 FEC 中，`Hello! Victor`在控制台中打印。

因为函数执行了所有任务，并且`返回`, 其 FEC 就从栈顶端弹出，而调用`third`函数的`second`函数重新成为活跃执行上下文。

![Execution Context 2](https://draftin.com/images/79468?token=IcUBwl6WR9ylJlmuVT2DzLt9OgBG1ipHTb7zepJ_kH7Y7HG4mIBCLEtZYvrqphzokDVFGMC5hiVxwcSQhbEeIpk)

回到`second`函数，控制台打印`Hey! Victor`。函数完成所有任务，`返回`，这个执行上下文从执行栈上弹出。

![Execution Context 1](https://draftin.com/images/79467?token=xQ-BHEbdDUELy8Fdc-1EEtTCotEz9XUa97k2kd30mqkkaUi3FpTcZCldH5LonsEICY2SO0OajgQ_4S97GgPlo-A)

当`first`函数执行完毕，从执行栈上弹出后，控制流回到代码的 GEC。

![Global Context](https://draftin.com/images/79466?token=aeIwtXG5K8Jo2fFYn2kF-DFfHG42sGgVbk0oXjMoTKGsM5JMUIWRxwmyTT1rPWGfEawiy4AuWFTXGo0z88EeKpI)

最终，所有代码执行完毕，JS 引擎把 GEC 从执行栈上弹出。

## **全局执行上下文对比函数执行上下文**

让我们来用表格总结一下 GEC 和 FEC 的关键点。

| 全局执行上下文 | 函数执行上下文 |
| --- | --- |
| 创建一个全局变量对象存储函数和变量声明。 | 并不创建全局变量对象。相反，创建 arguments 对象存储所有传入函数的参数。|
| 创建 \`this\` 对象将全局作用域中所有变量和函数作为属性和方法存储。 | 不创建\`this\` 对象， 但可以访问被定义的环境，通常情况下为 \`window\` 对象。 |
| 不可以访问函数上下文中的代码 | 通过作用域查找，可以访问上下文以及父上下文中的代码（变量和函数）。|
| 设定全局变量和函数的存储空间 | 仅设定函数内部变量和函数的存储空间 |

## **总结**

JavaScript 执行上下文是正确理解其他基础概念的核心。

代码得以运行归功于 Js 引擎处理执行上下文（GEC 和 FEC）以及调用栈。

希望通过这篇文章，你已经更了解你编写的函数和代码是按照什么顺序运行的，以及 JS 引擎是如何处理这些代码的。

理解下面这些概念，会帮助你成为一个更好的开发者：

-   熟悉一门语言的输入和输出。
-   大致理解一门语言的内在/核心概念。
-   如何编写简洁、易维护和结构清晰的代码，降低 bug 的风险。


希望这篇文章对你有帮助。欢迎转发这篇文章。欢迎在 [Twitter](https://twitter.com/Victor_codejs)上关注我和我互动。 我的[博客](https://vickyikechukwu.hashnode.dev/) 上也有一些免费的教学文章和资源。你的反馈将激励我贡献更多！

感谢阅读，编码快乐！
