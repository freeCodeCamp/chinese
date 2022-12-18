> -  原文地址：[Learn Redux by Making a Counter Application](https://www.freecodecamp.org/news/learn-redux-by-making-a-counter-application/)
> -  原文作者：[Kayode, Kolade Christopher](https://www.freecodecamp.org/news/author/kayode/)
> -  译者：Humilitas
> -  校对者：

![Learn Redux by Making a Counter Application](https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/reduxpic.png)

Redux 是前端应用的状态管理库。开发者通常会通过 react-redux 包来使用它，不过它也可以在任意前端框架或库中单独使用，如 Vanilla JavaScript。

刚接触 Redux 可能会被吓到，你可能需要一段时间才能适应它，而且可能最终要翻看以前的代码才能找到解决问题的办法。

常遭人诟病的是，Redux 需要使用很多样板代码来管理应用状态。确实如此——在小型应用中使用 Redux 犹如拿大炮打蚂蚁。在 React 项目中，还有其他可用方案，如属性（prop）钻取和上下文（context）；Vue项目中可以使用 VueX；Angular 项目中可以使用 NGRX。

在 React 应用中，Redux 解决的主要问题是，将应用的所有状态保存在一个全局的 store 中，而不是通过（单向的）属性传递来管理状态。这样就可以在任意需要的地方访问到全局状态了，非常方便！

本文会教你使用 Redux 实现一个 React 计数器应用，让你有足够的基础知识在项目中使用 Redux。

## 项目设置

首先，运行 `npm i redux react-redux` 命令，安装 redux 和 react-redux。Redux 是独立的包，react-redux 则提供了一些方便使用的钩子（hook）。

## 创建目录和文件

接下来，创建 action 和 reducer。顾名思义，action 就是决定要干什么的对象。另一方面，reducer 会检查执行了哪个 action 并根据 action 更新 state，它接收 state 和 action 作为参数。

我喜欢创建一个名为 `Redux` 的目录，再在其中创建创建 actions 和 reducers 目录，分别保存 action 和 reducer 文件。

在 reducers 目录中创建 `counterReducer.js` 文件。很多人通常会使用 switch 语句来实现 reducer，不过你也可以使用 if 语句。示例中会使用 switch。

所以，在 `counterReducer.js` 中写入以下代码：

```js
// src/Redux/reducers/counterReducer.js
const counterReducer = (state = 1, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};
export default counterReducer;
```

这里我将 state 初始值硬编码为 1，你也可以选择从 0 开始计数。

在 switch 语句中，`INCREMENT` 表示让计数器加 1，`DECREMENT` 表示让计数器减 1，`RESET` 表示将计数器重置为 0。

按照惯例会将 action 的类型（action.type）全部大写，但不作强制要求——大小写都行。需要把 counterReducer 导出，以便在其他文件中使用它。

## 加入虚拟的身份验证

为计数器应用添加虚拟的身份验证，让应用功能更进一步。我会在那里向你展示一个关于我的小秘密。所以，除了 `counterReducer`，还要创建一个 `authReducer`，其代码如下：

```javascript
// src/Redux/reducers/authReducer.js
const authReducer = (state = false, action) => {
  switch (action.type) {
    case "LOG_IN":
      return true;
    case "LOG_OUT":
      return false;
    default:
      return state;
  }
};
export default authReducer;
```

在 `authReducer` 中，state 被初始化为 false，`LOG_IN` 会将它设置为 true，`LOG_OUT` 会将它设置为 false。

## 如何使用 `combineReducer` 辅助函数

因为有多个 reducer，所以需要引入 Redux 提供的 `combineReducer` 辅助函数。这个函数可以将多个 reducer 合并成单个 reducer，以便传入 `createStore` API。不必为不了解 `createStore` API 而困惑——我稍后会介绍。

`combineReducer` 使用方式如下：

`combineReducer({reducer-a, reducer-b, reducer-c})`

在 reducer 目录中创建 `index` 文件（译注：文中提及的默认都是 JavaScript 文件，此处指的是 `index.js`），引入 `combineReducer` 和 reducer，并把这些 reducer 组合在一起。

其代码如下：

```js
// src/Redux/reducers/index.js
import counterReducer from "./counterReducer";
import authReducer from "./authReducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    auth: authReducer,
});
export default allReducers;
```

## 如何创建全局 Store

接下来要做的是创建一个 store，我喜欢在 React 的 `index` 文件中创建它。

需要先从 Redux 中引入 `createStore` API：

`import { createStore } from "redux";`

还需要引入已经组合好的 reducer，然后就可以使用它们来创建 store 了。

为了让我们的计数器功能可用，必须把 Redux 连接到应用中。

在 index 文件里，首先从 react-redux 引入 `Provider`，并用它包裹整个组件树。Provider 将全局的 state 连接到应用中。`Provider` 接收一个名为 store 的参数，我们在其中传入之前创建的 store。

index 文件的代码如下：

```js
// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./redux/reducers";
import { Provider } from "react-redux";

// 创建 store
const store = createStore(
  allReducers,
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

## 如何定义 Action

为了实现增加计数、减少计数、登入、登出，我们必须回到 actions 目录，定义相应的 action，并将它们导出。dispatch 函数可以执行我们定义的 action。

我在 reducer 文件中实现了 `INCREMENT`、`DECREMENT`、`RESET`、`LOG_IN` 和 `LOG_OUT` action 的逻辑。actions 目录中的 index 文件里要以同样的标识符（即 `type`）来使用它们。

actions 目录中，index 文件的代码如下：

```js
// src/Redux/actions/index.js
export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};

export const logIn = () => {
  return {
    type: "LOG_IN",
  };
};

export const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

```

## 如何获取 Reducer 以及 Dispatch Action

从 `react-redux` 中引入 `useSelector`（在其中可以访问整个 state），以便获取 `counterReducer`。为了看到我之前说过的关于我的小秘密，我们还需要获取 `authReducer`。

我会在 App.js 文件中操作：

```js
import { useSelector } from "react-redux";
```

我们需要引入定义好的 action，并从 react-redux 引入 `useDispatch` 钩子，以便 dispatch action。

```js
import { useDispatch } from "react-redux";
```

现在 `useDispatch` 钩子和其它东西都是可用的，我们需要设置“增加”、“减少”、“重置”、“登入”和“登出”按钮。

需要为每个按钮绑定点击事件处理程序，来 dispatch 相应的 action。现在 app.js 的完整代码如下：

```js
// src/App.js
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
  logIn,
  logOut,
} from "./redux/actions/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>
         Hello World <br /> A little Redux Project. YaaY!
      </h1>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>

      <h2>For Logged in users only</h2>
      <p>Log in to see a secret about me</p>
      <button onClick={() => dispatch(logIn())}>Login</button>
      <button onClick={() => dispatch(logOut())}>Logout</button>
      {auth ? (
        <div>
          <p>
            I don't know more than 50% of redux. But if you know 50% of it, you're like a Superman.
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
```

最终结果如下：
![redux](https://www.freecodecamp.org/news/content/images/2021/06/redux.gif)

希望你能找到那个关于我的小秘密。

## 总结

感谢你的阅读，希望你通过本文能够对 Redux 有基本的了解，进而使用它开发一些自己的东西。

想和我联系的话，可以关注我的 [Twitter](http://twitter.com/koladechris)，我经常会在上面讨论编码以及 web 开发相关的话题。
