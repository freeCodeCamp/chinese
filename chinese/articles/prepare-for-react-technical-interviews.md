> -  原文地址：[How to Prepare for React Interviews – Front-End Technical Interview Guide](https://www.freecodecamp.org/news/prepare-for-react-technical-interviews/)
> -  原文作者：[Manu Arora](https://www.freecodecamp.org/news/author/manu/)
> -  译者：Papaya HUANG
> -  校对者：

![How to Prepare for React Interviews – Front-End Technical Interview Guide](https://www.freecodecamp.org/news/content/images/size/w2000/2022/08/Build-a-React-Code-Editor-That-Compiles-and-Executes-in-10--Languages--2-.png)

A front-end technical interview is an opportunity for a potential employer to assess your skills and knowledge in web development.  
  
The interviewer will ask you questions about your experience and skills in HTML, CSS, and JavaScript. They'll also likely ask you some framework specific questions about React, Angular, Vue, or whatever framework they use.  
  
They may also give you a coding challenge to test your abilities in a particular domain.  
  
Today, we are going to look at the most common problems asked in a front-end technical interview round, focusing on React and JavaScript.

## What Interviewers Are Looking For

When interviewing for a front-end web development position, be prepared to discuss your skills and experience with various programming languages, tools, and frameworks.  
  
Interviewers will also want to see that you have a strong understanding of the latest trends and technologies in web development.  
  
Be prepared to talk about your past projects and how you approached solving various challenges.  
  
Be sure to showcase your problem-solving skills by discussing how you tackled various challenges during your development process.  
  
Finally, don’t forget to highlight your strengths.

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

## Most Commonly Asked Questions in a Front-End Technical Interview

Front-end technical interview problems are pretty straightforward and common. If you have been actively coding for at least 6 months, you will be familiar with most of the concepts that are asked about.

Once you practice the right questions with a time based approach, you should be able to clear the interviews.

Let's look at the most common questions asked.

## Map, ForEach, Filter and Reduce

The most commonly asked questions (generally at the start of the interviews) are about `array methods`. The interviewer wants to asses how comfortable you are with array manipulation.

#### The `.map()` method

The `.map()` methods iterates over an array, computes whatever logic you write inside the map body, and returns a **NEW** array.

```javascript
let arr = [
  { id: 1, age: 12, name: 'Manu' },
  { id: 2, age: 24, name: 'Quincy' },
  { id: 3, age: 22, name: 'Abbey' },
]

let names = arr.map((el) => el.name)
console.log(names)
// Output: [ 'Manu', 'Quincy', 'Abbey' ]
```

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

#### The `.forEach()` method

ForEach is similar to `.map()` but it DOES NOT return an array.

```javascript
let arr = [
  { id: 1, age: 12, name: 'Manu' },
  { id: 2, age: 24, name: 'Quincy' },
  { id: 3, age: 22, name: 'Abbey' },
]

arr.forEach((el) => el.age+= 10);
console.log(arr);

// Output: 22 32 44
```

#### The `.filter()` method

The filter method, as the name suggests, helps in filtering out the values inside of an array based on a Boolean condition.

If the boolean condition is true, the result will be returned and added in the final array. If not, it will be skipped. Filter also returns an array, just like the `.map()` method.

```javascript
let arr = [
  { id: 1, age: 12, name: 'Manu' },
  { id: 2, age: 24, name: 'Quincy' },
  { id: 3, age: 22, name: 'Abbey' },
]

let tooYoung = arr.filter((el) => el.age <= 14);
console.log(tooYoung);

// Output: [ { id: 1, age: 12, name: 'Manu' } ]
```

#### The `.reduce()` method

In simple terms, the `.reduce()` method takes into account a `previous value` , current value and an `accumulator`.

The return type of the `.reduce()` method is always a single value. It is useful when you want to process all the values of the array and want to derive some accumulated result.

```javascript
// Calculates the total age of all the three persons.
let arr = [
  { id: 1, age: 12, name: 'Manu' },
  { id: 2, age: 24, name: 'Quincy' },
  { id: 3, age: 22, name: 'Abbey' },
]

let totalAge = arr.reduce((acc, currentObj) => acc + currentObj.age, 0)
console.log(totalAge)

// Output: 57
```

Here, the `currentObj` is the object that is being iterated over. Also, the `acc` value stores the result and is outputted finally into the totalAge array.

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

## How to Implement Polyfills

Another important interview question is [How to implement polyfills](https://www.algochurn.com/frontend/polyfills) of the map and filter array methods.

A polyfill is a code snippet (in terms of JavaScript web architecture) used for modern world functionalities on older browsers that do not implement it natively.

Simply put, a polyfill is a custom implementation of native JavaScript functions. Sort of a create your own `.map()` or `.filter()` method.

#### How to use the `.map()` polyfill

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

the `myMap` method takes in a `callback` that gets executed inside the `myMap` body. We basically have a native `for` loop inside the myMap body, which iterates over the `this.length`. This is nothing but the length of the array through which the `myMap` function is called.

Since the syntax of `map()` is `arr.map(currentElement, index, array)`, and the `myMap()` function takes into account exactly that.

Also since `map()` returns a new array, we create an empty array and push the results into it. In the end we return it.

#### How to use the `.filter()` polyfill

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

`.filter()` is very similar to `.map()` in terms of implementation. But since `filter` filters out the results based on a boolean value, we have an additional `if()` condition to filter out results and conditionally push inside the array.

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

## What is Debouncing?

This is a famous interview question with a lot of practical real world usage and implementations.

`Debouncing` is a method of preventing a function from being invoked too often, and instead waiting a certain amount of time until it was last called before invoking it.  
  
Think of Amazon in this case. Whenever you type anything in the search bar, when you stop for AT LEAST 0.5 seconds, then the results are fetched. This is exactly what debouncing is.

In order to implement debouncing, let's take an example: Generating a username for a user based on the user input.

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

Here, we are trying to create a custom username based on the user input. Now if the user starts typing, we don't want to immediately create it, but actually wait for 300 milliseconds before creating the username. We are trying to mimic an API call here, so assume the user types anything and it has to make an API call to the backend and fetch a response.

The `debounce()` function takes in two values, `cb` and `delay` . `cb` is the callback function that gets executed when the timer runs out.  
  
We use `setTimeout()` to create a timeout timer, which means the function inside the setTimeout body will be executed after a certain amount of time.

The `apply` method is used to call the callback function with the `object` that it was initially called with, applying the arguments and context to it.

## What are Closures?

According to the [mdn docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures),

> A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

To simplify this, let's take an example and understand how closures work.

```javascript
function start() {
  var name = "Manu"; // name is a local variable created by start()
  function displayName() {
    // displayName() is the inner function, a `closure`
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
start(); // "Manu" alert box is displayed
```

Here, a closure is formed between the `start()` and the `displayName()` function. The `displayName()` function has access to the `name` variable present in the `start()` function.

In simple terms, the inner function will know its surroundings (the lexical environment).

I have written a whole blog on [how to clear JavaScript interviews](https://manuarora.in/blog/ace-the-javascript-interview#closures). Have a look at that if you want to know more about in depth JavaScript interview process.

## React Hooks

The most popular questions asked in a front-end coding interview when it comes to React hooks are:

1.  `useState()`
2.  `useReducer()`
3.  `useEffect()`
4.  `useRef()`
5.  Custom Hooks and their implementation.

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

### How the `useState()` hook works

To manage a state inside of your component, the `useState()` hook is your go-to hook.  
  
Let's take an example and understand:

```javscript
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

The `useState()` methods gives us two values, the `state` variable and `a function to change` that state variable.

In the above code snippet, we are creating a `title` state to store the title of the page. The initial state is passed as `freeCodeCamp`.

On button click, we can use the `setTitle()` method to change the state variable to `FCC`.

`useState()` method is your go-to resource for state management in a functional component.

### How the `useReducer()` hook works

In simple terms, `useReducer()` is the cool way of managing state in your application. It is more structured and helps you maintain complex state in your application.

Let's take an example to understand the useReducer hook:

```javscript
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

The `useReducer()` hook takes two parameters, the `reducer` function and an `initialState` value.  
  
The reducer function is a `switch-case` based implementation that returns the final state value that `useReduer()` internally uses to supply back to the component.

The values returned from the `useReducer()` function are `state` and `dispatch`. The `state` is the actual `state` value that can be used inside of the component. In our case, the state has two values: `title and count`. This title and count can be manipulated using the `dispatch()` method which is returned by the `useReducer()` method.

In the above case, to change the title, we have written a case of `change-title` inside the reducer function. This can be triggered with the help of the `dispatch({ type: "change-title" })` function. This will trigger the change title function and it will change the state of the `title` attribute.  
  
Similarly, the same happens for the `count` part that is there in the application.  
  
Like I said earlier, it is a cool way of implementing state inside your application. 😉

### How the `useEffect()` hook works

Think of it this way: if you want to have a `side effect` to a state variable that changes, you can use the `useEffect()` hook to trigger it.  
  
For example, let's say if the `input value` of your input box changes, and you want to call an API after it has changed. You can write the logic of the `API handle` in the `useEffect()` block.

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

Here, we have an `input box` that has a state value of `value` attached to it. This value will change when the user tries to input anything.  
  
Once the value has been updated and has been rendered, the `useEffect()` block will kick in and the `console` statement will be triggered, outputting the latest state value which is there.  
  
Here, one good use case of the `useEffect()` can be to implement `API calls`. Let's assume you want to call an API with the input field value. The useEffect function block will be the best way to do it.

Another part of this is the `dependency array` which is the second argument to the `useEffect()` hook. In our case, we mentioned `[value]` as the second argument.

This basically means that EVERY TIME THE `value` CHANGES, the function inside the useEffect gets triggered. If you don't pass anything in the `dependency array`, the function block gets triggered once.

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

### How the `useRef()` hook works

The useRef hook gives us the ability to mutate the DOM (but this is not the only implication of useRef).

According to the docs:

> useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

In simple terms, we are going to useRef if we want to persist the value of something for the entire component lifecycle. The basic implementation of useRef comes with DOM elements. Let's take an example:

```javascript
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
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

Here, we are assigning a `ref` property to the `input` block. This will be associated with the `inputEl` reference that we created.

Now this `input` element can be manipulated however we want. We can modify the `style` attribute and make it beautiful, we can take the `value` property to see what is being help by the input element as the value, and so on.

In the above example, when we click the button, the `input` is focused and we can immediately start typing. We can do this with the help of `inputEl.current.focus()` – essentially the `focus()` method present on the `current` object.

### What are custom hooks?

One of the most commonly asked questions that I've seen in front-end interview rounds is to [create a custom hook for keyboard events](https://www.algochurn.com/frontend/usekeypress-custom-hook).

We saw many different hooks, but the interviewer might ask you to create a hook of your own. This might be challenging for some but with some practice, it becomes much easier.

Let's understand what a `Hook` is:

The basic usage of a custom hook is to extract a function's logic into its own component.

Imaging what will happen if you have to `listen for an enter press` inside of each of your components. Instead of writing the logic for `listening` again and again, we can extract the logic into a component of its own and use it wherever we want (just like we use `useState()` or `useEffect()`).

There are a few conditions for a function to be called a `Hook`:

1.  It should always start with the `use` keyword.
2.  We can decide what it takes as arguments, and what, if anything, it should return.

```javascript
// Custom Hook: useAvailable
function useAvailabe(resource) {
  const [isAvailable, setIsAvailable] = useState(null);

  // ...

  return isAvailable;
}

// Usage:
  const isAvailable = useAvailable(cpu);
```

Here, no matter how many times we call `useState` and `useEffects` inside the custom hook, they will be completely independent from the function where we use the custom hook.  
  
Let's take an example of creating a custom hook for `storing local storage values`.

### How to create a custom hook – useLocalStorage example

The useLocalStorage custom hook is a way to persist data into the local storage. Get and set values inside the local storage using `key` and `value` pairs so that whenever the user comes back to your web app, they see the same result they used earlier.

The below implementation is of a simple `select` tag value that, once changed, persists the data into local storage.

`useLocalStorage.js`

```javascript
// Use Local Storage Custom Hook
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

Here, the `useLocalStorage` hook takes in two parameters, the `local storage key name` to store, and a `default` value that has to be there.

The hook returns two values: the `local storage value` of the key that you're using and a way to `change that key value` by giving us a `setter method`. In this case, the `setStoredValue` method.

In the `useLocalStorage.js` file, we are trying to first `GET` the local storage value with that key using `localStorage.getItem()` method. If that exists, we are setting the value. If found, we `JSON.parse()` the value and return it. Otherwise, initialValue which was provided is set as the default value.  
  
The `setLocalStorage()` function takes into account whether the passed value is a function or a simple variable value. Also it takes care of setting the value of local storage using `localStorage.setItem()` function.

ADVERTISEMENT window.addEventListener('load', () => { if (notAuthenticated) (adsbygoogle = window.adsbygoogle || \[\]).push({}); });

## How to Stand Out as a Developer by Creating Side Projects

The thing that has always worked for me and helped me stand out is my side projects that I've built.  
  
In my opinion, you don't have to build 10 basic cookie cutter side projects. Instead, try building one or two really good projects where you get to implement all the concepts of React/HTML/CSS/JavaScript and everything that you've been learning.  
  
Assume the interviewer has 14 interviews in a week and has to review the résumés of 14 candidates. They'll be more likely interested in your profile because you have created a `link shortener website that charges $1 after every 1000 link visits` instead of an Amazon / Netflix clone.

Again, there's nothing wrong with creating clones and practicing your skills. But it's always good to have at least 1 unique project that helps you stand out from the crowd.  
  
Also, creating side projects will help you upskill as a developer. It is not likely possible to know everything beforehand when creating a project from scratch. Along the way, you'll have to learn many different skills and get good at that.

## Practice, Practice, Practice.

There's a famous saying that goes like this:

> Every interview is a mock interview for you till you get your first front-end job.  
>   
> \- William Shakespeare.
> 
> — Manu Arora (@mannupaaji) [September 4, 2022](https://twitter.com/mannupaaji/status/1566350128767987712?ref_src=twsrc%5Etfw)

and this is true to a great extent.

I myself have failed 100s of times before landing my first job. It's the constant feedback and iterations that you have to make in order to get what you want.  
  
In our case, getting a front-end job becomes easy when:

-   You have in depth knowledge of your skills – React in this case (along with HTML, CSS, and JS).
-   You have a set of projects to showcase, making you stand out.
-   You're willing to put in the time and the effort to learn more and challenge yourself.
-   You read the freeCodeCamp blog regularly and practice questions there (😉)

## **Conclusion**

There are a lot of questions to practice for a machine-coding round. The interviewer can ask different sets of questions to test your skills.  
  
You can use [**Algochurn**](https://algochurn.com) to practice the most popular [JavaScript interview questions](https://www.algochurn.com/blog/top-5-react-front-end-questions-to-practice-before-a-technical-interview-round), [React Interview Questions](https://algochurn.com/frontend), and [algorithmic questions](https://algochurn.com/problems) asked in a front-end technical interview round along with their solutions and approaches.

If you have any questions, please reach out to me via [Twitter(@mannupaaji)](https://twitter.com/mannupaaji) and/or my [website(manuarora.in)](https://manuarora.in)

Good luck and Happy Coding! 👑🫡
