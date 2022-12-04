> -  原文地址：[How State Works in React – Explained with Code Examples](https://www.freecodecamp.org/news/what-is-state-in-react-explained-with-examples/)
> -  原文作者：[Yogesh Chavan](https://www.freecodecamp.org/news/author/yogesh/)
> -  译者：dake0913
> -  校对者：
状态state是React中最复杂的东西，初学者和有经验的开发人员都很难理解。因此，在本文中，我们将探索React中状态的所有基础知识。

在理解状态之前，让我们先了解一些基础知识，以便稍后更容易理解状态。

## 如何用React在用户界面渲染数据

在屏幕上渲染任何东西，我们要使用`ReactDOM.render` 方法。

它的语法如下:

```plain
ReactDOM.render(element, container[, callback])
```
* `element` 元素可以是任何HTML元素,JSX或返回JSX的组件
* `container` 容器是UI上我们想要在其中呈现数据的元素
* `callback` 回调是可选的函数，我们可以传递它，它在屏幕上渲染或重新渲染时被调用
看看下面的代码：

```plain
import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

ReactDOM.render(<h1>Welcome to React!</h1>, rootElement);
```
这是一个 [代码示例](https://codesandbox.io/s/focused-shockley-oh4tn?file=/src/index.js).
在这里，我们只是向屏幕呈现一个h1元素。

要渲染多个元素，我们可以如下所示：

```plain
import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <div>
    <h1>Welcome to React!</h1>
    <p>React is awesome.</p>
  </div>,
  rootElement
);
```
这是一个[代码示例](https://codesandbox.io/s/white-hooks-dgru0?file=/src/index.js)。
如果内容变多，我们可以将JSX取出，放在一个变量中，这是渲染内容的首选方式，就像这样：

```plain
import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

const content = (
  <div>
    <h1>Welcome to React!</h1>
    <p>React is awesome.</p>
  </div>
);

ReactDOM.render(content, rootElement);
```
这是一个 [代码示例](https://codesandbox.io/s/trusting-night-5g825?file=/src/index.js)。
在这里，我们还添加了一对额外的圆括号，以正确对齐JSX并使其成为单个JSX表达式。

如果您想详细了解JSX及其各种重要特性，请[在这里查看我的文章](https://www.freecodecamp.org/news/jsx-in-react-introduction/)。

现在，让我们在屏幕上显示一个按钮和一些文本：

```plain
import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

let counter = 0;

const handleClick = () => {
  counter++;
  console.log("counter", counter);
};

const content = (
  <div>
    <button onClick={handleClick}>Increment counter</button>
    <div>Counter value is {counter}</div>
  </div>
);

ReactDOM.render(content, rootElement);
```
这是一个[代码示例](https://codesandbox.io/s/quizzical-cohen-x55p8?file=/src/index.js)。

![counter_initial](https://www.freecodecamp.org/news/content/images/2021/04/counter_initial.gif)

正如你所看到的，当我们单击按钮时，计数器`counter` 的值会增加，就像您在控制台中看到的那样。但在UI上它没有更新。

这是因为我们在加载页面时，只使用 `ReactDOM.render`  方法一次，来渲染`counter` JSX的内容。我们不会再次调用它，所以即使`counter`的值在更新，它也不会显示在UI上。让我们来解决这个问题。

```jsx
import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

let counter = 0;

const handleClick = () => {
  counter++;
  console.log("counter", counter);
  renderContent();
};

const renderContent = () => {
  const content = (
    <div>
      <button onClick={handleClick}>Increment counter</button>
      <div>Counter value is {counter}</div>
    </div>
  );

  ReactDOM.render(content, rootElement);
};

renderContent();
```

这是一个[代码示例](https://codesandbox.io/s/adoring-noether-8gsgu?file=/src/index.js)。
现在，我们在`renderContent` 函数内封装`content` JSX 和 `ReactDOM.render`方法。一旦它被定义好了，我们就调用函数在加载渲染用户界面上的内容。

注意，我们也在`renderContent` 函数内调用封装了`handleClick` 函数，所以每次我们点击按钮，`renderContent` 函数将被调用，界面内容也会更新。

![counter_updated](https://www.freecodecamp.org/news/content/images/2021/04/counter_updated.gif)

正如你所看到的，它正按照预期工作，计数器`counter` 的值正正确地显示在UI上。

你可能认为在每次单击按钮时重新呈现整个DOM的成本很高——但事实并非如此。这是因为React使用了Virtual DOM算法来检查UI上发生了什么变化，并且只重新呈现发生了变化的元素。因此，整个DOM不会再次被重新渲染。

![counter_preview](https://www.freecodecamp.org/news/content/images/2021/04/counter_preview.gif)

这是一个你可以自己尝试代码的[效果预览](https://8gsgu.csb.app/)。

正如您在HTML结构中看到的，只有计数器 `counter`  的值被重新渲染，因为它是HTML结构中唯一显示的东西。这就是React如此之快的原因，虚拟DOM使React更加有用。

但是，每次我们想要更新UI时调用`renderContent` 函数仍然是不可行的。所以React添加了“state”的概念。

## 介绍React中的State

状态允许我们管理应用程序中不断变化的数据。它被定义为一个对象，我们在其中定义键-值对，指定我们希望在应用程序中追踪的各种数据。

在React里，所有的代码在一个component组件里被定义。 

在React中创建组件的方法主要有两种：

* 类组件
* 函数组件
>现在我们将从类组件开始。在本文后面，我们将看到一种创建函数组件的方法。
你应该知道如何使用类组件以及函数组件，包括钩子。

你不应该通过React钩子直接学习函数组件，而是应该首先理解类组件，这样才容易理解基础知识。

你可以通过使用ES6类关键字和扩展React提供的`Component`类来创建一个组件，如下所示：

```jsx
import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.counter = this.state.counter + 1;

    console.log("counter", this.state.counter);
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>Increment counter</button>
        <div>Counter value is {counter}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
```

>注意组件的名称首字母要大写 (`Counter`) 。
这是一个 [代码示例](https://codesandbox.io/s/nostalgic-burnell-57fhd?file=/src/index.js)。

看看这里我们在做什么。

* 在构造函数内，首先通过传递props来调用 `super` 。
* 然后我们将状态定义为对象，将`counter` 定义为对象的属性。
* 我们还将`this`的环境绑定到`handleClick`函数因此在`handleClick`函数中我们得到了这个的正确上下文。
* 然后在`handleClick`函数中，我们更新`countor`并将其记录到控制台。
* 在`render`方法中，我们返回我们想要在UI上渲染的JSX。

![counter_mutate_state](https://www.freecodecamp.org/news/content/images/2021/04/counter_mutate_state.gif)


正如您在控制台中所看到的， `counter`正在正确地更新——但它没有在UI上更新。

这是因为我们直接将 `handleClick`  函数中的状态更新为：

```js
this.state.counter = this.state.counter + 1
```

因此React不会重新渲染组件(**直接更新状态也是一个不好的做法**)。

>永远不要在React中直接更新/改变状态，因为这是一个糟糕的做法，它会导致应用程序出现问题。另外，如果你直接更改状态，那么在状态更改时不会重新渲染组件。

## setState的语法

为了改变状态，React为我们提供了一个setState函数，允许我们更新状态的值。

`setState`函数的语法如下：

```
setState(updater, [callback])
```

* `updater` 被更新的可以是函数或对象。
* `callback`回调函数是一个可选函数，在状态成功更新后执行。

>调用 `setState` 会自动重新渲染整个组件及其所有子组件。我们不需要像前面使用`renderContent` 函数那样手动重新渲染。

## 如何使用函数更新React中的状态

让我们修改 [上面的代码示例](https://codesandbox.io/s/nostalgic-burnell-57fhd?file=/src/index.js) 来使用 `setState` 函数更新状态。

这是更新的 [代码示例](https://codesandbox.io/s/withered-dust-p3emg?file=/src/index.js)。

如果你检查更新后的 `handleClick` 函数，它看起来像这样：

```js
handleClick() {
  this.setState((prevState) => {
    return {
      counter: prevState.counter + 1
    };
  });

  console.log("counter", this.state.counter);
}
```

在这里，我们将一个函数作为 `setState` 方法的第一个参数传递，并返回一个新的状态对象，其中`counter` 在 `counter`的上一个值的基础上增加1。

我们在上面的代码中使用箭头函数，但是使用普通函数也可以。

![counter_updated_async](https://www.freecodecamp.org/news/content/images/2021/04/counter_updated_async.gif)

如果您注意到，我们正在正确地获得UI上 `counter` 的更新值。 但在控制台中,我们获取的是以前的 `counter` 值，尽管我们在调用 `this.setState` 之后添加了console.log。

>这是因为 `setState` 方法本质上是异步的。

这意味着，尽管我们调用了`setState` 来一个个地增加 `counter` ，但它没有立刻生效。这是因为我们调用 `setState` 方法时，整个组件被重新渲染 – 因此React需要使用虚拟DOM算法检查需要更改的内容，然后执行各种检查以高效更新UI。

这是你可能没办法在调用 `setState`后，马上获得 `counter` 更新的原因。

>这在React中是非常重要的，因为你会在写代码时遇到调试困难的问题。请记住`setState` 在React里是异步的。

如果您想在使用`setState` 后立即获得更新后的状态值， 你可以传递一个函数作为第二个参数，状态一更新就调用 `setState` 。

这是一个调整后的 [代码示例](https://codesandbox.io/s/jolly-dawn-65wis?file=/src/index.js)。

![counter_updated_sync](https://www.freecodecamp.org/news/content/images/2021/04/counter_updated_sync.gif)

正如你所看到的，我们在控制台中和UI上同时获得了正确的 `counter`  值。

在上面的演示中， `handleClick`方法是这样的：

```js
handleClick() {
  this.setState(
    (prevState) => {
      return {
        counter: prevState.counter + 1
      };
    },
    () => console.log("counter", this.state.counter)
  );
}
```

这里对于 `setState`  函数调用，我们传递了两个参数。第一个是返回新状态的函数，第二个是在状态更新后调用的回调函数。我们只是将更新的计数器值记录到回调函数中的控制台。

>尽管React提供了一个回调函数来立即获取更新后的状态值，但建议您只在快速测试或记录日志时使用它。

相反，React建议你使用`componentDidUpdate` 方法，这是一个React生命周期方法，看起来像这样:

```js
componentDidUpdate(prevProps, prevState) {
  if (prevState.counter !== this.state.counter) {
    // do something
    console.log("counter", this.state.counter);
  }
}
```

这是一个 [代码示例](https://codesandbox.io/s/youthful-pine-txb1o?file=/src/index.js)。

你可以在[这里](https://stackoverflow.com/questions/56501409/what-is-the-advantage-of-using-componentdidupdate-over-the-setstate-callback#answer-56502614)找到更多关于为什么使用 `componentDidUpdate` 而不是回调 `setState` 。

## 如何简化状态和方法声明

如果你在上面的代码示例中看到构造函数代码，你会看到它看起来像这样：

```js
constructor(props) {
  super(props);

  this.state = {
    counter: 0
  };

  this.handleClick = this.handleClick.bind(this);
}
```

要在 `handleClick` 事件处理程序中使用 `this` 关键字，我们必须像这样在构造函数中绑定它： `this:handleClick`


```js
this.handleClick = this.handleClick.bind(this);
```

此外，要声明状态，我们必须创建一个构造函数，在其中添加一个 `super`  调用，然后才能声明状态。
这不仅繁琐，而且使代码变得不必要地复杂。

随着事件处理程序数量的增加，`.bind` 调用的数量也会增加。我们可以使用类属性语法来避免这样做。

这是一个更新的 [代码示例](https://codesandbox.io/s/sad-bassi-7fxnl?file=/src/index.js) ，包含类属性语法。

在这里，我们像这样将状态直接移动到类内部：

```js
state = {
   counter: 0
};
```

并且， `handlerClick` 事件处理器更改为箭头函数语法如下：

```js
handleClick = () => {
  this.setState((prevState) => {
    return {
      counter: prevState.counter + 1
    };
  });
};
```

由于箭头函数没有自己的 `this`  上下文，所以它将使用上下文作为类，因此不需要使用 `.bind`  方法。
这使得代码更简单，更容易理解，因为我们不需要不停地绑定每个事件处理器。

>[create-react-app](https://github.com/facebook/create-react-app) 已经内置了对它的支持，现在就可以开始使用这个语法了。
从现在开始，我们将使用这种语法，因为它是编写React组件的更流行和首选的方法。

如果您想了解更多关于类属性语法的知识，请查看 [我的文章](https://javascript.plainenglish.io/how-to-write-clean-and-easy-to-understand-react-code-using-class-properties-syntax-5b375b0618d3?source=friends_link&sk=c170992cab9025fddb7b34b8894ea993)。

## 如何使用ES简化语法

如果你在上面的代码示例中查看 `setState` 方法的调用，它会像这样：
```js
this.setState((prevState) => {
  return {
    counter: prevState.counter + 1
  };
});
```

这么多代码，只是为了从一个函数中返回一个对象，我们用了5行代码。

我们能如下简化成一行：

```js
this.setState((prevState) => ({ counter: prevState.counter + 1 }));
```

这里，我们将对象包装在圆括号中，使其隐式返回。这是可行的，因为如果我们在箭头函数中只有一条语句，我们可以跳过return关键字和花括号，像这样：


```js
const add = (a, b) => { 
 return a + b;
}

// the above code is the same as below code:

const add = (a, b) => a + b;
```

但是由于左花括号被认为是函数体的开始，我们需要将对象包装在圆括号内，以使其正常工作。

这是一个更新的 [代码示例](https://codesandbox.io/s/zen-galois-pew17?file=/src/index.js)。

## 如何在React中使用对象作为状态更新器

在上面的代码中，我们使用一个函数作为`setState` 的第一个参数，但我们也可以传递一个对象作为参数。 

这是一个[代码示例](https://codesandbox.io/s/zealous-nobel-yvvmw?file=/src/index.js)。

![updated_name](https://www.freecodecamp.org/news/content/images/2021/04/updated_name.gif)

组件代码如下所示：

```js
class User extends React.Component {
  state = {
    name: "Mike"
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ name: value });
  };

  render() {
    const { name } = this.state;

    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Enter your name"
          value={name}
        />
        <div>Hello, {name}</div>
      </div>
    );
  }
}
```

在这里，我们添加了一个输入文本框，用户在其中输入自己的名字，当用户在文本框中输入时，它会显示在文本框的下方。

在状态中，我们初始化了name属性为 `Mike`  ，并在输入文本框中添加了一个 `onChange`  处理程序，如下所示：

```js
state = {
  name: "Mike"
};

...

<input
  type="text"
  onChange={this.handleChange}
  placeholder="Enter your name"
  value={name}
/>
```

因此，当我们在文本框中键入任何内容时，我们通过向 `setState`  函数传递一个对象来更新输入值的状态。

```js
handleChange = (event) => {
  const value = event.target.value;
  this.setState({ name: value });
}
```

> 但是我们应该使用哪种形式的`setState`呢?我们必须决定是将一个对象还是一个函数作为第一个参数传递给`setState`函数。

**答案是：**如果不需要 `prevState`  参数来查找下一个状态值，则传递一个对象。否则，将该函数作为第一个参数传递给 `setState`  。

但在传递对象作为参数时需要注意一个问题。

看看这个 [代码示例](https://codesandbox.io/s/eloquent-panini-u2ooe?file=/src/index.js).

在下面的代码中， `handleClick` 方法看起来像这样：

```js
handleClick = () => {
  const { counter } = this.state;
  this.setState({
    counter: counter + 1
  });
}
```

我们取 `counter`  的当前值然后加1。它运行良好，如下图所示：

![object_setstate_correct](https://www.freecodecamp.org/news/content/images/2021/04/object_setstate_correct.gif)

现在看看这个修改版本的 [代码示例](https://codesandbox.io/s/busy-johnson-oqvfn?file=/src/index.js) 。

我们的 `handleClick` 方法现在看起来像这样：

```js
handleClick = () => {
  this.setState({
    counter: 5
  });

  const { counter } = this.state;

  this.setState({
    counter: counter + 1
  });
}
```

在这里，我们首先将 `counter`  值设置为5，然后将其增加1。所以 `counter`  的预期值是6。我们来看看是不是这样。

![object_setstate_wrong](https://www.freecodecamp.org/news/content/images/2021/04/object_setstate_wrong.gif)

正如您所看到的，当我们第一次单击按钮时，我们期望 `counter`  值变成5，但它变成了1，并且在随后的每一次单击它都增加1。

这是因为，正如我们前面所看到的， `setState`  方法本质上是异步的。当我们调用 `setState`  时， `counter`   的值不会立即变为5，因此在下一行我们得到的 `counter`   值为0，这是我们在开始时初始化的状态。

所以当我们再次调用 `setState`  将 `counter`   加1时，它变成1，并且它只继续加1。

要解决这个问题，我们需要使用 `setState`  的更新程序语法，其中传递一个函数作为第一个参数。

这是一个[代码示例](https://codesandbox.io/s/strange-silence-qhykz?file=/src/index.js)。

在上面的示例中， `handleClick`  方法看起来是这样的：

```js
handleClick = () => {
  this.setState({
    counter: 5
  });

  this.setState((prevState) => {
    return {
      counter: prevState.counter + 1
    };
  });

  this.setState((prevState) => {
    return {
      counter: prevState.counter + 1
    };
  });
}
```

![object_setstate_updater](https://www.freecodecamp.org/news/content/images/2021/04/object_setstate_updater.gif)

如您所见，当我们第一次单击按钮时， `counter`  的值变为7。这和预期的一样，因为首先我们把它设为5，然后把它加2次1，所以它就变成了7。即使我们多次点击按钮，它仍然保持在7，因为每次点击我们都将它重置为5并增加两次。

这是因为在 `handleClick`  内部，我们调用 `setState`  将计数器值设置为5，方法是将一个对象作为 `setState`  函数的第一个参数传递给该函数。在那之后，我们调用了两个 `setState`  调用，其中我们使用函数作为第一个参数。

那么这是如何正确工作的呢?

当React遇到 `setState`  调用时，它将调度更新以更改状态，因为它是异步的。但是在完成状态更改之前，React会看到有另一个 `setState` 调用。

因此，React不会立即使用新的 `counter`  值重新呈现。相反，它合并所有的 `setState`  调用，并基于前面 `counter` 的值更新 `counter` ，因为我们已经使用了 `prevState``.counter` 去计算 `counter`。

一旦所有 `setState`  调用都成功完成，React才重新渲染组件。因此，即使有三个 `setState`  调用，React也只会重新渲染组件一次，这可以通过在 `render`  方法中添加console.log语句来确认。

>因此，需要记住的一点是，在使用对象作为 `setState`  调用的第一个参数时应该小心，因为它可能会导致不可预知的结果。使用函数作为第一个参数，可以根据前面的结果获得正确的结果。

你可能不会像我们在上面的演示中所做的那样一遍又一遍地调用 `setState`，但你可以在另一个函数中调用它，如下所示：

```js
state = {
 isLoggedIn: false
};

...

doSomethingElse = () => {
 const { isLoggedIn } = this.state;
 if(isLoggedIn) {
   // do something different 
 }
};

handleClick = () => {
  // some code
  this.setState({ isLoggedIn: true);
  doSomethingElse();
}
```

在上面的代码中，我们已经定义了一个 `isLoggedIn`  状态，并且我们有两个函数 `handleClick`  和 `doSomethingElse` 。在 `handleClick`  函数中，我们将 `isLoggedIn`  状态值更新为`true`，并立即在下一行调用 `doSomethingElse`  函数。

在 `doSomethingElse`  中你可能认为你会得到 `isLoggedIn`  状态为`true if`条件中的代码会被执行。但是它不会被执行，因为 `setState`  是异步的，状态可能不会立即更新。

这就是为什么React添加了 `componendDidUpdate`  这样的生命周期方法，以便在状态或道具更新时做一些事情。

>请注意检查您是否在下一行或下一个函数中再次使用相同的 `state`  变量，做些事来避免这些结果。

## 如何合并React中的setState调用

看看 [这个代码示例](https://codesandbox.io/s/bold-cache-zcj4u?file=/src/index.js)。

这里，我们在状态中声明了 `username` 和 `counter`  属性，如下所示:

```js
state = {
  counter: 0,
  username: ""
};
```

还如下声明了 `handleOnClick` 和 `handleOnChange` 事件处理器：

```js
handleOnClick = () => {
  this.setState((prevState) => ({
    counter: prevState.counter + 1
  }));
};

handleOnChange = (event) => {
  this.setState({
    username: event.target.value
  });
};
```

检查下面函数中 `setState` 的调用。 你能看到在 `handleOnClick` 方法里，我们只设置了`counter`  的状态，在 `handleOnChange` 方法里只设置了`username` 的状态。

所以我们不需要像这样同时设置两个状态变量的状态：

```js
this.setState((prevState) => ({
    counter: prevState.counter + 1,
    username: "somevalue"
}));
```

我们只能更新我们想要更新的那个。React会自动合并其他状态属性，所以我们不需要自己手动合并它们。

![state_merged-1](https://www.freecodecamp.org/news/content/images/2021/04/state_merged-1.gif)

正如您所看到的，我们成功地分别独立地更改了 `counter` 和 `username`。

## 如何在React的函数组件中使用状态

到目前为止，我们已经了解了如何在类组件中使用状态。现在让我们看看如何在函数组件中使用它。

函数组件与类组件类似，只是它们没有状态和生命周期方法。这就是为什么您可能听说过它们被称为无状态函数组件。

这些组件只接受道具并返回一些JSX。

函数组件使代码更短，更容易理解和测试。

它们的执行速度也快一些，因为它们没有生命周期方法。在类组件中扩展的 `React.Component`  类 也没有为React带来的额外数据。

看看这个[代码示例](https://codesandbox.io/s/sleepy-pascal-8ugh3?file=/src/index.js)。

在这里，我们从[random user generator API](https://randomuser.me/)中加载一个包含20个随机用户的列表，当组件在 `componentDidMount`  方法中加载时，如下所示：

```js
componentDidMount() {
  axios
    .get("https://randomuser.me/api/?page=0&results=20")
    .then((response) => this.setState({ users: response.data.results }))
    .catch((error) => console.log(error));
}
```

一旦我们获取了那些用户，我们会设置它为 `users`  状态，并在UI上显示它。


```jsx
{users.map((user) => (
  <User key={user.login.uuid} name={user.name} email={user.email} />
))}
```

在这里，我们将需要显示的所有数据传递给 `User`  组件。

 `User`  组件像这样：

```jsx
const User = (props) => {
  const { name, email } = props;
  const { first, last } = name;

  return (
    <div>
      <p>
        Name: {first} {last}
      </p>
      <p>Email: {email} </p>
      <hr />
    </div>
  );
};
```

**这个`User`  组件是一个函数组件。** 

函数组件是以大写字母开头并返回JSX的函数。

无论组件是类组件还是函数组件，都要记住以像 `User`  这样的大写字母开头。这就是React在使用 `<User />`等普通HTML元素时将其与普通HTML元素区别开来的原因。

如果我们使用 `<user />` ，React将检查名称为user的HTML元素。因为没有这样的HTML元素，所以您不会得到想要的输出。

在上面的 `User`  函数组件中，我们将道具传递给函数的道具参数中的组件。

所以和在类组件中不用 `this.props` 一样，我们只使用 `props` 。

我们从不在函数组件中使用 `this`  关键字，因此避免了与此绑定相关的各种问题。

因此，函数组件优先于类组件。

一旦我们有了 `props` ，我们就会使用对象解构语法来获取其中的值并显示在UI上。

## 如何在React Hooks中使用状态

从版本16.8.0开始，React引入了钩子。它们完全改变了我们在React中编写代码的方式。使用React hook，我们可以在函数组件中使用状态和生命周期方法。

>React钩子是添加了状态和生命周期方法的函数组件。
所以现在,类组件和函数组件之间没有什么区别。

它们都可以有状态和生命周期方法。

但是,反应钩子现在喜欢写反应组件,因为它们使代码更短,更容易理解。

现在,您很少会发现使用类组件编写的反应组件。

要使用React hook声明状态，我们需要使用 `useState`  钩子。

 `useState`  钩子接受一个参数，该参数是状态的初始值。

在类组件中，状态总是一个对象。但是在使用 `useState`   时，可以提供任何值作为初始值，如number, string, boolean, object, array, null等。

 `useState`  钩子返回一个数组，它的第一个值是当前状态的值。第二个值是我们将用于更新状态的函数，类似于 `setState`  方法。

让我们举一个使用状态的类组件的例子。我们将使用钩子将其转换为函数组件。

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    counter: 0
  };

  handleOnClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    return (
      <div>
        <p>Counter value is: {this.state.counter} </p>
        <button onClick={this.handleOnClick}>Increment</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

这是使用类组件写的 [代码示例](https://codesandbox.io/s/delicate-thunder-xdpri?file=/src/index.js) 。

让我们将上面的代码转换为使用钩子。

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>
        <p>Counter value is: {counter} </p>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

这是使用React钩子写的[代码示例](https://codesandbox.io/s/elegant-heyrovsky-3qco5?file=/src/index.js)。

如您所见，使用React钩子使代码更简短，更容易理解。

让我们理解一下上面的代码：

* 为了使用 `useState` 钩子，我们需要像第一行那样导入它。
* 在App组件内部，我们通过传递0作为初始值并使用解构语法来调用 `useState`  。我们将 `useState`  返回的数组值存储到 `counter`和 `setCounter`  变量中。
* 常用的约定是在用于更新状态的函数名前加上 `setCounter` 中的 `set`  关键字。
* 当单击递增按钮时，我们定义了一个内联函数，并通过传递更新的计数器值来调用 `setCounter`  函数。
* 注意，因为我们已经有了计数器的值，所以我们使用 `setCounter(counter + 1)` 来增加计数器的值。
* 由于内联on click处理程序中只有一条语句，所以不需要将代码移动到单独的函数中。不过，如果处理程序内部的代码变得复杂，您可以这样做。
如果您想了解关于useState和其他React hook的更多细节(以及示例)，请查看我的React hook介绍文章。

### Thanks for reading!

想要详细了解所有ES6+特性，包括let和const，承诺，各种承诺方法，数组和对象解构，箭头函数，异步/等待，导入和导出，以及从头开始的很多更多?

请查阅我的《掌握现代JavaScript（[Mastering Modern JavaScript](https://modernjavascript.yogeshchavan.dev/)）》一书。这本书涵盖了学习React的所有先决条件，并帮助您在JavaScript和React方面变得更好。

>在 [这里](https://www.freecodecamp.org/news/learn-modern-javascript/) 查看这本书的免费预览内容。
此外，您可以查看我的**免费**[介绍React Router](https://yogeshchavan.podia.com/react-router-introduction)课程，从零学习React Router。

想订阅 JavaScript, React, Node.js相关内容的日常更新？[在领英关注我](https://www.linkedin.com/in/yogesh-chavan97/)。

[![banner](https://gist.github.com/myogeshchavan97/98ae4f4ead57fde8d47fcf7641220b72/raw/c3e4265df4396d639a7938a83bffd570130483b1/banner.jpg)](https://bit.ly/3w0DGum)
