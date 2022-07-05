> -  原文地址：[How to Use Debounce and Throttle in React and Abstract them into Hooks](https://www.freecodecamp.org/news/debounce-and-throttle-in-react-with-hooks/)
> -  原文作者：[Divyanshu Maithani](https://www.freecodecamp.org/news/author/divyanshu/)
> -  译者：
> -  校对者：

![How to Use Debounce and Throttle in React and Abstract them into Hooks](https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/og-image.png)

[Hooks](https://reactjs.org/docs/hooks-intro.html) are a brilliant addition to React. They simplify a lot of logic that previously had to be split up into different lifecycles with `class` components.

They do, however, require a _different_ mental model, [especially for first-timers](https://overreacted.io/making-setinterval-declarative-with-react-hooks/).

> I also recorded a short [video series](https://www.youtube.com/playlist?list=PLMV09mSPNaQlN92-1Dkz5NDlNgGQJEo75) on this article which you may find helpful.

## Debounce and throttle

There are a ton of blog posts written about debounce and throttle so I won't be diving into how to write your own debounce and throttle. For brevity, consider [`debounce`](https://lodash.com/docs/4.17.15#debounce) and [`throttle`](https://lodash.com/docs/4.17.15#throttle) from Lodash.

If you need a quick refresher, both accept a (callback) function and a _delay_ in milliseconds (say `x`) and then both return another function with some special behavior:

-   `debounce`: returns a function that can be called any number of times (possibly in quick successions) but will only invoke the callback **after waiting** for `x` ms from the last call.
-   `throttle`: returns a function that can be called any number of times (possibly in quick succession) but will only invoke the callback at most **once** every `x` ms.

## Usecase

We have a minimal blog editor (here's the [GitHub repo](https://github.com/wtjs/react-debounce-throttle-hooks/)) and we would like to save the blog post to the database 1 second after the user stops typing.

> You may also refer to [this Codesandbox](https://codesandbox.io/s/github/wtjs/react-debounce-throttle-hooks) if you wish to see the final version of the code.

A minimal version of our editor looks like this:

```js
import React, { useState } from 'react';
import debounce from 'lodash.debounce';

function App() {
	const [value, setValue] = useState('');
	const [dbValue, saveToDb] = useState(''); // would be an API call normally

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

Here, `saveToDb` would actually be an API call to the backend. To keep things simple, I'm saving it in state and then rendering as `dbValue`.

Since we only want to perform this save operation once user has stopped typing (after 1 second), this should be _debounced_.

[Here's](https://github.com/wtjs/react-debounce-throttle-hooks/tree/starter) the starter code repo and branch.

## Creating a debounced function

First of all, we need a debounced function that wraps the call to `saveToDb`:

```js
import React, { useState } from 'react';
import debounce from 'lodash.debounce';

function App() {
	const [value, setValue] = useState('');
	const [dbValue, saveToDb] = useState(''); // would be an API call normally

	const handleChange = event => {
		const { value: nextValue } = event.target;
		setValue(nextValue);
		// highlight-starts
		const debouncedSave = debounce(() => saveToDb(nextValue), 1000);
		debouncedSave();
		// highlight-ends
	};

	return <main>{/* Same as before */}</main>;
}
```

But, this doesn't actually work because the function `debouncedSave` is created fresh on each `handleChange` call. This will end up debouncing each keystroke rather than debouncing the entire input value.

## useCallback

[`useCallback`](https://reactjs.org/docs/hooks-reference.html#usecallback) is commonly used for performance optimizations when passing callbacks to child components. But we can use its constraint of memoizing a callback function to ensure the `debouncedSave` references the same debounced function across renders.

> I also wrote [this article](https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/) here on freeCodeCamp if you wish to understand the basics of memoization.

This works as expected:

```js
import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

function App() {
	const [value, setValue] = useState('');
	const [dbValue, saveToDb] = useState(''); // would be an API call normally

	// highlight-starts
	const debouncedSave = useCallback(
		debounce(nextValue => saveToDb(nextValue), 1000),
		[], // will be created only once initially
	);
	// highlight-ends

	const handleChange = event => {
		const { value: nextValue } = event.target;
		setValue(nextValue);
		// Even though handleChange is created on each render and executed
		// it references the same debouncedSave that was created initially
		debouncedSave(nextValue);
	};

	return <main>{/* Same as before */}</main>;
}
```

## useRef

[`useRef`](https://reactjs.org/docs/hooks-reference.html#useref) gives us a mutable object whose `current` property refers to the passed initial value. If we don't change it manually, the value will persist for the entire lifetime of the component.

This is similar to class instance properties (i.e. defining methods and properties on `this`).

This also works as expected:

```js
import React, { useState, useRef } from 'react';
import debounce from 'lodash.debounce';

function App() {
	const [value, setValue] = useState('');
	const [dbValue, saveToDb] = useState(''); // would be an API call normally

	// This remains same across renders
	// highlight-starts
	const debouncedSave = useRef(debounce(nextValue => saveToDb(nextValue), 1000))
		.current;
	// highlight-ends

	const handleChange = event => {
		const { value: nextValue } = event.target;
		setValue(nextValue);
		// Even though handleChange is created on each render and executed
		// it references the same debouncedSave that was created initially
		debouncedSave(nextValue);
	};

	return <main>{/* Same as before */}</main>;
}
```

Continue reading on [my blog](https://divyanshu013.dev/blog/react-debounce-throttle-hooks/) for how to abstract these concepts into custom hooks or check out the [video series](https://www.youtube.com/playlist?list=PLMV09mSPNaQlN92-1Dkz5NDlNgGQJEo75).

You may also follow me on [Twitter](https://twitter.com/divyanshu013) to stay updated on my latest posts. I hope you found this post helpful. :)