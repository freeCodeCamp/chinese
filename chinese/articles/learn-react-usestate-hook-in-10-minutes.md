> -  原文地址：[React Hooks for Beginners – Learn to Use the useState Hook in 10 Minutes](https://www.freecodecamp.org/news/learn-react-usestate-hook-in-10-minutes/)
> -  原文作者：[Eduardo Vedes](https://www.freecodecamp.org/news/author/evedes/)
> -  译者：
> -  校对者：

![React Hooks for Beginners – Learn to Use the useState Hook in 10 Minutes](https://www.freecodecamp.org/news/content/images/size/w2000/2021/09/philipp-katzenberger-jVx8JaO2Ddc-unsplash.jpg)

Hey everyone 🌈 I haven't written about handling state in React for a long time. The last time was [in this article](https://www.freecodecamp.org/news/get-pro-with-react-setstate-in-10-minutes-d38251d1c781/), four years ago, and it seems like it helped a lot of you.

I received tons of views and amazing feedback, so thanks a lot – you really rock! 🎸

Well, a lot of time has passed since then. Hooks landed in React since version v16.8 (in 2019) and there's a lot to keep up with when using state in React.

Are you learning about state and want to become a pro with the **useState** hook?

Cool, you've came to the right place! Grab a coffee (or tea), fasten your seatbelts, and let's go!

By the way – if you're looking for how to use setState (in class components), then I recommend that you check out my former article ["How to become a pro with React setState() in 10 minutes"](https://www.freecodecamp.org/news/get-pro-with-react-setstate-in-10-minutes-d38251d1c781/).

## What is a React Hook?

A hook is a special function that lets you **"hook into"** various React features. Imagine a function that returns an array with two values:

-   **The first value:** a variable with the state.
-   **The second value:** a variable with an handler (a function to change the current state).

That's it, easy-peasy. 🥞

Remember that in JavaScript **"values are functions, and functions are values"**. I learned this back in 2017 with [**MPJ**](https://www.youtube.com/c/funfunfunction), one of my favourite developers and YouTubers. Thanks for everything MPJ!  

In case this confused you a bit, here's an example:

![01](https://www.freecodecamp.org/news/content/images/2022/06/01.png)

values are functions, and functions are values

Let's see what's happening here:

-   In **a**, you store a number. I mean, you assign the value **1** (which is a number) to a variable called **a**.
-   In **b**, you store the result (value) of evaluating an expression.
-   In **c** you store a function. You store a non-executed function, which is stored as a value, and ready to be executed anytime.
-   In **d** we assign the result of evaluating **c**.

Makes sense? Do you get the gist? Yeah, **functions are values, and values are functions**! That's all you need to know about it for now.

**useState**, in particular, lets you add React state to functional components (components that are declared as a function, and not as a class).

In truth, state is kept inside the hook, but is accessible from the component where you "call" the hook.

## The Rules of React Hooks

Besides the fact that Hooks are JavaScript functions, there are some rules to follow while using them:

### Only Call Hooks at the Top Level

Don't call hooks inside loops, conditions, or nested functions. Always use hooks at the top level of your React function (component), before any early returns.

The reason behind this is that hooks must be called in the same order each time a component renders. This is what allows React to correctly preserve the state of hooks between multiple useState and useEffect calls.

#### Only Call Hooks from React Functions

This means you can call hooks from React functions (components) or from custom hooks, but not from regular JavaScript functions.

There's this useful plugin [here](https://www.npmjs.com/package/eslint-plugin-react-hooks ) that enforces the rules of hooks. It's a very helpful one so make sure you try it out.

## The Anatomy of the useState Hook

To use the useState hook, you need to know a few things.

💡You can check the figure below to better understand what I'll explain here.

1.  You must import it from the React library.
2.  You must invoke it inside a React component

```javascript
const [state, setState] = useState(initialValue)
```

Not sure if you get the destructuring, so for those who didn't catch it at first glance:

I could do something like this:

```javascript
const array = useState(initialValue)
```

And then I could use the state, inside position 0, as array\[0\], and the handler to setState, inside position 1, as array\[1\].

It happens to be much more declarative to destructure the array, as we know its first and second position values, and we know they correspond to the state value and to a handler to change it.

```javascript
const [first, second] = useState(initialValue)
```

Yeah, we could to this. But we can call anything to first and second. The only rule is that these variables correspond to the first and second positions of the array returned by the **useState** function (hook).

```javascript
const [state, setState] = useState(initialValue)
const [counter, setCounter] = useState(initialCount)
const [something, setSomething] = useState(initialSomething)
```

If you're not familiar with the destructuring assignment syntax, feel free to pause reading and take a sneak peak into [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) or [read this helpful tutorial](https://www.freecodecamp.org/news/destructuring-patterns-javascript-arrays-and-objects/).

Go ahead – I'll wait! (_Edo sips a bit of_ ☕)

3\.  You can then freely render state, or call setState to update your state value.

And here's the simplest fully functional example you can have:

![carbon](https://www.freecodecamp.org/news/content/images/2022/06/carbon.png)

The Anatomy of the useState hook

## When to Use the useState Hook

To understand when to use this hook, we need to start by learning when we need state.

At first glance, we think that when we need a variable that changes over time, we need to keep it in state. But this is not true, most of the time. I mean, if your variable can be derived from other data, then you don't need state.

### State Example 1:

A theme color, that can be light or dark, according to the hour, can be derived from system data.

We can simply get the time (date) from the JS Date function. So we don't need state here, right? This is a const you can declare with an expression or function that must be evaluated.

### State Example 2:

A modal toggle (to show/hide a modal).

Modal toggle can be true or false, and it's triggered when the user clicks a button. So, in this case we really need state, because we can't derive this kind of information – it only depends on "when and if" the user triggers the event or not.

Be mindful of this difference – between what can be derived and what depends on the user.

You'll want to use the **useState** hook when you need to store input from a user.

💡As a rule of thumb, you should only use state to keep this kind of information – that requires the user to input data, or trigger events.

Another very used example is **form** data. Almost every app or website needs to collect info from the user. And to do that it's pretty usual (or mandatory) to have a form.

Form data must be stored in state, at least until it's persisted to a database. But it can also be retrieved from a database, and made editable again.

Cool, let's continue.

## How to Use Multiple State Variables in React

So, if we need to handle multiple states, the best and recommended first approach is to handle them separately, like this:

![carbon--1-](https://www.freecodecamp.org/news/content/images/2022/06/carbon--1-.png)

Dogs and Cats Counter (Handling Multiple State Variables)

There's nothing wrong with doing this, in spite of the fact that it seems to be primitive. It's a good and linear approach as we keep working with JavaScript primitives (in this case numbers).

You can also mix state in one object:

![carbon--2-](https://www.freecodecamp.org/news/content/images/2022/06/carbon--2-.png)

This case becomes a bit more complex. We've initialized an object, instead of a primitive value. When we call setPets, we must be aware that we need to spread the existing pets object, and then add the change, otherwise we'll lose it.

With the old setState API this wasn't mandatory – it would understand that you wanted to update a key of the state object. But nowadays it doesn't, and I like it. Now it's more declarative and more of a fundamental concept in JavaScript.

If by any chance you're not familiar with the spread syntax, feel free to check it out [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) or [read this helpful tutorial](https://www.freecodecamp.org/news/javascript-object-destructuring-spread-operator-rest-parameter/).

## State Asynchrony

Beware that changing / mutating state is an asynchronous operation.

Let's see an evidence:

![carbon--3-](https://www.freecodecamp.org/news/content/images/2022/06/carbon--3-.png)

State is asynchronous (it's batched and updated with a delay)

So, I've updated our initial dogs example a bit. This time I've created a **handleDogsCount** function to show it to you.

Inside the handleDogsCount I call **setDogs** with the new value.

What happens if I need to use the state value immediately for another operation?

Right, the state wasn't updated yet. The best way to approach an immediate operation is to use the value passed to the handleDogsCount function, and – forgetting the dogs state value for now – knowing before hand (this is tricky, but it is what it is) that the value wasn't updated on time.

## How to Mutate State in a Functional Way

Okay, now we know that state doesn't change immediately. And there's another question related to it. What would happen if you could click the More button 1M times per second?

Possibly, at the end of the 1M clicks, the counter would be 999\_998 (or less), and not 1\_000\_000 as expected.

To avoid this happening, we can set state in a functional way. We'd grab the value of the previous state, so that React can properly batch all the requests and update state linearly. This way we wouldn't lose information in the middle.

To do that you could simply do the following:

![carbon--4-](https://www.freecodecamp.org/news/content/images/2022/06/carbon--4-.png)

Mutating state in a functional way

Okay, cool. Now we're sure React won't miss a thing while handling our 1M requests to mutate state.

Instead of grabbing the dogs variable to add or subtract one, we rely on the previousState that is exposed inside the useState setState handler (in this case the setDogs function).

Beware that objects and arrays are compared by reference, so complex state should be tamed properly in the dependency arrays of other hooks, such as, **useEffect**. We'll talk about it later, in another article!

If you're new to JavaScript, let me give you a spoiler about what I'm talking about:

![carbon--5-](https://www.freecodecamp.org/news/content/images/2022/06/carbon--5-.png)

Comparison by ref

As you see, **c** is not strictly equal to **d**. Yes, go ahead and try it! It happens that JavaScript compares complex objects (all that aren't [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)) by reference, not by value.

If I stringify it, it means I'm comparing strings. And because they're primitive, they're strictly equal (compared by value).

## How to Initialize State as a Function

If you need to initialize state with an expensive computation, then it's better to initialize it with a function, and not a value.

```javascript
const [ dogs, setDogs] = useState(() => expensiveComputation())
```

This means we're lazily initializing the variable. The initial value will be assigned only on the initial render (again, if it's a function).

In subsequent renders (due to change of state in the component or a parent component), the argument of the useState hook will be ignored and the current value will be retrieved.

## Conclusion

So, it seems we've reached the end of this journey.

You've learned what a hook is, the rules of hooks, how useState works, its anatomy, and how can you handle multiple states.

You've also learned some pitfalls (such as handling state objects, or that state is asynchronous), and some tricks to improve performance, such as initializing state as a function to avoid being constantly evaluating that computation.

Hope you have enjoyed this article about the **useState** hook, or simply the "state hook".

## Last But Not Least

I'm [Edo](https://eduardovedes.com/). I'm a freeCodeCamp advocate who enjoys helping people change careers into Software Engineering.

If you're changing careers, or thinking about doing a career change, it might inspire you to read a bit of my [story](https://www.freecodecamp.org/news/from-civil-engineer-to-web-developer-with-freecodecamp/), which was published here on the freeCodeCamp publication.

You might also be interested in ["How to Become a Junior Software Engineer in 6 months"](https://www.freecodecamp.org/news/how-to-become-a-junior-software-engineer-in-6-months/).

If you enjoyed this article, please follow me on [Twitter](https://twitter.com/eduardovedes) and just reach out so that we can chat!

Thanks everyone 🌈, you rock!

Edo

### For more about React Hooks...

1.  [React Documentation](https://reactjs.org/docs/hooks-state.html)