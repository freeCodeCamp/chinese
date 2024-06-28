> -  原文地址：[How to Prepare for React Interviews – Front-End Technical Interview Guide](https://www.freecodecamp.org/news/prepare-for-react-technical-interviews/)
> -  原文作者：[Manu Arora](https://www.freecodecamp.org/news/author/manu/)
> -  译者：Papaya HUANG
> -  校对者：

![How to Prepare for React Interviews – Front-End Technical Interview Guide](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/Build-a-React-Code-Editor-That-Compiles-and-Executes-in-10--Languages--2-.png)

前端技术面试往往是潜在雇主用来评估你在 web 开发方面技术的机会。
  
面试官通常会提问你在 HTML、CSS 和 JavaScript 方面的经验和技术，他们也会针对如：React、Angular、Vue 等框架进行提问。
  
也会有就特定领域给你出写代码的测试。
  
我们一起来看看前端技术面试在 React 和 JavaScript 方面最常被问到的问题。

## 面试官考察什么？

当参与前端 web 开发职位的面试，请准备好你会被问到各种编程语言、工具和框架方面的技巧和经验。
  
面试官希望你对 web 开发最新的趋势和技术有比较深刻的认识。
  
请准备好描述你过去的项目，以及你是如何解决各种挑战的。
  
确保在讲解开发过程的时候展示你的解决问题的技能。
  
最后，不要忘了强调你的优势。


## 前端技术面试最常被问到的问题

前端技术面试问题一般很直截了当。如果你过去半年一直在写代码，你应该很熟悉大部分将被问到的概念。

一旦你利用一段时间练习对的问题，你就对面试有一个比较清晰的认识。

让我们一起来看看常被问到的问题。

## Map、ForEach、Filter 和 Reduce

有关`数组方法`是最常被问到的问题（通常是面试一开始）。面试官希望了解你在控制数组方面的熟悉程度。

#### `.map()` 方法

`.map()`方法迭代整个数组，并通过计算你在函数内编写的逻辑，返回一个**新**数组。

```javascript
let arr = [
  { id: 1, age: 12, name: 'Manu' },
  { id: 2, age: 24, name: 'Quincy' },
  { id: 3, age: 22, name: 'Abbey' },
]

let names = arr.map((el) => el.name)
console.log(names)
// 输出: [ 'Manu', 'Quincy', 'Abbey' ]
```

#### `.forEach()`方法

`.forEach()`和`.map()`类似，但是不返回新数组。

```javascript
let arr = [
  { id: 1, age: 12, name: 'Manu' },
  { id: 2, age: 24, name: 'Quincy' },
  { id: 3, age: 22, name: 'Abbey' },
]

arr.forEach((el) => el.age+= 10);
console.log(arr);

// 输出: 22 32 44
```

#### `.filter()`方法

`.filter()`方法正如其名，是基于布尔条件过滤出数组中的值。

如果布尔条件为真，结果会被返回，并且添加到最终的数组；如果布尔条件为假，则会被跳过。`.filter()`和`.map()`方法一样返回新数组。

```javascript
let arr = [
  { id: 1, age: 12, name: 'Manu' },
  { id: 2, age: 24, name: 'Quincy' },
  { id: 3, age: 22, name: 'Abbey' },
]

let tooYoung = arr.filter((el) => el.age <= 14);
console.log(tooYoung);

// 输出: [ { id: 1, age: 12, name: 'Manu' } ]
```

#### `.reduce()`方法

简单来说，`.reduce()`方法需要考虑`previous value（先前值）`、当前值（currentValue)和 `accumulator（累加器）`.

`.reduce()`方法的返回类型始终是一个值。当你想要处理数组所有值并且最终累积一个结果的时候，reduce 可以派上用场。

```javascript
// 计算三个人的年龄总和
let arr = [
  { id: 1, age: 12, name: 'Manu' },
  { id: 2, age: 24, name: 'Quincy' },
  { id: 3, age: 22, name: 'Abbey' },
]

let totalAge = arr.reduce((acc, currentObj) => acc + currentObj.age, 0)
console.log(totalAge)

// 输出: 57
```

在上述代码中，`currentObj`是被迭代的对象。同时，`acc` 存储结果，并且输出 totalAge 数组最终的结果。


## 如何实现 Polyfills

[如何通过 polyfills](https://www.algochurn.com/frontend/polyfills) 来实现 map 和 filter 数组，也是一个重要的面试问题。

polyfill 是一个代码块 (在 JavaScript 的 web 架构中)。通常用于在旧的浏览器中原生地实现现代的功能。

简单来说，polyfill 就是使用自定义的原生 JavaScript 函数来实现功能。比方说创建你自己的 `.map()` 或者 `.filter()`方法。

#### 如何实现`.map()`的 polyfill

```javascript
let data = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }
  return arr;
};
const mapLog = data.myMap((el) => el * 2);
console.log(mapLog);
```

`myMap`方法接受一个在`mymap`函数体内执行的`回调（cb)`。在函数体内使用原生的`for`循环，并在 `this.length`范围内迭代，`this.length`是被`myMap`调用的数组的长度。

由于 `map()`的语法是`arr.map(currentElement, index, array)`，所以 `myMap()` 函数也要考虑这些参数。

同时，因为`map()` 返回一个新数组，所以我们创建一个空数组，并且把结果推入，并在最后返回这个数组。

#### 如何实现`.filter()` polyfill

```javascript
let data = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};
const filterLog = data.myFilter((el) => el < 4);
console.log(filterLog);
```

在实现上，`.filter()`和`.map()`非常相似，但因为`filter`是基于布尔值来实现过滤, 所以我们在函数内添加了`if()`条件句来过滤条件，并将结果推入到数组。

## 什么是防抖?

这是一个著名的面试问题，并在在现实世界也有非常多的用例。

`防抖` 是防止函数被过于频繁调用的一种方法，取而代之的是在上次调用之后等待一段时间之后再调用。
  
Amazon 就是一个很好的例子，不论你在查找框中输入什么，都会等待至少 0.5 秒之后，结果才会输出，这就是防抖。

我们来看一个实现防抖的例子：基于用户的输入来生成用户名。

```javascript
import "./styles.css";
let inputEle = document.getElementById("inputElement");
let username = document.getElementById("username");

let generateUsername = (e) => {
  username.innerHTML = e.target.value.split(" ").join("-");
};
let debounce = function (cb, delay) {
  let timer;
  return function () {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(context, arguments);
    }, delay);
  };
};

inputEle.addEventListener("keyup", debounce(generateUsername, 300));
```

在上述代码中，我们尝试基于用户的输入来生成自定义的用户名。用户开始打字之后，我们并不希望马上生成用户名，而是等待 300 毫秒之后再生成。 这里实际上是在模仿一个 API 调用，假设用户输入任意内容，然后必须调用后端 API 来抓取一个响应。

`debounce()`函数接受两个值，`cb`和`delay`。`cb`是当定时器（timer）到时间之后执行的回调函数。
  
我们使用`setTimeout()`来创建定时器，也就是说在 setTimeout 函数体内部的函数会在一定时间之后执行。

`apply`方法使用最初调用它的`对象`来调用回调函数，并在调用中应用参数(arguments)和上下文（context）。

## 什么是闭包?

[闭包的 MDN 文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)的定义：

> 闭包（closure）是一个函数以及其捆绑的周边环境状态（lexical environment，词法环境）的引用的组合。换而言之，闭包让开发者可以从内部函数访问外部函数的作用域。在 JavaScript 中，闭包会随着函数的创建而被同时创建。

让我们来通过一个例子了解闭包是怎么运作的：

```javascript
function start() {
  var name = "Manu"; // name是一个由start()创建的本地变量
  function displayName() {
    // displayName()是内部函数，一个`闭包`
    alert(name); //使用了父函数中的变量
  }
  displayName();
}
start(); // 弹出内容为"Manu"的警告框
```

在上述代码块中，闭包在`start()`和 `displayName()`之间形成。`displayName()`函数可以访问定义在`start()`函数的 `name`变量。

简言之，内部函数了解周围环境(词法作用域)。

我写过一整篇博文讲解[如何战胜 JavaScript 面试](https://manuarora.in/blog/ace-the-javascript-interview#closures)，如果你想深入了解 JavaScript 的面试过程，欢迎阅读。

## React Hooks

当提到 React Hooks 的时候，前端编程面试中最常见的几个问题包括：

1.  `useState()`
2.  `useReducer()`
3.  `useEffect()`
4.  `useRef()`
5.  自定义钩子和实现

### `useState()`钩子是如何运作的

想要管理组件的状态（state），可以使用`useState()`。 
  
举例如下：

```javascript
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [title, setTitle] = useState("freeCodeCamp");
  const handleChange = () => {
    setTitle("FCC");
  };
  return (
    <div className="App">
      <h1>{title} useState</h1>
      <button onClick={handleChange}>Change Title</button>
    </div>
  );
}
```

`useState()`方法包含两个值，`state`变量以及`一个函数`用于修改 state 变量。

在上述代码块中，我们创建了一个 `title`状态（state）来存储页面的标题。初始状态（state）是 `freeCodeCamp`。

点击按钮之后，`setTitle()`方法将 state 变量修改为`FCC`。

`useState()`是你在函数组件中管理状态的首选资源。

### `useReducer()`钩子是如何运作的？

简单来说，`useReducer()`是管理应用状态一个比较炫酷的方式。它的结构性更强，能够帮助你管理应用中复杂的状态。

让我们就一个例子来理解 useReducer:

```javascript
import "./styles.css";
import { useReducer } from "react";

const initialState = { title: "freeCodeCamp", count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "change-title":
      return { ...state, title: "FCC" };
    case "increment-counter":
      return { ...state, count: state.count + 1 };
    default:
      throw new Error();
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="App">
        <h1>{state.title} CodeSandbox</h1>
        <button onClick={() => dispatch({ type: "change-title" })}>
          Change Title
        </button>
        <button onClick={() => dispatch({ type: "increment-counter" })}>
          Increment Counter
        </button>
      </div>
      <p style={{ textAlign: "center" }}>{state.count}</p>.
    </>
  );
}
```

`useReducer()`接受两个参数，`reducer`函数和一个`initialState（初始状态）`值。  
  
reducer 函数是基于 `switch-case`的实现，并返回最终状态值。 `useReducer()` 在内部使用这个值然后返回给组件。

由 `useReducer()`函数返回的值是`state`和`dispatch`。 `state`是组件内部使用的`state`值。在我们的例子中，指的是`title`和`count`，它们可以被`dispatch()`方法操控，然后由`useReducer()`方法返回。

在我们的例子总，我们编写了一个`change-title`来修改`title`，他可以被 `dispatch({ type: "change-title" })`函数触发，然后调用改标题的函数，改变状态的`title`属性。 
  
应用中的`count`部分同理。
  
如我前文所述，这是一个更为炫酷的管理状态的办法。 😉

### `useEffect()`钩子是如何运作的？

可以这样思考：如果你希望 state 变量改变的时候有`副作用`，可以使用`useEffect()`来触发。
  
例如，输入栏的`input value（输入值）`发生改变之后，就要调用 API。你可以在`useEffect()`中编写 `API handle（处理API）`的逻辑。

```javascript
import React, {useState, useEffect} from 'react';

export const App = () => {
    const [value, setValue] = useState('');
    useEffect(() => {
      console.log('value changed: ', value);
    }, [value])
	return <div>
        	<input type="text" name="username" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
}
```

在上述代码块中，将状态值`value`绑定在`输入框`，一旦用户在输入框输入任意内容，这个值就会发生改变。
  
一旦这个值更新并渲染之后，`useEffect()`代码块就会被调用，`console`声明被触发，然后输出最新的状态值。
  
 `useEffect()`的常见用例是`调用API`。假设你需要通过输入框中的内容来调用 API，useEffect 函数将会是最好的办法。

这个函数的另一部分是`依赖数组`，也就是`useEffect()`的第二个参数。在我们的例子中，这个参数是`[value]`。

也就是说每当 `value`发生改变，useEffect 就会被触发。如果你不在`依赖数组`内传入任何值（即依赖数组为空数组），函数只会被调用一次。


### `useRef()`钩子是如何运作的？

useRef 使得你可以改变 DOM(但不单单只使用 useRef)。

据文档描述：

> useRef 返回一个可以修改的 ref 对象，其中 .current 属性用于传参(initialValue)。 返回对象会在组件的整个生命周期保留。

简言之，如果想要在组件的整个生命周期保留某个值，就可以使用 useRef。useRef 的基本实现是基于 DOM 元素的，请看示例：

```javascript
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current`指向mounted文本输入元素
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

在这里，我们向`input`传入了`ref`属性，这将会和我们创建的`inputEl`引用绑定。

现在`input`元素可以按需改变。我们可以修改`style`属性，让它更好看，修改`value`属性查看预备值是什么等。

在上述例子中，当我们点击按钮，`input`就被锁定，我们可以马上输入任何内容。我们可以通过 `inputEl.current.focus()`来实现 –  `focus()`方法是基于`current`对象的。

### 什么是自定义钩子?

[为键盘事件创建一个自定义钩子](https://www.algochurn.com/frontend/usekeypress-custom-hook)是最常见的问题之一。

我们见过各式各样的钩子，面试官可能需要你创建自己的钩子。这可能对一些人来说是一种挑战，但是通过一些练习，这就会变得容易许多。

让我们先理解一下`钩子`是什么：

自定义钩子的基本用例是提炼出函数逻辑到自己的组件。

假设你需要在每个组件内部都`监听回车键`，与其一遍又一遍地重复编写`监听`的逻辑，不如将这个逻辑提取出来，组成一个自己的组件，在需要的时候调用。 (就像我们使用`useState()`或 `useEffect()`一样）。

若一个函数想要被称为`钩子`，需要满足以下条件:

1.  命名必须以`use`关键词开头。
2.  我们可以决定传入什么参数、以及如果需要的话，返回什么值。

```javascript
// 自定义钩子: useAvailable
function useAvailable(resource) {
  const [isAvailable, setIsAvailable] = useState(null);

  // ...

  return isAvailable;
}

// 用例:
  const isAvailable = useAvailable(cpu);
```

在上述代码中，无论我们在自定义钩子内部调用`useState`和 `useEffects`多少次，它们都完全独立于使用自定义钩子的函数。
  
让我们创建一个`存储本地存储值（local storage values）`的自定义钩子。

### 如何创建一个自定义钩子 – useLocalStorage 示例

useLocalStorage 自定义钩子是将数据保存在本地存储的一种方法。在本地存储中采用`key`和`value`对来获取和存储值，这样不论用户何时返回到 web 应用，都会得到同样的结果。

在下面的实现中，一旦`select`标签值发生改变，就会被存储到本地存储中。

`useLocalStorage.js`

```javascript
// 使用本地存储自定义钩子
import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue] as const;
}

export default useLocalStorage;
```

`App.js`

```javascript
import * as React from 'react';
import './style.css';
import useLocalStorage from './useLocalStorate';

export default function App() {
  const [storedValue, setStoredValue] = useLocalStorage(
    'select-value',
    'light'
  );

  return (
    <div>
      <select
        className="select"
        value={storedValue}
        onChange={(e) => setStoredValue(e.target.value)}
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      <p className="desc">
        Value from local storage: <span>{storedValue}</span>
      </p>
    </div>
  );
}
```

`useLocalStorage`接受两个参数，`本地存储key名称`用于存储，以及必要的`默认值`。

钩子返回两个值：你使用的 key 的 `local storage value（本地存储值）`以及通过`setter方法`来`改变key的值`。在例子中就是`setStoredValue`方法。

在`useLocalStorage.js`中，我们首先使用`localStorage.getItem()`方法中的`GET`来获取本地存储值，如果存在，我们就获取这个值，然后用`JSON.parse()`转化这个值并返回，否则 initialValue 就被设置为默认值。
  
`setLocalStorage()`函数需确认我们传入的是函数还是一个简单值，并且使用 `localStorage.setItem()`函数来设置本地存储的值。


## 如何通过副业项目脱引而出

我确实有通过副业项目脱颖而出的经历。
  
我认为创建 10 来个大同小异的副项目大可不必，需要做的是创建一到两个你运用了你所学的所有 React/HTML/CSS/JavaScript 知识好项目。
  
假设面试官一周安排了 14 场面试，并且需要查看 14 个候选人的简历，由于你创建了`每1000次访问后就收取1美元的链接缩短网站`而不是 Amazon 或者 Netflix 克隆，你就会脱颖而出。

当然，通过克隆项目锻炼技能没有什么问题。但是你至少有一个独一无二的项目才能够突出自己。
  
此外，创建辅助项目将帮助你提高开发技能。从头开始创建项目时，不可能事先了解所有内容，因此在这个过程中你将收获各种不同的技能并且熟练掌握。

## 练习、练习再练习！

正如一句名人名言：

> Every interview is a mock interview for you till you get your first front-end job.  
>   
> \- William Shakespeare.
> 
> — Manu Arora (@mannupaaji) [September 4, 2022](https://twitter.com/mannupaaji/status/1566350128767987712?ref_src=twsrc%5Etfw)

言之有物。

在获得第一份前端工作之前，我失败了超过 100 次，在收获成功之前，失败是获取反馈和迭代自我的常态。
  
如果你满足以下条件，会更容易获得前端工作：

-   你深入理解你的技术– 比方说 React(甚至是 HTML、 CSS 和 JS)。
-   你拥有一些项目展示你的能力，突出自己。
-   你愿意花更多时间和精力去学习并且挑战自己。
-   你经常读 freeCodeCamp 的文章，并且利用它准备面积问题。 (😉)

## **总结**

机器代码测试会有很多需要练习的问题。面试官也会有不同的问题来考察你的技能。 
  
你可以通过[**Algochurn**](https://algochurn.com)来练习最常见的[JavaScript 面试问题](https://www.algochurn.com/blog/top-5-react-front-end-questions-to-practice-before-a-technical-interview-round)、 [React 面试问题](https://algochurn.com/frontend)和[算法题](https://algochurn.com/problems)，这里不仅包含了问题还有解法。

如果你有任何问题，欢迎通过 [Twitter(@mannupaaji)](https://twitter.com/mannupaaji) 以及我的 [个人网站(manuarora.in)](https://manuarora.in)联系我。

祝你好运以及编码愉快! 👑🫡
