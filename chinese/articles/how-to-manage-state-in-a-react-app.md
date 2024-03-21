> -  原文地址：[How to Manage State in a React App – With Hooks, Redux, and More](https://www.freecodecamp.org/news/how-to-manage-state-in-a-react-app/)
> -  原文作者：[Germán Cocca](https://www.freecodecamp.org/news/author/gercocca/)
> -  译者：bauhauce
> -  校对者：

![如何在 react 应用中使用 Hooks, Redux 等管理状态](https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/lautaro-andreani-UYsBCu9RP3Y-unsplash.jpg)
如何在 react 应用中使用 Hooks, Redux 等管理状态

你好！在本文中，我们将了解在 React 应用程序中管理状态的多种方式。

我们将从讨论什么是状态开始，然后介绍许多用于管理状态的工具

我们将了解简单的 useState hook，并学习更复杂的库，如 Redux。然后我们将查看最新可用的库，例如 Recoil 和 Zusand

## 目录

-   [react 中的状态是什么?](#whatisstateinreact)
-   [如何使用 useState hook](#howtousetheusestatehook)
    -   [如何使用 useEffect 读取状态更新](#howtouseuseeffecttoreadstateupdates)
    -   [如何传递一个回调给状态更新函数](#howtopassacallbacktostateupdatefunction)
-   [管理规模和复杂性](#managingscaleandcomplexity)
    -   [React context](#reactcontext)
    -   [如何使用 useReducer hook](#howtousetheusereducerhook)
    -   [那么 Redux 呢](#whataboutredux)
-   [Redux 的替代品](#alternativestoredux)
    -   [Redux toolkit](#reduxtoolkit)
        -   [提到 Redux Thunk 和 Redux Saga](#amentionforreduxthunkandreduxsaga)
    -   [Recoil](#recoil)
    -   [Jotai](#jotai)
    -   [Zustand](#zustand)
-   [结论](#conclusion)

<h2 id="whatisstateinreact">React 中的状态是什么?</h2>

在现代 React 中，我们使用**函数组件**构建我们的应用程序。组件本身就是 JavaScript 函数，是独立且**可复用**的代码。

使用组件构建应用程序的目的是使其具有模块化架构，具有明确的关注点分离。这使代码更易于理解、更易于维护并且在可能的情况下更易于复用。

**而状态( state )是一个保存有组件信息的对象**。普通 JavaScript 函数没有存储信息的能力。一旦执行完成，它们中的代码就会执行并“消失”。

但是有了状态之后，React 函数组件即使在执行后也可以存储信息。当我们需要一个组件来存储或“记住”某些东西，或者根据环境以不同的方式执行时，状态就是我们所需要的可以让这些生效的东西;

值得一提的是，在 React 应用程序中的并非所有组件都必须具有状态，也有无状态组件，它们只呈现其内容而无需存储任何信息，这也很好。

另一件重要的事情是状态变化是使 React 组件重新渲染的两个原因之一（另一个是 props 的变化）。因此，状态存储了组件的信息同时也控制了它的行为。

<h2 id="howtousetheusestatehook">如何使用 useState hook</h2>

为了在我们的组件中实现状态，React 为我们提供了一个名为 **useState** 的钩子( hook )。让我们看看它是如何与以下示例一起工作的。

我们将使用经典的计数器示例，其中我们将显示一个数字，并且我们有几个按钮用于增加、减少或重置该数字。

这是一个很好的应用程序示例，我们需要存储一条信息并在每次信息更改时呈现不同的内容。

![5bueYQblr--2-](https://www.freecodecamp.org/news/content/images/2022/03/5bueYQblr--2-.gif)

此应用程序的代码如下所示

```js
// App.js
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p>Count is: {count}</p>

      <div>
        <button onClick={() => setCount(count+1)}>Add 1</button>
        <button onClick={() => setCount(count-1)}>Decrease 1</button>

        <button onClick={() => setCount(count+10)}>Add 10</button>
        <button onClick={() => setCount(count-10)}>Decrease 10</button>

        <button onClick={() => setCount(0)}>Reset count</button>
      </div>
    </div>
  )
}

export default App
```

-   首先我们从 React 导入钩子( hook )：`import { useState } from 'react'`
    
-   然后我们初始化状态：`const [count, setCount] = useState(0)`
    
在这里，我们为状态提供了一个变量名（`count`）和一个我们将在每次需要更新该状态时使用的函数名（`setCount`）。最后，我们设置状态的初始值（`0`），这将是应用程序每次启动时默认加载的值。

-   最后，如上所述，每次我们想要更新状态时，都必须使用我们声明的函数：`setCount`，只需要调用它并将我们想要的新状态作为参数传递给它。也就是说，如果我们想在前一个状态加 1，我们需要调用 `setCount(count+1)`。

如前所述，这将导致状态更新，从而导致组件的重新渲染。在我们的应用程序中我们将在屏幕上看到计数器增加。

<h3 id="howtouseuseeffecttoreadstateupdates">如何使用 useEffect 读取状态更新 </h3>

一个需要提到的重要信息是 setState 函数是**异步的**。因此，如果我们尝试在更新状态后立即读取它，例如：

```js
<button onClick={() => {
          setCount(count+1)
          console.log(count)
}}>Add 1</button>
```

我们会得到之前的状态值，并没有得到更新。

在更新状态后读取状态的正确方法是使用 **useEffect** hook。它允许我们在每个组件重新渲染后（默认情况下）或在我们声明更改的任何特定变量之后执行一个函数。 

就像这样:

```js
useEffect(() => console.log(value), [value])
```

<h3 id="howtopassacallbacktostateupdatefunction">如何传递一个回调给状态更新函数</h3>

在非常频繁和快速的状态变更时，异步的 useState 也会产生一些影响。

举个例子, 用户连续多次按下 ADD 按钮，或者一个循环中发出一定次数的点击事件。

通过`setCount(count+1)`更新状态，在下一个事件被触发时 `count` 会有不被更新的风险。

例如，假设在开始时 `count = 0`。然后调用 `setCount(count+1)` 异步更新状态。

但是在状态更新完成之前再次调用了`setCount(count+1)`。这意味着仍然是`count = 0`，这意味着第二个`setCount`不会正确更新状态。

一种比较防守型的方法是向 `setCount` 传递一个回调，如下所示：`setCount(prevCount => prevCount+1)`。

这样可以确保要更新的值是最新的，并使我们远离上述问题。每次我们对先前的状态执行更新时，我们都应该使用这种方法。

<h2 id="managingscaleandcomplexity">管理规模和复杂性</h2>

到目前为止，状态管理似乎是小菜一碟。我们只需要一个 hook、一个值和一个函数来更新它，我们就可以开始了。

但是，一旦应用程序开始变得更大更复杂时，仅使用这一种方式可能会开始导致一些问题。 

<h3 id="reactcontext">React context</h3>

第一个可能出现的问题是当我们有很多嵌套组件时，我们需要许多“兄弟”组件来共享相同的状态。

显而易见的答案是“提升”状态，这意味着父组件将成为持有状态的组件，并将状态作为 prop 传递给子组件。

这很好用，但是当我们有很多嵌套组件时，我们可能需要通过许多层级组件传递 props。这被称为**prop drilling**，不仅很难看，而且会创建难以维护的代码。

Prop drilling 还可能导致**不必要的重新渲染**，这可能会影响我们应用程序的性能。如果在我们的父组件（存储状态）和我们的子组件（使用状态）之间还有其他组件（“中间组件”），我们也需要通过这些中间组件传递 prop，即使它们并不需要 prop。

这意味着这些“中间组件”将在 prop 变更时重新渲染，即使它们没有不同的内容需要渲染。

解决这个问题的一种方法是使用 **React context**，简单来说，这是一种创建包装组件的方法，该组件包装我们那些想要并且可以直接传递 props 的组件组，而且无需“drill”通过那些不是必须使用该状态的组件。

使用 context 时要注意的是，当 context 状态发生变化时，所有接收该状态的被包装组件都将重新渲染。这种情况下，这可能不是必然的, 也可能导致性能问题。

因此，我们是否真的需要让一个状态对许多组件可用，或者我们是否可以将其保持在单个组件中, 在这两者之前取一个平衡是非常重要的。如果我们需要让许多组件都可以使用它，把它放在 context 中真的是一个好主意吗？或者我们是否可以把它提升一个层次。 

Kent C Dodds 有一篇关于这个主题的[很酷的文章](https://kentcdodds.com/blog/application-state-management-with-react)。 

<h3 id="howtousetheusereducerhook">如何使用 useReducer hook</h3>

当你使用 useState 时，要设置的新状态取决于先前的状态（如我们的计数示例），或者当我们的应用程序中状态更改非常频繁，这种情况下可能会出现另一个问题。

在这些情况下，useState 可能会引发一些意想不到的和不可预知的行为。接下来的 **reducers** 将解决这个问题。

**reducer** 是一个纯函数，它将前一个状态和一个动作作为参数，并返回下一个状态。它被称为 reducer，是因为它与你传递给数组的函数类型相同：`Array.prototype.reduce(reducer, initialValue)`。

**useReducer** 是 React 提供的 hook，它让我们实现 reducer 来管理我们的状态。使用这个 hook，我们之前的示例应用程序看起来像这样：

```js
// App.js
import { useReducer } from 'react'
import './App.scss'

function App() {

  function reducer(state, action) {
    switch (action.type) {
      case 'ADD': return { count: state.count + 1 }
      case 'SUB': return { count: state.count - 1 }
      case 'ADD10': return { count: state.count + 10 }
      case 'SUB10': return { count: state.count - 10 }
      case 'RESET': return { count: 0 }
      default: return state
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 })  

  return (
    <div className="App">
      <p>Count is: {state.count}</p>

      <div>
        <button onClick={() => dispatch({type: 'ADD'})}>Add 1</button>
        
        <button onClick={() => dispatch({type: 'SUB'})}>Decrease 1</button>

        <button onClick={() => dispatch({type: 'ADD10'})}>Add 10</button>
        <button onClick={() => dispatch({type: 'SUB10'})}>Decrease 10</button>

        <button onClick={() => dispatch({type: 'RESET'})}>Reset count</button>
      </div>
    </div>
  )
}

export default App
```

-   我们再次从 React 导入 hook 开始：`import { useReducer } from 'react'`
    
-   然后我们将声明一个 reducer 函数，将接收当前的状态和对其执行的动作( action )作为参数。并且在函数里有一个 switch 语句，该语句将读取动作类型，对状态执行相应的动作，并返回更新后的状态。
    
> 通常做法是在 reducer 上使用 switch 语句, 并且使用大写字母来声明动作;

```js
function reducer(state, action) {
    switch (action.type) {
      case 'ADD': return { count: state.count + 1 }
      case 'SUB': return { count: state.count - 1 }
      case 'ADD10': return { count: state.count + 10 }
      case 'SUB10': return { count: state.count - 10 }
      case 'RESET': return { count: 0 }
      default: return state
    }
  }
```

-   之后，是时候声明我们的 **useReducer** hook 了，它看起来与 useState hook 非常相似。我们为我们的状态声明一个**变量**（在我们的例子中是'state'），和一个**我们将用来修改这个变量的函数**（'dispatch'），然后 useReducer 将接收上面的 **reducer 函数** 作为第一个参数，和一个**默认状态**作为第二个参数。

```js
const [state, dispatch] = useReducer(reducer, { count: 0 })  
```

-   最后，我们不会直接调用 reducer 去更新状态，而是调用我们刚刚创建的函数（'dispatch'），将我们想要执行的对应的动作类型传递给它。其中，dispatch 函数将与 reducer 连接并实际修改 state。

```js
<button onClick={() => dispatch({type: 'ADD'})}>Add 1</button>
```

这比使用 useState 多了不少模板，但 useReducer 毕竟没有那么复杂。

总结一下，我们只需要：

-   一个 reducer，合并所有可能的状态变化的函数
-   一个 dispatch 函数，将修改动作传递给 reducer。

这里的问题是, UI 元素将不能像以前那样通过用一个值调用 setState 去直接更新状态。现在他们需要调用一个动作类型 (action type) 并通过 reducer，这使得状态管理更加模块化和可预测。

<h3 id="whataboutredux">那么 Redux 呢</h3>

[Redux](https://redux.js.org/) 是一个已经存在很长时间并且在 React 中被广泛使用的库。

Redux 是一个工具，它可以解决前面提到的两个问题 (prop drilling 和频繁和复杂状态变更时不可预测的状态行为）。

值得一提的是，Redux 是一个不可知的库，这意味着它可以在任何前端应用程序上实现，不仅仅是 React。

Redux 工具集与我们刚刚看到的 useReducer 非常相似，但多了一些东西。 Redux 中有三个主要的构建块：

-   **store** — 一个保存应用状态数据的对象
-   **reducer** — 一个由动作类型 (action type) 触发, 并返回一些状态数据的函数
-   **action** — 一个告诉 reducer 如何改变状态的对象。它必须包含一个 type 属性，并且它还可以包含一个可选的 payload 属性

实现 Redux，我们的示例应用程序如下所示：

```js
// App.js
import './App.scss'

import { Provider, useSelector, useDispatch } from 'react-redux'
import { addOne, subOne, addSome, subSome, reset } from './store/actions/count.actions'

import store from './store'

function App() {

  const dispatch = useDispatch()
  const count = useSelector(state => state.count)

  return (
    <Provider store={store}>
      <div className="App">
        <p>Count is: {count}</p>

        <div>
          <button onClick={() => dispatch(addOne())}>Add 1</button>
          
          <button onClick={() => dispatch(subOne())}>Decrease 1</button>

          <button onClick={() => dispatch(addSome(10))}>Add 10</button>
          <button onClick={() => dispatch(subSome(10))}>Decrease 10</button>

          <button onClick={() => dispatch(reset())}>Reset count</button>
        </div>
      </div>
    </Provider>
  )
}

export default App
```

此外，我们需要一个新的 **store** 文件夹，包含相应的 store、reducer 和 actions 文件。

![Cbdp2DJY9](https://www.freecodecamp.org/news/content/images/2022/03/Cbdp2DJY9.png)

```js
// index.js (STORE)
import { createStore } from 'redux'
import CountReducer from './reducers/count.reducer'

export default createStore(CountReducer)
```

```js
// count.reducer.js
import { ADD, SUB, ADDSOME, SUBSOME, RESET } from '../actions/count.actions'

const CountReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      case ADD: return { count: state.count + 1 }
      case SUB: return { count: state.count - 1 }
      case ADDSOME: return { count: state.count + action.payload }
      case SUBSOME: return { count: state.count - action.payload }
      case RESET: return { count: 0 }
      default: return state
    }
}

export default CountReducer
```

```js
// count.actions.js
export const ADD = 'ADD'
export const addOne = () => ({ type: ADD })

export const SUB = 'SUB'
export const subOne = () => ({ type: SUB })

export const ADDSOME = 'ADDSOME'
export const addSome = (value) => ({
    type: ADDSOME,
    payload: value
})

export const SUBSOME = 'SUBSOME'
export const subSome = (value) => ({
    type: SUBSOME,
    payload: value
})

export const RESET = 'RESET'
export const reset = () => ({ type: RESET })
```

这比我们之前看到的还要更多的模板（这也是 Redux 被批评的主要原因），所以让我们把它分解成几块:

-   正如我提到的，Redux 是一个外部库，所以在进行任何操作之前，我们需要通过运行 `npm i redux react-redux` 来安装它。 `redux` 将带来管理状态所需的核心函数，而`react-redux` 将安装一些很酷的 hook，可以轻松地从我们的组件中读取和修改状态。
    
-   现在，首先是 **store**。在 Redux 中，store 是拥有所有应用程序状态信息的实体。多亏 Redux，我们能够从任何想要的组件中访问 store（就像使用 context 一样）。
    

为了创建一个 store，我们导入 `createStore` 函数，并将一个 reducer 函数作为输入传递给它。

要知道, 你也可以将不同的 reducers 合并然后传递给同一个 store, 这样你就可以将关注点分离到不同的 reducers 中。

```js
import { createStore } from 'redux'
import CountReducer from './reducers/count.reducer'

export default createStore(CountReducer)
```

-   然后是 **reducer**，它的工作方式与之前我们看到的 useReducer 完全相同。它接收默认状态和一个动作 (action) 作为参数，然后在它里面有一个 switch 语句来读取 action type，执行相应的状态修改，并返回更新后的状态。

```js
import { ADD, SUB, ADDSOME, SUBSOME, RESET } from '../actions/count.actions'

const CountReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      case ADD: return { count: state.count + 1 }
      case SUB: return { count: state.count - 1 }
      case ADDSOME: return { count: state.count + action.payload }
      case SUBSOME: return { count: state.count - action.payload }
      case RESET: return { count: 0 }
      default: return state
    }
}

export default CountReducer
```

-   接着是 **actions**。 actions 用于告诉 reducer 如何更新状态。在代码中，你可以看到，对于每个 action，我们都声明了常量来代替普通的字符串（这是一个可以提高可维护性的好做法），以及一些仅返回一个 type 或者 一个 type 和一个 payload 的函数。这些函数就是我们要从组件中 dispatch 去更改状态的函数。

请注意, 我对这个例子做了一些改变, 以显示在谈论 actions 时 payload 的含义。如果我们想在 dispatch action 时**从组件传递一个参数**，**payload 就是存放该信息的地方**。

在示例中，你可以看到我们在调用 ADDSOME/SUBSOME 时可以直接从组件中传递我们想要加/减的数字

```js
export const ADD = 'ADD'
export const addOne = () => ({ type: ADD })

export const SUB = 'SUB'
export const subOne = () => ({ type: SUB })

export const ADDSOME = 'ADDSOME'
export const addSome = value => ({
    type: ADDSOME,
    payload: value
})

export const SUBSOME = 'SUBSOME'
export const subSome = value => ({
    type: SUBSOME,
    payload: value
})

export const RESET = 'RESET'
export const reset = () => ({ type: RESET })
```

-  最后是我们的组件。这里有 3 件事需要注意：

1.  首先，我们有一个 **provider** 组件，它接收 **store** 作为 props。这是对所有被包装在其中的组件访问 store 的授权。
    
2.  然后我们有一个名为 **useDispatch()**（我们将用于 dispatch actions）和另一个名为 **useSelector()** 的 hook（我们将用于从 store 中读取状态）。
    
3.  最后，请注意我们将要 **dispatch 我们在 action 文件中声明的函数**，并传递一个匹配的值作为输入。这个值是 actions 接收作为 payload 的值，以及 reducer 将用来修改状态的值。
    

```js
import './App.scss'

import { useSelector, useDispatch } from 'react-redux'
import { addOne, subOne, addSome, subSome, reset } from './store/actions/count.actions'

function App() {

  const dispatch = useDispatch()
  const count = useSelector(state => state.count)

  return (
      <div className="App">
        <p>Count is: {count}</p>

        <div>
          <button onClick={() => dispatch(addOne())}>Add 1</button>
          
          <button onClick={() => dispatch(subOne())}>Decrease 1</button>

          <button onClick={() => dispatch(addSome(10))}>Add 10</button>
          <button onClick={() => dispatch(subSome(10))}>Decrease 10</button>

          <button onClick={() => dispatch(reset())}>Reset count</button>
        </div>
      </div>
  )
}

export default App
```

Redux 是一个很好的工具，它同时解决了两个问题（prop drilling 和复杂的状态变化）。不过，它确实产生了很多模板，使状态管理成为一个更难理解的话题，特别是在处理不同的文件和实体，如 actions、reducers、store ……

这里要提到的重要一点是，这些管理状态的工具或方法并不是相互排斥的，它们可以而且可能应该同时使用，并各自解决它们所擅长的具体问题。

对于 Redux，要解决的问题是处理**全局状态**（指影响整个应用程序或其中很大一部分的状态）。用 Redux 来处理像我们的例子中的计数器或模态的打开和关闭是没有意义的。

一个好的黄金法则是 **useState 用于组件状态，Redux 用于应用程序状态**。

<h2 id="alternativestoredux">Redux 的替代品</h2>

如果这个主题对你来说还不够复杂，在过去的几年里，出现了许多作为 Redux 替代品的新的库，每个库都有自己的状态管理方法。

为了获得很好的概述，让我们快速了解它们。

<h3 id="reduxtoolkit">Redux toolkit</h3>

[Redux toolkit](https://redux-toolkit.js.org/) 是一个建立在 Redux 之上的库，其目的是去除 Redux 产生的一些复杂性和模板。

Redux toolkit 基于两件事：

- **store**，它的工作方式与普通 Redux store 完全相同
- **slices** 将普通的 Redux actions 和 reducer 压缩成一个单一的东西

实现 Redux Toolkit，我们的示例应用程序如下所示：

```js
// App.js
import './App.scss'

import { useSelector, useDispatch } from 'react-redux'
import { addOne, subOne, addSome, subSome, reset } from './store/slices/count.slice'

function App() {

  const dispatch = useDispatch()
  const count = useSelector(state => state.counter.count)

  return (
      <div className="App">
        <p>Count is: {count}</p>

        <div>
          <button onClick={() => dispatch(addOne())}>Add 1</button>
          
          <button onClick={() => dispatch(subOne())}>Decrease 1</button>

          <button onClick={() => dispatch(addSome(10))}>Add 10</button>
          <button onClick={() => dispatch(subSome(10))}>Decrease 10</button>

          <button onClick={() => dispatch(reset())}>Reset count</button>
        </div>
      </div>
  )
}

export default App
```

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store/index'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
```

```js
// Index.jsx (STORE)
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/count.slice'

export const store = configureStore({
  reducer: {
      counter: counterReducer
  },
})

export default store
```

```js
// count.slice.jsx
import { createSlice } from '@reduxjs/toolkit'

const initialState = { count: 0 }

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addOne: state => {state.count += 1},
    subOne: state => {state.count -= 1},
    addSome: (state, action) => {state.count += action.payload},
    subSome: (state, action) => {state.count -= action.payload},
    reset: state => {state.count = 0}
  },
})

export const { addOne, subOne, addSome, subSome, reset } = counterSlice.actions

export default counterSlice.reducer
```

-   首先我们需要通过运行 `npm install @reduxjs/toolkit react-redux` **来安装它**

-   在我们的 **store** 中，我们从 Redux toolkit 中导入 `configureStore` 函数，通过调用此函数来创建 store，并将一个带有 reducer 的对象传递给它，该对象本身就是一个包含 slice 的对象。
    

```js
export const store = configureStore({
  reducer: {
      counter: counterReducer
  },
})
```

-   正如我所提到的，**slice** 是一种将 action 和 reducer 压缩为同一个的方法。我们从 Redux toolkit 中导入`createSlice` 函数，然后声明初始状态并初始化 slice。

这个函数将接收 slice 的名称、初始状态以及我们将从组件派发以修改状态的函数作为参数。

注意这里没有任何 actions。 UI 将直接调用 reducer 函数。这就是 Redux toolkit “带走”的复杂性。

```js
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addOne: state => {state.count += 1},
    subOne: state => {state.count -= 1},
    addSome: (state, action) => {state.count += action.payload},
    subSome: (state, action) => {state.count -= action.payload},
    reset: state => {state.count = 0}
  },
})
```

-  在 index.js 中，我们用 provider 组件包装应用程序，这样的话我们可以从任何地方访问状态。

```js
    <Provider store={store}>
      <App />
    </Provider>
```

-  最后, 我们使用 hooks 从组件中读取状态和 dispatch 修改函数，就像使用普通的 Redux 一样。

```js
function App() {

  const dispatch = useDispatch()
  const count = useSelector(state => state.counter.count)

  return (
      <div className="App">
        <p>Count is: {count}</p>

        <div>
          <button onClick={() => dispatch(addOne())}>Add 1</button>
          
          <button onClick={() => dispatch(subOne())}>Decrease 1</button>

          <button onClick={() => dispatch(addSome(10))}>Add 10</button>
          <button onClick={() => dispatch(subSome(10))}>Decrease 10</button>

          <button onClick={() => dispatch(reset())}>Reset count</button>
        </div>
      </div>
  )
}
```

Redux toolkit 旨在成为处理 Redux 的一种更简单的方法，但在我看来，它仍然是几乎相同的模板，与普通的 Redux 没有太大区别。

<h4 id="amentionforreduxthunkandreduxsaga">提到 Redux Thunk 和 Redux Saga</h4>

[Redux thunk](https://github.com/reduxjs/redux-thunk) 和 [Redux Saga](https://redux-saga.js.org/) 是两个与 Redux **一起**使用的很流行的中间件库;

具体来说，Thunk 和 Saga 都是为了处理副作用或异步任务所使用的。 

<h3 id="recoil">Recoil</h3>

![2CYCmD92D](https://www.freecodecamp.org/news/content/images/2022/03/2CYCmD92D.png)

[Recoil](https://recoiljs.org/) 是一个开源状态管理库，专门用于由 Facebook（或 Meta，等等）构建的 React。根据他们的网站，Recoil 是为 "最小化和响应式 "而建立的，在这个意义上，它看起来和感觉都像普通的 React 代码。

Recoil 基于**原子 (atom)** 的概念。来自他们的文档，

> “一个原子代表一个状态。原子可以从任何组件读取和写入。读取原子值的组件隐式订阅了该原子，因此任何原子更新都会导致所有订阅该原子的组件重新渲染”。 

使用 Recoil，我们的示例应用程序将如下所示：

```js
// App.js
import countState from './recoil/counter.atom'
import './App.scss'

import { useRecoilState } from 'recoil'

function App() {

  const [count, setCount] = useRecoilState(countState)

  return (
      <div className="App">
        <p>Count is: {count}</p>

        <div>
          <button onClick={() => setCount(count+1)}>Add 1</button>
          
          <button onClick={() => setCount(count-1)}>Decrease 1</button>

          <button onClick={() => setCount(count+10)}>Add 10</button>
          <button onClick={() => setCount(count-10)}>Decrease 10</button>

          <button onClick={() => setCount(0)}>Reset count</button>
        </div>
      </div>
  )
}

export default App
```

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { RecoilRoot } from 'recoil'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
```

```js
// counter.atom.jsx
import { atom } from 'recoil'

const countState = atom({
  key: 'countState', // 唯一 ID (区别于其他 atoms/selectors)
  default: 0 // 默认值 (又称初始值)
})

export default countState
```

你可能马上就能看到，这比 Redux 的模板要少很多。

-   首先我们通过运行 `npm install recoil` 来安装它
    
-   那些使用 recoil 状态的组件需要在其父组件的某处使用 `RecoilRoot`。所以我们用它来包装我们的应用程序。
    

```js
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
```

-   然后我们声明我们的 **atom**，它只是一个包含键和默认值的对象：

```
const countState = atom({
  key: 'countState', // 唯一 ID (区别于其他 atoms/selectors)
  default: 0 // 默认值 (又称初始值)
})
```

-   最后，在我们的组件中，我们导入 `useRecoilState` hook，用它声明我们的状态，并将我们刚刚在 atom 中声明的唯一键传递给它。

```
const [count, setCount] = useRecoilState(countState)
```

正如你所看到的，这看起来与常规的 useState hook 非常相似。

在我们的 UI 中，我们只是调用 `setCount` 函数来更新我们的状态。

```js
<button onClick={() => setCount(count+1)}>Add 1</button>
```

最小，并且非常易于使用。Recoil 仍然是一种实验性的，并没有被广泛使用，但你可以看到世界各地的开发人员将如何转向这个工具。

<h3 id="jotai">Jotai</h3>

[Jotai](https://jotai.org/) 是一个为 React 构建的开源状态管理库，其灵感来自 Recoil。它与 Recoil 的不同之处在于寻找一个更加简约的 API -- 它不使用字符串键，而且是面向 TypeScript 的。

与 Recoil 一样，Jotai 使用 atoms。 **atom** 代表一片状态。你只需要指定一个初始值，它可以是原始值，如字符串和数字、对象和数组。然后在你的组件中使用该 atom，在每次 atom 更改时该组件将重新渲染。


使用 Jotai，我们的示例应用程序如下所示：

```js
// App.js
import './App.scss'

import { useAtom } from 'jotai'

function App() {

  const [count, setCount] = useAtom(countAtom)

  return (
      <div className="App">
        <p>Count is: {count}</p>

        <div>
          <button onClick={() => setCount(count+1)}>Add 1</button>
          
          <button onClick={() => setCount(count-1)}>Decrease 1</button>

          <button onClick={() => setCount(count+10)}>Add 10</button>
          <button onClick={() => setCount(count-10)}>Decrease 10</button>

          <button onClick={() => setCount(0)}>Reset count</button>
        </div>
      </div>
  )
}

export default App
```

```js
// counter.atom.jsx
import { atom } from 'jotai'

const countAtom = atom(0)

export default countAtom
```

如你所见，它比 Recoil 还要小。

-   我们通过运行 `npm install jotai` 来安装它
    
-   然后我们声明一个具有默认值的 atom：
    

```js
const countAtom = atom(0)
```

-   在我们的组件中, 通过使用 `useAtom` 去使用它:


```js
const [count, setCount] = useAtom(countAtom)
```

真的很好，很简单!

<h3 id="zustand">Zustand</h3>

[Zusand](https://github.com/pmndrs/zustand) 是另一个为 React 构建的开源状态管理库。它的灵感来自于在 Redux 出现之前广泛使用的库 Flux，它的目标是

> “一一个小型的、快速的、非观点性的、可扩展的准系统状态管理解决方案，具有基于 hooks 的舒适 API，并且几乎没有模板”

Zusand 使用 store 的方式与 Redux 类似，但不同之处在于，在 Zusand 中，store 是一个 hook，它需要的模板要少得多。

使用 Zusand，我们的示例应用程序将如下所示：

```js
// App.js
import './App.scss'
import useStore from './store'

function App() {

  const count = useStore(state => state.count)
  const { addOne, subOne, add10, sub10, reset } = useStore(state => state)

  return (
      <div className="App">
        <p>Count is: {count}</p>

        <div>
            <button onClick={() => addOne()}>Add 1</button>
          
          <button onClick={() => subOne()}>Decrease 1</button>

          <button onClick={() => add10()}>Add 10</button>
          <button onClick={() => sub10()}>Decrease 10</button>

          <button onClick={() => reset()}>Reset count</button>
        </div>
      </div>
  )
}

export default App
```

```js
// Index.jsx (STORE)
import create from 'zustand'

const useStore = create(set => ({
  count: 0,
  addOne: () => set(state => ({count: state.count += 1})),
  subOne: () => set(state => ({count: state.count -= 1})),
  add10: () => set(state => ({count: state.count += 10})),
  sub10: () => set(state => ({count: state.count -= 10})),
  reset: () => set({count: 0})
}))

export default useStore
```

-   我们通过运行 `npm install zustand` 安装它
    
-   我们使用从 Zusand 导入的 `create` 函数创建了一个 store。在函数里我们设置了默认状态和我们将用来修改状态的函数。
    

```js
const useStore = create(set => ({
  count: 0,
  addOne: () => set(state => ({count: state.count += 1})),
  subOne: () => set(state => ({count: state.count -= 1})),
  add10: () => set(state => ({count: state.count += 10})),
  sub10: () => set(state => ({count: state.count -= 10})),
  reset: () => set({count: 0})
}))
```

-   然后在我们的组件中，我们导入刚刚创建的 store，并通过以下方式从中读取状态和修改函数：

```js
  const count = useStore(state => state.count)
  const { addOne, subOne, add10, sub10, reset } = useStore(state => state)
```

在我们的 UI 中可以像这样调用修改函数：

```js
<button onClick={() => addOne()}>Add 1</button>
```

你可以看到来自 Redux 相同概念的 Zusand，却有一个更干净、更简单的方法。

<h2 id="conclusion">结论</h2>

状态管理是前端开发中最复杂的主题之一。你可以看到有多少人试图让它以可预测和可扩展的方式，而且是以​​干净和易于使用的方式工作。

特别是在过去的几年里，出现了很多很好的工具，提供了处理状态管理的好方法。

不过，作为开发者，我们必须牢记，Redux 和其他库的创建是为了解决特定的状态管理问题，特别是在真正的大型、复杂和大量使用的应用程序中。

我认为，如果你没有遇到这些问题，真的没有必要增加额外的模板，使你的代码复杂化。即使使用那些几乎不添加样板的现代库。

React 本身是一个非常强大和可靠的库，useState、useReducer 和 useContext 等工具足以解决大多数问题。因此，我会坚持基本的东西，除非因为某些原因，基本的东西已经不够用了。

当需要更具体、更强大的状态管理库时，我认为应该在可靠性和简单性之间做出选择。

Redux 是最成熟和使用最广泛的库，它附带大量文档、在线社区以及在每个新版本中发现和解决的以前错误。

它的坏处是，作为开发者，它给我们带来了一些我们必须学习和思考的新概念。我们还需要添加相当多的代码来使其工作，而且它所增加的复杂性可能超过它所帮助解决的问题。

相反，我们之前所看到的现代库要简单得多，而且直截了当，但是它们没有得到广泛使用和测试，仍然是一种实验性的。

但就我们目前所看到的而言，其中一个或一些带头成为更广泛使用的工具似乎只是时间问题。 

就这样吧！我希望你喜欢这篇文章并学到了一些新东西。

如果你愿意，你也可以在 [linkedin](https://www.linkedin.com/in/germancocca/) 或 [twitter](https://twitter.com/CoccaGerman) 上关注我。 

干杯，下次见！
