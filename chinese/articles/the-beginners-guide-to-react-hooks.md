> - 原文地址：[Learn React Hooks – A Beginner's Guide](https://www.freecodecamp.org/news/the-beginners-guide-to-react-hooks/)
> - 原文作者：[Victor Ikechukwu](https://www.freecodecamp.org/news/author/victor-ikechukwu/)
> - 译者：[luojiyin](https://github.com/luojiyin1987)
> - 校对者：

![Learn React Hooks – A Beginner's Guide](https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/The-Beginner-s-Guide-to-React-Hooks.png)

函数组件（Functional components）并不总是React中声明组件的首选方法。

在React 16.8版本推出之前，功能组件被视为二等公民。它们不能处理状态（state）、逻辑（logic）和许多其他的React特性，而且我们只用它们来向UI渲染非常简单的组件。

React 16.8版通过引入React Hooks解决了这些问题，它让开发者在函数组件（Functional components）中使用这些反应特性。

在这篇文章中，你将学习:

- 什么是React Hooks
- 四个常见的React Hooks，并举例说明如何在你的应用程序中编写它们
- 最后，我们将看看如何编写你自己的自定义React Hooks

## 什么是 React Hooks?

Hooks 是 React 16.8 版本中引入的内置 React 函数。它们允许你在函数组件（Functional components）中使用React库的功能，如生命周期方法（lifecycle methods）、状态（state）和上下文（context ），而不必担心将其重写为一个类（class）。

每个React Hook名称的前缀是 `"use"` 一词。例如，`useState`或`useEffect`。选择这种格式是因为Hooks让开发者使用React库的特殊功能。所以你是在`use` React库的那个特殊功能。

## 为什么使用React Hooks？

许多开发者对学习React Hooks持怀疑态度。但你不应该这样。以下是你应该开始使用React Hooks的几个原因:

### React中的类可能是相当混乱的

类是正确学习React的一个障碍。为了使用它们，你需要了解`this`关键字是如何工作的。你还需要不断记住绑定事件处理程序，以及在React中使用类时遇到的其他多余的方法。

### 类组件（Classes components）部分很复杂，可能难以理解

类组件通常很大，并试图进行许多操作。从长远来看，它们变得难以理解。

Hooks 解决了这个问题，它允许你把大的组件分离成各种小的功能，而不是把所有的逻辑都强加到一个单一的组件中。

### Hooks 的组件更短，可读性更好

类组件带有大量的模板代码。考虑一下下面的计数器组件:

```javascript
class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
         count: 1,
        }
    }
    render() {
        return (
            <div>
                The Current Count: {this.state.count}
                <div>
                <button onClick={this.setState({ count: this.state.count - 1 })}>
                add
                </button>
                <button onClick={this.setState({ count: this.state.count + 1 })}>
                subtract
                </button>
                </div>
            </div>
    );
    }
}
```

下面是使用函数组件（functional component）和React Hooks的等效代码:

```javascript
function Counter  ()  {
    const [count, setCount] = useState(1);
    return (
        <div>
            The Current Count: {this.state.count}
            <div>
                <button onClick={() => setCount(count + 1)}>add</button>
                <button onClick={() => setCount(count - 1)}>subtract</button>
            </div>
        </div>
    );
};
```

请注意，类组件要复杂得多。你需要一个类来扩展React，一个构造函数来初始化状态，而且你需要到处引用`this` 关键字。

使用函数组件（functional components）可以消除很多这些，所以我们的代码变得更短，更容易阅读和维护。

## 使用React Hooks的规则

在使用React Hooks时，有几个规则需要遵守:

- **只在组件的顶层调用 Hooks**: 你不应该在循环、条件或嵌套函数中使用Hooks。相反，总是在你的 React 函数的顶层使用 Hooks，在任何 `return` 关键字之前。
- **只从React函数中调用Hooks**: 不要从普通的JavaScript函数中调用Hooks。你可以:  
    ✅ 从React 函数组件（functional components）中调用Hooks。  
    ✅ 从自定义Hooks中调用Hooks。

## 最常见的 React Hooks

到目前为止，React有10个内置 hooks。让我们看看四个最常见的 hooks:

- `useState`
- `useEffect`
- `useContext`
- `useReducer`

### useState Hook

useState Hook允许你在函数组件（functional components）内创建、更新和操作状态。

React有一个状态的概念，它是持有我们的组件所依赖的数据的变量，并可能随着时间的推移而改变。每当这些变量发生变化时，React就会用状态变量的当前值重新渲染DOM中的组件来更新UI。

这个钩子需要一个可选的参数：一个状态（state）的初始值。然后它返回一个包含两个值的数组:

- state 变量
- 一个用于更新状态的函数

让我们以一个计数器组件为例来看看:

要使用一个 Hook，第一步是在文件的顶部导入 Hook:

```javascript
import { useState } from "react";
```

然后，用一个值初始化Hook。由于它返回一个数组，你可以使用数组析构来访问数组中的各个项目，就像这样:

```javascript
const [count, setCount] = useState(0);
```

有了这个，该组件的代码将是:

```javascript
import { useState } from "react";

function Counter() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    return (
        <div>
        Current Cart Count: {count}
            <div>
            <button onClick={() => setCount(count - 1)}>Add to cart</button>
            <button onClick={() => setCount(count + 1)}>Remove from cart</button>
            </div>
        </div>
    );
}
```

下面是该组件渲染后的样子。

![Counter](https://www.freecodecamp.org/news/content/images/2022/02/Counter.gif)

通过点击 **Add to cart** 或 **Remove from cart** 按钮，状态变量计数的值将发生变化，组件将以更新的状态值重新呈现。

### useEffect Hook

如果你熟悉React类的生命周期方法（lifecycle methods），你可以把 `useEffect`Hook 看作是`componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 生命周期方法在一个函数中的结合。它让你在函数组件（functional components）中复制React的生命周期方法。

`useEffect` Hook 让你在函数组件（functional components）中执行副作用（side effects）。副作用是可以与组件的主要操作一起运行的动作，如外部API交互、修改 state变量（state variables）和数据获取。

The `useEffect` hook 接收两个参数:

- 一个包含要运行的代码的函数
- 一个包含组件范围（props, context, and state variables）数值列表的数组，被称为依赖数组，它告诉Hook在每次更新其数值时都要运行。如果不提供，Hook将在每次渲染后运行。

下面是一个使用Hook的例子:

```javascript
import { useState, useEffect } from "react";
function Counter() {
    // Declare state variables
    const [count, setCount] = useState(0);
    const [product, setProduct] = useState("Eggs");
    useEffect(() => {
     console.log(`${product} will rule the world!`);
    });
    return (
        <div>
        Current {product}'s count: {count}
            <div>
                <button onClick={() => setCount(count + 1)}>Add to cart</button>
                <button onClick={() => setCount(count - 1)}>Remove from cart</button>
                Change Product:{" "}
                <input type="text" onChange={(e) => setProduct(e.target.value)} />
            </div>
        </div>
    );
}
```

在这个例子中，该效果将在每次状态更新后运行。

![Effect-default](https://www.freecodecamp.org/news/content/images/2022/02/Effect-default.gif)

![wAAAAAAAAIdjI8JkO231psw0iuv3rz7D4biSJbmiabqyrbuVgAAOw==](data:image/gif;base64,R0lGODlhGAAYAHAAACH5BAEAAAEALAAAAAAYABgAgZmZmf///wAAAAAAAAIdjI8JkO231psw0iuv3rz7D4biSJbmiabqyrbuVgAAOw==)

#### 如何有条件地启动一个 Effect

要想在某些值发生变化时才运行Hook，可以将变量作为依赖关系传入数组:

```javascript
useEffect(() => {
 console.log(`${product} will rule the world!`);
}, [product]); // Only re-run the effect if the value of product changes
```

有了这个变化，Hook将只在第一次渲染时运行，并且当产品的价格发生变化时。

![Effect-dependency-array](https://www.freecodecamp.org/news/content/images/2022/02/Effect-dependency-array.gif)

#### 如何在第一次渲染时运行一次

如果你想让一个 Effect 在第一次渲染时只运行一次，比如在组件第一次渲染时进行API调用，你可以像这样传递一个空数组作为其依赖。:

```javascript
useEffect(() => {
 console.log("This runs once on first render");
}, []);
```

通过提供一个空数组，它告诉Hook听从零状态变化（zero state changes），所以它只运行一次。

### useContext Hook

`useContext` Hook与 React Context API 一起工作。它为你提供了一种方法，使整个应用程序中的所有组件都能访问特定的数据，无论它们的嵌套有多深。

React有一个单向的数据流，数据只能从父代传递到子代。要把数据（如state）从父组件传给子组件，你需要根据子组件的嵌套深度，把它作为一个 prop，通过不同的级别向下传递。

对于诸如用户的首选语言、主题或认证用户的属性等数据，必须手动地在组件树上传递它们是很乏味的。

React的Context API和 `useContext` Hook 使得在应用程序的所有组件中传递数据变得容易。

它接受一个用`React.createContext`创建的上下文对象，并像这样返回当前的上下文:

```javascript
const value = useContext(SomeContext);
```

让我们来看看Hook是如何工作的一个例子:

首先，创建一个使用Hook的上下文（context）。例如，这里有一个UserContext来获取当前用户的值:

```javascript
import React from "react";
// some mock context values
const users = [
{
    name: "Harry Potter",
    occupation: "Wizard",
},
{
    name: "Kent Clark",
    occupation: "Super hero",
},
];

export const UserContext = React.createContext(users);
```

每个上下文（context）都有一个包装器提供者（Provider wrapper），它允许其子组件订阅上下文（context）的变化，并通过一个 值prop 传递上下文的值。

如果提供者的 值prop（value prop）被更新，其消费的子组件将以新的上下文值重新渲染。

```javascript
function Users() {
return (
    <UserContext.Provider value={users}>
    <UserProfile />
    </UserContext.Provider>
);
}
```

在这个例子中，`UserProfile` 被作为上下文的消费组件（ consuming component）。

```javascript
import React, { useContext } from "react";
import { UserContext } from "./App";

export function UserProfile() {
    const users = useContext(UserContext);
    return (
        <div>
            {users.map((user) => (
            <li>
            I am {user.name} and I am a {user.occupation}!
            </li>
            ))}
        </div>
    );
}
```

这将显示当前用户的属性:

![zrquu592NphAAAAAElFTkSuQmCC](data:image/png;base64,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AMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAADBGiAQAAAAAwRIgGAAAAAMAQIRoAAAAAAEOEaAAAAAAAjIj8/zrquu592NphAAAAAElFTkSuQmCC)

### useReducer Hook

`useReducer` Hooks 是 `useState` Hooks 的一个替代品。不同的是，它允许更复杂的逻辑和涉及多个子值的状态更新。

与`useState'类似，`useReducer'允许你创建 类似状态（state-like）的变量，每当它们发生变化时，都会导致用户界面的更新。

这个Hook接受2个参数：一个reducer函数和一个初始状态（initial state）。

`useReducer(reducer, initialState);`

它返回一个由两个值组成的数组，这两个值可以被解构为状态的当前值和一个调用函数。

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

让我们了解一下它的参数和返回值:

- **state**: 这是传递给 Hook 的 initialState 的当前值。
- **reducer**: reducer 是一个接受状态和动作的函数。基于这些参数，它决定了状态的值将如何变化。
- **dispatch**: 调用函数是我们将动作传递给 reducer函数。它分配动作以用于更新状态。

通常情况下，我们通过switch语句遍历我们在应用程序中的动作类型，以确定状态值将如何变化。这就是Hook更新其状态值的方式。

```javascript
function reducer(state, action) {
    switch (action.type) {
        case "CASE_1":
        return {
         updatedState,
        };
        case "CASE_2":
        return {
         updatedState,
        };
        default:
         return state;
    }
}
```

dispatch function 通常以下列格式派发一个对象:

```javascript
dispatch({ type: "ACTION_TYPE", payload: optionalArguments });
```

其中type是动作的描述，payload是你要传递给reducer的参数。

## 如何创建自定义钩子

自定义 Hook 的概念是通过利用已有的React Hook，将常用的组件逻辑从UI中提取到JavaScript函数中。这可以帮助你防止代码重复，并让你在多个组件中使这些逻辑可以重复使用。

让我们看看一个自定义 Hook 的例子，它将从我们传递给它的任何有效的API URL返回一个响应。

```javascript
//useFetch.js
import { useState, useEffect } from "react";

export function useFetch(url) {
 //values
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    useEffect(() => {
        fetch(url)
        .then(res => {
            if (!res.ok) {
            throw Error("something wrong, çould not connect to resource");
        }
        setData(res.json());
        })
        .then(() => {
         setError("");
        })
        .catch( error => {
            console.warn(`sorry an error occurred, due to ${error.message} `);
            setData(null);
            setError(error.message);
        });
    }, [url]);
    return [data, error];
}
```

现在，你可以在你的应用程序中的任何地方使用这种逻辑，只需导入该函数并将API路径作为参数传递，而不是从头开始编写。

## 结语

我希望你能看到React Hooks是多么有用。它们可以让你快速创建有效的组件，而不用担心类组件所带来的麻烦。

从让你专注于写你的主要代码到允许你创建你自己的自定义Hooks......React Hooks是如此的酷！我很高兴你能自己尝试它们。我很高兴你能亲自尝试它们。

如果你觉得这篇文章有帮助，请与你的朋友和网络分享。另外，欢迎在 [Twitter](https://twitter.com/Victor_codejs) 和我的 [博客](https://vickyikechukwu.hashnode.dev/) 上与我联系，我在那里分享了大量的免费教育文章和资源。

谢谢你的阅读，并祝你编程愉快!
