> -  原文地址：[How to Use Debounce and Throttle in React and Abstract them into Hooks](https://www.freecodecamp.org/news/debounce-and-throttle-in-react-with-hooks/)
> -  原文作者：[Divyanshu Maithani](https://www.freecodecamp.org/news/author/divyanshu/)
> -  译者：Papaya HUANG
> -  校对者：

![How to Use Debounce and Throttle in React and Abstract them into Hooks](https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/og-image.png)

[钩子](https://reactjs.org/docs/hooks-intro.html)是对 React 绝妙的补充。在使用`class`组件时需要被分配到不同生命周期的逻辑，因为钩子而简化了不少。

当然使用钩子需要具备 _不一样的_ 思考方式， [特别是对于初次使用者来说](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)。

> 同时，我也推荐一个[视频合集](https://www.youtube.com/playlist?list=PLMV09mSPNaQlN92-1Dkz5NDlNgGQJEo75)，希望对你学习这个知识点有帮助。

## 防抖和节流

已经有许多介绍如何编写防抖和节流的博文，这里我就不赘述了。简单起见，你可以参考 Lodash 的[`debounce`](https://lodash.com/docs/4.17.15#debounce)和[`throttle`](https://lodash.com/docs/4.17.15#throttle)。

我们快速回顾一下，两种函数都接受一个（回调）函数， 一个以毫秒为单位的 _延迟_ (如 `x`)并且返回另一个具有特殊行为的函数：

-   `防抖`: 返回一个可以被多次调用的函数（可能是快速连续调用），但仅在最后一次调用之后再**等待** `x`毫秒后才触发回调。
-   `节流`: 返回一个可以被多次调用的函数（可能是快速连续调用），但仅在每 `x` 毫秒，触发**一次**回调。

## 用例

有一个迷你博客编辑器项目(这里是该项目的[GitHub 仓库](https://github.com/wtjs/react-debounce-throttle-hooks/)) ，在这个编辑器中，我们希望用户停止输出后 1 秒钟将博文添加到数据库中。

> 你可以通过查看[Codesandbox](https://codesandbox.io/s/github/wtjs/react-debounce-throttle-hooks)获取最终代码效果。

编辑器简化代码如下：

```js
import React, { useState } from 'react';
import debounce from 'lodash.debounce';

function App() {
	const [value, setValue] = useState('');
	const [dbValue, saveToDb] = useState(''); // 真实情况下这里应该调用API

	const handleChange = event => {
		setValue(event.target.value);
	};

	return (
		<main>
			<h1>Blog</h1>
			<textarea value={value} onChange={handleChange} rows={5} cols={50} />
			<section className="panels">
				<div>
					<h2>Editor (Client)</h2>
					{value}
				</div>
				<div>
					<h2>Saved (DB)</h2>
					{dbValue}
				</div>
			</section>
		</main>
	);
}
```

在这段代码中`saveToDb`在真实场景应该用于向后端发起 API 调用。在这里我们做简化处理，将数据存入状态（state）然后作为 `dbValue`渲染。

因为我们仅想在用户停止输入后（1 秒后），执行存储行为，所以我们使用的是 _防抖_。

[这里](https://github.com/wtjs/react-debounce-throttle-hooks/tree/starter)是起始代码库和分支。

## 创建一个防抖函数

首先，我们需要一个防抖函数封装对`saveToDb`的调用:

```js
import React, { useState } from 'react';
import debounce from 'lodash.debounce';

function App() {
	const [value, setValue] = useState('');
	const [dbValue, saveToDb] = useState(''); // 真实情况下这里应该调用API

	const handleChange = event => {
		const { value: nextValue } = event.target;
		setValue(nextValue);
		// 防抖函数开始
		const debouncedSave = debounce(() => saveToDb(nextValue), 1000);
		debouncedSave();
		// 防抖函数结束
	};

	return <main>{/* 和之前代码一致 */}</main>;
}
```

但这段代码并不生效，因为 `debouncedSave`在每次 `handleChange` 调用都会被重新创建。这样会对每一次按键的输入的值起作用，而不是整个输入值。

## useCallback

当给子组件传入调用时，[`useCallback`](https://reactjs.org/docs/hooks-reference.html#usecallback)可优化性能。我们可以借助他对回调函数的记忆化，来确保每次渲染`debouncedSave`都指向同一个防抖函数。

> 我在 freeCodeCamp 也写过这篇[文章](https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/)，帮助你理解记忆化的基本知识。

这样代码就奏效了：

```js
import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

function App() {
	const [value, setValue] = useState('');
	const [dbValue, saveToDb] = useState(''); // 真实情况下这里应该调用API

	// 防抖函数开始
	const debouncedSave = useCallback(
		debounce(nextValue => saveToDb(nextValue), 1000),
		[], // 仅在初次渲染调用
	);
	// 防抖函数结束

	const handleChange = event => {
		const { value: nextValue } = event.target;
		setValue(nextValue);
		// 即便每次渲染handleChange都会被创建和执行
		// 每次都指向初次创建的debouncedSave
		debouncedSave(nextValue);
	};

	return <main>{/* 和之前代码一致 */}</main>;
}
```

## useRef

[`useRef`](https://reactjs.org/docs/hooks-reference.html#useref) 提供一个可以修改的对象，对象的`current`属性指向传入的最初值。如果不手动修改，该值会在组件的整个生命周期保持不变。

这和类组件的实例属性类似 (即使用`this`定义的属性和方法)。

这样做也奏效：

```js
import React, { useState, useRef } from 'react';
import debounce from 'lodash.debounce';

function App() {
	const [value, setValue] = useState('');
	const [dbValue, saveToDb] = useState(''); // 真实情况下这里应该调用API

	// 在渲染中保持不变
	// 防抖函数开始
	const debouncedSave = useRef(debounce(nextValue => saveToDb(nextValue), 1000))
		.current;
	// 防抖函数结束

	const handleChange = event => {
		const { value: nextValue } = event.target;
		setValue(nextValue);
		// 即便每次渲染handleChange都会被创建和执行
		// 每次都指向初次创建的debouncedSave
		debouncedSave(nextValue);
	};

	return <main>{/*和之前一样*/}</main>;
}
```

你可以浏览[我的博客](https://divyanshu013.dev/blog/react-debounce-throttle-hooks/) 了解如何自定义钩子来抽象化这些概念，或者点击[这个视频系列](https://www.youtube.com/playlist?list=PLMV09mSPNaQlN92-1Dkz5NDlNgGQJEo75)，了解更多内容。

你可以关注我的 [Twitter](https://twitter.com/divyanshu013) 来获取最新信息，希望这篇文章对你有帮助。 :)
