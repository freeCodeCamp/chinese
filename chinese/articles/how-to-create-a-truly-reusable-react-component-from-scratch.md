> -  原文地址：[How to Create a Truly Reusable React Component from Scratch](https://www.freecodecamp.org/news/how-to-create-a-truly-reusable-react-component-from-scratch/)
> -  原文作者：[Yogesh Chavan](https://www.freecodecamp.org/news/author/yogesh/)
> -  译者：Humilitas
> -  校对者：

![How to Create a Truly Reusable React Component from Scratch](https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/pexels-sarah-chai-7262760.jpg)

在这个教程中，我们会构建一个 React 应用，并学习如何从头开始构建一个可重用的自动建议组件。

这个应用能让用户在一个国家列表中搜索某个国家，它会根据用户输入的内容在输入框下面展示建议。

通过构建这个应用，你将学到：

- 如何创建可重用的组件
- 如何使用 `useRef` hook 实现自动建议
- 如何创建自定义的可重用 hook
- 如何高效执行搜索

以及更多其他内容。

你可以在[这里](https://react-autosuggestion-app.netlify.app/)查看这个应用的在线示例。

下图是自动建议组件的功能演示。

![](https://www.freecodecamp.org/news/content/images/2021/08/suggestion_demo.gif)

开始构建应用吧。

## 初始化项目

我们使用 create-react-app 来初始化项目。

构建组件时会用到 React Hooks 语法，如果你对它不太了解，可以查看[这篇文章](https://levelup.gitconnected.com/an-introduction-to-react-hooks-50281fd961fe?source=friends_link&sk=89baff89ec8bc637e7c13b7554904e54)。

执行以下命令，新建一个 React 项目：

```js
npx create-react-app react-autosuggestion-app
```

项目创建完成后，删除 `src` 文件夹中的所有文件，并在其中新建 `index.js`、`App.js` 和 `styles.css` 文件。

接着在 `src` 文件夹中创建 `components` 和 `custom-hooks` 文件夹。

在终端或命令行中执行以下命令，安装必要的依赖：

```js
yarn add axios@0.21.1 lodash@4.17.21 react-bootstrap@1.6.1 bootstrap@5.1.0
```

安装完成之后，打开 `src/styles.css` 文件，并写入[这些内容](https://github.com/myogeshchavan97/react-autosuggestion-app/blob/master/src/styles.css)。

## 构建初始页面

在 `public` 文件夹中新建 `countries.json` 文件，并写入[这些内容](https://github.com/myogeshchavan97/react-autosuggestion-app/blob/master/public/countries.json)。

在 `components` 文件夹中新建 `AutoComplete.js` 文件，并写入以下代码：

```js
import React from 'react';

function AutoComplete({ isVisible, suggestions, handleSuggestionClick }) {
  return (
    <div className={`${isVisible ? 'show suggestion-box' : 'suggestion-box'}`}>
      <ul>
        {suggestions.map((country, index) => (
          <li key={index} onClick={() => handleSuggestionClick(country)}>
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AutoComplete;
```

每当用户在输入框中输入一些内容的时候，这个组件就会为其展示建议。

在 `custom-hooks` 文件夹中新建 `useOutsideClick.js` 文件，写入以下代码：

```js
import { useState, useRef, useEffect } from 'react';

const useOutsideClick = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const handleOutsideClick = () => {
    if (ref.current) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return [ref, isVisible, setIsVisible];
};

export default useOutsideClick;
```

我们在这里创建了一个自定义的 hook，用来控制建议信息的显示/隐藏。

我们将 `isVisible` 的初始值设为 `false`，默认隐藏建议信息：

```js
const [isVisible, setIsVisible] = useState(false);
```

接着声明了一个 ref：

```js
const ref = useRef();
```

我们的自定义 hook 将这个 `ref` 和 `isVisible` 以及 `setIsVisible` 一起返回：

```js
return [ref, isVisible, setIsVisible];
```

在使用了 `useOutsideClick` hook 的组件内部，可以把这个 ref 赋值给对应的建议框。所以如果表单中存在多个输入框，每个输入框都会有其对应的建议框，可以独立地控制显示或隐藏（可以参考后文的#[如何使用这个可重用组件](#如何使用这个可重用组件)）。

在 `handleOutsideClick` 函数中，有以下代码：

```js
const handleOutsideClick = () => {
  if (ref.current) {
    setIsVisible(false);
  }
};
```

这里检查了 `ref.current`，因为我们希望只在建议框的 ref 可用的情况下才在这里调用 `setIsVisible` 函数，而不是每次点击页面都调用。

接着为 `document` 的 `click` 事件增加了事件处理函数 `handleOutsideClick`：

```js
useEffect(() => {
  document.addEventListener('click', handleOutsideClick);
  return () => {
    document.removeEventListener('click', handleOutsideClick);
  };
}, []);
```

我们在 `useEffect` hook 返回了一个函数，以便在组件卸载的时候移除事件处理函数。

## 如何创建可重用的 React 组件

在 `components` 文件夹中新建 `InputControl.js` 文件，写入以下代码：

```js
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Form } from 'react-bootstrap';
import AutoComplete from './AutoComplete';
import useOutsideClick from '../custom-hooks/useOutsideClick';

const InputControl = ({ name, label, placeholder }) => {
  const [documentRef, isVisible, setIsVisible] = useOutsideClick();
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const ref = useRef();

  useEffect(() => {
    ref.current = _.debounce(processRequest, 300);
  }, []);

  function processRequest(searchValue) {
    axios
      .get('/countries.json')
      .then((response) => {
        const countries = response.data;
        const result = countries.filter((country) =>
          country.toLowerCase().includes(searchValue.toLowerCase())
        );
        setSuggestions(result);
        if (result.length > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
        setErrorMsg('');
      })
      .catch(() => setErrorMsg('Something went wrong. Try again later'));
  }

  function handleSearch(event) {
    event.preventDefault();
    const { value } = event.target;
    setSearchTerm(value);
    ref.current(value);
  }

  function handleSuggestionClick(countryValue) {
    setSelectedCountry(countryValue);
    setIsVisible(false);
  }

  return (
    <Form.Group controlId="searchTerm">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        className="input-control"
        type="text"
        value={searchTerm}
        name={name}
        onChange={handleSearch}
        autoComplete="off"
        placeholder={placeholder}
      />
      <div ref={documentRef}>
        {isVisible && (
          <AutoComplete
            isVisible={isVisible}
            suggestions={suggestions}
            handleSuggestionClick={handleSuggestionClick}
          />
        )}
      </div>
      {selectedCountry && (
        <div className="selected-country">
          Your selected country: {selectedCountry}
        </div>
      )}
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
    </Form.Group>
  );
};

export default InputControl;
```

我们创建了一个可重用组件，它包含搜索和建议的功能。

我们用到了 `useOutsideClick` hook：

```js
const [documentRef, isVisible, setIsVisible] = useOutsideClick();
```

我们把这个 hook 返回的 ref 保存在 `documentRef` 变量中。每当用户在文本框中输入内容的时候，我们都会通过一个 API 调用来获取符合搜索条件的国家列表。

为了避免在输入过程中产生不必要的 API 调用，我们会用到 [lodash](https://lodash.com/) 的 debounce 方法（因为监听了每次输入都会触发的 `change` 事件，如果不使用 debounce 处理则每输入一个字符都会产生一次 API 调用）。它使得我们的应用只在用户停止输入 300 毫秒之后才调用 API：

```js
ref.current = _.debounce(processRequest, 300);
```

`_.debounce` 函数返回一个函数，我们将它保存在 `ref.current` 变量中。我们会在用户停止输入 300 毫秒之后调用 processRequest 函数。

我们在这里使用 ref 来保存这个函数，而不是使用普通的变量，是为了只在组件挂载的时候执行一次初始化。（每当组件由于 state 或 prop 发生变化而重新渲染时，普通变量的值都会丢失。）

在 `handleSearch` 函数内部，我们以用户输入的值作为参数调用保存在 `ref.current` 中的函数。

当我们调用保存在 `ref.current` 中的函数时，`processRequest` 函数会在背后执行。（考虑到 [debounce](https://www.lodashjs.com/docs/lodash.debounce) 函数的作用，并非每次调用 `ref.current` 都一定对应着一次 `processRequest` 调用。）

`processRequest` 函数会自动接收到我们传递给 `ref.current` 函数的参数。

在 `processRequest` 函数内部，我们发起了一个 API 调用来获取国家列表。

```js
function processRequest(searchValue) {
  axios
    .get('/countries.json')
    .then((response) => {
      const countries = response.data;
      const result = countries.filter((country) =>
        country.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSuggestions(result);
      if (result.length > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setErrorMsg('');
    })
    .catch(() => setErrorMsg('Something went wrong. Try again later'));
}
```

得到 API 返回的响应数据后，使用数组的 filter 方法过滤出与搜索条件相匹配的国家。

接着使用 `setSuggestions(result)` 方法更新表示建议信息的 state。

再接下来，检查结果数组的长度（length），判断是否要展示建议。

这个组件返回的 JSX 如下：

```js
return (
  <Form.Group controlId="searchTerm">
    <Form.Label>{label}</Form.Label>
    <Form.Control
      className="input-control"
      type="text"
      value={searchTerm}
      name={name}
      onChange={handleSearch}
      autoComplete="off"
      placeholder={placeholder}
    />
    <div ref={documentRef}>
      {isVisible && (
        <AutoComplete
          isVisible={isVisible}
          suggestions={suggestions}
          handleSuggestionClick={handleSuggestionClick}
        />
      )}
    </div>
    {selectedCountry && (
      <div className="selected-country">
        Your selected country: {selectedCountry}
      </div>
    )}
    {errorMsg && <p className="errorMsg">{errorMsg}</p>}
  </Form.Group>
);
```

我们为输入框添加了 onChange 处理函数 `handleSearch`：

```js
function handleSearch(event) {
  event.preventDefault();
  const { value } = event.target;
  setSearchTerm(value);
  ref.current(value);
}
```

我们将 `searchTerm` state 的值更新为用户输入的内容，接着以用户输入的内容作为参数调用了保存在 `ref.current` 中的函数。

调用 `ref.current` 相当于调用 `processRequest`，我们在其内部实际调用了 API。

在输入框之后，我们还增加了一个指定了 ref 属性的 div，用来展示建议信息：

```js
<div ref={documentRef}>
  {isVisible && (
    <AutoComplete
      isVisible={isVisible}
      suggestions={suggestions}
      handleSuggestionClick={handleSuggestionClick}
    />
  )}
</div>
```

仅当 `isVisible` 为 true 时才展示建议信息，我们在 `processRequest` 函数中访问接口得到数据之后，会再做判断以确定 `isVisible` 的值。

我们将建议数据传入 `AutoComplete` 组件以便展示。

如果点击任意一个建议选项，`handleSuggestionClick` 函数就会执行，它会更新 `selectedCountry` 并隐藏建议信息：

```js
function handleSuggestionClick(countryValue) {
  setSelectedCountry(countryValue);
  setIsVisible(false);
}
```

## 如何使用这个可重用组件

打开 `App.js`，在其中写入以下代码：

```js
import React from 'react';
import { Form } from 'react-bootstrap';
import InputControl from './components/InputControl';

const App = () => {
  return (
    <div className="main">
      <h1>React AutoSuggestion Demo</h1>
      <div className="search-form">
        <Form>
          <InputControl
            name="country"
            label="Enter Country"
            placeholder="Type a country name"
          />
        </Form>
      </div>
    </div>
  );
};

export default App;
```

在终端或命令行中执行以下命令来启动应用：

```js
yarn start
```

![](https://www.freecodecamp.org/news/content/images/2021/08/2.gif)

如你所见，你在建议列表中选中的国家会展示在下方的文本中。

**注意**：我们创建了一个独立的 `InputControl` 组件用来展示输入框及其对应的建议信息。

所以我们可以以如下方式重用 `InputControl` 组件，为另一个输入框展示建议信息：

```js
import React from 'react';
import { Form } from 'react-bootstrap';
import InputControl from './components/InputControl';

const App = () => {
  return (
    <div className="main">
      <h1>React AutoSuggestion Demo</h1>
      <div className="search-form">
        <Form>
          <InputControl
            name="country"
            label="Enter Country"
            placeholder="Type a country name"
          />
          <InputControl
            name="country"
            label="Enter Country"
            placeholder="Type a country name"
          />
        </Form>
      </div>
    </div>
  );
};

export default App;
```

![](https://www.freecodecamp.org/news/content/images/2021/08/3.gif)

如你所见，我们添加了另一个 `InputControl` 组件，因此可以分别处理两个输入框各自的建议信息。

所以假如你想要为另一个输入框展示其它建议的话，可以为 `InputControl` 组件额外传入一个 prop，用来指明应该展示哪种类型的建议信息（需要对 `InputControl` 组件做相应的修改）。

## 总结

正如我们在教程中看到的，通过创建可重用的 `InputControl` 组件并使用 `ref` 来分别管理每个输入框的建议信息，我们创建了真正可重用的自动完成建议组件。

**你可以查看本教程的[源代码](https://github.com/myogeshchavan97/react-autosuggestion-app)和[在线示例](https://react-autosuggestion-app.netlify.app/)。**

## **感谢阅读！**

想要学习 Redux 并用它构建应用吗？请查看这个课程——[掌握 Redux](https://master-redux.yogeshchavan.dev/)。

在这个课程中，你将会学到：

- 基础和进阶的 Redux 知识
- 如何管理复杂的 state，如数组和对象
- 如何使用多个 reducer 管理复杂的 redux state
- 如何调试 Redux 应用
- 如何使用 react-redux 库实现数据响应式
- 如何使用 redux-thunk 库处理异步 API 调用
- 使用 Redux 构建三个不同的应用 

以及更多其他内容。

最终，我们会从头开始构建一个完整的[订餐应用](https://www.youtube.com/watch?v=2zaPDfCKAvM)、通过 stripe 集成支付并发布上线。

[关注我的 LinkedIn](https://www.linkedin.com/in/yogesh-chavan97/)，以便收到 JavaScript、React 及 Node.js 相关内容的更新通知。
