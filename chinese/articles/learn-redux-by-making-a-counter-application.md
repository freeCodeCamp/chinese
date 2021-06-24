> -  原文地址：[Learn Redux by Making a Counter Application](https://www.freecodecamp.org/news/learn-redux-by-making-a-counter-application/)
> -  原文作者：[Kayode, Kolade Christopher](https://www.freecodecamp.org/news/author/kayode/)
> -  译者：
> -  校对者：

![Learn Redux by Making a Counter Application](https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/reduxpic.png)

Redux is a state management library for front end applications. Developers commonly use it with React through the react-redux package, but it can also stand alone – so you can use it in any front end framework or library, including Vanilla JavaScript.

Redux can really be intimidating at first. It might take you a while to get used to it and you might end up checking your previous projects to figure out how to get things done.

Redux is also often criticized because it has so much boilerplate to manage application state. And it's true – using Redux in small applications is like shooting an ant with a cannon. There are walkarounds you can use in React, for example, like prop drilling and context, while Vue JS has VueX and Angular has NGRX.

In a React app, the major problem Redux solves is that, instead of managing the state of the app by passing down props (which is unidirectional) the entire state is saved in a globalized store. This gives you the ability to bring it in anywhere you need it. So it's quite multidimensional!

In this article, I teach you how to make a counter application with Redux in a React app, so you'll have enough basic knowledge to start using Redux in your projects.

## How to Set Up the Project

First of all, you need to install the redux and react-redux packages from NPM by running the command `npm i redux react-redux`. Redux is stand-alone and react-redux gives us access to several hooks that make life easier.

## How to Create the Folders and Files

Next, we need to create the actions and reducers. Actions are what the name implies – they are objects that determine what will be done. Reducers, on the other hand, check which action is performed and update the state based on the action. It takes in the state and the action.

I like to create both of them in an actions and reducers folder, then I put them in a folder I name `Redux` for clarity.

In the reducers folder, I create a file named `counterReducer.js`. A lot of people typically create the reducer with a switch statement, but it is also possible to use an if statement. In this example, I will be going with switch.

So, in the counter reducer, I will put in the following snippet of code:

```js
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

Here I hardcoded the state to 1. You can start from 0 if you want.

In the switch statement, I have a case of `INCREMENT` that will increase the counter by 1, `DECREMENT` to decrease the counter by 1, and `RESET` to reset the counter to a state of 0.

It is conventional to use type in the cases in UPPERCASE, but you don't have to – use whichever case you prefer. But you do need to to export the counter reducer in order to use it in another file.

## How to Add Dummy Authentication to the Project

I’m going to take this a little bit further by adding a dummy authentication to the counter app. There, I will show you a secret about me. So, in addition to the `counterReducer`, I’m also going to create an `authReducer` where I will paste in the following code:

```javascript
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

In the `authReducer`, the state is initialized to false. `LOG_IN` will set it back to true and `LOG_OUT` returns it to false to complete the toggling action.

## How to USe the `combineReducer` Helper Function

Since we have more than one reducer, we need to import the `combineReducer` helper function from Redux. This function turns our reducers into a single reducer that we can pass to the `createStore` API. Don't worry about what the `createStor`e API is, for now – I will explain it soon.

So we pass in the reducers like so:  
`combineReducer({reducer-a, reducer-b, reducer-c})`

In the reducer folder, we have to create another file named `index` so we can import the `combineReducer` helper function, alongside the reducers, and combine them inside.

In the index file, I have the following code:

```js
import counter from "./counter";
import auth from "./auth";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter,
  auth,
});
export default allReducers;
```

## How to Create the Global Store

The next thing to do is to create a store. I like to create it in React's `index` file.

To do this, you need to import the `createStore` API from Redux like this: `import { createStore } from "redux";`.

We also have to bring in our reducers that have already been combined and then create the store in their instance.

To bring our counter app functionality to life, we must connect everything we’ve done with Redux to the app.

First of all, we need to import `Provider` from react-redux and wrap it around the entire app in our index file. The provider connects the global state to the app. `Provider` takes in an argument called store in which we must pass the created store.

In the index file, I now have the following snippets of code:

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./redux/reducers";
import { Provider } from "react-redux";

//The created store
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

## How to Extract the Reducers and Set up Actions

The next line of action is to extract the `counterReducer` by importing `useSelector` from `react-redux` so we can access the entire state in it.

To see the secret I said I was going to show you about me, we have to extract `authReducer` too. I will be doing this in the app.js file:

```
import { useSelector } from "react-redux";
```

To start incrementing and decrementing, and also login and log out, we must head back to the actions folder, set up actions to dispatch in the app, and export them as well. Dispatch is the function that helps make our actions a reality.

So in the index file of the actions folder, I have the code below:

```js
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

## How to Import and Dispatch the Actions

Remember I set the `INCREMENT`, `DECREMENT`, `RESET`, `LOG_IN` and `LOG_OUT` actions in the reducer files. We need to bring them into the actions that same way. The object identifier can be in any case.

This means we have to import the actions we set up, and also the `useDispatch` hook from react-redux, so we can dispatch any action we want.

```
import { useDispatch } from "react-redux";

```

Since we can use the `useDispatch` hook and every other thing now, we have to set up the increment, decrement, reset, and login/logout buttons.

Right inside our buttons, we need to set up a click event handler to put in the dispatch. The whole code in the ap.js file now looks like this:

```js
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
            I don't more than 50% of redux. But if you know 50% of it, you're like a Superman.
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

At the end of it all, this is what you'll have:  
![redux](https://www.freecodecamp.org/news/content/images/2021/06/redux.gif)

I hope you can find the secret about me.

## Conclusion

Thank you for reading this tutorial. I hope it gives you a basic understanding of Redux so you can start making something with it on your own.

To connect with me, follow me on [Twitter](http://twitter.com/koladechris), where I spend most of my time engaging in coding and web development-related discussions.