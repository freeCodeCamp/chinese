> -  原文地址：[What is Memoization? How and When to Memoize in JavaScript and React](https://www.freecodecamp.org/news/memoization-in-javascript-and-react/)
> -  原文作者：[Germán Cocca](https://www.freecodecamp.org/news/author/gercocca/)
> -  译者：Papaya HUANG
> -  校对者：

![What is Memoization? How and When to Memoize in JavaScript and React](https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/pexels-thisisengineering-3913016.jpg)

大家好！本文将讨论记忆化（memoization），这是一种优化手段，旨在减轻繁重的计算过程。

首先我会介绍什么是记忆化以及在什么情况下要使用记忆化，然后我会通过JavaScript和React的实际例子来进一步讲解。

## 文章目录

-   [什么是记忆化](#what-is-memoization)
-   [记忆化如何运行](#how-does-memoization-work)
-   [JavaScript记忆化例子](#javascript-memoization-example)
-   [React记忆化例子](#react-memoization-example)
    -   [纯组件](#pure-components)
    -   [纯类组件](#purecomponent-class)
    -   [Memo高阶组件](#memo-higher-order-component)
    -   [什么时候使用useCallback钩子](#when-to-use-the-usecallback-hook)
    -   [什么时候使用useMemo钩子](#when-to-use-the-usememo-hook)
    -   [什么时候使用记忆化](#when-to-memoize)
-   [总结](#round-up)

<h2 id="what-is-memoization">什么是记忆化</h2>

在编程中，**记忆化是一种优化手段**，以帮助应用运行得更加快速和高效。记忆化通过将计算结果存储在缓存，并当再次需这个结果的时候在缓存中提取来实现优化。

简言之，记忆化包含：1.将函数的输出存储到**缓存**；2.再下次计算前，先检查需要计算是否存在于缓存。

**缓存**是一个暂时的数据存储空间，存储了未来可能会被请求的数据，以提高运行速度。

记忆化是虽然简单但是强大，可以提高代码运行的速度，特别是当你需要运行重复或者需要大量计算的函数的时候。

<h2 id="how-does-memoization-work">记忆化如何运行</h2>

JavaScript中的记忆化以两个概念为基础：

-   **闭包**: 结合了函数及其声明的词法作用域。 想要进一步了解可以阅读[这篇文章](https://www.freecodecamp.org/news/closures-in-javascript/)和[这篇文章](https://www.freecodecamp.org/news/scope-and-closures-in-javascript/)。
-   **高阶函数**: 指在其他函数中运行的函数，要么是作为函数的参数，要么是被返回。想要进一步了解可以阅读[这篇文章](https://www.freecodecamp.org/news/higher-order-functions-in-javascript-examples/)。

<h2 id="javascript-memoization-example">JavaScript记忆化例子</h2>

我将使用经典的斐波那契数列来解释这个晦涩难懂的概念。

**斐波那契数列** 是一组数列，以1或者0打头，紧接着是1，之后的数字都是前两个数字之后，这些数字也被称作斐波那契数。

数列如下：

```javascript
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
```

假设我们需要编写一个函数返回斐波那契数列的第n个数。由于任意斐波那契数是前两个数之和，所以可以使用递归：

```javascript
const fib = n => {
  if (n <= 1) return 1
  return fib(n - 1) + fib(n - 2)
}
```

如果你不熟悉的递归的概念的话，你可以把递归简单理解成函数自己调用自己，并且设定基础条件避免无限循环。(例子中的基础条件是`if (n <= 1)`)。

如果我们调用函数 `fib(5)`，函数的执行如下：

![Untitled-Diagram.drawio](https://www.freecodecamp.org/news/content/images/2022/04/Untitled-Diagram.drawio.png)

所以我们多次执行了 `fib(0), fib(1), fib(2) and fib(3)`，这正是记忆化想要解决的问题。

使用记忆化，就不需要重复计算同样的值，仅需要存储计算，并在需要的时候返回相同的值就行。

应用记忆化，函数可以改写成：

```javascript
const fib = (n, memo) => {
    memo = memo || {}

    if (memo[n]) return memo[n]

    if (n <= 1) return 1
    return memo[n] = fib(n-1, memo) + fib(n-2, memo)
}
```

在这里，我们先检查函数是否传入**memo**对象作为参数，如果没有，我们将其设置为空对象：

```javascript
memo = memo || {}
```

接着检查memo对象的键是否包含了函数接收的参数，如果包含，直接返回对应的值。这就是魔法诞生的地方，当值被存储到memo中，我们就不需要多余的递归了。

```javascript
if (memo[n]) return memo[n]
```

如果当前值并不在memo中，我们再次调用**fib**，但将**memo**也作为参数传入，我们调用的函数就共享之前函数调用中记忆的值。需要注意的是，在返回结果之前需要先在缓存中添加结果。 

```javascript
return memo[n] = fib(n-1, memo) + fib(n-2, memo)
```

就是这么容易！添加两行代码我们就应用了记忆化，并且大幅度提高了函数的性能。

<h2 id="react-memoization-example">React记忆化例子</h2>

在React中，使用记忆化可以避免没必要的重复渲染，从而优化应用。

如我在 [这篇关于管理React state的文章中](https://www.freecodecamp.org/news/how-to-manage-state-in-a-react-app/)介绍的这样，组件的再次渲染取决于两样东西：**state的改变**或者 **props的改变**。 这正是我们可以“缓存”的内容，从而避免不必要的重新渲染。

在展示代码示例之前，我们先了解一些重要的概念。

<h3 id="pure-components">纯组件</h3>

React支持类组件和函数组件。函数组件是一个返回JSX的JavaScript简单函数，类组件是一个继承React.Component的JavaScript类，并使用render方法返回JSX。

那什么是纯组件呢？根据函数式编程范式的纯函数概念，纯函数指的是：

-   返回值仅由输入值决定
-   相同输入值的返回值相同

同样，一个React纯组件即传入同样的state和props，渲染结果相同。

一个纯组件的例子如下：

```javascript
// Pure component
export default function PureComponent({name, lastName}) {
  return (
    <div>My name is {name} {lastName}</div>
  )
}
```

我们传入了两个props，组件渲染了两个props。如果props不变，渲染结果也不变。

但假设我们在渲染前给每个prop添加一个随机数字，这是即便props保持不变，输出也会发生变化，这就是一个非纯组件。

```javascript
// Impure component
export default function ImpurePureComponent({name, lastName}) {
  return (
    <div>My "impure" name is {name + Math.random()} {lastName + Math.random()}</div>
  )
}
```

用类组件改写同样的例子：

```javascript
// Pure component
class PureComponent extends React.Component {
    render() {
      return (
        <div>My "name is {this.props.name} {this.props.lastName}</div>
      )
    }
  }

export default PureComponent
```

```javascript
// Impure component
class ImpurePureComponent extends React.Component {
    render() {
      return (
        <div>My "impure" name is {this.props.name + Math.random()} {this.props.lastName + Math.random()}</div>
      )
    }
  }

export default ImpurePureComponent
```

<h3 id="purecomponent-class">纯类组件</h3>

针对**类形式的纯组件**，React提供了`PureComponent`来应用记忆化。

继承`React.PureComponent`的组件进行性能和渲染优化。因为React使用`shouldComponentUpdate()` 方法来**浅比较props和state**。

让我们来看一个例子。有一个类组件是一个计数器，在这个组件中有一个按钮控制计数器增加或者减少数字大小，还有一个子组件，传入了一个name prop，值为字符串。

```javascript
import React from "react"
import Child from "./child"

class Counter extends React.Component {
    constructor(props) {
      super(props)
      this.state = { count: 0 }
    }

    handleIncrement = () => { this.setState(prevState => {
        return { count: prevState.count - 1 };
      })
    }

    handleDecrement = () => { this.setState(prevState => {
        return { count: prevState.count + 1 };
      })
    }

    render() {
      console.log("Parent render")

      return (
        <div className="App">

          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>

          <h2>{this.state.count}</h2>

          <Child name={"Skinny Jack"} />
        </div>
      )
    }
  }

  export default Counter
```

子组件是一个 **纯组件** ，仅渲染接受到的prop。

```javascript
import React from "react"

class Child extends React.Component {
    render() {
      console.log("Skinny Jack")
      return (
          <h2>{this.props.name}</h2>
      )
    }
  }

export default Child
```

注意我们在两个组件都添加了console.log，以便每次渲染的时候我们可以在控制台看到信息。那么猜猜看每次我们点击增加和减少按钮的时候，控制台会出现什么消息呢？

![2022-04-24_21-59](https://www.freecodecamp.org/news/content/images/2022/04/2022-04-24_21-59.png)

即便接收到的是同样的prop，子组件也会重复渲染。

应用记忆化优化项目，我们需要子组件继承`React.PureComponent`，如下：
```javascript
import React from "react"

class Child extends React.PureComponent {
    render() {
      console.log("Skinny Jack")
      return (
          <h2>{this.props.name}</h2>
      )
    }
  }

export default Child
```

更改之后，再点击增加或者减少按钮，控制台会输出以下信息。

![2022-04-24_22-00](https://www.freecodecamp.org/news/content/images/2022/04/2022-04-24_22-00.png)

只有初次渲染，没有不必要的重复渲染。小菜一碟！

这样我们就讲解完毕类组件的记忆化，但是函数组件无法继承`React.PureComponent`类，所以React提供HOC和两个钩子来处理记忆化。

<h3 id="memo-higher-order-component">Memo高阶组件</h3>

将上面的例子改写成函数组件：

```javascript
import { useState } from 'react'
import Child from "./child"

export default function Counter() {

    const [count, setCount] = useState(0)

    const handleIncrement = () => setCount(count+1)
    const handleDecrement = () => setCount(count-1)

    return (
        <div className="App">
            {console.log('parent')}
            <button onClick={() => handleIncrement()}>Increment</button>
            <button onClick={() => handleDecrement()}>Decrement</button>

            <h2>{count}</h2>

            <Child name={"Skinny Jack"} />
        </div>                    
    )
}
```

```javascript
import React from 'react'

export default function Child({name}) {
console.log("Skinny Jack")
  return (
    <div>{name}</div>
  )
}
```

这样会导致同样的错误：子组件重复不必要的渲染。为了解决这个问题，我们将子组件打包到`memo`高阶组件，如下：

```javascript
import React from 'react'

export default React.memo(function Child({name}) {
console.log("Skinny Jack")
  return (
    <div>{name}</div>
  )
})
```

**高阶组件（HOC）** 类似于JavaScript中的高阶函数。高阶函数指将函数作为参数或者返回其他的函数的函数。React高阶组件将组件作为prop，并且在不改变组件的前提下对这个组件进行操作。你可以把HOC想象成一个打包组件。

那么在这个例子中，`memo`执行了`PureComponent`同样的任务，避免了被打包的组件不必要的重复渲染。

<h3 id="when-to-use-the-usecallback-hook">什么时候使用useCallback钩子</h3>

值得注意的是当传入的prop是一个函数的时候，不可以使用`memo`，让我们对上面的例子稍做修改：

```javascript
import { useState } from 'react'
import Child from "./child"

export default function Counter() {

    const [count, setCount] = useState(0)

    const handleIncrement = () => setCount(count+1)
    const handleDecrement = () => setCount(count-1)

    return (
        <div className="App">
            {console.log('parent')}
            <button onClick={() => handleIncrement()}>Increment</button>
            <button onClick={() => handleDecrement()}>Decrement</button>

            <h2>{count}</h2>

            <Child name={console.log('Really Skinny Jack')} />
        </div>                    
    )
}
```

```javascript
import React from 'react'

export default React.memo(function Child({name}) {
console.log("Skinny Jack")
  return (
    <>
        {name()}
        <div>Really Skinny Jack</div>
    </>
  )
})
```

这样我们的prop就是一个始终打印同样字符串的函数，我们的控制台会再次变成这个样子：

![2022-04-24_22-04](https://www.freecodecamp.org/news/content/images/2022/04/2022-04-24_22-04.png)

出现这种情况是因为实际上每次父组件重新渲染就会创建一个新的函数。创建一个新的函数就意味着传入了新的prop，子组件需要重新渲染。

为了解决这个问题，React提供了**useCallback**钩子，应用如下：

```javascript
import { useState, useCallback } from 'react'
import Child from "./child"

export default function Counter() {

    const [count, setCount] = useState(0)

    const handleIncrement = () => setCount(count+1)
    const handleDecrement = () => setCount(count-1)

    return (
        <div className="App">
            {console.log('parent')}
            <button onClick={() => handleIncrement()}>Increment</button>
            <button onClick={() => handleDecrement()}>Decrement</button>

            <h2>{count}</h2>

             <Child name={ useCallback(() => {console.log('Really Skinny Jack')}, [])  } />
        </div>                    
    )
}
```

这样就解决了子组件没有必要的重复渲染。

useCallback在这里起到的作用是即便父组件重新渲染，函数的值不变。只要函数值不变，子组件的prop就保持不变。

只需用useCallback钩子打包声明的函数。useCallback钩子包含一个依赖数组，可以在这个数组中声明触发函数值变化的变量（和useEffect的工作原理一样）。

```javascript
const testingTheTest = useCallback(() => { 
    console.log("Tested");
  }, [a, b, c]);
```

<h3 id="when-to-use-the-usememo-hook">什么时候使用useMemo钩子</h3>

**useMemo**是类似于useCallback的一个钩子，useMemo不缓存函数，而是缓存**函数的返回值**。

在这个例子中`useMemo`缓存数字`2`。

```javascript
const num = 1
const answer = useMemo(() => num + 1, [num])
```

如果使用`useCallback`会缓存`() => num + 1`。
```javascript
const num = 1
const answer = useMemo(() => num + 1, [num])
```

你可以像使用memo高阶组件一样使用useMemo。两者的区别在于，useMemo是一个带有依赖数组的钩子，而memo是一个接收函数作为参数的高阶组件，并且根据prop有条件地更新组件。

除此之外，useMemo在两次渲染之间缓存返回值，而memo在两次渲染间缓存整个react组件。

<h3 id="when-to-memoize">什么时候使用记忆化</h3>

记忆化是React工具包里面非常好用的工具，但你并不需要时刻都使用它。这个工具仅在遇到需要进行大量运算的功能和任务时使用。

必须注意在上面的三个例子为了方便展示我们都监听了代码。但当任务的计算量并不繁重的时候，或许采用别的解决方面，或者放任不管是更好的选择。

如果你对什么时候应该使用记忆化有兴趣，我推荐你阅读[Kent C. Dodds](https://kentcdodds.com/blog/usememo-and-usecallback)有关这个话题的文章。

<h2 id="round-up">总结</h2>

以上就是这篇文章的全部内容了。希望你喜欢这篇文章，并且能从中受益。你可以在[LinkedIn](https://www.linkedin.com/in/germancocca/)或[Twitter](https://twitter.com/CoccaGerman)上关注我。

干杯！咱们下篇文章见！

![goodbye-1](https://www.freecodecamp.org/news/content/images/2022/04/goodbye-1.gif)
