> -   原文地址：[The React TypeScript Cheatsheet – How To Set Up Types on Hooks React TypeScript 清单 – 如何在 给 Hooks 设置类型 🚜](https://www.freecodecamp.org/news/react-typescript-how-to-set-up-types-on-hooks/)
> -   原文作者：Ibrahima Ndaw
> -   译者：@nsuedu
> -   校对者：

![The React TypeScript Cheatsheet ](https://www.freecodecamp.org/news/content/images/size/w2000/2020/08/cover.png)

**TypeScript 可以对代码进行静态类型检查，以使其更加健壮和易于理解**。

在本指南中，我将向你展示如何在 React hooks(useState，useContext，useCallback...)上设置 TypeScript 类型

- [在 useState 上设置类型](#在-usestate-上设置类型)
- [在 useRef 上设置类型](#在-useref-上设置类型)
- [在 useContext 上设置类型](#在-usecontext-上设置类型)
- [在 useReducer 上设置类型](#在-usereducer-上设置类型)
- [在 useMemo 上设置类型](#在-usememo-上设置类型)
- [在 useCallback 上设置类型](#在-usecallback-上设置类型)

让我们开始吧.

## 在 useState 上设置类型

[`useState`][1] hook 允许你在 React 中管理状态。 相当于 Class 组件中的`this.state`

```jsx
import * as React from 'react';

export const App: React.FC = () => {
    const [counter, setCounter] = React.useState < number > 0;

    return (
        <div className="App">
            <h1>Result: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
        </div>
    );
};
```

要在`useState` hook 上设置类型，你需要将状态类型传递给`<>`。如果你没有初始状态, 可以使用联合类型`<number | null>`

## 在 useRef 上设置类型

[`useRef`][2]钩子返回一个可变的 ref 对象，该对象允许你访问 DOM 元素

```jsx
import * as React from 'react';

export const App: React.FC = () => {
    const myRef = (React.useRef < HTMLElement) | (null > null);

    return (
        <main className="App" ref={myRef}>
            <h1>My title</h1>
        </main>
    );
};
```

如你所见，`useRef`接收类型的方式与`useState`相同。 您只需要将其传递到`<>`。如果有多个类型，也可以使用联合类型

## 在 useContext 上设置类型

[`useContext`][3]是一个钩子，允许你在 React 中访问和使用给定的 Context。

```jsx
import * as React from "react";

interface IArticle {
  id: number
  title: string
}

const ArticleContext = React.createContext<IArticle[] | []>([]);

const ArticleProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [articles, setArticles] = React.useState<IArticle[] | []>([
    { id: 1, title: "post 1" },
    { id: 2, title: "post 2" }
  ]);

  return (
    <ArticleContext.Provider value={{ articles }}>
      {children}
    </ArticleContext.Provider>
  );
}

const ShowArticles: React.FC = () => {
  const { articles } = React.useContext<IArticle[]>(ArticleContext);

  return (
    <div>
      {articles.map((article: IArticle) => (
        <p key={article.id}>{article.title}</p>
      ))}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ArticleProvider>
      <h1>My title</h1>
      <ShowArticles />
    </ArticleProvider>
  );
}

```

1. 声明`IArticle`接口作为 Context 的类型，
2. 使用`createContext()`方法来创建新的 Context，然后使用`[]`作为初始状态。 如果需要，还可以将`null`用作初始状态。
3. 在`ShowArticles`组件中获取 Context, 并在`useContext`上将`IArticle`类型的数组作为类型。

## 在 useReducer 上设置类型

[`useReducer`][4]钩子可帮助你管理更复杂的状态。 它是`useState`的替代方法-但请记住它们是不同的。

```jsx
import * as React from "react";

enum ActionType {
  INCREMENT_COUNTER = "INCREMENT_COUNTER",
  DECREMENT_COUNTER = "DECREMENT_COUNTER"
}

interface IReducer {
  type: ActionType;
  count: number;
}

interface ICounter {
  result: number;
}

const initialState: ICounter = {
  result: 0
};

const countValue: number = 1;

const reducer: React.Reducer<ICounter, IReducer> = (state, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_COUNTER:
      return { result: state.result + action.count };
    case ActionType.DECREMENT_COUNTER:
      return { result: state.result - action.count };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = React.useReducer<React.Reducer<ICounter, IReducer>>(
    reducer,
    initialState
  );

  return (
    <div className="App">
      <h1>Result: {state.result}</h1>
      <button
        onClick={() =>
          dispatch({ type: ActionType.INCREMENT_COUNTER, count: countValue })
        }> +
      </button>
      <button
        onClick={() =>
          dispatch({ type: ActionType.DECREMENT_COUNTER, count: countValue })
        }> -
      </button>
    </div>
  );
}

```

我们首先声明 计数器需要执行哪些操作(将这些操作声明为一个个常量)。 接下来，我们分别为
reducer 函数和计数器状态设置类型

在上面的代码中，`React.Reducer`需要两个参数

-   一个`ICounter`类型的`state`
-   一个`IReducer`类型的`action`。

然后就可以开始实现计数器了。

`useReducer`钩子接收 reducer 函数和一个初始状态作为参数，并返回两个元素：计数器的状态和`dispatch`。

要为`ueReducer`返回的值设置类型，只需将数据类型传递到`<>`。

最后，计数器就可以通过`useReducer`递增或递减了。

## 在 useMemo 上设置类型

[`useMemo`][5]钩子可以记住给定函数的输出,它返回一个记忆值

> 把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。
> 记住，传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo

```jsx
const memoizedValue =
    React.useMemo <
    string >
    (() => {
        computeExpensiveValue(a, b);
    },
    [a, b]);
```

要在 `useMemo` 上设置类型，只需将要记住的数据类型传递到`<>`中。 在上面的代码中，该钩子约定了返回值是一个字符串。

## 在 useCallback 上设置类型

[`useCallback`][6] 钩子可让你记住功能，以防止不必要的重新渲染。 它返回一个已记忆的回调。

> 返回一个 memoized 回调函数。
> 把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 shouldComponentUpdate）的子组件时，它将非常有用。
> useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。

```jsx
type CallbackType = (...args: string[]) => void;

const memoizedCallback =
    React.useCallback <
    CallbackType >
    (() => {
        doSomething(a, b);
    },
    [a, b]);
```

在这里，我们声明了 `CallbackType` 作为 `useCallback`的返回值的类型。

`CallbackType` 接收`string`类型的参数，并应返回 `void`类型的值。

接下来，我们在 `useCallback` 上设置该类型-如果将错误的类型传递给回调或依赖项数组，TypeScript 则会告诉你。

谢谢阅读。

[1]: https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate
[2]: https://zh-hans.reactjs.org/docs/hooks-reference.html#useref
[3]: https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext
[4]: https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer
[5]: https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo
[6]: https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback
