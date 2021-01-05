> * 原文地址：[What is Metaprogramming in JavaScript? In English, please. 什么是 JavaScript 元编程](https://www.freecodecamp.org/news/what-is-metaprogramming-in-javascript-in-english-please/)
> * 原文作者：TAPAS ADHIKARY
> * 译者：Humilitas
> * 校对者：

![What is Metaprogramming in JavaScript? In English, please.](https://www.freecodecamp.org/news/content/images/size/w2000/2020/11/cover_freeCodeCamp.png)

JavaScript 有许多开发者熟知的有用特性，同时也有一些鲜为人知的特性能够帮助我们解决棘手问题。

很多人可能不太了解 JavaScript 元编程的概念，本文会介绍元编程的知识和它的作用。

ES6（ECMAScript 2015）新增了对 `Reflect` 和 `Proxy` 对象的支持，使得我们能够便捷地进行元编程。让我们通过示例来学习它们的用法。

# 什么是元编程？

`元编程` 无异于 _编程中的魔法_！如果编写一个“能够读取、修改、分析、甚至生成新程序”的程序将会如何？是不是听起来很神奇、很强大？

![](https://lh5.googleusercontent.com/elwIjsjlSeV2c9VBF07ZDHmurJ5_NdeIJ0bDOSNpNai644OhE90gDbGlyOnL4xea5D7S6s9M17V3w4h3zgpr8Q9sn3Ke8BuzPJySs4JI6J0v0jvgX6eSdalnFdULzTWh85IjQMFGjYX-ymmAOA)

元编程很神奇。

维基百科这样描述元编程：

> `元编程` 是一种编程技术，编写出来的计算机程序能够将其他程序作为数据来处理。意味着可以编写出这样的程序：它能够读取、生成、分析或者转换其它程序，甚至在运行时修改程序自身。

简而言之，元编程能够写出这样的代码：

-   可以生成代码
-   可以在运行时修改语言结构。这种现象被称为 `反射编程` 或 `反射`。

## 什么是反射？

`反射` 是元编程的一个分支。反射又有三个子分支：

1.  **自省（Introspection）**：代码能够自我检查、访问内部属性，我们可以据此获得代码的底层信息。
2.  **自我修改**：顾名思义，代码可以修改自身。
3.  **调解（Intercession）**：字面意思是“代他人行事”。在元编程中，调解的概念类似于包装（wrapping）、捕获（trapping）、拦截（intercepting）。

ES6 为我们提供了 `Reflect` 对象（Reflect API）来实现 `自省`，还提供了 `Proxy` 对象帮助我们实现 `调解`。我们要尽力避免 `自我修改`，所以不会过多谈及。

需要说明的是，元编程并不是由 ES6 引入的，JavaScript 语言从一开始就支持元编程，ES6 只是让它变得更易于使用。

## ES6 之前的元编程

还记得 `eval` 吗？看看它的用法：

```js
const blog = {
    name: 'freeCodeCamp'
}
console.log('Before eval:', blog);

const key = 'author';
const value = 'Tapas';
testEval = () => eval(`blog.${key} = '${value}'`);

// Call the function
testEval();

console.log('After eval magic:', blog);
```

`eval` 生成了额外的代码。示例代码执行时为 `blog` 对象增加了一个 `author` 属性.

```shell
Before eval: {name: freeCodeCamp}
After eval magic: {name: "freeCodeCamp", author: "Tapas"}
```

### 自省

在 ES6 引入 `Reflect 对象` 之前，我们也可以实现自省。下面是读取程序结构的示例：
```js
var users = {
    'Tom': 32,
    'Bill': 50,
    'Sam': 65
};

Object.keys(users).forEach(name => {
    const age = users[name];
    console.log(`User ${name} is ${age} years old!`);
});
```

我们读取了 `users` 对象的结构并以键值对的形式打印出来。
```shell
User Tom is 32 years old!
User Bill is 50 years old!
User Sam is 65 years old!
```

### 自我修改

以一个包含修改其自身的方法的 `blog` 对象为例：

```js
var blog = {
    name: 'freeCodeCamp',
    modifySelf: function(key, value) {blog[key] = value}
}
```

`blog` 对象可以这样来修改自身：

```js
blog.modifySelf('author', 'Tapas');
```

### 调解（Intercession）

元编程中的 `调解` 指的是改变其它对象的语义。在 ES6 之前，可以用 `Object.defineProperty()` 方法来改变对象的语义：

```js
var sun = {};
Object.defineProperty(sun, 'rises', {
    value: true,
    configurable: false,
    writable: false,
    enumerable: false
});

console.log('sun rises', sun.rises);
sun.rises = false;
console.log('sun rises', sun.rises);
```

输出：

```shell
sun rises true
sun rises true
```

如你所见，我们创建了一个普通对象 `sun`，之后改变了它的语义：为其定义了一个不可写的 `rises` 属性。

现在，我们深入了解一下 `Reflect` 和 `Proxy` 对象以及它们的用法。

# Reflect API

在 ES6 中，Reflect 是一个新的 `全局对象`（像 math 一样），它提供了一些工具函数，其中一些函数与 `Object` 或 `Function` 对象中的同名方法功能是相同的。

这些都是自省方法，可以用它们在运行时获取程序内部信息。

以下是 `Reflect` 对象提供的方法列表。点击[此处][1]可以查看这些方法的详细信息。

```js
// Reflect object methods

Reflect.apply()
Reflect.construct()
Reflect.get()
Reflect.has()
Reflect.ownKeys()
Reflect.set()
Reflect.setPrototypeOf()
Reflect.defineProperty()
Reflect.deleteProperty()
Reflect.getOwnPropertyDescriptor()
Reflect.getPrototypeOf()
Reflect.isExtensible()
```

等等，现在问题来了：既然 `Object` 或 `Function` 对象中已经有这些方法了，为什么还要引入新的 API 呢？

困惑吗？让我们一探究竟。

### 集中在一个命名空间

JavaScript 已经支持对象反射，但是这些 API 没有集中到一个命名空间中。从 ES6 开始，它们被集中到 `Reflect` 对象中。

与其他全局对象不同，Reflect 不是一个构造函数，不能使用 new 操作符来调用它，也不能将它当做函数来调用。`Reflect` 对象中的方法和 math 对象中的方法一样是 `静态` 的。

### 易于使用

`Object` 对象中的 `自省` 方法在操作失败的时候会抛出异常，这给开发者增加了处理异常的负担。

也许你更倾向于把操作结果当做布尔值来处理，而不是去处理异常，借助 Reflect 对象就可以做到。

以下是使用 Object.defineProperty 方法的示例：

```js
 try {
        Object.defineProperty(obj, name, desc);
        // 执行成功
    } catch (e) {
        // 执行失败，处理异常
    }
```

使用 Reflect API 的方式如下：

```js
if (Reflect.defineProperty(obj, name, desc)) {
  // 执行成功
} else {
 // 处理执行失败的情况。（这种处理方式好多了）
}
```

### 一等函数的魅力

我们可以通过 `(prop in obj)` 操作来判断对象中是否存在某个属性。如果多次用到这个操作，我们需要把它封装成函数。

在 ES6 的 `Reflect API` 中已经包含了这些方法，例如，Reflect.has(obj, prop) 和 (prop in obj) 功能是一样的。

看看另一个删除对象属性的示例：

```js
const obj = { bar: true, baz: false};

// We define this function
function deleteProperty(object, key) {
    delete object[key];
}
deleteProperty(obj, 'bar');
```

使用 Reflect API 的方式如下：

```js
// With Reflect API
Reflect.deleteProperty(obj, 'bar');
```

### 以更可靠的方式来使用 apply() 方法

在 ES5 中，我们可以使用 `apply()` 方法来调用一个函数，并指定 `this` 上下文、传入一个参数数组。

```js
Function.prototype.apply.call(func, obj, arr);
// or
func.apply(obj, arr);
```

这种方式比较不可靠，因为 `func` 可能是一个具有自定义 `apply` 方法的对象。

ES6 提供了一个更加可靠、优雅的方式来解决这个问题：

```js
Reflect.apply(func, obj, arr);
```

这样，如果 `func` 不是可调用对象，会抛出 [`TypeError`][2]。此外 `Reflect.apply()` 也更简洁、易于理解。

### 帮助实现其他类型的反射

等我们了解 `Proxy` 对象之后就能理解这句话意味着什么。在许多场景中，Reflect API 方法可以和 Proxy 结合使用。

# Proxy 对象

ES6 的 `Proxy` 对象可以用于 `调解（intercession）`。

`proxy` 对象允许我们自定义一些基本操作的行为（例如属性查找、赋值、枚举、函数调用等）。

以下是一些有用的术语：

-   `target`：代理为其提供自定义行为的对象。
-   `handler`：包含“捕获器”方法的对象。
-   `trap`：“捕获器”方法，提供了访问目标对象属性的途径，这是通过 Reflect API 中的方法实现的。每个“捕获器”方法都对应着 Reflect API 中的一个方法。

它们的关系如图所示：

![](https://www.freecodecamp.org/news/content/images/2020/12/flow-1.png)

先定义一个包含“捕获器”函数的 handler 对象，再使用这个 handler 和目标对象来创建一个代理对象，这个代理对象会应用 handler 中的自定义行为。

如果你对上面介绍的内容不太理解也没关系，我们可以通过代码示例来掌握它。

以下是创建代理对象的语法：
```js
let proxy = new Proxy(target, handler);
```

有许多捕获器（handler 方法）可以用来访问或者自定义目标对象。以下是捕获器方法列表，可以在[此处][3]查看更多详细介绍。

```js
handler.apply()
handler.construct()
handler.get()
handler.has()
handler.ownKeys()
handler.set()
handler.setPrototypeOf()
handler.getPrototypeOf()
handler.defineProperty()
handler.deleteProperty()
handler.getOwnPropertyDescriptor()
handler.preventExtensions()
handler.isExtensible()
```

注意每个捕获器都对应着 `Reflect` 对象的方法，也就是说可以在许多场景下同时使用 `Reflect` 和 `Proxy`。

## 如何获取不可用的对象属性值

以下是一个打印 `employee` 对象的属性的示例：

```js
const employee = {
    firstName: 'Tapas',
    lastName: 'Adhikary'
};

console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.org);
console.log(employee.fullName);
```

预期输出：
```shell
Tapas
Adhikary
undefined
undefined
```

使用 Proxy 对象为 `employee` 对象增加一些自定义行为。

### 步骤 1：创建一个使用 get 捕获器的 Handler

我们使用名为 `get` 的捕获器，可以通过它来获取对象的属性值。handler 代码如下：

```js
let handler = {
    get: function(target, fieldName) {        

        if(fieldName === 'fullName' ) {
            return `${target.firstName} ${target.lastName}`;
        }

        return fieldName in target ?
            target[fieldName] :
                `No such property as, '${fieldName}'!`

    }
};
```

以上 handler 代码创建了 `fullName` 属性的值，还为访问的属性不存在的情况提供了更优雅的错误提示。

### 步骤 2：创建 Proxy 对象

目标对象 `employee` 和 handler 都准备好了，可以这样来创建 Proxy 对象：
```js
let proxy = new Proxy(employee, handler);
```

### 步骤 3：访问 Proxy 对象的属性

现在可以通过 proxy 对象来访问 employee 对象的属性，如下所示：

```js
console.log(proxy.firstName);
console.log(proxy.lastName);
console.log(proxy.org);
console.log(proxy.fullName);
```

预期输出：
```shell
Tapas
Adhikary
No such property as, 'org'!
Tapas Adhikary
```

注意我们是如何神奇地改变 `employee` 对象的。

## 使用 Proxy 来验证属性值

创建一个 proxy 对象来验证整数值。

### 步骤 1：创建一个使用 set 捕获器的 handler

handler 代码如下：

```js
const validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if(!Number.isInteger(value)) {
                throw new TypeError('Age is always an Integer, Please Correct it!');
            }
            if(value < 0) {
                throw new TypeError('This is insane, a negative age?');
            }
        }
    }
};
```

### 步骤 2：创建一个 Proxy 对象

代码如下：

```js
let proxy = new Proxy(employee, validator);
```

### 步骤 3：将一个非整数值赋值给 age 属性

代码如下：
```js
proxy.age = 'I am testing a blunder'; // string value
```

预期输出：
```shell
TypeError: Age is always an Integer, Please Correct it!
    at Object.set (E:\Projects\KOSS\metaprogramming\js-mtprog\proxy\userSetProxy.js:28:23)
    at Object.<anonymous> (E:\Projects\KOSS\metaprogramming\js-mtprog\proxy\userSetProxy.js:40:7)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:188:16)
    at bootstrap_node.js:609:3
```

再试试以下操作：

```js
p.age = -1; // 抛出 TypeError
```

## 如何同时使用 Proxy 和 Reflect

下面是一个在 handler 中使用 Reflect API 方法的示例：

```js
const employee = {
    firstName: 'Tapas',
    lastName: 'Adhikary'
};

let logHandler = {
    get: function(target, fieldName) {        
        console.log("Log: ", target[fieldName]);
        
        // Use the get method of the Reflect object
        return Reflect.get(target, fieldName);
    }
};

let func = () => {
    let p = new Proxy(employee, logHandler);
    p.firstName;
    p.lastName;
};

func();
```

## 其它使用场景

还有许多场景可以用到 Proxy 概念

- 保护对象的 _ID_ 字段不被删除（deleteProperty 捕获器）
- 追踪属性访问的过程（get、set 捕获器）
- 数据绑定（set 捕获器）
- 可撤销的引用
- 控制 `in` 操作符的行为

...以及更多

# 元编程陷阱

尽管 `元编程` 概念为我们提供了强大的功能，但是使用不当也会引发错误。

![](https://www.freecodecamp.org/news/content/images/2020/11/black_magic.gif)

要当心强大功能的副作用。

注意：

-   功能过于强大，务必理解了之后再使用。
-   可能会影响性能。
-   可能会使代码难以调试。

# 总结

总而言之：

-   `反射` 和 `代理` 是 JavaScript 的优秀特性，有助于实现元编程。
-   利用它们可以解决许多复杂的问题。
-   同时也要注意它们的弊端。
-   [ES6 Symbols][4] 也能用来改变现有的类或对象的行为。

希望本文对你有所帮助，文中所有源码都可以在我的 [GitHub repository][5] 中查看。

欢迎分享本文。欢迎关注我的 Twitter 账号（[@tapasadhikary][6]）并留言讨论。

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
[4]: https://blog.greenroots.info/explain-me-like-i-am-five-what-are-es6-symbols-ckeuz5sb8001qafs14of305dw
[5]: https://github.com/atapas/js-mtprog
[6]: https://twitter.com/tapasadhikary
